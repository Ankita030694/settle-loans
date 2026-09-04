'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  BadgePercent,
  Smartphone,
  Monitor
} from 'lucide-react';

const tocItems = [
  { id: 'idfc-retail-lending-delinquencies', title: '1. IDFC First Retail Portfolio & Default Lifecycle' },
  { id: 'digital-portal-vs-advocate-negotiation', title: '2. Digital Settlement Portal vs. Advocate Defense' },
  { id: 'statutory-notices-pssa-harassment-defense', title: '3. Legal Summons, Section 171 Lien & Harassment Shield' },
  { id: 'idfc-npa-accounting-npv-formula', title: '4. NPA Accounting & Net Present Value (NPV) Equation' },
  { id: 'idfc-settlement-visual-roadmap', title: '5. IDFC First Settlement Visual Roadmap' },
  { id: 'step-by-step-negotiation-framework', title: '6. Step-by-Step Strategic Negotiation Framework' },
  { id: 'sanction-letter-forensics-authenticity', title: '7. Sanction Letter Forensics & Trap Avoidance' },
  { id: 'remittance-rbi-ndc-mandate-cibil-recovery', title: '8. Loan Remittance, RBI ₹0 NDC & Credit Recovery' },
  { id: 'idfc-settlement-comparative-matrix', title: '9. Comprehensive Resolution Matrix' },
  { id: 'company-resolution-section', title: '10. SettleLoans Legal Defense & Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

const faqsData = [
  {
    name: "What is the IDFC First Bank loan settlement process and how does it operate?",
    text: "The IDFC First Bank loan settlement process is a formal compromise resolution between IDFC First Bank Limited and an unsecured borrower facing verified financial distress. When an unsecured personal loan, consumer durable credit, or digital line of credit crosses 90 days past due and becomes a Non-Performing Asset (NPA), the account escalates from front-line automated recovery queues to the Stressed Asset Management Group (SAMG) or Zonal Settlement Committee. The borrower submits a structured One-Time Settlement (OTS) proposal accompanied by an insolvency hardship dossier. IDFC First evaluates the proposal using Net Present Value (NPV) recovery benchmarks. Upon approval, the bank issues an official stamped OTS Sanction Letter, and once the compromised sum is deposited directly into the loan account, IDFC First extinguishes the residual balance and delivers a No Dues Certificate (NDC)."
  },
  {
    name: "Why does IDFC First Bank's digital settlement portal offer smaller discounts than legal representation?",
    text: "IDFC First Bank's automated digital settlement portal operates on rigid rule-based algorithms designed to maximize quick recovery for the bank with minimal balance-sheet impact. The portal typically offers only a 10% to 25% waiver, primarily discounting accrued penal interest while demanding the bulk of the principal. In contrast, experienced legal debt advocates bypass automated web portals to engage directly with senior credit committees and zonal nodal officers. By presenting documented insolvency evidence and leveraging statutory RBI provisioning mandates, legal advocates routinely secure 45% to 65% principal haircuts."
  },
  {
    name: "What percentage of debt waiver or haircut can you realistically get from IDFC First Bank?",
    text: "On unsecured personal loans and consumer durable credit, IDFC First Bank typically sanctions principal haircuts between 40% and 65% of the total ledger balance once the account is classified as a Substandard or Doubtful NPA (180+ days past due). In addition, 100% of accrued penal interest, late payment charges, and cheque bounce fees are waived entirely under standard RBI compromise settlement protocols."
  },
  {
    name: "How should borrowers respond to Section 25 PSSA or Section 138 legal notices from IDFC First Bank?",
    text: "When an electronic NACH mandate or repayment cheque bounces, IDFC First Bank's empanelled legal counsel issues statutory demand notices under Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA) or Section 138 of the Negotiable Instruments Act, 1881. Borrowers must never ignore these statutory communications. A formal legal reply drafted by experienced debt defense advocates must be served within the mandatory 15-day window, setting out genuine financial hardship, disputing unlawful penal calculations, and proposing an amicable One-Time Settlement to avert magistrate court litigation."
  },
  {
    name: "Can IDFC First Bank debit funds from my savings account under Section 171 Banker's Lien?",
    text: "Yes, under Section 171 of the Indian Contract Act, 1872 (Banker's Right of General Lien and Set-Off), IDFC First Bank is legally entitled to freeze or debit balances from any savings account, salary account, or fixed deposit maintained with IDFC First Bank under the same Customer ID or PAN. However, IDFC First Bank has zero legal power to unilaterally attach or freeze bank accounts maintained with other independent banking institutions (such as HDFC, ICICI, or SBI) without a specific attachment decree from a competent Civil Court."
  },
  {
    name: "What rights do borrowers have against IDFC First Bank recovery agent harassment?",
    text: "Borrowers are strictly protected under the RBI Master Directions on Recovery Agents and Conduct (2022) and the Fair Practices Code. IDFC First Bank recovery agents are legally prohibited from: calling before 08:00 AM or after 07:00 PM; contacting friends, family members, or workplace colleagues; visiting employers or residences to cause social embarrassment; and using abusive or threatening language. Visiting agents must carry an official bank authorization letter and identity card. Violations can be formally escalated to IDFC First's Principal Nodal Officer and the RBI Integrated Ombudsman."
  },
  {
    name: "Can IDFC First Bank personal and consumer loans be settled through National Lok Adalat?",
    text: "Yes. IDFC First Bank routinely refers thousands of delinquent retail personal and consumer durable loan accounts to the quarterly National Lok Adalat organized under the Legal Services Authorities Act, 1987. In Lok Adalat conciliation hearings, bank representatives hold pre-approved compromise mandates offering significant haircuts (often 45% to 60%). The settlement award passed by the Lok Adalat bench has the legal status of a non-appealable Civil Court Decree, permanently closing the dispute."
  },
  {
    name: "How does an IDFC First Bank settlement impact your CIBIL score and credit report?",
    text: "Upon completion of the settlement, IDFC First Bank reports the account to credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark) with the status 'Settled' or 'Post-Write-off Settled' and an outstanding balance of ₹0. While this causes a temporary credit score drop of 75 to 150 points and initiates a 12-month cooling period under RBI rules, it completely halts negative compounding overdue reporting. Borrowers can restore their score above 750 within 18 to 24 months through disciplined repayment on secured credit builder products."
  },
  {
    name: "What essential elements must be verified on an IDFC First OTS Sanction Letter?",
    text: "Before depositing any settlement payment, verify five mandatory elements: (1) Official IDFC First Bank Limited corporate letterhead with branch reference numbers; (2) The borrower's exact loan account number and PAN; (3) The exact agreed compromised amount and payment due date; (4) An explicit debt extinguishment clause confirming that payment constitutes full and final discharge of all liabilities; (5) The signature, employee code, and official seal of an authorized bank signatory."
  },
  {
    name: "What is the statutory timeline for IDFC First Bank to deliver the No Dues Certificate under RBI rules?",
    text: "Under RBI Circular RBI/2023-24/60, IDFC First Bank is legally required to issue an official No Dues Certificate (NDC) / Loan Closure Certificate and update credit bureau databases within 30 calendar days of receiving the full settlement amount. If the bank fails to issue the closure letter within 30 days without lawful justification, it is statutorily mandated to pay compensation of ₹5,000 per day of delay directly to the borrower."
  }
];

export default function IDFCFirstBankLoanSettlementClient() {
  const [activeId, setActiveId] = useState<string>('idfc-retail-lending-delinquencies');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      let currentActive = tocItems[0].id;

      for (let i = 0; i < tocItems.length; i++) {
        const el = document.getElementById(tocItems[i].id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= top) {
            currentActive = tocItems[i].id;
          }
        }
      }
      setActiveId(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial evaluation
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-[#1F5EFF] selection:text-white"
      style={{ fontFamily: 'var(--font-satoshi), Satoshi, -apple-system, BlinkMacSystemFont, sans-serif' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
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
      `}} />

      {/* 1. Charcoal Navy Hero Section */}
      <section
        className="w-full border-b border-slate-700/80 pt-8 pb-7 md:pt-12 md:pb-9 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-red-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <Landmark className="w-3.5 h-3.5" />
            <span>Bank-Specific Dispute Resolution • IDFC First Bank</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            IDFC First Bank Loan Settlement: <span className="text-[#3b82f6] md:text-[#60a5fa]">Process, OTS Policy &amp; 60% Haircut</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Defaulted on an IDFC First Bank personal loan or consumer durable finance? Learn why the automated digital settlement portal underdelivers, how to handle Section 25 PSSA legal summons, and how advocate-led negotiation unlocks 45%–65% principal haircuts with an authentic ₹0 NDC.
          </p>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-3 mb-5 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Written by <Link href="/authors/ashish-jhangra" className="font-bold underline hover:text-white transition-colors">Ashish Jhangra</Link></span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Updated: August 2026</span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>RBI Master Direction Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Negotiate IDFC First Settlement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Get Free Case Evaluation
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip Component */}
      <StatsStrip />

      {/* 3. 3-Column Grid Container */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column: Table of Contents + Executive Crux */}
          <aside className="w-full lg:sticky lg:top-24 space-y-4">
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

            {/* Quick Executive Case Crux Box */}
            <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>IDFC First Quick Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                IDFC First Bank maintains an aggressive digital lending footprint in consumer durable and personal loans. While their digital portal provides rigid 10%–25% discounts, advocate-led escalation to Zonal SAMG committees unlocks 45%–65% principal haircuts.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: IDFC First Bank Loan Resolution</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Digital Portal Limitation:</strong> IDFC First&apos;s self-service online settlement portal uses automated algorithms offering meager 10% to 25% waivers, whereas formal advocate representation secures 45% to 65% principal waivers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Retail Debt Portfolio:</strong> Consumer durable loans, digital instant lines, and personal loans are completely unsecured, limiting bank recovery remedies to civil suits and Lok Adalat conciliation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Notice Defense:</strong> Section 25 PSSA notices for failed NACH debits require a structured advocate-drafted legal reply within 15 days to halt magistrate court escalation and pivot to an OTS.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 171 Banker&apos;s Lien Shield:</strong> IDFC First can set off balances in linked IDFC accounts but possesses zero legal power to touch or freeze accounts in external banks (e.g., SBI, HDFC, ICICI).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory ₹0 NDC Compliance:</strong> Under RBI Circular RBI/2023-24/60, IDFC First Bank must issue an authentic No Dues Certificate within 30 days of settlement payment under a ₹5,000 daily penalty rule.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: IDFC Retail Portfolio & Default Lifecycle */}
            <section id="idfc-retail-lending-delinquencies" className="scroll-mt-24 md:scroll-mt-28 space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. IDFC First Bank Retail Lending Ecosystem, Consumer Durable Loans &amp; Default Lifecycle
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                IDFC First Bank Limited has established itself as one of the fastest-growing retail credit powerhouses in India, originating millions of unsecured personal loans, instant point-of-sale consumer durable loans, two-wheeler financing, and digital revolving credit lines. Through seamless smartphone app integrations and instant paperless underwriting, the bank rapidly scales retail credit exposure across salaried and self-employed demographics. However, when borrowers experience unexpected financial catastrophes—such as sudden job displacement, catastrophic illness, business insolvency, or micro-enterprise cash flow collapse—this rapid digital lending infrastructure transitions into a relentless automated recovery pipeline.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the prudential framework established by the Reserve Bank of India (RBI), a delinquent unsecured loan account moves through distinct supervisory and provisioning phases based on the duration of delinquency:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
                <li><strong>Special Mention Account 0 (SMA-0):</strong> Principal or interest payment overdue for 1 to 30 days. Automated SMS alerts, app notifications, and tele-calling recovery queues initiate gentle collection contact.</li>
                <li><strong>Special Mention Account 1 (SMA-1):</strong> Overdue spanning 31 to 60 days. Recovery workflows intensify, deploying regional tele-calling centers and automated reminders warning of credit bureau score degradation.</li>
                <li><strong>Special Mention Account 2 (SMA-2):</strong> Overdue spanning 61 to 90 days. The account reaches high-risk status. IDFC First initiates pre-litigation warnings, NACH bounce tracking, and field agency allocations.</li>
                <li><strong>Non-Performing Asset (NPA) Classification:</strong> Delinquency exceeding 90 consecutive calendar days. Under the <em>Master Direction – Reserve Bank of India (Prudential Norms on Income Recognition, Asset Classification and Provisioning pertaining to Advances)</em>, the loan is formally classified as a Substandard NPA. Retail branch authority terminates, and the file transfers to the bank&apos;s Stressed Asset Management Group (SAMG).</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Understanding this institutional progression is crucial for distressed borrowers. Because IDFC First&apos;s consumer durable and personal loans are 100% unsecured—lacking any underlying physical asset, mortgage, or hypothecated property—the bank cannot seize real estate or physical goods without an exhaustive civil court trial. Instead, the bank relies heavily on automated collection channels, psychological pressure, and digital settlement invitations before considering realistic compromise settlements.
              </p>
            </section>

            {/* Section 2: Digital Settlement Portal vs Advocate Defense */}
            <section id="digital-portal-vs-advocate-negotiation" className="scroll-mt-24 md:scroll-mt-28 space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. IDFC First Bank&apos;s Digital Settlement Portal vs. Legal Advocate Representation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A unique feature of IDFC First Bank&apos;s recovery architecture is its proprietary digital settlement portal. When an account enters SMA-2 or early NPA status, the bank frequently transmits SMS links and automated emails prompting borrowers to &quot;Resolve Your Account Online with a Single Click.&quot; While presented as an effortless and compassionate solution, understanding the algorithmic mechanics behind this portal reveals why self-service digital settlement severely disadvantages the borrower.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The core disparities between IDFC First&apos;s automated portal and professional legal advocate representation include:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-red-200 bg-red-50/50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-red-950 text-xs sm:text-sm">
                    <Monitor className="w-4 h-4 text-red-600" />
                    <span>IDFC First Automated Digital Portal (DIY)</span>
                  </div>
                  <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4">
                    <li><strong>Rigid Algorithmic Bounds:</strong> Pre-programmed scripts strictly cap discounts at 10% to 25% of the total ledger balance.</li>
                    <li><strong>Principal Retention:</strong> Discounts only eliminate arbitrary penal interest and late charges, demanding nearly 90%–100% of the principal loan amount.</li>
                    <li><strong>No Hardship Context:</strong> The algorithm cannot review medical emergency records, termination notices, or verified business insolvency documents.</li>
                    <li><strong>Zero Legal Defense:</strong> Using the portal does not protect against parallel Section 25 PSSA summons or tele-calling harassment.</li>
                    <li><strong>Single Lump-Sum Bias:</strong> Often forces immediate full payment within 48 to 72 hours without flexible structured tranches.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-blue-950 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Advocate-Led Strategic Legal Representation</span>
                  </div>
                  <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4">
                    <li><strong>Direct SAMG Escalation:</strong> Bypasses low-level portals to engage directly with Zonal Settlement Committees and Nodal Desks.</li>
                    <li><strong>Deep 45%–65% Principal Haircuts:</strong> Leverages RBI provisioning schedules to negotiate substantial write-downs on principal debt.</li>
                    <li><strong>Hardship Dossier Submission:</strong> Formally presents verified insolvency evidence to justify credit committee write-off approvals.</li>
                    <li><strong>Complete Legal Shield:</strong> Drafts statutory replies to Section 25 PSSA and Section 138 notices, neutralizing court risks.</li>
                    <li><strong>Structured Multi-Tranche Terms:</strong> Negotiates manageable installment milestones spread over 30 to 90 days with guaranteed ₹0 NDC.</li>
                  </ul>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By relying on an automated digital portal, borrowers accept sub-optimal terms dictated by bank algorithms. Engaging experienced debt settlement advocates levels the playing field, transforming an automated recovery confrontation into a legally protected, high-concession commercial resolution.
              </p>
            </section>

            {/* Section 3: Legal Summons, Section 171 Lien & Harassment Shield */}
            <section id="statutory-notices-pssa-harassment-defense" className="scroll-mt-24 md:scroll-mt-28 space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Statutory Summons, Section 25 PSSA, Section 171 Banker&apos;s Lien &amp; Harassment Shield
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                As loan delinquencies advance past 60 to 90 days, IDFC First Bank deploys statutory legal notices to establish formal judicial records and exert psychological pressure on the borrower. Distinguishing between statutory court notices and standard collection intimidation is essential to safeguard your legal rights.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The principal statutory instruments and legal provisions deployed by IDFC First Bank include:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Section 25 PSSA Legal Notices</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Triggered when an electronic National Automated Clearing House (NACH) auto-debit fails due to insufficient funds under Section 25 of the Payment and Settlement Systems Act, 2007. This carries quasi-criminal liability analogous to cheque bounce statutes. A formal legal reply must be served within 15 statutory days.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileText className="w-4 h-4 text-red-600" />
                    <span>Section 138 NI Act Notices</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Served when a physical post-dated repayment cheque dishonours upon presentation. Demands full settlement of the cheque amount within 15 days from notice receipt before criminal complaints can be lodged in a Metropolitan Magistrate Court.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-amber-600" />
                    <span>Online Dispute Resolution &amp; Conciliation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    IDFC First frequently issues notices inviting borrowers to virtual dispute resolution or private conciliation platforms. While marketed as formal hearings, attendance is voluntary unless issued directly by a statutory Lok Adalat bench or civil court.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    <span>Order 37 CPC Summary Suits</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Civil summary suits for money recovery filed in competent civil courts. Because unsecured consumer loans involve extensive evidentiary burdens and 3 to 5 years of litigation delays, IDFC First prefers compromise settlements over contested court trials.
                  </p>
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                Section 171 Banker&apos;s Right of General Lien and Account Freezes
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Section 171 of the Indian Contract Act, 1872, banking institutions possess the statutory <em>Right of General Lien and Set-Off</em>. This empowers IDFC First Bank to unilaterally freeze or debit money from any savings account, current account, or fixed deposit registered under the same Customer Identification File (CIF) or PAN to offset personal loan arrears.
              </p>
              
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-2">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Strategic Account Protection Protocol</span>
                </div>
                <p className="leading-relaxed">
                  While IDFC First Bank can legally exercise set-off rights over deposits maintained within IDFC First Bank, <strong>the bank has zero statutory authority to attach, freeze, or access balances held in other independent banking institutions</strong> (such as State Bank of India, HDFC Bank, Axis Bank, or ICICI Bank) without an explicit attachment order from a competent Civil Court. Distressed borrowers must immediately route salary credits and emergency funds to an independent bank account.
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                Statutory Defense Against Third-Party Recovery Harassment
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When consumer loans cross 60 days overdue, IDFC First Bank assigns field recovery tasks to empanelled Debt Recovery Agencies (DRAs). All collection activities are strictly governed by the <strong>RBI Master Directions on Recovery Agents and Conduct (2022)</strong> and the Fair Practices Code. Borrowers possess enforceable legal protections:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Calling Hour Restrictions:</strong> Recovery agents may contact borrowers strictly between 08:00 AM and 07:00 PM. Calls outside these hours constitute a direct regulatory violation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Third-Party Privacy Safeguards:</strong> Agents are strictly forbidden from contacting relatives, friends, neighbors, or workplace employers regarding your debt.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory Identification:</strong> Visiting field agents must produce an official ID card, IDFC First Bank authorization letter, and copy of the code of conduct.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Grievance Escalation:</strong> Unlawful intimidation or abusive behavior can be escalated directly to IDFC First Bank&apos;s Principal Nodal Officer and the RBI Integrated Ombudsman for immediate disciplinary and compensatory action.</span>
                </li>
              </ul>
            </section>

            {/* Section 4: NPA Accounting & Net Present Value (NPV) Equation */}
            <section id="idfc-npa-accounting-npv-formula" className="scroll-mt-24 md:scroll-mt-28 space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. IDFC First Bank NPA Accounting Mechanics, Provisioning Burden &amp; NPV Recovery Equation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To negotiate maximum settlement haircuts with IDFC First Bank, one must analyze how bad debts impact the bank&apos;s statutory balance sheet. Under RBI prudential norms, banks cannot hold defaulted loans indefinitely without setting aside substantial risk capital. As an unsecured personal or consumer durable loan ages past default, IDFC First must make mandatory provisioning from its quarterly operating profits:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Asset Classification</th>
                      <th>Delinquency Duration</th>
                      <th>RBI Mandatory Provisioning</th>
                      <th>IDFC First OTS Haircut Potential</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Standard / SMA-0 / SMA-1 / SMA-2</td>
                      <td>1 – 90 Days</td>
                      <td>0.40% – 5.0% General Provision</td>
                      <td>0% – 15% (Interest Waivers Only)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Substandard (NPA)</td>
                      <td>91 – 365 Days</td>
                      <td>25% Unsecured Capital Provision</td>
                      <td>30% – 45% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful 1 (D1)</td>
                      <td>12 – 24 Months Default</td>
                      <td>100% Unsecured Capital Provision</td>
                      <td>45% – 55% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful 2 / Loss Asset</td>
                      <td>24+ Months / Written-Off</td>
                      <td>100% Full Capital Write-Off</td>
                      <td>55% – 65% Principal Haircut</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an unsecured loan remains delinquent beyond 12 months, IDFC First Bank has already set aside 100% of the loan amount in capital provisions, locking up shareholder equity. At this stage, the bank&apos;s Credit Committee evaluates compromise settlement proposals against an internal <strong>Net Present Value (NPV) Recovery Benchmark</strong>:
              </p>

              {/* JSX Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>IDFC First NPV Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated recoverable cash flows over time, r is IDFC First&apos;s hurdle cost of capital discount rate, and deductions account for 3–5 years of civil litigation delays, advocate retainer fees, and the drag of idle provisioning capital on the bank&apos;s return on equity.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because pursuing protracted civil recovery against an unsecured debtor yields highly uncertain returns after deducting legal fees and court delays, IDFC First Bank&apos;s Competent Authority frequently concludes that accepting an immediate lump-sum One-Time Settlement yielding 35% to 50% of the principal balance delivers a superior net financial return compared to prolonged litigation.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="idfc-settlement-visual-roadmap" className="scroll-mt-24 md:scroll-mt-28 space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. IDFC First Bank Loan Settlement Visual Roadmap
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The visual roadmap below details the complete 5-stage institutional progression from initial delinquency and digital notice receipt to advocate-led negotiation, sanction letter audit, and final ₹0 No Dues Certificate delivery.
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/idfc-first-bank-loan-settlement.jpg"
                  alt="IDFC First Bank Loan Settlement Process & Legal OTS Blueprint"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Step 1–2: Delinquency &amp; Notice</span>
                  <span>Account crosses 90 days; IDFC First issues digital alerts &amp; Section 25 notice; advocate initiates defensive reply.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Step 3–4: Dossier &amp; OTS Sanction</span>
                  <span>Insolvency evidence submitted to SAMG; NPV haircut negotiated; official bank-stamped sanction letter issued.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Step 5: ₹0 NDC &amp; Credit Reset</span>
                  <span>Settlement remitted directly to loan account; IDFC First issues No Dues Certificate within 30 days under RBI rules.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Step-by-Step Strategic Negotiation Framework */}
            <section id="step-by-step-negotiation-framework" className="scroll-mt-24 md:scroll-mt-28 space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Step-by-Step Strategic Negotiation Framework with IDFC First Bank SAMG
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Securing an optimal One-Time Settlement (OTS) from IDFC First Bank requires a structured, multi-phase legal and financial approach. Bypassing automated digital interfaces and directly engaging senior resolution authorities ensures maximum haircut realization.
              </p>

              <div className="space-y-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <div className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs">1</div>
                    <span>Financial Hardship Dossier Compilation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Compile comprehensive documentary proof establishing genuine, involuntary insolvency. Key documents include job termination letters, salary reduction slips, comprehensive medical records and hospital discharge summaries, GST cancellation certificates, or audited business profit-and-loss statements showing operational collapse.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <div className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs">2</div>
                    <span>Formal Written OTS Proposal Submission</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit a structured compromise petition directly to IDFC First Bank&apos;s Stressed Asset Management Group and Zonal Nodal Officer. The proposal must detail the genesis of default, cite RBI compromise settlement guidelines, and propose a specific lump-sum settlement amount anchored strictly to a 35% to 50% principal valuation.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <div className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs">3</div>
                    <span>Statutory Legal Reply &amp; Conciliation Alignment</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Simultaneously issue formal legal replies to any pending Section 25 PSSA or Section 138 notices. If the dispute is referred to a National Lok Adalat or pre-litigation conciliation bench, legal counsel represents the borrower to ensure any agreed terms are recorded as a non-appealable judicial decree.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <div className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs">4</div>
                    <span>Iterative Credit Committee Negotiation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Initial bank counter-offers routinely demand 70% to 85% of the total ledger balance. Through iterative advocate-led representation and anchoring against the bank&apos;s 100% provisioning absorption, the final settlement figure is systematically negotiated down to 35% to 55% of principal debt.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: Sanction Letter Forensics & Trap Avoidance */}
            <section id="sanction-letter-forensics-authenticity" className="scroll-mt-24 md:scroll-mt-28 space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Sanction Letter Forensics: Verifying Authenticity &amp; Eliminating Traps
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before remitting a single rupee toward an agreed settlement amount, borrowers must conduct a meticulous forensic audit of the One-Time Settlement (OTS) Sanction Letter. Unscrupulous recovery agents frequently generate forged letters or informal &quot;token receipts&quot; to satisfy monthly collection quotas, leaving borrowers with active outstanding debt and compounding interest.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A legally binding IDFC First Bank OTS Sanction Letter must strictly satisfy five non-negotiable legal criteria:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Official Letterhead &amp; Reference Number</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The document must be printed on official IDFC First Bank Limited corporate letterhead with registered office details, branch reference codes, and authentic corporate branding.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CheckCircle className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Exact Loan Account &amp; PAN Binding</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Verify that the letter precisely specifies your complete IDFC First loan account number, full name as per bank KYC, and Permanent Account Number (PAN) with zero errors.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Lock className="w-4 h-4 text-purple-600" />
                    <span>Full Debt Extinguishment Clause</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The sanction letter must unequivocally declare that payment of the agreed settlement sum constitutes full and final satisfaction of all liabilities, with total waiver of residual principal and interest.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    <span>Authorized Signatory &amp; Bank Seal</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The letter must carry the official physical or verified digital signature, designation, and employee code of an authorized officer of IDFC First Bank with the bank&apos;s official round seal.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-red-950">
                  <ShieldX className="w-4 h-4 text-red-600" />
                  <span>Crucial Payment Destination Mandate</span>
                </span>
                <p className="leading-relaxed">
                  Never transfer settlement funds into a personal bank account, UPI QR code, or third-party collection agency account. All settlement disbursements must be deposited strictly into your own designated IDFC First Bank loan account number via RTGS, NEFT, or account payee demand draft payable directly to &quot;IDFC FIRST Bank Ltd A/C [Your Loan Number]&quot;.
                </p>
              </div>
            </section>

            {/* Section 8: Loan Remittance, RBI ₹0 NDC & Credit Recovery */}
            <section id="remittance-rbi-ndc-mandate-cibil-recovery" className="scroll-mt-24 md:scroll-mt-28 space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Loan Remittance, RBI ₹0 No Dues Certificate Mandate &amp; CIBIL Trajectory
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Following the successful deposit of the agreed settlement amount, the debt resolution process enters its final statutory phase. Under <strong>RBI Circular RBI/2023-24/60</strong> (Responsible Lending Conduct – Release of Movable / Immovable Property Documents and Issuance of NDC), all regulated banking institutions including IDFC First Bank are statutorily required to issue an official <strong>No Dues Certificate (NDC) / Loan Closure Certificate</strong> and update credit information bureaus within <strong>30 calendar days</strong> of receiving the full settlement amount.
              </p>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>RBI Statutory Delay Compensation Mandate</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  If IDFC First Bank fails to issue the No Dues Certificate or update closure records with credit bureaus within the mandatory 30-day window without lawful justification, the bank is legally required to pay statutory compensation of <strong>₹5,000 for each calendar day of delay</strong> directly to the borrower.
                </p>
              </div>
              
              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                CIBIL Credit Bureau Trajectory &amp; Systematic Financial Rehabilitation
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers must understand the precise credit reporting implications of an executed compromise settlement:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Credit Status Remark:</strong> IDFC First Bank will report the account status to CIBIL, Experian, Equifax, and CRIF High Mark as <strong>&quot;Settled&quot;</strong> or <strong>&quot;Post-Write-off Settled&quot;</strong> with an outstanding balance of <strong>₹0</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Immediate Score Adjustment:</strong> The settlement permanently closes the delinquent account but causes an immediate temporary drop of 75 to 150 points in your credit score, reflecting the debt haircut.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory Cooling Window:</strong> Under RBI compromise guidelines, regulated lenders observe a 12-month cooling window before evaluating fresh unsecured credit applications from settled borrowers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>18–24 Month Score Rebuilding:</strong> By obtaining a secured credit builder credit card (backed by a small fixed deposit), maintaining credit utilization below 30%, and ensuring 100% timely payments, borrowers reliably restore their CIBIL score back above 750 within 18 to 24 months.</span>
                </li>
              </ul>
            </section>

            {/* Section 9: Comprehensive Resolution Matrix */}
            <section id="idfc-settlement-comparative-matrix" className="scroll-mt-24 md:scroll-mt-28 space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Comprehensive Resolution Matrix: Advocate OTS vs Digital Portal vs Restructuring vs Litigation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Evaluating different debt resolution pathways enables borrowers to make informed financial and legal choices when managing overdue IDFC First personal and consumer durable loans:
              </p>
              
              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Resolution Pathway</th>
                      <th>Financial Concession / Haircut</th>
                      <th>Legal Impact &amp; Court Risk</th>
                      <th>CIBIL Bureau Remark</th>
                      <th>Timeline to Complete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Advocate-Led OTS (SettleLoans)</td>
                      <td>45% – 65% Principal Waiver; 100% Penalty Waiver</td>
                      <td>Complete legal extinguishment; all notices withdrawn</td>
                      <td>&apos;Settled&apos; with ₹0 Balance</td>
                      <td>30 – 60 Days</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">IDFC First Digital Portal (DIY)</td>
                      <td>10% – 25% Waiver (Penalty Only; Minimal Principal)</td>
                      <td>No legal representation; notices may continue</td>
                      <td>&apos;Settled&apos; with ₹0 Balance</td>
                      <td>1 – 7 Days</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Loan Restructuring / Extension</td>
                      <td>0% Principal Haircut; Higher cumulative interest</td>
                      <td>Loan remains active; fresh NACH mandate required</td>
                      <td>&apos;Restructured&apos; with active liability</td>
                      <td>45 – 90 Days</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Order 37 CPC Civil Litigation</td>
                      <td>No discount; Legal fees and court interest added</td>
                      <td>Protracted civil court proceedings (3–5 years)</td>
                      <td>&apos;Suit Filed&apos; / &apos;Decreed&apos;</td>
                      <td>3 – 5 Years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="scroll-mt-24 md:scroll-mt-28 space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Defense &amp; IDFC First Debt Advisory Framework
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Navigating an institutional dispute against IDFC First Bank requires specialized legal representation and seasoned financial negotiation capability. SettleLoans represents distressed borrowers across India, offering an end-to-end legal shield against unlawful recovery harassment, drafting formal replies to Section 25 PSSA and Section 138 notices, and negotiating directly with IDFC First&apos;s Zonal Stressed Asset Management verticals to secure the deepest possible settlement haircuts with official, bank-stamped No Dues Certificates.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="scroll-mt-24 md:scroll-mt-28 space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  11. Frequently Asked Questions: IDFC First Bank Loan Settlement
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Clear, legally verified answers to common questions regarding IDFC First Bank personal loan settlement, digital portal offers, recovery rules, and credit rehabilitation.
              </p>

              <div className="space-y-3">
                {faqsData.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all"
                  >
                    <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                      <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {faq.name}
                      </span>
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </summary>
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                      <p>{faq.text}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* 5 Official Regulatory Links */}
            <section className="border-t border-slate-200 pt-8 mb-4">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">
                Official Statutory &amp; Regulatory References
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction – Recovery Agents &amp; Conduct</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (2021)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">National Legal Services Authority (Lok Adalat)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Payment &amp; Settlement Systems Act (Section 25)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://legislative.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">Indian Contract Act, 1872 (Section 171 Banker&apos;s Lien)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Loan Settlement &amp; Legal Defense Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/axis-bank-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Axis Bank Loan Settlement
                </Link>
                <Link
                  href="/hdfc-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  HDFC Loan Settlement
                </Link>
                <Link
                  href="/icici-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  ICICI Loan Settlement
                </Link>
                <Link
                  href="/kotak-bank-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Kotak Bank Loan Settlement
                </Link>
                <Link
                  href="/sbi-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  SBI Personal Loan Settlement
                </Link>
                <Link
                  href="/bajaj-finance-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bajaj Finance Settlement
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Guide
                </Link>
                <Link
                  href="/can-bank-seize-property-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Property Seizure Protections
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Loan Default &amp; Jail Myths
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate Guide
                </Link>
              </div>
            </section>

          </main>

          {/* Right Column: Author Bio, Emergency Advocate CTA, Trust Signals */}
          <aside className="w-full lg:sticky lg:top-24 space-y-6">
            
            {/* Author Bio Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Link
                  href="/authors/ashish-jhangra"
                  className="w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-lg hover:opacity-90 transition-opacity"
                >
                  AJ
                </Link>
                <div>
                  <div className="font-bold text-slate-900 text-sm">
                    <Link
                      href="/authors/ashish-jhangra"
                      className="hover:text-[#1F5EFF] transition-colors"
                    >
                      Ashish Jhangra
                    </Link>
                  </div>
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Specialist in RBI compromise settlement frameworks, NPA provisioning forensics, and banking dispute litigation with over a decade of debt advisory experience.
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                <Link
                  href="/authors/ashish-jhangra"
                  className="text-[#1F5EFF] font-bold hover:underline flex items-center gap-1"
                >
                  <span>View Author Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <div className="flex items-center gap-1 text-slate-500">
                  <span>Verified</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Immediate Legal Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Facing IDFC First Bank Recovery Pressure?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Stop unlawful harassment, reply to Section 25 PSSA summons, and negotiate a formal 45%–65% debt waiver directly with IDFC First Zonal SAMG desks.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Advocate Consultation
              </Link>
            </div>

            {/* Trust Signals Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Institutional Protections
              </div>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>100% RBI Fair Practices Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Confidential Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Verified Bank Letterhead Sanctions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Advocate-Led Conciliation</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
