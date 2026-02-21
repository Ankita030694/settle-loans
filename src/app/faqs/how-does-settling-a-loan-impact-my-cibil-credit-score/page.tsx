import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation, faStar, faCheck } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "How Does Settling a Loan Impact My CIBIL Credit Score | 2024-25 Guide",
    description: "Deep-dive into how loan settlement affects your CIBIL score in India. Learn recovery timelines, rebuilding strategies, and the difference between closed and settled status.",
    alternates: {
        canonical: "https://settleloans.in/faqs/how-does-settling-a-loan-impact-my-cibil-credit-score",
    },
};

export default function CibilImpactPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/faqs/how-does-settling-a-loan-impact-my-cibil-credit-score#webpage",
                "url": "https://settleloans.in/faqs/how-does-settling-a-loan-impact-my-cibil-credit-score",
                "name": "How Loan Settlement Impacts Your CIBIL Score | Professional Analysis",
                "description": "A comprehensive guide on the long-term impact of debt settlement on credit scores in India, including recovery steps and CIBIL reporting standards.",
                "breadcrumb": { "@id": "https://settleloans.in/faqs/how-does-settling-a-loan-impact-my-cibil-credit-score#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/faqs/how-does-settling-a-loan-impact-my-cibil-credit-score#breadcrumb",
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
                        "name": "CIBIL Impact of Settlement",
                        "item": "https://settleloans.in/faqs/how-does-settling-a-loan-impact-my-cibil-credit-score"
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/faqs/how-does-settling-a-loan-impact-my-cibil-credit-score#article",
                "headline": "How does settling a loan impact my CIBIL credit score",
                "description": "The definitive guide to understanding loan settlement and credit scores in India. Learn how to rebuild your credit after a settlement recorded on your CIBIL report.",
                "image": "https://settleloans.in/logo/logo.svg",
                "author": {
                    "@type": "Organization",
                    "name": "SettleLoans Credit Expert Team"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "SettleLoans",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://settleloans.in/logo/logo.svg"
                    }
                },
                "datePublished": "2024-05-20",
                "dateModified": "2024-02-21"
            },
            {
                "@type": "FAQPage",
                "@id": "https://settleloans.in/faqs/how-does-settling-a-loan-impact-my-cibil-credit-score#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is the immediate drop in CIBIL score after settlement?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Upon recording a settlement status, a borrower typically sees an immediate drop of 75 to 150 points. This happens because the settlement signifies a failure to honor the original credit contract."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How long does the 'Settled' status stay on my CIBIL report?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The 'Settled' remark traditionally remains on your CIBIL report for a period of seven years from the date of final payment. While its impact reduces over time, it remains visible to lenders during this period."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is a settled loan better than a written-off loan?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, a settlement is viewed more favorably than a total write-off or permanent default. It shows that you took responsibility and reached a compromise with the lender, whereas a write-off indicates zero recovery."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I get a credit card after settling a personal loan?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Getting a regular unsecured credit card is difficult for at least 2 to 3 years after settlement. However, you can easily get a 'Secured Credit Card' against a Fixed Deposit to begin rebuilding your score."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the difference between 'Closed' and 'Settled' status?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "'Closed' means you paid the full principal, interest, and charges as per the agreement. 'Settled' means the bank agreed to accept a lower amount and waived some part of your debt."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I remove the 'Settled' mark before seven years?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The only way to change 'Settled' to 'Closed' is to later pay the full waived amount back to the bank and obtain a Closure Certificate. Once you pay the balance, the bank updates CIBIL to reflect the loan as fully closed."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Will a loan settlement affect my job or travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No, a loan settlement is a civil matter and has zero impact on your ability to travel abroad or your current job. It only affects your ability to borrow money from banks in the future."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How soon can the CIBIL score start improving after settlement?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "If you maintain perfect discipline with new small credit lines like secured cards, your score can start showing an upward trend within 12 to 18 months of the settlement date."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do NBFCs look at settlements differently than private banks?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Generally, all regulated entities follow the same CIBIL reporting standards. New-age NBFCs might be slightly more flexible if your recent income is high, but the negative mark remains a major hurdle for all."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What happens to the CIBIL score if I settle multiple loans?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Multiple settlements compound the damage to your score and signal a pattern of credit failure. It is highly recommended to settle one major debt at a time if possible or work with professionals to manage the reporting impact."
                        }
                    }
                ]
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/faqs/how-does-settling-a-loan-impact-my-cibil-credit-score#service",
                "name": "CIBIL Recovery & Settlement Consulting",
                "description": "Expert advice on managing loan settlements while minimizing original CIBIL damage and creating a custom roadmap for score rebuilding.",
                "brand": {
                    "@type": "Brand",
                    "name": "SettleLoans"
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.95",
                    "reviewCount": "1840"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Amit Sharma" },
                        "datePublished": "2024-11-20",
                        "reviewBody": "The team at SettleLoans guided me through the entire OTS process with my private bank. They explained exactly what would happen to my CIBIL and helped me plan my recovery.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Priya Varma" },
                        "datePublished": "2024-12-15",
                        "reviewBody": "Highly recommend for anyone worried about their credit score. They negotiated a settlement that I could afford and gave me a clear path to fix my score later.",
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
                            Credit Mastery Series
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                            How Does Settling a Loan Impact <br className="hidden md:block" /> My CIBIL Credit Score
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.2] font-normal">
                            Unmasking the truth about credit settlements. Learn how a single "Settled" mark affects your borrowing power for 7 years and how to build a 750+ score again.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Repair Your Credit
                            </Link>
                            <Link href="#content-start" className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-[#2E2E2E] font-bold py-4 px-10 rounded-[10px] border border-[#DEDEDE] hover:bg-gray-50 transition-all duration-300 text-lg">
                                Explore Recovery Steps
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
                                    CIBIL Impact Analysis
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
                                { id: "intro", title: "The CIBIL Reality" },
                                { id: "score-mechanics", title: "Impact Mechanics" },
                                { id: "reporting-standards", title: "CIBIL Reporting Standards" },
                                { id: "closed-vs-settled", title: "Closed vs. Settled" },
                                { id: "seven-year-rule", title: "The 7-Year Rule" },
                                { id: "future-lending", title: "Future Loan Eligibility" },
                                { id: "rebuilding-phase-1", title: "Phase 1: Stabilization" },
                                { id: "rebuilding-phase-2", title: "Phase 2: New Credit Lines" },
                                { id: "rebuilding-phase-3", title: "Phase 3: Long-term Growth" },
                                { id: "ots-and-cibil", title: "OTS & CIBIL Impact" },
                                { id: "legal-aspects", title: "Legal & Credit Rights" },
                                { id: "expert-strategies", title: "Expert Recovery Tips" },
                                { id: "faqs", title: "CIBIL Recovery FAQs" },
                                { id: "success-stories", title: "Recovery Success Stories" }
                            ]}
                        />
                    </aside>

                    {/* Middle Column: Main Content */}
                    <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">

                        <section id="intro" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                The Harsh Reality of Loan Settlement and Your CIBIL Score
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Understanding how does settling a loan impact my CIBIL credit score is the most critical question any borrower must answer before signing a One Time Settlement letter. In the Indian credit landscape, your CIBIL score is your financial resume. When you agree to a settlement, you are essentially telling the credit world that you were unable to meet your full contractual obligations. This revelation has immediate and far reaching consequences for your financial future.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                While a settlement provides immediate relief from the crushing pressure of monthly EMIs and aggressive recovery calls, it comes at a high price. The mark "Settled" on a credit report is often viewed by traditional banks as a sign of high risk. It suggests that while you did pay back some money, the bank had to take a loss on your account. This guide explores the depth of that impact and, more importantly, provides a blueprint for how you can navigate the years following a settlement.
                            </p>
                            <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-blue-500 mb-8">
                                <h3 className="text-lg font-bold text-blue-900 mb-4 uppercase tracking-wide">The Fundamental Distinction</h3>
                                <p className="text-blue-800">
                                    There is a massive difference between a loan that is "Closed" and one that is "Settled". A closed loan is a badge of honor; a settled loan is a mark of compromise. Both stop the recovery process, but only one preserves your ability to borrow money at low interest rates in the future.
                                </p>
                            </div>
                            <p className="text-lg leading-relaxed mb-6">
                                Many borrowers are led to believe that once they pay the settlement amount, their credit problems disappear. This is a dangerous myth. The reality is that the settlement is the beginning of a long, seven year journey toward credit rehabilitation. By understanding the mechanics of how CIBIL operates, you can make informed decisions today that will protect your interests tomorrow.
                            </p>
                        </section>

                        <section id="score-mechanics" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Mechanics of the Score Drop: Why 150 Points?
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                When a bank tells CIBIL that an account has been settled, the credit scoring algorithm triggers a significant negative adjustment. For most borrowers, this results in an immediate drop of 75 to 150 points. If your score was 750 (Excellent), it could instantly crash to 600 or below.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                    <h4 className="font-bold text-lg mb-3 text-gray-900">Contractual Failure</h4>
                                    <p className="text-gray-700 text-sm">CIBIL tracks your ability to follow contracts. A settlement is a formal admission that you broke the original contract. The algorithm penalizes this heavily as it predicts future non-payment.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                    <h4 className="font-bold text-xl mb-3 text-gray-900">Lender Loss Disclosure</h4>
                                    <p className="text-gray-700 text-sm">When a bank waives interest or principal, they report the 'Balance Amount' as written off. This 'amount written off' field is a massive red flag for any new lender's automated systems.</p>
                                </div>
                            </div>
                            <p className="text-lg leading-relaxed mb-6">
                                The drop is not just about the settlement itself but also about the months of delinquency that led up to it. Most settlements occur after 180 days of default. By that time, your score has already been bleeding due to repeated missed payment reports. The final settlement entry is simply the "closing mark" on a period of poor credit performance.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                It is also worth noting that the impact is more severe for unsecured debts like personal loans and credit cards. Since there was no collateral for the bank to sell, the loss is directly borne by the institution. Lenders view this specific type of "unsecured default" much more harshly than a settled vehicle loan where the car was at least repossessed.
                            </p>
                        </section>

                        <section id="reporting-standards" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                CIBIL Reporting Standards: The 'Nitty-Gritty'
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                To truly grasp how does settling a loan impact my CIBIL credit score, you must understand the specific fields in your credit report. CIBIL does not just show a score; it shows a detailed history of every rupee you owe.
                            </p>
                            <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                                <h3 className="text-lg font-bold mb-4">Key Fields to Monitor:</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="text-[var(--color-primary)] font-bold mr-3">01.</span>
                                        <p className="text-gray-800"><strong>Account Status:</strong> This will change from 'Active' or 'Delinquent' to 'Settled'. This is the permanent marker that signals you paid less than you owed.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[var(--color-primary)] font-bold mr-3">02.</span>
                                        <p className="text-gray-800"><strong>Amount Written Off:</strong> This is the most dangerous field. It shows the exact amount of the discount the bank gave you. If you owed 5 lakhs and paid 2 lakhs, this field shows 3 lakhs.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[var(--color-primary)] font-bold mr-3">03.</span>
                                        <p className="text-gray-800"><strong>Date of Last Payment:</strong> This date determines when your 7 year recovery clock begins. Ensure the bank reports the correct date of your settlement payment.</p>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-lg leading-relaxed mb-6">
                                Banks are mandated by the RBI to update credit bureaus once every 30 to 45 days. Many borrowers face the issue of "Hung Accounts" where a bank takes the money but forgets to update the status to CIBIL. This leaves your account looking like it is in permanent default. Professional settlement services verify these updates to ensure that your financial sacrifice actually reflects on your report.
                            </p>
                        </section>

                        <section id="closed-vs-settled" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Closed vs. Settled: The Million Rupee Difference
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                We cannot emphasize this enough: if you have the means, always aim for a full closure. A 'Closed' status on your CIBIL report acts like a booster. It proves that even in hard times, you fulfilled your word.
                            </p>
                            <div className="relative overflow-hidden bg-white border border-[var(--color-border)] rounded-2xl mb-8">
                                <div className="flex flex-col md:flex-row">
                                    <div className="md:w-1/3 bg-emerald-600 text-white p-8 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-3xl font-bold mb-2">CLOSED</div>
                                            <div className="text-sm font-medium uppercase tracking-widest text-emerald-100">The Gold Standard</div>
                                        </div>
                                    </div>
                                    <div className="md:w-2/3 p-8">
                                        <h4 className="text-xl font-bold text-gray-900 mb-4">Positive Reinforcement</h4>
                                        <p className="text-gray-700 leading-relaxed text-sm">
                                            A closed status means the bank received every penny. Your score recovers almost instantly after the reporting cycle. You become eligible for premium credit cards and home loans at the lowest possible rates.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative overflow-hidden bg-white border border-[var(--color-border)] rounded-2xl mb-8">
                                <div className="flex flex-col md:flex-row">
                                    <div className="md:w-1/3 bg-red-600 text-white p-8 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-3xl font-bold mb-2">SETTLED</div>
                                            <div className="text-sm font-medium uppercase tracking-widest text-red-100">The Compromise</div>
                                        </div>
                                    </div>
                                    <div className="md:w-2/3 p-8">
                                        <h4 className="text-xl font-bold text-gray-900 mb-4">Risk Warning</h4>
                                        <p className="text-gray-700 leading-relaxed text-sm">
                                            A settled status indicates a loss for the lender. It freezes your credit growth for years. While it is better than a default, it is a significant step back in your financial journey.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-lg leading-relaxed mb-6">
                                Sometimes lenders use the term "Post Write-Off Settlement". This is even more damaging. It means the bank already declared the money as a loss and only accepted your payment as a recovery of a failed asset. Identifying these nuances early in the negotiation can save you years of credit misery.
                            </p>
                        </section>

                        <section id="seven-year-rule" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                The 7-Year Rule: Understanding the Timeline
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Credit reporting agencies in India, including CIBIL, Equifax, and Experian, follow a general rule: negative information stays on the report for seven years. This is a long time in a human life. It means that a mistake you make today at age 25 will still be visible when you are 32 and perhaps trying to buy your first home.
                            </p>
                            <div className="bg-orange-50 p-8 rounded-2xl border border-orange-200 mb-8">
                                <h3 className="text-lg font-bold text-orange-950 mb-4 italic">Important Caveat: Diminishing Impact</h3>
                                <p className="text-orange-900 leading-relaxed font-medium">
                                    While the mark stays for 7 years, its impact is not constant. A 5 year old settlement is much less damaging than a 5 month old one. As you build a fresh history of on-time payments, the CIBIL algorithm starts prioritizing your 'recent' behavior over your 'toxic' past.
                                </p>
                            </div>
                            <p className="text-lg leading-relaxed mb-6">
                                This 7 year timeline is why many financial experts recommend a "CIBIL Cleanup" or "Settlement Reversal" after a few years. If your income has improved and you need a major home loan, you can go back to the original bank and pay the balance amount (the amount they wrote off). The bank will then issue a No Dues Certificate and update the status from 'Settled' to 'Closed'. This is the only legitimate "shortcut" to removing the negative mark before the 7 year period ends.
                            </p>
                        </section>

                        <section id="future-lending" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Future Loan Eligibility: What Can You Get?
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                If you have a settled loan, you are not permanently banned from borrowing, but you are redirected to different types of credit. Traditional large banks like HDFC, ICICI, or SBI have automated filters. If their system sees 'Settled', the application is often rejected within seconds.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { t: "Unsecured Personal Loans", d: "Almost impossible for 36 months. Even then, you will be offered high interest rates (24%+) from small NBFCs." },
                                    { t: "Credit Cards", d: "Standard cards will be rejected. You must use 'Secured Cards' backed by your own cash deposits." },
                                    { t: "Home Loans", d: "Major hurdle. You will need a co-applicant with a clean credit history or wait for 5+ years of perfect behavior post settlement." },
                                    { t: "Gold Loans", d: "Eligible instantly. Since you are providing gold as collateral, lenders do not care about your CIBIL score." },
                                    { t: "Two-Wheeler Loans", d: "Possible after 12-24 months if you provide a higher down payment (say 40% instead of 10%)." }
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

                        <section id="rebuilding-phase-1" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Rebuilding Phase 1: The Stabilization Period (0-12 Months)
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The first year after a settlement is about proving stability. Your goal is not to get new credit line but to ensure your bank statements look clean. Lenders look at more than just the score; they look at your financial discipline.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                During this year, ensure you have zero bounces in your bank account. Even a single 500 rupee bounce for an insurance premium or utility bill can be fatal for a recovering CIBIL report. Keep a consistent Average Monthly Balance (AMB). If a bank sees that you have 50,000 rupees sitting in your account every month, they start believing that your hardship is truly over.
                            </p>
                            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-8">
                                <h4 className="font-bold text-lg mb-3">The 'Dispute' Check</h4>
                                <p className="text-gray-700 text-sm">Wait for 60 days after your settlement payment. Download your CIBIL report. If the bank has not updated the status, do not wait. File a formal dispute on the CIBIL website and send the settlement letter and payment proof to the bank's Nodal Officer. This is the only way to ensure your 'recovery clock' starts ticking.</p>
                            </div>
                        </section>

                        <section id="rebuilding-phase-2" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Rebuilding Phase 2: Active Recovery (12-36 Months)
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Once you have a year of stability, you can start 'active growth'. This requires creating new, positive credit entries to dilute the negative impact of the old settlement.
                            </p>
                            <div className="bg-[var(--color-section-light)] p-8 rounded-2xl border border-[var(--color-border)] mb-8">
                                <h3 className="text-xl font-bold text-[var(--color-text-hero)] mb-6">Strategy: The Secured Card Loop</h3>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="p-4 bg-white rounded-xl shadow-sm">
                                        <h5 className="font-bold mb-2">How it Works</h5>
                                        <p className="text-xs text-gray-600">Open a Fixed Deposit of ₹20,000. The bank gives you a credit card with an ₹18,000 limit. This is 100% guaranteed, even with a 500 CIBIL score.</p>
                                    </div>
                                    <div className="p-4 bg-white rounded-xl shadow-sm">
                                        <h5 className="font-bold mb-2">The Golden Rule</h5>
                                        <p className="text-xs text-gray-600">Use only ₹2,000 per month (10% utilization). Pay it back 2 days before the due date. This generates a 'Paid on Time' report every month.</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-lg leading-relaxed mb-6">
                                After 12 months of using a secured card, you can try for a small "Consumer Durable" loan. Go to a store like Croma or Reliance Digital and try for a 0% EMI loan for a phone or appliance. These lenders have higher risk tolerance and can provide your first 'unsecured' positive entry since your settlement.
                            </p>
                        </section>

                        <section id="rebuilding-phase-3" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Rebuilding Phase 3: The Long Road (3-7 Years)
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                By year three, if you have followed the stabilization and active recovery steps, your CIBIL score should be back in the 700s. However, the 'Settled' remark is still there. This is the time to start looking at 'Asset-Backed' credit to further strengthen your profile.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Taking a car loan or a small home improvement loan during this period is highly effective. Since these have collateral, the bank is more willing to overlook a 3 or 4 year old settlement mark if your current income is high and your recent history is flawless. Each installment you pay for a vehicle loan adds massive weight to your positive credit score and helps you move toward the ultimate goal of a 750+ score despite the past compromise.
                            </p>
                        </section>

                        <section id="ots-and-cibil" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                OTS Schemes: Are They Different?
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Many public sector banks like SBI or PNB launch periodic "One Time Settlement" (OTS) schemes. Borrowers often ask if these schemes have a different impact on CIBIL. The answer is generally no. Whether you settle through a mass-OTS scheme or an individual negotiation, the reporting to CIBIL remains the same: 'Settled'.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                However, mass-OTS schemes are often more standardized and have less human error in reporting. They are formal board-approved policies, which means the updates to credit bureaus are usually more systematic. If you are choosing between a custom negotiation and a formal bank-wide OTS scheme, the OTS scheme is often safer for your future legal and credit records.
                            </p>
                        </section>

                        <section id="legal-aspects" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Your Legal Rights Regarding Credit Reporting
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The Credit Information Companies (Regulation) Act, 2005 (CIC Act) provides you with specific rights that many banks try to ignore. Knowing these can help you manage how does settling a loan impact my CIBIL credit score effectively.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                                    <h5 className="font-bold text-gray-800 mb-2">Right to Accuracy</h5>
                                    <p className="text-xs text-gray-600">Banks must report accurate data. if you paid on June 15th, they cannot report 'Date of Settlement' as December. This matters for your 7 year timeline.</p>
                                </div>
                                <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                                    <h5 className="font-bold text-gray-800 mb-2">Right to Notification</h5>
                                    <p className="text-xs text-gray-600">Banks should ideally notify you before reporting negative data, although this is rarely followed in practice for settlements.</p>
                                </div>
                                <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                                    <h5 className="font-bold text-gray-800 mb-2">Right to Dispute</h5>
                                    <p className="text-xs text-gray-600">CIBIL must investigate any dispute you raise within 30 days. If the bank does not verify the data, CIBIL must remove the entry.</p>
                                </div>
                                <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                                    <h5 className="font-bold text-gray-800 mb-2">Fair Reporting</h5>
                                    <p className="text-xs text-gray-600">Lenders cannot use the threat of CIBIL reporting as a tool for harassment. It is a reporting duty, not a punishment mechanism.</p>
                                </div>
                            </div>
                        </section>

                        <section id="expert-strategies" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Expert Recovery Strategies: Pro-Tips
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Beyond the basics of secured credit cards, professional credit repair experts use advanced tactics to help borrowers. One such tactic is 'Account Aggregation'. By using the new Account Aggregator framework, you can show lenders your real-time cash flow and investments (like Mutual Funds or LIC policies) which might not be reflected in your CIBIL score.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Another pro-tip is to time your settlement for the end of a credit cycle. If you settle on the 1st of the month but the bank reports on the 30th, you have a whole month to prepare for the score crash. Use this month to secure any small essential things (like a post-paid mobile connection or a rent agreement) before your score drops.
                            </p>
                        </section>

                        <section id="faqs" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">CIBIL Recovery FAQs</h2>
                            <div className="space-y-4 not-prose">
                                {
                                    [
                                        {
                                            q: "What is the immediate drop in CIBIL score after settlement?",
                                            a: "Upon recording a settlement status, a borrower typically sees an immediate drop of 75 to 150 points. This happens because the settlement signifies a failure to honor the original credit contract."
                                        },
                                        {
                                            q: "How long does the 'Settled' status stay on my CIBIL report?",
                                            a: "The 'Settled' remark traditionally remains on your CIBIL report for a period of seven years from the date of final payment. While its impact reduces over time, it remains visible to lenders during this period."
                                        },
                                        {
                                            q: "Is a settled loan better than a written-off loan?",
                                            a: "Yes, a settlement is viewed more favorably than a total write-off or permanent default. It shows that you took responsibility and reached a compromise with the lender, whereas a write-off indicates zero recovery."
                                        },
                                        {
                                            q: "Can I get a credit card after settling a personal loan?",
                                            a: "Getting a regular unsecured credit card is difficult for at least 2 to 3 years after settlement. However, you can easily get a 'Secured Credit Card' against a Fixed Deposit to begin rebuilding your score."
                                        },
                                        {
                                            q: "What is the difference between 'Closed' and 'Settled' status?",
                                            a: "'Closed' means you paid the full principal, interest, and charges as per the agreement. 'Settled' means the bank agreed to accept a lower amount and waived some part of your debt."
                                        },
                                        {
                                            q: "Can I remove the 'Settled' mark before seven years?",
                                            a: "The only way to change 'Settled' to 'Closed' is to later pay the full waived amount back to the bank and obtain a Closure Certificate. Once you pay the balance, the bank updates CIBIL to reflect the loan as fully closed."
                                        },
                                        {
                                            q: "Will a loan settlement affect my job or travel?",
                                            a: "No, a loan settlement is a civil matter and has zero impact on your ability to travel abroad or your current job. It only affects your ability to borrow money from banks in the future."
                                        },
                                        {
                                            q: "How soon can the CIBIL score start improving after settlement?",
                                            a: "If you maintain perfect discipline with new small credit lines like secured cards, your score can start showing an upward trend within 12 to 18 months of the settlement date."
                                        },
                                        {
                                            q: "Do NBFCs look at settlements differently than private banks?",
                                            a: "Generally, all regulated entities follow the same CIBIL reporting standards. New-age NBFCs might be slightly more flexible if your recent income is high, but the negative mark remains a major hurdle for all."
                                        },
                                        {
                                            q: "What happens to the CIBIL score if I settle multiple loans?",
                                            a: "Multiple settlements compound the damage to your score and signal a pattern of credit failure. It is highly recommended to settle one major debt at a time if possible or work with professionals to manage the reporting impact."
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

                        <h2 id="success-stories" className="scroll-mt-32 text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">CIBIL Recovery Success Stories</h2>
                        <div className="grid md:grid-cols-2 gap-6 not-prose mb-16">
                            {[
                                {
                                    name: "Amit Sharma",
                                    loc: "Gurugram",
                                    loan: "Settlement Impact: -120 pts",
                                    res: "Recovered: +145 pts (24 months)",
                                    story: "The team at SettleLoans guided me through the entire OTS process. They explained exactly what would happen to my CIBIL and helped me plan my recovery through secured cards."
                                },
                                {
                                    name: "Priya Varma",
                                    loc: "Pune",
                                    loan: "Settled Cards: 3 Accounts",
                                    res: "Current Score: 742",
                                    story: "I was terrified of my score crashing. SettleLoans negotiated for me and then gave me a 3-year roadmap. Today, I just got my first car loan after three years of settlement."
                                },
                                {
                                    name: "Karan Johar",
                                    loc: "Chandigarh",
                                    loan: "NPA for 2 Years",
                                    res: "Cleaned to 'Closed' in 2024",
                                    story: "After 4 years of being 'Settled', SettleLoans helped me negotiate a final payment of the balance to the bank. My CIBIL status is now 'Closed' and I'm applying for a home loan."
                                },
                                {
                                    name: "Sneha Reddy",
                                    loc: "Hyderabad",
                                    loan: "Score: 540",
                                    res: "Score: 680 (12 months post OTS)",
                                    story: "The CIBIL Audit service they provided was key. The bank hadn't updated my records for 5 months after I paid. SettleLoans forced the update through legal notice."
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
                                            <FontAwesomeIcon icon={faTriangleExclamation} className="mr-2 w-3 h-3" />
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
                            <p>Disclaimer: Loan settlement results in a 'Settled' status on credit reports which negatively impacts credit scores. The information provided is based on general credit reporting practices in India and does not guarantee specific score outcomes. Credit rebuilding is a long-term process that depends on individual financial behavior.</p>
                        </div>

                        {/* Bottom CTA */}
                        <section className="bg-[#1F5EFF] rounded-[10px] p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter text-[#DEDEDE]">Fix Your Financial Future?</h2>
                                <p className="text-lg md:text-2xl opacity-90 max-w-2xl mx-auto mb-10 leading-tight font-normal text-[#DEDEDE]">
                                    Don't let a "Settled" mark haunt you for seven years. Get our expert CIBIL recovery roadmap today.
                                </p>
                                <Link href="/contact" className="inline-block bg-white text-[#1F5EFF] font-bold py-5 px-12 rounded-[10px] text-xl hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-1">
                                    Get My Free Credit Plan
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
                                    <h3 className="text-lg font-black text-white uppercase tracking-wider">Credit Rescue</h3>
                                </div>
                                <div className="p-8 text-center">
                                    <p className="mb-8 text-sm opacity-80 leading-relaxed font-normal">
                                        Navigate the settlement minefield with experts who protect your CIBIL score.
                                    </p>
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-[12px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg text-lg">
                                        Speak to Expert
                                    </Link>
                                </div>
                            </div>

                            {/* Related Pages Container */}
                            <div className="bg-white p-6 rounded-2xl border border-[var(--color-border)] shadow-sm">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-4 border-b border-gray-100 pb-2">Related Insight</h3>
                                <ul className="space-y-4 text-sm font-medium">
                                    <li>
                                        <Link href="/faqs/steps-to-apply-for-a-loan-settlement-through-a-financial-service-provider" className="group flex items-center text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-[var(--color-primary)] transition-colors"></span>
                                            Settlement Steps
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faqs/what-documents-do-i-need-to-prepare-for-a-loan-settlement-proposal" className="group flex items-center text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-[var(--color-primary)] transition-colors"></span>
                                            Document Checklist
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faqs/loan-settlement-fees" className="group flex items-center text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-[var(--color-primary)] transition-colors"></span>
                                            Settlement Costs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faqs/how-to-negotiate-personal-loan-settlement" className="group flex items-center text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-[var(--color-primary)] transition-colors"></span>
                                            Negotiation Skills
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
