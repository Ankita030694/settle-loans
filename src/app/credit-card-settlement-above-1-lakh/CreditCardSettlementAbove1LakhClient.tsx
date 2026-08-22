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
  Calculator,
  Briefcase,
  CircleDollarSign,
  Zap,
  Split,
  PieChart,
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

export default function CreditCardSettlementAbove1LakhClient() {
  const [activeId, setActiveId] = useState<string>('compounding-mechanics');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'compounding-mechanics', title: '1. The ₹1L Threshold & Compounding' },
    { id: 'phantom-balance-breakdown', title: '2. Deconstructing Inflated Dues' },
    { id: 'haircut-depth-discounts', title: '3. Why Cards Yield 60%–70% Haircuts' },
    { id: 'bank-npa-provisioning', title: '4. Bank NPA & Loss Asset Physics' },
    { id: 'npv-settlement-math', title: '5. NPV & Bank OTS Math' },
    { id: 'legal-exposure-realities', title: '6. Legal Exposure: Civil vs Criminal' },
    { id: 'issuer-settlement-matrix', title: '7. Card Issuers Settlement Matrix' },
    { id: 'step-by-step-playbook', title: '8. Step-by-Step Settlement Playbook' },
    { id: 'cibil-score-rehabilitation', title: '9. CIBIL Bureau Impact & Recovery' },
    { id: 'institutional-legal-shield', title: '10. Legal Defense & Representation' },
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
      question: 'Why does a credit card balance above ₹1 Lakh inflate so quickly?',
      answer: (
        <p>
          Credit cards carry the highest borrowing cost in the retail banking sector, ranging from 42% to 48% annualized percentage rate (APR), charged on a monthly compounding basis (3.5%–4.0% per month). When a ₹1 Lakh balance goes unpaid, the bank applies late payment penalties (up to ₹1,300 per cycle), over-limit charges, 18% GST on all fees, and interest compounded daily on both principal and unpaid interest. Consequently, a ₹1 Lakh balance routinely compounds to ₹1.5 Lakhs within 6 to 9 months.
        </p>
      ),
    },
    {
      question: 'What percentage discount can I get when settling a credit card balance above ₹1 Lakh?',
      answer: (
        <p>
          Credit card settlements typically yield discounts between 60% and 70% off the total inflated statement balance, and between 35% and 55% off the original principal amount. Because 40% to 50% of the accumulated balance consists of phantom finance charges and penal fees, bank settlement committees have substantial discretionary room to write off these non-principal components during One-Time Settlement (OTS) negotiations.
        </p>
      ),
    },
    {
      question: 'Can a credit card company file a criminal case for an unpaid balance above ₹1 Lakh?',
      answer: (
        <p>
          No. Credit card default is purely a civil contractual dispute governed by the Indian Contract Act, 1872. Credit cards do not involve post-dated cheques or automated NACH mandates in most cases, meaning Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act do not apply unless a repayment cheque specifically bounced. Banks cannot file criminal charges for genuine financial default.
        </p>
      ),
    },
    {
      question: 'How does the bank calculate the minimum settlement amount for card balances above ₹1 Lakh?',
      answer: (
        <p>
          Banks evaluate settlement offers using a Net Present Value (NPV) recovery model combined with credit card provisioning mandates. Once an account passes 90 days past due (NPA classification) and 180 days (charge-off), the bank provisions 100% of the balance as a loss asset. The recovery team&apos;s objective is to recover raw disbursed principal (at 45%–55% value) immediately rather than incurring prolonged legal expenses with negligible civil recovery probability.
        </p>
      ),
    },
    {
      question: 'What is the difference between principal balance and inflated phantom charges on credit cards?',
      answer: (
        <p>
          The principal balance represents actual funds drawn or merchant transactions executed using the card. Inflated phantom charges encompass compounding finance charges (3.5%–4.0% monthly), late payment fees, annual membership charges, over-limit penalties, and 18% GST levied on all service charges. In a settlement negotiation, expert advocates strip away 100% of phantom charges and negotiate a haircut purely against the net principal.
        </p>
      ),
    },
    {
      question: 'How does credit card settlement above ₹1 Lakh affect my CIBIL score?',
      answer: (
        <p>
          Upon settlement, the bank reports the account to TransUnion CIBIL, Experian, CRIF High Mark, and Equifax with the remark &quot;Settled&quot; or &quot;Post (WO) Settled&quot;, resulting in an immediate credit score reduction of 75 to 140 points. However, settling eliminates ongoing 90+ DPD late payment reporting and reduces your credit utilization ratio (CUR) to zero, allowing you to begin rebuilding your credit score using secured credit cards.
        </p>
      ),
    },
    {
      question: 'What proof of hardship is required to negotiate a credit card settlement above ₹1 Lakh?',
      answer: (
        <p>
          Under RBI compromise settlement frameworks, borrowers must establish bona fide financial distress. Acceptable documentary proof includes bank statements demonstrating severe cash flow exhaustion, job termination or salary reduction letters, medical diagnosis summaries and hospitalization invoices, business loss documentation, or proof of family bereavement.
        </p>
      ),
    },
    {
      question: 'How do I ensure a credit card settlement is legitimate and legally binding?',
      answer: (
        <p>
          Never make payments based on verbal promises or WhatsApp messages from collection agents. A valid settlement requires an official One-Time Settlement (OTS) sanction letter issued on the bank&apos;s official letterhead, specifying the card number, compromised settlement amount, exact payment due dates, and an explicit clause confirming that upon payment, the account will be closed with zero outstanding liability and a No Dues Certificate (NDC) issued.
        </p>
      ),
    },
    {
      question: 'Can I convert a &quot;Settled&quot; credit card status to &quot;Closed&quot; in the credit bureau later?',
      answer: (
        <p>
          Yes. If your financial circumstances improve in subsequent years, you can approach the card issuer, pay the previously waived haircut amount (the difference between the total dues and settled sum), and obtain a Final No Dues Certificate. The bank is legally mandated under CICRA regulations to update the credit bureaus from &quot;Settled&quot; to &quot;Closed - Fully Paid&quot;.
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
            High-Value Credit Card Debt Resolution &amp; OTS Haircut Guide
          </div>

          {/* H1 Headline */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            Credit Card Settlement Above 1 Lakh:{' '}
            <span className="text-[#3b82f6] md:text-[#60a5fa]">Haircut Matrix, Compounding &amp; Legal Strategy</span>
          </h1>

          {/* Subtitle / Direct Answer Snippet */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Stuck with a credit card balance above ₹1 Lakh that rapidly ballooned to ₹1.65 Lakhs or more? Learn why revolving credit cards yield massive 60%–70% settlement discounts, how bank NPA write-offs work, and how legal OTS representation quashes collection harassment.
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
              <span>Reviewed by SettleLoans Banking Legal Council</span>
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
              <span>Evaluate My Credit Card Debt Free</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#compounding-mechanics"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold py-3 px-5 rounded-xl transition-all duration-300 text-sm"
            >
              <BookOpen className="w-4 h-4 text-blue-300" />
              <span>Explore Settlement Matrix</span>
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

              <div className="mt-4 pt-3 border-t border-slate-200">
                <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="flex items-center gap-1.5 text-[#1F5EFF] font-bold text-xs mb-1">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>Quick Crux</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-tight">
                    Balances over ₹1L carry up to 50% phantom interest. Legal OTS unlocks 60%–70% discounts on total statement dues.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Middle Column (Main Content - Maximum Readable Width) */}
          <main className="w-full min-w-0 font-sans text-slate-800 blog-content">
            {/* Section 1: The ₹1 Lakh Threshold & Violent Compounding Mechanics */}
            <section id="compounding-mechanics" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                1. The ₹1 Lakh Threshold: Violent Compounding Interest &amp; the Debt Spiral
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                In Indian retail banking, an unsecured credit card balance crossing the threshold of ₹1,00,000 represents a critical financial inflection point. Unlike amortized personal loans or home mortgages where interest is fixed against declining capital, credit cards function as revolving lines with annualized interest rates ranging between 42% and 48% APR. When converted to monthly finance charges, cardholders face a staggering 3.5% to 4.0% interest rate applied on a daily average balance calculation.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                The moment a cardholder defaults on their minimum amount due (MAD) for two consecutive billing cycles, the credit card issuer revokes the interest-free grace period retroactively on all transactions. Finance charges then begin compounding not only on the raw purchase principal, but also on previously accrued unpaid interest, late payment penalties of up to ₹1,300 per month, over-limit surcharges, and a mandatory 18% Goods and Services Tax (GST) applied to every single fee. This toxic mathematical mechanism transforms a ₹1,00,000 balance into ₹1,45,000 to ₹1,65,000 in under nine months of non-payment.
              </p>

              {/* Statutory Callout Box 1 */}
              <div className="my-6 p-5 rounded-2xl bg-amber-50/80 border border-amber-200 flex gap-4 items-start">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-amber-900 leading-relaxed">
                  <strong>The Minimum Payment Deception:</strong> Paying only the 5% Minimum Amount Due on a ₹1 Lakh card balance covers primarily interest, late fees, and GST, reducing your principal by less than 1% per cycle. At 42% APR, paying only the minimum amount would require over 14 years and more than ₹3.8 Lakhs in total cash to extinguish a ₹1 Lakh principal.
                </div>
              </div>
            </section>

            {/* Section 2: Deconstructing the Inflated Balance: Principal vs Phantom Charges */}
            <section id="phantom-balance-breakdown" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                2. Deconstructing the Inflated Balance: Disbursed Principal vs. Phantom Charges
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                To negotiate an effective One-Time Settlement (OTS), borrowers must recognize the fundamental accounting duality of credit card debt: the net principal balance versus accumulated phantom charges. The net principal represents the legitimate economic capital drawn by the cardholder for merchant swipes, e-commerce checkouts, or ATM cash advances. In contrast, phantom charges represent non-cash accounting accruals generated by the bank&apos;s automated billing software to penalize delinquency.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                When commercial banks issue statement demands exceeding ₹1.5 Lakhs on an original ₹1 Lakh credit line, between 35% and 50% of that total outstanding figure consists entirely of phantom interest, late payment fines, finance charges, and tax levies. During formal compromise negotiations conducted by legal counsel, the primary objective is to demand a forensic statement audit, strip away 100% of these phantom additions, and then apply a substantial compromise haircut directly against the net principal.
              </p>

              {/* Bordered Table 1: Anatomy of an Inflated ₹1 Lakh Credit Card Balance */}
              <div className="my-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="font-bold text-slate-900">Billing Component</th>
                      <th className="font-bold text-slate-900">Original / 1 Month Due</th>
                      <th className="font-bold text-slate-900">6–9 Months Default</th>
                      <th className="font-bold text-slate-900">OTS Settlement Target</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-medium text-slate-800">Net Disbursed Principal</td>
                      <td>₹1,00,000</td>
                      <td>₹1,00,000 (Base Capital)</td>
                      <td className="text-emerald-700 font-bold">₹35,000 – ₹45,000 (Negotiated)</td>
                    </tr>
                    <tr>
                      <td className="font-medium text-slate-800">Compounding Finance Charges (42% APR)</td>
                      <td>₹3,500</td>
                      <td>₹32,400 (Accrued)</td>
                      <td className="text-emerald-700 font-bold">₹0 (100% Waived)</td>
                    </tr>
                    <tr>
                      <td className="font-medium text-slate-800">Late Payment &amp; Over-Limit Penalties</td>
                      <td>₹1,200</td>
                      <td>₹11,700 (Accumulated)</td>
                      <td className="text-emerald-700 font-bold">₹0 (100% Waived)</td>
                    </tr>
                    <tr>
                      <td className="font-medium text-slate-800">GST on Charges &amp; Penalties (18%)</td>
                      <td>₹846</td>
                      <td>₹7,938 (Tax Levy)</td>
                      <td className="text-emerald-700 font-bold">₹0 (100% Waived)</td>
                    </tr>
                    <tr className="bg-slate-50 font-bold">
                      <td className="text-slate-900">Total Statement Balance</td>
                      <td className="text-slate-900">₹1,05,546</td>
                      <td className="text-red-700">₹1,52,038 (Inflated)</td>
                      <td className="text-[#1F5EFF]">₹35,000 – ₹45,000 (65%–77% Overall Cut)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Why Credit Cards Yield the Deepest Discounts (60%–70% Haircut Physics) */}
            <section id="haircut-depth-discounts" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                3. Why Credit Cards Yield the Deepest Discounts: The Physics of 60%–70% Haircuts
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                A common question asked by distressed borrowers is why credit card issuers agree to settlement discounts of 60% to 70% of total statement dues, whereas home loans or vehicle loans rarely offer any principal reduction. The answer lies in the unsecured nature of revolving retail credit and bank profitability models. Credit card issuers operate on extraordinarily high gross margins from transacting cardholders who pay full finance charges and interchange merchant fees. Consequently, card portfolios are structured from inception with an anticipated loss allowance of 4% to 8% across the entire book.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Because credit cards lack physical collateral (such as real estate or hypothecated vehicles), the bank cannot initiate asset seizure under the SARFAESI Act, 2002. Furthermore, unlike personal loans that use mandatory electronic NACH mandates or post-dated cheques, credit card onboarding rarely includes security cheques. This eliminates immediate criminal prosecution mechanisms under Section 138 of the Negotiable Instruments Act. Faced with zero physical security and prohibitive civil litigation expenses, card issuers readily accept deep compromise settlements to recover base capital quickly.
              </p>

              {/* Statutory Callout Box 2 */}
              <div className="my-6 p-5 rounded-2xl bg-blue-50/80 border border-blue-200 flex gap-4 items-start">
                <Scale className="w-6 h-6 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-950 leading-relaxed">
                  <strong>The Accounting Reality of High Discounts:</strong> When a bank settles a ₹1.6 Lakh inflated card balance for ₹45,000, it is not taking a 70% loss on real money. The bank originally disbursed ₹1,00,000, collected merchant transaction cuts, and wrote off accrued computer-generated interest. The actual economic loss to the bank is only ₹55,000 of principal, making OTS an attractive risk-mitigation tool for lenders.
                </div>
              </div>
            </section>

            {/* Section 4: Bank Provisioning, Write-Off Classifications & Loss Asset Dynamics */}
            <section id="bank-npa-provisioning" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                4. Bank Provisioning, Write-Off Classifications &amp; Loss Asset Dynamics
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                The willingness of a bank to grant deep settlement concessions is directly governed by Reserve Bank of India (RBI) Prudential Norms on Income Recognition, Asset Classification, and Provisioning pertaining to Advances. Understanding these regulatory milestones empowers borrowers with immense negotiation leverage at specific stages of delinquency.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                When a credit card account crosses 90 days past due (DPD), it is classified as a Non-Performing Asset (NPA - Substandard). Under RBI regulations, the bank must begin setting aside capital provisions from its operational profits to cushion the bad debt. By 180 to 365 days of default, the debt is classified as a Loss Asset, requiring a mandatory 100% provisioning buffer. At this stage, the bank has already absorbed the loss on its audited balance sheet. Any cash collected through a One-Time Settlement represents a direct write-back to the bank&apos;s profit-and-loss statement, motivating credit committees to approve aggressive OTS discounts.
              </p>

              {/* Bordered Table 2: NPA Classification Timeline vs Settlement Leverage */}
              <div className="my-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="font-bold text-slate-900">Delinquency Phase</th>
                      <th className="font-bold text-slate-900">Asset Classification</th>
                      <th className="font-bold text-slate-900">Bank Provisioning</th>
                      <th className="font-bold text-slate-900">Achievable Settlement Haircut</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-medium text-slate-800">1 – 89 Days Past Due</td>
                      <td>SMA-0 to SMA-2 (Special Mention)</td>
                      <td>0.4% – 5% Standard Provision</td>
                      <td>10% – 25% (Fee waivers only)</td>
                    </tr>
                    <tr>
                      <td className="font-medium text-slate-800">90 – 179 Days Past Due</td>
                      <td>Sub-Standard Asset (NPA Stage 1)</td>
                      <td>15% – 25% Mandatory Provision</td>
                      <td>35% – 50% on Total Outstanding</td>
                    </tr>
                    <tr>
                      <td className="font-medium text-slate-800">180 – 365 Days Past Due</td>
                      <td>Doubtful / Charge-Off Asset</td>
                      <td>50% – 100% Provisioned</td>
                      <td className="text-emerald-700 font-bold">55% – 70% on Total Outstanding</td>
                    </tr>
                    <tr>
                      <td className="font-medium text-slate-800">365+ Days (Assigned to ARC)</td>
                      <td>Loss Asset / Write-Off Book</td>
                      <td>100% Full Provisioning</td>
                      <td className="text-emerald-700 font-bold">65% – 75% on Total Outstanding</td>
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
                      Credit Card Settlement Above 1 Lakh Summary &amp; Process Overview
                    </h3>
                  </div>
                </div>
                <a
                  href="/images/infographics/credit-card-settlement-above-1-lakh.jpg"
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
                    src="/images/infographics/credit-card-settlement-above-1-lakh.jpg"
                    alt="Credit Card Settlement Above 1 Lakh Summary Infographic"
                    className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Quick Crux Footer Strip */}
              <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>
                    <strong>Key Takeaway:</strong> Credit cards above ₹1L qualify for 60%–70% OTS waivers once charged-off, resolving debt without civil litigation.
                  </span>
                </div>
                <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                  Get Free Case Evaluation &rarr;
                </Link>
              </div>
            </div>

            {/* Section 5: Net Present Value (NPV) & Bank OTS Recovery Math */}
            <section id="npv-settlement-math" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                5. Net Present Value (NPV) &amp; Bank Settlement Decision Modeling
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Bank credit committees do not accept settlement discounts out of charity; they make decisions based on rigorous mathematical risk modeling using Net Present Value (NPV) recovery formulas. When evaluating whether to accept an OTS proposal of ₹45,000 on an overdue balance of ₹1,50,000, the bank compares immediate liquid realization against the probabilistic future cash flow from outsourced collection agencies or protracted civil recovery suits.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                The institutional recovery formula is expressed as:
              </p>
              <div className="p-4 my-4 bg-slate-900 text-white rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
                NPV (Legal Recovery) = [Prob(Recovery) × Recoverable Amount] - [Legal Fees + Agency Retainers + Time Discounting Cost (r)]
              </div>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                For credit card balances between ₹1 Lakh and ₹5 Lakhs, filing a summary civil suit in a city civil court entails court fees, advocate drafting retainers, summons serving costs, and an average judicial delay of 4 to 7 years. Accounting for legal fees (₹25,000–₹45,000) and collection commission fees (15%–25%), the discounted recovery probability drops below 30%. Consequently, when an empaneled debt settlement advocate presents an upfront lump-sum OTS offer backed by documented hardship, the bank&apos;s risk matrix mathematically favors immediate settlement closure.
              </p>
            </section>

            {/* Section 6: Legal Exposure on Credit Card Default: Civil Reality vs Collection Myths */}
            <section id="legal-exposure-realities" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                6. Legal Exposure on Credit Card Defaults: Civil Reality vs. Collection Myths
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Distressed borrowers with card dues exceeding ₹1 Lakh are frequently subjected to unlawful threats from third-party recovery agents, claiming imminent police arrest, criminal non-bailable warrants, or immediate asset confiscation. It is vital to establish the precise legal framework governing credit card defaults in India under statutory law and judicial precedents.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Defaulting on an unsecured credit card is purely a civil contractual breach governed by the Indian Contract Act, 1872. The Supreme Court of India in landmark rulings (including <em>ICICI Bank v. Shanti Devi Sharma</em>) has unequivocally ruled that loan recovery must adhere strictly to the rule of law, and criminal intimidation by collection agents is an offense under Section 503 and 506 of the Indian Penal Code (IPC) / Bharatiya Nyaya Sanhita (BNS). Furthermore, the Debt Recovery Tribunal (DRT) has a statutory minimum jurisdiction threshold of ₹20 Lakhs under the RDBFI Act, meaning banks cannot drag a ₹1 Lakh to ₹5 Lakh cardholder to the DRT.
              </p>

              {/* Bordered Table 3: Legal Myth vs Reality for Card Defaults Above ₹1 Lakh */}
              <div className="my-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="font-bold text-slate-900">Recovery Agent Threat / Myth</th>
                      <th className="font-bold text-slate-900">Statutory Legal Reality</th>
                      <th className="font-bold text-slate-900">Legal Protection / Remedy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-medium text-slate-800">&quot;Police will arrest you at your home/office&quot;</td>
                      <td>Civil defaults carry zero criminal arrest powers under Indian law.</td>
                      <td>RBI Circular 2022 Anti-Harassment filing; Police complaint for extortion.</td>
                    </tr>
                    <tr>
                      <td className="font-medium text-slate-800">&quot;We have filed a Section 138 Cheque Bounce Case&quot;</td>
                      <td>Sec 138 applies only if physical signed cheques bounced, not on credit cards.</td>
                      <td>Demand certified copy of cheque; reply via advocate showing no cheque issued.</td>
                    </tr>
                    <tr>
                      <td className="font-medium text-slate-800">&quot;We will attach your ancestral property/salary&quot;</td>
                      <td>Unsecured debt cannot attach property without a formal Civil Court decree.</td>
                      <td>Civil courts require 3–5 years trial; banks prefer compromise OTS settlement.</td>
                    </tr>
                    <tr>
                      <td className="font-medium text-slate-800">&quot;Visiting friends, relatives, and workplace&quot;</td>
                      <td>Expressly banned under RBI Fair Practices Code; breach of privacy.</td>
                      <td>Immediate Cease &amp; Desist notice by SettleLoans advocate to bank compliance.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7: Major Indian Card Issuers: Settlement Matrix Above ₹1 Lakh */}
            <section id="issuer-settlement-matrix" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                7. Major Indian Card Issuers: Settlement Haircut Matrix Above ₹1 Lakh
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Different commercial banks and Non-Banking Financial Companies (NBFCs) in India operate distinct internal recovery committees and settlement grids. Understanding the historical compromise behavior of major card issuers enables strategic timing and optimal price discovery during settlement discussions.
              </p>

              {/* Bordered Table 4: Issuer-by-Issuer Settlement Benchmark Matrix */}
              <div className="my-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="font-bold text-slate-900">Card Issuer / Bank</th>
                      <th className="font-bold text-slate-900">Average Default DPD for OTS</th>
                      <th className="font-bold text-slate-900">Typical Haircut Range</th>
                      <th className="font-bold text-slate-900">Settlement Approval Authority</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-medium text-slate-800">HDFC Bank Credit Cards</td>
                      <td>120 – 180 Days</td>
                      <td className="text-emerald-700 font-bold">55% – 70% off Total Dues</td>
                      <td>Zonal Unsecured Credit Committee</td>
                    </tr>
                    <tr>
                      <td className="font-medium text-slate-800">SBI Card &amp; Payment Services</td>
                      <td>150 – 210 Days</td>
                      <td className="text-emerald-700 font-bold">60% – 75% off Total Dues</td>
                      <td>National Risk &amp; Settlement Panel</td>
                    </tr>
                    <tr>
                      <td className="font-medium text-slate-800">ICICI Bank Credit Cards</td>
                      <td>120 – 180 Days</td>
                      <td className="text-emerald-700 font-bold">50% – 68% off Total Dues</td>
                      <td>Regional Recovery Management Desk</td>
                    </tr>
                    <tr>
                      <td className="font-medium text-slate-800">Axis Bank Credit Cards</td>
                      <td>135 – 190 Days</td>
                      <td className="text-emerald-700 font-bold">55% – 70% off Total Dues</td>
                      <td>Special Collections &amp; Compromise Cell</td>
                    </tr>
                    <tr>
                      <td className="font-medium text-slate-800">Kotak Mahindra Bank Cards</td>
                      <td>150 – 210 Days</td>
                      <td className="text-emerald-700 font-bold">60% – 72% off Total Dues</td>
                      <td>Asset Resolution Operations Team</td>
                    </tr>
                    <tr>
                      <td className="font-medium text-slate-800">RBL Bank &amp; American Express</td>
                      <td>120 – 240 Days</td>
                      <td className="text-emerald-700 font-bold">50% – 65% off Total Dues</td>
                      <td>Senior Credit &amp; Recovery Directorate</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 8: Step-by-Step Strategic Playbook to Settle Credit Cards Above ₹1 Lakh */}
            <section id="step-by-step-playbook" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                8. Step-by-Step Strategic Playbook to Settle Credit Cards Above ₹1 Lakh
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Successfully executing a high-value credit card settlement requires methodical adherence to formal banking protocols. Attempting ad-hoc verbal negotiations with outsourced telecallers almost invariably leads to broken agreements where payments are swallowed as partial interest without closing the liability.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                The institutional five-stage resolution roadmap includes:
              </p>

              {/* Sequential Process List in Rich Paragraph Flow */}
              <div className="space-y-4 my-6">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white text-xs flex items-center justify-center font-bold">1</span>
                    Comprehensive Portfolio Audit &amp; Phantom Charge Separation
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Obtain detailed month-by-month card statements for the preceding 12 to 24 months. Segregate legitimate principal drawn from accumulated finance charges, late fees, annual membership dues, and GST surcharges to establish the true economic floor for negotiations.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white text-xs flex items-center justify-center font-bold">2</span>
                    Issuing Legal Cease-and-Desist &amp; Fair Practices Notice
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Serve formal legal notice to the bank&apos;s principal officer and recovery desk under the RBI Master Direction on Fair Practices Code. Direct all future communications to your appointed legal counsel, halting unauthorized phone calls and third-party residential intrusions.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white text-xs flex items-center justify-center font-bold">3</span>
                    Submitting Documented Hardship Dossier Under RBI Framework
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Submit an exhaustive financial hardship petition detailing involuntary job loss, business insolvency, medical emergency expenditure, or severe cash flow distress supported by income tax returns, salary reduction slips, and bank statement verification.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white text-xs flex items-center justify-center font-bold">4</span>
                    Direct NPA Committee Negotiation &amp; OTS Sanction Letter Verification
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Negotiate directly with the bank&apos;s internal credit settlement desk to secure a 60%–70% haircut. Ensure the formal compromise sanction letter is generated on the bank&apos;s official letterhead with clear terms, card number, settlement amount, and payment deadline.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white text-xs flex items-center justify-center font-bold">5</span>
                    Payment Execution &amp; ₹0 No Dues Certificate (NDC) Retrieval
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Execute settlement payment directly to the bank&apos;s designated card collection account via NEFT/RTGS before the validity deadline. Track and obtain the official Final No Dues Certificate (NDC) confirming zero outstanding liability across all records.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: CIBIL Bureau Reporting, Post-Settled Remarks & Score Recovery */}
            <section id="cibil-score-rehabilitation" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                9. CIBIL Bureau Reporting, Post-Settled Remarks &amp; Score Rehabilitation
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                A critical consideration when executing a credit card settlement above ₹1 Lakh is the impact on your credit bureau report across TransUnion CIBIL, Experian, CRIF High Mark, and Equifax. Under the Credit Information Companies (Regulation) Act, 2005 (CICRA), the bank is legally required to report the resolution status as &quot;Settled&quot; or &quot;Post (WO) Settled&quot; rather than &quot;Closed - Fully Paid&quot;.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Upon settlement, your CIBIL score will experience an immediate drop of 75 to 140 points, reflecting the compromise haircut. However, from a long-term financial health perspective, settlement is infinitely superior to perpetual delinquency. Settling terminates the ongoing accrual of 90+ DPD late payment markers each month and collapses your revolving Credit Utilization Ratio (CUR) from over 150% down to zero. By opening a secured fixed-deposit credit card 3 months post-settlement and maintaining disciplined repayment, borrowers consistently rebuild their CIBIL score to 750+ within 18 to 24 months. Furthermore, if your financial health improves, you retain the statutory right to pay the waived haircut later and convert the remark to &quot;Closed&quot;.
              </p>
            </section>

            {/* Section 10: Legal Representation & SettleLoans Institutional Shield */}
            <section id="institutional-legal-shield" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                10. Institutional Legal Defense &amp; SettleLoans Representation Framework
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Navigating aggressive recovery departments and complex NPA settlement committees alone often leads to anxiety, unfavorable settlement terms, or payment traps. SettleLoans provides a comprehensive, ethical legal defense and debt settlement platform designed to protect borrower dignity and secure the deepest permissible statutory discounts.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Our empaneled banking advocates step between you and the lenders, serving formal legal notices that instantly halt unauthorized phone calls and third-party visits. We audit your card statements to eliminate phantom interest, present an unassailable financial hardship dossier directly to senior credit risk officers, and secure genuine bank-issued OTS letters guaranteeing ₹0 No Dues Certificates with complete legal finality.
              </p>
            </section>

            {/* Company Section Component */}
            <CompanySection />

            {/* Section 11: Interactive FAQ Accordion */}
            <section id="faqs" className="scroll-mt-28 my-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#1F5EFF]">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-xs md:text-sm text-slate-500">
                    Authoritative answers on credit card settlements above ₹1 Lakh under Indian banking regulations
                  </p>
                </div>
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

            {/* Regulatory Sources Strip (5 Official Links) */}
            <div className="my-10 p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
              <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                <span>Statutory References &amp; Regulatory Frameworks</span>
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Reserve Bank of India (RBI) Prudential Norms:</strong> Master Circular on Income Recognition, Asset Classification and Provisioning pertaining to Advances (IRACP).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>RBI Master Direction on Credit Card and Debit Card Operations (2022):</strong> Fair practice standards, interest calculation ceilings, and recovery guidelines.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Statutory reporting guidelines for TransUnion CIBIL, Experian, and Equifax.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Indian Contract Act, 1872:</strong> Section 63 provisions governing remission and compromise agreements between creditor and debtor.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Supreme Court of India (ICICI Bank v. Shanti Devi Sharma):</strong> Landmark ruling prohibiting third-party recovery agent harassment and coercion.
                  </span>
                </li>
              </ul>
            </div>

            {/* Internal Topic Badges (10 Links) */}
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
                <Link
                  href="/personal-loan-settlement-vs-restructuring"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Settlement vs Restructuring
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
                  Settlement CIBIL Score Impact
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
                  Recovery Agent Workplace Rules
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Bank OTS Settlement Policy
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  No Dues Certificate After Settlement
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
                Specializing in high-value credit card charge-off negotiation, phantom interest waiver litigation, RBI compliance, and CIBIL score rehabilitation for borrowers across India.
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
                Credit Card Dues Above ₹1 Lakh Spiraling?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed mb-4">
                Halt violent 42% compounding interest and aggressive recovery calls. Speak with a SettleLoans empaneled advocate to secure 60%–70% OTS waivers directly with bank decision-makers.
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
                    <strong>No Advance Haircut Fee:</strong> Ethical, transparent legal advisory engineered to protect borrower dignity.
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
