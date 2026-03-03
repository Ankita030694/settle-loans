
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBuilding,
    faGavel,
    faShieldHalved,
    faScaleBalanced,
    faFileInvoiceDollar,
    faHandshakeSimple,
    faCircleCheck,
    faStar,
    faArrowRight,
    faFileShield,
    faBriefcase,
    faCircleExclamation
} from '@fortawesome/free-solid-svg-icons';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
    title: 'Best Lawyer for Company Loan Matters in India | Corporate Debt Defense',
    description: 'Expert legal counsel for company loan defaults, NCLT, IBC proceedings, and corporate debt restructuring. Protect your business with India\'s top corporate lawyers.',
    keywords: 'best lawyer for company loan matters, corporate loan defense, NCLT lawyer, IBC law firm India, debt restructuring lawyer, corporate insolvency defense',
};

const CompanyLoanMattersPage = () => {
    const tableOfContentsItems = [
        { id: 'intro-company-loans', title: 'Corporate Loan Defense' },
        { id: 'understanding-ibc', title: 'The IBC Ecosystem' },
        { id: 'nclt-defense', title: 'NCLT Litigation Strategies' },
        { id: 'personal-guarantors', title: 'Personal Guarantor Risks' },
        { id: 'debt-restructuring', title: 'Corporate Debt Restructuring' },
        { id: 'ots-companies', title: 'OTS for Corporations' },
        { id: 'why-hire-corporate-lawyer', title: 'Expert Corporate Counsel' },
        { id: 'success-stories', title: 'Case Studies' },
        { id: 'faqs', title: 'Frequently Asked Questions' }
    ];

    const faqs = [
        {
            q: "What is the minimum default amount to trigger IBC proceedings?",
            a: "Currently, the threshold for initiating Corporate Insolvency Resolution Process (CIRP) under the Insolvency and Bankruptcy Code (IBC) is one crore rupees (₹1,00,00,000). If the default is below this, banks must use other recovery methods like DRT or SARFAESI."
        },
        {
            q: "Can a director be held personally liable for a company's loan default?",
            a: "Generally, directors are not personally liable for the company's debts due to the principle of separate legal entity. However, if a director has signed a 'Personal Guarantee', the bank can proceed against their personal assets under the newly notified IBC provisions for Personal Guarantors."
        },
        {
            q: "What is the difference between Section 7 and Section 9 of the IBC?",
            a: "Section 7 is used by 'Financial Creditors' (like banks and NBFCs) to initiate insolvency. Section 9 is used by 'Operational Creditors' (like suppliers, contractors, and service providers). The evidentiary requirements for Section 7 are usually higher, focusing on the record of default with information utilities."
        },
        {
            q: "How can a stay be obtained on NCLT proceedings?",
            a: "While there is no automatic stay, companies can challenge the admission of an insolvency petition by proving that there is a 'pre-existing dispute' (for Section 9) or that the debt is not yet due or has been paid (for Section 7). High Courts can also intervene under Article 226 in cases of jurisdictional error."
        },
        {
            q: "Can a company propose a settlement after the insolvency petition is admitted?",
            a: "Yes, under Section 12A of the IBC, a CIRP can be withdrawn if the Committee of Creditors (CoC) approves the settlement with a 90% voting share. This often happens through a One-Time Settlement (OTS) proposal."
        },
        {
            q: "What is the role of an Interim Resolution Professional (IRP)?",
            a: "Once a petition is admitted, the IRP takes over the management of the company. The powers of the Board of Directors are suspended. The IRP's job is to protect the value of the assets and conduct the insolvency process."
        },
        {
            q: "Is Corporate Debt Restructuring (CDR) still an option?",
            a: "While the formal CDR cell has been replaced by the 'Prudential Framework for Resolution of Stressed Assets' by RBI, banks still engage in restructuring. This involves extending the loan tenure, reducing interest rates, or converting debt into equity."
        },
        {
            q: "What is a 'Look-back Period' in insolvency?",
            a: "The Resolution Professional can scrutinize transactions made by the company 2 years (for related parties) or 1 year (for others) before the commencement of insolvency. If transactions are found to be undervalued, preferential, or fraudulent, they can be reversed by the NCLT."
        },
        {
            q: "Can a bank initiate SARFAESI and IBC simultaneously?",
            a: "Yes, the Supreme Court has held that these are independent remedies. A bank can pursue recovery under SARFAESI while also filing for insolvency under IBC. However, once a moratorium is declared under IBC, all SARFAESI actions must be stayed."
        },
        {
            q: "How long does the CIRP process take?",
            a: "The IBC mandates a 180-day period, extendable to 270 days. Including all litigation, the outer limit is usually 330 days. If no resolution plan is approved within this time, the company typically goes into liquidation."
        }
    ];

    const reviews = [
        {
            name: "Manufacturing Corp Ltd",
            loc: "Mumbai",
            outcome: "Section 7 Petition Dismissed",
            story: "We were facing a ₹15 crore claim from a private bank. The lawyer identified significant errors in the interest calculation and proved that the NPA classification was premature. The NCLT dismissed the petition, saving our company from insolvency."
        },
        {
            name: "Prakash T.",
            loc: "Delhi",
            outcome: "Personal Guarantee Shielded",
            story: "The bank tried to attach my personal residence for a corporate loan. Our legal team successfully argued that the invocation of the guarantee was technically flawed under the latest IBC amendments. My home is safe."
        },
        {
            name: "Tech Solutions Pvt Ltd",
            loc: "Bangalore",
            outcome: "Successful 12A Settlement",
            story: "The company was already in CIRP. The lawyers negotiated a brilliant OTS with the CoC, obtaining 92% approval. We moved for withdrawal under Section 12A and regained control of our business within 4 months."
        },
        {
            name: "Infrastructure Dev Group",
            loc: "Hyderabad",
            outcome: "Restructuring Approved",
            story: "We had a consortium loan issues. SettleLoans' legal panel helped us present a viable resolution plan to the lenders outside NCLT. We got a 3-year extension on repayment and a 2% interest cut."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
                {/* Schema Markup */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            "name": "Best Lawyer for Company Loan Matters in India",
                            "description": "Expert legal defense for corporate loan defaults, NCLT, IBC, and debt restructuring.",
                            "breadcrumb": {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://settleloans.in" },
                                    { "@type": "ListItem", "position": 2, "name": "Company Loan Matters", "item": "https://settleloans.in/best-lawyer-for-company-loan-matters" }
                                ]
                            },
                            "mainEntity": {
                                "@type": "Article",
                                "headline": "Comprehensive Legal Guide to Corporate Loan Defense and NCLT Matters",
                                "author": { "@type": "Organization", "name": "SettleLoans Legal Panel" },
                                "publisher": {
                                    "@type": "Organization",
                                    "name": "SettleLoans",
                                    "logo": { "@type": "ImageObject", "url": "https://settleloans.in/logo.png" }
                                },
                                "datePublished": "2024-03-03"
                            },
                            "about": {
                                "@type": "Product",
                                "name": "Corporate Loan Legal Defense",
                                "aggregateRating": {
                                    "@type": "AggregateRating",
                                    "ratingValue": "4.9",
                                    "reviewCount": "1240"
                                }
                            }
                        })
                    }}
                />

                {/* Hero Section */}
                <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
                    <div className="max-w-5xl mx-auto text-center relative z-10">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
                            Corporate Litigation Excellence
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                            Best Lawyer for Company <br className="hidden md:block" /> Loan Matters & NCLT Defense
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-4xl mx-auto leading-[1.2] font-normal">
                            Facing IBC petitions or corporate debt defaults? Our elite legal panel specializes in complex corporate recovery defense and strategic restructuring. Protect your corporate future today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Talk to a Corporate Expert for Free
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 3-Column Layout Container */}
                <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-8 px-4 md:px-8 lg:px-16 py-12">

                    {/* Left Column: TOC (Sticky) */}
                    <aside className="hidden lg:block w-1/5 min-w-[200px] relative">
                        <div className="sticky top-24">
                            <h4 className="text-xs font-black uppercase tracking-widest text-[#747474] mb-6 border-b border-gray-100 pb-2">Navigation</h4>
                            <TableOfContents items={tableOfContentsItems} />
                        </div>
                    </aside>

                    {/* Middle Column: Main Content */}
                    <article className="w-full lg:w-3/5 prose prose-lg max-w-none text-[#1A1A1A]">

                        {/* Breadcrumbs */}
                        <nav aria-label="Breadcrumb" className="mb-8">
                            <ol className="flex items-center space-x-2 text-xs md:text-sm text-[#747474]">
                                <li>
                                    <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
                                </li>
                                <li>
                                    <span className="text-gray-300">/</span>
                                </li>
                                <li className="font-bold text-[#1A1A1A]">Company Loan Matters</li>
                            </ol>
                        </nav>

                        <section id="intro-company-loans" className="scroll-mt-32 mb-16">
                            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] mb-8 leading-tight">
                                Corporate Debt Crisis: <span>Strategic Defense for Modern Enterprises</span>
                            </h2>
                            <div className="bg-white rounded-2xl p-8 border-l-8 border-[#1F5EFF] shadow-sm relative overflow-hidden bg-gray-50/50">
                                <p className="text-xl leading-relaxed mb-6 font-medium">
                                    A corporate loan default is not merely a financial oversight; it is a systemic risk that can trigger the absolute dissolution of the legal entity through the insolvency framework.
                                </p>
                                <p className="text-lg leading-relaxed mb-4">
                                    When a company fails to meet its financial obligations, it enters a high-stakes legal arena governed by the Insolvency and Bankruptcy Code (IBC) and the SARFAESI Act. In this environment, the bank or financial institution is no longer just a lender; it becomes a powerful adversary with the ability to suspend your Board of Directors and take complete control of your business operations.
                                </p>
                                <p className="text-lg leading-relaxed mb-4">
                                    The objective of modern corporate loan defense is to prevent the 'Insolvency Trigger' while negotiating a sustainable exit or restructuring path. This requires a lawyer who understands not just the black letter of the law, but also the intricate play of commercial interests between financial creditors, operational creditors, and the corporate debtor.
                                </p>
                                <div className="mt-8 flex items-center gap-4 text-sm font-black uppercase text-[#1F5EFF]">
                                    <FontAwesomeIcon icon={faCircleExclamation} />
                                    <span>Corporate survival depends on immediate legal intervention</span>
                                </div>
                            </div>
                        </section>

                        <section id="understanding-ibc" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-8">The IBC Ecosystem: Navigating Sections 7, 9, and 10</h2>
                            <p className="mb-6">
                                The Insolvency and Bankruptcy Code, 2016, transformed the landscape of Indian corporate law. It moved away from the 'Debtor in Possession' model to a 'Creditor in Control' paradigm. For a company in distress, understanding the different paths to insolvency is crucial. The code was designed as a resolution mechanism rather than a recovery mechanism, a distinction that many banks tend to overlook in their haste to liquidate assets.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                                <div className="bg-white p-6 rounded-xl border border-[#DEDEDE] shadow-sm border-t-4 border-t-[#1F5EFF]">
                                    <h5 className="font-bold mb-3 italic underline text-[#1F5EFF]">Financial Creditor (Section 7)</h5>
                                    <p className="text-sm opacity-90">Initiated by banks, NBFCs, or bondholders. The NCLT only needs to be satisfied that a 'Debt' and a 'Default' exist. This is the most common trigger for corporate bankruptcy. Financial creditors are often grouped into a Committee of Creditors (CoC) which holds the ultimate decision-making power during the resolution process.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-[#DEDEDE] shadow-sm border-t-4 border-t-[#1F5EFF]">
                                    <h5 className="font-bold mb-3 italic underline text-[#1F5EFF]">Operational Creditor (Section 9)</h5>
                                    <p className="text-sm opacity-90">Initiated by suppliers or employees. A key defense here is the 'Pre-existing Dispute' rule. If you can show a dispute existed before the demand notice, the petition can be dismissed. Operational creditors do not have voting rights in the CoC unless their debt exceeds 10% of the total debt of the company.</p>
                                </div>
                            </div>
                            <p className="mb-6">
                                There is also Section 10, where the company itself can file for voluntary insolvency. While this seems counter-intuitive, it is often used as a strategic 'Freeze' to protect the company from predatory individual recoveries and to seek a comprehensive resolution under the court's protection. However, the NCLT scrutinizes Section 10 petitions heavily to prevent their misuse as a tool to evade legitimate debts. A Section 10 filing requires special approval via a special resolution passed by the shareholders or the partners of the corporate debtor.
                            </p>

                            <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100 my-10">
                                <h3 className="text-2xl font-black mb-6">Deep Dive: The Moratorium (Section 14)</h3>
                                <p className="mb-4">
                                    One of the most powerful features of the IBC is the automatic moratorium that kicks in once a petition is admitted. Under Section 14, all legal proceedings against the company, including recovery actions under SARFAESI or the DRT, are immediately stayed. This 'Calm Period' is intended to give the Resolution Professional time to evaluate the company's assets and invite resolution plans from potential investors.
                                </p>
                                <p className="mb-4">
                                    However, the moratorium does not extend to the personal assets of the promoters unless they are covered under the personal guarantor provisions. Furthermore, essential services like electricity and water cannot be terminated during this period, provided the company continues to pay for current usage. Our legal strategy often involves Maximizing the Moratorium to buy time for a Section 12A settlement proposal or an OTS negotiation outside the formal IBC process.
                                </p>
                                <p className="font-bold">
                                    The moratorium is a double-edged sword. While it protects the assets, it also freezes the company's ability to raise new debt or transfer property. Professional legal guidance is required to navigate this restrictive environment without halting business operations.
                                </p>
                            </div>

                            <h3 className="text-2xl font-black mb-6 mt-12">The Resolution Professional (RP) and the CoC</h3>
                            <p className="mb-6">
                                Once the NCLT admits a petition, the Board of Directors is suspended, and an Interim Resolution Professional (IRP) is appointed. The IRP eventually becomes the RP after the first meeting of the Committee of Creditors. The CoC consists of all financial creditors. They have the power to approve or reject any resolution plan.
                            </p>
                            <p className="mb-6">
                                Our role during this phase is to act as the 'Technical Buffer' between the suspended management and the RP. We ensure that the RP does not overstep their bounds, that the valuation of assets is done fairly, and that any preferential or undervalued transactions are not unfairly targeted. We also help promoters prepare a 'Expression of Interest' (EOI) or a 'Resolution Plan' if they are eligible under Section 29A of the Code.
                            </p>
                            <p className="mb-6">
                                Section 29A is perhaps the most litigated section of the IBC. It defines who is 'Ineligible' to submit a resolution plan. Generally, a promoter whose account has been an NPA for more than a year is disqualified. However, MSME promoters have certain exemptions under Section 240A which we aggressively leverage to help owners regain control of their businesses.
                            </p>
                        </section>

                        <section id="nclt-defense" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-8">NCLT Litigation: Proactive Defense Strategies</h2>
                            <p className="mb-6">
                                Defending a company in the National Company Law Tribunal (NCLT) requires a multi-layered approach. The focus is often on challenging the 'Admissibility' of the petition. Once a petition is admitted, the damage to the company's reputation and operational control is often irreversible. The NCLT is not a recovery court; it is a court of equity designed to preserve the 'Going Concern' value of the corporate debtor.
                            </p>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 my-8">
                                <h4 className="text-xl font-bold mb-4 text-[#1F5EFF]">Core Defense Pillars in NCLT</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <FontAwesomeIcon icon={faCircleCheck} className="text-[#1F5EFF] mt-1.5 shrink-0" />
                                        <span><strong>Statute of Limitations:</strong> Petitions filed 3 years after the date of default are legally barred. We meticulously analyze the trail of 'Acknowledgment of Debt' to find holes in the bank's timing. Every balance sheet entry and every letter sent to the bank is a potential acknowledgment that can reset the clock.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FontAwesomeIcon icon={faCircleCheck} className="text-[#1F5EFF] mt-1.5 shrink-0" />
                                        <span><strong>Procedural Irregularities:</strong> The IBC is a formal process. Failure to serve the correct notice, errors in the record of default with information utilities (like NeSL), or improper authorization of the petitioning officer can lead to dismissal. The Supreme Court in the case of 'Vidarbha Industries' held that NCLT has the discretion to NOT admit a petition even if debt and default exist, provided there are other factors.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FontAwesomeIcon icon={faCircleCheck} className="text-[#1F5EFF] mt-1.5 shrink-0" />
                                        <span><strong>Proof of Payment:</strong> It sounds simple, but banks frequently make accounting errors, especially regarding the 'Penal Interest' and 'Processing Fees' which are often charged against RBI guidelines. We bring in forensic auditors to cross-verify the bank's ledger against the company's real-time cash flows. If the default amount falls below the ₹1 Crore threshold after our auditing, the case is immediately dismissed.</span>
                                    </li>
                                </ul>
                            </div>
                            <p className="mb-6">
                                Furthermore, we leverage the concept of 'Dispute' for operational creditors. If a supplier sent faulty goods or delayed delivery, and this was documented, their insolvency petition becomes effectively dead in the NCLT. We help companies organize their documentation to create an iron-clad defense against such tactical petitions. A 'Pre-existing Dispute' is the single most effective shield for any company facing a Section 9 petition.
                            </p>

                            <h3 className="text-2xl font-black mb-6 mt-12">Challenging the 'Date of Default'</h3>
                            <p className="mb-6">
                                The 'Date of Default' is the most critical fact in any IBC litigation. It determines the limitation period and also the applicability of Section 10A (the COVID-19 relief period). If we can prove that the default occurred during the 10A period (March 25, 2020, to March 24, 2021), no petition can EVER be filed for that specific default. Banks often try to shift the date of default to bypass this restriction, and we use financial trail analysis to debunk these attempts.
                            </p>
                            <p className="mb-6">
                                We also challenge the 'Information Utility' reports. While the law assumes NeSL reports are prima facie evidence of default, they are often based on unilateral data provided by the bank. We file 'Form of Dispute' with NeSL and use the same as evidence in NCLT to show that the debt is not admitted.
                            </p>
                        </section>

                        <section id="personal-guarantors" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-8">Personal Guarantors: The New Frontier of Risk</h2>
                            <p className="mb-6">
                                Perhaps the most dangerous development in Indian corporate law is the notification of provisions relating to insolvency of Personal Guarantors to Corporate Debtors. Banks can now pursue the personal wealth (homes, cars, jewelry, and investments) of directors and promoters simultaneously with the company's insolvency. This dual-track recovery process is designed to exert maximum pressure on the management to settle.
                            </p>
                            <div className="flex flex-col md:flex-row gap-6 my-10">
                                <div className="flex-1 bg-white p-6 rounded-xl border border-[#DEDEDE] relative">
                                    <FontAwesomeIcon icon={faShieldHalved} className="absolute top-6 right-6 opacity-20 text-4xl text-[#1F5EFF]" />
                                    <h4 className="font-bold mb-4">The 'Interim Moratorium' Trap</h4>
                                    <p className="text-sm opacity-80">The moment a petition against a personal guarantor is filed under Section 95, an interim moratorium kicks in. While this stops fresh suits against the guarantor, it also freezes the guarantor's ability to transfer or deal with their own assets. Professional legal timing is the only way to navigate this. We help guarantors protect their necessary wealth before the freeze becomes absolute.</p>
                                </div>
                                <div className="flex-1 bg-white p-6 rounded-xl border border-[#DEDEDE] relative">
                                    <FontAwesomeIcon icon={faGavel} className="absolute top-6 right-6 opacity-20 text-4xl text-[#1F5EFF]" />
                                    <h4 className="font-bold mb-4">Defenses for Guarantors</h4>
                                    <p className="text-sm opacity-80">A guarantee is a contract. If the bank altered the main loan terms without the guarantor's consent, or if the guarantee was forced or signed under duress, it can be challenged under the Indian Contract Act. We look for 'Material Variation' in loan terms to nullify the guarantee. We also challenge the invocation process if the bank did not follow the steps mentioned in the Guarantee Deed.</p>
                                </div>
                            </div>
                            <p className="mb-6">
                                Promoters often sign personal guarantees while in a state of 'Hyper-Optimism' when the business is booming. When the business fails, these guarantees become personal death warrants. Our strategy involves challenging the 'Co-extensiveness' of the guarantor's liability. If the main debt is settled via a resolution plan in NCLT, does the guarantor still owe the balance? Recent Supreme Court judgments say YES, but we find ways to include the discharge of the guarantor within the resolution plan itself to ensure a total clean slate.
                            </p>
                            <p className="mb-6 italic">
                                Note: Protecting the promoter is often just as important as protecting the company. A business can be rebuilt, but once personal wealth is liquidated in a bankruptcy court, the road to recovery is much longer. Our legal panel provides a unified defense that covers both the corporate entity and its human leadership.
                            </p>
                        </section>

                        <section id="debt-restructuring" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-8">Corporate Debt Restructuring: The Art of the Deal</h2>
                            <p className="mb-6">
                                Litigation is the last resort. The most successful outcomes for company loan matters often involve complex multi-party negotiations. Banks generally prefer a steady albeit reduced cash flow over a lengthy and uncertain liquidation process. Restructuring is about finding the 'Sweet Spot' where the bank is happy with the recovery and the company is happy with the liquidity.
                            </p>
                            <div className="space-y-4 mb-10">
                                <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                                    <div className="w-10 h-10 bg-[#1F5EFF] text-white rounded-full flex items-center justify-center shrink-0 font-bold">1</div>
                                    <div>
                                        <h6 className="font-bold mb-1">Prudential Framework Negotiation</h6>
                                        <p className="text-sm opacity-70 leading-relaxed">Assisting companies in reaching a 'Resolution Plan' with lenders under the RBI's June 2019 framework. This avoids the court altogether. The framework allows for the creation of an Inter-Creditor Agreement (ICA) which binds all lenders to a single resolution strategy if 75% by value agree.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                                    <div className="w-10 h-10 bg-[#1F5EFF] text-white rounded-full flex items-center justify-center shrink-0 font-bold">2</div>
                                    <div>
                                        <h6 className="font-bold mb-1">Consortium Alignment</h6>
                                        <p className="text-sm opacity-70 leading-relaxed">In large corporate loans, multiple banks are involved. We help 'align' the lead bank and other lenders to prevent a single dissenting bank from pulling the plug on a viable business. We use the updated 'Lead Bank' protocols to ensure consensus is reached quickly.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                                    <div className="w-10 h-10 bg-[#1F5EFF] text-white rounded-full flex items-center justify-center shrink-0 font-bold">3</div>
                                    <div>
                                        <h6 className="font-bold mb-1">Sustainability Analysis</h6>
                                        <p className="text-sm opacity-70 leading-relaxed">Presenting a clear financial roadmap that shows how the company will service the reduced debt. We speak the language of bankers and auditors to make your case compelling. We work with TEV (Techno-Economic Viability) consultants to prove that your company is a viable candidate for a turnaround.</p>
                                    </div>
                                </div>
                            </div>
                            <p className="mb-6">
                                Restructuring is a delicate balance. It requires the bank to accept a 'Haircut' (a loss on their book) in exchange for certainty of future payment. Our legal experts play the role of the master negotiator, ensuring that the terms of the restructuring do not suffocate the company's future growth. We often include 'Claw-back' clauses where the bank gets a share of future profits if the company does better than expected, which is a key sweetener for CoC approvals.
                            </p>

                            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm my-10">
                                <h4 className="text-xl font-black mb-6">Strategic Asset Monetization</h4>
                                <p className="mb-4">
                                    Sometimes, the only way to save the core business is to 'Cut the Tail'. We help companies identify non-core assets (land, unused machinery, or subsidiaries) that can be sold to pay down the debt of the main operating unit. This is done through 'Slump Sales' or 'Asset Sale Agreements' which are structured to be tax-neutral and NCLT-compliant.
                                </p>
                                <p className="mb-4 text-sm italic">
                                    Asset monetization is often faster than a bank loan and cheaper than equity funding. Our lawyers ensure that the sale is done at 'Arm's Length' to prevent any future allegations of asset stripping by resolution professionals or investigating agencies.
                                </p>
                            </div>
                        </section>

                        <section id="ots-companies" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-8">One-Time Settlement (OTS) for Large Corporations</h2>
                            <p className="mb-6">
                                For many companies, the fastest way to get a clean slate is an OTS. However, for a corporation, an OTS is a complex transaction involving board resolutions, shareholder disclosures, and potential tax implications. It is not just about paying the bank; it is about 'Regularizing' the balance sheet for future growth.
                            </p>
                            <div className="bg-[#1F5EFF]/5 border border-[#1F5EFF]/20 p-8 rounded-3xl mb-10">
                                <h4 className="text-xl font-bold mb-4">Strategic OTS Implementation</h4>
                                <p className="mb-4">We help companies source 'Settlement Funding' through Asset Reconstruction Companies (ARCs) or private equity players. When a company doesn't have the cash to pay the OTS, we find partners who can fund the exit in exchange for a stake or a structured buy-out. This is high-level corporate lawyering that goes beyond just filing papers in court. We ensure that the OTS is 'Non-Discretionary' and follows the bank's published policy to prevent any future vigilantism or audits.</p>
                                <p className="font-bold text-[#1F5EFF]">A well-structured corporate OTS can save up to 60% of the principal and 100% of the interest and penalties. It is the ultimate legal 'Hard Reset' for any business entity.</p>
                            </div>
                            <p className="mb-6">
                                We also manage the 'After-math' of an OTS. This includes getting the 'No Dues Certificate' (NDC) from the bank, ensuring that the charge on the properties is vacated in the Registrar of Companies (ROC) via Form CHG-4, and updating the CIBIL records of the company and its directors. Without these final steps, the OTS is incomplete and can haunt the company in future credit applications.
                            </p>

                            <div className="bg-gray-100 p-8 rounded-2xl border border-gray-200 mb-12">
                                <h3 className="text-2xl font-black mb-6 italic text-[#2E2E2E]">The Role of ARCs in Corporate Recovery</h3>
                                <p className="mb-4">
                                    Asset Reconstruction Companies (ARCs) like Edelweiss, ARCIL, and IARC often buy the stressed debt from banks. ARCs are typically more flexible than banks because they specialize in 'Distressed Asset Management'.
                                </p>
                                <p className="mb-4">
                                    We have a deep network within the ARC community. We help companies navigate the 'Swiss Challenge' method of asset sale and ensure that the promoter has a chance to settle with the ARC on terms that are much more realistic than the original bank terms. Working with an ARC is often the last bridge to corporate survival before liquidation.
                                </p>
                            </div>
                        </section>

                        <section id="why-hire-corporate-lawyer" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-8">Why You Need a Specialist Corporate Loan Lawyer</h2>
                            <p className="mb-6 text-lg">General corporate law is about contracts and compliance. Corporate loan defense is about litigation, financial forensics, and aggressive negotiation. You need a team that spends every day in the NCLT halls.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-start gap-4">
                                    <FontAwesomeIcon icon={faBriefcase} className="text-[#1F5EFF] text-xl mt-1" />
                                    <p className="text-sm font-bold">Expertise in IBC nuances and NCLT/NCLAT precedence.</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-start gap-4">
                                    <FontAwesomeIcon icon={faHandshakeSimple} className="text-[#1F5EFF] text-xl mt-1" />
                                    <p className="text-sm font-bold">Access to ARCs and specialized distress funds for OTS support.</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-start gap-4">
                                    <FontAwesomeIcon icon={faFileInvoiceDollar} className="text-[#1F5EFF] text-xl mt-1" />
                                    <p className="text-sm font-bold">Forensic accounting integration to challenge bank claims.</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-start gap-4">
                                    <FontAwesomeIcon icon={faGavel} className="text-[#1F5EFF] text-xl mt-1" />
                                    <p className="text-sm font-bold">Aggressive representation in High Courts for writ remedies.</p>
                                </div>
                            </div>
                        </section>

                        <section id="success-stories" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-12 text-center underline decoration-[#1F5EFF] underline-offset-8">Corporate Freedom Chronicles</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {reviews.map((review, i) => (
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

                        <section id="faqs" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-8">Corporate Loan Hardship FAQ</h2>
                            <div className="space-y-4">
                                {faqs.map((faq, i) => (
                                    <details key={i} className="group bg-white border border-[#DEDEDE] rounded-xl overflow-hidden hover:shadow-md transition-all border-b-4 border-b-[#1F5EFF]/20">
                                        <summary className="flex justify-between items-center p-6 cursor-pointer font-black text-[#1A1A1A] list-none bg-gray-50 group-open:bg-white transition-colors">
                                            <span className="text-lg">{i + 1}. {faq.q}</span>
                                            <span className="transition-transform group-open:rotate-180">
                                                <svg className="w-5 h-5 text-[#1F5EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7"></path></svg>
                                            </span>
                                        </summary>
                                        <div className="px-6 pb-6 text-[#1A1A1A] opacity-90 leading-relaxed border-t border-gray-50 pt-6">
                                            {faq.a}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </section>



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

                    {/* Right Column: CTA & Related (Sticky) */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-24 space-y-8">

                            {/* CTA Container */}
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                                <div className="bg-[#1F5EFF] p-4 text-center">
                                    <h3 className="text-lg font-black text-white">We are in This Together</h3>
                                </div>
                                <div className="p-6 text-center">
                                    <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                                        Do not carry the burden alone. Let our experts find the best path for your debt-free life.
                                    </p>
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg">
                                        Talk to an Expert
                                    </Link>
                                    <p className="mt-4 text-xs text-[#DEDEDE]/60 uppercase tracking-widest font-black">100% Confidential</p>
                                </div>
                            </div>

                            {/* Related Pages Container */}
                            <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2">Business Recovery</h3>
                                <ul className="space-y-4 text-sm font-bold">
                                    <li>
                                        <Link href="/best-lawyer-for-msme-and-business-loans" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            MSME & Business Loans
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/best-lawyer-for-loan-settlement-by-drt" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            DRT Settlement Specialist
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/best-lawyer-for-consortium-loan-recovery-defence" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            Consortium Defense
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/best-lawyer-for-msme-business-loan-dispute" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            MSME Dispute Resolution
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
};

export default CompanyLoanMattersPage;
