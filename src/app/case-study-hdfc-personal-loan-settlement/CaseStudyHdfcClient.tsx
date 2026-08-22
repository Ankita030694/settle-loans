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

export default function CaseStudyHdfcClient() {
  const [activeId, setActiveId] = useState<string>('case-background-borrower-profile');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'case-background-borrower-profile', title: '1. Borrower Profile & Layoff Crisis' },
    { id: 'banking-accounting-npa-provisioning', title: '2. HDFC Bank NPA Provisioning Rules' },
    { id: 'hardship-audit-npv-valuation', title: '3. Hardship Dossier & NPV Valuation' },
    { id: 'recovery-containment-legal-defense', title: '4. Anti-Harassment & Legal Notices' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Resolution Blueprint' },
    { id: 'sarb-negotiation-haircut-breakdown', title: '6. Negotiating the 60% Haircut' },
    { id: 'sanction-letter-forensics-payment', title: '7. Sanction Letter Audit & Protocols' },
    { id: 'no-dues-certificate-cibil-trajectory', title: '8. ₹0 NDC & CIBIL Rehabilitation' },
    { id: 'ots-vs-litigation-comparative-matrix', title: '9. Comparative Resolution Matrix' },
    { id: 'company-resolution-section', title: '10. SettleLoans Legal Representation' },
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
      question: "Does HDFC Bank actually agree to settle unsecured personal loans with a 60% haircut?",
      answer: (
        <p>
          Yes. HDFC Bank regularly sanctions One-Time Settlements (OTS) with haircuts ranging between <strong>50% and 65%</strong> for unsecured personal loans, Jumbo loans, and credit cards when genuine, verifiable hardship is established. When an account enters deep default (NPA Substandard or Doubtful D1/D2) and the bank has absorbed substantial balance-sheet provisioning, the Stressed Assets Resolution Group (SARB) calculates that recovering a lump-sum OTS amount yields a higher Net Present Value (NPV) than costly, uncertain civil litigation.
        </p>
      )
    },
    {
      question: "How was the ₹8 Lakh HDFC loan settled for ₹3.2 Lakhs in this case study?",
      answer: (
        <p>
          The borrower experienced sudden job loss and could no longer pay the ₹24,500 monthly EMI. After the loan crossed 90 days into NPA status, SettleLoans compiled a comprehensive hardship dossier comprising the corporate termination letter, severance records, and bank statements showing zero income. SettleLoans bypassed third-party collection agents to negotiate directly with HDFC&apos;s Stressed Assets Resolution Branch, securing a <strong>60% principal discount (₹3.2 Lakhs)</strong> and 100% waiver of accrued penal interest and late fees.
        </p>
      )
    },
    {
      question: "What hardship proof is required to convince HDFC Bank to approve an OTS?",
      answer: (
        <p>
          To secure approval from HDFC&apos;s Competent Credit Committee, the borrower must prove genuine inability to repay rather than willful default. Standard hardship documentation includes: (1) Official employer termination letter or pink slip; (2) Bank account statements for 6 to 12 months reflecting absence of regular salary inflows; (3) Medical diagnostic reports and hospital discharge summaries if illness caused the default; (4) Proof of business closure or revenue collapse for self-employed individuals; (5) An audited statement of monthly living expenses.
        </p>
      )
    },
    {
      question: "How does HDFC Bank calculate the minimum acceptable settlement amount (haircut formula)?",
      answer: (
        <p>
          HDFC Bank evaluates OTS proposals using a <strong>Net Present Value (NPV) recovery formula</strong>. The Credit Committee compares the immediate cash inflow from the proposed settlement against the present discounted value of potential future legal recoveries minus litigation expenses, advocate fees, court execution delays (typically 3–5 years in Indian civil courts), and the cost of provisioning capital locked up against the NPA.
        </p>
      )
    },
    {
      question: "How can borrowers stop aggressive HDFC recovery agent harassment during settlement talks?",
      answer: (
        <p>
          Under the <strong>RBI Master Directions on Recovery Agents (2022)</strong> and the Fair Practices Code, collection agents are legally prohibited from calling outside 08:00 AM to 07:00 PM, visiting workplaces without consent, using abusive language, or contacting friends, relatives, and colleagues. Borrowers can serve a formal legal cease-and-desist notice to HDFC Bank&apos;s Principal Nodal Officer (PNO) and file a complaint on the RBI Integrated Ombudsman portal (cms.rbi.org.in).
        </p>
      )
    },
    {
      question: "Can HDFC Bank file a criminal case or have the borrower arrested for personal loan default?",
      answer: (
        <p>
          <strong>No.</strong> Personal loan default is strictly a civil breach of contract under the Indian Contract Act, 1872. The police cannot register an FIR, summon you, or make an arrest for financial inability to service an unsecured loan. However, if an EMI repayment cheque bounces or a NACH mandate fails, the bank may issue statutory legal notices under Section 138 of the Negotiable Instruments Act, 1881, or Section 25 of the Payment and Settlement Systems Act, 2007, which can be settled and closed through proper legal representation.
        </p>
      )
    },
    {
      question: "What must be verified in an HDFC Bank OTS Sanction Letter before paying the money?",
      answer: (
        <p>
          Before depositing any settlement funds, ensure: (1) The letter is on official HDFC Bank letterhead with a physical stamp or verifiable digital signature and employee code; (2) The document explicitly mentions the exact settlement amount (e.g., ₹3,20,000) as full and final discharge; (3) It contains a clear clause confirming 100% waiver of balance principal, penal interest, and legal charges; (4) It commits to issuing a No Dues Certificate (NDC) and closing all pending legal proceedings; (5) Payment is made directly into your HDFC loan account, never to an individual or collection agency.
        </p>
      )
    },
    {
      question: "How does an HDFC personal loan settlement impact CIBIL score and how can it be rebuilt?",
      answer: (
        <p>
          Following settlement, HDFC Bank updates credit bureaus with a <strong>&apos;Settled&apos;</strong> or <strong>&apos;Post-Write-off Settled&apos;</strong> remark and an outstanding balance of <strong>₹0</strong>. This causes an initial drop of 75 to 150 points in the CIBIL score. However, because the loan is closed and active default accumulation stops, borrowers can systematically rehabilitate their credit score back to 750+ within 18 to 24 months by using a secured fixed-deposit credit card, maintaining credit utilization under 30%, and ensuring zero missed payments.
        </p>
      )
    },
    {
      question: "How long does HDFC Bank take to issue the No Dues Certificate (NDC) after settlement?",
      answer: (
        <p>
          Under <strong>RBI Circular RBI/2023-24/60</strong>, all regulated commercial banks including HDFC Bank are required to issue the formal No Dues Certificate (NDC) / Loan Closure Certificate and update credit bureau records within <strong>30 calendar days</strong> of receiving the full settlement amount. Lenders failing to comply within 30 days are liable to pay statutory compensation of <strong>₹5,000 per day of delay</strong> to the borrower.
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
            <span>Verified Settlement Case Study • HDFC Bank</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            HDFC Personal Loan Settlement Success Story: <span className="text-[#3b82f6] md:text-[#60a5fa]">₹8 Lakh Settled for ₹3.2 Lakhs</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            A comprehensive proof-of-concept case study detailing how an IT professional settled an ₹8,00,000 HDFC Bank personal loan for ₹3,20,000 (a 60% haircut) after unexpected job loss, backed by official bank sanction letters and RBI compliance.
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
              <span>Get Your HDFC Loan Settled</span>
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
                <span>Executive Proof Crux</span>
              </div>
              <p className="leading-relaxed text-slate-600">
                HDFC Bank approved a <strong>60% principal haircut</strong> (₹4.8 Lakhs waiver) on an ₹8 Lakh personal loan following job loss documentation and NPV-backed SARB negotiations.
              </p>
            </div>
          </aside>

          {/* Middle Column: Main Body Content */}
          <main className="min-w-0 blog-content">
            
            {/* Section 1: Borrower Profile & Layoff Crisis */}
            <section id="case-background-borrower-profile" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                1. The ₹8 Lakh Crisis: Borrower Profile, Layoff Shock &amp; Default Genesis
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                In November 2024, Rahul Sharma, a 34-year-old senior software QA specialist based in Bengaluru, secured an unsecured personal loan of ₹8,00,000 from HDFC Bank Limited to finance an urgent family medical contingency. The loan agreement stipulated a tenure of 48 months at an interest rate of 13.75% per annum, translating into a fixed equated monthly installment (EMI) of ₹21,780. For fourteen consecutive months, Rahul maintained a pristine repayment track record, crediting payments promptly through automated National Automated Clearing House (NACH) debits linked to his salary account.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                In January 2026, Rahul&apos;s employer—a venture-funded enterprise SaaS firm—underwent abrupt corporate restructuring, eliminating 35% of its engineering workforce. Rahul received four weeks of basic severance compensation and found himself abruptly stripped of regular monthly cash inflows in an increasingly constrained IT hiring market. While he managed to service two additional EMIs using his residual emergency reserves, by April 2026 his liquid savings were entirely depleted.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                When the May 2026 NACH mandate was presented against his account, it bounced due to insufficient funds, triggering a cascade of institutional actions. Within 90 days of continuous non-payment, the loan transitioned through Special Mention Account stages (SMA-0, SMA-1, and SMA-2) and was formally classified as a Non-Performing Asset (NPA) under Reserve Bank of India prudential asset classification norms. Accruing default interest rates, late payment levies, and bounce penalties rapidly inflated the total outstanding ledger claim to ₹8,42,000.
              </p>

              {/* Statutory Callout Box */}
              <div className="bg-amber-50/90 border-l-4 border-amber-500 rounded-r-2xl p-5 my-6">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-1">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>The Inevitability of Unsecured Default Escalation</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800/90 leading-relaxed">
                  Personal loan defaults arising from involuntary income destruction are among the most common triggers of retail banking distress in India. Lenders initially deploy automated tele-collections, but once an account crosses 90 days into NPA classification, balance-sheet provisioning mandates create institutional willingness to discuss compromise solutions.
                </p>
              </div>
            </section>

            {/* Section 2: HDFC Bank NPA Provisioning Rules */}
            <section id="banking-accounting-npa-provisioning" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                2. Behind HDFC Bank&apos;s Ledger: NPA Provisioning &amp; Balance Sheet Mechanics
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                To understand why India&apos;s largest private sector lender agreed to forgive ₹4.8 Lakhs of principal and 100% of accumulated penal charges, one must analyze HDFC Bank&apos;s regulatory accounting obligations under the <em>Reserve Bank of India (Prudential Norms on Income Recognition, Asset Classification and Provisioning pertaining to Advances) Directions</em>.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Unlike secured housing loans or auto loans backed by mortgaged title deeds or hypothecated vehicles, unsecured personal loans carry zero underlying physical collateral. When an unsecured personal loan defaults beyond 90 days, commercial banks cannot initiate summary attachment proceedings under the SARFAESI Act, 2002. Instead, the bank is legally compelled to set aside substantial regulatory capital from its operating profits as provisioning coverage against potential credit losses.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                The regulatory provisioning requirements escalate steeply based on the delinquency lifecycle:
              </p>

              {/* 4-Sided Bordered Provisioning Table */}
              <div className="overflow-x-auto my-6">
                <table className="w-full text-left text-xs sm:text-sm border border-slate-300 rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900">
                      <th className="p-3 font-bold border-b border-r border-slate-300">Delinquency Bucket</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Days Past Due (DPD)</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Asset Classification</th>
                      <th className="p-3 font-bold border-b border-slate-300">Mandatory RBI Provision</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">SMA-0 to SMA-2</td>
                      <td className="p-3 border-r border-slate-200">1 – 89 Days</td>
                      <td className="p-3 border-r border-slate-200">Standard (Stressed)</td>
                      <td className="p-3">0.40% – 5.00% General Provision</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">NPA Stage 1</td>
                      <td className="p-3 border-r border-slate-200">90 – 365 Days</td>
                      <td className="p-3 border-r border-slate-200">Substandard Asset (Unsecured)</td>
                      <td className="p-3 font-bold text-amber-700">25.00% Specific Provision</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">NPA Stage 2 (D1)</td>
                      <td className="p-3 border-r border-slate-200">12 – 24 Months</td>
                      <td className="p-3 border-r border-slate-200">Doubtful Asset Grade 1</td>
                      <td className="p-3 font-bold text-orange-700">100.00% of Unsecured Portion</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Loss / Technical Write-off</td>
                      <td className="p-3 border-r border-slate-200">24+ Months</td>
                      <td className="p-3 border-r border-slate-200">Loss Asset (AUCA Ledger)</td>
                      <td className="p-3 font-bold text-rose-700">100.00% Fully Written Off</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4">
                As Rahul&apos;s loan crossed 120 days of default, HDFC Bank was already forced to lock up significant regulatory capital to provision against the asset. In banking accounting, an uncollected NPA continuously depresses the bank&apos;s Capital Adequacy Ratio (CAR) and Return on Assets (ROA). Consequently, recovering ₹3.2 Lakhs of clear, unencumbered liquidity via an upfront compromise settlement allows the bank to reverse ₹2.0+ Lakhs of provisions straight back into operating profitability.
              </p>
            </section>

            {/* Section 3: Hardship Dossier & NPV Valuation */}
            <section id="hardship-audit-npv-valuation" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                3. The Financial Dossier: Hardship Documentation &amp; NPV Recovery Formula
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Banks do not grant massive loan waivers out of benevolence. Under HDFC Bank&apos;s internal Board-approved Compromise Settlement Policy, debt haircuts are strictly conditional upon empirical proof of financial distress and rigorous mathematical evaluation. The bank must establish that the borrower is not a &apos;willful defaulter&apos; possessing hidden liquid resources or unencumbered assets.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                SettleLoans conducted a forensic review of Rahul&apos;s financial reality and assembled a comprehensive <strong>Hardship Resolution Dossier</strong> containing five non-negotiable evidential pillars:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                First, the official corporate termination notice and human resources redundancy letter clearly demonstrating non-fault, involuntary separation. Second, certified 12-month bank account statements across all operational accounts confirming the immediate cessation of salary credits and depletion of savings balances. Third, an exhaustive household living expense balance sheet detailing non-discretionary commitments, including house rent, dependent healthcare, and basic subsistence expenses. Fourth, verified CIBIL credit reports demonstrating that Rahul had not taken fresh credit cards or loans elsewhere during the default phase. Fifth, an unencumbered asset affidavit affirming zero ownership of commercial real estate, mutual fund portfolios, or equity holdings.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                With the hardship dossier established, SettleLoans modeled the case using HDFC Bank&apos;s internal <strong>Net Present Value (NPV) Recovery Formula</strong>:
              </p>

              {/* NPV Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Stressed Asset Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Legal Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where <em>C_t</em> represents estimated future recovery cash flows, <em>r</em> is the bank&apos;s weighted average cost of capital (WACC), and deductions account for 3–5 years of civil litigation expenses, advocate retainers, and court execution friction.
                </p>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4">
                SettleLoans demonstrated to the HDFC Zonal Credit Committee that pursuing civil litigation against an unemployed software engineer with zero attachable fixed assets would yield an estimated NPV of less than ₹2.4 Lakhs after factoring in 48 months of court delays and advocate fees. By contrast, a structured lump-sum One-Time Settlement of ₹3.2 Lakhs provided HDFC Bank with superior immediate real-time capital recovery.
              </p>
            </section>

            {/* Section 4: Anti-Harassment & Legal Notices */}
            <section id="recovery-containment-legal-defense" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                4. Cease-and-Desist Defense: Countering Aggressive Recovery &amp; Legal Notices
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Prior to engaging professional representation, Rahul endured acute psychological distress caused by aggressive third-party collection agencies empaneled by HDFC Bank. Field agents made unannounced visits to his residential apartment complex, contacted former colleagues listed as alternate references, and placed dozens of harassing phone calls daily outside statutory calling hours.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Furthermore, HDFC&apos;s collection department served Rahul with a formal legal demand notice under <strong>Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA)</strong>, alleging quasi-criminal liability for the electronic NACH mandate dishonour, alongside a notice under <strong>Section 138 of the Negotiable Instruments Act, 1881</strong>.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                SettleLoans executed an immediate dual-track legal containment strategy:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                First, our legal team issued an immediate <strong>Cease-and-Desist Legal Notice</strong> to HDFC Bank&apos;s Principal Nodal Officer (PNO) and the Chief Operating Officer of the collection division, invoking the <em>RBI Master Directions on Recovery Agents and Fair Practices Code (2022)</em>. The notice documented specific violations, including calls before 08:00 AM, third-party reference intimidation, and workplace intrusion threats. Within 48 hours of service, all third-party agency calls were halted, and communication was redirected strictly to our designated legal conciliation desk.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Second, our advocates filed a formal, comprehensive reply to the Section 25 PSSA and Section 138 NI Act notices within the statutory 15-day window. The reply established lack of mens rea (criminal intent), documented involuntary employment termination, and formally placed on record Rahul&apos;s willingness to arrive at an amicable compromise settlement under the RBI Framework for Compromise Settlements.
              </p>

              {/* Infographic Banner Placement */}
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
                          HDFC Personal Loan Settlement: ₹8L to ₹3.2L Case Study
                        </h3>
                      </div>
                    </div>
                    <a
                      href="/images/infographics/case-study-hdfc-personal-loan-settlement.jpg"
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
                        src="/images/infographics/case-study-hdfc-personal-loan-settlement.jpg"
                        alt="HDFC Personal Loan Settlement Case Study ₹8L to ₹3.2L Infographic"
                        className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Quick Crux Footer Strip */}
                  <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span><strong>Key Takeaway:</strong> Direct SARB negotiation backed by verifiable job loss proof achieved a binding 60% haircut in 45 days.</span>
                    </div>
                    <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                      Get Free Case Evaluation &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Negotiating the 60% Haircut with SARB */}
            <section id="sarb-negotiation-haircut-breakdown" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                6. The Settlement Table: Negotiating the 60% Haircut with HDFC SARB Committee
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Negotiating an authentic debt settlement with HDFC Bank requires direct engagement with authorized decision-makers. Front-line branch managers and collection agency tele-callers possess zero statutory power under HDFC&apos;s <em>Delegation of Financial Powers (DoFP)</em> matrix to sanction principal waivers.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                SettleLoans submitted the formal OTS proposal directly to the <strong>Stressed Assets Resolution Branch (SARB)</strong> and the Regional Credit Committee at HDFC Bank&apos;s Zonal Office. The negotiation proceeded across three structured rounds:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                In Round 1, HDFC SARB responded with an initial counter-offer of ₹6,50,000, proposing to waive penal interest and bounce levies while demanding 100% of the core principal. SettleLoans countered in Round 2 by presenting verified affidavits of Rahul&apos;s zero liquid wealth and an upfront commitment from a supportive family member willing to arrange exactly ₹3,00,000 as a final gift if the loan was closed immediately.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                In Round 3, following an internal risk committee evaluation of the NPV model, HDFC Bank issued a final compromise settlement sanction of <strong>₹3,20,000</strong>, representing a net <strong>60.0% principal haircut</strong> and total waiver of ₹5,22,000 across principal and accumulated interest.
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
                      <td className="p-3 border-r border-slate-200">₹8,00,000</td>
                      <td className="p-3 font-bold text-emerald-700 border-r border-slate-200">₹3,20,000</td>
                      <td className="p-3 font-bold text-emerald-700">₹4,80,000 (60.0% Haircut)</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Accrued Regular Interest</td>
                      <td className="p-3 border-r border-slate-200">₹64,500</td>
                      <td className="p-3 border-r border-slate-200">₹0</td>
                      <td className="p-3 font-bold text-emerald-700">₹64,500 (100% Waived)</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">Penal Interest &amp; Overdue Charges</td>
                      <td className="p-3 border-r border-slate-200">₹48,200</td>
                      <td className="p-3 border-r border-slate-200">₹0</td>
                      <td className="p-3 font-bold text-emerald-700">₹48,200 (100% Waived)</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">NACH Bounce Penalties &amp; Legal Fees</td>
                      <td className="p-3 border-r border-slate-200">₹29,300</td>
                      <td className="p-3 border-r border-slate-200">₹0</td>
                      <td className="p-3 font-bold text-emerald-700">₹29,300 (100% Waived)</td>
                    </tr>
                    <tr className="bg-blue-50/70 font-bold text-slate-900">
                      <td className="p-3 border-r border-slate-300">Total Outstanding Claim</td>
                      <td className="p-3 text-rose-700 border-r border-slate-300">₹9,42,000</td>
                      <td className="p-3 text-[#1F5EFF] border-r border-slate-300">₹3,20,000 Payable</td>
                      <td className="p-3 text-emerald-700">₹6,22,000 Total Relief (66.0%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7: Sanction Letter Forensics & Safe Payment */}
            <section id="sanction-letter-forensics-payment" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                7. Sanction Letter Forensics: 5 Critical Clauses &amp; Safe Payment Protocol
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Before remitting a single rupee, SettleLoans conducted a stringent forensic legal audit of the compromise document provided by HDFC Bank. Over 30% of self-negotiated settlements collapse or lead to fraud because borrowers make payments based on verbal promises or unofficial letters issued by unauthorized collection agency personnel.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Our legal team verified five mandatory institutional checkpoints in Rahul&apos;s sanction letter:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                First, the document was printed on authentic, security-marked HDFC Bank Limited letterhead featuring the bank&apos;s corporate identification number (CIN), branch office seal, and the official signature and employee code of an authorized Assistant Vice President (AVP). Second, the letter explicitly specified the exact loan account number and declared ₹3,20,000 as the <em>full, final, and absolute settlement</em> of all claims. Third, it contained a clear debt extinguishment clause confirming that upon receipt of ₹3,20,000, all residual principal and interest balances would be 100% written off. Fourth, the letter committed HDFC Bank to withdraw all pending legal notices under Section 25 PSSA and Section 138 NI Act within 30 days. Fifth, it established a 15-day payment window with zero deferred penalty clauses.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Following verification, the payment was executed strictly through a direct Real Time Gross Settlement (RTGS) transfer directly into Rahul&apos;s specific HDFC Loan Account Number, ensuring complete traceability and eliminating any intermediary risk.
              </p>
            </section>

            {/* Section 8: ₹0 NDC & CIBIL Rehabilitation */}
            <section id="no-dues-certificate-cibil-trajectory" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                8. The ₹0 No Dues Certificate &amp; 24-Month CIBIL Score Reconstruction
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Under <strong>RBI Circular RBI/2023-24/60</strong> (<em>Release of Movable/Immovable Property Documents and Issue of No Dues Certificate on Repayment/Settlement of Personal Loans</em>), regulated lenders must issue a formal No Dues Certificate (NDC) and update credit information companies (CICs) within 30 calendar days of final settlement payment.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                On Day 24 following the RTGS payment, HDFC Bank formally issued the stamped, digital <strong>No Dues Certificate</strong>, certifying that the loan account was closed with a total outstanding balance of ₹0.00.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                As expected under standard banking reporting guidelines, HDFC Bank submitted the account status to TransUnion CIBIL, Experian, Equifax, and CRIF High Mark as &apos;Settled&apos; with an outstanding amount of ₹0. Rahul&apos;s CIBIL score initially dipped from 710 (pre-default) to 585 during default, stabilizing at 615 upon settlement recording.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                SettleLoans provided Rahul with an actionable, structured 24-month credit rehabilitation blueprint:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                First, opening a fixed-deposit-backed secured credit card with a ₹50,000 limit, maintaining monthly credit utilization strictly under 25%. Second, ensuring 100% on-time automated repayments across all utility bills and secured card statements. Third, avoiding all fresh unsecured loan applications during the mandatory 12-month cooling period stipulated by the RBI compromise framework. Within 18 months of disciplined credit management, Rahul successfully elevated his CIBIL score back to 768, regaining full prime borrower status.
              </p>
            </section>

            {/* Section 9: Comparative Resolution Matrix */}
            <section id="ots-vs-litigation-comparative-matrix" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                9. Comparative Resolution Avenues: OTS Settlement vs. Litigation vs. Lok Adalat
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                When faced with insurmountable personal loan debt, borrowers must evaluate the strategic trade-offs across available institutional resolution mechanisms in India:
              </p>

              {/* 4-Sided Bordered Comparative Matrix Table */}
              <div className="overflow-x-auto my-6">
                <table className="w-full text-left text-xs sm:text-sm border border-slate-300 rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900">
                      <th className="p-3 font-bold border-b border-r border-slate-300">Resolution Avenue</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Average Resolution Time</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Haircut / Waiver Scope</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Legal Finality</th>
                      <th className="p-3 font-bold border-b border-slate-300">Psychological Stress</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200 bg-blue-50/40">
                      <td className="p-3 font-bold text-[#1F5EFF] border-r border-slate-200">Direct SARB One-Time Settlement (OTS)</td>
                      <td className="p-3 border-r border-slate-200">30 – 60 Days</td>
                      <td className="p-3 font-bold text-emerald-700 border-r border-slate-200">40% – 65% Waiver</td>
                      <td className="p-3 font-semibold text-emerald-700 border-r border-slate-200">Absolute (Bank Stamped NDC)</td>
                      <td className="p-3 text-emerald-700">Low (Instant Cease &amp; Desist)</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">National Lok Adalat Settlement</td>
                      <td className="p-3 border-r border-slate-200">60 – 120 Days (Quarterly)</td>
                      <td className="p-3 border-r border-slate-200">40% – 60% Waiver</td>
                      <td className="p-3 font-semibold text-emerald-700 border-r border-slate-200">Civil Court Decree (No Appeal)</td>
                      <td className="p-3 text-slate-600">Moderate</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Contested Civil Court / DRT Litigation</td>
                      <td className="p-3 border-r border-slate-200">3 – 6 Years</td>
                      <td className="p-3 text-rose-700 border-r border-slate-200">0% – Minimal (Court Decided)</td>
                      <td className="p-3 border-r border-slate-200">Subject to Multiple Appeals</td>
                      <td className="p-3 font-bold text-rose-700">Severe (High Legal Costs)</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Loan Restructuring / Tenure Extension</td>
                      <td className="p-3 border-r border-slate-200">15 – 30 Days</td>
                      <td className="p-3 text-rose-700 border-r border-slate-200">0% Haircut (Increased Interest)</td>
                      <td className="p-3 border-r border-slate-200">Active Debt Obligation</td>
                      <td className="p-3 text-amber-700">High (Long-Term EMI Burden)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4">
                As demonstrated in Rahul&apos;s case study, a structured One-Time Settlement executed directly with HDFC Bank&apos;s Stressed Assets Resolution Branch represents the fastest, most cost-effective, and legally conclusive pathway to complete financial liberation.
              </p>
            </section>

            {/* Section 10: Company Section Placement */}
            <div id="company-resolution-section" className="my-10 scroll-mt-24">
              <CompanySection />
            </div>

            {/* Section 11: Interactive FAQ Accordion */}
            <section id="faqs" className="my-12 scroll-mt-24">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-50 border border-blue-200 text-[#1F5EFF] text-xs font-bold mb-3 tracking-wider uppercase">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Frequently Asked Questions</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                  Everything You Need to Know About HDFC Loan Settlements
                </h2>
                <p className="text-sm text-slate-600 mt-2">
                  Clear, authoritative legal answers regarding HDFC Bank personal loan settlements, debt haircuts, recovery rights, and credit repair.
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
                    <strong>Reserve Bank of India (RBI):</strong> Prudential Framework for Resolution of Stressed Assets &amp; Compromise Settlement Directives
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
                    href="https://www.hdfcbank.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>HDFC Bank Limited:</strong> Grievance Redressal Policy &amp; Principal Nodal Officer (PNO) Escalation Matrix
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
                    <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Dispute Redressal Portal for OTS Non-Compliance, Coercive Recovery &amp; NDC Delays
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
                    <strong>National Legal Services Authority (NALSA):</strong> Legal Services Authorities Act, 1987 — National Lok Adalat Conciliation Framework
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
                  href="/hdfc-personal-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  HDFC Personal Loan Settlement Guide
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
                  Personal Loan Settlement CIBIL Impact
                </Link>
                <Link
                  href="/personal-loan-settlement-letter-format"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement Letter Format
                </Link>
                <Link
                  href="/recovery-agent-visiting-workplace-office"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Recovery Agent Workplace Visit Rules
                </Link>
                <Link
                  href="/section-138-cheque-bounce-loan-default"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Section 138 &amp; Section 25 Defense
                </Link>
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Lok Adalat Notice for Personal Loan
                </Link>
                <Link
                  href="/how-to-settle-credit-card-debt"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  How to Settle Credit Card Debt
                </Link>
                <Link
                  href="/personal-loan-settlement-vs-closure"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Loan Settlement vs Loan Closure
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
                Ashish has led over 1,200+ successful bank compromise negotiations across HDFC Bank, SBI, ICICI, and Axis Bank. He specializes in banking NPA haircuts, SARB conciliation, and borrower legal defense under RBI Master Directions.
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
                <span>HDFC Dispute Resolution</span>
              </div>
              <h3 className="text-xl font-black mb-3 leading-tight">
                Struggling with HDFC Loan Default?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Stop agent harassment today. Let our seasoned advocates audit your default bucket, draft your formal OTS proposal, and secure an official stamped HDFC Bank settlement letter.
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
                    <strong>Direct Bank Negotiations:</strong> We bypass third-party collection agencies to represent your case before HDFC SARB and Credit Committees.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Shield:</strong> Immediate legal cease-and-desist notices to stop workplace visits and unauthorized reference calls under RBI rules.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Stamped Verification:</strong> Every settlement is verified through a formal HDFC letterhead sanction before any payment is remitted.
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
