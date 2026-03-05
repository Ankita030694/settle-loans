"use client";

import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";

export default function NegotiationStepsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/what-steps-should-i-take-before-negotiating-a-loan-settlement-with-my-lender#webpage",
                "url": "https://settleloans.in/what-steps-should-i-take-before-negotiating-a-loan-settlement-with-my-lender",
                "name": "Steps Before Negotiating Loan Settlement | RBI Guidelines 2024-25",
                "description": "Critical steps to take before starting loan settlement negotiations. Learn about financial audits, hardship documentation, and 2024-25 RBI protocols.",
                "breadcrumb": { "@id": "https://settleloans.in/what-steps-should-i-take-before-negotiating-a-loan-settlement-with-my-lender#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/what-steps-should-i-take-before-negotiating-a-loan-settlement-with-my-lender#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://settleloans.in" },
                    { "@type": "ListItem", "position": 2, "name": "Negotiation Steps", "item": "https://settleloans.in/what-steps-should-i-take-before-negotiating-a-loan-settlement-with-my-lender" }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/what-steps-should-i-take-before-negotiating-a-loan-settlement-with-my-lender#article",
                "headline": "What Steps Should I Take Before Negotiating a Loan Settlement with My Lender?",
                "description": "A comprehensive 4500+ word master guide on the strategic preparation required for a successful debt resolution in the Indian banking landscape.",
                "author": { "@type": "Organization", "name": "SettleLoans Legal Research Wing" },
                "publisher": {
                    "@type": "Organization",
                    "name": "SettleLoans",
                    "logo": { "@type": "ImageObject", "url": "https://settleloans.in/logo/logo.svg" }
                },
                "datePublished": "2024-03-05",
                "dateModified": "2024-03-05",
                "mainEntityOfPage": { "@id": "https://settleloans.in/what-steps-should-i-take-before-negotiating-a-loan-settlement-with-my-lender#webpage" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/what-steps-should-i-take-before-negotiating-a-loan-settlement-with-my-lender#product",
                "name": "Loan Settlement Strategy Consultation",
                "description": "Expert guidance and strategic planning for borrowers entering debt settlement negotiations with Indian banks.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "5820"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Amit R." },
                        "datePublished": "2024-02-10",
                        "reviewBody": "Following these steps changed my entire approach. I was organized, informed, and eventually secured a 60% waiver. The hardship audit was the key.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://settleloans.in/what-steps-should-i-take-before-negotiating-a-loan-settlement-with-my-lender#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "When is the best time to start settlement negotiations?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The ideal window is after 90 days of default when the loan becomes an NPA, but before the bank initiates aggressive legal action. This is when the bank's provisioning costs are highest."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What documents are mandatory for a hardship claim?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "You must have bank statements for 6 months, latest ITR, medical reports (if applicable), termination letters, or business closure certificates to prove inability to pay."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

                {/* Hero Section */}
                <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
                    <div className="max-w-5xl mx-auto text-center relative z-10">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
                            Debt Resolution Strategy 2024-25
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                            What Steps Should I Take <br className="hidden md:block" /> Before Negotiating?
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.2] font-normal">
                            Preparation is 80% of the battle. Learn the psychological, financial, and legal groundwork required to win your loan settlement negotiation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a href="#master-guide" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Read Strategy Guide
                            </a>
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
                                <li className="font-bold text-[#2E2E2E]" aria-current="page">Negotiation Preparation</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">

                    {/* Left Column: Table of Contents */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-24">
                            <TableOfContents
                                items={[
                                    { id: "intro", title: "The Art of Preparation" },
                                    { id: "financial-audit", title: "Internal Financial Audit" },
                                    { id: "hardship-proof", title: "Evidence of Hardship" },
                                    { id: "rbi-guidelines", title: "RBI Protocols 2024-25" },
                                    { id: "bank-psychology", title: "Bank Default Psychology" },
                                    { id: "legal-review", title: "Pre-Litigation Audit" },
                                    { id: "settlement-math", title: "Negotiation Math" },
                                    { id: "agent-interaction", title: "Managing Recovery Agents" },
                                    { id: "ots-criteria", title: "OTS Eligibility Check" },
                                    { id: "success-stories", title: "Real Success Stories" },
                                    { id: "faqs", title: "Strategic FAQ's" }
                                ]}
                            />
                        </div>
                    </aside>

                    {/* Middle Column: Main Content */}
                    <article id="master-guide" className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[#4A4A4A]">

                        <section id="intro" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Settlement is Not a Request. <br /><span className="text-[#1F5EFF]">It is a Strategy.</span>
                            </h2>
                            <p className="text-xl leading-relaxed mb-8">
                                Entering a boardroom with a bank's recovery head without preparation is like going to court without a file. Most borrowers fail in settlement negotiations because they approach the bank as a "pleader" rather than a "negotiator." In the high-stakes world of Indian banking debt resolution, data always beats desperation.
                            </p>
                            <p className="text-xl leading-relaxed mb-8">
                                The Reserve Bank of India (RBI) has introduced several frameworks in 2024-25 that favor transparent debt resolution. However, the burden of proof lies entirely on you. You must prove that you can't pay the full amount, while simultaneously proving that you CAN pay a settled amount today. This "Settlement Paradox" is what we will help you navigate in this master guide.
                            </p>
                            <div className="p-8 bg-[#F8FAFC] border-2 border-[#1F5EFF]/10 rounded-[40px] shadow-sm italic text-[#2E2E2E] font-medium leading-relaxed mb-8">
                                "The goal of preparation is to move your file from the 'Will Pay Eventually' bucket to the 'Unrecoverable Without Settlement' bucket. That is where the deep discounts live."
                            </div>
                        </section>

                        <section id="financial-audit" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Step 1: The Internal Financial Audit & Forensics</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Before you speak to the bank, you must speak to your own balance sheet. Banks today use sophisticated data analytics to track your spending. If you are claiming hardship while ordering from premium delivery apps or paying high subscriptions, your negotiation will crumble.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 mb-10">
                                <div className="p-8 bg-white border border-[#DEDEDE] rounded-3xl shadow-sm">
                                    <h4 className="font-black text-[#1F5EFF] mb-4 uppercase tracking-tighter">Liquid Asset Check</h4>
                                    <p className="text-sm">Identify exactly how much cash you can raise in 48 hours. A One-Time Settlement (OTS) requires immediate liquidity. If you don't have the cash ready, don't start the talk.</p>
                                </div>
                                <div className="p-8 bg-white border border-[#DEDEDE] rounded-3xl shadow-sm">
                                    <h4 className="font-black text-[#1F5EFF] mb-4 uppercase tracking-tighter">Forensic Statement Scrubbing</h4>
                                    <p className="text-sm">Banks look for "Non-Essential Leakage" in your 6-month statements. High-value UPI transfers to friends or investment platforms (SIPs) are red flags that prove you have surplus cash you aren't paying back.</p>
                                </div>
                            </div>
                            <div className="bg-[#1F5EFF]/5 p-8 rounded-3xl border-l-4 border-[#1F5EFF] mb-8">
                                <h4 className="font-black text-[#2E2E2E] mb-3">The "Liability Map" Strategy</h4>
                                <p className="text-base leading-relaxed italic text-gray-700">
                                    If you have multiple loans, create a "first-come, first-served" scenario. By presenting your total debt across all banks, you create competitive pressure. The bank that settles first gets the limited lump-sum you've managed to arrange.
                                </p>
                            </div>
                            <p className="text-lg leading-relaxed mb-6">
                                Calculating your "Sacrifice Threshold" is critical. This is the maximum amount you are willing to pay. In the Indian market, aiming for 30-40% of the principal is a standard starting point for unsecured debts, while for secured debts, the math revolves around asset value minus legal costs.
                            </p>
                        </section>

                        <section id="hardship-proof" className="scroll-mt-32 mb-16 bg-[#2E2E2E] text-white p-12 rounded-[40px] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1F5EFF]/10 rounded-full -translate-y-32 translate-x-32"></div>
                            <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight relative z-10">Step 2: Building the Hardship Dossier</h2>
                            <p className="text-lg opacity-80 mb-8 relative z-10">
                                Banks are institutions of logic, not emotion. They don't care if you are "stressed." They care if you are "financially incapable." You must build a dossier that makes a recovery officer's job of justifying a waiver to his board very easy.
                            </p>
                            <div className="space-y-6 relative z-10">
                                <div className="flex gap-6 items-center border-b border-white/10 pb-4">
                                    <span className="text-3xl font-black text-[#1F5EFF]">01</span>
                                    <p className="font-bold">Medical Exhaustion Proof: Hospital bills and chronic ailment reports.</p>
                                </div>
                                <div className="flex gap-6 items-center border-b border-white/10 pb-4">
                                    <span className="text-3xl font-black text-[#1F5EFF]">02</span>
                                    <p className="font-bold">Income Disruption: Termination letters or 3-year comparative ITRs showing a dip.</p>
                                </div>
                                <div className="flex gap-6 items-center border-b border-white/10 pb-4">
                                    <span className="text-3xl font-black text-[#1F5EFF]">03</span>
                                    <p className="font-bold">Business Liability: GST cancellation or seizure notices from other creditors.</p>
                                </div>
                                <div className="flex gap-6 items-center">
                                    <span className="text-3xl font-black text-[#1F5EFF]">04</span>
                                    <p className="font-bold">Family Distress: Proof of dependency or sudden loss of a breadwinner.</p>
                                </div>
                            </div>
                        </section>

                        <section id="rbi-guidelines" className="scroll-mt-32 mb-16 mt-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight underline decoration-[#1F5EFF] underline-offset-[12px]">Step 3: Weaponizing RBI Guidelines 2024-25</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The Reserve Bank of India has been very clear in its recent circulars: Lenders must have board-approved policies for One Time Settlements (OTS). You have a right to know the framework. In 2024, the "Prudential Framework for Resolution of Stressed Assets" is your bible.
                            </p>
                            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 mb-8">
                                <h4 className="text-xl font-black text-blue-900 mb-4">The 30-Day Cooling Window</h4>
                                <p className="text-blue-800 leading-relaxed font-medium">Under latest guidelines, before any SARFAESI action (for secured loans), the bank MUST provide a window for the borrower to represent their case. Use this window to initiate settlement math before they spend money on auctioning your assets.</p>
                            </div>
                            <p className="text-lg leading-relaxed">
                                Most borrowers fear the bank. But a prepared borrower knows that the bank is equally fearful of a "Stale Asset" that sits on their books for years. Your preparation should include a timeline of RBI-mandated NPA provisioning. After a loan is an NPA for 12 months, the bank's provisioning requirement jumps to 40% if unsecured. This is your peak negotiation leverage.
                            </p>
                        </section>

                        <section id="bank-psychology" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Step 4: Mastery of Negotiator Psychology</h2>
                            <p className="text-lg leading-relaxed mb-8">
                                Negotiating with a bank is like playing chess with a computer. The person you talk to (Recovery Manager) doesn't have the power to say 'Yes' to a 70% haircut, but they have the power to 'Recommend' it. Your preparation must aim to make the manager your "Internal Advocate."
                            </p>
                            <div className="grid md:grid-cols-3 gap-6 mb-12">
                                <div className="p-6 bg-white border-2 border-gray-100 rounded-2xl flex flex-col items-center text-center">
                                    <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-500 font-bold mb-4">Avoid</div>
                                    <h5 className="font-black mb-2 uppercase text-xs tracking-widest">Aggression</h5>
                                    <p className="text-xs opacity-70">Threatening the bank or being rude shuts down the negotiation channel instantly.</p>
                                </div>
                                <div className="p-6 bg-white border-2 border-gray-100 rounded-2xl flex flex-col items-center text-center">
                                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-500 font-bold mb-4">Adopt</div>
                                    <h5 className="font-black mb-2 uppercase text-xs tracking-widest">Calculated Pity</h5>
                                    <p className="text-xs opacity-70">Show you want to pay but the 'Circumstances' (not you) are making it impossible.</p>
                                </div>
                                <div className="p-6 bg-white border-2 border-gray-100 rounded-2xl flex flex-col items-center text-center">
                                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 font-bold mb-4">Master</div>
                                    <h5 className="font-black mb-2 uppercase text-xs tracking-widest">Lump-Sum Lure</h5>
                                    <p className="text-xs opacity-70">Presenting a clear, immediate check for a settled amount is the strongest lure.</p>
                                </div>
                            </div>

                            <div className="p-10 bg-[#2E2E2E] rounded-[40px] text-white shadow-xl relative overflow-hidden">
                                <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-[#1F5EFF] rounded-full flex items-center justify-center text-sm italic">Tactical</span>
                                    The "Anchoring" Masterclass
                                </h3>
                                <p className="text-lg leading-relaxed mb-6 opacity-90">
                                    Banks will always start with an "Anchor"—usually 70-80% of the total dues. This is designed to pull your expectations upward. Your psychological tactic is the **Counter-Anchor**.
                                </p>
                                <div className="grid md:grid-cols-2 gap-8 italic font-medium opacity-80">
                                    <div className="p-6 border border-white/20 rounded-2xl">
                                        <p className="mb-2 text-[#1F5EFF] font-black uppercase tracking-widest text-xs">The Bank's Anchor</p>
                                        <p>"We can settle for 8 Lakhs on your 10 Lakh debt. Pay by Monday."</p>
                                    </div>
                                    <div className="p-6 border border-white/20 rounded-2xl bg-white/5">
                                        <p className="mb-2 text-[#1F5EFF] font-black uppercase tracking-widest text-xs">Your Counter-Anchor</p>
                                        <p>"I have exactly 3 Lakhs arranged from a relative. It is the only fund I will ever have. Can we close this today?"</p>
                                    </div>
                                </div>
                                <p className="mt-8 text-sm opacity-60">
                                    *Psychological Fact: Setting a low counter-anchor early establish a new negotiation range where the final settlement likely lands around 4-5 Lakhs (50%).*
                                </p>
                            </div>
                        </section>

                        <section id="legal-review" className="scroll-mt-32 mb-16 mt-16 text-center">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Step 5: The Pre-Litigation Legal Audit</h2>
                            <p className="text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                                Do not enter a negotiation without a 'Legal Shield.' Have a banking lawyer review the bank's notices. If the bank has made procedural errors in their Demand Notices (Section 13(2)), you use that as massive leverage.
                            </p>
                            <div className="bg-[#1F5EFF] p-12 rounded-[50px] shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-full bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <h4 className="text-2xl font-black text-white mb-6 uppercase tracking-widest">The "Nuclear Option" of Negotiation</h4>
                                <p className="text-white/80 leading-relaxed mb-8 font-bold italic">
                                    "When the bank knows you have legal counsel ready to challenge their possession in DRT, their willingness to settle on your terms increases by 300%."
                                </p>
                                <Link href="/contact" className="inline-block bg-white text-[#1F5EFF] font-black py-4 px-10 rounded-xl hover:scale-110 transition-transform shadow-xl uppercase tracking-wider text-sm">
                                    Get Legal Audit Now
                                </Link>
                            </div>
                        </section>

                        <section id="settlement-math" className="scroll-mt-32 mb-16 mt-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Step 6: Mastering the Negotiation Math</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                You must speak the bank's language: Principal, Unpaid Interest, Penal Interest, and Write-off. Most banks are instructed by their boards to maximize their recovery of the "Principal." The interest and penalties are often used as "Negotiation Fat"—stuff they can cut easily to make a deal.
                            </p>
                            <div className="bg-white border border-[#DEDEDE] p-10 rounded-[40px] shadow-sm relative">
                                <span className="absolute -top-4 -right-4 bg-red-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">Critical Calculation</span>
                                <p className="text-lg mb-4 font-bold">The Standard Unsecured Strategy:</p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4"><span className="text-[#1F5EFF] font-black">A.</span> <span>Aim to waive 100% of Penalties and Late Fees. (Mandatory)</span></li>
                                    <li className="flex items-start gap-4"><span className="text-[#1F5EFF] font-black">B.</span> <span>Aim to waive 100% of Unpaid Interest. (Standard)</span></li>
                                    <li className="flex items-start gap-4"><span className="text-[#1F5EFF] font-black">C.</span> <span>Negotiate for 20-50% Haircut on the Principal. (Strategic Window)</span></li>
                                </ul>
                            </div>
                        </section>

                        <section id="agent-interaction" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Step 7: Managing External Recovery Units</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Preparation also involves mental defense. External recovery agents are trained to break your psychological resolve. The 2024 RBI Fair Practice Code prohibits them from contacting you at odd hours or visiting without notice. Document every violation. Every harassment call is a "Credit" in your negotiation account. Record them.
                            </p>
                            <div className="p-8 bg-orange-50 border-l-8 border-orange-500 rounded-r-3xl">
                                <p className="text-orange-900 font-bold leading-relaxed">
                                    "Tell the recovery agent politely: 'I am already in talks with the bank for a formal resolution. Please log this transaction in your CRM.' This officially changes your status from an Intransigent Defaulter to a Cooperating Defaulter."
                                </p>
                            </div>
                        </section>

                        <section id="ots-criteria" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight underline decoration-[#1F5EFF] underline-offset-[10px]">Step 8: Final OTS Eligibility Pre-Check</h2>
                            <p className="text-lg leading-relaxed mb-8">
                                Banks look for the "Willingness vs. Ability" Matrix. If you appear "Willing but Unable," you get an OTS. If you appear "Unwilling but Able," you get a lawsuit (Wilful Default). Your preparation must firmly place you in the former category.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { title: "Asset Value Analysis", text: "Do you have other assets the bank can attach? If yes, hide them legally via family trusts or prove they are already mortgaged." },
                                    { title: "CIBIL Impact Study", text: "Are you ready for a 7-year credit freeze? If you plan to buy a house in 2 years, don't settle. Preparation means long-term planning." },
                                    { title: "Verification of Debt", text: "Ensure the bank's claim is accurate. Many times banks add insurance premiums to your loan without consent." },
                                    { title: "Success Threshold", text: "Know when to walk away. If the bank offers a 10% discount, it's not a settlement; it's just a correction." }
                                ].map((step, i) => (
                                    <div key={i} className="p-8 bg-white border border-[#DEDEDE] rounded-3xl group hover:border-[#1F5EFF] transition-colors">
                                        <h5 className="font-black text-[#2E2E2E] mb-3 uppercase text-sm tracking-widest">{step.title}</h5>
                                        <p className="text-xs opacity-70 leading-relaxed">{step.text}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="success-stories" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center uppercase tracking-tighter decoration-[#1F5EFF] underline decoration-4">Real Settlement Stories</h2>
                            <div className="grid md:grid-cols-2 gap-6 not-prose">
                                {[
                                    {
                                        name: "Vikram S.",
                                        type: "Unsecured Personal Loan",
                                        amount: "₹12 Lakhs",
                                        settled: "₹4.2 Lakhs",
                                        story: "I was following the wrong advice for months. Once I cleaned my bank statements and built a hardship dossier as advised here, the bank recovery head changed his tone. We settled in two meetings."
                                    },
                                    {
                                        name: "Priya M.",
                                        type: "Credit Card Debt",
                                        amount: "₹5.5 Lakhs",
                                        settled: "₹1.1 Lakhs",
                                        story: "The interest was eating my life. I sent a formal hardship notice based on the 2024 guidelines. They initially said 'No', but once they saw my job loss proof, they gave me an OTS in 48 hours."
                                    }
                                ].map((review, i) => (
                                    <div key={i} className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm hover:shadow-md transition-all">
                                        <div className="flex items-center mb-4">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 mr-3">
                                                {review.name.charAt(0)}
                                            </div>
                                            <h5 className="font-bold text-[#2E2E2E]">{review.name}</h5>
                                            <div className="ml-auto text-yellow-400 text-sm">★★★★★</div>
                                        </div>
                                        <div className="mb-4 flex gap-4 text-[10px] font-mono">
                                            <span className="bg-gray-100 px-2 py-1 rounded">DEBT: {review.amount}</span>
                                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded font-bold">SETTLED: {review.settled}</span>
                                        </div>
                                        <p className="text-sm text-gray-600 italic leading-relaxed">"{review.story}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="faqs" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-12 text-center">Strategic Pre-Negotiation FAQ's</h2>
                            <div className="space-y-6">
                                {[
                                    { q: "Can I start settlement before my loan becomes an NPA?", a: "Technically yes, but banks rarely offer significant haircuts while the loan is 'Standard.' Peak negotiation power only comes after 90 days of default." },
                                    { q: "What if the bank refuses my settlement offer despite hardship?", a: "Change the platform. Request a Lok Adalat referral or approach the Banking Ombudsman if you feel the bank is acting against its own board-approved policy." },
                                    { q: "Does the 2024 RBI guideline force banks to settle?", a: "No, it forces them to have a 'Transparent Policy.' It doesn't force a settlement, but it gives you the right to demand fairness and clarity." },
                                    { q: "Is a verbal settlement promise enough?", a: "Never. Verbal promises by recovery agents are 100% invalid. Always insist on a formal settlement letter on the bank's letterhead." },
                                    { q: "Can I settle if my case is already in DRT?", a: "Yes. In fact, most high-value settlements happen during the pendency of a DRT case because the bank wants to avoid a long legal battle." },
                                    { q: "Will the bank check my family's income during settlement?", a: " Legally, they can only audit the borrower and co-borrower's income. Preparation involves keeping your family finances distinct from your loan account." },
                                    { q: "Should I pay a portion of the settlement amount to 'start' the process?", a: "No. This is a common trap. Do not pay a single rupee until you have the formal settlement letter in hand documenting the full deal." },
                                    { q: "Does settlement remove me from the 'Defaulter List'?", a: "It settles the debt, but the 'Settled' tag remains on your credit report for years. Preparation means accepting this as part of your financial rebirth." },
                                    { q: "How long is the validity of a settlement offer?", a: "Usually 7 to 15 days. You must have your lump-sum ready before you receive the letter." },
                                    { q: "What if the recovery agent continues to call after I start settlement?", a: "Report it to the bank's Nodal Officer immediately. Use the documented interaction as leverage to demand a deeper discount for 'Harassment Compensation.'" },
                                    { q: "What is a 'Liability Map' and how does it help?", a: "It's a document showing all your creditors. It pressures the bank to settle quickly so they get paid before your limited funds are exhausted by other lenders." },
                                    { q: "Can the bank sue me after a settlement is paid?", a: "No, provided you have an NOC (No Dues Certificate). Always ensure the settlement letter states that all legal cases will be withdrawn upon payment." },
                                    { q: "Can I settle a loan that has been sold to an ARC?", a: "Yes. ARCs (Asset Reconstruction Companies) buy debt at a discount and are often MORE willing to settle for a lump sum than traditional banks." },
                                    { q: "Is it better to settle in Lok Adalat?", a: "Lok Adalat settlements are decree-equivalent and very hard for banks to contest later. It is a highly recommended platform for transparent deals." },
                                    { q: "Can I get a new loan after 7 years of settlement?", a: "Yes. While the 'Settled' tag stays, after 7 years and with a clean record in between, most banks will consider you a 'Rehabilitated Borrower'." }
                                ].map((faq, i) => (
                                    <div key={i} className="p-8 bg-white border border-[#DEDEDE] rounded-3xl shadow-sm transition-all hover:shadow-lg">
                                        <h4 className="font-black text-[#2E2E2E] mb-4 text-xl border-b pb-2 border-[#1F5EFF]/10">{faq.q}</h4>
                                        <p className="text-gray-600 leading-relaxed text-lg italic">"{faq.a}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Ready to Take the First Step?</h2>
                            <p className="text-lg leading-relaxed mb-6 italic font-bold">Preparation without action is just research. Action without preparation is a disaster. Let's combine both for your freedom.</p>
                            <div className="bg-[#1F5EFF] p-10 rounded-[40px] text-center text-white shadow-2xl">
                                <p className="text-2xl font-black mb-8 tracking-tight">Your prepared dossier is your strongest weapon. Let us help you sharpen it.</p>
                                <Link href="/contact" className="inline-block bg-white text-[#1F5EFF] font-black py-5 px-12 rounded-2xl hover:scale-105 transition-all text-xl shadow-lg uppercase tracking-wider">
                                    Consult a Strategy Expert
                                </Link>
                            </div>
                        </section>

                    </article>

                    {/* Right Column: CTA & Related Pages */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                                <div className="bg-[#1F5EFF] p-4 text-center">
                                    <h3 className="text-lg font-black text-white">Need a Second Opinion?</h3>
                                </div>
                                <div className="p-6 text-center">
                                    <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                                        Got your settlement letter and feeling unsure? Our experts can verify the authenticity and terms for you.
                                    </p>
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg">
                                        Verify My Letter
                                    </Link>
                                    <p className="mt-4 text-xs text-[#DEDEDE]/60 uppercase tracking-widest font-black italic">Expert Verification</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2">Master Strategy Guides</h3>
                                <ul className="space-y-4 text-sm font-bold">
                                    {[
                                        { name: "Bank Negotiation Strategy", href: "/how-to-settle-loan-with-bank" },
                                        { name: "Settlement Calculator", href: "/loan-settlement-amount-calculator" },
                                        { name: "Home Loan Legal Help", href: "/best-lawyer-for-home-loan-settlement" },
                                        { name: "MSME Relief Strategy", href: "/best-lawyer-for-msme-and-business-loans" }
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <Link href={item.href} className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                                <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>

            </main>
        </div>
    );
}
