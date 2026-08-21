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
  Banknote
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

export default function BajajFinancePersonalLoanSettlementClient() {
  const [activeId, setActiveId] = useState<string>('understanding-bajaj-finance-defaults');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'understanding-bajaj-finance-defaults', title: '1. NBFC Risk Engine & Default Architecture' },
    { id: 'bajaj-delinquency-timeline-npa', title: '2. Delinquency Timeline & NPA Stages' },
    { id: 'stopping-bajaj-bounce-charges-nach', title: '3. Halting NACH Bounce Charges & Penal Fees' },
    { id: 'bajaj-ots-haircut-policy-npv', title: '4. OTS Haircut Policies & Valuation Framework' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Resolution Blueprint' },
    { id: 'recovery-agent-rules-anti-harassment', title: '6. Recovery Practices & RBI Harassment Defense' },
    { id: 'step-by-step-bajaj-settlement', title: '7. Step-by-Step NBFC Settlement Roadmap' },
    { id: 'section-25-pssa-lok-adalat-defense', title: '8. Section 25 Notices, Section 138 & Lok Adalat' },
    { id: 'sanction-letter-audit-ndc-verification', title: '9. Sanction Letter Audit & ₹0 NDC Mandate' },
    { id: 'cibil-impact-credit-rehabilitation', title: '10. CIBIL Score Trajectory & Rehabilitation' },
    { id: 'company-resolution-section', title: '11. SettleLoans Legal Defense & Advisory' },
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
      question: "What is the Bajaj Finance personal loan settlement process and how does an NBFC compromise work?",
      answer: (
        <p>
          The <strong>Bajaj Finance personal loan settlement process</strong> is a formal compromise sanctioned under Reserve Bank of India Master Directions on Compromise Settlements. When an unsecured personal loan, Flexi loan, or EMI card defaults beyond 90 days into NPA status, the borrower submits a hardship petition to Bajaj Finance&apos;s Credit Committee. Upon evaluating the borrower&apos;s insolvency against the Net Present Value (NPV) of legal recovery, Bajaj issues an official <strong>OTS Sanction Letter</strong>. Paying the agreed amount directly into the loan account extinguishes the remaining debt, dismisses legal actions, and entitles the borrower to a ₹0 <strong>No Dues Certificate (NDC)</strong>.
        </p>
      )
    },
    {
      question: "How can borrowers stop Bajaj Finance NACH bounce charges and repeated automated debit attempts?",
      answer: (
        <p>
          Bajaj Finance frequently presents electronic NACH mandates multiple times a month, multiplying return fees. To stop these charges: (1) Instruct your destination bank in writing or online to cancel or suspend the e-NACH mandate under NPCI guidelines; (2) Send a formal hardship notice to Bajaj requesting a pause on electronic debit sweeps; (3) Demand a 100% waiver of all accumulated bounce fees and penal interest under RBI penal charge directives during One-Time Settlement negotiations.
        </p>
      )
    },
    {
      question: "What percentage of debt waiver or haircut can you realistically negotiate on a Bajaj Finance personal loan?",
      answer: (
        <p>
          On unsecured personal loans and Flexi facilities, Bajaj Finance typically approves debt waivers between <strong>40% and 65%</strong> of total book dues. The achievable haircut depends on delinquency aging and balance-sheet provisioning. Accounts overdue beyond 180 days (Doubtful or Loss status) qualify for maximum discounts (55% to 65%), along with 100% waiver of bounce penalties and penal interest.
        </p>
      )
    },
    {
      question: "How do you handle aggressive Bajaj Finance recovery agents and stop home or workplace harassment?",
      answer: (
        <p>
          Under <strong>RBI Master Directions on Recovery Agents</strong> and Fair Practices Code, borrowers have enforceable protections: (a) Agents can only call or visit between 08:00 AM and 07:00 PM; (b) Contacting employers, colleagues, or non-guarantor relatives is strictly illegal; (c) Abusive language, threats, or persistent calling is prohibited. To stop harassment, serve a formal cease-and-desist notice to the Bajaj Principal Nodal Officer and file an RBI CMS complaint.
        </p>
      )
    },
    {
      question: "Can Bajaj Finance file a police FIR or arrest you for defaulting on a personal or flexi loan?",
      answer: (
        <p>
          <strong>No. Defaulting on an unsecured personal loan is strictly a civil contractual dispute</strong> under the Indian Contract Act, 1872. The police cannot register an FIR or arrest you for genuine financial insolvency. If NACH mandates bounce, Bajaj Finance may issue court summons under Section 25 PSSA or Section 138 NI Act, which are civil-court matters resolved through advocate representation and compromise settlement.
        </p>
      )
    },
    {
      question: "What is a Section 25 Notice under the Payment and Settlement Systems Act sent by Bajaj Finance?",
      answer: (
        <p>
          A <strong>Section 25 PSSA notice</strong> is a statutory 15-day demand letter sent after an electronic NACH mandate dishonours due to insufficient funds. It is not an arrest warrant. Borrowers should reply through counsel explaining hardship, contest unauthorized multiple presentations, and use the forum or National Lok Adalat to negotiate a binding OTS.
        </p>
      )
    },
    {
      question: "What authority tier inside Bajaj Finance approves a One-Time Settlement (OTS) proposal?",
      answer: (
        <p>
          Under Bajaj Finance&apos;s Delegation of Financial Powers matrix, external tele-callers and field recovery agents have zero legal authority to approve debt waivers. Substantive principal haircuts (40% to 65%) must be approved by the <strong>Zonal Credit Committee, National Stressed Assets Desk, or Chief Risk Officer division</strong>, backed by a stamped sanction letter from corporate headquarters.
        </p>
      )
    },
    {
      question: "How does settling a Bajaj Finserv personal loan impact your CIBIL score and credit report?",
      answer: (
        <p>
          After the settlement amount is paid, Bajaj Finance updates credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark) to <strong>&apos;Settled&apos;</strong> with an outstanding balance of <strong>₹0</strong>. This causes an initial credit score drop of 75 to 150 points and a 12-month cooling period. However, &apos;Settled&apos; status permanently stops DPD compounding and legal flags, and scores can be rebuilt to 750+ within 18 to 24 months.
        </p>
      )
    },
    {
      question: "What precautions should you take before paying any settlement amount to Bajaj Finance?",
      answer: (
        <p>
          Follow five safety rules: (1) Never pay on verbal or WhatsApp promises; (2) Demand an authentic OTS Sanction Letter on Bajaj Finance Limited letterhead with employee code and seal; (3) Verify the full debt discharge clause; (4) Deposit funds solely into your official Bajaj loan account via NEFT/RTGS; (5) Retain bank payment receipts and secure the formal No Dues Certificate.
        </p>
      )
    },
    {
      question: "How long does Bajaj Finance take to issue the No Dues Certificate (NDC) after settlement?",
      answer: (
        <p>
          Under <strong>RBI Circular RBI/2023-24/60</strong>, Bajaj Finance is legally required to issue a formal No Dues Certificate (NDC) and update credit bureaus within <strong>30 calendar days</strong> of receiving final payment. If the lender fails to issue the NDC within 30 days, it must pay statutory compensation of <strong>₹5,000 for each day of delay</strong> directly to the borrower.
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
            <span>NBFC Dispute Resolution • Bajaj Finance</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            Bajaj Finance Personal Loan Settlement: <span className="text-[#3b82f6] md:text-[#60a5fa]">OTS Rules, Bounce Charges &amp; Legal Defense</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Defaulted on a Bajaj Finserv personal loan, Flexi loan, or EMI card? Learn how to stop aggressive recovery calls, halt compounding NACH bounce charges, and negotiate up to 60% legal debt waiver under RBI compromise frameworks.
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
              <span>Negotiate Bajaj Settlement</span>
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
                <span>Bajaj Quick Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Overdue Bajaj accounts beyond 90 days enter NPA status. Direct negotiations with Zonal Credit Committees bypass aggressive collection agencies, yielding 40%–65% debt waivers with 100% bounce charge cancellation.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">
            
            {/* Section 1: NBFC Risk Engine & Default Architecture */}
            <section id="understanding-bajaj-finance-defaults" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. NBFC Risk Engine &amp; Recovery Infrastructure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Understanding Bajaj Finance&apos;s Algorithmic Credit &amp; Recovery Infrastructure
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Bajaj Finance Limited (operating under the Bajaj Finserv brand) is India&apos;s largest consumer non-banking financial company (NBFC), dominating retail credit through unsecured personal loans, Flexi credit lines, and digital EMI cards. Unlike traditional commercial banks that rely on gradual branch-level follow-ups, Bajaj Finance deploys an automated, algorithm-driven recovery engine engineered to trigger immediate collection pressure upon a single missed installment.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When an equated monthly installment (EMI) dishonours, automated systems levy internal bounce penalties (₹450 to ₹1,000+ plus GST), penal interest of 24% to 36% annually, and multi-channel tele-calling within 24 to 48 hours. Furthermore, the lender frequently re-presents electronic National Automated Clearing House (NACH) mandates multiple times a month, multiplying destination bank return charges and causing severe financial strain for distressed borrowers.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                For borrowers experiencing severe economic disruptions—such as job loss, business failure, or critical illness—these automated charges compound into an acute burden. Non-payment of an unsecured personal loan is strictly a civil contractual matter under the Indian Contract Act, 1872. Under Reserve Bank of India (RBI) regulations, distressed borrowers hold enforceable legal rights to halt collection harassment and seek compromise One-Time Settlements (OTS).
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong>Statutory Principle:</strong> Under RBI Master Directions, regulated lenders cannot classify involuntary borrowers suffering legitimate financial collapse as wilful defaulters. Involuntary debtors have the statutory right to request compromise debt waivers under board-approved OTS policies.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Delinquency Timeline & NPA Stages */}
            <section id="bajaj-delinquency-timeline-npa" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>2. Delinquency Timeline &amp; NPA Stages</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Bajaj Finance Delinquency Stages: From DPD 1-30 to Non-Performing Asset (NPA)
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under the Reserve Bank of India&apos;s Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP) and Expected Credit Loss (ECL) accounting standards under Ind AS 109, Bajaj Finance categorizes overdue retail loans into operational Days Past Due (DPD) buckets. Timing your settlement petition to match these stages is critical for maximizing debt waivers.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                During the initial 60 days (Bucket 1 and 2), automated tele-callers push aggressively for overdue regularisation. Once default crosses 90 days, the account transitions into Non-Performing Asset (NPA) status. Bajaj Finance must then allocate balance-sheet capital provisioning, creating an institutional motivation to accept lump-sum compromise settlements that release locked reserves.
              </p>

              {/* Comprehensive Stage Table */}
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Delinquency Bucket</th>
                      <th>Overdue Days (DPD)</th>
                      <th>Bajaj Recovery Action</th>
                      <th>Legal Exposure</th>
                      <th>Settlement Haircut Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Bucket 1 (Early Stage)</td>
                      <td>1 – 30 Days</td>
                      <td>Automated IVR calls, daily SMS alerts, NACH presentations.</td>
                      <td>Zero judicial risk; credit bureau overdue mark.</td>
                      <td>Very Low (NBFC demands regularizing EMI).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Bucket 2 (Mid Stage)</td>
                      <td>31 – 60 Days</td>
                      <td>Intensive tele-calling, field visits, loan acceleration notices.</td>
                      <td>NACH bounce notices; CIBIL score drop begins.</td>
                      <td>Low (Restructuring or tenure extension possible).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Bucket 3 (Pre-NPA Alert)</td>
                      <td>61 – 90 Days</td>
                      <td>Doorstep visits, demand for overdue clearance, recall warnings.</td>
                      <td>Statutory Section 25 PSSA / Section 138 notices sent.</td>
                      <td>Moderate (Penal fee waiver negotiations start).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-amber-700">NPA (Substandard Asset)</td>
                      <td>91 – 180 Days</td>
                      <td>Account categorized as NPA; transferred to external agencies.</td>
                      <td>Magistrate court summons under Sec 25 PSSA.</td>
                      <td><span className="text-emerald-700 font-bold">High (35%–50% Haircut achievable).</span></td>
                    </tr>
                    <tr>
                      <td className="font-bold text-red-700">Doubtful / Loss Asset</td>
                      <td>181 – 365+ Days</td>
                      <td>Managed by National Stressed Assets Desk; provisioning absorbed.</td>
                      <td>Civil recovery suits, Lok Adalat referrals, write-off.</td>
                      <td><span className="text-emerald-700 font-bold">Maximum (50%–65% Haircut achievable).</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When an account enters Doubtful Asset or write-off status, Bajaj Finance has recognized the accounting loss. A structured cash settlement delivers an immediate write-back to operating profits, enabling senior credit committees to sanction deep concessions.
              </p>
            </section>

            {/* Section 3: Halting NACH Bounce Charges & Penal Fees */}
            <section id="stopping-bajaj-bounce-charges-nach" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Banknote className="w-4 h-4" />
                <span>3. Stopping NACH Bounce Charges &amp; Penal Fees</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                How to Stop Bajaj Finance Bounce Charges &amp; Halt Repeated NACH Presentations
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Compounding bounce penalties represent a severe hazard for delinquent Bajaj Finance borrowers. When an EMI mandate bounces, the destination bank deducts ₹250 to ₹500 plus GST, while Bajaj Finance levies an internal penalty of ₹450 to ₹1,000+. When the lender presents the debit mandate two or three times monthly, peripheral charges rapidly total thousands of rupees.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under RBI&apos;s Fair Lending Practice directives on penal charges (2023), lenders cannot capitalize penal levies or charge compounding default interest. Distressed borrowers can halt this financial drain through two decisive steps:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                First, under NPCI regulations and RBI consumer protection guidelines, borrowers have the statutory right to instruct their destination bank in writing or through digital banking to cancel or suspend the e-NACH mandate tied to the Bajaj loan, preventing further return penalties.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Second, during formal OTS negotiations, legal counsel must demand a 100% waiver of all accumulated bounce fees, late charges, and penal interest. In approved compromise settlements, Bajaj Finance completely wipes out these levies, focusing solely on the discounted core principal balance.
              </p>
            </section>

            {/* Section 4: OTS Haircut Policies & Valuation Framework */}
            <section id="bajaj-ots-haircut-policy-npv" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>4. OTS Haircut Policies &amp; Valuation Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Bajaj Finance One-Time Settlement (OTS) &amp; Haircut Valuation Matrix
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under the RBI Master Direction on Compromise Settlements (DOR.STR.REC.20/21.04.048/2023-24), Bajaj Finance maintains a board-approved compromise settlement framework. Rather than acting on arbitrary discretion, the NBFC evaluates proposals using a mathematical Net Present Value (NPV) recovery methodology.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Because unsecured personal and Flexi loans carry no attached collateral, Bajaj Finance balances an immediate cash settlement against the discounted future recovery of protracted litigation or arbitration, net of legal fees and overhead.
              </p>

              <div className="bg-slate-900 text-white p-5 md:p-6 rounded-2xl my-6 shadow-md border border-slate-800">
                <h3 className="text-base font-bold text-blue-400 mb-2 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-[#1F5EFF]" />
                  <span>The NBFC Net Present Value (NPV) Settlement Equation</span>
                </h3>
                <div className="p-3.5 bg-slate-800 rounded-xl font-mono text-xs sm:text-sm text-emerald-400 border border-slate-700 mb-3">
                  NPV Recovery = (Estimated Court Realization - Advocate Fees - Collection Cost) / (1 + Cost of Funds)^Time (Years)
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  For Doubtful or Loss accounts with substantial ECL provisioning recognized, accepting a 40% to 55% settlement generates a direct positive cash write-back, making compromise settlements financially superior to prolonged litigation.
                </p>
              </div>

              {/* Settlement Haircut Slabs Table */}
              <h3 className="text-lg font-bold text-slate-900 mb-3">Realistic Bajaj Finance Settlement Haircut Slabs by Product &amp; Aging</h3>
              <div className="overflow-x-auto my-4">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Credit Product Category</th>
                      <th>Delinquency Aging</th>
                      <th>Bounce &amp; Penal Waiver</th>
                      <th>Principal Haircut</th>
                      <th>Target Settlement Offer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Bajaj Unsecured Personal Loan</td>
                      <td>90 – 180 Days (NPA)</td>
                      <td>100% Waived</td>
                      <td>30% – 45% Waiver</td>
                      <td>Offer 40% of Book Dues</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Bajaj Unsecured Personal Loan</td>
                      <td>181 – 365+ Days (Doubtful)</td>
                      <td>100% Waived</td>
                      <td>45% – 65% Waiver</td>
                      <td>Offer 30% – 35% of Book Dues</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Bajaj Flexi Term / Dropline Loan</td>
                      <td>90 – 180 Days</td>
                      <td>100% Waived</td>
                      <td>25% – 40% Waiver</td>
                      <td>Offer 45% of Utilized Dues</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Bajaj Insta EMI Card / Consumer Loan</td>
                      <td>180+ Days (Written Off)</td>
                      <td>100% All Penal Charges</td>
                      <td>50% – 70% Waiver</td>
                      <td>Offer 25% – 35% of Dues</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: High-Impact Resolution Blueprint (Infographic Banner) */}
            <section id="infographic-resolution-blueprint" className="scroll-mt-24 mb-12">
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
                        Bajaj Finance Personal Loan Settlement &amp; Defense Blueprint
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/bajaj-finance-personal-loan-settlement.jpg"
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
                      src="/images/infographics/bajaj-finance-personal-loan-settlement.jpg"
                      alt="Bajaj Finance Personal Loan Settlement Summary Infographic"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Takeaway:</strong> Stop unauthorized collection calls, halt repeated NACH bounces, and negotiate directly with Bajaj Credit Committees for 40%–65% debt waivers.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6: Recovery Agent Rules & RBI Harassment Defense */}
            <section id="recovery-agent-rules-anti-harassment" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>5. Recovery Practices &amp; RBI Harassment Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Defending Against Aggressive Recovery Tactics Under RBI NBFC Directives
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Bajaj Finance deploys extensive third-party Debt Recovery Agencies (DRAs) whose field personnel operate under commission incentives. In distress situations, these agents often overstep legal boundaries through persistent calling, unannounced workplace visits, and contacting non-guarantor relatives or colleagues whose numbers were collected during digital onboarding.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The RBI Master Direction on Recovery Agents and NBFC Fair Practices Code establish strict legal protections: (a) Agents may only contact borrowers between 08:00 AM and 07:00 PM; (b) Contacting employers, colleagues, neighbors, or family members is strictly unlawful; (c) Intimidation, abusive language, or public shaming is strictly prohibited; (d) Visiting personnel must produce an official Bajaj Finance ID and an IIBF DRA certification.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers encountering harassment should document all incidents and issue a formal legal cease-and-desist notice to Bajaj Finance&apos;s Principal Nodal Officer (PNO) in Pune. Escalating documented violations on the RBI Integrated Ombudsman portal (CMS) triggers immediate regulatory scrutiny and compels the NBFC to enforce professional conduct.
              </p>
            </section>

            {/* Section 7: Step-by-Step NBFC Settlement Roadmap */}
            <section id="step-by-step-bajaj-settlement" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>6. Step-by-Step NBFC Settlement Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Step-by-Step Guide: How to Negotiate a Compromise Settlement with Bajaj Finance
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Navigating a compromise settlement with Bajaj Finance requires structured financial preparation and firm legal representation:
              </p>

              <div className="space-y-6">
                {/* Phase 1 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">1</span>
                    Financial Audit &amp; Hardship Compilation
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Assemble verifiable evidence of involuntary financial disruption, including severance letters, medical treatment records, or audited loss statements. Consecutive bank statements showing depleted liquidity prove default is non-wilful.
                  </p>
                </div>

                {/* Phase 2 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">2</span>
                    Revoking NACH Mandates &amp; Channeling Communication
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Stop NACH debit presentations at your bank to eliminate return charges. Direct all settlement discussions in writing to Bajaj Finance&apos;s Zonal Stressed Assets Desk.
                  </p>
                </div>

                {/* Phase 3 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">3</span>
                    Submitting Formal Hardship Representation
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Submit a structured OTS petition citing the RBI Master Direction on Compromise Settlements. Anchor an opening settlement offer at 25% to 35% of total ledger dues.
                  </p>
                </div>

                {/* Phase 4 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">4</span>
                    Managing Counter-Demands &amp; Negotiations
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Reiterate the absence of disposable income and demonstrate settlement funds are pooled from third-party relatives, steering the committee toward target 40% to 55% approvals.
                  </p>
                </div>

                {/* Phase 5 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">5</span>
                    Rigorous Sanction Letter Audit
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Verify an official OTS Sanction Letter on Bajaj Finance Limited letterhead containing loan account details, exact settlement figures, payment deadlines, and full debt extinguishment covenants.
                  </p>
                </div>

                {/* Phase 6 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">6</span>
                    Direct Account Payment &amp; Securing ₹0 NDC
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Remit the settlement sum directly into your official Bajaj Finance loan account through RTGS/NEFT. Under RBI Circular RBI/2023-24/60, Bajaj Finance must issue a No Dues Certificate within 30 calendar days.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Section 25 Notices, Section 138 & Lok Adalat */}
            <section id="section-25-pssa-lok-adalat-defense" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>7. Section 25 Notices, Section 138 &amp; Lok Adalat</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Navigating Section 25 PSSA Notices, Arbitration &amp; National Lok Adalat
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When a personal loan crosses 60 to 90 days of default, Bajaj Finance routinely issues statutory demand notices under Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA) for dishonoured NACH mandates, alongside notices invoking private arbitration.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                A Section 25 PSSA notice is a statutory precursor to a Magistrate Court complaint, not an arrest warrant. Responding through an advocate detailing genuine hardship and contesting improper mandate presentations protects your legal standing while establishing conciliation channels.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Furthermore, Bajaj Finance regularly participates in quarterly National Lok Adalats organized by District Legal Services Authorities (DLSA) under the Legal Services Authorities Act, 1987. In Lok Adalat sessions, NBFC representatives carry pre-approved settlement mandates (often 45% to 65% haircuts). The resulting settlement award holds the power of a binding Civil Court Decree with non-appealable finality.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Resolution Channel</th>
                      <th>Legal Mechanism</th>
                      <th>Haircut Potential</th>
                      <th>Speed</th>
                      <th>Legal Binding</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Direct NBFC OTS</td>
                      <td>Compromise agreement under RBI Master Directions.</td>
                      <td><strong>40% – 65% Debt Haircut</strong></td>
                      <td>15 to 30 Days</td>
                      <td>Binding private contract with ₹0 NDC.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">National Lok Adalat</td>
                      <td>Judicial conciliation before sitting judge and panel.</td>
                      <td><strong>45% – 65% Debt Haircut</strong></td>
                      <td>Single-day session</td>
                      <td><strong>Civil Court Decree</strong> (Zero appeal).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Arbitration Defense</td>
                      <td>Contesting unilateral arbitration in distant venues.</td>
                      <td>Variable (Transfers to OTS)</td>
                      <td>3 to 9 Months</td>
                      <td>Subject to Section 34 challenge.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Section 25 / 138 Defense</td>
                      <td>Magistrate court compoundable proceedings defense.</td>
                      <td><strong>35% – 55% Debt Haircut</strong></td>
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
                Authenticating Bajaj Finance Settlement Letters &amp; Enforcing the ₹0 NDC
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                A major hazard in retail debt recovery involves rogue collection agents issuing unverified settlement letters to collect partial payments. If funds are paid against an unauthorized letter, Bajaj Finance credits the money toward accumulated penal interest, leaving the core default open.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers must verify that the OTS sanction letter is printed on official Bajaj Finance Limited stationery containing the company&apos;s Corporate Identification Number (CIN), Pune registered office address, unique proposal reference number, and authorized officer signature with employee ID.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The letter must explicitly declare that upon payment of the agreed sum, the account is fully discharged with zero further liability. Under RBI Circular RBI/2023-24/60, Bajaj Finance must deliver the No Dues Certificate (NDC) and cancel all security mandates within 30 days, or pay mandatory statutory compensation of ₹5,000 per day of delay.
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
                Completing a settlement with Bajaj Finance leads to the account being reported to all credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark) as <strong>&apos;Settled&apos;</strong> or <strong>&apos;Post-Write-off Settled&apos;</strong> with an outstanding balance of exactly <strong>₹0</strong>. This causes an initial credit score drop of 75 to 150 points.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under RBI compromise directives, a mandatory 12-month cooling-off period applies before fresh unsecured loans can be granted. However, a &apos;Settled&apos; record with ₹0 balance is far better than an active &apos;Default&apos; status that degrades credit scores every month and attracts litigation.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers can restore their credit profile to 750+ within 18 to 24 months by acquiring a fixed-deposit-backed credit card (FD card), maintaining credit utilization under 25%, and making timely payments on all living expenses and secured obligations.
              </p>
            </section>

            {/* Section 11: SettleLoans Legal Defense & Advisory */}
            <section id="company-resolution-section" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>10. Legal Defense &amp; Representation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Why Distressed Bajaj Finance Borrowers Trust SettleLoans
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Negotiating a debt settlement with an automated, aggressive lender like Bajaj Finance requires experienced legal defense. SettleLoans halts collection harassment through formal cease-and-desist notices, defends against Section 25 PSSA notices, and negotiates directly with Bajaj Finance&apos;s Zonal Stressed Assets Committees to achieve maximum lawful debt waivers.
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
                Frequently Asked Questions About Bajaj Finance Personal Loan Settlement
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
                    href="https://www.bajajfinserv.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Bajaj Finance Limited:</strong> Fair Practices Code &amp; Grievance Redressal Mechanism / Principal Nodal Officer Matrix
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
                Ashish has led over 1,200+ successful debt compromise negotiations across Bajaj Finance, HDFC Bank, SBI, and ICICI Bank. He specializes in NBFC recovery dispute defense, SARB conciliation, and borrower protection under RBI Master Directions.
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
                <span>Bajaj Dispute Resolution</span>
              </div>
              <h3 className="text-xl font-black mb-3 leading-tight">
                Facing Bajaj Finance Loan Default?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Stop aggressive recovery calls and multiple NACH bounce fees today. Let our seasoned advocates audit your default bucket, draft your formal OTS proposal, and secure an official stamped Bajaj Finance settlement letter.
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
                    <strong>Direct NBFC Negotiations:</strong> We bypass third-party collection agencies to represent your case before Bajaj Finance Zonal Credit Committees.
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
                    <strong>100% Stamped Verification:</strong> Every settlement is verified through a formal Bajaj letterhead sanction before any payment is remitted.
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
