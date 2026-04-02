import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShieldAlt, faGavel, faScaleBalanced, faHandshake, faCheckCircle, faExclamationTriangle, faClock, faIdCard, faDoorOpen, faUserShield } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Recovery Agent Home Visit Rules | RBI Guidelines & Borrower Rights",
  description: "Understand the strict RBI rules for recovery agent home visits in India. Know the timing (8am-7pm), ID requirements, and what to do if agents harass you at home.",
  alternates: {
    canonical: "https://settleloans.in/recovery-agent-home-visit-rules",
  },
};

export default function RecoveryHomeVisitRulesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/recovery-agent-home-visit-rules#webpage",
        "url": "https://settleloans.in/recovery-agent-home-visit-rules",
        "name": "Recovery Agent Home Visit Rules | RBI Guidelines & Borrower Rights",
        "description": "Comprehensive guide on the legal rules for debt recovery agent home visits in India, following RBI circulars.",
        "breadcrumb": { "@id": "https://settleloans.in/recovery-agent-home-visit-rules#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/recovery-agent-home-visit-rules#breadcrumb",
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
            "name": "Recovery Agent Home Visit Rules",
            "item": "https://settleloans.in/recovery-agent-home-visit-rules"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/recovery-agent-home-visit-rules#article",
        "headline": "RBI Rules for Recovery Agent Home Visits: Know Your Rights as a Borrower",
        "description": "Exhaustive legal guide on the mandatory protocols for bank recovery agents visiting your home or workplace in India.",
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
        "datePublished": "2024-03-29",
        "dateModified": "2024-03-29",
        "mainEntityOfPage": { "@id": "https://settleloans.in/recovery-agent-home-visit-rules#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/recovery-agent-home-visit-rules#product",
        "name": "Debt Settlement & Harassment Protection",
        "description": "Professional mediation to stop illegal recovery visits and settle debts for a fraction of the total dues.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1340"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Vikas P." },
            "datePublished": "2024-01-20",
            "reviewBody": "Recovery agents were coming to my home every day. SettleLoans stopped the visits by representing me legally.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Anjali S." },
            "datePublished": "2024-03-10",
            "reviewBody": "They explained the RBI rules which I didn't know. The agent harassment stopped immediately.",
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
              Consumer Rights & Banking Law
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Recovery Agent Home Visit Rules: <br className="hidden md:block" /> Know the Legal Protocol
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
              Is a debt collector standing at your door? In India, the law protects your home from unauthorized entry and harassment. Learn the strict RBI rules that agents must follow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Stop Home Visits Now
              </Link>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-4">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-xs md:text-sm text-[#747474]">
                <li>
                  <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
                </li>
                <li>
                  <span className="text-gray-300">/</span>
                </li>
                <li className="font-bold text-[#2E2E2E]" aria-current="page">
                  Recovery Agent Home Visit Rules
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-8 relative">

          {/* Left Column: TOC (Sticky) */}
          <aside className="hidden lg:block w-[210px] shrink-0 relative">
            <div className="sticky top-32">
              <TableOfContents
                items={[
                  { id: "intro", title: "Introduction" },
                  { id: "8am-7pm-rule", title: "The 8 AM to 7 PM Rule" },
                  { id: "identification", title: "Mandatory Identification" },
                  { id: "privacy", title: "Right to Privacy" },
                  { id: "unauthorized-entry", title: "Unauthorized Entry" },
                  { id: "behavior-standards", title: "Behavior Standards" },
                  { id: "no-visit-days", title: "No-Visit Days" },
                  { id: "documentation", title: "Documenting the Visit" },
                  { id: "police-protection", title: "Police Protection" },
                  { id: "rbi-complaint", title: "Escalating to RBI" },
                  { id: "settleloans-shield", title: "Our Protection Law" },
                  { id: "faqs", title: "Frequently Asked Questions" }
                ]}
              />
            </div>
          </aside>

          {/* Middle Column: Main Content */}
          <article className="flex-1 min-w-0 font-sans text-[#2E2E2E]">

            <section id="intro" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                The Sanctuary of Home: <span className="text-[#1F5EFF]">Protecting Your Space from Debt Collectors</span>
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 z-0"></div>
                <p className="text-lg leading-relaxed mb-6 relative z-10">
                  There is perhaps no more stressful moment for a borrower than hearing a loud, persistent knock on the front door and knowing that a recovery agent is on the other side. This scenario often brings an overwhelming sense of shame, especially if neighbors are watching or family members are present. Many borrowers feel powerless in this situation, believing that their debt has stripped them of their basic civil rights.
                </p>
                <p className="text-lg leading-relaxed mb-6 relative z-10">
                  We are here to tell you clearly: Your home is your santuary. In the eyes of the law in India, being a debtor does not make you a criminal or a second class citizen. The Reserve Bank of India (RBI) has enacted very specific, non-negotiable rules for how recovery agents must behave when they visit a borrower's residence. These rules are designed to protect your dignity, your privacy, and your mental well-being.
                </p>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex items-start gap-4 mb-6 relative z-10">
                  <FontAwesomeIcon icon={faShieldAlt} className="text-[#1F5EFF] w-6 h-6 mt-1" />
                  <div>
                    <p className="text-blue-900 font-bold mb-1">Your Primary Defense</p>
                    <p className="text-sm text-blue-800">Knowing the exact words of the RBI guidelines is your strongest shield. When you can cite specific rules to an agent, the power dynamic shifts. They realize you are an informed borrower who cannot be easily bullied.</p>
                  </div>
                </div>
                <p className="text-lg leading-relaxed font-bold text-[#1F5EFF] relative z-10">
                  SettleLoans has helped thousands of families regain peace of mind by enforcing these rules. This guide is your definitive resource to understanding what is legal—and what is absolutely not allowed—during a home visit.
                </p>
              </div>
            </section>

            <section id="8am-7pm-rule" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                The 8 AM to 7 PM Rule: <span className="text-[#1F5EFF]">Mandatory Timings</span>
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                The most basic and frequently violated rule involves the timing of recovery activities. The RBI is very explicit about this. All field visits, whether to your home or your place of work, must only be conducted during reasonable hours. What constitutes 'reasonable' is not left to interpretation; it is clearly defined by law.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-[#F8F9FA] p-8 rounded-2xl border border-[#DEDEDE] relative">
                  <div className="w-12 h-12 bg-[#1F5EFF] text-white rounded-xl flex items-center justify-center mb-6 shadow-lg rotate-3">
                    <FontAwesomeIcon icon={faClock} className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">The Legal Window</h3>
                  <p className="text-lg font-black text-[#1F5EFF] mb-4">8:00 AM : 7:00 PM</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    This is the only time an agent is legally allowed to knock on your door or call your phone for recovery purposes. Any visit before 8 AM or after 7 PM is a direct violation of the RBI Fair Practice Code.
                  </p>
                </div>
                <div className="bg-red-50 p-8 rounded-2xl border border-red-100 relative">
                  <div className="w-12 h-12 bg-red-500 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg -rotate-3">
                    <FontAwesomeIcon icon={faExclamationTriangle} className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">The Violation Zone</h3>
                  <p className="text-lg font-black text-red-600 mb-4">7:01 PM : 7:59 AM</p>
                  <p className="text-sm text-red-800 leading-relaxed">
                    If an agent arrives at your door during these hours, you are under no obligation to open it. In fact, such a visit is considered harassment and can be used as strong evidence in a complaint against the bank.
                  </p>
                </div>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Recovery agents often try to visit early in the morning or late at night specifically to catch you off guard or to maximize the potential for social embarrassment. They know that you are more likely to agree to unreasonable demands just to get them to leave before your family wakes up or before your neighbors return from work.
              </p>
              <p className="text-lg leading-relaxed">
                Remember, the bank's internal policy cannot overrule the RBI's national mandate. If an agent claims their &quot;bank allows them to visit until 9 PM,&quot; they are lying. You should never feel guilty about refusing to speak with someone who is violating these fundamental timing rules.
              </p>
            </section>

            <section id="identification" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                Mandatory Identification: <span className="text-[#1F5EFF]">Who is at Your Door?</span>
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                Just because someone says they are from the bank does not make it true. The debt recovery industry in India is large and includes many third party agencies. Some of these agencies operate with very little oversight from the banks themselves. To prevent fraud and ensure accountability, the RBI requires every agent to follow a strict identification protocol.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-6 p-8 bg-white border border-[#DEDEDE] rounded-2xl hover:shadow-md transition-shadow">
                  <div className="shrink-0 w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faIdCard} className="text-[#1F5EFF] w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">1. The Official ID Card</h4>
                    <p className="text-gray-600 leading-relaxed text-base">
                      The agent must carry and proactively show an identity card issued by the bank or the NBFC they represent. It should have their clear photograph, name, and the official seal of the financial institution.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6 p-8 bg-white border border-[#DEDEDE] rounded-2xl hover:shadow-md transition-shadow">
                  <div className="shrink-0 w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faScaleBalanced} className="text-[#1F5EFF] w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">2. The Authorization Letter</h4>
                    <p className="text-gray-600 leading-relaxed text-base">
                      An ID card is not enough. The agent must also carry a specific letter from the bank authorizing that particular agency and the agent to handle your specific loan account. This letter should clearly mention your loan number.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6 p-8 bg-white border border-[#DEDEDE] rounded-2xl hover:shadow-md transition-shadow">
                  <div className="shrink-0 w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faHandshake} className="text-[#1F5EFF] w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">3. Professional Introduction</h4>
                    <p className="text-gray-600 leading-relaxed text-base">
                      The agent must introduce themselves politely and state their purpose immediately. They are representatives of a professional institution and must act with the same decorum you would expect at a bank branch.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-lg leading-relaxed">
                If an agent refuses to show their ID or the authorization letter, you should immediately ask them to leave your property. Without these documents, they are legally considered a stranger, and their presence on your property could be treated as criminal trespass. Never, under any circumstances, make a payment or sign any documents for someone who cannot prove their official status.
              </p>
            </section>

            <section id="privacy" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                The Right to Privacy: <span className="text-[#1F5EFF]">Boundaries of Disclosure</span>
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Privacy is perhaps the most frequent casualty during a recovery visit. Agents often use the threat of social exposure as their primary weapon. They might loud talk in the hallway of your apartment complex, shout across your front gate, or attempt to speak with your neighbors about your &quot;debt problem.&quot;
              </p>
              <div className="bg-red-50 p-8 rounded-2xl border border-red-100 mb-8">
                <h3 className="text-xl font-bold text-red-900 mb-4 uppercase tracking-tighter italic">Strict Prohibitions on Privacy Breach</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="shrink-0 mt-1.5 w-2 h-2 bg-red-500 rounded-full"></div>
                    <p className="text-red-800"><strong>No Third-Party Disclosure:</strong> Agents are legally barred from sharing your debt status with anyone other than you. They cannot talk to your neighbors, friends, or even your landlord.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="shrink-0 mt-1.5 w-2 h-2 bg-red-500 rounded-full"></div>
                    <p className="text-red-800"><strong>Workplace Visits:</strong> While visits to the workplace are allowed, the agent cannot humiliate you in front of colleagues. They must request a private meeting space or speak to you outside of common areas.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="shrink-0 mt-1.5 w-2 h-2 bg-red-500 rounded-full"></div>
                    <p className="text-red-800"><strong>Family Sensitivity:</strong> Agents cannot intimidate your family members. If you are not home, they can only leave a message asking you to call them back; they cannot harass your spouse or children.</p>
                  </li>
                </ul>
              </div>
              <p className="text-lg leading-relaxed">
                If an agent violates your privacy by informing your neighbors about your default, this is a very serious matter. It constitutes a breach of the confidentiality clause that every bank is bound by. You can take this to the Banking Ombudsman, and the bank could be forced to pay you significant compensation for the damage to your reputation. At SettleLoans, we often use such privacy violations as a very effective tool to negotiate a much larger waiver on the debt.
              </p>
            </section>

            <section id="unauthorized-entry" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                Unauthorized Entry: <span className="text-[#1F5EFF]">A Guest, Not an Owner</span>
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                This is a critical point that many borrowers misunderstand: A recovery agent has absolutely no legal power to enter your home without your permission. They are not police officers, they are not court-appointed bailiffs, and they have no search warrants. 
              </p>
              <div className="bg-gray-50 rounded-2xl p-8 border border-[#DEDEDE] relative overflow-hidden mb-12">
                <FontAwesomeIcon icon={faDoorOpen} className="absolute -top-4 -right-4 w-32 h-32 text-gray-200" />
                <h3 className="text-2xl font-bold mb-4 relative z-10">Cross-Examining the Myth of Entry</h3>
                <p className="text-lg leading-relaxed mb-6 relative z-10">
                  Agents often use high-pressure language to imply they have the right to &quot;inspect the property&quot; or &quot;attach the furniture.&quot; Unless you have a specific court order for asset seizure (which usually applies only to secured loans like car loans and follows a very different legal path), these threats are completely hollow.
                </p>
                <div className="space-y-4 relative z-10">
                  <div className="p-4 bg-white rounded-xl border border-gray-100 flex gap-4 shadow-sm">
                    <div className="font-bold text-[#1F5EFF]">Rule:</div>
                    <p className="text-sm">You can speak with the agent at your front gate or doorstep. You are not required to let them inside your home.</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-gray-100 flex gap-4 shadow-sm">
                    <div className="font-bold text-[#1F5EFF]">Rule:</div>
                    <p className="text-sm">If an agent forces their way past you or puts their foot in the door, they are committing a crime. You should call 112 or your local police station immediately.</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-gray-100 flex gap-4 shadow-sm">
                    <div className="font-bold text-[#1F5EFF]">Rule:</div>
                    <p className="text-sm">They cannot touch your belongings, move your furniture, or 'mark' items with stickers. Only a court officer can do this after a long legal process.</p>
                  </div>
                </div>
              </div>
              <p className="text-lg leading-relaxed">
                By maintaining the physical boundary of your doorway, you maintain control of the conversation. If an agent becomes aggressive from the street or the hallway, their behavior is visible to others, which usually encourages them to act more professionally. Never allow an agent into your home if they seem frustrated or angry; it is always safer to conduct the conversation in a public or semi-public space.
              </p>
            </section>

            <section id="behavior-standards" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight text-center uppercase tracking-tighter">
                Behavior Standards: <span className="text-[#1F5EFF]">What Constitutes Professionalism?</span>
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The RBI Guidelines on Recovery of Loans and Advances clearly state that banks and their agents must not resort to intimidation or harassment of any kind. This includes both physical and verbal conduct. When an agent visits your home, they are representing a regulated financial institution, and their behavior must reflect that.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  { title: "Verbal Decorum", icon: faCheckCircle, text: "No shouting, no abusive language, and no disparaging remarks about your character or financial status." },
                  { title: "Physical Restraint", icon: faShieldAlt, text: "No physical intimidation, no blocking your path, and no touching your property or person." },
                  { title: "No Threatening", icon: faGavel, text: "No mention of jail, police arrests, or 'social exposure' unless they have a specific court order for a legal action." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm hover:translate-y-[-4px] transition-all">
                    <div className="w-10 h-10 bg-[#1F5EFF]/10 text-[#1F5EFF] rounded-full flex items-center justify-center mb-4">
                      <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed font-normal">{item.text}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg leading-relaxed mb-6 font-bold italic">
                A common tactic is to &quot;test&quot; the borrower by being slightly aggressive to see if they will fold. If you respond with a calm, firm statement like, &quot;I understand my rights under the RBI Fair Practice Code, and your current tone is a violation of those standards,&quot; most professional agents will back down immediately. Use of a mobile phone to record the interaction is often the best way to ensure professional behavior.
              </p>
            </section>

            <section id="no-visit-days" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                No-Visit Days: <span className="text-[#1F5EFF]">Protecting Your Family Time</span>
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Recovery is a business process, and the RBI recognizes that there are certain times when the intrusion of business into personal life is wholly inappropriate. While the 8 AM to 7 PM rule covers daily timings, there are broader situational rules that agents must respect.
              </p>
              <div className="bg-[#2E2E2E] text-white p-8 rounded-3xl mb-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#1F5EFF]"></div>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="shrink-0 w-24 h-24 bg-white/10 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faShieldAlt} className="text-[#1F5EFF] w-12 h-12" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-4 tracking-tight uppercase">National Festivals & Religious Occasions</h3>
                    <p className="text-white/70 leading-relaxed mb-4">
                      If your family is celebrating a major festival like Diwali, Eid, or Christmas, a recovery agent visit is considered highly inappropriate and a form of harassment. Banks are expected to refrain from sending agents during national holidays or religious festivals out of respect for the borrower's social standing.
                    </p>
                    <p className="text-white/70 leading-relaxed mb-4">
                      Furthermore, if there is a bereavement (death) in the family, a serious illness, or a wedding taking place at the home, you have the absolute right to ask an agent to leave immediately and reschedule for a later date. Any agent who persists during such times is in gross violation of humanitarian and RBI standards.
                    </p>
                    <div className="inline-block py-2 px-4 rounded-lg bg-[#1F5EFF] text-xs font-black uppercase tracking-widest leading-relaxed">RBI Protocol: Dignity First</div>
                  </div>
                </div>
              </div>
              <p className="text-lg leading-relaxed">
                If an agent attempts to visit during a religious ceremony or a time of mourning, do not feel obligated to even engage with them. You can simply state the reason for the inconvenience and close the door. Every bank is legally required to resolve complaints regarding such insensitive behaviors within 30 days.
              </p>
            </section>

            <section id="documentation" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                Documenting the Visit: <span className="text-[#1F5EFF]">Evidence is Your Best Friend</span>
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Recovery agent harassment often goes unpunished because it is &quot;your word against theirs.&quot; The bank will almost always shield their recovery agency unless you have hard evidence of wrongdoing. To turn the tide, you must become a collector of evidence.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Video Recording", text: "Point your phone camera out the door or window. Record the agent's ID and their behavior." },
                  { label: "Neighbor Witnesses", text: "If possible, have a neighbor stand with you. Third-party witnesses are highly effective if a case goes to court." },
                  { label: "Audio Recording", text: "Always have an audio recorder running on your phone. Capture the exact language used." },
                  { label: "CCTV Footage", text: "If your building has CCTV, ensure you download the footage of the visit for future use." }
                ].map((step, i) => (
                  <div key={i} className="p-6 bg-white border border-[#DEDEDE] rounded-2xl flex flex-col items-center text-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold mb-4 flex items-center justify-center text-xs">{i + 1}</div>
                    <div className="font-bold text-gray-900 mb-2 leading-tight">{step.label}</div>
                    <p className="text-xs text-gray-500 leading-relaxed">{step.text}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg leading-relaxed mb-6">
                When you start recording, make it obvious or state it clearly: &quot;I am recording this interaction for my records.&quot; This simple sentence often transforms a loud, aggressive agent into a quiet, professional one. Why? Because their agency will fire them if there is video proof of them violating RBI rules.
              </p>
              <p className="text-lg leading-relaxed">
                Documentation should also include keeping a logbook. Write down the date, time, duration of the visit, and the names of the agents. Note down if they were alone or in a group. Note if any outsiders (neighbors) witnessed the event. This logbook will be your primary document when filing a complaint with the Banking Ombudsman.
              </p>
            </section>

            <section id="police-protection" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                Police Protection: <span className="text-[#1F5EFF]">When the Law Must Step In</span>
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                A common misconception is that the police will only support the bank because you have defaulted on a loan. This is incorrect. While debt repayment is a civil matter, harassment, physical intimidation, and trespassing are criminal matters. The police are duty-bound to protect any citizen from criminal behavior.
              </p>
              <div className="bg-white border-l-4 border-[#1F5EFF] p-8 rounded-r-2xl shadow-sm mb-12">
                <h3 className="text-2xl font-bold mb-6">Legal Actions You Can Take</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="font-black text-[#1F5EFF] text-2xl opacity-20 shrink-0">01</div>
                    <div>
                      <p className="font-bold mb-1 uppercase tracking-tighter italic">Filing an FIR for Criminal Intimidation</p>
                      <p className="text-sm text-gray-600 leading-relaxed font-normal">If an agent specifies that they will harm you or your family physically, this is a crime under Section 503 of the Indian Penal Code (now under the relevant sections of the Bharatiya Nyaya Sanhita). You have every right to file an FIR at your local police station.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="font-black text-[#1F5EFF] text-2xl opacity-20 shrink-0">02</div>
                    <div>
                      <p className="font-bold mb-1 uppercase tracking-tighter italic">Complaint of Criminal Trespass</p>
                      <p className="text-sm text-gray-600 leading-relaxed font-normal">If an agent refuses to leave your property after being asked to do so, or enters your house without permission, they can be charged with criminal trespass. Call the police emergency number (112) while the agent is still at your door.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="font-black text-[#1F5EFF] text-2xl opacity-20 shrink-0">03</div>
                    <div>
                      <p className="font-bold mb-1 uppercase tracking-tighter italic">Protection Against Physical Assault</p>
                      <p className="text-sm text-gray-600 leading-relaxed font-normal">In extreme cases where a physical scuffle breaks out, do not retaliate, as this may weaken your legal standing. Move to safety, document the injuries, and seek immediate police intervention. Courts in India have historically been very strict with banks whose agents use physical force.</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-lg leading-relaxed">
                Most recovery agencies will back off completely the moment they realize you have initiated police action. Banks are terrified of the negative publicity and the multi-crore fines that the RBI can impose if they are found to be using criminal goons for debt recovery.
              </p>
            </section>

            <section id="rbi-complaint" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                Escalating to RBI: <span className="text-[#1F5EFF]">The Ombudsman Power</span>
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                If the bank's internal grievance redressal mechanism (comprising the Nodal Officer and Principal Nodal Officer) fails to resolve your complaint within 30 days, you can turn to the highest authority for bank disputes in India: The RBI Banking Ombudsman.
              </p>
              <div className="bg-[#F8F9FA] p-8 rounded-3xl border border-[#DEDEDE] mb-12">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter leading-tight italic">Why the Ombudsman is Effective</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 font-normal">
                      The Banking Ombudsman has the power to issue awards (compensations) of up to 20 lakh rupees for any loss suffered by the borrower, and an additional 1 lakh rupee for mental agony and harassment. 
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed font-normal">
                      Importantly, once you file a complaint with the Ombudsman, the bank is usually under immense pressure to settle the matter quickly to avoid a formal investigation. This often results in the immediate cessation of all further home visits while the complaint is being scrutinized.
                    </p>
                  </div>
                  <div className="w-full md:w-64 shrink-0 bg-white p-6 rounded-2xl border border-[#DEDEDE]">
                    <h4 className="font-black text-[#2E2E2E] text-center mb-4 uppercase text-xs tracking-widest">How to File</h4>
                    <ul className="space-y-4 text-xs font-bold text-gray-600 font-normal italic leading-relaxed">
                      <li className="flex gap-2"><FontAwesomeIcon icon={faCheckCircle} className="text-[#1F5EFF]" /> Visit cms.rbi.org.in</li>
                      <li className="flex gap-2"><FontAwesomeIcon icon={faCheckCircle} className="text-[#1F5EFF]" /> Upload visit documentation</li>
                      <li className="flex gap-2"><FontAwesomeIcon icon={faCheckCircle} className="text-[#1F5EFF]" /> Attach bank's failed response</li>
                      <li className="flex gap-2"><FontAwesomeIcon icon={faCheckCircle} className="text-[#1F5EFF]" /> Specify compensation required</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="settleloans-shield" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                SettleLoans Shield: <span className="text-[#1F5EFF]">A Legal Barrier Around Your Home</span>
              </h2>
              <div className="bg-white rounded-3xl p-4 md:p-12 border-2 border-[#1F5EFF] shadow-xl relative text-center">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#1F5EFF] text-white px-8 py-2 rounded-full font-black text-sm uppercase tracking-widest shadow-lg">The SettleLoans Proxy</div>
                <FontAwesomeIcon icon={faUserShield} className="text-[#1F5EFF] w-16 h-16 mb-8" />
                <h3 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-6 uppercase tracking-tighter italic">Never Open Your Door Again</h3>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-normal">
                  The moment you sign up with SettleLoans, our legal team takes over all communication with your lenders. We serve a formal legal notice to the bank stating that we are now your authorized representatives. 
                </p>
                <div className="grid md:grid-cols-2 gap-8 mb-10 text-left">
                  <div className="p-6 bg-[#F8F9FA] rounded-2xl">
                    <p className="font-bold text-[#1F5EFF] mb-2 uppercase text-xs tracking-wider font-extrabold italic">Stopping Field Visits</p>
                    <p className="text-sm text-gray-600 leading-relaxed font-normal">By law, once a borrower has a professional representative, the bank must direct all settlement discussions through that representative. Direct home visits become a violation of the negotiation protocol.</p>
                  </div>
                  <div className="p-6 bg-[#F8F9FA] rounded-2xl">
                    <p className="font-bold text-[#1F5EFF] mb-2 uppercase text-xs tracking-wider font-extrabold italic">Mental Health Recovery</p>
                    <p className="text-sm text-gray-600 leading-relaxed font-normal">Knowing that no one will knock on your door at 8 PM allows you to live without fear. You can focus on your job and your family while we handle the legal complexities in the background.</p>
                  </div>
                </div>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-black py-5 px-12 rounded-2xl hover:scale-105 transition-all text-xl shadow-2xl">
                  Activate My Protection
                </Link>
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-12 text-center uppercase tracking-tighter italic">
                Home Visit Rules: <span className="text-[#1F5EFF]">Frequently Asked Queries</span>
              </h2>
              <div className="space-y-4">
                {[
                  { q: "Is it legal for recovery agents to visit my home on a Sunday?", a: "Yes, it is strictly legal for agents to visit on Sundays, as long as they adhere to the 8 AM to 7 PM timing window and follow all identification protocols. However, most banks try to avoid Sunday visits to maintain social decorum unless the default is very high." },
                  { q: "Can an agent talk to my neighbours if I am not at home?", a: "No, this is a serious violation of your privacy rights. An agent can only ask your neighbors if you are currently at home; they are prohibited from disclosing that they are there for a loan collection or discussing any financial details about your debt." },
                  { q: "What should I do if the recovery agent refuses to show their ID card?", a: "Do not engage with them further. Clearly state that without identification, you consider them a stranger on your property and will call the police for trespassing. Close the door immediately and call your bank's customer service number to report the incident." },
                  { q: "Can a recovery agent take my gold jewelry or my car during a home visit?", a: "Absolutely not for unsecured loans like credit cards or personal loans. For secured loans like car loans, they can only repossess the asset after following a long legal process involving multiple notices (Usually a 15-day and 30-day notice). They cannot 'seize' property by force during a standard home visit." },
                  { q: "How many agents are allowed to visit my home at once?", a: "The RBI does not specify a number, but 'undue harassment' is prohibited. A group of 5-6 men standing outside your door is clearly designed to intimidate and is considered a violation of the Fair Practice Code. Usually, only 2 agents are seen as professional; larger groups are a cause for a complaint." },
                  { q: "Can they visit my office or place of work?", a: "Yes, but they must respect the workplace rules. They cannot create a scene, shout, or inform your boss or HR about your debt. They should ideally speak to you outside of the office premises or in a private meeting room if you allow it." },
                  { q: "What is the penalty for a bank if their agent harasses a borrower?", a: "The RBI can impose massive financial penalties on the bank, and in some cases, prohibit the bank from using that specific recovery agency entirely. If a case goes to the Ombudsman, the bank may also be ordered to pay you compensation for mental agony." },
                  { q: "Is a bank legal notice different from a recovery agent visit?", a: "Yes. A legal notice is a formal written document usually sent via registered post. A recovery agent visit is a field activity. A visit does not carry the same legal weight as a court-ordered notice, but it is often used as a precursor." },
                  { q: "What happens if I call the police during a recovery visit?", a: "The police will intervene to ensure no criminal activity (intimidation, assault, or trespass) is occurring. They will typically check the agent's ID and ask them to leave if you are feeling threatened. While the police won't stop the loan, they will stop the harassment." },
                  { q: "Can SettleLoans represent me even if agents are already visiting?", a: "Yes, and that is often when our services are most needed. Once we send a representation notice to your bank, the field visits usually stop within 48 to 72 hours as the bank moves your file from 'Recovery' to 'Negotiation' status." }
                ].map((faq, i) => (
                  <div key={i} className="bg-white border border-[#DEDEDE] rounded-2xl p-6 hover:border-[#1F5EFF] transition-colors group">
                    <h4 className="text-lg font-black text-gray-900 mb-3 group-hover:text-[#1F5EFF] transition-colors flex items-center justify-between pointer-events-none">
                      {faq.q}
                      <div className="w-8 h-8 rounded-full bg-[#F8F9FA] flex items-center justify-center text-xs">+</div>
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed font-normal">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Review Snippets */}
            <section id="reviews" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 text-center uppercase tracking-tighter border-b border-[#EEEEEE] pb-4">Verified Client Stories</h2>
              <div className="bg-[#F8F9FA] rounded-3xl p-4 md:p-8 border border-[#DEDEDE]">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { name: "Rajesh K.", location: "Mumbai", text: "The agents were coming at 8 PM and shouting in my building. SettleLoans stepped in, sent a notice, and the visits stopped immediately. They settled my 12 lakh rupee debt for 5 lakhs.", rating: 5 },
                    { name: "Meera R.", location: "Bangalore", text: "I was scared to open my door for months. SettleLoans gave me my peace back. Professional team that actually knows the law.", rating: 5 }
                  ].map((review, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-[#EEEEEE]">
                      <div className="flex text-yellow-400 mb-4">
                        {[...Array(review.rating)].map((_, i) => <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4" />)}
                      </div>
                      <p className="text-sm text-gray-600 mb-4 italic leading-relaxed font-normal">&quot;{review.text}&quot;</p>
                      <div className="font-black text-[#2E2E2E]">{review.name}</div>
                      <div className="text-xs text-gray-400 capitalize">{review.location} Case</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Final CTA Section */}
            <section className="mb-16">
              <div className="bg-[#2E2E2E] rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#1F5EFF]/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight tracking-tighter uppercase italic">Ready to End the Knocking?</h2>
                <p className="text-white/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto italic font-normal">
                  Stop the field visits and start the settlement process today. Our experts are ready to protect your home.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href="/contact" className="bg-[#1F5EFF] text-white font-black py-4 px-12 rounded-xl text-lg hover:bg-blue-600 transition-all shadow-xl uppercase tracking-widest">
                    Consult For Free
                  </Link>
                  <Link href="tel:+919821219819" className="bg-white text-[#2E2E2E] font-black py-4 px-12 rounded-xl text-lg hover:bg-gray-100 transition-all shadow-xl uppercase tracking-widest">
                    Call Legal Team
                  </Link>
                </div>
              </div>
            </section>

          </article>

          {/* Right Column: CTA & Related (Sticky) */}
          <aside className="hidden lg:block w-[270px] shrink-0 relative">
            <div className="sticky top-32 flex flex-col gap-8">
              
              {/* Promo CTA Box */}
              <div className="bg-[#1F5EFF] rounded-2xl p-6 text-white shadow-xl overflow-hidden relative group">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>
                <h3 className="text-2xl font-black mb-4 relative z-10 leading-tight">Block Recovery Agents Today</h3>
                <p className="text-white/80 text-sm mb-6 relative z-10 leading-relaxed font-medium">
                  Tired of people knocking on your door? Our legal team steps in to stop all field visits and negotiate a legal settlement.
                </p>
                <Link href="/contact" className="inline-block w-full bg-white text-[#1F5EFF] font-black py-3 px-4 rounded-xl text-center hover:bg-[#DEDEDE] transition-all shadow-md relative z-10">
                  Get Legal Shield
                </Link>
              </div>

              {/* Related Pages Container */}
              <div className="bg-white rounded-2xl border border-[#DEDEDE] p-6 shadow-sm">
                <h3 className="text-base font-black text-[#2E2E2E] mb-4 uppercase tracking-tighter border-b border-[#EEEEEE] pb-2">Related Library</h3>
                <nav className="flex flex-col gap-3">
                  <Link href="/recovery-agent-harassment-complaint" className="text-sm font-bold text-gray-600 hover:text-[#1F5EFF] transition-colors leading-tight">Harassment Complaint Guide</Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-sm font-bold text-gray-600 hover:text-[#1F5EFF] transition-colors leading-tight">RBI Rules for Agents</Link>
                  <Link href="/how-to-identify-fake-recovery-agents" className="text-sm font-bold text-gray-600 hover:text-[#1F5EFF] transition-colors leading-tight">Spotting Fake Agents</Link>
                  <Link href="/can-recovery-agents-come-home" className="text-sm font-bold text-gray-600 hover:text-[#1F5EFF] transition-colors leading-tight">Legal Rights for Home Visits</Link>
                  <Link href="/rbi-guidelines-calling-after-7pm" className="text-sm font-bold text-gray-600 hover:text-[#1F5EFF] transition-colors leading-tight">7 PM Calling Rules</Link>
                  <Link href="/ignoring-calls-of-recovery-agent" className="text-sm font-bold text-gray-600 hover:text-[#1F5EFF] transition-colors leading-tight">Should You Ignore Calls?</Link>
                </nav>
              </div>

            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}
