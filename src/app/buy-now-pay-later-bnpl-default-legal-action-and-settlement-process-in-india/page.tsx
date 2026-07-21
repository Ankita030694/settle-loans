import type { Metadata } from "next";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Buy Now Pay Later (BNPL) Defaults: Legal Action and Settlement Process in India",
  description: "Learn about the consequences of defaulting on BNPL apps like Amazon Pay Later, Simpl, or ZestMoney. Understand legal actions, CIBIL score drop, and how to negotiate a debt settlement.",
  alternates: {
    canonical: "https://www.settleloans.in/buy-now-pay-later-bnpl-default-legal-action-and-settlement-process-in-india",
  },
};

export default function BNPLDefaultPage() {
  const tocItems = [
    { id: "introduction", title: "The Reality of BNPL Defaults" },
    { id: "legal-status", title: "BNPL Legal Status in India" },
    { id: "consequences", title: "Consequences of Defaulting" },
    { id: "cibil-impact", title: "The Massive CIBIL Score Impact" },
    { id: "legal-action", title: "Legal Actions by BNPL Platforms" },
    { id: "settlement-process", title: "How to Settle BNPL Debt" },
    { id: "success-stories", title: "Success Stories" },
    { id: "faqs", title: "Frequently Asked Questions" }
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Buy Now Pay Later (BNPL) Defaults: Legal Action and Settlement Process in India",
      "description": "Explains how BNPL apps are legally backed by traditional NBFCs, meaning a default on a BNPL purchase ruins a CIBIL score and outlines how to negotiate a rapid settlement.",
      "url": "https://www.settleloans.in/buy-now-pay-later-bnpl-default-legal-action-and-settlement-process-in-india"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.settleloans.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Loan Settlement",
          "item": "https://www.settleloans.in/loan-settlement"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "BNPL Defaults & Settlement Process",
          "item": "https://www.settleloans.in/buy-now-pay-later-bnpl-default-legal-action-and-settlement-process-in-india"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Buy Now Pay Later (BNPL) Defaults: Legal Action and Settlement Process in India",
      "author": {
        "@type": "Organization",
        "name": "SettleLoans"
      },
      "publisher": {
        "@type": "Organization",
        "name": "SettleLoans",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.settleloans.in/logo.png"
        }
      },
      "datePublished": "2024-01-01T00:00:00Z",
      "dateModified": "2024-01-01T00:00:00Z"
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "BNPL Debt Settlement Services",
      "description": "Professional debt negotiation and settlement for micro-loans from Amazon Pay Later, Simpl, ZestMoney, and other BNPL providers.",
      "brand": {
        "@type": "Brand",
        "name": "SettleLoans"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "2104"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can a ₹10,000 BNPL default ruin my CIBIL score?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Even a small default of ₹5,000 or ₹10,000 on BNPL platforms is reported to credit bureaus as a defaulted personal loan by their partner NBFCs, leading to a massive drop in your CIBIL score."
          }
        },
        {
          "@type": "Question",
          "name": "Will Amazon Pay Later take legal action against me for default?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Amazon Pay Later's lending partners (like IDFC FIRST Bank or axio) can and will take legal action, send legal notices, and employ recovery agents if you default on your BNPL dues."
          }
        },
        {
          "@type": "Question",
          "name": "How can I settle my Simpl or ZestMoney default?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can negotiate a settlement with the underlying NBFC backing your BNPL account. This involves demonstrating financial hardship and offering a one-time payment, often resulting in a waiver of penalties and a portion of the principal."
          }
        },
        {
          "@type": "Question",
          "name": "Are BNPL loans considered unsecured personal loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, legally, Buy Now Pay Later facilities are categorized as short-term, unsecured personal loans disbursed by RBI-registered NBFCs or banks."
          }
        },
        {
          "@type": "Question",
          "name": "Can I go to jail for defaulting on a BNPL loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, you cannot go to jail simply for defaulting on a BNPL loan, as it is a civil matter. However, ignoring legal notices or giving a bounced security cheque (if any) can lead to different legal complications."
          }
        },
        {
          "@type": "Question",
          "name": "Can BNPL recovery agents harass my contacts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. RBI guidelines strictly prohibit recovery agents from harassing your family, friends, or workplace. If they do, you can file a complaint with the cyber cell and the RBI Ombudsman."
          }
        },
        {
          "@type": "Question",
          "name": "Does settling a BNPL debt remove it from my CIBIL report?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. When you settle the debt, the status changes from 'Default' to 'Settled' on your CIBIL report, which still carries a negative impact but stops further legal and recovery actions."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a BNPL settlement process take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The negotiation process can take anywhere from a few weeks to a few months, depending on the lender, the age of the default, and how effectively you negotiate."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if I ignore calls from BNPL recovery agents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ignoring calls usually leads to aggressive escalation, including legal notices to your registered address and a continuous negative reporting cycle to your CIBIL score."
          }
        },
        {
          "@type": "Question",
          "name": "Can a debt settlement company help me with BNPL loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, specialized negotiators can consolidate multiple BNPL defaults and communicate directly with the NBFCs to secure a structured and highly discounted settlement on your behalf."
          }
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              BNPL Defaults & Settlement
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Buy Now Pay Later Defaults: <span className="text-[#1F5EFF]">Legal Action & Settlement</span> in India
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              A ₹10,000 BNPL default destroys your CIBIL score exactly like a massive bank loan default. Discover how to stop legal action and settle your micro-loans at a steep discount.
            </p>
            <Link href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Get Immediate Help
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-3 flex items-center gap-2">
            <Link href="/" className="text-xs md:text-sm text-[#747474] hover:text-[#1F5EFF] transition-colors">Home</Link>
            <span className="text-gray-300">/</span>
            <Link href="/services" className="text-xs md:text-sm text-[#747474] hover:text-[#1F5EFF] transition-colors">Services</Link>
            <span className="text-gray-300">/</span>
            <span className="text-xs md:text-sm font-bold text-[#2E2E2E]">BNPL Legal Action & Settlement Process</span>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">
          
          {/* Left Sidebar (TOC) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>

          {/* Middle Article Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            {/* Boxed Intro */}
            <section id="introduction" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  The Exploding Crisis of BNPL Defaults
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The convenience of "one-click checkout" has trapped an exploding demographic of young Indians in a cycle of high-interest Buy Now Pay Later (BNPL) micro-loans. Apps like Amazon Pay Later, Simpl, ZestMoney, and Lazypay have made credit incredibly accessible, but many users are entirely unaware of the severe consequences of missing a payment.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Because these apps market themselves as mere checkout tools rather than formal lending institutions, borrowers often assume a missed payment will simply result in an account suspension. The reality is far more severe: defaulting on a tiny ₹10,000 BNPL purchase will invoke aggressive recovery tactics, legal notices, and immediate destruction of your CIBIL score.
                </p>
              </div>
            </section>

            <section id="legal-status" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The Legal Reality of BNPL Apps
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                BNPL platforms are not banks themselves; they are technology frontends backed by traditional Non-Banking Financial Companies (NBFCs) and major banks (like IDFC FIRST Bank, axio, or Aditya Birla Finance).
              </p>
              
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Why This Matters</h4>
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-blue-900 m-0">When you sign up for Amazon Pay Later or ZestMoney, you are legally signing a binding loan agreement with an RBI-regulated lender.</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-blue-900 m-0">The loan is classified as an unsecured personal loan on your credit report.</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-blue-900 m-0">The NBFC has the exact same legal rights to pursue recovery as a traditional bank offering a massive personal loan.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="consequences" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Amazon Pay Later & Simpl: Default Consequences
              </h2>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h3 className="text-xl font-black text-red-700 mb-2">The Snowball Effect of Late Fees</h3>
                <p className="text-red-900">
                  A small default rapidly balloons out of control. BNPL platforms charge exorbitant late payment fees and penal interest (often scaling up to 36% annually or more). A ₹5,000 pending bill can easily double in a matter of months.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-2">Platform Bans</h3>
                  <p className="text-gray-700">Immediate suspension of your BNPL account. Platforms associated with e-commerce giants (like Amazon) may restrict your primary shopping accounts or cash-on-delivery options.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-2">Aggressive Recovery</h3>
                  <p className="text-gray-700">The NBFC will deploy third-party recovery agencies. Expect relentless automated calls, text messages, and potential home visits demanding payment.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-2">Legal Notices</h3>
                  <p className="text-gray-700">Formal demand notices under various sections of the law will be sent to your permanent address, often causing distress to family members.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-2">Cross-Platform Impact</h3>
                  <p className="text-gray-700">Other lending apps will instantly recognize the default, dropping your eligibility for any future credit across the entire Indian financial ecosystem.</p>
                </div>
              </div>
            </section>

            <section id="cibil-impact" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The Disproportionate CIBIL Score Drop
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The most severe penalty for a BNPL default is the immediate and devastating impact on your credit history. The CIBIL algorithm does not distinguish between a ₹20,00,000 personal loan default and a ₹10,000 BNPL default. 
              </p>
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Why Micro-Defaults Hurt So Much</h3>
                <p className="text-gray-700 leading-relaxed">
                  A missed payment is reported as Days Past Due (DPD). If the account goes to a Non-Performing Asset (NPA) status (usually after 90 days), your CIBIL score will plummet by 50 to 100 points instantly. Because BNPL limits are small, having an active default signals to other banks that your financial distress is so severe that you cannot even clear a micro-loan, making you a hyper-risk borrower.
                </p>
              </div>
            </section>

            <section id="legal-action" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Legal Action by BNPL Platforms
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                If the debt remains unpaid, the NBFC backing the BNPL service (such as axio, Karur Vysya Bank, IDFC, etc.) will initiate standard legal recovery protocols.
              </p>
              <div className="space-y-4 mb-8">
                <p className="text-lg leading-relaxed"><strong>1. Demand Notices:</strong> You will receive a legal notice demanding payment within 7-15 days.</p>
                <p className="text-lg leading-relaxed"><strong>2. Arbitration:</strong> Many BNPL contracts include an arbitration clause. They may initiate proceedings and secure an ex-parte award against you if you fail to appear.</p>
                <p className="text-lg leading-relaxed"><strong>3. Section 138/Section 25:</strong> If you mandated an auto-debit (NACH/ECS) that bounced due to insufficient funds, they might file a criminal case under Section 25 of the Payment and Settlement Systems Act, which operates similarly to cheque bounce laws.</p>
              </div>
            </section>

            <section id="settlement-process" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How to Settle Buy Now Pay Later Debt
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                If you are trapped in a debt spiral with multiple BNPL apps, a formal debt settlement is the fastest way to stop the harassment and close the accounts permanently.
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Consolidate the Mess</h3>
                    <p className="text-lg text-gray-700">Most defaulters have 3-4 different BNPL apps active. List out the exact principal outstanding for each app, completely separating it from the absurd penalty charges they have added.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Halt Recovery Harassment</h3>
                    <p className="text-lg text-gray-700">Send an official communication to the NBFC's grievance officer (not the app's customer support) citing RBI guidelines against harassment and stating your intent to settle due to extreme financial hardship.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Negotiate the Waiver</h3>
                    <p className="text-lg text-gray-700">NBFCs know that pursuing legal action for a ₹15,000 debt costs them more than the debt itself. Professional negotiators can often secure a complete waiver of all late fees, penalties, and even a 40-50% discount on the original principal amount.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">4</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Get the Settlement Letter</h3>
                    <p className="text-lg text-gray-700">Never pay based on a phone call with a recovery agent. Demand a formal Settlement Letter from the NBFC explicitly stating the agreed amount will be considered as "Full and Final Settlement". Once paid, ensure your CIBIL updates to "Settled" status.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Client Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Story 1 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-black text-xl transition-colors">
                      R
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2E2E2E]">Rahul S.</h4>
                      <div className="flex text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mb-4 text-sm font-bold">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full">Demand: ₹42,000</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">Settled: ₹16,500</span>
                  </div>
                  <p className="text-gray-600">"I had defaults on Lazypay and Amazon Pay Later. The late fees were insane. The team consolidated both debts, stopped the abusive calls, and settled it for a fraction of the demanded amount."</p>
                </div>
                
                {/* Story 2 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-black text-xl transition-colors">
                      N
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2E2E2E]">Neha P.</h4>
                      <div className="flex text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mb-4 text-sm font-bold">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full">Demand: ₹28,500</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">Settled: ₹12,000</span>
                  </div>
                  <p className="text-gray-600">"Got a legal notice from Simpl's NBFC partner. Terrified, I contacted SettleLoans. They guided me through the process and successfully secured a settlement letter within 40 days."</p>
                </div>
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: "Can a ₹10,000 BNPL default ruin my CIBIL score?", a: "Yes. Even a small default of ₹5,000 or ₹10,000 on BNPL platforms is reported to credit bureaus as a defaulted personal loan by their partner NBFCs, leading to a massive drop in your CIBIL score." },
                  { q: "Will Amazon Pay Later take legal action against me for default?", a: "Yes, Amazon Pay Later's lending partners (like IDFC FIRST Bank or axio) can and will take legal action, send legal notices, and employ recovery agents if you default on your BNPL dues." },
                  { q: "How can I settle my Simpl or ZestMoney default?", a: "You can negotiate a settlement with the underlying NBFC backing your BNPL account. This involves demonstrating financial hardship and offering a one-time payment, often resulting in a waiver of penalties and a portion of the principal." },
                  { q: "Are BNPL loans considered unsecured personal loans?", a: "Yes, legally, Buy Now Pay Later facilities are categorized as short-term, unsecured personal loans disbursed by RBI-registered NBFCs or banks." },
                  { q: "Can I go to jail for defaulting on a BNPL loan?", a: "No, you cannot go to jail simply for defaulting on a BNPL loan, as it is a civil matter. However, ignoring legal notices or giving a bounced security cheque (if any) can lead to different legal complications." },
                  { q: "Can BNPL recovery agents harass my contacts?", a: "No. RBI guidelines strictly prohibit recovery agents from harassing your family, friends, or workplace. If they do, you can file a complaint with the cyber cell and the RBI Ombudsman." },
                  { q: "Does settling a BNPL debt remove it from my CIBIL report?", a: "No. When you settle the debt, the status changes from 'Default' to 'Settled' on your CIBIL report, which still carries a negative impact but stops further legal and recovery actions." },
                  { q: "How long does a BNPL settlement process take?", a: "The negotiation process can take anywhere from a few weeks to a few months, depending on the lender, the age of the default, and how effectively you negotiate." },
                  { q: "What happens if I ignore calls from BNPL recovery agents?", a: "Ignoring calls usually leads to aggressive escalation, including legal notices to your registered address and a continuous negative reporting cycle to your CIBIL score." },
                  { q: "Can a debt settlement company help me with BNPL loans?", a: "Yes, specialized negotiators can consolidate multiple BNPL defaults and communicate directly with the NBFCs to secure a structured and highly discounted settlement on your behalf." }
                ].map((faq, i) => (
                  <div key={i} className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-lg text-[#2E2E2E] mb-2">{faq.q}</h3>
                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black mb-6">Trapped in Multiple BNPL Defaults?</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Trapped in a cycle of high-interest Buy Now Pay Later (BNPL) debt from multiple apps? Let our negotiators consolidate and settle your micro-loans at a massive discount.
                </p>
                <Link href="#contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-xl hover:scale-105 transition-transform text-lg shadow-xl shadow-[#1F5EFF]/20">
                  Get a Free Settlement Evaluation
                </Link>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The information provided on this page is for educational purposes only and does not constitute legal or financial advice. We do not provide loans. Settlement outcomes vary depending on individual circumstances and the policies of the respective NBFCs.
              </p>
            </div>

          </article>

          {/* Right Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-4">Stop The Harassment</h3>
                  <p className="text-gray-300 text-sm mb-6">
                    Our legal experts can block recovery agents and negotiate a formal settlement with BNPL platforms.
                  </p>
                  <Link href="#contact" className="block w-full bg-[#1F5EFF] text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition-colors">
                    Consult Now
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">Related Resources</h4>
                <div className="space-y-4">
                  <Link href="/what-is-personal-loan-settlement" className="flex items-center group">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                    <span className="text-sm text-gray-600 group-hover:text-[#1F5EFF] transition-colors font-medium">Personal Loan Settlement</span>
                  </Link>
                  <Link href="/how-to-stop-loan-recovery-harassment" className="flex items-center group">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                    <span className="text-sm text-gray-600 group-hover:text-[#1F5EFF] transition-colors font-medium">Stop Recovery Harassment</span>
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="flex items-center group">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                    <span className="text-sm text-gray-600 group-hover:text-[#1F5EFF] transition-colors font-medium">Handling Legal Notices</span>
                  </Link>
                  <Link href="/credit-score-improvement" className="flex items-center group">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                    <span className="text-sm text-gray-600 group-hover:text-[#1F5EFF] transition-colors font-medium">Rebuild CIBIL Score</span>
                  </Link>
                </div>
              </div>

            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}
