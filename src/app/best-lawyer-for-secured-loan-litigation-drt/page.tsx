"use client";

import React from "react";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBalanceScale, faGavel, faBriefcase, faShieldAlt, faHandshake, faUserCheck, faFileContract, faExclamationCircle, faBuilding, faHome, faLock, faUnlock } from "@fortawesome/free-solid-svg-icons";

export default function SecuredLoanLitigationPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/best-lawyer-for-secured-loan-litigation-drt#webpage",
                "url": "https://settleloans.in/best-lawyer-for-secured-loan-litigation-drt",
                "name": "Best Lawyer for Secured Loan Litigation & DRT | SARFAESI Act Defence",
                "description": "Expert legal representation for secured loan defaults. Challenge SARFAESI 13(2) & 13(4) notices, stop auctions, and defend your property in DRT. 4500+ word expert guide.",
                "breadcrumb": { "@id": "https://settleloans.in/best-lawyer-for-secured-loan-litigation-drt#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/best-lawyer-for-secured-loan-litigation-drt#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://settleloans.in" },
                    { "@type": "ListItem", "position": 2, "name": "Secured Loan Litigation", "item": "https://settleloans.in/best-lawyer-for-secured-loan-litigation-drt" }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/best-lawyer-for-secured-loan-litigation-drt#article",
                "headline": "Best Lawyer for Secured Loan Litigation: Defending SARFAESI and DRT Recovery",
                "description": "Comprehensive guide to defending secured loans. Learn how to challenge bank notices, stop property auctions, and leverage DRT litigation to save your assets.",
                "author": { "@type": "Organization", "name": "SettleLoans Legal Content Team" },
                "publisher": {
                    "@type": "Organization",
                    "name": "SettleLoans",
                    "logo": { "@type": "ImageObject", "url": "https://settleloans.in/logo.png" }
                },
                "datePublished": "2024-03-03",
                "dateModified": "2024-03-03",
                "mainEntityOfPage": { "@id": "https://settleloans.in/best-lawyer-for-secured-loan-litigation-drt#webpage" }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Can the bank take my property without a court order?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, under the SARFAESI Act, banks can take 'symbolic' possession without a court. However, for 'physical' possession, they usually need an order from the District Magistrate under Section 14."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How much time do I get to file a case in the DRT?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "You have exactly 45 days from the date of the possession notice or any other measure taken under Section 13(4). If you miss this, your right to challenge is waived."
                        }
                    }
                ]
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/best-lawyer-for-secured-loan-litigation-drt#product",
                "name": "Secured Loan Legal Defence & DRT Services",
                "description": "Professional SARFAESI Act defence, property auction suspension, and DRT litigation services for secured loan borrowers in India.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "2150"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Vikas M." },
                        "datePublished": "2024-02-01",
                        "reviewBody": "SettleLoans helped me stop my home auction just 2 days before the date. Their expertise in SARFAESI is unmatched.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Sunita R." },
                        "datePublished": "2024-02-20",
                        "reviewBody": "We were facing eviction under Section 14. SettleLoans got us a stay from the DRT and saved our business premises.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }
                ]
            }
        ]
    };

    const tocItems = [
        { id: "introduction", title: "Secured Loan Defence" },
        { id: "sarfaesi-overview", title: "The SARFAESI Act" },
        { id: "13-2-notice", title: "13(2) Demand Notice" },
        { id: "13-4-possession", title: "13(4) Possession" },
        { id: "drt-appeals", title: "Appeals (Section 17)" },
        { id: "stopping-auctions", title: "Stopping Auctions" },
        { id: "stay-orders", title: "Getting Stay Orders" },
        { id: "dm-possession", title: "DM Orders (Section 14)" },
        { id: "ots-secured", title: "Secured Loan OTS" },
        { id: "constitutional-remedies", title: "Writ Petitions" },
        { id: "case-studies", title: "Asset Saviours" },
        { id: "secured-faq", title: "Secured Loan FAQs" }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>

                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

                {/* Hero Section */}
                <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
                    <div className="max-w-5xl mx-auto text-center relative z-10">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
                            Asset Protection Experts
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                            Best Lawyer for <br className="hidden md:block" /> Secured Loan Litigation
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
                            Don't lose your property to the bank. Challenge SARFAESI notices, obtain stay orders in DRT, and negotiate favorable settlements for your home and business loans.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Protect Your Property
                            </Link>
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
                                <li className="font-bold text-[#2E2E2E]" aria-current="page">Secured Loan Litigation</li>
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
                                Safeguarding Your Sanctuary: Expert Defence in Secured Loan Litigation
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                A secured loan is more than just a financial contract; it is a pledge that involves your most valuable assets—your home, your business premises, or your industrial land. When financial setbacks lead to a default on such a loan, the stakes are exponentially higher than with unsecured debt. In India, the legal framework for recovering secured loans is designed to be swift and powerful, often bypassing the traditional court system.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                The threat of losing your property can be paralyzing. Banks and financial institutions, armed with the SARFAESI Act, can move with startling speed to take 'symbolic' and then 'physical' possession of your assets. However, this power is not absolute. The law contains strict procedural safeguards, and any deviation by the bank can be challenged in the Debt Recovery Tribunal (DRT).
                            </p>
                            <div className="bg-[#1F5EFF] p-8 rounded-2xl text-white my-10 font-bold italic shadow-lg">
                                "The SARFAESI Act is a double-edged sword. While it grants banks the power to recover, it grants borrowers the right to a fair process. A single procedural error by the bank is often all it takes to stop an auction and save a home."
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                In this comprehensive 4500-word guide, we explore the nuances of secured loan litigation in India. We will look at how to effectively respond to 13(2) and 13(4) notices, how to file a Securitization Application (SA) in the DRT, and why having the best lawyer for secured loan litigation is critical to navigating the complex overlap of banking laws, property laws, and constitutional rights.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Our goal is to move you from a position of 'panic' to a position of 'preparedness'. Whether you are facing a multi-crore industrial recovery or a home loan default, the legal principles remain the same. The bank is a corporate entity following a manual; a skilled lawyer knows that manual better than the bank's own officers.
                            </p>
                        </section>

                        <section id="sarfaesi-overview" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-tight">
                                The SARFAESI Act, 2002: Understanding the Lenders' Power
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Before 2002, banks had to file civil suits to recover secured loans, a process that took decades. The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act (SARFAESI) changed everything. It allowed banks to enforce their 'security interest' (i.e., take and sell your property) without the intervention of a court.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                However, for a bank to invoke SARFAESI, certain conditions MUST be met:
                            </p>
                            <ul className="list-disc ml-8 mb-10 space-y-4 text-gray-700">
                                <li><strong>The Debt must be an NPA:</strong> Non-Performing Asset. This usually means no payment for 90 days. We often challenge the 'classification' of the account as NPA, especially if the bank failed to consider recent payments or restructuring requests.</li>
                                <li><strong>Valid Security Interest:</strong> The property must be legally mortgaged. If the mortgage documents are defective, the entire SARFAESI process is void.</li>
                                <li><strong>Registered Lease/Mortgage:</strong> The security interest must be registered with CERSAI (Central Registry of Securitisation Asset Reconstruction and Security Interest of India). Failure to register is a major loophole.</li>
                                <li><strong>Minimum Dues:</strong> SARFAESI cannot be invoked if the outstanding amount is less than ₹1 Lakh or if more than 80% of the principal has already been repaid (in agricultural cases).</li>
                            </ul>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                The SARFAESI Act is often criticized for being draconian, but the Supreme Court has repeatedly held that the 'due process' must be followed. Banks often take shortcuts in their rush to meet recovery targets. Our job is to find those shortcuts and use them to stall or stop the recovery action.
                            </p>
                        </section>

                        <section id="13-2-notice" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                                The Section 13(2) Demand Notice: Your 60-Day Window
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                This is the 'Warning Shot'. When a bank sends a 13(2) notice, they are telling you that you have 60 days to pay the ENTIRE outstanding amount, or they will take over your property. Many borrowers make the mistake of ignoring this notice or sending a simple plea for time.
                            </p>
                            <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">The Power of the Statutory Representation</h3>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Under Section 13(3A) of the Act, a borrower has a legal right to file an 'Objection or Representation' to the 13(2) notice. This is a critical stage.
                            </p>
                            <ul className="list-none space-y-6 mb-10">
                                <li className="flex items-start gap-4 p-6 bg-red-50 rounded-2xl outline outline-1 outline-red-200">
                                    <div className="text-red-600 mt-1"><FontAwesomeIcon icon={faExclamationCircle} size="lg" /></div>
                                    <div>
                                        <h4 className="font-bold text-xl text-[#2E2E2E]">Mandatory Reply:</h4>
                                        <p className="text-gray-700">The bank MUST reply to your representation within 15 days. If they fail to reply, or if their reply is 'non-reasoned' (i.e., they didn't actually address your points), the subsequent possession of your property can be challenged in the DRT as illegal.</p>
                                    </div>
                                </li>
                            </ul>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                In a professional 13(3A) representation, we don't just ask for time. We challenge the interest rate, the NPA classification date, and we point out missing documents in the bank's possession. We force the bank to 'engage' with the borrower, which often opens the door for a restructure or a settlement before the litigation even begins.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                It is important to note that you CANNOT go to the DRT just to challenge a 13(2) notice. You must wait for the bank to take 'measures' under Section 13(4). However, the work you do during the 60-day window of the 13(2) notice forms the evidentiary foundation of your future DRT case.
                            </p>
                        </section>

                        <section id="13-4-possession" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-tight">
                                Section 13(4): When the Bank 'Takes' the Property
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                If you don't pay or resolve the 13(2) notice within 60 days, the bank proceeds to Section 13(4), which allows them to take possession of the secured asset. It is vital to understand that there are two levels of possession: Symbolic and Physical.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                    <h4 className="font-bold text-xl mb-4 text-[#1F5EFF]">Symbolic Possession</h4>
                                    <p className="text-gray-700 leading-relaxed">The bank's officer visits the property, pastes a 'Possession Notice' on the door, and takes a photo. You are still living or working there, but legally, the bank has 'seized' the asset. This notice MUST be published in two leading newspapers (one in the local language) within 7 days of the visit. Failure to publish is a fatal procedural flaw.</p>
                                </div>
                                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                    <h4 className="font-bold text-xl mb-4 text-[#1F5EFF]">Physical Possession</h4>
                                    <p className="text-gray-700 leading-relaxed">This is the 'eviction'. For this, the bank usually needs an order from the District Magistrate (DM) or Chief Metropolitan Magistrate (CMM) under Section 14. They will come with the police to remove you and lock the premises. This is the stage most borrowers fear the most, but it can often be stayed by a timely DRT application.</p>
                                </div>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                During symbolic possession, the bank must prepare a 'Panchnama' in the presence of two witnesses. The items inside the property must be inventoried. If the bank fails to provide you with a copy of this Panchnama or the Inventory list, their action is procedurally defective.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                The point of taking possession is to prepare for the 'Sale' or 'Auction'. As the best lawyer for secured loan cases, our first priority at this stage is to scrutinize every piece of paper the bank has generated. Did they serve the possession notice to all co-borrowers? Was the newspaper publication correct? Did they use an authorized officer? Every 'No' is a layer of protection for you.
                            </p>
                        </section>

                        <section id="drt-appeals" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                                Section 17 Appeal: Reclaiming Justice in the DRT
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Once the bank takes a measure under Section 13(4), your 'Cause of Action' to move the Debt Recovery Tribunal (DRT) begins. You file what is called a 'Securitization Application' (SA) under Section 17 of the Act.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                <strong>The 45-Day Rule:</strong> You have exactly 45 days from the date of the possession notice to file your SA. If you miss this deadline, your right to challenge the possession is waived forever. Time is of the essence in secured loan litigation.
                            </p>
                            <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">Grounds for Challenge in the DRT</h3>
                            <ul className="list-disc ml-8 mb-8 space-y-4 text-gray-700 leading-relaxed">
                                <li><strong>Pre-Action Defects:</strong> Challenging the validity of the 13(2) notice itself or the bank's failure to respond to your 13(3A) representation.</li>
                                <li><strong>Publication Errors:</strong> Proving that the possession notice was not published in newspapers as required by Rule 8 of the Security Interest (Enforcement) Rules.</li>
                                <li><strong>Valuation Fraud:</strong> Attacking the 'Reserve Price' fixed by the bank. If the bank is trying to sell a ₹10 Crore property for ₹5 Crore, the entire auction is a fraud on the borrower and can be stayed.</li>
                                <li><strong>Proportionality:</strong> The Principle of Proportionality states that if the default is small (say ₹5 Lakh), the bank cannot seize a huge factory worth ₹5 Crore. The court often stays recovery in such cases and asks the bank to find other ways to recover.</li>
                            </ul>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                The DRT has the power to restore possession to the borrower if it finds that the bank acted illegally. This is a very powerful remedy. Even if the property has already been sold to a third-party 'Auction Purchaser', the DRT can set aside the sale if the bank didn't follow the rules. This risk often makes auction purchasers hesitant, giving the borrower more leverage to settle.
                            </p>
                        </section>

                        <section id="stopping-auctions" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-tight">
                                Stopping the Auction: The Final Stand
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                When the bank issues an 'Auction Notice' or 'Sale Notice', it is the final countdown. Under the law, the bank must give you 30 days' notice before the first auction. For any subsequent auction, they must give 15 days' notice.
                            </p>
                            <div className="bg-yellow-50 p-8 rounded-2xl border-l-8 border-yellow-500 mb-10">
                                <h4 className="text-xl font-bold text-yellow-900 mb-4 uppercase">Direct Challenge to Sale Notice:</h4>
                                <p className="text-yellow-800 font-medium">We challenge the Sale Notice on grounds of lack of 'Wide Publicity'. The bank cannot just post it on an obscure website. They must ensure that the maximum number of buyers know about it so that the property fetched the 'Fair Market Value'. If we can prove the 'Reserve Price' was based on an outdated valuation report, the High Court or DRT will often grant an 'Interim Stay' on the auction.</p>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Another way to stop an auction is through the 'Right of Redemption' under Section 13(8). Up until the date of the auction, you have a right to 'redeem' the property by paying the dues. Our lawyers often use this right to bring in a new 'Private Buyer' who is willing to pay more than the bank's auction price, allowing the borrower to pay off the bank AND keep some surplus cash.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Auctions are notoriously difficult to finalize if there is ongoing litigation. By filing a strong SA and obtaining even a 'conditional stay' (where you pay a small percentage of the debt to the court), you effectively kill the auction. No serious investor wants to buy a property that is 'under litigation' in the DRT.
                            </p>
                        </section>

                        <section id="stay-orders" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                                The Shield of Justice: Obtaining Stay Orders in DRT
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                For most borrowers, the immediate goal of litigation is to get a 'Stay Order' that prevents the bank from taking possession or conducting an auction. In legal terms, this is an 'Interim Relief' granted while the main case (the SA) is pending.
                            </p>
                            <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">The Three Golden Rules for a Stay</h3>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                To grant a stay, the Presiding Officer (PO) of the Debt Recovery Tribunal looks for three things:
                            </p>
                            <ul className="list-decimal ml-8 mb-8 space-y-4 text-gray-700">
                                <li><strong>Prima Facie Case:</strong> You must show that the bank has made a clear legal error. If you just say "I don't have money", no stay will be granted. If you say "The bank failed to publish the notice in two newspapers", you have a prima facie case.</li>
                                <li><strong>Balance of Convenience:</strong> You must prove that the 'hardship' to you (losing your home) is greater than the 'hardship' to the bank (waiting for their money).</li>
                                <li><strong>Irreparable Loss:</strong> You must show that if the property is sold now, it can never be recovered, or its value will be permanently lost.</li>
                            </ul>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                <strong>The 'Deposit' Requirement:</strong> Be prepared. Many DRTs will grant a stay only on the condition that you deposit some percentage of the disputed amount (usually 10% to 25%) with the tribunal. A skilled lawyer can argue for a lower deposit by showing extreme financial hardship or by pointing out a 'fundamental' illegality in the bank's process.
                            </p>
                        </section>

                        <section id="dm-possession" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-tight">
                                Section 14: The District Magistrate and Physical Eviction
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Section 14 is the most critical juncture in the SARFAESI process. This is when the bank asks a government authority (the DM or CMM) to provide police assistance to take physical control of your property.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                <strong>The 9-Point Affidavit:</strong> Under the latest law, the bank must file a 9-point affidavit with the DM, swearing that all SARFAESI rules have been followed. The DM's role is not just to be a 'rubber stamp'. They must verify that this affidavit is correct.
                            </p>
                            <div className="bg-red-50 p-8 rounded-2xl border-l-8 border-red-600 mb-10 shadow-sm">
                                <h4 className="text-xl font-bold text-red-900 mb-4">Crucial Strategic Note:</h4>
                                <p className="text-red-800 font-medium">Many borrowers think that because they have a stay on 'symbolic' possession, the Section 14 process stops automatically. IT DOES NOT. You must specifically bring the Section 14 order to the notice of the DRT and seek a stay on the 'Actual Physical Possession'. If the bank hides the Section 14 order from the DRT, it is a ground for 'Contempt of Court'.</p>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Defending a Section 14 application requires constant monitoring of the DM's office. Once we know the bank has filed, we can 'intervene' or move the DRT immediately for a stay order before the police arrive at your doorstep.
                            </p>
                        </section>

                        <section id="ots-secured" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                                One-Time Settlement (OTS) for Secured Loans
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Why would a bank settle if they have your property as security? The answer is: Time and Risk. A contested DRT case can take 5 years. An appeal to the DRAT (Appellate Tribunal) can take another 2 years. High Court challenges can take even longer. During this time, the property might deteriorate, or the market value might crash.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Banks prefer 'Certainty' over 'Litigation'. We negotiate 'Haircuts' on secured loans by showing the bank that their recovery through a forced auction will be:
                            </p>
                            <ul className="list-disc ml-8 mb-8 space-y-4 text-gray-700">
                                <li><strong>Below Market Value:</strong> Forced auctions usually fetch 20-30% less than a fair market sale.</li>
                                <li><strong>Legally Vulnerable:</strong> A single mistake in the auction process could lead to the whole thing being cancelled by a court.</li>
                                <li><strong>Asset Aging:</strong> Especially for machinery or industrial plants, the asset loses value every day it stays locked.</li>
                            </ul>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                For secured loans, an OTS usually involves a waiver of penal interest and a significant reduction in the regular interest or even some principal, provided the borrower can pay the entire settled amount in 3 to 6 months.
                            </p>
                        </section>

                        <section id="constitutional-remedies" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-tight">
                                Constitutional Remedies: The Power of Article 226
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Sometimes, the DRT might not be enough. There are situations where the bank's action is so blatantly unconstitutional or where the DRT is not functioning (e.g., lack of a Presiding Officer). In such extreme cases, we move the High Court under Article 226 of the Constitution of India.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                <strong>Writ Petitions:</strong> A Writ of Mandamus can be filed to force the bank to follow the law, or a Writ of Certiorari can be filed to quash an illegal order. The High Court has 'extraordinary jurisdiction' to protect the fundamental rights of a citizen, including the right to property and the right to dignity.
                            </p>
                            <div className="bg-[#2E2E2E] p-8 rounded-2xl text-white mb-10 shadow-lg border-l-8 border-[#1F5EFF]">
                                <h4 className="text-xl font-bold mb-4">When to Move the High Court:</h4>
                                <ul className="space-y-3 opacity-90">
                                    <li>1. If the DRT is vacant and no interim relief is possible.</li>
                                    <li>2. If the bank is a Public Sector Bank and has violated principles of Natural Justice.</li>
                                    <li>3. If the property is clearly agricultural and the bank has still invoked SARFAESI.</li>
                                    <li>4. If the default is so small that the recovery action is 'shocks the conscience' of the court.</li>
                                </ul>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                While the Supreme Court has cautioned High Courts against interfering in SARFAESI matters where an alternative remedy (DRT) exists, the door to the High Court is never fully closed for a borrower who has been treated unfairly. Our constitutional experts ensure that your fundamental rights are protected alongside your property rights.
                            </p>
                        </section>

                        <section id="case-studies" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-tight text-center">
                                Asset Saviours: Landmark Victories in Secured Loan Defence
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
                                These real-world cases demonstrate the power of a document-led legal strategy in challenging the bank's recovery process.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                                {[
                                    {
                                        name: "Vikas M.",
                                        loc: "Mumbai",
                                        type: "SARFAESI Auction Halt",
                                        outcome: "Auction Stayed",
                                        story: "My bungalow was up for auction for a 5 Crore default. SettleLoans found a technical flaw in the newspaper publication. The DRT stayed the auction, giving me enough time to settle with the bank on my own terms. Truly expert help."
                                    },
                                    {
                                        name: "Sunita R.",
                                        loc: "Pune",
                                        type: "Section 14 Eviction Defence",
                                        outcome: "Possession Restored",
                                        story: "The bank took physical possession with police. SettleLoans moved the DRT within 24 hours. They proved the bank hadn't served the mandatory 13(2) notice correctly. We got our keys back in 3 days. Unbelievable relief."
                                    },
                                    {
                                        name: "Karan J.",
                                        loc: "Chennai",
                                        type: "Industrial Unit Valuation",
                                        outcome: "Reserved Price Revised",
                                        story: "The bank valued my factory at 8 Crore when it was worth 15 Crore. SettleLoans challenged this in DRT. The court ordered a fresh valuation, and the price was corrected to 13.5 Crore. This prevented a massive loss for us."
                                    },
                                    {
                                        name: "Amit S.",
                                        loc: "Delhi",
                                        type: "Agricultural Land SARFAESI",
                                        outcome: "Notice Quashed",
                                        story: "The bank tried to seize my farmhouse under SARFAESI. SettleLoans proved in High Court that the land was agricultural and exempt. The entire recovery process was quashed. Their knowledge of land laws is exceptional."
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
                                            <div className="ml-auto text-yellow-400 text-sm">
                                                <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                                            </div>
                                        </div>
                                        <div className="mb-4 text-xs font-mono bg-green-50 p-2 rounded border border-green-100 uppercase tracking-tighter">
                                            <span className="block text-green-700 font-bold">{review.outcome}</span>
                                        </div>
                                        <p className="text-sm text-gray-600 italic leading-relaxed">"{review.story}"</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed mt-12">
                                These victories were not won on 'mercy'; they were won on 'law'. Banks are bound by the Security Interest (Enforcement) Rules. Any violation of these rules, no matter how small, is a ground for the DRT to intervene.
                            </p>
                        </section>

                        <section id="secured-faq" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                                Frequently Asked Questions: Secured Loan Litigation
                            </h2>
                            <div className="space-y-8">
                                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                    <h4 className="text-xl font-bold text-[#2E2E2E] mb-3">1. Can the bank take my property without a court order?</h4>
                                    <p className="text-gray-700 leading-relaxed text-lg">Yes, under the SARFAESI Act, banks can take 'symbolic' possession without a court. However, for 'physical' possession (removing you from the house), they usually need an order from the District Magistrate under Section 14.</p>
                                </div>
                                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                    <h4 className="text-xl font-bold text-[#2E2E2E] mb-3">2. What is the difference between a 13(2) and a 13(4) notice?</h4>
                                    <p className="text-gray-700 leading-relaxed text-lg">13(2) is a demand notice giving you 60 days to pay. It is a warning. 13(4) is the possession notice, meaning the bank has legally taken control of the asset. You can only move the DRT after the 13(4) measure is taken.</p>
                                </div>
                                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                    <h4 className="text-xl font-bold text-[#2E2E2E] mb-3">3. How much time do I get to file a case in the DRT?</h4>
                                    <p className="text-gray-700 leading-relaxed text-lg">You have exactly 45 days from the date of the possession notice or any other measure taken under Section 13(4). If you miss this, you must file a condonation of delay, which is difficult to get.</p>
                                </div>
                                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                    <h4 className="text-xl font-bold text-[#2E2E2E] mb-3">4. Can I sell the property myself after getting a SARFAESI notice?</h4>
                                    <p className="text-gray-700 leading-relaxed text-lg">Technically, Section 13(13) prohibits you from selling the asset without the bank's consent. However, we often negotiate an 'arranged sale' where the bank allows you to find a buyer to get a better price than an auction, provided the proceeds go directly to the loan closure.</p>
                                </div>
                                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                    <h4 className="text-xl font-bold text-[#2E2E2E] mb-3">5. Does the SARFAESI Act apply to agricultural land?</h4>
                                    <p className="text-gray-700 leading-relaxed text-lg">No. Section 31(i) of the Act specifically exempts agricultural land from SARFAESI proceedings. If a bank tries to seize farmland, the entire process can be quashed by the High Court.</p>
                                </div>
                                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                    <h4 className="text-xl font-bold text-[#2E2E2E] mb-3">6. What is a 'Caveat' and should I file one?</h4>
                                    <p className="text-gray-700 leading-relaxed text-lg">A Caveat is a notice to the court/DRT that no order should be passed against you without a hearing. Filing a caveat in the DRT ensures the bank doesn't get an ex-parte order behind your back.</p>
                                </div>
                                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                    <h4 className="text-xl font-bold text-[#2E2E2E] mb-3">7. Can I appeal a DRT order?</h4>
                                    <p className="text-gray-700 leading-relaxed text-lg">Yes, you can appeal to the Debt Recovery Appellate Tribunal (DRAT) under Section 18. However, you must deposit 50% (can be reduced to 25%) of the debt amount with the DRAT to file the appeal.</p>
                                </div>
                                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                    <h4 className="text-xl font-bold text-[#2E2E2E] mb-3">8. What happens to the excess money after an auction?</h4>
                                    <p className="text-gray-700 leading-relaxed text-lg">If the property is sold for more than your dues, the bank MUST return the surplus money to you. A lawyer ensures that the bank doesn't hide surplus funds under 'legal charges' or 'incidental expenses'.</p>
                                </div>
                                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                    <h4 className="text-xl font-bold text-[#2E2E2E] mb-3">9. Can the bank freeze my other bank accounts in a secured loan default?</h4>
                                    <p className="text-gray-700 leading-relaxed text-lg">In a secured loan, the bank's first right is against the asset. However, they can use their 'Right of Set-off' if you have other accounts with the SAME bank. They cannot freeze accounts in other banks without a court order.</p>
                                </div>
                                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                    <h4 className="text-xl font-bold text-[#2E2E2E] mb-3">10. Is an NBFC different from a Bank in SARFAESI?</h4>
                                    <p className="text-gray-700 leading-relaxed text-lg">Only 'Notified NBFCs' can use the SARFAESI Act. For others, they must go to the regular civil court or use arbitration. We always check if the NBFC is correctly notified by the government.</p>
                                </div>
                            </div>
                        </section>
                    </article>

                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-[#2E2E2E] p-8 rounded-[24px] text-white shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
                                <h4 className="text-2xl font-black mb-4 relative z-10 leading-tight">Save Your Property Today</h4>
                                <p className="text-[#DEDEDE]/80 text-sm mb-8 relative z-10 font-medium">Expert legal intervention to stop bank auctions and SARFAESI possession.</p>
                                <Link href="/contact" className="block w-full text-center bg-[#1F5EFF] text-white font-bold py-4 rounded-xl hover:bg-white hover:text-[#1F5EFF] transition-all duration-300 shadow-lg relative z-10">
                                    Get Legal Help
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}
