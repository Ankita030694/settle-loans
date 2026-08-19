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
  FileSpreadsheet
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

export default function PersonalLoanSettlementVsClosureClient() {
  const [activeId, setActiveId] = useState<string>('core-difference-explained');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'core-difference-explained', title: '1. Settlement vs. Closure Explained' },
    { id: 'cibil-score-mechanics', title: '2. CIBIL Score & Status Codes' },
    { id: 'future-loan-eligibility', title: '3. Future Loans & Credit Cards' },
    { id: 'ndc-certificate-differences', title: '4. No Dues Certificate (NDC)' },
    { id: 'rbi-settlement-directives', title: '5. RBI Directives & Borrower Rights' },
    { id: 'settled-to-closed-conversion', title: '6. Converting Settled to Closed' },
    { id: 'cibil-recovery-blueprint', title: '7. Step-by-Step 750+ Rebuild Plan' },
    { id: 'decision-framework-matrix', title: '8. Settlement vs Closure Matrix' },
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
      question: "What is the primary difference between loan settlement and loan closure in CIBIL?",
      answer: (
        <p>
          The fundamental difference centers on <strong>contractual fulfillment and bureau status tagging</strong>. In a <strong>Loan Closure</strong>, you pay 100% of the loan principal, contractual interest, and associated fees over the agreed tenure or via prepayment. The bank reports an account status of <strong>&quot;Closed&quot;</strong>, which enhances your credit profile. In a <strong>Loan Settlement</strong>, you negotiate a compromise (OTS) due to financial distress, paying only a negotiated fraction (typically 30%–60%). The bank writes off the remainder as a loss and reports the account status as <strong>&quot;Settled&quot;</strong>, which causes a 75–150 point score reduction.
        </p>
      )
    },
    {
      question: "How does loan settlement affect my CIBIL score compared to loan closure?",
      answer: (
        <p>
          A loan closure acts as a positive credit builder, typically increasing your score by <strong>+20 to +50 points</strong> while lowering your Debt-to-Income (DTI) ratio. Conversely, a loan settlement causes an immediate drop of <strong>75 to 150+ points</strong> because Credit Information Companies (CIBIL, Experian, CRIF, Equifax) record that the lender absorbed a financial haircut. However, settlement stops the continuous downward spiral of active default (-250 to -350 points) and halts penal interest.
        </p>
      )
    },
    {
      question: "How long does a 'Settled' status remain on my CIBIL report?",
      answer: (
        <p>
          Under Section 20 of the <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA)</strong>, licensed credit bureaus maintain historical repayment records for <strong>up to 7 years</strong>. However, credit scoring algorithms weigh the most recent 24 to 36 months of data far more heavily than older entries. By building a clean track record on secured credit instruments, the negative weight of a settlement tag diminishes sharply after <strong>18 to 24 months</strong>.
        </p>
      )
    },
    {
      question: "Can I get a new home loan or personal loan after settling a loan?",
      answer: (
        <p>
          Immediately following a settlement, Tier-1 automated underwriting systems will reject unsecured personal loans. However, <strong>secured credit options (FD-backed cards, gold loans) are accessible immediately</strong>. For long-term goals like home loans or mortgage finance, eligibility reopens after <strong>24 to 36 months</strong> once your score crosses 720+ and you produce the official bank No Dues Certificate.
        </p>
      )
    },
    {
      question: "Can I convert a 'Settled' status to 'Closed' in CIBIL later?",
      answer: (
        <p>
          <strong>Yes.</strong> If your financial liquidity improves, you can approach the original lending institution and offer to repay the balance amount that was waived during the OTS negotiation. Upon receiving the residual payment, the bank cancels the write-off entry, issues a revised Comprehensive Final No Dues Certificate, and submits a status modification from <strong>&quot;Settled&quot; to &quot;Closed&quot;</strong> to TransUnion CIBIL within 30 to 45 days.
        </p>
      )
    },
    {
      question: "What is the difference between an NDC for loan closure vs. loan settlement?",
      answer: (
        <p>
          A standard <strong>Loan Closure NDC</strong> certifies that 100% of contractual obligations have been fulfilled with zero loss to the institution. An <strong>OTS Settlement NDC</strong> explicitly mentions that the account was discharged under a formal compromise agreement, confirming that the borrower has no pending financial liability while recording that a concession/waiver was granted.
        </p>
      )
    },
    {
      question: "Is loan settlement better than continuing to miss EMIs without settlement?",
      answer: (
        <p>
          <strong>Settlement is substantially better than continuous default.</strong> An unresolved default continues to compound penal interest (24%–36% p.a.), causes consecutive 90+, 120+, 180+ DPD entries, triggers recovery agency harassment, and initiates criminal proceedings under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act. Settlement legally caps your liability, halts interest, and stops legal action.
        </p>
      )
    },
    {
      question: "Do banks charge tax or TDS on the waived loan amount during settlement?",
      answer: (
        <p>
          For individual consumer personal loans and retail credit cards, the principal waiver under an OTS is generally treated as a capital receipt and is not subject to income tax or TDS for individual borrowers. For commercial entities or business loans, debt waivers may attract provisions under Section 28(iv) or Section 41(1) of the Income Tax Act. Always verify with a chartered accountant.
        </p>
      )
    },
    {
      question: "How soon must banks update CIBIL after a loan closure or settlement?",
      answer: (
        <p>
          Under Reserve Bank of India Master Directions, all scheduled commercial banks and NBFCs are legally mandated to upload updated credit data to all four CICs (CIBIL, Experian, Equifax, CRIF High Mark) on a monthly basis, usually within <strong>30 to 45 days</strong> of final payment receipt.
        </p>
      )
    },
    {
      question: "What should I do if my bank reports 'Written Off' instead of 'Settled' after I paid the OTS?",
      answer: (
        <p>
          This is an actionable reporting violation. You should first raise an online <strong>CIBIL Dispute</strong> attaching your OTS Sanction Letter, bank payment UTR receipt, and No Dues Certificate. If the lending bank fails to rectify the bureau status to &quot;Settled&quot; with a ₹0 balance within 30 days, file an immediate complaint with the <strong>RBI Banking Ombudsman</strong> under the Reserve Bank - Integrated Ombudsman Scheme, 2021.
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

      {/* A. Editorial Hero Section - Compact Height */}
      <section className="w-full bg-[#2E2E2E] pt-10 pb-8 md:pt-14 md:pb-10 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-[#1F5EFF]/15 border border-[#1F5EFF]/30 text-[#1F5EFF] text-xs font-black mb-4 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#1F5EFF]" />
            CIBIL Forensics &amp; Comparative Financial Guide 2026
          </div>

          {/* H1 Headline */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-[#DEDEDE] mb-4 leading-[1.18] tracking-tight">
            Loan Settlement vs Loan Closure in CIBIL:{' '}
            <span className="text-[#1F5EFF]">Score Impact, Legal Differences &amp; Recovery Guide</span>
          </h1>

          {/* Subtitle / Direct Answer Snippet */}
          <p className="text-sm md:text-lg text-[#DEDEDE]/80 mb-5 max-w-3xl mx-auto leading-relaxed font-normal">
            Loan closure reflects 100% repayment with positive credit growth (+40 pts), while loan settlement resolves default via a negotiated one-time compromise, reducing your CIBIL score by 75–150 pts but granting legal immunity and debt freedom.
          </p>

          {/* Author & Review Meta Bar */}
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
              <span>Get Free Legal &amp; CIBIL Debt Analysis</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#core-difference-explained"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold py-3 px-5 rounded-xl border border-white/15 transition-all duration-300 text-sm"
            >
              <BookOpen className="w-4 h-4 text-blue-300" />
              <span>Read Full Comparison Analysis</span>
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
              <AnimatedCounter end={200} prefix="₹ " suffix="Cr+" />
            </div>
            <p className="text-xs text-slate-300 font-medium">
              Debt Settled Across Indian Banks
            </p>
          </div>
          <div className="p-2 border-l border-white/10">
            <div className="text-xl md:text-3xl text-amber-400 mb-0.5">
              <AnimatedCounter end={10000} suffix="+" />
            </div>
            <p className="text-xs text-slate-300 font-medium">
              Borrowers Protected Legally
            </p>
          </div>
          <div className="p-2 border-l border-white/10">
            <div className="text-xl md:text-3xl text-[#1F5EFF] mb-0.5">
              <AnimatedCounter end={100} suffix="%" />
            </div>
            <p className="text-xs text-slate-300 font-medium">
              RBI Fair Practices Code Compliant
            </p>
          </div>
        </div>
      </section>

      {/* C. Three-Column Main Body Grid */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          {/* Left Column (Sticky TOC) */}
          <aside className="hidden lg:block sticky top-24 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 xl:p-5 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900 font-black text-sm uppercase tracking-wider mb-4 pb-2 border-b border-slate-200">
                <BookOpen className="w-4 h-4 text-[#1F5EFF]" />
                <span>Table of Contents</span>
              </div>
              <nav className="space-y-1.5">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`text-xs md:text-sm block py-1.5 px-3 rounded-lg transition-all duration-200 leading-snug ${
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

          {/* Middle Column (Main Content) */}
          <main className="w-full min-w-0 font-sans text-slate-800 blog-content">
            {/* Key Takeaways Box */}
            <div className="bg-blue-50 border-l-8 border-[#1F5EFF] rounded-r-2xl p-6 md:p-8 mb-10 shadow-sm">
              <div className="flex items-center gap-2 text-[#1F5EFF] font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5" />
                <span>EXECUTIVE SUMMARY: LOAN SETTLEMENT VS LOAN CLOSURE</span>
              </div>
              <ul className="space-y-3 text-sm md:text-base text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Financial Definition:</strong> Loan Closure represents 100% contractual repayment of principal and interest. Loan Settlement (OTS) is a discounted compromise where the bank accepts 30%–60% of total dues and writes off the remaining balance.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>CIBIL Score Delta:</strong> Closure adds <strong>+20 to +50 points</strong> and grants immediate prime credit access. Settlement causes a controlled drop of <strong>75 to 150 points</strong>, tagging the account as &quot;Settled&quot;.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Legal Discharges:</strong> Both routes legally extinguish debtor liability, halt recovery actions, and provide a binding No Dues Certificate (NDC).
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Rebuilding Velocity:</strong> A borrower with a &quot;Settled&quot; tag can fully rebuild their CIBIL score to <strong>750+ within 18 to 24 months</strong> using secured credit cards and sub-25% credit utilization.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Status Reversibility:</strong> If your finances recover later, you can pay the waived haircut amount back to the bank to convert your CIBIL status permanently from <strong>&quot;Settled&quot; to &quot;Closed&quot;</strong>.
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Fundamental Core */}
            <section id="core-difference-explained" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                1. The Fundamental Difference: Loan Settlement vs. Loan Closure Explained
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                When managing personal loans, credit cards, or retail credit lines, borrowers frequently encounter the terms <em>loan closure</em> and <em>loan settlement</em>. While both mechanisms result in the termination of an active loan account, their financial mechanisms, legal consequences, and credit bureau footprints are vastly different.
              </p>

              {/* Statutory Definition Box */}
              <div className="bg-slate-100 border-l-4 border-slate-700 p-5 rounded-r-xl my-6">
                <p className="text-sm md:text-base font-semibold text-slate-900 italic">
                  &quot;Under Indian banking law and the Reserve Bank of India (Prudential Framework for Resolution of Stressed Assets) Directions, a Loan Closure represents complete discharge of contractual debt through full repayment. A Compromise Settlement (OTS) represents a negotiated resolution where the lending institution voluntarily concedes a portion of its claim to recover the residual amount from a distressed debtor.&quot;
                </p>
                <p className="text-xs text-slate-500 mt-2 font-medium">
                  — Banking Regulation Act, 1949 &amp; RBI Master Circular on Compromise Settlements (2023)
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                {/* Closure Card */}
                <div className="p-6 rounded-2xl border-2 border-emerald-200 bg-emerald-50/50">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                    <h3 className="text-lg font-black text-emerald-900">What is Loan Closure?</h3>
                  </div>
                  <p className="text-sm text-emerald-800 leading-relaxed mb-3">
                    Loan closure occurs when a borrower satisfies <strong>100% of their contractual debt obligations</strong>. This happens either at the natural completion of the loan tenure via equated monthly installments (EMIs) or through early prepayment/foreclosure.
                  </p>
                  <ul className="text-xs text-emerald-900 space-y-1.5 list-disc list-inside">
                    <li>Zero commercial loss or haircut absorbed by the lender.</li>
                    <li>Account status reported to CIBIL as <strong>&quot;Closed&quot;</strong>.</li>
                    <li>Positive boost to your CIBIL score (+20 to +50 points).</li>
                    <li>Immediate eligibility for premium credit cards and prime mortgages.</li>
                  </ul>
                </div>

                {/* Settlement Card */}
                <div className="p-6 rounded-2xl border-2 border-[#1F5EFF]/30 bg-blue-50/50">
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldCheck className="w-6 h-6 text-[#1F5EFF]" />
                    <h3 className="text-lg font-black text-blue-900">What is Loan Settlement (OTS)?</h3>
                  </div>
                  <p className="text-sm text-blue-800 leading-relaxed mb-3">
                    Loan settlement is a <strong>distress-driven financial compromise</strong> entered into when a borrower suffers genuine insolvency, job loss, illness, or business failure. The bank accepts a discounted one-time payment (usually 30%–60% of total dues) and waives the rest.
                  </p>
                  <ul className="text-xs text-blue-900 space-y-1.5 list-disc list-inside">
                    <li>The bank writes off the remaining balance as a commercial loss.</li>
                    <li>Account status reported to CIBIL as <strong>&quot;Settled&quot;</strong>.</li>
                    <li>Immediate score drop of <strong>75 to 150+ points</strong>.</li>
                    <li>Provides complete legal immunity and debt release under RBI guidelines.</li>
                  </ul>
                </div>
              </div>

              <p className="text-base leading-relaxed text-slate-700">
                In summary: <strong>Closure is a planned repayment victory</strong>, whereas <strong>Settlement is a legal life-raft</strong> designed to rescue borrowers from predatory debt spirals, mounting penal interest, and aggressive litigation.
              </p>
            </section>

            {/* Comparison Table 1: Comprehensive Feature Breakdown */}
            <div className="my-8">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                Comprehensive Comparison: Loan Closure vs. Loan Settlement in India
              </h3>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Key Parameter</th>
                      <th>Loan Closure (Standard / Foreclosure)</th>
                      <th>Loan Settlement (One-Time Settlement)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Repayment Obligation</td>
                      <td className="text-emerald-700 font-semibold">100% of Principal + Accrued Interest</td>
                      <td className="text-blue-700 font-semibold">Discounted Lump Sum (30% to 60% of Total Dues)</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">CIBIL Status Tag</td>
                      <td className="text-emerald-600 font-bold">&quot;Closed&quot;</td>
                      <td className="text-amber-600 font-bold">&quot;Settled&quot; / Current Balance: ₹0</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Immediate Score Impact</td>
                      <td className="text-emerald-600 font-semibold">+20 to +50 Points (Positive)</td>
                      <td className="text-rose-600 font-semibold">-75 to -150 Points (Temporary Drop)</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Lender Financial Loss</td>
                      <td>₹0 (Full Commercial Recovery)</td>
                      <td>Residual Amount Written Off as Loss</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Retention in Credit Bureau</td>
                      <td>7 Years (Reflects Pristine Payment History)</td>
                      <td>7 Years (Under CICRA Act, 2005)</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Future Unsecured Loans</td>
                      <td className="text-emerald-600 font-semibold">Instant / Seamless Eligibility</td>
                      <td className="text-amber-600 font-semibold">Restricted for 18–24 Months (Secured First)</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Home Loan Eligibility</td>
                      <td className="text-emerald-600 font-semibold">Immediate with Standard Income Ratios</td>
                      <td className="text-blue-600 font-semibold">Available after 24–36 Months (720+ Score)</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Legal Protection Status</td>
                      <td>Fully Discharged from Contract</td>
                      <td>Complete Immunity via Binding Bank Sanction</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 2: CIBIL Score Mechanics */}
            <section id="cibil-score-mechanics" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                2. CIBIL Score Mechanics: &quot;Closed&quot; vs. &quot;Settled&quot; vs. &quot;Written Off&quot;
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                To understand why lenders treat loan settlement and closure differently, one must look at how Credit Information Companies (TransUnion CIBIL, Experian, CRIF High Mark, and Equifax) encode account status in your Credit Information Report (CIR).
              </p>

              <div className="space-y-4 my-6">
                <div className="p-5 rounded-xl border border-emerald-200 bg-emerald-50/60">
                  <h3 className="text-base font-bold text-emerald-900 flex items-center gap-2 mb-1">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    1. &quot;Closed&quot; Status (Prime Quality)
                  </h3>
                  <p className="text-sm text-emerald-800 leading-relaxed">
                    The account ledger indicates zero outstanding balance, zero write-off amount, and zero Days Past Due (DPD). Automated underwriting software at Tier-1 institutions (HDFC, SBI, ICICI, Axis) scores this as an exemplary credit event.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-blue-200 bg-blue-50/60">
                  <h3 className="text-base font-bold text-blue-900 flex items-center gap-2 mb-1">
                    <ShieldCheck className="w-5 h-5 text-[#1F5EFF]" />
                    2. &quot;Settled&quot; Status (Compromise Resolution)
                  </h3>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    The account reflects an active balance of <strong>₹0</strong>, but the bureau report contains a non-zero figure in the <em>&quot;Amount Written Off&quot;</em> or <em>&quot;Settlement Amount&quot;</em> field. While the debtor is legally discharged, automated algorithms flag this as a historical haircut event.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-rose-200 bg-rose-50/60">
                  <h3 className="text-base font-bold text-rose-900 flex items-center gap-2 mb-1">
                    <AlertTriangle className="w-5 h-5 text-rose-600" />
                    3. &quot;Written Off&quot; / &quot;Suit Filed&quot; (Active Default Danger)
                  </h3>
                  <p className="text-sm text-rose-800 leading-relaxed">
                    The borrower stopped paying without a formal OTS sanction. The bank moved the balance to its bad-debt ledger. Outstanding balance continues to reflect full arrears with compounding penal interest, DPD escalates past 180+, and legal action under Section 138 of the NI Act or Section 25 of the PSS Act remains active.
                  </p>
                </div>
              </div>

              {/* Score Trajectory Comparison Graph/Table */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-6">
                <h4 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-3">
                  <TrendingUp className="w-5 h-5 text-[#1F5EFF]" />
                  Comparative CIBIL Score Trajectory Over 36 Months
                </h4>
                <div className="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th>Timeline</th>
                        <th>Standard Loan Closure</th>
                        <th>Loan Settlement (OTS)</th>
                        <th>Unsettled Default (NPA)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-bold">Initial Event (Month 0)</td>
                        <td className="text-emerald-600 font-semibold">750 &rarr; 780 (+30 pts)</td>
                        <td className="text-amber-600 font-semibold">700 &rarr; 580 (-120 pts)</td>
                        <td className="text-rose-600 font-semibold">700 &rarr; 520 (-180 pts)</td>
                      </tr>
                      <tr>
                        <td className="font-bold">Month 12</td>
                        <td className="text-emerald-600 font-semibold">790+ (Prime)</td>
                        <td className="text-blue-600 font-semibold">660 – 690 (Rebuilding)</td>
                        <td className="text-rose-600 font-semibold">480 – 510 (Free fall)</td>
                      </tr>
                      <tr>
                        <td className="font-bold">Month 24</td>
                        <td className="text-emerald-600 font-semibold">800+ (Excellent)</td>
                        <td className="text-emerald-600 font-semibold">730 – 755 (Prime Rebound)</td>
                        <td className="text-rose-600 font-semibold">Sub-480 (Blacklisted)</td>
                      </tr>
                      <tr>
                        <td className="font-bold">Month 36</td>
                        <td className="text-emerald-600 font-semibold">800+ (Flawless)</td>
                        <td className="text-emerald-700 font-semibold">760 – 790+ (Fully Restored)</td>
                        <td className="text-rose-700 font-semibold">Recovery Suits / DRT</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 3: Future Loan Eligibility */}
            <section id="future-loan-eligibility" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                3. Future Loan Eligibility: Borrowing After Closure vs. Settlement
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                A major anxiety among borrowers is whether a loan settlement permanently bars them from securing credit products in the future. The truth lies in understanding the difference between <strong>automated algorithmic screening</strong> and <strong>manual underwriting discretion</strong>.
              </p>

              <div className="space-y-4 my-6">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-[#1F5EFF]" />
                    Phase 1: Secured Credit Cards (Immediate Qualification)
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Following a loan settlement, traditional unsecured credit cards are unreachable for 12 months. However, <strong>Fixed Deposit (FD)-backed credit cards</strong> (such as IDFC FIRST WOW, Kotak 811 Dream Different, or OneCard) require zero credit score scrutiny. They report monthly active credit utilization to CIBIL, serving as the bedrock of your score rehabilitation.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-amber-600" />
                    Phase 2: Unsecured Personal Loans (After 18–24 Months)
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    The specific bank that accepted a haircut during your settlement will maintain an <em>internal negative ledger</em> and will decline future unsecured applications. However, <strong>other non-consortium banks and progressive NBFCs</strong> do not share internal blacklists. Once your score rebounds to 740+ through 18 months of disciplined payments, external lenders will approve fresh unsecured personal loans.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <Landmark className="w-5 h-5 text-emerald-600" />
                    Phase 3: Home Loans &amp; Mortgage Finance (After 24–36 Months)
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Home loans are secured asset-backed facilities evaluated primarily on property collateral value (LTV ratio) and debt-to-income ratios. Housing Finance Companies (HFCs) and nationalized banks routinely sanction home loans to borrowers with a past &quot;Settled&quot; mark, provided they present their genuine <strong>No Dues Certificate (NDC)</strong> and maintain a reconstructed score of 720+.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: No Dues Certificate Breakdown */}
            <section id="ndc-certificate-differences" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                4. The Legal &amp; Financial Standing: No Dues Certificate (NDC) Comparison
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Whether you close a loan or settle it, the <strong>No Dues Certificate (NDC)</strong> (also referred to as a Closure Letter or Release Certificate) is the single most important legal instrument you must acquire from the lending bank.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <FileCheck className="w-5 h-5 text-emerald-600" />
                    Standard Loan Closure NDC
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Certifies that all principal, interest, and charges have been paid in full without any contractual default or concession.
                  </p>
                  <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-700 space-y-1">
                    <p><strong>Clause Type:</strong> Full Satisfaction &amp; Discharge</p>
                    <p><strong>Bureau Mandate:</strong> Update account to &quot;Closed&quot;</p>
                    <p><strong>Residual Liability:</strong> Absolutely Nil</p>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <Scale className="w-5 h-5 text-[#1F5EFF]" />
                    Compromise Settlement (OTS) NDC
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Certifies that the loan was settled under a mutually approved One-Time Settlement compromise, extinguishing all lender recovery rights.
                  </p>
                  <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-700 space-y-1">
                    <p><strong>Clause Type:</strong> OTS Compromise Discharge</p>
                    <p><strong>Bureau Mandate:</strong> Update balance to ₹0 / &quot;Settled&quot;</p>
                    <p><strong>Residual Liability:</strong> Legally Extinguished</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <h4 className="text-amber-900 font-bold text-base flex items-center gap-2 mb-1.5">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  Mandatory Verification: The 45-Day CIBIL Reporting Mandate
                </h4>
                <p className="text-sm text-amber-800 leading-relaxed">
                  As per RBI Master Directives, regulated financial institutions must transmit updated credit data to TransUnion CIBIL, Experian, Equifax, and CRIF High Mark within <strong>30 to 45 days</strong> of issuing the NDC. Always pull an updated credit report 60 days after settlement to verify that your active balance displays <strong>₹0</strong> and no delinquent DPD flags are being accumulated.
                </p>
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
                      Executive Roadmap Summary
                    </span>
                    <h3 className="text-sm md:text-base font-black text-white leading-tight">
                      Loan Settlement vs. Loan Closure: 4-Pillar Decision &amp; Recovery Blueprint
                    </h3>
                  </div>
                </div>
                <span className="hidden sm:inline-block py-1 px-2.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-semibold">
                  RBI Master Direction Compliant
                </span>
              </div>

              {/* 4 Pillars Summary Grid */}
              <div className="p-4 md:p-6 bg-slate-50">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {/* Pillar 1 */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-sm mb-2.5">
                      01
                    </div>
                    <h4 className="text-sm font-black text-slate-900 mb-1">Repayment Integrity</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong>Closure:</strong> 100% full dues paid.<br />
                      <strong>Settlement:</strong> 30%–60% lump sum via formal bank OTS sanction.
                    </p>
                  </div>

                  {/* Pillar 2 */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#1F5EFF] flex items-center justify-center font-black text-sm mb-2.5">
                      02
                    </div>
                    <h4 className="text-sm font-black text-slate-900 mb-1">CIBIL Status Tag</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong>Closure:</strong> &quot;Closed&quot; (+40 pts).<br />
                      <strong>Settlement:</strong> &quot;Settled&quot; (-120 pts) with balance reset to ₹0.
                    </p>
                  </div>

                  {/* Pillar 3 */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-black text-sm mb-2.5">
                      03
                    </div>
                    <h4 className="text-sm font-black text-slate-900 mb-1">Legal Immunity</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Both pathways extinguish debt liability and nullify court notices under Section 138/DRT.
                    </p>
                  </div>

                  {/* Pillar 4 */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-black text-sm mb-2.5">
                      04
                    </div>
                    <h4 className="text-sm font-black text-slate-900 mb-1">Score Rebound</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Restore CIBIL to <strong>750+ within 18–24 months</strong> using secured FD credit cards and &lt;25% CUR.
                    </p>
                  </div>
                </div>

                {/* Horizontal Progress Milestones */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-2">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-3">
                    Compromise Resolution &amp; Recovery Timeline
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-[11px] font-bold text-[#1F5EFF] block">Step 1</span>
                      <span className="text-xs font-bold text-slate-800">Hardship Verification</span>
                      <span className="text-[10px] text-slate-500 block">Bank OTS Negotiation</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-[11px] font-bold text-[#1F5EFF] block">Step 2</span>
                      <span className="text-xs font-bold text-slate-800">OTS Sanction Letter</span>
                      <span className="text-[10px] text-slate-500 block">Direct Account Deposit</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-[11px] font-bold text-[#1F5EFF] block">Step 3</span>
                      <span className="text-xs font-bold text-slate-800">No Dues Certificate</span>
                      <span className="text-[10px] text-slate-500 block">₹0 Balance in CIBIL</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-[11px] font-bold text-emerald-600 block">Step 4</span>
                      <span className="text-xs font-bold text-slate-800">Rebound to 750+</span>
                      <span className="text-[10px] text-slate-500 block">Prime Credit Restored</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Takeaway Footer Bar with Case Evaluation CTA */}
              <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>
                    <strong>Key Takeaway:</strong> Controlled score drop &bull; 100% Legal Protection &bull; Option to Convert Settled to Closed later.
                  </span>
                </div>
                <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                  Get Free Case Evaluation &rarr;
                </Link>
              </div>
            </div>

            {/* Section 5: RBI Directives & Borrower Rights */}
            <section id="rbi-settlement-directives" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                5. RBI Directives &amp; Borrower Legal Rights During Debt Resolution
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Many borrowers endure mental distress and unlawful recovery agent intimidation because they mistakenly believe loan settlement is an illegal default. In reality, compromise settlements are recognized, statutory recovery mechanisms governed by Reserve Bank of India notifications.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                    <Landmark className="w-5 h-5 text-[#1F5EFF]" />
                    RBI Master Direction on Compromise Settlements (June 8, 2023)
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    The RBI mandated all commercial banks, primary cooperative banks, and NBFCs to adopt board-approved policies for compromise settlements and technical write-offs. The framework provides a standardized statutory process for lenders to settle stressed loans without prejudice to prudential norms.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    RBI Fair Practices Code &amp; Anti-Harassment Safeguards
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Under the Master Circular on Recovery Agents, lenders and collection agencies are strictly forbidden from contacting debtors before 8:00 AM or after 7:00 PM, calling friends/family, using abusive threats, or visiting workplaces without authorization. Violations carry penal consequences under the Integrated Ombudsman Scheme.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                    <Scale className="w-5 h-5 text-purple-600" />
                    Supreme Court Precedent on Debtor Protection (ICICI Bank vs. Prakash Kaur)
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    The Supreme Court of India ruled that banking recovery must adhere strictly to lawful procedure and fundamental human dignity. Coercive tactics and unauthorized third-party harassment are unlawful and subject to criminal liability.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Settled to Closed Conversion Protocol */}
            <section id="settled-to-closed-conversion" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                6. Settled to Closed: How to Pay the Waived Balance Later to Clean CIBIL
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                A lesser-known provision under Indian credit regulations allows a borrower who previously settled an account to subsequently convert their CIBIL status from <strong>&quot;Settled&quot; to &quot;Closed&quot;</strong> once their personal finances improve.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Here is the verified 5-step operational protocol:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-6 space-y-4">
                <ol className="list-decimal list-inside space-y-3.5 text-sm md:text-base text-slate-700">
                  <li>
                    <strong>Retrieve Write-Off Ledger Details:</strong> Contact the Stressed Asset Resolution Department or Principal Nodal Officer of the original bank and obtain the exact written-off balance amount (the waiver granted during OTS).
                  </li>
                  <li>
                    <strong>Submit Intent to Convert Status Letter:</strong> File a formal representation offering to pay the residual written-off sum in exchange for an updated status of &quot;Closed&quot; on all four credit bureaus.
                  </li>
                  <li>
                    <strong>Deposit Residual Payment:</strong> Deposit the balance funds directly into the bank&apos;s designated ledger account via RTGS/NEFT.
                  </li>
                  <li>
                    <strong>Obtain Comprehensive Final NDC:</strong> Ensure the bank issues an updated, unconditional No Dues Certificate stating full closure of contractual obligations.
                  </li>
                  <li>
                    <strong>Bureau Data Upload:</strong> The bank submits the revised status to TransUnion CIBIL, Equifax, Experian, and CRIF High Mark within 30 to 45 days, permanently replacing the &quot;Settled&quot; tag with &quot;Closed&quot;.
                  </li>
                </ol>
              </div>
            </section>

            {/* Section 7: Step-by-Step 750+ CIBIL Recovery Roadmap */}
            <section id="cibil-recovery-blueprint" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                7. From 580 to 750+: The Step-by-Step Credit Rebuilding Blueprint
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Even if you choose not to convert your settled loan immediately, you can reliably restore your CIBIL score to prime status (750+) through a disciplined 3-pillar strategy.
              </p>

              <div className="space-y-4 my-6">
                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                  <h4 className="font-bold text-slate-900 text-base mb-1">
                    Pillar 1: Establish Secured Credit Lines (FD-Backed Cards)
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Open a fixed deposit of ₹25,000–₹50,000 with banks like IDFC FIRST or Kotak Mahindra to obtain a secured credit card. Use it for routine utility and grocery expenses, ensuring the card reports regular, active repayment cycles to CIBIL.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                  <h4 className="font-bold text-slate-900 text-base mb-1">
                    Pillar 2: Maintain Credit Utilization Ratio (CUR) Below 25%
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    If your secured card limit is ₹40,000, never generate a monthly bill exceeding ₹10,000. Keep your utilization low to signal financial stability rather than credit hunger.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                  <h4 className="font-bold text-slate-900 text-base mb-1">
                    Pillar 3: Zero Hard Inquiries for 12 Consecutive Months
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Resist the urge to apply for multiple unsecured loans across various fintech apps or bank portals. Each hard inquiry triggers a 5–10 point deduction and signals distress to bureau algorithms.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Decision Framework Matrix */}
            <section id="decision-framework-matrix" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                8. Decision Matrix: When to Settle vs. When to Strive for Full Closure
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                To assist distressed borrowers in making the right financial decision, SettleLoans advocates have synthesized the following strategic decision framework:
              </p>

              <div className="overflow-x-auto my-6">
                <table>
                  <thead>
                    <tr>
                      <th>Borrower Scenario</th>
                      <th>Recommended Strategy</th>
                      <th>Core Rationale</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">
                        Temporary liquidity crunch; stable income intact; plans to buy a home within 12 months.
                      </td>
                      <td className="text-emerald-700 font-bold">Strive for Full Loan Closure / Restructuring</td>
                      <td>Preserves pristine CIBIL score; prevents underwriting roadblocks for impending home loan.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">
                        Severe job loss, chronic illness, business bankruptcy; compounding penal debt exceeding total annual earnings.
                      </td>
                      <td className="text-[#1F5EFF] font-bold">Opt for One-Time Settlement (OTS)</td>
                      <td>Caps compounding 36% interest; halts legal notices under Section 138; provides immediate debt freedom.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">
                        Past settlement completed 2 years ago; now earning high surplus; preparing for major corporate directorship or mortgage.
                      </td>
                      <td className="text-purple-700 font-bold">Convert Settled to Closed</td>
                      <td>Clears the residual write-off tag from CIBIL, fully unlocking Tier-1 bank prime rates.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 9: FAQ Accordions */}
            <CompanySection />

            <section id="faqs" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                9. Frequently Asked Questions (FAQ)
              </h2>
              <p className="text-base leading-relaxed mb-8 text-slate-600">
                Get clear, authoritative answers to the most crucial questions regarding loan settlement vs loan closure in CIBIL.
              </p>

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

            {/* Regulatory Sources & References (Exactly 5 Links) */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                <Landmark className="w-4 h-4 text-[#1F5EFF]" />
                <span>Official Regulatory Sources &amp; Legal Authorities</span>
              </h4>
              <ul className="space-y-2.5 text-xs md:text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    Reserve Bank of India (RBI) — Master Directives on Compromise Settlements &amp; Prudential Resolution
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    TransUnion CIBIL — Credit Information Companies (Regulation) Act, 2005 Dispute Guidelines
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://sci.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    Supreme Court of India — Landmark Jurisprudence on Debtor Protection &amp; Recovery Fair Practice
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://ibbi.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    Insolvency and Bankruptcy Board of India (IBBI) — Individual Debt Resolution Framework
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://ecourts.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    eCourts Services — National Judicial Data Grid for Debt Recovery &amp; Lok Adalat Awards
                  </a>
                </li>
              </ul>
            </div>

            {/* Internal Topic Badges (10 Links) */}
            <div className="my-10 pt-6 border-t border-slate-200">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
                Related Debt Resolution &amp; Legal Protection Guides
              </h4>
              <div className="flex flex-wrap gap-2">
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
                  href="/legal-notice-for-loan-default"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Legal Notice for Loan Default
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
                    Debt Settlement Strategist &amp; Consumer Rights Advocate
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Ashish specializes in stressed asset negotiations, RBI regulatory compliance, and CIBIL score forensic dispute resolution for borrowers across India.
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

            {/* Card 2: Emergency Legal Defense CTA */}
            <div className="bg-gradient-to-br from-[#1F5EFF] to-blue-700 text-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 text-blue-100 text-xs font-bold uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Emergency Advocate Assistance</span>
              </div>
              <h3 className="text-xl font-black mb-3 leading-tight">
                Facing Recovery Harassment or Legal Court Notices?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Don&apos;t navigate bank pressure alone. Speak with an empaneled SettleLoans advocate to stop illegal harassment and negotiate a lawful OTS.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white hover:bg-slate-100 text-[#1F5EFF] font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 shadow"
              >
                Talk to a Legal Advocate
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
                    <strong>100% Legal Protection:</strong> Formal legal representations served to banks under RBI Fair Practices Code.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Shield:</strong> Immediate cessation of illegal third-party recovery agent calls and home visits.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct Bank Sanctions:</strong> All settlement letters verified on official bank letterhead with ₹0 NDC guarantee.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>No Hidden Upfront Fees:</strong> Ethical, transparent advisory engineered to protect the borrower&apos;s dignity.
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
