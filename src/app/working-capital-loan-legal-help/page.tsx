import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
    title: "Working Capital Loan Legal Help in India | Recovery & Settlement Support",
    description: "Expert legal help for working capital loan disputes in India. Navigate RBI recovery guidelines, legal settlement procedures, and protect your business from harassment. Get a professional shield today.",
    alternates: {
        canonical: "https://settleloans.in/working-capital-loan-legal-help",
    },
};

export default function WorkingCapitalLoanLegalHelpPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/working-capital-loan-legal-help#webpage",
                "url": "https://settleloans.in/working-capital-loan-legal-help",
                "name": "Working Capital Loan Legal Help in India | Recovery & Settlement Support",
                "description": "Comprehensive legal advisory for businesses struggling with working capital loan repayments in India.",
                "breadcrumb": { "@id": "https://settleloans.in/working-capital-loan-legal-help#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/working-capital-loan-legal-help#breadcrumb",
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
                        "name": "Working Capital Loan Legal Help",
                        "item": "https://settleloans.in/working-capital-loan-legal-help"
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/working-capital-loan-legal-help#article",
                "headline": "Working Capital Loan Legal Help in India: Your Professional Shield",
                "description": "Navigate the complex landscape of working capital loan recovery, legal notices, and settlement strategies in India with expert guidance.",
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
                "mainEntityOfPage": { "@id": "https://settleloans.in/working-capital-loan-legal-help#webpage" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/working-capital-loan-legal-help#product",
                "name": "Business Loan Legal Advisory Services",
                "description": "Expert legal representation and negotiation services for business and working capital loan settlements.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "1250"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Amit K." },
                        "datePublished": "2024-02-15",
                        "reviewBody": "SettleLoans helped my business when we were overwhelmed by recovery calls for our working capital loan. Their legal team is top notch.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Sanjay R." },
                        "datePublished": "2024-03-01",
                        "reviewBody": "The best legal support for MSME business loans. They understood our cash flow issues and negotiated a fair settlement.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://settleloans.in/working-capital-loan-legal-help#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is a working capital loan in India?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A working capital loan is a credit facility that helps businesses manage their daily operational costs such as salaries, rent, and raw material purchases. It handles the gap between accounts receivable and accounts payable."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What happens if my business defaults on a working capital loan?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Defaulting can lead to your account being marked as an NPA, recovery actions under SARFAESI Act for secured loans, or civil suits for unsecured loans. It also severely impacts your business credit score (CIBIL Rank)."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are there RBI guidelines against recovery agent harassment for business loans?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, RBI guidelines strictly prohibit physical force, verbal abuse, or calling at odd hours (before 8 AM or after 7 PM). Lenders must respect the privacy and dignity of human beings during the recovery process."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I settle a working capital loan for a reduced amount?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, banks often consider 'One Time Settlement' (OTS) for businesses facing genuine financial hardship. Professional negotiators can help you reach a settlement that reduces the total payout significantly."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is it possible to restructure a working capital loan?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, banks can restructure loans by extending the tenure, reducing the interest rate, or providing a moratorium period, especially if the business has a viable turnaround plan."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the role of DRT in working capital loan recovery?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The Debt Recovery Tribunal (DRT) handles cases where the loan amount exceeds 20 lakh rupees. It provides a specialized forum for banks to recover dues and for borrowers to defend their legal rights."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does a loan settlement affect my future borrowing capacity?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, a settled loan appears on your credit report and can make it difficult to get new loans in the short term. However, it is often better than a long term default that keeps accumulating interest."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can a bank seize my machinery for a working capital loan?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "If the loan is secured by hypothecation of machinery, the bank can technically take possession under the SARFAESI Act after following the proper legal procedure, including a 60 day notice."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do I deal with a legal notice from a bank?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Do not ignore it. Consult a legal expert to draft a proper reply. Replying within the stipulated time shows your intent to resolve the matter and can prevent further escalation."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can SettleLoans help with MSME loan disputes?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, SettleLoans specializes in representing MSMEs and business owners in negotiations with banks and NBFCs, helping them reach sustainable settlements and stopping harassment."
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
                            Business Debt Resolution
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                            Working Capital Loan <br className="hidden md:block" /> Legal Help in India
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
                            Protect your business assets and your peace of mind. Get expert legal guidance to navigate working capital disputes, recovery notices, and bank settlements.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Get a Free Legal Review
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
                                    Working Capital Loan Legal Help
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
                                { id: "understanding-wc-loans", title: "Understanding Working Capital" },
                                { id: "legal-framework", title: "The Legal Framework" },
                                { id: "common-disputes", title: "Common Loan Disputes" },
                                { id: "recovery-guidelines", title: "RBI Recovery Guidelines" },
                                { id: "sarfaesi-act", title: "The Power of SARFAESI" },
                                { id: "defending-machinery", title: "Protecting Your Assets" },
                                { id: "bank-negotiations", title: "Negotiating with Banks" },
                                { id: "ots-process", title: "One Time Settlement (OTS)" },
                                { id: "restructuring-options", title: "Restructuring Strategies" },
                                { id: "drt-procedures", title: "DRT Procedures and Help" },
                                { id: "msme-protections", title: "MSME Specific Protections" },
                                { id: "legal-notice-reply", title: "How to Reply to Notices" },
                                { id: "avoiding-insolvency", title: "Avoiding Insolvency" },
                                { id: "settleloans-expertise", title: "How We Protect You" },
                                { id: "client-testimonials", title: "Success Stories" },
                                { id: "faqs", title: "Common Questions" }
                            ]}
                        />
                    </aside>

                    {/* Middle Column: Content */}
                    <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">

                        <section id="understanding-wc-loans" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Navigating the Storm: <span className="text-black">Expert Help for Business Loans</span>
                            </h2>
                            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 z-0"></div>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                                    Running a business in India is a journey filled with both grand opportunities and significant challenges. One of the most common lifelines for any enterprise is the working capital loan. It is the fuel that keeps the engine running, allowing you to bridge the gap between paying your suppliers and receiving payments from your customers. However, when the cash flow cycle breaks due to market volatility, delayed payments, or unforeseen operational hurdles, this lifeline can quickly turn into a source of immense legal and financial pressure.
                                </p>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                                    If you are currently facing a situation where your working capital limits are overdrawn, or your bank is sending you reminders and legal notices, please understand that you are not alone. The business environment is often unpredictable, and many successful entrepreneurs have faced similar crossroads. At SettleLoans, we believe that a business setback is not a personal failure. We are here to provide you with the legal shield and the strategic guidance you need to protect your company's future and your personal dignity.
                                </p>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 font-bold text-[#1F5EFF]">
                                    Do not let the weight of debt crush your entrepreneurial spirit. With the right legal help, every business dispute can be resolved with dignity.
                                </p>
                            </div>
                        </section>

                        <section id="legal-framework" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                                The Legal Framework of Working Capital Loans
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                In the Indian legal landscape, working capital loans are governed by a combination of banking regulations, contract laws, and specialized recovery statutes. Understanding this framework is the first step toward effective defense. Unlike a simple personal loan, a working capital facility is often complex, involving hypothecation of stocks, book debts, and sometimes collective guarantees from directors.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                The primary laws that come into play when a working capital loan enters a dispute include the Banking Regulation Act, 1949, the Indian Contract Act, 1872, and the Recovery of Debts and Bankruptcy Act, 1993. For secured loans, the SARFAESI Act, 2002, is the most powerful tool used by banks, and consequently, the one you must be most prepared to defend against. These laws define the rights of the lender to recover their dues and the rights of the borrower to fair treatment and legal recourse.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Furthermore, the Reserve Bank of India (RBI) issues regular circulars and master directions that further refine how banks should handle stressed accounts. These directions are not just suggestions; they are binding rules that banks must follow. If a bank violates these prudential norms or fails to follow the prescribed procedure for recovery, it can provide significant legal leverage to the borrower. Expert legal help ensures that these nuances are identified and used to your advantage during negotiations or court proceedings.
                            </p>
                            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-8">
                                <h3 className="text-xl font-bold mb-6">Key Components of a Business Loan Agreement</h3>
                                <p className="mb-4 text-sm text-gray-600">
                                    Your loan agreement is the bedrock of your legal relationship with the bank. Most business owners sign these voluminous documents without a thorough legal review, only to realize the implications when a dispute arises.
                                </p>
                                <p className="mb-4 text-sm text-gray-600">
                                    Critical clauses often involve the bank's right to vary interest rates, the conditions under which a loan can be recalled, and the specific assets that are pledged as security. A legal professional will analyze these clauses to find inconsistencies or unfair terms that can be challenged in a court of law.
                                </p>
                                <ul className="grid md:grid-cols-2 gap-4 text-sm font-medium">
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                                        Hypothecation of Current Assets
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                                        Personal Guarantees of Directors
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                                        Financial Covenants and Ratios
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                                        Cross Default Provisions
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                                        Arbitration and Jurisdiction Clauses
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                                        Penalty Interest and Overdue Charges
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section id="common-disputes" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                                Common Business Loan Disputes and How to Handle Them
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Disputes between a business and its bank often start over technical issues rather than outright defaults. For example, a bank might suddenly reduce your drawing power based on an updated stock audit that you find unfair. Or there might be a disagreement over the valuation of your immovable property that serves as collateral. These technical disputes, if left unaddressed, can escalate into full scale legal battles.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Another common flashpoint is the invocation of personal guarantees. Banks often try to put pressure on directors and their families by threatening to attach personal assets that were not part of the business security. Legal help is crucial in such moments to ensure that the bank stays within its legal limits and does not overstep its authority. We have seen cases where banks have tried to recover dues from personal accounts that have no legal connection to the business loan.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                When you are in a dispute, document everything. Keep records of all emails, letters, and even summaries of phone conversations with your bank manager. These records form the evidence that your legal team will use to build your case. Remember, in legal matters, what you can prove is just as important as the truth. A proactive approach to documentation can often settle a dispute before it ever reaches a tribunal.
                            </p>
                            <div className="bg-blue-50 p-8 rounded-xl border border-blue-200 mb-8">
                                <h3 className="text-xl font-bold mb-4 text-blue-900">Understanding 'Drawing Power' Disputes</h3>
                                <p className="text-sm text-blue-800 leading-relaxed mb-4">
                                    Drawing Power (DP) is the actual amount you can withdraw from your sanctioned limit, based on the value of your current assets (stocks and debtors). Banks often use third party auditors to verify these values.
                                </p>
                                <p className="text-sm text-blue-800 leading-relaxed">
                                    If an auditor significantly undervalues your stock, your DP will drop, leading to an 'overdrawn' status. Legally, you have the right to challenge such audit reports by providing your own audited statements or by requesting a re-audit from a different firm. This technical defense can prevent your account from being classified as an NPA.
                                </p>
                            </div>
                            <div className="grid sm:grid-cols-3 gap-4 my-8">
                                <div className="bg-white p-5 rounded-xl border border-[#DEDEDE] shadow-sm text-center">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </div>
                                    <h4 className="font-bold text-[#2E2E2E] mb-2">Interest Rate Variances</h4>
                                    <p className="text-xs text-gray-500">Challenging unfair interest hikes that violate the original contract.</p>
                                </div>
                                <div className="bg-white p-5 rounded-xl border border-[#DEDEDE] shadow-sm text-center">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                    </div>
                                    <h4 className="font-bold text-[#2E2E2E] mb-2">Collateral Valuation</h4>
                                    <p className="text-xs text-gray-500">Defending against undervalued property assessments by bank auditors.</p>
                                </div>
                                <div className="bg-white p-5 rounded-xl border border-[#DEDEDE] shadow-sm text-center">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    </div>
                                    <h4 className="font-bold text-[#2E2E2E] mb-2">Personal Liabilities</h4>
                                    <p className="text-xs text-gray-500">Separating business entity debts from individual assets of directors.</p>
                                </div>
                            </div>
                        </section>

                        <section id="recovery-guidelines" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">RBI Guidelines: Your Protection Against Harassment</h2>
                            <div className="bg-white p-8 rounded-2xl border border-[#DEDEDE] shadow-sm">
                                <p className="mb-4">
                                    The Reserve Bank of India has clear and strict guidelines regarding the conduct of recovery agents. These guidelines are designed to ensure that even a defaulting borrower is treated with dignity and fairness. For a business owner, these rules are a critical line of defense. Harassment can disrupt your family life and your ability to focus on reviving your business, and the law does not permit it.
                                </p>
                                <p className="mb-4">
                                    Agents are forbidden from using intimidation, physical force, or verbal abuse. They cannot threaten you with illegal consequences. They must also respect your privacy; they cannot contact your business partners, customers, or employees to reveal your debt situation with the intent of shaming you. Such actions are serious violations of banking codes and can be challenged legally.
                                </p>
                                <p className="mb-4 text-sm text-gray-500 italic">
                                    Important: Always record any interaction with a recovery agent. If they behave aggressively, this evidence is vital for filing a formal complaint or for your defense in a tribunal.
                                </p>
                                <div className="flex gap-2">
                                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-md text-xs font-bold">Harassment Protection</span>
                                    <span className="px-3 py-1 bg-green-50 text-green-600 rounded-md text-xs font-bold">RBI Compliant</span>
                                </div>
                            </div>
                        </section>

                        <section id="sarfaesi-act" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">SARFAESI Act: Understanding the Bank's Power</h2>
                            <p className="mb-6">
                                The SARFAESI Act, 2002, is the most common legal route for banks to recover secured working capital loans. It allows banks to take possession of and sell collateral assets without the direct intervention of a court. This is why it is often feared by business owners. However, the Act also provides specific procedural safeguards for the borrower that must be strictly followed by the bank.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-orange-50/50 p-6 rounded-xl border border-orange-100">
                                    <h3 className="text-xl font-bold text-orange-800 mb-3">The 13(2) Notice</h3>
                                    <p className="text-sm text-orange-900/80 leading-relaxed">
                                        This is the first formal step. The bank must give you 60 days to clear your dues. You have the legal right to send a 'Representation or Objection' to this notice. The bank is legally bound to reply to your objections within 15 days, explaining why they are accepting or rejecting your points.
                                    </p>
                                </div>
                                <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                                    <h3 className="text-xl font-bold text-blue-800 mb-3">The 13(4) Notice</h3>
                                    <p className="text-sm text-blue-900/80 leading-relaxed">
                                        If you do not pay within the 60 day period, the bank can issue a possession notice. At this stage, you have the right to file a Securitization Application (SA) before the Debt Recovery Tribunal (DRT) to challenge the bank's action and seek a stay on the possession.
                                    </p>
                                </div>
                            </div>
                            <p className="mb-6">
                                Many businesses lose their assets simply because they wait too long to seek legal help. A timely challenge in the DRT can often expose procedural errors by the bank, such as incorrect classification of the account as an NPA or failure to properly serve notices. These errors can derail the bank's recovery process for months, giving you the time you need to negotiate a settlement or restructure your business.
                            </p>
                        </section>

                        <section id="defending-machinery" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Protecting Your Machinery and Business Assets</h2>
                            <p className="mb-6">
                                For a manufacturing unit, machinery is the most vital asset. If a bank takes possession of your machines, the business effectively stops, making it impossible for you to earn and repay the debt. This is why defending your manufacturing assets is our highest priority. The law recognizes that a business must be given a fair chance to survive.
                            </p>
                            <p className="mb-6">
                                Legally, we can argue for the protection of essential machinery by showing a viable repayment plan. If the value of the machinery is significantly higher than the overdue amount, we can seek the court's intervention to prevent its seizure. Additionally, the bank must follow strict rules regarding the valuation and storage of seized machinery; any negligence on their part can be a ground for legal action.
                            </p>
                            <blockquote className="border-l-4 border-[#1F5EFF] pl-4 italic bg-gray-50 p-6 rounded-r-lg my-8">
                                "A factory chimney must keep smoking. Our legal strategy is built on the principle that production should never stop due to a financial dispute that can be settled through negotiation."
                            </blockquote>
                        </section>

                        <section id="bank-negotiations" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Strategies for Successful Bank Negotiations</h2>
                            <p className="mb-6">
                                Negotiating with a bank is not just about pleading for mercy; it is about presenting a solid business and legal case. Banks are commercial institutions, and their primary goal is to recover as much money as possible in the shortest amount of time. If you can show them that a settlement or a restructuring is more profitable for them than a long legal battle, they will be much more willing to listen.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                                    <div>
                                        <strong>Present a Viable Turoaround Plan:</strong> Show the bank exactly how you intend to generate cash flow to repay the loan. Use realistic projections based on current orders and market conditions.
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                                    <div>
                                        <strong>Highlight Asset Value vs Loan Amount:</strong> If your collateral is worth more than the loan, the bank has less incentive to settle for a low amount. If it is worth less, they might be more eager to close the deal and move on.
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                                    <div>
                                        <strong>Identify Legal Loopholes:</strong> Use the gaps in the bank's own documentation or recovery procedure as a bargaining chip. Banks hate legal uncertainty and will often settle to avoid a potentially unfavorable court ruling.
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                                    <div>
                                        <strong>Engage Professional Negotiators:</strong> Banks take you more seriously when you are represented by legal experts. Professional representation signals that you know your rights and are prepared to defend them.
                                    </div>
                                </li>
                            </ul>
                        </section>

                        <section id="ots-process" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">One Time Settlement (OTS): The Final Solution</h2>
                            <p className="mb-6 text-red-600 font-bold">
                                An OTS is a final compromise where the bank agrees to accept a lump sum payment that is less than the total outstanding amount to close the account permanently.
                            </p>
                            <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-xl mb-8">
                                <h3 className="text-xl font-bold text-red-800 mb-4">Steps to a Successful OTS</h3>
                                <ul className="space-y-3 text-red-900/80">
                                    <li>• <strong>Assessment:</strong> Determine the maximum lump sum you can realistically arrange. This might come from selling non-essential assets or from family funds.</li>
                                    <li>• <strong>Formal Proposal:</strong> Draft a detailed OTS proposal letter explaining the reasons for your financial hardship and offering the lump sum.</li>
                                    <li>• <strong>Negotiation Cycles:</strong> Banks rarely accept the first offer. Be prepared for several rounds of back-and-forth discussions involving senior bank officials.</li>
                                    <li>• <strong>Sanction Letter:</strong> Once agreed, ensure you get a formal OTS Sanction Letter in writing. It should clearly state the amount, the payment schedule, and the withdrawal of all legal cases by the bank.</li>
                                </ul>
                            </div>
                            <p className="mb-6">
                                Be very careful with the timelines of an OTS. If you fail to make the agreed payment on time, the bank can cancel the settlement and the entire original amount, along with all pending interest and penalties, will become due again. An OTS Sanction Letter is a legal contract, and you must treat it with the highest level of priority.
                            </p>
                        </section>

                        <section id="restructuring-options" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Restructuring vs Settlement: Which is Right for You?</h2>
                            <p className="mb-6">
                                For a business that has solid future potential but is currently facing a liquidity crunch, restructuring is often a better option than a full settlement. Restructuring allows you to keep your credit line open and maintain your relationship with the bank, whereas a settlement usually ends the relationship and impacts your credit score.
                            </p>
                            <div className="space-y-8">
                                <div className="bg-white p-8 rounded-2xl border border-blue-100 shadow-sm">
                                    <h3 className="text-2xl font-bold text-blue-600 mb-4">Loan Tenure Extension</h3>
                                    <p className="mb-4">
                                        Extending the period over which the loan must be repaid can significantly reduce your monthly EMI burden, improving your daily cash flow. This is a common strategy for term loans used in business expansion.
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl border border-purple-100 shadow-sm">
                                    <h3 className="text-2xl font-bold text-purple-600 mb-4">FITL (Funding Interest Term Loan)</h3>
                                    <p className="mb-4">
                                        If you are unable to pay the interest on your working capital limits, the bank can sometimes 'capitalize' this interest by turning it into a separate term loan (FITL). This gives you a moratorium period during which you don't have to pay the interest, allowing you to focus on reviving your operations.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="drt-procedures" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">DRT Procedures: The Battleground for Large Loans</h2>
                            <p className="mb-6 text-lg">
                                The Debt Recovery Tribunal (DRT) is where the most significant legal battles for business loans take place. If your loan is above 20 lakh rupees, the bank will likely file an Original Application (OA) in the DRT for recovery. Conversely, you can file a Securitization Application (SA) to challenge their SARFAESI actions.
                            </p>
                            <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100 mb-8">
                                <h3 className="text-xl font-bold text-emerald-800 mb-4">Winning in the DRT</h3>
                                <p className="mb-4 text-emerald-900/80">
                                    The DRT is a specialized court, and the procedures are fast paced. Success in the DRT requires a combination of strong legal arguments and accurate financial data. Our legal team specializes in finding the technical errors in bank petitions that can lead to stays or even the dismissal of recovery attempts.
                                </p>
                                <p className="text-emerald-900/80">
                                    Whether it is challenging the bank's calculation of interest or proving that the security documents are flawed, we leave no stone unturned in protecting your business interests. The DRT also provides a platform for court-led mediation, which can be a very effective route to an OTS.
                                </p>
                            </div>
                        </section>

                        <section id="msme-protections" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Special Legal Protections for MSMEs</h2>
                            <p className="mb-6 text-lg">
                                The Government of India and the RBI have introduced several special protections for Micro, Small, and Medium Enterprises (MSMEs). These businesses are the backbone of our economy, and the laws are designed to prevent their unnecessary closure due to temporary financial distress.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold mb-4">MSME Development Act, 2006</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                        One of the biggest issues for MSMEs is delayed payments from large buyers. The MSME Act provides a mechanism for receiving interest on delayed payments. This 'MSME Samadhaan' portal can be used to recover funds from your debtors, which can then be used to pay off your working capital loans.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold mb-4">Restructuring Framework for MSMEs</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                        The RBI has a special framework that allows banks to restructure MSME loans without classifying them as NPAs, provided the business is viable. This is a massive legal advantage that is often underutilized by business owners who are unaware of these provisions.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="legal-notice-reply" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">How to Reply to a Bank Legal Notice</h2>
                            <p className="mb-6 text-lg">
                                Receiving a legal notice can be intimidating, but it is actually your first real opportunity to present your side of the story. A well-drafted reply can set the stage for a settlement and can even discourage the bank from taking further legal action.
                            </p>
                            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 mb-8">
                                <h3 className="text-2xl font-black text-[#2E2E2E] mb-6">Dos and Don'ts of Replying</h3>
                                <div className="space-y-4">
                                    <div className="bg-white p-4 rounded-lg flex items-center justify-between">
                                        <span className="font-bold">Always Reply on Time</span>
                                        <span className="text-sm text-gray-500">Usually 7 to 15 days</span>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg flex items-center justify-between">
                                        <span className="font-bold">Admit Only the Principal</span>
                                        <span className="text-sm text-gray-500">Challenge unfair interest</span>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg flex items-center justify-between">
                                        <span className="font-bold">Explain the Hardship</span>
                                        <span className="text-sm text-gray-500">Medical/Market issues</span>
                                    </div>
                                </div>
                            </div>
                            <p className="mb-6">
                                Never send a generic reply or template from the internet. Every business situation is unique. Your reply should detail the specific market conditions that affected your cash flow and clearly state your intention to resolve the matter through dialogue. This builds a record of your 'good faith' which is very important if the case eventually reaches a judge.
                            </p>
                        </section>

                        <section id="avoiding-insolvency" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Avoiding Corporate Insolvency (NCLT)</h2>
                            <p className="mb-6">
                                For Private Limited companies, the threat of an Insolvency petition in the NCLT is the ultimate legal challenge. If a creditor (like a bank or even a supplier) files for insolvency and it is admitted, you could lose control of your company to a Resolution Professional (RP). This is a situation that must be avoided at all costs.
                            </p>
                            <div className="bg-[#2E2E2E] text-white p-8 rounded-2xl mb-8">
                                <h3 className="text-2xl font-bold mb-4">Strategic Defense Against Insolvency</h3>
                                <p className="mb-4 opacity-80">
                                    The law provides several defenses against insolvency petitions. For example, if there is a 'pre-existing dispute' regarding the debt, the NCLT can dismiss the petition. Similarly, for MSMEs, there are higher thresholds for filing insolvency. Our legal experts are well-versed in NCLT procedures and act quickly to file objections and seek mediations that protect your corporate identity.
                                </p>
                            </div>
                        </section>

                        <section id="settleloans-expertise" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">How SettleLoans Protects Your Business</h2>
                            <p className="mb-6">
                                SettleLoans is not just a consultancy; we are your strategic partners in crisis management. We understand that as a business owner, your time is best spent on reviving your operations, not on fighting with bank managers or recovery agents. When you engage us, we become your professional shield. We handle the technicalities, the negotiations, and the legal defense, allowing you to focus on what you do best: running your business.
                            </p>
                            <div className="bg-[#2E2E2E] text-white p-8 rounded-2xl mb-8">
                                <h3 className="text-2xl font-bold mb-4">Our Comprehensive Support System</h3>
                                <ul className="space-y-3 text-sm opacity-90">
                                    <li className="flex items-center gap-2">✓ Stop recovery agent harassment immediately through formal legal intervention.</li>
                                    <li className="flex items-center gap-2">✓ Professional replies to all bank notices, including Section 13(2) and Section 13(4) notices.</li>
                                    <li className="flex items-center gap-2">✓ Expert representation in OTS negotiations to save you up to 70% on your total dues.</li>
                                    <li className="flex items-center gap-2">✓ Legal team dedicated to DRT and NCLT defence to protect your business assets and identity.</li>
                                    <li className="flex items-center gap-2">✓ Strategic advice on restructuring and debt consolidation to improve your cash flow.</li>
                                </ul>
                            </div>
                        </section>

                        <section id="client-testimonials" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Business Owners Who Found Freedom</h2>
                            <div className="grid md:grid-cols-2 gap-6 not-prose">
                                {[
                                    {
                                        name: "Amit K.",
                                        loc: "Ludhiana",
                                        type: "Cash Credit Limit",
                                        outcome: "Settled for 45% of Dues",
                                        story: "Our textile unit was struggling after a major order was canceled. The bank was threatening to seize our looms. SettleLoans stayed the action and negotiated an OTS. Today, my factory is running again."
                                    },
                                    {
                                        name: "Sanjay R.",
                                        loc: "Indore",
                                        type: "Ad-hoc Working Capital",
                                        outcome: "Restructured for 5 Years",
                                        story: "We were in an overdrawn status for six months. SettleLoans helped us present a turnaround plan to the bank. They accepted it, and we got a 2-year moratorium on principal. A true life saver."
                                    },
                                    {
                                        name: "Meera D.",
                                        loc: "Surat",
                                        type: "MSME Overdraft",
                                        outcome: "Harassment Stopped",
                                        story: "The recovery agents were sitting in my office reception. It was embarrassing and scary. SettleLoans stepped in, sent a legal notice to the bank, and the harassment stopped within 24 hours. We are now settling peacefully."
                                    },
                                    {
                                        name: "Rahul G.",
                                        loc: "Bangalore",
                                        type: "Personal Loan for Business",
                                        outcome: "Debt Free in 12 Months",
                                        story: "I had taken personal loans to fund my startup. When the startup failed, I thought I'd lose my home. SettleLoans handled the multiple lenders professionally and negotiated reasonable settlements for all."
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
                                        <div className="mb-4 text-xs font-mono bg-green-50 p-2 rounded border border-green-100 uppercase tracking-tighter">
                                            <span className="block text-green-700 font-bold">{review.outcome}</span>
                                        </div>
                                        <p className="text-sm text-gray-600 italic leading-relaxed">"{review.story}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="faqs" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Frequently Asked Questions</h2>
                            <div className="space-y-4 not-prose">
                                {[
                                    { q: "What is an overdrawn working capital account?", a: "An account is overdrawn when the balance exceeds the sanctioned limit or the drawing power. This usually happens when your stock levels fall or when interest is debited but not serviced." },
                                    { q: "Can a bank file a police case for a business loan default?", a: "Loan default is primarily a civil matter. However, if there is evidence of fraud, diversion of funds, or submission of fake stock statements, the bank can file a complaint with the police or the CBI." },
                                    { q: "What should I do if my drawing power is reduced?", a: "You should immediately review your latest stock statement. If the bank's audit is incorrect, provide your audited balance sheets or request a joint inspection with bank officials." },
                                    { q: "Can I sell my hypothecated stock to pay the bank?", a: "Yes, that is the primary purpose of a working capital loan. However, you must ensure that the sale proceeds are deposited into your loan account and NOT diverted for other purposes." },
                                    { q: "Is a director personally liable for a company's working capital loan?", a: "Only if the director has signed a 'Personal Guarantee'. In a Private Limited company, the liability is limited to the company unless such a guarantee is present." },
                                    { q: "How long does the loan settlement process take?", a: "A professional settlement can take anywhere from 3 to 9 months, depending on the complexity of the loan and the willingness of the bank to negotiate." },
                                    { q: "What is the minimum amount for a SARFAESI action?", a: "SARFAESI can be invoked if the overdue amount is more than 1 lakh rupees AND the total amount due is more than 20% of the principal and interest." },
                                    { q: "Can I get a stay on a bank auction?", a: "Yes, by filing an application in the DRT and proving that the bank has committed procedural errors or that you have a viable plan to repay a significant portion of the dues." },
                                    { q: "Does SettleLoans charge an upfront fee?", a: "We have a transparent fee structure that we discuss during your first free consultation. Our fees are designed to be affordable for businesses in distress." },
                                    { q: "How do I start the process with SettleLoans?", a: "Simply click on the contact button or call us. We will schedule a free legal review with our experts to analyze your situation and recommend the best path forward." },
                                    { q: "Can I negotiate a settlement if my case is in the DRT?", a: "Yes, in fact, the DRT often encourages parties to settle through Lok Adalats or mediation even after the formal case has started." },
                                    { q: "What is the impact of an OTS on my company's credit report?", a: "The credit report will show the status as 'Settled'. While this affects future borrowing for a few years, it is often necessary to stop the accumulation of penal interest." }
                                ].map((faq, i) => (
                                    <details key={i} className="group bg-white border border-[#DEDEDE] rounded-xl overflow-hidden hover:shadow-md transition-all border-b-4 border-b-[#1F5EFF]/20">
                                        <summary className="flex justify-between items-center p-5 cursor-pointer font-black text-[#2E2E2E] list-none bg-gray-50 group-open:bg-white transition-colors">
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
                            <p className="text-gray-400 text-sm italic">Disclaimer: SettleLoans is a legal and debt consultancy. We provide representative services for negotiation and settlement. Final decisions rest with the lenders and the respective legal tribunals.</p>
                        </div>

                        {/* Mobile CTA */}
                        <div className="lg:hidden mt-16 mb-8">
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#1F5EFF]/20">
                                <div className="bg-[#1F5EFF] p-6 text-center text-white">
                                    <h3 className="text-2xl font-black mb-2">Save Your Business Today</h3>
                                    <p className="opacity-90 text-sm">Expert legal representation to stop recovery harassment and settle your business loans.</p>
                                </div>
                                <div className="p-8 text-center text-[#DEDEDE]">
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-xl hover:scale-105 transition-all shadow-lg text-lg">
                                        Free Consultation
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Right Column: Sticky Sidebar */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                                <div className="bg-[#1F5EFF] p-4 text-center">
                                    <h3 className="text-lg font-black text-white">Expert Legal Help</h3>
                                </div>
                                <div className="p-6 text-center">
                                    <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                                        Don't fight the banks alone. Let our legal team protect your business interests and assets.
                                    </p>
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg">
                                        Request Review
                                    </Link>
                                    <p className="mt-4 text-xs text-[#DEDEDE]/60 uppercase tracking-widest font-black">100% Legal & Safe</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2">Business Guides</h3>
                                <ul className="space-y-4 text-sm font-bold">
                                    <li>
                                        <Link href="/business-loan-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            Business Loan Options
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/best-lawyer-for-msme-business-loan-dispute" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            MSME Dispute Help
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/best-lawyer-for-consortium-loan-recovery-defence" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            Consortium Defence
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/best-lawyer-for-company-loan-matters" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            Company Loan Law
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
