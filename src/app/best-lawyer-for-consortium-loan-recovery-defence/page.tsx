import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGavel, faScaleBalanced, faShieldHalved, faHandshake, faBuildingShield, faCircleExclamation, faLandmark, faUsersBetweenLines, faUserTie, faStar, faFileLines } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Best Lawyer for Consortium Loan Recovery Defence | Multi-Bank Debt Resolution",
    description: "Facing recovery from multiple banks? Consult the best lawyer for consortium loan recovery defence in India. Expert help for ICA, SARFAESI, and DRT cases.",
    alternates: {
        canonical: "https://settleloans.in/best-lawyer-for-consortium-loan-recovery-defence",
    },
};

export default function ConsortiumLoanDefencePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/best-lawyer-for-consortium-loan-recovery-defence#webpage",
                "url": "https://settleloans.in/best-lawyer-for-consortium-loan-recovery-defence",
                "name": "Best Lawyer for Consortium Loan Recovery Defence India | Multi-Bank Legal Shield",
                "description": "Expert legal defense services for borrowers facing consortium loan recovery actions, multi-bank disputes, and complex debt restructuring in India.",
                "breadcrumb": { "@id": "https://settleloans.in/best-lawyer-for-consortium-loan-recovery-defence#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/best-lawyer-for-consortium-loan-recovery-defence#breadcrumb",
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
                        "name": "Consortium Loan Recovery Defence",
                        "item": "https://settleloans.in/best-lawyer-for-consortium-loan-recovery-defence"
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/best-lawyer-for-consortium-loan-recovery-defence#article",
                "headline": "Best Lawyer for Consortium Loan Recovery Defence: Navigating Multi-Bank Disputes",
                "description": "A comprehensive guide to legal strategies for defending consortium loan recovery actions, understanding inter-creditor agreements, and securing settlements.",
                "author": {
                    "@type": "Organization",
                    "name": "SettleLoans Legal Expert Team"
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
                "mainEntityOfPage": { "@id": "https://settleloans.in/best-lawyer-for-consortium-loan-recovery-defence#webpage" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/best-lawyer-for-consortium-loan-recovery-defence#product",
                "name": "Consortium Debt Legal Defence Service",
                "description": "Specialized legal representation for borrowers dealing with consortium loan defaults and bank recovery syndicates.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "940"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Harish Khurana" },
                        "datePublished": "2024-02-20",
                        "reviewBody": "Defending a consortium of 5 banks was impossible until we found this legal team. They identified cracks in the Inter-Creditor Agreement that saved our company.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Sunita Deshmukh" },
                        "datePublished": "2024-01-10",
                        "reviewBody": "Professional approach in handling DRT and NCLT matters simultaneously. Highly recommended for large scale business loan disputes.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://settleloans.in/best-lawyer-for-consortium-loan-recovery-defence#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is a consortium loan in the context of debt recovery?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A consortium loan is an arrangement where multiple banks join together to lend to a single borrower under a common set of documents and an inter-creditor agreement. In recovery, this means you are facing a syndicate of lenders usually led by one 'Lead Bank'."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does an Inter-Creditor Agreement (ICA) affect a borrower's defense?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The ICA governs how banks coordinate their recovery actions. If banks initiate recovery without following the ICA protocols or without the mandatory consent percentage, a lawyer can challenge the validity of their joint recovery notice in the DRT."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can a borrower negotiate with individual banks in a consortium?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Generally, banks in a consortium act together. However, a specialized lawyer can identify leverage points to negotiate a settlement that all banks can agree upon, or sometimes find ways to settle with specific lenders if the ICA allows it."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the 60 percent rule in consortium recovery?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Under various RBI frameworks and the SARFAESI Act, certain recovery actions require the consent of lenders holding a significant percentage (often 60% or more) of the outstanding debt. Failure to have this consent makes the recovery action legally void."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can a lawyer stop a joint SARFAESI notice from a consortium?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, by filing a Securitization Application (SA) in the DRT. Grounds for challenge include improper coordination between banks, incorrect individual account statements, and procedural errors in the joint notice."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the role of the Lead Bank in a dispute?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The Lead Bank typically manages the communication and documentation. If the Lead Bank fails to fulfill its fiduciary duties or makes errors in the data sharing, it can provide a strong legal ground for the borrower to contest the recovery."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does IBC affect a consortium loan dispute?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "If a consortium bank files an insolvency petition in the NCLT, the entire dynamic changes. A lawyer helps you navigate the Corporate Insolvency Resolution Process (CIRP) and protect your interests as a promoter or corporate debtor."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can we restructure a consortium loan legally?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, through the RBI Pru Framework or by proposing a resolution plan. A lawyer works with financial experts to create a plan that is legally robust and acceptable to the majority of the consortium members."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What happens if banks in a consortium have conflicting interests?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Conflict between banks is a significant advantage for the borrower. An expert lawyer uses these internal disagreements to delay recovery or force a more favorable settlement deal."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why is SettleLoans better for consortium disputes?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Consortium disputes are complex and require a mix of litigation and deep negotiation. We provide high-level legal advocates who specialize in multi-bank matters and have a track record of handling high-value corporate debt."
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
                            Elite Multi-Bank Defense
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                            Best Lawyer for Consortium <br className="hidden md:block" /> Loan Recovery Defence
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-4xl mx-auto leading-[1.2] font-normal">
                            When multiple banks unite for recovery, you need a superior legal shield. We provide specialized legal representation for complex consortium loan disputes and multi-creditor negotiations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Activate Your Legal Shield
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
                                    Consortium Loan Recovery Defence
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">

                    {/* Left Column: TOC */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative border-r border-[#DEDEDE] pr-6">
                        <TableOfContents
                            items={[
                                { id: "intro-consortium", title: "Consortium Loan Challenges" },
                                { id: "ica-legal-impact", title: "Inter-Creditor Agreements" },
                                { id: "lead-vs-participating", title: "Lead Bank's Fiduciary Duty" },
                                { id: "sarfaesi-consortium", title: "SARFAESI Multi-Bank Defense" },
                                { id: "drt-complex-litigation", title: "DRT Litigation Strategy" },
                                { id: "ibc-nclt-angles", title: "The NCLT & IBC Landscape" },
                                { id: "ots-negotiation", title: "Strategic OTS Negotiation" },
                                { id: "interest-parity-disputes", title: "Interest Parity Disputes" },
                                { id: "msmed-protections", title: "MSMED Act in Consortiums" },
                                { id: "technical-grounds", title: "Common Technical Defects" },
                                { id: "emergency-orders", title: "Emergency Stay Orders" },
                                { id: "case-studies", title: "Defense Success Stories" },
                                { id: "hiring-specialist", title: "Why Hire a Specialist?" },
                                { id: "future-governance", title: "Business Survival Strategy" },
                                { id: "final-call", title: "Connect with Experts" },
                                { id: "faqs-consortium", title: "Expert Legal Insights (FAQs)" }
                            ]}
                        />
                    </aside>

                    {/* Middle Column: Main Content */}
                    <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[#2E2E2E]">

                        <section id="intro-consortium" className="scroll-mt-32 mb-16">
                            <h2 className="text-4xl md:text-5xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Consortium Loan Challenges: <span className="text-[#1F5EFF]">Surviving the Multi-Bank Recovery Storm</span>
                            </h2>
                            <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                                <p className="text-lg leading-relaxed mb-6 italic">
                                    "In the world of corporate finance, a consortium is a pact for growth. In the world of recovery, it can become a syndicate for destruction if not handled with extreme legal precision."
                                </p>
                                <p className="text-lg leading-relaxed mb-6">
                                    A consortium loan is significantly more complex than a standard bilateral loan. When you borrow from a group of banks, you are bound by a web of Inter-Creditor Agreements (ICA), common loan agreements, and a shared security structure. When business defaults occur, the pressure does not come from one direction; it comes from a unified front of lenders, often with different internal policies, different appetites for risk, and a Lead Bank that manages the entire offensive.
                                </p>
                                <p className="text-lg leading-relaxed mb-6">
                                    Defending a consortium loan recovery action requires more than just knowing banking law. It requires a deep understanding of multi-party contracts, the fiduciaries of the Lead Bank, and the specific RBI frameworks that govern how these syndicates must act. If one bank moves too fast, or if the Lead Bank fails to get the mandatory consent from the participating members, the entire recovery process can be stalled or even dismantled by a skilled legal team.
                                </p>
                                <p className="text-lg leading-relaxed font-bold text-[#1F5EFF]">
                                    We provide the best lawyer for consortium loan recovery defence because we understand that your business survival depends on breaking the creditors' unified front and forcing a sensible, sustainable resolution.
                                </p>
                            </div>
                        </section>

                        <section id="ica-legal-impact" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">The Inter-Creditor Agreement (ICA) and Your Defense</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The ICA is the backbone of any consortium. It is a contract between the banks that defines how they will share information, how they will vote on resolution plans, and how they will initiate legal action against you. For a borrower, the ICA is a goldmine of legal defense grounds.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Many consortium recovery actions fail because the banks did not follow the technical protocols laid down in their own ICA. For instance, if the ICA requires a 66 percent majority vote to initiate SARFAESI action, and the banks proceeded with only 55 percent, the entire notice period is legally defective. An expert lawyer will demand the production of the ICA and the minutes of the Joint Lenders' Meeting (JLM) to identify these critical lapses.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-8">
                                <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                                    <FontAwesomeIcon icon={faUsersBetweenLines} />
                                    Leveraging Inter-Bank Conflicts
                                </h4>
                                <p className="text-sm text-blue-800">
                                    Participating banks often have different agendas. Smaller banks may want a quick OTS, while larger public sector banks might be bound by rigid internal recovery rules. By highlighting these internal contradictions in the DRT, your legal team can create a situation where the banks find it easier to settle with you than to settle their differences with each other.
                                </p>
                            </div>
                        </section>

                        <section id="lead-vs-participating" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Lead Bank's Fiduciary Duty and Breaches</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The Lead Bank acts as an agent for all other members. They hold the security, they issue the notices, and they are responsible for the accuracy of the debt claim. However, this agency relationship comes with heavy legal responsibilities. If the Lead Bank provides incorrect data to the participating members, or if they fail to disclose your valid restructuring proposals to the consortium, it constitutes a breach of their fiduciary duty.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                In many high-value disputes, we have successfully argued that the Lead Bank's high-handedness prejudiced the borrower's rights. This often leads the court to stay the recovery and order a fresh look at the resolution plan. A lawyer who knows how to cross-examine a Lead Bank's representative on their operational failures is worth their weight in gold in a consortium dispute.
                            </p>
                        </section>

                        <section id="sarfaesi-consortium" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">SARFAESI Multi-Bank Defense Strategies</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The SARFAESI Act, 2002, allows a consortium to act as a single unit or for individual banks to move on their specific portions of debt. However, Section 13(9) of the Act specifically deals with consortiums. It mandates that any action against a secured asset requires the consent of secured creditors holding at least 60 percent (earlier 75 percent) of the value of the outstanding amount.
                            </p>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-[#DEDEDE] mb-8 relative">
                                <div className="absolute top-4 right-4 opacity-10">
                                    <FontAwesomeIcon icon={faShieldHalved} size="4x" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">The 60% Consent Challenge</h3>
                                <p className="mb-4">We meticulously verify the 'Consent Letters' produced by the bank. If a participating bank's consent was obtained through coercion or if the authorization was not signed by a competent authority, the entire SARFAESI action under Section 13 cannot stand. This is a common technical ground used to save factories and large commercial properties from illegal auctions.</p>
                                <p className="text-sm font-bold text-[#1F5EFF]">Note: Even if one bank drops out of the consortium's joint action, the entire legal standing of the joint notice may be compromised.</p>
                            </div>
                        </section>

                        <section id="drt-complex-litigation" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">DRT Litigation Strategy in Consortium Cases</h2>
                            <p className="mb-6 leading-relaxed text-lg">
                                The Debt Recovery Tribunal (DRT) handles consortium cases with a different level of scrutiny. Because the amounts are usually large, the level of documentation required is immense. Our litigation strategy in the DRT focuses on the 'Consolidation of Claims'. We demand that each bank provide its own separate statement of account, justification for interest rates, and proof of disbursement.
                            </p>
                            <p className="mb-6 leading-relaxed text-lg">
                                Often, one bank in the consortium has charged interest incorrectly while others have followed the rules. By pointing out this inconsistency, we challenge the 'Common Debt Claim' of the consortium. If the total amount claimed is incorrect, the bank cannot proceed with the auction. This level of forensic legal defense is what distinguishes a general lawyer from a specialized consortium defense expert.
                            </p>
                        </section>

                        <section id="ibc-nclt-angles" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">The NCLT and IBC Landscape for Consortiums</h2>
                            <p className="mb-6 leading-relaxed text-lg">
                                The Insolvency and Bankruptcy Code (IBC) has changed the rules of the game. A single bank in a consortium, even with a small share of the debt, can drag a company to the National Company Law Tribunal (NCLT) if the default is above Rs. 1 Crore. This can lead to the 'Corporate Insolvency Resolution Process' (CIRP), where you risk losing control of your company to a Resolution Professional.
                            </p>
                            <div className="bg-red-50 p-8 rounded-2xl border border-red-100 mb-8">
                                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                                    <FontAwesomeIcon icon={faLandmark} />
                                    Defending Before the NCLT
                                </h3>
                                <p className="text-sm text-red-900 leading-relaxed mb-4">
                                    We represent corporate debtors in the NCLT to challenge the admission of insolvency petitions. We argue on grounds of 'pre-existing disputes', incorrect default dates, and the banks' failure to follow mandatory pre-IBC restructuring steps. Our goal is to keep the company under your management while we negotiate a resolution plan.
                                </p>
                                <p className="text-sm text-red-900 leading-relaxed bold">Remember: Section 12A of the IBC allow for the withdrawal of insolvency petitions if 90 percent of the creditors agree. We help you build that 90 percent consensus.</p>
                            </div>
                        </section>

                        <section id="ots-negotiation" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Strategic One-Time Settlement (OTS) Negotiation</h2>
                            <p className="mb-6 leading-relaxed text-lg">
                                In a consortium, a One-Time Settlement is a marathon, not a sprint. You are negotiating with a committee of creditors, not a single individual. Each bank has its own 'Compromise Committee' and 'Board Approval' process. A successful OTS in a consortium requires a proposal that is financially sound and legally watertight.
                            </p>
                            <p className="mb-6 leading-relaxed text-lg">
                                We design OTS proposals that address the concerns of both the conservative public sector banks and the more aggressive private banks. By highlighting the long-term legal risks and the depreciation value of the assets, we convince the consortium that a bird in hand is better than years of litigation in the DRT. We have secured waivers of up to 50-70 percent on consortium dues by leveraging our legal positions.
                            </p>
                        </section>

                        <section id="interest-parity-disputes" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Interest Parity and Charging Disputes</h2>
                            <p className="mb-6 text-lg">
                                Different banks in a consortium often charge different rates of interest based on their internal MCLR or Base Rate. However, in a consortium, there is often a 'Common Interest Rate' agreed upon in the loan documents. If some banks are overcharging or applying compound interest on penal charges (which is illegal per RBI guidelines), the whole claim of the consortium becomes shaky.
                            </p>
                            <p className="mb-6 text-lg">
                                Our legal team conducts a thorough 'Interest Audit' of your consortium loan. If we find discrepancies, we move the tribunal to stay the recovery until a correct certificate of debt is filed. This is one of the most effective ways to stop an immediate auction and buy valuable time for business recovery.
                            </p>
                        </section>

                        <section id="msmed-protections" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Leveraging MSMED Act Protections in Consortiums</h2>
                            <p className="mb-6 text-lg">
                                If your business is a registered MSME, you have additional protections. The MSME Development Act, 2006, and subsequent RBI guidelines mandate that banks must have a specific 'Framework for Revival and Rehabilitation of MSMEs'. In consortium cases, banks often ignore these 'soft' guidelines in favor of 'hard' recovery.
                            </p>
                            <p className="mb-6 text-lg">
                                We use these RBI mandates as a legal crowbar. We argue in court that by failing to explore the revival framework before moving to SARFAESI, the banks have acted in violation of the law. This argument is particularly strong in front of judges who are sensitive to the national importance of the MSME sector.
                            </p>
                        </section>

                        <section id="technical-grounds" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 underline decoration-[#1F5EFF] underline-offset-8">Common Technical Grounds for Consortium Defense</h2>
                            <p className="mb-8 text-lg">Our research and experience have identified several 'Achilles heels' in consortium recovery actions. A victory in court often comes from these technical details:</p>
                            <div className="grid md:grid-cols-2 gap-4 mb-12">
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl shadow-sm">
                                    <h4 className="font-bold mb-2">Defective Notice Service</h4>
                                    <p className="text-sm text-gray-500">Failure of every individual bank in the consortium to serve notice to all guarantors and directors.</p>
                                </div>
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl shadow-sm">
                                    <h4 className="font-bold mb-2">Improper Charge Creation</h4>
                                    <p className="text-sm text-gray-500">Errors in registering the 'Pari-Passu' charge with the Registrar of Companies (ROC) or CERSAI.</p>
                                </div>
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl shadow-sm">
                                    <h4 className="font-bold mb-2">Unauthorized Signatories</h4>
                                    <p className="text-sm text-gray-500">Notices signed by bank officers who do not have the specific board resolution power for consortium actions.</p>
                                </div>
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl shadow-sm">
                                    <h4 className="font-bold mb-2">Valuation Mismatch</h4>
                                    <p className="text-sm text-gray-500">Using a single, outdated valuation report for assets shared by multiple banks with different exposure levels.</p>
                                </div>
                            </div>
                        </section>

                        <section id="emergency-orders" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Emergency Stay Orders and Injunctions</h2>
                            <p className="mb-6 text-lg">
                                When a consortium moves for physical possession of a large factory or office, the stakes are existential. Our legal team is trained for 'Midnight Moves'. We approach the High Court or the DRT on an urgent basis to secure status-quo orders. We prove that the balance of convenience lies with the business continuing to operate, especially if it employs hundreds of workers.
                            </p>
                            <p className="mb-6 text-lg">
                                A well timed injunction can save your business from a point of no return. It forces the banks to stop their aggressive posture and enter into a meaningful dialogue.
                            </p>
                        </section>

                        <section id="case-studies" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Consortium Defense Victories</h2>
                            <div className="grid md:grid-cols-2 gap-6 not-prose">
                                {[
                                    {
                                        name: "Abhishek T.",
                                        loc: "Mumbai",
                                        type: "Steel Plant",
                                        outcome: "NCLT Admission Quashed",
                                        story: "A consortium bank with 10% share tried to push us into insolvency. I hired the SettleLoans legal panel. We proved in the NCLT that there was a pre-existing dispute regarding interest calculation. The petition was dismissed, and we eventually settled with the whole consortium."
                                    },
                                    {
                                        name: "Rahul C.",
                                        loc: "Pune",
                                        type: "Auto Ancillary",
                                        outcome: "Joint Auction Halted",
                                        story: "A group of 4 banks were trying to auction my unit. We found that the Lead Bank had not obtained the written consent of the smallest bank. The DRT stayed the auction for 6 months, giving us time to find an investor and settle the debt."
                                    },
                                    {
                                        name: "Sandeep R.",
                                        loc: "Chennai",
                                        type: "Textile Export",
                                        outcome: "60% Consortium Waiver",
                                        story: "My debt was 45 Crores across 3 banks. The SettleLoans team managed a coordinated negotiation. By challenging the SARFAESI process, we forced them to accept an OTS of 18 Crores. We are now debt-free and growing."
                                    },
                                    {
                                        name: "Karan L.",
                                        loc: "Delhi NCR",
                                        type: "Tech Park",
                                        outcome: "Successful Restructuring",
                                        story: "The bank syndicate was not agreeing on my restructuring plan. My lawyer used the RBI Pru Framework guidelines to prove that the unit was viable and the banks were being unreasonable. The court directed them to reconsider the plan."
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

                        <section id="hiring-specialist" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-[#2E2E2E]">Why You Need a Specialized Consortium Defense Lawyer</h2>
                            <p className="mb-6 text-lg">Don't treat a consortium dispute like a regular legal case. The scale of the debt and the number of parties involved require a higher level of strategic thinking. A general lawyer may miss the subtle conflicts between banks that a specialist will exploit.</p>
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-1 p-8 bg-gray-50 border border-gray-100 rounded-3xl text-center">
                                    <FontAwesomeIcon icon={faBuildingShield} className="text-[#1F5EFF] text-4xl mb-4" />
                                    <h5 className="font-bold text-xl mb-2">Syndicate Knowledge</h5>
                                    <p className="text-sm opacity-70">We understand the hierarchy of the consortium and the pressure points of each member bank.</p>
                                </div>
                                <div className="flex-1 p-8 bg-gray-50 border border-gray-100 rounded-3xl text-center">
                                    <FontAwesomeIcon icon={faHandshake} className="text-[#1F5EFF] text-4xl mb-4" />
                                    <h5 className="font-bold text-xl mb-2">Coordinated Response</h5>
                                    <p className="text-sm opacity-70">We manage the narrative across all banks so you don't get contradictory outcomes from different courts.</p>
                                </div>
                            </div>
                        </section>

                        <section id="faqs-consortium" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Expert Legal Insights (FAQs)</h2>
                            <div className="space-y-4 not-prose">
                                {[
                                    { q: "Can a single bank in a consortium initiate recovery on its own?", a: "Yes, a bank can initiate recovery for its specific portion of the debt, but for shared security, they must follow the voting rules of the Inter-Creditor Agreement (ICA). If they move without the required consent for the common assets, their action can be challenged in the DRT." },
                                    { q: "What is a Joint Lenders Meeting (JLM) and why is it important?", a: "A JLM is where all consortium banks meet to discuss the borrower's account. The minutes of these meetings are critical for your defense. If the banks haven't officially recorded their decision to initiate recovery, their legal notices might be premature and voidable." },
                                    { q: "Can I settle with one bank even if the others don't agree?", a: "This depends on the ICA. In many cases, it is possible for a borrower to reach a 'bilateral' settlement with one bank, which then withdraws from the consortium's recovery. This weakens the syndicate's position and often forces the others to follow suit." },
                                    { q: "How long can we fight a consortium recovery in the DRT?", a: "Consortium cases are complex and can easily last 2 to 5 years in the DRT and Appellate Tribunals. This time is often used by our clients to stabilize their business and find the funds for a final One-Time Settlement (OTS)." },
                                    { q: "What is the difference between a Consortium and a Multiple Banking Arrangement (MBA)?", a: "In a Consortium, banks have a formal pact with a Lead Bank. In an MBA, each bank has an independent relationship with you. MBA-related recovery is easier to defend because there are fewer coordinated voting rules, making each bank a separate legal entity for defense purposes." },
                                    { q: "What is an Inter-Creditor Agreement (ICA) exactly?", a: "It is a contractual agreement that banks sign to coordinate their actions regarding a common borrower. It covers everything from interest income sharing to the voting percentages required to take a company to the NCLT or DRT." },
                                    { q: "Can a borrower challenge the Lead Bank's status?", a: "Yes, if the Lead Bank has committed fraud, gross negligence, or failed to manage the account according to RBI Master Circulars, their authority to act on behalf of the consortium can be challenged, potentially halting the whole recovery process." },
                                    { q: "Why is the 60 percent consent rule so famous in consortium law?", a: "Because Section 13(9) of the SARFAESI Act makes it a mandatory requirement. If banks representing 59 percent move against your factory, they are legally unauthorized to do so. This single percent can be the difference between losing your factory and keeping it." },
                                    { q: "What happens to my collateral if I settle with only two out of five banks?", a: "Usually, the security is shared on a 'Pari-Passu' basis. If you settle with some banks, they release their charge, and you then negotiate for the release of the property with the remaining banks. A good lawyer ensures that your partial settlements lead to eventual property release." },
                                    { q: "Is a consortium loan dispute more expensive to defend?", a: "The legal complexity is higher, but the value at stake is also much higher. Hiring a specialized legal team is an investment to protect large-scale business assets that would otherwise be lost to a quick and uncontested bank auction." }
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

                        <section id="final-call" className="scroll-mt-32 mt-20">
                            <div className="bg-[#1F5EFF] rounded-3xl p-10 text-white text-center relative overflow-hidden shadow-2xl">
                                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                <h2 className="text-3xl md:text-5xl font-black mb-6 relative z-10 text-white">Don't Face the Syndicate Alone</h2>
                                <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto relative z-10 text-white">
                                    Our specialized legal and negotiation experts have handled consortium disputes worth hundreds of crores. Let us build your defense and secure your business future.
                                </p>
                                <Link href="/contact" className="inline-block bg-white text-[#1F5EFF] font-black py-5 px-12 rounded-2xl hover:scale-105 transition-all shadow-xl text-xl relative z-10">
                                    Get Your Free Case Analysis
                                </Link>
                                <p className="mt-6 text-sm opacity-70 relative z-10 italic">
                                    All business information is kept strictly confidential.
                                </p>
                            </div>
                        </section>

                        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
                            <p className="text-gray-400 text-sm italic">Disclaimer: SettleLoans works with a panel of senior advocates specializing in corporate and banking litigation. Legal representation is provided by registered practitioners. The info on this page is for awareness and does not substitute professional legal counsel.</p>
                        </div>

                        {/* Mobile Footer CTA */}
                        <div className="lg:hidden mt-16 mb-8">
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10">
                                <div className="bg-[#1F5EFF] p-4 text-center">
                                    <h3 className="text-lg font-black text-white">Expert Consortium Shield</h3>
                                </div>
                                <div className="p-6 text-center">
                                    <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                                        Facing a multi-bank recovery? Contact our specialists for a strategic defense plan.
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
                                        <FontAwesomeIcon icon={faGavel} />
                                        High-Value Panel
                                    </h3>
                                </div>
                                <div className="p-6 text-center">
                                    <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                                        Access elite banking advocates specialized in NCLT, DRT, and High Court matters.
                                    </p>
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg">
                                        Free Consultation
                                    </Link>
                                    <p className="mt-4 text-xs text-[#DEDEDE]/60 uppercase tracking-widest font-black">Success Driven</p>
                                </div>
                            </div>

                            {/* Related Pages Container */}
                            <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2 text-center">Complex Debt Relief</h3>
                                <ul className="space-y-4 text-sm font-bold">
                                    <li>
                                        <Link href="/best-lawyer-for-msme-business-loan-dispute" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            MSME Loan Disputes
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/best-lawyer-for-loan-settlement-by-drt" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            DRT Settlement Lawyer
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/business-loan-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            Business Loan Guide
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/loan-settlement-lawyers" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            About Our Lawyers
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
