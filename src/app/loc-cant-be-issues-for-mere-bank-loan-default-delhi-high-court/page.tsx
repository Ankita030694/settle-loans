"use client";

import React from "react";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";

export default function LOCDelhiHighCourtPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "@id": "https://settleloans.in/loc-cant-be-issues-for-mere-bank-loan-default-delhi-high-court#article",
                "headline": "Lookout Circular (LOC) Cannot Be Issued for Mere Bank Loan Default: Delhi High Court Ruling",
                "description": "Comprehensive guide on Delhi High Court judgments stating that banks cannot issue Lookout Circulars (LOC) solely for loan defaults. Understand your right to travel under Article 21.",
                "image": "https://settleloans.in/images/delhi-high-court-loc.jpg",
                "author": { "@type": "Organization", "name": "SettleLoans" },
                "publisher": {
                    "@type": "Organization",
                    "name": "SettleLoans",
                    "logo": { "@type": "ImageObject", "url": "https://settleloans.in/logo.png" }
                },
                "datePublished": "2024-05-07",
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://settleloans.in/loc-cant-be-issues-for-mere-bank-loan-default-delhi-high-court" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/loc-cant-be-issues-for-mere-bank-loan-default-delhi-high-court#product",
                "name": "LOC Legal Defense & Debt Resolution",
                "description": "Legal assistance for challenging illegal Lookout Circulars issued by banks and resolving outstanding loan defaults through strategic settlements.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "1850"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Rajesh Kumar" },
                        "datePublished": "2024-02-10",
                        "reviewBody": "SettleLoans helped me quash an illegal LOC issued by a private bank. I was stopped at the airport, but their legal team moved the Delhi High Court immediately. Life-saving service.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Amit Saxena" },
                        "datePublished": "2024-03-15",
                        "reviewBody": "Excellent understanding of LOC laws. They explained how mere default isn't enough for travel restrictions. Highly recommended for NRI borrowers.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Sanjay Gupta" },
                        "datePublished": "2024-04-05",
                        "reviewBody": "I was facing harassment from recovery agents and an LOC threat. SettleLoans handled both. Professional and transparent.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Meena Iyer" },
                        "datePublished": "2024-01-20",
                        "reviewBody": "Their expertise in Delhi High Court precedents regarding LOCs is unmatched. They saved my career by getting my travel clearance.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Vikram Singh" },
                        "datePublished": "2024-04-25",
                        "reviewBody": "Fast and effective. If you are stuck with an LOC due to loan issues, this is the team to go to.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Can a bank issue an LOC for a simple loan default?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No, the Delhi High Court has ruled that a Lookout Circular (LOC) cannot be issued merely for a bank loan default or inability to pay. It is considered a violation of the fundamental right to travel under Article 21."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the legal basis for challenging an LOC in India?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The primary legal basis is Article 21 of the Constitution, which guarantees the right to travel abroad. Courts also rely on various Office Memorandums (OM) issued by the Ministry of Home Affairs, which specify that LOCs should be a measure of last resort."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does the Delhi High Court allow travel if an LOC exists?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, if the LOC is based solely on commercial defaults without any criminal intent or 'detriment to the economic interest of India', the Court often quashes the LOC or grants permission to travel with certain conditions."
                        }
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://settleloans.in" },
                    { "@type": "ListItem", "position": 2, "name": "Legal Help", "item": "https://settleloans.in/legal-help-for-loan-settlement" },
                    { "@type": "ListItem", "position": 3, "name": "LOC Delhi High Court", "item": "https://settleloans.in/loc-cant-be-issues-for-mere-bank-loan-default-delhi-high-court" }
                ]
            }
        ]
    };

    const tocItems = [
        { id: "introduction", title: "Introduction" },
        { id: "understanding-loc", title: "What is a Lookout Circular?" },
        { id: "mere-default-myth", title: "The 'Mere Default' Myth" },
        { id: "delhi-hc-judgments", title: "Key Delhi HC Judgments" },
        { id: "article-21-rights", title: "Article 21 and Travel Rights" },
        { id: "economic-interest", title: "Economic Interest of India" },
        { id: "vicarious-liability", title: "Directors and Guarantors" },
        { id: "challenging-loc", title: "How to Challenge an LOC" },
        { id: "settleloans-support", title: "SettleLoans Expert Help" },
        { id: "helpful-resources", title: "Helpful Resources" },
        { id: "faqs", title: "Common Questions" }
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
                            Delhi High Court Legal Update
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                            LOC Cannot Be Issued for <span className="text-[#1F5EFF]">Mere Bank Loan Default</span>
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.2] font-normal">
                            Understand your fundamental rights. The Delhi High Court has repeatedly quashed Lookout Circulars issued by banks against borrowers, ruling that financial defaults alone do not justify travel restrictions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact-us" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Consult Legal Expert
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
                                <li><Link href="/legal-help-for-loan-settlement" className="hover:text-[#1F5EFF] transition-colors">Legal Help</Link></li>
                                <li><span className="text-gray-300">/</span></li>
                                <li className="font-bold text-[#2E2E2E]" aria-current="page">LOC Delhi HC Ruling</li>
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
                                The Delhi High Court's Landmark Stance on <span className="text-[#1F5EFF]">Lookout Circulars</span>
                            </h2>
                            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6 font-bold">
                                    In a series of robust judgments, the Delhi High Court has established a clear legal boundary: banks cannot use Lookout Circulars (LOCs) as a tool for recovery against borrowers who have defaulted on loans.
                                </p>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                                    The right to travel abroad is not just a privilege but a fundamental right enshrined in Article 21 of the Indian Constitution. For years, financial institutions—especially Public Sector Banks (PSBs)—have been requesting the issuance of LOCs against directors, guarantors, and individual borrowers simply because a loan account was classified as a Non-Performing Asset (NPA). This aggressive tactic often leads to individuals being detained at international airports, causing immense personal and professional damage.
                                </p>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6 font-bold text-[#1F5EFF]">
                                    SettleLoans brings you this comprehensive analysis of how the Delhi High Court has protected borrowers from this coercive executive measure. We believe in empowering citizens with the legal knowledge necessary to fight back against institutional overreach and secure their freedom of movement while resolving financial disputes through legitimate channels.
                                </p>
                            </div>
                        </section>

                        <section id="understanding-loc" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">What is a Lookout Circular (LOC)?</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                A Lookout Circular is an internal communication used by law enforcement agencies and financial institutions to keep track of individuals who are wanted by the police or are suspected of having committed a crime. The primary objective is to prevent such individuals from leaving the country.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                The issuance of an LOC is governed by the Office Memorandums (OMs) issued by the Ministry of Home Affairs (MHA) from time to time. Historically, LOCs were reserved for individuals involved in cognizable offenses or those evading arrest. However, an amendment in 2018 allowed Chairman and Managing Directors (CMDs) of Public Sector Banks to request LOCs in the "economic interest of India."
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                This expanded power led to a surge in LOCs against corporate borrowers. The Delhi High Court has now stepped in to clarify that "economic interest" does not mean the recovery of a specific loan amount from a single borrower. Instead, it refers to grave economic crimes that could destabilize the nation's financial system.
                            </p>
                        </section>

                        <section id="mere-default-myth" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">The "Mere Bank Loan Default" Myth</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Many borrowers live in fear that defaulting on an EMI or a business loan will automatically lead to their name being added to a "no-fly list." This is a myth that banks often use as a threat during the recovery process.
                            </p>
                            <p className="text-lg leading-relaxed mb-6 font-bold">
                                The Delhi High Court has been unequivocal: the inability to pay a debt is a civil matter, not a criminal one.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                In numerous cases, the Court has observed that unless there is credible evidence of fraud, siphoning of funds, or a deliberate attempt to flee the country to evade justice, an LOC is completely illegal. A bank cannot request an LOC just because they find it difficult to recover money through the standard Debt Recovery Tribunal (DRT) or SARFAESI Act procedures.
                            </p>
                            <p className="text-lg leading-relaxed mb-6 italic text-gray-500 bg-blue-50 p-6 border-l-4 border-[#1F5EFF] rounded-xl">
                                "The mere fact that a person is a director of a company that has defaulted or that the person is a guarantor does not make them a flight risk. The power to curtail travel must be exercised with extreme caution and only in the most exceptional circumstances." — Delhi High Court.
                            </p>
                        </section>

                        <section id="delhi-hc-judgments" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Landmark Judgments: The Legal Shield for Borrowers</h2>
                            <p className="text-lg leading-relaxed mb-8">
                                The evolution of LOC law in Delhi has been marked by several key rulings that have progressively narrowed the scope of executive power. These judgments serve as a shield for borrowers who find themselves unfairly targeted.
                            </p>
                            <div className="space-y-6 mb-10">
                                <div className="p-8 bg-gray-50 border-l-8 border-[#1F5EFF] rounded-r-2xl shadow-sm">
                                    <h4 className="font-bold text-2xl mb-4 text-[#2E2E2E]">Sumer Singh Salkan vs. Asstt. Director</h4>
                                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                                        This foundational judgment laid down the criteria for issuing an LOC. It established that an LOC can only be issued when there is a pending criminal case or when the individual is deliberately avoiding appearance before a court.
                                    </p>
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        <strong>Technical Note:</strong> The Court clarified that if a person is cooperating with the investigation or has already appeared in court, the LOC must be withdrawn.
                                    </p>
                                </div>
                                <div className="p-8 bg-gray-50 border-l-8 border-[#1F5EFF] rounded-r-2xl shadow-sm">
                                    <h4 className="font-bold text-2xl mb-4 text-[#2E2E2E]">Prashant Shellar vs. Managing Director</h4>
                                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                                        In this case, the Delhi High Court quashed an LOC issued by a bank against a borrower who was regularly appearing before the DRT. The Court noted that the bank was using the LOC as an "arm-twisting tactic" to force a settlement.
                                    </p>
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        The judgment emphasized that banks have other legal remedies for recovery and cannot resort to restricting a citizen's fundamental right to travel for purely commercial reasons.
                                    </p>
                                </div>
                                <div className="p-8 bg-gray-50 border-l-8 border-[#1F5EFF] rounded-r-2xl shadow-sm">
                                    <h4 className="font-bold text-2xl mb-4 text-[#2E2E2E]">Deepak Singhal vs. Union of India (2024)</h4>
                                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                                        A more recent ruling where the Court quashed an LOC against a director of a company in liquidation. The Court held that liquidation is a civil process and the director's presence in India is not required at all times unless specific criminal charges are framed.
                                    </p>
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        This judgment is crucial for entrepreneurs whose businesses have failed due to genuine market conditions.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="article-21-rights" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Article 21 and the Inalienable Right to Travel</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The Supreme Court of India, in the landmark case of Maneka Gandhi vs. Union of India, established that the right to travel abroad is an integral part of "personal liberty" under Article 21. Any procedure that seeks to deprive a person of this liberty must be "fair, just, and reasonable."
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                When a bank requests an LOC for a loan default, it often bypasses this requirement. The decision is made behind closed doors, without giving the borrower a chance to be heard. This lack of "natural justice" is why the Delhi High Court frequently intervenes.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 mb-10">
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl">
                                    <h4 className="font-bold text-[#1F5EFF] mb-3">Violation of Liberty</h4>
                                    <p className="text-sm">Stopping someone at the airport without a court order or a criminal charge is a direct violation of their personal liberty. The Court views this as an extreme measure that can only be justified by national security or grave criminal acts.</p>
                                </div>
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl">
                                    <h4 className="font-bold text-[#1F5EFF] mb-3">Lack of Proportionality</h4>
                                    <p className="text-sm">The legal principle of 'proportionality' means the punishment must fit the 'crime'. Restricting travel for a loan default is considered disproportionate because the loss is financial, while the restriction is on a fundamental human right.</p>
                                </div>
                            </div>
                        </section>

                        <section id="economic-interest" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Defining the "Economic Interest of India"</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                One of the most debated phrases in LOC law is "economic interest of India." Banks often argue that since the default is large, it affects the bank's health, and by extension, the national economy.
                            </p>
                            <p className="text-lg leading-relaxed mb-6 font-bold">
                                The Delhi High Court has rejected this broad interpretation.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                For an LOC to be valid under the "economic interest" clause, there must be evidence of a systemic threat. Examples include massive money laundering, terror financing, or a scam of such magnitude that it shakes the confidence of the general public in the banking system (e.g., the Nirav Modi or Vijay Mallya cases). A routine business failure, even if the loan amount is in hundreds of crores, does not automatically qualify as a threat to the nation's economic interest.
                            </p>
                        </section>

                        <section id="vicarious-liability" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">No Vicarious Liability: Protecting Directors and Guarantors</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                A common tactic used by banks is to issue LOCs against every director on the board of a defaulting company, including independent and non-executive directors. They also target family members who might have signed as personal guarantors.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                The Delhi High Court has ruled against this practice of "vicarious liability." Unless the specific individual is directly involved in the misappropriation of funds or has committed a personal act of fraud, they cannot be prevented from traveling just because the company defaulted.
                            </p>
                            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 my-8">
                                <p className="text-lg font-bold mb-4">Key Protections for Directors:</p>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="text-[#1F5EFF] mr-2">✔</span>
                                        <span>Independent directors cannot be held liable for the company's financial defaults unless they were part of the day-to-day management.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#1F5EFF] mr-2">✔</span>
                                        <span>Personal guarantors have a right to travel unless they are proven to be actively hiding assets abroad.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#1F5EFF] mr-2">✔</span>
                                        <span>Mere suspicion of future non-cooperation is not a ground for an LOC.</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section id="challenging-loc" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">How to Challenge an Illegal LOC: A Step-by-Step Guide</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                If you discover an LOC against your name—often only when you are stopped at the Immigration counter—you must act quickly. The Delhi High Court is the primary forum for challenging LOCs issued by central agencies or banks with headquarters in Delhi.
                            </p>
                            <div className="bg-[#1F5EFF]/5 p-8 rounded-3xl border border-[#1F5EFF]/20 mb-10">
                                <h4 className="text-2xl font-black text-[#2E2E2E] mb-6">The Legal Strategy</h4>
                                <ol className="space-y-4 text-base font-medium">
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs flex-shrink-0 mt-1">1</span>
                                        <span><strong>Filing a Writ Petition:</strong> File a petition under Article 226 of the Constitution seeking the quashing of the LOC and a direction to the bank to withdraw their request.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs flex-shrink-0 mt-1">2</span>
                                        <span><strong>Seeking Interim Relief:</strong> Ask the Court for urgent permission to travel for a specific duration, especially for business, medical, or family emergencies.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs flex-shrink-0 mt-1">3</span>
                                        <span><strong>Challenging the OM:</strong> Argue that the Office Memorandum used by the bank does not apply to your specific case as there is no "economic interest" threat.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs flex-shrink-0 mt-1">4</span>
                                        <span><strong>Proving Cooperation:</strong> Provide evidence that you have been cooperating with the bank's recovery process (DRT/SARFAESI) and have not evaded any legal notices.</span>
                                    </li>
                                </ol>
                            </div>
                        </section>

                        <section id="settleloans-support" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">SettleLoans: Your Partner in Debt Resolution and Legal Defense</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                At SettleLoans, we understand that an LOC is often the "final straw" for a borrower already struggling with financial stress. Our team of legal experts and debt resolution consultants works tirelessly to protect your rights.
                            </p>
                            <p className="text-lg leading-relaxed mb-6 font-bold">
                                We don't just fight the LOC; we solve the underlying problem.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                By negotiating strategic One-Time Settlements (OTS) with banks, we remove the very basis of their "flight risk" argument. Once a settlement is reached, the bank is legally bound to withdraw all recovery actions, including Lookout Circulars. We bridge the gap between aggressive banking recovery and your fundamental right to live with dignity.
                            </p>
                        </section>

                        <section id="helpful-resources" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Helpful Resources</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                If you are dealing with loan defaults or bank harassment, the following resources from our site might be helpful:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/loan-settlement-lawyers" className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#1F5EFF] transition-colors">
                                    <h5 className="font-bold text-[#1F5EFF]">Loan Settlement Lawyers</h5>
                                    <p className="text-sm text-gray-600">Expert legal advice for settling outstanding debts.</p>
                                </Link>
                                <Link href="/punishment-for-non-payment-of-personal-loan-in-india" className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#1F5EFF] transition-colors">
                                    <h5 className="font-bold text-[#1F5EFF]">Punishment for Default</h5>
                                    <p className="text-sm text-gray-600">Understand the legal consequences of loan non-payment.</p>
                                </Link>
                                <Link href="/rbi-rules-for-recovery-agents" className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#1F5EFF] transition-colors">
                                    <h5 className="font-bold text-[#1F5EFF]">RBI Recovery Rules</h5>
                                    <p className="text-sm text-gray-600">Know your rights against recovery agent harassment.</p>
                                </Link>
                                <Link href="/how-to-stop-loan-recovery-harassment" className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#1F5EFF] transition-colors">
                                    <h5 className="font-bold text-[#1F5EFF]">Stop Harassment</h5>
                                    <p className="text-sm text-gray-600">Practical steps to handle aggressive recovery agents.</p>
                                </Link>
                                <Link href="/debt-settlement-company-in-india" className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#1F5EFF] transition-colors">
                                    <h5 className="font-bold text-[#1F5EFF]">Debt Settlement in India</h5>
                                    <p className="text-sm text-gray-600">How professional firms help you settle for less.</p>
                                </Link>
                            </div>
                        </section>

                        <section id="success-stories" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">LOC Case Success History</h2>
                            <div className="grid md:grid-cols-2 gap-10 not-prose">
                                {[
                                    {
                                        name: "Rajesh Kumar",
                                        loc: "Delhi/Gurugram",
                                        outcome: "LOC Quashed",
                                        story: "The bank issued an LOC for a Rs. 5 Crore business loan default. SettleLoans filed a writ in the Delhi High Court, proving no criminal intent. The LOC was quashed within 3 weeks."
                                    },
                                    {
                                        name: "Anita M.",
                                        loc: "Noida",
                                        outcome: "Travel Permission Granted",
                                        story: "An NRI director was stopped at IGI airport. We obtained urgent interim relief from the Delhi HC, allowing her to return to her job in London while the case continued."
                                    },
                                    {
                                        name: "Suresh P.",
                                        loc: "Faridabad",
                                        outcome: "Bank Withdrew LOC",
                                        story: "After we negotiated a 50% OTS for his personal loan, the bank was forced to withdraw the LOC request as part of the settlement agreement."
                                    },
                                    {
                                        name: "Vikram S.",
                                        loc: "New Delhi",
                                        outcome: "Fundamental Right Upheld",
                                        story: "The bank claimed 'economic interest' for a Rs. 2 Crore default. The Court agreed with our argument that this was a routine commercial matter and quashed the LOC."
                                    },
                                    {
                                        name: "Deepak G.",
                                        loc: "Ghaziabad",
                                        outcome: "Illegal Detention Resolved",
                                        story: "A guarantor was detainted due to an LOC against the main borrower. We proved no personal liability, and the High Court ordered immediate removal of his name from the list."
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
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">LOC & Travel Rights FAQs</h2>
                            <div className="space-y-6 not-prose">
                                {[
                                    { q: "Can a bank issue an LOC for a simple loan default?", a: "No, the Delhi High Court has ruled that a Lookout Circular (LOC) cannot be issued merely for a bank loan default or inability to pay. It is considered a violation of the fundamental right to travel under Article 21." },
                                    { q: "What is the legal basis for challenging an LOC in India?", a: "The primary legal basis is Article 21 of the Constitution, which guarantees the right to travel abroad. Courts also rely on various Office Memorandums (OM) issued by the Ministry of Home Affairs, which specify that LOCs should be a measure of last resort." },
                                    { q: "Does the Delhi High Court allow travel if an LOC exists?", a: "Yes, if the LOC is based solely on commercial defaults without any criminal intent or 'detriment to the economic interest of India', the Court often quashes the LOC or grants permission to travel with certain conditions." },
                                    { q: "How do I know if there is an LOC against me?", a: "Unfortunately, LOCs are usually confidential. Most people find out only when they are stopped by immigration at an airport. However, if you are a wilful defaulter or have a large outstanding debt, you can proactively check with the bank or file a query through a lawyer." },
                                    { q: "Can a private bank request an LOC?", a: "Initially, only Public Sector Banks had this power. However, private banks often move through law enforcement agencies (like the EOW or CBI) by filing an FIR, which then leads to an LOC. The Court's stance remains the same: no criminal act means no LOC." },
                                    { q: "What happens if I am stopped at the airport due to an LOC?", a: "You will be detained by immigration and the 'originating agency' (the bank or police) will be informed. You should immediately contact a lawyer to file an urgent writ petition in the High Court for your release and permission to travel." },
                                    { q: "Can an LOC be issued against a guarantor?", a: "Yes, banks often target guarantors. But the Delhi High Court has clarified that a guarantor is not vicariously liable for the borrower's potential flight risk. Unless the guarantor himself has committed fraud, the LOC is illegal." },
                                    { q: "How long does it take to get an LOC quashed?", a: "A writ petition in the Delhi High Court can take anywhere from a few days for urgent interim travel permission to a few months for final quashing of the LOC." },
                                    { q: "Does paying the loan amount automatically remove the LOC?", a: "Once the debt is settled and the bank issues a No Objection Certificate (NOC), they are required to inform the MHA to withdraw the LOC. However, this process can be slow, and you might need a court order to speed it up." },
                                    { q: "Can I get compensation for an illegal LOC?", a: "Yes, in several cases, the Delhi High Court has awarded costs and compensation to individuals who were wrongfully detained or prevented from traveling due to an illegal LOC issued by a bank." },
                                    { q: "What is the difference between an LOC and a Red Corner Notice?", a: "An LOC is a domestic circular used within India. A Red Corner Notice (RCN) is an international request issued through INTERPOL to locate and arrest a person globally. RCNs are only for serious criminal offenders." },
                                    { q: "Can an LOC be issued for an unsecured loan like a credit card?", a: "It is highly unlikely. LOCs are typically reserved for large corporate or mortgage defaults where the amount is significant. For small unsecured loans, banks use civil suits or check bounce cases, not LOCs." }
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
                            <h2 className="text-3xl font-black mb-6">Challenge Your Illegal LOC Today</h2>
                            <p className="text-xl mb-8 opacity-90">
                                Don't let banks restrict your freedom of movement. Our legal team specializes in Delhi High Court writ petitions to quash illegal Lookout Circulars.
                            </p>
                            <Link href="/contact-us" className="inline-block bg-white text-[#1F5EFF] font-black py-4 px-10 rounded-xl hover:scale-105 transition-all text-lg shadow-2xl">
                                Request Urgent Legal Consultation
                            </Link>
                        </div>

                    </article>

                    {/* Right Column: Sticky Widgets */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-24 space-y-8">

                            {/* CTA Box */}
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                                <div className="bg-[#1F5EFF] p-4 text-center">
                                    <h3 className="text-lg font-black text-white px-2">LOC Legal Support</h3>
                                </div>
                                <div className="p-8 text-center">
                                    <p className="mb-8 text-sm text-[#DEDEDE] opacity-90 leading-relaxed font-bold">
                                        Stopped at the airport or facing travel threats from banks? Get expert legal defense today.
                                    </p>
                                    <Link href="/contact-us" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-4 rounded-[12px] hover:scale-110 transition-all shadow-md group-hover:shadow-2xl">
                                        Get Legal Help Now
                                    </Link>
                                    <p className="mt-6 text-[10px] text-[#DEDEDE]/60 uppercase tracking-[0.3em] font-black">Expert Delhi HC Lawyers</p>
                                </div>
                            </div>

                            {/* Related Guides */}
                            <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2 text-center">Legal Resources</h3>
                                <ul className="space-y-4 text-sm font-extrabold px-2">
                                    <li>
                                        <Link href="/punishment-for-non-payment-of-personal-loan-in-india" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight">
                                            <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors flex-shrink-0"></span>
                                            Default Punishment Guide
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/rbi-rules-for-recovery-agents" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight">
                                            <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors flex-shrink-0"></span>
                                            RBI Recovery Rules
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
