import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "What is a Creditor? Meaning, Definition, and Types (IBC & Banking)",
  description: "Understand the meaning and types of creditors in banking. Learn the difference between secured vs unsecured creditor, and financial vs operational creditor under IBC.",
  alternates: {
    canonical: "https://settleloans.in/what-is-creditor-meaning-definition-and-types",
  },
};

export default function CreditorMeaningPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/what-is-creditor-meaning-definition-and-types#webpage",
        "url": "https://settleloans.in/what-is-creditor-meaning-definition-and-types",
        "name": "What is a Creditor? Meaning, Definition, and Types (IBC & Banking)",
        "description": "Comprehensive guide on what a creditor is, the types of creditors in banking, and how to differentiate secured vs unsecured, and financial vs operational creditors.",
        "breadcrumb": { "@id": "https://settleloans.in/what-is-creditor-meaning-definition-and-types#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/what-is-creditor-meaning-definition-and-types#breadcrumb",
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
            "name": "Creditor Meaning and Types",
            "item": "https://settleloans.in/what-is-creditor-meaning-definition-and-types"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/what-is-creditor-meaning-definition-and-types#article",
        "headline": "What is a Creditor? Meaning, Definition, and Types",
        "description": "Understand the meaning of a creditor, types of creditors in banking, secured vs unsecured creditor, and financial creditor vs operational creditor IBC.",
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
        "datePublished": "2024-07-24",
        "dateModified": "2024-07-24",
        "mainEntityOfPage": { "@id": "https://settleloans.in/what-is-creditor-meaning-definition-and-types#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/what-is-creditor-meaning-definition-and-types#product",
        "name": "Creditor Defense and Loan Settlement Service",
        "brand": {
          "@type": "Brand",
          "name": "SettleLoans"
        },
        "image": "https://settleloans.in/logo/logo.svg",
        "description": "Expert legal and negotiation services to deal with different types of creditors in banking, handle DRT matters, and successfully settle loans.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1040",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rajesh M." },
            "datePublished": "2023-11-12",
            "reviewBody": "SettleLoans helped me understand that my bank was a secured creditor for my home loan and an unsecured creditor for my credit card. This knowledge changed my whole settlement strategy.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Vikram S." },
            "datePublished": "2023-12-05",
            "reviewBody": "My business was facing an insolvency notice from an operational creditor. The legal team at SettleLoans defended the claim under the IBC and saved my company.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Sneha P." },
            "datePublished": "2024-02-18",
            "reviewBody": "Excellent service. We were drowning in unsecured personal loans and didn't know how to negotiate. SettleLoans stepped in and reduced our debt burden significantly.",
            "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Anil D." },
            "datePublished": "2024-04-30",
            "reviewBody": "When the financial creditors pushed us to the NCLT under the IBC, the team's understanding of financial vs operational creditor rules gave us the crucial delay we needed to arrange funds.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
             "@type": "Review",
             "author": { "@type": "Person", "name": "Meera K." },
             "datePublished": "2024-06-15",
             "reviewBody": "They explained the exact powers of my secured creditors and stopped the illegal harassment by bank agents. Got a very good settlement deal.",
             "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/what-is-creditor-meaning-definition-and-types#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the meaning of a creditor?",
            "acceptedAnswer": { "@type": "Answer", "text": "A creditor is a person, bank, or organization that has lent money, provided goods, or rendered services to a debtor, and is legally owed repayment in the future." }
          },
          {
            "@type": "Question",
            "name": "What are the common types of creditors in banking?",
            "acceptedAnswer": { "@type": "Answer", "text": "In banking, creditors are primarily classified into secured creditors (who hold collateral like a house or car) and unsecured creditors (who lend based on creditworthiness, like personal loans or credit cards)." }
          },
          {
            "@type": "Question",
            "name": "What is the difference between a secured vs unsecured creditor?",
            "acceptedAnswer": { "@type": "Answer", "text": "A secured creditor has a legal claim (lien) over a specific asset of the borrower if they default. An unsecured creditor has no such collateral and must rely on standard legal action to recover dues." }
          },
          {
            "@type": "Question",
            "name": "Who is a Financial Creditor under the IBC?",
            "acceptedAnswer": { "@type": "Answer", "text": "Under the Insolvency and Bankruptcy Code (IBC), a Financial Creditor is an entity (like a bank or NBFC) that has given a loan or financial debt against the payment of interest." }
          },
          {
            "@type": "Question",
            "name": "Who is an Operational Creditor under the IBC?",
            "acceptedAnswer": { "@type": "Answer", "text": "An Operational Creditor is a person or entity owed money for providing goods or services to the debtor, including employees for unpaid wages or the government for unpaid taxes." }
          },
          {
            "@type": "Question",
            "name": "Can an unsecured creditor seize my property?",
            "acceptedAnswer": { "@type": "Answer", "text": "No, an unsecured creditor cannot automatically seize your property. They must first file a civil suit in court, win the case, and obtain a court decree ordering the attachment of your assets." }
          },
          {
            "@type": "Question",
            "name": "Can a financial creditor initiate insolvency against an individual?",
            "acceptedAnswer": { "@type": "Answer", "text": "The IBC provisions for individual insolvency are still being rolled out in phases (mostly for personal guarantors). Currently, financial creditors typically use the DRT or SARFAESI Act for standard individual defaults." }
          },
          {
            "@type": "Question",
            "name": "Why is it important to know what type of creditor your bank is?",
            "acceptedAnswer": { "@type": "Answer", "text": "Knowing your creditor's type dictates your defense strategy. Secured creditors have fast-track recovery powers (SARFAESI), while unsecured creditors rely on lengthier civil litigation or arbitration." }
          },
          {
            "@type": "Question",
            "name": "Do operational creditors have voting rights in a Committee of Creditors (CoC)?",
            "acceptedAnswer": { "@type": "Answer", "text": "Generally, only financial creditors form the CoC and have voting rights during corporate insolvency proceedings, unless the corporate debtor has no financial creditors." }
          },
          {
            "@type": "Question",
            "name": "Can I negotiate a settlement with a secured creditor?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, but it is much harder than negotiating with an unsecured creditor. Secured creditors know they can auction the collateral, so settlement offers must usually be higher and legally backed." }
          }
        ]
      }
    ]
  };

  const tocItems = [
    { id: "what-is-a-creditor", title: "What is a Creditor? (Definition)" },
    { id: "types-of-creditors-banking", title: "Types of Creditors in Banking" },
    { id: "secured-vs-unsecured", title: "Secured vs Unsecured Creditor" },
    { id: "drt-role", title: "The Role of Debt Recovery Tribunals (DRT)" },
    { id: "financial-vs-operational", title: "Financial vs Operational Creditor (IBC)" },
    { id: "protecting-assets", title: "How to Protect Assets from Secured Creditors" },
    { id: "guarantors-liability", title: "Guarantor's Liability to a Creditor" },
    { id: "dealing-with-creditors", title: "How to Deal with Your Creditors" },
    { id: "success-stories", title: "Client Success Stories" },
    { id: "faqs", title: "Frequently Asked Questions" }
  ];

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
              Debt Resolution Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              What is a Creditor? <span className="text-[#1F5EFF]">Meaning & Types</span>
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Secured vs Unsecured. Financial vs Operational. Knowing exactly what type of 'Creditor' your bank is changes how you fight them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Get Legal Help Against Creditors
              </Link>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-xs md:text-sm text-[#747474]">
                <li><Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link></li>
                <li><span className="text-gray-300">/</span></li>
                <li className="font-bold text-[#2E2E2E]">What is a Creditor</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative text-[var(--color-text-body)]">

          {/* Left Column: TOC */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>

          {/* Middle Column: Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">

            <section id="what-is-a-creditor" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  What is a Creditor? (Meaning & Definition)
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  In simple terms, a <strong>creditor</strong> is a party—whether an individual, a financial institution like a bank, or a company—that has extended money, services, or goods to another party (the debtor). The debtor has a legal obligation to repay the creditor, usually with interest, within a stipulated time.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  When you take a personal loan from HDFC, HDFC is your creditor. When a company buys raw materials on a 60-day credit term, the supplier is the creditor. However, in the eyes of the law, not all creditors are equal. 
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  How a creditor can legally recover their money depends entirely on how they are classified under Indian law, specifically banking laws and the Insolvency and Bankruptcy Code (IBC).
                </p>
              </div>
            </section>

            <section id="types-of-creditors-banking" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Types of Creditors in Banking
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                In the banking and financial sector, your lender's power to force you to pay heavily depends on their classification. 
              </p>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Why Classification Matters</h4>
                <p className="text-blue-900 text-lg leading-relaxed mb-4">
                  Banks will often threaten borrowers with severe consequences, but their actual legal power is limited by their creditor status.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">It determines if they can seize your house directly or if they must go through a lengthy court trial.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">It dictates your leverage during a loan settlement negotiation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">It affects which courts (DRT, NCLT, or Civil Courts) have jurisdiction over the matter.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="secured-vs-unsecured" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Secured vs Unsecured Creditor
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                This is the most critical distinction for retail borrowers dealing with personal loans, credit cards, and home loans.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Secured Creditor</h4>
                  <p className="text-gray-700 leading-relaxed">
                    A secured creditor has a legal charge or "lien" over a specific asset (collateral) owned by the borrower. 
                    <br/><br/>
                    <strong>Examples:</strong> Home Loans, Car Loans, Loan Against Property (LAP).<br/><br/>
                    <strong>Legal Power:</strong> Extremely high. Under the SARFAESI Act, they can attach and auction your property without requiring court intervention if you default for over 90 days.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Unsecured Creditor</h4>
                  <p className="text-gray-700 leading-relaxed">
                    An unsecured creditor has no collateral backing their loan. They lent money purely based on your credit score and income profile.
                    <br/><br/>
                    <strong>Examples:</strong> Personal Loans, Credit Cards, Student Loans.<br/><br/>
                    <strong>Legal Power:</strong> Low to Moderate. They cannot seize your assets directly. They must file a civil suit for recovery, win the case, and get a court decree to attach your bank accounts or property.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-gray-800 text-lg leading-relaxed">
                  <strong>Strategic Insight:</strong> If you are struggling with debt, prioritizing negotiations with a secured creditor is usually wiser because your physical assets are at immediate risk. Unsecured creditors are much more likely to agree to a heavily discounted One Time Settlement (OTS) because they fear the long, expensive litigation process.
                </p>
              </div>
            </section>

            <section id="drt-role" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The Role of Debt Recovery Tribunals (DRT)
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                When dealing with banking creditors, you will frequently hear the term "DRT" (Debt Recovery Tribunal). The DRT was established to facilitate the speedy recovery of debt payable to banks and financial institutions. However, not all creditors can drag you to the DRT.
              </p>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-gray-800 text-lg leading-relaxed mb-4">
                  <strong>Jurisdiction and Eligibility:</strong> 
                  <br/>
                  A bank or financial institution can only file a case in the DRT if the recovered debt amount exceeds ₹20 Lakhs. If your unsecured personal loan default is ₹5 Lakhs, the bank cannot take you to the DRT; they must use a standard civil court. For secured creditors, the DRT acts as the primary legal battleground, especially when borrowers want to challenge a SARFAESI possession notice.
                </p>
                <p className="text-gray-800 text-lg leading-relaxed">
                  Borrowers have the right to file an appeal in the DRT under Section 17 of the SARFAESI Act if a secured creditor acts illegally, fails to provide a 60-day notice, or undervalues the property during an auction. 
                </p>
              </div>
            </section>

            <section id="financial-vs-operational" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Financial vs Operational Creditor (IBC)
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                If you run a company or MSME, you must understand how creditors are classified under the Insolvency and Bankruptcy Code (IBC). When a company defaults, its creditors can drag it to the NCLT to initiate Corporate Insolvency Resolution Process (CIRP).
              </p>

              <div className="space-y-12 mt-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Financial Creditor</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-3">
                      A financial creditor is an entity to whom a "financial debt" is owed. This means money was disbursed against the consideration for the time value of money (interest).
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      <strong>Examples:</strong> Banks, NBFCs, Debenture Holders.
                      <br/><strong>Role in IBC:</strong> They form the Committee of Creditors (CoC) and hold all the voting power to decide the fate of the defaulting company (whether to restructure or liquidate it).
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Operational Creditor</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-3">
                      An operational creditor is a person to whom an "operational debt" is owed, arising out of the provision of goods, services, employment, or government dues.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      <strong>Examples:</strong> Vendors, Suppliers, Employees (unpaid wages), and the Income Tax Department.
                      <br/><strong>Role in IBC:</strong> They can trigger insolvency proceedings if their dues exceed ₹1 Crore, but they generally <strong>do not</strong> have voting rights in the CoC. They are placed lower in the priority list during liquidation.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="protecting-assets" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How to Protect Assets from Secured Creditors
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                A secured creditor has immense power, but that power is highly regulated by the RBI and the SARFAESI Act. If you are facing property attachment, you must act fast. Delaying your response gives the secured creditor a massive legal advantage.
              </p>

              <div className="space-y-12 mt-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Reply to the 13(2) Notice</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      When an account becomes an NPA (Non-Performing Asset), the secured creditor will send a demand notice under Section 13(2) of the SARFAESI Act, giving you 60 days to clear the dues. <strong>Do not ignore this.</strong> You must send a legal objection within these 60 days challenging the loan math, illegal charges, or seeking time. The bank is legally mandated to reply to your objection within 15 days.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Negotiate an OTS Before Possession</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Secured creditors prefer cash over real estate. Taking possession of a property, arranging security guards, publishing auction notices, and fighting DRT stay orders is expensive and tedious for banks. Negotiating a One Time Settlement (OTS) before they issue a symbolic possession notice (Section 13(4)) is usually your best window to save the asset.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">File for a Stay Order in DRT</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      If the secured creditor rejects your OTS and proceeds with physical possession via the District Magistrate, your only legal recourse is to hire a DRT lawyer and file a Securitization Application (SA) to obtain an interim stay order, halting the auction process.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="guarantors-liability" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Guarantor's Liability to a Creditor
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Many individuals become "creditor victims" without ever utilizing the loan money themselves. This happens when you sign as a co-borrower or a legal guarantor for a friend, family member, or a company's loan.
              </p>

              <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE] mb-8">
                <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Co-extensive Liability Explained</h4>
                <p className="text-gray-700 leading-relaxed">
                  Under the Indian Contract Act, the liability of a guarantor is co-extensive with that of the principal debtor. This means if your friend defaults on a car loan and vanishes, the creditor (the bank) has the full legal right to recover 100% of the pending amount directly from you. 
                  <br/><br/>
                  Furthermore, if the principal borrower defaults, the creditor will report the default to CIBIL under the guarantor's PAN card as well, entirely destroying your credit score and your ability to secure future loans. Before you sign any document for a creditor, understand that you are taking on the exact same legal risk as the primary borrower.
                </p>
              </div>
            </section>
            
            <section id="dealing-with-creditors" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How to Deal with Your Creditors
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                When you default, banks use psychological warfare. They deliberately blur the lines between different types of creditors to scare you into paying.
              </p>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-3">Beware of Empty Threats</h4>
                <p className="text-red-900 leading-relaxed mb-4">
                  Recovery agents for unsecured personal loans often threaten to "seize your house by tomorrow" or "send the police to arrest you." This is legally impossible.
                </p>
                <ul className="text-red-900 space-y-2 list-disc list-inside">
                  <li>Unsecured creditors cannot touch your property without a court decree.</li>
                  <li>In India, defaulting on an unsecured loan is a civil offense, not a criminal one. Police cannot arrest you for not paying your EMI.</li>
                  <li>Only secured creditors with registered collateral can initiate SARFAESI action for property seizure.</li>
                </ul>
              </div>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Client Success Stories
              </h2>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      RM
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Rajesh M.</h4>
                      <div className="flex text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">
                    "SettleLoans helped me understand that my bank was a secured creditor for my home loan and an unsecured creditor for my credit card. This knowledge changed my whole settlement strategy."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Loan: ₹15 Lakhs (Unsecured)</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Settled: ₹4 Lakhs</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      VS
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Vikram S.</h4>
                      <div className="flex text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">
                    "My business was facing an insolvency notice from an operational creditor. The legal team at SettleLoans defended the claim under the IBC and saved my company."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Issue: IBC Notice</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Result: Dispute Resolved</span>
                  </div>
                </div>

              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {jsonLd["@graph"].find(item => item["@type"] === "FAQPage")?.mainEntity?.map((faq: any, index: number) => (
                  <div key={index} className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-xl font-bold text-[#2E2E2E] mb-3">{faq.name}</h4>
                    <p className="text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <h3 className="text-3xl font-black mb-6 relative z-10">Stop Creditor Harassment Today</h3>
              <p className="text-xl opacity-90 mb-8 relative z-10 max-w-2xl mx-auto">
                Are you facing legal threats from a secured or unsecured creditor? Let our expert legal team analyze your creditor's status and negotiate a settlement that protects your assets.
              </p>
              <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-xl hover:scale-105 transition-transform shadow-xl relative z-10">
                Consult a Debt Defense Lawyer
              </Link>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The legal information provided is for educational purposes and should not be construed as formal legal advice. Always consult with a practicing advocate regarding specific facts of your case.
              </p>
            </div>

          </article>

          {/* Right Column: Context Cards */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <h4 className="text-xl font-black mb-4 relative z-10">Legal Notice from Bank?</h4>
                <p className="text-sm opacity-90 mb-6 relative z-10">
                  Don't panic. Learn what rights your specific creditor actually has before paying a single rupee.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] w-full py-3 rounded-lg font-bold text-sm hover:bg-blue-600 transition-colors relative z-10">
                  Get Free Case Evaluation
                </Link>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Legal Resources
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/rbi-guidelines-on-loan-recovery-agents" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      RBI Guidelines on Recovery
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-reply-to-sarfaesi-act-section-13-2-notice-to-save-property-from-auction" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      SARFAESI Notice Defense
                    </Link>
                  </li>
                  <li>
                    <Link href="/difference-between-civil-and-criminal-liability-in-loans" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Civil vs Criminal Liability
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
