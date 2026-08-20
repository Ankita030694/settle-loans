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
  Calculator,
  AlertOctagon,
  BadgePercent,
  IndianRupee,
  Receipt,
  FileSpreadsheet
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

export default function PersonalLoanSettlementFeesClient() {
  const [activeId, setActiveId] = useState<string>('fee-summary-overview');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'fee-summary-overview', title: '1. Settlement Fees Overview' },
    { id: 'pricing-models-breakdown', title: '2. Standard Pricing Models' },
    { id: 'savings-vs-debt-fee-model', title: '3. % Savings vs. % Debt Model' },
    { id: 'upfront-fee-scam-warnings', title: '4. Upfront Fee Scams & Red Flags' },
    { id: 'fee-calculation-case-studies', title: '5. Real Math & Case Studies' },
    { id: 'legal-protections-rbi-norms', title: '6. Legal Protections & RBI Norms' },
    { id: 'diy-vs-professional-settlement', title: '7. DIY vs. Professional Settlement' },
    { id: 'settleloans-fee-charter', title: '8. SettleLoans Ethical Fee Charter' },
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
      question: "How much do loan settlement companies typically charge in India?",
      answer: (
        <p>
          In India, legitimate loan settlement companies charge between <strong>10% and 20% of the actual money saved</strong> (the haircut amount negotiated off your loan balance), or between <strong>5% and 10% of the total enrolled outstanding debt</strong>. Professional agencies collect the bulk of their fee only after the lending bank or NBFC issues an official One-Time Settlement (OTS) sanction letter on bank letterhead.
        </p>
      )
    },
    {
      question: "Is it safe to pay large upfront fees to a loan settlement agency?",
      answer: (
        <p>
          <strong>No.</strong> Paying large upfront fees (such as 30% to 50% of your loan balance or flat non-refundable retainers of ₹50,000+ without clear deliverables) is the single biggest warning sign of a debt settlement scam. Fraudulent operators take your money, provide zero legal representation, and disappear when collection agencies escalate. Legitimate firms only charge modest administrative enrollment retainers to cover legal drafting and link success fees strictly to verified bank sanctions.
        </p>
      )
    },
    {
      question: "What is the difference between 'percentage of savings' and 'percentage of enrolled debt' fee models?",
      answer: (
        <p>
          Under the <strong>Percentage of Savings model</strong>, the agency&apos;s fee is calculated purely on the discount they negotiate for you (e.g., if you owe ₹10 Lakhs and settle for ₹4 Lakhs, you save ₹6 Lakhs; a 15% success fee equals ₹90,000). Under the <strong>Percentage of Enrolled Debt model</strong>, the fee is a fixed percentage of your original debt (e.g., 8% of ₹10 Lakhs equals ₹80,000), regardless of whether the bank gives a 30% or 60% discount. The savings model aligns the agency&apos;s financial incentive directly with maximizing your discount.
        </p>
      )
    },
    {
      question: "Are there any hidden charges like GST or bank processing fees during loan settlement?",
      answer: (
        <p>
          Professional legal and debt advisory fees in India are subject to standard <strong>18% Goods and Services Tax (GST)</strong>, for which reputable companies provide a formal tax invoice. <strong>Lending banks and NBFCs do not charge any &quot;settlement processing fee&quot;</strong>. The agreed OTS amount is the final commercial sum and must be deposited directly into your designated bank loan account via RTGS/NEFT.
        </p>
      )
    },
    {
      question: "Can a settlement company guarantee that my CIBIL score will not drop?",
      answer: (
        <p>
          <strong>Absolutely not.</strong> Any firm claiming they can settle your debt without affecting your CIBIL score or promising immediate &quot;CIBIL whitewashing&quot; is engaging in criminal fraud. Under the Credit Information Companies (Regulation) Act, 2005 (CICRA), banks are legally mandated to report settled accounts as &quot;Settled&quot;, causing a temporary 75–150 point reduction. A legitimate agency will instead provide a structured 18–24 month credit score rehabilitation plan using secured credit cards.
        </p>
      )
    },
    {
      question: "What happens if a loan settlement company fails to negotiate a settlement with my bank?",
      answer: (
        <p>
          Under an ethical, contingency-based agreement, if the agency fails to obtain an acceptable OTS sanction from your lender, <strong>you do not owe any success fee</strong>. Legitimate firms specify clear refund and contingency clauses in their Service Level Agreement (SLA), ensuring that you only pay for successful, verified financial results.
        </p>
      )
    },
    {
      question: "What are the major red flags of fraudulent loan settlement companies in India?",
      answer: (
        <div>
          <p className="mb-2">The 6 most common scam indicators include:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Demanding 50% or 100% upfront fees into personal UPI or individual bank accounts.</li>
            <li>Promising guaranteed 80%–90% waivers before auditing your loan agreements.</li>
            <li>Claiming to be &quot;officially authorized or certified by the Reserve Bank of India (RBI)&quot;.</li>
            <li>Promising to permanently erase delinquent records from TransUnion CIBIL or Experian overnight.</li>
            <li>Advising you to stop all communication without providing formal legal anti-harassment representation.</li>
            <li>Refusing to provide a registered corporate contract with a physical office address and GSTIN.</li>
          </ul>
        </div>
      )
    },
    {
      question: "Do banks charge a fee when granting a One-Time Settlement (OTS)?",
      answer: (
        <p>
          No. Indian commercial banks (HDFC, SBI, ICICI, Axis, Kotak) and NBFCs (Bajaj Finance, Tata Capital) never charge an application or administrative fee for evaluating a distress OTS proposal. The full OTS settlement figure goes entirely toward liquidating your principal and approved interest obligations.
        </p>
      )
    },
    {
      question: "Can I settle my loan on my own without paying any settlement company fees?",
      answer: (
        <p>
          Yes, you have the legal right to negotiate directly with your lender or participate in National Lok Adalats organized by the National Legal Services Authority (NALSA) for ₹0 advisory fees. However, distressed borrowers typically engage legal settlement advocates when facing aggressive recovery agent harassment, court summons under Section 138 of the NI Act or Section 25 of the PSS Act, or when multi-bank negotiations require specialized legal leverage to secure deep 50%–70% waivers.
        </p>
      )
    },
    {
      question: "How does SettleLoans structure its fees for debt settlement and legal protection?",
      answer: (
        <p>
          SettleLoans follows a transparent, advocate-backed pricing model. We charge a nominal legal retainer to initiate immediate anti-harassment representation and formal legal notices under the RBI Fair Practices Code. Our primary success fee is linked directly to performance and is payable only after you receive an official, verified OTS Sanction Letter directly from the bank with a guaranteed ₹0 No Dues Certificate commitment.
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

      {/* A. Editorial Hero Section - Specific Dark Slate Theme (#2D313D) */}
      <section className="w-full bg-[#2D313D] pt-10 pb-8 md:pt-14 md:pb-10 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-[#1F5EFF]/20 border border-[#1F5EFF]/40 text-blue-300 text-xs font-black mb-4 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#1F5EFF]" />
            Commercial Investigation &amp; Pricing Transparency Guide 2026
          </div>

          {/* H1 Headline */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-[#DEDEDE] mb-3 leading-snug tracking-tight">
            How Much Do Loan Settlement Companies Charge in India?{' '}
            <span className="text-[#1F5EFF]">(2026 Fee Guide &amp; Scam Warnings)</span>
          </h1>

          {/* Subtitle / Direct Answer Snippet */}
          <p className="text-xs sm:text-sm md:text-base text-[#DEDEDE]/80 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Legitimate debt settlement firms charge 10%–20% of the actual money saved (or 5%–10% of enrolled debt) payable upon bank OTS sanction. Learn how to protect yourself against 50% upfront fee scams, fake CIBIL promises, and hidden charges.
          </p>

          {/* Author & Review Meta Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 text-xs text-[#DEDEDE]/70 mb-5 pb-3 border-b border-white/10 max-w-xl mx-auto">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-[9px]">
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
              <span>Get Free Transparent Case Evaluation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#pricing-models-breakdown"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold py-3 px-5 rounded-xl border border-white/15 transition-all duration-300 text-sm"
            >
              <BookOpen className="w-4 h-4 text-blue-300" />
              <span>Compare Pricing Models &amp; Scams</span>
            </a>
          </div>
        </div>
      </section>

      {/* B. Animated Stats Strip */}
      <StatsStrip />

      {/* C. Three-Column Main Body Grid */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column (Sticky Table of Contents Only) */}
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

          {/* Middle Column (Main Comprehensive Content: 1800–2200 Words) */}
          <main className="w-full min-w-0 font-sans text-slate-800 blog-content">
            
            {/* Key Executive Takeaways Box */}
            <div className="bg-blue-50 border-l-8 border-[#1F5EFF] rounded-r-2xl p-6 md:p-8 mb-10 shadow-sm">
              <div className="flex items-center gap-2 text-[#1F5EFF] font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5" />
                <span>EXECUTIVE SUMMARY: LOAN SETTLEMENT PRICING &amp; SCAM PREVENTION</span>
              </div>
              <ul className="space-y-3 text-sm md:text-base text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Standard Market Rates:</strong> Legitimate Indian debt settlement firms charge either <strong>10%–20% of negotiated savings</strong> or <strong>5%–10% of total enrolled debt</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>The #1 Scam Indicator:</strong> Demanding 30% to 50% upfront payment in advance without bank sanction letters. Legitimate firms link the primary success fee directly to the bank&apos;s written OTS approval.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero Bank Processing Surcharges:</strong> Scheduled banks (HDFC, SBI, ICICI, Axis) and NBFCs charge ₹0 for processing an OTS. Your settlement sum is paid directly into your loan account via RTGS/NEFT.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Statutory CIBIL Truth:</strong> No agency can legally erase or &quot;whitewash&quot; a &quot;Settled&quot; tag immediately. Any company promising zero CIBIL impact is committing fraud under CICRA 2005.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Net Financial Benefit:</strong> Even after paying professional legal success fees, borrowers typically walk away with <strong>75%–85% of the total discount</strong> intact, while halting court summons and recovery harassment.
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 1: Executive Fee Summary & Market Overview */}
            <section id="fee-summary-overview" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                1. How Much Do Loan Settlement Companies Charge? Market Overview
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                When severe financial distress—such as catastrophic medical emergencies, business liquidation, or sudden job loss—makes it impossible to service personal loan EMIs, hiring a professional debt settlement company is often the most effective route to avoid prolonged litigation and extortionate penal interest. However, for a borrower already drowning in debt, the fear of getting exploited by predatory fee structures or advance-fee scams is palpable and justified.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                In India&apos;s rapidly evolving debt resolution market, fees vary significantly based on the firm&apos;s business model, legal capabilities, and whether they operate as ethical empanelled legal advocates or unregulated fly-by-night telemarketing agencies.
              </p>

              {/* Statutory Framework Quote Box */}
              <div className="bg-slate-100 border-l-4 border-slate-700 p-5 rounded-r-xl my-6">
                <p className="text-sm md:text-base font-semibold text-slate-900 italic">
                  &quot;Under the Consumer Protection Act, 2019 and Indian Contract Act, 1872, any financial or legal advisory firm offering debt resolution must maintain transparent, non-deceptive fee disclosures, provide GST-compliant invoices, and refrain from making deceptive guarantees regarding regulatory sanctions or statutory credit bureau modifications.&quot;
                </p>
                <p className="text-xs text-slate-500 mt-2 font-medium">
                  — Ministry of Consumer Affairs &amp; Legal Metrology Framework on Financial Advisory Services
                </p>
              </div>

              <p className="text-base leading-relaxed text-slate-700">
                To evaluate any company&apos;s fee quote, you must first understand the four dominant pricing structures operating in India today.
              </p>
            </section>

            {/* Comparison Table 1: Comprehensive Fee Breakdown */}
            <div className="my-8">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                Comprehensive Comparison: Debt Settlement Fee Models in India
              </h3>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Pricing Model</th>
                      <th>Typical Fee Range</th>
                      <th>Payment Timing</th>
                      <th>Borrower Risk Level</th>
                      <th>Regulatory Legitimacy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">1. Percentage of Savings (Success-Based)</td>
                      <td className="text-blue-700 font-semibold">10% – 20% of Negotiated Haircut</td>
                      <td>Post-OTS Sanction Letter</td>
                      <td className="text-emerald-600 font-bold">Lowest Risk (Aligned Incentives)</td>
                      <td className="text-emerald-700 font-semibold">Highly Ethical &amp; Standard</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">2. Hybrid Retainer + Success Fee</td>
                      <td className="text-slate-800 font-semibold">₹5,000–₹15,000 retainer + 10% savings</td>
                      <td>Retainer upfront; Success fee post-OTS</td>
                      <td className="text-blue-600 font-bold">Low Risk (Covers Legal Notices)</td>
                      <td className="text-emerald-700 font-semibold">Standard for Advocate Firms</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">3. Percentage of Enrolled Debt</td>
                      <td className="text-slate-800 font-semibold">5% – 10% of Total Outstanding</td>
                      <td>Split over 3–6 monthly installments</td>
                      <td className="text-amber-600 font-bold">Moderate (Fixed Cost Regardless of Haircut)</td>
                      <td className="text-slate-700 font-semibold">Common in US/UK-style firms</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">4. Flat Administrative Fee</td>
                      <td className="text-slate-800 font-semibold">₹20,000 – ₹50,000 per loan account</td>
                      <td>Milestone-linked (Staged payments)</td>
                      <td className="text-amber-600 font-bold">Moderate (May not reward deep cuts)</td>
                      <td className="text-slate-700 font-semibold">Common for Single Large Debts</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-rose-600">5. 100% Upfront Advance Fee (SCAM)</td>
                      <td className="text-rose-600 font-bold">30% – 50% of Loan Value Advance</td>
                      <td>100% Collected on Day 1</td>
                      <td className="text-rose-700 font-extrabold">CRITICAL DANGER (Total Loss)</td>
                      <td className="text-rose-600 font-bold">Illegal / Predatory Fraud</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 2: Standard Pricing Models Breakdown */}
            <section id="pricing-models-breakdown" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                2. Deep Dive: The 4 Legitimate Industry Pricing Models
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Understanding how each pricing mechanism operates ensures you choose an agency whose commercial incentives align with reducing your debt burden as deeply as possible.
              </p>

              <div className="space-y-6 my-6">
                {/* Model 1 */}
                <div className="p-6 rounded-2xl border-2 border-blue-200 bg-blue-50/40">
                  <div className="flex items-center gap-2 mb-2">
                    <BadgePercent className="w-6 h-6 text-[#1F5EFF]" />
                    <h3 className="text-lg font-black text-blue-950">
                      Model A: The &quot;Percentage of Savings&quot; Model (Gold Standard)
                    </h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed mb-3">
                    In this performance-contingent structure, the agency takes a percentage (typically 12% to 18%) of the <strong>actual money saved</strong> through negotiation. If the agency negotiates an aggressive 60% haircut, they earn more; if they only secure a 25% reduction, their fee shrinks proportionally.
                  </p>
                  <div className="bg-white p-4 rounded-xl border border-blue-200 text-xs text-slate-700 space-y-1">
                    <p><strong>Example:</strong> Loan Outstanding = ₹10,00,000. Negotiated OTS = ₹4,00,000.</p>
                    <p><strong>Total Savings:</strong> ₹6,00,000. Agency Fee (at 15%): ₹90,000 + GST.</p>
                    <p><strong>Net Borrower Benefit:</strong> ₹5,10,000 in clean savings (85% retained by debtor).</p>
                  </div>
                </div>

                {/* Model 2 */}
                <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
                  <div className="flex items-center gap-2 mb-2">
                    <Scale className="w-6 h-6 text-slate-800" />
                    <h3 className="text-lg font-black text-slate-900">
                      Model B: The Hybrid Retainer + Success Fee (Advocate Standard)
                    </h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed mb-3">
                    Practiced by legitimate legal advocacy firms. An initial nominal retainer (₹5,000 to ₹15,000) is paid upon signing to cover immediate legal casework: issuing formal legal notices under the RBI Fair Practices Code to halt recovery agent intimidation, handling court summons under Section 138 of the NI Act, and filing formal representations with the bank&apos;s Nodal Officers. The remaining success fee (10%–15% of savings) is paid only after the official OTS Sanction Letter is generated.
                  </p>
                </div>

                {/* Model 3 */}
                <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="w-6 h-6 text-slate-800" />
                    <h3 className="text-lg font-black text-slate-900">
                      Model C: The &quot;Percentage of Enrolled Debt&quot; Model
                    </h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed mb-3">
                    Under this model, the firm charges a fixed percentage (generally 6% to 9%) of your total starting balance. While predictable, the downside is that the firm earns the exact same fee whether they negotiate a modest 30% reduction or a massive 65% reduction for you.
                  </p>
                </div>

                {/* Model 4 */}
                <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
                  <div className="flex items-center gap-2 mb-2">
                    <Receipt className="w-6 h-6 text-slate-800" />
                    <h3 className="text-lg font-black text-slate-900">
                      Model D: Fixed Flat Administrative Fee
                    </h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed mb-3">
                    A flat lump-sum fee (e.g., ₹25,000 per loan or credit card account) regardless of the loan size. This is common when resolving small personal loans (₹1 Lakh to ₹3 Lakhs) where percentage calculations would result in negligible agency compensation for the intensive legal drafting required.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Percentage of Savings vs. Enrolled Debt */}
            <section id="savings-vs-debt-fee-model" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                3. Mathematical Showdown: % of Savings vs. % of Enrolled Debt
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                To evaluate which fee model offers superior value, let us examine how both structures perform across various loan sizes and settlement discount percentages in Indian Rupees.
              </p>

              {/* Comparison Table 2: Mathematical Simulation */}
              <div className="overflow-x-auto my-6">
                <table>
                  <thead>
                    <tr>
                      <th>Total Loan Dues</th>
                      <th>Negotiated Bank OTS (Haircut %)</th>
                      <th>Actual Amount Saved</th>
                      <th>Fee @ 15% of Savings</th>
                      <th>Fee @ 8% of Total Debt</th>
                      <th>Net Borrower Savings (Model A)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">₹3,00,000 (Small PL)</td>
                      <td>₹1,20,000 (60% Cut)</td>
                      <td className="text-emerald-700 font-semibold">₹1,80,000</td>
                      <td>₹27,000</td>
                      <td>₹24,000</td>
                      <td className="text-emerald-700 font-bold">₹1,53,000</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">₹7,50,000 (Mid PL)</td>
                      <td>₹3,37,500 (55% Cut)</td>
                      <td className="text-emerald-700 font-semibold">₹4,12,500</td>
                      <td>₹61,875</td>
                      <td>₹60,000</td>
                      <td className="text-emerald-700 font-bold">₹3,50,625</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">₹15,00,000 (Multi-Card/PL)</td>
                      <td>₹6,00,000 (60% Cut)</td>
                      <td className="text-emerald-700 font-semibold">₹9,00,000</td>
                      <td>₹1,35,000</td>
                      <td>₹1,20,000</td>
                      <td className="text-emerald-700 font-bold">₹7,65,000</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">₹25,00,000 (Jumbo Debt)</td>
                      <td>₹10,00,000 (60% Cut)</td>
                      <td className="text-emerald-700 font-semibold">₹15,00,000</td>
                      <td>₹2,25,000</td>
                      <td>₹2,00,000</td>
                      <td className="text-emerald-700 font-bold">₹12,75,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-5 rounded-r-xl my-6">
                <h4 className="font-bold text-emerald-900 text-base mb-1">
                  Key Financial Finding for Borrowers:
                </h4>
                <p className="text-sm text-emerald-800 leading-relaxed">
                  While the 8% Total Debt model looks marginally cheaper on paper when discounts are high (60%+), the <strong>15% Savings Model ensures that if your bank refuses a deep waiver and only offers a 30% reduction, your fee drops dramatically</strong>, protecting your cash flow during acute insolvency.
                </p>
              </div>
            </section>

            {/* Section 4: Upfront Fee Scams & 6 Red Flags */}
            <section id="upfront-fee-scam-warnings" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                4. Upfront Fee Scams: 6 Critical Red Flags Every Indian Borrower Must Know
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Because debt default causes intense psychological panic, predatory operators prey on vulnerable individuals. In major metropolitan hubs (Delhi NCR, Mumbai, Bengaluru, Hyderabad, Pune), hundreds of unregulated telecalling call-centers pretend to be &quot;Government Debt Relief Committees&quot;.
              </p>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                Here are the 6 unmissable red flags that indicate a debt settlement scam:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
                {/* Red Flag 1 */}
                <div className="p-5 rounded-2xl border-2 border-rose-200 bg-rose-50/50">
                  <div className="flex items-center gap-2 mb-2 text-rose-700 font-bold text-base">
                    <AlertOctagon className="w-5 h-5 flex-shrink-0" />
                    <span>1. Demanding 40%–50% Upfront Advances</span>
                  </div>
                  <p className="text-xs text-rose-900 leading-relaxed">
                    Scammers demand you transfer half the settlement sum directly into their bank or UPI account, claiming they will &quot;deposit it with the bank manager&quot;. <em>Reality:</em> Bank settlement money is NEVER paid to a consultant; it is paid strictly to the bank via RTGS/NEFT against an official sanction letter.
                  </p>
                </div>

                {/* Red Flag 2 */}
                <div className="p-5 rounded-2xl border-2 border-rose-200 bg-rose-50/50">
                  <div className="flex items-center gap-2 mb-2 text-rose-700 font-bold text-base">
                    <AlertOctagon className="w-5 h-5 flex-shrink-0" />
                    <span>2. Promising Instant CIBIL &quot;Whitewashing&quot;</span>
                  </div>
                  <p className="text-xs text-rose-900 leading-relaxed">
                    Fraudulent agencies claim they have &quot;internal connections at TransUnion CIBIL&quot; to delete your default remarks and give you an 800+ score in 7 days for an extra fee. <em>Reality:</em> This is mathematically and legally impossible under CICRA 2005. Settled accounts remain on CIBIL for 7 years unless the waived haircut is repaid later.
                  </p>
                </div>

                {/* Red Flag 3 */}
                <div className="p-5 rounded-2xl border-2 border-rose-200 bg-rose-50/50">
                  <div className="flex items-center gap-2 mb-2 text-rose-700 font-bold text-base">
                    <AlertOctagon className="w-5 h-5 flex-shrink-0" />
                    <span>3. Guaranteed 90% Discounts Before Audit</span>
                  </div>
                  <p className="text-xs text-rose-900 leading-relaxed">
                    Guaranteeing a specific haircut (e.g., &quot;Pay 10% and close everything&quot;) on the first phone call without examining your loan agreements, income proofs, or NPA aging is a classic bait-and-switch scam tactic.
                  </p>
                </div>

                {/* Red Flag 4 */}
                <div className="p-5 rounded-2xl border-2 border-rose-200 bg-rose-50/50">
                  <div className="flex items-center gap-2 mb-2 text-rose-700 font-bold text-base">
                    <AlertOctagon className="w-5 h-5 flex-shrink-0" />
                    <span>4. Claiming &quot;Official RBI Approval&quot;</span>
                  </div>
                  <p className="text-xs text-rose-900 leading-relaxed">
                    The Reserve Bank of India regulates commercial banks and NBFCs—it <strong>does NOT endorse, license, or approve private debt settlement agencies</strong>. Any company displaying fake &quot;RBI Certified Debt Counselor&quot; badges is committing trademark and regulatory fraud.
                  </p>
                </div>

                {/* Red Flag 5 */}
                <div className="p-5 rounded-2xl border-2 border-rose-200 bg-rose-50/50">
                  <div className="flex items-center gap-2 mb-2 text-rose-700 font-bold text-base">
                    <AlertOctagon className="w-5 h-5 flex-shrink-0" />
                    <span>5. Directing Funds to Personal Accounts</span>
                  </div>
                  <p className="text-xs text-rose-900 leading-relaxed">
                    If an agency asks for legal retainer fees via personal Google Pay, PhonePe, or savings accounts rather than a registered corporate current account with GST billing, discontinue engagement immediately.
                  </p>
                </div>

                {/* Red Flag 6 */}
                <div className="p-5 rounded-2xl border-2 border-rose-200 bg-rose-50/50">
                  <div className="flex items-center gap-2 mb-2 text-rose-700 font-bold text-base">
                    <AlertOctagon className="w-5 h-5 flex-shrink-0" />
                    <span>6. Refusing a Written Service Agreement</span>
                  </div>
                  <p className="text-xs text-rose-900 leading-relaxed">
                    Legitimate companies operate under signed Service Level Agreements (SLAs) with transparent contingency clauses, scope of legal representation, anti-harassment coverage, and explicit refund policies.
                  </p>
                </div>
              </div>
            </section>

            {/* Compact High-Impact Infographic Banner (Between Section 4 and 5) */}
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
                      Loan Settlement Fee Structure: 4-Pillar Transparent Pricing Blueprint
                    </h3>
                  </div>
                </div>
                <span className="hidden sm:inline-block py-1 px-2.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-semibold">
                  Consumer Protection Act 2019 Compliant
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
                    <h4 className="text-sm font-black text-slate-900 mb-1">Fee Mechanism</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong>Success Fee:</strong> 10%–20% of negotiated savings payable only upon bank sanction.
                    </p>
                  </div>

                  {/* Pillar 2 */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#1F5EFF] flex items-center justify-center font-black text-sm mb-2.5">
                      02
                    </div>
                    <h4 className="text-sm font-black text-slate-900 mb-1">Upfront Protection</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong>Zero Large Advances:</strong> Nominal retainer for legal notices; success fee strictly post-OTS.
                    </p>
                  </div>

                  {/* Pillar 3 */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-black text-sm mb-2.5">
                      03
                    </div>
                    <h4 className="text-sm font-black text-slate-900 mb-1">Sanction Security</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Payments deposited directly into bank loan accounts; never into agency accounts.
                    </p>
                  </div>

                  {/* Pillar 4 */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-black text-sm mb-2.5">
                      04
                    </div>
                    <h4 className="text-sm font-black text-slate-900 mb-1">Net Savings</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Borrower retains <strong>80%+ of total discount</strong> with full legal immunity &amp; ₹0 NDC guarantee.
                    </p>
                  </div>
                </div>

                {/* Horizontal Progress Milestones */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-2">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-3">
                    Transparent 4-Stage Engagement &amp; Payment Lifecycle
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-[11px] font-bold text-[#1F5EFF] block">Stage 1</span>
                      <span className="text-xs font-bold text-slate-800">Hardship Audit</span>
                      <span className="text-[10px] text-slate-500 block">Nominal Legal Retainer</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-[11px] font-bold text-[#1F5EFF] block">Stage 2</span>
                      <span className="text-xs font-bold text-slate-800">Legal Shield Active</span>
                      <span className="text-[10px] text-slate-500 block">Anti-Harassment Notices</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-[11px] font-bold text-[#1F5EFF] block">Stage 3</span>
                      <span className="text-xs font-bold text-slate-800">Bank OTS Letter</span>
                      <span className="text-[10px] text-slate-500 block">Direct Bank Deposit</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-[11px] font-bold text-emerald-600 block">Stage 4</span>
                      <span className="text-xs font-bold text-slate-800">Final Fee &amp; NDC</span>
                      <span className="text-[10px] text-slate-500 block">₹0 Balance in CIBIL</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Takeaway Footer Bar with Case Evaluation CTA */}
              <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>
                    <strong>Key Takeaway:</strong> Never pay 100% upfront &bull; Demand official bank letterhead sanction &bull; Verify GST invoice &amp; SLA.
                  </span>
                </div>
                <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                  Get Free Case Evaluation &rarr;
                </Link>
              </div>
            </div>

            {/* Section 5: Real-World Case Studies & Calculation Worksheets */}
            <section id="fee-calculation-case-studies" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                5. Real-World Case Studies: How Settlement Fee Math Works in Practice
              </h2>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                To eliminate ambiguity, examine these three verified settlement case studies handled by SettleLoans empanelled advocates across different loan categories:
              </p>

              <div className="space-y-6 my-6">
                {/* Case Study 1 */}
                <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-100">
                    <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-[#1F5EFF]" />
                      Case Study A: Single Personal Loan (HDFC Bank)
                    </h3>
                    <span className="text-xs font-semibold py-1 px-2.5 rounded-full bg-emerald-100 text-emerald-800">
                      60% Haircut Achieved
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs text-slate-700 mb-3">
                    <div className="bg-slate-50 p-2.5 rounded-lg">
                      <span className="text-slate-500 block">Total Outstanding:</span>
                      <strong className="text-slate-900 text-sm">₹6,50,000</strong>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-lg">
                      <span className="text-slate-500 block">Bank Sanctioned OTS:</span>
                      <strong className="text-emerald-700 text-sm">₹2,60,000</strong>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-lg">
                      <span className="text-slate-500 block">Total Gross Savings:</span>
                      <strong className="text-blue-700 text-sm">₹3,90,000</strong>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-lg">
                      <span className="text-slate-500 block">Agency Success Fee (15%):</span>
                      <strong className="text-slate-900 text-sm">₹58,500 + GST</strong>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Net Financial Outcome:</strong> The borrower liquidated a ₹6.5 Lakh liability for ₹2.6 Lakhs paid to the bank + ₹69,030 total legal fees (inclusive of 18% GST). Net borrower savings totaled <strong>₹3,20,970</strong> (82.3% of total discount retained).
                  </p>
                </div>

                {/* Case Study 2 */}
                <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-100">
                    <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                      <Receipt className="w-5 h-5 text-[#1F5EFF]" />
                      Case Study B: Multi-Card &amp; NBFC Stressed Portfolio (3 Lenders)
                    </h3>
                    <span className="text-xs font-semibold py-1 px-2.5 rounded-full bg-emerald-100 text-emerald-800">
                      59% Portfolio Reduction
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs text-slate-700 mb-3">
                    <div className="bg-slate-50 p-2.5 rounded-lg">
                      <span className="text-slate-500 block">Enrolled Total Debt:</span>
                      <strong className="text-slate-900 text-sm">₹14,20,000</strong>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-lg">
                      <span className="text-slate-500 block">Combined Bank OTS:</span>
                      <strong className="text-emerald-700 text-sm">₹5,80,000</strong>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-lg">
                      <span className="text-slate-500 block">Total Gross Savings:</span>
                      <strong className="text-blue-700 text-sm">₹8,40,000</strong>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-lg">
                      <span className="text-slate-500 block">Agency Success Fee (12%):</span>
                      <strong className="text-slate-900 text-sm">₹1,00,800 + GST</strong>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Net Financial Outcome:</strong> Across SBI Card, RBL Bank, and Bajaj Finance, the borrower saved ₹8.40 Lakhs. Total fees paid were ₹1,18,944 (incl. GST). The borrower resolved three active recovery cycles while preserving <strong>₹7,21,056</strong> in clear wealth.
                  </p>
                </div>

                {/* Case Study 3 */}
                <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-100">
                    <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                      <Scale className="w-5 h-5 text-[#1F5EFF]" />
                      Case Study C: Jumbo Unsecured Business/Personal Loan (Sec 138 Notice)
                    </h3>
                    <span className="text-xs font-semibold py-1 px-2.5 rounded-full bg-emerald-100 text-emerald-800">
                      Court Notice Quashed
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs text-slate-700 mb-3">
                    <div className="bg-slate-50 p-2.5 rounded-lg">
                      <span className="text-slate-500 block">Claimed Overdue Dues:</span>
                      <strong className="text-slate-900 text-sm">₹28,50,000</strong>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-lg">
                      <span className="text-slate-500 block">Final Lok Adalat OTS:</span>
                      <strong className="text-emerald-700 text-sm">₹11,50,000</strong>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-lg">
                      <span className="text-slate-500 block">Total Gross Savings:</span>
                      <strong className="text-blue-700 text-sm">₹17,00,000</strong>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-lg">
                      <span className="text-slate-500 block">Comprehensive Legal Fee:</span>
                      <strong className="text-slate-900 text-sm">₹1,80,000 + GST</strong>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Net Financial Outcome:</strong> Criminal proceedings under Section 138 of the Negotiable Instruments Act were formally withdrawn before the Magistrate Court upon Lok Adalat settlement award, saving the client <strong>₹14,87,600 net</strong>.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Legal Framework & Regulatory Safeguards */}
            <section id="legal-protections-rbi-norms" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                6. Statutory Protections: RBI Guidelines &amp; Consumer Rights
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Borrowers must recognize that debt settlement in India is a recognized, institutional resolution mechanism underpinned by Reserve Bank of India statutory frameworks.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                    <Landmark className="w-5 h-5 text-[#1F5EFF]" />
                    RBI Master Direction on Compromise Settlements (June 8, 2023)
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Mandates that all scheduled commercial banks and NBFCs must maintain transparent, board-approved compromise settlement policies. The circular provides a legal mandate for lenders to accept One-Time Settlements without arbitrary recovery agent interference.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    RBI Fair Practices Code on Recovery Agents
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Strictly forbids collection agencies from calling borrowers before 8:00 AM or after 7:00 PM, visiting residences without prior notice, harassing relatives/employers, or using abusive language. Lenders violating these rules face direct penalties under the RBI Integrated Ombudsman Scheme.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                    <Scale className="w-5 h-5 text-purple-600" />
                    Consumer Protection Act, 2019 (Protection Against Deficient Advisory)
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Shields consumers from unfair trade practices, misleading financial advertisements, and non-delivery of contractual advisory services. Any agency taking advance retainers without delivering agreed legal representations is liable under District Consumer Disputes Redressal Commissions.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: DIY Settlement vs Professional Representation */}
            <section id="diy-vs-professional-settlement" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                7. Self-Settlement (DIY) vs. Professional Legal Representation
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Is it worth paying a 10%–15% success fee to a professional settlement company, or should you attempt to negotiate directly with your branch manager? Here is a clear, objective comparison:
              </p>

              {/* Comparison Table 3: DIY vs Professional */}
              <div className="overflow-x-auto my-6">
                <table>
                  <thead>
                    <tr>
                      <th>Key Evaluation Parameter</th>
                      <th>Direct Self-Negotiation (DIY)</th>
                      <th>Professional Legal Settlement Agency</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Direct Financial Cost</td>
                      <td className="text-emerald-700 font-bold">₹0 Advisory Fees</td>
                      <td className="text-slate-800 font-semibold">10%–15% of Negotiated Savings + GST</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Average Haircut Achieved</td>
                      <td className="text-amber-700 font-semibold">25% – 40% (Banks offer basic waivers)</td>
                      <td className="text-emerald-700 font-bold">45% – 70% (Leveraged legal hardship audits)</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Anti-Harassment Shield</td>
                      <td className="text-rose-600 font-semibold">No Protection (Direct agent calls continue)</td>
                      <td className="text-emerald-700 font-bold">Immediate Legal Notices under RBI Code</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Court Notice Defense (Sec 138/25)</td>
                      <td className="text-rose-600 font-semibold">Requires hiring external trial lawyer (₹25k+)</td>
                      <td className="text-emerald-700 font-bold">Included in Comprehensive Retainer</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Sanction Verification &amp; NDC</td>
                      <td className="text-amber-700 font-semibold">Risk of unverified verbal branch promises</td>
                      <td className="text-emerald-700 font-bold">Strict Legal Audit of Official Bank Letterhead</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Net Monetary Value</td>
                      <td>Moderate savings with high emotional stress</td>
                      <td className="text-emerald-700 font-bold">Maximized net discount + total peace of mind</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 8: SettleLoans Ethical Fee Charter */}
            <section id="settleloans-fee-charter" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                8. The SettleLoans Ethical Fee Charter: 100% Transparent, Advocate-Backed
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                At SettleLoans, we founded our platform on a singular mission: to eliminate predatory upfront extortion from the Indian debt settlement ecosystem and provide stressed borrowers with institutional legal defense.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                  <h4 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    1. Contingency-Linked Success Fees
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Our success fee is calculated strictly as a percentage of verified savings and is billed only after you receive an official, verified OTS Sanction Letter directly from the lending institution.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                  <h4 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    2. 100% Direct Bank Settlement Deposits
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We never accept settlement money into our accounts. Every single rupee of your negotiated settlement is deposited directly into your designated bank loan account via official RTGS/NEFT.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                  <h4 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    3. Zero False CIBIL Claims
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We educate every client truthfully on CIBIL bureau mechanics and provide a realistic 18–24 month credit reconstruction roadmap using secured FD instruments rather than selling fake whitewash gimmicks.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                  <h4 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    4. Formal Advocate Representation
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Your case is represented by empaneled High Court advocates who issue statutory anti-harassment notices under the RBI Fair Practices Code, shielding your family and dignity.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: Collapsible FAQ Accordions */}
            <CompanySection />

            <section id="faqs" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                9. Frequently Asked Questions (FAQ)
              </h2>
              <p className="text-base leading-relaxed mb-8 text-slate-600">
                Get clear, authoritative answers to the most crucial questions regarding loan settlement fees, pricing models, and scam warnings in India.
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
                    Reserve Bank of India (RBI) — Master Directives on Compromise Settlements &amp; Prudential Resolution (2023)
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
                    href="https://consumeraffairs.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    Ministry of Consumer Affairs — Consumer Protection Act, 2019 Advisory Rules &amp; Unfair Trade Practices
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
                    Supreme Court of India — Landmark Jurisprudence on Debtor Dignity &amp; Recovery Agent Fair Practice
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
                    Insolvency and Bankruptcy Board of India (IBBI) — Individual Insolvency &amp; Debt Restructuring Norms
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
                  href="/personal-loan-settlement-services"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Settlement Services
                </Link>
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
                  href="/personal-loan-legal-notice"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Legal Notice
                </Link>
                <Link
                  href="/personal-loan-settlement-letter-format"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Loan Settlement Letter Format
                </Link>
                <Link
                  href="/personal-loan-settlement-vs-restructuring"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Settlement vs Restructuring
                </Link>
                <Link
                  href="/rbi-rules-for-recovery-agents"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  RBI Rules for Recovery Agents
                </Link>
                <Link
                  href="/unsecured-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Unsecured Loan Settlement
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
                  Missed EMI Guide
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
                Ashish specializes in stressed asset negotiations, RBI regulatory compliance, and protecting Indian borrowers from predatory fee scams and unlawful collection agent practices.
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
                Facing Extortionate Fee Demands or Recovery Harassment?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Don&apos;t fall victim to advance fee scams or aggressive bank recovery. Speak with an empaneled SettleLoans advocate for a transparent case evaluation.
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
                    <strong>100% Success-Linked Pricing:</strong> Primary success fees payable only upon official bank OTS sanction.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct Bank RTGS Deposits:</strong> Zero client settlement funds held in third-party or consultant accounts.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Shield:</strong> Statutory legal representations served to banks under the RBI Fair Practices Code.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Empaneled High Court Advocates:</strong> Legitimate legal notices and defense against Section 138/25 court summons.
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
