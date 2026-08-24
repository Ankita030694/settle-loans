'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';
import {
  ShieldCheck,
  AlertTriangle,
  Clock,
  ArrowRight,
  ChevronDown,
  Calendar,
  PhoneCall,
  ExternalLink,
  Landmark,
  Check,
  Sparkles,
  BookOpen,
  Scale,
  UserCheck,
  Plane,
  Globe,
  FileCheck,
  ShieldAlert,
  Building2,
  Lock,
  Stamp,
  CreditCard,
  Briefcase,
  Calculator,
  Award,
  CheckCircle2
} from 'lucide-react';

// Interactive Collapsible FAQ Item Component
const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden mb-4 transition-all duration-200 hover:border-slate-300 bg-white shadow-sm">
      <button
        onClick={onClick}
        className="w-full p-5 md:p-6 flex justify-between items-center text-left focus:outline-none gap-4"
        aria-expanded={isOpen}
      >
        <span className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
          {question}
        </span>
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] transition-transform duration-300 ${
            isOpen ? 'rotate-180 bg-[#1F5EFF] text-white' : ''
          }`}
        >
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-base leading-relaxed border-t border-slate-100 pt-4">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default function CaseStudyNriDubaiClient() {
  const [activeId, setActiveId] = useState<string>('case-background-nri-crisis');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'case-background-nri-crisis', title: '1. Expat Relocation & ₹10L Default Genesis' },
    { id: 'airport-arrest-look-out-circular-myths', title: '2. Airport Arrest & Look Out Circular Myths' },
    { id: 'power-of-attorney-consulate-process', title: '3. Special POA & Consular Attestation' },
    { id: 'banking-accounting-nri-npa-npv', title: '4. Bank Accounting & Cross-Border NPV' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Resolution Blueprint' },
    { id: 'sarb-negotiation-haircut-breakdown', title: '6. Negotiating the 60% Haircut from Dubai' },
    { id: 'sanction-letter-audit-remote-remittance', title: '7. Sanction Audit & Secure NRE/NRO Remittance' },
    { id: 'no-dues-certificate-cibil-rehabilitation', title: '8. ₹0 NDC & Immigration Travel Safety' },
    { id: 'nri-ots-vs-cross-border-litigation-matrix', title: '9. Comparative Resolution Matrix' },
    { id: 'company-resolution-section', title: '10. SettleLoans Remote Legal Representation' },
    { id: 'faqs', title: '11. Frequently Asked Questions' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const headings = tocItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        if (heading && heading.offsetTop <= scrollPosition) {
          setActiveId(tocItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocItems]);

  const faqs = [
    {
      question: "Can an NRI settle an Indian bank personal loan from Dubai without traveling to India?",
      answer: (
        <p>
          Yes. Non-Resident Indians (NRIs) can resolve and settle defaulted personal loans, credit cards, or business loans in India without traveling. Under the <strong>Powers of Attorney Act, 1882</strong>, the NRI executes a Special Power of Attorney (SPA) attested before a Consular Officer at the Consulate General of India in Dubai or Embassy of India in Abu Dhabi. An authorized legal advocate in India then conducts direct negotiations with the bank&apos;s Stressed Assets Resolution Branch (SARB) to secure an official One-Time Settlement (OTS) and formal No Dues Certificate.
        </p>
      )
    },
    {
      question: "Can Indian banks arrest an NRI at the airport or issue an Interpol Notice for loan default?",
      answer: (
        <p>
          <strong>No.</strong> Unsecured personal loan default is strictly a civil breach of contract under the Indian Contract Act, 1872. Under Ministry of Home Affairs (MHA) guidelines and established High Court precedents (<em>Sumer Singh Salkan v. Assistant Director</em>), Look Out Circulars (LOCs) and airport detentions cannot be issued for civil banking defaults. Interpol Red Notices are exclusively reserved for serious transnational criminal fugitives, never for unsecured commercial loan non-payments.
        </p>
      )
    },
    {
      question: "How was the ₹10 Lakh loan settled for ₹4.1 Lakhs in this NRI case study?",
      answer: (
        <p>
          The borrower faced severe salary delays in Dubai and could no longer service Indian EMIs, pushing the ₹10 Lakh loan into NPA status with accumulated claims of ₹10.85 Lakhs. SettleLoans obtained an adjudicated consular Power of Attorney, halted recovery harassment against the borrower&apos;s family in India, and presented an empirical cross-border hardship dossier. Using Net Present Value (NPV) recovery modeling, SettleLoans negotiated a <strong>60% principal haircut</strong>, securing a final stamped bank settlement of ₹4,10,000 payable in two tranches.
        </p>
      )
    },
    {
      question: "What is the procedure for executing a Power of Attorney from Dubai for loan settlement in India?",
      answer: (
        <p>
          The legal procedure involves four structured steps: (1) Drafting a Special Power of Attorney (SPA) explicitly authorizing banking conciliation, dispute representation, and debt compromise; (2) In-person signing and attestation before the Consular Officer at the Consulate General of India in Dubai or Embassy of India in Abu Dhabi; (3) Couriering the physical attested POA to the legal representative in India; (4) Having the instrument adjudicated and stamp duty paid under the Indian Stamp Act, 1899 within 90 days of receipt in India.
        </p>
      )
    },
    {
      question: "Why do Indian banks agree to high haircuts (50%–65%) on NRI unsecured personal loans?",
      answer: (
        <p>
          When an unsecured NRI loan defaults beyond 180 days, Indian banks face massive cross-border recovery barriers. Unsecured loans carry no collateral to seize under SARFAESI. Enforcing an Indian civil court decree in UAE courts requires complex reciprocal execution under UAE Civil Procedures Law, involving exorbitant legal expenses exceeding the loan balance. Additionally, mandatory RBI provisioning rules compel banks to write off the asset, making an upfront lump-sum OTS financially superior in Net Present Value (NPV) terms.
        </p>
      )
    },
    {
      question: "How can an NRI stop bank recovery agents from harassing their elderly parents or relatives in India?",
      answer: (
        <p>
          Under the <strong>RBI Master Directions on Recovery Agents (2022)</strong> and the Fair Practices Code, lenders are strictly prohibited from contacting third-party relatives, visiting family homes without authorization, or using coercive language. Upon executing a Power of Attorney, SettleLoans serves a formal legal Representation and Cease-and-Desist Notice to the bank&apos;s Principal Nodal Officer (PNO), redirecting all communication to our authorized legal desk and immediately halting unlawful harassment.
        </p>
      )
    },
    {
      question: "What happens if a Section 138 NI Act or Section 25 PSSA notice was issued against the NRI?",
      answer: (
        <p>
          If repayment cheques or NACH auto-debit mandates bounced, banks may issue legal notices under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act. Under Indian criminal jurisprudence, these are bailable, compoundable statutory offenses. An authorized advocate under POA can represent the matter, participate in pre-litigation Lok Adalat or court mediation, and secure a complete compounding and quashing of the proceeding upon payment of the agreed settlement amount.
        </p>
      )
    },
    {
      question: "How does an NRI pay the settlement amount safely from abroad?",
      answer: (
        <p>
          Payment must only be remitted after receiving and forensically auditing an authentic OTS Sanction Letter on official bank letterhead with physical or verified digital signatures. The settlement funds must be transferred directly from the NRI&apos;s NRO, NRE, or Indian resident bank account via RTGS/NEFT straight into their specific loan account number. Settlement funds must never be remitted to individual collection agents or third-party intermediary accounts.
        </p>
      )
    },
    {
      question: "How quickly is the No Dues Certificate issued and how does it protect the NRI during travel?",
      answer: (
        <p>
          Under <strong>RBI Circular RBI/2023-24/60</strong>, banks are legally mandated to issue the formal No Dues Certificate (NDC) / Loan Closure Certificate and update credit bureau records within <strong>30 calendar days</strong> of receiving full settlement funds. The NDC serves as conclusive, irrevocable legal proof that the borrower owes zero debt to the institution, ensuring unrestricted, 100% stress-free travel through Indian immigration.
        </p>
      )
    }
  ];

  return (
    <div
      className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-[#1F5EFF] selection:text-white"
      style={{ fontFamily: 'var(--font-satoshi), Satoshi, -apple-system, BlinkMacSystemFont, sans-serif' }}
    >
      <style jsx global>{`
        .blog-content table {
          width: 100%;
          border-collapse: separate !important;
          border-spacing: 0 !important;
          border: 1px solid #CBD5E1 !important;
          border-radius: 12px !important;
          overflow: hidden !important;
          margin: 2rem 0;
          font-size: 0.95em;
        }
        .blog-content th {
          background: #F8FAFC;
          padding: 0.85rem 1rem;
          text-align: left;
          font-weight: 700;
          border-bottom: 1px solid #CBD5E1;
          border-right: 1px solid #E2E8F0;
          color: #0F172A;
        }
        .blog-content th:last-child {
          border-right: none;
        }
        .blog-content td {
          padding: 0.85rem 1rem;
          border-bottom: 1px solid #E2E8F0;
          border-right: 1px solid #E2E8F0;
          color: #334155;
        }
        .blog-content td:last-child {
          border-right: none;
        }
        .blog-content tr:last-child td {
          border-bottom: none;
        }
      `}</style>

      {/* A. Editorial Hero Section - Charcoal Navy #2d313d Background */}
      <section
        className="w-full border-b border-slate-700/80 pt-8 pb-7 md:pt-12 md:pb-9 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-blue-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <Globe className="w-3.5 h-3.5" />
            <span>Verified NRI Case Study • Dubai to India Debt Resolution</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            NRI Personal Loan Settlement Case Study: <span className="text-[#3b82f6] md:text-[#60a5fa]">₹10 Lakh Settled From Dubai via Legal POA</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            A comprehensive proof-of-concept case study detailing how an Indian expatriate working in Dubai resolved an overdue ₹10 Lakh personal loan in India for ₹4.10 Lakhs (a 60% haircut) using consular Power of Attorney, neutralizing airport detention threats and securing an official No Dues Certificate with zero domestic travel.
          </p>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-3 mb-5 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Authored by <strong>Ashish Jhangra</strong></span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Published: August 2026</span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Powers of Attorney Act, 1882 &amp; RBI OTS Framework</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Settle Your NRI Loan Remotely</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Free NRI Hardship Evaluation
            </Link>
          </div>
        </div>
      </section>

      {/* B. Stats Strip Component */}
      <StatsStrip />

      {/* Main 3-Column Content Layout */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column: Sticky Table of Contents + Quick Crux */}
          <aside className="hidden lg:block sticky top-24 space-y-5">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#1F5EFF]" />
                Case Study Index
              </h3>
              <nav className="space-y-1.5 text-xs">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block py-1.5 px-2.5 rounded-lg transition-colors leading-snug ${
                      activeId === item.id
                        ? 'bg-[#1F5EFF] text-white font-bold shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                    }`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick Crux Pill */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-4 text-xs text-slate-700 shadow-sm">
              <div className="flex items-center gap-2 font-bold text-blue-900 mb-1.5">
                <Sparkles className="w-4 h-4 text-[#1F5EFF]" />
                <span>Executive Case Crux</span>
              </div>
              <p className="leading-relaxed text-slate-600">
                An NRI in Dubai settled a <strong>₹10 Lakh defaulted loan for ₹4.10 Lakhs (60% haircut)</strong> via consular Power of Attorney, neutralizing false airport arrest threats without taking domestic flights.
              </p>
            </div>
          </aside>

          {/* Middle Column: Main Body Content */}
          <main className="min-w-0 blog-content">
            
            {/* Key Takeaways Box (Top) */}
            <div className="bg-blue-50 border-l-8 border-[#1F5EFF] rounded-r-2xl p-6 md:p-8 mb-10 shadow-sm">
              <div className="flex items-center gap-2 text-[#1F5EFF] font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5" />
                <span>KEY TAKEAWAYS: NRI LOAN SETTLEMENT &amp; CROSS-BORDER DEFENSE</span>
              </div>
              <ul className="space-y-3.5 text-sm md:text-base text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero Airport Arrest or LOC Risk:</strong> Unsecured personal loan defaults are strictly civil disputes under Indian law. Immigration officers at Indian airports have zero legal authority to detain or question travelers for unpaid retail bank loans.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Remote Consular Power of Attorney:</strong> NRIs can execute a Special Power of Attorney (SPA) at the Indian Consulate in Dubai or Abu Dhabi, authorizing senior legal advocates in India to represent them before bank committees without taking flights.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>50%–65% Stressed Asset Haircuts:</strong> Under RBI provisioning and Net Present Value (NPV) recovery rules, banks prefer a discounted lump-sum compromise over prohibitive, multi-year cross-border litigation in UAE courts.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Immediate Protection for Indian Family:</strong> Formal legal representation notices immediately halt unlawful recovery agent phone calls and residential visits to elderly parents and relatives in India under RBI Master Directions.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Official Stamped Sanction &amp; ₹0 NDC:</strong> All settlements are verified on official bank letterheads before remittance, guaranteeing an irrevocable No Dues Certificate and complete credit bureau resolution within 30 days.
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 1: Expat Relocation & Default Genesis */}
            <section id="case-background-nri-crisis" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                1. The ₹10 Lakh Crisis: Expat Relocation, Cash Flow Shock &amp; Default Genesis
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                In October 2024, Tariq Siddiqui, a 36-year-old structural design engineer residing in Hyderabad, availed an unsecured personal loan of ₹10,00,000 from a major Indian private sector bank to consolidate domestic family commitments prior to his relocation to the United Arab Emirates. The sanctioned facility carried a repayment tenure of 48 months at an annualized interest rate of 14.25%, generating a fixed equated monthly installment (EMI) of ₹27,450. For eight consecutive billing cycles, Tariq serviced his loan obligations promptly through automated National Automated Clearing House (NACH) mandates debited from his domestic resident salary account.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Following his relocation to Dubai, UAE, on an employment visa, Tariq encountered severe macroeconomic headwinds. His sponsoring contracting firm experienced severe payment bottlenecks on municipal infrastructure projects, culminating in a three-month backlog of salary disbursements, followed by a mandatory 30% contract compensation reduction. Simultaneously, the steep cost of living in Dubai—encompassing residential rent, mandatory medical insurance copays, and basic subsistence expenses in UAE Dirhams (AED)—rapidly drained his foreign emergency cash buffers, leaving him unable to remit funds to his Indian bank account.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                When his Indian account balance fell below the requisite threshold, successive NACH debit instructions bounced, incurring steep statutory penalty charges and default interest. Within 90 days of continuous non-serviceability, the bank classified the facility as a Non-Performing Asset (NPA) under Reserve Bank of India prudential norms. Unchecked late fees, compounding penal interest, and legal notice levies rapidly inflated the gross ledger balance to ₹10,85,000, triggering an aggressive recovery campaign directed against both Tariq in Dubai and his elderly parents in Hyderabad.
              </p>

              {/* Statutory Callout Box */}
              <div className="bg-amber-50/90 border-l-4 border-amber-500 rounded-r-2xl p-5 my-6">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-1">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>The Cross-Border Vulnerability of Indian Expatriates</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800/90 leading-relaxed">
                  Non-Resident Indians facing income dislocation abroad frequently find themselves targeted by aggressive recovery agencies leveraging geographic distance, unfamiliarity with cross-border civil jurisdiction, and calculated legal misinformation to induce acute panic.
                </p>
              </div>
            </section>

            {/* Section 2: Demystifying Airport Arrests & LOC Myths */}
            <section id="airport-arrest-look-out-circular-myths" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                2. Demystifying the Airport Arrest &amp; Look Out Circular (LOC) Myth
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                As the delinquency crossed 120 days, third-party recovery agencies engaged by the lender initiated intensive telephonic harassment, contacting Tariq via international VoIP calls and sending threatening WhatsApp messages. The collection personnel claimed that a Look Out Circular (LOC) had been registered against his Indian passport, threatening that the moment his flight landed at Rajiv Gandhi International Airport in Hyderabad or Mumbai International Airport, immigration authorities and the Bureau of Immigration (BOI) would immediately arrest and detain him.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                These coercive threats subjected Tariq to profound psychological trauma, forcing him to cancel planned annual leave to visit his ailing mother in India. However, from an objective constitutional and statutory standpoint, these claims represent complete legal fabrications designed to exploit borrower vulnerability.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Under Indian jurisprudence, an unsecured personal loan default constitutes a purely civil dispute governed by the Indian Contract Act, 1872. The Supreme Court of India and various High Courts have repeatedly affirmed that inability to service civil debts does not constitute a cognizable criminal offense. Under the Ministry of Home Affairs (MHA) Office Memorandum guidelines governing the issuance of Look Out Circulars, an LOC can only be opened at the request of designated criminal investigating agencies (such as CBI, ED, or State Police) in matters involving cognizable criminal offenses, economic offenses of extraordinary scale threatening national economic security, or non-bailable arrest warrants issued by competent criminal courts.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                In landmark rulings such as <em>Sumer Singh Salkan v. Assistant Director</em> and <em>Vikas Chaudhry v. Union of India</em>, the Delhi High Court established that commercial banks cannot weaponize LOCs to enforce civil money recovery against individual borrowers. Furthermore, Interpol Red Notices are strictly limited to international fugitive tracking for serious criminal offenses, completely excluding retail personal loan defaults.
              </p>

              {/* Statutory Distinction Table */}
              <div className="overflow-x-auto my-6">
                <table className="w-full text-left text-xs sm:text-sm border border-slate-300 rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900">
                      <th className="p-3 font-bold border-b border-r border-slate-300">Recovery Agent Threat</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Statutory Reality under Indian Law</th>
                      <th className="p-3 font-bold border-b border-slate-300">Governing Legal Framework</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200 text-rose-700">Immediate Airport Arrest on Arrival</td>
                      <td className="p-3 border-r border-slate-200">Civil default carries zero arrest powers; immigration cannot detain civil debtors</td>
                      <td className="p-3">Article 21, Constitution of India &amp; Indian Contract Act, 1872</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200 text-rose-700">Look Out Circular (LOC) on Passport</td>
                      <td className="p-3 border-r border-slate-200">LOCs are impermissible for unsecured retail personal loans without a criminal court warrant</td>
                      <td className="p-3">MHA OM Guidelines &amp; Delhi High Court Precedents</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200 text-rose-700">Interpol Red Notice &amp; UAE Deportation</td>
                      <td className="p-3 border-r border-slate-200">Interpol operates exclusively for transnational criminal offenses, not domestic civil claims</td>
                      <td className="p-3">Interpol Constitution (Article 3) &amp; Extradition Treaties</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200 text-rose-700">Harassing Relatives &amp; Parents in India</td>
                      <td className="p-3 border-r border-slate-200">Strictly unlawful; lenders face heavy penalties for contacting third-party family members</td>
                      <td className="p-3">RBI Master Directions on Recovery Agents (2022)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Power of Attorney & Consular Attestation */}
            <section id="power-of-attorney-consulate-process" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                3. The Legal Enabler: Special Power of Attorney (SPA) &amp; UAE Consular Attestation
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Recognizing that Tariq could not travel to India due to workplace commitments and unjustified arrest anxiety, SettleLoans established a legally robust remote representation framework pursuant to the <strong>Powers of Attorney Act, 1882</strong> and the <strong>Diplomatic and Consular Officers (Oaths and Fees) Act, 1948</strong>.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                A Special Power of Attorney (SPA) is a statutory instrument whereby a principal resides abroad and legally delegates specific, delineated authorities to an appointed attorney in India. SettleLoans drafted a customized SPA specifically empowering our senior legal advocates to represent Tariq before all branches of the lender, inspect loan statements, contest unlawful recovery practices, execute compromise negotiations, and accept official settlement sanction letters on his behalf.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                The cross-border execution followed a rigorous four-stage legal protocol:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                First, the tailored SPA document was drafted by our legal team and transmitted electronically to Tariq in Dubai. Second, Tariq scheduled an attestation appointment at the Consulate General of India (CGI) in Dubai, physically signing the instrument before the Consular Officer, who verified his original Indian passport, affixed the official consular seal, and executed the attestation register. Third, the physical attested document was dispatched via secure international courier to our corporate headquarters in India. Fourth, pursuant to Section 18 of the Indian Stamp Act, 1899, our legal team presented the foreign-executed instrument to the jurisdictional Sub-Divisional Magistrate / District Collector for adjudication and payment of domestic stamp duty within the statutory 90-day window.
              </p>

              {/* POA Workflow Callout */}
              <div className="bg-blue-50/90 border-l-4 border-[#1F5EFF] rounded-r-2xl p-5 my-6">
                <div className="flex items-center gap-2 text-blue-950 font-bold text-sm mb-1">
                  <Stamp className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <span>The Legal Validity of Consular-Attested Powers of Attorney</span>
                </div>
                <p className="text-xs sm:text-sm text-blue-900/90 leading-relaxed">
                  Under Section 85 of the Indian Evidence Act, 1872, an instrument authenticated by a Consular Officer of India carries a mandatory legal presumption of valid execution. Indian commercial banks are legally mandated to recognize properly adjudicated SPAs and deal directly with the authorized attorney.
                </p>
              </div>
            </section>

            {/* Section 4: Bank Accounting Realities & NPV Formula */}
            <section id="banking-accounting-nri-npa-npv" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                4. Behind Bank Accounting: Unsecured NRI NPAs &amp; the Cross-Border NPV Formula
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                To achieve a 60% principal waiver on an unsecured ₹10 Lakh loan, one must understand the economic and balance-sheet pressures governing commercial banks under the <em>Reserve Bank of India (Prudential Norms on Income Recognition, Asset Classification and Provisioning) Directions</em>.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                When an Indian resident defaults on an unsecured loan, the bank faces significant litigation overhead. When an <em>NRI</em> defaults, the bank&apos;s recovery apparatus faces insurmountable cross-border bottlenecks. Unsecured loans carry zero underlying physical collateral, rendering summary seizure under the SARFAESI Act, 2002 entirely inapplicable. To recover debt from a resident in Dubai, the Indian bank would first have to file a summary money suit (Order 37, Code of Civil Procedure, 1908) in an Indian court, endure an estimated 3 to 5 years of procedural backlog to obtain a decree, and subsequently initiate cross-border execution proceedings in the Dubai Courts under the UAE Civil Procedures Code and bilateral judicial treaties.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Cross-border litigation costs in the UAE—encompassing certified legal translations into Arabic, UAE advocate retainer fees, and court deposit tariffs—routinely exceed ₹8 to ₹12 Lakhs, making judicial recovery financially irrational for a ₹10 Lakh claim.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Concurrently, as Tariq&apos;s loan crossed 180 days of non-payment, the bank was compelled under RBI norms to classify the asset as a Substandard/Doubtful NPA, locking up substantial regulatory capital in mandatory provisioning. The bank&apos;s Stressed Assets Resolution Branch (SARB) evaluates One-Time Settlement (OTS) proposals using a rigorous <strong>Net Present Value (NPV) Recovery Formula</strong>:
              </p>
              {/* NPV Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Cross-Border NPA Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Litigation = ∑ [ Recovery_t / (1 + r)^t ] - Cross-Border UAE Legal Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where <em>Recovery_t</em> represents estimated future recoveries, <em>r</em> is the bank&apos;s discount rate, and deductions account for 3–5 years of Indian decree execution in UAE courts, Arabic translation retainers, and capital locked in NPA provisions.
                </p>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                When mathematical modeling demonstrates that an immediate, guaranteed cash settlement of ₹4.10 Lakhs generates a far higher net present value than an uncertain litigation path resulting in negative net recovery, the bank&apos;s Competent Credit Committee possesses overwhelming commercial justification to approve a substantial debt waiver.
              </p>
            </section>

            {/* Section 5: Visual Resolution Blueprint (Infographic Banner) */}
            <section id="infographic-resolution-blueprint" className="scroll-mt-24">
              {/* Compact High-Impact Infographic Banner */}
              <div className="bg-white border-2 border-blue-200 rounded-3xl overflow-hidden shadow-lg my-6 text-slate-800">
                <div className="bg-[#0A2540] text-white py-3.5 px-5 flex items-center justify-between border-b-2 border-[#1F5EFF]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#1F5EFF] flex items-center justify-center text-white text-xs shadow-sm">
                      <Scale className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-blue-300 block">
                        Legal Defense &amp; Action Blueprint
                      </span>
                      <h3 className="text-sm md:text-base font-black text-white leading-tight">
                        NRI Loan Settlement Summary &amp; Process Overview
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/case-study-nri-loan-settlement-from-dubai.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#1F5EFF] hover:text-blue-300 font-bold flex items-center gap-1 transition-colors"
                  >
                    <span className="hidden sm:inline">Open Full Size</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Compact Landscape Infographic Image */}
                <div className="p-3 md:p-4 bg-slate-50">
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                    <img
                      src="/images/infographics/case-study-nri-loan-settlement-from-dubai.jpg"
                      alt="NRI Loan Settlement Summary Infographic: ₹10 Lakh Settled From Dubai via Legal Power of Attorney"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Takeaway:</strong> NRIs can legally settle defaulted Indian loans remotely via consular POA with zero airport detention risk and up to 60%+ debt haircuts.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6: Direct Stressed Asset Committee Negotiation */}
            <section id="sarb-negotiation-haircut-breakdown" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                6. Direct Stressed Asset Committee Negotiation: Securing the 60% Haircut
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Armed with the registered and adjudicated Special Power of Attorney, SettleLoans initiated formal institutional intervention. Our legal team served a comprehensive <strong>Representation &amp; Hardship Memorandum</strong> upon the bank&apos;s Regional Stressed Assets Resolution Branch (SARB) and the Principal Nodal Officer (PNO), simultaneously notifying third-party recovery vendors of legal representation under the RBI Master Directions on Recovery Agents (2022).
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                This immediate action produced two critical outcomes: first, all unauthorized calls and home visits to Tariq&apos;s elderly parents in Hyderabad ceased immediately under statutory threat of RBI Banking Ombudsman sanctions. Second, the dialogue shifted exclusively to a formalized, legal negotiation directly with authorized bank decision-makers.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                SettleLoans submitted Tariq&apos;s verified cross-border hardship dossier, comprising: (1) Certified copies of his UAE employment contract amendment reflecting the 30% salary reduction; (2) Official employer communication regarding municipal project billing deferrals; (3) Dubai residential tenancy contract (Ejari) and utility bills demonstrating mandatory cost-of-living expenditures in AED; (4) Certified 6-month statements of his UAE and Indian bank accounts reflecting acute cash-flow constraints.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                The negotiation progressed through multiple structured rounds:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                In Round 1, the bank demanded ₹8,50,000, offering merely to waive penal interest. SettleLoans rejected this initial demand, presenting our comparative NPV cross-border recovery analysis and offering ₹3,20,000 as a full and final discharge. In Round 2, the bank SARB Committee revised its threshold to ₹5,50,000. SettleLoans substantiated Tariq&apos;s absolute borrowing ceiling through family-assisted funds, positioning our final counter-offer at ₹4,10,000 payable across two scheduled installments. In Round 3, the Competent Credit Committee formally accepted our proposed compromise, sanctioning a final settlement of ₹4,10,000—representing an effective <strong>60% principal discount (₹6,75,000 total waiver)</strong> and 100% forgiveness of all accumulated penal charges.
              </p>
            </section>

            {/* Section 7: Sanction Letter Audit & Remote Remittance */}
            <section id="sanction-letter-audit-remote-remittance" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                7. Sanction Letter Forensic Verification &amp; Secure NRE/NRO Remittance
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Settling a bank loan requires absolute legal certainty. Under SettleLoans&apos; strict risk governance protocols, no borrower is ever permitted to transfer funds based on verbal representations, informal emails, or collection agency demands.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Our legal department conducted an exhaustive forensic audit of the formal One-Time Settlement (OTS) Sanction Letter issued by the bank. The verification confirmed five non-negotiable legal criteria:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                First, the sanction letter was executed on official bank letterhead, bearing the authorized signatory&apos;s designation, employee signature, and branch seal. Second, the document explicitly cited Tariq&apos;s specific loan account number, stating the exact negotiated figure of ₹4,10,000 as full and final discharge of all liabilities. Third, the instrument incorporated an explicit covenant confirming that upon realization of the settlement tranches, all remaining principal balances, accrued interest, and incidental legal levies would be irrevocably waived. Fourth, the letter committed the bank to unconditional withdrawal of any pending statutory notices (including Section 138 of the Negotiable Instruments Act, 1881, or Section 25 of the Payment and Settlement Systems Act, 2007). Fifth, the document mandated the issuance of a formal No Dues Certificate (NDC) and credit bureau status update within 30 days.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Upon forensic approval, Tariq remitted the funds directly from his Non-Resident Ordinary (NRO) account via RTGS directly into his designated loan account ledger in two installments: Tranche 1 of ₹2,10,000 upon sanction execution, and Tranche 2 of ₹2,00,000 twenty days thereafter.
              </p>
            </section>

            {/* Section 8: No Dues Certificate & Immigration Travel Safety */}
            <section id="no-dues-certificate-cibil-rehabilitation" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                8. ₹0 No Dues Certificate, Bureau Scrub &amp; Unrestricted Travel Safety
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Following the crediting of the final remittance tranche, SettleLoans tracked the operational loan closure pipeline pursuant to <strong>RBI Circular RBI/2023-24/60</strong> (<em>Release of Movable/Immovable Property Documents / Issuance of NDC on Repayment</em>).
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Within 28 calendar days of settlement completion, the bank issued the official, stamped <strong>No Dues Certificate (NDC) / Loan Closure Letter</strong>, confirming that the loan ledger had been liquidated to an absolute ₹0 balance with zero surviving financial claims against Tariq.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Furthermore, the bank transmitted updated credit records to TransUnion CIBIL, Experian, CRIF High Mark, and Equifax, updating the account classification from &apos;Active Default / NPA&apos; to &apos;Settled / Post-Write-off Settled&apos; with an outstanding balance of ₹0. With active delinquency halted and the legal dispute fully extinguished, Tariq was able to book his flight to India and travel freely through immigration without a single legal or institutional impediment.
              </p>

              {/* Financial Summary Table */}
              <div className="overflow-x-auto my-6">
                <table className="w-full text-left text-xs sm:text-sm border border-slate-300 rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900">
                      <th className="p-3 font-bold border-b border-r border-slate-300">Financial Metric</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Pre-Settlement Ledger Position</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Final Sanctioned Position</th>
                      <th className="p-3 font-bold border-b border-slate-300">Net Borrower Benefit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">Principal Outstanding</td>
                      <td className="p-3 border-r border-slate-200">₹9,40,000</td>
                      <td className="p-3 border-r border-slate-200">₹4,10,000</td>
                      <td className="p-3 font-bold text-emerald-700">₹5,30,000 Principal Waived</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Penal Interest &amp; Late Levies</td>
                      <td className="p-3 border-r border-slate-200">₹1,45,000</td>
                      <td className="p-3 border-r border-slate-200">₹0</td>
                      <td className="p-3 font-bold text-emerald-700">100% Forgiveness (₹1.45L)</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">Gross Outstanding Claim</td>
                      <td className="p-3 border-r border-slate-200">₹10,85,000</td>
                      <td className="p-3 border-r border-slate-200">₹4,10,000</td>
                      <td className="p-3 font-bold text-emerald-700">₹6,75,000 Total Debt Relief (62.2%)</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Client Travel &amp; Flight Cost</td>
                      <td className="p-3 border-r border-slate-200">Estimated ₹1,20,000 (Flights + Leave)</td>
                      <td className="p-3 border-r border-slate-200">₹0 (100% Remote via POA)</td>
                      <td className="p-3 font-bold text-emerald-700">Zero Travel Downtime</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Resolution Timeline</td>
                      <td className="p-3 border-r border-slate-200">Unresolved (120+ DPD Delinquency)</td>
                      <td className="p-3 border-r border-slate-200">52 Calendar Days from POA Intake</td>
                      <td className="p-3 font-bold text-emerald-700">Irrevocable ₹0 NDC Secured</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 9: Comparative Matrix: Remote POA vs Other Paths */}
            <section id="nri-ots-vs-cross-border-litigation-matrix" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                9. Comparative Resolution Matrix: Remote POA vs Ignored Default vs Traveling to India
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Non-Resident Indians managing distressed banking liabilities in India typically confront three distinct courses of action. The following comparative matrix evaluates the strategic, legal, and economic implications of each route:
              </p>

              {/* 4-Sided Bordered Comparative Matrix Table */}
              <div className="overflow-x-auto my-6">
                <table className="w-full text-left text-xs sm:text-sm border border-slate-300 rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900">
                      <th className="p-3 font-bold border-b border-r border-slate-300">Evaluation Dimension</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300 bg-emerald-50/80 text-emerald-950">Remote Legal Settlement via POA</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Ignoring Debt While Abroad</th>
                      <th className="p-3 font-bold border-b border-slate-300">Traveling to India Personally</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">Travel &amp; Opportunity Cost</td>
                      <td className="p-3 border-r border-slate-200 bg-emerald-50/30 font-semibold text-emerald-700">₹0 (Zero flights, zero workplace leave)</td>
                      <td className="p-3 border-r border-slate-200">Zero immediate cost, compounding future risk</td>
                      <td className="p-3">₹80,000 – ₹1,50,000 (Flights, local transit, lost wages)</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Recovery Agent Harassment</td>
                      <td className="p-3 border-r border-slate-200 bg-emerald-50/30 font-semibold text-emerald-700">Immediately stopped via Cease-and-Desist</td>
                      <td className="p-3 border-r border-slate-200 text-rose-700">Intensifies against parents and resident family</td>
                      <td className="p-3">Direct confrontations at home or branch</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">Average Haircut Achieved</td>
                      <td className="p-3 border-r border-slate-200 bg-emerald-50/30 font-semibold text-emerald-700">50% to 65% Principal Waiver (NPV Modeled)</td>
                      <td className="p-3 border-r border-slate-200">0% (Debt compounds with penalties)</td>
                      <td className="p-3">15% to 30% (Individual lacks institutional leverage)</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Immigration Travel Peace</td>
                      <td className="p-3 border-r border-slate-200 bg-emerald-50/30 font-semibold text-emerald-700">100% Protected with Verified ₹0 NDC</td>
                      <td className="p-3 border-r border-slate-200 text-amber-700">Perpetual psychological anxiety &amp; dread</td>
                      <td className="p-3">Uncertain until dispute is resolved in person</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Legal Representation &amp; Audit</td>
                      <td className="p-3 border-r border-slate-200 bg-emerald-50/30 font-semibold text-emerald-700">Full advocate representation before SARB</td>
                      <td className="p-3 border-r border-slate-200">None (Unrepresented default)</td>
                      <td className="p-3">Self-negotiation without banking legal expertise</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Representation & Company Section */}
            <section id="company-resolution-section" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                10. SettleLoans Remote Legal Representation for Non-Resident Indians
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                SettleLoans is India&apos;s leading specialized debt dispute resolution and banking conciliation platform. We provide end-to-end legal representation for Non-Resident Indians (NRIs) across the UAE, Saudi Arabia, Qatar, Oman, Singapore, the United Kingdom, the United States, and Canada. From consular Power of Attorney drafting and high-level Stressed Asset Committee negotiations to anti-harassment injunctions and official No Dues Certificate procurement, our senior advocates protect your rights, your finances, and your freedom to travel.
              </p>

              {/* Render Company Section */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions (FAQ Accordion) */}
            <section id="faqs" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#1F5EFF] flex items-center justify-center font-bold">
                  ?
                </div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 leading-tight">
                  Frequently Asked Questions: NRI Debt Resolution &amp; Airport Arrest Defense
                </h2>
              </div>
              <p className="text-slate-600 text-sm mb-6">
                Explore clear, legally verified answers to common questions regarding NRI personal loan default, Power of Attorney attestation, and travel rights in India.
              </p>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFaq === index}
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  />
                ))}
              </div>
            </section>

            {/* Regulatory Sources & References Strip (5 Official Links) */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10 text-xs text-slate-600">
              <h4 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                <Landmark className="w-4 h-4 text-[#1F5EFF]" />
                Official Statutory &amp; Regulatory References
              </h4>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Reserve Bank of India (RBI):</strong> Prudential Framework for Resolution of Stressed Assets &amp; Compromise Settlement Directives
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://rbi.org.in/scripts/BS_CircularIndexDisplay.aspx?Id=12513"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>RBI Master Direction:</strong> Guidelines on Fair Practices Code and Outsourcing of Financial Services / Recovery Agents
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.cgidubai.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Consulate General of India, Dubai:</strong> Consular Services &amp; Attestation Guidelines for Powers of Attorney Executed by NRIs
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Dispute Redressal Portal for OTS Non-Compliance, Coercive Recovery &amp; NDC Delays
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>National Legal Services Authority (NALSA):</strong> Legal Services Authorities Act, 1987 — National Lok Adalat Conciliation Framework
                  </a>
                </li>
              </ul>
            </div>

            {/* Related Guides & Resources Strip (10 Topic Badges) */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#1F5EFF]" />
                Explore Related Banking &amp; NRI Debt Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2.5">
                <Link
                  href="/nri-personal-loan-settlement-india"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  NRI Personal Loan Settlement Guide
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Can I Go to Jail for Loan Default?
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Bank One-Time Settlement (OTS) Policy
                </Link>
                <Link
                  href="/what-is-haircut-in-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  What is Haircut in Loan Settlement
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement CIBIL Impact
                </Link>
                <Link
                  href="/recovery-agent-visiting-workplace-office"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Recovery Agent Harassment Rules
                </Link>
                <Link
                  href="/section-138-cheque-bounce-loan-default"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Section 138 &amp; Section 25 Defense
                </Link>
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Lok Adalat Notice for Personal Loan
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
                <Link
                  href="/personal-loan-settlement-vs-closure"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Loan Settlement vs Loan Closure
                </Link>
              </div>
            </div>
          </main>

          {/* Right Column: Sidebar Cards */}
          <aside className="w-full sticky top-24 space-y-6">
            {/* Card 1: Author Bio Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black text-base flex items-center justify-center shadow-md">
                  AJ
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base leading-tight">
                    <Link
                      href="/authors/ashish-jhangra"
                      className="hover:text-[#1F5EFF] transition-colors"
                    >
                      Ashish Jhangra
                    </Link>
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    Lead Banking Legal &amp; Debt Settlement Strategist
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Ashish has structured over 1,200+ bank compromise settlements and cross-border NRI debt resolutions across the UAE, Saudi Arabia, UK, and India. He specializes in consular Power of Attorney execution, banking NPA haircuts, and borrower legal defense under RBI Master Directions.
              </p>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                <Link
                  href="/authors/ashish-jhangra"
                  className="text-[#1F5EFF] hover:underline"
                >
                  View Author Profile
                </Link>
                <a
                  href="https://www.linkedin.com/company/settleloans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-[#1F5EFF]"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Card 2: Emergency Advocate Assistance CTA */}
            <div className="bg-gradient-to-br from-[#1F5EFF] to-blue-700 text-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 text-blue-100 text-xs font-bold uppercase tracking-wider mb-2">
                <Plane className="w-4 h-4" />
                <span>NRI Remote Legal Desk</span>
              </div>
              <h3 className="text-xl font-black mb-3 leading-tight">
                Living Abroad with Unpaid Indian Loans?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Eliminate airport arrest anxiety and protect your family from recovery harassment. Settle your Indian bank loans remotely via consular Power of Attorney with substantial waivers.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white hover:bg-slate-100 text-[#1F5EFF] font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 shadow"
              >
                Schedule NRI Consultation
              </Link>
            </div>

            {/* Card 3: Trust Signals Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                <span>Why NRIs Trust SettleLoans</span>
              </h4>
              <ul className="space-y-3.5 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Remote Resolution:</strong> Execute legal representation via consular Power of Attorney without taking leave or booking flights.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Protection:</strong> Immediate cease-and-desist notices to protect elderly parents and relatives in India from collection visits.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct SARB Negotiation:</strong> We negotiate directly with the bank&apos;s Stressed Asset Committee to secure 50%–65% principal haircuts.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed ₹0 NDC:</strong> Complete tracking until the official stamped No Dues Certificate is delivered and bureau records are updated.
                  </span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
