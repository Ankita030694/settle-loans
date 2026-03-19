import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import ReviewSnippets from "@/components/ReviewSnippets";

export const metadata: Metadata = {
    title: "Bank Recovery Case in Court India | Legal Process & Defense",
    description: "Facing a bank recovery suit? Learn about the legal process in India, including Civil Suits, Summary Suits (Order 37), DRT proceedings, and how to defend your rights.",
    alternates: {
        canonical: "https://settleloans.in/bank-recovery-case-in-court",
    },
};

export default function BankRecoveryCasePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/bank-recovery-case-in-court#webpage",
                "url": "https://settleloans.in/bank-recovery-case-in-court",
                "name": "Bank Recovery Case in Court India | Step-by-Step Legal Guide",
                "description": "Comprehensive guide on the legal aspects of bank recovery suits in India and defensive strategies for borrowers.",
                "breadcrumb": { "@id": "https://settleloans.in/bank-recovery-case-in-court#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/bank-recovery-case-in-court#breadcrumb",
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
                        "name": "Bank Recovery Case Guide",
                        "item": "https://settleloans.in/bank-recovery-case-in-court"
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/bank-recovery-case-in-court#article",
                "headline": "Understanding Bank Recovery Suits in India: From Summons to Settlement",
                "description": "An exhaustive analysis of judicial debt recovery channels including Civil Courts, DRTs, and Summary Proceedings under Order 37 CPC.",
                "author": {
                    "@type": "Organization",
                    "name": "SettleLoans Legal Research"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "SettleLoans",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://settleloans.in/logo/logo.svg"
                    }
                },
                "datePublished": "2024-03-10",
                "dateModified": "2024-03-10",
                "mainEntityOfPage": { "@id": "https://settleloans.in/bank-recovery-case-in-court#webpage" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/bank-recovery-case-in-court#product",
                "name": "Court Debt Defense Consultation",
                "description": "Professional legal strategy and mediation services for borrowers facing bank recovery cases in Indian courts.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.97",
                    "reviewCount": "3150"
                }
            },
            {
                "@type": "FAQPage",
                "@id": "https://settleloans.in/bank-recovery-case-in-court#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is a Summary Suit for bank recovery?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A Summary Suit is filed under Order 37 of the CPC. It is a fast-track process where the defendant must obtain 'leave to defend' within 10 days of receiving a summons. If they fail, the bank gets an immediate decree."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I be jailed for a civil recovery case?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "In regular civil suits for money, jail is extremely rare and only happens if you intentionally violate court orders or hide assets. Debt itself is a civil matter, not a criminal one."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the role of a Debt Recovery Tribunal (DRT)?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "DRTs are specialized tribunals for recovering larger bank debts (usually above 20 lakhs). They have powers to issue recovery certificates and attach assets quickly."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What should I do if I receive a court summons for a loan?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "You must never ignore it. Contact a lawyer immediately. You need to file a reply within the stipulated time to prevent the court from passing an ex-parte order against you."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How long does a bank recovery case last in India?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A regular civil suit can take 3 to 7 years. Summary suits are faster (6 to 18 months). DRT cases aim for resolution within 6 months but often take longer."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I settle a loan while a court case is pending?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Most banks prefer an out-of-court settlement via Lok Adalat or private mediation even after filing a case, as it saves them time and legal costs."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is an 'Ex-Parte' decree?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "It is an order passed by the court in your absence if you fail to appear after being served a summons. It allows the bank to proceed with asset attachment directly."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does a recovery suit affect my CIBIL score?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The default likely already affected your score, but a 'Suit Filed' status on your report further damages your creditworthiness for any future loans."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is Section 138 in the context of loan recovery?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Section 138 of the Negotiable Instruments Act deals with cheque bouncing. It is a criminal proceeding that banks often use alongside civil suits to pressure borrowers."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can the court attach my salary for loan recovery?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, once a decree is passed, a court can issue a garnishee order to attach a portion of your salary to satisfy the bank's claim, though there are limits on how much can be attached."
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
                            Judicial Guidance
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight uppercase">
                            Bank Recovery <br /> <span className="text-[#1F5EFF]">Case in Court</span>
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
                            Demystifying the litigation process. From receiving your first summons to filing a Statement of Defense. Navigate the complexities of CPC, Order 37, and DRT with confidence.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Get Court Defense Strategy
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
                                <li className="font-bold text-[#2E2E2E]" aria-current="page">Bank Recovery Case Guide</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">

                    {/* Left Column: TOC */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-32">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#1F5EFF] mb-8 pb-4 border-b-2 border-blue-50">Legal Roadmap</h3>
                            <TableOfContents
                                items={[
                                    { id: "judicial-recovery-overview", title: "Overview" },
                                    { id: "civil-recovery-suit-process", title: "Civil Suit Process" },
                                    { id: "summary-suit-order-37", title: "Summary Suits" },
                                    { id: "debt-recovery-tribunal-drt", title: "DRT Proceedings" },
                                    { id: "receiving-summons-checklist", title: "Summons Checklist" },
                                    { id: "statement-of-defense", title: "Filing Defense" },
                                    { id: "ex-parte-decree-protection", title: "Ex-Parte Protection" },
                                    { id: "attachment-of-property", title: "Asset Attachment" },
                                    { id: "negotiating-court-settlement", title: "Court Settlement" },
                                    { id: "lok-adalat-mediation", title: "Lok Adalat & Mediation" },
                                    { id: "faqs", title: "Legal FAQs" }
                                ]}
                            />
                        </div>
                    </aside>

                    {/* Middle Column: Content */}
                    <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[#2E2E2E]">

                        <section id="judicial-recovery-overview" className="scroll-mt-32 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                            <h2 className="text-4xl md:text-5xl font-black text-[#2E2E2E] mb-10 leading-[1.1] uppercase tracking-tighter">
                                Bank Recovery in Court: <span className="text-[#1F5EFF]">The Judicial Battle</span>
                            </h2>
                            <p className="text-xl font-medium mb-8 leading-relaxed">
                                When 'soft' recovery methods like calls and agent visits fail, a bank transitions from the balance sheet to the legal brief. A <strong>bank recovery case in court</strong> is the final, most serious stage of the debt cycle. It represents the bank's attempt to use the coercive power of the State to recover their dues.
                            </p>
                            <p className="mb-8">
                                For a borrower, this stage can feel daunting. However, the Indian judicial system is built on the principle of 'Audi Alteram Partem' (hear the other side). A court case is not an immediate judgment; it is a process of verification. Understanding this process allows you to stop being a passive recipient of notices and start being an active defender of your financial rights.
                            </p>
                            <div className="bg-gray-900 p-10 rounded-[40px] text-white my-12 shadow-2xl relative">
                                <h3 className="text-2xl font-black mb-6 uppercase tracking-widest text-[#1F5EFF]">The Burden of Proof</h3>
                                <p className="text-lg opacity-80 leading-relaxed font-medium">
                                    In any recovery suit, the burden lies on the bank. They must prove the existence of the loan, the precise calculation of use, and the legality of the interest charged. Often, errors in statement reconciliation or missing documentation can provide a robust defense for the borrower.
                                </p>
                            </div>
                        </section>

                        <section id="civil-recovery-suit-process" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-widest border-b-8 border-gray-100 pb-4">
                                Regular Civil Recovery Suit: The Timeline
                            </h2>
                            <p className="mb-8 leading-relaxed font-medium">
                                Filed under the Code of Civil Procedure (CPC), a regular suit is the standard path for recovering money based on a contract.
                            </p>
                            <div className="space-y-6">
                                <div className="p-8 bg-blue-50 border border-blue-100 rounded-[32px] hover:shadow-md transition-shadow">
                                    <h4 className="text-xl font-black text-[#1F5EFF] mb-2 uppercase italic leading-none">Stage 1: Filing the Plaint</h4>
                                    <p className="text-sm leading-relaxed font-bold opacity-70">The bank's lawyer drafts a document detailings the facts, the amount due, and the legal grounds. This is filed in the court with jurisdiction based on your address or the branch location.</p>
                                </div>
                                <div className="p-8 bg-blue-50 border border-blue-100 rounded-[32px] hover:shadow-md transition-shadow">
                                    <h4 className="text-xl font-black text-[#1F5EFF] mb-2 uppercase italic leading-none">Stage 2: Issuance of Summons</h4>
                                    <p className="text-sm leading-relaxed font-bold opacity-70">The court reviews the plaint and issues a formal notice (summons) to the borrower, commanding them to appear and answer the claim.</p>
                                </div>
                                <div className="p-8 bg-blue-50 border border-blue-100 rounded-[32px] hover:shadow-md transition-shadow">
                                    <h4 className="text-xl font-black text-[#1F5EFF] mb-2 uppercase italic leading-none">Stage 3: The Trial</h4>
                                    <p className="text-sm leading-relaxed font-bold opacity-70">Evidence is lead, witnesses are cross-examined, and arguments are heard. This is where the bank's account statements are scrutinized.</p>
                                </div>
                                <div className="p-8 bg-[#1F5EFF] text-white rounded-[32px] shadow-lg">
                                    <h4 className="text-xl font-black mb-2 uppercase italic leading-none">Stage 4: The Decree</h4>
                                    <p className="text-sm leading-relaxed font-medium opacity-90">The final judgment of the court. If passed in favor of the bank, it becomes a 'Decree-Holder', giving it the right to execute the order.</p>
                                </div>
                            </div>
                        </section>

                        <section id="summary-suit-order-37" className="scroll-mt-32 mb-20 p-12 bg-white border-4 border-gray-100 rounded-[48px] shadow-inner relative mt-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 border-l-8 border-[#1F5EFF] pl-6 uppercase tracking-tighter italic">
                                Summary Suits: The Fast-Track Trap
                            </h2>
                            <p className="mb-8 leading-relaxed">
                                Most credit card and personal loan suits are filed as <strong>Summary Suits under Order 37 CPC</strong>. In these cases, the law assumes you have no defense unless you prove otherwise.
                            </p>
                            <div className="p-8 bg-red-50 rounded-3xl border border-red-100 mb-8">
                                <h4 className="text-xl font-black text-red-900 mb-2 uppercase">The 10-Day Rule</h4>
                                <p className="text-sm italic font-bold text-red-700 leading-relaxed">Once you receive a summons in a summary suit, you have exactly <strong>10 days</strong> to file an "Appearance". If you miss this, the bank automatically wins the case without a trial.</p>
                            </div>
                            <p className="mb-0 leading-relaxed font-bold">
                                To convert a summary suit into a regular trial, your lawyer must apply for <strong>"Leave to Defend"</strong>. You must show a "triable issue" such as:
                            </p>
                            <ul className="grid md:grid-cols-2 gap-4 mt-6">
                                <li className="px-6 py-4 bg-gray-50 rounded-2xl border border-gray-100 text-xs font-black uppercase tracking-tight">Incorrect Interest Compounding</li>
                                <li className="px-6 py-4 bg-gray-50 rounded-2xl border border-gray-100 text-xs font-black uppercase tracking-tight">Lack of Proper Accounting Proof</li>
                                <li className="px-6 py-4 bg-gray-50 rounded-2xl border border-gray-100 text-xs font-black uppercase tracking-tight">Violation of RBI Master Circulars</li>
                                <li className="px-6 py-4 bg-gray-50 rounded-2xl border border-gray-100 text-xs font-black uppercase tracking-tight">Statute of Limitations Expiry</li>
                            </ul>
                        </section>

                        <section id="debt-recovery-tribunal-drt" className="scroll-mt-32 mb-20 mt-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-widest leading-[0.9] decoration-[#1F5EFF] underline underline-offset-8">
                                Debt Recovery Tribunal (DRT): The Corporate Arena
                            </h2>
                            <p className="mb-8 leading-relaxed text-lg font-medium italic opacity-70">
                                "DRTs were created for speed, but they must still follow the law."
                            </p>
                            <p className="mb-8 font-medium">
                                If your loan amount is significantly high (usually above 20 lakhs), the bank will bypass civil courts and file an application in the <strong>Debt Recovery Tribunal</strong>.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 my-12">
                                <div className="p-10 bg-[#2E2E2E] text-white rounded-[48px] shadow-xl border-l-8 border-[#1F5EFF]">
                                    <h4 className="text-2xl font-black mb-4 uppercase italic leading-none">The DRT Process</h4>
                                    <p className="text-sm leading-relaxed opacity-90 font-medium font-bold">The bank files an Original Application (OA). The Presiding Officer issues a notice. Unlike civil courts, DRTs follow 'Principles of Natural Justice' rather than the strict CPC rules, making it faster.</p>
                                </div>
                                <div className="p-10 bg-[#2E2E2E] text-white rounded-[48px] shadow-xl border-l-8 border-red-500">
                                    <h4 className="text-2xl font-black mb-4 uppercase italic leading-none">The Recovery Certificate</h4>
                                    <p className="text-sm leading-relaxed opacity-90 font-medium font-bold">If the DRT decides against you, it issues a 'Recovery Certificate'. This acts as a blank check for the Recovery Officer to attach and sell your assets.</p>
                                </div>
                            </div>
                        </section>

                        <section id="receiving-summons-checklist" className="scroll-mt-32 mb-20 p-10 bg-blue-50 rounded-[40px] border-2 border-blue-100 relative shadow-sm overflow-hidden">
                            <h2 className="text-3xl font-black text-blue-900 mb-6 uppercase tracking-wider italic">Strategic Summons Checklist</h2>
                            <p className="text-lg text-blue-800 leading-relaxed font-medium mb-6">
                                Receiving a summons is not the end; it is the beginning of your defense.
                            </p>
                            <ul className="space-y-4 text-blue-900 font-black uppercase text-xs tracking-widest">
                                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> Verify the authenticity of the court seal.</li>
                                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> Check if it's a Summary Suit (Order 37) or Regular Suit.</li>
                                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> Mark the date of receipt to calculate the 10-day or 30-day response window.</li>
                                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> Collate all payment receipts and transaction history.</li>
                                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> Consult a lawyer specializing in debt litigation immediately.</li>
                            </ul>
                        </section>

                        <section id="statement-of-defense" className="scroll-mt-32 mb-20 mt-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 border-l-8 border-[#2E2E2E] pl-6 uppercase tracking-widest leading-none">
                                Crafting the Statement of Defense
                            </h2>
                            <p className="mb-8 leading-relaxed">
                                Your <strong>Statement of Defense</strong> or "Written Statement" is your story. It is not enough to say "I don't have the money." You must challenge the bank's arithmetic and procedural adherence.
                            </p>
                            <div className="bg-gray-50 p-10 rounded-[48px] border border-gray-100 shadow-sm mb-12">
                                <h4 className="text-xl font-black mb-4 uppercase tracking-tighter text-[#1F5EFF]">Top Defensive Pleas</h4>
                                <ul className="space-y-3">
                                    <li className="text-sm font-bold opacity-80 italic italic">"The bank has failed to follow the RBI Fair Practices Code."</li>
                                    <li className="text-sm font-bold opacity-80 italic italic">"The interest charged exceeds the agreed cap or is usurious."</li>
                                    <li className="text-sm font-bold opacity-80 italic italic">"The suit is barred by the Limitation Act as no payment was made for 3+ years."</li>
                                    <li className="text-sm font-bold opacity-80 italic italic">"The credit card agreement was never properly signed or delivered."</li>
                                </ul>
                            </div>
                        </section>

                        <section id="ex-parte-decree-protection" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-widest leading-none border-b-8 border-[#1F5EFF] pb-4">
                                The Ex-Parte Decree: The Borrower's Nightmare
                            </h2>
                            <p className="mb-8 leading-relaxed">
                                An <strong>Ex-Parte Decree</strong> occurs if the bank proves they served you a notice, but you chose not to show up. In the court's eyes, silence is an admission of debt.
                            </p>
                            <div className="bg-red-900 p-10 rounded-[48px] text-white shadow-2xl">
                                <h4 className="text-2xl font-black mb-4 uppercase italic text-red-500">The Power of "Setting Aside"</h4>
                                <p className="text-sm leading-relaxed opacity-80 font-bold mb-6">If an ex-parte decree is passed without you being properly served, you can file an application under <strong>Order 9 Rule 13 of the CPC</strong> to set aside the decree. You must prove "sufficient cause" for your absence.</p>
                                <p className="text-xs font-black uppercase tracking-[0.2em] font-bold italic">This is an emergency legal procedure that can stop a recovery officer from entering your house.</p>
                            </div>
                        </section>

                        <section id="attachment-of-property" className="scroll-mt-32 mb-20 mt-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-widest decoration-[#1F5EFF] underline underline-offset-8">
                                Attachment of Property & Execution
                            </h2>
                            <p className="mb-8 leading-relaxed">
                                Once a decree is absolute, the court becomes an 'Execution Court'. The bank seeks an order to attach your movable (car, electronics) or immovable (house, land) property.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 my-12">
                                <div className="p-10 bg-gray-50 rounded-[48px] border border-gray-100 shadow-sm relative overflow-hidden group">
                                    <h4 className="text-xl font-black mb-4 uppercase tracking-tighter text-[#2E2E2E]">The Inventory Phase</h4>
                                    <p className="text-sm leading-relaxed opacity-70 font-medium italic">A court-appointed bailiff visits your premises to create an inventory. They cannot use physical force against your family.</p>
                                </div>
                                <div className="p-10 bg-gray-50 rounded-[48px] border border-gray-100 shadow-sm relative overflow-hidden group text-right">
                                    <h4 className="text-xl font-black mb-4 uppercase tracking-tighter text-[#2E2E2E]">Public Auction</h4>
                                    <p className="text-sm leading-relaxed opacity-70 font-medium italic">Attached property is sold via auction. You have the right to ensure the property is not sold at an 'undervalued' price.</p>
                                </div>
                            </div>
                        </section>

                        <section id="negotiating-court-settlement" className="scroll-mt-32 mb-20 p-12 bg-[#1F5EFF] rounded-[56px] text-white shadow-2xl relative">
                            <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tighter italic leading-none">Negotiation in the Shadow of Law</h2>
                            <p className="text-xl leading-relaxed opacity-90 font-medium mb-8">
                                Banks don't want to fight for 5 years. They want their money. The best time to settle is often the moment you file a strong Written Statement.
                            </p>
                            <p className="mb-0 text-sm font-black uppercase tracking-[0.2em]">A well-drafted defense showing technical flaws in the bank's case is the ultimate leverage for a deep One-Time Settlement (OTS).</p>
                        </section>

                        <section id="lok-adalat-mediation" className="scroll-mt-32 mb-20 mt-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-widest italic border-l-8 border-[#2E2E2E] pl-6 leading-none">
                                Lok Adalat & Mediation: The Peaceful Exit
                            </h2>
                            <p className="mb-8 leading-relaxed">
                                Most courts will refer the bank and borrower to <strong>Mediation</strong> or a <strong>Lok Adalat</strong> (People's Court). A settlement reached here has the finality of a decree but is arrived at amicably.
                            </p>
                            <p className="mb-8 font-medium italic">Benefits of settling in Lok Adalat:</p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-4 text-sm font-black uppercase italic tracking-tighter">
                                    <span className="w-4 h-4 rounded b-[#1F5EFF] bg-[#1F5EFF]"></span>
                                    Full refund of court fees paid by the bank (often passed as a discount to you).
                                </li>
                                <li className="flex items-center gap-4 text-sm font-black uppercase italic tracking-tighter">
                                    <span className="w-4 h-4 rounded b-[#1F5EFF] bg-[#1F5EFF]"></span>
                                    No appeal can be filed against a Lok Adalat order.
                                </li>
                                <li className="flex items-center gap-4 text-sm font-black uppercase italic tracking-tighter">
                                    <span className="w-4 h-4 rounded b-[#1F5EFF] bg-[#1F5EFF]"></span>
                                    Immediate closure of all civil and pending recovery proceedings.
                                </li>
                            </ul>
                        </section>

                        <section id="success-stories" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center uppercase">Real Stories of Litigation Defense</h2>
                            <div className="grid md:grid-cols-2 gap-6 not-prose">
                                {[
                                    {
                                        name: "Harish G.",
                                        loc: "Delhi",
                                        type: "Personal Loan Case",
                                        outcome: "Summary Suit Dismissed",
                                        story: "The bank filed an Order 37 suit. We proved the 'Acknowledgment of Debt' was forged. The court granted unconditional leave to defend, and the bank eventually settled for 4L."
                                    },
                                    {
                                        name: "Suman R.",
                                        loc: "Hyderabad",
                                        type: "Credit Card Default",
                                        outcome: "Decree Set Aside",
                                        story: "I received an ex-parte decree notice for an address I left 5 years ago. We proved improper service under Order 9 Rule 13. The court restored the case, allowing us to settle on fair terms."
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
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 uppercase tracking-widest leading-none">Bank Recovery Case FAQs</h2>
                            <div className="space-y-4 not-prose">
                                {(jsonLd["@graph"] as any)[4]?.mainEntity?.map((faq: any, i: number) => (
                                    <details key={i} className="group bg-white border border-[#DEDEDE] rounded-xl overflow-hidden hover:shadow-md transition-all border-b-4 border-b-[#1F5EFF]/20">
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
                                Disclaimer: SettleLoans is a financial strategy firm. We are not a law firm and do not represent clients in court. Litigation is governed by the CPC and relevant laws. Always consult a qualified advocate for filing responses or appearing in court.
                            </p>
                        </div>

                        {/* Mobile CTA */}
                        <div className="lg:hidden mt-16 mb-8">
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#1F5EFF]/20">
                                <div className="bg-[#1F5EFF] p-6 text-center text-white">
                                    <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter">Fight the Case</h3>
                                    <p className="opacity-90 text-sm italic font-medium">Don't let the legal clock run out. Build a professional defense strategy and settle on your terms today.</p>
                                </div>
                                <div className="p-8 text-center text-[#DEDEDE]">
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-xl hover:scale-105 transition-all shadow-lg text-lg uppercase tracking-tight">
                                        Defend My Rights
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Right Column: CTA & Related Pages */}
                    <aside className="hidden lg:block w-1/5 shrink-0 px-4 mt-[-40px]">
                        <div className="sticky top-24 space-y-12 text-center">

                            {/* CTA Card */}
                            <div className="bg-[#2E2E2E] rounded-[32px] shadow-2xl overflow-hidden border border-[#DEDEDE]/10 group">
                                <div className="bg-[#1F5EFF] p-6 text-white text-center">
                                    <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter leading-none">Court Case<br />Defense</h3>
                                    <p className="opacity-80 text-[10px] font-black uppercase tracking-[0.2em]">Immediate Response</p>
                                </div>
                                <div className="p-8">
                                    <p className="text-[#DEDEDE] text-sm mb-8 leading-relaxed font-bold italic opacity-70 group-hover:opacity-100 transition-opacity">
                                        Stop the fear of receiving court notices. Our team helps you audit the bank's claims and identifies procedural gaps to force an ethical settlement.
                                    </p>
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-4 rounded-xl hover:scale-105 transition-all shadow-lg text-sm uppercase tracking-widest">
                                        Build My Defense
                                    </Link>
                                    <p className="mt-4 text-[10px] text-gray-400 font-black uppercase tracking-tighter text-center">Procedural Audits. Settlement Experts.</p>
                                </div>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm text-left">
                                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#1F5EFF] mb-6 border-b border-blue-50 pb-4">Litigation Hub</h4>
                                <nav className="space-y-4">
                                    <Link href="/bank-arbitration-notice-loan" className="block text-[11px] font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic uppercase tracking-tighter">Arbitration Defense</Link>
                                    <Link href="/legal-action-for-credit-card-default" className="block text-[11px] font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic uppercase tracking-tighter">Credit Card Suits</Link>
                                    <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="block text-[11px] font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic uppercase tracking-tighter">Notice Checklist</Link>
                                    <Link href="/can-bank-file-case-for-personal-loan" className="block text-[11px] font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic uppercase tracking-tighter">Personal Loan Litigation</Link>
                                    <Link href="/recovery-agents-threatening-me-what-to-do" className="block text-[11px] font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic uppercase tracking-tighter">Agent Harassment Defense</Link>
                                </nav>
                            </div>
                        </div>
                    </aside>

                </div>
            </main>
        </div>
    );
}
