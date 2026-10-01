import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import LoanSettlementAssessmentFunnel from "@/components/LoanSettlementAssessmentFunnel";

export const metadata: Metadata = {
  title: "Vehicle Repossession Laws in India | SettleLoans",
  description: "Facing vehicle seizure or recovery harassment? Understand Supreme Court repossession judgments, RBI borrower rules, and emergency legal protections.",
  alternates: {
    canonical: "https://www.settleloans.in/vehicle-repossession-laws-india",
  },
  openGraph: {
    title: "Vehicle Repossession Laws in India | SettleLoans",
    description: "Facing vehicle seizure or recovery harassment? Understand Supreme Court repossession judgments, RBI borrower rules, and emergency legal protections.",
    url: "https://www.settleloans.in/vehicle-repossession-laws-india",
    type: "article",
    images: [
      {
        url: "https://www.settleloans.in/images/vehicle-repossession-laws.jpg",
        width: 1200,
        height: 630,
        alt: "Vehicle Repossession Laws India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vehicle Repossession Laws in India | SettleLoans",
    description: "Facing vehicle seizure or recovery harassment? Understand Supreme Court repossession judgments, RBI borrower rules, and emergency legal protections.",
    images: ["https://www.settleloans.in/images/vehicle-repossession-laws.jpg"],
  },
};

export default function VehicleRepossessionLawsPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.settleloans.in/vehicle-repossession-laws-india#article",
        "headline": "Vehicle Repossession Laws & Borrower Legal Rights in India",
        "description": "Comprehensive legal analysis of vehicle repossession laws, landmark Supreme Court rulings, RBI guidelines, and defense against illegal recovery seizure in India.",
        "author": { "@type": "Organization", "name": "SettleLoans" },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": { "@type": "ImageObject", "url": "https://www.settleloans.in/logo.png" }
        },
        "datePublished": "2026-09-30",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.settleloans.in/vehicle-repossession-laws-india" }
      },
      {
        "@type": "Product",
        "@id": "https://www.settleloans.in/vehicle-repossession-laws-india#product",
        "name": "Emergency Vehicle Repossession Legal Defense",
        "description": "Urgent legal protection against unauthorized vehicle towing, forceful repossession, and recovery agent harassment under Indian banking laws.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1650"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.settleloans.in" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.settleloans.in/#services" },
          { "@type": "ListItem", "position": 3, "name": "Vehicle Repossession Laws", "item": "https://www.settleloans.in/vehicle-repossession-laws-india" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the landmark Supreme Court judgement on vehicle repossession?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In ICICI Bank v. Prakash Kaur (2007) and Citicorp Maruti Finance v. S. Vijayalaxmi (2012), the Supreme Court ruled that banks cannot use musclemen or force to repossess vehicles. Repossession without proper written notice and due legal process is illegal and unconstitutional."
            }
          },
          {
            "@type": "Question",
            "name": "How many EMI bounces allow a bank to seize a vehicle?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A vehicle loan typically enters default after 90 consecutive days of unpaid EMIs (3 defaulted EMIs), when it is classified as a Non-Performing Asset (NPA). Even after NPA classification, lenders cannot repossess without serving a formal 60-day demand notice."
            }
          },
          {
            "@type": "Question",
            "name": "Can Bajaj recovery agents seize my vehicle or personal property?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Recovery agents have zero legal authority to seize personal property or take away vehicles on the spot. Only a court-appointed receiver or an authorized officer following statutory notice protocols can take possession."
            }
          },
          {
            "@type": "Question",
            "name": "What are the RBI guidelines on repossession of vehicles?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "RBI Master Directions mandate that lenders must maintain a transparent recovery policy, provide prior written notice, allow borrowers time to repay, record vehicle inventory at the time of repossession, and prohibit recovery visits between 7 PM and 8 AM."
            }
          },
          {
            "@type": "Question",
            "name": "What is Section 176 of the Indian Contract Act for seized vehicles?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Section 176 provides the borrower with the Statutory Right of Redemption. Before the financier auctions the repossessed vehicle, the borrower has the legal right to redeem the asset by paying the agreed settlement or clearing outstanding dues."
            }
          },
          {
            "@type": "Question",
            "name": "Can banks seize vehicles for personal loan defaults?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. A vehicle cannot be seized for an unsecured personal loan or credit card default unless that vehicle was explicitly pledged as collateral under a registered hypothecation deed for that specific loan."
            }
          },
          {
            "@type": "Question",
            "name": "What is the procedure for seizure of hypothecated vehicles?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The lawful procedure requires: 1) Account classification as NPA, 2) Formal 60-day default notice, 3) Intimation to the local police station before seizure, 4) Proper inventory sheet signed by witnesses, and 5) Pre-sale valuation notice sent to the borrower."
            }
          },
          {
            "@type": "Question",
            "name": "Can recovery agents tow my car from private parking?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Entering private residential premises or gated society parking without homeowner permission or a civil court warrant constitutes criminal trespass under Indian law."
            }
          },
          {
            "@type": "Question",
            "name": "How to stop car repossession legally?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can halt repossession by serving a legal notice disputing penal charges, citing Supreme Court protections, approaching the consumer court or civil court for an interim injunction, and offering a formal One-Time Settlement."
            }
          },
          {
            "@type": "Question",
            "name": "Can I file an FIR against recovery agents for illegal vehicle snatching?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. If agents forcibly snatch your vehicle keys or use physical threats, you have the legal right to file an FIR for wrongful restraint, extortion, and criminal intimidation under the Bharatiya Nyaya Sanhita (BNS) / IPC."
            }
          }
        ]
      }
    ]
  };

  const tocItems = [
    { id: "repossession-framework", title: "Repossession Law Framework" },
    { id: "supreme-court-rulings", title: "Supreme Court Rulings" },
    { id: "rbi-guidelines-protocol", title: "RBI 5-Step Seizure Protocol" },
    { id: "when-can-bank-seize", title: "When Can a Bank Seize?" },
    { id: "unsecured-vs-secured-protection", title: "Unsecured Loan Protection" },
    { id: "section-176-redemption", title: "Section 176 Right of Redemption" },
    { id: "emergency-defense-steps", title: "Emergency Defense Protocol" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const faqs = [
    {
      q: "What is the landmark Supreme Court judgement on vehicle repossession?",
      a: "In ICICI Bank v. Prakash Kaur (2007) and Citicorp Maruti Finance v. S. Vijayalaxmi (2012), the Supreme Court ruled that banks cannot use musclemen or force to repossess vehicles. Repossession without proper written notice and due legal process is illegal and unconstitutional."
    },
    {
      q: "How many EMI bounces allow a bank to seize a vehicle?",
      a: "A vehicle loan typically enters default after 90 consecutive days of unpaid EMIs (3 defaulted EMIs), when it is classified as a Non-Performing Asset (NPA). Even after NPA classification, lenders cannot repossess without serving a formal 60-day demand notice."
    },
    {
      q: "Can Bajaj recovery agents seize my vehicle or personal property?",
      a: "No. Recovery agents have zero legal authority to seize personal property or take away vehicles on the spot. Only a court-appointed receiver or an authorized officer following statutory notice protocols can take possession."
    },
    {
      q: "What are the RBI guidelines on repossession of vehicles?",
      a: "RBI Master Directions mandate that lenders must maintain a transparent recovery policy, provide prior written notice, allow borrowers time to repay, record vehicle inventory at the time of repossession, and prohibit recovery visits between 7 PM and 8 AM."
    },
    {
      q: "What is Section 176 of the Indian Contract Act for seized vehicles?",
      a: "Section 176 provides the borrower with the Statutory Right of Redemption. Before the financier auctions the repossessed vehicle, the borrower has the legal right to redeem the asset by paying the agreed settlement or clearing outstanding dues."
    },
    {
      q: "Can banks seize vehicles for personal loan defaults?",
      a: "No. A vehicle cannot be seized for an unsecured personal loan or credit card default unless that vehicle was explicitly pledged as collateral under a registered hypothecation deed for that specific loan."
    },
    {
      q: "What is the procedure for seizure of hypothecated vehicles?",
      a: "The lawful procedure requires: 1) Account classification as NPA, 2) Formal 60-day default notice, 3) Intimation to the local police station before seizure, 4) Proper inventory sheet signed by witnesses, and 5) Pre-sale valuation notice sent to the borrower."
    },
    {
      q: "Can recovery agents tow my car from private parking?",
      a: "Entering private residential premises or gated society parking without homeowner permission or a civil court warrant constitutes criminal trespass under Indian law."
    },
    {
      q: "How to stop car repossession legally?",
      a: "You can halt repossession by serving a legal notice disputing penal charges, citing Supreme Court protections, approaching the consumer court or civil court for an interim injunction, and offering a formal One-Time Settlement."
    },
    {
      q: "Can I file an FIR against recovery agents for illegal vehicle snatching?",
      a: "Yes. If agents forcibly snatch your vehicle keys or use physical threats, you have the legal right to file an FIR for wrongful restraint, extortion, and criminal intimidation under the Bharatiya Nyaya Sanhita (BNS) / IPC."
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
              Emergency Legal Defense
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Vehicle Repossession <span className="text-[#1F5EFF]">Laws & Defense</span> in India
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
              Facing unlawful car or bike seizure threats? Learn Supreme Court repossession judgments, RBI borrower guidelines, and how to stop illegal recovery teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Get Repossession Defense
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
                <li className="font-bold text-[#2E2E2E]" aria-current="page">Vehicle Repossession Laws</li>
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

            <section id="repossession-framework" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Understanding Vehicle Repossession Jurisprudence
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6 font-bold">
                  Vehicle financing agreements contain hypothecation clauses that allow lenders to treat the vehicle as security for the debt. However, a hypothecation agreement is not a license for private financiers to bypass the Indian penal system or deploy vigilante recovery teams.
                </p>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
                  In India, the rule of law governs debt collection. A lender&apos;s contractual right to recover dues is subordinate to the constitutional and human rights of the citizen. Forceful physical repossession, public intimidation, roadside vehicle confiscation, and towing without statutory written notices constitute cognizable criminal offenses under the Bharatiya Nyaya Sanhita (BNS) and Indian law.
                </p>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
                  SettleLoans equips vehicle borrowers with statutory shields, stopping unauthorized recovery interference and steering defaults into court-recognized One-Time Settlement (OTS) closures.
                </p>
              </div>
            </section>

            <LoanSettlementAssessmentFunnel />

            <section id="supreme-court-rulings" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Landmark Supreme Court Repossession Judgments
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
                <div className="space-y-6">
                  <div className="p-6 bg-slate-50 border-l-4 border-[#1F5EFF] rounded-r-xl">
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">ICICI Bank Ltd. v. Prakash Kaur (2007) 2 SCC 711</h3>
                    <p className="text-base text-slate-700">
                      The Supreme Court condemned the practice of banks employing musclemen to take possession of vehicles from defaulting borrowers. The Court ruled that no bank or financial institution can take the law into its own hands or employ force to recover hypothecated vehicles.
                    </p>
                  </div>
                  <div className="p-6 bg-slate-50 border-l-4 border-[#1F5EFF] rounded-r-xl">
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Citicorp Maruti Finance Ltd. v. S. Vijayalaxmi (2012) 1 SCC 1</h3>
                    <p className="text-base text-slate-700">
                      A three-judge bench affirmed that recovery of hypothecated vehicles must be undertaken strictly in accordance with law and due process. The Court held that financiers cannot use physical might, and the hire-purchase lender has no right to resume possession by muscle power.
                    </p>
                  </div>
                  <div className="p-6 bg-slate-50 border-l-4 border-emerald-500 rounded-r-xl">
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Patna High Court: Dhananjay Kumar v. State of Bihar (2023)</h3>
                    <p className="text-base text-slate-700">
                      The High Court held that forceful seizure of vehicles by recovery agents on roads or private driveways violates Article 21 of the Constitution (Right to Life & Dignity) and ordered registration of FIRs against bank officials engaging in such practices.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="rbi-guidelines-protocol" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                The Statutory 5-Step Repossession Protocol
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
                  Under Reserve Bank of India (RBI) Fair Practices Code, a financier must follow a strict sequential protocol before touching any vehicle:
                </p>
                <ol className="space-y-6 text-base text-[var(--color-text-body)]">
                  <li className="flex items-start">
                    <span className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0 mt-0.5">1</span>
                    <div>
                      <h3 className="text-lg font-bold text-[#2E2E2E] mb-1">NPA Classification & Formal Demand Notice</h3>
                      <p className="text-sm text-slate-600">The account must cross 90 days default. The lender must issue a formal demand notice providing at least 60 days to regularize arrears before any enforcement action.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0 mt-0.5">2</span>
                    <div>
                      <h3 className="text-lg font-bold text-[#2E2E2E] mb-1">Police Station Prior Intimation</h3>
                      <p className="text-sm text-slate-600">Before executing repossession, the lender or court receiver must give prior written intimation to the local police jurisdiction stating the intent and vehicle details.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0 mt-0.5">3</span>
                    <div>
                      <h3 className="text-lg font-bold text-[#2E2E2E] mb-1">On-Site Inventory & Verification</h3>
                      <p className="text-sm text-slate-600">At the time of taking custody, an authorized representative must prepare an exhaustive inventory list of all personal belongings inside the vehicle and deliver a signed copy to the borrower.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0 mt-0.5">4</span>
                    <div>
                      <h3 className="text-lg font-bold text-[#2E2E2E] mb-1">Safe Yard Storage & Redemption Opportunity</h3>
                      <p className="text-sm text-slate-600">The vehicle must be kept in a secure, covered holding yard. The borrower must be given a final opportunity to pay the settled dues and redeem the vehicle under Section 176 Contract Act.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0 mt-0.5">5</span>
                    <div>
                      <h3 className="text-lg font-bold text-[#2E2E2E] mb-1">Pre-Sale Valuation & Public Auction Notice</h3>
                      <p className="text-sm text-slate-600">If the borrower cannot redeem, the vehicle must be independently assessed by an approved motor surveyor, and a 30-day pre-sale notice must be delivered before any public auction.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </section>

            <section id="when-can-bank-seize" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                When Can a Bank Seize a Vehicle?
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
                  Borrowers frequently search: <em>&ldquo;how many emi bounce to seize vehicle?&rdquo;</em> Here is the standard statutory timeline:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-slate-300 bg-slate-50">
                        <th className="py-3 px-4 font-bold text-[#2E2E2E]">Default Stage</th>
                        <th className="py-3 px-4 font-bold text-[#2E2E2E]">Overdue Timeline</th>
                        <th className="py-3 px-4 font-bold text-[#2E2E2E]">Lender Enforcement Power</th>
                        <th className="py-3 px-4 font-bold text-[#2E2E2E]">Seizure Legality</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr>
                        <td className="py-3 px-4">SMA-0</td>
                        <td className="py-3 px-4">1 - 30 Days (1st Bounce)</td>
                        <td className="py-3 px-4">Reminder calls, SMS, overdue late fee</td>
                        <td className="py-3 px-4 font-bold text-red-600">STRICTLY ILLEGAL</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">SMA-1 / SMA-2</td>
                        <td className="py-3 px-4">31 - 90 Days (2nd & 3rd Bounce)</td>
                        <td className="py-3 px-4">Field collection visits, written reminders</td>
                        <td className="py-3 px-4 font-bold text-red-600">STRICTLY ILLEGAL</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">NPA Stage</td>
                        <td className="py-3 px-4">90+ Days Default</td>
                        <td className="py-3 px-4">Statutory 60-day legal notice</td>
                        <td className="py-3 px-4 font-bold text-amber-600">Notice Required First</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Lawful Enforcement</td>
                        <td className="py-3 px-4">Notice Period Expired</td>
                        <td className="py-3 px-4">Court Receiver or Authorized Officer</td>
                        <td className="py-3 px-4 font-bold text-emerald-600">Permitted via Due Process</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="unsecured-vs-secured-protection" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Can Banks Seize Vehicles for Personal Loans?
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-r-xl mb-6">
                  <h3 className="text-xl font-bold text-red-900 mb-2">Absolute Protection Against Cross-Seizure</h3>
                  <p className="text-base text-red-800">
                    A lender or recovery agency CANNOT seize your car, motorcycle, or truck for defaulting on an unsecured personal loan, credit card, or digital loan app. Doing so constitutes grand theft, illegal extortion, and criminal trespass.
                  </p>
                </div>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)]">
                  Only a vehicle that has an explicit, active hypothecation lien registered with the RTO in favor of that specific loan account can ever be subjected to asset recovery.
                </p>
              </div>
            </section>

            <section id="section-176-redemption" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Section 176 Contract Act: Right of Vehicle Redemption
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
                  Even if a financier has already taken physical possession of your vehicle and placed it in a holding yard, you have not lost ownership of your asset.
                </p>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
                  Under <strong>Section 176 of the Indian Contract Act, 1872</strong>, the pawner (borrower) retains a Statutory Right of Redemption up until the exact moment of a lawful public auction. By initiating an immediate legal representation and offering an expedited One-Time Settlement (OTS), borrowers frequently release their vehicle from the yard at a negotiated waiver of accumulated dues.
                </p>
              </div>
            </section>

            <section id="emergency-defense-steps" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Emergency 4-Step Protocol When Facing Seizure
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
                <div className="space-y-4 text-base text-[var(--color-text-body)]">
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <strong className="text-[#1F5EFF]">Step 1: Demand Written Credentials:</strong> Ask for official lender ID card, DRA certification, and the specific written authorization letter for your account.
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <strong className="text-[#1F5EFF]">Step 2: Refuse Unlawful Surrender:</strong> State clearly: &ldquo;I will only surrender this vehicle through a court-appointed receiver or upon formal police station intimation.&rdquo;
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <strong className="text-[#1F5EFF]">Step 3: Record and Call 112:</strong> Record audio/video of any harassment or forced entry. Dial 112 to report unauthorized vehicle interception.
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <strong className="text-[#1F5EFF]">Step 4: Engage Legal Advocates:</strong> Connect immediately with SettleLoans advocates to serve a formal restraining notice and negotiate structured settlement.
                  </div>
                </div>
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
              <h3 className="text-3xl font-black mb-4">Stop Unlawful Vehicle Seizure Today</h3>
              <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">
                Do not face recovery agents alone. Let SettleLoans assert your Supreme Court protections and resolve your vehicle loan through legal settlement.
              </p>
              <Link href="/contact" className="inline-block bg-white text-[#1F5EFF] font-black py-4 px-10 rounded-xl hover:scale-105 transition-all text-lg shadow-2xl">
                Get Emergency Legal Shield
              </Link>
            </div>

          </article>

          {/* Right Column: Sticky Widgets */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <div className="sticky top-24 space-y-8">

              {/* CTA Box */}
              <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                <div className="bg-[#1F5EFF] p-4 text-center">
                  <div className="text-lg font-black text-white px-2">Repossession Shield</div>
                </div>
                <div className="p-8 text-center">
                  <p className="mb-8 text-sm text-[#DEDEDE] opacity-90 leading-relaxed font-bold">
                    Facing immediate vehicle seizure threats or musclemen intimidation? Enforce your legal rights and halt harassment.
                  </p>
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-4 rounded-[12px] hover:scale-105 transition-all shadow-md group-hover:shadow-2xl">
                    Stop Vehicle Seizure
                  </Link>
                  <p className="mt-6 text-[10px] text-[#DEDEDE]/60 uppercase tracking-[0.3em] font-black">Supreme Court Protected Rights</p>
                </div>
              </div>

              {/* Related Guides */}
              <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                <div className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2 text-center">Related Defense Guides</div>
                <ul className="space-y-4 text-sm font-extrabold px-2">
                  <li>
                    <Link href="/recovery-agents-snatching-bike-on-road-illegal-repo" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight">
                      <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors flex-shrink-0"></span>
                      Illegal Road Snatching Rules
                    </Link>
                  </li>
                  <li>
                    <Link href="/vehicle-seizure-overdue-loan-documents-repo-agent-rules" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight">
                      <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors flex-shrink-0"></span>
                      Repo Agent Verification Rules
                    </Link>
                  </li>
                  <li>
                    <Link href="/car-loan-repossession-and-shortfall-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors leading-tight">
                      <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors flex-shrink-0"></span>
                      Car Loan Shortfall Settlement
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
