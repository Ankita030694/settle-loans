"use client";

import React from "react";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";

export default function DrtAccountDocumentsPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "@id": "https://settleloans.in/best-lawyer-for-account-documents-drt#article",
                "headline": "Best Lawyer for DRT Account Documents & Bank Statement Audit in India",
                "description": "Expert legal defense in DRT cases through specialized bank statement audits. Challenge interest calculations, Bankers' Books Evidence Act certification, and bank document errors.",
                "image": "https://settleloans.in/images/drt-account-docs.jpg",
                "author": { "@type": "Organization", "name": "SettleLoans" },
                "publisher": {
                    "@type": "Organization",
                    "name": "SettleLoans",
                    "logo": { "@type": "ImageObject", "url": "https://settleloans.in/logo.png" }
                },
                "datePublished": "2024-03-03",
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://settleloans.in/best-lawyer-for-account-documents-drt" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/best-lawyer-for-account-documents-drt#product",
                "name": "DRT Account Document Audit Service",
                "description": "Forensic audit of bank statements and loan documents for defense in Debt Recovery Tribunal (DRT) cases.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "840"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Rajesh Kumar" },
                        "datePublished": "2024-01-20",
                        "reviewBody": "SettleLoans found 15 lakhs in wrong interest charges by auditing our 5-year statement. The bank had to revise their claim in DRT. Incredible service.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Meena Gupta" },
                        "datePublished": "2024-02-15",
                        "reviewBody": "Their knowledge of the Bankers' Books Evidence Act is unmatched. They successfully challenged an uncertified bank statement.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What are the most important account documents in a DRT case?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The primary documents are the Statement of Account (SOA), the Section 2A certificate under the Bankers' Books Evidence Act, the Sanction Letter, and the Loan Agreement. A forensic audit of these determines the accuracy of the bank's claim."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can a DRT case be dismissed if the bank statement is not certified?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Under Section 2A of the Bankers' Books Evidence Act, electronic printouts of bank statements are only admissible as evidence if they are accompanied by a valid certificate. Failure to provide this certificate can lead to the statement being rejected as evidence."
                        }
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://settleloans.in" },
                    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://settleloans.in/services" },
                    { "@type": "ListItem", "position": 3, "name": "DRT Account Documents", "item": "https://settleloans.in/best-lawyer-for-account-documents-drt" }
                ]
            }
        ]
    };

    const tocItems = [
        { id: "introduction", title: "Introduction" },
        { id: "importance-of-documents", title: "Why Documents Matter" },
        { id: "bankers-books-act", title: "Bankers' Books Evidence Act" },
        { id: "section-2a-certification", title: "Section 2A: Electronic Records" },
        { id: "evidence-act-pari-materia", title: "BBE Act vs Evidence Act" },
        { id: "forensic-audit-framework", title: "Forensic Audit Framework" },
        { id: "case-laws-drt", title: "Significant Case Laws" },
        { id: "common-account-errors", title: "Common Bank Statement Errors" },
        { id: "penal-interest-rules", title: "RBI Rules on Penal Charges" },
        { id: "forensic-statement-audit", title: "Forensic Statement Audit" },
        { id: "rbi-fair-practices", title: "RBI Fair Practice Compliance" },
        { id: "challenging-bank-claims", title: "Challenging Bank Claims" },
        { id: "document-checklist", title: "Audit Checklist for Borrowers" },
        { id: "success-stories", title: "Case Success History" },
        { id: "faqs", title: "Common Questions" }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                />

                {/* Hero Section */}
                <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden text-center">
                    <div className="max-w-5xl mx-auto relative z-10">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
                            Technical Document Audit
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                            Best Lawyer for <span className="text-[#1F5EFF]">DRT Account Documents</span> & Statement Audit
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
                            Specialized forensic legal defense through rigorous audit of bank statements, Bankers' Books Evidence Act compliance, and hidden charge detection.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact-us" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Audit My Statements
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Breadcrumbs */}
                <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
                    <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
                        <nav aria-label="Breadcrumb">
                            <ol className="flex items-center space-x-2 text-xs md:text-sm text-[#747474]">
                                <li><Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link></li>
                                <li><span className="text-gray-300">/</span></li>
                                <li><Link href="/services" className="hover:text-[#1F5EFF] transition-colors">Services</Link></li>
                                <li><span className="text-gray-300">/</span></li>
                                <li className="font-bold text-[#2E2E2E]" aria-current="page">DRT Account Documents</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">

                    {/* Left Column: TOC */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <TableOfContents items={tocItems} />
                    </aside>

                    {/* Middle Column: Content */}
                    <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">

                        <section id="introduction" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                The Power of <span className="text-[#1F5EFF]">Documentary Evidence</span> in DRT Litigation
                            </h2>
                            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6 font-bold">
                                    In the Debt Recovery Tribunal (DRT), your defense is only as strong as your paper trail. While banks rely on "system-generated" statements and complex interest calculations to demand recovery, many of these documents fail the strict test of admissibility under Indian law.
                                </p>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                                    Strategic defense in a DRT case often starts not with legal arguments, but with a forensic audit of the bank's account documents. From incorrectly applied penal interest to the absence of mandatory certifications under the Bankers' Books Evidence Act, 1891, the technical accuracy of the bank's statement of account (SOA) is high ground for a savvy borrower.
                                </p>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6 font-bold text-[#1F5EFF]">
                                    SettleLoans provides a unique blend of legal and financial expertise. Our senior lawyers and forensic auditors dissect every entry in your loan statement to identify errors that can reduce the bank's claim by lakhs, or even crores, providing you with the leverage needed to win your case or secure a favorable settlement.
                                </p>
                            </div>
                        </section>

                        <section id="importance-of-documents" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Why Account Documents are the Foundation of Your Defense</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                When a bank files an Original Application (OA) for recovery in the DRT, they are required to submit a comprehensive "List of Documents." This list must include the Statement of Account (SOA), which is the primary evidence of your debt. However, a bank's internal computer system is not automatically accepted as "gospel truth" in a court of law.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Every rupee claimed by the bank must be backed by a specific entry in the SOA. If the bank has charged a fee not mentioned in your Sanction Letter, or if they have compounded interest on penal charges (which is strictly forbidden by the RBI), the entire claim becomes suspect.
                            </p>
                        </section>

                        <section id="bankers-books-act" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Understanding the Bankers' Books Evidence Act, 1891</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The Bankers' Books Evidence Act was enacted to allow banks to prove their entries without producing the original massive ledgers in court. Under Section 4 of the Act, a "certified copy" of an entry in a banker's book is received as *prima facie* evidence of the transaction.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                This act is a "special law" which overrides general evidence rules. It specifically defines "banker's books" to include ledgers, day-books, cash-books, and all other records used in the ordinary business of a bank, whether kept in written form or as printouts of data stored on a floppy, disc, tape, or any other form of electro-magnetic data storage.
                            </p>
                            <div className="bg-blue-50 p-8 rounded-xl border border-blue-200 my-8">
                                <h4 className="font-bold text-blue-900 mb-4 text-xl">The Prima Facie Trap</h4>
                                <p className="text-base text-blue-800 leading-relaxed mb-4">
                                    "Prima facie" means "accepted as correct until proven otherwise." Many borrowers fail to "prove otherwise" because they don't audit the statements. Once you identify a single error in the bank's statement (like a double-entry or a wrong interest rate), the *prima facie* presumption is destroyed, and the bank must prove every single entry manually.
                                </p>
                            </div>
                        </section>

                        <section id="section-2a-certification" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Section 2A: The Mandatory Certificate for Electronic Records</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                In today's digital age, all bank statements are computer-generated. Section 2A of the Bankers' Books Evidence Act (introduced in 2000) mandates that any printout from a computer system must be accompanied by two distinct certificates:
                            </p>
                            <ul className="list-disc pl-8 space-y-4 mb-8">
                                <li><strong>Integrity Certificate:</strong> A certificate by the principal accountant or branch manager confirming the printout is a true copy of the electronic record.</li>
                                <li><strong>System Certificate:</strong> A certificate describing the computer system and confirming that it was operating properly at the time the data was entered, with adequate safeguards against data manipulation.</li>
                            </ul>
                            <div className="bg-red-50 p-8 rounded-xl border border-red-200 my-8">
                                <h4 className="font-bold text-red-900 mb-4 text-xl">Why Banks Often Fail Here</h4>
                                <p className="text-base text-red-800 leading-relaxed">
                                    Most banks simply provide a stamped bank statement. This is NOT enough. The law requires a specific certificate that describes the computer architecture and its security. Without this, the electronic data is hearsay and cannot be used to prove that you owe the money.
                                </p>
                            </div>
                        </section>

                        <section id="evidence-act-pari-materia" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Special Law status: BBE Act vs Indian Evidence Act</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                A common confusion exists between Section 2A of the BBE Act and Section 65B of the Indian Evidence Act. While both deal with electronic evidence, the Bankers' Books Evidence Act is a "Special Law" for banking records.
                            </p>
                            <p className="text-lg leading-relaxed mb-6 font-bold text-[#1F5EFF]">
                                The Supreme Court has clarified that a special law will always prevail over a general law. Therefore, for bank statements, even if a bank complies with Section 65B of the Evidence Act, they MUST still comply with Section 2A of the BBE Act. We use this technical nuance to strike off incriminating bank statements that aren't perfectly certified.
                            </p>
                        </section>

                        <section id="case-laws-drt" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Landmark Case Laws on Bank Document Admissibility</h2>
                            <div className="space-y-6">
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                    <h4 className="font-bold text-[#1F5EFF] mb-2">ICICI Bank Limited vs. Surbhi Gupta (2018)</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed italic">
                                        The court held that statement of accounts exhibited without the necessary Section 2A certificate under the Bankers' Books Evidence Act would be inadmissible in evidence. This case is our primary weapon in DRT when banks take shortcuts in documentation. It reinforces that a mere bank official's signature is not enough for modern electronic records.
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                    <h4 className="font-bold text-[#1F5EFF] mb-2">Anvar P.V. vs. P.K. Basheer</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed italic">
                                        While not a banking case, this Supreme Court judgment set the gold standard for electronic evidence, reinforcing that primary evidence of electronic records must be backed by mandatory certificates. Any deviation leads to complete rejection of the evidence.
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                    <h4 className="font-bold text-[#1F5EFF] mb-2">Sunderabai vs. State (2002)</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed italic">
                                        This case law is often cited regarding the custody and production of important documents. In the context of DRT, it highlights the bank's responsibility to safely maintain original records and produce them whenever their "certified copies" are questioned.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="forensic-audit-framework" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">The Forensic Audit Framework</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                A forensic audit in a DRT case is a high-precision exercise that involves three major layers:
                            </p>
                            <div className="grid md:grid-cols-3 gap-6 my-10">
                                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                                    <h5 className="font-bold mb-3 text-blue-600">1. Arithmetical Accuracy</h5>
                                    <p className="text-sm text-gray-600">Re-calculation of every interest installment based on the sanctioned rate vs actual debit. We look for rounding errors and wrong compounding frequencies.</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                                    <h5 className="font-bold mb-3 text-blue-600">2. Regulatory Compliance</h5>
                                    <p className="text-sm text-gray-600">Cross-checking every debit entry against RBI Master Circulars. If a fee is charged without a notice period, it is a regulatory violation.</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                                    <h5 className="font-bold mb-3 text-blue-600">3. Collateral & Security</h5>
                                    <p className="text-sm text-gray-600">Verifying if 'Inspection Charges' or 'Insurance Premiums' for the security were actually paid to third parties or just pocketed by the bank.</p>
                                </div>
                            </div>
                        </section>

                        <section id="common-account-errors" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Common Errors Found in Bank Statements</h2>
                            <div className="space-y-8">
                                <div className="border-l-4 border-[#1F5EFF] pl-6 py-2">
                                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">1. Compounding Penal Interest</h3>
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        According to RBI's Master Circular on Fair Practice Code, banks can charge 'Penal Interest' for late payments, but they CANNOT add this penal interest to the principal for the purpose of compounding. If your bank has been compounding your penalties, your debt is artificially inflated. This is the most common error we find in business loan statements.
                                    </p>
                                </div>
                                <div className="border-l-4 border-[#1F5EFF] pl-6 py-2">
                                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">2. Wrongful Interest Benchmarks</h3>
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        For Home and MSME loans, banks must follow specific benchmarks (MCLR, EBLR, etc.). We often find banks "forgetting" to pass on rate cuts to the borrower while being very quick to implement rate hikes. For a loan of ₹5 Cr, even a 0.25% discrepancy over 3 years can amount to several lakhs.
                                    </p>
                                </div>
                                <div className="border-l-4 border-[#1F5EFF] pl-6 py-2">
                                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">3. Hidden Processing & Management Fees</h3>
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        Recurring "Annual Review Fees" or "Legal Audit Charges" are often slipped into statements without prior authorization in the sanction letter. We identify and challenge these unauthorized debits. If the sanction letter says "one-time fee," any recurring debit is a breach of contract.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="penal-interest-rules" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">RBI's New Rules on Penal Charges (2024)</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Effective from April 2024, the RBI has issued a fresh directive regarding penal charges. Banks can no longer charge "Penal Interest" (which is additional interest on the outstanding loan). They can only charge "Penal Charges," which must be a fixed amount and cannot be capitalized (compounded).
                            </p>
                            <p className="text-lg leading-relaxed mb-6 font-bold text-[#E63946]">
                                Insight: If your loan is being recovery in 2024 or 2025, and the bank is still using the old method of compounding penalties, they are in violation of the latest RBI circular. This is a powerful new defense strategy that many local lawyers aren't even aware of yet.
                            </p>
                        </section>

                        <section id="forensic-statement-audit" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">How our Forensic Statement Audit Works</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Our process is purely data-driven. We use specialized legal-finance software to recreate your loan account from day one based on the Sanction Letter. We then layer the bank's actual statement over our projection.
                            </p>
                            <p className="text-lg leading-relaxed mb-6 font-bold">
                                Any variance is flagged. We don't just look for big numbers; we look for patterns of systemic overcharging. This results in a "Forensic Audit Report" that your lawyer can present as a "Counter-Claim" or "Set-off" in the DRT.
                            </p>
                        </section>

                        <section id="rbi-fair-practices" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">RBI Fair Practice Code: Your Legal Shield</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                The RBI mandates that all lenders must be transparent about their charges. Under the Fair Practice Code:
                            </p>
                            <ul className="list-disc pl-8 space-y-4 mb-8">
                                <li>Banks must offer a periodic Statement of Account (SOA) to the borrower.</li>
                                <li>Any change in interest rates or charges must be notified in writing.</li>
                                <li>There should be no discrimination in interest rates among borrowers with similar risk profiles.</li>
                            </ul>
                        </section>

                        <section id="challenging-bank-claims" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Challenging the Validity of Bank Claims in DRT</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                When we represent you in DRT, we use the account audit to file a "Written Statement" that specifically denies the bank's calculations. By pointing out exactly where the bank violated the Bankers' Books Evidence Act or the RBI guidelines, we force the bank's legal team into a defensive position.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                    <h4 className="font-bold mb-2">Interrogatories</h4>
                                    <p className="text-sm">We file applications to ask the bank specific questions about their computer software and interest calculation logic.</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                    <h4 className="font-bold mb-2">Production of Documents</h4>
                                    <p className="text-sm">We force the bank to produce the 'Original Ledgers' and the 'Sanction Files' to cross-check with the statements.</p>
                                </div>
                            </div>
                        </section>

                        <section id="document-checklist" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">Your Audit Checklist for DRT Success</h2>
                            <p className="text-lg leading-relaxed mb-4 font-bold">Before we start the audit, ensure you have gathered the following:</p>
                            <ol className="list-decimal pl-8 space-y-4 mb-8">
                                <li><strong>Full Loan Statement:</strong> From the date of first disbursement to the date of NPA.</li>
                                <li><strong>Sanction Letter & Addendums:</strong> Including all revision letters.</li>
                                <li><strong>Interest Rate Revision Notices:</strong> Check your email/post for any rate change letters.</li>
                                <li><strong>Transaction Receipts:</strong> Any proof of payments made that are not reflecting in the statement.</li>
                            </ol>
                        </section>

                        <section id="success-stories" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Real Success Stories in Document Audit</h2>
                            <div className="grid md:grid-cols-2 gap-10 not-prose">
                                {[
                                    {
                                        name: "Sandeep V.",
                                        loc: "Bangalore",
                                        outcome: "₹22 Lakh Claim Quashed",
                                        story: "The bank's statement lacked a Section 2A certificate. We challenged the admissibility in DRT, forcing the bank to settle for the principal amount only."
                                    },
                                    {
                                        name: "Karan Exports",
                                        loc: "Delhi",
                                        outcome: "Interest Recalculation",
                                        story: "Our audit found the bank was charging 14% instead of the sanctioned 11.5% for two years. The bank had to credit ₹8 Lakhs back to the account."
                                    }
                                ].map((review, i) => (
                                    <div key={i} className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm hover:shadow-md transition-all">
                                        <div className="flex items-center mb-4">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 mr-3">{review.name.charAt(0)}</div>
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
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">DRT Account Documents & Legal FAQs</h2>
                            <div className="space-y-6 not-prose">
                                {[
                                    { q: "What is a 'Certified Copy' under the Bankers' Books Evidence Act?", a: "It is a copy of an entry in the bank's ledger which includes a certificate stating it is a true copy, it was made in the ordinary course of business, and the original is still in the bank's custody." },
                                    { q: "Why is a Section 2A certificate mandatory?", a: "Because digital data can be easily manipulated. The Section 2A certificate ensures that the computer system producing the statement was secure and functioning properly." },
                                    { q: "Can I challenge a claim if I already signed the statement?", a: "Yes. Signing a statement 'to receive it' does not mean you agree with the legal correctness of every interest calculation, especially if those calculations violate RBI norms." },
                                    { q: "How much does a forensic statement audit cost?", a: "The cost depends on the length of the statement and the complexity of the loan. However, the savings identified usually far exceed the audit fee." },
                                    { q: "What is 'Penal Interest' vs 'Interest on Penal Charges'?", a: "Penal Interest is a late fee. Interest on penal charges is the illegal act of treating that late fee as principal and charging interest on it. This is a primary ground for set-off in DRT." },
                                    { q: "Can SettleLoans find errors in credit card statements too?", a: "Absolutely. Credit card interest math is notorious for errors in 'average daily balance' calculations and wrongful grace period cancellations." },
                                    { q: "What should I do if the bank refuses to give me a full statement?", a: "Under RBI guidelines, you have a right to your statements. We can file an 'Application for Production of Documents' in the DRT to force the bank to provide it under oath." },
                                    { q: "Is the internal bank audit sufficient for my defense?", a: "No. A bank's internal audit is done for their own compliance. You need an independent forensic audit to search for errors that favor the borrower." },
                                    { q: "How long does a document audit take?", a: "We typically generate an initial flag report within 5-7 working days of receiving all necessary documents." },
                                    { q: "Who signs the Section 2A certificate at the bank?", a: "It must be signed by the principal accountant or manager, and usually includes a stamp from the technical/IT department for the system-specific details." },
                                    { q: "What is the Bankers' Books Evidence Act Section 4?", a: "Section 4 provides that certified copies shall be prima facie evidence of the existence of entries. If the certification is flawed, the prima facie status is lost, making it harder for the bank to prove the debt." },
                                    { q: "Can electronic statements be challenged on ground of tampering?", a: "Yes. If the Section 2A certificate doesn't explicitly describe the safeguards against tampering, the reliability of the computer record can be questioned in the DRT." },
                                    { q: "What is the impact of wrong interest benchmarks?", a: "If a bank applies an internal rate instead of an RBI-mandated external benchmark (like EBLR), the entire interest component for that period can be quashed and recalculated." },
                                    { q: "Does the Bankers' Books Evidence Act apply to ARCs?", a: "Yes. Since an ARC is 'deemed' to be the lender, they must produce certifications for the records they inherited from the bank or generated themselves." },
                                    { q: "Can I demand the computer logs of the bank's system?", a: "Under technical discovery in the DRT, you can request details of the data entry logs to verify if entries were made at a later date to fix an internal error. This is common in NPA backdating." },
                                    { q: "What is 'Section 4' of the BBE Act?", a: "It provides that a certified copy shall be received as prima facie evidence of the existence of the entry. If we prove the certification process was flawed, the bank has to prove the original entry through live witnesses." },
                                    { q: "Can the bank charge for an NOC after loan closure?", a: "Unless specified in the sanction letter, banks cannot charge a separate fee for issuing a No-Objection Certificate or returning original title deeds." },
                                    { q: "How are 'Inspection Charges' verified?", a: "The bank must produce proof that an actual physical inspection was conducted by an empanelled official or valuer. If no report exists, the fee must be refunded." },
                                    { q: "What is the 'Account of Interest' in a DRT OA?", a: "Banks often lump interest into a single figure in their Original Application. We force them to provide a 'Statement of Calculated Interest' which is usually where the errors hide." },
                                    { q: "Can a bank officer sign a statement without seeing the computer?", a: "Legally, no. The Section 2A certificate requires them to affirm that they have searched the records and the system was secure. If it's a 'rubber stamp' signature, we cross-examine them on it." },
                                    { q: "Is a 'True Copy' stamp same as BBE Certification?", a: "No. A 'True Copy' stamp only means the photocopy matches the paper original. A BBE certification must follow the specific language of Section 2 and 2A regarding electronic integrity." },
                                    { q: "What if the bank lost my original loan agreement?", a: "If the bank relies on a photocopy without a valid reason for losing the original (and without filing for 'Secondary Evidence'), their claim can be rejected entirely." }
                                ].map((faq, i) => (
                                    <details key={i} className="group bg-white border border-[#DEDEDE] rounded-2xl overflow-hidden hover:shadow-xl transition-all border-b-8 border-b-[#1F5EFF]/10">
                                        <summary className="flex justify-between items-center p-6 cursor-pointer font-black text-[#2E2E2E] list-none bg-gray-50 group-open:bg-white transition-colors">
                                            <span className="text-lg pr-8 leading-tight">{i + 1}. {faq.q}</span>
                                            <span className="transition-transform duration-300 group-open:rotate-180">
                                                <svg className="w-6 h-6 text-[#1F5EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7"></path></svg>
                                            </span>
                                        </summary>
                                        <div className="px-8 pb-8 text-[#2E2E2E] opacity-90 leading-relaxed border-t border-[#DEDEDE] pt-8 bg-white font-medium text-base">{faq.a}</div>
                                    </details>
                                ))}
                            </div>
                        </section>

                    </article>

                    {/* Right Column: Sticky Widgets */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-24 space-y-8">

                            {/* CTA Box */}
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                                <div className="bg-[#1F5EFF] p-4 text-center">
                                    <h3 className="text-lg font-black text-white px-2">Spot Bank Statement Errors</h3>
                                </div>
                                <div className="p-8 text-center">
                                    <p className="mb-8 text-sm text-[#DEDEDE] opacity-90 leading-relaxed font-bold">
                                        Don't settle for the bank's numbers. Our forensic audit can save you lakhs in wrongful interest charges.
                                    </p>
                                    <Link href="/contact-us" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-4 rounded-[12px] hover:scale-110 transition-all shadow-md group-hover:shadow-2xl">
                                        Start Forensic Audit
                                    </Link>
                                    <p className="mt-6 text-[10px] text-[#DEDEDE]/60 uppercase tracking-[0.3em] font-black">Forensic Specialists</p>
                                </div>
                            </div>

                            {/* Related Guides */}
                            <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2 text-center">Legal Expertise</h3>
                                <ul className="space-y-4 text-sm font-extrabold px-2">
                                    <li>
                                        <Link href="/best-lawyer-for-arc-loan-assignment-dispute" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight">
                                            <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors flex-shrink-0"></span>
                                            ARC Dispute Defense
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/loan-settlement-lawyers" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight">
                                            <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors flex-shrink-0"></span>
                                            Settlement Strategy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/best-lawyer-for-msme-and-business-loans" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight">
                                            <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors flex-shrink-0"></span>
                                            MSME Loan Defense
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
