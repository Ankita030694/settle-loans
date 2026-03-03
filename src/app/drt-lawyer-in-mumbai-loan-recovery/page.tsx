"use client";

import React from "react";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";

export default function MumbaiDrtLawyerPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "@id": "https://settleloans.in/drt-lawyer-in-mumbai-loan-recovery#article",
                "headline": "Best DRT Lawyer in Mumbai for Loan Recovery Defense & SARFAESI Cases",
                "description": "Expert DRT lawyers in Mumbai for debt recovery defense. We represent borrowers in DRT 1, 2, and 3 Mumbai and Vashi. Specialized in SARFAESI stays and DRAT appeals.",
                "image": "https://settleloans.in/images/mumbai-drt-lawyer.jpg",
                "author": { "@type": "Organization", "name": "SettleLoans" },
                "publisher": {
                    "@type": "Organization",
                    "name": "SettleLoans",
                    "logo": { "@type": "ImageObject", "url": "https://settleloans.in/logo.png" }
                },
                "datePublished": "2024-03-03",
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://settleloans.in/drt-lawyer-in-mumbai-loan-recovery" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/drt-lawyer-in-mumbai-loan-recovery#product",
                "name": "Mumbai DRT Legal Defense Service",
                "description": "Comprehensive legal representation in Mumbai Debt Recovery Tribunals for NPA borrowers and businesses.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "1250"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Vikram Mehta" },
                        "datePublished": "2024-01-15",
                        "reviewBody": "SettleLoans helped us get an interim stay in DRT 2 Mumbai within 3 days. Their understanding of Mumbai's property valuation nuances is exceptional.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Where are the DRTs located in Mumbai?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "DRT 1 and 2 are located at Telephone Bhavan, Colaba. DRT 3 is located in Vashi, Navi Mumbai. Depending on your bank's branch or the property location, your case will be filed in one of these three tribunals."
                        }
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://settleloans.in" },
                    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://settleloans.in/services" },
                    { "@type": "ListItem", "position": 3, "name": "DRT Lawyer Mumbai", "item": "https://settleloans.in/drt-lawyer-in-mumbai-loan-recovery" }
                ]
            }
        ]
    };

    const tocItems = [
        { id: "introduction", title: "Introduction" },
        { id: "mumbai-drt-landscape", title: "Mumbai DRT Landscape" },
        { id: "jurisdiction-details", title: "Jurisdiction: DRT 1, 2 & 3" },
        { id: "sarfaesi-defense-mumbai", title: "SARFAESI Defense in Mumbai" },
        { id: "drat-mumbai-appeals", title: "DRAT Mumbai & Appeals" },
        { id: "bmc-cidco-nuances", title: "BMC & CIDCO Nuances" },
        { id: "property-valuation-disputes", title: "Valuation Disputes" },
        { id: "stay-order-strategies", title: "How to Get Stay Orders" },
        { id: "ots-negotiation", title: "OTS Strategies in Mumbai" },
        { id: "success-stories", title: "Mumbai Case Success" },
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
                            Mumbai Legal Defense
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                            Best <span className="text-[#1F5EFF]">DRT Lawyer in Mumbai</span> for Loan Recovery Defense
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
                            High-stakes debt recovery defense in DRT 1, 2, and 3 Mumbai. Expert representation for SARFAESI stays, DRAT appeals, and Mumbai-specific property disputes.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact-us" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Consult Mumbai DRT Expert
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
                                <li className="font-bold text-[#2E2E2E]" aria-current="page">DRT Lawyer Mumbai</li>
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
                                Navigating <span className="text-[#1F5EFF]">Loan Recovery Defense</span> in the Mumbai DRT
                            </h2>
                            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6 font-bold">
                                    Facing an NPA recovery action in the financial capital of India requires more than just general legal advice; it demands a strategic, technical, and Mumbai-aware legal defense.
                                </p>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                                    Mumbai's Debt Recovery Tribunals are some of the busiest in the country, handling cases involving massive corporate exposures and high-value real estate. Whether your case is in DRT 1 or 2 at Colaba, or DRT 3 in Vashi, the procedural intensity and the speed of SARFAESI actions in Mumbai are significantly higher than in other cities.
                                </p>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6 font-bold text-[#1F5EFF]">
                                    SettleLoans provides the most sophisticated DRT defense specialized for the Mumbai market. Our lawyers combine deep local knowledge of Mumbai property laws (including BMC, CIDCO, and SRA complexities) with high-level expertise in the SARFAESI Act to protect our clients' assets from aggressive bank recoveries.
                                </p>
                            </div>
                        </section>

                        <section id="mumbai-drt-landscape" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">The Unique Landscape of Mumbai Debt Recovery</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Mumbai is the heartbeat of Indian banking. Consequently, the legal machinery for debt recovery here is highly evolved and extremely fast. Banks in Mumbai often have specialized SARFAESI cells that work in tandem with empanelled advocates to secure possession orders and auction notices within record timeframes.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                For a borrower, this means the "window for defense" is incredibly narrow. While a borrower in a smaller town might have months to respond to a 13(2) notice, in Mumbai, banks often move for Section 14 physical possession applications within days of the 13(4) symbolic possession.
                            </p>
                            <p className="text-lg leading-relaxed mb-6 font-bold">
                                To survive this, you need a lawyer who understands the "Mumbai Timeline." We monitor every step of the bank's action, from the minute they file an application before the Chief Metropolitan Magistrate (CMM) or the District Magistrate (DM) in Thane or Palghar, ensuring we are ready with an interim stay application in the DRT.
                            </p>
                        </section>

                        <section id="jurisdiction-details" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Understanding Mumbai DRT Jurisdictions (DRT 1, 2 & 3)</h2>
                            <p className="text-lg leading-relaxed mb-8">
                                Identifying the correct tribunal is the first step in any DRT defense. In Mumbai, the jurisdiction is divided based on pecuniary (debt amount) and territorial factors. This division is critical because filing in the wrong tribunal can lead to 'Return of Plaint,' causing you to lose precious time during which a bank might take physical possession.
                            </p>
                            <div className="space-y-6 mb-10">
                                <div className="p-8 bg-gray-50 border-l-8 border-[#1F5EFF] rounded-r-2xl shadow-sm">
                                    <h4 className="font-bold text-2xl mb-4 text-[#2E2E2E]">DRT 1 Mumbai (Colaba)</h4>
                                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                                        Located at Telephone Bhavan, Colaba, DRT 1 is the high-stakes forum. It primary deals with debt amounts exceeding ₹100 Crores. This includes large corporate loans, stressed asset portfolios, and cases involving nationalized banks with large Mumbai exposures.
                                    </p>
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        <strong>Technical Note:</strong> Even if your property is in Thane, if the loan amount is above the threshold and the centralized notification applies, your case might be heard here instead of Vashi.
                                    </p>
                                </div>
                                <div className="p-8 bg-gray-50 border-l-8 border-[#1F5EFF] rounded-r-2xl shadow-sm">
                                    <h4 className="font-bold text-2xl mb-4 text-[#2E2E2E]">DRT 2 Mumbai (Colaba)</h4>
                                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                                        DRT 2 covers the core city area (Wards A to H). This includes premium areas like Nariman Point, Cuffe Parade, Malabar Hill, and the business hubs of Lower Parel and Worli. It handles recovery applications for debts below ₹100 Crores.
                                    </p>
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        We represented a high-net-worth individual here whose Cuffe Parade residence was wrongly classified as an NPA. The speed of DRT 2 requires an advocate who is present in the Colaba premises daily.
                                    </p>
                                </div>
                                <div className="p-8 bg-gray-50 border-l-8 border-[#1F5EFF] rounded-r-2xl shadow-sm">
                                    <h4 className="font-bold text-2xl mb-4 text-[#2E2E2E]">DRT 3 Mumbai (Vashi)</h4>
                                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                                        The Navi Mumbai tribunal (DRT 3) handles the suburban sprawl (Wards K to T) and the industrial belts of Thane, Palghar, Vapi (territorial), and Nashik. This portal is the main battleground for MSMEs and SME borrowers.
                                    </p>
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        The CMM Vashi and the District Collector of Palghar are extremely active in issuing Section 14 orders. Our Vashi team specializes in obtaining 'Stay on Possession' from the Presiding Officer of DRT 3 within hours of a Section 14 notice being posted.
                                    </p>
                                </div>
                            </div>
                            <p className="text-lg leading-relaxed mb-6 italic text-gray-500 bg-yellow-50 p-4 border rounded-xl">
                                <strong>Important Alert:</strong> In 2022, the government tried to centralize all cases above ₹100 Crore to DRT 1 Mumbai. This notification was stayed by the Bombay High Court. We assist clients in navigating these jurisdictional shifts to ensure their defense is not dismissed on technical grounds of "forum non-conveniens."
                            </p>
                        </section>

                        <section id="sarfaesi-defense-mumbai" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Technical SARFAESI Defense: The "Rule 8" Checklist</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The SARFAESI Act is a draconian law, but its enforcement is governed by strict rules. Any deviation by the bank from the Security Interest (Enforcement) Rules, 2002, is a ground for quashing the recovery action. In Mumbai, where property values are astronomical, even a single procedural slip can save a borrower millions.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 mb-10">
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl">
                                    <h4 className="font-bold text-[#1F5EFF] mb-3">Notice of Possession (Rule 8(1))</h4>
                                    <p className="text-sm">Banks often fail to serve the possession notice to the borrower and the guarantor simultaneously. In a recent case at DRT 3 Mumbai, we set aside a symbolic possession notice because it wasn't published in two leading newspapers (one in vernacular Marathi) within 7 days. Proof of publication is a mandatory exhibit in any DRT trial.</p>
                                </div>
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl">
                                    <h4 className="font-bold text-[#1F5EFF] mb-3">Valuation Integrity (Rule 8(5))</h4>
                                    <p className="text-sm">PSU banks in Mumbai frequently rely on outdated valuation reports to set the 'Reserve Price'. If the price for a Dadar or Bandra property is based on a valuation older than 6 months, we challenge it as a 'fraud on the power of sale' under Rule 8(5), often resulting in a re-valuation and cancellation of the auction.</p>
                                </div>
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl">
                                    <h4 className="font-bold text-[#1F5EFF] mb-3">Sale Notice Period (Rule 8(6))</h4>
                                    <p className="text-sm">The 30-day notice for the first auction and 15-day notice for subsequent auctions is non-negotiable. We verify the "proof of service" of these notices. If the courier receipt doesn't match the address in the loan deed or if the notice was served on a Sunday/Public Holiday, it can be quashed.</p>
                                </div>
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl">
                                    <h4 className="font-bold text-[#1F5EFF] mb-3">Authorised Officer's Identity</h4>
                                    <p className="text-sm">Many private banks hire external agencies to sign as 'Authorised Officers.' Under Bombay High Court precedents, only a permanent employee of the bank (typically Scale IV or above) can act as an AO. External signatures make the entire 13(2) and 13(4) chain of notices legally void.</p>
                                </div>
                            </div>
                        </section>

                        <section id="drat-mumbai-appeals" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">DRAT Mumbai: The High-Stakes Appeal Process</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The Debt Recovery Appellate Tribunal (DRAT) in Mumbai, located at Scindia House, is the final authority for appeals against DRT orders in Maharashtra, Goa, and Gujarat. Appealing here is a technical minefield due to the mandatory "Pre-deposit" requirement.
                            </p>
                            <div className="bg-blue-50 p-8 rounded-xl border border-blue-200 my-8">
                                <h4 className="font-bold text-blue-900 mb-4 text-xl">The Pre-Deposit Technicality</h4>
                                <p className="text-base text-blue-800 leading-relaxed mb-4">
                                    Under Section 18 of the SARFAESI Act, you must deposit 50% of the bank's claim to file an appeal. However, a skilled lawyer can argue for a reduction to 25% based on specific financial hardship or legal merits of the case.
                                </p>
                                <p className="text-base text-blue-800 leading-relaxed">
                                    We specialize in "Interlocutory Applications" (IA) for waiver of pre-deposit. By highlighting the fundamental illegalities in the DRT's order, we help our clients access justice without having to pay the full, often inflated, bank claim upfront.
                                </p>
                            </div>
                        </section>

                        <section id="bmc-cidco-nuances" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Mumbai Specialty: BMC, CIDCO & SRA Property Disputes</h2>
                            <p className="text-lg leading-relaxed mb-6 font-bold">
                                You cannot apply general property law to Mumbai real estate.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Many properties in Mumbai are on leasehold land from the BMC, CIDCO, or are part of SRA (Slum Rehabilitation Authority) schemes. These properties have strict "transfer of interest" rules. If a bank auctions a BMC leasehold property without the prior consent of the Municipal Commissioner, the auction is technically illegal.
                            </p>
                            <p className="text-lg leading-relaxed mb-6 leading-relaxed">
                                We use these administrative overlaps to stall auctions. If the bank has not cleared the society dues (which are a first charge under the Maharashtra Co-operative Societies Act) or obtained the necessary NOCs from CIDCO/MIDC, we file applications to set aside the sale/auction process in the DRT.
                            </p>
                        </section>

                        <section id="property-valuation-disputes" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Challenging Undervalued Auctions in Mumbai</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Real estate in Mumbai is incredibly profitable for recovery agents. We often find banks setting 'Reserve Prices' for properties that are 30% to 40% below the actual market rate of South Mumbai or the Western Suburbs.
                            </p>
                            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 my-8">
                                <p className="text-lg font-bold mb-4">How we fight undervalued auctions:</p>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="text-[#1F5EFF] mr-2">✔</span>
                                        <span>Independent Valuation Reports by IBBI Registered Valuers.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#1F5EFF] mr-2">✔</span>
                                        <span>Challenging the 'Distress Value' vs 'Market Value' calculation in the DRT.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#1F5EFF] mr-2">✔</span>
                                        <span>Proving the 'Conflict of Interest' if the auction purchaser is a known associate of the recovery firm.</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section id="stay-order-strategies" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Winning Strategies for Interim Stay Orders</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Getting a stay order in the Mumbai DRT is a race against time. The DRT usually follows the principle of "Prima Facie Case, Balance of Convenience, and Irreparable Injury."
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                We don't just ask for a stay; we provide the DRT with a "Technical Breach Map." This is a table-format document that compares the bank's action against the SARFAESI Rules line-by-line. Whether it's the missing 30-day notice for auction or the failure to serve notices on all legal heirs/guarantors, our precision documentation makes it easier for the Presiding Officer to grant relief.
                            </p>
                        </section>

                        <section id="ots-negotiation" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">One-Time Settlement (OTS) Strategies for Mumbai Businesses</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                For most Mumbai-based entrepreneurs, the DRT case is a means to an end, the end being a fair settlement. Banks in Mumbai are driven by 'Quarterly NPA Targets.' This makes them more prone to settle during the months of March, June, September, and December.
                            </p>
                            <div className="bg-[#1F5EFF]/5 p-8 rounded-3xl border border-[#1F5EFF]/20 mb-10">
                                <h4 className="text-2xl font-black text-[#2E2E2E] mb-6">The "Legal Gridlock" Method for OTS</h4>
                                <p className="text-lg leading-relaxed mb-4">
                                    A bank will never offer a deep hair-cut (discount) if they believe they can successfully auction your property. We create a legal gridlock by:
                                </p>
                                <ol className="space-y-4 text-base font-medium">
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs flex-shrink-0 mt-1">1</span>
                                        <span>Filing a Securitization Application (SA) challenging the NPA classification based on erroneous interest calculations.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs flex-shrink-0 mt-1">2</span>
                                        <span>Filing a Counter-Claim for damages caused by the bank's refusal to release part of the security or for wrongful dishonor of LC/BG.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs flex-shrink-0 mt-1">3</span>
                                        <span>Using the "Right of Redemption" under Section 60 of the Transfer of Property Act to block the issuance of a Sale Certificate.</span>
                                    </li>
                                </ol>
                                <p className="mt-8 text-lg font-bold text-[#1F5EFF]">
                                    Once the bank realizes that the recovery will be stuck in litigation for 3 to 5 years, their appetite for a 40% to 60% settlement suddenly increases.
                                </p>
                            </div>
                        </section>

                        <section id="mumbai-drt-fees" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Court Fees and Costs in Mumbai DRT</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Filing a case in the DRT is not free. The court fees are calculated based on the 'Amount of Debt' claimed by the bank or the value of the action being challenged.
                            </p>
                            <div className="overflow-hidden rounded-2xl border border-[#DEDEDE] mb-8">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="p-4 border-b font-bold">Nature of Application</th>
                                            <th className="p-4 border-b font-bold">Standard Court Fee</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-4 border-b">Securitization Application (SA) Challenge</td>
                                            <td className="p-4 border-b">₹500 for every ₹1 Lakh (Max ₹1 Lakh)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b">Waiver Application (DRAT)</td>
                                            <td className="p-4 border-b">₹1,000 to ₹5,000</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b">Appeal to DRAT</td>
                                            <td className="p-4 border-b">Based on debt amount (Max ₹30,000)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-sm text-gray-500 italic">
                                *Note: These are indicative government court fees. Professional fees for a Senior DRT Advocate in Mumbai vary depending on the complexity and urgency of the stay order required.
                            </p>
                        </section>

                        <section id="success-stories" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Mumbai Case Success History</h2>
                            <div className="grid md:grid-cols-2 gap-10 not-prose">
                                {[
                                    {
                                        name: "Vikram Mehta",
                                        loc: "Colaba, Mumbai",
                                        outcome: "Auction Stayed",
                                        story: "An ARC tried to auction a Nariman Point office based on an old evaluation. SettleLoans identified the jurisdictional error between DRT 1 and 2 and secured a stay within 48 hours."
                                    },
                                    {
                                        name: "Sunil G.",
                                        loc: "Thane",
                                        outcome: "60% Debt Waiver",
                                        story: "The bank had misused personal guarantees. We challenged the 13(2) notice in DRT 3 Mumbai, leading to a massive settlement and recovery of the property."
                                    },
                                    {
                                        name: "Priya R.",
                                        loc: "Vashi, Navi Mumbai",
                                        outcome: "Illegal Possession Halted",
                                        story: "The bank obtained a Section 14 order without proper BMC disclosure. We filed a technical stay in DRT 3 and successfully reversed the possession notice."
                                    },
                                    {
                                        name: "Ramesh K.",
                                        loc: "Andheri, Mumbai",
                                        outcome: "OTS Secured",
                                        story: "The bank was charging penal interest compounding. Our forensic audit identified a ₹12 Lakh error, forcing the bank to settle for 50% of the principal."
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
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">DRT Mumbai & Loan Recovery FAQs</h2>
                            <div className="space-y-6 not-prose">
                                {[
                                    { q: "Where is DRT 1 Mumbai located?", a: "DRT 1 is located on the 2nd Floor, Telephone Bhavan, Colaba, Mumbai. It handles cases with debt amounts of Rs. 100 Crore and above." },
                                    { q: "How much pre-deposit is required for a DRAT appeal in Mumbai?", a: "The standard is 50%, but the DRAT chairperson has the power to reduce it to 25% upon hearing a waiver application based on merits and hardship." },
                                    { q: "Can a DRT lawyer in Mumbai stop a physical possession?", a: "Yes, by filing a Securitization Application (SA) under Section 17 and obtaining an interim stay before the date of possession mentioned in the Section 14 notice." },
                                    { q: "Does DRT 3 Mumbai handle Thane and Palghar cases?", a: "Yes, DRT 3 located in Vashi has jurisdiction over the districts of Thane, Palghar, and Nashik, in addition to Mumbai's suburban wards (K to T)." },
                                    { q: "What is an 'OA' vs an 'SA' in Mumbai DRT?", a: "An OA (Original Application) is filed by the Bank to recover money. An SA (Securitization Application) is filed by the Borrower to challenge the bank's recovery actions." },
                                    { q: "How long does a DRT case typically last in Mumbai?", a: "Interim stays are often decided within days or weeks. However, the final adjudication of a recovery application can take anywhere from 12 to 36 months depending on the complexity." },
                                    { q: "Can I challenge an auction if the property is a BMC leasehold?", a: "Yes. If the bank fails to follow the specific lease terms or obtain municipal consent for the transfer, the auction can be challenged in the DRT." },
                                    { q: "Is registration of the bank's assignment deed to an ARC mandatory in Mumbai?", a: "Yes, for any transfer of interest in Mumbai property, the assignment deed must be registered with the local Sub-Registrar and appropriate stamp duty must be paid." },
                                    { q: "Can a borrower file a counterclaim in the Mumbai DRT?", a: "Absolutely. If you have suffered losses due to bank misconduct or have unaccounted set-offs, you can file a counterclaim alongside your Written Statement." },
                                    { q: "What is the role of a 'Court Commissioner' in Mumbai Section 14 cases?", a: "The CMM often appoints a lawyer as a Court Commissioner to take physical possession of the property. We can challenge the 'notice of taking possession' served by such commissioners if it violates procedural rules." },
                                    { q: "Can SettleLoans assist with DRAT appeals in other cities?", a: "Yes, while our Mumbai office handles DRAT Mumbai, we also represent clients in DRAT Delhi, Chennai, and Allahabad through our pan-India legal network." },
                                    { q: "What is the 'Limitation Period' for filing an SA in Mumbai?", a: "You must file a Securitization Application within 45 days from the date on which the recovery measure (like symbolic possession) was taken. Missing this deadline is fatal to your case." },
                                    { q: "Can I approach the Bombay High Court directly against a bank?", a: "Under Article 226, you can file a Writ Petition, but the High Court usually directs you to the DRT if an 'alternative efficacious remedy' exists, unless there is a question of fundamental rights or total lack of jurisdiction." },
                                    { q: "How does the 'Right of Redemption' work for Mumbai homeowners?", a: "Even after the auction, you can pay the full dues (including costs) any time before the sale is finalized (Sale Certificate is issued). This is your final chance to save your property." },
                                    { q: "What happens if the DRT Presiding Officer is on leave?", a: "In Mumbai, if one PO is on leave, the charge is usually given to another PO in the same city or the DRAT. We file 'Urgent Mentioning' before the link-officer for immediate stay orders." },
                                    { q: "Can a tenant in a Mumbai property challenged a SARFAESI action?", a: "Yes, under the 2016 amendment, tenants with valid registered leaf-and-license agreements have rights. The bank cannot simply throw you out; they must follow the 'Due Process' of law." }
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
                            <h2 className="text-3xl font-black mb-6">Stop Mumbai DRT Auctions Today</h2>
                            <p className="text-xl mb-8 opacity-90">
                                Don't wait for the bank to take your keys. Our senior Mumbai advocates are ready to defend your property rights.
                            </p>
                            <Link href="/contact-us" className="inline-block bg-white text-[#1F5EFF] font-black py-4 px-10 rounded-xl hover:scale-105 transition-all text-lg shadow-2xl">
                                Request Urgent DRT Consultation
                            </Link>
                        </div>

                    </article>

                    {/* Right Column: Sticky Widgets */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-24 space-y-8">

                            {/* CTA Box */}
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                                <div className="bg-[#1F5EFF] p-4 text-center">
                                    <h3 className="text-lg font-black text-white px-2">Mumbai DRT Support</h3>
                                </div>
                                <div className="p-8 text-center">
                                    <p className="mb-8 text-sm text-[#DEDEDE] opacity-90 leading-relaxed font-bold">
                                        Facing a recovery case in Colaba or Vashi? Get specialized legal defense to protect your property.
                                    </p>
                                    <Link href="/contact-us" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-4 rounded-[12px] hover:scale-110 transition-all shadow-md group-hover:shadow-2xl">
                                        Start My Defense
                                    </Link>
                                    <p className="mt-6 text-[10px] text-[#DEDEDE]/60 uppercase tracking-[0.3em] font-black">Senior Mumbai Advocates</p>
                                </div>
                            </div>

                            {/* Related Guides */}
                            <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2 text-center">Mumbai Resources</h3>
                                <ul className="space-y-4 text-sm font-extrabold px-2">
                                    <li>
                                        <Link href="/best-lawyer-for-arc-loan-assignment-dispute" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight">
                                            <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors flex-shrink-0"></span>
                                            ARC Dispute Defense
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/best-lawyer-for-account-documents-drt" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight">
                                            <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors flex-shrink-0"></span>
                                            DRT Document Audit
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
