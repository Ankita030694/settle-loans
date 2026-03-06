import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
    title: "Business & Corporate Loan Matters India | IBC, NCLT & Debt Resolution",
    description: "Expert legal guidance on business corporate loan matters in India. Navigate IBC, NCLT proceedings, CIRP, and personal guarantor liability with our comprehensive technical guide.",
    alternates: {
        canonical: "https://settleloans.in/business-corporate-loan-matters",
    },
};

export default function BusinessCorporateLoanPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/business-corporate-loan-matters#webpage",
                "url": "https://settleloans.in/business-corporate-loan-matters",
                "name": "Business & Corporate Loan Matters India | IBC, NCLT & Debt Resolution",
                "description": "Comprehensive technical guide to corporate loan resolution, IBC 2016, and NCLT procedures in India.",
                "breadcrumb": { "@id": "https://settleloans.in/business-corporate-loan-matters#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/business-corporate-loan-matters#breadcrumb",
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
                        "name": "Business Corporate Loan Matters",
                        "item": "https://settleloans.in/business-corporate-loan-matters"
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/business-corporate-loan-matters#article",
                "headline": "Business & Corporate Loan Matters in India: The Ultimate Resolution Guide",
                "description": "Deep dive into the legal framework of corporate debt, including IBC 2016, NCLT processes, and strategic recovery defense.",
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
                "datePublished": "2024-03-06",
                "dateModified": "2024-03-06",
                "mainEntityOfPage": { "@id": "https://settleloans.in/business-corporate-loan-matters#webpage" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/business-corporate-loan-matters#product",
                "name": "Corporate Debt Advisory Services",
                "description": "Professional legal advisory for corporate insolvency, NCLT cases, and bank debt resolution.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "1240"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Aditya M." },
                        "datePublished": "2024-01-15",
                        "reviewBody": "SettleLoans helped us navigate a complex NCLT proceeding. Their understanding of IBC is exceptional.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Rajesh T." },
                        "datePublished": "2024-02-10",
                        "reviewBody": "Professional handling of our corporate debt settlement. Highly recommended for business legal matters.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://settleloans.in/business-corporate-loan-matters#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is the threshold for initiating CIRP under IBC?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "As per current regulations, the minimum default amount required to initiate the Corporate Insolvency Resolution Process (CIRP) is 1 Crore INR."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can a financial creditor initiate IBC proceedings?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, under Section 7 of the IBC 2016, a financial creditor can file an application before the NCLT for initiating CIRP against a corporate debtor upon default."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the role of the Committee of Creditors (CoC)?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The CoC is composed of financial creditors who make critical decisions during the CIRP, including approving the resolution plan with a 66% majority vote."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is a personal guarantor liable for corporate debt?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, the Supreme Court has upheld that personal guarantors can be held liable, and insolvency proceedings can be initiated against them alongside the corporate debtor."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is a moratorium under IPC Section 14?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A moratorium prohibits the institution of suits, continuation of legal proceedings, and enforcement of any security interest against the corporate debtor during the CIRP period."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How long does the CIRP process take?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The IBC mandates a 180 day timeline for resolution, extendable by 90 days, with a mandatory overall limit of 330 days including legal delays."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can operational creditors file for insolvency?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, under Section 9 of the IBC, operational creditors (suppliers, employees, etc.) can initiate CIRP after serving a 10 day demand notice."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the difference between NCLT and DRT for business loans?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "NCLT handles corporate insolvency under IBC, while DRT handles debt recovery for banks against individuals and firms under the RDDBFI Act."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What happens if no resolution plan is approved?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "If the CoC does not approve a plan within the timeline, the NCLT passes an order for the liquidation of the corporate debtor."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can SettleLoans assist in corporate debt restructuring?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, we provide expert legal advisory for out of court settlements, restructuring proposals, and represent clients in IBC related negotiations."
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
                            Corporate Legal Excellence
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                            Business & Corporate <br className="hidden md:block" /> Loan Matters
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
                            Strategic resolution for complex corporate debt. Navigate IBC 2016, NCLT proceedings, and cross-border insolvency with India's leading legal advisory.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Resolve Corporate Debt Now
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
                                    Business Corporate Loan Matters
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
                                { id: "corporate-debt-ecosystem", title: "Corporate Debt Ecosystem" },
                                { id: "ibc-nclt-mastery", title: "IBC & NCLT Mastery" },
                                { id: "cirp-procedures", title: "CIRP Step-by-Step" },
                                { id: "role-of-coc", title: "The Role of CoC" },
                                { id: "personal-guarantor", title: "Personal Guarantor Liability" },
                                { id: "sarfaesi-business", title: "Commercial SARFAESI" },
                                { id: "debt-restructuring", title: "Corporate Restructuring" },
                                { id: "cross-border", title: "Cross-Border Insolvency" },
                                { id: "settleloans-methodology", title: "Our Strategic Shield" },
                                { id: "success-case-studies", title: "Resolution Success Stories" },
                                { id: "faqs", title: "Common Questions" }
                            ]}
                        />
                    </aside>

                    {/* Middle Column: Content */}
                    <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">

                        <section id="corporate-debt-ecosystem" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Corporate Debt Ecosystem: <span className="text-black">The Landscape of Business Finance</span>
                            </h2>
                            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 z-0"></div>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                                    In the rapidly evolving economic landscape of modern India, corporate debt has become the primary fuel for expansion, innovation, and large scale infrastructure development. However, the complexity of business finance means that debt is never just a simple line item on a balance sheet. It is a dense network of contractual obligations, statutory regulations, and multi layered security interests that involve commercial banks, NBFCs, private equity firms, and bondholders. For a business leader, understanding this ecosystem is not just about financial management; it is about survival.
                                </p>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                                    Whether you are managing a promising MSME or a large listed corporate entity, the dynamics of debt change radically during periods of stress. In India, the legal framework for corporate debt has undergone a paradigm shift since 2016, moving from a 'debtor in possession' model to a 'creditor in control' model. This transition has vested enormous power in financial institutions, making it imperative for companies to have a robust legal defense and a proactive resolution strategy. At SettleLoans, we specialize in navigating these high stakes environments, ensuring that business owners retain as much control and value as possible during the resolution process.
                                </p>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 font-bold text-[#1F5EFF]">
                                    Managing corporate debt requires more than just accounting skills; it requires a deep understanding of the Insolvency and Bankruptcy Code (IBC) and the procedural nuances of the National Company Law Tribunal (NCLT).
                                </p>
                            </div>
                        </section>

                        <section id="ibc-nclt-mastery" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                                IBC & NCLT Mastery: The Core of Corporate Resolution
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The Insolvency and Bankruptcy Code, 2016 (IBC) is arguably the most transformative piece of economic legislation in India's history. It replaced a fragmented and inefficient system of debt recovery with a unified, time bound, and structured process. For corporate debtors, the IBC represents both a significant threat and a potential opportunity for a fresh start. The adjudicating authority for corporate insolvency is the National Company Law Tribunal (NCLT), which has benches across various major cities in India.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Mastery of the IBC involves understanding the delicate balance between the rights of financial creditors (banks/lenders) and operational creditors (suppliers/employees). Unlike the old regime where cases could linger in civil courts for decades, the IBC operates on a strict timeline. The primary goal is the 'resuscitation' of the corporate debtor through a resolution plan. Liquidation is envisioned only as a last resort, when no viable recovery path exists. This focus on value maximization and business continuity is the cornerstone of our corporate advisory practice.
                            </p>
                            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-8">
                                <h3 className="text-xl font-bold mb-6">Technical Pillars of IBC 2016</h3>
                                <ul className="grid md:grid-cols-2 gap-4 text-sm font-medium">
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                                        Section 7: Financial Creditor Petition
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                                        Section 9: Operational Creditor Petition
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                                        Section 10: Voluntary Debtor Petition
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                                        Section 14: Mandatory Moratorium
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                                        Section 29A: Disqualification of Promoters
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                                        Section 31: Approval of Resolution Plan
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section id="cirp-procedures" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                                CIRP Step-by-Step: Navigating the Resolution Process
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The Corporate Insolvency Resolution Process (CIRP) begins when the NCLT admits a petition for insolvency. Upon admission, a 'Moratorium' is immediately declared, which acts as a legal shield for the corporate debtor, stopping all other legal proceedings and debt recovery actions. The management of the company is then transferred from the board of directors to an Interim Resolution Professional (IRP), who is tasked with protecting and preserving the value of the assets.
                            </p>
                            <p className="text-lg leading-relaxed mb-10">
                                This period is the most critical phase for any company. It is during this time that a Committee of Creditors (CoC) is formed, primarily comprising financial creditors. The CoC has the ultimate power to decide the fate of the company, including whether to accept a resolution plan or proceed to liquidation. Navigating this process requires expert legal representation to ensure that the claims are correctly verified and that the resolution plan is drafted in a way that respects the legal rights of all stakeholders while seeking the best possible outcome for the business.
                            </p>

                            <div className="relative border-l-2 border-dashed border-[#1F5EFF]/30 pl-8 ml-4 space-y-12 mb-12">
                                <div className="relative">
                                    <div className="absolute -left-11 top-0 w-6 h-6 bg-[#1F5EFF] rounded-full border-4 border-white shadow-sm flex items-center justify-center text-[10px] text-white font-bold">1</div>
                                    <h4 className="font-bold text-xl mb-3">Admission & Moratorium</h4>
                                    <p className="text-gray-600 leading-relaxed">The NCLT admits the petition. All existing lawsuits and recovery actions against the company are stayed. This provides breathing room for the business.</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-11 top-0 w-6 h-6 bg-[#1F5EFF] rounded-full border-4 border-white shadow-sm flex items-center justify-center text-[10px] text-white font-bold">2</div>
                                    <h4 className="font-bold text-xl mb-3">Appointment of IRP</h4>
                                    <p className="text-gray-600 leading-relaxed">The management is temporarily handed over to an Interim Resolution Professional who takes charge of the bank accounts and daily operations.</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-11 top-0 w-6 h-6 bg-[#1F5EFF] rounded-full border-4 border-white shadow-sm flex items-center justify-center text-[10px] text-white font-bold">3</div>
                                    <h4 className="font-bold text-xl mb-3">Public Announcement & Claims</h4>
                                    <p className="text-gray-600 leading-relaxed">A public notice is issued, inviting all creditors to submit their claims with evidence. This determines the voting power in the CoC.</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-11 top-0 w-6 h-6 bg-[#1F5EFF] rounded-full border-4 border-white shadow-sm flex items-center justify-center text-[10px] text-white font-bold">4</div>
                                    <h4 className="font-bold text-xl mb-3">Formation of CoC</h4>
                                    <p className="text-gray-600 leading-relaxed">The Committee of Creditors is formed. They meet to decide whether to continue with the IRP or appoint a new Resolution Professional (RP).</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-11 top-0 w-6 h-6 bg-[#1F5EFF] rounded-full border-4 border-white shadow-sm flex items-center justify-center text-[10px] text-white font-bold">5</div>
                                    <h4 className="font-bold text-xl mb-3">Resolution Plan & Approval</h4>
                                    <p className="text-gray-600 leading-relaxed">Prospective resolution applicants submit plans. The CoC votes, and if a plan gets 66% approval, it goes to NCLT for final sanction.</p>
                                </div>
                            </div>
                        </section>

                        <section id="role-of-coc" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">The Role of CoC: Understanding Creditor Control</h2>
                            <p className="mb-6 text-lg leading-relaxed">
                                The Committee of Creditors (CoC) is the most powerful entity in the entire CIRP. It is where the 'democracy of creditors' functions. The Supreme Court has repeatedly affirmed that the 'commercial wisdom' of the CoC is supreme and cannot be interfered with by the NCLT or NCLAT unless there is a violation of law. Each financial creditor in the CoC has a voting share proportional to the debt owed to them.
                            </p>
                            <p className="mb-6 text-lg leading-relaxed">
                                For a corporate debtor, dealing with the CoC requires a sophisticated negotiation strategy. It is not just about the numbers; it is about building trust and demonstrating that a resolution plan offers more value than liquidation. Our experts help in crafting these narratives, engaging with Lead Banks, and ensuring that the operational realities of the business are well understood by the financial institutions sitting in the CoC.
                            </p>
                        </section>

                        <section id="personal-guarantor" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Personal Guarantor Liability: The New Frontier</h2>
                            <div className="bg-red-50 p-8 rounded-2xl border border-red-100 mb-8 overflow-hidden relative">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-red-800 mb-4">Critical Warning for Directors & Promoters</h3>
                                <p className="text-red-900 leading-relaxed mb-4">
                                    A landmark ruling by the Supreme Court of India has confirmed that when a company enters insolvency, the lenders can simultaneously initiate insolvency proceedings against the Personal Guarantors (usually the promoters or directors). This is a game changer. The 'limited liability' of the company no longer protects your personal assets if you have signed a personal guarantee.
                                </p>
                                <p className="text-red-900 font-bold mb-0">
                                    The resolution plan of the company does not automatically discharge the personal guarantor unless explicitly stated. This requires a dedicated legal protection strategy to save your family home and personal savings.
                                </p>
                            </div>
                            <p className="mb-6 text-lg leading-relaxed">
                                At SettleLoans, we provide a specialized 'Guarantor Shield' service. We help promoters understand the impact of the Insolvency and Bankruptcy (Application to Adjudicating Authority for Insolvency Resolution Process for Personal Guarantors to Corporate Debtors) Rules, 2019. We represent you in NCLat and NCLT to ensure that the recovery actions against you are balanced, fair, and legally sound.
                            </p>
                        </section>

                        <section id="sarfaesi-business" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Commercial SARFAESI: Defending Business Assets</h2>
                            <p className="mb-6 text-lg leading-relaxed">
                                While the IBC focuses on resolution, the SARFAESI Act, 2002 remains the bank's most powerful tool for asset recovery. For businesses, this often means the seizure of factory premises, office buildings, or machinery. A 13(2) notice under SARFAESI is the first shot across the bow. If not replied to within 60 days with strong legal objections, the bank can proceed to take physical possession of the assets.
                            </p>
                            <p className="mb-6 text-lg leading-relaxed">
                                However, banks often make procedural errors in their rush to recover. Whether it is a faulty valuation, a lack of proper notice to all co-borrowers, or the inclusion of 'Agricultural Land' (which is exempt), there are many grounds to challenge SARFAESI actions in the Debt Recovery Tribunal (DRT). Our commercial litigation team specializes in filing S.A. (Securitization Applications) to stay auctions and force the banks back to the negotiating table.
                            </p>
                        </section>

                        <section id="debt-restructuring" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Corporate Restructuring: Modern Variants</h2>
                            <p className="mb-6 text-lg leading-relaxed">
                                Beyond NCLT, there are several 'Out of Court' restructuring mechanisms that can save a company from the stigma of insolvency. Schemes like S4A (Scheme for Sustainable Structuring of Stressed Assets) or the ICA (Inter-Creditor Agreement) framework allow for a more collaborative approach. Restructuring usually involves converting a portion of the debt into equity, extending repayment periods, or obtaining a moratorium on interest.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                    <h4 className="font-bold text-blue-800 mb-2">Debt-to-Equity Swap</h4>
                                    <p className="text-sm text-blue-900/80">Converting part of the lender's debt into shares of the company, reducing the monthly interest burden and giving the lender a stake in future success.</p>
                                </div>
                                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                    <h4 className="font-bold text-green-800 mb-2">Sustainable Debt Split</h4>
                                    <p className="text-sm text-green-900/80">Dividing the total debt into 'Sustainable' (which the company can pay from current cash flow) and 'Unsustainable' (which is settled or deferred).</p>
                                </div>
                            </div>
                        </section>

                        <section id="cross-border" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Cross-Border Insolvency: For Global Businesses</h2>
                            <p className="mb-6 text-lg leading-relaxed">
                                In an era of globalization, many Indian companies have assets and creditors located outside the country. Cross-border insolvency is a complex field that involves the coordination of multiple legal systems. While India is still in the process of adopting the UNCITRAL Model Law on Cross-Border Insolvency, recent NCLT rulings have begun to recognize the need for international cooperation. If your business has offshore debt or foreign currency convertible bonds (FCCBs), you need an advisor who understands private international law and treaty obligations.
                            </p>
                        </section>

                        <section id="settleloans-methodology" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Our Strategic Shield: The SettleLoans Advantage</h2>
                            <p className="mb-6">
                                SettleLoans provides a comprehensive ecosystem of legal and financial services designed specifically for corporate debt resolution. We are not just advisors; we are your tactical partners in the boardroom and the courtroom.
                            </p>
                            <div className="bg-[#2E2E2E] text-white p-10 rounded-[40px] shadow-2xl relative overflow-hidden mb-12">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#1F5EFF]/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                                <div className="relative z-10">
                                    <h3 className="text-3xl font-black mb-8">The Corporate Shield Methodology</h3>
                                    <ul className="space-y-6">
                                        <li className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-full bg-[#1F5EFF] flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                                            <div>
                                                <strong className="block text-xl mb-1 text-[#1F5EFF]">Forensic Debt Audit</strong>
                                                <span className="opacity-80">We conduct a deep dive into your loan agreements to identify illegal interest compounding or procedural lapses by lenders.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-full bg-[#1F5EFF] flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
                                            <div>
                                                <strong className="block text-xl mb-1 text-[#1F5EFF]">NCLT/DRT Advocacy</strong>
                                                <span className="opacity-80">Our network of senior advocates represents you with precision, ensuring that the 'Moratorium' is strictly enforced and your assets are protected.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-full bg-[#1F5EFF] flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
                                            <div>
                                                <strong className="block text-xl mb-1 text-[#1F5EFF]">Strategic CoC Negotiation</strong>
                                                <span className="opacity-80">We handle the high-pressure meetings with the Committee of Creditors, moving the conversation towards a win-win resolution plan.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-full bg-[#1F5EFF] flex items-center justify-center flex-shrink-0 text-sm font-bold">4</div>
                                            <div>
                                                <strong className="block text-xl mb-1 text-[#1F5EFF]">Resolution Plan Drafting</strong>
                                                <span className="opacity-80">We draft technical resolution plans that are compliant with Section 30 of the IBC, maximizing the chances of NCLT approval.</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section id="success-case-studies" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Stories of Corporate Resolution</h2>
                            <div className="grid md:grid-cols-2 gap-6 not-prose">
                                {[
                                    {
                                        name: "Aditya M.",
                                        loc: "Mumbai",
                                        type: "Steel Manufacturing",
                                        outcome: "CIRP Successfully Concluded",
                                        story: "Our company was pushed into NCLT by a set of aggressive suppliers. SettleLoans helped us draft a resolution plan that convinced the CoC of our future viability. We kept the factory running, saved 200 jobs, and settled the debt for 40 cents on the dollar."
                                    },
                                    {
                                        name: "Rajesh T.",
                                        loc: "Bengaluru",
                                        type: "Tech Services",
                                        outcome: "Guarantor Liability Stayed",
                                        story: "The bank tried to seize my personal apartment for a corporate loan default. SettleLoans identified a technical error in the guarantee document and obtained a stay from the NCLAT. This gave us the leverage we needed for a one time settlement."
                                    },
                                    {
                                        name: "Vikram R.",
                                        loc: "Chennai",
                                        type: "Textile Export",
                                        outcome: "Cross-Border Settlement",
                                        story: "Managing debt across Singapore and India was a nightmare. The SettleLoans team coordinated with international counsel and used the IBC framework to consolidate our liabilities. We are now back in business with a clean slate."
                                    },
                                    {
                                        name: "Anita L.",
                                        loc: "Delhi",
                                        type: "Hospitality Chain",
                                        outcome: "Commercial Restructuring",
                                        story: "During the pandemic, our debt ballooned. Instead of liquidation, SettleLoans guided us through a structured out of court settlement under the RBI's Special Framework. We avoided the stigma of insolvency and saved our brand."
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
                                    { q: "What is the 'Fresh Start' process under IBC?", a: "The Fresh Start process allows low income individuals with debts up to 35,000 INR to have their debts discharged. While designed for individuals, it is part of the overall insolvency framework." },
                                    { q: "Can a promoter bid for their own company under IBC?", a: "Section 29A of the IBC generally disqualifies promoters of defaulting companies from bidding for their own company to prevent moral hazard. However, there are certain exemptions for MSMEs." },
                                    { q: "What is the difference between a Secured and Unsecured Financial Creditor?", a: "Secured creditors have a charge over specific assets (like land or machinery), giving them higher priority in the 'Waterfall' of payments during liquidation. Unsecured creditors do not have such specific charges." },
                                    { q: "What is the 'Waterfall Mechanism' in IBC?", a: "It is the statutory priority list for distributing proceeds during liquidation. Costs of the CIRP come first, followed by secured creditors and workmen's dues, then employees, and finally unsecured creditors and shareholders." },
                                    { q: "What is the Pre-packaged Insolvency Resolution Process (PPIRP)?", a: "PPIRP is a faster insolvency process designed specifically for MSMEs. It allows the debtor to stay in control (debtor-in-possession) while working on a resolution plan with the creditors before filing with NCLT." },
                                    { q: "Can an NRI be a Personal Guarantor for an Indian company?", a: "Yes, NRIs can be personal guarantors. If the company defaults, the NRI guarantor is equally liable, and recovery actions can be initiated under Indian law, often involving international asset tracking." },
                                    { q: "What is 'Extinguish of Liability'?", a: "It refers to the legal termination of a debt obligation, usually through a court-sanctioned resolution plan or a one-time settlement certificate issued by the lender." },
                                    { q: "Can a bank file for both SARFAESI and IBC?", a: "Yes, banks often initiate SARFAESI to recover specific assets and then move to IBC for a total resolution of the corporate debt. However, a stay under IBC (Moratorium) overrides SARFAESI actions." },
                                    { q: "Is the Resolution Professional (RP) an employee of the bank?", a: "No, the RP is an independent professional registered with an Insolvency Professional Agency (IPA). They are officers of the court and must maintain neutrality while managing the company." },
                                    { q: "What is the NCLAT?", a: "The National Company Law Appellate Tribunal is the higher court that hears appeals against the orders of the NCLT. Decisions of the NCLAT can further be challenged in the Supreme Court of India." },
                                    { q: "Can employees trigger insolvency for unpaid salaries?", a: "Yes, employees are considered operational creditors. If the total unpaid salary exceeds 1 Crore INR across a group of employees, they can jointly file a petition under Section 9 of the IBC." },
                                    { q: "What is a 'Reasoned Order' from the NCLT?", a: "It is a judicial order where the tribunal provides the legal logic and facts behind its decision. Generic orders are often set aside on appeal for lack of reasoning." }
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
                            <p className="text-gray-400 text-sm italic">Disclaimer: SettleLoans is a tech enabled corporate legal advisory firm. We are not a law firm, but we work with a network of experienced senior advocates, NCLT specialists, and Insolvency Professionals to provide resolution services. Final judicial outcomes depend on the merits of each case and the discretion of the respective legal forums.</p>
                        </div>

                        {/* Mobile CTA */}
                        <div className="lg:hidden mt-16 mb-8">
                            <div className="bg-[#1F5EFF] text-white p-10 rounded-[40px] shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
                                <h3 className="text-2xl font-black mb-6 relative z-10">Protect Your Business Legacy</h3>
                                <p className="text-lg mb-8 relative z-10 font-medium">
                                    Facing an NCLT petition or high value recovery? Our corporate defense experts represent you with the strategic depth needed for a successful resolution.
                                </p>
                                <Link href="/contact" className="inline-block bg-white text-[#1F5EFF] font-black py-4 px-12 rounded-full hover:scale-105 transition-all text-xl relative z-10 shadow-lg">
                                    Secure Your Business Now
                                </Link>
                            </div>
                        </div>
                    </article>

                    {/* Right Column: Sticky Sidebar */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 flex flex-col items-center">
                                <div className="bg-[#1F5EFF] w-full p-4 text-center">
                                    <h3 className="text-lg font-black text-white">Corporate Helpdesk</h3>
                                </div>
                                <div className="p-6 text-center">
                                    <div className="w-16 h-16 bg-[#1F5EFF]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#1F5EFF]/20">
                                        <svg className="w-8 h-8 text-[#1F5EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                                    </div>
                                    <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                                        Complex corporate debt requires an expert legal shield. Talk to our senior advisors today.
                                    </p>
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md">
                                        Consult Our Team
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2">Business Assets</h3>
                                <ul className="space-y-4 text-sm font-bold">
                                    <li>
                                        <Link href="/best-lawyer-for-msme-business-loan-dispute" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            MSME Debt Expert
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/best-lawyer-for-consortium-loan-recovery-defence" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            Consortium Defense
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/startup-loan-legal-advisory" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            Startup Advisory
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/working-capital-loan-legal-help" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            Working Capital
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
