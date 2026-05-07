"use client";

import React from "react";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";

export default function BankLoanSettlementRulesPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "@id": "https://settleloans.in/bank-loan-settlement-rules#article",
                "headline": "Bank Loan Settlement Rules 2024: RBI Guidelines, Procedure & CIBIL Impact",
                "description": "Comprehensive guide to bank loan settlement rules in India. Learn about RBI guidelines, one-time settlement (OTS) procedures, and how to settle your debt while managing your credit score.",
                "image": "https://settleloans.in/images/loan-settlement-rules.jpg",
                "author": { "@type": "Organization", "name": "SettleLoans" },
                "publisher": {
                    "@type": "Organization",
                    "name": "SettleLoans",
                    "logo": { "@type": "ImageObject", "url": "https://settleloans.in/logo.png" }
                },
                "datePublished": "2024-05-07",
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://settleloans.in/bank-loan-settlement-rules" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/bank-loan-settlement-rules#product",
                "name": "Professional Loan Settlement Consultancy",
                "description": "Expert legal and financial assistance for bank loan settlements, OTS negotiations, and credit score management.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "2150"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Rahul Sharma" },
                        "datePublished": "2024-02-10",
                        "reviewBody": "SettleLoans helped me navigate the complex RBI guidelines for my personal loan settlement. I got a 65% waiver on my outstanding dues.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Anita Desai" },
                        "datePublished": "2024-03-15",
                        "reviewBody": "Excellent service. They handled the bank negotiations professionally and ensured I got my No Dues Certificate on time.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Suresh Mani" },
                        "datePublished": "2024-04-01",
                        "reviewBody": "Was struggling with credit card debt for years. Their team explained the settlement rules clearly and helped me close the account.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Megha Gupta" },
                        "datePublished": "2024-04-20",
                        "reviewBody": "The best decision I made for my financial health. They simplified the entire settlement process and dealt with the recovery agents.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Vikram Rathore" },
                        "datePublished": "2024-05-01",
                        "reviewBody": "Highly recommend SettleLoans for anyone facing legal notices. They know the SARFAESI and RBI rules inside out.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What are the latest RBI guidelines for loan settlement?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "RBI's latest framework mandates banks to have board-approved policies for compromise settlements. These policies must ensure transparency, uniformity in treatment of borrowers, and adhere to fair practice codes without arbitrary decisions."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does a loan settlement affect my CIBIL score?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, a settlement is reported as 'Settled' to credit bureaus, which negatively impacts your score. However, it is often a better alternative to remaining in a perpetual state of default or facing legal action."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is a One-Time Settlement (OTS)?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "OTS is a scheme where the bank agrees to accept a lump sum amount, which is less than the total outstanding debt, to close the loan account permanently."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I settle a secured loan like a home loan?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, but it is more complex as the bank has collateral. Settlements for secured loans usually happen under the threat of SARFAESI actions or during DRT proceedings."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What percentage of the loan can be settled?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The settlement amount usually ranges between 30% and 70% of the total outstanding, depending on the loan type, age of the NPA, and the borrower's negotiation skills."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How long does the settlement process take?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The negotiation phase can take 1 to 3 months. Once the settlement letter is issued, the payment is typically made within 30 to 90 days."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is a No Dues Certificate mandatory after settlement?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely. The NDC is your legal proof that the bank has no further claims against you for that specific loan account."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can recovery agents contact me after a settlement agreement?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Once a formal settlement agreement is signed and payments are made as per the terms, any further recovery action or contact is illegal and can be reported to the RBI Ombudsman."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What happens if I miss a settlement payment?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Missing a payment usually voids the settlement agreement, and the bank may reinstate the full outstanding amount including original interest and penalties."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is it better to restructure a loan or settle it?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Restructuring is better for your credit score as the account stays 'Current'. Settlement is a last resort when repayment is completely impossible."
                        }
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://settleloans.in" },
                    { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://settleloans.in/resources" },
                    { "@type": "ListItem", "position": 3, "name": "Bank Loan Settlement Rules", "item": "https://settleloans.in/bank-loan-settlement-rules" }
                ]
            }
        ]
    };

    const tocItems = [
        { id: "introduction", title: "Understanding Bank Loan Settlement" },
        { id: "rbi-guidelines", title: "Latest RBI Guidelines 2024" },
        { id: "legal-framework", title: "The Legal Framework: SARFAESI & DRT" },
        { id: "eligibility", title: "Eligibility for Loan Settlement" },
        { id: "settlement-procedure", title: "Step-by-Step Settlement Procedure" },
        { id: "ots-schemes", title: "One-Time Settlement (OTS) Schemes" },
        { id: "cibil-impact", title: "CIBIL Score & Credit Impact" },
        { id: "negotiation-strategies", title: "Effective Negotiation Strategies" },
        { id: "unsecured-vs-secured", title: "Unsecured vs Secured Settlements" },
        { id: "post-settlement", title: "Post-Settlement Checklist" },
        { id: "success-stories", title: "Success Stories" },
        { id: "faqs", title: "Frequently Asked Questions" }
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
                            Debt Resolution Guide
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                            Comprehensive <span className="text-[#1F5EFF]">Bank Loan Settlement Rules</span> for 2024
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.2] font-normal">
                            Master the legalities of one-time settlements in India. Understand RBI guidelines, protect your legal rights, and navigate the path to financial freedom with expert insights.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact-us" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Consult Settlement Expert
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
                                <li><Link href="/resources" className="hover:text-[#1F5EFF] transition-colors">Resources</Link></li>
                                <li><span className="text-gray-300">/</span></li>
                                <li className="font-bold text-[#2E2E2E]" aria-current="page">Loan Settlement Rules</li>
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
                                Navigating the Maze of <span className="text-[#1F5EFF]">Bank Loan Settlement Rules</span> in India
                            </h2>
                            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6 font-bold">
                                    Financial crises can strike anyone, leading to missed EMIs and a mounting debt burden that seems impossible to clear. In such scenarios, bank loan settlement becomes a critical legal tool for borrowers to regain control of their financial lives.
                                </p>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                                    Loan settlement, often termed as a compromise settlement or One-Time Settlement (OTS), is a process where the lender agrees to accept a partial payment of the outstanding debt as a final resolution. This isn't just a friendly handshake; it's a structured legal process governed by stringent rules set by the Reserve Bank of India (RBI) and internal bank policies. Understanding these rules is the difference between a successful fresh start and a prolonged legal nightmare.
                                </p>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                                    The landscape of Indian banking recovery has undergone a seismic shift with the introduction of the Insolvency and Bankruptcy Code (IBC) and the strengthening of the SARFAESI Act. However, for individual borrowers and MSMEs, the path of compromise settlement remains the most viable exit strategy. It allows for a dignified closure of debt without the absolute destruction of assets that follows an auction or a bankruptcy filing.
                                </p>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6 font-bold text-[#1F5EFF]">
                                    At SettleLoans, we believe that every borrower deserves a second chance. Our guide breaks down the complex regulatory landscape into actionable knowledge, helping you navigate the SARFAESI Act, RBI's fair practice codes, and the internal machinery of Indian banks to achieve the most favorable settlement terms possible.
                                </p>
                            </div>
                        </section>

                        <section id="rbi-guidelines" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">The Core Pillar: Latest RBI Guidelines 2024</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The Reserve Bank of India (RBI) has consistently evolved the framework for loan settlements to ensure that both lenders and borrowers are treated fairly. The 2024 guidelines emphasize a more transparent and systematic approach to compromise settlements.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                One of the most significant updates in the recent RBI circulars is the focus on 'Regulatory Framework for Compromise Settlements and Technical Write-offs'. This framework is designed to provide a level playing field. Historically, large corporate borrowers had easier access to restructuring and settlements, while individual borrowers were often left at the mercy of aggressive recovery agents. The new rules aim to democratize this process.
                            </p>
                            <div className="space-y-6 mb-10">
                                <div className="p-8 bg-gray-50 border-l-8 border-[#1F5EFF] rounded-r-2xl shadow-sm">
                                    <h4 className="font-bold text-2xl mb-4 text-[#2E2E2E]">Board-Approved Settlement Policies</h4>
                                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                                        Every regulated entity, including nationalized banks, private banks, and NBFCs, must have a board-approved policy for compromise settlements. This means that settlement isn't at the whim of a branch manager; it must follow a predefined logic regarding the haircut (waiver) amount and eligibility criteria.
                                    </p>
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        The board is now responsible for overseeing the implementation of these policies, ensuring that the process is not biased. This adds a layer of accountability that was previously missing in many private lending institutions.
                                    </p>
                                </div>
                                <div className="p-8 bg-gray-50 border-l-8 border-[#1F5EFF] rounded-r-2xl shadow-sm">
                                    <h4 className="font-bold text-2xl mb-4 text-[#2E2E2E]">Fair Treatment and Non-Discrimination</h4>
                                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                                        The RBI mandates that banks must treat similar cases with uniformity. If a bank offers a 50% waiver to one borrower with a specific hardship profile, it cannot arbitrarily deny a similar offer to another borrower in the same situation. This 'equity' clause is a powerful tool in legal negotiations.
                                    </p>
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        Transparency in the calculation of the 'Realizable Value' of the asset and the 'Cost of Litigation' must be maintained. Banks must demonstrate why they chose a specific settlement amount over pursuing legal recovery.
                                    </p>
                                </div>
                                <div className="p-8 bg-gray-50 border-l-8 border-[#1F5EFF] rounded-r-2xl shadow-sm">
                                    <h4 className="font-bold text-2xl mb-4 text-[#2E2E2E]">Cooling-Off Period for Fresh Loans</h4>
                                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                                        A key rule in the latest guidelines is the mandatory cooling-off period. After a compromise settlement, a borrower is generally barred from taking fresh loans from the same institution for a specific period (often 12 months) as a measure to prevent the moral hazard of serial defaults.
                                    </p>
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        This cooling-off period is a trade-off. While it restricts immediate credit, it provides the borrower time to stabilize their finances and start rebuilding their credit profile through non-credit means.
                                    </p>
                                </div>
                            </div>
                            <p className="text-lg leading-relaxed mb-6 italic text-gray-500 bg-yellow-50 p-4 border rounded-xl">
                                <strong>Expert Insight:</strong> The RBI's Integrated Ombudsman scheme provides a recourse if a bank fails to follow its own board-approved policy or engages in coercive recovery practices during the settlement negotiation phase. If a bank refuses to even entertain a valid settlement proposal without a valid reason, it could be seen as a violation of fair practice codes.
                            </p>
                        </section>

                        <section id="legal-framework" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">The Legal Pressure Points: SARFAESI & DRT</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                For secured loans like home or business property loans, the settlement rules are intertwined with the SARFAESI Act (Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act). This act is the bank's most potent weapon, but it also has built-in checks that a savvy borrower can use to force a settlement.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                When a loan is declared an NPA (Non-Performing Asset), banks typically issue a 13(2) notice under the SARFAESI Act, giving the borrower 60 days to clear all dues. If this doesn't happen, they move to symbolic and then physical possession under Section 13(4) and Section 14.
                            </p>
                            <p className="text-lg leading-relaxed mb-6 font-bold">
                                How settlement works here:
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 mb-10">
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl">
                                    <h4 className="font-bold text-[#1F5EFF] mb-3">Pre-Litigation Settlement</h4>
                                    <p className="text-sm">Settling before the bank files an application in the DRT (Debt Recovery Tribunal) or before physical possession is the ideal scenario. It saves the bank legal costs and recovery time, making them more open to a reasonable haircut. This is the stage where the 'Fear of Litigation' works in your favor.</p>
                                </div>
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl">
                                    <h4 className="font-bold text-[#1F5EFF] mb-3">During DRT Proceedings</h4>
                                    <p className="text-sm">If the case is already in the DRT, the settlement rules change. The settlement proposal is often presented before the Presiding Officer as a 'Consent Term'. This gives the settlement a court-sanctioned legal weight, protecting you from future reinterpretations of the agreement.</p>
                                </div>
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl">
                                    <h4 className="font-bold text-[#1F5EFF] mb-3">Lok Adalat Settlements</h4>
                                    <p className="text-sm">Banks frequently use Lok Adalats (People's Courts) for bulk settlements. Rules here are more relaxed, and the settlement decree is final and non-appealable. Lok Adalats are especially effective for smaller debts where the cost of a full trial is disproportionate to the recovery amount.</p>
                                </div>
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl">
                                    <h4 className="font-bold text-[#1F5EFF] mb-3">Right of Redemption</h4>
                                    <p className="text-sm">Under Section 60 of the Transfer of Property Act, you have the right to redeem your property by paying the full settled amount anytime before the auction is finalized. This is a critical legal safety net that allows you to stop an auction even at the eleventh hour if you can arrange the funds.</p>
                                </div>
                            </div>
                        </section>

                        <section id="eligibility" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Who is Eligible for a Bank Loan Settlement?</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Not everyone can simply walk into a bank and ask for a waiver. The rules define specific eligibility criteria to ensure that only genuine cases receive the benefit of a write-off. Banks are paranoid about 'Wilful Defaulters': those who have the money but refuse to pay.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Eligibility is generally a mix of objective criteria (NPA age) and subjective assessment (Hardship proof). Banks look at your 'Capacity to Pay' versus your 'Willingness to Resolve'.
                            </p>
                            <div className="bg-blue-50 p-8 rounded-xl border border-blue-200 my-8">
                                <h4 className="font-bold text-blue-900 mb-4 text-xl">The "Genuine Hardship" Rule</h4>
                                <p className="text-base text-blue-800 leading-relaxed mb-4">
                                    Banks require proof that you are unable to pay the full amount due to reasons beyond your control. This isn't just about saying you are broke; it's about proving it with documentation.
                                </p>
                                <ul className="space-y-3 text-blue-800 list-disc ml-6">
                                    <li><strong>NPA Status:</strong> Most banks only consider settlement after the account has been an NPA for at least 6 to 12 months. Early settlements are rare unless there is a severe medical crisis or death.</li>
                                    <li><strong>Unsecured Nature:</strong> Personal loans and credit card debts are easier to settle as the bank has no collateral. The risk of 0% recovery is higher for the bank, making them more flexible.</li>
                                    <li><strong>Intent to Resolve:</strong> A history of regular communication and a clear lump-sum offer significantly increases eligibility. If you have been 'absconding', the bank will be much tougher.</li>
                                    <li><strong>Age of Debt:</strong> The older the debt, the higher the chances of a massive waiver. Debt that is 3-5 years old is often sold to ARCs, where settlement rules are even more relaxed.</li>
                                </ul>
                            </div>
                        </section>

                        <section id="settlement-procedure" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">The 5-Step Settlement Procedure</h2>
                            <p className="text-lg leading-relaxed mb-8">
                                Navigating the settlement process requires a disciplined approach. Any procedural error, such as paying money without a formal letter, can be catastrophic. The bank's internal processes are slow, and you must stay on top of the paperwork.
                            </p>
                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 bg-[#1F5EFF] text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-2">Internal Assessment and Proposal</h4>
                                        <p className="text-base leading-relaxed">Calculate exactly how much you can afford as a lump sum. Draft a formal letter to the bank's Nodal Officer or the concerned Asset Recovery Branch explaining your hardship. Include your last 3 years' ITRs, bank statements, and medical/business loss proofs. An incomplete proposal is usually rejected instantly.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 bg-[#1F5EFF] text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-2">Negotiation and Counter-Offers</h4>
                                        <p className="text-base leading-relaxed">The bank will almost always reject the first offer. They will counter with a higher amount, often demanding 80-90% of the principal. This phase requires patience. You must consistently highlight why their demand is unrealistic given your current assets. This is where professional negotiators add the most value.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 bg-[#1F5EFF] text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-2">Receipt of Formal Settlement Letter</h4>
                                        <p className="text-base leading-relaxed font-bold text-red-600">CRITICAL: Never pay a single rupee until you have a formal settlement letter on the bank's official letterhead, signed by an authorized officer (Scale IV and above for most PSU banks). Verify the 'Settlement Amount', 'Payment Schedule', and the specific clause that says all legal cases will be withdrawn upon final payment.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 bg-[#1F5EFF] text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-2">Payment Execution</h4>
                                        <p className="text-base leading-relaxed">Ensure payments are made within the strict timelines mentioned in the letter. Even a one-day delay can void the settlement. Use traceable methods like Demand Drafts or RTGS. If paying in installments, ensure the bank acknowledges each payment in writing.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 bg-[#1F5EFF] text-white rounded-full flex items-center justify-center font-bold text-xl">5</div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-2">Closure and No Dues Certificate</h4>
                                        <p className="text-base leading-relaxed">Once the final payment is cleared, the bank must issue a No Dues Certificate (NDC) or a 'Full and Final Closure Letter'. They should also return any original property documents (in case of secured loans) and update the account status as 'Settled' with CIBIL. Do not consider the matter closed until you have the physical NDC in hand.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="ots-schemes" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">One-Time Settlement (OTS) Schemes: The Seasonal Opportunities</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Banks in India often launch 'OTS Festivals' or seasonal schemes, particularly towards the end of the financial year (March) or the end of quarters. These schemes are designed to clean up their balance sheets by settling a large number of old NPAs. These are 'Non-Discretionary' schemes: meaning if you fit the criteria, the branch manager has no choice but to offer you the settlement.
                            </p>
                            <p className="text-lg leading-relaxed mb-6 font-bold">
                                Why OTS schemes are beneficial:
                            </p>
                            <ul className="space-y-4 mb-10">
                                <li className="flex items-start">
                                    <span className="text-[#1F5EFF] mr-2">✔</span>
                                    <span><strong>Higher Haircuts:</strong> During special schemes, the percentage of waiver allowed can go as high as 70% to 80% for very old debts, especially for marginalized sectors like agriculture or education.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#1F5EFF] mr-2">✔</span>
                                    <span><strong>Faster Approval:</strong> Since these are pre-approved schemes by the bank's head office, the local branch has higher delegated powers. This reduces the time taken for approval from months to weeks.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#1F5EFF] mr-2">✔</span>
                                    <span><strong>Standardized Terms:</strong> The terms are fixed and published. This eliminates the 'hidden charges' or 'corrupt practices' that sometimes creep into individual case negotiations.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#1F5EFF] mr-2">✔</span>
                                    <span><strong>Waiver of Penal Interest:</strong> OTS schemes almost always waive 100% of the penal interest and a large portion of the regular interest, focusing mostly on recovering the principal.</span>
                                </li>
                            </ul>
                        </section>

                        <section id="write-off-vs-settlement" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Technical Nuances: Write-off vs. Compromise Settlement</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Many borrowers confuse a 'Technical Write-off' with a settlement. A technical write-off is an internal accounting entry made by the bank to remove the bad loan from its active books for tax and capital adequacy purposes. It DOES NOT mean the borrower is free from the debt.
                            </p>
                            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200 mb-8">
                                <p className="mb-4"><strong>Compromise Settlement:</strong> Both parties agree to a reduced amount. Once paid, the debt is legally extinguished. The bank cannot sue you further.</p>
                                <p className="mb-4"><strong>Technical Write-off:</strong> The bank still owns the debt and can continue recovery efforts, including filing cases in the DRT or sending recovery agents. They just don't show it as an asset in their balance sheet anymore.</p>
                                <p className="font-bold text-red-600">Your goal should always be a Compromise Settlement, not just hoping for a Write-off.</p>
                            </div>
                        </section>

                        <section id="cibil-impact" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">The CIBIL Reality: What Happens After Settlement?</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                One of the biggest misconceptions is that a settlement 'clears' your credit history. It does not. It marks the account as 'Settled', which is a significant red flag for future lenders. A 'Settled' status tells a bank: "This person borrowed money but didn't pay it back in full."
                            </p>
                            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 my-8">
                                <p className="text-lg font-bold mb-4">The Credit Score Fallout:</p>
                                <p className="mb-4">A settlement can lead to a drop of 70 to 100 points in your credit score. More importantly, the 'Settled' status remains on your report for up to 7 years. Most automated lending systems (like those for instant apps) will instantly reject a 'Settled' profile.</p>
                                <p className="font-bold text-[#1F5EFF] mb-2">Is it still worth it?</p>
                                <p className="mb-4">Yes, because the alternative; an active 'Default' or 'NPA' status; is far worse. An active default shows that you are still in debt and could face legal action. A 'Settled' status, while negative, shows that you have resolved the dispute and are no longer a target for recovery.</p>
                                <p className="text-sm italic">Tip: After 2 years of the settlement, many banks might consider you for a 'Secured Credit Card' or a small loan if you can show a stable income again.</p>
                            </div>
                        </section>

                        <section id="tax-implications" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Income Tax Implications of Loan Settlement</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                This is the most ignored part of the settlement process. Under the Income Tax Act, a waiver of debt can sometimes be treated as 'Income from Other Sources'.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                For businesses, the waived amount is often treated as a remission of liability under Section 41(1) of the Income Tax Act and is taxable. For individuals, if the loan was taken for personal purposes, the tax treatment is more complex. Recent judgments suggest that if the loan was not used to acquire a capital asset, the waiver might not be taxable as income. However, you must consult a CA to ensure you don't get a tax notice a year after your settlement.
                            </p>
                            <p className="text-lg leading-relaxed mb-6 font-bold text-red-600">
                                Always ask the bank if they will be deducting TDS on the waived amount. Usually, they don't, but you must be prepared for the tax liability on the 'benefit' you received.
                            </p>
                        </section>

                        <section id="negotiation-strategies" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Pro Negotiation Strategies for Maximum Waiver</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Negotiating with a bank is not about begging; it's about making them realize that settling is in their best interest. You are presenting them with a 'Sunk Cost' argument.
                            </p>
                            <div className="bg-[#1F5EFF]/5 p-8 rounded-3xl border border-[#1F5EFF]/20 mb-10">
                                <h4 className="text-2xl font-black text-[#2E2E2E] mb-6">The "Unrecoverable Asset" Argument</h4>
                                <p className="text-lg leading-relaxed mb-4">
                                    If you have no property, no steady job, and no significant assets, you are what banks call an 'unrecoverable' case. Use this. Demonstrate your financial inability through bank statements showing a low balance, medical bills, or closure notices of your business. When the bank realizes they will get 0% if they spend 3 years in court, they will happily take 30% today.
                                </p>
                                <p className="text-lg leading-relaxed mb-4">
                                    <strong>Timing your Offer:</strong> The best time to settle is during the 'March Rush'. Banks are desperate to show lower NPA numbers in their annual reports. An offer made in mid-March often gets a faster and deeper waiver than an offer made in July.
                                </p>
                                <p className="mt-8 text-lg font-bold text-[#1F5EFF]">
                                    Pro-Tip: Always start with an offer of 20% to 25% of the principal amount. This leaves room to move up to a final settlement of 40% to 50%. Never start at your maximum capacity.
                                </p>
                            </div>
                        </section>

                        <section id="forensic-audit" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Forensic Audit: Using Bank Errors as Leverage</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Banks make mistakes. They often miscalculate interest, compound penal interest (which is illegal under many RBI circulars), or fail to credit payments properly.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Before starting a negotiation, we perform a 'Shadow Balance' calculation. We calculate what the loan balance should be if the bank followed all the rules. If we find a discrepancy of even 5-10%, we use this as leverage in the DRT. A bank facing a credible challenge to its 'Statement of Account' becomes much more willing to settle to avoid a court-ordered forensic audit.
                            </p>
                        </section>

                        <section id="unsecured-vs-secured" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Unsecured vs Secured Loan Settlements: Different Rules of the Game</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The dynamics of settlement change completely based on whether the bank has your property papers or not.
                            </p>
                            <div className="overflow-hidden rounded-2xl border border-[#DEDEDE] mb-8">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="p-4 border-b font-bold">Feature</th>
                                            <th className="p-4 border-b font-bold">Unsecured Loans (CC, PL)</th>
                                            <th className="p-4 border-b font-bold">Secured Loans (Home, LAP)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-4 border-b">Ease of Settlement</td>
                                            <td className="p-4 border-b">Relatively High</td>
                                            <td className="p-4 border-b">Low to Moderate</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b">Waiver Percentage</td>
                                            <td className="p-4 border-b">40% - 70%</td>
                                            <td className="p-4 border-b">10% - 30% (Focus on Principal)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b">Legal Threat</td>
                                            <td className="p-4 border-b">Civil Suits, Sec 138, Recovery Agents</td>
                                            <td className="p-4 border-b">SARFAESI, Physical Possession, Auction</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b">Key Leverage</td>
                                            <td className="p-4 border-b">Zero Asset recovery possibility</td>
                                            <td className="p-4 border-b">Challenging Auction Rules/Valuation</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b">Time to Settle</td>
                                            <td className="p-4 border-b">3 - 6 Months</td>
                                            <td className="p-4 border-b">6 - 18 Months</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section id="credit-card-settlements" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Special Rules for Credit Card Settlements</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Credit card debt is the most 'toxic' debt. Interest rates can be as high as 45% per annum. However, it is also the easiest to settle.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Banks often sell credit card NPAs to recovery agencies at 10-15% of the book value. This means if you owe ₹1 Lakh, the agency bought that debt for ₹15,000. If you offer them ₹30,000, they are doubling their money. This is why credit card settlements often see waivers of up to 70-80% on the total outstanding (which is mostly inflated interest).
                            </p>
                        </section>

                        <section id="post-settlement" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Your Post-Settlement Checklist: Don't Leave it Half-Done</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The work doesn't end when you pay the bank. You must ensure that the legal and credit loops are closed properly. Many borrowers find themselves being harassed for the same debt years later because the bank's internal systems weren't updated.
                            </p>
                            <ol className="space-y-4 text-base font-medium">
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs flex-shrink-0 mt-1">1</span>
                                    <span><strong>Collect the original No Dues Certificate:</strong> Ensure it has the correct loan account number, your PAN, and the date of settlement. Digital copies are good, but physical copies are mandatory for long-term safety.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs flex-shrink-0 mt-1">2</span>
                                    <span><strong>Withdrawal of Legal Cases:</strong> Verify that any legal cases (DRT, Section 138, Civil Suit) are formally withdrawn. Ask for the 'Certified Copy' of the court's dismissal order. Don't take the bank's word for it.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs flex-shrink-0 mt-1">3</span>
                                    <span><strong>CIBIL Update:</strong> Wait for 45 days and pull your CIBIL report. If the status is not 'Settled', file a dispute with the credit bureau using your NDC. It is the bank's duty to report this, but they often forget.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs flex-shrink-0 mt-1">4</span>
                                    <span><strong>Document Retention:</strong> Keep the settlement letter, payment receipts, and NDC in a safe digital and physical vault for at least 10 years. Banks have been known to sell 'settled' debts to ARCs by mistake.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs flex-shrink-0 mt-1">5</span>
                                    <span><strong>Credit Rebuilding:</strong> Start the credit repair process. Consider taking a small 'Secure Credit Card' (against an FD) and use it for small, regular transactions. This is the only way to eventually wash away the stain of a 'Settled' status.</span>
                                </li>
                            </ol>
                        </section>

                        <section id="success-stories" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Settlement Success History</h2>
                            <div className="grid md:grid-cols-2 gap-10 not-prose">
                                {[
                                    {
                                        name: "Rahul Sharma",
                                        loc: "New Delhi",
                                        outcome: "Credit Card Debt Resolved",
                                        story: "I had over ₹8 Lakhs in credit card debt across three cards. The interest was killing me. SettleLoans negotiated with the banks and helped me settle for a total of ₹3.2 Lakhs. The constant harassment from recovery agents stopped within 48 hours of hiring them. They handled all the calls and letters professionally."
                                    },
                                    {
                                        name: "Anita Desai",
                                        loc: "Mumbai",
                                        outcome: "Personal Loan Waiver Secured",
                                        story: "Due to a medical emergency in my family, I couldn't pay my PL EMIs for 8 months. The bank was threatening a civil suit. SettleLoans helped me get a 65% waiver on the outstanding amount. They ensured the bank issued a clear, legally binding settlement letter before I made any payment. I am now debt-free."
                                    },
                                    {
                                        name: "Suresh Mani",
                                        loc: "Chennai",
                                        outcome: "Business Loan Dispute Settled",
                                        story: "My manufacturing unit hit a rough patch and my SME loan was under SARFAESI action. The bank was going to auction my factory. SettleLoans identified errors in the bank's interest compounding, which gave us leverage. We negotiated a much-needed OTS and I saved my business and my property."
                                    },
                                    {
                                        name: "Megha Gupta",
                                        loc: "Bangalore",
                                        outcome: "Peace of Mind Achieved",
                                        story: "I was terrified of the recovery agents from 7-day loan apps. They were calling my contacts. SettleLoans took over the communication, explained my legal rights, and forced the apps to settle for the principal amount only. The harassment stopped immediately. I can't thank them enough."
                                    },
                                    {
                                        name: "Vikram Rathore",
                                        loc: "Jaipur",
                                        outcome: "Successful Credit Rebuilding",
                                        story: "After settling my old debts with their help, they didn't just leave me. They guided me on how to improve my credit score step-by-step. Today, my score has improved from 520 to 680, and I have a stable financial future. Their post-settlement support is what makes them different."
                                    }
                                ].map((review, i) => (
                                    <div key={i} className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm hover:shadow-md transition-all">
                                        <div className="flex items-center mb-4">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 mr-3">{review.name.split(' ')[0][0]}</div>
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
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Bank Loan Settlement Rules & FAQ</h2>
                            <div className="space-y-6 not-prose">
                                {[
                                    { q: "What are the latest RBI guidelines for loan settlement 2024?", a: "The 2024 RBI framework requires all banks to have a Board-approved policy for compromise settlements. It emphasizes transparency, fair treatment of borrowers, and mandates a 'cooling-off' period for fresh credit after a settlement is concluded. It also specifies that technical write-offs must be distinguished from final compromise settlements." },
                                    { q: "Can a bank refuse a loan settlement request even if I am broke?", a: "Yes, a bank can refuse if they believe the borrower has the capacity to pay or if the property value (in secured loans) is high enough to recover the full amount through an auction. Settlement is a discretionary power of the bank, not a right of the borrower, unless it's under a specific OTS scheme." },
                                    { q: "Is 'Settled' better than 'Written-off' on a CIBIL report?", a: "Both are negative, but 'Settled' is slightly better as it indicates the borrower has resolved the liability. A 'Written-off' status means the bank has lost hope of recovery and the liability still technically exists in their records, which is a worse indicator for future lenders." },
                                    { q: "Can I settle a loan that is not yet an NPA?", a: "Typically, banks only settle accounts that are already classified as Non-Performing Assets (NPAs) for at least 90 days. However, in cases of confirmed permanent disability or death of the primary earner, some banks may consider early settlements as a compassionate measure." },
                                    { q: "What documents do I need for a loan settlement proposal?", a: "You need a formal hardship letter, bank statements of the last 12 months, salary slips or P&L statements, and any evidence of hardship like medical reports, business closure notices, or death certificates. The goal is to prove your inability to pay the full amount." },
                                    { q: "How much 'haircut' can I expect in a personal loan settlement?", a: "For unsecured personal loans, a haircut of 50% to 70% on the total outstanding (including interest and penalties) is common for genuine hardship cases. In some very old cases, waivers can even reach 80% if the bank sees no other recovery path." },
                                    { q: "Does settlement stop legal proceedings under Section 138?", a: "Yes, once a settlement is reached and the amount is paid, the bank must move an application in the court to withdraw the cheque bounce case. This should be explicitly mentioned as a condition in your settlement agreement." },
                                    { q: "What is the role of an ARC in loan settlement?", a: "If your bank has sold your loan to an Asset Reconstruction Company (ARC), you must negotiate with the ARC. ARCs are specialized recovery firms that buy debts at a discount. They are often more flexible than banks because their 'cost of acquisition' is low, allowing for better settlement deals." },
                                    { q: "Can I settle my loan in installments?", a: "Yes, this is called a 'Structured Settlement'. You can pay the settled amount in 3 to 6 monthly installments. However, banks usually offer a smaller waiver for installments compared to a single lump-sum payment." },
                                    { q: "What happens to the guarantor if the primary borrower settles?", a: "Unless specified otherwise in the agreement, a settlement for the borrower usually clears the guarantor's liability as well. However, to be safe, ensure the settlement letter mentions that the 'guarantor is also released from all liabilities' under the loan." },
                                    { q: "Can I get a credit card after settling a loan?", a: "Getting a regular credit card is difficult immediately after settlement. You may need to wait for 1 to 2 years of stable income and start with a 'Secured Credit Card' against a Fixed Deposit to rebuild your credit history." },
                                    { q: "Is a settlement letter valid if it's sent via email?", a: "Yes, provided it comes from the bank's official domain and is signed by an authorized signatory. However, for legal safety, always request a physical copy on the bank's letterhead for your permanent records." },
                                    { q: "Can I challenge a settlement if the bank fails to update CIBIL?", a: "Yes, you can file a dispute with CIBIL or approach the Banking Ombudsman if the bank doesn't update your status within 45 days of issuing the NDC. Your settlement letter and NDC are your primary evidence." },
                                    { q: "What is the difference between OTS and a regular settlement?", a: "OTS (One-Time Settlement) is usually a bank-wide scheme with fixed, non-negotiable terms for a specific period, while a regular settlement is an individual negotiation based on a specific borrower's case and can happen anytime." },
                                    { q: "Does the bank charge GST on the settled amount?", a: "Generally, GST is not applicable on the settled principal or interest amount as it's a remission of debt. However, it might be applied to any processing fees or legal costs if they are charged separately as part of the settlement process." },
                                    { q: "Can SettleLoans help with settlements in any city in India?", a: "Yes, we provide pan-India legal and negotiation support. We handle communications with banks and NBFCs across all major cities, ensuring our clients get the best possible legal protection during the settlement process." }
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

                        <div className="mt-16 p-8 bg-[#1F5EFF] rounded-3xl text-white text-center">
                            <h2 className="text-3xl font-black mb-6">Resolve Your Bank Debt Today</h2>
                            <p className="text-xl mb-8 opacity-90">
                                Stop the stress of unpaid loans. Our experts will handle the bank negotiations and protect your legal rights.
                            </p>
                            <Link href="/contact-us" className="inline-block bg-white text-[#1F5EFF] font-black py-4 px-10 rounded-xl hover:scale-105 transition-all text-lg shadow-2xl">
                                Request Free Debt Consultation
                            </Link>
                        </div>

                    </article>

                    {/* Right Column: Sticky Widgets */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-24 space-y-8">

                            {/* CTA Box */}
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                                <div className="bg-[#1F5EFF] p-4 text-center">
                                    <h3 className="text-lg font-black text-white px-2">Settlement Support</h3>
                                </div>
                                <div className="p-8 text-center">
                                    <p className="mb-8 text-sm text-[#DEDEDE] opacity-90 leading-relaxed font-bold">
                                        Facing legal notices or recovery harassment? Get professional help to settle your bank loans legally.
                                    </p>
                                    <Link href="/contact-us" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-4 rounded-[12px] hover:scale-110 transition-all shadow-md group-hover:shadow-2xl">
                                        Start My Settlement
                                    </Link>
                                    <p className="mt-6 text-[10px] text-[#DEDEDE]/60 uppercase tracking-[0.3em] font-black">RBI Compliant Process</p>
                                </div>
                            </div>

                            {/* Related Guides */}
                            <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2 text-center">Helpful Resources</h3>
                                <ul className="space-y-4 text-sm font-extrabold px-2">
                                    <li>
                                        <Link href="/loan-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight">
                                            <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors flex-shrink-0"></span>
                                            Loan Settlement Guide
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/credit-score-improvement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight">
                                            <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors flex-shrink-0"></span>
                                            Improve Credit Score
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/rbi-rules-for-recovery-agents" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight">
                                            <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors flex-shrink-0"></span>
                                            Recovery Agent Rules
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faqs/how-to-settle-loan" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight">
                                            <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors flex-shrink-0"></span>
                                            How to Settle Loan
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/business-loan-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight">
                                            <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors flex-shrink-0"></span>
                                            Business Loan Resolution
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
