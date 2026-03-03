"use client";

import React from "react";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";

export default function HomeLoanCheckBouncePage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "@id": "https://settleloans.in/best-lawyer-for-home-loan-check-bounce-case#article",
                "headline": "Best Lawyer for Home Loan Check Bounce Case | Section 138 NI Act Defense",
                "description": "Expert legal defense for home loan cheque bounce cases under Section 138 NI Act. We represent borrowers facing EMI defaults, security cheque misuse, and builder fraud cases.",
                "image": "https://settleloans.in/images/home-loan-check-bounce.jpg",
                "author": { "@type": "Organization", "name": "SettleLoans" },
                "publisher": {
                    "@type": "Organization",
                    "name": "SettleLoans",
                    "logo": { "@type": "ImageObject", "url": "https://settleloans.in/logo.png" }
                },
                "datePublished": "2024-03-03",
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://settleloans.in/best-lawyer-for-home-loan-check-bounce-case" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/best-lawyer-for-home-loan-check-bounce-case#product",
                "name": "Home Loan Section 138 Legal Defense",
                "description": "Criminal and civil legal representation for borrowers facing cheque bounce proceedings from banks and NBFCs.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "1120"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Sanjay Kapoor" },
                        "datePublished": "2024-02-10",
                        "reviewBody": "SettleLoans successfully argued that my cheque was a 'security cheque' and not for a current liability. The Section 138 case was quashed on merit.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Is cheque bounce a criminal offense in home loans?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, under Section 138 of the Negotiable Instruments Act, 1881, a cheque bounce for discharge of a legally enforceable debt is a criminal offense punishable with imprisonment up to 2 years or a fine up to double the cheque amount."
                        }
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://settleloans.in" },
                    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://settleloans.in/services" },
                    { "@type": "ListItem", "position": 3, "name": "Home Loan Check Bounce Lawyer", "item": "https://settleloans.in/best-lawyer-for-home-loan-check-bounce-case" }
                ]
            }
        ]
    };

    const tocItems = [
        { id: "introduction", title: "Introduction" },
        { id: "section-138-basics", title: "Section 138 NI Act Basics" },
        { id: "security-cheque-defense", title: "Security Cheque Defense" },
        { id: "procedural-lapses", title: "Procedural Lapses" },
        { id: "builder-fraud-nuance", title: "Builder Fraud Defense" },
        { id: "section-143a-challenge", title: "Section 143A Challenge" },
        { id: "blank-cheque-misuse", title: "Blank Cheque Misuse" },
        { id: "mortgage-vs-check-bounce", title: "Civil vs Criminal Conflict" },
        { id: "how-to-reply-notice", title: "Replying to Notice" },
        { id: "success-stories", title: "Success Stories" },
        { id: "faqs", title: "Important FAQs" }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                />

                {/* Hero Section */}
                <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden text-center">
                    <div className="max-w-5xl mx-auto relative z-10">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
                            Home Loan NI Act Defense
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                            Best <span className="text-[#1F5EFF]">Lawyer for Home Loan</span> Check Bounce Case
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
                            Aggressive legal defense for Section 138 NI Act cases. We protect borrowers from bank harassment, security cheque misuse, and criminal prosecution.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact-us" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Get Check Bounce Defense Now
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Breadcrumbs */}
                <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
                    <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
                        <nav aria-label="Breadcrumb">
                            <ol className="flex items-center space-x-2 text-xs md:text-sm text-[#747474]">
                                <li><Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link></li>
                                <li><span className="text-gray-300">/</span></li>
                                <li><Link href="/services" className="hover:text-[#1F5EFF] transition-colors">Services</Link></li>
                                <li><span className="text-gray-300">/</span></li>
                                <li className="font-bold text-[#2E2E2E]" aria-current="page">Home Loan Check Bounce</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">

                    {/* Left Column: TOC */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <TableOfContents items={tocItems} />
                    </aside>

                    {/* Middle Column: Content */}
                    <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">

                        <section id="introduction" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Defending <span className="text-[#1F5EFF]">Section 138 Cases</span> in Home Loan Defaults
                            </h2>
                            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6 font-bold">
                                    A cheque bounce case is not just a financial dispute; it is a criminal proceeding that can lead to imprisonment. When a bank files a Section 138 case for a home loan EMI default, it is often a tactic to exert maximum pressure on the borrower.
                                </p>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                                    In the context of home loans, banks usually possess blank signed cheques taken as 'security' at the time of loan disbursement. When you fall behind on a few EMIs, the bank fills in a large amount (sometimes the entire outstanding loan balance) and presents it for payment, knowing it will bounce. This sets the stage for a criminal trial under the Negotiable Instruments (NI) Act.
                                </p>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6 font-bold text-[#1F5EFF]">
                                    SettleLoans specializes in defending home loan borrowers against such aggressive tactics. We use established Supreme Court precedents to argue that cheques issued as 'security' cannot be used for current criminal liability unless certain strict conditions are met. Our defense focuses on protecting your liberty while we resolve the underlying debt.
                                </p>
                            </div>
                        </section>

                        <section id="section-138-basics" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Basics of Section 138 NI Act for Home Loans</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                To understand your defense, you must first understand the elements that constitute the 'offense' of a cheque bounce. For a successful prosecution, the bank must prove:
                            </p>
                            <ul className="list-disc pl-8 space-y-4 mb-8">
                                <li><strong>Enforceable Debt:</strong> The cheque must have been issued for the discharge of a 'legally enforceable debt or liability.' If the bank fills a cheque for ₹50 Lakhs when your actual default is only ₹5 Lakhs, this element is missing.</li>
                                <li><strong>Presentation within Validity:</strong> The cheque must reach the bank within 3 months of the date mentioned on it.</li>
                                <li><strong>Dishonor for Insufficiency:</strong> The bank's return memo must state 'Insufficient Funds' or 'Exceeds Arrangement' (or similar grounds covered by Section 138).</li>
                                <li><strong>Demand Notice:</strong> The bank MUST send you a formal demand notice within 30 days of the bounce, giving you 15 days to pay the amount.</li>
                            </ul>
                        </section>

                        <section id="security-cheque-defense" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">The "Security Cheque" Defense: Applying Supreme Court Precedents</h2>
                            <p className="text-lg leading-relaxed mb-6 font-bold text-red-600 uppercase tracking-tight">
                                This is the most potent legal shield for home loan borrowers.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                At the time of home loan approval, almost every lender (SBI, HDFC, ICICI, or NBFCs) demands a set of blank signed cheques. These are not intended to be "payment" instruments for current installments. They are "Security Cheques" meant to provide a secondary layer of comfort to the lender. However, when defaults occur, banks often Fill-in-the-Blanks with arbitrary amounts and present them to initiate criminal proceedings.
                            </p>
                            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-200 mb-10">
                                <h4 className="text-2xl font-black text-blue-900 mb-6">Critical Case Law: Indus Airways vs Magnum Aviation</h4>
                                <p className="text-lg leading-relaxed text-blue-800 mb-6">
                                    The Hon'ble Supreme Court has clarified the distinction between a cheque issued for a "Current Liability" versus one issued for "Security." If the liability had not accrued on the date the cheque was handed over, then the dishonor of such a cheque may not invite criminal prosecution under Section 138.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                                        <p className="text-base font-medium text-blue-900"><strong>Advanced Payment vs Debt:</strong> If the cheque was for an advance for a service not yet rendered (or a house not yet built), it is not a debt.</p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                                        <p className="text-base font-medium text-blue-900"><strong>Post-Dated Cheques (PDC):</strong> We argue that PDCs given at the start of a 20-year home loan are contingent on the bank performing its duties (like project verification).</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-lg leading-relaxed mb-6">
                                In *Sampelly Satyanarayana Rao vs Indian Renewable Energy Development Agency Ltd*, the court further nuanced this. Our job as your defense lawyers is to prove through the "Sanction Letter" and "Loan Disbursement Schedule" that the specific cheque number used by the bank was indeed part of the initial security deposit and not a fresh cheque issued to clear a specific default.
                            </p>
                        </section>

                        <section id="procedural-lapses" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Exploiting Procedural Lapses: The Forensic Defense</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Section 138 is a technical offense. The prosecution must follow an exact sequence of events. Any deviation, however small, can lead to your acquittal. We perform a granular "Forensic Audit" of the bank's entire legal file.
                            </p>
                            <div className="space-y-8 mb-10">
                                <div className="p-8 bg-white border-2 border-[#DEDEDE] rounded-2xl hover:border-[#1F5EFF] transition-colors group">
                                    <h4 className="font-bold text-xl mb-4 text-[#2E2E2E] group-hover:text-[#1F5EFF]">1. Validation of the 'Demand Notice'</h4>
                                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                                        Did the bank send the notice to the correct address? In cities like Mumbai and Bangalore, people often change rental homes while their home loan house is under construction. If the bank sent the notice to an old address despite having your 'Change of Address' request on record, the entire case is non-maintainable.
                                    </p>
                                    <p className="text-sm font-bold text-gray-500 uppercase">Defense Angle: Lack of Service of Statutory Notice.</p>
                                </div>
                                <div className="p-8 bg-white border-2 border-[#DEDEDE] rounded-2xl hover:border-[#1F5EFF] transition-colors group">
                                    <h4 className="font-bold text-xl mb-4 text-[#2E2E2E] group-hover:text-[#1F5EFF]">2. Limitation Period Math</h4>
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        The law is strict: Notice within 30 days of bounce {'->'} 15 days wait for payment {'->'} Case filing within 30 days from thereafter. Banks often use automated systems that glitch. If the bank files the case on the 31st day, the Magistrate has no jurisdiction to hear it unless a "Delay Condonation Application" is filed and proved. We challenge these applications aggressively.
                                    </p>
                                </div>
                                <div className="p-8 bg-white border-2 border-[#DEDEDE] rounded-2xl hover:border-[#1F5EFF] transition-colors group">
                                    <h4 className="font-bold text-xl mb-4 text-[#2E2E2E] group-hover:text-[#1F5EFF]">3. Power of Attorney (PoA) Defects</h4>
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        The person filing the case on behalf of the bank must have a valid PoA or Board Resolution. In the case of bank mergers (e.g., HDFC Ltd into HDFC Bank), many PoAs became technically invalid for a period. We use these transitional legal gaps to get cases dismissed.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="builder-fraud-nuance" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Defense for Victims of Builder Fraud & Possession Delays</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Millions of Indian homebuyers are caught in a "pincer movement": their builder isn't giving possession, but the bank is demanding EMIs and filing Section 138 cases for cheque bounces. This is where "Equity" comes to your rescue in a criminal trial.
                            </p>
                            <div className="bg-[#1F5EFF]/5 p-8 rounded-3xl border border-[#1F5EFF]/20 mb-10">
                                <h4 className="text-2xl font-black text-[#2E2E2E] mb-6 text-center">The "No Liability" Doctrine</h4>
                                <p className="text-lg leading-relaxed mb-6 italic text-center">
                                    "A cheque must be for a legally enforceable debt. If the consideration for the loan has failed (no house delivered), the debt becomes disputed, not enforceable."
                                </p>
                                <p className="text-lg leading-relaxed mb-4">
                                    In Tripartite Agreements, the bank is often a partner in the project's monitoring. If we can prove that:
                                </p>
                                <ol className="space-y-4 text-base font-bold">
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs flex-shrink-0 mt-1">1</span>
                                        <span>The bank released funds to the builder without verifying construction milestones or obtaining an 'Occupancy Certificate' (OC).</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs flex-shrink-0 mt-1">2</span>
                                        <span>The bank was aware of the builder's insolvency but continued to allow the builder to draw from the loan account.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs flex-shrink-0 mt-1">3</span>
                                        <span>The project is cancelled by RERA or is under NCLT liquidation.</span>
                                    </li>
                                </ol>
                                <p className="mt-8 text-lg font-bold text-[#1F5EFF] text-center">
                                    We argue that the 'EMIs' are not a 'Legally Enforceable Debt' until the bank recovers the money from the builder first. This has been a successful defense in Gurgaon, Noida, and Mumbai courts.
                                </p>
                            </div>
                        </section>

                        <section id="section-143a-challenge" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Challenging Section 143A "Interim Compensation"</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                In 2018, an amendment allowed Magistrates to order the accused to pay 20% of the cheque amount as "Interim Compensation" even before the trial starts. This is a huge burden for a home loan borrower already in financial distress.
                            </p>
                            <p className="text-lg leading-relaxed mb-6 font-bold text-[#1F5EFF]">
                                How we fight Section 143A orders:
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                The Supreme Court in *G.J. Raja vs Tejraj Surana* has emphasized that 20% is NOT mandatory; it is "discretionary." We present your "Financial Hardship" and the "Frivolous Nature" of the bank's case to ensure the Magistrate either waives this 20% or reduces it to a negligible symbolic amount. If the court still orders 20%, we assist in filing a 'Revision Petition' in the Sessions Court to stay the order.
                            </p>
                        </section>

                        <section id="blank-cheque-misuse" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Challenging Blank Cheque Misuse: The Ink & Handwriting Defense</h2>
                            <p className="text-lg leading-relaxed mb-6 leading-relaxed">
                                Most borrowers sign blank cheques but don't fill in the date and amount. Banks often keep these for years and fill them in when a dispute arises. In a criminal trial, this is a major vulnerability for the bank.
                            </p>
                            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200 mb-8">
                                <h4 className="font-bold text-xl mb-4 text-[#2E2E2E]">Forensic Ink Age Analysis</h4>
                                <p className="text-base text-gray-700 leading-relaxed mb-4">
                                    If you signed a cheque in 2018 but the bank presented it in 2024 with a fresh date, we can request the court to send the cheque to a <strong>Government Forensic Science Laboratory (FSL)</strong>. Expert analysis can often determine the 'age of the ink'. If the signature ink is 6 years old but the date ink is only 6 days old, it proves the bank manipulated the instrument.
                                </p>
                                <p className="text-base text-gray-700 leading-relaxed">
                                    Furthermore, if the handwriting on the amount and date doesn't match yours, we use the <strong>Section 20 of the NI Act</strong> (Inchoate Instruments) cautiously. While banks have the right to fill in the amount, they cannot fill an amount that exceeds the actual debt on the date of presentation.
                                </p>
                            </div>
                        </section>

                        <section id="mortgage-vs-check-bounce" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Civil vs Criminal: The Double Jeopardy Struggle</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Banks often file both a SARFAESI case (to take your house) and a Section 138 case (to send you to jail). We argue in court that since the bank is already pursuing the 'Secured Asset,' the criminal proceeding for the same debt amount is redundant and intended only as harassment.
                            </p>
                            <p className="text-lg font-bold mb-6 text-[#1F5EFF]">
                                While not an automatic stay, this argument often softens the magistrate's approach, leading to easier bail conditions and more time for debt settlement.
                            </p>
                        </section>

                        <section id="how-to-reply-notice" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">The Importance of a Strong Reply to the Legal Notice</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Your defense begins the moment you receive the 15-day demand notice. If you don't reply, the court assumes that you admit the debt.
                            </p>
                            <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-200">
                                <h4 className="font-bold mb-4">What our legal reply includes:</h4>
                                <ul className="space-y-4 text-sm font-medium">
                                    <li>Denial of the specific amount claimed as 'Not Legally Enforceable.'</li>
                                    <li>Assertion that the cheque was a 'Security Instrument' for a different purpose.</li>
                                    <li>Disclosure of any payments made that were not credited by the bank.</li>
                                    <li>Warning of counter-litigation for harassment and malicious prosecution.</li>
                                </ul>
                            </div>
                        </section>

                        <section id="success-stories" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Home Loan Check Bounce Success Stories</h2>
                            <div className="grid md:grid-cols-2 gap-10 not-prose">
                                {[
                                    {
                                        name: "Sanjay Kapoor",
                                        loc: "Gurgaon",
                                        outcome: "Case Quashed",
                                        story: "The bank filled a ₹45 Lakhs cheque for a ₹3 Lakhs default on a home loan. We proved the 'Security' nature of the cheque in the High Court, and the case was quashed."
                                    },
                                    {
                                        name: "Anjali S.",
                                        loc: "Bangalore",
                                        outcome: "Acquittal",
                                        story: "The bank served the legal notice on an old address despite having the new one on record. The Bangalore Magistrate acquitted the borrower on grounds of non-service of notice."
                                    },
                                    {
                                        name: "Manish P.",
                                        loc: "Mumbai",
                                        outcome: "Settlement at 30%",
                                        story: "By challenging the 'Ink Age' of the blank cheque, we created enough legal doubt to force a settlement where the bank waived 70% of the interest."
                                    },
                                    {
                                        name: "Rajesh V.",
                                        loc: "Noida",
                                        outcome: "Bail & Stay",
                                        story: "In a builder delay case, we got an interim stay on the Section 138 trial by linking it to the pending RERA case against the builder and the bank."
                                    }
                                ].map((review, i) => (
                                    <div key={i} className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm hover:shadow-md transition-all">
                                        <div className="flex items-center mb-4">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 mr-3">{review.name.charAt(0)}</div>
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
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Home Loan Check Bounce FAQs</h2>
                            <div className="space-y-6 not-prose">
                                {[
                                    { q: "Is a cheque bounce case criminal or civil?", a: "It is a criminal offense under Section 138. However, courts often allow settlements at any stage of the trial." },
                                    { q: "Can I get bail in a 138 NI Act case?", a: "Yes, Section 138 is a bailable offense. You usually need to provide a surety or a personal bond to get bail on your first appearance." },
                                    { q: "What is a 'Security Cheque'?", a: "It's a cheque given not for a current debt, but as a guarantee for future payments. Using it for a criminal case requires specific legal conditions." },
                                    { q: "What should I do first after the cheque bounces?", a: "Wait for the legal notice. Do NOT ignore the bank's calls, but also don't admit to any debt in writing without legal advice." },
                                    { q: "Can the bank put me in jail immediately?", a: "No. There is a full trial. You are 'innocent until proven guilty,' and you have multiple stages of appeal." },
                                    { q: "What if the bank filled the amount without my knowledge?", a: "This is a strong defense. We can challenge the 'material alteration' of a blank cheque during the trial." },
                                    { q: "Is there a limit on the number of cases a bank can file?", a: "Technically no. They can file a separate case for every single cheque that bounces. This is why immediate legal intervention is needed." },
                                    { q: "Can a 138 case be filed against a guarantor?", a: "Yes, if the guarantor had also issued cheques for the loan repayment, they can be prosecuted as well." },
                                    { q: "What is 'Section 143A' Interim Compensation?", a: "This is a new amendment where the court can ask the accused to pay up to 20% of the cheque amount during the trial. We fight to minimize this amount." },
                                    { q: "Does a settlement in the DRT stop the criminal case?", a: "Usually, yes. Part of the settlement agreement (Compounding of Offense) is that the bank will withdraw all pending criminal cases." },
                                    { q: "Can a builder delay be a valid defense?", a: "Yes, under the doctrine of 'Frustration of Purpose,' we argue that the underlying liability is suspended because the builder failed to deliver." },
                                    { q: "How long does a Section 138 trial take?", a: "While the law says it should be decided in 6 months, in reality, it takes 1 to 3 years. We use this time to negotiate a settlement with the bank." },
                                    { q: "Can the bank file Section 138 against my wife if it's a joint loan?", a: "Only if she signed the specific cheque that bounced. If you were the sole signatory, she cannot be prosecuted under Section 138." },
                                    { q: "What is 'Mediation' in check bounce cases?", a: "Most courts now refer 138 cases to mediation. This is a great opportunity to settle for a lower amount without a criminal record." },
                                    { q: "Can I go abroad if I have a pending 138 case?", a: "Yes, unless the court has specifically issued a 'Look-Out Circular' or taken your passport. You may need the court's permission for long trips." },
                                    { q: "Is 'Notice by WhatsApp' valid in Section 138?", a: "Recent Supreme Court rulings have allowed service of notice via WhatsApp and Email, provided 'Double Tick' or 'Read Receipt' is proved." }
                                ].map((faq, i) => (
                                    <details key={i} className="group bg-white border border-[#DEDEDE] rounded-2xl overflow-hidden hover:shadow-xl transition-all border-b-8 border-b-[#1F5EFF]/10">
                                        <summary className="flex justify-between items-center p-6 cursor-pointer font-black text-[#2E2E2E] list-none bg-gray-50 group-open:bg-white transition-colors">
                                            <span className="text-lg pr-8 leading-tight">{i + 1}. {faq.q}</span>
                                            <span className="transition-transform duration-300 group-open:rotate-180">
                                                <svg className="w-6 h-6 text-[#1F5EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7"></path></svg>
                                            </span>
                                        </summary>
                                        <div className="px-8 pb-8 text-[#2E2E2E] opacity-90 leading-relaxed border-t border-[#DEDEDE] pt-8 bg-white font-medium text-base">{faq.a}</div>
                                    </details>
                                ))}
                            </div>
                        </section>

                        <div className="mt-16 p-8 bg-[#2E2E2E] rounded-3xl text-white text-center">
                            <h2 className="text-3xl font-black mb-6">Defend Your Reputation and Liberty</h2>
                            <p className="text-xl mb-8 opacity-90">
                                Don't let a cheque bounce case derail your life. Our expert criminal defense lawyers are ready to fight your 138 NI Act case.
                            </p>
                            <Link href="/contact-us" className="inline-block bg-[#1F5EFF] text-white font-black py-4 px-10 rounded-xl hover:scale-105 transition-all text-lg shadow-2xl">
                                Consult Section 138 Specialist
                            </Link>
                        </div>

                    </article>

                    {/* Right Column: Sticky Widgets */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-24 space-y-8">

                            {/* CTA Box */}
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                                <div className="bg-[#1F5EFF] p-4 text-center">
                                    <h3 className="text-lg font-black text-white px-2">Fight 138 Case</h3>
                                </div>
                                <div className="p-8 text-center">
                                    <p className="mb-8 text-sm text-[#DEDEDE] opacity-90 leading-relaxed font-bold">
                                        Facing a criminal notice? Don't ignore it. Let our experts draft a technical reply today.
                                    </p>
                                    <Link href="/contact-us" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-4 rounded-[12px] hover:scale-110 transition-all shadow-md group-hover:shadow-2xl">
                                        Consult Advocate
                                    </Link>
                                    <p className="mt-6 text-[10px] text-[#DEDEDE]/60 uppercase tracking-[0.3em] font-black">NI Act Specialists</p>
                                </div>
                            </div>

                            {/* Related Guides */}
                            <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2 text-center">Defense Resources</h3>
                                <ul className="space-y-4 text-sm font-extrabold px-2">
                                    <li>
                                        <Link href="/drt-lawyer-in-mumbai-loan-recovery" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight">
                                            <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors flex-shrink-0"></span>
                                            DRT Mumbai Lawyer
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/best-lawyer-for-arc-loan-assignment-dispute" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight">
                                            <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors flex-shrink-0"></span>
                                            ARC Dispute Defense
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/loan-settlement-lawyers" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight">
                                            <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors flex-shrink-0"></span>
                                            Settlement Strategy
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
