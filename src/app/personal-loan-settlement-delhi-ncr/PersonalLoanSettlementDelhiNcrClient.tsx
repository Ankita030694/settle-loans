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

export default function PersonalLoanSettlementDelhiNcrClient() {
  const [activeId, setActiveId] = useState<string>('delhi-ncr-debt-landscape');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'key-takeaways', title: 'Executive Key Takeaways' },
    { id: 'delhi-ncr-debt-landscape', title: '1. NCR Court Jurisdiction Dynamics' },
    { id: 'civil-vs-criminal-traps', title: '2. Civil Debt vs Criminal Traps' },
    { id: 'role-of-settlement-lawyer', title: '3. Strategic Role of an NCR Advocate' },
    { id: 'dslsa-lok-adalat-dynamics', title: '4. DSLSA Lok Adalat Settlement Mechanics' },
    { id: 'compact-infographic-banner', title: '5. Legal Defense & Action Blueprint' },
    { id: 'step-by-step-defense-protocol', title: '6. 5-Stage Legal Defense Protocol' },
    { id: 'npv-accounting-and-waivers', title: '7. NPV Formulas & 40-70% Debt Waivers' },
    { id: 'anti-harassment-protections', title: '8. Anti-Harassment & High Court Rules' },
    { id: 'sanction-letter-verification', title: '9. Sanction Letter Forensics & ₹0 NDC' },
    { id: 'ncr-court-directory-matrix', title: '10. NCR Court Matrix & Resolution Channels' },
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
      question: "Why do I need a specialized loan settlement lawyer in Delhi NCR rather than a general practitioner?",
      answer: (
        <p>
          Institutional lenders and NBFCs deploy aggressive recovery law firms across Delhi District Courts (Tis Hazari, Saket, Karkardooma, Rohini, Dwarka). A specialized debt settlement advocate understands banking NPA provisioning cycles, Net Present Value (NPV) recovery mandates, RBI Fair Practices Code enforcement, and DSLSA Lok Adalat benches to negotiate 40% to 70% waivers while insulating you from criminal harassment.
        </p>
      )
    },
    {
      question: "What should I do if I receive a court summons from Tis Hazari or Saket Court for an unsecured personal loan?",
      answer: (
        <p>
          Never ignore a formal court summons. If the summons relates to Section 138 of the Negotiable Instruments Act or Section 25 of the PSS Act, your advocate will file a Vakalatnama, secure immediate bail on the first appearance, examine territorial jurisdiction, and move an application to refer the dispute to National Lok Adalat or pre-trial mediation under Section 89 CPC for a binding compromise.
        </p>
      )
    },
    {
      question: "Can Delhi, Gurugram, or Noida police arrest me for defaulting on an unsecured personal loan?",
      answer: (
        <p>
          <strong>No. Defaulting on an unsecured personal loan is strictly a civil breach of contract</strong> under the Indian Contract Act, 1872. The Delhi Police, Haryana Police, and UP Police have zero statutory authority to arrest, detain, or summon borrowers over pure financial defaults. If recovery agents threaten police intervention or file false Section 420 IPC complaints, your lawyer can invoke Supreme Court directives (<em>Arnesh Kumar v. State of Bihar</em>) to quash such coercive tactics.
        </p>
      )
    },
    {
      question: "How does Lok Adalat settlement work under the Delhi State Legal Services Authority (DSLSA)?",
      answer: (
        <p>
          DSLSA organizes bi-monthly and National Lok Adalats across all Delhi district courts. When a dispute is referred to Lok Adalat, a judicial officer and a conciliation member preside over structured negotiations between your advocate and the bank&apos;s authorized officers. Settlements executed at Lok Adalat result in an unappealable civil court decree under Section 21 of the Legal Services Authorities Act, 1987, ensuring permanent case closure and full refund of court fees.
        </p>
      )
    },
    {
      question: "What percentage of debt waiver can a Delhi NCR settlement advocate realistically secure?",
      answer: (
        <p>
          Depending on delinquency aging, documented financial hardship, and asset classification (NPA Substandard, Doubtful, or Loss), experienced Delhi NCR advocates typically secure between <strong>40% and 70% waivers</strong> on total outstanding book dues. This includes a 100% complete waiver of accumulated late payment penalties, penal interest, and legal recovery expenses.
        </p>
      )
    },
    {
      question: "How do lawyers protect borrowers from aggressive recovery agents visiting homes or workplaces in Delhi, Noida, or Gurgaon?",
      answer: (
        <p>
          Advocates issue formal Cease-and-Desist legal notices citing RBI Master Directions on Recovery Agents, Section 35A of the Banking Regulation Act, and the landmark Supreme Court judgment in <em>ICICI Bank v. Shanti Devi Sharma</em>. If unlawful visits persist, advocates initiate police complaints for criminal intimidation (Sections 351/352 BNS / 503/506 IPC) and file direct complaints before the RBI Banking Ombudsman and Chief Metropolitan Magistrate.
        </p>
      )
    },
    {
      question: "What is the difference between unilateral arbitration in Delhi and civil recovery suits?",
      answer: (
        <p>
          Lenders often invoke standard arbitration clauses to appoint sole arbitrators in Delhi or Mumbai without mutual consent. Under Section 12(5) and the Seventh Schedule of the Arbitration and Conciliation Act, unilateral arbitrator appointments are void ab initio (<em>Perkins Eastman Architects DPC v. HSCC India Ltd</em>). Your advocate can challenge unilateral arbitral proceedings, stay ex-parte awards, and compel the bank into bilateral settlement negotiations.
        </p>
      )
    },
    {
      question: "How do I ensure a loan settlement in Delhi NCR is genuine and not an agent scam?",
      answer: (
        <p>
          Never transfer money to third-party collection agencies, recovery agents, or personal UPI accounts. A legitimate settlement requires a formal, digitally verified Sanction Letter on official bank/NBFC letterhead issued by the Zonal Stressed Asset Management Branch (SAMB), specifying your loan account number, exact settlement amount, payment deadlines, and a commitment to issue a ₹0 No Dues Certificate (NDC) and withdraw all pending court litigation.
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
            <span>Delhi NCR Legal Defense • Court Representation</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            Personal Loan Settlement Lawyer in Delhi NCR: <span className="text-[#3b82f6] md:text-[#60a5fa]">Legal Defense, Lok Adalat &amp; Court Representation</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Facing legal notices, Section 138/25 summons, or recovery harassment across Tis Hazari, Saket, Karkardooma, Rohini, Dwarka, Gurugram, or Noida? Retain senior debt settlement advocates to secure binding compromise decrees and 40% to 70% debt waivers.
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
              <span>Delhi Bar Council &amp; DSLSA Aligned</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Connect with Delhi Advocate</span>
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
                <span>Delhi NCR Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Facing loan litigation across Tis Hazari, Saket, or Karkardooma? Specialized Delhi NCR debt advocates provide immediate court appearance, dismiss coercive Section 138/25 proceedings, and secure 40%–70% OTS waivers at DSLSA Lok Adalats.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">
            
            {/* Top Key Takeaways Box before Section 1 */}
            <div id="key-takeaways" className="bg-blue-50/80 border-2 border-[#1F5EFF]/30 rounded-2xl p-6 mb-10 shadow-sm">
              <div className="flex items-center gap-2.5 mb-3 text-[#1F5EFF] font-black text-sm sm:text-base uppercase tracking-wider">
                <Award className="w-5 h-5 text-[#1F5EFF] flex-shrink-0" />
                <span>Key Takeaways: Strategic Legal Representation in Delhi NCR</span>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-1" />
                  <span>
                    <strong>Statutory Civil Protection:</strong> Unsecured personal loan default is strictly a civil dispute under the Indian Contract Act, 1872; Delhi and NCR police have zero jurisdiction to arrest or summon debtors for genuine business or financial failure.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-1" />
                  <span>
                    <strong>Court Defense &amp; Bail:</strong> Empanelled Delhi advocates appear in Tis Hazari, Saket, Karkardooma, Rohini, and Dwarka courts to secure immediate bail against Section 138/25 summons and challenge improper territorial jurisdiction.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-1" />
                  <span>
                    <strong>DSLSA Lok Adalat Compromise:</strong> Settlements finalized under Section 21 of the Legal Services Authorities Act, 1987, operate as unappealable civil court decrees, granting 100% court fee refunds and complete immunity against future litigation.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-1" />
                  <span>
                    <strong>Substantial Debt Haircuts:</strong> By analyzing RBI Non-Performing Asset (NPA) provisioning rules and Net Present Value (NPV) recovery economics, advocates negotiate genuine 40% to 70% waivers on core outstanding balances.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-1" />
                  <span>
                    <strong>Zero-Tolerance Anti-Harassment:</strong> Formal legal notices citing Supreme Court precedents immediately halt unlawful recovery visits to homes and corporate workplaces across DLF Cyber City, Noida Sector 62, and Connaught Place.
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 1: Delhi NCR Debt Landscape */}
            <section id="delhi-ncr-debt-landscape" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. NCR Court Jurisdiction &amp; Banking Litigation Landscape</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Navigating the High-Stakes Loan Dispute Ecosystem Across Delhi, Gurugram &amp; Noida
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                The National Capital Region (NCR) represents India&apos;s densest concentration of retail unsecured borrowing, driven by competitive white-collar professionals, ambitious small business founders, and expanding corporate executives. However, when macroeconomic headwinds, sudden medical crises, business cash flow disruptions, or corporate layoffs trigger personal loan defaults, borrowers find themselves entangled in an aggressive multi-jurisdictional legal web. Major scheduled commercial banks such as HDFC Bank, ICICI Bank, State Bank of India, Axis Bank, and Kotak Mahindra Bank, alongside prominent NBFCs like Bajaj Finance and Tata Capital, maintain specialized recovery litigation panels across the district court complexes of Delhi NCR.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Litigation in Delhi is strategically distributed across seven primary district court complexes: Tis Hazari (Central &amp; West), Saket (South &amp; South-East), Karkardooma (East, North-East &amp; Shahdara), Rohini (North &amp; North-West), Dwarka (South-West), Patiala House (New Delhi), and Rouse Avenue (Special Financial Courts). Across state borders, institutional lenders simultaneously initiate recovery proceedings in the District Courts of Gurugram (Sector 10) and Gautam Buddha Nagar District Court at Surajpur, Greater Noida. Understanding which court possesses legitimate territorial and pecuniary jurisdiction over your loan agreement is the foundational cornerstone of mounting an effective legal defense.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                When borrowers default on unsecured personal loans, financial institutions do not merely deploy automated call centers. They escalate accounts to high-volume debt collection law firms that routinely issue composite demand notices, invoke pre-litigation mediation, initiate summary criminal complaints under the Negotiable Instruments Act, or file unilateral arbitration claims. Without specialized local advocate representation who understands the procedural nuances of Delhi&apos;s metropolitan magistrate courts and district legal service authorities, borrowers risk ex-parte orders, adverse arbitral awards, and persistent harassment at their residential and corporate premises.
              </p>
            </section>

            {/* Section 2: Civil Default vs Criminal Traps */}
            <section id="civil-vs-criminal-traps" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>2. Statutory Defense &amp; Criminal Misconceptions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Civil Debt Default vs Criminal Traps: Dismantling Section 138 NI Act &amp; Section 25 PSSA
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Under foundational Indian jurisprudence established by the Indian Contract Act, 1872, the inability to repay an unsecured personal loan due to genuine insolvency or economic distress is strictly a civil dispute arising from a breach of contractual covenants. The Supreme Court of India has repeatedly ruled that a default in loan repayment does not constitute a criminal offense of cheating or criminal breach of trust unless dishonest intention existed at the inception of the contract. Neither the Delhi Police, Haryana Police, nor UP Police possess statutory powers to arrest borrowers, register First Information Reports (FIRs), or summon debtors to police stations for pure unsecured loan defaults.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                To circumvent the slower civil recovery machinery under Order XXXVII of the Code of Civil Procedure (CPC), institutional lenders strategically exploit quasi-criminal statutory mechanisms. Specifically, banks deposit post-dated security cheques collected during loan origination or repeatedly present automated electronic NACH mandates to generate return memos, subsequently filing complaints under Section 138 of the Negotiable Instruments Act, 1881, or Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA). These proceedings are summary trials where Metropolitan Magistrates in Tis Hazari, Saket, or Karkardooma issue judicial summons to the borrower.
              </p>
              
              {/* Statutory Callout Box */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-2xl my-6 shadow-sm">
                <div className="flex items-center gap-2 font-bold text-amber-900 text-sm mb-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Crucial Legal Distinction: Summons vs Non-Bailable Warrants</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                  A court summons under Section 138 NI Act or Section 25 PSSA is not an immediate arrest warrant. It is an official judicial notification to appear before the Magistrate. When represented by an experienced Delhi loan settlement advocate, your lawyer enters appearance, furnishes personal bail on day one, stays coercive steps, and immediately moves an application under Section 147 NI Act to compound the offense through a structured One-Time Settlement (OTS).
                </p>
              </div>

              <p className="text-base text-slate-700 leading-relaxed">
                Furthermore, lenders frequently orchestrate unilateral arbitration proceedings by appointing sole arbitrators seated in Delhi without obtaining the borrower&apos;s explicit post-dispute consent. In landmark judgments including <em>Perkins Eastman Architects DPC v. HSCC India Ltd (2020)</em> and <em>TRF Ltd. v. Energo Engineering Projects Ltd.</em>, the Supreme Court unequivocally held that any party ineligible to act as an arbitrator cannot unilaterally appoint one. Specialized advocates leverage these binding precedents before the High Court of Delhi and District Commercial Courts to stay illegal arbitral awards and force lenders to negotiate a transparent, bilateral settlement.
              </p>
            </section>

            {/* Section 3: Strategic Role of an NCR Advocate */}
            <section id="role-of-settlement-lawyer" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4" />
                <span>3. Advocacy &amp; Institutional Leverage</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                The Strategic Role of a Personal Loan Settlement Lawyer in Delhi NCR
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Navigating a high-value loan default without professional legal counsel places the borrower at an extreme structural disadvantage. Third-party recovery agencies utilize psychological pressure, unauthorized workplace visits, and social embarrassment to coerce distressed families into liquidating essential assets or taking catastrophic high-interest informal loans. Engaging a seasoned personal loan settlement lawyer in Delhi NCR fundamentally shifts the balance of power from coercive collection agents to statutory legal channels.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                A specialized advocate performs five indispensable institutional functions: First, they conduct a rigorous forensic audit of the loan agreement, unbundling the true principal balance from illegal penal interest, unapproved processing penalties, and capitalized insurance premiums. Second, they serve comprehensive legal replies to bank demand notices, asserting the borrower&apos;s genuine financial hardship under Article 21 of the Constitution and establishing a formal legal paper trail that prevents banks from securing ex-parte judicial relief.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                Third, your advocate interfaces directly with institutional decision-makers—such as the Zonal Stressed Assets Management Branch (SAMB) and Regional Credit Committees located in Connaught Place, Nehru Place, Bhikaji Cama Place, and Gurugram Cyber City—completely bypassing tele-callers and field collection agents who lack legal authority to approve principal debt waivers. Fourth, they provide robust in-person court representation across all Delhi NCR district courts, securing bail, opposing frivolous applications, and converting contentious litigation into mutually beneficial compromise decrees.
              </p>
            </section>

            {/* Section 4: DSLSA Lok Adalat Dynamics */}
            <section id="dslsa-lok-adalat-dynamics" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Landmark className="w-4 h-4" />
                <span>4. Conciliation &amp; Lok Adalat Frameworks</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Delhi State Legal Services Authority (DSLSA) Lok Adalat Settlement Mechanics
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                The National Lok Adalat system, administered across the capital by the Delhi State Legal Services Authority (DSLSA) and District Legal Services Authorities (DLSAs), represents the most powerful, legally binding, and cost-effective mechanism for resolving unsecured personal loan defaults. Convened every two to three months across all Delhi District Court complexes under the Legal Services Authorities Act, 1987, Lok Adalats operate as statutory alternative dispute resolution forums designed specifically to clear institutional backlog and encourage amicable compromise between lenders and debtors.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Each Lok Adalat bench is presided over by a sitting or retired judicial officer accompanied by an eminent advocate or social worker acting as a conciliation member. When a personal loan dispute is placed before the bench, the adversarial atmosphere of a regular courtroom is replaced by collaborative negotiation. Lenders are represented by authorized branch managers or law officers empowered with predetermined settlement sanction bands. Your advocate presents your substantiated hardship documentation—such as medical records, salary reduction letters, GST turnover drops, or bank statements—to justify substantial principal haircuts.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                Under Section 21 of the Legal Services Authorities Act, 1987, every award passed by a Lok Adalat is deemed to be a final decree of a Civil Court. Crucially, no appeal lies against a Lok Adalat award in any court of law, providing absolute finality and complete protection against future claims or revived litigation by the lender. Furthermore, if a pending court suit is settled at Lok Adalat, the entire court fee paid by the parties is refunded in full under Section 16 of the Court Fees Act, 1870, creating a massive financial incentive for banks to finalize settlements on favorable terms.
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
                        Personal Loan Settlement in Delhi NCR Summary &amp; Process Overview
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/personal-loan-settlement-delhi-ncr.jpg"
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
                      src="/images/infographics/personal-loan-settlement-delhi-ncr.jpg"
                      alt="Personal Loan Settlement in Delhi NCR Summary Infographic"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Takeaway:</strong> Professional NCR advocate representation stops recovery harassment, dismisses Section 138/25 summons, and delivers 40%–70% OTS waivers backed by unappealable DSLSA Lok Adalat decrees.</span>
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
                The 5-Stage Legal Defense &amp; Settlement Protocol in Delhi NCR
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Achieving an optimal One-Time Settlement (OTS) with zero legal exposure requires strict adherence to a disciplined, multi-stage legal protocol. When borrowers attempt informal negotiations without legal protection, recovery agencies exploit their lack of procedural knowledge to collect piecemeal token payments that simply reset limitation periods without reducing the core principal obligation.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                <strong>Stage 1: Comprehensive Financial &amp; Jurisdiction Audit (Days 1–5):</strong> The advocate examines the entire loan docket, including sanction agreements, repayment schedules, account statements, and all legal notices served. The lawyer determines whether the case falls under the territorial jurisdiction of Delhi district courts or NCR satellite tribunals and calculates the exact core principal outstanding versus inflated interest and penalties.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                <strong>Stage 2: Formal Advocate Reply &amp; Anti-Harassment Notice (Days 6–15):</strong> A detailed reply is served to the bank&apos;s legal notice via Registered Post AD and authorized legal email. The notice formally places the borrower&apos;s financial hardship on record, invokes RBI Fair Practices Directives, and serves an explicit cease-and-desist warning against third-party recovery harassment, stopping all unlawful home visits and workplace disruption immediately.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                <strong>Stage 3: Bilateral Negotiation &amp; Pre-Litigation Conciliation (Days 16–35):</strong> The advocate submits a formal One-Time Settlement proposal directly to the bank&apos;s Zonal Stressed Assets Desk. Concurrently, if the bank has filed pre-litigation notices, the advocate represents the borrower before the DLSA mediation center or district court to structure a realistic, lump-sum or structured installment settlement figure.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                <strong>Stage 4: Verification of Official Bank Sanction Letter (Days 36–45):</strong> Before a single rupee is remitted, the advocate conducts a rigorous forensic check of the settlement sanction letter. The document must be generated on official bank letterhead, signed by an authorized signatory with employee code, state the exact settlement amount and payment due date, and explicitly covenant the closure of all court cases and issuance of an unencumbered No Dues Certificate.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                <strong>Stage 5: Court Disposal, ₹0 NDC &amp; Credit Registry Update (Days 46–60):</strong> Following final settlement payment through verifiable banking channels (NEFT/RTGS), the advocate ensures the formal withdrawal of all Section 138 NI Act, Section 25 PSSA, or civil recovery proceedings before the Magistrate. The firm secures the physical No Dues Certificate (NDC) and monitors credit bureau reporting to reflect &apos;Settled&apos; status with ₹0 balance.
              </p>
            </section>

            {/* Section 7: Banking Accounting Rules & NPV Calculations */}
            <section id="npv-accounting-and-waivers" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>6. Banking Accounting &amp; NPV Mechanics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Banking Accounting Rules, NPV Calculations &amp; Securing 40%–70% Waivers
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                To negotiate maximum debt waivers with public and private sector banks in Delhi NCR, one must understand how Indian banking institutions account for non-performing assets (NPAs). Under Reserve Bank of India Master Directions on Prudential Norms on Income Recognition, Asset Classification and Provisioning, a loan account where EMI payments remain overdue for more than 90 days is classified as a Non-Performing Asset (Substandard). As default delinquency crosses 12 months, the account transitions into Doubtful and ultimately Loss asset categories.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                For unsecured personal loans, banks are mandated by RBI regulations to maintain heavy balance sheet provisioning—ranging from 25% for substandard assets up to 100% full provisioning for doubtful and loss assets. This means the bank has already absorbed the financial loss against its operating capital reserves. Prolonged civil litigation in Delhi courts can take 3 to 7 years and incur substantial advocate retainers, court filing fees, and processing overheads, with uncertain recovery outcomes.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-2">
                Banks therefore evaluate One-Time Settlement proposals through a strict financial formula known as the <strong>Net Present Value (NPV) of Realizable Recovery</strong>:
              </p>

              {/* Formula Container Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated recoveries across time t, r is the bank discount rate, and deductions account for 3–5 years of court friction and capital locked in NPA provisions. When an advocate presents an immediate lump-sum settlement offer that exceeds the discounted NPV of protracted litigation, the Bank Credit Committee is economically and procedurally incentivized to approve a 40% to 70% debt haircut.
                </p>
              </div>
            </section>

            {/* Section 8: Anti-Harassment Protections */}
            <section id="anti-harassment-protections" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>7. Anti-Harassment &amp; Statutory Injunctions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Enforcing Anti-Harassment Protections Against Aggressive Recovery in NCR
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Borrowers in Delhi, Gurugram, and Noida frequently face egregious overreach by unregulated collection agencies acting on behalf of major financial institutions. Common abusive tactics include relentless calling outside permissible hours, abusive language, sending intimidating groups of recovery agents to private residences in residential societies, visiting corporate workplaces in DLF Cyber City or Noida Sector 62, and contacting non-guarantor relatives or colleagues.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                These coercive actions directly violate the <strong>RBI Master Direction on Fair Practices Code for Lenders</strong> and the <strong>RBI Master Circular on Recovery Agents</strong>. Under RBI directives, recovery agents are strictly prohibited from: (1) Calling or visiting borrowers before 08:00 AM or after 07:00 PM; (2) Contacting friends, neighbors, or workplace supervisors who are not co-borrowers or legal guarantors; (3) Using threatening, abusive, or defamatory language; and (4) Entering the borrower&apos;s premises without carrying official bank identity cards and authorized recovery letters.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                In the historic decision of <em>ICICI Bank Ltd. v. Prakash Kaur (2007)</em> and <em>Shanti Devi Sharma v. ICICI Bank</em>, the Supreme Court of India held that banks and NBFCs cannot employ musclemen or recovery agents to harass debtors, affirming that recovery must follow due process of law. When harassment occurs, your advocate issues an immediate Cease-and-Desist notice to the bank&apos;s Principal Nodal Officer and Managing Director, files an urgent complaint on the RBI Complaint Management System (CMS), and initiates criminal complaints for criminal intimidation under Bharatiya Nyaya Sanhita (BNS) before the jurisdictional Chief Metropolitan Magistrate.
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
                A critical vulnerability for distressed borrowers is falling victim to settlement scams orchestrated by third-party agency collection agents who offer verbal settlement discounts or issue fake WhatsApp settlement letters to meet monthly collection quotas. Once the borrower pays the discounted amount into a personal account or without formal bank sanction, the lender credits the funds as regular overdue interest, leaving the total loan balance active and litigation ongoing.
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

            {/* Section 10: NCR Court Matrix & Channels Comparison Tables */}
            <section id="ncr-court-directory-matrix" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4" />
                <span>9. NCR Courts Directory &amp; Resolution Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Delhi NCR District Courts Directory &amp; Jurisdiction Matrix
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Understanding which court complex has jurisdiction over your personal loan dispute is vital for prompt legal intervention. Below is the comprehensive jurisdiction matrix for district courts across Delhi, Gurugram, and Noida where loan recovery litigation, Section 138 NI Act trials, and DSLSA Lok Adalats are conducted:
              </p>

              {/* Table 1: NCR District Courts Directory */}
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
                      <td className="p-3 font-semibold text-slate-900 border-b border-slate-200">Tis Hazari Court Complex</td>
                      <td className="p-3 border-b border-slate-200">Central &amp; West Delhi (Civil Lines, Karol Bagh, Rajouri Garden, Patel Nagar)</td>
                      <td className="p-3 border-b border-slate-200">Sec 138 NI Act, Sec 25 PSSA, Commercial Recovery Suits</td>
                      <td className="p-3 border-b border-slate-200">Central &amp; West DLSA</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900 border-b border-slate-200">Saket Court Complex</td>
                      <td className="p-3 border-b border-slate-200">South &amp; South-East Delhi (Hauz Khas, Saket, Lajpat Nagar, Kalkaji, Okhla)</td>
                      <td className="p-3 border-b border-slate-200">Sec 138 NI Act, Pre-Litigation Bank Mediation, Sec 9 Injunctions</td>
                      <td className="p-3 border-b border-slate-200">South &amp; South-East DLSA</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900 border-b border-slate-200">Karkardooma Court Complex</td>
                      <td className="p-3 border-b border-slate-200">East, North-East &amp; Shahdara (Preet Vihar, Laxmi Nagar, Mayur Vihar)</td>
                      <td className="p-3 border-b border-slate-200">Sec 138 NI Act Summons, Summary Recovery Suits (Order 37 CPC)</td>
                      <td className="p-3 border-b border-slate-200">East &amp; Shahdara DLSA</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900 border-b border-slate-200">Rohini Court Complex</td>
                      <td className="p-3 border-b border-slate-200">North &amp; North-West Delhi (Pitampura, Rohini, Model Town, Narela)</td>
                      <td className="p-3 border-b border-slate-200">Sec 138 NI Act, NBFC Default Litigations, Section 25 PSSA</td>
                      <td className="p-3 border-b border-slate-200">North &amp; North-West DLSA</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900 border-b border-slate-200">Dwarka Court Complex</td>
                      <td className="p-3 border-b border-slate-200">South-West Delhi &amp; IGI Airport Area (Dwarka, Janakpuri, Palam, Vasant Kunj)</td>
                      <td className="p-3 border-b border-slate-200">Sec 138 NI Act, Unilateral Arbitration Defense, Bank Appeals</td>
                      <td className="p-3 border-b border-slate-200">South-West DLSA</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900 border-b border-slate-200">Gurugram District Court</td>
                      <td className="p-3 border-b border-slate-200">Gurugram, Cyber City, DLF, Sohna, Manesar</td>
                      <td className="p-3 border-b border-slate-200">Sec 138 NI Act, Commercial Debt Recovery, Civil Injunctions</td>
                      <td className="p-3 border-b border-slate-200">Haryana SLSA / Gurugram DLSA</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Gautam Buddha Nagar Court</td>
                      <td className="p-3">Noida, Greater Noida, Surajpur, Yamuna Expressway</td>
                      <td className="p-3">Sec 138 NI Act, Bank Conciliation, Summary Civil Suits</td>
                      <td className="p-3">UP SLSA / GB Nagar DLSA</td>
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
                      <td className="p-3 font-semibold text-slate-900 border-b border-slate-200">DSLSA Lok Adalat</td>
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
                      <td className="p-3">3 to 7 Years</td>
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
                Frequently Asked Questions: Personal Loan Settlement in Delhi NCR
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
                  href="http://dslsa.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#1F5EFF] hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Delhi State Legal Services Authority (DSLSA): Lok Adalat Schedule</span>
                </a>
                <a
                  href="https://delhihighcourt.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#1F5EFF] hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>High Court of Delhi: Arbitration &amp; Commercial Appellate Decisions</span>
                </a>
                <a
                  href="https://ecourts.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#1F5EFF] hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>eCourts Services India: Delhi District Courts Cause Lists &amp; Orders</span>
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
                  href="/personal-loan-legal-notice"
                  className="py-1.5 px-3 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-medium transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Legal Notice Reply
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
                Ashish is a seasoned banking law strategist who has advised on over 1,400+ debt settlement cases across Tis Hazari, Saket, Rohini, Karkardooma, and Gurugram courts. He specializes in DSLSA Lok Adalat conciliation, Section 138/25 defense, and RBI Fair Practices enforcement.
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
                <span>Delhi NCR Advocate Hotline</span>
              </div>
              <h3 className="text-xl font-black mb-3 leading-tight">
                Facing Court Summons in Delhi NCR?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Received a legal notice or court summons from Tis Hazari, Saket, Karkardooma, Rohini, or Gurugram? Stop harassment and let our senior advocates handle your Lok Adalat defense and negotiate a formal 40%–70% OTS waiver.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white hover:bg-slate-100 text-[#1F5EFF] font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 shadow"
              >
                Talk to a Delhi Settlement Advocate
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
                    <strong>Direct Court Defense:</strong> Empanelled advocates represent you directly in Tis Hazari, Saket, Karkardooma, Rohini, Dwarka, and NCR District Courts.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>DSLSA Lok Adalat Representation:</strong> Strategic advocacy during National and State Lok Adalats to obtain unappealable civil compromise decrees.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Injunctions:</strong> Immediate legal notices to stop illegal recovery visits at your Delhi NCR home or corporate workplace.
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
