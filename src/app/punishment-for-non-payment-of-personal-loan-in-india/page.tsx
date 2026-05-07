"use client";

import React from "react";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";

export default function PunishmentPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "@id": "https://settleloans.in/punishment-for-non-payment-of-personal-loan-in-india#article",
                "headline": "Punishment for Non-Payment of Personal Loan in India: Legal Rights & Solutions",
                "description": "Exhaustive guide on legal consequences, punishment, and RBI guidelines for non-payment of personal loans in India. Understand your rights against harassment.",
                "image": "https://settleloans.in/images/loan-punishment-india.jpg",
                "author": { "@type": "Organization", "name": "SettleLoans" },
                "publisher": {
                    "@type": "Organization",
                    "name": "SettleLoans",
                    "logo": { "@type": "ImageObject", "url": "https://settleloans.in/logo.png" }
                },
                "datePublished": "2024-03-05",
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://settleloans.in/punishment-for-non-payment-of-personal-loan-in-india" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/punishment-for-non-payment-of-personal-loan-in-india#product",
                "name": "Personal Loan Legal Defense & Settlement Service",
                "description": "Expert legal representation and negotiation services for borrowers facing personal loan recovery actions in India.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "3240"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Rajesh Khanna" },
                        "datePublished": "2024-01-15",
                        "reviewBody": "SettleLoans helped me handle the legal notices I was receiving. Their understanding of RBI guidelines really protected my family from harassment.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Simran Kaur" },
                        "datePublished": "2024-02-02",
                        "reviewBody": "Professional and compassionate. They managed the recovery agents who were harassing my family. Finally debt free.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Amit Sharma" },
                        "datePublished": "2024-02-10",
                        "reviewBody": "I was drowning in debt after a health crisis. SettleLoans settled the whole thing for a manageable amount. They saved my life.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Priya V." },
                        "datePublished": "2024-02-15",
                        "reviewBody": "The recovery agents were calling my parents. SettleLoans stopped it in 24 hours. Their empathy is unmatched.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Mohit Gupta" },
                        "datePublished": "2024-02-20",
                        "reviewBody": "Human and transparent. They provide mental peace along with debt resolution. Highly recommended.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Can I be jailed for non-payment of a personal loan in India?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "In India, loan default is primarily a civil matter. You cannot be jailed simply for being unable to pay. However, criminal proceedings can start if there is a cheque bounce (Section 138) or if fraud was committed during loan application."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are the RBI guidelines for recovery agents?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "RBI mandates that agents can only call between 8 AM and 7 PM, cannot use abusive language, and must respect your privacy. Harassment can lead to heavy penalties for the lending institution."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does personal loan default affect my credit score?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A default will lead to a significant drop in your CIBIL score, often by 100 points or more. This makes it extremely difficult to secure any future loans or credit cards for several years."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is Section 138 of the Negotiable Instruments Act?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Section 138 deals with cheque bouncing. If your repayment cheque or NACH mandate fails due to insufficient funds, the lender can file a criminal complaint which could lead to imprisonment or fine."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can a bank take my house for an unsecured personal loan?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "For unsecured loans, banks cannot seize your house directly using SARFAESI Act. They must first file a civil suit and get a court decree for attachment of assets, which is a long legal process."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What should I do if I am being harassed by recovery agents?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Record all calls, don't use abusive language back, and file a formal complaint with the bank's nodal officer and the RBI Ombudsman. You can also seek legal protection through firms like SettleLoans."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is it possible to settle a personal loan after receiving a legal notice?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, you can settle at any stage. Most banks prefer a settlement (OTS) over a long legal battle. SettleLoans specializes in negotiating these settlements on behalf of the borrower."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How long does a loan default stay on a CIBIL report?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A default remains on your credit report for seven years. Even if you settle, it will show as 'Settled' for that period, though it is better than a 'Written Off' or 'Defaulted' status."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I travel abroad with a personal loan default?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, generally you can. A loan default does not stop you from traveling. Only if a court has issued a specific lookout circular (LOC) in a major fraud case would your travel be restricted."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the limitation period for loan recovery in India?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Lenders generally have 3 years from the date of the last payment or acknowledgment of debt to file a civil recovery suit. However, this period can be extended if you make even a partial payment or sign a balance confirmation."
                        }
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://settleloans.in" },
                    { "@type": "ListItem", "position": 2, "name": "Legal Consequences", "item": "https://settleloans.in/punishment-for-non-payment-of-personal-loan-in-india" }
                ]
            }
        ]
    };

    const tocItems = [
        { id: "introduction", title: "Introduction" },
        { id: "legal-status", title: "Civil vs Criminal Nature" },
        { id: "immediate-consequences", title: "Immediate Aftermath" },
        { id: "section-138-ni-act", title: "Section 138 (Cheque Bounce)" },
        { id: "ipc-420-cheating", title: "IPC 420 & Fraud Angle" },
        { id: "rbi-fair-practices", title: "RBI Fair Practice Code" },
        { id: "harassment-protection", title: "Stopping Harassment" },
        { id: "civil-recovery-suits", title: "Order 37 Summary Suits" },
        { id: "asset-attachment", title: "Asset Attachment Myths" },
        { id: "ots-settlement", title: "The Settlement Solution" },
        { id: "success-stories", title: "Client Success History" },
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
                            Legal Protection & Debt Relief
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                            Actual <span className="text-[#1F5EFF]">Punishment for Non-Payment</span> of Personal Loan in India
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.2] font-normal">
                            Separate the myths from the reality. Understand the legal landscape of loan defaults, your constitutional rights against harassment, and how to find a way back to financial freedom.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact-us" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Consult a Legal Expert
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
                                <li className="font-bold text-[#2E2E2E]" aria-current="page">Punishment for Non-Payment of Personal Loan</li>
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
                                Navigating the <span className="text-[#1F5EFF]">Legal Consequences</span> of Loan Default in India
                            </h2>
                            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6 font-bold">
                                    Facing an inability to repay a personal loan is one of the most stressful experiences a person can go through. The fear of legal punishment, social shaming, and losing one's future can be overwhelming.
                                </p>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                                    However, it is crucial to understand that India's legal system is designed to protect honest borrowers who find themselves in financial distress. While banks use fear as a recovery tool, the law recognizes that financial failure is not a crime. Whether you have lost your job, faced a medical emergency, or experienced a business downturn, there is a legal framework that shields you from excessive aggression.
                                </p>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6 font-bold text-[#1F5EFF]">
                                    SettleLoans provides the most sophisticated legal defense and debt resolution strategies in India. We help you separate the myths (like immediate arrest) from the actual legal realities, ensuring you can sleep peacefully while we negotiate a way out for you.
                                </p>
                            </div>
                        </section>

                        <section id="legal-status" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">The Legal Status: Civil vs Criminal Nature of Debt</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The most important thing for any borrower to know is that defaulting on a personal loan is primarily a **civil matter**. When you sign a loan agreement, you are entering into a civil contract. If you cannot pay, you have breached that contract. This allows the bank to sue you for the money, but it does not automatically make you a criminal.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                In the landmark judgment of Jolly George Varghese v. Bank of Cochin, the Supreme Court of India held that a person cannot be thrown into prison simply because they do not have the money to pay their debts. Article 21 of the Constitution protects your personal liberty. To put someone in jail for debt, the lender must prove that the borrower has the money but is willfully refusing to pay, which is a very high bar to meet in court.
                            </p>
                            <p className="text-lg leading-relaxed mb-6 font-bold">
                                Criminal proceedings only enter the picture if there is evidence of fraud (IPC 420) or if there is a cheque bounce (Section 138 of the NI Act). If you took the loan with honest intentions and have not engaged in forgery, you are fundamentally safe from criminal "punishment" in the traditional sense of the word.
                            </p>
                        </section>

                        <section id="immediate-consequences" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">The Immediate Aftermath of a Personal Loan Default</h2>
                            <p className="text-lg leading-relaxed mb-8">
                                While you might not go to jail, the practical consequences of a default are severe and immediate. Banks start their recovery process the moment an EMI is missed, and the pressure mounts as the account moves towards the 90-day NPA (Non-Performing Asset) mark.
                            </p>
                            <div className="space-y-6 mb-10">
                                <div className="p-8 bg-gray-50 border-l-8 border-[#1F5EFF] rounded-r-2xl shadow-sm">
                                    <h4 className="font-bold text-2xl mb-4 text-[#2E2E2E]">The Financial Spiral</h4>
                                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                                        Lenders will charge late payment fees and penal interest. This penal interest is often calculated on the entire outstanding amount, not just the missed EMI. Over 6 months, a default of 1 Lakh can easily grow into 1.5 Lakhs due to these aggressive compounding charges.
                                    </p>
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        <strong>Pro Tip:</strong> Always check your loan statement. Banks sometimes charge illegal "penalty on penalty," which we can challenge during the settlement process.
                                    </p>
                                </div>
                                <div className="p-8 bg-gray-50 border-l-8 border-[#1F5EFF] rounded-r-2xl shadow-sm">
                                    <h4 className="font-bold text-2xl mb-4 text-[#2E2E2E]">CIBIL and Credit Destruction</h4>
                                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                                        Every month of default is reported to credit bureaus like CIBIL, Experian, and Equifax. Your credit score will crash from a healthy 750+ to below 600 within 3 to 4 months. This is perhaps the most lasting "punishment," as it locks you out of the formal banking system for 5 to 7 years.
                                    </p>
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        Once your score is damaged, getting a home loan, a car loan, or even a credit card becomes impossible. Some companies even check credit scores during the hiring process for senior financial roles.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="section-138-ni-act" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Section 138 of the Negotiable Instruments Act: The Cheque Bounce Trap</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                This is the only area where a personal loan default can truly lead to a criminal court. When you take a loan, you provide a NACH (National Automated Clearing House) mandate or post-dated cheques. If these are presented and they fail due to "insufficient funds," it is a criminal offense under Section 138.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 mb-10">
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl">
                                    <h4 className="font-bold text-[#1F5EFF] mb-3">The Legal Notice</h4>
                                    <p className="text-sm">The bank must send you a formal notice within 30 days of the bounce. You then have 15 days to pay the amount. If you don't, the bank can file a case in a criminal court. It is vital to reply to this notice with a strong legal defense.</p>
                                </div>
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl">
                                    <h4 className="font-bold text-[#1F5EFF] mb-3">The Punishment</h4>
                                    <p className="text-sm">The punishment can be imprisonment for up to two years or a fine that is twice the amount of the bounced cheque. However, in practice, these cases take years, and the courts usually encourage a settlement rather than jail time for first-time defaulters.</p>
                                </div>
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl">
                                    <h4 className="font-bold text-[#1F5EFF] mb-3">Bailable Offense</h4>
                                    <p className="text-sm">Unlike murder or robbery, a Section 138 case is a bailable offense. Even if a warrant is issued, you can get bail by appearing before the court and providing a surety. You will not be kept in jail during the trial.</p>
                                </div>
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl">
                                    <h4 className="font-bold text-[#1F5EFF] mb-3">Compounding</h4>
                                    <p className="text-sm">The best part of Section 138 is that it is "compoundable." This means you can settle the matter at any stage by paying the bank, and the criminal case will be dismissed instantly. This is where our negotiation skills come in.</p>
                                </div>
                            </div>
                        </section>

                        <section id="ipc-420-cheating" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">IPC Section 420: Can They Charge You with Cheating?</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Recovery agents often threaten to file an FIR under Section 420 (Cheating) of the Indian Penal Code. This is a very serious charge, but it is extremely difficult for a bank to prove in a genuine loan default case.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                For a charge of cheating to stick, the bank must prove that you had a "fraudulent intention" at the very moment you took the loan. If you provided genuine salary slips, a real address, and paid even a few EMIs, the bank cannot claim you cheated them. Your subsequent inability to pay is a change in circumstances, not a criminal intent.
                            </p>
                            <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-200 my-8">
                                <h4 className="font-bold text-yellow-900 mb-4 text-xl">The "Forgery" Exception</h4>
                                <p className="text-base text-yellow-800 leading-relaxed mb-4">
                                    The only time an IPC 420 or 467 (forgery) case becomes dangerous is if you submitted fake documents (forged bank statements, fake salary slips) to get the loan. If that is the case, you need immediate legal counsel to mitigate the damage.
                                </p>
                                <p className="text-base text-yellow-800 leading-relaxed">
                                    For 99% of borrowers who used their real documents, the threat of IPC 420 is nothing more than a hollow scare tactic used by agents to force a payment.
                                </p>
                            </div>
                        </section>

                        <section id="rbi-fair-practices" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">The RBI Fair Practice Code: Your Shield Against Aggression</h2>
                            <p className="text-lg leading-relaxed mb-6 font-bold">
                                The Reserve Bank of India (RBI) has strict guidelines on how banks and recovery agents must conduct themselves.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Most borrowers don't realize that they have rights even when they owe money. Lenders and their third-party agents are prohibited from using "muscle power" or intimidation. If a recovery agent behaves unethically, you can actually file a counter-suit against the bank, which often leads to them offering you a much better settlement just to make the complaint go away.
                            </p>
                            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 my-8">
                                <p className="text-lg font-bold mb-4">Key RBI Guidelines You Must Know:</p>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="text-[#1F5EFF] mr-2">✔</span>
                                        <span><strong>Communication Hours:</strong> Agents can only call or visit between 8:00 AM and 7:00 PM. Calls at midnight are a criminal violation of privacy.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#1F5EFF] mr-2">✔</span>
                                        <span><strong>No Harassment:</strong> They cannot call your neighbors, distant relatives, or your workplace to shame you. Your debt is a confidential contract.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#1F5EFF] mr-2">✔</span>
                                        <span><strong>Identification:</strong> Every agent must carry an ID card and an authorization letter from the bank. If they don't, they are trespassers and you can call the police.</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section id="harassment-protection" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">How to Protect Yourself from Recovery Harassment</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                If you are being harassed, the first step is to stop being afraid. Fear is the only power they have over you. Once you realize the law is on your side, the harassment loses its sting.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                We recommend a "Zero Tolerance" policy for abuse. If an agent uses foul language, record the call. If they visit your house without an ID, record a video. Then, send a formal email to the bank's Nodal Officer with this evidence. Lenders are terrified of the RBI Ombudsman, as one well-documented complaint can cost them lakhs in fines.
                            </p>
                            <p className="text-lg leading-relaxed mb-6 font-bold text-[#1F5EFF]">
                                At SettleLoans, we act as a legal buffer. Once you authorize us, we notify the bank that we are your legal representatives. This usually stops 90% of the aggressive calls immediately, as banks know they cannot use their usual tactics against a professional legal team.
                            </p>
                        </section>

                        <section id="civil-recovery-suits" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Order 37 Summary Suits: The Bank's Civil Weapon</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                For large personal loans, banks might file a Summary Suit under Order 37 of the Code of Civil Procedure (CPC). This is a faster civil process designed for debt recovery.
                            </p>
                            <div className="bg-[#1F5EFF]/5 p-8 rounded-3xl border border-[#1F5EFF]/20 mb-10">
                                <h4 className="text-2xl font-black text-[#2E2E2E] mb-6">The Summary Suit Process</h4>
                                <p className="text-lg leading-relaxed mb-4">
                                    Unlike a normal civil case that takes 10 years, a summary suit can be decided in 1 to 2 years. Here is how it works:
                                </p>
                                <ol className="space-y-4 text-base font-medium">
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs flex-shrink-0 mt-1">1</span>
                                        <span>The bank files the suit and the court issues a summons. You must appear within 10 days of receiving this summons.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs flex-shrink-0 mt-1">2</span>
                                        <span>You must file a "Leave to Defend" application. This is where we argue why you haven't paid (e.g., job loss, illegal charges) and why the bank's claim is inflated.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs flex-shrink-0 mt-1">3</span>
                                        <span>If the court grants you leave to defend, the case becomes a normal trial. This gives us immense leverage to negotiate a settlement, as the bank knows the trial will take years.</span>
                                    </li>
                                </ol>
                                <p className="mt-8 text-lg font-bold text-[#1F5EFF]">
                                    Receiving a court summons is actually a "Negotiation Opportunity." Banks are much more willing to give a 50% waiver once a case is in court, as they want to avoid the legal costs and time delay.
                                </p>
                            </div>
                        </section>

                        <section id="asset-attachment" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Can the Bank Seize My Salary or My House?</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                This is one of the most common fears among salaried professionals. For an unsecured personal loan, a bank cannot simply walk into your office and take your salary. They cannot simply enter your house and take your furniture.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                To attach any asset or garnish your salary, the bank must first win a civil suit and get an "Execution Decree" from a judge. This process usually takes 3 to 5 years. Even then, the law (Section 60 of the CPC) protects a portion of your salary, your basic furniture, and your primary residence from being seized for small unsecured debts.
                            </p>
                        </section>

                        <section id="ots-settlement" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">The Light at the End of the Tunnel: Loan Settlement (OTS)</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                If you truly cannot pay the full amount, the most logical and legal solution is a **One-Time Settlement (OTS)**.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Banks have a provision for this. They know that some people will inevitably face hard times. Instead of fighting a legal case for 5 years and getting nothing, they would rather take 40% or 50% of the principal amount today and close the file. This is a win-win situation. You get rid of the debt forever, and the bank recovers at least some of their money.
                            </p>
                            <div className="bg-blue-50 p-8 rounded-xl border border-blue-200 my-8">
                                <h4 className="font-bold text-blue-900 mb-4 text-xl">How Settlement Works for You</h4>
                                <p className="text-base text-blue-800 leading-relaxed mb-4">
                                    A settlement stops all legal proceedings. It stops all recovery calls. It stops the penal interest from growing. Most importantly, it gives you back your mental peace.
                                </p>
                                <p className="text-base text-blue-800 leading-relaxed">
                                    We specialize in "Financial Hardship Profiling." We present your case to the bank's senior management in a way that proves you are a "Genuine Defaulter" and not a "Wilful Defaulter," which is the key to unlocking the highest possible waivers.
                                </p>
                            </div>
                        </section>

                        <section id="success-stories" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Client Success History</h2>
                            <div className="grid md:grid-cols-2 gap-10 not-prose">
                                {[
                                    {
                                        name: "Rajesh Khanna",
                                        loc: "Delhi",
                                        outcome: "Debt Settled at 40%",
                                        story: "Receiving constant threats from recovery agents for a ₹8 Lakh loan. SettleLoans stepped in, filed an RBI complaint, and settled the debt for ₹3.2 Lakhs."
                                    },
                                    {
                                        name: "Simran Kaur",
                                        loc: "Chandigarh",
                                        outcome: "Legal Notices Quashed",
                                        story: "Terrified of a Section 138 notice. Our legal team responded to the notice, highlighting procedural errors by the bank, leading to an out-of-court settlement."
                                    },
                                    {
                                        name: "Amit Sharma",
                                        loc: "Mumbai",
                                        outcome: "Harassment Stopped",
                                        story: "Agents were calling his sister. We sent a legal notice to the bank's Nodal Officer. The harassment stopped within 24 hours and a 50% waiver was granted."
                                    },
                                    {
                                        name: "Priya V.",
                                        loc: "Bangalore",
                                        outcome: "Financial Freedom",
                                        story: "Drowning in 3 different personal loans. We consolidated her situation, negotiated with all 3 banks, and reduced her total liability by ₹12 Lakhs."
                                    },
                                    {
                                        name: "Mohit Gupta",
                                        loc: "Ahmedabad",
                                        outcome: "CIBIL Recovery Plan",
                                        story: "Settled a credit card debt that was pending for 4 years. We ensured the bank issued a proper 'No Dues Certificate' and started his credit repair journey."
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
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Personal Loan Punishment FAQs</h2>
                            <div className="space-y-6 not-prose">
                                {[
                                    { q: "Is it a crime to not pay a personal loan in India?", a: "No, it is not a crime. It is a civil breach of contract. You can only face criminal charges if you used fraudulent documents or if a repayment cheque/NACH mandate bounces." },
                                    { q: "Can the police arrest me at my home for loan default?", a: "No. The police have no authority to arrest you for a simple civil loan default. Only a court can issue a warrant, and that too usually only in criminal cases like Section 138." },
                                    { q: "How many EMIs can I miss before the bank takes legal action?", a: "Usually, after 3 missed EMIs (90 days), your account becomes an NPA. This is when formal legal notices are typically sent, although 'soft recovery' starts from the first missed day." },
                                    { q: "Can a bank call my HR or boss about my loan?", a: "No. Under RBI guidelines, this is strictly prohibited. It is a violation of your right to privacy. If they do this, you can file a complaint with the RBI Ombudsman." },
                                    { q: "What is the maximum penalty for a cheque bounce in India?", a: "Under Section 138 of the NI Act, the maximum punishment is 2 years in jail or a fine that is twice the cheque amount. However, most cases are settled with a much smaller fine." },
                                    { q: "Does a loan settlement affect my ability to get a government job?", a: "Generally, no. A loan settlement is a civil matter and does not appear on criminal background checks. Only a criminal conviction for fraud would affect job eligibility." },
                                    { q: "Can I travel to another country if I have an unpaid loan?", a: "Yes. There are no restrictions on international travel for civil loan defaults. You will not be stopped at the airport unless there is a specific criminal lookout circular." },
                                    { q: "Is it better to settle or just let the default stay?", a: "It is always better to settle. A 'Settled' status is much better on your CIBIL report than 'Written Off' or 'Defaulted,' and it stops all future legal risks and harassment." },
                                    { q: "Can the bank freeze my other bank accounts?", a: "They can only freeze accounts in the same bank (Right of Set-off). To freeze accounts in other banks, they need a specific attachment order from a court." },
                                    { q: "How long does a debt recovery suit take in India?", a: "A standard civil suit can take 5 to 10 years. A summary suit can take 1 to 2 years. This long delay is why banks are often eager to settle out of court." },
                                    { q: "What should I do if I am receiving 50 calls a day?", a: "This is harassment. Block the numbers, record the frequency, and send a formal complaint to the bank's Nodal Officer citing RBI's fair practice code." },
                                    { q: "Can a bank recover money from my parents or children?", a: "No. Unless they were co-applicants or guarantors for the loan, they have no legal liability for your debt. The bank cannot touch their assets or income." }
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

                        <section className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight mt-16">Helpful Resources & Further Reading</h2>
                            <p className="text-lg mb-6">If you are looking for more specific information on managing your debt and protecting your rights, we recommend exploring the following guides from our library:</p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <Link href="/loan-settlement-for-salaried-people" className="p-6 border border-[#DEDEDE] rounded-xl hover:bg-[#1F5EFF]/5 transition-colors group">
                                    <h4 className="font-bold text-[#2E2E2E] group-hover:text-[#1F5EFF]">Debt Relief for Salaried Employees</h4>
                                    <p className="text-sm opacity-70">Specific strategies for professionals facing job loss or pay cuts.</p>
                                </Link>
                                <Link href="/loan-settlement-for-msme-owners" className="p-6 border border-[#DEDEDE] rounded-xl hover:bg-[#1F5EFF]/5 transition-colors group">
                                    <h4 className="font-bold text-[#2E2E2E] group-hover:text-[#1F5EFF]">MSME & Business Loan Recovery</h4>
                                    <p className="text-sm opacity-70">Legal protection for entrepreneurs and small business owners.</p>
                                </Link>
                                <Link href="/how-to-stop-loan-recovery-harassment" className="p-6 border border-[#DEDEDE] rounded-xl hover:bg-[#1F5EFF]/5 transition-colors group">
                                    <h4 className="font-bold text-[#2E2E2E] group-hover:text-[#1F5EFF]">Stopping Recovery Agent Harassment</h4>
                                    <p className="text-sm opacity-70">A step-by-step guide to filing RBI complaints and FIRs.</p>
                                </Link>
                                <Link href="/rbi-rules-for-recovery-agents" className="p-6 border border-[#DEDEDE] rounded-xl hover:bg-[#1F5EFF]/5 transition-colors group">
                                    <h4 className="font-bold text-[#2E2E2E] group-hover:text-[#1F5EFF]">The RBI Recovery Rulebook</h4>
                                    <p className="text-sm opacity-70">Detailed breakdown of the 2024 guidelines for collection agents.</p>
                                </Link>
                            </div>
                        </section>

                        <div className="mt-16 p-8 bg-[#1F5EFF] rounded-3xl text-white text-center">
                            <h2 className="text-3xl font-black mb-6">Stop Living in Fear Today</h2>
                            <p className="text-xl mb-8 opacity-90">
                                Our legal experts have helped thousands of Indians escape the debt trap. Don't wait for a court summons.
                            </p>
                            <Link href="/contact-us" className="inline-block bg-white text-[#1F5EFF] font-black py-4 px-10 rounded-xl hover:scale-105 transition-all text-lg shadow-2xl">
                                Request a Free Debt Evaluation
                            </Link>
                        </div>

                    </article>

                    {/* Right Column: Sticky Widgets */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-24 space-y-8">

                            {/* CTA Box */}
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                                <div className="bg-[#1F5EFF] p-4 text-center">
                                    <h3 className="text-lg font-black text-white px-2">Debt Relief Support</h3>
                                </div>
                                <div className="p-8 text-center">
                                    <p className="mb-8 text-sm text-[#DEDEDE] opacity-90 leading-relaxed font-bold">
                                        Facing legal notices or agent harassment? Get professional help to protect your rights.
                                    </p>
                                    <Link href="/contact-us" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-4 rounded-[12px] hover:scale-110 transition-all shadow-md group-hover:shadow-2xl">
                                        Start My Defense
                                    </Link>
                                    <p className="mt-6 text-[10px] text-[#DEDEDE]/60 uppercase tracking-[0.3em] font-black">Senior Legal Consultants</p>
                                </div>
                            </div>

                            {/* Related Guides */}
                            <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2 text-center">Legal Resources</h3>
                                <ul className="space-y-4 text-sm font-extrabold px-2">
                                    <li>
                                        <Link href="/is-loan-settlement-in-installments-possible" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight">
                                            <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors flex-shrink-0"></span>
                                            Settlement in Installments
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-identify-fake-recovery-agents" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight">
                                            <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors flex-shrink-0"></span>
                                            Spotting Fake Agents
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/loan-settlement-lawyers" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight">
                                            <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors flex-shrink-0"></span>
                                            Consult a Lawyer
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
