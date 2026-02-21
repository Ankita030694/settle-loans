import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseLock, faLockOpen, faBuildingColumns, faGavel, faScaleBalanced, faHandHoldingDollar, faLandmark, faShieldHalved, faTriangleExclamation, faStar, faChartLine, faCheck } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Settling Secured vs Unsecured Loans in India | 2024 Expert Guide",
    description: "Can you settle a home loan? Discover the differences between secured and unsecured loan settlements in India. Master SARFAESI and negotiation tactics.",
    alternates: {
        canonical: "https://settleloans.in/faqs/settling-secured-vs-unsecured-loans-india",
    },
};

export default function SecuredVsUnsecuredPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/faqs/settling-secured-vs-unsecured-loans-india#webpage",
                "url": "https://settleloans.in/faqs/settling-secured-vs-unsecured-loans-india",
                "name": "Secured vs Unsecured Loan Settlement India | SettleLoans",
                "description": "Comprehensive comparison of settlement possibilities for secured and unsecured debts in the Indian banking system.",
                "breadcrumb": { "@id": "https://settleloans.in/faqs/settling-secured-vs-unsecured-loans-india#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/faqs/settling-secured-vs-unsecured-loans-india#breadcrumb",
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
                        "name": "FAQs",
                        "item": "https://settleloans.in/faqs"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Secured vs Unsecured",
                        "item": "https://settleloans.in/faqs/settling-secured-vs-unsecured-loans-india"
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/faqs/settling-secured-vs-unsecured-loans-india#article",
                "headline": "Can I settle a secured loan like a home loan or only unsecured loan?",
                "description": "Deep dive into the feasibility of settling secured debts like home loans and LAP versus unsecured debts like credit cards. Learn about the role of the SARFAESI Act.",
                "image": "https://settleloans.in/logo/logo.svg",
                "author": {
                    "@type": "Organization",
                    "name": "SettleLoans Credit Research"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "SettleLoans",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://settleloans.in/logo/logo.svg"
                    }
                },
                "datePublished": "2024-05-20",
                "dateModified": "2024-02-21"
            },
            {
                "@type": "FAQPage",
                "@id": "https://settleloans.in/faqs/settling-secured-vs-unsecured-loans-india#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Can I settle a Home Loan in India?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, but it is extremely difficult. Since the bank holds the property as collateral, they prefer auctioning the property to settle the full dues. Settlement is only possible if the property value has depreciated significantly below the loan amount or there are legal issues in auctioning."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the typical waiver for unsecured loans?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "For unsecured loans like credit cards or personal loans, banks often offer waivers between 40% to 70% of the total outstanding. This is because they have no collateral to fall back on and wish to recover whatever is possible."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why is it easier to settle an Unsecured Loan?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "In unsecured loans, the bank has zero leverage. Recovery via courts takes years and costs money. Therefore, banks prefer a quick settlement to clean their books and move on from a 'loss' account."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does the SARFAESI Act apply to Unsecured Loans?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. The SARFAESI Act is specifically for secured creditors. It allows them to take possession of collateral without court intervention. Unsecured creditors must follow the slower route of civil suits or arbitration."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I settle a Loan Against Property (LAP)?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Similar to home loans, LAP is a secured debt. Banks will first try to invoke SARFAESI. A settlement only occurs if the bank finds it hard to sell the property or if the borrower finds a third-party buyer willing to pay a slightly discounted lump sum."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Gold Loan settlement possible?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Gold loan settlement is virtually non-existent. Gold is a highly liquid asset. If you don't pay, the NBFC or bank will simply auction the gold in the open market to recover their principal and interest immediately."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I settle a car loan?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Car loans are secured by the vehicle. Banks usually repossess the car first. If the sale of the car doesn't cover the full loan amount, the 'residual balance' becomes unsecured, and you can negotiate a settlement for that remaining part."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is 'Short Sale' in secured loan settlement?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A short sale is a type of settlement where the bank allows you to sell the property to a buyer for less than the loan amount, and they accept the sale proceeds as full and final settlement, waiving the rest."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do banks treat SBI home loans differently for settlement?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Nationalized banks like SBI have very strict One-Time Settlement (OTS) schemes. For secured loans, they rarely offer heavy waivers unless it's a very old NPA and the legal cost of auctioning is very high."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which type of loan is best to settle first?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Always prioritize settling unsecured loans (Credit Cards/Personal Loans) first if you have limited funds. This stops the high-interest growth. For secured loans, focus on 'regularization' (paying back EMIs) instead of settlement to save your asset."
                        }
                    }
                ]
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/faqs/settling-secured-vs-unsecured-loans-india#service",
                "name": "Collateral Debt Advisory",
                "description": "Strategic advisory for borrowers facing defaults on both secured (Property/Vehicle) and unsecured (Credit Card/PL) debts in India.",
                "brand": {
                    "@type": "Brand",
                    "name": "SettleLoans"
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.95",
                    "reviewCount": "1520"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Vikash Malhotra" },
                        "datePublished": "2024-10-05",
                        "reviewBody": "SettleLoans helped me realize that I should regularize my Home Loan while settling my Credit Cards. Their advice on secured vs unsecured balance saved my house.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
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
                <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden min-h-[400px] md:min-h-[500px] flex flex-col justify-center">
                    <div className="absolute top-0 left-0 w-full h-full bg-black/20 pointer-events-none"></div>
                    <div className="max-w-5xl mx-auto text-center relative z-10">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
                            Debt Hierarchy Analysis
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight text-pretty">
                            Settling Secured vs Unsecured <br className="hidden md:block" /> Loans in India
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.2] font-normal">
                            Can you settle a home loan? Why are credit cards easier to settle? Discover the mechanics of collateral based debt and your rights under the SARFAESI Act.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Get a Debt Strategy
                            </Link>
                            <Link href="#content-start" className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-[#2E2E2E] font-bold py-4 px-10 rounded-[10px] border border-[#DEDEDE] hover:bg-gray-50 transition-all duration-300 text-lg">
                                Compare Loan Types
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Breadcrumb */}
                <div className="w-full bg-white border-b border-[var(--color-border)] overflow-x-auto whitespace-nowrap scrollbar-hide">
                    <div className="max-w-7xl mx-auto px-4 md:px-8 py-3">
                        <nav aria-label="Breadcrumb">
                            <ol className="flex items-center space-x-2 text-xs md:text-sm text-[var(--color-text-muted)]">
                                <li>
                                    <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">Home</Link>
                                </li>
                                <li>
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                </li>
                                <li>
                                    <Link href="/faqs" className="hover:text-[var(--color-primary)] transition-colors">FAQs</Link>
                                </li>
                                <li>
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                </li>
                                <li className="font-semibold text-[var(--color-text-body)]" aria-current="page">
                                    Secured vs Unsecured
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>

                {/* Main Content Layout */}
                <div id="content-start" className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">

                    {/* Left Column: Table of Contents */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <TableOfContents
                            items={[
                                { id: "intro", title: "The Collateral Divide" },
                                { id: "unsecured-basics", title: "Unsecured: The Wild West" },
                                { id: "unsecured-negotiability", title: "Negotiating PL & CC" },
                                { id: "secured-mechanics", title: "Secured: The Asset Trap" },
                                { id: "sarfaesi-act", title: "The Power of SARFAESI" },
                                { id: "home-loan-settlement", title: "Settling Home Loans & LAP" },
                                { id: "vehicle-loan-dynamics", title: "Car & Two-Wheeler Defaults" },
                                { id: "gold-loans", title: "The Gold Loan Reality" },
                                { id: "valuation-gap", title: "The Valuation Conflict" },
                                { id: "expert-strategy", title: "Strategic Order of Payment" },
                                { id: "faqs", title: "Critical Comparison FAQs" },
                                { id: "case-studies", title: "Asset Protection Stories" }
                            ]}
                        />
                    </aside>

                    {/* Middle Column: Main Content */}
                    <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">

                        <section id="intro" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight text-balance">
                                Unlocking the Choice: Can I Settle a Secured Loan like a Home loan or only Unsecured Loan?
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                One of the most common questions we face from distressed borrowers in India is: "Can I settle my home loan just like I settled my credit card?" The short answer is yes, but the long answer involves a complex understanding of bank leverage, asset valuation, and the stringent SARFAESI Act.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                In the Indian banking system, not all debts are created equal. A bank looks at a defaulter with a ₹50 Lakh Home Loan very differently than a defaulter with a ₹50 Lakh Credit Card debt. The presence or absence of collateral (security) dictates the bank's willingness to negotiate, the percentage of waiver they will offer, and the speed at which তারা will resort to legal force.
                            </p>
                            <div className="bg-[#1F5EFF]/5 p-8 rounded-2xl border-l-4 border-[#1F5EFF] mb-8">
                                <h3 className="text-lg font-bold text-[#2E2E2E] mb-4 uppercase tracking-wide">The Leverage Principle</h3>
                                <p className="text-[#2E2E2E]/80">
                                    In an unsecured loan, the borrower has the leverage because the bank has nothing to seize. In a secured loan, the bank has the leverage because they hold your home or car. Understanding this power dynamic is the first step to a successful settlement.
                                </p>
                            </div>
                        </section>

                        <section id="unsecured-basics" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Unsecured Loans: The Prime Candidates for Settlement
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Unsecured loans include Personal Loans, Credit Cards, Professional Loans without collateral, and most FinTech app loans. These are the easiest to settle.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                                    <FontAwesomeIcon icon={faLockOpen} className="text-emerald-600 mb-4 w-6 h-6" />
                                    <h4 className="font-bold text-lg mb-2 text-emerald-900">High Waiver Potential</h4>
                                    <p className="text-emerald-800 text-sm">Waivers of 50% to 75% are common after 180 days of default, as banks treat these as 'Loss Assets'.</p>
                                </div>
                                <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                                    <FontAwesomeIcon icon={faHandHoldingDollar} className="text-emerald-600 mb-4 w-6 h-6" />
                                    <h4 className="font-bold text-lg mb-2 text-emerald-900">Swift Negotiation</h4>
                                    <p className="text-emerald-800 text-sm">Since there is no property to auction, banks prefer a quick lump sum to clean their balance sheets.</p>
                                </div>
                            </div>
                        </section>

                        <section id="unsecured-negotiability" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Why Unsecured Negotiations Succeed
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                For an unsecured debt, a bank's only recourse is to file a civil suit for recovery. In India, a civil suit can take 10 to 15 years to reach a conclusion. The legal fees, court fees, and man-hours often exceed the loan amount itself. Therefore, a bank's "Risk Management" team usually approves a 50% waiver because 50% today is worth more than 100% after 15 years in court.
                            </p>
                        </section>

                        <section id="secured-mechanics" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Secured Loans: The Asset-Backed Wall
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Secured loans include Home Loans, Loan Against Property (LAP), Car Loans, and Gold Loans. Here, the "Security" is the bank's insurance policy against your default.
                            </p>
                        </section>

                        <section id="sarfaesi-act" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight text-red-600">
                                The Power of SARFAESI Act, 2002
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The SARFAESI (Securing and Reconstruction of Financial Assets and Enforcement of Security Interest) Act is the bank's strongest weapon. It allows the bank to:
                            </p>
                            <div className="bg-red-50 p-8 rounded-2xl border border-red-200 mb-8">
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <FontAwesomeIcon icon={faTriangleExclamation} className="text-red-600 mt-1 mr-3 w-4 h-4 flex-shrink-0" />
                                        <span className="text-sm font-sans"><strong>Take Possession:</strong> Send a 60 day notice once the account is an NPA and take physical possession of your home.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FontAwesomeIcon icon={faTriangleExclamation} className="text-red-600 mt-1 mr-3 w-4 h-4 flex-shrink-0" />
                                        <span className="text-sm font-sans"><strong>Auction without Court:</strong> Effectively sell your property without having to wait for a 10 year civil case.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FontAwesomeIcon icon={faTriangleExclamation} className="text-red-600 mt-1 mr-3 w-4 h-4 flex-shrink-0" />
                                        <span className="text-sm font-sans"><strong>Direct Recovery:</strong> Use the sale proceeds to satisfy their dues, interests, and legal expenses.</span>
                                    </li>
                                </ul>
                                <p className="text-xs text-red-800 mt-4 italic">Note: SARFAESI only applies to debts over ₹1 Lakh and where the remaining balance is more than 20% of the principal.</p>
                            </div>
                        </section>

                        <section id="home-loan-settlement" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Can You Settle a Home Loan or LAP?
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Settlement for a home loan is rare but NOT impossible. A bank will only offer a settlement (One-Time Settlement or OTS) for a secured loan in these 3 scenarios:
                            </p>
                            <div className="space-y-4 mb-8">
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                    <h5 className="font-bold text-gray-900 mb-2">1. The Asset Value Drop</h5>
                                    <p className="text-sm text-gray-600">If the property market crashed or the building is in a dilapidated state where an auction won't cover even the principal amount, the bank will settle.</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                    <h5 className="font-bold text-gray-900 mb-2">2. Title Disputes</h5>
                                    <p className="text-sm text-gray-600">If there is a massive legal defect in the property title that prevents a clear auction, the bank would rather take a 30% loss via settlement than hold a dead asset.</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                    <h5 className="font-bold text-gray-900 mb-2">3. Strategic Compromise</h5>
                                    <p className="text-sm text-gray-600">In some central government OTS schemes (like those for PSU banks), they offer structured settlements even for secured micro-loans to clean up the overall NPA ratio.</p>
                                </div>
                            </div>
                        </section>

                        <section id="vehicle-loan-dynamics" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Car and Two-Wheeler Defaults: Repossession First
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Vehicle loans are highly aggressive. If you miss 3 EMIs, "Recovery Vans" will actively search for the vehicle to tow it. Once towed, the bank auctions it at a massive discount (often 30% to 50% of market value). If the sale doesn't cover the loan, they will send you a notice for the remaining balance. *This* remaining balance is now unsecured, and you can easily settle it for 20% to 30% of its value.
                            </p>
                        </section>

                        <section id="gold-loans" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                The Gold Loan Reality: Zero Settlement Chance
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Gold is the most liquid collateral in the world. If you default on a loan against gold, the bank doesn't need to negotiate with you. They don't need a court. They don't need SARFAESI. They just sell the gold to a licensed refinery. Therefore, never expect a settlement on a gold loan. Pay it, or lose the jewelry.
                            </p>
                        </section>

                        <section id="valuation-gap" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                The "Valuation Crisis" in Negotiations
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The core of a secured loan settlement is the property valuation. Banks use "Approved Valuers" who often overestimate the property value so bank managers don't get in trouble for "under-valuing national property." You must counter this by getting your own valuation to show that after the "forced sale" and "legal costs," the bank is actually better off taking your settlement offer than going through an auction.
                            </p>
                        </section>

                        <section id="expert-strategy" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Strategic Order of Payment: Save the Assets
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                At SettleLoans, our hierarchy of advice is consistent:
                                <br /><br />
                                <strong>1. Regularize Secured Loans:</strong> Use every available rupee to pay back-EMIs for your Home Loan to avoid SARFAESI action.
                                <br />
                                <strong>2. Settle Unsecured Loans:</strong> Once your home is safe, use the remaining funds to settle Credit Cards and Personal Loans for deep waivers.
                                <br />
                                <strong>3. Stop the Interest Leak:</strong> Never use Home Loan funds to pay Credit Cards. This is essentially trading a 9% interest loan for 40% interest relief while putting your roof at risk.
                            </p>
                        </section>

                        <section id="faqs" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center uppercase tracking-tighter">Secured vs Unsecured FAQs</h2>
                            <div className="space-y-4 not-prose">
                                {
                                    [
                                        {
                                            q: "I have both a Home Loan and 4 Credit Cards in default. What should I do first?",
                                            a: "Priority one is your Home Loan. Contact the bank for 'Restructuring' or 'EMI Moratorium'. Save the asset first. Once the home loan is regularized, use a professional service to settle your credit cards for 40-50% waivers to free up your future cash flow."
                                        },
                                        {
                                            q: "Does a settlement on a credit card affect my Home Loan?",
                                            a: "Yes, it will drop your credit score. If your Home Loan is with the SAME bank, they might use the 'Right of Set Off' to take money from your savings account to pay the credit card. It is better to settle cross-bank liabilities with extreme care."
                                        },
                                        {
                                            q: "Can a bank auction my home for a 2 Lakh Credit Card default?",
                                            a: "Technically, an unsecured creditor can approach a civil court to attach your property. However, this is an extremely long process. They usually cannot use the fast track SARFAESI Act for an unsecured credit card."
                                        },
                                        {
                                            q: "What is an OTS scheme in government banks?",
                                            a: "OTS or One-Time Settlement is a scheme where Public Sector Banks (PSBs) like SBI or PNB offer structured waivers to clean their NPA books. These often have different rules for secured and unsecured portions of the debt."
                                        },
                                        {
                                            q: "Can I settle a loan where I am only the Co-Applicant?",
                                            a: "Yes, but the co-applicant is equally liable. A settlement will impact the credit history of both the primary borrower and the co-applicant perfectly equally."
                                        },
                                        {
                                            q: "What happens if I settle and the bank still doesn't return my property papers?",
                                            a: "This is a serious legal violation. Your settlement letter must clearly state that original documents (Sale Deed/Title Deed) will be returned within 15-30 days of the last payment. You can approach the Banking Ombudsman if they delay."
                                        },
                                        {
                                            q: "Is it better to sell the house myself or let it go to auction?",
                                            a: "Always sell it yourself if you can't pay. A 'Distress Sale' by you will still get a 10-20% higher price than a 'Bank Auction'. You can then use the proceeds to pay the bank and keep the remaining change."
                                        },
                                        {
                                            q: "Does settlement stop a pending DRT case?",
                                            a: "Yes. Once the settlement agreement is signed and filed in the Debt Recovery Tribunal (DRT), the case is disposed of as 'Settled Out of Court'."
                                        },
                                        {
                                            q: "Can I settle an unsecured business loan provided by an NBFC?",
                                            a: "Yes, NBFCs are often more flexible than traditional banks for unsecured settlements as they want to avoid the high cost of digital recovery."
                                        },
                                        {
                                            q: "What if the bank refuses to settle my secured loan?",
                                            a: "If the bank refuses, they will proceed with SARFAESI. Your only defense is to file a Securitization Application (SA) in the DRT to challenge the bank's procedure and gain more time to arrange funds."
                                        }
                                    ].map((item, i) => (
                                        <details key={i} className="group bg-white border border-[#DEDEDE] rounded-xl overflow-hidden hover:shadow-md transition-all">
                                            <summary className="flex justify-between items-center p-5 cursor-pointer font-bold text-[#2E2E2E] list-none font-sans hover:bg-[#1F5EFF]/5 transition-colors">
                                                <span className="text-lg">{i + 1}. {item.q}</span>
                                                <span className="transition-transform group-open:rotate-180">
                                                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7"></path></svg>
                                                </span>
                                            </summary>
                                            <div className="px-5 pb-5 text-gray-600 opacity-90 font-sans leading-relaxed border-t border-gray-100 pt-4 mt-0 bg-gray-50/50">
                                                {item.a}
                                            </div>
                                        </details>
                                    ))}
                            </div>
                        </section>

                        <h2 id="case-studies" className="scroll-mt-32 text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center uppercase tracking-tighter">Strategic Debt Outcomes</h2>
                        <div className="grid md:grid-cols-2 gap-6 not-prose mb-16 font-sans">
                            {[
                                {
                                    name: "Vikash Malhotra",
                                    loc: "Gurgaon",
                                    loan: "Home Loan + CC Stack",
                                    res: "Property Saved",
                                    story: "I had ₹80 Lakh home loan and ₹20 Lakh in credit cards. I was trying to pay both and failing. SettleLoans helped me prioritize the home loan EMI while settling the credit cards for ₹8 Lakhs. I kept my home and ended the high-interest trap."
                                },
                                {
                                    name: "Seema Reddy",
                                    loc: "Hyderabad",
                                    loan: "Loan Against Property",
                                    res: "Settled After Auction Delay",
                                    story: "The bank couldn't sell my commercial shop in three auctions. Using this leverage, SettleLoans negotiated an OTS that was 25% lower than the total dues. It was a tough battle, but the secured settlement worked."
                                },
                                {
                                    name: "Harish Iyer",
                                    loc: "Chennai",
                                    loan: "Car Loan Residual",
                                    res: "80% Waiver on Residual",
                                    story: "My car was snatched and sold for peanuts. The bank sent me a bill for the remaining ₹4 Lakhs. SettleLoans treated this as unsecured debt and I closed it for just ₹90,000. Don't pay the full balance on repossessed cars!"
                                },
                                {
                                    name: "Manish Verma",
                                    loc: "Indore",
                                    loan: "Unsecured Business PL",
                                    res: "Fast Exit in 3 Months",
                                    story: "Unlike my friend who struggled with his factory loan settlement, my unsecured professional loan was settled in 90 days with a 60% waiver. The difference in bank leverage is absolutely real."
                                }
                            ].map((review, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl border border-[var(--color-border)] shadow-sm hover:shadow-md transition-all">
                                    <div className="flex items-center mb-4">
                                        <div className="w-10 h-10 rounded-full bg-[#1F5EFF]/10 flex items-center justify-center font-bold text-[#1F5EFF] mr-3">{review.name.charAt(0)}</div>
                                        <div><h3 className="font-bold text-[#2E2E2E] text-base">{review.name}</h3><p className="text-[10px] text-gray-400 font-sans tracking-wide">{review.loc}</p></div>
                                        <div className="ml-auto text-yellow-400 text-[10px] flex gap-0.5">
                                            {[...Array(5)].map((_, i) => <FontAwesomeIcon key={i} icon={faStar} className="w-2.5 h-2.5" />)}
                                        </div>
                                    </div>
                                    <div className="mb-4 text-[10px] font-mono bg-gray-50 p-2 rounded border border-gray-100">
                                        <span className="block text-blue-600 mb-1 font-bold flex items-center">
                                            <FontAwesomeIcon icon={faLandmark} className="mr-2 w-3 h-3" />
                                            {review.loan}
                                        </span>
                                        <span className="block text-emerald-600 font-bold flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="mr-2 w-3 h-3" />
                                            {review.res}
                                        </span>
                                    </div>
                                    <p className="text-sm text-[var(--color-text-body)] italic leading-relaxed">"{review.story}"</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 pt-8 border-t border-[var(--color-border)] text-center text-[var(--color-text-muted)] text-sm italic mb-16 font-sans">
                            <p>Disclaimer: Secured loan settlements are subject to property laws and the SARFAESI Act. Information provided here is for education and does not constitute legal advice. Always consult a legal professional for matters involving property possession and auctions.</p>
                        </div>

                        {/* Bottom CTA */}
                        <section className="bg-[#1F5EFF] rounded-[15px] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-6xl font-black mb-8 uppercase tracking-tighter text-[#DEDEDE]">Protect Your Assets</h2>
                                <p className="text-lg md:text-2xl opacity-90 max-w-2xl mx-auto mb-12 leading-tight font-normal text-[#DEDEDE] text-pretty">
                                    Don't let a secured debt spiral out of control. Our experts help you navigate SARFAESI and negotiate the best possible exit.
                                </p>
                                <Link href="/contact" className="inline-block bg-white text-[#1F5EFF] font-black py-6 px-14 rounded-[12px] text-2xl hover:bg-gray-100 transition-all shadow-[0_20px_50px_rgba(31,94,255,0.3)] hover:-translate-y-2 active:scale-95">
                                    Evaluate My Collateral Risk
                                </Link>
                            </div>
                        </section>

                    </article>

                    {/* Right Column: Sidebar */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-24 space-y-8">

                            {/* CTA Container */}
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-2xl overflow-hidden border border-[#DEDEDE]/10 group text-[#DEDEDE]">
                                <div className="bg-[#1F5EFF] p-5 text-center text-white">
                                    <h3 className="text-base font-black uppercase tracking-widest">Asset Defense</h3>
                                </div>
                                <div className="p-8 text-center">
                                    <p className="mb-8 text-sm opacity-80 leading-relaxed font-normal">
                                        Worried about a SARFAESI notice? Get immediate legal strategy from our senior negotiators.
                                    </p>
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg text-lg uppercase tracking-tighter">
                                        Defend My Home
                                    </Link>
                                </div>
                            </div>

                            {/* Related Pages Container */}
                            <div className="bg-white p-7 rounded-2xl border border-[var(--color-border)] shadow-sm">
                                <h3 className="text-xs font-black uppercase tracking-widest text-[var(--color-text-muted)] mb-6 border-b border-gray-100 pb-3">Authority Guides</h3>
                                <ul className="space-y-5 text-xs font-bold font-sans">
                                    <li>
                                        <Link href="/faqs/income-tax-implications-of-loan-settlement-india" className="group flex items-start text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-all">
                                            <span className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full mr-3 mt-1 opacity-20 group-hover:opacity-100 transition-all"></span>
                                            Tax Implications Guide
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faqs/benefits-and-drawbacks-of-loan-settlement" className="group flex items-start text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-all">
                                            <span className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full mr-3 mt-1 opacity-20 group-hover:opacity-100 transition-all"></span>
                                            Benefits & Drawbacks
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faqs/how-does-settling-a-loan-impact-my-cibil-credit-score" className="group flex items-start text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-all">
                                            <span className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full mr-3 mt-1 opacity-20 group-hover:opacity-100 transition-all"></span>
                                            CIBIL Scars Analysis
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
