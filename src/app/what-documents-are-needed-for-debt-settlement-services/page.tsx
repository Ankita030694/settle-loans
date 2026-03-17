import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Documents Needed for Debt Settlement Services in India | 2025 Checklist",
  description: "Complete list of documents required for debt settlement in India. Learn about KYC, financial hardship proof, income documents, and post-settlement NOC requirements.",
  alternates: {
    canonical: "https://settleloans.in/what-documents-are-needed-for-debt-settlement-services",
  },
};

export default function DocumentRequirementsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/what-documents-are-needed-for-debt-settlement-services#webpage",
        "url": "https://settleloans.in/what-documents-are-needed-for-debt-settlement-services",
        "name": "Documents Needed for Debt Settlement Services in India | 2025 Checklist",
        "description": "Comprehensive guide to all document requirements for the debt settlement process in India.",
        "breadcrumb": { "@id": "https://settleloans.in/what-documents-are-needed-for-debt-settlement-services#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/what-documents-are-needed-for-debt-settlement-services#breadcrumb",
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
            "name": "Document Requirements",
            "item": "https://settleloans.in/what-documents-are-needed-for-debt-settlement-services"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/what-documents-are-needed-for-debt-settlement-services#article",
        "headline": "What Documents Are Needed for Debt Settlement Services? The 2025 Indian Guide",
        "description": "Identify and organize all necessary paperwork for a successful loan settlement. From income proof to hardship letters, we cover every detail.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoans Content Team"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": {
            "@type": "ImageObject",
            "url": "https://settleloans.in/logo/logo.svg"
          }
        },
        "datePublished": "2024-03-18",
        "dateModified": "2024-03-18",
        "mainEntityOfPage": { "@id": "https://settleloans.in/what-documents-are-needed-for-debt-settlement-services#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/what-documents-are-needed-for-debt-settlement-services#product",
        "name": "Debt Settlement Document Assistance",
        "description": "Expert guidance on preparing and organizing documents for the loan settlement process in India.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1250"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Ankit R." },
            "datePublished": "2024-02-15",
            "reviewBody": "Their document checklist saved me. I didn't know a hardship letter was so important. The settlement went through smoothly once we had the right papers.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Meena L." },
            "datePublished": "2024-03-01",
            "reviewBody": "Professional and thorough. They helped me gather my bank notices and income proof, making the bank take my case seriously.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Sanjay V." },
            "datePublished": "2024-03-10",
            "reviewBody": "The documentation support is out of this world. I was organized for the first time in my financial life. Settlement was done in 4 months.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Deepika G." },
            "datePublished": "2024-03-15",
            "reviewBody": "Finally understood what the bank wanted. The hardship proof section was key. Great help from the SettleLoans team.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/what-documents-are-needed-for-debt-settlement-services#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the most important document for debt settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The hardship letter combined with proof of financial distress (like medical bills or termination letters) is the most critical. It proves to the bank that your inability to pay is genuine and not a choice."
            }
          },
          {
            "@type": "Question",
            "name": "Is a PAN card mandatory for loan settlement in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, a PAN card is mandatory for all financial settlements in India, especially for amounts exceeding fifty thousand rupees. It is required for the bank's internal tax and reporting purposes."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need the original loan sanction letter?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While a digital copy or a photocopy is usually sufficient for negotiation, having the original sanction letter helps verify the initial terms, interest rates, and principal amount correctly."
            }
          },
          {
            "@type": "Question",
            "name": "What serves as proof of unemployment for settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A formal termination letter, a resignation acceptance email, or bank statements showing the absence of salary credits for several months are valid proofs of unemployment."
            }
          },
          {
            "@type": "Question",
            "name": "Are medical bills from three years ago valid for current hardship?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Usually, banks look for recent hardship within the last one to two years. However, if an older medical crisis led to massive debt that you are still servicing, those bills can be used to show the origin of the financial trap."
            }
          },
          {
            "@type": "Question",
            "name": "Is an ITR required for self-employed individuals?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, ITR filings for the last two to three years are the primary document for self-employed individuals to show their income trends and business losses to the bank."
            }
          },
          {
            "@type": "Question",
            "name": "What document should I get after paying the settlement amount?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You must obtain a No Dues Certificate (NDC) or a No Objection Certificate (NOC) from the bank. This is the legal proof that the loan is closed and the bank has no further claims."
            }
          },
          {
            "@type": "Question",
            "name": "Can I settle without a salary slip?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If you are unemployed or work in the informal sector, you can use bank statements showing regular or irregular credits as a substitute for salary slips to demonstrate your current cash flow."
            }
          },
          {
            "@type": "Question",
            "name": "What is an OTS letter?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An OTS (One Time Settlement) letter is a formal offer from the bank detailing the final agreed amount, the payment deadline, and the terms of closure. Never pay anything before getting this letter."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to show my monthly expenses document?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, a detailed budget showing your rent, groceries, and school fees helps prove that after essential expenses, you do not have enough surplus to pay the full EMI, which justifies a settlement."
            }
          },
          {
            "@type": "Question",
            "name": "What happened to my documents if the loan was sold to an ARC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "When a loan is sold to an Asset Reconstruction Company, they receive your file from the original bank. However, data gaps are common. You must provide your original loan statements to ensure they don't overcharge you."
            }
          },
          {
            "@type": "Question",
            "name": "Can a legal heir settle the debt of a deceased borrower?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, legal heirs can settle the debt using the death certificate, legal heir certificate, and an affidavit. The settlement is usually limited to the value of assets inherited from the deceased."
            }
          },
          {
            "@type": "Question",
            "name": "What is the 2025 RBI cooling-off period after settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under the 2023-2025 RBI framework, a borrower who settles a loan faces a minimum cooling-off period of 12 months (for non-farm credit) before they can be eligible for a fresh loan from any regulated entity."
            }
          },
          {
            "@type": "Question",
            "name": "Is a digital signature valid on a hardship letter?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While many banks prefer a wet (physical) signature on a printed letter, an e-Aadhaar verified digital signature or a scanned copy of a signed letter is increasingly accepted in digital-first settlement processes."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need my passport copy for an Indian loan settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A passport is only mandatory if you are an NRI or if your Aadhaar/PAN details are currently undergoing updates and you need a primary identity document for the bank's KYC."
            }
          },
          {
            "@type": "Question",
            "name": "What if I lost my original bank sanction letter?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can request a duplicate copy from the bank, usually by paying a small fee. Alternatively, your initial loan account statement often contains the sanction date and core terms which can suffice."
            }
          },
          {
            "@type": "Question",
            "name": "How many months of bank statements are required?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most banks require the last 6 to 12 months of statements. This allows them to verify your income trends, expenditure patterns, and the absence of hidden assets used to maintain a high lifestyle."
            }
          },
          {
            "@type": "Question",
            "name": "Can a power of attorney sign settlement documents?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, a legally registered Power of Attorney (POA) can represent the borrower in negotiations and sign the final OTS acceptance if the borrower is medically unfit or residing abroad."
            }
          },
          {
            "@type": "Question",
            "name": "Does the bank need my credit report for settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The bank already has access to your credit report. However, presenting your own report from CIBIL or Experian helps clarify 'errors' in reporting that might be used to negotiate a better settlement price."
            }
          },
          {
            "@type": "Question",
            "name": "What document proves 'Business Loss'?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A GST cancellation certificate, shop-establishment closure notice, or a certified Net Worth Statement from a Chartered Accountant (CA) serves as credible proof of business failure."
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
              The Ultimate 2025 Checklist
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Essential Documents for <br className="hidden md:block" /> Debt Settlement Services
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
              Organizing your paperwork is the first step to winning the negotiation. Discover every document you need to prove hardship, stop harassment, and secure a legal settlement in India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Get Your Checklist
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
                  What Documents Are Needed for Debt Settlement Services
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">

          {/* Left Column */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <TableOfContents
              items={[
                { id: "intro-documentation", title: "Why Documentation Matters" },
                { id: "rbi-framework-2025", title: "RBI Framework 2025 & Your Rights" },
                { id: "kyc-advanced", title: "Advanced KYC Verification" },
                { id: "loan-specific-deep-dive", title: "Loan Paperwork Deep Dive" },
                { id: "hardship-evidence-categories", title: "Hardship Evidence Categories" },
                { id: "income-and-cashflow", title: "Income & Cashflow Audit" },
                { id: "hardship-letter-vault", title: "Hardship Letter Samples" },
                { id: "bank-interaction-logs", title: "Interaction Logs & Evidence" },
                { id: "arc-nbfc-requirements", title: "ARC & NBFC Special Cases" },
                { id: "nri-and-legal-heirs", title: "NRIs & Deceased Borrowers" },
                { id: "post-settlement-security", title: "Post-Settlement Security" },
                { id: "cibil-restoration-path", title: "CIBIL Restoration Path" },
                { id: "dealing-with-lost-papers", title: "Handling Lost Documents" },
                { id: "success-stories", title: "Real Stories of Freedom" },
                { id: "faqs", title: "Common Questions" }
              ]}
            />
          </aside>

          {/* Middle Column */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">

            <section id="intro-documentation" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Documentation: The Foundation of <span className="text-black">Financial Freedom</span>
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 z-0"></div>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6 font-bold">
                  In the complex ecosystem of Indian banking, documentation is the only currency that buys you leverage.
                </p>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6 font-medium">
                  Many borrowers mistakenly believe that debt settlement is a purely emotional negotiation based on a lender's empathy. This is a dangerous misconception. Banks, Non-Banking Financial Companies (NBFCs), and Fintech lenders are data-driven institutions governed by audit trials, internal compliance committees, and strict Reserve Bank of India (RBI) mandates. They do not 'forgive' debt; they 'compromise' on it based on verifiable evidence of inability to pay.
                </p>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                  A successful loan settlement requires a 'Prosecution-Style' assembly of facts. You are essentially building a legal and financial case that demonstrates your current distress is genuine, involuntary, and irreversible in the short term. The documents you provide are the exhibits in this case. Without them, your request is merely hearsay, and the bank will likely proceed with aggressive recovery actions, including legal notices under Section 138 of the Negotiable Instruments Act or the SARFAESI Act for secured loans.
                </p>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                  At SettleLoans, we have observed that organized documentation can increase the discount percentage on the total outstanding amount by as much as 30% to 50%. When a bank's Nodal Officer sees a professionally indexed file containing medical proof, income loss evidence, and a logical hardship letter, they recognize a borrower who is serious about resolution. This transitions the conversation from 'Why aren't you paying?' to 'What is the maximum we can recover now?'
                </p>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 font-bold text-[#1F5EFF] bg-blue-50 p-4 rounded-xl border-l-4 border-[#1F5EFF]">
                  Remember: The bank manager is an employee who must justify every rupee sacrificed to their auditors. Your documents provide them with the 'paper shield' they need to approve your settlement.
                </p>
              </div>
            </section>

            <section id="rbi-framework-2025" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight uppercase">
                RBI Framework 2025 & Your Documentation Rights
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The regulatory landscape for debt settlement in India changed drastically with the RBI's "Framework for Compromise Settlements and Technical Write-offs" introduced in June 2023, which is the operational bible for 2025. This framework explicitly permits regulated entities (Banks and NBFCs) to enter into compromise settlements with borrowers who have defaulted.
              </p>
              <div className="bg-gray-900 p-8 rounded-[2rem] text-white mb-8 shadow-2xl">
                <h4 className="text-[#1F5EFF] font-black uppercase tracking-widest text-sm mb-4">Regulatory Highlights</h4>
                <ul className="space-y-4 text-sm opacity-90">
                  <li className="flex items-start gap-3">
                    <span className="text-[#1F5EFF] text-xl mt-[-4px]">◈</span>
                    <span><strong>Mandatory Board Policy:</strong> Every bank must have a board-approved policy for settlements. You have the right to ask if your settlement offer fits within these policy parameters.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#1F5EFF] text-xl mt-[-4px]">◈</span>
                    <span><strong>Cooling-Off Period:</strong> Post-settlement, RBI mandates a minimum 12-month cooling-off period before you can get a new loan. Your closing documents (NDC/NOC) must clearly state the date of settlement to track this period.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#1F5EFF] text-xl mt-[-4px]">◈</span>
                    <span><strong>Transparent Valuation:</strong> For secured loans, the bank must document the deterioration in collateral value as part of the settlement file. You should keep records of any property damage or market devaluation.</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg leading-relaxed mb-6 font-bold italic border-l-4 border-[#DEDEDE] pl-6">
                Knowledge of these guidelines is your first document. When you reference RBI/2023-24/40 (the compromise settlement circular) in your communications, the bank knows they are dealing with an informed borrower.
              </p>
            </section>

            <section id="kyc-advanced" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight uppercase">
                1. Advanced KYC Verification: Beyond the Basics
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                In an era of rising digital identity theft, banks verify your KYC multiple times during the settlement lifecycle. A single mismatch in digits or a blurred photo can cause a settlement offer to lapse.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-white border border-[#DEDEDE] rounded-2xl hover:border-[#1F5EFF] transition-colors">
                  <h5 className="font-black text-xs uppercase mb-3 text-gray-400">Identity</h5>
                  <p className="font-bold text-sm">Aadhaar Card (Ensure e-KYC is active) and PAN Card (Verify status on Income Tax portal).</p>
                </div>
                <div className="p-6 bg-white border border-[#DEDEDE] rounded-2xl hover:border-[#1F5EFF] transition-colors">
                  <h5 className="font-black text-xs uppercase mb-3 text-gray-400">Communication</h5>
                  <p className="font-bold text-sm">Valid Mobile Number linked to Aadhaar for OTP based digital settlement letters.</p>
                </div>
                <div className="p-6 bg-white border border-[#DEDEDE] rounded-2xl hover:border-[#1F5EFF] transition-colors">
                  <h5 className="font-black text-xs uppercase mb-3 text-gray-400">Address</h5>
                  <p className="font-bold text-sm">Latest Utility Bill or Rent Agreement. Banks often send physical verification teams before final approval.</p>
                </div>
              </div>
              <div className="bg-yellow-50 border-l-8 border-yellow-400 p-6 rounded-r-2xl mb-8">
                <p className="text-sm font-bold text-yellow-900 leading-relaxed">
                  <strong>PRO-TIP:</strong> If you have changed your address since taking the loan, you must formally update your KYC first. Banks cannot legally settle an account if the current address does not match their internal records or if the KYC is flagged as 'Inactive' by CERSAI.
                </p>
              </div>
            </section>

            <section id="loan-specific-deep-dive" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight uppercase">
                2. Loan Paperwork Deep Dive: The Audit Trail
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                You cannot settle what you haven't audited. Banks often add astronomical 'Penal Interest' and 'Collection Charges' that are not as per the original contract. To fight these, you need the original loan data.
              </p>
              <div className="space-y-4 mb-8">
                <div className="p-6 bg-gray-50 rounded-[1.5rem] border border-gray-100 flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <h5 className="font-black text-lg text-[#2E2E2E]">Sanction Letter & Agreement</h5>
                    <p className="text-xs text-[#1F5EFF] uppercase font-bold mt-1">The Original Contract</p>
                  </div>
                  <div className="md:w-2/3 text-sm leading-relaxed text-gray-600">
                    This document contains the Agreed Interest Rate and the Schedule of Charges. If the bank is charging 4% monthly penal interest but the agreement says 2%, your documentation allows you to demand a recalculation of the outstanding amount.
                  </div>
                </div>
                <div className="p-6 bg-gray-50 rounded-[1.5rem] border border-gray-100 flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <h5 className="font-black text-lg text-[#2E2E2E]">Foreclosure Statement</h5>
                    <p className="text-xs text-[#1F5EFF] uppercase font-bold mt-1">The Current Truth</p>
                  </div>
                  <div className="md:w-2/3 text-sm leading-relaxed text-gray-600">
                    Always ask for a 'Statement of Account' (SOA). It shows the Principal Outstanding versus the Interest and Penal components. Settlements are usually negotiated on the Principal amount plus a small fraction of the interest.
                  </div>
                </div>
                <div className="p-6 bg-gray-50 rounded-[1.5rem] border border-gray-100 flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <h5 className="font-black text-lg text-[#2E2E2E]">Insurance Policies</h5>
                    <p className="text-xs text-[#1F5EFF] uppercase font-bold mt-1">The Hidden Coverage</p>
                  </div>
                  <div className="md:w-2/3 text-sm leading-relaxed text-gray-600">
                    Many personal loans have a 'Credit Shield' or 'Loan Protection Insurance'. If your default is due to an accident or permanent disability, you may not need to 'settle' – the insurance company might be liable to pay the bank. Check your loan kit for insurance certificates.
                  </div>
                </div>
              </div>
            </section>

            <section id="hardship-evidence-categories" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight uppercase">
                3. Hardship Evidence: Categorizing Your Crisis
              </h2>
              <p className="text-lg leading-relaxed mb-6 font-medium">
                The RBI distinguishing between 'Wilful Default' and 'Genuine Hardship'. Your documentation determines which box the bank puts you in.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="p-8 bg-[#1F5EFF]/5 rounded-3xl border border-[#1F5EFF]/10">
                    <div className="w-12 h-12 bg-[#1F5EFF] rounded-full flex items-center justify-center text-white font-black mb-4 shadow-[0_10px_20px_rgba(31,94,255,0.2)]">1</div>
                    <h4 className="text-xl font-black text-[#2E2E2E] mb-2 uppercase tracking-tighter">Medical Emergency</h4>
                    <p className="text-sm opacity-80 leading-relaxed mb-4 font-bold">Documenting Life-Changing Health Events</p>
                    <ul className="text-xs space-y-2 font-medium">
                      <li>• Discharge Summary from a recognized hospital.</li>
                      <li>• Surgery bills and Pharmacy receipts showing recurring costs.</li>
                      <li>• Medical board certificate for permanent/partial disability.</li>
                      <li>• Proof of ongoing chemotherapy, dialysis, or life-long medication.</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-gray-50 rounded-3xl border border-gray-200">
                    <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-black mb-4">2</div>
                    <h4 className="text-xl font-black text-[#2E2E2E] mb-2 uppercase tracking-tighter">Income Disruption</h4>
                    <p className="text-sm opacity-80 leading-relaxed mb-4 font-bold">Proving the Tap or Salary has Dried Up</p>
                    <ul className="text-xs space-y-2 font-medium">
                      <li>• Termination letter (For private sector employees).</li>
                      <li>• Resignation acceptance email due to health/family reasons.</li>
                      <li>• Salary revision letter showing pay cuts (Post-market downturn).</li>
                      <li>• ESI/PF contribution statements showing stoppage of credits.</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="p-8 bg-gray-50 rounded-3xl border border-gray-200">
                    <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-black mb-4">3</div>
                    <h4 className="text-xl font-black text-[#2E2E2E] mb-2 uppercase tracking-tighter">Business Failure</h4>
                    <p className="text-sm opacity-80 leading-relaxed mb-4 font-bold">Documenting the Commercial Collapse</p>
                    <ul className="text-xs space-y-2 font-medium">
                      <li>• GST cancellation or suspension order.</li>
                      <li>• Auditor certified Balance Sheet showing consistent losses.</li>
                      <li>• Shop & Establishment license surrendered or expired.</li>
                      <li>• Evidence of warehouse fire, inventory theft, or natural disaster damage.</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-[#1F5EFF]/5 rounded-3xl border border-[#1F5EFF]/10">
                    <div className="w-12 h-12 bg-[#1F5EFF] rounded-full flex items-center justify-center text-white font-black mb-4 shadow-[0_10px_20px_rgba(31,94,255,0.2)]">4</div>
                    <h4 className="text-xl font-black text-[#2E2E2E] mb-2 uppercase tracking-tighter">Personal Loss</h4>
                    <p className="text-sm opacity-80 leading-relaxed mb-4 font-bold">Managing Debt after a Family Crisis</p>
                    <ul className="text-xs space-y-2 font-medium">
                      <li>• Death Certificate of the primary/co-earning member.</li>
                      <li>• Succession Certificate or Will (to define legal liability).</li>
                      <li>• Divorce decree showing alimony/maintenance obligations.</li>
                      <li>• School fee receipts and basic sustenance expense proof.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="income-and-cashflow" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight uppercase">
                4. Income & Cashflow Audit: Proving the Deficit
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                When you propose a settlement, the bank's internal 'Recovery Committee' will perform a stress test on your finances. If your bank statements show consistent credits of large amounts, your settlement request will be classified as 'Strategic Default' (wilful). You must provide a clear audit trail that shows your outflows (essential survival) exceed or match your inflows.
              </p>
              <div className="bg-white border-2 border-black p-8 rounded-[2rem] mb-8 shadow-[10px_10px_0px_#1F5EFF]">
                <h3 className="text-xl font-black mb-6 uppercase tracking-tight">The Cashflow File: What the bank audits</h3>
                <div className="grid md:grid-cols-2 gap-8 text-sm">
                  <div>
                    <h5 className="font-bold text-[#1F5EFF] mb-2 uppercase">Inflow Records</h5>
                    <ul className="space-y-3 font-medium">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                        12 Months Bank Statements (All accounts)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                        Latest 3 Months Salary Slips (or lack thereof)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                        ITR-V for the last 3 assessment years
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                        Form 26AS to verify TDS and actual income
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-[#1F5EFF] mb-2 uppercase">Outflow Justification</h5>
                    <ul className="space-y-3 font-medium">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                        Rent Receipts or Home Loan EMI proofs
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                        School/College Fee receipts for children
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                        Utility bills (Power, Water, LPG)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                        Insurance premium receipts (Life/Health)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-6 font-bold">
                Why are 12 months specified? Banks look for 'Expenditure Spikes'. If you have spent on luxuries (travel, high-end electronics) in the last few months while skipping EMIs, it damages your credibility. A 12-month statement allows us to show a 'Downward Trend' in your disposable income, which is the strongest argument for a principal waiver.
              </p>
            </section>

            <section id="hardship-letter-vault" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 uppercase text-center border-y-4 border-black py-6">The Hardship Letter Vault</h2>
              <p className="mb-8 text-lg leading-relaxed text-center font-medium max-w-3xl mx-auto">
                The Hardship Letter is the 'Soul' of your file. It bridges the gap between cold numbers and human reality. Below are three professional templates categorized by the type of crisis.
              </p>

              <div className="space-y-12">
                {/* Sample 1: Job Loss */}
                <div className="bg-gray-50 p-8 md:p-12 rounded-[3rem] border border-gray-200 group hover:bg-white hover:shadow-2xl transition-all">
                  <h4 className="text-2xl font-black mb-6 text-[#1F5EFF] flex items-center gap-4">
                    <span className="bg-[#1F5EFF] text-white px-3 py-1 rounded-lg text-sm uppercase">Sample A</span>
                    Unforeseen Unemployment
                  </h4>
                  <div className="font-mono text-sm leading-relaxed text-gray-700 whitespace-pre-wrap border-l-4 border-[#1F5EFF] pl-8 py-4 italic">
                    "Subject: Request for Amicable One-Time Settlement (OTS) - Loan A/C [Number]\n\nRespected Branch Manager,\n\nI am writing this letter to formally request a settlement for my outstanding personal loan dues. Until July 2023, I was a regular payer with a clean track record. However, on August 15, 2023, my current employer [Company Name] downsized its operations, leading to my immediate termination (Proof Attached).\n\nDespite my best efforts, I have not been able to secure a stable income for the last 6 months. Currently, I am surviving on my wife's minimal income and have exhausted all my savings. I genuinely wish to honor my debt but am physically unable to pay the full outstanding balance of ₹[Total Amount].\n\nI have organized a sum of ₹[Settlement Amount] by borrowing from a close relative. This is my final and best offer to close this account permanently. I request you to consider this on humanitarian grounds and issue an OTS letter."
                  </div>
                </div>

                {/* Sample 2: Medical Crisis */}
                <div className="bg-gray-50 p-8 md:p-12 rounded-[3rem] border border-gray-200 group hover:bg-white hover:shadow-2xl transition-all">
                  <h4 className="text-2xl font-black mb-6 text-[#1F5EFF] flex items-center gap-4">
                    <span className="bg-[#1F5EFF] text-white px-3 py-1 rounded-lg text-sm uppercase">Sample B</span>
                    Medical/Health Emergency
                  </h4>
                  <div className="font-mono text-sm leading-relaxed text-gray-700 whitespace-pre-wrap border-l-4 border-[#1F5EFF] pl-8 py-4 italic">
                    "Subject: Hardship Application for Loan Settlement - A/C [Number]\n\nDear Nodal Officer,\n\nThis is to bring to your notice that I am undergoing severe financial distress due to the sudden hospitalization and subsequent surgery of my father in October 2023. The total medical expenditure exceeded ₹12 Lakhs (Bills Attached), for which I had to exhaust my emergency funds and take informal loans at high interest.\n\nMy current cash flow is entirely diverted towards post-operative care and regular EMIs have become an impossible burden. I am committed to closing my debts but need a one-time principal waiver. I offer ₹[Amount] as a full and final settlement. This offer is contingent upon your approval of a No Dues Certificate. I look forward to your positive response."
                  </div>
                </div>

                {/* Sample 3: Business Closure */}
                <div className="bg-gray-50 p-8 md:p-12 rounded-[3rem] border border-gray-200 group hover:bg-white hover:shadow-2xl transition-all">
                  <h4 className="text-2xl font-black mb-6 text-[#1F5EFF] flex items-center gap-4">
                    <span className="bg-[#1F5EFF] text-white px-3 py-1 rounded-lg text-sm uppercase">Sample C</span>
                    Micro-Business Failure
                  </h4>
                  <div className="font-mono text-sm leading-relaxed text-gray-700 whitespace-pre-wrap border-l-4 border-[#1F5EFF] pl-8 py-4 italic">
                    "Subject: Offer for One-Time Settlement for Business Loan - A/C [Number]\n\nTo the Credit Manager,\n\nI am the proprietor of [Business Name]. Due to unprecedented changes in the local market and the cancellation of a major contract in November 2023, my business has ceased operations. I have officially surrendered my GST registration (Certificate Attached).\n\nAs the primary earner, I have no liquid assets remaining to service the full loan amount. I am liquidating a small piece of hereditary land to pay off my creditors. I request you to accept ₹[Amount] as a full settlement for the outstanding balance of ₹[Total Amount]. This is my only available source of funds for debt resolution. Please help me close this chapter so I can start fresh."
                  </div>
                </div>
              </div>
            </section>

            <section id="bank-interaction-logs" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight uppercase">
                5. Interaction Logs: Your Defense Against Harassment
              </h2>
              <p className="text-lg leading-relaxed mb-6 font-bold text-[#1F5EFF]">
                If a bank's agent misbehaves, it becomes a documentation asset for your settlement.
              </p>
              <div className="space-y-4 mb-8">
                <p className="text-lg leading-relaxed mb-4 leading-relaxed">
                  Under the RBI's Fair Practice Code and the BCSBI (Banking Codes and Standards Board of India), recovery agents must maintain a high standard of conduct. If they call you at odd hours, use abusive language, or contact your social circle, they are in violation of the law. Documenting these violations provides powerful leverage during settlement negotiations.
                </p>
                <div className="bg-blue-900 border-l-8 border-[#1F5EFF] p-10 rounded-3xl text-white">
                  <h4 className="text-xl font-bold mb-6 text-[#1F5EFF] uppercase underline decoration-2 underline-offset-8">The Evidence Logbook</h4>
                  <div className="grid md:grid-cols-2 gap-8 text-sm opacity-80">
                    <ul className="space-y-4 font-black italic">
                      <li>• Screenshots of Call History (Frequency of calls).</li>
                      <li>• Audio Recordings (Proof of threats or abusive tone).</li>
                      <li>• SMS/WhatsApp Message Trails from anonymous numbers.</li>
                    </ul>
                    <ul className="space-y-4 font-black italic">
                      <li>• Names and Employee IDs of agents (if provided).</li>
                      <li>• Emails sent to the Bank's Grievance Redressal Officer.</li>
                      <li>• Complaints filed at the Banking Ombudsman (CMS Portal).</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="arc-nbfc-requirements" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight uppercase">
                6. ARC & NBFC Special Cases: Different Rules
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                If your loan has been sold to an Asset Reconstruction Company (like IARC, Phoenix, or Kotak Mahindra Prime), the documentation requirement changes slightly. ARCs are 'Distressed Debt Buyers'. They buy your loan from the bank at a deep discount, which means they have more room to negotiate with you.
              </p>
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200 mb-8">
                <h4 className="text-xl font-black mb-4">The ARC Document Checklist</h4>
                <div className="space-y-4 text-sm font-medium">
                  <p><strong>Assignment Notice:</strong> You must have the official letter from the bank stating that your loan has been 'Assigned' to the ARC. Without this, you cannot be sure who you are paying.</p>
                  <p><strong>Original Bank Data:</strong> Often, ARCs do not have your original sanction letter. If you have it, you can use it to challenge incorrect principal calculations. If they cannot prove the debt amount, they cannot legally enforce it in a court of law.</p>
                  <p><strong>Offer Validity Period:</strong> ARC settlement offers (OTS) are often very short-lived (7-15 days). Ensure your settlement letter has a clear 'Offer Expiry Date'.</p>
                </div>
              </div>
            </section>

            <section id="nri-and-legal-heirs" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight uppercase">
                7. Special Borrowers: NRIs & Deceased Cases
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="p-8 bg-white border border-[#DEDEDE] rounded-3xl">
                  <h4 className="font-black text-[#1F5EFF] mb-4 uppercase">NRIs Settling Debt</h4>
                  <p className="text-sm leading-relaxed mb-4">NRIs face challenges with physical presence. To settle an Indian debt from abroad, you need:</p>
                  <ul className="text-xs space-y-2 font-bold opacity-70">
                    <li>• Registered Power of Attorney (POA) in India.</li>
                    <li>• Passport & Visa copies (to prove non-resident status).</li>
                    <li>• NRE/NRO Bank statements showing funds for settlement.</li>
                  </ul>
                </div>
                <div className="p-8 bg-white border border-[#DEDEDE] rounded-3xl">
                  <h4 className="font-black text-[#1F5EFF] mb-4 uppercase">Settlements by Legal Heirs</h4>
                  <p className="text-sm leading-relaxed mb-4">If the primary borrower is deceased, the legal heirs are not personally liable beyond the assets inherited. Documents needed:</p>
                  <ul className="text-xs space-y-2 font-bold opacity-70">
                    <li>• Original Death Certificate.</li>
                    <li>• Legal Heir or Succession Certificate from the Court/Tahsil.</li>
                    <li>• Affidavit from heirs denying further liability.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="post-settlement-security" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight uppercase">
                8. Post-Settlement Security: The Finality Checklist
              </h2>
              <p className="text-lg leading-relaxed mb-6 font-bold text-center italic border-y-2 border-gray-100 py-4">
                "Payment is only 50% of the process. The other 50% is getting the legal proof of closure."
              </p>
              <div className="bg-[#2E2E2E] p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group mb-8">
                <div className="absolute top-0 right-0 w-32 h-64 bg-[#1F5EFF] rotate-45 -mr-16 -mt-16 opacity-10"></div>
                <h4 className="text-2xl font-black mb-8 text-[#1F5EFF] uppercase tracking-widest">The "Peace of Mind" Document Kit</h4>
                <div className="grid md:grid-cols-3 gap-8 text-sm">
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-[#1F5EFF] rounded-full flex items-center justify-center font-black">A</div>
                    <h5 className="font-bold underline decoration-[#1F5EFF]">The OTS Letter</h5>
                    <p className="opacity-70 text-xs">Must include: Account Number, Final Amount, Payment Date, and 'Account will be closed' clause.</p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-[#1F5EFF] rounded-full flex items-center justify-center font-black">B</div>
                    <h5 className="font-bold underline decoration-[#1F5EFF]">The Transaction Proof</h5>
                    <p className="opacity-70 text-xs">A stamped deposit slip or a transaction screenshot for the *exact* amount mentioned in the OTS letter.</p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-[#1F5EFF] rounded-full flex items-center justify-center font-black">C</div>
                    <h5 className="font-bold underline decoration-[#1F5EFF]">The NDC/NOC</h5>
                    <p className="opacity-70 text-xs">The 'No Dues Certificate'. Ensure it says 'The bank has no further claims on the borrower or co-borrower'.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="cibil-restoration-path" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight text-center uppercase border-b-8 border-[#1F5EFF] pb-6 inline-block">The Road to CIBIL Restoration</h2>
              <p className="text-lg leading-relaxed mb-8">
                A common misconception is that a settlement 'destroys' your credit forever. While a settlement is reported as 'Settled' (which is less favorable than 'Closed'), it is the first step toward rehabilitation. To ensure your CIBIL report is updated correctly, you must keep your documentation ready for at least 7 years.
              </p>
              <div className="bg-white p-10 rounded-[4rem] border-4 border-black mb-12 relative">
                <div className="absolute -top-6 left-10 bg-black text-white px-6 py-2 rounded-full font-black text-sm uppercase">Verification Timeline</div>
                <div className="space-y-8">
                   <div className="flex gap-6">
                      <div className="font-black text-4xl text-[#1F5EFF]">01</div>
                      <div>
                         <h5 className="font-black text-xl mb-1 uppercase">Payment + 45 Days</h5>
                         <p className="text-sm opacity-70">Download your fresh CIBIL report. Check the status under 'Account Information'. It should change from 'Default' to 'Settled'.</p>
                      </div>
                   </div>
                   <div className="flex gap-6">
                      <div className="font-black text-4xl text-gray-300">02</div>
                      <div>
                         <h5 className="font-black text-xl mb-1 uppercase">Dispute Resolution</h5>
                         <p className="text-sm opacity-70">If the status still shows 'Default', use your NDC/NOC to file a 'Credit Dispute' on the CIBIL website. The bank is legally required to respond within 30 days.</p>
                      </div>
                   </div>
                   <div className="flex gap-6">
                      <div className="font-black text-4xl text-gray-300">03</div>
                      <div>
                         <h5 className="font-black text-xl mb-1 uppercase">Credit Rebuilding</h5>
                         <p className="text-sm opacity-70">Use the NDC as a supporting document to apply for a 'Secured Credit Card' (against an FD) to start building fresh positive history.</p>
                      </div>
                   </div>
                </div>
              </div>
            </section>

            <section id="dealing-with-lost-papers" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight uppercase">
                Handling Lost Documents: Forensic Retrieval
              </h2>
              <p className="text-lg leading-relaxed mb-6 font-medium">
                "I don't have my papers anymore" is the most common reason people avoid settlement. It shouldn't be.
              </p>
              <p className="text-lg leading-relaxed mb-6 leading-relaxed">
                 Under the <strong>Charter of Customer Rights (RBI)</strong>, you have a Right to Transparency. Banks are obligated to provide copies of sanctioned letters and accounts statements within 4 to 7 working days of a request.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                 <div className="bg-[#1F5EFF] p-8 rounded-3xl text-white">
                    <h5 className="font-black mb-4 uppercase">How to Retrieve</h5>
                    <ul className="text-xs space-y-3 font-bold">
                       <li>• Use the 'Net Banking' archive to download past 1 year of statements.</li>
                       <li>• Visit the branch and submit a physical request with your ID.</li>
                       <li>• Check your 'Spam' or 'Archive' emails for 'Sanction' or 'Welcome'.</li>
                       <li>• If the bank refuses, quote the Banking Ombudsman guidelines.</li>
                    </ul>
                 </div>
                 <div className="bg-gray-900 p-8 rounded-3xl text-white">
                    <h5 className="font-black mb-4 uppercase text-[#1F5EFF]">What if they claim data lost?</h5>
                    <p className="text-xs leading-relaxed font-medium opacity-80">
                       If the bank/lender claims your records were lost during a merger or system migration, you hold the legal upper hand. Without the original sanction/default data, they cannot prove the debt in a civil court. We help our clients use this 'Missing Data' as leverage to secure massive 70-80% discounts.
                    </p>
                 </div>
              </div>
            </section>

             <section id="success-stories" className="scroll-mt-32 mb-12">
               <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center uppercase tracking-widest bg-gray-50 py-10 rounded-3xl border border-gray-100 font-satoshi">Real Stories of Freedom</h2>
               <div className="grid md:grid-cols-2 gap-8 not-prose">
                 {[
                   {
                     name: "Ankit R.",
                     loc: "Mumbai",
                     type: "Consolidation Triumph",
                     desc: "Their document checklist saved me. I didn't know a hardship letter was so important. I had lost my sanction letter, but they helped me retrieve it from the bank's portal. The settlement went through smoothly once we had the right papers. My debt of 12 lakhs was settled for 4.2 lakhs.",
                     tag: "Documentation Success",
                     outcome: "Settled for 65% Less"
                   },
                   {
                     name: "Meena L.",
                     loc: "Delhi",
                     type: "Medical Crisis Relief",
                     desc: "Professional and thorough. They helped me gather my hospital bills and income proof, making the bank take my case seriously. I was being harassed by six different apps. With the right documentation of their harassment, SettleLoans stopped everything in a week. I am finally at peace.",
                     tag: "Harassment Stopped",
                     outcome: "100% Peace Restored"
                   },
                   {
                     name: "Sanjay V.",
                     loc: "Bangalore",
                     type: "Strategy Success",
                     desc: "The documentation support is out of this world. I was organized for the first time in my financial life. We built a file that showed my business loss so clearly that the bank manager had no choice but to approve the OTS. Settlement was done in 4 months and I have my NDC now.",
                     tag: "Strategic Planning",
                     outcome: "Clear NDC Received"
                   },
                   {
                     name: "Deepika G.",
                     loc: "Hyderabad",
                     type: "Credit Card Kill",
                     desc: "Finally understood what the bank wanted. The hardship proof section was key. I was paying 40% interest on my credit cards. SettleLoans showed me how to document my salary cut. We settled the total card outstanding for just 30% of the total amount. Best decision ever.",
                     tag: "Interest Waiver",
                     outcome: "70% Principal Saved"
                   }
                 ].map((item, i) => (
                   <div key={i} className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#1F5EFF] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                     <div className="flex items-center mb-4">
                       <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 mr-3">
                         {item.name.charAt(0)}
                       </div>
                       <div>
                         <h5 className="font-bold text-[#2E2E2E]">{item.name}</h5>
                         <p className="text-xs text-gray-400">{item.loc}</p>
                       </div>
                       <div className="ml-auto text-yellow-400 text-sm">★★★★★</div>
                     </div>
                     <div className="mb-4 text-xs font-mono bg-green-50 p-2 rounded border border-green-100 uppercase tracking-tighter">
                       <span className="block text-green-700 font-bold">{item.type}: {item.outcome}</span>
                     </div>
                     <p className="text-sm text-gray-600 italic leading-relaxed">"{item.desc}"</p>
                   </div>
                 ))}
               </div>
             </section>

            <section id="faqs" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 uppercase tracking-widest text-[#1F5EFF]">Document Requirements FAQ</h2>
              <div className="space-y-6 not-prose">
                {jsonLd["@graph"]?.[4] && "mainEntity" in jsonLd["@graph"][4] && (jsonLd["@graph"][4] as any).mainEntity.map((faq: any, i: number) => (
                  <details key={i} className="group bg-white border border-[#DEDEDE] rounded-2xl overflow-hidden hover:shadow-xl transition-all border-b-8 border-b-[#1F5EFF]/10">
                    <summary className="flex justify-between items-center p-6 cursor-pointer font-black text-[#2E2E2E] list-none bg-gray-50/50 group-open:bg-white transition-colors">
                      <span className="text-xl leading-tight">{i + 1}. {faq.name}</span>
                      <span className="transition-transform duration-500 group-open:rotate-180 p-2 bg-[#1F5EFF] text-white rounded-full flex items-center justify-center">
                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 9l-7 7-7 7"></path></svg>
                      </span>
                    </summary>
                    <div className="px-8 pb-8 text-[#2E2E2E] font-bold opacity-90 leading-relaxed border-t border-[#DEDEDE]/50 pt-6 mt-0 bg-white shadow-inner">
                      {faq.acceptedAnswer.text}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <div className="mt-16 pt-8 border-t-2 border-dashed border-gray-200">
              <div className="flex flex-col md:flex-row items-center gap-10 p-10 bg-[#2E2E2E] rounded-[40px] border border-white/10 shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-[#1F5EFF] opacity-5 rounded-full -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-1000"></div>
                <div className="flex-1 text-center md:text-left relative z-10">
                  <h3 className="text-3xl font-black text-white mb-4">Start your document file today.</h3>
                  <p className="text-[#DEDEDE] font-bold italic text-lg opacity-80 leading-relaxed">Don't wait for a legal notice to get organized. Our experts can review your documents and tell you exactly what's missing for a successful settlement.</p>
                </div>
                <Link href="/contact" className="bg-[#1F5EFF] text-white font-black py-5 px-12 rounded-2xl hover:scale-110 transition-all shadow-[0_20px_50px_rgba(31,94,255,0.3)] text-xl relative z-10 border-b-4 border-white/20">
                  Audit My Documents
                </Link>
              </div>
            </div>

            {/* Mobile Sidebar */}
            <div className="lg:hidden mt-8 space-y-8">
              <div className="bg-[#2E2E2E] rounded-3xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                <div className="bg-[#1F5EFF] p-8 text-center text-white">
                  <h3 className="text-3xl font-black mb-4 uppercase tracking-[0.1em]">Ready to Settle?</h3>
                  <p className="opacity-90 text-sm font-black leading-relaxed">Let us handle the paperwork while you focus on rebuilding your life. One file is all it takes to start.</p>
                </div>
                <div className="p-10 text-center text-[#DEDEDE]">
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-5 px-8 rounded-2xl hover:scale-105 transition-all shadow-lg text-lg border-b-4 border-black/20">
                    Talk to a Consultant
                  </Link>
                </div>
              </div>
            </div>

          </article>


          {/* Right Column: CTA & Related Pages */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <div className="sticky top-24 space-y-8">
              <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                <div className="bg-[#1F5EFF] p-4 text-center">
                  <h3 className="text-lg font-black text-white">We are in This Together</h3>
                </div>
                <div className="p-6 text-center">
                  <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                    Whether you are missing papers or have everything ready, we ensure your file is bank-compliant for the best possible deal.
                  </p>
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg">
                    Start Your File
                  </Link>
                  <p className="mt-4 text-xs text-[#DEDEDE]/60 uppercase tracking-widest font-black">100% Secure</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2">Related Guides</h3>
                <ul className="space-y-4 text-sm font-bold">
                  <li>
                    <Link href="/loan-settlement-process-in-india" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      Standard Process
                    </Link>
                  </li>
                  <li>
                    <Link href="/debt-settlement-vs-debt-consolidation" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      Settlement vs Consolidation
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-are-the-consumer-protection-laws-related-to-debt-settlement-in-india" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      Consumer Rights
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
