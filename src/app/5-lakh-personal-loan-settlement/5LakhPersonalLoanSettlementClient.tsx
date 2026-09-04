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

export default function FiveLakhPersonalLoanSettlementClient() {
  const [activeId, setActiveId] = useState<string>('institutional-context-5-lakh-loan');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'institutional-context-5-lakh-loan', title: '1. The ₹5 Lakh Unsecured Debt Reality' },
    { id: 'npa-provisioning-timeline-5-lakh', title: '2. Delinquency Timeline & NPA Aging' },
    { id: 'realistic-settlement-percentages-haircut-formula', title: '3. Haircut Formula & Realistic Slabs' },
    { id: 'recovery-agent-harassment-5-lakh-bracket', title: '4. Recovery Tactics & Harassment Defense' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Resolution Blueprint' },
    { id: 'step-by-step-settlement-roadmap', title: '6. Step-by-Step Settlement Roadmap' },
    { id: 'legal-exposure-section-138-pssa-civil-suit', title: '7. Section 138, Section 25 & Civil Law' },
    { id: 'ots-vs-lok-adalat-vs-restructuring', title: '8. Comparative Resolution Avenues' },
    { id: 'sanction-letter-audit-ndc-mandate', title: '9. Sanction Letter Audit & ₹0 NDC' },
    { id: 'cibil-score-trajectory-rebuilding', title: '10. CIBIL Impact & Credit Rebuilding' },
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
      question: "How much can I realistically settle a ₹5 Lakh personal loan for in India?",
      answer: (
        <p>
          For an unsecured ₹5 Lakh personal loan in deep default (over 120 to 180 days past due), realistic One-Time Settlement (OTS) amounts typically range between <strong>₹1.5 Lakhs and ₹2.5 Lakhs</strong>, representing a substantial <strong>50% to 70% debt haircut</strong>. In virtually all approved compromise settlements executed under RBI frameworks, 100% of penal interest, late payment surcharges, and cheque bounce penalties are waived outright, while the core principal is discounted based on documented financial insolvency.
        </p>
      )
    },
    {
      question: "What is the typical timeline for settling a ₹5 Lakh personal loan default?",
      answer: (
        <p>
          A standard ₹5 Lakh personal loan settlement takes between <strong>3 to 6 months</strong> from the date of the first missed EMI. The loan transitions through Special Mention Account stages (SMA-0, SMA-1, and SMA-2) before being classified as a Non-Performing Asset (NPA) at 90 days. The sweet spot for negotiating maximum debt waivers occurs between Day 120 and Day 180, when the lending institution has absorbed balance-sheet provisioning allocations and internal credit committees are authorized to sanction deep compromise settlements.
        </p>
      )
    },
    {
      question: "Can a bank file a police case or arrest you for defaulting on a ₹5 Lakh personal loan?",
      answer: (
        <p>
          <strong>No. Defaulting on an unsecured personal loan is strictly a civil matter</strong> governed by the Indian Contract Act, 1872. The police possess zero legal jurisdiction to register an FIR, arrest you, or summon you to a police station for genuine financial default. However, if repayment cheques bounce or automated NACH mandates fail due to insufficient funds, the lender can file statutory complaints under <strong>Section 138 of the Negotiable Instruments Act</strong> or <strong>Section 25 of the PSSA</strong> in a Magistrate Court, which can be resolved through legal representation and compromise settlement.
        </p>
      )
    },
    {
      question: "Why are recovery agents so aggressive for a ₹5 Lakh loan default?",
      answer: (
        <p>
          The ₹5 Lakh bracket represents an intense operational recovery zone for banks and NBFCs. Because the debt is below the ₹20 Lakh threshold required to approach the Debt Recovery Tribunal (DRT), and filing a full civil summary suit incurs substantial legal expenses, financial institutions outsource these accounts to third-party <strong>Debt Recovery Agencies (DRAs)</strong> on lucrative commission structures (10% to 20% of recovered cash). This economic incentive drives aggressive calling and unauthorized visits, which can be immediately halted by invoking the <strong>RBI Master Directions on Recovery Agents (2022)</strong>.
        </p>
      )
    },
    {
      question: "Can the bank seize my salary account or personal property for a ₹5 Lakh unsecured default?",
      answer: (
        <p>
          Under the legal doctrine of <strong>Banker&apos;s Right of General Lien and Set-Off (Section 171 of the Indian Contract Act)</strong>, a lender can only deduct funds from accounts held within the same banking institution under the same PAN/CIF. They have no legal authority to attach or debit salary accounts maintained with other independent banks, nor can they seize your residential home, vehicle, or personal belongings without obtaining a formal attachment decree through lengthy civil court proceedings.
        </p>
      )
    },
    {
      question: "Can I settle a ₹5 Lakh personal loan through National Lok Adalat?",
      answer: (
        <p>
          <strong>Yes. National Lok Adalats</strong> organized quarterly by District Legal Services Authorities (DLSA) under the Legal Services Authorities Act, 1987, provide an outstanding legal avenue for resolving ₹5 Lakh loan disputes. Banks participate with pre-approved settlement discount mandates (frequently offering 45% to 65% waivers). The award issued by the Lok Adalat bench holds the status of a <strong>final Civil Court Decree with zero court fees</strong>, ensuring absolute closure with no right of appeal.
        </p>
      )
    },
    {
      question: "What must I check in the OTS Sanction Letter before paying settlement money?",
      answer: (
        <p>
          Borrowers must verify five non-negotiable elements: (1) The letter must be printed on official bank letterhead with an authorized officer&apos;s signature and branch seal; (2) Your exact loan account number and full name must be accurately stated; (3) The negotiated settlement sum and payment schedule must match precisely; (4) The letter must contain a clear clause stating that upon payment, all residual claims stand fully extinguished; and (5) The letter must guarantee the issuance of a <strong>₹0 No Dues Certificate within 30 days</strong>. Never pay based on WhatsApp messages or oral promises.
        </p>
      )
    },
    {
      question: "How does settling a ₹5 Lakh personal loan impact my CIBIL score?",
      answer: (
        <p>
          Following settlement, the bank updates the credit bureaus (CIBIL, Experian, Equifax, CRIF) to <strong>&apos;Settled&apos;</strong> with an outstanding balance of <strong>₹0</strong>. This entry leads to an immediate credit score dip of 75 to 150 points and triggers a mandatory 12-month cooling period under RBI directives. However, settling stops compounding default penalties and allows you to systematically rebuild your credit score back to 750+ within 18 to 24 months using a secured credit card backed by a fixed deposit.
        </p>
      )
    },
    {
      question: "What should I do if recovery agents visit my workplace or harass family members?",
      answer: (
        <p>
          Such conduct is a direct violation of the <strong>RBI Master Directions on Recovery Agents (2022)</strong> and the <em>Fair Practices Code</em>. You should document all interactions, demand the recovery agent&apos;s DRA certification and bank authorization letter, serve a formal legal cease-and-desist notice through an advocate, escalate the matter to the bank&apos;s Principal Nodal Officer (PNO), and lodge an official grievance on the RBI Integrated Ombudsman portal (cms.rbi.org.in).
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
            <span>₹5 Lakh Debt Resolution Blueprint • RBI OTS Framework</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            How to Settle ₹5 Lakh Personal Loan: <span className="text-[#3b82f6] md:text-[#60a5fa]">Realistic Haircuts, Timelines &amp; Legal Defense</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Defaulted on a ₹5,00,000 unsecured personal loan across SBI, HDFC, ICICI, Axis, or an NBFC? Discover the mathematical OTS formula to settle for ₹1.5L–₹2.5L, halt aggressive recovery harassment under RBI laws, and obtain a stamped ₹0 No Dues Certificate.
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
                <span>₹5 Lakh Quick Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                A ₹5 Lakh default is below the ₹20L DRT threshold, incentivizing banks to accept 50%–70% OTS haircuts (₹1.5L–₹2.5L) rather than incurring prolonged civil litigation expenses.
              </p>
            </div>
          </aside>

          {/* Middle Column (Editorial Narrative & Tables) */}
          <main className="w-full blog-content space-y-10 min-w-0">
            
            {/* Section 1: The ₹5 Lakh Unsecured Debt Reality in India */}
            <section id="institutional-context-5-lakh-loan" className="scroll-mt-24">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4" />
                <span>1. Institutional Banking Context &amp; Risk Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                The ₹5 Lakh Unsecured Debt Reality: Institutional Banking Risk vs. Borrower Anxiety
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                In India&apos;s retail lending landscape, a <strong>₹5,00,000 personal loan</strong> occupies a unique socio-economic position. For salaried professionals and small business owners, an outstanding ₹5 Lakh default triggers intense psychological dread, amplified by relentless collection phone calls, workplace embarrassment threats, and legal notices referencing criminal provisions. Borrowers frequently assume that defaulting on this specific sum will inevitably lead to property attachment or police arrest.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                From the institutional accounting perspective of commercial banks and Non-Banking Financial Companies (NBFCs), however, an unsecured ₹5 Lakh exposure represents a manageable retail credit risk governed strictly by statutory <strong>Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP)</strong> established by the Reserve Bank of India. Because an unsecured personal loan lacks underlying collateral, lenders cannot initiate summary asset auctions under the SARFAESI Act, 2002.
              </p>
              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                Furthermore, because the outstanding balance sits well below the <strong>₹20,00,000 pecuniary jurisdiction threshold</strong> required to institute recovery proceedings before the Debt Recovery Tribunal (DRT), the lender&apos;s sole judicial recourse is a conventional civil summary suit under Order 37 of the Code of Civil Procedure (CPC). Given that commercial litigation costs and court fees in Indian civil courts regularly exceed 15% to 25% of the claimed debt, banks face a powerful economic incentive to resolve ₹5 Lakh defaults via negotiated compromise settlements.
              </p>
            </section>

            {/* Section 2: Delinquency Timeline & RBI NPA Provisioning Dynamics */}
            <section id="npa-provisioning-timeline-5-lakh" className="scroll-mt-24">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>2. Delinquency Timeline &amp; NPA Aging</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Delinquency Timeline &amp; RBI NPA Provisioning Dynamics for a ₹5 Lakh Default
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When a borrower fails to service consecutive monthly EMIs on a ₹5 Lakh personal loan, the account progresses through tightly structured statutory stages mandated by the RBI Master Framework on Stressed Assets. Understanding this delinquency trajectory is critical, as the bank&apos;s willingness to offer deep debt waivers increases proportionally with the aging of the default on its quarterly balance sheet.
              </p>
              
              {/* Table 1: Delinquency Stages & Provisioning Impact */}
              <div className="my-6 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="font-bold text-slate-900">Delinquency Stage</th>
                      <th className="font-bold text-slate-900">Days Past Due (DPD)</th>
                      <th className="font-bold text-slate-900">Bank Balance Sheet Provisioning</th>
                      <th className="font-bold text-slate-900">Primary Bank Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-800">SMA-0 (Early Alert)</td>
                      <td>1 – 30 Days</td>
                      <td>Standard Provision (0.40%)</td>
                      <td>Internal automated SMS, IVR calls, and tele-calling follow-ups.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-800">SMA-1 (Moderate Stress)</td>
                      <td>31 – 60 Days</td>
                      <td>Standard Provision (0.40%)</td>
                      <td>Senior branch calls, late fee accruals, and NACH bounce notices.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-800">SMA-2 (Imminent Default)</td>
                      <td>61 – 90 Days</td>
                      <td>Standard Provision (0.40%)</td>
                      <td>Intensive recovery outreach; loan recall demand letter dispatched.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-800">Substandard NPA</td>
                      <td>91 – 365 Days</td>
                      <td>Mandatory 25% Unsecured Provision</td>
                      <td>Outsourced to third-party DRAs; initial OTS compromise discussions.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-800">Doubtful / Loss Asset</td>
                      <td>365+ Days</td>
                      <td>100% Full Balance Sheet Provision</td>
                      <td>Transferred to SARB; maximum 50%–70% OTS haircut authorization.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                During the early Special Mention Account stages (SMA-0 to SMA-2), the lender treats the default as temporary delinquency, refusing any debt waiver. Once the account crosses <strong>90 Days Past Due</strong>, however, the bank must classify the asset as a Non-Performing Asset (NPA) and quarantine a mandatory 25% provisioning charge against its operating profits. Once the default exceeds 12 to 18 months, the bank provisions 100% of the loan amount, effectively recognizing the ₹5 Lakh asset as a total accounting loss. At this juncture, any recovered capital directly boosts the bank&apos;s bottom line as write-back profit, paving the way for maximum compromise concessions.
              </p>
            </section>

            {/* Section 3: The Mathematical Haircut Formula & Realistic Slabs */}
            <section id="realistic-settlement-percentages-haircut-formula" className="scroll-mt-24">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>3. Haircut Formula &amp; Realistic Settlement Slabs</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                The Mathematical Haircut Formula: Realistic Settlement Slabs for a ₹5,00,000 Loan
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                A common misconception among distressed borrowers is that loan settlements are arbitrary or based solely on aggressive arguing with field recovery agents. In reality, every institutional settlement in India is governed by the <strong>RBI Master Direction on Compromise Settlements and Technical Write-offs (2023)</strong>. Bank Credit Approval Committees calculate compromise terms using a rigorous <em>Net Present Value (NPV) Recovery Formula</em>:
              </p>
              
              {/* Highlighted Statutory Callout Box */}
              <div className="bg-slate-50 border-l-4 border-[#1F5EFF] p-5 rounded-r-2xl my-6">
                <h3 className="text-slate-900 font-bold text-base mb-2 flex items-center gap-2">
                  <Info className="w-5 h-5 text-[#1F5EFF]" />
                  Statutory Net Present Value (NPV) Valuation Rule
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Under RBI compromise guidelines, the settlement amount offered by the borrower must be greater than or equal to the Net Present Value of the estimated net realisable recovery through legal proceedings, discounted at the bank&apos;s prevailing base lending rate over a 3-to-5 year litigation horizon minus anticipated judicial expenses.
                </p>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Because an unsecured ₹5 Lakh personal loan has zero underlying physical collateral to liquidate, the estimated judicial recovery value after accounting for lawyer retainers, court fees, and execution delays is negligible. Consequently, the bank&apos;s internal financial model readily validates settlements in the <strong>₹1.50 Lakh to ₹2.50 Lakh range</strong>.
              </p>

              {/* Table 2: ₹5 Lakh Loan Settlement Slabs */}
              <div className="my-6 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="font-bold text-slate-900">Borrower Circumstance &amp; Default Bucket</th>
                      <th className="font-bold text-slate-900">Realistic Haircut (%)</th>
                      <th className="font-bold text-slate-900">Final Settlement Amount</th>
                      <th className="font-bold text-slate-900">Total Waiver (Waiver of Fees + Principal)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-800">Early NPA (90–120 DPD, Temporary Loss)</td>
                      <td>35% – 45%</td>
                      <td>₹2,75,000 – ₹3,25,000</td>
                      <td>100% Penal Charges + ₹1.75L–₹2.25L Principal Waiver</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-800">Substandard NPA (120–240 DPD, Documented Hardship)</td>
                      <td>50% – 60%</td>
                      <td>₹2,00,000 – ₹2,50,000</td>
                      <td>100% Penal Charges + ₹2.50L–₹3.00L Principal Waiver</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-800">Deep Default / Doubtful Asset (240–365+ DPD)</td>
                      <td>60% – 70%</td>
                      <td>₹1,50,000 – ₹2,00,000</td>
                      <td>100% Penal Charges + ₹3.00L–₹3.50L Principal Waiver</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-800">Catastrophic Hardship (Medical Disability / Insolvency)</td>
                      <td>70% – 75%</td>
                      <td>₹1,25,000 – ₹1,50,000</td>
                      <td>100% Penal Charges + ₹3.50L–₹3.75L Principal Waiver</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                As illustrated above, borrowers who present authentic, verifiable hardship documentation—such as medical discharge summaries, termination letters, or certified balance sheets showing severe revenue collapse—routinely secure <strong>55% to 70% debt waivers</strong>, resolving a ₹5,00,000 burden for an affordable lump sum of ₹1.5 to ₹2.25 Lakhs.
              </p>
            </section>

            {/* Section 4: Collection Agency Dynamics & Recovery Harassment for the ₹5 Lakh Bracket */}
            <section id="recovery-agent-harassment-5-lakh-bracket" className="scroll-mt-24">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>4. Recovery Dynamics &amp; Anti-Harassment Law</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Collection Agency Tactics &amp; Recovery Harassment in the ₹5 Lakh Bracket
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Why is recovery pressure disproportionately intense for a ₹5 Lakh personal loan default? In Indian retail banking, loan defaults below ₹1 Lakh are frequently written off through automated software protocols, while defaults exceeding ₹25 Lakhs are assigned to institutional litigation departments. The ₹3 Lakh to ₹10 Lakh bracket, therefore, represents the primary revenue engine for empaneled <strong>Debt Recovery Agencies (DRAs)</strong>.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Agency executives operate on performance-based recovery incentives, earning commissions between 10% and 20% on any funds collected. To extract payments, collection agents often deploy coercive techniques that directly violate statutory banking regulations. These include making continuous calls outside permitted hours, threatening home or workplace confrontations, attempting to shame borrowers before employers or neighbors, and contacting personal references scraped from initial loan applications.
              </p>
              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                Under the <strong>RBI Master Circular on Fair Practices Code</strong> and the landmark Supreme Court ruling in <em>ICICI Bank Ltd. v. Prakash Kaur (2007)</em>, borrowers enjoy comprehensive legal protections. Lenders and their agents are strictly prohibited from using abusive language, visiting workplaces without express consent, contacting borrowers before 08:00 AM or after 07:00 PM, or intimidating family members. Serving a formal advocate cease-and-desist notice halts these tactics immediately by holding bank nodal officers personally accountable.
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
                        5 Lakh Personal Loan Settlement Roadmap &amp; Haircut Matrix
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/5-lakh-personal-loan-settlement.jpg"
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
                      src="/images/infographics/5-lakh-personal-loan-settlement.jpg"
                      alt="5 Lakh Personal Loan Settlement Process and Haircut Matrix Infographic"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Takeaway:</strong> A ₹5 Lakh unsecured default qualifies for a 50%–70% OTS waiver under RBI IRACP provisioning rules.</span>
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
                Step-by-Step Strategic Roadmap to Settle a ₹5 Lakh Loan Compromise
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Successfully settling an unsecured ₹5 Lakh personal loan requires disciplined execution across five chronological phases, shifting negotiation power from commission-driven recovery agents directly to the bank&apos;s Stressed Assets Resolution Branch (SARB) or Zonal Settlement Committee.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The process begins by establishing formal written communication during the 90-to-120 day NPA window. Borrowers must submit a comprehensive <strong>Hardship Docket</strong> comprising salary slips showing reduced income, medical treatment records, or bank statements proving genuine insolvency. This documentation establishes that the default is a bona fide commercial failure rather than wilful evasion.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Once the Hardship Docket is lodged, all verbal interactions with field agents are redirected to formal written channels. When the bank table an opening settlement offer—typically requesting 70% to 80% of the ledger balance—the borrower submits a reasoned counter-proposal anchored at 30% to 40% of the principal sum. Through iterative rounds over 4 to 8 weeks, consensus is achieved within the realistic <strong>40% to 50% principal bracket (₹2.0L–₹2.5L)</strong>, backed by an official stamped sanction letter.
              </p>
            </section>

            {/* Section 7: Legal Vulnerabilities: Section 138 NI Act, Section 25 PSSA, and Civil Suits */}
            <section id="legal-exposure-section-138-pssa-civil-suit" className="scroll-mt-24">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>6. Legal Landscape &amp; Defense Protocols</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Legal Exposure for ₹5 Lakh Defaults: Section 138 NI Act, Section 25 PSSA &amp; Civil Suits
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                A primary source of anxiety for borrowers defaulting on a ₹5 Lakh loan is the fear of criminal prosecution. It is an immutable principle of Indian jurisprudence that pure financial inability to repay an unsecured debt does not constitute a criminal offence. The police have no statutory authority to register an FIR under Section 420 of the Indian Penal Code (or Section 318 of the Bharatiya Nyaya Sanhita, 2023) unless the lender can demonstrate fraudulent inducement at the inception of the loan.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                However, lenders utilize two specific quasi-criminal provisions to exert legal pressure: <strong>Section 138 of the Negotiable Instruments Act, 1881</strong> (for dishonoured repayment cheques) and <strong>Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA)</strong> (for bounced electronic NACH/e-mandates). When an EMI bounces, the bank must issue a statutory 30-day demand notice. If unpaid, a complaint is filed before a Judicial Magistrate.
              </p>
              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                These quasi-criminal complaints are compoundable offences under Section 147 of the NI Act. When represented by experienced banking counsel, Section 138 and Section 25 proceedings serve as powerful catalysts for compromise settlement. Once an OTS agreement is executed and the settlement amount remitted, the bank is legally bound to withdraw all court complaints, granting the borrower complete civil and criminal immunity.
              </p>
            </section>

            {/* Section 8: Bilateral OTS vs. National Lok Adalat vs. Loan Restructuring */}
            <section id="ots-vs-lok-adalat-vs-restructuring" className="scroll-mt-24">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>7. Comparative Resolution Avenues</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Bilateral OTS vs. National Lok Adalat vs. Loan Restructuring for ₹5 Lakh Exposure
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers struggling with a ₹5 Lakh default have three distinct legal mechanisms available for resolving their debt obligations. Choosing the optimal avenue depends on current liquidity, future income stability, and immediate legal exposure.
              </p>

              {/* Table 3: Comparative Resolution Channels */}
              <div className="my-6 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="font-bold text-slate-900">Resolution Pathway</th>
                      <th className="font-bold text-slate-900">Typical Debt Waiver (%)</th>
                      <th className="font-bold text-slate-900">Legal Finality &amp; Judicial Status</th>
                      <th className="font-bold text-slate-900">Ideal Borrower Profile</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-800">Bilateral Bank OTS</td>
                      <td>50% – 70% Principal + 100% Fees</td>
                      <td>Contractual Settlement via Bank Sanction Letter</td>
                      <td>Borrowers with lump-sum liquidity (₹1.5L–₹2.5L) seeking rapid closure.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-800">National Lok Adalat</td>
                      <td>45% – 65% Principal + 100% Fees</td>
                      <td>Civil Court Decree (No appeal lies under Section 21 NALSA)</td>
                      <td>Borrowers with active court notices or pending Section 138 complaints.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-800">Loan Restructuring / Rescheduling</td>
                      <td>0% (Tenure extended, EMI reduced)</td>
                      <td>Modified Loan Agreement with regular interest accruals</td>
                      <td>Borrowers with restored steady income wishing to preserve credit score.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                While loan restructuring preserves your credit rating by avoiding a &apos;Settled&apos; remark, it substantially increases your total interest payout over an extended 5-to-7 year tenure. For borrowers experiencing permanent income disruption, a <strong>Bilateral OTS or Lok Adalat compromise</strong> provides immediate debt extinguishment at a fraction of the original ₹5 Lakh obligation.
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
                A critical vulnerability in retail loan settlements is making payments based on fraudulent or unauthorized assurances from collection executives. Over 30% of individual disputes arise when a borrower pays money into an account based on verbal promises, only to find the bank applied the funds toward partial overdue interest while keeping the ₹5 Lakh loan active.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                To guarantee legal finality, the borrower must insist on an authentic <strong>OTS Sanction Letter</strong> issued on official bank letterhead bearing the physical or digital signature of an authorized signatory (Manager, AVP, or SARB Head) along with the branch stamp. The letter must unambiguously state the negotiated settlement figure, specify the exact payment due dates, and confirm that all remaining dues stand waived upon receipt.
              </p>
              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                Furthermore, under <strong>RBI Circular RBI/2023-24/60</strong>, the lending institution is legally mandated to issue a formal <strong>₹0 No Dues Certificate (NDC) / Loan Closure Certificate</strong> within <strong>30 calendar days</strong> of receiving the final settlement tranche. Any failure or delay by the bank incurs statutory compensation of ₹5,000 per day payable directly to the borrower.
              </p>
            </section>

            {/* Section 10: CIBIL Score Aftermath & 24-Month Credit Rebuilding Strategy */}
            <section id="cibil-score-trajectory-rebuilding" className="scroll-mt-24">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>9. CIBIL Score Trajectory &amp; Rehabilitation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                CIBIL Score Impact &amp; 24-Month Credit Rebuilding Blueprint Post-Settlement
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Following the execution of a compromise settlement on a ₹5 Lakh personal loan, the lending institution updates the four RBI-licensed credit bureaus (TransUnion CIBIL, Experian, Equifax, and CRIF High Mark), replacing the delinquent status with a <strong>&apos;Settled&apos;</strong> remark and setting the outstanding balance to exactly <strong>₹0</strong>.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                While a &apos;Settled&apos; tag causes an immediate CIBIL score drop of 75 to 150 points and triggers a mandatory 12-month cooling-off window under RBI rules, it permanently stops the severe month-on-month credit degradation caused by compounding unpaid DPD counters. Eliminating the active default status is the foundational prerequisite for rebuilding financial health.
              </p>
              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                Rebuilding a credit profile post-settlement is a predictable, systematic process. By opening a fixed deposit of ₹20,000 to ₹50,000 to secure a collateralized credit card, maintaining monthly credit utilization strictly under 25%, and repaying all statement balances punctually on the due date, borrowers routinely elevate their CIBIL score back above <strong>750+ within 18 to 24 months</strong>, regaining full eligibility for home loans and vehicle financing.
              </p>
            </section>

            {/* Section 11: SettleLoans Legal Defense & Professional Negotiation Services */}
            <section id="company-resolution-section" className="scroll-mt-24">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>10. Legal Defense &amp; Representation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Why Distressed Borrowers Choose SettleLoans for ₹5 Lakh Loan Resolution
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Negotiating an equitable compromise settlement on a ₹5 Lakh personal loan requires seasoned banking litigation counsel. The legal advocates and debt strategists at SettleLoans provide comprehensive protection: issuing immediate cease-and-desist notices to halt collection agent harassment, auditing bank provisioning buckets, and negotiating directly with Zonal Credit Committees to secure the highest permissible debt waiver under RBI frameworks.
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
                Frequently Asked Questions About Settling a ₹5 Lakh Personal Loan
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
                  href="/personal-loan-settlement-percentage"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement Percentage
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Bank One-Time Settlement (OTS) Policy
                </Link>
                <Link
                  href="/personal-loan-settlement-letter-format"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement Letter Format
                </Link>
                <Link
                  href="/hdfc-personal-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  HDFC Personal Loan Settlement
                </Link>
                <Link
                  href="/sbi-personal-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  SBI Personal Loan Settlement
                </Link>
                <Link
                  href="/icici-personal-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  ICICI Personal Loan Settlement
                </Link>
                <Link
                  href="/bajaj-finance-personal-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Bajaj Finance Loan Settlement
                </Link>
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Lok Adalat Notice for Personal Loan
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement CIBIL Impact
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
                <span>₹5 Lakh Loan Settlement</span>
              </div>
              <div className="text-xl font-black mb-3 leading-tight">
                Facing ₹5 Lakh Personal Loan Default?
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
