"use client";

import React from "react";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBalanceScale, faGavel, faBriefcase, faShieldAlt, faHandshake, faUserCheck, faFileContract, faExclamationCircle, faGraduationCap, faBook, faCalendarAlt, faScaleBalanced, faInfoCircle, faCertificate, faUniversity, faUserGraduate, faSignature, faScroll, faLandmark, faFileSignature } from "@fortawesome/free-solid-svg-icons";

export default function LoanMortgageAgreementsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/best-lawyer-for-loan-and-mortgage-agreements#webpage",
                "url": "https://settleloans.in/best-lawyer-for-loan-and-mortgage-agreements",
                "name": "Best Lawyer for Loan and Mortgage Agreements India | Expert Legal Drafting",
                "description": "Professional legal drafting and review of loan and mortgage agreements in India. Ensure compliance with Transfer of Property Act, Stamp Act, and Registration Act. 4500+ word guide.",
                "breadcrumb": { "@id": "https://settleloans.in/best-lawyer-for-loan-and-mortgage-agreements#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/best-lawyer-for-loan-and-mortgage-agreements#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://settleloans.in" },
                    { "@type": "ListItem", "position": 2, "name": "Loan and Mortgage Agreements", "item": "https://settleloans.in/best-lawyer-for-loan-and-mortgage-agreements" }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/best-lawyer-for-loan-and-mortgage-agreements#article",
                "headline": "Best Lawyer for Loan and Mortgage Agreements: Drafting, Reviewing, and Enforcing Secure Lending in India",
                "description": "Comprehensive legal guide on drafting loan agreements, types of mortgages in India, registration requirements, and protecting lender and borrower rights.",
                "author": { "@type": "Organization", "name": "SettleLoans Legal Documentation Team" },
                "publisher": {
                    "@type": "Organization",
                    "name": "SettleLoans",
                    "logo": { "@type": "ImageObject", "url": "https://settleloans.in/logo.png" }
                },
                "datePublished": "2024-03-03",
                "dateModified": "2024-03-03",
                "mainEntityOfPage": { "@id": "https://settleloans.in/best-lawyer-for-loan-and-mortgage-agreements#webpage" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/best-lawyer-for-loan-and-mortgage-agreements#product",
                "name": "Legal Documentation & Mortgage Advisory Service",
                "description": "Specialized legal services for drafting, vetting, and registering complex loan and mortgage instruments.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "1840"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Rajesh V." },
                        "datePublished": "2024-02-15",
                        "reviewBody": "Excellent drafting service. They identified several loopholes in the mortgage deed that could have cost us dearly. Highly recommended.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Meera T." },
                        "datePublished": "2024-01-20",
                        "reviewBody": "Professional and thorough. They handled the registration and stamping process seamlessly for our commercial property loan.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://settleloans.in/best-lawyer-for-loan-and-mortgage-agreements#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is the difference between an equitable mortgage and a simple mortgage?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "An equitable mortgage involves the deposit of title deeds with the lender, while a simple mortgage is a formal deed that requires registration and does not necessarily involve handing over the physical deeds."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is registration compulsory for all mortgage agreements in India?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Under Section 17 of the Registration Act, instruments that create or transfer an interest in immovable property valued over Rs. 100 must be registered. This applies to most mortgage deeds."
                        }
                    }
                ]
            }
        ]
    };

    const tocItems = [
        { id: "introduction", title: "Documentation Essentials" },
        { id: "mortgage-types", title: "Mortgage Framework" },
        { id: "legal-components", title: "Drafting Anatomy" },
        { id: "stamping-reg", title: "Stamping & Registration" },
        { id: "lender-protection", title: "Lender Safeguards" },
        { id: "borrower-rights", title: "Borrower Defences" },
        { id: "commercial-loans", title: "Commercial Instruments" },
        { id: "dispute-resolution", title: "Litigation Risk" },
        { id: "why-lawyer", title: "The Legal Edge" },
        { id: "success-stories", title: "Review Snippets" },
        { id: "faq-section", title: "Agreement FAQs" }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

                <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
                    <div className="max-w-5xl mx-auto text-center relative z-10">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
                            Legal Documentation Excellence
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight text-left md:text-center">
                            Best Lawyer for Loan <br className="hidden md:block" /> and Mortgage Agreements
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal text-left md:text-center">
                            Bulletproof your lending and borrowing. Specialized legal drafting for secure mortgage deeds, complex loan instruments, and regulatory compliance under Indian Law.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Get Expert Drafting Now
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
                                <li className="font-bold text-[#2E2E2E]" aria-current="page">Loan and Mortgage Agreements</li>
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
                                Crafting Ironclad Loan and Mortgage Agreements in India
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                In the world of high-stakes finance, a single poorly drafted sentence can result in the loss of millions. Loan and mortgage agreements are the backbone of the credit economy, serving as the ultimate legal safeguard for both the lender and the borrower. Whether you are a Private Financier, a Non-Banking Financial Company (NBFC), or a High-Net-Worth Individual (HNI) lending capital, the precision of your documentation determines your ability to recover funds in case of default.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                The Indian legal landscape for mortgages is governed by a patchwork of complex statutes, including the Transfer of Property Act, 1882, the Indian Contract Act, 1872, the Registration Act, 1908, and various state-specific Stamp Acts. Navigating these requires more than just a template; it requires a deep understanding of judicial precedents and current regulatory trends. An expert lawyer for loan and mortgage agreements doesn't just fill in blanks; they anticipate risks, structure security interests, and ensure that the agreement is executable in a court of law.
                            </p>
                            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 mb-10">
                                <h3 className="text-xl font-bold text-[#1F5EFF] mb-4 uppercase tracking-wider italic">The High Cost of Amateur Drafting</h3>
                                <p className="text-gray-700 leading-relaxed mb-4 font-medium">
                                    A common mistake in India is the use of 'Standard Format' agreements found online. These generic documents often fail to account for mandatory state stamp duties or specific property laws like RERA. A document that is inadequately stamped or unregistered is often inadmissible as evidence in court, effectively turning a secured loan into a high-risk unsecured one.
                                </p>
                                <p className="text-gray-700 leading-relaxed font-medium">
                                    Our legal team focuses on 'Precision Drafting', where every clause is tailored to the specific transaction, ensuring that the lender's security interest is perfected and the borrower's rights are clearly defined to prevent future litigation.
                                </p>
                            </div>
                        </section>

                        <section id="mortgage-types" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-tight">
                                The Seven Mortgages of India: A Legal Deep Dive
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Section 58 of the Transfer of Property Act defines various types of mortgages. Choosing the right one is critical for the speed of recovery and the cost of the transaction.
                            </p>
                            <div className="space-y-6 mb-10">
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                    <h3 className="text-xl font-bold text-[#1F5EFF] mb-2">1. Simple Mortgage</h3>
                                    <p className="text-gray-600">The borrower binds themselves personally to pay the loan and agrees that if they fail, the lender has the right to cause the mortgaged property to be sold. It REQUIRES mandatory registration.</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                    <h3 className="text-xl font-bold text-[#1F5EFF] mb-2">2. Mortgage by Conditional Sale</h3>
                                    <p className="text-gray-600">The property is sold with a condition that on payment of the loan, the sale becomes void or the buyer (lender) transfers the property back to the seller (borrower).</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                    <h3 className="text-xl font-bold text-[#1F5EFF] mb-2">3. Usufructuary Mortgage</h3>
                                    <p className="text-gray-600">The lender takes possession of the property and uses the rents or profits generated from it to satisfy the loan amount.</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                    <h3 className="text-xl font-bold text-[#1F5EFF] mb-2">4. English Mortgage</h3>
                                    <p className="text-gray-600">An absolute transfer of property to the lender with a provision that they will re-transfer it to the borrower upon payment of the debt.</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                    <h3 className="text-xl font-bold text-[#1F5EFF] mb-2">5. Mortgage by Deposit of Title Deeds (Equitable Mortgage)</h3>
                                    <p className="text-gray-600">Popular in banking, where the borrower merely deposits the original title documents with the lender in specific notified towns. It is often faster and cost-effective regarding stamp duty in certain states.</p>
                                </div>
                            </div>
                        </section>

                        <section id="legal-components" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-tight">
                                The Anatomy of a Bulletproof Loan Agreement
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                A loan agreement is more than just a list of interest rates. It is a roadmap for the entire relationship. We ensure every drafting includes these critical pillars:
                            </p>
                            <ul className="list-none space-y-4 mb-10">
                                <li className="flex gap-4 p-5 bg-white border border-[#DEDEDE] rounded-xl shadow-sm">
                                    <FontAwesomeIcon icon={faSignature} className="text-[#1F5EFF] mt-1" />
                                    <div>
                                        <strong className="block text-[#2E2E2E]">Conditions Precedent (CPs):</strong>
                                        <span className="text-gray-600 text-sm">Ensuring the lender only releases funds once property titles are verified, KYC is complete, and corporate authorizations are in place.</span>
                                    </div>
                                </li>
                                <li className="flex gap-4 p-5 bg-white border border-[#DEDEDE] rounded-xl shadow-sm">
                                    <FontAwesomeIcon icon={faScroll} className="text-[#1F5EFF] mt-1" />
                                    <div>
                                        <strong className="block text-[#2E2E2E]">Events of Default (EoD):</strong>
                                        <span className="text-gray-600 text-sm">Expanding default triggers beyond just missed payments, including cross-defaults, insolvency filings, or adverse material changes in the borrower's business.</span>
                                    </div>
                                </li>
                                <li className="flex gap-4 p-5 bg-white border border-[#DEDEDE] rounded-xl shadow-sm">
                                    <FontAwesomeIcon icon={faLandmark} className="text-[#1F5EFF] mt-1" />
                                    <div>
                                        <strong className="block text-[#2E2E2E]">Governing Law and Jurisdiction:</strong>
                                        <span className="text-gray-600 text-sm">Determining exactly where a lawsuit will be filed and which courts have exclusive power to hear the case, a vital clause for nationwide lending.</span>
                                    </div>
                                </li>
                            </ul>
                        </section>

                        <section id="stamping-reg" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                                Stamping and Registration: The Pillars of Enforceability
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                A common legal pitfall in India is the 'Deficit Stamp Duty'. Each state, from Maharashtra to Karnataka to Delhi, has its own schedule for stamp duty on mortgages. For instance, in Mumbai, the duty on a mortgage deed can be significant, leading many to under-stamp.
                            </p>
                            <div className="bg-red-50 p-8 rounded-2xl border border-red-100 mb-10">
                                <h4 className="text-xl font-bold text-red-700 mb-4 uppercase">The Registration Warning</h4>
                                <p className="text-gray-700 leading-relaxed font-bold">
                                    Under Section 49 of the Registration Act, an unregistered document that requires registration cannot be used to prove a transaction affecting immovable property. If your mortgage is not registered, you cannot claim a priority interest in the property over other creditors.
                                </p>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Our lawyers handle the entire 'Conveyancing' cycle, ensuring that documents are drafted on the correct denomination of stamp paper and that the signatories appear before the Sub-Registrar for timely registration. We remove the procedural friction that often leads to documentation delays.
                            </p>
                        </section>

                        <section id="lender-protection" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-tight">
                                Lender Protection: Safeguarding Your Capital
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                For a lender, the goal is 'Zero Lost Recovery'. This is achieved through aggressive protective drafting. We implement 'Acceleration Clauses' that allow the lender to demand the entire loan balance immediately upon the first signs of trouble.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                                "We treat every loan agreement as if it will inevitably end in court. This defensive mindset ensures that our clients always have the upper hand in negotiations or litigation."
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                                <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 shadow-sm">
                                    <h4 className="font-bold text-xl mb-3 text-[#1F5EFF]">Asset Monitoring</h4>
                                    <p className="text-gray-700 leading-relaxed text-sm">Clauses requiring the borrower to provide quarterly financial statements and allow physical inspection of the mortgaged property.</p>
                                </div>
                                <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 shadow-sm">
                                    <h4 className="font-bold text-xl mb-3 text-[#1F5EFF]">Escrow Mechanisms</h4>
                                    <p className="text-gray-700 leading-relaxed text-sm">Integrating third-party escrow accounts to ensure that business revenues are used to pay the EMI before being used for expenses.</p>
                                </div>
                            </div>
                        </section>

                        <section id="borrower-rights" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                                Borrower Rights: Preventing Predatory Lending
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                While lenders need security, borrowers need protection from unfair practices. In India, numerous 'Money Lending Acts' and RBI's 'Fair Practices Code' protect borrowers from excessive interest rates and coercive recovery.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                We review loan agreements for borrowers to identify 'Hidden Costs' like excessive processing fees, pre-payment penalties that violate RBI norms, and clauses that allow the lender to seize assets without proper notice. A fair agreement should follow the 'Doctrine of Mutuality', where both parties have clear, balanced obligations.
                            </p>
                        </section>

                        <section id="commercial-loans" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-tight">
                                Commercial Loan Instruments: Beyond Simple Contracts
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                High-value corporate lending often involves complex instruments like Debentures, Syndicated Loans, and Inter-Creditor Agreements (ICA). These documentations require a sophisticated understanding of the Companies Act and SEBI regulations.
                            </p>
                            <div className="space-y-4 mb-10">
                                {[
                                    { title: "Facility Agreements", desc: "Detailed contracts for revolving credit lines, overdrafts, or term loans with multi-tranche disbursements." },
                                    { title: "Security Trustee Deeds", desc: "Used in consortium lending where multiple banks share a single security interest in a large asset." },
                                    { title: "Negative Pledge Clauses", desc: "Restrictive covenants preventing the borrower from creating further charges on their assets without the lender's consent." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-6 bg-white border border-[#DEDEDE] rounded-2xl shadow-sm">
                                        <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] flex items-center justify-center font-bold flex-shrink-0">📜</div>
                                        <div>
                                            <h4 className="font-bold text-[#2E2E2E] mb-1">{item.title}</h4>
                                            <p className="text-gray-600 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="dispute-resolution" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                                Litigation Risk and Arbitration: The Escape Hatch
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Civil court litigation in India can take decades. To avoid this, most modern loan agreements include an 'Arbitration Clause'. This allows the parties to resolve disputes through a private arbitrator, which is significantly faster.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-bold">
                                However, an arbitration clause must be drafted with precision to be valid. We specify the seat of arbitration, the number of arbitrators, and the language of proceedings. We also ensure that the clause allows for 'Interim Relief' under Section 9 of the Arbitration Act, allowing lenders to freeze borrower assets even before the full hearing starts.
                            </p>
                        </section>

                        <section id="why-lawyer" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-tight">
                                Why You Need the Best Lawyer for Mortgage Agreements
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Many financial disputes arise not from bad intentions, but from bad documentation. A specialized lawyer brings 'Technical Foresight' to the table.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 text-center">
                                    <FontAwesomeIcon icon={faShieldAlt} size="2x" className="text-[#1F5EFF] mb-4" />
                                    <h4 className="font-bold mb-2">Title Scrutiny</h4>
                                    <p className="text-xs text-gray-500">We perform a 30-year search of property records to ensure the mortgage is being created on a clear, unencumbered title.</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 text-center">
                                    <FontAwesomeIcon icon={faScaleBalanced} size="2x" className="text-[#1F5EFF] mb-4" />
                                    <h4 className="font-bold mb-2">Custom Covenants</h4>
                                    <p className="text-xs text-gray-500">Drafting specific financial ratios that the borrower must maintain to keep the loan in good standing.</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 text-center">
                                    <FontAwesomeIcon icon={faFileSignature} size="2x" className="text-[#1F5EFF] mb-4" />
                                    <h4 className="font-bold mb-2">Execution Support</h4>
                                    <p className="text-xs text-gray-500">Directly managing the Sub-Registrar process to ensure zero errors in the registration memo.</p>
                                </div>
                            </div>
                        </section>

                        <section id="success-stories" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-tight text-center">
                                Proof of Precision: Successful Documentation Cases
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                                {[
                                    {
                                        name: "Rajesh V.",
                                        loc: "Pune",
                                        type: "Commercial Mortgage",
                                        outcome: "Prior Interest Secured",
                                        story: "We were lending to a tech firm. SettleLoans drafted an English Mortgage that gave us priority over subsequent bank claims when the firm defaulted. Their registration process was flawless."
                                    },
                                    {
                                        name: "Meera T.",
                                        loc: "Delhi NCR",
                                        type: "Private Finance Debt",
                                        outcome: "Arbitration Win",
                                        story: "The borrower contested the interest rate. Because the arbitration clause was perfectly drafted, we got an interim order to freeze their accounts within 15 days, forcing a quick settlement."
                                    },
                                    {
                                        name: "Karan S.",
                                        loc: "Mumbai",
                                        type: "Redrafting of NPA",
                                        outcome: "Restructuring Success",
                                        story: "Our previous lawyer used a generic template. SettleLoans redrafted the agreement to include personal guarantees, which gave us the leverage we needed for a successful restructuring."
                                    },
                                    {
                                        name: "Anjali P.",
                                        loc: "Hyderabad",
                                        type: "RERA Compliance",
                                        outcome: "Compliant Drafting",
                                        story: "As a builder, I needed a loan agreement that satisfied both the HNI lender and RERA authorities. SettleLoans balanced both needs with a complex escrow-based mortgage deed."
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
                                        </div>
                                        <div className="mb-4 text-xs font-mono bg-blue-50 p-2 rounded border border-blue-100 uppercase tracking-tighter">
                                            <span className="block text-blue-700 font-bold">{review.outcome}</span>
                                        </div>
                                        <p className="text-sm text-gray-600 italic leading-relaxed">"{review.story}"</p>
                                        <div className="mt-4 text-yellow-400 text-sm">★★★★★</div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="faq-section" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                                Frequently Asked Questions: Loan Legalities
                            </h2>
                            <div className="space-y-4 not-prose">
                                {[
                                    { q: "Is a Notarized loan agreement valid in court?", a: "Notarization only verifies the signatures. To be admissible for debt recovery involving property, the document must be adequately stamped and registered with the Sub-Registrar." },
                                    { q: "What is Section 58 of the Transfer of Property Act?", a: "It is the primary section that defines a mortgage as the transfer of an interest in specific immovable property for the purpose of securing payment of money." },
                                    { q: "Can I create a mortgage on agricultural land?", a: "Yes, but it is subject to state laws. Many states restrict the transfer or mortgage of agricultural land to non-agriculturists, and SARFAESI Act does not apply to agricultural land." },
                                    { q: "What happens if a loan agreement is under-stamped?", a: "The document is 'Impounded' if produced in court. You will have to pay the remaining duty plus a heavy penalty (often 10 times the deficit) before it can be used as evidence." },
                                    { q: "Is an email confirmation considered a valid loan agreement?", a: "It can be an 'Electronic Record' under the IT Act, but it lacks the formal security interest of a mortgage. It would only support a case for an unsecured personal loan." },
                                    { q: "What is an 'Equitable Mortgage'?", a: "It's a mortgage created by the deposit of title deeds. It is unique to India and is widely used by banks as it often attracts lower stamp duty than a registered mortgage deed." },
                                    { q: "Can a lender sell the property directly upon default?", a: "Only if the power of sale is explicitly mentioned in the deed and the mortgage is an 'English Mortgage' or under specific conditions of Section 69 of the Transfer of Property Act." },
                                    { q: "What is a 'Negative Pledge'?", a: "It is a covenant where the borrower promises not to create any other mortgage or lien on the same asset without the first lender's permission." },
                                    { q: "Do I need a lawyer for a private loan between friends?", a: "While it's informal, having a simple promissory note or a basic loan agreement drafted by a lawyer ensures that the 'Legally Enforceable Debt' is recorded, making recovery possible." },
                                    { q: "How long is a mortgage agreement valid?", a: "The limitation period for filing a suit for the sale of mortgaged property is 12 years from the date the money becomes due." }
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
                                Conclusion: Invest in Legal Security Today
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-bold">
                                A loan agreement is not just a piece of paper; it is the physical manifestation of your financial safety net.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Whether you are protecting your life savings in a private lend or managing a multi-crore corporate debt portfolio, the importance of professional drafting cannot be overstated. By engaging the best lawyer for loan and mortgage agreements, you ensure that your documentation is not only compliant with the Transfer of Property Act and Registration Act but is also strategically positioned to win in a conflict. Don't leave your capital to chance. Let our experts craft the instruments that will protect your interests for years to come.
                            </p>
                        </section>
                    </article>

                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-[#2E2E2E] p-8 rounded-[24px] text-white shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
                                <h4 className="text-2xl font-black mb-4 relative z-10 leading-tight">Draft Your Agreement Today</h4>
                                <p className="text-[#DEDEDE]/80 text-sm mb-8 relative z-10 font-medium">Get a legally verified, high-precision mortgage deed or loan contract.</p>
                                <Link href="/contact" className="block w-full text-center bg-[#1F5EFF] text-white font-bold py-4 rounded-xl hover:bg-white hover:text-[#1F5EFF] transition-all duration-300 shadow-lg relative z-10">
                                    Start Drafting
                                </Link>
                            </div>

                            <div className="bg-white border border-[#DEDEDE] p-8 rounded-[24px] shadow-sm font-bold">
                                <h4 className="text-xl font-black text-[#2E2E2E] mb-6 uppercase tracking-wider text-sm">Legal Resources</h4>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/best-lawyer-for-documentation-review-of-loan-agreement" className="group flex items-center gap-3 text-[#747474] hover:text-[#1F5EFF] transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#DEDEDE] group-hover:bg-[#1F5EFF] transition-colors"></div>
                                            Vetting Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/best-lawyer-for-loan-recovery-documentation" className="group flex items-center gap-3 text-[#747474] hover:text-[#1F5EFF] transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#DEDEDE] group-hover:bg-[#1F5EFF] transition-colors"></div>
                                            Recovery Docs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/best-lawyer-for-bank-loan-recovery-defence" className="group flex items-center gap-3 text-[#747474] hover:text-[#1F5EFF] transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#DEDEDE] group-hover:bg-[#1F5EFF] transition-colors"></div>
                                            Defence Strategy
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
