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
            isOpen ? "rotate-180 bg-[#1F5EFF] text-white" : ""
          }`}
        >
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-base leading-relaxed border-t border-slate-100 pt-4">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default function TenLakhPersonalLoanSettlementClient() {
  const [activeId, setActiveId] = useState<string>("institutional-exposure-10-lakh-personal-loan");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: "institutional-exposure-10-lakh-personal-loan", title: "1. The ₹10 Lakh Debt Exposure Reality" },
    { id: "npa-classification-provisioning-mathematics", title: "2. NPA Aging & Provisioning Formulas" },
    { id: "statutory-notices-section-25-pssa-section-138-ni-act", title: "3. Section 25 PSSA & Section 138 Defense" },
    { id: "unilateral-arbitration-and-civil-suit-defense", title: "4. Sole Arbitration & Civil Suit Realities" },
    { id: "infographic-resolution-blueprint", title: "5. Visual Resolution Blueprint" },
    { id: "haircut-calculation-ots-percentages-10-lakh", title: "6. Haircut Formula & Settlement Slabs" },
    { id: "recovery-harassment-and-rbi-compliance-shield", title: "7. Recovery Agent Harassment Defense" },
    { id: "comparative-resolution-avenues-table", title: "8. Comparative Resolution Avenues" },
    { id: "step-by-step-advocate-settlement-roadmap", title: "9. 5-Step Legal Settlement Roadmap" },
    { id: "cibil-score-trajectory-and-credit-rebuilding", title: "10. CIBIL Trajectory & Score Repair" },
    { id: "company-resolution-section", title: "11. SettleLoans Legal Defense & Advisory" },
    { id: "faqs", title: "12. Frequently Asked Questions" },
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tocItems]);

  const faqs = [
    {
      question: "How much can I realistically settle a ₹10 Lakh personal loan for in India?",
      answer: (
        <p>
          For an unsecured ₹10 Lakh personal loan past 120 to 180 days of default, realistic One-Time Settlement (OTS) amounts typically settle between <strong>₹4.0 Lakhs and ₹5.5 Lakhs</strong>. This corresponds to an effective <strong>45% to 60% debt haircut</strong> on the principal ledger. In all RBI-compliant compromise settlements, 100% of accumulated penal interest, overdue late charges, and bounce fees are completely waived before discounting the core principal balance based on verified insolvency.
        </p>
      )
    },
    {
      question: "Why do bank recovery tactics become significantly more aggressive at ₹10 Lakhs?",
      answer: (
        <p>
          A ₹10 Lakh exposure represents a critical balance-sheet line item for a lending branch. Unlike micro-debts that are written off quickly, banks assign senior collection managers, retain law firms to dispatch statutory legal notices, and allocate higher recovery incentives (15% to 20%) to collection agencies. However, because ₹10 Lakhs falls below the ₹20 Lakh Debt Recovery Tribunal (DRT) statutory threshold, lenders face high court fees and 4 to 7 years of civil court delays, making a negotiated compromise settlement their most profitable resolution.
        </p>
      )
    },
    {
      question: "What should I do if I receive a legal notice under Section 25 of the PSSA for my ₹10 Lakh loan?",
      answer: (
        <p>
          You must never ignore a Section 25 Payment and Settlement Systems Act (PSSA) notice. You have a 30-day statutory window to respond. A specialized debt settlement advocate will draft a formal legal reply establishing genuine financial incapacity (such as business closure or job loss), proving the absence of criminal intent (mens rea), and formally proposing a structured compromise settlement to resolve the dispute amicably.
        </p>
      )
    },
    {
      question: "Can a bank file a case in the Debt Recovery Tribunal (DRT) for a ₹10 Lakh personal loan?",
      answer: (
        <p>
          <strong>No. Under the Recovery of Debts and Bankruptcy Act (RDB Act), 1993, the minimum pecuniary jurisdiction for a bank to approach the Debt Recovery Tribunal is ₹20 Lakhs.</strong> For a ₹10 Lakh unsecured default, the lender cannot file a DRT application and is legally restricted to civil summary suits, institutional arbitration, or Lok Adalat conciliation.
        </p>
      )
    },
    {
      question: "Can I be arrested or sent to jail for defaulting on a ₹10 Lakh unsecured personal loan?",
      answer: (
        <p>
          <strong>No. Genuine loan default is strictly a civil dispute</strong> governed by the Indian Contract Act, 1872. The police have no legal power to register an FIR, arrest you, or summon you for non-repayment. While cheque bounces (Section 138 NI Act) or NACH mandate failures (Section 25 PSSA) carry quasi-criminal provisions, they are bailable compoundable matters where court appearance through counsel and financial settlement extinguish all proceedings immediately.
        </p>
      )
    },
    {
      question: "Can a lending bank freeze or attach my salary account for a ₹10 Lakh default?",
      answer: (
        <p>
          A lending bank can only exercise a <strong>Banker's Right of General Lien and Set-Off (Section 171 of the Indian Contract Act)</strong> over deposit or savings accounts held within their own banking institution under the same PAN/CIF. They have no legal authority to attach, freeze, or auto-debit your salary accounts held at other independent commercial banks without securing a formal execution decree from a competent civil court.
        </p>
      )
    },
    {
      question: "How does an advocate negotiate a 40% to 50% haircut on a ₹10 Lakh personal loan?",
      answer: (
        <p>
          An advocate audits your loan statement to eliminate compounded penal surcharges, compiles an irrefutable hardship dossier (tax returns, termination slips, medical bills), and initiates formal representation before the bank's Zonal Settlement Committee during the NPA provisioning window. By demonstrating Net Present Value (NPV) cash recovery advantages over protracted multi-year litigation, counsel secures an authorized 40% to 50% principal haircut.
        </p>
      )
    },
    {
      question: "What is the ideal timeline to settle a ₹10 Lakh personal loan default?",
      answer: (
        <p>
          A typical ₹10 Lakh settlement requires <strong>3 to 6 months</strong> from the first missed EMI. The account moves through SMA-0, SMA-1, and SMA-2 before being declared a Non-Performing Asset (NPA) at 90 days. The optimum negotiation window opens between <strong>Day 120 and Day 180</strong>, when the lender has absorbed regulatory provisioning hits and the credit committee is authorized to grant maximum debt write-offs.
        </p>
      )
    },
    {
      question: "What must I verify in the bank's OTS Sanction Letter before transferring settlement funds?",
      answer: (
        <p>
          You must verify that the letter is issued on official bank letterhead with an authorized signatory stamp, specifies your exact loan account number and name, reflects the negotiated settlement amount and payment tranches, contains an explicit clause extinguishing all balance claims, and commits to issuing a stamped <strong>zero-balance No Dues Certificate (NDC) within 30 days</strong>. Never pay based on oral assurances or collection agent WhatsApp messages.
        </p>
      )
    },
    {
      question: "How does settling a ₹10 Lakh loan impact my CIBIL score and when can I borrow again?",
      answer: (
        <p>
          Post-settlement, the lender reports the loan status to credit bureaus as <strong>'Settled'</strong> with a <strong>₹0 balance</strong>. While this causes an immediate score reduction of 75 to 150 points, it halts continuous default degradation. By securing a secured credit card against a fixed deposit and maintaining disciplined 25% utilization, you can rebuild your CIBIL score to 750+ within 18 to 24 months.
        </p>
      )
    }
  ];

  return (
    <div
      className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-[#1F5EFF] selection:text-white"
      style={{ fontFamily: "var(--font-satoshi), Satoshi, -apple-system, BlinkMacSystemFont, sans-serif" }}
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
        style={{ backgroundColor: "#2d313d" }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-blue-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <Landmark className="w-3.5 h-3.5" />
            <span>₹10 Lakh Debt Resolution Blueprint • RBI OTS Framework</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            How to Settle ₹10 Lakh Personal Loan: <span className="text-[#3b82f6] md:text-[#60a5fa]">Legal Notice Defense &amp; 40-50% Haircut</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Defaulted on a ₹10,00,000 unsecured personal loan across SBI, HDFC, ICICI, Axis, or an NBFC? Learn how to neutralize Section 25 PSSA and Section 138 notices, stop recovery agent harassment under RBI mandates, and negotiate a 40%–50% OTS haircut for ₹4L–₹5.5L.
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

      {/* B. Stats Strip Component */}
      <StatsStrip />

      {/* Main Container: Widescreen 3-Column Layout */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">

          {/* LEFT COLUMN: Sticky Table of Contents + Quick Crux Pill */}
          <aside className="hidden lg:block sticky top-24 space-y-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-100 text-slate-900 font-bold text-xs uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-[#1F5EFF]" />
                <span>Contents Index</span>
              </div>
              <nav className="space-y-1">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block text-xs py-1.5 px-2.5 rounded-lg transition-all leading-snug ${
                      activeId === item.id
                        ? "bg-blue-50 text-[#1F5EFF] font-bold border-l-2 border-[#1F5EFF]"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium"
                    }`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick Crux Pill */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-4 text-xs text-slate-700 shadow-sm">
              <div className="flex items-center gap-2 mb-2 font-bold text-slate-900">
                <Sparkles className="w-4 h-4 text-[#1F5EFF]" />
                <span>Executive Summary</span>
              </div>
              <p className="leading-relaxed text-[11px] text-slate-600">
                At ₹10 Lakhs, lenders cannot approach the Debt Recovery Tribunal (DRT threshold is ₹20 Lakhs). While recovery agencies escalate pressure and issue Section 25 PSSA notices, banks face 5+ years in civil litigation. An advocate-managed OTS achieves a 40%–50% principal haircut with 100% penal interest waiver.
              </p>
            </div>
          </aside>

          {/* MIDDLE COLUMN: Expanded Content Column */}
          <main className="min-w-0 blog-content">

            {/* SECTION 1: Institutional Context & Exposure */}
            <section id="institutional-exposure-10-lakh-personal-loan" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <Landmark className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 01</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                1. The ₹10 Lakh Debt Reality: Bank Psychology, Exposure Tiers &amp; Risk Thresholds
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Defaulting on a ₹10 Lakh unsecured personal loan places a borrower into a uniquely intense operational zone within Indian banking institutions. Unlike retail micro-loans below ₹2 Lakhs, which credit institutions write off swiftly with minimal individual scrutiny, an exposure of ₹10,00,000 commands active monitoring from zonal asset recovery branches and senior credit managers. Lenders like HDFC Bank, ICICI Bank, State Bank of India, Axis Bank, Kotak Mahindra Bank, and major NBFCs such as Bajaj Finance or Tata Capital treat this ticket size with heightened urgency because it impacts branch-level Non-Performing Asset (NPA) ratios.
                </p>
                <p>
                  When a borrower defaults on a ₹10 Lakh personal loan, financial institutions initiate a synchronized escalation protocol. This strategy combines automated digital reminders, outsourced collection agency deployment, and the formal dispatch of statutory legal notices by empaneled advocates. However, borrowers frequently experience profound psychological distress because recovery agents deliberately exaggerate the bank&apos;s legal powers, threatening immediate police intervention, property attachment, or workplace defamation.
                </p>
                <p>
                  Understanding the structural limitations of the bank&apos;s legal arsenal is essential to maintaining composure and executing a strategic resolution. In India, genuine loan default is strictly a civil contract breach governed by the Indian Contract Act, 1872. Furthermore, under the Recovery of Debts and Bankruptcy Act (RDB Act), 1993, the minimum pecuniary threshold required for a financial institution to approach the Debt Recovery Tribunal (DRT) is ₹20 Lakhs. Consequently, banks are legally barred from initiating DRT summary attachment proceedings against a ₹10 Lakh personal loan. While lenders retain the right to file a regular summary civil suit under Order XXXVII of the Civil Procedure Code (CPC), doing so requires significant non-refundable state court fees (typically 4% to 7% of the claim value) and commits the bank to a judicial process lasting 4 to 8 years.
                </p>
              </div>

              {/* Statutory Callout Box */}
              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl p-5 my-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong className="font-bold block text-amber-950 mb-1 text-sm">Statutory Jurisdictional Barrier: DRT Barred Below ₹20 Lakhs</strong>
                    Under Section 1(4) of the Recovery of Debts Due to Banks and Financial Institutions Act, Debt Recovery Tribunals possess zero pecuniary jurisdiction over debts under ₹20 Lakhs. A ₹10 Lakh personal loan default cannot be dragged to the DRT, compelling the bank to rely either on costly civil litigation or a mutually negotiated One-Time Settlement (OTS).
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 2: NPA Aging & Provisioning Mathematics */}
            <section id="npa-classification-provisioning-mathematics" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <Calculator className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 02</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                2. Delinquency Aging, NPA Provisioning &amp; Net Present Value (NPV) Mechanics
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  To secure an optimal settlement haircut of 40% to 50% on a ₹10 Lakh personal loan, one must analyze the institutional accounting incentives governing commercial lenders. In compliance with the Reserve Bank of India&apos;s Prudential Framework on Resolution of Stressed Assets, every overdue loan transitions through strictly regulated classification stages based on Days Past Due (DPD). The account is categorized as Special Mention Account-0 (SMA-0) for 1 to 30 days overdue, SMA-1 for 31 to 60 days, and SMA-2 for 61 to 90 days.
                </p>
                <p>
                  Upon crossing the critical 90-day threshold of continuous non-payment, the loan is formally classified as a Non-Performing Asset (NPA) under the Substandard category. At this junction, the RBI Master Circular on Income Recognition, Asset Classification and Provisioning (IRACP) mandates that the lender set aside an immediate 15% provisioning allocation against their operating profits for unsecured debt. If the default continues past 12 months, the account slips into Doubtful Asset Stage 1 (D1), triggering a mandatory 25% to 40% provisioning requirement, which eventually climbs to 100% for Doubtful D2 and Loss Asset categories.
                </p>
                <p>
                  This mandatory balance-sheet provisioning creates an economic imperative for the bank. Locked provisioning capital impairs the bank&apos;s Return on Capital Employed (ROCE) and restricts its lending capacity. When evaluating a settlement proposal, the bank&apos;s Credit Committee does not operate on emotional hostility; instead, they execute a Net Present Value (NPV) recovery analysis. The committee compares the guaranteed cash received today via a One-Time Settlement against the discounted present value of potential recoveries achieved through 5 to 7 years of civil court litigation, factoring in 10% annual inflation, legal retainer expenses, and administrative overhead.
                </p>
              </div>

              {/* Table of NPA Provisioning Stages */}
              <div className="overflow-x-auto my-6">
                <table>
                  <thead>
                    <tr>
                      <th>Delinquency Stage</th>
                      <th>Days Past Due (DPD)</th>
                      <th>RBI Mandatory Provisioning</th>
                      <th>Bank Settlement Leverage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>SMA-0 / SMA-1</strong></td>
                      <td>1 – 60 Days</td>
                      <td>Standard Provisioning (0.4%)</td>
                      <td>Zero Haircut; Focus on EMI Restructuring</td>
                    </tr>
                    <tr>
                      <td><strong>SMA-2</strong></td>
                      <td>61 – 90 Days</td>
                      <td>Pre-NPA Alert Stage</td>
                      <td>Waiver of Late Fees &amp; Bounce Penalties Only</td>
                    </tr>
                    <tr>
                      <td><strong>Substandard NPA</strong></td>
                      <td>91 – 180 Days</td>
                      <td>15% Capital Provisioning</td>
                      <td>25% – 35% Principal Haircut Window Opens</td>
                    </tr>
                    <tr>
                      <td><strong>Doubtful D1 NPA</strong></td>
                      <td>181 – 365 Days</td>
                      <td>25% – 40% Capital Provisioning</td>
                      <td><strong>40% – 55% Principal Haircut Sweet Spot</strong></td>
                    </tr>
                    <tr>
                      <td><strong>Doubtful D2 / Loss</strong></td>
                      <td>365+ Days</td>
                      <td>100% Capital Written-Off</td>
                      <td>55% – 70% Maximum Hardship Haircut</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 3: Section 25 PSSA & Section 138 NI Act Defense */}
            <section id="statutory-notices-section-25-pssa-section-138-ni-act" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <Gavel className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 03</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                3. Legal Notice Escalation: Section 25 PSSA, Section 138 NI Act &amp; Conciliation
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  At a ₹10 Lakh outstanding principal, lending institutions routinely issue statutory legal notices following automated banking mandate failures. When the electronic National Automated Clearing House (e-NACH) or standing instruction bounces due to insufficient funds, the lender dispatches a legal notice under <strong>Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA)</strong>. Similarly, if physical post-dated security cheques deposited by the borrower dishonor, the bank issues a demand notice under <strong>Section 138 of the Negotiable Instruments Act, 1881 (NI Act)</strong>.
                </p>
                <p>
                  Receiving these legal notices generates severe panic, but understanding their procedural framework dispels unnecessary fear. Both Section 25 of the PSSA and Section 138 of the NI Act are quasi-criminal, bailable offenses created to ensure the commercial integrity of payment instruments. Under the law, the lender must provide the borrower with a mandatory <strong>30-day statutory demand period</strong> from the date of notice receipt to resolve the financial claim before any formal complaint can be filed before a Judicial Magistrate First Class (JMFC) or Metropolitan Magistrate (MM).
                </p>
                <p>
                  Engaging an experienced debt settlement advocate to draft a comprehensive, point-by-point legal response within this 30-day window is critical. The advocate&apos;s reply achieves three vital legal objectives: first, it establishes that the non-payment arises strictly from genuine, documented financial hardship (such as catastrophic medical emergencies, job loss, or commercial bankruptcy) rather than fraudulent intent or willful default (rebutting criminal mens rea); second, it places on record that the disputed instrument was executed solely as collateral security rather than against a crystallized, undisputed liability; and third, it formally invites the financial institution to resolve the outstanding balance through bilateral conciliation or a compromise One-Time Settlement.
                </p>
              </div>

              {/* Highlight Box on Quasi-Criminal Defense */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 my-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <Scale className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                    <strong className="font-bold block text-slate-950 mb-1 text-sm">Judicial Precedent: Compounding Under Section 147 NI Act</strong>
                    Under Section 147 of the Negotiable Instruments Act and landmark Supreme Court rulings (including <em>M/s Meters and Instruments Pvt. Ltd. v. Kanchan Mehta</em>), cheque bounce and NACH dishonor cases are compoundable offenses. Upon payment of the agreed settlement sum, the criminal complaint is extinguished with zero conviction or legal blemish.
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 4: Sole Arbitration & Civil Suit Realities */}
            <section id="unilateral-arbitration-and-civil-suit-defense" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <ShieldAlert className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 04</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                4. Sole Arbitration Notices &amp; Civil Money Suit Realities
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  In addition to banking mandate notices, private banks and NBFCs frequently initiate unilateral arbitration proceedings for ₹10 Lakh loan defaults by invoking boiler-plate dispute resolution clauses embedded in standard loan agreements. Borrowers often receive letters from institutional arbitration councils or sole arbitrators located in metropolitan hubs like Mumbai, Delhi, or Chennai, demanding appearance or threatening an ex-parte arbitral award.
                </p>
                <p>
                  However, unilateral appointment of a sole arbitrator by a lending institution without the express, post-dispute written consent of the borrower is legally impermissible. In the landmark judgment <em>Perkins Eastman Architects DPC v. HSCC (India) Ltd.</em>, followed by numerous High Court rulings, the Supreme Court of India established that a party interested in the dispute outcome cannot unilaterally appoint an arbitrator. An advocate can immediately challenge such proceedings by raising statutory objections under Section 12(5) and Section 14 of the Arbitration and Conciliation Act, 1996, effectively stalling unilateral arbitral pressure.
                </p>
                <p>
                  When lenders consider filing a summary civil suit under Order XXXVII of the CPC, they encounter daunting operational friction. Beyond payment of hefty state ad-valorem court fees, serving summons, framing issues, conducting cross-examination of bank officers, and obtaining a final decree typically consumes half a decade. Even after securing a money decree, executing it against an unsecured individual with no unencumbered commercial assets requires additional execution petitions under Order XXI CPC. Recognizing this protracted attrition, bank legal departments overwhelmingly prefer executing a compromise OTS that recovers liquid cash within 30 to 90 days.
                </p>
              </div>
            </section>

            {/* SECTION 5: Visual Resolution Blueprint (Infographic Banner) */}
            <section id="infographic-resolution-blueprint" className="mb-10 scroll-mt-24">
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
                        ₹10 Lakh Personal Loan Settlement &amp; Defense Process Overview
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/10-lakh-personal-loan-settlement.jpg"
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
                      src="/images/infographics/10-lakh-personal-loan-settlement.jpg"
                      alt="₹10 Lakh Personal Loan Settlement Process Summary Infographic"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Takeaway:</strong> Settle a ₹10 Lakh loan for ₹4L–₹5.5L with 100% penal waiver and zero civil/criminal liability.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* SECTION 6: Haircut Formula & Settlement Slabs */}
            <section id="haircut-calculation-ots-percentages-10-lakh" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <Percent className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 06</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                6. Realistic OTS Haircut Formula: Settling ₹10 Lakhs for ₹4L–₹5.5L
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  When calculating the settlement figure for a defaulted ₹10 Lakh personal loan, borrowers must never accept the inflated total claim presented on bank collection notices. Over 6 to 12 months of default, financial institutions compound exorbitant penal interest (often 24% to 36% annually), bounce charges, and administrative recovery levies, swelling an original ₹10 Lakh principal into an artificial ledger liability of ₹13 Lakhs to ₹15 Lakhs.
                </p>
                <p>
                  A legitimate One-Time Settlement executed under RBI Compromise Settlement frameworks follows a two-tier haircut calculation:
                </p>
                <p>
                  <strong>Tier 1: Complete 100% Penal Fee Waiver.</strong> Under RBI regulations and fair lending practices, all penal charges, bounce fees, legal notices costs, and post-default compound interest are completely eliminated from the negotiation table before assessing the underlying principal.
                </p>
                <p>
                  <strong>Tier 2: Principal Debt Haircut (40% to 60%).</strong> The negotiation focuses exclusively on the remaining core principal balance of ₹10,00,000. Depending on the delinquency vintage (120 to 360+ days) and the strength of the documented financial hardship, the bank&apos;s Credit Committee sanctions a final settlement between <strong>₹4,00,000 and ₹5,50,000</strong>. If the borrower can remit the funds in a single bullet payment, banks frequently approve the deeper end of the haircut spectrum (₹4.0L to ₹4.5L). If the settlement is structured over 2 to 3 monthly installments, the approved figure typically ranges between ₹4.8L and ₹5.5L.
                </p>
              </div>

              {/* Settlement Calculation Breakdown Table */}
              <div className="overflow-x-auto my-6">
                <table>
                  <thead>
                    <tr>
                      <th>Settlement Component</th>
                      <th>Bank Ledger Claim</th>
                      <th>Negotiated OTS Treatment</th>
                      <th>Final Settlement Payable</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Core Principal Outstanding</td>
                      <td>₹10,00,000</td>
                      <td>40% – 55% Hardship Haircut</td>
                      <td><strong>₹4,50,000 – ₹5,50,000</strong></td>
                    </tr>
                    <tr>
                      <td>Accrued Normal Interest</td>
                      <td>₹1,80,000</td>
                      <td>100% Complete Waiver</td>
                      <td><strong>₹0 (Waived)</strong></td>
                    </tr>
                    <tr>
                      <td>Compounded Penal Interest</td>
                      <td>₹1,45,000</td>
                      <td>100% Complete Waiver</td>
                      <td><strong>₹0 (Waived)</strong></td>
                    </tr>
                    <tr>
                      <td>NACH / Cheque Bounce Fees</td>
                      <td>₹35,000</td>
                      <td>100% Complete Waiver</td>
                      <td><strong>₹0 (Waived)</strong></td>
                    </tr>
                    <tr className="bg-blue-50/70 font-bold text-slate-900">
                      <td>Total Liability Comparison</td>
                      <td>₹13,60,000</td>
                      <td>Overall Debt Relief: ~63%</td>
                      <td>₹4,50,000 – ₹5,50,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 7: Recovery Harassment Defense */}
            <section id="recovery-harassment-and-rbi-compliance-shield" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <ShieldCheck className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 07</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                7. Recovery Agent Harassment Defense &amp; Workplace Protection
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Because a ₹10 Lakh exposure represents an attractive recovery commission for third-party Debt Recovery Agencies (DRAs), borrowers often face intense collection misconduct. Unethical recovery agents frequently resort to abusive calling at odd hours, sending threatening messages via WhatsApp, contacting distant relatives whose numbers were never provided as references, and staging unauthorized visits to the borrower&apos;s workplace or residential society to cause social embarrassment.
                </p>
                <p>
                  Every borrower in India possesses robust, enforceable legal protections against recovery harassment under the <strong>RBI Master Directions on Recovery Agents (August 2022)</strong> and the <em>Charter of Customer Rights</em>. Key statutory mandates include:
                </p>
                <p>
                  • <strong>Time &amp; Frequency Restrictions:</strong> Recovery calls and home visits are strictly restricted between 8:00 AM and 7:00 PM. Repeated calling or calling late at night constitutes an actionable regulatory violation.
                </p>
                <p>
                  • <strong>Strict Prohibition of Third-Party Disclosure:</strong> Lenders and collection agents are legally forbidden from contacting neighbors, colleagues, relatives, or employers who are not co-borrowers or legal guarantors. Disclosing debt details to third parties violates constitutional privacy rights upheld in the <em>Puttaswamy</em> ruling.
                </p>
                <p>
                  • <strong>Mandatory Agent Identity Disclosure:</strong> Recovery personnel must carry valid identity cards, Indian Institute of Banking &amp; Finance (IIBF) DRA certifications, and an official authorization letter from the principal lending bank.
                </p>
                <p>
                  When recovery agents violate these guidelines, SettleLoans advocates issue formal cease-and-desist legal notices directly to the bank&apos;s Managing Director and Principal Nodal Officer (PNO). If harassment persists, complaints are lodged on the RBI Integrated Ombudsman portal (cms.rbi.org.in) and local police complaints are filed for criminal intimidation under Section 351/352 of the Bharatiya Nyaya Sanhita (BNS). In practice, formal legal intervention compels banks to immediately withdraw rogue recovery agents and re-route negotiations to their central settlement desk.
                </p>
              </div>
            </section>

            {/* SECTION 8: Comparative Resolution Table */}
            <section id="comparative-resolution-avenues-table" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <Layers className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 08</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                8. Comparative Resolution Avenues: OTS vs Lok Adalat vs Restructuring
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Borrowers facing an unmanageable ₹10 Lakh personal loan have four distinct institutional avenues to consider. Evaluating their legal enforceability, cash requirements, and timeline ensures that you choose the most advantageous path for your financial situation.
                </p>
              </div>

              {/* 4-Sided Bordered Comparative Table */}
              <div className="overflow-x-auto my-6">
                <table>
                  <thead>
                    <tr>
                      <th>Resolution Channel</th>
                      <th>Typical Haircut / Discount</th>
                      <th>Resolution Timeframe</th>
                      <th>Legal Finality &amp; Status</th>
                      <th>Cash Outflow Requirement</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Bilateral One-Time Settlement (OTS)</strong></td>
                      <td>40% – 60% Principal Haircut + 100% Penal Waiver</td>
                      <td>45 – 90 Days</td>
                      <td>Bank Sanction Letter + Official ₹0 No Dues Certificate</td>
                      <td>Lump-sum or 2–3 Structured Monthly Tranches</td>
                    </tr>
                    <tr>
                      <td><strong>National Lok Adalat Settlement</strong></td>
                      <td>35% – 50% Principal Haircut + 100% Penal Waiver</td>
                      <td>Quarterly Sittings</td>
                      <td>Final, Non-Appealable Civil Court Decree (DLSA)</td>
                      <td>Immediate Lump-sum on Lok Adalat Award Date</td>
                    </tr>
                    <tr>
                      <td><strong>Loan Restructuring / Rescheduling</strong></td>
                      <td>0% Haircut (Tenure Extended; Interest Capitalized)</td>
                      <td>30 – 60 Days</td>
                      <td>Revised Loan Agreement with Higher Total Interest</td>
                      <td>Continuing Monthly EMI Outflow over 5–7 Years</td>
                    </tr>
                    <tr>
                      <td><strong>Bank Civil Summary Suit (Order 37)</strong></td>
                      <td>0% Discount; 100% Claim + Court Interest &amp; Legal Costs</td>
                      <td>4 – 8 Years</td>
                      <td>Contested Civil Court Judgment &amp; Execution Decree</td>
                      <td>Ongoing Advocate Fees &amp; Court Appearance Costs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: 5-Step Legal Settlement Roadmap */}
            <section id="step-by-step-advocate-settlement-roadmap" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <FileCheck className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 09</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                9. The 5-Step Strategic Legal Settlement Roadmap
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Executing a legally binding, deep-discount settlement on a ₹10 Lakh personal loan requires disciplined execution through five distinct strategic phases:
                </p>
                <p>
                  <strong>Phase 1: Forensic Loan Ledger Audit.</strong> SettleLoans legal associates inspect your comprehensive loan account statement to isolate the actual principal disbursed from inflated penal surcharges, late fees, GST levies, and automated mandate bounce penalties.
                </p>
                <p>
                  <strong>Phase 2: Financial Hardship Dossier Compilation.</strong> A compelling legal settlement must be supported by verifiable evidence of genuine insolvency. Counsel assists in assembling a robust hardship dossier containing termination letters, salary reduction slips, audited business P&amp;L dips, ITR filings, or hospital discharge summaries.
                </p>
                <p>
                  <strong>Phase 3: Formal Legal Representation &amp; Communication Channelling.</strong> A formal Letter of Representation and advocate notice reply is served to the bank, notifying them that all future communications must be directed exclusively to legal counsel. This instantly halts unauthorized telephonic harassment and home visits.
                </p>
                <p>
                  <strong>Phase 4: Direct Credit Committee Negotiation.</strong> Once the loan enters the 120+ day NPA provisioning window, our senior advocates negotiate directly with the bank&apos;s Zonal Settlement Authority, leveraging NPV calculations and hardship evidence to secure an approved 40% to 50% haircut.
                </p>
                <p>
                  <strong>Phase 5: Stamped Sanction Letter Vetting &amp; ₹0 NDC Issuance.</strong> Before any payment is transferred, advocates rigorously audit the bank&apos;s official settlement sanction letter to ensure complete extinguishment of all residual claims. Following payment, we track and secure the stamped No Dues Certificate (NDC) within 21 to 30 days.
                </p>
              </div>
            </section>

            {/* SECTION 10: CIBIL Trajectory & Credit Rebuilding */}
            <section id="cibil-score-trajectory-and-credit-rebuilding" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <TrendingUp className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 10</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                10. Credit Bureau Trajectory &amp; Rebuilding a 750+ CIBIL Score
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  A critical question for every borrower settling a ₹10 Lakh loan is the long-term impact on creditworthiness. Following full payment of the agreed settlement sum, the lending bank is legally required under the Credit Information Companies (Regulation) Act (CICRA), 2005, to update all four credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark) within 30 to 45 days. The loan status transitions from &apos;Overdue / Default / NPA&apos; to <strong>&apos;Settled&apos;</strong>, and the current balance is reduced to <strong>₹0</strong>.
                </p>
                <p>
                  While a &apos;Settled&apos; status results in an immediate credit score contraction of 75 to 150 points, it provides an invaluable operational reset: it permanently stops the compounding default markers (&apos;90+&apos;, &apos;120+&apos;, &apos;Loss&apos;) that destroy creditworthiness month after month. Under RBI guidelines, a 12-month cooling-off period applies before mainstream unsecured personal loans can be sanctioned.
                </p>
                <p>
                  Borrowers can systematically restore their CIBIL score back to <strong>750+ within 18 to 24 months</strong> by adopting a proven credit rehabilitation strategy:
                </p>
                <p>
                  1. <strong>Open a Fixed Deposit-Backed Secured Credit Card:</strong> Obtain a secured credit card (such as IDFC WOW, OneCard, or SBI Unnati) against a fixed deposit of ₹30,000 to ₹50,000.
                </p>
                <p>
                  2. <strong>Maintain Strict 20%–30% Credit Utilization:</strong> Restrict monthly card utilization to under 30% of the allocated credit limit.
                </p>
                <p>
                  3. <strong>100% Punctual Total Payment:</strong> Set up automated total bill debits to maintain a spotless 24-month repayment track record, signaling restored credit discipline to future lenders.
                </p>
              </div>
            </section>

            {/* SECTION 11: Company Section (Rendered before FAQs) */}
            <div id="company-resolution-section" className="mb-10 scroll-mt-24">
              <CompanySection />
            </div>

            {/* SECTION 12: Interactive FAQ Accordion */}
            <section id="faqs" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <HelpCircle className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 12</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6 leading-tight">
                Frequently Asked Questions: ₹10 Lakh Personal Loan Settlement
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

            {/* Official Sources & Regulatory References Strip */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-10 text-xs text-slate-600">
              <div className="flex items-center gap-2 font-bold text-slate-900 mb-3 text-sm">
                <Landmark className="w-4 h-4 text-[#1F5EFF]" />
                <span>Statutory References &amp; Official Regulatory Sources</span>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <a
                    href="https://www.rbi.org.in/Scripts/BS_ViewMasCirculardetails.aspx?id=12513"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] hover:underline"
                  >
                    RBI Master Circular – Prudential Framework on Resolution of Stressed Assets &amp; Compromise Settlements
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] hover:underline"
                  >
                    RBI Master Directions on Recovery Agents &amp; Fair Practices Code (August 2022)
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <a
                    href="https://www.indiacode.nic.in/handle/123456789/2088"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] hover:underline"
                  >
                    Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA e-Mandate Bounce Laws)
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <a
                    href="https://www.indiacode.nic.in/handle/123456789/2281"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] hover:underline"
                  >
                    Section 138 &amp; Section 147 of the Negotiable Instruments Act, 1881 (Cheque Dishonor &amp; Compounding)
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] hover:underline"
                  >
                    Legal Services Authorities Act, 1987 – National Lok Adalat Dispute Settlement Provisions
                  </a>
                </li>
              </ul>
            </div>

            {/* 10 Internal Topic Badges Strip */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 mb-10 shadow-sm">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                Explore Related Loan Settlement &amp; Legal Guides
              </div>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/5-lakh-personal-loan-settlement"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  ₹5 Lakh Loan Settlement
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Settlement CIBIL Impact
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Bank OTS Policy Guide
                </Link>
                <Link
                  href="/personal-loan-settlement-letter-format"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Sanction Letter Verification
                </Link>
                <Link
                  href="/personal-loan-settlement-vs-closure"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Settlement vs Closure
                </Link>
                <Link
                  href="/credit-card-vs-personal-loan-settlement"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Credit Card vs Loan Settlement
                </Link>
                <Link
                  href="/hdfc-personal-loan-settlement"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  HDFC Loan Settlement
                </Link>
                <Link
                  href="/icici-personal-loan-settlement"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  ICICI Loan Settlement
                </Link>
                <Link
                  href="/sbi-personal-loan-settlement"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  SBI Loan Settlement
                </Link>
                <Link
                  href="/bajaj-finance-personal-loan-settlement"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Bajaj Finance Settlement
                </Link>
              </div>
            </div>

          </main>

          {/* RIGHT COLUMN: Author Bio Card, Emergency Advocate CTA & Trust Signals */}
          <aside className="space-y-5 lg:sticky lg:top-24">

            {/* Author Bio Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm text-slate-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1F5EFF] to-blue-800 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                  AJ
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Ashish Jhangra</h4>
                  <p className="text-xs text-slate-500">Lead Debt Settlement Counsel</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Specialist in banking dispute resolution, RBI compromise settlements, and defense against Section 25 PSSA and Section 138 NI Act notices across Indian tribunals.
              </p>
              <div className="text-[11px] text-blue-600 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Legal Author • SettleLoans</span>
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-[#0A2540] to-slate-900 border border-slate-700 rounded-2xl p-5 text-white shadow-md">
              <div className="inline-flex items-center gap-1.5 bg-red-500/20 text-red-300 text-[10px] font-black uppercase px-2.5 py-1 rounded-full border border-red-500/30 mb-3">
                <ShieldAlert className="w-3 h-3" />
                <span>Notice Defense Desk</span>
              </div>
              <h3 className="text-base font-black text-white mb-2 leading-snug">
                Facing a ₹10 Lakh Legal Notice or Harassment?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Get immediate advocate intervention to respond to Section 25 PSSA / Section 138 notices, stop recovery harassment, and secure a 40%–50% OTS haircut.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all flex items-center justify-center gap-2 shadow-sm text-center"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Request Urgent Advocate Callback</span>
              </Link>
            </div>

            {/* Trust Signals Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-slate-700 shadow-sm space-y-3">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#1F5EFF]" />
                <span>SettleLoans Trust Signals</span>
              </div>
              <div className="space-y-2.5 text-xs">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>100% RBI Compliant:</strong> Settlements executed solely under official RBI compromise frameworks.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Settlement:</strong> All settlement payments made directly to bank loan accounts.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Stamped ₹0 NDC:</strong> Guaranteed audit and delivery of official bank No Dues Certificate.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Over ₹180+ Crores Settled:</strong> Trusted by 12,000+ borrowers across India.</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
