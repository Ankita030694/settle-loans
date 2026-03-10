import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import ReviewSnippets from "@/components/ReviewSnippets";

export const metadata: Metadata = {
    title: "Recovery Agents Threatening Me? What to Do | Legal Defense Guide",
    description: "Are loan recovery agents harrassing or threatening you? Learn about your legal rights in India, RBI guidelines on recovery agents, and how to file a police complaint.",
    alternates: {
        canonical: "https://settleloans.in/recovery-agents-threatening-me-what-to-do",
    },
};

export default function RecoveryHarassmentPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/recovery-agents-threatening-me-what-to-do#webpage",
                "url": "https://settleloans.in/recovery-agents-threatening-me-what-to-do",
                "name": "Recovery Agent Harassment Defense India | Legal Step-by-Step",
                "description": "An exhaustive guide for borrowers facing threats or harassment from loan recovery agents in India, including legal remedies and RBI protocols.",
                "breadcrumb": { "@id": "https://settleloans.in/recovery-agents-threatening-me-what-to-do#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/recovery-agents-threatening-me-what-to-do#breadcrumb",
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
                        "name": "Recovery Agent Protection",
                        "item": "https://settleloans.in/recovery-agents-threatening-me-what-to-do"
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/recovery-agents-threatening-me-what-to-do#article",
                "headline": "Defeating Debt Harassment: Your Legal Shield Against Recovery Agents",
                "description": "How to handle illegal threats from recovery agents using RBI guidelines and Indian Penal Code (IPC) protections.",
                "author": {
                    "@type": "Organization",
                    "name": "SettleLoans Anti-Harassment Taskforce"
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
                "mainEntityOfPage": { "@id": "https://settleloans.in/recovery-agents-threatening-me-what-to-do#webpage" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/recovery-agents-threatening-me-what-to-do#product",
                "name": "Harassment Redressal Mediation",
                "description": "Professional mediation and legal assistance to stop illegal recovery agent harassment and negotiate loan settlements.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.98",
                    "reviewCount": "5400"
                }
            },
            {
                "@type": "FAQPage",
                "@id": "https://settleloans.in/recovery-agents-threatening-me-what-to-do#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Are recovery agents allowed to call at night?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. Under RBI guidelines (effective July 1, 2026), recovery calls are strictly prohibited between 7:00 PM and 7:00 AM."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can a recovery agent visit my office without permission?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "RBI rules prohibit creating any disturbance or embarrassment at your workplace. They must respect your privacy and cannot disclose your debt to your colleagues or employer."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What should I do if an agent threatens me physically?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Physical threats are a criminal offense under Section 503 and 506 of the IPC. You should record the threat if possible and file an FIR at your local police station immediately."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I file a complaint with the RBI about recovery agents?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. If the bank's internal grievance cell doesn't resolve the issue within 30 days, you can lodge a complaint with the RBI Ombudsman via the CMS portal (cms.rbi.org.in)."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is it legal for agents to call my friends or relatives?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely not. Contacting third parties (except co-borrowers or guarantors) to disclose your debt or pressure you is a serious violation of the RBI Fair Practices Code."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do I identify if an agent is genuine?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Genuine agents must carry a valid ID card and an authorization letter from the Bank or NBFC they represent. They must disclose their identity and agency name upfront."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What laws protect me from loan harassment in India?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "You are protected by RBI guidelines, the Consumer Protection Act, and various IPC sections (503, 506, 504, 509) dealing with criminal intimidation and harassment."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I record calls from recovery agents?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Recording these calls is essential to collect evidence of harassment or abusive language for filing complaints with the police or the Ombudsman."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can the bank be penalized for the agent's behavior?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Banks are directly responsible for the conduct of their agents. The Supreme Court has ruled that bank harassment is a 'deficiency in service', entitling you to compensation."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does defaulting on a loan make me a criminal?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. Loan default is a civil matter. It only becomes criminal if there is proven intent to defraud or if cheques/NACH mandates bounce."
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
                            Anti-Harassment Shield
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight uppercase">
                            Recovery Agents <br /> <span className="text-[#1F5EFF]">Threatening Me?</span>
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
                            Don't suffer in silence. Learn the legal boundaries of debt recovery in India. Stop the calls, end the threats, and exercise your constitutional right to dignity.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Stop Agent Harassment Now
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
                                <li className="font-bold text-[#2E2E2E]" aria-current="page">Recovery Agent Help</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">

                    {/* Left Column: TOC */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-32">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#1F5EFF] mb-8 pb-4 border-b-2 border-blue-50">Content Guide</h3>
                            <TableOfContents
                                items={[
                                    { id: "harassment-defensive-overview", title: "Overview" },
                                    { id: "rbi-fair-practices-code", title: "RBI Guidelines" },
                                    { id: "ipc-criminal-protections", title: "IPC & Police Aid" },
                                    { id: "collecting-evidence-harassment", title: "Evidence Kit" },
                                    { id: "legal-rights-of-defaulters", title: "Borrower Rights" },
                                    { id: "grievance-ombudsman-protocol", title: "Ombudsman Step" },
                                    { id: "harassment-at-workplace", title: "Workplace Shield" },
                                    { id: "legal-notice-against-bank", title: "Going Offensive" },
                                    { id: "summary-victories", title: "Success Stories" },
                                    { id: "faqs", title: "Common FAQs" }
                                ]}
                            />
                        </div>
                    </aside>

                    {/* Middle Column: Content */}
                    <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[#2E2E2E]">

                        <section id="harassment-defensive-overview" className="scroll-mt-32 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                            <h2 className="text-4xl md:text-5xl font-black text-[#2E2E2E] mb-10 leading-[1.1] uppercase tracking-tighter">
                                Recovery Harassment: <span className="text-[#1F5EFF]">It's Time to Draw the Line</span>
                            </h2>
                            <p className="text-xl font-medium mb-8 leading-relaxed">
                                Financial distress is already a heavy burden. When it is compounded by abusive calls, threats of violence, and public shaming by recovery agents, it becomes a human rights issue. If you are asking, <strong>"recovery agents are threatening me, what to do?"</strong>, know that you are not powerless.
                            </p>
                            <p className="mb-8 p-12 bg-white border-l-8 border-[#1F5EFF] shadow-lg italic font-bold text-gray-700">
                                The Indian judicial system and the Reserve Bank of India have repeatedly stated that debt recovery cannot happen at the cost of your dignity. Legal recovery is a professional process, not a criminal one.
                            </p>
                            <p className="mb-8">
                                In India, recovery agents often rely on the borrower's 'legal illiteracy' to intimidate them. They might use fake court stickers on notices, dress as pseudo-police officers, or threaten to have you arrested within hours. None of this is legal. This guide is designed to equip you with the legal ammunition needed to silence the threats and steer the recovery process back into a civilized, professional channel.
                            </p>
                        </section>

                        <section id="rbi-fair-practices-code" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-widest border-b-8 border-gray-100 pb-4">
                                RBI Guidelines: The Invisible Shield
                            </h2>
                            <p className="mb-8 font-medium">
                                The <strong>RBI Master Circular on Recovery Agents</strong> is the most potent weapon in your arsenal. Any violation of these codes can lead to the bank being fined or even losing its license to use recovery agents.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mb-12">
                                <div className="p-10 bg-blue-50 border border-blue-100 rounded-[32px] hover:shadow-md transition-all">
                                    <h4 className="text-xl font-black text-[#1F5EFF] mb-4 uppercase italic leading-none">The 7 to 7 Rule</h4>
                                    <p className="text-sm font-bold opacity-80 uppercase leading-snug">Effective July 1, 2026, no bank or agency can call you Before 7:00 AM or after 7:00 PM. Calls at 9 PM or 10 PM are illegal.</p>
                                </div>
                                <div className="p-10 bg-blue-50 border border-blue-100 rounded-[32px] hover:shadow-md transition-all">
                                    <h4 className="text-xl font-black text-[#1F5EFF] mb-4 uppercase italic leading-none">No Anonymous Calls</h4>
                                    <p className="text-sm font-bold opacity-80 uppercase leading-snug">Agents must disclose their name, their agency's name, and the bank they represent immediately. Using burner numbers is a violation.</p>
                                </div>
                                <div className="p-10 bg-blue-50 border border-blue-100 rounded-[32px] hover:shadow-md transition-all">
                                    <h4 className="text-xl font-black text-[#1F5EFF] mb-4 uppercase italic leading-none">Privacy is Absolute</h4>
                                    <p className="text-sm font-bold opacity-80 uppercase leading-snug">Contacting your neighbors, friends, or distant relatives to 'embarrass' you into paying is strictly prohibited and actionable.</p>
                                </div>
                                <div className="p-10 bg-blue-50 border border-blue-100 rounded-[32px] hover:shadow-md transition-all">
                                    <h4 className="text-xl font-black text-[#1F5EFF] mb-4 uppercase italic leading-none">No Criminal Threats</h4>
                                    <p className="text-sm font-bold opacity-80 uppercase leading-snug">Threatening with 'Police Arrest' or 'Jail Time' for a civil debt is professional misconduct and a criminal offense for the agent.</p>
                                </div>
                            </div>
                        </section>

                        <section id="ipc-criminal-protections" className="scroll-mt-32 mb-20 p-12 bg-[#2E2E2E] rounded-[48px] shadow-2xl relative mt-20 text-white">
                            <h2 className="text-3xl md:text-4xl font-black mb-8 border-l-8 border-[#1F5EFF] pl-6 uppercase tracking-tighter italic">
                                The IPC Arsenal: Filing a Police Complaint
                            </h2>
                            <p className="mb-8 leading-relaxed font-bold opacity-80">
                                Harassment is not a "banking issue"; it is a criminal issue. The <strong>Indian Penal Code (IPC)</strong> provides specific sections that apply directly to abusive recovery agents.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-6 items-start">
                                    <div className="w-24 h-24 shrink-0 bg-[#1F5EFF] rounded-2xl flex items-center justify-center font-black text-2xl">503</div>
                                    <div>
                                        <h4 className="text-xl font-black uppercase text-[#1F5EFF] mb-2 leading-none">Criminal Intimidation</h4>
                                        <p className="text-sm opacity-70 font-bold italic leading-relaxed">Threatening you with injury to your person, reputation, or property to force you to perform an act (paying money) you're not legally bound to at that moment physically.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className="w-24 h-24 shrink-0 bg-[#1F5EFF] rounded-2xl flex items-center justify-center font-black text-2xl">504</div>
                                    <div>
                                        <h4 className="text-xl font-black uppercase text-[#1F5EFF] mb-2 leading-none">Intentional Insult</h4>
                                        <p className="text-sm opacity-70 font-bold italic leading-relaxed">Using abusive language or insults intended to provoke a breach of the peace. Perfect for recording agents who use profanity.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className="w-24 h-24 shrink-0 bg-[#1F5EFF] rounded-2xl flex items-center justify-center font-black text-2xl">509</div>
                                    <div>
                                        <h4 className="text-xl font-black uppercase text-[#1F5EFF] mb-2 leading-none">Insult to Modesty</h4>
                                        <p className="text-sm opacity-70 font-bold italic leading-relaxed">If recovery agents use inappropriate language or gestures toward female family members, this section carries severe penalties including immediate arrest.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 p-8 bg-red-900/30 border border-red-500/20 rounded-3xl">
                                <h4 className="text-xl font-black text-red-400 mb-2 uppercase">Police Refusing FIR?</h4>
                                <p className="text-sm italic font-bold text-red-200">Demand a written refusal. You can then escalate to the Superintendent of Police (SP) or file a private complaint with a Judicial Magistrate under Section 156(3) of the CrPC.</p>
                            </div>
                        </section>

                        <section id="collecting-evidence-harassment" className="scroll-mt-32 mb-20 mt-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-widest leading-[0.9] decoration-[#1F5EFF] underline underline-offset-8">
                                The Evidence Kit: Building Your Case
                            </h2>
                            <p className="mb-8 leading-relaxed text-lg font-medium italic opacity-70">
                                "The law demands proof. The agent's mistake is your leverage."
                            </p>
                            <p className="mb-8">
                                When a bank recovery agent threatens you, your first instinct should be to <strong>record</strong>. A silent victim is a target; a victim with evidence is a litigant.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 my-12">
                                <div className="p-10 bg-gray-50 rounded-[48px] border border-gray-100 shadow-sm">
                                    <h4 className="text-2xl font-black mb-4 uppercase italic leading-none text-[#1F5EFF]">Digital Evidence</h4>
                                    <ul className="space-y-3 text-sm font-bold opacity-80 uppercase tracking-tighter">
                                        <li>-- Call Recordings (With timestamps)</li>
                                        <li>-- Screenshots of threatening WhatsApps</li>
                                        <li>-- SMS dump showing frequency of calls</li>
                                        <li>-- CCTV footage of building visits</li>
                                    </ul>
                                </div>
                                <div className="p-10 bg-gray-50 rounded-[48px] border border-gray-100 shadow-sm">
                                    <h4 className="text-2xl font-black mb-4 uppercase italic leading-none text-[#1F5EFF]">Documentary Evidence</h4>
                                    <ul className="space-y-3 text-sm font-bold opacity-80 uppercase tracking-tighter">
                                        <li>-- Photocopy of the Agent's ID (If shown)</li>
                                        <li>-- Photos of fake 'Court' notices</li>
                                        <li>-- Logs of calls made outside 7AM-7PM</li>
                                        <li>-- Medical records (If stress induced)</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section id="legal-rights-of-defaulters" className="scroll-mt-32 mb-20 p-10 bg-blue-50 rounded-[40px] border-2 border-blue-100 relative shadow-sm overflow-hidden text-center">
                            <h2 className="text-3xl font-black text-blue-900 mb-6 uppercase tracking-wider italic">Your Unalienable Rights</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                                <div className="p-6 bg-white rounded-3xl border border-blue-100 shadow-sm">
                                    <h4 className="text-xs font-black text-blue-500 mb-2 uppercase tracking-widest leading-none">Right to Notice</h4>
                                    <p className="text-xs font-bold leading-relaxed opacity-80 uppercase uppercase">Lenders must provide 60-day notice for secured and sufficient notice for unsecured loans before recovery.</p>
                                </div>
                                <div className="p-6 bg-white rounded-3xl border border-blue-100 shadow-sm">
                                    <h4 className="text-xs font-black text-blue-500 mb-2 uppercase tracking-widest leading-none">Right to Privacy</h4>
                                    <p className="text-xs font-bold leading-relaxed opacity-80 uppercase uppercase">Your employer and neighbors are not part of your debt. Contacting them is a deficiency in service.</p>
                                </div>
                                <div className="p-6 bg-white rounded-3xl border border-blue-100 shadow-sm">
                                    <h4 className="text-xs font-black text-blue-500 mb-2 uppercase tracking-widest leading-none">Right to Settle</h4>
                                    <p className="text-xs font-bold leading-relaxed opacity-80 uppercase uppercase">You have the right to request a One-Time Settlement (OTS) and be treated politely during the process.</p>
                                </div>
                            </div>
                        </section>

                        <section id="grievance-ombudsman-protocol" className="scroll-mt-32 mb-20 mt-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 border-l-8 border-[#2E2E2E] pl-6 uppercase tracking-widest leading-none">
                                The Ombudsman Protocol: Reaching the RBI
                            </h2>
                            <p className="mb-8 leading-relaxed font-bold">
                                Banks are terrified of the <strong>Banking Ombudsman</strong>. It is a regulatory office that holds the CEO of the bank accountable for ground-level harassment.
                            </p>
                            <div className="bg-blue-900 p-10 rounded-[48px] text-white my-12 shadow-2xl">
                                <h4 className="text-2xl font-black mb-4 uppercase italic text-[#1F5EFF] leading-none">How to File</h4>
                                <p className="text-sm leading-relaxed opacity-80 font-bold mb-6">1. Log a formal complaint with the Bank's Principal Nodal Officer. <br /> 2. Wait 30 days. <br /> 3. If no resolution, visit <strong>cms.rbi.org.in</strong> and file Case. Attach your evidence recordings.</p>
                                <p className="text-xs font-black uppercase tracking-[0.2em] font-bold italic text-blue-400">The mere threat of an Ombudsman filing often forces banks to pull back their recovery agents and offer a settlement.</p>
                            </div>
                        </section>

                        <section id="harassment-at-workplace" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-widest decoration-[#1F5EFF] underline underline-offset-8">
                                Workplace Shield: Protecting Your Career
                            </h2>
                            <p className="mb-8 leading-relaxed">
                                A common tactic is threatening to visit your office to "get you fired". <strong>This is explicitly banned by the RBI.</strong>
                            </p>
                            <p className="mb-8 font-medium">
                                If an agent shows up at your office, do not panic. Call your office security and the police. Document the trespass. The Supreme Court has ruled that bank recovery should not interfere with a person's livelihood. You can file a civil suit for damages for "Loss of Reputation" against the bank and the agency.
                            </p>
                        </section>

                        <section id="legal-notice-against-bank" className="scroll-mt-32 mb-20 p-12 bg-[#1F5EFF] rounded-[56px] text-white shadow-2xl relative">
                            <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tighter italic leading-none">Go Offensive: The Injunction Suit</h2>
                            <p className="text-xl leading-relaxed opacity-90 font-medium mb-8">
                                Why wait for their move? You can file a <strong>Civil Suit for Permanent Injunction</strong> in your local court against the Bank and the Recovery Agency.
                            </p>
                            <p className="mb-0 text-sm font-black uppercase tracking-[0.2em] font-bold italic">The court can pass an order restraining agents from visiting your house or office, forcing all future communication to happen officially through advocates.</p>
                        </section>

                        <section id="summary-victories" className="scroll-mt-32 mb-20 mt-20">
                            <ReviewSnippets
                                title="Harassment Redressal Victories"
                                reviews={[
                                    {
                                        name: "Deepak Chawla",
                                        loc: "PUNE",
                                        loan: "Personal Loan Default",
                                        res: "FIR filed, Bank apologized",
                                        story: "The recovery agent threatened my 70-year-old mother. We recorded the call and filed an FIR under IPC 506. The bank's regional manager personally visited our house to apologize and settled the loan for 20% of the dues."
                                    },
                                    {
                                        name: "Sneha Reddy",
                                        loc: "BENGALURU",
                                        loan: "Unpaid Credit Card",
                                        res: "Ombudsman Penalty: 50k",
                                        story: "An agent called me at 11:30 PM. I filed an Ombudsman complaint with the call log evidence. The RBI penalized the bank ₹50,000, which was adjusted against my outstanding principal."
                                    },
                                    {
                                        name: "Rajesh Khanna",
                                        loc: "DELHI",
                                        loan: "Small NBFC Loan",
                                        res: "Cyber Crime Complaint",
                                        story: "They created a WhatsApp group with my contacts. We filed a complaint on the National Cyber Crime Portal. The agency was blacklisted, and my loan was closed as 'Settled' with zero payment."
                                    },
                                    {
                                        name: "Vikas Mehra",
                                        loc: "KOLKATA",
                                        loan: "Multiple Micro-loans",
                                        res: "Injunction Suit Won",
                                        story: "Agents were visiting my shop daily. We filed an Injunction suit. The court ordered that no agent can come within 500 meters of my shop. All harassment stopped overnight."
                                    }
                                ]}
                            />
                        </section>

                        <section id="faqs" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 uppercase tracking-widest leading-none">Recovery Harassment FAQs</h2>
                            <div className="space-y-4 not-prose">
                                {jsonLd["@graph"][4]["mainEntity"]?.map((faq: any, i: number) => (
                                    <details key={i} className="group bg-white border border-[#DEDEDE] rounded-xl overflow-hidden hover:shadow-md transition-all border-b-4 border-b-[#1F5EFF]/20 shadow-sm">
                                        <summary className="flex justify-between items-center p-5 cursor-pointer font-black text-[#2E2E2E] list-none bg-gray-50 group-open:bg-white transition-colors">
                                            <span className="text-lg">{i + 1}. {faq.name}</span>
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

                        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
                            <p className="text-gray-400 text-sm italic font-black uppercase tracking-tighter leading-relaxed uppercase">
                                Disclaimer: SettleLoans provides advisory services for debt management. Harassment laws are subject to local police jurisdictions. If you feel immediate physical danger, call national emergency number 100 or 112 immediately.
                            </p>
                        </div>

                        {/* Mobile CTA */}
                        <div className="lg:hidden mt-16 mb-8">
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#1F5EFF]/20">
                                <div className="bg-[#1F5EFF] p-6 text-center text-white">
                                    <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter">Silence the Calls</h3>
                                    <p className="opacity-90 text-sm italic font-medium">Protect your mental health and family's dignity. Let our experts help you navigate the legal path to a final settlement.</p>
                                </div>
                                <div className="p-8 text-center text-[#DEDEDE]">
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-xl hover:scale-105 transition-all shadow-lg text-lg uppercase tracking-tight">
                                        Stop the Harassment
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Right Column: CTA & Related Pages */}
                    <aside className="hidden lg:block w-1/5 shrink-0 px-4 mt-[-40px]">
                        <div className="sticky top-24 space-y-12 text-center">

                            {/* CTA Card */}
                            <div className="bg-[#2E2E2E] rounded-[32px] shadow-2xl overflow-hidden border border-[#DEDEDE]/10 group">
                                <div className="bg-[#1F5EFF] p-6 text-white text-center">
                                    <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter leading-none">Harassment<br />Protection</h3>
                                    <p className="opacity-80 text-[10px] font-black uppercase tracking-[0.2em]">Strategy Intake</p>
                                </div>
                                <div className="p-8">
                                    <p className="text-[#DEDEDE] text-sm mb-8 leading-relaxed font-bold italic opacity-70 group-hover:opacity-100 transition-opacity">
                                        End the cycle of fear today. We help you audit agent violations, draft legal replies, and move towards a respectful debt resolution.
                                    </p>
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-4 rounded-xl hover:scale-105 transition-all shadow-lg text-sm uppercase tracking-widest">
                                        Resolve My Debt
                                    </Link>
                                    <p className="mt-4 text-[10px] text-gray-400 font-black uppercase tracking-tighter text-center">RBI Compliance Experts. 24/7 Aid.</p>
                                </div>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm text-left">
                                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#1F5EFF] mb-6 border-b border-blue-50 pb-4">Defense Hub</h4>
                                <nav className="space-y-4">
                                    <Link href="/bank-recovery-case-in-court" className="block text-[11px] font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic uppercase tracking-tighter">Bank Court Cases</Link>
                                    <Link href="/bank-arbitration-notice-loan" className="block text-[11px] font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic uppercase tracking-tighter">Arbitration Defense</Link>
                                    <Link href="/can-bank-file-case-for-personal-loan" className="block text-[11px] font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic uppercase tracking-tighter">Personal Loan Litigation</Link>
                                    <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="block text-[11px] font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic uppercase tracking-tighter">Legal Notice Guide</Link>
                                    <Link href="/rbi-new-recovery-guidelines-july-2026" className="block text-[11px] font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic uppercase tracking-tighter">New RBI Rules</Link>
                                </nav>
                            </div>
                        </div>
                    </aside>

                </div>
            </main>
        </div>
    );
}
