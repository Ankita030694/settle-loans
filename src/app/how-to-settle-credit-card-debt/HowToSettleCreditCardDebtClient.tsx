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
  PieChart,
  Flame,
  Coins,
  Ban,
  TrendingDown
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

export default function HowToSettleCreditCardDebtClient() {
  const [activeId, setActiveId] = useState<string>('credit-card-trap-apr-math');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'credit-card-trap-apr-math', title: '1. The 42% APR Minimum-Due Trap' },
    { id: 'card-vs-loan-settlement-differences', title: '2. Credit Card vs. Personal Loan Differences' },
    { id: 'delinquency-npa-lifecycle', title: '3. 90-Day Delinquency & NPA Lifecycle' },
    { id: 'mathematical-simulation-workout', title: '4. ₹5 Lakh Debt Workout Simulation' },
    { id: 'infographic-roadmap-overview', title: '5. Legal Settlement Roadmap Graphic' },
    { id: 'step-by-step-settlement-blueprint', title: '6. 7-Step Legal Settlement Blueprint' },
    { id: 'rbi-regulations-anti-harassment', title: '7. RBI Anti-Harassment Protections' },
    { id: 'bank-specific-settlement-realities', title: '8. Bank-Specific Settlement Realities' },
    { id: 'cibil-rehabilitation-ndc-verification', title: '9. CIBIL Rebuilding & ₹0 NDC Audit' },
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
      question: "Why is it harder to pay off credit card debt by paying only the Minimum Amount Due (MAD)?",
      answer: (
        <p>
          The <strong>Minimum Amount Due (MAD)</strong> is mathematically engineered to protect the lender&apos;s yield while keeping the borrower indebted for decades. In India, MAD is calculated at approximately <strong>5% of the total outstanding balance</strong> (or accumulated interest + taxes + 1% of principal). Because credit cards levy <strong>36% to 42% annualized compounding finance charges (3.0% to 3.5% per month) plus 18% GST</strong> from the date of each swipe once the balance revolves, over 80% to 90% of your monthly payment goes toward service charges and taxes. Clearing a ₹3 Lakhs balance by paying only the minimum due takes over <strong>18 to 22 years</strong> and results in paying more than ₹10 Lakhs in total cash outgo.
        </p>
      )
    },
    {
      question: "How does credit card debt settlement differ from personal loan settlement?",
      answer: (
        <p>
          Personal loans are closed-ended term facilities with fixed monthly EMIs and a rigid principal amortization schedule. In personal loans, default occurs on a verifiable, fixed principal balance. Conversely, credit cards are <strong>unsecured revolving credit facilities</strong> where 40% to 60% of a delinquent balance consists of <strong>&quot;phantom debt&quot;</strong> (compounding finance charges, late payment penalties, over-limit fees, and 18% GST). In a credit card settlement, banks have much wider margin elasticity to waive 100% of interest, penal fees, and GST, agreeing to a <strong>40% to 70% haircut on the actual principal spend</strong>. Furthermore, standard credit cards do not involve auto-debit NACH mandates or cheques, eliminating criminal Section 138 bounce exposure.
        </p>
      )
    },
    {
      question: "Can banks file a Section 138 cheque bounce case for unpaid credit card bills?",
      answer: (
        <p>
          <strong>No, for standard revolving card bills.</strong> In India, credit cards are issued without post-dated cheques (PDCs). Therefore, non-payment of regular monthly statements is a purely civil contractual dispute and cannot trigger Section 138 Negotiable Instruments Act criminal proceedings. However, if you explicitly converted large card transactions into an EMI plan backed by an auto-debit NACH mandate that bounced, or if you handed over a physical settlement cheque that dishonored, lenders can issue statutory notices under Section 25 of the Payment and Settlement Systems (PSS) Act, 2007 or Section 138 of the NI Act.
        </p>
      )
    },
    {
      question: "What percentage of credit card debt do banks typically accept in a One-Time Settlement (OTS)?",
      answer: (
        <p>
          Leading Indian credit card issuers (including HDFC Bank, SBI Card, ICICI Bank, Axis Bank, Kotak, RBL, and IndusInd Bank) typically settle delinquent credit card accounts at <strong>30% to 50% of the total outstanding statement balance</strong> (equivalent to a <strong>50% to 70% overall waiver</strong>). The exact haircut depends on the account&apos;s delinquency stage (accounts at 90–180+ DPD receive higher waivers), verified borrower hardship documentation (loss of employment, medical crisis, business insolvency), and negotiation representation by experienced debt settlement advocates.
        </p>
      )
    },
    {
      question: "What happens to my other active credit cards if I settle one card?",
      answer: (
        <p>
          When you settle a delinquent card, that specific account is permanently blocked and cancelled. Other active credit cards issued by different banks are not automatically cancelled on day one. However, credit bureaus (TransUnion CIBIL, Experian, CRIF High Mark, Equifax) update your credit profile monthly. When your other lenders run periodic portfolio reviews and observe severe delinquency remarks or a &quot;Settled&quot; status on one card, automated risk management algorithms may drastically reduce your credit limits, block reward point redemptions, or restrict further transactions to prevent risk contagion.
        </p>
      )
    },
    {
      question: "When does a delinquent credit card account become eligible for an OTS settlement?",
      answer: (
        <p>
          A credit card account reaches prime settlement eligibility once it crosses <strong>90 Days Past Due (DPD)</strong> and is formally classified as a <strong>Non-Performing Asset (NPA)</strong> under RBI prudential provisioning norms. Prior to 90 DPD (during SMA-0 and SMA-1 stages), front-line bank collection desks focus on regularizing the account with late fee concessions. Once an account becomes an NPA (90 to 180+ DPD), banks are mandated by the RBI to allocate 15% to 100% provisioning reserves, transferring the file to Stressed Assets and Legal Recovery desks authorized to sanction substantial compromise haircuts.
        </p>
      )
    },
    {
      question: "How can I verify if a credit card settlement letter is genuine?",
      answer: (
        <p>
          A genuine bank settlement sanction letter MUST satisfy five mandatory criteria: 1) Issued directly on the bank&apos;s official letterhead with corporate branch details and executive signature/digital watermark; 2) Explicitly state your full name, PAN, 16-digit (masked) credit card number, and unique settlement reference ID; 3) Clearly list the exact settlement amount, waiver sum, and strict payment due date; 4) State unequivocally that upon payment, the account will be closed with ₹0 outstanding dues and a formal No Dues Certificate (NDC) will follow; and 5) Specify payment exclusively through official bank portals, NEFT/RTGS to bank collection accounts, or direct card payment—<strong>never to an individual recovery agent&apos;s personal UPI or account</strong>.
        </p>
      )
    },
    {
      question: "What legal rights do I have against abusive credit card recovery agents?",
      answer: (
        <p>
          Under the <strong>RBI Master Direction on Recovery Agents and Fair Practices Code (RBI/2022-23/108)</strong>, recovery agents are strictly barred from: calling before 8:00 AM or after 7:00 PM, calling friends, relatives, or office colleagues, visiting your workplace without prior authorization, using threatening or abusive language, or attempting public shaming. If agents violate these norms, you can file a formal complaint with the Bank&apos;s Principal Nodal Officer, lodge a complaint on the RBI CMS portal (RB-IOS), and initiate legal complaints for criminal intimidation under Sections 351/352 of the Bharatiya Nyaya Sanhita (BNS).
        </p>
      )
    },
    {
      question: "How does credit card settlement affect my CIBIL score and how long does recovery take?",
      answer: (
        <p>
          Settling a credit card causes an immediate CIBIL score drop of <strong>75 to 120 points</strong>, and the credit report lists the account status as <strong>&quot;Settled&quot; with a ₹0 current balance</strong>. While unsecured personal loans and premium credit cards will be restricted for 12 to 18 months, your credit profile is legally protected from active default proceedings. By adopting a structured credit rehabilitation strategy—such as obtaining a Fixed-Deposit-backed (FD-secured) credit card, maintaining credit utilization below 25%, and repaying on time—you can rebuild your CIBIL score back to <strong>750+ within 18 to 24 months</strong>.
        </p>
      )
    },
    {
      question: "Can I settle my credit card debt in multiple monthly installments instead of a lump sum?",
      answer: (
        <p>
          <strong>Yes.</strong> While single-bullet payments secure the deepest discounts (60% to 70% waivers), credit card issuers routinely approve structured compromise plans spread across <strong>2 to 4 monthly installments</strong> for borrowers facing severe liquidity constraints. When negotiating an installment settlement, ensure that the multi-part payment schedule and dates are explicitly documented in the bank&apos;s formal sanction letter before making the first payment.
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
            Revolving Debt Relief &amp; Legal Resolution Guide 2026
          </div>

          {/* H1 Headline */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            How to Settle Credit Card Debt in India:{' '}
            <span className="text-[#3b82f6] md:text-[#60a5fa]">40%–70% Waivers &amp; Legal Protection</span>
          </h1>

          {/* Subtitle / Direct Answer Snippet */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Trapped in the 36%–42% APR compounding minimum-due cycle? Learn how revolving credit card settlements differ from personal loans, eliminate inflated phantom fees, stop illegal recovery harassment, and secure official ₹0 No Dues Certificates.
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
              <span>Evaluate My Credit Card Settlement Free</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#credit-card-trap-apr-math"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold py-3 px-5 rounded-xl transition-all duration-300 text-sm"
            >
              <BookOpen className="w-4 h-4 text-blue-300" />
              <span>Read Settlement Roadmap</span>
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
            {/* Section 1: The Credit Card Trap & Compounding Math */}
            <section id="credit-card-trap-apr-math" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                1. The Credit Card Debt Crisis in India: The 42% APR Minimum-Due Trap
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Credit cards in India operate on the most predatory interest rate structures in the formal retail lending ecosystem. While secured home loans charge 8.5%–9.5% and personal loans range from 11% to 18%, credit cards charge astronomical finance charges of <strong>3.0% to 3.75% per month</strong>—translating to an annualized percentage rate (APR) of <strong>36% to 45% compounding</strong>.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                When a cardholder is unable to pay the total statement balance in full by the due date, the banking algorithm triggers the dreaded <strong>revolving credit interest waterfall</strong>. Once revolving starts:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <div className="bg-red-50/70 border border-red-200 p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-red-900 font-bold text-sm mb-2">
                    <Flame className="w-4 h-4 text-red-600" />
                    <span>Zero Grace Period</span>
                  </div>
                  <p className="text-xs text-red-950 leading-relaxed">
                    The standard 45-to-50 day interest-free period is immediately revoked. Daily compounding interest is charged retroactively from the <em>exact transaction date</em> of every single purchase.
                  </p>
                </div>

                <div className="bg-amber-50/70 border border-amber-200 p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-2">
                    <Percent className="w-4 h-4 text-amber-600" />
                    <span>18% GST Levy</span>
                  </div>
                  <p className="text-xs text-amber-950 leading-relaxed">
                    Goods &amp; Services Tax (GST) at 18% is automatically added to every rupee of monthly finance charges, late fees, and over-limit charges, accelerating balance growth.
                  </p>
                </div>

                <div className="bg-blue-50/70 border border-blue-200 p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-blue-900 font-bold text-sm mb-2">
                    <Coins className="w-4 h-4 text-blue-600" />
                    <span>The 5% MAD Illusion</span>
                  </div>
                  <p className="text-xs text-blue-950 leading-relaxed">
                    The Minimum Amount Due (MAD) is approximately 5% of balance. Nearly 85% of your payment pays finance fees and GST, leaving the borrowed principal untouched.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-slate-900 text-white rounded-2xl my-6">
                <h4 className="text-sm font-bold text-blue-300 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Calculator className="w-4 h-4" />
                  <span>The Mathematical Minimum Due Trap on a ₹2,00,000 Balance</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  If you carry a ₹2,00,000 credit card balance at 42% APR (3.5% monthly) and strictly pay only the 5% Minimum Amount Due (₹10,000 starting payment):
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <span className="text-[10px] uppercase text-slate-300 block">Initial Balance</span>
                    <strong className="text-base text-white">₹2,00,000</strong>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <span className="text-[10px] uppercase text-slate-300 block">Years to Repay</span>
                    <strong className="text-base text-amber-300">19.5 Years</strong>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <span className="text-[10px] uppercase text-slate-300 block">Total Interest &amp; GST</span>
                    <strong className="text-base text-red-300">₹6,84,200</strong>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <span className="text-[10px] uppercase text-slate-300 block">Total Cash Outgo</span>
                    <strong className="text-base text-emerald-300">₹8,84,200</strong>
                  </div>
                </div>
              </div>

              <p className="text-base leading-relaxed text-slate-700">
                This mathematical reality explains why millions of middle-class salaried Indians and self-employed business owners feel trapped. You pay thousands of rupees every month, yet your card balance never shrinks. This is where <strong>legal debt settlement</strong> becomes a critical financial rescue tool.
              </p>
            </section>

            {/* Section 2: Credit Card vs Personal Loan Differences */}
            <section id="card-vs-loan-settlement-differences" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                2. Credit Card Settlement vs. Personal Loan Settlement: 6 Critical Structural Differences
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Many borrowers assume that settling a credit card follows the identical playbook as settling a personal term loan. However, because credit cards are <strong>revolving unsecured credit lines</strong> rather than amortized term loans, the underlying legal, accounting, and settlement dynamics differ significantly.
              </p>

              {/* 4-Sided Bordered Comparison Table */}
              <div className="overflow-x-auto my-6">
                <table>
                  <thead>
                    <tr>
                      <th className="w-1/4">Comparison Parameter</th>
                      <th className="w-3/8">Unsecured Credit Card Settlement</th>
                      <th className="w-3/8">Personal Term Loan Settlement</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">1. Debt Composition &amp; Inflation</td>
                      <td>
                        <strong>High Phantom Debt:</strong> 40%–60% of delinquent statement balance consists of compounding interest (42% APR), late fees, and 18% GST.
                      </td>
                      <td>
                        <strong>Pure Principal Base:</strong> 80%–90% of outstanding balance is original disbursed capital, with standard overdue interest (14%–24%).
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">2. Bank Haircut Elasticity</td>
                      <td>
                        <strong>Massive Waiver Flexibility (50%–70%):</strong> Banks readily waive 100% of accumulated interest and fees, negotiating primarily on the actual swiped principal.
                      </td>
                      <td>
                        <strong>Moderate Waiver Flexibility (40%–60%):</strong> Haircuts are scrutinized against the bank&apos;s hard capital loss on the disbursed principal.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">3. Criminal Cheque Bounce Exposure</td>
                      <td>
                        <strong>Zero NI Act 138 Risk:</strong> Credit cards do not use Post-Dated Cheques (PDCs). Default is strictly a civil contractual breach.
                      </td>
                      <td>
                        <strong>Section 138 / Section 25 NACH Risk:</strong> Defaulted automated bank ECS/NACH mandates or security cheques can trigger court summons.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">4. Facility Status on Delinquency</td>
                      <td>
                        <strong>Instant Limit Cancellation:</strong> Card is permanently suspended at 30–60 DPD; revolving privileges are permanently extinguished.
                      </td>
                      <td>
                        <strong>Amortization Halt:</strong> Loan tenure continues until marked as NPA; no revolving credit line is revoked.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">5. Multi-Card Contagion Risk</td>
                      <td>
                        <strong>Spillover Risk:</strong> CIBIL delinquency triggers credit limit slashing or card freezing by other independent banks.
                      </td>
                      <td>
                        <strong>Isolated Loan Exposure:</strong> Other lenders generally do not recall existing term loans unless cross-collateralized.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">6. Final Closure Documentation</td>
                      <td>
                        <strong>Account Closure &amp; Card Cancellation Letter:</strong> Requires explicit ₹0 balance certificate and statement zeroing confirmation.
                      </td>
                      <td>
                        <strong>Comprehensive No Dues Certificate (NDC):</strong> Formally closes the specific loan account number across bank systems.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50/80 border-l-4 border-[#1F5EFF] p-4 rounded-r-xl my-4">
                <p className="text-xs md:text-sm text-blue-950 leading-relaxed font-medium">
                  <strong>Strategic Insight:</strong> Because the bank&apos;s true risk on a credit card is restricted to your <em>actual merchant spends and cash withdrawals</em>, legal advocates have tremendous leverage to strip away all accumulated compounding charges, late fees, and GST during OTS negotiations.
                </p>
              </div>
            </section>

            {/* Section 3: Delinquency & NPA Lifecycle */}
            <section id="delinquency-npa-lifecycle" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                3. The 90-Day Delinquency &amp; NPA Lifecycle for Credit Cards in India
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Understanding how Indian banks classify delinquent credit card accounts under <strong>Reserve Bank of India (RBI) prudential norms</strong> is essential to timing your settlement for maximum financial relief while safeguarding your legal rights.
              </p>

              {/* Sequential Delinquency Stages */}
              <div className="space-y-4 my-6">
                <div className="border border-slate-200 rounded-2xl p-5 bg-white hover:border-slate-300 transition-colors shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center">
                        1
                      </span>
                      <h4 className="font-bold text-slate-900 text-base">
                        SMA-0 Stage (1 to 30 Days Past Due)
                      </h4>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">
                      Early Delinquency
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Automated SMS alerts, emails, and IVR calls begin. Late payment fees (₹500–₹1,300) and 3.5% monthly finance charges are debited to the card ledger. Bank front-line agents attempt to push the borrower to pay minimum dues. Settlement offers at this stage are impossible as the account is deemed regularizable.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-2xl p-5 bg-white hover:border-slate-300 transition-colors shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center">
                        2
                      </span>
                      <h4 className="font-bold text-slate-900 text-base">
                        SMA-1 &amp; SMA-2 Stage (31 to 90 Days Past Due)
                      </h4>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-amber-100 text-amber-800 rounded-full">
                      Card Block &amp; Agency Allocation
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The card is permanently blocked from POS, ATM, and online transactions. The file is outsourced to third-party tele-calling collection agencies. Aggressive calling begins. Lenders may propose converting the entire outstanding amount into an EMI loan (often a trap that re-activates fresh interest commitments).
                  </p>
                </div>

                <div className="border border-blue-200 rounded-2xl p-5 bg-blue-50/50 hover:border-blue-300 transition-colors shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-[#1F5EFF] text-white font-bold text-xs flex items-center justify-center">
                        3
                      </span>
                      <h4 className="font-bold text-slate-900 text-base">
                        NPA Classification (90+ Days Past Due) — Prime Settlement Window
                      </h4>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-blue-100 text-blue-800 rounded-full font-bold">
                      Maximum OTS Leverage
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Under RBI Master Directions, the credit card is formally classified as a <strong>Non-Performing Asset (NPA)</strong>. The bank is legally mandated to set aside capital provisions (15%–25% provisioning). The file moves from front-line collectors to the bank&apos;s <strong>Stressed Assets &amp; Legal Compromise Desk</strong>. Legal advocates can now negotiate comprehensive One-Time Settlements with 40% to 70% waivers.
                  </p>
                </div>

                <div className="border border-purple-200 rounded-2xl p-5 bg-purple-50/50 hover:border-purple-300 transition-colors shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-purple-700 text-white font-bold text-xs flex items-center justify-center">
                        4
                      </span>
                      <h4 className="font-bold text-slate-900 text-base">
                        Technical Write-Off / ARC Assignment (180+ Days Past Due)
                      </h4>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-purple-100 text-purple-800 rounded-full">
                      Distressed Asset Desk
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    The bank writes off the bad asset from its primary balance sheet for tax efficiency (prudential write-off) or assigns the portfolio to an Asset Reconstruction Company (ARC). Settlement remains 100% possible and often results in deep haircuts (60%–75% waivers) to extinguish the ledger debt permanently.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Mathematical Simulation */}
            <section id="mathematical-simulation-workout" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                4. Mathematical Financial Simulation: ₹5 Lakhs Credit Card Debt Workout
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                To demonstrate the real-world financial difference between continuing the minimum-due cycle, attempting debt consolidation, and executing an advocate-led OTS settlement, let us examine a typical case study of a borrower with <strong>₹5,00,000 total credit card debt</strong> across two cards (HDFC and SBI Card).
              </p>

              {/* Simulation Comparison Table */}
              <div className="overflow-x-auto my-6">
                <table>
                  <thead>
                    <tr>
                      <th>Financial Metric</th>
                      <th>Option 1: Minimum Amount Due (MAD)</th>
                      <th>Option 2: Debt Consolidation Loan</th>
                      <th>Option 3: Legal OTS Settlement</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Total Outstanding Balance</td>
                      <td>₹5,00,000</td>
                      <td>₹5,00,000</td>
                      <td>₹5,00,000 (Ledger)</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Monthly Cash Commitment</td>
                      <td>₹25,000 (declining over time)</td>
                      <td>₹14,150 / month (fixed EMI)</td>
                      <td><strong>₹0 monthly EMI</strong> (OTS lump sum)</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Repayment Tenure</td>
                      <td className="text-red-600 font-bold">21 Years</td>
                      <td>4 Years (48 Months)</td>
                      <td className="text-emerald-600 font-bold">45 to 60 Days</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Applicable Interest Rate</td>
                      <td>42% Annual APR + 18% GST</td>
                      <td>16.5% Fixed APR</td>
                      <td><strong>0% Interest</strong> (100% Waived)</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Total Interest &amp; Charges Paid</td>
                      <td className="text-red-600 font-bold">₹16,40,000+</td>
                      <td>₹1,79,200</td>
                      <td className="text-emerald-600 font-bold">₹0 (All Penalties Waived)</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Final Total Cash Outgo</td>
                      <td className="text-red-700 font-bold">₹21,40,000+</td>
                      <td>₹6,79,200</td>
                      <td className="text-emerald-700 font-black text-base">₹2,00,000 – ₹2,25,000</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Net Financial Savings</td>
                      <td className="text-slate-500">₹0 (Massive Loss)</td>
                      <td>Save on high APR only</td>
                      <td className="text-[#1F5EFF] font-black">₹2,75,000 – ₹3,00,000 Cash Saved</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">CIBIL Score Trajectory</td>
                      <td>Maintains score (until missed)</td>
                      <td>Improves (requires 750+ to qualify)</td>
                      <td>Drops temporarily; rebuilt in 18–24 mo</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl my-4 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs md:text-sm text-emerald-900 leading-relaxed">
                  <strong>The Settlement Advantage:</strong> For a borrower facing genuine financial distress or job loss, attempting to service ₹25,000/month in minimum dues guarantees eventual insolvency. SettleLoans legal advocates eliminate all compounding charges and negotiate a verified compromise settlement of approximately <strong>₹2.1 Lakhs</strong>, immediately stopping all collection harassment and closing the liability forever.
                </p>
              </div>
            </section>

            {/* Section 5: Dedicated Infographic Banner */}
            <section id="infographic-roadmap-overview" className="scroll-mt-28">
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
                        Credit Card Debt Settlement Summary &amp; Process Overview
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/how-to-settle-credit-card-debt.jpg"
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
                      src="/images/infographics/how-to-settle-credit-card-debt.jpg"
                      alt="Credit Card Debt Settlement Summary Infographic"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Takeaway:</strong> Stop the 42% APR minimum due bleed, strip out phantom fees via legal representation, and settle credit card debt with 40%–70% waivers on authentic bank letterheads.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6: Step-by-Step Settlement Blueprint */}
            <section id="step-by-step-settlement-blueprint" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                6. Step-by-Step Legal Blueprint to Settle Credit Card Debt in India
              </h2>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                Settling credit card debt successfully requires a structured, multi-stage legal and financial negotiation strategy. Following this verified protocol ensures maximum debt waivers while completely insulating you from illegal collection harassment.
              </p>

              {/* 7-Step Detailed Workflow */}
              <div className="space-y-6">
                <div className="flex gap-4 p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center flex-shrink-0 border border-blue-100">
                    01
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-1">
                      Step 1: Forensic Statement Audit &amp; Phantom Debt Calculation
                    </h4>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      Download the last 12 months of credit card statements. Our legal analysts separate your <strong>Actual Principal Spend</strong> (physical transactions, fuel, merchant swipes, ATM cash) from <strong>Phantom Accumulated Debt</strong> (monthly 3.5% finance charges, late payment fees, over-limit penalties, and 18% GST). This establishes the authentic baseline for all OTS negotiations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center flex-shrink-0 border border-blue-100">
                    02
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-1">
                      Step 2: Cease the Minimum Due Drain &amp; Re-allocate Liquidity
                    </h4>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      Stop pouring hard-earned funds into revolving minimum amount dues that only subsidize bank interest profits. Re-route your monthly cash flow into a dedicated, secure settlement reserve account to accumulate the lump-sum settlement corpus required for the final compromise payoff.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center flex-shrink-0 border border-blue-100">
                    03
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-1">
                      Step 3: Issue Formal Legal Hardship Representation &amp; Anti-Harassment Notice
                    </h4>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      Empaneled SettleLoans advocates issue a formal legal representation to the credit card issuer&apos;s Nodal Officer and Stressed Asset Cell. The notice documents your genuine economic hardship (medical records, job severance, business tax returns) under the <strong>RBI Master Directions</strong> and establishes advocate representation, ordering all third-party recovery agents to cease unauthorized calls.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center flex-shrink-0 border border-blue-100">
                    04
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-1">
                      Step 4: Strategic Negotiation with Bank Settlement Committees
                    </h4>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      Once the account crosses 90 DPD (NPA classification), our legal advocates engage directly with the bank&apos;s authorized Settlement Committee. We reject inflated ledger totals and negotiate exclusively on the core principal spend baseline, targeting a <strong>40% to 70% total debt waiver</strong>.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center flex-shrink-0 border border-blue-100">
                    05
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-1">
                      Step 5: Rigorous Legal Verification of Official Bank Settlement Letter
                    </h4>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      Before a single rupee is paid, our legal team scrutinizes the settlement letter against 7 forensic security checks. We verify bank letterhead authenticity, unique settlement reference numbers, card number masking, waiver breakdown, payment deadline, and the explicit clause guaranteeing ₹0 balance and NDC issuance.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center flex-shrink-0 border border-blue-100">
                    06
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-1">
                      Step 6: Payment Execution Exclusively via Direct Banking Channels
                    </h4>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      The agreed settlement sum is remitted directly into the bank&apos;s designated card account via NEFT/RTGS/NetBanking using official transaction references. <em>Never pay in cash or transfer funds to any recovery agency&apos;s private account.</em>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center flex-shrink-0 border border-blue-100">
                    07
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-1">
                      Step 7: Procuring Official ₹0 No Dues Certificate &amp; Credit Bureau Tracking
                    </h4>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      Within 15 to 45 days of payment, we obtain the bank&apos;s signed and sealed <strong>Comprehensive No Dues Certificate (NDC)</strong> confirming complete liability closure. We track monthly bureau filings with TransUnion CIBIL, Experian, and CRIF High Mark to ensure the outstanding balance is marked as exactly ₹0.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: RBI Regulations & Anti-Harassment Protections */}
            <section id="rbi-regulations-anti-harassment" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                7. RBI Regulations &amp; Borrower Anti-Harassment Protections
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Credit card recovery in India has historically been fraught with aggressive collection practices. To curb these abuses, the Reserve Bank of India has enacted stringent, binding regulatory directives that protect delinquent cardholders:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-3">
                    <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                    <span>RBI Recovery Agent Code (RBI/2022-23/108)</span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-2.5">
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Calling Hours:</strong> Agents are legally restricted to contacting borrowers only between <strong>8:00 AM and 7:00 PM</strong>.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Third-Party Privacy:</strong> Strict ban on contacting family members, friends, neighbors, or workplace colleagues regarding debts.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Workplace Visits:</strong> Unauthorized visits to a borrower&apos;s employer or place of business are strictly prohibited.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Zero Intimidation:</strong> Complete prohibition on abusive language, physical threats, or psychological harassment.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-3">
                    <Landmark className="w-4 h-4 text-[#1F5EFF]" />
                    <span>RBI Credit Card Master Directions (2022/2024)</span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-2.5">
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Compromise Settlement Framework:</strong> Regulated entities must maintain board-approved OTS policies for stressed card accounts.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Unsolicited Cards &amp; Limit Upgrades:</strong> Lenders cannot upgrade limits or levy hidden charges without explicit written consent.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Clear MITC Disclosures:</strong> All finance charges, annual fees, and compounding methods must be transparently declared.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Ombudsman Redressal:</strong> Direct escalation pathway to the RBI Banking Ombudsman (RB-IOS) for recovery malpractices.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl my-4 text-xs text-amber-950 leading-relaxed">
                <strong>What to Do if Agents Violate RBI Rules:</strong> Record all phone calls, preserve WhatsApp threat messages, and avoid signing any blank papers. SettleLoans legal advocates will immediately file formal complaints with the Bank&apos;s Principal Nodal Officer, the RBI Ombudsman, and the Cyber Crime Cell, restraining aggressive agency interference.
              </div>
            </section>

            {/* Section 8: Bank-Specific Realities */}
            <section id="bank-specific-settlement-realities" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                8. Bank-Specific Credit Card Settlement Realities in India
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                While all scheduled commercial banks adhere to RBI guidelines, each major card issuer operates internal settlement matrices, delegated financial authority limits, and standard waiver ranges:
              </p>

              {/* Bank-Specific Table */}
              <div className="overflow-x-auto my-6">
                <table>
                  <thead>
                    <tr>
                      <th className="w-1/5">Credit Card Issuer</th>
                      <th className="w-1/4">Typical Waiver Range</th>
                      <th className="w-1/4">Installment Flexibility</th>
                      <th className="w-3/10">Settlement &amp; NDC Dynamics</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">HDFC Bank Credit Cards</td>
                      <td className="text-emerald-700 font-bold">50% to 65% Waiver</td>
                      <td>1 to 3 Monthly Installments</td>
                      <td>Direct settlement via Stressed Asset Desk; NDC issued in 21–30 working days post-clearance.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SBI Card (SBICPSL)</td>
                      <td className="text-emerald-700 font-bold">55% to 70% Waiver</td>
                      <td>1 to 2 Installments Preferred</td>
                      <td>Operates through specialized SAMB branches; offers substantial waivers during National Lok Adalat sessions.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">ICICI Bank Credit Cards</td>
                      <td className="text-emerald-700 font-bold">50% to 65% Waiver</td>
                      <td>1 to 3 Monthly Tranches</td>
                      <td>Prompt digital settlement sanction letters; highly responsive to formal advocate hardship representations.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Axis Bank Credit Cards</td>
                      <td className="text-emerald-700 font-bold">45% to 60% Waiver</td>
                      <td>1 to 3 Installments</td>
                      <td>Strict scrutiny of borrower income proof; requires formal hardship documentation for deep haircuts.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Kotak Mahindra Bank</td>
                      <td className="text-emerald-700 font-bold">50% to 65% Waiver</td>
                      <td>1 to 2 Installments</td>
                      <td>Fast-track compromise approvals when represented by empaneled legal counsel.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">RBL Bank Credit Cards</td>
                      <td className="text-emerald-700 font-bold">55% to 70% Waiver</td>
                      <td>Bullet Payment Preferred</td>
                      <td>Aggressive early-stage calling that subsides immediately upon service of formal legal notices; high waiver elasticity at NPA.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Standard Chartered &amp; Amex</td>
                      <td className="text-emerald-700 font-bold">40% to 60% Waiver</td>
                      <td>1 to 4 Monthly Tranches</td>
                      <td>MNC issuers mandate structured documentation; excellent compliance with formal settlement letters and bureau zeroing.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 9: CIBIL Rebuilding & NDC Audit */}
            <section id="cibil-rehabilitation-ndc-verification" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                9. Post-Settlement CIBIL Score Rehabilitation &amp; ₹0 No Dues Certificate Verification
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Executing a settlement provides instant psychological and legal peace of mind by eliminating active collection threats. However, managing your credit bureau footprint post-settlement is vital for your long-term financial freedom.
              </p>

              {/* The CIBIL Reality Box */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
                <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                    <Info className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Understanding the &quot;Settled&quot; Remark in CIBIL</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Under the <em>Credit Information Companies (Regulation) Act, 2005</em>, banks report settled accounts as <strong>&quot;Settled&quot; with a Current Balance of ₹0</strong>. This indicates that the lender accepted a compromise haircut and the borrower has zero active financial or legal liability.
                  </p>
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-[11px] text-slate-700">
                    <strong>Written-Off vs. Settled:</strong> &quot;Written Off&quot; means the loan is in active default and recovery continues. &quot;Settled&quot; confirms permanent closure and zero outstanding debt.
                  </div>
                </div>

                <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                    <span>The 24-Month Credit Rebuilding Protocol (750+ CIBIL)</span>
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-2">
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Step 1:</strong> Secure a Fixed-Deposit-backed credit card (e.g. IDFC WOW, OneCard FD, Axis Dream) with a ₹25,000–₹50,000 deposit.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Step 2:</strong> Maintain credit utilization strictly between <strong>15% and 25%</strong> of the FD limit (e.g., utility bills, groceries).</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Step 3:</strong> Enable 100% auto-debit to guarantee zero missed due dates for 18 consecutive months.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Result:</strong> Your score naturally rises from 600–650 back to <strong>750+ within 18 to 24 months</strong>.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Converting Settled to Closed */}
              <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl my-6">
                <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Future Option: Converting &quot;Settled&quot; to &quot;Closed&quot; Status</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  If your financial situation significantly improves in future years and you wish to apply for a major corporate mortgage or international visa requiring a spotless credit history, you can approach the original lender, pay the previously waived haircut amount (the discount), and obtain a <strong>Comprehensive Final No Dues Certificate</strong>. The lender is legally bound to update CIBIL and Experian from &quot;Settled&quot; to &quot;Closed - Fully Paid&quot;.
                </p>
              </div>
            </section>

            {/* Reusable CompanySection Component */}
            <div className="my-12">
              <CompanySection />
            </div>

            {/* Section 10: FAQ Accordion */}
            <section id="faqs" className="scroll-mt-28 mb-12">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <div className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-blue-50 border border-blue-200 text-[#1F5EFF] text-xs font-bold uppercase tracking-wider mb-2">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Frequently Asked Questions</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                  Expert Answers to Critical Credit Card Debt Settlement Queries
                </h2>
                <p className="text-xs md:text-sm text-slate-600 mt-2">
                  Detailed, search-optimized answers addressing legal rights, bank negotiation tactics, CIBIL impacts, and settlement procedures.
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
                    <strong>Reserve Bank of India (RBI):</strong> Master Direction – Credit Card and Debit Card – Issuance and Conduct Directions, 2022 (Updated 2024/2026).
                  </span>
                </li>
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
                    <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Mandatory credit bureau reporting rules for TransUnion CIBIL, Experian, CRIF High Mark, and Equifax.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Payment and Settlement Systems Act, 2007:</strong> Section 25 electronic mandate bounce statutory regulations and civil dispute limits.
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
                  href="/personal-loan-settlement-letter-format"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Settlement Letter Format
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
                Specializing in credit card compromise negotiations, phantom fee waivers, bank nodal escalations, RBI compliance, and CIBIL score rehabilitation for distressed borrowers across India.
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
                Trapped in Credit Card Dues or Collection Harassment?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed mb-4">
                Stop paying 42% compounding finance charges. Speak with an empaneled SettleLoans advocate to halt aggressive agent calls and negotiate lawful bank OTS settlements with 40%–70% waivers.
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
                    <strong>100% Legal Protection:</strong> Hardship representations served under RBI Fair Practices Code and Credit Card Master Directions.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Shield:</strong> Immediate legal intervention to stop abusive recovery calls and unannounced workplace visits.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct Bank Sanctions:</strong> All settlement letters verified on official bank letterheads with ₹0 No Dues Certificate guarantee.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>No Advance Haircut Fees:</strong> Ethical, transparent legal advisory structured to preserve borrower dignity and assets.
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
