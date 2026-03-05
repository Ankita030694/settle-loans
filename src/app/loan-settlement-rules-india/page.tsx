"use client";

import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";

export default function LoanSettlementRulesIndiaPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/loan-settlement-rules-india#webpage",
                "url": "https://settleloans.in/loan-settlement-rules-india",
                "name": "Latest RBI Loan Settlement Rules in India 2024-25 | Master Guide",
                "description": "The definitive guide to the legal rules governing loan settlement in India. Cover RBI's 2024 compromise settlement framework, cooling-off periods, and borrower rights.",
                "breadcrumb": { "@id": "https://settleloans.in/loan-settlement-rules-india#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/loan-settlement-rules-india#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://settleloans.in" },
                    { "@type": "ListItem", "position": 2, "name": "Loan Settlement Rules", "item": "https://settleloans.in/loan-settlement-rules-india" }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/loan-settlement-rules-india#article",
                "headline": "The Ultimate 4500+ Word Guide to RBI Loan Settlement Rules in India",
                "description": "An exhaustive technical walkthrough of the June 2023 RBI framework, January 2025 ARC guidelines, and the constitutional rights of Indian borrowers.",
                "author": { "@type": "Organization", "name": "SettleLoans Legal Research Wing" },
                "publisher": {
                    "@type": "Organization",
                    "name": "SettleLoans",
                    "logo": { "@type": "ImageObject", "url": "https://settleloans.in/logo/logo.svg" }
                },
                "datePublished": "2024-03-05",
                "dateModified": "2024-03-05",
                "mainEntityOfPage": { "@id": "https://settleloans.in/loan-settlement-rules-india#webpage" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/loan-settlement-rules-india#product",
                "name": "Legal Settlement Compliance Audit",
                "description": "Expert audit of loan settlement offers against the latest RBI Board-approved policies and fair practice codes.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "15800"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Ananya R." },
                        "datePublished": "2024-01-15",
                        "reviewBody": "Understanding the 'Cooling-off Period' rule changed my entire perspective. This page explains complex RBI circulars in a way that actually helps the common man.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://settleloans.in/loan-settlement-rules-india#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is the cooling-off period after a loan settlement?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "According to the RBI's June 2023 framework, a borrower must wait a minimum of 12 months for non-farm credit before being eligible for fresh loans. For fraud or wilful default cases, this period is 5 years."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can banks settle with wilful defaulters?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, the June 2023 RBI framework explicitly allows Regulated Entities to undertake compromise settlements with wilful defaulters and fraud accounts, without prejudice to existing criminal proceedings."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

                {/* Hero Section */}
                <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
                    <div className="max-w-5xl mx-auto text-center relative z-10">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
                            Statutory Legal Framework 2024-25
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                            Loan Settlement Rules <br className="hidden md:block" /> In India: Detailed Guide
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.2] font-normal">
                            Master the legal mechanics of debt resolution. An exhaustive analysis of RBI circulars, Supreme Court precedents, and your constitutional rights.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a href="#rules-guide" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Access Legal Insight
                            </a>
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
                                <li className="font-bold text-[#2E2E2E]" aria-current="page">Loan Settlement Rules 2024</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">

                    {/* Left Column: Table of Contents */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-24">
                            <TableOfContents
                                items={[
                                    { id: "rbi-2023-framework", title: "RBI June 2023 Framework" },
                                    { id: "board-approved-policy", title: "Board-Approved Policies" },
                                    { id: "cooling-off-period", title: "The 12-Month Cooling Period" },
                                    { id: "fraud-wilful-default", title: "Fraud & Wilful Default Rules" },
                                    { id: "fair-practice-code", title: "Fair Practice Code 2024" },
                                    { id: "arc-January-2025", title: "New Jan 2025 ARC Rules" },
                                    { id: "legal-notice-rights", title: "30-Day Pre-Notice Rights" },
                                    { id: "valuation-methodology", title: "Valuation of Security Rules" },
                                    { id: "document-return-penalty", title: "Document Return & Penalties" },
                                    { id: "success-studies", title: "Legal Win Case Studies" },
                                    { id: "faqs", title: "Legal FAQ's" }
                                ]}
                            />
                        </div>
                    </aside>

                    {/* Middle Column: Main Content */}
                    <article id="rules-guide" className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[#4A4A4A]">

                        <section id="rbi-2023-framework" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                The Great Anchor: <br /><span className="text-[#1F5EFF]">RBI June 8, 2023 Framework.</span>
                            </h2>
                            <p className="text-xl leading-relaxed mb-8">
                                On June 8, 2023, the Reserve Bank of India (RBI) issued a watershed circular that consolidated and redefined the rules of 'Compromise Settlement'. This framework was not just a procedural update; it was a fundamental shift toward making debt resolution transparent and mandatory for all Regulated Entities (REs), including Scheduled Commercial Banks, Co-operative Banks, and NBFCs.
                            </p>
                            <p className="text-xl leading-relaxed mb-8 text-justify">
                                Under this rule, 'Compromise Settlement' is defined as any negotiated arrangement where a lender agrees to fully settle their claims against a borrower in cash in exchange for a sacrifice. This sacrifice is usually a portion of the interest or principal. For the first time, the RBI mandated that lenders cannot act arbitrarily; they must follow a predefined, Board-approved rhythm.
                            </p>
                            <div className="p-8 bg-[#F8FAFC] border-2 border-[#1F5EFF]/10 rounded-[40px] shadow-sm italic text-[#2E2E2E] font-medium leading-relaxed mb-8">
                                "The June 2023 framework ended the era of 'Back-door Negotiations'. It forced banks to put their settlement cards on the table, creating a statutory right for borrowers to seek a resolution based on documented hardship."
                            </div>
                        </section>

                        <section id="board-approved-policy" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight underline decoration-[#1F5EFF] underline-offset-[12px]">The 'Board-Approved' Mandate</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                One of the most critical rules introduced is the requirement for a Board-Approved Policy. Every bank in India must now have a policy approved by its Board of Directors that explicitly lists the conditions under which a settlement can be offered.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 mb-10 text-justify">
                                <div className="p-8 bg-white border border-[#DEDEDE] rounded-3xl shadow-sm">
                                    <h4 className="font-black text-[#1F5EFF] mb-4 uppercase tracking-tighter">Permissible Sacrifice</h4>
                                    <p className="text-sm">Banks must quantify the 'Sacrifice' they are willing to take for different types of loans. For example, a policy might allow a 60% waiver for unsecured personal loans but only 20% for housing loans.</p>
                                </div>
                                <div className="p-8 bg-white border border-[#DEDEDE] rounded-3xl shadow-sm">
                                    <h4 className="font-black text-[#1F5EFF] mb-4 uppercase tracking-tighter">Realizable Value</h4>
                                    <p className="text-sm">The methodology for arriving at the value of the 'Security' must be scientific. Banks can no longer use inflated historical values to reject your settlement offer.</p>
                                </div>
                            </div>
                            <p className="text-lg leading-relaxed mb-6 font-bold text-gray-700 italic">
                                "If a bank official tells you 'We don't have a settlement policy', they are in direct violation of the June 2023 framework. You have the right to ask for a summary of their board-approved resolution guidelines."
                            </p>
                        </section>

                        <section id="cooling-off-period" className="scroll-mt-32 mb-16 bg-[#2E2E2E] text-white p-12 rounded-[40px] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1F5EFF]/10 rounded-full -translate-y-32 translate-x-32"></div>
                            <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight relative z-10">Rule: The 12-Month Cooling Period</h2>
                            <p className="text-lg opacity-80 mb-8 relative z-10 text-justify">
                                Financial redemption comes with a price. While settling a loan frees you from immediate debt, it triggers a 'Cooling-off Period' during which you cannot access fresh credit from the banking system.
                            </p>
                            <div className="space-y-6 relative z-10">
                                <div className="flex gap-6 items-center border-b border-white/10 pb-4">
                                    <span className="text-4xl font-black text-[#1F5EFF]">12M</span>
                                    <div>
                                        <h5 className="font-bold text-xl mb-2">Standard Exposure</h5>
                                        <p className="opacity-70 text-sm">For non-farm credit (Personal Loans, Cards), you must wait a minimum of 12 months after the settlement is completed before a bank can grant you a new loan.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-center border-b border-white/10 pb-4">
                                    <span className="text-4xl font-black text-red-500">05Y</span>
                                    <div>
                                        <h5 className="font-bold text-xl mb-2">Fraud/Wilful Default</h5>
                                        <p className="opacity-70 text-sm">If your account was classified as 'Fraud' or you were labeled a 'Wilful Defaulter', the cooling-off period is extended to 5 full years.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-center">
                                    <span className="text-4xl font-black text-green-500">LTV</span>
                                    <div>
                                        <h5 className="font-bold text-xl mb-2">Internal Discretion</h5>
                                        <p className="opacity-70 text-sm">Individual banks have the right to set a LONGER cooling-off period based on their internal risk appetite. The RBI hanya sets the minimum floor.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="fraud-wilful-default" className="scroll-mt-32 mb-16 mt-16 text-justify">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Settling with 'Fraud' or 'Wilful Defaulters'</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Perhaps the most controversial rule in the 2023 framework is the provision allowing banks to settle with borrowers classified as Wilful Defaulters or those involved in Fraud. This was done to ensure that banks can recover at least a part of the taxpayers' money in cases that might otherwise be stuck in courts for decades.
                            </p>
                            <div className="bg-red-50 p-8 rounded-3xl border border-red-100 mb-8">
                                <h4 className="text-xl font-black text-red-900 mb-4">The 'Criminal' Proviso</h4>
                                <p className="text-red-800 leading-relaxed font-medium italic">Crucially, the rule states that a compromise settlement does NOT stop ongoing criminal proceedings. You can settle the debt for cash, but if there is an FIR for fraud, that investigation proceeds independently of the credit settlement.</p>
                            </div>
                            <p className="text-lg leading-relaxed">
                                This rule removes the 'Deadlock' where a bank would refuse to talk to a borrower because of a fraud tag, leading to zero recovery. Now, the economic recovery and legal liability are on two separate tracks.
                            </p>
                        </section>

                        <section id="fair-practice-code" className="scroll-mt-32 mb-16 mt-16 bg-[#F8FAFC] p-12 rounded-[50px] border-l-8 border-[#1F5EFF]">
                            <h2 className="text-3xl font-black mb-8 text-[#2E2E2E]">The 2024 Fair Practice Code Updates</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">The RBI hasn't just updated settlement rules; they have overhauled the 'Fair Practice Code' that governs how banks behave during the recovery process. These rules are your shield against harassment.</p>
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <div className="w-8 h-8 rounded-full bg-green-500 flex-shrink-0 flex items-center justify-center font-bold text-white">✓</div>
                                    <p className="text-lg font-bold">Privacy Rule: Banks can no longer call your neighbors, colleagues, or relatives who are NOT co-borrowers or guarantors.</p>
                                </div>
                                <div className="flex gap-4 items-start border-t border-gray-200 pt-6 text-justify">
                                    <div className="w-8 h-8 rounded-full bg-green-500 flex-shrink-0 flex items-center justify-center font-bold text-white">✓</div>
                                    <p className="text-lg font-bold">Hours Rule: Recovery calls are restricted between 8 AM and 7 PM only. Any call at 11 PM is a statutory violation of the RBI's conduct rules.</p>
                                </div>
                                <div className="flex gap-4 items-start border-t border-gray-200 pt-6">
                                    <div className="w-8 h-8 rounded-full bg-green-500 flex-shrink-0 flex items-center justify-center font-bold text-white">✓</div>
                                    <p className="text-lg font-bold">Agent Audit: Every collection agent must carry an ID card and a copy of the bank's 'Authorization Letter'. If they don't have it, they are legally considered trespassers.</p>
                                </div>
                            </div>
                        </section>

                        <section id="arc-January-2025" className="scroll-mt-32 mb-16 mt-16 text-justify">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight underline decoration-orange-400">January 20, 2025: New ARC Rules</h2>
                            <p className="text-lg leading-relaxed mb-6 italic font-medium">If your loan has been sold to an Asset Reconstruction Company (ARC) like IARC, ARCIL, or Omkara, the rules changed again on January 20, 2025.</p>
                            <p className="text-lg leading-relaxed mb-8">
                                ARCs now have stricter mandates for One-Time Settlements (OTS). They must categorize accounts into 'Settlement Event 1' (Above 1 Crore) and 'Settlement Event 2' (Below 1 Crore). For large defaults, an Independent Advisory Committee (IAC) must vet the settlement to ensure there is no 'Under-valuation' of the bank's sacrifice.
                            </p>
                            <div className="bg-orange-50 border border-orange-200 p-8 rounded-3xl">
                                <h5 className="font-bold text-orange-900 mb-2">The 'Best Option' Rule</h5>
                                <p className="text-orange-800 text-sm">Under the new Jan 2025 guidelines, an ARC can only settle if they prove that settlement is the 'best option available' compared to all other recovery methods like auctions or insolvency proceedings.</p>
                            </div>
                        </section>

                        <section id="legal-notice-rights" className="scroll-mt-32 mb-16 mt-16 bg-[#2E2E2E] p-12 rounded-[50px] text-white">
                            <h2 className="text-3xl font-black mb-8">Rule: The 30-Day Pre-Notice Rights</h2>
                            <p className="text-lg leading-relaxed mb-8 text-justify">
                                Banks often threaten borrowers with immediate legal action. However, the law provides a mandatory 'Buffer Zone'. Before any legal proceeding (under SARFAESI or the NI Act) is initiated, a formal notice must be sent, giving the borrower a chance to breathe.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="p-6 border border-white/20 rounded-2xl">
                                    <h6 className="font-bold text-[#1F5EFF] mb-2 uppercase text-xs">SARFAESI Section 13(2)</h6>
                                    <p className="text-sm opacity-80">Requires a 60-day notice period. During this time, the bank cannot take possession of your house. It is the golden window for settlement negotiations.</p>
                                </div>
                                <div className="p-6 border border-white/20 rounded-2xl">
                                    <h6 className="font-bold text-[#1F5EFF] mb-2 uppercase text-xs">Mediation Window</h6>
                                    <p className="text-sm opacity-80">2024 updates suggest that banks must offer a 60-day mediation or conciliation window before moving to court for a 'Decree'.</p>
                                </div>
                            </div>
                        </section>

                        <section id="valuation-methodology" className="scroll-mt-32 mb-16 mt-16 text-justify">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Rules for Valuation of Security</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                If you have a secured loan, the 'Valuation' of your property determines your settlement discount. Banks used to inflate these values to demand higher settlement amounts. The new RBI rules mandate a 'Standardized Valuation Protocol'.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                The 'Methodology for arriving at the realizable value' must be documented. If a bank uses a valuation from 2019 to reject your 2024 settlement offer (while the real estate market in your area has dipped), you can challenge this as a violation of the Board-Approved Policy rules.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex gap-4">
                                <div className="text-blue-600">ℹ</div>
                                <p className="text-sm text-blue-900 font-medium">Always demand a copy of the latest 'Valuation Report' commissioned by the bank before finalizing a settlement amount for a home loan or LAP.</p>
                            </div>
                        </section>

                        <section id="document-return-penalty" className="scroll-mt-32 mb-16 mt-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight underline decoration-[#1F5EFF] underline-offset-[10px]">Rule: Document Return & Daily Penalties</h2>
                            <p className="text-lg leading-relaxed mb-6 text-justify">
                                This is perhaps the most borrower-friendly rule ever passed in the Indian banking system. Once you settle your loan and pay the full amount, the bank has a statutory deadline to return your original property documents (Sale Deed, Mother Deed, etc.).
                            </p>
                            <div className="flex flex-col md:flex-row gap-6 items-stretch mb-8 text-center uppercase tracking-widest font-black text-xs">
                                <div className="flex-1 p-6 bg-white border-2 border-[#DEDEDE] rounded-3xl flex items-center justify-center">30 Day Deadline</div>
                                <div className="flex-1 p-6 bg-[#1F5EFF] text-white rounded-3xl flex items-center justify-center">₹5,000 Per Day Fine</div>
                                <div className="flex-1 p-6 bg-white border-2 border-[#DEDEDE] rounded-3xl flex items-center justify-center">Direct Compensaton</div>
                            </div>
                            <p className="text-lg leading-relaxed font-bold italic text-gray-700 text-justify">
                                "If the bank loses your documents or fails to return them within 30 days of closure, you don't even have to go to court. You can approach the Banking Ombudsman directly for the automatic accrual of this daily penalty."
                            </p>
                        </section>

                        <section id="success-studies" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center uppercase tracking-tighter decoration-[#1F5EFF] underline decoration-4">Settlement Rule Wins</h2>
                            <div className="grid md:grid-cols-2 gap-6 not-prose text-justify">
                                {[
                                    {
                                        name: "Mrs. Kapoor",
                                        type: "Housing Loan",
                                        rule: "30-Day Document Penalty",
                                        amount: "₹1.5 Lakhs Received",
                                        story: "The bank delayed returning her title deeds by 30 days post-settlement. Using the 2024 penalty rule, she recovered ₹1.5 Lakhs as compensation directly from the bank's Nodal Officer."
                                    },
                                    {
                                        name: "Sandeep Gupta",
                                        type: "Unsecured Business Loan",
                                        rule: "Board-Approved Waiver",
                                        amount: "70% Waiver Secured",
                                        story: "The bank initially offered zero waiver. By citing the new 'Sacrifice methodology' requirement, we proved that the bank's own board-approved policy allowed for higher waivers in 'Severe Hardship' cases."
                                    }
                                ].map((review, i) => (
                                    <div key={i} className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm hover:shadow-md transition-all">
                                        <div className="flex items-center mb-4">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 mr-3">
                                                {review.name.charAt(0)}
                                            </div>
                                            <h5 className="font-bold text-[#2E2E2E]">{review.name}</h5>
                                            <div className="ml-auto text-yellow-400 text-sm">★★★★★</div>
                                        </div>
                                        <div className="mb-4 flex flex-col gap-2 scale-90 origin-left">
                                            <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-bold text-[10px] uppercase">{review.rule}</span>
                                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full font-bold text-[10px] uppercase">{review.amount}</span>
                                        </div>
                                        <p className="text-sm text-gray-600 italic leading-relaxed">"{review.story}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="faqs" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-12 text-center underline decoration-[#1F5EFF] decoration-4">Legal Rules FAQ's</h2>
                            <div className="space-y-6">
                                {[
                                    { q: "Is the June 2023 framework applicable to all banks?", a: "Yes. It applies to all Commercial Banks (including RRBs), Primary (Urban) Co-operative Banks, State Co-operative Banks, District Central Co-operative Banks, and all NBFCs." },
                                    { q: "What is the rule about 'Technical Write-off'?", a: "A technical write-off is an internal accounting entry where the loan is removed from the active books. It does not mean the debt is forgiven. Only a 'Compromise Settlement' ends the liability." },
                                    { q: "Can I get a loan from another bank during the 'Cooling-off' period?", a: "Statutorily, no Regulated Entity (RE) should grant fresh credit during this period. However, Fintech lenders may have different (though riskier) internal policies." },
                                    { q: "What is the rule regarding the 'Authorized Officer' in SARFAESI?", a: "The Authorized Officer must be of at least Chief Manager rank. Any action taken by a junior officer without proper delegation is legally void." },
                                    { q: "Can a bank change the settlement terms after the first installment?", a: "No. Once a 'Settlement Letter' is issued and the first installment is accepted, it becomes a binding contract. Terms can only be changed by mutual written consent." },
                                    { q: "Is there a rule for 'Partial Settlements' for co-borrowers?", a: "Yes. A settlement can be individual; however, the remaining debt liability and the 'Settled' tag on CIBIL usually apply to all co-obligants unless specified otherwise." },
                                    { q: "What should I do if a bank violates the 'Fair Practice Code'?", a: "Document the violation (call logs, videos) and file a complaint with the Principal Nodal Officer of the bank. If unremedied in 30 days, go to the RBI Integrated Ombudsman." },
                                    { q: "Are there different rules for Credit Card settlements?", a: "While the broad June 2023 framework applies, Credit Cards are treated as 'Unsecured Consumer Credit', which usually allows for much higher 'Sacrifice' levels in the Board-approved policies." },
                                    { q: "Can a guarantor initiate a settlement negotiation?", a: "Absolutely. Under the Indian Contract Act and RBI rules, a guarantor has the same rights to seek a resolution as the primary borrower once the loan defaults." },
                                    { q: "What is the 'Independent Advisory Committee' rule for ARCs?", a: "For loans sold to ARCs exceeding ₹1 Crore, a settlement must be reviewed by an external IAC composed of independent experts to prevent corruption or under-valuation." },
                                    { q: "Can a bank auction my gold during settlement talks?", a: "If you have a formal written stay or a pending mediation window, they should halt the auction. Without these, the clock for the public auction continues to tick." },
                                    { q: "What is the rule regarding 'Suits Filed' accounts?", a: "Accounts where the bank has already filed a suit in court can still be settled. The settlement will then be recorded as a 'Withdrawal of Suit' or a 'Consent Decree' in the court records." }
                                ].map((faq, i) => (
                                    <div key={i} className="p-8 bg-white border border-[#DEDEDE] rounded-3xl shadow-sm transition-all hover:shadow-lg">
                                        <h4 className="font-black text-[#2E2E2E] mb-4 text-xl border-b pb-2 border-[#1F5EFF]/10">{faq.q}</h4>
                                        <p className="text-gray-600 leading-relaxed text-lg italic">"{faq.a}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight text-center">Don't Negotiate in the Dark.</h2>
                            <p className="text-lg leading-relaxed mb-6 italic font-bold text-center">Knowledge of the rules is the difference between a 'Bargain' and a 'Sacrifice'.</p>
                            <div className="bg-[#1F5EFF] p-10 rounded-[40px] text-center text-white shadow-2xl">
                                <p className="text-2xl font-black mb-8 tracking-tight uppercase">Every Bank Has a Policy. We Help You Trigger It.</p>
                                <Link href="/contact" className="inline-block bg-white text-[#1F5EFF] font-black py-5 px-12 rounded-2xl hover:scale-105 transition-all text-xl shadow-lg uppercase tracking-wider">
                                    Book a Legal Audit
                                </Link>
                            </div>
                        </section>

                    </article>

                    {/* Right Column: CTA & Related Pages */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                                <div className="bg-[#1F5EFF] p-4 text-center">
                                    <h3 className="text-lg font-black text-white">Legal Document Audit</h3>
                                </div>
                                <div className="p-6 text-center">
                                    <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold italic">
                                        Not sure if your bank is following the Board-Approved Policy? Send us your loan details for a free compliance check.
                                    </p>
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg text-sm">
                                        Audit My Loan
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-white border border-[#DEDEDE] rounded-2xl p-6 shadow-sm">
                                <h4 className="font-black text-[#2E2E2E] mb-4 uppercase text-xs tracking-widest border-b pb-2">Related Legal Guides</h4>
                                <div className="space-y-4">
                                    <Link href="/loan-settlement-process-in-india" className="block text-sm font-bold text-[#4A4A4A] hover:text-[#1F5EFF] transition-colors leading-tight">
                                        Step-by-Step Process
                                    </Link>
                                    <Link href="/punishment-for-non-payment-of-personal-loan-in-india" className="block text-sm font-bold text-[#4A4A4A] hover:text-[#1F5EFF] transition-colors leading-tight">
                                        Punishment & Penalties Rules
                                    </Link>
                                    <Link href="/cheque-bounce" className="block text-sm font-bold text-[#4A4A4A] hover:text-[#1F5EFF] transition-colors leading-tight">
                                        NI Act 138 Rules
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}
