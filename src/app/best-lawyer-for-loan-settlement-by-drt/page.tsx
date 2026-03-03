import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGavel, faScaleBalanced, faShieldHalved, faHandshake, faLandmark, faCircleExclamation, faFileSignature, faBuildingShield, faUserTie, faStar, faBalanceScaleLeft } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Best Lawyer for Loan Settlement by DRT | Debt Recovery Tribunal Defense",
    description: "Facing a DRT case? Connect with the best lawyer for loan settlement by DRT in India. Expert defense for SARFAESI, SA filing, and bank settlement through tribunal.",
    alternates: {
        canonical: "https://settleloans.in/best-lawyer-for-loan-settlement-by-drt",
    },
};

export default function DRTLoanSettlementPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/best-lawyer-for-loan-settlement-by-drt#webpage",
                "url": "https://settleloans.in/best-lawyer-for-loan-settlement-by-drt",
                "name": "Best Lawyer for Loan Settlement by DRT India | Tribunal Defense",
                "description": "Comprehensive legal guide and services for borrowers facing Debt Recovery Tribunal (DRT) cases, bank recoveries, and SARFAESI actions.",
                "breadcrumb": { "@id": "https://settleloans.in/best-lawyer-for-loan-settlement-by-drt#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/best-lawyer-for-loan-settlement-by-drt#breadcrumb",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://settleloans.in"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Best Lawyer for Loan Settlement by DRT",
                        "item": "https://settleloans.in/best-lawyer-for-loan-settlement-by-drt"
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/best-lawyer-for-loan-settlement-by-drt#article",
                "headline": "Best Lawyer for Loan Settlement by DRT: Your Guide to Tribunal Defense",
                "description": "Professional insights into the DRT process, legal remedies for borrowers, and strategies for achieving favorable settlements in the Debt Recovery Tribunal.",
                "author": {
                    "@type": "Organization",
                    "name": "SettleLoans Legal Team"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "SettleLoans",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://settleloans.in/logo/logo.svg"
                    }
                },
                "datePublished": "2024-03-03",
                "dateModified": "2024-03-03",
                "mainEntityOfPage": { "@id": "https://settleloans.in/best-lawyer-for-loan-settlement-by-drt#webpage" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/best-lawyer-for-loan-settlement-by-drt#product",
                "name": "DRT Legal Defense Consultation",
                "description": "Professional legal defense and settlement negotiation for DRT and SARFAESI matters.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "reviewCount": "1180"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Vikram Singh" },
                        "datePublished": "2024-02-10",
                        "reviewBody": "Excellent defense in the DRT. Their lawyer managed to get a stay on our property auction and negotiated a brilliant OTS.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Priyanka Mehta" },
                        "datePublished": "2024-01-15",
                        "reviewBody": "Navigating DRT was impossible without them. They understood the technicalities of SARFAESI and helped us settle.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://settleloans.in/best-lawyer-for-loan-settlement-by-drt#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is the function of the Debt Recovery Tribunal (DRT)?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The DRT is a special tribunal created for the speedy recovery of debts due to banks and financial institutions. It handles cases above Rs. 20 Lakhs and provides a forum for both banks to file recovery suits and borrowers to challenge bank actions."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How can a lawyer help in a DRT case?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A specialized DRT lawyer can file a Securitization Application (SA) to challenge bank notices, seek interim stay orders against asset possession, and identify legal flaws in the bank's recovery process to force a favorable settlement."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can DRT cases lead to a loan settlement?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, a significant number of DRT cases are resolved through One Time Settlements (OTS). Legal pressure in the DRT often makes banks more willing to negotiate a lower payoff amount rather than engaging in prolonged litigation."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is a Securitization Application (SA)?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "An SA is the primary legal mechanism for a borrower to challenge actions taken by a bank under the SARFAESI Act. It is filed in the DRT to contest illegal possession or auction of properties."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What happens if I don't appear in the DRT after receiving a summons?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "If you fail to appear, the DRT may pass an 'Ex-Parte' order against you, allowing the bank to proceed with recovery without your defense. Having a lawyer ensure representation is critical."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can a stay order be obtained in the DRT?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, if you can demonstrate a prima facie case of legal violation by the bank or prove that irreparable harm will occur, the Presiding Officer of the DRT can grant a stay order against the bank's recovery actions."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are the common grounds for defense in DRT?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Common grounds include incorrect interest calculations, violation of mandatory notice periods, failure to account for payments already made, and non-compliance with the procedures laid down in the SARFAESI Act."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How long does a DRT proceeding take?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "While intended to be fast, DRT cases can take 1 to 3 years. However, the legal leverage gained during this period is what often leads to an earlier settlement."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is there an appeal against DRT orders?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, orders from the DRT can be appealed in the Debt Recovery Appellate Tribunal (DRAT). However, appeals usually require a pre-deposit of a percentage of the debt claimed."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why choose SettleLoans for DRT defense?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "SettleLoans connects you with seasoned DRT advocates who understand the technicalities and tactical aspects of tribunal work. We focus on getting you the stay orders you need while simultaneously pursuing a final settlement."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
                {/* Schema Markup */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />

                {/* Hero Section */}
                <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
                    <div className="max-w-5xl mx-auto text-center relative z-10">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
                            Premier Tribunal Representation
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                            Best Lawyer for Loan <br className="hidden md:block" /> Settlement by DRT
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.2] font-normal">
                            Navigating the Debt Recovery Tribunal requires precision and expertise. Get the top legal defense for your DRT cases and achieve favorable settlements today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Secure Your Legal Defense
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Breadcrumb */}
                <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
                    <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
                        <nav aria-label="Breadcrumb">
                            <ol className="flex items-center space-x-2 text-xs md:text-sm text-[#747474]">
                                <li>
                                    <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
                                </li>
                                <li>
                                    <span className="text-gray-300">/</span>
                                </li>
                                <li className="font-bold text-[#2E2E2E]" aria-current="page">
                                    Best Lawyer for Loan Settlement by DRT
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">

                    {/* Left Column: TOC */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <TableOfContents
                            items={[
                                { id: "intro-drt-legal", title: "Navigating the DRT" },
                                { id: "what-is-drt", title: "Understanding DRT" },
                                { id: "sarfaesi-defense", title: "SARFAESI Defense" },
                                { id: "filing-sa", title: "Securitization Application" },
                                { id: "stay-orders", title: "Securing Stay Orders" },
                                { id: "challenging-bank-claims", title: "Challenging Claims" },
                                { id: "ots-through-drt", title: "OTS Through Tribunal" },
                                { id: "valuation-disputes", title: "Disputing Property Price" },
                                { id: "drat-appeals", title: "Appeals to DRAT" },
                                { id: "strategic-litigation", title: "Litigation Strategy" },
                                { id: "case-studies-drt", title: "DRT Case Victories" },
                                { id: "lawyer-selection", title: "Hiring a DRT Expert" },
                                { id: "final-call-to-action-drt", title: "Activate Your Shield" },
                                { id: "faqs-drt", title: "Legal Insights (FAQs)" }
                            ]}
                        />
                    </aside>

                    {/* Middle Column: Main Content */}
                    <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">

                        <section id="intro-drt-legal" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Navigating the DRT: <span className="text-black">Professional Legal Defense for High Value Loans</span>
                            </h2>
                            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 z-0"></div>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                                    If you have received a summons or a notice from a Debt Recovery Tribunal (DRT), you are involved in a high stakes legal battle. The DRT is a specialized judicial body created to help banks and financial institutions recover debts of Rs. 20 Lakhs and above quickly. For a borrower, being in the DRT can feel like being in a fast moving machine designed to take away your assets.
                                </p>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                                    However, the DRT is also a court of law where your rights as a borrower are protected. With the best lawyer for loan settlement by DRT, you can turn a recovery proceeding into a negotiation platform. The law provides numerous technical and procedural safeguards that can be used to challenge a bank's aggressive moves, stop property auctions, and ultimately secure a settlement that you can actually afford.
                                </p>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 font-bold text-[#1F5EFF]">
                                    Do not let a DRT summons intimidate you. It is your opportunity to file your defense and fight for a fair deal.
                                </p>
                            </div>
                        </section>

                        <section id="what-is-drt" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                                Understanding the Debt Recovery Tribunal (DRT)
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The DRT was established under the Recovery of Debts Due to Banks and Financial Institutions (RDDBFI) Act, 1993. Its purpose is to provide a streamlined process for banks to recover bad loans without the delays typical of regular civil courts. The tribunal is headed by a Presiding Officer (PO), who has the power to pass orders for the attachment and sale of properties.
                            </p>
                            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-8">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                    <FontAwesomeIcon icon={faLandmark} className="text-[#1F5EFF]" />
                                    Key Components of the DRT Process
                                </h3>
                                <ul className="space-y-4 text-sm font-medium">
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full mt-1.5 flex-shrink-0"></span>
                                        <span><strong>Original Application (OA):</strong> The lawsuit filed by the bank against the borrower for recovery of dues.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full mt-1.5 flex-shrink-0"></span>
                                        <span><strong>Securitization Application (SA):</strong> The lawsuit filed by the borrower to challenge bank actions under the SARFAESI Act.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full mt-1.5 flex-shrink-0"></span>
                                        <span><strong>Recovery Certificate:</strong> An order passed by the DRT allowing the Recovery Officer (RO) to sell assets.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full mt-1.5 flex-shrink-0"></span>
                                        <span><strong>Interlocutory Application (IA):</strong> Small petitions filed within a case for specific orders like a stay or a direction to the bank.</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section id="sarfaesi-defense" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                                Defending Against SARFAESI Actions in DRT
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Most DRT cases today involve the SARFAESI Act. Under this act, banks can take possession of your home, office, or factory without going to court, provided they follow the rules. But they rarely follow the rules perfectly. Our defense strategy in the DRT is often built on identifying these procedural lapses.
                            </p>
                            <div className="bg-red-50 p-8 rounded-xl border border-red-200 mb-8">
                                <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-3">
                                    <FontAwesomeIcon icon={faShieldHalved} />
                                    Tactical Defense Against Bank Possession
                                </h3>
                                <p className="text-sm text-red-800 leading-relaxed mb-4">
                                    Did the bank provide a full response to your Section 13(3A) representation? Did they properly valuate your property? Did they serve the possession notice (13(4)) correctly by publishing it in two leading newspapers? In many cases, the answer is no. Each of these 'no's is a ground for your lawyer to challenge the bank's action and get it quashed in the DRT.
                                </p>
                                <p className="text-sm text-red-800 leading-relaxed">
                                    The goal of a strong defense is not just to delay, but to create a legal deadlock that forces the bank to come to the settlement table on your terms.
                                </p>
                            </div>
                        </section>

                        <section id="filing-sa" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                                The Critical Importance of the Securitization Application (SA)
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The Securitization Application (SA) is your primary weapon under Section 17 of the SARFAESI Act. This application must be filed within 45 days of the bank taking a 'recourse measure' like physical or symbolic possession. Missing this 45 day deadline can be fatal to your case.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                A well drafted SA is an exhaustive document that challenges every action the bank has taken since you first defaulted. It puts the burden of proof on the bank. If the bank cannot prove that they followed every single rule of the Security Interest (Enforcement) Rules, 2002, the tribunal must restore possession of the property to you.
                            </p>
                        </section>

                        <section id="stay-orders" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                                Securing Stay Orders Against Property Auctions
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The most urgent task for a DRT lawyer is often getting a 'Stay Order'. When a bank schedules an auction of your property, an expert lawyer files an urgent application to stay the auction. The Presiding Officer of the DRT will look for three things: a prima facie case, the balance of convenience, and the risk of irreparable injury.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4 my-8">
                                <div className="bg-white p-6 rounded-xl border border-[#DEDEDE] shadow-sm">
                                    <div className="text-[#1F5EFF] mb-4">
                                        <FontAwesomeIcon icon={faGavel} className="w-8 h-8" />
                                    </div>
                                    <h4 className="font-bold text-[#2E2E2E] mb-2">Auction Stays</h4>
                                    <p className="text-xs text-gray-500">Halting the sale of properties when the bank has failed to follow fair valuation and notice procedures.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-[#DEDEDE] shadow-sm">
                                    <div className="text-emerald-500 mb-4">
                                        <FontAwesomeIcon icon={faBalanceScaleLeft} className="w-8 h-8" />
                                    </div>
                                    <h4 className="font-bold text-[#2E2E2E] mb-2">Possession Stays</h4>
                                    <p className="text-xs text-gray-500">Preventing the bank from taking over your factory or home through a court-appointed Receiver.</p>
                                </div>
                            </div>
                        </section>

                        <section id="challenging-bank-claims" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 underline decoration-[#1F5EFF] underline-offset-8">Challenging Inflated Bank Claims</h2>
                            <p className="mb-6">
                                Banks often file their claims in the DRT with highly inflated figures. They include penal interest, additional charges, and capitalize the interest in ways that violate RBI master circulars. An expert DRT defense involves a meticulous 'forensic' examination of the bank's account statement.
                            </p>
                            <p className="mb-6">
                                By producing our own calculation sheet and highlighting the overcharging, we can often prove to the tribunal that the bank's claim is legally unsustainable. This not only buys time but significantly weakens the bank's bargaining position for a final settlement.
                            </p>
                        </section>

                        <section id="ots-through-drt" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Achieving OTS Through the Tribunal</h2>
                            <p className="mb-6">
                                Most cases in the DRT end in a One-Time Settlement (OTS). However, the settlement you get while being defended by a high caliber lawyer is very different from the settlement you get on your own. When the bank sees that their recovery will be stuck in the DRT and potential appeals for the next 5 years, they become much more practical.
                            </p>
                            <p className="mb-6">
                                We assist you in preparing a professional OTS proposal that is backed by your legal defense. We use the technical flaws we've identified as leverage to demand deep waivers on interest and penal charges. A successful OTS is the fastest and cleanest way to exit the DRT and start your financial life fresh.
                            </p>
                            <blockquote className="border-l-4 border-[#1F5EFF] pl-4 italic bg-gray-50 p-6 rounded-r-lg my-8">
                                "Modern debt recovery is not just about the law; it is about utilizing the law to bring the bank to a commercial reality where settlement is their best option."
                            </blockquote>
                        </section>

                        <section id="valuation-disputes" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-[#2E2E2E]">Disputing Property Price and Reserve Price</h2>
                            <p className="mb-8 text-lg">
                                One of the common tactics used by banks to settle a debt quickly is to sell the property at a very low 'Reserve Price'. This is a massive loss to the borrower. In the DRT, we challenge these valuations by providing independent reports from government-approved valuers. We ensure that your property is not undervalued and that every attempt is made to get its true market value if a sale is unavoidable.
                            </p>
                        </section>

                        <section id="drat-appeals" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Appeals to the Debt Recovery Appellate Tribunal (DRAT)</h2>
                            <p className="mb-6 leading-relaxed">
                                If the DRT passes an unfavorable order, there is an option to appeal to the Debt Recovery Appellate Tribunal (DRAT). While this requires a 'pre-deposit' (usually 25% to 50% of the debt), an appeal can be a vital step in complex cases. Our legal team is experienced in arguing before the Appellate Tribunals across India, including Delhi, Mumbai, Chennai, and Kolkata.
                            </p>
                        </section>

                        <section id="strategic-litigation" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">High Performance Litigation Strategy</h2>
                            <p className="mb-6">
                                At SettleLoans, we believe that litigation is a means to an end. Our strategy in the DRT is high intensity and focused on results. We don't just file papers; we actively look for the bank's weak spots. Whether it is an missing original document, a faulty affidavit, or an illegal interest hike, we use every available legal tool to protect your interests.
                            </p>
                        </section>

                        <section id="case-studies-drt" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">DRT Case Victories</h2>
                            <div className="grid md:grid-cols-2 gap-6 not-prose">
                                {[
                                    {
                                        name: "Rahul M.",
                                        loc: "New Delhi",
                                        type: "Commercial Property",
                                        outcome: "Auction Halted - 40% Waiver",
                                        story: "The bank tried to auction my office for 5 Crores while market value was 8 Crores. My DRT lawyer challenged the valuation and got an injunction. The bank eventually accepted an OTS for the principal amount plus minimal interest."
                                    },
                                    {
                                        name: "Suresh P.",
                                        loc: "Ahmedabad",
                                        type: "Residential Villa",
                                        outcome: "Possession Restored",
                                        story: "The bank had taken physical possession through a DM order. We challenged the technical procedure in the DRT and proved they hadn't served the notice correctly. The tribunal ordered the bank to return the keys to me."
                                    },
                                    {
                                        name: "Anjali G.",
                                        loc: "Hyderabad",
                                        type: "Industrial Unit",
                                        outcome: "OTS Success after 3 years",
                                        story: "We fought the bank in the DRT for 3 years, challenging their every move. Finally, the bank realized their recovery was going nowhere and offered a brilliant settlement just to close the file."
                                    },
                                    {
                                        name: "Kartik S.",
                                        loc: "Jaipur",
                                        type: "Educational Institution",
                                        outcome: "Account Regularized",
                                        story: "By identifying a major error in the bank's interest calculation, we proved the account was never an NPA. The DRT directed the bank to regularize the loan and remove the default tag."
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
                                            <div className="ml-auto text-yellow-400 text-sm flex gap-0.5">
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                            </div>
                                        </div>
                                        <div className="mb-4 text-xs font-mono bg-blue-50 p-2 rounded border border-blue-100 uppercase font-bold text-blue-700">
                                            {review.outcome}
                                        </div>
                                        <p className="text-sm text-gray-600 italic leading-relaxed">"{review.story}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="lawyer-selection" className="scroll-mt-32 mb-12">
                            <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mt-16 mb-8">What to Look for in a DRT Lawyer</h2>
                            <p className="mb-6">Selecting the right defense council can make or break your case. In the tribunal environment, where proceedings move fast, you need someone who is agile and detail-oriented.</p>
                            <div className="bg-gray-100 p-8 rounded-2xl">
                                <ul className="space-y-4 font-bold text-[#2E2E2E]">
                                    <li className="flex items-center gap-2"><FontAwesomeIcon icon={faScaleBalanced} className="text-[#1F5EFF]" /> Mastery of SARFAESI & RDDBFI Acts</li>
                                    <li className="flex items-center gap-2"><FontAwesomeIcon icon={faScaleBalanced} className="text-[#1F5EFF]" /> Proven track record of securing interim stays</li>
                                    <li className="flex items-center gap-2"><FontAwesomeIcon icon={faScaleBalanced} className="text-[#1F5EFF]" /> Capability to handle account forensic analysis</li>
                                    <li className="flex items-center gap-2"><FontAwesomeIcon icon={faScaleBalanced} className="text-[#1F5EFF]" /> Strategic thinking for settlement negotiations</li>
                                </ul>
                            </div>
                        </section>

                        <section id="faqs-drt" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Expert Insights (FAQs)</h2>
                            <div className="space-y-4 not-prose">
                                {[
                                    { q: "Is it possible to settle a case in the DRT without a lawyer?", a: "While possible, it is extremely risky. Banks have seasoned legal teams in the DRT who know every loophole. Without a lawyer, you might agree to an OTS that is legally unfair or miss critical deadlines like the 45-day window for an SA application." },
                                    { q: "Can a DRT order be challenged in a regular civil court?", a: "No. The jurisdiction of regular civil courts is barred for matters that fall under the DRT. You must use the tribunal's own appeal process (DRAT) or file a Writ Petition in the High Court for matters involving fundamental rights." },
                                    { q: "What should I do if the bank publishes an auction notice for my property?", a: "You must contact a DRT specialist immediately. You have a small window to file a Securitization Application and an IA for a stay. Every day counts. Your lawyer will look for errors in the way the bank published the notice or calculated the reserve price." },
                                    { q: "Does filing a case in the DRT stop the interest on my loan?", a: "Filing a case doesn't automatically stop interest. However, if you win on the grounds of incorrect interest charging, the tribunal can order the bank to redo the calculations and remove illegal charges. This can significantly reduce the total amount." },
                                    { q: "Can I sell my property myself while it is being litigated in the DRT?", a: "Usually, you need the permission of the tribunal or the bank's consent to sell a property that is part of a recovery case. However, finding a buyer yourself and offering the proceeds to the bank as an OTS is often a very successful strategy that we help facilitate." },
                                    { q: "What is the 'Pre-deposit' requirement in DRAT appeals?", a: "When you appeal a DRT order to the DRAT, you are required to deposit a portion of the debt (often 50%, reducible to 25% by the PO). This is a heavy burden, which is why winning your case at the DRT level itself is always our primary goal." },
                                    { q: "Can the bank recover more than what they have claimed in the tribunal?", a: "No. The bank is bound by what they have claimed in their Original Application. They cannot suddenly add new charges that were not part of the initial lawsuit without amending their pleadings, which is a complex legal process that we can challenge." },
                                    { q: "What is an 'Ex-Parte' order in the DRT?", a: "An ex-parte order is passed when the borrower (defendant) fails to appear even after being served a summons. It is effectively a one-sided victory for the bank. If this happens, your lawyer must immediately file an application to 'set aside' the ex-parte order." },
                                    { q: "How are DRT cases different from Regular Court cases?", a: "DRT cases follow a 'summary procedure' and are governed by principles of natural justice rather than the strict Code of Civil Procedure (CPC). They are intended to be much faster, which is why having an agile lawyer who knows the tribunal's unique culture is vital." },
                                    { q: "Why choose SettleLoans for your DRT defense?", a: "SettleLoans provides a comprehensive solution. We combine the best DRT litigation advocates with professional negotiators. We don't just fight the bank in court; we fight to get you an exit strategy that allows you to be debt-free and stress-free." }
                                ].map((faq, i) => (
                                    <details key={i} className="group bg-white border border-[#DEDEDE] rounded-xl overflow-hidden hover:shadow-md transition-all border-b-4 border-b-[#1F5EFF]/20">
                                        <summary className="flex justify-between items-center p-5 cursor-pointer font-black text-[#2E2E2E] list-none bg-gray-50 group-open:bg-white transition-colors">
                                            <span className="text-lg">{i + 1}. {faq.q}</span>
                                            <span className="transition-transform group-open:rotate-180">
                                                <svg className="w-5 h-5 text-[#1F5EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                            </span>
                                        </summary>
                                        <div className="px-5 pb-5 text-[#2E2E2E] opacity-90 leading-relaxed border-t border-[#DEDEDE] pt-4 mt-0 bg-white">
                                            {faq.a}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </section>

                        <section id="final-call-to-action-drt" className="scroll-mt-32 mt-20">
                            <div className="bg-[#1F5EFF] rounded-3xl p-10 text-white text-center relative overflow-hidden shadow-2xl">
                                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                <h2 className="text-3xl md:text-5xl font-black mb-6 relative z-10 text-white">Fight Back with Professional Help</h2>
                                <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto relative z-10 text-white">
                                    The DRT is not a dead end; it is a legal battlefield. Our expert lawyers and negotiators are ready to fight for your rights and your assets.
                                </p>
                                <Link href="/contact" className="inline-block bg-white text-[#1F5EFF] font-black py-5 px-12 rounded-2xl hover:scale-105 transition-all shadow-xl text-xl relative z-10">
                                    Get Your Free Legal Analysis Now
                                </Link>
                                <p className="mt-6 text-sm opacity-70 relative z-10 italic">
                                    Trusted by 25,000+ borrowers across India. 100% Secure.
                                </p>
                            </div>
                        </section>

                        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
                            <p className="text-gray-400 text-sm italic">Disclaimer: SettleLoans connects clients with legal professionals and negotiation experts. Legal representation in the Debt Recovery Tribunal is provided by registered advocates through our partner network.</p>
                        </div>

                        {/* Mobile Footer CTA */}
                        <div className="lg:hidden mt-16 mb-8">
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10">
                                <div className="bg-[#1F5EFF] p-4 text-center">
                                    <h3 className="text-lg font-black text-white">Expert DRT Defense</h3>
                                </div>
                                <div className="p-6 text-center">
                                    <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                                        Don't let the DRT process overwhelm you. Talk to our specialized lawyers today.
                                    </p>
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md">
                                        Talk to an Expert
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Right Column: CTA & Related Pages */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-24 space-y-8">

                            {/* CTA Container */}
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                                <div className="bg-[#1F5EFF] p-4 text-center">
                                    <h3 className="text-lg font-black text-white flex items-center justify-center gap-2">
                                        <FontAwesomeIcon icon={faBuildingShield} />
                                        Lawyer Panel
                                    </h3>
                                </div>
                                <div className="p-6 text-center">
                                    <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                                        Direct access to specialized DRT and SARFAESI defense advocates.
                                    </p>
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg">
                                        Free Consultation
                                    </Link>
                                    <p className="mt-4 text-xs text-[#DEDEDE]/60 uppercase tracking-widest font-black">Confidential & Reliable</p>
                                </div>
                            </div>

                            {/* Related Pages Container */}
                            <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2 text-center">Tribunal Guides</h3>
                                <ul className="space-y-4 text-sm font-bold">
                                    <li>
                                        <Link href="/loan-settlement-lawyers" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            Our Legal Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/personal-loan-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            Personal Loan Settlement
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/business-loan-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            Business Debt Relief
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/ignoring-calls-of-recovery-agent" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            Stop Harassment
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
