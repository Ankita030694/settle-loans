'use client';
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';

import React, { useState, useEffect } from 'react';
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
  Percent,
  Calculator,
  IndianRupee,
  BadgePercent,
  Receipt,
  FileCheck,
  CheckCircle,
  AlertCircle,
  Gavel,
  BadgeAlert,
  Coins
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

export default function PersonalLoanSettlementPercentageClient() {
  const [activeId, setActiveId] = useState<string>('core-percentage-benchmark');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'core-percentage-benchmark', title: '1. What Percentage is Settlement?' },
    { id: 'bank-ots-formula', title: '2. Bank OTS Formula & NPA Math' },
    { id: 'key-determinants', title: '3. Factors Dictating Your %' },
    { id: 'lender-comparison-matrix', title: '4. Bank & NBFC Comparison' },
    { id: 'fund-arrangement-playbook', title: '5. Fund Planning & Negotiation' },
    { id: 'settlement-calculators-cases', title: '6. Real Case Calculations' },
    { id: 'cibil-tax-legal-realities', title: '7. Tax, CIBIL & Legal Realities' },
    { id: 'faqs', title: '8. Frequently Asked Questions' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const headings = tocItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 220;

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
      question: "What percentage is a typical personal loan settlement in India?",
      answer: (
        <p>
          In Indian banking practice, an unsecured personal loan settlement typically ranges between <strong>30% and 50% of the total outstanding claim</strong> (translating to a <strong>50% to 70% discount/haircut</strong>). In cases of acute, documented hardship—such as severe medical disability, permanent job loss, or business insolvency—and where the loan has remained in default for more than 180 to 360 days, experienced settlement advocates frequently secure OTS closures at <strong>25% to 35% of the principal balance</strong>.
        </p>
      )
    },
    {
      question: "Is the settlement percentage calculated on the principal or the total outstanding dues?",
      answer: (
        <p>
          Lenders initially issue settlement offers against the <strong>total outstanding claim</strong>, which bundles unpaid principal, accrued regular interest, 24%–36% penal interest, late fees, and bounce charges. However, during formal advocate-led negotiations, legal counsel first mandates a <strong>100% complete waiver of all penal interest and bounce charges</strong>. The final compromise percentage is then negotiated directly against the base principal balance.
        </p>
      )
    },
    {
      question: "Why do banks and NBFCs agree to a 50% or higher discount on personal loans?",
      answer: (
        <p>
          Personal loans are 100% unsecured credit facilities. The lender holds no underlying physical collateral (unlike mortgages or auto loans) and cannot invoke summary asset seizure under the SARFAESI Act, 2002. Furthermore, under Reserve Bank of India (RBI) prudential provisioning guidelines, banks must set aside between 15% and 100% capital provisions from their operating profits for non-performing assets. Recovering 30% to 50% cash upfront in an OTS enables the bank to release locked capital and avoid years of expensive civil litigation.
        </p>
      )
    },
    {
      question: "Can I settle an overdue personal loan for just 20% to 30% of the dues?",
      answer: (
        <p>
          Yes, achieving a 20% to 30% settlement is viable under specific conditions: 1) The account has aged into a <strong>Doubtful (D-2/D-3) or Loss Asset</strong> classification (typically 12 to 24+ months of continuous non-payment); 2) The borrower provides conclusive documentary proof of permanent income loss; or 3) The matter is settled before a sitting judge during a <strong>National Lok Adalat</strong> organized by NALSA, where institutional lenders are incentivized to clear dead debt portfolios.
        </p>
      )
    },
    {
      question: "How does the default timeline affect the settlement percentage discount?",
      answer: (
        <p>
          During the initial 1 to 90 days (SMA-0 to SMA-2 stage), banks rarely offer discounts over 10%–20% on accrued interest because recovery teams still expect full repayment. Between Days 91 and 180 (Substandard NPA), provisioning kicks in and settlement offers typically land between <strong>45% and 60%</strong>. Beyond 180 to 360+ days (Doubtful NPA), maximum provisioning pressure forces lenders to accept the deepest haircuts, making <strong>30% to 45% settlement deals</strong> achievable.
        </p>
      )
    },
    {
      question: "Do Public Sector Banks offer better settlement percentages than Private Banks?",
      answer: (
        <p>
          Public Sector Banks (such as SBI, PNB, and Bank of Baroda) operate under rigid, board-approved One-Time Settlement schemes and are subject to strict vigilance audits by the CVC and CAG. Consequently, PSU banks generally demand <strong>50% to 70% of the principal balance</strong>. Conversely, private lenders (HDFC, ICICI, Axis, Kotak) and fintech NBFCs (Bajaj Finserv, Poonawalla) operate with dynamic, risk-modeled recovery desks that can sanction flexible haircuts of <strong>30% to 45%</strong> to clear distressed retail books rapidly.
        </p>
      )
    },
    {
      question: "Can I pay the negotiated settlement amount in installments, or must it be a lump sum?",
      answer: (
        <p>
          While the deepest percentage discounts (e.g., 30%–35%) are unlocked with a single, immediate lump-sum payment, most banks allow structured settlements across <strong>2 to 4 monthly installments</strong>. However, choosing installment tranches usually results in a slightly higher settlement percentage (e.g., 40%–45%) because lenders price in the risk of default on subsequent installment dates.
        </p>
      )
    },
    {
      question: "What are the tax implications of the waived loan amount in India?",
      answer: (
        <p>
          For individual salaried borrowers, the waived principal portion of an unsecured personal consumption loan represents a capital remission and is generally not considered taxable income under the Indian Income Tax Act. However, for self-employed individuals or business loans where interest was previously claimed as a tax deduction, Section 194R and Section 28(iv) may treat loan waivers as taxable business remission. Always obtain clear legal and tax counsel during settlement structuring.
        </p>
      )
    },
    {
      question: "How will a 40% settlement affect my CIBIL score and credit history?",
      answer: (
        <p>
          When an account is settled at a discount, the bank reports the loan to TransUnion CIBIL, Experian, and CRIF High Mark as <strong>&quot;Settled&quot; with a ₹0 outstanding balance</strong>. This triggers an immediate credit score dip of 75 to 150 points. However, because active legal exposure and compounding default interest are permanently eliminated, you can systematically rebuild your credit score back to <strong>750+ within 18 to 24 months</strong> using disciplined credit-builder instruments.
        </p>
      )
    },
    {
      question: "How do I ensure the bank doesn't demand more money after paying the settlement?",
      answer: (
        <p>
          Never make any payment based on verbal assurances or WhatsApp messages from recovery agents. You must first secure an official <strong>OTS Sanction Letter printed on the bank&apos;s registered letterhead</strong>, detailing your exact loan account number, agreed settlement amount, and payment deadline. Pay only into your designated loan account via RTGS/NEFT, and demand the issuance of a formal <strong>No Dues Certificate (NDC)</strong> within 15 to 30 days of final payment.
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

      {/* A. Editorial Hero Section - Exact #2D313D Custom Charcoal Background */}
      <section className="w-full bg-[#2D313D] border-b border-slate-700/60 pt-8 pb-7 md:pt-12 md:pb-9 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-[#1F5EFF]/20 border border-[#1F5EFF]/40 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#60A5FA]" />
            2026 Strategic Debt Settlement &amp; Financial Planning Blueprint
          </div>

          {/* H1 Headline - Compact Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            What Percentage is Personal Loan Settlement?{' '}
            <span className="text-[#60A5FA]">(Average Discounts, OTS Formulas &amp; Fund Planning)</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Planning to settle an unsecured personal loan in India? Learn the industry standard settlement benchmarks (30%–50%), RBI NPA provisioning math, bank-by-bank haircut formulas, and exact fund arrangement strategies to maximize your savings.
          </p>

          {/* Author & Review Meta Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs text-slate-400 mb-5 pb-3 border-b border-slate-700/60 max-w-xl mx-auto">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-[9px]">
                AJ
              </div>
              <span>
                Written by{' '}
                <Link
                  href="/authors/ashish-jhangra"
                  className="text-white hover:text-blue-300 font-semibold underline decoration-[#1F5EFF] underline-offset-2"
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
              <Calendar className="w-3.5 h-3.5 text-blue-300" />
              <span>Updated: August 19, 2026</span>
            </div>
          </div>

          {/* Primary Hero CTA */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-5 rounded-xl shadow-md hover:shadow-blue-500/20 transition-all duration-300 text-xs sm:text-sm group"
            >
              <span>Calculate Your Settlement Percentage</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#core-percentage-benchmark"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold py-2.5 px-4 rounded-xl border border-white/20 transition-all duration-300 text-xs sm:text-sm"
            >
              <BookOpen className="w-4 h-4 text-blue-300" />
              <span>Read Industry Benchmarks</span>
            </a>
          </div>
        </div>
      </section>

      {/* B. Animated Stats Strip */}
      <StatsStrip />

      {/* C. Three-Column Main Body Grid */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          {/* Left Column (Sticky TOC Only) */}
          <aside className="hidden lg:block sticky top-24 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 xl:p-5 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900 font-black text-sm uppercase tracking-wider mb-4 pb-2 border-b border-slate-200">
                <BookOpen className="w-4 h-4 text-[#1F5EFF]" />
                <span>Guide Navigation</span>
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
            {/* Key Takeaways Box (Top) */}
            <div className="bg-blue-50 border-l-8 border-[#1F5EFF] rounded-r-2xl p-6 md:p-8 mb-10 shadow-sm">
              <div className="flex items-center gap-2 text-[#1F5EFF] font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5" />
                <span>EXECUTIVE SUMMARY: PERSONAL LOAN SETTLEMENT BENCHMARKS</span>
              </div>
              <ul className="space-y-3 text-sm md:text-base text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>The Industry Benchmark:</strong> In India, standard personal loan settlements close between <strong>30% and 50% of total accumulated dues</strong>, delivering a net <strong>50% to 70% cash saving</strong> for the distressed borrower.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Settlement % vs. Haircut %:</strong> Understand the math clearly: A &quot;40% Settlement&quot; means you pay 40% of the claim and the bank waives 60% as a haircut. On a ₹10 Lakh default, you pay ₹4 Lakhs and save ₹6 Lakhs.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Penal Charge Elimination First:</strong> Legitimate legal negotiations mandate 100% waiver of accrued late fees and 24%–36% penal interest before calculating principal compromise percentages.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>The NPA Provisioning Sweet Spot:</strong> Settlements reach their lowest percentage targets (30%–40%) after the account has crossed <strong>180+ days of default (Doubtful NPA classification)</strong>, when banks face severe RBI provisioning costs.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct Bank Sanction &amp; ₹0 NDC:</strong> All payments must be deposited directly into your designated bank loan account against a stamped OTS Sanction Letter on official bank letterhead, followed by a formal No Dues Certificate.
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Core Question Answered */}
            <section id="core-percentage-benchmark" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                1. What Percentage is Personal Loan Settlement in India? The 30%–50% Standard Explained
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                When borrowers experience severe financial disruption—such as sudden job termination, critical illness, or business collapse—repaying an unsecured personal loan in full becomes mathematically impossible. In this situation, the single most urgent question borrowers ask is: <em>&quot;What percentage will my bank actually accept to close this loan permanently?&quot;</em>
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Across scheduled commercial banks, private sector lenders, and non-banking financial companies (NBFCs) in India, the verified industry average for a <strong>One-Time Settlement (OTS)</strong> ranges between <strong>30% and 50% of the total claimed dues</strong>. In situations involving acute hardship, prolonged default, or disputes resolved in National Lok Adalats, settlement figures can drop as low as <strong>25% to 35% of the principal balance</strong>.
              </p>

              {/* Terminology Clarification Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <Percent className="w-5 h-5 text-[#1F5EFF]" />
                    Settlement Amount Percentage (What You Pay)
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    This represents the exact proportion of the outstanding debt you must arrange in cash to satisfy the lender&apos;s compromise demand. For example, a <strong>35% settlement</strong> on a ₹10,00,000 total claim means you pay <strong>₹3,50,000</strong> to fully discharge the debt.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <BadgePercent className="w-5 h-5 text-emerald-600" />
                    Haircut / Discount Percentage (What You Save)
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    This is the proportion of the loan the bank agrees to write off and permanently forgive. In the same example above, paying ₹3,50,000 yields a <strong>65% haircut (₹6,50,000 net savings)</strong> for the borrower.
                  </p>
                </div>
              </div>

              {/* Components of Total Dues */}
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                Deconstructing the Bank&apos;s Claim: Why Total Dues Are Inflated
              </h3>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                When a borrower defaults on EMIs for 6 months, a loan with an original ₹5 Lakh balance suddenly balloons into a ₹7.5 Lakh demand notice. Lenders artificially inflate default balances using three distinct layers:
              </p>
              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <p className="font-bold text-slate-900 text-sm mb-1">
                    1. Base Principal Outstanding (The Real Debt)
                  </p>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    The actual disbursed capital remaining unpaid after accounting for all successful historical EMI payments.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <p className="font-bold text-slate-900 text-sm mb-1">
                    2. Contractual Accrued Interest
                  </p>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    The normal annualized interest rate (e.g., 12% to 18% p.a.) calculated during the non-payment period.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <p className="font-bold text-slate-900 text-sm mb-1">
                    3. Compounded Penal Charges &amp; Bounce Penalties (Negotiable to Zero)
                  </p>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Exorbitant penalty interest (often 24% to 36% p.a. compounded monthly) plus ₹500–₹1,000 NACH bounce charges per sweep. In professional settlement negotiations, <strong>100% of this third layer is waived immediately</strong>.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: The Bank's Internal OTS Formula */}
            <section id="bank-ots-formula" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                2. The Bank&apos;s Internal OTS Formula: How Lenders Calculate Settlement Percentages
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Banks and NBFCs do not pick settlement figures at random. Every compromise offer generated by a lender&apos;s Stressed Asset Resolution Branch (SARB) is governed by strict mathematical risk models, Net Present Value (NPV) recovery equations, and the <strong>Prudential Norms on Income Recognition and Asset Classification (IRAC)</strong> mandated by the Reserve Bank of India.
              </p>

              {/* RBI Provisioning Explained */}
              <div className="bg-slate-50 border border-slate-300 rounded-2xl p-6 my-6">
                <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                  <Landmark className="w-5 h-5 text-[#1F5EFF]" />
                  The Economic Driver: Why RBI Provisioning Forces Banks to Settle
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                  When an unsecured personal loan misses 3 consecutive EMI cycles (90 days), it is classified as a <strong>Non-Performing Asset (NPA)</strong>. Under RBI regulations, the bank is legally barred from recognizing accrued interest as income and is forced to set aside cash reserves (provisions) directly from its operating profits to cover potential default losses:
                </p>
                <ul className="text-xs md:text-sm text-slate-600 space-y-2 list-disc list-inside">
                  <li><strong>Substandard NPA (91 to 365 Days):</strong> The bank must maintain a mandatory <strong>15% to 25% capital provision</strong> on unsecured debt.</li>
                  <li><strong>Doubtful-1 NPA (12 to 24 Months):</strong> Provisioning escalates to <strong>40% to 100%</strong> of the unsecured balance.</li>
                  <li><strong>Loss Asset (&gt;24 Months):</strong> The loan is categorized as completely uncollectible, requiring <strong>100% full provisioning write-off</strong>.</li>
                </ul>
                <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-200">
                  <em>Strategic Insight:</em> When you offer a 35%–45% lump-sum settlement on a Doubtful NPA, the bank instantly recovers hard cash, releases its 100% locked provisioning reserve back into profit, and clears toxic non-performing assets off its balance sheet.
                </p>
              </div>

              {/* 4-Sided Bordered Table 1: NPA Timeline vs Settlement % */}
              <div className="my-8">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                  Default Vintage vs. Expected Personal Loan Settlement Percentage Matrix
                </h3>
                <div className="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th>Default Stage &amp; Vintage</th>
                        <th>RBI Classification</th>
                        <th>Bank Provisioning %</th>
                        <th>Realistic Settlement % (What You Pay)</th>
                        <th>Expected Discount / Haircut %</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-bold text-slate-900">Days 1 – 60 (1 to 2 Missed EMIs)</td>
                        <td>SMA-0 / SMA-1</td>
                        <td>0% (Standard)</td>
                        <td className="text-rose-600 font-bold">85% – 100%</td>
                        <td>0% – 15% (Interest waiver only)</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Days 61 – 90 (3rd Missed EMI)</td>
                        <td>SMA-2 (Pre-NPA)</td>
                        <td>0% (Standard)</td>
                        <td className="text-amber-700 font-bold">75% – 90%</td>
                        <td>10% – 25% (Penal charges waived)</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Days 91 – 180 (3 to 6 Months)</td>
                        <td>Substandard NPA</td>
                        <td>15% – 25%</td>
                        <td className="text-amber-600 font-bold">50% – 65%</td>
                        <td>35% – 50% (Substantial interest haircut)</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-[#1F5EFF]">Days 181 – 365 (6 to 12 Months)</td>
                        <td>Doubtful NPA (D-1)</td>
                        <td>40% – 100%</td>
                        <td className="text-emerald-600 font-bold">35% – 48%</td>
                        <td>52% – 65% (Optimal negotiation window)</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-[#1F5EFF]">Days 365+ (1 to 2+ Years)</td>
                        <td>Doubtful / Loss Asset</td>
                        <td>100% Provisioned</td>
                        <td className="text-emerald-700 font-bold">25% – 38%</td>
                        <td>62% – 75% (Maximum discount potential)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 3: Key Determinants Dictating Percentage */}
            <section id="key-determinants" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                3. The 5 Crucial Determinants That Decide Whether You Get a 30% or 70% Settlement
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Why does one borrower settle a ₹10 Lakh loan for ₹3.2 Lakhs (32%) while another borrower is offered only ₹6.5 Lakhs (65%)? Settlement percentages are not static—they hinge directly upon 5 verifiable legal, financial, and procedural factors:
              </p>

              {/* 5 Determinant Cards */}
              <div className="space-y-4 my-6">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">1</span>
                    Verifiability &amp; Severity of Genuine Financial Hardship
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Banks distinguish ruthlessly between a <em>genuine stressed borrower</em> and a <em>wilful defaulter</em>. Providing ironclad documentary evidence—such as a formal pink slip/termination letter, medical oncology/surgery discharge summaries, GST cancellation certificates, or bank statements showing zero credit inflows—convinces the credit committee that legal recovery will yield zero return, unlocking 30%–40% settlement tiers.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">2</span>
                    100% Unsecured Nature &amp; Inapplicability of SARFAESI Act
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Unlike home loans or vehicle loans where lenders can confiscate pledged physical assets within 60 days under the <strong>Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002</strong>, personal loans carry zero asset hypothecation. The bank cannot touch your residential flat, family car, or household belongings without winning a protracted civil summary suit (Order 37 CPC), which takes 4 to 7 years in Indian civil courts.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">3</span>
                    Payment Structure: Single Lump-Sum vs. Multi-Tranche Installments
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Cash in hand today is worth infinitely more to a bank manager than promises of future installments. Offering to wire 100% of the agreed settlement sum within 7 to 15 banking days consistently secures an additional <strong>8% to 15% discount</strong> compared to requesting a 3 to 6-month installment plan.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">4</span>
                    Default Vintage &amp; Write-Off Classification
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    The older the default, the lower the bank&apos;s valuation of the asset on its books. When a loan has migrated from internal collections to external recovery agencies and ultimately into the bank&apos;s bad-debt ledger (written-off portfolio), settlement desks possess wide discretionary powers to accept nominal compromise payments.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">5</span>
                    Professional Legal Advocacy vs. Direct Vulnerable Negotiation
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    When individual borrowers negotiate directly, recovery call centers exploit their fear of police or court notices to extract 70%–80% payments. When empaneled legal advocates represent the borrower under the <strong>RBI Fair Practices Code and Indian Contract Act</strong>, negotiations bypass aggressive collection agents and proceed directly with authorized Zonal Managers and SARB credit heads.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Lender Category Breakdown */}
            <section id="lender-comparison-matrix" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                4. Bank &amp; NBFC Comparison Matrix: Expected Settlement Percentages by Lender Type
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Not all financial institutions operate under identical regulatory mandates. Public sector banks, private commercial giants, and digital fintech NBFCs handle loan default resolution through distinct operational frameworks:
              </p>

              {/* 4-Sided Bordered Table 2: Lender Comparison */}
              <div className="my-8">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                  Comprehensive Personal Loan Settlement Comparison Across Indian Lenders
                </h3>
                <div className="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th>Lender Category</th>
                        <th>Representative Institutions</th>
                        <th>Typical Settlement % Range</th>
                        <th>Average Haircut / Savings %</th>
                        <th>Negotiation Flexibility &amp; Speed</th>
                        <th>Most Effective Resolution Forum</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-bold text-slate-900">1. Public Sector Banks (PSUs)</td>
                        <td>State Bank of India (SBI), PNB, Bank of Baroda, Canara Bank</td>
                        <td className="font-bold text-slate-800">50% – 65% of Principal</td>
                        <td>35% – 50% Haircut</td>
                        <td>Low flexibility; strict policy guidelines; requires committee approval</td>
                        <td><strong>National Lok Adalat</strong> &amp; Board-Approved OTS Schemes</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-[#1F5EFF]">2. Top Tier Private Banks</td>
                        <td>HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra Bank, IndusInd</td>
                        <td className="font-bold text-[#1F5EFF]">35% – 48% of Total Claim</td>
                        <td>52% – 65% Haircut</td>
                        <td>Moderate to High; data-driven risk models; fast 15-day approvals</td>
                        <td>Direct SARB Legal Representation &amp; Nodal Negotiation</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-emerald-700">3. Retail &amp; Consumer NBFCs</td>
                        <td>Bajaj Finance, Tata Capital, Aditya Birla Capital, Poonawalla Fincorp</td>
                        <td className="font-bold text-emerald-700">30% – 45% of Total Claim</td>
                        <td>55% – 70% Haircut</td>
                        <td>High flexibility at 120+ days; aggressive initially, compromise-friendly later</td>
                        <td>Advocate Escalation to Central Legal &amp; Dispute Desks</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-purple-700">4. Digital Lending Apps &amp; Fintechs</td>
                        <td>KreditBee, MoneyTap, Navi, CASHe, PaySense, Ring</td>
                        <td className="font-bold text-purple-700">25% – 40% of Total Dues</td>
                        <td>60% – 75% Haircut</td>
                        <td>Very High flexibility after 90 days; eager to clear digital NPA pools</td>
                        <td>Formal Legal Notice citing RBI Digital Lending Guidelines</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Compact High-Impact Infographic Banner (Between Section 4 and 5) */}
            <div className="bg-white border-2 border-blue-200 rounded-3xl overflow-hidden shadow-lg my-12 text-slate-800">
              {/* Header Strip */}
              <div className="bg-[#0A2540] text-white py-3.5 px-5 flex items-center justify-between border-b-2 border-[#1F5EFF]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#1F5EFF] flex items-center justify-center text-white text-xs shadow-sm">
                    <Scale className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-300 block">
                      Strategic Decision Matrix
                    </span>
                    <h3 className="text-sm md:text-base font-black text-white leading-tight">
                      Personal Loan Settlement: 4-Pillar Percentage &amp; OTS Roadmap
                    </h3>
                  </div>
                </div>
                <a
                  href="/images/infographics/personal-loan-settlement-percentage.jpg"
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
                    src="/images/infographics/personal-loan-settlement-percentage.jpg"
                    alt="Personal Loan Settlement Percentage & OTS Formula Roadmap Infographic"
                    className="w-full h-auto object-contain max-h-[420px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Takeaway Footer Bar with Case Evaluation CTA */}
              <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>
                    <strong>Key Strategy:</strong> Target 35%–45% fund arrangement &bull; Mandate official bank letterhead sanction &bull; Demand ₹0 No Dues Certificate.
                  </span>
                </div>
                <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                  Get Free Settlement Eligibility Evaluation &rarr;
                </Link>
              </div>
            </div>

            {/* Section 5: Fund Arrangement & Negotiation Playbook */}
            <section id="fund-arrangement-playbook" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                5. Fund Planning &amp; Negotiation Playbook: How to Arrange Capital and Settle at the Lowest %
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Understanding the target settlement percentage is only half the battle. The critical practical challenge is arranging the necessary compromise funds without plunging into new high-cost debt traps. Follow this structured 5-step fund planning and negotiation playbook:
              </p>

              {/* Step by step cards */}
              <div className="space-y-4 my-6">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">1</span>
                    Calculate Your Target Settlement Fund Pool (The 35% Benchmark)
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Take your original unpaid principal balance (ignore penal charges). Calculate <strong>35% to 40% of that figure</strong>. This represents your target settlement capital. For example, if your unpaid principal is ₹6,00,000, your target pool is ₹2,10,000 to ₹2,40,000. Start quietly accumulating this amount across 3 to 6 months in a non-lending bank account.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">2</span>
                    Identify Ethical Liquidity Sources (Never Take Micro-Loan Apps)
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Never borrow from predatory 7-day mobile loan apps or take credit card cash advances to settle a personal loan. Safe liquidity avenues include: 1) Friendly, interest-free loans from immediate family members; 2) Partial liquidation of non-essential physical assets; 3) Provident Fund (PF/EPFO) partial withdrawal under non-employment/medical clauses; 4) Modest gold pledge at single-digit sovereign rates.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">3</span>
                    Anchor Initial Offers at 20%–25% to Settle at 35%–40%
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    When formal settlement discussions open with the bank&apos;s SARB or nodal desk, submit an initial hardship compromise proposal anchored at <strong>20% to 25% of total dues</strong>, accompanied by your hardship dossier. The bank will inevitably counter at 50%–60%. This leaves ample negotiating headroom to meet at the optimal 35%–42% sweet spot.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">4</span>
                    Reject &quot;Partial Payment for Tenure Extension&quot; Traps
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Recovery callers frequently demand ₹20,000 to ₹50,000 as an &quot;advance token&quot; promising they will &quot;hold the account&quot; or &quot;apply for settlement later.&quot; <strong>Never pay a single rupee</strong> without an official sanction letter. Token payments are instantly swallowed by the bank as penal interest without reducing principal or preventing further recovery action.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">5</span>
                    Execute Settlement Solely Against Official Bank Letterhead Sanctions
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    The bank must issue a formal One-Time Settlement (OTS) letter containing: your exact loan account number, full borrower name, final compromise amount, strict payment timeline, explicit waiver of balance dues, and an undertaking to issue a ₹0 No Dues Certificate and update credit bureaus within 30 days.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Real-World Case Calculations */}
            <section id="settlement-calculators-cases" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                6. Real-World Case Calculations: How Settlement Percentage Math Works in Practice
              </h2>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                To see exactly how settlement percentage formulas translate into real cash savings, review these three verified settlement case studies resolved by SettleLoans empanelled advocates across different loan sizes and borrower profiles:
              </p>

              {/* 3 Case Study Cards */}
              <div className="space-y-6 my-6">
                {/* Case 1 */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <h3 className="font-bold text-slate-900 text-base">
                      Case Study 1: Salaried IT Professional (₹8.5 Lakhs Total Claim &bull; Job Loss)
                    </h3>
                    <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full">
                      Settled at 36.5% (Saved ₹5.4 Lakhs)
                    </span>
                  </div>
                  <div className="overflow-x-auto my-3">
                    <table className="text-xs md:text-sm">
                      <thead>
                        <tr>
                          <th>Parameter</th>
                          <th>Lender Claim Before Legal Intervention</th>
                          <th>Advocate Negotiated OTS Sanction</th>
                          <th>Net Relief / Savings</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Principal Balance</td>
                          <td>₹5,80,000</td>
                          <td>₹3,10,000 (Settlement Sum)</td>
                          <td className="text-emerald-600 font-bold">₹2,70,000 Principal Waived</td>
                        </tr>
                        <tr>
                          <td>Accrued Regular Interest</td>
                          <td>₹1,45,000</td>
                          <td>₹0</td>
                          <td className="text-emerald-600 font-bold">₹1,45,000 (100% Waived)</td>
                        </tr>
                        <tr>
                          <td>Penal Charges &amp; Bounce Fees</td>
                          <td>₹1,25,000</td>
                          <td>₹0</td>
                          <td className="text-emerald-600 font-bold">₹1,25,000 (100% Waived)</td>
                        </tr>
                        <tr className="bg-slate-100 font-bold">
                          <td>Total Liability</td>
                          <td>₹8,50,000</td>
                          <td className="text-[#1F5EFF]">₹3,10,000 (36.5% of Total Claim)</td>
                          <td className="text-emerald-700">₹5,40,000 Net Haircut (63.5%)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2">
                    <em>Resolution Context:</em> HDFC Bank personal loan default of 210 days. SettleLoans advocates submitted the corporate layoff letter and bank statement showing zero income. Settled in a single lump-sum tranche with official ₹0 NDC issued within 21 days.
                  </p>
                </div>

                {/* Case 2 */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <h3 className="font-bold text-slate-900 text-base">
                      Case Study 2: MSME Trader with Multi-Lender Debt (₹14.2 Lakhs Total Claim &bull; Business Loss)
                    </h3>
                    <span className="text-xs bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full">
                      Settled at 39.4% (Saved ₹8.6 Lakhs)
                    </span>
                  </div>
                  <div className="overflow-x-auto my-3">
                    <table className="text-xs md:text-sm">
                      <thead>
                        <tr>
                          <th>Lender</th>
                          <th>Total Claimed Dues</th>
                          <th>Final OTS Amount</th>
                          <th>Settlement %</th>
                          <th>Net Savings</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>ICICI Bank Personal Loan</td>
                          <td>₹6,20,000</td>
                          <td>₹2,40,000</td>
                          <td>38.7%</td>
                          <td className="text-emerald-600 font-bold">₹3,80,000</td>
                        </tr>
                        <tr>
                          <td>Bajaj Finance Flexi Loan</td>
                          <td>₹4,80,000</td>
                          <td>₹1,90,000</td>
                          <td>39.5%</td>
                          <td className="text-emerald-600 font-bold">₹2,90,000</td>
                        </tr>
                        <tr>
                          <td>Axis Bank Unsecured Credit</td>
                          <td>₹3,20,000</td>
                          <td>₹1,30,000</td>
                          <td>40.6%</td>
                          <td className="text-emerald-600 font-bold">₹1,90,000</td>
                        </tr>
                        <tr className="bg-slate-100 font-bold">
                          <td>Consolidated Portfolio</td>
                          <td>₹14,20,000</td>
                          <td className="text-[#1F5EFF]">₹5,60,000</td>
                          <td className="text-[#1F5EFF]">39.4% (Average)</td>
                          <td className="text-emerald-700">₹8,60,000 (60.6% Net Haircut)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2">
                    <em>Resolution Context:</em> Multi-creditor debt across 3 institutions. SettleLoans orchestrated a coordinated legal representation, synchronized default timelines to prevent cross-litigation, and negotiated structured 2-installment settlements for all three accounts.
                  </p>
                </div>

                {/* Case 3 */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <h3 className="font-bold text-slate-900 text-base">
                      Case Study 3: Acute Medical Hardship (₹5.0 Lakhs Default &bull; National Lok Adalat)
                    </h3>
                    <span className="text-xs bg-purple-100 text-purple-800 font-bold px-3 py-1 rounded-full">
                      Settled at 30.0% (Saved ₹3.5 Lakhs)
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-3">
                    A teacher in Pune defaulted on a ₹5,00,000 SBI personal loan following open-heart surgery and subsequent loss of employment. The total claim had risen to ₹6,40,000 with interest. Represented by SettleLoans advocates at the Pune District National Lok Adalat, the matter was presented before the judicial bench with medical documentation.
                  </p>
                  <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs md:text-sm">
                    <p className="font-bold text-slate-900 mb-1">
                      Final Lok Adalat Award: ₹1,50,000 (30.0% of Original Principal / 23.4% of Claimed Dues)
                    </p>
                    <p className="text-slate-600">
                      The judicial award was signed with immediate effect, having the force of a final non-appealable civil decree. Full No Dues Certificate handed over on the spot.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: CIBIL, Tax & Legal Realities */}
            <section id="cibil-tax-legal-realities" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                7. CIBIL Impact, Tax Implications (Sec 194R) &amp; The 750+ Credit Rebuild Roadmap
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                While settling a personal loan for 35%–45% delivers immediate financial freedom and halts all legal risk, borrowers must understand the post-settlement regulatory and credit realities:
              </p>

              {/* CIBIL Reality Box */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl my-6">
                <h3 className="font-bold text-amber-900 text-base mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  How Credit Bureaus (CIBIL, Experian, CRIF) Record a Settlement
                </h3>
                <p className="text-sm text-amber-800 leading-relaxed mb-3">
                  Under the Credit Information Companies (Regulation) Act (CICRA 2005), lenders are legally mandated to report settled credit accounts accurately. The account status is tagged as <strong>&quot;Settled&quot;</strong> rather than &quot;Closed&quot;, and the balance is marked as <strong>₹0</strong>.
                </p>
                <p className="text-xs text-amber-700 leading-relaxed">
                  <strong>The Real-World Impact:</strong> Your credit score will experience a temporary drop of 75 to 150 points. However, having a &quot;Settled&quot; account with ₹0 dues is vastly superior to carrying an &quot;Active Written-Off / 900+ DPD Default&quot; status that compounds monthly and prevents you from ever obtaining future credit.
                </p>
              </div>

              {/* Tax Implications Box */}
              <div className="bg-slate-50 border border-slate-300 rounded-2xl p-6 my-6">
                <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                  <IndianRupee className="w-5 h-5 text-[#1F5EFF]" />
                  Tax Treatment of Waived Loan Percentages (Income Tax Act &amp; Section 194R)
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-2">
                  <strong>For Salaried Borrowers (Personal Consumption):</strong> Loan principal waivers on genuine personal consumption loans are treated as capital receipts/remissions and do not attract income tax under Section 194R or Section 28(iv).
                </p>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  <strong>For Business / Professional Borrowers:</strong> If you availed an unsecured loan for business working capital and previously deducted the interest as a business expenditure, the waived portion may be scrutinized under Section 41(1) or Section 28(iv) as remission of trading liability. Ensure your settlement agreement specifies the non-commercial nature of the compromise.
                </p>
              </div>

              {/* 4-Step CIBIL Rebuilding Blueprint */}
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                The 4-Step Blueprint to Rebuild Your CIBIL Score Back to 750+ in 18–24 Months:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-bold mb-2">1</span>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Verify Bureau ₹0 Balance</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Download your CIBIL report 45 days post-settlement. Verify that the outstanding balance reflects exactly ₹0 and all active delinquency tags have ceased.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-bold mb-2">2</span>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Obtain Secured Credit Card</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Open a Fixed Deposit (FD) of ₹25,000–₹50,000 with a bank offering secured cards (e.g., IDFC FIRST WOW or Kotak 811 Dream Different) without income checks.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-bold mb-2">3</span>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Maintain &lt;25% Utilization</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Use only ₹5,000–₹10,000 of your limit for recurring utilities and groceries. Set up auto-debit for 100% total bill repayment on or before the due date.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-bold mb-2">4</span>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Avoid Unsecured Inquiries</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Refrain from applying for unsecured credit cards or personal loans for at least 12 months. Every hard rejection damages your recovering score trajectory.
                  </p>
                </div>
              </div>
            </section>

            <CompanySection />

            {/* Section 8: FAQs */}
            <section id="faqs" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                8. Frequently Asked Questions (FAQ): Personal Loan Settlement Percentages
              </h2>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                Find clear, authoritative answers to the most critical legal, mathematical, and procedural questions regarding loan settlement percentages in India:
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

            {/* Sources Strip */}
            <div className="my-10 p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-[#1F5EFF]" />
                Authoritative Legal &amp; Regulatory Sources
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    Reserve Bank of India (RBI) — Master Circular on Prudential Norms on Income Recognition, Asset Classification (IRAC) &amp; Provisioning
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
                    TransUnion CIBIL — Credit Information Companies (Regulation) Act, 2005 (CICRA) Settlement Reporting Norms
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    National Legal Services Authority (NALSA) — National Lok Adalat Compoundable Debt Compromise Framework
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
                    Supreme Court of India — Landmark Jurisprudence on Fair Practices in Debtor Recovery &amp; Unsecured Credit
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    RBI Complaint Management System (CMS) — Integrated Ombudsman Scheme for Banking Grievances
                  </a>
                </li>
              </ul>
            </div>

            {/* Internal Topic Badges (10 Links) */}
            <div className="my-10 pt-6 border-t border-slate-200">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
                Related Debt Settlement &amp; Legal Protection Guides
              </h4>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/personal-loan-debt-settlement"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Debt Settlement
                </Link>
                <Link
                  href="/personal-loan-settlement-fees"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Settlement Fees
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Settlement CIBIL Impact
                </Link>
                <Link
                  href="/cannot-pay-personal-loan-emi"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Cannot Pay Personal Loan EMI
                </Link>
                <Link
                  href="/multiple-personal-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Multiple Personal Loan Settlement
                </Link>
                <Link
                  href="/personal-loan-settlement-lawyer"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Settlement Lawyer
                </Link>
                <Link
                  href="/personal-loan-settlement-letter-format"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Settlement Letter Format
                </Link>
                <Link
                  href="/personal-loan-settlement-vs-closure"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Settlement vs Closure
                </Link>
                <Link
                  href="/personal-loan-settlement-vs-restructuring"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Settlement vs Restructuring
                </Link>
                <Link
                  href="/bank-loan-settlement-rules"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Bank Loan Settlement Rules
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
                  <div className="font-bold text-slate-900 text-base leading-tight">
                    <Link
                      href="/authors/ashish-jhangra"
                      className="hover:text-[#1F5EFF] transition-colors"
                    >
                      Ashish Jhangra
                    </Link>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">
                    Debt Settlement Strategist &amp; Consumer Rights Advocate
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Ashish specializes in stressed asset negotiations, RBI NPA regulatory provisioning, and debt dispute resolution for retail borrowers across India.
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
                <span>Debt Settlement Legal Advisory</span>
              </div>
              <div className="text-xl font-black mb-3 leading-tight">
                Want to Settle Your Personal Loan at the Lowest %?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Don&apos;t settle blindly on recovery caller demands. Let our empaneled legal advocates evaluate your loan, eliminate penal interest, and negotiate the maximum permissible haircut.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white hover:bg-slate-100 text-[#1F5EFF] font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 shadow"
              >
                Get Free Settlement Evaluation
              </Link>
            </div>

            {/* Card 3: Trust Signals Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                <span>Why Borrowers Trust SettleLoans</span>
              </div>
              <ul className="space-y-3.5 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Maximum Legal Haircut:</strong> Strategic negotiations targeting 50%–70% waivers on total claimed defaults.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct Bank Sanctions:</strong> 100% verified settlement letters printed on official bank letterheads.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Shield:</strong> Immediate formal legal notices served to lenders under RBI Fair Practices Code.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed ₹0 NDC:</strong> Full closure documentation ensuring complete debt immunity and clean bureau reporting.
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
