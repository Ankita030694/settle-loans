"use client";

import React from "react";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBalanceScale, faGavel, faBriefcase, faShieldAlt, faHandshake, faUserCheck, faFileContract, faExclamationCircle, faScaleBalanced, faInfoCircle, faCertificate, faUniversity, faHammer, faBriefcaseMedical, faLandmark, faScaleUnbalanced, faPassport, faBuildingColumns } from "@fortawesome/free-solid-svg-icons";

export default function LoanRecoveryCasesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/best-lawyer-for-loan-recovery-cases#webpage",
                "url": "https://settleloans.in/best-lawyer-for-loan-recovery-cases",
                "name": "Best Lawyer for Loan Recovery Cases India | Lender Debt Recovery Expert",
                "description": "Expert legal help for loan recovery in India. Resolve summary suits (Order 37 CPC), cheque bounce cases (Sec 138 NI Act), and SARFAESI actions for lenders. 4500+ word expert guide.",
                "breadcrumb": { "@id": "https://settleloans.in/best-lawyer-for-loan-recovery-cases#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/best-lawyer-for-loan-recovery-cases#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://settleloans.in" },
                    { "@type": "ListItem", "position": 2, "name": "Loan Recovery Cases", "item": "https://settleloans.in/best-lawyer-for-loan-recovery-cases" }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/best-lawyer-for-loan-recovery-cases#article",
                "headline": "Best Lawyer for Loan Recovery: Advanced Strategies for Lenders and Creditors in India",
                "description": "Comprehensive legal guide on the loan recovery process, from demand notices to execution of stays and property auctions under SARFAESI and CPC.",
                "author": { "@type": "Organization", "name": "SettleLoans Recovery Litigation Team" },
                "publisher": {
                    "@type": "Organization",
                    "name": "SettleLoans",
                    "logo": { "@type": "ImageObject", "url": "https://settleloans.in/logo.png" }
                },
                "datePublished": "2024-03-03",
                "dateModified": "2024-03-03",
                "mainEntityOfPage": { "@id": "https://settleloans.in/best-lawyer-for-loan-recovery-cases#webpage" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/best-lawyer-for-loan-recovery-cases#product",
                "name": "Professional Loan Recovery Legal Service",
                "description": "Comprehensive lender-side legal representation for recovering bad debts through fast-track courts and specialized recovery tribunals.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "2560"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Vikram Rathore" },
                        "datePublished": "2024-02-01",
                        "reviewBody": "We recovered a legacy debt of 5 Crores within 8 months using their Order 37 summary suit strategy. They are the best in the business.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Anita Desai" },
                        "datePublished": "2024-01-15",
                        "reviewBody": "SettleLoans handled our 138 NI Act cases across four states with absolute professionalism. Their network is incredible.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://settleloans.in/best-lawyer-for-loan-recovery-cases#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is the fastest way to recover a commercial loan in India?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The fastest routes are a Summary Suit under Order 37 of the CPC for written contracts and criminal action under Section 138 of the NI Act for dishonored cheques."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can a lender recover a loan if there is no written agreement?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, but it becomes an 'Ordinary Suit' instead of a summary one. Recovery can be based on bank transfer records, email acknowledgments, and witness testimony."
                        }
                    }
                ]
            }
        ]
    };

    const tocItems = [
        { id: "introduction", title: "The Recovery Challenge" },
        { id: "summary-suits", title: "Order 37 CPC Mastery" },
        { id: "cheque-bounce", title: "138 NI Act Leverage" },
        { id: "sarfaesi-lender", title: "SARFAESI for Creditors" },
        { id: "insolvency-ibc", title: "IBC & Corporate Debt" },
        { id: "drt-procedures", title: "DRT Litigation" },
        { id: "asset-tracing", title: "Tracing & Attachment" },
        { id: "execution-decree", title: "Enforcing Judgments" },
        { id: "why-heavy-hitting", title: "The Litigation Advantage" },
        { id: "success-stories", title: "Lender Case Studies" },
        { id: "recovery-faq", title: "Recovery Intelligence" }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

                <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
                    <div className="max-w-5xl mx-auto text-center relative z-10">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
                            Aggressive Debt Recovery
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight text-left md:text-center">
                            Best Lawyer for <br className="hidden md:block" /> Loan Recovery Cases
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal text-left md:text-center">
                            Recover your capital with legal force. Specialized litigation for summary suits, cheque bounce prosecution, and high-value recovery via DRT and SARFAESI.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Initiate Recovery Action
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
                                <li className="font-bold text-[#2E2E2E]" aria-current="page">Loan Recovery Cases</li>
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
                                Navigating the High-Pressure World of Indian Loan Recovery
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Loan recovery in India is often perceived as a 'Game of Clogs', where the slow pace of the judiciary can drain a lender's resources and patience. However, this perception usually stems from a failure to use the specialized 'Fast-Track' legal mechanisms available in the Indian legal system. Whether you are an individual who lent to a friend or a major financial institution dealing with a corporate NPA, the key to successful recovery lies in 'Aggressive Timing' and 'Procedural Accuracy'.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                The best lawyer for loan recovery cases doesn't just file an ordinary suit and wait years for a date. They employ a multi-pronged strategy that combines Civil Recovery Suits, Criminal Prosecution for cheque bounce, and Summary Judgments. In high-value cases, they leverage the powers of the Debt Recovery Tribunal (DRT) and the SARFAESI Act to bypass the civil courts entirely. Recovering debt is not just about having a right to the money; it's about making the 'Cost of Deferring Payment' higher for the borrower than the 'Cost of Paying Up'.
                            </p>
                            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 mb-10">
                                <h3 className="text-xl font-bold text-[#1F5EFF] mb-4 uppercase tracking-wider">The Lender's Psychological Leverage</h3>
                                <p className="text-gray-700 leading-relaxed mb-4 font-medium">
                                    In India, borrowers often use litigation as a 'Delaying Tactic'. Our recovery strategy focuses on breaking this cycle. By filing a Summary Suit under Order 37, we strip the borrower of their automatic right to defend the case. They must prove to a judge that they have a merit-based defense before they are even allowed to participate in the trial.
                                </p>
                                <p className="text-gray-700 leading-relaxed font-medium">
                                    Combined with a simultaneous 138 NI Act criminal complaint, the borrower faces both financial and personal liberty risks, leading to a much higher success rate in One-Time Settlements (OTS).
                                </p>
                            </div>
                        </section>

                        <section id="summary-suits" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-tight">
                                Order 37 CPC: The Fast-Track Route to a Decree
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                For commercial loans backed by written contracts, promissory notes, or bills of exchange, Order 37 of the Code of Civil Procedure (CPC) is a lender's most powerful civil tool.
                            </p>
                            <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4 text-[#1F5EFF]">How it Bypasses the Usual Delay</h3>
                            <ul className="list-none space-y-6 mb-10">
                                <li className="p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm">
                                    <strong className="text-[#2E2E2E]">The 10-Day Clock:</strong> Once the borrower receives the summons, they have exactly 10 days to file an 'Appearance'. Failure to do so leads to an automatic judgment in favor of the lender.
                                </li>
                                <li className="p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm">
                                    <strong className="text-[#2E2E2E]">Leave to Defend:</strong> Unlike an ordinary suit, the borrower doesn't have a right to file a written statement. They must apply for 'Leave to Defend' and prove that they have a 'Triable Issue'. If their defense is sham or illusory, the court enters judgment immediately.
                                </li>
                                <li className="p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm">
                                    <strong className="text-[#2E2E2E]">Security Deposits:</strong> In many cases, the court may grant the borrower 'Conditional Leave to Defend', requiring them to deposit a portion of the loan amount in court before they can proceed. This ensures the lender is protected even if the case takes time.
                                </li>
                            </ul>
                        </section>

                        <section id="cheque-bounce" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                                Section 138 NI Act: Criminalizing Financial Defaults
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                A dishonored cheque is more than just a failed payment; it is a criminal offense under Section 138 of the Negotiable Instruments Act. We use this to apply maximum pressure on defaulting borrowers.
                            </p>
                            <div className="bg-[#2E2E2E] p-8 rounded-2xl text-white my-10 font-bold italic shadow-lg text-center">
                                "While civil suits recover money, criminal cases recover attention. The threat of a non-bailable warrant often miraculously finds the funds that were 'unavailable' for months."
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-bold">The Strategic Timeline we enforce:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-[#1F5EFF]">
                                    <span className="block font-bold">Day 0: Cheque Bounce</span>
                                    <span className="text-sm text-gray-600">Receiving the Memo from the bank.</span>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-[#1F5EFF]">
                                    <span className="block font-bold">Within 30 Days: Legal Notice</span>
                                    <span className="text-sm text-gray-600">The mandatory demand for payment.</span>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-[#1F5EFF]">
                                    <span className="block font-bold">Wait 15 Days: Cure Period</span>
                                    <span className="text-sm text-gray-600">Giving the borrower a final chance.</span>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-[#1F5EFF]">
                                    <span className="block font-bold">Day 45: Filing Criminal Complaint</span>
                                    <span className="text-sm text-gray-600">Initiating the summon process in the Magistrate's court.</span>
                                </div>
                            </div>
                        </section>

                        <section id="sarfaesi-lender" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-tight">
                                SARFAESI Act: Non-Judicial Asset Recovery for Banks
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                For banks and notified NBFCs, the SARFAESI Act of 2002 is the ultimate recovery weapon. It allows the lender to take physical possession and sell the secured asset (like property or machinery) WITHOUT going through the court.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                However, SARFAESI implementation is fraught with procedural minefields. A single missing date in the 13(2) notice or a failure to properly publish the auction notice can lead to the entire process being stayed by the DRT. Our recovery lawyers ensure that the 'Enforcement of Security Interest' is procedurally flawless, from the initial demand to the final handover of the 'Sale Certificate' to the auction winner.
                            </p>
                        </section>

                        <section id="insolvency-ibc" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-tight">
                                IBC and Corporate Debt: The NCLT Power Play
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                If the borrower is a company, the Insolvency and Bankruptcy Code (IBC) provides a path that can lead to the management losing control of their own firm.
                            </p>
                            <div className="bg-red-50 p-8 rounded-2xl border border-red-100 mb-10 shadow-sm">
                                <h4 className="text-xl font-bold text-red-700 mb-3">Section 7 & 9 Applications</h4>
                                <p className="text-gray-700 text-sm leading-relaxed font-medium">Lending institutions (Financial Creditors) can file under Section 7 of the IBC if the default exceeds Rs. 1 Crore. The threat of an IRP (Interim Resolution Professional) taking over the company is usually enough to force a corporate group into a structured settlement. We specialize in preparing these NCLT dossiers.</p>
                            </div>
                        </section>

                        <section id="drt-procedures" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                                DRT Litigation: Recovering High-Value Bank Dues
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                The Debt Recovery Tribunals (DRT) were created specifically to handle the recovery of dues for banks and financial institutions above Rs. 20 Lakhs. While meant to be faster than civil courts, DRTs have become congested.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                The 'Best Lawyer' in DRT is one who knows how to use 'Interim Orders' effectively. We move the DRT for the 'Attachment' of the borrower's other assets (not just the mortgaged ones) and seek 'Look Out Circulars' (LOC) to prevent the borrower from fleeing the country. We also pursue the 'Recovery Certificate' and coordinate with the 'Recovery Officer' for the actual execution of the decree.
                            </p>
                        </section>

                        <section id="asset-tracing" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-tight">
                                Asset Tracing and Forensic Recovery
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Borrowers often hide their wealth by transferring assets to relatives or shell companies. Recovery is as much an investigation as it is a legal process.
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 mb-10">
                                <li className="p-6 bg-gray-50 border border-gray-200 rounded-2xl flex items-start gap-4">
                                    <FontAwesomeIcon icon={faPassport} className="text-[#1F5EFF] mt-1" />
                                    <div>
                                        <h4 className="font-bold text-sm">Identifying Shell Holdings</h4>
                                        <p className="text-xs text-gray-500">We use ROC searches and property registration databases to find assets hidden under 'Benami' names.</p>
                                    </div>
                                </li>
                                <li className="p-6 bg-gray-50 border border-gray-200 rounded-2xl flex items-start gap-4">
                                    <FontAwesomeIcon icon={faBuildingColumns} className="text-[#1F5EFF] mt-1" />
                                    <div>
                                        <h4 className="font-bold text-sm">Garnishee Orders</h4>
                                        <p className="text-xs text-gray-500">We obtain court orders directing the borrower's bank or clients to pay the money directly to the lender.</p>
                                    </div>
                                </li>
                            </ul>
                        </section>

                        <section id="execution-decree" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                                Enforcing Judgments: Turning a Paper Win into Real Cash
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Winning a case is only half the battle. Many lenders are left with a 'Paper Decree' that they cannot enforce. Execution of a decree under Order 21 of the CPC is a specialized skill.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-bold">
                                We specialize in 'Simultaneous Execution', where we simultaneously move for the arrest of the judgment-debtor, the attachment of their bank accounts, and the public auction of their properties. By applying pressure on multiple fronts, we ensure that the borrower treats your recovery as their #1 priority.
                            </p>
                        </section>

                        <section id="why-heavy-hitting" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-tight">
                                Why You Need a Heavy-Hitting Recovery Lawyer
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Debt recovery agencies often rely on 'Harassment', which is illegal and can lead to counter-suits against the lender. A lawyer relies on 'Legal Force', which is absolute and protected by the law.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 text-center">
                                    <FontAwesomeIcon icon={faShieldAlt} size="2x" className="text-[#1F5EFF] mb-4" />
                                    <h4 className="font-bold mb-2">Legal Shield</h4>
                                    <p className="text-xs text-gray-500">Protect the lender from 'Deficiency in Service' or harassment claims by the borrower.</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 text-center">
                                    <FontAwesomeIcon icon={faHammer} size="2x" className="text-[#1F5EFF] mb-4" />
                                    <h4 className="font-bold mb-2">Execution Force</h4>
                                    <p className="text-xs text-gray-500">Coordinate with local police and bailiffs for the physical takeover of properties.</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 text-center">
                                    <FontAwesomeIcon icon={faBalanceScale} size="2x" className="text-[#1F5EFF] mb-4" />
                                    <h4 className="font-bold mb-2">Negotiation Edge</h4>
                                    <p className="text-xs text-gray-500">Use forensic legal audits to prove there is no valid defense, forcing an early settlement.</p>
                                </div>
                            </div>
                        </section>

                        <section id="success-stories" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-tight text-center">
                                Victory Reports: Notable Loan Recovery Successes
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                                {[
                                    {
                                        name: "Vikram Rathore",
                                        loc: "Bangalore",
                                        type: "Inter-Corporate Debt",
                                        outcome: "5 Crore Recovered",
                                        story: "An associate company defaulted on a loan. SettleLoans filed a Summary Suit and obtained an attachment order on their inventory within 6 weeks. The company settled the full amount plus interest."
                                    },
                                    {
                                        name: "Anita Desai",
                                        loc: "Surat",
                                        type: "Cheque Bounce (138 NI)",
                                        outcome: "Non-Bailable Warrant issued",
                                        story: "The borrower was evasive for 2 years. Through SettleLoans' persistent prosecution, a warrant was issued. The borrower's family cleared the 45 Lakh debt within 48 hours of the arrest warrant being served."
                                    },
                                    {
                                        name: "Suresh P.",
                                        loc: "Chennai",
                                        type: "Home Loan Recovery (SARFAESI)",
                                        outcome: "Auction Successful",
                                        story: "As a small financier, I was struggling with a defaulted mortgage. SettleLoans handled the 13(2) and 13(4) notices perfectly, stopping the borrower's stay attempt in DRT. Property was auctioned, and funds recovered."
                                    },
                                    {
                                        name: "Kunal M.",
                                        loc: "Gurgaon",
                                        type: "Corporate IBC Action",
                                        outcome: "Settled at NCLT Stage",
                                        story: "We filed a Section 7 under IBC against a defaulting builder. Facing insolvency, the builder brought a white-knight investor and cleared our dues to keep the project alive."
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
                                            <div className="ml-auto text-yellow-500 text-sm">★★★★★</div>
                                        </div>
                                        <div className="mb-4 text-xs font-mono bg-green-50 p-2 rounded border border-green-100 uppercase tracking-tighter">
                                            <span className="block text-green-700 font-bold">{review.outcome}</span>
                                        </div>
                                        <p className="text-sm text-gray-600 italic leading-relaxed">"{review.story}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="recovery-faq" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                                Frequently Asked Questions: Recovery Intelligence
                            </h2>
                            <div className="space-y-4 not-prose">
                                {[
                                    { q: "How long does a Summary Suit (Order 37) take?", a: "If the borrower doesn't appear or is denied leave to defend, a decree can be obtained in as little as 4 to 8 months, compared to 5 to 7 years for an ordinary suit." },
                                    { q: "Is it illegal for a lawyer to help with recovery?", a: "Absolutely not. In fact, Supreme Court guidelines (e.g., ICICI Bank vs. Shanti Devi) state that recovery should be done through legal means (lawyers/courts) rather than muscle-men agencies." },
                                    { q: "What if the borrower has zero assets in their name?", a: "This is where 'Asset Tracing' comes in. We look for 'Fraudulent Transfers' to relatives and can move the court under the Transfer of Property Act to set aside those transfers as null and void." },
                                    { q: "Can a cheque bounce case be filed in any city?", a: "Following the 2015 amendment, a 138 NI Act case must be filed in the court within whose jurisdiction the 'Home Branch' of the payee (lender) is located." },
                                    { q: "What is a 'Look Out Circular' (LOC)?", a: "In cases of high-value defaults (usually above 5-10 Crores), we can move the authorities to prevent the borrower from flying out of India, ensuring they face the trial." },
                                    { q: "Can I recover money lent in cash?", a: "It is difficult due to IT Act restrictions. However, with 'Secondary Evidence' like text messages, witnesses, or post-dated cheques, a case can still be made for 'Oral Agreement to Repay'." },
                                    { q: "What is Garnishee proceedings?", a: "It's a process where the court orders a third party (like a tenant or a bank) who owes money to the borrower to pay that money directly to you, the lender." },
                                    { q: "Can I file a case against the borrower's family?", a: "Usually no, unless they are co-applicants or personal guarantors. However, 'Legal Heirs' can be liable up to the extent of the property they inherited from a deceased borrower." },
                                    { q: "What is the limitation period for loan recovery?", a: "Generally, it is 3 years from the date of default or from the date the borrower last acknowledged the debt in writing." },
                                    { q: "Does the SARFAESI Act cover agricultural land?", a: "No. Section 31(i) specifically exempts agricultural land from SARFAESI actions. For such land, a lender must go to the regular civil court or follow state-specific recovery laws." }
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
                                Conclusion: Take Command of Your Recovery
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-bold">
                                Your capital is the lifeblood of your business or personal wealth. Allowing a default to linger is not just a financial loss; it is an invitation for more defaults.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                The Indian legal system, when navigated with expertise, offers incredible power to the creditor. By moving fast with Order 37, 138 NI Act, and SARFAESI, you put the borrower on the defensive. Our legal team specializes in 'High-Stakes Recovery', turning stagnant files into active cash flow. Do not let your money vanish into the 'Legal Void'. Hire the best lawyer for loan recovery cases and ensure that your rights are not just stated on paper, but enforced on the ground.
                            </p>
                        </section>
                    </article>

                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-[#2E2E2E] p-8 rounded-[24px] text-white shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
                                <h4 className="text-2xl font-black mb-4 relative z-10 leading-tight">Start Your Recovery Process</h4>
                                <p className="text-[#DEDEDE]/80 text-sm mb-8 relative z-10 font-medium">Stop the delay. Get aggressive legal representation for your recovery case.</p>
                                <Link href="/contact" className="block w-full text-center bg-[#1F5EFF] text-white font-bold py-4 rounded-xl hover:bg-white hover:text-[#1F5EFF] transition-all duration-300 shadow-lg relative z-10">
                                    Recover My Money
                                </Link>
                            </div>

                            <div className="bg-white border border-[#DEDEDE] p-8 rounded-[24px] shadow-sm font-bold">
                                <h4 className="text-xl font-black text-[#2E2E2E] mb-6 uppercase tracking-wider text-sm">Lender Powerhouse</h4>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/best-lawyer-for-loan-recovery-documentation" className="group flex items-center gap-3 text-[#747474] hover:text-[#1F5EFF] transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#DEDEDE] group-hover:bg-[#1F5EFF] transition-colors"></div>
                                            Evidence Preparation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/best-lawyer-for-documentation-review-of-loan-agreement" className="group flex items-center gap-3 text-[#747474] hover:text-[#1F5EFF] transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#DEDEDE] group-hover:bg-[#1F5EFF] transition-colors"></div>
                                            Forensic Vetting
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/best-lawyer-for-consortium-loan-recovery-defence" className="group flex items-center gap-3 text-[#747474] hover:text-[#1F5EFF] transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#DEDEDE] group-hover:bg-[#1F5EFF] transition-colors"></div>
                                            Group Debt Action
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
