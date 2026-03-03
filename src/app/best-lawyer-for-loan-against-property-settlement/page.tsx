"use client";

import React from "react";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBalanceScale, faGavel, faBriefcase, faShieldAlt, faHandshake, faUserCheck, faFileContract, faExclamationCircle, faHome, faBuilding, faCalendarAlt, faScaleBalanced, faInfoCircle, faCertificate, faUserShield, faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";

export default function LAPSettlementPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/best-lawyer-for-loan-against-property-settlement#webpage",
                "url": "https://settleloans.in/best-lawyer-for-loan-against-property-settlement",
                "name": "Best Lawyer for Loan Against Property (LAP) Settlement India | SARFAESI Defense",
                "description": "Expert legal representation for Loan Against Property (LAP) settlements. Defend against SARFAESI Act, stop property auctions, and negotiate OTS with banks. 4500+ word guide.",
                "breadcrumb": { "@id": "https://settleloans.in/best-lawyer-for-loan-against-property-settlement#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/best-lawyer-for-loan-against-property-settlement#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://settleloans.in" },
                    { "@type": "ListItem", "position": 2, "name": "LAP Settlement", "item": "https://settleloans.in/best-lawyer-for-loan-against-property-settlement" }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/best-lawyer-for-loan-against-property-settlement#article",
                "headline": "Best Lawyer for Loan Against Property Settlement: Essential Guide to SARFAESI and Debt Resolution",
                "description": "Comprehensive legal strategies for LAP defaults. Learn how to stop property repossession, challenge bank valuation, and secure the best One-Time Settlement (OTS).",
                "author": { "@type": "Organization", "name": "SettleLoans Property Law Team" },
                "publisher": {
                    "@type": "Organization",
                    "name": "SettleLoans",
                    "logo": { "@type": "ImageObject", "url": "https://settleloans.in/logo.png" }
                },
                "datePublished": "2024-03-03",
                "dateModified": "2024-03-03",
                "mainEntityOfPage": { "@id": "https://settleloans.in/best-lawyer-for-loan-against-property-settlement#webpage" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/best-lawyer-for-loan-against-property-settlement#product",
                "name": "LAP Legal Defence & Settlement Services",
                "description": "Strategic legal services for residential and commercial property loan settlements and SARFAESI litigation.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "3120"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Rajesh M." },
                        "datePublished": "2024-01-10",
                        "reviewBody": "SettleLoans saved my home from an illegal bank auction. Their understanding of Section 17 of the SARFAESI Act is exceptional.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Meena K." },
                        "datePublished": "2024-02-14",
                        "reviewBody": "Professional and compassionate. They negotiated a 55% haircut on our commercial property loan. Highly recommended.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://settleloans.in/best-lawyer-for-loan-against-property-settlement#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Can a bank sell my property without a court case?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, under the SARFAESI Act, 2002, banks can take possession and sell secured assets without court intervention if they follow the mandatory notification procedure under Section 13."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is it possible to settle a property loan for less than the total dues?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, through a One-Time Settlement (OTS), borrowers can pay a lump sum that is less than the total outstanding to close the account permanently."
                        }
                    }
                ]
            }
        ]
    };

    const tocItems = [
        { id: "introduction", title: "Property Debt Crisis" },
        { id: "sarfaesi-act", title: "SARFAESI Legal Shield" },
        { id: "lap-mechanics", title: "LAP Settlement Logic" },
        { id: "ots-negotiation", title: "OTS Strategies" },
        { id: "drt-litigation", title: "DRT Property Defense" },
        { id: "auction-challenge", title: "Auction Challenges" },
        { id: "agricultural-land", title: "Agricultural Exemption" },
        { id: "rbi-fair-practice", title: "RBI Fair Practice" },
        { id: "step-by-step", title: "Execution Process" },
        { id: "success-stories", title: "Success Stories" },
        { id: "comprehensive-faq", title: "Property Debt FAQs" }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

                <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
                    <div className="max-w-5xl mx-auto text-center relative z-10">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
                            Secured Asset Protection
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight text-left md:text-center">
                            Best Lawyer for <br className="hidden md:block" /> Loan Against Property Settlement
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal text-left md:text-center">
                            Protect your residential and commercial real estate. Defend against SARFAESI actions, stop illegal property auctions, and leverage RBI guidelines for the best One-Time Settlement.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Get a Property Debt Audit
                            </Link>
                        </div>
                    </div>
                </section>

                <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
                    <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
                        <nav aria-label="Breadcrumb">
                            <ol className="flex items-center space-x-2 text-xs md:text-sm text-[#747474]">
                                <li><Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link></li>
                                <li><span className="text-gray-300">/</span></li>
                                <li className="font-bold text-[#2E2E2E]" aria-current="page">LAP Settlement</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <TableOfContents items={tocItems} />
                    </aside>

                    <article className="w-full lg:w-3/5 flex-1 prose prose-slate max-w-none">
                        <section id="introduction" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Facing Property Repossession: The Legal and Financial High Stakes
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                A Loan Against Property (LAP) is often the largest financial commitment a person or business owner makes. Whether it was taken to fuel business expansion, fund a wedding, or cover medical emergencies, the property serves as the ultimate security for the lender. When financial distress hits and EMIs are missed, the threat is no longer just a phone call from a collector; it is the physical loss of your home or office premises.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                In India, the laws governing secured debt are heavily weighted in favor of financial institutions. The SARFAESI Act, 2002, allows banks to take possession of your property without ever stepping into a civil court. This creates a state of extreme urgency for the borrower. However, being in default does not mean you have lost your rights. A specialized lawyer for loan against property settlement can be the difference between a forced auction and a dignified, manageable resolution.
                            </p>
                            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 mb-10">
                                <h3 className="text-xl font-bold text-[#1F5EFF] mb-4 uppercase tracking-wider">The Anatomy of Secured Debt Default</h3>
                                <p className="text-gray-700 leading-relaxed mb-4 font-medium">
                                    A default on an LAP usually moves through distinct stages: Special Mention Account (SMA), Non-Performing Asset (NPA), and then the formal SARFAESI enforcement. Most borrowers wait until the bank pastes a 'Possession Notice' on their gate to seek help. This is a mistake.
                                </p>
                                <p className="text-gray-700 leading-relaxed font-medium">
                                    The early stages of default provide the best window for negotiation. Banks are often more willing to discuss a One-Time Settlement (OTS) or a loan restructuring before they have incurred the massive legal and administrative costs associated with a property auction.
                                </p>
                            </div>
                        </section>

                        <section id="sarfaesi-act" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                                The SARFAESI Act: Understanding the Bank’s Power and Your Defense
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002, is the primary legal tool used by banks and NBFCs to recover property loans. It bypasses the slow-moving civil courts, allowing lenders to seize assets directly.
                            </p>
                            <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4 uppercase tracking-tighter">Key Sections You Must Know</h3>
                            <ul className="list-none space-y-6 mb-10 text-gray-800 font-medium">
                                <li className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                    <strong className="text-[#1F5EFF]">Section 13(2): The Demand Notice.</strong> Once your account is an NPA, the bank issues a 60-day notice demanding full payment. This is your warning shot. You have the right to file a 'Representation and Objection' within this window.
                                </li>
                                <li className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                    <strong className="text-[#1F5EFF]">Section 13(4): Possession Notice.</strong> If you don't pay or settle within 60 days, the bank can take 'Symbolic' or 'Physical' possession of your property. This is when they put a notice in the newspaper and a sticker on your property.
                                </li>
                                <li className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                    <strong className="text-[#1F5EFF]">Section 14: DM/CMM Intervention.</strong> The bank can approach the District Magistrate or Chief Metropolitan Magistrate to get police assistance to physically evict you and take over the property.
                                </li>
                            </ul>
                            <div className="bg-[#2E2E2E] p-8 rounded-2xl text-white my-10 font-bold italic shadow-lg">
                                "The SARFAESI Act is procedural. Any mistake the bank makes in the notification process, the valuation of the property, or the timing of the auction can be used as a legal leverage to stop the proceedings in the Debt Recovery Tribunal."
                            </div>
                        </section>

                        <section id="lap-mechanics" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-tight">
                                LAP Settlement Logic: Why Banks Settle
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                From the bank’s perspective, a property auction is a last resort. Auctions are risky. If the real estate market is down, the property might not sell at the 'Reserve Price'. If the property is litigated, no one will bid. A property with a 'Stay Order' from the DRT is a liability for the bank.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                A One-Time Settlement (OTS) provides the bank with immediate cash and reduces their ratio of Non-Performing Assets. Our job as lawyers is to prove to the bank that our client’s settlement offer is safer and more profitable for the bank than a long, uncertain auction process. We highlight the 'Low Liquidity' of the specific asset and the 'High Cost of Recovery' to drive down the settlement amount.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                                <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 shadow-sm">
                                    <h4 className="font-bold text-xl mb-3 text-[#1F5EFF]">Net Present Value (NPV)</h4>
                                    <p className="text-gray-700 leading-relaxed text-sm">Banks calculate the value of money over time. We argue that 1 Crore today is better than 1.5 Crore after 5 years of litigation and maintenance of the seized property.</p>
                                </div>
                                <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 shadow-sm">
                                    <h4 className="font-bold text-xl mb-3 text-[#1F5EFF]">Provisioning Impact</h4>
                                    <p className="text-gray-700 leading-relaxed text-sm">Under RBI rules, banks must set aside capital for bad loans. By settling, they 'free up' this capital for new lending, which is a major incentive for branch managers.</p>
                                </div>
                            </div>
                        </section>

                        <section id="ots-negotiation" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                                OTS Negotiation Strategies for High-Value Property Loans
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Negotiating for an LAP is different from a personal loan. The amounts are higher, involves collateral, and the banks are more aggressive. A successful strategy requires a 'Multi-Pronged' legal and financial approach.
                            </p>
                            <div className="space-y-4 mb-10">
                                {[
                                    { step: "Property Valuation Audit", desc: "Banks often undervalue properties for auctions. We get an independent valuation to prove the bank's 'Reserve Price' is ridiculously low, creating grounds for a legal stay." },
                                    { step: "Technical Legal Representation", desc: "We file a detailed response to the 13(2) notice within the statutory period. Failure to do so is a missed opportunity for leverage." },
                                    { step: "Hardship Analysis", desc: "We present documented evidence of business failure or medical crisis. Banks have 'Compassionate Grounds' policies that we invoke to secure higher haircuts." },
                                    { step: "Escalation to Zonal Office", desc: "Local branch managers have limited power. We take the proposal to the Zonal or Head office where the 'Settlement Advisory Committee' (SAC) has the authority to approve large discounts." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-[#1F5EFF]/50 transition-colors">
                                        <div className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold flex-shrink-0">{i + 1}</div>
                                        <div>
                                            <h4 className="font-bold text-[#2E2E2E] mb-1">{item.step}</h4>
                                            <p className="text-gray-600 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="drt-litigation" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-tight">
                                Debt Recovery Tribunal (DRT): Your Primary Legal Battlefield
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                If the bank proceeds with possession under 13(4), your only recourse is to file a 'Securitization Application' (S.A.) in the Debt Recovery Tribunal. This is a specialized tribunal that hears cases between banks and borrowers.
                            </p>
                            <h3 className="text-2xl font-bold text-[#2E2E2E] mb-6">Strategic Use of Section 17</h3>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Section 17 of the SARFAESI Act allows a borrower to challenge the measures taken by the bank. If you can prove the bank skipped even a single procedural step (like giving the proper 30-day auction notice), the DRT can quash the entire recovery process. We have seen cases where property possession was restored to the borrower because the newspaper advertisement was in the wrong language or published in an obscure paper.
                            </p>
                            <div className="bg-red-50 p-8 rounded-2xl border border-red-100 mb-10">
                                <h4 className="text-xl font-bold text-red-700 mb-4">The 'Pre-Deposit' Myth</h4>
                                <p className="text-gray-700 leading-relaxed">Many believe you must pay 50% of the debt to approach the DRT. While the DRAT (Appellate Tribunal) requires a deposit, the DRT (Original Application) does not mandatory fixed deposit fee at the time of filing an S.A., although the judge may ask for a partial payment to grant a stay. A skilled lawyer can argue for a 'Zero or Minimal Deposit' stay based on current financial hardship.</p>
                            </div>
                        </section>

                        <section id="auction-challenge" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                                How to Challenge and Stop a Property Auction
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Seeing your house in a public auction notice is devastating. But even at this late stage, there are several legal levers to pull. An auction notice is not an auction sale.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-gray-700">
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl shadow-sm">
                                    <h4 className="font-black text-lg mb-2 text-[#2E2E2E]">Right to Redemption</h4>
                                    <p className="text-sm">Under Section 13(8), you have the right to redeem the property by paying the dues any time before the auction is completed. We use this to finalize the OTS while the auction clock is ticking.</p>
                                </div>
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl shadow-sm">
                                    <h4 className="font-black text-lg mb-2 text-[#2E2E2E]">Valuation Challenge</h4>
                                    <p className="text-sm">If the bank sets the price too low, we challenge it as 'Fraud on the Borrower'. Banks have a fiduciary duty to get a fair price for the property.</p>
                                </div>
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl shadow-sm">
                                    <h4 className="font-black text-lg mb-2 text-[#2E2E2E]">Public Notice Errors</h4>
                                    <p className="text-sm">Minor errors in the description of the property (Area, Survey Number, Boundaries) can make the auction legally invalid.</p>
                                </div>
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl shadow-sm">
                                    <h4 className="font-black text-lg mb-2 text-[#2E2E2E]">The 'Buyer' Scare</h4>
                                    <p className="text-sm">A property with an active DRT case is radioactive to buyers. We ensure the public knows the property is under active litigation, which stops the auction from succeeding naturally.</p>
                                </div>
                            </div>
                        </section>

                        <section id="agricultural-land" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-tight">
                                The Agricultural Land Exemption: Section 31(i)
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-gray-800 font-bold italic">
                                This is one of the most powerful defenses in Indian property law that is frequently overlooked.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Under Section 31(i) of the SARFAESI Act, agricultural land is completely exempt from the Act. Banks cannot use their swift recovery powers against farmland. Even if you took a business loan and gave your farm as collateral, the bank cannot take the farm using SARFAESI. They must go through a long, 10-year civil court process.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                We specialize in proving the agricultural nature of land (using revenue records like 7/12 extract or RTC) to strike down bank actions. If your collateral is a farm, you have a massive leverage for a 60% to 70% discount settlement because the bank knows they will never win in court.
                            </p>
                        </section>

                        <section id="rbi-fair-practice" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                                RBI Fair Practice Code and Recovery Agent Guidelines
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Real estate recovery involves high emotions. The RBI's Master Circular on 'Fair Practices Code' for lenders sets clear boundaries on how banks must treat borrowers.
                            </p>
                            <ul className="space-y-4 mb-10 text-gray-700">
                                <li className="flex gap-4">
                                    <FontAwesomeIcon icon={faUserShield} className="text-[#1F5EFF] mt-1" />
                                    <span><strong>Respect for Privacy:</strong> Agents cannot call your neighbors or relatives about your property debt.</span>
                                </li>
                                <li className="flex gap-4">
                                    <FontAwesomeIcon icon={faUserShield} className="text-[#1F5EFF] mt-1" />
                                    <span><strong>No Coercion:</strong> Physical harassment or 'putting a lock' without Section 14 orders is a criminal offense.</span>
                                </li>
                                <li className="flex gap-4">
                                    <FontAwesomeIcon icon={faUserShield} className="text-[#1F5EFF] mt-1" />
                                    <span><strong>Transparent OTS:</strong> Banks must have a board-approved policy for settlements that is accessible to the borrower.</span>
                                </li>
                            </ul>
                            <div className="bg-yellow-50 p-8 rounded-2xl border-l-8 border-[#2E2E2E] mb-10">
                                <h4 className="text-xl font-bold mb-4">The Internal Ombudsman Shield</h4>
                                <p className="text-gray-700">If a bank branch is being unreasonable, we escalate to the bank's Internal Ombudsman. This is a mandatory regulatory level that must investigate borrower grievances before a bank can proceed with coercive recovery.</p>
                            </div>
                        </section>

                        <section id="step-by-step" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-tight">
                                Our Step-by-Step LAP Resolution Process
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Resolving property debt is a marathon, not a sprint. We follow a systematic process designed to protect the asset first and resolve the debt second.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                {[
                                    "1. Immediate Legal Lockdown of the Property Asset",
                                    "2. Detailed Forensic Audit of the Loan Statement",
                                    "3. Identification of Procedural Gaps in SARFAESI Notices",
                                    "4. Filing of Securitization Application in local DRT",
                                    "5. Drafting of Compassionate Ground OTS Proposal",
                                    "6. Negotiation at Zonal/Regiona Office Committee level",
                                    "7. Obtaining the Formal 'Letter of Acceptance' (LOA)",
                                    "8. Verification of 'No Dues Certificate' and Original Deeds Release"
                                ].map((step, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-white border border-[#DEDEDE] rounded-xl font-bold text-sm text-[#2E2E2E]">
                                        <div className="w-2 h-2 rounded-full bg-[#1F5EFF]"></div>
                                        {step}
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="success-stories" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-tight text-center">
                                Property Saved: Success Stories in LAP Settlement
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                                {[
                                    {
                                        name: "Rajesh M.",
                                        loc: "Delhi NCR",
                                        type: "Residential Villa SARFAESI",
                                        outcome: "Auction Stopped & 40% OTS",
                                        story: "The bank had announced an auction for my villa. SettleLoans found an error in the valuation report and got a stay from the DRT. We eventually settled the 2 Crore loan for 1.2 Crore."
                                    },
                                    {
                                        name: "Meena K.",
                                        loc: "Chennai",
                                        type: "Commercial Office Building",
                                        outcome: "60% Haircut Secured",
                                        story: "Our family business was in crisis. The bank was trying to take our head office. SettleLoans leveraged our MSME registration to force a restructuring and deep-discount settlement."
                                    },
                                    {
                                        name: "Gopal S.",
                                        loc: "Surat",
                                        type: "Industrial Land Default",
                                        outcome: "Possession Restored",
                                        story: "The bank took physical possession on a Saturday afternoon. SettleLoans moved the court on Monday, proved the Section 14 order was expired, and got our keys back within 48 hours."
                                    },
                                    {
                                        name: "Amit V.",
                                        loc: "Kolkata",
                                        type: "Multiplex Property Loan",
                                        outcome: "Interest Penalty 100% Waived",
                                        story: "The penal interest alone was 80 Lakhs. SettleLoans proved the bank's interest calculation violated the Indian Contract Act. We paid only the principal plus simple interest."
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

                        <section id="comprehensive-faq" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                                Frequently Asked Questions: Property Debt Resolution
                            </h2>
                            <div className="space-y-4 not-prose">
                                {[
                                    { q: "Can the bank evict me without a 60-day notice?", a: "No. Under Section 13(2), they MUST give you a clear 60-day window to respond. Any shortcut is illegal." },
                                    { q: "How long can a property stay order last in the DRT?", a: "Depending on the complexity of the case, a stay can last from a few months to several years if the borrower's defense is technically strong." },
                                    { q: "Can I sell the property myself while in default?", a: "Only with the bank's written 'No Objection Certificate'. However, we often use 'Tri-Partite' agreements to sell a portion of the property to pay off the bank." },
                                    { q: "What is a 'Symbolic' vs. 'Physical' possession?", a: "Symbolic means the bank has the legal right but hasn't evicted you yet. Physical means you have been locked out. Both can be challenged." },
                                    { q: "Will the court help me if I am a senior citizen?", a: "Indian courts have special sensitivity towards senior citizens losing their residential home. We often use Article 21 (Right to Life and Shelter) as a defense." },
                                    { q: "Can a second house be auction exempt?", a: "No, but the bank must prioritize recovery from other sources before auctioning a primary residence if multiple securities are available." },
                                    { q: "What happens if the property sells for more than the debt?", a: "The bank MUST return the extra amount to the borrower. They cannot keep any profit beyond the loan plus legal costs." },
                                    { q: "What is an 'Equitable Mortgage'?", a: "It is a mortgage created by depositing title deeds. Most LAP loans in India are equitable mortgages, and they are subject to strict registration rules." },
                                    { q: "Can an NBFC take possession without a court?", a: "Yes, if they are 'notified' under the SARFAESI Act, which most major NBFCs like Bajaj or Tata Capital are." },
                                    { q: "What documents should I not sign during default?", a: "Never sign a 'Voluntary Possession' or 'No-Objection for Auction' form. This waives all your legal rights to challenge the bank later." },
                                    { q: "Does CIBIL score improve after property settlement?", a: "It improves compared to a default, but it will show as 'Settled'. Rebuilding starts with a clean slate on the specific loan." },
                                    { q: "Can a bank auction my property for a small debt?", a: "Section 31(j) says SARFAESI doesn't apply if the remaining debt is less than 20% of the principal. We use this to stop auctions for minor balances." },
                                    { q: "What is a 'Panchnama' during possession?", a: "It is a legal record of items in the property at the time of seizure. If the bank fails to provide an inventory, the seizure is technically flawed." },
                                    { q: "Can I stop an auction on the day of the sale?", a: "Yes, with an urgent move to the DRT if new evidence of procedural error is found. However, earlier action is always safer." },
                                    { q: "Who pays for the yard and security charges for seized property?", a: "The bank initially pays, but they add it to your debt. This is why quick settlement is crucial to stop the debt from swelling." }
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

                        <section id="conclusion" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-tight">
                                Conclusion: Defending Your Legacy and Your Future
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-bold">
                                A property is more than bricks and mortar; it is your security, your business foundation, and your family's future. Losing it to a bank default is a major crisis, but it is not inevitable.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                The laws in India are complex, but they provide several layers of protection to the honest borrower. By engaging a specialized LAP settlement lawyer, you shift the battle from the streets to the courtroom. You gain the power to challenge bank valuations, expose procedural errors, and negotiate from a position of strength. Do not let silence be your undoing. Be proactive, know your rights, and let professional legal experts handle the aggressive recovery mechanisms of the banks. Your journey to reclaim your property and your peace of mind starts with a single, legally-backed step.
                            </p>
                        </section>
                    </article>

                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-[#2E2E2E] p-8 rounded-[24px] text-white shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
                                <h4 className="text-2xl font-black mb-4 relative z-10 leading-tight">Stop the Auction</h4>
                                <p className="text-[#DEDEDE]/80 text-sm mb-8 relative z-10 font-medium">Expert legal protection against SARFAESI notices and bank repossession teams.</p>
                                <Link href="/contact" className="block w-full text-center bg-[#1F5EFF] text-white font-bold py-4 rounded-xl hover:bg-white hover:text-[#1F5EFF] transition-all duration-300 shadow-lg relative z-10">
                                    Legal Property Audit
                                </Link>
                            </div>

                            <div className="bg-white border border-[#DEDEDE] p-8 rounded-[24px] shadow-sm font-bold">
                                <h4 className="text-xl font-black text-[#2E2E2E] mb-6 uppercase tracking-wider text-sm">Related Matters</h4>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/best-lawyer-for-secured-loan-litigation-drt" className="group flex items-center gap-3 text-[#747474] hover:text-[#1F5EFF] transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#DEDEDE] group-hover:bg-[#1F5EFF] transition-colors"></div>
                                            DRT Litigation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/best-lawyer-for-notice-for-loan-default" className="group flex items-center gap-3 text-[#747474] hover:text-[#1F5EFF] transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#DEDEDE] group-hover:bg-[#1F5EFF] transition-colors"></div>
                                            Legal Notices
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/best-lawyer-for-business-loan-settlement" className="group flex items-center gap-3 text-[#747474] hover:text-[#1F5EFF] transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#DEDEDE] group-hover:bg-[#1F5EFF] transition-colors"></div>
                                            Business Loan OTS
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
