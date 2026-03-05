"use client";

import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";

export default function GoldLoanSettlementProcessPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/gold-loan-settlement-process#webpage",
                "url": "https://settleloans.in/gold-loan-settlement-process",
                "name": "Gold Loan Settlement & Auction Process India 2024-25 | RBI Guidelines",
                "description": "The complete guide to gold loan settlement, auction rules, and default procedures in India. Learn about LTV margin calls, 90% reserve price rules, and reclaiming surplus funds.",
                "breadcrumb": { "@id": "https://settleloans.in/gold-loan-settlement-process#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/gold-loan-settlement-process#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://settleloans.in" },
                    { "@type": "ListItem", "position": 2, "name": "Gold Loan Settlement", "item": "https://settleloans.in/gold-loan-settlement-process" }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/gold-loan-settlement-process#article",
                "headline": "Gold Loan Default: The 2024 Master Guide to Settlement and Auctions",
                "description": "An exhaustive walkthrough of how gold loans are settled, auctioned, and closed in India, including the latest 2024-25 RBI borrower protection norms.",
                "author": { "@type": "Organization", "name": "SettleLoans Gold Desk" },
                "publisher": {
                    "@type": "Organization",
                    "name": "SettleLoans",
                    "logo": { "@type": "ImageObject", "url": "https://settleloans.in/logo/logo.svg" }
                },
                "datePublished": "2024-03-05",
                "dateModified": "2024-03-05",
                "mainEntityOfPage": { "@id": "https://settleloans.in/gold-loan-settlement-process#webpage" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/gold-loan-settlement-process#product",
                "name": "Gold Auction Intervention Service",
                "description": "Strategic negotiation to stop gold auctions and secure a settlement waiver for NPA gold loan accounts.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "11200"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Rajesh V." },
                        "datePublished": "2024-02-10",
                        "reviewBody": "My gold was scheduled for auction. Using the 'Surplus Fund' and 'Reserve Price' rules mentioned here, I challenged the floor price and settled the loan for 60% of the interest.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://settleloans.in/gold-loan-settlement-process#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "How is the reserve price calculated for a gold auction?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "RBI rules state that the reserve price must be at least 85% of the average closing price of 22-carat gold over the last 30 working days. Starting April 2026, this floor will rise to 90%."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I stop a gold auction after the notice is published?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, as long as the physical auction has not commenced, you can settle the full dues (including auction costs) and reclaim your gold ornaments."
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
                            Precious Metal Recovery Protocol 2024
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                            Gold Loan Settlement <br className="hidden md:block" /> & Auction Process
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.2] font-normal">
                            Don't lose your family heritage to unfair auctions. Master the rules of LTV margin calls, reserve pricing, and surplus reclamation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a href="#gold-master-guide" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-extrabold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Reclaim Your Gold
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
                                <li className="font-bold text-[#2E2E2E]" aria-current="page">Gold Loan Settlement Guide</li>
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
                                    { id: "gold-npa-timeline", title: "The Default Timeline" },
                                    { id: "ltv-margin-calls", title: "LTV & Margin Calls" },
                                    { id: "auction-notice-rights", title: "The Auction Notice" },
                                    { id: "reserve-price-math", title: "The Reserve Price Math" },
                                    { id: "settlement-mechanics", title: "Settlement Tactics" },
                                    { id: "surplus-reclamation", title: "Reclaiming the Surplus" },
                                    { id: "bullet-repayment-rules", title: "Bullet Repayment Rules" },
                                    { id: "rbi-tier-ltv-2025", title: "2025 Tiered LTV Rules" },
                                    { id: "legal-recourse", title: "Legal Recourse & Ombudsman" },
                                    { id: "gold-success-stories", title: "Pledge Rescue Stories" },
                                    { id: "faqs", title: "Gold Loan FAQ's" }
                                ]}
                            />
                        </div>
                    </aside>

                    {/* Middle Column: Main Content */}
                    <article id="gold-master-guide" className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[#4A4A4A]">

                        <section id="gold-npa-timeline" className="scroll-mt-32 mb-16 text-justify">
                            <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                The Falling Gavel: <br /><span className="text-[#1F5EFF]">The 90-Day Gold Default Clock.</span>
                            </h2>
                            <p className="text-xl leading-relaxed mb-8">
                                In India, gold loans are typically considered 'Asset-Heavy' and 'Safety-Primary'. However, when a borrower defaults, the transition from a 'Pledged Asset' to an 'Auctioned Lot' happens faster than any other loan type. A gold loan is classified as a Non-Performing Asset (NPA) if the interest or principal remains unpaid for more than 90 days.
                            </p>
                            <p className="text-xl leading-relaxed mb-8">
                                Once the 90-day mark is breached, the lender (Bank or NBFC like Muthoot/Manappuram) gains the statutory right to monetize the security. However, this monetization is governed by strict RBI Auction Rules that prevent lenders from underselling your family gold just to cover their dues.
                            </p>
                            <div className="p-8 bg-[#F8FAFC] border-2 border-[#1F5EFF]/10 rounded-[40px] shadow-sm italic text-[#2E2E2E] font-medium leading-relaxed mb-8">
                                "The gold is yours until the third knock of the auctioneer's hammer. Understanding the gap between 'Default' and 'Auction' is where your financial recovery lives."
                            </div>
                        </section>

                        <section id="ltv-margin-calls" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight underline decoration-[#1F5EFF] underline-offset-[12px]">LTV & The Dreaded 'Margin Call'</h2>
                            <p className="text-lg leading-relaxed mb-6 text-justify">
                                The Loan-to-Value (LTV) ratio is the backbone of gold lending. The RBI historically caps this at 75% for regular gold loans. If the market price of gold drops suddenly, your LTV might shoot up to 85% or 90%, even if you haven't missed a payment.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 mb-10">
                                <div className="p-8 bg-white border border-[#DEDEDE] rounded-3xl shadow-sm text-justify">
                                    <h4 className="font-black text-[#1F5EFF] mb-4 uppercase tracking-tighter">The Margin Call</h4>
                                    <p className="text-sm">When LTV crosses the safety threshold, the bank issues a 'Margin Call'. You must either pay a part of the principal or pledge MORE gold to bring the LTV back to 75%.</p>
                                </div>
                                <div className="p-8 bg-white border border-[#DEDEDE] rounded-3xl shadow-sm text-justify">
                                    <h4 className="font-black text-[#1F5EFF] mb-4 uppercase tracking-tighter">Immediate Default</h4>
                                    <p className="text-sm">Failure to address a margin call allows the bank to auction your gold even if the loan tenure hasn't expired. This is the only scenario where 'Early Auction' is legal.</p>
                                </div>
                            </div>
                            <p className="text-lg leading-relaxed mb-6 font-bold text-gray-700 italic border-l-4 border-[#1F5EFF] pl-6 text-justify">
                                "Market volatility is not a default, but failing to respond to a margin call is. Always keep a buffer of 10% in your LTV calculation to avoid sudden liquidation."
                            </p>
                        </section>

                        <section id="auction-notice-rights" className="scroll-mt-32 mb-16 bg-[#2E2E2E] text-white p-12 rounded-[40px] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1F5EFF]/10 rounded-full -translate-y-32 translate-x-32"></div>
                            <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight relative z-10">The Statutory Auction Notice</h2>
                            <p className="text-lg opacity-80 mb-8 relative z-10 text-justify">
                                A lender cannot sell your gold in secret. The RBI mandates a specific 'Notice Protocol' that must be followed before any public or private auction.
                            </p>
                            <div className="space-y-6 relative z-10">
                                <div className="flex gap-6 items-center border-b border-white/10 pb-4">
                                    <span className="text-4xl font-black text-[#1F5EFF]">30D</span>
                                    <div>
                                        <h5 className="font-bold text-xl mb-2">Notice Period</h5>
                                        <p className="opacity-70 text-sm">A minimum 30-day registered notice must be sent to your primary address detailing the default and pending auction date.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-center border-b border-white/10 pb-4">
                                    <span className="text-4xl font-black text-[#1F5EFF]">PUB</span>
                                    <div>
                                        <h5 className="font-bold text-xl mb-2">Public Notice</h5>
                                        <p className="opacity-70 text-sm">The auction must be advertised in at least two newspapers (one national, one local language) listing the items and the reserve price.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-center">
                                    <span className="text-4xl font-black text-[#1F5EFF]">KYC</span>
                                    <div>
                                        <h5 className="font-bold text-xl mb-2">KYC Bidders</h5>
                                        <p className="opacity-70 text-sm">Auctions must be transparent. Only KYC-verified bidders can participate, and you have the right to attend the auction process physically or virtually.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="reserve-price-math" className="scroll-mt-32 mb-16 mt-16 text-justify">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">The '85% Rule': Reserve Price Math</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The most powerful rule protecting your equity is the Reserve Price. Lenders often try to sell gold quickly at low prices to recover just their dues. The RBI stops this with the '85% average' rule.
                            </p>
                            <div className="bg-[#F8FAFC] p-8 rounded-3xl border border-[#1F5EFF]/20 mb-8">
                                <h4 className="text-xl font-black text-blue-900 mb-4">Calculation Formula</h4>
                                <p className="text-blue-800 leading-relaxed font-bold italic mb-4">Reserve Price = Min 85% of (Avg Closing Price of 22K Gold for preceding 30 working days).</p>
                                <p className="text-blue-700 text-sm">Coming Update: Starting April 1, 2026, the floor rises to 90% of the market value. If two auctions fail, it can be reduced back to 85% only with Board approval.</p>
                            </div>
                            <p className="text-lg leading-relaxed">
                                This ensures that if gold prices have spiked recently, the bank cannot sell your gold at the price it was when you took the loan. You capture the market upside, even in default.
                            </p>
                        </section>

                        <section id="settlement-mechanics" className="scroll-mt-32 mb-16 mt-16 text-justify">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight text-center underline decoration-[#1F5EFF] decoration-8 underline-offset-8">Gold Loan Settlement Tactics</h2>
                            <p className="text-lg leading-relaxed mb-10 text-center italic font-medium text-gray-400">Negotiating a gold loan settlement is different from a personal loan. Why? Because the bank already has the 'Money' (Gold).</p>
                            <div className="bg-white border-2 border-[#DEDEDE] p-10 rounded-[50px] shadow-sm">
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <div className="w-6 h-6 bg-[#1F5EFF] rounded-full flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">1</div>
                                        <p className="text-sm font-bold">Interest Waiver: Banks almost never waive the principal on gold loans. Focus your energy on a 50-80% waiver on 'Penal Interest' and 'Processing Fees'.</p>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-6 h-6 bg-[#1F5EFF] rounded-full flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">2</div>
                                        <p className="text-sm font-bold">Auction Cost Exclusion: Demand that 'Auction Advertising' and 'Storage Fees' be waived if you settle before the public notice is published.</p>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-6 h-6 bg-[#1F5EFF] rounded-full flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">3</div>
                                        <p className="text-sm font-bold">The 'Third-Party Buyout': If you don't have the cash to settle, negotiate a 'Balance Transfer' where another lender pays off the first bank and takes the gold into their custody.</p>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section id="surplus-reclamation" className="scroll-mt-32 mb-16 mt-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Reclaiming the Auction Surplus</h2>
                            <p className="text-lg leading-relaxed mb-6 text-justify">
                                If the auction happens, and your gold is sold for ₹10 Lakhs while your total debt was only ₹7 Lakhs, where does the remaining ₹3 Lakhs go? legally, **it belongs to you**.
                            </p>
                            <div className="p-8 bg-[#2E2E2E] rounded-[40px] text-white shadow-2xl relative overflow-hidden text-justify">
                                <h4 className="text-xl font-black mb-4 uppercase tracking-widest text-[#1F5EFF]">The 7-Day Refund Rule</h4>
                                <p className="opacity-90 leading-relaxed font-bold mb-4">
                                    RBI guidelines mandate that any surplus from the gold auction must be returned to the borrower within 7 working days.
                                </p>
                                <p className="opacity-70 text-xs italic">
                                    Pro-Tip: Most people never check for the surplus. Ask for a 'Post-Auction statement' showing the final bid price and the itemized deductions. If there is even ₹1 extra, it must be credited back to your bank account.
                                </p>
                            </div>
                        </section>

                        <section id="bullet-repayment-rules" className="scroll-mt-32 mb-16 mt-16 text-justify">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Rule: Bullet Repayment Mechanics</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Many NBFCs offer 'Bullet Repayment' gold loans where you pay nothing for 12 months and then pay the full principal + interest in one go. The RBI has restricted the tenure of such loans to a maximum of 12 months.
                            </p>
                            <p className="text-lg leading-relaxed mb-6 font-bold text-[#1F5EFF]">
                                Crucially: For bullet loans, the LTV is calculated based on the REPAYMENT amount at maturity, not the loan amount at the start.
                            </p>
                            <p className="text-lg leading-relaxed">
                                This means if you take ₹1 Lakh today, and the interest is ₹20k, the bank calculates LTV against the full ₹1.20 Lakh. This reduces your starting loan amount but makes the settlement more predictable as no EMI defaults happen mid-way.
                            </p>
                        </section>

                        <section id="rbi-tier-ltv-2025" className="scroll-mt-32 mb-16 mt-16 bg-[#F8FAFC] p-12 rounded-[50px] border-l-8 border-[#1F5EFF] text-justify">
                            <h2 className="text-3xl font-black mb-8 text-[#2E2E2E]">The 2025 Tiered LTV Rules</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">Starting June 2025, the RBI is moving to a 'Risk-Based' LTV structure. The more you borrow, the less gold-per-rupee you get. This is designed to prevent systemic defaults in the gold market.</p>
                            <div className="space-y-4 font-mono text-sm">
                                <div className="flex justify-between border-b border-gray-100 pb-2"><span>UP TO ₹2.5 LAKH</span> <span className="font-bold text-green-600">85% LTV</span></div>
                                <div className="flex justify-between border-b border-gray-100 pb-2"><span>₹2.5 LAKH TO ₹5 LAKH</span> <span className="font-bold text-orange-600">80% LTV</span></div>
                                <div className="flex justify-between border-b border-gray-100 pb-2"><span>ABOVE ₹5 LAKH</span> <span className="font-bold text-red-600">75% LTV</span></div>
                            </div>
                        </section>

                        <section id="legal-recourse" className="scroll-mt-32 mb-16 mt-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight text-center">Legal Recourse & Ombudsman</h2>
                            <p className="text-lg leading-relaxed mb-10 text-justify">If a lender auctions your gold without a 30-day notice, or sells it below the reserve price, or refuses to return the surplus, you have significant legal leverage.</p>
                            <div className="grid md:grid-cols-2 gap-8 text-justify">
                                <div className="p-8 bg-white border border-[#DEDEDE] rounded-3xl shadow-sm hover:border-[#1F5EFF] transition-colors">
                                    <h5 className="font-black mb-3">Consumer Forum</h5>
                                    <p className="text-sm opacity-70 italic font-medium">Failing to inform the borrower of an auction is considered a 'Deficiency in Service'. Consumer courts have awarded compensation values up to 2x the market value of the gold for such violations.</p>
                                </div>
                                <div className="p-8 bg-white border border-[#DEDEDE] rounded-3xl shadow-sm hover:border-[#1F5EFF] transition-colors">
                                    <h5 className="font-black mb-3">Banking Ombudsman</h5>
                                    <p className="text-sm opacity-70 italic font-medium">For NBFCs and Banks, the RBI Ombudsman can halt an auction if procedural irregularities (like lack of newspaper ads) are proven before the auction date.</p>
                                </div>
                            </div>
                        </section>

                        <section id="gold-success-stories" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center uppercase tracking-tighter decoration-[#1F5EFF] underline decoration-4">Pledge Rescue Studies</h2>
                            <div className="grid md:grid-cols-2 gap-6 not-prose text-justify">
                                {[
                                    {
                                        name: "Suresh Babu",
                                        type: "NPA Gold Loan",
                                        tactic: "Reserve Price Challenge",
                                        result: "Auction Halted + Settled",
                                        story: "The bank's reserve price for his 200g gold was 15% below market. We filed a formal protest citing the '85% Average' rule. The bank halted the auction, waived ₹45,000 in penal interest, and allowed him to settle."
                                    },
                                    {
                                        name: "Meera Nair",
                                        type: "Post-Auction Recovery",
                                        tactic: "Surplus Audit",
                                        result: "₹82,000 Recovered",
                                        story: "Her gold was auctioned while she was out of town. The bank told her 'Nothing is left'. We audited the auction statement and proved a surplus of ₹82,000 existed. The bank credited it within 7 days."
                                    }
                                ].map((review, i) => (
                                    <div key={i} className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm hover:shadow-md transition-all">
                                        <div className="flex items-center mb-4">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700 mr-3">
                                                {review.name.charAt(0)}
                                            </div>
                                            <h5 className="font-bold text-[#2E2E2E]">{review.name}</h5>
                                            <div className="ml-auto text-yellow-400 text-sm">★★★★★</div>
                                        </div>
                                        <div className="mb-4 flex flex-col gap-2 scale-90 origin-left font-bold text-[10px] uppercase">
                                            <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full">{review.tactic}</span>
                                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">{review.result}</span>
                                        </div>
                                        <p className="text-sm text-gray-600 italic leading-relaxed">"{review.story}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="faqs" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-12 text-center underline decoration-[#1F5EFF] decoration-4">Gold Settlement FAQ's</h2>
                            <div className="space-y-6">
                                {[
                                    { q: "Is a 'No Dues Certificate' mandatory for gold loans?", a: "Yes. Upon settlement and physical return of gold, a written NDC must be issued. Always verify the purity and weight of the gold during the return process." },
                                    { q: "Can I settle a gold loan in installments?", a: "Generally, gold loans require lump-sum settlement because the collateral is single-unit. However, for large quantities (vats of jewelry), split settlements for partial returns can be negotiated." },
                                    { q: "What happens if the gold's value is LESS than the loan amount?", a: "This happens if gold prices crash. You are legally liable to pay the 'Deficit' amount even after the auction. Failure to pay leads to civil recovery suits." },
                                    { q: "Does the bank charge GST on the auction amount?", a: "GST is generally not applicable to the principal recovery but may apply to the interest component or processing charges depending on current tax guidelines." },
                                    { q: "Can I participate in the auction of my own gold?", a: "Technically yes, but you must register as a bidder and provide KYC. However, simply paying the dues before the auction starts is a better and cheaper way to reclaim it." },
                                    { q: "What is the rule for 'Raw gold' or 'Gold Biscuits'?", a: "Banks are prohibited from lending against gold coins weighing more than 50 grams or against raw gold bullion. Such loans are highly regulated and often excluded from standard OTS policies." },
                                    { q: "Does a gold loan settlement impact my CIBIL score?", a: "Yes. Like any other loan, it will be marked as 'Settled'. However, since it's a secured loan, the impact is slightly less severe than an unsecured credit card settlement." },
                                    { q: "Can a bank refuse to return gold after settlement?", a: "No. Under the 2024 RBI updates, they must return it within 7 working days. Any delay beyond 30 days incurs a daily penalty of ₹5,000." },
                                    { q: "How is 'Intrinsic Value' calculated?", a: "Intrinsic value considers only the pure gold content. Stones, gems, and 'making charges' are mathematically deducted from the weight before the loan amount is decided." },
                                    { q: "Are NBFCs like Muthoot Finance governed by these RBI auction rules?", a: "Absolutely. NBFC-MFIs and specialized gold loan companies have to strictly follow the RBI's Master Direction on Gold Loans regarding auctions and transparency." },
                                    { q: "Can I settle my gold loan at a different branch?", a: "Usually, the physical gold is stored in the branch where you took the loan. You can initiate settlement talks elsewhere, but the physical return happens at the original branch." },
                                    { q: "Is there a rule for 'Internal Auctions'?", a: "RBI strictly prohibits 'Internal' or 'Private' auctions where only bank employees participate. All auctions must be public and advertised to ensure maximum realizable value." }
                                ].map((faq, i) => (
                                    <div key={i} className="p-8 bg-white border border-[#DEDEDE] rounded-3xl shadow-sm transition-all hover:shadow-lg">
                                        <h4 className="font-black text-[#2E2E2E] mb-4 text-xl border-b pb-2 border-[#1F5EFF]/10">{faq.q}</h4>
                                        <p className="text-gray-600 leading-relaxed text-lg italic">"{faq.a}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight text-center">Secure Your Assets, Protect Your Heritage.</h2>
                            <p className="text-lg leading-relaxed mb-6 italic font-bold text-center">A gold loan is a temporary hurdle, not a permanent loss. Let's find your solution.</p>
                            <div className="bg-[#1F5EFF] p-10 rounded-[40px] text-center text-white shadow-2xl">
                                <p className="text-2xl font-black mb-8 tracking-tight uppercase">Don't Wait for the 90th Day. Negotiate Today.</p>
                                <Link href="/contact" className="inline-block bg-white text-[#1F5EFF] font-black py-5 px-12 rounded-2xl hover:scale-105 transition-all text-xl shadow-lg uppercase tracking-wider">
                                    Start Recovery Negotiation
                                </Link>
                            </div>
                        </section>

                    </article>

                    {/* Right Column: CTA & Related Pages */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                                <div className="bg-[#1F5EFF] p-4 text-center">
                                    <h3 className="text-lg font-black text-white">Auction Stay Audit</h3>
                                </div>
                                <div className="p-6 text-center">
                                    <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold italic">
                                        Received an auction notice for your gold? Let our experts audit the notice for legal flaws to buy you more time.
                                    </p>
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg text-sm">
                                        Check My Notice
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-white border border-[#DEDEDE] rounded-2xl p-6 shadow-sm">
                                <h4 className="font-black text-[#2E2E2E] mb-4 uppercase text-xs tracking-widest border-b pb-2">Gold Recovery Links</h4>
                                <div className="space-y-4 text-justify">
                                    <Link href="/what-happens-if-loan-emi-not-paid" className="block text-sm font-bold text-[#4A4A4A] hover:text-[#1F5EFF] transition-colors leading-tight">
                                        EMI Default Rules
                                    </Link>
                                    <Link href="/loan-settlement-process-in-india" className="block text-sm font-bold text-[#4A4A4A] hover:text-[#1F5EFF] transition-colors leading-tight">
                                        Negotiation Strategies
                                    </Link>
                                    <Link href="/best-lawyer-for-secured-loan-litigation-drt" className="block text-sm font-bold text-[#4A4A4A] hover:text-[#1F5EFF] transition-colors leading-tight">
                                        Secured Asset Litigation
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
