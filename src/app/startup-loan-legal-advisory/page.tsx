import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
    title: "Startup Loan Legal Advisory India | Funding & Compliance Support",
    description: "Expert legal advisory for startup loans in India. Understand funding structures, government schemes like Startup India, compliance requirements, and debt recovery laws. Scale your startup safely.",
    alternates: {
        canonical: "https://settleloans.in/startup-loan-legal-advisory",
    },
};

export default function StartupLoanLegalAdvisoryPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/startup-loan-legal-advisory#webpage",
                "url": "https://settleloans.in/startup-loan-legal-advisory",
                "name": "Startup Loan Legal Advisory India | Funding & Compliance Support",
                "description": "Comprehensive legal guidance for startups in India seeking debt and equity funding, focusing on compliance and risk management.",
                "breadcrumb": { "@id": "https://settleloans.in/startup-loan-legal-advisory#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/startup-loan-legal-advisory#breadcrumb",
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
                        "name": "Startup Loan Legal Advisory",
                        "item": "https://settleloans.in/startup-loan-legal-advisory"
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/startup-loan-legal-advisory#article",
                "headline": "Startup Loan Legal Advisory: Empowering India's Entrepreneurs",
                "description": "A deep dive into the legal complexities of startup financing in India, including government schemes, compliance, and legal protections.",
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
                "mainEntityOfPage": { "@id": "https://settleloans.in/startup-loan-legal-advisory#webpage" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/startup-loan-legal-advisory#product",
                "name": "Startup Funding Legal Advisory",
                "description": "Specialized legal services for startups to manage debt, equity, and compliance for sustainable growth.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "950"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Deepak M." },
                        "datePublished": "2024-01-10",
                        "reviewBody": "As a first time founder, the legal complexities of debt funding were scary. SettleLoans provided the clarity we needed.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Kavita S." },
                        "datePublished": "2024-02-20",
                        "reviewBody": "Their understanding of the CGSS and Startup India benefits helped us secure a collateral free loan without legal risks.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://settleloans.in/startup-loan-legal-advisory#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What are the legal requirements for a startup to get a loan in India?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Startups must be registered entities (Pvt Ltd, LLP, or Partnership) and should ideally be DPIIT recognized to avail of government schemes. They need proper incorporation documents, PAN, GST registration, and a viable business plan."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the Credit Guarantee Scheme for Startups (CGSS)?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "CGSS provides credit guarantees to banks and NBFCs for loans extended to DPIIT recognized startups. This allows startups to get collateral free loans up to 20 crore rupees."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is equity financing better than debt financing for a startup?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Equity financing doesn't require repayment but dilutes ownership. Debt financing retains ownership but creates a repayment obligation. The best choice depends on your startup's stage, cash flow, and long term goals."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are the common legal risks in startup funding?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Common risks include non compliance with FEMA (for foreign funding), restrictive covenants in loan agreements, and personal liability or 'founder guarantees' that can put personal assets at risk."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can a startup be closed down if it cannot pay its loans?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, but the Insolvency and Bankruptcy Code (IBC) provides a 'Fast Track' process for startups with simple debt structures, allowing them to wind up within 90 days."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does the RBI have specific rules for startup loans?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The RBI has issued guidelines that categorize startup loans as 'Priority Sector Lending', making it easier for banks to lend to this sector. They also provide flexibility in external commercial borrowings (ECB)."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is a 'Founder Guarantee' and why is it risky?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A founder guarantee makes the individual founder personally liable for the company's debt. If the startup fails, the bank can recover the money from the founder's personal savings and property."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How can legal advisory help in the early stages of a startup?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Legal advisory ensures proper company structure, IP protection, compliant funding agreements, and risk mitigation, preventing costly legal battles in the future."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are there tax benefits for startups taking loans?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The interest paid on a business loan is fully tax deductible as a business expense. Startups under the Startup India initiative may also qualify for other income tax exemptions."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can SettleLoans assist startups in debt negotiation?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, SettleLoans provides specialized legal representation for startups in negotiations with lenders, helping them manage debt distress and reach sustainable settlements."
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
                            Startup Growth & Compliance
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                            Startup Loan Legal <br className="hidden md:block" /> Advisory in India
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
                            Scale your vision with confidence. Get expert legal help to manage startup loans, funding compliance, and government schemes while protecting your ownership.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Speak to a Startup Lawyer
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
                                    Startup Loan Legal Advisory
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
                                { id: "building-foundation", title: "Building the Foundation" },
                                { id: "startup-funding-india", title: "Funding Landscape in India" },
                                { id: "legal-compliance-funding", title: "Compliance for Funding" },
                                { id: "equity-vs-debt", title: "Equity vs Debt Advisory" },
                                { id: "startup-india-initiative", title: "Startup India Initiative" },
                                { id: "cgss-explained", title: "Understanding CGSS" },
                                { id: "mudra-loans-startups", title: "Mudra Loans for Startups" },
                                { id: "managing-founder-risk", title: "Managing Founder Risks" },
                                { id: "intellectual-property", title: "IP Protection in Loans" },
                                { id: "foreign-funding-compliance", title: "Foreign Funding & FEMA" },
                                { id: "debt-recovery-startups", title: "Debt Recovery & Startups" },
                                { id: "fast-track-insolvency", title: "Fast Track Insolvency" },
                                { id: "re-pivoting-strategy", title: "Re-pivoting Legalities" },
                                { id: "settleloans-for-startups", title: "Our Advisory Approach" },
                                { id: "founder-testimonials", title: "Founder Success Stories" },
                                { id: "faqs", title: "Common Questions" }
                            ]}
                        />
                    </aside>

                    {/* Middle Column: Content */}
                    <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">

                        <section id="building-foundation" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Empowering the Visionaries: <span className="text-black">Legal Mastery for Startups</span>
                            </h2>
                            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 z-0"></div>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                                    In the vibrant ecosystem of modern India, a startup is more than just a business; it is a manifestation of an idea that seeks to change the world. From fintech to agritech, entrepreneurs are pushing the boundaries of innovation. However, the path from a garage concept to a unicorn is paved with legal and financial complexities that can be daunting for even the most brilliant minds. Securing the right funding at the right time is critical, but understanding the legal implications of that funding is what ensures long term survival.
                                </p>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                                    Whether you are seeking your first seed round, looking for a venture debt facility, or applying for a government backed loan scheme, the legal fine print matters. A single misstep in compliance or a poorly negotiated covenant can lead to loss of control, personal liability, or even the premature death of a promising venture. At SettleLoans, we provide the legal advisory that serves as your strategic compass. We help you navigate the intricate web of Indian regulations, ensuring that you can focus on building your product while we handle the legal guardrails.
                                </p>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 font-bold text-[#1F5EFF]">
                                    Your vision deserves a solid legal foundation. Scale with confidence, knowing that your startup's future is protected by expert legal advisory.
                                </p>
                            </div>
                        </section>

                        <section id="startup-funding-india" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                                The Startup Funding Landscape in India
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                India has emerged as the third largest startup ecosystem in the world, and with this growth has come a diverse array of funding options. While traditional bank loans were once the only choice, today's founders can access venture capital, angel investors, family offices, venture debt, and various government initiatives. Each source of capital comes with its own set of legal rules, expectations, and risk profiles.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Venture debt, for instance, has become increasingly popular as it allows startups to extend their runway without additional equity dilution. However, venture debt often comes with 'warrants' and strict 'negative covenants' that can limit your operational freedom. On the other hand, government schemes like the Startup India Seed Fund offer more founder-friendly terms but require rigorous compliance with DPIIT norms. Understanding where your startup fits in this landscape is crucial for choosing the right legal strategy.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Our legal advisory services involve a deep dive into your startup's business model to identify the most suitable funding avenues. we ensure that you are not just getting capital, but 'smart capital' that aligns with your long term vision. We assist in evaluating different term sheets and loan proposals, highlighting the hidden legal risks that could impact your future exit strategy or follow-on funding rounds.
                            </p>
                            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-8">
                                <h3 className="text-xl font-bold mb-6">Navigating Different Stages of Startup Funding</h3>
                                <p className="mb-4 text-sm text-gray-600">
                                    Each stage of a startup's life requires a different legal approach to funding. What works for a pre-seed ideation phase will not suffice for a Series B growth phase.
                                </p>
                                <p className="mb-4 text-sm text-gray-600">
                                    Early stage startups should focus on founder agreements and IP assignment to make themselves 'investment ready'. As they grow, the focus shifts to more complex shareholding agreements, FEMA compliance for foreign direct investment (FDI), and maintaining a clean debt to equity ratio.
                                </p>
                                <ul className="grid md:grid-cols-2 gap-4 text-sm font-medium">
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                                        Seed Funding & Convertible Notes
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                                        Venture Debt & Warrants
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                                        Equity Financing (Series A, B, C)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                                        External Commercial Borrowings (ECB)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                                        Government Grants and Soft Loans
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                                        Bridge Loans & Working Capital
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section id="legal-compliance-funding" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                                Crucial Legal Compliance for Startup Funding
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Compliance is not a one-time event; it is a continuous process that safeguards your startup's legal standing. For Indian startups, the primary regulatory bodies include the Registrar of Companies (ROC), the Reserve Bank of India (RBI), and the Securities and Exchange Board of India (SEBI). Failing to meet the compliance standards of any of these bodies can lead to heavy penalties, legal notices, and roadblocks during due diligence by future investors.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                When you raise debt, you must ensure that your company's board resolutions and 'Articles of Association' allow for such borrowing. There are specific limits under the Companies Act, 2013, beyond which you need shareholder approval. For equity rounds, filings like Form PAS-3 and MGT-14 must be completed within strict timelines. If you are receiving funding from overseas, FEMA compliance (like filling Form FC-GPR) is non negotiable and requires the expertise of a specialized legal advisor.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Our role is to act as your shield against compliance failures. We conduct regular internal audits of your legal documents to ensure that everything is in order. We believe that 'an ounce of prevention is worth a pound of cure'. By maintaining a high standard of compliance from day one, you build a reputation for transparency and reliability that makes you highly attractive to top-tier lenders and investors.
                            </p>
                            <div className="bg-blue-50 p-8 rounded-xl border border-blue-200 mb-8">
                                <h3 className="text-xl font-bold mb-4 text-blue-900">The Power of Clean Due Diligence</h3>
                                <p className="text-sm text-blue-800 leading-relaxed mb-4">
                                    Every serious lender or investor will perform a 'Due Diligence' (DD) on your startup before releasing funds. This is a rigorous check of your corporate history, IP ownership, labor law compliance, and tax filings.
                                </p>
                                <p className="text-sm text-blue-800 leading-relaxed">
                                    Startups with 'messy' legal records often see their valuations slashed or their funding deals canceled at the last minute. Our legal advisory ensures that your DD is always 'clean'. We help you organize your data room and address any potential 'red flags' before the investor's legal team finds them. This proactive approach saves time and ensures a higher success rate for your funding activities.
                                </p>
                            </div>
                            <div className="grid sm:grid-cols-3 gap-4 my-8">
                                <div className="bg-white p-5 rounded-xl border border-[#DEDEDE] shadow-sm text-center">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </div>
                                    <h4 className="font-bold text-[#2E2E2E] mb-2">ROC Filings</h4>
                                    <p className="text-xs text-gray-500">Ensuring timely and accurate reporting of all corporate changes.</p>
                                </div>
                                <div className="bg-white p-5 rounded-xl border border-[#DEDEDE] shadow-sm text-center">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                    </div>
                                    <h4 className="font-bold text-[#2E2E2E] mb-2">Tax Compliance</h4>
                                    <p className="text-xs text-gray-500">Managing GST, TDS, and corporate income tax requirements.</p>
                                </div>
                                <div className="bg-white p-5 rounded-xl border border-[#DEDEDE] shadow-sm text-center">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    </div>
                                    <h4 className="font-bold text-[#2E2E2E] mb-2">Labor Law Compliance</h4>
                                    <p className="text-xs text-gray-500">Protecting your startup from employee related legal issues.</p>
                                </div>
                            </div>
                        </section>

                        <section id="equity-vs-debt" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">Equity vs Debt: Strategic Legal Advisory</h2>
                            <div className="bg-white p-8 rounded-2xl border border-[#DEDEDE] shadow-sm">
                                <p className="mb-4">
                                    The choice between equity and debt is one of the most critical decisions a founder will ever make. Equity financing is the traditional startup route. It brings in capital without an immediate repayment obligation, which is great for cash-heavy R&D. However, equity is the most expensive form of capital in the long run, as it costs you a percentage of your future multibillion-dollar company. Debt financing, through loans or venture debt, is 'cheaper' capital but puts immediate pressure on your monthly cash flow.
                                </p>
                                <p className="mb-4">
                                    Legal advisory in this area involves more than just reading contracts. It is about understanding 'capital efficiency'. We help you structure a mix of debt and equity that minimizes dilution while giving you enough runway to reach your next valuation milestone. For example, using a venture debt facility to fund a marketing blitz before a Series A round can significantly increase your valuation, making the eventual equity round much less dilutive.
                                </p>
                                <p className="mb-4 text-sm text-gray-500 italic">
                                    Note: Never take a loan that contains 'conversion to equity' clauses without a thorough legal review. These can lead to hostile takeovers if the company faces a temporary downturn.
                                </p>
                                <div className="flex gap-2">
                                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-md text-xs font-bold">Dilution Management</span>
                                    <span className="px-3 py-1 bg-green-50 text-green-600 rounded-md text-xs font-bold">Capital Efficiency</span>
                                </div>
                            </div>
                        </section>

                        <section id="startup-india-initiative" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Unlocking the Startup India Initiative</h2>
                            <p className="mb-6">
                                The Startup India Initiative is a flagship program by the Government of India designed to foster a culture of innovation and provide a support system for startups. Recognition by the DPIIT is the golden key that unlocks a world of benefits, including tax holidays for three years, easier compliance through self-certification, and access to the Fund of Funds (FFS) and the Startup India Seed Fund Scheme (SISFS).
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-orange-50/50 p-6 rounded-xl border border-orange-100">
                                    <h3 className="text-xl font-bold text-orange-800 mb-3">Self-Certification Benefits</h3>
                                    <p className="text-sm text-orange-900/80 leading-relaxed">
                                        Startups are allowed to self-certify their compliance with 6 labor laws and 3 environmental laws. No inspections will be conducted for three to five years unless a credible complaint is received. This significantly reduces the administrative burden on young companies.
                                    </p>
                                </div>
                                <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                                    <h3 className="text-xl font-bold text-blue-800 mb-3">IP Support & Fast Tracking</h3>
                                    <p className="text-sm text-blue-900/80 leading-relaxed">
                                        Recognized startups are eligible for up to 80% rebate in patent filing fees and 50% rebate in trademark filing fees. They also get access to specialized facilitators who help them navigate the complex patent process at no cost.
                                    </p>
                                </div>
                            </div>
                            <p className="mb-6">
                                Our legal advisory services help you navigate the registration process on the Startup India portal. We ensure that your application for DPIIT recognition is complete and accurately reflects your innovation potential. We also guide you on how to claim the Section 80-IAC tax exemption, which requires a separate application and approval from an Inter-Ministerial Board. These government benefits can collectively save a startup millions of rupees in its early years.
                            </p>
                        </section>

                        <section id="cgss-explained" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">CGSS: Collateral Free Funding for Startups</h2>
                            <p className="mb-6">
                                For many founders, the lack of personal collateral (like a home or property) is the biggest hurdle in getting a bank loan. The Credit Guarantee Scheme for Startups (CGSS) was launched specifically to solve this problem. It provides credit guarantees of up to 20 crore rupees for loans sanctioned to DPIIT recognized startups by Scheduled Commercial Banks, NBFCs, and SEBI registered Alternative Investment Funds (AIFs).
                            </p>
                            <p className="mb-6">
                                Under this scheme, the trust provides a guarantee for a portion of the loan (usually 75% to 80%), reducing the risk for the lender. This makes banks much more willing to lend to 'riskier' early stage ventures. However, navigating the CGSS requires understanding the 'Priority Sector' lending norms and ensuring that your loan agreement is compliant with the scheme's requirements. We assist you in presenting your case to the bank in a way that maximizes your chances of getting a CGSS backed loan.
                            </p>
                            <blockquote className="border-l-4 border-[#1F5EFF] pl-4 italic bg-gray-50 p-6 rounded-r-lg my-8">
                                "The CGSS is a game changer for the Indian startup ecosystem. It shifts the focus from 'asset backed lending' to 'vision backed lending', allowing the next generation of innovators to scale without personal financial fear."
                            </blockquote>
                        </section>

                        <section id="mudra-loans-startups" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Mudra Loans: Supporting Micro-Enterprises</h2>
                            <p className="mb-6">
                                For early stage or micro-startups, particularly those in the service or retail sectors, Mudra loans under the PMMY are an excellent funding source. Categorized as Shishu (up to 50,000), Kishor (up to 5 lakh), and Tarun (up to 10 lakh), these loans are collateral free and have very low interest rates compared to private microfinance.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                                    <div>
                                        <strong>Identify Your Category:</strong> Most tech startups starting their journey will fall under the 'Tarun' category. Ensure your project report clearly justifies the need for 10 lakh rupees.
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                                    <div>
                                        <strong>Prepare a Project Report:</strong> Unlike VC funding, Mudra loans require a traditional banking project report. We help you draft this report to meet the bank manager's expectations for safety and viability.
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                                    <div>
                                        <strong>Apply via JanSamarth:</strong> The JanSamarth portal is the government's digital gateway for these loans. We guide you through the digital application process to ensure all documents are uploaded correctly.
                                    </div>
                                </li>
                            </ul>
                        </section>

                        <section id="managing-founder-risk" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Founder Risks: Protecting Your Personal Future</h2>
                            <p className="mb-6 text-red-600 font-bold">
                                As a founder, your personal liability is your greatest risk. Lenders often ask founders to sign 'Personal Guarantees', which can make you personally liable for millions in business debt.
                            </p>
                            <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-xl mb-8">
                                <h3 className="text-xl font-bold text-red-800 mb-4">How to Mitigate Personal Risk</h3>
                                <ul className="space-y-3 text-red-900/80">
                                    <li>• <strong>Avoid Personal Guarantees:</strong> Always push for 'entity-based' loans. Use CGSS or other guarantee schemes instead of your own signature.</li>
                                    <li>• <strong>Director's Liability Insurance (D&O):</strong> This is a must for any growing startup. It protects you from personal legal costs arising from board decisions or inadvertent compliance failures.</li>
                                    <li>• <strong>Separate Personal Assets:</strong> Ensure that your personal assets (like your home or family savings) are never used as primary collateral for business loans.</li>
                                    <li>• <strong>Document Board Decisions:</strong> Always record minutes of meetings where financial decisions are made. This protects you by showing that you acted with 'due care' and in the 'best interests' of the company.</li>
                                </ul>
                            </div>
                            <p className="mb-6">
                                Our legal advisory specializes in 'Asset Protection' for founders. We help you structure your personal and business holdings in a way that a business failure does not lead to personal financial ruin. Remember, startups are inherently risky; your job is to manage that risk so that you can live to fight another day, even if your current venture doesn't succeed.
                            </p>
                        </section>

                        <section id="intellectual-property" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">The Role of Intellectual Property (IP) in Startup Loans</h2>
                            <p className="mb-6">
                                For a tech startup, the IP (source code, algorithms, patterns) is the most valuable asset. Banks are increasingly moving toward 'IP-backed lending' where the IP itself serves as collateral. However, this is a legally complex area where you must ensure that the IP is properly registered and assigned to the company, not held in the founder's personal name.
                            </p>
                            <div className="space-y-8">
                                <div className="bg-white p-8 rounded-2xl border border-blue-100 shadow-sm">
                                    <h3 className="text-2xl font-bold text-blue-600 mb-4">IP Assignment Agreements</h3>
                                    <p className="mb-4">
                                        Investors and lenders will always check if all the code and designs created by founders and employees have been legally 'assigned' to the startup. Without these agreements, you don't actually own your product, making it impossible to use as a legal basis for a loan.
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl border border-purple-100 shadow-sm">
                                    <h3 className="text-2xl font-bold text-purple-600 mb-4">Trademarking and Branding</h3>
                                    <p className="mb-4">
                                        A registered trademark increases your brand's value and can be an 'incorporeal asset' on your balance sheet. This improves your financial ratios, making it easier to get sanctioned for higher loan limits from NBFCs and banks.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="foreign-funding-compliance" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Foreign Funding & FEMA: Navigating Global Capital</h2>
                            <p className="mb-6 text-lg">
                                Many modern startups are registered in India but receive funding from global VCs or international banks. This brings your company under the purview of the Foreign Exchange Management Act (FEMA). FEMA compliance is notoriously complex and involves reporting every inward remittance to the RBI within 30 days.
                            </p>
                            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 mb-8">
                                <h3 className="text-2xl font-black text-[#2E2E2E] mb-6">Key FEMA Considerations</h3>
                                <div className="space-y-4">
                                    <div className="bg-white p-4 rounded-lg flex items-center justify-between">
                                        <span className="font-bold">Form FC-GPR</span>
                                        <span className="text-sm text-gray-500">Reporting issuance of shares to foreigners</span>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg flex items-center justify-between">
                                        <span className="font-bold">Valuation Certificate</span>
                                        <span className="text-sm text-gray-500">Must be from a Chartered Accountant</span>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg flex items-center justify-between">
                                        <span className="font-bold">KYC from Foreign Bank</span>
                                        <span className="text-sm text-gray-500">Essential for RBI verification</span>
                                    </div>
                                </div>
                            </div>
                            <p className="mb-6">
                                Failure to comply with FEMA can lead to penalties that are up to three times the amount of the investment. It can also lead to your startup being 'blacklisted' from receiving future foreign funds. Our legal advisory includes a dedicated FEMA compliance desk that handles all interactions with Authorized Dealer (AD) banks and ensures your foreign funding journey is smooth and compliant.
                            </p>
                        </section>

                        <section id="debt-recovery-startups" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Debt Recovery Laws for Startups: Being Prepared</h2>
                            <p className="mb-6">
                                While every founder hopes for success, the reality of business involves the risk of failure. If your startup is unable to service its debt, you will enter the world of debt recovery. Banks will attempt to use the SARFAESI Act or file civil suits. However, as a startup, you have unique legal defenses that traditional businesses might not have.
                            </p>
                            <p className="mb-6">
                                Most startup loans from NBFCs are 'unsecured' or 'venture debt', which means the bank cannot seize your physical assets without a court order. This gives you time to negotiate. Furthermore, if you are an MSME registered startup, you can use the MSME Samadhaan portal to recover your own dues from large clients, which can then be used to pay off the bank. We provide the legal representation you need during these tough times to ensure that the recovery process is fair and that you are not bullied into unfair settlements.
                            </p>
                        </section>

                        <section id="fast-track-insolvency" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Fast Track Insolvency: A Clean Exit Strategy</h2>
                            <p className="mb-6">
                                If a startup must close down, the law provides a 'Fast Track' insolvency process under the IBC. This is only available to companies that meet certain criteria (usually based on turnover and asset size). It allows for the entire liquidation process to be completed within 90 days, compared to the years it used to take under old laws.
                            </p>
                            <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100 mb-8">
                                <h3 className="text-xl font-bold text-emerald-800 mb-4">Why the 90-Day Exit Matters</h3>
                                <p className="mb-4 text-emerald-900/80">
                                    The goal of modern Indian insolvency law is 'Freedom to Fail'. By allowing entrepreneurs to close an unsuccessful venture quickly and legally, the law ensures that their capital and talent can be reallocated to a new, better idea. This is the hallmark of a healthy startup ecosystem.
                                </p>
                                <p className="text-emerald-900/80">
                                    Our legal advisory helps you decide when the time is right for a fast track exit. We handle the filing with the NCLT and coordinate with the Resolution Professional to ensure that your exit is clean, legal, and does not leave a permanent stain on your personal record.
                                </p>
                            </div>
                        </section>

                        <section id="re-pivoting-strategy" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">The Legal Side of Re-pivoting: Managing Debt During Change</h2>
                            <p className="mb-6">
                                Many famous startups succeeded only after a major 'pivot' that changed their business model. However, a pivot often changes the 'risk profile' that was agreed upon with your bank. If you change your business model without informing your lender, they could technically declare a 'default' based on your loan covenants.
                            </p>
                            <p className="mb-6">
                                We provide the legal advisory needed during a pivot. We help you draft a 'Notice of Change' to your lenders and negotiate an amendment to your loan agreement. This ensures that your pivot is legally supported and that you don't face a sudden loan recall just when you've found your new path to success. A pivot should be a moment of growth, not a source of legal stress.
                            </p>
                        </section>

                        <section id="settleloans-for-startups" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Our Startup Legal Advisory Approach</h2>
                            <p className="mb-6">
                                At SettleLoans, we think like founders. We understand the speed, the passion, and the pressure of the startup world. Our legal advisory is designed to be lean, agile, and practically oriented. We don't just quote the law; we provide solutions that help you grow. We become your 'External General Counsel', providing the expert support you need at a fraction of the cost of a full time legal team.
                            </p>
                            <div className="bg-[#2E2E2E] text-white p-8 rounded-2xl mb-8">
                                <h3 className="text-2xl font-bold mb-4">Our Commitment to Founders</h3>
                                <ul className="space-y-3 text-sm opacity-90">
                                    <li className="flex items-center gap-2">✓ Expert drafting and review of all funding related agreements (Term Sheets, SHA, SSA).</li>
                                    <li className="flex items-center gap-2">✓ Comprehensive compliance management for ROC, RBI, and FEMA requirements.</li>
                                    <li className="flex items-center gap-2">✓ Strategic negotiation for venture debt and working capital facilities.</li>
                                    <li className="flex items-center gap-2">✓ Legal representation in debt distress and settlement negotiations.</li>
                                    <li className="flex items-center gap-2">✓ Guidance on government schemes and DPIIT recognition benefits.</li>
                                </ul>
                            </div>
                        </section>

                        <section id="founder-testimonials" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Founders Who Scaled with Us</h2>
                            <div className="grid md:grid-cols-2 gap-6 not-prose">
                                {[
                                    {
                                        name: "Deepak M.",
                                        loc: "Mumbai",
                                        type: "SaaS Vertical",
                                        outcome: "Seed Round & Compliance",
                                        story: "We were raising our first $500k from overseas. The FEMA rules were terrifying. SettleLoans handled everything, from valuation to the final RBI filings. They gave us the confidence to focus on the product."
                                    },
                                    {
                                        name: "Kavita S.",
                                        loc: "Delhi",
                                        type: "D2C Brand",
                                        outcome: "CGSS Loan Success",
                                        story: "I wanted a collateral free loan but the local bank was hesitant. SettleLoans helped us bridge the gap with the right legal representation and DPIIT documents. My manufacturing unit is live today!"
                                    },
                                    {
                                        name: "Vikram R.",
                                        loc: "Bangalore",
                                        type: "Fintech Startup",
                                        outcome: "Venture Debt Review",
                                        story: "We were offered a venture debt facility with very aggressive warrants. SettleLoans identified the risks and helped us negotiate a deal that protected our cap table. A truly essential partner for any founder."
                                    },
                                    {
                                        name: "Ananya P.",
                                        loc: "Hyderabad",
                                        type: "Healthcare Tech",
                                        outcome: "Fast Track Pivot",
                                        story: "We had to pivot our business model during a funding crisis. SettleLoans managed our existing lenders during the transition, ensuring no legal notices were filed while we found our new product-market fit."
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
                                    { q: "Can a startup with no revenue get a government loan?", a: "Yes, schemes like the Startup India Seed Fund (SISFS) are designed specifically for very early stage startups that are at the proof-of-concept or prototype stage." },
                                    { q: "Is it mandatory to register as an MSME to get startup benefits?", a: "While not mandatory for all benefits, MSME registration (Udyam) is highly recommended as it provides access to priority sector lending and the MSME Samadhaan portal for payment recovery." },
                                    { q: "Does SettleLoans help in drafting Term Sheets?", a: "While term sheets are usually non-binding, they set the state for the final SHA. We provide expert review of Term Sheets to ensure that the initial commercial deal doesn't have hidden legal traps." },
                                    { q: "What is a 'Liquidation Preference' and why does it matter?", a: "This is a clause in equity agreements that determines who gets paid first if the company is sold. It is a critical legal term that can significantly impact the founder's final payout." },
                                    { q: "Can a foreign national be a director in an Indian startup?", a: "Yes, but they must have a valid DIN and should comply with the residency requirements under the Companies Act for at least one director." },
                                    { q: "How do I protect my personal assets from business startup debt?", a: "The most effective way is to operate through a 'Limited' entity and ensure you never sign personal guarantees. D&O insurance is also a vital protection." },
                                    { q: "Does DPIIT recognition expire?", a: "It is valid for 10 years from the date of incorporation or until the turnover exceeds 100 crore rupees, whichever is earlier." },
                                    { q: "Is Angel Tax still an issue for Indian startups?", a: "The government has introduced several exemptions for recognized startups. However, compliance with Section 56(2)(viib) criteria is still required to avail of these benefits." },
                                    { q: "Can a startup take more than one government loan?", a: "Yes, provided it meets the eligibility criteria for each scheme. However, most schemes will check for 'double funding' for the same specific project or expense." },
                                    { q: "How long is the first consultation with SettleLoans?", a: "We provide an initial 30 minute free advisory session to understand your startup's needs and outline a possible legal roadmap." },
                                    { q: "What documents are needed for a FEMA filing?", a: "Common documents include the Foreign Inward Remittance Certificate (FIRC), KYC of the investor, board resolution, and a CA certified valuation report." },
                                    { q: "Does debt financing impact my startup's valuation?", a: "Not directly, but a clean and manageable debt structure shows financial maturity, which can positively impact your valuation during subesequent equity rounds." }
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
                            <p className="text-gray-400 text-sm italic">Disclaimer: SettleLoans provides specialized legal and financial advisory for startups. Information regarding government schemes is for guidance only and is subject to change. Final approval remains with the respective authorities.</p>
                        </div>

                        {/* Mobile CTA */}
                        <div className="lg:hidden mt-16 mb-8">
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#1F5EFF]/20">
                                <div className="bg-[#1F5EFF] p-6 text-center text-white">
                                    <h3 className="text-2xl font-black mb-2">Scale Safely Today</h3>
                                    <p className="opacity-90 text-sm">Expert legal advisory for startup funding, compliance, and growth strategies in India.</p>
                                </div>
                                <div className="p-8 text-center text-[#DEDEDE]">
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-xl hover:scale-105 transition-all shadow-lg text-lg">
                                        Free Founder Consultation
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
                                    <h3 className="text-lg font-black text-white">Startup Legal Shield</h3>
                                </div>
                                <div className="p-6 text-center">
                                    <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                                        Don't let legal hurdles slow down your innovation. Our startup experts are here to help you scale safely.
                                    </p>
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg">
                                        Talk to a Lawyer
                                    </Link>
                                    <p className="mt-4 text-xs text-[#DEDEDE]/60 uppercase tracking-widest font-black">Startup Focused</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2">Must Read for Founders</h3>
                                <ul className="space-y-4 text-sm font-bold">
                                    <li>
                                        <Link href="/best-lawyer-for-msme-business-loan-dispute" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            MSME Loan Disputes
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/best-lawyer-for-company-loan-matters" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            Company Loan Compliance
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/best-lawyer-for-loan-contract" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            Loan Contract Review
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/working-capital-loan-legal-help" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            Working Capital Help
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
