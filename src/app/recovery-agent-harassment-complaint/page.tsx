import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShieldAlt, faGavel, faScaleBalanced, faHandshake, faCheckCircle, faExclamationTriangle, faPhoneSlash } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Recovery Agent Harassment Complaint | Legal Rights & RBI Rules Guide",
  description: "Face recovery agent harassment? Learn how to file a complaint against bank recovery agents in India. Know your RBI guidelines, legal rights, and how to stop debt collection calls.",
  alternates: {
    canonical: "https://settleloans.in/recovery-agent-harassment-complaint",
  },
};

export default function RecoveryHarassmentComplaintPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/recovery-agent-harassment-complaint#webpage",
        "url": "https://settleloans.in/recovery-agent-harassment-complaint",
        "name": "Recovery Agent Harassment Complaint | Legal Rights & RBI Rules Guide",
        "description": "Comprehensive guide on filing complaints against recovery agent harassment in India, covering RBI rules and legal remedies.",
        "breadcrumb": { "@id": "https://settleloans.in/recovery-agent-harassment-complaint#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/recovery-agent-harassment-complaint#breadcrumb",
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
            "name": "Recovery Agent Harassment Complaint",
            "item": "https://settleloans.in/recovery-agent-harassment-complaint"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/recovery-agent-harassment-complaint#article",
        "headline": "How to File a Recovery Agent Harassment Complaint: Your Complete Legal Guide",
        "description": "Navigate the complex landscape of debt recovery harassment in India. Learn the official complaint process, RBI regulations, and your constitutional rights as a borrower.",
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
        "datePublished": "2024-03-27",
        "dateModified": "2024-03-27",
        "mainEntityOfPage": { "@id": "https://settleloans.in/recovery-agent-harassment-complaint#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/recovery-agent-harassment-complaint#product",
        "name": "Debt Harassment Protection Services",
        "description": "Professional legal negotiation and protection against aggressive debt recovery agents.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1250"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Amit R." },
            "datePublished": "2024-02-15",
            "reviewBody": "SettleLoans stopped the constant harassment from bank agents within 24 hours. They are a life saver.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Meera K." },
            "datePublished": "2024-03-01",
            "reviewBody": "I was terrified of the recovery calls. The SettleLoans team handled everything legally and professionally.",
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
              Legal Protection & Borrower Rights
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Recovery Agent Harassment Complaint: <br className="hidden md:block" /> Stop the Abuse Today
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
              Are you being threatened or shamed by debt collectors? Learn how to file a formal complaint using RBI guidelines and legal frameworks to protect your dignity.
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
                  Recovery Agent Harassment Complaint
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
                  { id: "intro", title: "Breaking the Silence" },
                  { id: "what-is-harassment", title: "Defining Harassment" },
                  { id: "rbi-guidelines", title: "RBI Fair Practice Code" },
                  { id: "legal-rights", title: "Your Borrower Rights" },
                  { id: "complaint-process", title: "Step-by-Step Complaint" },
                  { id: "evidence-collection", title: "Collecting Evidence" },
                  { id: "escalation-levels", title: "Escalation Levels" },
                  { id: "rbi-ombudsman", title: "RBI Ombudsman" },
                  { id: "legal-remedies", title: "Police & Legal Routes" },
                  { id: "mental-health", title: "Emotional Well-being" },
                  { id: "settleloans-shield", title: "How We Protect You" },
                  { id: "case-studies", title: "Case Studies" },
                  { id: "faqs", title: "Frequently Asked Questions" }
                ]}
              />
            </div>
          </aside>

          {/* Middle Column: Main Content */}
          <article className="flex-1 min-w-0 font-sans text-[#2E2E2E]">
            
            <section id="intro" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Breaking the Silence: <span className="text-[#1F5EFF]">End the Cycle of Harassment</span>
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -mr-16 -mt-16 z-0"></div>
                <p className="text-lg leading-relaxed mb-6 relative z-10">
                  The moment you fall behind on a loan payment, a heavy shadow often enters your life. It starts with a simple call, then another, and soon your phone becomes a source of dread. You might find yourself avoiding unknown numbers, feeling a jolt of anxiety every time the doorbell rings, and losing sleep over the possibility of being shamed in front of your family or neighbors.
                </p>
                <p className="text-lg leading-relaxed mb-6 relative z-10">
                  If you are experiencing this, we want you to know something immediately: You are not a criminal. Financial struggle is a challenge, not a character flaw. In India, the law protects your dignity even if you have defaulted on a debt. No bank, NBFC, or recovery agent has the right to treat you with anything less than respect.
                </p>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100 flex items-start gap-4 mb-6 relative z-10">
                  <FontAwesomeIcon icon={faShieldAlt} className="text-red-500 w-6 h-6 mt-1" />
                  <div>
                    <p className="text-red-900 font-bold mb-1">Important Reality Check</p>
                    <p className="text-sm text-red-800">Debt is a civil matter. Threats of immediate arrest or police action by recovery agents are almost always fake and used as a tool for extortion. You have the power to stop this through the right legal channels.</p>
                  </div>
                </div>
                <p className="text-lg leading-relaxed font-bold text-[#1F5EFF] relative z-10">
                  SettleLoans was founded to be the shield between you and this harassment. This guide is your roadmap to taking that power back.
                </p>
              </div>
            </section>

            <section id="what-is-harassment" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                What Actually Constitutes Recovery Agent Harassment?
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                To fight back, you must first understand the boundaries. Banks and NBFCs often outsource their recovery to third party agencies. These agencies sometimes use high pressure tactics that cross the line from 'collection' into 'harassment'. The Reserve Bank of India (RBI) has drawn a very clear line in the sand. If an agent does any of the following, they are in violation of the law.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  { icon: faPhoneSlash, title: "After-Hours Calls", desc: "Contacting you before 8 AM or after 7 PM is a direct violation of RBI guidelines." },
                  { icon: faExclamationTriangle, title: "Threats & Intimidation", desc: "Using abusive language, physical threats, or shouting is illegal under the IPC/BNS." },
                  { icon: faGavel, title: "Public Shaming", desc: "Contacting neighbors, family, or employers to share your debt status is a breach of privacy." },
                  { icon: faScaleBalanced, title: "Fake Legal Notices", desc: "Sending documents that look like court summons but are actually internal bank notices." }
                ].map((item, i) => (
                  <div key={i} className="bg-[#F8F9FA] p-6 rounded-2xl border border-[#DEDEDE] hover:border-[#1F5EFF] transition-colors group">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                      <FontAwesomeIcon icon={item.icon} className="text-[#1F5EFF] w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Many agents rely on the borrower's lack of knowledge. They might claim to be calling from the 'High Court' or the 'Crime Branch'. They might threaten to send the police to your daughter's school or your spouse's office. Understand that these are NOT legal recovery methods. A genuine bank representative must always identify themselves, represent themselves accurately, and carry a valid authorization letter from the lender.
              </p>
              <p className="text-lg leading-relaxed">
                If someone visits your home without an ID card or an authorization letter from the bank, you have every right to ask them to leave and register a complaint for criminal trespass if they refuse.
              </p>
            </section>

            <section id="rbi-guidelines" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                The RBI Fair Practice Code: Your Legal Shield
              </h2>
              <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200 mb-8">
                <p className="text-lg text-blue-900 leading-relaxed mb-6 italic">
                  &quot;Banks and their agents shall not resort to intimidation or harassment of any kind, either verbal or physical, against any person in their debt collection efforts.&quot; — RBI Master Circular
                </p>
                <p className="text-lg text-blue-900 leading-relaxed">
                  In August 2022, and subsequently updated in July 2024, the RBI issued stern warnings to all financial institutions. They made it clear that the lender is ultimately responsible for the actions of their recovery agents. If an agent harasses you, the bank itself is liable for penalties and may even be barred from using that recovery agency in the future.
                </p>
              </div>
              <h3 className="text-2xl font-bold mb-4">Specific RBI Rules Every Borrower Must Know:</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="shrink-0 mt-1.5 w-2 h-2 bg-[#1F5EFF] rounded-full"></div>
                  <p className="text-lg"><strong>Right to Privacy:</strong> Agents cannot talk to your friends or family about your debt. They can only contact them to find your updated contact details if you have gone 'missing'.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="shrink-0 mt-1.5 w-2 h-2 bg-[#1F5EFF] rounded-full"></div>
                  <p className="text-lg"><strong>No Constant Calling:</strong> Persistently calling a borrower on the phone several times a day is considered harassment.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="shrink-0 mt-1.5 w-2 h-2 bg-[#1F5EFF] rounded-full"></div>
                  <p className="text-lg"><strong>No False Representation:</strong> Agents cannot pretend to be lawyers or government officials.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="shrink-0 mt-1.5 w-2 h-2 bg-[#1F5EFF] rounded-full"></div>
                  <p className="text-lg"><strong>No Abuse:</strong> No foul language or mental torture is permitted under any circumstances.</p>
                </li>
              </ul>
              <p className="text-lg leading-relaxed">
                If the bank fails to follow these rules, you do not just have a grievance; you have a powerful legal lever to use in your defense. At SettleLoans, we use these violations to negotiate better settlement terms for our clients, often reminding the banks that their illegal tactics have consequences.
              </p>
            </section>

            <section id="legal-rights" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                Your Fundamental Rights as a Borrower
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                Even in default, your rights as an Indian citizen remain intact. The Constitution of India and various civil laws ensure that no one can be pushed into a state of absolute fear over a financial transaction.
              </p>
              
              <div className="bg-white p-8 rounded-2xl border border-[#DEDEDE] shadow-sm mb-8">
                <h3 className="text-2xl font-bold mb-6 text-[#1F5EFF]">The Borrower's Bill of Rights</h3>
                <div className="space-y-6">
                  <div className="border-b border-[#EEEEEE] pb-6">
                    <h4 className="font-bold text-xl mb-2">1. Right to Dignity</h4>
                    <p className="text-gray-600">Article 21 of the Constitution guarantees the Right to Life and Personal Liberty, which the Supreme Court has interpreted to include the Right to Live with Dignity. Harassment by lenders is a violation of this fundamental right.</p>
                  </div>
                  <div className="border-b border-[#EEEEEE] pb-6">
                    <h4 className="font-bold text-xl mb-2">2. Right to Transparency</h4>
                    <p className="text-gray-600">You have the right to know the exact breakdown of your dues, including principal, interest, and penalties. You have the right to receive everything in writing.</p>
                  </div>
                  <div className="border-b border-[#EEEEEE] pb-6">
                    <h4 className="font-bold text-xl mb-2">3. Right to Negotiate</h4>
                    <p className="text-gray-600">No law prevents you from approaching the bank for a settlement. You have the right to explain your financial hardship and request a compromise.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">4. Right to Peace</h4>
                    <p className="text-gray-600">Your home is your sanctuary. If an agent visits and behaves in a way that disturbs your peace, you have the right to seek police protection.</p>
                  </div>
                </div>
              </div>
              <p className="text-lg leading-relaxed">
                Understanding these rights is the first step toward mental freedom. When you know that the agent on the other side of the phone is the one breaking the law, you can speak with confidence. This change in dynamic is crucial for any future negotiation.
              </p>
            </section>

            <section id="complaint-process" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                The Correct Way to File a Harassment Complaint: A Tiered Approach
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                Filing a complaint against a recovery agent is not about shouting back. It is about building a documented paper trail that the bank cannot ignore. If you follow this structured hierarchy, you increase your chances of a quick resolution. Most borrowers make the mistake of only complaining verbally to the agent, which results in no record. Here is the professional, legal way to do it.
              </p>
              
              <div className="space-y-12 mb-12">
                <div className="relative pl-12 border-l-2 border-dashed border-[#1F5EFF]/30">
                  <div className="absolute left-[-17px] top-0 w-8 h-8 bg-[#1F5EFF] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">1</div>
                  <h3 className="text-2xl font-bold mb-4">Level 1: The Bank's Internal Grievance Redressal</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Your first official step should always be the bank or NBFC themselves. Every lender is required by the RBI to have an internal grievance cell. Do not call the general customer care number. Instead, look for the 'Grievance Redressal Officer' (GRO) email address on the bank's website.
                  </p>
                  <p className="text-lg leading-relaxed mb-4">
                    Draft a formal email. Clearly state your loan account number, the date and time of harassment, the name of the agent (if known), and a detailed description of their behavior. Use the words &quot;Violation of RBI Fair Practice Code&quot; in your subject line. This triggers a specific compliance process inside the bank.
                  </p>
                </div>

                <div className="relative pl-12 border-l-2 border-dashed border-[#1F5EFF]/30">
                  <div className="absolute left-[-17px] top-0 w-8 h-8 bg-[#1F5EFF] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">2</div>
                  <h3 className="text-2xl font-bold mb-4">Level 2: Escalation to the Principal Nodal Officer (PNO)</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    If the GRO does not respond within 7 to 10 days, or if their response is unsatisfactory (e.g., they deny the harassment happened), you must escalate to the Principal Nodal Officer. The PNO is a senior executive responsible for ensuring the bank's compliance with RBI standards.
                  </p>
                  <p className="text-lg leading-relaxed mb-4">
                    When writing to the PNO, attach a copy of your previous email to the GRO. State that the bank has failed to address a serious violation of the RBI guidelines. A complaint at this level often forces the bank to take the third party recovery agency to task.
                  </p>
                </div>

                <div className="relative pl-12 border-l-2 border-dashed border-[#1F5EFF]/30">
                  <div className="absolute left-[-17px] top-0 w-8 h-8 bg-[#1F5EFF] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">3</div>
                  <h3 className="text-2xl font-bold mb-4">Level 3: The RBI Integrated Ombudsman Scheme</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    If 30 days have passed since your first complaint and you still haven't received a resolution, you can approach the Banking Ombudsman. This is a quasi-judicial body established by the RBI to resolve disputes between banks and their customers.
                  </p>
                  <p className="text-lg leading-relaxed">
                    You can file this complaint online through the CMS portal (cms.rbi.org.in). The Ombudsman has the power to order the bank to stop the harassment and can even award compensation for the mental agony caused to the borrower.
                  </p>
                </div>
              </div>
            </section>

            <section id="evidence-collection" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                How to Collect Ironclad Evidence of Harassment
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                The biggest hurdle in a harassment case is the bank's denial. They often claim the agent was simply asking for the money politely. To win, you need proof. In the digital age, collecting evidence is easier than ever, but you must do it correctly to ensure it is admissible in a legal or regulatory forum.
              </p>

              <div className="bg-[#F8F9FA] rounded-2xl border border-[#DEDEDE] overflow-hidden mb-12">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">Your Evidence Checklist</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="shrink-0 w-10 h-10 rounded-lg bg-[#1F5EFF]/10 flex items-center justify-center">
                          <FontAwesomeIcon icon={faCheckCircle} className="text-[#1F5EFF] w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold">Call Recording</h4>
                          <p className="text-sm text-gray-500">Enable automatic call recording. If your phone announces &quot;This call is being recorded,&quot; let it. It often stops the agent from using abusive language immediately.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="shrink-0 w-10 h-10 rounded-lg bg-[#1F5EFF]/10 flex items-center justify-center">
                          <FontAwesomeIcon icon={faCheckCircle} className="text-[#1F5EFF] w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold">Screenshots</h4>
                          <p className="text-sm text-gray-500">Save every WhatsApp message, SMS, and email. Screenshots of call logs showing 20+ calls in a single day are excellent proof of harassment.</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="shrink-0 w-10 h-10 rounded-lg bg-[#1F5EFF]/10 flex items-center justify-center">
                          <FontAwesomeIcon icon={faCheckCircle} className="text-[#1F5EFF] w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold">Home Visit CCTV</h4>
                          <p className="text-sm text-gray-500">If agents visit your home, ensure they are captured on CCTV or recorded on a smartphone. Their refusal to provide identification is a major violation.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="shrink-0 w-10 h-10 rounded-lg bg-[#1F5EFF]/10 flex items-center justify-center">
                          <FontAwesomeIcon icon={faCheckCircle} className="text-[#1F5EFF] w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold">Witness Statements</h4>
                          <p className="text-sm text-gray-600">If neighbors or family members witnessed the harassment, their written statements can be very powerful during a police or ombudsman investigation.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-lg leading-relaxed">
                When you present a bank with a file containing call recordings of their agents using foul language and screenshots of midnight threats, their stance usually shifts from aggressive to defensive. They realize you are an informed borrower who knows how to hold them accountable. This evidence is also your ticket to a faster and more favorable settlement.
              </p>
            </section>

            <section id="escalation-levels" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                Escalation Strategy: When to Go Beyond the Bank
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Sometimes, the bank's internal systems are broken or biased. In such cases, you must look outside the banking system to the legal and regulatory frameworks of India. This is where many borrowers hesitate, fearing that lawyers and police will make the situation worse. In reality, these external pressures are often the only way to gain complete peace of mind.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                The key is knowing which external body to approach for which type of violation. For instance, if the issue is purely about bad service or RBI rule violations, the Ombudsman is the best route. If the issue involves physical assault, threats of violence, or extortion, it becomes a criminal matter that requires police intervention.
              </p>
              <p className="text-lg leading-relaxed">
                At SettleLoans, we provide the legal backbone for this escalation. We don't just tell you to complain; we help draft the legal notices and complaints that ensure the authorities take you seriously. Remember, an official complaint filed by a professional legal firm carries significantly more weight than a complaint from an individual borrower.
              </p>
            </section>

            <section id="rbi-ombudsman" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                Navigating the RBI Integrated Ombudsman Scheme (RB-IOS)
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                The Integrated Ombudsman Scheme 2021 is a masterstroke in consumer protection. It brought all commercial banks, NBFCs, and Digital Lenders under one umbrella. This means regardless of where you took your loan, you have one central place to seek justice. The process is completely free and can be done from the comfort of your home.
              </p>

              <div className="bg-white p-8 rounded-2xl border border-[#DEDEDE] shadow-sm mb-12">
                <h3 className="text-2xl font-bold mb-6">Crucial Facts About the RBI Ombudsman</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <span className="block text-[#1F5EFF] font-black text-3xl mb-2">0</span>
                    <p className="text-sm font-bold text-gray-800 uppercase tracking-tighter">Cost to Borrower</p>
                    <p className="text-xs text-gray-500 mt-2">You don't need a lawyer to file a complaint. The service is provided by the RBI to the citizens of India.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <span className="block text-[#1F5EFF] font-black text-3xl mb-2">30D</span>
                    <p className="text-sm font-bold text-gray-800 uppercase tracking-tighter">Wait Period</p>
                    <p className="text-xs text-gray-500 mt-2">You must give the bank 30 days to resolve the issue before you are allowed to approach the Ombudsman.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <span className="block text-[#1F5EFF] font-black text-3xl mb-2">20L</span>
                    <p className="text-sm font-bold text-gray-800 uppercase tracking-tighter">Max Compensation</p>
                    <p className="text-xs text-gray-500 mt-2">The Ombudsman can award up to 20 lakhs for losses and up to 1 lakh for mental agony and harassment.</p>
                  </div>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                When you file an Ombudsman complaint, the RBI reaches out to the head of the bank's compliance. This immediately puts the bank in a position where they have to explain their actions to their regulator. Banks loathe this. It is one of the most effective ways to force a bank to come to the negotiation table for a reasonable settlement, as they would rather settle with you than face the RBI's wrath.
              </p>
              <p className="text-lg leading-relaxed">
                If the Ombudsman's decision is in your favor, the bank is legally bound to implement it. If you are dissatisfied with the Ombudsman's decision, you still have the right to appeal to the Appellate Authority or approach a court of law. You are never trapped.
              </p>
            </section>

            <section id="legal-remedies" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                Police Complaints and Criminal Remedies (IPC & BNS)
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                In severe cases where recovery agents use physical intimidation, enter your home forcibly, or humiliate you in public, it is no longer just a banking dispute; it is a crime. The Indian Penal Code (IPC), and now the Bharatiya Nyaya Sanhita (BNS), provides protection against such acts.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
                  <h4 className="text-xl font-bold text-red-900 mb-4">Criminal Intimidation</h4>
                  <p className="text-sm text-red-800 leading-relaxed mb-4">
                    Relevant Section: IPC 506 / BNS 351(1). If an agent threatens to kill you, harm your family, or damage your reputation with the intent to cause alarm, it is a criminal offense. You can file an FIR at the local police station.
                  </p>
                  <p className="text-sm text-red-800 leading-relaxed">
                    Even a threat made over the phone qualifies if you have the recording as proof.
                  </p>
                </div>
                <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
                  <h4 className="text-xl font-bold text-orange-900 mb-4">Intentional Insult & Trespass</h4>
                  <p className="text-sm text-orange-800 leading-relaxed mb-4">
                    Relevant Section: BNS 352 (Insult) and BNS 329 (Criminal Trespass). Entering your property without permission or using foul language to humiliate you in front of others is a punishable crime.
                  </p>
                  <p className="text-sm text-orange-800 leading-relaxed">
                    Recording a video of an agent shouting at your doorstep is the best evidence for such cases.
                  </p>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                Most people avoid the police because they think the police will side with the bank because they owe money. This is a myth. The police are there to prevent crimes and maintain peace. While they won't help you clear your debt, they will absolutely stop someone from beating your door down or threatening your children.
              </p>
              <p className="text-lg leading-relaxed">
                If the local police station refuses to file an FIR, you can approach the Superintendent of Police (SP) or file a private complaint before a Judicial Magistrate. Our team at SettleLoans often guides clients in drafting these formal complaints to ensure the law works for you, not against you.
              </p>
            </section>

            <section id="mental-health" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                Protecting Your Mental Health: You are Not Your Debt
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The most dangerous part of recovery agent harassment isn't the threat to your wallet; it's the threat to your mind. Debt stress is a documented medical condition that can lead to chronic anxiety, severe depression, and a sense of absolute hopelessness. In India, where social standing is highly valued, the threat of shaming can be particularly devastating.
              </p>
              <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100 mb-8">
                <h3 className="text-xl font-bold text-emerald-900 mb-4">A Message of Strength</h3>
                <p className="text-emerald-800 leading-relaxed mb-4">
                  If you are feeling suicidal or completely overwhelmed, please reach out for help. Organizations like <strong>AASRA (9820466726)</strong> or the <strong>Vandrevala Foundation (9999666555)</strong> provide 24/7 support. They understand that debt is a temporary problem, but your life is invaluable.
                </p>
                <p className="text-emerald-800 leading-relaxed">
                  Remember, even the most successful businesses and individuals face financial downturns. The path back to stability begins with a calm mind. Don't let a collection agent's script dictate your worth as a human being.
                </p>
              </div>
              <p className="text-lg leading-relaxed">
                We recommend that all our clients practice 'Notification Discipline'. Only check your debt-related messages at specific times of the day. Don't answer calls from unknown numbers during your family time or late at night. By setting these boundaries, you reclaim your mental space, which is essential for making sound financial decisions later.
              </p>
            </section>

            <section id="settleloans-shield" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                How SettleLoans Acts as Your Professional Shield
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                At SettleLoans, we don't just give advice; we take action. Our primary goal is to stand between you and the harassment so you can focus on rebuilding your life. We act as your official legal and financial representative in all dealings with your creditors.
              </p>
              
              <div className="bg-[#2E2E2E] text-white p-8 rounded-2xl shadow-xl mb-12">
                <h3 className="text-2xl font-bold mb-6 text-[#1F5EFF]">The SettleLoans Protection Protocol</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-lg mb-2">Legal Representation</h4>
                    <p className="text-gray-400 text-sm">We send formal legal notices to your lenders, informing them that you are now under our representation. This often redirects the recovery efforts through professional channels.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Harassment Prevention</h4>
                    <p className="text-gray-400 text-sm">When an agent violates an RBI rule, we don't just complain; we document and file a formal grievance that carries the weight of a professional firm.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Expert Negotiation</h4>
                    <p className="text-gray-400 text-sm">Our negotiators have years of experience dealing with bank recovery departments. We know the 'bottom line' that banks are willing to accept for a settlement.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Full Documentation</h4>
                    <p className="text-gray-400 text-sm">We handle all the paperwork, ensuring that every settlement offer is genuine and that you receive a valid No Dues Certificate (NDC) at the end.</p>
                  </div>
                </div>
              </div>
              <p className="text-lg font-bold text-center p-6 bg-blue-50 rounded-xl border border-blue-100">
                You don't have to face the storm alone. Let our experts handle the agents while you handle your future.
              </p>
            </section>

            <section id="case-studies" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 text-center uppercase tracking-tighter">Real Stories of Legal Defense</h2>
              
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
                  <h3 className="text-2xl font-bold mb-4">Case Study 1: The Midnight Call Victory</h3>
                  <p className="mb-4"><strong>The Situation:</strong> An NBFC recovery agent was calling Mr. Sharma at 11:30 PM daily and messaging his wife on Facebook, claiming he was a criminal.</p>
                  <p className="mb-4"><strong>Our Action:</strong> We documented the call logs and the Facebook messages. We sent a stern legal notice to the NBFC's Nodal Officer and filed an Ombudsman complaint simultaneously.</p>
                  <p className="font-bold text-green-600"><strong>The Result:</strong> The bank immediately removed the recovery agency from the case, offered a formal apology, and agreed to a 60% waiver on the total dues to settle the matter out of court.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-red-500"></div>
                  <h3 className="text-2xl font-bold mb-4">Case Study 2: Stopping the Workplace Shame</h3>
                  <p className="mb-4"><strong>The Situation:</strong> A credit card agent visited Ms. Verma's office and spoke loudly about her unpaid bills in front of her supervisor.</p>
                  <p className="mb-4"><strong>Our Action:</strong> We secured a witness statement from her colleague and filed a police complaint for defamation and intentional insult under the BNS.</p>
                  <p className="font-bold text-green-600"><strong>The Result:</strong> Fearing criminal charges and a massive fine from the RBI, the bank settled the entire 4lakh debt for just 80,000 rupees and deleted the negative remarks from her HR file.</p>
                </div>
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">Frequently Asked Questions (FAQ)</h2>
              <div className="space-y-4">
                {[
                  { q: "Can a recovery agent come to my house at night?", a: "No. Under RBI guidelines, recovery agents are only allowed to visit or call between 8:00 AM and 7:00 PM." },
                  { q: "Is it a crime to default on a loan in India?", a: "No, loan default is a civil matter. It is not a criminal offense unless there is proven fraud or a cheque bounce case involved." },
                  { q: "Can agents contact my friends or family?", a: "No. This is a violation of your Right to Privacy. They can only contact third parties to locate you if you are unreachable, but they cannot discuss your debt with them." },
                  { q: "What should I do first if an agent threatens me?", a: "Start recording the call immediately. Note down the time, date, and their phone number. Then, file a formal complaint with the bank's Grievance Officer." },
                  { q: "Can I file a police complaint against a bank?", a: "Yes. If an agent uses physical force, abusive language, or criminal intimidation, you can file an FIR against the agent and the bank at your local police station." },
                  { q: "Does the RBI Ombudsman really help?", a: "Yes. The Ombudsman is a powerful body. If you have evidence of harassment, they can order the bank to pay you compensation and stop the recovery activities." },
                  { q: "Can an agent take away my furniture or car forcibly?", a: "No. Forcible seizure of assets without a valid court order or following the SARFAESI Act procedure is illegal. You should call the police immediately if this happens." },
                  { q: "Will my CIBIL score improve if I file a harassment complaint?", a: "Filing a complaint doesn't directly change your score, but a successful complaint often leads to a better settlement deal, which eventually allows you to close the loan and start rebuilding your score." },
                  { q: "Can an agent threaten me with a jail term?", a: "Any such threat is fake. Only a court can order a jail term, and that too only in specific criminal cases like fraud or persistent contempt. Debt default alone is not a reason for jail." },
                  { q: "Should I sign any papers given by a recovery agent?", a: "Never sign any document without reading it carefully and consulting with a legal professional. Agents often try to get you to sign 'acknowledgment' letters that are actually admissions of liability." },
                  { q: "How do I know if a 'Legal Notice' is real or fake?", a: "Check the source. Real legal notices are sent by registered post from a lawyer's office or a court. If it's sent via WhatsApp and has spelling mistakes or unofficial logos, it is likely fake." },
                  { q: "Can I stop calls if I am genuinely unable to pay?", a: "Yes. By following the complaint process and informing the bank of your genuine hardship, you can request them to stop the calls and initiate a settlement discussion." },
                  { q: "What is the penalty for a bank if they harass me?", a: "The RBI can impose heavy monetary fines on the bank and can also ban them from using certain recovery agencies for a long period." },
                  { q: "Can SettleLoans stop the calls today?", a: "Once you enroll with us, we send an immediate notice of representation to your creditors. This often leads to a significant reduction in aggressive recovery calls within 24 to 48 hours." },
                  { q: "What is the maximum compensation the Ombudsman can grant?", a: "The Ombudsman can award up to 20 lakh rupees for actual losses and an additional 1 lakh rupees for mental agony and harassment." }
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
              <p className="text-gray-400 text-sm italic">Disclaimer: SettleLoans is a debt consultancy service. This guide is for educational purposes only and does not constitute formal legal advice. Please consult with a qualified advocate for your specific case.</p>
            </div>

            {/* Mobile CTA */}
            <div className="lg:hidden mt-16 mb-8">
              <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#1F5EFF]/20">
                <div className="bg-[#1F5EFF] p-6 text-center text-white">
                  <h3 className="text-2xl font-black mb-2">Ready to Stop the Stress?</h3>
                  <p className="opacity-90 text-sm">Join thousands of Indians who have successfully reclaimed their peace of mind.</p>
                </div>
                <div className="p-8 text-center text-[#DEDEDE]">
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-xl hover:scale-105 transition-all shadow-lg text-lg">
                    Get Free Legal Help
                  </Link>
                </div>
              </div>
            </div>

            {/* Review Snippets */}
            <section id="reviews" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 text-center uppercase tracking-tighter">Client Success Stories</h2>
              <div className="bg-[#F8F9FA] rounded-3xl p-4 md:p-8 border border-[#DEDEDE]">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { name: "Rahul M.", location: "Delhi", text: "I was getting 50+ calls a day. SettleLoans stepped in and within 48 hours, the calls stopped completely. They helped me settle my 10L debt for 4L.", rating: 5 },
                    { name: "Saritha V.", location: "Bangalore", text: "The recovery agents were threatening to visit my parents. SettleLoans sent a legal notice and everything changed. I am now debt-free.", rating: 5 }
                  ].map((review, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-[#EEEEEE]">
                      <div className="flex text-yellow-400 mb-4">
                        {[...Array(review.rating)].map((_, i) => <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4" />)}
                      </div>
                      <p className="text-gray-600 mb-4 italic leading-relaxed">&quot;{review.text}&quot;</p>
                      <div className="font-black text-[#2E2E2E]">{review.name}</div>
                      <div className="text-xs text-gray-400 capitalize">{review.location} Case</div>
                    </div>
                  ))}
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
                <h3 className="text-2xl font-black mb-4 relative z-10 leading-tight">Stop Collection Calls Now</h3>
                <p className="text-white/80 text-sm mb-6 relative z-10 leading-relaxed font-medium">
                  Let us handle the recovery agents for you. Our legal team steps in to stop the harassment and negotiate a settlement you can afford.
                </p>
                <Link href="/contact" className="inline-block w-full bg-white text-[#1F5EFF] font-black py-3 px-4 rounded-xl text-center hover:bg-[#DEDEDE] transition-all shadow-md relative z-10">
                  Talk to a Lawyer
                </Link>
              </div>

              {/* Related Pages Container */}
              <div className="bg-white rounded-2xl border border-[#DEDEDE] p-6 shadow-sm">
                <h3 className="text-base font-black text-[#2E2E2E] mb-4 uppercase tracking-tighter border-b border-[#EEEEEE] pb-2">Related Resources</h3>
                <nav className="flex flex-col gap-3">
                  <Link href="/rbi-rules-for-recovery-agents" className="text-sm font-bold text-gray-600 hover:text-[#1F5EFF] transition-colors leading-tight">RBI Rules for Recovery Agents</Link>
                  <Link href="/how-to-identify-fake-recovery-agents" className="text-sm font-bold text-gray-600 hover:text-[#1F5EFF] transition-colors leading-tight">Identify Fake Recovery Agents</Link>
                  <Link href="/can-recovery-agents-come-home" className="text-sm font-bold text-gray-600 hover:text-[#1F5EFF] transition-colors leading-tight">Can Agents Come Home?</Link>
                  <Link href="/rbi-guidelines-calling-after-7pm" className="text-sm font-bold text-gray-600 hover:text-[#1F5EFF] transition-colors leading-tight">Calling After 7 PM Rules</Link>
                  <Link href="/ignoring-calls-of-recovery-agent" className="text-sm font-bold text-gray-600 hover:text-[#1F5EFF] transition-colors leading-tight">Should You Ignore Calls?</Link>
                  <Link href="/legal-notice-for-loan-settlement-harassment" className="text-sm font-bold text-gray-600 hover:text-[#1F5EFF] transition-colors leading-tight">Legal Notice for Harassment</Link>
                </nav>
              </div>

            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}
