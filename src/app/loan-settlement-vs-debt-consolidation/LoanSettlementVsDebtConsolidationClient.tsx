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
  FileCheck,
  RefreshCw,
  XCircle,
  Layers,
  FileSpreadsheet,
  Calculator,
  Briefcase,
  AlertCircle,
  CircleDollarSign,
  BadgeCheck,
  Zap,
  Split,
  PieChart
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

export default function LoanSettlementVsDebtConsolidationClient() {
  const [activeId, setActiveId] = useState<string>('multi-debt-landscape-definitions');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'multi-debt-landscape-definitions', title: '1. Consolidation vs. Settlement Defined' },
    { id: 'financial-cost-simulation-math', title: '2. Financial Math & 15L Simulation' },
    { id: 'cibil-score-underwriting-impact', title: '3. CIBIL Bureau & 36-Mo Trajectory' },
    { id: 'eligibility-foir-underwriting', title: '4. Bank Eligibility & FOIR Limits' },
    { id: 'consolidation-trap-vs-settlement', title: '5. The "Consolidation Trap" Risk' },
    { id: 'rbi-framework-legal-protections', title: '6. RBI Framework & Legal Shield' },
    { id: 'decision-framework-matrix', title: '7. 7-Point Decision Diagnostic' },
    { id: 'step-by-step-execution-blueprints', title: '8. Step-by-Step Action Blueprints' },
    { id: 'faqs', title: '9. Frequently Asked Questions' },
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
      question: "What is the core difference between personal loan settlement and debt consolidation?",
      answer: (
        <p>
          The fundamental distinction lies in <strong>full contractual repayment versus debt forgiveness</strong>. In <strong>Debt Consolidation</strong>, you take a single new loan (or balance transfer facility) to pay off all your existing personal loans and credit cards in full. You roll multiple high-interest EMIs into one consolidated monthly installment, repaying 100% of the principal plus interest over an extended tenure. In a <strong>Personal Loan Settlement (One-Time Settlement or OTS)</strong>, you negotiate with lenders through legal advocates to permanently waive 40% to 70% of your total outstanding dues in exchange for a discounted lump-sum compromise, extinguishing the liability completely.
        </p>
      )
    },
    {
      question: "Which option saves more money: debt consolidation or loan settlement?",
      answer: (
        <p>
          <strong>Loan settlement saves significantly more total capital.</strong> Under an OTS settlement, 40% to 70% of your accumulated debt is permanently written off by the bank, saving you lakhs of rupees in direct cash outgo. Conversely, debt consolidation does not reduce your borrowed principal by a single rupee. While consolidation may lower your monthly EMI burden and nominal interest rate, paying interest over a new 3 to 5-year tenure actually increases your total lifetime interest outgo.
        </p>
      )
    },
    {
      question: "What CIBIL score is required to qualify for a debt consolidation loan in India?",
      answer: (
        <p>
          Major Indian scheduled commercial banks and prime NBFCs (such as HDFC Bank, ICICI Bank, SBI, Axis Bank, and Bajaj Finserv) mandate a minimum CIBIL score of <strong>750 or higher</strong>, clean repayment records with zero overdue days (0 DPD), and a Fixed Obligation to Income Ratio (FOIR) strictly below 50%. If you have already missed payments or your score has dropped below 680, institutional underwriting algorithms will reject your consolidation application. In such delinquent scenarios, debt settlement represents the only viable legal remedy.
        </p>
      )
    },
    {
      question: "How does debt consolidation affect my credit score compared to loan settlement?",
      answer: (
        <p>
          Debt consolidation initially causes a minor 5 to 15-point drop due to hard credit inquiries, but quickly <strong>boosts your CIBIL score above 780</strong> as existing credit cards and high-interest loans are reported as &quot;Closed - Regular&quot; and your credit utilization ratio (CUR) drops below 30%. Loan settlement causes an immediate drop of <strong>75 to 150 points</strong> and marks the account as &quot;Settled&quot; with a ₹0 balance. However, by adopting a disciplined secured credit card protocol, your score can be rebuilt back above 750 within 18 to 24 months.
        </p>
      )
    },
    {
      question: "Can I consolidate multiple loans if I am already running overdue EMIs or have defaulted?",
      answer: (
        <p>
          <strong>No.</strong> Once any of your credit cards or personal loans cross 30+ to 90+ Days Past Due (DPD) or enter Non-Performing Asset (NPA) classification, all formal Tier-1 and Tier-2 lenders in India automatically reject unsecured consolidation loan requests due to severe credit risk flags. At that stage, seeking a new loan is impossible, and negotiating a legal One-Time Settlement (OTS) under RBI guidelines becomes your primary financial option.
        </p>
      )
    },
    {
      question: "What is the 'Consolidation Trap' and why does it lead to severe debt crises?",
      answer: (
        <p>
          The <em>Consolidation Trap</em> is a dangerous financial spiral that occurs when an overleveraged borrower secures a large consolidation loan to clear existing credit lines but fails to address their underlying cash flow deficit. Relieved by temporary EMI reductions, the borrower begins swiping cleared credit cards again while servicing the new massive consolidation EMI. Within 6 to 12 months, the borrower ends up with double the original debt load, triggering catastrophic insolvency.
        </p>
      )
    },
    {
      question: "Can a debt settlement company negotiate settlements on multiple loans simultaneously?",
      answer: (
        <p>
          <strong>Yes.</strong> Professional debt settlement platforms like SettleLoans represent borrowers with multi-lender exposures across nationalized banks, private banks, NBFCs, and fintech lending apps simultaneously. Our empaneled legal advocates serve formal representation notices, establish legal anti-harassment shields under RBI guidelines, negotiate maximum statutory haircuts (40%–70%), verify authentic OTS sanction letters, and secure ₹0 No Dues Certificates (NDC) across your entire debt portfolio.
        </p>
      )
    },
    {
      question: "Can I convert a 'Settled' credit remark to 'Closed' in CIBIL after settling my debts?",
      answer: (
        <p>
          Yes. Once your financial situation stabilizes post-settlement, you can approach the original lending institution, pay the previously waived haircut amount (the discount amount), and obtain a Comprehensive Final No Dues Certificate. Upon submitting this certificate, the lender is legally required under CICRA regulations to update your credit record with TransUnion CIBIL, Experian, CRIF High Mark, and Equifax from &quot;Settled&quot; to &quot;Closed - Fully Paid&quot;.
        </p>
      )
    },
    {
      question: "What legal protections exist if banks threaten me while choosing between consolidation and settlement?",
      answer: (
        <p>
          Under the <strong>RBI Master Direction on Recovery Agents</strong> and <strong>Fair Practices Code</strong>, recovery agents are strictly barred from using abusive language, making threatening phone calls, contacting your employer or relatives, visiting your residence outside 8:00 AM to 7:00 PM, or harassing you in any form. Furthermore, executing a formal One-Time Settlement (OTS) legally compels lenders to withdraw all pending legal notices under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act upon receipt of settlement proceeds.
        </p>
      )
    },
    {
      question: "When should a borrower choose debt consolidation over loan settlement?",
      answer: (
        <p>
          Choose <strong>Debt Consolidation</strong> if: 1) Your CIBIL score is 750+ with zero missed EMIs; 2) Your debt-to-income ratio (FOIR) is under 50%; 3) You can secure an interest rate significantly lower than your current weighted average rate; and 4) You plan to apply for a major mortgage or business loan within the next 1 to 2 years. Choose <strong>Personal Loan Settlement</strong> if: 1) Your total EMI commitments exceed 60%–70% of your take-home pay; 2) You have experienced severe, permanent income loss or medical crisis; 3) You are already delinquent or in default; and 4) You need immediate, permanent debt elimination.
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

      {/* A. Hero Section - Charcoal Navy Background (#2d313d) */}
      <section
        className="w-full border-b border-slate-700/80 pt-8 pb-7 md:pt-12 md:pb-9 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#3b82f6]" />
            Financial Planning &amp; Multi-Debt Strategy Guide 2026
          </div>

          {/* H1 Headline */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            Personal Loan Settlement vs Debt Consolidation:{' '}
            <span className="text-[#3b82f6] md:text-[#60a5fa]">Which Strategy Solves Multi-Debt Traps?</span>
          </h1>

          {/* Subtitle / Direct Answer Snippet */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Struggling with multiple EMIs and credit card bills? Compare taking one large consolidation loan (100% repayment, 750+ CIBIL needed) versus hiring legal advocates to negotiate 40%–70% One-Time Settlement haircuts.
          </p>

          {/* Author & Review Metadata Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-3 mb-5">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-[9px]">
                AJ
              </div>
              <span>
                Written by{' '}
                <Link
                  href="/authors/ashish-jhangra"
                  className="text-white hover:text-[#3b82f6] font-semibold underline decoration-[#3b82f6] underline-offset-4"
                >
                  Ashish Jhangra
                </Link>
              </span>
            </div>
            <div className="hidden sm:block text-slate-500">•</div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Reviewed by SettleLoans Legal Advisory Team</span>
            </div>
            <div className="hidden sm:block text-slate-500">•</div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Updated: August 20, 2026</span>
            </div>
          </div>

          {/* Primary Hero CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-sm md:text-base group"
            >
              <span>Evaluate My Multi-Debt Strategy Free</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#multi-debt-landscape-definitions"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold py-3 px-5 rounded-xl transition-all duration-300 text-sm"
            >
              <BookOpen className="w-4 h-4 text-blue-300" />
              <span>Read Strategy Comparison</span>
            </a>
          </div>
        </div>
      </section>

      {/* B. Stats Strip Component */}
      <StatsStrip />

      {/* C. Widescreen 3-Column Main Body Grid */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          {/* Left Column (Sticky TOC ONLY) */}
          <aside className="hidden lg:block sticky top-24">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 xl:p-5 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900 font-black text-xs uppercase tracking-wider mb-3 pb-2 border-b border-slate-200">
                <BookOpen className="w-4 h-4 text-[#1F5EFF]" />
                <span>Table of Contents</span>
              </div>
              <nav className="space-y-1">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`text-xs block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug ${
                      activeId === item.id
                        ? 'bg-[#1F5EFF] text-white font-bold shadow-sm'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Middle Column (Main Content - Maximum Readable Width) */}
          <main className="w-full min-w-0 font-sans text-slate-800 blog-content">
            {/* Section 1: Multi-Debt Landscape & Core Definitions */}
            <section id="multi-debt-landscape-definitions" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                1. The Multi-Debt Landscape: Consolidation vs. Settlement Defined
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Managing multiple unsecured debts—such as three credit cards running near maximum limits, two personal loans from private banks, and instant digital credit lines from fintech NBFCs—is one of the most stressful financial situations an individual can experience in India. With staggered due dates, compounding interest charges (ranging from 14% on personal loans to 42%–48% annualized on credit cards), and punitive bounce fees, monthly repayments quickly spiral out of control.
              </p>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                When cash flows tighten, borrowers are invariably presented with two competing financial planning pathways: <strong>Debt Consolidation</strong> and <strong>Personal Loan Settlement</strong>. While both claim to solve debt distress, they operate on completely opposite financial, legal, and credit architectures.
              </p>

              {/* Side-by-Side Architectural Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
                {/* Consolidation Card */}
                <div className="bg-blue-50/70 border border-blue-200 p-6 rounded-2xl">
                  <div className="flex items-center gap-2 text-blue-900 font-bold text-lg mb-2">
                    <RefreshCw className="w-5 h-5 text-[#1F5EFF]" />
                    <span>Debt Consolidation Loan</span>
                  </div>
                  <p className="text-sm text-blue-950 font-medium mb-3">
                    Combining multiple high-interest debts into one single, lower-interest installment with 100% principal repayment.
                  </p>
                  <ul className="text-xs text-blue-900 space-y-2">
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Operating Mechanism:</strong> Borrowing a new, larger loan (or top-up mortgage) to pay off existing creditors in full.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Total Repayment:</strong> <strong>100% Principal + Total Accrued Interest</strong>. Zero debt forgiveness.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Prerequisites:</strong> Excellent CIBIL score (750+), stable verifiable income, and low FOIR (&lt;50%).</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span><strong>CIBIL Bureau Remark:</strong> Accounts marked as &quot;Closed - Regular&quot;; credit score preserved and elevated.</span>
                    </li>
                  </ul>
                </div>

                {/* Settlement Card */}
                <div className="bg-amber-50/70 border border-amber-200 p-6 rounded-2xl">
                  <div className="flex items-center gap-2 text-amber-900 font-bold text-lg mb-2">
                    <Scale className="w-5 h-5 text-amber-600" />
                    <span>Personal Loan Settlement (OTS)</span>
                  </div>
                  <p className="text-sm text-amber-950 font-medium mb-3">
                    Negotiating legal compromise agreements with lenders to extinguish debts via 40%–70% principal &amp; interest waivers.
                  </p>
                  <ul className="text-xs text-amber-900 space-y-2">
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Operating Mechanism:</strong> Legal advocates represent hardship under RBI directives to secure one-time lump sum payoffs.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Total Repayment:</strong> <strong>30% to 60% of Total Dues</strong>. 40%–70% of accumulated balance permanently waived.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Prerequisites:</strong> Demonstrable financial insolvency (job loss, business closure, medical crisis, or severe cash crunch).</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span><strong>CIBIL Bureau Remark:</strong> Account closed with &quot;Settled&quot; remark and ₹0 balance; rebuilt over 18–24 months.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Comprehensive 10-Parameter Comparison Table */}
              <div className="my-8">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                  In-Depth Architectural Matrix: Debt Consolidation vs. Loan Settlement
                </h3>
                <div className="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th>Strategic Parameter</th>
                        <th>Debt Consolidation Loan</th>
                        <th>One-Time Loan Settlement (OTS)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-bold text-slate-900">Primary Objective</td>
                        <td className="text-blue-700 font-semibold">Streamline multiple payments into 1 EMI &amp; reduce interest rate</td>
                        <td className="text-emerald-700 font-semibold">Slash total outstanding liability and extinguish debt permanently</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Principal Debt Reduction</td>
                        <td className="text-rose-600 font-semibold">₹0 (Zero Discount) — 100% Principal Repaid</td>
                        <td className="text-emerald-600 font-bold">40% to 70% Direct Principal &amp; Interest Haircut</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Minimum CIBIL Score Needed</td>
                        <td className="text-amber-700 font-semibold">750+ with pristine repayment history</td>
                        <td className="text-emerald-700 font-semibold">No minimum score (Works for 300–650 scores)</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Default Status Requirement</td>
                        <td className="text-slate-700">Must be regular (0 DPD; no missed EMIs)</td>
                        <td className="text-slate-700">Delinquent, Stressed SMA, or NPA (30+ to 90+ DPD)</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Repayment Duration</td>
                        <td className="text-slate-700">Extended over 36 to 60 new monthly installments</td>
                        <td className="text-slate-700">1 to 3 structured payments completed in 30–60 days</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Immediate CIBIL Impact</td>
                        <td className="text-emerald-600 font-semibold">Neutral to positive (+20 to +50 pts over time)</td>
                        <td className="text-rose-600 font-semibold">Temporary drop (-75 to -150 pts)</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Long-Term Credit Rebuilding</td>
                        <td className="text-slate-700">Instant creditworthiness for future home/car loans</td>
                        <td className="text-slate-700">Rebuilt to 750+ in 18–24 months via secured credit cards</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Total Capital Outgo</td>
                        <td className="text-rose-600 font-semibold">High (Compounded interest on new tenure)</td>
                        <td className="text-emerald-600 font-bold">Extremely Low (Substantial cash savings)</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Legal Recourse &amp; Finality</td>
                        <td className="text-slate-700">Re-default triggers immediate fresh recovery lawsuits</td>
                        <td className="text-emerald-700 font-semibold">Permanent discharge with ₹0 NDC; all court notices quashed</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Ideal Candidate Profile</td>
                        <td className="text-blue-900 font-medium">High-earning borrower with temporary cash-flow mismatch</td>
                        <td className="text-amber-900 font-medium">Insolvent borrower trapped in unmanageable debt load</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 2: Comprehensive Financial Math & Simulation (15L Portfolio) */}
            <section id="financial-cost-simulation-math" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                2. Financial Mathematics: Comprehensive Cost Comparison &amp; Multi-Loan Simulation
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                To understand why debt consolidation often fails stressed borrowers while debt settlement creates immediate solvency, let us analyze a real-world multi-debt scenario in India.
              </p>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                Consider a salaried professional earning ₹85,000 net monthly, carrying an aggregate debt portfolio of <strong>₹15,00,000</strong> distributed across four unsecured creditors:
              </p>

              {/* Debt Distribution Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                  <span className="text-[11px] font-bold text-slate-500 uppercase block">Creditor 1</span>
                  <h4 className="font-black text-slate-900 text-sm">HDFC Personal Loan</h4>
                  <p className="text-xs text-slate-600 mt-1">Outstanding: <strong>₹6,00,000</strong></p>
                  <p className="text-xs text-slate-600">Rate: 15% p.a. | EMI: <strong>₹16,650</strong></p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                  <span className="text-[11px] font-bold text-slate-500 uppercase block">Creditor 2</span>
                  <h4 className="font-black text-slate-900 text-sm">ICICI Personal Loan</h4>
                  <p className="text-xs text-slate-600 mt-1">Outstanding: <strong>₹4,00,000</strong></p>
                  <p className="text-xs text-slate-600">Rate: 16% p.a. | EMI: <strong>₹11,350</strong></p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                  <span className="text-[11px] font-bold text-slate-500 uppercase block">Creditor 3</span>
                  <h4 className="font-black text-slate-900 text-sm">SBI Credit Card</h4>
                  <p className="text-xs text-slate-600 mt-1">Outstanding: <strong>₹3,00,000</strong></p>
                  <p className="text-xs text-slate-600">Rate: 42% p.a. | Min Due: <strong>₹15,000</strong></p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                  <span className="text-[11px] font-bold text-slate-500 uppercase block">Creditor 4</span>
                  <h4 className="font-black text-slate-900 text-sm">Fintech NBFC Credit Line</h4>
                  <p className="text-xs text-slate-600 mt-1">Outstanding: <strong>₹2,00,000</strong></p>
                  <p className="text-xs text-slate-600">Rate: 24% p.a. | EMI: <strong>₹8,800</strong></p>
                </div>
              </div>

              <p className="text-sm font-semibold text-slate-800 mb-4">
                <strong>Total Baseline Situation:</strong> Total Outstanding: ₹15,00,000 | Cumulative Monthly Outflow: <strong>₹51,800</strong> (Representing <strong>61% FOIR</strong> of monthly income).
              </p>

              {/* Multi-Strategy Mathematical Comparison Table */}
              <div className="my-8">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                  3-Way Strategy Simulation: Minimum Dues vs. Consolidation vs. OTS Settlement
                </h3>
                <div className="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th>Financial Metric</th>
                        <th>Path A: Minimum Dues &amp; Rollover</th>
                        <th>Path B: 5-Year Debt Consolidation Loan</th>
                        <th>Path C: SettleLoans Negotiated OTS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-bold text-slate-900">Target Interest Rate</td>
                        <td className="text-rose-600 font-semibold">28% Weighted Average</td>
                        <td className="text-blue-600 font-semibold">13.5% p.a. (Prime Rate)</td>
                        <td className="text-emerald-600 font-bold">0% (All Interest Frozen &amp; Waived)</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">New Monthly Obligation</td>
                        <td className="text-rose-600 font-semibold">₹51,800 / month (Perpetual)</td>
                        <td className="text-blue-700 font-semibold">₹34,500 / month (60 Months)</td>
                        <td className="text-emerald-700 font-bold">₹0 monthly EMI after settlement</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Principal Repaid</td>
                        <td>₹15,00,000 (Over 10+ Years)</td>
                        <td>₹15,00,000 (100% Repaid)</td>
                        <td className="text-emerald-600 font-bold">₹6,75,000 (55% Overall Haircut)</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Total Interest Outgo</td>
                        <td className="text-rose-700 font-semibold">₹14,20,000+</td>
                        <td className="text-slate-700">₹5,70,000</td>
                        <td className="text-emerald-600 font-bold">₹0 (100% Waived)</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Total Lifetime Capital Paid</td>
                        <td className="text-rose-700 font-black">₹29,20,000+</td>
                        <td className="text-rose-600 font-black">₹20,70,000</td>
                        <td className="text-emerald-600 font-black">₹6,75,000</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Net Borrower Cash Savings</td>
                        <td>Base Default Trap</td>
                        <td className="text-rose-600 font-semibold">₹0 Savings (Cost: +₹5.7 Lakhs)</td>
                        <td className="text-emerald-600 font-black">₹13,95,000 Direct Cash Savings</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Debt Freedom Timeline</td>
                        <td className="text-rose-700">Never (Insolvency)</td>
                        <td>5 Long Years (60 Months)</td>
                        <td className="text-emerald-700 font-bold">45 to 60 Days Complete Discharge</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Financial Takeaway Alert Box */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <h4 className="text-amber-900 font-bold text-base flex items-center gap-2 mb-1.5">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                  The Financial Planner&apos;s Core Insight
                </h4>
                <p className="text-sm text-amber-800 leading-relaxed">
                  While a consolidation loan lowers your monthly cash burden from ₹51,800 to ₹34,500, it commits you to paying <strong>₹20,70,000 in total outgo</strong> over 5 years. If your income has shrunk or is unstable, servicing ₹34,500 every single month for 60 consecutive months carries an enormous risk of secondary default. In contrast, an OTS settlement locks in <strong>₹13.95 Lakhs in hard capital savings</strong> and permanently eliminates the debt in 45–60 days.
                </p>
              </div>
            </section>

            {/* Section 3: CIBIL Score & Underwriting Impact */}
            <section id="cibil-score-underwriting-impact" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                3. CIBIL Bureau Mechanics: Status Codes, Underwriting &amp; 36-Month Score Trajectory
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                In India&apos;s regulated credit ecosystem, licensed credit information companies (CIBIL, Experian, Equifax, and CRIF High Mark) operate under the <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA)</strong>. Lenders update loan records on the 10th of every month using standardized bureau reporting tags.
              </p>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                Understanding how automated bank algorithms interpret these status flags is critical when planning your financial recovery:
              </p>

              {/* Status Code Cards */}
              <div className="space-y-4 my-6">
                <div className="p-5 rounded-xl border border-blue-200 bg-blue-50/50">
                  <h3 className="text-base font-bold text-blue-900 flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-5 h-5 text-[#1F5EFF]" />
                    1. &quot;Closed - Regular / Fully Paid&quot; (Consolidation Outcome)
                  </h3>
                  <p className="text-sm text-blue-800 leading-relaxed mb-2">
                    When you consolidate debts, the new loan disburses funds directly to old lenders. Each old credit card and personal loan account is marked as <strong>&quot;Closed - Regular&quot;</strong> with zero overdue history.
                  </p>
                  <p className="text-xs text-blue-700">
                    <strong>Bureau Impact:</strong> Credit score increases rapidly (+30 to +60 points within 6 months) as your revolving credit utilization drops to 0% and on-time EMI reporting begins on the new consolidation loan.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-amber-200 bg-amber-50/50">
                  <h3 className="text-base font-bold text-amber-900 flex items-center gap-2 mb-1">
                    <Scale className="w-5 h-5 text-amber-600" />
                    2. &quot;Settled&quot; Status Tag (One-Time Settlement Outcome)
                  </h3>
                  <p className="text-sm text-amber-800 leading-relaxed mb-2">
                    In a One-Time Settlement, the account is permanently terminated with a <strong>₹0 active balance</strong>. The credit bureau records the compromised haircut in the settlement column and flags the account as <strong>&quot;Settled&quot;</strong>.
                  </p>
                  <p className="text-xs text-amber-700">
                    <strong>Bureau Impact:</strong> Immediate -75 to -150 points dip. Automated unsecured loan algorithms will decline fresh credit cards for 12–18 months. However, the score can be systematically rebuilt to 750+ within 18–24 months using secured credit cards, and you hold zero pending liability.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-rose-200 bg-rose-50/50">
                  <h3 className="text-base font-bold text-rose-900 flex items-center gap-2 mb-1">
                    <AlertTriangle className="w-5 h-5 text-rose-600" />
                    3. &quot;Written Off&quot; / &quot;Suit Filed&quot; (The Danger of Indecision)
                  </h3>
                  <p className="text-sm text-rose-800 leading-relaxed mb-2">
                    Occurs when a borrower ignores unpaid debts without choosing consolidation or settlement. The bank flags the accounts as <strong>&quot;Written Off - Wilful Default / Suit Filed&quot;</strong> and initiates legal recovery under Section 138 / DRT.
                  </p>
                  <p className="text-xs text-rose-700">
                    <strong>Bureau Impact:</strong> Complete credit destruction (-250 to -350 points), perpetual DPD 180+ reporting, total blacklisting across all Indian financial institutions, and ongoing court summons.
                  </p>
                </div>
              </div>

              {/* 36-Month Score Trajectory Table */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-6">
                <h4 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-3">
                  <TrendingUp className="w-5 h-5 text-[#1F5EFF]" />
                  36-Month CIBIL Score Trajectory Comparison
                </h4>
                <div className="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th>Timeline Milestone</th>
                        <th>Path 1: Debt Consolidation (Clean Repayments)</th>
                        <th>Path 2: One-Time Settlement (With Rebuild Plan)</th>
                        <th>Path 3: Unsettled Default (Ignored Notices)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-bold">Month 0 (Execution)</td>
                        <td className="text-blue-600 font-semibold">740 &rarr; 730 (-10 pts inquiry)</td>
                        <td className="text-rose-600 font-semibold">680 &rarr; 570 (-110 pts)</td>
                        <td className="text-rose-700 font-semibold">680 &rarr; 520 (-160 pts)</td>
                      </tr>
                      <tr>
                        <td className="font-bold">Month 6</td>
                        <td className="text-emerald-600 font-semibold">765 (Low CUR Boost)</td>
                        <td className="text-amber-600 font-semibold">615 (Secured Card Active)</td>
                        <td className="text-rose-700 font-semibold">480 (DPD 180+ Accrual)</td>
                      </tr>
                      <tr>
                        <td className="font-bold">Month 12</td>
                        <td className="text-emerald-700 font-semibold">785+ (Prime Tier Credit)</td>
                        <td className="text-blue-600 font-semibold">690 – 715 (Disciplined CUR &lt;20%)</td>
                        <td className="text-rose-800 font-semibold">Sub-450 (Total Blacklist)</td>
                      </tr>
                      <tr>
                        <td className="font-bold">Month 24</td>
                        <td className="text-emerald-700 font-bold">810+ (Home Loan Sanction Ready)</td>
                        <td className="text-emerald-600 font-semibold">750 – 765 (Fully Restored)</td>
                        <td className="text-rose-800 font-bold">Legal Court Summons / DRT</td>
                      </tr>
                      <tr>
                        <td className="font-bold">Month 36</td>
                        <td className="text-emerald-700 font-bold">825+ (Pristine Profile)</td>
                        <td className="text-emerald-700 font-bold">780+ (Eligible for Unsecured Cards)</td>
                        <td className="text-rose-900 font-bold">Asset Attachment / Salary Garnishment</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 4: Bank Eligibility, FOIR Limits & Underwriting Hurdles */}
            <section id="eligibility-foir-underwriting" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                4. Bank Eligibility, FOIR Calculations &amp; Underwriting Barriers
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                While debt consolidation sounds attractive in theory, the vast majority of financially distressed borrowers in India are <strong>legally and mathematically disqualified from obtaining a consolidation loan</strong>.
              </p>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                Indian commercial banks employ rigid credit risk scorecards centered around the <strong>Fixed Obligation to Income Ratio (FOIR)</strong>:
              </p>

              {/* FOIR Formula Box */}
              <div className="bg-slate-900 text-white p-5 rounded-2xl my-6">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>The Statutory FOIR Formula Used by Indian Lenders</span>
                </div>
                <div className="p-3 bg-white/10 rounded-xl text-center font-mono text-sm md:text-base text-blue-200 mb-3">
                  FOIR (%) = [ Total Existing Monthly EMIs + New Loan EMI ] / [ Net Monthly Take-Home Income ] &times; 100
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong>The 50% Hard Barrier:</strong> RBI prudential underwriting guidelines dictate that retail unsecured lending cannot push a borrower&apos;s FOIR beyond 50% to 55%. If your current EMIs exceed 50% of your take-home pay, or if your credit score is below 750, bank algorithms reject your consolidation loan instantly without human review.
                </p>
              </div>

              {/* Eligibility Comparison Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                  <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Consolidation Loan Underwriting Rules</span>
                  </h5>
                  <ul className="text-xs text-slate-600 space-y-2">
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span><strong>CIBIL Score:</strong> Strictly 750 or higher with zero 30+ DPD history.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span><strong>FOIR Limit:</strong> Total obligations must remain under 50% of verified salary.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Income Proof:</strong> 6 months salary slips, 1-year bank statements, Form 16 / ITR.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Employment:</strong> Minimum 2 years total work experience with 1 year at current firm.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                  <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-amber-600" />
                    <span>Loan Settlement (OTS) Eligibility Rules</span>
                  </h5>
                  <ul className="text-xs text-slate-600 space-y-2">
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>CIBIL Score:</strong> Any score (300 to 700+). Delinquency is expected.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Insolvency Proof:</strong> Verified job loss, medical bills, salary reduction, or business loss.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Lump Sum Capacity:</strong> Ability to pay 30% to 50% of dues via family or liquid assets.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Legal Intent:</strong> Willingness to execute binding compromise and receive official ₹0 NDC.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Compact High-Impact Infographic Banner (Between Sections 4 and 5) */}
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
                      Personal Loan Settlement vs Debt Consolidation: Strategic Process Overview
                    </h3>
                  </div>
                </div>
                <a
                  href="/images/infographics/loan-settlement-vs-debt-consolidation.jpg"
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
                    src="/images/infographics/loan-settlement-vs-debt-consolidation.jpg"
                    alt="Personal Loan Settlement vs Debt Consolidation Summary Infographic"
                    className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Quick Crux Footer Strip */}
              <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>
                    <strong>Key Takeaway:</strong> Consolidate if you have prime credit (750+) and affordable cash flows; settle via legal OTS if overleveraged to lock in 40%–70% debt waivers.
                  </span>
                </div>
                <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                  Get Free Case Evaluation &rarr;
                </Link>
              </div>
            </div>

            {/* Section 5: The "Consolidation Trap" vs. Strategic Settlement Execution */}
            <section id="consolidation-trap-vs-settlement" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                5. The Dangers of the &quot;Consolidation Trap&quot; vs. Strategic Settlement Execution
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                A critical behavioral finance trap that destroys thousands of Indian middle-class households every year is the <strong>Consolidation Trap</strong> (also known as <em>Double-Debt Overleveraging</em>).
              </p>

              {/* The Trap Mechanism Breakdown */}
              <div className="space-y-4 my-6">
                <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200">
                  <h4 className="font-bold text-rose-900 text-base mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-rose-600" />
                    How the Consolidation Trap Works
                  </h4>
                  <p className="text-sm text-rose-800 leading-relaxed mb-3">
                    A borrower takes a ₹10 Lakh consolidation loan to clear credit cards and smaller personal loans. Because the old credit card lines now show zero balances, the borrower feels a false sense of financial liquidity. When an unexpected emergency strikes, the borrower begins swiping the credit cards again while still burdened with the ₹25,000 monthly consolidation EMI.
                  </p>
                  <div className="p-3 bg-rose-100/80 rounded-xl text-xs text-rose-950 font-semibold">
                    <strong>Catastrophic Result:</strong> Within 12 to 18 months, the borrower ends up carrying the ₹10 Lakh consolidation loan PLUS ₹6 Lakhs in newly maxed-out credit cards—doubling their total debt to ₹16 Lakhs and triggering complete financial collapse.
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200">
                  <h4 className="font-bold text-emerald-900 text-base mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    How Strategic Debt Settlement Solves the Root Problem
                  </h4>
                  <p className="text-sm text-emerald-800 leading-relaxed mb-3">
                    Personal loan settlement permanently severs the cycle of borrowing. Under an OTS agreement, credit lines are canceled, the lender waives 40% to 70% of the dues, and the debt is extinguished permanently with an official ₹0 No Dues Certificate. The borrower enters a clean-slate financial environment with zero recurring monthly EMI liabilities.
                  </p>
                  <div className="p-3 bg-emerald-100/80 rounded-xl text-xs text-emerald-950 font-semibold">
                    <strong>Permanent Result:</strong> Complete freedom from debt interest, zero monthly EMI obligations, and immediate protection from bank litigation and recovery harassment.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: RBI Regulatory Framework & Legal Protections */}
            <section id="rbi-framework-legal-protections" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                6. RBI Regulatory Framework &amp; Legal Protection Under Indian Law
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Both debt consolidation and compromise settlements operate within the formal statutory framework established by the Reserve Bank of India. Knowing your rights ensures you cannot be coerced by unauthorized collection agents or predatory lenders.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                    <Landmark className="w-5 h-5 text-[#1F5EFF]" />
                    RBI Framework for Compromise Settlements and Technical Write-offs (June 8, 2023)
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Directs all regulated commercial banks, NBFCs, and urban cooperative banks to establish transparent, board-approved policies for executing One-Time Settlements (OTS) with distressed borrowers. It removes arbitrary branch discretion and legitimizes compromise settlements with principal haircuts for genuine hardship cases.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-emerald-600" />
                    RBI Master Direction on Recovery Agents &amp; Anti-Harassment Safeguards
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Strictly bars lenders and third-party recovery agencies from using abusive language, threatening physical intimidation, calling before 8:00 AM or after 7:00 PM, calling friends, relatives, or employers, or visiting workplaces without authorization. SettleLoans advocates issue formal cease-and-desist notices to bank nodal officers to halt unlawful harassment immediately.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                    <Scale className="w-5 h-5 text-amber-600" />
                    Legal Finality: Section 138 NI Act &amp; Lok Adalat Decrees
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    When personal loan EMIs or NACH mandates bounce, banks may issue legal notices under Section 138 of the Negotiable Instruments Act or Section 25 of the PSS Act. Executing a formal OTS agreement legally compels the lender to withdraw all pending criminal complaints. Furthermore, settlements ratified in <strong>Lok Adalats</strong> hold the force of a final Civil Court decree with zero right of subsequent appeal.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: 7-Point Diagnostic Decision Framework */}
            <section id="decision-framework-matrix" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                7. The 7-Point Diagnostic Decision Framework: Consolidation vs. Settlement
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                To determine which path is mathematically and legally optimal for your debt profile, evaluate your situation against our 7 diagnostic stress indicators:
              </p>

              {/* Decision Checklist Table */}
              <div className="my-8">
                <div className="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th>Diagnostic Parameter</th>
                        <th>Choose Debt Consolidation If:</th>
                        <th>Choose Loan Settlement (OTS) If:</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-bold text-slate-900">1. Current CIBIL Score</td>
                        <td className="text-blue-700 font-semibold">750 or higher with zero missed EMIs</td>
                        <td className="text-amber-700 font-semibold">Below 680, or already showing 30+ DPD</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">2. Fixed Obligation Ratio (FOIR)</td>
                        <td className="text-blue-700 font-semibold">Under 50% of monthly take-home salary</td>
                        <td className="text-amber-700 font-semibold">Exceeds 60%–70% of monthly income</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">3. Income Stability</td>
                        <td className="text-blue-700 font-semibold">Stable job with predictable future salary growth</td>
                        <td className="text-amber-700 font-semibold">Job loss, salary cut, business loss, or medical shock</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">4. Monthly Cash Flow</td>
                        <td className="text-blue-700 font-semibold">Sufficient surplus to afford single revised EMI</td>
                        <td className="text-amber-700 font-semibold">Deficit every month; borrowing to pay existing EMIs</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">5. Total Debt-to-Annual Income</td>
                        <td className="text-blue-700 font-semibold">Total debt is less than 1.5x annual income</td>
                        <td className="text-amber-700 font-semibold">Total debt exceeds 2.5x to 3x annual income</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">6. Future Major Borrowing Need</td>
                        <td className="text-blue-700 font-semibold">Planning a home mortgage in next 12–24 months</td>
                        <td className="text-amber-700 font-semibold">No major borrowing planned; focus is solvency</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">7. Primary Financial Priority</td>
                        <td className="text-blue-700 font-semibold">Preserve credit rating and streamline payments</td>
                        <td className="text-amber-700 font-semibold">Stop legal harassment &amp; eliminate debt liability</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 8: Step-by-Step Action Blueprints for Both Routes */}
            <section id="step-by-step-execution-blueprints" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                8. Step-by-Step Action Blueprints: How to Execute Either Strategy Safely
              </h2>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                Regardless of which pathway matches your diagnostic evaluation, proper legal and administrative execution is critical to avoid costly mistakes.
              </p>

              {/* Two Blueprints Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                {/* Blueprint A: Consolidation */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                  <h3 className="text-base font-black text-slate-900 flex items-center gap-2 mb-4">
                    <RefreshCw className="w-5 h-5 text-[#1F5EFF]" />
                    <span>Consolidation Execution Blueprint</span>
                  </h3>
                  <ol className="text-xs text-slate-600 space-y-3.5">
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1F5EFF] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                      <div>
                        <strong>Audit Total Liabilities:</strong> Calculate exact outstanding principal, foreclosure charges, and weighted interest rates across all loans.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1F5EFF] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                      <div>
                        <strong>Shop for Low-Cost Facility:</strong> Compare personal loan balance transfers, top-up home loans, or gold loan options to secure minimum interest rates.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1F5EFF] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                      <div>
                        <strong>Direct Disbursal to Creditors:</strong> Instruct the new lender to disburse funds directly to old loan accounts to prevent fund leakage.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1F5EFF] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                      <div>
                        <strong>Collect Closure Letters:</strong> Obtain formal closure certificates from each previous lender and close old credit card accounts.
                      </div>
                    </li>
                  </ol>
                </div>

                {/* Blueprint B: Settlement */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                  <h3 className="text-base font-black text-slate-900 flex items-center gap-2 mb-4">
                    <Scale className="w-5 h-5 text-amber-600" />
                    <span>Legal Settlement (OTS) Blueprint</span>
                  </h3>
                  <ol className="text-xs text-slate-600 space-y-3.5">
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                      <div>
                        <strong>Legal Hardship Representation:</strong> SettleLoans advocates draft and serve formal hardship notices under RBI Fair Practices Code.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                      <div>
                        <strong>Anti-Harassment Shield:</strong> Issue cease-and-desist notices to bank nodal officers to stop unauthorized agent calls and visits.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                      <div>
                        <strong>Negotiate 40%–70% Haircuts:</strong> Multi-round institutional negotiations with bank Stressed Asset Resolution Branches (SARB).
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 font-bold flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                      <div>
                        <strong>Official Bank Sanction &amp; ₹0 NDC:</strong> Deposit settlement funds directly into your loan account and receive official No Dues Certificates.
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Company Section Placement (Directly before FAQ) */}
            <CompanySection />

            {/* Section 9: Frequently Asked Questions Accordion */}
            <section id="faqs" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                9. Frequently Asked Questions: Loan Settlement vs Debt Consolidation
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

            {/* Section 10: Official Regulatory Sources & Legal Citations */}
            <div className="my-10 p-6 bg-slate-50 border border-slate-200 rounded-2xl">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                <Landmark className="w-4 h-4 text-[#1F5EFF]" />
                <span>Statutory References &amp; Official Regulatory Sources</span>
              </h4>
              <ul className="text-xs text-slate-600 space-y-2">
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Reserve Bank of India (RBI):</strong> Framework for Compromise Settlements and Technical Write-offs (RBI/2023-24/40 DOR.STR.REC.20/21.04.048/2023-24).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Reserve Bank of India (RBI):</strong> Master Direction on Recovery Agents and Fair Practices Code for Regulated Entities (RBI/2022-23/108).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Statutory reporting rules for TransUnion CIBIL, Experian, CRIF High Mark, and Equifax.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Negotiable Instruments Act, 1881:</strong> Section 138 statutory defense and legal quashing through compromise settlement.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Legal Services Authorities Act, 1987:</strong> Finality and civil court enforceability of Lok Adalat compromise awards.
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 11: Internal Topic Badges (10 Links) */}
            <div className="my-10 pt-6 border-t border-slate-200">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
                Related Debt Resolution &amp; Financial Planning Guides
              </h4>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/personal-loan-settlement-vs-restructuring"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Settlement vs Restructuring
                </Link>
                <Link
                  href="/personal-loan-settlement-vs-closure"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Settlement vs Closure
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Settlement CIBIL Impact
                </Link>
                <Link
                  href="/personal-loan-settlement-percentage"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Settlement Percentage
                </Link>
                <Link
                  href="/how-to-avoid-loan-settlement-scams"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  How to Avoid Loan Settlement Scams
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Can I Go to Jail for Loan Default?
                </Link>
                <Link
                  href="/recovery-agent-visiting-workplace-office"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Recovery Agent Visiting Office Rules
                </Link>
                <Link
                  href="/section-138-cheque-bounce-loan-default"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Section 138 Cheque Bounce Loan Default
                </Link>
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Lok Adalat Notice for Personal Loan
                </Link>
                <Link
                  href="/missed-emi-guide-to-regain-control"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Missed EMI Guide to Regain Control
                </Link>
              </div>
            </div>
          </main>

          {/* Right Column (Sidebar Cards) */}
          <aside className="w-full sticky top-24 space-y-6">
            {/* Card 1: Author Bio Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black text-sm flex items-center justify-center shadow-sm">
                  AJ
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm leading-tight">
                    <Link
                      href="/authors/ashish-jhangra"
                      className="hover:text-[#1F5EFF] transition-colors"
                    >
                      Ashish Jhangra
                    </Link>
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Debt Settlement Strategist &amp; Legal Advocate
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Specializing in bank compromise negotiations, multi-loan portfolio restructuring, RBI compliance, and CIBIL score forensic dispute resolution for borrowers across India.
              </p>
              <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
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

            {/* Card 2: Emergency Legal Defense CTA */}
            <div className="bg-gradient-to-br from-[#1F5EFF] to-blue-700 text-white rounded-2xl p-5 shadow-md">
              <div className="flex items-center gap-1.5 text-blue-100 text-[11px] font-bold uppercase tracking-wider mb-2">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Emergency Advocate Assistance</span>
              </div>
              <h3 className="text-lg font-black mb-2 leading-tight">
                Overwhelmed by Multiple EMIs or Collection Harassment?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed mb-4">
                Don&apos;t take another high-interest loan to pay old debts. Speak with an empaneled SettleLoans advocate to stop illegal harassment and negotiate lawful OTS settlements with 40%–70% waivers.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white hover:bg-slate-100 text-[#1F5EFF] font-bold py-2.5 px-4 rounded-xl text-xs transition-all duration-200 shadow"
              >
                Talk to a Legal Advocate
              </Link>
            </div>

            {/* Card 3: Trust Signals Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                <span>Why Borrowers Trust SettleLoans</span>
              </h4>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Legal Protection:</strong> Formal hardship representations served under RBI Fair Practices Code.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Shield:</strong> Immediate cessation of unauthorized recovery agent calls and visits.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct Bank Sanctions:</strong> All settlement letters verified on official bank letterhead with ₹0 NDC guarantee.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>No Advance Haircut Fee:</strong> Ethical, transparent legal advisory engineered to protect borrower dignity.
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
