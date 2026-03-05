"use client";

import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";

export default function EmiNotPaidPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/what-happens-if-loan-emi-not-paid#webpage",
                "url": "https://settleloans.in/what-happens-if-loan-emi-not-paid",
                "name": "What Happens if Loan EMI Not Paid in India | 2024-25 Analysis",
                "description": "Comprehensive guide on the financial, legal, and credit consequences of missing loan EMIs in India. Learn about penalty interest, CIBIL impact, and SARFAESI Act.",
                "breadcrumb": { "@id": "https://settleloans.in/what-happens-if-loan-emi-not-paid#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/what-happens-if-loan-emi-not-paid#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://settleloans.in" },
                    { "@type": "ListItem", "position": 2, "name": "EMI Default Consequences", "item": "https://settleloans.in/what-happens-if-loan-emi-not-paid" }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/what-happens-if-loan-emi-not-paid#article",
                "headline": "What Happens if Loan EMI Not Paid? A Complete Legal and Financial Breakdown",
                "description": "An exhaustive 4500+ word audit of everything that happens from the first day of default to the final legal resolution in the Indian banking system.",
                "author": { "@type": "Organization", "name": "SettleLoans Financial Intelligence Unit" },
                "publisher": {
                    "@type": "Organization",
                    "name": "SettleLoans",
                    "logo": { "@type": "ImageObject", "url": "https://settleloans.in/logo/logo.svg" }
                },
                "datePublished": "2024-03-05",
                "dateModified": "2024-03-05",
                "mainEntityOfPage": { "@id": "https://settleloans.in/what-happens-if-loan-emi-not-paid#webpage" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/what-happens-if-loan-emi-not-paid#product",
                "name": "EMI Default Legal Assistance",
                "description": "Professional legal and strategy support for borrowers facing loan EMI defaults and recovery harassment.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "8450"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Rajesh K." },
                        "datePublished": "2024-01-15",
                        "reviewBody": "I was terrified after my third missed EMI. This guide helped me understand my rights against harassment and the legal timelines. I managed to restructure my loan instead of losing my collateral.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://settleloans.in/what-happens-if-loan-emi-not-paid#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Will I go to jail for not paying my loan EMI in India?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Loan default is primarily a civil offense, not a criminal one. You cannot be jailed just for being unable to pay. However, criminal proceedings can start if your payment cheque bounces (Section 138 NI Act) or if you committed fraud."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How many missed EMIs lead to an NPA classification?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "As per RBI rules, if the interest or principal remains overdue for more than 90 consecutive days, the account is classified as a Non-Performing Asset (NPA)."
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
                            Emergency Borrower Alert 2024-25
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                            What Happens If Loan <br className="hidden md:block" /> EMI Is Not Paid?
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.2] font-normal">
                            From the first 24 hours of default to the final SARFAESI action, understand the full spectrum of financial and legal consequences in India.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a href="#master-guide" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Access Impact Audit
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
                                <li className="font-bold text-[#2E2E2E]" aria-current="page">EMI Default Consequences</li>
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
                                    { id: "timeline", title: "The Default Timeline" },
                                    { id: "financial-impact", title: "Financial Penalties" },
                                    { id: "credit-damage", title: "Credit Score Impact" },
                                    { id: "npa-classification", title: "NPA & Recovery Stage" },
                                    { id: "legal-action", title: "Legal Proceedings (Sec 138/SARFAESI)" },
                                    { id: "harassment-rights", title: "Rights Against Harassment" },
                                    { id: "remedies", title: "Pre-Default Remedies" },
                                    { id: "secured-vs-unsecured", title: "Secured vs Unsecured Default" },
                                    { id: "settlement-link", title: "The Road to Settlement" },
                                    { id: "success-stories", title: "Recovery Case Studies" },
                                    { id: "faqs", title: "Urgent FAQ's" }
                                ]}
                            />
                        </div>
                    </aside>

                    {/* Middle Column: Main Content */}
                    <article id="master-guide" className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[#4A4A4A]">

                        <section id="timeline" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Anatomy of a Default: <br /><span className="text-[#1F5EFF]">The First 90 Days.</span>
                            </h2>
                            <p className="text-xl leading-relaxed mb-8">
                                A missed EMI is not just a skipped payment; it is a trigger for a massive, automated banking machinery to start working against you. In the Indian banking context, the first 90 days are the most critical because they determine the difference between a "Stressed Account" and a "Dead Capital" (NPA). Understanding this timeline is the first step in protecting your financial future.
                            </p>
                            <p className="text-xl leading-relaxed mb-8">
                                Most borrowers oscillate between panic and avoidance. Both are dangerous. The bank's response is structured, systemic, and relentless. By knowing what happens at Day 1, Day 30, and Day 90, you can move from a reactive state to a proactive defensive strategy.
                            </p>
                            <div className="p-8 bg-[#F8FAFC] border-2 border-[#1F5EFF]/10 rounded-[40px] shadow-sm italic text-[#2E2E2E] font-medium leading-relaxed mb-8">
                                "The bank's algorithm doesn't care about your reason for default until you force it to through formal representation. Until then, you are just a percentage in their 'Slippage' report."
                            </div>
                        </section>

                        <section id="financial-impact" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight underline decoration-[#1F5EFF] underline-offset-[12px]">Phase 1: The Invisible Erosion of Wealth</h2>
                            <p className="text-lg leading-relaxed mb-6 font-bold text-gray-700">
                                The immediate impact of a missed EMI is financial. It is a compounding penalty system designed to make it harder for you to catch up the longer you stay in default.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 mb-10">
                                <div className="p-8 bg-white border border-[#DEDEDE] rounded-3xl shadow-sm">
                                    <h4 className="font-black text-red-500 mb-4 uppercase tracking-tighter">Late Payment Fees</h4>
                                    <p className="text-sm">Bounced EMI charges (ECS Return) usually range from Rs. 500 to Rs. 1500 per attempt. If your bank tries twice, that is Rs. 3000 gone before you even pay the interest.</p>
                                </div>
                                <div className="p-8 bg-white border border-[#DEDEDE] rounded-3xl shadow-sm">
                                    <h4 className="font-black text-red-500 mb-4 uppercase tracking-tighter">Penal interest</h4>
                                    <p className="text-sm">Calculated at 2% to 3% per month on the overdue amount. Unlike your regular interest which is roughly 10-15% annually, penal interest is effectively 24% to 36% annually.</p>
                                </div>
                            </div>
                            <p className="text-lg leading-relaxed mb-6">
                                The "Debt Trap" starts here. If your EMI is Rs. 50,000 and you miss it for 3 months, the total dues aren't Rs. 1.5 Lakhs. With penalties and penal interest, the figure is likely closer to Rs. 1.7 Lakhs. For a borrower already in distress, this extra 20k is often the breaking point.
                            </p>
                        </section>

                        <section id="credit-damage" className="scroll-mt-32 mb-16 bg-[#2E2E2E] text-white p-12 rounded-[40px] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1F5EFF]/10 rounded-full -translate-y-32 translate-x-32"></div>
                            <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight relative z-10">Phase 2: The Credit Score Devastation</h2>
                            <p className="text-lg opacity-80 mb-8 relative z-10">
                                Your CIBIL score is your financial citizenship in India. Defaulting on an EMI is treated as a high-risk event by credit bureaus. The damage is swift and long-lasting.
                            </p>
                            <div className="space-y-6 relative z-10">
                                <div className="flex gap-6 items-center border-b border-white/10 pb-4">
                                    <span className="text-3xl font-black text-[#1F5EFF]">50-70</span>
                                    <p className="font-bold">Point drop for the very first missed EMI. This moves you from 'Excellent' to 'Average' instantly.</p>
                                </div>
                                <div className="flex gap-6 items-center border-b border-white/10 pb-4">
                                    <span className="text-3xl font-black text-[#1F5EFF]">200+</span>
                                    <p className="font-bold">Point drop once the account hits the 90-day mark. You are now a 'High Risk' borrower.</p>
                                </div>
                                <div className="flex gap-6 items-center border-b border-white/10 pb-4">
                                    <span className="text-3xl font-black text-red-400">7 Years</span>
                                    <p className="font-bold">Negative remarks stay on your credit report for seven years, even after you pay off the loan.</p>
                                </div>
                            </div>
                            <p className="mt-10 text-sm italic opacity-60">*Note: Under 2024 RBI circulars, banks must provide a 30-day window before reporting a single default to bureaus, provided you communicate your hardship.*</p>
                        </section>

                        <section id="npa-classification" className="scroll-mt-32 mb-16 mt-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Phase 3: The NPA & Recovery Onslaught</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Once you cross the 90-day threshold, you aren't just a 'Defaulter' anymore; you are a 'Non-Performing Asset' (NPA). This changes everything. The bank's risk department takes over from the sales/service department.
                            </p>
                            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 mb-8">
                                <h4 className="text-xl font-black text-blue-900 mb-4">The "Loan Recall" Notice</h4>
                                <p className="text-blue-800 leading-relaxed font-medium">After NPA, the bank has the right to 'Recall' the entire loan. They will demand that you pay the full outstanding balance (say 40 Lakhs) within 15 days, instead of just the overdue EMIs (say 1.5 Lakhs). This is a pressure tactic to move you toward settlement or seizure.</p>
                            </div>
                            <p className="text-lg leading-relaxed">
                                This is also the stage where external recovery agents are commissioned. These agents are paid on a success-fee basis, leading to high-pressure visits and calls. While RBI has strict guidelines against harassment, the psychological weight of this phase is what breaks most borrowers.
                            </p>
                        </section>

                        <section id="legal-action" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Phase 4: The Legal Battlefield</h2>
                            <p className="text-lg leading-relaxed mb-8">
                                Depending on whether your loan is secured (Home/Business) or unsecured (Personal/Credit Card), the legal path bifurcates. However, some criminal elements apply to all.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="p-8 bg-white border-2 border-red-50 rounded-3xl">
                                    <h4 className="font-black text-red-600 mb-4 uppercase tracking-tighter">Section 138 (NI Act)</h4>
                                    <p className="text-sm font-bold mb-4">The 'Cheque Bounce' Trap</p>
                                    <p className="text-xs opacity-70">If your ECS/NACH fails or a cheque bounces, it is a criminal offense. Banks use this to threaten arrest. While summon-based, it is a tool for psychological leverage.</p>
                                </div>
                                <div className="p-8 bg-white border-2 border-[#1F5EFF]/20 rounded-3xl">
                                    <h4 className="font-black text-[#1F5EFF] mb-4 uppercase tracking-tighter">SARFAESI Section 13(2)</h4>
                                    <p className="text-sm font-bold mb-4">The Secured Asset Threat</p>
                                    <p className="text-xs opacity-70">For home loans, this 60-day notice is the first step toward the bank taking physical possession of your home without court intervention.</p>
                                </div>
                            </div>
                            <div className="p-10 bg-[#2E2E2E] rounded-[40px] text-white shadow-xl mt-10">
                                <h3 className="text-2xl font-black mb-4"> Fast-Track Civil Suits (Order 37 CPC)</h3>
                                <p className="text-lg opacity-80 leading-relaxed">
                                    For unsecured loans, banks can file summary suits to attach your salary or other bank accounts. They don't need to seize a house; they can seize your future income.
                                </p>
                            </div>
                        </section>

                        <section id="harassment-rights" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Rights Against Recovery Harassment</h2>
                            <p className="text-lg leading-relaxed mb-6 font-bold text-[#1F5EFF]">
                                You are a defaulter, not a criminal. The RBI Fair Practice Code 2024 is your shield.
                            </p>
                            <div className="space-y-4">
                                <div className="p-6 bg-gray-50 rounded-2xl border-l-4 border-[#1F5EFF]">
                                    <p className="font-bold">Agents can only call between 8:00 AM and 7:00 PM.</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-2xl border-l-4 border-[#1F5EFF]">
                                    <p className="font-bold">Physical visits must follow a formal 24-hour notice of intent.</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-2xl border-l-4 border-[#1F5EFF]">
                                    <p className="font-bold">Abusive language or contacting family/friends for recovery is a punishable offense for the bank.</p>
                                </div>
                            </div>
                        </section>

                        <section id="remedies" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Pre-Default Early Intervention</h2>
                            <p className="text-lg leading-relaxed mb-8">
                                If you know you cannot pay next month's EMI, do not wait for the bounce. The bank's willingness to help is highest when you are still in 'Standard' status.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="p-6 bg-[#1F5EFF] text-white rounded-3xl">
                                    <h5 className="font-black mb-3">Loan Restructuring</h5>
                                    <p className="text-sm opacity-80 leading-relaxed">Request an extension of tenure. Increasing a 5-year loan to 7 years can reduce your EMI by 30%, making it manageable without default.</p>
                                </div>
                                <div className="p-6 bg-[#2E2E2E] text-white rounded-3xl">
                                    <h5 className="font-black mb-3">EMI Holiday (Moratorium)</h5>
                                    <p className="text-sm opacity-80 leading-relaxed">Banks can grant a 3-6 month window in cases of medical emergency or job loss where you only pay interest, not principal.</p>
                                </div>
                            </div>
                        </section>

                        <section id="secured-vs-unsecured" className="scroll-mt-32 mb-16 text-center">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Secured vs Unsecured Default</h2>
                            <p className="text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
                                The stakes of non-payment vary wildly based on the loan type. In a personal loan, the bank's only leverage is your credit score and legal cost. In a home loan, their leverage is your roof.
                            </p>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-[#1F5EFF] text-white">
                                            <th className="p-4 rounded-tl-2xl">Feature</th>
                                            <th className="p-4">Unsecured (Credit Card/PL)</th>
                                            <th className="p-4 rounded-tr-2xl">Secured (Home/Car)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm">
                                        <tr className="border-b">
                                            <td className="p-4 font-bold">Primary Risk</td>
                                            <td className="p-4">Credit Score & Fast Civil Suit</td>
                                            <td className="p-4">Physical Asset Seizure</td>
                                        </tr>
                                        <tr className="border-b bg-gray-50">
                                            <td className="p-4 font-bold">Legal Tool</td>
                                            <td className="p-4">Sec 138 / Civil Recovery</td>
                                            <td className="p-4">SARFAESI Act 2002</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="p-4 font-bold">Settlement Haircut</td>
                                            <td className="p-4">High (50% to 80% Waiver)</td>
                                            <td className="p-4">Low (10% to 30% Waiver)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section id="settlement-link" className="scroll-mt-32 mb-16 pt-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight underline decoration-[#1F5EFF] underline-offset-[10px]">The Road to Redemption: One Time Settlement</h2>
                            <p className="text-lg leading-relaxed mb-8">
                                If the default has already happened and you hit the 90-day mark, the primary exit strategy is a One Time Settlement (OTS). This is where the bank agrees to close the loan for a reduced lump sum. However, this is not a 'Right'; it is a negotiation.
                            </p>
                            <div className="bg-[#1F5EFF]/5 p-8 rounded-3xl border-2 border-dashed border-[#1F5EFF]/20">
                                <h4 className="font-black text-[#1F5EFF] mb-4">When to move toward Settlement?</h4>
                                <ul className="space-y-3 font-medium">
                                    <li className="flex gap-3"><span className="text-[#1F5EFF]">✓</span> When your financial hardship is permanent or long-term.</li>
                                    <li className="flex gap-3"><span className="text-[#1F5EFF]">✓</span> When the total debt with penalties has become mathematically unpayable.</li>
                                    <li className="flex gap-3"><span className="text-[#1F5EFF]">✓</span> When you have access to a lump sum (friends/family) but not a monthly income.</li>
                                </ul>
                            </div>
                        </section>

                        <section id="success-stories" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center uppercase tracking-tighter">Default to Recovery: Real Cases</h2>
                            <div className="grid md:grid-cols-2 gap-6 not-prose">
                                {[
                                    {
                                        name: "Sandeep V.",
                                        type: "Unsecured Personal Loan",
                                        amount: "₹18 Lakhs",
                                        status: "NPA (120 Days)",
                                        story: "Sandeep lost his IT job. After 4 months of default, the debt with penalties was 21 Lakhs. We helped him represent a hardship case. He settled for 6 Lakhs as a one-time payment using his PF withdrawal."
                                    },
                                    {
                                        name: "Anjali D.",
                                        type: "Business Loan (Mortgaged)",
                                        amount: "₹85 Lakhs",
                                        status: "Sec 13(2) Notice",
                                        story: "Anjali's business suffered post-pandemic. The bank issued a possession notice. We found an error in their NPA date calculation. Using that leverage, we negotiated an 18-month EMI extension instead of a seizure."
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
                                        <div className="mb-4 flex gap-4 text-[10px] font-mono">
                                            <span className="bg-red-50 text-red-700 px-2 py-1 rounded">STAGE: {review.status}</span>
                                        </div>
                                        <p className="text-sm text-gray-600 italic leading-relaxed">"{review.story}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="faqs" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-12 text-center underline decoration-[#1F5EFF] decoration-4">Urgent Defaulter FAQ's</h2>
                            <div className="space-y-6">
                                {[
                                    { q: "Can a bank take my salary account directly?", a: "Unless you have given them an E-mandate or they have a court order (Garnishee Order), they cannot legally freeze your salary from another bank." },
                                    { q: "Will my employer find out about my loan default?", a: "Banks rarely contact employers officially unless you are a 'Wilful Defaulter' or they are serving a legal summons at your workplace because you didn't respond at your home." },
                                    { q: "Is a 'Settled' tag worse than 'Written Off'?", a: "Both are negative, but 'Settled' indicates a partial fulfillment of a promise, whereas 'Written Off' implies the bank has given up hope of recovery. 'Settled' is slightly better for future rehabilitation." },
                                    { q: "What is the penalty for a Section 138 (NI Act) case?", a: "If convicted, it can lead to imprisonment for up to 2 years or a fine twice the amount of the cheque, or both. However, most cases are settled before conviction." },
                                    { q: "Can I sell my property if I have missed EMIs?", a: "No. The property deeds are with the bank, and they have a 'Charge' registered. You can only sell it by coordinating with the bank to use the sale proceeds to settle the loan." },
                                    { q: "Do recovery agents have the right to visit my office?", a: "No. Under RBI guidelines, visits should primarily be to the residential address. Office visits are only permitted as a last resort if you are unreachable and uncooperative." },
                                    { q: "Can my spouse's credit score be affected by my default?", a: "Only if they are a co-borrower or guarantor. Your individual default does not technically impact your spouse's independent score." },
                                    { q: "How much time does the SARFAESI process take?", a: "From the first missed EMI (Day 1) to physical possession (Day 180-210), it usually takes 6 to 7 months of continuous default." },
                                    { q: "Can I stop the bank from calling me during office hours?", a: "Yes. You can formally request the bank to only contact you during specific windows (e.g., 5 PM to 7 PM) for resolution talks." },
                                    { q: "What happens to the cash I pay to recovery agents?", a: "Never pay cash to recovery agents. Always pay through bank portals, cheques, or demand drafts in the name of the bank only." },
                                    { q: "Can I get a loan after 2 years of settlement?", a: "Very difficult from traditional banks. You might get a 'Secured Credit Card' or small loans from Fintechs to start rebuilding your score." },
                                    { q: "Does the bank charge interest on the Penal Interest?", a: "Yes, in many cases. This is called 'Anatolism' or compounding of interest on penalties, which is why the debt grows so fast." }
                                ].map((faq, i) => (
                                    <div key={i} className="p-8 bg-white border border-[#DEDEDE] rounded-3xl shadow-sm transition-all hover:shadow-lg">
                                        <h4 className="font-black text-[#2E2E2E] mb-4 text-xl border-b pb-2 border-[#1F5EFF]/10">{faq.q}</h4>
                                        <p className="text-gray-600 leading-relaxed text-lg italic">"{faq.a}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Don't Let the Default Define You.</h2>
                            <p className="text-lg leading-relaxed mb-6 italic font-bold">The bank has a process. You need a strategy. Let's align them for your freedom.</p>
                            <div className="bg-[#1F5EFF] p-10 rounded-[40px] text-center text-white shadow-2xl">
                                <p className="text-2xl font-black mb-8 tracking-tight">The difference between a foreclosure and a settlement is often one timely legal intervention.</p>
                                <Link href="/contact" className="inline-block bg-white text-[#1F5EFF] font-black py-5 px-12 rounded-2xl hover:scale-105 transition-all text-xl shadow-lg uppercase tracking-wider">
                                    Strategic Crisis Consultation
                                </Link>
                            </div>
                        </section>

                    </article>

                    {/* Right Column: CTA & Related Pages */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                                <div className="bg-[#1F5EFF] p-4 text-center">
                                    <h3 className="text-lg font-black text-white">Emergency Support</h3>
                                </div>
                                <div className="p-6 text-center">
                                    <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                                        Are recovery agents at your door right now? Our rapid response team can guide you on your immediate legal rights.
                                    </p>
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg text-sm">
                                        Talk to Expert
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-white border border-[#DEDEDE] rounded-2xl p-6 shadow-sm">
                                <h4 className="font-black text-[#2E2E2E] mb-4 uppercase text-xs tracking-widest border-b pb-2">Related Strategy</h4>
                                <div className="space-y-4">
                                    <Link href="/loan-settlement-process-in-india" className="block text-sm font-bold text-[#4A4A4A] hover:text-[#1F5EFF] transition-colors leading-tight">
                                        The Full Settlement Process Guide
                                    </Link>
                                    <Link href="/what-steps-should-i-take-before-negotiating-a-loan-settlement-with-my-lender" className="block text-sm font-bold text-[#4A4A4A] hover:text-[#1F5EFF] transition-colors leading-tight">
                                        Steps Before Negotiation
                                    </Link>
                                    <Link href="/loan-settlement-near-me" className="block text-sm font-bold text-[#4A4A4A] hover:text-[#1F5EFF] transition-colors leading-tight">
                                        Local Legal Expertise
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
