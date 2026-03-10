import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import ReviewSnippets from "@/components/ReviewSnippets";

export const metadata: Metadata = {
    title: "Can Recovery Agents Come to Your Home? | Legal Rights in India",
    description: "Discover the legal truth about recovery agent home visits. Learn about RBI guidelines, authorization requirements, and your right to refuse entry under IPC Section 441.",
    alternates: {
        canonical: "https://settleloans.in/can-recovery-agents-come-home",
    },
};

export default function CanRecoveryAgentsComeHomePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/can-recovery-agents-come-home#webpage",
                "url": "https://settleloans.in/can-recovery-agents-come-home",
                "name": "Can Recovery Agents Legally Visit Your Home in India?",
                "description": "A comprehensive legal guide on the boundaries of debt recovery home visits, including RBI mandates and borrower protections.",
                "breadcrumb": { "@id": "https://settleloans.in/can-recovery-agents-come-home#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/can-recovery-agents-come-home#breadcrumb",
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
                        "name": "Recovery Agent Home Visits",
                        "item": "https://settleloans.in/can-recovery-agents-come-home"
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/can-recovery-agents-come-home#article",
                "headline": "Can Recovery Agents Come to Your House? Knowing Your Legal Standing",
                "description": "Breaking down the laws of trespass, RBI circulars, and the specific hours when recovery agents can and cannot visit your residence.",
                "author": {
                    "@type": "Organization",
                    "name": "SettleLoans Legal Research"
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
                "mainEntityOfPage": { "@id": "https://settleloans.in/can-recovery-agents-come-home#webpage" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/can-recovery-agents-come-home#product",
                "name": "Home Visit Defense Support",
                "description": "Expert legal assistance in stopping illegal home visits and handling aggressive debt collectors at your doorstep.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.98",
                    "reviewCount": "5400"
                }
            },
            {
                "@type": "FAQPage",
                "@id": "https://settleloans.in/can-recovery-agents-come-home#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Is it legal for recovery agents to visit my home in India?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, it is legal for recovery agents to visit your home to discuss debt recovery, but they must follow strict RBI guidelines. This includes carrying a valid ID, an authorization letter from the bank, and visiting only between 7 AM and 7 PM."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I refuse to let a recovery agent into my house?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely. A recovery agent has no legal authority to enter your home without your explicit permission. If they enter by force or refuse to leave when asked, it constitutes 'criminal trespass' under IPC Section 441."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do agents need to give notice before coming home?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. RBI guidelines state that a bank must send a written notice to the borrower before a recovery agent is assigned and before any home visits are conducted."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What should I do if a recovery agent visits at night?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Any visit after 7 PM (or before 7 AM) is a violation of RBI rules. Do not open the door. Record the interaction if possible and file an immediate complaint with the bank's Nodal Officer and the RBI CMS portal."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How can I verify if an agent is genuine?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Always demand to see their identity card issued by the bank and a formal authorization letter specifically mentioning your name and loan account number. Genuine agents will always comply; fake ones will hesitate."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can a recovery agent seize my belongings at home?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. Recovery agents have zero authority to seize any movable or immovable property during a home visit. Property attachment can only be done through a court-ordered process involving a bailiff or authorized bank officer under SARFAESI (for secured loans)."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can agents visit me on a Sunday or public holiday?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "While there is no explicit ban on Sundays, the 2026 RBI guidelines suggest agents should avoid visits during sensitive personal events, bereavements, or major festivals to respect the borrower's privacy."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What if an agent uses abusive language at my doorstep?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Abusive language is strictly prohibited. If it happens, call the local police immediately. This is a violation of the RBI Fair Practices Code and can lead to the bank being penalized and your debt potentially being settled or waived."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I record a recovery agent during a home visit?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, you have every right to record interactions on your property for self-protection. This evidence is crucial if you decide to file a harassment complaint later."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I choose to meet the agent at a public place instead?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. As per RBI, the place of meeting can be decided by the borrower. You can inform the agent that you are not comfortable with a home visit and suggest meeting at a nearby cafe or the bank branch."
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
                            Home Protection Guide
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight uppercase">
                            Can Recovery Agents <br /> <span className="text-[#1F5EFF]">Come to Your Home?</span>
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
                            Know your rights before you open the door. Learn the strict RBI guidelines, the law of criminal trespass, and how to legally handle doorstep debt collection.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Get Immediate Protection
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
                                <li className="font-bold text-[#2E2E2E]" aria-current="page">Recovery Home Visits</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">

                    {/* Left Column: TOC */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative text-left">
                        <div className="sticky top-32">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#1F5EFF] mb-8 pb-4 border-b-2 border-blue-50">Visit Legalities</h3>
                            <TableOfContents
                                items={[
                                    { id: "legal-status-home-visits", title: "Legal Status Overview" },
                                    { id: "rbi-pre-visit-mandates", title: "Pre-Visit Mandates" },
                                    { id: "right-to-refuse-entry", title: "Refusing Entry" },
                                    { id: "official-visit-timings", title: "Permitted Timings" },
                                    { id: "credential-verification-list", title: "Credential Verification" },
                                    { id: "ipc-441-criminal-trespass", title: "Trespass Laws (IPC 441)" },
                                    { id: "seizure-and-physical-conduct", title: "Banned Conduct" },
                                    { id: "recording-home-visits", title: "Recording Interactions" },
                                    { id: "success-stories-home-defense", title: "Member Success" },
                                    { id: "technical-faqs-visits", title: "Technical FAQs" }
                                ]}
                            />
                        </div>
                    </aside>

                    {/* Middle Column: Content */}
                    <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[#2E2E2E] text-left">

                        <section id="legal-status-home-visits" className="scroll-mt-32 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                            <h2 className="text-4xl md:text-5xl font-black text-[#2E2E2E] mb-10 leading-[1.1] uppercase tracking-tighter decoration-[#1F5EFF] underline underline-offset-8">
                                Doorstep Debt Recovery: <span className="text-[#1F5EFF]">What the Law Says</span>
                            </h2>
                            <p className="text-xl font-medium mb-8 leading-relaxed">
                                The sanctity of your home is a fundamental right. When a bank recovery agent stands at your door, they are entering a private space where the laws of the land significantly outweigh the terms of a loan agreement.
                            </p>
                            <p className="mb-8">
                                One of the most prevalent myths in the Indian debt landscape is that "if you owe money, you have no privacy." This misinformation is weaponized by recovery agencies to intimidate borrowers. However, the Reserve Bank of India (RBI) and the Indian Penal Code (IPC) provide a robust shield. While agents have a technical "right to request" a meeting at your home, they have zero "right to demand" entry.
                            </p>
                            <div className="bg-gray-900 p-12 rounded-[64px] text-white my-12 shadow-2xl relative border-t-8 border-[#1F5EFF]">
                                <h3 className="text-2xl font-black mb-6 uppercase tracking-widest text-[#1F5EFF] italic">The Threshold of Legality</h3>
                                <p className="text-lg opacity-80 leading-relaxed font-bold italic uppercase tracking-tighter">
                                    "A loan default is a civil dispute. Forcible entry into a home is a criminal act. The two must never be confused."
                                </p>
                            </div>
                        </section>

                        <section id="rbi-pre-visit-mandates" className="scroll-mt-32 mb-20 p-12 bg-blue-50 border border-blue-100 rounded-[56px] shadow-sm relative overflow-hidden">
                            <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-8 border-l-8 border-[#1F5EFF] pl-6 uppercase tracking-tighter leading-none italic">
                                Pre-Visit Mandates: The Paper Trail
                            </h2>
                            <p className="mb-8 leading-relaxed font-medium">
                                A recovery agent cannot simply show up at your house on a whim. The RBI mandates a specific sequence of events before a doorstep visit can even be considered legal.
                            </p>
                            <div className="space-y-6">
                                <div className="p-8 bg-white/50 border-l-8 border-blue-500 rounded-2xl">
                                    <h4 className="text-xl font-black text-blue-900 mb-2 uppercase">The Written Notice</h4>
                                    <p className="text-sm font-bold opacity-70 uppercase tracking-tighter">The bank must provide you with a written notice stating that the case has been handed over to a recovery agency. This notice must contain the agency's name and contact details.</p>
                                </div>
                                <div className="p-8 bg-white/50 border-l-8 border-blue-500 rounded-2xl">
                                    <h4 className="text-xl font-black text-blue-900 mb-2 uppercase">The Agent Disclosure</h4>
                                    <p className="text-sm font-bold opacity-70 uppercase tracking-tighter">The name of the specific agent visiting must be disclosed or available upon request. Anonymous visits are a direct violation of regulatory protocols.</p>
                                </div>
                                <div className="p-8 bg-white/50 border-l-8 border-blue-500 rounded-2xl">
                                    <h4 className="text-xl font-black text-blue-900 mb-2 uppercase">The Place of Meeting</h4>
                                    <p className="text-sm font-bold opacity-70 uppercase tracking-tighter italic">"RBI clearly states that the borrower has a right to specify the place and time of the meeting." If you tell a bank you'd rather meet at their branch, the agent has no legal ground to visit your home.</p>
                                </div>
                            </div>
                        </section>

                        <section id="right-to-refuse-entry" className="scroll-mt-32 mb-20 mt-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-widest border-b-8 border-gray-100 pb-4">
                                Refusing Entry: Your Door is Your Border
                            </h2>
                            <p className="mb-8 leading-relaxed font-medium italic opacity-70">
                                You are not obligated to open your door to a recovery agent. It is a choice, not a mandate.
                            </p>
                            <p className="mb-8">
                                Many agents use a psychological tactic known as "presence-based pressure." They stand at the door, talk loudly so neighbors can hear, and try to shame you into letting them inside. Most borrowers cave in to avoid embarrassment. However, once you let them in, their leverage increases.
                            </p>
                            <div className="bg-[#1F5EFF] p-12 rounded-[64px] text-white shadow-3xl text-center relative overflow-hidden my-12">
                                <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter italic leading-none">The 'Stop at the Gate' Protocol</h4>
                                <p className="text-sm font-bold opacity-90 leading-relaxed max-w-2xl mx-auto uppercase tracking-widest italic border-t border-white/20 pt-6">
                                    If an agent visits, you can choose to speak to them through the gate or a window. State clearly: "I will not be allowing you inside. If you have papers to serve, please leave them in the mailbox or send them by registered post."
                                </p>
                            </div>
                        </section>

                        <section id="official-visit-timings" className="scroll-mt-32 mb-20 p-12 bg-gray-50 rounded-[48px] border border-gray-100 shadow-inner relative mt-20 overflow-hidden">
                            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                                <svg className="w-48 h-48 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg>
                            </div>
                            <h2 className="text-3xl font-black text-[#2E2E2E] mb-8 border-l-8 border-[#1F5EFF] pl-6 uppercase tracking-tighter">Official Visit Timings</h2>
                            <p className="text-xl font-bold mb-8 text-[#1F5EFF] italic decoration-gray-200 underline underline-offset-4">"The RBI defines late-night visits as a form of mental cruelty."</p>
                            <div className="grid md:grid-cols-2 gap-8 relative z-10">
                                <div className="p-8 bg-white border border-gray-200 rounded-3xl shadow-sm text-center">
                                    <h4 className="text-[#1F5EFF] text-4xl font-black mb-2 italic">07:00</h4>
                                    <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Earliest Permitted Start</p>
                                </div>
                                <div className="p-8 bg-white border border-gray-200 rounded-3xl shadow-sm text-center">
                                    <h4 className="text-[#1F5EFF] text-4xl font-black mb-2 italic">19:00</h4>
                                    <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Strict Universal Cut-off</p>
                                </div>
                            </div>
                            <p className="mt-8 text-sm leading-relaxed font-bold opacity-60 uppercase tracking-tighter border-t border-gray-200 pt-6">
                                *Note: July 2026 guidelines further restrict visits to between 8 AM and 7 PM and strictly prohibit home visits on major festivals or during sensitive family events.*
                            </p>
                        </section>

                        <section id="credential-verification-list" className="scroll-mt-32 mb-20 mt-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-widest border-b-8 border-gray-100 pb-4 leading-none">
                                Credential Verification: The Filter
                            </h2>
                            <p className="mb-8 leading-relaxed font-medium">
                                Treat every unverified agent like a potential fraudster. The RBI mandates three specific pieces of documentation for every home visit.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="p-8 bg-[#2E2E2E] text-white rounded-3xl border-b-4 border-[#1F5EFF] hover:scale-105 transition-transform cursor-pointer group">
                                    <p className="text-[#1F5EFF] font-black text-xs mb-4 uppercase tracking-[0.2em] group-hover:tracking-[0.4em] transition-all">Doc 01</p>
                                    <h4 className="text-xl font-black mb-4 leading-none italic uppercase">Bank ID Card</h4>
                                    <p className="text-[10px] leading-relaxed opacity-60 font-bold uppercase">Must be a physical card issued by the Regulated Entity (RE), not just a photocopy.</p>
                                </div>
                                <div className="p-8 bg-[#2E2E2E] text-white rounded-3xl border-b-4 border-[#1F5EFF] hover:scale-105 transition-transform cursor-pointer group">
                                    <p className="text-[#1F5EFF] font-black text-xs mb-4 uppercase tracking-[0.2em] group-hover:tracking-[0.4em] transition-all">Doc 02</p>
                                    <h4 className="text-xl font-black mb-4 leading-none italic uppercase">Auth Letter</h4>
                                    <h5 className="text-[10px] leading-relaxed opacity-60 font-bold uppercase truncate">Specific to your Account</h5>
                                    <p className="text-[10px] leading-relaxed opacity-60 font-bold uppercase mt-2">A generic 'To whom it may concern' is insufficient. It must name YOU.</p>
                                </div>
                                <div className="p-8 bg-[#2E2E2E] text-white rounded-3xl border-b-4 border-[#1F5EFF] hover:scale-105 transition-transform cursor-pointer group">
                                    <p className="text-[#1F5EFF] font-black text-xs mb-4 uppercase tracking-[0.2em] group-hover:tracking-[0.4em] transition-all">Doc 03</p>
                                    <h4 className="text-xl font-black mb-4 leading-none italic uppercase">Draft Notice</h4>
                                    <p className="text-[10px] leading-relaxed opacity-60 font-bold uppercase">A copy of the formal demand notice showing the outstanding principal amount.</p>
                                </div>
                            </div>
                        </section>

                        <section id="ipc-441-criminal-trespass" className="scroll-mt-32 mb-20 p-12 bg-white border-4 border-gray-900 rounded-[64px] shadow-2xl relative mt-20">
                            <div className="absolute top-0 left-0 bg-gray-900 text-white px-8 py-3 rounded-br-[32px] font-black uppercase text-xs tracking-widest italic">
                                Legalese: IPC Section 441
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 mt-6 uppercase tracking-tighter italic decoration-[#1F5EFF] underline underline-offset-8 leading-none">Criminal Trespass</h2>
                            <p className="text-xl leading-relaxed font-bold italic border-b border-gray-100 pb-8 mb-8 text-gray-800">
                                "Whoever enters into or upon property in the possession of another with intent to commit an offence or to intimidate, insult or annoy any person..."
                            </p>
                            <p className="mb-0 text-sm leading-relaxed font-medium">
                                If a recovery agent crosses your threshold without permission, or if they enter with permission but refuse to leave when asked, they are legally committing **Criminal Trespass**. This is a police matter, not a bank matter. You have the right to use reasonable force to evict a trespasser or call 112 for immediate police intervention.
                            </p>
                        </section>

                        <section id="seizure-and-physical-conduct" className="scroll-mt-32 mb-20 mt-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-widest border-b-8 border-gray-100 pb-4 italic">
                                Banned Conduct: The Red Lines
                            </h2>
                            <p className="mb-8 leading-relaxed font-medium italic opacity-70 border-l-4 border-[#1F5EFF] pl-6">
                                The 2026 RBI guidelines provide an exhaustive list of actions that invalidate a recovery attempt and expose the bank to penalties.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-6 bg-red-50 border border-red-100 rounded-3xl flex items-center gap-4 group hover:bg-red-100 transition-colors">
                                    <div className="w-8 h-8 rounded-full bg-red-500 text-white flex shrink-0 items-center justify-center font-black">!</div>
                                    <span className="text-[10px] font-black uppercase tracking-tighter leading-relaxed">Attempting to seize TVs, phones, or vehicles during a visit.</span>
                                </div>
                                <div className="p-6 bg-red-50 border border-red-100 rounded-3xl flex items-center gap-4 group hover:bg-red-100 transition-colors">
                                    <div className="w-8 h-8 rounded-full bg-red-500 text-white flex shrink-0 items-center justify-center font-black">!</div>
                                    <span className="text-[10px] font-black uppercase tracking-tighter leading-relaxed">Bringing more than two people for a home visit (Muscular Recovery).</span>
                                </div>
                                <div className="p-6 bg-red-50 border border-red-100 rounded-3xl flex items-center gap-4 group hover:bg-red-100 transition-colors">
                                    <div className="w-8 h-8 rounded-full bg-red-500 text-white flex shrink-0 items-center justify-center font-black">!</div>
                                    <span className="text-[10px] font-black uppercase tracking-tighter leading-relaxed">Talking to neighbors about your debt or 'looking for directions'.</span>
                                </div>
                                <div className="p-6 bg-red-50 border border-red-100 rounded-3xl flex items-center gap-4 group hover:bg-red-100 transition-colors">
                                    <div className="w-8 h-8 rounded-full bg-red-500 text-white flex shrink-0 items-center justify-center font-black">!</div>
                                    <span className="text-[10px] font-black uppercase tracking-tighter leading-relaxed">Threatening with 'Immediate Jail' (Only courts can order jail).</span>
                                </div>
                            </div>
                        </section>

                        <section id="recording-home-visits" className="scroll-mt-32 mb-20 p-12 bg-[#2E2E2E] rounded-[64px] text-white shadow-3xl relative mt-20 overflow-hidden">
                            <h2 className="text-3xl md:text-4xl font-black mb-8 border-l-8 border-[#1F5EFF] pl-6 uppercase tracking-widest italic decoration-gray-500 underline underline-offset-8">
                                The Power of the Lens
                            </h2>
                            <p className="mb-8 leading-relaxed font-bold opacity-80 italic italic">
                                In India, recording an interaction for self-defense is legally admissible and highly effective in silencing bullies.
                            </p>
                            <div className="p-10 bg-white/5 border border-white/10 rounded-[48px]">
                                <h4 className="text-xl font-black mb-6 uppercase text-[#1F5EFF]">Recording Strategy</h4>
                                <ul className="space-y-4 text-sm font-bold italic opacity-70 uppercase tracking-tighter leading-relaxed">
                                    <li className="flex gap-4"><span className="text-[#1F5EFF]">●</span> Inform the agent: "This interaction is being recorded for security and audit purposes."</li>
                                    <li className="flex gap-4"><span className="text-[#1F5EFF]">●</span> Capture their ID card clearly on camera.</li>
                                    <li className="flex gap-4"><span className="text-[#1F5EFF]">●</span> If they refuse to be recorded, ask them to leave the property immediately.</li>
                                    <li className="flex gap-4"><span className="text-[#1F5EFF]">●</span> Most aggressive agents turn polite the moment a camera is pointed at them.</li>
                                </ul>
                            </div>
                        </section>

                        <section id="success-stories-home-defense" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center uppercase">Real Stories of Home Protection</h2>
                            <div className="grid md:grid-cols-2 gap-6 not-prose">
                                {[
                                    {
                                        name: "Rahul V.",
                                        loc: "New Delhi",
                                        type: "Aggressive Home Visit",
                                        outcome: "Apology & Waiver",
                                        story: "Two agents tried to push their way into my living room at 7:30 PM. I recorded them, cited IPC 441, and called the PCR. The police came and warned them. The next day, the bank branch manager called to apologize and offered a one-time settlement with a 65% discount."
                                    },
                                    {
                                        name: "Priya M.",
                                        loc: "Bengaluru",
                                        type: "Identity Verification Win",
                                        outcome: "Fraud Agency Exposed",
                                        story: "An agent visited and refused to show a bank ID. I used the credentials checklist from SettleLoans. It turned out he was from a fake sub-agency not even empanelled by the bank. I filed an RBI CMS complaint, and the bank had to freeze my interest accumulation for 6 months."
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

                        <section id="technical-faqs-visits" className="scroll-mt-32 mb-12 mt-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-widest decoration-[#1F5EFF] underline underline-offset-8 leading-none italic">Home Visit Technical FAQs</h2>
                            <div className="space-y-4 not-prose">
                                {jsonLd["@graph"][4]["mainEntity"]?.map((faq: any, i: number) => (
                                    <details key={i} className="group bg-white border border-[#DEDEDE] rounded-xl overflow-hidden hover:shadow-md transition-all border-b-4 border-b-[#1F5EFF]/20">
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
                            <p className="text-gray-400 text-[10px] italic font-black uppercase tracking-[0.3em] leading-relaxed max-w-2xl mx-auto">
                                Disclaimer: This guide is intended for educational purposes regarding legal rights and regulatory guidelines in India. SettleLoans is NOT a legal firm or government body. For specific legal advice, consult an advocate. For official guidelines, visit rbi.org.in.
                            </p>
                        </div>

                        {/* Mobile CTA */}
                        <div className="lg:hidden mt-16 mb-8">
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#1F5EFF]/20">
                                <div className="bg-[#1F5EFF] p-6 text-center text-white">
                                    <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter leading-none">Stop the Door-Knocking</h3>
                                    <p className="opacity-90 text-sm font-bold uppercase tracking-wider italic">Illegal home visits are a breach of privacy. Let's help you file an injunction and stop the harassment today.</p>
                                </div>
                                <div className="p-8 text-center text-[#DEDEDE]">
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-xl hover:scale-105 transition-all shadow-lg text-lg uppercase tracking-tighter italic">
                                        Help Me Now
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
                                    <h3 className="text-lg font-black text-white uppercase tracking-tighter">Doorstep Defense</h3>
                                </div>
                                <div className="p-6 text-center">
                                    <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold italic uppercase">
                                        Is an agent harassing your family at home? Our legal team specializes in drafting "Cease and Desist" notices specifically to stop doorstep visits.
                                    </p>
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg text-base uppercase tracking-widest italic decoration-white underline-offset-4 decoration-2 underline">
                                        Lock the Gate
                                    </Link>
                                    <p className="mt-4 text-[10px] text-[#DEDEDE]/60 uppercase tracking-widest font-black italic">IPC 441 Specialists. Non-Intrusive Settlement.</p>
                                </div>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm">
                                <h4 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2 italic leading-none">Protection Hub</h4>
                                <nav className="space-y-4">
                                    <Link href="/recovery-agents-calling-family-members-law" className="group flex items-center text-[11px] font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic uppercase tracking-tighter">
                                        <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                        Family Privacy Law
                                    </Link>
                                    <Link href="/bank-recovery-harassment-complaint" className="group flex items-center text-[11px] font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic uppercase tracking-tighter">
                                        <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                        File a Complaint
                                    </Link>
                                    <Link href="/rbi-rules-for-recovery-agents" className="group flex items-center text-[11px] font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic uppercase tracking-tighter">
                                        <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                        RBI Code of Conduct
                                    </Link>
                                    <Link href="/recovery-agents-threatening-me-what-to-do" className="group flex items-center text-[11px] font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic uppercase tracking-tighter">
                                        <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                        Fighting Threats
                                    </Link>
                                    <Link href="/legal-action-for-credit-card-default" className="group flex items-center text-[11px] font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic uppercase tracking-tighter">
                                        <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                        Credit Card Laws
                                    </Link>
                                </nav>
                                <div className="mt-8 pt-4 border-t border-gray-50 italic">
                                    <p className="text-[9px] font-black uppercase text-[#1F5EFF] tracking-widest">"A Home is Not a recovery Office."</p>
                                </div>
                            </div>
                        </div>
                    </aside>

                </div>
            </main>
        </div>
    );
}
