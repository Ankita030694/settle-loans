'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';
import {
  ShieldCheck,
  TrendingUp,
  Clock,
  ArrowRight,
  ChevronDown,
  Calendar,
  PhoneCall,
  ExternalLink,
  Building2,
  Landmark,
  Check,
  BookOpen,
  ShieldAlert,
  Scale,
  HelpCircle,
  Calculator,
  Layers,
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
    <div className="border border-slate-200 rounded-2xl overflow-hidden mb-3 transition-all duration-200 hover:border-slate-300 bg-white shadow-sm">
      <button
        onClick={onClick}
        className="w-full p-4 md:p-5 flex justify-between items-center text-left focus:outline-none gap-3"
        aria-expanded={isOpen}
      >
        <span className="text-base font-bold text-slate-900 leading-snug">
          {question}
        </span>
        <div
          className={`flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] transition-transform duration-300 ${
            isOpen ? 'rotate-180 bg-[#1F5EFF] text-white' : ''
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-5 md:px-5 md:pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default function IciciPersonalLoanSettlementClient() {
  const [activeId, setActiveId] = useState<string>('understanding-icici-loan-defaults');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'understanding-icici-loan-defaults', title: '1. Institutional Context & Risk Architecture' },
    { id: 'icici-npa-delinquency-timeline', title: '2. Delinquency Timeline & Asset Classification' },
    { id: 'icici-ots-policy-haircut-formula', title: '3. OTS Haircut Policies & Valuation Framework' },
    { id: 'icici-central-settlement-sarb', title: '4. Central Settlement Desk & SARB Hierarchy' },
    { id: 'recovery-agent-rules-anti-harassment', title: '5. Recovery Practices & RBI Anti-Harassment Law' },
    { id: 'infographic-resolution-blueprint', title: '6. Visual Resolution Blueprint' },
    { id: 'step-by-step-settlement-process', title: '7. Step-by-Step Settlement Roadmap' },
    { id: 'ots-vs-restructuring-vs-lok-adalat', title: '8. Comparative Resolution Avenues' },
    { id: 'sanction-letter-audit-ndc-verification', title: '9. Sanction Letter Audit & ₹0 NDC Mandate' },
    { id: 'cibil-impact-credit-rehabilitation', title: '10. CIBIL Score Trajectory & Rehabilitation' },
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
      question: "What is the ICICI Bank personal loan settlement process?",
      answer: (
        <p>
          The <strong>ICICI personal loan settlement</strong> is a formal compromise where the bank extinguishes an unsecured NPA debt for a negotiated lump sum. Borrowers submit hardship dossiers to SARB, securing a stamped OTS Sanction Letter and ₹0 No Dues Certificate.
        </p>
      )
    },
    {
      question: "What percentage of debt waiver does ICICI Bank approve on personal loans?",
      answer: (
        <p>
          ICICI Bank approves <strong>40% to 65% debt waivers</strong> on unsecured personal loans in Doubtful NPA status. Accumulated penal charges are 100% waived, with principal discounts based on documented insolvency.
        </p>
      )
    },
    {
      question: "How does ICICI Bank's Central Settlement Desk operate?",
      answer: (
        <p>
          ICICI manages stressed debt centrally via its Special Operations Group and SARB desks. Branch desks lack waiver authority; formal compromise applications must be submitted directly to Zonal Credit Committees or the Principal Nodal Officer.
        </p>
      )
    },
    {
      question: "What are your legal rights against ICICI recovery agent harassment?",
      answer: (
        <p>
          Under <strong>RBI Master Directions (2022)</strong>, recovery agents cannot contact you outside 08:00 AM to 07:00 PM, visit workplaces, or contact relatives. Violations can be escalated to ICICI&apos;s Principal Nodal Officer and the RBI Ombudsman.
        </p>
      )
    },
    {
      question: "Can ICICI Bank file a criminal police case for personal loan default?",
      answer: (
        <p>
          <strong>No. Unsecured loan default is purely a civil dispute</strong> under the Indian Contract Act, 1872. Police cannot arrest you. Bounced NACH mandates or cheques can trigger Section 25 PSS Act or Section 138 NI Act summons, settled via OTS.
        </p>
      )
    },
    {
      question: "Can ICICI Bank freeze savings accounts in other banks for loan default?",
      answer: (
        <p>
          Under Section 171 of the Contract Act, ICICI can debit accounts within ICICI Bank under the same Customer ID. However, ICICI <strong>cannot freeze or deduct funds from accounts in other banks</strong> without court attachment orders.
        </p>
      )
    },
    {
      question: "What authority tier in ICICI Bank approves an OTS proposal?",
      answer: (
        <p>
          Collection agents and branch staff have zero waiver authority. Substantive 40%–65% principal haircuts are sanctioned exclusively by Regional Settlement Committees, Zonal Credit Committees, or Central SARB credit officers.
        </p>
      )
    },
    {
      question: "How does an ICICI loan settlement impact your CIBIL score?",
      answer: (
        <p>
          The account is reported as <strong>&apos;Settled&apos;</strong> with a <strong>₹0 balance</strong>. This triggers an initial score drop of 75–150 points, but halts default decay. Scores can be rebuilt to 750+ within 18–24 months using secured cards.
        </p>
      )
    },
    {
      question: "Can an ICICI personal loan be settled during a National Lok Adalat?",
      answer: (
        <p>
          <strong>Yes. ICICI Bank participates in National Lok Adalats</strong> organized by DLSA under the Legal Services Authorities Act, 1987. Officers attend with pre-approved 40%–60% haircut mandates, issuing a <strong>binding Civil Court Decree</strong>.
        </p>
      )
    },
    {
      question: "How long does ICICI Bank take to issue the No Dues Certificate?",
      answer: (
        <p>
          Under <strong>RBI Circular RBI/2023-24/60</strong>, ICICI Bank must issue the ₹0 No Dues Certificate within <strong>30 calendar days</strong> of settlement payment. Delays mandate statutory compensation of <strong>₹5,000 per day</strong> to the borrower.
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
          margin: 1.25rem 0;
          font-size: 0.9em;
        }
        .blog-content th {
          background: #F8FAFC;
          padding: 0.65rem 0.8rem;
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
          padding: 0.65rem 0.8rem;
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
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <Landmark className="w-3.5 h-3.5" />
            <span>Bank-Specific Dispute Resolution • ICICI Bank</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            ICICI Personal Loan Settlement: <span className="text-[#3b82f6] md:text-[#60a5fa]">OTS Rules, Haircut Formula &amp; Legal Process</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Defaulted on an ICICI Bank personal loan or credit card? Learn ICICI&apos;s internal OTS provisioning rules, how to stop collection harassment, and how to negotiate up to a 60% legal debt waiver.
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
              <span>RBI Master Direction Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md flex items-center gap-2"
            >
              <span>Negotiate ICICI Settlement</span>
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

      {/* Stats Strip */}
      <StatsStrip />

      {/* 3-Column Layout */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column */}
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

            <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>ICICI Quick Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                ICICI accounts past 90 days default enter NPA status. Direct talks with Central SARB bypass collection markups, securing 40%–65% debt waivers.
              </p>
            </div>
          </aside>

          {/* Middle Column */}
          <main className="w-full min-w-0 blog-content">
            
            {/* Section 1 */}
            <section id="understanding-icici-loan-defaults" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. Institutional Context &amp; Risk Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight">
                Understanding ICICI Bank&apos;s Retail Credit Architecture &amp; Default Dynamics
              </h2>
              <p className="text-slate-700 leading-relaxed mb-3 text-sm md:text-base">
                ICICI Bank Limited manages an extensive retail unsecured loan portfolio comprising pre-approved Insta Personal Loans, standard personal loans, and credit cards. Because these facilities carry zero physical collateral, credit risk is managed through automated underwriting, centralized credit bureau reporting, and NACH mandate debits.
              </p>
              <p className="text-slate-700 leading-relaxed mb-3 text-sm md:text-base">
                When an EMI fails to clear on schedule, automated ledger triggers levy bounce fees, overdue penal interest at 24% to 36% annually, and risk flags freezing pre-approved limits across the Customer Identification File (CIF).
              </p>
              <p className="text-slate-700 leading-relaxed mb-3 text-sm md:text-base">
                For borrowers suffering involuntary financial distress—such as layoffs, medical crises, or business failure—compounding charges make debt unserviceable. Under Reserve Bank of India guidelines and the Indian Contract Act, 1872, genuine financial default is recognized as a civil dispute, entitling distressed debtors to seek an equitable compromise settlement.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-3.5 rounded-r-xl my-3">
                <div className="flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-amber-900 leading-relaxed">
                    <strong>Statutory Principle:</strong> The RBI distinguishes between a <em>wilful defaulter</em> with liquid funds who refuses to repay, and an <em>involuntary distressed borrower</em> whose repayment capacity has disintegrated. Involuntary debtors are legally entitled to request debt waivers under board-approved OTS policies.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section id="icici-npa-delinquency-timeline" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>2. Delinquency Timeline &amp; Asset Classification</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight">
                ICICI&apos;s Default Timeline: From SMA-0 to NPA Classification
              </h2>
              <p className="text-slate-700 leading-relaxed mb-3 text-sm md:text-base">
                Under the RBI&apos;s Prudential Norms on Income Recognition and Asset Classification (IRACP), ICICI Bank classifies delinquent loans across defined regulatory tiers. Timing an OTS proposal according to this timeline is critical for securing maximum debt waivers.
              </p>

              <div className="overflow-x-auto my-3">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Stage</th>
                      <th>Overdue Days</th>
                      <th>ICICI Internal Action</th>
                      <th>Legal Exposure</th>
                      <th>OTS Viability</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-0</td>
                      <td>1 – 30 Days</td>
                      <td>SMS, WhatsApp reminders, late fee levy.</td>
                      <td>Zero legal risk. Contractual interest.</td>
                      <td>Very Low (EMI regularization).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-1</td>
                      <td>31 – 60 Days</td>
                      <td>Tele-calling follow-ups. Limits frozen.</td>
                      <td>NACH bounce alerts. Score dip.</td>
                      <td>Low (Restructuring possible).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-2</td>
                      <td>61 – 90 Days</td>
                      <td>Pre-NPA demand notices dispatched.</td>
                      <td>Loan recall notices issued.</td>
                      <td>Moderate (Interest waiver talks).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-amber-700">NPA</td>
                      <td>91 – 180 Days</td>
                      <td>NPA classification. Assigned to DRAs.</td>
                      <td>Section 25 PSS / 138 NI notices.</td>
                      <td><span className="text-emerald-700 font-bold">High (35%–50% Haircut).</span></td>
                    </tr>
                    <tr>
                      <td className="font-bold text-red-700">Doubtful / Loss</td>
                      <td>181 – 365+ Days</td>
                      <td>Transferred to SARB. 100% provisioned.</td>
                      <td>Civil recovery / Lok Adalat.</td>
                      <td><span className="text-emerald-700 font-bold">Maximum (50%–65% Haircut).</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-3 text-sm md:text-base">
                When an overdue loan breaches 90 days, ICICI Bank allocates capital provisioning against its balance sheet. Once the loan reaches Doubtful status (over 180 days past due) with 100% provisioning absorbed, an upfront cash settlement allows the bank to write back provisions into profits, creating strong incentive to approve substantial debt haircuts.
              </p>
            </section>

            {/* Section 3 */}
            <section id="icici-ots-policy-haircut-formula" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>3. OTS Haircut Policies &amp; Valuation Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight">
                ICICI&apos;s Internal One-Time Settlement (OTS) &amp; Haircut Policy
              </h2>
              <p className="text-slate-700 leading-relaxed mb-3 text-sm md:text-base">
                Pursuant to the <strong>RBI Master Direction on Compromise Settlements (2023-24)</strong>, ICICI Bank operates under a board-approved Compromise Settlement Policy. The bank evaluates settlement proposals through a Net Present Value (NPV) recovery methodology.
              </p>

              <div className="bg-slate-900 text-white p-4 rounded-2xl my-3 shadow-md border border-slate-800">
                <h3 className="text-xs font-bold text-blue-400 mb-1 flex items-center gap-1.5">
                  <Calculator className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The Banking Net Present Value (NPV) Equation</span>
                </h3>
                <div className="p-2 bg-slate-800 rounded-xl font-mono text-xs text-emerald-400 border border-slate-700 mb-1">
                  NPV = (Estimated Realization - Legal Fees - Overhead) / (1 + Cost of Funds)^Years
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  For an unsecured loan in Doubtful status, an immediate 40% to 55% compromise payment delivers higher net realization than uncertain legal proceedings over 4 to 7 years.
                </p>
              </div>

              <div className="overflow-x-auto my-3">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Facility Type</th>
                      <th>Aging</th>
                      <th>Penal Interest</th>
                      <th>Principal Haircut</th>
                      <th>Target Offer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Personal Loan</td>
                      <td>90 – 180 Days</td>
                      <td>100% Waived</td>
                      <td>25% – 40% Principal Waiver</td>
                      <td>Offer 35% of Book Dues</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Personal Loan</td>
                      <td>181 – 365+ Days</td>
                      <td>100% Waived</td>
                      <td>40% – 65% Principal Waiver</td>
                      <td>Offer 30% – 40% of Book Dues</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Credit Card / Insta EMI</td>
                      <td>90 – 180 Days</td>
                      <td>100% Waived</td>
                      <td>30% – 50% Principal Waiver</td>
                      <td>Offer 35% of Dues</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Credit Card (Written Off)</td>
                      <td>181+ Days</td>
                      <td>100% Waived</td>
                      <td>50% – 70% Principal Waiver</td>
                      <td>Offer 25% – 35% of Dues</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4 */}
            <section id="icici-central-settlement-sarb" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Landmark className="w-4 h-4" />
                <span>4. Central Settlement Desk &amp; SARB Hierarchy</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight">
                ICICI Bank&apos;s Central Settlement Desk &amp; SARB Escalation Matrix
              </h2>
              <p className="text-slate-700 leading-relaxed mb-3 text-sm md:text-base">
                Under ICICI Bank&apos;s Delegation of Financial Powers, branch staff and external recovery tele-callers have zero authority to approve debt reductions. All retail non-performing assets are centrally managed by ICICI&apos;s Special Operations Group and regional <strong>Stressed Assets Recovery Branch (SARB)</strong> desks.
              </p>
              <p className="text-slate-700 leading-relaxed mb-3 text-sm md:text-base">
                Substantive debt waivers are evaluated by Regional Settlement Committees or Zonal Credit Committees. Distressed borrowers must submit formal compromise petitions directly to SARB or escalate through the Principal Nodal Officer (PNO) to negotiate directly with authorized decision-makers.
              </p>
            </section>

            {/* Section 5 */}
            <section id="recovery-agent-rules-anti-harassment" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>5. Recovery Practices &amp; RBI Anti-Harassment Law</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight">
                ICICI Recovery Agent Practices, Harassment Defense &amp; RBI Compliance
              </h2>
              <p className="text-slate-700 leading-relaxed mb-3 text-sm md:text-base">
                When an ICICI retail loan enters NPA status (90+ DPD), recovery operations are assigned to external Debt Recovery Agencies (DRAs). Because agency compensation depends on collected sums, recovery personnel frequently resort to persistent calling and workplace visits.
              </p>
              <p className="text-slate-700 leading-relaxed mb-3 text-sm md:text-base">
                The Reserve Bank of India enforces strict protections under the Master Direction on Recovery Agents. Agents cannot contact borrowers outside 08:00 AM to 07:00 PM, visit offices to cause disruption, disclose debts to third parties, or use intimidating language. Borrowers can demand the agent&apos;s IIBF DRA certification and issue formal cease-and-desist notices to ICICI&apos;s Principal Nodal Officer and the RBI Ombudsman.
              </p>
            </section>

            {/* Section 6: Infographic Banner */}
            <section id="infographic-resolution-blueprint" className="scroll-mt-24 mb-10">
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
                        ICICI Bank Personal Loan Settlement Process &amp; Haircut Blueprint
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/icici-personal-loan-settlement.jpg"
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
                      src="/images/infographics/icici-personal-loan-settlement.jpg"
                      alt="ICICI Bank Personal Loan Settlement Process Summary Infographic"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Takeaway:</strong> Settle directly with ICICI SARB / Central Desk with verified hardship for 40%–65% debt waiver.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section id="step-by-step-settlement-process" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>6. Step-by-Step Settlement Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight">
                Step-by-Step Guide: How to Initiate &amp; Negotiate Settlement with ICICI Bank
              </h2>
              <p className="text-slate-700 leading-relaxed mb-3 text-sm md:text-base">
                Executing a compromise settlement with ICICI Bank requires disciplined preparation across six essential phases:
              </p>

              <div className="space-y-2.5">
                <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-md bg-blue-50 text-[#1F5EFF] font-black text-[10px] flex items-center justify-center border border-blue-200">1</span>
                    Hardship Dossier Compilation
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Assemble documentary proof of insolvency, including severance letters, medical records, and bank statements illustrating nominal balances to prove default is involuntary.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-md bg-blue-50 text-[#1F5EFF] font-black text-[10px] flex items-center justify-center border border-blue-200">2</span>
                    Cease-and-Desist Notice
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Issue formal legal notices routing discussions to ICICI&apos;s SARB and Principal Nodal Officer, neutralizing collection agencies and eliminating unauthorized markups.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-md bg-blue-50 text-[#1F5EFF] font-black text-[10px] flex items-center justify-center border border-blue-200">3</span>
                    Submitting the Formal Proposal
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Submit a formal OTS petition citing RBI directives, detailing hardship events, and anchoring an opening offer at 25%–35% of ledger dues to secure 40%–55% final approvals.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-md bg-blue-50 text-[#1F5EFF] font-black text-[10px] flex items-center justify-center border border-blue-200">4</span>
                    Managing Counter-Demands
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Counter initial high bank demands by reaffirming strict income limitations and establishing that settlement funds are third-party contributions for final closure.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-md bg-blue-50 text-[#1F5EFF] font-black text-[10px] flex items-center justify-center border border-blue-200">5</span>
                    Sanction Letter Audit
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Verify the sanction letter is printed on official ICICI Bank letterhead with branch seal, confirming compromise figures, payment dates, and legal notice withdrawals.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-md bg-blue-50 text-[#1F5EFF] font-black text-[10px] flex items-center justify-center border border-blue-200">6</span>
                    Remittance &amp; ₹0 NDC Delivery
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Remit funds directly into your ICICI loan account. Under RBI Circular RBI/2023-24/60, the bank must deliver your ₹0 No Dues Certificate and update bureaus within 30 days.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section id="ots-vs-restructuring-vs-lok-adalat" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4" />
                <span>7. Comparative Resolution Avenues</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight">
                ICICI OTS vs Loan Restructuring vs National Lok Adalat
              </h2>
              <p className="text-slate-700 leading-relaxed mb-3 text-sm md:text-base">
                Distressed borrowers often evaluate whether to pursue an OTS, apply for loan restructuring, or settle dues at the National Lok Adalat. Each avenue carries distinct legal outcomes, cash flow requirements, and credit reporting impacts.
              </p>

              <div className="overflow-x-auto my-3">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Key Parameter</th>
                      <th>One-Time Settlement (OTS)</th>
                      <th>Loan Restructuring</th>
                      <th>National Lok Adalat</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Objective</td>
                      <td>Permanent debt cancellation via payment.</td>
                      <td>Modifying tenure to keep account standard.</td>
                      <td>Judicial conciliation before court panel.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Principal Haircut</td>
                      <td><strong>40% – 65% Principal Waiver</strong>.</td>
                      <td><strong>0% Principal Waiver</strong>.</td>
                      <td><strong>45% – 65% Haircut</strong> on standard slabs.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Upfront Capital</td>
                      <td>Moderate to High (15–30 days).</td>
                      <td>Low (Monthly EMIs continue).</td>
                      <td>Moderate (1 to 3 judicial tranches).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Legal Status</td>
                      <td>Private contract under RBI Directives.</td>
                      <td>Contract amendment under regular norms.</td>
                      <td><strong>Binding Civil Court Decree</strong>.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">CIBIL Status</td>
                      <td>&apos;Settled&apos; with ₹0 balance.</td>
                      <td>&apos;Restructured&apos;.</td>
                      <td>&apos;Settled via Lok Adalat&apos; (₹0 balance).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Best For</td>
                      <td>Permanent income loss / severe hardship.</td>
                      <td>Temporary liquidity disruption.</td>
                      <td>Borrowers facing Section 138/25 notices.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 9 */}
            <section id="sanction-letter-audit-ndc-verification" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>8. Sanction Letter Audit &amp; ₹0 NDC Mandate</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight">
                Critical Checklist for ICICI Settlement Sanction Letters &amp; ₹0 NDC Verification
              </h2>
              <p className="text-slate-700 leading-relaxed mb-3 text-sm md:text-base">
                A serious risk in retail debt recovery involves rogue intermediaries issuing unauthorized settlement letters to induce token payments. If money is paid against an invalid letter, ICICI Bank credits funds toward penal interest, leaving default active.
              </p>
              <p className="text-slate-700 leading-relaxed mb-3 text-sm md:text-base">
                To guarantee legal validity, verify that the sanction letter is printed on official ICICI Bank stationery featuring corporate watermarks, retail asset branch details, and the signature and employee code of an authorized officer.
              </p>
              <p className="text-slate-700 leading-relaxed mb-3 text-sm md:text-base">
                The letter must explicitly stipulate that the agreed sum constitutes full and final satisfaction of all claims, permanently extinguishing residual dues. Under <strong>RBI Circular RBI/2023-24/60</strong>, ICICI Bank must issue the ₹0 No Dues Certificate within 30 calendar days, with statutory compensation of ₹5,000 per day payable for operational delays.
              </p>
            </section>

            {/* Section 10 */}
            <section id="cibil-impact-credit-rehabilitation" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>9. CIBIL Score Trajectory &amp; Rehabilitation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight">
                Impact on CIBIL Score &amp; Long-Term Credit Rehabilitation Post-ICICI Settlement
              </h2>
              <p className="text-slate-700 leading-relaxed mb-3 text-sm md:text-base">
                Following full remittance of the agreed OTS amount, ICICI Bank is legally required to update all four credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark), modifying the account status from &apos;Default&apos; to <strong>&apos;Settled&apos;</strong> with an outstanding balance of exactly <strong>₹0</strong>.
              </p>
              <p className="text-slate-700 leading-relaxed mb-3 text-sm md:text-base">
                While a &apos;Settled&apos; tag lowers the score by 75 to 150 points and triggers a 12-month cooling period under RBI directives before fresh credit can be obtained, it permanently halts month-on-month default degradation caused by compounding Days Past Due counters.
              </p>
              <p className="text-slate-700 leading-relaxed mb-3 text-sm md:text-base">
                Rebuilding credit post-settlement is systematic: by securing a fixed-deposit backed credit card, maintaining credit utilization below 25%, and servicing utility bills promptly, borrowers steadily rebuild positive credit history, restoring their CIBIL score to 750+ within 18 to 24 months.
              </p>
            </section>

            {/* Section 11 */}
            <section id="company-resolution-section" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>10. Legal Defense &amp; Representation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Why Distressed ICICI Borrowers Choose SettleLoans
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-sm md:text-base">
                Negotiating an equitable compromise settlement with ICICI Bank requires seasoned banking litigation counsel. The advocates at SettleLoans provide comprehensive protection, stopping collection harassment, auditing NPA provisioning allocations, and engaging ICICI&apos;s Zonal Settlement Committees to secure maximum permissible debt waivers.
              </p>

              <div className="my-4">
                <CompanySection />
              </div>
            </section>

            {/* Section 12: FAQs */}
            <section id="faqs" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>11. Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Frequently Asked Questions About ICICI Personal Loan Settlement
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

            {/* Regulatory References */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 my-6">
              <h3 className="text-xs font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Landmark className="w-3.5 h-3.5 text-[#1F5EFF]" />
                Official Regulatory References &amp; Statutory Circulars
              </h3>
              <ul className="space-y-1.5 text-[11px] text-slate-600">
                <li className="flex items-start gap-1.5">
                  <ExternalLink className="w-3 h-3 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 transition-colors"
                  >
                    <strong>RBI Master Direction:</strong> Compromise Settlements (DOR.STR.REC.20/21.04.048/2023-24)
                  </a>
                </li>
                <li className="flex items-start gap-1.5">
                  <ExternalLink className="w-3 h-3 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 transition-colors"
                  >
                    <strong>RBI Master Circular:</strong> Fair Practices Code for Regulated Lending Entities
                  </a>
                </li>
                <li className="flex items-start gap-1.5">
                  <ExternalLink className="w-3 h-3 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.icicibank.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 transition-colors"
                  >
                    <strong>ICICI Bank:</strong> Grievance Redressal Policy &amp; Nodal Officer Escalation
                  </a>
                </li>
                <li className="flex items-start gap-1.5">
                  <ExternalLink className="w-3 h-3 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 transition-colors"
                  >
                    <strong>RBI Integrated Ombudsman (2021):</strong> Portal for Dispute Redressal
                  </a>
                </li>
                <li className="flex items-start gap-1.5">
                  <ExternalLink className="w-3 h-3 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 transition-colors"
                  >
                    <strong>NALSA:</strong> Legal Services Authorities Act, 1987 — Lok Adalat Framework
                  </a>
                </li>
              </ul>
            </div>

            {/* Related Guides */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 my-6">
              <h3 className="text-xs font-bold text-slate-900 mb-2 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-[#1F5EFF]" />
                Explore Related Banking &amp; Debt Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-1.5">
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1 px-2.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-[11px] font-semibold transition-all border border-slate-200"
                >
                  Bank OTS Policy
                </Link>
                <Link
                  href="/personal-loan-settlement-letter-format"
                  className="py-1 px-2.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-[11px] font-semibold transition-all border border-slate-200"
                >
                  Settlement Letter Format
                </Link>
                <Link
                  href="/personal-loan-settlement-percentage"
                  className="py-1 px-2.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-[11px] font-semibold transition-all border border-slate-200"
                >
                  Settlement Percentage
                </Link>
                <Link
                  href="/how-to-settle-credit-card-debt"
                  className="py-1 px-2.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-[11px] font-semibold transition-all border border-slate-200"
                >
                  Credit Card Settlement
                </Link>
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-1 px-2.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-[11px] font-semibold transition-all border border-slate-200"
                >
                  Lok Adalat Notice
                </Link>
                <Link
                  href="/hdfc-personal-loan-settlement"
                  className="py-1 px-2.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-[11px] font-semibold transition-all border border-slate-200"
                >
                  HDFC Loan Settlement
                </Link>
                <Link
                  href="/sbi-personal-loan-settlement"
                  className="py-1 px-2.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-[11px] font-semibold transition-all border border-slate-200"
                >
                  SBI Loan Settlement
                </Link>
                <Link
                  href="/section-138-cheque-bounce-loan-default"
                  className="py-1 px-2.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-[11px] font-semibold transition-all border border-slate-200"
                >
                  Section 138 NI Act
                </Link>
                <Link
                  href="/recovery-agent-visiting-workplace-office"
                  className="py-1 px-2.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-[11px] font-semibold transition-all border border-slate-200"
                >
                  Recovery Agent Rules
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1 px-2.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-[11px] font-semibold transition-all border border-slate-200"
                >
                  No Dues Certificate (NDC)
                </Link>
              </div>
            </div>
          </main>

          {/* Right Column */}
          <aside className="w-full sticky top-24 space-y-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black text-xs flex items-center justify-center shadow-md">
                  AJ
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs leading-tight">
                    <Link
                      href="/authors/ashish-jhangra"
                      className="hover:text-[#1F5EFF] transition-colors"
                    >
                      Ashish Jhangra
                    </Link>
                  </h4>
                  <p className="text-[10px] text-slate-500 font-medium">
                    Lead Banking Legal Strategist
                  </p>
                </div>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed mb-2.5">
                Ashish has led 1,200+ bank compromise negotiations across ICICI, HDFC, and SBI under RBI Master Directions.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold">
                <Link
                  href="/authors/ashish-jhangra"
                  className="text-[#1F5EFF] hover:underline"
                >
                  View Profile
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

            <div className="bg-gradient-to-br from-[#1F5EFF] to-blue-700 text-white rounded-2xl p-4 shadow-lg">
              <div className="flex items-center gap-1.5 text-blue-100 text-[10px] font-bold uppercase tracking-wider mb-1.5">
                <PhoneCall className="w-3 h-3" />
                <span>ICICI Dispute Resolution</span>
              </div>
              <h3 className="text-base font-black mb-1.5 leading-tight">
                Struggling with ICICI Loan Default?
              </h3>
              <p className="text-[11px] text-white/90 leading-relaxed mb-3">
                Stop collection harassment today. Let our advocates audit your default bucket and secure a stamped ICICI settlement letter.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white hover:bg-slate-100 text-[#1F5EFF] font-bold py-2 px-3 rounded-xl text-xs transition-all shadow"
              >
                Talk to a Settlement Advocate
              </Link>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-sm">
              <h4 className="font-bold text-slate-900 text-[11px] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1F5EFF]" />
                <span>Why Borrowers Trust SettleLoans</span>
              </h4>
              <ul className="space-y-2 text-[11px] text-slate-600">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3 h-3 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct Bank Talks:</strong> We represent your case before ICICI SARB and Credit Committees.
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3 h-3 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Shield:</strong> Legal notices stopping workplace visits and calls under RBI rules.
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3 h-3 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Stamped Verification:</strong> Every settlement verified via official ICICI letterhead sanctions.
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3 h-3 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed ₹0 NDC:</strong> End-to-end tracking until your No Dues Certificate is delivered.
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
