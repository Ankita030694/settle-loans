"use client";
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  ShieldCheck,
  Scale,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Clock,
  FileText,
  PhoneCall,
  Award,
  Sparkles,
  Lock,
  Building2,
  HelpCircle,
  Users,
  Wallet,
  Landmark,
  ShieldAlert,
  Percent,
  Check,
  X,
  ExternalLink
} from 'lucide-react';

const TOC_SECTIONS = [
  { id: 'multi-debt-crisis', title: '1. Anatomy of the Multi-Debt Spiral in India' },
  { id: 'simultaneous-negotiation', title: '2. Can Multiple Loans Be Settled Simultaneously?' },
  { id: 'settlement-pool-vs-consolidation', title: '3. Single Settlement Pool vs Debt Consolidation' },
  { id: 'comparison-matrix', title: '4. Strategy Comparison: Loan vs Agency vs DIY vs IBC' },
  { id: 'infographic-framework', title: '5. Multi-Loan Settlement Architecture (Infographic)' },
  { id: 'legal-protection-framework', title: '6. Legal Protection Against Multi-Bank Harassment' },
  { id: 'step-by-step-roadmap', title: '7. 6-Stage Roadmap to Settle Multiple Debts' },
  { id: 'lender-settlement-matrix', title: '8. Multi-Lender Negotiation Discounts Matrix' },
  { id: 'cibil-rehabilitation', title: '9. Post-Settlement CIBIL Score Rehabilitation' },
  { id: 'faqs', title: '10. Frequently Asked Questions' },
];

const FAQS_LIST = [
  {
    question: "Can an agency negotiate multiple personal loans from different banks at the same time?",
    answer: "Yes. Professional debt settlement agencies like SettleLoans specialize in multi-creditor negotiations. They perform a unified debt audit, establish formal legal representation across all your lenders (PSU banks, private banks, NBFCs, and fintech apps), and negotiate One-Time Settlements (OTS) in parallel or via a structured priority waterfall while shielding you from recovery harassment."
  },
  {
    question: "How does a single monthly settlement pool work when I have 4 to 8 different loans?",
    answer: "Instead of trying to pay fragmented, unaffordable EMIs to 5–8 different lenders simultaneously, you stop servicing individual EMIs and deposit one fixed, budget-friendly amount each month into a dedicated savings or escrow account. As this settlement fund accumulates, legal negotiators negotiate with lenders one-by-one or in batches, executing lump-sum settlements using accumulated capital."
  },
  {
    question: "What is the difference between a debt consolidation loan and multiple personal loan settlement?",
    answer: "A debt consolidation loan requires taking a brand-new, large loan to pay off smaller debts in full (100% principal + fresh interest), requiring a high credit score (750+). Multiple personal loan settlement is designed for distressed borrowers who cannot pay: an agency negotiates substantial waivers (typically 40% to 70% off total outstanding balance) to close all accounts for a fraction of what is owed."
  },
  {
    question: "Which lenders should be settled first: instant fintech apps or large commercial banks?",
    answer: "A strategic waterfall approach is used. Instant fintech apps (e.g., KreditBee, Navi, MoneyTap) and high-interest credit cards are often settled first because they carry aggressive collection tactics and high penal interest. Large commercial banks (HDFC, ICICI, SBI) usually follow formal NPA aging protocols and require 90–180 days before their regional settlement committees offer maximum OTS discounts."
  },
  {
    question: "How does SettleLoans stop harassment when recovery agents from 5 different lenders are calling daily?",
    answer: "Upon onboarding, SettleLoans issues formal Advocates on Record representation notices to all lenders, citing RBI Master Directions on Fair Practices Code and Recovery Agents. This mandates that all financial communications and settlement discussions be routed through your appointed legal counsel, stopping abusive phone calls, workplace visits, and unauthorized contact with family members."
  },
  {
    question: "What happens if one lender sends a Section 138 cheque bounce notice while another files an arbitration summons?",
    answer: "Our specialized banking litigation lawyers handle all incoming notices synchronously. We draft formal legal replies to Section 138 (NI Act) and Section 25 (Payment and Settlement Systems Act) NACH bounce notices within statutory deadlines, challenge unilateral arbitration appointments under the Arbitration & Conciliation Act, and transfer the dispute into formal Lok Adalat or pre-litigation settlement channels."
  },
  {
    question: "What is the realistic settlement discount percentage when settling multiple unsecured loans?",
    answer: "When properly negotiated after NPA classification, borrowers typically achieve waivers between 40% and 75% on the total claim. All accrued penal interest, bounce charges, and late fees are 100% waived, and the principal outstanding is negotiated down depending on verifiable hardship documentation."
  },
  {
    question: "Can banks freeze my savings or salary account if I default on multiple personal loans?",
    answer: "A bank can only exercise the Right of Banker’s General Lien (Section 171 of the Indian Contract Act) on accounts held within their own banking institution. They cannot freeze accounts held at a completely different, uninvolved bank without a specific court order. Part of our initial multi-debt onboarding strategy is establishing a fresh, unlinked operational account to protect your daily livelihood."
  },
  {
    question: "Will each lender issue a separate No Objection Certificate (NOC) / No Dues Certificate (NDC)?",
    answer: "Yes. Because each loan agreement is an independent legal contract, every bank, NBFC, or fintech app issues its own official One-Time Settlement (OTS) sanction letter prior to payment, followed by a formal No Dues Certificate (NDC/NOC) confirming zero balance and closure within 15–30 days of settlement payment."
  },
  {
    question: "How long does the entire multi-personal loan settlement process take from start to finish?",
    answer: "Resolving a multi-loan portfolio typically spans 4 to 12 months, depending on the number of creditors, the total debt volume, and your monthly capacity to fund the settlement pool. Immediate legal shielding takes effect within 24–48 hours, while final closures and NOC acquisitions proceed systematically."
  }
];

export default function MultiplePersonalLoanSettlementClient() {
  const [activeSection, setActiveSection] = useState<string>(TOC_SECTIONS[0].id);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = TOC_SECTIONS.length - 1; i >= 0; i--) {
        const element = document.getElementById(TOC_SECTIONS[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(TOC_SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-[#1F5EFF] selection:text-white">
      {/* Scoped CSS for 4-Sided Bordered Comparison Tables */}
      <style jsx global>{`
        .blog-content table {
          width: 100%;
          border: 1px solid #CBD5E1 !important;
          border-collapse: separate !important;
          border-spacing: 0 !important;
          border-radius: 12px !important;
          overflow: hidden !important;
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .blog-content th, .blog-content td {
          border-right: 1px solid #E2E8F0 !important;
          border-bottom: 1px solid #E2E8F0 !important;
          padding: 12px 16px !important;
        }
        .blog-content tr:last-child td {
          border-bottom: none !important;
        }
        .blog-content th:last-child, .blog-content td:last-child {
          border-right: none !important;
        }
      `}</style>

      {/* 1. HERO CONTAINER (#2D313D Background) */}
      <header className="w-full bg-[#2D313D] text-white border-b border-slate-700/60 pt-10 pb-9 md:pt-14 md:pb-11 px-4 md:px-8 lg:px-16 relative overflow-hidden text-center">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1F5EFF]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#1F5EFF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F5EFF]/20 text-[#4F85F6] text-xs md:text-sm font-semibold mb-4 border border-[#1F5EFF]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Multi-Creditor Commercial Debt Resolution</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            How to Settle Multiple Personal Loans in India: <span className="text-[#4F85F6]">Simultaneous Multi-Lender Resolution</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Drowning in unsecured loans across Fintech apps, NBFCs, and major banks? Discover how an expert settlement agency consolidates your debt burden into one manageable monthly allocation and negotiates all lenders simultaneously under strict RBI frameworks.
          </p>

          <div className="text-xs text-slate-400 border-b border-slate-700/60 max-w-xl mx-auto pb-3 mb-5 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5 font-medium text-slate-200">
              <FileText className="w-3.5 h-3.5 text-[#4F85F6]" />
              Authored by Advocate Ashish Jhangra
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Scale className="w-3.5 h-3.5 text-emerald-400" />
              Legally Reviewed & RBI Compliant
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              14 Min Comprehensive Read
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-[#1F5EFF] hover:bg-blue-600 text-white font-semibold py-2.5 px-6 rounded-xl transition-all shadow-lg hover:shadow-[#1F5EFF]/30 text-sm flex items-center justify-center gap-2 group"
            >
              <span>Get Free Multi-Debt Evaluation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href="#simultaneous-negotiation"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold py-2.5 px-6 rounded-xl transition-all text-sm flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <span>How Simultaneous Negotiation Works</span>
            </a>
          </div>
        </div>
      </header>

      {/* 2. CRISP LIGHT-THEMED STATS STRIP */}
      <StatsStrip />

      {/* 3. WIDESCREEN 3-COLUMN LAYOUT CONTAINER */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">

          {/* LEFT COLUMN: ONLY Table of Contents */}
          <aside className="hidden lg:block sticky top-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200">
                <FileText className="w-4 h-4 text-[#1F5EFF]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Table of Contents
                </span>
              </div>
              <nav className="flex flex-col space-y-1 text-xs">
                {TOC_SECTIONS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block py-1.5 px-2.5 rounded-lg transition-all leading-snug ${
                        isActive
                          ? 'bg-[#1F5EFF] text-white font-semibold shadow-sm'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                      }`}
                    >
                      {item.title}
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* MIDDLE COLUMN: Expanded Maximum Readable Width */}
          <main className="blog-content min-w-0">

            {/* Quick Answer Summary Box (GEO Optimized) */}
            <div className="bg-slate-50 border-l-4 border-[#1F5EFF] rounded-r-2xl p-5 sm:p-6 mb-8 border border-slate-200/80 shadow-sm">
              <div className="flex items-center gap-2 text-[#1F5EFF] font-bold text-sm uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Executive Summary & Search Intent Crux</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                Can an agency negotiate multiple personal loans into one manageable payment?
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                <strong>Yes.</strong> If you owe 3 to 10 different unsecured personal loans and credit cards across multiple banks, NBFCs, and fintech apps, attempting to pay fragmented EMIs leads to continuous default and compounding penal interest. A dedicated debt settlement agency acts as your centralized legal shield: they halt multi-agent harassment under RBI recovery directives, divert incoming legal notices (Sec 138 NI Act & Sec 25 PSS Act), establish a single monthly dedicated settlement accumulation pool, and negotiate bilateral One-Time Settlements (OTS) with each lender sequentially or simultaneously—achieving <strong>40% to 70% total debt reduction</strong> without requiring a high-credit consolidation loan.
              </p>
            </div>

            {/* SECTION 1 */}
            <section id="multi-debt-crisis" className="mb-10 scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                1. Anatomy of the Multi-Debt Spiral in India
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                In India’s hyper-digitized retail credit ecosystem, unsecured personal loans are disbursed in minutes through instant smartphone applications, NBFC digital portals, and aggressive pre-approved credit lines from major commercial banks. While convenient during financial windfalls, an unexpected life event—such as sudden medical emergencies, business margin contraction, job loss, or pay cuts—triggers a rapid multi-debt trap known as <em>credit stacking</em>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                When a borrower carries multiple obligations (for instance, an HDFC personal loan, a Bajaj Finserv flexi-loan, a KreditBee instant advance, and two credit cards with ICICI and SBI), the monthly EMI burden often exceeds 80% to 120% of net monthly take-home income. Borrowers initially resort to <em>cross-borrowing</em>—taking a loan from App B to pay the minimum overdue on Loan A. Within 90 to 180 days, credit limits exhaust, bounce charges compound at 36% to 48% annualized APR, and all accounts simultaneously slide into Non-Performing Asset (NPA) status.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-2 text-rose-600 font-bold text-sm mb-1.5">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Fragmented Cashflow</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Paying 5 different EMI dates drains monthly salary within days, leaving zero funds for family sustenance and inducing perpetual distress.
                  </p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-2 text-amber-600 font-bold text-sm mb-1.5">
                    <Percent className="w-4 h-4" />
                    <span>Compounding Penalties</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Unpaid EMIs trigger NACH bounce charges (₹450–₹590 per bounce) plus monthly overdue penal interest of 2%–4% across every single lender.
                  </p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-2 text-[#1F5EFF] font-bold text-sm mb-1.5">
                    <ShieldAlert className="w-4 h-4" />
                    <span>Multi-Front Harassment</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Third-party recovery agencies from 4 to 8 different institutions bombard the borrower, relatives, and workplace simultaneously.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 2 */}
            <section id="simultaneous-negotiation" className="mb-10 scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                2. Can Multiple Loans Be Settled Simultaneously? (The Core Mechanism)
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                The most frequent question asked by distressed multi-loan borrowers is: <em>“Can an agency handle all my banks at once, or do I have to negotiate with each one individually?”</em>
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                The answer lies in professional multi-creditor portfolio management. Because Indian banking law treats each loan agreement under the <strong>Indian Contract Act, 1872</strong> as an independent bilateral contract, banks cannot form a collective retail committee against an individual borrower (unlike corporate IBC proceedings in NCLT). However, an authorized debt settlement agency operates a synchronized <strong>Dual-Track Negotiation Engine</strong>:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-bold">A</span>
                    Parallel Legal Representation & Harassment Shielding
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Upon enrollment, our Advocates on Record file formal Notices of Representation to all 5–10 lenders concurrently. Under the Reserve Bank of India’s <em>Master Directions on Fair Practices Code and Recovery Agents (updated July 2026 / 2023)</em>, once a customer has appointed legal counsel for financial restructuring, lenders and their outsourced agencies are legally restricted from directly intimidating the borrower. This immediately stops the multi-front phone and field harassment.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">B</span>
                    Structured Waterfall vs Simultaneous OTS Execution
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    While legal representation is initiated across all creditors on Day 1, financial settlement execution follows a tailored <strong>Liquidity-Optimized Waterfall</strong>. Aggressive, low-ticket fintech app loans and toxic credit card revolving debt are settled first to eliminate immediate legal notices and harassment. Concurrently, larger bank loans (HDFC, SBI, ICICI, Axis) undergo formal 90–180 day NPA aging, enabling regional settlement committees to offer their deepest OTS concessions (up to 60%–75% waivers) when your dedicated settlement pool is funded.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="settlement-pool-vs-consolidation" className="mb-10 scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                3. Single Settlement Pool vs Traditional Debt Consolidation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Borrowers frequently conflate <strong>Debt Consolidation Loans</strong> with <strong>Multiple Personal Loan Settlement</strong>. While both aim to resolve multiple fragmented obligations, their mechanics, eligibility thresholds, and financial impacts are polar opposites.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-base mb-2">
                    <Building2 className="w-5 h-5 text-slate-700" />
                    <span>Traditional Debt Consolidation Loan</span>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Requires Excellent CIBIL (750+):</strong> If you already missed EMIs, no commercial bank will approve a consolidation loan.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Repays 100% Principal + New Interest:</strong> Does not reduce your debt principal by a single rupee; you simply swap multiple lenders for one large lender.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Risk of Collateral Seizure:</strong> Often requires pledging residential property or gold as security.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50/50 border border-blue-200/80 rounded-xl p-5">
                  <div className="flex items-center gap-2 text-[#1F5EFF] font-bold text-base mb-2">
                    <Wallet className="w-5 h-5 text-[#1F5EFF]" />
                    <span>Unified Debt Settlement Program</span>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Designed for Defaulted / Distressed Borrowers:</strong> Low credit scores or ongoing defaults do not disqualify you.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Substantial Principal Reduction (40%–70%):</strong> Negotiators legally reduce the total claim down to an affordable fraction.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Single Monthly Accumulation:</strong> You pay one affordable amount into your dedicated reserve, insulating your income from aggressive auto-debits.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SECTION 4: 4-Sided Bordered Comparison Table */}
            <section id="comparison-matrix" className="mb-10 scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                4. Strategy Comparison: Loan vs Agency vs DIY vs IBC Insolvency
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                To evaluate your legal and financial avenues, the comparison matrix below breaks down the four paths available to Indian consumers facing multi-lender defaults:
              </p>

              <div className="overflow-x-auto my-6">
                <table>
                  <thead className="bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm">
                    <tr>
                      <th className="text-left w-1/4">Evaluation Parameter</th>
                      <th className="text-left w-1/4">Consolidation Loan</th>
                      <th className="text-left w-1/4 bg-blue-50/70 text-[#1F5EFF]">SettleLoans Program</th>
                      <th className="text-left w-1/4">DIY Self-Negotiation</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs sm:text-sm text-slate-700 divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="font-semibold text-slate-900">Total Payable Amount</td>
                      <td>100% of debt + 12%–18% new interest</td>
                      <td className="font-semibold text-emerald-600 bg-blue-50/30">35% to 55% of outstanding (45%–65% waiver)</td>
                      <td>70% to 90% (banks rarely grant deep discounts to individuals)</td>
                    </tr>
                    <tr className="bg-slate-50/60">
                      <td className="font-semibold text-slate-900">CIBIL Minimum Requirement</td>
                      <td>750+ (Strict prerequisite)</td>
                      <td className="bg-blue-50/30">No minimum score (designed for distressed credit)</td>
                      <td>No minimum score</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Multi-Lender Management</td>
                      <td>Single payment to new creditor</td>
                      <td className="font-semibold text-[#1F5EFF] bg-blue-50/30">1 Single monthly deposit; agency coordinates all lenders</td>
                      <td>Borrower must juggle 5–10 banks simultaneously</td>
                    </tr>
                    <tr className="bg-slate-50/60">
                      <td className="font-semibold text-slate-900">Recovery Harassment Shield</td>
                      <td>None (if new loan defaults)</td>
                      <td className="font-semibold text-emerald-600 bg-blue-50/30">Full Legal Advocate Shield under RBI 2026 norms</td>
                      <td>None (recovery calls continue unabated)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Sec 138 / 25 NACH Legal Defence</td>
                      <td>Not applicable</td>
                      <td className="font-semibold text-[#1F5EFF] bg-blue-50/30">Comprehensive legal drafting & Lok Adalat representation</td>
                      <td>Borrower must hire expensive private trial lawyers</td>
                    </tr>
                    <tr className="bg-slate-50/60">
                      <td className="font-semibold text-slate-900">Settlement Timeline</td>
                      <td>3 to 7 years of EMI repayment</td>
                      <td className="font-semibold text-emerald-600 bg-blue-50/30">4 to 12 months to full debt-free status</td>
                      <td>Indefinite (often stalled by bank recovery cells)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 4. COMPACT INFOGRAPHIC BANNER (Between Sections 4 and 5) */}
            <section id="infographic-framework" className="my-10 scroll-mt-24">
              <div className="w-full bg-[#0A2540] text-white rounded-2xl p-5 sm:p-6 md:p-7 shadow-xl border border-slate-700/60 overflow-hidden max-h-none md:max-h-[420px] flex flex-col justify-between relative">
                {/* Background Ambient Glow */}
                <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#1F5EFF]/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                <div>
                  {/* Banner Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-5 border-b border-slate-700 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#1F5EFF] flex items-center justify-center font-bold text-white text-xs">
                        SL
                      </div>
                      <span className="font-bold text-sm sm:text-base tracking-wide text-white">
                        SettleLoans Multi-Loan Resolution Architecture
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                      RBI Compliant Protocol
                    </span>
                  </div>

                  {/* 4 Concise Horizontal Pillars */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
                      <div className="flex items-center gap-2 text-[#1F5EFF] font-bold text-xs mb-1">
                        <FileText className="w-3.5 h-3.5" />
                        <span>1. Multi-Debt Audit</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-snug">
                        Consolidate all loan agreements, unapplied fees, and account statements into a single liability matrix.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
                      <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs mb-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>2. Legal Counsel Shield</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-snug">
                        Issue formal advocate notices to all lenders under RBI 2026 Fair Practices to halt multi-agent harassment.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
                      <div className="flex items-center gap-2 text-amber-400 font-bold text-xs mb-1">
                        <Wallet className="w-3.5 h-3.5" />
                        <span>3. Unified Pool</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-snug">
                        Deposit one affordable monthly amount into an insulated reserve to fund prioritized bilateral settlements.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
                      <div className="flex items-center gap-2 text-sky-400 font-bold text-xs mb-1">
                        <Award className="w-3.5 h-3.5" />
                        <span>4. OTS & Formal NOC</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-snug">
                        Secure bank-sanctioned OTS letters with 40%–70% waivers, followed by definitive No Dues Certificates.
                      </p>
                    </div>
                  </div>

                  {/* Horizontal Milestone Progress Line */}
                  <div className="hidden md:block mb-4 pt-2">
                    <div className="relative flex items-center justify-between text-[11px] text-slate-300 font-medium">
                      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-700 -translate-y-1/2 z-0" />
                      
                      <div className="relative z-10 flex items-center gap-1.5 bg-[#0A2540] px-2 py-0.5 border border-slate-600 rounded-full">
                        <span className="w-2 h-2 rounded-full bg-[#1F5EFF]" />
                        <span><strong>Day 1–7:</strong> Onboarding & Shield</span>
                      </div>

                      <div className="relative z-10 flex items-center gap-1.5 bg-[#0A2540] px-2 py-0.5 border border-slate-600 rounded-full">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <span><strong>Month 2–3:</strong> Hardship Dossiers</span>
                      </div>

                      <div className="relative z-10 flex items-center gap-1.5 bg-[#0A2540] px-2 py-0.5 border border-slate-600 rounded-full">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span><strong>Month 4–6:</strong> OTS Negotiations</span>
                      </div>

                      <div className="relative z-10 flex items-center gap-1.5 bg-[#0A2540] px-2 py-0.5 border border-slate-600 rounded-full">
                        <span className="w-2 h-2 rounded-full bg-sky-400" />
                        <span><strong>Month 6+:</strong> Zero-Dues NOC</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Takeaway Footer Bar with Direct Case Evaluation CTA */}
                <div className="bg-white/10 border-t border-white/10 -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 md:-mx-7 md:-mb-7 p-3 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-slate-200 text-center sm:text-left">
                    <span className="font-bold text-white">Need multi-lender protection?</span> Stop third-party recovery harassment and consolidate settlement terms today.
                  </div>
                  <Link
                    href="/contact"
                    className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold text-xs py-2 px-4 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-md"
                  >
                    <span>Request Multi-Debt Audit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </section>

            {/* SECTION 5 */}
            <section id="legal-protection-framework" className="mb-10 scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                5. Legal Protection Against Multi-Bank Harassment (RBI Rights & Statutes)
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                When defaulting on multiple loans, borrowers face a barrage of intimidating notices and collection calls. Understanding your legal rights under Indian financial jurisprudence is critical to maintaining psychological stability while negotiations proceed:
              </p>

              <div className="space-y-4 my-6">
                <div className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-white shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2189"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#1F5EFF] hover:underline flex items-center gap-1.5 transition-colors"
                    >
                      <span>Section 138 of Negotiable Instruments Act</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                    <span>&amp;</span>
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2048"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#1F5EFF] hover:underline flex items-center gap-1.5 transition-colors"
                    >
                      <span>Section 25 PSS Act (NACH)</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Lenders frequently issue statutory legal notices when automated NACH mandate debits or security cheques bounce. <strong>Crucial Legal Fact:</strong> Receiving a Section 138 or Section 25 notice does not mean immediate arrest. Indian criminal jurisprudence provides a mandatory 15-day cure notice period from receipt. Our legal counsel drafts formal, point-by-point statutory replies establishing genuine financial distress, lack of criminal intent (<em>mens rea</em>), and readiness for compromise settlement, transferring the matter to Lok Adalat proceedings where cases are routinely compounded and closed without trial.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-white shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-emerald-600" />
                    <a
                      href="https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12372&Mode=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#1F5EFF] hover:underline flex items-center gap-1.5 transition-colors"
                    >
                      <span>RBI Master Circulars on Recovery Agents (Updated Directives)</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    The Reserve Bank of India has repeatedly held that recovery agents cannot breach borrower privacy or dignity. Specifically:
                  </p>
                  <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-slate-600 list-disc list-inside">
                    <li>Calling before 8:00 AM or after 7:00 PM is strictly prohibited.</li>
                    <li>Calling family members, friends, or workplace colleagues whose details were not authorized in the primary loan agreement is a punishable offence.</li>
                    <li>
                      Use of foul, abusive language or physical presence without prior formal identification warrants immediate complaints to the{' '}
                      <a
                        href="https://cms.rbi.org.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1F5EFF] font-semibold hover:underline inline-flex items-center gap-0.5"
                      >
                        RBI Banking Ombudsman
                        <ExternalLink className="w-3 h-3 text-[#1F5EFF]" />
                      </a>{' '}
                      and local police nodal stations under IPC/BNS extortion provisions.
                    </li>
                  </ul>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-white shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-amber-600" />
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2006"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#1F5EFF] hover:underline flex items-center gap-1.5 transition-colors"
                    >
                      <span>SARFAESI Act Non-Applicability on Unsecured Loans</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Recovery agents often falsely threaten to seize residential property or attach personal vehicles. <strong>Under Indian Law:</strong> The{' '}
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2006"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1F5EFF] font-semibold hover:underline"
                    >
                      Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002
                    </a>{' '}
                    applies <strong>strictly to secured loans</strong> (mortgages, LAP, auto loans with active hypothecation). Unsecured personal loans and credit cards do not carry a property lien. A bank cannot attach any property without obtaining a formal decree through a lengthy Civil Suit (Order 37 CPC), which takes years and incentivizes lenders to settle out of court.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 6 */}
            <section id="step-by-step-roadmap" className="mb-10 scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                6. 6-Stage Roadmap to Settle Multiple Debts
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Executing multiple settlements requires an exact chronological workflow to maximize discounts while maintaining airtight legal compliance:
              </p>

              <div className="relative border-l-2 border-[#1F5EFF] ml-3 sm:ml-4 pl-4 sm:pl-6 space-y-6 sm:space-y-8 my-6">
                <div className="relative">
                  <div className="absolute -left-[25px] sm:-left-[33px] top-0 w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-bold ring-4 ring-white">
                    1
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                    Multi-Debt Portfolio Audit & Account Isolation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    We compile all sanction letters, statements of account, and calculate actual principal outstanding versus compounded penal charges. We instruct you to open a fresh operational savings account at a non-creditor bank to prevent unauthorized banker lien deductions (Sec 171 Contract Act).
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[25px] sm:-left-[33px] top-0 w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-bold ring-4 ring-white">
                    2
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                    Legal Representation Notice & Harassment Halt
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Formal vakalatnama and advocate notices are served to the collection heads, nodal officers, and recovery desks of all creditors, redirecting all calls and communications to our legal team.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[25px] sm:-left-[33px] top-0 w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-bold ring-4 ring-white">
                    3
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                    Dedicated Settlement Pool Accumulation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    You stop paying fragmented EMIs and channel a single manageable monthly deposit into your dedicated accumulation account, building the liquid capital required to execute lump-sum OTS offers.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[25px] sm:-left-[33px] top-0 w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-bold ring-4 ring-white">
                    4
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                    Synchronized Hardship Dossier Submission
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    As accounts reach 90+ days of default (NPA stage), our senior negotiators present comprehensive hardship evidence (medical records, job termination proofs, business audit losses) to bank settlement committees.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[25px] sm:-left-[33px] top-0 w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-bold ring-4 ring-white">
                    5
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                    Bilateral OTS Letter Verification & Controlled Payment
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Before any money is paid, our legal team verifies the official One-Time Settlement sanction letter on bank letterhead with unique settlement reference numbers, ensuring 100% full-and-final settlement terms. Payments are made directly to the bank’s official account.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[25px] sm:-left-[33px] top-0 w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-bold ring-4 ring-white">
                    6
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                    No Dues Certificate (NDC) Retrieval & CIBIL Closure
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Within 15 to 30 days of OTS payment, we secure official No Objection / No Dues Certificates from each lender, confirm zero outstanding ledger balances, and verify proper bureau updates.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7 */}
            <section id="lender-settlement-matrix" className="mb-10 scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                7. Multi-Lender Negotiation Discounts Matrix
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Different financial institutions in India follow distinct internal write-off policies. The table below illustrates realistic settlement ranges across lender categories:
              </p>

              <div className="overflow-x-auto my-6">
                <table>
                  <thead className="bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm">
                    <tr>
                      <th className="text-left w-1/4">Lender Category</th>
                      <th className="text-left w-1/4">Representative Lenders</th>
                      <th className="text-left w-1/4">Expected Waiver Range</th>
                      <th className="text-left w-1/4">Optimal Settlement Window</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs sm:text-sm text-slate-700 divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="font-semibold text-slate-900">Instant Fintech Apps</td>
                      <td>KreditBee, Navi, MoneyTap, Ring, Payme</td>
                      <td className="font-semibold text-emerald-600">55% to 75% waiver</td>
                      <td>60 to 120 days post-default</td>
                    </tr>
                    <tr className="bg-slate-50/60">
                      <td className="font-semibold text-slate-900">Major NBFCs</td>
                      <td>Bajaj Finance, Tata Capital, Aditya Birla, Piramal</td>
                      <td className="font-semibold text-emerald-600">45% to 65% waiver</td>
                      <td>90 to 180 days (Quarter-end cycle)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Private Commercial Banks</td>
                      <td>HDFC Bank, ICICI Bank, Axis Bank, Kotak</td>
                      <td className="font-semibold text-emerald-600">40% to 60% waiver</td>
                      <td>120 to 240 days (Lok Adalat / Year-end)</td>
                    </tr>
                    <tr className="bg-slate-50/60">
                      <td className="font-semibold text-slate-900">Public Sector (PSU) Banks</td>
                      <td>SBI, Punjab National Bank, Bank of Baroda, Canara</td>
                      <td className="font-semibold text-emerald-600">35% to 50% waiver</td>
                      <td>Formal OTS Schemes / Lok Adalat benches</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Revolving Credit Cards</td>
                      <td>SBI Card, RBL, Standard Chartered, HSBC</td>
                      <td className="font-semibold text-emerald-600">50% to 70% waiver</td>
                      <td>90 to 150 days (Write-off bucket)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 8 */}
            <section id="cibil-rehabilitation" className="mb-10 scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                8. Post-Settlement CIBIL Score Rehabilitation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                A common concern among borrowers is the credit report impact. When an account is settled for less than the original contractual dues, the lender reports the trade line status to credit information companies (TransUnion CIBIL, Experian, CRIF High Mark, Equifax) as <strong>“Settled”</strong> or <strong>“Post-Write-off Settled”</strong> rather than “Closed”.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                While a “Settled” status depresses your score by 50 to 100 points initially, it is vastly superior to leaving accounts in an active <strong>“Written Off”</strong> or perpetual default status with daily mounting arrears. Once all No Dues Certificates are secured, our 3-step credit rehabilitation roadmap restores your credit profile:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                  <div className="text-xs font-bold text-[#1F5EFF] uppercase mb-1">Step 1: Bureau Audit</div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">Verify Zero Dues Reporting</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ensure all settled accounts show zero current balance and no further overdue accruals in CIBIL within 45 days.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                  <div className="text-xs font-bold text-emerald-600 uppercase mb-1">Step 2: Secured Credit</div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Fixed Deposit Backed Card</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Open a small Fixed Deposit (₹20,000–₹50,000) to obtain a secured credit card. Utilize under 20% and pay on time monthly.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                  <div className="text-xs font-bold text-amber-600 uppercase mb-1">Step 3: Score Rebound</div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Reach 750+ in 18–24 Months</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Consistent, flawless payment history on fresh secured lines rapidly rebuilds your score to prime creditworthiness tiers.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: INTERACTIVE FAQ ACCORDION */}
            <CompanySection />

            <section id="faqs" className="mb-10 scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                10. Frequently Asked Questions
              </h2>

              <div className="space-y-3 my-6">
                {FAQS_LIST.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={index}
                      className="border border-slate-200 rounded-xl overflow-hidden bg-white transition-colors"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full text-left p-4 sm:p-4.5 flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors"
                        aria-expanded={isOpen}
                      >
                        <span className="font-bold text-slate-900 text-xs sm:text-sm">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#1F5EFF] flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SOURCES & CITATIONS STRIP */}
            <footer className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 shadow-sm">
              <div className="flex items-center justify-between gap-2 font-bold text-slate-900 text-sm mb-4 pb-2 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Statutory References & Official Regulatory Authorities</span>
                </div>
                <span className="text-[11px] font-semibold text-slate-500 bg-white border border-slate-200 px-2.5 py-0.5 rounded-full">
                  Verified Legal Citations
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=10585"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-between gap-2 p-3 bg-white border border-slate-200 hover:border-[#1F5EFF] rounded-xl hover:shadow-sm transition-all group"
                >
                  <div>
                    <div className="font-bold text-slate-900 group-hover:text-[#1F5EFF] transition-colors flex items-center gap-1.5">
                      <span>RBI Fair Practices Code Master Directions</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Reserve Bank of India regulatory guidelines for Scheduled Commercial Banks & NBFCs.
                    </p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1F5EFF] flex-shrink-0 mt-0.5 transition-colors" />
                </a>

                <a
                  href="https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12372&Mode=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-between gap-2 p-3 bg-white border border-slate-200 hover:border-[#1F5EFF] rounded-xl hover:shadow-sm transition-all group"
                >
                  <div>
                    <div className="font-bold text-slate-900 group-hover:text-[#1F5EFF] transition-colors flex items-center gap-1.5">
                      <span>RBI Circular on Recovery Agents (RBI/2022-23/108)</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Statutory directives prohibiting harassment, intimidation, and unauthorized third-party contact.
                    </p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1F5EFF] flex-shrink-0 mt-0.5 transition-colors" />
                </a>

                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2189"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-between gap-2 p-3 bg-white border border-slate-200 hover:border-[#1F5EFF] rounded-xl hover:shadow-sm transition-all group"
                >
                  <div>
                    <div className="font-bold text-slate-900 group-hover:text-[#1F5EFF] transition-colors flex items-center gap-1.5">
                      <span>Negotiable Instruments Act, 1881 (Sec. 138)</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Official India Code statute governing cheque dishonour, 15-day statutory cure notice, and compounding provisions.
                    </p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1F5EFF] flex-shrink-0 mt-0.5 transition-colors" />
                </a>

                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2048"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-between gap-2 p-3 bg-white border border-slate-200 hover:border-[#1F5EFF] rounded-xl hover:shadow-sm transition-all group"
                >
                  <div>
                    <div className="font-bold text-slate-900 group-hover:text-[#1F5EFF] transition-colors flex items-center gap-1.5">
                      <span>Payment & Settlement Systems Act, 2007 (Sec. 25)</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Statutory framework for electronic debit mandates (NACH / e-Mandates) and dispute remedies.
                    </p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1F5EFF] flex-shrink-0 mt-0.5 transition-colors" />
                </a>

                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2187"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-between gap-2 p-3 bg-white border border-slate-200 hover:border-[#1F5EFF] rounded-xl hover:shadow-sm transition-all group"
                >
                  <div>
                    <div className="font-bold text-slate-900 group-hover:text-[#1F5EFF] transition-colors flex items-center gap-1.5">
                      <span>The Indian Contract Act, 1872 (Section 63)</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Legal basis empowering lenders to dispense with or remit performance (debt waiver & compromise agreements).
                    </p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1F5EFF] flex-shrink-0 mt-0.5 transition-colors" />
                </a>

                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-between gap-2 p-3 bg-white border border-slate-200 hover:border-[#1F5EFF] rounded-xl hover:shadow-sm transition-all group"
                >
                  <div>
                    <div className="font-bold text-slate-900 group-hover:text-[#1F5EFF] transition-colors flex items-center gap-1.5">
                      <span>RBI Integrated Ombudsman Scheme (CMS Portal)</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Official portal for lodging regulatory complaints against bank harassment and unfair lending practices.
                    </p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1F5EFF] flex-shrink-0 mt-0.5 transition-colors" />
                </a>
              </div>
            </footer>

          </main>

          {/* RIGHT COLUMN: Author Bio, Emergency CTA & Trust Signals */}
          <aside className="space-y-5 lg:sticky lg:top-6">

            {/* Author Bio Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1F5EFF] to-blue-800 text-white flex items-center justify-center font-bold text-sm shadow-md">
                  AJ
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Adv. Ashish Jhangra</div>
                  <p className="text-xs text-slate-500">Chief Debt Strategist & Legal Counsel</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Senior banking litigator with 12+ years of experience resolving complex multi-lender defaults, NPA restructuring, and consumer protection disputes across Indian courts.
              </p>
              <div className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 rounded-lg p-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Bar Council Verified • 18,500+ Cases</span>
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-[#0A2540] to-slate-900 text-white rounded-2xl p-5 shadow-lg border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Emergency Multi-Debt Shield</span>
              </div>
              <div className="text-base font-bold text-white mb-2 leading-snug">
                Facing Multiple Collection Calls or Court Notices?
              </div>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Appoint our legal panel today. We serve immediate representation notices to all your lenders and consolidate all negotiations into one structured plan.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl transition-colors text-xs flex items-center justify-center gap-2 shadow-md"
              >
                <span>Speak with an Advocate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Trust Signals Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider mb-3">
                <Lock className="w-3.5 h-3.5 text-[#1F5EFF]" />
                <span>SettleLoans Trust Framework</span>
              </div>
              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>100% Transparent:</strong> Direct payments to bank settlement accounts only.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Harassment Protection:</strong> Formal RBI-compliant legal notices.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>4.9/5 Rating:</strong> India’s most trusted debt settlement advisory.</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
