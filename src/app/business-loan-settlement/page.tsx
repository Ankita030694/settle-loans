import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBuilding, 
  faShieldHalved, 
  faGavel, 
  faHandcuffs, 
  faFileContract, 
  faScaleBalanced, 
  faSackDollar, 
  faBriefcase, 
  faStore, 
  faMoneyBillTransfer, 
  faEnvelopeOpenText,
  faPhoneSlash,
  faLock,
  faTriangleExclamation,
  faChartLine,
  faHandHoldingDollar,
  faBan,
  faCheck,
  faUserTie,
  faLandmark
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Business Loan Settlement | MSME & Unsecured Loan Settlement Experts",
  description: "Unable to repay your business loan? We specialize in settling Unsecured Business Loans, MSME loans, and handling Cheque Bounce (Sec 138) cases. Save up to 50% on outstanding dues.",
  alternates: {
    canonical: "https://settleloans.in/business-loan-settlement",
  },
  keywords: [
    "business loan settlement", 
    "unsecured business loan settlement India", 
    "MSME loan settlement scheme 2024", 
    "section 138 cheque bounce lawyer", 
    "Bajaj Finance business loan settlement", 
    "Tata Capital business loan default", 
    "LendingKart loan settlement", 
    "Indifi loan settlement", 
    "SARFAESI Act defense", 
    "business debt restructuring"
  ]
};

export default function BusinessLoanSettlementPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/business-loan-settlement#webpage",
        "url": "https://settleloans.in/business-loan-settlement",
        "name": "Business Loan Settlement | MSME & Unsecured Loan Settlement Experts",
        "description": "Unable to repay your business loan? We specialize in settling Unsecured Business Loans, MSME loans, and handling Cheque Bounce (Sec 138) cases.",
        "breadcrumb": { "@id": "https://settleloans.in/business-loan-settlement#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/business-loan-settlement#breadcrumb",
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
            "name": "Business Loan Settlement",
            "item": "https://settleloans.in/business-loan-settlement"
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/business-loan-settlement#service",
        "name": "Business Loan Settlement Services",
        "description": "Legal settlement services for unsecured business loans, MSME debts, and defense against Section 138 cheque bounce cases.",
        "provider": {
          "@type": "Organization",
          "name": "SettleLoans",
          "url": "https://settleloans.in"
        },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1250",
          "itemReviewed": {
            "@id": "https://settleloans.in/business-loan-settlement#service"
          }
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Corporate Debt Relief",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Unsecured Loan Settlement (OTS)"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Section 138 Legal Defense"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "MSME Restructuring"
              }
            }
          ]
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rajesh Gupta" },
            "datePublished": "2024-02-10",
            "reviewBody": "My trading business collapsed post-COVID. I had 4 unsecured loans totaling 25 Lakhs. SettleLoans handled the arbitration notices and settled all accounts for 11 Lakhs. Section 138 cases were withdrawn.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "itemReviewed": {
              "@id": "https://settleloans.in/business-loan-settlement#service"
            }
          },
          {
             "@type": "Review",
             "author": { "@type": "Person", "name": "Suresh Patel" },
             "datePublished": "2024-01-25",
             "reviewBody": "Recovery agents were visiting my factory and harassing staff. SettleLoans issued legal notices to the NBFCs. The harassment stopped immediately, and we negotiated a 12-month settlement plan.",
             "reviewRating": { "@type": "Rating", "ratingValue": "5" },
             "itemReviewed": {
              "@id": "https://settleloans.in/business-loan-settlement#service"
            }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/business-loan-settlement#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What happens if I default on an Unsecured Business Loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Since there is no collateral to seize, lenders primarily use legal pressure. They will deposit your security cheques to trigger a 'Cheque Bounce' (Section 138 NI Act) case, which is a criminal offense. Settlement is the most effective way to close these loans and avoid court convictions."
            }
          },
          {
            "@type": "Question",
            "name": "Can police arrest me for business loan default?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Loan default itself is a civil matter. However, 'Cheque Bounce' is a criminal offense under Section 138. If you ignore court summons repeatedly, a Non-Bailable Warrant (NBW) can be issued, leading to arrest. We ensure you are represented in court to prevent this."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a settlement scheme for MSME loans?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The RBI has a 'Framework for Revival and Rehabilitation of MSMEs'. Banks are mandated to have non-discriminatory One-Time Settlement (OTS) schemes for MSMEs. We help you draft a proposal under these specific RBI guidelines to demand fair terms."
            }
          },
          {
            "@type": "Question",
            "name": "Can recovery agents visit my office/factory?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "They can visit, but they CANNOT harass, shout, sit for hours, or disturb your business operations. They must carry ID cards and authorization letters. If they create a scene, you can file a police complaint for 'Criminal Trespass' and 'Intimidation'. We handle these escalations for you."
            }
          },
          {
             "@type": "Question",
             "name": "Difference between Secured and Unsecured Loan Settlement?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "For Unsecured loans, lenders are willing to offer high waivers (up to 50%) because they have no asset to sell. For Secured loans (LAP), settlement is harder because they can sell your property under SARFAESI Act. However, we can still negotiate if the property value is LOWER than the debt."
             }
          },
          {
             "@type": "Question",
             "name": "What is the Section 138 procedure?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "1. Cheque bounces. 2. Bank sends Legal Notice (15 days time). 3. If unpaid, they file a case in Magistrate Court. 4. You receive Summons. 5. You must appear and take bail. 6. Trial begins. We act as your defense counsel to delay proceedings and force a settlement."
             }
          },
          {
             "@type": "Question",
             "name": "Can I settle a loan if arbitration has started?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "Yes. Arbitration is a private dispute resolution process. Lenders often prefer it because it's faster. However, even after an Arbitration Award is passed, you can challenge it or negotiate a settlement before the execution stage."
             }
          },
          {
             "@type": "Question",
             "name": "Will business loan settlement affect my future funding?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "Yes, it will adversely affect your credit score and the business's credit file. You may not get unsecured loans from banks for 3-5 years. However, you can still access NBFC loans against property or private funding. Settlement is a survival strategy, not a growth strategy."
             }
          },
          {
             "@type": "Question",
             "name": "Can I get a Moratorium/Restructuring instead of Settlement?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "If your business has cash flow but needs time, we can apply for 'Restructuring' under RBI norms, extending the tenure to reduce EMI. Settlement is better if the business has failed or cash flow is permanently damaged."
             }
          },
          {
             "@type": "Question",
             "name": "How to handle fintech lenders like LendingKart/Indifi?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "Fintechs are very aggressive with digital collections and legal notices. They often use 'automated arbitration'. We have specific strategies for fintechs, focusing on challenging their high interest rates and hidden charges during settlement negotiations."
             }
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/business-loan-settlement#article",
        "headline": "Business Loan Settlement India: The Complete Guide",
        "description": "How to settle unsecured business loans and deal with Section 138 cases. A guide for MSME owners facing debt crisis.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoans Corporate Team"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": {
            "@type": "ImageObject",
            "url": "https://settleloans.in/logo/logo.svg"
          }
        },
        "datePublished": "2024-01-24",
        "dateModified": "2024-01-30",
        "mainEntityOfPage": { "@id": "https://settleloans.in/business-loan-settlement#webpage" }
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
       <section className="w-full bg-[#2E2E2E] pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
            Corporate Debt Relief
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
            Business & MSME Loan <br className="hidden md:block"/> Settlement Services
          </h1>
             <p className="text-lg md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
             Struggling with high interest Working Capital, Overdraft (OD), or Unsecured Business Loans? We provide expert legal protection for your enterprise and negotiate One Time Settlements (OTS) to save your reputation and business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <Link href="/contact" className="inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Get Free Consultation
            </Link>
             <Link href="#sec-138" className="inline-flex items-center justify-center bg-white text-[#2E2E2E] font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg border border-[#DEDEDE]">
              Understand Section 138
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="w-full bg-white border-b border-[#DEDEDE]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-[#747474]">
              <li>
                <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
              </li>
              <li>
                 <span className="text-gray-300">/</span>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#1F5EFF] transition-colors">Services</Link>
              </li>
              <li>
                 <span className="text-gray-300">/</span>
              </li>
              <li className="font-bold text-[#2E2E2E]" aria-current="page">
                Business Loan Settlement
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">
        
        {/* Left Column: TOC */}
        <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
          <TableOfContents 
            items={[
              { id: "business-debt-trap", title: "The Business Debt Trap" },
              { id: "what-is-settlement", title: "What is Settlement?" },
              { id: "why-banks-agree", title: "Why Banks Agree" },
              { id: "unsecured-vs-secured", title: "Unsecured vs Secured" },
              { id: "sec-138", title: "Defending Cheque Bounce" },
              { id: "settlement-process", title: "Step-by-Step Process" },
              { id: "msme-relief", title: "MSME Relief Schemes" },
              { id: "harassment", title: "Stop Harassment" },
              { id: "restructuring", title: "Restructuring vs Settlement" },
              { id: "credit-impact", title: "Impact on Credit" },
              { id: "documents", title: "Documents Required" },
              { id: "reviews", title: "Success Stories" },
              { id: "faqs", title: "FAQs" }
            ]}
          />
        </aside>

        {/* Middle Column: CONTENT */}
        <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
          
          {/* Introduction - The Debt Trap */}
          <section id="business-debt-trap" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl font-black text-[#2E2E2E] mb-6">Running Business vs Managing Debt</h2>
             <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -mr-16 -mt-16 z-0"></div>
               <p className="text-lg leading-relaxed mb-6 relative z-10">
                 Running a business is a battle. When cash flow dries up due to market conditions, delayed payments from clients, or unforeseen disasters like COVID, the first casualty is often loan repayment. You are not a defaulter by choice: you are a victim of circumstance.
               </p>
               <p className="text-lg leading-relaxed relative z-10">
                 Unlike personal loans, business loan defaults come with higher stakes: <strong>Criminal cases under Section 138 (Cheque Bounce), seizures of stock/machinery, and threats to your professional reputation</strong>. At SettleLoans, we understand that a failed business attempt should not mean a life sentence of debt. We help you shut down bad debt so you can restart your business.
               </p>
             </div>
          </section>

          {/* What is Settlement */}
          <section id="what-is-settlement" className="scroll-mt-32 mb-12">
            <h2 className="text-3xl font-black text-[#2E2E2E] mb-6">What is Business Loan Settlement?</h2>
            <p className="text-lg leading-relaxed mb-6">
              Business Loan Settlement (or One Time Settlement - OTS) is a legal and financial process where you negotiate with your lenders (Banks or NBFCs) to pay a reduced lump sum amount to close your loan account permanently. This is usually done when the borrower is unable to pay the full outstanding due to genuine financial hardship.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="font-semibold text-blue-900">Example Scenario:</p>
              <p className="text-blue-800 text-sm mt-2">
                A trader owes ₹20 Lakhs to an NBFC. Due to losses, he cannot pay. Interest piles up, making the debt ₹25 Lakhs. We negotiate with the lender, proving insolvency. The lender agrees to accept ₹10 Lakhs (Principal component) and writes off the remaining ₹15 Lakhs. The account is closed.
              </p>
            </div>
          </section>

          {/* Why Banks Agree */}
          <section id="why-banks-agree" className="scroll-mt-32 mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6">Why Do Banks Agree to Lose Money?</h2>
            <p className="mb-4">It seems illogical for a bank to accept 50% of the money. But they do it for three strategic reasons:</p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center font-bold mr-3 mt-1"><FontAwesomeIcon icon={faScaleBalanced} className="w-4 h-4"/></span>
                <div>
                  <strong>High Cost of Litigation:</strong> Filing civil suits, DRT cases, or Section 138 cases costs the bank legal fees and takes 3-5 years. They prefer immediate cash recovery.
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center font-bold mr-3 mt-1"><FontAwesomeIcon icon={faBriefcase} className="w-4 h-4"/></span>
                <div>
                  <strong>NPA Cleanup:</strong> Guidelines require banks to maintain "Provisioning" (setting aside capital) for bad loans (NPAs). Settling the loan frees up this capital for profitable lending.
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center font-bold mr-3 mt-1"><FontAwesomeIcon icon={faFileContract} className="w-4 h-4"/></span>
                <div>
                  <strong>Tax Benefits:</strong> The amount they "write off" or waive can be claimed as a loss, reducing their corporate tax liability.
                </div>
              </li>
            </ul>
          </section>

           {/* Unsecured vs Secured - CRITICAL SECTION */}
           <section id="unsecured-vs-secured" className="scroll-mt-32 mb-16">
             <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
              Know the Difference: Unsecured vs Secured
            </h2>
            <p className="text-lg leading-relaxed mb-8">
               Your settlement strategy depends entirely on the type of loan.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-[var(--color-primary)] mb-4 flex items-center">
                        <FontAwesomeIcon icon={faFileContract} className="mr-3 w-6 h-6" /> Unsecured Loans
                    </h3>
                    <div className="mb-4 text-sm font-semibold bg-gray-50 p-2 rounded text-gray-700">
                        Examples: Bajaj Finserv Business Loan, Tata Capital, LendingKart, Indifi, Credit Card Overdrafts.
                    </div>
                    <ul className="space-y-3 text-gray-700 text-sm">
                        <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">✓</span> <span className="font-semibold">Collateral:</span> None. They cannot sell your property.</li>
                        <li className="flex items-start"><span className="text-red-500 mr-2 font-bold">!</span> <span className="font-semibold">Main Threat:</span> Section 138 (Cheque Bounce) & Arbitration.</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">✓</span> <span className="font-semibold">Settlement Chance:</span> <strong className="text-green-700">HIGH (40-60% Waiver)</strong>. Since they have no asset security, they prefer some money over nothing.</li>
                    </ul>
                </div>
                <div className="bg-white p-6 rounded-xl border border-orange-100 shadow-sm relative overflow-hidden hover:shadow-md transition-shadow">
                     <h3 className="text-xl font-bold text-orange-700 mb-4 flex items-center relative z-10">
                        <FontAwesomeIcon icon={faLock} className="mr-3 w-6 h-6" /> Secured Loans (LAP/CC)
                    </h3>
                    <div className="mb-4 text-sm font-semibold bg-orange-50 p-2 rounded text-orange-700">
                        Examples: Loan Against Property (LAP), Cash Credit (CC) against Stock/Machinery.
                    </div>
                    <ul className="space-y-3 text-gray-700 relative z-10 text-sm">
                        <li className="flex items-start"><span className="text-orange-500 mr-2 font-bold">!</span> <span className="font-semibold">Collateral:</span> Property, Factory, Gold, Stock.</li>
                        <li className="flex items-start"><span className="text-red-500 mr-2 font-bold">!</span> <span className="font-semibold">Main Threat:</span> SARFAESI Act (Bank can auction property without court order).</li>
                        <li className="flex items-start"><span className="text-orange-600 mr-2 font-bold">~</span> <span className="font-semibold">Settlement Chance:</span> <strong>LOW / DIFFICULT</strong>. Only possible if the asset value is LESS than the loan amount (underwater asset).</li>
                    </ul>
                </div>
            </div>
          </section>

           {/* Section 138 - The Legal Nightmare */}
           <section id="sec-138" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 flex items-center">
              <FontAwesomeIcon icon={faGavel} className="mr-4 w-10 h-10" /> Section 138 Defense Strategy
            </h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-8">
               <p className="font-bold text-red-900/80 mb-2">CRITICAL WARNING</p>
               <p className="text-red-800 text-sm">
                 Business Loan default often involves PDCs (Post Dated Cheques) or NACH mandates. When these bounce, it is a <strong>CRIMINAL OFFENSE</strong> under Section 138 of the Negotiable Instruments Act. Punishment can include 2 years imprisonment or double the cheque amount as fine.
               </p>
            </div>
            
            <p className="mb-6 text-gray-700">Lenders use this fear to force payments. Here is how we defend you:</p>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                   <h4 className="font-bold text-lg text-[var(--color-primary)] mb-2">1. The "Security Cheque" Defense</h4>
                   <p className="text-sm text-gray-600">We argue that the cheque was given as a "Security" at the time of loan disbursement and not for the discharge of any specific existing debt. Indian courts have ruled in many cases that security cheques cannot be used to file Section 138 cases indiscriminately.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                   <h4 className="font-bold text-lg text-[var(--color-primary)] mb-2">2. Defective Notice</h4>
                   <p className="text-sm text-gray-600">The law is strict. The Legal Notice must be sent within 30 days of the memo. It must demand the exact cheque amount. Lenders often make errors here. We challenge the validity of the notice itself, which can get the case dismissed.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                   <h4 className="font-bold text-lg text-[var(--color-primary)] mb-2">3. Dispute the Debt Amount</h4>
                   <p className="text-sm text-gray-600">Lenders often add illegal penal charges and compound interest. We prove in court that the "Enforceable Debt" is much lower than the cheque amount, making the cheque invalid for that debt.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                   <h4 className="font-bold text-lg text-[var(--color-primary)] mb-2">4. Mediation & Settlement</h4>
                   <p className="text-sm text-gray-600">Courts encourage settlement. We represent you in mediation cells, arguing that you are willing to pay the "Principal" but cannot pay the interest. Judges often pressure banks to accept settlements to reduce case backlog.</p>
                </div>
            </div>
          </section>

          {/* Settlement Process - Expanded */}
          <section id="settlement-process" className="scroll-mt-32 mb-16">
             <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">The Settlement Process</h2>
             <div className="relative pl-8 border-l-2 border-[var(--color-primary)]/20 space-y-10">
                <div className="relative">
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--color-primary)]"></span>
                  <h4 className="font-bold text-xl text-[var(--color-text-hero)]">Step 1: Financial Health Check</h4>
                  <p className="text-gray-600 mt-2">
                    We analyze your current cash flow, assets, and liabilities. We calculate a "Realistic Settlement Offer" that you can actually afford to pay. Offering too little will be rejected; offering too much will hurt your business survival.
                  </p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--color-primary)]"></span>
                  <h4 className="font-bold text-xl text-[var(--color-text-hero)]">Step 2: The Delinquency Buffer</h4>
                  <p className="text-gray-600 mt-2">
                    Loans usually become eligible for settlement only after they turn NPA (90 days overdue). During this period, you will face maximum harassment. <strong>We act as your shield.</strong> We handle calls, reply to legal notices, and keep the lenders at bay while you arrange funds.
                  </p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--color-primary)]"></span>
                  <h4 className="font-bold text-xl text-[var(--color-text-hero)]">Step 3: The Negotiation Table</h4>
                  <p className="text-gray-600 mt-2">
                    We formally approach the bank with a settlement proposal. We use RBI guidelines and your financial proof to demand a waiver on all interest and penal charges. We negotiate hard to bring the amount down to the Principal or even lower.
                  </p>
                </div>
                 <div className="relative">
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--color-primary)]"></span>
                  <h4 className="font-bold text-xl text-[var(--color-text-hero)]">Step 4: The Settlement Letter</h4>
                  <p className="text-gray-600 mt-2">
                     Once a deal is reached, we ensure the bank issues a formal <strong>Settlement Letter</strong>. We verify this letter to ensure it contains clauses like "Full and Final Settlement" and "No Future Claims" to protect you from future legal trouble.
                  </p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--color-primary)]"></span>
                  <h4 className="font-bold text-xl text-[var(--color-text-hero)]">Step 5: Closure & Freedom</h4>
                  <p className="text-gray-600 mt-2">
                    You make the payment directly to the bank (never to us). We then follow up to get the <strong>No Dues Certificate (NDC)</strong> and ensure any court cases (Sec 138) are formally withdrawn.
                  </p>
                </div>
             </div>
          </section>

           {/* MSME Relief */}
           <section id="msme-relief" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 flex items-center">
               <FontAwesomeIcon icon={faStore} className="mr-4 w-10 h-10" /> MSME Relief: RBI Guidelines
            </h2>
            <p className="mb-6 leading-relaxed">
              If your business is registered as an MSME (Udyam Registration), you have special rights. The RBI "Framework for Revival and Rehabilitation of MSMEs" protects you.
            </p>
            <div className="space-y-4">
               <div className="flex items-start bg-blue-50 p-4 rounded-lg">
                  <div className="mt-1 mr-3 text-blue-600"><FontAwesomeIcon icon={faShieldHalved} className="w-6 h-6"/></div>
                  <div>
                     <strong className="block text-blue-900">Committee Approach</strong>
                     <span className="text-blue-800 text-sm">Before declaring an MSME NPA, banks must form a committee to see if the business can be saved. They cannot just declare NPA overnight.</span>
                  </div>
               </div>
               <div className="flex items-start bg-blue-50 p-4 rounded-lg">
                   <div className="mt-1 mr-3 text-blue-600"><FontAwesomeIcon icon={faHandHoldingDollar} className="w-6 h-6"/></div>
                  <div>
                     <strong className="block text-blue-900">Non-Discriminatory OTS</strong>
                     <span className="text-blue-800 text-sm">RBI advises banks to have a transparent One-Time Settlement (OTS) policy for MSEs. You can demand a settlement based on these policies, not just the manager's whim.</span>
                  </div>
               </div>
            </div>
          </section>

          {/* Harassment Protection */}
          <section id="harassment" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-8 flex items-center">
               <FontAwesomeIcon icon={faBan} className="mr-4 w-10 h-10" /> 
               Stop Factory Visits
            </h2>
            <p className="mb-6 leading-relaxed">
               Recovery agents visit your shop/factory, shout in front of customers, sit in your office for hours ('Dharna'), and call your vendors. This destroys your reputation.
            </p>
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <h4 className="font-bold text-red-900 mb-4">Your Rights:</h4>
                <ul className="space-y-2 text-red-800 text-sm">
                   <li><FontAwesomeIcon icon={faCheck} className="mr-2 w-4 h-4"/> Agents <strong>CANNOT</strong> disturb your business operations.</li>
                   <li><FontAwesomeIcon icon={faCheck} className="mr-2 w-4 h-4"/> Agents <strong>CANNOT</strong> speak to your employees or customers about your debt.</li>
                   <li><FontAwesomeIcon icon={faCheck} className="mr-2 w-4 h-4"/> Agents <strong>CANNOT</strong> confiscate stock without a Court Receiver order.</li>
                </ul>
                <p className="mt-4 font-semibold text-red-900">
                   If they violate this, we file a formal Police Complaint. Usually, one legal notice from our side stops these physical visits instantly.
                </p>
            </div>
          </section>

          {/* Restructuring vs Settlement */}
          <section id="restructuring" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 flex items-center">
              <FontAwesomeIcon icon={faChartLine} className="mr-4 w-10 h-10" /> Restructuring vs Settlement
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left text-gray-700 bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3">Feature</th>
                    <th className="px-6 py-3">Restructuring</th>
                    <th className="px-6 py-3">Settlement (OTS)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-medium text-gray-900">Goal</td>
                    <td className="px-6 py-4">Save the business & continue repayment.</td>
                    <td className="px-6 py-4">Close the loan & exit debt.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Method</td>
                    <td className="px-6 py-4">Extend tenure (e.g., 2yrs to 5yrs).</td>
                    <td className="px-6 py-4">Pay lump sum (e.g., 50% of outstanding).</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-medium text-gray-900">CIBIL Impact</td>
                    <td className="px-6 py-4">Moderate ("Restructured" tag).</td>
                    <td className="px-6 py-4">Severe ("Settled" tag).</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Best For</td>
                    <td className="px-6 py-4">Temporary cash flow issues.</td>
                    <td className="px-6 py-4">Business failure / Insolvency.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

           {/* Documents Required */}
           <section id="documents" className="mb-16">
              <h2 className="text-3xl font-black text-[#2E2E2E] mb-6">Documents Required for Business Settlement</h2>
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                  <div className="grid md:grid-cols-2 gap-6">
                      <div>
                          <h4 className="font-bold text-[var(--color-primary)] mb-3 flex items-center"><FontAwesomeIcon icon={faUserTie} className="mr-2 w-12 h-12"/> For Sole Proprietorship</h4>
                          <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4"/> GST Registration Certificate</li>
                              <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4"/> 2 Years ITR (Income Tax Returns)</li>
                              <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4"/> 6 Months Current Account Statement</li>
                          </ul>
                      </div>
                      <div>
                          <h4 className="font-bold text-[var(--color-primary)] mb-3 flex items-center"><FontAwesomeIcon icon={faBuilding} className="mr-2 w-12 h-12"/> For Pvt Ltd / LLP</h4>
                          <ul className="space-y-2 text-sm text-gray-700">
                              <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4"/> Board Resolution for Settlement</li>
                              <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4"/> Audited Balance Sheet & P&L</li>
                              <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4"/> List of Directors & Default Notices</li>
                          </ul>
                      </div>
                  </div>
              </div>
           </section>

          {/* Testimonials */}
          <section id="reviews" className="scroll-mt-32 text-center mb-16">
             <h2 className="text-3xl font-black text-[#2E2E2E] mb-8">Success Stories</h2>
             <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="bg-white p-6 rounded-2xl border border-[var(--color-border)] shadow-sm">
                   <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 mr-3">R</div>
                      <div>
                     <h4 className="font-bold">Rajesh Gupta</h4>
                         <p className="text-xs text-gray-500">Trader, Delhi</p>
                      </div>
                   </div>
                   <p className="text-sm text-gray-600 italic">"My trading business collapsed post-COVID. I had 4 unsecured loans totaling 25 Lakhs from Bajaj and Tata. SettleLoans handled the arbitration notices and settled all accounts for 11 Lakhs. Section 138 cases were withdrawn."</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-[var(--color-border)] shadow-sm">
                   <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center font-bold text-green-600 mr-3">S</div>
                      <div>
                     <h4 className="font-bold">Suresh Patel</h4>
                         <p className="text-xs text-gray-500">Manufacturer, Gujarat</p>
                      </div>
                   </div>
                   <p className="text-sm text-gray-600 italic">"Recovery agents were visiting my factory and harassing staff. SettleLoans issued legal notices to the NBFCs citing RBI circulars. The harassment stopped immediately, and we negotiated a 12-month settlement plan."</p>
                </div>
             </div>
          </section>

          {/* FAQs - Expanded to 20 */}
          <h2 id="faqs" className="scroll-mt-32 text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 not-prose mb-20">
            {[
              { 
                q: "What happens if I default on an Unsecured Business Loan?", 
                a: "Since there is no collateral to seize, lenders primarily use legal pressure. They will deposit your security cheques to trigger a 'Cheque Bounce' (Section 138 NI Act) case, which is a criminal offense. They may also file for Arbitration. Settlement is the most effective way to close these loans and avoid court convictions." 
              },
              { 
                q: "Can police arrest me for business loan default?", 
                a: "Loan default itself is a civil matter. However, 'Cheque Bounce' is a criminal offense under Section 138. If you ignore court summons repeatedly, a Non-Bailable Warrant (NBW) can be issued, leading to arrest. We ensure you are represented in court to prevent this." 
              },
              { 
                q: "Is there a settlement scheme for MSME loans?", 
                a: "Yes. The RBI has a 'Framework for Revival and Rehabilitation of MSMEs'. Banks are mandated to have non-discriminatory One-Time Settlement (OTS) schemes for MSMEs. We help you draft a proposal under these specific RBI guidelines to demand fair terms." 
              },
              { 
                q: "Can recovery agents visit my office/factory?", 
                a: "They can visit, but they CANNOT harass, shout, sit for hours, or disturb your business operations. They must carry ID cards and authorization letters. If they create a scene, you can file a police complaint. We handle these escalations for you." 
              },
              { 
                q: "Difference between Secured and Unsecured Loan Settlement?", 
                a: "For Unsecured loans, lenders are willing to offer high waivers (up to 50%) because they have no asset to sell. For Secured loans (LAP), settlement is harder because they can sell your property under SARFAESI Act. However, we can still negotiate if the property value is lower than the debt." 
              },
              { 
                q: "What is the Section 138 procedure?", 
                a: "1. Cheque bounces. 2. Bank sends Legal Notice (15 days time). 3. If unpaid, they file a case in Magistrate Court. 4. You receive Summons. 5. You must appear and take bail. 6. Trial begins. We act as your defense counsel to delay proceedings and force a settlement." 
              },
              { 
                q: "Can I settle a loan if arbitration has started?", 
                a: "Yes. Arbitration is a private dispute resolution process often preferred by NBFCs. Even after an Arbitration Award is passed against you, effective negotiation is possible before the Execution Petition (EP) is filed in civil court." 
              },
              { 
                q: "Will business loan settlement affect my future funding?", 
                a: "Yes, it will adversely affect your credit score and the business credit file. You may not get unsecured loans from banks for 3-5 years. However, you can still access NBFC loans against property or private funding. Settlement is a survival strategy, not a growth strategy." 
              },
              { 
                q: "Can I get a Moratorium/Restructuring instead of Settlement?", 
                a: "If your business has sustainable cash flow but needs time, we can apply for 'Restructuring' under RBI norms, extending the tenure to reduce EMI. Settlement is better if the business has failed or cash flow is permanently damaged." 
              },
              { 
                q: "How to handle fintech lenders like LendingKart/Indifi?", 
                a: "Fintechs are very aggressive with digital collections and legal notices. They often use 'automated arbitration'. We have specific strategies for fintechs, focusing on challenging their high interest rates and hidden charges during settlement negotiations." 
              },
              {
                q: "Do I need to close my GST registration if I settle?",
                a: "Not necessarily. Settlement affects your creditworthiness, not your business registration. However, if you are shutting down the business entity entirely, you should surrender the GST license to avoid compliance penalties."
              },
              {
                q: "Are Directors personally liable for Pvt Ltd company loans?",
                a: "Generally, Pvt Ltd offers limited liability. However, most banks take 'Personal Guarantees' from directors for business loans. If you signed a personal guarantee, you are personally liable, and your personal assets can be attached."
              },
              {
                q: "Can I settle a Mudra Loan?",
                a: "Yes, Mudra loans are essentially unsecured business loans. They are covered under the CGTMSE scheme. Banks can claim a portion of the loss from the government trust, so they might be willing to settle the rest with you."
              },
              {
                q: "Can I travel abroad if I have a Section 138 case?",
                a: "Yes, unless the court has specifically impounded your passport or issued a Look Out Circular (LOC). LOCs are usually issued only for very large frauds or economic offenses, not for typical business loan defaults. However, you must attend court dates."
              },
              {
                q: "What if I have multiple loans with different banks?",
                a: "We recommend a 'Portfolio Settlement'. We prioritize the most aggressive lenders (those filing legal cases) first. We can also negotiate a consolidated payment plan if funds are limited."
              },
              {
                q: "Can I settle if I have already received a court summons?",
                a: "Yes, absolutely. In fact, most settlements happen at this stage. We can inform the judge that we are in settlement talks, and the court will usually grant time (adjournment) to facilitate the compromise."
              },
              {
                q: "Is it better to file for Insolvency/Bankruptcy (IBC)?",
                a: "For small businesses (MSMEs) and individual proprietorships, the personal insolvency process is not yet fully notified/smooth in India. Settlement (OTS) is faster and cheaper than the long legal route of bankruptcy."
              },
              {
                q: "Do I have to pay tax on the waived amount?",
                a: "Technically, waived debt can be treated as 'Income from Business/Profession' under Section 41(1) of the Income Tax Act. You should consult your CA to handle this in your balance sheet to minimize tax impact."
              },
              {
                q: "Can I get a secured loan (LAP) after settlement?",
                a: "It is difficult but not impossible. Some NBFCs offer 'sub-prime' loans or loans against property even with poor CIBIL, provided the property value is high and you have strong current cash flow."
              },
              {
                q: "How long does the settlement process take?",
                a: "It typically takes 2 to 6 months. It depends on your availability of funds and the bank's approval cycle. We push to close it as fast as possible to stop interest accumulation."
              }
            ].map((faq, i) => (
              <details key={i} className="group bg-white border border-[#DEDEDE] rounded-xl overflow-hidden hover:shadow-md transition-all">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-black text-[#2E2E2E] list-none focus:outline-none bg-[#E3EDFF]/50 group-open:bg-[#E3EDFF]">
                  <span className="text-lg pr-4">{i + 1}. {faq.q}</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 flex-shrink-0">
                    <svg className="w-5 h-5 text-[#1F5EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7"></path></svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 text-[#2E2E2E] opacity-90 leading-relaxed border-t border-[#DEDEDE] pt-4 mt-0 bg-white">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
          
           <div className="mt-16 pt-8 border-t border-[var(--color-border)] text-center">
             <p className="text-[var(--color-text-muted)] text-sm italic">Disclaimer: SettleLoans assists with settlement of loans. We are not a lender. we provide legal consultancy for debt resolution. Results vary based on individual cases.</p>
          </div>

        </article>

        {/* Right Sticky Column */}
        <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
          <div className="sticky top-24 space-y-8">
             <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
               <div className="bg-[#1F5EFF] p-4 text-center">
                 <h3 className="text-lg font-black text-white">Business in Trouble?</h3>
               </div>
               <div className="p-6 text-center">
                <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                  Stop the Section 138 cases and secure your assets.
                </p>
                <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg">
                  Talk to a Lawyer
                </Link>
                <p className="mt-4 text-xs text-[#DEDEDE]/60"> Confidential to Business Owners</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
              <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2">Related Services</h3>
              <ul className="space-y-4 text-sm font-bold">
                 <li>
                  <Link href="/services/nbfc-loan-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                    NBFC Settlement
                  </Link>
                </li>
                 <li>
                  <Link href="/services/credit-card-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                     <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                    Credit Card Debt
                  </Link>
                </li>
                 <li>
                  <Link href="/app-loan-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                     <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                    App Loan Settlement
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
