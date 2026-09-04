'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';
import {
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  ChevronDown,
  Calendar,
  PhoneCall,
  ExternalLink,
  Landmark,
  Check,
  Sparkles,
  BookOpen,
  Scale,
  Calculator,
  UserCheck,
  HelpCircle,
  Gavel
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

export default function CaseStudySbiLokAdalatClient() {
  const [activeId, setActiveId] = useState<string>('case-background-borrower-profile');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'case-background-borrower-profile', title: '1. MSME Distress & PSU Default' },
    { id: 'psu-legal-fear-lok-adalat-reality', title: '2. Deconstructing Lok Adalat Fear' },
    { id: 'sbi-accounting-sarb-provisioning', title: '3. SBI SAMB & NPA Accounting' },
    { id: 'hardship-audit-npv-valuation', title: '4. Hardship Dossier & NPV Model' },
    { id: 'anti-harassment-legal-containment', title: '5. Pre-Adalat Legal Defense' },
    { id: 'infographic-resolution-blueprint', title: '6. Settlement Visual Blueprint' },
    { id: 'lok-adalat-hearing-haircut-negotiation', title: '7. Bench Negotiation: 55% Haircut' },
    { id: 'consent-award-statutory-clauses', title: '8. Anatomy of the Consent Award' },
    { id: 'no-dues-certificate-cibil-recovery', title: '9. ₹0 NDC & Credit Rebuilding' },
    { id: 'comparative-resolution-matrix', title: '10. Lok Adalat vs OTS vs Courts' },
    { id: 'company-resolution-section', title: '11. SettleLoans Legal Defense' },
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
      question: "Is a Lok Adalat notice from State Bank of India a police summons or arrest warrant?",
      answer: (
        <p>
          <strong>No.</strong> A Lok Adalat notice issued under the Legal Services Authorities Act, 1987, is strictly an invitation for voluntary pre-litigation conciliation. It is neither a police summons nor a criminal warrant. Lok Adalats operate as Alternative Dispute Resolution (ADR) bodies aimed at amicable compromise, and non-attendance does not constitute a criminal offense or contempt of court.
        </p>
      )
    },
    {
      question: "How was the ₹12 Lakh SBI loan settled for ₹5.4 Lakhs in this case study?",
      answer: (
        <p>
          The borrower suffered severe MSME business revenue collapse, leading to 5 consecutive missed EMIs on an unsecured SBI facility. SettleLoans advocates compiled an unassailable financial hardship dossier proving complete liquidity loss, appeared before the Lok Adalat judicial bench, and demonstrated that SBI&apos;s Net Present Value (NPV) recovery was maximized via an upfront cash settlement of <strong>₹5.4 Lakhs (a 55% principal haircut)</strong> and 100% waiver of penal interest and legal costs.
        </p>
      )
    },
    {
      question: "What percentage of loan waiver or haircut can SBI grant at Lok Adalat?",
      answer: (
        <p>
          Depending on asset classification (NPA Substandard, Doubtful D1/D2, or Loss Asset AUCA) and verifiable borrower hardship, State Bank of India regularly sanctions haircuts ranging from <strong>40% to 65%</strong> on unsecured personal loans and credit cards during National Lok Adalat sessions. Accrued penal interest, late payment levies, and NACH bounce charges are typically waived 100%.
        </p>
      )
    },
    {
      question: "Is a Lok Adalat settlement award legally permanent and binding on SBI?",
      answer: (
        <p>
          Yes. Under <strong>Section 21 of the Legal Services Authorities Act, 1987</strong>, every award made by a Lok Adalat is deemed to be a decree of a Civil Court. It is final and binding on both the borrower and State Bank of India. No appeal lies to any court against a Lok Adalat consent award, meaning SBI can never reopen the loan account or demand residual balances in the future.
        </p>
      )
    },
    {
      question: "What happens if a borrower ignores an SBI Lok Adalat notice?",
      answer: (
        <p>
          If a borrower ignores a Lok Adalat notice, the Lok Adalat bench simply closes the pre-litigation file and refers the matter back to the bank. While there is no immediate penalty or arrest, the borrower loses an invaluable opportunity to negotiate a high-haircut settlement in a neutral judicial forum, and SBI may subsequently initiate regular civil recovery suits or proceedings under Section 138 NI Act.
        </p>
      )
    },
    {
      question: "Can SBI seize personal property or salary for unsecured loan default at Lok Adalat?",
      answer: (
        <p>
          <strong>No.</strong> For unsecured personal loans, banks cannot invoke summary property seizure under the SARFAESI Act, 2002, because there is no mortgaged collateral. Lok Adalat conciliators possess zero statutory power to order coercive attachment or salary garnishment. Any settlement at Lok Adalat must be purely consensual between the borrower and SBI.
        </p>
      )
    },
    {
      question: "What hardship proof is required by SBI during Lok Adalat conciliation?",
      answer: (
        <p>
          To approve substantial principal waivers, the SBI Credit Committee requires verifiable documentation proving inability to pay, including: (1) Certified bank statements showing depleted liquidity; (2) Business closure or audited P&amp;L loss statements; (3) Employment termination letters or severance proofs; (4) Medical emergency hospital discharge summaries; and (5) Non-encumbrance asset affidavits.
        </p>
      )
    },
    {
      question: "How does an SBI Lok Adalat settlement impact CIBIL score and how is it repaired?",
      answer: (
        <p>
          Following full payment under the Lok Adalat award, SBI reports the loan account to credit bureaus as <strong>&apos;Settled&apos;</strong> with an outstanding balance of <strong>₹0</strong>. While the settlement remark initially lowers the CIBIL score by 75-120 points, the borrower stops accumulating active default penalties. By using a secured credit card and maintaining disciplined repayments, borrowers routinely rebuild their score back to 750+ within 18 to 24 months.
        </p>
      )
    },
    {
      question: "How long does SBI take to issue the No Dues Certificate (NDC) after Lok Adalat payment?",
      answer: (
        <p>
          Under <strong>RBI Circular RBI/2023-24/60</strong>, commercial banks including SBI are mandated to issue the formal No Dues Certificate (NDC) / Loan Closure Certificate within <strong>30 calendar days</strong> of receiving full settlement funds. If the bank fails to issue the NDC within 30 days, it is liable to pay statutory compensation of <strong>₹5,000 per day of delay</strong> to the borrower.
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
            <span>Verified Legal Settlement Case Study • State Bank of India</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            SBI Lok Adalat Settlement Case Study: <span className="text-[#3b82f6] md:text-[#60a5fa]">₹12 Lakh Settled for ₹5.4 Lakhs</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            A comprehensive legal defense breakdown detailing how SettleLoans advocates represented a distressed MSME director facing a ₹12 Lakh SBI default, overcame Lok Adalat summons anxiety, and secured a binding 55% haircut consent award.
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
              <span>NALSA &amp; RBI Conciliation Framework</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Get Your SBI Loan Settled</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Free Lok Adalat Case Evaluation
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
              <div className="text-xs font-black uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#1F5EFF]" />
                Case Study Index
              </div>
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
                State Bank of India sanctioned a <strong>55% principal waiver</strong> (₹6.6 Lakhs discount) at National Lok Adalat, extinguishing a ₹13.4L total claim for ₹5.4 Lakhs in 45 days.
              </p>
            </div>
          </aside>

          {/* Middle Column: Main Body Content */}
          <main className="min-w-0 blog-content">
            
            {/* Section 1: MSME Distress & PSU Default */}
            <section id="case-background-borrower-profile" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                1. The ₹12 Lakh Crisis: MSME Revenue Collapse &amp; SBI Loan Default Genesis
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                In October 2023, Vikram Verma, a 41-year-old proprietor managing a precision engineering and auto-ancillary unit in Pune, secured an unsecured term loan facility of ₹12,00,000 from State Bank of India (SBI) to finance capital tooling and raw material inventories. The credit agreement stipulated a repayment tenure of 48 months at an interest rate of 12.85% per annum, translating into a fixed equated monthly installment (EMI) of ₹32,150. For nearly two years, Vikram maintained a flawless repayment track record, servicing twenty-one consecutive EMIs through an automated National Automated Clearing House (NACH) mandate linked to his primary current account.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                In late 2025, Vikram&apos;s principal institutional buyer—an electric vehicle component manufacturer accounting for over 60% of his annual revenues—filed for corporate insolvency under the Insolvency and Bankruptcy Code (IBC). This sudden operational shock led to an immediate ₹28 Lakh unpaid receivables freeze. Deprived of operational working capital, Vikram was forced to shut down two manufacturing lines, exhaust his personal contingency savings, and prioritize statutory payroll commitments over bank debt servicing.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                When the November 2025 EMI debit failed due to insufficient account balance, the loan entered delinquency. Over the subsequent 90 days, as consecutive NACH presentations bounced, SBI reclassified the facility from Special Mention Account stages (SMA-0, SMA-1, and SMA-2) to a formal Non-Performing Asset (NPA). Compounding penal interest at 2.0% per month, late fees, and processing levies rapidly inflated SBI&apos;s gross ledger claim from the principal balance of ₹12,00,000 to ₹13,40,000 by early 2026.
              </p>

              {/* Statutory Callout Box */}
              <div className="bg-amber-50/90 border-l-4 border-amber-500 rounded-r-2xl p-5 my-6">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-1">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>The Real Catalyst of PSU Bank Delinquency</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800/90 leading-relaxed">
                  MSME supply-chain shocks and involuntary revenue destruction represent the leading cause of retail and small-business loan defaults in India. While PSU lenders possess rigid automated recovery escalations, their institutional provisioning frameworks create powerful statutory incentives to settle bad loans once classified as NPAs.
                </p>
              </div>
            </section>

            {/* Section 2: Deconstructing Lok Adalat Fear */}
            <section id="psu-legal-fear-lok-adalat-reality" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                2. Overcoming Legal Fear: Deconstructing the SBI Lok Adalat Summons
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                In February 2026, Vikram received a formal registered notice bearing the official judicial seal of the District Legal Services Authority (DLSA), titled <em>&apos;Pre-Litigation Notice for National Lok Adalat Conciliation — State Bank of India vs. Vikram Verma&apos;</em>. The notice demanded his physical appearance before the Lok Adalat bench on an upcoming Saturday, warning that failure to attend would prompt SBI to initiate regular recovery litigation.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                For an unrepresented borrower, receiving an official document adorned with court emblems and judicial terminology triggers immense psychological panic. Vikram feared that the Lok Adalat was a criminal tribunal where police officers would arrest him on the spot, or where judicial magistrates would order the immediate auction of his family residence and personal assets. These fears were exacerbated by aggressive calls from SBI-empaneled third-party collection agents who falsely claimed that ignoring the notice constituted contempt of court punishable by imprisonment.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                When Vikram approached SettleLoans, our legal team immediately dispelled these misconceptions by clarifying the foundational legal reality governed by the <strong>Legal Services Authorities Act, 1987</strong>:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                First, Lok Adalat is an Alternative Dispute Resolution (ADR) statutory body designed exclusively for amicable, consensual settlement. It is not a trial court, criminal tribunal, or enforcement agency. Second, Lok Adalat conciliators and presiding judges hold zero legal authority to issue arrest warrants, impose criminal penalties, or order unilateral asset attachments. Third, appearance at Lok Adalat is entirely voluntary; no order can ever be passed without the explicit, written consent of both the borrower and the bank. Fourth, and most crucially, Lok Adalat represents the most borrower-friendly statutory forum in India, where PSU banks operate under mandate to grant deep financial haircuts to clear non-performing balance sheet assets.
              </p>
            </section>

            {/* Section 3: SBI SAMB & NPA Accounting */}
            <section id="sbi-accounting-sarb-provisioning" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                3. Inside SBI&apos;s Ledger: Stressed Assets Management &amp; Provisioning Burden
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                To understand why State Bank of India agreed to surrender ₹6.6 Lakhs of core principal and 100% of accumulated interest, one must examine the internal regulatory mechanics of SBI&apos;s <strong>Stressed Assets Resolution Centres (SARC)</strong> and <strong>Stressed Assets Management Branches (SAMB)</strong> under Reserve Bank of India prudential accounting mandates.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Under the <em>RBI Master Directions on Income Recognition and Asset Classification (IRAC)</em>, commercial banks cannot treat defaulted unsecured credit as normal receivables. Unlike secured mortgages backed by physical real estate, unsecured personal and business loans lack collateral that can be attached under the SARFAESI Act, 2002. Consequently, the bank must set aside substantial hard capital out of its quarterly operating profits as provisioning coverage:
              </p>

              {/* 4-Sided Bordered Provisioning Table */}
              <div className="overflow-x-auto my-6">
                <table className="w-full text-left text-xs sm:text-sm border border-slate-300 rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900">
                      <th className="p-3 font-bold border-b border-r border-slate-300">Default Category</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Overdue Duration (DPD)</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">SBI Internal Classification</th>
                      <th className="p-3 font-bold border-b border-slate-300">Mandatory RBI Provisioning</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">SMA-0 / SMA-1 / SMA-2</td>
                      <td className="p-3 border-r border-slate-200">1 – 89 Days</td>
                      <td className="p-3 border-r border-slate-200">Standard (Stressed Asset)</td>
                      <td className="p-3">0.40% – 5.00% General Capital Buffer</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">NPA Stage 1</td>
                      <td className="p-3 border-r border-slate-200">90 – 365 Days</td>
                      <td className="p-3 border-r border-slate-200">Substandard (Unsecured)</td>
                      <td className="p-3 font-bold text-amber-700">25.00% Specific Profit Provision</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">NPA Stage 2 (D1/D2)</td>
                      <td className="p-3 border-r border-slate-200">12 – 36 Months</td>
                      <td className="p-3 border-r border-slate-200">Doubtful Stressed Asset</td>
                      <td className="p-3 font-bold text-orange-700">100.00% of Unsecured Outstanding</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">AUCA / Loss Ledger</td>
                      <td className="p-3 border-r border-slate-200">36+ Months</td>
                      <td className="p-3 border-r border-slate-200">Loss Asset (Written-Off Ledger)</td>
                      <td className="p-3 font-bold text-rose-700">100.00% Balance Sheet Write-off</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4">
                When an unsecured loan defaults beyond 180 days, SBI&apos;s Return on Assets (ROA) and Capital to Risk-Weighted Assets Ratio (CRAR) are heavily penalized. Every quarter, the Department of Financial Services (DFS) and the RBI mandate that public sector banks reduce gross NPAs. Recovering an upfront lump-sum cash amount through a Lok Adalat compromise allows SBI to write back locked provisioning reserves straight into operational profit, providing immense institutional motivation for high-level approvals.
              </p>
            </section>

            {/* Section 4: Hardship Dossier & NPV Model */}
            <section id="hardship-audit-npv-valuation" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                4. The Hardship Resolution Dossier &amp; SBI Recovery Valuation (NPV)
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Public sector banks operate under stringent scrutiny from the Central Vigilance Commission (CVC) and statutory auditors. To grant a 55% haircut without inviting vigilance inquiries, SBI&apos;s Assistant General Manager (AGM) and Credit Committee must establish that the borrower suffers from genuine, verifiable financial distress and is not a &apos;willful defaulter&apos; hiding assets.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                SettleLoans compiled a comprehensive, multi-layered <strong>Financial Hardship Resolution Dossier</strong> on Vikram&apos;s behalf, structured into five evidentiary components:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                First, certified Goods and Services Tax (GST) returns for the preceding twelve months, demonstrating an 82% decline in gross business turnover following the primary buyer&apos;s insolvency. Second, certified six-month bank statements across all current and savings accounts verifying negligible residual balances and zero incoming trade payments. Third, the official corporate insolvency public announcement (Form G) of his buyer from the Insolvency and Bankruptcy Board of India (IBBI), validating the frozen receivables. Fourth, an itemized household subsistence and dependent healthcare expense schedule confirming that Vikram had zero monthly disposable surplus. Fifth, an unencumbered property affidavit affirming that he owned no commercial real estate, mutual funds, or secondary liquid assets.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                With the hardship dossier verified, SettleLoans modeled the recovery economics using SBI&apos;s internal <strong>Net Present Value (NPV) Valuation Formula</strong>:
              </p>

              {/* NPV Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Stressed Asset Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Legal Costs - Court Delays - Capital Provisioning Drag
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where <em>C_t</em> represents estimated future court recovery cash flows, <em>r</em> is SBI&apos;s cost of funds (8.5%), and deductions account for 4–6 years of contested civil litigation expenses, advocate retainers, and ongoing NPA provisioning burdens.
                </p>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4">
                Our mathematical analysis proved that pursuing civil litigation against Vikram in a crowded commercial court would consume over ₹1.8 Lakhs in litigation costs and 54 months of judicial delays, yielding an estimated net recovery of less than ₹4.1 Lakhs in present value. Conversely, an immediate Lok Adalat compromise of ₹5.4 Lakhs delivered superior real-time cash realization to SBI with zero execution risk.
              </p>
            </section>

            {/* Section 5: Pre-Adalat Legal Defense */}
            <section id="anti-harassment-legal-containment" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                5. Cease-and-Desist Defense: Neutralizing Recovery Harassment &amp; Demand Notices
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Prior to the Lok Adalat session, SBI&apos;s empanelled collection agencies subjected Vikram to persistent harassment. Field recovery personnel visited his residential housing society, spoke to neighbors regarding his debt, and issued unauthorized WhatsApp messages threatening immediate police action under Section 420 (cheating) of the Indian Penal Code.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Simultaneously, SBI&apos;s legal panel served a formal notice under <strong>Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA)</strong> for the electronic NACH mandate failure, alongside a demand notice under <strong>Section 138 of the Negotiable Instruments Act, 1881</strong>.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                SettleLoans advocates executed a rapid, decisive two-pronged legal intervention:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                First, our legal team drafted and served an urgent <strong>Cease-and-Desist Legal Notice</strong> to the Regional Manager and Principal Nodal Officer (PNO) of State Bank of India. The notice cited specific violations of the <em>RBI Master Directions on Recovery Agents (2022)</em>, including unlawful third-party disclosures, harassment outside statutory hours (08:00 AM – 07:00 PM), and misleading threats of criminal prosecution for civil debt defaults. Within 72 hours, SBI acknowledged receipt, ordered the immediate withdrawal of external field agents, and redirected all communication exclusively to our legal desk.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Second, our advocates drafted a formal statutory reply to the Section 25 PSSA and Section 138 NI Act notices within the mandatory 15-day window. The reply established the complete absence of fraudulent intent, recorded the documented MSME business disruption, and placed on record Vikram&apos;s proactive willingness to appear at the upcoming National Lok Adalat for an amicable, court-sanctioned compromise.
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
                          SBI Lok Adalat Debt Settlement: ₹12L to ₹5.4L Case Study
                        </h3>
                      </div>
                    </div>
                    <a
                      href="/images/infographics/case-study-sbi-lok-adalat-settlement.jpg"
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
                        src="/images/infographics/case-study-sbi-lok-adalat-settlement.jpg"
                        alt="SBI Lok Adalat Loan Settlement Case Study ₹12L to ₹5.4L Infographic"
                        className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Quick Crux Footer Strip */}
                  <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span><strong>Key Takeaway:</strong> Professional advocate representation at National Lok Adalat converted a hostile ₹12L default into a final ₹5.4L court decree.</span>
                    </div>
                    <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                      Get Free Case Evaluation &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Bench Negotiation: 55% Haircut */}
            <section id="lok-adalat-hearing-haircut-negotiation" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                6. The Lok Adalat Hearing: Negotiating the 55% Haircut Before the Judicial Bench
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                On the designated National Lok Adalat date, SettleLoans senior advocates appeared alongside Vikram before the judicial conciliation bench at the District Court complex. The Lok Adalat bench was presided over by a sitting Senior Civil Judge accompanied by a seasoned advocate conciliator appointed by the DLSA. State Bank of India was represented by an Assistant General Manager (AGM) from the regional SARC division along with SBI&apos;s standing counsel.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                The conciliation proceeded through three structured negotiation phases:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                In Phase 1, SBI&apos;s legal counsel presented the bank&apos;s initial opening demand: full principal recovery of ₹12,00,000 with a partial waiver of accumulated penal interest, offering a settlement figure of ₹10,20,000. In Phase 2, SettleLoans advocates submitted the audited Hardship Dossier and empirical NPV valuation model directly to the presiding judge. Our advocates demonstrated that Vikram&apos;s business had suffered genuine involuntary catastrophe, that he had zero unencumbered assets, and that his immediate family was willing to pool exactly ₹5,00,000 in borrowed emergency funds for a single-bullet closure.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                In Phase 3, after examining the evidentiary records, the presiding judge recommended that SBI exercise its discretionary authority under the <em>RBI Compromise Settlement Framework</em>. The SBI AGM agreed to a final, binding compromise amount of <strong>₹5,40,000</strong>, representing a net <strong>55.0% principal haircut</strong> (₹6,60,000 forgiven) and a total waiver of ₹8,00,000 across all ledger components.
              </p>

              {/* 4-Sided Bordered Settlement Accounting Table */}
              <div className="overflow-x-auto my-6">
                <table className="w-full text-left text-xs sm:text-sm border border-slate-300 rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900">
                      <th className="p-3 font-bold border-b border-r border-slate-300">Financial Ledger Item</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Claimed Bank Dues</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Approved Lok Adalat Award</th>
                      <th className="p-3 font-bold border-b border-slate-300">Total Haircut / Relief</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">Core Principal Balance</td>
                      <td className="p-3 border-r border-slate-200">₹12,00,000</td>
                      <td className="p-3 font-bold text-emerald-700 border-r border-slate-200">₹5,40,000</td>
                      <td className="p-3 font-bold text-emerald-700">₹6,60,000 (55.0% Haircut)</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Accrued Regular Interest</td>
                      <td className="p-3 border-r border-slate-200">₹86,400</td>
                      <td className="p-3 border-r border-slate-200">₹0</td>
                      <td className="p-3 font-bold text-emerald-700">₹86,400 (100% Waived)</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">Penal Interest &amp; Overdue Fees</td>
                      <td className="p-3 border-r border-slate-200">₹38,600</td>
                      <td className="p-3 border-r border-slate-200">₹0</td>
                      <td className="p-3 font-bold text-emerald-700">₹38,600 (100% Waived)</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">NACH Bounce &amp; Legal Charges</td>
                      <td className="p-3 border-r border-slate-200">₹15,000</td>
                      <td className="p-3 border-r border-slate-200">₹0</td>
                      <td className="p-3 font-bold text-emerald-700">₹15,000 (100% Waived)</td>
                    </tr>
                    <tr className="bg-blue-50/70 font-bold text-slate-900">
                      <td className="p-3 border-r border-slate-300">Total Outstanding Claim</td>
                      <td className="p-3 text-rose-700 border-r border-slate-300">₹13,40,000</td>
                      <td className="p-3 text-[#1F5EFF] border-r border-slate-300">₹5,40,000 Payable</td>
                      <td className="p-3 text-emerald-700">₹8,00,000 Total Relief (59.7%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7: Anatomy of the Consent Award */}
            <section id="consent-award-statutory-clauses" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                7. Anatomy of a Lok Adalat Consent Award: 6 Essential Statutory Protections
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Before signing the formal settlement award (<em>Samjhauta Patra</em>), SettleLoans advocates conducted a meticulous clause-by-clause audit of the drafted document. A flawed settlement memo can leave borrowers vulnerable to residual recovery or future litigation if mandatory legal safeguards are omitted.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Our advocates ensured that the final Lok Adalat Award incorporated six non-negotiable statutory provisions:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                First, an unequivocal declaration that the payment of ₹5,40,000 represents <strong>full, final, and absolute satisfaction</strong> of all financial claims arising from the loan account. Second, a debt extinguishment clause mandating that the residual balance of ₹8,00,000 is irrevocably written off by SBI with zero future recourse. Third, a mandatory litigation withdrawal directive requiring SBI to withdraw all pending Section 138 NI Act notices and Section 25 PSSA proceedings with immediate effect. Fourth, an enforceable 30-day timeline for SBI to issue the formal, physical and digital No Dues Certificate (NDC). Fifth, a direct banking channel remittance mandate specifying payment via RTGS directly into Vikram&apos;s loan account, prohibiting any cash or third-party handling. Sixth, invoking <strong>Section 21 of the Legal Services Authorities Act, 1987</strong>, which confers the status of a final, unappealable Civil Court Decree on the award.
              </p>
            </section>

            {/* Section 8: ₹0 NDC & Credit Rebuilding */}
            <section id="no-dues-certificate-cibil-recovery" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                8. Securing the ₹0 No Dues Certificate &amp; 24-Month CIBIL Reconstruction
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Following the Lok Adalat session, Vikram remitted the sanctioned amount of ₹5,40,000 via a single RTGS transaction directly into his designated SBI loan account. SettleLoans advocates submitted the transaction confirmation alongside the certified Lok Adalat Award to SBI&apos;s SARC operations branch.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Under <strong>RBI Circular RBI/2023-24/60</strong> (<em>Directions on Release of Property Documents and Issuance of No Dues Certificate</em>), regulated commercial banks are legally mandated to issue the formal No Dues Certificate and update credit bureaus within 30 calendar days of settlement receipt. On Day 21 following payment, State Bank of India issued the official stamped <strong>No Dues Certificate (NDC)</strong>, confirming zero outstanding dues and full loan account closure.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                In compliance with credit reporting standards, SBI updated TransUnion CIBIL, Experian, Equifax, and CRIF High Mark with the status &apos;Settled&apos; and an outstanding balance of ₹0. Vikram&apos;s credit score, which had plummeted to 572 during default, stabilized at 605 upon settlement reflection.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                SettleLoans provided Vikram with a customized 24-month credit rehabilitation roadmap:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                First, opening a fixed-deposit-backed secured credit card with a ₹40,000 limit, maintaining monthly credit utilization strictly below 20%. Second, establishing flawless automated payments across all ongoing utility and trade accounts. Third, refraining from applying for any fresh unsecured credit during the 12-month cooling period stipulated under RBI compromise norms. Within twenty months of structured credit discipline, Vikram successfully elevated his CIBIL score to 762, restoring his creditworthiness and enabling him to obtain fresh working capital lines for his revived enterprise.
              </p>
            </section>

            {/* Section 9: Lok Adalat vs OTS vs Courts */}
            <section id="comparative-resolution-matrix" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                9. Comparative Resolution Analysis: Lok Adalat vs. Direct OTS vs. Civil Courts
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Distressed borrowers facing PSU bank loan defaults must evaluate the comparative advantages of available institutional resolution mechanisms in India:
              </p>

              {/* 4-Sided Bordered Comparative Matrix Table */}
              <div className="overflow-x-auto my-6">
                <table className="w-full text-left text-xs sm:text-sm border border-slate-300 rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900">
                      <th className="p-3 font-bold border-b border-r border-slate-300">Resolution Channel</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Average Timeline</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Typical Haircut Scope</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Legal Finality &amp; Immunity</th>
                      <th className="p-3 font-bold border-b border-slate-300">Judicial Oversight</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200 bg-blue-50/40">
                      <td className="p-3 font-bold text-[#1F5EFF] border-r border-slate-200">National Lok Adalat Conciliation</td>
                      <td className="p-3 border-r border-slate-200">30 – 45 Days</td>
                      <td className="p-3 font-bold text-emerald-700 border-r border-slate-200">45% – 65% Waiver</td>
                      <td className="p-3 font-semibold text-emerald-700 border-r border-slate-200">Civil Court Decree (No Appeals)</td>
                      <td className="p-3 text-emerald-700">Sitting District Judge &amp; DLSA</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">Direct Branch / SARC One-Time Settlement</td>
                      <td className="p-3 border-r border-slate-200">45 – 90 Days</td>
                      <td className="p-3 font-bold text-emerald-700 border-r border-slate-200">40% – 60% Waiver</td>
                      <td className="p-3 font-semibold text-emerald-700 border-r border-slate-200">Contractual Sanction Letter</td>
                      <td className="p-3 text-slate-600">Internal Bank Credit Committee</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Contested Civil Court / DRT Suit</td>
                      <td className="p-3 border-r border-slate-200">3 – 6 Years</td>
                      <td className="p-3 text-rose-700 border-r border-slate-200">0% – Court Discretion</td>
                      <td className="p-3 border-r border-slate-200">Subject to Appeals &amp; Execution</td>
                      <td className="p-3 text-amber-700">Adversarial Judicial Trial</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Informal Debt Restructuring</td>
                      <td className="p-3 border-r border-slate-200">15 – 30 Days</td>
                      <td className="p-3 text-rose-700 border-r border-slate-200">0% (Extended EMI Tenure)</td>
                      <td className="p-3 border-r border-slate-200">Ongoing Active Debt Liability</td>
                      <td className="p-3 text-slate-600">None (Internal Restructure)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4">
                As proven in Vikram&apos;s case study, National Lok Adalat conciliation backed by experienced legal advocates provides the ultimate combination of maximum principal haircut, rapid closure, and absolute judicial finality without the cost or stress of protracted court litigation.
              </p>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Company Section */}
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
                  Everything You Need to Know About SBI Lok Adalat Settlements
                </h2>
                <p className="text-sm text-slate-600 mt-2">
                  Clear, authoritative legal answers regarding State Bank of India debt settlements, Lok Adalat summons rights, haircuts, and credit score rehabilitation.
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
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>National Legal Services Authority (NALSA):</strong> Legal Services Authorities Act, 1987 — National Lok Adalat Conciliation Mandates
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
                    <strong>Reserve Bank of India (RBI):</strong> Prudential Framework for Resolution of Stressed Assets &amp; Compromise Settlements
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
                    <strong>RBI Master Direction:</strong> Fair Practices Code &amp; Mandatory Guidelines on Outsourced Recovery Agents
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://sbi.co.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>State Bank of India (SBI):</strong> Customer Grievance Redressal Policy &amp; Stressed Assets Resolution Centre (SARC) Framework
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
                    <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Dispute Redressal Portal for Coercive Recovery &amp; NDC Issuance Delays
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
                  href="/sbi-personal-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  SBI Personal Loan Settlement Guide
                </Link>
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Lok Adalat Notice for Personal Loan
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
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Can I Go to Jail for Loan Default
                </Link>
                <Link
                  href="/section-138-cheque-bounce-loan-default"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Section 138 &amp; Section 25 Defense
                </Link>
                <Link
                  href="/can-bank-seize-property-for-personal-loan"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Can Bank Seize Property for Loan
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  No Dues Certificate After Settlement
                </Link>
                <Link
                  href="/case-study-hdfc-personal-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  HDFC Loan Settlement Case Study
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
                Ashish has led over 1,200+ successful bank compromise negotiations across SBI, HDFC Bank, ICICI, and Axis Bank. He specializes in PSU banking haircuts, National Lok Adalat conciliation, and borrower legal defense under RBI Master Directions.
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
                <span>SBI Lok Adalat Defense</span>
              </div>
              <div className="text-xl font-black mb-3 leading-tight">
                Received an SBI Lok Adalat Notice?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Do not panic. Let our experienced advocates audit your default ledger, represent you before the Lok Adalat bench, and secure a binding high-haircut court decree.
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
                    <strong>Judicial Forum Representation:</strong> Our advocates represent your case directly before National Lok Adalat benches and PSU credit committees.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Shield:</strong> Immediate legal cease-and-desist notices to stop recovery agent visits and abusive calls under RBI rules.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Enforceable Court Decrees:</strong> Every Lok Adalat settlement is recorded as a final Civil Court Decree with zero appealability risk.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed ₹0 NDC:</strong> Complete end-to-end tracking until your formal No Dues Certificate is issued and CIBIL status updated.
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
