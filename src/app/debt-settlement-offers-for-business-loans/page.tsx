import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Debt Settlement Offers for Business Loans | MSME & SME Guide 2024",
  description: "Explore the latest debt settlement offers for business loans in India. Comprehensive guide on MSME OTS schemes, RBI guidelines, and bank negotiation strategies.",
  alternates: {
    canonical: "https://settleloans.in/debt-settlement-offers-for-business-loans",
  },
};

export default function BusinessLoanSettlementPage() {
  const faqs = [
    {
      q: "Can a business loan truly be settled with a discount?",
      a: "Yes, business loans can be settled through One-Time Settlement (OTS) schemes. Banks often prefer a lump sum payment over long, expensive legal battles in Debt Recovery Tribunals (DRT), especially when the business has genuinely failed."
    },
    {
      q: "What is an OTS scheme for MSMEs?",
      a: "It's a board-approved policy mandated by the RBI where banks offer a one-time settlement for stressed MSME accounts. It allows businesses to close their loans by paying a portion of the principal and waiving off interest and penalties."
    },
    {
      q: "How does CGTMSE coverage affect my settlement offer?",
      a: "If your loan is covered by CGTMSE, the bank has a government guarantee. This can make them more willing to settle because a portion of their loss is already mitigated, making them more flexible on the remaining amount."
    },
    {
      q: "Can the bank seize my personal assets for a business loan default?",
      a: "If you signed as a personal guarantor, yes. However, if the business is a Private Limited company and you haven't given personal guarantees, your personal assets are generally protected. Settlement can prevent such legal escalations."
    },
    {
      q: "What documents are required for a business loan settlement?",
      a: "You'll need audited financial statements (P&L, Balance Sheet), GST returns, bank statements, proof of business closure or stress, and a detailed settlement proposal explaining why you cannot pay in full."
    },
    {
      q: "Is it possible to settle a secured business loan?",
      a: "Yes, but it is harder than an unsecured one. The bank will compare your offer against the liquidation value of the property collateral. If your offer is close to what they would get after a 2-year auction process, they may accept."
    },
    {
      q: "How long does a business loan settlement process take?",
      a: "A typical business settlement takes 3 to 9 months, depending on the complexity, the lender's hierarchy, and the amount involved."
    },
    {
      q: "Will a settlement affect my ability to get a business loan in the future?",
      a: "Yes, it will reflect as 'Settled' in your CMR (Company Credit Report) and personal CIBIL. You likely won't get a traditional bank loan for 2-3 years, but you can restart with smaller NBFCs once you rebuild your credit."
    },
    {
      q: "What is the MSME Samadhaan Portal?",
      a: "It's a platform to help MSMEs recover delayed payments from their buyers. Resolving your own receivables through this portal can often provide the funds needed to settle your bank loans."
    },
    {
      q: "Should I hire a lawyer for business loan settlement?",
      a: "Given the high stakes and complex documentation in business loans, professional legal and financial representation is highly recommended to protect your personal assets and negotiate the best possible waiver."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/debt-settlement-offers-for-business-loans#webpage",
        "url": "https://settleloans.in/debt-settlement-offers-for-business-loans",
        "name": "Debt Settlement Offers for Business Loans",
        "description": "Comprehensive guide for MSMEs and SMEs on settling business debts in India.",
        "breadcrumb": { "@id": "https://settleloans.in/debt-settlement-offers-for-business-loans#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/debt-settlement-offers-for-business-loans#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://settleloans.in" },
          { "@type": "ListItem", "position": 2, "name": "Business Loan Settlement", "item": "https://settleloans.in/debt-settlement-offers-for-business-loans" }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/debt-settlement-offers-for-business-loans#article",
        "headline": "Business Loan Settlement Offers: The Ultimate Guide for MSMEs",
        "description": "Facing business collapse? Learn how to navigate One-Time Settlement (OTS) offers and protect your future.",
        "author": { "@type": "Organization", "name": "SettleLoans Content Team" },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": { "@type": "ImageObject", "url": "https://settleloans.in/logo/logo.svg" }
        },
        "datePublished": "2024-03-16",
        "dateModified": "2024-03-16",
        "mainEntityOfPage": { "@id": "https://settleloans.in/debt-settlement-offers-for-business-loans#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/debt-settlement-offers-for-business-loans#product",
        "name": "MSME Debt Resolution Program",
        "description": "Specialized settlement negotiation for business and enterprise loans.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1250"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Anil M." },
            "datePublished": "2024-01-20",
            "reviewBody": "Settled a ₹45L manufacturing unit loan for ₹22L using this guide's strategies. Highly recommended.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/debt-settlement-offers-for-business-loans#faq",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        {/* Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              MSME Recovery & Revival
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Business Loan <br className="hidden md:block" /> Settlement Offers
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
              Don't let business failure lead to personal ruin. Navigate the complex world of OTS schemes and secure your fresh start.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Consult an Expert
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
                <li className="font-bold text-[#2E2E2E]" aria-current="page">Business Loan Settlement</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">
          {/* Left Column: TOC */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <div className="sticky top-24">
              <TableOfContents
                items={[
                  { id: "business-debt-landscape", title: "Business Debt Landscape" },
                  { id: "ots-explained", title: "OTS Schemes Explained" },
                  { id: "rbi-msme-guidelines", title: "RBI MSME Guidelines" },
                  { id: "legal-protections", title: "Legal Protections for Promoters" },
                  { id: "cgtmse-leverage", title: "The CGTMSE Leverage" },
                  { id: "negotiating-with-banks", title: "Negotiating with Banks" },
                  { id: "nbfc-vs-bank-business", title: "NBFC vs Bank Settlement" },
                  { id: "impact-of-guarantees", title: "Impact of Personal Guarantees" },
                  { id: "restructuring-options", title: "Restructuring vs Settlement" },
                  { id: "liquidation-math", title: "The Liquidation Math" },
                  { id: "msme-samadhaan", title: "Using MSME Samadhaan" },
                  { id: "common-business-pitfalls", title: "Common Business Pitfalls" },
                  { id: "documenting-hardship", title: "Documenting Business Hardship" },
                  { id: "rebuilding-company-credit", title: "Rebuilding Company Credit" },
                  { id: "fresh-start-strategy", title: "The Fresh Start Strategy" },
                  { id: "success-stories", title: "Success Stories" },
                  { id: "faqs", title: "Frequently Asked Questions" }
                ]}
              />
            </div>
          </aside>

          {/* Middle Column: Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            <section id="business-debt-landscape" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Business Debt Landscape in India: <span className="text-black">The High Stakes Game</span>
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                For an entrepreneur in India, business debt is rarely just professional; it often becomes deeply personal. Because of the common practice of lenders asking for personal guarantees even for corporate loans, the failure of a startup or an MSME can threaten the promoter's home, savings, and family security. This high-stakes environment requires a sophisticated approach to debt resolution.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                When a business loan goes into default, the lender's primary tool is pressure. They use the threat of SARFAESI Act, Debt Recovery Tribunal (DRT) cases, and even criminal complaints under Section 138 for security cheques. However, what many business owners don't realize is that banks are often just as desperate as they are to resolve these "stuck" accounts. In the banking world, an NPA is a dead asset that costs money to maintain. Your goal is to offer them an "exit" that is more attractive than a 5-year legal battle.
              </p>
            </section>

            <section id="ots-explained" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                One-Time Settlement (OTS) Schemes: Your Targeted Exit
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                A One-Time Settlement (OTS) is a contract where the bank agrees to accept a lump sum payment that is less than the total outstanding (Principal + Interest + Penalties) and closes the account as 'Settled'. 
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Why Banks Offer OTS</h3>
                  <p className="text-sm text-blue-800/80 mb-4">Lenders want to clear their Balance Sheets of bad loans. An OTS provides 'Instant Liquidity' which they can reinvest in profitable loans, rather than keeping 'Provisioning' capital against your NPA.</p>
                </div>
                <div className="p-6 bg-green-50/50 rounded-2xl border border-green-100">
                  <h3 className="text-xl font-bold text-green-900 mb-4">Why You Need It</h3>
                  <p className="text-sm text-green-800/80 mb-4">It stops the accrual of massive interest, halts legal proceedings, and releases any collateral or personal guarantees, allowing you to move on with your life or a new venture.</p>
                </div>
              </div>
            </section>

            <section id="rbi-msme-guidelines" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                RBI MSME Guidelines: The Framework for Fairness
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The Reserve Bank of India (RBI) has issued several circulars specifically for MSME debt resolution. One of the most critical requirements is that every bank must have a <strong>Board Approved Policy</strong> for compromise settlements. This means the bank manager cannot simply say "we don't do settlements." They are bound by their own internal policy which must follow the spirit of RBI's "Framework for Revival and Rehabilitation of MSMEs."
              </p>
              <div className="p-6 bg-[#2B2B2B] text-[#DEDEDE] rounded-2xl mb-8 border-l-4 border-[#1F5EFF]">
                <h4 className="font-bold text-xl mb-3 uppercase tracking-widest text-[#1F5EFF]">Pro Tip</h4>
                <p className="leading-[1.4]">
                  If a branch manager refuses to discuss a settlement, you can escalate to the Zonal Office or the Nodal Officer, citing the bank's requirement to have an MSME settlement policy under RBI guidelines.
                </p>
              </div>
            </section>

            <section id="legal-protections" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Legal Protections for Promoters: Beyond the Guarantee
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                While a personal guarantee is powerful, it is not absolute. Indian courts and the Insolvency and Bankruptcy Code (IBC) have provided various guards. For instance, if the bank makes significant changes to the loan terms without the guarantor's consent, the guarantee can sometimes be challenged. Furthermore, the 'Right of Subrogation' means that if a guarantor pays the debt, they step into the shoes of the bank. Professional debt services use these legal nuances to create 'Negotiation Leverage'.
              </p>
            </section>

            <section id="cgtmse-leverage" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                The CGTMSE Leverage: A Hidden Advantage
              </h2>
              <p className="text-lg leading-relaxed mb-6">                Many business loans up to ₹5 crore are covered by the <strong>Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)</strong>. In such cases, if you default, the CGTMSE pays the bank up to 75-85% of the loss. 
              </p>
              <p className="text-lg leading-relaxed mb-6 text-blue-600 font-bold">
                This is a massive advantage for you. Since the bank has already recovered a large portion of their money from the government trust, they are often much more lenient in settling the remaining 15-25% with you. They get a full exit, and you get a debt-free status.
              </p>
            </section>

            <section id="negotiating-with-banks" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Negotiating with Banks: The "Proof of Failure" Strategy
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Lenders only settle when they are convinced they cannot get more money through recovery. Your negotiation must be based on 'Hardship Evidence'. 
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex gap-4 p-4 border rounded-xl">
                  <span className="font-black text-2xl text-blue-500">1</span>
                  <p className="text-sm">Supply chain disruption reports / Loss of major clients.</p>
                </div>
                <div className="flex gap-4 p-4 border rounded-xl">
                  <span className="font-black text-2xl text-blue-500">2</span>
                  <p className="text-sm">Health issues of the promoter (Critical for individual/proprietorship firms).</p>
                </div>
                <div className="flex gap-4 p-4 border rounded-xl">
                  <span className="font-black text-2xl text-blue-500">3</span>
                  <p className="text-sm">Proof of liquidation of other assets already used to pay staff/vendors.</p>
                </div>
              </div>
            </section>

            <section id="nbfc-vs-bank-business" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                NBFC vs. Bank Business Loan Settlements
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Banks (especially PSBs) are slow but follow clear logic. NBFCs (like Bajaj, Aditya Birla, etc.) are much faster and can be more aggressive with their recovery teams. However, NBFCs are also more 'Business Oriented'. They often calculate the IRR (Internal Rate of Return) on your settlement offer. If your offer provides them with a decent return compared to the risk of holding the NPA, they will close the deal within weeks.
              </p>
            </section>

            <section id="impact-of-guarantees" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                The Impact of Personal Guarantees: Breaking the Chains
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                When you settle a business loan, the most critical document is the 'Release of Personal Guarantee'. Without this, the bank could theoretically come after you personally later, even if the business entity has been cleared. A professional service ensures that the settlement letter explicitly states that all personal and corporate guarantees are revoked and all original title deeds are returned.
              </p>
            </section>

            <section id="restructuring-options" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Restructuring vs. Settlement: The Growth Decision
              </h2>
              <p className="text-lg leading-relaxed mb-6">                If the core business is still strong but facing a temporary cash flow crisis, <strong>Restructuring</strong> (longer tenure, lower EMI) is better as it keeps your credit score alive. But if the business model is no longer viable, <strong>Settlement</strong> is the only way to "stop the bleeding."
              </p>
            </section>

            <section id="liquidation-math" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                The Liquidation Math: Winning the Bank Over
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                In a secured loan settlement, the bank performs a 'Valuation'. If they take your property to auction, they will likely get the 'Distress Value' (which is 20-25% lower than market value) and pay high legal costs. If your settlement offer matches or slightly exceeds this Net Present Value (NPV), the bank's internal recovery audit will approve it.
              </p>
            </section>

            <section id="msme-samadhaan" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Using MSME Samadhaan to Fund Your Settlement
              </h2>
              <p className="text-lg leading-relaxed mb-6">                Many MSMEs fail because their buyers don't pay. Before settling with your bank, use the <strong>MSME Samadhaan portal</strong> to file cases against your debtors. The council mandates payment within 45 days. Winning these cases provides the liquidity needed to make a strong lump-sum offer for your own loan settlement.
              </p>
            </section>

            <section id="common-business-pitfalls" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Common Business Pitfalls to Avoid
              </h2>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-4 p-4 bg-red-50 rounded-xl">
                  <span className="text-red-500 font-bold">⚠️</span>
                  <p className="text-sm">Providing new collateral to 're-align' an old bad loan this just gives the bank more power over you.</p>
                </li>
                <li className="flex gap-4 p-4 bg-red-50 rounded-xl">
                  <span className="text-red-500 font-bold">⚠️</span>
                  <p className="text-sm">Paying 'token amounts' to recovery agents without a formal OTS letter these amounts are often just adjusted against interest and do not reduce your principal.</p>
                </li>
              </ul>
            </section>

            <section id="documenting-hardship" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Documenting Business Hardship: Your "Story" for the Bank
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                A settlement file in a bank needs a narrative. You must provide a formal 'Rehabilitation Proposal' or 'Settlement Request Letter' that details exactly when and why the business started failing. Include things like market changes, technological obsolescence, or regulatory changes that made your business unviable.
              </p>
            </section>

            <section id="rebuilding-company-credit" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Rebuilding Company Credit: The Road to v2.0
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                After a business settlement, the company's credit rating (like CRISIL or CARE) will be impacted. However, many entrepreneurs start their second business as a fresh legal entity (New Private Limited or LLP). By ensuring the first settlement was handled smoothly and all legal dues were cleared, the promoter's reputation remains salvageable for future ventures.
              </p>
            </section>

            <section id="fresh-start-strategy" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                The Fresh Start Strategy: Your Next 12 Months
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Upon receiving your No Dues Certificate, immediately update your information with platforms like CIBIL and Credit Information Bureau of India. Focus on bootstrapping or equity funding for your next project, as bank debt will be difficult to secure for some time. This 'Detox Period' is a great time to build a more resilient, lean business model.
              </p>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center uppercase tracking-wider">Real Stories of Freedom</h2>
              <div className="grid md:grid-cols-2 gap-6 not-prose">
                {[
                  {
                    name: "Vikram S.",
                    loc: "Ahmedabad",
                    type: "Personal Loan",
                    outcome: "Settled for 55% less",
                    story: "I had four personal loans and the interest was more than my salary. I thought it was the end for me. SettleLoans treated me with so much kindness. They didn't just fix my finances; they gave me back my sleep."
                  },
                  {
                    name: "Priya M.",
                    loc: "Chennai",
                    type: "Credit Card Debt",
                    outcome: "Full Negotiation Success",
                    story: "The recovery agents were calling my office. I was terrified. The team at SettleLoans stepped in and stopped the calls the very same day. They are like family to me now."
                  },
                  {
                    name: "Raj राजेश K.",
                    loc: "Delhi",
                    type: "Multiple NBFC Loans",
                    outcome: "Debt Free in 12 Months",
                    story: "I was in a deep depression. Finding SettleLoans was a miracle. They consolidated everything and handled the banks professionally. I am finally debt free."
                  },
                  {
                    name: "Sunita D.",
                    loc: "Pune",
                    type: "Emergency Medical Debt",
                    outcome: "Reduced to 40%",
                    story: "I had to take loans for my husband's treatment. We couldn't pay back. SettleLoans understood our pain. They negotiated a deal that we could actually afford. Thank you."
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
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 uppercase tracking-wider">Frequently Asked Questions</h2>
              <div className="space-y-4 not-prose">
                {faqs.map((faq, i) => (
                  <details key={i} className="group bg-white border border-[#DEDEDE] rounded-xl overflow-hidden hover:shadow-md transition-all border-b-4 border-b-[#1F5EFF]/20">
                    <summary className="flex justify-between items-center p-5 cursor-pointer font-black text-[#2E2E2E] list-none bg-gray-50 group-open:bg-white transition-colors">
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

            <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
              <p>© 2024 SettleLoans. Empowering MSME Revival in India.</p>
              <div className="flex gap-4">
                <Link href="/privacy-policy" className="hover:text-blue-500 hover:underline transition-colors">Privacy Policy</Link>
                <Link href="/terms-and-conditions" className="hover:text-blue-500 hover:underline transition-colors">Terms of Service</Link>
              </div>
            </div>
          </article>

          {/* Right Column: Sticky Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <div className="sticky top-24 space-y-8">
              {/* CTA Container */}
              <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                <div className="bg-[#1F5EFF] p-4 text-center">
                  <h3 className="text-lg font-black text-white">Business Relief</h3>
                </div>
                <div className="p-6 text-center">
                  <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                    Stressed business loan? Get a dedicated expert to handle the bank for you.
                  </p>
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg">
                    Free Consultation
                  </Link>
                </div>
              </div>

              {/* Related Pages Container */}
              <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2 text-[10px]">Business Resources</h3>
                <ul className="space-y-4 text-sm font-bold">
                  <li><Link href="/business-loan-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors"><span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF]"></span>MSME Settlement Hub</Link></li>
                  <li><Link href="/best-lawyer-for-msme-and-business-loans" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors"><span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF]"></span>Expert Business Lawyers</Link></li>
                  <li><Link href="/SME-loan-dispute-resolution" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors"><span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF]"></span>SME Dispute Help</Link></li>
                  <li><Link href="/how-to-remove-loan-default-from-cibil-finances-india" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors"><span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF]"></span>CIBIL Restoration</Link></li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
