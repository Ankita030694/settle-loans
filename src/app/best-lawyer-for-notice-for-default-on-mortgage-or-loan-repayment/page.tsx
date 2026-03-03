import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileShield, faScaleBalanced, faShieldHalved, faEnvelopeOpenText, faLandmark, faHandHoldingDollar, faCircleExclamation, faGavel, faBriefcase, faStar, faHandshakeSimple } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Best Lawyer for Notice for Default on Mortgage or Loan Repayment | Legal Help",
    description: "Received a default notice on your mortgage? Get expert legal help. Best lawyer for loan repayment default notices in India. SARFAESI & Recall notice defense.",
    alternates: {
        canonical: "https://settleloans.in/best-lawyer-for-notice-for-default-on-mortgage-or-loan-repayment",
    },
};

export default function MortgageDefaultNoticePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/best-lawyer-for-notice-for-default-on-mortgage-or-loan-repayment#webpage",
                "url": "https://settleloans.in/best-lawyer-for-notice-for-default-on-mortgage-or-loan-repayment",
                "name": "Best Lawyer for Notice for Default on Mortgage or Loan Repayment India",
                "description": "Premium legal defense for borrowers who have received default notices for mortgage or business loans. Expert guidance on SARFAESI 13(2) and Recall notices.",
                "breadcrumb": { "@id": "https://settleloans.in/best-lawyer-for-notice-for-default-on-mortgage-or-loan-repayment#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/best-lawyer-for-notice-for-default-on-mortgage-or-loan-repayment#breadcrumb",
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
                        "name": "Mortgage Default Notice Lawyer",
                        "item": "https://settleloans.in/best-lawyer-for-notice-for-default-on-mortgage-or-loan-repayment"
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/best-lawyer-for-notice-for-default-on-mortgage-or-loan-repayment#article",
                "headline": "Received a Mortgage Default Notice? Here is Your Comprehensive Legal Defense Guide",
                "description": "Expert insights on how to legally respond to bank default notices, challenge NPA classification, and prevent property foreclosure in India.",
                "author": {
                    "@type": "Organization",
                    "name": "SettleLoans Legal Expert Team"
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
                "mainEntityOfPage": { "@id": "https://settleloans.in/best-lawyer-for-notice-for-default-on-mortgage-or-loan-repayment#webpage" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/best-lawyer-for-notice-for-default-on-mortgage-or-loan-repayment#product",
                "name": "Mortgage Foreclosure Legal Defence",
                "description": "Defense services for borrowers facing SARFAESI proceedings and mortgage loan default notices.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "1150"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Vikram Singh" },
                        "datePublished": "2024-02-15",
                        "reviewBody": "A 13(2) notice was the scariest thing for my family. The lawyers here drafted a response that forced the bank to correct my interest rates and give me time.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Ananya Reddy" },
                        "datePublished": "2024-01-05",
                        "reviewBody": "Professional mortgage defense. They know exactly how the banks operate and where they make technical mistakes in notices.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://settleloans.in/best-lawyer-for-notice-for-default-on-mortgage-or-loan-repayment#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is a 13(2) notice under the SARFAESI Act?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A 13(2) notice is a 'Demand Notice' issued by a bank after a loan account is classified as NPA. It gives the borrower 60 days to pay the entire outstanding amount, failing which the bank can take possession of the mortgage property."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How should I respond to a bank's default notice for my mortgage?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The response must be a formal legal objection under Section 13(3A) of the SARFAESI Act. It should challenge the accuracy of the debt, the legality of the NPA classification, and any procedural lapses by the bank."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can a lawyer stop a bank from taking possession of my house?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, by filing a Securitization Application in the DRT. A lawyer can obtain a stay on the possession notice if there are valid grounds of dispute or if the bank hasn't followed the law's strict procedures."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is a 'Recall Notice' for a loan?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A recall notice is a formal letter where the bank demands the immediate repayment of the entire loan principal plus interest, usually because of a default in EMI or a breach of loan terms."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I challenge my account being marked as NPA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely. NPA classification must follow strict RBI guidelines regarding the 90-day period and specific criteria. If the bank missed these rules, the entire recovery process can be declared illegal."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What happens if I ignore a default notice?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Ignoring it is dangerous. After the notice period expires, the bank gains the right to issue a 13(4) possession notice and eventually auction your property without going to court."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How much time do I have after receiving a default notice?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Under SARFAESI, you have 60 days from the date of the notice. For non-SARFAESI notices, the timeline depends on the specific contract, but usually ranges from 7 to 30 days."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can the bank send a notice if I have only missed one EMI?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Banks often send simple reminder notices for one EMI. However, for a formal recall or SARFAESI notice, the account usually needs to be in 'default' for at least 90 days."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the importance of a Section 13(3A) representation?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "It is your mandatory right to object. The bank is legally bound to reply to your representation within 15 days. If they fail to reply or give an unsatisfactory reply, it becomes a ground for staying their further actions in the DRT."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Should I hire a lawyer even for a preliminary notice?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. A well-drafted legal reply to even a preliminary notice shows the bank that you are aware of your rights, which often makes them more willing to discuss a restructuring or settlement."
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
                            Immediate Defense Response
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                            Best Lawyer for Notice for Default <br className="hidden md:block" /> on Mortgage or Loan Repayment
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-4xl mx-auto leading-[1.2] font-normal">
                            Received a 13(2) or Recall notice? Protect your property and business with India's most aggressive mortgage defense experts. We turn the tide in your favor.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Stop Bank High-Handedness
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
                                <li className="font-bold text-[#1A1A1A]" aria-current="page">
                                    Mortgage Default Notice Defense
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">

                    {/* Left Column: TOC */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative border-r border-[#DEDEDE] pr-6 text-sm">
                        <TableOfContents
                            items={[
                                { id: "intro-mortgage-default", title: "Mortgage Default Realities" },
                                { id: "anatomy-13-2-notice", title: "Anatomy of a 13(2) Notice" },
                                { id: "responding-to-recall", title: "Responding to Recall Notices" },
                                { id: "challenging-npa", title: "Challenging NPA Status" },
                                { id: "wrongful-notice-remedies", title: "Wrongful Notice Remedies" },
                                { id: "foreclosure-defense", title: "Foreclosure Defense Guide" },
                                { id: "section-17-application", title: "Section 17 DRT Application" },
                                { id: "restructuring-negotiation", title: "Negotiating Restructuring" },
                                { id: "secured-vs-unsecured", title: "Secured vs Unsecured Rules" },
                                { id: "legal-harassment-redress", title: "Harassment Redressal" },
                                { id: "credit-score-impact", title: "Credit Score & Legal Status" },
                                { id: "delay-condonation", title: "Condonation of Delay" },
                                { id: "success-case-studies", title: "Success Stories" },
                                { id: "expert-defense", title: "Why Expert Defense?" },
                                { id: "final-steps", title: "Next Defensive Steps" },
                                { id: "faqs-mortgage", title: "Property Defense (FAQs)" }
                            ]}
                        />
                    </aside>

                    {/* Middle Column: Main Content */}
                    <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[#1A1A1A]">

                        <section id="intro-mortgage-default" className="scroll-mt-32 mb-16">
                            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] mb-8 leading-tight">
                                Mortgage Default Notices: <span>Take Command of Your Legal Rights</span>
                            </h2>
                            <div className="bg-white rounded-2xl p-8 border-l-8 border-[#1F5EFF] shadow-sm relative overflow-hidden bg-gray-50/50">
                                <p className="text-xl leading-relaxed mb-6 font-medium">
                                    Receiving a default notice for a mortgage is not just a financial notification; it is the beginning of a legal battle for your home, your office, or your industrial land.
                                </p>
                                <p className="text-lg leading-relaxed mb-6">
                                    Whether it is a preliminary recall notice or a formal demand under Section 13(2) of the SARFAESI Act, the bank's objective is clear: to liquidate your assets to recover their dues. However, the law provides a robust shield to borrowers who act timely and decisively. A bank's power is not absolute; it is bounded by the strict guidelines of the RBI and the procedural mandates of the Indian parliament.
                                </p>
                                <p className="text-lg leading-relaxed mb-4">
                                    Most borrowers make the mistake of waiting until the final eviction notice. By then, the legal options are limited and expensive. The best time to hire a lawyer is the moment you receive the first paper. By building a defense early, you can challenge the very foundation of the bank's claim, from the interest calculation to the legality of the NPA classification.
                                </p>
                                <div className="mt-8 flex items-center gap-4 text-sm font-black uppercase text-[#1F5EFF]">
                                    <FontAwesomeIcon icon={faCircleExclamation} />
                                    <span>Time is the most critical factor in mortgage defense</span>
                                </div>
                            </div>
                        </section>

                        <section id="anatomy-13-2-notice" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-8">The Anatomy of a 13(2) Notice under SARFAESI</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The Section 13(2) notice is the nuclear option for banks in India. It is a demand notice that declares you a defaulter and gives you exactly sixty days to clear the entire debt. If you fail to do so, the bank bypasses the normal court system and moves directly to take possession of your secured assets.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                                <div className="bg-white p-6 rounded-xl border border-[#DEDEDE] shadow-sm border-t-4 border-t-[#1F5EFF]">
                                    <h5 className="font-bold mb-3">What the Notice Must Include</h5>
                                    <ul className="text-sm space-y-2 opacity-80">
                                        <li>• Exact bifurcation of principal and interest.</li>
                                        <li>• Date of NPA classification.</li>
                                        <li>• List of all secured properties.</li>
                                        <li>• Right of the borrower to make representation.</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-[#DEDEDE] shadow-sm border-t-4 border-t-[#1F5EFF]">
                                    <h5 className="font-bold mb-3">Critical Deadlines</h5>
                                    <ul className="text-sm space-y-2 opacity-80">
                                        <li>• 15 Days: Time for bank to reply to your objection.</li>
                                        <li>• 60 Days: Total time to pay before 13(4) action.</li>
                                        <li>• 45 Days: Time to file SA in DRT after 13(4).</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="text-lg leading-relaxed mb-6">
                                A skilled lawyer will analyze the 13(2) notice with a fine-tooth comb. If the bank has included penal interest in the principal demand, or if they have not properly described the boundaries of the property, the notice can be set aside by the DRT.
                            </p>
                        </section>

                        <section id="responding-to-recall" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-8">How to Respond to a Bank Recall Notice</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                A 'Recall Notice' often precedes a formal SARFAESI action. It is the bank saying, "We no longer trust you to pay in installments; give us the whole amount now." This is a high pressure tactic, but it is also an opportunity for negotiation.
                            </p>
                            <p className="text-lg leading-relaxed mb-6 font-bold">
                                The response to a recall notice should not be a plea for mercy. It should be a legal counter blast.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                We draft responses that highlight the illegalities in the bank's own operations. Did they fail to provide you with the statement of accounts despite multiple requests? Have they misapplied your last few EMIs? In our responses, we create a legal record of 'Bank Default', which serves as a powerful defense if the case goes to the High Court later.
                            </p>
                        </section>

                        <section id="challenging-npa" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-8">Challenging the NPA Classification legally</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                NPA classification is the 'jurisdictional fact' that allows a bank to use SARFAESI. If the classification is wrong, the entire recovery action is void from its inception. The RBI's Master Circular on IRAC norms is the bible for this defense.
                            </p>
                            <div className="bg-[#1A1A1A] text-white p-8 rounded-2xl mb-8 relative">
                                <FontAwesomeIcon icon={faScaleBalanced} className="absolute top-6 right-6 opacity-20 text-4xl" />
                                <h3 className="text-xl font-bold mb-4">The 90-Day Rule and Beyond</h3>
                                <p className="mb-4 opacity-90 leading-relaxed">Many banks mark an account as NPA prematurely. We have handled cases where the bank counted holiday periods or failed to consider 'grace periods' mandated for MSMEs or agricultural loans. We also look for 'Debit Freeze' actions that prevented the borrower from paying, effectively creating a 'Self Inflicted Default' by the bank.</p>
                                <p className="text-[#1F5EFF] font-bold">Result: If we prove the NPA status is wrong, the bank has to restart the entire notice process, giving you months of extra time.</p>
                            </div>
                        </section>

                        <section id="wrongful-notice-remedies" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-8">Legal Remedies for Wrongful or Malicious Notices</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Is the bank sending notices to your relatives or your office to shame you? Is the amount claimed double what you actually owe? These are not just mistakes; they can be grounds for legal action against the bank.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                You can file a 'Suit for Damages' or a 'Writ Petition' if the bank's notices violate your right to dignity or if they are based on fraudulent accounting. In some cases, we move the Consumer Forum to seek compensation for the mental agony caused by wrongful mortgage default notices. When you fight back with the best lawyer, the bank's attitude changes from aggressive recovery to respectful settlement.
                            </p>
                        </section>

                        <section id="foreclosure-defense" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-8">Mortgage Foreclosure Defense Strategy</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The ultimate goal of defense is to protect the asset. We use a multi-pronged strategy:
                            </p>
                            <div className="space-y-4 mb-8">
                                <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                                    <div className="w-10 h-10 bg-[#1F5EFF] text-white rounded-full flex items-center justify-center shrink-0 font-bold">1</div>
                                    <div>
                                        <h6 className="font-bold mb-1">Stay on Auction</h6>
                                        <p className="text-sm opacity-70 leading-relaxed">Filing an urgent application in the DRT to stop the public sale of the house or land.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                                    <div className="w-10 h-10 bg-[#1F5EFF] text-white rounded-full flex items-center justify-center shrink-0 font-bold">2</div>
                                    <div>
                                        <h6 className="font-bold mb-1">Challenging Valuation</h6>
                                        <p className="text-sm opacity-70 leading-relaxed">Banks often undervalue properties to ensure a quick sale. We bring independent valuers to prove the real market value, forcing the court to stop the 'undervalued' auction.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                                    <div className="w-10 h-10 bg-[#1F5EFF] text-white rounded-full flex items-center justify-center shrink-0 font-bold">3</div>
                                    <div>
                                        <h6 className="font-bold mb-1">Right of Redemption</h6>
                                        <p className="text-sm opacity-70 leading-relaxed">Under Section 60 of the Transfer of Property Act, you have a right to get your property back by paying the dues any time before the final transfer of title. We help you exercise this right effectively.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="section-17-application" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mt-16 mb-8">Securitization Application (SA) in the DRT</h2>
                            <p className="mb-6 leading-relaxed text-lg">
                                Once the bank issues a 13(4) notice (physical possession), the only legal forum that matters is the Debt Recovery Tribunal. The Section 17 application is your primary weapon. It allows you to challenge every single step the bank took, from the 13(2) notice to the newspaper advertisements.
                            </p>
                            <p className="mb-6 leading-relaxed text-lg">
                                Our legal team specializes in drafting 'Water-Tight' SAs. We include grounds like 'Non-Disclosure of Payments', 'Improper Service of Notice', and 'Violation of the Security Interest Rules, 2002'. A successful SA can drag on for months or years, during which the bank cannot legally sell your property. This leverage is what enables us to negotiate incredible One-Time Settlements (OTS) for our clients.
                            </p>
                        </section>

                        <section id="restructuring-negotiation" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mt-16 mb-8">Negotiating Mortgage Restructuring Post-Notice</h2>
                            <p className="mb-6 text-lg">
                                Just because you received a notice doesn't mean you have to lose the property. Many banks are open to 'Restructuring' if you can present a viable repayment plan. However, they won't take you seriously if you don't have a legal specialist by your side.
                            </p>
                            <p className="mb-6 text-lg">
                                We act as your 'Negotiation Shield'. We present a proposal that includes a request for extension of the loan tenure, reduction in EMI amount, or a period of moratorium. By combining this with our ongoing litigation in the DRT, we create a 'Carrot and Stick' situation where the bank finds it much more profitable to restructure than to continue fighting a losing battle in court.
                            </p>
                        </section>

                        <section id="secured-vs-unsecured" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mt-16 mb-8">Secured vs Unsecured Default Notices: Know the Difference</h2>
                            <p className="mb-6 text-lg">
                                If your loan is 'Unsecured' (like a personal loan or credit card), the bank has NO right to issue a SARFAESI notice. They must go through the civil courts or arbitration. If an unsecured lender is threatening you with property attachment through a simple letter, they are committing a legal fraud.
                            </p>
                            <p className="mb-6 text-lg">
                                But for 'Secured' mortgage loans, the bank has the teeth of the SARFAESI Act. Our defense changes based on the nature of the security. For example, 'Agricultural Land' is exempt from SARFAESI under Section 31(i). Many borrowers don't know this, and banks often illegally attach agricultural land. We identify these exemptions to stop the recovery instantly.
                            </p>
                        </section>

                        <section id="legal-harassment-redress" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mt-16 mb-8">Dealing with Bank Harassment and Recovery Agents</h2>
                            <p className="mb-6 text-lg">
                                A default notice doesn't give the bank the right to harass you. The RBI's Code of Commitment to Customers and the guidelines for recovery agents are very clear: No calls at odd hours, no visits without notice, and no uncivilized behavior.
                            </p>
                            <p className="mb-6 text-lg">
                                If you are being harassed, our lawyers help you file an 'Injunction Suit' or a complaint with the Banking Ombudsman. We also help you file a police complaint if agents use threats or physical force. When the bank sees that you have a legal team ready to sue them for crores in damages, the harassment stops immediately.
                            </p>
                        </section>

                        <section id="credit-score-impact" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mt-16 mb-8">Managing Credit Score Impact and Future Borrowing</h2>
                            <p className="mb-6 text-lg text-gray-700">
                                A default notice is a major red flag on your CIBIL report. However, if the notice itself was wrongful, you have the right to have your credit record corrected. We work with the credit bureaus and use court orders to force the removal of 'defective' NPA markers. This preserves your ability to do business and borrow in the future after the current dispute is settled.
                            </p>
                        </section>

                        <section id="delay-condonation" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mt-16 mb-8">What if I Missed the 60-Day Deadline?</h2>
                            <p className="mb-6 text-lg italic">"Is it too late to fight?"</p>
                            <p className="mb-6 text-lg">
                                No. Even if the 60 days have passed, you can still file for 'Condonation of Delay' in the DRT. If your reason for delay is valid (medical emergency, lack of proper notice service, etc.), the court can allow you to raise your defenses. Even at the stage of the final auction notice, a Writ Petition in the High Court under Article 226 can provide emergency relief if there's a violation of fundamental justice.
                            </p>
                        </section>

                        <section id="success-case-studies" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mt-16 mb-12 text-center">Mortgage Defense Victories</h2>
                            <div className="grid md:grid-cols-2 gap-8 not-prose">
                                {[
                                    {
                                        name: "Mohit G.",
                                        loc: "Noida",
                                        type: "Residential Flat",
                                        outcome: "13(2) Notice Quashed",
                                        story: "Received a notice for 85 Lakhs. I consulted the SettleLoans panel. They found that the bank had included penal interest from the last 2 years in the total principal. The High Court set aside the notice, saving my home from an immediate auction."
                                    },
                                    {
                                        name: "Suresh P.",
                                        loc: "Bangalore",
                                        type: "Commercial Shop",
                                        outcome: "Stay on Possession",
                                        story: "The bank agents arrived for possession. My lawyer filed an urgent SA in the DRT within 2 hours. We proved that the notice was never served to my co-borrower. The judge granted a stay on the spot."
                                    },
                                    {
                                        name: "Deepa J.",
                                        loc: "Ahmedabad",
                                        type: "Industrial Shed",
                                        outcome: "OTS with 40% Waiver",
                                        story: "The bank was adamant on recovery. My lawyer challenged the valuation of the property which was done by the bank at half price. Faced with a long legal battle, the bank agreed to a 40% waiver and let me sell the property at market rate myself."
                                    },
                                    {
                                        name: "Arjun K.",
                                        loc: "Hyderabad",
                                        type: "Education Loan Mortgage",
                                        outcome: "Account Regularized",
                                        story: "They marked my daughter's education loan mortgage as NPA during the moratorium period. It was a clear violation. We sued the bank for harassment. Not only was the NPA status removed, but the bank also had to pay us a settlement for the error."
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

                        <section id="expert-defense" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mt-16 mb-8">Why Hire a Specialized Mortgage Defense Lawyer?</h2>
                            <p className="mb-6 text-lg">General civil lawyers don't understand the complexities of SARFAESI and RBI guidelines. You need a team that spends every day fighting banks in the DRT. We offer:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-start gap-4">
                                    <FontAwesomeIcon icon={faBriefcase} className="text-[#1F5EFF] text-xl mt-1" />
                                    <p className="text-sm font-bold">Deep litigation experience in DRT and High Court banking benches.</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-start gap-4">
                                    <FontAwesomeIcon icon={faHandshakeSimple} className="text-[#1F5EFF] text-xl mt-1" />
                                    <p className="text-sm font-bold">Strategic and aggressive negotiation with bank managers and ARCs.</p>
                                </div>
                            </div>
                        </section>

                        <section id="faqs-mortgage" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mt-16 mb-8">Property Defense Expert Insights (FAQs)</h2>
                            <div className="space-y-4 not-prose">
                                {[
                                    { q: "Can a bank take my house without a court order?", a: "Yes, under the SARFAESI Act, banks can take possession of a secured asset without a court order if they follow the notice procedure under Section 13(2) and 13(4). However, you can challenge this action in the DRT to stop them." },
                                    { q: "What should be the first step after receiving a 13(2) notice?", a: "The first step is to file a formal 'Representation and Objection' within 60 days. This is a legal requirement. If you don't file this, you lose many of your rights to challenge the bank later in the DRT." },
                                    { q: "Is a 'Recall Notice' legally binding?", a: "Yes, once a bank recalls a loan, the entire amount becomes due immediately. It is usually the first sign of a coming lawsuit or SARFAESI action. It should be replied to by a lawyer to create a record of your dispute." },
                                    { q: "Can agricultural land be taken by the bank under SARFAESI?", a: "No. Section 31(i) of the SARFAESI Act specifically exempts agricultural land from being seized. If a bank has issued a notice for agricultural land, it is legally invalid and can be quashed instantly." },
                                    { q: "Can I sell my property after receiving a default notice?", a: "Once a 13(2) notice is issued, Section 13(13) prohibits the borrower from selling or transferring the asset without the bank's written consent. However, we can often negotiate with the bank to let you sell it at market rate to settle the dues." },
                                    { q: "What is an 'Arbitration' notice for a loan?", a: "Many lenders (especially NBFCs) use arbitration to get a money decree against you. While it doesn't lead to property possession directly, the decree can be used later to attach your property. You MUST participate in arbitration to defend yourself." },
                                    { q: "How much does a DRT stay cost?", a: "The costs vary based on the value of the property and the complexity of the grounds. However, compared to the total loss of the property, the legal fee is a small investment in protecting your net worth." },
                                    { q: "Can my property be auctioned if I file a case in the DRT?", a: "If the DRT grants a 'Stay Order', the auction cannot proceed. If the stay is not granted, the bank may proceed, but the sale will be subject to the final outcome of your case. Our goal is always to get the stay first." },
                                    { q: "Can a co-borrower or guarantor defend themselves separately?", a: "Yes. Often the bank fails to serve proper notice to a guarantor. This procedural lapse by the bank can be used to protect the guarantor's property even if the main borrower is in default." },
                                    { q: "Why hire SettleLoans for mortgage default defense?", a: "We provide high impact legal defense. We don't just file papers; we build a strategic narrative that forces the bank to the negotiating table. We have saved thousands of homes and businesses through aggressive litigation." }
                                ].map((faq, i) => (
                                    <details key={i} className="group bg-white border border-[#DEDEDE] rounded-2xl overflow-hidden hover:shadow-lg transition-all">
                                        <summary className="flex justify-between items-center p-6 cursor-pointer font-black text-[#1A1A1A] list-none bg-white">
                                            <span className="text-lg">{i + 1}. {faq.q}</span>
                                            <span className="bg-gray-100 p-2 rounded-full transition-transform group-open:rotate-180">
                                                <svg className="w-5 h-5 text-[#1F5EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                            </span>
                                        </summary>
                                        <div className="px-6 pb-6 text-[#1A1A1A] opacity-90 leading-relaxed border-t border-gray-50 pt-6">
                                            {faq.a}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </section>

                        <section id="final-steps" className="scroll-mt-32 mt-20">
                            <div className="bg-[#1F5EFF] rounded-2xl p-12 text-white text-center shadow-2xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-black opacity-10"></div>
                                <h2 className="text-4xl md:text-5xl font-black mb-6 relative z-10">Save Your Assets Today</h2>
                                <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto relative z-10">
                                    A default notice is the beginning of the end ONLY if you do not fight back. Let our elite legal panel take over your defense.
                                </p>
                                <Link href="/contact" className="inline-block bg-white text-[#1F5EFF] font-black py-5 px-14 rounded-[10px] hover:scale-105 transition-all shadow-xl text-xl relative z-10">
                                    Request Urgent Defense Review
                                </Link>
                                <p className="mt-8 text-xs opacity-60 relative z-10 uppercase font-black">Secure & Private Legal Channel</p>
                            </div>
                        </section>

                        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
                            <p className="text-gray-400 text-sm italic">Legal Notice: The information provided on this page does not constitute legal advice. SettleLoans acts as a consultancy that engages with a network of qualified advocates. All legal actions must be discussed with a certified practitioner in your jurisdiction.</p>
                        </div>

                        {/* Mobile Footer CTA */}
                        <div className="lg:hidden mt-16 mb-8">
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#1F5EFF]/20">
                                <div className="bg-[#1F5EFF] p-6 text-center text-white">
                                    <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter">Emergency Mortgage Shield</h3>
                                    <p className="opacity-90 text-sm">Facing foreclosure? Connect with experts who specialize in staying bank auctions.</p>
                                </div>
                                <div className="p-8 text-center text-white">
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-xl hover:scale-105 transition-all shadow-lg text-lg">
                                        Start Your Defense
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Right Column: CTA & Related Pages */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-24 space-y-8">

                            {/* CTA Container */}
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                                <div className="bg-[#1F5EFF] p-4 text-center">
                                    <h3 className="text-lg font-black text-white flex items-center justify-center gap-2">
                                        <FontAwesomeIcon icon={faFileShield} />
                                        Notice Defense
                                    </h3>
                                </div>
                                <div className="p-8 text-center">
                                    <p className="mb-8 text-sm text-[#DEDEDE] opacity-90 leading-relaxed font-extrabold uppercase tracking-tight">
                                        Reply to your 13(2) notice with elite legal backing.
                                    </p>
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg">
                                        Get Free Analysis
                                    </Link>
                                    <div className="mt-6 flex flex-col items-center gap-2">
                                        <div className="flex -space-x-2">
                                            {[1, 2, 3, 4].map(i => <div key={i} className="w-6 h-6 rounded-full bg-gray-600 border border-[#2E2E2E]"></div>)}
                                        </div>
                                        <p className="text-[10px] text-[#DEDEDE]/50 font-bold uppercase tracking-widest">Over 5000+ Notices Challenged</p>
                                    </div>
                                </div>
                            </div>

                            {/* Related Pages Container */}
                            <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2">Related Defense</h3>
                                <ul className="space-y-4 text-sm font-bold">
                                    <li>
                                        <Link href="/best-lawyer-for-msme-business-loan-dispute" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            MSME Loan Defense
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/best-lawyer-for-loan-settlement-by-drt" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            DRT Settlement Expertise
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/best-lawyer-for-consortium-loan-recovery-defence" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            Consortium Defense
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/loan-settlement-lawyers" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            Our Full Legal Panel
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
