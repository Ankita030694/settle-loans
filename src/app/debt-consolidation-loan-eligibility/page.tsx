"use client";

import React from "react";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";

export default function DebtConsolidationEligibilityPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "@id": "https://settleloans.in/debt-consolidation-loan-eligibility#article",
                "headline": "Debt Consolidation Loan Eligibility: A Comprehensive Guide to Qualifying in India",
                "description": "Learn everything about debt consolidation loan eligibility in India. Master the criteria for credit scores, income levels, and employment history to rank #1 for financial freedom.",
                "image": "https://settleloans.in/images/debt-consolidation-eligibility.jpg",
                "author": { "@type": "Organization", "name": "SettleLoans" },
                "publisher": {
                    "@type": "Organization",
                    "name": "SettleLoans",
                    "logo": { "@type": "ImageObject", "url": "https://settleloans.in/logo.png" }
                },
                "datePublished": "2024-05-07",
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://settleloans.in/debt-consolidation-loan-eligibility" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/debt-consolidation-loan-eligibility#product",
                "name": "Debt Consolidation Advisory Service",
                "description": "Expert guidance on qualifying for debt consolidation loans and merging multiple high-interest debts into one manageable EMI.",
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
                        "reviewBody": "SettleLoans provided the best guidance for my debt consolidation. I was struggling with five credit cards, and they helped me understand the eligibility criteria to get a single loan at half the interest rate.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Anjali Sharma" },
                        "datePublished": "2024-03-15",
                        "reviewBody": "I thought I wouldn't qualify due to my slightly low CIBIL, but the team at SettleLoans showed me how to fix my debt-to-income ratio and successfully apply.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Amit Patel" },
                        "datePublished": "2024-04-05",
                        "reviewBody": "Professional and transparent. They explained the eligibility requirements for banks vs NBFCs clearly. Highly recommended for anyone drowning in EMIs.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Sneha Iyer" },
                        "datePublished": "2024-04-20",
                        "reviewBody": "The detailed breakdown of documentation helped me get my loan approved in record time. Excellent service!",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Manoj Singh" },
                        "datePublished": "2024-05-01",
                        "reviewBody": "Finally, a service that understands the Indian lending market. They helped me consolidate my home loan and two personal loans effortlessly.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is the minimum CIBIL score for debt consolidation loan eligibility?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Most banks in India prefer a CIBIL score of 750 or above for debt consolidation loans. However, some NBFCs may consider scores between 650 and 700 at higher interest rates."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I get a debt consolidation loan with a low salary?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Eligibility depends on your debt-to-income ratio. If your salary is low but your existing debt is also manageable, you might qualify. Usually, a minimum net income of 25,000 to 30,000 rupees is required."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are self-employed individuals eligible for debt consolidation?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, self-employed professionals and business owners are eligible. They need to show at least 2 to 3 years of business stability and consistent ITR filings."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does debt consolidation improve my credit score?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "In the long run, yes. By merging multiple debts into one and paying on time, your credit utilization and repayment history improve, which boosts your score."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What documents are required for eligibility verification?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "You typically need PAN card, Aadhaar, last 6 months bank statements, 3 months salary slips, and details of all current outstanding loans."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I consolidate credit card debt and personal loans together?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely. That is the primary purpose of a debt consolidation loan: to merge various high-interest unsecured debts into a single, low-interest EMI."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does my age affect eligibility?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Lenders prefer applicants between 21 and 60 years old. This range ensures that the borrower has an active income stream to service the loan over its tenure."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is a Debt-to-Income (DTI) ratio?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "DTI is the percentage of your monthly income that goes toward paying debts. Lenders usually look for a DTI below 40 percent to ensure you can afford a new loan."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I include my home loan in debt consolidation?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Usually, home loans are already at lower interest rates. Debt consolidation is better suited for high-interest unsecured loans like credit cards or personal loans."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Will a settled loan affect my eligibility?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, a 'settled' status on your credit report can be a red flag. Lenders prefer 'closed' accounts. However, we can help you navigate these challenges."
                        }
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://settleloans.in" },
                    { "@type": "ListItem", "position": 2, "name": "Eligibility", "item": "https://settleloans.in/eligibility" },
                    { "@type": "ListItem", "position": 3, "name": "Debt Consolidation Loan Eligibility", "item": "https://settleloans.in/debt-consolidation-loan-eligibility" }
                ]
            }
        ]
    };

    const tocItems = [
        { id: "introduction", title: "Introduction" },
        { id: "what-is-consolidation", title: "Decoding Debt Consolidation" },
        { id: "standard-criteria", title: "Standard Eligibility Checklist" },
        { id: "employment-factor", title: "Employment & Income Stability" },
        { id: "cibil-importance", title: "The Critical Role of CIBIL" },
        { id: "dti-ratio", title: "Understanding DTI Ratio" },
        { id: "documentation", title: "Required Documentation" },
        { id: "repayment-history", title: "Repayment History Analysis" },
        { id: "banks-vs-nbfcs", title: "Banks vs NBFCs Criteria" },
        { id: "unsecured-vs-secured", title: "Unsecured vs Secured Options" },
        { id: "psychology-debt", title: "Financial Psychology" },
        { id: "boost-eligibility", title: "Boosting Your Odds" },
        { id: "common-pitfalls", title: "Pitfalls to Avoid" },
        { id: "helpful-resources", title: "Helpful Resources" },
        { id: "reviews", title: "Success Stories" },
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
                            Financial Freedom Guide
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                            Mastering <span className="text-[#1F5EFF]">Debt Consolidation Loan Eligibility</span> in India
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
                            Qualify for the lowest interest rates and merge your high-interest debts into one simple monthly payment. Your ultimate guide to eligibility requirements.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Check Your Eligibility Now
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
                                <li><Link href="/services" className="hover:text-[#1F5EFF] transition-colors">Services</Link></li>
                                <li><span className="text-gray-300">/</span></li>
                                <li className="font-bold text-[#2E2E2E]" aria-current="page">Debt Consolidation Eligibility</li>
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
                                Introduction: <span className="text-[#1F5EFF]">Mastering the Path</span> to Financial Freedom
                            </h2>
                            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6 font-bold">
                                    In the fast-paced financial landscape of modern India, it is incredibly easy to find yourself juggling multiple credit card bills, personal loans, and short-term credit obligations.
                                </p>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                                    The burden of managing various repayment dates, differing interest rates, and the constant fear of missing an EMI can be overwhelming. This is where debt consolidation emerges as a beacon of hope. However, the first hurdle to cross is understanding the debt consolidation loan eligibility criteria. Many borrowers dive into the application process without a clear roadmap, leading to rejections that further damage their credit scores.
                                </p>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6 font-bold text-[#1F5EFF]">
                                    At SettleLoans, we believe that financial literacy is the key to recovery. This guide is designed to provide you with a deep dive into the technical and practical aspects of qualifying for a debt consolidation loan. Whether you are a salaried professional in Mumbai or a self-employed business owner in Delhi, mastering these criteria will significantly increase your chances of securing a debt-free future.
                                </p>
                            </div>
                        </section>

                        <section id="what-is-consolidation" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Decoding Debt Consolidation: More Than Just a Loan</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Debt consolidation is not merely another loan added to your pile of liabilities; it is a strategic financial tool used to simplify your life. The mechanism is straightforward: you take out a new loan, usually at a lower interest rate, and use that capital to pay off all your existing high-interest debts.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Think of it as a reset button for your finances. Instead of paying five different lenders at five different times of the month, you now have one single EMI. This single payment is typically lower than the sum of your previous payments because of the reduced interest rate and a more structured repayment tenure.
                            </p>
                            <p className="text-lg leading-relaxed mb-6 font-bold">
                                Understanding the core essence of this tool is the first step toward eligibility. Lenders want to see that you are using this loan to improve your financial health, not just as a way to access more credit for spending. Your intent, backed by a solid plan, is what lenders look for during the evaluation phase.
                            </p>
                        </section>

                        <section id="standard-criteria" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">The Standard Eligibility Checklist: Are You Ready?</h2>
                            <p className="text-lg leading-relaxed mb-8">
                                Before looking at the complex financial ratios, every borrower must meet the basic entry requirements set by Indian banks and NBFCs. These are the non-negotiables that form the foundation of your application.
                            </p>
                            <div className="space-y-6 mb-10">
                                <div className="p-8 bg-gray-50 border-l-8 border-[#1F5EFF] rounded-r-2xl shadow-sm">
                                    <h4 className="font-bold text-2xl mb-4 text-[#2E2E2E]">Nationality and Residency</h4>
                                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                                        The primary requirement is that you must be an Indian citizen and a resident of the country. Lenders need to ensure that the borrower is within the legal jurisdiction of Indian recovery laws.
                                    </p>
                                </div>
                                <div className="p-8 bg-gray-50 border-l-8 border-[#1F5EFF] rounded-r-2xl shadow-sm">
                                    <h4 className="font-bold text-2xl mb-4 text-[#2E2E2E]">Age Bracket</h4>
                                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                                        Most lenders require you to be at least 21 years old at the time of application and no older than 60 to 65 years by the time the loan tenure ends. This range ensures that you have the active working years required to repay the debt.
                                    </p>
                                </div>
                                <div className="p-8 bg-gray-50 border-l-8 border-[#1F5EFF] rounded-r-2xl shadow-sm">
                                    <h4 className="font-bold text-2xl mb-4 text-[#2E2E2E]">Income Threshold</h4>
                                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                                        Your net monthly income is a critical indicator. While some fintech apps might consider a salary as low as 15,000 rupees, major banks like HDFC or ICICI usually require a minimum net income of 25,000 to 35,000 rupees for a consolidation loan.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="employment-factor" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Employment Stability: Why Your Boss Matters to Your Lender</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Lenders are risk-averse. They want to be absolutely sure that your income stream will not vanish halfway through the loan term. This is why employment stability is a massive part of the eligibility puzzle.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                For salaried individuals, working for a reputed private limited company, a public sector undertaking, or a multinational corporation provides a significant boost. Lenders often have a 'graded' list of companies. If your employer is in Category A, you might get a lower interest rate and faster approval.
                            </p>
                            <p className="text-lg leading-relaxed mb-6 font-bold">
                                The duration of your employment is also scrutinized. Usually, a total work experience of at least two years, with at least six months to one year in your current organization, is required. For self-employed individuals, a business existence of at least three years with consistent profit growth is the benchmark.
                            </p>
                        </section>

                        <section id="cibil-importance" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">The CIBIL Factor: The Heartbeat of Your Loan Application</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                In India, your credit score is your financial identity. The Credit Information Bureau (India) Limited, or CIBIL, provides the most widely used score. For a debt consolidation loan, your score is more than just a number; it is a story of your past financial behavior.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 mb-10">
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl">
                                    <h4 className="font-bold text-[#1F5EFF] mb-3">750 and Above: The Green Zone</h4>
                                    <p className="text-sm">A score in this range makes you an ideal candidate. You are in a strong position to negotiate for lower interest rates and higher loan amounts. Lenders view you as a low-risk borrower who is likely to use consolidation responsibly.</p>
                                </div>
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl">
                                    <h4 className="font-bold text-[#1F5EFF] mb-3">650 to 749: The Caution Zone</h4>
                                    <p className="text-sm">You are still eligible, but the terms might not be as favorable. You might face higher processing fees or slightly elevated interest rates. Lenders will look more closely at your income and employer profile to balance the risk.</p>
                                </div>
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl">
                                    <h4 className="font-bold text-[#1F5EFF] mb-3">Below 650: The High-Risk Zone</h4>
                                    <p className="text-sm">Approval becomes difficult here. Traditional banks might reject the application outright. You may need to look at NBFCs or consider adding a co-applicant with a better score to meet the eligibility criteria.</p>
                                </div>
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl">
                                    <h4 className="font-bold text-[#1F5EFF] mb-3">The 'Settled' Trap</h4>
                                    <p className="text-sm">If your credit report shows even one loan as 'Settled' instead of 'Closed', it can kill your eligibility. A settlement means you did not pay the full amount, which scares away new lenders. We help clients resolve these specific entries.</p>
                                </div>
                            </div>
                        </section>

                        <section id="dti-ratio" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Debt-to-Income Ratio: The Invisible Scale</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The Debt-to-Income (DTI) ratio is perhaps the most misunderstood aspect of eligibility. Lenders use this to calculate how much "breathing room" you have in your budget. If you earn 1,00,000 rupees and 60,000 goes into existing EMIs, your DTI is 60 percent.
                            </p>
                            <div className="bg-blue-50 p-8 rounded-xl border border-blue-200 my-8">
                                <h4 className="font-bold text-blue-900 mb-4 text-xl">The 40 Percent Magic Number</h4>
                                <p className="text-base text-blue-800 leading-relaxed mb-4">
                                    Most conservative lenders in India want your total monthly debt obligations to be below 40 percent of your net income. This includes the new consolidation loan EMI. If your DTI is too high, it signals to the lender that you are "over-leveraged" and at high risk of defaulting.
                                </p>
                                <p className="text-base text-blue-800 leading-relaxed">
                                    For debt consolidation, this ratio is tricky because the loan is intended to replace existing debt. A savvy borrower will show the lender how the consolidation loan will actually lower their monthly outgoings, thereby improving their DTI ratio in the long term.
                                </p>
                            </div>
                        </section>

                        <section id="documentation" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Financial Documentation: Proving Your Worth</h2>
                            <p className="text-lg leading-relaxed mb-6 font-bold">
                                Your application is only as strong as the papers backing it.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                To verify your eligibility, you must provide a comprehensive set of documents. Any discrepancy here can lead to immediate rejection or a long delay in processing. Ensure that all your digital and physical copies are clear and updated.
                            </p>
                            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 my-8">
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="text-[#1F5EFF] mr-2">✔</span>
                                        <span><strong>KYC Documents:</strong> PAN Card, Aadhaar Card, and Passport or Voter ID for address proof.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#1F5EFF] mr-2">✔</span>
                                        <span><strong>Income Proof:</strong> Last 3 to 6 months salary slips for salaried employees. Last 2 to 3 years ITR for self-employed.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#1F5EFF] mr-2">✔</span>
                                        <span><strong>Bank Statements:</strong> Last 6 months bank statements showing your salary credits and current EMI outflows.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#1F5EFF] mr-2">✔</span>
                                        <span><strong>Debt Statements:</strong> Current outstanding statements for all credit cards and personal loans you wish to consolidate.</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section id="repayment-history" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Repayment History Analysis: A Mirror to Your Discipline</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Lenders look back at your last 24 to 36 months of repayment history. Even if your current income is high and your CIBIL score is decent, a pattern of delayed payments (DPD - Days Past Due) in the recent past can hurt your eligibility.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Consistency is the keyword here. A borrower who has never missed a payment is viewed as much more eligible than someone who has a higher income but a sporadic repayment record. If you have had past issues, it is often better to wait for 6 months of clean repayments before applying for a consolidation loan.
                            </p>
                        </section>

                        <section id="banks-vs-nbfcs" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Banks vs NBFCs: Where Do You Fit?</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Your eligibility might vary significantly depending on the type of lender you approach.
                            </p>
                            <div className="bg-[#1F5EFF]/5 p-8 rounded-3xl border border-[#1F5EFF]/20 mb-10">
                                <h4 className="text-2xl font-black text-[#2E2E2E] mb-6">Choosing the Right Path</h4>
                                <ol className="space-y-4 text-base font-medium">
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs flex-shrink-0 mt-1">1</span>
                                        <span><strong>Public and Private Banks:</strong> Strict eligibility, lowest interest rates, and high documentation requirements. Best for those with CIBIL 750+ and stable MNC jobs.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs flex-shrink-0 mt-1">2</span>
                                        <span><strong>NBFCs (Non-Banking Financial Companies):</strong> More flexible criteria, slightly higher interest rates, and faster processing. Good for those with CIBIL 650 to 700.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs flex-shrink-0 mt-1">3</span>
                                        <span><strong>Fintech Lending Apps:</strong> High-speed processing, flexible income proof, but often higher interest rates. Ideal for smaller consolidation amounts.</span>
                                    </li>
                                </ol>
                            </div>
                        </section>

                        <section id="unsecured-vs-secured" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">The Role of Collateral: Unsecured vs Secured Consolidation</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Most debt consolidation loans are unsecured, meaning you don't need to provide any collateral. However, if your debt amount is very high (above 25 to 30 lakhs) or your CIBIL score is low, you might need to look at secured options to meet eligibility.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                A Loan Against Property (LAP) or a Gold Loan can serve as powerful tools for debt consolidation. Because these are backed by assets, the eligibility criteria for income and credit score are often much more relaxed. Additionally, the interest rates for secured consolidation are usually much lower than unsecured personal loans.
                            </p>
                        </section>

                        <section id="psychology-debt" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Financial Psychology: Preparing for a Fresh Start</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Beyond the numbers, lenders occasionally assess your "financial mindset." During personal discussions or calls, your clarity on how you fell into debt and how you plan to stay out of it matters. Debt consolidation is a lifestyle change, not just a financial transaction.
                            </p>
                            <p className="text-lg leading-relaxed mb-6 font-bold">
                                The biggest risk for a lender is a borrower who consolidates their debt and then proceeds to max out their newly cleared credit cards again. Showing that you have cancelled your extra cards or created a strict budget can sometimes sway a credit officer's decision in your favor.
                            </p>
                        </section>

                        <section id="boost-eligibility" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Actionable Strategies to Boost Your Eligibility</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                If you find that you are on the borderline of qualifying, don't lose heart. There are several steps you can take to move the needle in your favor.
                            </p>
                            <div className="overflow-hidden rounded-2xl border border-[#DEDEDE] mb-8">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="p-4 border-b font-bold">Strategy</th>
                                            <th className="p-4 border-b font-bold">Impact on Eligibility</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-4 border-b">Add a Co-applicant</td>
                                            <td className="p-4 border-b">Adds their income and CIBIL score to your application, drastically reducing risk.</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b">Close Small Debts</td>
                                            <td className="p-4 border-b">Paying off small balances reduces the number of open accounts and improves DTI.</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b">Fix Credit Report Errors</td>
                                            <td className="p-4 border-b">Ensures that your score is not being dragged down by someone else's mistake.</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b">Choose a Longer Tenure</td>
                                            <td className="p-4 border-b">Lowers the EMI, making it more likely that you can afford the loan on your current salary.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section id="common-pitfalls" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Common Pitfalls to Avoid in the Process</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Rejection is not just a "no"; it is a footprint on your credit report. Every time you apply for a loan, a "hard inquiry" is made. Multiple hard inquiries in a short period can drop your score by several points, making you look desperate for credit.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Another common mistake is providing inaccurate information about your existing debts. Lenders will see everything on your credit report. If you try to hide a loan, it will lead to an immediate rejection based on lack of transparency.
                            </p>
                        </section>

                        <section id="helpful-resources" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Helpful Resources from Our Experts</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                If you are looking for more specific information related to debt management and credit health, explore these detailed guides from our internal knowledge base:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/which-banks-offer-debt-consolidation-loans-in-india" className="p-4 border rounded-xl hover:bg-gray-50 transition-colors font-bold text-[#1F5EFF]">Banks Offering Debt Consolidation</Link>
                                <Link href="/debt-settlement-vs-debt-consolidation" className="p-4 border rounded-xl hover:bg-gray-50 transition-colors font-bold text-[#1F5EFF]">Settlement vs Consolidation</Link>
                                <Link href="/loan-settlement-vs-repayment" className="p-4 border rounded-xl hover:bg-gray-50 transition-colors font-bold text-[#1F5EFF]">Settlement vs Repayment</Link>
                                <Link href="/credit-score-improvement" className="p-4 border rounded-xl hover:bg-gray-50 transition-colors font-bold text-[#1F5EFF]">Credit Score Improvement Tips</Link>
                                <Link href="/how-to-improve-cibil-score-after-loan-settlement" className="p-4 border rounded-xl hover:bg-gray-50 transition-colors font-bold text-[#1F5EFF]">Improve CIBIL After Settlement</Link>
                                <Link href="/how-to-get-800-credit-score-in-india" className="p-4 border rounded-xl hover:bg-gray-50 transition-colors font-bold text-[#1F5EFF]">Getting an 800 Credit Score</Link>
                            </div>
                        </section>

                        <section id="reviews" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Success Stories: Real Results</h2>
                            <div className="grid md:grid-cols-2 gap-10 not-prose">
                                {[
                                    {
                                        name: "Rajesh Kumar",
                                        loc: "Bangalore",
                                        outcome: "Consolidated 8.5 Lakhs",
                                        story: "I was drowning in credit card debt with 36 percent interest. SettleLoans helped me qualify for a consolidation loan at 12 percent. My monthly outflow dropped by 18,000 rupees!"
                                    },
                                    {
                                        name: "Anjali Sharma",
                                        loc: "Mumbai",
                                        outcome: "EMI Reduced by 40%",
                                        story: "Their advice on improving my DTI ratio before applying was life changing. I qualified for a bank loan that I was previously rejected for."
                                    },
                                    {
                                        name: "Amit Patel",
                                        loc: "Ahmedabad",
                                        outcome: "Credit Score Boost",
                                        story: "By consolidating my four small loans, my credit utilization dropped and my score went up by 45 points in just three months."
                                    },
                                    {
                                        name: "Sneha Iyer",
                                        loc: "Chennai",
                                        outcome: "Fast Approval",
                                        story: "The documentation checklist they provided was so thorough that my loan was approved by an NBFC within 48 hours without any queries."
                                    },
                                    {
                                        name: "Manoj Singh",
                                        loc: "Delhi",
                                        outcome: "Debt Free Journey",
                                        story: "Consolidating was the best decision. I now have one simple payment and a clear date for when I will be completely debt free."
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
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Frequently Asked Questions</h2>
                            <div className="space-y-6 not-prose">
                                {[
                                    { q: "What is the minimum CIBIL score for debt consolidation loan eligibility?", a: "Most banks in India prefer a CIBIL score of 750 or above for debt consolidation loans. However, some NBFCs may consider scores between 650 and 700 at higher interest rates." },
                                    { q: "Can I get a debt consolidation loan with a low salary?", a: "Eligibility depends on your debt-to-income ratio. If your salary is low but your existing debt is also manageable, you might qualify. Usually, a minimum net income of 25,000 to 30,000 rupees is required." },
                                    { q: "Are self-employed individuals eligible for debt consolidation?", a: "Yes, self-employed professionals and business owners are eligible. They need to show at least 2 to 3 years of business stability and consistent ITR filings." },
                                    { q: "Does debt consolidation improve my credit score?", a: "In the long run, yes. By merging multiple debts into one and paying on time, your credit utilization and repayment history improve, which boosts your score." },
                                    { q: "What documents are required for eligibility verification?", a: "You typically need PAN card, Aadhaar, last 6 months bank statements, 3 months salary slips, and details of all current outstanding loans." },
                                    { q: "Can I consolidate credit card debt and personal loans together?", a: "Absolutely. That is the primary purpose of a debt consolidation loan: to merge various high-interest unsecured debts into a single, low-interest EMI." },
                                    { q: "How does my age affect eligibility?", a: "Lenders prefer applicants between 21 and 60 years old. This range ensures that the borrower has an active income stream to service the loan over its tenure." },
                                    { q: "What is a Debt-to-Income (DTI) ratio?", a: "DTI is the percentage of your monthly income that goes toward paying debts. Lenders usually look for a DTI below 40 percent to ensure you can afford a new loan." },
                                    { q: "Can I include my home loan in debt consolidation?", a: "Usually, home loans are already at lower interest rates. Debt consolidation is better suited for high-interest unsecured loans like credit cards or personal loans." },
                                    { q: "Will a settled loan affect my eligibility?", a: "Yes, a 'settled' status on your credit report can be a red flag. Lenders prefer 'closed' accounts. However, we can help you navigate these challenges." }
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
                            <h2 className="text-3xl font-black mb-6">Start Your Journey to Financial Freedom</h2>
                            <p className="text-xl mb-8 opacity-90">
                                Don't let multiple EMIs control your life. Take the first step toward consolidation today.
                            </p>
                            <Link href="/contact" className="inline-block bg-white text-[#1F5EFF] font-black py-4 px-10 rounded-xl hover:scale-105 transition-all text-lg shadow-2xl">
                                Get a Free Eligibility Assessment
                            </Link>
                        </div>

                    </article>

                    {/* Right Column: Sticky Widgets */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-24 space-y-8">

                            {/* CTA Box */}
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                                <div className="bg-[#1F5EFF] p-4 text-center">
                                    <h3 className="text-lg font-black text-white px-2">Consolidation Support</h3>
                                </div>
                                <div className="p-8 text-center">
                                    <p className="mb-8 text-sm text-[#DEDEDE] opacity-90 leading-relaxed font-bold">
                                        Confused about the criteria? Our experts will help you qualify for the best consolidation deals.
                                    </p>
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-4 rounded-[12px] hover:scale-110 transition-all shadow-md group-hover:shadow-2xl">
                                        Check My Status
                                    </Link>
                                    <p className="mt-6 text-[10px] text-[#DEDEDE]/60 uppercase tracking-[0.3em] font-black">Certified Financial Experts</p>
                                </div>
                            </div>

                            {/* Related Guides */}
                            <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2 text-center">Top Resources</h3>
                                <ul className="space-y-4 text-sm font-extrabold px-2">
                                    <li>
                                        <Link href="/which-banks-offer-debt-consolidation-loans-in-india" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight">
                                            <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors flex-shrink-0"></span>
                                            Best Banks for Consolidation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/debt-settlement-vs-debt-consolidation" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight">
                                            <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors flex-shrink-0"></span>
                                            Consolidation vs Settlement
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/credit-score-improvement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight">
                                            <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors flex-shrink-0"></span>
                                            Improve Your Credit Score
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
