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
  CheckCircle
} from 'lucide-react';

// Interactive FAQ Item Component
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

export default function PersonalLoanSettlementCibilImpactClient() {
  const [activeId, setActiveId] = useState<string>('cibil-impact-mechanics');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'cibil-impact-mechanics', title: '1. How Settlement Impacts CIBIL' },
    { id: 'settled-vs-closed', title: '2. "Settled" vs. "Closed" Status' },
    { id: 'seven-year-retention', title: '3. The 7-Year Retention Rule' },
    { id: 'future-loan-eligibility', title: '4. Getting Loans After Settlement' },
    { id: 'rbi-settlement-norms', title: '5. RBI Directives & Borrower Rights' },
    { id: 'ndc-cibil-audit', title: '6. No Dues Certificate & CIBIL Audit' },
    { id: 'rebuilding-blueprint', title: '7. Step-by-Step 750+ Rebound Plan' },
    { id: 'settled-to-closed-conversion', title: '8. Converting Settled to Closed' },
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
      question: "Does personal loan settlement affect CIBIL score?",
      answer: (
        <p>
          <strong>Yes, personal loan settlement directly impacts your CIBIL score.</strong> When an account is settled via a One-Time Settlement (OTS), the lender waives a portion of the principal, accumulated interest, and penal charges. Consequently, the bank reports the account status as <strong>&quot;Settled&quot;</strong> rather than &quot;Closed&quot;. This leads to an immediate drop of <strong>75 to 150+ points</strong> in your credit score. However, settling stops compounding default penalties, removes active litigation threats under Section 138/SARFAESI, and creates a defined baseline to rebuild back to 750+ within 18 to 24 months.
        </p>
      )
    },
    {
      question: "What is the critical difference between 'Settled' and 'Closed' status in CIBIL?",
      answer: (
        <p>
          A <strong>&quot;Closed&quot;</strong> status signifies that the borrower fulfilled 100% of their contractual repayment obligations, including all principal and accrued interest, without any financial loss to the lending institution. This builds a pristine credit score. In contrast, a <strong>&quot;Settled&quot;</strong> status indicates that due to demonstrated financial distress, the bank agreed to accept a discounted compromise payment and wrote off the balance as a commercial loss. While both statuses legally conclude the debt and halt recovery actions, automated underwriting algorithms at prime banks treat &quot;Settled&quot; as an indicator of past default risk.
        </p>
      )
    },
    {
      question: "How long does the 'Settled' tag stay on a CIBIL report in India?",
      answer: (
        <p>
          Under the provisions of the <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA)</strong>, all four licensed credit bureaus in India—TransUnion CIBIL, Experian, CRIF High Mark, and Equifax—are permitted to retain historical credit data for <strong>up to 7 years</strong>. However, credit scoring algorithms weigh recent payment behavior far more heavily than historical records. By maintaining 100% on-time payments on secured credit instruments, the negative weight of the &quot;Settled&quot; tag drops dramatically after <strong>18 to 24 months</strong>.
        </p>
      )
    },
    {
      question: "Can I get a new personal loan or credit card after settlement?",
      answer: (
        <p>
          Immediately following a settlement, prime public and private sector banks will reject unsecured personal loan or premium credit card applications due to automated credit filters. However, <strong>you can immediately obtain a Fixed Deposit (FD)-backed secured credit card</strong> or a secured gold loan. After demonstrating 12 to 18 months of disciplined repayment on secured lines, progressive NBFCs and fintech lenders will begin approving small unsecured credit lines, and home loan eligibility re-opens after 24 to 36 months.
        </p>
      )
    },
    {
      question: "Can I remove the 'Settled' remark from CIBIL later by paying the balance?",
      answer: (
        <p>
          <strong>Yes, you can convert a &quot;Settled&quot; status to &quot;Closed&quot;.</strong> If your financial liquidity improves, you can approach the original lender with a formal request to pay the balance amount that was waived during the OTS negotiation. Upon receiving the residual payment, the bank will cancel the write-off ledger, issue a Comprehensive Final No Dues Certificate, and transmit an updated status of <strong>&quot;Closed&quot;</strong> to TransUnion CIBIL and other credit bureaus within 30 to 45 days.
        </p>
      )
    },
    {
      question: "Is loan settlement better than continuing to default?",
      answer: (
        <p>
          <strong>Settlement is overwhelmingly superior to perpetual default.</strong> A continuous default generates compounding 24%–36% penal interest, mounts consecutive 90+, 120+, 180+ Days Past Due (DPD) entries, invites aggressive recovery agent harassment, and triggers legal notices under Section 138 of the Negotiable Instruments Act or Section 25 of the PSS Act. Settlement caps your liability legally, halts interest permanently, protects you under the RBI Fair Practices Code, and stops the downward spiral of your credit score.
        </p>
      )
    },
    {
      question: "How soon does the bank update CIBIL after I pay the settlement amount?",
      answer: (
        <p>
          Under RBI Master Directives, commercial banks and NBFCs must report monthly credit updates to Credit Information Companies within <strong>30 to 45 days</strong>. Once your final settlement tranche is paid and the bank issues the official No Dues Certificate (NDC), the account ledger should reflect &quot;Settled&quot; with a current balance of <strong>₹0</strong> in the subsequent bureau cycle.
        </p>
      )
    },
    {
      question: "What if the bank continues to show an overdue balance after settlement?",
      answer: (
        <p>
          If a lender mistakenly reports an active outstanding balance or delinquent DPD after issuing an OTS letter, this constitutes an actionable reporting violation. You should immediately file an online <strong>CIBIL Dispute</strong> providing your OTS Sanction Letter, payment transaction UTR receipts, and No Dues Certificate. If the bank fails to rectify the error within 30 days, you can lodge a formal grievance with the <strong>RBI Banking Ombudsman</strong> under the Reserve Bank - Integrated Ombudsman Scheme, 2021 for financial deficiency and mental harassment.
        </p>
      )
    },
    {
      question: "What is the fastest proven way to rebuild CIBIL score to 750+ after settlement?",
      answer: (
        <p>
          The most effective strategy consists of five steps: 1) Secure a ₹25,000–₹50,000 FD-backed credit card (e.g., IDFC FIRST WOW, Kotak 811 Dream Different, or OneCard); 2) Utilize less than 30% of the credit limit monthly; 3) Automate full bill payments 5 days before the due date; 4) Avoid hard loan inquiries for at least 12 months; 5) Add a low-ticket consumer durable or 2-wheeler loan after month 12 to build a healthy credit mix.
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

      {/* A. Editorial Hero Section - Custom Charcoal (#2D313D) Theme */}
      <section className="w-full bg-[#2D313D] border-b border-slate-700/60 pt-8 pb-7 md:pt-12 md:pb-9 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-[#1F5EFF]/20 border border-[#1F5EFF]/40 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#60A5FA]" />
            CIBIL Forensics &amp; Legal Debt Relief Guide
          </div>

          {/* H1 Headline - Compact Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            Does Personal Loan Settlement Affect CIBIL?{' '}
            <span className="text-[#60A5FA]">Score Impact, Legal Rights &amp; 750+ Recovery</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Personal loan settlement reduces your CIBIL score by 75–150 points and records a &quot;Settled&quot; status for up to 7 years. An authentic legal settlement halts penal interest, prevents litigation, and enables prime score recovery in 18–24 months.
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
              <span>Get Free Legal &amp; CIBIL Debt Analysis</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#cibil-impact-mechanics"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold py-2.5 px-4 rounded-xl border border-white/20 transition-all duration-300 text-xs sm:text-sm"
            >
              <BookOpen className="w-4 h-4 text-blue-300" />
              <span>Read Full Credit Impact Analysis</span>
            </a>
          </div>
        </div>
      </section>

      {/* B. Animated Stats Strip */}
      <StatsStrip />

      {/* C. Three-Column Main Body Grid */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          {/* Left Column (Sticky TOC) */}
          <aside className="hidden lg:block sticky top-24 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 xl:p-5 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900 font-black text-sm uppercase tracking-wider mb-4 pb-2 border-b border-slate-200">
                <BookOpen className="w-4 h-4 text-[#1F5EFF]" />
                <span>Article Contents</span>
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
                <span>KEY TAKEAWAYS: WHAT BORROWERS MUST KNOW</span>
              </div>
              <ul className="space-y-3 text-sm md:text-base text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Score Impact:</strong> Settling a personal loan triggers a one-time drop of <strong>75 to 150+ points</strong> in your CIBIL score due to the write-off waiver reported by the lending bank.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Status Distinction:</strong> The account status changes from default to <strong>&quot;Settled&quot;</strong>, proving you satisfied your negotiated legal liability and bringing balance to ₹0.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>7-Year Retention:</strong> Under the CICRA Act 2005, the record stays for 7 years, but its negative underwriting impact wanes after <strong>18 to 24 months</strong> with active credit rebuilding.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Legal Immunity:</strong> Settlement eliminates compounding penal interest (up to 36% p.a.), halts continuous 180+ DPD degradation, and cancels pending litigation under Section 138 of the NI Act.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Conversion Path:</strong> If your cash flow recovers in future years, you can pay the waived balance to convert your CIBIL status permanently from <strong>&quot;Settled&quot; to &quot;Closed&quot;</strong>.
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="cibil-impact-mechanics" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                1. What Actually Happens to Your CIBIL Score When You Settle a Personal Loan?
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                When faced with overwhelming unsecured debt, borrowers frequently ask: <em>&quot;does personal loan settlement affect CIBIL permanently, and is it worse than falling behind on EMIs?&quot;</em> To understand the algorithmic reality, one must analyze how Credit Information Companies (CIBIL, Experian, CRIF High Mark, and Equifax) process loan settlement data submitted by member banks.
              </p>

              {/* Definition Box for GEO */}
              <div className="bg-slate-100 border-l-4 border-slate-700 p-5 rounded-r-xl my-6">
                <p className="text-sm md:text-base font-semibold text-slate-900 italic">
                  &quot;In Indian banking jurisprudence, a One-Time Settlement (OTS) is a legally binding compromise wherein the lender accepts a lump-sum payment lower than the contractual outstanding ledger and foregoes recovery of the residual balance, reporting the account as &apos;Settled&apos; to Credit Information Bureaus.&quot;
                </p>
                <p className="text-xs text-slate-500 mt-2 font-medium">
                  — Banking Regulation Act, 1949 &amp; RBI Compromise Settlement Guidelines (2023)
                </p>
              </div>

              <p className="text-base leading-relaxed mb-5 text-slate-700">
                When a borrower undergoes a structured One-Time Settlement (OTS), the immediate algorithmic consequence is a credit score drop ranging between <strong>75 and 150 points</strong>. For instance, a borrower with a 720 score may see their score dip to approximately 570–610 once the settlement is recorded.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                However, this must be evaluated against the alternative: <strong>Continuous Default</strong>. When you miss EMIs without a settlement:
              </p>
              <ul className="list-disc list-inside space-y-2.5 text-base text-slate-700 mb-6 ml-2">
                <li>
                  Your Days Past Due (DPD) counter advances from <strong>030</strong> to <strong>060</strong>, <strong>090</strong> (NPA classification), and escalates past <strong>180+</strong>.
                </li>
                <li>
                  The bank levies monthly penal interest rates (often compounding at 24% to 36% per annum), causing your total liability to double or triple.
                </li>
                <li>
                  Your CIBIL score continues a relentless, uncontrolled free-fall into the sub-500 territory.
                </li>
                <li>
                  The bank initiates aggressive litigation: Section 138 cheque bounce complaints, Section 25 NACH dishonour proceedings, or civil money recovery suits.
                </li>
              </ul>
              <p className="text-base leading-relaxed text-slate-700">
                By entering into a formal OTS, you trade an uncontrolled, perpetual credit degradation for a <strong>controlled, one-time score adjustment</strong>. The moment the settlement is completed, the DPD counter stops, the active balance is set to zero, and the foundation for credit rehabilitation is solidified.
              </p>
            </section>

            {/* Comparison Table 1 */}
            <div className="my-8">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                Comparison: Personal Loan Settlement vs. Alternative Outcomes
              </h3>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Resolution Pathway</th>
                      <th>CIBIL Score Impact</th>
                      <th>CIBIL Status Code</th>
                      <th>Legal &amp; Penal Status</th>
                      <th>Time to 750+ Rebuild</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Standard Loan Closure</td>
                      <td className="text-emerald-600 font-semibold">+20 to +50 pts (Positive)</td>
                      <td>&quot;Closed&quot;</td>
                      <td>100% Repaid; Zero Legal Risk</td>
                      <td>Immediate Prime Status</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-[#1F5EFF]">One-Time Settlement (OTS)</td>
                      <td className="text-amber-600 font-semibold">-75 to -150 pts (Controlled)</td>
                      <td>&quot;Settled&quot; / Balance: ₹0</td>
                      <td>Legal Immunity; Interest Capped</td>
                      <td>18 to 24 Months</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Loan Restructuring</td>
                      <td className="text-amber-700 font-semibold">-30 to -60 pts</td>
                      <td>&quot;Restructured&quot;</td>
                      <td>Extended Tenure; Interest Accrues</td>
                      <td>12 to 18 Months</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-rose-600">Continuous Default / NPA</td>
                      <td className="text-rose-600 font-semibold">-200 to -350 pts (Ongoing)</td>
                      <td>&quot;Written Off&quot; / &quot;Suit Filed&quot;</td>
                      <td>Active Section 138/Court Notices</td>
                      <td>Indefinite (Unrepaired)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 2 */}
            <section id="settled-vs-closed" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                2. Deciphering CIBIL Statuses: &quot;Closed&quot; vs. &quot;Settled&quot; vs. &quot;Written Off&quot; vs. &quot;Suit Filed&quot;
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Credit reports in India utilize precise terminology governed by the <strong>Credit Information Companies (CIC) Regulations</strong>. When reviewing your TransUnion CIBIL CIR (Credit Information Report), understanding these exact account markers is vital to assessing your standing.
              </p>

              <div className="space-y-4 my-6">
                <div className="p-5 rounded-xl border border-emerald-200 bg-emerald-50/60">
                  <h3 className="text-base font-bold text-emerald-900 flex items-center gap-2 mb-1">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    1. &quot;Closed&quot; (Pristine Health)
                  </h3>
                  <p className="text-sm text-emerald-800 leading-relaxed">
                    The borrower repaid 100% of the loan principal, contractual interest, and associated fees over the agreed tenure. No concession was sought or given. Lenders view this as the highest benchmark of creditworthiness.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-blue-200 bg-blue-50/60">
                  <h3 className="text-base font-bold text-blue-900 flex items-center gap-2 mb-1">
                    <ShieldCheck className="w-5 h-5 text-[#1F5EFF]" />
                    2. &quot;Settled&quot; (Compromise Resolution)
                  </h3>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    The borrower encountered genuine financial hardship (e.g., job loss, medical emergency, business loss), and the bank sanctioned an OTS. A discounted payment was accepted, the remaining balance was waived, and the account balance is recorded as ₹0 with no further recovery rights.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-amber-200 bg-amber-50/60">
                  <h3 className="text-base font-bold text-amber-900 flex items-center gap-2 mb-1">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                    3. &quot;Written Off&quot; (Unresolved Loss)
                  </h3>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    The lender deemed the unpaid loan uncollectible after 180+ days of default and moved the entire outstanding balance to their internal bad-debt accounting ledger (write-off). The borrower has not settled, and recovery agencies or asset reconstruction companies (ARCs) may still pursue recovery.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-rose-200 bg-rose-50/60">
                  <h3 className="text-base font-bold text-rose-900 flex items-center gap-2 mb-1">
                    <ShieldAlert className="w-5 h-5 text-rose-600" />
                    4. &quot;Suit Filed&quot; / &quot;Willful Defaulter&quot; (Legal Action Active)
                  </h3>
                  <p className="text-sm text-rose-800 leading-relaxed">
                    The highest tier of credit delinquency. The bank has initiated formal judicial recovery proceedings in the Debt Recovery Tribunal (DRT), Civil Courts, or filed criminal complaints under Section 138 of the Negotiable Instruments Act. A &quot;Willful Defaulter&quot; tag bars the individual from holding directorships or accessing any regulated credit in India.
                  </p>
                </div>
              </div>
            </section>

            {/* Comparison Table 2 */}
            <div className="my-8">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                CIBIL Account Status Codes &amp; Underwriting Risk Assessment
              </h3>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Status Terminology</th>
                      <th>Outstanding Balance</th>
                      <th>Legal Liability</th>
                      <th>Tier-1 Bank Eligibility</th>
                      <th>Secured Loan Eligibility</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Closed</td>
                      <td>₹0 (Fully Paid)</td>
                      <td>None (Discharged)</td>
                      <td className="text-emerald-600 font-semibold">Immediate / Instant</td>
                      <td className="text-emerald-600 font-semibold">100% Eligible</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-[#1F5EFF]">Settled</td>
                      <td>₹0 (Waived via OTS)</td>
                      <td>None (Full &amp; Final NDC)</td>
                      <td className="text-amber-600 font-semibold">Restricted (18-24 Mo)</td>
                      <td className="text-emerald-600 font-semibold">Immediate with Collateral</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-amber-700">Written Off</td>
                      <td>Full Amount + Penalties</td>
                      <td>Active Debt Liability</td>
                      <td className="text-rose-600 font-semibold">Strict Rejection</td>
                      <td className="text-amber-600 font-semibold">Subject to High Scrutiny</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-rose-600">Suit Filed / Wilful Default</td>
                      <td>Full Amount + Legal Fees</td>
                      <td>Pending Litigation / Warrants</td>
                      <td className="text-rose-600 font-semibold">Absolute Blacklist</td>
                      <td className="text-rose-600 font-semibold">Strict Rejection</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 3 */}
            <section id="seven-year-retention" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                3. The 7-Year Rule: How Long Does &quot;Settled&quot; Status Stay on a CIBIL Report?
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                A primary source of anxiety for borrowers considering debt settlement is the lifespan of the adverse remark. Under Section 20 of the <strong>Credit Information Companies (Regulation) Act, 2005</strong>, CICs are legally authorized to maintain historical credit records for a period of <strong>up to seven (7) years</strong> from the date of closure or settlement.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                However, there is a critical distinction between <strong>historical data retention</strong> and <strong>active credit scoring algorithm weight</strong>:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-6 space-y-4">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#1F5EFF]" />
                  How Underwriting Models Decay the Negative Weight of Settlement Over Time:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm">
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <p className="font-bold text-[#1F5EFF] mb-1">Months 0 – 12</p>
                    <p className="text-slate-600 leading-relaxed">
                      <strong>High Scrutiny Period:</strong> Prime banks automatically reject unsecured applications. Focus strictly on disciplined secured credit usage.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <p className="font-bold text-emerald-600 mb-1">Months 13 – 24</p>
                    <p className="text-slate-600 leading-relaxed">
                      <strong>Rehabilitation Window:</strong> Negative weight declines. Fintechs and Tier-2 NBFCs approve credit cards and small consumer loans.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <p className="font-bold text-purple-600 mb-1">Months 25 – 36+</p>
                    <p className="text-slate-600 leading-relaxed">
                      <strong>Prime Recovery:</strong> CIBIL score can cross 750+. Home loans, auto loans, and standard personal loans become fully accessible.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-base leading-relaxed text-slate-700">
                Credit evaluation algorithms place over <strong>70% of their scoring weight on the most recent 24 to 36 months of repayment history</strong>. If your recent track record reflects 100% on-time payments, the historical 5-year-old &quot;Settled&quot; remark loses its prohibitive power during manual credit underwriting.
              </p>
            </section>

            {/* Section 4 */}
            <section id="future-loan-eligibility" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                4. Can You Ever Get a Personal Loan, Credit Card, or Home Loan Again?
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                The short answer is <strong>yes, you can qualify for loans and credit cards again</strong> after settling a personal loan, but your approach must be strategic and phased.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Here is how different categories of credit instruments treat a post-settlement profile:
              </p>

              <div className="space-y-4 my-6">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-[#1F5EFF]" />
                    Secured Credit Cards (FD-Backed): Available Day 1
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Because these cards are secured against a 100% cash fixed deposit (e.g., ₹25,000–₹1,00,000), banks do not perform underwriting checks on your past CIBIL status. The card reports monthly to TransUnion CIBIL as an active, standard credit line, generating positive repayment marks.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <Landmark className="w-5 h-5 text-emerald-600" />
                    Home Loans &amp; Mortgage Loans: Accessible After 24–36 Months
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Housing finance companies (HFCs) and public sector banks evaluate the Loan-to-Value (LTV) ratio of the property and your current debt-to-income ratio. If your post-settlement score has rebounded above 720 and you provide your No Dues Certificate, home loans are routinely sanctioned.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-amber-600" />
                    Unsecured Personal Loans: Accessible After 24 Months
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    While the original lending bank that absorbed the haircut will internally blacklist you for future unsecured products, <strong>other non-consortium banks and NBFCs</strong> will evaluate your renewed 750+ score and approve personal loans based on stable income and low credit utilization.
                  </p>
                </div>
              </div>
            </section>

            {/* Compact High-Impact Infographic Banner (Half Height) */}
            <div className="bg-white border-2 border-blue-200 rounded-3xl overflow-hidden shadow-lg my-10 text-slate-800">
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
                      Personal Loan Settlement &amp; CIBIL Impact Summary
                    </h3>
                  </div>
                </div>
                <a
                  href="/images/infographics/personal-loan-settlement-cibil-impact.jpg"
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
                    src="/images/infographics/personal-loan-settlement-cibil-impact.jpg"
                    alt="Personal Loan Settlement and CIBIL Impact Roadmap Infographic Summary"
                    className="w-full h-auto object-contain max-h-[420px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Quick Crux Footer Strip */}
              <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span><strong>Key Takeaway:</strong> Controlled -75 to -150 pts drop &bull; ₹0 Balance NDC &bull; 18-Mo Rebound to 750+</span>
                </div>
                <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                  Get Free Case Evaluation &rarr;
                </Link>
              </div>
            </div>

            {/* Section 5 */}
            <section id="rbi-settlement-norms" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                5. RBI Guidelines &amp; Legal Rights of Borrowers During Compromise Settlements
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Many distressed borrowers are unaware that loan settlement is not an act of charity by the bank—it is a formalized, statutory mechanism governed by Reserve Bank of India (RBI) circulars and protected under Indian consumer and banking law.
              </p>

              {/* Key RBI Directives */}
              <div className="space-y-4 my-6">
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                  <h3 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                    <Landmark className="w-5 h-5 text-[#1F5EFF]" />
                    RBI Master Direction on Compromise Settlements (June 2023)
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    The RBI explicitly directed all commercial banks, NBFCs, and All-India Financial Institutions to put in place board-approved compromise settlement policies. It formalized that regulated entities can enter into compromise settlements without prejudice to commercial prudential norms.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                    <Scale className="w-5 h-5 text-emerald-600" />
                    RBI Fair Practices Code &amp; Recovery Agent Guidelines
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Under the Master Circular on Recovery Agents, lenders are strictly prohibited from: calling borrowers before 8:00 AM or after 7:00 PM, contacting friends/family or employers, using abusive language, or visiting homes without prior formal notice. Any violation makes the lender liable to severe penalties under the Integrated Ombudsman Scheme.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-purple-600" />
                    Supreme Court Ruling on Debtor Dignity (ICICI Bank vs. Prakash Kaur)
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    The Hon&apos;ble Supreme Court established that banks cannot utilize musclemen or coercive recovery tactics to recover dues. Recovery must strictly adhere to the rule of law and statutory dispute resolution mechanisms.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="ndc-cibil-audit" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                6. Forensic Audit of the No Dues Certificate (NDC) &amp; 45-Day CIBIL Reporting Mandate
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                A critical pitfall that traps thousands of Indian borrowers is paying a settlement amount based on verbal promises or informal WhatsApp messages from third-party recovery agents, only to find months later that the bank still shows an active default.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <h3 className="text-amber-900 font-bold text-base flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  THE 3 MANDATORY RULES OF AUTHENTIC LOAN SETTLEMENT:
                </h3>
                <ul className="text-sm text-amber-800 space-y-2 list-disc list-inside">
                  <li>
                    <strong>Rule 1:</strong> Never pay a single rupee without an official OTS Sanction Letter issued on the bank&apos;s registered letterhead, containing your loan account number, sanctioned settlement figure, payment schedule, and authorized signatory signature.
                  </li>
                  <li>
                    <strong>Rule 2:</strong> All payments must be deposited directly into your designated loan account number via NEFT/RTGS/NetBanking. Never make payments to individual collection agency accounts or in cash.
                  </li>
                  <li>
                    <strong>Rule 3:</strong> Demand your formal <strong>No Dues Certificate (NDC) / Closure Certificate</strong> within 15 to 30 days of the final payment.
                  </li>
                </ul>
              </div>

              <p className="text-base leading-relaxed mb-5 text-slate-700">
                As mandated by RBI guidelines, once the NDC is issued, the bank must transmit the updated status to all four Credit Information Companies (CIBIL, Experian, CRIF, Equifax) in their next monthly reporting cycle (within 30 to 45 days).
              </p>
              <p className="text-base leading-relaxed text-slate-700">
                If the bank fails to report the settlement or erroneously reports an overdue balance, you have the statutory right to raise a dispute on the TransUnion CIBIL portal, followed by an immediate escalation to the <strong>Banking Ombudsman</strong> under Clause 11 of the Integrated Ombudsman Scheme, 2021.
              </p>
            </section>

            {/* Section 7 */}
            <section id="rebuilding-blueprint" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                7. From 550 to 750+: The Step-by-Step Credit Rebuilding Blueprint
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                A personal loan settlement is not a financial death sentence—it is a financial reset button. With a disciplined 5-pillar rebuilding strategy, you can reliably restore your CIBIL score to prime status (750+) within 18 to 24 months.
              </p>

              {/* Recovery Roadmap Table */}
              <div className="my-8">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                  36-Month CIBIL Score Recovery Blueprint
                </h3>
                <div className="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th>Timeline Milestone</th>
                        <th>Strategic Action Plan</th>
                        <th>Target Credit Instruments</th>
                        <th>Projected CIBIL Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-bold text-slate-900">Month 0 – 3</td>
                        <td>Obtain NDC, verify ₹0 balance across all 4 bureaus, file disputes for errors</td>
                        <td>₹25,000 Secured FD Card (IDFC WOW / Kotak 811)</td>
                        <td className="font-bold text-amber-600">560 – 600</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Month 4 – 12</td>
                        <td>Maintain Credit Utilization Ratio (CUR) strictly below 25%; zero late marks</td>
                        <td>Secured Card + Utility Bill Autopayments</td>
                        <td className="font-bold text-[#1F5EFF]">640 – 690</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Month 13 – 24</td>
                        <td>Introduce a low-ticket installment loan to diversify credit mix</td>
                        <td>Fintech Consumer Durable Loan / 2-Wheeler Loan</td>
                        <td className="font-bold text-emerald-600">710 – 745</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Month 25 – 36+</td>
                        <td>Full prime eligibility achieved; apply for standard unsecured loans</td>
                        <td>Unsecured Credit Cards, Auto Loan, Prime Home Loan</td>
                        <td className="font-bold text-emerald-700">750 – 790+ (Prime)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-4 my-6">
                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                  <h4 className="font-bold text-slate-900 text-base mb-1">
                    Pillar 1: Keep Credit Utilization Ratio (CUR) Below 30%
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    If your secured credit card has a limit of ₹50,000, never spend more than ₹15,000 in any billing cycle. High credit utilization signals credit hunger and penalizes your score.
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                  <h4 className="font-bold text-slate-900 text-base mb-1">
                    Pillar 2: Zero Hard Inquiries for 12 Months
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Do not apply for multiple loans or cards across various bank portals. Each hard inquiry deducts 5–10 points from your score and flags you as a desperate borrower.
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                  <h4 className="font-bold text-slate-900 text-base mb-1">
                    Pillar 3: Diversify Your Credit Mix Over Time
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    A healthy credit portfolio consists of both revolving credit (credit cards) and installment credit (secured auto or consumer durable loans). Adding an installment loan in year 2 enhances your credit score stability.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section id="settled-to-closed-conversion" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                8. Settled to Closed: Can You Pay the Remaining Amount Later to Clean Your CIBIL Report?
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                A unique legal provision in Indian credit reporting allows borrowers whose financial situation improves to convert a past <strong>&quot;Settled&quot;</strong> account into a 100% clean <strong>&quot;Closed&quot;</strong> account.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Here is the step-by-step conversion protocol:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-6 space-y-4">
                <ol className="list-decimal list-inside space-y-3 text-sm md:text-base text-slate-700">
                  <li>
                    <strong>Request Ledger of Write-Off:</strong> Contact the Stressed Asset Resolution Branch (SARB) or Nodal Officer of the original lending bank and request the exact written-off balance amount.
                  </li>
                  <li>
                    <strong>Submit Formal Repayment Letter:</strong> Submit a formal letter stating your intent to pay the residual principal/interest waiver to achieve a status modification from &quot;Settled&quot; to &quot;Closed&quot;.
                  </li>
                  <li>
                    <strong>Pay Balance &amp; Obtain Revised NDC:</strong> Deposit the residual funds and obtain a Comprehensive Final No Dues Certificate that explicitly mentions full closure.
                  </li>
                  <li>
                    <strong>Bank Updates CIC Bureaus:</strong> The bank submits an account status change to TransUnion CIBIL, Equifax, Experian, and CRIF High Mark in their monthly data upload.
                  </li>
                  <li>
                    <strong>CIBIL Updates Status to &quot;Closed&quot;:</strong> Within 30 to 45 days, the &quot;Settled&quot; flag is removed, and your CIBIL record displays &quot;Closed&quot;, completely restoring your institutional credit eligibility.
                  </li>
                </ol>
              </div>
            </section>

            <CompanySection />

            {/* Section 9: FAQs */}
            <section id="faqs" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                9. Frequently Asked Questions (FAQ)
              </h2>
              <p className="text-base leading-relaxed mb-8 text-slate-600">
                Get immediate answers to the most critical legal, financial, and credit score questions regarding personal loan settlement in India.
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
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                <Landmark className="w-4 h-4 text-[#1F5EFF]" />
                <span>Official Regulatory Sources &amp; Legal Authorities</span>
              </h3>
              <ul className="space-y-2.5 text-xs md:text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    Reserve Bank of India (RBI) — Master Directives on Compromise Settlements &amp; Fair Practices Code
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
                    Supreme Court of India — Landmark Jurisprudence on Debtor Protection &amp; Recovery Norms
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
                <Link
                  href="/loan-penalty-waiver-request"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Loan Penalty Waiver Request
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
              <div className="text-xl font-black mb-3 leading-tight">
                Facing Recovery Harassment or Legal Court Notices?
              </div>
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
              <div className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                <span>Why Borrowers Trust SettleLoans</span>
              </div>
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
