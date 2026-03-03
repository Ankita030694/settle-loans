"use client";

import React from "react";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBalanceScale, faGavel, faBriefcase, faShieldAlt, faHandshake, faUserCheck, faFileContract, faExclamationCircle, faGraduationCap, faBook, faCalendarAlt, faScaleBalanced, faInfoCircle, faCertificate, faUniversity, faUserGraduate } from "@fortawesome/free-solid-svg-icons";

export default function EducationLoanSettlementPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/best-lawyer-for-education-loan-settlement#webpage",
                "url": "https://settleloans.in/best-lawyer-for-education-loan-settlement",
                "name": "Best Lawyer for Education Loan Settlement India | Student Debt Relief",
                "description": "Expert legal help for education loan settlements in India. Resolve student debt, stop recovery harassment, and negotiate OTS for study loans. 4500+ word expert guide.",
                "breadcrumb": { "@id": "https://settleloans.in/best-lawyer-for-education-loan-settlement#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/best-lawyer-for-education-loan-settlement#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://settleloans.in" },
                    { "@type": "ListItem", "position": 2, "name": "Education Loan Settlement", "item": "https://settleloans.in/best-lawyer-for-education-loan-settlement" }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/best-lawyer-for-education-loan-settlement#article",
                "headline": "Best Lawyer for Education Loan Settlement: Navigating Student Debt and One-Time Settlements in India",
                "description": "Comprehensive legal guide on education loan defaults, RBI moratorium rules, and successful settlement strategies for students and parents.",
                "author": { "@type": "Organization", "name": "SettleLoans Academic Legal Team" },
                "publisher": {
                    "@type": "Organization",
                    "name": "SettleLoans",
                    "logo": { "@type": "ImageObject", "url": "https://settleloans.in/logo.png" }
                },
                "datePublished": "2024-03-03",
                "dateModified": "2024-03-03",
                "mainEntityOfPage": { "@id": "https://settleloans.in/best-lawyer-for-education-loan-settlement#webpage" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/best-lawyer-for-education-loan-settlement#product",
                "name": "Education Loan Legal Defence & Advisory",
                "description": "Professional legal services for student loan restructuring, settlement negotiations, and harassment protection.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "2180"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Arjun S." },
                        "datePublished": "2024-01-25",
                        "reviewBody": "SettleLoans helped me resolve my MBA loan after a career setback. They negotiated a manageable OTS that saved my family's future.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Sana W." },
                        "datePublished": "2024-02-10",
                        "reviewBody": "I was facing harassment from recovery agents for my daughter's education loan. One legal notice from SettleLoans stopped it all.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://settleloans.in/best-lawyer-for-education-loan-settlement#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Can an education loan be settled for a lower amount?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, education loans can be resolved through a One-Time Settlement (OTS), especially when the borrower faces genuine financial hardship such as unemployment or medical crises."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the RBI moratorium period for education loans?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The standard moratorium period is the course duration plus 6 to 12 months. However, RBI guidelines allow for further extensions in cases of unemployment or genuine hardship."
                        }
                    }
                ]
            }
        ]
    };

    const tocItems = [
        { id: "introduction", title: "Education Debt Crisis" },
        { id: "rbi-guidelines", title: "RBI & IBA Framework" },
        { id: "moratorium-rules", title: "Moratorium Mastery" },
        { id: "settlement-logic", title: "Why Banks Settle" },
        { id: "legal-harassment", title: "Stopping Harassment" },
        { id: "ots-process", title: "Step-by-Step OTS" },
        { id: "collateral-secured", title: "Secured vs Unsecured" },
        { id: "cibil-recovery", title: "CIBIL Rehabilitation" },
        { id: "why-expert", title: "The Lawyer Advantage" },
        { id: "success-stories", title: "Success Stories" },
        { id: "comprehensive-faq", title: "Education Debt FAQs" }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

                <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
                    <div className="max-w-5xl mx-auto text-center relative z-10">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
                            Academic Debt Protection
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight text-left md:text-center">
                            Best Lawyer for <br className="hidden md:block" /> Education Loan Settlement
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal text-left md:text-center">
                            Protect your career and your family. Expert legal advice on study loan restructuring, stopping illegal recovery calls, and achieving the best One-Time Settlement.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Secure Your Future Now
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
                                <li className="font-bold text-[#2E2E2E]" aria-current="page">Education Loan Settlement</li>
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
                                Reclaiming Your Career from the Burden of Education Debt
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                An education loan is often the first step toward a bright future for thousands of Indian students. It is seen as an investment in oneself, intended to lead to high-paying jobs and financial stability. However, the reality of the global job market can be harsh. Layoffs, delayed hirings, and stagnant salaries can turn the dream of a degree into a nightmare of debt. When a student defaults on an education loan, it's not just their credit score at stake; it is their very entry into professional life.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Defaulting on a study loan creates a unique crisis because it often involves the student as the primary borrower and the parents as co-applicants or guarantors. This 'Double-Sided' pressure can lead to immense familial stress. Furthermore, if the loan was secured with property, the parents' home could be at risk. This is where a specialized lawyer for education loan settlement becomes a vital ally. Understanding the intersection of the SARFAESI Act, the Indian Contract Act, and RBI's 'Model Education Loan Scheme' is essential for finding a way out.
                            </p>
                            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 mb-10">
                                <h3 className="text-xl font-bold text-[#1F5EFF] mb-4 uppercase tracking-wider">The Socio-Economic Impact of Study Loans</h3>
                                <p className="text-gray-700 leading-relaxed mb-4 font-medium">
                                    The Indian education loan sector has seen rapid growth, but also rising NPAs. Unlike a car or business loan, an education loan is funded against 'Future Earning Potential'. If that potential doesn't materialize immediately, the borrower is left with a liability and no asset to sell.
                                </p>
                                <p className="text-gray-700 leading-relaxed font-medium">
                                    Banks treat education loans with a mix of regulatory obligation and recovery aggression. While they are mandated to support education, they are also pressured to keep their books clean. A lawyer helps bridge this gap by presenting a case of 'Genuine Hardship' that forces a compassionate settlement.
                                </p>
                            </div>
                        </section>

                        <section id="rbi-guidelines" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-tight">
                                RBI and IBA Framework: Your Legal Foundation
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                The Reserve Bank of India (RBI) and the Indian Banks' Association (IBA) have established the 'Model Education Loan Scheme'. This is not just a guideline; for many Public Sector Banks (PSBs), it is the mandatory standard they must follow.
                            </p>
                            <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">Protective Clauses You Rarely Hear About</h3>
                            <ul className="list-none space-y-6 mb-10">
                                <li className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                    <strong className="text-[#1F5EFF]">The Livelihood Protection:</strong> RBI guidelines suggest that banks should be flexible with education loans because they directly affect the borrower's life and career. Aggressive recovery is technically discouraged for this category.
                                </li>
                                <li className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                    <strong className="text-[#1F5EFF]">Interest Subsidy Schemes:</strong> Many borrowers are eligible for Central Sector Interest Subsidy (CSIS) during the moratorium. Often, banks fail to apply this, leading to artificially inflated debt. We audit your account to find these missing subsidies.
                                </li>
                                <li className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                    <strong className="text-[#1F5EFF]">Collateral Limits:</strong> For loans up to ₹4 Lakh, there is ZERO collateral required. For up to ₹7.5 Lakh, only a 3rd party guarantee may be needed. If a bank took your property for a small loan, it's a direct violation of standard IBA norms.
                                </li>
                            </ul>
                        </section>

                        <section id="moratorium-rules" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                                Moratorium Mastery: Extending Your Repayment Holiday
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                The moratorium period is a unique feature of education loans. It usually covers the course period plus one year. However, life doesn't always go as planned.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                RBI's latest guidelines allow banks to grant up to three moratorium extensions (up to 6 months each) in the entire lifecycle of the loan, especially due to unemployment or unexpected external factors. If your bank is demanding payments while you are job hunting, they might be ignoring their own board-approved policy. A legal notice citing these specific RBI 'Prudential Norms' can buy you the time needed to either find a job or negotiate a settlement.
                            </p>
                            <div className="bg-[#2E2E2E] p-8 rounded-2xl text-white my-10 font-bold italic shadow-lg text-center">
                                "An education loan is a bet on the future. If the future is delayed, the repayment must be delayed. We ensure the bank respects the regulatory spirit of student lending."
                            </div>
                        </section>

                        <section id="settlement-logic" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-tight">
                                Why Banks Settle Education Loans: The ROI of Compassion
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Why would a bank like SBI or Axis accept 40% of what you owe? The answer lies in the 'Cost of Recovery'. Litigation in India is slow and expensive. For an education loan, there is often no physical asset to repossess (unless it's a high-value secured loan).
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                If the student is unemployed and the parents are retired, the bank knows that 'Attachment of Salary' or 'Auction of House' is a long and socially sensitive battle. By settling, the bank gets guaranteed cash today and avoids the 'Provisioning' hit on their balance sheet. We use this financial math to secure deep discounts for our clients.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                                <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 shadow-sm">
                                    <h4 className="font-bold text-xl mb-3 text-[#1F5EFF]">Net Present Value (NPV)</h4>
                                    <p className="text-gray-700 leading-relaxed text-sm">We prove to the bank that X amount today is worth more to them than X+Y after 7 years of court battles.</p>
                                </div>
                                <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 shadow-sm">
                                    <h4 className="font-bold text-xl mb-3 text-[#1F5EFF]">Social Reputation</h4>
                                    <p className="text-gray-700 leading-relaxed text-sm">Banks are sensitive to news about 'Suing Students'. A lawyer ensures your case is handled with the appropriate level of public-facing sensitivity.</p>
                                </div>
                            </div>
                        </section>

                        <section id="legal-harassment" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                                Stopping Recovery Agent Harassment: Your Legal Shield
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Recovery agents often target students because they are young and unaware of their rights. Common tactics include calling college friends, messaging on LinkedIn, or visiting the parents' home in the evening.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-red-600 font-bold">
                                ALL OF THESE TACTICS ARE ILLEGAL UNDER RBI GUIDELINES.
                            </p>
                            <ul className="space-y-4 mb-10 text-gray-700">
                                <li className="flex gap-4 p-4 bg-gray-50 rounded-xl border-l-4 border-red-500">
                                    <span><strong>Contact Privacy:</strong> Agents cannot call anyone other than the borrower and co-applicant. Calling friends or employers is a punishable offense.</span>
                                </li>
                                <li className="flex gap-4 p-4 bg-gray-50 rounded-xl border-l-4 border-red-500">
                                    <span><strong>Standard Hours:</strong> Calls and visits are restricted between 7 AM and 7 PM only.</span>
                                </li>
                                <li className="flex gap-4 p-4 bg-gray-50 rounded-xl border-l-4 border-red-500">
                                    <span><strong>Police Intervention:</strong> Debt is a civil matter. If an agent threatens you with 'Police Action' or 'Jail', they are committing criminal intimidation under Section 506 of IPC.</span>
                                </li>
                            </ul>
                        </section>

                        <section id="ots-process" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-tight">
                                The Step-by-Step Education Loan OTS Process
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                A One-Time Settlement (OTS) is a delicate dance of legal documentation and strategic silence. We don't just 'request' a settlement; we present a dossier that makes settlement the only logical choice for the bank.
                            </p>
                            <div className="space-y-4 mb-10">
                                {[
                                    { step: "Legal & Forensic Audit", desc: "We review your loan statement for incorrect compound interest, hidden charges, and missing subsidies." },
                                    { step: "Hardship Documentation", desc: "We compile proof of unemployment, medical emergencies, or family financial breakdown to show a genuine 'Inability to Pay'." },
                                    { step: "The Legal Proposal", desc: "We draft a formal proposal to the bank's Nodal Officer citing specific High Court judgments where students were protected against coercive recovery." },
                                    { step: "Committee Negotiation", desc: "We handle the back-and-forth with the bank's Settlement Advisory Committee, ensuring your offer is taken seriously." },
                                    { step: "The Final NDC", desc: "After payment, we ensure you receive a 'No Dues Certificate' and that the bank updates the credit bureaus within 30 days." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-6 bg-white border border-[#DEDEDE] rounded-2xl shadow-sm">
                                        <div className="w-10 h-10 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold flex-shrink-0">{i + 1}</div>
                                        <div>
                                            <h4 className="font-bold text-[#2E2E2E] mb-1">{item.step}</h4>
                                            <p className="text-gray-600 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="collateral-secured" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                                Secured vs. Unsecured Education Loans: Legal Nuances
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                High-value education loans (for IVY League or International MBA) usually involve property as collateral. This changes the legal dynamic completely.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                For secured loans, the bank can use the SARFAESI ACT to auction your home. However, our lawyers specialize in SARFAESI defense. We challenge the bank's valuation of the property and identify procedural flaws in their 13(2) and 13(4) notices. By creating a 'cloud over the title', we stop the auction and force a settlement that allows the family to keep their home while resolving the debt.
                            </p>
                            <div className="bg-yellow-50 p-8 rounded-2xl border border-yellow-200 mb-10">
                                <h4 className="text-xl font-bold mb-4 text-[#2E2E2E]">The 'Excessive Security' Defense</h4>
                                <p className="text-gray-700">If the property value is 2 Crores but the loan is only 50 Lakhs, the bank is 'Over-Secured'. Courts in India view 'Excessive Attachment' as a violation of the borrower's fundamental rights. We use this to obtain stay orders against auctions.</p>
                            </div>
                        </section>

                        <section id="cibil-recovery" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-tight">
                                Post-Settlement: CIBIL Rehabilitation for Students
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                A major fear for young professionals is having a 'Settled' status on their CIBIL report. While it stops the litigation, it marks your credit for 7 years.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Our legal team doesn't stop at the settlement. We help you with 'Credit Rehabilitaton'. We negotiate for the bank to report the account as 'Closed' instead of 'Settled' whenever possible. If reporting is already done, we guide you on building a parallel positive credit history through secured credit cards or gold loans, ensuring your future dreams are not permanently blocked.
                            </p>
                        </section>

                        <section id="why-expert" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-tight">
                                Why You Need an Expert Lawyer (Not Just an Agent)
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Debt settlement agencies lack the power to represent you in court. A lawyer, however, provides 'Attorney-Client Privilege' and the ability to file a suit against the bank for illegal practices.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 text-center">
                                    <FontAwesomeIcon icon={faShieldAlt} size="2x" className="text-[#1F5EFF] mb-4" />
                                    <h4 className="font-bold mb-2">Legal Immunity</h4>
                                    <p className="text-xs text-gray-500">Stop harassing calls with a single formal Advocate's notice.</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 text-center">
                                    <FontAwesomeIcon icon={faGavel} size="2x" className="text-[#1F5EFF] mb-4" />
                                    <h4 className="font-bold mb-2">DRT/Court Presence</h4>
                                    <p className="text-xs text-gray-500">We file S.A. appeals to get stay orders on property and asset auctions.</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 text-center">
                                    <FontAwesomeIcon icon={faBalanceScale} size="2x" className="text-[#1F5EFF] mb-4" />
                                    <h4 className="font-bold mb-2">Negotiation Power</h4>
                                    <p className="text-xs text-gray-500">We use technical contract laws to force banks to waive penalties.</p>
                                </div>
                            </div>
                        </section>

                        <section id="success-stories" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-tight text-center">
                                Real Impact: Success Stories in Education Loan Settlement
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                                {[
                                    {
                                        name: "Arjun S.",
                                        loc: "Bangalore",
                                        type: "International MBA Loan",
                                        outcome: "45% OTS Secured",
                                        story: "After a layoff in the US, I couldn't pay my 60 Lakh loan. SettleLoans identified that the bank had miscalculated the CSIS subsidy and used that to negotiate a massive discount."
                                    },
                                    {
                                        name: "Sana W.",
                                        loc: "Lucknow",
                                        type: "Medical Degree Loan",
                                        outcome: "Home Auction Stopped",
                                        story: "The bank issued a SARFAESI notice for my parent's house. SettleLoans moved the DRT within 48 hours and got a stay. We eventually settled the loan for a manageable lump sum."
                                    },
                                    {
                                        name: "Vikrant K.",
                                        loc: "Delhi",
                                        type: "Engineering Loan Default",
                                        outcome: "Harassment Ceased",
                                        story: "Recovery agents were calling my office and relatives. One legal notice from SettleLoans stopped all calls immediately. We later reached a 50% discount settlement."
                                    },
                                    {
                                        name: "Meera D.",
                                        loc: "Hyderabad",
                                        type: "Parent Co-Applicant",
                                        outcome: "Credit Score Protected",
                                        story: "I am a retired teacher and was a co-applicant for my son. SettleLoans negotiated a settlement that kept my pension account out of the bank's reach and resolved the debt."
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
                                Frequently Asked Questions: Student Debt Rights
                            </h2>
                            <div className="space-y-4 not-prose">
                                {[
                                    { q: "Can the bank block my degree if I don't pay?", a: "No. Under Indian law, the college cannot withhold your degree for a bank loan. This is a common threat used by recovery agents but has no legal basis." },
                                    { q: "Is an education loan settlement better than a car loan settlement?", a: "Education loans are often 'Unsecured' up to a certain limit, which gives the borrower more leverage for a larger discount because the bank has no asset to sell." },
                                    { q: "Can my parents be jailed for my education loan default?", a: "No. Debt is a civil matter. There is no provision for jail in the case of genuine loan defaults unless fraud or forgery is proven." },
                                    { q: "What if I get a job during the settlement process?", a: "If your income profile improves, the bank might demand a higher amount. This is why timing your proposal with a lawyer is critical." },
                                    { q: "Can I take an education loan for a second degree after settling one?", a: "It is extremely difficult. You will likely need to wait 3-5 years and show strong income before a new lender considers your application." },
                                    { q: "Does the government waive off education loans?", a: "Rarely. While there are interest subsidy schemes (CSIS), a full principal waiver is almost never announced by the central government." },
                                    { q: "What documents do I need for an OTS?", a: "Loan agreement, all bank notices, your latest Income Tax Returns (or proof of unemployment), and medical records if any." },
                                    { q: "Can the bank attach my parent's salary?", a: "Only if they are co-applicants and after the bank has won a civil suit, which takes years. They cannot do it directly." },
                                    { q: "What is the 'IBA Model Scheme' and does it apply to private banks?", a: "It's a voluntary standard for private banks but mandatory for PSBs. However, even private banks often follow its principles to avoid RBI scrutiny." },
                                    { q: "What if I am living abroad and default?", a: "The bank can still proceed against your co-applicants and guarantors in India. They can also file for 'Look Out Circulars' (LOC) in extreme high-value fraud cases, though this is rare for normal defaults." },
                                    { q: "Can I move my education loan to another bank after default?", a: "No. No bank will 'take over' an account that is already an NPA or has a low CIBIL score." },
                                    { q: "What happens to the guarantor if I settle?", a: "The guarantor is legally released from all liability once the 'No Dues Certificate' is issued by the bank." },
                                    { q: "What is the minimum percentage for an education loan settlement?", a: "It varies, but we have achieved settlements for as low as 30% to 50% of the total outstanding for genuine hardship cases." },
                                    { q: "Can an NBFC use the SARFAESI Act for study loans?", a: "Only if the loan is 'Secured' against property and the NBFC is notified by the government. Most unsecured student loans don't fall under SARFAESI." },
                                    { q: "How long does the entire legal settlement take?", a: "Typically, from the first notice to the final NDC, it takes 2 to 5 months." }
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
                                Conclusion: Don't Let Debt Define Your Future
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-bold">
                                You took an education loan to build a career, not a prison. Defaulting is a setback, but it is not the end of your professional story.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                The Indian legal system and RBI regulations offer several paths for students in distress. By engaging an expert education loan lawyer, you transition from a 'Helpless Borrower' to a 'Legally Informed Professional'. We handle the aggressive recovery agents, audit the bank's calculations, and negotiate a settlement that gives you the clean slate you deserve. Do not wait for the bank to garnish your parent's savings or auction your home. Take the first step toward financial freedom today. Your degree should be an asset, not an anchor.
                            </p>
                        </section>
                    </article>

                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-[#2E2E2E] p-8 rounded-[24px] text-white shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
                                <h4 className="text-2xl font-black mb-4 relative z-10 leading-tight">Settle Your Student Debt</h4>
                                <p className="text-[#DEDEDE]/80 text-sm mb-8 relative z-10 font-medium">Expert legal protection against recovery agents and biased bank notices.</p>
                                <Link href="/contact" className="block w-full text-center bg-[#1F5EFF] text-white font-bold py-4 rounded-xl hover:bg-white hover:text-[#1F5EFF] transition-all duration-300 shadow-lg relative z-10">
                                    Stop the Stress
                                </Link>
                            </div>

                            <div className="bg-white border border-[#DEDEDE] p-8 rounded-[24px] shadow-sm font-bold">
                                <h4 className="text-xl font-black text-[#2E2E2E] mb-6 uppercase tracking-wider text-sm">Case Resources</h4>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/best-lawyer-for-personal-loans" className="group flex items-center gap-3 text-[#747474] hover:text-[#1F5EFF] transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#DEDEDE] group-hover:bg-[#1F5EFF] transition-colors"></div>
                                            Personal Debt relief
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/best-lawyer-for-notice-for-loan-default" className="group flex items-center gap-3 text-[#747474] hover:text-[#1F5EFF] transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#DEDEDE] group-hover:bg-[#1F5EFF] transition-colors"></div>
                                            Dealing with Notices
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/best-lawyer-for-consortium-loan-recovery-defence" className="group flex items-center gap-3 text-[#747474] hover:text-[#1F5EFF] transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#DEDEDE] group-hover:bg-[#1F5EFF] transition-colors"></div>
                                            Commercial Defence
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
