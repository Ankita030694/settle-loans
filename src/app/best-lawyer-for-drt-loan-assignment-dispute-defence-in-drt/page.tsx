import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileShield, faGavel, faBuildingColumns, faUserShield, faScaleBalanced, faShieldHalved } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Best Lawyer for DRT Loan Assignment Dispute Defence | ARC Recovery Help",
    description: "Get expert legal defense against loan assignment disputes in DRT. Challenge ARC actions, assignment deeds, and stay recovery orders with India's top DRT lawyers. Protect your assets from Asset Reconstruction Companies today.",
    alternates: {
        canonical: "https://settleloans.in/best-lawyer-for-drt-loan-assignment-dispute-defence-in-drt",
    },
};

export default function DRTLoanAssignmentPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/best-lawyer-for-drt-loan-assignment-dispute-defence-in-drt#webpage",
                "url": "https://settleloans.in/best-lawyer-for-drt-loan-assignment-dispute-defence-in-drt",
                "name": "Best Lawyer for DRT Loan Assignment Dispute Defence | ARC Recovery Help",
                "description": "Expert legal strategies to challenge loan assignment to ARCs in Debt Recovery Tribunals.",
                "breadcrumb": { "@id": "https://settleloans.in/best-lawyer-for-drt-loan-assignment-dispute-defence-in-drt#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/best-lawyer-for-drt-loan-assignment-dispute-defence-in-drt#breadcrumb",
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
                        "name": "DRT Loan Assignment Dispute Defence",
                        "item": "https://settleloans.in/best-lawyer-for-drt-loan-assignment-dispute-defence-in-drt"
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/best-lawyer-for-drt-loan-assignment-dispute-defence-in-drt#article",
                "headline": "Defending Loan Assignment Disputes in DRT: A Comprehensive Legal Guide",
                "description": "Navigate the complexities of loan assignments to ARCs. Learn how to challenge assignment deeds and protect your property in DRT.",
                "author": {
                    "@type": "Organization",
                    "name": "SettleLoans Legal Research Team"
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
                "mainEntityOfPage": { "@id": "https://settleloans.in/best-lawyer-for-drt-loan-assignment-dispute-defence-in-drt#webpage" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/best-lawyer-for-drt-loan-assignment-dispute-defence-in-drt#product",
                "name": "DRT Legal Defence Service",
                "description": "Specialized legal representation for borrowers facing ARC debt recovery in Debt Recovery Tribunals.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "840"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Alok Sharma" },
                        "datePublished": "2023-11-15",
                        "reviewBody": "SettleLoans helped us challenge an illegal loan assignment by our bank. Their knowledge of the SARFAESI Act is unparalleled.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Prabhu G." },
                        "datePublished": "2024-01-20",
                        "reviewBody": "Edelweiss ARC took over my 15-crore loan and issued a 13(2) notice within 7 days. SettleLoans found that the Assignment Deed was not registered in Maharashtra. We got a stay from the DRT, and eventually settled for 9 crores.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://settleloans.in/best-lawyer-for-drt-loan-assignment-dispute-defence-in-drt#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Can I challenge the assignment of my loan to an ARC?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, you can challenge a loan assignment in the DRT on several grounds, including invalid assignment deeds, non-compliance with RBI guidelines, improper NPA classification by the original bank, or failure to provide proper notice of assignment under the Transfer of Property Act."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is Section 5 of the SARFAESI Act?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Section 5 of the SARFAESI Act governs the acquisition of financial assets by Asset Reconstruction Companies. It specifies how loans can be transferred from banks to ARCs and the 'deeming provision' that allows the ARC to step into the lender's shoes."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What happens if the original bank wrongly classified my account as an NPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "If the bank wrongly classified your account as an NPA, the entire foundation of the loan assignment and subsequent SARFAESI actions becomes legally weak. You can challenge this in the DRT to stay recovery proceedings and even seek a restoration of your account status."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does an ARC need my consent to buy my loan?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No, generally banks do not require the borrower's consent to assign a loan to an ARC. However, they must follow internal policies and RBI guidelines for the sale of stressed assets, and they must formally notify you of the assignment after it is executed."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can an ARC be substituted in a pending DRT case?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, an ARC can apply for substitution in a pending case under Section 5(5) of the SARFAESI Act. However, they must prove the validity of the assignment and obtain the necessary orders from the Tribunal to continue the recovery process."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is an Assignment Deed?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "An Assignment Deed is the legal document that formalizes the transfer of the loan from the bank to the ARC. It must be properly stamped and registered to be admissible as evidence in court. Flaws in this document are a common ground for defense."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I negotiate a settlement with the ARC?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely. ARCs are often more flexible than banks because they buy loans at a discount. A professional DRT lawyer can help you negotiate a One-Time Settlement (OTS) that is significantly lower than the total claimed amount."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the 'Fresh Start' process for debt relief?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Under the Insolvency and Bankruptcy Code (IBC), a 'Fresh Start' process allows certain low-income individuals with small debts to have their liabilities discharged. This is separate from DRT but is an important legal remedy for those in extreme distress."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Will a stay order stop the ARC from auctioning my property?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, a stay order from the DRT can temporarily halt any auction or possession proceedings while your dispute is being heard. This gives you time to build your defense and negotiate a resolution."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do I choose the best DRT lawyer for an ARC dispute?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Look for a lawyer with specific experience in SARFAESI Section 5 challenges and ARC litigation. They should have a deep understanding of RBI guidelines on the sale of stressed assets and a track record of successful stays in the DRT."
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
                            Premier DRT Legal Defence
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight text-center">
                            Best Lawyer for DRT Loan <br className="hidden md:block" /> Assignment Dispute Defence
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
                            Has your loan been sold to an ARC? Protect your assets and challenge illegal loan assignments with India's most aggressive DRT defense team.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Secure Your Assets Today
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
                                    DRT Loan Assignment Dispute Defence
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>

                {/* Main Layout */}
                <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">
                    {/* Left Column: TOC */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <TableOfContents
                            items={[
                                { id: "hero-intro", title: "Navigating Assignment Stress" },
                                { id: "loan-assignment-basics", title: "Understanding Loan Assignment" },
                                { id: "arc-mechanics", title: "How ARCs Operate" },
                                { id: "legal-framework-section5", title: "SARFAESI Section 5 Guide" },
                                { id: "grounds-for-challenge", title: "Grounds for Legal Challenge" },
                                { id: "assignment-deed-flaws", title: "Flaws in Assignment Deeds" },
                                { id: "npa-classification-defense", title: "NPA Classification Defenses" },
                                { id: "procedural-defects", title: "Procedural Defects in Notices" },
                                { id: "rbi-guideline-breach", title: "Breach of RBI SSA Guidelines" },
                                { id: "creditor-substitution", title: "Creditor Substitution Rules" },
                                { id: "stamp-duty-challenges", title: "Stamp Duty & Registration" },
                                { id: "borrower-statutory-rights", title: "Your Statutory Rights" },
                                { id: "lawyer-strategic-role", title: "The Role of Your Lawyer" },
                                { id: "counterclaim-strategies", title: "Strategic Counterclaims" },
                                { id: "stay-order-process", title: "Seeking Interim Relief" },
                                { id: "ots-with-arcs", title: "Negotiating with ARCs" },
                                { id: "case-studies", title: "Success Stories" },
                                { id: "faqs", title: "Expert FAQ" }
                            ]}
                        />
                    </aside>

                    {/* Middle Column: Content */}
                    <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[#2E2E2E]">
                        <section id="hero-intro" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-8 leading-tight text-center">
                                A Strategic Defence: <span className="text-[#1F5EFF]">Protecting Your Future</span>
                            </h2>
                            <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                                <p className="text-xl leading-relaxed mb-6">
                                    Receiving a notice that your bank loan has been sold to an Asset Reconstruction Company (ARC) can be a traumatic experience. It often marks the beginning of a more aggressive phase of debt recovery. However, this transition also creates unique legal opportunities to challenge the validity of the debt and the procedures used by these entities.
                                </p>
                                <p className="text-xl leading-relaxed mb-6">
                                    At SettleLoans, we provide the best legal representation for borrowers facing loan assignment disputes in the Debt Recovery Tribunal (DRT). We don't just fight; we strategize. We understand the complex interplay between the SARFAESI Act, the Indian Contract Act, and RBI guidelines. Our goal is to ensure that your property is safe and that any transfer of debt is strictly compliant with the law.
                                </p>
                                <p className="text-xl leading-relaxed font-bold text-[#1F5EFF]">
                                    Do not face the ARC alone. With our expert guidance, you can turn the tide and find a path toward a sustainable financial resolution.
                                </p>
                            </div>
                        </section>

                        <section id="loan-assignment-basics" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl font-black mb-6">What is a Loan Assignment?</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                A loan assignment occurs when a lender (the Assignor), such as a bank or NBFC, transfers its entire portfolio of rights, title, and interest in a loan account to a third party (the Assignee), typically an Asset Reconstruction Company (ARC). This transfer is governed by the principle of assignment of actionable claims.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                When your account is classified as a Non-Performing Asset (NPA), banks often seek to offload these stressed assets to ARCs at a discounted price. This allows the bank to clean its balance sheet while the ARC takes on the responsibility of recovery. Once the assignment is complete, the ARC steps into the shoes of the original lender and can initiate all legal actions available under the SARFAESI Act, 2002.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                However, for an assignment to be legally binding on the borrower, it must meet rigorous criteria. It must be executed through a valid Assignment Deed, which is properly stamped and registered. Furthermore, the borrower must be formally notified of the assignment under the Transfer of Property Act. Failure to follow these steps can render the assignment unenforceable in a court of law.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 my-10">
                                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                    <h3 className="font-bold text-blue-900 mb-2">The Assignor</h3>
                                    <p className="text-sm text-blue-800 opacity-80">The original bank or NBFC that lent the money and now wishes to sell the debt account to a specialized recovery entity.</p>
                                </div>
                                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                    <h3 className="font-bold text-green-900 mb-2">The Assignee</h3>
                                    <p className="text-sm text-green-800 opacity-80">The ARC or financial institution that buys the debt and acquires the legal right to enforce security interest and recover funds.</p>
                                </div>
                            </div>
                        </section>

                        <section id="arc-mechanics" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl font-black mb-6">How Asset Reconstruction Companies Operate</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Asset Reconstruction Companies are specialized entities regulated by the RBI under the SARFAESI Act. Their primary business is "reconstructing" bad assets. In practice, this means they acquire NPAs from banks and then use their expertise to recover the money. They have the power to take over the management of a business, sell its assets, or appoint a manager to run the security interest.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                ARCs often buy loans at a significant discount. For example, if a borrower owes 10 crores, an ARC might buy that debt from a bank for 7 crores. This discount provides the ARC with a profit margin and also creates a room for settlement. However, despite this flexibility, many ARCs adopt a very aggressive posture in the DRT to secure their investment as quickly as possible.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Because an ARC's entire focus is on recovery, they are often more persistent than traditional banks. They have dedicated legal teams and recovery specialists who monitor every development in the case. This is why a borrower must have equally sophisticated legal representation to level the playing field. Without a lawyer who understands ARC mechanics, a borrower can easily be overwhelmed by the sheer volume of legal notices and applications.
                            </p>
                            <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl mb-12">
                                <h3 className="text-xl font-bold mb-6">Common ARCs in the Indian Market</h3>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    <li className="flex items-center gap-2 font-medium"><FontAwesomeIcon icon={faShieldHalved} className="text-blue-500" /> Edelweiss ARC</li>
                                    <li className="flex items-center gap-2 font-medium"><FontAwesomeIcon icon={faShieldHalved} className="text-blue-500" /> Phoenix ARC</li>
                                    <li className="flex items-center gap-2 font-medium"><FontAwesomeIcon icon={faShieldHalved} className="text-blue-500" /> Omkara ARC</li>
                                    <li className="flex items-center gap-2 font-medium"><FontAwesomeIcon icon={faShieldHalved} className="text-blue-500" /> Pegasus ARC</li>
                                    <li className="flex items-center gap-2 font-medium"><FontAwesomeIcon icon={faShieldHalved} className="text-blue-500" /> ASREC (India) Ltd</li>
                                    <li className="flex items-center gap-2 font-medium"><FontAwesomeIcon icon={faShieldHalved} className="text-blue-500" /> Reliance ARC</li>
                                </ul>
                            </div>
                        </section>

                        <section id="legal-framework-section5" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl font-black mb-6">The Legal Framework: SARFAESI Act Section 5</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Section 5 of the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002, is the central pillar of the loan assignment process. This section explicitly empowers ARCs to acquire financial assets from banks. It states that upon acquisition, the ARC shall be deemed to be the lender for all purposes.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                The most important part of Section 5 is the "Deeming Provision." It ensures that any suit, appeal, or other proceedings pending before any court or tribunal does not abate because of the assignment. The ARC can simply apply to the court to be substituted as the plaintiff or applicant. This prevents debt recovery from being stalled due to a change in ownership.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                However, Section 5 is not a blanket permission for banks to do whatever they please. It requires that the loan acquisition be carried out in a specific manner. The RBI sets out detailed guidelines for the Sale of Stressed Assets (SSA), which include requirements for valuation, transparency, and internal approvals. If these guidelines are breached, the validity of the acquisition itself can be called into question in the DRT.
                            </p>
                            <div className="bg-white border-2 border-dashed border-[#1F5EFF]/20 p-8 rounded-2xl mb-10">
                                <h4 className="text-xl font-bold text-[#1F5EFF] mb-4 uppercase tracking-tighter">Section 5(2) Breakdown</h4>
                                <p className="italic text-gray-600 mb-4">
                                    "If any financial asset of a bank or a financial institution is acquired by an asset reconstruction company, such asset reconstruction company shall, on such acquisition, be deemed to be the lender."
                                </p>
                                <p className="text-sm">This means all rights under the original loan agreement, including the right to charge interest and enforce securities, are transferred without the need for a new contract with the borrower.</p>
                            </div>
                        </section>

                        <section id="grounds-for-challenge" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl font-black mb-6 leading-tight">Grounds for Challenging Loan Assignment</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Contrary to what debt collectors might tell you, a loan assignment is often full of procedural cracks. These cracks can be used as a powerful defense in the DRT to stay recovery proceedings or even force a favorable settlement. The burden of proof lies on the ARC to show that the assignment was perfect and followed every letter of the law.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Strategic challenges usually focus on three areas: the validity of the underlying document (the Deed), the legality of the NPA classification by the original bank, and compliance with the RBI's regulatory framework. If we can prove that the original bank wrongly classified your account as an NPA, the entire assignment to the ARC becomes legally questionable.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Furthermore, the SARFAESI Act requires a 60-day window for repayment under Section 13(2) and a reasoned response to any representation made by the borrower under Section 13(3A). Many ARCs, in their rush to recover, skip these vital procedural steps or provide vague, automated responses. These are fatal flaws that a skilled lawyer will highlight in the Tribunal.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4 my-8">
                                <div className="p-6 bg-red-50 rounded-xl border-l-4 border-red-500">
                                    <h4 className="font-bold mb-2">Notice Defects</h4>
                                    <p className="text-sm">Failure to provide valid 13(2) or 13(4) notices by the correctly substituted entity.</p>
                                </div>
                                <div className="p-6 bg-red-50 rounded-xl border-l-4 border-red-500">
                                    <h4 className="font-bold mb-2">Valuation Errors</h4>
                                    <p className="text-sm">Improper valuation of assets by the ARC before attempting an auction.</p>
                                </div>
                                <div className="p-6 bg-red-50 rounded-xl border-l-4 border-red-500">
                                    <h4 className="font-bold mb-2">Unfair Interest</h4>
                                    <p className="text-sm">Charging penal interest or compounding interest that violates RBI master circulars.</p>
                                </div>
                                <div className="p-6 bg-red-50 rounded-xl border-l-4 border-red-500">
                                    <h4 className="font-bold mb-2">Missing Notice of Assignment</h4>
                                    <p className="text-sm">Failure to formally notify the borrower under Section 131 of the Transfer of Property Act.</p>
                                </div>
                            </div>
                        </section>

                        <section id="assignment-deed-flaws" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl font-black mb-6">Uncovering Flaws in the Assignment Deed</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The Assignment Deed is the most critical document in the entire process. It is the deed that proves the ARC actually owns your debt. Frequently, these deeds are prepared in a rush and contain significant errors. They might have incorrect loan account numbers, missing schedules of property, or even mismatched dates.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                A key area of dispute is the registration and stamping of the Assignment Deed. In many Indian states, an assignment of debt requires a certain amount of stamp duty to be paid. If the ARC has underpaid the stamp duty or failed to register the deed with the relevant Sub-Registrar, the document is technically inadmissible as evidence. Without an admissible Assignment Deed, the ARC technically has no locus standi (legal standing) to sue you in the DRT.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Our team meticulously scrutinizes every page of the Assignment Deed. We check for proper authorized signatures, board resolutions empowering the signatories, and consistency with the original loan documents. Any discrepancy we find is converted into a legal objection in our reply to the bank's application. Such objections often force the ARC to stall their proceedings and reconsider their aggressive stance.
                            </p>
                        </section>

                        <section id="npa-classification-defense" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl font-black mb-6">The Power of the NPA Classification Defense</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The SARFAESI process can only be initiated if your account has been correctly classified as a Non-Performing Asset (NPA). The RBI has set a strict "Master Circular on Prudential Norms on Income Recognition, Asset Classification and Provisioning." This circular follows a clear 90-day delinquency rule.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                However, banks often make mistakes. They might apply payments incorrectly, fail to account for moratoriums, or misinterpret seasonal repayment patterns in agricultural loans. If we can prove that your account was not 90 days overdue on the date the bank declared it an NPA, then the entire foundation of the SARFAESI proceedings collapses.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                This is a particularly potent defense because it also invalidates the sale of the loan to the ARC. An ARC can generally only buy "stressed" assets. If the asset was not legally stressed (not a valid NPA), the ARC had no business buying it. We have seen cases where thousands of crores in recovery have been stayed because of a single error in the bank's NPA accounting.
                            </p>
                            <div className="bg-amber-50 p-8 rounded-2xl border border-amber-200 mb-10">
                                <h4 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                                    <FontAwesomeIcon icon={faScaleBalanced} />
                                    Checklist for NPA Defense
                                </h4>
                                <ul className="space-y-3 text-sm text-amber-900/80">
                                    <li>• Was the 90-day period calculated correctly?</li>
                                    <li>• Were all interest and principal payments appropriately adjusted?</li>
                                    <li>• Did the bank communicate the NPA classification date formally?</li>
                                    <li>• Was there a seasonal bumper period in place (for agri-loans)?</li>
                                    <li>• Did the bank follow its own internal credit policy before the NPA tag?</li>
                                </ul>
                            </div>
                        </section>

                        <section id="procedural-defects" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl font-black mb-6">Identifying Procedural Defects in Notices</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The SARFAESI Act is built on a sequence of notices. The Section 13(2) demand notice is the first, followed by the Section 13(4) possession notice. Each notice must satisfy several legal requirements. They must clearly state the amount due, the breakup of principal and interest, and the list of secured assets being targeted.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                A common procedural defect occurs when an ARC issues a notice before they have been properly substituted in the DRT. If the original bank is still the party on record, but the ARC's recovery agent is the one sending the demand notice, there is a clear legal mismatch. Furthermore, any notice issued without a clear authorized officer's signature as per the Security Interest (Enforcement) Rules, 2002, is invalid.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Another vital procedural safeguard is Section 13(3A). This gives you the right to submit a representation (objections) to the notice. The bank is legally mandated to consider these objections and provide a reasoned, written reply within 15 days. If the ARC sends a generic, automated rejection without addressing your specific points, they have violated your right to due process. This violation is a strong ground to set aside their possession notice in the DRT.
                            </p>
                        </section>

                        <section id="rbi-guideline-breach" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl font-black mb-6">Challenging Breach of RBI SSA Guidelines</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The RBI's Sale of Stressed Assets (SSA) framework is a detailed set of regulations that banks must follow when selling a loan to an ARC. These guidelines ensure that the sale is transparent and that the borrower isn't unfairly targeted during the transfer. For instance, the bank must have a board approved policy for the sale of assets and must ensure that the price discovery process is objective.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                If the bank sells the loan at an unusually steep discount without proper valuation, it might indicate a lack of transparency that can be challenged. Furthermore, RBI guidelines prevent certain entities from bidding if they have a conflict of interest. While these are high-level corporate governance issues, they can be brought before the DRT to demonstrate that the assignment process was flawed.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Moreover, the RBI mandates that the bank should provide the borrower with enough time to settle the debt before offloading it to an ARC. If a bank ignores a valid settlement offer from a borrower just to sell the asset to a friendly ARC for a lower price, this manifests as "unfair trade practices." Such behavior can be challenged under general banking norms and the SARFAESI framework.
                            </p>
                        </section>

                        <section id="creditor-substitution" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl font-black mb-6 leading-tight">Creditor Substitution Rules in DRT/DRAT</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                When a loan is assigned while a recovery case (Original Application or O.A.) is already pending in the DRT, the ARC cannot simply take over. They must file a formal application for substitution under Section 5(5) of the SARFAESI Act. This application is a critical moment where the borrower can intervene.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                During the substitution hearing, the ARC must produce the original Assignment Deed. This is our first opportunity to examine the document for defects. We can challenge the substitution if the deed is improperly stamped, if the signature of the bank's witness is missing, or if the authority of the bank's representative to sell the asset isn't established.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Substitution is not an automatic right; it is a judicial decision. If we can successfully block the substitution of the ARC, the original bank (which no longer owns the debt) cannot proceed, and the ARC (which isn't yet recognized by the court) can't either. This creates a state of legal limbo that significantly increases the borrower's leverage for a settlement.
                            </p>
                            <div className="bg-slate-900 text-white p-8 rounded-2xl mb-12">
                                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <FontAwesomeIcon icon={faScaleBalanced} className="text-blue-500" />
                                    Understanding Substitution
                                </h4>
                                <p className="text-sm opacity-80 leading-relaxed">
                                    Substitution is the process of replacing the original bank with the ARC in ongoing litigation. It requires proof of a valid transfer of the "actionable claim." Without a formal court order for substitution, the ARC has no power to issue summons or participate in the DRT hearings.
                                </p>
                            </div>
                        </section>

                        <section id="stamp-duty-challenges" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl font-black mb-6">Stamp Duty and Registration Challenges</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                India is a complex federation where stamp duty varies significantly from state to state. An Assignment Deed signed in Mumbai might require a different stamp duty than one signed in Delhi. If an ARC buys a whole portfolio of loans across India, they often try to save costs by using a generic stamp paper that might not be adequate for the value of the specific asset in your state.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Under Section 35 of the Indian Stamp Act, an instrument not duly stamped is inadmissible in evidence for any purpose. This means that if the Assignment Deed is under-stamped, it is as if it doesn't exist in the eyes of the DRT. We have seen multi-crore recovery actions being stayed solely because the ARC failed to pay an additional few lakhs in regional stamp duty.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Registration is another hurdle. If the assignment involves the transfer of immoveable property interests (which most home and business loans do), it must be compulsorily registered under Section 17 of the Registration Act, 1908. An unregistered assignment of an interest in land is legally void. Our legal experts are masters at identifying these technical violations that can bring a recovery machine to a complete stop.
                            </p>
                        </section>

                        <section id="borrower-statutory-rights" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl font-black mb-6">Your Statutory Rights Post-Assignment</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Many borrowers believe that once an ARC takes over, they lose all their rights. This is fundamentally false. You have statutory protections that are enshrined in both the SARFAESI Act and the Constitution of India. These rights are meant to prevent the "deprivation of property without the authority of law."
                            </p>
                            <ul className="space-y-6 mb-12">
                                <li className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold">1</div>
                                    <p className="text-lg"><strong>Right to Redemption:</strong> You have the right to get your property back by paying the dues any time before the sale is finalized. The bank or ARC cannot rush an auction to prevent you from exercising this right.</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold">2</div>
                                    <p className="text-lg"><strong>Right to Fair Valuation:</strong> Your property cannot be sold at a "throwaway" price. The authorized officer must get a proper valuation from a government-registered valuer and share that report with you.</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold">3</div>
                                    <p className="text-lg"><strong>Right against Harassment:</strong> ARCs cannot use bouncers or thugs for recovery. They must follow the RBI's Fair Practice Code. Any intimidation, midnight calls, or threats of violence are illegal and can be punished.</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold">4</div>
                                    <p className="text-lg"><strong>Right to Dispute:</strong> You have the right to file an application under Section 17 of the SARFAESI Act before the DRT within 45 days of any measure taken by the ARC.</p>
                                </li>
                            </ul>
                        </section>

                        <section id="lawyer-strategic-role" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl font-black mb-6">The Strategic Role of Your DRT Lawyer</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Facing an ARC without a specialized lawyer is like going into a knife fight empty-handed. The ARC will have a team of senior advocates and recovery officers whose only job is to break your defense. At SettleLoans, we provide the counterweight. Our lawyers have spent decades inside Tribunals and know exactly where the ARCs hide their procedural mistakes.
                                We don't just file papers; we build a narrative of why the borrower has been unfairly targeted.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Our first step is always a thorough document audit. We get copies of the original loan agreement, the NPA classification notice, the Assignment Deed, and all subsequent communications. We look for contradictions. If the original bank said you owed 5 crores on Monday, but the ARC says you owe 6 crores on Tuesday, that's a discrepancy we will use in court.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Furthermore, we manage the timeline. In the DRT, timing is everything. A single delayed filing can mean the difference between keeping your house and seeing it auctioned. We ensure that every appeal, every rejoinder, and every application for a stay is filed with precision and supported by the latest Supreme Court judgments.
                            </p>
                        </section>

                        <section id="counterclaim-strategies" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl font-black mb-6">Using Strategic Counterclaims as Leverage</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The best defense is often a good offense. In many loan disputes, the bank themselves have committed errors that cost you money. This might include a failure to release funds on time, charging unauthorized service fees, or providing defective financial instruments. You have the right to file an independent suit or a counterclaim in the DRT for damages.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                When we file a counterclaim for damages that equals or exceeds the amount of the loan, it complicates the ARC's recovery process. The Tribunal must hear both sides before passing a final decree. This "set-off" strategy is a powerful way to force the ARC to the negotiating table. They realize that instead of a quick recovery, they are facing a multi-year legal battle over their own liability.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Counterclaims also create "clouded title" on the assets. If there is an active legal dispute regarding the very validity of the debt amount, few third-party buyers will be willing to bid for the property at an auction. This protection ensures that the assets remain in your possession while we fight for a final settlement.
                            </p>
                        </section>

                        <section id="stay-order-process" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl font-black mb-6">Seeking Interim Relief and Stay Orders</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The ultimate goal of most initial DRT applications is to obtain a stay order. A stay order is a temporary injunction that prevents the ARC from proceeding with an auction or a physical takeover of your property. To get a stay, we must prove three things: a prima facie case (a strong legal point), balance of convenience (it's better to stall than to auction), and irreparable injury (if the house is sold, you can never get it back).
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                We use the procedural defects we've identified to convince the Presiding Officer that a stay is necessary until the matter is fully heard. For instance, if the ARC hasn't followed the 30-day sale notice rule, that's almost a guaranteed stay. Once a stay is granted, the pressure shifts from the borrower back to the ARC.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                A stay order is not a final victory, but it is a vital breather. It stops the clock and gives us time to either win the case on merits or negotiate a settlement on your terms. Without a stay, the ARC can auction your property in weeks, leaving you with very few remedies after the event.
                            </p>
                            <div className="bg-red-50 p-8 rounded-2xl border border-red-200 mb-10 text-center">
                                <h4 className="text-2xl font-black text-red-700 mb-4">Emergency Auction?</h4>
                                <p className="text-red-900 mb-6">If you have received an auction notice, you must act within 48 hours to have any chance of a stay.</p>
                                <Link href="/contact" className="inline-block bg-red-600 text-white font-bold py-3 px-8 rounded-full hover:bg-red-700 transition-colors shadow-lg">
                                    Get Immediate Legal Help
                                </Link>
                            </div>
                        </section>

                        <section id="ots-with-arcs" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl font-black mb-6">The Art of Negotiating OTS with ARCs</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                A One-Time Settlement (OTS) is often the most practical outcome for many borrowers. Because ARCs buy portfolios at a discount, they have a "buffer" that allows them to settle for less than the full amount. For example, if they bought your 1 crore debt for 70 lakhs, they might be happy to settle with you for 80 lakhs. They make a quick profit, and you get a debt-free life.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                However, you cannot walk into an ARC and ask for a discount. They will sense weakness and push for the full amount. The negotiation must be done from a position of legal strength. We present the ARC with our list of their legal and procedural errors. We show them that their path to recovery matches a 5-year legal battle in the DRT and DRAT.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                When faced with the prospect of a stalled recovery and a high-risk court case, most ARCs become much more reasonable. We help you draft the OTS proposal, ensure the terms of the settlement are legally binding, and most importantly, ensure that the "No Dues Certificate" (NDC) is issued correctly so your credit history can begin to heal.
                            </p>
                        </section>

                        <section id="case-studies" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-5xl font-black text-center mb-16">Success Stories in Loan Assignment Defense</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                {[
                                    {
                                        name: "Prabhu G.",
                                        loc: "Mumbai",
                                        industry: "Manufacturing",
                                        outcome: "Stay Granted & OTS Success",
                                        story: "Edelweiss ARC took over my 15-crore loan and issued a 13(2) notice within 7 days. SettleLoans found that the Assignment Deed was not registered in Maharashtra. We got a stay from the DRT, and eventually settled for 9 crores."
                                    },
                                    {
                                        name: "Meera Nair",
                                        loc: "Kochi",
                                        industry: "Hospitality",
                                        outcome: "NPA Classification Challenge",
                                        story: "My hotel was struggling, and the bank sold my loan to Phoenix ARC. SettleLoans proved the bank hadn't counted our COVID moratorium correctly. The DRT declared the NPA tag illegal, and the loan assignment was recalled."
                                    },
                                    {
                                        name: "Sanjay T.",
                                        loc: "Delhi",
                                        industry: "Real Estate",
                                        outcome: "Counterclaim Victory",
                                        story: "The ARC was pushing for a possession notice. We filed a counterclaim for the bank's failure to release the phase-3 funding. The Tribunal ordered a joint hearing, and the ARC agreed to a very favorable restructuring."
                                    },
                                    {
                                        name: "Anjali K.",
                                        loc: "Bangalore",
                                        industry: "IT Services",
                                        outcome: "Stamp Duty Defense",
                                        story: "The ARC tried to auction my apartment. We discovered they had paid stamp duty on the assignment in a different state with lower rates. The DRT stayed the auction immediately. We are now negotiating a realistic payment plan."
                                    }
                                ].map((caseStudy, i) => (
                                    <div key={i} className="bg-white p-8 rounded-2xl border border-[#DEDEDE] shadow-sm hover:shadow-lg transition-all border-t-8 border-t-[#1F5EFF]">
                                        <div className="flex items-center mb-4">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 mr-3">
                                                {caseStudy.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold">{caseStudy.name}</h4>
                                                <p className="text-xs text-gray-400">{caseStudy.loc}</p>
                                            </div>
                                            <div className="ml-auto text-yellow-400 text-sm">★★★★★</div>
                                        </div>
                                        <div className="mb-4 text-sm font-black text-green-600 uppercase tracking-tighter">
                                            Result: {caseStudy.outcome}
                                        </div>
                                        <p className="text-sm text-gray-600 italic">"{caseStudy.story}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="conclusion" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl font-black mb-6">Reclaiming Your Financial Dignity</h2>
                            <p className="text-xl leading-relaxed mb-6">
                                Debt is a financial challenge, not a personal failure. In the high-stakes world of DRT and ARC recovery, you need more than just hope; you need a solid legal fortress. At SettleLoans, we provide that fortress. We believe that every individual and business in India deserves a fair chance to resolve their debts without being crushed by predatory tactics.
                            </p>
                            <p className="text-xl leading-relaxed mb-6">
                                If your loan has been assigned to an ARC, or if you are already facing 13(2) or 13(4) notices, the clock is ticking. Every day you wait is a day the ARC gets closer to your property. Take the first step toward freedom today. Contact our team, and let us show you how we can turn your legal burden into a strategic victory.
                            </p>
                            <div className="bg-[#1F5EFF] rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
                                <h3 className="text-4xl font-black mb-6 relative z-10">Stop the ARC Today</h3>
                                <p className="text-xl mb-10 opacity-90 relative z-10">Get a free digital review of your loan documents by India's top DRT lawyers.</p>
                                <Link href="/contact" className="inline-block bg-white text-[#1F5EFF] font-black py-4 px-12 rounded-xl text-xl hover:scale-105 transition-all shadow-xl relative z-10">
                                    Book Free Consultation
                                </Link>
                            </div>
                        </section>

                        <section id="faqs" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Expert DRT FAQ: Your Questions Answered</h2>
                            <div className="space-y-4">
                                {[
                                    {
                                        q: "Why did my bank sell my loan to an ARC without telling me?",
                                        a: "Banks are legally allowed to sell stressed asset portfolios to clean their balance sheets. While they don't need your prior consent, they must formally notify you through a 'Notice of Assignment' after the transaction is complete, as per the Transfer of Property Act."
                                    },
                                    {
                                        q: "Is an ARC notice more dangerous than a bank notice?",
                                        a: "An ARC notice is often more dangerous because the ARC's entire business model is based on recovery. They are usually more aggressive and faster in moving toward auction than a traditional bank, which might be slowed down by internal bureaucracy."
                                    },
                                    {
                                        q: "Can I challenge the ARC if they don't have the original loan documents?",
                                        a: "Yes. In the DRT, the burden of proof is on the ARC. If they cannot produce the original loan agreement or the power of attorney authorizing them to act, their case can be severely weakened or even dismissed."
                                    },
                                    {
                                        q: "What is the 30-day notice rule for auctions?",
                                        a: "Under the Security Interest (Enforcement) Rules, 2002, the authorized officer must provide the borrower with an initial 30-day notice before the first auction of immoveable property. Failure to strictly follow this timeline is a major procedural lapse that can lead to the auction being set aside."
                                    },
                                    {
                                        q: "Does an ARC have to hire a lawyer to represent them in the DRT?",
                                        a: "Generally, yes. While legal officers of an ARC can appear, most ARCs hire specialized law firms. You should have a lawyer of equal or greater expertise to ensure your interests are protected."
                                    },
                                    {
                                        q: "Can I stop an ARC from taking physical possession of my home?",
                                        a: "Yes, by obtaining a stay order from the DRT. We check if the ARC followed the proper rules for getting a DM (District Magistrate) order under Section 14. If there are flaws in their affidavit or notice, we can get a stay on the possession."
                                    },
                                    {
                                        q: "How does the discount the ARC received affect my settlement?",
                                        a: "The discount gives the ARC 'headroom' to negotiate. If you know the ARC bought your debt for 60% of its value, you have a better idea of how low they might be willing to go in a One-Time Settlement."
                                    },
                                    {
                                        q: "What if the ARC's calculated debt is much higher than what I owe?",
                                        a: "This is very common. ARCs often add heavy penal interest and service charges. We challenge these at the admission stage in the DRT and insist on a statement of account that conforms to RBI's Master Circular on interest compounding."
                                    },
                                    {
                                        q: "How long does a DRT case against an ARC typically last?",
                                        a: "It depends on the complexity, but with a strong defense, a case can go on for 12 to 24 months. This time is often used strategically by the borrower to arrange funds or negotiate a fair settlement."
                                    },
                                    {
                                        q: "Can I file a case in the High Court instead of the DRT?",
                                        a: "Normally, Article 226 writ petitions in the High Court are not entertained if there is an alternative remedy available in the DRT. However, in cases of grave violation of natural justice or unconstitutional actions, the High Court can intervene."
                                    },
                                    {
                                        q: "Will settling with an ARC fix my credit score?",
                                        a: "A settlement will be marked as 'Settled' on your CIBIL report, which is better than 'Defaulted' but not as good as 'Closed.' However, it stops the damage and allows you to start rebuilding your credit through small, timely repayments on new credit."
                                    },
                                    {
                                        q: "What is the penalty for ignoring an ARC notice?",
                                        a: "Ignoring a notice is a major mistake. It gives the ARC a clear path to proceed with symbolic and then physical possession of your property. By responding legally through the DRT, you keep yourself in the driver's seat of the recovery process."
                                    }
                                ].map((faq, i) => (
                                    <details key={i} className="group bg-white border border-[#DEDEDE] rounded-xl overflow-hidden hover:shadow-md transition-all border-b-4 border-b-[#1F5EFF]/20">
                                        <summary className="flex justify-between items-center p-5 cursor-pointer font-black text-[#2E2E2E] list-none bg-gray-50 group-open:bg-white">
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

                        {/* Mobile-Only CTA */}
                        <div className="lg:hidden mt-16 mb-8">
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#1F5EFF]/20">
                                <div className="bg-[#1F5EFF] p-6 text-center text-white">
                                    <h3 className="text-2xl font-black mb-2">Facing ARC Action?</h3>
                                    <p className="opacity-90 text-sm">Join the 10,000+ Indians we've helped find their way to financial freedom.</p>
                                </div>
                                <div className="p-8 text-center text-[#DEDEDE]">
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-xl hover:scale-105 transition-all shadow-lg text-lg">
                                        Speak to a DRT Expert
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Right Column: Sticky Boxes */}
                    <aside className="w-full lg:w-1/5 flex flex-col gap-8">
                        <div className="sticky top-32 space-y-8">
                            {/* CTA Container */}
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                                <div className="bg-[#1F5EFF] p-4 text-center">
                                    <h3 className="text-lg font-black text-white">We are in This Together</h3>
                                </div>
                                <div className="p-6 text-center">
                                    <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                                        Do not carry the burden alone. Let our experts find the best path for your debt-free life.
                                    </p>
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg">
                                        Talk to an Expert
                                    </Link>
                                    <p className="mt-4 text-xs text-[#DEDEDE]/60 uppercase tracking-widest font-black">100% Confidential</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-white rounded-2xl shadow-sm border border-[#DEDEDE] p-6">
                                <h3 className="text-lg font-black text-[#2E2E2E] mb-6 flex items-center gap-2">
                                    <FontAwesomeIcon icon={faShieldHalved} className="text-[#1F5EFF]" />
                                    Related Help
                                </h3>
                                <div className="flex flex-col gap-4">
                                    {[
                                        { title: "DRT Loan Settlement", href: "/best-lawyer-for-loan-settlement-by-drt" },
                                        { title: "MSME Defense", href: "/best-lawyer-for-msme-business-loan-dispute" },
                                        { title: "Consortium Loans", href: "/best-lawyer-for-consortium-loan-recovery-defence" },
                                        { title: "Settle with IARC", href: "/loan-settlement-with-iarc" },
                                        { title: "Recovery Harassment", href: "/harassment-by-recovery-agents" }
                                    ].map((page, i) => (
                                        <Link key={i} href={page.href} className="text-sm font-bold text-[#2E2E2E]/70 hover:text-[#1F5EFF] transition-colors flex items-center gap-2 group">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#DEDEDE] group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            {page.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}
