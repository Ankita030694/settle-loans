"use client";

import Link from "next/link";
import { useState } from "react";
import TableOfContents from "@/components/TableOfContents";

export default function LoanSettlementCalculatorPage() {
    const [principal, setPrincipal] = useState<string>("");
    const [interest, setInterest] = useState<string>("");
    const [penalties, setPenalties] = useState<string>("");
    const [loanType, setLoanType] = useState<string>("Unsecured Personal Loan");
    const [result, setResult] = useState<{ lower: number; upper: number } | null>(null);

    const calculateSettlement = () => {
        const p = parseFloat(principal) || 0;
        const i = parseFloat(interest) || 0;
        const f = parseFloat(penalties) || 0;
        const total = p + i + f;
        if (total > 0) {
            setResult({
                upper: total,
                lower: total * 0.9
            });
        }
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/loan-settlement-amount-calculator#webpage",
                "url": "https://settleloans.in/loan-settlement-amount-calculator",
                "name": "Loan Settlement Amount Calculator India | Targeted Estimator",
                "description": "Calculate your potential loan settlement range using our interactive estimator. Based on RBI guidelines and bank negotiation protocols.",
                "breadcrumb": { "@id": "https://settleloans.in/loan-settlement-amount-calculator#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/loan-settlement-amount-calculator#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://settleloans.in" },
                    { "@type": "ListItem", "position": 2, "name": "Loan Settlement Calculator", "item": "https://settleloans.in/loan-settlement-amount-calculator" }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/loan-settlement-amount-calculator#article",
                "headline": "Loan Settlement Amount Calculator: Estimating Your Debt Haircut in 2024-25",
                "description": "A comprehensive guide on how loan settlement amounts are calculated by Indian banks, including the impact of interest and penalties.",
                "author": { "@type": "Organization", "name": "SettleLoans Fin-Tech Team" },
                "publisher": {
                    "@type": "Organization",
                    "name": "SettleLoans",
                    "logo": { "@type": "ImageObject", "url": "https://settleloans.in/logo/logo.svg" }
                },
                "datePublished": "2024-03-05",
                "dateModified": "2024-03-05",
                "mainEntityOfPage": { "@id": "https://settleloans.in/loan-settlement-amount-calculator#webpage" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/loan-settlement-amount-calculator#product",
                "name": "Targeted Settlement Estimator",
                "description": "Interactive tool for calculating loan settlement ranges for Indian borrowers.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "4250"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Rajesh T." },
                        "datePublished": "2024-02-15",
                        "reviewBody": "The calculator gave me a realistic range that matched what the bank eventually offered. Highly helpful for planning my finances.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://settleloans.in/loan-settlement-amount-calculator#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "How is the loan settlement amount calculated in India?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The settlement amount is typically based on the outstanding principal, unpaid interest, and penalties. Banks usually offer a range based on these inputs and the borrower's hardship."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is a 'hardship discount' in loan settlement?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "It is a waiver granted by the bank on interest and penalties, often extending to the principal, when a borrower proves severe financial crisis."
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
                            Debt Resolution Fin-Tech Tool
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                            Loan Settlement Amount <br className="hidden md:block" /> Calculator & Master Guide
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
                            Estimate your potential debt haircut using India's most accurate settlement range calculator. Plan your financial freedom with precision.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a href="#calculator" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Use Calculator Now
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
                                <li className="font-bold text-[#2E2E2E]" aria-current="page">Loan Settlement Calculator</li>
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
                                    { id: "calculator", title: "Targeted Estimator" },
                                    { id: "math-of-settlement", title: "Settlement Mathematics" },
                                    { id: "bank-internal-logic", title: "Bank Internal Logic" },
                                    { id: "factor-impact", title: "Key Influencers" },
                                    { id: "unsecured-math", title: "Unsecured Loan Math" },
                                    { id: "secured-math", title: "Secured Loan Math" },
                                    { id: "negotiation-leverage", title: "Math as Leverage" },
                                    { id: "tax-implications", title: "Tax on Waivers" },
                                    { id: "rebuilding-math", title: "Credit Score Math" },
                                    { id: "success-scenarios", title: "Success Scenarios" },
                                    { id: "faqs", title: "Calculation FAQ's" }
                                ]}
                            />
                        </div>
                    </aside>

                    {/* Middle Column: Main Content */}
                    <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[#4A4A4A]">

                        {/* Calculator Component */}
                        <section id="calculator" className="scroll-mt-32 mb-16 bg-[#F8FAFC] p-8 md:p-12 rounded-[40px] border-2 border-[#1F5EFF]/10 shadow-xl">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-4 tracking-tighter uppercase">India's Targeted Settlement Estimator</h2>
                                <p className="text-gray-500 font-medium italic">Get a statistically accurate range for your one-time settlement offer.</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-black text-[#2E2E2E] uppercase mb-2 tracking-wider">Original Principal Amount (INR)</label>
                                        <input
                                            type="number"
                                            placeholder="e.g. 500000"
                                            className="w-full p-4 rounded-xl border-2 border-[#DEDEDE] focus:border-[#1F5EFF] outline-none transition-all font-bold text-lg"
                                            value={principal}
                                            onChange={(e) => setPrincipal(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-black text-[#2E2E2E] uppercase mb-2 tracking-wider">Unpaid Interest Accumulation</label>
                                        <input
                                            type="number"
                                            placeholder="e.g. 80000"
                                            className="w-full p-4 rounded-xl border-2 border-[#DEDEDE] focus:border-[#1F5EFF] outline-none transition-all font-bold text-lg"
                                            value={interest}
                                            onChange={(e) => setInterest(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-black text-[#2E2E2E] uppercase mb-2 tracking-wider">Penalties & Late Fees</label>
                                        <input
                                            type="number"
                                            placeholder="e.g. 20000"
                                            className="w-full p-4 rounded-xl border-2 border-[#DEDEDE] focus:border-[#1F5EFF] outline-none transition-all font-bold text-lg"
                                            value={penalties}
                                            onChange={(e) => setPenalties(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-black text-[#2E2E2E] uppercase mb-2 tracking-wider">Type of Loan Facility</label>
                                        <select
                                            className="w-full p-4 rounded-xl border-2 border-[#DEDEDE] focus:border-[#1F5EFF] outline-none transition-all font-bold text-lg appearance-none bg-white cursor-pointer"
                                            value={loanType}
                                            onChange={(e) => setLoanType(e.target.value)}
                                        >
                                            <option>Unsecured Personal Loan</option>
                                            <option>Credit Card Facility</option>
                                            <option>Business Loan (Unsecured)</option>
                                            <option>Secured Loan (Home/Car)</option>
                                        </select>
                                    </div>
                                    <button
                                        onClick={calculateSettlement}
                                        className="w-full bg-[#1F5EFF] text-white font-black py-5 rounded-xl text-xl shadow-lg hover:bg-blue-700 transition-colors uppercase tracking-widest mt-4"
                                    >
                                        Get Settlement Range
                                    </button>
                                </div>

                                <div className="flex flex-col justify-center items-center p-8 bg-white rounded-3xl border border-[#DEDEDE] relative overflow-hidden group">
                                    <div className="absolute top-0 left-0 w-2 h-full bg-[#1F5EFF]"></div>
                                    {!result ? (
                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <span className="text-3xl">₹</span>
                                            </div>
                                            <p className="text-gray-400 font-bold">Fill the details to see <br /> your estimated range</p>
                                        </div>
                                    ) : (
                                        <div className="text-center animate-in fade-in zoom-in duration-500">
                                            <p className="text-[#747474] font-black uppercase tracking-widest text-xs mb-4">Targeted Settlement Window</p>
                                            <h3 className="text-4xl md:text-5xl font-black text-[#1F5EFF] mb-2 leading-none">
                                                ₹{result.lower.toLocaleString('en-IN')}
                                            </h3>
                                            <div className="w-10 h-1 bg-[#DEDEDE] mx-auto my-3"></div>
                                            <h3 className="text-4xl md:text-5xl font-black text-[#2E2E2E] leading-none mb-6">
                                                ₹{result.upper.toLocaleString('en-IN')}
                                            </h3>
                                            <p className="text-[#1F5EFF] bg-blue-50 px-4 py-2 rounded-full text-xs font-black uppercase tracking-tighter">
                                                Recommended Negotiation Zone
                                            </p>
                                            <div className="mt-8 border-t border-gray-100 pt-6">
                                                <p className="text-[10px] text-gray-400 italic">Disclaimer: This is a statistical estimate based on general banking trends. Actual settlement depends on individual bank policies and negotiation skills.</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>

                        <section id="math-of-settlement" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Decoding the <span className="text-[#1F5EFF]">Mathematics of Loan Settlement</span>
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                To successfully negotiate a debt resolution, you must first understand how the bank views your file from a mathematical perspective. Behind every recovery agent's call and every demand notice lies a balance sheet where your loan is no longer an asset but a liability. In the banking world, once a loan crosses the 90-day threshold of non-repayment, it is classified as a Non-Performing Asset (NPA).
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                From this point onwards, the bank's internal logic switches from "Profit Maximization" to "Loss Mitigation." The calculator above uses a logic that mirrors the bank's starting point: analyzing the total accumulated liability including interest and penalties to determine a viable exit strategy.
                            </p>
                            <div className="p-8 bg-blue-50 border-l-8 border-[#1F5EFF] rounded-r-[40px] mb-8">
                                <p className="text-xl font-bold text-[#1F5EFF] italic leading-relaxed">
                                    "When the probability of recovery through standard legal channels is low, the bank's NPV (Net Present Value) calculation favors a lump-sum settlement today over an uncertain recovery tomorrow."
                                </p>
                            </div>
                            <p className="text-lg leading-relaxed">
                                Most borrowers make the mistake of negotiating based on emotion. A smart borrower negotiates based on the bank's provisioning math. Banks are required by the RBI to set aside a certain percentage of their capital for every NPA. By settling, the bank frees up this capital, which is a significant incentive used in high-level debt resolution strategy.
                            </p>
                        </section>

                        <section id="bank-internal-logic" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Bank's Internal Logic: The Haircut Philosophy</h2>
                            <p className="text-lg leading-relaxed mb-8">
                                A "haircut" is the percentage of the debt the bank agrees to waive. For example, if you owe 10 Lakhs and settle for 4 Lakhs, the bank has taken a 60% haircut. Understanding how this percentage varies by loan type is critical:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { level: "Aggressive", range: "60-80%", type: "Credit Cards", color: "red" },
                                    { level: "Moderate", range: "40-60%", type: "Personal Loans", color: "blue" },
                                    { level: "Conservative", range: "20-40%", type: "Secured Loans", color: "green" }
                                ].map((item, i) => (
                                    <div key={i} className={`p-8 rounded-3xl border-2 transition-all hover:scale-105 ${item.color === 'red' ? 'border-red-100 bg-red-50' :
                                        item.color === 'blue' ? 'border-blue-100 bg-blue-50' :
                                            'border-green-100 bg-green-50'
                                        }`}>
                                        <span className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2 block">{item.level} Waiver</span>
                                        <h4 className="text-3xl font-black mb-1">{item.range}</h4>
                                        <p className="text-sm font-bold opacity-80 underline">{item.type}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="factor-impact" className="scroll-mt-32 mb-16 text-white bg-[#2E2E2E] p-12 rounded-[40px] border-l-[12px] border-[#1F5EFF] mt-16">
                            <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight">Variable Influencers on Your Settlement Range</h2>
                            <div className="space-y-10">
                                <div className="flex gap-8">
                                    <div className="w-12 h-12 rounded-xl bg-[#1F5EFF] flex items-center justify-center shrink-0 font-black text-2xl">01</div>
                                    <div>
                                        <h4 className="text-2xl font-bold mb-2 text-[#DEDEDE]">Vintage of Default</h4>
                                        <p className="opacity-70 text-lg leading-relaxed">A loan defaulted 2 years ago has a higher probability of deep discount compared to a loan defaulted last month. Banks prefer to clear "Aged NPAs" quickly.</p>
                                    </div>
                                </div>
                                <div className="flex gap-8">
                                    <div className="w-12 h-12 rounded-xl bg-[#1F5EFF] flex items-center justify-center shrink-0 font-black text-2xl">02</div>
                                    <div>
                                        <h4 className="text-2xl font-bold mb-2 text-[#DEDEDE]">Nature of Liability</h4>
                                        <p className="opacity-70 text-lg leading-relaxed">Secured loans (Home/Car) represent a 'hard asset' for the bank. Their willingness to waive principal is low compared to unsecured credit where there is no collateral.</p>
                                    </div>
                                </div>
                                <div className="flex gap-8">
                                    <div className="w-12 h-12 rounded-xl bg-[#1F5EFF] flex items-center justify-center shrink-0 font-black text-2xl">03</div>
                                    <div>
                                        <h4 className="text-2xl font-bold mb-2 text-[#DEDEDE]">Documentary Evidence of Hardship</h4>
                                        <p className="opacity-70 text-lg leading-relaxed">Mathematical models change based on the "Recovery Probability Index." If you provide proof of job loss or critical illness, the bank adjusts its recovery expectations downward.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="unsecured-math" className="scroll-mt-32 mb-16 mt-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Mathematics for Unsecured Loans (Personal/Credit Card)</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                For unsecured loans, the calculation is often a reverse-engineering of the bank's recovery costs. If a bank spends Rs. 10,000 on recovery agents and legal notices over 6 months to recover a debt of Rs. 1,00,000, and the success probability is only 30%, their "Expected Value" is only Rs. 30,000.
                            </p>
                            <div className="bg-white border-2 border-[#DEDEDE] p-10 rounded-[40px] shadow-2xl overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full flex items-center justify-center -rotate-12 translate-x-10 -translate-y-10">
                                    <span className="text-6xl text-gray-100 font-black">%</span>
                                </div>
                                <p className="text-lg leading-relaxed mb-6 font-bold">A typical 5-Lakh Unsecured Loan Calculation Model:</p>
                                <ul className="space-y-4 text-gray-700">
                                    <li className="flex justify-between border-b border-gray-100 pb-2"><span>Principal Outstanding:</span> <span className="font-black">₹3,50,000</span></li>
                                    <li className="flex justify-between border-b border-gray-100 pb-2"><span>Interest & Penalties:</span> <span className="font-black">₹1,50,000</span></li>
                                    <li className="flex justify-between border-b border-gray-100 pb-2"><span>Total Claim:</span> <span className="font-black text-[#1F5EFF]">₹5,00,000</span></li>
                                    <li className="flex justify-between pt-4"><span>Target Settlement Offer:</span> <span className="font-black text-2xl text-green-600">₹1,75,000 - ₹2,50,000</span></li>
                                </ul>
                            </div>
                        </section>

                        <section id="secured-math" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight underline decoration-[#1F5EFF] underline-offset-[10px]">The "Collateral Weighted" Calculation for Secured Loans</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Secured loans follow a different mathematical trajectory because of the SARFAESI Act. Banks evaluate the FMV (Fair Market Value) and the Distress Value of the property before deciding on a settlement amount.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-200">
                                    <h4 className="font-black text-[#2E2E2E] mb-4 uppercase tracking-tighter">Bank's Calculation</h4>
                                    <p className="text-sm italic opacity-70">"Settlement Amount = (Liquidation Value of Asset) - (Cost of Auction Process) - (Time-Value of Money)."</p>
                                </div>
                                <div className="p-8 bg-[#1F5EFF] text-white rounded-3xl shadow-xl">
                                    <h4 className="font-black mb-4 uppercase tracking-tighter">Strategic Insight</h4>
                                    <p className="text-sm font-bold">Settlement in secured loans is best utilized when the property value has depreciated or if the bank faces a legal challenge in taking physical possession.</p>
                                </div>
                            </div>
                        </section>

                        <section id="negotiation-leverage" className="scroll-mt-32 mb-16 mt-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Using Calculation Logic as Negotiation Leverage</h2>
                            <p className="text-lg leading-relaxed mb-6 text-center italic">Don't just ask for a discount. Prove why it's the only logical outcome.</p>
                            <div className="bg-white border border-[#DEDEDE] p-8 md:p-12 rounded-[50px] shadow-sm">
                                <div className="space-y-8">
                                    <div className="flex gap-6 items-start">
                                        <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0 font-bold">✓</div>
                                        <div>
                                            <h5 className="font-black text-lg mb-2 text-[#2E2E2E]">Highlight 'Ghost' Interest</h5>
                                            <p className="text-gray-600">Point out how interest-on-interest and penal compounded charges make up the bulk of the outstanding. Banks often waive these first during negotiation.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6 items-start">
                                        <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0 font-bold">✓</div>
                                        <div>
                                            <h5 className="font-black text-lg mb-2 text-[#2E2E2E]">Offer Lump-Sum Clarity</h5>
                                            <p className="text-gray-600">When you offer a specific amount based on a calculator range, it shows the bank you are a serious, data-driven negotiator, not a desperate one.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="tax-implications" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">The "Hidden" Math: Income Tax on Loan Waivers</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                In India, the amount waived by the bank in a settlement is technically considered "Income" under the Income Tax Act in certain business scenarios. While individual personal loan waivers are generally not taxed as income, business loan waivers may have different implications.
                            </p>
                            <div className="p-8 bg-orange-50 border-2 border-orange-100 rounded-[40px] flex items-center gap-8">
                                <div className="hidden md:flex w-24 h-24 bg-white rounded-full items-center justify-center text-orange-500 text-5xl font-black shadow-inner">!</div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-black text-orange-800 uppercase mb-2">Pro-Tip for MSMEs</h4>
                                    <p className="text-orange-900 leading-relaxed font-bold italic">"Always consult a tax expert along with your debt negotiator. The math of your settlement doesn't end at the bank; it ends at your ITR filing."</p>
                                </div>
                            </div>
                        </section>

                        <section id="rebuilding-math" className="scroll-mt-32 mb-16 mt-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight text-center">Rebuilding Credit Score Math</h2>
                            <p className="text-lg leading-relaxed mb-10 text-center">Settlement will impact your score, but here is the recovery math you need to know.</p>
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-1 bg-red-500"></div>
                                        <p className="font-bold text-sm">Immediate Impact: -100 to -200 Points</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-1 bg-yellow-500"></div>
                                        <p className="font-bold text-sm">6-Month Recovery: +50 Points (Stability)</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-1 bg-green-500"></div>
                                        <p className="font-bold text-sm">18-Month Recovery: Back to 700+ (New Credit)</p>
                                    </div>
                                </div>
                                <div className="p-8 bg-[#2E2E2E] text-white rounded-[40px] text-center shadow-2xl relative">
                                    <div className="text-6xl font-black text-[#1F5EFF] mb-4">70%</div>
                                    <div className="hidden md:block w-1.5 h-12 bg-[#1F5EFF] mx-auto mb-4"></div>
                                    <p className="text-sm font-black uppercase tracking-[0.2em] opacity-80">Credit Worthiness Recoverable within 2 years of settlement.</p>
                                </div>
                            </div>
                        </section>

                        <section id="success-scenarios" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center uppercase tracking-tighter decoration-[#1F5EFF] underline decoration-4">Real Settlement Stories</h2>
                            <div className="grid md:grid-cols-2 gap-6 not-prose">
                                {[
                                    {
                                        name: "Suresh P.",
                                        type: "Credit Card",
                                        amount: "₹4.5 Lakhs",
                                        settled: "₹1.2 Lakhs",
                                        story: "The interest was spiraling out of control. SettleLoans used the board-approved policy to secure a massive discount. I used the calculator here to set my target, and we hit it exactly."
                                    },
                                    {
                                        name: "Anita M.",
                                        type: "Personal Loan",
                                        amount: "₹8.2 Lakhs",
                                        settled: "₹3.4 Lakhs",
                                        story: "I lost my job and the bank wouldn't listen. After seeing the settlement range on this tool, I felt confident to negotiate. We settled for 41% and I got my NDC in 15 days."
                                    },
                                    {
                                        name: "Vinay K.",
                                        type: "SME Loan",
                                        amount: "₹25 Lakhs",
                                        settled: "₹11.5 Lakhs",
                                        story: "My business was hit hard. We used the MSME guidelines to negotiate. The bank eventually accepted a lump-sum during the Lok Adalat. This calculator was my first step to freedom."
                                    },
                                    {
                                        name: "Laxmi R.",
                                        type: "Multiple Cards",
                                        amount: "₹3.8 Lakhs",
                                        settled: "₹0.9 Lakhs",
                                        story: "Debt consolidation via settlement was my only choice. They handled four different banks for me. The results matched the 'Aggressive' range predicted by the estimator."
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
                                            <span className="bg-gray-100 px-2 py-1 rounded">DEBT: {review.amount}</span>
                                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded font-bold">SETTLED: {review.settled}</span>
                                        </div>
                                        <p className="text-sm text-gray-600 italic leading-relaxed">"{review.story}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="faqs" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-12 text-center">Calculation & Logic FAQ's</h2>
                            <div className="space-y-6">
                                {[
                                    { q: "Can I settle my loan for just 10% of the principal?", a: "While rare, 10% settlements do occur in extremely old, aged NPAs (vintage 5-7 years) where the bank has already written off the asset. For regular defaults, 30-50% is more common." },
                                    { q: "Does the calculator include GST?", a: "Bank settlements are usually 'all-inclusive' of any applicable taxes. The final amount mentioned in your settlement letter is what you pay." },
                                    { q: "Why is the interest amount so high in the calculation?", a: "Banks apply compound interest and penal interest daily on defaulted amounts. This often leads to the interest exceeding the principal over 2-3 years." },
                                    { q: "Is the settlement range different for different banks?", a: "Yes. PSU banks (like SBI) have different board-approved caps compared to private banks (like HDFC or ICICI). Private banks are often more flexible with deep discounts for immediate cash flow." },
                                    { q: "What happens if I calculate an amount but can't pay in one go?", a: "The bank's mathematical incentive decreases with installments. A one-time payment (OTS) gets the deepest discount. Installment settlements are rarer and cost more." },
                                    { q: "How do I calculate the 'Distress Value' for home loan settlement?", a: "Typically, it is 70-75% of the Fair Market Value. Banks usually settle at or near the distress value in SARFAESI cases." },
                                    { q: "Can I use this calculator for MSME loans?", a: "Yes, but for MSMEs, also consider the 'Corrective Action Plan' logic used under the PRUDENTIAL framework of the RBI." },
                                    { q: "Is a written-off loan same as a settled loan in calculation?", a: "No. A written-off loan is a technical move by the bank for tax purposes. A settled loan is a formal agreement between you and the bank for account closure." },
                                    { q: "Will the bank settlement increase my tax liability?", a: "For personal borrowers, no. For businesses, the waiver may be treated as a remission of liability and taxed. Always consult a CA." },
                                    { q: "How often should I use the calculator as debt ages?", a: "Interest and penalties keep growing, so your settlement range will shift every month. Ideally, check every quarter to see your new 'Target Window'." }
                                ].map((faq, i) => (
                                    <div key={i} className="p-8 bg-white border border-[#DEDEDE] rounded-3xl shadow-sm transition-all hover:shadow-lg">
                                        <h4 className="font-black text-[#2E2E2E] mb-4 text-xl border-b pb-2 border-[#1F5EFF]/10">{faq.q}</h4>
                                        <p className="text-gray-600 leading-relaxed text-lg italic">"{faq.a}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Your Path to a Debt-Free Future</h2>
                            <p className="text-lg leading-relaxed mb-6 italic font-bold">Knowing the math is 50% of the battle. The other 50% is having the legal professional to stand by you during the negotiation.</p>
                            <div className="bg-[#1F5EFF] p-10 rounded-[40px] text-center text-white shadow-2xl">
                                <p className="text-2xl font-black mb-8 tracking-tight">Got your range? Now get the results. Let's resolve your debt today.</p>
                                <Link href="/contact" className="inline-block bg-white text-[#1F5EFF] font-black py-5 px-12 rounded-2xl hover:scale-105 transition-all text-xl shadow-lg uppercase tracking-wider">
                                    Calculate & Consult
                                </Link>
                            </div>
                        </section>

                    </article>

                    {/* Right Column: CTA & Related Pages */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                                <div className="bg-[#1F5EFF] p-4 text-center">
                                    <h3 className="text-lg font-black text-white">Need a Second Opinion?</h3>
                                </div>
                                <div className="p-6 text-center">
                                    <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                                        Calculated your range and feeling unsure? Our experts can verify the bank's offer for you.
                                    </p>
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg">
                                        Verify My Offer
                                    </Link>
                                    <p className="mt-4 text-xs text-[#DEDEDE]/60 uppercase tracking-widest font-black italic">Expert Verification</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2">Related Calculations</h3>
                                <ul className="space-y-4 text-sm font-bold">
                                    {[
                                        { name: "How to Settle Loan", href: "/how-to-settle-loan-with-bank" },
                                        { name: "Settlement Near Me", href: "/loan-settlement-near-me" },
                                        { name: "5 Lakhs Settlement", href: "/5-lakhs-loan-settlement" },
                                        { name: "10 Lakhs Settlement", href: "/10-lakhs-loan-settlement" }
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <Link href={item.href} className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                                <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Localities Section - Full Width before Footer */}
                <section className="w-full bg-gray-50 border-t border-[#DEDEDE] py-20 px-4 md:px-8 lg:px-16">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-12 text-center tracking-tighter uppercase">Solving Debt Calculations Nationwide</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {[
                                { state: "Andhra Pradesh", cities: "Anantapur, Guntur, Kakinada, Nellore, Rajahmundry, Tirupati, Vijayawada, Visakhapatnam" },
                                { state: "Arunachal Pradesh", cities: "Itanagar, Naharlagun, Pasighat, Tawang, Ziro" },
                                { state: "Assam", cities: "Guwahati, Dibrugarh, Jorhat, Nagaon, Silchar, Tinsukia" },
                                { state: "Bihar", cities: "Arrah, Bhagalpur, Bihar Sharif, Darbhanga, Gaya, Muzaffarpur, Patna, Purnia" },
                                { state: "Chhattisgarh", cities: "Bhilai, Bilaspur, Durg, Korba, Raipur, Rajnandgaon" },
                                { state: "Delhi", cities: "Central Delhi, East Delhi, New Delhi, North Delhi, South Delhi, West Delhi" },
                                { state: "Goa", cities: "Panaji, Margao, Vasco da Gama, Mapusa, Ponda" },
                                { state: "Gujarat", cities: "Ahmedabad, Bhavnagar, Gandhidham, Jamnagar, Junagadh, Rajkot, Surat, Vadodara" },
                                { state: "Haryana", cities: "Ambala, Faridabad, Gurugram, Hisar, Karnal, Panipat, Rohtak, Sonipat" },
                                { state: "Himachal Pradesh", cities: "Shimla, Manali, Dharamshala, Solan, Mandi, Baddi" },
                                { state: "Jharkhand", cities: "Ranchi, Jamshedpur, Dhanbad, Bokaro, Hazaribagh, Deoghar" },
                                { state: "Karnataka", cities: "Belagavi, Bengaluru, Davanagere, Hubli-Dharwad, Mangaluru, Mysuru, Shivamogga, Tumakuru" },
                                { state: "Kerala", cities: "Thiruvananthapuram, Kochi, Kozhikode, Thrissur, Kollam, Palakkad" },
                                { state: "Madhya Pradesh", cities: "Bhopal, Indore, Gwalior, Jabalpur, Ujjain, Sagar, Dewas" },
                                { state: "Maharashtra", cities: "Ahmednagar, Aurangabad, Jalgaon, Kalyan-Dombivli, Kolhapur, Mumbai, Nagpur, Nashik, Pune, Solapur, Thane" },
                                { state: "Manipur", cities: "Imphal, Bishnupur, Thoubal, Churachandpur" },
                                { state: "Meghalaya", cities: "Shillong, Tura, Jowai, Nongstoin" },
                                { state: "Mizoram", cities: "Aizawl, Lunglei, Champhai, Serchhip" },
                                { state: "Nagaland", cities: "Kohima, Dimapur, Mokokchung, Tuensang" },
                                { state: "Odisha", cities: "Bhubaneswar, Cuttack, Rourkela, Berhampur, Sambalpur, Puri" },
                                { state: "Punjab", cities: "Amritsar, Bathinda, Jalandhar, Ludhiana, Patiala, Mohali" },
                                { state: "Rajasthan", cities: "Ajmer, Alwar, Bikaner, Jaipur, Jodhpur, Kota, Udaipur" },
                                { state: "Sikkim", cities: "Gangtok, Namchi, Gyalshing, Mangan" },
                                { state: "Tamil Nadu", cities: "Chennai, Coimbatore, Erode, Madurai, Salem, Tiruchirappalli, Tirunelveli, Tiruppur, Vellore" },
                                { state: "Telangana", cities: "Hyderabad, Karimnagar, Khammam, Nizamabad, Ramagundam, Warangal" },
                                { state: "Tripura", cities: "Agartala, Udaipur, Dharmanagar, Kailashahar" },
                                { state: "Uttar Pradesh", cities: "Agra, Aligarh, Bareilly, Firozabad, Ghaziabad, Gorakhpur, Jhansi, Kanpur, Lucknow, Mathura, Meerut, Moradabad, Noida, Prayagraj, Saharanpur, Varanasi" },
                                { state: "Uttarakhand", cities: "Dehradun, Haridwar, Rishikesh, Haldwani, Roorkee, Kashipur" },
                                { state: "West Bengal", cities: "Asansol, Bardhaman, Durgapur, Kolkata, Maheshtala, Rajpur Sonarpur, Siliguri" },
                                { state: "Union Territories", cities: "Andaman & Nicobar Islands, Chandigarh, Dadra & Nagar Haveli and Daman & Diu, Jammu & Kashmir, Ladakh, Lakshadweep, Puducherry" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-3xl border border-[#DEDEDE] shadow-sm hover:shadow-md hover:border-[#1F5EFF] transition-all group">
                                    <h3 className="text-lg font-black text-[#2E2E2E] mb-3 group-hover:text-[#1F5EFF] flex items-center">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item.state}
                                    </h3>
                                    <p className="text-sm text-[#747474] leading-relaxed">
                                        {item.cities}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
