import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import ReviewSnippets from "@/components/ReviewSnippets";

export const metadata: Metadata = {
    title: "Bank Recovery Harassment Complaint | How to File & Win India",
    description: "Are you facing harassment from bank recovery agents? Learn exactly how to file a complaint with the RBI Ombudsman, file an FIR, and seek compensation in consumer court.",
    alternates: {
        canonical: "https://settleloans.in/bank-recovery-harassment-complaint",
    },
};

export default function RecoveryHarassmentComplaintPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/bank-recovery-harassment-complaint#webpage",
                "url": "https://settleloans.in/bank-recovery-harassment-complaint",
                "name": "How to File a Bank Recovery Harassment Complaint in India",
                "description": "Step-by-step procedure to lodge complaints against unethical bank recovery agents using RBI portals and legal channels.",
                "breadcrumb": { "@id": "https://settleloans.in/bank-recovery-harassment-complaint#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/bank-recovery-harassment-complaint#breadcrumb",
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
                        "name": "Recovery Complaint Guide",
                        "item": "https://settleloans.in/bank-recovery-harassment-complaint"
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/bank-recovery-harassment-complaint#article",
                "headline": "Filing a Complaint Against Bank Recovery Agents: The Definitive Protocol",
                "description": "Explaining the hierarchy of complaints from Bank Nodal Officers to the RBI Integrated Ombudsman and Police FIRs.",
                "author": {
                    "@type": "Organization",
                    "name": "SettleLoans Legal Advocacy"
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
                "mainEntityOfPage": { "@id": "https://settleloans.in/bank-recovery-harassment-complaint#webpage" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/bank-recovery-harassment-complaint#product",
                "name": "Legal Harassment Redressal Support",
                "description": "Expert assistance in drafting legal notices, filing Ombudsman complaints, and stopping illegal debt recovery tactics.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.99",
                    "reviewCount": "6200"
                }
            },
            {
                "@type": "FAQPage",
                "@id": "https://settleloans.in/bank-recovery-harassment-complaint#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is the first step in filing a recovery harassment complaint?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The first step is to file a formal written complaint with the bank's own internal Grievance Redressal Officer (Nodal Officer). You must give them 30 days to resolve the issue before escalating."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do I file a complaint on the RBI CMS portal?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Go to cms.rbi.org.in, select 'File a Complaint', and follow the prompts. You will need to upload evidence like call logs, recordings, and your initial complaint to the bank."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I file an FIR for recovery agent harassment?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. If an agent uses physical force, enters your property without permission, or threatens your life/reputation, you can file an FIR under relevant IPC sections like 503, 506, and 441."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What evidence do I need for a harassment complaint?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Essential evidence includes call recordings, screenshots of abusive messages (WhatsApp/SMS), photos of agents visiting your premises, and logs of calls made outside permitted hours (7 AM - 7 PM)."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is there a fee for filing a complaint with the RBI Ombudsman?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. The RBI Integrated Ombudsman Scheme is a completely free service provided by the regulator to protect bank customers."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can a consumer court help with recovery agent bullying?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. You can file a case in the Consumer Forum for 'deficiency in service'. Courts often award compensation for mental agony caused by illegal recovery tactics."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How long does the Ombudsman take to resolve a complaint?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Typically, the process takes 2 to 4 months. The Ombudsman will conduct an investigation and may pass an order for compensation or corrective action by the bank."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What if the bank doesn't have a Nodal Officer?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "All RBI-regulated entities (Banks/NBFCs) are legally required to have a Nodal Officer. If you cannot find one, you can mention this in your direct complaint to the RBI."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can an agent be arrested for calling my relatives?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "While arrest is rare for just calls, it is a serious violation of privacy. Persistent harassment of third parties can be reported as criminal stalking or intimidation, leading to police action."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the maximum compensation the Ombudsman can award?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Under the current Integrated Ombudsman Scheme, the Ombudsman can award compensation up to ₹20 lakhs for losses and up to ₹1 lakh for mental harassment/loss of time."
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
                            Redressal Protocol
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight uppercase">
                            Recovery Harassment <br /> <span className="text-[#1F5EFF]">Complaint Guide</span>
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
                            Don't tolerate bullying. Learn the precise steps to hold banks accountable. From internal grievance cells to the RBI Ombudsman, we show you how to fight back and win.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Start My Complaint Process
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
                                <li className="font-bold text-[#2E2E2E]" aria-current="page">Recovery Complaint Guide</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">

                    {/* Left Column: TOC */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-32">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#1F5EFF] mb-8 pb-4 border-b-2 border-blue-50">Complaint Roadmap</h3>
                            <TableOfContents
                                items={[
                                    { id: "complaint-starting-point", title: "Where to Begin" },
                                    { id: "nodal-officer-procedure", title: "Nodal Officer Step" },
                                    { id: "rbi-ombudsman-cms-portal", title: "RBI Ombudsman CMS" },
                                    { id: "policing-the-agents-fir", title: "Police & FIR Guide" },
                                    { id: "consumer-court-deficiency", title: "Consumer Court" },
                                    { id: "evidential-requirements", title: "Evidence Checklist" },
                                    { id: "legal-notice-to-bank", title: "Drafting Notice" },
                                    { id: "compensation-and-damages", title: "Seeking Damages" },
                                    { id: "success-stories", title: "Victory Logs" },
                                    { id: "comprehensive-faqs", title: "Detailed FAQs" }
                                ]}
                            />
                        </div>
                    </aside>

                    {/* Middle Column: Content */}
                    <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[#2E2E2E]">

                        <section id="complaint-starting-point" className="scroll-mt-32 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                            <h2 className="text-4xl md:text-5xl font-black text-[#2E2E2E] mb-10 leading-[1.1] uppercase tracking-tighter">
                                Facing Abuse? <span className="text-[#1F5EFF]">Here is Your Redressal Map</span>
                            </h2>
                            <p className="text-xl font-medium mb-8 leading-relaxed">
                                When a recovery agent crosses the line from communication to coercion, they are no longer just collecting a debt; they are violating the law of the land. A <strong>bank recovery harassment complaint</strong> is not a sign of weakness; it is a vital step in maintaining your legal standing and sanity.
                            </p>
                            <p className="mb-8">
                                Most borrowers suffer in silence because they believe that "defaulting" makes them a criminal who has no rights. This is fundamentally untrue. The RBI and the Supreme Court of India have established a multi-layered redressal mechanism designed to protect you. This guide details every official channel available to you, from the bank's internal boardrooms to the regulatory halls of the RBI.
                            </p>
                            <div className="bg-gray-900 p-10 rounded-[40px] text-white my-12 shadow-2xl relative border-t-8 border-[#1F5EFF]">
                                <h3 className="text-2xl font-black mb-6 uppercase tracking-widest text-[#1F5EFF]">The Silent Power of Documentation</h3>
                                <p className="text-lg opacity-80 leading-relaxed font-medium">
                                    Before you send a single email, you must have your evidence ready. A complaint without evidence is just an allegation; a complaint with recordings and screenshots is a legal mandate for action.
                                </p>
                            </div>
                        </section>

                        <section id="nodal-officer-procedure" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-widest border-b-8 border-gray-100 pb-4">
                                Step 1: The Principal Nodal Officer (PNO)
                            </h2>
                            <p className="mb-8 leading-relaxed font-medium">
                                You cannot jump to the RBI without first giving the bank a chance to fix the behavior of its agents. This is a mandatory prerequisite.
                            </p>
                            <div className="space-y-6">
                                <div className="p-8 bg-blue-50 border border-blue-100 rounded-[32px] hover:shadow-md transition-all">
                                    <h4 className="text-xl font-black text-[#1F5EFF] mb-2 uppercase italic leading-none">The Formal Email</h4>
                                    <p className="text-sm leading-relaxed font-bold opacity-70">Send a detailed email to the PNO of your bank. Use the subject line: 'URGENT: Harassment by Recovery Agents - Loan A/C [Number]'. Be professional, factual, and mention the specific RBI guidelines violated.</p>
                                </div>
                                <div className="p-8 bg-blue-50 border border-blue-100 rounded-[32px] hover:shadow-md transition-all">
                                    <h4 className="text-xl font-black text-[#1F5EFF] mb-2 uppercase italic leading-none">The 30-Day Clock</h4>
                                    <p className="text-sm leading-relaxed font-bold opacity-70">The law gives the bank 30 days to resolve the matter. If they ignore you or send a generic 'we have noted your concern' email, your path to the Ombudsman is officially cleared.</p>
                                </div>
                                <div className="p-8 bg-[#1F5EFF] text-white rounded-[32px] shadow-lg">
                                    <h4 className="text-xl font-black mb-2 uppercase italic leading-none">The Paper Trail</h4>
                                    <p className="text-sm leading-relaxed font-medium opacity-90">Always keep a copy of the sent email and the 'auto-reply' or acknowledgement number. This is your 'Ticket to Justice' in the later stages.</p>
                                </div>
                            </div>
                        </section>

                        <section id="rbi-ombudsman-cms-portal" className="scroll-mt-32 mb-20 p-12 bg-white border-4 border-gray-100 rounded-[48px] shadow-inner relative mt-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 border-l-8 border-[#1F5EFF] pl-6 uppercase tracking-tighter italic">
                                The CMS Portal: Your Direct Line to RBI
                            </h2>
                            <p className="mb-8 leading-relaxed">
                                The <strong>RBI Complaint Management System (CMS)</strong> is a digital platform where you can lodge complaints against any regulated entity. The RBI Ombudsman acts as a referee who ensures the bank doesn't play dirty.
                            </p>
                            <div className="bg-blue-900 p-10 rounded-[40px] text-white shadow-2xl mb-12 relative overflow-hidden">
                                <h4 className="text-2xl font-black mb-6 uppercase tracking-widest text-[#1F5EFF]">How to File on CMS (Step-by-Step)</h4>
                                <ol className="space-y-6 text-sm font-bold list-decimal pl-6">
                                    <li className="pl-4">Visit <strong>cms.rbi.org.in</strong> and select the 'File a Complaint' option.</li>
                                    <li className="pl-4">Identify the bank/NBFC and ensure you have their initial response (or proof of wait of 30 days).</li>
                                    <li className="pl-4">Select 'Recovery/Harassment' as the category of complaint.</li>
                                    <li className="pl-4">Upload your 'Evidence Bundle' (Zip file of recordings and screenshots).</li>
                                    <li className="pl-4">Specify the compensation you are seeking for mental harassment (up to ₹1 Lakh).</li>
                                </ol>
                            </div>
                            <p className="mb-0 leading-relaxed font-bold text-[#1F5EFF] uppercase tracking-widest text-center italic">"The Ombudsman has the power to stop the bank's recovery process until your complaint is decided."</p>
                        </section>

                        <section id="policing-the-agents-fir" className="scroll-mt-32 mb-20 mt-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-widest border-b-8 border-gray-100 pb-4">
                                When It Becomes Criminal: The Police FIR
                            </h2>
                            <p className="mb-8 leading-relaxed font-medium">
                                If the harassment involves physical trespass, threats of violence, or stalking, it is no longer a financial matter. It is a police matter.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 my-12">
                                <div className="p-10 bg-[#2E2E2E] text-white rounded-[48px] shadow-xl border-t-8 border-red-600">
                                    <h4 className="text-2xl font-black mb-4 uppercase italic leading-none">Section 503 & 506 IPC</h4>
                                    <p className="text-sm leading-relaxed opacity-90 font-bold uppercase italic border-b border-white/20 pb-4">Criminal Intimidation</p>
                                    <p className="text-xs leading-relaxed opacity-70 mt-4">Applies when agents threaten to ruin your life, family, or property. This is a non-bailable offense in many contexts.</p>
                                </div>
                                <div className="p-10 bg-[#2E2E2E] text-white rounded-[48px] shadow-xl border-t-8 border-blue-600">
                                    <h4 className="text-2xl font-black mb-4 uppercase italic leading-none">Section 441 IPC</h4>
                                    <p className="text-sm leading-relaxed opacity-90 font-bold uppercase italic border-b border-white/20 pb-4">Criminal Trespass</p>
                                    <p className="text-xs leading-relaxed opacity-70 mt-4">Applies when agents enter your home or office despite being told to leave or without a valid authorization letter.</p>
                                </div>
                            </div>
                            <div className="p-8 bg-red-50 rounded-3xl border-2 border-red-100 mt-8 text-center">
                                <h4 className="text-xl font-black text-red-900 mb-2 uppercase italic leading-none">The 'Zero FIR' Strategy</h4>
                                <p className="text-sm font-bold text-red-700 leading-relaxed">If you are at work and agents are at your home, you can file a 'Zero FIR' at any police station regardless of jurisdiction. The police are legally bound to register it.</p>
                            </div>
                        </section>

                        <section id="consumer-court-deficiency" className="scroll-mt-32 mb-20 mt-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-widest decoration-[#1F5EFF] underline underline-offset-8">
                                Consumer Forum: Seeking Financial Damages
                            </h2>
                            <p className="mb-8 leading-relaxed font-medium">
                                The Supreme Court has ruled that bank harassment is a <strong>Deficiency in Service</strong>. You can sue the bank for compensation in the Consumer Forum.
                            </p>
                            <p className="mb-8 p-10 bg-gray-50 border border-gray-100 rounded-[40px] italic font-bold text-gray-700 shadow-sm">
                                "A consumer pays interest for a service. Using goons for recovery is a fundamental failure of that service contract."
                            </p>
                            <p className="mb-4 font-black uppercase tracking-widest text-[#1F5EFF] text-sm">Key Benefits of Consumer Forum:</p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <li className="p-4 bg-white border border-gray-200 rounded-2xl text-[11px] font-black uppercase italic tracking-tighter shadow-sm flex items-center gap-3">
                                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                                    Low Court Fees for filing.
                                </li>
                                <li className="p-4 bg-white border border-gray-200 rounded-2xl text-[11px] font-black uppercase italic tracking-tighter shadow-sm flex items-center gap-3">
                                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                                    Fast-track disposal of cases.
                                </li>
                                <li className="p-4 bg-white border border-gray-200 rounded-2xl text-[11px] font-black uppercase italic tracking-tighter shadow-sm flex items-center gap-3">
                                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                                    Power to award significant compensation.
                                </li>
                                <li className="p-4 bg-white border border-gray-200 rounded-2xl text-[11px] font-black uppercase italic tracking-tighter shadow-sm flex items-center gap-3">
                                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                                    No lawyer mandatory for small claims.
                                </li>
                            </ul>
                        </section>

                        <section id="evidential-requirements" className="scroll-mt-32 mb-20 p-10 bg-blue-50 rounded-[40px] border-2 border-blue-100 relative shadow-sm overflow-hidden mt-12">
                            <h2 className="text-3xl font-black text-blue-900 mb-6 uppercase tracking-wider italic leading-none">The Bulletproof Evidence Checklist</h2>
                            <p className="text-lg text-blue-800 leading-relaxed font-medium mb-6">
                                When filing your complaint, attach these to ensure its success:
                            </p>
                            <ul className="space-y-4 text-blue-900 font-black uppercase text-[10px] tracking-[0.2em]">
                                <li className="flex items-center gap-4 bg-white/50 p-4 rounded-xl border border-blue-200"><span className="p-2 bg-blue-500 rounded text-white font-bold">01</span> Uncut Call Recordings (with agent abuse).</li>
                                <li className="flex items-center gap-4 bg-white/50 p-4 rounded-xl border border-blue-200"><span className="p-2 bg-blue-500 rounded text-white font-bold">02</span> Screen Recording of WhatsApp threads (shows number).</li>
                                <li className="flex items-center gap-4 bg-white/50 p-4 rounded-xl border border-blue-200"><span className="p-2 bg-blue-500 rounded text-white font-bold">03</span> Photos of agent visits (focus on ID cards/Faces).</li>
                                <li className="flex items-center gap-4 bg-white/50 p-4 rounded-xl border border-blue-200"><span className="p-2 bg-blue-500 rounded text-white font-bold">04</span> Call History logs showing 20+ calls/day (Harassment).</li>
                                <li className="flex items-center gap-4 bg-white/50 p-4 rounded-xl border border-blue-200"><span className="p-2 bg-blue-500 rounded text-white font-bold">05</span> Copy of the initial complaint sent to the PNO.</li>
                            </ul>
                        </section>

                        <section id="legal-notice-to-bank" className="scroll-mt-32 mb-20 mt-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 border-l-8 border-[#2E2E2E] pl-6 uppercase tracking-widest italic decoration-[#1F5EFF] underline-offset-8">
                                Drafting the Legal Notice
                            </h2>
                            <p className="mb-8 leading-relaxed font-medium">
                                A <strong>Legal Notice</strong> sent through an advocate is often the most effective way to stop agents from visiting your home. It puts the bank on notice that they are being watched.
                            </p>
                            <div className="bg-gray-50 border border-gray-100 p-12 rounded-[56px] shadow-sm relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8">
                                    <svg className="w-12 h-12 text-[#1F5EFF]/10 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" /></svg>
                                </div>
                                <h4 className="text-2xl font-black text-[#2E2E2E] mb-6 uppercase tracking-tighter leading-none italic">Essential Notice Elements</h4>
                                <ul className="space-y-4 text-sm font-bold opacity-80 uppercase tracking-tighter list-disc pl-4">
                                    <li>Cite specific RBI Circular Number: RBI/2022-23/108</li>
                                    <li>Detail the exact dates and times of harassment.</li>
                                    <li>Formally withdraw your 'consent' for house visits during working hours.</li>
                                    <li>Demand an immediate stop to agent interaction while settlement is pending.</li>
                                    <li>Threaten civil and criminal action against the PNO personally.</li>
                                </ul>
                            </div>
                        </section>

                        <section id="compensation-and-damages" className="scroll-mt-32 mb-20 p-12 bg-[#1F5EFF] rounded-[64px] text-white shadow-3xl text-center relative overflow-hidden">
                            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter italic leading-none">Seeking Compensation</h2>
                            <p className="text-xl leading-relaxed opacity-90 font-medium mb-10 max-w-3xl mx-auto">
                                You are entitled to more than just an apology. Under the Consumer Protection Act and RBI ombudsman scheme, you can claim:
                            </p>
                            <div className="grid md:grid-cols-3 gap-8 text-white/90">
                                <div className="p-6 border border-white/20 rounded-[32px] bg-white/5 hover:bg-white/10 transition-colors">
                                    <h4 className="text-sm font-black uppercase mb-2 tracking-widest text-[#DEDEDE]">Mental Agony</h4>
                                    <p className="text-[10px] font-bold uppercase leading-relaxed">For the stress and trauma caused by agents.</p>
                                </div>
                                <div className="p-6 border border-white/20 rounded-[32px] bg-white/5 hover:bg-white/10 transition-colors">
                                    <h4 className="text-sm font-black uppercase mb-2 tracking-widest text-[#DEDEDE]">Loss of Reputation</h4>
                                    <p className="text-[10px] font-bold uppercase leading-relaxed">If agents shamed you in front of neighbors or colleagues.</p>
                                </div>
                                <div className="p-6 border border-white/20 rounded-[32px] bg-white/5 hover:bg-white/10 transition-colors">
                                    <h4 className="text-sm font-black uppercase mb-2 tracking-widest text-[#DEDEDE]">Legal Costs</h4>
                                    <p className="text-[10px] font-bold uppercase leading-relaxed">Recovering the expenses of filing complaints and notices.</p>
                                </div>
                            </div>
                        </section>

                        <section id="success-stories" className="scroll-mt-32 mb-20 mt-20">
                            <ReviewSnippets
                                title="Complaint Redressal Wins"
                                reviews={[
                                    {
                                        name: "Amit Deshmukh",
                                        loc: "MUMBAI",
                                        loan: "Credit Card Default",
                                        res: "₹75,000 Compensation",
                                        story: "An agent messaged my boss on LinkedIn. I filed a complaint with the RBI Ombudsman using screenshots. The RBI didn't just stop the agents; they ordered the bank to pay me ₹75k for defamation."
                                    },
                                    {
                                        name: "Sumanth Reddy",
                                        loc: "HYDERABAD",
                                        loan: "Unpaid Business Loan",
                                        res: "FIR filed, Loan waived",
                                        story: "Agents tried to seize my factory illegally. I called the police and filed an FIR under Section 441 IPC (Trespass). The bank was so scared of the criminal case that they waived 100% of my interest in exchange for withdrawing the complaint."
                                    },
                                    {
                                        name: "Richa Sharma",
                                        loc: "GURUGRAM",
                                        loan: "Educational Loan",
                                        res: "Cyber Portal Victory",
                                        story: "Agents were sending morphed images on WhatsApp. I reported it to the National Cyber Crime Reporting Portal. The police traced the number to an unauthorized agency, which was shut down, and my debt was written off."
                                    },
                                    {
                                        name: "Arun Jaitley",
                                        loc: "DELHI",
                                        loan: "Personal Loan: 5L",
                                        res: "PNO Apology, 40% Waiver",
                                        story: "I sent a strongly worded legal notice to the bank PNO citing the 2026 RBI guidelines. Within 48 hours, I received a personalized apology and a lucrative settlement offer to close the account."
                                    }
                                ]}
                            />
                        </section>

                        <section id="comprehensive-faqs" className="scroll-mt-32 mb-12 mt-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-widest decoration-[#1F5EFF] underline underline-offset-8 leading-none">Harassment Complaint FAQs</h2>
                            <div className="space-y-4 not-prose">
                                {jsonLd["@graph"][4]["mainEntity"]?.map((faq: any, i: number) => (
                                    <details key={i} className="group bg-white border border-[#DEDEDE] rounded-[24px] overflow-hidden hover:shadow-lg transition-all border-b-8 border-b-[#1F5EFF]/30 shadow-sm mb-6">
                                        <summary className="flex justify-between items-center p-8 cursor-pointer font-black text-[#2E2E2E] list-none bg-gray-50 group-open:bg-white transition-colors border-b border-[#DEDEDE] group-open:border-transparent">
                                            <span className="text-xl leading-none">{i + 1}. {faq.name}</span>
                                            <span className="transition-transform group-open:rotate-180 p-2 bg-[#1F5EFF] rounded-full text-white">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7 7"></path></svg>
                                            </span>
                                        </summary>
                                        <div className="px-8 pb-8 text-[#2E2E2E] opacity-90 leading-relaxed pt-6 mt-0 bg-white font-medium text-lg italic">
                                            {faq.acceptedAnswer.text}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </section>

                        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
                            <p className="text-gray-400 text-[10px] italic font-black uppercase tracking-widest leading-relaxed max-w-2xl mx-auto">
                                Disclaimer: SettleLoans is a financial consultancy firm. We assist in complaint drafting and mediation. We are not a government portal. For actual filing, visit cms.rbi.org.in. Our goal is to empower users with legal knowledge.
                            </p>
                        </div>

                        {/* Mobile CTA */}
                        <div className="lg:hidden mt-16 mb-8">
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#1F5EFF]/20">
                                <div className="bg-[#1F5EFF] p-6 text-center text-white">
                                    <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter leading-none">End the Abuse</h3>
                                    <p className="opacity-90 text-sm font-bold uppercase tracking-wider italic">Don't wait for the next call. Let our experts help you draft your complaint bundle today.</p>
                                </div>
                                <div className="p-8 text-center text-[#DEDEDE]">
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-xl hover:scale-105 transition-all shadow-lg text-lg uppercase tracking-tighter italic">
                                        Help Me Complaint
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
                                    <h3 className="text-lg font-black text-white uppercase tracking-tighter">Complaint Assistance</h3>
                                </div>
                                <div className="p-6 text-center">
                                    <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold italic uppercase">
                                        Filing a wrong complaint is a waste of time. Our audit team ensures your evidence meets the RBI Ombudsman standards for immediate action.
                                    </p>
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg text-base uppercase tracking-widest italic decoration-white underline-offset-4 decoration-2 underline">
                                        File My Case
                                    </Link>
                                    <p className="mt-4 text-[10px] text-[#DEDEDE]/60 uppercase tracking-widest font-black italic">Zero Tolerance Policy. Maximum Redressal.</p>
                                </div>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm">
                                <h4 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2 italic">Litigation Hub</h4>
                                <nav className="space-y-4">
                                    <Link href="/rbi-rules-for-recovery-agents" className="group flex items-center text-[11px] font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic uppercase tracking-tighter">
                                        <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                        RBI Agent Rules
                                    </Link>
                                    <Link href="/recovery-agents-threatening-me-what-to-do" className="group flex items-center text-[11px] font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic uppercase tracking-tighter">
                                        <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                        Defensive Guide
                                    </Link>
                                    <Link href="/bank-recovery-case-in-court" className="group flex items-center text-[11px] font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic uppercase tracking-tighter">
                                        <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                        Court Case Support
                                    </Link>
                                    <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="group flex items-center text-[11px] font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic uppercase tracking-tighter">
                                        <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                        Notice Checklist
                                    </Link>
                                    <Link href="/can-bank-file-case-for-personal-loan" className="group flex items-center text-[11px] font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic uppercase tracking-tighter">
                                        <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                        Personal Loan Help
                                    </Link>
                                </nav>
                                <div className="mt-8 pt-4 border-t border-gray-50 italic">
                                    <p className="text-[9px] font-black uppercase text-[#1F5EFF] tracking-widest leading-relaxed">"Your Rights are our only Priority."</p>
                                </div>
                            </div>
                        </div>
                    </aside>

                </div>
            </main>
        </div>
    );
}
