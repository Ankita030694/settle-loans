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
  AlertCircle
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

export default function AxisBankPersonalLoanSettlementClient() {
  const [activeId, setActiveId] = useState<string>('understanding-axis-loan-defaults');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'understanding-axis-loan-defaults', title: '1. Institutional Context & Risk Architecture' },
    { id: 'axis-npa-delinquency-timeline', title: '2. Delinquency Timeline & SARB Escalation' },
    { id: 'bankers-lien-setoff-protections', title: '3. Section 171 Lien & Burgundy Account Shield' },
    { id: 'statutory-notices-section-25-pssa', title: '4. Section 25 PSSA & Section 138 Defense' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Resolution Blueprint' },
    { id: 'axis-ots-policy-haircut-formula', title: '6. OTS Haircut Policy & NPV Valuation Formula' },
    { id: 'step-by-step-settlement-process', title: '7. Step-by-Step SARB Settlement Roadmap' },
    { id: 'sanction-letter-audit-ndc-verification', title: '8. Sanction Letter Audit & ₹0 NDC Mandate' },
    { id: 'cibil-impact-credit-rehabilitation', title: '9. CIBIL Score Trajectory & Rehabilitation' },
    { id: 'company-resolution-section', title: '10. SettleLoans Legal Defense & Advisory' },
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
      question: "What is the Axis Bank loan settlement process and how does it work?",
      answer: (
        <p>
          The <strong>Axis Bank loan settlement process</strong> is a formal legal compromise agreement between Axis Bank Limited and an unsecured borrower facing genuine financial incapacity. When an unsecured personal loan or Burgundy credit card defaults beyond 90 days and is classified as a Non-Performing Asset (NPA), the account is transferred from retail branches to the <strong>Stressed Asset Resolution Branch (SARB)</strong>. The borrower submits a detailed One-Time Settlement (OTS) proposal supported by legitimate hardship records (such as job termination letters, hospital bills, or business winding-up filings). Axis Bank&apos;s Credit Committee calculates the recovery potential against internal Net Present Value (NPV) benchmarks. Upon sanction, Axis Bank issues an official stamped <strong>OTS Sanction Letter</strong>. Once the compromised sum is remitted directly into the loan account, the bank extinguishes all residual debt and issues a ₹0 <strong>No Dues Certificate (NDC)</strong>.
        </p>
      )
    },
    {
      question: "What percentage of debt waiver or haircut does Axis Bank typically approve?",
      answer: (
        <p>
          On unsecured personal loans, 24x7 instant credit lines, and Burgundy credit cards, Axis Bank typically approves debt haircuts ranging between <strong>40% and 65%</strong> of the total ledger balance. The exact waiver percentage depends on: (1) <em>NPA Aging Bucket:</em> Loans classified as Doubtful (D1/D2) or Loss Assets where Axis Bank has provisioned 50% to 100% of the capital on its balance sheet qualify for the deepest haircuts; (2) <em>Hardship Verifiability:</em> Concrete documentation establishing involuntary insolvency; (3) <em>SARB Channel Negotiation:</em> Engaging directly with senior zonal credit managers rather than outsourced collection agencies. In all approved settlements, 100% of accrued penal charges, overdue interest, and bounce fees are completely eliminated.
        </p>
      )
    },
    {
      question: "What is the role of Axis Bank's SARB (Stressed Asset Resolution Branch)?",
      answer: (
        <p>
          The <strong>Stressed Asset Resolution Branch (SARB)</strong> is Axis Bank&apos;s specialized asset recovery division created to manage and resolve non-performing retail and corporate debt portfolios. Once a personal loan defaults past 90 to 120 days, retail branch managers lose discretionary authority to offer repayment concessions, and the file is reassigned to SARB. SARB officers operate under delegated financial authorities, possessing the institutional power to waive substantial principal balances, evaluate litigation costs versus immediate cash recovery, and execute binding compromise settlement agreements.
        </p>
      )
    },
    {
      question: "Can Axis Bank debit money from my savings or Burgundy account for an overdue loan?",
      answer: (
        <p>
          Yes. Under the legal doctrine of <strong>Banker&apos;s Right of General Lien and Set-Off (Section 171 of the Indian Contract Act, 1872)</strong>, Axis Bank is legally empowered to debit funds or freeze balances in any savings account, salary account, current account, or fixed deposit maintained with Axis Bank under the same Customer Identification File (CIF) or PAN. However, <strong>Axis Bank cannot legally attach, freeze, or withdraw money from accounts held with other independent banking institutions</strong> (such as HDFC Bank, ICICI Bank, or State Bank of India) without obtaining a formal attachment warrant from a competent Civil Court or Debt Recovery Tribunal.
        </p>
      )
    },
    {
      question: "How should borrowers handle Section 25 PSSA and Section 138 legal notices from Axis Bank?",
      answer: (
        <p>
          When an electronic NACH auto-debit mandate fails or a repayment cheque is dishonoured due to insufficient funds, Axis Bank&apos;s empanelled law firms issue statutory legal notices under <strong>Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA)</strong> or <strong>Section 138 of the Negotiable Instruments Act, 1881</strong>. Borrowers must never ignore these notices. A formal legal reply drafted by experienced debt defense advocates must be served within the mandatory 15-day window, setting out genuine financial hardship, disputing unlawful penal calculations, and proposing a structured One-Time Settlement to avert court escalation.
        </p>
      )
    },
    {
      question: "How strict are Axis Bank recovery agents and what are borrower rights against harassment?",
      answer: (
        <p>
          Axis Bank deploys internal recovery desks during early delinquency (1–60 days) and assigns empanelled third-party <strong>Debt Recovery Agencies (DRAs)</strong> once accounts enter NPA status. Under the <strong>RBI Master Directions on Recovery Agents (2022)</strong> and the Fair Practices Code, borrowers possess enforceable statutory rights: (a) Agents may only call between 08:00 AM and 07:00 PM; (b) Abusive language, intimidation, and public humiliation are strictly prohibited; (c) Agents are barred from contacting employers, colleagues, or relatives; (d) Visiting agents must display an official bank authorization letter and DRA ID card. Violations can be reported to Axis Bank&apos;s Principal Nodal Officer and the RBI Integrated Ombudsman.
        </p>
      )
    },
    {
      question: "Can Axis Bank personal loans be settled through the National Lok Adalat?",
      answer: (
        <p>
          <strong>Yes. Axis Bank regularly participates in the quarterly National Lok Adalat</strong> conducted across India under the <em>Legal Services Authorities Act, 1987</em>. Delinquent personal loan and credit card accounts referred to Lok Adalat are evaluated by a judicial conciliation panel where authorized Axis Bank officers attend with pre-approved settlement mandates (often offering 45% to 65% haircuts). An award passed in Lok Adalat has the legal force of a <strong>Civil Court Decree with absolute finality</strong>, permanently extinguishing all civil claims and Section 138/Section 25 proceedings with no right of appeal.
        </p>
      )
    },
    {
      question: "How does an Axis Bank loan settlement affect your CIBIL score and credit history?",
      answer: (
        <p>
          Upon completion of the settlement, Axis Bank reports the loan account status to credit information companies (CIBIL, Experian, Equifax, CRIF High Mark) as <strong>&apos;Settled&apos;</strong> or <strong>&apos;Post-Write-off Settled&apos;</strong> with an outstanding balance of <strong>₹0</strong>. This closes the delinquent account but causes an immediate credit score drop of approximately 75 to 150 points. In addition, RBI compromise guidelines mandate a 12-month cooling period before applying for fresh credit. However, a &apos;Settled&apos; tag with ₹0 balance halts open compounding defaults and enables borrowers to restore their CIBIL score back to 750+ within 18 to 24 months through disciplined credit rebuilding.
        </p>
      )
    },
    {
      question: "What safety precautions are vital before remitting settlement funds to Axis Bank?",
      answer: (
        <p>
          Borrowers must follow five non-negotiable security protocols: (1) <strong>Zero Verbal Commitments:</strong> Never pay based on phone calls, SMS, or WhatsApp messages from recovery agents; (2) <strong>Authentic Bank Letterhead:</strong> Demand an official OTS Sanction Letter printed on Axis Bank letterhead with bank seal and officer employee code; (3) <strong>Direct Loan Account Remittance:</strong> Deposit funds strictly into your designated Axis Bank loan account number via RTGS/NEFT or account payee cheque—never into personal accounts; (4) <strong>Full Extinguishment Clause:</strong> Confirm the letter explicitly states that the payment constitutes full and final satisfaction with complete waiver of balance dues; (5) <strong>Instant Stamped Receipt:</strong> Secure an immediate bank-stamped payment receipt upon transfer.
        </p>
      )
    },
    {
      question: "What is the timeline for Axis Bank to issue the No Dues Certificate (NDC) under RBI rules?",
      answer: (
        <p>
          Under <strong>RBI Circular RBI/2023-24/60</strong>, Axis Bank is legally required to issue a formal <strong>No Dues Certificate (NDC) / Loan Closure Certificate</strong> and update credit bureau databases within <strong>30 calendar days</strong> of receiving the agreed settlement amount. If Axis Bank fails to issue the certificate or complete the closure within 30 days without lawful justification, the bank is statutorily liable to pay mandatory compensation of <strong>₹5,000 for each day of delay</strong> directly to the borrower.
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

      {/* 1. Charcoal Navy Hero Section */}
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
            <span>Bank-Specific Dispute Resolution • Axis Bank</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            Axis Bank Personal Loan Settlement: <span className="text-[#3b82f6] md:text-[#60a5fa]">SARB Process, OTS Rules &amp; Haircut Matrix</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Defaulted on an Axis Bank personal loan, Burgundy credit card, or 24x7 instant loan? Learn Axis Bank&apos;s SARB escalation timelines, NPA provisioning rules, recovery agent defense, and how to negotiate up to a 60% legal debt waiver.
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
              <span>RBI Master Direction Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Negotiate Axis Settlement</span>
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

      {/* 2. Stats Strip Component */}
      <StatsStrip />

      {/* 3. 3-Column Grid Container */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column (Sticky Table of Contents + Executive Crux) */}
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

            {/* Quick Executive Case Crux Box */}
            <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>Axis Bank Quick Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Axis Bank transfers delinquent loans past 90–120 days to SARB desks. Direct legal escalation eliminates agency markups, unlocking 40%–65% principal haircuts.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">

            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 border border-blue-200 rounded-2xl p-6 mb-8 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-base mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Axis Bank Loan Settlement</span>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>SARB Escalation Window:</strong> Once defaults cross 90–120 days, retail branches transfer files to the Stressed Asset Resolution Branch (SARB), where formal compromise settlements with substantial haircuts are sanctioned.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Haircut Benchmark (40%–65%):</strong> Distressed borrowers with verifiable hardship can secure 40% to 65% waivers on principal outstanding, with 100% elimination of penal interest and late fees.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Section 171 Banker&apos;s Lien Defense:</strong> Axis Bank can auto-debit accounts within Axis Bank under Section 171 of the Indian Contract Act, requiring borrowers to safeguard external banking arrangements.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Notice Response:</strong> Prompt legal replies to Section 25 PSSA and Section 138 NI Act notices halt magistrate escalation and direct the bank toward judicial conciliation.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory ₹0 NDC within 30 Days:</strong> Under RBI Circular RBI/2023-24/60, Axis Bank must issue the No Dues Certificate within 30 days of settlement or pay ₹5,000 daily delay compensation.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Institutional Context & Axis Bank Risk Architecture */}
            <section id="understanding-axis-loan-defaults" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. Institutional Context &amp; Risk Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Understanding Axis Bank&apos;s Retail Portfolio &amp; Risk Management Framework
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Axis Bank Limited stands as one of India&apos;s largest private sector financial institutions, commanding a massive retail credit footprint that encompasses unsecured personal loans, 24x7 instant digital loans, Burgundy high-net-worth credit facilities, and cross-sold revolving credit lines. Because these credit products are extended without mortgage collateral or tangible hypothecation, Axis Bank manages its institutional risk through automated credit underwriting, algorithmic bureau monitoring, and tight National Automated Clearing House (NACH) mandate sweeps.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When an unexpected economic disruption strikes—such as sudden corporate downsizing, catastrophic medical emergencies, business liquidation, or macroeconomic insolvencies—the borrower&apos;s cash flow fractures. The moment a scheduled monthly installment fails to clear on the designated payment date, Axis Bank&apos;s automated risk infrastructure triggers compounding late fees, penal charges of 24% to 36% per annum, and algorithmic risk flags that restrict existing credit card limits across the borrower&apos;s entire Customer Identification File (CIF).
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under Indian jurisprudence and the binding directives of the Reserve Bank of India (RBI), financial distress resulting from legitimate economic misfortune is fundamentally recognized as a civil contractual dispute. The law draws a clear distinction between a dishonest wilful defaulter who possesses liquid assets but deliberately diverts sanctioned capital, and an involuntary distressed borrower whose debt-servicing capacity has been dismantled by genuine financial calamity. Involuntary borrowers possess the legal right to seek debt resolution under board-approved compromise settlement frameworks.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong>Statutory Principle:</strong> Defaulting on an unsecured personal loan or credit card in India is strictly a civil breach of contract governed by the Indian Contract Act, 1872. It is not a criminal offense. Neither police authorities nor bank recovery executives possess the legal power to arrest, detain, or summon borrowers to police stations for financial default.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Delinquency Timeline: SMA-0 to NPA & SARB Escalation */}
            <section id="axis-npa-delinquency-timeline" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>2. Delinquency Timeline &amp; SARB Escalation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Axis Bank&apos;s Delinquency Lifecycle: From SMA-0 to SARB Handover
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Navigating a compromise settlement with Axis Bank requires a clear understanding of the Reserve Bank of India&apos;s Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP). An overdue personal loan progresses through standardized regulatory and administrative stages that determine the bank&apos;s internal provisioning burden and its legal willingness to grant principal haircuts.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                During the initial Special Mention Account (SMA-0 and SMA-1) stages spanning the first 60 days of default, collection efforts remain centralized with automated digital reminders and tele-calling teams. When delinquency enters SMA-2 status (61 to 90 days past due), the risk vertical issues pre-NPA warnings and loan acceleration notices. Once the account crosses the 90-day threshold without payment, it is officially classified as a Non-Performing Asset (NPA) and reassigned to the Stressed Asset Resolution Branch (SARB).
              </p>

              {/* 4-Sided Bordered Delinquency Table */}
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Delinquency Stage</th>
                      <th>Overdue Timeline</th>
                      <th>Regulatory Asset Category</th>
                      <th>Institutional Action &amp; Settlement Viability</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-0</td>
                      <td>1 – 30 Days Past Due</td>
                      <td>Standard Performing Asset</td>
                      <td>Automated SMS reminders, NACH re-presentment fees, standard tele-collection calls. Zero haircut viability.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-1</td>
                      <td>31 – 60 Days Past Due</td>
                      <td>Standard Monitored Asset</td>
                      <td>Escalated tele-calling, initial credit limit freeze on Burgundy cards. Standard restructuring possible.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-2</td>
                      <td>61 – 90 Days Past Due</td>
                      <td>High-Risk Watchlist</td>
                      <td>Pre-NPA demand notices dispatched, field verification initiated. Settlement discussions strictly non-discounted.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Substandard NPA</td>
                      <td>91 – 365 Days Past Due</td>
                      <td>Non-Performing Asset (NPA)</td>
                      <td>Account transferred to SARB. Bank absorbs 15%–25% provisioning. 35%–50% principal haircut becomes negotiable.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful (D1/D2)</td>
                      <td>12 – 36 Months Past Due</td>
                      <td>Doubtful Impaired Asset</td>
                      <td>Provisioning escalates to 50%–100%. SARB prioritizes cash realization. 50%–65% principal haircut achievable.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Loss Asset</td>
                      <td>36+ Months Past Due</td>
                      <td>Fully Written-off Asset</td>
                      <td>100% written off on bank ledger. Lok Adalat conciliation or deep OTS (up to 70% haircut) actively pursued.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                The critical strategic inflection point occurs when the account transfers to SARB after 90 days. While local branches are evaluated on EMI collection targets, SARB desks are judged on bad-debt recoveries and NPA portfolio reduction. SARB officers hold delegated financial powers to evaluate compromise settlements based on commercial recovery benchmarks.
              </p>
            </section>

            {/* Section 3: Banker's Right of Set-Off & Burgundy Account Shield */}
            <section id="bankers-lien-setoff-protections" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>3. Section 171 Lien &amp; Burgundy Account Shield</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Banker&apos;s Right of Set-Off (Section 171) &amp; Safeguarding Liquid Assets
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers defaulting on an Axis Bank personal loan or Burgundy credit card must understand the legal power of the <strong>Banker&apos;s Right of General Lien and Set-Off</strong> under Section 171 of the Indian Contract Act, 1872. This statutory provision grants Axis Bank the contractual authority to appropriate funds from any savings account, current account, salary credit, or fixed deposit maintained with Axis Bank under the same PAN or Customer Identification File (CIF) to offset delinquent loan dues.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                High-net-worth borrowers and salaried professionals maintaining Burgundy banking relationships are particularly vulnerable to sudden automated ledger sweeps. When an equated monthly installment or card balance defaults, Axis Bank algorithms automatically freeze or sweep incoming funds to satisfy arrears without requiring prior judicial notice.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                However, this right of set-off has defined statutory boundaries. Axis Bank cannot legally debit or attach accounts maintained with other independent commercial banks (such as State Bank of India, HDFC Bank, or ICICI Bank) without obtaining a specific decree or attachment order from a competent Civil Court or Debt Recovery Tribunal (DRT). Borrowers facing default must immediately ring-fence their monthly subsistence by opening an operational salary or savings account with an independent bank where they hold no existing loan exposure.
              </p>
            </section>

            {/* Section 4: Statutory Legal Notices: Section 25 PSSA & Section 138 Defense */}
            <section id="statutory-notices-section-25-pssa" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>4. Section 25 PSSA &amp; Section 138 NI Act Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Defending Against Section 25 PSSA &amp; Section 138 Cheque Bounce Notices
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When monthly automated NACH mandates bounce or physical repayment cheques dishonour due to insufficient funds, Axis Bank&apos;s legal panel dispatches statutory legal notices under <strong>Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA)</strong> or <strong>Section 138 of the Negotiable Instruments Act, 1881</strong>. These statutory notices grant a mandatory 15-day window to regularize dues before criminal complaint proceedings can be instituted in a Magistrate Court.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Receiving a Section 25 PSSA or Section 138 legal notice requires immediate formal legal action rather than panic. Under the guidance of seasoned debt defense advocates, borrowers should serve an exhaustive legal reply within the 15-day statutory window. The reply establishes the genuine absence of fraudulent intent, sets out verifiable economic distress, challenges inflated penal charges and compounding interest calculations, and places on record a formal offer for compromise settlement.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Serving a structured legal reply effectively neutralizes the bank&apos;s litigation momentum. Because magistrate proceedings require substantial legal costs, dedicated counsel appearances, and multi-year courtroom timelines, Axis Bank legal officers routinely prefer channeling accounts with active legal replies into the Stressed Asset Resolution Branch or the National Lok Adalat for immediate compromise resolution.
              </p>
            </section>

            {/* Section 5: Visual Settlement Blueprint (Infographic Banner) */}
            <section id="infographic-resolution-blueprint" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>5. Visual Resolution Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Axis Bank Loan Settlement Roadmap &amp; Haircut Architecture
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                The visual framework below outlines Axis Bank&apos;s complete resolution pathway—from initial default and Special Mention Account classification to SARB committee evaluation, haircut determination, and final debt extinguishment with a zero-balance No Dues Certificate.
              </p>

              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg my-8 bg-slate-900">
                <img
                  src="/images/infographics/axis-bank-personal-loan-settlement.jpg"
                  alt="Axis Bank Personal Loan Settlement Process and OTS Haircut Matrix"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-slate-900/90 border-t border-slate-800 text-center">
                  <p className="text-xs text-slate-300 font-medium">
                    Figure 1.0: End-to-End Axis Bank Personal Loan Settlement Lifecycle, SARB Escalation Milestones &amp; Compromise Haircut Matrix.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: OTS Haircut Policy & NPV Valuation Formula */}
            <section id="axis-ots-policy-haircut-formula" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Percent className="w-4 h-4" />
                <span>6. OTS Haircut Policy &amp; NPV Valuation Formula</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Axis Bank&apos;s OTS Haircut Mechanics &amp; Recovery Valuation Formula
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under the Reserve Bank of India&apos;s Prudential Framework for Resolution of Stressed Assets and board-approved compromise settlement policies, Axis Bank evaluates One-Time Settlement offers using rigorous financial modeling. Unlike front-line recovery agents who claim that loans cannot be discounted, the Stressed Asset Resolution Branch evaluates every default through a <strong>Net Present Value (NPV) Recovery Valuation Benchmark</strong>.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When a loan transitions into an NPA, Axis Bank is legally mandated to set aside regulatory capital provisions. On unsecured credit lines, this provisioning burden reaches 25% within 12 months, 40%–50% within 24 months, and 100% for Loss Assets. If Axis Bank pursues civil recovery through Order 37 summary suits or DRT proceedings, it faces mandatory court fees (typically 1% to 3% of claim value), senior advocate retainers, and 4 to 7 years of procedural delays, with zero guarantee of asset discovery against an unsecured borrower.
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
                  Where C_t represents estimated recoveries, r is the discount rate, and deductions account for 3–5 years of court friction and capital locked in NPA provisions.
                </p>
              </div>

              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                Because an immediate cash settlement under OTS releases 100% of locked regulatory provisioning and eliminates legal overheads, the bank&apos;s Credit Committee routinely approves settlements offering <strong>40% to 65% debt waivers</strong> on principal debt, alongside 100% waiver of unaccrued interest, penal levies, and late fees.
              </p>
            </section>

            {/* Section 7: Step-by-Step Settlement Roadmap */}
            <section id="step-by-step-settlement-process" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>7. Step-by-Step SARB Settlement Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                5-Step Protocol for Negotiating Axis Bank Personal Loan Settlement
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Successfully executing a compromise settlement with Axis Bank requires adhering to a disciplined, legally backed five-step roadmap that bypasses third-party recovery agents and engages directly with authorized decision-makers:
              </p>

              <div className="space-y-4 my-6">
                <div className="flex gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">Dossier Compilation &amp; Insolvency Audit</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Assemble comprehensive documentation establishing genuine financial hardship, including termination letters, income tax returns showing collapsed revenue, hospital discharge summaries, or bank statements reflecting insolvency.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">Cease-and-Desist &amp; Agent Insulation</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Serve a formal legal notice under the RBI Master Directions on Recovery Agents to Axis Bank and its collection agencies, stopping unlawful contact with workplace colleagues, friends, and relatives.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">Formal OTS Submission to SARB Desks</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Bypass third-party recovery tele-callers and submit a formal compromise petition directly to the Stressed Asset Resolution Branch or Central Settlement Committee, offering a structured settlement tranche.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">Credit Committee Sanction &amp; Letter Verification</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Negotiate haircut terms before the Zonal Credit Committee to secure an authentic, stamped OTS Sanction Letter on official Axis Bank letterhead with explicit debt extinguishment terms.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm">
                    5
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">Remittance &amp; Mandatory ₹0 NDC Issuance</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Pay the agreed sum directly into the loan account via RTGS/NEFT, obtain an immediate stamped bank receipt, and secure the No Dues Certificate within the statutory 30-day window under RBI directives.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Sanction Letter Audit & Mandatory NDC Verification */}
            <section id="sanction-letter-audit-ndc-verification" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>8. Sanction Letter Audit &amp; ₹0 NDC Mandate</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Sanction Letter Forensics &amp; Mandatory ₹0 NDC Protocol
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The single most dangerous error in debt settlement is remitting money based on verbal promises or informal messages from collection personnel. Unauthorized agents frequently deceive borrowers by claiming that an ad-hoc token payment will settle the account, only for the funds to be absorbed into accumulated penal charges while the loan remains active and compounding.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Before releasing a single rupee, borrowers must verify that the <strong>Axis Bank OTS Sanction Letter</strong> satisfies five mandatory forensic criteria: (1) Printed on official Axis Bank letterhead with authentic bank insignia; (2) Issued with a unique reference number and signed by an authorized Assistant Vice President (AVP) or Zonal Credit Manager with employee code; (3) Explicitly lists the exact settlement amount, payment due dates, and specific loan account number; (4) Contains an unambiguous debt discharge clause confirming that upon payment, all residual balance is fully waived and legal proceedings withdrawn; (5) Mandates the issuance of a formal No Dues Certificate.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under <strong>RBI Circular RBI/2023-24/60</strong>, Axis Bank is legally obligated to release the final <strong>No Dues Certificate (NDC) / Loan Closure Letter</strong> and update credit bureau records within <strong>30 calendar days</strong> of receiving the agreed settlement amount. If the bank fails to issue the certificate within 30 days due to operational lapses, it must pay mandatory statutory compensation of <strong>₹5,000 per day of delay</strong> directly to the borrower.
              </p>
            </section>

            {/* Section 9: CIBIL Score Trajectory & Credit Rehabilitation */}
            <section id="cibil-impact-credit-rehabilitation" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>9. CIBIL Score Trajectory &amp; Credit Rehabilitation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                CIBIL Trajectory, RBI Cooling Period &amp; 24-Month Score Rebuilding
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Following full payment of the settlement amount, Axis Bank updates the account status across all four credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark) to <strong>&apos;Settled&apos;</strong> or <strong>&apos;Post-Write-off Settled&apos;</strong> with an outstanding balance of <strong>₹0</strong>. This closure results in an immediate CIBIL score drop of 75 to 150 points and triggers a mandatory 12-month cooling period under RBI directives before applying for fresh credit.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                While a &apos;Settled&apos; status reflects a past concession, it is infinitely superior to an open, compounding &apos;Default&apos; or &apos;Suit Filed&apos; tag that triggers ongoing legal notices. Once the debt is extinguished with a ₹0 balance, borrowers can rebuild their credit profile back to 750+ within 18 to 24 months through secured credit cards backed by fixed deposits, zero-default utility payments, and maintaining a credit utilization ratio below 30%.
              </p>

              {/* Comparative Resolution Avenues Matrix */}
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Resolution Avenue</th>
                      <th>Principal Haircut Range</th>
                      <th>Legal Finality</th>
                      <th>CIBIL Reporting Status</th>
                      <th>Resolution Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Direct SARB Settlement</td>
                      <td>40% – 65% Principal Haircut</td>
                      <td>Complete (Bank NDC Issued)</td>
                      <td>&apos;Settled&apos; / ₹0 Balance</td>
                      <td>3 to 6 Weeks</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">National Lok Adalat</td>
                      <td>45% – 65% Principal Haircut</td>
                      <td>Absolute (Civil Court Decree)</td>
                      <td>&apos;Settled&apos; / ₹0 Balance</td>
                      <td>Quarterly Lok Adalat Cycles</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Standard Restructuring</td>
                      <td>0% Haircut (Tenure Extension)</td>
                      <td>Conditional on EMI Service</td>
                      <td>&apos;Restructured&apos; / Active Debt</td>
                      <td>2 to 4 Weeks</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Civil Court Litigation</td>
                      <td>Uncertain (Judicial Discretion)</td>
                      <td>Subject to Multi-Year Appeal</td>
                      <td>&apos;Suit Filed&apos; / Open Default</td>
                      <td>4 to 7 Years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10 & CompanySection Component */}
            <section id="company-resolution-section" className="scroll-mt-24 mb-8">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4" />
                <span>10. SettleLoans Legal Defense &amp; Advisory</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Professional Legal Representation for Axis Bank Debt Settlement
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Navigating an Axis Bank loan default requires expert advocacy to shield your family from aggressive collection tactics, reply to statutory Section 25 PSSA and Section 138 notices, and negotiate directly with SARB credit committees for maximum debt relief. SettleLoans provides end-to-end legal and financial representation to help distressed borrowers achieve financial freedom.
              </p>
              <CompanySection />
            </section>

            {/* Section 11: Comprehensive FAQ Accordion */}
            <section id="faqs" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>11. Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                Frequently Asked Questions on Axis Bank Personal Loan Settlement
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

            {/* 5 Official Regulatory Links */}
            <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8">
              <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-[#1F5EFF]" />
                <span>Official Statutory &amp; Regulatory References</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between"
                >
                  <span className="font-semibold text-slate-800">RBI Master Directions on Compromise Settlements</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between"
                >
                  <span className="font-semibold text-slate-800">RBI Master Circular on Recovery Agents &amp; Conduct</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (2021)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between"
                >
                  <span className="font-semibold text-slate-800">National Legal Services Authority (Lok Adalat)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between"
                >
                  <span className="font-semibold text-slate-800">Payment &amp; Settlement Systems Act (Section 25)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Loan Settlement &amp; Legal Defense Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/hdfc-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  HDFC Loan Settlement
                </Link>
                <Link
                  href="/icici-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  ICICI Loan Settlement
                </Link>
                <Link
                  href="/sbi-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  SBI Personal Loan Settlement
                </Link>
                <Link
                  href="/bajaj-finance-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bajaj Finance Settlement
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Guide
                </Link>
                <Link
                  href="/can-bank-seize-property-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Property Seizure Protections
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Loan Default &amp; Jail Myths
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Settlement CIBIL Impact
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate Guide
                </Link>
                <Link
                  href="/credit-card-vs-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Card vs Loan Settlement
                </Link>
              </div>
            </section>
          </main>

          {/* Right Column: Author Bio, Emergency Advocate CTA, Trust Signals */}
          <aside className="w-full sticky top-24 space-y-6">
            
            {/* Author Bio Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-lg">
                  AJ
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Ashish Jhangra</div>
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Specialist in RBI compromise settlement frameworks, NPA provisioning forensics, and banking dispute litigation with over a decade of debt advisory experience.
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span>Verified Legal Author</span>
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Immediate Legal Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Facing Axis Bank Recovery Pressure?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Stop illegal harassment, reply to Section 25 notices, and negotiate a formal 40%–65% debt waiver directly with SARB.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Advocate Consultation
              </Link>
            </div>

            {/* Trust Signals Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Institutional Protections
              </div>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>100% RBI Fair Practices Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Confidential Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Verified Bank Letterhead Sanctions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Advocate-Led Conciliation</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
