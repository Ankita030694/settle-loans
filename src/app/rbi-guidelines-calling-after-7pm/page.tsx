import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "RBI Guidelines: Recovery Agent Calling Hours 2025 | No Calls After 7 PM",
  description: "Understand RBI guidelines for recovery agent calling hours in India. Learn your rights, including the 8 AM to 7 PM rule, and how to report harassment to the RBI Ombudsman.",
  alternates: {
    canonical: "https://settleloans.in/rbi-guidelines-calling-after-7pm",
  },
};

export default function RBIGuidelinesCallingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/rbi-guidelines-calling-after-7pm#webpage",
        "url": "https://settleloans.in/rbi-guidelines-calling-after-7pm",
        "name": "RBI Guidelines: Recovery Agent Calling Hours 2025 | No Calls After 7 PM",
        "description": "Comprehensive guide to RBI regulations on loan recovery calling times, borrower rights, and harassment protections in India.",
        "breadcrumb": { "@id": "https://settleloans.in/rbi-guidelines-calling-after-7pm#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/rbi-guidelines-calling-after-7pm#breadcrumb",
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
            "name": "RBI Guidelines: Calling After 7 PM",
            "item": "https://settleloans.in/rbi-guidelines-calling-after-7pm"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/rbi-guidelines-calling-after-7pm#article",
        "headline": "RBI Guidelines on Loan Recovery Calling Hours: Your Rights Explained",
        "description": "Detailed explanation of RBI rules prohibiting recovery calls after 7 PM and before 8 AM, and legal options for borrowers facing harassment.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoans Legal Research Team"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": {
            "@type": "ImageObject",
            "url": "https://settleloans.in/logo/logo.svg"
          }
        },
        "datePublished": "2024-03-28",
        "dateModified": "2024-03-28",
        "mainEntityOfPage": { "@id": "https://settleloans.in/rbi-guidelines-calling-after-7pm#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/rbi-guidelines-calling-after-7pm#product",
        "name": "Loan Recovery Legal Protection Services",
        "description": "Expert legal guidance and negotiation services to protect borrowers from aggressive recovery practices.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1580"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rajesh V." },
            "datePublished": "2024-01-10",
            "reviewBody": "SettleLoans helped me stop the 10 PM calls from recovery agents. Their knowledge of RBI rules is life saving.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Kavita S." },
            "datePublished": "2024-02-22",
            "reviewBody": "I was being harassed at 7 AM. SettleLoans filed a complaint for me, and the calls stopped immediately.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/rbi-guidelines-calling-after-7pm#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are the allowed hours for recovery agent calls in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "As per RBI guidelines, recovery agents can only call or visit borrowers between 8:00 AM and 7:00 PM. Calls outside this timeframe are strictly prohibited."
            }
          },
          {
            "@type": "Question",
            "name": "Can a recovery agent call me on a Sunday or public holiday?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The 8 AM to 7 PM rule applies every day. While calling on holidays is not explicitly banned, agents must respect the borrower's privacy and avoid calls during sensitive times or family festivals."
            }
          },
          {
            "@type": "Question",
            "name": "What should I do if an agent calls me at 9 PM?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Do not engage with the agent. Record the call, note the time and the name of the agency, and file a formal complaint with the bank's grievance officer immediately."
            }
          },
          {
            "@type": "Question",
            "name": "Is it legal for recovery agents to use abusive language?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. RBI guidelines strictly prohibit the use of abusive, threatening, or intimidating language. Any form of verbal or physical harassment is a punishable offense for the bank."
            }
          },
          {
            "@type": "Question",
            "name": "Can I request an agent to call at a specific time?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Borrowers have the right to request that calls be restricted to certain hours within the 8 AM to 7 PM window for their convenience. Banks should generally honor such requests."
            }
          },
          {
            "@type": "Question",
            "name": "Can an agent contact my neighbors or workplace?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Recovery agents are strictly prohibited from contacting your relatives, colleagues, or neighbors to discuss your debt. This is a severe violation of your financial privacy."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if a bank violates RBI recovery guidelines?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Banks and NBFCs can face heavy fines, suspension of their recovery mandates, and instructions to compensate the borrower. The RBI takes these violations very seriously to maintain consumer trust."
            }
          },
          {
            "@type": "Question",
            "name": "Who is the RBI Ombudsman?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The RBI Ombudsman is a high level official appointed by the RBI to resolve individual complaints against financial institutions regarding service deficiencies, including recovery harassment."
            }
          },
          {
            "@type": "Question",
            "name": "Do these rules apply to digital lending apps too?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. All RBI regulated entities, including digital lenders, must follow the same Fair Practice Code. Unregulated apps are illegal and should be reported to the police/cyber cell."
            }
          },
          {
            "@type": "Question",
            "name": "Can a recovery agent visit my home for an EMI default?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, but only between 8 AM and 7 PM. They must carry their ID card, an authorization letter from the bank, and must behave professionally without causing a scene in public."
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
              Financial Rights & Protection
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight text-balance">
              RBI Guidelines: Recovery Agent <br className="hidden md:block" /> Calling Hours (8 AM – 7 PM)
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
              Are you being hounded by collection calls in the middle of the night? Learn about the strict RBI rules that protect you from recovery harassment after 7 PM.
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
                  RBI Guidelines: Calling After 7 PM
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">

          {/* Left Column: TOC */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <TableOfContents
              items={[
                { id: "intro-rbi-rules", title: "Introduction to RBI Rules" },
                { id: "calling-hour-limit", title: "The 8 AM – 7 PM Limit" },
                { id: "defining-harassment", title: "Defining Recovery Harassment" },
                { id: "privacy-protections", title: "Workplace & Family Privacy" },
                { id: "borrower-rights", title: "Rights of a Defaulting Borrower" },
                { id: "identifying-authorized", title: "Identifying Authorized Agents" },
                { id: "collecting-evidence", title: "How to Collect Evidence" },
                { id: "complaint-process", title: "Step-by-Step Complaint Guide" },
                { id: "rbi-ombudsman-role", title: "Escalating to RBI Ombudsman" },
                { id: "digital-app-guidelines", title: "Rules for Digital Lending Apps" },
                { id: "consequences-for-banks", title: "Consequences for Banks" },
                { id: "legal-remedies-india", title: "Other Legal Remedies in India" },
                { id: "settlement-as-solution", title: "Settlement: Reclaiming Peace" },
                { id: "settleloans-protection", title: "SettleLoans: Your Shield" },
                { id: "success-stories", title: "Real Life Protection Stories" },
                { id: "future-of-recovery", title: "The Road to 2026 Guidelines" },
                { id: "faqs", title: "Common Questions" }
              ]}
            />
          </aside>

          {/* Middle Column: Main Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">

            <section id="intro-rbi-rules" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Introduction: <span className="text-black">The Shield Against Aggressive Debt Collection</span>
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 z-0"></div>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6 italic font-medium">
                  Few things are more stressful than the constant ring of a phone when you are already struggling with financial debt. However, in India, the Reserve Bank of India (RBI) has drawn a very clear line in the sand regarding when a bank or collection agency is allowed to contact you.
                </p>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                  One of the most critical rules in the RBI Fair Practice Code is the restriction on calling hours. It does not matter how much money you owe or how long your payment has been delayed; the law remains the same. No recovery agent has the right to disturb your peace during the night or early morning. This guide is designed to empower you with the legal knowledge to stop harassment and reclaim your life.
                </p>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 font-bold text-[#1F5EFF]">
                  You are a borrower, not a criminal. Let's explore the rules that protect your human dignity.
                </p>
              </div>
            </section>

            <section id="calling-hour-limit" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                The 8:00 AM – 7:00 PM Limit: The Immutable Law
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The most fundamental rule that every borrower must know is the "Time Limit rule." As per the RBI Master Circular on Loan Recovery, banks and NBFCs are strictly prohibited from contacting a borrower outside the window of 8:00 AM to 7:00 PM. This rule applies to phone calls, SMS messages, and physical visits to your home or office.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Why was this rule created? The RBI recognizes that financial distress is a private family matter. Calling a person late at night or very early in the morning is a form of psychological pressure designed to catch the borrower off guard and cause panic. This is considered an unethical practice that violates the basic right to privacy and peace in one's own home.
              </p>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-8">
                <h3 className="text-xl font-bold mb-6 italic text-center">Important Definitions of the Time Rule:</h3>
                <ul className="grid md:grid-cols-2 gap-4 text-sm font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                    8:00 AM: Earliest allowed contact time.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                    7:00 PM: Latest allowed contact time.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                    Applicable Daily: Including Saturdays and holidays.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                    Universal Rule: Applies to all Regulated Entities.
                  </li>
                </ul>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                If you get a call at 7:15 PM, it is a technical violation. If you get a call at 9:00 PM, it is severe harassment. In the eyes of the RBI, any communication after 7:00 PM is a sign of an aggressive collection strategy that warrants disciplinary action against the lender.
              </p>
            </section>

            <section id="defining-harassment" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                Defining Recovery Harassment: More Than Just Bad Timing
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                While timing is a major factor, the RBI also defines "how" an agent should speak to you. Even if they call at 10:00 AM, their behavior can still constitute harassment. The RBI’s guidelines for recovery agents focus on maintaining professional decorum at all times.
              </p>
              <div className="bg-red-50 p-8 rounded-2xl border border-red-100 mb-8">
                <h3 className="text-xl font-bold text-red-800 mb-4">Examples of Prohibited Behavior:</h3>
                <ul className="space-y-4 text-red-900/80">
                  <li className="flex items-start gap-3 italic">
                    <span>✘</span>
                    <strong>Verbal Abuse:</strong> Using foul, insulting, or disrespectful language.
                  </li>
                  <li className="flex items-start gap-3 italic">
                    <span>✘</span>
                    <strong>Threats:</strong> Threatening physical violence, kidnapping, or damage to property.
                  </li>
                  <li className="flex items-start gap-3 italic">
                    <span>✘</span>
                    <strong>Intimidation:</strong> Claiming to be a police officer or a lawyer to scare the borrower.
                  </li>
                  <li className="flex items-start gap-3 italic">
                    <span>✘</span>
                    <strong>Excessive Calling:</strong> Calling 20 to 50 times in a single day (also known as "bombarding").
                  </li>
                  <li className="flex items-start gap-3 italic">
                    <span>✘</span>
                    <strong>Public Humiliation:</strong> Shouting in front of neighbors or colleagues to cause shame.
                  </li>
                </ul>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                It is important to remember that a recovery agent is merely a facilitator. They have no legal authority to arrest you or seize your property on their own. They are not the police. Any attempt to act like a law enforcement officer is a criminal offense impersonation.
              </p>
            </section>

            <section id="privacy-protections" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                Workplace and Family Privacy: Your Sanctuary is Protected
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                One of the most common tactics used by rogue agencies is to call a borrower's workplace or their elderly parents. The goal is to use social shame to force a payment. However, the RBI has explicitly forbidden this.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Lenders and their agents can only interact with the borrower or the guarantor of the loan. Contacting friends, cousins, or the boss to discuss the loan default is a severe breach of financial confidentiality. The bank is legally bound to protect your data. Sharing your default status with third parties is a punishable violation of India's privacy norms.
              </p>
              <div className="bg-blue-50 p-8 rounded-xl border border-blue-200 mb-8 font-medium">
                <h3 className="text-xl font-bold mb-4 text-blue-900 underline">What the Rule Says:</h3>
                <p className="text-sm text-blue-800 mb-4">
                  "Regulated Entities (REs) shall ensure that they or their agents do not resort to intimidation or harassment of any kind, either verbal or physical, against any person in their debt collection efforts, including acts intended to humiliate publicly or intrude upon the privacy of the debtors' family members, referees and friends..."
                </p>
                <p className="text-sm text-blue-800">
                  Source: RBI Notification (RBI/2022-23/108)
                </p>
              </div>
            </section>

            <section id="borrower-rights" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                Rights of a Defaulting Borrower: Knowledge is Your Shield
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                When you default on an EMI, it is natural to feel guilty or weak. Scammers and aggressive agents feast on this feeling of weakness. You must remember that you still have rights that no one can take away.
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-10">
                <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm hover:border-[#1F5EFF] transition-all">
                  <h3 className="text-xl font-bold mb-4 text-[#2E2E2E]">The Right to Notification</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    The bank must notify you in writing about the default and the intent to start recovery before they send any agents. They must also inform you of the agency name assigned to your case.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm hover:border-[#1F5EFF] transition-all">
                  <h3 className="text-xl font-bold mb-4 text-[#2E2E2E]">The Right to ID Verification</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Every agent MUST carry an identity card from the agency and an authorization letter from the bank. If they cannot show these, they are trespassing.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm hover:border-[#1F5EFF] transition-all">
                  <h3 className="text-xl font-bold mb-4 text-[#2E2E2E]">The Right to Grievance</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    You have an absolute right to file a complaint against an agent's behavior. The bank is legally required to resolve your complaint within 30 days.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm hover:border-[#1F5EFF] transition-all">
                  <h3 className="text-xl font-bold mb-4 text-[#2E2E2E]">The Right to Settlement</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    You have the right to request a settlement (OTS) if you have a genuine financial hardship. You are not forced to pay 100% if you simply do not have it.
                  </p>
                </div>
              </div>
            </section>

            <section id="identifying-authorized" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                Identifying Authorized Agents vs. Scammers
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                In the digital age, many "fake" recovery agents call borrowers. These are criminals who have bought your data from illegal sources. They will ask you to pay into a personal account or a UPI ID. A genuine agent will NEVER do this.
              </p>
              <p className="text-lg leading-relaxed mb-6 font-bold text-center bg-yellow-50 p-4 border border-yellow-100 rounded-lg">
                Pro Tip: A legitimate agent will only ask you to pay through the bank's official app, portal, or at the branch itself.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Always demand to see the "Authorization Letter." This document specifies the period of authorization and the specific loan account number. Banks also list the names of authorized recovery agencies on their official websites. If the agency calling you is not on that list, they are likely fraudulent.
              </p>
            </section>

            <section id="collecting-evidence" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">How to Collect Evidence: Your Evidence is Your Power</h2>
              <p className="mb-6">
                If you want the RBI to take action against a bank, you need proof. Without evidence, it is your word against theirs. Rogue agents are often very careful to not leave a trail, but you can be smarter.
              </p>
              <div className="space-y-4 mb-8">
                <div className="bg-white p-5 rounded-xl border border-gray-200 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 shrink-0">1</div>
                  <div>
                    <h4 className="font-bold mb-1">Call Recording</h4>
                    <p className="text-sm text-gray-500">Always record every call from a recovery agent. Inform them: "This call is being recorded for legal purposes." This often stops harassment immediately.</p>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 shrink-0">2</div>
                  <div>
                    <h4 className="font-bold mb-1">Call Logs</h4>
                    <p className="text-sm text-gray-500">Take screenshots of your call logs showing the frequency and the timing (especially if after 7 PM or before 8 AM).</p>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 shrink-0">3</div>
                  <div>
                    <h4 className="font-bold mb-1">WhatsApp & SMS</h4>
                    <p className="text-sm text-gray-500">Save all messages. If they use threats on WhatsApp, do not delete the chat. These are digital footprints that provide strong evidence.</p>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 shrink-0">4</div>
                  <div>
                    <h4 className="font-bold mb-1">Voice Memos</h4>
                    <p className="text-sm text-gray-500">If an agent visits your home, use your phone to record the audio of the conversation secretly if needed, to prove their tone and language.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="complaint-process" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Step-by-Step Complaint Guide: Taking Action</h2>
              <p className="mb-6">
                Many borrowers suffer in silence because they don't know the "Chain of Command." Following the right order is essential for your complaint to be legally valid.
              </p>
              <ul className="space-y-6 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#1F5EFF] text-white flex items-center justify-center font-bold mr-4 mt-1 shadow-lg">1</div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Step 1: The Bank's Grievance Redressal</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      First, send a written complaint via email to the bank's customer service and mark a copy (CC) to the Nodal Officer. Attach your evidence. You must give them 30 days to respond. Always get a "Reference Number" for your complaint.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#1F5EFF] text-white flex items-center justify-center font-bold mr-4 mt-1 shadow-lg">2</div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Step 2: Escalation to the Principal Nodal Officer</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      If the bank does not reply in 10 days, escalate to the Principal Nodal Officer (PNO). Their details are available on the bank's "Contact Us" or "Grievance" page.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#1F5EFF] text-white flex items-center justify-center font-bold mr-4 mt-1 shadow-lg">3</div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Step 3: The RBI Ombudsman (The Ultimate Resource)</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      If it has been 30 days and you haven't received a satisfactory reply, go to the RBI Ombudsman. This is a free, online process through the RBI's CMS (Complaint Management System) portal. This step usually forces the bank to settle or apologize.
                    </p>
                  </div>
                </li>
              </ul>
            </section>

            <section id="rbi-ombudsman-role" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Role of the RBI Ombudsman: The People's Referee</h2>
              <p className="mb-6 text-lg">
                The Integrated Ombudsman Scheme 2021 is a powerful mechanism. The Ombudsman has the power to pass an "Award" against the bank. This can include:
              </p>
              <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100 mb-8">
                <ul className="list-disc list-inside space-y-3 text-emerald-900/80 font-medium">
                  <li>Ordering the bank to pay compensation for mental agony and harassment.</li>
                  <li>Directing the bank to stop all recovery action immediately during investigation.</li>
                  <li>Instructing the bank to reverse illegal charges or penalties levied on the borrower.</li>
                  <li>Reporting the bank's conduct to the RBI's central monitoring team for further penalties.</li>
                </ul>
              </div>
              <p className="mb-6">
                In several recent cases, the Ombudsman has ordered banks to pay lakhs of rupees in compensation to borrowers who were harassed after 7 PM. This proves that the system works if you are willing to use it.
              </p>
            </section>

            <section id="digital-app-guidelines" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Rules for Digital Lending Apps: Don't Be Scammed</h2>
              <p className="mb-6 text-red-600 font-bold">
                Warning: Thousands of people are targeted by illegal "7-day" loan apps. These apps are NOT regulated by the RBI.
              </p>
              <p className="mb-6">
                Legitimate Digital Lending Apps (DLAs) work with RBI-regulated NBFCs. They MUST follow the same calling hour rules. They are strictly prohibited from accessing your gallery, contacts, or location for recovery purposes. If an app is threatening to send your "morphed photo" to your contacts, it is a criminal cyber-crime. Do not pay them. Report it immediately to cybercrime.gov.in and the police.
              </p>
              <p className="mb-6 italic">
                A genuine lender will never ask for your Google Drive or iCloud password. They will never threaten to "shame" you on social media.
              </p>
            </section>

            <section id="consequences-for-banks" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Consequences for Banks: Why They Fear the Law</h2>
              <p className="mb-6 text-lg">
                Banks are terrified of RBI penalties because they hit three things: their wallet, their reputation, and their license.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm text-center italic">
                  <h4 className="font-bold mb-2">Monetary Fines</h4>
                  <p className="text-xs text-gray-500">RBI can levy multicore fines on banks that fail to control their outsourced agents.</p>
                </div>
                <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm text-center italic">
                  <h4 className="font-bold mb-2">Ban on Hiring</h4>
                  <p className="text-xs text-gray-500">RBI has the power to ban a bank from using third party recovery services if violations persist.</p>
                </div>
                <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm text-center italic">
                  <h4 className="font-bold mb-2">Director Liability</h4>
                  <p className="text-xs text-gray-500">In extreme cases, the management of the bank can be held personally liable for systemic failures.</p>
                </div>
              </div>
            </section>

            <section id="legal-remedies-india" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Other Legal Remedies in India: Beyond the RBI</h2>
              <p className="mb-6 text-lg">
                While the RBI is the primary regulator, you also have protection under the Indian Penal Code (IPC).
              </p>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 mb-8">
                <ul className="space-y-4 text-sm text-gray-700">
                  <li><strong>Section 503 IPC:</strong> Criminal Intimidation. If an agent threatens to cause injury to your reputation or property.</li>
                  <li><strong>Section 507 IPC:</strong> Criminal Intimidation by anonymous communication. If they call from unknown numbers to threaten you.</li>
                  <li><strong>Section 509 IPC:</strong> Word, gesture, or act intended to insult the modesty of a woman. Extremely effective if female family members are harassed.</li>
                  <li><strong>Consumer Protection Act:</strong> You can file a case in the Consumer Forum for "Unfair Trade Practice" and seek damages.</li>
                </ul>
              </div>
            </section>

            <section id="settlement-as-solution" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Settlement: Reclaiming Your Peace Forever</h2>
              <p className="mb-6">
                Ignoring the calls might stop the noise for a day, but it doesn't solve the problem. The debt keeps growing with interest and penalties. The ultimate way to stop recovery calls permanently is through a <strong>Legal Loan Settlement</strong>.
              </p>
              <p className="mb-6">
                By entering into a settlement, you negotiate with the bank to pay a one-time lump sum that is much lower than your total dues. Once the settlement agreement is signed, the bank is legally required to stop all recovery efforts immediately. You get a "No Objection Certificate" (NOC) and the account is marked as settled. This is the only definitive way to close the door on recovery agents forever.
              </p>
            </section>

            <section id="settleloans-protection" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">How SettleLoans Acts as Your Shield</h2>
              <p className="mb-6">
                At SettleLoans, we understand that you are fighting two battles: one with your finances and one with the harassment. We take over the second battle so you can focus on the first.
              </p>
              <div className="bg-[#2E2E2E] text-white p-8 rounded-2xl mb-8 relative overflow-hidden group">
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#1F5EFF]/5 rounded-tl-full -mr-10 -mb-10 group-hover:bg-[#1F5EFF]/10 transition-all"></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">Our Protection Protocol:</h3>
                <ul className="space-y-3 opacity-90 relative z-10 text-sm">
                  <li className="flex items-center gap-2">✓ We send legal representation notices to your lenders, informing them that we are now handling your case.</li>
                  <li className="flex items-center gap-2">✓ Our team provides you with a dedicated helpline to report any violation of RBI calling hours.</li>
                  <li className="flex items-center gap-2">✓ We file formal complaints with the Bank's Principal Nodal Officer and the RBI Ombudsman on your behalf.</li>
                  <li className="flex items-center gap-2">✓ We negotiate with the bank to reach a settlement that fits your current financial capacity.</li>
                  <li className="flex items-center gap-2">✓ We ensure you receive a valid, legal settlement letter that protects you from future claims.</li>
                </ul>
              </div>
              <p className="font-bold text-center text-xl text-[#1F5EFF]">
                Don't let the phone calls destroy your mental health. Let SettleLoans be your professional voice.
              </p>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Real Stories of People Who Said "No More"</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Anita M.",
                    city: "Chennai",
                    story: "I was getting calls at 9 PM from a private bank. SettleLoans helped me record the calls and file a PNO complaint. The bank apologized and gave me a 60% discount on my settlement as a gesture of goodwill."
                  },
                  {
                    name: "Vikram R.",
                    city: "Mumbai",
                    story: "Recovery agents visited my office and shouted in front of my staff. SettleLoans legal team sent a strong notice specifying IPC sections. The agency was blacklisted by the bank, and my calls stopped the next day."
                  },
                  {
                    name: "Suresh P.",
                    city: "Delhi",
                    story: "I had 5 credit cards and agents were hounding me day and night. SettleLoans consolidated everything, stopped the harassment, and helped me settle every card over 8 months. I am finally debt free."
                  },
                  {
                    name: "Priya S.",
                    city: "Pune",
                    story: "A fake agent threatened to call my relatives. SettleLoans verified the caller was a scammer and helped me file a cyber complaint. I saved 50,000 rupees that I was about to pay to a criminal."
                  }
                ].map((review, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 mr-3">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h5 className="font-bold text-[#2E2E2E]">{review.name}</h5>
                        <p className="text-xs text-gray-400">{review.city}</p>
                      </div>
                      <div className="ml-auto text-yellow-400 text-sm">★★★★★</div>
                    </div>
                    <p className="text-sm text-gray-600 italic leading-relaxed">"{review.story}"</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="future-of-recovery" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">The Road to 2026 Guidelines: Even Stricter Rules</h2>
              <p className="mb-6">
                The RBI is not stopping here. New draft directions, expected to take full effect by July 2026, aim to make recovery even more transparent.
              </p>
              <p className="mb-6">
                Future rules will likely require all recovery calls to be recorded on a centralized bank server that the RBI can audit at any time. There are also proposals to limit the number of calls an agent can make to a borrower in a single day. The goal is to move towards a system where recovery is based on negotiation and counseling rather than pressure and fear.
              </p>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: "Is calling after 7 PM illegal for all banks?", a: "Yes. All banks (Public Sector, Private Sector), NBFCs, and Digital Lending Apps regulated by the RBI must strictly follow the 8 AM to 7 PM calling window rule." },
                  { q: "What is the penalty for a recovery agent calling at 10 PM?", a: "Individual agents can have their certification revoked. The bank can face heavy fines from the RBI and may be ordered to pay compensation to the borrower for violating the Fair Practice Code." },
                  { q: "Can I ignore calls from recovery agents?", a: "While you can ignore them, it is better to inform the bank in writing that you are unable to pay and are seeking a settlement. Ignoring calls for too long may lead the bank to assume you are 'absconding' and escalate to legal action." },
                  { q: "What should I do if a recovery agent threatens me on WhatsApp?", a: "Take a screenshot immediately. Do not block them yet; use the chat as evidence to file a complaint with the bank and the cybercrime portal. Threats on WhatsApp are a criminal offense." },
                  { q: "How do I know if the RBI Ombudsman will accept my complaint?", a: "You must first file a complaint with the bank. If they don't solve it in 30 days, or if they reject your complaint, the Ombudsman will accept your case for investigation." },
                  { q: "Are recovery agents allowed to visit my office?", a: "They can visit, but only with proper ID and authorization. They must follow the same hours (8 AM - 7 PM) and are strictly prohibited from creating a scene or discussing your debt with colleagues." },
                  { q: "Can a bank file an FIR against me for loan default?", a: "Loan default is a civil matter. Banks cannot file an FIR for simple non-payment. An FIR can only be filed if there is evidence of fraud, cheating (submission of fake documents), or criminal misappropriation." },
                  { q: "Will the RBI Ombudsman help me reduce my loan amount?", a: "The Ombudsman primarily deals with 'deficiency in service' (like harassment). While they don't usually dictate the settlement amount, their involvement often makes the bank more willing to offer a generous settlement to close the dispute." },
                  { q: "Is 'loan recovery' the same as 'harassment'?", a: "No. Loan recovery is a legitimate business process of notifying a borrower about dues. Harassment is when the process uses threats, public shame, or calls outside regulated hours." },
                  { q: "How can SettleLoans help me if I'm already in a court case?", a: "We help you reach a settlement with the bank. Once a settlement is reached and you get an NOC, the bank will withdraw the court case. We provide the legal strategy to end the litigation through resolution." }
                ].map((faq, i) => (
                  <details key={i} className="group bg-white border border-[#DEDEDE] rounded-xl overflow-hidden hover:shadow-md transition-all border-b-4 border-b-[#1F5EFF]/20">
                    <summary className="flex justify-between items-center p-5 cursor-pointer font-black text-[#2E2E2E] list-none bg-gray-50 group-open:bg-white transition-colors">
                      <span className="text-lg">{i + 1}. {faq.q}</span>
                      <span className="transition-transform group-open:rotate-180 text-[#1F5EFF]">
                        <svg className="w-5 h-5 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7"></path></svg>
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
              <p className="text-gray-400 text-sm italic">Disclaimer: SettleLoans is a professional consultancy help desk. Information about RBI guidelines is for educational awareness. We advise reading official RBI circulars for the most current legal updates. We assist in legal debt resolution but do not offer financial loans ourselves.</p>
            </div>

            {/* Mobile CTA */}
            <div className="lg:hidden mt-16 mb-8">
              <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#1F5EFF]/20">
                <div className="bg-[#1F5EFF] p-6 text-center text-white">
                  <h3 className="text-2xl font-black mb-2 italic">Stop the Night Calls?</h3>
                  <p className="opacity-90 text-sm">Join 15,000+ Indians who have reclaimed their peace with SettleLoans professional protection.</p>
                </div>
                <div className="p-8 text-center text-[#DEDEDE]">
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-xl hover:scale-105 transition-all shadow-lg text-lg">
                    Free Legal Consultation
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* Right Column: CTA & Related */}
          <aside className="hidden lg:block w-1/5 shrink-0">
             <div className="sticky top-24 space-y-8">
               {/* Fixed CTA Card */}
               <div className="bg-[#2E2E2E] rounded-3xl p-8 border border-gray-800 shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                 <h3 className="text-2xl font-black text-white mb-6 leading-tight relative z-10">
                   Stop the <br /> <span className="text-[#1F5EFF]">Harassment</span> Today
                 </h3>
                 <p className="text-gray-400 text-sm mb-8 leading-relaxed relative z-10">
                   Our legal experts will handle the banks and recovery agents while we negotiate your debt reduction.
                 </p>
                 <Link href="/contact" className="inline-flex items-center justify-center w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-xl hover:scale-105 transition-all shadow-[0_0_20px_rgba(31,94,255,0.3)] italic">
                   Get Expert Help
                 </Link>
               </div>

               {/* Related Pages */}
               <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                 <h4 className="text-lg font-black text-[#2E2E2E] mb-6 flex items-center gap-2">
                   <span className="w-1.5 h-6 bg-[#1F5EFF] rounded-full"></span>
                   Quick Links
                 </h4>
                 <div className="space-y-4">
                   {[
                     { title: "Identify Fake Agents", href: "/how-to-identify-fake-recovery-agents" },
                     { title: "Avoid Recovery Threats", href: "/recovery-agents-threatening-me-what-to-do" },
                     { title: "CIBIL Score Protection", href: "/credit-score-improvement" },
                     { title: "Personal Loan Case", href: "/can-bank-file-case-for-personal-loan" },
                     { title: "Legal Notice Guide", href: "/legal-notice-for-loan-recovery" }
                   ].map((link, i) => (
                     <Link key={i} href={link.href} className="group flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                       <span className="text-sm font-bold text-gray-700 group-hover:text-[#1F5EFF] transition-colors">{link.title}</span>
                       <svg className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                     </Link>
                   ))}
                 </div>
               </div>
             </div>
          </aside>

        </div>
      </main>
    </div>
  );
}
