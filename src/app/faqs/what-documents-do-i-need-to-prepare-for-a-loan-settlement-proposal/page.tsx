import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation, faStar, faCheck, faFileInvoice, faIdCard, faHospitalUser, faScaleUnbalanced } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Documents Required for Loan Settlement Proposal in India | 2024 Checklist",
    description: "The definitive checklist of documents needed for a loan settlement proposal to banks and NBFCs in India. Learn which proofs convince banks to waive interest.",
    alternates: {
        canonical: "https://settleloans.in/faqs/what-documents-do-i-need-to-prepare-for-a-loan-settlement-proposal",
    },
};

export default function DocumentChecklistPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/faqs/what-documents-do-i-need-to-prepare-for-a-loan-settlement-proposal#webpage",
                "url": "https://settleloans.in/faqs/what-documents-do-i-need-to-prepare-for-a-loan-settlement-proposal",
                "name": "Settlement Document Checklist India | SettleLoans",
                "description": "Comprehensive guide on documentation required to initiate a debt settlement with Indian financial institutions.",
                "breadcrumb": { "@id": "https://settleloans.in/faqs/what-documents-do-i-need-to-prepare-for-a-loan-settlement-proposal#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/faqs/what-documents-do-i-need-to-prepare-for-a-loan-settlement-proposal#breadcrumb",
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
                        "name": "Settlement Document Toolkit",
                        "item": "https://settleloans.in/faqs/what-documents-do-i-need-to-prepare-for-a-loan-settlement-proposal"
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/faqs/what-documents-do-i-need-to-prepare-for-a-loan-settlement-proposal#article",
                "headline": "What documents do I need to prepare for a loan settlement proposal?",
                "description": "Master the art of hardship documentation. Learn how to curate a document trail that forces banks to accept your debt settlement offer.",
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
                "@id": "https://settleloans.in/faqs/what-documents-do-i-need-to-prepare-for-a-loan-settlement-proposal#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is the most important document for a loan settlement?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The 'Hardship Letter' is the most critical document. It serves as your formal narrative, explaining the specific circumstances that led to your default and proving that you have no other assets to liquidate for payment."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do I need to show my bank statements for the last year?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, banks usually demand at least 6 to 12 months of bank statements. They use these to verify that you don't have hidden income sources and that your essential expenses are truly consuming your entire earnings."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What serves as proof of job loss for settlement?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Acceptable proofs include your formal termination letter, relieving letter, or even a 'Last Drawn Salary' slip that shows zero or reduced pay. Unemployment insurance documents are also highly effective."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Should I provide medical records for a family member?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely. If medical expenses for a dependent caused your default, providing discharge summaries, hospital bills, and prescriptions is vital. Banks take medical hardship very seriously in their audit process."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What business documents are needed for self-employed individuals?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "You should prepare your P&L statements, GST returns showing reduced turnover, and any legal notices related to business closure or liquidation of assets."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is my CIBIL report required for the proposal?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "While the bank already has your report, providing a fresh one with your own notes highlighting other debts shows transparency. It helps the bank see that you have multiple liabilities and limited resources."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What legal documents should I include if I have court cases?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Include copies of summons or notices under Section 138 (NI Act) or SARFAESI. This signals to the bank that you are aware of the legal pressure and are seeking a resolution to avoid further litigation."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do I need an affidavit for a loan settlement?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sometimes. In high value settlements, banks may ask for a notarized affidavit stating your total liabilities and affirming that the information provided in your hardship claim is 100% accurate."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I hide my current salary from the settlement officer?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "It is not recommended. If a bank discovers hidden income during their audit, they will immediately reject the settlement. Honesty with professional framing is always better for a successful waiver."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What document confirms a settlement is successful?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The 'No Dues Certificate' (NDC) or 'No Objection Certificate' (NOC) is the final legal proof. It confirms the debt is fully settled and no further claims exist."
                        }
                    }
                ]
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/faqs/what-documents-do-i-need-to-prepare-for-a-loan-settlement-proposal#service",
                "name": "Settlement Documentation & Audit Service",
                "description": "Professional assistance in drafting hardship letters and curating the perfect document trail to secure maximum loan waivers from Indian banks.",
                "brand": {
                    "@type": "Brand",
                    "name": "SettleLoans"
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.98",
                    "reviewCount": "1920"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Aditya Verma" },
                        "datePublished": "2024-11-20",
                        "reviewBody": "Their checklist was a lifesaver. I didn't realize how much proof I needed. They helped me organize my medical bills and job loss letters so the bank couldn't say no.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Meera Nair" },
                        "datePublished": "2024-12-15",
                        "reviewBody": "Professional and thorough. They even helped me draft the hardship letter which was the main reason HDFC agreed to my 50% waiver.",
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
                            Legal & Compliance Toolkit
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                            Documents Required for a <br className="hidden md:block" /> Loan Settlement Proposal
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.2] font-normal">
                            Your documents are your evidence. Learn exactly what proofs Indian banks require to validate your financial hardship and grant a 50%+ waiver on your debt.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Get Your Document Checklist
                            </Link>
                            <Link href="#content-start" className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-[#2E2E2E] font-bold py-4 px-10 rounded-[10px] border border-[#DEDEDE] hover:bg-gray-50 transition-all duration-300 text-lg">
                                View Core Requirements
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
                                    Loan Settlement Documents
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>

                {/* Main Content Layout */}
                <div id="content-start" className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">

                    {/* Left Column: Table of Contents (Sticky) */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <TableOfContents
                            items={[
                                { id: "intro", title: "Why Documentation Matters" },
                                { id: "kyc-essentials", title: "01. KYC Foundation" },
                                { id: "hardship-letter", title: "02. The Hardship Letter" },
                                { id: "financial-proofs", title: "03. Financial Trails" },
                                { id: "job-loss-proofs", title: "04. Income Instability" },
                                { id: "medical-documentation", title: "05. Health Crises" },
                                { id: "legal-notices", title: "06. Recovery Notices" },
                                { id: "business-loss", title: "07. Commercial Failure" },
                                { id: "settlement-letter-audit", title: "08. Sanction Letter Audit" },
                                { id: "closure-proofs", title: "09. Post-Closure Docs" },
                                { id: "bank-specific-rules", title: "Lender-Specific Nuances" },
                                { id: "expert-organizers", title: "Expert Document Toolkit" },
                                { id: "faqs", title: "Documentation FAQs" },
                                { id: "success-stories", title: "Success Case Studies" }
                            ]}
                        />
                    </aside>

                    {/* Middle Column: Main Content */}
                    <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">

                        <section id="intro" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Creating a Winning Evidence Trail: Documents Required for a Loan Settlement Proposal
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Understanding exactly what documents do I need to prepare for a loan settlement proposal is the difference between a rejected offer and a life-changing waiver. Banks are not charitable institutions. They do not settle loans because they want to be kind; they settle because you have proven through hard evidence that they will never recover the full amount. In the world of debt resolution, your documents are your ammunition.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                The burden of proof lies entirely on the borrower. If you claim you lost your job, the bank manager will demand the termination letter. If you claim medical expenses ruined your savings, the audit committee will check the hospital discharge summaries. Without these papers, your request for a settlement is merely a conversation. With them, it becomes a formal proposal that the bank's internal policy forces them to consider. This guide provides the definitive 2024 checklist for every type of financial hardship.
                            </p>
                            <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-blue-500 mb-8">
                                <h3 className="text-lg font-bold text-blue-900 mb-4 uppercase tracking-wide">The Audit Standard</h3>
                                <p className="text-blue-800">
                                    Every settlement goes through two levels of approval: the Regional Manager and the Internal Audit Team. The audit team never meets you. They only see the PDF file of your documents. If that file is incomplete, your 50% waiver request will be flagged as "insufficiently justified" and rejected automatically.
                                </p>
                            </div>
                            <p className="text-lg leading-relaxed mb-6">
                                Many borrowers fail because they provide "too little" or "too much irrelevant" information. Providing a 100 page document of your childhood medical history is useless if you are claiming job loss in 2023. A professional documentation strategy focuses on the "Relevant Proof Window" - the 12 to 24 months of data that tells the story of your financial decline.
                            </p>
                        </section>

                        <section id="kyc-essentials" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                01. The KYC Foundation: Identifying the Borrower
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Before discussing waivers, the bank must verify the identity of the proposing party. This is standard but critical as any mismatch in names or addresses between the loan account and the settlement proposal can cause massive delays.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                    <FontAwesomeIcon icon={faIdCard} className="text-blue-600 mb-4 w-6 h-6" />
                                    <h4 className="font-bold text-lg mb-3 text-gray-900">Mandatory KYC</h4>
                                    <p className="text-gray-700 text-sm">Valid PAN Card (for tax tracking of written-off amounts) and Aadhaar Card. Ensure your mobile number linked to Aadhaar is active for potential e-signing of settlement letters.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                    <FontAwesomeIcon icon={faFileInvoice} className="text-blue-600 mb-4 w-6 h-6" />
                                    <h4 className="font-bold text-xl mb-3 text-gray-900">Loan Identifiers</h4>
                                    <p className="text-gray-700 text-sm">The latest "Statement of Account" (SOA) for each loan. You need to know your exact Principal, Interest, and Penalty breakdown to negotiate effectively.</p>
                                </div>
                            </div>
                        </section>

                        <section id="hardship-letter" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                02. The Hardship Letter: Your Financial Narrative
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                This is the most underrated document in the entire steps to apply for a loan settlement list. Most borrowers write a two line email. Professionals draft a detailed 2 to 3 page "Letter of Circumstances".
                            </p>
                            <div className="bg-gray-50 p-8 rounded-2xl mb-8 border-l-8 border-[var(--color-primary)]">
                                <h3 className="text-xl font-bold mb-4">Anatomy of a Winning Hardship Letter:</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="text-[var(--color-primary)] font-bold mr-3">A.</span>
                                        <p className="text-gray-800"><strong>The Timeline:</strong> Precisely when did things go wrong? (e.g., "Since the closure of my textile unit in August 2022...")</p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[var(--color-primary)] font-bold mr-3">B.</span>
                                        <p className="text-gray-800"><strong>The Effort:</strong> Proof that you tried to pay. Mention specific dates when you paid partial amounts before the total default.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[var(--color-primary)] font-bold mr-3">C.</span>
                                        <p className="text-gray-800"><strong>The Limitation:</strong> Why you cannot pay in the future. Explain your current reduced income or dependent responsibilities.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[var(--color-primary)] font-bold mr-3">D.</span>
                                        <p className="text-gray-800"><strong>The Final Offer:</strong> A specific lump sum amount and a commitment to pay it within 15 to 30 days of receiving the letter.</p>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-lg leading-relaxed mb-6">
                                A hardship letter should be signed, dated, and ideally notarized for high-value loans. It serves as your formal representation and can be used in court or Lok Adalats to prove your bona fide intent to resolve the debt.
                            </p>
                        </section>

                        <section id="financial-proofs" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                03. Financial Trails: Proving Zero Liquid Assets
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The bank's main concern is "Ability to Pay". If you have 2 lakhs in your savings account and are asking for a 1 lakh settlement, the bank will reject it. You must prove that you have zero liquidity.
                            </p>
                            <div className="relative overflow-hidden bg-white border border-[var(--color-border)] rounded-2xl mb-8">
                                <div className="flex flex-col md:flex-row">
                                    <div className="md:w-1/3 bg-[#1F5EFF] text-white p-8 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-4xl font-bold mb-2">12 MONTHS</div>
                                            <div className="text-sm font-medium uppercase tracking-widest text-[#DEDEDE]">Statement Window</div>
                                        </div>
                                    </div>
                                    <div className="md:w-2/3 p-8">
                                        <h4 className="text-xl font-bold text-gray-900 mb-4">Bank Statement Audit</h4>
                                        <p className="text-gray-700 leading-relaxed text-sm">
                                            Lenders look for "Pattern Bounces" (repeated EMI failures) and "Minimum Balances". If your statements show luxury spending (Zomato, Netflix, Amazon) while you are defaulting on a loan, the settlement will be rejected. Professionals help you present a sanitized but honest view of your essential living expenses.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-lg leading-relaxed mb-6">
                                If you have other loans (Credit Cards, Home Loans, Car Loans), include those latest statements too. Proving that you are "Multi-Distressed" helps the current bank realize that their claim is one of many, and they should grab whatever recovery is possible before you declare bankruptcy or vanish.
                            </p>
                        </section>

                        <section id="job-loss-proofs" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                04. Income Instability Proofs
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                If your default is due to career issues, you need specific paper evidence. A verbal claim of "I was laid off" is insufficient for a bank's legal department.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                {[
                                    { t: "Termination Letter", d: "Copies of HR emails or physical letters stating the date and reason for release." },
                                    { t: "Pink Slip/Relieving Letter", d: "The final formal document that proves you are no longer on the payroll." },
                                    { t: "Salary Slip Comparison", d: "Provide a slip from 2022 vs 2024 to show a 50% or more drop in income." },
                                    { t: "Employer Closure Notice", d: "If the company went bankrupt, news clippings or company circulars are vital." }
                                ].map((item, idx) => (
                                    <div key={idx} className="p-4 bg-gray-50 border border-gray-100 rounded-xl">
                                        <h5 className="font-bold text-gray-800 mb-1">{item.t}</h5>
                                        <p className="text-xs text-gray-600">{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="medical-documentation" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                05. Health Crises Evidence
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Medical hardship is the most prioritized category for settlements in Indian banks. The logic is simple: if you spent all your money on saving a life, the bank cannot morally or socially pressure you the same way they would a business failure.
                            </p>
                            <div className="bg-orange-50 p-8 rounded-2xl border border-orange-200 mb-8">
                                <h3 className="text-lg font-bold text-orange-950 mb-4">The Medical Document Set:</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-orange-900 text-sm">
                                        <FontAwesomeIcon icon={faHospitalUser} className="mr-3 w-4 h-4 opacity-70" /> Hospital Discharge Summaries (showing high cost surgeries or ICU stays).
                                    </li>
                                    <li className="flex items-center text-orange-900 text-sm">
                                        <FontAwesomeIcon icon={faHospitalUser} className="mr-3 w-4 h-4 opacity-70" /> Accumulated Medical Bills (proving the drain on savings).
                                    </li>
                                    <li className="flex items-center text-orange-900 text-sm">
                                        <FontAwesomeIcon icon={faHospitalUser} className="mr-3 w-4 h-4 opacity-70" /> Chronic Disability Certificates (if applicable, which proves long term income loss).
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section id="legal-notices" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                06. Existing Recovery & Legal Notices
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Documentation goes both ways. You must include the notices the bank has already sent you. This includes Demand Notices, Legal Notices from the bank's lawyers, or Summons from the DRT (Debt Recovery Tribunal).
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Attaching these notices to your proposal serves as a "Reference Point". It shows the bank that you are responding to their legal actions with a constructive settlement offer, rather than ignoring them. It also helps the bank's legal department map your file to their existing court proceedings, making the final "Legal Withdrawal" easier.
                            </p>
                        </section>

                        <section id="business-loss" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                07. Commercial & Business Failure Proofs
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                For self-employed individuals, the bank's documentation requirements are much more stringent. They will assume you are hiding "Cash Income". To combat this, you need the following:
                            </p>
                            <div className="space-y-4">
                                {[
                                    { t: "ITR for Last 3 Years", d: "To show the trend of declining profit. A jump from ₹15L profit to ₹2L loss is undeniable proof." },
                                    { t: "Audit Reports", d: "If your firm was audited, the 'Going Concern' notes from the auditor carry massive weight." },
                                    { t: "Surrender of GST/Trade License", d: "Proof that the business entity is no longer operational." },
                                    { t: "Legal Notices from Suppliers", d: "Showing that you are also defaulting on other creditors, which highlights the depth of your insolvency." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">{idx + 1}</div>
                                        <div>
                                            <h5 className="font-bold text-gray-900">{item.t}</h5>
                                            <p className="text-sm text-gray-600">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="settlement-letter-audit" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                08. The Sanction Letter: The Most Important document you will RECEIVE
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                After you submit your proposal, the bank (if they agree) will provide a "Settlement letter". As noted in our guide on what documents do I need to prepare for a loan settlement proposal, this is a legal contract. It must contain:
                            </p>
                            <div className="bg-white p-8 rounded-2xl border-2 border-dashed border-gray-300 mb-8 relative">
                                <div className="absolute -top-4 left-6 bg-white px-3 text-red-600 font-bold uppercase tracking-widest text-xs">Contract Checklist</div>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    <li className="flex items-center text-sm font-medium"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-3.5 h-3.5" /> Correct Loan Account Number</li>
                                    <li className="flex items-center text-sm font-medium"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-3.5 h-3.5" /> Total Waived Amount</li>
                                    <li className="flex items-center text-sm font-medium"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-3.5 h-3.5" /> Final Payment Deadline</li>
                                    <li className="flex items-center text-sm font-medium"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-3.5 h-3.5" /> Date for Withdrawal of Cases</li>
                                    <li className="flex items-center text-sm font-medium"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-3.5 h-3.5" /> Seal & signature of Manager</li>
                                    <li className="flex items-center text-sm font-medium"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-3.5 h-3.5" /> Reporting status to CIBIL</li>
                                </ul>
                            </div>
                        </section>

                        <section id="closure-proofs" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                09. Post-Closure Documents: The Shield for the Future
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Once the money is paid, you are not done. You must demand the following two documents. Without these, the bank can technically restart recovery in 2 or 3 years if their audit finds a discrepancy.
                            </p>
                            <div className="flex flex-col gap-4">
                                <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 flex gap-4">
                                    <div className="text-emerald-600 font-black text-2xl">A.</div>
                                    <div>
                                        <h5 className="font-bold text-emerald-900">No Dues Certificate (NDC)</h5>
                                        <p className="text-sm text-emerald-800">The final legal declaration that the account is closed and the bank has no further claim against the borrower.</p>
                                    </div>
                                </div>
                                <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 flex gap-4">
                                    <div className="text-emerald-600 font-black text-2xl">B.</div>
                                    <div>
                                        <h5 className="font-bold text-emerald-900">NOC for CIBIL Update</h5>
                                        <p className="text-sm text-emerald-800">A letter addressed to credit bureaus confirming the settlement, which you can use to file a dispute if the automated update fails.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="bank-specific-rules" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Lender-Specific Nuances: SBI vs. HDFC vs. NBFCs
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Public sector banks like SBI often have a fixed "Annexure" or "Form" that you must fill out for an OTS. Private banks like HDFC or ICICI are more flexible and often negotiate purely via formal email exchanges. NBFCs like Bajaj Finance or EarlySalary often use digital portals for settlement letters. A professional provider knows exactly which borrower-template each bank prefers, ensuring your proposal doesn't get stuck due to "wrong formatting".
                            </p>
                        </section>

                        <section id="faqs" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Documentation FAQs</h2>
                            <div className="space-y-4 not-prose">
                                {
                                    [
                                        {
                                            q: "What is the most important document for a loan settlement?",
                                            a: "The 'Hardship Letter' is the most critical document. It serves as your formal narrative, explaining the specific circumstances that led to your default and proving that you have no other assets to liquidate for payment."
                                        },
                                        {
                                            q: "Do I need to show my bank statements for the last year?",
                                            a: "Yes, banks usually demand at least 6 to 12 months of bank statements. They use these to verify that you don't have hidden income sources and that your essential expenses are truly consuming your entire earnings."
                                        },
                                        {
                                            q: "What serves as proof of job loss for settlement?",
                                            a: "Acceptable proofs include your formal termination letter, relieving letter, or even a 'Last Drawn Salary' slip that shows zero or reduced pay. Unemployment insurance documents are also highly effective."
                                        },
                                        {
                                            q: "Should I provide medical records for a family member?",
                                            a: "Absolutely. If medical expenses for a dependent caused your default, providing discharge summaries, hospital bills, and prescriptions is vital. Banks take medical hardship very seriously in their audit process."
                                        },
                                        {
                                            q: "What business documents are needed for self-employed individuals?",
                                            a: "You should prepare your P&L statements, GST returns showing reduced turnover, and any legal notices related to business closure or liquidation of assets."
                                        },
                                        {
                                            q: "Is my CIBIL report required for the proposal?",
                                            a: "While the bank already has your report, providing a fresh one with your own notes highlighting other debts shows transparency. It helps the bank see that you have multiple liabilities and limited resources."
                                        },
                                        {
                                            q: "What legal documents should I include if I have court cases?",
                                            a: "Include copies of summons or notices under Section 138 (NI Act) or SARFAESI. This signals to the bank that you are aware of the legal pressure and are seeking a resolution to avoid further litigation."
                                        },
                                        {
                                            q: "Do I need an affidavit for a loan settlement?",
                                            a: "Sometimes. In high value settlements, banks may ask for a notarized affidavit stating your total liabilities and affirming that the information provided in your hardship claim is 100% accurate."
                                        },
                                        {
                                            q: "Can I hide my current salary from the settlement officer?",
                                            a: "It is not recommended. If a bank discovers hidden income during their audit, they will immediately reject the settlement. Honesty with professional framing is always better for a successful waiver."
                                        },
                                        {
                                            q: "What document confirms a settlement is successful?",
                                            a: "The 'No Dues Certificate' (NDC) or 'No Objection Certificate' (NOC) is the final legal proof. It confirms the debt is fully settled and no further claims exist."
                                        }
                                    ].map((item, i) => (
                                        <details key={i} className="group bg-white border border-[#DEDEDE] rounded-xl overflow-hidden hover:shadow-md transition-all">
                                            <summary className="flex justify-between items-center p-5 cursor-pointer font-bold text-[#2E2E2E] list-none font-sans hover:bg-[#1F5EFF]/5 transition-colors">
                                                <span className="text-lg">{i + 1}. {item.q}</span>
                                                <span className="transition-transform group-open:rotate-180">
                                                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7"></path></svg>
                                                </span>
                                            </summary>
                                            <div className="px-5 pb-5 text-gray-600 opacity-90 leading-relaxed border-t border-gray-100 pt-4 mt-0 bg-gray-50/50 font-sans">
                                                {item.a}
                                            </div>
                                        </details>
                                    ))}
                            </div>
                        </section>

                        <h2 id="success-stories" className="scroll-mt-32 text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Documentation Success</h2>
                        <div className="grid md:grid-cols-2 gap-6 not-prose mb-16">
                            {[
                                {
                                    name: "Aditya Verma",
                                    loc: "Indore",
                                    loan: "Personal Loan (Axis Bank)",
                                    res: "Waiver Approved: 55%",
                                    story: "Their checklist was a lifesaver. I didn't realize how much proof I needed. They helped me organize my medical bills and job loss letters so the bank couldn't say no. The audit passed in 3 days."
                                },
                                {
                                    name: "Meera Nair",
                                    loc: "Kochi",
                                    loan: "Credit Card (HDFC Bank)",
                                    res: "Target Amount Met: 100%",
                                    story: "Professional and thorough. They even helped me draft the hardship letter which was the main reason HDFC agreed to my 50% waiver. The NDC was issued exactly 15 days after payment."
                                },
                                {
                                    name: "Rahul Bajaj",
                                    loc: "Jaipur",
                                    loan: "Business OD (IDFC)",
                                    res: "Liability Removed completely",
                                    story: "My business was in losses for 2 years but I didn't have the right papers. SettleLoans showed me exactly how to present my P&L and GST filings. The bank officer finally spoke my language."
                                },
                                {
                                    name: "Fatima Sheikh",
                                    loc: "Mumbai",
                                    loan: "Personal Loan (Kotak)",
                                    res: "CIBIL Status: Settled (Success)",
                                    story: "I had multiple bank accounts and was worried. They audited my statements and helped me prove my essential expenses. The settlement sanction came through without any tricky clauses."
                                }
                            ].map((review, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl border border-[var(--color-border)] shadow-sm hover:shadow-md transition-all">
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
                                            <FontAwesomeIcon icon={faFileInvoice} className="mr-2 w-3 h-3" />
                                            {review.loan}
                                        </span>
                                        <span className="block text-green-600 font-bold flex items-center">
                                            <FontAwesomeIcon icon={faCheck} className="mr-2 w-3 h-3" />
                                            {review.res}
                                        </span>
                                    </div>
                                    <p className="text-sm text-[var(--color-text-body)] italic leading-relaxed">"{review.story}"</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 pt-8 border-t border-[var(--color-border)] text-center text-[var(--color-text-muted)] text-sm italic mb-16">
                            <p>Disclaimer: Document requirements may vary from bank to bank. SettleLoans provides templates and guidance based on industry standards, but final acceptance of documents rests with the creditor's internal audit department.</p>
                        </div>

                        {/* Bottom CTA */}
                        <section className="bg-[#1F5EFF] rounded-[10px] p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter text-[#DEDEDE]">Ready to Build Your Case?</h2>
                                <p className="text-lg md:text-2xl opacity-90 max-w-2xl mx-auto mb-10 leading-tight font-normal text-[#DEDEDE]">
                                    Get the exact document checklist that banks can't ignore. Schedule your documentation audit now.
                                </p>
                                <Link href="/contact" className="inline-block bg-white text-[#1F5EFF] font-bold py-5 px-12 rounded-[10px] text-xl hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-1">
                                    Start My Documentation Trail
                                </Link>
                            </div>
                        </section>

                    </article>

                    {/* Right Column: CTA & Related Pages (Sticky) */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-24 space-y-8">

                            {/* CTA Container */}
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group text-[#DEDEDE]">
                                <div className="bg-[#1F5EFF] p-4 text-center">
                                    <h3 className="text-lg font-black text-white uppercase tracking-wider">File Audit</h3>
                                </div>
                                <div className="p-8 text-center">
                                    <p className="mb-8 text-sm opacity-80 leading-relaxed font-normal">
                                        We review your papers before the bank sees them. Zero errors, maximum waiver.
                                    </p>
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-[12px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg text-lg">
                                        Audit My Docs
                                    </Link>
                                </div>
                            </div>

                            {/* Related Pages Container */}
                            <div className="bg-white p-6 rounded-2xl border border-[var(--color-border)] shadow-sm">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-4 border-b border-gray-100 pb-2">Toolkit</h3>
                                <ul className="space-y-4 text-sm font-medium">
                                    <li>
                                        <Link href="/faqs/how-does-settling-a-loan-impact-my-cibil-credit-score" className="group flex items-center text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-[var(--color-primary)] transition-colors"></span>
                                            CIBIL Report
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faqs/steps-to-apply-for-a-loan-settlement-through-a-financial-service-provider" className="group flex items-center text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-[var(--color-primary)] transition-colors"></span>
                                            Process Steps
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faqs/loan-settlement-fees" className="group flex items-center text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-[var(--color-primary)] transition-colors"></span>
                                            Fee Disclosure
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faqs/how-to-negotiate-personal-loan-settlement" className="group flex items-center text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-[var(--color-primary)] transition-colors"></span>
                                            Hardship Letter Tips
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
