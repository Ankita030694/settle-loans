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
              "text": "You should first complain to the bank's nodal officer. If unresolved after 30 days, you can escalate to the RBI Banking Ombudsman online. For criminal intimidation, you can also file a police complaint."
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
               { id: "legal-escalation", title: "Legal Escalation" },
               { id: "npa-classification", title: "NPA Classification" },
               { id: "rbi-guidelines", title: "RBI Guidelines Explained" },
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
              The Immediate Impact of Silence
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              When the phone rings and you see that familiar unknown number, the instinct to ignore it is powerful. It is a natural defense mechanism against stress. You might think, "I don't have the money right now, so what is the point of talking?" However, in the world of finance and debt recovery, silence is not golden it is dangerous.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              <strong>Ignoring calls of recovery agent</strong> does not make the debt disappear. In fact, it often signals to the lender that you are a "willful defaulter" someone who has the means to pay but is choosing not to. This classification changes their approach from negotiation to aggression.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
              <h3 className="text-xl font-bold text-red-800 mb-2">The Warning Signs</h3>
              <p className="text-red-900/80">
                If you have missed 2 or more EMIs and are actively avoiding calls, you are likely already in the "Hard Bucket" of collection. This means your case has been moved from standard bank staff to specialized third party recovery agencies whose primary goal is to extract payment by any means necessary.
              </p>
            </div>
          </section>

          <section id="psychological-toll" className="scroll-mt-32 mb-12">
             <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6">The Psychological Toll of Avoidance</h2>
             <p className="text-lg leading-relaxed mb-6">
               Living in fear of your phone is exhausting. The constant anxiety spikes every time it rings or vibrates can lead to severe mental health issues, including chronic stress, insomnia, and depression. Borrowers often report a sense of paralysis they are too scared to pick up, but too anxious to relax.
             </p>
             <p className="text-lg leading-relaxed mb-6">
               This avoidance creates a vicious cycle. Because you don't answer, you don't know the current status of your loan. You don't know if a legal notice has been dispatched. You remain in the dark, imagining the worst case scenarios, which are often far more terrifying than the reality. Breaking this silence is the first step to regaining control over your life and your mental peace.
             </p>
          </section>

          <section id="legal-escalation" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6">Legal Escalation: From Calls to Court</h2>
            <p className="text-lg leading-relaxed mb-6">
              One of the biggest misconceptions is that "nothing happens" if you ignore direct calls. While the police won't show up at your door for a missed payment, the legal machinery is slow but relentless. Here is the typical timeline of escalation when communication breaks down:
            </p>
            <ul className="space-y-6">
              <li className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <strong className="block text-xl text-[#1F5EFF] mb-2">1. The Legal Notice</strong>
                <p className="text-gray-700">
                  Usually sent after 60-90 days of non payment. This is a formal warning from the bank's lawyer demanding full payment within a set period (usually 7 to 15 days). Ignoring this is a mistake, as it serves as evidence in court that you were given a chance to pay.
                </p>
              </li>
               <li className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <strong className="block text-xl text-[#1F5EFF] mb-2">2. Arbitration Proceedings</strong>
                <p className="text-gray-700">
                  Many loan agreements have an arbitration clause. The bank can appoint an arbitrator to pass an award against you. If you ignore the arbitration notices and fail to appear, an "Ex Parte" (one sided) order will be passed against you, forcing you to pay the full amount plus interest and legal costs.
                </p>
              </li>
               <li className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <strong className="block text-xl text-[#1F5EFF] mb-2">3. Section 138 (Cheque Bounce)</strong>
                <p className="text-gray-700">
                  If you had given security cheques or if your ECS/NACH mandate bounces, the lender can file a criminal case under Section 138 of the Negotiable Instruments Act. This is serious. Unlike civil default, this is a criminal offense punishable by up to 2 years in jail or twice the cheque amount as fine. Ignoring summons in a 138 case can lead to a Non Bailable Warrant (NBW) for your arrest.
                </p>
              </li>
               <li className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <strong className="block text-xl text-[#1F5EFF] mb-2">4. Payment and Settlement Act (Section 25)</strong>
                <p className="text-gray-700">
                  Similar to cheque bounce, failed electronic transfers (ECS/NACH) are punishable offenses. Lenders frequently use this provision to pressure borrowers who remain silent.
                </p>
              </li>
            </ul>
          </section>

          <section id="npa-classification" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6">The NPA Trap (Non Performing Asset)</h2>
            <p className="text-lg leading-relaxed mb-6">
              In Indian banking, the 90 day mark is critical. If you fail to pay for 90 consecutive days, your loan account is classified as a Non Performing Asset (NPA).
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
               <div className="bg-orange-50 p-5 rounded-lg border border-orange-100">
                 <h4 className="font-bold text-orange-900 mb-2">Before NPA</h4>
                 <p className="text-sm text-orange-800/80">
                   You are still a standard customer, albeit a delinquent one. You can still negotiate for regularizing the account or restructuring.
                 </p>
               </div>
               <div className="bg-red-50 p-5 rounded-lg border border-red-100">
                 <h4 className="font-bold text-red-900 mb-2">After NPA</h4>
                 <p className="text-sm text-red-800/80">
                   The bank writes off the asset from their performing books. The SARFAESI Act (for secured loans) kicks in. You lose many rights to standard negotiation and enter the hardcore recovery phase.
                 </p>
               </div>
            </div>
          </section>

          <section id="rbi-guidelines" className="scroll-mt-32 mb-12">
             <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6">RBI Guidelines: Protection Against Harassment</h2>
             <p className="text-lg leading-relaxed mb-6">
               The Reserve Bank of India has clear, strict guidelines to protect borrowers. Even if you have defaulted, you do not lose your fundamental rights or your dignity. Ignorance of these rights often empowers rogue agents. here is what agents CANNOT do:
             </p>
             <div className="space-y-4">
               {[
                 { title: "Time Restrictions", desc: "Cannot call before 07:00 AM or after 07:00 PM." },
                 { title: "Privacy Violation", desc: "Cannot inform your neighbors, relatives, or colleagues about your debt." },
                 { title: "Abusive Language", desc: "Cannot use profane, threatening, or uncivil language." },
                 { title: "Physical Intimidation", desc: "Cannot use muscle power or threaten physical harm." },
                 { title: "False Legal Threats", desc: "Cannot impersonate police officers or lawyers to threaten arrest." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 items-start p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
                    <div className="min-w-[40px] h-[40px] rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2E2E2E]">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                 </div>
               ))}
             </div>
             <p className="mt-6 text-sm bg-blue-50 p-4 rounded text-blue-800">
               <strong>Note:</strong> If an agent violates these, you legally have the upper hand. You can file a complaint with the Banking Ombudsman.
             </p>
          </section>

          <section id="recovery-tactics" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6">Common Recovery Tactics (And Truths)</h2>
             <p className="text-lg leading-relaxed mb-6">
               Agents use psychological scripts designed to panic you. Here is how to decode them:
             </p>
             <div className="overflow-hidden border border-gray-200 rounded-xl">
               <table className="min-w-full divide-y divide-gray-200">
                 <thead className="bg-gray-50">
                   <tr>
                     <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Agent Says</th>
                     <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">The Truth</th>
                   </tr>
                 </thead>
                 <tbody className="bg-white divide-y divide-gray-200">
                   <tr>
                     <td className="px-6 py-4 text-sm font-medium text-red-600">"Police are on the way to arrest you."</td>
                     <td className="px-6 py-4 text-sm text-green-700">False. Police do not get involved in civil debt matters.</td>
                   </tr>
                   <tr>
                     <td className="px-6 py-4 text-sm font-medium text-red-600">"We will seize your property tomorrow."</td>
                     <td className="px-6 py-4 text-sm text-green-700">False. Requires court orders or lengthy SARFAESI procedure.</td>
                   </tr>
                   <tr>
                     <td className="px-6 py-4 text-sm font-medium text-red-600">"Your career will be ruined."</td>
                     <td className="px-6 py-4 text-sm text-green-700">False. Debt does not affect employment unless stated in contract.</td>
                   </tr>
                    <tr>
                     <td className="px-6 py-4 text-sm font-medium text-red-600">"You must pay by 5 PM or else..."</td>
                     <td className="px-6 py-4 text-sm text-green-700">False panic creation. Deadlines are often arbitrary.</td>
                   </tr>
                 </tbody>
               </table>
             </div>
          </section>

          <section id="what-not-to-do" className="scroll-mt-32 mb-12">
             <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6">What NOT To Do</h2>
             <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
               <li><strong>Do NOT switch off your phone permanently.</strong> This marks you as unreachable and untraceable, escalating physical field visits.</li>
               <li><strong>Do NOT agree to impossible dates.</strong> Don't promise to pay on Monday if you know you can't. Broken promises annoy agents more than no promises.</li>
               <li><strong>Do NOT get abusive.</strong> If you abuse the agent, you lose the moral and legal high ground. Always stay calm.</li>
               <li><strong>Do NOT sign blank documents.</strong> Never sign any paper or blank cheque given by a recovery agent under pressure.</li>
             </ul>
          </section>

          <section id="right-way-to-handle" className="scroll-mt-32 mb-12">
             <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6">The Right Way to Handle Recovery Calls</h2>
             <div className="bg-green-50/50 p-8 rounded-2xl border border-green-100">
                <ol className="list-decimal pl-5 space-y-4 font-medium text-gray-800">
                  <li>
                    <strong>Answer and Acknowledge:</strong> Pick up the call. State your name. "Yes, I am aware of the default."
                  </li>
                  <li>
                     <strong>State Your Hardship:</strong> Briefly explain WHY. "I have lost my job" or "I have a medical emergency." Keep it true and consistent.
                  </li>
                  <li>
                     <strong>Ask for Time (Realistically):</strong> "I need 3 months to stabilize." They won't like it, but it is on record.
                  </li>
                  <li>
                     <strong>Record the Call:</strong> Inform them, "I am recording this call for my safety." This usually forces them to behave significantly better.
                  </li>
                  <li>
                     <strong>Request Email Communication:</strong> "Please send any demand or notice to my registered email id."
                  </li>
                </ol>
             </div>
          </section>

           <section id="loan-settlement-role" className="scroll-mt-32 mb-12">
             <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6">How Loan Settlement Stops the Chaos</h2>
             <p className="text-lg leading-relaxed mb-6">
               If you truly cannot pay the full amount, continuing to answer calls and begging for time is a temporary fix. The interest keeps piling up. The permanent solution for unsecured debt in genuine hardship cases is <strong>Loan Settlement</strong>.
             </p>
             <p className="text-lg leading-relaxed mb-6">
               When you hire a professional settlement firm like SettleLoans:
             </p>
             <div className="grid sm:grid-cols-2 gap-4 mb-6">
               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                 <h4 className="font-bold text-[#1F5EFF] mb-2">1. Legal Buffer</h4>
                 <p className="text-sm">We direct all calls to our legal team. Agents are told to speak to your legal representative, not you.</p>
               </div>
               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                 <h4 className="font-bold text-[#1F5EFF] mb-2">2. Harassment Stops</h4>
                 <p className="text-sm">We enforce RBI guidelines rigorously. If they harass, we take legal action.</p>
               </div>
               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                 <h4 className="font-bold text-[#1F5EFF] mb-2">3. Negotiation</h4>
                 <p className="text-sm">We negotiate a one time settlement (OTS) for 50% or less of the outstanding amount.</p>
               </div>
               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                 <h4 className="font-bold text-[#1F5EFF] mb-2">4. Closure</h4>
                 <p className="text-sm">You pay the reduced amount, get an NOC, and the chapter is closed forever.</p>
               </div>
             </div>
           </section>

           <section id="credit-score-reality" className="scroll-mt-32 mb-12">
             <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6">The Truth About Credit Score</h2>
             <p className="text-lg leading-relaxed mb-6">
               Many people ignore calls hoping to "save" their credit score by paying later. The truth is, the moment you miss 3 payments, your score is already damaged. Ignoring calls does not protect your score; it only delays the inevitable settlement conversation.
             </p>
             <p className="text-lg leading-relaxed">
               It is better to settle, close the account, take the temporary hit, and then start rebuilding your score immediately, rather than letting the default linger for years as an "Open" bad debt.
             </p>
           </section>

           <section id="reviews" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Stories of Relief</h2>
             <div className="grid md:grid-cols-2 gap-6 not-prose">
              {[
                { 
                  name: "Rajesh Menon", 
                  loc: "Hyderabad", 
                  loan: "Personal Loan: ₹5 Lakhs", 
                  res: "Settled for: ₹2.1 Lakhs",
                  story: "I stopped picking up calls because of the abuse. SettleLoans stepped in, handled the agents, and settled my loan. The harassment stopped immediately."
                },
                { 
                  name: "Sneha Gupta", 
                  loc: "Delhi", 
                  loan: "Credit Card: ₹3.5 Lakhs", 
                  res: "Settled for: ₹1.2 Lakhs",
                  story: "My anxiety was through the roof every time the phone rang. The legal team directed all calls to themselves. My peace of mind is finally restored."
                },
                { 
                  name: "Amit Patel", 
                  loc: "Ahmedabad", 
                  loan: "Multiple Loans: ₹9 Lakhs", 
                  res: "Settled for: ₹4 Lakhs",
                  story: "Ignoring calls led to a legal notice. SettleLoans replied to the notice and negotiated a settlement. Don't ignore the problem, get professional help."
                },
                { 
                  name: "David F.", 
                  loc: "Chennai", 
                  loan: "Personal Loan: ₹7 Lakhs", 
                  res: "Settled for: ₹3.2 Lakhs",
                  story: "They were calling my office and shaming me. SettleLoans stopped that immediately with strict legal action. Best decision to hire them."
                }
              ].map((review, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-section-light)] flex items-center justify-center font-bold text-[var(--color-primary)] mr-3">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h5 className="font-bold text-[var(--color-text-hero)]">{review.name}</h5>
                      <p className="text-xs text-[var(--color-text-muted)]">{review.loc}</p>
                    </div>
                    <div className="ml-auto text-yellow-400 text-sm">★★★★★</div>
                  </div>
                  <div className="mb-4 text-xs font-mono bg-gray-50 p-2 rounded border border-gray-100">
                    <span className="block text-red-600">⚠ {review.loan}</span>
                    <span className="block text-green-600 font-bold">✓ {review.res}</span>
                  </div>
                  <p className="text-sm text-[var(--color-text-body)] italic leading-relaxed">"{review.story}"</p>
                </div>
              ))}
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
