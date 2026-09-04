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
  PhoneCall,
  ExternalLink,
  Lock,
  Building2,
  Landmark,
  Check,
  BookOpen,
  ShieldAlert,
  Scale,
  FileText,
  HelpCircle,
  Percent,
  Calculator,
  Briefcase,
  Gavel,
  FileCheck,
  UserCheck,
  AlertCircle
} from 'lucide-react';

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
          isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-base leading-relaxed border-t border-slate-100 pt-4">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default function SbiPersonalLoanSettlementClient() {
  const [activeId, setActiveId] = useState<string>('understanding-sbi-loan-defaults');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'understanding-sbi-loan-defaults', title: '1. PSU Governance & Architecture' },
    { id: 'sbi-npa-delinquency-timeline', title: '2. Delinquency Timeline & SARB' },
    { id: 'sbi-rin-samadhan-ots-policy', title: '3. Rin Samadhan & Haircut Formula' },
    { id: 'bankers-lien-setoff-protections', title: '4. Section 171 Lien & Protections' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Settlement Blueprint' },
    { id: 'why-sbi-prefers-lok-adalat', title: '6. SBI Preference for Lok Adalat' },
    { id: 'legal-defense-sbi-notices', title: '7. Legal Defense & Summons' },
    { id: 'step-by-step-settlement-roadmap', title: '8. Step-by-Step OTS Protocol' },
    { id: 'sanction-letter-audit-ndc-verification', title: '9. Sanction Letter & ₹0 NDC Mandate' },
    { id: 'cibil-impact-credit-rehabilitation', title: '10. CIBIL Trajectory & Repair' },
    { id: 'company-resolution-section', title: '11. SettleLoans Legal Advisory' },
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
      question: "What is the SBI personal loan settlement process and how does it work online?",
      answer: (
        <p>
          The <strong>SBI personal loan settlement process</strong> is a formal compromise resolution between State Bank of India and a distressed borrower unable to repay unsecured credit like SBI Xpress Credit. Once an account defaults beyond 90 to 180 days and enters Non-Performing Asset (NPA) status, the borrower applies through SBI&apos;s online OTS portal (Rin Samadhan or YONO) or submits a formal petition to the <strong>Stressed Assets Recovery Branch (SARB)</strong>. SBI evaluates the proposal against board-approved compromise policies and Net Present Value (NPV) benchmarks. Upon committee sanction, an official stamped <strong>OTS Sanction Letter</strong> is issued, and upon direct remittance into the loan account, SBI issues a ₹0 <strong>No Dues Certificate (NDC)</strong>.
        </p>
      )
    },
    {
      question: "What is the SBI Rin Samadhan Scheme and who qualifies?",
      answer: (
        <p>
          The <strong>SBI Rin Samadhan Scheme</strong> is State Bank of India&apos;s board-approved One-Time Settlement framework formulated under RBI compromise guidelines. It provides standardized, non-discretionary debt relief to borrowers whose loans are classified as Substandard, Doubtful (D1/D2/D3), or Loss Assets. To qualify, borrowers must demonstrate genuine involuntary hardship—such as job termination, critical illness, or business failure. Wilful defaulters and fraud accounts are strictly excluded under Central Vigilance Commission (CVC) rules. The scheme offers structured principal haircuts (40%–65%) and 100% waiver of unaccrued penal interest.
        </p>
      )
    },
    {
      question: "Why is settling with SBI different from private banks?",
      answer: (
        <p>
          Unlike private sector lenders where credit managers have broad commercial discretion to negotiate case-by-case waivers, SBI is a Public Sector Undertaking (PSU) governed by the <em>State Bank of India Act, 1955</em>. Every rupee waived is public money subject to statutory audit by the <strong>Central Vigilance Commission (CVC)</strong> and the <strong>Comptroller and Auditor General (CAG)</strong>. To protect bank officers from vigilance inquiries, all SBI debt concessions must adhere strictly to board-approved settlement circulars or judicial conciliation forums like the National Lok Adalat.
        </p>
      )
    },
    {
      question: "What percentage of debt waiver or haircut does SBI typically approve?",
      answer: (
        <p>
          On unsecured personal loans and Xpress Credit facilities, SBI typically approves debt haircuts between <strong>40% and 65%</strong> of the outstanding ledger principal. Accounts in Doubtful (D2/D3) or Loss Asset categories—where SBI has already provisioned 100% against the debt on its balance sheet—attract the highest discounts. Early Substandard NPAs qualify for 30% to 45% waivers. In all approved compromise settlements, 100% of accumulated penal interest, overdue charges, and unaccrued memorandum interest are completely eliminated.
        </p>
      )
    },
    {
      question: "Can SBI freeze your savings account or debit funds automatically?",
      answer: (
        <p>
          Under the <strong>Banker&apos;s Right of General Lien and Set-Off (Section 171 of the Indian Contract Act, 1872)</strong>, SBI has the legal power to debit funds from any savings account, fixed deposit, or recurring deposit held within SBI under the same CIF/PAN to adjust overdue loan dues. However, <strong>SBI cannot access or debit accounts held with other independent banks</strong> (such as HDFC, ICICI, or PNB) without an explicit Civil Court or DRT attachment order. Furthermore, statutory pensions and PPF balances enjoy absolute immunity under <em>Section 60 of the Code of Civil Procedure (CPC)</em>.
        </p>
      )
    },
    {
      question: "Why does SBI heavily favor settling through the National Lok Adalat?",
      answer: (
        <p>
          SBI actively participates in the <strong>National Lok Adalat</strong> under the <em>Legal Services Authorities Act, 1987</em> because a Lok Adalat compromise award carries the status of a <strong>binding Civil Court Decree under Section 21</strong>. No appeal lies against a Lok Adalat decree in any court. This judicial finality provides total immunity to SBI officials against future vigilance probes or audit queries, enabling the bank to deploy its highest pre-approved discount mandates (45% to 65% haircut) with rapid account closure.
        </p>
      )
    },
    {
      question: "What legal actions can SBI initiate if you default on a personal loan?",
      answer: (
        <p>
          Defaulting on an unsecured personal loan is strictly a civil breach of contract and cannot result in police arrest or criminal FIRs. However, SBI can initiate statutory recovery actions: (1) <strong>Section 25 of the Payment and Settlement Systems Act, 2007</strong> for NACH/e-mandate dishonor; (2) <strong>Section 138 of the Negotiable Instruments Act, 1881</strong> for bounced cheques; (3) <strong>Summary Civil Suits under Order 37 CPC</strong>; and (4) <strong>Debt Recovery Tribunal (DRT)</strong> claims if total aggregate exposure exceeds ₹20 Lakhs. All these notices can be resolved through formal compromise negotiations.
        </p>
      )
    },
    {
      question: "How does an SBI personal loan settlement affect your CIBIL score?",
      answer: (
        <p>
          Upon full payment of the agreed settlement sum, SBI updates credit bureau records (CIBIL, Experian, Equifax, CRIF High Mark) to <strong>&apos;Settled&apos;</strong> or <strong>&apos;Post-Write-Off Settled&apos;</strong> with an outstanding balance of <strong>₹0</strong>. This causes an initial credit score dip of 75 to 150 points and triggers a mandatory 12-month cooling period under RBI rules before fresh unsecured credit is granted. However, a &apos;Settled&apos; tag with zero balance stops ongoing monthly default penalties, allowing you to rebuild a 750+ score within 18 to 24 months using secured credit cards.
        </p>
      )
    },
    {
      question: "What must you verify in an official SBI OTS Sanction Letter before paying?",
      answer: (
        <p>
          Borrowers must verify five non-negotiable points: (1) Official SBI letterhead bearing the branch code, seal, and authorized officer signature (AGM/DGM/BM) with HRMS employee ID; (2) Explicit statement of the exact negotiated settlement sum and tranche dates; (3) Unambiguous full and final debt extinguishment clause; (4) Direct payment instructions into your specific SBI Loan Account number (never to third-party accounts); and (5) An immediate stamped bank receipt upon deposit.
        </p>
      )
    },
    {
      question: "How long does SBI take to issue the No Dues Certificate (NDC) after settlement?",
      answer: (
        <p>
          Under <strong>RBI Circular RBI/2023-24/60</strong>, all regulated lenders including SBI are legally mandated to complete full account closure and issue an official <strong>No Dues Certificate (NDC)</strong> within <strong>30 calendar days</strong> of receiving the final settlement payment. If SBI delays issuance beyond 30 days due to operational lapses, the bank is legally required to pay statutory compensation of <strong>₹5,000 per day of delay</strong> directly to the borrower.
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
          margin: 1.5rem 0;
          font-size: 0.9em;
        }
        .blog-content th {
          background: #F8FAFC;
          padding: 0.75rem 0.9rem;
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
          padding: 0.75rem 0.9rem;
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

      {/* Hero Section */}
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
            <span>Bank-Specific Dispute Resolution • State Bank of India</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            SBI Personal Loan Settlement: <span className="text-[#3b82f6] md:text-[#60a5fa]">OTS Rules, Rin Samadhan Scheme &amp; Lok Adalat</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Defaulted on an SBI personal loan, Xpress Credit, or pension loan? Learn State Bank of India&apos;s PSU-specific OTS policies, Rin Samadhan guidelines, SARB escalation, Lok Adalat compromise mandates, and how to negotiate a legal debt waiver up to 65%.
          </p>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-3 mb-5 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Written by <strong>Ashish Jhangra</strong></span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Updated: August 2026</span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>RBI &amp; CVC Compliance Verified</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Negotiate SBI Settlement</span>
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

      {/* Stats Strip Component */}
      <StatsStrip />

      {/* 3-Column Layout Container */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column (Sticky TOC) */}
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

            {/* Quick Summary Pill */}
            <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>SBI Quick Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                SBI operates under strict CVC audit rules. Compromise settlements must follow the Rin Samadhan scheme or Lok Adalat conciliation to secure 40%–65% debt waivers with absolute legal finality.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Content) */}
          <main className="w-full min-w-0 blog-content">
            
            {/* Section 1 */}
            <section id="understanding-sbi-loan-defaults" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. Institutional Context &amp; PSU Governance</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight">
                SBI&apos;s Retail Credit Architecture &amp; Public Sector Accountability
              </h2>
              <p className="text-slate-700 leading-relaxed mb-3 text-base">
                State Bank of India (SBI) is India&apos;s largest public sector lender, managing over a quarter of domestic consumer credit. Its unsecured portfolio—spanning SBI Xpress Credit for salaried personnel, Quick Personal Loans, and Pension Loans—is underwritten against strict employment stability benchmarks. When economic hardship disrupts repayments, borrowers encounter a dispute resolution framework fundamentally distinct from private banking institutions.
              </p>
              <p className="text-slate-700 leading-relaxed mb-3 text-base">
                As a statutory corporation governed by the <em>State Bank of India Act, 1955</em>, SBI manages public funds under constant scrutiny from the <strong>Central Vigilance Commission (CVC)</strong> and the <strong>Comptroller and Auditor General (CAG)</strong>. While private bank managers possess broad commercial latitude to grant arbitrary haircuts, SBI officers face personal disciplinary liability for unjustified debt write-offs. Consequently, SBI settlements must adhere strictly to board-approved compromise circulars like the <strong>Rin Samadhan Scheme</strong> or statutory conciliation before the <strong>National Lok Adalat</strong>.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong>Statutory Right to Settle:</strong> Under RBI&apos;s Master Direction on Compromise Settlements (2023), public sector banks are mandated to offer structured settlement avenues. Borrowers suffering verifiable insolvency (job loss, business failure, or critical illness) are legally entitled to request compromise debt waivers without being classified as wilful defaulters.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section id="sbi-npa-delinquency-timeline" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>2. Delinquency Timeline &amp; Asset Classification</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight">
                SBI Default Progression: From SMA-0 to SARB Branch Decentralization
              </h2>
              <p className="text-slate-700 leading-relaxed mb-3 text-base">
                When an EMI bounces, SBI&apos;s core banking platform triggers automated delinquency tracking under RBI Income Recognition and Asset Classification (IRACP) norms. Unsecured retail loans progress through five regulatory tiers that govern provisioning allocations, administrative transfer to specialized recovery branches, and settlement viability.
              </p>
              <p className="text-slate-700 leading-relaxed mb-3 text-base">
                During the first 90 days (SMA-0/1/2), the loan remains with the home branch. Beyond 90 days, the account is declared a <strong>Non-Performing Asset (NPA)</strong> and moved to the <strong>Retail Assets Central Processing Centre (RACC)</strong> or <strong>Stressed Assets Recovery Branch (SARB)</strong>.
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Delinquency Stage</th>
                      <th>Overdue Aging (DPD)</th>
                      <th>SBI Administrative Action</th>
                      <th>Provisioning Impact</th>
                      <th>OTS Haircut Viability</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-0 / SMA-1</td>
                      <td>1 – 60 Days</td>
                      <td>Automated SMS reminders, tele-calls, 2% penal interest levy.</td>
                      <td>Standard asset; 0% provisioning.</td>
                      <td>Very Low (Restructuring only).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-2 (Pre-NPA)</td>
                      <td>61 – 90 Days</td>
                      <td>Pre-NPA recall notices dispatched; branch loan follow-up.</td>
                      <td>Flagged for non-accrual.</td>
                      <td>Low (Interest waiver possible).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-amber-700">Substandard NPA</td>
                      <td>91 – 365 Days</td>
                      <td>Declared NPA; file transferred from home branch to SARB/RACC.</td>
                      <td>15% mandatory provisioning.</td>
                      <td><span className="text-emerald-700 font-bold">High (35%–50% Haircut).</span></td>
                    </tr>
                    <tr>
                      <td className="font-bold text-red-700">Doubtful (D1/D2/D3)</td>
                      <td>1 – 3+ Years</td>
                      <td>Managed by SARB legal cells; Lok Adalat &amp; DRT referral.</td>
                      <td>100% balance-sheet provisioning.</td>
                      <td><span className="text-emerald-700 font-bold">Maximum (50%–65% Haircut).</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-3 text-base">
                SARB transfer marks the ideal window for compromise. Because SBI absorbs 100% provisioning on Doubtful assets, recovering 35% to 50% principal provides immediate balance-sheet recovery.
              </p>
            </section>

            {/* Section 3 */}
            <section id="sbi-rin-samadhan-ots-policy" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Percent className="w-4 h-4" />
                <span>3. OTS Haircut Policies &amp; Valuation Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight">
                The SBI Rin Samadhan Scheme &amp; NPA Haircut Calculation Formula
              </h2>
              <p className="text-slate-700 leading-relaxed mb-3 text-base">
                The <strong>SBI Rin Samadhan Scheme</strong> is State Bank of India&apos;s institutional compromise framework designed to resolve stressed retail assets through non-discretionary mathematical formulas. The bank segregates the total debt into the <strong>Real Ledger Principal</strong> (unrecovered principal plus regular interest up to the NPA date) and <strong>Memorandum Dues</strong> (unaccrued penal interest and late fees accumulated post-NPA).
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4">
                <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-[#1F5EFF]" />
                  SBI Rin Samadhan Haircut Formula
                </h3>
                <div className="bg-white p-3 rounded-xl border border-slate-200 font-mono text-xs text-slate-800 mb-2 overflow-x-auto">
                  <strong>Sanctioned OTS = </strong> [Principal at NPA Date] - [Approved Policy Haircut (40%–65%)] + [Direct Legal Costs]
                  <br />
                  <strong>100% Waiver: </strong> Penal Interest + Memorandum Interest + Late Charges = ₹0
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For example, on an ₹8,00,000 loan ballooned to ₹13,50,000 via penal charges, the ₹5,50,000 memorandum dues are waived 100%. The 40%–65% haircut applies solely to the ₹8,00,000 principal, yielding a ₹2,80,000 to ₹4,80,000 settlement.
                </p>
              </div>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Exposure Tier</th>
                      <th>Approval Authority</th>
                      <th>Principal Haircut Range</th>
                      <th>Memorandum Dues Waiver</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Up to ₹5,00,000</td>
                      <td>Chief Manager / AGM (SARB)</td>
                      <td>35% – 50% Principal Waiver</td>
                      <td>100% Fully Waived</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">₹5,00,001 to ₹20,00,000</td>
                      <td>DGM Settlement Committee</td>
                      <td>40% – 60% Principal Waiver</td>
                      <td>100% Fully Waived</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Above ₹20,00,000</td>
                      <td>GM / CGM Credit Committee</td>
                      <td>45% – 65% Principal Waiver</td>
                      <td>100% Fully Waived</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4 */}
            <section id="bankers-lien-setoff-protections" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Lock className="w-4 h-4" />
                <span>4. Section 171 Lien &amp; Statutory Account Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight">
                Section 171 Banker&apos;s Lien &amp; Ringfencing Protected Assets
              </h2>
              <p className="text-slate-700 leading-relaxed mb-3 text-base">
                Under <strong>Section 171 of the Indian Contract Act, 1872</strong> (Banker&apos;s Right of General Lien and Set-Off), SBI can unilaterally debit funds from any savings account, fixed deposit, or recurring deposit held within SBI under the same CIF/PAN to adjust delinquent loan arrears without prior court approval.
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl my-4">
                <div className="flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-red-900 leading-relaxed">
                    <strong>Statutory Immunity Under Section 60 CPC:</strong> Public Provident Fund (PPF), statutory government pensions, and provident fund balances are completely immune from attachment or set-off under <em>Section 60 of the Code of Civil Procedure, 1908</em> and the <em>Pensions Act, 1871</em>. Any unlawful debit of pension funds by SBI constitutes a regulatory breach actionable before the Banking Ombudsman.
                  </div>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-3 text-base">
                To protect living expenses, borrowers should route income to an independent account at another bank. SBI cannot freeze external accounts without a court decree.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="infographic-resolution-blueprint" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileText className="w-4 h-4" />
                <span>5. Visual Resolution Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight">
                SBI Personal Loan Settlement: Visual Roadmap &amp; Milestones
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base">
                The visual framework below summarizes the end-to-end SBI settlement workflow, comparing resolution channels, key metrics, and resolution timelines from Day 0 default to credit repair.
              </p>

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
                        SBI Personal Loan Settlement Summary &amp; Process Overview
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/sbi-personal-loan-settlement.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#1F5EFF] hover:text-blue-300 font-bold flex items-center gap-1 transition-colors"
                  >
                    <span className="hidden sm:inline">Open Full Size</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="p-3 md:p-4 bg-slate-50">
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                    <img
                      src="/images/infographics/sbi-personal-loan-settlement.jpg"
                      alt="State Bank of India SBI Personal Loan Settlement Summary Infographic"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Takeaway:</strong> SBI Rin Samadhan &amp; Lok Adalat settlements yield 40%–65% debt waivers with full CVC audit compliance.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="why-sbi-prefers-lok-adalat" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>6. Statutory Conciliation &amp; Judicial Shielding</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight">
                Why State Bank of India Heavily Favors the National Lok Adalat
              </h2>
              <p className="text-slate-700 leading-relaxed mb-3 text-base">
                SBI is the largest institutional participant in the <strong>National Lok Adalat</strong>, organized quarterly across India by NALSA under the <em>Legal Services Authorities Act, 1987</em>. SBI prefers Lok Adalat because a compromise award passed by a Lok Adalat bench holds the status of a <strong>binding Civil Court Decree under Section 21</strong> with zero right of appeal.
              </p>
              <p className="text-slate-700 leading-relaxed mb-3 text-base">
                This decree provides total immunity to SBI officials against CVC probes or CAG queries. SBI empowers Lok Adalat representatives with pre-approved 45%–65% discount mandates and disposes of pending Section 25 PSS / Section 138 NI cases upon settlement.
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Resolution Channel</th>
                      <th>Legal Status</th>
                      <th>Officer Vigilance Protection</th>
                      <th>Haircut Flexibility</th>
                      <th>Summons Disposal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">National Lok Adalat</td>
                      <td><strong>Binding Civil Decree</strong></td>
                      <td>100% Total Immunity</td>
                      <td>45% – 65% (Pre-approved)</td>
                      <td>Instant automatic disposal</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">In-Branch OTS</td>
                      <td>Private contract</td>
                      <td>Subject to CVC audit</td>
                      <td>35% – 50% (Strict bands)</td>
                      <td>Requires separate withdrawal</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Civil Recovery Suit</td>
                      <td>Contested trial</td>
                      <td>Audited litigation</td>
                      <td>0% (Full claim + costs)</td>
                      <td>Protracted court trial</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7 */}
            <section id="legal-defense-sbi-notices" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4" />
                <span>7. Legal Defense &amp; Statutory Notices</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight">
                Defending Against SBI Legal Notices: Section 25 PSS Act &amp; DRT Claims
              </h2>
              <p className="text-slate-700 leading-relaxed mb-3 text-base">
                When an unsecured loan defaults, SBI initiates legal recovery through statutory channels. When electronic NACH mandates fail, SBI issues demand notices under <strong>Section 25 of the Payment and Settlement Systems Act, 2007 (PSS Act)</strong>, followed by magistrate summons if unpaid. Similarly, bounced physical repayment cheques trigger <strong>Section 138 of the Negotiable Instruments Act, 1881</strong>.
              </p>
              <p className="text-slate-700 leading-relaxed mb-3 text-base">
                Both Section 25 PSS and Section 138 NI offenses are bailable, compoundable, and strictly financial in nature. An advocate can represent you, secure bail, and seek referral to Lok Adalat for conciliation. Furthermore, SBI cannot file before the Debt Recovery Tribunal (DRT) under the RDB Act unless total exposure exceeds <strong>₹20 Lakhs</strong>, and the SARFAESI Act cannot be applied to unsecured personal loans. Under RBI&apos;s 2022 Recovery Agent Directives, all agent harassment, abusive calls, or unauthorized workplace visits are strictly illegal.
              </p>
            </section>

            {/* Section 8 */}
            <section id="step-by-step-settlement-roadmap" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Briefcase className="w-4 h-4" />
                <span>8. Operational Negotiation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight">
                5-Stage Roadmap: Negotiating SBI Settlement Online &amp; In-Branch
              </h2>
              
              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm md:text-base mb-1">
                    1. Audit NPA Bucket &amp; Identify File Location (Home Branch vs SARB)
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Obtain a certified Statement of Account. Separate the actual principal outstanding from unaccrued memorandum penal charges and confirm whether your file is managed by the home branch or regional SARB recovery cell.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm md:text-base mb-1">
                    2. Assemble an Incontrovertible Hardship Dossier
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Document genuine insolvency through termination letters, medical summaries, salary reductions, and bank statements. Solid proof provides SBI committee officers the regulatory justification required to approve maximum haircuts.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm md:text-base mb-1">
                    3. Submit Formal OTS Petition via Rin Samadhan Portal or SARB
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Submit the One-Time Settlement application directly to the Assistant General Manager (AGM) at SARB or through SBI&apos;s online OTS portal, proposing an initial settlement between 35% and 50% of the principal balance payable within 30 days.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm md:text-base mb-1">
                    4. Technical Audit of Official Stamped Sanction Letter
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Verify the sanction letter on official SBI stationery with the branch code, committee reference number, and authorized officer signature with HRMS ID before releasing any payment.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm md:text-base mb-1">
                    5. Direct Loan Account Remittance &amp; Securing ₹0 NDC
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Remit the compromise amount directly into your designated SBI Loan Account Number via RTGS/NEFT. Under RBI Circular RBI/2023-24/60, SBI must issue your formal No Dues Certificate within 30 calendar days.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section id="sanction-letter-audit-ndc-verification" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>9. Sanction Letter Audit &amp; ₹0 NDC Verification</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight">
                Sanction Letter Audit Checklist &amp; Statutory ₹0 NDC Mandate
              </h2>
              <p className="text-slate-700 leading-relaxed mb-3 text-base">
                Never pay against verbal assurances or agent letters. Payments made without a validated sanction are treated as routine interest part-payments, leaving the default active.
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Checklist Element</th>
                      <th>Mandatory Verification</th>
                      <th>Legal Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Official Letterhead</td>
                      <td>Original SBI stationery with branch code &amp; SARB address.</td>
                      <td>Prevents forged documents from third-party agents.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Officer Credentials</td>
                      <td>Signed by AGM/DGM/BM with official HRMS employee code.</td>
                      <td>Confirms delegated financial approval power.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Extinguishment Clause</td>
                      <td>Explicit clause confirming full debt discharge upon payment.</td>
                      <td>Bars any future residual claims by the bank.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Direct Account Routing</td>
                      <td>Payment routed strictly into designated SBI loan account.</td>
                      <td>Guarantees immediate ledger balance reduction.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-3 text-base">
                Pursuant to <strong>RBI Circular RBI/2023-24/60</strong>, SBI is legally required to complete full loan closure and issue an official <strong>No Dues Certificate (NDC)</strong> within <strong>30 calendar days</strong>. For every day of operational delay beyond 30 days, SBI must pay statutory compensation of <strong>₹5,00,000 / ₹5,000 per day</strong> directly to the borrower.
              </p>
            </section>

            {/* Section 10 */}
            <section id="cibil-impact-credit-rehabilitation" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>10. CIBIL Trajectory &amp; Score Rehabilitation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight">
                CIBIL Score Trajectory &amp; Credit Rehabilitation Post-Settlement
              </h2>
              <p className="text-slate-700 leading-relaxed mb-3 text-base">
                Following full settlement payment, SBI updates credit bureaus (TransUnion CIBIL, Experian, Equifax, CRIF High Mark) to <strong>&apos;Settled&apos;</strong> or <strong>&apos;Post-Write-Off Settled&apos;</strong> with an outstanding balance of exactly <strong>₹0</strong>. This causes an initial credit score drop of 75 to 150 points, alongside a mandatory 12-month cooling period under RBI directives before fresh unsecured credit can be obtained.
              </p>
              <p className="text-slate-700 leading-relaxed mb-3 text-base">
                However, a &apos;Settled&apos; status with ₹0 balance permanently arrests compounding default penalties. By obtaining a secured credit card backed by a fixed deposit, keeping credit utilization strictly below 25%, and maintaining punctual repayments, borrowers routinely rebuild their CIBIL score back above 750+ within 18 to 24 months.
              </p>
            </section>

            {/* Section 11 */}
            <section id="company-resolution-section" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>11. Legal Defense &amp; Representation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Why Distressed SBI Borrowers Choose SettleLoans
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base">
                Negotiating with State Bank of India requires seasoned banking advocates who understand CVC regulations, SARB committee powers, and Lok Adalat conciliation. SettleLoans halts recovery harassment, audits NPA provisioning, and negotiates directly with SBI decision-makers to achieve maximum legal debt waivers.
              </p>

              <div className="my-6">
                <CompanySection />
              </div>
            </section>

            {/* Section 12: FAQs */}
            <section id="faqs" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>12. Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                Frequently Asked Questions About SBI Personal Loan Settlement
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

            {/* Official Regulatory References Strip */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-8">
              <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Landmark className="w-4 h-4 text-[#1F5EFF]" />
                Official Regulatory References &amp; Statutory Circulars
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>RBI Master Direction:</strong> Compromise Settlements &amp; Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24)
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.sbi.co.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>State Bank of India:</strong> Customer Grievance Policy &amp; Principal Nodal Officer Directory
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>RBI Integrated Ombudsman:</strong> Portal for OTS Violations, Coercive Recovery &amp; NDC Delays
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>NALSA:</strong> Legal Services Authorities Act, 1987 — National Lok Adalat Framework
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://cvc.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Central Vigilance Commission:</strong> Guidelines on Compromise Settlements in Public Sector Banks
                  </a>
                </li>
              </ul>
            </div>

            {/* Related Topic Badges */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-8">
              <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#1F5EFF]" />
                Explore Related Banking &amp; Debt Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Bank OTS Policy
                </Link>
                <Link
                  href="/hdfc-personal-loan-settlement"
                  className="py-1.5 px-3 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  HDFC Loan Settlement
                </Link>
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-1.5 px-3 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Lok Adalat Notice
                </Link>
                <Link
                  href="/personal-loan-settlement-letter-format"
                  className="py-1.5 px-3 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Settlement Letter Format
                </Link>
                <Link
                  href="/personal-loan-legal-notice"
                  className="py-1.5 px-3 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Legal Notice Defense
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-1.5 px-3 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  CIBIL Settlement Impact
                </Link>
                <Link
                  href="/section-138-cheque-bounce-loan-default"
                  className="py-1.5 px-3 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Section 138 Defense
                </Link>
                <Link
                  href="/how-to-settle-credit-card-debt"
                  className="py-1.5 px-3 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Credit Card Settlement
                </Link>
                <Link
                  href="/recovery-agent-visiting-workplace-office"
                  className="py-1.5 px-3 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Agent Workplace Rules
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Jail for Loan Default?
                </Link>
              </div>
            </div>
          </main>

          {/* Right Column (Sidebar Cards) */}
          <aside className="w-full sticky top-24 space-y-5">
            {/* Author Bio Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black text-base flex items-center justify-center shadow-md">
                  AJ
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm leading-tight">
                    <Link
                      href="/authors/ashish-jhangra"
                      className="hover:text-[#1F5EFF] transition-colors"
                    >
                      Ashish Jhangra
                    </Link>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Lead Banking Legal &amp; Debt Settlement Strategist
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Ashish has led over 1,200+ successful bank compromise negotiations across State Bank of India, HDFC Bank, and ICICI, specializing in PSU banking NPA haircuts, SARB conciliation, and borrower legal defense.
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

            {/* Emergency Advocate CTA */}
            <div className="bg-gradient-to-br from-[#1F5EFF] to-blue-700 text-white rounded-2xl p-5 shadow-lg">
              <div className="flex items-center gap-2 text-blue-100 text-xs font-bold uppercase tracking-wider mb-2">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>SBI Dispute Resolution</span>
              </div>
              <div className="text-lg font-black mb-2 leading-tight">
                Defaulted on an SBI Personal Loan?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-4">
                Stop bank harassment and legal threats today. Let our seasoned advocates audit your NPA bucket, file your formal Rin Samadhan petition, and secure an official stamped SBI settlement letter.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white hover:bg-slate-100 text-[#1F5EFF] font-bold py-2.5 px-4 rounded-xl text-xs transition-all duration-200 shadow"
              >
                Talk to an SBI Settlement Advocate
              </Link>
            </div>

            {/* Trust Signals Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                <span>Why Borrowers Trust SettleLoans</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct SARB Access:</strong> We bypass unauthorized agents to negotiate directly with SBI SARB committees.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Shield:</strong> Cease-and-desist notices to stop illegal workplace visits and reference calls.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Stamped Verification:</strong> Official SBI letterhead sanction letters with officer HRMS code.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed ₹0 NDC:</strong> End-to-end tracking until your formal closure certificate is issued.
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
