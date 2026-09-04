'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';
import {
  ShieldCheck,
  AlertTriangle,
  TrendingUp,
  Clock,
  ArrowRight,
  ChevronDown,
  Calendar,
  Award,
  PhoneCall,
  ExternalLink,
  Lock,
  Building2,
  Landmark,
  Check,
  Sparkles,
  BookOpen,
  ShieldAlert,
  CreditCard,
  Scale,
  FileText,
  CheckCircle2,
  HelpCircle,
  Info,
  Users,
  Percent,
  CheckCircle,
  Calculator,
  Briefcase,
  Layers,
  ArrowUpRight,
  Gavel,
  FileCheck,
  ShieldX,
  UserCheck,
  AlertCircle,
  MapPin
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

export default function PersonalLoanSettlementPuneClient() {
  const [activeId, setActiveId] = useState<string>('pune-it-auto-debt-landscape');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'pune-it-auto-debt-landscape', title: '1. Pune IT & Auto Debt Crisis' },
    { id: 'npa-delinquency-timeline-pune', title: '2. Delinquency Timeline & NPA Aging' },
    { id: 'civil-law-vs-criminal-intimidation', title: '3. Civil Law vs Criminal Threats' },
    { id: 'recovery-harassment-pune-pcmc', title: '4. Recovery Defense in Pune & PCMC' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Resolution Blueprint' },
    { id: 'npv-haircut-valuation-formula', title: '6. NPV Formula & 40–70% Waivers' },
    { id: 'pune-district-court-lok-adalat', title: '7. Shivajinagar Court & Lok Adalat' },
    { id: 'step-by-step-settlement-roadmap', title: '8. Step-by-Step Resolution Roadmap' },
    { id: 'sanction-letter-forensics-ndc', title: '9. Sanction Letter & ₹0 NDC Mandate' },
    { id: 'cibil-score-rebuilding-plan', title: '10. CIBIL Score Rehabilitation' },
    { id: 'company-resolution-section', title: '11. SettleLoans Legal Shield in Pune' },
    { id: 'faqs', title: '12. Frequently Asked Questions' },
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
      question: 'Why do IT and automotive professionals in Pune require specialized debt settlement services?',
      answer: (
        <p>
          Salaried professionals working across Pune IT corridors (Hinjewadi, Magarpatta, Kharadi, Baner) and PCMC automotive manufacturing belts (Bhosari, Chakan, Talegaon) face distinct financial vulnerabilities. High fixed living costs, sudden corporate restructuring, variable compensation cuts, and easy pre-approved fintech loans often lead to a multi-loan exposure trap. When defaults occur, banks deploy aggressive third-party collection agencies that harass employees at corporate campuses or residential gated communities. Specialized debt settlement advocates understand RBI compromise frameworks, shield corporate careers from workplace harassment, and negotiate 40% to 70% debt waivers directly with bank credit committees.
        </p>
      ),
    },
    {
      question: 'Can Pune or PCMC Police summon or arrest me for an unsecured personal loan default?',
      answer: (
        <p>
          <strong>No. Defaulting on an unsecured personal loan is strictly a civil breach of contract</strong> under the Indian Contract Act, 1872. The Pune City Police Commissionerate and PCMC Police have zero statutory authority to summon you to a police station, register an FIR, or arrest you for genuine financial default. If recovery agents threaten police intervention or file malicious Section 420 IPC / Section 318 BNS complaints, your legal counsel can immediately dismiss these actions by citing Supreme Court directives established in <em>Arnesh Kumar v. State of Bihar</em>.
        </p>
      ),
    },
    {
      question: 'What legal steps should I take if I receive a Section 138 or Section 25 notice in Pune?',
      answer: (
        <p>
          Never ignore a judicial notice or court summons. When an EMI bounce occurs, lenders may initiate quasi-criminal proceedings under <strong>Section 138 of the Negotiable Instruments Act</strong> or <strong>Section 25 of the Payment and Settlement Systems Act (PSSA)</strong> before Judicial Magistrates at the Shivajinagar District Court or Pimpri Court. Your advocate will enter an appearance via a Vakalatnama, obtain immediate bail on the initial appearance date, and file an application under Section 147 of the NI Act to refer the dispute to mediation or Lok Adalat for an amicable One-Time Settlement (OTS).
        </p>
      ),
    },
    {
      question: 'How does National Lok Adalat loan settlement operate under the Pune District Legal Services Authority (PDLSA)?',
      answer: (
        <p>
          The Pune District Legal Services Authority (PDLSA) conducts National Lok Adalats quarterly at the Shivajinagar District and Sessions Court complex and the Pimpri-Chinchwad Court. At Lok Adalat, bank legal managers attend with pre-approved settlement mandates. Both parties negotiate discounted compromise terms before a panel consisting of a sitting or retired judge and a judicial conciliator. An award passed under Section 21 of the Legal Services Authorities Act, 1987, functions as a <strong>final, non-appealable Civil Court Decree</strong> with zero court fees and full permanent legal immunity.
        </p>
      ),
    },
    {
      question: 'What percentage of loan waiver can I realistically achieve through OTS in Pune?',
      answer: (
        <p>
          Depending on the aging of the default (typically 120 to 180+ days past due), the borrower&apos;s verified financial distress (job loss, medical emergency, startup collapse), and the bank&apos;s balance-sheet provisioning status, realistic One-Time Settlement (OTS) waivers in Pune range between <strong>40% and 70% of total ledger dues</strong>. Furthermore, 100% of penal interest, bounce charges, and late payment fines are completely waived in almost all institutional compromise agreements.
        </p>
      ),
    },
    {
      question: 'How do legal advocates stop recovery agents from visiting IT parks and residential societies in Pune?',
      answer: (
        <p>
          Legal counsel serves a formal <strong>Cease-and-Desist Legal Notice</strong> directly upon the bank&apos;s Zonal Head, Principal Nodal Officer (PNO), and empanelled collection agencies. The notice cites the <strong>RBI Master Directions on Recovery Agents (2022)</strong> and landmark Supreme Court rulings prohibiting visits to workplaces, contacting colleagues or HR departments, and entering residential societies in areas like Wakad, Baner, Kothrud, or Hadapsar without prior written consent. If violations continue, counsel initiates regulatory complaints before the RBI Integrated Ombudsman.
        </p>
      ),
    },
    {
      question: 'Can Pune banks seize my salary account maintained with another bank?',
      answer: (
        <p>
          Under Section 171 of the Indian Contract Act (Banker&apos;s Right of General Lien and Set-Off), a lending bank can only debit or freeze funds held within its own institutional branches under the same customer identification (CIF/PAN). A lender has no legal power to attach, freeze, or deduct salary from an account maintained at a different banking institution unless it secures an explicit execution attachment order from a competent Civil Court after years of formal litigation.
        </p>
      ),
    },
    {
      question: 'What must be verified in the bank OTS Sanction Letter before making payment?',
      answer: (
        <p>
          Before transferring any settlement funds, you must verify five essential components: (1) The letter must be printed on official bank letterhead with an authorized signatory&apos;s physical or digital signature and branch stamp; (2) Your loan account number, PAN, and full name must be accurately detailed; (3) The exact negotiated settlement amount and installment schedule must match your agreement; (4) The letter must explicitly stipulate that payment fully extinguishes all outstanding claims; and (5) The bank must guarantee issuance of a <strong>₹0 No Dues Certificate (NDC) within 30 calendar days</strong>.
        </p>
      ),
    },
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

      {/* 1. Charcoal Navy Hero Section (#2d313d) */}
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
            <Landmark className="w-3.5 h-3.5" />
            <span>Pune &amp; PCMC Debt Resolution Blueprint • RBI OTS Framework</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            Debt Settlement Services in Pune: <span className="text-[#3b82f6] md:text-[#60a5fa]">Legal Defense, Bank OTS &amp; Lok Adalat Guide</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Struggling with multiple personal loan defaults, aggressive collection harassment, or court notices across Pune, Hinjewadi, Magarpatta, and PCMC? Discover how banking advocates shield your career, stop recovery intimidation, and negotiate 40%–70% One-Time Settlement waivers under RBI rules.
          </p>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-3 mb-5 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Authored by <strong>Ashish Jhangra</strong></span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Updated: August 2026</span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>RBI Compromise Settlement Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Book Legal Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Calculate Pune Settlement Slabs
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip Component */}
      <StatsStrip />

      {/* 3. 3-Column Grid Layout */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column: Sticky Table of Contents + Crux Pill */}
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

            {/* Quick Crux Box */}
            <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>Pune Debt Defense Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Pune &amp; PCMC borrowers with unsecured loan defaults are legally shielded by civil law protections. Bank credit committees accept 40%–70% OTS waivers under RBI NPA provisioning rules, while PDLSA Lok Adalats issue non-appealable civil settlement decrees.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Narrative & Content */}
          <main className="w-full blog-content space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box (Before Section 1) */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 border-2 border-blue-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2.5 text-blue-950 font-bold text-lg mb-4">
                <div className="w-8 h-8 rounded-xl bg-[#1F5EFF] text-white flex items-center justify-center shadow-sm">
                  <Award className="w-5 h-5" />
                </div>
                <span>Key Takeaways: Debt Settlement Services in Pune &amp; PCMC</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Statutory Civil Protection:</strong> Personal loan default is strictly a civil breach of contract governed by the Indian Contract Act, 1872. Pune and PCMC police possess zero authority to arrest debtors or register criminal FIRs for commercial default.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>40% to 70% OTS Haircuts:</strong> Under the RBI Master Direction on Compromise Settlements (2023), banks operating across Pune authorize significant debt waivers once an unsecured loan reaches 120–180 days NPA status.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero-Tolerance on Workplace Harassment:</strong> Serving a formal advocate Cease-and-Desist notice under RBI Fair Practices Code legally bars recovery agents from visiting IT parks in Hinjewadi, Kharadi, or Magarpatta.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>PDLSA Lok Adalat Judicial Closure:</strong> Quarterly National Lok Adalats at Shivajinagar and Pimpri Courts convert compromise settlements into binding civil decrees with zero court fees and no right of appeal.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Mandatory ₹0 No Dues Certificate:</strong> Lenders must issue an authentic stamped No Dues Certificate within 30 days of settlement payment under RBI Circular RBI/2023-24/60, halting negative DPD counter updates in CIBIL.
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 1: Pune's Dual IT & Auto Economic Hub: Multi-Loan Stacking and Financial Distress */}
            <section id="pune-it-auto-debt-landscape" className="scroll-mt-24">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Briefcase className="w-4 h-4" />
                <span>1. Economic Architecture &amp; The Multi-Loan Trap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Pune&apos;s Dual IT &amp; Automotive Corridor: The Anatomy of Multi-Loan Overleveraging
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The Pune metropolitan region and the Pimpri-Chinchwad Municipal Corporation (PCMC) represent one of India&apos;s most dynamic economic engines. The city houses major Information Technology epicenters—including Rajiv Gandhi Infotech Park at Hinjewadi, Cybercity Magarpatta, EON Free Zone in Kharadi, and tech hubs in Baner and Viman Nagar—alongside the premier automotive and engineering belt spanning Bhosari, Chakan, Talegaon, and Nigdi. While this vibrant landscape offers lucrative career opportunities, it has also created a high-cost environment characterized by soaring residential rents, steep living expenses, and widespread access to instant digital credit.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Over the past three years, macro-economic shifts—including global tech layoffs, variable performance pay cuts, extended automotive vendor payment cycles, and startup shutdowns—have disrupted cash flows for tens of thousands of salaried professionals and micro-entrepreneurs. To bridge temporary monthly deficits, borrowers frequently resort to &quot;loan stacking&quot;: availing pre-approved personal loans from private sector banks (such as HDFC Bank, ICICI Bank, Axis Bank, and Kotak Mahindra Bank), supplemented by fintech credit lines and NBFC facilities (such as Bajaj Finance, Tata Capital, and Poonawalla Fincorp).
              </p>
              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                When monthly debt servicing obligations exceed 65% of net monthly take-home salary, the credit pyramid collapses into unavoidable delinquency. Borrowers suddenly find themselves facing simultaneous EMI defaults across four to seven separate lending institutions, triggering relentless tele-calling, legal demand notices, and profound psychological distress.
              </p>
            </section>

            {/* Section 2: Delinquency Evolution & RBI Stressed Asset Aging in Pune Banks */}
            <section id="npa-delinquency-timeline-pune" className="scroll-mt-24">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>2. Delinquency Timeline &amp; NPA Classification</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Delinquency Evolution &amp; RBI Stressed Asset Aging Across Pune Bank Branches
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When an EMI payment is missed, the loan account does not immediately become a write-off. Commercial banks and NBFCs operating across Pune are bound by the Reserve Bank of India&apos;s <strong>Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP)</strong>. Understanding this regulatory timeline is vital for borrowers seeking debt settlement services in Pune, because a bank&apos;s willingness to grant substantial One-Time Settlement (OTS) haircuts increases directly as the loan ages across quarterly provisioning buckets.
              </p>

              {/* Table 1: Delinquency Stages & Provisioning Impact */}
              <div className="my-6 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="font-bold text-slate-900">Delinquency Phase</th>
                      <th className="font-bold text-slate-900">Days Past Due (DPD)</th>
                      <th className="font-bold text-slate-900">Bank Balance Sheet Provisioning</th>
                      <th className="font-bold text-slate-900">Operational Bank Posture</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-800">SMA-0 (Early Alert)</td>
                      <td>1 – 30 Days</td>
                      <td>Standard Provision (0.40%)</td>
                      <td>Automated reminder SMS, app alerts, and internal collection call centre outreach.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-800">SMA-1 (Moderate Stress)</td>
                      <td>31 – 60 Days</td>
                      <td>Standard Provision (0.40%)</td>
                      <td>Branch manager follow-ups, NACH bounce penalties, and initial legal warning letters.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-800">SMA-2 (Imminent Default)</td>
                      <td>61 – 90 Days</td>
                      <td>Standard Provision (0.40%)</td>
                      <td>Aggressive recovery outreach, loan recall demand notice, and tele-calling escalation.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-800">Substandard NPA</td>
                      <td>91 – 365 Days</td>
                      <td>Mandatory 25% Unsecured Provision</td>
                      <td>Account outsourced to Pune DRAs; initial compromise settlement window opens.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-800">Doubtful / Loss Asset</td>
                      <td>365+ Days</td>
                      <td>100% Full Capital Provision</td>
                      <td>Transferred to Zonal Stressed Assets Resolution Branch; maximum 50%–70% OTS haircut approved.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                During the Special Mention Account stages (SMA-0 to SMA-2), lending institutions refuse compromise proposals, demanding full repayment of overdue EMIs along with accumulated late fees. However, once the account crosses the <strong>90-day delinquency threshold</strong>, it is formally categorized as a Non-Performing Asset (NPA). The bank must quarantine 25% of the outstanding loan value from its operating profits as a statutory provision. Once the account crosses 365 days, the bank is forced to make a 100% provision, recognizing the loan as a total balance-sheet loss. At this stage, any cash recovery achieved through an OTS directly enhances the bank&apos;s profitability as write-back income, creating maximum leverage for professional settlement advocates.
              </p>
            </section>

            {/* Section 3: Civil Contract Law vs. Coercive Criminal Threats in Pune Jurisdictions */}
            <section id="civil-law-vs-criminal-intimidation" className="scroll-mt-24">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4" />
                <span>3. Civil Contract Jurisprudence &amp; Statutory Defenses</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Civil Contract Law vs. Coercive Criminal Threats in Pune Jurisdictions
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The most pervasive weapon deployed by third-party recovery agencies in Pune is psychological intimidation through the misrepresentation of criminal law. Borrowers frequently receive WhatsApp messages and phone calls threatening immediate police arrest, home seizure, or the filing of criminal breach of trust and cheating complaints under Section 420 of the Indian Penal Code (or Section 318 of the Bharatiya Nyaya Sanhita, 2023).
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                It is an indisputable tenet of Indian jurisprudence that an unsecured personal loan default is purely a <strong>civil dispute arising from a breach of contract</strong> under the Indian Contract Act, 1872. The Supreme Court of India has repeatedly ruled that financial inability to repay a commercial loan does not constitute a criminal offence unless the lender establishes dishonest intention and fraudulent inducement at the very inception of the loan sanction.
              </p>

              {/* Statutory Callout Box */}
              <div className="bg-slate-50 border-l-4 border-[#1F5EFF] p-5 rounded-r-2xl my-6">
                <h3 className="text-slate-900 font-bold text-base mb-2 flex items-center gap-2">
                  <Info className="w-5 h-5 text-[#1F5EFF]" />
                  Section 138 NI Act &amp; Section 25 PSSA: Compoundable Quasi-Criminal Matters
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  While ordinary default is civil, the bouncing of repayment cheques or automated NACH mandates allows banks to file complaints under <strong>Section 138 of the Negotiable Instruments Act, 1881</strong> or <strong>Section 25 of the Payment and Settlement Systems Act, 2007</strong> before Judicial Magistrates in Pune. These offences are strictly bailable and legally compoundable under Section 147 of the NI Act. Upon concluding a negotiated One-Time Settlement, the bank is legally required to withdraw the complaint, extinguishing all criminal exposure.
                </p>
              </div>

              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                Furthermore, under the <strong>Banker&apos;s Right of General Lien and Set-Off (Section 171 of the Indian Contract Act)</strong>, a bank can only attach funds held within its own institutional branches under the same PAN/CIF. Lenders have zero legal authority to freeze or attach your salary account held at an independent banking institution, nor can they attach your household assets, ancestral property, or personal vehicle without obtaining a formal decree and execution order from a competent Civil Court after years of trial.
              </p>
            </section>

            {/* Section 4: Collection Agency Dynamics in Pune & PCMC: Legal Defense & RBI Safeguards */}
            <section id="recovery-harassment-pune-pcmc" className="scroll-mt-24">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>4. Recovery Agency Tactics &amp; Anti-Harassment Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Collection Agency Intimidation in Pune &amp; PCMC: Legal Defense &amp; RBI Safeguards
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                In Pune&apos;s retail lending market, unsecured personal loan defaults between ₹2 Lakhs and ₹20 Lakhs sit in an aggressive collection corridor. Because individual debt amounts in this range are below the ₹20,00,000 threshold required to approach the Debt Recovery Tribunal (DRT), and filing a full civil summary suit in Pune District Court involves substantial advocate fees and administrative delays, financial institutions outsource these accounts to private <strong>Debt Recovery Agencies (DRAs)</strong>.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                These recovery agents operate on hefty collection commissions (10% to 20% of recovered capital), which incentivizes unlawful, aggressive tactics. Common violations across Pune include visiting IT park office receptions at Hinjewadi Phase 1–3 or Kharadi, threatening to humiliate borrowers before employers and HR managers, confronting family members in residential gated societies across Wakad, Baner, Kothrud, and Hadapsar, and sending spoofed legal notices via WhatsApp.
              </p>
              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                Under the <strong>RBI Master Direction on Recovery Agents (2022)</strong> and the landmark Supreme Court decision in <em>ICICI Bank Ltd. v. Prakash Kaur (2007)</em>, coercive recovery practices are illegal. Lenders and their agents are prohibited from calling before 08:00 AM or after 07:00 PM, contacting workplace numbers without prior consent, or using threatening language. Retaining seasoned debt settlement advocates in Pune allows you to serve an immediate Cease-and-Desist legal notice, transferring all creditor communication directly to your legal counsel and holding bank nodal officers personally liable for regulatory breaches.
              </p>
            </section>

            {/* Section 5: Dedicated Infographic Banner Component */}
            <div id="infographic-resolution-blueprint" className="scroll-mt-24">
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
                        Pune Debt Settlement Roadmap: IT/Auto Corridors &amp; Lok Adalat Protocols
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/personal-loan-settlement-pune.jpg"
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
                      src="/images/infographics/personal-loan-settlement-pune.jpg"
                      alt="Debt Settlement Services in Pune, IT Hub Hinjewadi & PCMC Resolution Blueprint"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Takeaway:</strong> Pune borrowers can settle unsecured personal loans at 40%–70% waivers under RBI IRACP rules and obtain a stamped ₹0 NDC.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Section 6: The NPV Compromise Settlement Formula: 40%–70% Haircut Calculations */}
            <section id="npv-haircut-valuation-formula" className="scroll-mt-24">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>5. Net Present Value (NPV) Valuation &amp; Haircut Slabs</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                The Mathematical Haircut Formula: How Pune Bank Committees Evaluate OTS
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Institutional debt settlement is not a subjective barter; it is a structured financial calculation governed by the <strong>RBI Master Direction on Compromise Settlements and Technical Write-offs (2023)</strong>. Bank Credit Approval Committees in Pune assess settlement proposals using a mathematical Net Present Value (NPV) Recovery Benchmark.
              </p>

              {/* Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated recoveries over time, r is the bank&apos;s discount rate, and deductions account for 3–5 years of court friction in Pune District Courts alongside capital locked in mandatory NPA provisioning.
                </p>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Because unsecured personal loans carry zero underlying collateral to auction, the bank&apos;s projected judicial recovery after deducting legal retainers and court fees is minimal. Consequently, an immediate lump-sum settlement of 30% to 50% of the book debt yields a higher Net Present Value for the lender than prolonged litigation.
              </p>

              {/* Table 2: Pune Debt Haircut Matrix */}
              <div className="my-6 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="font-bold text-slate-900">Borrower Category &amp; Default Bucket</th>
                      <th className="font-bold text-slate-900">Achievable Haircut (%)</th>
                      <th className="font-bold text-slate-900">Realistic Settlement Range</th>
                      <th className="font-bold text-slate-900">Waiver Components</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-800">Early NPA (90–120 DPD, IT Tech Restructuring)</td>
                      <td>35% – 45%</td>
                      <td>55% – 65% of Principal</td>
                      <td>100% Penal Interest + Bounce Charges + Partial Principal Waiver</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-800">Substandard NPA (120–240 DPD, Auto Sector Hardship)</td>
                      <td>45% – 60%</td>
                      <td>40% – 55% of Principal</td>
                      <td>100% Penal Charges + Substantial Principal Discount</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-800">Doubtful Asset (240–365+ DPD, Multi-Loan Stack)</td>
                      <td>60% – 70%</td>
                      <td>30% – 40% of Principal</td>
                      <td>100% Penal Charges + Deep Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-800">Severe Involuntary Hardship (Medical / Layoff)</td>
                      <td>70% – 75%</td>
                      <td>25% – 30% of Principal</td>
                      <td>100% Penal Charges + Maximum Permissible Principal Waiver</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7: Pune District Courts & PDLSA Lok Adalat Mechanics (Shivajinagar & Pimpri) */}
            <section id="pune-district-court-lok-adalat" className="scroll-mt-24">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>6. Judicial Jurisdiction &amp; Lok Adalat Protocols</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Pune District Courts &amp; PDLSA Lok Adalat Settlement Mechanics
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Legal proceedings for loan defaults in Pune are primarily instituted before the <strong>Shivajinagar District and Sessions Court Complex</strong> for Pune city limits and the <strong>Pimpri-Chinchwad Court Complex</strong> for PCMC jurisdictions. When banks file summary civil suits under Order 37 of the CPC or Section 138 NI Act complaints, borrowers must have competent local legal representation to avoid ex-parte orders.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The most efficient institutional forum for debt resolution in Pune is the <strong>National Lok Adalat</strong> organized by the Pune District Legal Services Authority (PDLSA). Conducted four times a year at Shivajinagar and Pimpri, Lok Adalats provide an amicable pre-litigation and pending-litigation conciliation platform where banks participate with pre-sanctioned compromise discount grids.
              </p>
              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                When a settlement is finalized before a Lok Adalat panel comprising a judicial magistrate and a conciliator, a formal <strong>Lok Adalat Award is passed under Section 21 of the Legal Services Authorities Act, 1987</strong>. This award carries the full legal force of a final decree of a Civil Court. It permanently disposes of the case, requires zero court fees, and cannot be appealed by the lender in any higher judicial forum.
              </p>
            </section>

            {/* Section 8: Step-by-Step Strategic Roadmap for Debt Settlement in Pune */}
            <section id="step-by-step-settlement-roadmap" className="scroll-mt-24">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>7. Strategic 5-Stage Resolution Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Step-by-Step Strategic Roadmap to Settle Loans Across Pune &amp; PCMC
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Navigating a multi-lender debt crisis across Pune requires a structured, attorney-led execution strategy divided into five distinct chronological phases:
              </p>
              <ul className="space-y-3 text-sm md:text-base text-slate-700 list-disc pl-5">
                <li>
                  <strong>Phase 1: Financial &amp; Multi-Loan Portfolio Audit:</strong> Comprehensive analysis of all active unsecured credit facilities across SBI, HDFC, ICICI, Axis, Bajaj Finserv, and fintech apps. We separate core principal from inflated penal interest and calculate your realistic repayment capacity.
                </li>
                <li>
                  <strong>Phase 2: Legal Shielding &amp; Harassment Injunction:</strong> Dispatch of formal legal notices under RBI Fair Practices Code to bank Nodal Officers and recovery agency heads, halting workplace visits at Hinjewadi/Kharadi and residential visits in Wakad/Baner.
                </li>
                <li>
                  <strong>Phase 3: Hardship Docket Compilation:</strong> Assembling documented evidence of bona fide distress—including termination letters, salary revision slips, medical hospital records, or GST business turnover declines—to prove genuine commercial insolvency.
                </li>
                <li>
                  <strong>Phase 4: Direct Zonal &amp; SARB Committee Negotiations:</strong> Bypassing third-party tele-callers to negotiate directly with bank Stressed Assets Management Branches (SAMB) in Pune, anchoring settlement counter-offers at 30%–40% of the principal sum.
                </li>
                <li>
                  <strong>Phase 5: Sanction Verification &amp; ₹0 NDC Delivery:</strong> Forensic audit of the bank&apos;s stamped OTS Sanction Letter, supervised payment via official bank RTGS/NEFT portals, and procurement of the final ₹0 No Dues Certificate within 30 days.
                </li>
              </ul>
            </section>

            {/* Section 9: OTS Sanction Letter Forensics & The Mandatory ₹0 NDC Mandate */}
            <section id="sanction-letter-forensics-ndc" className="scroll-mt-24">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>8. Document Verification &amp; Closure Certification</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                The OTS Sanction Letter Audit: Mandatory Clauses &amp; The ₹0 NDC Mandate
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                A major hazard for distressed borrowers in Pune is falling victim to unauthorized collection agent promises. Frequently, collection executives ask borrowers to deposit partial amounts into their accounts under the verbal assurance of loan closure, only for the bank to adjust the funds against accumulated penal interest while keeping the principal debt active.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                To guarantee legal finality, payment must never be remitted without an authentic, verifiable <strong>OTS Sanction Letter</strong> issued on official bank letterhead bearing an authorized signatory&apos;s stamp and signature. The sanction letter must explicitly confirm the exact settlement amount, payment deadlines, waiver of all residual balances, and unconditional withdrawal of any pending court litigation.
              </p>

              {/* Table 3: Comparative Resolution Matrix */}
              <div className="my-6 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="font-bold text-slate-900">Resolution Channel</th>
                      <th className="font-bold text-slate-900">Average Waiver (%)</th>
                      <th className="font-bold text-slate-900">Legal Status &amp; Enforceability</th>
                      <th className="font-bold text-slate-900">Best Suited For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-800">Bilateral Bank OTS</td>
                      <td>40% – 70% Total Dues</td>
                      <td>Binding Contractual Accord via Stamped Sanction Letter</td>
                      <td>Borrowers with liquid funds seeking rapid closure in 30–60 days.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-800">PDLSA Lok Adalat Award</td>
                      <td>45% – 65% Total Dues</td>
                      <td>Non-Appealable Civil Court Decree (Section 21 NALSA)</td>
                      <td>Borrowers with active Section 138/25 court summons in Pune courts.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-800">Loan Restructuring / Rescheduling</td>
                      <td>0% Waiver (Tenure Extended)</td>
                      <td>Modified Loan Agreement with continuing interest accrual</td>
                      <td>Borrowers with stable cash flow wanting to preserve credit rating.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                Under <strong>RBI Circular RBI/2023-24/60</strong>, regulated financial entities are legally obligated to issue a <strong>₹0 No Dues Certificate (NDC)</strong> and return all original security documents within <strong>30 calendar days</strong> of receiving full settlement funds. Any delay beyond 30 days entitles the borrower to statutory compensation of ₹5,00,0 per day of delay payable directly by the lending institution.
              </p>
            </section>

            {/* Section 10: CIBIL Score Rehabilitation & 24-Month Credit Rebuilding Blueprint */}
            <section id="cibil-score-rebuilding-plan" className="scroll-mt-24">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>9. CIBIL Rehabilitation &amp; Financial Recovery</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                CIBIL Score Impact &amp; 24-Month Credit Rebuilding Blueprint Post-Settlement
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Upon completion of an OTS, the lending institution reports the account status to TransUnion CIBIL, Experian, Equifax, and CRIF High Mark as <strong>&apos;Settled&apos;</strong> with an outstanding balance of <strong>₹0</strong>. While a &apos;Settled&apos; remark reflects that the debt was closed with a partial waiver—causing an immediate score reduction of 75 to 150 points—it permanently halts the compounding default cycle and stops negative DPD reporting.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Rebuilding a prime credit score post-settlement is a systematic, proven roadmap. Borrowers can initiate rehabilitation by securing a fixed-deposit-backed credit card (₹20,000 to ₹50,000 FD collateral), maintaining monthly credit utilization strictly under 25%, and servicing all monthly statement balances in full before the due date. Within 18 to 24 months, credit scores routinely return to <strong>750+</strong>, restoring eligibility for prime home loans, car loans, and business financing.
              </p>
            </section>

            {/* Section 11: SettleLoans Legal Defense & Professional Advisory in Pune */}
            <section id="company-resolution-section" className="scroll-mt-24">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>10. Comprehensive Legal Representation in Pune</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Why Pune &amp; PCMC Borrowers Trust SettleLoans for Debt Resolution
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Navigating complex multi-loan defaults across Pune demands seasoned banking litigation counsel. The legal advocates and financial strategists at SettleLoans provide comprehensive, end-to-end protection: issuing anti-harassment cease-and-desist notices, defending court summons at Shivajinagar and Pimpri Courts, representing clients at PDLSA Lok Adalats, and negotiating maximum permissible OTS haircuts directly with bank Zonal Credit Committees.
              </p>

              {/* Placement of Reusable CompanySection */}
              <div className="my-8">
                <CompanySection />
              </div>
            </section>

            {/* Section 12: Frequently Asked Questions (FAQ Accordion) */}
            <section id="faqs" className="scroll-mt-24">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>11. Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                Frequently Asked Questions About Debt Settlement Services in Pune
              </h2>

              <div className="space-y-3">
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

            {/* 5 Official Regulatory Links */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-[#1F5EFF]" />
                Official Statutory &amp; Regulatory Authorities
              </h3>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Reserve Bank of India (RBI):</strong> Master Direction on Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24)
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
                    <strong>RBI Integrated Ombudsman Portal:</strong> Regulatory Redressal for Recovery Agent Harassment &amp; Settlement Non-Compliance
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://legalservices.maharashtra.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Maharashtra State Legal Services Authority (MSLSA):</strong> Pune District Legal Services Authority (PDLSA) Lok Adalat Schedule
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://districts.ecourts.gov.in/pune"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>eCourts Pune District Court:</strong> Shivajinagar &amp; Pimpri District and Sessions Court Case Status &amp; Lok Adalat Benches
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>TransUnion CIBIL India:</strong> Credit Information Companies (Regulation) Act, 2005 — Loan Settlement &amp; Closure Reporting Guidelines
                  </a>
                </li>
              </ul>
            </div>

            {/* 10 Related Guide Badges */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#1F5EFF]" />
                Explore Related Banking &amp; Debt Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2.5">
                <Link
                  href="/personal-loan-settlement-mumbai"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement Mumbai
                </Link>
                <Link
                  href="/personal-loan-settlement-percentage"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement Percentage
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Bank One-Time Settlement (OTS) Policy
                </Link>
                <Link
                  href="/bajaj-finance-personal-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Bajaj Finance Loan Settlement
                </Link>
                <Link
                  href="/hdfc-personal-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  HDFC Personal Loan Settlement
                </Link>
                <Link
                  href="/sbi-personal-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  SBI Personal Loan Settlement
                </Link>
                <Link
                  href="/icici-personal-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  ICICI Personal Loan Settlement
                </Link>
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Lok Adalat Notice for Personal Loan
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement CIBIL Impact
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
              </div>
            </div>
          </main>

          {/* Right Column: Author Bio Card, Emergency CTA, Trust Signals */}
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
                Ashish has led over 1,850+ successful bank compromise negotiations across SBI, HDFC Bank, ICICI, Axis Bank, Bajaj Finance, and leading NBFCs. He specializes in retail banking NPA haircuts, PDLSA Lok Adalat conciliation, and borrower legal shielding under RBI Master Directions.
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

            {/* Card 2: Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-[#1F5EFF] to-blue-700 text-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 text-blue-100 text-xs font-bold uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Pune Debt Defense Cell</span>
              </div>
              <div className="text-xl font-black mb-3 leading-tight">
                Facing Loan Default or Recovery Harassment in Pune?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Stop illegal recovery visits to Hinjewadi/Kharadi IT offices and residential societies. Let our banking advocates audit your loan accounts, issue statutory legal notices, and secure an authentic stamped OTS sanction letter.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white hover:bg-slate-100 text-[#1F5EFF] font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 shadow"
              >
                Talk to a Pune Settlement Advocate
              </Link>
            </div>

            {/* Card 3: Trust Signals Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                <span>Why Pune Borrowers Trust SettleLoans</span>
              </div>
              <ul className="space-y-3.5 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct Bank Representation:</strong> We negotiate directly with Bank Zonal Credit Committees and SARB branches across Pune, completely bypassing third-party collection agencies.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Workplace &amp; Home Shielding:</strong> Immediate Cease-and-Desist notices issued to bank Nodal Officers to stop unauthorized visits across Pune IT corridors and PCMC societies.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Shivajinagar &amp; Pimpri Court Defense:</strong> Expert legal defense against Section 138 NI Act and Section 25 PSSA summons, with Lok Adalat decree finalization.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed ₹0 NDC:</strong> End-to-end tracking until your official stamped No Dues Certificate is issued and your CIBIL profile is updated.
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
