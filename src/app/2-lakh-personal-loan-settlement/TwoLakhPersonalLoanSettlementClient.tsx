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
  AlertCircle
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

export default function TwoLakhPersonalLoanSettlementClient() {
  const [activeId, setActiveId] = useState<string>('institutional-reality-2-lakh-loan');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'institutional-reality-2-lakh-loan', title: '1. The ₹2 Lakh Debt Dilemma & Legal Reality' },
    { id: 'delinquency-timeline-npa-provisioning', title: '2. Delinquency Timeline & NPA Aging' },
    { id: 'mathematical-haircut-formula-slabs', title: '3. Haircut Formula & Realistic Slabs (₹60k–₹1L)' },
    { id: 'telecalling-recovery-harassment-tactics', title: '4. Tele-Calling Tactics & Harassment Defense' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Resolution Blueprint' },
    { id: 'step-by-step-settlement-roadmap', title: '6. Step-by-Step Settlement Roadmap' },
    { id: 'legal-exposure-section-138-pssa-civil-action', title: '7. Section 138, Section 25 & Police Myths' },
    { id: 'bilateral-ots-vs-lok-adalat-vs-restructuring', title: '8. Comparative Resolution Avenues' },
    { id: 'sanction-letter-audit-ndc-mandate', title: '9. Sanction Letter Audit & ₹0 NDC Mandate' },
    { id: 'cibil-score-trajectory-rebuilding', title: '10. CIBIL Trajectory & Credit Rebuilding' },
    { id: 'company-resolution-section', title: '11. SettleLoans Legal Defense & Advisory' },
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
      question: "Will a bank actually file a civil court case for a ₹2 Lakh personal loan default?",
      answer: (
        <p>
          In reality, commercial banks and NBFCs virtually never file formal civil suits for a ₹2 Lakh personal loan default. A ₹2 Lakh debt falls far below the <strong>₹20 Lakh threshold required for the Debt Recovery Tribunal (DRT)</strong>. Initiating an ordinary civil summary suit under Order 37 CPC costs the lender ₹30,000 to ₹50,000 in non-refundable court fees and legal retainers, spanning 3 to 5 years of litigation. Because these legal expenses represent 20% to 30% of the entire loan value with zero asset collateral to attach, lenders find litigation economically unviable and rely on tele-calling pressure or accept compromise OTS settlements.
        </p>
      )
    },
    {
      question: "How much can I realistically settle a ₹2 Lakh personal loan for in India?",
      answer: (
        <p>
          For an unsecured ₹2 Lakh personal loan in deep delinquency (over 120 to 180 days past due), realistic One-Time Settlement (OTS) amounts typically range between <strong>₹60,000 and ₹1,00,000</strong>, representing a substantial <strong>50% to 70% total debt haircut</strong>. Under RBI compromise settlement regulations, 100% of accumulated penal interest, late payment penalties, and bounce charges are completely extinguished, and the core principal is discounted based on demonstrated financial insolvency.
        </p>
      )
    },
    {
      question: "Why are recovery agents so aggressive for small ₹2 Lakh loan defaults?",
      answer: (
        <p>
          Small-ticket loan defaults between ₹1 Lakh and ₹3 Lakhs are heavily outsourced to third-party <strong>Debt Recovery Agencies (DRAs)</strong> operating on aggressive performance-based commission structures (often 15% to 25% of recovered cash). Because recovery agents are acutely aware that the lending institution will not expend funds on civil court litigation for small sums, they depend entirely on psychological intimidation, rapid-fire phone calls, and unauthorized threats to compel immediate payment before the debt is written off.
        </p>
      )
    },
    {
      question: "Can the police arrest me for defaulting on a ₹2 Lakh personal loan?",
      answer: (
        <p>
          <strong>No. Defaulting on an unsecured personal loan is strictly a civil contract dispute</strong> governed by the Indian Contract Act, 1872. The police possess zero statutory jurisdiction to register an FIR, summon you to a police station, or effect an arrest for bona fide financial inability to repay. Only when a repayment cheque bounces under <strong>Section 138 of the Negotiable Instruments Act</strong> or an electronic auto-debit fails under <strong>Section 25 of the PSSA</strong> can a quasi-criminal complaint be lodged in a Magistrate Court, which is compoundable and resolvable without imprisonment.
        </p>
      )
    },
    {
      question: "Can recovery agents contact my employer or visit my office for a ₹2 Lakh default?",
      answer: (
        <p>
          <strong>No. Visiting your workplace without prior consent</strong>, disclosing your debt to colleagues or supervisors, or dialing office landlines constitutes an explicit violation of the <strong>RBI Master Directions on Recovery Agents (2022)</strong> and the <em>Fair Practices Code</em>. Borrowers can immediately serve a legal cease-and-desist notice through an advocate, escalate the harassment to the bank&apos;s Principal Nodal Officer, and lodge a statutory complaint on the RBI Integrated Ombudsman portal (cms.rbi.org.in).
        </p>
      )
    },
    {
      question: "Can I settle a ₹2 Lakh personal loan through National Lok Adalat?",
      answer: (
        <p>
          <strong>Yes. National Lok Adalats</strong> organized quarterly by District Legal Services Authorities (DLSA) under the Legal Services Authorities Act, 1987, provide an exceptional statutory forum for resolving ₹2 Lakh personal loans. Banks routinely attend Lok Adalat sessions with pre-sanctioned settlement discount mandates (frequently granting 50% to 65% waivers). The award pronounced by the Lok Adalat bench carries the legal force of a <strong>final Civil Court Decree with zero court fees</strong>, ensuring complete closure with no right of appeal.
        </p>
      )
    },
    {
      question: "What must I verify before paying settlement money for a ₹2 Lakh loan?",
      answer: (
        <p>
          Never remit settlement funds based on verbal conversations, WhatsApp texts, or personal UPI QR codes provided by collection agents. Borrowers must insist on an authentic <strong>OTS Sanction Letter</strong> issued on official bank letterhead containing: (1) your exact loan account number and full name; (2) the finalized settlement amount and payment deadline; (3) an explicit clause confirming that all residual dues are waived upon receipt; and (4) an undertaking to issue a <strong>₹0 No Dues Certificate within 30 days</strong>. All payments must be deposited directly into your bank loan account.
        </p>
      )
    },
    {
      question: "How does settling a ₹2 Lakh personal loan affect my CIBIL score?",
      answer: (
        <p>
          Upon settlement, the lending institution updates the four credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark) to <strong>&apos;Settled&apos;</strong> with an outstanding balance of <strong>₹0</strong>. This entry leads to an immediate credit score reduction of 75 to 120 points and initiates an RBI-mandated 12-month cooling window. However, settling permanently terminates monthly delinquency reporting and enables you to rebuild your CIBIL score back to 750+ within 18 to 24 months using a secured credit card backed by a fixed deposit.
        </p>
      )
    },
    {
      question: "How long does a ₹2 Lakh personal loan settlement process take?",
      answer: (
        <p>
          A standard ₹2 Lakh personal loan settlement takes between <strong>3 to 5 months</strong> from the date of the first missed EMI. Once the loan crosses 90 days past due and enters Non-Performing Asset (NPA) status, formal negotiations with the bank&apos;s Stressed Assets Resolution Branch or Credit Committee typically require 3 to 6 weeks to finalize the sanction terms, remit payment, and obtain the zero balance closure certificate.
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
            <span>₹2 Lakh Debt Resolution Blueprint • RBI OTS Framework</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            How to Settle ₹2 Lakh Personal Loan: <span className="text-[#3b82f6] md:text-[#60a5fa]">Legal Reality, Realistic Haircuts &amp; Defense</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Struggling with a defaulted ₹2,00,000 personal loan across instant apps, NBFCs, or banks? Discover why lenders avoid court for small debt, uncover the mathematical formula to settle for ₹60,000–₹1,00,000, and halt recovery agent harassment under RBI directives.
          </p>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-3 mb-5 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Authored by <strong>Ashish Jhangra</strong></span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Updated: August 2026</span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>RBI Compromise Settlement Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Start Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Calculate Settlement Amount
            </Link>
          </div>
        </div>
      </section>

      {/* B. Crisp Stats Strip Component */}
      <StatsStrip />

      {/* 3-Column Layout Container */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column (Sticky Table of Contents) */}
          <aside className="w-full sticky top-24 space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-sm">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-200 text-slate-900 font-bold text-sm">
                <BookOpen className="w-4 h-4 text-[#1F5EFF]" />
                <span>Table of Contents</span>
              </div>
              <nav className="space-y-1 text-xs">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug ${
                      activeId === item.id
                        ? 'bg-[#1F5EFF] text-white font-bold shadow-sm'
                        : 'text-slate-600 hover:bg-slate-200/60 hover:text-slate-900'
                    }`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick Summary Pill Box */}
            <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>₹2 Lakh Quick Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                A ₹2 Lakh personal loan is far below the ₹20L DRT limit. Civil court costs make lawsuits uneconomic for banks, driving realistic 50%–70% OTS compromise settlements (₹60k–₹1L).
              </p>
            </div>
          </aside>

          {/* Middle Column (Editorial Narrative & Tables) */}
          <main className="w-full blog-content space-y-10 min-w-0">
            
            {/* Section 1: The ₹2 Lakh Debt Dilemma & Legal Reality in India */}
            <section id="institutional-reality-2-lakh-loan" className="scroll-mt-24">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4" />
                <span>1. Institutional Economics &amp; Small Debt Legal Reality</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                The ₹2 Lakh Personal Loan Dilemma: Institutional Economics vs. Borrower Panic
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Across India&apos;s retail credit ecosystem, a <strong>₹2,00,000 personal loan</strong> is one of the most common debt instruments. Frequently disbursed through instant fintech lending applications, NBFC credit lines, or pre-approved banking facilities, these funds are typically secured during acute life crises such as emergency hospitalizations, unexpected job layoffs, or urgent family commitments. When consecutive EMIs are missed due to severe financial distress, borrowers find themselves overwhelmed by sudden panic, wondering whether the bank will initiate immediate court proceedings, attach household assets, or send the police.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                To evaluate the true risk of defaulting on a ₹2 Lakh unsecured personal loan, one must examine the hard institutional economics governing Indian banking operations. Unsecured personal loans carry zero collateral backing, meaning lenders cannot invoke summary auction powers under the <em>SARFAESI Act, 2002</em>. Furthermore, statutory law under the <em>Recovery of Debts and Bankruptcy Act, 1993</em> explicitly mandates a minimum pecuniary threshold of <strong>₹20,00,000 to approach the Debt Recovery Tribunal (DRT)</strong>. This statutory barrier completely excludes a ₹2 Lakh default from DRT jurisdiction.
              </p>
              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                The lender&apos;s remaining judicial mechanism is filing an ordinary summary suit under Order 37 of the Code of Civil Procedure (CPC) in a local civil court. However, institutional litigation costs—including ad valorem court stamp duties, advocate retainers, and administrative filing fees—typically amount to <strong>₹30,000 to ₹50,000</strong> per case, accompanied by an average judicial timeline of 3 to 5 years. Spending 25% of the total claim on legal proceedings with zero guarantee of liquid asset recovery makes civil litigation commercially illogical for the bank, motivating them to resolve the account through a negotiated One-Time Settlement (OTS).
              </p>
            </section>

            {/* Section 2: Delinquency Milestones & RBI IRACP Provisioning Dynamics */}
            <section id="delinquency-timeline-npa-provisioning" className="scroll-mt-24">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>2. Delinquency Timeline &amp; NPA Aging</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Delinquency Milestones &amp; RBI IRACP Provisioning Dynamics for ₹2 Lakh Loans
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When monthly installments on a ₹2 Lakh personal loan remain unpaid, the credit facility transitions through rigorous statutory stages established by the Reserve Bank of India under its <strong>Master Framework on Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP)</strong>. Understanding this balance-sheet trajectory empowers borrowers, as a bank&apos;s willingness to grant substantial principal haircuts is directly tied to the accounting aging of the defaulted asset.
              </p>
              
              {/* Table 1: Delinquency Stages & Provisioning Impact */}
              <div className="my-6 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="font-bold text-slate-900">Delinquency Stage</th>
                      <th className="font-bold text-slate-900">Days Past Due (DPD)</th>
                      <th className="font-bold text-slate-900">Bank Balance Sheet Provisioning</th>
                      <th className="font-bold text-slate-900">Primary Institutional Recovery Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-800">SMA-0 (Early Delinquency)</td>
                      <td>1 – 30 Days</td>
                      <td>Standard Provision (0.40%)</td>
                      <td>Automated payment reminders via SMS, email, and internal IVR calls.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-800">SMA-1 (Moderate Stress)</td>
                      <td>31 – 60 Days</td>
                      <td>Standard Provision (0.40%)</td>
                      <td>Tele-calling follow-ups, NACH bounce fee levying, and overdue penalty notices.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-800">SMA-2 (Critical Risk)</td>
                      <td>61 – 90 Days</td>
                      <td>Standard Provision (0.40%)</td>
                      <td>Intensive recovery outreach; formal loan recall warning dispatched to borrower.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-800">Substandard NPA</td>
                      <td>91 – 365 Days</td>
                      <td>Mandatory 25% Unsecured Provision</td>
                      <td>Account outsourced to external DRAs; opening OTS compromise possibilities emerge.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-800">Doubtful / Loss Asset</td>
                      <td>365+ Days</td>
                      <td>100% Full Balance Sheet Provision</td>
                      <td>Transferred to Stressed Assets Desk; maximum 50%–70% OTS haircut authorization.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                During the early Special Mention Account phases (SMA-0 to SMA-2), the lender treats the overdue amount as temporary cash-flow friction and routinely refuses any concession on principal or interest. However, once default crosses <strong>90 Days Past Due</strong>, the account is reclassified as a Non-Performing Asset (NPA), forcing the lender to lock away a mandatory 25% provisioning charge from operating profits. When the debt ages past 12 months, the bank completes a 100% balance-sheet provision, writing off the asset entirely. At this stage, any recovery achieved through an OTS settlement is treated as pure write-back profit, creating optimal leverage for deep compromise waivers.
              </p>
            </section>

            {/* Section 3: The Mathematical Haircut Formula & Realistic Slabs */}
            <section id="mathematical-haircut-formula-slabs" className="scroll-mt-24">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>3. Haircut Formula &amp; Realistic Settlement Slabs</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                The Mathematical Haircut Formula: Realistic ₹2 Lakh Settlement Slabs (₹60k–₹1L)
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                A common misconception is that personal loan settlements are arbitrary figures determined entirely by informal arguments with recovery agents. Under the <strong>RBI Master Direction on Compromise Settlements and Technical Write-offs (2023)</strong>, all regulated lenders must follow a standardized, board-approved compromise policy grounded in the <em>Net Present Value (NPV) Recovery Calculation</em>:
              </p>
              
              {/* Highlighted Statutory Callout Box */}
              <div className="bg-slate-50 border-l-4 border-[#1F5EFF] p-5 rounded-r-2xl my-6">
                <h3 className="text-slate-900 font-bold text-base mb-2 flex items-center gap-2">
                  <Info className="w-5 h-5 text-[#1F5EFF]" />
                  Statutory Net Present Value (NPV) Valuation Rule
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  According to RBI compromise settlement guidelines, the compromise amount offered by the borrower must be greater than or equal to the Net Present Value (NPV) of the estimated net realisable recovery through judicial proceedings, discounted at the bank&apos;s prevailing base rate over a 3-to-5 year litigation horizon minus projected legal expenses.
                </p>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Because an unsecured ₹2 Lakh loan carries no attached real estate or machinery, the projected judicial recovery value after accounting for lawyer retainers, execution delays, and debtor insolvency is virtually zero. As a result, the bank&apos;s internal credit model easily justifies closing the file for a one-time settlement sum between <strong>₹60,000 and ₹1,00,000</strong>.
              </p>

              {/* Table 2: ₹2 Lakh Loan Settlement Slabs */}
              <div className="my-6 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="font-bold text-slate-900">Borrower Hardship Profile &amp; Default Bucket</th>
                      <th className="font-bold text-slate-900">Realistic Haircut (%)</th>
                      <th className="font-bold text-slate-900">Final Settlement Range</th>
                      <th className="font-bold text-slate-900">Total Waiver Breakdown</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-800">Early NPA (90–120 DPD, Income Dip)</td>
                      <td>40% – 50%</td>
                      <td>₹1,00,000 – ₹1,20,000</td>
                      <td>100% Penal Charges + ₹80,000–₹1,00,000 Principal Waiver</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-800">Substandard NPA (120–240 DPD, Documented Hardship)</td>
                      <td>50% – 60%</td>
                      <td>₹80,000 – ₹1,00,000</td>
                      <td>100% Penal Charges + ₹1,00,000–₹1,20,000 Principal Waiver</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-800">Deep Delinquency (240–365+ DPD, Long-Term Job Loss)</td>
                      <td>60% – 70%</td>
                      <td>₹60,000 – ₹80,000</td>
                      <td>100% Penal Charges + ₹1,20,000–₹1,40,000 Principal Waiver</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-800">Extreme Insolvency (Permanent Medical Disability)</td>
                      <td>70% – 75%</td>
                      <td>₹50,000 – ₹60,000</td>
                      <td>100% Penal Charges + ₹1,40,000–₹1,50,000 Principal Waiver</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                As demonstrated in the matrix, borrowers who submit concrete proof of financial distress—such as medical hospital discharge papers, salary termination letters, or certified bank statements indicating zero surplus income—routinely achieve <strong>55% to 70% total debt waivers</strong>, resolving a ₹2,00,000 balance for an accessible lump sum of ₹60,000 to ₹90,000.
              </p>
            </section>

            {/* Section 4: Collection Agency Dynamics & Recovery Harassment for Small Loans */}
            <section id="telecalling-recovery-harassment-tactics" className="scroll-mt-24">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>4. Recovery Tactics &amp; Harassment Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                The Small-Ticket Recovery Trap: Relentless Tele-Calling vs. Legal Realities
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                If banks rarely file civil lawsuits for a ₹2 Lakh personal loan, why is borrower harassment so disproportionately intense? In Indian retail lending, small-ticket loans (₹50,000 to ₹3,00,000) represent the core revenue pool for third-party <strong>Debt Recovery Agencies (DRAs)</strong>. Because these agencies operate on contingency commissions ranging from 15% to 25% on recovered capital, their agents are under intense daily pressure to extract immediate payments.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Knowing that the bank will not initiate costly court litigation, recovery executives rely heavily on psychological manipulation and aggressive intimidation. Common illicit tactics include making 20 to 40 automated calls per day, dialing outside permissible hours, threatening imminent police arrests, contacting relatives or friends whose phone numbers were scraped from contact lists, and threatening humiliating visits to the borrower&apos;s workplace or residential society.
              </p>
              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                These aggressive recovery actions directly violate the <strong>RBI Master Directions on Recovery Agents (2022)</strong> and the landmark Supreme Court ruling in <em>ICICI Bank Ltd. v. Prakash Kaur (2007)</em>. Regulated entities and their recovery contractors are legally forbidden from using abusive language, visiting workplaces without consent, contacting debtors before 08:00 AM or after 07:00 PM, or harassing personal references. Serving a formal advocate cease-and-desist notice halts these unauthorized practices immediately by creating direct legal liability for the bank&apos;s Principal Nodal Officer.
              </p>
            </section>

            {/* Section 5: Dedicated Infographic Banner Component */}
            <div id="infographic-resolution-blueprint" className="scroll-mt-24">
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
                        2 Lakh Personal Loan Settlement Roadmap &amp; Haircut Matrix
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/2-lakh-personal-loan-settlement.jpg"
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
                      src="/images/infographics/2-lakh-personal-loan-settlement.jpg"
                      alt="2 Lakh Personal Loan Settlement Process and Haircut Matrix Infographic"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Takeaway:</strong> A ₹2 Lakh unsecured loan default qualifies for a 50%–70% OTS waiver under RBI IRACP provisioning rules.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Section 6: Step-by-Step Strategic Roadmap from Default to Settlement */}
            <section id="step-by-step-settlement-roadmap" className="scroll-mt-24">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>5. Step-by-Step Strategic Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Step-by-Step Strategic Roadmap to Settle a ₹2 Lakh Loan Compromise
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Navigating a ₹2 Lakh personal loan settlement requires a disciplined negotiation protocol that bypasses commission-seeking agency tele-callers and engages directly with the bank&apos;s Stressed Assets Resolution Branch (SARB) or Zonal Settlement Committee.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The settlement process begins by allowing the account to formally enter NPA status (post-90 DPD) while compiling a structured <strong>Hardship Docket</strong>. This dossier includes job termination letters, salary reduction slips, business loss statements, or hospital medical bills confirming verifiable financial incapacity. Presenting written proof establishes that the default is an involuntary commercial misfortune rather than wilful evasion.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Next, the borrower issues a formal representation to the bank&apos;s credit committee proposing a compromise settlement. When the bank counters with an opening demand—usually asking for 75% to 85% of the outstanding ledger—the borrower replies with a reasoned counter-offer anchored at 30% to 40% of the principal sum. Through structured written exchanges over 4 to 6 weeks, negotiations converge at the realistic <strong>40% to 50% principal bracket (₹70,000–₹95,000)</strong>, concluding with an official stamped bank sanction letter.
              </p>
            </section>

            {/* Section 7: Legal Vulnerabilities: Section 138 NI Act, Section 25 PSSA, and Police Myths */}
            <section id="legal-exposure-section-138-pssa-civil-action" className="scroll-mt-24">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>6. Legal Landscape &amp; Defense Protocols</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Legal Exposure for ₹2 Lakh Defaults: Section 138 NI Act, Section 25 PSSA &amp; Police Myths
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                A primary driver of anxiety in small-ticket defaults is the apprehension of criminal prosecution. Under Indian contract jurisprudence, the pure inability to service an unsecured loan is strictly a civil matter. The police have no statutory power to register an FIR under Section 420 of the IPC (or Section 318 of the Bharatiya Nyaya Sanhita, 2023) unless the lender can establish fraudulent misrepresentation or forged documentation at loan disbursement.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Lenders do, however, possess two specific statutory remedies: <strong>Section 138 of the Negotiable Instruments Act, 1881</strong> (for bounced repayment cheques) and <strong>Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA)</strong> (for failed electronic NACH/e-mandates). When an auto-debit bounces, the lender must serve a statutory 30-day legal notice before filing a private complaint before a Judicial Magistrate.
              </p>
              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                Crucially, complaints under Section 138 and Section 25 are legally classified as compoundable offences under Section 147 of the NI Act. When represented by competent legal counsel, these proceedings frequently serve as the ideal forum to negotiate a compromise. Upon payment of the agreed settlement amount, the lender is legally required to withdraw the court complaint, eliminating all civil and quasi-criminal exposure entirely.
              </p>
            </section>

            {/* Section 8: Bilateral OTS vs. National Lok Adalat vs. Loan Restructuring */}
            <section id="bilateral-ots-vs-lok-adalat-vs-restructuring" className="scroll-mt-24">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>7. Comparative Resolution Avenues</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Bilateral OTS vs. National Lok Adalat vs. Loan Restructuring for ₹2 Lakh Loans
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers struggling with a ₹2 Lakh personal loan default have three primary legal pathways for resolving their debt obligations. Selecting the appropriate mechanism depends on immediate liquidity, ongoing legal notices, and future credit rebuilding goals.
              </p>

              {/* Table 3: Comparative Resolution Channels */}
              <div className="my-6 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="font-bold text-slate-900">Resolution Channel</th>
                      <th className="font-bold text-slate-900">Typical Debt Waiver (%)</th>
                      <th className="font-bold text-slate-900">Judicial Status &amp; Enforceability</th>
                      <th className="font-bold text-slate-900">Recommended Borrower Scenario</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-800">Bilateral Bank OTS</td>
                      <td>50% – 70% Principal + 100% Penalties</td>
                      <td>Direct Contractual Settlement via Bank Sanction Letter</td>
                      <td>Borrowers with ready lump-sum liquidity (₹60k–₹1L) seeking fast closure.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-800">National Lok Adalat</td>
                      <td>45% – 65% Principal + 100% Penalties</td>
                      <td>Civil Court Decree (Final, no appeal lies under NALSA Act)</td>
                      <td>Borrowers with active court notices or pending Section 138/25 matters.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-800">Loan Restructuring / Rescheduling</td>
                      <td>0% (Tenure extended, EMI reduced)</td>
                      <td>Revised Loan Agreement with regular interest accruals</td>
                      <td>Borrowers with recovered monthly income wishing to maintain clean CIBIL.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                While restructuring avoids a &apos;Settled&apos; tag on credit reports, it extends repayment tenure and significantly inflates cumulative interest charges. For borrowers facing prolonged financial distress, an <strong>OTS compromise or Lok Adalat award</strong> provides immediate debt freedom at a fraction of the total ₹2 Lakh burden.
              </p>
            </section>

            {/* Section 9: The OTS Sanction Letter Audit: Mandatory Clauses & The ₹0 NDC Mandate */}
            <section id="sanction-letter-audit-ndc-mandate" className="scroll-mt-24">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>8. Sanction Letter Audit &amp; ₹0 NDC Mandate</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                The OTS Sanction Letter Audit: Mandatory Clauses &amp; The ₹0 NDC Mandate
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                A major hazard in settling small-ticket loans is falling victim to unauthorized recovery agent fraud. In countless instances, borrowers transfer funds based on verbal promises or fraudulent WhatsApp receipts, only to discover that the bank credited the payment toward partial overdue interest while keeping the ₹2 Lakh loan delinquent.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                To protect against fraud, borrowers must insist on an official <strong>OTS Sanction Letter</strong> printed on the bank&apos;s authorized letterhead, bearing the signature and seal of an authorized branch manager or SARB official. The document must explicitly specify the exact settlement amount, payment deadlines, and contain an unambiguous clause affirming that upon receipt of the settlement sum, all remaining principal, interest, and charges stand fully waived and the loan account will be closed.
              </p>
              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                Additionally, under <strong>RBI Circular RBI/2023-24/60</strong>, regulated financial entities are legally obligated to release a formal <strong>₹0 No Dues Certificate (NDC) / Loan Closure Certificate</strong> within <strong>30 calendar days</strong> of receiving the final settlement tranche. Any unexcused delay by the bank triggers statutory penalty compensation of ₹5,000 per day payable directly to the borrower.
              </p>
            </section>

            {/* Section 10: CIBIL Score Aftermath & 18–24 Month Credit Rebuilding Strategy */}
            <section id="cibil-score-trajectory-rebuilding" className="scroll-mt-24">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>9. CIBIL Score Trajectory &amp; Rehabilitation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                CIBIL Score Impact &amp; 18–24 Month Credit Rebuilding Blueprint Post-Settlement
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Following the execution of an OTS on a ₹2 Lakh personal loan, the lending institution updates the four RBI-licensed credit information companies (TransUnion CIBIL, Experian, Equifax, and CRIF High Mark), changing the account status to <strong>&apos;Settled&apos;</strong> and reducing the current balance to <strong>₹0</strong>.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                While a &apos;Settled&apos; notation results in an initial credit score reduction of 75 to 120 points and triggers an RBI-mandated 12-month cooling window, it permanently terminates the continuous month-on-month credit degradation caused by accumulating delinquency counters. Eliminating the active default status is the crucial first step toward restoring financial credibility.
              </p>
              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                Rebuilding your credit profile post-settlement follows a systematic, proven strategy. By securing a credit card backed by a modest fixed deposit of ₹15,000 to ₹30,000, maintaining credit utilization strictly below 25%, and settling all monthly billing statements on time, borrowers routinely elevate their CIBIL score back above <strong>750+ within 18 to 24 months</strong>, regaining full eligibility for home loans and vehicle financing.
              </p>
            </section>

            {/* Section 11: SettleLoans Legal Defense & Professional Negotiation Services */}
            <section id="company-resolution-section" className="scroll-mt-24">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>10. Legal Defense &amp; Representation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Why Distressed Borrowers Choose SettleLoans for ₹2 Lakh Loan Resolution
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Negotiating an equitable settlement on a ₹2 Lakh personal loan requires seasoned banking litigation counsel. The legal advocates and debt strategists at SettleLoans provide comprehensive protection: issuing immediate cease-and-desist notices to halt collection agent harassment, auditing bank provisioning buckets, and negotiating directly with Zonal Credit Committees to secure the highest permissible debt waiver under RBI frameworks.
              </p>

              {/* Placement of Reusable CompanySection */}
              <div className="my-8">
                <CompanySection />
              </div>
            </section>

            {/* Section 12: Frequently Asked Questions (FAQ Accordion) */}
            <section id="faqs" className="scroll-mt-24">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>11. Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                Frequently Asked Questions About Settling a ₹2 Lakh Personal Loan
              </h2>

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

            {/* Regulatory References & Official Sources Strip */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-[#1F5EFF]" />
                Official Regulatory References &amp; Statutory Frameworks
              </h3>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Reserve Bank of India (RBI):</strong> Master Direction on Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24)
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>RBI Master Circular:</strong> Fair Practices Code for Regulated Entities &amp; Code of Conduct for Direct Recovery Agents
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
                    <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Official Portal for Coercive Recovery &amp; Settlement Non-Compliance Grievances
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
                    <strong>National Legal Services Authority (NALSA):</strong> Legal Services Authorities Act, 1987 — National Lok Adalat Dispute Settlement Framework
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>TransUnion CIBIL Limited:</strong> Credit Information Companies (Regulation) Act, 2005 — Loan Closure &amp; Settlement Reporting Norms
                  </a>
                </li>
              </ul>
            </div>

            {/* Related Guides & Resources Strip (10 Topic Badges) */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#1F5EFF]" />
                Explore Related Banking &amp; Debt Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2.5">
                <Link
                  href="/5-lakh-personal-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  5 Lakh Personal Loan Settlement
                </Link>
                <Link
                  href="/10-lakh-personal-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  10 Lakh Personal Loan Settlement
                </Link>
                <Link
                  href="/instant-app-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Instant App Loan Settlement
                </Link>
                <Link
                  href="/personal-loan-settlement-percentage"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement Percentage
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Bank OTS Settlement Policy
                </Link>
                <Link
                  href="/personal-loan-legal-notice"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Legal Notice
                </Link>
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Lok Adalat Loan Settlement
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Can I Go To Jail For Loan Default?
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Loan Settlement CIBIL Impact
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  No Dues Certificate (NDC) Guide
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
                    Lead Banking Legal &amp; Debt Settlement Strategist
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Ashish has led over 1,850+ successful bank compromise negotiations across SBI, HDFC Bank, ICICI, Axis Bank, and leading NBFCs. He specializes in retail banking NPA haircuts, SARB conciliation, and borrower legal defense under RBI Master Directions.
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
                <span>₹2 Lakh Loan Settlement</span>
              </div>
              <div className="text-xl font-black mb-3 leading-tight">
                Facing ₹2 Lakh Personal Loan Default?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Stop collection harassment today. Let our banking advocates audit your loan statement, structure your hardship docket, and secure an official bank stamped OTS sanction letter.
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
              <div className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                <span>Why Borrowers Trust SettleLoans</span>
              </div>
              <ul className="space-y-3.5 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct Bank Negotiations:</strong> We bypass third-party collection agencies to represent your case directly before Bank Credit Committees and SARB.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Protection:</strong> Immediate legal cease-and-desist notices to stop workplace visits and unauthorized reference calls under RBI rules.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Stamped Verification:</strong> Every settlement is verified through a formal bank letterhead sanction before any payment is remitted.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed ₹0 NDC:</strong> Complete end-to-end tracking until your formal No Dues Certificate is delivered and CIBIL status is updated.
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
