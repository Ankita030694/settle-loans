import type { Metadata } from "next";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Is it Legal for Bank Recovery Agents to Visit Your Home on Sundays?",
  description: "A definitive breakdown of the RBI's Fair Practices Code regarding recovery agent timings. Learn if banks can visit on Sundays or holidays, and how to stop harassment.",
  alternates: {
    canonical: "https://settleloans.in/is-it-legal-for-recovery-agents-to-visit-home-on-sundays-or-public-holidays",
  },
};

export default function SundayRecoveryRulesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/is-it-legal-for-recovery-agents-to-visit-home-on-sundays-or-public-holidays#webpage",
        url: "https://settleloans.in/is-it-legal-for-recovery-agents-to-visit-home-on-sundays-or-public-holidays",
        name: "Is it Legal for Bank Recovery Agents to Visit Your Home on Sundays?",
        description: "A definitive breakdown of the RBI's Fair Practices Code regarding the specific timings and days recovery agents are allowed to visit a defaulter's home.",
        breadcrumb: { "@id": "https://settleloans.in/is-it-legal-for-recovery-agents-to-visit-home-on-sundays-or-public-holidays#breadcrumb" },
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/is-it-legal-for-recovery-agents-to-visit-home-on-sundays-or-public-holidays#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://settleloans.in" },
          { "@type": "ListItem", position: 2, name: "Legal Rights", item: "https://settleloans.in/legal-rights" },
          { "@type": "ListItem", position: 3, name: "Recovery Agents on Sundays", item: "https://settleloans.in/is-it-legal-for-recovery-agents-to-visit-home-on-sundays-or-public-holidays" },
        ],
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/is-it-legal-for-recovery-agents-to-visit-home-on-sundays-or-public-holidays#article",
        headline: "Is it Legal for Bank Recovery Agents to Visit Your Home on Sundays or Public Holidays in India?",
        description: "Understanding RBI guidelines on recovery agent timings, Sunday visit rules, and how to stop bank harassment at your home.",
        author: { "@type": "Organization", name: "SettleLoans Legal Desk" },
        publisher: {
          "@type": "Organization",
          name: "SettleLoans",
          logo: { "@type": "ImageObject", url: "https://settleloans.in/logo/logo.svg" },
        },
        datePublished: "2024-04-15",
        dateModified: "2024-04-15",
        mainEntityOfPage: { "@id": "https://settleloans.in/is-it-legal-for-recovery-agents-to-visit-home-on-sundays-or-public-holidays#webpage" },
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/is-it-legal-for-recovery-agents-to-visit-home-on-sundays-or-public-holidays#product",
        name: "Harassment Protection & Loan Settlement Services",
        brand: { "@type": "Brand", name: "SettleLoans" },
        image: "https://settleloans.in/logo/logo.svg",
        description: "Professional legal defense and settlement negotiation against unauthorized recovery agent visits and bank harassment.",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "2150",
          bestRating: "5",
          worstRating: "1",
        },
        review: [
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Rahul V." },
            datePublished: "2024-03-10",
            reviewBody: "Agents kept showing up on Sundays. SettleLoans stepped in, sent a legal notice to the bank citing RBI rules, and the weekend visits stopped instantly.",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5", worstRating: "1" },
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Meera S." },
            datePublished: "2024-02-14",
            reviewBody: "I didn't know 7 AM to 7 PM was the rule until I read their guide. Hired them and they settled my personal loan without any more harassment at my home.",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5", worstRating: "1" },
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Vikram K." },
            datePublished: "2024-01-22",
            reviewBody: "The mental peace of knowing recovery agents can't ruin your public holidays is priceless. Great legal support from the team.",
            reviewRating: { "@type": "Rating", ratingValue: "4", bestRating: "5", worstRating: "1" },
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Anita D." },
            datePublished: "2024-04-02",
            reviewBody: "Highly professional. They taught me how to record the interaction on a Sunday and used it to file a Banking Ombudsman grievance. Bank settled fast after that.",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5", worstRating: "1" },
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/is-it-legal-for-recovery-agents-to-visit-home-on-sundays-or-public-holidays#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can recovery agents visit my home on a Sunday?",
            acceptedAnswer: { "@type": "Answer", text: "No, under standard RBI guidelines and the Fair Practices Code, recovery agents are generally restricted from visiting your home or calling you on Sundays and designated public holidays." }
          },
          {
            "@type": "Question",
            name: "What are the legal timings for recovery agents to visit?",
            acceptedAnswer: { "@type": "Answer", text: "According to the RBI, recovery agents can only contact you or visit your home between 7:00 AM and 7:00 PM." }
          },
          {
            "@type": "Question",
            name: "Can agents visit on public holidays like Diwali or Republic Day?",
            acceptedAnswer: { "@type": "Answer", text: "No. Visits and calls on gazetted public holidays are strictly prohibited and constitute harassment under RBI rules." }
          },
          {
            "@type": "Question",
            name: "What should I do if an agent visits outside allowed hours?",
            acceptedAnswer: { "@type": "Answer", text: "You should calmly record the interaction, refuse to engage in financial discussions, ask for their ID, and inform them they are violating RBI guidelines. You can then file a complaint." }
          },
          {
            "@type": "Question",
            name: "Do I have the right to deny entry to a recovery agent?",
            acceptedAnswer: { "@type": "Answer", text: "Yes. Recovery agents have no legal authority to forcefully enter your home. They are not police officers or court officials." }
          },
          {
            "@type": "Question",
            name: "Can recovery agents humiliate me in front of my neighbors?",
            acceptedAnswer: { "@type": "Answer", text: "Absolutely not. The RBI explicitly prohibits the use of intimidation, humiliation, or any behavior that breaches your privacy and dignity." }
          },
          {
            "@type": "Question",
            name: "How do I complain to the Banking Ombudsman about harassment?",
            acceptedAnswer: { "@type": "Answer", text: "You must first complain to the bank's grievance officer. If they do not resolve the issue within 30 days, you can escalate it to the RBI Banking Ombudsman via the CMS portal." }
          },
          {
            "@type": "Question",
            name: "Can police help if an agent shows up on a Sunday?",
            acceptedAnswer: { "@type": "Answer", text: "If the agent is trespassing, acting violently, or threatening you, you can and should call 112 to file a police complaint for criminal intimidation and trespass." }
          },
          {
            "@type": "Question",
            name: "Will filing a complaint against an agent stop the recovery process?",
            acceptedAnswer: { "@type": "Answer", text: "Filing a complaint will stop illegal harassment, but it does not erase your debt. You still need to negotiate a settlement or repayment plan with the bank." }
          },
          {
            "@type": "Question",
            name: "Can a legal service stop agents from coming to my house?",
            acceptedAnswer: { "@type": "Answer", text: "Yes, hiring a legal firm like SettleLoans allows you to issue a formal Cease and Desist notice to the bank, redirecting all communication to your legal representative." }
          },
        ]
      },
    ],
  };

  const tocItems = [
    { id: "intro", title: "The Reality of Weekend Bank Visits" },
    { id: "rbi-timings", title: "RBI Guidelines on Recovery Timings" },
    { id: "holiday-rules", title: "Can Banks Visit on Sundays & Holidays?" },
    { id: "what-to-do", title: "Step-by-Step: What to Do If They Show Up" },
    { id: "your-rights", title: "Understanding Your Core Rights" },
    { id: "ombudsman", title: "Filing a Grievance with Banking Ombudsman" },
    { id: "success-stories", title: "Real Success Stories" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-16 pb-8 md:pt-24 md:pb-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Know Your Legal Rights
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Is it Legal for Bank Recovery Agents to Visit Your Home on <span className="text-[#1F5EFF]">Sundays or Holidays?</span>
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              A definitive breakdown of the RBI's Fair Practices Code regarding the specific timings and days recovery agents are allowed to visit. Stop bank harassment today.
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
                <li><Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link></li>
                <li><span className="text-gray-300">/</span></li>
                <li><Link href="/legal-rights" className="hover:text-[#1F5EFF] transition-colors">Legal Rights</Link></li>
                <li><span className="text-gray-300">/</span></li>
                <li className="font-bold text-[#2E2E2E]">Recovery Agent Sunday Rules</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">
          
          {/* Left Column: TOC */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>

          {/* Middle Column: Article */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            {/* Intro Section */}
            <section id="intro" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                The Reality of Weekend Bank Visits
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  There is nothing more distressing than trying to enjoy a quiet Sunday morning with your family, only to have loud banging on your front door. You open it to find recovery agents demanding immediate payment for a defaulted personal loan or credit card.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Many borrowers in India endure this humiliation, assuming that because they owe money, the bank has the ultimate authority to dictate when and where they can be approached. This is a dangerous misconception.
                </p>
                <p className="text-lg leading-relaxed mb-0 text-gray-700 font-bold">
                  The Reserve Bank of India (RBI) has laid down extremely strict guidelines regarding the conduct of recovery agents. In this comprehensive guide, we will break down exactly what the rules are regarding Sunday visits, public holidays, and specific timings, and how you can legally protect your peace.
                </p>
              </div>
            </section>

            {/* RBI Timings Section */}
            <section id="rbi-timings" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                RBI Guidelines on Recovery Timings
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The RBI's Fair Practices Code is the rulebook that all banks and Non-Banking Financial Companies (NBFCs) must follow. It explicitly dictates the operational boundaries for debt collection to ensure borrowers are treated with dignity.
              </p>
              
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">The 7 AM to 7 PM Rule</h4>
                <p className="text-lg leading-relaxed text-blue-900 mb-4">
                  The central tenet of the RBI's timing regulation is clear and uncompromising:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900 font-medium"><strong>No Early Mornings:</strong> Recovery agents cannot call you or visit your home before 7:00 AM.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900 font-medium"><strong>No Late Nights:</strong> Recovery agents cannot contact you or visit your premises after 7:00 PM.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900 font-medium"><strong>Strict Compliance:</strong> This applies to phone calls, SMS, WhatsApp messages, and physical visits. Any contact outside this 12-hour window is considered harassment.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Sunday and Holiday Rules */}
            <section id="holiday-rules" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Can Banks Visit on Sundays & Public Holidays?
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Recovery agencies often use weekends as a pressure tactic, knowing that you are likely to be home with family, thereby increasing the psychological pressure and potential for public embarrassment.
              </p>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-4">The Verdict on Sundays and Holidays</h4>
                <p className="text-lg leading-relaxed text-red-900 font-medium">
                  According to the RBI's strict directives on customer protection and grievance redressal, banks and their outsourced agencies should ordinarily contact borrowers only during standard business hours.
                </p>
                <p className="text-lg leading-relaxed text-red-900 mt-4 font-bold">
                  Visiting a borrower's residence on Sundays or gazetted Public Holidays (such as Independence Day, Diwali, or Eid) without prior, explicit, and documented consent from the borrower is a severe violation of the Fair Practices Code.
                </p>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                If an agent arrives on a Sunday unannounced, they are not operating within their legal rights. You have every right to refuse to engage with them and ask them to leave your property immediately.
              </p>
            </section>

            {/* What to Do Section */}
            <section id="what-to-do" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Step-by-Step: What to Do If They Show Up
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                Knowing your rights is only half the battle. Executing them calmly in a stressful situation is crucial. Here is a step-by-step guide on how to handle unauthorized weekend visits.
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Do Not Let Them Inside</h3>
                    <p className="text-lg leading-relaxed text-gray-600">Recovery agents are not law enforcement officers. They do not have search warrants. You are under no obligation to let them cross the threshold of your door. Speak to them from the doorway or ask them to wait outside.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Start Recording (Video/Audio)</h3>
                    <p className="text-lg leading-relaxed text-gray-600">Take out your smartphone and start recording the interaction. State clearly: <em>"I am recording this interaction for my safety and regulatory compliance."</em> Often, the mere presence of a camera will force rogue agents to behave properly or leave immediately.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Demand Identification</h3>
                    <p className="text-lg leading-relaxed text-gray-600">Ask for their ID card and the official authorization letter from the bank. The RBI mandates that agents must carry proper identification and the authorization letter upon which the bank has assigned them your case.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">4</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">State the RBI Guidelines</h3>
                    <p className="text-lg leading-relaxed text-gray-600">Calmly inform them: <em>"It is a Sunday/Public Holiday. Under RBI guidelines, you are not authorized to visit my home today without my prior consent. Please leave and contact me during business hours."</em> Refuse to discuss the debt further.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Core Rights Section */}
            <section id="your-rights" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Understanding Your Core Rights
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The RBI has explicitly outlined what constitutes "harassment." Make sure you are aware of these core protections.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Right to Privacy</h3>
                  <p className="text-gray-700 leading-relaxed">Agents cannot discuss your debt with your neighbors, relatives, or employer. Shaming tactics are strictly illegal.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Right Against Intimidation</h3>
                  <p className="text-gray-700 leading-relaxed">Use of foul language, physical threats, or aggressive posturing is a criminal offense under the IPC.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Right to Fair Notice</h3>
                  <p className="text-gray-700 leading-relaxed">Banks must inform you regarding the details of the recovery agency assigned to your case before they attempt contact.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Right to Lodge Complaints</h3>
                  <p className="text-gray-700 leading-relaxed">You have the absolute right to complain against rogue agents without fear of retaliation from the bank.</p>
                </div>
              </div>
            </section>

            {/* Ombudsman Section */}
            <section id="ombudsman" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Filing a Grievance with the Banking Ombudsman
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                If the bank fails to rein in their agents, you must escalate the matter to regulatory authorities. The RBI provides a robust mechanism for this.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h4 className="text-xl font-bold text-gray-800 mb-4">The Escalation Process</h4>
                <ol className="list-decimal list-inside space-y-4 text-gray-700 text-lg leading-relaxed">
                  <li><strong>Step 1: Write to the Nodal Officer.</strong> Draft a formal email detailing the harassment (mentioning dates, times, and Sunday visits). Attach any video or audio recordings.</li>
                  <li><strong>Step 2: Wait 30 Days.</strong> The bank is legally required to resolve the grievance within 30 days of receiving your complaint.</li>
                  <li><strong>Step 3: RBI CMS Portal.</strong> If the bank ignores you or provides an unsatisfactory reply, log on to the RBI Complaint Management System (CMS) website and file a complaint against the bank for violating the Fair Practices Code.</li>
                </ol>
                <p className="mt-6 text-gray-600 italic">Pro Tip: The RBI takes harassment complaints very seriously. Banks can face severe penalties, including bans on using third-party recovery agents, if found guilty.</p>
              </div>
            </section>

            {/* Success Stories */}
            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Real Success Stories of Stopping Harassment
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                You are not alone in this fight. Here is how professional intervention has helped others reclaim their peace.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Card 1 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                      RV
                    </div>
                    <div className="flex gap-1 text-yellow-400">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    </div>
                  </div>
                  <h4 className="font-bold text-[#2E2E2E] text-lg mb-2">Rahul V.</h4>
                  <p className="text-gray-600 text-sm italic mb-6">"Agents kept showing up on Sundays. SettleLoans stepped in, sent a legal notice to the bank citing RBI rules, and the weekend visits stopped instantly."</p>
                  <div className="flex gap-2">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">Loan: ₹8L</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Settled: ₹3L</span>
                  </div>
                </div>
                
                {/* Card 2 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                      MS
                    </div>
                    <div className="flex gap-1 text-yellow-400">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    </div>
                  </div>
                  <h4 className="font-bold text-[#2E2E2E] text-lg mb-2">Meera S.</h4>
                  <p className="text-gray-600 text-sm italic mb-6">"I didn't know 7 AM to 7 PM was the rule until I read their guide. Hired them and they settled my personal loan without any more harassment at my home."</p>
                  <div className="flex gap-2">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">Loan: ₹12L</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Settled: ₹4.5L</span>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQs Section */}
            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-[#2E2E2E] mb-2">Can recovery agents visit my home on a Sunday?</h3>
                  <p className="text-gray-700">No, under standard RBI guidelines and the Fair Practices Code, recovery agents are generally restricted from visiting your home or calling you on Sundays and designated public holidays.</p>
                </div>
                <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-[#2E2E2E] mb-2">What are the legal timings for recovery agents to visit?</h3>
                  <p className="text-gray-700">According to the RBI, recovery agents can only contact you or visit your home between 7:00 AM and 7:00 PM on standard working days.</p>
                </div>
                <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-[#2E2E2E] mb-2">Can agents visit on public holidays like Diwali or Republic Day?</h3>
                  <p className="text-gray-700">No. Visits and calls on gazetted public holidays are strictly prohibited and constitute harassment under RBI rules.</p>
                </div>
                <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-[#2E2E2E] mb-2">What should I do if an agent visits outside allowed hours?</h3>
                  <p className="text-gray-700">You should calmly record the interaction, refuse to engage in financial discussions, ask for their ID, and inform them they are violating RBI guidelines. You can then file a complaint.</p>
                </div>
                <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-[#2E2E2E] mb-2">Do I have the right to deny entry to a recovery agent?</h3>
                  <p className="text-gray-700">Yes. Recovery agents have no legal authority to forcefully enter your home. They are not police officers or court officials.</p>
                </div>
                <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-[#2E2E2E] mb-2">Can recovery agents humiliate me in front of my neighbors?</h3>
                  <p className="text-gray-700">Absolutely not. The RBI explicitly prohibits the use of intimidation, humiliation, or any behavior that breaches your privacy and dignity.</p>
                </div>
                <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-[#2E2E2E] mb-2">How do I complain to the Banking Ombudsman about harassment?</h3>
                  <p className="text-gray-700">You must first complain to the bank's grievance officer. If they do not resolve the issue within 30 days, you can escalate it to the RBI Banking Ombudsman via the CMS portal.</p>
                </div>
                <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-[#2E2E2E] mb-2">Can police help if an agent shows up on a Sunday?</h3>
                  <p className="text-gray-700">If the agent is trespassing, acting violently, or threatening you, you can and should call 112 to file a police complaint for criminal intimidation and trespass.</p>
                </div>
                <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-[#2E2E2E] mb-2">Will filing a complaint against an agent stop the recovery process?</h3>
                  <p className="text-gray-700">Filing a complaint will stop illegal harassment, but it does not erase your debt. You still need to negotiate a settlement or repayment plan with the bank.</p>
                </div>
                <div className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-[#2E2E2E] mb-2">Can a legal service stop agents from coming to my house?</h3>
                  <p className="text-gray-700">Yes, hiring a legal firm like SettleLoans allows you to issue a formal Cease and Desist notice to the bank, redirecting all communication to your legal representative.</p>
                </div>
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 relative z-10">Stop the Sunday Harassment</h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto relative z-10 leading-relaxed">
                Did recovery agents ruin your Sunday by showing up unannounced and causing a scene? You have rights. Hire us to file a formal harassment complaint with the RBI and protect your family's peace.
              </p>
              <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold text-lg py-4 px-12 rounded-xl hover:scale-105 transition-transform shadow-xl relative z-10">
                Get Legal Protection Now
              </Link>
              
              <div className="mt-16 pt-8 border-t border-gray-100 text-center relative z-10">
                <p className="text-gray-400 text-sm italic">
                  Disclaimer: This information is for educational purposes and does not constitute formal legal advice. Always consult with a legal professional regarding your specific situation and the latest RBI guidelines.
                </p>
              </div>
            </div>

          </article>

          {/* Right Column: Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              
              {/* Card 1 (Dark CTA) */}
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <h3 className="text-2xl font-black mb-4 relative z-10">Facing Harassment?</h3>
                <p className="text-gray-300 text-sm mb-6 relative z-10">
                  Our legal experts can issue a formal cease and desist notice to your lenders immediately.
                </p>
                <Link href="/contact" className="inline-block w-full py-3 bg-[#1F5EFF] rounded-lg font-bold text-sm hover:bg-blue-600 transition-colors relative z-10">
                  Speak to an Expert
                </Link>
              </div>

              {/* Card 2 (White Resources) */}
              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Related Resources
                </h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/rbi-guidelines-calling-after-7pm" className="group flex items-center text-sm font-bold text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3"></span>
                      RBI Rules: Calling After 7 PM
                    </Link>
                  </li>
                  <li>
                    <Link href="/police-case-for-credit-card-debt" className="group flex items-center text-sm font-bold text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3"></span>
                      Police Case for Credit Card Debt?
                    </Link>
                  </li>
                  <li>
                    <Link href="/recovery-agents-calling-family-members" className="group flex items-center text-sm font-bold text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3"></span>
                      Can Agents Call Family Members?
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement-process-in-india" className="group flex items-center text-sm font-bold text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3"></span>
                      Guide to Loan Settlement
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
