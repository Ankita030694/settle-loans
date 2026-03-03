"use client";

import React from "react";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBalanceScale, faGavel, faBriefcase, faIndustry, faChartLine, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function MSMELoanLawyerPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "@id": "https://settleloans.in/best-lawyer-for-MSME-personal-loan#article",
                "headline": "Best Lawyer for MSME Personal Loan Disputes & Recovery (2025 Guide)",
                "description": "Expert MSME legal counsel for business loan disputes, payment recovery under MSMED Act 2006, and SARFAESI defense for small business owners in India.",
                "image": "https://settleloans.in/images/msme-loan-defense.jpg",
                "author": { "@type": "Organization", "name": "SettleLoans" },
                "publisher": {
                    "@type": "Organization",
                    "name": "SettleLoans",
                    "logo": { "@type": "ImageObject", "url": "https://settleloans.in/logo.png" }
                },
                "datePublished": "2024-03-03",
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://settleloans.in/best-lawyer-for-MSME-personal-loan" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/best-lawyer-for-MSME-personal-loan#product",
                "name": "MSME Legal Defense & Recovery Service",
                "description": "Expert legal services for MSMEs including payment recovery, business loan settlement, and SARFAESI defense.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "840"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Vikram Sethi" },
                        "datePublished": "2024-01-22",
                        "reviewBody": "SettleLoans helped us recover our 40-lakh pending payment using the MSME Facilitation Council. Their expertise in MSMED Act is unmatched.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Meera Exports" },
                        "datePublished": "2024-02-15",
                        "reviewBody": "Excellent defense against a SARFAESI notice on our factory premises. We managed to get a fair restructuring plan.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is the 45-day payment rule for MSMEs?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Under the MSMED Act 2006, every buyer must pay the MSME supplier within 45 days. Failure to do so triggers penal interest at 3 times the RBI bank rate."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can MSMEs challenge SARFAESI notices in DRT?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, MSMEs can file a Securitization Application (SA) under Section 17 of the SARFAESI Act in the Debt Recovery Tribunal to challenge illegal possession or auction of their assets."
                        }
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://settleloans.in" },
                    { "@type": "ListItem", "position": 2, "name": "MSME Loan Lawyer", "item": "https://settleloans.in/best-lawyer-for-MSME-personal-loan" }
                ]
            }
        ]
    };

    const tocItems = [
        { id: "introduction", title: "Introduction" },
        { id: "msmed-act", title: "MSMED Act 2006" },
        { id: "payment-recovery", title: "Payment Recovery" },
        { id: "facilitation-councils", title: "Facilitation Councils" },
        { id: "interest-rules", title: "Interest Penalty Rules" },
        { id: "sarfaesi-defense", title: "SARFAESI for MSME" },
        { id: "samadhaan-portal", title: "MSME Samadhaan" },
        { id: "ibc-msme", title: "MSME & IBC" },
        { id: "treds-factoring", title: "TReDS & Factoring" },
        { id: "director-liability", title: "Director Liability" },
        { id: "budget-2025", title: "2025 Budget Impact" },
        { id: "restructuring", title: "Loan Restructuring" },
        { id: "success-stories", title: "Success Stories" },
        { id: "faqs", title: "Common Questions" }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white font-satoshi" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>

                {/* Hero Section */}
                <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden text-center">
                    <div className="max-w-5xl mx-auto relative z-10">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase shadow-sm">
                            Guardians of Small Business
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                            Best Lawyer for <span className="text-[#1F5EFF]">MSME Personal Loan</span> Disputes
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
                            protecting the backbone of the Indian economy. We provide specialized legal expertise for MSME debt recovery, settlement, and bank disputes.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact-us" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-12 rounded-[12px] hover:scale-110 transition-all duration-300 text-lg shadow-xl hover:shadow-[#1F5EFF]/20">
                                Protect My Business
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Breadcrumbs */}
                <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
                    <div className="max-w-7xl mx-auto px-4 md:px-8 py-5">
                        <nav aria-label="Breadcrumb">
                            <ol className="flex items-center space-x-2 text-xs md:text-sm text-[#747474] font-medium">
                                <li><Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link></li>
                                <li><span className="text-gray-300">/</span></li>
                                <li className="font-extrabold text-[#2E2E2E]" aria-current="page">MSME Loan Lawyer</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">

                    {/* Left Column: Table of Contents (Sticky) */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <TableOfContents items={tocItems} />
                    </aside>

                    {/* Middle Column: Main Content */}
                    <article className="w-full lg:w-3/5 flex-1 max-w-none">

                        <section id="introduction" className="scroll-mt-32 mb-20">
                            <h2 className="text-4xl md:text-5xl font-black text-[#2E2E2E] mb-10 leading-tight">
                                Securing the Future of <span className="text-[#1F5EFF]">MSME Entrepreneurs</span>
                            </h2>
                            <div className="bg-white rounded-3xl p-10 border border-[#DEDEDE] shadow-sm hover:shadow-2xl transition-all relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50/50 rounded-bl-full -mr-24 -mt-24 z-0 group-hover:scale-110 transition-transform"></div>
                                <p className="text-xl leading-relaxed text-[#2E2E2E] relative z-10 mb-8 font-extrabold">
                                    Micro, Small, and Medium Enterprises (MSMEs) are the lifeblood of India's development, but they are also the most vulnerable to payment delays and aggressive financial recovery.
                                </p>
                                <p className="text-lg leading-relaxed text-[#2E2E2E] relative z-10 mb-8">
                                    In many cases, an MSME owner takes a "Personal Loan" to fund business operations because of the difficulty in getting formal corporate credit. These loans, though personal in name, are the fuel for a business. When the business faces a payment cycle delay from a large buyer, the personal loan EMI defaults, leading to a cascade of legal threats. This unique intersection of business law and personal liability requires a lawyer who understands the MSMED Act 2006 in spiritual detail.
                                </p>
                                <p className="text-[#1F5EFF] font-black text-lg relative z-10 italic underline decoration-blue-100 underline-offset-4">
                                    At SettleLoans, we don't just treat your case as a "Loan Default"-we treat it as a "Small Business Defense" operation.
                                </p>
                            </div>
                        </section>

                        <section id="msmed-act" className="scroll-mt-32 mb-20 text-[var(--color-text-body)]">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">The Power of MSMED Act 2006</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The MSMED Act is one of the most powerful 'Special Laws' in India, designed to protect small suppliers from the bullying of large corporate buyers. It mandates that no buyer can delay payment beyond 45 days.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                                <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-[#1F5EFF]">
                                    <h4 className="font-black text-[#2E2E2E] mb-2">Section 15: Duty to Pay</h4>
                                    <p className="text-xs opacity-70 font-bold">Mandates payment within the agreed timeframe, never exceeding 45 days.</p>
                                </div>
                                <div className="bg-green-50 p-6 rounded-2xl border-l-4 border-green-500">
                                    <h4 className="font-black text-[#2E2E2E] mb-2">Section 16: Penal Interest</h4>
                                    <p className="text-xs opacity-70 font-bold">Automatic liability for 3x the bank interest rate for delayed payments.</p>
                                </div>
                            </div>
                            <p className="text-lg leading-relaxed mb-8">
                                As your MSME lawyers, we use these sections as a counter-offensive. If you defaulted on your loan because a buyer didn't pay you, we don't just defend your loan-we go after the buyer to recover your money with massive penal interest, which then clears your loan voluntarily.
                            </p>
                        </section>

                        <section id="payment-recovery" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 tracking-tighter">Strategic Payment Recovery System</h2>
                            <p className="text-lg leading-relaxed mb-8">
                                Recovery for an MSME is not about filing a 10-year civil suit. It is about using the "Summary Mechanisms" provided by the state. We follow a 3-step surgical strike process:
                            </p>
                            <div className="space-y-4">
                                <div className="bg-white p-6 rounded-3xl border border-[#DEDEDE] flex items-center gap-6 group hover:border-[#1F5EFF] transition-colors">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-black group-hover:bg-[#1F5EFF] group-hover:text-white transition-all italic text-xl">01</div>
                                    <div>
                                        <h5 className="font-black text-lg">Legal Notice on Steroids</h5>
                                        <p className="text-sm opacity-70">A notice that cites the 3x interest liability usually forces the buyer's CFO to release payments immediately.</p>
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-3xl border border-[#DEDEDE] flex items-center gap-6 group hover:border-[#1F5EFF] transition-colors">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-black group-hover:bg-[#1F5EFF] group-hover:text-white transition-all italic text-xl">02</div>
                                    <div>
                                        <h5 className="font-black text-lg">MSEFC Filing</h5>
                                        <p className="text-sm opacity-70">Filing with the Micro and Small Enterprise Facilitation Council, which overrides any other court jurisdiction.</p>
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-3xl border border-[#DEDEDE] flex items-center gap-6 group hover:border-[#1F5EFF] transition-colors">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-black group-hover:bg-[#1F5EFF] group-hover:text-white transition-all italic text-xl">03</div>
                                    <div>
                                        <h5 className="font-black text-lg">Conciliation & Arbitration</h5>
                                        <p className="text-sm opacity-70">A time-bound legal proceeding that ends in a 'Money Award' which is as powerful as a High Court decree.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="facilitation-councils" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Navigating MSME Facilitation Councils (MSEFC)</h2>
                            <p className="text-lg leading-relaxed mb-6 font-medium">
                                The MSEFC is a quasi-judicial body specifically for MSMEs. It is much faster than a Civil Court because it follows a "No-Postponement" philosophy.
                            </p>
                            <p className="text-lg leading-relaxed mb-10">
                                Most buyers try to bypass MSEFC by citing "Arbitration Clauses" in their private contracts. However, our technical expertise in MSME law allows us to prove that the MSMED Act's "Non-Obstante Clause" (Section 24) overrides any private contract. Your right to the Council remains intact regardless of what the buyer's lawyers signed you into.
                            </p>
                        </section>

                        <section id="interest-rules" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 tracking-tight uppercase">The 3X Interest Weapon</h2>
                            <p className="text-lg leading-relaxed mb-8">
                                If a buyer delays a ₹1 Crore payment for 2 years, the penal interest under MSMED Act can often reach ₹40-50 Lakhs. This is calculated as compound interest with monthly rests at 3 times the RBI Bank Rate. This isn't just a penalty; it's a statutory right that cannot be negotiated away in a contract.
                            </p>
                            <div className="bg-[#2E2E2E] text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden mb-12">
                                <FontAwesomeIcon icon={faChartLine} className="absolute bottom-[-20px] right-[-20px] text-9xl opacity-10" />
                                <h4 className="text-2xl font-black mb-6 text-[#1F5EFF] uppercase italic tracking-[0.2em]">Interest Calculation Example</h4>
                                <div className="text-base leading-relaxed opacity-80 mb-6 space-y-4 font-medium">
                                    <p>Principal Amount: ₹10,00,000</p>
                                    <p>RBI Bank Rate (Reference): 6.75%</p>
                                    <p>MSME Interest Rate: 6.75% x 3 = 20.25% per annum</p>
                                    <p>Compounding: Monthly Rests (Interest on Interest every 30 days)</p>
                                </div>
                                <p className="text-sm border-t border-white/10 pt-6 font-bold text-[#1F5EFF]">
                                    Result: In just 12 months, the interest alone would be over ₹2.2 Lakhs. For a loan taken to cover this missing capital, the interest recovered from the buyer more than compensates for the bank's interest.
                                </p>
                            </div>
                            <p className="text-lg leading-relaxed mb-6">
                                We present these calculations in the very first notice. When the buyer's auditors realize that their ₹1 Crore debt is growing into ₹1.5 Crores at a rate faster than any commercial loan, they prioritize settling your bill. This is the ultimate leverage for an MSME. Furthermore, Section 23 of the MSMED Act explicitly prohibits the buyer from claiming this interest as a business expense for income tax purposes, making it an incredibly expensive delay for them.
                            </p>
                        </section>

                        <section id="ibc-msme" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 tracking-tight">MSME Protection under IBC (Insolvency)</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The Insolvency and Bankruptcy Code (IBC) provides a special window for MSMEs through the "Pre-packaged Insolvency Resolution Process" (PPIRP). Unlike regular IBC, where the promoter often loses control of the company, PPIRP allows the MSME promoter to retain management while negotiating a resolution plan with creditors.
                            </p>
                            <p className="text-lg leading-relaxed mb-10 text-gray-700">
                                We specialize in using Section 240A of the IBC, which exempts MSMEs from certain restrictive eligibility criteria (like Section 29A). This means that even if you are a defaulter, you can still bid for and retain your own business if you can present a viable restructuring plan. This is a crucial shield against 'Predatory Bidding' by larger competitors looking to buy your assets for peanuts during a crisis.
                            </p>
                            <div className="bg-yellow-50 p-8 rounded-3xl border border-yellow-100 flex items-start gap-4">
                                <FontAwesomeIcon icon={faBriefcase} className="text-yellow-600 text-2xl mt-1" />
                                <div>
                                    <h5 className="font-black mb-2 text-yellow-900 uppercase">Debtor-in-Possession Model</h5>
                                    <p className="text-sm text-yellow-800 font-medium">The PPIRP process is unique because it keeps the existing management 'in the driver's seat' while the legal resolution happens. This ensures your operations aren't disrupted while the debts are being restructured.</p>
                                </div>
                            </div>
                        </section>

                        <section id="sarfaesi-defense" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 tracking-tighter underline decoration-[#1F5EFF] decoration-4 underline-offset-8">SARFAESI Defense for MSMEs</h2>
                            <p className="text-lg leading-relaxed mb-8">
                                If your business loan or personal loan (used for business) is secured by a factory, warehouse, or residence, the bank will try to use the SARFAESI Act to seize it within 60 days of a default notice.
                            </p>
                            <p className="text-lg leading-relaxed mb-6 font-extrabold text-[#1F5EFF]">
                                Do not panic. SARFAESI is not a 'Final Order.' It is a 'Notice' that can be challenged.
                            </p>
                            <p className="text-base leading-relaxed mb-10 opacity-70">
                                We file Securitization Applications (SA) in the Debt Recovery Tribunal (DRT). We look for "Procedural Cracks"-like incorrect NPA classification date, failure to serve notice to all directors, or valuation errors (selling a ₹10Cr factory for ₹5Cr). These technicalities allow us to get a 'Stay Order', keeping your business running while we negotiate a settlement.
                            </p>
                        </section>

                        <section id="samadhaan-portal" className="scroll-mt-32 mb-20 text-[var(--color-text-body)]">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Leveraging MSME Samadhaan</h2>
                            <p className="text-lg leading-relaxed mb-8">
                                MSME Samadhaan is the Digital India answer to delayed payments. Our team assists you in the portal filing process, ensuring your evidence (Udyam Registration, Invoices, Delivery Proofs) is indexed perfectly to prevent rejection by the Council. A digital trail is harder to ignore than a physical file.
                            </p>
                            <blockquote className="bg-blue-50 border-l-[12px] border-[#1F5EFF] p-10 rounded-r-3xl my-16 shadow-lg">
                                <p className="text-2xl font-black text-blue-900 leading-[1.3] mb-4 group hover:scale-105 transition-transform">"MSME Samadhaan is the first step toward reclaiming your working capital. Let us handle the portal while you focus on the floor."</p>
                                <footer className="text-sm font-black opacity-40 uppercase tracking-[0.3em]">- SettleLoans Legal Strategy</footer>
                            </blockquote>
                        </section>

                        <section id="restructuring" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-10 tracking-tight">2026 Restructuring Guidelines</h2>
                            <p className="text-lg leading-relaxed mb-8 font-medium">
                                The RBI has allowed a specialized 'Restructuring Without NPA' status for MSMEs facing genuine stress. This prevents your CIBIL from tanking and keeps your credit limits intact.
                            </p>
                            <p className="text-lg leading-relaxed mb-10">
                                We help you prepare the 'Viability Report' that banks require for this. Most entrepreneurs fail at this stage because they submit 'Simple Requests.' We submit 'Financial Evidence Packages'-showing that with a 1-year moratorium, the business's cash flows will cover the debt. We speak the language of the bank's Credit Risk Officer.
                            </p>
                        </section>

                        <section id="treds-factoring" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-10 tracking-tight">TReDS: Solving the Liquidity Crisis</h2>
                            <p className="text-lg leading-relaxed mb-8">
                                The Trade Receivables Discounting System (TReDS) is an institutional mechanism set up by the RBI to facilitate the discounting of invoices of MSMEs from corporate and other buyers. This allows MSMEs to get their money immediately from banks at a small discount, while the bank waits for the buyer to pay.
                            </p>
                            <p className="text-lg leading-relaxed mb-10 text-gray-700">
                                If your buyer is a large corporate or a PSU, we can help you navigate the TReDS onboarding process. This converts your 'Credit Sales' into 'Immediate Cash', which can then be used to settle your high-interest personal loans. Using TReDS is a sophisticated way of avoiding the debt trap before it becomes a legal case.
                            </p>
                        </section>

                        <section id="director-liability" className="scroll-mt-32 mb-20 text-[var(--color-text-body)]">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Liability of Directors in MSME Loans</h2>
                            <p className="text-lg leading-relaxed mb-6 font-medium">
                                Often, directors of an MSME give personal guarantees for business loans. Banks try to use this to attach the personal assets of the directors even if the business is a 'Limited Liability' entity.
                            </p>
                            <p className="text-lg leading-relaxed mb-10">
                                We specialize in the 'Doctrine of Indoor Management' and other corporate law principles to protect directors. If the bank didn't follow the proper 'Sanction Board' procedures or if the guarantee was obtained under duress or without proper disclosure of risks, we challenge the personal liability in High Courts and the DRT. Your personal home should not be at risk for a business loan default unless every other legal avenue is exhausted.
                            </p>
                        </section>

                        <section id="budget-2025" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 tracking-tighter">Budget 2025: New Horizons for MSME Credit</h2>
                            <p className="text-lg leading-relaxed mb-8">
                                The 2024-25 Union Budget has introduced a new 'Credit Guarantee Scheme' for MSMEs in the manufacturing sector. This scheme allows for the continuation of bank credit even during a period of stress, without the need for additional collateral.
                            </p>
                            <div className="bg-blue-950 text-white p-12 rounded-[40px] shadow-2xl relative overflow-hidden group">
                                <h4 className="text-2xl font-black mb-6 text-[#1F5EFF]">The 2025 Credit Shield</h4>
                                <p className="text-base leading-relaxed opacity-70 mb-8">
                                    We assist businesses in applying for these new government-backed guarantees to 'Refinance' their expensive old debts. By moving from a 18% personal loan to a 9% government-backed business loan, your EMI drops by 50% instantly. This is the most effective form of long-term debt settlement.
                                </p>
                                <div className="inline-flex items-center gap-3 text-[#1F5EFF] font-black uppercase text-xs tracking-widest">
                                    <span>Government Policy Update</span>
                                    <div className="w-12 h-px bg-[#1F5EFF]"></div>
                                </div>
                            </div>
                        </section>

                        <section id="success-stories" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Real Stories of Freedom</h2>
                            <div className="grid md:grid-cols-2 gap-6 not-prose">
                                {[
                                    {
                                        name: "Indotech Pvt Ltd",
                                        loc: "Pune",
                                        outcome: "₹1.4 Cr Recovered",
                                        story: "An MNC was withholding our payments for 8 months. SettleLoans used the MSME Facilitation Council to not only get our 1.4 Cr but also forced the buyer to pay 22 Lakhs in penal interest."
                                    },
                                    {
                                        name: "Suresh Textile Mill",
                                        loc: "Surat",
                                        outcome: "Auction Halted",
                                        story: "The bank tried to auction our mill during a temporary slump. SettleLoans found 3 technical errors in the possession notice and got a High Court stay, eventually leading to a 5-year restructuring."
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

                        <section id="faqs" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-12">Expert MSME Legal FAQ</h2>
                            <div className="space-y-6 not-prose">
                                {[
                                    { q: "Is registration on Udyam necessary for MSME protection?", a: "Yes. To avail the benefits of the MSMED Act 2006, including MSEFC filing and the 45-day payment rule, holding a valid Udyam Registration is mandatory. We help clients with back-dated status arguments if needed." },
                                    { q: "Can an MSME sue a PSU or Government Department?", a: "ABSOLUTELY. The MSMED Act applies equally to Government Departments, PSU's, and Private Corporates. We have successfully recovered payments from multiple state-owned enterprises using the MSEFC." },
                                    { q: "What is the limitation period for filing an MSME case?", a: "The limitation period is generally 3 years from the date of the invoice or the last payment. However, every acknowledgment of debt or balance confirmation restarts the 3-year clock." },
                                    { q: "Can a large company force me to sign away my MSME rights?", a: "No. Any contract clause that attempts to waive the statutory rights provided under the MSMED Act (like Section 15 and 16) is void. The special law overrides private contracts." },
                                    { q: "What happens if a buyer doesn't pay despite an MSEFC award?", a: "The MSEFC Award is executed exactly like a Civil Court Decree. We can file for attachment of the buyer's bank accounts, movable assets, and even their immovable properties until the award is satisfied." },
                                    { q: "Can an MSME handle SARFAESI and Recovery Council cases together?", a: "Yes. They are different tracks of law. One is for your liability (Loan) and one is for your assets (Receivables). We manage both to create a net 'Zero Stress' financial position." },
                                    { q: "Is the 3X interest taxable?", a: "Yes. Interest received under Section 16 is considered business income. However, for the buyer, this interest is NOT tax-deductible as per Section 23 of the MSMED Act, making it an even more painful penalty for them." },
                                    { q: "What is the fee for filing in the MSME Facilitation Council?", a: "Most states in India have very nominal filing fees for MSEFC (often as low as ₹500 to ₹5000), making it significantly cheaper than a Civil Suit where court fees can be 1% to 7% of the claim amount." },
                                    { q: "Can a MSME lawyer help with bank harassment for business loans?", a: "Yes. Small business owners have the same right to dignity as personal borrowers. We formally notify the bank of representation, stopping direct harassment and routing all negotiation through legal channels." },
                                    { q: "How long does it take for an MSME Council to pass an order?", a: "The Act mandates a resolution within 90 days of the reference. While some councils are overloaded and take longer, it is still 5X to 10X faster than regular litigation. During this period, we often secure interim protections for the MSME." },
                                    { q: "What if the buyer is a 'Small' enterprise too?", a: "The MSMED Act protections are specifically for 'Micro' and 'Small' enterprises against any buyer (large, medium, or small). However, the recovery is smoothest against larger companies who have more public reputation at stake and higher compliance requirements." },
                                    { q: "Can I file for a 'Security Deposit' recovery via MSME Council?", a: "Yes. If the security deposit is related to the supply of goods or services and is being withheld illegally after the contract is over, it falls under the 'Amount Due' category and can be recovered with 3X interest." },
                                    { q: "Is a 'No-Dues' different for MSMEs?", a: "For MSMEs, a 'No-Dues' certificate from a bank should ideally mention that the account was closed under the 'MSME Restructuring' or 'Settlement' framework. This helps in maintaining your 'Priority Sector Lending' eligibility for future business expansions." },
                                    { q: "What is the penalty for buyers who don't disclose MSME dues?", a: "Under Section 22 of the MSMED Act, buyers must disclose their unpaid dues to MSME suppliers in their annual financial statements. Failure to do so can lead to penalties under the Companies Act for the directors and auditors of the buyer company." },
                                    { q: "Can I handle the MSME Facilitation Council without a lawyer?", a: "While the council is designed to be friendly, buyers always bring seasoned corporate lawyers to find loopholes. Having a specialized MSME advocate ensures that technicalities (like jurisdictional challenges or interest calculation errors) are handled professionally, preventing your case from being dismissed on a whim." },
                                    { q: "Can I file an MSME case if I am a service provider?", a: "Yes. The act covers both manufacturers and service providers (including IT, consultancy, logistics, etc.) provided they are registered as Micro or Small enterprises." },
                                    { q: "What is the MSME Samadhaan portal?", a: "It is a central monitoring system where MSMEs can report delayed payments. Filing here puts the buyer on a national 'Watch List' and triggers the state facilitation council process." }
                                ].map((faq, i) => (
                                    <details key={i} className="group bg-white border border-[#DEDEDE] rounded-3xl overflow-hidden hover:shadow-2xl transition-all border-b-8 border-b-[#1F5EFF]/5">
                                        <summary className="flex justify-between items-center p-8 cursor-pointer font-black text-[#2E2E2E] list-none bg-gray-50 group-open:bg-white transition-all">
                                            <span className="text-xl pr-6 leading-tight">{i + 1}. {faq.q}</span>
                                            <span className="text-[#1F5EFF] transition-transform duration-500 group-open:rotate-180">
                                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7"></path></svg>
                                            </span>
                                        </summary>
                                        <div className="px-10 pb-12 text-[#2E2E2E] opacity-90 leading-[1.8] border-t border-[#DEDEDE] pt-10 font-medium text-lg bg-white">
                                            {faq.a}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </section>

                        {/* Mobile CTA (Visible only on mobile) */}
                        <div className="lg:hidden mt-16 mb-8">
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#1F5EFF]/20">
                                <div className="bg-[#1F5EFF] p-6 text-center text-white">
                                    <h3 className="text-2xl font-black mb-2">Ready to Start Over?</h3>
                                    <p className="opacity-90 text-sm">Join the 10,000+ Indians we've helped find their way to financial freedom.</p>
                                </div>
                                <div className="p-8 text-center text-[#DEDEDE]">
                                    <Link href="/contact-us" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-xl hover:scale-105 transition-all shadow-lg text-lg">
                                        Get Your Free Consultation
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Right Column: CTA & Related Pages (Sticky) */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-24 space-y-8">

                            {/* CTA Container */}
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                                <div className="bg-[#1F5EFF] p-4 text-center">
                                    <h3 className="text-lg font-black text-white px-2">We are in This Together</h3>
                                </div>
                                <div className="p-6 text-center">
                                    <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                                        Do not carry the burden alone. Let our experts find the best path for your debt-free life.
                                    </p>
                                    <Link href="/contact-us" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg">
                                        Talk to an Expert
                                    </Link>
                                    <p className="mt-4 text-xs text-[#DEDEDE]/60 uppercase tracking-widest font-black">100% Confidential</p>
                                </div>
                            </div>

                            {/* Related Pages Container */}
                            <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2">Must Read Guides</h3>
                                <ul className="space-y-4 text-sm font-bold">
                                    <li>
                                        <Link href="/best-lawyer-for-msme-business-loan-dispute" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            Business Disputes
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/best-lawyer-for-msme-and-business-loans" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            Loan Defense
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/best-lawyer-for-consortium-loan-recovery-defence" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            Consortium Issues
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
