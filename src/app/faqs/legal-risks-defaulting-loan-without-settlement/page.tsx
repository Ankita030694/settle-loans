import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation, faStar, faCheck } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Legal Risks of Defaulting on a Loan Without Settlement in India | 2024-25",
    description: "Understand the civil and criminal risks of loan default in India. Learn about SARFAESI, Section 138, Wilful Defaulter status, and legal rights for 2024-25.",
    alternates: {
        canonical: "https://settleloans.in/faqs/legal-risks-defaulting-loan-without-settlement",
    },
};

export default function LegalRisksLoanDefaultPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/faqs/legal-risks-defaulting-loan-without-settlement#webpage",
                "url": "https://settleloans.in/faqs/legal-risks-defaulting-loan-without-settlement",
                "name": "Legal Risks of Defaulting on a Loan Without Settlement in India | 2024-25 Guide",
                "description": "Comprehensive guide on civil and criminal legal consequences of loan default in India, including SARFAESI Act, Section 138 NI Act, and borrower rights.",
                "breadcrumb": { "@id": "https://settleloans.in/faqs/legal-risks-defaulting-loan-without-settlement#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/faqs/legal-risks-defaulting-loan-without-settlement#breadcrumb",
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
                        "name": "Legal Risks of Loan Default",
                        "item": "https://settleloans.in/faqs/legal-risks-defaulting-loan-without-settlement"
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/faqs/legal-risks-defaulting-loan-without-settlement#article",
                "headline": "What are the legal risks of defaulting on a loan without settlement in India",
                "description": "A deep-dive into the legal framework of debt recovery in India, highlighting civil suits, criminal charges, and how to protect yourself legally.",
                "image": "https://settleloans.in/logo/logo.svg",
                "author": {
                    "@type": "Organization",
                    "name": "SettleLoans Legal Analysis Team"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "SettleLoans",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://settleloans.in/logo/logo.svg"
                    }
                },
                "datePublished": "2024-06-10",
                "dateModified": "2024-02-21"
            },
            {
                "@type": "FAQPage",
                "@id": "https://settleloans.in/faqs/legal-risks-defaulting-loan-without-settlement#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Can I be jailed for not paying a personal loan?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "While being unable to pay a personal loan is a civil matter, you can face imprisonment if a cheque given for the loan bounces or if the bank proves that you committed fraud (like using fake documents) to obtain the loan."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What happens if I ignore a legal notice from the bank?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Ignoring a legal notice is a huge mistake. The court can pass an 'Ex-parte' decree, which means they can decide the case in the bank's favor without hearing your side. This allows the bank to start seizing your assets immediately."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can the bank take my only home for a default of 5 lakhs?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "If the home is mortgaged to the bank for that loan, they can take it under the SARFAESI Act regardless of the amount. If the loan is unsecured, the court generally avoids auctioning your only residence for small amounts but can still attach other assets and your salary."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How many EMIs can I miss before the bank takes legal action?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Typically, after 3 missed EMIs, the bank marks the account as an NPA. Legal notices usually start after the 4th or 5th missed EMI, and court cases are filed if there is no response within 6 months of the first default."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does the SARFAESI Act apply to credit card dues?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No, the SARFAESI Act only applies to secured loans where there is a 'charge' or 'mortgage' on an asset. Credit card debt is unsecured and is handled through civil suits, summary suits, or Lok Adalats."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can recovery agents enter my house without permission?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No, recovery agents cannot enter your house without your permission. RBI guidelines strictly prohibit 'trespass' and 'intimidation'. You have the right to ask for their ID card and the bank's authorization letter before talking to them."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Will my family be responsible for my loan defaults?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "In India, family members are not legally responsible for your debts unless they are 'co-applicants' or 'guarantors' for that specific loan. However, they may face social harassment, which is why a legal settlement is advisable."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I settle a loan even after the bank has filed a court case?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, you can settle at any stage. Courts and Lok Adalats actually encourage settlements. If you reach an agreement, the bank will file a memo to 'Withdraw' the case once the settlement amount is paid."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the 'Statute of Limitations' for loan recovery in India?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The Limitation Act generally gives banks 3 years from the date of default or from the last date of 'acknowledgment of debt' to file a legal case. However, banks are very efficient at ensuring they file cases before this period expires."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can a default on one loan affect my other bank accounts?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "If you have multiple accounts with the same bank, they can use the 'Right of Set-off' to balance your default by taking money from your savings account. If the accounts are in different banks, they need a court order (Garnishee Order) to touch those funds."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can the bank file a case in a different city?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Usually, the bank can only file a case where the loan was disbursed, where you live, or where you work. However, some online lending apps have clauses that allow them to file cases in 'Arbitration' centers in cities like Delhi or Bangalore."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is an 'Arbitration' notice?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Many private lenders use Arbitration as a faster alternative to court. An 'Arbitrator' (usually a private lawyer appointed by the bank) hears the case and passes an 'Award'. If you get an arbitration notice, you must attend or send a lawyer."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can the bank block my passport for a loan default?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "For a regular personal loan or credit card default, your passport is not blocked. Only if you are declared a 'Fugitive Economic Offender' or if there is a 'Look-out Circular' can your travel be restricted."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What happens to my 'Guarantor' if I default?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A guarantor is 100% legally liable for your debt. If you don't pay, the bank can sue the guarantor, seize their assets, and destroy their CIBIL score exactly like yours. This is why being a guarantor is a huge risk."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can the bank recover money from my EPF or Pension?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No, according to various Supreme Court rulings, money in your Employee Provident Fund (EPF) and your basic pension cannot be attached for the recovery of civil debts. This is your ultimate safety net for old age."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the difference between 'Settled' and 'Closed' in CIBIL?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Closed means you paid 100% of the dues. Settled means you paid a portion (e.g., 50%) and the bank waived the rest. Both stop legal action, but 'Closed' is better for your future credit score."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can a digital lending app access my contacts if I default?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Legally, NO. RBI has strictly banned lending apps from accessing your contacts, gallery, or personal data. If an app does this and starts calling your contacts, it is a criminal offense."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is a 'Garnishee Order'?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A Garnishee Order is an order from a court to a third party (like your employer or another bank) to pay money they owe you directly to the lender. It is a powerful execution tool for the bank."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "If I have no assets, what can the bank do?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "If you have no property, no luxury car, no bank balance, and no job, the bank is essentially hitting a wall. In such cases, they will wait for a few years and then eventually write off the loan or sell it to an ARC."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Should I fear the 'Debt Recovery Agents' more than the 'Court'?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely not. The court is a place of logic and law where you have rights. Recovery agents often use illegal intimidation because they realize they don't have a strong legal case."
                        }
                    }
                ]
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/faqs/legal-risks-defaulting-loan-without-settlement#service",
                "name": "Legal Protection during Loan Settlement",
                "description": "Professional legal defense and negotiation services to protect borrowers from aggressive recovery and court cases during the debt settlement process.",
                "brand": {
                    "@type": "Brand",
                    "name": "SettleLoans"
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "1840"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Amit Sharma" },
                        "datePublished": "2024-11-15",
                        "reviewBody": "I was terrifed of the legal notices I received. SettleLoans handled the bank's lawyers and got a great settlement for my personal loan.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Priyanka Verma" },
                        "datePublished": "2024-12-05",
                        "reviewBody": "They saved my home from SARFAESI action by pointing out procedural errors. Forever grateful for their legal expertise.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Vikram Singh" },
                        "datePublished": "2025-01-10",
                        "reviewBody": "Stopped the criminal case under Section 138 NI Act within weeks. Their understanding of the law is incredible.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Sonia Malhotra" },
                        "datePublished": "2025-02-14",
                        "reviewBody": "The best decision I made was to call SettleLoans. They stopped the recovery agents and closed my personal loan for 35% of the total dues.",
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
                <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden min-h-[400px] md:min-h-[500px] flex flex-col justify-center text-center">
                    <div className="absolute top-0 left-0 w-full h-full bg-black/20 pointer-events-none"></div>
                    <div className="max-w-5xl mx-auto relative z-10">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase border border-[#1F5EFF]/20">
                            Legal Protection & Debt Recovery
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                            Legal Risks of Defaulting on a <br className="hidden md:block" /> Loan Without Settlement
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.2] font-normal">
                            Don't let debt destroy your life. Understand the 2024-25 legal landscape in India, protect your assets, and learn how a professional settlement stops legal action.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Stop Legal Action Now
                            </Link>
                            <Link href="#introduction" className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-[#2E2E2E] font-bold py-4 px-10 rounded-[10px] border border-[#DEDEDE] hover:bg-gray-50 transition-all duration-300 text-lg">
                                Read Legal Guide
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
                                    Legal Risks Analysis
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">

                    {/* Left Column: Table of Contents (Sticky) */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <TableOfContents
                            items={[
                                { id: "introduction", title: "Introduction" },
                                { id: "foundation", title: "Legal Foundation" },
                                { id: "civil-risks", title: "Civil Recovery Risks" },
                                { id: "criminal-risks", title: "Criminal Law Risks" },
                                { id: "credit-impact", title: "Credit Score Impact" },
                                { id: "psychological-risks", title: "Social/Mental Risks" },
                                { id: "why-settlement", title: "Why Settlement Wins" },
                                { id: "drt-role", title: "The Role of DRT" },
                                { id: "ibc-insolvency", title: "Individual Insolvency" },
                                { id: "wilful-defaulter", title: "Wilful Defaulter Status" },
                                { id: "borrower-rights", title: "Your Fundamental Rights" },
                                { id: "bank-wise-recovery", title: "Bank-wise Strategies" },
                                { id: "defense-strategy", title: "Legal Defense Protocol" },
                                { id: "case-study", title: "Real Success Story" },
                                { id: "specialized-types", title: "Home/Car/Edu Loans" },
                                { id: "limitation-act", title: "Limitation Act Shield" },
                                { id: "court-summons", title: "Handing Summons" },
                                { id: "future-impact", title: "Cost of Legal Battles" },
                                { id: "faqs", title: "Comprehensive FAQs" },
                                { id: "conclusion", title: "Final Conclusion" }
                            ]}
                        />
                    </aside>

                    {/* Middle Column: Main Content */}
                    <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)] text-justify">

                        <section id="introduction" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Navigating the Storm of Loan Default and Legal Action
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Defaulting on a loan is a stressful experience that millions of Indians face due to unforeseen financial hardships like job losses, medical emergencies, or business failures. While the immediate concern is often the relentless calls from recovery agents, the long-term legal and financial risks of defaulting without a formal settlement or closure are far more severe. In the Indian legal landscape, debt recovery is governed by a complex web of civil and, in certain cases, criminal laws. Understanding these risks is the first step toward reclaiming your financial freedom.
                            </p>
                            <div className="bg-red-50 p-8 rounded-2xl border-l-4 border-red-500 mb-8">
                                <h3 className="text-lg font-bold text-red-900 mb-4 flex items-center">
                                    <svg className="w-5 h-5 mr-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
                                    The 2024 Legal Landscape
                                </h3>
                                <p className="text-red-800">
                                    In 2024 and 2025, the Reserve Bank of India (RBI) has further strengthened the regulatory framework, mandating that lenders follow "fair practices" while ensuring they have robust mechanisms to recover Non-Performing Assets (NPAs). Ignoring the law is no longer an option for the modern borrower.
                                </p>
                            </div>
                        </section>

                        <section id="foundation" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                The Foundation of Debt Recovery Law in India
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                When you sign a loan agreement with a bank or a Non-Banking Financial Company (NBFC), you enter into a legally binding contract under the Indian Contract Act, 1872. This contract grants the lender specific rights to recover the principal amount, interest, and various penalties if you fail to meet your repayment obligations.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                An account is typically classified as an NPA when the Equated Monthly Installment (EMI) has been overdue for more than 90 days. Once this threshold is crossed, the lender's recovery department or specialized debt recovery agencies take over. If you do not initiate a settlement, the bank will move from persuasive communication to formal legal proceedings.
                            </p>
                        </section>

                        <section id="civil-risks" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Civil Legal Risks: The Primary Recovery Avenue
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                In the majority of cases, loan default is a civil matter. Banks prefer civil recovery because it allows them to target your assets directly to recover the money.
                            </p>

                            <h3 className="text-2xl font-bold mb-4">1. The SARFAESI Act, 2002 (For Secured Loans)</h3>
                            <p className="mb-6">For secured loans like home loans, car loans, or loans against property, lenders use the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002. This is perhaps the most powerful tool in a lender's arsenal because it allows them to take possession of the collateral without the intervention of a court.</p>
                            <ul className="list-disc pl-6 mb-8 space-y-3">
                                <li><strong>Issuance of Section 13(2) Notice:</strong> Once the account is an NPA, the bank issues a 60-day notice demanding full payment.</li>
                                <li><strong>Section 13(4) Possession:</strong> If the borrower fails to pay within 60 days, the bank can take physical or symbolic possession of the property.</li>
                                <li><strong>Auctioning the Asset:</strong> The bank can then auction the property to recover the dues. Any surplus amount after the sale is returned to the borrower.</li>
                            </ul>

                            <h3 className="text-2xl font-bold mb-4">2. Civil Suits and Summary Suits</h3>
                            <p className="mb-6">For unsecured loans like personal loans and credit card dues, lenders file a 'Summary Suit' under Order 37 of the Code of Civil Procedure (CPC). This is a faster legal process where the defendant does not have an automatic right to defend their case unless the court grants them 'leave to defend' based on genuine merits.</p>
                        </section>

                        <section id="criminal-risks" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Criminal Legal Risks: When Default Becomes a Crime
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                While simply being unable to pay a loan is not a crime in India, certain actions or circumstances associated with the default can trigger criminal proceedings.
                            </p>
                            <div className="bg-orange-50 p-6 rounded-2xl mb-8 border border-orange-100 italic font-medium text-orange-950">
                                <strong>Warning:</strong> Cheque bounce (Section 138 NI Act) and digital mandate failure (Sec 25 PSSA) are criminal offenses punishable by up to 2 years in prison.
                            </div>
                            <p className="text-lg leading-relaxed mb-6">
                                If the lender can prove that you had 'fraudulent intent' at the time of taking the loan (using forged documents), they can file a First Information Report (FIR) under Section 420 (Cheating) and Section 406 (Criminal Breach of Trust) of the IPC.
                            </p>
                        </section>

                        <section id="credit-impact" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                The Devastating Impact on Credit Score (CIBIL)
                            </h2>
                            <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-8 rounded-2xl mb-8">
                                <div className="text-6xl font-black text-red-500">300</div>
                                <div>
                                    <h4 className="font-bold text-xl mb-2">Financial Death Sentence</h4>
                                    <p className="text-sm">A major default remains on your CIBIL report for at least seven years. Getting a new credit card, a personal loan, or even a basic consumer durable loan for a mobile phone becomes virtually impossible during this period.</p>
                                </div>
                            </div>
                        </section>

                        <section id="psychological-risks" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight text-justify">
                                The Psychological Burden and Social Risks
                            </h2>
                            <p className="text-lg leading-relaxed mb-6 uppercase tracking-wider font-bold text-gray-500 text-xs">A state of perpetual anxiety</p>
                            <p className="text-lg leading-relaxed mb-6">
                                Despite RBI guidelines, many recovery agents use aggressive tactics. You might face multiple calls daily, visits to your workplace, and visits to your home, which causes social embarrassment and damages your reputation among neighbors and collegues. Debt issues are a leading cause of domestic disputes and mental health issues in India.
                            </p>
                        </section>

                        <section id="why-settlement" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Why Settlement is the Better Path
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                                    <h4 className="font-bold text-green-900 mb-2">Legal Immunity</h4>
                                    <p className="text-green-800 text-sm">A formal settlement letter legally bars the bank from filing any further civil or criminal cases for that specific debt.</p>
                                </div>
                                <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                                    <h4 className="font-bold text-green-900 mb-2">Immediate Peace</h4>
                                    <p className="text-green-800 text-sm">Settlement immediately stops all recovery calls, visits, and legal notices, allowing you to breathe again.</p>
                                </div>
                            </div>
                        </section>

                        <section id="drt-role" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                The Role of Debt Recovery Tribunals (DRT)
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                For high-value defaults (typically above 20 lakhs), banks approach the Debt Recovery Tribunal (DRT). DRTs are specialized quasi-judicial bodies designed for the fast-track recovery of bank dues.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                The Recovery Officer within the DRT has broad powers to arrest the defaulter, attach property, and appoint receivers to manage the defaulter's business. Appealing a DRT order requires a deposit of often 50% of the debt amount, making it a very difficult path.
                            </p>
                        </section>

                        <section id="ibc-insolvency" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Individual Insolvency under the IBC: A Radical Alternative
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The Insolvency and Bankruptcy Code (IBC), 2016, introduced a specialized section for individual insolvency. This creates an 'Interim Moratorium' where all legal cases against you are frozen while you work with an Insolvency Professional to create a 'Repayment Plan'.
                            </p>
                        </section>

                        <section id="wilful-defaulter" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Decoding the 'Wilful Defaulter' Status
                            </h2>
                            <p className="text-lg leading-relaxed mb-6 italic">
                                A wilful defaulter is someone who has the capacity to pay but chooses not to, or someone who has diverted loan funds for other purposes.
                            </p>
                            <div className="bg-gray-900 text-[#DEDEDE] p-8 rounded-2xl mb-8">
                                <h4 className="text-xl font-bold mb-4 uppercase text-[#1F5EFF]">Sanctions include:</h4>
                                <ul className="space-y-4">
                                    <li className="flex gap-4">
                                        <div className="w-6 h-6 rounded bg-red-600 flex-shrink-0"></div>
                                        <span>Barred from any fresh credit for 5 years across all banks/NBFCs in India.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-6 h-6 rounded bg-red-600 flex-shrink-0"></div>
                                        <span>Barred from starting any new business or joining any corporate board.</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section id="borrower-rights" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Borrower Rights: The Fair Practices Code
                            </h2>
                            <div className="space-y-8">
                                <div>
                                    <h4 className="font-black text-xl mb-3 flex items-center">
                                        <svg className="w-5 h-5 mr-3 text-[#1F5EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                        Right to Notice
                                    </h4>
                                    <p>You have the constitutional right to be informed. Banks cannot suddenly take your property or file a case without sending at least one formal notice.</p>
                                </div>
                                <div>
                                    <h4 className="font-black text-xl mb-3 flex items-center">
                                        <svg className="w-5 h-5 mr-3 text-[#1F5EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
                                        Right to be Heard
                                    </h4>
                                    <p>In any legal forum, you have the right to present your case, explain your hardship, and challenge the bank's calculations of interest and penalties.</p>
                                </div>
                                <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                                    <h4 className="font-bold text-blue-900 mb-2">Right to Privacy</h4>
                                    <p className="text-blue-800 text-sm">Recovery agents cannot call you before 8 AM or after 7 PM. They cannot enter your house without permission or harass family members who aren't co-applicants.</p>
                                </div>
                            </div>
                        </section>

                        <section id="bank-wise-recovery" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                How Large Banks Handle Recovery: Strategy Comparison
                            </h2>
                            <div className="overflow-x-auto mb-8 border border-gray-200 rounded-2xl font-bold">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-gray-100 text-gray-700 uppercase">
                                        <tr>
                                            <th className="px-6 py-4">Bank Category</th>
                                            <th className="px-6 py-4">Recovery Style</th>
                                            <th className="px-6 py-4">Preferred Tool</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-6 py-4 font-bold">HDFC / ICICI</td>
                                            <td className="px-6 py-4">Aggressive & Fast</td>
                                            <td className="px-6 py-4 font-bold">Summary Suits / Sec 138</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold">SBI / PNB</td>
                                            <td className="px-6 py-4">Slower but Persistent</td>
                                            <td className="px-6 py-4 font-bold">Lok Adalats / OTS Schemes</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold">Fintech Apps</td>
                                            <td className="px-6 py-4">High Frequency Digital</td>
                                            <td className="px-6 py-4 font-bold">Arbitration Notices</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section id="defense-strategy" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Step-by-Step Legal Defense Strategy
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                If you receive a summons or a legal notice, do not panic. Always verify the notice on the e-Courts app. Reply to the notice admitting the debt but explaining the 'Hardship' and contesting any unfair interest or penalties. Simultaneously, keep a written track of your settlement offers.
                            </p>
                        </section>

                        <section id="case-study" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Case Study: The Power of a Strong Legal Reply
                            </h2>
                            <p className="text-lg leading-relaxed mb-6 p-8 bg-blue-50 rounded-2xl border-l-8 border-[#1F5EFF] italic">
                                In 2023, a borrower with a 12 lakh default received a possession notice. Their lawyer filed an objection under Section 13(3A) of the SARFAESI Act, pointing out the genuine medical hardship and procedural flaws in the bank's action. The bank, seeing a long legal battle ahead, accepted a settlement of 7.5 lakhs, allowing the family to keep their home.
                            </p>
                        </section>

                        <section id="specialized-types" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Specialized Legal Strategies for Different Loan Types
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Education loans have unique 'Moratorium Rights'. Home loans allow you to challenge the bank's 'Valuation' to stop auctions. Vehicle loans have strict protections against 'Illegal Repossession' without prior notice.
                            </p>
                        </section>

                        <section id="limitation-act" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                The Limitation Act: When is a Debt 'Non-Recoverable'?
                            </h2>
                            <p className="text-lg leading-relaxed mb-6 font-bold text-red-700 underline">
                                The 3-Year Rule: Banks generally have 3 years from the date of default to file a case. Any payment or 'Acknowledgment of Debt' (AOD) resets this clock.
                            </p>
                        </section>

                        <section id="court-summons" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                Managing Court Summons: A Practical Checklist
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Never ignore 'Bailable Warrants'. Scan the QR code on your summons. Draft a 'Written Statement' (WS) that focuses on the bank's procedural failures rather than just your inability to pay.
                            </p>
                        </section>

                        <section id="future-impact" className="scroll-mt-32 mb-16 text-justify">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                The Impact of a Legal Battle on Your Future
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Legal battles are expensive and mentally draining. Professional legal fees can sometimes exceed the settlement savings. This is why 90% of banking cases end in a 'Compromise Settlement'. The goal is a 'Win-Win' where the account is closed and everyone moves on.
                            </p>
                        </section>

                        <section id="faqs" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mt-16 mb-8 text-center uppercase tracking-tighter">Legal & Settlement FAQs</h2>
                            <div className="space-y-4 not-prose">
                                {[
                                    { q: "Can I be jailed for not paying a personal loan?", a: "While being unable to pay a personal loan is a civil matter, you can face imprisonment if a cheque given for the loan bounces or if the bank proves that you committed fraud (like using fake documents) to obtain the loan." },
                                    { q: "What happens if I ignore a legal notice from the bank?", a: "Ignoring a legal notice is a huge mistake. The court can pass an 'Ex-parte' decree, which means they can decide the case in the bank's favor without hearing your side. This allows the bank to start seizing your assets immediately." },
                                    { q: "Can the bank take my only home for a default of 5 lakhs?", a: "If the home is mortgaged to the bank for that loan, they can take it under the SARFAESI Act regardless of the amount. If the loan is unsecured, the court generally avoids auctioning your only residence for small amounts but can still attach other assets and your salary." },
                                    { q: "How many EMIs can I miss before the bank takes legal action?", a: "Typically, after 3 missed EMIs, the bank marks the account as an NPA. Legal notices usually start after the 4th or 5th missed EMI, and court cases are filed if there is no response within 6 months of the first default." },
                                    { q: "Does the SARFAESI Act apply to credit card dues?", a: "No, the SARFAESI Act only applies to secured loans where there is a 'charge' or 'mortgage' on an asset. Credit card debt is unsecured and is handled through civil suits, summary suits, or Lok Adalats." },
                                    { q: "Can recovery agents enter my house without permission?", a: "No, recovery agents cannot enter your house without your permission. RBI guidelines strictly prohibit 'trespass' and 'intimidation'. You have the right to ask for their ID card and the bank's authorization letter before talking to them." },
                                    { q: "Will my family be responsible for my loan defaults?", a: "In India, family members are not legally responsible for your debts unless they are 'co-applicants' or 'guarantors' for that specific loan. However, they may face social harassment, which is why a legal settlement is advisable." },
                                    { q: "Can I settle a loan even after the bank has filed a court case?", a: "Yes, you can settle at any stage. Courts and Lok Adalats actually encourage settlements. If you reach an agreement, the bank will file a memo to 'Withdraw' the case once the settlement amount is paid." },
                                    { q: "What is the 'Statute of Limitations' for loan recovery in India?", a: "The Limitation Act generally gives banks 3 years from the date of default or from the last date of 'acknowledgment of debt' to file a legal case. However, banks are very efficient at ensuring they file cases before this period expires." },
                                    { q: "Can a default on one loan affect my other bank accounts?", a: "If you have multiple accounts with the same bank, they can use the 'Right of Set-off' to balance your default by taking money from your savings account. If the accounts are in different banks, they need a court order (Garnishee Order) to touch those funds." },
                                    { q: "Can the bank file a case in a different city?", a: "Usually, the bank can only file a case where the loan was disbursed, where you live, or where you work. However, some online lending apps have clauses that allow them to file cases in 'Arbitration' centers in cities like Delhi or Bangalore." },
                                    { q: "What is an 'Arbitration' notice?", a: "Many private lenders use Arbitration as a faster alternative to court. An 'Arbitrator' (usually a private lawyer appointed by the bank) hears the case and passes an 'Award'. If you get an arbitration notice, you must attend or send a lawyer." },
                                    { q: "Can the bank block my passport for a loan default?", a: "For a regular personal loan or credit card default, your passport is not blocked. Only if you are declared a 'Fugitive Economic Offender' or if there is a 'Look-out Circular' can your travel be restricted." },
                                    { q: "What happens to my 'Guarantor' if I default?", a: "A guarantor is 100% legally liable for your debt. If you don't pay, the bank can sue the guarantor, seize their assets, and destroy their CIBIL score exactly like yours. This is why being a guarantor is a huge risk." },
                                    { q: "Can the bank recover money from my EPF or Pension?", a: "No, according to various Supreme Court rulings, money in your Employee Provident Fund (EPF) and your basic pension cannot be attached for the recovery of civil debts. This is your ultimate safety net for old age." },
                                    { q: "What is the difference between 'Settled' and 'Closed' in CIBIL?", a: "Closed means you paid 100% of the dues. Settled means you paid a portion (e.g., 50%) and the bank waived the rest. Both stop legal action, but 'Closed' is better for your future credit score." },
                                    { q: "Can a digital lending app access my contacts if I default?", a: "Legally, NO. RBI has strictly banned lending apps from accessing your contacts, gallery, or personal data. If an app does this and starts calling your contacts, it is a criminal offense." },
                                    { q: "What is a 'Garnishee Order'?", a: "A Garnishee Order is an order from a court to a third party (like your employer or another bank) to pay money they owe you directly to the lender. It is a powerful execution tool for the bank." },
                                    { q: "If I have no assets, what can the bank do?", a: "If you have no property, no luxury car, no bank balance, and no job, the bank is essentially hitting a wall. In such cases, they will wait for a few years and then eventually write off the loan or sell it to an ARC." },
                                    { q: "Should I fear the 'Debt Recovery Agents' more than the 'Court'?", a: "Absolutely not. The court is a place of logic and law where you have rights. Recovery agents often use illegal intimidation because they realize they don't have a strong legal case." }
                                ].map((faq, i) => (
                                    <details key={i} className="group bg-white border border-[var(--color-border)] rounded-xl overflow-hidden hover:shadow-md transition-all">
                                        <summary className="flex justify-between items-center p-5 cursor-pointer font-bold text-[var(--color-text-hero)] list-none font-sans">
                                            <span className="text-lg">{i + 1}. {faq.q}</span>
                                            <span className="transition-transform group-open:rotate-180">
                                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7"></path></svg>
                                            </span>
                                        </summary>
                                        <div className="px-5 pb-5 text-[var(--color-text-body)] opacity-90 leading-relaxed border-t border-gray-100 pt-4 mt-0 bg-gray-50/50 font-sans">
                                            {faq.a}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </section>

                        <h2 id="reviews" className="scroll-mt-32 text-2xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center uppercase tracking-tighter font-sans">Client Success Stories</h2>
                        <div className="grid md:grid-cols-2 gap-4 md:gap-6 not-prose mb-16 text-left">
                            {[
                                {
                                    name: "Amit Sharma",
                                    loc: "Delhi",
                                    loan: "SBI Personal Loan: ₹8.5L",
                                    res: "Settled: ₹3.2L",
                                    story: "I was terrified of the legal notices I received. SettleLoans handled the bank's lawyers and got a great settlement for my personal loan. The harassment stopped within days."
                                },
                                {
                                    name: "Priyanka Verma",
                                    loc: "Mumbai",
                                    loan: "Bank of Baroda Home Loan: ₹45L",
                                    res: "SARFAESI Action Stopped",
                                    story: "They saved my home from SARFAESI action by pointing out procedural errors. Forever grateful for their legal expertise and timely intervention."
                                },
                                {
                                    name: "Vikram Singh",
                                    loc: "Bangalore",
                                    loan: "ICICI Credit Card: ₹12L",
                                    res: "Settled: ₹3.8L",
                                    story: "Stopped the criminal case under Section 138 NI Act within weeks. Their understanding of the law and negotiation power is incredible. Highly recommended."
                                },
                                {
                                    name: "Sonia Malhotra",
                                    loc: "Pune",
                                    loan: "Axis Bank Personal Loan: ₹6.5L",
                                    res: "Settled: ₹2.4L",
                                    story: "The best decision I made was to call SettleLoans. They stopped the recovery agents and closed my personal loan for 35% of the total dues."
                                }
                            ].map((review, i) => (
                                <div key={i} className="bg-white p-5 md:p-6 rounded-2xl border border-[var(--color-border)] shadow-sm hover:shadow-md transition-all">
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
                                    <p className="text-[15px] md:text-base text-[var(--color-text-body)] leading-relaxed italic font-medium">"{review.story}"</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 pt-8 border-t border-[var(--color-border)] text-center text-[var(--color-text-muted)] text-sm italic mb-16">
                            <p>Disclaimer: Loan settlement is a negotiation process and outcomes are not guaranteed. Information provided for educational purposes. Settling a loan has a negative impact on your CIBIL score. Use professional firms for legal and financial protection.</p>
                        </div>

                        {/* Bottom CTA */}
                        <section className="bg-[#1F5EFF] rounded-[10px] p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
                            <div className="relative z-10 text-justify">
                                <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter text-center">Stop the Legal Harassment Today</h2>
                                <p className="text-lg md:text-2xl opacity-90 max-w-2xl mx-auto mb-10 leading-tight font-normal">
                                    Our legal experts and professional negotiators have helped thousands of Indians close their debt traps safely. Let us take over your legal worries.
                                </p>
                                <div className="text-center">
                                    <Link href="/contact" className="inline-block bg-white text-[#1F5EFF] font-bold py-5 px-12 rounded-[10px] text-xl hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-1">
                                        Free Legal Consultation
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </article>

                    {/* Right Column: CTA & Related Pages (Sticky) */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-24 space-y-8">

                            {/* CTA Container */}
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                                <div className="bg-[#1F5EFF] p-4 text-center">
                                    <h3 className="text-lg font-black text-white uppercase tracking-wider">Free Case Review</h3>
                                </div>
                                <div className="p-8 text-center">
                                    <p className="mb-8 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-normal">
                                        Received a legal notice? Send it to us for a free expert analysis and protection plan.
                                    </p>
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-[12px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg text-lg">
                                        Analyze My Notice
                                    </Link>
                                </div>
                            </div>

                            {/* Related Pages Container */}
                            <div className="bg-white p-6 rounded-2xl border border-[var(--color-border)] shadow-sm">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-4 border-b border-gray-100 pb-2">Related Legal Guides</h3>
                                <ul className="space-y-4 text-sm font-medium">
                                    <li>
                                        <Link href="/faqs/how-to-negotiate-personal-loan-settlement" className="group flex items-center text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-[var(--color-primary)] transition-colors"></span>
                                            Negotiation Secrets
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faqs/typical-process-personal-loan-settlement-india" className="group flex items-center text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-[var(--color-primary)] transition-colors"></span>
                                            Typical Process
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faqs/how-does-settling-a-loan-impact-my-cibil-credit-score" className="group flex items-center text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-[var(--color-primary)] transition-colors"></span>
                                            CIBIL Score Impact
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faqs/income-tax-implications-of-loan-settlement-india" className="group flex items-center text-[var(--color-text-body)] hover:text-[var(--color-primary)] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-[var(--color-primary)] transition-colors"></span>
                                            Income Tax Risks
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
