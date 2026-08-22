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

export default function CreditCardVsPersonalLoanSettlementClient() {
  const [activeId, setActiveId] = useState<string>('debt-architecture-comparison');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'debt-architecture-comparison', title: '1. Card vs. Loan Architecture' },
    { id: 'bank-accounting-provisioning', title: '2. Bank Accounting & NPA Rules' },
    { id: 'settlement-haircuts-discount-depth', title: '3. Haircut Depth Comparison' },
    { id: 'legal-exposure-recovery-tactics', title: '4. Legal Risk: Sec 138 vs Civil' },
    { id: 'strategic-debt-triage-priority', title: '5. Strategic Debt Prioritization' },
    { id: 'npv-decision-modeling', title: '6. NPV & Bank Settlement Math' },
    { id: 'cibil-credit-bureau-recovery', title: '7. CIBIL Bureau & Score Rebuilding' },
    { id: 'step-by-step-multi-debt-protocol', title: '8. Multi-Debt Action Protocol' },
    { id: 'settleloans-defense-framework', title: '9. Legal Defense & Representation' },
    { id: 'faqs', title: '10. Frequently Asked Questions' },
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
      question: "What is the primary difference between credit card settlement and personal loan settlement?",
      answer: (
        <p>
          The primary difference lies in the compounding interest structure, bank provisioning autonomy, and haircut depth. Credit card debt consists heavily of high compounding interest (42%–48% APR), late payment penalties, and GST, allowing banks to offer deep discounts of 50% to 75%. Personal loan settlement deals with disbursed fixed capital at lower contractual interest (12%–24%), resulting in typical settlement haircuts of 35% to 60% of outstanding principal.
        </p>
      )
    },
    {
      question: "Why do credit cards offer higher settlement discounts than personal loans?",
      answer: (
        <p>
          Credit cards offer larger discounts because after 90 to 180 days of default, banks classify revolving card debt as charged-off loss assets with 100% provisioning. Furthermore, 40% to 60% of accumulated credit card balances often represent accrued finance charges and late fees rather than original disbursed capital, giving bank credit card recovery divisions broader discretionary waiver authority.
        </p>
      )
    },
    {
      question: "Which debt should I prioritize settling first if I have limited cash?",
      answer: (
        <p>
          If you have limited liquid funds, prioritize settling debts carrying active legal notice exposure (such as Section 138 NI Act or Section 25 PSS Act NACH bounce notices common in personal loans) to eliminate criminal summons risk. If legal risk is equal, prioritize credit card settlement to maximize direct cash savings through 50%–75% discounts and halt aggressive 4% monthly interest compounding.
        </p>
      )
    },
    {
      question: "Is credit card settlement easier to negotiate than personal loan settlement?",
      answer: (
        <p>
          Yes. Credit card collections are managed by specialized unsecured card recovery units with pre-approved settlement matrix grids. Because card debt is completely revolving and unsecured, banks are eager to recover raw principal quickly. Personal loan settlements require multi-tier branch or zonal risk committee approvals, making them slightly more structured and time-intensive.
        </p>
      )
    },
    {
      question: "Can a bank file a Section 138 cheque bounce case for unpaid credit card bills?",
      answer: (
        <p>
          Generally no, unless you physically issued a security cheque that subsequently bounced upon presentation. Credit card accounts operate through electronic cardholder agreements rather than post-dated cheques. However, personal loans mandate automated NACH e-mandates, which routinely trigger Section 25 of the Payment and Settlement Systems Act or Section 138 proceedings upon default.
        </p>
      )
    },
    {
      question: "How does credit card settlement impact my CIBIL score compared to loan settlement?",
      answer: (
        <p>
          Both credit card and personal loan settlements result in a &quot;Settled&quot; or &quot;Post (WO) Settled&quot; remark on your credit bureau report and an immediate score drop of 75 to 150 points. However, settling credit cards terminates high revolving credit utilization (CUR) reporting, which actually speeds up bureau recovery once a secured credit rebuilding protocol is initiated.
        </p>
      )
    },
    {
      question: "Can I settle both credit cards and personal loans simultaneously with one legal firm?",
      answer: (
        <p>
          Yes. Professional debt settlement platforms like SettleLoans represent borrowers with multi-lender portfolios simultaneously. Empaneled advocates serve formal hardship representations under RBI Fair Practices Code, halt recovery agent harassment across all accounts, negotiate maximum statutory haircuts, and secure verified ₹0 No Dues Certificates for both cards and loans.
        </p>
      )
    },
    {
      question: "What documents are required to prove financial hardship for card and loan settlements?",
      answer: (
        <p>
          To establish genuine financial distress under RBI compromise settlement guidelines, you need to provide bank account statements showing income loss or cash exhaustion, salary reduction or job termination letters, medical diagnosis/hospitalization bills, business closure proof (GST cancellation/ITR returns), or evidence of dependent family crises.
        </p>
      )
    },
    {
      question: "Can I convert 'Settled' remarks to 'Closed' in CIBIL after settling credit cards and loans?",
      answer: (
        <p>
          Yes. Once your financial situation improves in the future, you can approach the original lender, pay the previously waived haircut amount, and request a comprehensive Final No Dues Certificate. Under CICRA regulations, the lender is legally required to update your bureau status from &quot;Settled&quot; to &quot;Closed - Fully Paid&quot;.
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
            Multi-Debt Strategic Comparison &amp; Settlement Priority 2026
          </div>

          {/* H1 Headline */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            Credit Card vs Personal Loan Settlement:{' '}
            <span className="text-[#3b82f6] md:text-[#60a5fa]">Difference, Haircut Depth &amp; Priority</span>
          </h1>

          {/* Subtitle / Direct Answer Snippet */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Holding both credit card debt and personal loans with limited liquid cash? Compare 50%–75% credit card discounts against 35%–60% loan haircuts, understand legal exposure differences under Section 138, and learn which debt to settle first.
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
              <span>Updated: August 22, 2026</span>
            </div>
          </div>

          {/* Primary Hero CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-sm md:text-base group"
            >
              <span>Evaluate My Multi-Debt Portfolio Free</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#debt-architecture-comparison"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold py-3 px-5 rounded-xl transition-all duration-300 text-sm"
            >
              <BookOpen className="w-4 h-4 text-blue-300" />
              <span>Read Settlement Comparison</span>
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
            {/* Section 1: Structural Debt Architecture Differences */}
            <section id="debt-architecture-comparison" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                1. Revolving Credit Cards vs. Fixed Term Personal Loans: Structural Differences
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Borrowers facing acute liquidity stress in India often carry a toxic combination of unsecured credit cards and personal loans across multiple commercial banks. Understanding the fundamental architectural differences between revolving credit card lines and amortized personal loans is essential for determining your negotiation leverage, projected settlement haircuts, and debt settlement priority.
              </p>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                A personal loan is a closed-end contractual credit facility. The bank disburses a lump sum of raw capital directly into your savings account, which is amortized over a fixed tenure of 12 to 60 months with Equated Monthly Installments (EMIs) calculated on a reducing balance basis at interest rates typically ranging between 11% and 24% per annum. Conversely, a credit card is an open-end revolving credit line. Cardholders borrow against an assigned limit, and if the total balance is not paid within the grace period, finance charges compound monthly at annualized percentage rates (APR) between 42% and 48%, coupled with 18% Goods and Services Tax (GST) on all accrued interest and late payment penalties.
              </p>

              {/* Side-by-Side Structural Comparison Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
                <div className="bg-blue-50/70 border border-blue-200 p-6 rounded-2xl">
                  <div className="flex items-center gap-2 text-blue-900 font-bold text-lg mb-2">
                    <CreditCard className="w-5 h-5 text-[#1F5EFF]" />
                    <span>Credit Card Debt Profile</span>
                  </div>
                  <p className="text-sm text-blue-950 font-medium mb-3">
                    Revolving unsecured credit with monthly compounding finance charges, steep late fees, and rapid balance inflation.
                  </p>
                  <ul className="text-xs text-blue-900 space-y-2">
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Interest Mechanism:</strong> 3.5%–4.0% per month (42%–48% APR) plus 18% GST compounding on rolling dues.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Balance Composition:</strong> 40%–60% of delinquent statement balance consists of phantom finance fees and penalties.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Settlement Haircut:</strong> Typically <strong>50% to 75%</strong> discount on total accumulated statement dues.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Legal Instrument:</strong> Electronic cardholder agreement; rarely backed by post-dated cheques or NACH.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-50/70 border border-amber-200 p-6 rounded-2xl">
                  <div className="flex items-center gap-2 text-amber-900 font-bold text-lg mb-2">
                    <Landmark className="w-5 h-5 text-amber-600" />
                    <span>Personal Loan Debt Profile</span>
                  </div>
                  <p className="text-sm text-amber-950 font-medium mb-3">
                    Disbursed principal capital with fixed monthly amortization, reducing balance interest, and statutory e-mandates.
                  </p>
                  <ul className="text-xs text-amber-900 space-y-2">
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Interest Mechanism:</strong> 11%–24% reducing balance APR with fixed contractual EMI schedule.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Balance Composition:</strong> 70%–85% of delinquent balance represents raw disbursed principal capital.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Settlement Haircut:</strong> Typically <strong>35% to 60%</strong> discount on outstanding loan principal.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Legal Instrument:</strong> Mandatory signed NACH / e-mandate allowing statutory Section 25/138 notices.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2: Banking Accounting & NPA Provisioning */}
            <section id="bank-accounting-provisioning" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                2. Banking Accounting &amp; Provisioning: How Lenders Treat Default
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Under the Reserve Bank of India Master Circular on Prudential Norms on Income Recognition, Asset Classification and Provisioning pertaining to Advances (IRACP), scheduled commercial banks and Non-Banking Financial Companies (NBFCs) must follow strict statutory guidelines when classifying delinquent accounts. When a borrower misses payments, both credit cards and personal loans progress through Special Mention Account buckets: SMA-0 (1 to 30 days overdue), SMA-1 (31 to 60 days overdue), and SMA-2 (61 to 90 days overdue). At 90 days past due (DPD), the account is formally classified as a Non-Performing Asset (NPA).
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                However, internal banking accounting diverges sharply once an account crosses the 90-day NPA threshold. Because credit cards are revolving retail instruments with zero collateral and minimal legal recovery prospects, major private and public sector banks (including HDFC Bank, ICICI Bank, SBI, Axis Bank, and Kotak Mahindra Bank) subject credit cards to aggressive charge-off schedules. By 120 to 180 days of default, credit card balances are categorized as loss assets and 100% provisioned on the bank balance sheet.
              </p>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                Once an asset is 100% provisioned, any recovery achieved through a One-Time Settlement (OTS) is booked directly as clean, immediate non-interest profit. Consequently, bank credit card recovery managers have extensive decentralized mandate powers to authorize deep settlement haircuts without requiring board-level sign-offs. Personal loans, conversely, undergo standard provisioning of 15% to 25% during the sub-standard phase, and retail credit committees enforce stricter floor recovery thresholds to safeguard disbursed principal capital.
              </p>
            </section>

            {/* Section 3: Haircut Depth Comparison */}
            <section id="settlement-haircuts-discount-depth" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                3. Settlement Haircut Depth: Why Credit Cards Offer 50%–75% Discounts vs. 35%–60% on Loans
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                The most critical mathematical reality in Indian debt resolution is that credit card settlements consistently yield substantially larger percentage haircuts than personal loan settlements. This discrepancy is not arbitrary; it is rooted directly in balance composition and bank recovery economics.
              </p>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                When a borrower defaults on a ₹3,00,000 credit card limit for 6 to 9 months, the statement balance rapidly balloons to ₹5,20,000 due to 48% APR compounding, monthly late payment charges of ₹1,200 to ₹1,500, over-limit penalties, and 18% GST. The bank recognizes that ₹2,20,000 of the outstanding total represents artificial accounting interest. When SettleLoans advocates present formal hardship representation, the bank readily waives the entire ₹2,20,000 penalty component, plus an additional 30% to 50% discount on the original ₹3,00,000 principal. This results in an effective 65% to 75% overall haircut from gross statement dues.
              </p>

              {/* 4-Sided Bordered Comparison Table */}
              <div className="my-8">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                  Financial Settlement Simulation: ₹5,00,000 Default Balance Comparison
                </h3>
                <div className="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th>Financial Parameter</th>
                        <th>Credit Card Settlement</th>
                        <th>Personal Loan Settlement</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-bold text-slate-900">Original Principal Disbursed / Used</td>
                        <td>₹3,10,000</td>
                        <td>₹5,00,000</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Accrued Interest &amp; Penal Charges (9 Mos)</td>
                        <td>₹1,90,000 (42% APR + GST + Penalties)</td>
                        <td>₹65,000 (Contractual EMI Arrears + Bounce Fees)</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Total Delinquent Dues on Bank Books</td>
                        <td className="font-semibold text-slate-900">₹5,00,000</td>
                        <td className="font-semibold text-slate-900">₹5,65,000</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Waiver on Penal Charges &amp; Interest</td>
                        <td className="text-emerald-700 font-bold">100% Waived (-₹1,90,000)</td>
                        <td className="text-emerald-700 font-bold">100% Waived (-₹65,000)</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Principal Haircut Negotiated by Advocates</td>
                        <td className="text-emerald-700 font-bold">45% Principal Haircut (-₹1,39,500)</td>
                        <td className="text-emerald-700 font-bold">40% Principal Haircut (-₹2,00,000)</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Final One-Time Settlement (OTS) Amount</td>
                        <td className="text-[#1F5EFF] font-black text-base">₹1,70,500</td>
                        <td className="text-[#1F5EFF] font-black text-base">₹3,00,000</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Effective Total Discount Percentage</td>
                        <td className="bg-emerald-50 text-emerald-800 font-black">65.9% Total Haircut</td>
                        <td className="bg-blue-50 text-blue-800 font-black">46.9% Total Haircut</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Settlement Approval Authority</td>
                        <td>Card Unit Zonal Manager (Fast Track: 15–25 Days)</td>
                        <td>Branch &amp; Credit Committee (Standard: 30–45 Days)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 4: Legal Exposure & Recovery Agency Tactics */}
            <section id="legal-exposure-recovery-tactics" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                4. Legal Exposure &amp; Recovery Agency Tactics: Section 138 vs. Civil Debt Recovery
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                When borrowers default simultaneously on credit cards and personal loans, recovery dynamics and legal exposure differ substantially. Personal loans carry structured statutory enforcement mechanisms because banks mandate pre-authorized National Automated Clearing House (NACH) e-mandates or physical post-dated cheques prior to loan disbursal.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                When a personal loan EMI bounces due to insufficient funds, the lender can initiate quasi-criminal proceedings under Section 25 of the Payment and Settlement Systems Act, 2007 (PSS Act) or Section 138 of the Negotiable Instruments Act, 1881. The bank issues a mandatory 30-day statutory demand notice through legal counsel, followed by filing a formal complaint before a Judicial Magistrate. If ignored, the court may issue bailable summons.
              </p>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                In contrast, credit card accounts rarely involve pre-signed cheques or NACH mandates. A default on a credit card constitutes a civil breach of contract rather than a criminal offence. Lenders cannot file Section 138 or Section 25 PSS Act complaints for card defaults unless you issued a physical cheque that subsequently dishonoured. Instead, credit card recovery divisions rely heavily on external collection agencies, pre-litigation Lok Adalat notices, or unilateral arbitration proceedings. Knowing these statutory distinctions is vital for protecting your legal rights under the RBI Fair Practices Code.
              </p>
            </section>

            {/* Custom High-Impact Infographic Banner */}
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
                      Credit Card vs Personal Loan Settlement Matrix
                    </h3>
                  </div>
                </div>
                <a
                  href="/images/infographics/credit-card-vs-personal-loan-settlement.jpg"
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
                    src="/images/infographics/credit-card-vs-personal-loan-settlement.jpg"
                    alt="Credit Card vs Personal Loan Settlement Comparison Infographic"
                    className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Quick Crux Footer Strip */}
              <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span><strong>Key Takeaway:</strong> Credit cards offer 50%–75% discounts; personal loans require early legal response to Section 138 summons.</span>
                </div>
                <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                  Get Free Case Evaluation &rarr;
                </Link>
              </div>
            </div>

            {/* Section 5: Strategic Debt Triage Playbook */}
            <section id="strategic-debt-triage-priority" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                5. Strategic Debt Triage: Which Debt Should You Settle First with Limited Cash?
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                When a borrower holds multiple delinquent credit cards and personal loans but possesses only a limited cash reserve (such as provident fund withdrawal, family assistance, or liquidated gold), deploying those funds without a strategic triage plan leads to catastrophic misallocation. Paying a small amount to every bank satisfies no creditor and leaves you exposed to both legal summons and aggressive collection harassment.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                SettleLoans employs a 3-tier triage diagnostic to maximize cash efficiency and extinguish legal liability in strict order of strategic necessity:
              </p>

              {/* Triage Diagnostic Breakdown */}
              <div className="space-y-4 my-6">
                <div className="p-5 rounded-2xl bg-rose-50/80 border border-rose-200">
                  <h4 className="font-bold text-rose-900 text-base mb-1.5 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-rose-600" />
                    <span>Priority 1: Active Statutory Legal Exposure (Personal Loans with Sec 138/25 Notices)</span>
                  </h4>
                  <p className="text-xs text-rose-950 leading-relaxed">
                    If an NBFC or bank has issued a formal advocate notice under Section 138 of the Negotiable Instruments Act or Section 25 of the PSS Act, this debt must be addressed first. SettleLoans advocates engage the lender recovery division immediately to negotiate a compromise OTS and secure an official withdrawal of court proceedings upon settlement execution.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200">
                  <h4 className="font-bold text-emerald-900 text-base mb-1.5 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                    <span>Priority 2: Deepest Discount Leverage (Charged-Off Credit Cards at 65%–75% Haircut)</span>
                  </h4>
                  <p className="text-xs text-emerald-950 leading-relaxed">
                    Once criminal litigation exposure is neutralized, allocate liquid cash to settled credit cards. Because credit card divisions offer deep 65%–75% discounts on charged-off accounts, a ₹4,00,000 credit card debt can frequently be extinguished for ₹1,20,000 to ₹1,40,000, immediately eliminating high-velocity interest compounding.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-blue-50/80 border border-blue-200">
                  <h4 className="font-bold text-blue-900 text-base mb-1.5 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-blue-600" />
                    <span>Priority 3: Secondary Unsecured Loans &amp; Fintech Digital Credit Lines</span>
                  </h4>
                  <p className="text-xs text-blue-950 leading-relaxed">
                    Remaining personal loans and digital app lines are placed under formal legal representation under the RBI Fair Practices Code. Advocates maintain communication with lenders, stall coercive collection, and negotiate staggered multi-month OTS terms as new cash reserves accumulate.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: NPV & Bank Settlement Accounting Math */}
            <section id="npv-decision-modeling" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                6. Net Present Value (NPV) &amp; Risk Modeling: Inside the Bank's Settlement Committee
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                To negotiate effectively, borrowers must understand how bank recovery committees evaluate settlement proposals. Lenders do not make settlement decisions based on emotional pleas; they utilize Net Present Value (NPV) recovery modeling to assess whether accepting an immediate discounted cash offer yields a higher risk-adjusted return than pursuing protracted legal litigation.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                The bank risk committee calculates the expected recovery value of civil litigation using the following discounted cash flow formula:
              </p>
              
              {/* Highlighted Math Callout Box */}
              <div className="bg-slate-900 text-white p-6 rounded-2xl my-6 border border-slate-700 shadow-sm">
                <div className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-2">
                  Bank Settlement Committee NPV Formula
                </div>
                <div className="text-sm sm:text-base md:text-lg font-mono text-center my-4 text-blue-200 tracking-wide bg-slate-800/80 py-3 px-4 rounded-xl border border-slate-700">
                  NPV Recovery = [ (Estimated Recovery × P_success) − Legal Costs ] / (1 + r)^t
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-3">
                  Where <strong>P_success</strong> is the probability of recovering funds through court litigation, <strong>Legal Costs</strong> include advocate retainers and court fees, <strong>r</strong> represents the bank&apos;s cost of capital, and <strong>t</strong> is the litigation duration in years.
                </p>
              </div>

              <p className="text-base leading-relaxed mb-6 text-slate-700">
                For unsecured credit cards, the probability of recovery through civil courts is exceptionally low (often below 15%), while litigation costs exceed projected recoveries. This mathematical reality creates significant downward pressure on the bank&apos;s reserve price, allowing SettleLoans advocates to lock in aggressive OTS terms. For personal loans, while recovery probabilities are moderately higher due to banking relationships, the time value of money and mounting legal costs still compel lenders to accept reasonable compromise settlements.
              </p>
            </section>

            {/* Section 7: CIBIL Bureau & Credit Rehabilitation */}
            <section id="cibil-credit-bureau-recovery" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                7. Credit Bureau Reporting &amp; CIBIL Score Trajectory Post-Settlement
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Both credit card and personal loan settlements result in a &quot;Settled&quot; or &quot;Post (WO) Settled&quot; status being transmitted to all four RBI-licensed credit information companies in India: TransUnion CIBIL, Experian, Equifax, and CRIF High Mark. While both settlements cause an immediate CIBIL score drop of 75 to 150 points, their structural impact on your ongoing credit profile differs.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                When a delinquent credit card is settled, the card account is permanently closed, and the high Credit Utilization Ratio (CUR)—which was previously reported at 120% to 150% of the limit—is eliminated. Removing maxed-out revolving credit balances immediately stops ongoing bureau score erosion. For personal loans, the account is marked with a ₹0 current balance and a closed date, terminating delinquent DPD counters.
              </p>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                Rebuilding your credit profile after settling dual debts requires a structured 24-month protocol. Within 30 to 45 days post-settlement, ensure all lenders issue verified No Dues Certificates. Next, open a fixed-deposit-backed secured credit card (such as an FD card with 90% credit limit) and maintain a strict utilization ratio below 25%, paying all statements in full on time. By following this protocol, borrowers consistently rebuild their CIBIL score back above 750 within 18 to 24 months.
              </p>
            </section>

            {/* Section 8: Step-by-Step Multi-Debt Action Protocol */}
            <section id="step-by-step-multi-debt-protocol" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                8. Step-by-Step Multi-Debt Settlement Negotiation Protocol
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Successfully resolving a multi-lender portfolio requires disciplined execution across five systematic phases to ensure complete legal compliance and authentic bank documentation:
              </p>

              <div className="space-y-4 my-6">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-base mb-1.5">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">1</span>
                    <span>Cease Partial Minimum Payments &amp; Conserve Capital</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Stop paying minimum amount due (MAD) on credit cards or token EMI amounts on personal loans. Partial payments are consumed entirely by finance charges without reducing principal or advancing settlement discussions. Pool all available cash into a dedicated settlement reserve fund.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-base mb-1.5">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">2</span>
                    <span>Issue Legal Hardship Representations &amp; Anti-Harassment Notices</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Empaneled advocates serve formal hardship notices under RBI compromise guidelines to each lender. Notices establish an anti-harassment shield under the RBI Fair Practices Code, mandating that collection agents cease calling relatives, contacting employers, or visiting residences.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-base mb-1.5">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">3</span>
                    <span>Execute Dual-Track Negotiations with Card &amp; Retail Committees</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Advocates run simultaneous negotiations. Credit card charge-offs are negotiated for 60%–75% discounts with fast-track card units, while personal loan files are presented to zonal retail credit committees for 40%–60% principal haircuts.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-base mb-1.5">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">4</span>
                    <span>Forensic Verification of Bank OTS Sanction Letters</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Never deposit settlement funds based on verbal promises or collection agency emails. Advocates authenticate the official bank sanction letter, verifying that it contains the borrower name, loan account number, explicit settlement amount, payment schedule, and an irrevocable ₹0 balance release clause.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-base mb-1.5">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">5</span>
                    <span>Remittance to Official Bank Accounts &amp; NDC Acquisition</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Remit settlement funds directly to the lender&apos;s designated loan account via RTGS/NEFT or bank portal. Secure the official No Dues Certificate (NDC) within 30 to 45 days, confirming complete legal discharge and initiation of bureau status updates.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: SettleLoans Legal Defense & Representation */}
            <section id="settleloans-defense-framework" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                9. SettleLoans Multi-Lender Defense Framework &amp; Representation
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Managing multi-lender debt negotiations independently while facing aggressive collection agents is intimidating and legally risky. SettleLoans provides a comprehensive institutional defense framework designed to protect your dignity, preserve your rights, and achieve maximum lawful debt reduction.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Our empaneled team of legal advocates represents borrowers across all major public banks, private financial institutions, and NBFCs in India. We handle all direct creditor communications, quash illegal collection harassment through formal statutory notices, draft robust legal responses to Section 138 and Section 25 PSS Act demand notices, and structure compromise agreements that eliminate up to 75% of your total outstanding debt.
              </p>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                With SettleLoans, every settlement is backed by verified bank sanction letters and official ₹0 No Dues Certificates, providing you with a clean financial slate and a roadmap to complete credit recovery.
              </p>
            </section>

            {/* Company Section Component */}
            <CompanySection />

            {/* Section 10: Interactive FAQ Accordion */}
            <section id="faqs" className="scroll-mt-28 my-12">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-50 border border-blue-200 text-[#1F5EFF] text-xs font-black uppercase tracking-wider mb-2">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Got Questions?</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                  Frequently Asked Questions: Credit Card vs Personal Loan Settlement
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Clear, authoritative answers to the most common legal, banking, and financial questions regarding multi-debt resolution.
                </p>
              </div>

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

            {/* Section 11: Official Regulatory Sources & Legal Citations */}
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
                    <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Statutory reporting guidelines for TransUnion CIBIL, Experian, CRIF High Mark, and Equifax.
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
                    <strong>Payment and Settlement Systems Act, 2007:</strong> Section 25 dishonour of electronic fund transfer provisions and dispute remedies.
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 12: Internal Topic Badges (10 Links) */}
            <div className="my-10 pt-6 border-t border-slate-200">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
                Related Debt Resolution &amp; Financial Planning Guides
              </h4>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/loan-settlement-vs-debt-consolidation"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Loan Settlement vs Debt Consolidation
                </Link>
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
                  href="/how-to-settle-credit-card-debt"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  How to Settle Credit Card Debt
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
                  href="/section-138-cheque-bounce-loan-default"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Section 138 Cheque Bounce Loan Default
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Settlement CIBIL Impact
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  No Dues Certificate After Settlement
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
                Overwhelmed by Credit Cards &amp; Loan EMIs?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed mb-4">
                Stop juggling multiple repayments. Speak with an empaneled SettleLoans advocate to stop illegal harassment and negotiate lawful OTS settlements with 40%–75% waivers across all your accounts.
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
