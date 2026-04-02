import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "RBI Rules for Recovery Agents 2026: Official Guidelines & Borrower Rights",
  description: "Comprehensive guide to RBI rules for recovery agents in 2026. Learn about 8 AM-7 PM timing, certification requirements, and how to stop illegal harassment today.",
  alternates: {
    canonical: "https://settleloans.in/rbi-rules-for-recovery-agents",
  },
};

export default function RBIRulesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/rbi-rules-for-recovery-agents#webpage",
        "url": "https://settleloans.in/rbi-rules-for-recovery-agents",
        "name": "RBI Rules for Recovery Agents 2026: Official Guidelines",
        "description": "Deep dive into the latest RBI regulations governing the conduct and practices of loan recovery agents in India.",
        "breadcrumb": { "@id": "https://settleloans.in/rbi-rules-for-recovery-agents#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/rbi-rules-for-recovery-agents#breadcrumb",
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
            "name": "RBI Rules for Recovery Agents",
            "item": "https://settleloans.in/rbi-rules-for-recovery-agents"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/rbi-rules-for-recovery-agents#article",
        "headline": "RBI Rules for Recovery Agents: The Definitive 2026 Guide to Borrower Rights",
        "description": "Examine the latest RBI master circulars and 2026 amendments that protect borrowers from aggressive debt collection practices.",
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
        "mainEntityOfPage": { "@id": "https://settleloans.in/rbi-rules-for-recovery-agents#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/rbi-rules-for-recovery-agents#product",
        "name": "Debt Resolution & Protection Services",
        "description": "Strategic legal protection against illegal recovery practices and professional debt settlement negotiation.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "2180"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rajesh K." },
            "datePublished": "2024-01-20",
            "reviewBody": "SettleLoans cited the specific RBI rules that stopped my bank's agents within 48 hours. I cannot thank them enough for their legal expertise.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Sita M." },
            "datePublished": "2024-02-10",
            "reviewBody": "Understanding the 8am-7pm rule changed everything. SettleLoans empowered me to stand up for my rights with confidence.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/rbi-rules-for-recovery-agents#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are the new RBI rules for recovery agents in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The 2026 RBI rules mandate a strict 8:00 AM to 7:00 PM window for all communications, require mandatory IIBF certification for all agents, and hold banks vicariously liable for any harassment by third party agencies."
            }
          },
          {
            "@type": "Question",
            "name": "Can a recovery agent call me after 7 PM?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. According to the 2026 RBI Directions, all forms of contact including calls, messages, and visits are strictly prohibited after 7:00 PM and before 8:00 AM."
            }
          },
          {
            "@type": "Question",
            "name": "What should I do if a recovery agent uses abusive language?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Record the conversation and file a formal complaint with the bank's Nodal Officer. If not resolved in 30 days, escalate the matter to the RBI Ombudsman through the CMS portal."
            }
          },
          {
            "@type": "Question",
            "name": "Is IIBF certification mandatory for all recovery agents?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Every agent engaged by a bank or NBFC must possess a valid certification from the Indian Institute of Banking and Finance (IIBF) after completing 100 hours of training."
            }
          },
          {
            "@type": "Question",
            "name": "Can I complain directly to the police about recovery harassment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. If an agent uses physical force, threats, or enters your property without permission, you can file an FIR under relevant sections of the Indian Penal Code such as Section 503 and 441."
            }
          },
          {
            "@type": "Question",
            "name": "Does the bank take responsibility for its agents behavior?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Under the rule of Vicarious Liability, the lending bank is 100% responsible for the conduct of its recovery agents and cannot delegate this liability to third party agencies."
            }
          },
          {
            "@type": "Question",
            "name": "Can agents contact my family or relatives?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. RBI rules strictly prohibit agents from contacting third parties who are not involved in the loan. Public shaming or informing neighbors/relatives about your debt is a major violation."
            }
          },
          {
            "@type": "Question",
            "name": "What is the CMS portal of the RBI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Complaint Management System (CMS) is the online portal where borrowers can file complaints with the RBI Ombudsman if their bank does not resolve their grievance within 30 days."
            }
          },
          {
            "@type": "Question",
            "name": "Can an agent threaten me with arrest?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Recovery agents have no legal power to arrest anyone. Debt is a civil matter. Threats of arrest are a form of illegal intimidation and should be reported immediately."
            }
          },
          {
            "@type": "Question",
            "name": "What documents should a recovery agent carry during a visit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A recovery agent must carry an official ID card from the bank or agency, an authorization letter from the lender, and the contact details of the bank's grievance officer."
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
              Official Regulator Guidelines
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              RBI Rules for <br className="hidden md:block" /> Recovery Agents 2026
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
              Empower yourself with the definitive guide to current RBI regulations. Learn how the 2026 amendments protect you from aggressive, unethical, and illegal recovery practices.
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
                  RBI Rules for Recovery Agents
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
                { id: "evolution-of-rules", title: "Evolution of RBI Rules" },
                { id: "core-guidelines-2026", title: "The 2026 Directions" },
                { id: "contact-time-rules", title: "Official Timing Rules" },
                { id: "privacy-and-conduct", title: "Conduct & Privacy" },
                { id: "certification-requirements", title: "Agent Certification" },
                { id: "training-and-id", title: "Mandatory Identification" },
                { id: "bank-liability", title: "Vicarious Liability" },
                { id: "grievance-escalation", title: "Escalation Ladder" },
                { id: "ombudsman-process", title: "RBI Ombudsman CMS" },
                { id: "police-and-ipc", title: "IPC Legal Shield" },
                { id: "success-stories", title: "Success Stories" },
                { id: "faqs", title: "Common Questions" }
              ]}
            />
          </aside>

          {/* Middle Column: Main Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            <section id="introduction" className="scroll-mt-32 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                    The Regulatory Foundation: <span className="text-black">Why RBI Guidelines Matter</span>
                </h2>
                <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                    <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
                        In the vast landscape of the Indian economy, debt is a common financial tool. However, the recovery of that debt must be built on a foundation of dignity and legality. The Reserve Bank of India (RBI), as the apex financial regulator, has consistently worked to balance the interests of lenders with the human rights of borrowers. The "RBI Rules for Recovery Agents" are not merely suggestions; they are binding legal mandates that every bank, NBFC, and their third party agents must follow without exception.
                    </p>
                    <p className="text-lg leading-relaxed text-[var(--color-text-body)] font-bold text-[#1F5EFF]">
                        If you are a borrower in India, knowing these rules is your superpower. This guide provides a deep exploration of every directive that protects you from the nightmare of aggressive debt collection.
                    </p>
                </div>
            </section>
            
            <section id="evolution-of-rules" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                The Historical Evolution: From RBI Circulars to 2026 Directions
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The "RBI Rules for Recovery Agents" have evolved significantly over the last two decades. Initially, these guidelines were part of broader "Master Circulars" on customer service in banks. However, due to a rising number of complaints regarding aggressive debt collection, the RBI has moved toward more specific and stringent directions.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                In earlier years, the primary circular was the RBI/2022-23/108 "Master Circular on Recovery Agents of Lending Institutions." This document established the fundamental principles: agents must be trained, banks are liable for their conduct, and harassment is strictly forbidden. While these rules were a solid start, they left some ambiguities that unethical recovery agencies tried to exploit.
              </p>
              <div className="bg-blue-50/50 p-10 rounded-3xl border border-blue-100 shadow-sm mb-12">
                <h3 className="text-2xl font-black text-[#2E2E2E] mb-6">The Landmark 2026 Update</h3>
                <p className="text-lg leading-relaxed text-[#2E2E2E]/80 mb-6">
                  To address the digital shift and the rise of fintech recovery harassment, the "Reserve Bank of India (Commercial Banks – Responsible Business Conduct) Second Amendment Directions, 2026" was introduced. Set to take full effect on July 1, 2026, these are the most powerful borrower protections India has ever seen.
                </p>
                <p className="text-lg leading-relaxed text-[#2E2E2E]/80">
                  These directions do not just "advise" banks anymore; they mandate specific technical and operational barriers to harassment. For the first time, lenders are required to implement real time monitoring of recovery interactions. The 2026 rules have effectively eliminated any "grey area" regarding what constitutes harassment.
                </p>
              </div>
            </section>

            <section id="core-guidelines-2026" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                Section-by-Section: The Core RBI Guidelines for 2026
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The 2026 directives represent a fundamental shift in debt recovery power dynamics. Previously, the burden of proof was often on the borrower to show they were harassed. Under the new "Responsible Business Conduct" framework, the burden is now on the bank to prove that their recovery agents remained within the legal boundaries.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                One of the most critical aspects of the 2026 directions is the "Vicarious Liability Clause." This states that the primary lending institution (the bank or NBFC) is 100% legally and financially responsible for every action of their third party recovery agents. This means a bank cannot escape consequences by claiming that an external agency performed the harassment. If the agency breaks the law, the bank breaks the law.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                The RBI has also mandated that every recovery agent must possess a valid certification from the Indian Institute of Banking and Finance (IIBF). This certification requires the agent to undergo 100 hours of training specifically on the code of conduct and legal rights of borrowers. Any agent operating without this certification or with an expired one is a direct violation of the 2026 RBI rules.
              </p>
            </section>

            <section id="contact-time-rules" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                The Strict Timing Rule: 8:00 AM to 7:00 PM Only
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Privacy is a fundamental right. To protect this, the RBI has established a clear window for all recovery communications. Whether it is a phone call, a WhatsApp message, or a physical home visit, recovery agents can only contact you between 8:00 AM and 7:00 PM.
              </p>
              <div className="bg-red-50/50 p-8 rounded-2xl border border-red-100 flex flex-col md:flex-row gap-8 items-center mb-8">
                <div className="text-5xl font-black text-red-500">7PM</div>
                <div className="text-lg leading-relaxed font-bold text-red-900">
                  Any contact made after 7:00 PM or before 8:00 AM is a non-negotiable violation of the RBI rules. This includes automated IVR calls or late-night WhatsApp threats.
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                There are often claims by agents that "urgent" matters allow for exceptions. According to the 2026 Amendment, there are zero exceptions for general recovery calls. Even if your EMI is overdue by months, the agent has no right to disturb your night or early morning. If you receive a call at 9:00 PM, you should not argue with the agent; you should simply record the timing and use it as prima facie evidence in your complaint to the bank's Nodal Officer.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Furthermore, the 2026 rules prohibit constant calling or "bombardment." Calling a borrower 10 times in a single day, even within the 8am-7pm window, can be classified as harassment. The regulator expects a "reasonable" number of contacts, but anything that creates psychological distress through frequency is illegal.
              </p>
            </section>

            <section id="privacy-and-conduct" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Professionalism and Conduct: The Ban on Abusive Tactics</h2>
              <p className="text-lg leading-relaxed mb-6">
                Human dignity is at the heart of the RBI's Responsible Business Conduct directions. The regulator has explicitly defined what constitutes "prohibited conduct." If an agent uses abusive, threatening, or minatory language, they are in direct violation of the law. This applies even if the borrower is in default. Debt is a civil contractual matter; it is not a criminal offense that warrants verbal abuse.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                  <h4 className="text-xl font-black text-[#2E2E2E] mb-4 uppercase tracking-wider">Illegal Conduct</h4>
                  <ul className="space-y-4 text-[#2E2E2E]/80 font-bold">
                    <li className="flex items-start gap-2">
                        <span className="text-red-500 shrink-0">✘</span>
                        Use of foul or threatening language.
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-red-500 shrink-0">✘</span>
                        Calling relatives or friends to shame the borrower.
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-red-500 shrink-0">✘</span>
                        Contacting the borrower at their workplace.
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-red-500 shrink-0">✘</span>
                        Threatening immediate "police arrest" (agents have no such power).
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200">
                   <h4 className="text-xl font-black text-blue-900 mb-4 uppercase tracking-wider">Mandatory Professionalism</h4>
                   <ul className="space-y-4 text-blue-800 font-bold">
                    <li className="flex items-start gap-2">
                        <span className="text-emerald-500 shrink-0">✓</span>
                        Respecting the borrower's privacy and dignity.
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-emerald-500 shrink-0">✓</span>
                        Disclosing their identity and the bank they represent.
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-emerald-500 shrink-0">✓</span>
                        Following the borrower's request for contact timing preferences.
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-emerald-500 shrink-0">✓</span>
                        Maintaining a professional and civil tone at all times.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                Public shaming is another tactic that the RBI has strictly banned. Agents are not allowed to inform your neighbors, landlord, or coworkers about your debt status. The loan agreement is a private contract. Sharing this information with third parties who are not involved in the loan is a violation of the RBI rules and your fundamental right to privacy.
              </p>
            </section>
            
            <section id="certification-requirements" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">The Professional Barrier: Mandatory IIBF Certification</h2>
              <p className="mb-6 text-lg leading-relaxed">
                One of the most powerful rules in the RBI's arsenal against harassment is the mandatory certification requirement. Not just anyone can become a recovery agent. The regulator has decreed that all agents engaged by banks and NBFCs must undergo specific training and pass an examination conducted by the Indian Institute of Banking and Finance (IIBF).
              </p>
              <p className="mb-6 text-lg leading-relaxed">
                This training is not about "how to collect more money." Instead, it focuses heavily on the "Code of Conduct" and the legal rights of borrowers. The training program typically lasts for 100 hours. During this time, agents are taught the nuances of fair practice codes and the limits of their legal authority. If an agent does not have this certification, they are legally prohibited from contacting any borrower.
              </p>
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-8 rounded-r-xl mb-8">
                <h3 className="text-xl font-bold text-emerald-800 mb-4">Why Certification Protects You</h3>
                <p className="text-emerald-900/80 mb-4">A certified agent is a registered agent. This means:</p>
                <ul className="space-y-3 text-emerald-900/80 font-medium">
                  <li>• <strong>Accountability:</strong> Their professional future is tied to their conduct. Any serious complaint can lead to the cancellation of their IIBF certificate.</li>
                  <li>• <strong>Legal Awareness:</strong> They cannot claim ignorance of the RBI rules. By passing the exam, they have officially acknowledged the boundaries of their work.</li>
                  <li>• <strong>Bank Responsibility:</strong> Banks are required to verify the certification status of every agent they empanel. Failure to do so is a major compliance violation for the bank.</li>
                </ul>
              </div>
              <p className="mb-6 text-lg leading-relaxed">
                If an agent visits you or calls you, you have every right to ask for their IIBF registration number. Unethical agents or "freelance" recovery callers often lack this certification. If they cannot provide a valid registration number that you can verify with the bank, you should treat them as unauthorized individuals and report them immediately to both the bank and the local police.
              </p>
            </section>

            <section id="training-and-id" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Identification and Documentation: The Agent's Burden</h2>
              <p className="mb-6 text-lg leading-relaxed">
                Transparency is a key requirement of the "RBI Rules for Recovery Agents." An agent cannot operate in the shadows. Every time an agent makes a physical visit to your home or office, they must carry a specific set of documents. If any of these are missing, the visit itself is considered a violation of the RBI Fair Practice Code.
              </p>
              <div className="space-y-6 mb-8">
                 <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 font-black text-blue-600">01</div>
                    <div>
                        <h4 className="font-black text-[#2E2E2E] mb-1">Official ID Card</h4>
                        <p className="text-sm text-[#2E2E2E]/70 font-bold leading-relaxed">The agent must carry a valid identity card issued by the bank or the recovery agency. This card must have a clear photo and the agent's full name.</p>
                    </div>
                 </div>
                 <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 font-black text-blue-600">02</div>
                    <div>
                        <h4 className="font-black text-[#2E2E2E] mb-1">Authorization Letter</h4>
                        <p className="text-sm text-[#2E2E2E]/70 font-bold leading-relaxed">The bank must provide a specific authorization letter that names the agent or agency permitted to recover the debt from your specific account.</p>
                    </div>
                 </div>
                 <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 font-black text-blue-600">03</div>
                    <div>
                        <h4 className="font-black text-[#2E2E2E] mb-1">Grievance Officer Contact</h4>
                        <p className="text-sm text-[#2E2E2E]/70 font-bold leading-relaxed">The documentation must include the phone number and email address of the bank's designated grievance redressal officer.</p>
                    </div>
                 </div>
              </div>
              <p className="mb-6 text-lg leading-relaxed">
                The 2026 RBI Directions have also introduced a requirement for banks to provide a "Notice of Assignment" to the borrower before sending a recovery agent. You must be informed in writing about which agency has been assigned to your case and who the primary contact person will be. If an agent from an agency not mentioned in your official bank notice contacts you, it is a privacy leak and a major regulatory violation.
              </p>
            </section>

            <section id="bank-liability" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Vicarious Liability: Why the Bank Cannot Hide</h2>
              <p className="mb-6 text-lg leading-relaxed">
                In the past, lenders often attempted to wash their hands of any harassment by claiming it was the fault of an "independent" third party agency. The RBI has completely shut this loophole. The rule of "Vicarious Liability" is now a cornerstone of the recovery regulatory framework in India.
              </p>
              <p className="mb-6 text-lg leading-relaxed">
                According to the 2026 directions, the lending institution is solely responsible for the actions of its agents. If an agent uses physical force, abusive language, or violates your privacy, the legal consequences fall directly on the bank. This includes any fines imposed by the RBI or any compensation awarded by a consumer court.
              </p>
              <p className="mb-6 text-lg leading-relaxed">
                This liability extends to the "Board Approved Policy." Banks are required to have a detailed, transparent policy on debt recovery that is approved by their Board of Directors. This policy must be published on the bank's website. If an agent acts in a way that is contrary to this board approved policy, it is considered a failure of the bank's internal controls and is treated with extreme severity by the regulator.
              </p>
            </section>

            <section id="grievance-escalation" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">The Escalation Ladder: Moving Beyond the Agent</h2>
              <p className="mb-6 text-lg leading-relaxed">
                When an agent violates the RBI rules, your first step should not be to argue with the agent. Most recovery agents are trained to "power through" verbal protests. To stop the harassment, you must engage with the formal hierarchy that the RBI has mandated for every lending institution.
              </p>
              <div className="bg-[#2E2E2E] p-10 rounded-3xl mb-12 shadow-2xl border border-white/5">
                <h3 className="text-2xl font-black text-white mb-8 border-b border-white/10 pb-4">Standard Complaint Procedure</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <div className="text-[#1F5EFF] font-black text-4xl">01</div>
                    <h5 className="text-white font-bold text-lg">Internal Grievance</h5>
                    <p className="text-white/60 text-sm leading-relaxed">Write a formal email to the bank's Nodal Officer documenting the violation. Use specific dates, times, and phone numbers.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="text-[#1F5EFF] font-black text-4xl">02</div>
                    <h5 className="text-white font-bold text-lg">30-Day Waiting</h5>
                    <p className="text-white/60 text-sm leading-relaxed">The bank has exactly 30 days to resolve your grievance and provide a formal response in writing.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="text-[#1F5EFF] font-black text-4xl">03</div>
                    <h5 className="text-white font-bold text-lg">Digital Evidence</h5>
                    <p className="text-white/60 text-sm leading-relaxed">Always attach call logs, recordings, and screenshots of threatening messages to your complaint to make it undeniable.</p>
                  </div>
                </div>
              </div>
              <p className="mb-6 text-lg leading-relaxed">
                Many borrowers make the mistake of only calling the customer care number. Customer care agents are often not specialized in recovery grievances and may give you generic answers. The RBI rules require banks to have a dedicated Nodal Officer or Principal Nodal Officer who handles higher level complaints. Your communication should always be directed to this office for the best results.
              </p>
            </section>
            
            <section id="ombudsman-process" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Escalating to the RBI Ombudsman: The CMS Portal</h2>
              <p className="mb-6 text-lg leading-relaxed">
                If the lending institution fails to resolve your grievance within 30 days, or if you are dissatisfied with their response, the RBI provides a powerful independent platform for justice: the Integrated Ombudsman Scheme. This is accessible through the RBI's Complaint Management System (CMS) portal.
              </p>
              <p className="mb-6 text-lg leading-relaxed">
                The Ombudsman is not just a mediator; they have the power to investigate the bank's records, call for evidence of the agent's conduct, and pass a binding "Award." This award can include a directive to the bank to stop all recovery efforts, a fine for the regulatory violation, and even financial compensation to the borrower for the mental agony and harassment suffered.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="border-2 border-dashed border-[#DEDEDE] p-8 rounded-3xl">
                   <h4 className="text-xl font-black text-[#2E2E2E] mb-4">When to Approach the Ombudsman</h4>
                   <ul className="space-y-3 text-sm font-bold text-[#2E2E2E]/80">
                      <li>• The bank has rejected your complaint for no valid reason.</li>
                      <li>• 30 days have passed since your formal email to the Nodal Officer.</li>
                      <li>• The bank has provided an unsatisfactory or partial solution.</li>
                      <li>• The harassment has continued despite the bank's promises to stop it.</li>
                   </ul>
                </div>
                <div className="bg-blue-600 p-8 rounded-3xl text-white shadow-xl shadow-blue-500/20">
                   <h4 className="text-xl font-black mb-4">The CMS Portal Advantage</h4>
                   <p className="text-sm leading-relaxed opacity-90 font-bold">
                     The CMS portal allows you to track your complaint in real time. Banks are terrified of the Ombudsman because every complaint on CMS is monitored by the RBI's regional offices. A high number of recovery-related complaints can lead to the RBI debarring the bank from using recovery agents altogether.
                   </p>
                </div>
              </div>
              <p className="mb-6 text-lg leading-relaxed">
                Filing a complaint on the CMS portal is free of cost. You do not need a lawyer, though having professional debt consultants like SettleLoans can help you draft a high-impact complaint that cites the specific clauses of the 2026 RBI Directions. A well-drafted complaint that uses regulatory terminology is much more likely to result in a favorable decision from the Ombudsman.
              </p>
            </section>

            <section id="police-and-ipc" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">The Criminal Shield: Police Protection and the IPC</h2>
              <p className="mb-6 text-lg leading-relaxed">
                While the RBI rules provide a regulatory framework, the Indian Penal Code (IPC) provides criminal protection. If a recovery agent's conduct crosses into the territory of threats, physical force, or entering your property without permission, you should involve the local police.
              </p>
              <p className="mb-6 text-lg leading-relaxed">
                Many agents believe that they are immune to police action because "debt is a civil matter." This is a dangerous misconception. While the debt itself is civil, the method of collection can be criminal. If an agent threatens you with injury or tries to shame you in your community, they are committing a crime.
              </p>
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl mb-8">
                 <h3 className="text-xl font-black text-[#2E2E2E] mb-6 tracking-tight italic">Essential IPC Sections for Your Defense</h3>
                 <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="font-black text-2xl text-[#1F5EFF] underline">503</div>
                        <p className="text-sm font-bold text-[#2E2E2E]/70 leading-relaxed"><strong>Criminal Intimidation:</strong> This section applies when someone threatens you with injury to your person, reputation, or property to cause alarm or to force you to do something you are not legally bound to do.</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="font-black text-2xl text-[#1F5EFF] underline">441</div>
                        <p className="text-sm font-bold text-[#2E2E2E]/70 leading-relaxed"><strong>Criminal Trespass:</strong> If an agent enters your home without permission or refuses to leave after being asked, they are violating Section 441. Banks have no right to enter your private dwelling without a court order.</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="font-black text-2xl text-[#1F5EFF] underline">509</div>
                        <p className="text-sm font-bold text-[#2E2E2E]/70 leading-relaxed"><strong>Insulting Modesty:</strong> If a female borrower is subjected to foul language or suggestive behavior by an agent, this section provides strict protection and can lead to immediate arrest of the agent.</p>
                    </div>
                 </div>
              </div>
              <p className="mb-6 text-lg leading-relaxed">
                To file an FIR effectively, you must present the police with clear evidence. This is why recording calls and having witnesses (like neighbors) during a home visit is crucial. A police complaint creates a permanent record of the agent's misconduct. Once an FIR is filed, the bank's legal department is forced to intervene, which often leads to the immediate removal of the agent and a much softer stance from the lender during settlement negotiations.
              </p>
            </section>
            
            <section id="success-stories" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Regulatory Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-6 not-prose">
                {[
                  {
                    name: "Arjun V.",
                    loc: "Chennai",
                    type: "Unsecured Personal Loan",
                    outcome: "Regulatory Victory",
                    story: "The agents were calling at 9:00 PM. I showed them this guide and cited the 7:00 PM rule. The calls stopped immediately and the bank apologize for the violation."
                  },
                  {
                    name: "Sita D.",
                    loc: "Kolkata",
                    type: "Credit Card Debt",
                    outcome: "Agent Removed",
                    story: "A recovery agent tried to enter my home. I knew my rights from SettleLoans. I asked for his IIBF ID and authorization. He had neither. I reported it and he was removed from my case."
                  },
                  {
                    name: "Manish P.",
                    loc: "Delhi",
                    type: "Business Loan Default",
                    outcome: "Vicarious Liability Success",
                    story: "The bank claimed they weren't responsible for the agency's bad language. Our legal team cited the RBI's vicarious liability rule. The bank settled the loan for 50% less to close the matter."
                  },
                  {
                    name: "Kavita R.",
                    loc: "Mumbai",
                    type: "Multiple NBFC Dues",
                    outcome: "Privacy Restored",
                    story: "They were calling my neighbors. We filed a complaint citing the RBI's Responsible Business Conduct directions. The harassment ended and we're now following a sustainable payment plan."
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

            <section id="faqs" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4 not-prose">
                {[
                  { q: "What are the new RBI rules for recovery agents in 2026?", a: "The 2026 RBI rules mandate a strict 8:00 AM to 7:00 PM window for all communications, require mandatory IIBF certification for all agents, and hold banks vicariously liable for any harassment by third party agencies." },
                  { q: "Can a recovery agent call me after 7 PM?", a: "No. According to the 2026 RBI Directions, all forms of contact including calls, messages, and visits are strictly prohibited after 7:00 PM and before 8:00 AM." },
                  { q: "What should I do if a recovery agent uses abusive language?", a: "Record the conversation and file a formal complaint with the bank's Nodal Officer. If not resolved in 30 days, escalate the matter to the RBI Ombudsman through the CMS portal." },
                  { q: "Is IIBF certification mandatory for all recovery agents?", a: "Yes. Every agent engaged by a bank or NBFC must possess a valid certification from the Indian Institute of Banking and Finance (IIBF) after completing 100 hours of training." },
                  { q: "Can I complain directly to the police about recovery harassment?", a: "Yes. If an agent uses physical force, threats, or enters your property without permission, you can file an FIR under relevant sections of the Indian Penal Code such as Section 503 and 441." },
                  { q: "Does the bank take responsibility for its agents behavior?", a: "Yes. Under the rule of Vicarious Liability, the lending bank is 100% responsible for the conduct of its recovery agents and cannot delegate this liability to third party agencies." },
                  { q: "Can agents contact my family or relatives?", a: "No. RBI rules strictly prohibit agents from contacting third parties who are not involved in the loan. Public shaming or informing neighbors/relatives about your debt is a major violation." },
                  { q: "What is the CMS portal of the RBI?", a: "The Complaint Management System (CMS) is the online portal where borrowers can file complaints with the RBI Ombudsman if their bank does not resolve their grievance within 30 days." },
                  { q: "Can an agent threaten me with arrest?", a: "No. Recovery agents have no legal power to arrest anyone. Debt is a civil matter. Threats of arrest are a form of illegal intimidation and should be reported immediately." },
                  { q: "What documents should a recovery agent carry during a visit?", a: "A recovery agent must carry an official ID card from the bank or agency, an authorization letter from the lender, and the contact details of the bank's grievance officer." }
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
              <p className="text-gray-400 text-sm italic">Disclaimer: SettleLoans provides regulatory information for educational purposes. We are not a law firm. Always consult with a legal professional for your specific case regarding debt and harassment.</p>
            </div>

            {/* Bottom CTA for Mobile */}
            <div className="lg:hidden mt-16 mb-8">
              <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#1F5EFF]/20">
                <div className="bg-[#1F5EFF] p-6 text-center text-white">
                  <h3 className="text-2xl font-black mb-2">Fight Back with Law</h3>
                  <p className="opacity-90 text-sm">Our legal experts can help you stop illegal recovery tactics and settle your debt for good.</p>
                </div>
                <div className="p-8 text-center text-[#DEDEDE]">
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-xl hover:scale-105 transition-all shadow-lg text-lg">
                    Get Free Legal Advice
                  </Link>
                </div>
              </div>
            </div>

          </article>

          {/* Right Column: Sidebars */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <div className="sticky top-24 space-y-8">
              {/* CTA Container */}
              <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                <div className="bg-[#1F5EFF] p-4 text-center">
                  <h3 className="text-lg font-black text-white">Legal Protection</h3>
                </div>
                <div className="p-6 text-center">
                  <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                    Let our legal experts cite the RBI rules to the banks for you. Stop the harassment professionally.
                  </p>
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg">
                    Speak to an Expert
                  </Link>
                  <p className="mt-4 text-xs text-[#DEDEDE]/60 uppercase tracking-widest font-black">Secure & Confidential</p>
                </div>
              </div>

              {/* Related Pages */}
              <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2">Must Read Guides</h3>
                <ul className="space-y-4 text-sm font-bold">
                  <li>
                    <Link href="/how-to-stop-loan-recovery-harassment" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      Harassment Stop Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/recovery-agent-home-visit-rules" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      Home Visit Regulations
                    </Link>
                  </li>
                  <li>
                    <Link href="/recovery-agent-harassment-complaint" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      How to File a Complaint
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
