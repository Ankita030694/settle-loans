'use client';

import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  Calculator,
  Lock,
  Laptop
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

export default function PersonalLoanSettlementBangaloreClient() {
  const [activeId, setActiveId] = useState<string>('bangalore-tech-debt-landscape');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'bangalore-tech-debt-landscape', title: '1. Bangalore Tech Corridor Debt Realities' },
    { id: 'salary-account-lien-defense', title: '2. Salary Protection & Section 171 Lien' },
    { id: 'court-summons-and-bailable-defense', title: '3. Mayo Hall & ACMM Court Defense' },
    { id: 'kslsa-lok-adalat-mechanics', title: '4. KSLSA Lok Adalat Compromise Decrees' },
    { id: 'bangalore-infographic-banner', title: '5. Legal Defense Blueprint' },
    { id: 'online-settlement-protocol-tech', title: '6. 5-Stage Remote Settlement Protocol' },
    { id: 'npv-accounting-and-waivers', title: '7. NPA Accounting & 40-70% Waivers' },
    { id: 'anti-harassment-bengaluru-police', title: '8. Anti-Harassment & Police Limits' },
    { id: 'sanction-letter-verification', title: '9. Sanction Letter Forensics & ₹0 NDC' },
    { id: 'bangalore-court-directory-matrix', title: '10. Bangalore Courts & SARB Directory' },
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
      question: "Why do tech professionals in Bangalore need specialized loan settlement representation?",
      answer: (
        <p>
          Software engineers, product managers, and IT executives across Whitefield, Electronic City, Outer Ring Road, and Manyata Tech Park often carry multiple credit lines spanning high-limit cards, unsecured personal loans, and fintech credit apps. Following tech restructuring, variable pay reductions, or startup downsizing, servicing cumulative monthly EMIs becomes unsustainable. Specialized Bangalore debt settlement advocates navigate institutional banking committees, invoke RBI Fair Practices codes, prevent workplace disclosure, and negotiate 40% to 70% debt waivers through structured One-Time Settlements (OTS).
        </p>
      )
    },
    {
      question: "Can a bank freeze or deduct my salary account in Bangalore for an unpaid personal loan?",
      answer: (
        <p>
          Under Section 171 of the Indian Contract Act, 1872, banks possess a general Banker&apos;s Right of Lien, enabling them to debit funds from savings or salary accounts held within the same banking institution to offset outstanding loan dues. However, lenders cannot touch salary accounts maintained at independent third-party banks without an explicit attachment order from a competent Civil Court. Our legal team assists borrowers in legally segregating salary disbursements into unlinked accounts and revoking standing NACH mandates to safeguard monthly livelihood expenses.
        </p>
      )
    },
    {
      question: "Can the Bengaluru City Police arrest me or register an FIR for defaulting on an unsecured loan?",
      answer: (
        <p>
          <strong>No. Defaulting on an unsecured personal loan or credit card is strictly a civil breach of contract</strong> governed by the Indian Contract Act, 1872. The Bengaluru City Police and jurisdictional police stations across Whitefield, Koramangala, Marathahalli, or Electronic City have zero statutory jurisdiction to register criminal FIRs, issue police station summons, or detain borrowers for financial defaults. In <em>Arnesh Kumar v. State of Bihar</em>, the Supreme Court strictly restricted arbitrary criminal conversions of civil commercial debt disputes.
        </p>
      )
    },
    {
      question: "How do I handle a Section 138 NI Act or Section 25 PSSA court summons from Mayo Hall or Nrupathunga Road?",
      answer: (
        <p>
          Never ignore a judicial summons. Cheque bounce under Section 138 of the Negotiable Instruments Act and electronic mandate bounce under Section 25 of the Payment and Settlement Systems Act are compoundable, bailable offenses. Empanelled Bangalore advocates enter a formal appearance by filing a Vakalatnama, secure immediate bail on the first hearing without custodial risk, examine jurisdictional validity under Section 142(2) NI Act, and file applications under Section 147 NI Act to refer the dispute to the KSLSA Lok Adalat for an agreed OTS compromise.
        </p>
      )
    },
    {
      question: "How does Lok Adalat settlement work under the Karnataka State Legal Services Authority (KSLSA)?",
      answer: (
        <p>
          The Karnataka State Legal Services Authority (KSLSA), seated at Nyaya Degula, conducts National and State Lok Adalats across the City Civil Court Complex, Mayo Hall, and ACMM Courts. When your advocate places your debt dispute before the Lok Adalat bench, both parties negotiate a discounted one-time lump-sum settlement. An award passed under Section 21 of the Legal Services Authorities Act, 1987, operates as a final, unappealable Civil Court decree, guaranteeing a 100% refund of court fees and permanently terminating all recovery proceedings.
        </p>
      )
    },
    {
      question: "Can the entire loan settlement process in Bangalore be completed online without visiting an office or court?",
      answer: (
        <p>
          Yes. SettleLoans provides a 100% digital, confidential legal defense and negotiation infrastructure designed for corporate tech professionals. From forensic docket analysis, drafting Cease-and-Desist replies, interacting with bank Zonal Stressed Assets Recovery Branches (SARB), to verifying official sanction letters, everything is managed remotely through encrypted digital channels. If court hearings occur at Mayo Hall or Nrupathunga Road, our advocates appear under Vakalatnama, minimizing the need for your personal physical presence.
        </p>
      )
    },
    {
      question: "What percentage of debt waiver can Bangalore advocates secure on personal loans and credit cards?",
      answer: (
        <p>
          Depending on delinquency aging (90 to 180+ days past due), verified financial hardship (job loss, medical emergency, startup shutdown, or salary reduction), and bank NPA provisioning categories (Substandard, Doubtful, or Loss assets), experienced Bangalore debt settlement advocates typically secure <strong>40% to 70% waivers on total outstanding book debt</strong>, along with a 100% full waiver of accumulated penal interest, late fees, and compounding charges.
        </p>
      )
    },
    {
      question: "How do advocates protect Bangalore tech employees from recovery agents visiting tech parks and gated societies?",
      answer: (
        <p>
          Advocates issue formal Cease-and-Desist legal notices citing RBI Master Directions on Recovery Agents, Section 35A of the Banking Regulation Act, and Supreme Court rulings. The notice explicitly puts the lender on notice against dispatching third-party recovery agents to corporate campuses (e.g., Manyata, Ecospace, RMZ Ecoworld, Bagmane Tech Park) or residential gated communities. Any unauthorized trespass or harassment triggers immediate complaints to the bank&apos;s Principal Nodal Officer, RBI Banking Ombudsman, and the jurisdictional Police Commissionerate.
        </p>
      )
    },
    {
      question: "How do I ensure a loan settlement in Bangalore is genuine and legally binding?",
      answer: (
        <p>
          Never hand over cash to collection agents or transfer money into third-party settlement accounts. A legitimate settlement requires an official Settlement Sanction Letter issued on the bank&apos;s corporate letterhead, digitally signed by an authorized Zonal Credit Manager from the bank&apos;s Bangalore SARB or Regional Office. Settlement payments must be deposited directly into your designated loan account via NEFT/RTGS, followed by an official ₹0 No Dues Certificate (NDC) and updated credit registry records.
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
            <span>Bangalore Tech Corridor Legal Defense • Confidential Online OTS</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            Personal Loan Settlement Company Bangalore: <span className="text-[#3b82f6] md:text-[#60a5fa]">Tech Corridor Legal Defense &amp; 40%–70% OTS Debt Relief</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Struggling with unsecured personal loans, credit card balances, or aggressive fintech apps across Whitefield, Electronic City, ORR, or Manyata? Secure confidential legal shielding, protect your salary account from illegal banker&apos;s liens, and negotiate structured 40% to 70% OTS debt waivers backed by KSLSA Lok Adalat compromise decrees.
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
              <span>Karnataka State Legal Services Authority Aligned</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Connect with Bangalore Legal Strategist</span>
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
                <span>Bangalore Tech Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Overburdened by unsecured loans, fintech apps, and high-limit cards in Bengaluru? Empanelled Karnataka advocates defend Section 138/25 notices, shield salary accounts under Section 171 Contract Act, eliminate workplace visits across IT tech parks, and secure 40%–70% OTS waivers via KSLSA Lok Adalat compromise decrees.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">
            
            {/* Key Takeaways Box (Top) */}
            <div className="bg-blue-50 border-l-8 border-[#1F5EFF] rounded-r-2xl p-6 md:p-8 mb-10 shadow-sm">
              <div className="flex items-center gap-2 text-[#1F5EFF] font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5" />
                <span>KEY TAKEAWAYS: LOAN SETTLEMENT &amp; TECH CORRIDOR DEFENSE IN BANGALORE</span>
              </div>
              <ul className="space-y-3 text-sm md:text-base text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Strict Civil Protection &amp; Police Limitations:</strong> Defaulting on an unsecured personal loan is strictly a civil contractual breach governed by the Indian Contract Act, 1872. Bengaluru City Police have no statutory jurisdiction to summon tech employees, register criminal FIRs, or effect arrests for unpaid bank debts.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Salary Account &amp; Banker&apos;s Lien Shielding:</strong> We help borrowers protect monthly earnings from unauthorized bank set-offs under Section 171 of the Indian Contract Act by segregating primary compensation and legally revoking NACH debit mandates.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Bailable Court Defense at Mayo Hall &amp; ACMM:</strong> Section 138 NI Act and Section 25 PSSA summons issued by Bangalore Metropolitan Magistrates are bailable matters. Our advocates enter an appearance under Vakalatnama to secure bail and transfer matters to Lok Adalat.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>40%–70% OTS Haircuts via KSLSA Lok Adalat:</strong> Leveraging RBI IRACP provisioning mandates and Net Present Value (NPV) benchmarks, advocates negotiate significant principal waivers and complete penal interest cancellations through binding compromise decrees.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Confidential Remote Processing:</strong> Complete end-to-end legal representation designed specifically for corporate professionals, ensuring workplace privacy and zero unauthorized visits to tech campuses in Whitefield, Electronic City, or ORR.
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 1: Bangalore Tech Debt Landscape */}
            <section id="bangalore-tech-debt-landscape" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Laptop className="w-4 h-4" />
                <span>1. Tech Corridor Debt Ecosystem</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Navigating Unsecured Debt Default Across Bangalore&apos;s Silicon Corridor
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Bengaluru stands as India&apos;s undisputed technology capital, housing hundreds of multinational IT corporations, global capability centers (GCCs), and venture-funded unicorn startups across major hubs including Whitefield, Electronic City, Outer Ring Road (Bellandur, Marathahalli, Kadubeesanahalli), Manyata Tech Park, Koramangala, and Indiranagar. During periods of robust macroeconomic expansion, banking institutions and non-banking financial companies (NBFCs) aggressively market instant pre-approved personal loans, revolving credit cards with multi-lakh limits, and algorithmic fintech credit lines to salaried software professionals based solely on high gross CTC figures.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                However, sudden structural shifts in the global technology ecosystem—including corporate restructuring, project cancellations, post-acquisition layoffs, startup cash runways drying up, variable compensation slashes, and ESOP valuation drops—have created severe liquidity crunches for thousands of salaried tech workers. When monthly compensation contracts or halts entirely, managing cumulative debt liabilities across three to five separate credit facilities becomes mathematically impossible. Borrowers often experience rapid debt compounding as penal interest rates of 36% to 48% APR and automated bounce penalties are added to the principal balance.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                Navigating this crisis requires an analytical, statutory approach rather than panic. Under the Indian legal framework and Reserve Bank of India guidelines, distressed salaried individuals possess clear procedural rights. Engaging a premier loan settlement company and banking defense counsel in Bangalore ensures that your case is handled with institutional credibility, shielding your career reputation while negotiating substantial debt relief.
              </p>
            </section>

            {/* Section 2: Salary Account & Banker's Lien Defense */}
            <section id="salary-account-lien-defense" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Lock className="w-4 h-4" />
                <span>2. Salary Account &amp; Banker&apos;s Lien Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Protecting Salary Accounts, NACH Mandates &amp; Banker&apos;s Lien Under Section 171
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                One of the most urgent threats confronting defaulting tech professionals in Bengaluru is the sudden interception of monthly salary credits. When a borrower maintains both an active personal loan or credit card and their corporate payroll account within the same banking entity (such as HDFC Bank, ICICI Bank, Axis Bank, or Kotak Mahindra Bank), the lender frequently invokes the <strong>Banker&apos;s Right of General Lien and Set-Off</strong> under Section 171 of the Indian Contract Act, 1872. Under this provision, the bank automatically sweeps incoming salary credits to liquidate overdue loan arrears, leaving the employee without funds for rent, food, or family maintenance.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                To counter this coercive mechanism, our legal strategists implement immediate defensive protocols:
              </p>
              <ul className="space-y-2 text-base text-slate-700 mb-4 pl-4 list-disc">
                <li>
                  <strong>Payroll Account Segregation:</strong> Advising borrowers to coordinate with corporate human resource and finance departments to redirect monthly salary disbursements to an unlinked account at an independent scheduled commercial bank where no credit exposure exists.
                </li>
                <li>
                  <strong>Statutory NACH Mandate Revocation:</strong> Under RBI Circular DPSS.CO.CHD.No./264/04.07.05/2019-20, borrowers possess an absolute statutory right to revoke National Automated Clearing House (NACH) electronic debit mandates by submitting written instructions to their home branch, preventing unauthorized recurring bounce penalty loops.
                </li>
                <li>
                  <strong>Employer Confidentiality Safeguards:</strong> Issuing formal legal communications putting lending institutions on notice that contacting company HR departments or colleagues violates data privacy mandates and the RBI Fair Practices Code, carrying civil liability for defamation.
                </li>
              </ul>
              <p className="text-base text-slate-700 leading-relaxed">
                By insulating your salary flow and daily operating funds from arbitrary banking offsets, you restore financial stability and create the liquidity necessary to fund an orderly One-Time Settlement.
              </p>
            </section>

            {/* Section 3: Court Summons & Bailable Legal Defense */}
            <section id="court-summons-and-bailable-defense" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>3. Judicial Summons &amp; Court Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Mayo Hall, City Civil Court &amp; ACMM Judicial Defense: Section 138 &amp; Section 25 Summons
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                When unsecured loan accounts cross 90 to 180 days past due (DPD), institutional lenders in Bangalore initiate formal legal recovery measures through panel advocate firms. Borrowers frequently receive statutory demand notices followed by judicial summons from the <strong>Chief Metropolitan Magistrate (CMM) and Additional Chief Metropolitan Magistrate (ACMM) Courts</strong> located at Nrupathunga Road or the <strong>Mayo Hall Court Complex</strong> on MG Road. The primary statutory provisions invoked include:
              </p>
              <ul className="space-y-2 text-base text-slate-700 mb-4 pl-4 list-disc">
                <li>
                  <strong>Section 138 of the Negotiable Instruments Act, 1881 (Cheque Bounce):</strong> Initiated when security or repayment cheques dishonor due to insufficient funds.
                </li>
                <li>
                  <strong>Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA):</strong> A quasi-criminal provision for dishonored electronic NACH/ECS debit instructions.
                </li>
                <li>
                  <strong>Summary Civil Suits Under Order 37 of the Code of Civil Procedure, 1908 (CPC):</strong> Filed before the City Civil Court Bengaluru (Mysore Bank Circle / Mayo Hall) seeking fast-track monetary recovery judgments.
                </li>
              </ul>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                It is vital to understand that Section 138 NI Act and Section 25 PSSA matters are compoundable, bailable offenses. They do not constitute non-bailable criminal fraud. When you retain experienced Bangalore debt settlement advocates, our legal team files a formal Vakalatnama, represents you at the initial hearing, secures immediate bail without custodial detention, and challenges inflated penal calculations or defective notice service under Section 142(2) NI Act.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                Once appearance is formally entered, your counsel files an application under Section 147 of the Negotiable Instruments Act to refer the dispute to the Lok Adalat mediation forum, converting hostile criminal litigation into an amicable settlement negotiation.
              </p>
            </section>

            {/* Section 4: KSLSA Lok Adalat Settlement Mechanics */}
            <section id="kslsa-lok-adalat-mechanics" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4" />
                <span>4. KSLSA Lok Adalat Mechanics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Karnataka State Legal Services Authority (KSLSA) Lok Adalat Settlement Dynamics
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                The <strong>Karnataka State Legal Services Authority (KSLSA)</strong>, headquartered at <em>Nyaya Degula</em> on Siddaiah Road near the High Court of Karnataka, organizes regular National and Mega Lok Adalats across all Bangalore judicial complexes. Lok Adalats serve as India&apos;s most powerful statutory alternative dispute resolution mechanism for resolving distressed commercial and banking liabilities.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Under Section 21 of the <strong>Legal Services Authorities Act, 1987</strong>, an award passed by a Lok Adalat bench carries distinct statutory advantages:
              </p>
              <ul className="space-y-2 text-base text-slate-700 mb-4 pl-4 list-disc">
                <li>
                  <strong>Status of a Final Civil Decree:</strong> The signed compromise award is deemed a decree of a Civil Court, possessing complete legal finality and binding both the borrower and the financial institution equally.
                </li>
                <li>
                  <strong>Total Absence of Judicial Appeals:</strong> Under Section 21(2) of the Act, no appeal lies to any High Court or appellate authority against a Lok Adalat award. Once the settled lump sum is paid, the lender can never reopen or claim residual balances.
                </li>
                <li>
                  <strong>Mandatory 100% Court Fee Refund:</strong> Any court fees deposited during civil recovery suits are fully refunded under the Karnataka Court Fees and Suits Valuation Act.
                </li>
                <li>
                  <strong>Immediate Compounding of Criminal Complaints:</strong> Upon recording the Lok Adalat settlement, pending complaints under Section 138 NI Act or Section 25 PSSA before ACMM Courts are formally compounded and permanently quashed.
                </li>
              </ul>
              <p className="text-base text-slate-700 leading-relaxed">
                By anchoring One-Time Settlements within the KSLSA Lok Adalat framework, tech borrowers eliminate future litigation risks and secure indisputable legal closure.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <div id="bangalore-infographic-banner" className="scroll-mt-24 my-10">
              <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6 text-white text-center">
                <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Strategic Legal Roadmap</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-2 text-white">
                  Bangalore Tech Corridor Loan Settlement &amp; Legal Defense Blueprint
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mb-6">
                  A structured four-pillar institutional defense framework: from forensic audit and salary shielding to KSLSA Lok Adalat compromise awards and 40%–70% OTS debt waivers.
                </p>
                <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shadow-inner">
                  <Image
                    src="/images/infographics/personal-loan-settlement-bangalore.jpg"
                    alt="Bangalore Tech Corridor Loan Settlement and Legal Defense Blueprint Infographic"
                    width={1200}
                    height={675}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 px-2">
                  <span>Authorized by SettleLoans Banking Defense Cell</span>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Request Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Section 6: 5-Stage Online Settlement Protocol */}
            <section id="online-settlement-protocol-tech" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>5. Confidential Online Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                The 5-Stage Confidential Online Settlement Protocol for Tech Executives
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Corporate tech executives and salaried professionals require a settlement process that is 100% confidential, rapid, and legally airtight, avoiding workplace disruption or loss of productive work hours. SettleLoans executes a structured five-stage remote protocol:
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                <strong>Stage 1: Forensic Financial &amp; Docket Audit (Days 1–5):</strong> Our banking law analysts perform a detailed audit of your loan dockets, credit card statements, and fintech agreements. We calculate the true principal disbursed against inflated compound interest, unbundle arbitrary penal charges, and establish verified financial hardship documentation (pink slips, medical records, or salary slips).
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                <strong>Stage 2: Cease-and-Desist &amp; Anti-Harassment Notice (Days 6–12):</strong> We dispatch formal legal replies via Registered Post AD and secure email to the bank&apos;s Principal Nodal Officer and collection leadership. The notice places your hardship on official record, invokes RBI Fair Practices Directives, and prohibits unauthorized calls, third-party visits to tech parks, or contacting non-guarantor family members.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                <strong>Stage 3: Bilateral Negotiation with Zonal SARB &amp; Credit Committees (Days 13–35):</strong> Our senior advocates negotiate directly with the bank&apos;s Zonal Stressed Assets Recovery Branch (SARB) and Special Credit Committees in Bengaluru. We present a structured OTS proposal rooted in Net Present Value (NPV) recovery economics, targeting a 40% to 70% reduction on book debt.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                <strong>Stage 4: Sanction Letter Forensic Verification (Days 36–45):</strong> Before any financial transfer occurs, our legal team scrutinizes the official Settlement Sanction Letter to ensure it is issued on bank letterhead, digitally signed by authorized Zonal Officers, specifies the exact waiver, and covenants full dismissal of all pending court litigation.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                <strong>Stage 5: Payment Execution, ₹0 NDC &amp; Court Disposal (Days 46–60):</strong> Settlement funds are deposited directly into your designated bank loan account via NEFT/RTGS. We secure the official physical No Dues Certificate (NDC), obtain formal withdrawal of Section 138/25 proceedings at Mayo Hall or ACMM Courts, and ensure credit bureau records reflect &apos;Settled&apos; status with ₹0 outstanding balance.
              </p>
            </section>

            {/* Section 7: NPA Accounting Rules & NPV Calculations */}
            <section id="npv-accounting-and-waivers" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>6. Banking NPA Accounting &amp; NPV Calculations</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Banking NPA Accounting Rules, NPV Calculations &amp; Securing 40%–70% Waivers
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Achieving maximum debt waivers with scheduled commercial banks and NBFCs in Bangalore requires understanding institutional balance-sheet mechanics. Under the Reserve Bank of India&apos;s <strong>Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP)</strong>, once an unsecured credit facility remains overdue beyond 90 days, it is classified as a Non-Performing Asset (Substandard). As delinquency extends past 12 months, it progresses to Doubtful and eventually Loss asset classifications.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                For unsecured personal loans and credit cards, RBI guidelines require banks to maintain aggressive provisioning reserves—ranging from 25% up to a full 100% write-down against their tier-1 capital. Contested civil litigation across Bangalore courts typically requires 4 to 6 years, incurring significant legal fees and locking up statutory capital reserves.
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
                  Where C_t represents estimated future cash recoveries, r is the discount rate, and deductions account for 3–5 years of Bangalore court friction and capital locked in NPA provisions.
                </p>
              </div>

              <p className="text-base text-slate-700 leading-relaxed">
                When an advocate presents a credible OTS proposal backed by verified hardship, an immediate lump-sum cash recovery of 30% to 50% yields a demonstrably higher Net Present Value for the bank than uncertain, prolonged litigation. This financial reality empowers our team to secure 40% to 70% debt waivers for qualifying borrowers.
              </p>
            </section>

            {/* Section 8: Anti-Harassment & Police Limits */}
            <section id="anti-harassment-bengaluru-police" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>7. Anti-Harassment &amp; Police Jurisdictions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Enforcing Anti-Harassment Protections &amp; Bengaluru City Police Boundaries
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Distressed borrowers in Bangalore frequently encounter aggressive overreach from third-party recovery agencies acting on behalf of major private banks, NBFCs, and fintech lenders. Abusive tactics include incessant calling outside permissible hours, abusive language, sending recovery agents to residential gated societies in Bellandur, Sarjapur, Whitefield, or Electronic City, and attempting unauthorized visits to corporate IT parks.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                These coercive actions violate multiple statutory protections:
              </p>
              <ul className="space-y-2 text-base text-slate-700 mb-4 pl-4 list-disc">
                <li>
                  <strong>RBI Master Direction on Fair Practices Code:</strong> Recovery agents are strictly barred from calling or visiting borrowers before 08:00 AM or after 07:00 PM, using abusive language, or contacting friends, colleagues, or managers who are not legal guarantors.
                </li>
                <li>
                  <strong>Karnataka Police Act &amp; Bengaluru City Police Directives:</strong> Jurisdictional police stations across Bengaluru (Whitefield, Marathahalli, Madiwala, Electronic City, Cyber Crime Police Station) have strict instructions that loan default is purely a civil dispute. Police cannot summon borrowers to police stations or assist collection agents in coercive recovery.
                </li>
                <li>
                  <strong>Supreme Court Jurisprudence (ICICI Bank v. Prakash Kaur):</strong> The apex court has repeatedly ruled that banks cannot employ musclemen or extra-judicial recovery mechanisms, holding banking leadership vicariously liable for criminal intimidation.
                </li>
              </ul>
              <p className="text-base text-slate-700 leading-relaxed">
                When harassment occurs, our legal team dispatches immediate Cease-and-Desist notices to the lender&apos;s Managing Director and Principal Nodal Officer, registers formal complaints on the RBI Complaint Management System (CMS), and files criminal complaints for criminal intimidation under Bharatiya Nyaya Sanhita (BNS) before the jurisdictional ACMM Court.
              </p>
            </section>

            {/* Section 9: Sanction Letter Verification & CIBIL */}
            <section id="sanction-letter-verification" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileText className="w-4 h-4" />
                <span>8. Settlement Verification &amp; CIBIL Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Settlement Verification: Sanction Letters vs Final No Dues Certificates (NDC)
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                A serious risk for borrowers in Bangalore is falling prey to fraudulent settlement schemes orchestrated by rogue collection agencies who provide verbal discounts or falsified settlement letters on messaging apps. If money is transferred into unauthorized accounts or without institutional credit sanction, the bank absorbs the payment as overdue interest, keeping the full loan active and legal proceedings open.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                A legally valid and binding settlement requires verification of two essential instruments:
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                <strong>1. Official Bank Settlement Sanction Letter:</strong> Must be issued directly by the bank or NBFC on registered letterhead, bearing a unique reference number, digital authentication from an authorized Zonal Credit Officer, precise loan account details, exact settlement consideration, scheduled payment deadlines, and payment instructions directing funds exclusively into your designated loan account.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                <strong>2. Final Physical No Dues Certificate (NDC) &amp; CIBIL Updation:</strong> Within 30 days of completing the agreed settlement amount, the lender is legally required under RBI rules to issue a formal ₹0 No Dues Certificate. Our legal team submits the NDC before the concerned Magistrate Court to record formal compounding of offenses under Section 138/25 and ensures the lender updates credit information companies (TransUnion CIBIL, Experian, Equifax, CRIF High Mark) to reflect &apos;Settled&apos; status with ₹0 balance.
              </p>
            </section>

            {/* Section 10: Bangalore Courts & SARB Directory */}
            <section id="bangalore-court-directory-matrix" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4" />
                <span>9. Bangalore Courts &amp; Resolution Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Bangalore Urban &amp; Rural District Courts Directory &amp; Jurisdiction Matrix
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Understanding which judicial forum holds territorial jurisdiction over your loan dispute is essential for timely legal intervention. Below is the directory and jurisdiction matrix for courts across Bengaluru where debt recovery litigation, Section 138 NI Act trials, and KSLSA Lok Adalats are conducted:
              </p>

              {/* Table 1: Bangalore Courts Directory */}
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
                      <td className="p-3 font-semibold text-slate-900 border-b border-slate-200">Chief Metropolitan Magistrate (ACMM) Courts, Nrupathunga Road</td>
                      <td className="p-3 border-b border-slate-200">Central Bengaluru (Gandhinagar, Majestic, Malleshwaram, Rajajinagar)</td>
                      <td className="p-3 border-b border-slate-200">Sec 138 NI Act, Special Magistrate Trials, Bail Applications</td>
                      <td className="p-3 border-b border-slate-200">Bangalore Urban DLSA</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900 border-b border-slate-200">Mayo Hall Court Complex, MG Road</td>
                      <td className="p-3 border-b border-slate-200">East Bengaluru (Indiranagar, Koramangala, Whitefield, Marathahalli, Domlur)</td>
                      <td className="p-3 border-b border-slate-200">Sec 138 NI Act, Summary Civil Suits (Order 37 CPC), Commercial Injunctions</td>
                      <td className="p-3 border-b border-slate-200">Mayo Hall Legal Services Committee</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900 border-b border-slate-200">City Civil Court Complex, Mysore Bank Circle</td>
                      <td className="p-3 border-b border-slate-200">Bengaluru Urban District Civil Jurisdiction</td>
                      <td className="p-3 border-b border-slate-200">Money Recovery Suits, Arbitration Appeals, Commercial Disputes</td>
                      <td className="p-3 border-b border-slate-200">City Civil Court Legal Services Authority</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900 border-b border-slate-200">Anekal Court Complex</td>
                      <td className="p-3 border-b border-slate-200">South Bengaluru &amp; Tech Hubs (Electronic City, Bommasandra, Anekal, Attibele)</td>
                      <td className="p-3 border-b border-slate-200">Sec 138 NI Act, NBFC Default Litigations, Pre-Litigation Conciliation</td>
                      <td className="p-3 border-b border-slate-200">Anekal Taluk Legal Services Committee</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Devanahalli &amp; Yelahanka Courts</td>
                      <td className="p-3">North Bengaluru (Yelahanka, Sahakar Nagar, Manyata Corridor, Devanahalli)</td>
                      <td className="p-3">Sec 138 NI Act, Section 25 PSSA, Bank Conciliation</td>
                      <td className="p-3">Bangalore Rural DLSA</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-8 mb-4">
                Comparative Resolution Channels: Lok Adalat vs Direct Settlement vs Court Litigation
              </h3>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Tech borrowers facing loan defaults must evaluate their strategic options across timeline, financial cost, legal finality, and potential debt haircut. The following table provides a comparative breakdown:
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
                      <td className="p-3 font-semibold text-slate-900 border-b border-slate-200">KSLSA Lok Adalat</td>
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
                      <td className="p-3">0% (Full Principal + Cumulative Penalties)</td>
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
                Frequently Asked Questions: Personal Loan Settlement Company Bangalore
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
                  href="https://karnatakajudiciary.kar.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#1F5EFF] hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>High Court of Karnataka: Judicial Orders &amp; Commercial Jurisprudence</span>
                </a>
                <a
                  href="https://kslsa.kar.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#1F5EFF] hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Karnataka State Legal Services Authority (KSLSA): Nyaya Degula Lok Adalat</span>
                </a>
                <a
                  href="https://ecourts.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#1F5EFF] hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>eCourts Services India: Bangalore Urban &amp; Rural Cause Lists</span>
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
                  href="/personal-loan-settlement-hyderabad"
                  className="py-1.5 px-3 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-medium transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement Hyderabad
                </Link>
                <Link
                  href="/personal-loan-settlement-pune"
                  className="py-1.5 px-3 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-medium transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement Pune
                </Link>
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
                  href="/credit-card-settlement-above-1-lakh"
                  className="py-1.5 px-3 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-medium transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Credit Card Settlement Above 1 Lakh
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-1.5 px-3 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-medium transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Settlement Impact on CIBIL Score
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
                Ashish is a premier banking legal strategist who has advised on over 1,600+ debt settlement cases across Bangalore, Mayo Hall, ACMM Nrupathunga Road, and City Civil Courts. He specializes in KSLSA Lok Adalat conciliation, tech corridor debt restructuring, and RBI Fair Practices enforcement.
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
                <span>Bangalore Tech Legal Hotline</span>
              </div>
              <h3 className="text-xl font-black mb-3 leading-tight">
                Facing Loan Notices or Recovery Harassment?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Received a legal notice or court summons from Mayo Hall, Nrupathunga Road, or City Civil Court? Protect your salary account and let our senior advocates handle your Lok Adalat defense and negotiate a formal 40%–70% OTS waiver.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white hover:bg-slate-100 text-[#1F5EFF] font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 shadow"
              >
                Talk to a Bangalore Legal Specialist
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
                    <strong>Direct Court Defense:</strong> Empanelled advocates represent you in Mayo Hall, City Civil Court, ACMM Nrupathunga Road, and Anekal Courts.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>KSLSA Lok Adalat Representation:</strong> Strategic advocacy during National and Mega Lok Adalats to obtain unappealable civil compromise decrees.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Salary &amp; Anti-Harassment Shield:</strong> Immediate legal notices stopping unauthorized salary debits under Section 171 and visits to tech parks.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed ₹0 NDC:</strong> Complete tracking until official No Dues Certificates are delivered and pending criminal/civil proceedings are compounded.
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
