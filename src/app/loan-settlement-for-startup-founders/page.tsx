import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Loan Settlement for Startup Founders in India | Venture Debt Relief",
  description: "Are you a startup founder struggling with personal guarantees and venture debt? Learn the legal process of startup loan settlement and debt resolution in India. Reclaim your future today.",
  alternates: {
    canonical: "https://settleloans.in/loan-settlement-for-startup-founders",
  },
};

export default function LoanSettlementStartupFoundersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/loan-settlement-for-startup-founders#webpage",
        "url": "https://settleloans.in/loan-settlement-for-startup-founders",
        "name": "Loan Settlement for Startup Founders in India | Venture Debt Relief",
        "description": "Expert guide to startup loan resolution and debt settlement for founders in India, focusing on personal guarantees and venture debt.",
        "breadcrumb": { "@id": "https://settleloans.in/loan-settlement-for-startup-founders#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/loan-settlement-for-startup-founders#breadcrumb",
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
            "name": "Loan Settlement for Startup Founders",
            "item": "https://settleloans.in/loan-settlement-for-startup-founders"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/loan-settlement-for-startup-founders#article",
        "headline": "Loan Settlement for Startup Founders: Protecting Your Vision and Assets",
        "description": "Learn how startup founders can resolve business liabilities and personally guaranteed loans legally after a pivot or shutdown.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoans Startup Desk"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": {
            "@type": "ImageObject",
            "url": "https://settleloans.in/logo/logo.svg"
          }
        },
        "datePublished": "2024-03-20",
        "dateModified": "2024-03-20",
        "mainEntityOfPage": { "@id": "https://settleloans.in/loan-settlement-for-startup-founders#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/loan-settlement-for-startup-founders#product",
        "name": "Founder Debt Settlement Services",
        "description": "Legal and financial consultancy for startup founders in India for debt resolution and personal guarantee management.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1500"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rahul M." },
            "datePublished": "2024-01-20",
            "reviewBody": "Founders often forget they have personal guarantees. SettleLoans saved my personal property from being auctioned by the bank after my SaaS startup shutdown. Incredible expertise.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Sanya G." },
            "datePublished": "2024-02-15",
            "reviewBody": "The best team for venture debt settlement. They understood the nuances of VC-backed companies and bank debt. Highly recommended.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/loan-settlement-for-startup-founders#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the biggest risk for startup founders with bank debt in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The personal guarantee is the biggest risk. Most Indian banks require founders to sign a personal guarantee, making them personally liable for the company's debt with their own assets."
            }
          },
          {
            "@type": "Question",
            "name": "Can I settle startup debt if my company is already being liquidated?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, but it is better to settle the personal guarantee component separately with the bank while the company liquidation proceeds in court or through the IBC."
            }
          },
          {
            "@type": "Question",
            "name": "How does CGTMSE coverage help founders in loan settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If the loan is under CGTMSE, the bank is already covered by the government for up to 85% of the loss. This makes the bank much more willing to settle the remaining balance for a smaller amount from the founder."
            }
          },
          {
            "@type": "Question",
            "name": "Will a loan settlement prevent me from starting a new company in the future?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It will not prevent you from starting a business, but it will significantly lower your and your company's CIBIL score, making it difficult to get bank credit for a few years. You will likely rely on equity funding during this period."
            }
          },
          {
            "@type": "Question",
            "name": "What is 'co-extensive liability' for founders?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under Section 128 of the Indian Contract Act, a guarantor is just as liable as the company. The bank can legally demand payment from the founder even before exhausting all efforts to collect from the company."
            }
          },
          {
            "@type": "Question",
            "name": "Can venture debt from private funds be settled like bank loans?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, venture debt funds are often more flexible and can agree to settlements, especially if you show them a clear path of business failure and an honest offer for what can be recovered."
            }
          },
          {
            "@type": "Question",
            "name": "How long does a founder's loan settlement process take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The timeframe is usually 6 to 9 months. It involves auditing the debt, presenting hardship evidence, and multiple rounds of negotiation with the bank's recovery head."
            }
          },
          {
            "@type": "Question",
            "name": "Is it possible to settle a business loan without impacting my co-founder?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Usually, all guarantors are jointly and severally liable. If you settle, the bank may still pursue the co-founder unless the settlement agreement clearly specifies that the entire account is closed for all parties."
            }
          },
          {
            "@type": "Question",
            "name": "Should I fear jail time for startup loan default?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Simple startup failure is not a crime. However, if there was any fraud or misrepresentation in getting the loan, or if you ignore a court summon from a DRT, you could face legal consequences."
            }
          },
          {
            "@type": "Question",
            "name": "Why hire SettleLoans for startup debt instead of a regular lawyer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SettleLoans combines legal expertise with specialized banking negotiation skills. We understand both the lawyer's notice and the bank manager's internal pressure to clear NPA files, ensuring a faster, cheaper resolution."
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

        {/* Hero Section - Founders Edition */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Founder Resilience & Protection
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Loan Settlement for <br className="hidden md:block" /> Startup Founders in India
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-4xl mx-auto leading-[1.2] font-normal">
              You had the vision to build; now have the strength to resolve. If your startup journey has faced a downturn, protect your personal future and family with our expert legal roadmap for venture debt settlement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Talk to Our Startup Desk
              </Link>
            </div>
          </div>
        </section>

        {/* Breadcrumb - Detection by Rich Results */}
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
                  Loan Settlement for Startup Founders
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* 3 Column Layout Full Width */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative max-w-full">

          {/* Left Column: TOC (Sticky) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <TableOfContents
              items={[
                { id: "founder-debt-intro", title: "A Message to Founders" },
                { id: "personal-guarantee-trap", title: "The Personal Guarantee Trap" },
                { id: "why-startups-fail-debt", title: "Why Startups Accumulate Debt" },
                { id: "types-of-startup-debt", title: "Types of Debt to Settle" },
                { id: "founder-settlement-definition", title: "What is Founder Settlement?" },
                { id: "cgtmse-advantage", title: "The CGTMSE Advantage" },
                { id: "step-by-step-founder", title: "Step-by-Step Resolution" },
                { id: "documenting-failure", title: "Documenting Startup Failure" },
                { id: "legal-protections-founders", title: "Legal Protections & IBC" },
                { id: "rbi-ethics-founders", title: "RBI Guidelines & Ethics" },
                { id: "negotiation-tactics-founders", title: "Founder-Centric Negotiation" },
                { id: "venture-debt-nuances", title: "Venture Debt Nuances" },
                { id: "alternatives-for-founders", title: "Strategic Alternatives" },
                { id: "mental-health-founders", title: "Founder Mental Health" },
                { id: "msme-benefits-founders", title: "Leveraging MSME Benefits" },
                { id: "founder-success-stories", title: "Case Studies of Refounding" },
                { id: "next-startup-roadmap", title: "Roadmap to Next Startup" },
                { id: "why-settleloans-founders", title: "How We Support Founders" },
                { id: "conclusion-founders", title: "A New Vision for You" },
                { id: "faqs", title: "Frequently Asked Questions" }
              ]}
            />
          </aside>

          {/* Middle Column: Main Content (>5000 words target) */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[#2E2E2E]">

            <section id="founder-debt-intro" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-8 leading-tight">
                To the Visionaries of India: <span className="text-black underline decoration-[#1F5EFF]/20">Failure is a Feature, Not a Bug</span>
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 z-0"></div>
                <p className="text-lg leading-relaxed text-[#2E2E2E] relative z-10 mb-6 font-medium">
                  Few people truly understand the weight a startup founder carries. Behind the LinkedIn announcements and the product launches is a reality of sacrifice, sleeplessness, and high-stakes risk. You didn't just build a product; you built a team, a vision, and a future for your family. But when the market shifts or the funding runs dry, the burden of debt can feel like a crushing weight on that very vision.
                </p>
                <p className="text-lg leading-relaxed text-[#2E2E2E] relative z-10 mb-6 font-medium">
                  If you are standing amidst the fallout of a startup downturn, please remember this: Silicon Valley and the Indian startup ecosystem are built on the foundations of founders who had to start over. Your failure to pay a bank EMI doesn't negate the brilliance of your code, your operational skill, or your leadership. At SettleLoans, we have stood by hundreds of founders whose businesses didn't make it to the IPO but whose lives and assets deserve preservation.
                </p>
                <p className="text-lg leading-relaxed text-[#2E2E2E] relative z-10 font-bold text-[#1F5EFF]">
                  You took a risk for India's growth. Now, let us take the risk of managing your recovery. We are in this together, and we will protect you.
                </p>
              </div>
            </section>

            <section id="personal-guarantee-trap" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                The Personal Guarantee Trap: A Founder's Hidden Liability
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Most startup founders believe in the 'Limited Liability' of their Private Limited company. While this protects you in many civil situations, the Indian banking system often requires something much more intrusive: the Personal Guarantee (PG). By signing a PG, you have effectively told the bank, \"If my company cannot pay, I will pay with my own house, my own car, and my own daughter's education fund.\"
              </p>
              <p className="text-lg leading-relaxed mb-6">
                This is the 'Founder's Trap'. When the startup ends, the company can go into liquidation under the Insolvency and Bankruptcy Code (IBC). But your personal liability lives on. Lenders in India have become increasingly aggressive in invoking these guarantees, often sending notices to your personal residential address where your parents or spouse may be residing.
              </p>
              <p className="text-lg leading-relaxed mb-6 font-bold">
                Knowledge of Section 128 of the Indian Contract Act is vital for you. It states that the liability of a guarantor is 'co-extensive' with that of the principal debtor. This means the bank doesn't even have to wait to sell the company's computers or furniture before they come for your personal savings. Breaking this co-extensive liability through a professional settlement is the only way to safeguard your personal life once the corporate dream has ended.
              </p>
              <div className="bg-orange-50 p-8 rounded-xl border border-orange-200 mb-8">
                <h3 className="text-xl font-bold mb-4 text-orange-900">Critical Check: Did you sign an 'Unlimited' Guarantee?</h3>
                <p className="text-sm text-orange-850 leading-relaxed mb-4">
                  Many founders sign 'Continuing Guarantees' which cover every current and future loan the company takes. This means even if you leave the company, your liability might continue unless you formally revoke it in writing with the bank. If your startup has shut down, audit every document you signed immediately.
                </p>
              </div>
            </section>

            <section id="why-startups-fail-debt" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                Why Even Billion-Dollar Startup Ideas Accumulate Debt
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The path of a startup founder is one of managing mismatch. You mismatch your long-term vision with short-term cash flows. You mismatch investor expectations with market reality. In India, many founders turn to debt not because they want to, but because equity funding is slow or requires excessive dilution.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Debt in a startup usually accumulates in three ways. First is 'Bridge Loans' to cover the gap between funding rounds. Second is 'Venture Debt' which is often sold as founder-friendly but carries heavy covenants. Third is the 'Operational Debt' - credit cards and personal loans taken by the founder to pay the team when the bank account hits zero.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                According to recent data, 90% of startups fail within the first 5 years. In the Indian context, where the safety net is thin, this failure often results in a mountain of debt that the founder is left to manage alone. The 'Hero Culture' of founders prevents them from admitting they need debt relief until it's too late. At SettleLoans, we believe in 'Failing Fast and Resolving Faster'.
              </p>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-8">
                <h3 className="text-xl font-bold mb-6">Common Founders' Debt Signals:</h3>
                <ul className="grid md:grid-cols-2 gap-4 text-sm font-medium">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full mt-1.5 shrink-0"></span>
                    <span>Using personal credit cards to fund AWS/cloud bills.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full mt-1.5 shrink-0"></span>
                    <span>Venture debt covenants forcing you into an early exit.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full mt-1.5 shrink-0"></span>
                    <span>Banks refusing to issue NOCs for new funding due to existing defaults.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full mt-1.5 shrink-0"></span>
                    <span>Legal notices for PF/ESI defaults alongside bank EMI defaults.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full mt-1.5 shrink-0"></span>
                    <span>Multiple personal guarantees being invoked simultaneously by different lenders.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#1F5EFF] rounded-full mt-1.5 shrink-0"></span>
                    <span>Inability to focus on a new 'Pivot' due to constant recovery calls.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="types-of-startup-debt" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                Types of Debt Startup Founders Struggle With
              </h2>
              <p className="mb-8 text-lg">Founders' debt portfolios are more complex than standard business debt. We categorize them to apply different settlement strategies.</p>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                  <h3 className="text-xl font-bold text-[#1F5EFF] mb-2">1. Venture Debt</h3>
                  <p className="text-base text-gray-600 mb-4">Provided by specialized funds, often with equity kickers (warrants). While these lenders are more sophisticated, their collection tactics can be aggressive, including blocking company bank accounts. Settlement here involves a complex negotiation of warrants vs cash.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                  <h3 className="text-xl font-bold text-[#1F5EFF] mb-2">2. Term Loans with Personal Guarantees</h3>
                  <p className="text-base text-gray-600 mb-4">The standard bank loan. These are regulated by the RBI's fair practice code. The settlement strategy here is volume-driven; we show the bank manager that the founder has no other income and the principal is all that can be recovered.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                  <h3 className="text-xl font-bold text-[#1F5EFF] mb-2">3. Overdraft (OD) and CC Facilities</h3>
                  <p className="text-base text-gray-600 mb-4">Often used for inventory or working capital. If your startup was based on e-commerce or manufacturing, a dead inventory can make this debt impossible to pay. We help you present a 'Devaluation report' to the bank to justify a low settlement offer.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                  <h3 className="text-xl font-bold text-[#1F5EFF] mb-2">4. Founder's Personal Loans</h3>
                  <p className="text-base text-gray-600 mb-4">The 'Last Resort' debt. Founders often take these in their own name to pay the team's salaries for that extra 3 months of runway. These are highly settle-able because they are unsecured personal credit.</p>
                </div>
              </div>
            </section>

            <section id="founder-settlement-definition" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                What is Founder-Centric Loan Settlement?
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                A founder-centric settlement is not just about a discount; it's about **Strategic Separation**. It is the process where we legally decouple the founder's personal life from the startup's corporate liabilities. It involves a One-Time Settlement (OTS) with lenders where you pay a fraction of the total amount in exchange for a full release from your personal guarantees.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                For a founder, the goal of a settlement is 'Maximum Runway for the Next Life'. You want to save as much of your personal capital as possible to eventually refound or rebuild. This requires a professional team that can speak the bank's language of 'NPA Write-offs' and 'Recovery Targets'. We don't just ask for a waiver; we present a business case for why the bank will gain more by settling with you now than by waiting for years in a court battle.
              </p>
              <div className="bg-blue-50 p-8 rounded-xl border border-blue-200 mb-8">
                <h3 className="text-xl font-bold mb-4 text-blue-900">Corporate Debt vs. Personal Liability</h3>
                <p className="text-sm text-blue-800 leading-relaxed mb-4">
                  In a settlement, we prioritize the accounts where your **Personal Home** or **Life Savings** are at stake. Corporate debt without a personal guarantee can often be handled during company closure, but the guaranteed loans are 'Priority One'.
                </p>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Most banks in India can be convinced to waive 100% of the interest and up to 50% of the principal if you can show a genuine business shutdown or a loss of primary income. This 'Principal Waiver' is the gold standard of founder settlements.
                </p>
              </div>
            </section>

            <section id="cgtmse-advantage" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">The CGTMSE Advantage: A Founder's Secret Weapon</h2>
              <p className="mb-6 text-lg">
                Many startup loans in India are covered under the **Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)**. Ifyour loan had this coverage, you likely paid a 'Guarantee Fee' to the bank. This is the best news you can receive during a startup failure.
              </p>
              <p className="mb-6">
                When a CGTMSE-covered loan defaults, the bank can claim up to 85% of the loss from the Government of India's trust. This significantly reduces the bank's actual 'loss' on your account. If the bank has already recovered 75% from the government, they are far more likely to accept a small Onetime Settlement from the founder to close the remaining 25%.
              </p>
              <div className="bg-teal-50 p-8 rounded-2xl border border-teal-100 mb-8">
                <h3 className="text-xl font-bold text-teal-800 mb-4">Leveraging CGTMSE in Negotiation</h3>
                <p className="text-sm text-teal-900 leading-relaxed">
                  Our team audit's your loan docs to check for the CGTMSE fee. If found, we use this in our formal legal proposal to the bank, reminding them that their net loss is minimal and a settlement is a 'Win-Win' for their recovery branch. This alone can save a founder crores in repayments.
                </p>
              </div>
            </section>

            <section id="step-by-step-founder" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">The 7-Step Founder Resolution Roadmap</h2>
              <p className="mb-8 text-center max-w-2xl mx-auto">Founders need to handle debt like a board meeting - with clear data and firm strategy. Here is our exclusive 7-step process for venture debt resolution.</p>
              
              <div className="relative border-l-2 border-[#1F5EFF] ml-4 md:ml-8 space-y-12 pb-8">
                {[
                  { step: "Step 1: Guarantee Audit", content: "Identify every personal guarantee you have signed. Check if they are continuing guarantees or for specific loan tranches. This is the foundation of our defense." },
                  { step: "Step 2: Hardship Deck Preparation", content: "We help you create a 'Shutdown Report' or 'Hardship Deck'. This includes your startup's pivot attempts, the failure to raise further capital, and the drop in unit economics." },
                  { step: "Step 3: The Liquidity Audit", content: "Calculate your actual personal liquidity. We ensure you don't over-offer. We build a settlement fund from whatever assets you have left before the bank freezes your personal accounts." },
                  { step: "Step 4: The Legal Proposal Launch", content: "We send a formal settlement proposal to the bank's Recovery Nodal Officer. We cite the co-extensive liability and the founder's inability to pay the full 100% dues." },
                  { step: "Step 5: Stopping the Harassment", content: "Once the proposal is sent, we take over all calls from recovery agents. We provide you with a 'Legal Shield' that ensures you can focus on your next career move." },
                  { step: "Step 6: The Resolution Letter (OTS)", content: "We negotiate until the bank issues a formal, stamped Settlement Letter (OTS). We check every word to ensure it includes a total release from all current and future liabilities." },
                  { step: "Step 7: Payment & Guarantee Release", content: "Payment is made. We collect the 'No Dues Certificate' and ensure the bank informs CIBIL. More importantly, we ensure your personal original documents (property/FDs) are returned." }
                ].map((item, i) => (
                  <div key={i} className="relative pl-8">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#1F5EFF]"></div>
                    <h4 className="text-xl font-bold text-[#2E2E2E] mb-2">{item.step}</h4>
                    <p className="text-gray-600 leading-relaxed text-base">{item.content}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="documenting-failure" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Documenting Startup Failure: Proving Your Hardship</h2>
              <p className="mb-6">For a founder, 'failure' must be objective. The bank manager doesn't care about your 'Product-Market Fit'. They care about cash flow. You need to provide a 'Proof of Crisis' folder:</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                  <div><strong>Burn Charts & P&Ls:</strong> Audited (if possible) reports showing that the company's burn was sustainable until a specific event (market crash, funding withdrawal).</div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                  <div><strong>Term Sheet Rescissions:</strong> Emails or letters from VCs who walked away from the round. This is powerful evidence of 'Market-driven Failure'.</div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                  <div><strong>Staff Layoff Proofs:</strong> Records of your attempt to downsize to save the company, showing your genuine attempt to avoid default.</div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                  <div><strong>Founder Asset Statement:</strong> A transparent (but strategic) declaration showing you have no other homes or massive investments hidden elsewhere.</div>
                </li>
              </ul>
              <p className="text-lg leading-relaxed mb-6 font-bold text-[#1F5EFF]">
                We help you frame this documentation as a 'Post-Mortem of a Dream', which turns a cold bank transaction into a human negotiation for your life.
              </p>
            </section>

            <section id="legal-protections-founders" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Legal Protections & IBC: The Founder's Rights</h2>
              <p className="mb-6 text-lg leading-relaxed">
                Knowledge of the law is your greatest defense. In India, a startup founder is protected by several legal frameworks that are often misunderstood.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">The IBC 'Fresh Start' Process</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    The Insolvency and Bankruptcy Code has provision's for small individuals (including founders with low personal turnover) to have their debts discharged under the 'Fresh Start' process. While technical, it provides a definitive end to your debt journey.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">SARFAESI & DRT Defenses</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    If the bank mentions the 'Debt Recovery Tribunal' (DRT), do not panic. DRT cases can take years, and banks hate the wait. We use the threat of a long DRT battle as leverage to get a quick 50% discount in settlement.
                  </p>
                </div>
              </div>
              <p className="mb-6">
                Most importantly, remember that **Secured vs Unsecured Debt** changes everything. If you haven't mortgaged your house, the bank has very little 'Physical' leverage over you. They can only block you on CIBIL. If you calculate that your next 5 years will be equity-funded anyway, a CIBIL hit is a small price to pay for crore's of debt relief.
              </p>
            </section>

            <section id="rbi-ethics-founders" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-6 leading-tight">
                RBI Guidelines: Preventing Harassment in the Boardroom
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Founders are often targets of 'Professional Shaming'. Recovery agents might call your investors, your current boss, or your new team members. This is 100% illegal under the Reserve Bank of India (RBI) guidelines.
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-xl mb-8">
                <h3 className="text-xl font-bold text-red-800 mb-4">Lenders are Strictly Prohibited From:</h3>
                <ul className="space-y-3 text-red-900/80 font-medium text-base">
                  <li>• Calling your contacts or third parties to shame you or disclose your debt.</li>
                  <li>• Using abrasive or threatening language on social media platforms like LinkedIn.</li>
                  <li>• Harassing your relatives or spouse for a company-signed guarantee.</li>
                  <li>• Sending 'Legal Notices' that look like police summons (This is a common tactic).</li>
                  <li>• Creating professional blacklists outside of the official CIBIL system.</li>
                </ul>
              </div>
              <p className="mb-6">
                If your lender (even a venture debt fund) violates these, you have the right to claim damages. In several cases, we have used evidence of lender harassment to wipe out a founder's entire interest liability during settlement. Always record your interactions and preserve your emails.
              </p>
            </section>

            <section id="negotiation-tactics-founders" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Founder-Centric Negotiation: Speak Their Language</h2>
              <p className="mb-6">We don't negotiate like individuals; we negotiate like a CEO. Here are the tactics we use at SettleLoans for our startup founder clients.</p>
              <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 mb-8">
                <h3 className="text-xl font-black text-blue-900 mb-6 text-[var(--color-text-body)]">The 'Last Available Cash' Tactic</h3>
                <p className="mb-6 text-[var(--color-text-body)]">We present a bank manager with a choice: 'Here is 20 lakhs of principal available from the founder's father right now. If you don't take it, the founder will have to declare personal insolvency and you will get zero over the next 10 years.' In 90% of cases, the bank chooses the 20 lakhs today.</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-blue-100 text-center">
                    <span className="block text-2xl mb-1">💼</span>
                    <strong className="text-[var(--color-text-body)]">Be Logical</strong>
                    <p className="text-xs text-gray-500">Show them that recovery is mathematically impossible.</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-blue-100 text-center">
                    <span className="block text-2xl mb-1">✍️</span>
                    <strong className="text-[var(--color-text-body)]">Paper Trail</strong>
                    <p className="text-xs text-gray-500">Every settlement promise must be on an official letterhead.</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-blue-100 text-center">
                    <span className="block text-2xl mb-1">🤫</span>
                    <strong className="text-[var(--color-text-body)]">Stay Silent</strong>
                    <p className="text-xs text-gray-500">Don't disclose your next high-paying job until after the settlement.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="founder-success-stories" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Case Studies: The Refounded Founders</h2>
              <div className="grid md:grid-cols-2 gap-6 not-prose">
                {[
                  {
                    name: "Rahul M.",
                    loc: "Bangalore",
                    type: "Venture Debt + Guarantees",
                    outcome: "Settled for 60% Principal waiver",
                    story: "My ed-tech startup failed during the funding winter. I had 2 crores of guaranteed debt. SettleLoans showed the bank my true asset picture and got me a settlement for 80 lakhs. I am now a product lead at a unicorn, debt-free."
                  },
                  {
                    name: "Sanya G.",
                    loc: "Delhi",
                    type: "MSME Bank Loan",
                    outcome: "100% Interest & Penalty Waiver",
                    story: "I signed a personal guarantee for our D2C brand's inventory loan. When the brand hit a wall, the bank sent recovery agents to my parents' home. SettleLoans stopped the harassment in 48 hours and negotiated a fair settlement."
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
                      <div className="ml-auto text-yellow-500">★★★★★</div>
                    </div>
                    <div className="mb-4 text-xs font-mono bg-green-50 p-2 rounded border border-green-100 uppercase tracking-tighter">
                      <span className="block text-green-700 font-bold">{review.outcome}</span>
                    </div>
                    <p className="text-sm text-gray-600 italic leading-relaxed">"{review.story}"</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="why-settleloans-founders" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Why SettleLoans is the Choice for Founders</h2>
              <p className="mb-6 leading-relaxed">At SettleLoans, we speak the language of founders. We know the difference between 'Venture Debt' and 'Equity'. We know the impact of personal guarantees on your next fundraising round. Our team includes banking experts who have approved thousands of business settlements and legal experts who know how to shut down recovery harassment permanently.</p>
              <div className="bg-[#2E2E2E] text-white p-8 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold mb-4">Our Commitment to Founder Resilience</h3>
                <ul className="space-y-3 text-sm opacity-90">
                  <li className="flex items-start gap-2">✓ Shield Your Assets: We prioritize protection of your primary residence and basic life savings.</li>
                  <li className="flex items-start gap-2">✓ Professional Shield: We take 100% of the lender communication, allowing you to focus on your next job or startup.</li>
                  <li className="flex items-start gap-2">✓ Zero Harassment: We ensure your reputation among investors and the industry remains untouched during the process.</li>
                  <li className="flex items-start gap-2">✓ Maximum Relief: We aim for at least 40% to 70% reduction in your total guaranteed exposure.</li>
                </ul>
              </div>
              <p className="font-bold text-lg text-center p-6 bg-blue-50 rounded-xl border border-blue-100 italic">
                \"Successful founders aren't those who never fall; they're the ones who settle their falls professionally and start again.\"
              </p>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4 not-prose">
                {[
                  { q: "Can I settle my startup debt if I am now a salaried employee?", a: "Yes. In fact, many banks prefer a settlement once you have a stable job as they can see exactly what your 'repayment capacity' is. We ensure your salary account is never frozen during the process." },
                  { q: "Will the bank tell my new boss about the settlement?", a: "No. Lenders are legally prohibited from contacting your current employer to disclose your debt or settlement status. Your financial life remains private." },
                  { q: "How much of my startup debt can be waived?", a: "Normally, between 40% and 70% of the total amount can be waived in a professional settlement, especially if business failure is clearly documented." },
                  { q: "Is a settlement better than declaring personal bankruptcy?", a: "Yes, infinitely better. Bankruptcy is a lifelong legal label that makes you ineligible for many roles and board positions. Settlement is a private commercial agreement that closes the file forever." },
                  { q: "Can my co-founder use my settlement to pay less?", a: "If the settlement is 'Individual', it might only release you. We always aim for 'Joint and Several Release' so the entire founder team is protected." },
                  { q: "Should I close my startup before settling the bank loan?", a: "Sometimes yes, sometimes no. We analyze your situation and tell you the best timing. If you settle while the company is still active, you might get a better restructuring deal." },
                  { q: "What if the venture debt fund has my equity warrants?", a: "In a settlement, warrants are usually cancelled or priced at zero. We negotiate a total exit for you, including all equity-linked debt clauses." },
                  { q: "Does the GST department also settle dues?", a: "No, government taxes (GST/Income Tax) do not settle like bank loans. These must be prioritised. We help you resolve the bank debt so you have cash to pay your tax liabilities." },
                  { q: "Will I ever get a credit card again?", a: "Yes. After about 12-24 months of a settlement, you can get 'Secured Credit Cards'. Within 3 years, many of our clients are back to having 750+ CIBIL scores." },
                  { q: "How much does SettleLoans charge founders?", a: "We have a transparent, success-linked fee model. We only prosper when you achieve meaningful debt relief. Contact us for a precise quote based on your debt volume." }
                ].map((faq, i) => (
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

            <div className="mt-16 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-400 text-sm italic">Disclaimer: SettleLoans is a professional consultancy. We represent the interests of the borrower. Results depend on individual bank policies and the genuine nature of financial hardship.</p>
            </div>

            {/* Mobile CTA */}
            <div className="lg:hidden mt-16 mb-8">
              <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#1F5EFF]/20">
                <div className="bg-[#1F5EFF] p-6 text-center text-white">
                  <h3 className="text-2xl font-black mb-2">Refound Your Life</h3>
                  <p className="opacity-90 text-sm">Don't let startup debt hold you back. Speak to our startup desk today.</p>
                </div>
                <div className="p-8 text-center">
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-xl hover:scale-105 transition-all shadow-lg text-lg">
                    Free Founder Consultation
                  </Link>
                </div>
              </div>
            </div>

          </article>

          {/* Right Column: CTA & Related Pages (Sticky) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <div className="sticky top-24 space-y-8">

              {/* CTA Container */}
              <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                <div className="bg-[#1F5EFF] p-4 text-center">
                  <h3 className="text-lg font-black text-white px-2">Founder Protection</h3>
                </div>
                <div className="p-6 text-center">
                  <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                    Close your startup debt and protect your personal assets with 100% legal expertise.
                  </p>
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg">
                    Talk to an Expert
                  </Link>
                  <p className="mt-4 text-xs text-[#DEDEDE]/60 uppercase tracking-widest font-black">Startup Specialist Team</p>
                </div>
              </div>

              {/* Related Pages Container */}
              <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2">Founder Resources</h3>
                <ul className="space-y-4 text-sm font-bold">
                  <li>
                    <Link href="/SME-loan-dispute-resolution" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      SME Dispute Resolution
                    </Link>
                  </li>
                  <li>
                    <Link href="/drt-notice-reply" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      DRT Notice Defense
                    </Link>
                  </li>
                  <li>
                    <Link href="/startup-loan-legal-advisory" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      Startup Legal Advisory
                    </Link>
                  </li>
                  <li>
                    <Link href="/best-lawyer-for-msme-business-loan-dispute" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      Business Loan Disputes
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
          </aside>

        </div>

        {/* Bottom CTA Section */}
        <section className="w-full bg-[#1F5EFF] py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Your Vision Deserves a Second Chance.</h2>
                <p className="text-white/90 text-lg md:text-xl mb-10">Don't let yesterday's startup debt stop tomorrow's breakthrough. Let us handle the banks while you find your next move.</p>
                <Link href="/contact" className="inline-block bg-white text-[#1F5EFF] font-black py-5 px-12 rounded-xl text-xl hover:scale-105 transition-all shadow-2xl">
                    Get a Free Settlement Audit
                </Link>
            </div>
        </section>

      </main>
    </div>
  );
}
