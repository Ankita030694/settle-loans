'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';
import {
  ShieldCheck,
  TrendingUp,
  Clock,
  ArrowRight,
  ChevronDown,
  Calendar,
  PhoneCall,
  ExternalLink,
  Building2,
  Landmark,
  Check,
  BookOpen,
  ShieldAlert,
  Scale,
  HelpCircle,
  Calculator,
  Layers,
  Gavel,
  FileCheck,
  UserCheck,
  AlertCircle,
  Banknote,
  Award,
  CheckCircle2,
  AlertTriangle
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

export default function TataCapitalPersonalLoanSettlementClient() {
  const [activeId, setActiveId] = useState<string>('understanding-tata-capital-defaults');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'understanding-tata-capital-defaults', title: '1. Corporate NBFC Architecture & Risk Engine' },
    { id: 'tata-capital-delinquency-timeline-npa', title: '2. Delinquency Timeline & NPA Stages' },
    { id: 'stopping-tata-capital-bounce-charges-nach', title: '3. Halting NACH Bounce Charges & Penal Levies' },
    { id: 'tata-capital-ots-haircut-policy-npv', title: '4. OTS Haircut Policies & NPV Valuation' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Resolution Blueprint' },
    { id: 'recovery-agent-rules-anti-harassment', title: '6. Third-Party Recovery Defense & RBI Rules' },
    { id: 'step-by-step-tata-capital-settlement', title: '7. Step-by-Step NBFC Settlement Roadmap' },
    { id: 'section-25-pssa-lok-adalat-defense', title: '8. Section 25 Notices, Arbitration & Lok Adalat' },
    { id: 'sanction-letter-audit-ndc-verification', title: '9. Sanction Letter Audit & ₹0 NDC Mandate' },
    { id: 'cibil-impact-credit-rehabilitation', title: '10. CIBIL Score Trajectory & Rehabilitation' },
    { id: 'company-resolution-section', title: '11. SettleLoans Legal Defense & Representation' },
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
      question: "What is the Tata Capital personal loan settlement process and how does an NBFC compromise work?",
      answer: (
        <p>
          The <strong>Tata Capital personal loan settlement process</strong> is a structured legal and financial compromise executed under Reserve Bank of India Master Directions on Compromise Settlements. When an unsecured personal loan defaults beyond 90 days into Non-Performing Asset (NPA) status, the borrower submits a comprehensive hardship petition to Tata Capital&apos;s Stressed Assets Committee. Upon evaluating the financial insolvency against the Net Present Value (NPV) of recovery, Tata Capital issues an official <strong>OTS Sanction Letter</strong>. Paying the agreed discounted amount directly into the designated loan account extinguishes all remaining book dues, closes pending legal notices, and entitles the borrower to a formal ₹0 <strong>No Dues Certificate (NDC)</strong>.
        </p>
      )
    },
    {
      question: "How can borrowers stop Tata Capital NACH bounce penalties and repeated automated debit attempts?",
      answer: (
        <p>
          Tata Capital frequently executes multiple automated electronic NACH presentations within a single billing cycle, compounding return fees. Borrowers can stop this financial leakage by: (1) Instructing their destination bank in writing or via net banking to revoke or suspend the e-NACH mandate under National Payments Corporation of India (NPCI) procedural guidelines; (2) Sending a formal hardship representation to Tata Capital requesting an immediate pause on electronic debit sweeps; (3) Insisting upon a 100% waiver of all accumulated bounce charges, late payment penalties, and penal interest under RBI fair lending practice rules during One-Time Settlement negotiations.
        </p>
      )
    },
    {
      question: "What percentage of debt waiver or haircut can you realistically negotiate on a Tata Capital personal loan?",
      answer: (
        <p>
          On unsecured retail personal loans, Tata Capital typically sanctions debt waivers ranging between <strong>40% and 60%</strong> of total book dues. The achievable haircut depends directly on loan aging, delinquency bucket, and balance-sheet provisioning. Accounts overdue beyond 180 to 365 days (Doubtful or Loss Asset status) qualify for maximum principal discounts (50% to 60%), along with a complete 100% cancellation of all accrued penal interest and mandate bounce penalties.
        </p>
      )
    },
    {
      question: "How do you handle aggressive Tata Capital recovery agents and stop home or workplace harassment?",
      answer: (
        <p>
          Under the <strong>RBI Master Directions on Recovery Agents</strong> and NBFC Fair Practices Code, borrowers are safeguarded by enforceable statutory rules: (a) Agents can only contact borrowers between 08:00 AM and 07:00 PM; (b) Reaching out to employers, workplace colleagues, or non-guarantor family members is strictly illegal; (c) Abusive language, intimidation, and unannounced visits without proper identification are prohibited. To stop harassment, serve an immediate cease-and-desist notice to the Tata Capital Principal Nodal Officer and file an online complaint on the RBI Integrated Ombudsman portal.
        </p>
      )
    },
    {
      question: "Can Tata Capital file a police FIR or arrest you for defaulting on a personal loan?",
      answer: (
        <p>
          <strong>No. Defaulting on an unsecured personal loan is strictly a civil contractual dispute</strong> governed by the Indian Contract Act, 1872. Police authorities have no statutory power to register an FIR, initiate criminal investigations, or make arrests for genuine financial insolvency. While Tata Capital may issue demand notices under Section 25 of the Payment and Settlement Systems Act (PSSA) for bounced NACH mandates, these are compoundable quasi-criminal court matters handled through advocate representation and compromise settlements.
        </p>
      )
    },
    {
      question: "What is a Section 25 PSSA legal notice sent by Tata Capital and how should you respond?",
      answer: (
        <p>
          A <strong>Section 25 PSSA notice</strong> is a statutory 15-day demand notice served when an electronic NACH auto-debit dishonours due to insufficient funds. It is not an arrest warrant or court decree. Distressed borrowers should promptly instruct legal counsel to serve a structured reply detailing involuntary financial hardship, challenging unauthorized multiple mandate presentations, and opening formal channels for a compromise One-Time Settlement.
        </p>
      )
    },
    {
      question: "What internal authority within Tata Capital approves a One-Time Settlement (OTS)?",
      answer: (
        <p>
          Under Tata Capital&apos;s Delegation of Financial Powers governance framework, third-party tele-callers and field collection agents have zero legal authority to sanction loan waivers. Substantive debt haircuts (40% to 60%) require formal approval by the <strong>Zonal Stressed Assets Desk, Regional Credit Committee, or Chief Risk Officer division</strong>, documented through an authentic stamped sanction letter issued from corporate headquarters.
        </p>
      )
    },
    {
      question: "How does settling a Tata Capital personal loan impact your CIBIL score and credit report?",
      answer: (
        <p>
          Upon receiving the agreed settlement amount, Tata Capital reports the account to credit information companies (CIBIL, Experian, Equifax, CRIF High Mark) as <strong>&apos;Settled&apos;</strong> or <strong>&apos;Post-Write-off Settled&apos;</strong> with an outstanding balance of <strong>₹0</strong>. While this causes an initial credit score drop of 75 to 150 points and a 12-month cooling window for fresh unsecured loans, it permanently halts compounding Days Past Due (DPD) marks and legal flags, allowing borrowers to rebuild their score to 750+ within 18 to 24 months.
        </p>
      )
    },
    {
      question: "What precautions are essential before remitting settlement funds to Tata Capital?",
      answer: (
        <p>
          Borrowers must follow five vital security rules: (1) Never remit funds on verbal or WhatsApp assurances; (2) Demand an authentic OTS Sanction Letter printed on Tata Capital Limited letterhead containing the Corporate Identification Number (CIN), officer employee code, and branch seal; (3) Verify that the letter explicitly includes a full debt discharge clause; (4) Remit payments strictly into your official Tata Capital loan account via RTGS/NEFT; (5) Retain bank transfer receipts to claim the formal No Dues Certificate.
        </p>
      )
    },
    {
      question: "How long does Tata Capital take to issue the No Dues Certificate (NDC) after settlement?",
      answer: (
        <p>
          Under <strong>RBI Circular RBI/2023-24/60</strong>, Tata Capital is legally required to issue a formal No Dues Certificate (NDC) / Loan Closure Certificate and update credit bureau databases within <strong>30 calendar days</strong> of receiving the agreed settlement amount. If the lender fails to deliver the closure certificate within 30 days without lawful justification, it is statutorily liable to pay mandatory compensation of <strong>₹5,000 for each day of delay</strong> directly to the borrower.
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
            <span>Corporate NBFC Dispute Resolution • Tata Capital</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            Tata Capital Personal Loan Settlement: <span className="text-[#3b82f6] md:text-[#60a5fa]">OTS Rules, Bounce Charges &amp; Legal Rights (2026)</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Struggling with defaulted Tata Capital personal loan EMIs, repeated NACH bounce penalties, or relentless collection calls? Discover how to halt recovery harassment, invoke RBI compromise settlement frameworks, and negotiate an authorized 40% to 60% debt waiver.
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
              <span>RBI NBFC Master Direction Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Negotiate Tata Capital Settlement</span>
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
                <span>Tata Capital Quick Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Tata Capital accounts past 90 days default enter NPA status under Ind AS 109. Direct legal escalation to Zonal Stressed Assets Desks eliminates agency markups, unlocking 40%–60% principal waivers with 100% bounce charge cancellation.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">

            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 border border-blue-200 rounded-2xl p-6 mb-8 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-base mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Tata Capital Loan Settlement</span>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Compromise Rights:</strong> Defaulting on an unsecured Tata Capital loan is strictly a civil dispute. Borrowers hold statutory rights under RBI Master Directions to request a compromise One-Time Settlement (OTS).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Eliminating Bounce Penalties:</strong> Revoking e-NACH mandates under NPCI rules stops repeated debit return fees. Legal representation demands 100% waiver of all accumulated bounce charges and penal interest.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Realistic 40%–60% Haircut:</strong> Once an account enters NPA (90+ DPD) or Doubtful Asset status, Tata Capital balances its NPV recovery math, sanctioning substantial principal debt waivers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory ₹0 NDC Guarantee:</strong> Under RBI Circular RBI/2023-24/60, Tata Capital must deliver a No Dues Certificate and update credit bureaus within 30 days of payment, subject to a ₹5,000/day statutory penalty for non-compliance.</span>
                </li>
              </ul>
            </div>
            
            {/* Section 1: Corporate NBFC Architecture & Risk Engine */}
            <section id="understanding-tata-capital-defaults" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. Corporate NBFC Architecture &amp; Recovery Infrastructure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Understanding Tata Capital&apos;s Algorithmic Credit &amp; Recovery Infrastructure
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Tata Capital Limited (alongside Tata Capital Financial Services Limited) represents one of India&apos;s premier systemically important non-banking financial companies (NBFC-ICC). Backed by the institutional pedigree of the Tata Group, the lender operates extensive retail portfolios encompassing unsecured personal loans, business installment credit, and digital consumer durables loans. Unlike traditional public sector banks that rely on branch-level human discretion, Tata Capital utilizes a centralized, algorithmic risk engine engineered to detect default early and enforce swift automated recovery.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When an equated monthly installment (EMI) misses its debit cycle, Tata Capital&apos;s recovery architecture immediately initiates high-frequency automated actions: automated interactive voice response (IVR) calls, intensive SMS notifications, and repeated electronic National Automated Clearing House (NACH) mandate presentations. Concurrently, internal bounce fees ranging from ₹450 to ₹1,000 plus applicable Goods and Services Tax (GST) are debited alongside penal interest charges of 24% to 36% per annum.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                For borrowers suffering legitimate, involuntary financial distress—such as corporate downsizing, medical emergencies, business revenue shrinkage, or economic insolvency—these compounded penalties rapidly inflate ledger dues beyond manageable limits. Defaulting on an unsecured personal loan is fundamentally a civil breach of contract under the Indian Contract Act, 1872, rather than a criminal offense. Regulated by Reserve Bank of India (RBI) directives, distressed borrowers have clear statutory avenues to demand an end to collection harassment and negotiate an official compromise One-Time Settlement (OTS).
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong>Statutory Principle:</strong> Under Reserve Bank of India Master Directions on Compromise Settlements, regulated NBFCs must maintain transparent, board-approved OTS policies. Lenders cannot treat non-wilful, insolvent borrowers as deliberate defaulters and must consider genuine compromise proposals to maximize economic recovery.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Delinquency Timeline & NPA Stages */}
            <section id="tata-capital-delinquency-timeline-npa" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>2. Delinquency Timeline &amp; NPA Stages</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Tata Capital Delinquency Lifecycle: From DPD 1-30 to Non-Performing Asset (NPA)
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under the Reserve Bank of India&apos;s Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP) and Expected Credit Loss (ECL) frameworks under Indian Accounting Standard 109 (Ind AS 109), Tata Capital systematically categorizes retail delinquencies into specific Days Past Due (DPD) buckets. Understanding these institutional aging milestones is essential for timing settlement negotiations and securing maximum debt write-offs.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                During the initial 60 days of delinquency (Buckets 1 and 2), Tata Capital&apos;s front-end recovery team focuses exclusively on regularizing the overdue installments. However, once an account crosses the critical 90-day threshold without payment, the loan is formally classified as a Non-Performing Asset (NPA). At this stage, Tata Capital must allocate mandatory balance-sheet capital provisioning, shifting its institutional objective from regular collection toward bad-debt recovery and compromise resolution.
              </p>

              {/* Comprehensive Stage Table */}
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Delinquency Stage</th>
                      <th>Overdue Days (DPD)</th>
                      <th>Tata Capital Recovery Actions</th>
                      <th>Legal &amp; Judicial Exposure</th>
                      <th>Settlement Haircut Potential</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Bucket 1 (Early Delinquency)</td>
                      <td>1 – 30 Days</td>
                      <td>Automated IVR calls, daily payment reminder SMS, repeated NACH mandate sweeps.</td>
                      <td>Zero litigation exposure; initial bureau DPD reporting begins.</td>
                      <td>Negligible (NBFC insists on full overdue installment payment).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Bucket 2 (Mid Delinquency)</td>
                      <td>31 – 60 Days</td>
                      <td>Intensive tele-calling, outsourced agency assignment, loan acceleration notices.</td>
                      <td>Statutory warning notices issued; CIBIL score begins sharp decline.</td>
                      <td>Low (Tenure restructuring or EMI deferral considered).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Bucket 3 (Pre-NPA Escalation)</td>
                      <td>61 – 90 Days</td>
                      <td>Field visits by recovery representatives, formal loan recall demand letters.</td>
                      <td>Section 25 PSSA / Section 138 NI Act statutory legal demand notices.</td>
                      <td>Moderate (Discussions for penal fee waivers can commence).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-amber-700">NPA (Substandard Asset)</td>
                      <td>91 – 180 Days</td>
                      <td>Transferred to Zonal Stressed Assets Desk; mandatory Ind AS 109 provisioning.</td>
                      <td>Magistrate Court summons under Sec 25 PSSA; conciliation summons.</td>
                      <td><span className="text-emerald-700 font-bold">High (35%–50% Haircut achievable).</span></td>
                    </tr>
                    <tr>
                      <td className="font-bold text-red-700">Doubtful / Loss Asset</td>
                      <td>181 – 365+ Days</td>
                      <td>High balance-sheet provisioning absorbed; internal technical write-off evaluation.</td>
                      <td>Civil summary suits (Order 37 CPC), Lok Adalat referrals.</td>
                      <td><span className="text-emerald-700 font-bold">Maximum (50%–60% Haircut achievable).</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Once an unsecured personal loan is classified as a Doubtful Asset or subjected to technical write-off, Tata Capital has already absorbed the loss on its quarterly profit-and-loss statement. Under such circumstances, an upfront lump-sum settlement delivers an immediate net cash write-back to the NBFC&apos;s operating profit, providing senior risk committees with the financial justification to sanction significant principal waivers.
              </p>
            </section>

            {/* Section 3: Halting NACH Bounce Charges & Penal Levies */}
            <section id="stopping-tata-capital-bounce-charges-nach" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Banknote className="w-4 h-4" />
                <span>3. Stopping NACH Bounce Charges &amp; Penal Fees</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                How to Stop Tata Capital Bounce Charges &amp; Halt Repeated NACH Presentations
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                One of the most severe financial burdens faced by borrowers in default is the aggressive compounding of electronic auto-debit bounce fees. Tata Capital&apos;s automated treasury systems often present e-NACH mandates two to three times within a single month. When an account lacks sufficient funds, the borrower&apos;s destination bank deducts ₹250 to ₹500 plus GST per return, while Tata Capital simultaneously levies internal bounce penalties ranging from ₹450 to ₹1,000 plus GST.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Over a period of four to six months, these unauthorized and continuous presentation cycles can drain tens of thousands of rupees from borrower accounts or inflate the outstanding loan ledger with arbitrary fees. Under the Reserve Bank of India&apos;s Fair Lending Practice directives on penal charges in loan accounts (2023), regulated entities are strictly prohibited from capitalizing penal charges or charging compounded default interest.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Distressed borrowers can protect themselves through two decisive legal steps:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                First, under National Payments Corporation of India (NPCI) procedural guidelines and RBI consumer protection directives, a borrower holds the absolute legal right to instruct their destination bank in writing or through digital banking channels to cancel or suspend the e-NACH mandate linked to the Tata Capital loan, immediately preventing future presentation fees.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Second, during formal One-Time Settlement negotiations, legal counsel must demand an absolute 100% waiver of all accumulated bounce charges, late payment fees, and penal interest. In approved compromise settlements, Tata Capital completely extinguishes these ancillary levies, calculating the negotiated settlement haircut exclusively on the core outstanding principal.
              </p>
            </section>

            {/* Section 4: OTS Haircut Policies & NPV Valuation */}
            <section id="tata-capital-ots-haircut-policy-npv" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>4. OTS Haircut Policies &amp; Valuation Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Tata Capital One-Time Settlement (OTS) &amp; Haircut Valuation Matrix
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under the RBI Master Direction on Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24), Tata Capital maintains a board-approved compromise settlement framework. Rather than acting on arbitrary discretion, the NBFC evaluates settlement proposals using a mathematical Net Present Value (NPV) recovery methodology.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Because unsecured personal loans and consumer credit facilities carry no underlying collateral, Tata Capital must mathematically compare an immediate lump-sum settlement offer against the uncertain, discounted future recovery of prolonged litigation or civil execution proceedings, after accounting for legal retainers, court fees, and administrative costs.
              </p>

              {/* Formula Container Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>NBFC Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated cash recoveries across future time periods, r is the corporate cost of capital discount rate, and deductions account for 3–5 years of judicial friction, advocate retainers, and regulatory provisioning locked under Ind AS 109.
                </p>
              </div>

              {/* Settlement Haircut Slabs Table */}
              <h3 className="text-lg font-bold text-slate-900 mb-3">Realistic Tata Capital Settlement Haircut Slabs by Product &amp; Aging</h3>
              <div className="overflow-x-auto my-4">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Loan Facility Category</th>
                      <th>Delinquency Aging</th>
                      <th>Penal &amp; Bounce Waiver</th>
                      <th>Principal Haircut Range</th>
                      <th>Target Settlement Target</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Tata Capital Unsecured Personal Loan</td>
                      <td>90 – 180 Days (NPA)</td>
                      <td>100% Full Waiver</td>
                      <td>30% – 45% Principal Waiver</td>
                      <td>Offer 40%–50% of Book Dues</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Tata Capital Unsecured Personal Loan</td>
                      <td>181 – 365+ Days (Doubtful)</td>
                      <td>100% Full Waiver</td>
                      <td>45% – 60% Principal Waiver</td>
                      <td>Offer 35%–40% of Book Dues</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Tata Capital Dropline / Flexi Loan</td>
                      <td>90 – 180 Days</td>
                      <td>100% Full Waiver</td>
                      <td>25% – 40% Principal Waiver</td>
                      <td>Offer 45%–55% of Utilized Dues</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Tata Capital Small Business / Digital Credit</td>
                      <td>180+ Days (Written Off)</td>
                      <td>100% All Penal Charges</td>
                      <td>50% – 65% Principal Waiver</td>
                      <td>Offer 30%–35% of Total Dues</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: High-Impact Resolution Blueprint (Infographic Banner) */}
            <section id="infographic-resolution-blueprint" className="scroll-mt-24 mb-12">
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
                        Tata Capital Personal Loan Settlement &amp; Defense Blueprint
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/tata-capital-personal-loan-settlement.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#1F5EFF] hover:text-blue-300 font-bold flex items-center gap-1 transition-colors"
                  >
                    <span className="hidden sm:inline">Open Full Size</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* 16:9 Landscape Infographic Image */}
                <div className="p-3 md:p-4 bg-slate-50">
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                    <img
                      src="/images/infographics/tata-capital-personal-loan-settlement.jpg"
                      alt="Tata Capital Personal Loan Settlement and OTS Framework Infographic"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Strategy:</strong> Revoke NACH mandate presentations, halt third-party recovery harassment, and negotiate directly with Tata Capital Credit Committees for 40%–60% debt waivers.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6: Third-Party Recovery Defense & RBI Rules */}
            <section id="recovery-agent-rules-anti-harassment" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>5. Recovery Practices &amp; RBI Harassment Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Defending Against Aggressive Recovery Tactics Under RBI NBFC Directives
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Tata Capital engages external third-party Debt Recovery Agencies (DRAs) whose tele-callers and field executives operate under commission-driven incentives. In delinquent accounts, collection personnel frequently overstep regulatory boundaries by making incessant phone calls throughout the day, executing unannounced visits to residential and workplace premises, and contacting non-guarantor family members or employers whose details were captured during digital onboarding.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The Reserve Bank of India Master Directions on Recovery Agents and NBFC Fair Practices Code establish unequivocal, non-negotiable legal protections: (a) Agents are strictly restricted to calling or visiting borrowers between 08:00 AM and 07:00 PM; (b) Reaching out to employers, colleagues, neighbors, or non-guarantor relatives is strictly unlawful; (c) Intimidation, verbal abuse, threats of physical confrontation, or public shaming is strictly prohibited; (d) Visiting personnel must produce an official Tata Capital authorization letter and an Indian Institute of Banking &amp; Finance (IIBF) DRA certificate.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers facing unauthorized recovery tactics should systematically document call recordings, SMS logs, and CCTV footage. Serving a formal legal cease-and-desist notice to Tata Capital&apos;s Principal Nodal Officer (PNO) and escalating documented violations to the RBI Integrated Ombudsman portal (CMS) triggers immediate compliance intervention and compels the NBFC to enforce professional standards.
              </p>
            </section>

            {/* Section 7: Step-by-Step NBFC Settlement Roadmap */}
            <section id="step-by-step-tata-capital-settlement" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>6. Step-by-Step NBFC Settlement Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Step-by-Step Guide: How to Negotiate a Compromise Settlement with Tata Capital
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Executing a legally secure, cost-effective One-Time Settlement with Tata Capital requires a disciplined, evidence-based approach:
              </p>

              <div className="space-y-6">
                {/* Phase 1 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">1</span>
                    Comprehensive Financial Audit &amp; Hardship Dossier Compilation
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Assemble comprehensive documentary proof evidencing bona fide, involuntary financial incapacity. Crucial documents include job termination letters, salary reduction slips, audited business balance sheets, hospital discharge summaries, or bank statements showing depleted liquidity. This proves the default is non-wilful and qualifies for compromise relief.
                  </p>
                </div>

                {/* Phase 2 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">2</span>
                    Revoking NACH Mandates &amp; Formalizing Communication Channels
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Instruct your bank to revoke the e-NACH auto-debit mandate to halt recurring return penalties. Issue a formal notice to Tata Capital directing all collection communication to written email channels or through designated legal counsel, establishing a verifiable evidentiary audit trail.
                  </p>
                </div>

                {/* Phase 3 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">3</span>
                    Submitting Formal Hardship Petition to Stressed Assets Desk
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Submit a formal OTS petition addressed to Tata Capital&apos;s Zonal Stressed Assets Desk citing the RBI Master Direction on Compromise Settlements. Anchor the opening settlement proposal at 25% to 35% of total book dues to establish room for structured counter-negotiations.
                  </p>
                </div>

                {/* Phase 4 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">4</span>
                    Managing Counter-Demands &amp; Structuring Committee Approvals
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Tata Capital will initially reject low offers and propose modest discounts (10%–20%). Experienced legal counsel counters by demonstrating that settlement funds are being pooled from third-party family assistance, steering the Credit Committee toward the target 40% to 60% principal waiver band.
                  </p>
                </div>

                {/* Phase 5 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">5</span>
                    Rigorous Forensic Audit of the OTS Sanction Letter
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Before paying any funds, verify that Tata Capital issues an official OTS Sanction Letter on corporate letterhead containing loan account details, sanctioned settlement amount, exact payment deadlines, and unambiguous covenants confirming complete debt discharge and legal withdrawal.
                  </p>
                </div>

                {/* Phase 6 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">6</span>
                    Direct Account Remittance &amp; Enforcing ₹0 NDC Delivery
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Deposit the agreed settlement amount directly into your designated Tata Capital loan account via RTGS/NEFT. Under RBI Circular RBI/2023-24/60, Tata Capital is legally required to deliver a formal No Dues Certificate and update credit bureaus within 30 calendar days.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Section 25 Notices, Arbitration & Lok Adalat */}
            <section id="section-25-pssa-lok-adalat-defense" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>7. Section 25 Notices, Arbitration &amp; Lok Adalat</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Navigating Section 25 PSSA Notices, Arbitration &amp; National Lok Adalat
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When an unsecured personal loan crosses 60 to 90 days of non-payment, Tata Capital routinely issues statutory demand notices under Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA) for dishonoured NACH mandates, alongside notices invoking unilateral private arbitration.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                A Section 25 PSSA notice is a statutory precursor to a Magistrate Court complaint, not an arrest warrant. Responding through counsel within the 15-day window detailing genuine financial hardship and challenging unauthorized multiple mandate presentations protects your legal standing while establishing conciliation channels.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Furthermore, Tata Capital regularly participates in quarterly National Lok Adalats organized by District Legal Services Authorities (DLSA) under the Legal Services Authorities Act, 1987. In Lok Adalat sessions, NBFC representatives carry pre-approved settlement mandates (often offering 45% to 60% debt waivers). The resulting settlement award holds the legal force of a binding Civil Court Decree with non-appealable finality, permanently dismissing all pending legal claims.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Resolution Avenue</th>
                      <th>Legal Mechanism</th>
                      <th>Haircut Potential</th>
                      <th>Typical Timeline</th>
                      <th>Judicial Finality</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Direct NBFC OTS</td>
                      <td>Compromise agreement under RBI Master Directions.</td>
                      <td><strong>40% – 60% Debt Haircut</strong></td>
                      <td>15 to 30 Days</td>
                      <td>Binding private contract with ₹0 NDC.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">National Lok Adalat</td>
                      <td>Judicial conciliation before sitting judge and panel.</td>
                      <td><strong>45% – 60% Debt Haircut</strong></td>
                      <td>Single-day session</td>
                      <td><strong>Civil Court Decree</strong> (Zero appeal).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Arbitration Defense</td>
                      <td>Contesting unilateral arbitration in distant venues.</td>
                      <td>Variable (Converts to OTS)</td>
                      <td>3 to 9 Months</td>
                      <td>Subject to Section 34 challenge.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Section 25 / 138 Defense</td>
                      <td>Magistrate court compoundable proceedings defense.</td>
                      <td><strong>35% – 50% Debt Haircut</strong></td>
                      <td>2 to 6 Months</td>
                      <td>Formal withdrawal and case disposal.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 9: Sanction Letter Audit & ₹0 NDC Mandate */}
            <section id="sanction-letter-audit-ndc-verification" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>8. Sanction Letter Audit &amp; ₹0 NDC Mandate</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Authenticating Tata Capital Settlement Letters &amp; Enforcing the ₹0 NDC
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                A serious risk in retail debt recovery involves unauthorized collection agents issuing fake settlement letters to collect partial payments. If a borrower transfers funds against an unverified or verbal offer, Tata Capital credits the money toward outstanding penal charges, leaving the default open and compounding.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers must verify that the OTS sanction letter is printed on official Tata Capital Limited / Tata Capital Financial Services Limited letterhead containing the Corporate Identification Number (CIN), registered office address in Mumbai, unique settlement proposal reference number, authorized signatory name, employee code, and official branch seal.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The sanction letter must explicitly confirm that upon payment of the agreed sum, the account is fully discharged with zero further financial liability. Under RBI Circular RBI/2023-24/60, Tata Capital must deliver the formal No Dues Certificate (NDC) and cancel all security mandates within 30 calendar days, or pay mandatory statutory compensation of ₹5,000 per day of delay directly to the borrower.
              </p>
            </section>

            {/* Section 10: CIBIL Score Trajectory & Rehabilitation */}
            <section id="cibil-impact-credit-rehabilitation" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>9. CIBIL Score Trajectory &amp; Rehabilitation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                CIBIL Score Trajectory Post-Settlement &amp; Strategic 18-Month Recovery Plan
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Completing a One-Time Settlement with Tata Capital results in the account being reported to all four licensed credit bureaus (TransUnion CIBIL, Experian, Equifax, CRIF High Mark) with the status <strong>&apos;Settled&apos;</strong> or <strong>&apos;Post-Write-off Settled&apos;</strong> with an outstanding balance of exactly <strong>₹0</strong>. This causes an initial credit score drop of 75 to 150 points.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under RBI compromise directives, a mandatory 12-month cooling-off window applies before fresh unsecured credit lines can be approved. However, a &apos;Settled&apos; record with ₹0 balance is vastly superior to an active, compounding &apos;Default&apos; status that degrades credit scores every month and invites ongoing litigation.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers can systematically restore their credit profile to 750+ within 18 to 24 months by securing a fixed-deposit-backed credit card (FD card), maintaining credit utilization strictly below 25%, and ensuring 100% on-time payment records on all living utilities and surviving credit obligations.
              </p>
            </section>

            {/* Section 11: SettleLoans Legal Defense & Representation */}
            <section id="company-resolution-section" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>10. Legal Defense &amp; Representation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Why Distressed Tata Capital Borrowers Trust SettleLoans
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Negotiating an optimal debt settlement with a major corporate NBFC like Tata Capital requires rigorous financial analysis and dedicated legal advocacy. SettleLoans halts third-party recovery harassment through immediate cease-and-desist notices, defends against Section 25 PSSA summons, and negotiates directly with Tata Capital&apos;s Zonal Stressed Assets Desks to secure maximum lawful debt waivers and authentic ₹0 No Dues Certificates.
              </p>

              {/* Placement of Reusable CompanySection */}
              <div className="my-8">
                <CompanySection />
              </div>
            </section>

            {/* Section 12: Frequently Asked Questions (FAQ Accordion) */}
            <section id="faqs" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>11. Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                Frequently Asked Questions About Tata Capital Personal Loan Settlement
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
                    <strong>RBI Master Circular:</strong> Fair Practices Code for Non-Banking Financial Companies (NBFCs) &amp; Outsourcing of Financial Services
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.tatacapital.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Tata Capital Limited:</strong> Fair Practices Code, Customer Grievance Redressal Policy &amp; Principal Nodal Officer Matrix
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
                    <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Online Portal for Complaints on NBFC Harassment, Excessive Bounce Fees &amp; NDC Delays
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
                Ashish has led over 1,200+ successful debt compromise negotiations across Tata Capital, Bajaj Finance, HDFC Bank, and ICICI Bank. He specializes in corporate NBFC dispute resolution, Section 25 PSSA defense, and borrower advocacy under RBI Master Directions.
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
                <span>Tata Capital Dispute Resolution</span>
              </div>
              <h3 className="text-xl font-black mb-3 leading-tight">
                Facing Tata Capital Loan Default?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Stop aggressive recovery tele-calling and recurring NACH return fees immediately. Let our experienced banking advocates audit your delinquency stage, draft your formal OTS petition, and secure an authentic stamped Tata Capital settlement letter.
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
                    <strong>Direct NBFC Representation:</strong> We bypass third-party collection agencies to represent your case directly before Tata Capital Zonal Stressed Assets Desks.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Protection:</strong> Prompt issuance of formal legal cease-and-desist notices to stop unauthorized workplace visits and third-party calling under RBI rules.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Stamped Verification:</strong> Every settlement is strictly verified on official corporate letterhead before any payment is authorized.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed ₹0 NDC Delivery:</strong> End-to-end legal tracking until your formal No Dues Certificate is issued and credit bureaus are updated.
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
