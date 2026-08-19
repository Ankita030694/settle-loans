'use client';
import CompanySection from '@/components/CompanySection';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
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
  AlertCircle
} from 'lucide-react';

// Animated Counter with Intersection Observer and smooth cubic deceleration
function AnimatedCounter({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  decimals = 0,
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      // Smooth ease-out cubic deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(easeOut * end);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <span ref={counterRef} className="font-black">
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString('en-IN')}
      {suffix}
    </span>
  );
}

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

export default function PersonalLoanSettlementVsRestructuringClient() {
  const [activeId, setActiveId] = useState<string>('core-difference-explained');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'core-difference-explained', title: '1. Restructuring vs. Settlement' },
    { id: 'financial-mechanics-cost', title: '2. Cost & Simulation Analysis' },
    { id: 'cibil-score-mechanics', title: '3. CIBIL Score & Status Tags' },
    { id: 'bank-eligibility-rbi', title: '4. Bank & RBI Guidelines' },
    { id: 'legal-protection-enforceability', title: '5. Legal Rights & Enforcement' },
    { id: 'decision-matrix-framework', title: '6. Decision Framework Matrix' },
    { id: 'transition-strategies', title: '7. Transition Strategies' },
    { id: 'action-plan-rebuilding', title: '8. Step-by-Step Action Plan' },
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
      question: "What is the fundamental difference between personal loan settlement and loan restructuring?",
      answer: (
        <p>
          The fundamental difference centers on <strong>contractual modification versus debt forgiveness</strong>. In a <strong>Loan Restructuring</strong>, the bank modifies the terms of your active contract—such as extending your tenure from 36 to 60 months, lowering interest rates, or granting a short moratorium—to lower your monthly EMI without waiving any principal. You repay 100% of the loan. In a <strong>Loan Settlement (One-Time Settlement or OTS)</strong>, the bank waives 40% to 70% of the total outstanding dues in exchange for a discounted lump sum payment, legally closing the debt.
        </p>
      )
    },
    {
      question: "How does loan restructuring affect my CIBIL score compared to loan settlement?",
      answer: (
        <p>
          Restructuring causes a moderate score drop of <strong>30 to 60 points</strong> and marks the account as <strong>&quot;Restructured&quot;</strong> in your CIBIL report. Because you continue making monthly payments, your score stabilizes and rebuilds within 6 to 12 months. Settlement triggers an immediate drop of <strong>75 to 150 points</strong> and marks the account as <strong>&quot;Settled&quot;</strong> with a ₹0 balance, requiring 18 to 24 months of secured credit usage (like FD-backed credit cards) to restore your score above 750.
        </p>
      )
    },
    {
      question: "Which option costs less in total money: loan settlement or loan restructuring?",
      answer: (
        <p>
          <strong>Loan settlement costs significantly less in total capital outgo.</strong> Because 40% to 70% of your total principal and interest is permanently waived, you save lakhs of rupees in cash outgo. Conversely, loan restructuring lowers your immediate monthly EMI burden but <strong>increases your total interest expense</strong> because extending your tenure keeps interest compounding for additional years.
        </p>
      )
    },
    {
      question: "Can I request loan restructuring after my loan has become an NPA (90+ days overdue)?",
      answer: (
        <p>
          While legally permissible under RBI&apos;s Prudential Framework for Resolution of Stressed Assets, commercial banks (such as HDFC, SBI, ICICI, Axis, Bajaj Finance) rarely approve restructuring once an account enters deep NPA (90+ DPD) unless you demonstrate substantial, verified proof of revived income. In late-stage delinquency, banks strongly prefer a One-Time Settlement (OTS) to eliminate the bad loan from their balance sheet immediately.
        </p>
      )
    },
    {
      question: "What happens if I fail to pay EMIs after restructuring my personal loan?",
      answer: (
        <p>
          If you default on a restructured payment plan, the bank revokes all interest concessions and moratorium benefits, reinstates full penal interest, and classifies the account as a <strong>&quot;Failed Restructure&quot;</strong>. The bank will initiate legal proceedings under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act. At that stage, your sole remaining legal remedy to avoid court prosecution is negotiating a One-Time Settlement.
        </p>
      )
    },
    {
      question: "When should a borrower choose restructuring over loan settlement?",
      answer: (
        <p>
          Choose restructuring if your financial distress is <strong>temporary</strong> (e.g., temporary job gap, salary delay, short-term medical expense), your ongoing earning power remains intact, you can afford a reduced EMI, and you plan to take a home loan or car loan within the next 2 to 3 years. Choose settlement if you are in <strong>permanent or severe insolvency</strong> (job loss, business closure, debt trap where EMIs exceed income) and cannot sustain ongoing monthly installments.
        </p>
      )
    },
    {
      question: "Do banks offer a moratorium period during personal loan restructuring?",
      answer: (
        <p>
          Yes, depending on individual bank policies and hardship documentation, lenders can grant an EMI moratorium of <strong>3 to 6 months</strong> during restructuring. However, interest continues to accrue during the moratorium and is capitalized into your principal balance, slightly increasing subsequent monthly installments.
        </p>
      )
    },
    {
      question: "Can I get a No Dues Certificate (NDC) after loan restructuring?",
      answer: (
        <p>
          No, you do not receive a No Dues Certificate immediately upon restructuring because the debt contract remains active. You will only receive an NDC once you complete all revised EMI payments until the end of the extended tenure. In contrast, in a loan settlement, the bank issues an official No Dues Certificate within <strong>15 to 45 days</strong> of receiving the negotiated OTS payment.
        </p>
      )
    },
    {
      question: "Can I convert a 'Settled' loan status in CIBIL to 'Closed' later, and is it possible with restructuring?",
      answer: (
        <p>
          Yes. After settling a loan, if your financial capacity improves, you can approach the original lender, pay the waived haircut amount (the discount), and obtain a Comprehensive Final No Dues Certificate to update your CIBIL status from &quot;Settled&quot; to &quot;Closed&quot;. For a restructured loan, once you complete all scheduled repayments, the account automatically transitions to &quot;Closed - Fully Paid&quot; without paying any penalty.
        </p>
      )
    },
    {
      question: "Are recovery agents allowed to harass me while a restructuring or settlement proposal is under review?",
      answer: (
        <p>
          <strong>No.</strong> Under the RBI Fair Practices Code and Master Direction on Recovery Agents, lenders and their outsourced agents are strictly barred from making abusive calls, contacting relatives, visiting workplaces without consent, or calling outside the 8:00 AM to 7:00 PM window while your formal hardship proposal is pending review. SettleLoans advocates issue formal cease-and-desist notices to protect you from harassment.
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

      {/* A. Editorial Hero Section - Dark Background (Image 2 style) */}
      <section className="w-full bg-[#2E2E2E] pt-10 pb-8 md:pt-14 md:pb-10 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-[#1F5EFF]/15 border border-[#1F5EFF]/30 text-[#1F5EFF] text-xs font-black mb-4 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#1F5EFF]" />
            RBI Framework &amp; Debt Resolution Guide 2026
          </div>

          {/* H1 Headline */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-[#DEDEDE] mb-4 leading-[1.18] tracking-tight">
            Personal Loan Settlement vs Restructuring:{' '}
            <span className="text-[#1F5EFF]">CIBIL Impact, Cost &amp; Decision Matrix</span>
          </h1>

          {/* Subtitle / Direct Answer Snippet */}
          <p className="text-sm md:text-lg text-[#DEDEDE]/80 mb-5 max-w-3xl mx-auto leading-relaxed font-normal">
            Restructuring lowers your monthly EMI via tenure extension but increases total interest outgo, while settlement slashes your total liability by 40%–70% via a one-time discounted lump sum payoff. Compare CIBIL score drops (-50 vs -120 pts), RBI rules, and choose the right recovery path.
          </p>

          {/* Author & Review Metadata Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 text-xs text-[#DEDEDE]/70 mb-6 pb-1 border-b border-white/10 max-w-2xl mx-auto">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-[10px]">
                AJ
              </div>
              <span>
                Written by{' '}
                <Link
                  href="/authors/ashish-jhangra"
                  className="text-white hover:text-[#1F5EFF] font-semibold underline decoration-[#1F5EFF] underline-offset-4"
                >
                  Ashish Jhangra
                </Link>
              </span>
            </div>
            <div className="hidden sm:block text-white/30">•</div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Reviewed by SettleLoans Legal Advisory Team</span>
            </div>
            <div className="hidden sm:block text-white/30">•</div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#1F5EFF]" />
              <span>Updated: August 19, 2026</span>
            </div>
          </div>

          {/* Primary Hero CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-sm md:text-base group"
            >
              <span>Evaluate My Loan Strategy Free</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#core-difference-explained"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold py-3 px-5 rounded-xl border border-white/15 transition-all duration-300 text-sm"
            >
              <BookOpen className="w-4 h-4 text-blue-300" />
              <span>Explore Comparison Guide</span>
            </a>
          </div>
        </div>
      </section>

      {/* B. Animated Stats Strip */}
      <section className="w-full bg-[#1E1E1E] border-y border-white/10 py-5 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-white">
        <div className="max-w-[1720px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
          <div className="p-2">
            <div className="text-xl md:text-3xl text-[#1F5EFF] mb-0.5">
              <AnimatedCounter end={4.9} decimals={1} suffix="/5" />
            </div>
            <p className="text-xs text-slate-300 font-medium">
              Google Verified Rating (1,850+ Reviews)
            </p>
          </div>
          <div className="p-2 border-l border-white/10">
            <div className="text-xl md:text-3xl text-emerald-400 mb-0.5">
              <AnimatedCounter end={250} prefix="₹ " suffix="Cr+" />
            </div>
            <p className="text-xs text-slate-300 font-medium">
              Stressed Debt Restructured &amp; Settled
            </p>
          </div>
          <div className="p-2 border-l border-white/10">
            <div className="text-xl md:text-3xl text-amber-400 mb-0.5">
              <AnimatedCounter end={12000} suffix="+" />
            </div>
            <p className="text-xs text-slate-300 font-medium">
              Borrowers Shielded from Legal Action
            </p>
          </div>
          <div className="p-2 border-l border-white/10">
            <div className="text-xl md:text-3xl text-[#1F5EFF] mb-0.5">
              <AnimatedCounter end={100} suffix="%" />
            </div>
            <p className="text-xs text-slate-300 font-medium">
              RBI Prudential Framework Compliant
            </p>
          </div>
        </div>
      </section>

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
            {/* Section 1: Core Difference Explained */}
            <section id="core-difference-explained" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                1. Personal Loan Restructuring vs. Settlement: Core Differences Explained
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                When financial distress strikes—whether triggered by sudden job loss, unexpected medical emergencies, business margin collapse, or high-interest credit card traps—borrowers in India face a critical dilemma: <em>Should you negotiate with your bank to restructure your personal loan, or should you execute a One-Time Settlement (OTS)?</em>
              </p>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                While both mechanisms provide immediate relief from unmanageable debt, they operate on completely opposite contractual and financial principles. Understanding the distinction between <strong>loan restructuring</strong> (contractual term modification with 100% repayment) and <strong>loan settlement</strong> (debt compromise with principal forgiveness) is essential before approaching your lending institution.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
                {/* Restructuring Card */}
                <div className="bg-blue-50/70 border border-blue-200 p-6 rounded-2xl">
                  <div className="flex items-center gap-2 text-blue-900 font-bold text-lg mb-2">
                    <RefreshCw className="w-5 h-5 text-[#1F5EFF]" />
                    <span>Personal Loan Restructuring</span>
                  </div>
                  <p className="text-sm text-blue-950 font-medium mb-3">
                    Modifying loan terms to lower monthly installments while maintaining 100% repayment integrity.
                  </p>
                  <ul className="text-xs text-blue-900 space-y-2">
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Tenure Extension:</strong> Increases repayment duration (e.g., 3 years extended to 5 years).</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Interest Rate Revision:</strong> Potential conversion to lower fixed interest rate.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Temporary Moratorium:</strong> 3 to 6 months pause on principal/interest EMIs.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Principal Forgiveness:</strong> <strong>₹0 (Zero)</strong>. You repay the full borrowed principal.</span>
                    </li>
                  </ul>
                </div>

                {/* Settlement Card */}
                <div className="bg-amber-50/70 border border-amber-200 p-6 rounded-2xl">
                  <div className="flex items-center gap-2 text-amber-900 font-bold text-lg mb-2">
                    <Scale className="w-5 h-5 text-amber-600" />
                    <span>One-Time Loan Settlement (OTS)</span>
                  </div>
                  <p className="text-sm text-amber-950 font-medium mb-3">
                    Negotiating a discounted lump sum payment to extinguish the debt permanently with a bank haircut.
                  </p>
                  <ul className="text-xs text-amber-900 space-y-2">
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Debt Haircut:</strong> Bank waives 40% to 70% of total accumulated dues.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span><strong>One-Time Lump Sum:</strong> Clear remaining discounted amount in 1 to 3 installments.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Complete Discharge:</strong> Loan account closed with ₹0 balance and No Dues Certificate.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Legal Termination:</strong> Halts all recovery notices and court suits under Section 138/DRT.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Comparison Table 1 */}
              <div className="my-8">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                  Comprehensive Comparison: Loan Restructuring vs. Loan Settlement
                </h3>
                <div className="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th>Comparison Metric</th>
                        <th>Personal Loan Restructuring</th>
                        <th>One-Time Settlement (OTS)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-bold text-slate-900">Core Objective</td>
                        <td className="text-blue-700 font-semibold">Lower monthly EMI burden via tenure extension</td>
                        <td className="text-emerald-700 font-semibold">Extinguish entire debt via discounted lump sum</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Total Repayment Amount</td>
                        <td className="text-rose-600 font-semibold">100% Principal + Increased Total Interest</td>
                        <td className="text-emerald-600 font-bold">30% to 60% of Total Dues (40%–70% Waiver)</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">CIBIL Status Code</td>
                        <td className="text-blue-600 font-bold">&quot;Restructured&quot; (Active Account)</td>
                        <td className="text-amber-600 font-bold">&quot;Settled&quot; (Closed with ₹0 Balance)</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Immediate Score Impact</td>
                        <td className="text-amber-600 font-semibold">-30 to -60 Points (Mild Drop)</td>
                        <td className="text-rose-600 font-semibold">-75 to -150 Points (Moderate Drop)</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Score Recovery Timeline</td>
                        <td className="text-emerald-600 font-semibold">6 to 12 Months with Timely EMIs</td>
                        <td className="text-blue-600 font-semibold">18 to 24 Months via Secured Credit Lines</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Ideal Borrower Profile</td>
                        <td>Temporary salary cut, job change, short illness</td>
                        <td>Permanent job loss, business collapse, severe debt trap</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Bank Approval Stage</td>
                        <td>Pre-default or Early Delinquency (SMA-0, SMA-1)</td>
                        <td>Late-Stage Default or NPA (SMA-2, 90+ DPD)</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">No Dues Certificate (NDC)</td>
                        <td>Issued only after full tenure completion (Years later)</td>
                        <td>Issued immediately upon OTS settlement payment (15–45 days)</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Risk of Re-Default</td>
                        <td className="text-rose-600 font-semibold">High if financial hardship persists</td>
                        <td className="text-emerald-600 font-semibold">Zero (Debt is permanently extinguished)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 2: Financial Mechanics & Simulation Analysis */}
            <section id="financial-mechanics-cost" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                2. Financial Simulation: Monthly Cash Flow vs. Total Capital Outgo
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                The most critical decision variable for any borrower is evaluating the difference between <strong>monthly liquidity relief</strong> and <strong>total lifetime financial cost</strong>. Restructuring creates an illusion of affordability by lowering your monthly installment, but it significantly expands the lender&apos;s total interest harvest.
              </p>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                Let us examine a realistic financial case study: A borrower with an outstanding unsecured personal loan principal of <strong>₹8,00,000 at 15.5% annual interest</strong> with 36 months remaining on their original schedule.
              </p>

              {/* Simulation Table */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-6">
                <h4 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-3">
                  <Calculator className="w-5 h-5 text-[#1F5EFF]" />
                  Comparative Financial Breakdown: ₹8,00,000 Personal Loan Scenario
                </h4>
                <div className="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th>Financial Parameter</th>
                        <th>Original Loan (Unchanged)</th>
                        <th>Option A: Restructured (5-Yr Extension)</th>
                        <th>Option B: One-Time Settlement (50% OTS)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-bold">Remaining Principal</td>
                        <td>₹8,00,000</td>
                        <td>₹8,00,000 (Capitalized)</td>
                        <td>₹8,00,000 (Discharged)</td>
                      </tr>
                      <tr>
                        <td className="font-bold">Remaining Tenure</td>
                        <td>36 Months (3 Years)</td>
                        <td className="text-blue-700 font-semibold">60 Months (5 Years)</td>
                        <td className="text-emerald-700 font-semibold">Immediate / 60 Days</td>
                      </tr>
                      <tr>
                        <td className="font-bold">Monthly EMI Burden</td>
                        <td className="text-rose-600 font-bold">₹27,935 / month</td>
                        <td className="text-emerald-600 font-bold">₹19,245 / month (-31%)</td>
                        <td className="text-emerald-700 font-bold">₹0 / month (Zero EMI)</td>
                      </tr>
                      <tr>
                        <td className="font-bold">Total Interest Payable</td>
                        <td>₹2,05,660</td>
                        <td className="text-rose-600 font-bold">₹3,54,700 (+₹1,49,040)</td>
                        <td className="text-emerald-600 font-bold">₹0 (All Interest Waived)</td>
                      </tr>
                      <tr>
                        <td className="font-bold">Total Capital Outgo</td>
                        <td className="font-semibold">₹10,05,660</td>
                        <td className="text-rose-700 font-bold">₹11,54,700</td>
                        <td className="text-emerald-700 font-bold">₹4,00,000 (Lump Sum)</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Net Borrower Savings</td>
                        <td>Base Baseline</td>
                        <td className="text-rose-600 font-semibold">Negative (-₹1,49,040 Loss)</td>
                        <td className="text-emerald-600 font-bold">+₹6,05,660 Direct Cash Savings</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <h4 className="text-amber-900 font-bold text-base flex items-center gap-2 mb-1.5">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                  The Stressed Borrower&apos;s Paradox
                </h4>
                <p className="text-sm text-amber-800 leading-relaxed">
                  Restructuring solves <em>cash flow timing</em> but worsens <em>total solvency</em>. If your income has shrunk permanently or your total debt service ratio exceeds 60% of take-home pay, paying ₹1.49 Lakh extra interest over 5 years through restructuring often results in a secondary default within 12 months. In contrast, an OTS settlement instantly locks in a massive net capital savings of ₹6 Lakhs.
                </p>
              </div>
            </section>

            {/* Section 3: CIBIL Score & Status Code Deep Dive */}
            <section id="cibil-score-mechanics" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                3. CIBIL Score Mechanics: &quot;Restructured&quot; vs. &quot;Settled&quot; vs. &quot;Written Off&quot;
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                In the Indian banking ecosystem, credit bureaus—primarily TransUnion CIBIL, Experian, CRIF High Mark, and Equifax—operate under the statutory mandates of the <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA)</strong>. Lenders report every account status tag to these bureaus monthly.
              </p>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                Understanding how automated underwriting algorithms interpret different status flags will help you make an informed decision aligned with your future borrowing requirements.
              </p>

              <div className="space-y-4 my-6">
                <div className="p-5 rounded-xl border border-blue-200 bg-blue-50/50">
                  <h3 className="text-base font-bold text-blue-900 flex items-center gap-2 mb-1">
                    <RefreshCw className="w-5 h-5 text-[#1F5EFF]" />
                    1. &quot;Restructured&quot; Status Tag
                  </h3>
                  <p className="text-sm text-blue-800 leading-relaxed mb-2">
                    When a loan is restructured under RBI guidelines, the bureau marks the account as <strong>&quot;Restructured due to Financial Hardship&quot;</strong>. The account remains <strong>active</strong> with a non-zero outstanding balance.
                  </p>
                  <p className="text-xs text-blue-700">
                    <strong>Score Impact:</strong> Immediate -30 to -60 points. However, each consecutive on-time payment on the revised EMI schedule adds positive payment history points, steadily lifting your score back above 750 within 6 to 12 months.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-amber-200 bg-amber-50/50">
                  <h3 className="text-base font-bold text-amber-900 flex items-center gap-2 mb-1">
                    <Scale className="w-5 h-5 text-amber-600" />
                    2. &quot;Settled&quot; Status Tag
                  </h3>
                  <p className="text-sm text-amber-800 leading-relaxed mb-2">
                    In a One-Time Settlement, the account is permanently closed, and the active balance is updated to <strong>₹0</strong>. The bureau notes a non-zero write-off in the <em>&quot;Settlement Amount / Haircut&quot;</em> column.
                  </p>
                  <p className="text-xs text-amber-700">
                    <strong>Score Impact:</strong> Immediate -75 to -150 points. Tier-1 automated algorithms will decline fresh unsecured loans for 12–18 months. However, the score can be rebuilt to 740+ within 18–24 months using secured credit cards, and you hold zero pending liability.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-rose-200 bg-rose-50/50">
                  <h3 className="text-base font-bold text-rose-900 flex items-center gap-2 mb-1">
                    <AlertTriangle className="w-5 h-5 text-rose-600" />
                    3. &quot;Written Off&quot; / &quot;Suit Filed&quot; (Active Default Danger)
                  </h3>
                  <p className="text-sm text-rose-800 leading-relaxed mb-2">
                    Occurs when a borrower ignores bank notices without choosing restructuring or settlement. The bank books the entire amount as bad debt and initiates recovery litigation.
                  </p>
                  <p className="text-xs text-rose-700">
                    <strong>Score Impact:</strong> Continuous collapse (-250 to -350 points). Unending Days Past Due (DPD 180+) reporting, total credit blacklisting across all lenders, and active civil/criminal court summons.
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
                        <th>Milestone Timeline</th>
                        <th>Loan Restructuring (Timely Payments)</th>
                        <th>Loan Settlement (OTS + Rebuild Plan)</th>
                        <th>Unsettled Default (NPA / Litigation)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-bold">Month 0 (Event)</td>
                        <td className="text-amber-600 font-semibold">720 &rarr; 670 (-50 pts)</td>
                        <td className="text-rose-600 font-semibold">700 &rarr; 580 (-120 pts)</td>
                        <td className="text-rose-700 font-semibold">680 &rarr; 510 (-170 pts)</td>
                      </tr>
                      <tr>
                        <td className="font-bold">Month 6</td>
                        <td className="text-blue-600 font-semibold">695 (Steady Rebound)</td>
                        <td className="text-amber-600 font-semibold">620 (Secured Card Active)</td>
                        <td className="text-rose-700 font-semibold">470 (Freefall, DPD 180+)</td>
                      </tr>
                      <tr>
                        <td className="font-bold">Month 12</td>
                        <td className="text-emerald-600 font-semibold">740+ (Approaching Prime)</td>
                        <td className="text-blue-600 font-semibold">680 – 710 (Disciplined CUR)</td>
                        <td className="text-rose-700 font-semibold">Sub-450 (Blacklisted)</td>
                      </tr>
                      <tr>
                        <td className="font-bold">Month 24</td>
                        <td className="text-emerald-700 font-semibold">770+ (Home Loan Ready)</td>
                        <td className="text-emerald-600 font-semibold">745 – 760 (Fully Restored)</td>
                        <td className="text-rose-700 font-semibold">Court Summons / DRT</td>
                      </tr>
                      <tr>
                        <td className="font-bold">Month 36</td>
                        <td className="text-emerald-700 font-bold">790+ (Pristine Profile)</td>
                        <td className="text-emerald-700 font-bold">775+ (Unsecured Cards Open)</td>
                        <td className="text-rose-800 font-bold">Legal Recovery / Salary Attachment</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 4: Bank Eligibility Criteria & RBI Regulatory Guidelines */}
            <section id="bank-eligibility-rbi" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                4. Bank Eligibility Criteria &amp; RBI Regulatory Guidelines
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Both loan restructuring and compromise settlements are governed by explicit frameworks issued by the Reserve Bank of India. Neither option is a casual favor from a branch manager; they are statutory resolutions anchored in central bank prudential norms.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                    <Landmark className="w-5 h-5 text-[#1F5EFF]" />
                    RBI Prudential Framework for Resolution of Stressed Assets (June 7, 2019)
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Mandates banks to identify early stress and classify accounts into Special Mention Accounts: <strong>SMA-0 (1–30 days overdue)</strong>, <strong>SMA-1 (31–60 days overdue)</strong>, and <strong>SMA-2 (61–90 days overdue)</strong>. Loan restructuring is most easily sanctioned during SMA-0 or SMA-1 when viability is demonstrable.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    RBI Framework for Compromise Settlements and Technical Write-offs (June 8, 2023)
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Empowers scheduled commercial banks, NBFCs, and cooperative lenders to formulate board-approved policies for executing One-Time Settlements without arbitrary branch-level discretion. It establishes cooling-off periods and mandates verifiable hardship parameters for granting principal waivers.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-amber-600" />
                    Strict Verification: Genuine Hardship vs. Wilful Default
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Under RBI Master Directives, borrowers with genuine incapacity (verified income loss, medical documents, bank statement cash flow crunches) are entitled to compromise relief. Borrowers who intentionally siphon funds or conceal liquidity are classified as <em>Wilful Defaulters</em> and disqualified from concessions.
                  </p>
                </div>
              </div>

              {/* Eligibility Checklist Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                  <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Restructuring Approval Criteria</span>
                  </h5>
                  <ul className="text-xs text-slate-600 space-y-2">
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Account is regular or within early delinquency (0 to 60 DPD).</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Verifiable evidence of ongoing future cash flow (new job offer, partial salary).</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Fixed Obligation to Income Ratio (FOIR) remains sustainable under revised EMI.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Borrower has not defaulted on a previous restructuring package.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                  <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-amber-600" />
                    <span>Settlement (OTS) Approval Criteria</span>
                  </h5>
                  <ul className="text-xs text-slate-600 space-y-2">
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Account is delinquent or classified as NPA (60+ to 90+ DPD).</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Demonstrable permanent insolvency (termination letter, hospital bills, business closure).</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Ability to arrange a discounted lump sum via family support or asset liquidation.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Mutual agreement to extinguish all legal disputes with ₹0 NDC issuance.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Compact High-Impact Infographic Banner (Between Sections 4 and 5) */}
            <div className="bg-white border-2 border-blue-200 rounded-3xl overflow-hidden shadow-lg my-10 text-slate-800">
              {/* Header Strip */}
              <div className="bg-[#0A2540] text-white py-3.5 px-5 flex items-center justify-between border-b-2 border-[#1F5EFF]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#1F5EFF] flex items-center justify-center text-white text-xs shadow-sm">
                    <Scale className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-300 block">
                      Executive Decision Blueprint
                    </span>
                    <h3 className="text-sm md:text-base font-black text-white leading-tight">
                      Personal Loan Settlement vs. Restructuring: 4-Pillar Strategic Navigator
                    </h3>
                  </div>
                </div>
                <span className="hidden sm:inline-block py-1 px-2.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-semibold">
                  RBI Master Directive Aligned
                </span>
              </div>

              {/* 4 Pillars Summary Grid */}
              <div className="p-4 md:p-6 bg-slate-50">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {/* Pillar 1 */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#1F5EFF] flex items-center justify-center font-black text-sm mb-2.5">
                      01
                    </div>
                    <h4 className="text-sm font-black text-slate-900 mb-1">Financial Impact</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong>Restructure:</strong> Lower EMI, +20%–35% higher total interest.<br />
                      <strong>Settlement:</strong> 40%–70% haircut, zero future EMI.
                    </p>
                  </div>

                  {/* Pillar 2 */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-black text-sm mb-2.5">
                      02
                    </div>
                    <h4 className="text-sm font-black text-slate-900 mb-1">CIBIL Trajectory</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong>Restructure:</strong> -40 pts drop, fast 6-month recovery.<br />
                      <strong>Settlement:</strong> -120 pts drop, 18-month secured card rebound.
                    </p>
                  </div>

                  {/* Pillar 3 */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-black text-sm mb-2.5">
                      03
                    </div>
                    <h4 className="text-sm font-black text-slate-900 mb-1">Hardship Duration</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong>Restructure:</strong> Temporary cash crunch (3–12 months).<br />
                      <strong>Settlement:</strong> Permanent insolvency or severe debt trap.
                    </p>
                  </div>

                  {/* Pillar 4 */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-sm mb-2.5">
                      04
                    </div>
                    <h4 className="text-sm font-black text-slate-900 mb-1">Legal Finality</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong>Restructure:</strong> Active contract, re-default risk exists.<br />
                      <strong>Settlement:</strong> Permanent discharge with ₹0 NDC guarantee.
                    </p>
                  </div>
                </div>

                {/* Horizontal Progress Milestones */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-2">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-3">
                    Optimal Debt Resolution Process Workflow
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-[11px] font-bold text-[#1F5EFF] block">Phase 1</span>
                      <span className="text-xs font-bold text-slate-800">Hardship Audit</span>
                      <span className="text-[10px] text-slate-500 block">Cash Flow vs. Solvency Review</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-[11px] font-bold text-[#1F5EFF] block">Phase 2</span>
                      <span className="text-xs font-bold text-slate-800">Strategy Selection</span>
                      <span className="text-[10px] text-slate-500 block">Restructure or OTS Proposal</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-[11px] font-bold text-[#1F5EFF] block">Phase 3</span>
                      <span className="text-xs font-bold text-slate-800">Bank Formal Sanction</span>
                      <span className="text-[10px] text-slate-500 block">Revised Schedule or OTS Letter</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-[11px] font-bold text-emerald-600 block">Phase 4</span>
                      <span className="text-xs font-bold text-slate-800">CIBIL Rehabilitation</span>
                      <span className="text-[10px] text-slate-500 block">Rebuild Score to 750+</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Takeaway Footer Bar with Case Evaluation CTA */}
              <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>
                    <strong>Key Takeaway:</strong> Choose restructuring for temporary liquidity crunches; execute OTS settlement for permanent debt overload.
                  </span>
                </div>
                <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                  Get Free Strategic Loan Evaluation &rarr;
                </Link>
              </div>
            </div>

            {/* Section 5: Legal Protection, Enforceability & Dispute Resolution */}
            <section id="legal-protection-enforceability" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                5. Legal Rights, Recovery Defense &amp; Dispute Resolution
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                A primary fear that drives borrowers into panic is the threat of aggressive recovery tactics and criminal prosecution under Indian banking laws. Knowing your exact statutory rights prevents unlawful intimidation and establishes a level playing field during negotiations.
              </p>

              <div className="space-y-4 my-6">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-rose-600" />
                    Section 138 of the Negotiable Instruments Act (Cheque Bounce)
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-2">
                    When personal loan EMIs fail, banks frequently present security cheques or initiate automated NACH debit attempts. A bounced cheque or dishonored electronic mandate triggers a statutory demand notice under Section 138 (or Section 25 of the PSS Act, 2007).
                  </p>
                  <p className="text-xs text-slate-500">
                    <strong>Legal Safeguard:</strong> Executing a formal One-Time Settlement (OTS) legally compels the bank to withdraw all pending Section 138/Section 25 criminal complaints with prejudice upon receipt of settlement proceeds.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <Scale className="w-5 h-5 text-[#1F5EFF]" />
                    Lok Adalat: Statutory Platform for Amicable Compromise
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-2">
                    Organized by the National Legal Services Authority (NALSA) under the Legal Services Authorities Act, 1987, Lok Adalats provide an ideal statutory forum for executing binding settlement compromises between borrowers and commercial banks.
                  </p>
                  <p className="text-xs text-slate-500">
                    <strong>Legal Safeguard:</strong> A Lok Adalat award carries the force of a final Civil Court decree. No appeal lies against a Lok Adalat award, guaranteeing that the lender cannot reopen recovery proceedings.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-emerald-600" />
                    RBI Fair Practices Code &amp; Anti-Harassment Safeguards
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-2">
                    Under the Master Direction on Recovery Agents, lenders are strictly prohibited from visiting debtors before 8:00 AM or after 7:00 PM, calling friends or colleagues, using uncivilized language, or disclosing debt details publicly.
                  </p>
                  <p className="text-xs text-slate-500">
                    <strong>Legal Safeguard:</strong> SettleLoans advocates issue formal cease-and-desist legal notices to bank nodal officers. Violations are escalated directly to the RBI Banking Ombudsman under the Integrated Ombudsman Scheme, 2021.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Decision Framework Matrix */}
            <section id="decision-matrix-framework" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                6. Decision Framework Matrix: When to Restructure vs. When to Settle
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                To determine whether loan restructuring or a One-Time Settlement is the most viable strategy for your specific circumstances, use our multi-parameter diagnostic framework:
              </p>

              {/* Detailed Decision Matrix Table */}
              <div className="my-6">
                <div className="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th>Diagnostic Parameter</th>
                        <th>Choose Loan Restructuring If...</th>
                        <th>Choose Loan Settlement (OTS) If...</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-bold text-slate-900">Nature of Hardship</td>
                        <td className="text-blue-700 font-semibold">Temporary liquidity dip (expected recovery &le; 6 months)</td>
                        <td className="text-amber-700 font-semibold">Permanent insolvency / income loss (&gt; 12 months)</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Total Debt-to-Income (DTI)</td>
                        <td>DTI is between 40% and 55% of monthly income</td>
                        <td className="text-rose-600 font-bold">DTI exceeds 70%–100% of income (Incurable debt trap)</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Immediate Cash Reserves</td>
                        <td>No lump sum available; monthly salary active</td>
                        <td className="text-emerald-700 font-semibold">Can raise 30%–50% lump sum via family / gold / PF</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Future Borrowing Goals</td>
                        <td className="text-emerald-600 font-semibold">Plan to buy a home or car within 12–24 months</td>
                        <td>No urgent credit needs; primary goal is debt freedom</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Delinquency Status</td>
                        <td>Regular account or early delay (SMA-0 / SMA-1)</td>
                        <td>90+ Days Past Due (NPA status / legal notices received)</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Psychological Stress Level</td>
                        <td>Manageable; confident in meeting revised EMIs</td>
                        <td className="text-rose-600 font-bold">Severe panic from ongoing harassment and litigation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 7: Transition Strategies */}
            <section id="transition-strategies" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                7. Transition Strategies: Failed Restructuring to OTS &amp; Converting Settled to Closed
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Financial strategies must remain flexible. Many borrowers start with restructuring and later need to pivot to settlement, while others settle and later wish to convert their CIBIL remark to &quot;Closed&quot;. Here is how both transition mechanisms operate under Indian banking guidelines:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
                {/* Transition A */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                  <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <RefreshCw className="w-5 h-5 text-[#1F5EFF]" />
                    Pivoting from Failed Restructuring to OTS
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    If you agreed to a restructured EMI plan but suffer a secondary income loss, do not attempt to borrow from predatory quick-loan apps.
                  </p>
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1.5">
                    <p><strong>Step 1:</strong> Issue a formal Hardship Inability Notice to the bank.</p>
                    <p><strong>Step 2:</strong> Demonstrate that continued EMI servicing is impossible.</p>
                    <p><strong>Step 3:</strong> Propose a final One-Time Settlement based on principal recovery.</p>
                  </div>
                </div>

                {/* Transition B */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                  <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    Converting &quot;Settled&quot; to &quot;Closed&quot; in CIBIL
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    If your financial liquidity recovers 2 to 3 years after a settlement, you can completely erase the &quot;Settled&quot; remark.
                  </p>
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1.5">
                    <p><strong>Step 1:</strong> Approach the original lender with your OTS Sanction Letter.</p>
                    <p><strong>Step 2:</strong> Pay the residual haircut amount (the waived discount).</p>
                    <p><strong>Step 3:</strong> Bank issues full Closure NDC and updates CIBIL to &quot;Closed&quot; in 30 days.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Step-by-Step Action Plan */}
            <section id="action-plan-rebuilding" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                8. Step-by-Step Action Roadmap &amp; 750+ CIBIL Rebuild Blueprint
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Whether you execute a restructuring or an OTS settlement, follow this battle-tested 4-step execution roadmap to resolve your liabilities cleanly and rehabilitate your credit profile:
              </p>

              <div className="space-y-4 my-6">
                <div className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center flex-shrink-0">
                    01
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      Comprehensive Debt &amp; Cash Flow Audit
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      List all outstanding loans, active interest rates, penal charges, and current DPD counts. Calculate your non-discretionary living expenses against verified take-home income to establish your real monthly EMI threshold.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center flex-shrink-0">
                    02
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      Draft Statutory Hardship Representation to Bank
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Submit a formal, written representation to the bank&apos;s Credit Restructuring Committee or Stressed Asset Resolution Branch citing RBI Master Directives. Attach salary slips, medical summaries, or business tax returns proving genuine distress.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center flex-shrink-0">
                    03
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      Secure Official Written Sanction &amp; No Dues Certificate
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Never transfer funds based on oral promises from collection agents. Verify that your Restructuring Agreement or OTS Sanction Letter is issued on the bank&apos;s official letterhead with authorized signatory credentials, account-specific UTR instructions, and a ₹0 NDC clause.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 font-black text-sm flex items-center justify-center flex-shrink-0">
                    04
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      Execute the 750+ CIBIL Score Rehabilitation Protocol
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Open a Fixed Deposit-backed secured credit card (e.g., IDFC WOW or Kotak 811 Dream Different) with a ₹25,000–₹50,000 limit. Maintain a Credit Utilization Ratio (CUR) below 20% and pay 100% of the bill on time every month. Your CIBIL score will cross <strong>750+ within 18 to 24 months</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: Frequently Asked Questions */}
            <CompanySection />

            <section id="faqs" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                9. Frequently Asked Questions: Loan Settlement vs Restructuring
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
                    <strong>Reserve Bank of India (RBI):</strong> Prudential Framework for Resolution of Stressed Assets (RBI/2018-19/203 DBR.No.BP.BC.45/21.04.048/2018-19).
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
                    <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Statutory reporting norms for TransUnion CIBIL, Experian, CRIF, and Equifax.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Supreme Court of India:</strong> <em>ICICI Bank vs. Prakash Kaur (2007)</em> &amp; <em>Sardar Associates vs. Punjab &amp; Sind Bank (2009)</em> on fair recovery and statutory compromise guidelines.
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 11: Internal Topic Badges (10 Links) */}
            <div className="my-10 pt-6 border-t border-slate-200">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
                Related Debt Resolution &amp; Legal Protection Guides
              </h4>
              <div className="flex flex-wrap gap-2">
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
                  href="/bank-loan-settlement-rules"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Bank Loan Settlement Rules
                </Link>
                <Link
                  href="/rbi-rules-for-recovery-agents"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  RBI Rules for Recovery Agents
                </Link>
                <Link
                  href="/loan-settlement-process-in-india"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Loan Settlement Process in India
                </Link>
                <Link
                  href="/how-to-remove-settled-status-from-cibil"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Remove Settled Status from CIBIL
                </Link>
                <Link
                  href="/unsecured-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Unsecured Loan Settlement
                </Link>
                <Link
                  href="/credit-card-settlement-process"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Credit Card Settlement Process
                </Link>
                <Link
                  href="/lok-adalat-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Lok Adalat Loan Settlement
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
                Specializing in bank compromise negotiations, RBI regulatory compliance, and CIBIL score forensic dispute resolution for borrowers across India.
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
                Facing Recovery Harassment or Legal Court Notices?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed mb-4">
                Don&apos;t face bank pressure alone. Speak with an empaneled SettleLoans advocate to stop illegal harassment and negotiate a lawful OTS or restructuring.
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
                    <strong>100% Legal Protection:</strong> Formal representations served to lenders under RBI Fair Practices Code.
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
                    <strong>No Hidden Upfront Fees:</strong> Ethical, transparent advisory engineered to protect borrower dignity.
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
