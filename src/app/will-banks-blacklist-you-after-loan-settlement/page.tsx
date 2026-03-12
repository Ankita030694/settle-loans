import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
    title: "Will Banks Blacklist You After Loan Settlement? | The Truth 2024",
    description: "Concerned about being blacklisted after loan settlement? This 5500+ word guide explains internal bank lists, CIBIL impact, and how to regain your creditworthiness.",
    alternates: {
        canonical: "https://settleloans.in/will-banks-blacklist-you-after-loan-settlement",
    },
};

export default function BanksBlacklistAfterSettlementPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/will-banks-blacklist-you-after-loan-settlement#webpage",
                "url": "https://settleloans.in/will-banks-blacklist-you-after-loan-settlement",
                "name": "Will Banks Blacklist You After Loan Settlement? | Full Analysis",
                "description": "Explaining the reality of bank blacklisting post-settlement in India, covering internal lists and credit recovery.",
                "breadcrumb": { "@id": "https://settleloans.in/will-banks-blacklist-you-after-loan-settlement#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/will-banks-blacklist-you-after-loan-settlement#breadcrumb",
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
                        "name": "Will Banks Blacklist You?",
                        "item": "https://settleloans.in/will-banks-blacklist-you-after-loan-settlement"
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/will-banks-blacklist-you-after-loan-settlement#article",
                "headline": "Will Banks Blacklist You After Loan Settlement? The Ultimate 2024 Guide",
                "description": "Is a loan settlement a permanent ban from banking? We uncover the truth about internal bank lists and CIBIL reporting.",
                "author": {
                    "@type": "Organization",
                    "name": "SettleLoans Legal Content Team"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "SettleLoans",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://settleloans.in/logo/logo.svg"
                    }
                },
                "datePublished": "2024-03-12",
                "dateModified": "2024-03-12",
                "mainEntityOfPage": { "@id": "https://settleloans.in/will-banks-blacklist-you-after-loan-settlement#webpage" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/will-banks-blacklist-you-after-loan-settlement#product",
                "name": "Loan Settlement Consultation",
                "description": "Expert advice on avoiding permanent blacklisting and negotiating settlements with Indian banks.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "1890"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Vikram Mehta" },
                        "datePublished": "2024-01-20",
                        "reviewBody": "I was worried about never getting a loan again. SettleLoans showed me the path to recovery and handled the bank professionally.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Sandeep K." },
                        "datePublished": "2024-02-10",
                        "reviewBody": "Understanding the 'internal list' changed everything. I successfully settled and am now rebuilding with a secured card.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Rishabh S." },
                        "datePublished": "2024-03-05",
                        "reviewBody": "They stopped the recovery agents from calling my office. My professional reputation was saved, and I settled at 45%.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Ananya G." },
                        "datePublished": "2024-03-12",
                        "reviewBody": "Thought I was on a permanent blacklist. SettleLoans helped me settle and then guided me to my first card after 18 months.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://settleloans.in/will-banks-blacklist-you-after-loan-settlement#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "1. Is there a common blacklist shared by all banks?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "There is no single 'blacklist' shared by all banks. However, all banks report to CIBIL and other credit bureaus. If you settle with one bank, others can see the 'Settled' status on your credit report."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "2. Can I get a credit card from the same bank I settled with?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Highly unlikely. Most banks maintain 'internal negative lists'. If you settle with Bank A, they will likely never issue you a new unsecured loan or credit card for many years."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "3. Can I settle a loan and then immediately get a loan from a different bank?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. All banks check CIBIL. It takes time (usually 12-24 months) to rebuild trust through small repayment behaviors before a new bank will take a risk on you."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "4. When does the 'Settled' status disappear from CIBIL?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "In India, most credit bureaus keep account history for 7 years. After this, if the debt is reported as closed/settled, it may be removed or weighted significantly less."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "5. If I pay the remaining 'waived' amount later, will the blacklist be removed?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. This is called 'Settlement to Closure'. If you pay the waived amount, the bank will update your status to 'Closed' or 'Post-Settlement No Dues'."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "6. Can a bank freeze my savings account if I settled another loan with them?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Usually no, once the settlement is finalized and NDC is issued, the legal dispute ends. Post-settlement, they cannot legally freeze your new funds."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "7. Will my credit card limit ever increase after settlement?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Not on the same card (which will be closed). On new cards, limits start low and will only increase after 12-18 months of perfect usage."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "8. How do I know if I am on an internal blacklist?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "If your CIBIL score is high (>750) but a specific bank rejects you with a reason like 'Internal Policy', it means you are on their negative list."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "9. Can SettleLoans help me get off a blacklist?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We help you negotiate a 'Settlement to Closure' deal or ensure your CIBIL is updated correctly. We provide the legal roadmap to becoming creditworthy again."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "10. Does settling a gold loan lead to blacklisting?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Settling a secured loan is rare. If you settle, it's still reported, but since it's secured, the impact is slightly less severe than an unsecured card settlement."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "11. Will my NRI status be affected by loan settlement?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No, settlement is a civil matter. It does not affect your passport or visa status unless there is a specific 'Look-Out Circular' for multi-crore fraud."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

                {/* Hero Section */}
                <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
                    <div className="max-w-5xl mx-auto text-center relative z-10">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
                            Debt Reality Check
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight uppercase">
                            Will Banks <span className="text-[#1F5EFF]">Blacklist</span> You <br className="hidden md:block" /> After Loan Settlement?
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
                            Unveiling the truth about internal bank lists, the 'Settled' status on CIBIL, and whether you can ever re-enter the mainframe of Indian banking.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Secure Your Credit
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Breadcrumb */}
                <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
                    <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
                        <nav aria-label="Breadcrumb">
                            <ol className="flex items-center space-x-2 text-xs md:text-sm text-[#747474]">
                                <li><Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link></li>
                                <li><span className="text-gray-300">/</span></li>
                                <li className="font-bold text-[#2E2E2E]" aria-current="page">Will Banks Blacklist You?</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                {/* 3-Column Layout */}
                <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <TableOfContents items={[
                            { id: "intro", title: "The Blacklist Myth" },
                            { id: "internal-lists", title: "Internal Negative Lists" },
                            { id: "cibil-reporting", title: "CIBIL Status: Settled" },
                            { id: "blacklist-duration", title: "Is it Permanent?" },
                            { id: "impact-assessment", title: "Impact on Family" },
                            { id: "employment-checks", title: "Employment Impact" },
                            { id: "same-bank-policy", title: "Same Bank Policy" },
                            { id: "other-banks", title: "Other Bank's View" },
                            { id: "recovery-roadmap", title: "Recovery Path" },
                            { id: "success-stories", title: "Real Stories of Freedom" },
                            { id: "legal-recourse", title: "Your Legal Rights" },
                            { id: "settlement-to-closure", title: "Settlement to Closure" },
                            { id: "future-credit", title: "Future of Credit" },
                            { id: "human-impact", title: "The Human Impact" },
                            { id: "faqs", title: "FAQ" }
                        ]} />
                    </aside>

                    <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)] text-lg leading-relaxed">
                        <section id="intro" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">The 'Blacklist' Myth vs. The Reality</h2>
                            <p className="mb-6">
                                One of the biggest fears borrowers face during financial distress is the idea of being "Blacklisted". You might have heard recovery agents or even local branch managers say, "If you settle this loan, you will be blacklisted from every bank in India for life."
                            </p>
                            <p className="mb-6">
                                <strong>Is this true? The short answer is NO.</strong> There is no official, government-mandated central 'blacklist' that permanently bans you from the banking system. However, the <em>functional reality</em> is more complex. While you aren't legally 'banned', your ability to access credit becomes extremely restricted due to two factors: Internal Negative Lists and Credit Bureau Reporting.
                            </p>
                            <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100 mb-8">
                                <h3 className="text-xl font-bold mb-4 text-blue-900">Summary of the 'Blacklist' Concept:</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 text-blue-600 font-bold">•</div>
                                        <span><strong>There is no central legal blacklist:</strong> No law in India prevents a bank from lending to someone who has settled a past debt.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 text-blue-600 font-bold">•</div>
                                        <span><strong>CIBIL reporting is the main 'list':</strong> All 4 credit bureaus (CIBIL, Experian, Equifax, CRIF) record your settlement. Any bank checking your score can see this.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 text-blue-600 font-bold">•</div>
                                        <span><strong>Internal bank lists are private:</strong> The bank you settled with will almost certainly 'blacklist' you internally, meaning <em>they</em> will never lend to you again.</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section id="cibil-reporting" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">CIBIL Status: 'Settled' vs. 'Written-off'</h2>
                            <p className="mb-6 leading-relaxed">
                                Most borrowers look at their credit score, but banks look at the <em>Account Status</em>. When you settle a loan, your credit report (CIBIL) doesn't just show a lower score; it marks that specific account with a permanent tag.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl shadow-sm">
                                    <h4 className="font-bold text-[#1F5EFF] mb-2 uppercase">The 'Settled' Status</h4>
                                    <p className="text-sm text-gray-600 mb-4">You and the bank agreed on a lower amount. You paid that amount. The account is closed, but with a loss to the bank.</p>
                                    <p className="text-xs text-gray-500 font-bold italic">Bank's view: "This person is a risk, but they are communicative and tried to pay something."</p>
                                </div>
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl shadow-sm">
                                    <h4 className="font-bold text-red-600 mb-2 uppercase">The 'Written-off' Status</h4>
                                    <p className="text-sm text-gray-600 mb-4">You didn't pay anything for a long time. The bank gave up and moved the debt to their 'bad books' or sold it to an ARC.</p>
                                    <p className="text-xs text-gray-500 font-bold italic">Bank's view: "This person is a high-risk defaulter. Blacklist them immediately."</p>
                                </div>
                            </div>
                            <p className="mb-6 leading-relaxed">
                                A 'Settled' tag is undeniably better than 'Written-off'. While both are considered negative by lenders, a settlement indicates a resolution. Modern lending algorithms at NBFCs and FinTech apps (like KreditBee, Slice, etc.) often overlook a 'Settled' status if it happened more than 2-3 years ago and you've been disciplined since then.
                            </p>
                        </section>

                        <section id="blacklist-duration" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Is the Blacklist Permanent? The 7-Year Rule</h2>
                            <p className="mb-6 leading-relaxed">
                                In the world of credit bureaus, negative information doesn't stay forever. In India, most derogatory marks (including 'Settled' status) stay on your CIBIL report for **7 years**.
                            </p>
                            <div className="relative border-l-4 border-l-[#1F5EFF] pl-8 py-4 mb-8 bg-gray-50 rounded-r-2xl">
                                <h3 className="text-xl font-bold mb-4">The Lifecycle of a Settlement Mark:</h3>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <span className="font-black text-[#1F5EFF] min-w-[80px]">Year 1-2:</span>
                                        <p className="text-sm">Critical Stage. Almost no bank will lend to you. You are in the 'deep shade' of the blacklist.</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="font-black text-[#1F5EFF] min-w-[80px]">Year 3-4:</span>
                                        <p className="text-sm">Thaw Stage. Small-ticket NBFC loans and secured (FD-backed) credit cards become accessible.</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="font-black text-[#1F5EFF] min-w-[80px]">Year 5-7:</span>
                                        <p className="text-sm">Recovery Stage. Tier-2 banks might approve high-interest loans. The 'Settled' mark starts losing its weight in algorithms.</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="font-black text-[#1F5EFF] min-w-[80px]">After 7:</span>
                                        <p className="text-sm">Renewal. The record is purged from most bureau reports. You essentially start with a clean slate (though your history might still exist in internal bank databases).</p>
                                    </div>
                                </div>
                            </div>
                            <p className="mb-6 leading-relaxed">
                                <strong>Crucial Point:</strong> While the BUREAU report clears up in 7 years, the <em>INTERNAL</em> database of the specific bank you settled with might keep your details for life. This is why we advise our clients to never apply to the same bank again, even decades later.
                            </p>
                        </section>

                        <section id="impact-assessment" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Does the 'Blacklist' Affect My Family?</h2>
                            <p className="mb-6 leading-relaxed">
                                This is a major source of anxiety. "Will my settlement stop my daughter from getting an education loan?" or "Can my wife still get a home loan?"
                            </p>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="p-8 bg-white border border-[#DEDEDE] rounded-2xl shadow-md">
                                    <h4 className="text-xl font-bold mb-4 text-[#1F5EFF] uppercase border-b-2 border-blue-50 pb-2">Individual Credit Identity</h4>
                                    <p className="text-sm leading-relaxed text-gray-700">
                                        In India, credit scores are tied to individual PAN and Aadhaar cards. Your wife's credit score is independent of yours. If she has a clean history and her own income, your settlement has <strong>zero direct impact</strong> on her creditworthiness.
                                    </p>
                                </div>
                                <div className="p-8 bg-white border border-[#DEDEDE] rounded-2xl shadow-md">
                                    <h4 className="text-xl font-bold mb-4 text-red-600 uppercase border-b-2 border-red-50 pb-2">The 'Joint Loan' Exception</h4>
                                    <p className="text-sm leading-relaxed text-gray-700">
                                        The only time your 'blacklist' status affects family is if you are a **Co-applicant** or a **Guarantor**. If your family member applies for a loan and lists you as a co-applicant, the bank will check your CIBIL, see the 'Settled' status, and likely reject the entire application.
                                    </p>
                                </div>
                            </div>
                            <p className="mt-8 mb-6 leading-relaxed italic text-gray-500 text-center px-12">
                                Pro-Tip: If you have settled a debt, ensure your name is NOT included in any family loan applications. Let the member with the clean credit history apply solo.
                            </p>
                        </section>
                        <section id="employment-checks" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Can a 'Blacklist' Affect My Employment?</h2>
                            <p className="mb-6 leading-relaxed">
                                In recent years, Background Verification (BGV) in India has become more sophisticated. Large MNCs, especially in the FinTech, Banking, and IT sectors, often include a "Financial Integrity Check" as part of their hiring process.
                            </p>
                            <div className="bg-orange-50 p-8 rounded-2xl border border-orange-200 mb-8 border-r-8 border-r-orange-500">
                                <h3 className="text-xl font-bold mb-4 uppercase text-orange-900">The Reality of BGV:</h3>
                                <ul className="space-y-4 text-orange-900/90">
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold text-xs mt-1">!</div>
                                        <span><strong>Private Sector Jobs:</strong> Most IT and retail companies only care about criminal records and degree verification. They rarely check CIBIL scores. A settlement will NOT stop you from getting a job at a company like Infosys, TCS, or Google.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold text-xs mt-1">!</div>
                                        <span><strong>BFSI Sector (Banking & Finance):</strong> This is the exception. If you are applying for a role in a bank, an NBFC, or a payment gateway, they will check your credit report. A 'Settled' or 'Written-off' status can be seen as a lack of 'fiscal discipline' and may lead to a disqualification.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold text-xs mt-1">!</div>
                                        <span><strong>Government Jobs:</strong> Generally, the Indian government does not check credit scores for civil service or administrative roles. However, sensitive roles in the RBI or PSU banks may have specific financial background requirements.</span>
                                    </li>
                                </ul>
                            </div>
                            <p className="mb-6 leading-relaxed">
                                If you are already employed, your current employer has no legal grounds to fire you because you settled a personal loan. Debt is a private civil matter that is entirely separate from your professional performance, provided you haven't committed fraud against the company itself.
                            </p>
                        </section>

                        <section id="same-bank-policy" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Same Bank vs. Other Bank Policies</h2>
                            <p className="mb-6 leading-relaxed">
                                This is where the distinction between a 'CIBIL report' and a 'Blacklist' becomes clearest.
                            </p>
                            <div className="space-y-8">
                                <div className="p-8 bg-white border border-[#DEDEDE] rounded-2xl shadow-sm">
                                    <h3 className="text-2xl font-bold mb-4 text-[#2E2E2E]">The 'Source' Bank (Lifetime Ban)</h3>
                                    <p className="text-sm leading-relaxed mb-4">
                                        If you settled with ICICI Bank, they will record the loss in their internal "Negative Customer Database". Even if your CIBIL score becomes 850, if you apply for a credit card at ICICI ten years later, their system will find your old record. For the source bank, you are essentially blacklisted for life.
                                    </p>
                                    <div className="p-4 bg-gray-50 rounded-lg text-xs font-bold text-gray-500 uppercase tracking-widest">Recommendation: Move your salary and savings to a different bank immediately after settlement.</div>
                                </div>

                                <div className="p-8 bg-white border border-[#DEDEDE] rounded-2xl shadow-sm">
                                    <h3 className="text-2xl font-bold mb-4 text-[#2E2E2E]">The 'Other' Banks (Case-by-Case)</h3>
                                    <p className="text-sm leading-relaxed mb-4">
                                        Other banks do not have access to your old bank's private notes. They only see what's on the CIBIL report. If the 'Settled' status is old (3+ years) and your current income is high, many banks (especially smaller ones or NBFCs like Bajaj Finance or HDFC) might still consider you for a loan. They see you as a "recovering risk" rather than a "permanent ban".
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="recovery-roadmap" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">The 24-Month Recovery Roadmap</h2>
                            <p className="mb-6 leading-relaxed">
                                You are not banned from the banking system; you are just in a 'Credit Coma'. Here is how to wake up your credit profile and prove to the world that you are a reliable borrower once again.
                            </p>
                            <div className="grid md:grid-cols-4 gap-4 mb-8">
                                <div className="p-6 bg-[#2E2E2E] text-white rounded-xl text-center">
                                    <span className="text-2xl font-black block mb-2 text-[#1F5EFF]">01</span>
                                    <h5 className="font-bold text-xs uppercase mb-2">Month 0-6</h5>
                                    <p className="text-[10px] opacity-70 italic">NO NEW LOANS. Let the settlement settle on your report. Open a high-balance savings account in a NEW bank.</p>
                                </div>
                                <div className="p-6 bg-[#2E2E2E] text-white rounded-xl text-center">
                                    <span className="text-2xl font-black block mb-2 text-[#1F5EFF]">02</span>
                                    <h5 className="font-bold text-xs uppercase mb-2">Month 7-12</h5>
                                    <p className="text-[10px] opacity-70 italic">Get a Secured Credit Card. Pay a fixed deposit of ₹50,000 and get a card with a ₹40,000 limit. Use it for small bills only.</p>
                                </div>
                                <div className="p-6 bg-[#2E2E2E] text-white rounded-xl text-center">
                                    <span className="text-2xl font-black block mb-2 text-[#1F5EFF]">03</span>
                                    <h5 className="font-bold text-xs uppercase mb-2">Month 13-18</h5>
                                    <p className="text-[10px] opacity-70 italic">Perfect Repayment. Ensure every single bill for that secured card is paid in FULL before the due date. No exceptions.</p>
                                </div>
                                <div className="p-6 bg-[#2E2E2E] text-white rounded-xl text-center">
                                    <span className="text-2xl font-black block mb-2 text-[#1F5EFF]">04</span>
                                    <h5 className="font-bold text-xs uppercase mb-2">Month 19-24</h5>
                                    <p className="text-[10px] opacity-70 italic">The Graduation. Apply for a small unsured loan or a consumer durable loan. If approved, the 'Blacklist' is officially broken.</p>
                                </div>
                            </div>
                        </section>
                        <section id="success-stories" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center uppercase tracking-tight">Real Stories of Freedom</h2>
                            <div className="grid md:grid-cols-2 gap-6 pb-2">
                                {[
                                    {
                                        name: "Vikram Mehta",
                                        loc: "Mumbai",
                                        outcome: "Credit Rebuild Plan",
                                        story: "I was worried about never getting a loan again. SettleLoans showed me the path to recovery and handled the bank professionally at every step."
                                    },
                                    {
                                        name: "Sandeep K.",
                                        loc: "Bangalore",
                                        outcome: "Success Post-Settlement",
                                        story: "Understanding the 'internal list' changed everything for me. I successfully settled and am now rebuilding my credit with a secured card as advised."
                                    },
                                    {
                                        name: "Rishabh S.",
                                        loc: "Delhi",
                                        outcome: "Career Reputation Saved",
                                        story: "They stopped the recovery agents from calling my office. My professional reputation was saved, and I settled my high-interest debt at 45% of the total."
                                    },
                                    {
                                        name: "Ananya G.",
                                        loc: "Chennai",
                                        outcome: "System Re-Entry",
                                        story: "Thought I was on a permanent blacklist. SettleLoans helped me settle and then guided me to my first new credit card after 18 months of discipline."
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

                            <div className="bg-[#F8F9FA] p-12 rounded-[40px] border border-[#DEDEDE] my-16">
                                <h3 className="text-3xl font-black mb-6 text-[#2E2E2E]">The Role of ARCs: When Your Debt is Sold</h3>
                                <p className="mb-6 leading-relaxed text-gray-700">
                                    Sometimes, your bank stops chasing you and sells your debt to an Asset Reconstruction Company (ARC) like Phoenix ARC, ARCIL, or Edelweiss. This is a critical moment in the 'blacklist' story.
                                </p>
                                <div className="grid md:grid-cols-3 gap-6 mb-8">
                                    <div className="p-6 bg-white rounded-2xl shadow-sm border border-[#DEDEDE]">
                                        <h4 className="font-bold mb-3 text-[#1F5EFF]">Bureau Reporting</h4>
                                        <p className="text-sm text-gray-600">The ARC will now be the one reporting to CIBIL. The original bank account will show as 'Transferred/Sold'.</p>
                                    </div>
                                    <div className="p-6 bg-white rounded-2xl shadow-sm border border-[#DEDEDE]">
                                        <h4 className="font-bold mb-3 text-[#1F5EFF]">Negotiation Power</h4>
                                        <p className="text-sm text-gray-600">ARCs buy debt at a deep discount. This often means they are more willing to settle for a lower amount than the original bank.</p>
                                    </div>
                                    <div className="p-6 bg-white rounded-2xl shadow-sm border border-[#DEDEDE]">
                                        <h4 className="font-bold mb-3 text-[#1F5EFF]">Closure Certificate</h4>
                                        <p className="text-sm text-gray-600">Ensure the ARC provides a proper No Dues Certificate. Without this, the 'blacklist' tag on CIBIL will never update.</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 leading-relaxed italic">
                                    Information Insight: Being handled by an ARC often means you are on a very specific type of 'negative list' that specialized credit repair services (like SettleLoans) can help you navigate more effectively than general banking consultants.
                                </p>
                            </div>
                        </section>
                        <section id="faqs" className="scroll-mt-32 mb-12 border-t border-[#DEDEDE] pt-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight uppercase">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl shadow-sm">
                                    <h3 className="font-bold text-[#1F5EFF] mb-2 text-lg">Is there a common blacklist shared by all banks?</h3>
                                    <p className="text-sm leading-relaxed text-gray-700">There is no single 'blacklist' shared by all banks in India. However, all retail banks report to credit bureaus like CIBIL, Equifax, and Experian. If you settle with one bank, other banks will see the 'Settled' tag on your report, which acts as a universal red flag for automated lending systems.</p>
                                </div>
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl shadow-sm">
                                    <h3 className="font-bold text-[#1F5EFF] mb-2 text-lg">Can I get a credit card from the same bank I settled with?</h3>
                                    <p className="text-sm leading-relaxed text-gray-700">It is highly unlikely. Most banks maintain 'internal negative lists' or 'customer delinquency logs' that never expire. If you settle with Bank A, they will likely never issue you another unsecured product, even if your score reaches 850 a decade later.</p>
                                </div>
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl shadow-sm">
                                    <h3 className="font-bold text-[#1F5EFF] mb-2 text-lg">Can I settle a loan and then immediately get a loan from a different bank?</h3>
                                    <p className="text-sm leading-relaxed text-gray-600">No. All banks check CIBIL. It takes time (usually 12-24 months) to rebuild trust through small repayment behaviors before a new bank will take a risk on you. Even if your income is very high, the presence of a 'Settled' tag in the last 12 months is an automatic rejection for most automated lending systems.</p>
                                </div>
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl shadow-sm">
                                    <h3 className="font-bold text-[#1F5EFF] mb-2 text-lg">When does the 'Settled' status disappear from CIBIL?</h3>
                                    <p className="text-sm leading-relaxed text-gray-700">In India, most credit bureaus keep account history for 7 years. After this, if the debt is reported as closed/settled, it may be removed or weighted significantly less. Some bureaus may retain it longer if the account was never fully resolved.</p>
                                </div>
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl shadow-sm">
                                    <h3 className="font-bold text-[#1F5EFF] mb-2 text-lg">If I pay the remaining 'waived' amount later, will the blacklist be removed?</h3>
                                    <p className="text-sm leading-relaxed text-gray-700">Yes. This is called 'Settlement to Closure'. If you pay the waived amount, the bank will update your status to 'Closed' or 'Post-Settlement No Dues'. This is the best way to clear your name permanently and is highly recommended if you plan to take a home loan in the future.</p>
                                </div>
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl shadow-sm">
                                    <h3 className="font-bold text-[#1F5EFF] mb-2 text-lg">Can a bank freeze my savings account if I settled another loan with them?</h3>
                                    <p className="text-sm leading-relaxed text-gray-700">Usually no. Once the settlement is finalized and a No Dues Certificate is issued, the legal dispute is considered resolved. The bank cannot arbitrarily freeze your new funds unless they have a specific court order for a separate matter.</p>
                                </div>
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl shadow-sm">
                                    <h3 className="font-bold text-[#1F5EFF] mb-2 text-lg">Will my credit card limit ever increase after settlement?</h3>
                                    <p className="text-sm leading-relaxed text-gray-700">Not on the same card, as settlement requires the card to be cancelled. On new credit cards (likely secured ones), the limit will start very low (often ₹10,000 to ₹50,000) and will only increase after 12-18 months of disciplined usage.</p>
                                </div>
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl shadow-sm">
                                    <h3 className="font-bold text-[#1F5EFF] mb-2 text-lg">How do I know if I am on an internal blacklist?</h3>
                                    <p className="text-sm leading-relaxed text-gray-700">If your CIBIL score is high (&gt;750) but a specific bank rejects you with a reason like "Internal Policy" or "Past Relationship", it means you are on their negative list. You can also check if you have a pre-approved offer; if you don't even after years of having an account, you might be flagged.</p>
                                </div>
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl shadow-sm">
                                    <h3 className="font-bold text-[#1F5EFF] mb-2 text-lg">Can SettleLoans help me get off a blacklist?</h3>
                                    <p className="text-sm leading-relaxed text-gray-700">We help you negotiate a 'Settlement to Closure' deal or ensure your CIBIL is updated correctly. While we can't 'delete' bank records, we provide the legal and financial roadmap to becoming creditworthy again by ensuring banks follow RBI reporting guidelines.</p>
                                </div>
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl shadow-sm">
                                    <h3 className="font-bold text-[#1F5EFF] mb-2 text-lg">Does settling a gold loan lead to blacklisting?</h3>
                                    <p className="text-sm leading-relaxed text-gray-700">Settling a secured loan is rare since the bank already has your gold. If you settle, it's still reported, but since it's secured, the impact is slightly less severe than an unsecured credit card settlement. However, the bank you settled with will still likely blacklist you internally.</p>
                                </div>
                                <div className="p-6 bg-white border border-[#DEDEDE] rounded-xl shadow-sm">
                                    <h3 className="font-bold text-[#1F5EFF] mb-2 text-lg">Will my NRI status be affected by loan settlement?</h3>
                                    <p className="text-sm leading-relaxed text-gray-700">No, settlement is a civil matter. It does not affect your passport, visa status, or ability to travel, unless there is a specific 'Look-Out Circular' for multi-crore fraud or wilful default. For 99% of personal loan borrowers, there is no impact on international travel.</p>
                                </div>
                            </div>
                        </section>

                        <section id="legal-recourse" className="scroll-mt-32 mb-12 border-t border-[#DEDEDE] pt-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight uppercase">Legal Recourse: Fighting Back Against 'Permanent Blacklisting' Threats</h2>
                            <p className="mb-6 leading-relaxed">
                                Banks and recovery agents often use the word "Blacklist" as a weapon to induce fear. They want you to believe that your life is over if you don't pay the full amount immediately. This is not just misleading; it can sometimes border on illegal harassment.
                            </p>
                            
                            <div className="bg-[#2E2E2E] text-white p-10 rounded-[30px] mb-12 shadow-xl">
                                <h3 className="text-2xl font-bold mb-6 text-[#1F5EFF]">The RBI Master Circular on Recovery Agents (2022)</h3>
                                <p className="mb-6 text-sm opacity-80 leading-relaxed">
                                    According to the latest RBI guidelines, banks and their outsourced recovery agents are strictly prohibited from:
                                </p>
                                <ul className="grid md:grid-cols-2 gap-6">
                                    <li className="p-4 bg-white/5 rounded-xl border border-white/10 text-sm">Threatening to "blacklist" you in a way that implies a legal ban from all banking services.</li>
                                    <li className="p-4 bg-white/5 rounded-xl border border-white/10 text-sm">Contacting your employer to complain about your settlement or 'blacklist' status.</li>
                                    <li className="p-4 bg-white/5 rounded-xl border border-white/10 text-sm">Threatening your family members or using their credit health as a bargaining chip.</li>
                                    <li className="p-4 bg-white/5 rounded-xl border border-white/10 text-sm">Misrepresenting the legal consequences of settlement (e.g., claiming you can't get a passport).</li>
                                </ul>
                            </div>

                            <p className="mb-6 leading-relaxed">
                                If you feel you are being unfairly treated or that the bank is maintaining an internal "blacklist" despite your attempts to resolve the debt reasonably, you have two primary avenues of complaint:
                            </p>

                            <div className="space-y-6 mb-12">
                                <div className="p-8 bg-white border border-[#DEDEDE] rounded-2xl shadow-sm">
                                    <h4 className="text-xl font-bold mb-4 text-[#2E2E2E]">1. The Banking Ombudsman</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        The Banking Ombudsman is a senior official appointed by the RBI to redress customer complaints. If a bank refuses to issue a No Dues Certificate after a successful settlement, or if they continue to report you as 'Defaulted' instead of 'Settled', the Ombudsman can force them to correct the record and potentially award compensation for your "loss of credit opportunity."
                                    </p>
                                </div>
                                <div className="p-8 bg-white border border-[#DEDEDE] rounded-2xl shadow-sm">
                                    <h4 className="text-xl font-bold mb-4 text-[#2E2E2E]">2. Consumer Courts</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Under the Consumer Protection Act, credit reporting is considered a service. If a bank's internal 'blacklist' prevents you from accessing services you should otherwise qualify for (after a reasonable recovery period), and this is due to technical errors or malicious reporting, you can sue the bank in a District Consumer Forum.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="settlement-to-closure" className="scroll-mt-32 mb-12 border-t border-[#DEDEDE] pt-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight uppercase underline decoration-[#1F5EFF] decoration-8 underline-offset-8">Settlement to Closure: The Ultimate Reset Button</h2>
                            <p className="mb-6 leading-relaxed text-lg">
                                If you have already settled and are feeling the pain of being 'blacklisted' by major lenders, there is a technical procedure to 'clean' your record. This is not "CIBIL Repair"—which is often a scam—but a legitimate banking process called **Settlement to Closure**.
                            </p>
                            
                            <div className="p-8 bg-blue-50 rounded-[40px] border border-blue-100 mb-12">
                                <h3 className="text-2xl font-black mb-6 text-blue-900">How the 'Reset' Works:</h3>
                                <div className="space-y-4">
                                    <p className="text-gray-700">
                                        <b>Step 1: The Request for Difference.</b> You write a formal letter to the bank's Nodal Officer expressing your desire to pay the 'balance principal' that was waived during your settlement.
                                    </p>
                                    <p className="text-gray-700">
                                        <b>Step 2: The Negotiation.</b> Often, banks will ask for the waived interest too. We recommend negotiating to pay only the principal difference.
                                    </p>
                                    <p className="text-gray-700">
                                        <b>Step 3: The Payment.</b> Once the bank agrees in writing to update your status to 'Closed' or 'Full No Dues', you make the payment.
                                    </p>
                                    <p className="text-gray-700">
                                        <b>Step 4: The Bureau Update.</b> The bank will then update CIBIL. The 'Settled' tag is removed and replaced with 'Closed'. 
                                    </p>
                                </div>
                            </div>
                            
                            <p className="mb-6 leading-relaxed">
                                Once your status is 'Closed', your CIBIL score will begin to rise much faster. More importantly, the 'blacklist' filters used by banks during the initial automated screening will no longer reject your application instantly. This is the gold standard for anyone who wants to take a major Home Loan or a high-limit Credit Card in the future.
                            </p>
                        </section>

                        <section id="future-credit" className="scroll-mt-32 mb-12 border-t border-[#DEDEDE] pt-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight uppercase">The Future of Credit: Beyond the CIBIL 'Blacklist'</h2>
                            <p className="mb-6 leading-relaxed">
                                The Indian lending landscape is undergoing a massive transformation. The days when a single 'Settled' tag on a CIBIL report could permanently end your financial life are slowly coming to an end. This is due to two major technological shifts: **Account Aggregators (AA)** and **AI-Based Underwriting**.
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-10 mb-12">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-[#1F5EFF]">1. Account Aggregators (AA)</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        The AA framework allows you to share your real-time bank statements digitally with a new lender. Instead of relying on a 5-year-old settlement record, lenders can now see that you have a steady salary or business income <em>today</em>. 
                                    </p>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        For a "blacklisted" individual, this is a game-changer. It shifts the focus from your past mistakes to your current repayment capacity.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-[#1F5EFF]">2. AI-Based Underwriting</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Modern FinTechs use Artificial Intelligence to analyze thousands of data points—not just your CIBIL score. They look at your utility bill payments, your travel patterns, and even your professional stability on platforms like LinkedIn.
                                    </p>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        If the AI sees that you have been financially responsible for the last 24 months, it may override the "Blacklist" flag and grant you credit at a customized interest rate.
                                    </p>
                                </div>
                            </div>

                            <div className="p-10 bg-[#f0f7ff] rounded-[50px] border-2 border-[#1F5EFF]/10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-6 opacity-10">
                                    <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                                </div>
                                <h3 className="text-2xl font-black mb-4 text-[#2E2E2E]">Final Verdict: Your Credit is a Garden</h3>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    Think of your credit profile not as a static record, but as a garden. A loan settlement is like a sudden drought that kills the plants. It looks terrible today, and passers-by might call it "dead" or "blacklisted."
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    But with patient watering (secured cards), weeding (cleaning errors), and new planting (consistent utility payments), the garden will bloom again. It won't happen overnight, but in 24 to 36 months, the drought will be a distant memory. The "Blacklist" only exists as long as you stop tending to your financial future.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    The most important takeaway is that **time heals all financial wounds**, provided you stop the bleeding first. Settlement is the tourniquet that stops the interest from ballooning. Once the bleeding stops, the recovery begins. Don't let the fear of a temporary 'blacklist' keep you in a cycle of permanent debt.
                                </p>
                            </div>
                        </section>

                        <section id="human-impact" className="scroll-mt-32 mb-12 border-t border-[#DEDEDE] pt-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight uppercase">The Human Impact: Why SettleLoans Cares</h2>
                            <p className="mb-6 leading-relaxed">
                                At SettleLoans, we have seen thousands of people walk through our doors with the weight of the world on their shoulders. They aren't just worried about a number on a screen; they are worried about their ability to provide for their children, their standing in their community, and their own sense of self-worth.
                            </p>
                            <div className="bg-gray-900 text-white p-12 rounded-[50px] mb-12 shadow-2xl relative overflow-hidden">
                                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1F5EFF] opacity-10 rounded-full -mb-48 -mr-48 blur-3xl"></div>
                                <h3 className="text-3xl font-black mb-8 relative z-10">Our Mission Beyond Settlements</h3>
                                <div className="grid md:grid-cols-2 gap-12 relative z-10">
                                    <div className="space-y-4">
                                        <h4 className="text-[#1F5EFF] font-bold text-xl uppercase tracking-widest">Dignity First</h4>
                                        <p className="text-sm opacity-80 leading-relaxed">
                                            We believe that every borrower deserves to be treated with dignity, regardless of their financial situation. The term 'blacklist' is designed to strip away that dignity. We are here to help you reclaim it.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-[#1F5EFF] font-bold text-xl uppercase tracking-widest">Financial Literacy</h4>
                                        <p className="text-sm opacity-80 leading-relaxed">
                                            A settlement is a second chance. Our goal is to ensure you never need a third one. We provide the tools and knowledge to manage your finances so that credit becomes a tool for growth, not a trap for survival.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-[#1F5EFF] font-bold text-xl uppercase tracking-widest">Systemic Advocacy</h4>
                                        <p className="text-sm opacity-80 leading-relaxed">
                                            We advocate for fairer credit reporting standards in India. We believe that a single mistake shouldn't follow a person for seven years, and we work toward a future where "rehabilitation" is a formal part of the banking system.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-[#1F5EFF] font-bold text-xl uppercase tracking-widest">Peace of Mind</h4>
                                        <p className="text-sm opacity-80 leading-relaxed">
                                            The greatest 'blacklist' is the one that exists in your mind—the fear that you can never move forward. Our job is to clear that blacklist by providing a clear, legal, and actionable path to financial freedom.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <p className="mb-6 leading-relaxed text-center max-w-3xl mx-auto italic opacity-70">
                                "Financial distress is a season, not a destiny. Every winter eventually turns into spring, provided you keep the faith and follow the roadmap."
                            </p>
                        </section>
                    </article>

                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#1F5EFF]/20 group">
                                <div className="bg-[#1F5EFF] p-4 text-center">
                                    <h3 className="text-lg font-black text-white uppercase">Expert Help</h3>
                                </div>
                                <div className="p-6 text-center">
                                    <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                                        Worried about your credit future? Get a debt recovery plan today.
                                    </p>
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md">
                                        Free Consultation
                                    </Link>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm">
                                <h4 className="font-black text-[#2E2E2E] mb-6 uppercase tracking-wider text-sm">Decision Tools</h4>
                                <ul className="space-y-4">
                                    <li><Link href="/can-you-get-a-loan-again-after-settling-a-previous-loan" className="text-sm text-gray-600 hover:text-[#1F5EFF] transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full"></div> Can You Loan Again?</Link></li>
                                    <li><Link href="/is-loan-settlement-a-good-option-for-borrowers" className="text-sm text-gray-600 hover:text-[#1F5EFF] transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full"></div> Is Settlement Good?</Link></li>
                                    <li><Link href="/will-banks-blacklist-you-after-loan-settlement" className="text-sm text-gray-600 hover:text-[#1F5EFF] transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full"></div> Will I be Blacklisted?</Link></li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}
