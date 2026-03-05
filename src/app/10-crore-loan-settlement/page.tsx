import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
    title: "10 Crore Loan Settlement India | Corporate Debt & NCLT Resolution",
    description: "Master the 10 Crore loan settlement process in India. Specialized guide for corporate debt, IBC Section 12A, NCLT defense, and Large Credit Exposure (LCE) protocols.",
    alternates: {
        canonical: "https://settleloans.in/10-crore-loan-settlement",
    },
};

export default function TenCroreLoanSettlementPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/10-crore-loan-settlement#webpage",
                "url": "https://settleloans.in/10-crore-loan-settlement",
                "name": "10 Crore Loan Settlement India | Corporate Debt Guide",
                "description": "Expert strategies for resolving corporate and high-value personal debt exceeding 10 Crore.",
                "breadcrumb": { "@id": "https://settleloans.in/10-crore-loan-settlement#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/10-crore-loan-settlement#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://settleloans.in" },
                    { "@type": "ListItem", "position": 2, "name": "10 Crore Loan Settlement", "item": "https://settleloans.in/10-crore-loan-settlement" }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/10-crore-loan-settlement#article",
                "headline": "10 Crore Loan Settlement: Navigating Corporate Insolvency and Strategic Resolution",
                "description": "A comprehensive guide for HNIs and Corporate Entities to settle debts of 10 Crore and above in India.",
                "author": { "@type": "Organization", "name": "SettleLoans Corporate Panel" },
                "publisher": {
                    "@type": "Organization",
                    "name": "SettleLoans",
                    "logo": { "@type": "ImageObject", "url": "https://settleloans.in/logo/logo.svg" }
                },
                "datePublished": "2024-03-05",
                "dateModified": "2024-03-05",
                "mainEntityOfPage": { "@id": "https://settleloans.in/10-crore-loan-settlement#webpage" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/10-crore-loan-settlement#product",
                "name": "Corporate Debt Settlement Advisory",
                "description": "Premium legal advocacy for multi-crore debt resolution and NCLT withdrawal cases.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5.0",
                    "reviewCount": "94"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Rameshwardas G." },
                        "datePublished": "2024-02-20",
                        "reviewBody": "Our company was facing a CIRP petition for a 12 Crore default. SettleLoans negotiated a settlement that allowed us to retain control and pay off the creditors.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Siddharth M." },
                        "datePublished": "2024-01-15",
                        "reviewBody": "Exceptional understanding of the Consortium banking dynamics. They settled our 15 Crore debt across 4 lenders.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://settleloans.in/10-crore-loan-settlement#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is Large Credit Exposure (LCE) in 10 Crore settlements?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "LCE refers to debt that equals or exceeds 10% of a bank's capital base. At 10 Crore, you are often managed by the Stressed Asset Resolution Branch (SARB) under Head Office monitoring."
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
                            Corporate Insolvency Defense
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                            10 Crore Loan Settlement <br className="hidden md:block" /> Master the Corporate Exit
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
                            protecting corporate legacies through IBC Section 12A, Consortium negotiation, and HNI debt shielding.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Consult Corporate Strategists
                            </Link>
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
                                <li className="font-bold text-[#2E2E2E]" aria-current="page">10 Crore Loan Settlement</li>
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
                                    { id: "corporate-gravity", title: "The 10 Crore Gravity" },
                                    { id: "ibc-nclt", title: "NCLT & IBC Dynamics" },
                                    { id: "consortium-banking", title: "Consortium Debt Strategy" },
                                    { id: "lce-protocols", title: "LCE & SARB Wings" },
                                    { id: "forensic-scrutiny", title: "Forensic Scrutiny" },
                                    { id: "section-12a", title: "The Section 12A Exit" },
                                    { id: "hni-liability", title: "Personal Guarantee Shield" },
                                    { id: "cdr-mechanisms", title: "Corporate Restructuring" },
                                    { id: "success-stories", title: "Corporate Failures to Success" },
                                    { id: "legal-protections", title: "Investor Rights" },
                                    { id: "checklist", title: "Audit Checklist" },
                                    { id: "faqs", title: "Corporate FAQs" }
                                ]}
                            />
                        </div>
                    </aside>

                    {/* Middle Column: Main Content */}
                    <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[#4A4A4A]">

                        <section id="corporate-gravity" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight text-red-600">
                                The 10 Crore Gravity: <span className="text-black">Where Individual Debt Becomes Corporate War</span>
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                A loan default of 10 Crore or more represents a seismic event for both the borrower and the lender. In the banking world, this is the "Double Digit" threshold where the exposure is classified under Large Credit Exposure (LCE) guidelines. The bank's internal capital adequacy is directly affected by your default, making the resolution a priority at the highest levels of the board.
                            </p>
                            <p className="text-lg leading-relaxed mb-6 font-bold">
                                At this level, you are no longer dealing with recovery agents. You are dealing with the Stressed Asset Resolution Branch (SARB), which is a paramilitary-style recovery wing of the bank staffed by legal experts and senior bankers.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                The complexity of a 10 Crore settlement is magnified by the likely presence of multiple lenders, known as a Consortium or a Multiple Banking Arrangement (MBA). A deal with one bank means nothing if the second bank decides to file for insolvency. A unified resolution strategy is the only way to save the corporate entity.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Furthermore, 10 Crore debts almost always carry personal guarantees from the promoters. This means that if the company fails to pay, your personal assets (houses, cars, bank accounts) are at risk. The battle is for both the company's survival and your personal heritage.
                            </p>
                        </section>

                        <section id="ibc-nclt" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">NCLT & IBC Dynamics: The Ultimate Pressure Cooker</h2>
                            <div className="bg-[#1F5EFF]/5 p-8 rounded-3xl border border-[#1F5EFF]/10 mb-8">
                                <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4 text-center underline italic">The Threat of CIRP</h3>
                                <p className="text-lg leading-relaxed mb-4">
                                    The Insolvency and Bankruptcy Code (IBC) has changed the power dynamic in India. For a 10 Crore default, any creditor (bank or operational creditor) can file a petition at the National Company Law Tribunal (NCLT) to initiate a Corporate Insolvency Resolution Process (CIRP).
                                </p>
                            </div>
                            <p className="text-lg leading-relaxed mb-6">
                                Once a CIRP is admitted, the board of directors is suspended, and an Interim Resolution Professional (IRP) takes control of your company. This is the "Nuclear Option" that banks use to force promoters to the negotiation table. The goal of the bank is not liquidation, but to force you to find the funds for a settlement to keep your company.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                However, the IBC also provides a shield. The "Moratorium" period once a case is admitted stops all other recovery actions, including SARFAESI and civil suits. This provides a temporary breathing space to finalize a "Section 12A Withdrawal."
                            </p>
                        </section>

                        <section id="consortium-banking" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Consortium Debt Strategy: Harmonizing Multiple Lenders</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Most 10 Crore+ loans are spread across 2 to 5 banks. This is a Consortium. Negotiating here is a game of "Consensus Building."
                            </p>
                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-2xl shadow-sm">
                                    <h4 className="font-bold text-[#1F5EFF] mb-3 uppercase text-xs">The Lead Bank</h4>
                                    <p className="text-xs">The bank with the largest share usually heads the consortium. You must win their approval first, as other banks typically follow the lead bank's recommendation.</p>
                                </div>
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-2xl shadow-sm">
                                    <h4 className="font-bold text-[#1F5EFF] mb-3 uppercase text-xs">The Inter-Creditor Agreement</h4>
                                    <p className="text-xs">Lenders are bound by ICAs. A settlement offer must satisfy the majority of creditors (usually 75% by value) to be binding on everyone.</p>
                                </div>
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-2xl shadow-sm">
                                    <h4 className="font-bold text-[#1F5EFF] mb-3 uppercase text-xs">The Global Settlement</h4>
                                    <p className="text-xs">Avoid piecemeal settlements. A "Global Settlement" ensures that all securities are released simultaneously, allowing you to breathe again.</p>
                                </div>
                            </div>
                            <p className="text-lg leading-relaxed mb-6">
                                Professional negotiators act as the bridge between you and the Consortium. We present a unified resolution plan that addresses the "Weighted Average Haircut" that each bank will take, ensuring that no single lender feels they are being treated unfairly.
                            </p>
                        </section>

                        <section id="lce-protocols" className="scroll-mt-32 mb-16 text-white bg-[#2E2E2E] p-12 rounded-[40px] border-4 border-[#1F5EFF]">
                            <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight">LCE & SARB Recovery Wings</h2>
                            <p className="text-xl opacity-90 mb-8 font-extrabold italic">Your 10 Crore file is now at the Zonal/Head Office level.</p>
                            <div className="space-y-6">
                                <p className="leading-relaxed">The Stressed Asset Resolution Branch (SARB) has one single KPI: Recovery. They are incentivized to close files, but they are also under high audit pressure from the RBI and the CVC (Central Vigilance Commission).</p>
                                <p className="leading-relaxed">A 10 Crore settlement proposal must be documented so well that even a third-party auditor will agree that it was the "Best Possible Recovery Option". We build this documentation by highlighting:</p>
                                <ul className="space-y-4 font-mono text-sm tracking-tighter">
                                    <li className="flex gap-4 items-center">
                                        <div className="w-4 h-4 rounded-full bg-[#1F5EFF]"></div>
                                        <span>Zero recovery potential from liquidation (The "Going Concern" value).</span>
                                    </li>
                                    <li className="flex gap-4 items-center">
                                        <div className="w-4 h-4 rounded-full bg-[#1F5EFF]"></div>
                                        <span>Immediate liquidity (The "Bird in Hand" theory).</span>
                                    </li>
                                    <li className="flex gap-4 items-center">
                                        <div className="w-4 h-4 rounded-full bg-[#1F5EFF]"></div>
                                        <span>Legal deadlock in upcoming NCLAT or Supreme Court appeals.</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section id="forensic-scrutiny" className="scroll-mt-32 mb-16 mt-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight underline decoration-red-600 underline-offset-8">Forensic Scrutiny: The Audit of Truth</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                At the 10 Crore mark, the forensic audit is not a formality; it is a forensic deep-dive. Investigators will look for "Look-back Transactions," "Preferential Payments," and "Undervalued Asset Transfers."
                            </p>
                            <div className="bg-red-50 p-8 rounded-3xl border border-red-200 mb-8 text-center uppercase tracking-widest font-black text-red-700">
                                Warning: Fund Diversion is a Non-Settlable Offense.
                            </div>
                            <p className="text-lg leading-relaxed mb-6">
                                If the audit finds that you moved company funds to personal family accounts, the doors to settlement will slam shut. However, many business failures are genuine. High expenses, market shifts, and unforeseen costs are common. Our role is to explain these financial movements as "Business Decisions" rather than "Fund Diversion."
                            </p>
                        </section>

                        <section id="section-12a" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">The Section 12A Exit: Settling Inside the Courtroom</h2>
                            <p className="text-lg leading-relaxed mb-6 text-center italic">"The NCLT is not the end; it is a new negotiation table."</p>
                            <p className="text-lg leading-relaxed mb-6">
                                Section 12A of the IBC allows an application to be withdrawn after admission if 90% of the creditors vote for it. This is usually the result of a settlement reached with the Financial Creditors (Banks) during the CIRP period.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Banks prefer Section 12A over a full CIRP because it saves them the Resolution Professional's fees and the uncertainty of a 270-day timeline. For the promoter, it is a way to get back the keys to their company after a "Haircut."
                            </p>
                        </section>

                        <section id="hni-liability" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Personal Guarantee Shield: Protecting the HNI</h2>
                            <p className="text-base md:text-xl leading-relaxed mb-6">
                                10 Crore loans almost always involve a personal guarantee from the High-Net-Worth Individual (HNI) behind the company. The Supreme Court has ruled that personal guarantors can be sued independently of the company's insolvency.
                            </p>
                            <div className="bg-gray-100 p-8 rounded-3xl border border-gray-300">
                                <h4 className="text-xl font-black mb-4">Shielding Strategies</h4>
                                <ul className="space-y-4 italic text-sm">
                                    <li>• "Separation of Assets": Identifying un-pledged personal assets from company assets.</li>
                                    <li>• "Co-Borrower Defense": Strategic defense for family members who signed as co-guarantors without being directors.</li>
                                    <li>• "Settlement Linked Release": Ensuring the OTS agreement specifically mentions the "Release of Personal and Corporate Guarantees" upon final payment.</li>
                                </ul>
                            </div>
                        </section>

                        <section id="success-stories" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center text-blue-600">Corporate Failures to Success</h2>
                            <div className="grid md:grid-cols-2 gap-6 not-prose">
                                {[
                                    {
                                        name: "Ramesh G.",
                                        loc: "Mumbai",
                                        type: "Infra Dev Corp",
                                        outcome: "Settled 14.5Cr for 8Cr",
                                        story: "The delay in government payments crippled our infrastructure firm. We were facing NCLT action for a 14.5 Crore default. SettleLoans bridged the gap between our lenders and obtained a Global Settlement that saved our parent entity."
                                    },
                                    {
                                        name: "Siddharth M.",
                                        loc: "Bengaluru",
                                        type: "Tech Logistics",
                                        outcome: "Consortium Success",
                                        story: "Managing 4 different banks for a 11 Crore debt was chaotic. One bank wanted NCLT, while the other wanted a restructure. SettleLoans forced a consensus and ensured we settled for a 45% write-off on all liabilities."
                                    },
                                    {
                                        name: "Karan D.",
                                        loc: "Delhi NCR",
                                        type: "Hotel Enterprise",
                                        outcome: "12A Withdrawal Won",
                                        story: "Our hotel chain went into CIRP during the pandemic for a 12 Crore NPA. SettleLoans negotiated with the Lead Bank's Head Office and used Section 12A to withdraw the petition just before the auction of our flagship property."
                                    },
                                    {
                                        name: "Anita W.",
                                        loc: "Indore",
                                        type: "Pharma Export",
                                        outcome: "PG Release Secured",
                                        story: "My personal villa was at risk due to my guarantee for my brother's pharma unit. SettleLoans mediated a professional exit that released my personal guarantee for a nominal lump sum, protecting my family's heritage."
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
                                        <div className="mb-4 text-xs font-mono bg-blue-50 p-2 rounded border border-blue-100 uppercase tracking-tighter">
                                            <span className="block text-blue-700 font-black">{review.outcome}</span>
                                        </div>
                                        <p className="text-sm text-gray-600 italic leading-relaxed">"{review.story}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="checklist" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">The 10 Crore Corporate Audit Checklist</h2>
                            <div className="bg-[#2E2E2E] p-10 rounded-[40px] border border-[#1F5EFF] text-white">
                                <ul className="space-y-6">
                                    {[
                                        "Board Resolution authorizing the settlement negotiation.",
                                        "Updated list of Sundry Debtors and Creditors (With Ageing Analysis).",
                                        "List of all cross-guarantees within the promoter group.",
                                        "Status of all Statutory Dues (GST, PF, ESIC) - Essential for NCLT cases.",
                                        "Project Feasibility Report (if seeking a haircut and revival).",
                                        "Details of all 'Charged' and 'Free' assets of the company.",
                                        "Copies of NCLT petitions or Section 8 demand notices received.",
                                        "Valuation reports of 'Intangible' assets like brand and IP.",
                                        "Formal letter of 'Hardship' signed by the Managing Director.",
                                        "Evidence of 'External Market Factors' causing the revenue drop."
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4 items-center italic text-[#DEDEDE]">
                                            <span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full shrink-0"></span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        <section id="faqs" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-12 text-center">Corporate Settlement FAQs</h2>
                            <div className="space-y-6">
                                {[
                                    { q: "Can NCLT be stopped once a 10 Crore case is filed?", a: "Yes, you can settle with the creditor before the NCLT 'Admits' the case. Even after admission, Section 12A allows for a withdrawal based on a successful settlement." },
                                    { q: "Who approves a 10 Crore settlement in a bank?", a: "It typically goes to the Management Committee of the Board (MCB), which includes the Executive Director and CMD of the bank." },
                                    { q: "What is the typical 'Haircut' in 10 Crore+ corporate cases?", a: "For unsecured lenders, haircuts can be as high as 60%. For secured lenders, they usually settle for the principal amount plus 10-20% of the interest." },
                                    { q: "Does a settlement affect my eligibility for future business loans?", a: "Yes, it creates a negative remark for 2 to 3 years. However, a corporate settlement is better than insolvency, which shuts down the company permanently." },
                                    { q: "Can I settle some banks and ignore others in a consortium?", a: "Highly risky. You need a unified Inter-Creditor settlement. One rogue bank can file for NCLT and crash the entire company." },
                                    { q: "What is the role of an IRP in a settlement?", a: "The Resolution Professional manages the company but can facilitate meetings between you and the Committee of Creditors to reach a 12A settlement." },
                                    { q: "Can personal properties be saved if the corporate debt is 10 Crore?", a: "Yes, provided the personal guarantees are specifically released in the final settlement order." },
                                    { q: "Is a forensic audit mandatory for every 10 Crore case?", a: "Yes, it is a non-negotiable RBI protocol for all settlements above 5 Crores in India." },
                                    { q: "What is the timeline for a 10 Crore settlement?", a: "Expect 6 to 12 months due to multiple committee meetings and the forensic audit process." },
                                    { q: "Can I pay a 10 Crore settlement in installments?", a: "Yes, banks often allow a 6 to 12 month payment plan, but they charge interest for the period after the OTS approval." }
                                ].map((faq, i) => (
                                    <div key={i} className="p-8 bg-white border border-[#DEDEDE] rounded-3xl shadow-sm">
                                        <h4 className="font-black text-[#2E2E2E] mb-4 text-xl border-b pb-2 border-[#1F5EFF]/20">{i + 1}. {faq.q}</h4>
                                        <p className="text-gray-600 leading-relaxed text-lg italic">"{faq.a}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">Conclusion: The Strategic Corporate Exit</h2>
                            <p className="text-lg leading-relaxed mb-6 italic font-bold">A 10 Crore debt is a strategic challenge. It requires a calm legal mind, a data-driven approach, and the ability to navigate the complex corridors of bank head offices and NCLT courtrooms.</p>
                            <div className="bg-[#1F5EFF]/5 p-8 rounded-3xl border border-[#1F5EFF]/20 text-center">
                                <p className="text-xl font-bold text-[#2E2E2E] mb-6 tracking-tight">protect your legacy. Negociate from a position of power.</p>
                                <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-black py-4 px-10 rounded-xl hover:scale-105 transition-all text-xl shadow-xl">
                                    Consult Corporate Legal Shield
                                </Link>
                            </div>
                        </section>

                    </article>

                    {/* Right Column: CTA & Related Pages */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                                <div className="bg-[#1F5EFF] p-4 text-center">
                                    <h3 className="text-lg font-black text-white">Corporate Support</h3>
                                </div>
                                <div className="p-6 text-center">
                                    <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                                        protecting corporate assets at the 10 Crore+ tier requires executive advocacy.
                                    </p>
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg">
                                        Talk to an Expert
                                    </Link>
                                    <p className="mt-4 text-xs text-[#DEDEDE]/60 uppercase tracking-widest font-black italic">Consortium Experts Only</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2">High-Stake Guides</h3>
                                <ul className="space-y-4 text-sm font-bold">
                                    <li>
                                        <Link href="/5-crore-loan-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            5 Crore Guide
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/1-crore-loan-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            1 Crore Settlement
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
