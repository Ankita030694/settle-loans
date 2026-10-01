import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import LoanSettlementAssessmentFunnel from "@/components/LoanSettlementAssessmentFunnel";

export const metadata: Metadata = {
  title: "Commercial Vehicle Loan Settlement | SettleLoans",
  description: "Resolve commercial vehicle, truck, bus, and tractor loan defaults legally. Stop highway repossession and negotiate one-time settlement with lenders.",
  alternates: {
    canonical: "https://www.settleloans.in/commercial-vehicle-loan-settlement",
  },
  openGraph: {
    title: "Commercial Vehicle Loan Settlement | SettleLoans",
    description: "Resolve commercial vehicle, truck, bus, and tractor loan defaults legally. Stop highway repossession and negotiate one-time settlement with lenders.",
    url: "https://www.settleloans.in/commercial-vehicle-loan-settlement",
    type: "article",
    images: [
      {
        url: "https://www.settleloans.in/images/commercial-vehicle-loan-settlement.jpg",
        width: 1200,
        height: 630,
        alt: "Commercial Vehicle Loan Settlement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Vehicle Loan Settlement | SettleLoans",
    description: "Resolve commercial vehicle, truck, bus, and tractor loan defaults legally. Stop highway repossession and negotiate one-time settlement with lenders.",
    images: ["https://www.settleloans.in/images/commercial-vehicle-loan-settlement.jpg"],
  },
};

export default function CommercialVehicleLoanSettlementPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.settleloans.in/commercial-vehicle-loan-settlement#article",
        "headline": "Commercial Vehicle Loan Settlement & Legal Defense in India",
        "description": "Comprehensive legal and debt resolution guide for commercial vehicle, truck, bus, and tractor loan defaults in India.",
        "author": { "@type": "Organization", "name": "SettleLoans" },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": { "@type": "ImageObject", "url": "https://www.settleloans.in/logo.png" }
        },
        "datePublished": "2026-09-30",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.settleloans.in/commercial-vehicle-loan-settlement" }
      },
      {
        "@type": "Product",
        "@id": "https://www.settleloans.in/commercial-vehicle-loan-settlement#product",
        "name": "Commercial Vehicle Debt Resolution & Legal Protection",
        "description": "Strategic debt settlement and legal representation for commercial fleet owners, truck transporters, and tractor operators facing NPA recovery.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1180"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.settleloans.in" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.settleloans.in/#services" },
          { "@type": "ListItem", "position": 3, "name": "Commercial Vehicle Loan Settlement", "item": "https://www.settleloans.in/commercial-vehicle-loan-settlement" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can commercial vehicle and truck loans be settled under OTS?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, commercial vehicle loans for trucks, buses, tippers, and cabs can be settled through a One-Time Settlement (OTS). Financiers frequently agree to structured waivers when fleet revenues decline or operating margins collapse."
            }
          },
          {
            "@type": "Question",
            "name": "Can finance companies seize commercial trucks on highways?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Forceful interception and highway seizure by private recovery agents without court orders or statutory notices violate Supreme Court rulings and fundamental transport laws. Repossession must strictly follow civil due process."
            }
          },
          {
            "@type": "Question",
            "name": "Are agricultural tractors exempt from bank attachment and seizure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under Section 60(1)(b) of the Code of Civil Procedure (CPC), tools of artisans and implements of husbandry necessary for an agriculturist to earn their livelihood are protected from court attachment and distress execution."
            }
          },
          {
            "@type": "Question",
            "name": "How to resolve Shriram Transport Finance commercial vehicle defaults?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Resolution requires an audit of overdue interest versus principal outstanding, issuing formal legal representation against harassment, initiating talks with regional credit committees, and settling under an official compromise sanction letter."
            }
          },
          {
            "@type": "Question",
            "name": "What waiver percentage is common in commercial vehicle settlements?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Commercial vehicle loan waivers generally range from 35% to 60% of total dues, factoring in engine wear, vehicle depreciation, market resale rates, and verified transporter operating deficits."
            }
          },
          {
            "@type": "Question",
            "name": "Can lenders initiate Section 9 arbitration for commercial vehicle loans?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, financiers often invoke Section 9 of the Arbitration and Conciliation Act seeking interim vehicle receivership. Transport borrowers can defend against ex-parte orders by showing genuine hardship and offering structured compromise settlement."
            }
          },
          {
            "@type": "Question",
            "name": "How do I settle Cholamandalam or Mahindra commercial loans?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Approach the regional legal settlement desk with authenticated freight ledger records, audited losses, and a structured OTS offer to waive compound penal charges."
            }
          },
          {
            "@type": "Question",
            "name": "How can I obtain RTO Form 35 for a commercial vehicle after settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "After clearing the negotiated settlement amount, the lender issues an NDC and two signed Form 35 documents. Submit these to the commercial RTO authority to clear hypothecation endorsements and restore full commercial permits."
            }
          },
          {
            "@type": "Question",
            "name": "What should I do if a commercial recovery team threatens my drivers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Instruct drivers never to hand over vehicle keys under physical intimidation. Immediately lodge a formal police complaint for criminal intimidation under BNS/IPC and notify the lender in writing regarding agent illegalities."
            }
          },
          {
            "@type": "Question",
            "name": "Can fleet owners settle multiple vehicle loans together?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, fleet operators facing systemic business downturns can negotiate a consolidated portfolio OTS covering multiple chassis numbers under a single comprehensive settlement agreement."
            }
          }
        ]
      }
    ]
  };

  const tocItems = [
    { id: "commercial-debt-crisis", title: "Commercial Debt Reality" },
    { id: "asset-classes-covered", title: "Commercial Assets Covered" },
    { id: "highway-seizure-legal-shield", title: "Highway Repossession Defense" },
    { id: "tractor-cpc-exemption", title: "Tractor & Agriculture Relief" },
    { id: "major-commercial-lenders", title: "Top Commercial Lenders" },
    { id: "commercial-ots-framework", title: "The Commercial OTS Framework" },
    { id: "arbitration-receivership-defense", title: "Arbitration & Receivership" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const faqs = [
    {
      q: "Can commercial vehicle and truck loans be settled under OTS?",
      a: "Yes, commercial vehicle loans for trucks, buses, tippers, and cabs can be settled through a One-Time Settlement (OTS). Financiers frequently agree to structured waivers when fleet revenues decline or operating margins collapse."
    },
    {
      q: "Can finance companies seize commercial trucks on highways?",
      a: "No. Forceful interception and highway seizure by private recovery agents without court orders or statutory notices violate Supreme Court rulings and fundamental transport laws. Repossession must strictly follow civil due process."
    },
    {
      q: "Are agricultural tractors exempt from bank attachment and seizure?",
      a: "Under Section 60(1)(b) of the Code of Civil Procedure (CPC), tools of artisans and implements of husbandry necessary for an agriculturist to earn their livelihood are protected from court attachment and distress execution."
    },
    {
      q: "How to resolve Shriram Transport Finance commercial vehicle defaults?",
      a: "Resolution requires an audit of overdue interest versus principal outstanding, issuing formal legal representation against harassment, initiating talks with regional credit committees, and settling under an official compromise sanction letter."
    },
    {
      q: "What waiver percentage is common in commercial vehicle settlements?",
      a: "Commercial vehicle loan waivers generally range from 35% to 60% of total dues, factoring in engine wear, vehicle depreciation, market resale rates, and verified transporter operating deficits."
    },
    {
      q: "Can lenders initiate Section 9 arbitration for commercial vehicle loans?",
      a: "Yes, financiers often invoke Section 9 of the Arbitration and Conciliation Act seeking interim vehicle receivership. Transport borrowers can defend against ex-parte orders by showing genuine hardship and offering structured compromise settlement."
    },
    {
      q: "How do I settle Cholamandalam or Mahindra commercial loans?",
      a: "Approach the regional legal settlement desk with authenticated freight ledger records, audited losses, and a structured OTS offer to waive compound penal charges."
    },
    {
      q: "How can I obtain RTO Form 35 for a commercial vehicle after settlement?",
      a: "After clearing the negotiated settlement amount, the lender issues an NDC and two signed Form 35 documents. Submit these to the commercial RTO authority to clear hypothecation endorsements and restore full commercial permits."
    },
    {
      q: "What should I do if a commercial recovery team threatens my drivers?",
      a: "Instruct drivers never to hand over vehicle keys under physical intimidation. Immediately lodge a formal police complaint for criminal intimidation under BNS/IPC and notify the lender in writing regarding agent illegalities."
    },
    {
      q: "Can fleet owners settle multiple vehicle loans together?",
      a: "Yes, fleet operators facing systemic business downturns can negotiate a consolidated portfolio OTS covering multiple chassis numbers under a single comprehensive settlement agreement."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden text-center">
          <div className="max-w-5xl mx-auto relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Commercial Fleet & Transport Relief
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Commercial Vehicle <span className="text-[#1F5EFF]">Loan Settlement</span> Guide
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
              Facing truck, tractor, or commercial fleet loan default? Protect your transport business against illegal highway seizure and negotiate structured OTS settlements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Settle Commercial Debt
              </Link>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-xs md:text-sm text-[#747474]">
                <li><Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link></li>
                <li><span className="text-gray-300">/</span></li>
                <li><Link href="/#services" className="hover:text-[#1F5EFF] transition-colors">Services</Link></li>
                <li><span className="text-gray-300">/</span></li>
                <li className="font-bold text-[#2E2E2E]" aria-current="page">Commercial Vehicle Loan Settlement</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">

          {/* Left Column: TOC */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <TableOfContents items={tocItems} />
          </aside>

          {/* Middle Column: Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">

            <section id="commercial-debt-crisis" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                The Reality of Commercial Transport Debt in India
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6 font-bold">
                  Commercial transport operators, truck fleet owners, and rural tractor drivers operate in one of India&apos;s most capital-intensive and volatile sectors. Unpredictable diesel prices, delayed corporate freight payments, toll expenses, and economic slowdowns often cause sudden liquidity crunches.
                </p>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
                  When a commercial vehicle loan defaults, lenders act with extraordinary speed. Unlike unsecured personal credit, commercial vehicles are income-generating assets hypothecated to financiers. Lenders deploy specialized &lsquo;repo spotters&rsquo; along transit corridors and national highways to intercept and impound vehicles without formal judicial process.
                </p>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
                  Seizing an active commercial vehicle immediately paralyzes the operator&apos;s cash flow, making debt repayment impossible. SettleLoans provides structured legal representation to halt illegal repossession, defend transport livelihoods, and negotiate mutually viable One-Time Settlements (OTS).
                </p>
              </div>
            </section>

            {/* In-Page Interactive Assessment Funnel */}
            <div className="mb-16">
              <LoanSettlementAssessmentFunnel />
            </div>

            <section id="asset-classes-covered" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Commercial Asset Classes We Settle
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
                  Our commercial debt advisory handles complex debt workouts across diverse heavy and medium commercial vehicle categories:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Heavy Commercial Trucks & Tippers</h3>
                    <p className="text-sm text-slate-600">Multi-axle haulage trucks (Tata, BharatBenz, Ashok Leyland) and mining tippers facing high interest burdens and idle route contracts.</p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Agricultural Tractors & Implements</h3>
                    <p className="text-sm text-slate-600">Mahindra, Swaraj, and Sonalika tractor loans with specialized legal defense under agricultural debtor protection acts.</p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Commercial Passenger Cabs & Buses</h3>
                    <p className="text-sm text-slate-600">Tourist buses, staff transportation coaches, and commercial taxi fleet loans facing seasonal revenue contractions.</p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Construction JCBs & Earthmovers</h3>
                    <p className="text-sm text-slate-600">Backhoe loaders, excavators, and infrastructure equipment financing with structured principal compromise plans.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="highway-seizure-legal-shield" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Highway Repossession & Borrower Legal Rights
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
                  Transporters frequently report that recovery squads intercept trucks mid-transit, force drivers off steering wheels, and impound cargo. The legal reality is clear:
                </p>
                <ul className="space-y-4 mb-6 text-base text-[var(--color-text-body)]">
                  <li className="flex items-start">
                    <span className="w-2.5 h-2.5 bg-[#1F5EFF] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span><strong>Prohibition of Third-Party Highway Seizure:</strong> The Supreme Court in <em>Citicorp Maruti Finance Ltd. v. S. Vijayalaxmi</em> established that hire-purchase and hypothecation lenders cannot resort to musclemen to take possession of moving vehicles.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2.5 h-2.5 bg-[#1F5EFF] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span><strong>Protection of Third-Party Goods:</strong> Seizing a loaded commercial truck constitutes unlawful detention of consignor goods, exposing collection agencies to severe criminal liability.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2.5 h-2.5 bg-[#1F5EFF] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span><strong>Statutory Pre-Sale Valuation Notice:</strong> Even if lawful possession is executed, lenders cannot auction the vehicle privately without providing the borrower formal notice with an audited valuation report.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="tractor-cpc-exemption" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Section 60 CPC Protections for Agricultural Tractors
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
                  Rural borrowers and farming families financing tractors enjoy special statutory safeguards under Indian jurisprudence:
                </p>
                <div className="p-6 bg-blue-50 border-l-4 border-[#1F5EFF] rounded-r-xl mb-6">
                  <h3 className="text-xl font-bold text-[#1F5EFF] mb-2">Code of Civil Procedure, Section 60(1)(b)</h3>
                  <p className="text-base text-slate-700">
                    The law explicitly protects the implements of husbandry, livestock, and necessary seed grain of an agriculturist from judicial execution and civil attachment. When a tractor is essential for agricultural livelihood, arbitrary seizure by rural NBFCs can be restrained in court.
                  </p>
                </div>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)]">
                  We use these statutory protections to counter aggressive rural recovery agents, shield farming implements, and open compromise discussions on reasonable principal terms.
                </p>
              </div>
            </section>

            <section id="major-commercial-lenders" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Top Commercial Vehicle Financiers Handled
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-slate-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Shriram Finance (STFC)</h3>
                    <p className="text-sm text-slate-600">The largest commercial vehicle financier in India. We represent transporters in structured OTS workouts, halting repetitive telecalling and regional court notices.</p>
                  </div>
                  <div className="border border-slate-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Cholamandalam Investment & Finance</h3>
                    <p className="text-sm text-slate-600">Specializing in Chola heavy haulage and tipper settlements. We audit overdue statement ledgers to secure deep interest waivers.</p>
                  </div>
                  <div className="border border-slate-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Mahindra & Mahindra Financial Services</h3>
                    <p className="text-sm text-slate-600">Handling tractor, pickup, and commercial light transport vehicle defaults with compromise sanction protocols.</p>
                  </div>
                  <div className="border border-slate-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">L&T Finance & ICICI Bank</h3>
                    <p className="text-sm text-slate-600">Resolving institutional fleet defaults, commercial line facilities, and highway transit financing with senior risk committees.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="commercial-ots-framework" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                The Commercial One-Time Settlement Framework
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
                  When negotiating a commercial vehicle settlement, financiers evaluate the asset&apos;s real liquidated value versus the cost of legal litigation and yard maintenance:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-slate-300 bg-slate-50">
                        <th className="py-3 px-4 font-bold text-[#2E2E2E]">Asset Category</th>
                        <th className="py-3 px-4 font-bold text-[#2E2E2E]">Key Negotiation Factor</th>
                        <th className="py-3 px-4 font-bold text-[#2E2E2E]">Waiver Range</th>
                        <th className="py-3 px-4 font-bold text-[#2E2E2E]">Resolution Horizon</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr>
                        <td className="py-3 px-4">Tractors (Agricultural)</td>
                        <td className="py-3 px-4">Sec 60 CPC shield & seasonal harvest cycles</td>
                        <td className="py-3 px-4 font-bold text-blue-600">40% - 55%</td>
                        <td className="py-3 px-4">4 to 8 Weeks</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Single Commercial Trucks</td>
                        <td className="py-3 px-4">Engine depreciation, tyre wear, yard parking costs</td>
                        <td className="py-3 px-4 font-bold text-blue-600">35% - 50%</td>
                        <td className="py-3 px-4">6 to 10 Weeks</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Multi-Chassis Commercial Fleets</td>
                        <td className="py-3 px-4">Consolidated business hardship & bulk portfolio OTS</td>
                        <td className="py-3 px-4 font-bold text-emerald-600">45% - 60%</td>
                        <td className="py-3 px-4">8 to 12 Weeks</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="arbitration-receivership-defense" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Arbitration Notices & Receivership Defense
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
                  Lenders frequently issue arbitration notices and seek Section 9 interim orders to appoint an advocate-receiver to take physical possession of commercial chassis.
                </p>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
                  Our legal team steps in to file formal objections against unilateral arbitrator appointments, contest high claim amounts, and direct the forum toward an amicable compromise settlement. This protects your vehicles on the road while settlement terms are finalized.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    name="faq-accordion"
                    className="group border border-[#DEDEDE] rounded-2xl bg-white overflow-hidden transition-all duration-200"
                  >
                    <summary className="flex justify-between items-center p-6 cursor-pointer text-lg font-bold text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span>{faq.q}</span>
                      <span className="ml-4 transform group-open:rotate-180 transition-transform text-[#1F5EFF]">
                        ▼
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-[#2E2E2E] opacity-90 leading-relaxed border-t border-[#DEDEDE] pt-4 font-medium text-base">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Bottom CTA Box */}
            <div className="mt-16 p-8 bg-[#1F5EFF] rounded-3xl text-white text-center">
              <h3 className="text-3xl font-black mb-4">Protect Your Transport Business Today</h3>
              <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">
                Do not allow illegal highway seizures to ruin your commercial livelihood. Let SettleLoans defend your fleet and negotiate a sustainable debt settlement.
              </p>
              <Link href="/contact" className="inline-block bg-white text-[#1F5EFF] font-black py-4 px-10 rounded-xl hover:scale-105 transition-all text-lg shadow-2xl">
                Request Fleet Debt Consultation
              </Link>
            </div>

          </article>

          {/* Right Column: Sticky Widgets */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <div className="sticky top-24 space-y-8">

              {/* CTA Box */}
              <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                <div className="bg-[#1F5EFF] p-4 text-center">
                  <div className="text-lg font-black text-white px-2">Transport Fleet Shield</div>
                </div>
                <div className="p-8 text-center">
                  <p className="mb-8 text-sm text-[#DEDEDE] opacity-90 leading-relaxed font-bold">
                    Facing commercial vehicle loan recovery or court receivership notices? Get strategic legal defense and structured compromise.
                  </p>
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-4 rounded-[12px] hover:scale-105 transition-all shadow-md group-hover:shadow-2xl">
                    Defend My Fleet
                  </Link>
                  <p className="mt-6 text-[10px] text-[#DEDEDE]/60 uppercase tracking-[0.3em] font-black">Commercial Transport Advisory</p>
                </div>
              </div>

              {/* Related Guides */}
              <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                <div className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2 text-center">Related Vehicle Guides</div>
                <ul className="space-y-4 text-sm font-extrabold px-2">
                  <li>
                    <Link href="/two-wheeler-loan-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight">
                      <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors flex-shrink-0"></span>
                      Two-Wheeler Loan Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/car-loan-repossession-and-shortfall-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight">
                      <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors flex-shrink-0"></span>
                      Car Loan Shortfall Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/vehicle-seizure-overdue-loan-documents-repo-agent-rules" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight">
                      <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors flex-shrink-0"></span>
                      Repo Agent Verification Rules
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
