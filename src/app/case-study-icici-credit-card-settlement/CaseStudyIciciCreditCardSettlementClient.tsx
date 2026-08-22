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
  Calculator,
  Briefcase,
  Layers,
  ArrowUpRight,
  Gavel,
  FileCheck,
  ShieldX,
  UserCheck,
  AlertCircle,
  Coins,
  Flame
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

export default function CaseStudyIciciCreditCardSettlementClient() {
  const [activeId, setActiveId] = useState<string>('case-background-mad-trap');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'case-background-mad-trap', title: '1. The ₹5 Lakh Crisis & MAD Trap' },
    { id: 'compounding-mathematics-apr-gst', title: '2. The Anatomy of 42% APR & GST' },
    { id: 'banking-accounting-npa-provisioning', title: '3. ICICI Retail NPA Mechanics' },
    { id: 'hardship-audit-npv-valuation', title: '4. Hardship Audit & NPV Formula' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Resolution Blueprint' },
    { id: 'recovery-containment-legal-defense', title: '6. Anti-Harassment & Legal Shield' },
    { id: 'sarb-negotiation-haircut-breakdown', title: '7. Negotiating the ₹1.5L Settlement' },
    { id: 'sanction-letter-forensics-payment', title: '8. Sanction Letter Audit Protocols' },
    { id: 'no-dues-certificate-cibil-trajectory', title: '9. ₹0 NDC & Credit Rehabilitation' },
    { id: 'ots-vs-restructuring-matrix', title: '10. Comparative Resolution Matrix' },
    { id: 'company-resolution-section', title: '11. SettleLoans Legal Defense' },
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
      question: "How was an ICICI credit card debt of ₹5 Lakhs settled for just ₹1.5 Lakhs?",
      answer: (
        <p>
          The borrower&apos;s ₹5,00,000 claimed ledger balance consisted of an original core principal of ₹1,80,000 and ₹3,20,000 in accumulated compound interest (42% APR), late payment fees, and 18% GST charges. SettleLoans compiled a comprehensive hardship dossier proving involuntary financial distress, performed a forensic ledger audit to isolate unearned penal interest, and negotiated directly with ICICI Bank&apos;s Stressed Assets Resolution Branch (SARB) to secure an official One-Time Settlement (OTS) of <strong>₹1,50,000</strong>—representing a <strong>70% total debt waiver</strong>.
        </p>
      )
    },
    {
      question: "Why do ICICI credit card balances balloon so rapidly when payments are missed?",
      answer: (
        <p>
          Credit cards carry the highest interest rates in Indian retail banking, typically 3.5% to 3.75% per month (<strong>42% to 45% annual percentage rate or APR</strong>). When a borrower pays only the Minimum Amount Due (MAD) or misses payments, finance charges compound monthly, late payment fees (up to ₹1,200 per cycle) are levied, and an <strong>18% Goods and Services Tax (GST)</strong> is added to all interest and charges. Over 18 to 24 months, these charges easily exceed 150% to 200% of the original principal amount.
        </p>
      )
    },
    {
      question: "Does paying the Minimum Amount Due (MAD) reduce the principal balance?",
      answer: (
        <p>
          <strong>No.</strong> The Minimum Amount Due on credit cards is typically calculated as 5% of the outstanding balance plus taxes and fees. Almost the entire MAD goes toward servicing monthly finance charges, late fees, and GST, with negligible reduction of the underlying principal. Paying only MAD keeps the borrower trapped in a multi-decade repayment cycle while the total debt continues to compound.
        </p>
      )
    },
    {
      question: "How does ICICI Bank calculate the minimum acceptable settlement amount for credit cards?",
      answer: (
        <p>
          ICICI Bank&apos;s Credit Committee evaluates credit card settlement proposals using a <strong>Net Present Value (NPV) recovery formula</strong>. Because credit card debt is 100% unsecured with zero underlying collateral, once an account enters NPA status (90+ DPD) and undergoes regulatory provisioning, the bank compares immediate lump-sum cash recovery against the high legal costs and multi-year delays of pursuing civil court recovery.
        </p>
      )
    },
    {
      question: "Can ICICI Bank file criminal charges or have cardholders arrested for credit card default?",
      answer: (
        <p>
          <strong>No.</strong> Unsecured credit card default is strictly a civil breach of contract under the Indian Contract Act, 1872. The police cannot register an FIR, issue arrest warrants, or detain a borrower for genuine financial inability to pay credit card dues. However, if automated NACH/e-mandates bounce, the bank may send statutory legal notices under Section 25 of the Payment and Settlement Systems Act, 2007, or Section 138 of the Negotiable Instruments Act, 1881, which can be resolved through formal legal representation.
        </p>
      )
    },
    {
      question: "How can borrowers stop aggressive ICICI recovery agent calls and home visits?",
      answer: (
        <p>
          Under the <strong>RBI Master Directions on Recovery Agents (2022)</strong> and the Fair Practices Code, recovery agents are legally prohibited from calling before 08:00 AM or after 07:00 PM, contacting relatives, friends, or employers, using abusive language, or intimidating borrowers. Borrowers can issue a formal legal cease-and-desist notice to ICICI Bank&apos;s Principal Nodal Officer (PNO) and file a complaint on the RBI Integrated Ombudsman portal (cms.rbi.org.in).
        </p>
      )
    },
    {
      question: "What must be verified in an ICICI Bank OTS Sanction Letter before paying the settlement amount?",
      answer: (
        <p>
          Borrowers must ensure: (1) The letter is on official ICICI Bank letterhead with an authorized officer&apos;s signature, designation, and employee ID; (2) It explicitly mentions the credit card account number and the exact negotiated settlement figure as full and final discharge; (3) It includes a clause confirming 100% waiver of residual balance, interest, and penalties; (4) It commits to issuing a No Dues Certificate (NDC) and withdrawing any legal notices; (5) Payment is remitted directly into the official ICICI credit card account number.
        </p>
      )
    },
    {
      question: "How does an ICICI credit card settlement affect CIBIL score and how is it repaired?",
      answer: (
        <p>
          Following settlement, ICICI Bank updates credit bureaus with a <strong>&apos;Settled&apos;</strong> remark and an outstanding balance of <strong>₹0</strong>. While the score experiences an initial drop of 75 to 120 points, the compounding default accumulation stops permanently. Borrowers can rebuild their CIBIL score back to 750+ within 18 to 24 months by using a secured fixed-deposit credit card, keeping credit utilization below 30%, and maintaining a flawless repayment track record.
        </p>
      )
    },
    {
      question: "How long does ICICI Bank take to issue the No Dues Certificate after settlement payment?",
      answer: (
        <p>
          Under <strong>RBI Circular RBI/2023-24/60</strong>, all regulated commercial banks including ICICI Bank must issue the formal No Dues Certificate (NDC) / Loan Closure Certificate and update credit bureau records within <strong>30 calendar days</strong> of receiving full settlement funds. Lenders failing to comply within this statutory timeframe are liable to pay compensation of <strong>₹5,000 per day of delay</strong> to the borrower.
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
            <span>Verified Settlement Case Study • ICICI Bank</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            ICICI Credit Card Settlement Case Study: <span className="text-[#3b82f6] md:text-[#60a5fa]">₹5 Lakh Debt Settled for ₹1.5L</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            How a borrower trapped in a ₹5,00,000 credit card debt spiral—where ₹3.2 Lakhs comprised 42% APR compound interest and penalties on a ₹1.8L principal base—secured a binding 70% debt waiver through strategic bank negotiation.
          </p>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-3 mb-5 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Authored by <strong>Ashish Jhangra</strong></span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Published: August 2026</span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>RBI Compromise Settlement Framework</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Settle Your ICICI Card Debt</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Free Hardship Evaluation
            </Link>
          </div>
        </div>
      </section>

      {/* B. Stats Strip Component */}
      <StatsStrip />

      {/* Main 3-Column Content Layout */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column: Sticky Table of Contents + Quick Crux */}
          <aside className="hidden lg:block sticky top-24 space-y-5">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#1F5EFF]" />
                Case Study Index
              </h3>
              <nav className="space-y-1.5 text-xs">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block py-1.5 px-2.5 rounded-lg transition-colors leading-snug ${
                      activeId === item.id
                        ? 'bg-[#1F5EFF] text-white font-bold shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                    }`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick Crux Pill */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-4 text-xs text-slate-700 shadow-sm">
              <div className="flex items-center gap-2 font-bold text-blue-900 mb-1.5">
                <Sparkles className="w-4 h-4 text-[#1F5EFF]" />
                <span>Executive Case Crux</span>
              </div>
              <p className="leading-relaxed text-slate-600">
                ICICI Bank approved a <strong>70% total debt waiver</strong> (₹3.5 Lakhs written off) on an inflated ₹5 Lakh credit card claim, settling the full account for ₹1.5 Lakhs with a verified ₹0 No Dues Certificate.
              </p>
            </div>
          </aside>

          {/* Middle Column: Main Body Content */}
          <main className="min-w-0 blog-content">
            
            {/* Section 1: The ₹5 Lakh Crisis & MAD Trap */}
            <section id="case-background-mad-trap" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                1. The ₹5 Lakh Trap: Borrower Profile, Minimum Amount Due &amp; Compounding Genesis
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                In March 2024, Siddharth Menon, a 32-year-old marketing manager based in Pune, was confronted with an acute domestic emergency when his father required immediate, uncovered cardiac surgery. Lacking immediate liquidity, Siddharth utilized his ICICI Bank Rubyx Credit Card, which carried an approved credit limit of ₹2,50,000, incurring cumulative medical charges of ₹1,80,000. Under ordinary circumstances, Siddharth intended to pay off the entire balance across four consecutive salary cycles.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                However, in May 2024, his employer announced corporate salary cuts alongside delayed variable compensation. Unable to service the full ₹1,80,000 statement balance, Siddharth fell into the classic retail banking trap: paying only the monthly Minimum Amount Due (MAD), typically set at 5% of the outstanding balance. For fourteen consecutive months, Siddharth faithfully paid approximately ₹8,500 to ₹10,000 every billing cycle, remitting over ₹1,25,000 in cash to ICICI Bank.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                To his utter shock, by July 2025, his total statement balance had not decreased; instead, it had metastasized from ₹1,80,000 to ₹5,00,000. Due to annualized financing charges of 42%, monthly late payment penalties of ₹1,200 per cycle, over-limit fees, and mandatory 18% Goods and Services Tax (GST) compounded on every finance charge, his actual payments had done nothing to reduce the core principal. When Siddharth suffered temporary unemployment in late 2025 and defaulted entirely, the account crossed 90 days past due (DPD) and was classified as a Non-Performing Asset (NPA).
              </p>

              {/* Statutory Callout Box */}
              <div className="bg-amber-50/90 border-l-4 border-amber-500 rounded-r-2xl p-5 my-6">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-1">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>The Deceptive Nature of Credit Card Revolving Debt</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800/90 leading-relaxed">
                  Under standard credit card terms, the Minimum Amount Due is structured solely to keep the account active while maximizing interest capitalization. In an annualized 42% APR environment, paying only MAD guarantees that 90% to 95% of each payment services finance charges and taxes, leaving the underlying principal entirely intact while compounding accelerates exponentially.
                </p>
              </div>
            </section>

            {/* Section 2: Compounding Mathematics: APR & GST */}
            <section id="compounding-mathematics-apr-gst" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                2. The Mathematics of Ruin: 42% APR, Monthly Capitalization &amp; 18% GST Cascades
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                To appreciate how a modest ₹1.8 Lakh principal inflated into a crippling ₹5 Lakh institutional claim, one must examine the specific compounding mathematics embedded in Indian retail credit card contracts. Unlike standard personal loans that calculate simple reducing balance interest, credit card agreements utilize daily or monthly compound interest models under annualized percentage rates ranging from 42% to 45% (3.50% to 3.75% per month).
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                When a cardholder revolves a balance or misses a due date, the interest-free grace period (20 to 50 days) is instantly revoked retroactively for all transactions from the exact date of purchase. Finance charges are calculated using the formula:
              </p>

              {/* APR Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Credit Card Compound Interest &amp; Tax Formula</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  Finance Charge = [ (Outstanding Balance × 3.50% × 12 × Days) / 365 ] + 18% GST + Late Fees
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where unserviced interest and penal charges are capitalized directly into the principal at the end of each billing cycle, generating interest-on-interest compounded with an additional 18% statutory GST surcharge.
                </p>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4">
                The escalation of Siddharth&apos;s ledger over eighteen months illustrates this aggressive financial multiplication:
              </p>

              {/* 4-Sided Bordered Balance Escalation Table */}
              <div className="overflow-x-auto my-6">
                <table className="w-full text-left text-xs sm:text-sm border border-slate-300 rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900">
                      <th className="p-3 font-bold border-b border-r border-slate-300">Timeline Milestone</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Principal Base</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Compounded Interest (42% APR)</th>
                      <th className="p-3 font-bold border-b border-slate-300">Penalties, GST &amp; Total Claim</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">Month 1 (Initial Swipe)</td>
                      <td className="p-3 border-r border-slate-200">₹1,80,000</td>
                      <td className="p-3 border-r border-slate-200">₹0 (Grace Period)</td>
                      <td className="p-3 font-bold text-slate-900">₹1,80,000</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Month 6 (MAD Servicing)</td>
                      <td className="p-3 border-r border-slate-200">₹1,76,000</td>
                      <td className="p-3 border-r border-slate-200">₹44,100</td>
                      <td className="p-3 font-bold text-amber-700">₹2,32,400</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">Month 12 (Revolving Peak)</td>
                      <td className="p-3 border-r border-slate-200">₹1,74,000</td>
                      <td className="p-3 border-r border-slate-200">₹1,18,600</td>
                      <td className="p-3 font-bold text-orange-700">₹3,45,200</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Month 18 (NPA Default Claim)</td>
                      <td className="p-3 border-r border-slate-200">₹1,80,000</td>
                      <td className="p-3 border-r border-slate-200">₹2,15,000</td>
                      <td className="p-3 font-bold text-rose-700">₹5,00,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4">
                Consequently, out of the ₹5,00,000 claimed by ICICI Bank, a staggering ₹3,20,000 (64% of the total claim) consisted entirely of accumulated interest, late fees, and tax surcharges. Recognizing this distortion is the foundational cornerstone of our debt settlement negotiation strategy.
              </p>
            </section>

            {/* Section 3: ICICI Retail NPA Mechanics */}
            <section id="banking-accounting-npa-provisioning" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                3. Behind ICICI Bank&apos;s Retail Book: NPA Provisioning &amp; Balance Sheet Dynamics
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                To achieve an authentic 70% debt settlement discount, one must look beyond the collection agent&apos;s aggressive rhetoric and understand ICICI Bank&apos;s institutional accounting pressures under the <em>Reserve Bank of India (Prudential Norms on Income Recognition, Asset Classification and Provisioning) Directions</em>.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Unlike housing loans or secured vehicle loans, credit card debt is 100% unsecured. ICICI Bank possesses zero underlying mortgaged collateral or hypothecated property to seize or auction under the SARFAESI Act, 2002. Once an unsecured credit card account remains delinquent beyond 90 days, the bank is legally compelled by the RBI to classify it as a Non-Performing Asset (NPA) and lock up substantial capital from its operating profits to provision against potential default:
              </p>

              {/* 4-Sided Bordered Provisioning Table */}
              <div className="overflow-x-auto my-6">
                <table className="w-full text-left text-xs sm:text-sm border border-slate-300 rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900">
                      <th className="p-3 font-bold border-b border-r border-slate-300">Classification Category</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Days Past Due (DPD)</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Accounting Status</th>
                      <th className="p-3 font-bold border-b border-slate-300">Mandatory RBI Provision</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">SMA-0 to SMA-2</td>
                      <td className="p-3 border-r border-slate-200">1 – 89 Days</td>
                      <td className="p-3 border-r border-slate-200">Standard / Stressed</td>
                      <td className="p-3">0.40% – 5.00% General Provision</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">NPA Substandard</td>
                      <td className="p-3 border-r border-slate-200">90 – 365 Days</td>
                      <td className="p-3 border-r border-slate-200">Substandard Unsecured</td>
                      <td className="p-3 font-bold text-amber-700">25.00% Specific Provision</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">NPA Doubtful (D1/D2)</td>
                      <td className="p-3 border-r border-slate-200">12 – 36 Months</td>
                      <td className="p-3 border-r border-slate-200">Doubtful Unsecured</td>
                      <td className="p-3 font-bold text-orange-700">100.00% Provisioning</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Technical Write-Off (AUCA)</td>
                      <td className="p-3 border-r border-slate-200">24+ Months</td>
                      <td className="p-3 border-r border-slate-200">Written-off Pool</td>
                      <td className="p-3 font-bold text-rose-700">100.00% Fully Expensed</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4">
                As Siddharth&apos;s default crossed 150 days, ICICI Bank had already stopped recognizing uncollected finance charges as real income under RBI income recognition rules and was forced to allocate regulatory capital against the asset. For ICICI&apos;s Stressed Assets Resolution Branch (SARB), recovering ₹1.5 Lakhs of clean, liquid cash represents an immediate balance-sheet gain and an instant release of locked provisioning back into operating profitability.
              </p>
            </section>

            {/* Section 4: Hardship Audit & NPV Formula */}
            <section id="hardship-audit-npv-valuation" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                4. The Hardship Resolution Dossier &amp; Net Present Value (NPV) Valuation Model
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Commercial banks do not approve substantial debt haircuts on arbitrary appeals. Under ICICI Bank&apos;s Board-approved Compromise Settlement Policy, discounts are sanctioned solely when empirical evidence demonstrates genuine insolvency rather than willful default.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                SettleLoans conducted a thorough forensic review of Siddharth&apos;s financial standing and constructed an airtight <strong>Hardship Resolution Dossier</strong> comprising five verifiable evidential pillars:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                First, certified hospital billing records, surgical invoices, and diagnostic summaries confirming the involuntary medical emergency that triggered the initial debt. Second, official corporate separation letters and 12-month bank account statements establishing the sudden cessation of regular salary credits. Third, an audited household cash-flow statement detailing basic subsistence expenses for dependents. Fourth, comprehensive credit bureau reports confirming that Siddharth had not availed fresh credit facilities elsewhere during the default phase. Fifth, an affidavit of non-ownership of unencumbered liquid investments or real estate properties.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                With this evidentiary backing, SettleLoans modeled the recovery economics using ICICI Bank&apos;s internal <strong>Net Present Value (NPV) Recovery Benchmark</strong>:
              </p>

              {/* NPV Benchmark Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Scale className="w-4 h-4" />
                  <span>Stressed Asset Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Settlement = Immediate OTS Cash Inflow &gt; Present Value(Litigation Recovery - Legal Costs - Time Delay)
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Pursuing civil litigation against an individual with zero attachable assets yields an estimated recovery NPV under ₹1.1 Lakhs after accounting for 3–5 years of court friction, advocate retainers, and execution hurdles.
                </p>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4">
                Our legal team demonstrated to the ICICI Zonal Credit Committee that an immediate, guaranteed One-Time Settlement of ₹1,50,000 provided superior financial value to the bank compared to years of costly, uncertain court proceedings.
              </p>
            </section>

            {/* Section 5: Infographic Resolution Blueprint */}
            <div id="infographic-resolution-blueprint" className="my-8 scroll-mt-24">
              <div className="bg-white border-2 border-blue-200 rounded-3xl overflow-hidden shadow-lg text-slate-800">
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
                        ICICI Credit Card Settlement: ₹5L to ₹1.5L Case Study
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/case-study-icici-credit-card-settlement.jpg"
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
                      src="/images/infographics/case-study-icici-credit-card-settlement.jpg"
                      alt="ICICI Credit Card Settlement Case Study ₹5L to ₹1.5L Infographic"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Takeaway:</strong> Isolating compound interest charges and negotiating directly with ICICI SARB delivered a binding 70% debt reduction.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Section 6: Anti-Harassment & Legal Shield */}
            <section id="recovery-containment-legal-defense" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                6. Cease-and-Desist Defense: Neutralizing Collection Harassment &amp; Legal Notices
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Prior to seeking legal counsel, Siddharth faced unrelenting coercion from third-party recovery agencies outsourced by ICICI Bank. Tele-callers placed up to thirty threatening calls daily, contacted his aged parents, and threatened workplace confrontations. In addition, ICICI Bank&apos;s legal panel issued a statutory demand notice under <strong>Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA)</strong> alleging quasi-criminal liability for an electronic mandate dishonour, alongside a notice under <strong>Section 138 of the Negotiable Instruments Act, 1881</strong>.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                SettleLoans immediately enacted a dual-pronged legal protection protocol:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                First, our legal team served an exhaustive <strong>Cease-and-Desist Notice</strong> upon ICICI Bank&apos;s Principal Nodal Officer (PNO) and Chief Risk Officer, citing specific infractions under the <em>RBI Master Direction on Recovery Agents and Fair Practices Code (2022)</em>. The notice catalogued unpermitted calling hours, threats of physical confrontation, and unauthorized third-party disclosure of financial data. Within 48 hours of service, all third-party collection calls ceased completely, and the file was transferred to ICICI&apos;s internal legal conciliation cell.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Second, our advocates drafted and filed a formal legal reply to the Section 25 PSSA and Section 138 NI Act notices within the statutory 15-day timeline. The response highlighted the absence of fraudulent intent, documented involuntary medical distress, and formally expressed the borrower&apos;s readiness to execute a structured compromise settlement under RBI directives.
              </p>
            </section>

            {/* Section 7: Negotiating the ₹1.5L Settlement */}
            <section id="sarb-negotiation-haircut-breakdown" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                7. The Settlement Table: Negotiating the ₹1.5 Lakhs (70% Haircut) with ICICI SARB
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Negotiating an effective credit card settlement requires direct interaction with authorized institutional officers. Third-party collection agents and branch personnel lack the delegated financial authority under ICICI Bank&apos;s <em>Delegation of Financial Powers (DoFP)</em> matrix to waive core principal or compound finance charges.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                SettleLoans submitted the formal OTS application directly to the <strong>Stressed Assets Resolution Branch (SARB)</strong> and the Zonal Credit Committee at ICICI Bank. The negotiation proceeded across three structured conciliation rounds:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                In Round 1, ICICI SARB presented an initial demand of ₹3,85,000, proposing a partial waiver of late charges while preserving the majority of accrued interest. In Round 2, SettleLoans presented a granular forensic audit isolating the original ₹1,80,000 principal, backed by medical records and a definitive offer of ₹1,35,000 mobilized through family assistance. In Round 3, following risk committee evaluation of the NPV model, ICICI Bank issued a final compromise sanction of <strong>₹1,50,000</strong>, granting an overall <strong>70.0% total debt waiver</strong>.
              </p>

              {/* 4-Sided Bordered Settlement Accounting Table */}
              <div className="overflow-x-auto my-6">
                <table className="w-full text-left text-xs sm:text-sm border border-slate-300 rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900">
                      <th className="p-3 font-bold border-b border-r border-slate-300">Financial Ledger Component</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Claimed Bank Dues</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Approved Settlement Amount</th>
                      <th className="p-3 font-bold border-b border-slate-300">Total Waiver / Haircut</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">Core Principal Balance</td>
                      <td className="p-3 border-r border-slate-200">₹1,80,000</td>
                      <td className="p-3 font-bold text-emerald-700 border-r border-slate-200">₹1,50,000</td>
                      <td className="p-3 font-bold text-emerald-700">₹30,000 (16.7% Haircut)</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Compounded Finance Charges (42% APR)</td>
                      <td className="p-3 border-r border-slate-200">₹2,15,000</td>
                      <td className="p-3 border-r border-slate-200">₹0</td>
                      <td className="p-3 font-bold text-emerald-700">₹2,15,000 (100% Waived)</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">Late Payment &amp; Over-limit Penalties</td>
                      <td className="p-3 border-r border-slate-200">₹58,000</td>
                      <td className="p-3 border-r border-slate-200">₹0</td>
                      <td className="p-3 font-bold text-emerald-700">₹58,000 (100% Waived)</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">18% GST Surcharges &amp; Legal Charges</td>
                      <td className="p-3 border-r border-slate-200">₹47,000</td>
                      <td className="p-3 border-r border-slate-200">₹0</td>
                      <td className="p-3 font-bold text-emerald-700">₹47,000 (100% Waived)</td>
                    </tr>
                    <tr className="bg-blue-50/70 font-bold text-slate-900">
                      <td className="p-3 border-r border-slate-300">Total Outstanding Debt Claim</td>
                      <td className="p-3 text-rose-700 border-r border-slate-300">₹5,00,000</td>
                      <td className="p-3 text-[#1F5EFF] border-r border-slate-300">₹1,50,000 Payable</td>
                      <td className="p-3 text-emerald-700">₹3,50,000 Total Relief (70.0%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 8: Sanction Letter Audit Protocols */}
            <section id="sanction-letter-forensics-payment" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                8. Sanction Letter Forensics: 5 Mandatory Verification Checkpoints
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Before remitting any settlement funds, SettleLoans conducted a stringent forensic audit of the compromise letter issued by ICICI Bank. Making unverified payments based on verbal representations by collection agencies is the single largest cause of settlement disputes in India.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Our legal team verified five non-negotiable institutional checkpoints:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                First, the document was issued on official ICICI Bank Limited letterhead featuring corporate identification details, regional branch seal, and an authorized Assistant General Manager (AGM) signature and employee code. Second, the letter explicitly specified Siddharth&apos;s 16-digit credit card account number and declared ₹1,50,000 as the <em>full, final, and absolute settlement</em> of all claims. Third, it contained a clear debt extinguishment clause confirming that upon receipt of ₹1,50,000, all residual balances of ₹3,50,000 would be 100% written off. Fourth, the letter committed ICICI Bank to withdraw all pending legal notices under Section 25 PSSA and Section 138 NI Act within 30 days. Fifth, it established a 15-day payment window with zero deferred penalty clauses.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Payment was executed via direct NEFT transfer directly into Siddharth&apos;s specific ICICI Credit Card Account number, ensuring complete auditability and eliminating intermediary risk.
              </p>
            </section>

            {/* Section 9: ₹0 NDC & Credit Rehabilitation */}
            <section id="no-dues-certificate-cibil-trajectory" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                9. The ₹0 No Dues Certificate &amp; 24-Month CIBIL Score Reconstruction
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Under <strong>RBI Circular RBI/2023-24/60</strong> (<em>Release of Movable/Immovable Property Documents and Issue of No Dues Certificate on Repayment/Settlement of Personal Loans</em>), commercial banks must issue a formal No Dues Certificate (NDC) and update credit bureau records within 30 calendar days of settlement receipt.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                On Day 21 following the NEFT remittance, ICICI Bank issued the official stamped <strong>No Dues Certificate</strong>, confirming that the credit card account was permanently closed with a total outstanding balance of ₹0.00.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                As required by credit reporting standards, ICICI Bank updated TransUnion CIBIL, Experian, and Equifax with a &apos;Settled&apos; status and a ₹0 overdue balance. Siddharth&apos;s CIBIL score, which had fallen to 572 during default, stabilized at 620 upon closure.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                SettleLoans structured a tailored 24-month credit rehabilitation blueprint for Siddharth:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                First, opening a secured credit card backed by a ₹40,000 fixed deposit, strictly keeping monthly utilization under 20%. Second, setting automated payments for monthly utilities and mobile bills to maintain a 100% on-time track record. Third, refraining from fresh unsecured credit inquiries during the mandatory 12-month cooling window. Within 18 months, Siddharth successfully elevated his CIBIL score to 764, fully restoring his financial standing.
              </p>
            </section>

            {/* Section 10: Comparative Resolution Matrix */}
            <section id="ots-vs-restructuring-matrix" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                10. Comparative Resolution Matrix: Direct OTS vs. Restructuring vs. MAD Servicing
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                When confronting credit card debt distress, borrowers must evaluate the mathematical and legal realities of available resolution pathways in India:
              </p>

              {/* 4-Sided Bordered Comparative Matrix Table */}
              <div className="overflow-x-auto my-6">
                <table className="w-full text-left text-xs sm:text-sm border border-slate-300 rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900">
                      <th className="p-3 font-bold border-b border-r border-slate-300">Resolution Pathway</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Total Cash Outflow</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Waiver / Haircut Scope</th>
                      <th className="p-3 font-bold border-b border-slate-300">Legal Closure</th>
                      <th className="p-3 font-bold border-b border-slate-300">Time to Debt Freedom</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200 bg-blue-50/40">
                      <td className="p-3 font-bold text-[#1F5EFF] border-r border-slate-200">Direct SARB One-Time Settlement (OTS)</td>
                      <td className="p-3 font-bold text-emerald-700 border-r border-slate-200">₹1,50,000 (Lump Sum)</td>
                      <td className="p-3 font-bold text-emerald-700 border-r border-slate-200">70% Total Waiver</td>
                      <td className="p-3 font-semibold text-emerald-700 border-r border-slate-200">Permanent ₹0 NDC</td>
                      <td className="p-3 font-bold text-emerald-700">30 – 45 Days</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">Card EMI Restructuring / Conversion</td>
                      <td className="p-3 border-r border-slate-200">₹2,80,000 – ₹3,20,000</td>
                      <td className="p-3 border-r border-slate-200">0% Principal Waiver</td>
                      <td className="p-3 border-r border-slate-200">Active EMI Obligation</td>
                      <td className="p-3 text-slate-600">24 – 36 Months</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Paying Minimum Amount Due (MAD)</td>
                      <td className="p-3 text-rose-700 font-bold border-r border-slate-200">₹6,00,000+ (Endless)</td>
                      <td className="p-3 text-rose-700 border-r border-slate-200">0% (Compounding Loss)</td>
                      <td className="p-3 text-rose-700 border-r border-slate-200">No Closure (Debt Spiral)</td>
                      <td className="p-3 text-rose-700 font-bold">15 – 25 Years</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Contested Court Litigation</td>
                      <td className="p-3 border-r border-slate-200">Unpredictable + Legal Fees</td>
                      <td className="p-3 border-r border-slate-200">Subject to Judicial Decree</td>
                      <td className="p-3 border-r border-slate-200">Subject to Appeals</td>
                      <td className="p-3 text-amber-700">3 – 5 Years</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4">
                As proven in Siddharth&apos;s case study, executing an authentic One-Time Settlement directly with ICICI Bank&apos;s Stressed Assets Resolution Branch breaks the compound interest death spiral and achieves complete financial freedom at a fraction of the claimed liability.
              </p>
            </section>

            {/* Section 11: Company Section Placement */}
            <div id="company-resolution-section" className="my-10 scroll-mt-24">
              <CompanySection />
            </div>

            {/* Section 12: Interactive FAQ Accordion */}
            <section id="faqs" className="my-12 scroll-mt-24">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-50 border border-blue-200 text-[#1F5EFF] text-xs font-bold mb-3 tracking-wider uppercase">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Frequently Asked Questions</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                  Everything You Need to Know About ICICI Card Settlements
                </h2>
                <p className="text-sm text-slate-600 mt-2">
                  Clear, authoritative legal answers regarding ICICI Bank credit card settlements, compound interest waivers, recovery defense, and credit rehabilitation.
                </p>
              </div>

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

            {/* Regulatory & Institutional Sources Strip (5 Official Links) */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10 text-xs text-slate-700">
              <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Landmark className="w-4 h-4 text-[#1F5EFF]" />
                Official Statutory Authorities &amp; Regulatory Frameworks
              </h3>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Reserve Bank of India (RBI):</strong> Master Direction on Credit Card and Debit Card Issuance and Conduct Directions
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://rbi.org.in/scripts/BS_CircularIndexDisplay.aspx?Id=12513"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>RBI Master Direction:</strong> Guidelines on Fair Practices Code and Outsourcing of Financial Services / Recovery Agents
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.icicibank.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>ICICI Bank Limited:</strong> Grievance Redressal Policy &amp; Principal Nodal Officer (PNO) Escalation Matrix
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
                    <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Dispute Redressal Portal for Unfair Recovery &amp; Card Billing Disputes
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
                    <strong>National Legal Services Authority (NALSA):</strong> Legal Services Authorities Act, 1987 — National Lok Adalat Settlement Mechanism
                  </a>
                </li>
              </ul>
            </div>

            {/* Related Guides & Resources Strip (10 Topic Badges) */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#1F5EFF]" />
                Explore Related Credit Card &amp; Debt Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2.5">
                <Link
                  href="/how-to-settle-credit-card-debt"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  How to Settle Credit Card Debt
                </Link>
                <Link
                  href="/credit-card-settlement-above-1-lakh"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Credit Card Settlement Above 1 Lakh
                </Link>
                <Link
                  href="/credit-card-vs-personal-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Credit Card vs Personal Loan Settlement
                </Link>
                <Link
                  href="/icici-personal-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  ICICI Personal Loan Settlement
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Bank One-Time Settlement (OTS) Policy
                </Link>
                <Link
                  href="/what-is-haircut-in-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  What is Haircut in Loan Settlement
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Credit Card Settlement CIBIL Impact
                </Link>
                <Link
                  href="/recovery-agent-visiting-workplace-office"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Recovery Agent Workplace Rules
                </Link>
                <Link
                  href="/section-138-cheque-bounce-loan-default"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Section 138 &amp; Section 25 Defense
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  No Dues Certificate Guide
                </Link>
              </div>
            </div>
          </main>

          {/* Right Column: Sidebar Cards */}
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
                Ashish has structured over 1,200+ successful bank compromise settlements across ICICI Bank, HDFC, SBI, and Axis Bank. He specializes in credit card compound interest audits, SARB negotiations, and borrower legal protection under RBI directives.
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
                <span>ICICI Dispute Resolution</span>
              </div>
              <h3 className="text-xl font-black mb-3 leading-tight">
                Trapped in ICICI Credit Card Debt?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Halt collection harassment and interest compounding today. Let our seasoned advocates audit your unearned interest charges, draft your formal OTS proposal, and secure an official ICICI Bank settlement letter.
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
                    <strong>Direct Bank Negotiations:</strong> We bypass recovery tele-callers to negotiate directly with ICICI SARB and Zonal Credit Committees.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Shield:</strong> Prompt legal cease-and-desist notices to stop workplace harassment and unauthorized family contact under RBI rules.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Stamped Verification:</strong> Every settlement is validated through official ICICI letterhead sanctions before payment is remitted.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed ₹0 NDC:</strong> Full tracking until your formal No Dues Certificate is issued and credit bureaus reflect account closure.
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
