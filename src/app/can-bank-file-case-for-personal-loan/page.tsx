import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import ReviewSnippets from "@/components/ReviewSnippets";

export const metadata: Metadata = {
    title: "Can Bank File Case for Personal Loan Default? | Indian Legal Guide",
    description: "Wondering if a bank can file a case for personal loan default in India? Discover the legal consequences, summary suits, 138 NI Act risks, and how to defend your case effectively.",
    alternates: {
        canonical: "https://settleloans.in/can-bank-file-case-for-personal-loan",
    },
};

export default function PersonalLoanCaseGuidePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/can-bank-file-case-for-personal-loan#webpage",
                "url": "https://settleloans.in/can-bank-file-case-for-personal-loan",
                "name": "Can Bank File Case for Personal Loan Default? | Legal Roadmap India",
                "description": "A comprehensive analysis of the legal avenues banks take for personal loan recovery and the constitutional protections available to borrowers.",
                "breadcrumb": { "@id": "https://settleloans.in/can-bank-file-case-for-personal-loan#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/can-bank-file-case-for-personal-loan#breadcrumb",
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
                        "name": "Personal Loan Legal Case Guide",
                        "item": "https://settleloans.in/can-bank-file-case-for-personal-loan"
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/can-bank-file-case-for-personal-loan#article",
                "headline": "Personal Loan Default: Can the Bank Really File a Case Against You?",
                "description": "Understanding the boundary between civil recovery and criminal liability in personal loan defaults in India.",
                "author": {
                    "@type": "Organization",
                    "name": "SettleLoans Legal Analysis"
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
                "mainEntityOfPage": { "@id": "https://settleloans.in/can-bank-file-case-for-personal-loan#webpage" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/can-bank-file-case-for-personal-loan#product",
                "name": "Personal Loan Legal Representation",
                "description": "Expert legal defense and negotiation services for personal loan default cases in Civil Courts and DRT.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.97",
                    "reviewCount": "5400"
                }
            },
            {
                "@type": "FAQPage",
                "@id": "https://settleloans.in/can-bank-file-case-for-personal-loan#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Can a bank file a criminal case for personal loan default?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Generally, no. Personal loan default is a civil offense. However, if you submitted cheques that bounced (Section 138) or committed fraud during the application, criminal charges can apply."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is a Summary Suit in a personal loan case?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A Summary Suit (Order 37 CPC) is an expedited civil process for debt recovery. The defendant must prove they have a valid defense to even be allowed to participate in the trial."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can a bank freeze my other bank accounts for a personal loan default?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Under the 'Right of Set-off', a bank can potentially adjust funds from your other accounts within the same bank. Freezing accounts in other banks usually requires a court order or an attachment decree."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How long does a bank wait before filing a case?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Typically, cases are filed once the account is classified as an NPA (90+ days) and after formal legal notices have been ignored for several months."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the limitation period for a bank to file a recovery suit?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Under the Limitation Act, a bank generally has 3 years from the date of default or from the last date of acknowledgement of debt to file a civil recovery suit."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can a personal loan default lead to property seizure?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "For personal loans (unsecured), property cannot be seized without a court decree and a formal 'Attachment of Property' order. This is a long civil process, unlike secured loans."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can a bank file a case in the Debt Recovery Tribunal (DRT) for personal loans?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Banks can approach the DRT only if the total outstanding debt (including interest) is ₹20 lakhs or more. Below that, they must approach regular Civil Courts."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is a 'Wilful Defaulter'?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A wilful defaulter is someone who has the capacity to pay but chooses not to, or has diverted the funds for purposes other than the loan's intent. This can lead to criminal action."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I settle a personal loan case out of court?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Most banks prefer a One-Time Settlement (OTS) or restructuring over long litigation. You can settle even after a case is filed, usually through Lok Adalats."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Will a personal loan case stop me from traveling abroad?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Generally, civil recovery cases do not affect your passport or travel rights. Restrictions only apply if there is a criminal warrant or a specific 'Lookout Notice' in cases of major fraud."
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
                            Personal Loan Legal Analysis
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight uppercase">
                            Can Bank File Case <br /> <span className="text-[#1F5EFF]">for Personal Loan?</span>
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
                            Understanding the reality of personal loan litigation in India. From civil recovery suits to criminal NI Act risks—know your exposure and your defenses.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Consult an Expert Advocate
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
                                <li className="font-bold text-[#2E2E2E]" aria-current="page">Personal Loan Legal Case Guide</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">

                    {/* Left Column: TOC */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-32">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#1F5EFF] mb-8 pb-4 border-b-2 border-blue-50">Litigation Index</h3>
                            <TableOfContents
                                items={[
                                    { id: "personal-loan-litigation-overview", title: "Overview" },
                                    { id: "civil-recovery-suit-order-37", title: "Summary Suits" },
                                    { id: "section-138-ni-act-criminal", title: "Criminal NIA Risks" },
                                    { id: "drt-vs-civil-court", title: "Jurisdiction" },
                                    { id: "asset-attachment-unsecured", title: "Asset Attachment" },
                                    { id: "wilful-defaulter-impact", title: "Wilful Default" },
                                    { id: "limitation-period-defense", title: "Limitation Act" },
                                    { id: "legal-negotiation-lok-adalat", title: "Settlement Rights" },
                                    { id: "ombudsman-complaint-protocol", title: "Ombudsman Shield" },
                                    { id: "preparing-legal-defense", title: "Defense Strategy" },
                                    { id: "faqs", title: "Guideline FAQs" }
                                ]}
                            />
                        </div>
                    </aside>

                    {/* Middle Column: Content */}
                    <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[#2E2E2E]">

                        <section id="personal-loan-litigation-overview" className="scroll-mt-32 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                            <h2 className="text-4xl md:text-5xl font-black text-[#2E2E2E] mb-10 leading-[1.1] uppercase tracking-tighter">
                                The Default Reality: <span className="text-[#1F5EFF]">When Personal Loans Go to Court</span>
                            </h2>
                            <p className="text-xl font-medium mb-8 leading-relaxed">
                                Personal loans are the lifeblood of retail banking—fast, paperless, and 'unsecured'. But what happens when the repayment cycle breaks? Many borrowers live in a state of constant fear, fueled by aggressive recovery tactics, wondering: <strong>"Can the bank really file a case for a personal loan?"</strong> The short answer is yes, but the long answer is far more complex and protective of the borrower than you might think.
                            </p>
                            <p className="mb-8 leading-relaxed">
                                In India, defaulting on a personal loan is fundamentally a <strong>civil matter</strong>. Unlike a criminal act, the legal system treats it as a breach of contract between two parties. The bank's primary goal is not to punish you, but to recover its principal and interest. However, within this civil framework, there are specific legal avenues that banks can and do take to force repayment. Understanding these is the first step in mounting an effective defense.
                            </p>
                            <div className="bg-blue-50 p-10 rounded-[40px] border-2 border-blue-100 my-12 shadow-sm">
                                <h3 className="text-2xl font-black text-blue-900 mb-6 uppercase tracking-wider italic">The "Unsecured" Myth</h3>
                                <p className="text-lg text-blue-800 leading-relaxed font-medium">
                                    'Unsecured' does not mean the debt is unenforceable. It simply means the bank does not have the right to seize a specific asset (like your house or car) without first obtaining a court order. This "buffer" of court intervention is your primary legal protection.
                                </p>
                            </div>
                        </section>

                        <section id="civil-recovery-suit-order-37" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-widest border-b-8 border-gray-100 pb-4">
                                Summary Suits: The Bank's Fast-Track Weapon
                            </h2>
                            <p className="mb-8 font-medium">
                                For an unsecured personal loan, a standard civil recovery suit can take 5 to 10 years in Indian courts. To bypass this, banks often file a <strong>Summary Suit under Order 37 of the CPC</strong>.
                            </p>
                            <p className="mb-8 leading-relaxed">
                                In a Summary Suit, the bank presents the loan agreement and statement of account as absolute proof of debt. Once you receive the summons, you don't have an automatic 'Right to Defend'. You must apply for <strong>'Leave to Defend'</strong> within 10 days. If you can show a 'Triable Issue'—such as disputed interest calculations, forgery, or unfair contract terms—the court allows you to contest the case. If you fail to apply or the leave is rejected, a decree is passed against you as if you admitted the debt.
                            </p>
                            <div className="p-8 bg-gray-50 rounded-[40px] border border-gray-100 my-8 shadow-inner">
                                <h4 className="text-xl font-black text-[#1F5EFF] mb-4 uppercase">The Defense Strategy</h4>
                                <p className="text-sm leading-relaxed font-bold italic opacity-80">Did the bank include hidden insurance charges? Is the interest rate higher than what was promised in the sanction letter? These are valid 'Triable Issues' that can stall a summary suit and provide you leverage for settlement.</p>
                            </div>
                        </section>

                        <section id="section-138-ni-act-criminal" className="scroll-mt-32 mb-20 p-12 bg-gray-900 rounded-[48px] text-white shadow-2xl relative overflow-hidden">
                            <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tighter italic text-red-500">
                                The Criminal Trap: NI Act Section 138
                            </h2>
                            <p className="mb-8 text-xl leading-relaxed opacity-80 font-medium">
                                While the loan default is civil, the <strong>cheque bounce</strong> is criminal. Most personal loans are dispersed with mandated post-dated cheques or NACH (National Automated Clearing House) mandates.
                            </p>
                            <p className="mb-8">
                                If an EMI fails and the bank presents a cheque that bounces due to 'Insufficient Funds', they can initiate a case under <strong>Section 138 of the Negotiable Instruments Act</strong>. This is a bailable offense, but if ignored, it can lead to non-bailable warrants and, in extreme wilful cases, a prison term of up to 2 years.
                            </p>
                            <div className="bg-red-500/10 border-l-8 border-red-500 p-8 my-8 rounded-r-3xl">
                                <h4 className="text-xl font-bold mb-2 text-red-400">Survival Protocol</h4>
                                <p className="text-sm opacity-90 leading-relaxed font-black uppercase tracking-tighter italic">If you receive a statutory notice under Sec 138, you have 15 days to pay the amount. If you cannot pay, a specialized legal reply questioning the 'Legally Enforceable Debt' is your only shield to prevent the case from being filed in court.</p>
                            </div>
                        </section>

                        <section id="drt-vs-civil-court" className="scroll-mt-32 mb-20 mt-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 border-l-8 border-[#1F5EFF] pl-6 uppercase tracking-widest">
                                Jurisdiction Check: DRT vs. Civil Court
                            </h2>
                            <p className="mb-8 leading-relaxed">
                                Where the case is filed depends on the 'Amount at Stake'. For the majority of personal loans (which are typically under ₹10-15 lakhs), the bank must approach a <strong>Civil Court (City Civil or District Court)</strong>. These are general courts where proceedings follow the slow pace of the CPC.
                            </p>
                            <p className="mb-8 leading-relaxed font-bold">
                                However, if your total outstanding (including interest and penalties) exceeds <strong>₹20 lakhs</strong>, the bank has the right to approach the <strong>Debt Recovery Tribunal (DRT)</strong>. The DRT is a specialized quasi-judicial body designed for rapid recovery. Defending a case in DRT requires a higher level of expertise as the procedural rules (Recovery of Debts and Bankruptcy Act) are different and much more favorable to the financial institution.
                            </p>
                        </section>

                        <section id="asset-attachment-unsecured" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-tighter decoration-[#1F5EFF] underline underline-offset-8">
                                Asset Attachment: Can They Take Your Belongings?
                            </h2>
                            <p className="mb-8 leading-relaxed text-lg italic opacity-80">
                                "In an unsecured loan, your assets are safe—until a judgment is passed."
                            </p>
                            <p className="mb-8 leading-relaxed">
                                A common fear is that bank agents will barge in and take the TV or fridge. Under Indian law, this is illegal without an <strong>Execution Decree</strong>. For the bank to 'attach' your assets or salary, they must first win the case, obtain a decree, and then file an 'Execution Petition'. Only then can a court-appointed bailiff (not a recovery agent) visit your premises for attachment.
                            </p>
                            <p className="mb-8">
                                Even during attachment, certain items are protected under <strong>Section 60 of the CPC</strong>. This includes the tools of your trade, basic furniture, clothing, and cooking utensils. Your home (if it is your primary residence) is also difficult to attach in smaller personal loan defaults.
                            </p>
                        </section>

                        <section id="wilful-defaulter-impact" className="scroll-mt-32 mb-20 p-10 bg-red-50 rounded-[40px] border-2 border-red-100 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full -mr-16 -mt-16"></div>
                            <h2 className="text-3xl font-black text-red-900 mb-6 uppercase italic">The "Wilful" Red-Line: Criminal cheaters vs. Genuine Hardship</h2>
                            <p className="text-lg text-red-800 leading-relaxed font-medium mb-6">
                                If you cannot pay due to job loss or business failure, you are a 'Genuine Defaulter'. Banks are mandated by the RBI to handle such cases with sensitivity.
                            </p>
                            <p className="text-red-900 font-bold mb-4">You become a 'Wilful Defaulter' if:</p>
                            <ul className="space-y-4 text-red-900 font-black text-xs uppercase tracking-[0.1em]">
                                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-red-500 rounded-full"></span> You have the income but choose not to pay.</li>
                                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-red-500 rounded-full"></span> You diverted the loan money to buy luxury items instead of the declared purpose.</li>
                                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-red-500 rounded-full"></span> You disposed of your assets just to avoid repayment.</li>
                            </ul>
                            <p className="mt-8 text-sm italic font-medium text-red-600">Wilful default can lead to Look Out Circulars (LOC), prevention from traveling abroad, and criminal charges under IPC Sec 406 (Criminal Breach of Trust) and Sec 420 (Cheating).</p>
                        </section>

                        <section id="limitation-period-defense" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-widest leading-none border-l-8 border-gray-900 pl-6">
                                The Limitation Shield: The 3-Year Expiry
                            </h2>
                            <p className="mb-8 leading-relaxed">
                                Law does not protect those who sleep over their rights. The <strong>Limitation Act, 1963</strong> prescribes a 3-year window for banks to file a recovery suit. This period starts from the date of the last default or the last time you officially acknowledged the debt (e.g., made a part payment or signed a balance confirmation).
                            </p>
                            <p className="mb-8">
                                If a bank tries to file a case 4 years after your last interaction, the case is 'Time-Barred'. This is a absolute defense. However, beware of 'Acknowledgement of Debt' (AOD) forms. Recovery agents often try to get your signature on small documents; these are often hidden AODs designed to reset the 3-year clock. Never sign anything without a legal review.
                            </p>
                        </section>

                        <section id="legal-negotiation-lok-adalat" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-widest decoration-[#1F5EFF] underline underline-offset-8">
                                Lok Adalat: The Middle Path to Freedom
                            </h2>
                            <p className="mb-8 text-xl font-bold italic">
                                "The court is not the only place for a resolution."
                            </p>
                            <p className="mb-8">
                                When a case is filed (or even before), the bank might invite you to a <strong>Lok Adalat</strong>. Managed by the National Legal Services Authority (NALSA), these are amicable settlement platforms.
                            </p>
                            <p className="mb-8 leading-relaxed">
                                In a Lok Adalat, the judge acts as a mediator to help you and the bank reach a <strong>One-Time Settlement (OTS)</strong>. Settlements reached here have the same force as a court decree and cannot be appealed. This is an excellent opportunity to settle a personal loan debt for 40-60% of the total claim while ending all future litigation risks. We highly encourage borrowers to participate in Lok Adalats with a calculated settlement offer.
                            </p>
                        </section>

                        <section id="ombudsman-complaint-protocol" className="scroll-mt-32 mb-20 p-10 bg-[#1F5EFF]/5 rounded-[40px] border-2 border-dashed border-[#1F5EFF]/20 shadow-sm">
                            <h2 className="text-3xl font-black text-[#2E2E2E] mb-6 uppercase italic">RBI Ombudsman: Your Counter-Attack</h2>
                            <p className="text-lg leading-relaxed font-medium mb-6">
                                If a bank files a case while also harassing you via illegal agents, you have a potent counter-weapon. The <strong>Integrated Ombudsman</strong> can penalize a bank for violating the Fair Practices Code even if you are a defaulter.
                            </p>
                            <p className="mb-8">Evidence of harassment, such as recordings of abusive calls or proof of contact with your parents/office, can be used to set off against the bank's claim. In many cases, verified harassment has led to the bank agreeing to a much lower settlement just to avoid regulatory sanctions.</p>
                        </section>

                        <section id="preparing-legal-defense" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-widest leading-none">The Borrower's Defense Checklist</h2>
                            <p className="mb-8 leading-relaxed">If you suspect a case is being filed, prepare your 'Legal Shield' immediately:</p>
                            <div className="space-y-6">
                                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm">
                                    <h4 className="text-xl font-black text-[#1F5EFF] mb-4 uppercase">1. Statement Audit</h4>
                                    <p className="text-sm font-medium leading-relaxed">Download your full loan ledger. Identify any hidden processing fees, excessive penalties, or 'bounce charges' that were not in your original agreement.</p>
                                </div>
                                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm">
                                    <h4 className="text-xl font-black text-[#1F5EFF] mb-4 uppercase">2. Written Hardship Proof</h4>
                                    <p className="text-sm font-medium leading-relaxed">Keep copies of your resignation letter, hospital bills, or business loss statements. This proves you are a genuine borrower facing crisis, not a cheat.</p>
                                </div>
                                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm">
                                    <h4 className="text-xl font-black text-[#1F5EFF] mb-4 uppercase">3. Limitation Tracker</h4>
                                    <p className="text-sm font-medium leading-relaxed">Check the date of your last payment. If it was more than 3 years ago and you haven't signed an AOD, the bank's right to sue may have expired.</p>
                                </div>
                            </div>
                        </section>

                        <section id="success-stories" className="scroll-mt-32 mb-20">
                            <ReviewSnippets
                                title="Litigation Defeated"
                                reviews={[
                                    {
                                        name: "Naveen Juneja",
                                        loc: "Chandigarh",
                                        loan: "Unsecured Personal Loan",
                                        res: "Case Withdrawn",
                                        story: "The bank filed a Summary Suit for ₹8 lakhs. We identified that they never served the legal notice properly. The court rejected their suit, and the bank eventually settled for ₹3 lakhs outside court."
                                    },
                                    {
                                        name: "Meera Krishnan",
                                        loc: "Cochin",
                                        loan: "Instant App Loan",
                                        res: "Stop-Harassment Order",
                                        story: "The loan app was threatening my contacts. We filed a petition and obtained an injunction. The court ordered the police to register an FIR against the recovery agency's directors."
                                    },
                                    {
                                        name: "Rahul Deshmukh",
                                        loc: "Pune",
                                        loan: "Large Private Bank PL",
                                        res: "50% Waiver in Lok Adalat",
                                        story: "My case was in the DRT. SettleLoans helped me prepare my hardship presentation for the Lok Adalat. I settled the entire ₹15 lakh debt for ₹7.5 lakhs with a 6-month payment plan."
                                    },
                                    {
                                        name: "Suresh Gupta",
                                        loc: "Lucknow",
                                        loan: "Expired Credit Card Debt",
                                        res: "Limitation Act Victory",
                                        story: "A bank sued me for an 8-year-old credit card debt. We proved the case was time-barred under the Limitation Act. The judge dismissed the case with costs awarded to me for the mental agony."
                                    }
                                ]}
                            />
                        </section>

                        <section id="faqs" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 uppercase tracking-widest leading-none">Personal Loan Case FAQs</h2>
                            <div className="space-y-4 not-prose">
                                {jsonLd["@graph"][4]["mainEntity"]?.map((faq: any, i: number) => (
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
                                Disclaimer: SettleLoans provides regulatory research and legal strategy support. We are not a law firm. Personal loan cases are subject to the specific jurisdiction of local courts and individual loan agreements. Always seek professional legal advice for your specific situation.
                            </p>
                        </div>

                        {/* Mobile CTA (Visible only on mobile) */}
                        <div className="lg:hidden mt-16 mb-8">
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#1F5EFF]/20">
                                <div className="bg-[#1F5EFF] p-6 text-center text-white">
                                    <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter">Case Filed?</h3>
                                    <p className="opacity-90 text-sm italic font-medium">Don't lose hope. Our legal experts can help you file for 'Leave to Defend' and negotiate a settlement before the decree.</p>
                                </div>
                                <div className="p-8 text-center text-[#DEDEDE]">
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-xl hover:scale-105 transition-all shadow-lg text-lg uppercase tracking-tight">
                                        Defend My Case
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
                                    <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter leading-none">Court Summons?</h3>
                                    <p className="opacity-80 text-[10px] font-black uppercase tracking-[0.2em]">Litigation Defense Service</p>
                                </div>
                                <div className="p-8">
                                    <p className="text-[#DEDEDE] text-sm mb-8 leading-relaxed font-bold italic opacity-70 group-hover:opacity-100 transition-opacity">
                                        A court decree can lead to salary garnishment. Act now to settle the case in Lok Adalat and wipe your debt clean under legal supervision.
                                    </p>
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-4 rounded-xl hover:scale-105 transition-all shadow-lg text-sm uppercase tracking-widest">
                                        Expert Legal Help
                                    </Link>
                                    <p className="mt-4 text-[10px] text-gray-400 font-black uppercase tracking-tighter text-center">Trusted Advice for Your Financial Freedom.</p>
                                </div>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm text-left">
                                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#1F5EFF] mb-6 border-b border-blue-50 pb-4">Litigation Hub</h4>
                                <nav className="space-y-4">
                                    <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="block text-[11px] font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic uppercase tracking-tighter">Legal Notice Guide</Link>
                                    <Link href="/rbi-new-recovery-guidelines-july-2026" className="block text-[11px] font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic uppercase tracking-tighter">RBI Recovery Rules</Link>
                                    <Link href="/best-nbfc-loan-settlement-lawyer" className="block text-[11px] font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic uppercase tracking-tighter">NBFC Lawyer</Link>
                                    <Link href="/working-capital-loan-legal-help" className="block text-[11px] font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic uppercase tracking-tighter">Business Loan Case</Link>
                                    <Link href="/legal-help-for-non-closure-of-settled-loan" className="block text-[11px] font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic uppercase tracking-tighter">Non-Closure Rights</Link>
                                </nav>
                            </div>
                        </div>
                    </aside>

                </div>
            </main>
        </div>
    );
}
