import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
    title: "Bank Filed FIR for Loan Default in India | Legal Rights & Recovery Guide",
    description: "Has a bank filed an FIR for your loan default? Learn the difference between civil and criminal default, Section 420 IPC, Section 138 NI Act, and how to protect yourself from illegal harassment.",
    alternates: {
        canonical: "https://settleloans.in/bank-filed-fir-for-loan-default",
    },
};

export default function BankFiledFIRPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/bank-filed-fir-for-loan-default#webpage",
                "url": "https://settleloans.in/bank-filed-fir-for-loan-default",
                "name": "Bank Filed FIR for Loan Default in India | Legal Rights & Recovery Guide",
                "description": "Comprehensive guide on FIRs filed by banks for loan defaults, covering IPC sections, legal defenses, and borrower protections.",
                "breadcrumb": { "@id": "https://settleloans.in/bank-filed-fir-for-loan-default#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/bank-filed-fir-for-loan-default#breadcrumb",
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
                        "name": "Bank Filed FIR for Loan Default",
                        "item": "https://settleloans.in/bank-filed-fir-for-loan-default"
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/bank-filed-fir-for-loan-default#article",
                "headline": "What to Do When a Bank Files an FIR for Loan Default: A Comprehensive Support Guide",
                "description": "Understand the legal implications of an FIR for loan default in India. Learn about civil vs criminal cases and how to defend your rights.",
                "author": {
                    "@type": "Organization",
                    "name": "SettleLoans Legal Team"
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
                "mainEntityOfPage": { "@id": "https://settleloans.in/bank-filed-fir-for-loan-default#webpage" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/bank-filed-fir-for-loan-default#product",
                "name": "Loan Default Legal Support & Negotiation",
                "description": "Expert assistance in handling bank FIRs and negotiating loan settlements in India.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "1250"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Amit R." },
                        "datePublished": "2024-02-15",
                        "reviewBody": "SettleLoans saved me when a bank threatened a criminal case. They explained my rights and stopped the harassment immediately.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Deepika S." },
                        "datePublished": "2024-03-01",
                        "reviewBody": "I was terrified of the FIR threat. The team handled the legal calls and negotiated a settlement I could actually pay.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://settleloans.in/bank-filed-fir-for-loan-default#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Can a bank file an FIR for simple loan default?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Technically, simple loan default is a civil matter. Banks can only file a criminal FIR if there is evidence of fraud, forgery, or dishonest intent at the time of taking the loan. Mere inability to pay is not a crime."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is Section 420 IPC in loan default cases?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Section 420 IPC deals with cheating. Banks may invoke it if they believe you provided forged documents or false income details to obtain the loan. If you were honest during the application, this charge rarely holds in court."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What happens if a cheque bounce case is filed?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Under Section 138 of the Negotiable Instruments Act, a cheque bounce is a criminal offense. Unlike simple default, this can lead up to 2 years of imprisonment. However, it is bailable and often ends in a settlement."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I be arrested immediately if an FIR is filed?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Not necessarily. For financial matters, police often conduct a preliminary inquiry. You can also apply for Anticipatory Bail to prevent arrest while the case is being investigated."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do I know if the FIR threat is real?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Check the CCTNS portal or visit your local police station. Real FIRs are documented. Many 'notices' sent via WhatsApp or email by recovery agents are fake and meant to scare you into paying."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does Section 406 IPC apply to personal loans?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Section 406 deals with criminal breach of trust. In personal loans, where no property is 'entrusted' but money is borrowed, the Supreme Court has often ruled that Section 406 does not apply to simple debt defaults."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What should I do if police visit my home?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Ask for their ID and the copy of the complaint or FIR. Do not sign anything without a lawyer. Be polite but firm about your rights. Financial disputes should be handled in court, not at your doorstep."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can a bank file an FIR for credit card debt?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "It is extremely rare for a bank to file a criminal FIR for credit card debt unless massive fraud is involved. Most credit card defaults are handled through civil recovery or arbitration."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does settlement affect a criminal case?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "If a criminal case is filed and you reach a compromise (settlement) with the bank, both parties can jointly file a petition at the High Court to quash the FIR based on the settlement."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I get a job if there is a pending loan FIR?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Background checks might reveal a pending FIR. It is better to resolve the matter through settlement as soon as possible to clear your record and secure your professional future."
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
                            Legal Protection & Support
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                            Bank Filed FIR for <br className="hidden md:block" /> Loan Default in India
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
                            Is the bank threatening you with a criminal case? Understand your rights, distinguish between civil and criminal default, and learn how to fight back legally against harassment.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Get Legal Help Now
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
                                    Bank Filed FIR for Loan Default
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>

                {/* 3 Column Layout */}
                <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">

                    {/* Left Column: Table of Contents */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px]">
                        <div className="sticky top-32">
                            <TableOfContents
                                items={[
                                    { id: "fir-reality", title: "The Reality of FIR Threats" },
                                    { id: "civil-vs-criminal", title: "Civil vs Criminal Default" },
                                    { id: "ipc-sections", title: "Key IPC Sections Explained" },
                                    { id: "supreme-court-rulings", title: "Supreme Court Protections" },
                                    { id: "ni-act-138", title: "Section 138: Cheque Bounce" },
                                    { id: "pss-act-25", title: "Section 25 PSS Act: NACH" },
                                    { id: "rbi-guidelines", title: "RBI Anti-Harassment Rules" },
                                    { id: "detecting-fakes", title: "Spotting Fake FIR Notices" },
                                    { id: "willful-defaulter", title: "Willful Default vs Bad Luck" },
                                    { id: "sarfaesi-act", title: "SARFAESI and Property" },
                                    { id: "legal-strategy", title: "Your 3-Step Legal Strategy" },
                                    { id: "anticipatory-bail", title: "Understanding Bail Rights" },
                                    { id: "high-court-quashing", title: "Quashing an FIR" },
                                    { id: "mental-health", title: "Managing Legal Stress" },
                                    { id: "settleloans-role", title: "How We Protect You" },
                                    { id: "success-stories", title: "Case Studies" },
                                    { id: "faqs", title: "Expert FAQs" }
                                ]}
                            />
                        </div>
                    </aside>

                    {/* Middle Column: Main Content */}
                    <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">

                        <section id="fir-reality" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                When the Bank Files an FIR: <span className="text-black">Fear vs. Reality</span>
                            </h2>
                            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -mr-16 -mt-16 z-0"></div>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                                    If you have received a message saying the bank has according to their records filed an FIR against you for loan default, the first thing you must do is stay calm. In the vast majority of cases in India, loan default is a purely civil dispute. Banks and NBFCs often use the 'threat' of a criminal FIR as a collection tactic to induce panic and force a immediate payment.
                                </p>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                                    A First Information Report (FIR) is meant for cognizable offenses like theft, assault, or massive fraud. Being unable to pay an EMI because of a job loss or business failure is not a crime. However, there are specific situations where a civil default can take a criminal turn. Understanding this distinction is the key to your defense.
                                </p>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 font-bold text-[#1F5EFF]">
                                    You are not a criminal because you are in debt. Let's break down the law so you can face this situation with clarity and courage.
                                </p>
                            </div>
                        </section>

                        <section id="civil-vs-criminal" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                                The Thin Line: Civil Breach vs. Criminal Intent
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The relationship between a borrower and a bank is a 'Debtor-Creditor' relationship, governed by the Indian Contract Act. When you fail to pay, it is a 'Breach of Contract'. This is a civil wrong. The bank's legal remedy is to file a recovery suit in a Civil Court or a Debt Recovery Tribunal (DRT). They can attach your assets, but they cannot put you in jail for simply being poor.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                A criminal case arises only when there is 'Dishonest Intention' at the very beginning of the transaction. If you took the loan with the objective of never paying it back, using false names or forged documents, that is cheating. The Supreme Court of India has repeatedly held that a mere breach of contract cannot give rise to criminal prosecution unless fraudulent intent is proven.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                In <strong>Hridaya Ranjan Prasad Verma vs State of Bihar</strong>, the Supreme Court emphasized that for an offense of cheating, it must be shown that the accused had fraudulent or dishonest intention at the time of making the promise. A failure to keep a promise at a later stage—such as failing to repay a loan due to financial loss—does not constitute cheating. The intention must be 'deception' from the inception of the contract.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Similarly, in <strong>V.Y. Jose vs State of Gujarat</strong>, the court warned against the growing trend of converting purely civil disputes into criminal proceedings. The court noted that a matter which is essentially a breach of contract should not be allowed to be transformed into a criminal case just to gain leverage for recovery. If you applied for the loan with genuine intent and your documents are real, you have a solid defense against any criminal charges.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 my-8">
                                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                                    <h4 className="font-bold text-blue-900 mb-2 underline">Civil Default (The Norm)</h4>
                                    <ul className="text-sm text-blue-800 space-y-2">
                                        <li>• Business failure or job loss.</li>
                                        <li>• Honest intent to pay but lack of funds.</li>
                                        <li>• Legal notices for recovery (Civil).</li>
                                        <li>• Asset attachment via SARFAESI.</li>
                                    </ul>
                                </div>
                                <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                                    <h4 className="font-bold text-red-900 mb-2 underline">Criminal Default (The Exception)</h4>
                                    <ul className="text-sm text-red-800 space-y-2">
                                        <li>• Forged salary slips or fake IDs.</li>
                                        <li>• Diversion of funds for other purposes.</li>
                                        <li>• Cheque bounce (Section 138).</li>
                                        <li>• Intentional fraud from Day 1.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section id="ipc-sections" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                                Commonly Invoked IPC Sections in Loan Cases
                            </h2>
                            <p className="text-lg leading-relaxed mb-8">
                                When a bank tries to criminalize a default, they typically cite specific sections of the Indian Penal Code (IPC). Understanding these sections will help you realize why they are often difficult for banks to prove in a genuine case of financial hardship.
                            </p>
                            <div className="space-y-6">
                                <div className="border-l-4 border-[#1F5EFF] pl-6 py-2">
                                    <h3 className="text-xl font-bold mb-2">Section 420 IPC: Cheating</h3>
                                    <p className="text-gray-600">This is the most common section mentioned in bank FIR threats. It requires the bank to prove that you 'dishonestly induced' them to give you the loan. If your documents were genuine and you paid several EMIs before defaulting, proving 'cheating' becomes almost impossible for the bank.</p>
                                </div>
                                <div className="border-l-4 border-[#1F5EFF] pl-6 py-2">
                                    <h3 className="text-xl font-bold mb-2">Section 406 IPC: Criminal Breach of Trust</h3>
                                    <p className="text-gray-600">This applies when someone is 'entrusted' with property and they misappropriate it. However, the courts have often ruled that in a loan, the money becomes the property of the borrower once disbursed. Therefore, failing to pay a personal loan is not usually considered a breach of trust under this section.</p>
                                </div>
                                <div className="border-l-4 border-[#1F5EFF] pl-6 py-2">
                                    <h3 className="text-xl font-bold mb-2">Section 467/468/471 IPC: Forgery</h3>
                                    <p className="text-gray-600">These sections are invoked if the bank discovers that a borrower used forged documents (like a fake PAN card or manipulated bank statements) to get the loan. This is a very serious matter and is one of the few areas where a criminal FIR by the bank is highly likely to stand.</p>
                                </div>
                                <div className="border-l-4 border-[#1F5EFF] pl-6 py-2">
                                    <h3 className="text-xl font-bold mb-2">Section 120B IPC: Criminal Conspiracy</h3>
                                    <p className="text-gray-600">This section is often appended to fraud cases when the bank suspects that multiple individuals (perhaps the borrower and a third-party agent) collaborated to deceive the institution. Proving conspiracy requires clear evidence of a 'meeting of minds' to commit an illegal act, which is a high evidentiary bar for the bank to satisfy in court.</p>
                                </div>
                                <div className="border-l-4 border-[#1F5EFF] pl-6 py-2">
                                    <h3 className="text-xl font-bold mb-2">Section 503 & 506 IPC: Criminal Intimidation</h3>
                                    <p className="text-gray-600">While banks might threaten you, these sections are actually your weapons. If a recovery agent uses threats of injury to your person, reputation, or property to force a payment, they are committing criminal intimidation. You have every right to file a counter-FIR against the bank and the specific agent under these sections.</p>
                                </div>
                                <div className="border-l-4 border-[#1F5EFF] pl-6 py-2">
                                    <h3 className="text-xl font-bold mb-2">Section 34 IPC: Common Intention</h3>
                                    <p className="text-gray-600">This section is used when several persons participate in the same criminal act. Banks use this to implicate family members if they were co-applicants or witnesses to the loan agreement, though it rarely holds if the family members were not directly involved in the alleged 'fraud'.</p>
                                </div>
                            </div>
                        </section>

                        <section id="supreme-court-rulings" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Supreme Court Rulings: Your Shield</h2>
                            <p className="mb-6">
                                The Indian judiciary has been very protective of borrowers against the 'arm-twisting' tactics of banks. Several landmark judgments have clarified that police and banks cannot use the criminal justice system as a recovery agency for civil debts.
                            </p>
                            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-8 font-medium italic text-gray-700">
                                "The criminal court's jurisdiction should not be invoked for settling civil disputes. A dispute which is purely of a civil nature should not be given the color of a criminal offense."
                                <span className="block mt-4 text-sm font-bold text-[#1F5EFF] not-italic">— Supreme Court of India</span>
                            </div>
                            <p className="mb-6">
                                In cases like <strong>M.S. Shoes East Ltd vs 7-Seas Vacations</strong>, the court noted that even if a debt is admitted, if there is no fraud proved, no criminal case can be sustained. This means that if a bank files a fake FIR just to scare you, you can approach the High Court under Section 482 of the CrPC to have that FIR quashed immediately.
                            </p>
                        </section>

                        <section id="ni-act-138" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Section 138 NI Act: The Cheque Bounce Challenge</h2>
                            <p className="mb-6">
                                While a loan default itself isn't a crime, a cheque bounce is a statutory criminal offense under Section 138 of the Negotiable Instruments Act. Most banks take Post-Dated Cheques (PDCs) or security cheques at the time of the loan. If they deposit such a cheque and it bounces, they can file a criminal case.
                            </p>
                            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 mb-8">
                                <h3 className="text-xl font-bold text-amber-900 mb-3">Is a 138 Case the same as an FIR?</h3>
                                <p className="text-sm text-amber-800 leading-relaxed mb-4">
                                    No. A Section 138 case is a 'Private Complaint' filed directly in a Magistrate's court. The police are not involved in the initial filing. It is a bailable offense, meaning you cannot be arrested without a warrant from the judge, and even then, you can get bail easily.
                                </p>
                                <p className="text-sm text-amber-800 leading-relaxed font-bold">
                                    Crucial tip: If a recovery agent tells you 'the police are coming to arrest you for a leaked cheque', they are lying. The court first sends a Summons, and only after you ignore it multiple times does a warrant issue.
                                </p>
                            </div>
                        </section>

                        <section id="pss-act-25" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Section 25 PSS Act: The Electronic Default</h2>
                            <p className="mb-6">
                                In the modern era, most loans use NACH (National Automated Clearing House) or ECS for auto-debiting EMIs. Many people mistakenly believe that an electronic bounce is just a small technical error. However, Section 25 of the Payment and Settlement Systems (PSS) Act, 2007, gives electronic defaults the exact same criminal weight as a physical cheque bounce.
                            </p>
                            <p className="mb-6">
                                This is a very powerful weapon in a bank's arsenal. If your NACH fails due to 'Insufficient Funds', the bank can file a case similar to Section 138. The punishment and the legal process are virtually identical. This is why we always advise our clients to prioritize stop-payment instructions or early negotiation rather than simply letting electronic debits fail repeatedly.
                            </p>
                        </section>

                        <section id="rbi-guidelines" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">RBI Guidelines: Protection Against Harassment</h2>
                            <p className="mb-6">
                                The Reserve Bank of India (RBI) has issued very strict 'Fair Practice Codes' for loan recovery. Lenders and their agents are strictly prohibited from using criminal intimidation, physical harassment, or any form of public shaming to recover money. If an agent threatens you with a 'fake police case', they are violating RBI norms.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-100 text-green-600 flex items-center justify-center font-bold mr-4 mt-1">✓</div>
                                    <div>
                                        <strong>Hours of Contact:</strong> Agents can only call between 8 AM and 7 PM. Any threat of 'police coming at night' is a massive violation.
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-100 text-green-600 flex items-center justify-center font-bold mr-4 mt-1">✓</div>
                                    <div>
                                        <strong>Privacy:</strong> Agents cannot call your neighbors, relatives, or office colleagues to share your debt details. This is illegal.
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-100 text-green-600 flex items-center justify-center font-bold mr-4 mt-1">✓</div>
                                    <div>
                                        <strong>Identification:</strong> Every agent must carry an ID and an authorization letter from the bank. If they don't have it, they have no legal standing.
                                    </div>
                                </li>
                            </ul>
                        </section>

                        <section id="detecting-fakes" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Alert: How to Spot a Fake FIR Notice</h2>
                            <p className="mb-6 text-red-600 font-bold">
                                Recovery agents are masters of psychological warfare. They often send high-quality 'PDF notices' that look exactly like police documents. Here is how you can tell they are fake.
                            </p>
                            <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-xl mb-8">
                                <h3 className="text-xl font-bold text-red-800 mb-4">The Fake Notice Checklist</h3>
                                <ul className="space-y-3 text-red-900/80">
                                    <li>• <strong>WhatsApp Source:</strong> Real police summons are usually hand-delivered by a constable or sent via Registered Post. A notice on WhatsApp is 99% a fake.</li>
                                    <li>• <strong>Bank Logo on Police Paper:</strong> Real FIRs or Summons come from a Police Station or a Court, not on a letterhead that has a bank logo.</li>
                                    <li>• <strong>Spelling Mistakes:</strong> Professional police documents rarely have the kind of horrific spelling and grammar mistakes found in agent-created fakes.</li>
                                    <li>• <strong>'Pre-FIR' or 'E-FIR':</strong> Agents use terms like 'E-FIR' or 'Police Verification Pending' to sound official. An FIR is either filed or it isn't. There is no 'middle ground' notice.</li>
                                </ul>
                            </div>
                            <p className="mb-6 font-bold text-lg">
                                Pro Tip: Use the CCTNS (Crime and Criminal Tracking Network & Systems) portal for your state. You can enter your name or the alleged FIR number to see if it actually exists in the official police records.
                            </p>
                        </section>

                        <section id="willful-defaulter" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Willful Defaulter vs. Genuine Hardship</h2>
                            <p className="mb-6">
                                A 'Willful Defaulter' is someone who has the money to pay but chooses not to, or someone who has diverted the loan funds for other purposes. Being declared a willful defaulter has serious consequences, including being banned from taking future loans and potentially facing criminal charges.
                            </p>
                            <p className="mb-6 text-lg">
                                However, if you have honestly suffered a financial loss, you are NOT a willful defaulter. The bank must follow a strict process before declaring you as one, including giving you a personal hearing. If you are struggling, it is vital to communicate with the bank in writing, explaining your hardship and your intent to settle. This creates a paper trail that protects you from being classified as a criminal.
                            </p>
                        </section>

                        <section id="sarfaesi-act" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">SARFAESI Act: Secured Loans & Property</h2>
                            <p className="mb-6">
                                For secured loans (like home or car loans), banks don't need to file an FIR. They have a more powerful tool: the SARFAESI Act, 2002. This law allows banks to seize and auction the collateral without needing a court order.
                            </p>
                            <p className="mb-6">
                                If the bank is threatening an FIR for a home loan, it is usually a distraction. Their real power lies in the SARFAESI notice. If you receive a Section 13(2) notice, you have 60 days to respond. This is a civil process, not a criminal one. Understanding this prevents you from being scared by irrelevant criminal threats.
                            </p>
                        </section>

                        <section id="legal-strategy" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Your 3-Step Legal Strategy</h2>
                            <p className="mb-6 text-lg">
                                If a bank actually goes through with filing a criminal complaint, you need a precise strategy to protect your freedom and your reputation.
                            </p>
                            <div className="grid sm:grid-cols-3 gap-6 my-10">
                                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-blue-600 text-xl">1</div>
                                    <h4 className="font-bold mb-2">Legal Audit</h4>
                                    <p className="text-xs text-gray-500 leading-relaxed">Have a lawyer review your loan application and all bank communications to ensure no fraud occurred.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-blue-600 text-xl">2</div>
                                    <h4 className="font-bold mb-2">Stop Harassment</h4>
                                    <p className="text-xs text-gray-500 leading-relaxed">File complaints with the RBI and the police against agents using fake criminal threats to extort money.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-blue-600 text-xl">3</div>
                                    <h4 className="font-bold mb-2">Settlement Path</h4>
                                    <p className="text-xs text-gray-500 leading-relaxed">Propose a legal settlement. Most banks will withdraw criminal complaints once the money is recovered.</p>
                                </div>
                            </div>
                        </section>

                        <section id="anticipatory-bail" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Understanding Your Bail Rights</h2>
                            <p className="mb-6">
                                If an FIR is filed under Section 420 or other non-bailable sections, your primary objective is to stay out of custody. You can file for <strong>Anticipatory Bail</strong> under Section 438 of the CrPC.
                            </p>
                            <p className="mb-6 text-lg">
                                The courts are generally very lenient in financial matters. If you can show that the dispute is civil and you have a genuine desire to resolve the debt, the judge will almost certainly grant you bail. This allows you to fight the case from outside, protected from the trauma of jail.
                            </p>
                        </section>

                        <section id="high-court-quashing" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Section 482 CrPC: Quashing the FIR</h2>
                            <p className="mb-6">
                                If the FIR is clearly malicious and lacks any evidence of fraud, your lawyer can file a petition in the High Court for 'Quashing'. This is a high-level legal remedy where the High Court can throw the entire case out of the window because it is an 'Abuse of the Process of Law'.
                            </p>
                            <p className="mb-6 font-bold">
                                Importantly, if you settle the loan while a quashing petition is pending, the High Court will often quash the FIR on the grounds of a settlement between parties, clearing your criminal record completely.
                            </p>
                        </section>

                        <section id="mental-health" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Managing the Stress of a Legal Battle</h2>
                            <p className="mb-6 text-lg">
                                The word 'FIR' can be terrifying. It carries a social stigma and creates intense internal pressure. But remember, the threat is usually worse than the reality.
                            </p>
                            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 mb-8">
                                <h3 className="text-xl font-bold mb-4">You Are More Than Your Debt</h3>
                                <p className="mb-4 text-gray-700 italic">
                                    "I was suicidal when the calls started about a police case. I thought my life was over. But then I realized, this is just a numbers game for the bank. Once I got legal help and realized it was all just a scare tactic, the fear vanished. I am still paying back, but I am living my life again."
                                    <span className="block mt-2 font-bold">— A SettleLoans Client Story</span>
                                </p>
                                <p className="text-gray-700">
                                    Don't let the fear paralyze you. Reach out for support. Whether it's a lawyer, an NGO, or a specialized service like ours, having someone in your corner changes everything.
                                </p>
                            </div>
                        </section>

                        <section id="settleloans-role" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">How SettleLoans Acts as Your Shield</h2>
                            <p className="mb-6">
                                Our team at SettleLoans is trained to handle exactly these high-pressure situations. We don't just negotiate money; we negotiate for your peace of mind. We have seen every trick in the recovery book, and we know exactly how to call their bluff.
                            </p>
                            <div className="bg-[#2E2E2E] text-white p-8 rounded-2xl mb-8">
                                <h3 className="text-2xl font-bold mb-4">Our Protective Services</h3>
                                <ul className="space-y-4 text-sm opacity-90">
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full shrink-0"></span>
                                        <strong>Legal Intervention:</strong> We send official responses to legal notices, making it clear to the bank that you have legal representation and won't be bullied.
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full shrink-0"></span>
                                        <strong>Harassment Cessation:</strong> We guide you on how to document and report illegal threats, often stopping the calls within 48 hours.
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full shrink-0"></span>
                                        <strong>Professional Negotiation:</strong> We use your genuine hardship to negotiate a settlement that is both affordable and clears your record.
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full shrink-0"></span>
                                        <strong>FIR Verification:</strong> Our legal network helps verify if a threat is real, protecting you from fake psychological attacks.
                                    </li>
                                </ul>
                            </div>
                            <p className="font-bold text-center text-xl text-[#1F5EFF] p-6 bg-blue-50 rounded-xl">
                                Don't wait for the threat to become a reality. Contact us today and let us take the weight off your shoulders.
                            </p>
                        </section>

                        <section id="success-stories" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Case Studies: Real People, Real Victories</h2>
                            <div className="grid md:grid-cols-2 gap-6 not-prose">
                                {[
                                    {
                                        name: "Rajesh V.",
                                        loc: "Mumbai",
                                        type: "Business Loan",
                                        outcome: "FIR Threat Neutralized",
                                        story: "A private bank sent me a fake criminal notice for my stalled SME loan. SettleLoans identified it as a fake within minutes and sent a counter-notice. The bank immediately shifted to a polite settlement discussion."
                                    },
                                    {
                                        name: "Sumanth K.",
                                        loc: "Bangalore",
                                        type: "Personal Loan",
                                        outcome: "Cheque Bounce Case Settled",
                                        story: "I had a Section 138 case pending in court. I was terrified. SettleLoans negotiated with the bank's legal panel and got the case withdrawn after a 50% settlement. I am finally free."
                                    },
                                    {
                                        name: "Anjali G.",
                                        loc: "Delhi",
                                        type: "Credit Card Debt",
                                        outcome: "Harassment Stopped",
                                        story: "Agents were threatening an FIR for my card debt. SettleLoans explained that this was a lie. They took over my calls and the agents stopped calling completely within 3 days. Huge relief."
                                    },
                                    {
                                        name: "Mohit P.",
                                        loc: "Kolkata",
                                        type: "Multiple PLs",
                                        outcome: "Mental Peace Restored",
                                        story: "I was losing my mind over the 'criminal' threats. The SettleLoans team spoke to me with so much empathy. They simplified the law for me and handled the aggressive lenders. Now I'm on a 2 year repayment plan."
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
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Expert Legal FAQs</h2>
                            <div className="space-y-4 not-prose">
                                {[
                                    { q: "Can a bank track my location via phone if they file an FIR?", a: "Only the police have the authority to track phones, and they only do so for serious crimes like kidnapping or terrorism. Banks have no such tracking power. Any recovery agent claiming they are 'tracking your live location' is lying to scare you." },
                                    { q: "Will an FIR for loan default affect my government job?", a: "A criminal record can affect government service. However, simple loan default is civil. Only if you are convicted of an offense involving 'moral turpitude' (like fraud or cheating) does it become a problem. Resolving the matter through settlement prevents such a conviction." },
                                    { q: "Can banks file an FIR if I am abroad?", a: "Filing an FIR for a simple debt is hard enough when you are in India; it is almost impossible if you are abroad unless systemic fraud is involved. However, they can still initiate civil recovery and potentially issue a Look Out Circular (LOC) in very high-value cases." },
                                    { q: "What is the limitation period for banks to file a case?", a: "For civil recovery, banks usually have 3 years from the date of default. For criminal cases like Section 138 (Cheque Bounce), they must act very quickly (within 30 days of the notice period expiry)." },
                                    { q: "Can I travel out of India if an FIR is filed?", a: "Unless the court has specifically seized your passport or issued a travel ban, you are free to travel. However, it is always better to get bail and take the court's permission to avoid any last-minute surprises at the airport." },
                                    { q: "Is taking a loan and not being able to pay 'Cheating'?", a: "No. Cheating (Section 420) requires dishonest intention from the very beginning. If you paid even one EMI, it shows you had the intention to pay, which destroys the bank's claim of cheating." },
                                    { q: "Can recovery agents bring a 'Fake Policeman' with them?", a: "Yes, this is a known illegal tactic. Real policemen will always be in uniform, carry a batch number, and have an entry in their 'Case Diary'. You can call 100 or visit the nearest police station to verify any such visit." },
                                    { q: "What if the bank files a case in a different state?", a: "This is often done to make it difficult for the borrower to defend themselves. You can approach the High Court or the Supreme Court to have the case transferred to your local jurisdiction based on 'Forum Conveniens'." },
                                    { q: "Does debt settlement close the criminal case automatically?", a: "No, you must file a petition to quash or withdraw the case. However, once the bank is paid, they are usually very cooperative in helping you clear your record." },
                                    { q: "How much does a lawyer cost for an FIR case?", a: "Costs vary. At SettleLoans, we provide comprehensive packages that include both legal protection and debt negotiation, making it much more affordable than hiring independent criminal lawyers." }
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
                            <p className="text-gray-400 text-sm italic">Disclaimer: SettleLoans is a professional debt consultancy and legal support service. The information provided is for educational purposes and does not constitute formal legal advice. Always consult with a qualified advocate for specific court cases.</p>
                        </div>

                        {/* Mobile CTA */}
                        <div className="lg:hidden mt-16 mb-8">
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#1F5EFF]/20">
                                <div className="bg-[#1F5EFF] p-6 text-center text-white">
                                    <h3 className="text-2xl font-black mb-2">Protect Your Future</h3>
                                    <p className="opacity-90 text-sm">Don't let the threat of an FIR ruin your life. Get the right legal shield today.</p>
                                </div>
                                <div className="p-8 text-center text-[#DEDEDE]">
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-xl hover:scale-105 transition-all shadow-lg text-lg">
                                        Speak to Our Experts
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Right Column: Sticky CTA and Related Pages */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px]">
                        <div className="sticky top-32 flex flex-col gap-8">
                            {/* Sidebar CTA */}
                            <div className="bg-[#2E2E2E] rounded-2xl p-8 border border-[#1F5EFF]/20 shadow-2xl">
                                <h3 className="text-2xl font-black text-white mb-4 leading-tight">Being <span className="text-[#1F5EFF]">Threatened</span> With FIR?</h3>
                                <p className="text-[#DEDEDE]/80 mb-8 text-sm leading-relaxed">
                                    Join 10,000+ Indians who have moved from fear to freedom. We handle the banks, the notices, and the agents.
                                </p>
                                <Link href="/contact" className="block w-full bg-[#1F5EFF] text-white font-black py-4 px-4 rounded-xl hover:scale-105 transition-all shadow-lg text-center text-base">
                                    Stop Harassment Now
                                </Link>
                                <div className="mt-6 flex items-center justify-center gap-2">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-8 h-8 rounded-full border-2 border-[#2E2E2E] bg-gray-400"></div>
                                        ))}
                                    </div>
                                    <span className="text-[10px] text-[#DEDEDE]/60 font-bold uppercase tracking-widest">Active Support</span>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-white rounded-2xl p-6 border border-[#DEDEDE] shadow-sm">
                                <h4 className="font-black text-[#2E2E2E] mb-6 border-b pb-4">Read Also</h4>
                                <div className="flex flex-col gap-4">
                                    <Link href="/police-case-for-credit-card-debt" className="text-sm font-bold text-[#1F5EFF] hover:underline">Police Case for Card Debt</Link>
                                    <Link href="/can-i-go-to-jail-for-loan-default-in-india" className="text-sm font-bold text-[#1F5EFF] hover:underline">Jail for Loan Default?</Link>
                                    <Link href="/rbi-rules-for-recovery-agents" className="text-sm font-bold text-[#1F5EFF] hover:underline">RBI Recovery Rules</Link>
                                    <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-sm font-bold text-[#1F5EFF] hover:underline">Received a Legal Notice?</Link>
                                </div>
                            </div>
                        </div>
                    </aside>

                </div>
            </main>
        </div>
    );
}
