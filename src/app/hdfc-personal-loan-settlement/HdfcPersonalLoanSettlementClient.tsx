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

export default function HdfcPersonalLoanSettlementClient() {
  const [activeId, setActiveId] = useState<string>('understanding-hdfc-loan-defaults');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'understanding-hdfc-loan-defaults', title: '1. Institutional Context & Risk Architecture' },
    { id: 'hdfc-npa-delinquency-timeline', title: '2. Delinquency Timeline & Asset Classification' },
    { id: 'hdfc-ots-policy-haircut-formula', title: '3. OTS Haircut Policies & Valuation Framework' },
    { id: 'recovery-agent-rules-anti-harassment', title: '4. Recovery Practices & RBI Anti-Harassment Law' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Resolution Blueprint' },
    { id: 'step-by-step-settlement-process', title: '6. Step-by-Step Settlement Roadmap' },
    { id: 'ots-vs-restructuring-vs-lok-adalat', title: '7. Comparative Resolution Avenues' },
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
      question: "What is the HDFC Bank personal loan settlement process and how does it work?",
      answer: (
        <p>
          The <strong>HDFC Bank personal loan settlement process</strong> is a formal legal compromise agreement between HDFC Bank Limited and a distressed borrower who is genuinely unable to repay their outstanding unsecured loan. Once the loan crosses 90 to 180 days of continuous non-payment and transitions into Non-Performing Asset (NPA) status (Substandard or Doubtful asset class), the borrower submits a formal One-Time Settlement (OTS) proposal supported by verifiable hardship proof such as job loss, medical catastrophe, or business failure. HDFC&apos;s internal Stressed Assets Resolution Group (SARB) or Competent Credit Committee evaluates the account&apos;s recovery potential using a Net Present Value (NPV) formula. If approved, HDFC issues an official stamped <strong>OTS Sanction Letter</strong>. Upon direct payment of the agreed settlement amount into the loan account, the bank extinguishes the residual debt, closes all legal proceedings, and issues a ₹0 <strong>No Dues Certificate (NDC)</strong>.
        </p>
      )
    },
    {
      question: "What percentage of debt waiver or haircut does HDFC Bank typically approve on personal loans?",
      answer: (
        <p>
          On unsecured personal loans, Jumbo loans, and credit cards, HDFC Bank typically approves debt haircuts ranging between <strong>40% and 65%</strong> of the total ledger balance. The exact waiver percentage depends on: (1) <em>Delinquency Aging:</em> Accounts in deep default (over 180 to 365 days) where HDFC has already absorbed 50% to 100% balance-sheet provisioning qualify for higher discounts; (2) <em>Hardship Verifiability:</em> Rock-solid documentation proving total loss of livelihood or severe medical disability; (3) <em>Direct Credit Committee Negotiations:</em> Eliminating third-party recovery commissions to negotiate directly with authorized bank managers. In virtually all approved settlements, 100% of penal interest, late fees, and bounce charges are completely waived alongside a substantial principal discount.
        </p>
      )
    },
    {
      question: "How strict are HDFC Bank recovery agents and what are your rights against harassment?",
      answer: (
        <p>
          HDFC Bank operates one of the banking industry&apos;s most organized collection mechanisms, utilizing internal tele-calling teams for early delinquencies (1–60 days) and outsourcing to third-party <strong>Debt Recovery Agencies (DRAs)</strong> once an account enters NPA territory (90+ days). While HDFC maintains formal codes of conduct, third-party agents often overstep legal boundaries by making repeated calls, visiting workplaces, and contacting relatives or friends. Under the <strong>RBI Master Directions on Recovery Agents (2022)</strong> and the <em>RBI Fair Practices Code</em>, borrowers have statutory rights: (a) Agents can only contact you between 08:00 AM and 07:00 PM; (b) Zero harassment, abusive language, or public shaming; (c) Strict prohibition against contacting references, colleagues, or neighbors; (d) Mandatory display of bank authorization letter and DRA identity card upon visit. Any breach can be immediately reported to HDFC&apos;s Principal Nodal Officer (PNO) and the RBI Ombudsman.
        </p>
      )
    },
    {
      question: "Can HDFC Bank file a criminal police case or have you arrested for personal loan default?",
      answer: (
        <p>
          <strong>No. Defaulting on an unsecured personal loan or credit card in India is strictly a civil dispute</strong> governed by the Law of Contract (Indian Contract Act, 1872). It is not a criminal offence, and the police have zero legal authority to register an FIR, arrest you, or summon you to a police station for genuine financial incapacity. However, if your repayment cheques bounce or an automated NACH/ECS mandate fails due to insufficient balance, HDFC Bank has the statutory right to initiate quasi-criminal proceedings under <strong>Section 138 of the Negotiable Instruments Act, 1881</strong>, or <strong>Section 25 of the Payment and Settlement Systems Act, 2007</strong>. These proceedings originate from a Magistrate Court, not a police station, and can be fully resolved through legal counsel or mutual settlement.
        </p>
      )
    },
    {
      question: "Can HDFC Bank freeze your savings account or offset funds for a personal loan default?",
      answer: (
        <p>
          Under the legal principle of <strong>Banker&apos;s Right of General Lien and Set-Off (Section 171 of the Indian Contract Act, 1872)</strong>, HDFC Bank is legally entitled to debit funds from any savings account, current account, or fixed deposit held with HDFC Bank under the same Customer Identification File (CIF) or PAN to offset delinquent loan dues. However, <strong>HDFC Bank cannot legally freeze, access, or deduct funds from accounts held with other independent banks</strong> (such as State Bank of India, ICICI Bank, Axis Bank, or Kotak Mahindra Bank) without a specific attachment decree issued by a competent Civil Court or Debt Recovery Tribunal (DRT).
        </p>
      )
    },
    {
      question: "What authority tier in HDFC Bank has the power to approve an OTS proposal?",
      answer: (
        <p>
          Under HDFC Bank&apos;s internal <strong>Delegation of Financial Powers (DoFP) matrix</strong>, field collection agents, tele-callers, and front-desk branch executives possess <em>zero authority</em> to grant loan waivers or sign compromise agreements. Minor interest waivers (up to ₹25,000–₹50,000) on standard accounts may be handled at the Branch Manager level. Substantive principal haircuts (40%–65%) on retail NPA portfolios are sanctioned exclusively by the <strong>Stressed Assets Resolution Group (SARB)</strong>, Regional Settlement Committees, or Zonal Credit Committees chaired by Assistant Vice Presidents (AVPs) and Senior Credit Officers.
        </p>
      )
    },
    {
      question: "How does an HDFC personal loan settlement impact your CIBIL score and credit profile?",
      answer: (
        <p>
          Following full remittance of the agreed OTS amount, HDFC Bank updates the status of the account with all four credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark) to <strong>&apos;Settled&apos;</strong> or <strong>&apos;Post-Write-off Settled&apos;</strong> with an outstanding balance of <strong>₹0</strong>. This closure results in an immediate CIBIL score reduction of approximately 75 to 150 points. Furthermore, under RBI compromise settlement directives, the borrower enters a mandatory 12-month cooling period before applying for fresh credit from regulated entities. However, a &apos;Settled&apos; status with ₹0 dues is infinitely better than an open, compounding default or &apos;Suit Filed&apos; tag, and a CIBIL score can be steadily rebuilt back to 750+ within 18 to 24 months through secured credit cards and flawless repayment discipline.
        </p>
      )
    },
    {
      question: "What non-negotiable security checks must be verified before paying settlement money to HDFC?",
      answer: (
        <p>
          Distressed borrowers must observe five strict safety rules: (1) <strong>Zero Verbal Agreements:</strong> Never pay a single rupee based on telephone calls, WhatsApp messages, or handwritten notes from collection executives; (2) <strong>Official Bank Letterhead:</strong> Demand an authentic OTS Sanction Letter printed on official HDFC Bank letterhead with bank seal and officer signature; (3) <strong>Direct Account Remittance:</strong> Pay only directly into your official HDFC Loan Account Number via RTGS/NEFT or account payee cheque—never into any third-party agency or individual account; (4) <strong>Full Debt Extinguishment Clause:</strong> Confirm the letter explicitly states that upon receipt of the settlement sum, the loan account stands fully discharged with no further liability; (5) <strong>Instant Acknowledgment:</strong> Secure an official bank stamped receipt immediately upon payment.
        </p>
      )
    },
    {
      question: "Can an HDFC Bank personal loan be settled during a National Lok Adalat session?",
      answer: (
        <p>
          <strong>Yes. HDFC Bank is one of the most active institutional participants in the National Lok Adalat</strong>, organized quarterly across India by District Legal Services Authorities (DLSA) under the <em>Legal Services Authorities Act, 1987</em>. During Lok Adalat sessions, HDFC Bank sends designated officers empowered with pre-approved settlement discount mandates (often 45% to 65% haircut). Settling via Lok Adalat offers substantial advantages: (a) The settlement award holds the status of a <strong>Civil Court Decree with absolute finality</strong>; (b) No appeal lies against the settlement in any court; (c) Any ongoing civil litigation or Section 138 complaint is formally disposed of on the spot.
        </p>
      )
    },
    {
      question: "How long does HDFC Bank take to issue the No Dues Certificate (NDC) after final payment?",
      answer: (
        <p>
          Pursuant to <strong>RBI Circular RBI/2023-24/60</strong> (<em>Release of Movable/Immovable Property Documents on Repayment/Settlement of Personal Loans</em>), HDFC Bank is legally obligated to issue a formal <strong>No Dues Certificate (NDC) / Loan Closure Certificate</strong> and update all credit bureaus within <strong>30 calendar days</strong> of receiving the final settlement tranche. If HDFC Bank fails to issue the certificate or complete the closure within 30 days due to internal delays, the bank is legally required to pay statutory compensation of <strong>₹5,000 for each day of delay</strong> directly to the borrower.
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
            <Landmark className="w-3.5 h-3.5" />
            <span>Bank-Specific Dispute Resolution • HDFC Bank</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            HDFC Personal Loan Settlement: <span className="text-[#3b82f6] md:text-[#60a5fa]">OTS Rules, Haircut Formula &amp; Legal Process</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Defaulted on an HDFC Bank personal loan, InstaLoan, or credit card? Learn HDFC&apos;s internal OTS provisioning rules, how to stop third-party recovery harassment, and how to negotiate up to a 60% legal debt waiver.
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
              <span>Negotiate HDFC Settlement</span>
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
                <span>HDFC Quick Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                HDFC accounts defaulted beyond 90 days enter NPA status. Direct negotiations with SARB bypass third-party agent markups, yielding 40%–65% debt waivers.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">
            
            {/* Section 1: Overview of HDFC Retail Loan Default Dynamics */}
            <section id="understanding-hdfc-loan-defaults" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. Institutional Context &amp; Risk Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Understanding HDFC Bank&apos;s Retail Loan Portfolio &amp; Default Dynamics
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                HDFC Bank Limited is the cornerstone of India&apos;s private retail credit market, managing an expansive loan book spanning unsecured personal loans, pre-approved InstaLoans, Jumbo loans linked to credit cards, and digital revolving credit facilities. Because these credit products are extended without any underlying physical security or mortgage backing, the bank safeguards its capital through algorithmic risk modeling, stringent credit bureau cutoffs, and automated National Automated Clearing House (NACH) mandate sweeps.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The institutional collection mechanism of HDFC Bank is structured for rapid escalation upon the first instance of payment failure. When an equated monthly installment fails to clear on the designated cycle date, automated ledger triggers immediately initiate compounding late fees, penal interest surcharges of 24% to 36% annually, and algorithmic risk flags that restrict existing credit card limits across the borrower&apos;s entire Customer Identification File (CIF).
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers facing severe personal disruptions—such as sudden corporate layoffs, catastrophic critical illness, business liquidation, or macroeconomic insolvencies—frequently experience an acute debt trap where compounding penal charges outpace their realistic debt servicing ability. Under Indian law and the governing Reserve Bank of India (RBI) directives, genuine financial failure is fundamentally recognized as a civil contractual dispute rather than a criminal dereliction.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong>Crucial Legal Distinction:</strong> The Reserve Bank of India strictly distinguishes between a <em>wilful defaulter</em>—defined as an individual or corporate debtor with proven liquid financial capacity who purposefully diverts sanctioned funds or refuses to service liabilities—and an <em>involuntary distressed borrower</em> whose repayment capacity has disintegrated due to legitimate economic catastrophe. Involuntary distressed borrowers are legally entitled to request compromise debt waivers under board-approved One-Time Settlement policies.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Delinquency Timeline: SMA-0 to NPA Classification */}
            <section id="hdfc-npa-delinquency-timeline" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>2. Delinquency Timeline &amp; Asset Classification</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                HDFC&apos;s Default Timeline: From SMA-0 to NPA Classification
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Understanding how HDFC Bank classifies delinquent retail debt under the Reserve Bank of India&apos;s Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP) is vital for timing a compromise settlement. An overdue personal loan progresses through five administrative and regulatory tiers, each dictating the bank&apos;s internal recovery posture and legal authority to grant principal concessions.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                During the initial Special Mention Account (SMA-0 and SMA-1) periods, covering the first 60 days of non-payment, the bank treats the overdue balance as an operational delinquency managed primarily by centralized tele-calling desks. By the time an account reaches SMA-2 status (61 to 90 days past due), pre-NPA warnings and loan recall intimations are dispatched, signaling the final opportunity for standard restructuring before the account is classified as a Non-Performing Asset.
              </p>

              {/* Comprehensive Stage Table */}
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Delinquency Stage</th>
                      <th>Overdue Days (DPD)</th>
                      <th>HDFC Internal Action</th>
                      <th>Legal Exposure</th>
                      <th>OTS Viability</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-0 (Early Warning)</td>
                      <td>1 – 30 Days</td>
                      <td>Automated SMS, WhatsApp reminders, soft IVR calls, late payment levy (₹500–₹1,000 + GST).</td>
                      <td>Zero legal risk. Contractual interest accumulation.</td>
                      <td>Very Low (Bank insists on regularizing EMI).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-1 (Mid Delinquency)</td>
                      <td>31 – 60 Days</td>
                      <td>Intensive tele-calling by HDFC internal collections team. Branch level loan follow-ups.</td>
                      <td>NACH bounce notifications. Credit score starts dropping.</td>
                      <td>Low (Restructuring or tenure extension may be offered).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-2 (Pre-NPA Alert)</td>
                      <td>61 – 90 Days</td>
                      <td>Final pre-NPA warnings. Demands for immediate lump-sum payment of overdue tranches.</td>
                      <td>Formal loan recall notices dispatched via registered post / email.</td>
                      <td>Moderate (Interest waiver discussions possible).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-amber-700">NPA (Substandard Asset)</td>
                      <td>91 – 180 Days</td>
                      <td>Account classified as Non-Performing Asset (NPA). Transferred to external Debt Recovery Agencies (DRAs).</td>
                      <td>Summons under Section 25 PSS Act (NACH) or Section 138 NI Act (Cheque bounce).</td>
                      <td><span className="text-emerald-700 font-bold">High (35%–50% Haircut achievable).</span></td>
                    </tr>
                    <tr>
                      <td className="font-bold text-red-700">Doubtful-1 (D1) / Loss Asset</td>
                      <td>181 – 365+ Days</td>
                      <td>Transferred to Stressed Assets Resolution Group (SARB). 100% balance-sheet provisioning absorbed.</td>
                      <td>Civil recovery suit / Arbitration clause invocation / Lok Adalat referral.</td>
                      <td><span className="text-emerald-700 font-bold">Maximum (50%–65% Haircut achievable).</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Once an account breaches the mandatory 90-day overdue threshold, HDFC Bank is legally required to classify the loan as an NPA and allocate capital provisioning against its balance sheet. In the Substandard and Doubtful-1 stages, the bank must set aside substantial provisioning reserves, creating a strong institutional incentive for credit officers to accept upfront cash settlements that immediately release locked capital back to operating profitability.
              </p>
            </section>

            {/* Section 3: HDFC OTS Policy & Haircut Formula */}
            <section id="hdfc-ots-policy-haircut-formula" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>3. OTS Haircut Policies &amp; Valuation Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                HDFC&apos;s Internal One-Time Settlement (OTS) &amp; Haircut Policy
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under the regulatory framework mandated by the <strong>Reserve Bank of India Master Direction on Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24)</strong>, HDFC Bank operates a board-approved Compromise Settlement Policy. Rather than relying on arbitrary discretion, the bank&apos;s Credit Committees evaluate settlement proposals through a standardized mathematical Net Present Value (NPV) recovery methodology.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The core principle of the NPV formula compares the immediate, guaranteed lump-sum settlement sum against the present discounted value of uncertain recoveries achieved through protracted civil litigation over four to seven years. Because unsecured retail personal loans carry no attached immovable collateral, litigating through civil courts or arbitration yields low recovery ratios after accounting for senior advocate retainers, court processing charges, and the time value of money.
              </p>

              <div className="bg-slate-900 text-white p-5 md:p-6 rounded-2xl my-6 shadow-md border border-slate-800">
                <h3 className="text-base font-bold text-blue-400 mb-2 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-[#1F5EFF]" />
                  <span>The Banking Net Present Value (NPV) Settlement Equation</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                  When evaluating an OTS request, the HDFC Credit Committee calculates whether the immediate cash offer exceeds the discounted recovery probability:
                </p>
                <div className="p-3.5 bg-slate-800 rounded-xl font-mono text-xs sm:text-sm text-emerald-400 border border-slate-700 mb-3">
                  NPV Recovery = (Estimated Judicial Realization - Legal &amp; Advocate Fees - Administrative Overhead) / (1 + Cost of Funds)^Time (Years)
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  When an account is in Doubtful or Loss Asset classification with full balance-sheet provisioning recognized, accepting a 40% to 55% settlement results in an immediate positive cash write-back to HDFC&apos;s profit statement, rendering compromise settlements financially superior to prolonged legal battles.
                </p>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The achievable haircut percentage is directly correlated with the verifiable severity of the borrower&apos;s hardship and the delinquency aging of the loan file. For unsecured personal loans and revolving credit card balances overdue beyond 180 days, HDFC Bank routinely waives 100% of accrued penal interest, late payment surcharges, and legal levies, alongside a 40% to 65% reduction on the underlying principal balance.
              </p>

              {/* Settlement Haircut Slabs Table */}
              <h3 className="text-lg font-bold text-slate-900 mb-3">Typical HDFC Settlement Haircut Slabs by Product &amp; Aging</h3>
              <div className="overflow-x-auto my-4">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Credit Facility Type</th>
                      <th>Overdue Aging</th>
                      <th>Penal Interest Waiver</th>
                      <th>Principal Haircut Slabs</th>
                      <th>Recommended Target Offer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">HDFC Unsecured Personal Loan</td>
                      <td>90 – 180 Days</td>
                      <td>100% Waived</td>
                      <td>25% – 40% Principal Waiver</td>
                      <td>Offer 35% of Total Book Dues</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">HDFC Unsecured Personal Loan</td>
                      <td>181 – 365+ Days (D1/Loss)</td>
                      <td>100% Waived</td>
                      <td>40% – 65% Principal Waiver</td>
                      <td>Offer 30% – 40% of Total Book Dues</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">HDFC Credit Card / Jumbo Loan</td>
                      <td>90 – 180 Days</td>
                      <td>100% Late &amp; Finance Charges</td>
                      <td>30% – 50% Principal Waiver</td>
                      <td>Offer 35% of Total Statement Dues</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">HDFC Credit Card / InstaLoan</td>
                      <td>181+ Days (Written Off)</td>
                      <td>100% All Penal Surcharges</td>
                      <td>50% – 70% Principal Waiver</td>
                      <td>Offer 25% – 35% of Total Statement Dues</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Recovery Agent Rules & RBI Rights */}
            <section id="recovery-agent-rules-anti-harassment" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>4. Recovery Practices &amp; RBI Anti-Harassment Law</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                HDFC Recovery Agent Practices, Harassment Defense &amp; RBI Compliance
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When an HDFC Bank retail loan breaches 90 days of non-payment, the account is transferred from internal tele-calling executives to outsourced Debt Recovery Agencies (DRAs). Because external recovery personnel operate on recovery-linked commission incentives, aggressive and unauthorized tactics frequently occur, including relentless calling, unscheduled residential visits, and intimidating communications directed at relatives or employers.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The Reserve Bank of India has established comprehensive statutory regulations through its Master Direction on Recovery Agents and the Fair Practices Code. These binding guidelines strictly prohibit collection agents from contacting borrowers before 08:00 AM or after 07:00 PM, sharing debt details with non-guarantor family members, visiting workplaces to cause professional embarrassment, or using abusive and threatening language.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers must understand their legal remedies when dealing with overreaching collection agents. Every borrower holds the statutory right to demand the agent&apos;s physical Indian Institute of Banking &amp; Finance (IIBF) DRA Certification and an official letter of authority issued by HDFC Bank. Any non-compliance can be immediately documented with call recordings and escalated directly to HDFC&apos;s Principal Nodal Officer and the Reserve Bank Integrated Ombudsman Scheme for swift corrective action and penalty proceedings against the lending institution.
              </p>
            </section>

            {/* Section 5: High-Impact Resolution Blueprint (Infographic Banner) */}
            <section id="infographic-resolution-blueprint" className="scroll-mt-24 mb-12">
              {/* Compact High-Impact Infographic Banner */}
              <div className="bg-white border-2 border-blue-200 rounded-3xl overflow-hidden shadow-lg my-10 text-slate-800">
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
                        HDFC Bank Personal Loan Settlement Process &amp; Haircut Blueprint
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/hdfc-personal-loan-settlement.jpg"
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
                      src="/images/infographics/hdfc-personal-loan-settlement.jpg"
                      alt="HDFC Bank Personal Loan Settlement Process Summary Infographic"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Takeaway:</strong> Settle directly with HDFC Credit Committee / SARB with verified hardship for 40%–65% debt waiver.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6: Step-by-Step Settlement Process */}
            <section id="step-by-step-settlement-process" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>5. Execution Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Step-by-Step Guide: How to Initiate &amp; Negotiate Settlement with HDFC Bank
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Navigating a high-stakes compromise settlement with HDFC Bank requires strategic legal coordination. Following this tested sequential roadmap ensures optimal financial relief while safeguarding your legal position at every milestone:
              </p>

              <div className="space-y-6">
                {/* Phase 1 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">1</span>
                    Comprehensive Financial Audit &amp; Hardship Evidence Compilation
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-3">
                    HDFC Bank&apos;s Credit Committee will not consider informal or unsupported requests for debt forgiveness. You must assemble an indisputable evidentiary dossier establishing legitimate income destruction. This dossier includes corporate severance notifications, termination letters, medical diagnosis certificates, catastrophic hospitalization invoices, or audited financial statements documenting complete commercial insolvency.
                  </p>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Coupling this with six months of bank statements illustrating negligible cash inflows clearly demonstrates that default is involuntary, shielding the borrower from wilful default tagging.
                  </p>
                </div>

                {/* Phase 2 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">2</span>
                    Neutralizing External Agencies &amp; Establishing Direct Banking Jurisdiction
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-3">
                    A frequent strategic mistake made by distressed borrowers is attempting to negotiate settlement numbers with outsourced collection agents. These representatives lack legal authority to issue debt waivers and often promise verbal discounts to collect partial payments that are subsequently applied to overdue interest.
                  </p>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Borrowers must immediately issue a formal communication directing all discussions to the Branch Manager and the Stressed Assets Resolution Group (SARB), effectively eliminating third-party commission markups from the negotiation table.
                  </p>
                </div>

                {/* Phase 3 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">3</span>
                    Submitting the Formal Compromise Settlement Proposal
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-3">
                    The formal OTS application must be formally addressed to the Competent Credit Authority, citing the Reserve Bank of India Master Direction on Compromise Settlements. The application should provide a detailed breakdown of historical repayments to establish good faith, articulate the specific hardship event, and present an opening settlement offer.
                  </p>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Strategically anchoring the opening offer at 25% to 35% of the total outstanding ledger balance creates necessary bargaining room to close negotiations within the target 40% to 55% settlement band.
                  </p>
                </div>

                {/* Phase 4 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">4</span>
                    Managing Counter-Demands &amp; Credit Committee Negotiations
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-3">
                    Upon receiving the proposal, HDFC&apos;s settlement desk will typically present a conservative counter-demand requiring 70% to 80% of book dues. This initial response is a standard institutional probe to test the debtor&apos;s liquidity.
                  </p>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    By maintaining legal firmity, reiterating the total absence of disposable income, and highlighting that the proposed settlement capital is being provided by third-party relatives exclusively for a one-time final discharge, the committee is guided toward realistic haircut approvals.
                  </p>
                </div>

                {/* Phase 5 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">5</span>
                    Rigorous Audit of the Stamped OTS Sanction Letter
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-3">
                    Before releasing a single rupee, the borrower must receive and meticulously audit an official OTS Sanction Letter printed on HDFC Bank letterhead. The document must explicitly stipulate the exact compromise figure, precise remittance deadlines, and an unconditional covenant confirming that all residual principal, penal interest, and incidental legal fees will be permanently extinguished upon payment.
                  </p>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    The sanction letter must also include an explicit undertaking from HDFC Bank to withdraw any pending litigation or statutory cheque bounce proceedings.
                  </p>
                </div>

                {/* Phase 6 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">6</span>
                    Direct Account Remittance &amp; Securing the ₹0 No Dues Certificate
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-3">
                    The sanctioned settlement amount must be remitted strictly through verifiable banking channels (RTGS, NEFT, or Account Payee draft) directly into the designated HDFC loan account number. Third-party intermediary or collection agency accounts must never be utilized under any circumstances.
                  </p>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Under Reserve Bank of India Circular RBI/2023-24/60, HDFC Bank is legally mandated to complete full account closure and issue an official No Dues Certificate (NDC) within 30 calendar days of receiving full payment.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: OTS vs Restructuring vs Lok Adalat */}
            <section id="ots-vs-restructuring-vs-lok-adalat" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4" />
                <span>6. Comparative Resolution Avenues</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                HDFC OTS vs Loan Restructuring vs National Lok Adalat
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Distressed borrowers often face the dilemma of choosing between a One-Time Settlement, formal loan restructuring, or participating in judicial conciliation through the National Lok Adalat. Each mechanism carries distinct legal consequences, financial requirements, and credit bureau reporting outcomes that must be evaluated against the debtor&apos;s realistic earning trajectory.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Loan restructuring is designed primarily for borrowers experiencing temporary liquidity disruptions who retain reliable future earning capacity. Under restructuring, HDFC Bank extends the overall repayment tenure or converts accumulated unpaid interest into a funded interest term loan. However, restructuring provides zero reduction on the underlying principal debt, and the total lifetime interest burden frequently increases significantly.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Conversely, the National Lok Adalat represents a statutory dispute resolution forum organized under the Legal Services Authorities Act, 1987. During Lok Adalat sessions, HDFC Bank empowers legal officers with pre-approved settlement discount mandates (often 45% to 65% haircuts) to dispose of non-performing retail portfolios. An award passed by the Lok Adalat holds the status of a binding Civil Court decree with absolute finality, prohibiting any future appeal or claim by the lender.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Key Parameter</th>
                      <th>One-Time Settlement (OTS)</th>
                      <th>Loan Restructuring</th>
                      <th>National Lok Adalat</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Core Objective</td>
                      <td>Permanent debt cancellation via negotiated lump-sum payment.</td>
                      <td>Modifying repayment tenure / EMI to keep account standard.</td>
                      <td>Judicial conciliation and settlement before court panel.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Principal Haircut</td>
                      <td><strong>40% – 65% Principal Waiver</strong> achievable.</td>
                      <td><strong>0% Principal Waiver</strong> (Full principal remains payable).</td>
                      <td><strong>45% – 65% Haircut</strong> on standardized bank slabs.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Upfront Capital Needed</td>
                      <td>Moderate to High (Lump-sum within 15–30 days).</td>
                      <td>Low (Resumes regular monthly installments).</td>
                      <td>Moderate (Payable in 1 to 3 judicial tranches).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Legal Status</td>
                      <td>Private contract under RBI Compromise Directives.</td>
                      <td>Contract amendment under regular banking norms.</td>
                      <td><strong>Binding Civil Court Decree</strong> with zero appeal right.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">CIBIL Reporting</td>
                      <td>Reported as &apos;Settled&apos; with ₹0 balance.</td>
                      <td>Reported as &apos;Restructured&apos;.</td>
                      <td>Reported as &apos;Settled via Lok Adalat&apos; with ₹0 balance.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Best Suited For</td>
                      <td>Borrowers with permanent income loss / severe hardship.</td>
                      <td>Borrowers facing temporary cash crunch with stable future jobs.</td>
                      <td>Borrowers already facing Section 138/25 legal notices.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 8: Sanction Letter Audit & ₹0 NDC Rules */}
            <section id="sanction-letter-audit-ndc-verification" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>7. Sanction Letter Audit &amp; ₹0 NDC Mandate</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Critical Checklist for HDFC Settlement Sanction Letters &amp; ₹0 NDC Verification
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                A recurring hazard in retail debt recovery involves rogue collection agents issuing fraudulent or unauthorized settlement letters to induce token payments. If a payment is remitted against an invalid letter, HDFC Bank will credit the sum as a standard part-payment toward accumulated penal charges, leaving the loan open and litigation active.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                To guarantee complete legal validity, every borrower must verify that the sanction letter is printed on official HDFC Bank stationery featuring the bank&apos;s corporate watermark, the physical address of the sanctioning retail asset branch, and the explicit physical or digital signature of an authorized officer accompanied by their official employee code.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Crucially, the body of the letter must contain unambiguous legal covenants stating that the agreed settlement sum constitutes full and final satisfaction of all outstanding claims, permanently extinguishing all residual liabilities. Furthermore, pursuant to <strong>RBI Circular RBI/2023-24/60</strong>, HDFC Bank is legally required to release all closure certificates and property documents within 30 calendar days, with statutory penalties of ₹5,000 per day payable to the borrower for operational delays attributable to the bank.
              </p>
            </section>

            {/* Section 9: CIBIL Score Impact & Credit Rehabilitation */}
            <section id="cibil-impact-credit-rehabilitation" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>8. CIBIL Score Trajectory &amp; Rehabilitation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Impact on CIBIL Score &amp; Long-Term Credit Rehabilitation Post-HDFC Settlement
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                A common concern among distressed borrowers is the long-term credit bureau consequence of executing a One-Time Settlement. Following receipt of the final settlement tranche, HDFC Bank is legally obligated to update all four authorized credit bureaus—TransUnion CIBIL, Experian, Equifax, and CRIF High Mark—modifying the account status from &apos;Default&apos; or &apos;Suit Filed&apos; to <strong>&apos;Settled&apos;</strong> or <strong>&apos;Post-Write-off Settled&apos;</strong> with an outstanding balance of exactly <strong>₹0</strong>.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                While a &apos;Settled&apos; remark lowers the borrower&apos;s CIBIL score by approximately 75 to 150 points and triggers a mandatory 12-month cooling-off period under RBI guidelines before fresh unsecured credit can be obtained, it permanently halts the month-on-month degradation caused by compounding unpaid Days Past Due (DPD) counters. Eliminating active default tags is the foundational first step toward regaining financial freedom.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Rebuilding a credit profile post-settlement is a systematic process achievable within 18 to 24 months. By obtaining a secured credit card backed by a modest fixed deposit, maintaining credit utilization strictly below 25%, and servicing utility bills with flawless punctuality, borrowers systematically build fresh positive payment history that steadily elevates their credit score back to the 750+ threshold.
              </p>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Professional Negotiation Services */}
            <section id="company-resolution-section" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>9. Legal Defense &amp; Representation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Why Distressed HDFC Borrowers Choose SettleLoans
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Negotiating an equitable compromise settlement with a major financial institution like HDFC Bank requires experienced banking litigation counsel. The legal and financial strategists at SettleLoans provide comprehensive defense, halting third-party harassment through formal cease-and-desist notices, auditing NPA provisioning allocations, and directly engaging HDFC&apos;s Zonal Settlement Committees to secure the maximum legally permissible debt waiver.
              </p>

              {/* Placement of Reusable CompanySection */}
              <div className="my-8">
                <CompanySection />
              </div>
            </section>

            {/* Section 11: Frequently Asked Questions (FAQ Accordion) */}
            <section id="faqs" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>10. Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                Frequently Asked Questions About HDFC Personal Loan Settlement
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

            {/* Regulatory References & Official Sources Strip */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-[#1F5EFF]" />
                Official Regulatory References &amp; Statutory Circulars
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
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>RBI Master Circular:</strong> Fair Practices Code for Regulated Lending Entities &amp; Engagement of Recovery Agents
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.hdfcbank.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>HDFC Bank Limited:</strong> Grievance Redressal Policy &amp; Principal Nodal Officer (PNO) Escalation Matrix
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
                Explore Related Banking &amp; Debt Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2.5">
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Bank One-Time Settlement (OTS) Policy
                </Link>
                <Link
                  href="/personal-loan-settlement-letter-format"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement Letter Format
                </Link>
                <Link
                  href="/personal-loan-settlement-percentage"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement Percentage
                </Link>
                <Link
                  href="/how-to-settle-credit-card-debt"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  How to Settle Credit Card Debt
                </Link>
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Lok Adalat Notice for Personal Loan
                </Link>
                <Link
                  href="/personal-loan-legal-notice"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Legal Notice Defense
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement CIBIL Impact
                </Link>
                <Link
                  href="/section-138-cheque-bounce-loan-default"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Section 138 Cheque Bounce Defense
                </Link>
                <Link
                  href="/recovery-agent-visiting-workplace-office"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Recovery Agent Workplace Visit Rules
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
                Ashish has led over 1,200+ successful bank compromise negotiations across HDFC Bank, SBI, ICICI, and Axis Bank. He specializes in banking NPA haircuts, SARB conciliation, and borrower legal defense under RBI Master Directions.
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
                <span>HDFC Dispute Resolution</span>
              </div>
              <h3 className="text-xl font-black mb-3 leading-tight">
                Struggling with HDFC Loan Default?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Stop agent harassment today. Let our seasoned advocates audit your default bucket, draft your formal OTS proposal, and secure an official stamped HDFC Bank settlement letter.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white hover:bg-slate-100 text-[#1F5EFF] font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 shadow"
              >
                Talk to a Settlement Advocate
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
                    <strong>Direct Bank Negotiations:</strong> We bypass third-party collection agencies to represent your case before HDFC SARB and Credit Committees.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Shield:</strong> Immediate legal cease-and-desist notices to stop workplace visits and unauthorized reference calls under RBI rules.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Stamped Verification:</strong> Every settlement is verified through a formal HDFC letterhead sanction before any payment is remitted.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed ₹0 NDC:</strong> Complete end-to-end tracking until your formal No Dues Certificate is delivered and CIBIL status is updated.
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
