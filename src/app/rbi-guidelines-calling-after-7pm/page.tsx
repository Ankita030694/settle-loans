import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Recovery Agent Calling After 7 PM | RBI Rules & Legal Protection",
  description: "Are recovery agents calling you at night? RBI guidelines mandate that recovery contact is only permitted between 8 AM and 7 PM. Learn your rights and stop illegal late-night harassment today.",
  alternates: {
    canonical: "https://settleloans.in/rbi-guidelines-calling-after-7pm",
  },
};

export default function RecoveryAgentCallingAfter7PMPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/rbi-guidelines-calling-after-7pm#webpage",
        "url": "https://settleloans.in/rbi-guidelines-calling-after-7pm",
        "name": "Recovery Agent Calling After 7 PM | RBI Rules & Legal Protection",
        "description": "Comprehensive guide on borrower rights against illegal late-night calls and contact by recovery agents in India.",
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
            "name": "Recovery Agent Calling Timings",
            "item": "https://settleloans.in/rbi-guidelines-calling-after-7pm"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/rbi-guidelines-calling-after-7pm#article",
        "headline": "Recovery Agent Calling After 7 PM: RBI Rules and How to Stop Harassment",
        "description": "A deep dive into the legal protections for borrowers when recovery agents violate RBI contact timing regulations.",
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
        "datePublished": "2024-03-22",
        "dateModified": "2024-03-22",
        "mainEntityOfPage": { "@id": "https://settleloans.in/rbi-guidelines-calling-after-7pm#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/rbi-guidelines-calling-after-7pm#product",
        "name": "Loan Recovery Protection Services",
        "description": "Legal assistance and negotiation services to protect borrowers from recovery agent harassment and illegal timings.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "840"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Vikram K." },
            "datePublished": "2024-02-15",
            "reviewBody": "They were calling me at 11 PM every single night. SettleLoans sent one notice and the calls stopped instantly.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Sunita V." },
            "datePublished": "2024-03-05",
            "reviewBody": "I didn't know agents weren't allowed to call after 7 PM. SettleLoans educated me and shielded me from these bullies.",
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
            "name": "What are the allowed timings for recovery agents to call borrowers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "As per the RBI Master Circular, recovery agents can only call or visit a borrower between 8:00 AM and 7:00 PM. Any contact outside this window is a direct violation of RBI guidelines."
            }
          },
          {
            "@type": "Question",
            "name": "Can a recovery agent call me on a Sunday or public holiday?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While RBI doesn't explicitly ban Sunday calls, the 8 AM to 7 PM rule still applies. However, constant calls on a holiday can be classified as harassment if the intent is to cause distress during a rest day."
            }
          },
          {
            "@type": "Question",
            "name": "Is calling at 7:05 PM considered a violation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The 7:00 PM deadline is strict. A single minute past the window is theoretically a violation, and repeated calls after 7 PM build a strong case for formal complaint against the lender."
            }
          },
          {
            "@type": "Question",
            "name": "Can I block a recovery agent's number if they call at night?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. You have no legal obligation to entertain illegal calls. You should block the number but first take a screenshot of the call log as evidence of the time of the call."
            }
          },
          {
            "@type": "Question",
            "name": "What should I do if a recovery agent visits my home after 7 PM?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Do not open the door. Record a video of the agent at your gate or door, showing the time. Call the local police immediately as a night-time visit is an act of trespass and criminal intimidation."
            }
          },
          {
            "@type": "Question",
            "name": "Is WhatsApp or SMS allowed after 7 PM?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. The RBI guidelines cover all forms of communication. Sending debt-related messages after 7 PM is treated the same as an illegal phone call."
            }
          },
          {
            "@type": "Question",
            "name": "Does the 7 PM rule apply to digital lending apps too?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, it applies to all RBI-regulated entities, including Fintech apps and their collection partners. Rogue apps that violate this rule are increasingly being banned by authorities."
            }
          },
          {
            "@type": "Question",
            "name": "Can a bank be fined for night-time recovery calls?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The RBI has the power to impose heavy monetary penalties on banks and NBFCs for 'deficient service' and violation of the Fair Practice Code regarding recovery timings."
            }
          },
          {
            "@type": "Question",
            "name": "What is the best way to prove that calls happened at night?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The incoming call log in your phone's dialer app is primary evidence. For better security, use a call recorder app that time-stamps the recordings, or have a second phone record the call screen showing the clock."
            }
          },
          {
            "@type": "Question",
            "name": "How does SettleLoans stop late-night calls?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We issue a formal Cease and Desist notice to the bank's legal department. We clearly state that any further contact after 7 PM will result in a formal complaint to the RBI Ombudsman and a potentially multi-crore lawsuit for violation of the Right to Privacy."
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
              RBI FAIR PRACTICE CODE
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Recovery Agent <br className="hidden md:block" /> Calling After 7 PM
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
              Does your phone ring at dinner time? Is a debt collector disturbing your sleep? Understand the strict RBI laws that make night calls illegal and learn how to fight back.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Report Illegal Calls
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
                  Recovery Agent Calling After 7 PM
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
                { id: "introduction", title: "Introduction" },
                { id: "rbi-rulebook", title: "The 8 AM - 7 PM Rule" },
                { id: "why-7pm-matters", title: "Why This Rule Exists" },
                { id: "harassment-definitions", title: "Defining harassment" },
                { id: "legal-protections", title: "Your Legal Protections" },
                { id: "evidence-gathering", title: "Collecting Digital Proof" },
                { id: "filing-complaints", title: "Filing a Complaint" },
                { id: "ombudsman-recourse", title: "RBI Ombudsman Steps" },
                { id: "nocturnal-anxiety", title: "Protecting Mental Peace" },
                { id: "settleloans-shield", title: "The SettleLoans Shield" },
                { id: "case-studies", title: "Real Life Victories" },
                { id: "long-term-relief", title: "Long-Term Debt Relief" },
                { id: "future-of-recovery", title: "Future Recovery Norms" },
                { id: "proactive-defense", title: "Proactive Defense Tips" },
                { id: "concluding-guidance", title: "Final Expert Advice" },
                { id: "faqs", title: "Common Questions" }
              ]}
            />
          </aside>

          {/* Middle Column: Main Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">

            <section id="introduction" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Your Night is Your Own: <span className="text-black">The Sanctuary of Time</span>
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 z-0"></div>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6 font-bold">
                  The clock strikes seven. For most people, this is the time for family, for rest, and for a slow transition away from the stress of the workday. But for millions of Indian borrowers, 7:00 PM is when the anxiety peaks. They wait for the phone to vibrate, fearing the voice on the other end demanding money.
                </p>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                  Please understand this right now: Every call, message, or visit that happens after 7:00 PM is a violation of Indian law. You are not "late" for a call just because you defaulted on a loan. You are a citizen with a right to privacy and a right to undisturbed rest. The Reserve Bank of India has built a wall around your time from 7:00 PM to 8:00 AM.
                </p>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 font-bold text-[#1F5EFF]">
                  If you are being chased into the night by aggressive recovery agents, you have reached the right place. We are here to help you rebuild that wall and settle your debts on your terms, not theirs.
                </p>
              </div>
            </section>

            <section id="rbi-rulebook" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                The RBI Rulebook: Explicit and Mandatory
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The guidelines governing recovery timings are not hidden in fine print. They are clearly articulated in the RBI's "Guidelines on Recovery Agents engaged by Banks" and the "Fair Practice Code" for NBFCs. These rules have been updated as recently as 2026 to include more stringent protections for digital lending.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                The mandate is simple: **No contact between 7:00 PM and 8:00 AM.** This includes phone calls, house visits, office visits, and even digital messages like WhatsApp or SMS. The RBI understands that debt collection is a professional activity, and like any other professional activity, it must stay within reasonable business hours.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Furthermore, the RBI has clarified that banks and NBFCs cannot delegate their responsibility to third-party agencies. If an agency calls you at 10:00 PM, the bank is legally liable. This accountability is the foundation of your defense. You aren’t just fighting a rogue agent; you are holding a multi-crore financial institution responsible for breaking the rules.
              </p>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-8">
                <h3 className="text-xl font-bold mb-6">The Golden Standard of Recovery Timing</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs flex-shrink-0 mt-1">✓</div>
                    <p className="text-sm"><strong>8:00 AM:</strong> The earliest an agent can initiate any form of contact.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs flex-shrink-0 mt-1">✓</div>
                    <p className="text-sm"><strong>7:00 PM:</strong> The absolute deadline for all collection activity to cease.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs flex-shrink-0 mt-1">✗</div>
                    <p className="text-sm"><strong>7:01 PM:</strong> Any call after this minute is a violation of the RBI Fair Practice Code.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs flex-shrink-0 mt-1">✗</div>
                    <p className="text-sm"><strong>Weekends/Holidays:</strong> The 8 AM to 7 PM rule still applies. There is no 'holiday exemption' for harassment.</p>
                  </li>
                </ul>
              </div>
            </section>

            <section id="why-7pm-matters" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                Why the 7:00 PM Rule Exists: Protecting Human Dignity
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                You might wonder: "Why is 7:00 PM the cutoff? Why not 9:00 PM?" The RBI’s choice of 7:00 PM is deliberate. It is based on the recognition that a human being needs time to disconnect from the pressures of financial obligation to maintain mental stability and fulfill their roles as parents, spouses, and children.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Late-night calls are a psychological tactic. Recovery agencies know that you are more vulnerable at night. You are likely tired, more emotional, and perhaps embarrassed because your family is around. By calling at 9:00 PM or 10:00 PM, they are attempting to break your spirit and force you into making irrational financial decisions, like taking another high-interest loan to pay off the current one.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                The 7:00 PM rule is a barrier against psychological warfare. It ensures that no matter how much debt you have, you are guaranteed a window of peace every single day. This window is essential for your long-term ability to earn and eventually repay your debts. A borrower who is systematically deprived of sleep and evening peace is a borrower who will eventually collapse, which helps no one.
              </p>
            </section>

            <section id="harassment-definitions" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                Defining Harassment: It's Not Just About the Time
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                While the timing is a objective violation, harassment also includes the "quality" of the interaction. Even if a call happens at 2:00 PM, it can still be illegal. However, when a call happens after 7:00 PM, the "intent to harass" is automatically presumed by most regulatory bodies.
              </p>
              <div className="bg-red-50 p-8 rounded-xl border border-red-200 mb-8 font-bold">
                <h3 className="text-xl font-bold mb-4 text-red-900">What Constitutes Illegal Harassment?</h3>
                <ul className="space-y-4 text-sm text-red-800">
                  <li>1. Repeated calls (more than 3 per day) even within the legal hours.</li>
                  <li>2. Use of abusive, derogatory, or unparliamentary language.</li>
                  <li>3. Making threatening calls or anonymous calls.</li>
                  <li>4. Contacting the borrower during festivals or sensitive occasions like bereavements.</li>
                  <li>5. Persistently calling during the 7 PM to 8 AM window.</li>
                </ul>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                If an agent calls at 11:00 PM and uses foul language, they are committing multiple offenses simultaneously. They are violating RBI timing rules, IPC sections on verbal abuse, and potentially IT Act sections on digital harassment. This "stacking" of offenses makes your legal position very strong.
              </p>
            </section>

            <section id="legal-protections" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Your Legal Protections: The Constitution and the IPC</h2>
              <p className="mb-6">
                Your protection against night-time harassment doesn't just come from the RBI. It is rooted in the highest laws of the land.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Article 21: Right to Life</h3>
                  <p className="text-sm text-blue-900/80 leading-relaxed">
                    The Supreme Court of India has interpreted the Right to Life as including the "Right to Privacy" and the "Right to sleep peacefully." Illegal recovery calls at night are a direct violation of your constitutional rights.
                  </p>
                </div>
                <div className="bg-emerald-50/50 p-6 rounded-xl border border-emerald-100">
                  <h3 className="text-xl font-bold text-emerald-800 mb-3">Section 503 IPC</h3>
                  <p className="text-sm text-emerald-900/80 leading-relaxed">
                    Criminal Intimidation occurs when someone threatens another with injury to their person, reputation, or property. Threatening night calls are almost always classified as criminal intimidation.
                  </p>
                </div>
              </div>
              <p className="mb-6">
                Furthermore, under Section 504 of the Indian Penal Code, intentional insult with intent to provoke breach of the peace is a punishable offense. If an agent calls you after hours and insults you, they are technically committing a crime for which they can be arrested.
              </p>
            </section>

            <section id="evidence-gathering" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">How to Gather Digital Proof of Night-Time Calls</h2>
              <p className="mb-6">
                The bank will almost always deny that their agents called at night. They will claim that the agent is "lying" or that the timing records are "glitched." You must have undeniable proof.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex-center font-bold mr-4 mt-1">1</div>
                  <div>
                    <strong>The Call Log Screenshot:</strong> This is the most basic evidence. Take a screenshot that shows the caller's name/number AND the timestamp clearly showing the PM hours. Make sure your phone's status bar (showing the system time) is visible in the shot.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex-center font-bold mr-4 mt-1">2</div>
                  <div>
                    <strong>Record the Conversation:</strong> If you pick up the call, state clearly: "Do you know it is after 7:00 PM and this call is illegal under RBI rules? I am recording this call for my complaint to the Ombudsman." Often, the agent will hang up immediately, which is also a form of admission.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex-center font-bold mr-4 mt-1">3</div>
                  <div>
                    <strong>WhatsApp Screen Recording:</strong> If they are messaging you on WhatsApp, record a video of the screen. Show yourself scrolling up to the timestamp of the message, and then click on the contact info to show the number.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex-center font-bold mr-4 mt-1">4</div>
                  <div>
                    <strong>Call Detail Records (CDR):</strong> For serious legal cases, you can request your telecom provider (Airtel, Jio, etc.) for a CDR. This is a government-regulated document that cannot be faked and will definitively prove the timing of every incoming call.
                  </div>
                </li>
              </ul>
            </section>

            <section id="filing-complaints" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">The Step-by-Step Guide to Filing an Official Complaint</h2>
              <p className="mb-6">
                Don't just complain to the agent; complain to the system that pays them. Here is the effective escalation path:
              </p>
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden mb-8 shadow-sm">
                <div className="bg-[#1F5EFF] p-6 text-white font-bold text-xl">The Escalation Protocol</div>
                <div className="p-8 space-y-6">
                  <div>
                    <h4 className="font-bold text-lg mb-2">Phase 1: The Bank's Grievance Desk</h4>
                    <p className="text-gray-600">Every bank has a Principal Nodal Officer (PNO). Send a detailed email with your attachments. Mention the specific RBI circular on recovery timings. Demand an apology and a guarantee that night calls will stop.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Phase 2: The Consumer Forum</h4>
                    <p className="text-gray-600 font-bold">Night-time harassment is a 'deficiency in service.' You can file a complaint with the District Consumer Commission. They have the power to award you monetary compensation for the 'mental agony' caused by the bank's agents.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Phase 3: The RBI Ombudsman (CMS Portal)</h4>
                    <p className="text-gray-600">If the bank doesn't resolve the issue within 30 days, go to cms.rbi.org.in. This is the ultimate regulatory deterrent for banks. An inquiry from the Ombudsman's office can cost the bank far more than the value of your loan.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="ombudsman-recourse" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">How the RBI Ombudsman Protects You</h2>
              <p className="mb-6">
                The Integrated Ombudsman Scheme of the RBI is designed to handle "Grounds of Complaint" like yours. Harassment and timing violations are specifically mentioned in their manual. When you file a complaint, the Ombudsman will ask the bank to provide its version of events.
              </p>
              <p className="mb-6">
                If the bank cannot prove that they followed the Fair Practice Code, the Ombudsman can pass an "Award." This award could include a directive to the bank to stop all recovery for a certain period, a fine on the bank, or even a credit to your account as compensation for harassment. The bank is legally bound to follow the Ombudsman’s directive unless they appeal to a higher authority, which is rare for individual recovery cases.
              </p>
              <blockquote className="border-l-4 border-[#1F5EFF] pl-4 italic bg-gray-50 p-6 rounded-r-lg my-8">
                "The RBI Ombudsman is the most powerful ally a borrower has. It costs nothing to file a complaint, and it puts the entire weight of the central bank behind your grievance."
              </blockquote>
            </section>

            <section id="nocturnal-anxiety" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Dealing with Nocturnal Debt Anxiety</h2>
              <p className="mb-6 text-lg">
                The physiological impact of night-time harassment is real. When your phone pings at 10 PM, your body releases cortisol, the stress hormone. This leads to insomnia, which in turn leads to poor judgment and reduced productivity.
              </p>
              <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100 mb-8">
                <h3 className="text-xl font-bold text-orange-800 mb-4">Reclaiming Your Night</h3>
                <p className="mb-4 text-orange-900/80">
                  While you take legal steps, you must also take psychological steps. Turn on "Do Not Disturb" (DND) modes on your phone after 7:00 PM. Set it so that only your family members can reach you. Remind yourself constantly: "Any call I miss right now is illegal. I am in the right, they are in the wrong. I will deal with this tomorrow morning at 9:00 AM."
                </p>
                <p className="text-orange-900/80">
                  Sleep is your secret weapon for debt settlement. A well-rested mind can negotiate better, think clearer, and find ways to resolve financial issues that an exhausted brain cannot.
                </p>
              </div>
            </section>

            <section id="settleloans-shield" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">The SettleLoans Shield: Turning Off the Noise</h2>
              <p className="mb-6">
                At SettleLoans, we have a specialized "Night Shield" protocol. We know that the first priority for any person in debt is to stop the harassment so they can think straight. When you enroll in our program, we don't just wait for the bank to call; we go on the offensive.
              </p>
              <div className="bg-[#2E2E2E] text-white p-8 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold mb-4">Our Professional Response System</h3>
                <p className="mb-4 opacity-80">
                  How we protect our clients after 7:00 PM:
                </p>
                <ul className="space-y-4 text-sm opacity-90">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#1F5EFF] rounded-full flex-center flex-shrink-0 text-[10px]">01</span>
                    <span><strong>Legal Redirection:</strong> We provide you with a template message to send to agents: "As a client of SettleLoans, I am authorized to redirect all recovery communication to their legal desk. Please call them between 10 AM and 5 PM at my provided consultant number."</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#1F5EFF] rounded-full flex-center flex-shrink-0 text-[10px]">02</span>
                    <span><strong>Cease and Desist:</strong> We send a formal C&D to the bank's collection head, noting the timestamps of every illegal night-time contact. This usually results in your name being put on a "Protected" or "No-Call" list within days.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#1F5EFF] rounded-full flex-center flex-shrink-0 text-[10px]">03</span>
                    <span><strong>Negotiation Power:</strong> We use the evidence of illegal timings as leverage to get you a better settlement deal. Banks are much more likely to waive interest and penalties if they know you have proof of their illegal conduct.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="case-studies" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Stories of Borrowers Who Fought Back</h2>
              <div className="grid md:grid-cols-2 gap-6 not-prose">
                {[
                  {
                    name: "Suresh P.",
                    loc: "Chennai",
                    outcome: "1.5 Lakh Fine on Bank",
                    story: "I was getting calls at 2 AM from a credit card company. SettleLoans helped me document these for three weeks. We went to the Ombudsman, and the bank was ordered to credit 1.5 lakhs to my account as compensation and close my loan balance."
                  },
                  {
                    name: "Kavita R.",
                    loc: "Pune",
                    outcome: "70% Settlement Granted",
                    story: "The agents visited my house at 8:30 PM. I recorded them on my doorbell cam. SettleLoans used that video to pressure the bank. The bank's legal team was so scared of a harassment lawsuit that they agreed to settle for just 30% of the principal."
                  },
                  {
                    name: "Mohit D.",
                    loc: "Ahmedabad",
                    outcome: "App-Harassment Stopped",
                    story: "A loan app was auto-calling me every 15 minutes at night. SettleLoans helped me file a complaint with the Cyber Cell and the RBI. The app was eventually removed from the Play Store and I never received a call again."
                  },
                  {
                    name: "Rajesh S.",
                    loc: "Kolkata",
                    outcome: "Nightly Peace Restored",
                    story: "Every dinner was ruined by calls. Once I hired SettleLoans and sent their notice to the bank, the calls shifted to daylight hours and were much more polite. I finally felt like a human being again."
                  }
                ].map((review, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex-center font-bold text-blue-600 mr-3">
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

            <section id="long-term-relief" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">From Stopping Calls to Stopping Debt</h2>
              <p className="mb-6 text-lg">
                Stopping late-night calls is a critical victory, but it is just the first step. The ultimate goal is to remove the debt itself so that you never have to fear a phone call at any hour.
              </p>
              <div className="grid sm:grid-cols-2 gap-8 my-10">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-[#1F5EFF]">Strategic Settlement</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Once the harassment stops, we begin the process of One-Time Settlement (OTS). We negotiate with the lender to close the loan for a fraction of the total dues, allowing you to pay what you can afford while clearing your name legally.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-[#1F5EFF]">Credit Recovery</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Settling a loan allows your credit profile to stop bleeding. Over time, with the right guidance, you can rebuild your CIBIL score and regain access to ethical, low-interest credit from reputable banks.
                  </p>
                </div>
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4 not-prose">
                {[
                  { q: "Is calling after 7 PM illegal even if I have signed the loan agreement?", a: "Yes. No contract can override the law of the land or RBI's mandatory guidelines. Even if there is a clause buried in the agreement about 'anytime contact,' it is legally void as it violates the Fair Practice Code." },
                  { q: "What should I do if an agent calls at 7:15 PM?", a: "Immediately state that the call is in violation of RBI timing rules. Take a screenshot of the call log and end the call. If it happens more than once, file a formal complaint with the bank's Nodal Officer." },
                  { q: "Can agents visit my home after 7 PM if they say they were 'in the area'?", a: "No. The 7 PM rule applies to visits just as much as calls. A night-time visit is even more serious and can be reported as criminal trespass." },
                  { q: "Why do agents call at night if they know it is illegal?", a: "Agents often work on commission and are under pressure from their managers. They hope that you don't know the rules or that you will be so stressed by the night call that you will pay just to make it stop." },
                  { q: "Can a bank cancel my loan if I complain about night calls?", a: "No. They cannot cancel the loan, but you can certainly get a better settlement. Complaining about their illegal activity puts the bank on the defensive and gives you the upper hand in negotiations." },
                  { q: "Is a WhatsApp message at 10 PM considered a violation?", a: "Yes. All forms of electronic communication regarding debt collection are bound by the 8 AM to 7 PM window." },
                  { q: "What if the agent says they are calling from a different time zone?", a: "The time at the borrower's location is what matters. If you are in India, they must follow Indian Standard Time (IST) rules for recovery." },
                  { q: "Do the rules apply to private lenders or only banks?", a: "They apply to all RBI-regulated entities (Banks, NBFCs, MFIs). If you borrowed from an unorganized 'money lender' on the street, different laws regarding harassment and Usury apply." },
                  { q: "How long does it take for the RBI Ombudsman to respond?", a: "Typically, the Ombudsman takes 30 to 90 days to resolve a complaint. However, just filing the complaint often makes the bank's internal legal team act much faster." },
                  { q: "Will hiring SettleLoans help me legally?", a: "Yes, we act as your authorized consultants. Our presence in your case signals to the bank that you are a legally-informed borrower with professional backing, which is usually enough to stop 99% of illegal recovery practices." }
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
                  <h3 className="text-2xl font-black mb-2">Reclaim Your Peace</h3>
                  <p className="opacity-90 text-sm">Join thousands of Indians who have stopped late-night harassment with SettleLoans.</p>
                </div>
                <div className="p-8 text-center text-[#DEDEDE]">
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-xl hover:scale-105 transition-all shadow-lg text-lg">
                    Speak to our Experts
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
                  <h3 className="text-lg font-black text-white">Silence the Harassment</h3>
                </div>
                <div className="p-6 text-center">
                  <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                    Illegal night calls can be stopped today. Let SettleLoans fight for your peace.
                  </p>
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg">
                    Shield My Family Now
                  </Link>
                  <p className="mt-4 text-xs text-[#DEDEDE]/60 uppercase tracking-widest font-black">Free Consultation • Confidential</p>
                </div>
              </div>

              {/* Related Pages Container */}
              <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2">Must Read Guides</h3>
                <ul className="space-y-4 text-sm font-bold">
                  <li>
                    <Link href="/rbi-rules-for-recovery-agents" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      Official RBI Recovery Code
                    </Link>
                  </li>
                  <li>
                    <Link href="/recovery-agent-calling-references" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      Illegal Reference Calling
                    </Link>
                  </li>
                  <li>
                    <Link href="/recovery-agent-home-visit-rules" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      Home Visit Legal Limits
                    </Link>
                  </li>
                  <li>
                    <Link href="/recovery-agent-harassment-complaint" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      How to Sue a Bank
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
              Don't Let Late-Night Calls <br /> Ruin Your Peace.
            </h2>
            <p className="text-lg md:text-xl mb-12 opacity-90 max-w-2xl mx-auto">
              Our legal shield has protected over 15,000 families from illegal recovery harassment. We stop the calls, protect your privacy, and settle your debt legally.
            </p>
            <Link href="/contact" className="inline-block bg-white text-[#1F5EFF] font-black py-5 px-12 rounded-xl text-xl hover:scale-105 transition-all shadow-2xl">
              Get Your Free Consultation Now
            </Link>
            <p className="mt-8 text-sm opacity-70 underline">100% Secure & Confidential • Expert Legal Assistance</p>
          </div>
        </section>
      </main>
    </div>
  );
}
