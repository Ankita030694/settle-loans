import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
    title: "Loan Parties Dispute Resolution India | Legal Help for Recovery Conflicts",
    description: "Expert legal advisory for loan party disputes in India. Navigate DRT procedures, Banking Ombudsman complaints, and ADR mechanisms. Settle your loan conflicts with professional legal representation.",
    alternates: {
        canonical: "https://settleloans.in/loan-parties-dispute-resolution",
    },
};

export default function LoanPartiesDisputeResolutionPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/loan-parties-dispute-resolution#webpage",
                "url": "https://settleloans.in/loan-parties-dispute-resolution",
                "name": "Loan Parties Dispute Resolution India | Legal Help for Recovery Conflicts",
                "description": "Comprehensive guide to resolving disputes between borrowers, lenders, and co-borrowers in the Indian banking system.",
                "breadcrumb": { "@id": "https://settleloans.in/loan-parties-dispute-resolution#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/loan-parties-dispute-resolution#breadcrumb",
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
                        "name": "Loan Parties Dispute Resolution",
                        "item": "https://settleloans.in/loan-parties-dispute-resolution"
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/loan-parties-dispute-resolution#article",
                "headline": "Loan Parties Dispute Resolution in India: A Comprehensive Legal Guide",
                "description": "Understanding the landscape of loan disputes, from consumer forums to Debt Recovery Tribunals and ADR mechanisms.",
                "author": {
                    "@type": "Organization",
                    "name": "SettleLoans Content Team"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "SettleLoans",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://settleloans.in/logo/logo.svg"
                    }
                },
                "datePublished": "2024-03-06",
                "dateModified": "2024-03-06",
                "mainEntityOfPage": { "@id": "https://settleloans.in/loan-parties-dispute-resolution#webpage" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/loan-parties-dispute-resolution#product",
                "name": "Loan Dispute Legal Representation",
                "description": "Professional legal services for resolving complex loan disputes and recovery conflicts in India.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "1420"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Ramesh P." },
                        "datePublished": "2024-01-15",
                        "reviewBody": "A disagreement over loan terms had stalled my business for 2 years. SettleLoans stepped in, represented me in arbitration, and reached an amicable settlement that saved me from bankruptcy.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Sunita G." },
                        "datePublished": "2024-02-10",
                        "reviewBody": "My business partner left the country, and the bank was harassing me for the full loan. SettleLoans mediated a three way meeting with the bank and the partner's family, resulting in a fair split of the liability.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Anita P." },
                        "datePublished": "2024-03-02",
                        "reviewBody": "I paid off my loan, but the bank lost my property papers. Through the Consumer Court, SettleLoans forced the bank to issue public notices at their cost and pay me substantial compensation for the delay.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Karan D." },
                        "datePublished": "2024-03-05",
                        "reviewBody": "Recovery agents were threatening my parents for a loan I had already settled with another branch. SettleLoans filed a police complaint and an RBI complaint. Within 2 days, the bank manager apologized in writing.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://settleloans.in/loan-parties-dispute-resolution#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What constitutes a loan dispute in India?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A loan dispute arises when there is a disagreement between the lender and borrower regarding interest rates, repayment terms, collateral valuation, or service deficiencies. It can also involve disputes between co borrowers or guarantors."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Who is the Banking Ombudsman?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The Banking Ombudsman is a senior official appointed by the RBI to redress customer complaints against certain services provided by banks. It is a cost free and fast track mechanism for dispute resolution."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I challenge a SARFAESI notice in court?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, you can challenge a Section 13(2) notice by sending a representation to the bank. If they proceed to 13(4) possession, you can file a Securitization Application in the Debt Recovery Tribunal (DRT)."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the role of the Debt Recovery Tribunal (DRT)?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "DRTs are specialized courts established for the speedy recovery of debts due to banks and financial institutions. They typically handle cases where the outstanding amount is 20 lakh rupees or more."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is Alternative Dispute Resolution (ADR) in banking?",
                        "acceptedAnswer": {
                            "@type": { "@type": "Answer", "text": "ADR includes methods like Arbitration, Mediation, and Lok Adalats. These allow parties to resolve loan conflicts outside of traditional court rooms, often saving time and legal costs." }
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is mediation mandatory before filing a loan recovery case?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "While not always mandatory, recent RBI guidelines and the Mediation Act 2023 strongly encourage pre litigation mediation. Many courts also refer loan disputes to mediation to seek amicable settlements."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can a co borrower be held liable if the primary borrower defaults?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, in most loan agreements, co borrowers are 'jointly and severally' liable. This means the lender can recover the entire debt from any of the parties involved in the contract."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are Consumer Courts and how do they help in loan disputes?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Consumer courts handle cases involving 'deficiency in service' by banks. If a bank charges hidden fees, fails to return documents, or engages in unfair trade practices, you can seek compensation through these forums."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does a loan dispute affect my CIBIL score?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, if the dispute leads to non payment, the bank will report it as a default. However, if the dispute is resolved or proven to be the bank's error, you can request a correction of your credit record."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How can SettleLoans help in resolving party disputes?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "SettleLoans provides expert legal representation, drafts replies to notices, represents you in DRT/Ombudsman proceedings, and conducts high level negotiations to reach a final settlement."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is Lok Adalat and its benefits for loan settlement?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Lok Adalats are informal forums where parties can reach a settlement through compromise. The benefits include zero court fees and a final, non appealable award that has the same status as a civil court decree."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What happens if a bank ignores my ombudsman complaint?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The Ombudsman has the power to pass an 'Award' against the bank. If the bank fails to follow it, the RBI can impose penalties. You also retain the right to approach higher courts if you are unsatisfied with the award."
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
                            Conflict Resolution & Legal Shield
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                            Loan Parties Dispute <br className="hidden md:block" /> Resolution in India
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
                            Empowering borrowers and co-borrowers with a professional legal shield. Resolve complex bank conflicts, interest disputes, and recovery threats with expert intervention.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Resolve Your Dispute Now
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
                                    Loan Parties Dispute Resolution
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
                                { id: "intro-dispute-resolution", title: "Introduction to Resolution" },
                                { id: "dynamics-of-loan-parties", title: "The Dynamics of Loan Parties" },
                                { id: "common-points-of-conflict", title: "Common Points of Conflict" },
                                { id: "drt-legal-framework", title: "DRT & Legal Framework" },
                                { id: "challenging-sarfaesi", title: "Challenging SARFAESI Actions" },
                                { id: "adr-powerhouse", title: "Alternative Dispute Resolution" },
                                { id: "mediation-strategies", title: "Mediation & Negotiation" },
                                { id: "banking-ombudsman-help", title: "Banking Ombudsman Assistance" },
                                { id: "consumer-court-pathway", title: "Consumer Court Pathway" },
                                { id: "co-borrower-guarantor", title: "Co-borrower & Guarantor Rights" },
                                { id: "unfair-bank-practices", title: "Stopping Unfair Practices" },
                                { id: "legal-reply-masterclass", title: "The Art of Legal Replies" },
                                { id: "avoiding-litigation", title: "Avoiding Long Term Litigation" },
                                { id: "settleloans-methodology", title: "Our Strategic Shield" },
                                { id: "success-case-studies", title: "Resolution Success Stories" },
                                { id: "faqs", title: "Common Questions" }
                            ]}
                        />
                    </aside>

                    {/* Middle Column: Content */}
                    <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">

                        <section id="intro-dispute-resolution" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Navigating Complexity: <span className="text-black">The Path to Peaceful Resolution</span>
                            </h2>
                            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 z-0"></div>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                                    In the intricate world of Indian finance, a loan is far more than a simple exchange of money for a promise to pay. It is a legally binding contract that brings together multiple parties—the borrower, the co-borrower, the guarantor, and the lending institution. While most of these relationships begin with mutual trust and high hopes, the reality of market volatility, personal hardships, and technical misinterpretations often leads to significant disputes. These conflicts, if left unmanaged, can escalate from simple misunderstandings into overwhelming legal battles that threaten both your financial stability and your mental peace.
                                </p>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                                    If you are currently trapped in a situation where your bank is not listening, your co-borrowers are in disagreement, or you are facing the weight of a complex recovery notice, it is vital to know that you have formal legal avenues for resolution. Dispute resolution in the banking sector is a specialized field that requires a deep understanding of contractual laws, RBI circulars, and the procedural nuances of various legal forums. Our mission is to bridge the power gap between individuals and large financial institutions, ensuring that your voice is heard and your rights are protected through every step of the resolution process.
                                </p>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 font-bold text-[#1F5EFF]">
                                    Conflict does not have to mean catastrophe. With the right legal shield, every loan dispute has a path toward a fair and dignified resolution.
                                </p>
                            </div>
                        </section>

                        <section id="dynamics-of-loan-parties" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                                The Dynamics of Loan Parties in India
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Understanding who is involved in a loan agreement is the first step toward resolving a dispute. Each party has distinct legal rights and obligations. The primary borrower is usually at the center, but the inclusion of co-borrowers and guarantors creates a web of joint and several liability. In the eyes of the law, a co-borrower often has the same level of responsibility as the primary borrower, which is a fact that many people only realize when a dispute arises.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Then there is the lender—typically a bank, an NBFC, or a housing finance company. These institutions are represented by various departments, from relationship managers to specialized recovery cells. Disputes often arise because different departments within the same bank might communicate conflicting information to the borrower. A legal professional will look at the 'privity of contract' and ensure that all parties are acting within the boundaries defined by the original loan agreement and the relevant banking regulations.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Conflicts can also be 'internal' between the loan parties themselves. For instance, in a divorce or a business partnership split, one party may stop paying their share of the EMI, leaving the other party vulnerable to bank action. Resolving these multi-party conflicts requires a strategic approach that combines matrimonial or corporate law with debt recovery defense. Our advisory services encompass all these dimensions, providing a holistic resolution for everyone involved.
                            </p>
                            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-8">
                                <h3 className="text-xl font-bold mb-6">Roles and Responsibilities in a Loan Contract</h3>
                                <p className="mb-4 text-sm text-gray-600">
                                    Knowing your role is critical when a dispute begins. The law treats 'Principal Debtors' and 'Sureties' (guarantors) differently in specific scenarios, especially regarding the discharge of liability.
                                </p>
                                <ul className="grid md:grid-cols-2 gap-4 text-sm font-medium">
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                                        Primary Borrower: Lead Repayment Actor
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                                        Co-Borrower: Jointly Liable Partner
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                                        Guarantor: Secondary Safety Net
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                                        Lender: Regulated Credit Provider
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                                        Assigned ARC: New Owner of Debt
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                                        Recovery Agent: Outsourced Actor
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section id="common-points-of-conflict" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                                Common Points of Conflict in Loan Agreements
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Most disputes in the Indian banking landscape fall into predictable categories. Interest rate fluctuations are a major source of tension, especially in floating rate loans where the bank increases the rate without proper notice or justification. Another common flashpoint is the 'levy of penalty charges' or 'overdue interest' that can make the total balance grow exponentially, often exceeding the original principal amount.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Disputes also frequently occur over the 'valuation of collateral'. When a loan enters the stressed category, banks often use auditors to revalue the property or assets. If these valuations are unfairly low, it can lead to immediate recovery actions. Technical disputes regarding the 'Drawing Power' in business loans or the 're-fixation of limits' also consume significant time and require specialized technical and legal expertise to resolve.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Furthermore, service deficiencies such as the failure to return original property documents after loan closure or incorrect reporting to CIBIL create long term damages for borrowers. At SettleLoans, we have handled thousands of such cases. We understand that while a bank sees a 'loan account number', you see your life's earnings and its future. We bring a human perspective to these technical conflicts, ensuring that the resolution is not just legal, but also fair.
                            </p>
                            <div className="bg-blue-50 p-8 rounded-xl border border-blue-200 mb-8">
                                <h3 className="text-xl font-bold mb-4 text-blue-900">The Anatomy of an Interest Dispute</h3>
                                <p className="text-sm text-blue-800 leading-relaxed mb-4">
                                    Interest calculation is governed by the 'Master Direction' of the RBI. Banks must follow the Benchmark Prime Lending Rate (BPLR) or the Marginal Cost of Funds based Lending Rate (MCLR) rules strictly.
                                </p>
                                <p className="text-sm text-blue-800 leading-relaxed">
                                    If your bank has charged interest above the sanctioned rate or has failed to pass on the benefit of rate cuts, you have a solid legal ground for a dispute. Our legal team performs a deep audit of your loan statements to identify these discrepancies and use them as leverage during settlement negotiations.
                                </p>
                            </div>
                            <div className="grid sm:grid-cols-3 gap-4 my-8">
                                <div className="bg-white p-5 rounded-xl border border-[#DEDEDE] shadow-sm text-center">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                                    </div>
                                    <h4 className="font-bold text-[#2E2E2E] mb-2">Interest Audit</h4>
                                    <p className="text-xs text-gray-500">Uncovering hidden charges and incorrect interest rates.</p>
                                </div>
                                <div className="bg-white p-5 rounded-xl border border-[#DEDEDE] shadow-sm text-center">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.148l.83-3.454a4.414 4.414 0 00-.51-3.133l-1.93-3.44a4.414 4.414 0 01.51-3.133L5.554 1.83a4.414 4.414 0 013.133.51l3.44 1.93a4.414 4.414 0 003.133-.51l3.454-.83a4.414 4.414 0 013.133.51l1.93 3.44a4.414 4.414 0 00.51 3.133l-.83 3.454a4.414 4.414 0 01-.51 3.133l-1.93 3.44a4.414 4.414 0 00-.51 3.133l.83 3.454a4.414 4.414 0 01-.51 3.133L16.446 22.17a4.414 4.414 0 01-3.133-.51l-3.44-1.93a4.414 4.414 0 00-3.133.51l-3.454.83a4.414 4.414 0 01-3.133-.51l-1.93-3.44a4.414 4.414 0 00-.51-3.133l.83-3.454z"></path></svg>
                                    </div>
                                    <h4 className="font-bold text-[#2E2E2E] mb-2">Asset Protection</h4>
                                    <p className="text-xs text-gray-500">Challenging unfair collateral valuations by bank auditors.</p>
                                </div>
                                <div className="bg-white p-5 rounded-xl border border-[#DEDEDE] shadow-sm text-center">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                    </div>
                                    <h4 className="font-bold text-[#2E2E2E] mb-2">Mutual Liability</h4>
                                    <p className="text-xs text-gray-500">Resolving conflicts between co-borrowers and guarantors.</p>
                                </div>
                            </div>
                        </section>

                        <section id="drthelp-legal-framework" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">DRT & The Legal Framework for Recovery</h2>
                            <div className="bg-white p-8 rounded-2xl border border-[#DEDEDE] shadow-sm">
                                <p className="mb-4">
                                    The Debt Recovery Tribunal (DRT) system was established by the Recovery of Debts Due to Banks and Financial Institutions (RDDBFI) Act, 1993. It is a specialized forum designed to decide cases involving bank dues exceeding 20 lakh rupees. For a borrower, the DRT can be a double edged sword. While it allows for faster recovery by banks, it also provides a formalized platform where you can present legal defenses that might not be possible in a standard civil court.
                                </p>
                                <p className="mb-4">
                                    Navigating the DRT requires strict adherence to procedural timelines. Whether it is filing a 'Written Statement' or submitting 'Evidence by way of Affidavit', every step is critical. A single missed deadline can lead to an 'ex parte' order, where the court decides against you without hearing your side. Our legal experts specialize in DRT defense, finding procedural lapses in the bank's case that can lead to stays or favorable outcomes for our clients.
                                </p>
                                <div className="flex gap-2">
                                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-md text-xs font-bold">DRT Specialized</span>
                                    <span className="px-3 py-1 bg-green-50 text-green-600 rounded-md text-xs font-bold">Debt Recovery Law</span>
                                </div>
                            </div>
                        </section>

                        <section id="challenging-sarfaesi" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Challenging SARFAESI Act Actions</h2>
                            <p className="mb-6">
                                The SARFAESI Act of 2002 is the most powerful weapon in the lender's arsenal for secured loans. It allows them to bypass the long wait times of traditional courts and take possession of collateral directly. However, the Act also provides significant procedural rights to the borrower. The Supreme Court of India has repeatedly held that banks must follow the 'letter of the law' when invoking SARFAESI.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-orange-50/50 p-6 rounded-xl border border-orange-100">
                                    <h3 className="text-xl font-bold text-orange-800 mb-3">The Power of Representation</h3>
                                    <p className="text-sm text-orange-900/80 leading-relaxed">
                                        Under Section 13(3A), you have the right to send a formal 'Representation or Objection' after receiving a 13(2) notice. The bank MUST reply to this within 15 days. If they fail to provide a reasoned reply, their subsequent actions can be challenged in the DRT as illegal and void.
                                    </p>
                                </div>
                                <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                                    <h3 className="text-xl font-bold text-blue-800 mb-3">Securitization Application (SA)</h3>
                                    <p className="text-sm text-blue-900/80 leading-relaxed">
                                        Once the bank moves to take possession under Section 13(4), you can file an SA in the DRT. At this stage, you can seek a stay on the possession by proving that the bank has committed procedural errors or that your account was incorrectly classified as an NPA.
                                    </p>
                                </div>
                            </div>
                            <p className="mb-6">
                                Many borrowers lose their homes and businesses not because they don't have a case, but because they don't have the right representation. Our SARFAESI experts analyze every notice for errors in date, amount, classification, and service. We know exactly which leverage points will work in the DRT to protect your assets and give you the time needed to reach a settlement.
                            </p>
                        </section>

                        <section id="adr-powerhouse" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">ADR: The Modern Path to Settlement</h2>
                            <p className="mb-6 text-lg">
                                Alternative Dispute Resolution (ADR) is rapidly becoming the preferred method for resolving loan conflicts in India. It offers a way to reach a conclusion that is binding but avoids the 'win or lose' aggression of a court room. The three main pillars of ADR in banking are Arbitration, Mediation, and Lok Adalats.
                            </p>
                            <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100 mb-8">
                                <h3 className="text-xl font-bold text-purple-800 mb-4">Why Choose ADR?</h3>
                                <p className="mb-4 text-purple-900/80">
                                    Courts in India are overburdened, and a typical debt recovery case can last for decades. ADR provides a 'fixed timeline' for resolution. Furthermore, ADR processes are private and confidential, protecting your professional reputation while you resolve your financial issues.
                                </p>
                                <div className="grid grid-cols-2 gap-4 mt-6">
                                    <div className="bg-white p-4 rounded-lg border border-purple-200">
                                        <span className="block font-bold text-purple-700 mb-1">Arbitration</span>
                                        <span className="text-xs text-gray-500">A private judge (arbitrator) makes a binding decision based on evidence.</span>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg border border-purple-200">
                                        <span className="block font-bold text-purple-700 mb-1">Mediation</span>
                                        <span className="text-xs text-gray-500">A neutral facilitator helps parties find a mutually acceptable compromise.</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="mediation-strategies" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Mastering Mediation and Negotiation</h2>
                            <p className="mb-6">
                                Mediation is an art as much as a legal process. Unlike litigation, which focuses on rights and wrongs, mediation focuses on 'interests'. What does the bank want? Primarily, they want to reduce their NPA numbers. What do you want? You want to pay an amount that you can realistically afford while saving your credit score.
                            </p>
                            <p className="mb-6">
                                Our approach to negotiation is built on 'Strategic Preparation'. We create a detailed 'Settlement Proposal' that highlights the risks for the bank if the matter goes to court. We use your financial data, market conditions, and any legal gaps in the bank's case as bargaining chips. This 'interest-based negotiation' often results in One Time Settlements (OTS) that are significantly lower than the bank's initial demand.
                            </p>
                            <blockquote className="border-l-4 border-[#1F5EFF] pl-4 italic bg-gray-50 p-6 rounded-r-lg my-8">
                                "A successful negotiation is not about defeating the bank; it is about finding a solution where the bank's recovery goals and the borrower's survival goals meet."
                            </blockquote>
                        </section>

                        <section id="banking-ombudsman-help" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Banking Ombudsman: Redressal Outside the Court Room</h2>
                            <p className="mb-6">
                                The RBI's Banking Ombudsman Scheme is your primary defense against 'deficiency in service' and 'unfair practices'. This is a free mechanism that allows you to complain against banks for issues like non-adherence to fair practices code, delay in loan disbursement, or unauthorized debit of charges.
                            </p>
                            <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100 mb-8">
                                <h3 className="text-xl font-bold text-emerald-800 mb-4">When to Approach the Ombudsman</h3>
                                <ul className="space-y-3 text-emerald-900/80">
                                    <li>• If the bank has failed to respond to your written complaint within 30 days.</li>
                                    <li>• If the bank's response is unsatisfactory or has rejected your valid claims.</li>
                                    <li>• If there is a clear violation of RBI guidelines regarding interest rates or recovery procedures.</li>
                                    <li>• If you have suffered mental harassment or professional damage due to bank errors.</li>
                                </ul>
                            </div>
                            <p className="mb-6">
                                The Ombudsman's decision is binding on the bank unless you choose to appeal. It is a powerful way to hold banks accountable without the expense of a lawyer in a traditional court. We help you draft comprehensive Ombudsman complaints that include all necessary evidence to ensure a high success rate.
                            </p>
                        </section>

                        <section id="consumer-court-pathway" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Consumer Court: Seeking Compassion and Compensation</h2>
                            <p className="mb-6 text-lg">
                                While DRTs handle recovery, Consumer Courts handle 'service quality'. A bank is a service provider, and you are its consumer. If a bank engages in 'Unfair Trade Practices'—such as not informing you of interest changes or misrepresenting loan terms—Consumer Courts can grant you significant compensation.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold mb-4">Deficiency in Service</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                        This includes delays in returning original title deeds after the loan is paid off. In many landmark cases, Consumer Courts have fined banks lakhs of rupees for losing or delaying the return of property documents.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold mb-4">Harassment Protection</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                        If recovery agents use abusive language or call at odd hours, you can approach the Consumer Court for mental agony and harassment. The court can order the bank to pay damages that often offset your outstanding dues.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="co-borrower-guarantor" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">The Rights of Co-Borrowers and Guarantors</h2>
                            <p className="mb-6">
                                In many loan disputes, the co-borrower or the guarantor is the one who suffers the most, often without even realizing their full liability. A guarantor is legally 'standing in the shoes' of the borrower. However, a guarantor also has the right to be informed about any changes in the loan agreement or a default by the primary borrower.
                            </p>
                            <p className="mb-6">
                                If you have signed as a guarantor, you have the 'Right of Subrogation', which means once you pay the debt, you step into the shoes of the creditor and can recover the money from the primary borrower. We provide specialized legal advisory for guarantors to ensure that their personal assets are protected even if the business or the primary borrower fails. In many cases, we have successfully argued that a guarantor is 'discharged' from liability due to unauthorized variations in the loan terms by the bank.
                            </p>
                        </section>

                        <section id="unfair-bank-practices" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Stopping Unfair and Aggressive Bank Practices</h2>
                            <p className="mb-6 text-lg">
                                The RBI's 'Fair Practices Code' is not a suggestion; it is a mandatory rulebook. Banks are strictly prohibited from using force or intimidation during recovery. They cannot call you before 8 AM or after 7 PM. They cannot contact your neighbors or relatives to reveal your debt situation. Any such action is a serious violation that can be met with immediate legal intervention.
                            </p>
                            <div className="bg-[#2E2E2E] text-white p-8 rounded-2xl mb-8">
                                <h3 className="text-2xl font-bold mb-4">Your Professional Shield Against Bullying</h3>
                                <p className="mb-4 opacity-80">
                                    When you engage SettleLoans, we send a formal legal notice to the bank's nodal officer and the recovery agency. This notice puts them on 'Strict Legal Warning' that any further harassment will result in a police complaint and an Ombudsman case. In 95% of cases, the harassment stops within 24 hours of our intervention, allowing for a peaceful negotiation to begin.
                                </p>
                            </div>
                        </section>

                        <section id="legal-reply-masterclass" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Masterclass: Drafting the Perfect Legal Reply</h2>
                            <p className="mb-6 text-center text-gray-500">A well-crafted reply is your first line of defense. It creates a paper trail of your 'honesty and good faith'.</p>
                            <div className="grid md:grid-cols-2 gap-6 not-prose">
                                <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                                    <h4 className="font-bold text-[#2E2E2E] mb-3">Audit the Claim</h4>
                                    <p className="text-sm text-gray-600">The first step is to verify the bank's numbers. If their claimed amount differs even by a few thousand from your records, it provides a technical ground for objection.</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                                    <h4 className="font-bold text-[#2E2E2E] mb-3">Explain the 'Reasonable Cause'</h4>
                                    <p className="text-sm text-gray-600">Don't just say you can't pay. Detail the medical emergencies, business losses, or legal disputes that caused the delay. Courts are more lenient when 'force majeure' events are proven.</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                                    <h4 className="font-bold text-[#2E2E2E] mb-3">Highlight Service Lapses</h4>
                                    <p className="text-sm text-gray-600">Mention any instance where the bank failed to provide statements or ignored your previous letters. This shifts the 'burden of proof' back to the institution.</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                                    <h4 className="font-bold text-[#2E2E2E] mb-3">Propose a Solution</h4>
                                    <p className="text-sm text-gray-600">Always end with a willingness to resolve. Propose a meeting or a restructuring. This makes it harder for the bank to prove you are a 'wilful defaulter' in the future.</p>
                                </div>
                            </div>
                        </section>

                        <section id="avoiding-litigation" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Avoiding the Trap of Long Term Litigation</h2>
                            <p className="mb-6">
                                Litigation in India is a marathon, and the banks have more resources than you do. For them, a decade long court case is just another item on their balance sheet. For you, it is a source of constant stress and wasted life energy. This is why our primary goal is always to find a 'settlement' rather than just a 'judgment'.
                            </p>
                            <div className="bg-orange-50 border-l-4 border-orange-500 p-8 rounded-r-xl mb-8">
                                <h3 className="text-xl font-bold text-orange-800 mb-4">The Settlement Mindset</h3>
                                <p className="text-orange-900/80 mb-4 text-sm font-bold">
                                    We look for 'win-win' scenarios. By using the DRT or the Ombudsman as a platform, we create a situation where the bank realizes that settling today is more profitable than litigating for the next 10 years. This strategic realism is what makes SettleLoans the leader in debt resolution.
                                </p>
                            </div>
                        </section>

                        <section id="settleloans-methodology" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">How SettleLoans Resolves Your Complex Disputes</h2>
                            <div className="bg-[#2E2E2E] text-white p-8 rounded-2xl mb-8 border border-[#1F5EFF]/20">
                                <h3 className="text-2xl font-bold mb-4">Our Resolution Roadmap</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#1F5EFF] text-white flex items-center justify-center font-bold mr-4 mt-1">1</div>
                                        <div>
                                            <strong>Free Legal Audit:</strong> We analyze your loan documents, statements, and notices to find the legal leverage points.
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#1F5EFF] text-white flex items-center justify-center font-bold mr-4 mt-1">2</div>
                                        <div>
                                            <strong>Protective Intervention:</strong> We send formal legal notices to stop all harassment and establish our role as your representative.
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#1F5EFF] text-white flex items-center justify-center font-bold mr-4 mt-1">3</div>
                                        <div>
                                            <strong>Forum Selection:</strong> Whether it is the DRT, the Ombudsman, or Mediation, we choose the forum that offers you the most protection.
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#1F5EFF] text-white flex items-center justify-center font-bold mr-4 mt-1">4</div>
                                        <div>
                                            <strong>High level Negotiation:</strong> Our senior legal experts negotiate with bank decision makers to reach a final, affordable settlement.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section id="success-case-studies" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Stories of Successfully Resolved Disputes</h2>
                            <div className="grid md:grid-cols-2 gap-6 not-prose">
                                {[
                                    {
                                        name: "Rahul M.",
                                        loc: "Pune",
                                        type: "Interest Rate Dispute",
                                        outcome: "5 Lakh Refunded",
                                        story: "The bank had increased my home loan rate by 3% without notice. SettleLoans took the matter to the Banking Ombudsman. Not only did the rate get corrected, but the bank also had to refund the excess interest collected over 2 years."
                                    },
                                    {
                                        name: "Sunita G.",
                                        loc: "Kolkata",
                                        type: "Co-borrower Conflict",
                                        outcome: "Liability Shared & Fixed",
                                        story: "My business partner left the country, and the bank was harassing me for the full loan. SettleLoans mediated a three way meeting with the bank and the partner's family, resulting in a fair split of the liability."
                                    },
                                    {
                                        name: "Anita P.",
                                        loc: "Chennai",
                                        type: "Lost Title Deeds",
                                        outcome: "2 Lakh Compensation",
                                        story: "I paid off my loan, but the bank lost my property papers. Through the Consumer Court, SettleLoans forced the bank to issue public notices at their cost and pay me substantial compensation for the delay."
                                    },
                                    {
                                        name: "Karan D.",
                                        loc: "Delhi",
                                        type: "Agencies & Harassment",
                                        outcome: "Harassment Stopped",
                                        story: "Recovery agents were threatening my parents for a loan I had already settled with another branch. SettleLoans filed a police complaint and an RBI complaint. Within 2 days, the bank manager apologized in writing."
                                    }
                                ].map((s, i) => (
                                    <div key={i} className="bg-white p-8 rounded-2xl border border-[#DEDEDE] shadow-sm hover:shadow-xl transition-all border-l-8 border-l-[#1F5EFF]">
                                        <div className="flex items-center mb-6">
                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-[#1F5EFF] font-black text-xs mr-4">
                                                {s.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-[#2E2E2E]">{s.name}</h5>
                                                <p className="text-xs text-gray-400">{s.loc}</p>
                                            </div>
                                            <div className="ml-auto text-yellow-400 text-sm">★★★★★</div>
                                        </div>
                                        <div className="mb-4 text-xs font-mono bg-green-50 p-2 rounded border border-green-100 uppercase tracking-tighter">
                                            <span className="block text-green-700 font-bold">{s.outcome}</span>
                                        </div>
                                        <p className="text-sm text-gray-600 italic leading-relaxed">"{s.story}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="faqs" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Frequently Asked Questions</h2>
                            <div className="space-y-4 not-prose">
                                {[
                                    { q: "What is a 'Reasoned Reply' from a bank?", a: "When you object to a SARFAESI notice, the bank must provide a 'Reasoned Reply'—a detailed explanation of why they are accepting or rejecting your points. A generic 'we reject your request' is not legally sufficient." },
                                    { q: "Can a bank freeze my personal account for a corporate loan?", a: "Only if you have signed a personal guarantee or are a co-borrower. Corporate and personal identities are separate except when such contractual links exist." },
                                    { q: "What is the limitation period for bank recovery?", a: "Usually, three years from the date of default. However, any payment made or acknowledgement of debt signed within these three years restarts the clock." },
                                    { q: "Can I approach the Ombudsman while a DRT case is pending?", a: "The Ombudsman usually does not take cases that are already sub-judice (pending in a court or tribunal). It is best to approach the Ombudsman before the bank files a formal suit." },
                                    { q: "What is 'Force Majeure' in loan agreements?", a: "It refers to unexpected events like natural disasters or pandemics that make it impossible to fulfill a contract. While rarely found in personal loans, it is a common defense in business loan disputes." },
                                    { q: "Is an Arbitration Award final?", a: "Yes, an arbitration award is equivalent to a court decree. It can only be challenged on very narrow grounds like lack of notice or fraud by the arbitrator." },
                                    { q: "How long does a Consumer Court case take?", a: "While intended to be fast, it can take 1 to 2 years. However, the psychological advantage of having a pending consumer case often pushes banks to settle out of court." },
                                    { q: "What is 'Joint and Several Liability'?", a: "It means that each person who signs the loan agreement is responsible for the full debt. The bank can choose to recover the entire amount from just one person if they wish." },
                                    { q: "Can SettleLoans represent me in the Supreme Court?", a: "We have a network of senior lawyers and advocates on record who handle everything from District Courts to the Supreme Court of India." },
                                    { q: "Does the bank have to provide me with a statement of accounts?", a: "Yes, under the Fair Practices Code, banks are mandated to provide regular statements and full disclosure of all charges and interest applied to your account." },
                                    { q: "What is the difference between an NPA and a Default?", a: "A default is a single missed payment. An NPA (Non-Performing Asset) is a regulatory classification that happens after 90 days of continuous default." },
                                    { q: "Can I settle my loan while recovery agents are at my door?", a: "Yes, in fact, professional intervention can stop the agents immediately and open a formal channel of communication with the bank manager instead." }
                                ].map((faq, i) => (
                                    <details key={i} className="group bg-white border border-[#DEDEDE] rounded-xl overflow-hidden hover:shadow-md transition-all border-b-4 border-b-[#1F5EFF]/20">
                                        <summary className="flex justify-between items-center p-5 cursor-pointer font-black text-[#2E2E2E] list-none bg-gray-100 group-open:bg-white transition-colors">
                                            <span className="text-lg">{i + 1}. {faq.q}</span>
                                            <span className="transition-transform group-open:rotate-180">
                                                <svg className="w-5 h-5 text-[#1F5EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7"></path></svg>
                                            </span>
                                        </summary>
                                        <div className="px-5 pb-5 text-[#2E2E2E] opacity-90 leading-relaxed border-t border-[#DEDEDE] pt-4 mt-0 bg-white">
                                            {faq.a}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </section>

                        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
                            <p className="text-gray-400 text-sm italic">Disclaimer: SettleLoans is a tech enabled legal advisory firm. We are not a law firm, but we work with a network of experienced advocates and specialists to provide resolution services. Final legal decisions and outcomes depend on the facts of each case and the discretion of the respective judicial authorities.</p>
                        </div>

                        {/* Mobile CTA */}
                        <div className="lg:hidden mt-16 mb-8">
                            <div className="bg-[#1F5EFF] text-white p-10 rounded-[40px] shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
                                <h3 className="text-2xl font-black mb-6 relative z-10">The Ultimate Dispute Strategy</h3>
                                <p className="text-lg mb-8 relative z-10 font-medium">
                                    Facing a legal battle with your lender? Our focused dispute resolution services help you find a fair middle ground and avoid years of stressful litigation.
                                </p>
                                <Link href="/contact" className="inline-block bg-white text-[#1F5EFF] font-black py-4 px-12 rounded-full hover:scale-105 transition-all text-xl relative z-10 shadow-lg">
                                    Initiate Resolution Now
                                </Link>
                            </div>
                        </div>
                    </article>

                    {/* Right Column: Sticky Sidebar */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 flex flex-col items-center">
                                <div className="bg-[#1F5EFF] w-full p-4 text-center">
                                    <h3 className="text-lg font-black text-white">Resolve Your Dispute</h3>
                                </div>
                                <div className="p-6 text-center">
                                    <div className="w-16 h-16 bg-[#1F5EFF]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#1F5EFF]/20">
                                        <svg className="w-8 h-8 text-[#1F5EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                    </div>
                                    <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                                        Tired of the legal back-and-forth? Our expert negotiators can help settle your loan disputes efficiently.
                                    </p>
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md">
                                        Talk to an Expert
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2">Resolution Tools</h3>
                                <ul className="space-y-4 text-sm font-bold">
                                    <li>
                                        <Link href="/best-lawyer-for-msme-business-loan-dispute" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            MSME Dispute Law
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/legal-notice-for-loan-recovery" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            Notice Defense
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/bank-arbitration-notice-loan" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            Arbitration Help
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/debt-settlement-company-in-india" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            Settlement Options
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
