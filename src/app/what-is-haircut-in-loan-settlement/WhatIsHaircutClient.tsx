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

export default function WhatIsHaircutClient() {
  const [activeId, setActiveId] = useState<string>('meaning-of-haircut-in-settlement');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'meaning-of-haircut-in-settlement', title: '1. Definition & Haircut Terminology' },
    { id: 'bank-balance-sheet-economics', title: '2. Bank Economics & Provisioning' },
    { id: 'unsecured-vs-secured-haircuts', title: '3. Unsecured vs. Secured Sizing' },
    { id: 'npv-recovery-calculation-formula', title: '4. Bank NPV Decision Formula' },
    { id: 'npa-aging-haircut-matrix', title: '5. NPA Aging & Haircut Matrix' },
    { id: 'rbi-regulatory-directives-ots', title: '6. RBI Compromise Guidelines' },
    { id: 'advocate-negotiation-strategy', title: '7. Legal Negotiation Strategy' },
    { id: 'sanction-letter-audit-safeguards', title: '8. Sanction Letter Verification' },
    { id: 'cibil-impact-credit-rehabilitation', title: '9. CIBIL Impact & Score Recovery' },
    { id: 'settleloans-advocacy-framework', title: '10. SettleLoans Legal Protection' },
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
      question: 'What is the meaning of a haircut in bank loan settlement?',
      answer: (
        <p>
          In banking and debt resolution terminology, a &quot;haircut&quot; refers to the percentage of total outstanding loan dues (encompassing principal balance, accrued interest, penal interest, and incidental recovery charges) that a lending institution agrees to waive, forgive, or write off to reach a legally binding compromise settlement (One-Time Settlement or OTS) with a distressed borrower.
        </p>
      ),
    },
    {
      question: 'How much haircut can a borrower realistically negotiate on an unsecured personal loan or credit card?',
      answer: (
        <p>
          For unsecured personal loans and credit card portfolios categorized as Non-Performing Assets (NPAs), Indian commercial banks and NBFCs routinely authorize haircuts ranging between 40% and 75% of the total ledger balance. The precise discount depends on delinquency duration, the bank&apos;s internal provisioning reserves, and verified evidence of genuine financial hardship.
        </p>
      ),
    },
    {
      question: 'Why do Indian commercial banks agree to accept substantial debt haircuts?',
      answer: (
        <p>
          Banks accept haircuts based on Net Present Value (NPV) recovery economics. Carrying delinquent accounts requires mandatory capital provisioning under RBI prudential guidelines, tying up liquidity. An immediate cash settlement delivers guaranteed capital recovery, whereas civil litigation through civil courts or Debt Recovery Tribunals (DRTs) entails 3 to 7 years of procedural delays and compounding legal costs.
        </p>
      ),
    },
    {
      question: 'What is the difference between a principal haircut and an interest waiver?',
      answer: (
        <p>
          An interest waiver forgives accumulated regular interest, compounding penal levies, and bounce penalties, requiring full repayment of the originally disbursed principal. A principal haircut waives a substantial portion of the original disbursed principal itself, which bank Credit Committees only approve when accounts reach advanced NPA stages with verifiable borrower insolvency.
        </p>
      ),
    },
    {
      question: 'What are the RBI regulatory guidelines governing loan settlement haircuts?',
      answer: (
        <p>
          Under the RBI Master Direction on Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24), all regulated banks and NBFCs must maintain transparent, board-approved Compromise Settlement Policies. These directives mandate objective hardship evaluation standards, structured delegation of sanctioning powers, non-discriminatory borrower treatment, and a 12-month cooling period before settled borrowers can seek fresh credit.
        </p>
      ),
    },
    {
      question: 'Can a borrower negotiate a haircut on secured credit facilities like home loans or LAP?',
      answer: (
        <p>
          Haircuts on secured credit facilities are typically limited to 5% to 20% waivers of penal interest and legal costs. Because lenders hold enforceable mortgage security rights under the SARFAESI Act, 2002 to auction underlying properties, principal haircuts are rarely approved unless the mortgaged asset suffers severe structural defects, title disputes, or drastic valuation crashes.
        </p>
      ),
    },
    {
      question: 'How does a debt haircut impact my CIBIL score and credit bureau history?',
      answer: (
        <p>
          Executing a settlement with a haircut causes credit bureaus (CIBIL, Experian, Equifax, CRIF) to record the account status as &quot;Settled&quot; or &quot;Post-Settled&quot; with a ₹0 current balance. While this remark reduces credit scores by 75 to 120 points, it halts monthly default accumulation and allows borrowers to rebuild their score back to 750+ over 18 to 24 months using secured credit cards.
        </p>
      ),
    },
    {
      question: 'How do bank Credit Committees calculate the exact haircut percentage for an NPA?',
      answer: (
        <p>
          Credit Committees evaluate four primary metrics: (1) Asset classification bucket (Sub-Standard, Doubtful-1, Doubtful-2, Doubtful-3, or Loss Asset), (2) Existing provisioning level (15% to 100%), (3) Net Present Value of immediate cash recovery versus projected litigation costs over 3 to 5 years, and (4) Documented hardship evidence demonstrating irreversible insolvency.
        </p>
      ),
    },
    {
      question: 'What precautions must a borrower observe before paying a negotiated settlement amount?',
      answer: (
        <p>
          Borrowers must never remit funds based on verbal claims or WhatsApp payment links from recovery agents. Always demand an authentic OTS Sanction Letter on official bank letterhead signed by an authorized manager, verify that it explicitly waives all residual dues, and pay directly into the specific loan account via NEFT/RTGS before securing a stamped ₹0 No Dues Certificate.
        </p>
      ),
    },
    {
      question: 'Can I later convert a &quot;Settled&quot; CIBIL status to &quot;Closed - Fully Paid&quot;?',
      answer: (
        <p>
          Yes. If your financial position recovers later, you can approach the original lender, pay the remaining waived haircut amount, and obtain a full account closure certificate. Under CICRA regulations, the bank is legally obligated to notify credit bureaus to update the historical status to &quot;Closed - Fully Paid&quot; within 30 days of receiving the balance.
        </p>
      ),
    },
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
            Banking Terminology &amp; Legal Settlement Guide 2026
          </div>

          {/* H1 Headline */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            What Is a Haircut in Loan Settlement?{' '}
            <span className="text-[#3b82f6] md:text-[#60a5fa]">Meaning, Calculation &amp; RBI Rules</span>
          </h1>

          {/* Subtitle / Direct Answer Snippet */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Heard the term &quot;haircut&quot; from a banker or consultant? Discover the precise financial mechanics of loan haircuts in Indian banking, how lenders calculate NPA write-offs under RBI compromise frameworks, and how to negotiate maximum debt reductions.
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
              <span>Calculate My Settlement Haircut Free</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#meaning-of-haircut-in-settlement"
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
          {/* Left Column (Sticky TOC + Crux Pill) */}
          <aside className="hidden lg:block sticky top-24 space-y-4">
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

            <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-4 text-xs text-slate-700">
              <div className="flex items-center gap-1.5 font-bold text-blue-900 mb-1">
                <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                <span>Executive Crux</span>
              </div>
              <p className="leading-relaxed text-slate-600">
                A haircut is the voluntary percentage waiver of outstanding debt granted by a bank under RBI compromise rules. Unsecured loans routinely secure 40% to 75% haircuts through legal advocacy.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Content - Maximum Readable Width) */}
          <main className="w-full min-w-0 font-sans text-slate-800 blog-content">
            {/* Section 1: Definition & Terminology */}
            <section id="meaning-of-haircut-in-settlement" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                1. Demystifying the Financial Terminology: What Does &quot;Haircut&quot; Mean in Loan Settlement?
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                In modern financial and banking terminology, the word **haircut** refers to the deliberate reduction in the book value of an asset or the percentage discount that a creditor accepts when resolving a defaulted credit obligation. While the concept originated in institutional corporate restructuring under the Insolvency and Bankruptcy Code (IBC) and sovereign debt negotiations, it has become the standard operational term in Indian retail banking for **One-Time Settlements (OTS) and compromise debt resolutions**.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                When an individual borrower defaults on an unsecured personal loan, credit card, or commercial credit facility, the total ledger balance consists of three distinct layers: the disbursed original principal balance, regular contracted interest, and an inflated layer of compounding penal interest, overdue late levies, and legal recovery charges. When a bank agrees to execute a compromise settlement, the **haircut represents the total monetary difference between what the borrower technically owes on paper and the discounted lump-sum amount the bank accepts as full and final payment**.
              </p>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                For example, if a borrower has an accumulated overdue balance of ₹10 Lakh on a defaulted personal loan and the bank&apos;s Zonal Settlement Committee formally approves an OTS of ₹4 Lakh to close the account permanently, the bank has absorbed a **60% haircut (₹6 Lakh waiver)**. Crucially, debt settlement haircuts in India are divided into two categories: an **interest waiver** (where only accumulated penal levies and charges are erased) and a **principal haircut** (where the bank forgives a substantial portion of the original borrowed principal itself).
              </p>

              {/* High-Impact Alert Box */}
              <div className="bg-blue-50 border-l-4 border-[#1F5EFF] p-5 rounded-r-2xl my-6">
                <div className="flex items-center gap-2 text-blue-950 font-bold text-base mb-1">
                  <Info className="w-5 h-5 text-[#1F5EFF] flex-shrink-0" />
                  <span>Core Principle: A Haircut Is a Permanent Legal Release</span>
                </div>
                <p className="text-sm text-blue-900 leading-relaxed font-medium">
                  Unlike an internal accounting write-off where the bank keeps chasing the debtor, a negotiated settlement haircut ratified through a formal OTS Sanction Letter permanently extinguishes the borrower&apos;s legal debt under Section 63 of the Indian Contract Act, 1872.
                </p>
              </div>
            </section>

            {/* Section 2: Bank Balance Sheet Economics */}
            <section id="bank-balance-sheet-economics" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                2. The Economic Rationale: Why Indian Banks Willingly Take Haircuts on NPAs
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Borrowers frequently ask why a commercial lending institution would willingly forfeit hundreds of thousands or even millions of rupees rather than pursuing the debtor for the complete amount. The answer lies in the rigorous regulatory accounting mandates imposed on commercial banks and Non-Banking Financial Companies (NBFCs) by the Reserve Bank of India under its Master Circular on Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP).
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                When a borrower fails to service interest or principal installments for 90 consecutive days, the loan transitions from a standard asset into a Non-Performing Asset (NPA). Under RBI prudential guidelines, banks cannot recognize uncollected interest on NPAs as revenue. Furthermore, lenders are legally mandated to set aside cash reserves—known as **provisioning**—directly out of their operating profits to cushion the balance sheet against default risk. As an NPA ages from Sub-Standard to Doubtful-1, Doubtful-2, Doubtful-3, and Loss Asset categories, mandatory provisioning escalates rapidly from 15% to a complete 100% of the loan value.
              </p>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                Carrying heavily provisioned, delinquent loans severely damages a bank&apos;s financial health. It elevates the Gross NPA ratio, depresses return on equity, and locks up statutory capital that could otherwise be deployed into profitable lending. When an account has reached Doubtful or Loss status with 100% provisioning, the bank has already absorbed the loss on paper. Consequently, when a borrower offers an immediate cash settlement, every single rupee recovered flows directly into the bank&apos;s profit and loss statement as **instant non-interest recovery income**. This accounting reality creates powerful commercial motivation for banks to authorize substantial haircuts.
              </p>
            </section>

            {/* Section 3: Unsecured vs Secured Haircuts */}
            <section id="unsecured-vs-secured-haircuts" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                3. Haircut Sizing Dynamics: Unsecured Credit vs. Secured Asset Facilities
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                The magnitude of the haircut a bank will approve depends fundamentally on the underlying collateral backing the credit facility. The Indian financial sector operates on starkly distinct legal frameworks for unsecured versus secured debts, directly dictating the bargaining leverage available to borrowers and their legal advocates.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                In **unsecured debt portfolios**—such as personal loans, credit card balances, and unsecured business lines—the lender holds zero underlying tangible collateral. If the borrower defaults due to genuine insolvency, the bank&apos;s legal recourse is confined to filing civil recovery suits or initiating Section 138 / Section 25 proceedings. Because unsecured litigation in Indian civil courts is protracted and asset attachment is difficult, bank credit committees are prepared to grant aggressive haircuts, routinely approving **discounts between 40% and 75% of total outstanding ledger dues** for distressed debtors.
              </p>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                Conversely, in **secured debt facilities**—such as home loans, loans against property (LAP), and commercial mortgage financing—the lender holds registered mortgage rights over immovable physical assets. Under the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI Act), secured creditors can legally seize and auction mortgaged properties without prior court intervention. Consequently, banks rarely grant principal haircuts on secured loans, limiting settlements to a **5% to 20% waiver of accrued penal interest and legal costs**, unless the mortgaged property suffers from serious title defects, severe environmental damage, or protracted injunctions in the Debt Recovery Tribunal (DRT).
              </p>
            </section>

            {/* Section 4: NPV Recovery Calculation Formula */}
            <section id="npv-recovery-calculation-formula" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                4. The Mathematical Model: Net Present Value (NPV) Recovery Formula Used by Credit Committees
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Bank settlement approvals are neither arbitrary nor based on emotional appeals. Institutional recovery decisions are governed by a mathematical Net Present Value (NPV) recovery comparison model mandated under internal credit compromise policies. When evaluating an OTS proposal, the bank&apos;s Credit Settlement Committee compares the guaranteed present cash offer against the estimated discounted recovery achievable through prolonged legal recovery proceedings.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                The institutional decision-making formula evaluates whether the immediate lump-sum settlement offer exceeds the discounted present value of uncertain future judicial recoveries after factoring in litigation fees, administrative overhead, and the time value of money:
              </p>

              {/* Formula Callout Box */}
              <div className="bg-slate-900 text-white p-5 rounded-2xl my-6 border border-slate-700">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Institutional Compromise Settlement Formula</span>
                </div>
                <div className="font-mono text-xs md:text-sm text-blue-200 bg-slate-800/80 p-3.5 rounded-xl border border-slate-700 leading-relaxed overflow-x-auto">
                  NPV(Compromise Settlement) = Immediate Cash Offer &gt; [Expected Future Court Recovery / (1 + r)^t] - Cumulative Litigation &amp; Recovery Costs
                </div>
                <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                  Where <em>r</em> represents the bank&apos;s internal cost of capital (hurdle rate) and <em>t</em> represents the estimated time lag (typically 3 to 7 years) required to obtain and execute a final civil court recovery decree.
                </p>
              </div>

              <p className="text-base leading-relaxed mb-6 text-slate-700">
                When SettleLoans legal advocates establish that the borrower has suffered verifiable, permanent income loss and holds no attachable liquid assets, the bank&apos;s expected future recovery via litigation drops close to zero. Under this mathematical reality, accepting an immediate lump-sum settlement with a substantial 50% to 70% haircut delivers a demonstrably higher financial return to the bank than years of fruitless court battles.
              </p>
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
                      Loan Settlement Haircut &amp; Bank OTS Process Overview
                    </h3>
                  </div>
                </div>
                <a
                  href="/images/infographics/what-is-haircut-in-loan-settlement.jpg"
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
                    src="/images/infographics/what-is-haircut-in-loan-settlement.jpg"
                    alt="What Is Haircut in Loan Settlement Summary Infographic"
                    className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Quick Crux Footer Strip */}
              <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span><strong>Key Takeaway:</strong> As NPAs age from Sub-Standard to Doubtful and Loss categories, bank provisioning rises to 100%, unlocking 40% to 75% haircut opportunities.</span>
                </div>
                <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                  Get Free Case Evaluation &rarr;
                </Link>
              </div>
            </div>

            {/* Section 5: NPA Aging Buckets & Haircut Matrix */}
            <section id="npa-aging-haircut-matrix" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                5. NPA Asset Classification &amp; Haircut Leverage Matrix: How Delinquency Aging Dictates Discounts
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                The stage of delinquency and the formal asset classification bucket of your defaulted loan directly govern the haircut percentage a bank is authorized to approve. Bank Delegation of Financial Powers matrices establish strict settlement discount caps tied to the provisioning level of each delinquency tier.
              </p>

              {/* 4-Sided Bordered Comparison Table */}
              <div className="overflow-x-auto my-6">
                <table>
                  <thead>
                    <tr>
                      <th>Delinquency Tier &amp; Asset Category</th>
                      <th>Days Past Due (DPD)</th>
                      <th>Bank Provisioning Mandate</th>
                      <th>Typical Haircut Range (Unsecured)</th>
                      <th>Settlement Approval Authority Tier</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-2 (Special Mention Account 2)</td>
                      <td>61 – 90 Days Overdue</td>
                      <td>Standard Provisioning (0.4% – 5%)</td>
                      <td className="text-amber-600 font-semibold">15% – 25% (Penal Fee Waiver Only)</td>
                      <td>Branch Manager / Chief Manager</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Sub-Standard NPA</td>
                      <td>91 – 365 Days Overdue</td>
                      <td>15% – 25% Total Provisioning</td>
                      <td className="text-blue-600 font-semibold">30% – 45% Total Dues Waiver</td>
                      <td>Regional Settlement Committee</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Doubtful-1 (D1) NPA</td>
                      <td>12 – 24 Months Overdue</td>
                      <td>100% Unsecured / 25% Secured</td>
                      <td className="text-emerald-600 font-bold">45% – 60% Haircut on Total Dues</td>
                      <td>Zonal Stressed Assets Recovery Branch</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Doubtful-2 / Doubtful-3 (D2/D3)</td>
                      <td>24 – 48 Months Overdue</td>
                      <td>100% Unsecured / 40%–100% Secured</td>
                      <td className="text-emerald-600 font-bold">55% – 70% Haircut on Total Dues</td>
                      <td>General Manager / Head Office Committee</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Loss Asset / Written-Off</td>
                      <td>&gt; 48 Months or Uncollectible</td>
                      <td>100% Full Balance Sheet Write-Off</td>
                      <td className="text-emerald-700 font-black">65% – 80% Maximum Permissible Haircut</td>
                      <td>Managing Director / Executive Board Panel</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                As illustrated above, borrowers who attempt to negotiate a compromise settlement during the early SMA-2 or Sub-Standard stages face significant resistance because the bank has not yet absorbed significant provisioning losses. However, once the account reaches Doubtful-1 or Loss Asset classification, the bank&apos;s internal provisioning reaches 100%, giving experienced legal advocates maximum leverage to secure deep 50% to 75% principal and penalty haircuts.
              </p>
            </section>

            {/* Section 6: RBI Regulatory Directives */}
            <section id="rbi-regulatory-directives-ots" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                6. RBI Regulatory Framework: Master Direction on Compromise Settlements (2023–2026)
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                To standardize compromise settlements and eliminate arbitrary recovery agent practices, the Reserve Bank of India issued its comprehensive **Master Direction on Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24)**. This landmark regulatory directive applies to all commercial banks, urban cooperative banks, and NBFCs across India, establishing strict statutory rules governing debt haircuts.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                First, the RBI mandates that every regulated lending institution must put in place a **Board-Approved Compromise Settlement Policy**. This policy must lay down objective criteria for evaluating genuine financial hardship, permissible haircut calculation methodologies, and a structured Delegation of Powers matrix specifying the minimum authority levels empowered to approve write-offs. Settlements cannot be sanctioned arbitrarily by frontline recovery agents or branch staff without committee approval.
              </p>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                Second, the RBI directive explicitly permits lenders to undertake compromise settlements across all categories of non-performing assets, provided there is transparent evaluation of borrower distress. The framework also institutes a **mandatory cooling period of at least 12 months** from the date of settlement payment before a compromised borrower can be considered for fresh credit by regulated lenders. Furthermore, under RBI Circular RBI/2023-24/60, lenders are legally mandated to release all original documents and issue full account discharge certificates within 30 days of settlement payment completion.
              </p>
            </section>

            {/* Section 7: Advocate Negotiation Strategy */}
            <section id="advocate-negotiation-strategy" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                7. Strategic Legal Negotiation: How Advocates Secure Maximum Permissible Debt Haircuts
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Securing a favorable haircut is a sophisticated legal and financial negotiation process. Distressed borrowers who negotiate directly with third-party collection agents often fail because recovery agents operate on aggressive monthly commission quotas and lack the statutory authority to approve principal waivers. SettleLoans advocates deploy a structured four-stage procedural workflow to achieve maximum permissible haircuts.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                The process commences with a **forensic debt ledger audit**. Legal advocates scrutinize the bank&apos;s statement of accounts to strip away arbitrary penal fees, compounding bounce charges, and unauthorized interest capitalized during distress periods. This establishes the true uninflated principal baseline. Next, advocates construct an unassailable **Hardship Dossier**, compiling documented legal evidence such as medical summaries, job retrenchment notices, corporate liquidation papers, or audited income reductions to prove involuntary financial insolvency.
              </p>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                Subsequently, formal legal representation is submitted directly to the bank&apos;s **Zonal Stressed Assets Recovery Branch (SARB) and Credit Settlement Committee**, completely bypassing third-party collection agencies. Initial settlement offers are strategically anchored at 25% to 35% of total dues under RBI compromise guidelines. Through disciplined counter-negotiation, advocates typically conclude binding settlements in the 40% to 60% haircut band, ensuring that the borrower receives the highest possible waiver legally authorized by the bank&apos;s board policy.
              </p>
            </section>

            {/* Section 8: Sanction Letter Audit */}
            <section id="sanction-letter-audit-safeguards" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                8. Sanction Letter Audit: Preventing Fraudulent Haircuts &amp; Collection Agent Traps
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                The most dangerous hazard in debt resolution is falling victim to unauthorized settlement scams executed by commission-driven collection agents. In thousands of documented instances across India, predatory recovery agents issue fake WhatsApp discount letters or verbally promise that paying a small amount will settle the loan. Once the borrower deposits the money, the bank books it as a partial overdue payment, leaving the remaining principal active and delinquency continuing unabated.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                To guarantee absolute legal immunity, every compromise settlement must be verified through a strict documentary audit before any payment is executed. A genuine, legally enforceable **OTS Sanction Letter** must fulfill four non-negotiable criteria:
              </p>

              {/* Callout Box on Mandatory Sanction Criteria */}
              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl my-6">
                <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-emerald-600" />
                  <span>Mandatory Legal Criteria for a Valid OTS Sanction Letter</span>
                </h3>
                <div className="space-y-2 text-sm text-slate-700">
                  <p>
                    <strong>1. Official Bank Letterhead:</strong> The document must be printed on official bank stationery bearing a valid reference number, branch seal, and signature of an authorized designated officer.
                  </p>
                  <p>
                    <strong>2. Specific Rupee Settlement Figure:</strong> The letter must explicitly mention the exact negotiated settlement sum and precise payment tranche deadlines without ambiguous clauses.
                  </p>
                  <p>
                    <strong>3. Explicit Waiver &amp; Extinguishment Clause:</strong> It must state clearly that upon receipt of the settlement sum, all residual principal, interest, and charges stand permanently waived and extinguished.
                  </p>
                  <p>
                    <strong>4. Commitment for ₹0 NDC &amp; Court Withdrawal:</strong> The letter must obligate the bank to issue a formal ₹0 No Dues Certificate and unconditionally withdraw any pending civil, DRT, or Section 138 proceedings.
                  </p>
                </div>
              </div>

              <p className="text-base leading-relaxed mb-6 text-slate-700">
                Furthermore, settlement remittances must strictly be deposited directly into your designated bank loan account via direct banking channels (NEFT/RTGS/Account Payee Cheque). Never transfer settlement funds to personal accounts, agency UPI handles, or cash collection personnel.
              </p>
            </section>

            {/* Section 9: CIBIL Impact & Credit Rehabilitation */}
            <section id="cibil-impact-credit-rehabilitation" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                9. Credit Bureau Footprint: How a Haircut Impacts CIBIL &amp; The Path to Score Rehabilitation
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Under the Credit Information Companies (Regulation) Act, 2005 (CICRA), all regulated lenders are legally required to report the resolution status of closed credit facilities to authorized credit bureaus—including TransUnion CIBIL, Experian, Equifax, and CRIF High Mark. Understanding how a settlement haircut is recorded in your credit report is essential for long-term financial planning.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                When a loan is resolved through a compromise settlement involving a haircut, the bank reports the account status remark as **&quot;Settled&quot; or &quot;Post-Settled&quot;** with an outstanding balance of ₹0. Because the bank absorbed a loss on the waived haircut amount, automated underwriting algorithms register this as a compromise closure, resulting in a temporary credit score drop of 75 to 120 points. While a &quot;Settled&quot; remark prevents immediate access to unsecured prime loans, it is vastly superior to leaving an account in active default or &quot;Written Off&quot; status, which completely paralyzes your financial life.
              </p>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                Once the settlement is completed and the account balance drops to ₹0, delinquency aging stops immediately. Borrowers can initiate a structured **credit rehabilitation program**: by opening a fixed-deposit-backed secured credit card, maintaining credit utilization below 25%, and servicing all monthly balances punctually, borrowers systematically rebuild their credit score back to 750+ within 18 to 24 months. Furthermore, if your financial circumstances improve in the future, you retain the legal right under RBI rules to pay the remaining waived haircut balance to convert the CIBIL remark to **&quot;Closed - Fully Paid.&quot;**
              </p>
            </section>

            {/* Section 10: SettleLoans Legal Strategy */}
            <section id="settleloans-advocacy-framework" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                10. Institutional Legal Advocacy: Protecting Borrowers with SettleLoans
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Navigating the complex institutional bureaucracy of public and private commercial banks requires specialized legal and financial expertise. As India&apos;s premier loan settlement, debt dispute resolution, and legal defense platform, SettleLoans provides complete institutional protection for distressed borrowers.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Our empaneled legal advocates represent borrowers across major lending institutions—including HDFC Bank, ICICI Bank, State Bank of India, Axis Bank, Kotak Mahindra Bank, Bajaj Finance, and leading Asset Reconstruction Companies (ARCs). We serve immediate cease-and-desist notices to stop unlawful recovery harassment, represent clients before Senior Settlement Committees, negotiate the deepest legally permissible debt haircuts, and ensure that every client receives a verified, tamper-proof ₹0 No Dues Certificate.
              </p>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                By transforming unmanageable delinquent debt into structured, affordable compromise settlements, SettleLoans restores financial freedom, preserves personal dignity, and provides a clear, lawful pathway back to complete creditworthiness.
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
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#1F5EFF]" />
                <span>Statutory Regulatory Framework &amp; Banking Authorities</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Reserve Bank of India (RBI):</strong> Master Direction on Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>RBI IRACP Norms:</strong> Master Circular on Prudential Norms on Income Recognition, Asset Classification and Provisioning pertaining to Advances.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Statutory bureau reporting, credit dispute resolution, and closure mandates.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>SARFAESI Act, 2002:</strong> Statutory provisions governing asset enforcement, securitisation, and debt assignment to ARCs.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Indian Contract Act, 1872:</strong> Section 63 statutory provisions regarding remission and complete legal discharge of contractual obligations.
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
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Bank One Time Settlement OTS Policy
                </Link>
                <Link
                  href="/loan-write-off-vs-loan-waive-off"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Loan Write-Off vs Loan Waive-Off
                </Link>
                <Link
                  href="/personal-loan-settlement-percentage"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Settlement Percentage
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  No Dues Certificate After Settlement
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Settlement CIBIL Impact
                </Link>
                <Link
                  href="/credit-card-vs-personal-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Credit Card vs Personal Loan Settlement
                </Link>
                <Link
                  href="/unsecured-business-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Unsecured Business Loan Settlement
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
                  href="/how-to-settle-credit-card-debt"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  How to Settle Credit Card Debt
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
                  <div className="font-bold text-slate-900 text-sm leading-tight">
                    <Link
                      href="/authors/ashish-jhangra"
                      className="hover:text-[#1F5EFF] transition-colors"
                    >
                      Ashish Jhangra
                    </Link>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Debt Settlement Strategist &amp; Legal Advocate
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Specializing in NPA dispute resolution, banking haircut negotiations, RBI regulatory compliance, and CIBIL credit score rehabilitation for borrowers across India.
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
              <div className="text-lg font-black mb-2 leading-tight">
                Want to Negotiate Maximum Debt Haircut?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-4">
                Do not let recovery agents intimidate you. Speak with a SettleLoans advocate to stop illegal harassment immediately and negotiate a lawful OTS settlement with 40%–75% debt waivers.
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
              <div className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                <span>Why Borrowers Trust SettleLoans</span>
              </div>
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
