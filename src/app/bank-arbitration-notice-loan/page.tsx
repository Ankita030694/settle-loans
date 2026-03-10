import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import ReviewSnippets from "@/components/ReviewSnippets";

export const metadata: Metadata = {
    title: "Bank Arbitration Notice for Loan | Legal Rights & Response Guide",
    description: "Received a bank arbitration notice for your loan? Learn about the Arbitration Act 1996, how to challenge biased arbitrators, and your rights in India.",
    alternates: {
        canonical: "https://settleloans.in/bank-arbitration-notice-loan",
    },
};

export default function BankArbitrationPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/bank-arbitration-notice-loan#webpage",
                "url": "https://settleloans.in/bank-arbitration-notice-loan",
                "name": "Bank Arbitration Notice for Loan India | Legal Defense Guide",
                "description": "An exhaustive guide for borrowers on responding to bank arbitration notices under the Arbitration and Conciliation Act, 1996.",
                "breadcrumb": { "@id": "https://settleloans.in/bank-arbitration-notice-loan#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/bank-arbitration-notice-loan#breadcrumb",
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
                        "name": "Bank Arbitration Notice guide",
                        "item": "https://settleloans.in/bank-arbitration-notice-loan"
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/bank-arbitration-notice-loan#article",
                "headline": "How to Handle a Bank Arbitration Notice: A Legal Framework",
                "description": "Detailed analysis of Section 21 and Section 34 of the Arbitration Act in the context of Indian bank loan recovery.",
                "author": {
                    "@type": "Organization",
                    "name": "SettleLoans Legal Audit Team"
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
                "mainEntityOfPage": { "@id": "https://settleloans.in/bank-arbitration-notice-loan#webpage" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/bank-arbitration-notice-loan#product",
                "name": "Arbitration Notice Mediation",
                "description": "Professional assistance in reviewing arbitration notices and negotiating settlements with banks and NBFCs.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.98",
                    "reviewCount": "2850"
                }
            },
            {
                "@type": "FAQPage",
                "@id": "https://settleloans.in/bank-arbitration-notice-loan#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is an arbitration notice for a loan?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "An arbitration notice is a formal legal communication sent by a lender (Bank or NBFC) informing you that they are initiating a private dispute resolution process instead of a regular court case."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is arbitration mandatory for loan recovery?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "It is mandatory only if there is an 'Arbitration Clause' in your signed loan agreement. Almost all modern loan documents include this clause."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I challenge the bank's choice of arbitrator?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Under Section 11 and relevant Supreme Court judgments, a bank cannot unilaterally appoint an arbitrator. You have the right to a neutral and independent arbitrator."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How long do I have to respond to an arbitration notice?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Typically, you have 15 to 30 days to respond to a Section 21 notice. Delaying can lead to the bank proceeding with their own arbitrator choice."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What happens if I ignore the arbitration proceedings?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The arbitrator can pass an 'Ex-Parte Award' against you. This award is equivalent to a court decree and can be enforced to attach your property or bank accounts."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can an arbitral award be challenged in court?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, under Section 34 of the Arbitration Act. You can challenge it on grounds of bias, lack of notice, or violation of public policy."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is arbitration faster than a regular court case?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. While a civil suit can take years, arbitration is usually completed within 6-12 months."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I settle the loan during the arbitration process?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely. In fact, many banks use arbitration as a tool to bring you to the negotiation table for a One-Time Settlement (OTS)."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do I need a lawyer for bank arbitration?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "While not strictly mandatory, it is highly recommended. The bank will be represented by professional advocates, and technical legal points can significantly affect the outcome."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is Section 21 of the Arbitration Act?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Section 21 defines the commencement of arbitration. The process is legally 'started' the moment you receive the notice from the bank."
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
                            Private Dispute Defense
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight uppercase">
                            Bank Arbitration <br /> <span className="text-[#1F5EFF]">Notice Unlocked</span>
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
                            Received a Section 21 notice? Understand the Arbitration Act, 1996, and how to defend against unilateral arbitrator appointments. Protect your assets from ex-parte awards.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Resolve My Arbitration
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
                                <li className="font-bold text-[#2E2E2E]" aria-current="page">Bank Arbitration Guide</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">

                    {/* Left Column: TOC */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-32">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#1F5EFF] mb-8 pb-4 border-b-2 border-blue-50">Legal Roadmap</h3>
                            <TableOfContents
                                items={[
                                    { id: "what-is-arbitration-notice", title: "What is it?" },
                                    { id: "arbitration-act-1996-context", title: "Legal Context" },
                                    { id: "section-21-commencement", title: "Section 21" },
                                    { id: "unilateral-appointments-bias", title: "Bias & Challenge" },
                                    { id: "arbitral-proceedings-stages", title: "The Process" },
                                    { id: "ex-parte-awards-danger", title: "Ex-Parte Risk" },
                                    { id: "enforcement-of-awards", title: "Enforcement" },
                                    { id: "challenging-award-section-34", title: "Section 34 Help" },
                                    { id: "negotiating-during-arbitration", title: "Negotiation" },
                                    { id: "arbitration-vs-civil-suit", title: "Case Comparison" },
                                    { id: "faqs", title: "Legal FAQs" }
                                ]}
                            />
                        </div>
                    </aside>

                    {/* Middle Column: Content */}
                    <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[#2E2E2E]">

                        <section id="what-is-arbitration-notice" className="scroll-mt-32 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                            <h2 className="text-4xl md:text-5xl font-black text-[#2E2E2E] mb-10 leading-[1.1] uppercase tracking-tighter">
                                The Bank Arbitration Notice: <span className="text-[#1F5EFF]">A Private Trial</span>
                            </h2>
                            <p className="text-xl font-medium mb-8 leading-relaxed">
                                Most borrowers don't realize they've waived their right to a traditional court trial at the time of signing their loan agreement. Hidden deep within the fine print is the 'Arbitration Clause' - a provision that shifts the recovery battle from a public courtroom to a private tribunal.
                            </p>
                            <p className="mb-8 leading-relaxed">
                                Receiving a <strong>bank arbitration notice for a loan</strong> is not a suggestion; it's the official whistle blowing for a high-stakes legal match. Unlike civil courts, which are often slow and overburdened, an arbitration tribunal moves with clinical efficiency. If you don't show up, the game ends quickly, often with a binding 'award' that allows the bank to seize your bank accounts or property.
                            </p>
                            <div className="bg-gray-900 p-10 rounded-[40px] text-white my-12 shadow-2xl relative">
                                <h3 className="text-2xl font-black mb-6 uppercase tracking-widest text-[#1F5EFF]">The Arbitration Reality</h3>
                                <p className="text-lg opacity-80 leading-relaxed font-medium">
                                    Arbitration is governed by the <strong>Arbitration and Conciliation Act, 1996</strong>. This Act makes an 'Arbitral Award' equivalent to a decree of a Civil Court. Once a notice is served and the process begins, you are legally obligated to participate or face severe default consequences.
                                </p>
                            </div>
                        </section>

                        <section id="arbitration-act-1996-context" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-widest border-b-8 border-gray-100 pb-4">
                                Legal Foundation: The 1996 Act
                            </h2>
                            <p className="mb-8 font-medium">
                                The Indian legal framework treats arbitration not just as a choice, but as a preferred method for commercial recovery.
                            </p>
                            <div className="space-y-4">
                                <div className="p-8 bg-blue-50 border border-blue-100 rounded-[32px] hover:shadow-md transition-shadow">
                                    <h4 className="text-xl font-black text-[#1F5EFF] mb-2 uppercase italic leading-none">Speed over Procedure</h4>
                                    <p className="text-sm leading-relaxed font-bold opacity-70">Traditional evidence rules are relaxed. The focus is on the loan agreement and the statement of account.</p>
                                </div>
                                <div className="p-8 bg-blue-50 border border-blue-100 rounded-[32px] hover:shadow-md transition-shadow">
                                    <h4 className="text-xl font-black text-[#1F5EFF] mb-2 uppercase italic leading-none">The Finality Principle</h4>
                                    <p className="text-sm leading-relaxed font-bold opacity-70">Awards are hard to set aside. Courts rarely interfere unless there is a grave 'patent illegality'.</p>
                                </div>
                                <div className="p-8 bg-[#1F5EFF] text-white rounded-[32px] shadow-lg">
                                    <h4 className="text-xl font-black mb-2 uppercase italic leading-none">The Neutrality Mandate</h4>
                                    <p className="text-sm leading-relaxed font-medium opacity-90">While the process is private, the law demands that the arbitrator be independent. Many bank notices fail this specific test.</p>
                                </div>
                            </div>
                        </section>

                        <section id="section-21-commencement" className="scroll-mt-32 mb-20 p-12 bg-white border-4 border-gray-100 rounded-[48px] shadow-inner relative mt-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 border-l-8 border-[#1F5EFF] pl-6 uppercase tracking-tighter italic">
                                Section 21: The Point of No Return
                            </h2>
                            <p className="mb-8 leading-relaxed">
                                Under <strong>Section 21 of the Arbitration and Conciliation Act</strong>, the arbitration proceedings are deemed to have commenced on the date on which a request for that dispute to be referred to arbitration is received by the respondent (you).
                            </p>
                            <div className="p-8 bg-red-50 rounded-3xl border border-red-100">
                                <h4 className="text-xl font-black text-red-900 mb-2 uppercase">Why Delivery Matters</h4>
                                <p className="text-sm italic font-bold text-red-700 leading-relaxed">If you receive an email or a speed post containing an arbitration notice, the clock has officially started. Ignoring it on the grounds of 'I didn't sign for it' is a dangerous legal move that usually backfires.</p>
                            </div>
                        </section>

                        <section id="unilateral-appointments-bias" className="scroll-mt-32 mb-20 mt-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-widest leading-[0.9] decoration-[#1F5EFF] underline underline-offset-8">
                                Unilateral Appointments & The Bias Defense
                            </h2>
                            <p className="mb-8 leading-relaxed text-lg font-medium italic opacity-70">
                                "A party to the contract cannot be the judge of the contract."
                            </p>
                            <p className="mb-8">
                                A significant number of bank arbitration notices in India are legally flawed because the bank attempts to <strong>unilaterally appoint</strong> their own arbitrator: often a former bank official or a lawyer who exclusively handles their cases.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 my-12">
                                <div className="p-10 bg-[#2E2E2E] text-white rounded-[48px] shadow-xl border-l-8 border-[#1F5EFF]">
                                    <h4 className="text-2xl font-black mb-4 uppercase italic leading-none">Supreme Court View</h4>
                                    <p className="text-sm leading-relaxed opacity-90 font-medium">In cases like *TRF Ltd. v. Energo Engineering*, the court ruled that an interested party is ineligible to appoint an arbitrator. This is your primary shield.</p>
                                </div>
                                <div className="p-10 bg-[#2E2E2E] text-white rounded-[48px] shadow-xl border-l-8 border-[#1F5EFF]">
                                    <h4 className="text-2xl font-black mb-4 uppercase italic leading-none">Challenging Bias</h4>
                                    <p className="text-sm leading-relaxed opacity-90 font-medium">If the bank sends a notice nominating 'Advocate X' without your consent, you must immediately send a legal reply challenging the appointment under the 'Independence of Arbitrators' guidelines.</p>
                                </div>
                            </div>
                        </section>

                        <section id="arbitral-proceedings-stages" className="scroll-mt-32 mb-20 p-10 bg-blue-50 rounded-[40px] border-2 border-blue-100 relative shadow-sm overflow-hidden text-center">
                            <h2 className="text-3xl font-black text-blue-900 mb-6 uppercase tracking-wider italic">The 5 Stages of Arbitration</h2>
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                                <div className="p-4 bg-white rounded-2xl border border-blue-100">
                                    <span className="text-[10px] font-black uppercase text-blue-400">Step 1</span>
                                    <p className="text-xs font-bold leading-tight uppercase">Invocation (Section 21)</p>
                                </div>
                                <div className="p-4 bg-white rounded-2xl border border-blue-100">
                                    <span className="text-[10px] font-black uppercase text-blue-400">Step 2</span>
                                    <p className="text-xs font-bold leading-tight uppercase">Statement of Claims</p>
                                </div>
                                <div className="p-4 bg-white rounded-2xl border border-blue-100">
                                    <span className="text-[10px] font-black uppercase text-blue-400">Step 3</span>
                                    <p className="text-xs font-bold leading-tight uppercase">Statement of Defense</p>
                                </div>
                                <div className="p-4 bg-white rounded-2xl border border-blue-100">
                                    <span className="text-[10px] font-black uppercase text-blue-400">Step 4</span>
                                    <p className="text-xs font-bold leading-tight uppercase">Evidence & Hearings</p>
                                </div>
                                <div className="p-4 bg-[#1F5EFF] text-white rounded-2xl">
                                    <span className="text-[10px] font-black uppercase opacity-60">Step 5</span>
                                    <p className="text-xs font-bold leading-tight uppercase">Final Award</p>
                                </div>
                            </div>
                        </section>

                        <section id="ex-parte-awards-danger" className="scroll-mt-32 mb-20 mt-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 border-l-8 border-[#2E2E2E] pl-6 uppercase tracking-widest leading-none">
                                Ex-Parte Awards: The Silent Execution
                            </h2>
                            <p className="mb-8 leading-relaxed">
                                If you fail to appear or submit a defense statement, the arbitrator has the power to proceed 'Ex-Parte'. This means they will hear only the bank's side and pass an award for the full amount, plus heavy interest and arbitration costs.
                            </p>
                            <div className="bg-red-900 p-10 rounded-[48px] text-white my-12 shadow-2xl">
                                <h4 className="text-2xl font-black mb-4 uppercase italic text-red-500 leading-[0.9]">The Execution Trap</h4>
                                <p className="text-sm leading-relaxed opacity-80 font-bold italic mb-6">An Ex-Parte award is not a 'letter'. It's a legal weapon. The bank can take this to a local civil court (Execution Court) and get orders to freeze your Salary or attach your House within weeks.</p>
                                <p className="text-xs font-black uppercase tracking-[0.2em] decoration-red-500 underline underline-offset-4 font-bold italic">Never miss the first hearing date mentioned in the notice.</p>
                            </div>
                        </section>

                        <section id="enforcement-of-awards" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-widest decoration-[#1F5EFF] underline underline-offset-8">
                                Enforcement: From Tribunal to the Police
                            </h2>
                            <p className="mb-8 leading-relaxed">
                                Once an award is passed, it remains in a 'Limbo' state for 90 days (the period allowed for challenge). If not challenged, it becomes <strong>Final and Enforceable</strong>. The bank then files an 'Execution Petition' under Section 36.
                            </p>
                            <p className="mb-0 font-medium">The execution court can then issue:</p>
                            <ul className="space-y-4 my-8">
                                <li className="flex items-center gap-4 text-sm font-black uppercase italic tracking-tighter">
                                    <span className="w-4 h-4 rounded b-[#1F5EFF] bg-[#1F5EFF]"></span>
                                    Warrants of Attachment for your movable assets (Like your Car).
                                </li>
                                <li className="flex items-center gap-4 text-sm font-black uppercase italic tracking-tighter">
                                    <span className="w-4 h-4 rounded b-[#1F5EFF] bg-[#1F5EFF]"></span>
                                    Garnishee Orders for your savings or salary accounts.
                                </li>
                                <li className="flex items-center gap-4 text-sm font-black uppercase italic tracking-tighter">
                                    <span className="w-4 h-4 rounded b-[#1F5EFF] bg-[#1F5EFF]"></span>
                                    Arrest & Detention in Civil Prison (rare, but legally possible for intentional non-compliance with court orders).
                                </li>
                            </ul>
                        </section>

                        <section id="challenging-award-section-34" className="scroll-mt-32 mb-20 p-12 bg-[#1F5EFF] rounded-[56px] text-white shadow-2xl relative">
                            <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tighter italic leading-none">Section 34: The Appeal Gateway</h2>
                            <p className="text-xl leading-relaxed opacity-90 font-medium mb-8">
                                If an award has already been passed against you, all is not lost. <strong>Section 34 of the Arbitration Act</strong> allows you to file a petition in the District Court to set aside the award.
                            </p>
                            <p className="mb-0 text-sm font-black uppercase tracking-[0.2em]">Common Grounds: Lack of proper notice of appointment, arbitrator bias, or if the award violates the 'Fundamental Policy of Indian Law'.</p>
                        </section>

                        <section id="negotiating-during-arbitration" className="scroll-mt-32 mb-20 mt-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-widest italic border-l-8 border-[#2E2E2E] pl-6 leading-none">
                                Tactical Settlement during proceedings
                            </h2>
                            <p className="mb-8 leading-relaxed">
                                Ironically, the best time to settle a loan is often <strong>during</strong> the arbitration process. Once the bank realizes you are legally represented and aware of 'Unilateral Appointment' flaws, their confidence in a quick victory fades.
                            </p>
                            <p className="mb-8">
                                We leverage these technical procedural flaws to bring the bank back to the mediation table. A 'One-Time Settlement' (OTS) reached during arbitration can be recorded as a 'Consent Award', which has the benefit of ending the litigation forever with a massive discount on the total dues.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 my-12">
                                <div className="p-10 bg-gray-50 rounded-[48px] border border-gray-100 shadow-sm relative overflow-hidden group">
                                    <h4 className="text-xl font-black mb-4 uppercase tracking-tighter text-[#2E2E2E]">The Waiver Lever</h4>
                                    <p className="text-sm leading-relaxed opacity-70 font-medium italic">We force the bank to waive 'Arbitration Costs' and 'Receiver Fees' which they usually try to add to your bill.</p>
                                </div>
                                <div className="p-10 bg-gray-50 rounded-[48px] border border-gray-100 shadow-sm relative overflow-hidden group text-right">
                                    <h4 className="text-xl font-black mb-4 uppercase tracking-tighter text-[#2E2E2E]">Exit Strategy</h4>
                                    <p className="text-sm leading-relaxed opacity-70 font-medium italic">A signed settlement during arbitration stops the execution risk immediately. We ensure no 'Contingent Liability' remains.</p>
                                </div>
                            </div>
                        </section>

                        <section id="arbitration-vs-civil-suit" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-widest decoration-[#1F5EFF] underline underline-offset-8">
                                Arbitration vs. Regular Civil Suit
                            </h2>
                            <div className="overflow-x-auto my-12">
                                <table className="w-full border-collapse rounded-3xl overflow-hidden shadow-sm">
                                    <thead className="bg-[#2E2E2E] text-white">
                                        <tr>
                                            <th className="p-6 text-left text-xs font-black uppercase tracking-widest">Feature</th>
                                            <th className="p-6 text-left text-xs font-black uppercase tracking-widest">Regular Court</th>
                                            <th className="p-6 text-left text-xs font-black uppercase tracking-widest bg-[#1F5EFF]">Arbitration</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        <tr className="border-b border-gray-100">
                                            <td className="p-6 text-sm font-black uppercase tracking-tighter">Timeline</td>
                                            <td className="p-6 text-sm opacity-70 font-bold italic">3 to 7 Years</td>
                                            <td className="p-6 text-sm font-black text-[#1F5EFF] italic">6 to 12 Months</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-6 text-sm font-black uppercase tracking-tighter">Cost</td>
                                            <td className="p-6 text-sm opacity-70 font-bold italic">High Court Fees</td>
                                            <td className="p-6 text-sm font-black text-[#1F5EFF] italic">Fixed Arbitrator Fees</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-6 text-sm font-black uppercase tracking-tighter">Appeal</td>
                                            <td className="p-6 text-sm opacity-70 font-bold italic">Multiple Levels</td>
                                            <td className="p-6 text-sm font-black text-[#1F5EFF] italic">Strictly Limited</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section id="success-stories" className="scroll-mt-32 mb-20">
                            <ReviewSnippets
                                title="Arbitration Defense Wins"
                                reviews={[
                                    {
                                        name: "Sundeep Nair",
                                        loc: "KOCHI",
                                        loan: "Business Loan: 45L",
                                        res: "Award Set Aside",
                                        story: "An NBFC got an ex-parte award against me without service of notice. We filed under Section 34. The District Court set aside the award, noting the lack of procedural compliance."
                                    },
                                    {
                                        name: "Manish Verma",
                                        loc: "LUCKNOW",
                                        loan: "Personal Loan: 8L",
                                        res: "Unilateral Challenge",
                                        story: "The bank appointed their own panel advocate as arbitrator. We sent a strong legal reply challenging the bias based on SC judgments. The bank withdrew the notice and offered an OTS."
                                    },
                                    {
                                        name: "Kiran Mazumdar",
                                        loc: "CHENNAI",
                                        loan: "Auto Loan Dispute",
                                        res: "Settled in 3 Months",
                                        story: "Instead of fighting the whole case, we used the arbitration hearings to mediate. SettleLoans helped reach an 18-installment repayment plan with 0% further interest."
                                    },
                                    {
                                        name: "Farhan Qureshi",
                                        loc: "HYDERABAD",
                                        loan: "Credit Card Debt: 14L",
                                        res: "Consent Award Created",
                                        story: "The bank tried to proceed during my medical emergency. We presented the hardship evidence. The tribunal forced the bank to settle for 3L under a legally binding 'Consent Award'."
                                    }
                                ]}
                            />
                        </section>

                        <section id="faqs" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 uppercase tracking-widest leading-none">Common Arbitration FAQs</h2>
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
                            <p className="text-gray-400 text-sm italic font-black uppercase tracking-tighter leading-relaxed">
                                Disclaimer: SettleLoans provides strategy and mediation services for debt recovery. Arbitration is a complex legal process under the Arbitration and Conciliation Act, 1996. The contents here are for educational purposes. Always consult a licensed attorney for representation in arbitral proceedings.
                            </p>
                        </div>

                        {/* Mobile CTA */}
                        <div className="lg:hidden mt-16 mb-8">
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#1F5EFF]/20">
                                <div className="bg-[#1F5EFF] p-6 text-center text-white">
                                    <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter">Stop Executive Action</h3>
                                    <p className="opacity-90 text-sm italic font-medium">Protect your bank accounts from attachment. Challenge the arbitration notice and negotiate a settlement today.</p>
                                </div>
                                <div className="p-8 text-center text-[#DEDEDE]">
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-xl hover:scale-105 transition-all shadow-lg text-lg uppercase tracking-tight">
                                        Defend My Case
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
                                    <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter leading-none">Arbitration<br />Shield</h3>
                                    <p className="opacity-80 text-[10px] font-black uppercase tracking-[0.2em]">Immediate Defense</p>
                                </div>
                                <div className="p-8">
                                    <p className="text-[#DEDEDE] text-sm mb-8 leading-relaxed font-bold italic opacity-70 group-hover:opacity-100 transition-opacity">
                                        Don't let a private tribunal decide your financial fate. We help you review arbitration notices, challenge biased appointments, and secure a favorable exit strategy.
                                    </p>
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-4 rounded-xl hover:scale-105 transition-all shadow-lg text-sm uppercase tracking-widest">
                                        Fight Arbitration Now
                                    </Link>
                                    <p className="mt-4 text-[10px] text-gray-400 font-black uppercase tracking-tighter text-center">Section 21 Response Experts. 24/7 Aid.</p>
                                </div>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm text-left">
                                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#1F5EFF] mb-6 border-b border-blue-50 pb-4">Legal Directory</h4>
                                <nav className="space-y-4">
                                    <Link href="/legal-action-for-credit-card-default" className="block text-[11px] font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic uppercase tracking-tighter">Credit Card Defaults</Link>
                                    <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="block text-[11px] font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic uppercase tracking-tighter">Bank Legal Notices</Link>
                                    <Link href="/can-bank-file-case-for-personal-loan" className="block text-[11px] font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic uppercase tracking-tighter">Personal Loan Litigation</Link>
                                    <Link href="/rbi-new-recovery-guidelines-july-2026" className="block text-[11px] font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic uppercase tracking-tighter">RBI Recovery Codes</Link>
                                    <Link href="/best-nbfc-loan-settlement-lawyer" className="block text-[11px] font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic uppercase tracking-tighter">NBFC Defense Expert</Link>
                                </nav>
                            </div>
                        </div>
                    </aside>

                </div>
            </main>
        </div>
    );
}
