'use client';

import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  AlertTriangle,
  Clock,
  ArrowRight,
  ChevronDown,
  Calendar,
  Award,
  PhoneCall,
  ExternalLink,
  Building2,
  Landmark,
  Check,
  Sparkles,
  BookOpen,
  ShieldAlert,
  Scale,
  FileText,
  CheckCircle2,
  CheckCircle,
  Gavel,
  FileWarning,
  ShieldX,
  AlertCircle,
  HelpCircle,
  FileCheck,
  UserCheck,
  MapPin,
  Calculator
} from 'lucide-react';

// Interactive FAQ Item Component
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
          isOpen ? 'max-h-[1400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-base leading-relaxed border-t border-slate-100 pt-4">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default function PersonalLoanSettlementHyderabadClient() {
  const [activeId, setActiveId] = useState<string>('hyderabad-debt-landscape');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'hyderabad-debt-landscape', title: '1. Hyderabad & Secunderabad Debt Ecosystem' },
    { id: 'civil-defense-vs-criminal-traps', title: '2. Statutory Civil Defense & Summons' },
    { id: 'role-of-hyderabad-advocate', title: '3. Role of a Hyderabad Settlement Advocate' },
    { id: 'tslsa-lok-adalat-mechanics', title: '4. TSLSA Lok Adalat Settlement Mechanics' },
    { id: 'compact-infographic-banner', title: '5. Legal Defense Blueprint' },
    { id: 'step-by-step-defense-protocol', title: '6. 5-Stage Settlement Protocol' },
    { id: 'npv-accounting-and-waivers', title: '7. NPA Accounting & 40-70% Waivers' },
    { id: 'anti-harassment-telangana-hc', title: '8. Anti-Harassment & Police Limits' },
    { id: 'sanction-letter-verification', title: '9. Sanction Letter Forensics & ₹0 NDC' },
    { id: 'hyderabad-court-directory-matrix', title: '10. District Courts & Resolution Matrix' },
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
      question: "Why do IT and corporate professionals in Hyderabad need specialized loan settlement advocates?",
      answer: (
        <p>
          Corporate executives in technology hubs like HITEC City, Gachibowli, Madhapur, and the Financial District often face severe debt exposure when unexpected tech layoffs, equity market downturns, or medical emergencies strike. Major scheduled commercial banks deploy aggressive collection panels across Nampally Metropolitan Magistrate Courts and Ranga Reddy District Courts. A seasoned Hyderabad debt settlement advocate leverages RBI Master Directions, balance sheet provisioning rules, and Telangana State Legal Services Authority conciliation to negotiate 40% to 70% debt waivers while legally safeguarding corporate careers from workplace harassment.
        </p>
      )
    },
    {
      question: "What legal steps must I take upon receiving a Section 138 summons from Nampally or Ranga Reddy Courts?",
      answer: (
        <p>
          Never ignore a judicial summons. When a lender files a complaint under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act, your Hyderabad advocate immediately enters an appearance by filing a Vakalatnama, secures bail on your first appearance without custodial detention, examines statutory territorial jurisdiction under the 2015 NI Act amendments, and files a formal application under Section 147 NI Act to refer the dispute to Lok Adalat for an amicable settlement.
        </p>
      )
    },
    {
      question: "Can Hyderabad or Cyberabad Police arrest me for defaulting on an unsecured personal loan?",
      answer: (
        <p>
          <strong>No. Defaulting on an unsecured personal loan is strictly a civil dispute</strong> governed by the Indian Contract Act, 1872. Neither the Hyderabad City Police nor the Cyberabad Police Commissionerate possesses statutory jurisdiction to register FIRs, summon borrowers to police stations, or arrest debtors for purely financial defaults. If recovery agencies attempt to lodge frivolous cheating complaints under Section 420 IPC (Section 318 BNS), your legal counsel will immediately cite binding Supreme Court directives in <em>Arnesh Kumar v. State of Bihar</em> to ensure prompt dismissal.
        </p>
      )
    },
    {
      question: "How does Lok Adalat settlement function under the Telangana State Legal Services Authority (TSLSA)?",
      answer: (
        <p>
          The Telangana State Legal Services Authority (TSLSA) convenes quarterly National and State Lok Adalats across City Civil Courts at Purani Haveli, Metropolitan Criminal Courts at Nampally, and District Courts at L.B. Nagar and Secunderabad. When your advocate places your debt dispute before the Lok Adalat bench, both parties negotiate a discounted one-time lump sum. An award passed under Section 21 of the Legal Services Authorities Act, 1987, operates as a final, unappealable Civil Court decree, guaranteeing a full refund of court fees and extinguishing all bank claims permanently.
        </p>
      )
    },
    {
      question: "What percentage of debt waiver can Hyderabad advocates secure on personal loans?",
      answer: (
        <p>
          Depending on the aging of delinquency (typically 90 to 180+ days past due), verified financial hardship (job loss, business cash flow crisis, or medical illness), and asset classification (Substandard, Doubtful, or Loss NPA), experienced Hyderabad advocates typically achieve <strong>40% to 70% waivers</strong> on the total outstanding book debt, accompanied by a 100% complete waiver of penal interest, late payment penalties, and compounding charges.
        </p>
      )
    },
    {
      question: "How do advocates protect Hyderabad tech employees from recovery agents visiting tech parks and offices?",
      answer: (
        <p>
          Advocates issue formal Cease-and-Desist legal notices citing RBI Master Directions on Recovery Agents, Section 35A of the Banking Regulation Act, and High Court directives. The notice explicitly warns the lender against unauthorized visits to corporate IT campuses in HITEC City, Gachibowli, or Madhapur. If agents violate these norms, advocates initiate criminal complaints for criminal intimidation and lodge formal complaints with the RBI Banking Ombudsman.
        </p>
      )
    },
    {
      question: "How do banks calculate One-Time Settlement (OTS) haircuts using Net Present Value (NPV)?",
      answer: (
        <p>
          Banks evaluate OTS proposals by comparing immediate cash recovery against the Net Present Value of prolonged litigation in Telangana civil courts. Because summary civil suits and execution proceedings can take 4 to 6 years in Hyderabad, incurring heavy advocate fees and tying up statutory NPA capital provisions, an immediate lump-sum settlement of 30% to 50% of the book debt yields a higher Net Present Value for the lender than uncertain future recovery.
        </p>
      )
    },
    {
      question: "How do I ensure a loan settlement in Hyderabad is genuine and legally binding?",
      answer: (
        <p>
          Never make cash payments to collection agents or transfer money into third-party accounts. A legitimate settlement requires an official, digitally authenticated Sanction Letter printed on the bank&apos;s corporate letterhead, issued by its Zonal Stressed Assets Recovery Branch (SARB) or Credit Committee in Hyderabad. Settlement payments must be deposited directly into your designated loan account, followed by an official ₹0 No Dues Certificate (NDC) and updated credit registry records.
        </p>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased">
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
            <Scale className="w-3.5 h-3.5" />
            <span>Hyderabad &amp; Secunderabad Legal Defense • Court Representation</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            Loan Settlement Advocates in Hyderabad: <span className="text-[#3b82f6] md:text-[#60a5fa]">Legal Defense, TSLSA Lok Adalat &amp; OTS Strategy</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Confronting bank legal notices, Section 138/25 summons, or aggressive recovery agents across Hyderabad, Secunderabad, and Cyberabad? Retain experienced debt settlement advocates to secure binding compromise decrees and 40% to 70% debt waivers under RBI guidelines.
          </p>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-3 mb-5 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Written by <strong>Ashish Jhangra</strong></span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Updated: August 2026</span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Bar Council of Telangana &amp; TSLSA Aligned</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Connect with Hyderabad Advocate</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Get Free Case Evaluation
            </Link>
          </div>
        </div>
      </section>

      {/* B. Crisp Stats Strip Component */}
      <StatsStrip />

      {/* 3-Column Layout Container */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column (Sticky Table of Contents) */}
          <aside className="w-full sticky top-24 space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-sm">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-200 text-slate-900 font-bold text-sm">
                <BookOpen className="w-4 h-4 text-[#1F5EFF]" />
                <span>Table of Contents</span>
              </div>
              <nav className="space-y-1 text-xs">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug ${
                      activeId === item.id
                        ? 'bg-[#1F5EFF] text-white font-bold shadow-sm'
                        : 'text-slate-600 hover:bg-slate-200/60 hover:text-slate-900'
                    }`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick Summary Pill Box */}
            <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>Hyderabad Legal Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Facing debt recovery proceedings across Nampally, Purani Haveli, Secunderabad, or Ranga Reddy Courts? Empanelled Hyderabad advocates defend Section 138/25 summons, halt workplace harassment across HITEC City and Gachibowli, and secure 40%–70% OTS waivers backed by binding TSLSA Lok Adalat decrees.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">
            
            {/* Key Takeaways Box (Top) */}
            <div className="bg-blue-50 border-l-8 border-[#1F5EFF] rounded-r-2xl p-6 md:p-8 mb-10 shadow-sm">
              <div className="flex items-center gap-2 text-[#1F5EFF] font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5" />
                <span>KEY TAKEAWAYS: LOAN SETTLEMENT &amp; LEGAL RIGHTS IN HYDERABAD</span>
              </div>
              <ul className="space-y-3 text-sm md:text-base text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Strict Civil Protection:</strong> Defaulting on an unsecured personal loan is purely a civil contract breach under the Indian Contract Act, 1872. Hyderabad and Cyberabad Police have zero statutory authority to arrest borrowers or file criminal FIRs for unpaid debts.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Court Summons &amp; Bail Defense:</strong> Section 138 NI Act or Section 25 PSSA summons issued by Nampally, L.B. Nagar, or Secunderabad courts are bailable matters where your advocate secures bail on day one, halting coercive non-bailable warrants.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>40%–70% OTS Debt Waivers:</strong> Distressed salaried corporate borrowers and entrepreneurs qualify for substantial principal haircuts and complete penal charge waivers under RBI IRACP provisioning norms and Net Present Value (NPV) benchmarks.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Unappealable TSLSA Lok Adalat Decrees:</strong> Compromise settlements executed before Telangana State Legal Services Authority Lok Adalats function as final Civil Court decrees under Section 21 of the LSA Act, 1987, securing permanent ₹0 NDC closure.
                  </span>
                </li>
              </ul>
            </div>
            
            {/* Section 1: Hyderabad & Secunderabad Debt Ecosystem */}
            <section id="hyderabad-debt-landscape" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. Hyderabad &amp; Secunderabad Debt Ecosystem</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Navigating High-Ticket Debt Traps &amp; Bank Recovery Across Hyderabad, Cyberabad &amp; Secunderabad
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                The Hyderabad metropolitan area, encompassing the twin cities of Hyderabad and Secunderabad alongside the high-growth technology corridor of Cyberabad, has emerged as one of India&apos;s foremost economic engines. Home to global technology campuses, pharmaceutical conglomerates, biotechnology enterprises, and financial service centers across HITEC City, Gachibowli, Madhapur, the Financial District, Kondapur, Begumpet, and Banjara Hills, the region concentrates a massive population of ambitious IT professionals, corporate leaders, and tech entrepreneurs. While corporate compensation packages in Hyderabad have expanded significantly, rapid urban expansion has brought steep residential rental inflation, high-ticket home loan EMIs, private schooling costs, and escalating lifestyle leverage.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                When sudden macroeconomic headwinds, technology restructuring, software layoffs, business margin contractions, or unexpected family medical emergencies strike, high-ticket unsecured personal loans (frequently scaling between ₹10 Lakhs and ₹50 Lakhs) rapidly devolve into catastrophic debt spirals. Distressed borrowers often carry concurrent unsecured obligations across leading private and public institutions such as HDFC Bank, ICICI Bank, State Bank of India, Axis Bank, Kotak Mahindra Bank, and Bajaj Finance. Recognizing that corporate IT professionals possess sensitive professional reputations and strict background verification standards, institutional lenders unleash aggressive empanelled recovery lawyers and third-party collection agencies to exert intense psychological coercion.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                Overcoming this aggressive recovery environment demands sophisticated, institution-level legal advocacy. Banking litigation in Hyderabad is heavily concentrated across specialized judicial hubs, including the Metropolitan Criminal Courts Complex at Nampally, the City Civil Court Complex at Purani Haveli, the Ranga Reddy District Court Complex at L.B. Nagar, the Kukatpally and Miyapur Special Courts, and the Secunderabad Civil Court. Without an experienced debt settlement advocate who understands banking NPA provisioning mechanics, territorial jurisdiction objections, and the statutory conciliation powers of the Telangana State Legal Services Authority (TSLSA), borrowers face severe career jeopardy, unverified ex-parte orders, and unlawful harassment at their corporate offices and residential communities.
              </p>
            </section>

            {/* Section 2: Statutory Civil Defense & Summons */}
            <section id="civil-defense-vs-criminal-traps" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>2. Statutory Defense &amp; Criminal Misconceptions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Statutory Civil Debt Protections vs Criminal Traps: Section 138 NI Act &amp; Section 25 PSSA Defense
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Under foundational Indian civil jurisprudence established by the Indian Contract Act, 1872, the inability to repay an unsecured personal loan due to genuine financial distress constitutes strictly a civil breach of contract. The Supreme Court of India and the High Court for the State of Telangana have repeatedly affirmed that an inability to pay does not equate to criminal breach of trust (Section 406 IPC / Section 316 BNS) or cheating (Section 420 IPC / Section 318 BNS), unless deceptive intent was established at the loan&apos;s inception. Neither the Hyderabad City Police, Cyberabad Police Commissionerate, nor Rachakonda Police have statutory jurisdiction to register criminal FIRs, issue police station call notices, or effect arrests in civil debt defaults.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                To circumvent lengthy civil recovery procedures under Order XXXVII of the Code of Civil Procedure (CPC), banks routinely deploy aggressive statutory shortcuts. Specifically, lenders present security cheques or execute automated electronic National Automated Clearing House (NACH) debit instructions to generate bounce memos, swiftly initiating criminal complaints under Section 138 of the Negotiable Instruments Act, 1881, or Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA). These complaints are filed in high-volume magistrate courts at Nampally or L.B. Nagar, resulting in formal judicial summons delivered to the borrower&apos;s residence.
              </p>
              
              {/* Statutory Callout Box */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-2xl my-6 shadow-sm">
                <div className="flex items-center gap-2 font-bold text-amber-900 text-sm mb-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Crucial Judicial Reality: Court Summons vs Arrest Warrants</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                  A judicial summons under Section 138 NI Act or Section 25 PSSA is a formal notice to appear before the court, not an arrest warrant. When represented by a seasoned Hyderabad debt settlement advocate, your lawyer enters an immediate appearance by filing a Vakalatnama, furnishes personal bond and surety to secure bail on the very first date of hearing, inspects territorial jurisdiction under statutory rules, and moves an application under Section 147 NI Act to refer the matter to TSLSA Lok Adalat for an unappealable compromise decree.
                </p>
              </div>

              <p className="text-base text-slate-700 leading-relaxed">
                Furthermore, institutional lenders frequently invoke boiler-plate arbitration clauses in loan agreements, unilaterally appointing sole arbitrators based in other metro centers without mutual agreement. In milestone rulings including <em>Perkins Eastman Architects DPC v. HSCC India Ltd (2020)</em> and <em>TRF Ltd. v. Energo Engineering Projects Ltd.</em>, the Supreme Court ruled that unilateral arbitrator appointments are void ab initio. Experienced Hyderabad advocates challenge these unilateral proceedings before the High Court of Telangana and City Civil Courts, securing stay orders against ex-parte awards and compelling the bank to engage in good-faith bilateral settlement talks.
              </p>
            </section>

            {/* Section 3: Role of a Hyderabad Settlement Advocate */}
            <section id="role-of-hyderabad-advocate" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4" />
                <span>3. Advocacy &amp; Institutional Leverage</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                The Strategic Role of a Personal Loan Settlement Advocate in Hyderabad &amp; Cyberabad
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Confronting bank recovery teams in Hyderabad without specialized legal representation leaves distressed borrowers highly vulnerable. Third-party collection agencies rely on psychological harassment, unauthorized telephone contact with corporate HR executives, and unannounced visits to residential gated communities in Gachibowli, Miyapur, Kondapur, or Uppal to intimidate borrowers into distress asset sales or taking exploitative informal loans. Retaining an experienced debt settlement advocate shifts the entire dispute into formal statutory channels where the borrower&apos;s rights are rigorously defended.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                A specialized Hyderabad settlement advocate delivers five critical institutional functions: First, they conduct an exhaustive forensic audit of the loan ledger, separating genuine principal exposure from exorbitant penal interest, compounded late charges, and unauthorized insurance add-ons. Second, they serve robust legal replies to bank demand notices, placing the borrower&apos;s bona fide financial hardship on formal judicial record and preventing the lender from securing summary ex-parte judgments.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                Third, your advocate interfaces directly with institutional credit authorities—such as the Zonal Stressed Assets Recovery Branches (SARB) and Regional Credit Committees located around Bank Street Koti, Somajiguda, and Begumpet—completely bypassing outsourced call center agents who possess zero authority to sanction debt waivers. Fourth, they provide comprehensive physical court representation across all Hyderabad, Secunderabad, and Cyberabad courts, obtaining bail, dismissing frivolous applications, and transforming hostile litigation into legally enforceable compromise settlements.
              </p>
            </section>

            {/* Section 4: TSLSA Lok Adalat Settlement Mechanics */}
            <section id="tslsa-lok-adalat-mechanics" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Landmark className="w-4 h-4" />
                <span>4. Conciliation &amp; Lok Adalat Frameworks</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Telangana State Legal Services Authority (TSLSA) Lok Adalat Settlement Mechanics
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                The National Lok Adalat system, organized across Telangana by the Telangana State Legal Services Authority (TSLSA) and the Hyderabad and Ranga Reddy District Legal Services Authorities (DLSA), represents the most powerful, legally binding, and cost-effective mechanism for resolving defaulted personal loans. Convened quarterly across the High Court for the State of Telangana, City Civil Courts at Purani Haveli, Metropolitan Criminal Courts at Nampally, and District Courts at L.B. Nagar and Secunderabad, Lok Adalats function as statutory alternative dispute resolution forums established under the Legal Services Authorities Act, 1987.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Each Lok Adalat bench comprises a sitting or retired judicial officer paired with an experienced legal conciliator. In this forum, adversarial litigation gives way to structured conciliation. Financial institutions attend through authorized Stressed Asset managers possessing pre-approved settlement discount limits. Your advocate submits verified documentary evidence of financial hardship—such as corporate pink slips, medical records, GST revenue declines, or bank statements—to justify substantial principal haircuts.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                Under Section 21 of the Legal Services Authorities Act, 1987, an award passed by a Lok Adalat bench is deemed to be a final decree of a Civil Court. Crucially, no appeal lies against a Lok Adalat award in any higher court, providing absolute finality and permanently extinguishing all past and future claims by the bank. Furthermore, under Section 16 of the Court Fees Act, 1870, any court fee deposited by the lender is refunded in full upon Lok Adalat settlement, giving financial institutions strong financial motivation to approve favorable settlement terms.
              </p>
            </section>

            {/* Section 5: Custom Infographic Banner */}
            <div id="compact-infographic-banner" className="scroll-mt-24">
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
                        Personal Loan Settlement in Hyderabad &amp; Secunderabad: Process &amp; Rights
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/personal-loan-settlement-hyderabad.jpg"
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
                      src="/images/infographics/personal-loan-settlement-hyderabad.jpg"
                      alt="Loan Settlement Advocates in Hyderabad Summary Infographic"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Takeaway:</strong> Specialized Hyderabad advocate representation eliminates recovery harassment, dismisses Section 138/25 summons, and delivers 40%–70% OTS waivers backed by unappealable TSLSA Lok Adalat decrees.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Section 6: Step-by-Step Defense Protocol */}
            <section id="step-by-step-defense-protocol" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>5. Procedural Workflow &amp; Legal Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                The 5-Stage Legal Defense &amp; Settlement Protocol in Hyderabad &amp; Secunderabad
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Securing an optimal One-Time Settlement (OTS) with full legal protection requires a disciplined, multi-stage procedural roadmap. When borrowers attempt informal negotiations directly with field recovery personnel, recovery agents exploit their lack of statutory knowledge to collect piecemeal token payments that simply reset statutory limitation periods under the Limitation Act, 1963, without reducing the underlying debt obligation.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                <strong>Stage 1: Forensic Financial &amp; Jurisdiction Audit (Days 1–5):</strong> The advocate inspects the entire loan docket, including sanction agreements, repayment records, interest calculation statements, and demand notices. The advocate confirms jurisdictional compliance across Nampally, L.B. Nagar, or Secunderabad courts and determines the core principal versus inflated penal interest.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                <strong>Stage 2: Formal Advocate Reply &amp; Anti-Harassment Notice (Days 6–15):</strong> A comprehensive legal response is issued to the bank&apos;s demand notice via Registered Post AD and official legal email. The notice places the borrower&apos;s genuine financial hardship on record, invokes RBI Fair Practices Directives, and issues a formal cease-and-desist warning against third-party recovery agencies, halting office and home visits immediately.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                <strong>Stage 3: Bilateral Negotiation &amp; TSLSA Pre-Litigation Conciliation (Days 16–35):</strong> The advocate submits a formal OTS proposal directly to the bank&apos;s Zonal Stressed Assets Recovery Branch in Hyderabad. If court notices have been issued, the advocate enters appearance before the DLSA mediation center or the concerned Magistrate to structure a realistic lump-sum or structured installment settlement.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                <strong>Stage 4: Verification of Official Bank Sanction Letter (Days 36–45):</strong> Before any funds are disbursed, the advocate conducts a rigorous forensic review of the settlement sanction letter. The document must be on official bank letterhead, digitally signed by an authorized Zonal Credit Manager with employee credentials, state the exact settlement amount and payment schedule, and covenant the withdrawal of all court proceedings upon payment.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                <strong>Stage 5: Court Disposal, ₹0 NDC &amp; Credit Registry Update (Days 46–60):</strong> Following final settlement payment through official banking channels (NEFT/RTGS), the advocate ensures the formal withdrawal and compounding of all Section 138 NI Act, Section 25 PSSA, or civil recovery proceedings before the Magistrate. The firm secures the physical No Dues Certificate (NDC) and monitors credit bureau reporting to ensure the account reflects &apos;Settled&apos; status with ₹0 balance.
              </p>
            </section>

            {/* Section 7: Banking Accounting Rules & NPV Calculations */}
            <section id="npv-accounting-and-waivers" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>6. Banking Accounting &amp; NPV Mechanics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Banking NPA Accounting Rules, NPV Calculations &amp; Securing 40%–70% Waivers
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Negotiating maximum debt waivers with public and private sector banks in Hyderabad requires a clear understanding of how Indian banking institutions account for Non-Performing Assets (NPAs). Under Reserve Bank of India Master Directions on Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP), a loan account where EMI payments remain overdue for more than 90 days is classified as a Non-Performing Asset (Substandard). As delinquency crosses 12 months, the account transitions into Doubtful and ultimately Loss asset categories.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                For unsecured personal loans, banks are mandated by RBI regulations to maintain heavy balance sheet provisioning—ranging from 25% for substandard assets up to 100% full provisioning for doubtful and loss assets. This means the bank has already absorbed the financial loss against its operating capital reserves. Prolonged civil litigation in Telangana courts can take 4 to 6 years and incur substantial advocate retainers, court filing fees, and administrative overheads, with uncertain recovery outcomes.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                Banks therefore evaluate One-Time Settlement proposals through a strict financial formula known as the <strong>Net Present Value (NPV) of Realizable Recovery</strong>:
              </p>

              {/* Formula Callout Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated recoveries, r is the discount rate, and deductions account for 3–5 years of court friction and capital locked in NPA provisions across Telangana civil courts.
                </p>
              </div>
            </section>

            {/* Section 8: Anti-Harassment Protections & Telangana HC Rules */}
            <section id="anti-harassment-telangana-hc" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>7. Anti-Harassment &amp; Legal Precedents</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Enforcing Anti-Harassment Protections &amp; High Court of Telangana Precedents
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Borrowers across Hyderabad, Secunderabad, and Cyberabad frequently face aggressive overreach by unregulated recovery agencies acting on behalf of major financial institutions. Common abusive tactics include relentless calling outside permissible hours, abusive language, sending intimidating groups of recovery agents to residential gated communities in Gachibowli, Miyapur, Kondapur, or Uppal, visiting corporate workplaces in HITEC City or Madhapur, and contacting non-guarantor colleagues or relatives.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                These coercive actions directly violate the <strong>RBI Master Direction on Fair Practices Code for Lenders</strong> and the <strong>RBI Master Circular on Recovery Agents</strong>. Under RBI directives, recovery agents are strictly prohibited from: (1) Calling or visiting borrowers before 08:00 AM or after 07:00 PM; (2) Contacting colleagues, workplace supervisors, or neighbors who are not co-borrowers or legal guarantors; (3) Using threatening, abusive, or defamatory language; and (4) Entering the borrower&apos;s premises without carrying official bank identity cards and authorized recovery letters.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                In landmark rulings by the Supreme Court of India (<em>ICICI Bank Ltd. v. Prakash Kaur</em>) and the High Court for the State of Telangana, the judiciary has firmly established that banks cannot employ musclemen or coercive recovery tactics, holding lenders vicariously liable for criminal acts of their recovery agencies. When harassment occurs, your advocate issues an immediate Cease-and-Desist notice to the bank&apos;s Principal Nodal Officer and Managing Director, files an urgent complaint on the RBI Complaint Management System (CMS), and initiates criminal complaints for criminal intimidation under Bharatiya Nyaya Sanhita (BNS) before the jurisdictional Chief Metropolitan Magistrate.
              </p>
            </section>

            {/* Section 9: Sanction Letter Verification */}
            <section id="sanction-letter-verification" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileText className="w-4 h-4" />
                <span>8. Settlement Verification &amp; Post-Closure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Legal Settlement Verification: Sanction Letters vs Final No Dues Certificates (NDC)
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                A critical danger for distressed borrowers in Hyderabad is falling victim to settlement scams orchestrated by third-party collection agents who offer verbal settlement discounts or issue forged WhatsApp settlement letters to meet monthly recovery quotas. Once the borrower pays the discounted amount into a personal account or without formal bank sanction, the lender credits the funds as regular overdue interest, leaving the total loan balance active and litigation ongoing.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                A legitimate, legally binding settlement requires strict verification of two mandatory documents:
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                <strong>1. The Official Settlement Sanction Letter:</strong> This document must be issued directly by the bank or NBFC on registered corporate letterhead, carrying a unique reference number, digital authentication or physical signature from a designated Zonal Credit Officer, complete borrower particulars, loan account number, explicit settlement consideration amount, precise payment due dates, and bank account details registered under the lender&apos;s corporate name.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                <strong>2. The Physical No Dues Certificate (NDC) &amp; CIBIL Updation:</strong> Within 30 days of completing the agreed settlement payment, the bank is legally obligated under RBI directions to issue a formal No Dues Certificate confirming full discharge of liabilities and specifying ₹0 outstanding balance. Your advocate submits the NDC before the concerned Magistrate Court to record formal compounding of offenses under Section 138/25 and ensures the lender updates credit information companies (CIBIL, Experian, CRIF High Mark) to reflect &apos;Settled&apos; status.
              </p>
            </section>

            {/* Section 10: Hyderabad Court Matrix & Channels Comparison Tables */}
            <section id="hyderabad-court-directory-matrix" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4" />
                <span>9. Hyderabad Courts Directory &amp; Resolution Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Hyderabad, Secunderabad &amp; Ranga Reddy District Courts Directory &amp; Jurisdiction Matrix
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Understanding which court complex holds territorial jurisdiction over your personal loan dispute is essential for timely legal intervention. Below is the comprehensive jurisdiction matrix for district courts across Hyderabad, Secunderabad, and Ranga Reddy where loan recovery litigation, Section 138 NI Act trials, and TSLSA Lok Adalats are conducted:
              </p>

              {/* Table 1: Hyderabad District Courts Directory */}
              <div className="overflow-x-auto my-6">
                <table className="w-full text-xs sm:text-sm text-left text-slate-700 border border-slate-300 rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr>
                      <th className="bg-slate-100 font-bold text-slate-900 border-b border-slate-300 p-3">Court Complex</th>
                      <th className="bg-slate-100 font-bold text-slate-900 border-b border-slate-300 p-3">Jurisdiction Coverage</th>
                      <th className="bg-slate-100 font-bold text-slate-900 border-b border-slate-300 p-3">Primary Proceedings</th>
                      <th className="bg-slate-100 font-bold text-slate-900 border-b border-slate-300 p-3">Lok Adalat Body</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900 border-b border-slate-200">Metropolitan Criminal Courts, Nampally</td>
                      <td className="p-3 border-b border-slate-200">Hyderabad Central (Nampally, Abids, Banjara Hills, Jubilee Hills)</td>
                      <td className="p-3 border-b border-slate-200">Sec 138 NI Act, Special Magistrate Trials, Bail Matters</td>
                      <td className="p-3 border-b border-slate-200">Hyderabad Metropolitan DLSA</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900 border-b border-slate-200">City Civil Court, Purani Haveli</td>
                      <td className="p-3 border-b border-slate-200">Chief Judge City Civil Court, Old City &amp; Central Hyderabad</td>
                      <td className="p-3 border-b border-slate-200">Summary Civil Suits (Order 37 CPC), Arbitration Appeals</td>
                      <td className="p-3 border-b border-slate-200">City Civil Court Legal Services Authority</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900 border-b border-slate-200">Ranga Reddy District Court, L.B. Nagar</td>
                      <td className="p-3 border-b border-slate-200">Cyberabad, Gachibowli, Madhapur, Serilingampally, L.B. Nagar</td>
                      <td className="p-3 border-b border-slate-200">Sec 138 NI Act, Sec 25 PSSA, IT Corridor Loan Defaults</td>
                      <td className="p-3 border-b border-slate-200">Ranga Reddy DLSA</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900 border-b border-slate-200">Kukatpally &amp; Miyapur Courts</td>
                      <td className="p-3 border-b border-slate-200">North-West Hyderabad (Kukatpally, Miyapur, Nizampet, Bachupally)</td>
                      <td className="p-3 border-b border-slate-200">Sec 138 NI Act, NBFC Default Litigations, Pre-Litigation Conciliation</td>
                      <td className="p-3 border-b border-slate-200">Ranga Reddy DLSA (Kukatpally)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900 border-b border-slate-200">Secunderabad City Civil Courts</td>
                      <td className="p-3 border-b border-slate-200">Secunderabad, Begumpet, Marredpally, Alwal, Cantonment</td>
                      <td className="p-3 border-b border-slate-200">Sec 138 NI Act, Section 25 PSSA, Commercial Debt Injunctions</td>
                      <td className="p-3 border-b border-slate-200">Secunderabad Legal Services Committee</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Malkajgiri &amp; Medchal District Courts</td>
                      <td className="p-3">Medchal-Malkajgiri District (Uppal, ECIL, Kompally, Medchal)</td>
                      <td className="p-3">Sec 138 NI Act, Bank Conciliation, Summary Civil Suits</td>
                      <td className="p-3">Medchal-Malkajgiri DLSA</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-8 mb-4">
                Comparative Resolution Channels: Lok Adalat vs Direct Settlement vs Court Litigation
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Borrowers facing loan defaults must evaluate their strategic options across speed, cost, legal finality, and potential debt haircut. The following table provides a comprehensive forensic comparison of available resolution channels:
              </p>

              {/* Table 2: Resolution Channels Comparison */}
              <div className="overflow-x-auto my-6">
                <table className="w-full text-xs sm:text-sm text-left text-slate-700 border border-slate-300 rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr>
                      <th className="bg-slate-100 font-bold text-slate-900 border-b border-slate-300 p-3">Resolution Channel</th>
                      <th className="bg-slate-100 font-bold text-slate-900 border-b border-slate-300 p-3">Average Resolution Time</th>
                      <th className="bg-slate-100 font-bold text-slate-900 border-b border-slate-300 p-3">Average Debt Haircut</th>
                      <th className="bg-slate-100 font-bold text-slate-900 border-b border-slate-300 p-3">Legal Enforceability</th>
                      <th className="bg-slate-100 font-bold text-slate-900 border-b border-slate-300 p-3">Court Fee &amp; Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900 border-b border-slate-200">TSLSA Lok Adalat</td>
                      <td className="p-3 border-b border-slate-200">1 to 2 Sessions (Same Day Disposal)</td>
                      <td className="p-3 border-b border-slate-200">45% to 70% Waiver</td>
                      <td className="p-3 border-b border-slate-200">Final Civil Court Decree (No Appeal Lies)</td>
                      <td className="p-3 border-b border-slate-200">₹0 (Court Fees 100% Refunded)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900 border-b border-slate-200">Advocate Bilateral OTS Negotiation</td>
                      <td className="p-3 border-b border-slate-200">30 to 45 Days</td>
                      <td className="p-3 border-b border-slate-200">40% to 65% Waiver</td>
                      <td className="p-3 border-b border-slate-200">Legally Binding Bank Sanction Contract</td>
                      <td className="p-3 border-b border-slate-200">Nominal Advocate Advisory Fee</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Contested Court Litigation (Civil/138)</td>
                      <td className="p-3">4 to 6 Years</td>
                      <td className="p-3">0% (Full Principal + Cumulative Interest)</td>
                      <td className="p-3">Contested Judicial Judgment Subject to Appeals</td>
                      <td className="p-3">Heavy Court Fees &amp; Ongoing Litigation Expenses</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Company Section Placement: Directly inside middle content column before FAQ */}
            <CompanySection />

            {/* Section 11: Interactive FAQ Accordion */}
            <section id="faqs" className="scroll-mt-24 mb-12 mt-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>10. Common Questions &amp; Legal Answers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                Frequently Asked Questions: Loan Settlement Advocates in Hyderabad
              </h2>

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

            {/* Authority Sources Strip (5 Official Links) */}
            <div className="bg-slate-100 border border-slate-200 rounded-2xl p-5 my-8 text-xs text-slate-600">
              <div className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                <Landmark className="w-4 h-4 text-[#1F5EFF]" />
                <span>Statutory Regulatory &amp; Judicial References</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#1F5EFF] hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Reserve Bank of India: Fair Practices Code &amp; Recovery Directives</span>
                </a>
                <a
                  href="https://tshc.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#1F5EFF] hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>High Court for the State of Telangana: Appellate Orders &amp; Jurisprudence</span>
                </a>
                <a
                  href="https://tslsa.telangana.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#1F5EFF] hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Telangana State Legal Services Authority (TSLSA): Lok Adalat</span>
                </a>
                <a
                  href="https://ecourts.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#1F5EFF] hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>eCourts Services India: Hyderabad &amp; Ranga Reddy District Cause Lists</span>
                </a>
                <a
                  href="https://legalaffairs.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#1F5EFF] hover:underline sm:col-span-2"
                >
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Ministry of Law &amp; Justice: Legal Services Authorities Act, 1987 (Sec 21)</span>
                </a>
              </div>
            </div>

            {/* 10 Internal Topic Badges */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Related Legal &amp; Debt Resolution Guides
              </h4>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/personal-loan-settlement-mumbai"
                  className="py-1.5 px-3 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-medium transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement Mumbai
                </Link>
                <Link
                  href="/personal-loan-settlement-delhi-ncr"
                  className="py-1.5 px-3 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-medium transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement Delhi NCR
                </Link>
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-1.5 px-3 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-medium transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Lok Adalat Notice for Personal Loan
                </Link>
                <Link
                  href="/section-138-cheque-bounce-loan-default"
                  className="py-1.5 px-3 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-medium transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Section 138 Cheque Bounce Defense
                </Link>
                <Link
                  href="/personal-loan-settlement-services"
                  className="py-1.5 px-3 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-medium transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement Services
                </Link>
                <Link
                  href="/personal-loan-settlement-company"
                  className="py-1.5 px-3 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-medium transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Best Debt Settlement Companies
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-1.5 px-3 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-medium transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Settlement Impact on CIBIL Score
                </Link>
                <Link
                  href="/recovery-agent-visiting-workplace-office"
                  className="py-1.5 px-3 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-medium transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Stop Recovery Agent Workplace Visits
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-medium transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  No Dues Certificate (NDC) Verification
                </Link>
                <Link
                  href="/hdfc-personal-loan-settlement"
                  className="py-1.5 px-3 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-medium transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  HDFC Bank Personal Loan Settlement
                </Link>
              </div>
            </div>
          </main>

          {/* Right Column (Sidebar Cards) */}
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
                Ashish is a premier banking law strategist who has advised on over 1,400+ debt settlement cases across Nampally, Purani Haveli, L.B. Nagar, and Secunderabad courts. He specializes in TSLSA Lok Adalat conciliation, Section 138/25 defense, and RBI Fair Practices enforcement.
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
                <PhoneCall className="w-4 h-4" />
                <span>Hyderabad Advocate Hotline</span>
              </div>
              <h3 className="text-xl font-black mb-3 leading-tight">
                Facing Court Summons in Hyderabad?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Received a legal notice or court summons from Nampally, Purani Haveli, L.B. Nagar, or Secunderabad? Stop recovery harassment and let our senior advocates handle your Lok Adalat defense and negotiate a formal 40%–70% OTS waiver.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white hover:bg-slate-100 text-[#1F5EFF] font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 shadow"
              >
                Talk to a Hyderabad Settlement Advocate
              </Link>
            </div>

            {/* Card 3: Trust Signals Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                <span>Why Borrowers Trust SettleLoans</span>
              </h4>
              <ul className="space-y-3.5 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct Court Defense:</strong> Empanelled advocates represent you directly in Nampally, Purani Haveli, L.B. Nagar, Kukatpally, and Secunderabad Courts.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>TSLSA Lok Adalat Representation:</strong> Strategic advocacy during National and State Lok Adalats to obtain unappealable civil compromise decrees.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Injunctions:</strong> Immediate legal notices to stop illegal recovery visits at your Hyderabad home or corporate IT office.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed ₹0 NDC:</strong> Complete tracking until official No Dues Certificates are delivered and pending criminal/civil proceedings are formally withdrawn.
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
