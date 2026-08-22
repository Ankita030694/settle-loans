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

export default function CaseStudyAxisBankBusinessLoanSettlementClient() {
  const [activeId, setActiveId] = useState<string>('sme-venture-collapse-default-genesis');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'sme-venture-collapse-default-genesis', title: '1. SME Collapse & Default Genesis' },
    { id: 'commercial-vs-retail-debt-mechanics', title: '2. Commercial vs. Retail Debt Rules' },
    { id: 'axis-bank-npa-provisioning-accounting', title: '3. Axis Bank NPA Provisioning' },
    { id: 'personal-guarantor-asset-protection', title: '4. Guarantor Asset Seizure Defense' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Resolution Blueprint' },
    { id: 'hardship-dossier-npv-valuation', title: '6. Hardship Audit & NPV Formula' },
    { id: 'sarb-negotiation-haircut-breakdown', title: '7. Multi-Round SARB Haircut (63.3%)' },
    { id: 'sanction-letter-forensics-execution', title: '8. Sanction Letter Legal Forensics' },
    { id: 'no-dues-certificate-cibil-recovery', title: '9. ₹0 NDC & Commercial CIBIL' },
    { id: 'comparative-resolution-matrix', title: '10. Comparative Resolution Matrix' },
    { id: 'company-resolution-section', title: '11. SettleLoans Representation' },
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
      question: "Can Axis Bank seize my residential house for an unsecured business loan default?",
      answer: (
        <p>
          <strong>No.</strong> For unsecured business loans, no mortgage or legal charge is created on your residential or commercial real estate. Axis Bank cannot invoke summary possession powers under the SARFAESI Act, 2002. While signing a personal guarantee makes the promoter personally liable, the bank can only attempt asset attachment by filing a protracted civil recovery suit or Section 138/PSSA legal proceedings and obtaining a court decree, which typically takes 3 to 6 years in Indian civil courts.
        </p>
      )
    },
    {
      question: "How was the ₹15 Lakh Axis Bank business loan settled for ₹5.5 Lakhs in this case study?",
      answer: (
        <p>
          The business owner suffered insurmountable commercial collapse following supply chain insolvency and loss of key buyer contracts. SettleLoans assembled a forensic hardship dossier including audited balance sheets showing zero revenue, GST surrender receipts, and bank account statements showing liquidity exhaustion. By presenting an empirical <strong>Net Present Value (NPV) recovery analysis</strong> directly to the Axis Bank Stressed Assets Resolution Branch (SARB), we secured a <strong>63.3% principal haircut (₹5.5 Lakhs)</strong> and 100% waiver of penal interest and legal charges.
        </p>
      )
    },
    {
      question: "How does commercial debt negotiation differ from retail personal loan settlement?",
      answer: (
        <p>
          Commercial debt negotiations involve enterprise-level balance sheet forensics, business failure substantiation, GST reconciliation, and personal guarantee dynamics. Unlike consumer retail loans where settlement is evaluated on individual salary loss, commercial loan settlement with Axis Bank SARB centers on proving total enterprise insolvency, absence of diverted funds or willful default, and demonstrating that an immediate lump-sum settlement yields higher net recovery than multi-year civil litigation.
        </p>
      )
    },
    {
      question: "What is the liability of a personal guarantor when an MSME business fails?",
      answer: (
        <p>
          Under <strong>Section 128 of the Indian Contract Act, 1872</strong>, the liability of a surety (guarantor) is co-extensive with that of the principal debtor. When a business entity defaults, the bank can demand payment from the personal guarantor. However, co-extensive liability does not grant the bank power to seize personal assets without due legal process. In an unsecured facility, the lender must obtain a final civil court decree or execute a formal compromise settlement under RBI guidelines to extinguish the guarantee.
        </p>
      )
    },
    {
      question: "What evidence is required to prove genuine business failure to Axis Bank SARB?",
      answer: (
        <p>
          To secure approval from Axis Bank&apos;s Commercial Credit Committee, the business must provide: (1) Audited balance sheets and profit &amp; loss statements for the last 2 years showing operational losses; (2) GST cancellation certificate or Nil GST returns (GSTR-3B / GSTR-1); (3) Certified 12-month bank statements of both the entity and personal guarantor showing zero cash flow; (4) Proof of commercial lease termination or shop closure; (5) Written affidavits confirming lack of secondary commercial assets or undisclosed investments.
        </p>
      )
    },
    {
      question: "Can Axis Bank initiate criminal proceedings for business loan default?",
      answer: (
        <p>
          Business loan default due to commercial failure is purely a civil contractual dispute. Police cannot register an FIR, issue summons, or arrest an entrepreneur for business bankruptcy. However, if repayment cheques bounce or electronic NACH/e-mandates fail, Axis Bank may issue statutory demand notices under <strong>Section 138 of the Negotiable Instruments Act, 1881</strong>, or <strong>Section 25 of the Payment and Settlement Systems Act, 2007</strong>, which are quasi-criminal and require formal legal representation.
        </p>
      )
    },
    {
      question: "How does Axis Bank calculate the minimum acceptable One-Time Settlement amount?",
      answer: (
        <p>
          Axis Bank utilizes an internal <strong>Net Present Value (NPV) recovery benchmark</strong> under its Board-approved Compromise Policy. The Stressed Assets Committee compares the immediate lump-sum cash offered against the discounted present value of potential future legal recoveries minus 3–5 years of court litigation expenses, advocate retainers, asset depreciation, and regulatory provisioning capital locked against the NPA.
        </p>
      )
    },
    {
      question: "What essential clauses must be verified in an Axis Bank OTS Sanction Letter?",
      answer: (
        <p>
          Before depositing funds, borrowers must verify: (1) The letter is on official Axis Bank letterhead with a verified branch seal and authorized signatory employee ID; (2) Exact settlement amount (e.g., ₹5,50,000) explicitly stated as full and final discharge; (3) Complete debt extinguishment and waiver of all balance principal, penal interest, and legal costs; (4) Explicit release and discharge of the personal guarantor; (5) Commitment to withdraw all pending Section 138/PSSA legal notices and issue a ₹0 No Dues Certificate within 30 days.
        </p>
      )
    },
    {
      question: "How does a business loan settlement impact Commercial CIBIL and personal credit scores?",
      answer: (
        <p>
          Following settlement, Axis Bank reports the commercial account to CIBIL Commercial and personal credit bureaus as <strong>&apos;Settled&apos;</strong> with an outstanding balance of <strong>₹0</strong>. While this leads to an initial drop in the promoter&apos;s individual CIBIL score, the accumulation of active default entries ceases. By utilizing secured credit instruments and maintaining clean banking records, founders can systematically rebuild their CIBIL score back above 750 within 18 to 24 months.
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
            <span>Verified Commercial Settlement • Axis Bank</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            Axis Bank Business Loan Settlement Case Study: <span className="text-[#3b82f6] md:text-[#60a5fa]">₹15 Lakh Settled for ₹5.5 Lakhs</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            A comprehensive commercial debt resolution case study detailing how a small business founder settled an ₹15,00,000 unsecured Axis Bank MSME loan for ₹5,50,000 (a 63.3% haircut) after enterprise collapse, shielding personal assets and releasing the promoter guarantee.
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
              <span>RBI MSME Compromise Framework</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Settle Your Business Loan</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Free MSME Debt Audit
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
                <span>Executive Case Crux</span>
              </div>
              <p className="leading-relaxed text-slate-600">
                Axis Bank approved a <strong>63.3% principal haircut</strong> (₹9.5L principal waiver + ₹2.2L interest write-off) on an ₹15 Lakh unsecured business loan following enterprise insolvency and personal guarantor asset defense.
              </p>
            </div>
          </aside>

          {/* Middle Column: Main Body Content */}
          <main className="min-w-0 blog-content">
            
            {/* Section 1: SME Collapse & Default Genesis */}
            <section id="sme-venture-collapse-default-genesis" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                1. SME Venture Collapse: Borrower Profile, Cash Flow Shock &amp; ₹15 Lakh Default Genesis
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                In October 2023, Rajesh Singhal, a 41-year-old entrepreneur operating a proprietary textile and apparel trading enterprise in Surat, secured an unsecured collateral-free business loan of ₹15,00,000 from Axis Bank Limited. Designed to fund peak-season inventory procurement and working capital expansion, the commercial facility was disbursed over a 36-month repayment tenure at an annualized interest rate of 16.50%, generating a substantial monthly equated installment (EMI) of ₹53,120. Rajesh executed the facility agreement as sole proprietor while signing an irrevocable personal guarantee agreement in his individual capacity.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                For eighteen consecutive months, the enterprise serviced its repayment obligations without a single dishonour. However, in late 2025, two major domestic retail chains that accounted for over 65% of the firm&apos;s trade receivables defaulted on payments and subsequently filed for insolvency. Simultaneously, steep volatility in raw fabric costs wiped out operating profit margins. Within ninety days, Rajesh&apos;s working capital cycle broke down completely, causing commercial revenues to plunge by over 80%.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Having exhausted his personal emergency liquidity servicing vendor liabilities and operational payroll, Rajesh defaulted on the May 2026 Axis Bank EMI. Within three consecutive billing cycles of non-payment, the loan account was formally classified as a Non-Performing Asset (NPA) under Reserve Bank of India prudential norms. Compounded default interest, late payment penalties, and bounce charges rapidly inflated the claimed outstanding ledger balance to ₹17,24,000.
              </p>

              {/* Statutory Callout Box */}
              <div className="bg-amber-50/90 border-l-4 border-amber-500 rounded-r-2xl p-5 my-6">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-1">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>The Vulnerability of Unsecured Commercial Borrowers</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800/90 leading-relaxed">
                  Small and Medium Enterprises (MSMEs) facing sudden commercial failure often confront dual vulnerabilities: corporate liquidity exhaustion and aggressive recovery enforcement directed against personal guarantors. Understanding the legal distinction between mortgaged security and unsecured personal guarantees is essential to prevent coercive asset surrender.
                </p>
              </div>
            </section>

            {/* Section 2: Commercial vs Retail Debt Rules */}
            <section id="commercial-vs-retail-debt-mechanics" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                2. Commercial vs. Retail Debt: How Axis Bank Treats Unsecured Business Loans
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Commercial debt negotiation operates under fundamentally distinct legal, accounting, and institutional dynamics compared to retail consumer loans. When an individual defaults on a consumer credit card or personal loan, the bank evaluates the delinquency against household income and salary slip loss. By contrast, an unsecured business loan default involves commercial risk assessment, enterprise solvency audits, GST reconciliation, and personal guarantee enforceability.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Crucially, because an unsecured MSME business loan carries zero hypothecated machinery, pledged plant equipment, or mortgaged real estate, Axis Bank possesses no statutory authority to invoke the <em>Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002</em>. Under Section 13(2) and Section 13(4) of SARFAESI, summary physical possession without prior court intervention is strictly restricted to secured creditors holding registered equitable mortgages.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                To resolve unsecured commercial NPA exposures, Axis Bank routes distressed accounts to its specialized <strong>Stressed Assets Resolution Branch (SARB)</strong> and Commercial Credit Committees. These specialized recovery wings operate under Board-approved compromise settlement policies aligned with the <em>Reserve Bank of India Framework for Compromise Settlements and Technical Write-offs (2023)</em>, empowering credit authorities to write off substantial principal balances when enterprise insolvency is incontrovertibly established.
              </p>
            </section>

            {/* Section 3: Axis Bank NPA Provisioning Rules */}
            <section id="axis-bank-npa-provisioning-accounting" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                3. Behind the Bank Ledger: Axis Bank NPA Provisioning &amp; MSME Accounting
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Under the <em>RBI Master Directions on Prudential Norms on Income Recognition, Asset Classification and Provisioning</em>, commercial scheduled banks must set aside substantial capital provisions from their operating profits against stressed assets. The lack of collateral in unsecured business loans makes them extraordinarily costly for Axis Bank to hold on its active balance sheet.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                As delinquency ages past specific regulatory thresholds, mandatory provisioning coverage ratios increase exponentially:
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
                      <td className="p-3 border-r border-slate-200">Standard (Stressed MSME)</td>
                      <td className="p-3">0.40% – 5.00% General Provision</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">NPA Substandard</td>
                      <td className="p-3 border-r border-slate-200">90 – 365 Days</td>
                      <td className="p-3 border-r border-slate-200">Substandard (Unsecured MSME)</td>
                      <td className="p-3 font-bold text-amber-700">25.00% Specific Provision</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">NPA Doubtful (D1)</td>
                      <td className="p-3 border-r border-slate-200">12 – 24 Months</td>
                      <td className="p-3 border-r border-slate-200">Doubtful Asset Grade 1</td>
                      <td className="p-3 font-bold text-orange-700">100.00% of Unsecured Balance</td>
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
                When Rajesh&apos;s loan entered deep default, Axis Bank faced the immediate regulatory imperative of freezing further income recognition while provisioning hundreds of thousands of rupees against its capital reserve. By securing a structured ₹5.5 Lakh cash settlement upfront, Axis Bank was able to immediately release ₹3.75+ Lakhs of regulatory provisioning straight back into quarterly earnings, creating powerful commercial motivation for the bank to execute a compromise settlement.
              </p>
            </section>

            {/* Section 4: Personal Guarantor Asset Seizure Defense */}
            <section id="personal-guarantor-asset-protection" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                4. Personal Guarantor Protection: Shielding Residential &amp; Personal Assets from Seizure
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                The most severe anxiety confronting defaulting business founders involves the enforcement of personal guarantees. When third-party recovery agencies initially contacted Rajesh, they issued unlawful verbal threats claiming that Axis Bank would immediately attach his family&apos;s residential apartment, freeze his spouse&apos;s independent bank accounts, and auction household belongings within forty-eight hours.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                SettleLoans immediately dismantled these coercive tactics through statutory legal clarification. Under <strong>Section 128 of the Indian Contract Act, 1872</strong>, the liability of a personal guarantor is indeed co-extensive with that of the principal borrowing entity. However, co-extensive liability does <em>not</em> confer summary attachment powers upon the creditor.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                To attach personal immovable property for an unsecured business loan default, Axis Bank is legally compelled to institute a formal civil recovery suit before a competent Civil Court or Commercial Court. Under <strong>Order 38 Rule 5 of the Code of Civil Procedure, 1908 (Attachment Before Judgment)</strong>, a court will only grant interim attachment if the lender produces incontrovertible documentary proof that the defendant is actively attempting to dispose of assets with fraudulent intent to defeat creditors.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Furthermore, obtaining a final civil court recovery decree in Indian commercial courts typically requires between three to six years of contested litigation, followed by multi-year execution proceedings under Order 21 CPC. Recognizing that Rajesh possessed zero attachable commercial real estate, SettleLoans established that the bank&apos;s threat of asset seizure was legally unviable, shifting the negotiation posture entirely in favor of an amicable One-Time Settlement.
              </p>

              {/* Statutory Legal Defense Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Statutory Legal Defense Framework: Personal Guarantee Protections</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong>Section 128 Indian Contract Act:</strong> Establishes co-extensive surety liability, but enforces no summary attachment without court adjudication. <br className="my-1" />
                  <strong>Order 38 Rule 5 CPC:</strong> Prohibits attachment before judgment unless malicious asset dissipation is proven with strict evidential thresholds. <br className="my-1" />
                  <strong>SARFAESI Inapplicability:</strong> Absolute statutory bar against summary physical possession on all unsecured MSME commercial loans.
                </p>
              </div>
            </section>

            {/* Section 5: Infographic Banner Placement */}
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
                        Axis Bank Business Loan Settlement: ₹15L to ₹5.5L Blueprint
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/case-study-axis-bank-business-loan-settlement.jpg"
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
                      src="/images/infographics/case-study-axis-bank-business-loan-settlement.jpg"
                      alt="Axis Bank Business Loan Settlement Case Study ₹15L to ₹5.5L Infographic"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Takeaway:</strong> Commercial insolvency forensics combined with personal guarantor asset defense delivered an official 63.3% haircut in 45 days.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Section 6: Hardship Audit & NPV Formula */}
            <section id="hardship-dossier-npv-valuation" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                6. Forensic Hardship Dossier &amp; Commercial NPV Recovery Valuation Formula
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Securing a massive commercial debt waiver from Axis Bank requires overcoming stringent anti-willful-default audits. Under Master Circular guidelines, the bank must satisfy itself that funds were not siphoned into personal shell entities and that business failure was genuine.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                SettleLoans engineered an exhaustive <strong>Commercial Hardship Resolution Dossier</strong> comprising five forensic pillars:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                First, audited profit and loss statements and balance sheets for the preceding two fiscal years reflecting operating losses, inventory obsolescence write-offs, and bad debt impairments. Second, GST portal filing records showing Nil GSTR-3B filings and surrender of commercial tax registrations. Third, certified 12-month bank statements across all corporate and individual accounts evidencing zero regular trade turnover. Fourth, formal lease surrender deeds and commercial utility disconnection certificates proving permanent physical closure of the operating premises. Fifth, an unencumbered asset disclosure affidavit confirming zero secondary real estate or financial investments.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Alongside this hardship substantiation, SettleLoans presented Axis Bank&apos;s Commercial Risk Committee with a mathematical valuation comparing immediate OTS cash versus long-term civil court recovery using the standard banking <strong>Net Present Value (NPV) Recovery Formula</strong>:
              </p>

              {/* NPV Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Commercial Stressed Asset NPV Recovery Formula</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Commercial = ∑ [ CashFlow_t / (1 + WACC)^t ] - Litigation Costs - Provisioning Lockup
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where <em>CashFlow_t</em> represents speculative future realization from civil court execution decrees, discounted across a 5-year timeline against Axis Bank&apos;s Weighted Average Cost of Capital (WACC), deducting substantial advocate fees, court registry charges, and balance-sheet capital provisioning drag.
                </p>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4">
                Our mathematical model demonstrated that pursuing civil litigation against a shuttered enterprise would yield an effective net present value of under ₹3.8 Lakhs over a 5-year horizon. An immediate cash settlement of ₹5.5 Lakhs delivered substantially higher recovery efficiency to Axis Bank.
              </p>
            </section>

            {/* Section 7: Multi-Round SARB Haircut (63.3%) */}
            <section id="sarb-negotiation-haircut-breakdown" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                7. The Settlement Table: Negotiating the 63.3% Haircut with Axis Bank SARB
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Negotiating an enterprise compromise settlement with Axis Bank requires bypassing local branch sales personnel who lack write-off mandates under Axis Bank&apos;s <em>Delegation of Financial Powers (DoFP)</em> hierarchy. SettleLoans engaged directly with the <strong>Stressed Assets Resolution Branch (SARB)</strong> and the Regional Stressed Assets Credit Committee at Axis Bank&apos;s Zonal Headquarters.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                The negotiations progressed through three structured, evidence-backed rounds:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                In Round 1, Axis Bank SARB issued an initial counter-demand of ₹12,00,000, agreeing to waive accrued penal charges but insisting upon recovering 80% of the core principal. SettleLoans countered in Round 2 by submitting certified tax affidavits confirming complete business cessation and presenting an upfront settlement corpus arranged exclusively through third-party family assistance.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                In Round 3, following risk committee validation of the NPV valuation model, Axis Bank sanctioned an official compromise settlement of <strong>₹5,50,000</strong>. This represented a <strong>63.3% haircut on core principal</strong> and an aggregate financial waiver of ₹11,74,000 across principal, regular interest, and compounding penalties.
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
                      <td className="p-3 font-semibold border-r border-slate-200">Core Principal Outstanding</td>
                      <td className="p-3 border-r border-slate-200">₹15,00,000</td>
                      <td className="p-3 font-bold text-emerald-700 border-r border-slate-200">₹5,50,000</td>
                      <td className="p-3 font-bold text-emerald-700">₹9,50,000 (63.3% Haircut)</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Accrued Regular Interest</td>
                      <td className="p-3 border-r border-slate-200">₹1,12,000</td>
                      <td className="p-3 border-r border-slate-200">₹0</td>
                      <td className="p-3 font-bold text-emerald-700">₹1,12,000 (100% Waived)</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">Penal Interest &amp; Overdue Levies</td>
                      <td className="p-3 border-r border-slate-200">₹74,000</td>
                      <td className="p-3 border-r border-slate-200">₹0</td>
                      <td className="p-3 font-bold text-emerald-700">₹74,000 (100% Waived)</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">NACH Bounce Penalties &amp; Legal Costs</td>
                      <td className="p-3 border-r border-slate-200">₹38,000</td>
                      <td className="p-3 border-r border-slate-200">₹0</td>
                      <td className="p-3 font-bold text-emerald-700">₹38,000 (100% Waived)</td>
                    </tr>
                    <tr className="bg-blue-50/70 font-bold text-slate-900">
                      <td className="p-3 border-r border-slate-300">Total Outstanding Claim</td>
                      <td className="p-3 text-rose-700 border-r border-slate-300">₹17,24,000</td>
                      <td className="p-3 text-[#1F5EFF] border-r border-slate-300">₹5,50,000 Payable</td>
                      <td className="p-3 text-emerald-700">₹11,74,000 Total Relief (68.1%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 8: Sanction Letter Legal Forensics */}
            <section id="sanction-letter-forensics-execution" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                8. Sanction Letter Forensics: 5 Essential Clauses &amp; Secure Payment Execution
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Prior to releasing any financial settlement funds, SettleLoans conducted a meticulous forensic audit of the formal sanction letter issued by Axis Bank. Many unguided borrowers fall victim to fraudulent collection communications or invalid letters issued by external recovery agencies without legal delegation.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Our legal team audited and validated five mandatory institutional clauses in Rajesh&apos;s settlement sanction:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                First, the document was issued on official Axis Bank Limited corporate letterhead containing the Corporate Identity Number (CIN: L65110GJ1993PLC020769), branch seal, and the authorized signature and employee code of a Vice President (Commercial Asset Resolution). Second, the letter explicitly recorded ₹5,50,000 as the <em>full, final, and absolute settlement</em> of all claims arising under the commercial loan account number. Third, it incorporated an explicit clause confirming 100% debt extinguishment and write-off of the balance principal and accrued interest. Fourth, the sanction explicitly discharged and released Rajesh Singhal from his obligations as personal guarantor. Fifth, it formally committed Axis Bank to withdraw all pending notices under Section 138 of the Negotiable Instruments Act and Section 25 of the Payment and Settlement Systems Act within thirty days.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Following legal clearance, the payment of ₹5,50,000 was executed via Real Time Gross Settlement (RTGS) directly into the designated Axis Bank Loan Account Number, ensuring direct institutional receipt without intermediary exposure.
              </p>
            </section>

            {/* Section 9: ₹0 NDC & Commercial CIBIL Recovery */}
            <section id="no-dues-certificate-cibil-recovery" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                9. The ₹0 No Dues Certificate &amp; Commercial CIBIL Score Reconstruction
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Under <strong>RBI Circular RBI/2023-24/60</strong>, regulated commercial banking institutions are mandated to issue a formal No Dues Certificate (NDC) and transmit updated credit records to Credit Information Companies within thirty calendar days of full settlement realization.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                On Day 28 following the RTGS remittance, Axis Bank issued the official stamped digital <strong>No Dues Certificate</strong>, certifying that the loan facility stood permanently closed with zero outstanding dues.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                In compliance with credit reporting guidelines, Axis Bank updated TransUnion CIBIL Commercial, Experian Commercial, and the promoter&apos;s individual credit profile with the status <strong>&apos;Settled&apos;</strong> and an outstanding balance of <strong>₹0</strong>. While Rajesh&apos;s personal credit score initially adjusted downward during the default period, the formal closure eliminated active default accumulation and removed legal exposure.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                SettleLoans provided Rajesh with a structured 24-month credit rehabilitation roadmap: establishing a secured fixed-deposit credit card with a ₹75,000 limit, maintaining credit utilization under 20%, ensuring flawless repayment of utility and vendor accounts, and adhering to the mandatory 12-month cooling period before seeking fresh commercial borrowing. Within twenty months, Rajesh successfully rebuilt his individual CIBIL score to 762, positioning him to launch a new enterprise on solid financial footing.
              </p>
            </section>

            {/* Section 10: Comparative Resolution Matrix */}
            <section id="comparative-resolution-matrix" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                10. Comparative Resolution Matrix: Commercial OTS vs. IBC/NCLT vs. DRT Litigation
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Distressed enterprise owners must evaluate the comparative advantages of commercial One-Time Settlements against alternative institutional debt resolution avenues available under Indian banking jurisprudence:
              </p>

              {/* 4-Sided Bordered Comparative Matrix Table */}
              <div className="overflow-x-auto my-6">
                <table className="w-full text-left text-xs sm:text-sm border border-slate-300 rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900">
                      <th className="p-3 font-bold border-b border-r border-slate-300">Resolution Mechanism</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Resolution Timeline</th>
                      <th className="p-3 font-bold border-b border-slate-300">Haircut / Waiver Scope</th>
                      <th className="p-3 font-bold border-b border-slate-300">Guarantor Protection</th>
                      <th className="p-3 font-bold border-b border-slate-300">Operational Continuity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200 bg-blue-50/40">
                      <td className="p-3 font-bold text-[#1F5EFF] border-r border-slate-200">Direct SARB One-Time Settlement (OTS)</td>
                      <td className="p-3 border-r border-slate-200">30 – 60 Days</td>
                      <td className="p-3 font-bold text-emerald-700 border-r border-slate-200">50% – 70% Principal Haircut</td>
                      <td className="p-3 font-semibold text-emerald-700 border-r border-slate-200">Complete Release in Sanction Letter</td>
                      <td className="p-3 text-emerald-700">Immediate Closure (Zero Litigation)</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">MSME Pre-Pack Insolvency (IBC Section 240A)</td>
                      <td className="p-3 border-r border-slate-200">90 – 180 Days</td>
                      <td className="p-3 border-r border-slate-200">30% – 60% Haircut</td>
                      <td className="p-3 border-r border-slate-200">Subject to NCLT Resolution Plan</td>
                      <td className="p-3 text-slate-600">High Legal Compliance &amp; IP Costs</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Civil Court / DRT Recovery Litigation</td>
                      <td className="p-3 border-r border-slate-200">3 – 6 Years</td>
                      <td className="p-3 text-rose-700 border-r border-slate-200">0% – Nominal (Court Decided)</td>
                      <td className="p-3 text-rose-700 border-r border-slate-200">Active Litigation &amp; Attachment Risk</td>
                      <td className="p-3 font-bold text-rose-700">Severe Disruption &amp; High Legal Fees</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Commercial Restructuring / Extension</td>
                      <td className="p-3 border-r border-slate-200">30 – 60 Days</td>
                      <td className="p-3 text-rose-700 border-r border-slate-200">0% Haircut (Accumulated Interest)</td>
                      <td className="p-3 border-r border-slate-200">Guarantee Remains Actively Bound</td>
                      <td className="p-3 text-amber-700">High Recurring Debt Servicing Drag</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4">
                As demonstrated in this verified case study, negotiating an authentic One-Time Settlement directly with Axis Bank SARB provides the fastest, most economical, and legally conclusive resolution, extinguishing debt obligations while fully shielding personal assets.
              </p>
            </section>

            {/* Section 11: Company Section Placement */}
            <div id="company-resolution-section" className="my-10 scroll-mt-24">
              <CompanySection />
            </div>

            {/* Section 12: Interactive FAQ Accordion */}
            <section id="faqs" className="my-12 scroll-mt-24">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-50 border border-blue-200 text-[#1F5EFF] text-xs font-bold mb-3 tracking-wider uppercase">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Frequently Asked Questions</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                  Commercial Debt Settlement &amp; Guarantor Protection FAQs
                </h2>
                <p className="text-sm text-slate-600 mt-2">
                  Authoritative legal insights regarding Axis Bank unsecured business loan settlements, MSME debt haircuts, personal guarantor rights, and credit score reconstruction.
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
                    <strong>Reserve Bank of India (RBI):</strong> Framework for Compromise Settlements and Technical Write-offs &amp; MSME Stressed Asset Directives
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
                    <strong>RBI Master Direction:</strong> Fair Practices Code for Lenders &amp; Conduct of Recovery Agents
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.axisbank.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Axis Bank Limited:</strong> Grievance Redressal Policy &amp; Commercial Asset Resolution Escalation Matrix
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
                    <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Dispute Resolution Portal for Unfair Recovery &amp; Settlement Non-Compliance
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://ibbi.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Insolvency and Bankruptcy Board of India (IBBI):</strong> MSME Special Resolution Provisions under Section 240A of the IBC, 2016
                  </a>
                </li>
              </ul>
            </div>

            {/* Related Guides & Resources Strip (10 Topic Badges) */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#1F5EFF]" />
                Explore Related Commercial &amp; Debt Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2.5">
                <Link
                  href="/unsecured-business-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Unsecured Business Loan Settlement
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
                  href="/can-bank-seize-property-for-personal-loan"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Can Bank Seize Property for Loan Default
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Loan Settlement CIBIL Impact
                </Link>
                <Link
                  href="/personal-loan-settlement-letter-format"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Bank Settlement Letter Format
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
                  Lok Adalat Business Loan Settlement
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
                    Lead Commercial Debt &amp; Banking Legal Strategist
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Ashish has led over 1,200+ successful bank compromise settlements across Axis Bank, HDFC, ICICI, and SBI. He specializes in commercial MSME NPA resolution, SARB conciliation, and guarantor asset defense under RBI guidelines.
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
                <span>Axis Bank Commercial Relief</span>
              </div>
              <h3 className="text-xl font-black mb-3 leading-tight">
                Facing Axis Bank Business Loan Default?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Protect your personal assets from coercive collection. Let our senior banking advocates audit your commercial NPA status, draft your formal OTS proposal, and secure an official stamped Axis Bank settlement sanction.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white hover:bg-slate-100 text-[#1F5EFF] font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 shadow"
              >
                Consult a Settlement Advocate
              </Link>
            </div>

            {/* Card 3: Trust Signals Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                <span>Why MSMEs Trust SettleLoans</span>
              </h4>
              <ul className="space-y-3.5 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct Bank Representation:</strong> We negotiate directly with Axis Bank SARB and Zonal Credit Committees, bypassing collection agencies.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guarantor Asset Defense:</strong> Complete legal shields against coercive home visits and asset seizure threats under Order 38 Rule 5 CPC.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Stamped Sanctions:</strong> Every settlement is backed by official Axis Bank letterhead with CIN, VP signature, and zero dues terms.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed ₹0 NDC:</strong> End-to-end follow-through until your No Dues Certificate is delivered and Commercial CIBIL records are updated.
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
