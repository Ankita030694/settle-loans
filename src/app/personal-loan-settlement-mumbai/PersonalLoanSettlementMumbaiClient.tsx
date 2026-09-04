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
  MapPin
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

export default function PersonalLoanSettlementMumbaiClient() {
  const [activeId, setActiveId] = useState<string>('mumbai-corporate-debt-landscape');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'mumbai-corporate-debt-landscape', title: '1. Mumbai MMR Debt Ecosystem' },
    { id: 'civil-vs-criminal-traps', title: '2. Civil Debt vs Criminal Traps' },
    { id: 'role-of-settlement-advocate', title: '3. Role of a Mumbai Settlement Advocate' },
    { id: 'mslsa-lok-adalat-mechanics', title: '4. MSLSA Lok Adalat Mechanics' },
    { id: 'compact-infographic-banner', title: '5. Legal Defense Blueprint' },
    { id: 'step-by-step-defense-protocol', title: '6. 5-Stage Settlement Protocol' },
    { id: 'npv-accounting-and-waivers', title: '7. NPV Formulas & 40-70% Waivers' },
    { id: 'anti-harassment-bombay-hc', title: '8. Anti-Harassment & Bombay HC Rules' },
    { id: 'sanction-letter-verification', title: '9. Sanction Letter vs ₹0 NDC' },
    { id: 'mumbai-court-directory-matrix', title: '10. Mumbai Court Matrix & Channels' },
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
      question: "Why do salaried corporate employees in Mumbai need specialized loan settlement services?",
      answer: (
        <p>
          Corporate professionals working in major commercial hubs such as Bandra-Kurla Complex (BKC), Lower Parel, Nariman Point, and Andheri face distinct financial exposures when high living costs, rent escalations, or corporate restructuring trigger personal loan defaults. Major scheduled banks and NBFCs deploy aggressive recovery law panels across Mumbai Metropolitan Magistrate courts. A specialized debt settlement advocate understands banking NPA provisioning cycles, Net Present Value recovery mandates, and MSLSA Lok Adalat conciliation to negotiate 40% to 70% waivers while insulating corporate careers from workplace harassment.
        </p>
      )
    },
    {
      question: "What legal steps should I take if I receive a Section 138 summons from Ballard Pier or Bandra Court?",
      answer: (
        <p>
          Never ignore a formal court summons. If a complaint is filed under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act, your Mumbai advocate will file a Vakalatnama, secure immediate bail on your first appearance, examine the territorial jurisdiction under statutory rules, and move an application under Section 147 NI Act to refer the dispute to MSLSA Lok Adalat or pre-trial mediation for a binding compromise.
        </p>
      )
    },
    {
      question: "Can Mumbai, Thane, or Navi Mumbai Police arrest me for defaulting on an unsecured personal loan?",
      answer: (
        <p>
          <strong>No. Defaulting on an unsecured personal loan is strictly a civil breach of contract</strong> under the Indian Contract Act, 1872. The Mumbai Police, Thane Police Commissionerate, and Navi Mumbai Police have zero statutory authority to arrest, detain, or summon borrowers over pure financial defaults. If collection agencies file frivolous Section 420 IPC complaints, your advocate can cite Supreme Court mandates in <em>Arnesh Kumar v. State of Bihar</em> to dismiss them immediately.
        </p>
      )
    },
    {
      question: "How does Lok Adalat settlement work under the Maharashtra State Legal Services Authority (MSLSA)?",
      answer: (
        <p>
          MSLSA organizes regular National and State Lok Adalats across the High Court of Bombay, City Civil &amp; Sessions Courts, and District Courts in Thane and Belapur. When a loan dispute is placed before a Lok Adalat panel comprising a judicial officer and a conciliation member, both sides negotiate a discounted lump sum. An award passed under Section 21 of the Legal Services Authorities Act, 1987, operates as a final, unappealable civil decree, fully refunding court fees and permanently extinguishing all bank claims.
        </p>
      )
    },
    {
      question: "What percentage of debt waiver is achievable for personal loans in Mumbai and MMR?",
      answer: (
        <p>
          Depending on delinquency aging (typically 90 to 180+ days past due), verified financial hardship (job loss, medical emergency, business cash flow loss), and asset classification (NPA Substandard, Doubtful, or Loss), seasoned Mumbai advocates typically secure <strong>40% to 70% waivers</strong> on total outstanding book dues, along with a 100% complete waiver of late payment penalties, penal interest, and legal charges.
        </p>
      )
    },
    {
      question: "How do legal advocates protect Mumbai professionals from recovery agent visits at corporate offices?",
      answer: (
        <p>
          Advocates issue formal Cease-and-Desist legal notices citing RBI Master Directions on Recovery Agents, Section 35A of the Banking Regulation Act, and landmark Bombay High Court rulings. The notice explicitly warns the bank and its agency against visiting corporate workplaces in BKC, Nariman Point, or Mindspace Malad. If unauthorized visits occur, advocates initiate criminal complaints for criminal intimidation and lodge formal grievances with the RBI Banking Ombudsman.
        </p>
      )
    },
    {
      question: "How do banks calculate One-Time Settlement (OTS) haircuts using Net Present Value (NPV)?",
      answer: (
        <p>
          Banks evaluate OTS offers by comparing immediate cash recovery against the Net Present Value of prolonged litigation in Mumbai courts. Because summary civil suits and execution proceedings can take 4 to 7 years in Mumbai, incurring substantial counsel fees and court costs, an immediate lump-sum settlement of 30% to 50% of the book debt often yields a higher Net Present Value for the lender than uncertain future recovery.
        </p>
      )
    },
    {
      question: "How do I ensure that a loan settlement in Mumbai is legally binding and not a recovery scam?",
      answer: (
        <p>
          Never pay recovery agents directly or transfer funds to personal accounts. A legitimate settlement requires a formal, digitally verifiable Sanction Letter generated on the official letterhead of the bank or NBFC, issued by its Zonal Stressed Assets Management Branch (SAMB). Payment must be made directly into the borrower&apos;s designated loan account, followed by an official ₹0 No Dues Certificate (NDC) and credit bureau update.
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
            <span>Mumbai MMR Legal Defense • Court Representation</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            Loan Settlement Services in Mumbai: <span className="text-[#3b82f6] md:text-[#60a5fa]">Legal Defense, MSLSA Lok Adalat &amp; OTS Strategy</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Facing legal notices, Section 138/25 summons, or aggressive recovery agents across Mumbai, Thane, or Navi Mumbai? Retain experienced debt settlement advocates to secure binding compromise decrees and 40% to 70% debt waivers under RBI guidelines.
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
              <span>Bar Council of Maharashtra &amp; MSLSA Aligned</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Connect with Mumbai Advocate</span>
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
                <span>Mumbai MMR Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Facing loan litigation across Fort, Esplanade, Bandra, Borivali, or Thane? Experienced Mumbai debt advocates provide court defense, halt workplace harassment in BKC/Lower Parel, and secure 40%–70% OTS waivers backed by unappealable MSLSA Lok Adalat decrees.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">
            
            {/* Key Takeaways Box (Top) */}
            <div className="bg-blue-50 border-l-8 border-[#1F5EFF] rounded-r-2xl p-6 md:p-8 mb-10 shadow-sm">
              <div className="flex items-center gap-2 text-[#1F5EFF] font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5" />
                <span>KEY TAKEAWAYS: LOAN SETTLEMENT &amp; LEGAL RIGHTS IN MUMBAI MMR</span>
              </div>
              <ul className="space-y-3 text-sm md:text-base text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Strict Civil Protection:</strong> Personal loan default is purely a civil breach of contract under the Indian Contract Act, 1872. Mumbai, Thane, and Navi Mumbai Police have zero legal authority to arrest, summon, or file FIRs for unpaid unsecured loans.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Court Summons &amp; Bail Defense:</strong> Section 138 NI Act or Section 25 PSSA summons issued by Ballard Pier, Esplanade, Bandra, or Borivali courts are bailable matters where your advocate secures bail on day one, halting coercive warrants.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>40%–70% OTS Debt Waivers:</strong> High-ticket salaried corporate borrowers facing financial hardship qualify for 40% to 70% principal waivers and 100% penal interest relief based on RBI IRACP provisioning and Net Present Value (NPV) formulas.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Unappealable MSLSA Lok Adalat Decrees:</strong> Compromise settlements executed at Maharashtra State Legal Services Authority Lok Adalats function as final Civil Court decrees under Section 21 of the LSA Act, 1987, securing permanent ₹0 NDC closure.
                  </span>
                </li>
              </ul>
            </div>
            
            {/* Section 1: Mumbai MMR Corporate Debt Landscape */}
            <section id="mumbai-corporate-debt-landscape" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. Mumbai MMR Debt Ecosystem &amp; Banking Litigation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Navigating High-Ticket Debt Traps &amp; Bank Recovery in Mumbai, Thane &amp; Navi Mumbai
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                The Mumbai Metropolitan Region (MMR) functions as India&apos;s commercial epicenter, hosting the headquarters of major scheduled commercial banks, multinational financial institutions, and leading Non-Banking Financial Companies (NBFCs). It also concentrates India&apos;s highest density of salaried corporate executives, investment professionals, IT leaders, and business founders across hubs like Bandra-Kurla Complex (BKC), Lower Parel, Nariman Point, Andheri East, Powai, Thane, and Navi Mumbai. While corporate salaries in Mumbai are substantial, the cost of living—characterized by staggering rental expenses, premium home loan EMIs, children&apos;s education fees, and lifestyle inflation—leaves corporate borrowers exceptionally vulnerable to sudden economic shocks.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                When tech restructuring, BFSI downsizing, equity market corrections, business revenue slowdowns, or acute medical emergencies occur, high-ticket unsecured personal loans (ranging from ₹10 Lakhs to ₹50 Lakhs or more) rapidly turn into overwhelming debt spirals. Borrowers frequently juggle multiple credit lines across institutions like HDFC Bank, ICICI Bank, State Bank of India, Axis Bank, Kotak Mahindra Bank, and Bajaj Finance. Because corporate professionals have significant social capital and sensitive corporate reputations, institutional lenders deploy highly aggressive empanelled recovery lawyers and third-party agencies to enforce recovery through psychological coercion and multi-court litigation across Mumbai.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                Navigating this aggressive ecosystem requires institutional-grade legal representation. Institutional recovery mechanisms in Mumbai are heavily concentrated across specialized metropolitan magistrate courts, including Ballard Pier, Esplanade, Bandra, Borivali, Kurla, and Thane District Courts. Without an experienced debt settlement advocate who understands banking NPA accounting cycles, territorial jurisdiction challenges, and the conciliation powers of the Maharashtra State Legal Services Authority (MSLSA), corporate borrowers risk severe career disruption, ex-parte judicial decrees, and ongoing harassment at their residential societies and corporate workplaces.
              </p>
            </section>

            {/* Section 2: Civil Debt Default vs Criminal Traps */}
            <section id="civil-vs-criminal-traps" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>2. Statutory Defense &amp; Criminal Misconceptions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Civil Debt Default vs Criminal Traps: Section 138 NI Act &amp; Section 25 PSSA Defense
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Under established Indian civil jurisprudence governed by the Indian Contract Act, 1872, the inability to repay an unsecured personal loan due to genuine financial insolvency is strictly a civil breach of contract. The Supreme Court of India and the Bombay High Court have consistently held that financial default does not constitute criminal breach of trust (Section 406 IPC / Section 316 BNS) or cheating (Section 420 IPC / Section 318 BNS) unless fraudulent intention was present at the inception of the loan agreement. Neither the Mumbai Police, Thane Police Commissionerate, nor Navi Mumbai Police possess legal jurisdiction to register FIRs, arrest debtors, or intervene in civil loan recoveries.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                To bypass the extensive delays of regular civil recovery suits under Order XXXVII of the Code of Civil Procedure (CPC), banks systematically leverage quasi-criminal statutory routes. Specifically, lenders deposit blank security cheques or execute automated electronic National Automated Clearing House (NACH) mandates to create return memos, subsequently filing criminal complaints under Section 138 of the Negotiable Instruments Act, 1881, or Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA). These complaints are filed in high-volume Metropolitan Magistrate courts at Ballard Pier, Esplanade, Bandra, or Borivali, resulting in judicial summons being served to the borrower&apos;s residential address.
              </p>
              
              {/* Statutory Callout Box */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-2xl my-6 shadow-sm">
                <div className="flex items-center gap-2 font-bold text-amber-900 text-sm mb-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Crucial Judicial Distinction: Summons vs Non-Bailable Warrants</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                  A court summons under Section 138 NI Act or Section 25 PSSA is a judicial notice to appear, not an immediate arrest warrant. When represented by a seasoned Mumbai debt settlement advocate, your lawyer enters an immediate appearance via Vakalatnama, secures bail on the first hearing without detention, examines territorial jurisdiction under the 2015 NI Act amendments, and files a formal application under Section 147 NI Act to refer the dispute to MSLSA Lok Adalat for compounding and permanent closure.
                </p>
              </div>

              <p className="text-base text-slate-700 leading-relaxed">
                Additionally, financial institutions frequently invoke standard arbitration clauses in loan contracts, unilaterally appointing sole arbitrators based in Mumbai or Delhi without mutual consent. In landmark rulings such as <em>Perkins Eastman Architects DPC v. HSCC India Ltd (2020)</em> and <em>TRF Ltd. v. Energo Engineering Projects Ltd.</em>, the Supreme Court ruled that unilateral arbitrator appointments are void ab initio. Experienced Mumbai advocates challenge these unilateral arbitrations before the High Court of Bombay and City Civil Courts, staying ex-parte interim awards under Section 9 or Section 17 of the Arbitration Act and forcing the bank into bilateral settlement discussions.
              </p>
            </section>

            {/* Section 3: Role of a Mumbai Settlement Advocate */}
            <section id="role-of-settlement-advocate" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4" />
                <span>3. Advocacy &amp; Institutional Leverage</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                The Strategic Role of a Personal Loan Settlement Advocate in Mumbai MMR
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Handling loan default in Mumbai without specialized legal counsel leaves corporate borrowers highly exposed. Third-party collection agencies rely on psychological pressure, unauthorized phone calls to corporate HR departments, and unannounced visits to residential gated societies in Powai, Bandra, Thane, or Palm Beach Road to coerce borrowers into liquidating retirement funds or taking catastrophic informal loans. Engaging an experienced debt settlement advocate shifts the entire engagement into formal statutory channels where the borrower&apos;s rights are fully protected.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                A specialized Mumbai settlement lawyer executes five essential institutional functions: First, they conduct an extensive forensic audit of the loan ledger, isolating legitimate principal balances from inflated penal interest, compounded late charges, and unauthorized insurance levies. Second, they serve comprehensive legal replies to bank demand notices, placing the borrower&apos;s genuine financial hardship on formal judicial record and barring the lender from obtaining summary ex-parte orders.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                Third, your advocate interfaces directly with institutional credit decision-makers—such as the Zonal Stressed Assets Management Branches (SAMB) and Regional Credit Committees located at Nariman Point, BKC, and Fort—completely bypassing outsourced call centers that lack the statutory mandate to approve principal debt waivers. Fourth, they provide robust physical representation across all Mumbai MMR courts, securing bail, countering coercive applications, and converting adversarial litigation into mutually binding compromise decrees.
              </p>
            </section>

            {/* Section 4: MSLSA Lok Adalat Mechanics */}
            <section id="mslsa-lok-adalat-mechanics" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Landmark className="w-4 h-4" />
                <span>4. Conciliation &amp; Lok Adalat Frameworks</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Maharashtra State Legal Services Authority (MSLSA) Lok Adalat Settlement Mechanics
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                The National Lok Adalat system, organized across Maharashtra by the Maharashtra State Legal Services Authority (MSLSA) and Mumbai District Legal Services Authorities (DLSA), represents the most powerful, legally binding, and cost-effective forum for resolving unsecured personal loan defaults. Convened quarterly across the High Court of Bombay, City Civil &amp; Sessions Courts at Fort and Dindoshi, and District Courts in Thane and Belapur, Lok Adalats function as statutory alternative dispute resolution bodies established under the Legal Services Authorities Act, 1987.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Each Lok Adalat bench comprises a sitting or retired judicial officer and an expert conciliation advocate. In this forum, the adversarial litigation structure is replaced with structured conciliation. Lenders attend through authorized Stressed Asset managers possessing pre-approved settlement discount mandates. Your advocate presents substantiated documentary proof of hardship—such as corporate termination letters, medical discharge summaries, business balance sheet declines, or bank statements—to justify substantial principal haircuts.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                Under Section 21 of the Legal Services Authorities Act, 1987, an award passed by a Lok Adalat bench is deemed to be a final decree of a Civil Court. Crucially, no appeal lies against a Lok Adalat award in any higher court, providing absolute finality and insulating the borrower from any future revived claims by the bank. Moreover, under Section 16 of the Court Fees Act, 1870, any court fee deposited by the bank is refunded in full upon Lok Adalat settlement, creating a strong economic motivation for financial institutions to agree to favorable settlement terms.
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
                        Personal Loan Settlement in Mumbai &amp; MMR: Process &amp; Legal Overview
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/personal-loan-settlement-mumbai.jpg"
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
                      src="/images/infographics/personal-loan-settlement-mumbai.jpg"
                      alt="Loan Settlement Services in Mumbai Summary Infographic"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Takeaway:</strong> Professional Mumbai advocate representation eliminates recovery harassment, dismisses Section 138/25 summons, and delivers 40%–70% OTS waivers backed by unappealable MSLSA Lok Adalat decrees.</span>
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
                The 5-Stage Legal Defense &amp; Settlement Protocol in Mumbai MMR
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Securing an optimal One-Time Settlement (OTS) with complete legal immunity requires a structured, multi-stage procedural workflow. When borrowers attempt informal negotiations directly with field recovery agents, collections staff exploit their lack of legal knowledge to collect piecemeal token payments that simply reset statutory limitation periods under the Limitation Act, 1963, without reducing the underlying principal obligation.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                <strong>Stage 1: Forensic Financial &amp; Jurisdiction Audit (Days 1–5):</strong> The advocate examines the complete loan docket, including loan sanction agreements, repayment track records, interest computation sheets, and demand notices. The advocate confirms territorial jurisdiction across Mumbai, Thane, or Belapur courts and calculates the exact core principal versus inflated interest and late penalties.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                <strong>Stage 2: Formal Advocate Reply &amp; Anti-Harassment Notice (Days 6–15):</strong> A comprehensive legal response is issued to the bank&apos;s legal notice via Registered Post AD and authorized legal email. The notice places the borrower&apos;s genuine financial hardship on record, invokes RBI Fair Practices Directives, and serves an explicit cease-and-desist warning against third-party collection agencies, halting all workplace and residential visits immediately.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                <strong>Stage 3: Bilateral Negotiation &amp; MSLSA Pre-Litigation Conciliation (Days 16–35):</strong> The advocate submits a formal OTS proposal directly to the bank&apos;s Zonal Stressed Assets Desk in Mumbai. If court notices have been issued, the advocate enters appearance before the DLSA mediation center or the concerned Metropolitan Magistrate to structure a realistic, lump-sum or structured installment settlement.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                <strong>Stage 4: Verification of Official Bank Sanction Letter (Days 36–45):</strong> Before any funds are disbursed, the advocate conducts a rigorous forensic review of the settlement sanction letter. The document must be on official bank letterhead, digitally signed by an authorized Zonal Credit Officer with employee credentials, state the exact settlement amount and payment schedule, and covenant the withdrawal of all court proceedings upon payment.
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
                To negotiate maximum debt waivers with public and private sector banks in Mumbai, one must understand how Indian banking institutions account for non-performing assets (NPAs). Under Reserve Bank of India Master Directions on Prudential Norms on Income Recognition, Asset Classification and Provisioning, a loan account where EMI payments remain overdue for more than 90 days is classified as a Non-Performing Asset (Substandard). As default delinquency crosses 12 months, the account transitions into Doubtful and ultimately Loss asset categories.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                For unsecured personal loans, banks are mandated by RBI regulations to maintain heavy balance sheet provisioning—ranging from 25% for substandard assets up to 100% full provisioning for doubtful and loss assets. This means the bank has already absorbed the financial loss against its operating capital reserves. Prolonged civil litigation in Mumbai courts can take 4 to 7 years and incur substantial advocate retainers, court filing fees, and administrative overheads, with uncertain recovery outcomes.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                Banks therefore evaluate One-Time Settlement proposals through a strict financial formula known as the <strong>Net Present Value (NPV) of Realizable Recovery</strong>:
              </p>

              {/* Formula Callout */}
              <div className="bg-slate-900 text-white p-6 rounded-2xl my-6 font-mono text-xs sm:text-sm shadow-md">
                <div className="text-blue-400 font-bold mb-2 font-sans text-xs uppercase tracking-widest">
                  Net Present Value (NPV) Recovery Assessment Formula
                </div>
                <div className="p-3 bg-slate-800 rounded-xl mb-3 text-emerald-400">
                  {'NPV = \\sum \\frac{R_t}{(1 + r)^t} - C_{legal}'}
                </div>
                <p className="text-slate-300 font-sans text-xs leading-relaxed">
                  Where <em>R_t</em> represents estimated future recovery cash flows, <em>r</em> is the bank&apos;s cost of capital, <em>t</em> is the estimated litigation duration in Mumbai courts (years), and <em>C_legal</em> represents court fees and empanelled counsel expenses. When an advocate presents an immediate lump-sum settlement offer that exceeds the discounted NPV of protracted litigation, the Bank&apos;s Credit Committee is economically and procedurally incentivized to approve a 40% to 70% debt haircut.
                </p>
              </div>
            </section>

            {/* Section 8: Anti-Harassment Protections & Bombay HC Rules */}
            <section id="anti-harassment-bombay-hc" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>7. Anti-Harassment &amp; Bombay High Court Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Enforcing Anti-Harassment Protections &amp; Bombay High Court Precedents
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Borrowers in Mumbai, Thane, and Navi Mumbai frequently face aggressive overreach by unregulated recovery agencies acting on behalf of major financial institutions. Common abusive tactics include relentless calling outside permissible hours, abusive language, sending intimidating groups of recovery agents to residential housing societies in Powai, Thane, or Palm Beach Road, visiting corporate workplaces in BKC or Lower Parel, and contacting non-guarantor colleagues or relatives.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                These coercive actions directly violate the <strong>RBI Master Direction on Fair Practices Code for Lenders</strong> and the <strong>RBI Master Circular on Recovery Agents</strong>. Under RBI directives, recovery agents are strictly prohibited from: (1) Calling or visiting borrowers before 08:00 AM or after 07:00 PM; (2) Contacting colleagues, workplace supervisors, or neighbors who are not co-borrowers or legal guarantors; (3) Using threatening, abusive, or defamatory language; and (4) Entering the borrower&apos;s premises without carrying official bank identity cards and authorized recovery letters.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                In landmark rulings by the Supreme Court of India (<em>ICICI Bank Ltd. v. Prakash Kaur</em>) and the High Court of Bombay, the judiciary has firmly established that banks cannot employ musclemen or coercive recovery tactics, holding lenders vicariously liable for criminal acts of their recovery agencies. When harassment occurs, your advocate issues an immediate Cease-and-Desist notice to the bank&apos;s Principal Nodal Officer and Managing Director, files an urgent complaint on the RBI Complaint Management System (CMS), and initiates criminal complaints for criminal intimidation under Bharatiya Nyaya Sanhita (BNS) before the jurisdictional Chief Metropolitan Magistrate.
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
                A critical danger for distressed borrowers in Mumbai is falling victim to settlement scams orchestrated by third-party collection agents who offer verbal settlement discounts or issue forged WhatsApp settlement letters to meet monthly recovery quotas. Once the borrower pays the discounted amount into a personal account or without formal bank sanction, the lender credits the funds as regular overdue interest, leaving the total loan balance active and litigation ongoing.
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

            {/* Section 10: Mumbai Court Matrix & Channels Comparison Tables */}
            <section id="mumbai-court-directory-matrix" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4" />
                <span>9. Mumbai Courts Directory &amp; Resolution Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Mumbai Metropolitan Region District Courts Directory &amp; Jurisdiction Matrix
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Understanding which court complex has jurisdiction over your personal loan dispute is vital for prompt legal intervention. Below is the comprehensive jurisdiction matrix for district courts across Mumbai, Thane, and Navi Mumbai where loan recovery litigation, Section 138 NI Act trials, and MSLSA Lok Adalats are conducted:
              </p>

              {/* Table 1: Mumbai District Courts Directory */}
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
                      <td className="p-3 font-semibold text-slate-900 border-b border-slate-200">Ballard Pier / Fort Court</td>
                      <td className="p-3 border-b border-slate-200">South Mumbai (Colaba, Nariman Point, Fort, Marine Lines)</td>
                      <td className="p-3 border-b border-slate-200">Sec 138 NI Act, Special Financial Courts, Bank Trials</td>
                      <td className="p-3 border-b border-slate-200">Mumbai District Legal Services Authority</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900 border-b border-slate-200">Esplanade Court Complex</td>
                      <td className="p-3 border-b border-slate-200">Chief Metropolitan Magistrate (CMM), South Central Mumbai</td>
                      <td className="p-3 border-b border-slate-200">Sec 138 NI Act Summons, Anti-Harassment Petitions</td>
                      <td className="p-3 border-b border-slate-200">Mumbai City DLSA</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900 border-b border-slate-200">Bandra Metropolitan Court</td>
                      <td className="p-3 border-b border-slate-200">Western Suburbs (Bandra, BKC, Khar, Santacruz, Andheri East/West)</td>
                      <td className="p-3 border-b border-slate-200">Sec 138 NI Act, Section 25 PSSA, Corporate Loan Defaults</td>
                      <td className="p-3 border-b border-slate-200">Mumbai Suburban DLSA (Bandra)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900 border-b border-slate-200">Borivali Metropolitan Court</td>
                      <td className="p-3 border-b border-slate-200">North-West Suburbs (Goregaon, Malad, Kandivali, Borivali, Dahisar)</td>
                      <td className="p-3 border-b border-slate-200">Sec 138 NI Act, NBFC Default Litigations, Summary Suits</td>
                      <td className="p-3 border-b border-slate-200">Mumbai Suburban DLSA (Borivali)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900 border-b border-slate-200">Kurla &amp; Vikroli Courts</td>
                      <td className="p-3 border-b border-slate-200">Eastern Suburbs (Kurla, Ghatkopar, Vikhroli, Bhandup, Mulund)</td>
                      <td className="p-3 border-b border-slate-200">Sec 138 NI Act, Section 25 PSSA, Pre-Litigation Mediation</td>
                      <td className="p-3 border-b border-slate-200">Mumbai Suburban DLSA</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900 border-b border-slate-200">Thane District &amp; Sessions Court</td>
                      <td className="p-3 border-b border-slate-200">Thane City, Ghodbunder Road, Kalyan, Dombivli, Mira-Bhayandar</td>
                      <td className="p-3 border-b border-slate-200">Sec 138 NI Act, Commercial Debt Recovery, Civil Injunctions</td>
                      <td className="p-3 border-b border-slate-200">Thane DLSA / MSLSA</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Belapur / Vashi Judicial Courts</td>
                      <td className="p-3">Navi Mumbai (Vashi, Nerul, Belapur, Kharghar, Panvel, Airoli)</td>
                      <td className="p-3">Sec 138 NI Act, Bank Conciliation, Summary Civil Suits</td>
                      <td className="p-3">Raigad / Thane DLSA</td>
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
                      <td className="p-3 font-semibold text-slate-900 border-b border-slate-200">MSLSA Lok Adalat</td>
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
                      <td className="p-3">4 to 7 Years</td>
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
                Frequently Asked Questions: Loan Settlement Services in Mumbai
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
                  href="https://legalservices.maharashtra.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#1F5EFF] hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Maharashtra State Legal Services Authority (MSLSA): Lok Adalat</span>
                </a>
                <a
                  href="https://bombayhighcourt.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#1F5EFF] hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>High Court of Bombay: Arbitration &amp; Commercial Appellate Decisions</span>
                </a>
                <a
                  href="https://ecourts.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#1F5EFF] hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>eCourts Services India: Mumbai District Courts Cause Lists &amp; Orders</span>
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
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Related Legal &amp; Debt Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2">
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
                  href="/can-bank-seize-property-for-personal-loan"
                  className="py-1.5 px-3 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-medium transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Can Bank Seize Property for Personal Loan
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
                  <div className="font-bold text-slate-900 text-base leading-tight">
                    <Link
                      href="/authors/ashish-jhangra"
                      className="hover:text-[#1F5EFF] transition-colors"
                    >
                      Ashish Jhangra
                    </Link>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">
                    Lead Banking Legal &amp; Debt Settlement Strategist
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Ashish is a seasoned banking law strategist who has advised on over 1,400+ debt settlement cases across Ballard Pier, Esplanade, Bandra, Borivali, and Thane courts. He specializes in MSLSA Lok Adalat conciliation, Section 138/25 defense, and RBI Fair Practices enforcement.
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
                <span>Mumbai MMR Advocate Hotline</span>
              </div>
              <div className="text-xl font-black mb-3 leading-tight">
                Facing Court Summons in Mumbai MMR?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Received a legal notice or court summons from Ballard Pier, Esplanade, Bandra, Borivali, or Thane? Stop harassment and let our senior advocates handle your Lok Adalat defense and negotiate a formal 40%–70% OTS waiver.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white hover:bg-slate-100 text-[#1F5EFF] font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 shadow"
              >
                Talk to a Mumbai Settlement Advocate
              </Link>
            </div>

            {/* Card 3: Trust Signals Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                <span>Why Borrowers Trust SettleLoans</span>
              </div>
              <ul className="space-y-3.5 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct Court Defense:</strong> Empanelled advocates represent you directly in Ballard Pier, Esplanade, Bandra, Borivali, Thane, and Belapur Courts.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>MSLSA Lok Adalat Representation:</strong> Strategic advocacy during National and State Lok Adalats to obtain unappealable civil compromise decrees.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Injunctions:</strong> Immediate legal notices to stop illegal recovery visits at your Mumbai home or corporate workplace.
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
