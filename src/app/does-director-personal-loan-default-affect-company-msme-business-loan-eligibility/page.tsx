import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Does a Director's Personal Loan Default Affect Their Company's MSME Loan Eligibility?",
  description: "Learn how a single director's personal loan default can impact a Private Limited Company's MSME loan and working capital eligibility, despite the separate legal entity rule.",
  alternates: {
    canonical: "https://settleloans.in/does-director-personal-loan-default-affect-company-msme-business-loan-eligibility",
  },
};

export default function DirectorDefaultImpactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/does-director-personal-loan-default-affect-company-msme-business-loan-eligibility#webpage",
        "url": "https://settleloans.in/does-director-personal-loan-default-affect-company-msme-business-loan-eligibility",
        "name": "Does a Director's Personal Loan Default Affect Their Company's MSME Loan Eligibility?",
        "description": "Learn how a single director's personal loan default can impact a Private Limited Company's MSME loan and working capital eligibility, despite the separate legal entity rule.",
        "breadcrumb": { "@id": "https://settleloans.in/does-director-personal-loan-default-affect-company-msme-business-loan-eligibility#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/does-director-personal-loan-default-affect-company-msme-business-loan-eligibility#breadcrumb",
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
            "name": "Business Loan Resources",
            "item": "https://settleloans.in/business-loans"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Director Default Impact",
            "item": "https://settleloans.in/does-director-personal-loan-default-affect-company-msme-business-loan-eligibility"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/does-director-personal-loan-default-affect-company-msme-business-loan-eligibility#article",
        "headline": "Does a Director's Personal Loan Default Affect Their Company's MSME Loan Eligibility?",
        "description": "A crucial guide for business owners and startup founders explaining how banks evaluate commercial risk when a director defaults on a personal loan.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoans Research Team"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": {
            "@type": "ImageObject",
            "url": "https://settleloans.in/logo/logo.svg"
          }
        },
        "datePublished": "2024-03-22",
        "dateModified": "2024-03-22",
        "mainEntityOfPage": { "@id": "https://settleloans.in/does-director-personal-loan-default-affect-company-msme-business-loan-eligibility#webpage" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/does-director-personal-loan-default-affect-company-msme-business-loan-eligibility#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can a private limited company get a loan if one director is a defaulter?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Generally, no. Even though a private limited company is a separate legal entity, banks pull the personal CIBIL scores of all active directors. A default by any key director usually leads to automatic rejection of MSME or working capital loans."
            }
          },
          {
            "@type": "Question",
            "name": "Does a director's personal CIBIL score impact the company's credit rating?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. A director's personal credit history heavily influences the bank's assessment of the company's management risk, which directly impacts the company's ability to secure commercial credit lines."
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
              Business Credit Guidelines
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Director's Personal Loan Default: <br className="hidden md:block" /> Impact on <span className="text-[#1F5EFF]">MSME Loans</span>
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
              A crucial guide for business owners and startup founders on how a single director's personal default can completely paralyze a company's commercial credit lines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Resolve Your Director's CIBIL Issue
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
                <li><Link href="/business-loans" className="hover:text-[#1F5EFF] transition-colors">Business Loans</Link></li>
                <li><span className="text-gray-300">/</span></li>
                <li className="font-bold text-[#2E2E2E]">Director Default Impact</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative text-[var(--color-text-body)]">

          {/* Left Column: TOC */}
          <aside className="hidden lg:block w-1/4 relative">
            <div className="sticky top-24">
              <TableOfContents
                items={[
                  { id: "introduction", title: "The Reality of Commercial Risk" },
                  { id: "separate-entity-myth", title: "The 'Separate Legal Entity' Myth" },
                  { id: "why-banks-scrutinize", title: "Why Banks Scrutinize Directors" },
                  { id: "ccr-anatomy", title: "Anatomy of a CIBIL Commercial Report" },
                  { id: "types-of-defaults", title: "Defaults that Trigger Red Flags" },
                  { id: "co-director-impact", title: "Collateral Damage on Co-Directors" },
                  { id: "chain-reaction", title: "The Rejection Chain Reaction" },
                  { id: "legal-nuances", title: "Companies Act vs. RBI Directives" },
                  { id: "blacklist-risk", title: "The Complete Blacklist Risk" },
                  { id: "alternative-financing", title: "Short-Term Alternative Financing" },
                  { id: "preventative-structures", title: "Preventative Board Structures" },
                  { id: "how-to-restore", title: "Restoring Creditworthiness" },
                  { id: "success-stories", title: "Client Success Stories" },
                  { id: "faqs", title: "Frequently Asked Questions" }
                ]}
              />
            </div>
          </aside>

          {/* Middle Column: Content */}
          <article className="w-full lg:w-2/4 flex-1 max-w-none">

            <section id="introduction" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                The Reality of <span className="text-[#1F5EFF]">Commercial Risk</span>
              </h2>
              <div className="prose prose-lg max-w-none text-[var(--color-text-body)]">
                <p className="mb-6 leading-relaxed font-normal">
                  Many business owners and startup founders operate under a critical misconception. They believe that because their startup is registered as a Private Limited Company, their personal financial history is completely disconnected from the company's financial future.
                </p>
                <p className="mb-6 leading-relaxed">
                  Unfortunately, this is not how commercial banking works. When a business applies for an MSME loan, working capital, or a letter of credit, banks don't just look at the company's balance sheet—they aggressively scrutinize the individuals running the show. A personal loan default by a single director can abruptly halt the entire company's growth.
                </p>
                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 my-10">
                  <h3 className="text-xl font-bold text-blue-900 mb-4 italic">The 'Separate Legal Entity' Myth</h3>
                  <p className="text-blue-800 text-sm leading-6">
                    Legally speaking, a Private Limited Company is indeed a separate legal entity. However, from a bank's risk assessment perspective, a company is operated by its directors. If a director demonstrates poor financial discipline in their personal life by defaulting on a personal loan or credit card, the bank assumes they will exhibit the same negligence when managing the company's funds. 
                  </p>
                </div>
              </div>
            </section>

            <section id="why-banks-scrutinize" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Why Banks Scrutinize Director CIBIL Scores
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                When processing any commercial loan, the credit manager must verify the "Character" of the management team—one of the traditional 5 Cs of credit. The director CIBIL score impact on a private limited company is absolute.
              </p>
              <div className="space-y-8 my-10">
                <div className="p-8 bg-white border border-[#DEDEDE] rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-2xl font-black text-[#1F5EFF] mb-4 underline">1. Management Integrity Risk</h3>
                  <p className="mb-4 text-[var(--color-text-body)]">
                    Banks view a personal default as a red flag for poor financial management, directly translating that risk to how the business will be run. If a director cannot manage their personal liabilities, commercial underwriters will instantly doubt their ability to manage a multi-crore working capital limit.
                  </p>
                </div>

                <div className="p-8 bg-white border border-[#DEDEDE] rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-2xl font-black text-[#2E2E2E] mb-4 italic">2. Guarantor Requirements</h3>
                  <p className="mb-4 text-[var(--color-text-body)]">
                    Almost all MSME and working capital loans require the directors to sign as personal guarantors. A defaulter cannot be a valid guarantor. The moment their PAN is flagged in the CIBIL system, their guarantee becomes legally and financially worthless to the lending institution.
                  </p>
                </div>

                <div className="p-8 bg-white border border-[#DEDEDE] rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-2xl font-black text-[#2E2E2E] mb-4">3. Co-Mingling of Funds & RBI Directives</h3>
                  <p className="mb-4 text-[var(--color-text-body)]">
                    Banks fear that a desperate director might illegally siphon business loan funds to pay off aggressive personal loan recovery agents. Furthermore, under strict RBI guidelines, lending to entities managed by willful defaulters or individuals with severely impaired credit is highly restricted.
                  </p>
                </div>
              </div>
            </section>

            <section id="ccr-anatomy" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Anatomy of a <span className="text-[#1F5EFF]">CIBIL Commercial Report (CCR)</span>
              </h2>
              <div className="prose prose-lg max-w-none text-[var(--color-text-body)]">
                <p className="mb-6 leading-relaxed">
                  To understand why a personal default matters, you must understand how a company's credit report is generated. Unlike retail CIBIL, which ranks individuals from 300 to 900, the CIBIL Commercial Report (CCR) assigns a CIBIL Rank (CMR) to MSMEs on a scale of 1 to 10, where CMR-1 is the best and CMR-10 is the worst.
                </p>
                <p className="mb-6 leading-relaxed">
                  The algorithm behind the CMR heavily weights the background of the promoters. When a bank pulls a CCR, the system dynamically queries the retail CIBIL database for the PAN cards of all active directors listed on the MCA (Ministry of Corporate Affairs) master data. The data is merged. If a director's retail CIBIL shows a default, 'Written Off', or 'Settled' status, the algorithm imposes a severe penalty on the company's CMR.
                </p>
                <div className="bg-gray-50 p-8 rounded-2xl border border-[#DEDEDE] my-10">
                  <h3 className="text-xl font-bold text-[#2E2E2E] mb-4 underline">The Silent Linkage</h3>
                  <p className="text-sm leading-6">
                    Many founders are unaware that simply being appointed as an Additional Director on the board of a startup instantly links their personal financial history to the startup's commercial credit profile. There is no opting out of this linkage; it is a fundamental architectural rule of India's credit bureau framework.
                  </p>
                </div>
              </div>
            </section>

            <section id="types-of-defaults" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Types of Defaults that Trigger Red Flags
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Not all credit blips are treated equally by commercial lenders. Banks categorize personal delinquencies into different risk buckets before deciding whether to reject an MSME loan.
              </p>
              <div className="grid md:grid-cols-2 gap-8 my-10">
                <div className="bg-white p-8 rounded-2xl border border-[#DEDEDE] shadow-sm">
                  <h3 className="text-2xl font-black text-[#2E2E2E] mb-4">SMA-1 and SMA-2 Delays</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Special Mention Accounts (SMA) indicate a delay in payment before an account officially becomes a Non-Performing Asset (NPA). An SMA-1 (31-60 days late) or SMA-2 (61-90 days late) by a director might not trigger an automatic rejection. However, the commercial underwriter will demand a written explanation and proof that the dues have been cleared.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-[#DEDEDE] shadow-sm">
                  <h3 className="text-2xl font-black text-[#2E2E2E] mb-4">Unsecured Loan Defaults</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Defaults on unsecured personal loans and credit cards are viewed with extreme prejudice. Since these loans require no collateral, a default indicates a pure failure of character and financial discipline. This is a massive red flag for any MSME loan application.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-[#DEDEDE] shadow-sm md:col-span-2">
                  <h3 className="text-2xl font-black text-red-600 mb-4">Willful Defaulter Status</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If a director is classified as a 'Willful Defaulter' (someone who has the capacity to pay but intentionally refuses), the door to commercial credit is permanently slammed shut. No bank or NBFC is permitted to lend to a company with a willful defaulter on its board.
                  </p>
                </div>
              </div>
            </section>

            <section id="co-director-impact" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Collateral Damage: <span className="text-[#1F5EFF]">Impact on Co-Directors</span>
              </h2>
              <div className="prose prose-lg max-w-none text-[var(--color-text-body)]">
                <p className="mb-6 leading-relaxed">
                  A business partnership relies heavily on trust, but a personal loan default introduces toxic friction into the boardroom. When an MSME loan is rejected due to one director's default, the financial burden cascades onto the co-directors.
                </p>
                <p className="mb-6 leading-relaxed">
                  Co-directors are often forced to infuse personal funds into the business to keep operations running when the working capital limits are frozen. This creates severe resentment and often leads to bitter boardroom disputes. Furthermore, if the co-directors had co-signed any previous credit facilities, the default of one member can trigger cross-default clauses, putting the personal assets of the healthy directors at risk.
                </p>
                <p className="mb-6 leading-relaxed font-bold italic">
                  Legally, while co-directors are not responsible for the personal debts of the defaulter, their equity in the business becomes illiquid and endangered because the company can no longer secure external financing to grow or survive.
                </p>
              </div>
            </section>

            <section id="chain-reaction" className="scroll-mt-32 mb-16 overflow-x-auto">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight text-center">
                The Rejection <span className="text-[#1F5EFF]">Chain Reaction</span>
              </h2>
              <div className="min-w-[800px]">
                <table className="w-full border-collapse bg-white shadow-xl rounded-2xl overflow-hidden border border-[#DEDEDE]">
                  <thead>
                    <tr className="bg-[#2E2E2E] text-white text-left font-black tracking-wider uppercase text-xs">
                      <th className="p-6">Stage</th>
                      <th className="p-6">Action Triggered</th>
                      <th className="p-6">Immediate Impact</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-[#DEDEDE] hover:bg-gray-50 transition-colors">
                      <td className="p-6 font-bold bg-gray-50/50">1. Application Phase</td>
                      <td className="p-6 text-[#1F5EFF] font-black italic">Systematic PAN Pull</td>
                      <td className="p-6 leading-relaxed">Automatic block by the bank's core system before a human underwriter reviews the business plan.</td>
                    </tr>
                    <tr className="border-b border-[#DEDEDE] hover:bg-gray-50 transition-colors">
                      <td className="p-6 font-bold bg-gray-50/50">2. Annual Review</td>
                      <td className="p-6 text-red-600 font-bold">Limit Freezing</td>
                      <td className="p-6 leading-relaxed">Existing Overdraft (OD) or Cash Credit (CC) limits are frozen or denied renewal.</td>
                    </tr>
                    <tr className="border-b border-[#DEDEDE] hover:bg-gray-50 transition-colors">
                      <td className="p-6 font-bold bg-gray-50/50">3. Tender/Contracting</td>
                      <td className="p-6 italic font-medium">Vendor Disqualification</td>
                      <td className="p-6 leading-relaxed">Loss of PSU contracts or government tenders that require debt-compliant status.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="legal-nuances" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Legal Nuances: <span className="text-[#1F5EFF]">Companies Act vs. RBI Directives</span>
              </h2>
              <div className="prose prose-lg max-w-none text-[var(--color-text-body)]">
                <p className="mb-6 leading-relaxed">
                  Founders often argue with loan managers by citing the Companies Act, 2013, which enshrines the principle of the "Corporate Veil." This legal doctrine states that a company is an artificial legal person distinct from its shareholders and directors.
                </p>
                <p className="mb-6 leading-relaxed">
                  However, banking in India is governed by the Banking Regulation Act, 1949, and strict directives issued by the Reserve Bank of India (RBI). In the context of credit risk evaluation, the RBI effectively mandates banks to 'pierce the corporate veil.' 
                </p>
                <p className="mb-6 leading-relaxed">
                  Banks are instructed to trace the ultimate beneficial owners and key managerial personnel (KMP). If the KMP exhibits poor credit behavior, the RBI directives override the protections of the Companies Act when it comes to granting credit. You cannot use corporate law to force a bank to ignore banking regulations.
                </p>
              </div>
            </section>

            <section id="blacklist-risk" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                The Complete Blacklist Risk: <span className="text-black">RBI's Cross-Pollination Rule</span>
              </h2>
              <div className="grid md:grid-cols-1 gap-10 my-12">
                <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
                  <h4 className="text-xl font-bold mb-4 text-red-900 leading-tight italic underline">Warning: Systemic Contagion</h4>
                  <p className="text-sm leading-6 mb-6 text-red-900/80 font-medium">
                    If a director is classified as a "Willful Defaulter" by any bank, RBI guidelines dictate that <strong>no additional facilities should be granted by any bank/FI to any company where such a person is a director</strong>. This means one director's personal mistake can completely blacklist multiple, otherwise healthy, companies.
                  </p>
                  <ul className="text-sm space-y-4 text-red-900/80 font-medium list-none">
                    <li className="flex items-start gap-3 italic"><span className="flex-shrink-0 w-5 h-5 bg-red-200 rounded-full flex items-center justify-center text-red-700 text-xs font-black">✕</span> The ban extends to all companies sharing the same director.</li>
                    <li className="flex items-start gap-3 font-black"><span className="flex-shrink-0 w-5 h-5 bg-red-200 rounded-full flex items-center justify-center text-red-700 text-xs font-black">✕</span> Pre-approved limits are subject to immediate recall.</li>
                    <li className="flex items-start gap-3 italic"><span className="flex-shrink-0 w-5 h-5 bg-red-200 rounded-full flex items-center justify-center text-red-700 text-xs font-black">✕</span> Competitors gain an edge while your working capital is choked.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="alternative-financing" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Short-Term Alternative Financing Options
              </h2>
              <div className="prose prose-lg max-w-none text-[var(--color-text-body)]">
                <p className="mb-6 leading-relaxed">
                  Fixing a director's CIBIL issue or restructuring the board takes time. Meanwhile, the business needs cash. Traditional banks will block you, but alternative financing platforms operate on different risk models.
                </p>
                <ul className="mb-6 space-y-4 list-none pl-0">
                  <li className="flex items-start">
                    <span className="text-[#1F5EFF] mr-3 font-black">»</span>
                    <span><strong>Invoice Discounting:</strong> Platforms like KredX or Invoicemart evaluate the creditworthiness of your <em>client</em> (e.g., if you supply to a large blue-chip company), not just your board. If your client is strong, you can raise cash against unpaid invoices regardless of the director's CIBIL.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1F5EFF] mr-3 font-black">»</span>
                    <span><strong>Revenue-Based Financing (RBF):</strong> Digital lenders like Klub or Velocity plug into your payment gateway or GST returns. They lend based purely on your monthly recurring revenue and cash flow momentum, often bypassing deep CIBIL checks on individual directors.</span>
                  </li>
                </ul>
                <p className="mb-6 leading-relaxed italic text-gray-500">
                  Note: These alternatives are significantly more expensive than traditional bank loans (often costing 15-24% annualized) and should only be used as a short-term bridge while resolving the CIBIL issue.
                </p>
              </div>
            </section>

            <section id="preventative-structures" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Preventative Board Structures for Startups
              </h2>
              <div className="prose prose-lg max-w-none text-[var(--color-text-body)]">
                <p className="mb-6 leading-relaxed">
                  Prevention is vastly cheaper than the cure. Modern startups should design their board structures to insulate the company from personal credit shocks.
                </p>
                <p className="mb-6 leading-relaxed">
                  First, perform a rigorous CIBIL audit of any incoming co-founder before formally adding them as a director to the MCA database. If a co-founder has a distressed credit history, they should remain a shareholder and an employee (e.g., VP of Product) but should <strong>not</strong> be appointed to the Board of Directors.
                </p>
                <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100 my-10">
                  <h3 className="text-xl font-bold text-emerald-900 mb-4 underline">Annual CIBIL Declarations</h3>
                  <p className="text-sm leading-6 text-emerald-800">
                    Forward-thinking boards now include clauses in their Shareholder Agreements (SHA) requiring all directors to submit their personal CIBIL reports annually. If a director's score drops below 700 due to defaults, the SHA can mandate their temporary resignation from the board until the issue is resolved, protecting the company's MSME loan eligibility.
                  </p>
                </div>
              </div>
            </section>

            <section id="how-to-restore" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                How to Restore the Company's Creditworthiness
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                If your company's MSME loan is stuck due to a director's default, you must act quickly to remove the block. There are only two viable legal paths forward.
              </p>
              <div className="prose prose-lg max-w-none text-[var(--color-text-body)]">
                <h3 className="text-2xl font-black mt-10 mb-6 text-[#2E2E2E]">Action Plan 1: Settle the Personal Default</h3>
                <p className="mb-6 leading-relaxed">
                  The most direct route is to fix the root cause. The defaulting director must resolve the outstanding personal loan. This involves negotiating a One-Time Settlement (OTS) with the bank to close the personal loan account and obtain the No Dues Certificate (NDC).
                </p>
                <p className="mb-6 leading-relaxed font-bold">
                  Once obtained, submit the NDC to the commercial loan underwriter with a strong justification letter explaining the delay or past default. Often, commercial lenders will accept a 'Settled' status if the underlying business metrics are exceptionally strong.
                </p>

                <h3 className="text-2xl font-black mt-10 mb-6 text-[#2E2E2E]">Action Plan 2: Restructure the Board of Directors</h3>
                <p className="mb-6 leading-relaxed">
                  If the director cannot settle the debt, the company must sever the legal tie to their CIBIL score. The defaulting director must officially resign from the board and update the DIR-12 form with the Ministry of Corporate Affairs (MCA).
                </p>
                <p className="mb-6 leading-relaxed">
                  After the MCA records are updated, the company can re-apply for the MSME loan using the clean CIBIL scores of the remaining directors. *Note: Banks may scrutinize sudden directorship changes if they suspect it's merely a superficial maneuver to secure the loan.*
                </p>
              </div>
              <p className="text-lg leading-relaxed italic border-l-4 border-[#1F5EFF] pl-6 py-4 bg-white shadow-sm font-bold mt-10">
                Practical Advice: Attempt settlement first. Sudden directorship changes just before a loan application often trigger enhanced Due Diligence from the bank's fraud prevention team, potentially delaying your working capital by months.
              </p>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Real Stories of Freedom</h2>
              <div className="grid md:grid-cols-2 gap-6 not-prose">
                {[
                  {
                    name: "Rajeev S.",
                    loc: "Tech Startup Founder",
                    type: "SettleLoans Client",
                    outcome: "₹50L Loan Sanctioned",
                    story: "Our ₹50 Lakh MSME loan was rejected because my co-founder had a ₹4 Lakh credit card default. The experts negotiated a settlement on his card, cleared his CIBIL, and our business loan was sanctioned within 45 days."
                  },
                  {
                    name: "Amit K.",
                    loc: "Manufacturing SME",
                    type: "SettleLoans Client",
                    outcome: "CC Limits Unfrozen",
                    story: "My working capital limit was frozen because of a personal loan I defaulted on during Covid. The legal team guided me to settle the debt legally, providing the NDC to my bank, which instantly unfroze our accounts."
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
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center underline italic">Frequently Asked Questions</h2>
              <div className="space-y-4 not-prose">
                {[
                  { q: "Can a private limited company get a loan if one director is a defaulter?", a: "Generally, no. Even though a private limited company is a separate legal entity, banks pull the personal CIBIL scores of all active directors. A default by any key director usually leads to automatic rejection of MSME or working capital loans." },
                  { q: "Does a director's personal CIBIL score impact the company's credit rating?", a: "Yes. A director's personal credit history heavily influences the bank's assessment of the company's management risk, which directly impacts the company's ability to secure commercial credit lines." },
                  { q: "What happens if a director defaults on a personal loan?", a: "Their personal CIBIL score drops. If they are a director in a company, any bank reviewing the company's loan application will flag the director's default as a severe risk factor, often halting the business loan process." },
                  { q: "Can we remove the defaulting director to get the MSME loan?", a: "Removing the director from the MCA records and board can help distance the company from their credit profile. However, banks may still scrutinize recent changes in directorship if it appears to be a maneuver just for the loan." },
                  { q: "Is the company liable to pay the director's personal loan?", a: "No, the company is not legally liable to pay a director's personal loan. The issue is purely about the perceived credibility and financial discipline of the company's leadership." },
                  { q: "How can we resolve a rejected MSME loan due to a director's default?", a: "The most effective solution is for the director to settle or clear their personal loan to update their CIBIL report, or for the company to legally restructure its board of directors." },
                  { q: "Does a settled personal loan still affect the MSME loan?", a: "A 'Settled' status on a CIBIL report is still negative, but it is better than 'Default' or 'Written Off'. Some aggressive commercial lenders might accept it with an explanation, but traditional banks may still hesitate." },
                  { q: "Do banks check the CIBIL of all directors or just the managing director?", a: "Banks typically check the personal CIBIL scores of all active directors listed on the MCA portal, as well as major shareholders and guarantors for the business loan." },
                  { q: "Can an MSME loan be approved if the defaulting director has a minor share?", a: "Even if the director holds a minor share, their position on the board makes their credit history relevant. The bank's credit policy will dictate if an exception can be made." },
                  { q: "How long does a director's default stay on their CIBIL report?", a: "Default records generally stay on the CIBIL report for 7 years. Closing or settling the account will update the status, which is necessary to rebuild creditworthiness." }
                ].map((faq, i) => (
                  <details key={i} className="group bg-white border border-[#DEDEDE] rounded-xl overflow-hidden hover:shadow-md transition-all border-b-4 border-b-[#1F5EFF]/20 shadow-sm">
                    <summary className="flex justify-between items-center p-5 cursor-pointer font-black text-[#2E2E2E] list-none bg-gray-50 group-open:bg-white transition-colors border-l-4 border-l-[#1F5EFF]">
                      <span className="text-lg italic tracking-tight">{i + 1}. {faq.q}</span>
                      <span className="transition-transform group-open:rotate-180">
                        <svg className="w-5 h-5 text-[#1F5EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7"></path></svg>
                      </span>
                    </summary>
                    <div className="px-5 pb-5 text-[#2E2E2E] opacity-90 leading-relaxed border-t border-[#DEDEDE] pt-4 mt-0 bg-white font-normal italic tracking-tight">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <div className="mt-16 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-400 text-[10px] italic font-black uppercase tracking-[0.1em]">Disclaimer: SettleLoans is a debt consultancy service. Information provided is for educational purposes only. We always recommend consulting with a legal professional for specific cases involving litigation or restructuring.</p>
            </div>
          </article>

          {/* Right Column: Sidebar (Sticky) */}
          <aside className="hidden lg:block w-1/4 relative">
            <div className="sticky top-24 space-y-8">
              <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                <div className="bg-[#1F5EFF] p-4 text-center">
                  <h3 className="text-lg font-black text-white italic tracking-wider">Secure Your Future</h3>
                </div>
                <div className="p-6 text-center">
                  <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold italic tracking-tight underline">
                    Start your digital journey to a debt-free life today with expert negotiation.
                  </p>
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg italic tracking-tighter uppercase underline">
                    Talk to an Expert
                  </Link>
                  <p className="mt-4 text-[10px] text-[#DEDEDE]/60 uppercase tracking-[0.2em] font-black underline">100% Confidential</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                <h3 className="text-xs font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2 italic underline">Related Guides</h3>
                <ul className="space-y-4 text-[11px] font-bold italic">
                  <li>
                    <Link href="/loan-settlement-lawyers" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      Legal Rights of Borrowers
                    </Link>
                  </li>
                  <li>
                    <Link href="/punishment-for-non-payment-of-personal-loan-in-india" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      Default Consequences
                    </Link>
                  </li>
                  <li>
                    <Link href="/ignoring-calls-of-recovery-agent" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      Dealing with Agents
                    </Link>
                  </li>
                  <li>
                    <Link href="/debt-settlement-company-in-india" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      Settlement vs. Default
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
