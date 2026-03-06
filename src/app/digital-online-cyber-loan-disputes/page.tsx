import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
    title: "Digital Online Cyber Loan Disputes India | Stop Harassment & Legal Help",
    description: "Expert legal help for digital online cyber loan disputes in India. Stop loan app harassment, understand RBI guidelines, and protect your data privacy with our technical guide.",
    alternates: {
        canonical: "https://settleloans.in/digital-online-cyber-loan-disputes",
    },
};

export default function DigitalLoanDisputePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://settleloans.in/digital-online-cyber-loan-disputes#webpage",
                "url": "https://settleloans.in/digital-online-cyber-loan-disputes",
                "name": "Digital Online Cyber Loan Disputes India | Stop Harassment & Legal Help",
                "description": "Comprehensive guide to resolving digital loan app disputes, stopping harassment, and legal recourse under RBI guidelines in India.",
                "breadcrumb": { "@id": "https://settleloans.in/digital-online-cyber-loan-disputes#breadcrumb" },
                "inLanguage": "en-IN"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://settleloans.in/digital-online-cyber-loan-disputes#breadcrumb",
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
                        "name": "Digital Online Cyber Loan Disputes",
                        "item": "https://settleloans.in/digital-online-cyber-loan-disputes"
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": "https://settleloans.in/digital-online-cyber-loan-disputes#article",
                "headline": "Digital Online & Cyber Loan Disputes in India: Stop Harassment & Protect Your Rights",
                "description": "Navigate the legal landscape of digital lending in India. Learn about RBI Digital Lending Guidelines 2025 and how to combat loan app harassment.",
                "author": {
                    "@type": "Organization",
                    "name": "SettleLoans Cyber Law Team"
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
                "mainEntityOfPage": { "@id": "https://settleloans.in/digital-online-cyber-loan-disputes#webpage" }
            },
            {
                "@type": "Product",
                "@id": "https://settleloans.in/digital-online-cyber-loan-disputes#product",
                "name": "Digital Loan Defense Services",
                "description": "Legal protection and advisory against illegal digital lending apps and recovery harassment.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "1580"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Deepak K." },
                        "datePublished": "2024-01-25",
                        "reviewBody": "SettleLoans stopped the harassing calls from a fake loan app within 24 hours. Their cyber law expertise is top notch.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Megha R." },
                        "datePublished": "2024-02-15",
                        "reviewBody": "I was terrified by the threats to my contacts. SettleLoans guided me through the cybercrime complaint and saved my reputation.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://settleloans.in/digital-online-cyber-loan-disputes#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "How do I identify a fake loan app?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Fake apps often ask for upfront fees, access your contacts/gallery immediately, and are not linked to an RBI registered NBFC or Bank. Always check the RBI's public directory of legitimate DLAs."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are the RBI guidelines for recovery agents of digital loans?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "RBI prohibits harassment, intimidation, and calling before 8 AM or after 7 PM. Agents must disclose their identity and the lender they represent before contacting the borrower."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can a loan app access my contacts legally?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Under RBI's Digital Lending Guidelines, apps are prohibited from accessing sensitive data like contacts, call logs, or media files, except for a one time consent for onboarding purposes with clear disclosure."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the 'Cooling-off Period' in digital lending?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "It is a mandatory window (minimum 1 day) during which a borrower can exit the loan by paying only the principal and a proportionate processing fee, without any penalty."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How can I stop harassment from loan app recovery agents?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Stop all communication, record evidence, and file a complaint on the National Cybercrime Reporting Portal (cybercrime.gov.in) and with the RBI Ombudsman."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is my data protected under law if I use a loan app?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, the Digital Personal Data Protection (DPDP) Act 2023 and the IT Act protect your privacy. Apps must collect only necessary data and store it within India."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What legal sections apply to loan app blackmail?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Section 503 (Criminal Intimidation), Section 384 (Extortion), and Section 66E of the IT Act (Privacy Violation) are commonly applicable in such cases."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I settle a digital loan if the interest is too high?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, professional intervention can help negotiate a settlement, especially if the app has charged interest exceeding the Fair Practices Code or used unethical recovery tactics."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Where do I find registered DLAs in India?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The RBI maintains a public directory on its website. Legitimate apps must also list their Regulated Entity (NBFC/Bank) partner clearly on the app store and in the app."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does SettleLoans help victims of cyber loan fraud?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We provide legal assistance in filing complaints, drafting legal notices to stop harassment, and representing you in negotiations to settle legitimate debts or challenge fraudulent claims."
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
                            Cyber Recovery & Digital Defense
                        </span>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
                            Digital Online & Cyber <br className="hidden md:block" /> Loan Disputes
                        </h1>
                        <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
                            Don't let illegal loan apps steal your peace. Stop harassment, protect your data, and regain control with our expert cyber-legal shield.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                                Stop Harassment Now
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
                                    Digital Online Cyber Loan Disputes
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">

                    {/* Left Column: TOC */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <TableOfContents
                            items={[
                                { id: "digital-lending-wave", title: "The Digital Lending Wave" },
                                { id: "rbi-guidelines-2025", title: "RBI Guidelines 2025" },
                                { id: "identifying-fake-apps", title: "Identifying Fake Apps" },
                                { id: "harassment-defense", title: "Cyber-Harassment Defense" },
                                { id: "it-act-provisions", title: "IT Act & Data Privacy" },
                                { id: "cooling-off-period", title: "The Cool-off Period" },
                                { id: "grievance-redressal", title: "Grievance Redressal" },
                                { id: "cleaning-scars", title: "Cleaning Digital Scars" },
                                { id: "settleloans-methodology", title: "Our Strategic Shield" },
                                { id: "success-case-studies", title: "Resolution Success Stories" },
                                { id: "faqs", title: "Common Questions" }
                            ]}
                        />
                    </aside>

                    {/* Middle Column: Content */}
                    <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">

                        <section id="digital-lending-wave" className="scroll-mt-32 mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                                The Digital Lending Wave: <span className="text-black">Freedom or a New Trap?</span>
                            </h2>
                            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 z-0"></div>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                                    Over the last few years, the Indian financial landscape has been fundamentally reshaped by the explosion of Fintech. Digital Lending Apps (DLAs) have promised instant gratification, offering small ticket loans with zero collateral and minimal documentation. For millions of Indians who were previously excluded from formal banking, this felt like a moment of liberation. However, this same convenience has opened the door to a dark side: a wave of unregulated, predatory, and often illegal loan apps that have turned a financial product into a tool for psychological warfare.
                                </p>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                                    Digital online and cyber loan disputes are now among the most common legal challenges faced by middle class India. These are not just disagreements over interest rates or repayment dates; they are battles over digital privacy, personal dignity, and the basic right to safety within one's own home. Many of these apps operate from outside Indian jurisdiction, using technical loopholes to harvest your personal data and use it for extortion. At SettleLoans, we have seen the devastating impact of these practices, and we have built a specialized cyber legal team to help you reclaim your digital life and your financial freedom.
                                </p>
                                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 font-bold text-[#1F5EFF]">
                                    If you are currently facing threats from a loan app, remember this: the law is on your side. No amount of debt justifies the invasion of your privacy or the harassment of your family.
                                </p>
                            </div>
                        </section>

                        <section id="rbi-guidelines-2025" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                                RBI Guidelines 2025: The New Legal Framework
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                In response to the growing menace of illegal lending apps, the Reserve Bank of India (RBI) has introduced the Digital Lending Directions, 2025. This comprehensive framework consolidates years of warnings and guidelines into a strict set of rules that every Regulated Entity (RE) and their Lending Service Provider (LSP) must follow. This is not just advice; these are mandatory requirements that have the force of law.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                The 2025 guidelines emphasize transparency and accountability. They mandate that all loan disbursements and repayments must happen directly between the borrower's bank account and the RE's bank account, effectively cutting out the 'dark money' pools used by predatory platforms. Furthermore, the guidelines introduce the concept of a Key Fact Statement (KFS), which must disclose the absolute total cost of the loan, including all interest and penal charges, in a simple language that you can understand.
                            </p>
                            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-8">
                                <h3 className="text-xl font-bold mb-6">Mastering the Digital Lending Rules</h3>
                                <ul className="grid md:grid-cols-2 gap-4 text-sm font-medium">
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                                        Direct Account to Account Transfer
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                                        Transparent Key Fact Statement (KFS)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                                        Data Localization: All data must be in India
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                                        Mandatory Nodal Grievance Officer
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                                        Cooling-off Period for every loan
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#1F5EFF] rounded-full"></span>
                                        No Automatic Credit Limit Increases
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section id="identifying-fake-apps" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                                Identifying Fake Apps: The Technical Red Flags
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Not every app on the Play Store or App Store is legitimate. In fact, many predatory 'Chinese-linked' apps masquerade as Indian Fintech companies. Identifying these early is your first line of defense. Legitimate apps always clearly disclose their NBFC or Bank partner on their website, in the app's 'About' section, and on the app store listing. They never use generic Gmail or Outlook addresses for support.
                            </p>
                            <p className="text-lg leading-relaxed mb-10">
                                The most dangerous red flag is the 'Permission Grab'. Illegal apps will ask for access to your camera, gallery, and contacts immediately after installation. They use this data to create 'morphed' images or to send shaming messages to your family if you are even a day late. A legitimate lender, under the 2025 guidelines, is strictly prohibited from accessing these sensitive mobile resources except for a one time consent purely for the purpose of onboarding or KYC.
                            </p>

                            <div className="grid sm:grid-cols-3 gap-4 my-8">
                                <div className="bg-white p-5 rounded-xl border border-[#DEDEDE] shadow-sm text-center border-t-4 border-t-red-500">
                                    <h4 className="font-bold text-[#2E2E2E] mb-2 uppercase text-xs tracking-widest text-red-600">Upfront Fees</h4>
                                    <p className="text-xs text-gray-500">Asking for a security deposit or processing fee before disbursement.</p>
                                </div>
                                <div className="bg-white p-5 rounded-xl border border-[#DEDEDE] shadow-sm text-center border-t-4 border-t-red-500">
                                    <h4 className="font-bold text-[#2E2E2E] mb-2 uppercase text-xs tracking-widest text-red-600">Contact Access</h4>
                                    <p className="text-xs text-gray-500">Forcing permission to read your entire contact list and call logs.</p>
                                </div>
                                <div className="bg-white p-5 rounded-xl border border-[#DEDEDE] shadow-sm text-center border-t-4 border-t-red-500">
                                    <h4 className="font-bold text-[#2E2E2E] mb-2 uppercase text-xs tracking-widest text-red-600">Short Duration</h4>
                                    <p className="text-xs text-gray-500">Offering '7 day' or '14 day' loans which are inherently predatory.</p>
                                </div>
                            </div>
                        </section>

                        <section id="harassment-defense" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Cyber-Harassment Defense: Stopping the Threats</h2>
                            <p className="mb-6 text-lg leading-relaxed">
                                When a digital loan turns into a nightmare, the recovery agents don't just call you; they weaponize your digital identity. They might send abusive WhatsApp messages, create fake legal notices from the RBI, or even threaten to post your pictures on social media. This is criminal intimidation under Section 503 of the Indian Penal Code and extortion under Section 384. You must treat this as a crime, not just a debt dispute.
                            </p>
                            <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100 mb-8">
                                <h3 className="text-xl font-bold text-emerald-800 mb-4">The SOS Strategy for Victims</h3>
                                <p className="mb-4 text-emerald-900/80">
                                    <strong>Step 1: Stop All Contact.</strong> Do not argue with them. Every response you give is used to escalate the pressure. Block their numbers immediately.
                                </p>
                                <p className="mb-4 text-emerald-900/80">
                                    <strong>Step 2: Collect Cloud Evidence.</strong> Record calls, screenshot all messages, and save the transaction history and the app's details. Do not delete the app until you have the evidence.
                                </p>
                                <p className="text-emerald-900/80">
                                    <strong>Step 3: Formal Cyber Filing.</strong> File a complaint at <u>cybercrime.gov.in</u>. This is your most powerful legal moves as it triggers a police record of the harassment.
                                </p>
                            </div>
                        </section>

                        <section id="it-act-provisions" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">IT Act & Data Privacy: Your Digital Rights</h2>
                            <p className="mb-6 text-lg leading-relaxed">
                                The Information Technology (IT) Act, 2000, along with the recent Digital Personal Data Protection (DPDP) Act, 2023, provides a robust legal shield for your data. Section 66E of the IT Act explicitly deals with the violation of privacy, making it a punishable offense to capture, publish, or transmit images of a person's private area without consent. For digital loan victims, this means that the threat to use 'morphed' images is a serious cybercrime with heavy prison terms.
                            </p>
                            <p className="mb-6 text-lg leading-relaxed">
                                Furthermore, the 2025 guidelines require all data collected by lenders to be stored only on servers located within India. This ensures that Indian law enforcement has jurisdiction over your data. If an app is operating with foreign servers, it is in direct violation of RBI norms, and this is a strong ground for us to challenge the validity of their claims and the legality of their operations.
                            </p>
                        </section>

                        <section id="cooling-off-period" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">The Cool-off Period: Your Right to Think Again</h2>
                            <p className="mb-6 text-lg leading-relaxed">
                                One of the most pro-consumer features of the 2025 RBI guidelines is the mandatory 'Cooling-off' or 'Look-through' period. In the world of instant loans, people often sign up under pressure or without reading the fine print. The law now mandates that every digital loan must offer a window (at least one day) during which you can decide to repay only the principal and a proportionate processing fee to exit the loan completely. This effectively stops the phenomenon of being 'trapped' in a high-interest loan that you didn't fully understand at the time of clicking 'Accept'.
                            </p>
                        </section>

                        <section id="grievance-redressal" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Grievance Redressal: Beating the System</h2>
                            <p className="mb-6 text-lg leading-relaxed">
                                If you have a dispute, you don't have to wait for the lender to act. Every registered digital lender must have a Nodal Grievance Redressal Officer. Their contact details must be prominently displayed on their website and app. If your complaint is not resolved within 30 days, or if you are unsatisfied with the resolution, you can escalate the matter to the RBI Ombudsman.
                            </p>
                            <p className="mb-6 text-lg leading-relaxed">
                                For cyber harassment involving illegal apps, the path is through the local police and the Cybercrime Cell. We handle these escalations for our clients, drafting the professional legal notices that force lenders to take your complaints seriously and stop their recovery agents from violating the law.
                            </p>
                        </section>

                        <section id="cleaning-scars" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Cleaning Digital Scars: Restoring Your Reputation</h2>
                            <p className="mb-6 text-lg leading-relaxed">
                                A major fear for loan app victims is the damage to their CIBIL score or their professional reputation. Many illegal apps do not even report to credit bureaus, but they use the *threat* of doing so as leverage. For legitimate apps that have incorrectly reported a default because of a dispute, the CIBIL grievance mechanism allows for corrections. We help you gather the proof of harassment or fraud to ensure that your credit history correctly reflects the reality of the situation.
                            </p>
                        </section>

                        <section id="settleloans-methodology" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Our Strategic Shield: Your Digital Armor</h2>
                            <p className="mb-6">
                                SettleLoans offers a specialized 'Cyber Defense Suite' for victims of digital lending disputes. We combine deep technical knowledge with aggressive legal advocacy to ensure that you are no longer a target.
                            </p>
                            <div className="bg-[#2E2E2E] text-white p-10 rounded-[40px] shadow-2xl relative overflow-hidden mb-12">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#1F5EFF]/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                                <div className="relative z-10">
                                    <h3 className="text-3xl font-black mb-8">The Digital Defense Framework</h3>
                                    <ul className="space-y-6">
                                        <li className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-full bg-[#1F5EFF] flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                                            <div>
                                                <strong className="block text-xl mb-1 text-[#1F5EFF]">App Forensics</strong>
                                                <span className="opacity-80">We analyze the app's metadata and origin to determine if it is a registered DLA or an illegal, foreign linked entity.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-full bg-[#1F5EFF] flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
                                            <div>
                                                <strong className="block text-xl mb-1 text-[#1F5EFF]">Cease and Desist Notices</strong>
                                                <span className="opacity-80">We send formal legal warnings to the lender and the app's nodal officers to stop all recovery actions immediately.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-full bg-[#1F5EFF] flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
                                            <div>
                                                <strong className="block text-xl mb-1 text-[#1F5EFF]">Cybercrime Assistance</strong>
                                                <span className="opacity-80">We draft and file professional cybercrime complaints to ensure that a formal investigation is initiated into the harassment.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-full bg-[#1F5EFF] flex items-center justify-center flex-shrink-0 text-sm font-bold">4</div>
                                            <div>
                                                <strong className="block text-xl mb-1 text-[#1F5EFF]">Reputation Repair</strong>
                                                <span className="opacity-80">We help you send a 'Clarification Notice' to your contacts if they have been reached by the app, protecting your social standing.</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section id="success-case-studies" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Stories of Digital Victory</h2>
                            <div className="grid md:grid-cols-2 gap-6 not-prose">
                                {[
                                    {
                                        name: "Deepak K.",
                                        loc: "Pune",
                                        type: "Illegal Loan App",
                                        outcome: "Harassment Stopped in 24h",
                                        story: "I took a 5,000 loan from an app that started calling my sister with nasty messages. SettleLoans filed an immediate cybercrime complaint and sent a notice to the app's cloud provider. The calls stopped the next morning, and I never paid a penny more."
                                    },
                                    {
                                        name: "Megha R.",
                                        loc: "Lucknow",
                                        type: "Predatory Fintech",
                                        outcome: "Settled for Principal Only",
                                        story: "A 'reputable' app was charging me 60% interest. SettleLoans identified that they hadn't provided a KFS as per 2025 norms. We forced them to accept only the principal amount as a final settlement. I am now free."
                                    },
                                    {
                                        name: "Saurabh V.",
                                        loc: "Kolkata",
                                        type: "Data Harassment",
                                        outcome: "CIBIL Records Corrected",
                                        story: "An app I never even took a loan from reported a default on my credit record. SettleLoans spent 3 months fighting this with the Ombudsman. Today my score is back to 780 and the fake record is deleted."
                                    },
                                    {
                                        name: "Anjali P.",
                                        loc: "Hyderabad",
                                        type: "Photo Threats",
                                        outcome: "Police Case Registered",
                                        story: "The app threatened to post my morphed photos. I was suicidal. SettleLoans held my hand, took me to the cyber cell, and filed the FIR. The police raided a local call center. I feel safe again."
                                    }
                                ].map((s, i) => (
                                    <div key={i} className="bg-white p-8 rounded-2xl border border-[#DEDEDE] shadow-sm hover:shadow-xl transition-all border-l-8 border-l-[#1F5EFF]">
                                        <div className="flex items-center mb-6">
                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-[#1F5EFF] font-black text-xs mr-4">
                                                {s.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-[#2E2E2E]">{s.name}</h5>
                                                <p className="text-xs text-gray-400">{s.loc}</p>
                                            </div>
                                            <div className="ml-auto text-yellow-400 text-sm">★★★★★</div>
                                        </div>
                                        <div className="mb-4 text-xs font-mono bg-green-50 p-2 rounded border border-green-100 uppercase tracking-tighter">
                                            <span className="block text-green-700 font-bold">{s.outcome}</span>
                                        </div>
                                        <p className="text-sm text-gray-600 italic leading-relaxed">"{s.story}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="faqs" className="scroll-mt-32 mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Frequently Asked Questions</h2>
                            <div className="space-y-4 not-prose">
                                {[
                                    { q: "Is it safe to pay a loan app via UPI?", a: "Only if the UPI ID belongs to a registered company. Never pay into personal accounts or generic IDs like 'agent123@upi'. Legitimate apps use secure payment gateways." },
                                    { q: "Can a loan app put me in jail?", a: "No. Defaulting on a loan is a civil matter. Threats of jail are a classic harassment tactic. However, using forged documents to get a loan is a criminal offense." },
                                    { q: "What should I do if a loan app messages my boss?", a: "Inform your HR immediately about the fraud. This is a violation of privacy. A professional legal notice can also be sent to the app to cease all professional contact." },
                                    { q: "Are 'Loan Settlement' apps legitimate?", a: "Be cautious. Some apps claim to solve your debt only to trap you in another high interest loan. Always consult a professional legal firm like SettleLoans for genuine settlement guidance." },
                                    { q: "What is the maximum interest rate a digital loan app can charge?", a: "While there is no fixed cap, the RBI mandates that interest rates must be 'reasonable' and compliant with the Fair Practices Code. Rates like 1% a day (365% annually) are viewed as usurious." },
                                    { q: "How do I block all loan app calls?", a: "Use 'Do Not Disturb' (DND) on your phone and report the numbers to TRAI via the 'DND' app. However, for cyber harassment, blocking alone is not enough; you must file a cybercrime complaint." },
                                    { q: "What is an LSP in digital lending?", a: "A Lending Service Provider (LSP) is an agent of the bank or NBFC that carries out functions like customer acquisition, servicing, or recovery. They are bound by the same RBI rules as the lender." },
                                    { q: "Can I get my money back from a scam loan app?", a: "It is difficult as these funds are often moved abroad. However, reporting it to your bank and the cyber cell immediately can sometimes lead to the freezing of the scammer's accounts." },
                                    { q: "Does the cooling off period apply to all loans?", a: "Yes, under the 2025 guidelines, every digital loan must have a cooling off period. The duration is decided by the lender's board but must be at least one day." },
                                    { q: "How can SettleLoans protect my contacts?", a: "We help you draft a formal notice to your contacts explaining the data breach and the ongoing legal action against the fraudulent app, which stops the shame tactic." },
                                    { q: "What is the RBI'S CIMS portal?", a: "It is the Centralized Information Management System where all legitimate DLAs must report their data. It is the gold standard for verifying if an app is authorized by the RBI." },
                                    { q: "Can I ignore a legal notice sent via WhatsApp?", a: "Authentic legal notices are usually sent via registered post or email. WhatsApp notices are often fake 'scare tactics' used by recovery agents. Get it verified by our legal team." }
                                ].map((faq, i) => (
                                    <details key={i} className="group bg-white border border-[#DEDEDE] rounded-xl overflow-hidden hover:shadow-md transition-all border-b-4 border-b-[#1F5EFF]/20">
                                        <summary className="flex justify-between items-center p-5 cursor-pointer font-black text-[#2E2E2E] list-none bg-gray-100 group-open:bg-white transition-colors">
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
                            <p className="text-gray-400 text-sm italic">Disclaimer: SettleLoans is a tech enabled digital lending advisory firm. We are not a law firm, but we work with a network of cyber law specialists and consumer advocates to provide resolution services. Final legal outcomes depend on the facts of each case and the cooperation of law enforcement agencies.</p>
                        </div>

                        {/* Mobile CTA */}
                        <div className="lg:hidden mt-16 mb-8">
                            <div className="bg-[#1F5EFF] text-white p-10 rounded-[40px] shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
                                <h3 className="text-2xl font-black mb-6 relative z-10">Reclaim Your Digital Freedom</h3>
                                <p className="text-lg mb-8 relative z-10 font-medium">
                                    Are loan apps threatening your reputation? Our cyber defense experts will help you shut down the threats and settle your debts legally.
                                </p>
                                <Link href="/contact" className="inline-block bg-white text-[#1F5EFF] font-black py-4 px-12 rounded-full hover:scale-105 transition-all text-xl relative z-10 shadow-lg">
                                    Initiate Your Defense
                                </Link>
                            </div>
                        </div>
                    </article>

                    {/* Right Column: Sticky Sidebar */}
                    <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 flex flex-col items-center">
                                <div className="bg-[#1F5EFF] w-full p-4 text-center">
                                    <h3 className="text-lg font-black text-white">Digital Helpdesk</h3>
                                </div>
                                <div className="p-6 text-center">
                                    <div className="w-16 h-16 bg-[#1F5EFF]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#1F5EFF]/20">
                                        <svg className="w-8 h-8 text-[#1F5EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 3m0 18a10.003 10.003 0 01-4.607-1.091M12 3c1.907 0 3.683.53 5.193 1.451m-2.41 13.123A10.002 10.002 0 0112 21c-1.907 0-3.683-.53-5.193-1.451m12.41 3.123A10.002 10.002 0 0011 2.503z"></path></svg>
                                    </div>
                                    <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                                        Facing threats from a loan app? Get a professional legal shield to stop the harassment now.
                                    </p>
                                    <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md">
                                        Talk to Cyber Experts
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2">Related Support</h3>
                                <ul className="space-y-4 text-sm font-bold">
                                    <li>
                                        <Link href="/legal-notice-for-loan-recovery" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            Notice Defence
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/best-lawyer-for-notice-for-loan-default" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            Default Help
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/loan-parties-dispute-resolution" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            Dispute Resolution
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/debt-settlement-company-in-india" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                                            <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                                            Settlement Options
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
