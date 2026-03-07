import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
    title: "Mudra Loan Settlement Legal Help India | Expert PMMY Debt Relief",
    description: "Struggling with Mudra loan repayment? Get expert legal help for Mudra loan settlement (Shishu, Kishor, Tarun). Learn about OTS, RBI guidelines, and stopping harassment.",
    alternates: {
        canonical: "https://settleloans.in/mudra-loan-settlement-legal-help",
    },
};

export default function MudraLoanSettlementPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/mudra-loan-settlement-legal-help#webpage",
                "url": "https://settleloans.in/mudra-loan-settlement-legal-help",
                "name": "Mudra Loan Settlement Legal Help India | Expert PMMY Debt Relief",
                "description": "Professional legal assistance for settling Mudra loans under PMMY. Comprehensive guide on NPA resolution, OTS schemes, and borrower rights.",
                "breadcrumb": { "@id": "https://settleloans.in/mudra-loan-settlement-legal-help#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/mudra-loan-settlement-legal-help#breadcrumb",
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
                        "name": "Mudra Loan Settlement Legal Help",
                        "item": "https://settleloans.in/mudra-loan-settlement-legal-help"
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/mudra-loan-settlement-legal-help#article",
                "headline": "Mudra Loan Settlement: The Definitive Legal Guide for Indian MSMEs",
                "description": "A masterclass on resolving Mudra loan defaults, negotiating One-Time Settlements (OTS), and understanding RBI guidelines for PMMY loans.",
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
                "datePublished": "2024-03-07",
                "dateModified": "2024-03-07",
                "mainEntityOfPage": { "@id": "https://settleloans.in/mudra-loan-settlement-legal-help#webpage" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/mudra-loan-settlement-legal-help#product",
                "name": "Mudra Loan Legal Defense & Settlement",
                "description": "Expert legal representation for small businesses facing Mudra loan recovery actions and seeking debt settlement.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "reviewCount": "850"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Rajesh K." },
                        "datePublished": "2024-01-15",
                        "reviewBody": "My Kishor Mudra loan went into NPA during the pandemic. SettleLoans helped me negotiate a 50% settlement with the bank. Life saver.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Sunita M." },
                        "datePublished": "2024-02-10",
                        "reviewBody": "Excellent legal advice on handling aggressive recovery agents for my Shishu loan. The harassment stopped within 24 hours.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://settleloans.in/mudra-loan-settlement-legal-help#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Is it possible to settle a Mudra loan in India?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, Mudra loans (PMMY) can be settled through One-Time Settlement (OTS) schemes or through individual negotiations with the lending bank, especially if the account has been classified as a Non-Performing Asset (NPA)."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can the bank seize my home for a Mudra loan default?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Mudra loans are generally collateral-free. However, if the loan was part of a larger credit facility where property was pledged, or if the bank moves through a court decree, assets can be targeted. Direct seizure is rare for pure Shishu/Kishor loans."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the Shishu, Kishor, and Tarun limit in Mudra?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Shishu: Up to ₹50,000; Kishor: ₹50,001 to ₹5 Lakhs; Tarun: ₹5 Lakhs up to ₹10 Lakhs (now extended up to ₹20 Lakhs in TarunPlus)."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do Mudra loans have a subsidy or waiver?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Mudra loans do not have a direct 'waiver' by default. However, some categories (like Shishu) have seen interest subvention schemes. 'Settlement' is different from a 'waiver' as it requires negotiation."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does Mudra loan default affect my CIBIL score?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A default will lead to a 'Written-off' or 'NPA' status on your CIBIL report, drastically reducing your score and making it almost impossible to get future business or personal credit."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What legal action can a bank take for Mudra loan default?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Banks can file civil suits, approach the Debt Recovery Tribunal (for larger amounts), or issue notices under Section 138 (if checks bounced) or Section 25 (if ECS/NACH failed)."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are recovery agents allowed to visit my home for Mudra loans?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "While they can visit, they must follow RBI's Fair Practices Code. They cannot use brute force, harassment, or visit at odd hours. Any violation is a legal ground for a complaint."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the One-Time Settlement (OTS) scheme for Mudra?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "OTS is a scheme where the bank agrees to accept a portion of the total dues (often the principal amount) and waives the remaining interest and penalties to close the account forever."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I apply for a fresh Mudra loan after settling an old one?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "It is difficult. A 'Settled' status on your credit report is a red flag. However, after a cooling period of 2-3 years and score improvement, you may regain eligibility."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How can a lawyer help in Mudra loan settlement?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A lawyer can audit your loan documents, handle bank communications to prevent harassment, negotiate a lower settlement amount, and ensure you get a valid No Dues Certificate (NDC)."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />

                {/* Hero Section */}
                <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
                    <div className="max-w-5xl mx-auto text-center relative z-10">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
                            PMMY Debt Resolution
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                            Mudra Loan Settlement <br className="hidden md:block" /> Legal Help in India
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
                            Buried under business debt? We provide expert legal strategies to settle your Mudra loan (PMMY) and reclaim your financial freedom.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Start Your Settlement
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
                                    Mudra Loan Settlement Help
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <TableOfContents
                            items={[
                                { id: "pmmy-overview", title: "Understanding PMMY" },
                                { id: "npa-classification", title: "Why Mudra Loans go NPA" },
                                { id: "legal-consequences", title: "Consequences of Default" },
                                { id: "settlement-options", title: "Mudra Settlement Options" },
                                { id: "ots-guide", title: "One-Time Settlement (OTS)" },
                                { id: "recovery-agent-rights", title: "Recovery & Your Rights" },
                                { id: "rbi-guidelines", title: "RBI Rules on Mudra" },
                                { id: "negotiation-tactics", title: "Negotiation Masterclass" },
                                { id: "role-of-lawyers", title: "Why Hire a Lawyer?" },
                                { id: "cibil-impact-fix", title: "CIBIL Recovery Plan" },
                                { id: "document-checklist", title: "Document Checklist" },
                                { id: "case-studies", title: "Success Stories" },
                                { id: "avoiding-scams", title: "Avoiding Fake Relief" },
                                { id: "faqs", title: "Common Questions" }
                            ]}
                        />
                    </aside>

                    <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
                        <section id="pmmy-overview" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Pradhan Mantri Mudra Yojana: <span className="text-black">The Vision and the Debt Trap</span>
                            </h2>
                            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 z-0"></div>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6 font-medium">
                                    The Mudra Loan scheme was launched with a noble goal: to power the unfunded micro-enterprises of India. By providing loans across Shishu, Kishor, and Tarun categories, the government intended to create a self-reliant India. However, for many small business owners, market fluctuations, health crises, and economic slowdowns have transformed these growth pillars into suffocating debt burdens.
                                </p>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                                    Mudra loans are unique because they are often collateral-free and targeted at the most vulnerable business segments. This makes the recovery process particularly sensitive. When a business owner in India defaults on a Mudra loan, they aren't just facing a financial loss; they are facing a complex legal battle involving public sector banks, NBFCs, and a regulatory framework that is often misunderstood.
                                </p>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 font-bold text-[#1F5EFF]">
                                    At SettleLoans, we believe that every honest entrepreneur deserves a second chance. Mudra loan settlement is not just about paying less; it is about closing a difficult chapter with dignity and legal finality.
                                </p>
                            </div>
                        </section>

                        <section id="npa-classification" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                                Why Mudra Loans Crash: The Road to NPA
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                A loan account becomes a Non-Performing Asset (NPA) when the interest or principal installment remains overdue for more than 90 days. This is the 'Red Zone' for any Mudra borrower. But why does this happen? Unlike large corporate loans, Mudra loans fail because of micro-economic factors—a local shop's rent increase, a family medical emergency, or the sudden entry of a large competitor.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Banks in India are under immense pressure from the RBI to keep their NPA levels low. This pressure often trickles down to the Mudra borrower in the form of aggressive recovery tactics. Understanding that your loan is now an NPA is the first step toward resolution. Once an account is an NPA, the bank's flexibility to offer a 'Settlement' increases, as they would rather recover a portion of the fund than have the entire amount sit as a 'Loss Asset' on their balance sheet.
                            </p>
                        </section>

                        <section id="legal-consequences" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                                The Legal Consequences of Mudra Default
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                While Mudra loans are 'collateral-free,' they are not 'liability-free.' The bank holds the power of the law to recover the public money lent under this scheme. The consequences of ignoring a Mudra default are severe and multi-dimensional.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                                    <h4 className="text-lg font-bold text-orange-900 mb-2">Notice under Section 138</h4>
                                    <p className="text-sm text-orange-800 leading-relaxed">
                                        If you provided post-dated checks (PDCs) and they bounce, you can face criminal charges under the Negotiable Instruments Act. This can lead to imprisonment or heavy fines.
                                    </p>
                                </div>
                                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                                    <h4 className="text-lg font-bold text-red-900 mb-2">Civil Recovery Suits</h4>
                                    <p className="text-sm text-red-800 leading-relaxed">
                                        Banks can file a summary suit in a civil court to attach your other personal assets or source of income to recover the outstanding balance.
                                    </p>
                                </div>
                            </div>
                            <p className="text-lg leading-relaxed mb-6 font-bold">
                                Crucially, a Mudra default destroys your CIBIL score. Since most Mudra borrowers are sole proprietors, this default reflects directly on their personal credit report, blocking access to home loans, car loans, and even credit cards for years.
                            </p>
                        </section>

                        <section id="settlement-options" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                                Mudra Loan Settlement Options: The Legal Shield
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                If you cannot repay the full amount, does the law provide a way out? Yes. Mudra loan settlement is a valid legal process where you and the bank reach a compromise.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                The primary goal of a settlement is to reach a 'Full and Final' agreement that stops all legal proceedings and releases you from further liability. At SettleLoans, we explore various hybrid plans—upfront payments, short-term installments, and interest waivers—to make the settlement affordable for the micro-entrepreneur.
                            </p>
                        </section>

                        <section id="ots-guide" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                                One-Time Settlement (OTS): The Gold Standard of Relief
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Most Public Sector Banks (PSBs) in India periodically launch OTS schemes specifically for small loans like Mudra. An OTS scheme is an open invitation for defaulters to close their accounts by paying a fraction of the total dues.
                            </p>
                            <div className="bg-blue-900 text-white p-8 rounded-2xl mb-8">
                                <h3 className="text-2xl font-bold mb-4">The OTS Advantage</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#1F5EFF] font-bold text-xl">✓</span>
                                        <span><strong>Interest Waiver:</strong> In many Mudra OTS schemes, 100% of the penal interest and a large portion of the normal interest are waived.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#1F5EFF] font-bold text-xl">✓</span>
                                        <span><strong>Legal Immunity:</strong> Once the OTS amount is paid, the bank is legally required to withdraw all pending court cases.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#1F5EFF] font-bold text-xl">✓</span>
                                        <span><strong>Principal Repayment:</strong> Usually, you only pay a slightly more than the principal amount borrowed, making it the cheapest way to exit debt.</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section id="recovery-agent-rights" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                                Recovery Agents and Your Legal Rights
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Perhaps the most traumatic part of a Mudra default is the harassment by recovery agents. These agents often exploit the borrower's lack of legal knowledge to intimidate them. However, the Reserve Bank of India (RBI) has very strict 'Fair Practices Codes' for recovery.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                You have the right to privacy and dignity. Recovery agents cannot visit you before 8 AM or after 7 PM. They cannot call your relatives (unless they are co-borrowers) or use abusive language. If they do, it is a criminal offense, and you can file an FIR. At SettleLoans, our legal team issues 'Cease and Desist' notices to banks to ensure your harassment stops the moment we take over your case.
                            </p>
                        </section>

                        <section id="rbi-guidelines" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                                RBI Guidelines on Mudra and SME NPAs
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The RBI has issued various circulars regarding the restructuring and settlement of MSME loans, including Mudra. These guidelines mandate banks to have a board-approved policy for compromise settlements. If a bank is refusing to discuss a settlement for your genuine financial hardship, they are violating the spirit of these guidelines.
                            </p>
                            <p className="text-lg leading-relaxed mb-6 font-bold">
                                Pro Tip: The RBI's 'Prudential Framework for Resolution of Stressed Assets' provides a roadmap for how banks should handle NPA accounts. We use these specific circulars to force banks to the negotiating table.
                            </p>
                        </section>

                        <section id="negotiation-tactics" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Mastering the Mudra Settlement Negotiation</h2>
                            <p className="mb-6">
                                Negotiation is not just about asking for a discount; it's about building a case. When we negotiate for a Mudra borrower, we prepare a detailed 'Hardship Profile.' We highlight the business losses, medical expenses, and the lack of collateral to show the bank that a settlement is their best chance of recovery.
                            </p>
                            <div className="bg-white p-8 rounded-2xl border border-[#DEDEDE] shadow-sm mb-8">
                                <h3 className="text-xl font-black text-[#1F5EFF] mb-4 uppercase tracking-[2px]">Strategy for Shishu/Kishor Loans</h3>
                                <p className="leading-relaxed mb-4">
                                    For loans under 5 lakhs, the legal costs for the bank often outweigh the recovery amount. We use this 'Cost-Benefit' reality to push for settlements that are as low as 30-40% of the total outstanding dues. Banks would rather close ten such files in a day than fight ten court cases for years.
                                </p>
                            </div>
                        </section>

                        <section id="role-of-lawyers" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Why Hire a Lawyer for Mudra Settlement?</h2>
                            <p className="mb-6">
                                Many borrowers ask: 'Can't I just go to the bank myself?' You can, but you are walking into a den of professionals designed to extract every rupee. A settlement lawyer provides the 'Equality of Arms.' We understand the bank's internal 'Provisioning' rules—how much they have already written off in their books and how much more they can waive.
                            </p>
                            <p className="mb-6 font-medium">
                                A lawyer ensures that the settlement is 'Legally Airtight.' We've seen hundreds of cases where borrowers paid the settlement amount, only for the bank to send another recovery notice a year later because the paperwork was faulty. We ensure you get a 'No Dues Certificate' that stands up in any court.
                            </p>
                        </section>

                        <section id="cibil-impact-fix" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">The Long-Term CIBIL Recovery Plan</h2>
                            <p className="mb-6">
                                A settlement will show as 'Settled' on your CIBIL report. This is better than 'Default' or 'NPA,' but it still affects your credit score. We provide our clients with a 24-month 'Credit Rebuilding Roadmap.' This includes using 'Secure Credit Cards' or small 'Gold Loans' to show fresh positive repayment history, eventually overriding the negative impact of the old Mudra settlement.
                            </p>
                        </section>

                        <section id="document-checklist" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 uppercase tracking-tighter">Your Mudra Settlement Document Checklist</h2>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</span>
                                        <span>Copy of the original Mudra Sanction Letter.</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</span>
                                        <span>Loan Account Statement for the last 12-24 months.</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</span>
                                        <span>Latest Credit Report (CIBIL/Experian).</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</span>
                                        <span>Proof of Financial Hardship (Medical bills, closure of shop, etc.).</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</span>
                                        <span>Copies of all notices received from the Bank or Recovery Agents.</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section id="case-studies" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center text-blue-600">Proof of Success: Mudra Cases Resolved</h2>
                            <div className="grid md:grid-cols-2 gap-6 not-prose">
                                {[
                                    { name: "Prakash T.", loc: "Ahmedabad", type: "Kishor Loan", savings: "₹1.8 Lakhs", story: "Facing closure of his textile shop, Prakash owed 4 lakhs. We negotiated an OTS for 2.2 lakhs, settled in 2 installments." },
                                    { name: "Ayesha B.", loc: "Lucknow", type: "Shishu Loan", savings: "₹45,000", story: "Ayesha was harassed for a 50k loan after her beauty parlor closed. We filed an RBI complaint; the bank waived all interest and closed the file for 35k." },
                                    { name: "Harish S.", loc: "Bangalore", type: "Tarun Loan", savings: "₹3.5 Lakhs", story: "Harish had a 9 lakh loan with mounting penalties. We discovered the bank hadn't applied the interest subvention. Result: Huge waiver and a clean closure." },
                                    { name: "Deepak V.", loc: "Indore", type: "TarunPlus Loan", savings: "₹6 Lakhs", story: "For an 18 lakh loan, the bank threatened property attachment. Our legal defense stopped the action and led to a structured settlement over 12 months." }
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
                                            <span className="block text-green-700 font-bold">Saved: {review.savings}</span>
                                        </div>
                                        <p className="text-sm text-gray-600 italic leading-relaxed">"{review.story}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="avoiding-scams" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Warning: Avoiding Fake Mudra Loan Relief</h2>
                            <p className="mb-6">
                                The internet is full of scammers promising 'Mudra Loan Waivers' for a small upfront fee. Remember: There is NO such thing as a guaranteed waiver. Legal settlement is a case-by-case negotiation based on facts. Never share your OTPs or bank passwords with anyone claiming to be from the 'Mudra Ministry.' Always work with registered legal professionals who provide a clear service agreement.
                            </p>
                        </section>

                        <section id="faqs" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Mudra Loan Settlement: Your Questions Answered</h2>
                            <div className="space-y-4 not-prose">
                                {[
                                    { q: "Is a Mudra loan really collateral-free?", a: "Yes, for Shishu and Kishor loans, banks are not allowed to ask for third-party guarantees or collateral. For Tarun loans, they may ask for business assets, but personal property is usually exempt unless specifically pledged." },
                                    { q: "Can I be arrested for Mudra loan default?", a: "Defaulting on a loan is a civil matter. You cannot be arrested just for being unable to pay. However, you can face arrest if you commit fraud, forge documents, or ignore court summons in a Section 138 (check bounce) case." },
                                    { q: "How long does the Mudra settlement process take?", a: "A typical negotiation takes 4 to 12 weeks. If an active OTS scheme is running, it can be as fast as 15 days." },
                                    { q: "What is the minimum percentage for a Mudra settlement?", a: "There is no fixed percentage. It depends on the bank's policy, the age of the NPA (older NPAs get better deals), and your financial hardship. We've achieved settlements from 30% to 70% of the total dues." },
                                    { q: "Will a settlement affect my family's credit score?", a: "No. Unless your family members were co-borrowers or guarantors, their credit scores remain unaffected by your Mudra loan default or settlement." },
                                    { q: "Can a bank refuse an OTS offer?", a: "Yes. An OTS is a 'discretionary' power of the bank. However, if they refuse a reasonable offer and instead continue harassment, we use regulatory channels to challenge their decision." },
                                    { q: "What should I do if my Mudra loan was taken through an agent who is now missing?", a: "The loan agreement is between you and the bank. The agent's disappearance does not absolve you of the debt, but it can be used as a legal ground if there was mis-selling or fraud involved." },
                                    { q: "Does SettleLoans guarantee a specific settlement amount?", a: "No ethical lawyer can guarantee a specific outcome in a negotiation. What we guarantee is a professional legal defense, the cessation of harassment, and the best possible settlement terms based on current bank policies." },
                                    { q: "Can I settle my Mudra loan while it is still in the 'Standard Asset' category?", a: "It is very difficult. Banks generally only settle once the account becomes an NPA or a Sub-Standard asset. If you are struggling, we help you prepare for the transition to NPA to maximize your settlement leverage." },
                                    { q: "What happens after the settlement payment is made?", a: "You MUST receive a 'No Dues Certificate' (NDC) and a 'Closure Letter.' We verify these documents to ensure they specify that the debt is fully settled and that the bank will update the credit bureaus." }
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
                            <p className="text-gray-400 text-sm italic">Disclaimer: SettleLoans is a private legal consultancy and is not affiliated with any government ministry or the PMMY scheme. Success in debt settlement depends on individual bank policies and borrower cooperation.</p>
                        </div>

                        {/* Mobile CTA */}
                        <div className="lg:hidden mt-16 mb-8">
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#1F5EFF]/20">
                                <div className="bg-[#1F5EFF] p-6 text-center text-white">
                                    <h3 className="text-2xl font-black mb-2">Freedom From Mudra Debt</h3>
                                    <p className="opacity-90 text-sm">Expert legal help to settle your business loans and start fresh.</p>
                                </div>
                                <div className="p-8 text-center text-[#DEDEDE]">
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-xl hover:scale-105 transition-all shadow-lg text-lg">
                                        Free Case Review
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Right Column */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                                <div className="bg-[#1F5EFF] p-4 text-center">
                                    <h3 className="text-lg font-black text-white">Settle Your Mudra</h3>
                                </div>
                                <div className="p-6 text-center">
                                    <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                                        Close your Shishu, Kishor, or Tarun loan with a legal shield. Stop harassment today.
                                    </p>
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg">
                                        Speak to an Expert
                                    </Link>
                                    <p className="mt-4 text-xs text-[#DEDEDE]/60 uppercase tracking-widest font-black">ISO 9001 Certified</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2">Related Assistance</h3>
                                <ul className="space-y-4 text-sm font-bold">
                                    <li>
                                        <Link href="/business-loan-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            Business Loan Relief
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/SME-loan-dispute-resolution" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            SME Disputes
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/working-capital-loan-legal-help" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            Working Capital Help
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/best-lawyer-for-msme-and-business-loans" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            MSME Legal Experts
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
