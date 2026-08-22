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

export default function CaseStudyKotakCreditCardSettlementClient() {
  const [activeId, setActiveId] = useState<string>('case-background-mad-trap');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'case-background-mad-trap', title: '1. The ₹4.2 Lakh Crisis & MAD Trap' },
    { id: 'compounding-mathematics-apr-gst', title: '2. The Anatomy of 45% APR & GST' },
    { id: 'banking-accounting-npa-provisioning', title: '3. Kotak Retail NPA Mechanics' },
    { id: 'hardship-audit-npv-valuation', title: '4. Hardship Audit & NPV Formula' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Resolution Blueprint' },
    { id: 'recovery-containment-legal-defense', title: '6. Anti-Harassment & Legal Shield' },
    { id: 'sarb-negotiation-haircut-breakdown', title: '7. Negotiating the ₹1.35L Settlement' },
    { id: 'sanction-letter-forensics-payment', title: '8. Sanction Letter Audit Protocols' },
    { id: 'no-dues-certificate-cibil-trajectory', title: '9. Bank Letterhead NDC & CIBIL' },
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
      question: "How was a Kotak Mahindra Bank credit card debt of ₹4.2 Lakhs settled for ₹1.35 Lakhs?",
      answer: (
        <p>
          The cardholder&apos;s ₹4,20,000 claimed balance comprised an original principal swipe of ₹1,55,000 and ₹2,65,000 in accumulated monthly finance charges (45% APR), late payment penalties, and 18% GST surcharges. SettleLoans constructed an evidence-backed Hardship Resolution Dossier, performed a forensic audit to isolate unearned interest, and negotiated directly with Kotak Mahindra Bank&apos;s Stressed Assets Resolution Branch (SARB) to secure an official One-Time Settlement (OTS) of <strong>₹1,35,000</strong>—delivering an overall <strong>68% debt reduction</strong>.
        </p>
      )
    },
    {
      question: "Why do Kotak Mahindra Bank credit card balances escalate so rapidly during default?",
      answer: (
        <p>
          Kotak credit cards carry finance charges of 3.50% to 3.75% per month (<strong>42% to 45% annual percentage rate or APR</strong>). When cardholders miss payments or pay only the Minimum Amount Due (MAD), interest-free grace periods are revoked retroactively, late payment fees (up to ₹1,200 per cycle) are levied, and <strong>18% GST</strong> is added to all finance fees. Unpaid charges are capitalized monthly into the balance, generating exponential compound interest.
        </p>
      )
    },
    {
      question: "Does paying Kotak's Minimum Amount Due (MAD) reduce the principal balance?",
      answer: (
        <p>
          <strong>No.</strong> The Minimum Amount Due is generally calculated as 5% of the total statement balance plus fees and taxes. In a 45% APR environment, virtually the entire MAD payment services monthly interest and GST, leaving the core principal untouched and trapping the borrower in decades of revolving debt.
        </p>
      )
    },
    {
      question: "How does Kotak Mahindra Bank calculate the minimum acceptable settlement amount?",
      answer: (
        <p>
          Kotak Mahindra Bank&apos;s Credit Committee evaluates settlement proposals using a <strong>Net Present Value (NPV) recovery formula</strong>. Because credit card debt is 100% unsecured with zero collateral to auction under the SARFAESI Act, once an account enters NPA status (90+ DPD) and regulatory provisioning is locked, the bank prefers immediate lump-sum cash recovery over 3 to 5 years of costly and uncertain civil litigation.
        </p>
      )
    },
    {
      question: "Can Kotak Mahindra Bank file police complaints or arrest cardholders for credit card default?",
      answer: (
        <p>
          <strong>No.</strong> Credit card default is purely a civil breach of contract under the Indian Contract Act, 1872. The police cannot arrest borrowers or register FIRs for genuine inability to pay. However, if automated NACH/e-mandates bounce, the bank may issue statutory notices under Section 25 of the Payment and Settlement Systems Act, 2007, or Section 138 of the Negotiable Instruments Act, 1881, which must be addressed through formal legal counsel.
        </p>
      )
    },
    {
      question: "How can borrowers stop aggressive Kotak recovery agent calls and home visits?",
      answer: (
        <p>
          Under the <strong>RBI Master Directions on Recovery Agents (2022)</strong> and the Fair Practices Code, recovery agents are strictly prohibited from calling before 8:00 AM or after 7:00 PM, contacting friends, relatives, or employers, using abusive language, or threatening borrowers. Borrowers can issue a formal legal cease-and-desist notice to Kotak Bank&apos;s Principal Nodal Officer (PNO) and escalate violations to the RBI Integrated Ombudsman portal (cms.rbi.org.in).
        </p>
      )
    },
    {
      question: "What must be verified in a Kotak Mahindra Bank OTS Sanction Letter before making payment?",
      answer: (
        <p>
          Borrowers must ensure: (1) The letter is on official Kotak Mahindra Bank letterhead with an authorized officer&apos;s signature, designation, and employee ID; (2) It explicitly states the credit card number and the exact negotiated settlement figure as full and final discharge; (3) It includes a clause confirming 100% waiver of residual balance, interest, and penalties; (4) It commits to issuing a No Dues Certificate (NDC) on bank letterhead and withdrawing legal notices; (5) Payment is remitted directly to the official credit card account number.
        </p>
      )
    },
    {
      question: "How does a Kotak credit card settlement affect CIBIL score and how can it be rebuilt?",
      answer: (
        <p>
          Following settlement, Kotak Bank updates credit bureaus with a <strong>&apos;Settled&apos;</strong> remark and an outstanding balance of <strong>₹0</strong>. While the score experiences an initial drop of 70 to 110 points, the compounding default accumulation stops permanently. Borrowers can rebuild their CIBIL score back to 750+ within 18 to 24 months by using a secured fixed-deposit credit card, keeping credit utilization below 25%, and maintaining a flawless repayment track record.
        </p>
      )
    },
    {
      question: "How long does Kotak Mahindra Bank take to issue the No Dues Certificate after settlement payment?",
      answer: (
        <p>
          Under <strong>RBI Circular RBI/2023-24/60</strong>, all regulated commercial banks including Kotak Mahindra Bank must issue the formal No Dues Certificate (NDC) / Loan Closure Certificate on bank letterhead and update credit bureau records within <strong>30 calendar days</strong> of receiving full settlement funds. Lenders failing to comply within this statutory timeframe are liable to pay compensation of <strong>₹5,000 per day of delay</strong> to the borrower.
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
            <span>Verified Settlement Case Study • Kotak Mahindra Bank</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            Kotak Credit Card Settlement Case Study: <span className="text-[#3b82f6] md:text-[#60a5fa]">₹4.2L Debt Settled for ₹1.35L</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            How a cardholder trapped in a ₹4,20,000 Kotak Mahindra Bank debt spiral—where ₹2.65 Lakhs comprised 45% APR compound interest and penalties on a ₹1.55L principal base—secured a binding 68% debt waiver and a formal No Dues Certificate on bank letterhead.
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
              <span>Settle Your Kotak Card Debt</span>
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
                Kotak Mahindra Bank approved a <strong>68% total debt waiver</strong> (₹2.85 Lakhs written off) on an inflated ₹4.2 Lakh credit card claim, settling the full account for ₹1.35 Lakhs with a verified ₹0 No Dues Certificate on bank letterhead.
              </p>
            </div>
          </aside>

          {/* Middle Column: Main Body Content */}
          <main className="min-w-0 blog-content">
            
            {/* Section 1: The ₹4.2 Lakh Crisis & MAD Trap */}
            <section id="case-background-mad-trap" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                1. The ₹4.2 Lakh Crisis: Borrower Profile, Minimum Amount Due &amp; Compounding Genesis
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                In January 2024, Rajesh Verma, a 34-year-old IT consultant residing in Bengaluru, experienced an acute cash-flow dislocation when his independent consulting contract was abruptly terminated amidst industry-wide software budget contractions. Facing simultaneous relocation expenses and emergency medical treatment for his mother, Rajesh utilized his Kotak Mahindra Bank League Platinum Credit Card, possessing an approved credit line of ₹2,00,000, incurring cumulative living and medical charges totaling ₹1,55,000.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Confident that new enterprise projects would materialize within a quarter, Rajesh adopted what appeared to be a manageable holding strategy: paying the monthly Minimum Amount Due (MAD) of roughly 5% of the statement balance. Over the course of fourteen consecutive billing cycles, Rajesh diligently remitted approximately ₹7,500 to ₹9,500 every month, transferring more than ₹1,10,000 in hard-earned liquidity directly into Kotak Mahindra Bank&apos;s card accounts.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Despite these continuous remittances, Rajesh received an alarming statement in May 2025 indicating that his total outstanding liability had surged from ₹1,55,000 to an astronomical ₹4,20,000. Unbeknownst to him, annualized finance charges of 45%, monthly late payment penalties of ₹1,200 per cycle, over-limit surcharges, and mandatory 18% Goods and Services Tax (GST) had compounded continuously. His monthly MAD payments had serviced solely the interest and tax layers, leaving the core principal untouched. When income ceased altogether and defaults crossed 90 days past due (DPD), Kotak classified the card account as a Non-Performing Asset (NPA).
              </p>

              {/* Statutory Callout Box */}
              <div className="bg-amber-50/90 border-l-4 border-amber-500 rounded-r-2xl p-5 my-6">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-1">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>The Structural Trap of Credit Card Revolving Debt</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800/90 leading-relaxed">
                  Under standard credit card agreements, paying the Minimum Amount Due is engineered to keep default reporting at bay while maximizing unearned interest capitalization. In an annualized 45% APR regime, over 92% of every rupee paid satisfies finance charges and statutory taxes, guaranteeing that the original principal remains intact while compounding interest accumulates exponentially.
                </p>
              </div>
            </section>

            {/* Section 2: Compounding Mathematics: APR & GST */}
            <section id="compounding-mathematics-apr-gst" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                2. The Mathematics of Ruin: 45% APR, Monthly Capitalization &amp; 18% GST Cascades
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                To understand how an initial principal of ₹1.55 Lakhs mutated into a crushing ₹4.2 Lakh demand, one must analyze the statutory compounding framework governing unsecured retail revolving credit in India. Unlike conventional personal loans where interest diminishes on an amortization schedule, credit cards apply monthly financing charges ranging from 3.50% to 3.75% per month (equivalent to 42% to 45% APR).
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                The instant a cardholder fails to settle the full statement balance by the due date, the interest-free grace period is voided retroactively from the date of purchase. Daily finance charges are computed under the following banking accounting formula:
              </p>

              {/* APR Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Kotak Credit Card Compounding Finance Formula</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  Monthly Charge = [ (Outstanding Balance × 3.75% × 12 × Days) / 365 ] + 18% GST + Late Penalties
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Unserviced monthly finance charges are capitalized directly into the principal ledger, causing subsequent interest to be charged upon prior interest, while an 18% GST surcharge is levied across every financial fee.
                </p>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4">
                The progressive inflation of Rajesh&apos;s card ledger over eighteen months highlights the compounding trap:
              </p>

              {/* 4-Sided Bordered Balance Escalation Table */}
              <div className="overflow-x-auto my-6">
                <table className="w-full text-left text-xs sm:text-sm border border-slate-300 rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900">
                      <th className="p-3 font-bold border-b border-r border-slate-300">Timeline Milestone</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Principal Base</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Compounded Interest (45% APR)</th>
                      <th className="p-3 font-bold border-b border-slate-300">Penalties, GST &amp; Total Claim</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">Month 1 (Initial Utilization)</td>
                      <td className="p-3 border-r border-slate-200">₹1,55,000</td>
                      <td className="p-3 border-r border-slate-200">₹0 (Grace Window)</td>
                      <td className="p-3 font-bold text-slate-900">₹1,55,000</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Month 6 (MAD Servicing Phase)</td>
                      <td className="p-3 border-r border-slate-200">₹1,51,000</td>
                      <td className="p-3 border-r border-slate-200">₹39,800</td>
                      <td className="p-3 font-bold text-amber-700">₹2,02,800</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">Month 12 (Revolving Peak)</td>
                      <td className="p-3 border-r border-slate-200">₹1,49,000</td>
                      <td className="p-3 border-r border-slate-200">₹1,06,500</td>
                      <td className="p-3 font-bold text-orange-700">₹2,98,500</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Month 18 (NPA Default Claim)</td>
                      <td className="p-3 border-r border-slate-200">₹1,55,000</td>
                      <td className="p-3 border-r border-slate-200">₹1,78,000</td>
                      <td className="p-3 font-bold text-rose-700">₹4,20,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4">
                Forensic accounting confirmed that out of Kotak Mahindra Bank&apos;s ₹4,20,000 aggregate claim, ₹2,65,000 (over 63% of the total amount) consisted purely of capitalized interest, penal charges, and tax levies. Demonstrating this structural inflation established the baseline for negotiating an institutional haircut.
              </p>
            </section>

            {/* Section 3: Kotak Retail NPA Mechanics */}
            <section id="banking-accounting-npa-provisioning" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                3. Behind Kotak Mahindra Bank&apos;s Retail Book: NPA Provisioning &amp; Balance Sheet Dynamics
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Achieving a binding compromise settlement requires leveraging the internal regulatory imperatives of the lender. Under the <em>Reserve Bank of India (Prudential Norms on Income Recognition, Asset Classification and Provisioning) Directions</em>, commercial banks cannot treat delinquent credit card accounts as permanent interest-bearing assets.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Credit card debt is completely unsecured. Kotak Mahindra Bank holds no underlying tangible collateral, mortgaged real estate, or pledged assets capable of summary attachment under the SARFAESI Act, 2002. As an account slips through delinquency buckets past 90 days, the bank is legally mandated to immobilize operating capital to create specific default provisions:
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
                When Rajesh&apos;s account crossed 140 DPD, Kotak Mahindra Bank had already ceased recognizing uncollected finance charges as real revenue under RBI income recognition norms. For Kotak&apos;s Stressed Assets Resolution Branch (SARB), accepting an immediate cash recovery of ₹1.35 Lakhs unlocked frozen provisioning, resulting in an immediate positive impact on the bank&apos;s quarterly net earnings.
              </p>
            </section>

            {/* Section 4: Hardship Audit & NPV Formula */}
            <section id="hardship-audit-npv-valuation" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                4. The Hardship Resolution Dossier &amp; Kotak Net Present Value (NPV) Valuation Model
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Commercial banks do not approve substantial debt waivers based on emotional appeals. Under Kotak Mahindra Bank&apos;s Board-approved Compromise Settlement Policy, debt haircuts are sanctioned strictly upon objective proof of involuntary insolvency rather than willful non-compliance.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                SettleLoans conducted an exhaustive forensic audit of Rajesh&apos;s financial profile and assembled an airtight <strong>Hardship Resolution Dossier</strong> grounded in five verifiable documentation pillars:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                First, certified consulting contract termination notices and corresponding bank account statements confirming the abrupt cessation of professional cash inflows. Second, verified medical records, diagnostic invoices, and pharmacy receipts establishing emergency dependent healthcare expenditures. Third, an audited household cash-flow statement demonstrating that current income barely serviced essential sustenance. Fourth, comprehensive credit bureau pull reports verifying that no fresh unsecured credit lines had been procured during default. Fifth, an affidavit confirming the non-existence of unencumbered liquid assets or attachable real properties.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Using this evidentiary dossier, SettleLoans framed the settlement proposition using Kotak Mahindra Bank&apos;s internal <strong>Net Present Value (NPV) Recovery Benchmark</strong>:
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
                  Pursuing civil litigation against an individual lacking attachable assets yields an estimated recovery NPV under ₹95,000 after factoring in 3–5 years of court friction, advocate retainers, and execution delays.
                </p>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4">
                Our advocates demonstrated to Kotak&apos;s Zonal Credit Committee that an immediate, guaranteed One-Time Settlement of ₹1,35,000 provided superior financial value to the bank compared to years of costly, uncertain court proceedings.
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
                        Kotak Mahindra Bank Credit Card Settlement: ₹4.2L to ₹1.35L Case Study
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/case-study-kotak-credit-card-settlement.jpg"
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
                      src="/images/infographics/case-study-kotak-credit-card-settlement.jpg"
                      alt="Kotak Mahindra Bank Credit Card Settlement Case Study ₹4.2L to ₹1.35L Infographic"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Takeaway:</strong> Isolating compound finance charges and negotiating directly with Kotak SARB delivered a binding 68% debt reduction.</span>
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
                6. Cease-and-Desist Defense: Neutralizing Kotak Collection Harassment &amp; Section 25 PSSA Notices
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Prior to retaining legal representation, Rajesh endured intense psychological pressure from third-party recovery agencies engaged by Kotak Mahindra Bank. Recovery callers subjected him to incessant calls outside statutory hours, contacted his former professional colleagues, and threatened physical home visits. Concurrently, Kotak&apos;s legal panel served a formal demand notice under <strong>Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA)</strong> regarding an automated NACH mandate dishonour, alongside a notice under <strong>Section 138 of the Negotiable Instruments Act, 1881</strong>.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                SettleLoans activated a comprehensive two-stage legal defense strategy:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                First, our legal team served a formal <strong>Cease-and-Desist Notice</strong> upon Kotak Mahindra Bank&apos;s Principal Nodal Officer (PNO) and Head of Retail Collections, citing explicit violations under the <em>RBI Master Direction on Recovery Agents and Fair Practices Code (2022)</em>. The notice documented unauthorized communication hours, verbal harassment, and third-party disclosure of confidential financial data. Within 48 hours of service, third-party recovery contact terminated completely, and the file was routed to Kotak&apos;s internal legal conciliation team.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Second, our advocates issued a robust legal reply to the Section 25 PSSA and Section 138 NI Act notices within the statutory 15-day window. The reply established the absence of fraudulent intent, substantiated involuntary medical hardship, and formally recorded the borrower&apos;s willingness to enter structured compromise negotiations under RBI guidelines.
              </p>
            </section>

            {/* Section 7: Negotiating the ₹1.35L Settlement */}
            <section id="sarb-negotiation-haircut-breakdown" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                7. The Settlement Table: Negotiating the ₹1.35 Lakhs (68% Haircut) with Kotak SARB
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Securing a genuine institutional debt settlement requires engaging exclusively with authorized decision-makers. Tele-callers and outsourced collection executives operate on recovery commissions and possess zero authority under Kotak Mahindra Bank&apos;s <em>Delegation of Financial Powers (DoFP)</em> framework to waive core principal or compound finance charges.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                SettleLoans submitted the formal compromise petition directly to the <strong>Stressed Assets Resolution Branch (SARB)</strong> and the Zonal Credit Committee of Kotak Mahindra Bank. The negotiation proceeded across three structured conciliation rounds:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                In Round 1, Kotak SARB proposed a minor waiver of late charges, demanding ₹3,30,000 while maintaining the bulk of capitalized interest. In Round 2, SettleLoans presented the forensic audit isolating the original ₹1,55,000 principal, backed by medical records and a definitive settlement offer of ₹1,20,000 gathered via family assistance. In Round 3, following risk committee evaluation of the NPV model, Kotak issued a final compromise sanction of <strong>₹1,35,000</strong>, delivering an overall <strong>67.9% (68%) total debt waiver</strong>.
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
                      <td className="p-3 border-r border-slate-200">₹1,55,000</td>
                      <td className="p-3 font-bold text-emerald-700 border-r border-slate-200">₹1,35,000</td>
                      <td className="p-3 font-bold text-emerald-700">₹20,000 (12.9% Haircut)</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Compounded Finance Charges (45% APR)</td>
                      <td className="p-3 border-r border-slate-200">₹1,78,000</td>
                      <td className="p-3 border-r border-slate-200">₹0</td>
                      <td className="p-3 font-bold text-emerald-700">₹1,78,000 (100% Waived)</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">Late Payment &amp; Over-limit Penalties</td>
                      <td className="p-3 border-r border-slate-200">₹49,000</td>
                      <td className="p-3 border-r border-slate-200">₹0</td>
                      <td className="p-3 font-bold text-emerald-700">₹49,000 (100% Waived)</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">18% GST Surcharges &amp; Legal Charges</td>
                      <td className="p-3 border-r border-slate-200">₹38,000</td>
                      <td className="p-3 border-r border-slate-200">₹0</td>
                      <td className="p-3 font-bold text-emerald-700">₹38,000 (100% Waived)</td>
                    </tr>
                    <tr className="bg-blue-50/70 font-bold text-slate-900">
                      <td className="p-3 border-r border-slate-300">Total Outstanding Debt Claim</td>
                      <td className="p-3 text-rose-700 border-r border-slate-300">₹4,20,000</td>
                      <td className="p-3 text-[#1F5EFF] border-r border-slate-300">₹1,35,000 Payable</td>
                      <td className="p-3 text-emerald-700">₹2,85,000 Total Relief (67.9%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 8: Sanction Letter Audit Protocols */}
            <section id="sanction-letter-forensics-payment" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                8. Kotak Sanction Letter Forensics: 5 Mandatory Verification Checkpoints
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Prior to disbursing any funds, SettleLoans conducted a stringent verification of the compromise sanction document issued by Kotak Mahindra Bank. Transferring funds based on unofficial emails or verbal assurances from collection agencies represents the leading cause of failed debt settlements in India.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Our legal team audited five essential institutional criteria:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                First, the document was issued on official Kotak Mahindra Bank Limited letterhead, bearing the registered corporate logo, branch stamp, and authorized officer signature with employee designation code. Second, the letter explicitly specified Rajesh&apos;s 16-digit credit card number and confirmed ₹1,35,000 as the <em>full, final, and absolute settlement</em> of all claims. Third, it incorporated an explicit debt extinguishment clause stating that upon receipt of ₹1,35,000, all residual claims of ₹2,85,000 would be 100% written off. Fourth, the letter committed Kotak to withdraw all pending legal notices under Section 25 PSSA and Section 138 NI Act within 30 days. Fifth, it established a 15-day settlement window without default penalty clauses.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Settlement funds were remitted via direct NEFT directly into Rajesh&apos;s official Kotak Credit Card Account number, guaranteeing complete auditability and eliminating intermediary risk.
              </p>
            </section>

            {/* Section 9: Bank Letterhead NDC & CIBIL */}
            <section id="no-dues-certificate-cibil-trajectory" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                9. The Official Kotak Bank Letterhead No Dues Certificate &amp; 24-Month CIBIL Reconstruction
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Under <strong>RBI Circular RBI/2023-24/60</strong> (<em>Release of Movable/Immovable Property Documents and Issue of No Dues Certificate on Repayment/Settlement of Personal Loans</em>), commercial banks are legally obligated to issue a formal No Dues Certificate (NDC) on bank letterhead and update credit bureau records within 30 calendar days of settlement receipt.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                On Day 22 following the NEFT transfer, Kotak Mahindra Bank issued the official stamped <strong>No Dues Certificate on bank letterhead</strong>, confirming that the credit card account was permanently closed with a total outstanding balance of ₹0.00.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Pursuant to statutory credit reporting regulations, Kotak updated TransUnion CIBIL, Experian, and CRIF High Mark with a &apos;Settled&apos; status and a ₹0 overdue balance. Rajesh&apos;s CIBIL score, which had plummeted to 568 during delinquency, stabilized at 615 upon official closure.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                SettleLoans designed a structured 24-month credit rehabilitation roadmap for Rajesh:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                First, procuring a secured credit card backed by a ₹35,000 fixed deposit, maintaining monthly credit utilization strictly under 20%. Second, establishing automated recurring debits for recurring utility bills to generate an uninterrupted record of on-time payments. Third, avoiding new unsecured loan applications during the mandatory 12-month cooling period. Within 18 months, Rajesh successfully rebuilt his CIBIL score to 758, completely restoring his institutional creditworthiness.
              </p>
            </section>

            {/* Section 10: Comparative Resolution Matrix */}
            <section id="ots-vs-restructuring-matrix" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                10. Comparative Resolution Matrix: Direct OTS vs. Restructuring vs. MAD Servicing
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                When confronting credit card debt distress, borrowers must evaluate the mathematical and legal outcomes of all available resolution pathways in India:
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
                      <td className="p-3 font-bold text-emerald-700 border-r border-slate-200">₹1,35,000 (Lump Sum)</td>
                      <td className="p-3 font-bold text-emerald-700 border-r border-slate-200">68% Total Waiver</td>
                      <td className="p-3 font-semibold text-emerald-700 border-r border-slate-200">Permanent ₹0 Bank NDC</td>
                      <td className="p-3 font-bold text-emerald-700">30 – 45 Days</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">Card EMI Restructuring / Conversion</td>
                      <td className="p-3 border-r border-slate-200">₹2,40,000 – ₹2,80,000</td>
                      <td className="p-3 border-r border-slate-200">0% Principal Waiver</td>
                      <td className="p-3 border-r border-slate-200">Active EMI Obligation</td>
                      <td className="p-3 text-slate-600">24 – 36 Months</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Paying Minimum Amount Due (MAD)</td>
                      <td className="p-3 text-rose-700 font-bold border-r border-slate-200">₹5,50,000+ (Endless)</td>
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
                As demonstrated in Rajesh&apos;s case study, executing an authentic One-Time Settlement directly with Kotak Mahindra Bank&apos;s Stressed Assets Resolution Branch halts the compound interest cycle and achieves complete financial freedom at a fraction of the claimed liability.
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
                  Everything You Need to Know About Kotak Card Settlements
                </h2>
                <p className="text-sm text-slate-600 mt-2">
                  Clear, authoritative legal answers regarding Kotak Mahindra Bank credit card settlements, compound interest waivers, recovery defense, and credit rehabilitation.
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
                    href="https://www.kotak.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Kotak Mahindra Bank Limited:</strong> Customer Grievance Redressal Policy &amp; Principal Nodal Officer (PNO) Framework
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
                  href="/case-study-icici-credit-card-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  ICICI Credit Card Settlement Case Study
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
                Ashish has structured over 1,200+ successful bank compromise settlements across Kotak Mahindra Bank, ICICI, HDFC, SBI, and Axis Bank. He specializes in credit card compound interest audits, SARB negotiations, and borrower legal protection under RBI directives.
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
                <span>Kotak Dispute Resolution</span>
              </div>
              <h3 className="text-xl font-black mb-3 leading-tight">
                Trapped in Kotak Credit Card Debt?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Halt collection harassment and interest compounding today. Let our seasoned advocates audit your unearned interest charges, draft your formal OTS proposal, and secure an official Kotak Bank settlement letter.
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
                    <strong>Direct Bank Negotiations:</strong> We bypass recovery tele-callers to negotiate directly with Kotak SARB and Zonal Credit Committees.
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
                    <strong>100% Stamped Verification:</strong> Every settlement is validated through official Kotak letterhead sanctions before payment is remitted.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed ₹0 Bank NDC:</strong> Full tracking until your formal No Dues Certificate on bank letterhead is issued and credit bureaus reflect closure.
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
