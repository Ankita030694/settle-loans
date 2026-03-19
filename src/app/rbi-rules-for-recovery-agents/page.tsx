import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import ReviewSnippets from "@/components/ReviewSnippets";

export const metadata: Metadata = {
    title: "RBI Rules for Recovery Agents 2024-2026 | Official Guidelines",
    description: "Read the comprehensive breakdown of RBI rules for recovery agents, including the latest 2026 directions, contact timings, privacy codes, and training mandates.",
    alternates: {
        canonical: "https://settleloans.in/rbi-rules-for-recovery-agents",
    },
};

export default function RBIRulesRecoveryAgentsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/rbi-rules-for-recovery-agents#webpage",
                "url": "https://settleloans.in/rbi-rules-for-recovery-agents",
                "name": "Official RBI Guidelines & Rules for Recovery Agents in India",
                "description": "An in-depth analysis of the Reserve Bank of India's regulations governing debt recovery practices and agent conduct.",
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
                        "name": "RBI Recovery Rules",
                        "item": "https://settleloans.in/rbi-rules-for-recovery-agents"
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/rbi-rules-for-recovery-agents#article",
                "headline": "RBI Guidelines on Recovery Agents: Standardizing Conduct and Accountability",
                "description": "Explaining the technical requirements of the 2026 RBI Responsible Business Conduct Directions and agent certification protocols.",
                "author": {
                    "@type": "Organization",
                    "name": "SettleLoans Regulatory Research"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "SettleLoans",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://settleloans.in/logo/logo.svg"
                    }
                },
                "datePublished": "2024-03-10",
                "dateModified": "2024-03-10",
                "mainEntityOfPage": { "@id": "https://settleloans.in/rbi-rules-for-recovery-agents#webpage" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/rbi-rules-for-recovery-agents#product",
                "name": "RBI Compliance Debt Advisory",
                "description": "Specialized advisory on audit and defense strategies based on RBI Fair Practices Code for loan recovery.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.97",
                    "reviewCount": "4800"
                }
            },
            {
                "@type": "FAQPage",
                "@id": "https://settleloans.in/rbi-rules-for-recovery-agents#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What are the new contact timings for recovery agents as per RBI?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "As per the 2026 RBI directions (effective July 1, 2026), recovery agents can only contact borrowers between 8:00 AM and 7:00 PM. Calls or visits before or after this window are strictly prohibited."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Must recovery agents have a special certification?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. All recovery agents must undergo at least 100 hours of training and obtain a certification from the Indian Institute of Banking & Finance (IIBF) to legally perform recovery activities."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can an agent visit my home without notice?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. Lenders are required to provide a written notice (via post or electronic means) before a recovery agent visits a borrower's residence for the first time."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is it legal for recovery agents to send abusive WhatsApp messages?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely not. The RBI explicitly prohibits the use of abusive, minatory, or threatening language across all communication channels, including digital messages and social media."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are banks responsible for the actions of third-party recovery agencies?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Regulated entities (Banks/NBFCs) are held fully accountable for the conduct of their recovery agents. They must ensure their agents strictly follow the board-approved Fair Practices Code."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What identification should a recovery agent carry?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "An agent must carry: 1. A valid ID card issued by the bank/agency. 2. A specific authorization letter for the case. 3. A copy of the recovery notice. 4. Customer service/helpline numbers of the lender."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can recovery agents contact my employer for debt details?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. RBI rules strictly forbid agents from disclosing a borrower's debt status to third parties, including employers, relatives, or neighbors, as it constitutes harassment and a breach of privacy."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I record interactions with recovery agents?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. In fact, RBI's 2026 guidelines mandate that lenders themselves must ensure all recovery calls and interactions are digitally recorded for audit and grievance redressal."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What happens if a bank violates RBI recovery rules?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The RBI can impose heavy financial penalties on the bank, issue cease-and-desist orders against their recovery practices, and even suspend their license for using outsourced recovery agencies."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can recovery agents enter my house by force?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. Recovery agents have no judicial powers. They cannot enter your premises without your consent. Any use of force or unauthorized entry constitutes criminal trespass under the IPC."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />

                {/* Hero Section */}
                <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden text-center">
                    <div className="max-w-5xl mx-auto relative z-10">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
                            Regulatory Framework
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight uppercase">
                            RBI Rules for <br /> <span className="text-[#1F5EFF]">Recovery Agents</span>
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
                            Stay informed on the latest 2026 RBI guidelines. Transparent, ethical, and legal debt recovery is your right. Know the boundaries that banks and agents must never cross.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Audit Agent Compliance
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Breadcrumb */}
                <div className="w-full bg-white border-b border-[#DEDEDE] sticky top-0 z-40">
                    <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 text-[10px] font-black uppercase tracking-widest text-[#747474]">
                        <nav aria-label="Breadcrumb">
                            <ol className="flex items-center space-x-3 overflow-x-auto whitespace-nowrap scrollbar-hide">
                                <li><Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link></li>
                                <li><svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg></li>
                                <li className="font-bold text-[#2E2E2E]" aria-current="page">RBI Recovery Rules</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">

                    {/* Left Column: TOC */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-32">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#1F5EFF] mb-8 pb-4 border-b-2 border-blue-50">Rules Navigator</h3>
                            <TableOfContents
                                items={[
                                    { id: "rbi-rules-mandate-overview", title: "Overview" },
                                    { id: "2026-rbi-amendments-impact", title: "The 2026 Update" },
                                    { id: "official-contact-timings", title: "Contact Timings" },
                                    { id: "privacy-and-confidentiality-code", title: "Privacy Code" },
                                    { id: "identification-and-authorization", title: "Agent Credentials" },
                                    { id: "mandatory-iibf-certification", title: "Agent Training" },
                                    { id: "prohibited-harsh-practices", title: "Banned Actions" },
                                    { id: "bank-vicarious-liability", title: "Bank Liability" },
                                    { id: "compliance-victories", title: "Success Stories" },
                                    { id: "faqs-rbi-guidelines", title: "Technical FAQs" }
                                ]}
                            />
                        </div>
                    </aside>

                    {/* Middle Column: Content */}
                    <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[#2E2E2E]">

                        <section id="rbi-rules-mandate-overview" className="scroll-mt-32 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                            <h2 className="text-4xl md:text-5xl font-black text-[#2E2E2E] mb-10 leading-[1.1] uppercase tracking-tighter">
                                The RBI Mandate: <span className="text-[#1F5EFF]">Dignity Over Debt</span>
                            </h2>
                            <p className="text-xl font-medium mb-8 leading-relaxed">
                                Debt recovery is a legitimate business process, but it is not exempt from the constitutional right to privacy and the regulatory standard of professional conduct. The <strong>RBI rules for recovery agents</strong> serve as the definitive code of ethics for every bank, NBFC, and outsourced agency in India.
                            </p>
                            <p className="mb-8">
                                For years, the recovery landscape was plagued by "muscle power" and systemic harassment. Recognizing this deficiency, the Reserve Bank of India has evolved its guidelines from simple circulars to the comprehensive and binding <strong>Responsible Business Conduct Directions</strong>. These rules are not mere suggestions; they are enforceable mandates that, if violated, empower the borrower and penalize the lender.
                            </p>
                            <div className="bg-gray-900 p-10 rounded-[48px] text-white my-12 shadow-2xl relative border-l-8 border-[#1F5EFF]">
                                <h3 className="text-2xl font-black mb-6 uppercase tracking-widest text-[#1F5EFF]">The Fair Practices Code</h3>
                                <p className="text-lg opacity-80 leading-relaxed font-medium">
                                    Every bank must have a board-approved 'Fair Practices Code' for lending and recovery displayed on their website. This code is the baseline for all agent behavior. If an agent violates even a single line of this code, the bank is in breach of its regulatory promise.
                                </p>
                            </div>
                        </section>

                        <section id="2026-rbi-amendments-impact" className="scroll-mt-32 mb-20 p-12 bg-blue-50 border border-blue-100 rounded-[56px] relative shadow-inner overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <svg className="w-32 h-32 text-blue-900 font-bold" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-8 uppercase tracking-tighter italic leading-none">
                                The July 2026 Amendments: A New Era
                            </h2>
                            <p className="mb-8 leading-relaxed font-black text-blue-800 uppercase tracking-widest text-sm">
                                Effective July 1, 2026, the RBI is implementing the "Commercial Banks – Responsible Business Conduct Second Amendment Directions".
                            </p>
                            <p className="mb-8 text-blue-900 font-medium">
                                This new framework consolidates years of feedback and closes loopholes that recovery agents previously exploited. The focus has shifted from "recovering the money" to "protecting the customer journey". Key pillars include mandatory recording of all interactions and stricter governance over outsourced agencies.
                            </p>
                            <div className="p-8 bg-white/50 rounded-3xl border border-blue-200">
                                <h4 className="text-lg font-black text-blue-900 mb-2 uppercase">Core 2026 Shift</h4>
                                <p className="text-xs italic font-bold text-blue-700 leading-relaxed uppercase">"Lenders are now explicitly prohibited from escalating a case to recovery agents while a customer's formal grievance is pending resolution."</p>
                            </div>
                        </section>

                        <section id="official-contact-timings" className="scroll-mt-32 mb-20 mt-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-widest border-b-8 border-gray-100 pb-4 leading-none">
                                Contact Timings: The 8 AM to 7 PM Rule
                            </h2>
                            <p className="mb-8 leading-relaxed font-medium">
                                The most common violation is the 'late-night threat call'. The RBI has finally standardized global calling hours to prevent mental harassment at home.
                            </p>
                            <div className="space-y-4">
                                <div className="p-8 bg-gray-50 border border-gray-100 rounded-[32px] hover:shadow-md transition-all flex justify-between items-center group">
                                    <div>
                                        <h4 className="text-xl font-black text-[#2E2E2E] mb-1 uppercase italic leading-none group-hover:text-[#1F5EFF] transition-colors">Standard Window</h4>
                                        <p className="text-xs font-bold opacity-60 uppercase tracking-widest">Effective and Mandatory</p>
                                    </div>
                                    <div className="text-4xl font-black text-[#1F5EFF] italic">08:00 - 19:00</div>
                                </div>
                                <div className="p-8 bg-red-50 border border-red-100 rounded-[32px] flex justify-between items-center group">
                                    <div>
                                        <h4 className="text-xl font-black text-red-900 mb-1 uppercase italic leading-none">Silent Period</h4>
                                        <p className="text-xs font-bold text-red-700 opacity-60 uppercase tracking-widest">Violation Zone</p>
                                    </div>
                                    <div className="text-4xl font-black text-red-600 italic">19:01 - 07:59</div>
                                </div>
                            </div>
                            <p className="mt-8 text-sm font-bold opacity-70 italic leading-relaxed uppercase tracking-tighter">
                                Note: Agents are also required to respect 'Bereavements' and 'Major Festivals'. Calling during a family funeral or a wedding is a classified 'harsh practice'.
                            </p>
                        </section>

                        <section id="privacy-and-confidentiality-code" className="scroll-mt-32 mb-20 p-12 bg-[#2E2E2E] rounded-[64px] shadow-3xl relative mt-20 text-white overflow-hidden">
                            <div className="absolute bottom-0 left-0 w-full h-2 bg-[#1F5EFF]"></div>
                            <h2 className="text-3xl md:text-4xl font-black mb-8 border-l-8 border-[#1F5EFF] pl-6 uppercase tracking-widest italic leading-none">
                                Privacy and Confidentiality Code
                            </h2>
                            <p className="mb-8 leading-relaxed opacity-80 font-medium">
                                Your debt is a private contract between you and the institution. Any disclosure of this debt to a third party is a breach of the fundamental <strong>Right to Privacy</strong> upheld by the K.S. Puttaswamy judgment.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                                    <h4 className="text-lg font-black mb-4 uppercase text-[#1F5EFF]">No Office Intrusion</h4>
                                    <p className="text-xs leading-relaxed font-bold italic opacity-70">Agents cannot contact your colleagues or boss. They cannot create a scene at your recruitment office or workplace to embarrass you into payment.</p>
                                </div>
                                <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                                    <h4 className="text-lg font-black mb-4 uppercase text-[#1F5EFF]">No Social Shaming</h4>
                                    <p className="text-xs leading-relaxed font-bold italic opacity-70">Creating WhatsApp groups with your contacts, posting your photo on social media as a 'Defaulter', or shaming you in community groups is strictly prohibited.</p>
                                </div>
                            </div>
                        </section>

                        <section id="identification-and-authorization" className="scroll-mt-32 mb-20 mt-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-widest leading-[0.9] decoration-[#1F5EFF] underline underline-offset-8">
                                Identification & Authorization
                            </h2>
                            <p className="mb-8 leading-relaxed text-lg font-medium italic opacity-70">
                                "An agent without an ID is an impostor."
                            </p>
                            <p className="mb-8">
                                Every interaction must begin with clear identification. If an agent calls from a private number and refuses to name their agency, they are in violation.
                            </p>
                            <div className="bg-gray-50 p-12 rounded-[56px] border border-gray-100 shadow-sm">
                                <h4 className="text-2xl font-black mb-8 uppercase tracking-tighter text-[#1F5EFF] italic">The 'First Visit' Protocol</h4>
                                <ul className="space-y-6">
                                    <li className="flex gap-4 items-start">
                                        <div className="w-10 h-10 shrink-0 bg-[#2E2E2E] text-white rounded-full flex items-center justify-center font-black">1</div>
                                        <p className="text-sm font-bold opacity-80 uppercase leading-relaxed">The bank must send a written notice to the borrower before the agent's first home visit.</p>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <div className="w-10 h-10 shrink-0 bg-[#2E2E2E] text-white rounded-full flex items-center justify-center font-black">2</div>
                                        <p className="text-sm font-bold opacity-80 uppercase leading-relaxed">The agent must carry a valid ID card issued by the Regulated Entity (RE) or the agency.</p>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <div className="w-10 h-10 shrink-0 bg-[#2E2E2E] text-white rounded-full flex items-center justify-center font-black">3</div>
                                        <p className="text-sm font-bold opacity-80 uppercase leading-relaxed">The agent must carry a specific 'Authorization Letter' mentioning your loan details and the agency's name.</p>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section id="mandatory-iibf-certification" className="scroll-mt-32 mb-20 p-10 bg-blue-900 rounded-[48px] border-4 border-[#1F5EFF] text-white shadow-2xl relative overflow-hidden mt-12 text-center">
                            <h2 className="text-3xl font-black mb-6 uppercase tracking-wider italic leading-none">Mandatory IIBF Certification</h2>
                            <p className="text-lg leading-relaxed font-black opacity-80 mb-8 uppercase tracking-widest">"No Certification, No Recovery."</p>
                            <p className="text-sm font-medium mb-8 max-w-2xl mx-auto italic">
                                The RBI has mandated that every individual acting as a recovery agent must undergo a <strong>100-hour certificate course</strong> formulated by the IBA and IIBF. As of the current regulatory cycle, no individual can engage in recovery activities without a valid <strong>IIBF Certificate</strong>.
                            </p>
                            <div className="p-6 bg-white/10 rounded-2xl border border-white/20 inline-block">
                                <p className="text-xs font-black uppercase tracking-widest text-[#1F5EFF]">Check Agent Credibility</p>
                                <p className="text-[10px] opacity-70 mt-1 uppercase italic font-bold leading-relaxed">You have the right to ask for an agent's IIBF registration number before speaking to them.</p>
                            </div>
                        </section>

                        <section id="prohibited-harsh-practices" className="scroll-mt-32 mb-20 mt-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 border-l-8 border-[#2E2E2E] pl-6 uppercase tracking-widest leading-none italic decoration-[#1F5EFF] underline-offset-8">
                                Prohibited 'Harsh Practices'
                            </h2>
                            <p className="mb-8 leading-relaxed font-medium">
                                The RBI 2026 directions provide an exhaustive list of actions that are now officially classified as 'Harsh Practices'. These are the "Red Lines" that no agent should cross.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-8 bg-red-50 border border-red-100 rounded-[32px] text-red-900 font-black text-xs uppercase tracking-tighter italic leading-snug">Using abusive, minatory, or threatening language.</div>
                                <div className="p-8 bg-red-50 border border-red-100 rounded-[32px] text-red-900 font-black text-xs uppercase tracking-tighter italic leading-snug">Sending inappropriate messages via mobile or social media.</div>
                                <div className="p-8 bg-red-50 border border-red-100 rounded-[32px] text-red-900 font-black text-xs uppercase tracking-tighter italic leading-snug">Making excessive or anonymous calls to the borrower.</div>
                                <div className="p-8 bg-red-50 border border-red-100 rounded-[32px] text-red-900 font-black text-xs uppercase tracking-tighter italic leading-snug">Contacting a borrower outside the prescribed 08:00 - 19:00 window.</div>
                                <div className="p-8 bg-red-50 border border-red-100 rounded-[32px] text-red-900 font-black text-xs uppercase tracking-tighter italic leading-snug">Harassing relatives, friends, or co-workers of the borrower.</div>
                                <div className="p-8 bg-red-50 border border-red-100 rounded-[32px] text-red-900 font-black text-xs uppercase tracking-tighter italic leading-snug">Making false or misleading representations about the depth of debt.</div>
                            </div>
                        </section>

                        <section id="bank-vicarious-liability" className="scroll-mt-32 mb-20 p-12 bg-[#1F5EFF] rounded-[64px] text-white shadow-3xl relative mt-20">
                            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter italic leading-none">vicarious liability</h2>
                            <p className="text-xl leading-relaxed opacity-90 font-medium mb-10 italic">
                                "The master is responsible for the servant's wrong."
                            </p>
                            <p className="mb-0 text-sm font-black uppercase tracking-[0.2em] font-bold leading-relaxed">
                                The RBI holds the <strong>Managing Director & CEO</strong> of the bank directly responsible for the behavior of their outsourced recovery agents. Banks cannot hide behind 'Contractors'. Any violation by a small-time agent in a remote village is technically a violation by the Bank's Board of Directors in their head office.
                            </p>
                        </section>

                        <section id="compliance-victories" className="scroll-mt-32 mb-20 mt-20">
                            <ReviewSnippets
                                title="Regulatory Compliance Wins"
                                reviews={[
                                    {
                                        name: "Vikram Sethi",
                                        loc: "CHANDIGARH",
                                        loan: "NBFC Personal Loan",
                                        res: "Violation Audited, Loan Settled",
                                        story: "An agent called me at 6 AM. I cited the RBI 2026 timing guidelines in a formal email to the PNO. The bank audited the call log and found the violation. They gave me a 50% waiver on the spot to avoid an Ombudsman penalty."
                                    },
                                    {
                                        name: "Anjali Menon",
                                        loc: "KOCHI",
                                        loan: "High-Value credit card",
                                        res: "Privacy Breach Redressal",
                                        story: "The agency sent a guy to my kids' school. We cited the 'Privacy and Confidentiality' code under the RBI Fair Practices. The school CCTV footage was our key evidence. The agency was blacklisted by the bank."
                                    },
                                    {
                                        name: "Zoya Khan",
                                        loc: "LUCKNOW",
                                        loan: "Multiple Micro-loans",
                                        res: "Training Violation Win",
                                        story: "The agent couldn't produce an IIBF certificate when asked. We recorded his admission of not being trained. The RBI regulated entity had to close the file as they couldn't justify using uncertified agents."
                                    },
                                    {
                                        name: "Sunil Verma",
                                        loc: "JAIPUR",
                                        loan: "Business OD Default",
                                        res: "Authorization Check victory",
                                        story: "A fake agency was trying to collect money. We asked for the 'Authorization Letter' as per RBI rules. They vanished. Always ask for credentials before talking debt."
                                    }
                                ]}
                            />
                        </section>

                        <section id="faqs-rbi-guidelines" className="scroll-mt-32 mb-12 mt-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-widest decoration-[#1F5EFF] underline underline-offset-8 leading-none italic">RBI Guidelines Technical FAQs</h2>
                            <div className="space-y-4 not-prose">
                                {(jsonLd["@graph"] as any)[4]?.mainEntity?.map((faq: any, i: number) => (
                                    <details key={i} className="group bg-white border border-[#DEDEDE] rounded-[24px] overflow-hidden hover:shadow-lg transition-all border-b-8 border-b-[#1F5EFF]/30 shadow-sm mb-6">
                                        <summary className="flex justify-between items-center p-8 cursor-pointer font-black text-[#2E2E2E] list-none bg-gray-50 group-open:bg-white transition-colors border-b border-[#DEDEDE] group-open:border-transparent">
                                            <span className="text-xl leading-none">{i + 1}. {faq.name}</span>
                                            <span className="transition-transform group-open:rotate-180 p-2 bg-[#1F5EFF] rounded-full text-white">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7 7"></path></svg>
                                            </span>
                                        </summary>
                                        <div className="px-8 pb-8 text-[#2E2E2E] opacity-90 leading-relaxed pt-6 mt-0 bg-white font-medium text-lg italic uppercase tracking-tighter">
                                            {faq.acceptedAnswer.text}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </section>

                        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
                            <p className="text-gray-400 text-[10px] italic font-black uppercase tracking-[0.3em] leading-relaxed max-w-2xl mx-auto">
                                Disclaimer: This guide is for educational purposes based on RBI's publicly available circulars. SettleLoans is a private consultancy. For official regulatory text, please refer to rbi.org.in. Compliance is the responsibility of the lending institution.
                            </p>
                        </div>

                        {/* Mobile CTA */}
                        <div className="lg:hidden mt-16 mb-8">
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#1F5EFF]/20">
                                <div className="bg-[#1F5EFF] p-6 text-center text-white">
                                    <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter leading-none">Audit Your Bank</h3>
                                    <p className="opacity-90 text-sm font-bold uppercase tracking-wider italic">Is your bank following the 2026 RBI rules? Let our experts audit your interactions for legal leverage.</p>
                                </div>
                                <div className="p-8 text-center text-[#DEDEDE]">
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-xl hover:scale-105 transition-all shadow-lg text-lg uppercase tracking-tighter italic">
                                        Check Compliance
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Right Column: CTA & Related Pages */}
                    <aside className="hidden lg:block w-1/5 shrink-0 px-4 mt-[-40px]">
                        <div className="sticky top-24 space-y-12">

                            {/* CTA Card */}
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group relative">
                                <div className="bg-[#1F5EFF] p-4 text-center">
                                    <h3 className="text-lg font-black text-white uppercase tracking-tighter">Regulatory Shield</h3>
                                </div>
                                <div className="p-6 text-center">
                                    <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold italic uppercase">
                                        Don't let agents trick you with fake rules. Our regulatory experts identify every RBI violation in your case to build a powerful defense for settlement.
                                    </p>
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg text-base uppercase tracking-widest italic decoration-white underline-offset-4 decoration-2 underline">
                                        Protect My Rights
                                    </Link>
                                    <p className="mt-4 text-[10px] text-[#DEDEDE]/60 uppercase tracking-widest font-black italic">RBI Circular Experts. Safe Settlements.</p>
                                </div>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm">
                                <h4 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2 italic">Regulatory Hub</h4>
                                <nav className="space-y-4">
                                    <Link href="/bank-recovery-harassment-complaint" className="group flex items-center text-[11px] font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic uppercase tracking-tighter">
                                        <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                        Harassment Complaint
                                    </Link>
                                    <Link href="/recovery-agents-threatening-me-what-to-do" className="group flex items-center text-[11px] font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic uppercase tracking-tighter">
                                        <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                        Agent Protection
                                    </Link>
                                    <Link href="/rbi-new-recovery-guidelines-july-2026" className="group flex items-center text-[11px] font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic uppercase tracking-tighter">
                                        <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                        2026 Guidelines
                                    </Link>
                                    <Link href="/bank-recovery-case-in-court" className="group flex items-center text-[11px] font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic uppercase tracking-tighter">
                                        <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                        Court Case Guide
                                    </Link>
                                    <Link href="/legal-action-for-credit-card-default" className="group flex items-center text-[11px] font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic uppercase tracking-tighter">
                                        <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                        Credit Card Laws
                                    </Link>
                                </nav>
                                <div className="mt-8 pt-4 border-t border-gray-50 italic">
                                    <p className="text-[9px] font-black uppercase text-[#1F5EFF] tracking-widest leading-relaxed">"RBI Compliance is your Strongest Defense."</p>
                                </div>
                            </div>
                        </div>
                    </aside>

                </div>
            </main>
        </div>
    );
}
