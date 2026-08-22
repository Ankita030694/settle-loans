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

export default function UnsecuredBusinessLoanSettlementClient() {
  const [activeId, setActiveId] = useState<string>('anatomy-of-msme-unsecured-debt-distress');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'anatomy-of-msme-unsecured-debt-distress', title: '1. Anatomy of MSME Debt Distress' },
    { id: 'corporate-vs-retail-debt-settlement-differences', title: '2. Corporate vs. Retail Debt Nuances' },
    { id: 'personal-guarantees-and-directors-liability', title: '3. Personal Guarantees & Directors’ Liability' },
    { id: 'sarfaesi-act-myth-unsecured-business-loans', title: '4. The SARFAESI Myth on Unsecured Debt' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Resolution Blueprint' },
    { id: 'pecuniary-jurisdiction-drt-vs-civil-courts', title: '6. DRT Thresholds & Civil Litigation Realities' },
    { id: 'npa-provisioning-and-npv-haircut-mechanics', title: '7. NPA Aging & NPV Haircut Mathematics' },
    { id: 'statutory-notices-section-138-and-section-25-defense', title: '8. Section 138 & Section 25 Defense' },
    { id: 'step-by-step-msme-settlement-roadmap', title: '9. 5-Step MSME Settlement Roadmap' },
    { id: 'commercial-cibil-and-director-credit-rebuilding', title: '10. Commercial CIBIL & Director Rehabilitation' },
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
      question: "How does an unsecured business loan settlement differ from a retail personal loan settlement?",
      answer: (
        <p>
          Unlike retail personal loans that assess individual salary slips, business loan settlements evaluate enterprise financial health, GST returns, audited profit and loss accounts, and corporate entity structures. Lenders scrutinize personal guarantees executed by directors or partners and verify that business closure was caused by involuntary commercial insolvency rather than fraudulent fund diversion before sanctioning compromise haircuts under RBI guidelines.
        </p>
      )
    },
    {
      question: "Can a bank seize personal residential property for an unsecured business loan default?",
      answer: (
        <p>
          No, because the loan is completely unsecured, lenders have no primary charge or mortgage over your real estate and cannot invoke Section 13(2) or Section 13(4) of the SARFAESI Act, 2002 to take possession without court intervention. To attach personal assets, a lender must first secure a contested civil court money decree or DRT recovery certificate, which typically takes 4 to 8 years in Indian judicial courts.
        </p>
      )
    },
    {
      question: "What is the role of a Personal Guarantee in unsecured business loan recovery?",
      answer: (
        <p>
          In India, banks and NBFCs mandate that directors, partners, or proprietors execute personal guarantees under Sections 126 and 128 of the Indian Contract Act, 1872. This creates co-extensive liability, allowing lenders to pursue the individual guarantor alongside the enterprise. However, a properly negotiated One-Time Settlement (OTS) explicitly mandates the unconditional discharge and cancellation of all personal guarantees in the final sanction letter.
        </p>
      )
    },
    {
      question: "What percentage of debt haircut can a failed business expect during an OTS?",
      answer: (
        <p>
          For genuine MSME business failures with zero operating cash flow and accounts classified as Doubtful NPAs (carrying 100% bank provisioning), banks and NBFCs routinely approve haircuts between 45% and 65% on the principal book balance, alongside a mandatory 100% waiver of all accumulated penal interest, overdue charges, and bounce fees.
        </p>
      )
    },
    {
      question: "How do banks verify whether a business failure is genuine or willful default?",
      answer: (
        <p>
          Bank Credit Committees inspect GSTR-3B and GSTR-1 filings, bank account statements across all operating banks, income tax returns (ITR-V), and audited balance sheets. They verify that loan proceeds were utilized for bona fide business operations (working capital, vendor payments, payroll) rather than siphoned off into personal investments or undisclosed entities.
        </p>
      )
    },
    {
      question: "Can a bank initiate Debt Recovery Tribunal (DRT) proceedings for an unsecured business loan?",
      answer: (
        <p>
          Under the Recovery of Debts and Bankruptcy Act (RDB Act), 1993, a bank or financial institution can approach the DRT only if the total aggregate default across facilities with that specific lender equals or exceeds ₹20 Lakhs. For defaults below ₹20 Lakhs, DRT is legally barred, restricting the lender to civil suits, arbitration, or compromise OTS.
        </p>
      )
    },
    {
      question: "What happens to Section 138 NI Act and Section 25 PSSA notices after an OTS?",
      answer: (
        <p>
          Cheque bounce complaints under Section 138 of the Negotiable Instruments Act and e-NACH mandate failure notices under Section 25 of the Payment and Settlement Systems Act are compoundable offenses under Section 147 of the NI Act. Upon payment of the agreed settlement amount, the lender is legally bound to withdraw all criminal complaints and file compounding applications before the magistrate.
        </p>
      )
    },
    {
      question: "How does settling an unsecured business loan affect the director's personal CIBIL and Commercial CIBIL (CMR)?",
      answer: (
        <p>
          The loan account is marked as 'Settled' with a ₹0 balance in both the enterprise Commercial CIBIL report (Company Credit Report) and the individual director's personal CIBIL report. While this temporarily impacts credit scores, it eliminates active default markers, allows business owners to rebuild credit within 18 to 24 months, and removes names from high-risk monitoring lists.
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
            <Building2 className="w-3.5 h-3.5" />
            <span>MSME Debt Resolution &amp; RBI Compromise Settlement Guide 2026</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            Unsecured Business Loan Settlement Process:{' '}
            <span className="text-[#3b82f6] md:text-[#60a5fa]">MSME Distress, Corporate vs Retail Debt &amp; Haircut Guide</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Navigate working capital loan defaults, fintech debt distress, personal guarantee invocations, and commercial insolvency. Learn how corporate settlement differs from retail loans and how to secure 45%–65% haircuts under RBI OTS frameworks.
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
              <span>Request Free MSME Case Evaluation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#npa-provisioning-and-npv-haircut-mechanics"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Explore Business Haircut Formulas
            </a>
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
                        ? 'bg-blue-50 text-[#1F5EFF] font-bold border-l-2 border-[#1F5EFF]'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium'
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
                Unsecured business loan settlement operates under distinct institutional accounting and legal rules compared to salaried personal loans. When an enterprise fails, banks cannot invoke SARFAESI against personal residential property. By proving genuine commercial insolvency through GST and audited P&amp;L filings, business founders can negotiate 45%–65% principal haircuts with complete personal guarantee discharge.
              </p>
            </div>
          </aside>

          {/* MIDDLE COLUMN: Expanded Content Column */}
          <main className="min-w-0 blog-content">

            {/* SECTION 1: Anatomy of MSME Debt Distress */}
            <section id="anatomy-of-msme-unsecured-debt-distress" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <Building2 className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 01</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                1. The Anatomy of MSME Debt Distress: Working Capital Collapse, Fintech Stacking &amp; Commercial Realities
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Running a Micro, Small, or Medium Enterprise (MSME) in India exposes entrepreneurs to high operational volatility, delayed buyer payments, supply chain disruptions, and unexpected macroeconomic shocks. To maintain daily liquidity and fulfill customer orders, small business founders routinely avail unsecured business loans, merchant cash advances, machinery credit lines, and Business Installment Loans (BILs). These credit facilities are aggressively disbursed by scheduled commercial banks including HDFC Bank, ICICI Bank, Axis Bank, and Kotak Mahindra Bank, alongside prominent non-banking financial companies (NBFCs) and fintech lenders such as Bajaj Finance, Tata Capital, Lendingkart, NeoGrowth, and InCred.
                </p>
                <p>
                  When a commercial enterprise collapses due to loss of key client contracts, cancellations of export orders, or insurmountable working capital deficits, the business experiences a total cash-flow paralysis. Unable to service monthly installments ranging from ₹50,000 to ₹5,00,000 across multiple stacked lenders, distressed entrepreneurs suddenly find themselves facing aggressive recovery pressure. Debt recovery agencies frequently target company premises, contact suppliers, and harass promoters at their residential addresses, creating severe psychological distress.
                </p>
                <p>
                  Entrepreneurs must recognize that commercial business failure is not a crime. Under Indian jurisprudence, non-repayment of an unsecured business loan arising from genuine business insolvency represents a civil contract breach governed by the Indian Contract Act, 1872. The Reserve Bank of India has repeatedly emphasized through its circulars that commercial lenders must establish clear mechanisms to resolve stressed enterprise assets through structured compromise settlements. Understanding the legal distinctions between corporate debt and individual personal liabilities is the first crucial step toward achieving a clean debt exit.
                </p>
              </div>

              {/* Statutory Callout Box */}
              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl p-5 my-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong className="font-bold block text-amber-950 mb-1 text-sm">Commercial Failure vs Willful Default</strong>
                    Under RBI Master Directions, an involuntary financial default caused by enterprise revenue collapse, market downturns, or non-realization of trade receivables is classified as a genuine commercial distress. It is fundamentally distinct from &apos;willful default&apos; or fraudulent diversion of funds, entitling the enterprise to formal One-Time Settlement (OTS) relief.
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 2: Corporate vs Retail Debt Settlement Nuances */}
            <section id="corporate-vs-retail-debt-settlement-differences" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <Scale className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 02</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                2. Corporate vs. Retail Debt Settlement: Key Structural, Accounting &amp; Legal Distinctions
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  A common misconception among business owners is assuming that settling an unsecured business loan follows the identical trajectory of an individual retail personal loan. In reality, banking institutions apply entirely distinct credit evaluation matrices, accounting audits, and legal protocols when negotiating enterprise debts compared to consumer credit.
                </p>
                <p>
                  In a retail personal loan settlement, the lending bank evaluates the individual borrower&apos;s personal bank statements, salary slips, Form 16, and individual hardship evidence such as job termination or medical emergencies. In contrast, an unsecured business loan settlement requires an in-depth institutional review of the legal entity&apos;s constitutional structure, whether operating as a Sole Proprietorship, Partnership Firm, Limited Liability Partnership (LLP), or Private Limited Company.
                </p>
                <p>
                  When evaluating an MSME settlement proposal, the bank&apos;s Stressed Assets Recovery Branch (SARB) and Zonal Credit Committee conduct forensic scrutiny of corporate accounting records. They examine Goods and Services Tax (GST) returns, including GSTR-3B monthly summaries and GSTR-1 outward supply statements, alongside audited balance sheets, profit and loss statements, and primary current account bank ledgers. The primary institutional objective is verifying that the enterprise suffered authentic economic erosion rather than capital siphoning.
                </p>
              </div>

              {/* Comparative Table: Business vs Retail Settlement */}
              <div className="overflow-x-auto my-6">
                <table>
                  <thead>
                    <tr>
                      <th>Settlement Parameter</th>
                      <th>Unsecured Business Loan (MSME)</th>
                      <th>Retail Personal Loan (Individual)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Borrower Entity Type</strong></td>
                      <td>Proprietorship, Partnership, LLP, Pvt Ltd</td>
                      <td>Salaried or Individual Self-Employed</td>
                    </tr>
                    <tr>
                      <td><strong>Primary Evaluation Basis</strong></td>
                      <td>GST Filings, Audited P&amp;L, Cash-Flow Audit</td>
                      <td>Salary Slips, Bank Statements, Medical Records</td>
                    </tr>
                    <tr>
                      <td><strong>Personal Guarantee Role</strong></td>
                      <td>Executed by Directors / Partners (Co-extensive)</td>
                      <td>Direct Primary Borrower Liability</td>
                    </tr>
                    <tr>
                      <td><strong>Forensic Scrutiny Depth</strong></td>
                      <td>High (Vendor payments, tax records, trade books)</td>
                      <td>Moderate (Income verification, living expenses)</td>
                    </tr>
                    <tr>
                      <td><strong>Legal Forum Limits</strong></td>
                      <td>DRT applicable if aggregate bank dues &ge; ₹20 Lakhs</td>
                      <td>DRT applicable if aggregate bank dues &ge; ₹20 Lakhs</td>
                    </tr>
                    <tr>
                      <td><strong>Credit Bureau Impact</strong></td>
                      <td>Commercial CIBIL (CMR Rank) + Director Personal PAN</td>
                      <td>Individual Personal CIBIL Score Only</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 3: Personal Guarantees & Directors' Liability */}
            <section id="personal-guarantees-and-directors-liability" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <ShieldAlert className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 03</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                3. Personal Guarantees &amp; Directors&apos; Liability: Sections 126 &amp; 128 Contract Act Nuances
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Founders of Private Limited companies frequently establish corporate entities assuming that the doctrine of limited liability fully shields their personal assets from business creditors. However, Indian commercial lending practices universally bypass corporate veil protections for unsecured business loans by requiring directors and key promoters to execute unconditional personal guarantee deeds.
                </p>
                <p>
                  Under <strong>Section 126 of the Indian Contract Act, 1872</strong>, a contract of guarantee is an agreement to perform the promise or discharge the liability of a third person in case of their default. Furthermore, under <strong>Section 128 of the Indian Contract Act</strong>, the liability of the surety or guarantor is &apos;co-extensive&apos; with that of the principal debtor, unless expressly provided otherwise in the agreement. This legal provision empowers the financial institution to initiate recovery actions directly against the personal guarantor simultaneously with, or even prior to, exhausting legal remedies against the defaulting company.
                </p>
                <p>
                  In a sole proprietorship, no legal separation exists between the proprietor and the enterprise; the proprietor bears unlimited personal liability on their individual Permanent Account Number (PAN). In a partnership firm, all partners remain jointly and severally liable under the Indian Partnership Act, 1932. For Private Limited entities, lenders invoke the personal guarantee clause to issue legal demand notices to directors.
                </p>
                <p>
                  A critical objective of an advocate-negotiated business loan settlement is ensuring that the final One-Time Settlement Sanction Letter explicitly stipulates the unconditional discharge, cancellation, and return of all executed Personal Guarantee Deeds. Without this precise legal clause, a bank might accept a partial compromise from the corporate entity while unlawfully preserving residual recovery claims against the individual guarantors.
                </p>
              </div>

              {/* Highlight Box on Personal Guarantee Discharge */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 my-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <FileCheck className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                    <strong className="font-bold block text-slate-950 mb-1 text-sm">Essential Legal Requirement: Dual Discharge in OTS Sanction</strong>
                    In every business loan settlement involving Private Limited firms or partnerships, the settlement sanction letter must explicitly discharge both the Principal Corporate Debtor and all Individual Personal Guarantors. SettleLoans legal counsel rigorously audits sanction terms to eliminate future personal guarantor claims.
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 4: The SARFAESI Myth on Unsecured Debt */}
            <section id="sarfaesi-act-myth-unsecured-business-loans" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <Lock className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 04</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                4. The SARFAESI Myth: Why Unsecured Business Loans Cannot Trigger Property Auctions
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  One of the most potent intimidation tactics employed by aggressive recovery agencies against defaulting business owners is threatening the immediate attachment, sealing, and public auction of their residential home or personal assets under the SARFAESI Act. These threats exploit the borrower&apos;s lack of procedural legal knowledge to induce panic.
                </p>
                <p>
                  It is vital to state the law unequivocally: <strong>The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI Act) applies exclusively to secured credit facilities where a specific, registered mortgage or hypothecation charge exists over an identified immovable or movable property.</strong>
                </p>
                <p>
                  Because an unsecured business loan, machinery credit line, or fintech merchant loan is sanctioned without any underlying real estate mortgage, the lending institution possesses zero statutory authority under Section 13(2) or Section 13(4) of the SARFAESI Act. A bank cannot issue a 60-day demand notice under SARFAESI, cannot take symbolic possession of your residential property, and cannot approach the District Magistrate (DM) or Chief Metropolitan Magistrate (CMM) under Section 14 for physical asset eviction.
                </p>
                <p>
                  To attach an unencumbered personal asset for an unsecured business default, a lender must undertake protracted judicial litigation. The bank must file a contested summary civil suit under Order XXXVII CPC or initiate Debt Recovery Tribunal proceedings (if exposure exceeds ₹20 Lakhs), secure a crystallized money decree, and subsequently file execution petitions under Order XXI CPC. In Indian civil courts, this judicial process typically spans 4 to 8 years, creating an overwhelming commercial incentive for lenders to accept an immediate cash compromise settlement instead.
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
                        Unsecured Business Loan Settlement &amp; MSME Debt Resolution Overview
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/unsecured-business-loan-settlement.jpg"
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
                      src="/images/infographics/unsecured-business-loan-settlement.jpg"
                      alt="Unsecured Business Loan Settlement Process and MSME Debt Resolution Blueprint"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Takeaway:</strong> Settle distressed MSME business loans with 45%–65% haircuts and full release of personal guarantees.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free MSME Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* SECTION 6: DRT Thresholds & Civil Litigation Realities */}
            <section id="pecuniary-jurisdiction-drt-vs-civil-courts" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <Gavel className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 06</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                6. Pecuniary Jurisdiction &amp; Legal Forums: DRT Limits, Civil Summary Suits &amp; Arbitration Defense
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  When a commercial enterprise defaults on unsecured debt, financial institutions assess their legal recovery options based strictly on statutory pecuniary thresholds and recovery costs. Under <strong>Section 1(4) of the Recovery of Debts and Bankruptcy Act (RDB Act), 1993</strong>, the minimum pecuniary threshold required for a bank or financial institution to approach the Debt Recovery Tribunal (DRT) is ₹20 Lakhs.
                </p>
                <p>
                  If an enterprise holds an unsecured business loan with an outstanding principal below ₹20 Lakhs, the lender is statutorily barred from approaching the DRT. For exposures under ₹20 Lakhs, the financial institution is restricted to filing a regular civil money suit under Order XXXVII of the CPC in the local District Court, referring the matter to National Lok Adalat, or invoking unilateral arbitration clauses.
                </p>
                <p>
                  Furthermore, private NBFCs and fintech lenders frequently initiate unilateral arbitration proceedings by appointing sole arbitrators without the mutual consent of the borrower. In the landmark judgment <em>Perkins Eastman Architects DPC v. HSCC (India) Ltd.</em>, the Supreme Court of India held that an interested party cannot unilaterally appoint a sole arbitrator. SettleLoans advocates routinely challenge such unilateral appointments under Section 12(5) and Section 14 of the Arbitration and Conciliation Act, 1996, effectively neutralizing coercive arbitral pressure.
                </p>
                <p>
                  Regarding corporate insolvency under the Insolvency and Bankruptcy Code, 2016 (IBC), the minimum default threshold for initiating Corporate Insolvency Resolution Process (CIRP) under Section 4 of the Code was raised by the Central Government to ₹1 Crore. Consequently, operational creditors and financial lenders cannot drag small business enterprises with sub-crore defaults to the National Company Law Tribunal (NCLT), reinforcing bilateral compromise settlement as the only viable recovery avenue.
                </p>
              </div>
            </section>

            {/* SECTION 7: NPA Aging & NPV Haircut Mathematics */}
            <section id="npa-provisioning-and-npv-haircut-mechanics" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <Calculator className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 07</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                7. Delinquency Aging, 100% Provisioning &amp; Net Present Value (NPV) Haircut Mathematics
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Negotiating an optimal 45% to 65% debt haircut on an unsecured business loan requires leveraging the bank&apos;s internal accounting mechanics. Under the Reserve Bank of India&apos;s Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP), overdue enterprise loans transition through rigid delinquency stages based on Days Past Due (DPD).
                </p>
                <p>
                  An account is categorized as Special Mention Account-0 (SMA-0) for 1 to 30 days overdue, SMA-1 for 31 to 60 days, and SMA-2 for 61 to 90 days. Upon crossing the 90-day default threshold, the loan becomes a Non-Performing Asset (NPA) under the Substandard category, requiring an immediate 25% capital provisioning hit for unsecured facilities. As default extends past 12 months, the account slips into Doubtful Asset Stage 1 (D1), where the RBI mandates a <strong>100% capital write-off provisioning</strong> against the bank&apos;s operating profit for the unsecured portion.
                </p>
                <p>
                  When an account is 100% provisioned, the bank has already absorbed the financial loss on its balance sheet. Under the <strong>RBI Master Direction on Compromise Settlements (June 2023)</strong>, the Credit Committee applies a Net Present Value (NPV) model. They compare receiving an immediate liquid cash settlement today against the discounted value of multi-year civil litigation minus legal retainers, court fees, and inflation drag. For an enterprise that has ceased commercial operations with negligible liquid assets, immediate cash recovery represents a pure quarterly profit write-back for the bank, enabling credit committees to sanction deep haircuts.
                </p>
              </div>

              {/* Table of MSME Haircut Bands */}
              <div className="overflow-x-auto my-6">
                <table>
                  <thead>
                    <tr>
                      <th>Delinquency Category</th>
                      <th>Overdue Period</th>
                      <th>RBI Mandatory Provisioning</th>
                      <th>Bank Settlement Flexibility</th>
                      <th>Expected Haircut Band</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>SMA-0 / SMA-1</strong></td>
                      <td>1 – 60 Days</td>
                      <td>Standard Provisioning (0.4%)</td>
                      <td>Low (Restructuring &amp; Tenor Extension)</td>
                      <td>0% – 10% (Late fee waiver only)</td>
                    </tr>
                    <tr>
                      <td><strong>SMA-2</strong></td>
                      <td>61 – 90 Days</td>
                      <td>Pre-NPA Alert Phase</td>
                      <td>Moderate (Pre-NPA regularization)</td>
                      <td>15% – 25% (Interest relief)</td>
                    </tr>
                    <tr>
                      <td><strong>Substandard NPA</strong></td>
                      <td>91 – 180 Days</td>
                      <td>25% Unsecured Provisioning</td>
                      <td>High (Formal OTS discussions open)</td>
                      <td>35% – 45% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td><strong>Doubtful D1 NPA</strong></td>
                      <td>181 – 365 Days</td>
                      <td>100% Capital Provisioning</td>
                      <td>Very High (SARB Credit Committee Window)</td>
                      <td><strong>45% – 60% Haircut Sweet Spot</strong></td>
                    </tr>
                    <tr>
                      <td><strong>Doubtful D2 / Loss</strong></td>
                      <td>365+ Days / Closed Unit</td>
                      <td>100% Fully Written-Off</td>
                      <td>Maximum (Any liquid cash is profit)</td>
                      <td><strong>55% – 65%+ Maximum Haircut</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 8: Section 138 & Section 25 Defense */}
            <section id="statutory-notices-section-138-and-section-25-defense" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <Scale className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 08</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                8. Statutory Notice Escalation: Section 138 NI Act Cheques &amp; Section 25 PSSA e-NACH Defense
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  When business cash flows dry up, automated National Automated Clearing House (e-NACH) standing instructions bounce, and post-dated security cheques deposited by lenders are dishonored. Lending institutions immediately issue formal statutory legal notices under <strong>Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA)</strong> and <strong>Section 138 of the Negotiable Instruments Act, 1881 (NI Act)</strong>.
                </p>
                <p>
                  Receiving notices that cite criminal provisions causes understandable anxiety for company directors. However, both Section 25 PSSA and Section 138 NI Act represent quasi-criminal, bailable, and compoundable statutory offenses designed to enforce financial obligations rather than penal imprisonment. The lender must provide a mandatory 30-day statutory demand notice window before filing any formal criminal complaint before a Metropolitan Magistrate or Judicial Magistrate First Class.
                </p>
                <p>
                  A specialized debt settlement advocate issues a comprehensive point-by-point reply within the 30-day window. The reply demonstrates that non-payment arose from bona fide commercial insolvency, confirms that the dishonored instrument was issued strictly as collateral security rather than against an undisputed existing liability, and formally places on record the enterprise&apos;s willingness to settle the debt under RBI compromise frameworks. Under <strong>Section 147 of the Negotiable Instruments Act</strong>, once the agreed settlement sum is remitted, all criminal proceedings are formally compounded and permanently closed.
                </p>
              </div>
            </section>

            {/* SECTION 9: 5-Step MSME Settlement Roadmap */}
            <section id="step-by-step-msme-settlement-roadmap" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <FileText className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 09</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                9. The 5-Step Strategic Legal Roadmap for MSME Debt Settlement
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Executing a legally binding, deep-discount settlement on unsecured business loans requires disciplined legal execution through five structured phases:
                </p>
                <p>
                  <strong>Phase 1: Forensic Loan Ledger &amp; Surcharge Audit.</strong> SettleLoans advocates inspect your complete loan account statement to isolate the actual disbursed principal from compounded penal interest, late payment levies, inspection surcharges, and repeated NACH bounce fees.
                </p>
                <p>
                  <strong>Phase 2: Business Insolvency Dossier Compilation.</strong> We assemble a comprehensive corporate hardship dossier, including GSTR-3B filings demonstrating turnover reduction, audited balance sheets showing commercial losses, bank statements proving cash-flow depletion, and trade debtor default proofs to establish bona fide business distress.
                </p>
                <p>
                  <strong>Phase 3: Formal Legal Notice Reply &amp; Harassment Shield.</strong> Our advocates issue formal legal representations to bank Nodal Officers and SARB Heads, channeling all future communication exclusively through legal counsel and halting unauthorized recovery visits under the RBI Fair Practices Code.
                </p>
                <p>
                  <strong>Phase 4: Direct Credit Committee Compromise Negotiation.</strong> Once the loan enters the 100% provisioning window, our senior counsel negotiates directly with the bank&apos;s Zonal Settlement Authority, leveraging NPV calculations to secure an approved 45% to 65% principal haircut.
                </p>
                <p>
                  <strong>Phase 5: Sanction Letter Verification &amp; Dual Discharge NDC.</strong> Before any payment is transferred, we audit the bank&apos;s official settlement sanction letter to verify that it explicitly discharges both the corporate entity and all personal guarantors. Following payment, we secure the stamped zero-balance No Dues Certificate (NDC) within 30 days under RBI Circular RBI/2023-24/60.
                </p>
              </div>
            </section>

            {/* SECTION 10: Commercial CIBIL & Director Rehabilitation */}
            <section id="commercial-cibil-and-director-credit-rebuilding" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <TrendingUp className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 10</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                10. Commercial CIBIL (CMR Rank), Director Credit Trajectory &amp; Rehabilitation
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Settling an unsecured business loan impacts two separate credit reporting layers: the enterprise <strong>Company Credit Report (CCR)</strong> reflecting its CIBIL MSME Rank (CMR), and the individual directors&apos; or partners&apos; personal consumer credit scores.
                </p>
                <p>
                  Under the Credit Information Companies (Regulation) Act (CICRA), 2005, the lending institution must update all credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark) within 30 to 45 days of receiving the final settlement tranche. The loan account status transitions from &apos;NPA / Doubtful&apos; to <strong>&apos;Settled&apos;</strong>, with the outstanding ledger balance reported as <strong>₹0</strong>.
                </p>
                <p>
                  While a &apos;Settled&apos; status results in an immediate reduction in the director&apos;s personal credit score, it halts the continuous negative score erosion caused by compounding monthly defaults. Under RBI guidelines, a 12-month cooling period applies before fresh institutional credit can be extended. Directors can systematically restore their personal CIBIL score to <strong>750+ within 18 to 24 months</strong> by maintaining a secured credit card backed by a fixed deposit and ensuring 100% punctual monthly payments.
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
                Frequently Asked Questions: Unsecured Business Loan Settlement
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
                  href="/bank-one-time-settlement-ots-policy"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Bank OTS Policy Guide
                </Link>
                <Link
                  href="/10-lakh-personal-loan-settlement"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  ₹10 Lakh Loan Settlement
                </Link>
                <Link
                  href="/20-lakh-personal-loan-settlement"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  ₹20 Lakh Loan Settlement
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Settlement CIBIL Impact
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
                Specialist in MSME debt resolution, corporate One-Time Settlements, director personal guarantee defense, and banking dispute litigation across Indian tribunals.
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
                <span>MSME Notice Defense Desk</span>
              </div>
              <h3 className="text-base font-black text-white mb-2 leading-snug">
                Facing Business Loan Defaults or Guarantee Invocations?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Get senior advocate intervention to defend Section 138 / Section 25 notices, stop recovery harassment, and secure a 45%–65% OTS haircut with complete personal guarantee discharge.
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
                <span>Why MSMEs Trust SettleLoans</span>
              </div>
              <div className="space-y-2.5 text-xs">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>100% Legal Protection:</strong> Representation served directly to Bank Nodal Officers and SARB Committees under RBI frameworks.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Personal Guarantee Shield:</strong> Legal discharge and release of all director and partner personal guarantee deeds.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Official Stamped Sanctions:</strong> Every settlement verified by an authentic bank approval letter before payment.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Over ₹180+ Crores Settled:</strong> Trusted by 12,000+ business owners and borrowers across India.</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
