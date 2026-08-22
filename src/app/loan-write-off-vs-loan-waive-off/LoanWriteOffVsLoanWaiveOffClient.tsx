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

export default function LoanWriteOffVsLoanWaiveOffClient() {
  const [activeId, setActiveId] = useState<string>('illusion-of-written-off');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'illusion-of-written-off', title: '1. The "Written Off" Illusion' },
    { id: 'banking-accounting-mechanics', title: '2. Bank Accounting Mechanics' },
    { id: 'loan-waive-off-defined', title: '3. Loan Waive-Off Explained' },
    { id: 'comparative-matrix-analysis', title: '4. Write-Off vs Waive-Off Matrix' },
    { id: 'recovery-tactics-after-write-off', title: '5. Post-Write-Off Recovery' },
    { id: 'npv-settlement-economics', title: '6. NPV Settlement Economics' },
    { id: 'cibil-bureau-reporting-reality', title: '7. CIBIL Bureau Reality' },
    { id: 'step-by-step-settlement-roadmap', title: '8. 5-Step Resolution Roadmap' },
    { id: 'legal-defense-borrower-rights', title: '9. Legal Defense & RBI Rights' },
    { id: 'settleloans-advocate-strategy', title: '10. SettleLoans Legal Strategy' },
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
      question: "What is the key difference between a loan write-off and a loan waive-off?",
      answer: (
        <p>
          A loan write-off is an internal bank accounting entry where a non-performing loan is removed from the active asset ledger for tax optimization and balance sheet cleaning, but the borrower&apos;s legal liability remains 100% active. A loan waive-off is an absolute legal extinguishment of the debt, where the lender or government cancels the borrower&apos;s obligation entirely, issuing a complete release of liability.
        </p>
      )
    },
    {
      question: "If my loan is marked as 'Written Off' in CIBIL, do I still have to pay the bank?",
      answer: (
        <p>
          Yes. A &quot;Written Off&quot; status in your credit report does not mean your debt is forgiven. The lender retains full legal rights under Indian contract law to pursue recovery, send legal notices, file suits in court, or assign the debt to an Asset Reconstruction Company (ARC). To end liability, you must execute a formal compromise settlement.
        </p>
      )
    },
    {
      question: "Why do commercial banks write off bad loans?",
      answer: (
        <p>
          Banks execute technical write-offs under RBI Master Circular norms to reduce their Gross Non-Performing Asset (GNPA) ratio, release capital reserves, and claim tax deductions on bad debts under Section 36(1)(vii) of the Income Tax Act, 1961. It is a statutory balance sheet hygiene measure rather than borrower relief.
        </p>
      )
    },
    {
      question: "Can recovery agents harass me for a loan that was written off years ago?",
      answer: (
        <p>
          While banks maintain the legal right to demand repayment, recovery agents are strictly prohibited from harassing, threatening, calling outside 8 AM to 7 PM, or visiting workplaces under RBI Fair Practices Code. If recovery agents violate these regulations, you can serve legal notices and file formal complaints with the RBI Banking Ombudsman.
        </p>
      )
    },
    {
      question: "What is the difference between a loan write-off and a One-Time Settlement (OTS)?",
      answer: (
        <p>
          A write-off is executed unilaterally by the bank without borrower consent, leaving the full debt open for recovery. A One-Time Settlement (OTS) is a bilateral legal agreement where the bank agrees to accept a discounted lump sum (typically 35% to 75% haircut) to permanently close the account and issue an official ₹0 No Dues Certificate.
        </p>
      )
    },
    {
      question: "How does a 'Written Off' status affect my credit score compared to a 'Settled' status?",
      answer: (
        <p>
          A &quot;Written Off&quot; entry indicates complete default and zero borrower cooperation, suppressing your credit score by 150 to 200 points and leading to immediate rejection for future loans. A &quot;Settled&quot; status reflects an agreed compromise closure; while it still carries a negative footprint, it stops delinquency aging and allows credit rehabilitation through secured products.
        </p>
      )
    },
    {
      question: "Can I negotiate a settlement for an account that has already been written off?",
      answer: (
        <p>
          Yes. Written-off accounts often offer the highest settlement negotiation leverage because banks have already provisioned 100% of the asset. Any recovered amount is booked directly as clean profit, making recovery committees receptive to substantial discounts (often 40% to 70% of total dues) when structured by legal advocates.
        </p>
      )
    },
    {
      question: "What happens when a bank sells a written-off loan to an Asset Reconstruction Company (ARC)?",
      answer: (
        <p>
          When a bank assigns a written-off debt to an ARC under the SARFAESI Act, the ARC steps into the shoes of the original lender with all legal recovery rights. Borrowers must negotiate settlements directly with the ARC and ensure the ARC issues a valid No Dues Certificate and updates credit bureaus.
        </p>
      )
    },
    {
      question: "How can I convert a 'Written Off' remark in CIBIL to 'Closed'?",
      answer: (
        <p>
          To convert a &quot;Written Off&quot; or &quot;Post-Settled&quot; entry to &quot;Closed&quot; in CIBIL, you can approach the original lender, pay the remaining waived balance, and obtain a Final No Dues Certificate. Under CICRA regulations, the bank is legally obligated to update the bureau status to &quot;Closed - Fully Paid&quot; within 30 days.
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
            Banking Accounting &amp; Legal Reality Blueprint 2026
          </div>

          {/* H1 Headline */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            Loan Write-Off vs Loan Waive-Off:{' '}
            <span className="text-[#3b82f6] md:text-[#60a5fa]">Difference, Legal Reality &amp; CIBIL Truth</span>
          </h1>

          {/* Subtitle / Direct Answer Snippet */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Saw &quot;Written Off&quot; on your CIBIL report and assumed your debt was forgiven? Learn why a technical write-off is merely an internal bank accounting maneuver, how recovery agents continue legal pursuit, and how to execute a true compromise settlement.
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
              <span>Evaluate My Written-Off Loan Free</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#illusion-of-written-off"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold py-3 px-5 rounded-xl transition-all duration-300 text-sm"
            >
              <BookOpen className="w-4 h-4 text-blue-300" />
              <span>Read Legal Breakdown</span>
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
            {/* Section 1: The Dangerous Illusion of "Written Off" */}
            <section id="illusion-of-written-off" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                1. The Dangerous Illusion of &quot;Written Off&quot; in Indian Retail Banking
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                One of the most catastrophic and widespread financial misconceptions among Indian borrowers is the belief that when a bank marks an overdue loan or credit card as &quot;Written Off,&quot; the outstanding debt has been forgiven, canceled, or erased by the government. Borrowers who download their credit reports from TransUnion CIBIL, Experian, or CRIF High Mark frequently observe a zero current balance alongside a stark &quot;Written Off&quot; remark, leading them to falsely conclude that their financial nightmare is over and no further payments are required.
              </p>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                The harsh legal and banking reality is precisely the opposite. A loan write-off is purely an internal accounting adjustment executed unilaterally by commercial banks and Non-Banking Financial Companies (NBFCs) to clean their published balance sheets. It does not discharge, forgive, or extinguish a single rupee of the borrower&apos;s contractual liability. Under Indian contract law, the lender retains complete legal ownership of the debt, maintains full enforcement rights to initiate recovery proceedings, and will aggressively deploy internal collection divisions, third-party recovery agencies, or specialized Asset Reconstruction Companies (ARCs) to recover the entire unpaid balance with compounded penalties.
              </p>

              {/* High-Impact Alert Box */}
              <div className="bg-rose-50 border-l-4 border-rose-500 p-5 rounded-r-2xl my-6">
                <div className="flex items-center gap-2 text-rose-900 font-bold text-base mb-1">
                  <ShieldAlert className="w-5 h-5 text-rose-600 flex-shrink-0" />
                  <span>Critical Legal Distinction: Write-Off Does Not Equal Forgiveness</span>
                </div>
                <p className="text-sm text-rose-800 leading-relaxed font-medium">
                  A loan write-off is an accounting maneuver designed to benefit the lending institution under tax laws. Only a formal Loan Waive-Off or a legally executed One-Time Settlement (OTS) with a verified ₹0 No Dues Certificate extinguishes borrower liability under the Indian Contract Act, 1872.
                </p>
              </div>
            </section>

            {/* Section 2: Banking Accounting Mechanics */}
            <section id="banking-accounting-mechanics" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                2. Banking Accounting Mechanics: Technical Write-Offs vs. Actual Write-Offs
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                To understand why banks write off non-performing loans, one must examine the regulatory framework established by the Reserve Bank of India. Under the RBI Master Circular on Prudential Norms on Income Recognition, Asset Classification and Provisioning pertaining to Advances (IRACP), when a borrower fails to pay interest or principal installments for 90 consecutive days, the loan account is categorized as a Non-Performing Asset (NPA). As delinquency ages from Sub-Standard to Doubtful and Loss categories, banks are legally mandated to set aside substantial cash reserves—termed provisioning—against potential default losses.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                When bad loans accumulate, they inflate the bank&apos;s Gross Non-Performing Asset (GNPA) ratio, impairing its credit ratings, stock valuation, and ability to raise fresh capital. To restore financial health, lenders execute what the RBI defines as a &quot;Technical Write-Off&quot; (or prudential write-off). In this accounting procedure, the bank transfers the defaulted loan amount from its active balance sheet asset ledger to an off-balance sheet Memorandum Ledger at the Head Office level, simultaneously claiming 100% provisioning against its gross revenue.
              </p>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                Crucially, writing off the loan allows the bank to claim substantial corporate income tax deductions under Section 36(1)(vii) of the Income Tax Act, 1961, which permits scheduled commercial banks to deduct bad debts written off as irrecoverable against taxable profits. However, the RBI prudential guidelines explicitly state that a technical write-off is executed without prejudice to the bank&apos;s legal right of recovery. The borrower remains fully indebted, and any subsequent recovery achieved from the debtor is credited directly to the bank&apos;s profit and loss statement as non-interest recovery income.
              </p>
            </section>

            {/* Section 3: Loan Waive-Off Defined */}
            <section id="loan-waive-off-defined" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                3. Loan Waive-Off Defined: Absolute Legal Extinguishment of Debt
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                In stark contrast to a unilateral technical write-off, a **Loan Waive-Off** represents the complete, permanent, and irrevocable cancellation of a borrower&apos;s debt obligation. When a loan is waived off, the lender formally relinquishes its legal claim against the borrower, terminating the underlying loan contract under Section 63 of the Indian Contract Act, 1872, which governs the remission or dispensation of contractual performance.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                In India, genuine loan waivers generally manifest in two distinct forms. The first consists of sovereign agricultural or targeted social welfare loan waiver schemes enacted by state governments or the Central Government, where public funds are allocated to compensate lending institutions for forgiving designated farmer or priority-sector loans. The second, far more common in urban retail banking, is a negotiated **One-Time Settlement (OTS) or Compromise Settlement**. Under this framework, a distressed borrower facing legitimate, verifiable financial hardship pays a mutually agreed discounted lump-sum amount, and the bank formally waives the remaining principal, accumulated interest, penal charges, and legal expenses.
              </p>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                Once a loan is formally waived or settled through an authorized OTS sanction letter, the borrower receives a comprehensive ₹0 No Dues Certificate (NDC). This legal instrument immunizes the individual against future recovery actions, mandates the withdrawal of pending court notices or Section 138 cheque bounce proceedings, and obligates the lender to update credit bureaus to reflect that the account is legally closed.
              </p>
            </section>

            {/* Section 4: Comparative Matrix Analysis */}
            <section id="comparative-matrix-analysis" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                4. Comprehensive Comparison Matrix: Write-Off vs. Waive-Off vs. Compromise Settlement
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Understanding the technical and legal parameters that separate write-offs, waivers, and compromise settlements is vital for navigating debt disputes effectively. The following comparative matrix outlines the regulatory differences governing each mechanism under Indian banking jurisprudence.
              </p>

              {/* 4-Sided Bordered Comparison Table */}
              <div className="overflow-x-auto my-6">
                <table>
                  <thead>
                    <tr>
                      <th>Comparative Parameter</th>
                      <th>Technical Loan Write-Off</th>
                      <th>Government / Bank Waive-Off</th>
                      <th>One-Time Settlement (OTS)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Primary Objective</td>
                      <td>Balance sheet cleaning &amp; corporate tax deduction under Sec 36(1)(vii).</td>
                      <td>Social relief or full humanitarian cancellation of borrower liability.</td>
                      <td>Mutual compromise to recover maximum capital from distressed debtor.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Borrower Legal Liability</td>
                      <td className="text-rose-600 font-bold">100% Active &amp; Legally Enforceable</td>
                      <td className="text-emerald-600 font-bold">100% Extinguished &amp; Forgiven</td>
                      <td className="text-emerald-600 font-bold">Fully Discharged upon agreed payment</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Recovery Enforcement</td>
                      <td>Active recovery agents, legal notices, ARCs, and civil court suits.</td>
                      <td>Completely terminated; zero recovery permissible by law.</td>
                      <td>Permanently ceased upon issuance of ₹0 No Dues Certificate.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Borrower Consent</td>
                      <td>Unilateral decision by bank management without debtor knowledge.</td>
                      <td>Governed by statutory policy or government notifications.</td>
                      <td>Bilateral agreement executed via formal signed sanction letter.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">CIBIL Bureau Status</td>
                      <td className="text-rose-600 font-semibold">Marked &quot;Written Off&quot; (Zero new loan eligibility)</td>
                      <td className="text-emerald-600 font-semibold">Marked &quot;Closed&quot; or &quot;Waived&quot; (Clean closure)</td>
                      <td className="text-amber-600 font-semibold">Marked &quot;Settled&quot; / &quot;Post-Settled&quot; (Can rebuild score)</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Closing Documentation</td>
                      <td>No document provided to borrower (remains in default).</td>
                      <td>Official debt release or government waiver certificate.</td>
                      <td>Official Bank Sanction Letter + ₹0 No Dues Certificate.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

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
                      Loan Write-Off vs. Loan Waive-Off: Process &amp; Legal Architecture
                    </h3>
                  </div>
                </div>
                <a
                  href="/images/infographics/loan-write-off-vs-loan-waive-off.jpg"
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
                    src="/images/infographics/loan-write-off-vs-loan-waive-off.jpg"
                    alt="Loan Write-Off vs Loan Waive-Off Summary Infographic"
                    className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Quick Crux Footer Strip */}
              <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span><strong>Key Takeaway:</strong> A bank write-off never forgives debt; only a formal compromise settlement guarantees full legal closure and ₹0 NDC.</span>
                </div>
                <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                  Get Free Case Evaluation &rarr;
                </Link>
              </div>
            </div>

            {/* Section 5: Recovery Tactics After Write-Off */}
            <section id="recovery-tactics-after-write-off" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                5. Recovery Tactics &amp; Legal Arsenal Deployed After a Loan is Written Off
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Because a technical write-off does not extinguish debt obligations, banks maintain an aggressive multi-tiered recovery machinery. Once an account is transferred to the memorandum ledger, the bank&apos;s special recovery branch activates external recovery agencies, operating on contingency commissions ranging from 15% to 30% of recovered capital. These collection agents frequently utilize aggressive calling patterns, workplace visits, and social embarrassment tactics, erroneously claiming that criminal arrest warrants are imminent.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Beyond agency recovery, commercial lenders routinely assign portfolios of written-off unsecured loans to Asset Reconstruction Companies (ARCs) such as Phoenix ARC, Asset Reconstruction Company of India (ARCIL), or JM Financial under Section 5 of the SARFAESI Act, 2002. ARCs acquire non-performing debt at steep portfolio discounts (often 10% to 25% of face value) and enforce rigorous collection strategies, utilizing statutory notices and dispute summonses to compel payment.
              </p>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                Lenders also initiate formal legal proceedings against delinquent borrowers. For personal loans backed by electronic NACH mandates or security cheques, banks frequently issue statutory demand notices under Section 138 of the Negotiable Instruments Act, 1881, or Section 25 of the Payment and Settlement Systems Act, 2007. Lenders may also refer written-off files to National Lok Adalats or file summary civil recovery suits under Order XXXVII of the Code of Civil Procedure, 1908, to obtain enforceable recovery decrees before the 3-year statutory limitation period expires.
              </p>
            </section>

            {/* Section 6: NPV Settlement Economics */}
            <section id="npv-settlement-economics" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                6. Net Present Value (NPV) &amp; Bank Settlement Economics: Why Written-Off Debts Offer Deep Haircuts
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                While a written-off status exposes borrowers to ongoing recovery pressure, it paradoxically creates the strongest financial leverage for negotiating substantial settlement discounts. The financial reasoning governing bank recovery committees is grounded in Net Present Value (NPV) recovery modeling.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                When evaluating an account that has been 100% provisioned and written off for 12 to 36 months, bank risk committees recognize that initiating prolonged civil litigation involves heavy legal fees, court administrative delays of 3 to 7 years, and significant uncertainty regarding asset recovery from an unsecured individual. Under standard financial modeling, the Net Present Value of an immediate lump-sum settlement offer today is far higher than the discounted present value of potential future litigation recoveries minus legal expenses:
              </p>
              
              {/* Formula Callout Box */}
              <div className="bg-slate-900 text-white p-5 rounded-2xl my-6 border border-slate-700">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Bank Recovery Decision Formula</span>
                </div>
                <div className="font-mono text-xs md:text-sm text-blue-200 bg-slate-800/80 p-3.5 rounded-xl border border-slate-700 leading-relaxed overflow-x-auto">
                  NPV(Settlement) = Lump-Sum Offer &gt; [Expected Future Recovery / (1 + r)^t] - Cumulative Litigation Costs
                </div>
                <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                  Where <em>r</em> represents the bank&apos;s internal hurdle rate of capital and <em>t</em> represents the projected time lag in civil judicial execution.
                </p>
              </div>

              <p className="text-base leading-relaxed mb-6 text-slate-700">
                Because the bank has already written off the asset on its balance sheet, any settlement payment received enters the bank&apos;s books as pure, instant non-interest income. When SettleLoans advocates present documented evidence of genuine financial hardship (such as job loss, medical catastrophe, or business insolvency), bank recovery managers are legally empowered under internal compromise policies to authorize substantial waivers—frequently between 40% and 75% of the total outstanding dues.
              </p>
            </section>

            {/* Section 7: CIBIL Bureau Reality */}
            <section id="cibil-bureau-reporting-reality" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                7. CIBIL Bureau Reality: How &quot;Written Off&quot; Destroys Credit vs. Compromise Settlement
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Under the Credit Information Companies (Regulation) Act, 2005 (CICRA), all commercial banks and NBFCs are legally mandated to furnish accurate historical credit data monthly to authorized credit bureaus, including TransUnion CIBIL, Experian, Equifax, and CRIF High Mark. Leaving a defaulted loan in &quot;Written Off&quot; status produces severe long-term financial repercussions.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                A &quot;Written Off&quot; bureau entry indicates to all automated underwriting algorithms that the borrower committed an unmitigated default and abandoned their contractual obligation. This causes an immediate credit score degradation of 150 to 200 points, triggering automated rejection across all Tier-1 lenders for home loans, auto loans, personal credit lines, and premium credit cards. Under statutory bureau data retention guidelines, a written-off default record remains prominently flagged in credit reports for a minimum of 7 years, continuously suppressing your financial credibility.
              </p>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                Conversely, executing a formal One-Time Settlement updates your bureau record to &quot;Settled&quot; or &quot;Post (WO) Settled.&quot; While a settlement remark still reflects a compromise closure, it terminates the delinquency aging cycle, stops overdue interest reporting, and establishes that the account has been legally closed. This enables borrowers to initiate structured credit rehabilitation—such as using secured fixed-deposit credit cards—to systematically rebuild their credit score back to 750+ over 18 to 24 months. Furthermore, borrowers can later pay the waived haircut amount to convert their status to &quot;Closed - Fully Paid.&quot;
              </p>
            </section>

            {/* Section 8: Step-by-Step Settlement Roadmap */}
            <section id="step-by-step-settlement-roadmap" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                8. Step-by-Step Strategic Roadmap: Transforming a Written-Off Debt into a Closed Account
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Resolving a written-off loan requires a disciplined, legally backed procedural approach. SettleLoans empaneled advocates utilize a five-stage strategic workflow to transition defaulted accounts from toxic &quot;Written Off&quot; records to fully extinguished liabilities.
              </p>

              {/* 5-Step Narrative Cards */}
              <div className="space-y-4 my-6">
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                      1
                    </div>
                    <h3 className="font-bold text-slate-900 text-base">
                      Forensic Debt &amp; Credit Bureau Audit
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed pl-10">
                    Review official account statements, calculate the exact ratio of disbursed principal versus accumulated penal interest and late fees, and verify whether the loan is held by the original bank or has been assigned to an Asset Reconstruction Company.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                      2
                    </div>
                    <h3 className="font-bold text-slate-900 text-base">
                      Comprehensive Hardship Dossier Preparation
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed pl-10">
                    Compile verifiable legal evidence proving genuine financial distress, including salary termination notices, medical treatment records, income tax filings, or business closure documentation to justify statutory waiver eligibility.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                      3
                    </div>
                    <h3 className="font-bold text-slate-900 text-base">
                      Formal Advocate Representation &amp; Mandate Negotiation
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed pl-10">
                    Submit formal legal representations to the bank&apos;s Zonal Stressed Assets Resolution Committee under RBI compromise guidelines, negotiating maximum penalty waivers and realistic principal haircuts.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                      4
                    </div>
                    <h3 className="font-bold text-slate-900 text-base">
                      Sanction Letter Verification &amp; Safe Payment Execution
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed pl-10">
                    Perform rigorous legal verification of the bank&apos;s official settlement sanction letter, ensuring explicit mention of full and final settlement terms, before executing payment directly into the designated bank loan account.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                      5
                    </div>
                    <h3 className="font-bold text-slate-900 text-base">
                      Securing ₹0 No Dues Certificate &amp; CIBIL Updation
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed pl-10">
                    Obtain the original, stamped ₹0 No Dues Certificate from the bank, followed by serving statutory notices to credit bureaus under CICRA 2005 to ensure the account status is updated from &quot;Written Off&quot; to &quot;Settled / Closed.&quot;
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: Legal Defense & Borrower Rights */}
            <section id="legal-defense-borrower-rights" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                9. Legal Defense Framework: Stopping Harassment &amp; Enforcing RBI Rights
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                While commercial lenders possess the right to seek recovery of written-off debts, they are strictly bound by the Reserve Bank of India Fair Practices Code for Lenders and Guidelines on Recovery Agents. Under these statutory directives, recovery personnel are strictly prohibited from resorting to intimidation, verbal abuse, public humiliation, contacting borrowers before 8:00 AM or after 7:00 PM, or making unauthorized visits to borrower workplaces and residential premises.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                If collection agents violate these statutory boundaries, borrowers possess robust legal remedies. SettleLoans legal advocates serve formal cease-and-desist notices to bank nodal officers, file administrative complaints before the RBI Integrated Banking Ombudsman, and initiate criminal complaints under relevant provisions of the Bharatiya Nyaya Sanhita (BNS) for criminal intimidation, defamation, and extortion.
              </p>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                Furthermore, in cases involving Section 138 cheque bounce or Section 25 NACH dishonour notices, legal representation ensures that valid statutory defenses are mounted. Courts recognize genuine financial impossibility, and formal compromise negotiations often lead to the quashing of criminal proceedings upon the execution of a lawful settlement agreement.
              </p>
            </section>

            {/* Section 10: SettleLoans Legal Strategy */}
            <section id="settleloans-advocate-strategy" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                10. Institutional Legal Representation with SettleLoans
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Navigating the complex institutional hierarchy of public and private commercial banks requires specialized legal and financial expertise. As India&apos;s premier debt settlement and borrower advocacy platform, SettleLoans bridges the gap between distressed borrowers and institutional lenders.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Our empaneled legal advocates represent borrowers holding single or multi-lender portfolios across major institutions including HDFC Bank, ICICI Bank, State Bank of India, Axis Bank, Kotak Mahindra Bank, Bajaj Finance, and leading ARCs. We handle all lender communications, neutralize unlawful third-party recovery harassment, negotiate the highest legally achievable settlement discounts, and guarantee that every client receives a verified, tamper-proof ₹0 No Dues Certificate.
              </p>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                By transforming unpayable written-off liabilities into structured, affordable compromise settlements, SettleLoans restores peace of mind, preserves personal dignity, and provides a clear pathway toward complete credit rehabilitation.
              </p>
            </section>

            {/* Company Section Placement: Directly inside Middle Column before FAQ */}
            <CompanySection />

            {/* Section 11: Interactive FAQ Accordion */}
            <section id="faqs" className="scroll-mt-28 my-12">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center text-[#1F5EFF]">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                  Frequently Asked Questions
                </h2>
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

            {/* Section 12: Statutory & Regulatory Sources Strip (5 Official Links) */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#1F5EFF]" />
                <span>Statutory Regulatory Framework &amp; Legal Authorities</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Reserve Bank of India (RBI):</strong> Master Circular on Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Income Tax Act, 1961:</strong> Section 36(1)(vii) statutory provisions governing bad debt deductions for banking corporations.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Mandatory credit reporting, dispute redressal, and bureau history retention rules.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>SARFAESI Act, 2002:</strong> Section 5 provisions governing the acquisition and enforcement of distressed financial assets by ARCs.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Indian Contract Act, 1872:</strong> Section 63 statutory provisions regarding remission and complete discharge of contractual obligations.
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 13: Internal Topic Badges (10 Links) */}
            <div className="my-10 pt-6 border-t border-slate-200">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
                Related Debt Resolution &amp; Financial Planning Guides
              </h4>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/credit-card-vs-personal-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Credit Card vs Personal Loan Settlement
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
                <Link
                  href="/personal-loan-settlement-percentage"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Settlement Percentage
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Bank One Time Settlement OTS Policy
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
                  href="/how-to-avoid-loan-settlement-scams"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  How to Avoid Loan Settlement Scams
                </Link>
                <Link
                  href="/how-to-settle-credit-card-debt"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  How to Settle Credit Card Debt
                </Link>
                <Link
                  href="/loan-settlement-vs-debt-consolidation"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Loan Settlement vs Debt Consolidation
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
                Specializing in banking dispute resolution, written-off loan settlements, RBI regulatory compliance, and CIBIL credit score rehabilitation for borrowers across India.
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
                Facing Harassment for Written-Off Loans?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed mb-4">
                Do not let recovery agents intimidate you. Speak with a SettleLoans advocate to stop illegal harassment immediately and negotiate a lawful OTS settlement with 40%–75% waivers.
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
                    <strong>Anti-Harassment Shield:</strong> Immediate cessation of unauthorized recovery agent calls and workplace visits.
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
                    <strong>Transparent Advisory:</strong> Zero false promises; realistic legal guidance engineered to protect borrower dignity.
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
