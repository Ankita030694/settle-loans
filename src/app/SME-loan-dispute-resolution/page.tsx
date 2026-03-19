import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import ReviewSnippets from "@/components/ReviewSnippets";

export const metadata: Metadata = {
    title: "SME Loan Dispute Resolution India | MSME Samadhan & Legal Defense",
    description: "Comprehensive guide to SME loan dispute resolution in India. Learn about MSME Samadhan, MSEFC conciliation, DRT litigation, and legal remedies for business owners.",
    alternates: {
        canonical: "https://settleloans.in/SME-loan-dispute-resolution",
    },
};

export default function SMELoanDisputePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/SME-loan-dispute-resolution#webpage",
                "url": "https://settleloans.in/SME-loan-dispute-resolution",
                "name": "SME Loan Dispute Resolution India | MSME Samadhan & Legal Defense",
                "description": "Expert legal guide on resolving SME and MSME loan disputes through formal and informal mechanisms in India.",
                "breadcrumb": { "@id": "https://settleloans.in/SME-loan-dispute-resolution#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/SME-loan-dispute-resolution#breadcrumb",
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
                        "name": "SME Loan Dispute Resolution",
                        "item": "https://settleloans.in/SME-loan-dispute-resolution"
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/SME-loan-dispute-resolution#article",
                "headline": "SME Loan Dispute Resolution: Protecting Your MSME from Predatory Recovery",
                "description": "Navigate the complex landscape of SME loan disputes in India with our comprehensive guide on MSME Samadhan, DRT, and legal settlements.",
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
                "mainEntityOfPage": { "@id": "https://settleloans.in/SME-loan-dispute-resolution#webpage" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/SME-loan-dispute-resolution#product",
                "name": "MSME Legal Defense Services",
                "description": "Professional legal assistance for MSMEs facing loan disputes, recovery actions, and NPA classifications.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "1250"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Anil Mehta" },
                        "datePublished": "2024-02-15",
                        "reviewBody": "SettleLoans saved my garment manufacturing unit from an unfair DRT proceeding. Their understanding of MSMED Act is unmatched.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Sunit Kumar" },
                        "datePublished": "2024-03-01",
                        "reviewBody": "The MSME Samadhan advice provided here helped us recover pending payments and settle our bank dues peacefully.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://settleloans.in/SME-loan-dispute-resolution#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is the primary mechanism for SME loan dispute resolution in India?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "For MSMEs, the primary mechanisms include the MSME Samadhan portal for payment delays, the Micro and Small Enterprise Facilitation Council (MSEFC) for conciliation and arbitration, and the Debt Recovery Tribunal (DRT) for bank-related loan defaults."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can an MSME file a case against a bank for wrongful NPA classification?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, MSMEs can challenge wrongful NPA classification in the Debt Recovery Tribunal by filing a Securitisation Application (SA) under Section 17 of the SARFAESI Act, especially if the bank violated RBI Pru-norms."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does the MSME Samadhan portal help in debt management?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "MSME Samadhan allows businesses to file cases against buyers who delay payments. Recovering these dues often provides the liquidity needed to clear existing bank loans and avoid default."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is mediation mandatory before DRT proceedings for MSMEs?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "While not strictly mandatory in all cases, courts and tribunals increasingly encourage mediation under Section 89 of the CPC to reach an amicable settlement and avoid long drawn litigation."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the role of MSEFC in MSME disputes?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The MSEFC acts as a facilitator for conciliation and arbitration. Its decisions, known as arbitral awards, have the same weight as a court decree and are legally binding."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can a stay order be obtained for MSME properties under SARFAESI?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, a Presiding Officer at the DRT can grant a stay on auction proceedings if the MSME borrower proves procedural lapses by the bank or shows a valid prima-facie case for settlement."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are the benefits of arbitration for SME loan disputes?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Arbitration is faster than civil courts, confidential, and allows for experts in commercial law to decide the matter, which is often more beneficial for complex business loan structures."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does the MSMED Act 2006 provide protection against recovery agents?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, read with RBI guidelines, the MSMED Act principles ensure that business owners are treated with dignity. Harassment by recovery agents can be reported to the Banking Ombudsman or the MSEFC."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can an SME settle a loan for less than the total outstanding amount?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, One-Time Settlement (OTS) schemes are a common way for SMEs to settle disputes. Banks often agree to take a 'haircut' on the principal and interest to close a stressed account."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What happens if an MSEFC award is not followed by the buyer?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "If a buyer does not honor an MSEFC award, the MSME can move the civil court for execution of the award, similar to how a court decree is enforced through property attachment or other means."
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

                <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
                    <div className="max-w-5xl mx-auto text-center relative z-10">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
                            MSME Legal Protection 2024
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight uppercase">
                            SME Loan <br /> Dispute <span className="text-[#1F5EFF]">Resolution</span>
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
                            Protect your business legacy. From MSME Samadhan to DRT defense, we help small and medium enterprises navigate the complex maze of loan disputes with authority and precision.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Protect My Business
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Breadcrumb */}
                <div className="w-full bg-white border-b border-[#DEDEDE] sticky top-0 z-40">
                    <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
                        <nav aria-label="Breadcrumb">
                            <ol className="flex items-center space-x-3 text-sm font-black text-[#747474]">
                                <li>
                                    <Link href="/" className="hover:text-[#1F5EFF] transition-colors uppercase tracking-widest text-[10px]">Home</Link>
                                </li>
                                <li>
                                    <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
                                </li>
                                <li className="text-[#2E2E2E] uppercase tracking-widest text-[10px]" aria-current="page">
                                    SME Dispute Resolution
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>

                {/* 3-Column Layout */}
                <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">

                    {/* Left Column: TOC */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px]">
                        <div className="sticky top-32">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#1F5EFF] mb-8 pb-4 border-b-2 border-blue-50">Legal Framework</h3>
                            <TableOfContents
                                items={[
                                    { id: "msme-dispute-landscape", title: "Dispute Landscape" },
                                    { id: "msme-samadhan-portal", title: "MSME Samadhan" },
                                    { id: "msefc-role", title: "MSEFC Role" },
                                    { id: "drt-litigation-defense", title: "DRT Defense" },
                                    { id: "npa-challenge-strategies", title: "NPA Challenges" },
                                    { id: "arbitration-mechanisms", title: "Arbitration" },
                                    { id: "mediation-advantages", title: "Mediation" },
                                    { id: "ots-negotiation", title: "OTS Negotiation" },
                                    { id: "legal-rights-msme", title: "MSME Rights" },
                                    { id: "pre-litigation-shield", title: "Litigation Shield" },
                                    { id: "case-victories", title: "Case Victories" },
                                    { id: "faqs", title: "SME FAQs" }
                                ]}
                            />
                        </div>
                    </aside>

                    {/* Middle Column: Content */}
                    <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">

                        <section id="msme-dispute-landscape" className="scroll-mt-32 mb-20">
                            <h2 className="text-4xl md:text-5xl font-black text-[#2E2E2E] mb-10 leading-[1.1] uppercase italic tracking-tighter underline decoration-[#1F5EFF] decoration-8 underline-offset-[12px]">
                                The MSME Dispute Landscape: <br /> <span className="text-[#1F5EFF]">A Structural Crisis</span>
                            </h2>
                            <p className="text-xl font-medium mb-8 leading-relaxed">
                                Small and Medium Enterprises (SMEs) are the backbone of the Indian economy, yet they face a structural disadvantage when it comes to financial disputes. Unlike large corporations with dedicated legal departments, an MSME owner often finds themselves trapped between delayed payments from buyers and aggressive recovery actions from banks. This "Liquidity Squeeze" is the primary driver of almost 80% of SME loan defaults in India.
                            </p>
                            <p className="mb-8">
                                The legal landscape for SME loan dispute resolution is governed by multiple overlapping acts — primarily the MSMED Act 2006, the Recovery of Debts and Bankruptcy Act 1993, and the SARFAESI Act 2002. Navigating these requires more than just a lawyer; it requires a strategic understanding of how one act can be used to mitigate the force of another. For instance, a pending case in the MSME Samadhan can be used as a vital piece of evidence in a DRT stay application to prove that the default was not willful but circumstantial.
                            </p>
                            <div className="bg-[#2E2E2E] p-10 rounded-[32px] text-white shadow-2xl relative overflow-hidden my-12">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#1F5EFF]/20 rounded-full -mr-32 -mt-32 blur-[80px]"></div>
                                <h3 className="text-2xl font-black mb-6 relative z-10 text-blue-400">The SME Default Paradox</h3>
                                <p className="text-lg opacity-80 leading-relaxed relative z-10 font-medium">
                                    Statistics show that most MSME defaults occur because of 'Institutional Delay'. When a government department or a large corporate buyer delays a payment beyond 45 days, the MSME's working capital cycle breaks. The bank, however, follows the rigorous 90-day NPA rule. This 45-day gap is where most successful businesses are destroyed. Our dispute resolution strategy recognizes this paradox and uses it to force banks into more realistic repayment structures.
                                </p>
                            </div>
                        </section>

                        <section id="msme-samadhan-portal" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-widest">
                                MSME Samadhan: The Digital Battleground for Payments
                            </h2>
                            <p className="mb-8 text-lg">
                                The MSME Samadhan portal is a revolutionary initiative by the Ministry of MSME that gives power back to the small business owner. It is designed to tackle the menace of delayed payments. Under the MSMED Act, buyers are legally obligated to pay for goods or services within 45 days. If they fail, they must pay compound interest at three times the bank rate notified by the RBI.
                            </p>
                            <p className="mb-8">
                                Filing a case on Samadhan is the first step in a larger dispute resolution strategy. Once a complaint is filed, it is monitored by the Micro and Small Enterprise Facilitation Council (MSEFC). This creates significant pressure on big buyers. For a business owner struggling with bank loans, the Samadhan portal is not just a recovery tool; it is a liquidity multiplier. We assist clients in drafting these complaints with technical precision, ensuring that the buyer has no 'Technical Loophole' to escape the payment liability.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 my-12">
                                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                    <h4 className="font-black text-blue-900 mb-3 uppercase text-xs">Requirement 01</h4>
                                    <p className="text-sm font-bold text-blue-800">Udyam Registration is mandatory. Without this, the MSMED Act's protective provisions cannot be invoked.</p>
                                </div>
                                <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                                    <h4 className="font-black text-green-900 mb-3 uppercase text-xs">Benefit 01</h4>
                                    <p className="text-sm font-bold text-green-800">Automatic right to interest at 3X the RBI rate. This often covers the interest you are paying to the bank.</p>
                                </div>
                            </div>
                        </section>

                        <section id="msefc-role" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                                The Role of MSEFC: Conciliation & Arbitration
                            </h2>
                            <p className="mb-8">
                                The Micro and Small Enterprise Facilitation Council (MSEFC) acts as a quasi-judicial body. Its unique feature is the mandatory two-stage process: <strong>Conciliation</strong> first, then <strong>Arbitration</strong>. This is highly effective because it prevents the 'Litigation Fatigue' associated with traditional courts.
                            </p>
                            <p className="mb-8">
                                If conciliation fails, the MSEFC either takes up the matter for arbitration itself or refers it to an institution providing alternative dispute resolution services. The arbitral award passed by the Council is final and can be executed like a decree of a civil court. For an SME in a loan dispute, an award from the MSEFC against a buyer can be presented to the bank as a 'Guaranteed Source of Inflow', which is often enough to stay a recovery action or negotiate an NPA reclassification to 'Standard'.
                            </p>
                            <blockquote className="my-12">
                                "The MSEFC process is a time-bound mechanism. Under Section 18 of the MSMED Act, the Council must decide the reference within 90 days. This speed is what saves MSMEs from being choked by debt."
                            </blockquote>
                        </section>

                        <section id="drt-litigation-defense" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase italic border-l-8 border-[#1F5EFF] pl-6">
                                DRT Litigation: Defending the Corporate Fort
                            </h2>
                            <p className="mb-8 text-lg">
                                When a business loan exceeds ₹20 Lakhs, the bank usually approaches the Debt Recovery Tribunal (DRT). For unsecured loans or smaller amounts, they may follow the civil route or use arbitration. However, the SARFAESI Act allows them to seize factory premises without court intervention if the loan is secured. This is where most SME owners panic.
                            </p>
                            <p className="mb-8">
                                Our defense in the DRT is built on 'Procedural Forensic'. We audit the bank's entire history with the borrower. Did they provide the mandatory '30-day notice'? Was the valuation of the collateral done by an independent valuer? Was the NPA classification done according to the latest RBI circulars? For many MSMEs, the bank fails to apply the 'Restructuring Guidelines' mandated for stressed MSME accounts. This failure is a lethal legal weapon that we use to obtain stays and protect the business premises from auction.
                            </p>
                        </section>

                        <section id="npa-challenge-strategies" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                                NPA Challenges: Technical Defense Strategies
                            </h2>
                            <p className="mb-8">
                                An account becoming an NPA (Non-Performing Asset) is often the beginning of the end for an SME. But NPA classification is not an absolute truth; it is a mathematical calculation governed by RBI Pru-norms. We have seen hundreds of cases where banks made errors in calculating the '90-day overdue' period, especially when dealing with OD (Overdraft) or CC (Cash Credit) accounts.
                            </p>
                            <p className="mb-8">
                                We challenge these classifications by submitting 'Fund Flow Audits'. If a bank credited a customer's payment to the wrong account or didn't account for a bill-discounting transaction correctly, the NPA tag is illegal. A 'Wrongful NPA' tag is a violation of the RBI's Master Circular, and the High Court can be moved to quash such a label, immediately freezing all recovery actions and restoring the business's credit standing.
                            </p>
                            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 my-12">
                                <h4 className="text-xl font-black text-blue-900 mb-6">Masterclass: Challenging the Reserve Price</h4>
                                <p className="text-sm text-blue-800 leading-relaxed mb-4">
                                    Banks often undervalue SME properties to ensure a quick sale at auction. This is illegal. Under Rule 8 of the Security Interest Rules, the bank must obtain a fair valuation.
                                </p>
                                <p className="text-sm text-blue-800 leading-relaxed">
                                    We bring in independent, government-approved valuers to prove the true market value. If the bank's reserve price is significantly lower, we move the DRT to set aside the auction notice. This buy-time is then used to find a private buyer or to pay off the dues through a settlement, ensuring the business owner gets the true value for their lifelong assets.
                                </p>
                            </div>
                        </section>

                        <section id="arbitration-mechanisms" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase tracking-[0.2em] decoration-[#1F5EFF] underline underline-offset-8">
                                Institutional Arbitration: The SME's Silent Shield
                            </h2>
                            <p className="mb-8 text-lg">
                                For most SMEs, arbitration is a clause hidden in the fine print of a 50-page loan agreement. However, recent amendments to the Arbitration and Conciliation Act 1996, combined with the MSMED Act, have transformed arbitration into a potent tool for dispute resolution. Institutional arbitration, as opposed to ad-hoc arbitration, provides a structured environment where timelines are strictly adhered to.
                            </p>
                            <p className="mb-8">
                                In a loan dispute, the bank usually appoints its own arbitrator — a practice that has been heavily scrutinized and frequently set aside by the Supreme Court of India. We guide MSMEs in challenging such unilateral appointments. Under the principle of 'Neutrality of Arbitrators', we help businesses move the High Court to appoint an independent arbitrator. This change in the presiding officer often shifts the entire dynamic of the case, forcing the bank to move away from aggressive recovery and toward a more reasonable settlement.
                            </p>
                            <div className="bg-[#1F5EFF]/5 border-2 border-dashed border-[#1F5EFF]/20 p-10 rounded-[40px] my-12">
                                <h4 className="text-2xl font-black text-[#2E2E2E] mb-4 uppercase italic">Arbitration Strategy: The Counter-Claim</h4>
                                <p className="text-lg leading-relaxed text-gray-700">
                                    When a bank invokes arbitration for recovery, the SME shouldn't just defend; they should counter-attack. If the bank's delay in processing a restructuring request led to the business's downfall, that is a legitimate ground for a 'Counter-Claim' for damages. Effectively, you are telling the arbitrator: "I don't owe the bank money; the bank owes me for destroying my business through negligence." Even if the claim doesn't result in a payout, it creates a massive legal hurdle for the bank, making them much more willing to settle for a fraction of the original claim.
                                </p>
                            </div>
                            <p className="mb-8">
                                Furthermore, arbitration awards are essentially the same as court decrees. If an MSME wins an award against a debtor through the MSEFC or a private arbitration, it can be 'Set Off' against their bank dues. This is a critical legal maneuver that many general lawyers overlook. Our expertise lies in connecting these dots to provide a 360-degree protection shield for the business owner.
                            </p>
                        </section>

                        <section id="mediation-advantages" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                                Mediation: The Art of the Amicable Exit
                            </h2>
                            <p className="mb-8">
                                Mediation is often dismissed as a "soft" option, but in the world of high-stakes SME finance, it is a strategic masterstroke. Unlike a court room, which is binary (win/lose), mediation is multi-dimensional. It allows for creative solutions like 'Debt-Asset Swaps', 'Equity Conversions', or 'Balloon Payment Restructuring' that a judge or a DRT presiding officer does not have the power to order.
                            </p>
                            <p className="mb-8">
                                The Mediation Act 2023 has further strengthened this by making pre-litigation mediation a reality in many commercial disputes. For an MSME, mediation offers a safe space where they can admit financial distress without it being used against them as a 'Confession of Liability' in court. This confidentiality is the bedrock of our success in high-value business settlements. We provide the technical financial data that 'Neutral Mediators' need to convince bank representatives that a 50% settlement today is better than 10 years of litigation for 100%.
                            </p>
                            <div className="grid md:grid-cols-3 gap-8 my-12">
                                <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm text-center">
                                    <div className="text-3xl font-black text-[#1F5EFF] mb-2">90%</div>
                                    <div className="text-xs uppercase font-bold text-gray-400">Lower Legal Costs</div>
                                </div>
                                <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm text-center">
                                    <div className="text-3xl font-black text-green-500 mb-2">100%</div>
                                    <div className="text-xs uppercase font-bold text-gray-400">Confidentiality</div>
                                </div>
                                <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm text-center">
                                    <div className="text-3xl font-black text-purple-500 mb-2">60 Days</div>
                                    <div className="text-xs uppercase font-bold text-gray-400">Average Resolution</div>
                                </div>
                            </div>
                        </section>

                        <section id="ots-negotiation" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase italic underline decoration-blue-500">
                                The OTS Masterclass: Winning the 'One Time Settlement'
                            </h2>
                            <p className="mb-8 text-lg">
                                For a bank, a 'One Time Settlement' (OTS) is a business decision based on the 'Net Present Value' of the recovery. If they believe that fighting you in the DRT for 5 years will cost them more than taking a 40% loss today, they will settle. The key to winning an OTS is proving your 'Inability to Pay' while simultaneously proving the bank's 'Inability to Recover'.
                            </p>
                            <p className="mb-8">
                                We help MSMEs prepare 'Impairment Reports'. These reports go beyond standard balance sheets to show the underlying rot in the assets, the obsolescence of the machinery, and the legal encumbrances on the property. When a bank's credit committee sees that their secured asset is actually a white elephant, their willingness to accept a settlement skyrockets.
                            </p>
                            <div className="bg-gray-900 p-10 rounded-[40px] text-white my-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
                                <h4 className="text-2xl font-black mb-6 text-blue-400 uppercase tracking-widest">The 'Willingness vs Ability' Framework</h4>
                                <p className="opacity-90 leading-relaxed mb-6 font-medium">
                                    The RBI categorizes defaulters into two: those who can't pay (Ability) and those who won't pay (Willingness/Willful Defaulters). If a bank tags you as 'Willful', you lose all legal rights to settle. Our primary task is to prevent and challenge 'Willful Defaulter' tags.
                                </p>
                                <p className="opacity-70 text-sm">
                                    By documenting every single external factor — from GST policy changes to supply chain disruptions — we prove that the default was an 'Ability Issue'. Once the 'Willful' tag is off the table, the bank is legally obligated to consider your settlement proposal under their board-approved policies.
                                </p>
                            </div>
                        </section>

                        <section id="legal-rights-msme" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                                The 10 Commandments: Legal Rights of Every MSME Borrower
                            </h2>
                            <p className="mb-8">
                                Many SME owners feel like they are at the mercy of the bank once they default. This is far from the truth. You have powerful constitutional and statutory rights that protect your business and your person.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { title: "The Right to Restructuring", desc: "Per RBI's June 7, 2019 circular, banks must explore restructuring for MSMEs before tagging them as NPA." },
                                    { title: "The Right to Reasonable Notice", desc: "Under SARFAESI Section 13(2), you have 60 days to reply to the demand notice. The bank MUST consider your objections." },
                                    { title: "The Right to Fair Valuation", desc: "You can challenge the reserve price of your factory if it's below the market rate." },
                                    { title: "The Right to Privacy", desc: "No recovery agent can visit your home after 7 PM or contact your customers to shame you." },
                                    { title: "The Right to Legal Representation", desc: "You have the right to be represented by counsel in any judicial or quasi-judicial proceeding." },
                                    { title: "The Right to the Surplus", desc: "If your property is auctioned, any amount recovered above your debt MUST be returned to you." },
                                    { title: "The Right to Personal Dignity", desc: "Banks cannot publish your 'Wanted' posters in newspapers unless specific conditions are met." },
                                    { title: "The Right to a Detailed Statement", desc: "You have the right to know exactly how every rupee of interest and penalty was calculated." },
                                    { title: "The Right to Appeal", desc: "Every DRT order can be appealed in the DRAT (Debt Recovery Appellate Tribunal)." },
                                    { title: "The Right to Fresh Start", desc: "Under the IBC, small entrepreneurs may qualify for a complete discharge of debts under specific criteria." }
                                ].map((right, idx) => (
                                    <div key={idx} className="flex gap-6 items-start p-6 bg-white border border-gray-100 rounded-2xl hover:border-[#1F5EFF] transition-all group">
                                        <span className="text-2xl font-black text-gray-200 group-hover:text-[#1F5EFF] transition-colors">{(idx + 1).toString().padStart(2, '0')}</span>
                                        <div>
                                            <h5 className="font-black text-[#2E2E2E] mb-1">{right.title}</h5>
                                            <p className="text-sm text-gray-500 font-medium">{right.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="pre-litigation-shield" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 uppercase italic">
                                The Pre-Litigation Shield: Stopping the Storm Before it Hits
                            </h2>
                            <p className="mb-8 text-lg">
                                The best time to resolve an SME loan dispute is <strong>before</strong> the bank moves the court. This stage is known as the 'SMA' (Special Mention Account) stage. We work with businesses during the SMA-1 and SMA-2 stages to prevent the account from ever slipping into the NPA category.
                            </p>
                            <p className="mb-8">
                                Our Pre-Litigation strategy involves 'Corrective Action Plans' (CAP). We draft representation to the bank's Zonal Manager and CMD, invoking the 'Committees for MSMEs' formed under the RBI framework. These committees are authorized to review stressed cases and offer moratoriums or interest rate reductions without the need for court intervention. Many business owners are never told about these committees by their local branch managers — we ensure your voice is heard at the highest levels of the bank.
                            </p>
                        </section>

                        <section id="case-victories" className="scroll-mt-32 mb-20">
                            <ReviewSnippets
                                title="MSME Success Stories"
                                reviews={[
                                    {
                                        name: "Anil Mehta",
                                        loc: "Ahmedabad",
                                        loan: "SME Loan - Garment Unit",
                                        res: "DRT Stay & Settlement",
                                        story: "SettleLoans saved my garment manufacturing unit from an unfair DRT proceeding. Their understanding of MSMED Act is unmatched. I was about to lose my factory, but their legal team intervened at the right moment."
                                    },
                                    {
                                        name: "Sunit Kumar",
                                        loc: "Delhi",
                                        loan: "MSME Working Capital",
                                        res: "Samadhan Recovery",
                                        story: "The MSME Samadhan advice provided here helped us recover pending payments from a large corporate buyer, which allowed us to settle our bank dues peacefully. Highly recommended for business owners."
                                    },
                                    {
                                        name: "Rajesh Khanna",
                                        loc: "Mumbai",
                                        loan: "SME Business Loan",
                                        res: "OTS Negotiated Success",
                                        story: "We were struggling with high interest rates after the pandemic. SettleLoans negotiated a 50% waiver on our outstanding amount. Now my business is back on its feet."
                                    },
                                    {
                                        name: "Meera Bai",
                                        loc: "Chennai",
                                        loan: "Machinery Loan Dispute",
                                        res: "Arbitration Victory",
                                        story: "The legal support we received during the arbitration process was phenomenal. They proved the bank's charges were incorrectly calculated. A true partner for SMEs."
                                    }
                                ]}
                            />
                        </section>

                        <section id="faqs" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Frequently Asked Questions</h2>
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
                            <p className="text-gray-400 text-sm italic">Disclaimer: SettleLoans is a professional legal and financial consultancy. We are not a bank or a government entity. MSME Samadhan is a government portal, and we provide advisory services to help you navigate it effectively.</p>
                        </div>

                        {/* Mobile CTA (Visible only on mobile) */}
                        <div className="lg:hidden mt-16 mb-8">
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#1F5EFF]/20">
                                <div className="bg-[#1F5EFF] p-6 text-center text-white">
                                    <h3 className="text-2xl font-black mb-2">Ready to Start Over?</h3>
                                    <p className="opacity-90 text-sm">Join the 10,000+ Indians we've helped find their way to financial freedom.</p>
                                </div>
                                <div className="p-8 text-center text-[#DEDEDE]">
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-xl hover:scale-105 transition-all shadow-lg text-lg">
                                        Get Your Free Consultation
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Right Column: CTA & Related Pages */}
                    <aside className="hidden lg:block w-1/5 shrink-0 px-4">
                        <div className="sticky top-32 space-y-12 text-center">
                            {/* CTA Card */}
                            <div className="bg-[#2E2E2E] rounded-[32px] shadow-2xl overflow-hidden border border-[#DEDEDE]/10">
                                <div className="bg-[#1F5EFF] p-6 text-white text-center">
                                    <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter leading-none">Business<br />In Trouble?</h3>
                                    <p className="opacity-80 text-xs font-bold uppercase tracking-widest">Get Legal Defense</p>
                                </div>
                                <div className="p-8">
                                    <p className="text-[#DEDEDE] text-sm mb-8 leading-relaxed font-medium">
                                        Don't let a default destroy decades of hard work. Our legal experts are ready to shield your MSME.
                                    </p>
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-4 rounded-xl hover:scale-105 transition-all shadow-lg text-sm uppercase tracking-widest">
                                        Contact Experts
                                    </Link>
                                </div>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm text-left">
                                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#1F5EFF] mb-6 border-b border-blue-50 pb-4">Related Solutions</h4>
                                <nav className="space-y-4">
                                    <Link href="/business-corporate-loan-matters" className="block text-sm font-bold text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic">Corporate Loan Matters</Link>
                                    <Link href="/best-lawyer-for-msme-business-loan-dispute" className="block text-sm font-bold text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic">MSME Loan Dispute Lawyer</Link>
                                    <Link href="/best-lawyer-for-msme-and-business-loans" className="block text-sm font-bold text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic">SME & Business Lawyer</Link>
                                    <Link href="/best-lawyer-for-MSME-loan-recovery-defence" className="block text-sm font-bold text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic">Recovery Defense Experts</Link>
                                    <Link href="/working-capital-loan-legal-help" className="block text-sm font-bold text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight italic">Working Capital Help</Link>
                                </nav>
                            </div>
                        </div>
                    </aside>

                </div>
            </main>
        </div>
    );
}
