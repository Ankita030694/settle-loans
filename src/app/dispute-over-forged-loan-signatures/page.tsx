import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
    title: "Dispute Over Forged Loan Signatures India | Legal Help & Fraud Defense",
    description: "Victim of loan fraud or identity theft? Get expert legal help for forged loan signature disputes in India. Learn about FIRs, handwriting experts, and RBI complaints.",
    alternates: {
        canonical: "https://settleloans.in/dispute-over-forged-loan-signatures",
    },
};

export default function ForgedLoanSignaturesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/dispute-over-forged-loan-signatures#webpage",
                "url": "https://settleloans.in/dispute-over-forged-loan-signatures",
                "name": "Dispute Over Forged Loan Signatures India | Legal Help & Fraud Defense",
                "description": "Comprehensive legal guide on contesting unauthorized loans with forged signatures. Expert advice on criminal complaints and credit report correction.",
                "breadcrumb": { "@id": "https://settleloans.in/dispute-over-forged-loan-signatures#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/dispute-over-forged-loan-signatures#breadcrumb",
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
                        "name": "Dispute Over Forged Loan Signatures",
                        "item": "https://settleloans.in/dispute-over-forged-loan-signatures"
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/dispute-over-forged-loan-signatures#article",
                "headline": "Fighting Forged Loan Signatures: A Legal Masterclass for Fraud Victims",
                "description": "Step-by-step legal procedure to challenge forged loan documents, identify fraudsters, and exonerate yourself from illegal debt in India.",
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
                "mainEntityOfPage": { "@id": "https://settleloans.in/dispute-over-forged-loan-signatures#webpage" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/dispute-over-forged-loan-signatures#product",
                "name": "Loan Fraud Legal Assistance",
                "description": "Specialized legal services to contest forged loan signatures and clear fraudulent debt from credit reports.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "620"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Anil M." },
                        "datePublished": "2024-01-22",
                        "reviewBody": "Found a 2 lakh loan on my CIBIL I never took. SettleLoans proved the signature was forged. The loan was cancelled and my score restored.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Kavita S." },
                        "datePublished": "2024-02-15",
                        "reviewBody": "A local agent forged my documents for a commission. SettleLoans handled the FIR and the bank's internal forensic team perfectly.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://settleloans.in/dispute-over-forged-loan-signatures#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What should I do first if I discover a loan with a forged signature in my name?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The first step is to immediately inform your bank in writing and file an FIR at the local police station or Cyber Cell. Simultaneously, consult a lawyer to issue a legal notice to the bank."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can a handwriting expert really prove a signature is forged?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, certified forensic document examiners analyze stroke patterns, pressure points, and slant to determine authenticity. Their expert opinion is admissible under Section 45 of the Indian Evidence Act."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Am I liable to pay a loan if the signature is forged?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. A forged signature makes the contract 'null and void' (void ab initio). You are not legally bound by a contract you never signed, provided the fraud is proven."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does a forged loan affect my CIBIL score?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "It will show as an active or overdue loan, crashing your credit score. You must follow the RBI's dispute resolution framework to have the fraudulent entry deleted from credit bureaus."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I file a complaint with the RBI Ombudsman for forged loan signatures?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, you can file a complaint with the Banking Ombudsman if the bank fails to resolve the fraud internally within 30 days of your complaint."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are the IPC/BNS sections for loan forgery in India?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": " forgery is covered under Sections 463, 467, 468, and 471 of the IPC (now Sections 335, 467, 468, and 471 of BNS), which deal with forgery for the purpose of cheating and using forged documents as genuine."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What if the bank insists it's my signature?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "If the bank is stubborn, you must move to a Civil Court for a 'Declaration' of forgery or escalate via a criminal complaint where the police will seize the original document for forensic testing."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can a bank branch manager be held liable for a forged loan?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, if it is proven that the bank official was negligent in verifying the application or was in collusion with the fraudster, they can face departmental action and criminal prosecution."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How long does it take to clear my name from a forged loan?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A typical resolution takes 3 to 6 months, involving bank audits, forensic reports, and potentially an Ombudsman order."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can SettleLoans help me if I don't have the original forged document?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. We help you legally demand the 'Certified Copies' and 'Digital Screenshots' from the bank's internal records to start the investigation."
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
                            Identity Fraud Defense
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                            Contesting Forged Loan <br className="hidden md:block" /> Signatures in India
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
                            Not your signature? Not your loan. Our legal experts use forensic document analysis and criminal law to exonerate you from fraudulent debt.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Contest Fraudulent Loan
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
                                    Forged Loan Signature Dispute
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
                                { id: "nature-of-forgery", title: "When a Loan is a Lie" },
                                { id: "forgery-methods", title: "How Forgery Happens" },
                                { id: "immediate-action", title: "FIR & Police Procedure" },
                                { id: "forensic-evidence", title: "Handwriting Analysis" },
                                { id: "ipc-bns-sections", title: "Criminal Statutes (IPC/BNS)" },
                                { id: "bank-internal-audit", title: "The Bank's Liability" },
                                { id: "rbi-ombudsman-fraud", title: "RBI Ombudsman Case" },
                                { id: "civil-court-declaration", title: "Voiding the Contract" },
                                { id: "cibil-rectification", title: "Clearing CIBIL Fraud" },
                                { id: "digital-forgery-threat", title: "Digital Loan Fraud" },
                                { id: "preventative-measures", title: "Preventing ID Theft" },
                                { id: "legal-representation", title: "Why Legal Help Matters" },
                                { id: "case-studies", title: "Success Stories" },
                                { id: "faqs", title: "Common Questions" }
                            ]}
                        />
                    </aside>

                    <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
                        <section id="nature-of-forgery" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Dispute Over Forged Loan Signatures: <span className="text-black">When the Burden Isn't Yours</span>
                            </h2>
                            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -mr-16 -mt-16 z-0"></div>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6 font-medium">
                                    Imagine opening your credit report and finding a massive loan entry that you never applied for. You see a signature on a loan agreement that mimics yours but feels 'off.' This is not just a mistake—it is a criminal act of forgery. In the high-pressure world of Indian banking, loan processing agents and identity thieves often conspire to forge signatures to meet targets or siphon off funds.
                                </p>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                                    A forged signature is a violation of the very foundation of the Indian Contract Act, 1872. Without 'free consent,' there is no contract. Yet, for the victim, the burden of proof often feels insurmountable. Banks, in their hurry to recover money, often treat the victim as the culprit. This is where specialized legal intervention becomes a necessity.
                                </p>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 font-bold text-[#1F5EFF]">
                                    At SettleLoans, we specialize in 'Exoneration Law.' We don't just settle debt; we prove it never existed in the first place. A forged signature is a house of cards—we have the legal tools to knock it down.
                                </p>
                            </div>
                        </section>

                        <section id="forgery-methods" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                                How Loan Forgery Happens: The Indian Context
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Forgery in loans can be as simple as an agent signing for you on a paper form or as complex as 'Digital Signature Forgery.' In many cases we handle, the victim originally provided their KYC documents (Aadhaar, PAN) for a legitimate purpose, which were then misused to generate multiple unauthorized loans.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                'Trace Forgery' (tracing your signature from another document) and 'Simulated Forgery' (practicing your handwriting to mimic it) are common. In the era of digital loans, 'Identity Spoofing'—where a fraudster uses your photos and details to pass a 'Liveness Check'—is the new frontier of loan forgery. Understanding the 'Modus Operandi' is crucial for building a strong legal defense.
                            </p>
                        </section>

                        <section id="immediate-action" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                                First Strike: FIR and the Police Procedure
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The moment you discover a forged loan, time is of the essence. A verbal complaint to the bank manager is never enough. You must establish a 'Legal Record.'
                            </p>
                            <div className="bg-red-900 text-white p-8 rounded-2xl mb-8">
                                <h3 className="text-2xl font-bold mb-4 italic underline">The Fraud Response Protocol</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#1F5EFF] font-bold text-xl">1.</span>
                                        <span><strong>Bank Notification:</strong> Send a formal letter via RPAD to the Nodal Officer of the bank, marking the loan as 'Unauthorized and Fraudulent.' Demand the preservation of all original documents and CCTV footage.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#1F5EFF] font-bold text-xl">2.</span>
                                        <span><strong>Filing an FIR:</strong> Approach the local police station or the specialized Cyber Crime Cell. Request an FIR under the relevant sections of the IPC/BNS. The FIR is your most powerful evidence of 'Non-Involvement.'</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#1F5EFF] font-bold text-xl">3.</span>
                                        <span><strong>Magistrate Complaint:</strong> If the police refuse to register an FIR (which is common in loan disputes), we help you file a 'Private Complaint' under Section 156(3) of the CrPC/BNSS to force an investigation.</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section id="forensic-evidence" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                                The Science of Truth: Forensic Handwriting Analysis
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                In a dispute over forged signatures, the Handwriting Expert is the 'Star Witness.' A forgery might look like your signature to the naked eye, but it never has your unique 'Micro-Muscular Handwriting Habits.'
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Experts analyze 'Pen Pressure,' 'Line Quality,' 'Hesitation Marks,' and 'Initial/Terminal Strokes.' At SettleLoans, we work with certified forensic document examiners to provide an unofficial 'Pre-Trial Report.' If this report confirms forgery, it acts as a massive leverage point to force the bank to settle the dispute without a long legal battle.
                            </p>
                        </section>

                        <section id="ipc-bns-sections" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                                Criminal Statutes: IPC vs. BNS Sections
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Loan forgery is a serious criminal offense in India. With the implementation of the Bharatiya Nyaya Sanhita (BNS), the legal landscape has updated.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">Section 463/467/468 IPC</h4>
                                    <p className="text-sm text-gray-800 leading-relaxed">
                                        Classical sections for forgery, forgery of valuable security, and forgery for cheating. These carry penalties of up to life imprisonment in extreme cases.
                                    </p>
                                </div>
                                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                    <h4 className="text-lg font-bold text-blue-900 mb-2">New BNS Provisions</h4>
                                    <p className="text-sm text-blue-800 leading-relaxed font-bold">
                                        Sections 335 to 340 of the BNS now handle forgery and fraudulent documents with a focus on electronic records as well.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="bank-internal-audit" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                                The Bank's Liability: Vicarious Responsibility
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Banks often argue that 'if an agent forged it, it's not the bank's fault.' This is legally wrong. Under the principle of 'Vicarious Liability,' the bank is responsible for the acts of its employees and authorized agents during their course of employment.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                If a loan was sanctioned without proper KYC verification or 'Physical Sign-Off' by a bank official, it is a gross 'Deficiency in Service.' We hold the bank's higher management accountable for the failures of their internal audit systems.
                            </p>
                        </section>

                        <section id="rbi-ombudsman-fraud" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                                Winning with the RBI Ombudsman
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The Integrated Ombudsman Scheme, 2021, is a faster route than the courts. The Ombudsman has the power to order the bank to 'Cease Collection' and 'Reinstate Credit Status.' To win here, we draft a precision-engineered complaint that highlights the bank's violation of the 'Master Circular on Frauds.'
                            </p>
                        </section>

                        <section id="civil-court-declaration" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 uppercase tracking-widest font-black">Suit for Declaration: Voiding the Loan Contract</h2>
                            <p className="mb-6">
                                Sometimes, a criminal case isn't enough to stop the bank's civil recovery process. We file a 'Suit for Declaration and Injunction' in a Civil Court. We ask the court to declare the loan agreement 'Void ab initio' (invalid from the start) and to permanently restrain the bank from recovering any money from you.
                            </p>
                            <div className="bg-white p-8 rounded-2xl border border-[#DEDEDE] shadow-sm mb-8">
                                <h3 className="text-xl font-black text-[#1F5EFF] mb-4">The Civil Defense Strategy</h3>
                                <p className="leading-relaxed mb-4">
                                    We use the 'Burden of Proof' to our advantage. While we must prove forgery, the bank must prove they followed every 'Due Diligence' step required by law. Most of the time, the bank's lack of internal documentation becomes their downfall.
                                </p>
                            </div>
                        </section>

                        <section id="cibil-rectification" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Clearing the CIBIL Fraud Stain</h2>
                            <p className="mb-6">
                                Proving forgery in court is only half the battle. Your credit score might still be in ruins. We handle the technical process of 'CIBIL Rectification' by providing the credit bureaus (CIBIL, Experian, Equifax) with the certified copies of the FIR, the Forensic Report, and the Bank's own Fraud Closure Letter.
                            </p>
                        </section>

                        <section id="digital-forgery-threat" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">The Rise of Digital Loan Forgery</h2>
                            <p className="mb-6">
                                Modern forgery doesn't use a pen; it uses a keyboard. 'Session Hijacking' and 'OTP Fraud' are the digital equivalents of a forged signature. If you never received the 'Disbursal OTP' or never performed the 'e-KYC,' we challenge the bank's 'IT Audit Trail' to prove the loan was fraudulent.
                            </p>
                        </section>

                        <section id="preventative-measures" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">How to Prevent Future Loan Identity Theft</h2>
                            <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100">
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <span className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs">!</span>
                                        <span>Never share your KYC documents (Aadhaar/PAN) with unauthorized agents.</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs">!</span>
                                        <span>Subscribe to 'Credit Report Alerts' to catch unauthorized applications in real-time.</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs">!</span>
                                        <span>Always use 'Masked Aadhaar' when a physical copy is required.</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section id="legal-representation" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center text-blue-600">Why Expert Legal Counsel is Non-Negotiable</h2>
                            <p className="mb-6">
                                Forgery cases are decided on 'Technicalities.' A missing police stamp or a poorly drafted affidavit can ruin your case. At SettleLoans, we bring a multi-disciplinary team of criminal lawyers, civil litigators, and forensic technology experts to your side. We don't just 'help'—we take complete command of the legal narrative.
                            </p>
                        </section>

                        <section id="case-studies" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center text-red-600">Identity Restored: Forgery Victims Vindicated</h2>
                            <div className="grid md:grid-cols-2 gap-6 not-prose">
                                {[
                                    { name: "Anil M.", loc: "Pune", type: "Loan Cancellation", outcome: "2L Debt Voided", story: "Found a 2 lakh loan on my CIBIL I never took. SettleLoans proved the signature was forged. The loan was cancelled and my score restored." },
                                    { name: "Kavita S.", loc: "Delhi", type: "Fraud Case", outcome: "FIR & Exoneration", story: "A local agent forged my documents for a commission. SettleLoans handled the FIR and the bank's internal forensic team perfectly." },
                                    { name: "Meera P.", loc: "Mumbai", type: "Digital Forgery", outcome: "App Loan Deleted", story: "My identity was stolen for an app loan. SettleLoans tracked the IP addresses and proved it wasn't me. Complete victory." },
                                    { name: "Sanjeev R.", loc: "Indore", type: "Bank Negligence", outcome: "Apology & Waiver", story: "The bank manager colluded with an agent. SettleLoans' legal notice forced an internal audit. The debt was waived entirely." }
                                ].map((review, i) => (
                                    <div key={i} className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm hover:shadow-md transition-all">
                                        <div className="flex items-center mb-4">
                                            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center font-bold text-red-600 mr-3">
                                                {review.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-[#2E2E2E]">{review.name}</h5>
                                                <p className="text-xs text-gray-400">{review.loc}</p>
                                            </div>
                                            <div className="ml-auto text-yellow-400 text-sm">★★★★★</div>
                                        </div>
                                        <div className="mb-4 text-xs font-mono bg-red-50 p-2 rounded border border-red-100 uppercase tracking-tighter">
                                            <span className="block text-red-700 font-bold">{review.outcome}</span>
                                        </div>
                                        <p className="text-sm text-gray-600 italic leading-relaxed">"{review.story}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="faqs" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Forged Loan Signatures: Your Questions Answered</h2>
                            <div className="space-y-4 not-prose">
                                {[
                                    { q: "What if I accidentally signed a blank paper and the bank used it for a loan?", a: "This is a form of 'Constructive Forgery.' While your signature is genuine, the 'Application' is fraudulent because the terms were filled without your knowledge. Legal help is vital here to prove the intent to cheat." },
                                    { q: "Can the bank still harass me if I have proof of forgery?", a: "Legally, they shouldn't. Practically, they might. A 'Cease and Desist' notice from our lawyers usually stops all collection activity while the investigation is ongoing." },
                                    { q: "Can I get compensation for the mental agony caused by a forged loan?", a: "Yes. Both Consumer Courts and the RBI Ombudsman can award compensation for the harassment, loss of credit score, and mental trauma caused by the bank's negligence." },
                                    { q: "Is a digital signature more secure than a pen signature?", a: "Technically, yes, due to encryption. However, if your phone or computer was compromised, digital forgery is actually faster for the fraudster. We analyze the 'Digital Footprint' and IP addresses to prove fraud." },
                                    { q: "What happens to the fraudster if my case is proven?", a: "They face criminal prosecution for forgery and cheating. If they were a bank employee or agent, they would also face life-long debarment from the financial industry." },
                                    { q: "Does a handwriting expert's report guarantee a win in court?", a: "It is a 'Persuasive Evidence.' While judges generally rely on experts, the court will also look at 'Circumstantial Evidence' like where the loan money went (if it didn't go to your account, that's a huge plus)." },
                                    { q: "Can I settle a forged loan just to get it off my CIBIL?", a: "WE STRONGLY ADVISE AGAINST THIS. Paying even a single rupee toward a forged loan can be seen as an 'Admission of Liability.' You must fight for a total cancellation of the debt." },
                                    { q: "Will the police actually investigate a small loan forgery?", a: "Small loans are often ignored by busy local police. We help you escalate the matter to senior officials or the Economic Offences Wing (EOW) to ensure the case is taken seriously." },
                                    { q: "What if the bank lost the original agreement?", a: "That is excellent for you! In a forgery case, the burden is on the bank to produce the original document to prove its validity. If they lost it, their case virtually disappears." },
                                    { q: "How can SettleLoans prove I didn't get the money?", a: "We conduct a 'Financial Forensic Audit.' By proving there were no corresponding entries in any of your known bank accounts, we create an irrefutable gap in the bank's story." }
                                ].map((faq, i) => (
                                    <details key={i} className="group bg-white border border-[#DEDEDE] rounded-xl overflow-hidden hover:shadow-md transition-all border-b-4 border-b-[#E11D48]/20">
                                        <summary className="flex justify-between items-center p-5 cursor-pointer font-black text-[#2E2E2E] list-none bg-gray-50 group-open:bg-white transition-colors">
                                            <span className="text-lg">{i + 1}. {faq.q}</span>
                                            <span className="transition-transform group-open:rotate-180">
                                                <svg className="w-5 h-5 text-[#E11D48]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7"></path></svg>
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
                            <p className="text-gray-400 text-sm italic">Disclaimer: SettleLoans provides specialized legal defense services for victims of financial fraud. We are a private firm and work independently of law enforcement agencies and banking regulators.</p>
                        </div>

                        {/* Mobile CTA */}
                        <div className="lg:hidden mt-16 mb-8">
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#1F5EFF]/20">
                                <div className="bg-[#1F5EFF] p-6 text-center text-white">
                                    <h3 className="text-2xl font-black mb-2">Expose the Fraud</h3>
                                    <p className="opacity-90 text-sm">Expert legal tools to prove forgery and clear your name.</p>
                                </div>
                                <div className="p-8 text-center text-[#DEDEDE]">
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-xl hover:scale-105 transition-all shadow-lg text-lg">
                                        Consult Our Fraud Experts
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
                                    <h3 className="text-lg font-black text-white">Fight Identity Theft</h3>
                                </div>
                                <div className="p-6 text-center">
                                    <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                                        Don't be a victim of forged loans. Use the power of criminal law and forensics to win.
                                    </p>
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg">
                                        Contact Our Lawyers
                                    </Link>
                                    <p className="mt-4 text-xs text-[#DEDEDE]/60 uppercase tracking-widest font-black">Legal Excellence</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2">Fraud Expertise</h3>
                                <ul className="space-y-4 text-sm font-bold">
                                    <li>
                                        <Link href="/digital-online-cyber-loan-disputes" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            Cyber Loan Fraud
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/legal-case-for-loan-sanction-without-consent" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            Sanction Disputes
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/loan-agreement-drafting-review" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            Agreement Audits
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/loan-default-recovery-freeze-defense" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            Recovery Defense
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
