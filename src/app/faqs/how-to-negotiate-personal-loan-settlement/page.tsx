import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation, faStar, faCheck } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "How to Negotiate a Personal Loan Settlement with Lenders | 2024-25 Guide",
    description: "Master the art of personal loan settlement negotiation in India. Get expert tips, learn RBI guidelines, avoid common mistakes, and save up to 50-70% on your debt.",
    alternates: {
        canonical: "https://settleloans.in/faqs/how-to-negotiate-personal-loan-settlement",
    },
};

export default function NegotiatePersonalLoanSettlementPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/faqs/how-to-negotiate-personal-loan-settlement#webpage",
                "url": "https://settleloans.in/faqs/how-to-negotiate-personal-loan-settlement",
                "name": "How to Negotiate a Personal Loan Settlement with Lenders | Professional Guide",
                "description": "A comprehensive guide on negotiating personal loan settlements with banks and NBFCs in India, covering strategies, legal rights, and RBI guidelines.",
                "breadcrumb": { "@id": "https://settleloans.in/faqs/how-to-negotiate-personal-loan-settlement#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/faqs/how-to-negotiate-personal-loan-settlement#breadcrumb",
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
                        "name": "Negotiate Personal Loan Settlement",
                        "item": "https://settleloans.in/faqs/how-to-negotiate-personal-loan-settlement"
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/faqs/how-to-negotiate-personal-loan-settlement#article",
                "headline": "How can I negotiate a personal loan settlement with lenders",
                "description": "The ultimate roadmap to negotiating a debt settlement for personal loans in India. Learn the strategies used by professionals to reduce debt by 50% or more.",
                "image": "https://settleloans.in/logo/logo.svg",
                "author": {
                    "@type": "Organization",
                    "name": "SettleLoans Expert Team"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "SettleLoans",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://settleloans.in/logo/logo.svg"
                    }
                },
                "datePublished": "2024-05-15",
                "dateModified": "2024-02-21"
            },
            {
                "@type": "FAQPage",
                "@id": "https://settleloans.in/faqs/how-to-negotiate-personal-loan-settlement#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is the best time to initiate a loan settlement negotiation?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The ideal time is typically after you have missed at least 3 to 6 consecutive EMIs. At this stage, the bank classifies the account as a Non-Performing Asset (NPA) and is more willing to negotiate a lump-sum settlement to recover at least the principal amount."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Will settling a personal loan affect my credit score?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, settling a loan will negatively impact your credit score as it will be marked as 'Settled' rather than 'Closed' in your CIBIL report. However, it is better than staying in a perpetual default state. You can rebuild your credit score over time after settlement."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can a lender legally refuse a settlement offer?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, lenders are not legally obligated to accept a settlement. It is a mutual agreement. However, if you prove genuine financial hardship (like medical issues or job loss), most banks prefer some recovery over total loss."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What percentage of the outstanding amount should I offer for settlement?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A good starting point is 25% to 30% of the total outstanding amount. Final settlements usually land between 40% and 60%, depending on the age of the debt and the lender's internal policies."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What documents do I need for a loan settlement negotiation?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "You should have proof of financial hardship such as a termination letter, medical reports, bank statements showing low balance, and a formal settlement request letter."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does RBI have any specific rules for personal loan settlements?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "RBI allows banks to have their own board-approved policies for compromise settlements. However, RBI strictly prohibits harassment by recovery agents and mandates fair treatment of borrowers."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I settle multiple personal loans at once?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, but it requires careful fund management. It is often better to prioritize the most aggressive lenders or the ones with the highest interest rates first if you have limited funds."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is a settled loan mark permanent on my CIBIL report?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A 'Settled' status typically stays on your credit report for 7 years. However, its impact reduces over time as you build a fresh history of responsible credit behavior."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Should I use a debt settlement agency or do it myself?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Agencies like SettleLoans have professional negotiators who know the 'floor rates' of banks and can protect you from harassment. While you can do it yourself, professionals often achieve much deeper discounts."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What happens if I fail to pay the settled amount on time?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "If you miss the deadline mentioned in the settlement letter, the agreement becomes void, and the bank will demand the full original outstanding amount again. Always ensure funds are ready before signing."
                        }
                    }
                ]
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/faqs/how-to-negotiate-personal-loan-settlement#service",
                "name": "Professional Loan Settlement Negotiation",
                "description": "Expert negotiation services to help you settle your personal loans for a fraction of the total cost while providing legal protection.",
                "brand": {
                    "@type": "Brand",
                    "name": "SettleLoans"
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "1250"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Rajesh Kumar" },
                        "datePublished": "2024-12-10",
                        "reviewBody": "SettleLoans helped me negotiate my HDFC personal loan from 8 lakhs down to 3.5 lakhs. The process was transparent and the harassment stopped within days.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Sunil Mehta" },
                        "datePublished": "2024-12-28",
                        "reviewBody": "My personal loan settlement was stuck for months. SettleLoans got it closed in 3 weeks with a 60% waiver.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Deepa Francis" },
                        "datePublished": "2025-01-05",
                        "reviewBody": "Saved me from a legal notice. Highly professional team who knows how to handle bank managers effectively.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Meera Krishnan" },
                        "datePublished": "2025-01-15",
                        "reviewBody": "Extremely professional. They handled the legal notices and got me a second chance at settlement when I had almost given up.",
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
                            Debt Recovery Experts
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                            How can I negotiate a personal <br className="hidden md:block" /> loan settlement with lenders
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.2] font-normal">
                            Take control of your financial future. Learn the exact strategies used by professional negotiators to settle debts for up to 50% less while protecting your legal rights.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Get Professional Help
                            </Link>
                            <Link href="#introduction" className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-[#2E2E2E] font-bold py-4 px-10 rounded-[10px] border border-[#DEDEDE] hover:bg-gray-50 transition-all duration-300 text-lg">
                                Read Expert Guide
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Breadcrumb - Responsive Scroll */}
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
                                    Negotiation Strategies
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">

                    {/* Left Column: Table of Contents (Sticky) */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <TableOfContents
                            items={[
                                { id: "introduction", title: "Introduction to Negotiation" },
                                { id: "rbi-guidelines", title: "RBI Guidelines Explained" },
                                { id: "financial-assessment", title: "Self-Financial Assessment" },
                                { id: "negotiation-phase-1", title: "Phase 1: Timing is Key" },
                                { id: "negotiation-phase-2", title: "Phase 2: The First Offer" },
                                { id: "negotiation-phase-3", title: "Phase 3: Hardship Proofs" },
                                { id: "common-mistakes", title: "10 Mistakes to Avoid" },
                                { id: "settlement-letter-checklist", title: "Settlement Letter Checklist" },
                                { id: "post-settlement", title: "Life After Settlement" },
                                { id: "why-settleloans", title: "Why Professional Help?" },
                                { id: "faqs", title: "Expert FAQs" }
                            ]}
                        />
                    </aside>

                    {/* Middle Column: Main Content */}
                    <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">

                        <section id="introduction" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Understanding the Art of Personal Loan Settlement Negotiation
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Negotiating a personal loan settlement is perhaps one of the most critical financial skills for anyone trapped in a debt spiral. In the Indian financial landscape, personal loans are unsecured, meaning they are not backed by collateral like a house or a car. This gives the borrower a unique leverage point when things go south financially, but it also opens the door to aggressive recovery tactics from lenders.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                When we talk about negotiation, we are not talking about "dodging" a debt. We are talking about a professional compromise where the bank recognizes your inability to pay the full amount and agrees to accept a lump sum to close the account. This process, often referred to as a One Time Settlement (OTS) or a compromise settlement, is a recognized banking practice governed by broad RBI principles.
                            </p>
                            <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-blue-500 mb-8">
                                <h3 className="text-lg font-bold text-blue-900 mb-4">The Psychology of the Lender</h3>
                                <p className="text-blue-800">
                                    Banks are business entities. Their primary goal is to maximize profit and minimize loss. Once a loan becomes a Non-Performing Asset (NPA), it starts eating into the bank's profitability because they have to set aside "provisions" for that bad debt. This is why, after a certain point of delinquency, a bank is often happier to take 40% of the money back than to have 0% on a permanently failed asset.
                                </p>
                            </div>
                            <p className="text-lg leading-relaxed mb-6">
                                In this guide, we will walk through the exact steps, techniques, and legal frameworks you need to successfully navigate this high-stakes environment. Whether you are dealing with a large private bank like HDFC or ICICI, or a digital lending app, the principles of negotiation remain largely consistent.
                            </p>
                        </section>

                        <section id="rbi-guidelines" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                RBI Guidelines: Your Legal Shield
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                One of the biggest misconceptions in India is that borrowers have no rights once they default. This couldn't be further from the truth. The Reserve Bank of India (RBI) has issued several circulars and guidelines meant to protect borrowers from predatory practices.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                    <h4 className="font-bold text-lg mb-3 text-gray-900">Fair Recovery Practices</h4>
                                    <p className="text-gray-700 text-sm">RBI prohibits recovery agents from using physical or mental harassment. They cannot call you before 8 AM or after 7 PM. They cannot threaten you or use abusive language.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                    <h4 className="font-bold text-xl mb-3 text-gray-900">Compromise Settlement Policy</h4>
                                    <p className="text-gray-700 text-sm">Under the June 2023 RBI circular, regulated entities (Banks/NBFCs) must have a board-approved policy for compromise settlements for all borrowers, including individuals.</p>
                                </div>
                            </div>
                            <p className="text-lg leading-relaxed mb-6">
                                Knowing these guidelines is the first step in negotiation. When you speak to a bank officer, mentioning that you are aware of the "RBI Fair Practices Code" immediately changes the tone of the conversation. It signals that you are an informed borrower who cannot be easily intimidated.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                The RBI also mandates that every bank must have a grievance redressal mechanism. If a recovery agent crosses the line, you have the right to complain to the bank's nodal officer and, if not resolved, to the Banking Ombudsman. This "ombudsman threat" is a powerful tool in your negotiation arsenal.
                            </p>
                        </section>

                        <section id="financial-assessment" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                The Foundation: Self-Financial Assessment
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                You cannot negotiate effectively if you do not know exactly what you can afford. This is where most borrowers fail. They make a settlement offer out of fear, only to realize later that they don't have the cash to fulfill it.
                            </p>
                            <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                                <h3 className="text-lg font-bold mb-4">Steps for a Deep Audit:</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="text-[var(--color-primary)] font-bold mr-3">01.</span>
                                        <p className="text-gray-800"><strong>Calculate Total Debt:</strong> List every single loan, credit card, and interest-bearing debt. Know your exact outstanding as of TODAY, not 6 months ago.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[var(--color-primary)] font-bold mr-3">02.</span>
                                        <p className="text-gray-800"><strong>Identify Hardship:</strong> Why can't you pay? Is it a job loss? Medical emergency? Write it down clearly. The bank needs a "valid" reason to justify the loss to their audit team.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[var(--color-primary)] font-bold mr-3">03.</span>
                                        <p className="text-gray-800"><strong>Liquid Cash Reserves:</strong> How much lump sum can you arrange in 30 days? This is your "Settlement Fund". Never offer more than this.</p>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-lg leading-relaxed mb-6">
                                Professional negotiators often use a "Hardship File". This is a collection of documents that proves your financial situation. If you tell a bank you lost your job but your bank statement shows regular Netflix and Zomato spending, your negotiation power drops to zero. You must demonstrate that every rupee is being spent on survival.
                            </p>
                        </section>

                        <section id="negotiation-phase-1" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Phase 1: Timing is the Secret Weapon
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                In debt recovery, time is either your enemy or your best friend. If you have missed only one EMI, the bank will not settle. They still believe they can force you to pay the full amount through regular pressure.
                            </p>
                            <div className="relative overflow-hidden bg-white border border-[var(--color-border)] rounded-2xl mb-8">
                                <div className="flex flex-col md:flex-row">
                                    <div className="md:w-1/3 bg-[var(--color-primary)] text-white p-8 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-5xl font-bold mb-2">90+</div>
                                            <div className="text-sm font-medium uppercase tracking-widest">Days Delinquent</div>
                                        </div>
                                    </div>
                                    <div className="md:w-2/3 p-8">
                                        <h4 className="text-xl font-bold text-gray-900 mb-4">The NPA Threshold</h4>
                                        <p className="text-gray-700 leading-relaxed text-sm">
                                            Once you cross 90 days of non-payment, your account is classified as a Non-Performing Asset (NPA). This is the "Golden Window" for negotiation. The bank's focus shifts from "how to get the full amount" to "how to get anything back at all".
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-lg leading-relaxed mb-6">
                                Wait for the bank to start making "Discount Offers". Usually, around the 180-day mark (6 months), banks become much more aggressive with their settlement offers. They might send you letters offering a 20% or 30% waiver. This is just the starting point of the negotiation.
                            </p>
                        </section>

                        <section id="negotiation-phase-2" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Phase 2: The Art of the First Offer
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                When the bank finally calls you to discuss a settlement, or when you decide to reach out to their settlement department, never accept their first offer. It is always a high-ball figure designed to see if you have hidden funds.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                <strong>Strategy:</strong> Start with a figure that is intentionally low but not insulting. If you owe 10 lakhs, the bank might offer to settle at 7 lakhs. You should counter-offer with 2 lakhs, explaining your extreme hardship.
                            </p>
                            <div className="bg-orange-50 p-8 rounded-2xl border border-orange-200 mb-8">
                                <h3 className="text-lg font-bold text-orange-950 mb-4 italic">Pro Tip: Use the "Third Party" Technique</h3>
                                <p className="text-orange-900 leading-relaxed font-medium">
                                    "I don't have this money myself. My elderly parents/spouse/friend is willing to lend me a specific amount (say 2.5 lakhs) only if it settles this loan completely. Otherwise, they will use that money for my medical bills." This shifts the focus from your income to a limited external resource that the bank might lose if they don't act fast.
                                </p>
                            </div>
                            <p className="text-lg leading-relaxed mb-6">
                                Remember, every word you say is recorded or noted. Be consistent. If you tell one agent you have a job and another you are unemployed, the bank's internal system will flag you, and the settlement will be rejected by the audit team.
                            </p>
                        </section>

                        <section id="negotiation-phase-3" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Phase 3: Leveraging Hardship Proofs
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                In professional negotiation, "Truth is the ultimate leverage". If you are genuinely in trouble, you have nothing to hide. Presenting documents makes your case credible.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                                    <h5 className="font-bold text-gray-800 mb-2">Medical Hardship</h5>
                                    <p className="text-xs text-gray-600">Provide hospital discharge summaries, bills exceeding 1 lakh, or proof of chronic illness requiring ongoing expensive treatment.</p>
                                </div>
                                <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                                    <h5 className="font-bold text-gray-800 mb-2">Employment Loss</h5>
                                    <p className="text-xs text-gray-600">Termination letter, a 'closed' business registration certificate, or bank statements showing zero salary inflow for 3+ months.</p>
                                </div>
                                <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                                    <h5 className="font-bold text-gray-800 mb-2">Family Crisis</h5>
                                    <p className="text-xs text-gray-600">Death certificate of the primary breadwinner or proof of sudden legal liabilities in the family.</p>
                                </div>
                                <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                                    <h5 className="font-bold text-gray-800 mb-2">Multi-Debt Scenario</h5>
                                    <p className="text-xs text-gray-600">Show the bank that you have 5 other lenders. "I have 5 lakhs total. Whoever settles first with 1 lakh gets it. The rest get nothing."</p>
                                </div>
                            </div>
                            <p className="text-lg leading-relaxed mb-6">
                                Banks have "Settlement Committees". The officer you talk to doesn't usually have the power to approve your 70% discount. They have to present your case to a committee. The better the documentation you provide, the easier it is for that officer to get your case approved. You are essentially giving the officer the "ammunition" they need to fight for YOUR settlement.
                            </p>
                        </section>

                        <section id="common-mistakes" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                10 Fatal Negotiation Mistakes
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Avoiding these pitfalls is just as important as knowing the strategies. One wrong move can restart the whole recovery process.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { t: "Accepting Verbal Promises", d: "If it's not on a bank-headed letter with a stamp, it DOES NOT EXIST. Never pay a single rupee based on a phone call or a WhatsApp message." },
                                    { t: "Being Abusive", d: "Anger loses negotiations. Stay calm and professional. If you abuse the bank staff, they will mark your account as 'Refusal to Pay' rather than 'Hardship'." },
                                    { t: "Showing Desperation", d: "If the bank knows you NEED to settle for a visa or a marriage, they will hold out for a much higher amount." },
                                    { t: "Paying Small Amounts During Negotiation", d: "Never pay 'half EMIs' while negotiating. It resets the delinquency clock and kills your NPA leverage." },
                                    { t: "Signing Blank Papers", d: "Never sign any document that has blank fields regarding the settlement amount or date." },
                                    { t: "Ignoring Legal Notices", d: "Always reply to legal notices through a lawyer or a professional firm. Silence is interpreted as admission of guilt by courts." },
                                    { t: "Lying About Finances", d: "Banks have your CIBIL history. They know about your other accounts. Be honest about your assets." },
                                    { t: "Not Checking for Fake Letters", d: "Sometimes recovery agents issue fake letters to meet their targets. Always verify the letter's authenticity with the branch manager." },
                                    { t: "Settling Too Early", d: "Settling in the first month of default usually only gets you a 5-10% discount. Be patient." },
                                    { t: "Expecting Credit Score to Stay Same", d: "Accept that your credit score will drop. Don't let this surprise you later." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">{idx + 1}</div>
                                        <div>
                                            <h5 className="font-bold text-gray-900">{item.t}</h5>
                                            <p className="text-sm text-gray-600">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="settlement-letter-checklist" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                The Settlement Letter Checklist
                            </h2>
                            <p className="text-lg leading-relaxed mb-8">
                                The "Settlement Letter" or "Compromise Offer Letter" is the most important document in this process. Before you make any payment, ensure these 8 elements are present:
                            </p>
                            <div className="bg-white border-2 border-[var(--color-primary)]/20 rounded-2xl overflow-hidden">
                                <div className="bg-[var(--color-primary)]/5 p-8 border-b border-[var(--color-primary)]/10">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <ul className="space-y-4">
                                            <li className="flex items-center gap-3">
                                                <div className="w-5 h-5 rounded-full bg-green-500 flex-shrink-0 flex items-center justify-center"><svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></div>
                                                <span className="text-sm font-semibold">Correct Loan Account Number</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div className="w-5 h-5 rounded-full bg-green-500 flex-shrink-0 flex items-center justify-center"><svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></div>
                                                <span className="text-sm font-semibold">Exact Settlement Amount (Numerical & Words)</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div className="w-5 h-5 rounded-full bg-green-500 flex-shrink-0 flex items-center justify-center"><svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></div>
                                                <span className="text-sm font-semibold">Payment Deadline Date</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div className="w-5 h-5 rounded-full bg-green-500 flex-shrink-0 flex items-center justify-center"><svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></div>
                                                <span className="text-sm font-semibold">Waiver Specification (Interest/Penalty)</span>
                                            </li>
                                        </ul>
                                        <ul className="space-y-4">
                                            <li className="flex items-center gap-3">
                                                <div className="w-5 h-5 rounded-full bg-green-500 flex-shrink-0 flex items-center justify-center"><svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></div>
                                                <span className="text-sm font-semibold">CIBIL Reporting Clause</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div className="w-5 h-5 rounded-full bg-green-500 flex-shrink-0 flex items-center justify-center"><svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></div>
                                                <span className="text-sm font-semibold">No Dues / Full Release Clause</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div className="w-5 h-5 rounded-full bg-green-500 flex-shrink-0 flex items-center justify-center"><svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></div>
                                                <span className="text-sm font-semibold">Legal Case Withdrawal Clause (If any)</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div className="w-5 h-5 rounded-full bg-green-500 flex-shrink-0 flex items-center justify-center"><svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></div>
                                                <span className="text-sm font-semibold">Authorized Bank Signature & Seal</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="p-6 bg-red-50">
                                    <p className="text-red-800 text-xs font-medium text-center italic">Important: If the letter says "Subject to approval from headquarters", it is not a final offer. It means the local officer is just exploring the option. Wait for the 'Sanctioned' letter.</p>
                                </div>
                            </div>
                        </section>

                        <section id="post-settlement" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Life After Settlement: Rebuilding
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Settling a loan is not the end of your financial journey; it's a new beginning. Your CIBIL score will likely be in the 500s or 600s after settlement. No bank will give you a fresh unsecured loan for the next 2-3 years. That's the price you pay for the discount.
                            </p>
                            <div className="bg-[var(--color-section-light)] p-8 rounded-2xl border border-[var(--color-border)] mb-8 text-center">
                                <h3 className="text-2xl font-bold text-[var(--color-text-hero)] mb-4">How to Rebuild in 3 Steps</h3>
                                <div className="grid md:grid-cols-3 gap-6 text-left">
                                    <div className="p-4">
                                        <div className="text-sm font-bold text-[#1F5EFF] mb-2">STEP 01</div>
                                        <p className="text-sm text-gray-700"><strong>Secured Credit Cards:</strong> Apply for a credit card against a Fixed Deposit (FD). Use it for small amounts and pay back 100% on time every month.</p>
                                    </div>
                                    <div className="p-4">
                                        <div className="text-sm font-bold text-[#1F5EFF] mb-2">STEP 02</div>
                                        <p className="text-sm text-gray-700"><strong>CIBIL Audit:</strong> After 45 days, check your CIBIL report. Ensure it says 'Settled' with zero balance. If it says 'Default', file a dispute immediately.</p>
                                    </div>
                                    <div className="p-4">
                                        <div className="text-sm font-bold text-[#1F5EFF] mb-2">STEP 03</div>
                                        <p className="text-sm text-gray-700"><strong>Steady Inflow:</strong> Keep a healthy bank balance. Banks look at your average monthly balance (AMB) when reconsidering you after a few years.</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-lg leading-relaxed mb-6">
                                The "Settled" mark will stay for 7 years, but its weight reduces as the entry gets older. After 24-36 months of perfect behavior on a secured credit card, you might qualify for a gold loan or even a vehicle loan. A home loan might take 5-7 years or a "CIBIL Cleanup" where you later pay the waived amount to get a "Closed" certificate.
                            </p>
                        </section>

                        <section id="why-settleloans" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Why Use Professional Negotiators?
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                You can technically negotiate your own debt. However, just like you can technically represent yourself in court, it's rarely the optimal choice. Professional firms like SettleLoans bring three things to the table that an individual cannot:
                            </p>
                            <div className="grid sm:grid-cols-3 gap-6 mb-8">
                                <div className="flex flex-col items-center text-center p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 font-bold text-xl">1</div>
                                    <h4 className="font-bold mb-2">Benchmarking</h4>
                                    <p className="text-xs text-gray-500 font-medium">We know the exact 'floor price' for HDFC, ICICI, SBI, etc. We know when they are bluffing and when they are serious.</p>
                                </div>
                                <div className="flex flex-col items-center text-center p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4 font-bold text-xl">2</div>
                                    <h4 className="font-bold mb-2">Legal Shield</h4>
                                    <p className="text-xs text-gray-500 font-medium">As soon as you join us, our lawyers take over. We handle the notices and the harassment calls so you can work in peace.</p>
                                </div>
                                <div className="flex flex-col items-center text-center p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4 font-bold text-xl">3</div>
                                    <h4 className="font-bold mb-2">Audit Safety</h4>
                                    <p className="text-xs text-gray-500 font-medium">We ensure the documentation is 100% authentic. We protect you from fake recovery letters and agent fraud.</p>
                                </div>
                            </div>
                            <p className="text-lg leading-relaxed mb-6">
                                If your debt is over 2-3 lakhs, the 15% professional fee is easily recovered through the much deeper discounts professionals can achieve. Moreover, the peace of mind of not having recovery agents at your doorstep is invaluable.
                            </p>
                        </section>

                        <section id="faqs" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mt-16 mb-8">Expert Negotiation FAQs</h2>
                            <div className="space-y-4 not-prose">
                                {[
                                    {
                                        q: "What is the best time to initiate a loan settlement negotiation?",
                                        a: "The ideal time is typically after you have missed at least 3 to 6 consecutive EMIs. At this stage, the bank classifies the account as a Non-Performing Asset (NPA) and is more willing to negotiate a lump-sum settlement to recover at least the principal amount."
                                    },
                                    {
                                        q: "Will settling a personal loan affect my credit score?",
                                        a: "Yes, settling a loan will negatively impact your credit score as it will be marked as 'Settled' rather than 'Closed' in your CIBIL report. However, it is better than staying in a perpetual default state. You can rebuild your credit score over time after settlement."
                                    },
                                    {
                                        q: "Can a lender legally refuse a settlement offer?",
                                        a: "Yes, lenders are not legally obligated to accept a settlement. It is a mutual agreement. However, if you prove genuine financial hardship (like medical issues or job loss), most banks prefer some recovery over total loss."
                                    },
                                    {
                                        q: "What percentage of the outstanding amount should I offer for settlement?",
                                        a: "A good starting point is 25% to 30% of the total outstanding amount. Final settlements usually land between 40% and 60%, depending on the age of the debt and the lender's internal policies."
                                    },
                                    {
                                        q: "What documents do I need for a loan settlement negotiation?",
                                        a: "You should have proof of financial hardship such as a termination letter, medical reports, bank statements showing low balance, and a formal settlement request letter."
                                    },
                                    {
                                        q: "Does RBI have any specific rules for personal loan settlements?",
                                        a: "RBI allows banks to have their own board-approved policies for compromise settlements. However, RBI strictly prohibits harassment by recovery agents and mandates fair treatment of borrowers."
                                    },
                                    {
                                        q: "Can I settle multiple personal loans at once?",
                                        a: "Yes, but it requires careful fund management. It is often better to prioritize the most aggressive lenders or the ones with the highest interest rates first if you have limited funds."
                                    },
                                    {
                                        q: "Is a settled loan mark permanent on my CIBIL report?",
                                        a: "A 'Settled' status typically stays on your credit report for 7 years. However, its impact reduces over time as you build a fresh history of responsible credit behavior."
                                    },
                                    {
                                        q: "Should I use a debt settlement agency or do it myself?",
                                        a: "Agencies like SettleLoans have professional negotiators who know the 'floor rates' of banks and can protect you from harassment. While you can do it yourself, professionals often achieve much deeper discounts."
                                    },
                                    {
                                        q: "What happens if I fail to pay the settled amount on time?",
                                        a: "If you miss the deadline mentioned in the settlement letter, the agreement becomes void, and the bank will demand the full original outstanding amount again. Always ensure funds are ready before signing."
                                    }
                                ].map((faq, i) => (
                                    <details key={i} className="group bg-white border border-[var(--color-border)] rounded-xl overflow-hidden hover:shadow-md transition-all">
                                        <summary className="flex justify-between items-center p-5 cursor-pointer font-bold text-[var(--color-text-hero)] list-none font-sans">
                                            <span className="text-lg">{i + 1}. {faq.q}</span>
                                            <span className="transition-transform group-open:rotate-180">
                                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7"></path></svg>
                                            </span>
                                        </summary>
                                        <div className="px-5 pb-5 text-[var(--color-text-body)] opacity-90 leading-relaxed border-t border-gray-100 pt-4 mt-0 bg-gray-50/50 font-sans">
                                            {faq.a}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </section>

                        <h2 id="reviews" className="scroll-mt-32 text-2xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center uppercase tracking-tighter font-sans">Client Success Stories</h2>
                        <div className="grid md:grid-cols-2 gap-4 md:gap-6 not-prose mb-16 text-left">
                            {[
                                {
                                    name: "Rajesh Kumar",
                                    loc: "Mumbai",
                                    loan: "HDFC Personal Loan: ₹8L",
                                    res: "Settled: ₹3.5L",
                                    story: "SettleLoans helped me negotiate my HDFC personal loan from 8 lakhs down to 3.5 lakhs. The process was transparent and the harassment stopped within days."
                                },
                                {
                                    name: "Sunil Mehta",
                                    loc: "Delhi",
                                    loan: "ICICI Personal Loan: ₹12L",
                                    res: "Settled: ₹4.8L",
                                    story: "My personal loan settlement was stuck for months. SettleLoans got it closed in 3 weeks with a 60% waiver. Highly professional team."
                                },
                                {
                                    name: "Deepa Francis",
                                    loc: "Kochi",
                                    loan: "Axis Bank Loan: ₹5.5L",
                                    res: "Settled: ₹2.2L",
                                    story: "Saved me from a legal notice. Highly professional team who knows how to handle bank managers effectively."
                                },
                                {
                                    name: "Meera Krishnan",
                                    loc: "Bangalore",
                                    loan: "Bajaj Finance: ₹4L",
                                    res: "Settled: ₹1.8L",
                                    story: "Extremely professional. They handled the legal notices and got me a second chance at settlement when I had almost given up."
                                }
                            ].map((review, i) => (
                                <div key={i} className="bg-white p-5 md:p-6 rounded-2xl border border-[var(--color-border)] shadow-sm hover:shadow-md transition-all">
                                    <div className="flex items-center mb-4">
                                        <div className="w-10 h-10 rounded-full bg-[#1F5EFF]/10 flex items-center justify-center font-bold text-[#1F5EFF] mr-3">{review.name.charAt(0)}</div>
                                        <div><h5 className="font-bold text-[#2E2E2E]">{review.name}</h5><p className="text-xs text-gray-400">{review.loc}</p></div>
                                        <div className="ml-auto text-yellow-400 text-sm flex gap-0.5">
                                            <FontAwesomeIcon icon={faStar} className="w-3.5 h-3.5" />
                                            <FontAwesomeIcon icon={faStar} className="w-3.5 h-3.5" />
                                            <FontAwesomeIcon icon={faStar} className="w-3.5 h-3.5" />
                                            <FontAwesomeIcon icon={faStar} className="w-3.5 h-3.5" />
                                            <FontAwesomeIcon icon={faStar} className="w-3.5 h-3.5" />
                                        </div>
                                    </div>
                                    <div className="mb-4 text-xs font-mono bg-gray-50 p-2 rounded border border-gray-100">
                                        <span className="block text-red-600 mb-1 flex items-center">
                                            <FontAwesomeIcon icon={faTriangleExclamation} className="mr-2 w-3 h-3" />
                                            {review.loan}
                                        </span>
                                        <span className="block text-green-600 font-bold flex items-center">
                                            <FontAwesomeIcon icon={faCheck} className="mr-2 w-3 h-3" />
                                            {review.res}
                                        </span>
                                    </div>
                                    <p className="text-[15px] md:text-base text-[var(--color-text-body)] leading-relaxed italic font-medium">"{review.story}"</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 pt-8 border-t border-[var(--color-border)] text-center text-[var(--color-text-muted)] text-sm italic mb-16">
                            <p>Disclaimer: Loan settlement is a negotiation process and outcomes are not guaranteed. The information provided is for educational purposes and does not constitute legal or financial advice. Settling a loan has a negative impact on your credit score. SettleLoans is a professional service provider and not an affiliate of the RBI or any banking institution.</p>
                        </div>

                        {/* Bottom CTA */}
                        <section className="bg-[#1F5EFF] rounded-[10px] p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter">Ready to Start Your Negotiation?</h2>
                                <p className="text-lg md:text-2xl opacity-90 max-w-2xl mx-auto mb-10 leading-tight font-normal">
                                    Join 10,000+ Indians who have successfully settled their debts with professional help. Break the debt cycle today.
                                </p>
                                <Link href="/contact" className="inline-block bg-white text-[#1F5EFF] font-bold py-5 px-12 rounded-[10px] text-xl hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-1">
                                    Start My Free Analysis
                                </Link>
                            </div>
                        </section>

                        {/* Mobile Right Column Alternative (Visible only on mobile) */}
                        <div className="lg:hidden mt-16 mb-8">
                            <div className="bg-white rounded-[10px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden border border-[var(--color-border)]">
                                <div className="bg-[#1F5EFF] p-6 text-center text-white">
                                    <h3 className="text-2xl font-bold mb-2 uppercase tracking-wide">Professional Help</h3>
                                    <p className="opacity-90 text-sm">Let our experts handle the negotiations for you.</p>
                                </div>
                                <div className="p-8 text-center">
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-bold py-4 px-6 rounded-[10px] hover:scale-105 transition-all shadow-md text-lg text-center">
                                        Consult Experts
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Right Column: CTA & Related Pages (Sticky) */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-24 space-y-8">

                            {/* CTA Container */}
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                                <div className="bg-[#1F5EFF] p-4 text-center">
                                    <h3 className="text-lg font-black text-white uppercase tracking-wider">Save 50% Today</h3>
                                </div>
                                <div className="p-8 text-center">
                                    <p className="mb-8 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-normal">
                                        Start your debt-free journey with clearly defined costs and zero harassment.
                                    </p>
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-[12px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg text-lg">
                                        Get Free Call
                                    </Link>
                                </div>
                            </div>

                            {/* Related Pages Container */}
                            <div className="bg-white p-6 rounded-2xl border border-[var(--color-border)] shadow-sm">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-4 border-b border-gray-100 pb-2">Related Guides</h3>
                                <ul className="space-y-4 text-sm font-medium">
                                    <li>
                                        <Link href="/faqs/loan-settlement-fees" className="group flex items-center text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-[var(--color-primary)] transition-colors"></span>
                                            Settlement Fees
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faqs/how-to-settle-debt-for-less" className="group flex items-center text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-[var(--color-primary)] transition-colors"></span>
                                            Advanced Tactics
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faqs/how-to-settle-loan" className="group flex items-center text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-[var(--color-primary)] transition-colors"></span>
                                            How-to-Settle Guide
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faqs/ots-full-form" className="group flex items-center text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-[var(--color-primary)] transition-colors"></span>
                                            OTS Process
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
