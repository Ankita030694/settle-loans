import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import ReviewSnippets from "@/components/ReviewSnippets";

export const metadata: Metadata = {
    title: "Loan Agreement Drafting & Review India | Essential Clauses & Checklists",
    description: "Expert legal guide on drafting and reviewing loan agreements in India. Learn about essential clauses, RBI guidelines, hidden charges, and borrower protection.",
    alternates: {
        canonical: "https://settleloans.in/loan-agreement-drafting-review",
    },
};

export default function LoanAgreementDraftingPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/loan-agreement-drafting-review#webpage",
                "url": "https://settleloans.in/loan-agreement-drafting-review",
                "name": "Loan Agreement Drafting & Review India | Essential Clauses & Checklists",
                "description": "Comprehensive guide for drafting and reviewing legally binding loan agreements in India, ensuring transparency and RBI compliance.",
                "breadcrumb": { "@id": "https://settleloans.in/loan-agreement-drafting-review#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/loan-agreement-drafting-review#breadcrumb",
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
                        "name": "Loan Agreement Drafting",
                        "item": "https://settleloans.in/loan-agreement-drafting-review"
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/loan-agreement-drafting-review#article",
                "headline": "Drafting a Bulletproof Loan Agreement: The Complete Legal Checklist for 2024",
                "description": "Navigate the complexities of Indian financial contracts with our masterclass on loan agreement drafting, review strategies, and essential legal clauses.",
                "author": {
                    "@type": "Organization",
                    "name": "SettleLoans Legal Unit"
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
                "mainEntityOfPage": { "@id": "https://settleloans.in/loan-agreement-drafting-review#webpage" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/loan-agreement-drafting-review#product",
                "name": "Loan Agreement Drafting & Review Service",
                "description": "Professional legal assistance in drafting and vetting loan documents to protect borrower interests and ensure regulatory compliance.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "2150"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Arjun Mehta" },
                        "datePublished": "2024-02-15",
                        "reviewBody": "The team identified three hidden penalty clauses in my commercial loan agreement that would have cost me lakhs. Highly recommend their review service.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Sita Ram" },
                        "datePublished": "2024-01-20",
                        "reviewBody": "Professional and thorough. They made sure the repayment terms were flexible as per my business cycles.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://settleloans.in/loan-agreement-drafting-review#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Which Indian laws govern loan agreements?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Loan agreements in India are primarily governed by the Indian Contract Act, 1872. Depending on the loan type, other laws like the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act and RBI Master Directions also apply."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why is a Definitions clause critical in a loan agreement?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The Definitions clause ensures that technical terms like 'Event of Default', 'Maturity Date', and 'Interest Period' have a specific, agreed-upon meaning, preventing future legal ambiguity and disputes."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are the common hidden charges in loan contracts?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Hidden charges often include processing fees disguised as 'administration costs', high penal interest on late payments, and excessive foreclosure or prepayment penalties that are not clearly disclosed upfront."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does every loan agreement require stamp duty?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, to be legally admissible in court, a loan agreement must be executed on stamp paper of appropriate value as per the State Stamp Act where the agreement is signed."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can a borrower negotiate the clauses in a bank loan agreement?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "While many bank agreements are standardized (Adhesion Contracts), high-value borrowers and businesses can often negotiate specific covenants, interest calculation methods, and repayment flexibility."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the 'Events of Default' clause?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "This clause lists the specific circumstances—such as missed payments, bankruptcy, or breach of covenants—under which the lender can demand immediate repayment of the entire loan amount."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the legal importance of the No Dues Certificate?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The No Dues Certificate (NDC) is the final legal proof that the loan is fully closed and the borrower has no further financial or legal liability toward the lender."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How is interest typically calculated in professional loan agreements?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Interest is usually calculated either on a 'Reducing Balance' basis, where you pay interest only on the outstanding principal, or a 'Flat Rate' basis, which is generally more expensive over time."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What happens if a loan agreement is not registered?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Mandatory registration varies by state and loan type. However, an unregistered document may not be admissible as evidence in court for certain transactions involving immovable property used as collateral."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are digital loan agreements legally valid in India?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, under the Information Technology Act, 2000, digital contracts and e-signatures are legally valid and binding, provided they meet the specified security and verification standards."
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
                <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden text-center">
                    <div className="max-w-5xl mx-auto relative z-10">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
                            Legal Mastery 2024
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight uppercase">
                            Loan Agreement <br /> <span className="text-[#1F5EFF]">Drafting & Review</span>
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
                            Precision in every clause. Whether you are a business owner or an individual borrower, discover the expert strategies to draft, review, and negotiate loan contracts that protect your financial future.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Get Professional Review
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Breadcrumb */}
                <div className="w-full bg-white border-b border-[#DEDEDE] sticky top-0 z-40">
                    <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 text-[10px] font-black uppercase tracking-widest text-[#747474]">
                        <nav aria-label="Breadcrumb">
                            <ol className="flex items-center space-x-3 overflow-x-auto whitespace-nowrap scrollbar-hide">
                                <li><Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link></li>
                                <li><svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg></li>
                                <li className="font-bold text-[#2E2E2E]" aria-current="page">Loan Agreement Drafting & Review</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">

                    {/* Left Column: TOC */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-32">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#1F5EFF] mb-8 pb-4 border-b-2 border-blue-50">Drafting Roadmap</h3>
                            <TableOfContents
                                items={[
                                    { id: "foundations-loan-agreements", title: "Legal Foundations" },
                                    { id: "essential-clauses-checklist", title: "Essential Clauses" },
                                    { id: "interest-calculation-methods", title: "Interest & Charges" },
                                    { id: "default-clauses-protection", title: "Default Protocols" },
                                    { id: "collateral-security-veting", title: "Security & Collateral" },
                                    { id: "rbi-guidelines-transparency", title: "RBI Guidelines" },
                                    { id: "review-checklist-borrowers", title: "Review Masterclass" },
                                    { id: "hidden-charges-alert", title: "Hidden Charges" },
                                    { id: "dispute-resolution-mechanisms", title: "Disputes & Arbitration" },
                                    { id: "case-victories", title: "Success Stories" },
                                    { id: "faqs", title: "Drafting FAQs" }
                                ]}
                            />
                        </div>
                    </aside>

                    {/* Middle Column: Content */}
                    <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[#2E2E2E]">

                        <section id="foundations-loan-agreements" className="scroll-mt-32 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                            <h2 className="text-4xl md:text-5xl font-black text-[#2E2E2E] mb-10 leading-[1.1] uppercase tracking-tighter">
                                The Anatomy of a <span className="text-[#1F5EFF]">Bulletproof Loan Agreement</span>
                            </h2>
                            <p className="text-xl font-medium mb-8 leading-relaxed">
                                A loan agreement is more than just a piece of paper; it is a legally binding blueprint of your financial relationship with a lender. In India, where financial litigation can drag on for years, the strength of your loan contract is your primary shield. Whether you are securing a venture capital influx for a startup or a home loan for your family, understanding the legal foundations of these documents is non-negotiable.
                            </p>
                            <p className="mb-8 leading-relaxed">
                                Governed by the <strong>Indian Contract Act, 1872</strong>, a valid loan agreement must satisfy the core elements of a contract: offer, acceptance, consideration, and the lawful intent of both parties. For financial institutions, this framework is further layered with <strong>RBI Master Directions</strong>, which mandate transparency and standardized conduct. A poorly drafted agreement is an invitation to harassment; a well-vetted one is a guarantee of peace of mind.
                            </p>
                            <div className="bg-blue-50 p-10 rounded-[32px] border-2 border-blue-100 my-12 shadow-sm">
                                <h3 className="text-2xl font-black text-blue-900 mb-6 uppercase tracking-wider">The "Non-Negotiable" Rule</h3>
                                <p className="text-lg text-blue-800 leading-relaxed font-medium">
                                    In Indian law, once you sign a loan agreement, you are presumed to have read and understood every single word. The plea of "I didn't know this was in the contract" rarely holds water in a court of law. This is why the 'Drafting' and 'Review' stages are significantly more important than the 'Execution' stage.
                                </p>
                            </div>
                        </section>

                        <section id="essential-clauses-checklist" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-widest border-b-8 border-gray-100 pb-4">
                                The Checklist: 15 Essential Clauses Every Borrower Must Know
                            </h2>
                            <p className="mb-8 font-medium">
                                A professional loan agreement should be as granular as possible. If a term is vague, it will almost certainly be interpreted in favor of the lender during a dispute. Here are the 15 critical clauses that form the skeleton of a robust loan contract:
                            </p>
                            <div className="space-y-6">
                                <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                                    <h4 className="text-xl font-black text-[#1F5EFF] mb-3 uppercase tracking-tight">1. Precise Definition of Parties</h4>
                                    <p className="leading-relaxed">Correct legal names, registered addresses, and identification numbers (PAN/CIN) for both the lender and borrower to ensure the agreement is enforceable against the right legal entities.</p>
                                </div>
                                <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                                    <h4 className="text-xl font-black text-[#1F5EFF] mb-3 uppercase tracking-tight">2. Disbursement Conditions</h4>
                                    <p className="leading-relaxed">Specifying exactly when and how the money will be released. This often includes 'Conditions Precedent' like the submission of title deeds or the execution of guarantees.</p>
                                </div>
                                <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                                    <h4 className="text-xl font-black text-[#1F5EFF] mb-3 uppercase tracking-tight">3. Interest and Amortization</h4>
                                    <p className="leading-relaxed">Clear notation of the interest rate, whether it is fixed or floating (linked to MCLR or Repo Rate), and the exact amortization schedule (EMI breakdown).</p>
                                </div>
                                <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                                    <h4 className="text-xl font-black text-[#1F5EFF] mb-3 uppercase tracking-tight">4. Prepayment and Foreclosure</h4>
                                    <p className="leading-relaxed">Defining your right to pay off the loan early and the specific charges or lack thereof (based on RBI guidelines) for doing so.</p>
                                </div>
                                <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                                    <h4 className="text-xl font-black text-[#1F5EFF] mb-3 uppercase tracking-tight">5. Events of Default</h4>
                                    <p className="leading-relaxed">A comprehensive list of situations that allow the lender to trigger recovery. This includes non-repayment, bankruptcy, and 'Material Adverse Change'.</p>
                                </div>
                            </div>
                        </section>

                        <section id="interest-calculation-methods" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase italic border-l-8 border-[#1F5EFF] pl-6">
                                The Interest Trap: Reducing Balance vs Flat Rate
                            </h2>
                            <p className="mb-8 leading-relaxed">
                                One of the most common points of failure in loan agreement reviews is the method of interest calculation. In India, lenders can use various mathematical models that look similar on surface but differ vastly in actual cost.
                            </p>
                            <p className="mb-8">
                                <strong>The Reducing Balance Method</strong> is the gold standard for borrowers. Here, interest is calculated only on the remaining principal after each month's repayment. As the principal drops, so does the interest component of your EMI. Conversely, the <strong>Flat Rate Method</strong> calculates interest on the original loan amount for the entire tenure. This means you are paying interest on money you have already paid back—effectively doubling your actual interest rate.
                            </p>
                            <div className="bg-[#2E2E2E] p-10 rounded-[40px] text-white shadow-2xl relative overflow-hidden my-12">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#1F5EFF]/20 rounded-full -mr-32 -mt-32 blur-[80px]"></div>
                                <h3 className="text-2xl font-black mb-6 relative z-10 text-blue-400 uppercase italic">Financial Intelligence Alert</h3>
                                <p className="text-lg opacity-80 leading-relaxed relative z-10 font-medium">
                                    Always insist on the 'Annual Percentage Rate' (APR) being listed in the agreement. The APR includes the interest rate plus all fees (processing, documentation, etc.). It is the only true way to compare the cost of two different loan offers. If a lender refuses to provide an APR breakdown, their agreement is likely hiding significant costs.
                                </p>
                            </div>
                        </section>

                        <section id="default-clauses-protection" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                                Default Protocols: Building a Grace Period Buffer
                            </h2>
                            <p className="mb-8 text-lg">
                                Life is unpredictable. A business cycle can falter, or a health emergency can arise. A well-vetted loan agreement accounts for these realities through 'Grace Period' and 'Notice' clauses.
                            </p>
                            <p className="mb-8">
                                Most standardized bank agreements contain an 'Automatic Default' clause that triggers legal action the second a payment is missed. During a professional review, we advocate for a <strong>7 to 15-day cure period</strong>. This allows the borrower to rectify a genuine oversight without triggering penalties, CIBIL reporting, or aggressive recovery. Furthermore, we ensure that the 'Cross-Default' clause - which says one missed payment elsewhere makes you a defaulter for this loan too - is either removed or significantly limited in scope.
                            </p>
                            <div className="bg-red-50 p-10 rounded-[40px] border-2 border-red-100 my-12">
                                <h4 className="text-2xl font-black text-red-900 mb-6 uppercase">The 'Acceleration' Clause Danger</h4>
                                <p className="text-lg text-red-800 leading-relaxed font-bold italic">
                                    An 'Acceleration' clause allows the lender to demand the FULL repayment of the entire loan immediately upon a single default. This can be financially devastating. We ensure these clauses are conditional upon significant, documented breaches, rather than minor technical errors.
                                </p>
                            </div>
                        </section>

                        <section id="collateral-security-veting" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-tighter decoration-[#1F5EFF] underline underline-offset-8">
                                Security & Collateral: Defining the Boundary of Risk
                            </h2>
                            <p className="mb-8 leading-relaxed">
                                If you are pledging property, jewelry, or business assets, the 'Security' clause is the most important part of the agreement. It defines the 'Lien' the bank has over your life's work. It is crucial that the agreement specifies <strong>Security Release Protocols</strong>.
                            </p>
                            <p className="mb-8">
                                A major grievance for Indian borrowers is banks holding onto title deeds even after the loan is fully paid. Your agreement must mandate the return of all original documents within <strong>30 days</strong> of loan closure, as per recent RBI guidelines. Additionally, the 'Right to Re-possess' must be carefully drafted to ensure it follows the <strong>SARFAESI Act</strong> procedures rather than giving the lender arbitrary power to seize assets without court intervention or a 60-day notice.
                            </p>
                            <p className="mb-8 font-bold italic text-[#1F5EFF]">
                                "Collateral is a bridge, not a trap. We ensure that the value of the security remains proportional to the loan amount. If your property value has increased significantly, you should have the right to request a release of part of the security or a reduction in the interest rate."
                            </p>
                        </section>

                        <section id="rbi-guidelines-transparency" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase italic border-l-8 border-gray-900 pl-6">
                                RBI Guidelines on Transparency: Your Regulatory Shield
                            </h2>
                            <p className="mb-8 text-lg">
                                The Reserve Bank of India (RBI) has issued several Master Directions for NBFCs and Banks regarding 'Fair Practices Code'. Your loan agreement MUST comply with these, or it is legally vulnerable.
                            </p>
                            <p className="mb-8">
                                Key RBI requirements include the provision of a 'Key Fact Statement' (KFS) which summarizes the most important terms in simple language, the mandatory disclosure of all charges, and the prohibition of 'Hidden Penalties'. For example, RBI explicitly bans banks from charging foreclosure penalties on individual home loans with floating interest rates. If your agreement contains such a clause, it is <strong>Void Ab Initio</strong> (invalid from the start), and we can have it struck down within days through a professional representation to the Banking Ombudsman.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 my-12">
                                <div className="p-8 bg-blue-900 text-white rounded-[40px] shadow-xl">
                                    <h4 className="text-xl font-black mb-4 uppercase text-blue-300">Mandatory Disclosure</h4>
                                    <p className="opacity-80 leading-relaxed font-medium">Lenders must provide the borrower with a copy of the loan agreement and all its enclosures at the time of sanction. Refusal to provide these documents is a serious regulatory violation.</p>
                                </div>
                                <div className="p-8 bg-gray-50 border-2 border-gray-100 rounded-[40px] shadow-sm">
                                    <h4 className="text-xl font-black mb-4 uppercase text-[#1F5EFF]">Standard Clauses</h4>
                                    <p className="text-gray-600 leading-relaxed font-bold italic">Standardization prevents abuse. RBI mandates that any change in terms and conditions (like interest rate hikes) must be communicated in writing with a minimum notice period.</p>
                                </div>
                            </div>
                        </section>

                        <section id="review-checklist-borrowers" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                                The Review Masterclass: How to Spot a "Toxic" Clause
                            </h2>
                            <p className="mb-8">
                                Professional legal vetting isn't just about reading; it's about anticipating failure. When our team reviews a loan agreement, we look for 'Toxic Clauses' that act as time bombs. Here are the red flags we look for:
                            </p>
                            <ul className="space-y-6 mb-12">
                                <li className="flex items-start gap-4">
                                    <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1"><svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg></span>
                                    <div>
                                        <h5 className="font-black text-lg">The 'Unilateral Modification' Clause</h5>
                                        <p className="leading-relaxed">This allows the bank to change interest rates or fees at any time without your consent. We struggle to remove this or at least link it to a transparent benchmark like the RBI Repo Rate.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1"><svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg></span>
                                    <div>
                                        <h5 className="font-black text-lg">The 'Arbitrary Foreclosure' Clause</h5>
                                        <p className="leading-relaxed">A clause that allows the lender to recall the loan for no reason ('Recall at Will'). This can lead to liquidity crises for businesses. We mandate that any recall must be preceded by a specific, defined default.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1"><svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg></span>
                                    <div>
                                        <h5 className="font-black text-lg">The 'CIBIL Immunity' Clause</h5>
                                        <p className="leading-relaxed">Some agreements try to shield the bank from liability for 'Erroneous Reporting' to credit bureaus. This is illegal. Banks are legally liable for the accuracy of data they send to CIBIL.</p>
                                    </div>
                                </li>
                            </ul>
                        </section>

                        <section id="hidden-charges-alert" className="scroll-mt-32 mb-20 p-12 bg-yellow-50 rounded-[48px] border-4 border-dashed border-yellow-200">
                            <h2 className="text-3xl md:text-4xl font-black text-yellow-900 mb-8 uppercase tracking-tighter italic">
                                Hidden Charges Alert: Beyond the Interest Rate
                            </h2>
                            <p className="mb-8 text-lg font-medium text-yellow-800 leading-relaxed">
                                Most borrowers look only at the 'Interest Rate'. Professional reviewers look at the 'Total Cost of Credit'. Here is where the real money is lost:
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6 font-bold text-yellow-900">
                                <div className="p-4 bg-white/50 rounded-xl">Inspection Charges: Fees for bank visits that may never happen.</div>
                                <div className="p-4 bg-white/50 rounded-xl">Document Retrieval Fees: Charges for getting your own papers back.</div>
                                <div className="p-4 bg-white/50 rounded-xl">Cheque Bounce Penalties: Often astronomically high compared to actual costs.</div>
                                <div className="p-4 bg-white/50 rounded-xl">Commitment Fees: Charged if you don't draw the full loan amount sanctioned.</div>
                                <div className="p-4 bg-white/50 rounded-xl">Processing Fee GST: Often calculated incorrectly on the full amount.</div>
                                <div className="p-4 bg-white/50 rounded-xl">Legal Vetting Fees: Banks charge YOU for their own lawyers to review.</div>
                            </div>
                        </section>

                        <section id="dispute-resolution-mechanisms" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-tight underline transform -rotate-1">
                                Disputes & Arbitration: Choosing the Battlefield
                            </h2>
                            <p className="mb-8 text-xl leading-relaxed">
                                If things go wrong, where will you fight? The <strong>Jurisdiction and Dispute Resolution</strong> clause decides this. Many NBFCs and digital lenders include 'Arbitration' clauses that specify a distant city (like Chennai or Mumbai) as the venue, making it expensive and impossible for a local borrower to defend themselves.
                            </p>
                            <p className="mb-8">
                                During our review process, we ensure that the jurisdiction is local or, better yet, that the arbitration is conducted by an independent body rather than a lender-nominated arbitrator. Furthermore, we clarify the <strong>Governing Law</strong> to ensure that the agreement is interpreted under the latest Indian consumer protection and banking laws, which are generally more favorable to the borrower than archaic commercial laws.
                            </p>
                            <p className="mb-8 font-black text-blue-900 bg-blue-50 p-8 rounded-3xl italic">
                                "A fair agreement doesn't just plan for repayment; it plans for justice. We make sure that your right to approach the Consumer Court or the RBI Banking Ombudsman is never waived away in the fine print. These are your statutory rights, and no contract can legally take them from you."
                            </p>
                        </section>

                        <section id="case-victories" className="scroll-mt-32 mb-20">
                            <ReviewSnippets
                                title="Drafting & Vetting Victories"
                                reviews={[
                                    {
                                        name: "Arjun Mehta",
                                        loc: "New Delhi",
                                        loan: "Commercial Project Loan",
                                        res: "Hidden Penalties Removed",
                                        story: "The team identified three hidden penalty clauses in my commercial loan agreement that would have cost me over 4 lakhs in the long run. Professional and thorough review."
                                    },
                                    {
                                        name: "Sita Ram",
                                        loc: "Hyderabad",
                                        loan: "MSME Expansion Loan",
                                        res: "Flexible Repayment Vetted",
                                        story: "Professional and thorough. They made sure the repayment terms were flexible as per my business cycles and removed a tricky 'Recall at Will' clause."
                                    },
                                    {
                                        name: "Vikram Nath",
                                        loc: "Mumbai",
                                        loan: "Personal Loan (High Value)",
                                        res: "APR Corrected",
                                        story: "I didn't realize my '10% loan' was actually an 18% loan until they calculated the APR. They helped me negotiate a much better deal with another institution."
                                    }
                                ]}
                            />
                        </section>

                        <section id="faqs" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 uppercase tracking-widest">Drafting Masterclass FAQs</h2>
                            <div className="space-y-4 not-prose">
                                {(jsonLd["@graph"] as any)[4]?.mainEntity?.map((faq: any, i: number) => (
                                    <details key={i} className="group bg-white border border-[#DEDEDE] rounded-xl overflow-hidden hover:shadow-md transition-all border-b-4 border-b-[#1F5EFF]/20 shadow-sm">
                                        <summary className="flex justify-between items-center p-5 cursor-pointer font-black text-[#2E2E2E] list-none bg-gray-50 group-open:bg-white transition-colors">
                                            <span className="text-lg">{i + 1}. {faq.name}</span>
                                            <span className="transition-transform group-open:rotate-180">
                                                <svg className="w-5 h-5 text-[#1F5EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7"></path></svg>
                                            </span>
                                        </summary>
                                        <div className="px-5 pb-5 text-[#2E2E2E] opacity-90 leading-relaxed border-t border-[#DEDEDE] pt-4 mt-0 bg-white">
                                            {faq.acceptedAnswer.text}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </section>

                        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
                            <p className="text-gray-400 text-sm italic font-black uppercase tracking-tighter leading-relaxed">
                                Disclaimer: SettleLoans is a professional legal and financial consultancy specializing in document vetting and dispute resolution. We are not a lender. Drafting services are intended to provide guidance based on current Indian laws and RBI guidelines. Final legal enforceability depends on court interpretation and compliance with individual state stamp laws.
                            </p>
                        </div>

                        {/* Mobile CTA (Visible only on mobile) */}
                        <div className="lg:hidden mt-16 mb-8">
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#1F5EFF]/20">
                                <div className="bg-[#1F5EFF] p-6 text-center text-white">
                                    <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter">Secure Your Future?</h3>
                                    <p className="opacity-90 text-sm italic font-medium">Join 10,000+ Indians who've protected their financial rights with our expert review.</p>
                                </div>
                                <div className="p-8 text-center text-[#DEDEDE]">
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-xl hover:scale-105 transition-all shadow-lg text-lg uppercase tracking-tight">
                                        Free Document Check
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Right Column: CTA & Related Pages (Sticky) */}
                    <aside className="hidden lg:block w-1/5 shrink-0 px-4 mt-[-40px]">
                        <div className="sticky top-24 space-y-12 text-center">

                            {/* CTA Card */}
                            <div className="bg-[#2E2E2E] rounded-[32px] shadow-2xl overflow-hidden border border-[#DEDEDE]/10 group">
                                <div className="bg-[#1F5EFF] p-6 text-white text-center">
                                    <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter leading-none">Drafting<br />Emergency?</h3>
                                    <p className="opacity-80 text-[10px] font-black uppercase tracking-[0.2em]">Contact Experts Today</p>
                                </div>
                                <div className="p-8">
                                    <p className="text-[#DEDEDE] text-sm mb-8 leading-relaxed font-bold italic opacity-70 group-hover:opacity-100 transition-opacity">
                                        Don't sign without a professional review. Our legal team will identify risks before they become liabilities.
                                    </p>
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-4 rounded-xl hover:scale-105 transition-all shadow-lg text-sm uppercase tracking-widest">
                                        Talk to Experts
                                    </Link>
                                    <p className="mt-4 text-[10px] text-gray-400 font-black uppercase tracking-tighter">100% Confidential Legal Vetting</p>
                                </div>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm text-left">
                                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#1F5EFF] mb-6 border-b border-blue-50 pb-4">Essential Mastery</h4>
                                <nav className="space-y-4">
                                    <Link href="/legal-case-for-loan-sanction-without-consent" className="block text-sm font-bold text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic">Unauthorized Loan Help</Link>
                                    <Link href="/best-lawyer-for-personal-loans" className="block text-sm font-bold text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic">Personal Loan Lawyer</Link>
                                    <Link href="/business-corporate-loan-matters" className="block text-sm font-bold text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic">Corporate Loan Masters</Link>
                                    <Link href="/best-lawyer-for-msme-business-loan-dispute" className="block text-sm font-bold text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic">MSME Settlement</Link>
                                    <Link href="/debt-settlement-company-in-india" className="block text-sm font-bold text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic">Professional Guidance</Link>
                                </nav>
                            </div>
                        </div>
                    </aside>

                </div>
            </main>
        </div>
    );
}
