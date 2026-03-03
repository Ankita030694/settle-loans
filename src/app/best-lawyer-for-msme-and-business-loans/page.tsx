
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faStore,
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
    faCircleExclamation,
    faHardHat,
    faTruckFast
} from '@fortawesome/free-solid-svg-icons';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
    title: 'Best Lawyer for MSME & Business Loans in India | Small Business Debt Defense',
    description: 'Protect your MSME from SARFAESI and loan defaults. Expert legal defense under the MSMED Act 2006. India\'s top lawyers for small business recovery defense.',
    keywords: 'best lawyer for msme and business loans, msme debt recovery defense, sarfaesi defense for small business, msme act section 15 lawyer, msme samadhaan legal help',
};

const MSMEAndBusinessLoansPage = () => {
    const tableOfContentsItems = [
        { id: 'msme-debt-crisis', title: 'MSME Debt Defense' },
        { id: 'msmed-act-protections', title: 'MSMED Act Protections' },
        { id: 'sarfaesi-msme', title: 'Fighting SARFAESI' },
        { id: '180-day-rule', title: 'The 180-Day NPA Rule' },
        { id: 'msefc-arbitration', title: 'MSEFC Arbitration' },
        { id: 'msme-samadhaan', title: 'Samadhaan Portal' },
        { id: 'restructuring-msme', title: 'Restructuring for Business' },
        { id: 'success-stories', title: 'Case Studies' },
        { id: 'faqs', title: 'Frequently Asked Questions' }
    ];

    const faqs = [
        {
            q: "What special protections do MSMEs have against bank recovery?",
            a: "MSMEs have protections under the MSMED Act 2006 and specific RBI guidelines for MSME NPA classification. This includes a mandatory restructuring review before a loan is declared NPA and access to Micro and Small Enterprise Facilitation Councils (MSEFC) for delayed payment issues."
        },
        {
            q: "Can a bank take possession of MSME machinery under SARFAESI?",
            a: "Yes, once a notice under Section 13(2) and 13(4) is served and the 60-day period expires, banks can take possession. However, MSMEs can challenge this in the DRT (Securitization Application) by proving procedural lapses or by seeking protection under the MSME restructuring guidelines."
        },
        {
            q: "What is MSME Samadhaan?",
            a: "MSME Samadhaan is an online portal for filing cases against buyers for delayed payments. If a buyer doesn't pay within 45 days, the MSME can file a case, and the buyer may have to pay compound interest at three times the bank rate."
        },
        {
            q: "What is the 180-day rule for MSME NPAs?",
            a: "While large corporate loans are classified as NPA after 90 days of default, for certain MSME units, there have been historical relaxations allowing up to 180 days before the account is tagged as NPA, providing more time for business recovery."
        },
        {
            q: "Does CGTMSE guarantee mean the bank can't recover from the promoter?",
            a: "No. The Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) provides a guarantee to the bank, not the borrower. If the loan defaults, CGTMSE pays the bank, but the liquidator or the bank can still pursue the borrower/promoter for the outstanding dues."
        },
        {
            q: "Can an MSME get an injunction against a bank auction?",
            a: "Direct injunctions from civil courts are barred under Section 34 of the SARFAESI Act. However, an MSME can obtain a 'Stay' on the auction from the Debt Recovery Tribunal (DRT) if they can show serious legal flaws in the bank's process."
        },
        {
            q: "How does the 'Pre-packaged Insolvency' work for MSMEs?",
            a: "The IBC now allows a Pre-packaged Insolvency Resolution Process (PPIRP) for MSMEs. This allows the owners to remain in control of the business while a resolution plan is negotiated with creditors, which is a significant advantage over the standard CIRP."
        },
        {
            q: "Is a bank notice mandatory before seizing an MSME factory?",
            a: "Absolutely. Under SARFAESI, the bank must give a 60-day notice (13(2)) and then a possession notice (13(4)). Any seizure without these specific legal steps is illegal and can be challenged immediately in the High Court or DRT."
        },
        {
            q: "What is the MSEFC?",
            a: "The Micro and Small Enterprise Facilitation Council (MSEFC) is a quasi-judicial body that acts as an arbitrator for delayed payment disputes. Their awards have the same force as a court decree."
        },
        {
            q: "Can MSMED Act skip the DRT process?",
            a: "No, the MSMED Act and the SARFAESI Act operate in different spheres. For debt recovery by banks, DRT is the forum. For recovery of dues from buyers, MSEFC is the forum. A good lawyer uses the MSME status as a powerful defense in the DRT."
        }
    ];

    const reviews = [
        {
            name: "Anand Precision Tools",
            loc: "Pune",
            outcome: "Auction Stayed & Loan Restructured",
            story: "Our small tool-making unit was hit by the raw material price hike. The bank sent 13(2) and was about to auction our factory. SettleLoans identified that the bank skipped the mandatory MSME restructuring review. The DRT stayed the auction, and we got our EMI reduced by 40%."
        },
        {
            name: "Creative Garments",
            loc: "Tirupur",
            outcome: "₹45 Lakhs Recovered via Samadhaan",
            story: "A big retailer wasn't paying us for 6 months. We were near bankruptcy. Our legal counsel filed a case on the Samadhaan portal. Within two hearings, the retailer paid the full amount with interest to avoid the penalty. It saved our business."
        },
        {
            name: "Sunil Logistics",
            loc: "Indore",
            outcome: "Illegal Seizure Reversed",
            story: "The bank tried to seize our trucks without a proper 13(4) notice. The lawyers moved the High Court via a Writ Petition. The court pulled up the bank and ordered the return of the vehicles within 48 hours. Extremely professional support."
        },
        {
            name: "Dharavi Leather Works",
            loc: "Mumbai",
            outcome: "PPIRP Success",
            story: "We were the first in our cluster to use the Pre-pack Insolvency. We kept running the factory while the debt was settled with a 50% haircut from the bank. The legal team was with us at every step in the NCLT."
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
                            "name": "Best Lawyer for MSME & Business Loans in India",
                            "description": "Expert legal defense for MSME loan defaults, SARFAESI, and MSMED Act protections.",
                            "breadcrumb": {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://settleloans.in" },
                                    { "@type": "ListItem", "position": 2, "name": "MSME and Business Loans", "item": "https://settleloans.in/best-lawyer-for-msme-and-business-loans" }
                                ]
                            },
                            "mainEntity": {
                                "@type": "Article",
                                "headline": "Protect Your MSME: The Ultimate Legal Guide to Business Loan Default Defense",
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
                                "name": "MSME Business Loan Legal Defense",
                                "aggregateRating": {
                                    "@type": "AggregateRating",
                                    "ratingValue": "4.8",
                                    "reviewCount": "1580"
                                }
                            }
                        })
                    }}
                />

                {/* Hero Section */}
                <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
                    <div className="max-w-5xl mx-auto text-center relative z-10">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
                            Small Business Shield
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                            Best Lawyer for MSME <br className="hidden md:block" /> & Business Loan Defense
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-4xl mx-auto leading-[1.2] font-normal">
                            Don't let bank recovery destroy your business dreams. Leverage the power of the MSMED Act 2006 to stop SARFAESI, fight harassment, and restructure your debts legally.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Secure Your MSME's Future Today
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
                                <li className="font-bold text-[#1A1A1A]">MSME and Business Loans</li>
                            </ol>
                        </nav>

                        <section id="msme-debt-crisis" className="scroll-mt-32 mb-16">
                            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] mb-8 leading-tight">
                                MSME Debt Relief: <span>Fighting for Your Business Survival</span>
                            </h2>
                            <div className="bg-white rounded-2xl p-8 border-l-8 border-[#1F5EFF] shadow-sm relative overflow-hidden bg-gray-50/50">
                                <p className="text-xl leading-relaxed mb-6 font-medium">
                                    Micro, Small, and Medium Enterprises (MSMEs) are the backbone of the Indian economy, yet they are the most vulnerable when financial headwinds trigger loan defaults.
                                </p>
                                <p className="text-lg leading-relaxed mb-4">
                                    A business loan default often stems from delayed payments by large buyers, supply chain disruptions, or sudden market shifts. Unlike large corporations with massive legal departments, MSME owners often face bank recovery agents and legal notices alone. This creates an unfair power dynamic that often leads to the premature closure of viable businesses. The stress of managing day-to-day operations while fighting legal battles with multi-billion dollar banks can be overwhelming.
                                </p>
                                <p className="text-lg leading-relaxed mb-4">
                                    Our mission is to level the playing field. By combining the statutory protections of the MSMED Act 2006 with strategic SARFAESI defense in the Debt Recovery Tribunal (DRT), we ensure that your business has a fighting chance. We don't just handle your case; we protect your livelihood. We understand that for a small business owner, the factory or the office is not just an asset; it is the fruit of years of hard labor and a source of employment for many families.
                                </p>
                                <p className="text-lg leading-relaxed mb-4">
                                    The legal landscape for MSMEs in India is unique. While banks have the power of SARFAESI, MSMEs have the shield of the MSMED Act. The key to a successful defense is knowing how to merge these two worlds. A standard lawyer might only look at the bank's notice, but an MSME specialist looks at your customer receivables, your Udyam registration, and the RBI's specific Master Directions for MSME restructuring.
                                </p>
                                <div className="mt-8 flex items-center gap-4 text-sm font-black uppercase text-[#1F5EFF]">
                                    <FontAwesomeIcon icon={faHardHat} />
                                    <span>Building a legal fortress around your MSME</span>
                                </div>
                            </div>

                            <h3 className="text-2xl font-black mb-6 mt-12">The Micro-Economic Impact of Loan Defaults</h3>
                            <p className="mb-6">
                                When an MSME defaults, the impact ripple is felt by workers, suppliers, and the local community. Banks often treat these defaults purely as balance sheet items, ignoring the human element. Our legal approach involves humanizing the business in front of the judge. Whether it is in the High Court or the DRT, we present the socio-economic impact of a potential closure. This often helps in obtaining empathetic 'Reliefs' and 'Stays' that a purely technical defense might not achieve.
                            </p>
                            <p className="mb-6">
                                Furthermore, we help you identify 'Willful Default' vs 'Genuine Business Failure'. If your business failed due to factors beyond your control, like a global pandemic or a change in government policy, you cannot be categorized as a willful defaulter. Protecting your reputation as an honest entrepreneur is our top priority.
                            </p>
                        </section>

                        <section id="msmed-act-protections" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-8">The MSMED Act 2006: Your Statutory Shield</h2>
                            <p className="mb-6">
                                Many business owners are unaware that they possess a powerful legal tool: the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006. This Act provides specific mechanisms to handle the two biggest threats to an MSME: delayed payments and aggressive bank recovery. The Act was specifically passed to provide a 'Safety Net' for small entrepreneurs against the 'Big Corporate' bullying that often happens in the supply chain.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                                <div className="bg-white p-6 rounded-xl border border-[#DEDEDE] shadow-sm border-t-4 border-t-[#1F5EFF]">
                                    <h5 className="font-bold mb-3 italic underline text-[#1F5EFF]">Section 15: The 45-Day Rule</h5>
                                    <p className="text-sm opacity-90">By law, any person who buys goods or services from an MSME MUST pay within 45 days. If they don't, they are liable to pay triple the bank rate as compound interest. We use this to force your debtors to pay you, helping you clear your own bank dues. This interest is mandatory and cannot be waived even by the courts.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-[#DEDEDE] shadow-sm border-t-4 border-t-[#1F5EFF]">
                                    <h5 className="font-bold mb-3 italic underline text-[#1F5EFF]">Section 18: MSEFC Arbitration</h5>
                                    <p className="text-sm opacity-90">You can skip the slow civil courts and take your payment disputes to the Facilitation Council. It's faster, cheaper, and much more business-friendly than traditional litigation. The council acts as a conciliator first, and if that fails, it takes up arbitration. The best part? The buyer has to deposit 75% of the disputed amount even to challenge the council's order in a higher court.</p>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 my-10">
                                <h4 className="text-xl font-black mb-4 uppercase">The Power of Udyam Registration</h4>
                                <p className="mb-4">
                                    To avail these protections, your Udyam Registration must be active and correctly categorized. We help businesses 'Retro-actively' claim their MSME status if they were eligible at the time of the transaction. The Supreme Court has clarified that MSME status is determined by the date of service, which provides a massive loophole for businesses that forgot to register earlier.
                                </p>
                                <p className="mb-0 text-sm italic font-bold">
                                    Special Tip: Ensure your NIC (National Industrial Classification) codes correctly reflect all your business activities. A missing code can lead to a technical rejection of your Samadhaan filing.
                                </p>
                            </div>
                        </section>

                        <section id="sarfaesi-msme" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-8">Fighting SARFAESI: Protecting Your Assets</h2>
                            <p className="mb-6">
                                The Securitization and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002, is the bank's most potent weapon. It allows them to take possession of your factory, machinery, or residence without a court order. However, for an MSME, this exercise of power is subject to strict guidelines. The 'Rule of Law' dictates that even the bank must follow the 'Standard Operating Procedures' laid down by the RBI and the Supreme Court.
                            </p>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 my-8">
                                <h4 className="text-xl font-bold mb-4 text-[#1F5EFF]">Stop the Bank's Auction Process</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <FontAwesomeIcon icon={faCircleCheck} className="text-[#1F5EFF] mt-1.5 shrink-0" />
                                        <span><strong>Challenging the 13(2) Notice:</strong> We draft a comprehensive reply to the bank's demand notice, highlighting the genuine reasons for default and demanding a restructuring review as per RBI norms. A single mistake in the bank's calculation of 'Outstanding Dues' in the 13(2) notice can make the entire recovery process void.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FontAwesomeIcon icon={faCircleCheck} className="text-[#1F5EFF] mt-1.5 shrink-0" />
                                        <span><strong>Securitization Application (SA):</strong> If the bank moves to take possession (13(4)), we file an SA in the DRT. We focus on 'Technical Defaults' by the bank—errors in publication in two newspapers, lack of proper valuation by a certified valuer, or skipping the 30-day sale notice—to obtain a Stay on the auction.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FontAwesomeIcon icon={faCircleCheck} className="text-[#1F5EFF] mt-1.5 shrink-0" />
                                        <span><strong>Personal Assets Protection:</strong> Banks often try to sell a promoter's house before selling the factory machinery. We challenge this prioritization, forcing the bank to follow the 'Marshalling' principle where possible. This ensures that the business assets are liquidated first before touching the personal survival assets of the family.</span>
                                    </li>
                                </ul>
                            </div>
                            <h3 className="text-2xl font-black mb-6 mt-12">The District Magistrate (DM) / CMM Link</h3>
                            <p className="mb-6">
                                When a bank wants physical possession, they file an application under Section 14 of SARFAESI with the DM or CMM. Many owners think this is a rubber-stamp process. However, we intervene at this stage to show that the bank has suppressed facts or that the account is already under a restructuring proposal. This often delays the physical takeover by several months, giving you time to arrange funds or negotiate an OTS.
                            </p>
                            <p className="mb-6">
                                We also help owners challenge the 'Valuation Report'. Banks often undervalue MSME properties to ensure a quick sale. We bring in independent valuers to show the real 'Market Value', which forces the DRT to raise the reserve price of the auction, often making the auction fail and giving the owner more leverage.
                            </p>
                        </section>

                        <section id="180-day-rule" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-8">The 180-Day Rule and NPA Classification</h2>
                            <p className="mb-6">
                                For years, the RBI has recognized that MSMEs need more time to recover from cash flow shocks. While standard corporate loans become NPAs in 90 days, certain MSME categories have historically enjoyed a 180-day window. Even today, the 'Resolution Framework' for MSMEs requires banks to consider restructuring if the default is less than 30 days old. This recognition of 'Cash Flow Asymmetry' is the cornerstone of MSME banking regulations.
                            </p>
                            <div className="bg-[#1F5EFF]/5 border border-[#1F5EFF]/20 p-8 rounded-3xl mb-10">
                                <h4 className="text-xl font-bold mb-4">Strategic Intervention Before NPA</h4>
                                <p className="mb-4">The best time to hire a lawyer for a business loan matter is BEFORE the account is declared an NPA. Once the NPA tag is attached, your credit rating collapses and the SARFAESI machinery starts. We help you use the 'Framework for Revival and Rehabilitation of MSMEs' to force the bank to sit at the table before they take recovery action. This framework is mandatory, not optional. If a bank skips the 'Corrective Action Plan' (CAP) stage, their subsequent recovery is legally flawed.</p>
                                <p className="font-bold text-[#1F5EFF]">Immediate action can prevent the legal stigma of being an NPA borrower and save your credit history for the long term.</p>
                            </div>

                            <h3 className="text-2xl font-black mb-6 mt-12">The SMA-0, SMA-1, and SMA-2 Hierarchy</h3>
                            <p className="mb-6">
                                Banks track your default in stages. Special Mention Account (SMA-0) is generic, but SMA-1 (31-60 days) and SMA-2 (61-90 days) are serious red flags. Our legal team intervenes at the SMA-1 stage to propose a 'TEV Study' (Techno-Economic Viability). By showing the bank that the business is viable but just needs a 'Holidays' on interest, we can often stop the slide into NPA.
                            </p>
                            <p className="mb-6">
                                We also challenge 'Credit Signal' errors. Sometimes, a bank marks an account as NPA even when the interest has been serviced but the 'Drawing Power' has diminished due to old stock. This is a technical NPA which we aggressively fight by demanding a physical stock audit to regularize the account.
                            </p>
                        </section>

                        <section id="msefc-arbitration" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-8">MSEFC Arbitration: Turning Your Debtors into Cash</h2>
                            <p className="mb-6">
                                One of the primary reasons for MSME loan default is 'Delayed Receivables' from big clients. You can't pay the bank because your customer hasn't paid you. This is where the Micro and Small Enterprise Facilitation Council (MSEFC) becomes your best friend. It is a specialized forum that understands the 'Buyer-Seller' power dynamic.
                            </p>
                            <div className="flex flex-col md:flex-row gap-6 my-10">
                                <div className="flex-1 bg-white p-6 rounded-xl border border-[#DEDEDE] relative transition-hover hover:shadow-lg">
                                    <FontAwesomeIcon icon={faShieldHalved} className="absolute top-6 right-6 opacity-20 text-4xl text-[#1F5EFF]" />
                                    <h4 className="font-bold mb-4">The Samadhaan Benefit</h4>
                                    <p className="text-sm opacity-80">Filing on the MSME Samadhaan portal creates a public record of the buyer's default. Professional buyers and listed companies are terrified of this because it affects their corporate governance rating. This pressure alone often triggers a payment. Listed companies have to disclose MSME dues in their half-yearly reports (MSME Form 1), and a Samadhaan case makes this disclosure legally mandatory and risky for them.</p>
                                </div>
                                <div className="flex-1 bg-white p-6 rounded-xl border border-[#DEDEDE] relative transition-hover hover:shadow-lg">
                                    <FontAwesomeIcon icon={faTruckFast} className="absolute top-6 right-6 opacity-20 text-4xl text-[#1F5EFF]" />
                                    <h4 className="font-bold mb-4">Arbitration Award</h4>
                                    <p className="text-sm opacity-80">If the portal filing doesn't work, we take the case to formal arbitration in the Council. The process is time-bound. Once you get an award, we help you execute it in the civil court to attach the buyer's bank accounts and properties. An MSEFC award is as powerful as a High Court decree but is obtained in a fraction of the time.</p>
                                </div>
                            </div>
                            <h3 className="text-2xl font-black mb-6 mt-12">The 'Pay to Appeal' Rule</h3>
                            <p className="mb-6">
                                The beauty of the MSMED Act is Section 19. If a buyer wants to challenge the council's order in a higher court, they MUST first deposit 75% of the award amount. This stops the common tactic of 'Appeal after Appeal' used by rich companies to delay paying small vendors. We aggressively enforce this 75% deposit rule to ensure that even if the case goes to the High Court, your money is secured in the court registry.
                            </p>
                            <p className="mb-6">
                                We also help with 'Interest Calculation'. Many MSMEs don't realize they are entitled to compound interest with monthly rests. This compound interest over 2-3 years can often equal the principal amount itself, giving you enough cash to fully settle your own bank loans with a huge surplus.
                            </p>
                        </section>

                        <section id="restructuring-msme" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-8">Effective Restructuring for Business Survival</h2>
                            <p className="mb-6">
                                Sometimes, the business model is sound but the debt structure is toxic. We help business owners negotiate a 'Haircut' or a 'Moratorium' that allows them to breathe. Restructuring is not just about delay; it is about 'Re-engineering' the loan to match the current cash flow of the business.
                            </p>
                            <div className="space-y-4 mb-10">
                                <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                                    <div className="w-10 h-10 bg-[#1F5EFF] text-white rounded-full flex items-center justify-center shrink-0 font-bold">1</div>
                                    <div>
                                        <h6 className="font-bold mb-1">Debt Consolidation</h6>
                                        <p className="text-sm opacity-70 leading-relaxed">Combining multiple high-interest business loans and credit cards into a single, manageable term loan with a lower interest rate. We help you present a 'Unified Cash Flow' statement to the bank to justify this consolidation.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                                    <div className="w-10 h-10 bg-[#1F5EFF] text-white rounded-full flex items-center justify-center shrink-0 font-bold">2</div>
                                    <div>
                                        <h6 className="font-bold mb-1">Interest Waivers</h6>
                                        <p className="text-sm opacity-70 leading-relaxed">Negotiating with banks to waive penal interest and compound interest charges that have made the loan balloon beyond the principal amount. We use the 'Usury Law' principles and RBI circulars against excessive interest to force these waivers.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                                    <div className="w-10 h-10 bg-[#1F5EFF] text-white rounded-full flex items-center justify-center shrink-0 font-bold">3</div>
                                    <div>
                                        <h6 className="font-bold mb-1">One-Time Settlement (OTS)</h6>
                                        <p className="text-sm opacity-70 leading-relaxed">For businesses that want a complete exit, we negotiate a final settlement amount, often saving 40-70% of the total outstanding amount. We ensure that the OTS is 'Irrevocable' so the bank cannot restart recovery once you have paid the settled amount.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm my-10">
                                <h4 className="text-xl font-black mb-6">Pre-packaged Insolvency (PPIRP)</h4>
                                <p className="mb-4">
                                    The IBC now offers a 'Pre-pack' specifically for MSMEs. This is revolutionary. Unlike large corporate insolvency where the owner loses control, in PPIRP, the 'Debtor-in-Possession' model is maintained. You keep running your business while you negotiate a resolution plan.
                                </p>
                                <p className="mb-4 text-sm italic">
                                    PPIRP is faster (fixed at 120 days) and much more cost-effective. We guide you through the process of getting creditor consent and filing the application in the NCLT. This is the ultimate tool to clean your balance sheet while keeping your keys.
                                </p>
                            </div>
                        </section>

                        <section id="cgtmse-protection" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-8">CGTMSE and Credit Guarantees: Debunking the Myths</h2>
                            <p className="mb-6">
                                Many MSME loans are covered under the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE). There is a common misconception among borrowers that if the loan is guaranteed, the bank cannot pursue the borrower for the balance. This is legally incorrect. The guarantee is for the 'Bank's Protection', not the 'Borrower's Relief'. If you default, the CGTMSE pays the bank, but the Trust then 'Steps into the Shoes' of the bank to recover the money from you.
                            </p>
                            <div className="bg-yellow-50 p-8 rounded-2xl border border-yellow-100 mb-10">
                                <h4 className="text-xl font-bold mb-4">The 'Subrogation' Principle</h4>
                                <p className="mb-4">Under Section 140 of the Indian Contract Act, once a guarantor (CGTMSE) pays the creditor (the Bank), the guarantor gets all the rights that the creditor had against the principal debtor. This means you are now dealing with a government-backed trust instead of a private bank. Recovery from government trusts can often be more rigid and involve 'Public Demand Recovery' acts, which are even more stringent than standard civil suits.</p>
                                <p className="font-bold text-yellow-800">We help you negotiate with the bank BEFORE they invoke the CGTMSE guarantee. Once the guarantee is invoked, the bank loses interest in your account, and you are left to deal with the technicalities of the Trust, which has very little room for negotiation or OTS.</p>
                            </div>
                            <p className="mb-6">
                                However, we use the CGTMSE status as a 'Leverage' in the DRT. Banks are required to follow specific 'Recovery SOPs' before they can claim the guarantee. If the bank missed a step in their standard collection process, their claim to the CGTMSE can be rejected. By pointing this out, we force the bank to be more lenient with the borrower to avoid losing their own insurance claim.
                            </p>
                        </section>

                        <section id="why-hire-msme-lawyer" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-8">Why SettleLoans is the Right Choice for Your MSME</h2>
                            <p className="mb-6 text-lg">We don't just know the law; we know the struggle of running a small business in India. Our legal panel is curated to include experts who have successfully fought and won against some of the largest banks in the country.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-start gap-4">
                                    <FontAwesomeIcon icon={faShieldHalved} className="text-[#1F5EFF] text-xl mt-1" />
                                    <p className="text-sm font-bold">Specialized knowledge of MSMED Act and RBI restructuring norms.</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-start gap-4">
                                    <FontAwesomeIcon icon={faGavel} className="text-[#1F5EFF] text-xl mt-1" />
                                    <p className="text-sm font-bold">Aggressive representation in DRTs for SARFAESI defense.</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-start gap-4">
                                    <FontAwesomeIcon icon={faCircleCheck} className="text-[#1F5EFF] text-xl mt-1" />
                                    <p className="text-sm font-bold">Zero-tolerance for recovery agent harassment and intimidation.</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-start gap-4">
                                    <FontAwesomeIcon icon={faHandshakeSimple} className="text-[#1F5EFF] text-xl mt-1" />
                                    <p className="text-sm font-bold">Network of financial experts to help you restructure and survive.</p>
                                </div>
                            </div>
                        </section>

                        <section id="success-stories" className="scroll-mt-32 mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-12 text-center underline decoration-[#1F5EFF] underline-offset-8">Stories of Resilience</h2>
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
                            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-8">MSME Loan Defense: FAQ</h2>
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
                                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2">Expert Guides</h3>
                                <ul className="space-y-4 text-sm font-bold">
                                    <li>
                                        <Link href="/best-lawyer-for-company-loan-matters" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            Company Loan Matters
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/best-lawyer-for-msme-business-loan-dispute" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            MSME Disputes
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/best-lawyer-for-consortium-loan-recovery-defence" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            Consortium Defense
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/best-lawyer-for-loan-settlement-by-drt" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            DRT Specialists
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

export default MSMEAndBusinessLoansPage;
