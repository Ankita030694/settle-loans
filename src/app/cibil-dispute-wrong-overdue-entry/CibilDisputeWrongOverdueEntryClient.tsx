'use client';

import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
  FileCheck2,
  AlertCircle
} from 'lucide-react';

// Interactive FAQ Item Component
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

export default function CibilDisputeWrongOverdueEntryClient() {
  const [activeId, setActiveId] = useState<string>('anatomy-of-cibil-inaccuracies');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'anatomy-of-cibil-inaccuracies', title: '1. Why Erroneous CIBIL Entries Happen' },
    { id: 'dispute-categories-breakdown', title: '2. The 4 Major Dispute Categories' },
    { id: 'cicra-2005-rbi-regulations', title: '3. CICRA 2005 & ₹100/Day RBI Penalty' },
    { id: 'online-cibil-dispute-process', title: '4. Step-by-Step Online Dispute Walkthrough' },
    { id: 'paid-loans-marked-overdue', title: '5. Rectifying Paid Loans with NDC Protocol' },
    { id: 'fraudulent-loans-pan-theft', title: '6. Delinking Fraudulent PAN Loan Accounts' },
    { id: 'settled-vs-written-off-status', title: '7. Settled vs. Written-Off Tagging Fixes' },
    { id: 'multi-bureau-synchronization', title: '8. Multi-Bureau Cross-Synchronization' },
    { id: 'bank-nodal-rbi-ombudsman', title: '9. Escalation Matrix: PNO to RBI CMS' },
    { id: 'rebuilding-cibil-score', title: '10. Post-Rectification Score Rebuilding' },
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
      question: "What is the official procedure to raise a CIBIL dispute for a wrong overdue entry?",
      answer: (
        <p>
          To lodge an official dispute, authenticate into the TransUnion CIBIL consumer portal using the unique 9-digit Enquiry Control Number (ECN) printed on your latest Credit Information Report (CIR). Navigate to <strong>Dispute Center &gt; Dispute an Item</strong>, locate the specific loan or credit card facility exhibiting the erroneous overdue amount or incorrect Days Past Due (DPD) string, specify the discrepancy category, and submit the request. CIBIL generates an automated 10-digit Dispute ID and formally transmits an electronic verification demand to the lending bank under Section 21 of the Credit Information Companies (Regulation) Act, 2005.
        </p>
      )
    },
    {
      question: "How long does it take for CIBIL to resolve an erroneous overdue dispute?",
      answer: (
        <p>
          Under statutory directives established by the Reserve Bank of India and CICRA 2005, credit institutions and credit bureaus are legally mandated to complete the end-to-end investigation and dispute resolution process within a strict <strong>30-calendar-day Turnaround Time (TAT)</strong>. If the reporting credit institution confirms the administrative error or fails to validate the challenged balance within this window, CIBIL is legally bound to expunge or rectify the inaccurate overdue entry immediately.
        </p>
      )
    },
    {
      question: "What is the RBI penalty if a bank fails to update a resolved CIBIL dispute within 30 days?",
      answer: (
        <p>
          Under RBI Master Circular RBI/2023-24/72, if a commercial bank, NBFC, or credit information company fails to resolve an official credit reporting grievance or update an erroneous overdue mark within <strong>30 calendar days</strong> of dispute registration, the defaulting institution is legally liable to pay direct compensation of <strong>₹100 per calendar day of delay</strong> to the aggrieved borrower.
        </p>
      )
    },
    {
      question: "Why is my fully paid loan still reflecting as active or overdue on my CIBIL report?",
      answer: (
        <p>
          Lenders submit borrower repayment records to credit bureaus through periodic monthly batch files via SFTP data pipelines. Delays and errors typically stem from Core Banking System (CBS) batch reconciliation failures, technical mismatch in loan account identifiers, or branch-level administrative omissions following loan closure. Submitting your official Bank No Dues Certificate (NDC) through a formal bureau dispute triggers an urgent out-of-cycle inter-institutional reconciliation.
        </p>
      )
    },
    {
      question: "How do I remove a fraudulent loan opened on my PAN without my consent?",
      answer: (
        <p>
          If an unauthorized or synthetic identity loan appears under your PAN, immediately file a formal cybercrime report on the National Cyber Crime Reporting Portal (<strong>cybercrime.gov.in</strong>) to obtain a verified acknowledgment receipt or FIR. Next, initiate an <strong>Ownership Dispute</strong> on the CIBIL portal marking the facility as fraudulent, and serve a formal legal grievance accompanied by the cyber complaint to the Principal Nodal Officer of the issuing lender demanding immediate delinking of the account.
        </p>
      )
    },
    {
      question: "Can CIBIL change or delete a wrong entry on its own without bank approval?",
      answer: (
        <p>
          <strong>No. TransUnion CIBIL operates strictly as a data repository</strong> and does not possess statutory authority under CICRA 2005 to unilaterally alter or expunge substantive financial records without written confirmation from the member lending bank that originated the entry. However, if the bank fails to substantiate the reported balance within the mandatory 30-day window, CIBIL will expunge the contested default entry.
        </p>
      )
    },
    {
      question: "What is an Enquiry Control Number (ECN) and why is it mandatory for CIBIL disputes?",
      answer: (
        <p>
          The Enquiry Control Number (ECN) is an authentic 9-digit alphanumeric tracking code generated whenever a credit report is pulled from TransUnion CIBIL. It serves as an immutable point-in-time cryptographic snapshot of your credit profile, allowing CIBIL&apos;s automated dispute routing engine to pin down the exact account records and data fields being challenged.
        </p>
      )
    },
    {
      question: "What should I do if the bank rejects my valid CIBIL dispute?",
      answer: (
        <p>
          If the lending institution wrongfully rejects your dispute despite valid documentation (such as a stamped No Dues Certificate or complete bank statements), escalate the complaint directly to the bank&apos;s <strong>Principal Nodal Officer (PNO)</strong>. If the PNO fails to resolve the grievance within 30 days, lodge a formal dispute before the <strong>RBI Integrated Ombudsman</strong> through the CMS portal (<strong>cms.rbi.org.in</strong>) for deficiency in credit reporting services.
        </p>
      )
    },
    {
      question: "Does disputing an error on CIBIL also correct it on Experian, Equifax, and CRIF High Mark?",
      answer: (
        <p>
          <strong>No. India&apos;s four RBI-licensed credit bureaus operate entirely independent databases.</strong> While member banks are legally obligated to broadcast batch corrections across all four bureaus, discrepancies frequently persist due to staggered reporting schedules. Borrowers must lodge independent dispute filings across Experian, Equifax, and CRIF High Mark to guarantee universal score restoration.
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

      {/* A. Editorial Hero Section - Charcoal Navy Theme */}
      <section
        className="w-full border-b border-slate-700/80 pt-8 pb-7 md:pt-12 md:pb-9 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-300" />
            Credit Forensics &amp; Dispute Resolution Framework
          </div>

          {/* Compact Title / H1 */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            How to Raise CIBIL Dispute for Wrong Entry?{' '}
            <span className="text-[#3b82f6] md:text-[#60a5fa]">Step-by-Step Resolution Guide</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Discover how to rectify erroneous overdue amounts, un-updated paid loans, incorrect DPD strings, and fraudulent PAN entries under the statutory protections of CICRA 2005 and RBI Master Directions.
          </p>

          {/* Metadata Bar */}
          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-3 mb-5 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-[9px]">
                AJ
              </div>
              <span>
                Authored by{' '}
                <Link
                  href="/authors/ashish-jhangra"
                  className="text-white hover:text-blue-300 font-semibold underline decoration-[#1F5EFF] underline-offset-2"
                >
                  Ashish Jhangra
                </Link>
              </span>
            </div>
            <div className="hidden sm:block text-slate-500">•</div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified by SettleLoans Legal Team</span>
            </div>
            <div className="hidden sm:block text-slate-500">•</div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-300" />
              <span>Updated: August 2026</span>
            </div>
          </div>

          {/* Hero CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-5 rounded-xl shadow-md hover:shadow-blue-500/20 transition-all duration-300 text-xs sm:text-sm group"
            >
              <span>Audit My CIBIL Report Free</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#online-cibil-dispute-process"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 text-xs sm:text-sm"
            >
              <BookOpen className="w-4 h-4 text-blue-300" />
              <span>View Dispute Protocol</span>
            </a>
          </div>
        </div>
      </section>

      {/* B. Crisp Stats Strip Component */}
      <StatsStrip />

      {/* C. Three-Column Main Body Grid */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column (Sticky TOC & Crux Pill) */}
          <aside className="hidden lg:block sticky top-24 space-y-5">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 xl:p-5 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900 font-black text-xs uppercase tracking-wider mb-3 pb-2 border-b border-slate-200">
                <BookOpen className="w-4 h-4 text-[#1F5EFF]" />
                <span>On This Page</span>
              </div>
              <nav className="space-y-1">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`text-xs block py-1.5 px-2.5 rounded-lg transition-all duration-200 leading-snug ${
                      activeId === item.id
                        ? 'bg-[#1F5EFF] text-white font-bold shadow-sm'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick Crux Summary Pill */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-4 text-xs text-slate-700 leading-relaxed shadow-sm">
              <div className="flex items-center gap-1.5 font-bold text-blue-900 mb-2">
                <Info className="w-4 h-4 text-[#1F5EFF]" />
                <span>Executive Summary</span>
              </div>
              <p>
                Inaccurate overdue tags, un-updated closed accounts, and fraudulent PAN loans severely degrade credit scores. Under CICRA 2005 and RBI directives, lenders must rectify verified discrepancies within 30 days or pay statutory delay compensation of ₹100 per day.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="min-w-0 blog-content">
            
            {/* Section 1: Why Erroneous CIBIL Entries Happen */}
            <section id="anatomy-of-cibil-inaccuracies" className="scroll-mt-28 mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                1. The Anatomy of Erroneous CIBIL Entries: Why Inaccuracies Happen
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                A sudden and unexplained plunge in your credit score often traces back to inaccurate, outdated, or outright fraudulent data entries in your Credit Information Report (CIR). In the modern Indian lending ecosystem, credit decisions are heavily automated. When an erroneous overdue tag or a phantom loan appears against your Permanent Account Number (PAN), retail automated underwriting algorithms instantly flag your file as high risk, triggering immediate loan rejections, credit limit reductions, and exorbitant interest rate penalties.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                These discrepancies rarely stem from intentional malice by credit bureaus. Under the statutory framework of the <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA)</strong>, TransUnion CIBIL, Experian, Equifax, and CRIF High Mark operate strictly as specialized data repositories. They do not generate raw account histories independently; rather, they passively ingest structured monthly data feeds transmitted by over 4,000 member credit institutions, including public sector banks, private banks, NBFCs, and housing finance companies.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                The core breakdowns occur at the institutional reporting layer. Banks transmit vast batches of loan records via secure File Transfer Protocol (SFTP) data pipelines every 30 to 45 days. When a Core Banking System (CBS) experiences synchronization glitches, when branch personnel fail to flag a loan as closed upon receipt of full settlement, or when optical character recognition (OCR) systems misread alphanumeric PAN characters, erroneous default records are etched onto the borrower&apos;s credit profile. Understanding the technical mechanics behind these reporting failures is the first step toward demanding full regulatory rectification.
              </p>

              {/* Statutory Callout Box */}
              <div className="bg-slate-50 border-l-4 border-[#1F5EFF] rounded-r-2xl p-5 my-6">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1">
                  <Scale className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Statutory Protection under CICRA 2005 (Section 21)</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Section 21 of the Credit Information Companies (Regulation) Act, 2005 guarantees every borrower the statutory right to dispute inaccurate, incomplete, or misleading credit information. Credit institutions and bureaus are legally mandated to investigate and rectify substantiated data errors without imposing administrative charges on the consumer.
                </p>
              </div>
            </section>

            {/* Section 2: The 4 Major Dispute Categories */}
            <section id="dispute-categories-breakdown" className="scroll-mt-28 mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                2. The Four Major CIBIL Dispute Categories
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Before initiating a formal dispute with TransUnion CIBIL, you must accurately categorize the nature of the reporting defect. Classifying the error correctly within CIBIL&apos;s automated intake portal determines whether the inquiry is routed to the originating lender&apos;s reconciliation team or flagged for specialized identity fraud investigation. In practice, retail reporting inaccuracies fall into four distinct operational classifications.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                The most frequent error is the <strong>Paid Loan Showing Active Overdue</strong> category, where a borrower has fully cleared their personal loan, auto loan, or credit card, yet the lender continues to report an ongoing outstanding balance and escalating Days Past Due (DPD) strings. The second classification involves <strong>Inaccurate DPD Strings &amp; Overdue Amounts</strong>, where minor billing disputes or clerical posting delays result in severe 30-day, 60-day, or 90-day delinquency marks despite timely repayments.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                The third category comprises <strong>Fraudulent Loan Accounts &amp; Synthetic PAN Misuse</strong>, where digital lending apps or unscrupulous fintech intermediaries sanction credit facilities to unauthorized third parties using compromised KYC credentials. Finally, the fourth category encompasses <strong>Status Code Mismatches on Settled Accounts</strong>, where a loan legitimately resolved through an authorized One-Time Settlement (OTS) is improperly coded on the credit report as an active default or uncompromised &quot;Written-Off&quot; asset with an inflated residual overdue balance.
              </p>

              {/* 4-Sided Bordered Comparison Table */}
              <div className="my-6">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                  CIBIL Error Classification &amp; Evidence Matrix
                </h3>
                <div className="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th>Dispute Category</th>
                        <th>Underlying Root Cause</th>
                        <th>Typical Score Damage</th>
                        <th>Required Evidentiary Documents</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-bold text-slate-900">Paid Loan Reflecting Overdue</td>
                        <td>CBS batch transmission failure; missing branch closure flag.</td>
                        <td className="font-semibold text-red-600">50 – 100 Points</td>
                        <td>Bank No Dues Certificate (NDC), final loan statement, closure receipt.</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Wrong DPD / Delinquency String</td>
                        <td>Clerical posting delay; technical payment gateway mismatch.</td>
                        <td className="font-semibold text-amber-600">30 – 80 Points</td>
                        <td>Bank account passbook/statement showing timely NEFT/UPI/NACH debits.</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Fraudulent PAN Identity Theft</td>
                        <td>Fintech KYC breach; synthetic identity cloning on instant apps.</td>
                        <td className="font-semibold text-red-700">80 – 140 Points</td>
                        <td>Cyber Crime Portal complaint receipt/FIR, identity affidavit, PAN copy.</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Settled Account Tagged Written-Off</td>
                        <td>Lender failed to transmit compromise agreement codes under OTS.</td>
                        <td className="font-semibold text-orange-600">40 – 90 Points</td>
                        <td>Official Bank OTS Sanction Letter, settlement payment receipts, NDC.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 3: CICRA 2005 & ₹100/Day RBI Compensation */}
            <section id="cicra-2005-rbi-regulations" className="scroll-mt-28 mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                3. Statutory Framework: CICRA 2005 &amp; Mandatory ₹100/Day RBI Delay Compensation
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                For years, retail borrowers faced immense frustration when attempting to correct erroneous credit records, often encountering endless administrative finger-pointing between unresponsive bank grievance desks and credit bureaus. To eliminate this operational deadlock, the Reserve Bank of India enacted strict regulatory reforms through comprehensive Master Directions and circular <strong>RBI/2023-24/72</strong>, fundamentally shifting the balance of power in favor of the consumer.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Under the revised framework, a strict statutory <strong>30-calendar-day Turnaround Time (TAT)</strong> governs the resolution of all credit reporting disputes. When a borrower logs an official dispute through TransUnion CIBIL, the bureau is mandated to forward the complaint to the concerned credit institution within 7 calendar days. The lending institution is then legally required to investigate its Core Banking records, formulate an official response, and transmit updated data back to the bureau within 21 calendar days, ensuring complete closure within the 30-day window.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                To enforce compliance, the RBI introduced a stringent monetary penalty: if a bank, NBFC, or credit information company fails to resolve a credit report dispute or update an erroneous overdue mark within 30 calendar days of receipt, the defaulting entity must pay the complainant direct compensation of <strong>₹100 per calendar day of delay</strong>. This statutory penalty accrues automatically until the data is fully rectified in the bureau database.
              </p>

              {/* Highlight Box for RBI Circular */}
              <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 my-6">
                <div className="flex items-center gap-2 font-bold text-blue-900 text-sm mb-1">
                  <Award className="w-4 h-4 text-[#1F5EFF]" />
                  <span>RBI Master Directive on Delay Compensation (RBI/2023-24/72)</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Borrowers are legally entitled to compensation if their credit report discrepancy is not resolved within 30 days. The compensation of ₹100 per day must be credited directly to the complainant&apos;s bank account within 5 working days of resolving the overdue dispute, providing powerful legal leverage against institutional delays.
                </p>
              </div>
            </section>

            {/* Section 4: Step-by-Step Online Dispute Walkthrough */}
            <section id="online-cibil-dispute-process" className="scroll-mt-28 mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                4. Step-by-Step Procedural Guide: Filing an Official Online CIBIL Dispute
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Executing a formal dispute through TransUnion CIBIL requires meticulous adherence to standard procedural protocols. Initiating an informal customer support phone call or sending an unformatted email to generic support desks will not trigger the statutory 30-day CICRA clock. You must execute the dispute through CIBIL&apos;s regulated dispute intake portal using a verified report timestamp.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                The essential prerequisite is obtaining your official Credit Information Report (CIR) directly from <strong>cibil.com</strong>. Every official CIR contains a unique <strong>9-digit Enquiry Control Number (ECN)</strong> prominently displayed at the top right of the document. The ECN represents an immutable cryptographic snapshot of your credit profile at that exact moment, enabling CIBIL&apos;s dispute intake engine to locate the precise account records and overdue entries you intend to challenge.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Once logged into the CIBIL Consumer Dispute Center, navigate to the <strong>&quot;Dispute an Item&quot;</strong> section. Select the specific account tab (such as Loan Accounts or Credit Cards), pinpoint the flawed data field (such as Current Balance, Amount Overdue, or Payment History), and specify whether you are lodging an <em>Account Detail Dispute</em> or an <em>Ownership Dispute</em>. Upon final submission, the system generates an official <strong>10-digit Dispute ID</strong>, which serves as your evidentiary reference for tracking turnaround milestones and claiming statutory delay compensation if required.
              </p>
            </section>

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
                      CIBIL Dispute Resolution Summary &amp; Process Overview
                    </h3>
                  </div>
                </div>
                <a
                  href="/images/infographics/cibil-dispute-wrong-overdue-entry.jpg"
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
                    src="/images/infographics/cibil-dispute-wrong-overdue-entry.jpg"
                    alt="How to Raise CIBIL Dispute for Wrong Overdue Entry Summary Infographic"
                    className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Quick Crux Footer Strip */}
              <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span><strong>Key Takeaway:</strong> Secure your ECN, lodge an official Section 21 dispute, enforce 30-day statutory TAT, and claim ₹100/day delay compensation.</span>
                </div>
                <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                  Get Free Case Evaluation &rarr;
                </Link>
              </div>
            </div>

            {/* Section 5: Rectifying Paid Loans with NDC Protocol */}
            <section id="paid-loans-marked-overdue" className="scroll-mt-28 mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                5. Resolving Paid Loans Marked Overdue: The No Dues Certificate (NDC) Protocol
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Among the most damaging clerical errors on a credit file is a fully cleared loan that remains marked as active, delinquent, or overdue. When a borrower completes their loan tenure or repays their outstanding dues in full, the lending bank&apos;s operations department is required to update its internal Core Banking System ledger to zero and generate a formal <strong>No Dues Certificate (NDC)</strong> or No Objection Certificate (NOC).
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                However, if the system operator neglects to mark the internal closure flag or if the automated monthly batch data export encounters a formatting failure, the reporting engine continues to transmit the old balance month after month. Because no further monthly payments are recorded, CIBIL&apos;s algorithmic parser registers the account as severely delinquent, accumulating catastrophic 90-day or 180-day DPD tags that devastate the borrower&apos;s score.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                To rectify this administrative breakdown, the borrower must submit a formal dispute accompanied by the official, stamped NDC issued by the bank. Armed with the NDC, you can demand an immediate out-of-cycle inter-institutional data upload from the bank&apos;s central credit reporting division, forcing the lender to instruct TransUnion CIBIL to convert the account status to <strong>&quot;Closed&quot;</strong> and wipe out all erroneous overdue balances.
              </p>
            </section>

            {/* Section 6: Delinking Fraudulent PAN Loan Accounts */}
            <section id="fraudulent-loans-pan-theft" className="scroll-mt-28 mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                6. Handling Fraudulent Loans &amp; Identity Theft on Your PAN
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                The rapid expansion of instant personal loan mobile applications and digital point-of-sale financing has triggered an alarming surge in synthetic identity theft across India. Cybercriminals frequently exploit leaked PAN card copies and forged Aadhaar documents to secure instant unsecured credit from digital NBFCs. Because the real victim is unaware of the transaction, no repayments are made, and the fraudulent loan eventually descends into sub-standard asset status, severely harming the victim&apos;s credit score.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Resolving identity fraud requires a rigorous two-pronged legal and technical approach. First, you must immediately report the unauthorized transaction on the Government of India&apos;s National Cyber Crime Reporting Portal at <strong>cybercrime.gov.in</strong> or file a formal complaint at your local cyber police station to generate an official Cyber Crime Acknowledgment or First Information Report (FIR) under Sections 66C and 66D of the Information Technology Act, 2000.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Second, lodge an <strong>Ownership Dispute</strong> on the CIBIL portal, explicitly stating that the account was fraudulently opened without your authorization, knowledge, or disbursement receipt. Transmit the cyber complaint acknowledgment, a sworn identity affidavit, and a demand for immediate delinking to the Principal Nodal Officer of the disbursing NBFC. Upon forensic verification that the disbursement bank account did not belong to you, the lender is legally required to instruct CIBIL to permanently expunge the fraudulent account from your CIR.
              </p>
            </section>

            {/* Section 7: Settled vs. Written-Off Tagging Fixes */}
            <section id="settled-vs-written-off-status" className="scroll-mt-28 mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                7. Settled vs. Written-Off vs. Closed: Correcting Status Code Mismatches
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                A critical area of credit confusion occurs when borrowers resolve an overdue credit facility through a formal <strong>One-Time Settlement (OTS)</strong>. When an OTS agreement is executed, the borrower and bank mutually agree on a compromised settlement figure that clears the debt in full. Upon payment of the agreed settlement sum, the borrower is legally discharged from all further financial liabilities, and the lender issues a final No Dues Certificate.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                However, severe credit reporting errors frequently occur during the post-settlement batch reporting phase. Banks often mistakenly report the account as <strong>&quot;Written-Off&quot;</strong> or <strong>&quot;Suit Filed&quot;</strong> while continuing to display the waived balance as an active &quot;Amount Overdue.&quot; In regulatory accounting terms, this reporting is legally flawed: once a formal compromise settlement is concluded, the remaining balance is extinguished by mutual consent and cannot be reported as an ongoing delinquent default.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                If your settled loan displays an active overdue balance, you must lodge a Section 21 dispute presenting the signed Bank OTS Sanction Letter and payment proofs. Demand that the lender update the credit record to reflect an <strong>Amount Overdue of ₹0</strong> with the accurate status tag of <strong>&quot;Settled&quot;</strong> or <strong>&quot;Post-Settlement Closed&quot;</strong>. Furthermore, if you subsequently choose to pay the residual waived balance, the lender is obligated to convert the status from &quot;Settled&quot; to fully &quot;Closed.&quot;
              </p>
            </section>

            {/* Section 8: Multi-Bureau Cross-Synchronization */}
            <section id="multi-bureau-synchronization" className="scroll-mt-28 mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                8. Turnaround Times &amp; Multi-Bureau Synchronization Across India
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                A common misconception among borrowers is assuming that successfully rectifying an error on TransUnion CIBIL automatically updates their credit profile across all other credit rating agencies. In India, four separate credit information companies operate under independent RBI licenses: <strong>TransUnion CIBIL, Experian India, Equifax, and CRIF High Mark</strong>.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Although RBI regulations mandate that member lending institutions broadcast batch updates synchronously across all four licensed bureaus, institutional data pipelines frequently experience staggered ingestion schedules. A bank may successfully update an overdue entry on CIBIL within 20 days, yet neglect to transmit the matching correction file to Experian or Equifax for several months.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                To prevent unexpected credit rejections from institutional lenders that rely on alternative bureau scores, borrowers should pull their official reports from all four bureaus simultaneously. Whenever an erroneous entry is identified, lodge parallel dispute requests directly across each bureau&apos;s official consumer dispute interface, ensuring complete synchronization and comprehensive score restoration.
              </p>
            </section>

            {/* Section 9: Escalation Matrix: PNO to RBI CMS */}
            <section id="bank-nodal-rbi-ombudsman" className="scroll-mt-28 mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                9. Three-Tier Escalation Matrix: Bank Nodal Officers to RBI Ombudsman
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                When frontline customer support channels fail to resolve an obvious reporting discrepancy within the mandatory 30-day statutory window, borrowers must activate the formal regulatory escalation matrix established by the Reserve Bank of India. Proceeding systematically through these administrative tiers ensures that your grievance receives senior executive oversight and creates a legally enforceable paper trail.
              </p>

              {/* 4-Sided Bordered Comparison Table: Escalation Matrix */}
              <div className="my-6">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Regulatory Escalation Hierarchy &amp; Enforcement Authority
                </h3>
                <div className="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th>Escalation Level</th>
                        <th>Target Authority</th>
                        <th>Statutory Turnaround Window</th>
                        <th>Enforcement Remedy &amp; Powers</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-bold text-slate-900">Level 1: Primary Dispute</td>
                        <td>CIBIL Dispute Center &amp; Bank Customer Service Desk</td>
                        <td>1 – 30 Calendar Days</td>
                        <td>Automated electronic verification request; basic CBS ledger audit.</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Level 2: Grievance Escalation</td>
                        <td>Bank Principal Nodal Officer (PNO) / Internal Ombudsman</td>
                        <td>7 – 15 Working Days</td>
                        <td>Direct executive review; authority to order out-of-cycle SFTP bureau updates.</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Level 3: Statutory Redressal</td>
                        <td>RBI Integrated Ombudsman (CMS Portal - cms.rbi.org.in)</td>
                        <td>30 Calendar Days</td>
                        <td>Legally binding awards; enforcement of ₹100/day compensation and damages.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-base leading-relaxed mb-4 text-slate-700">
                If the lending institution fails to rectify the error after escalation to the Principal Nodal Officer, you should immediately file a formal complaint under the <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021</strong> via the online Complaint Management System (CMS) at <strong>cms.rbi.org.in</strong>. The RBI Ombudsman possesses quasi-judicial powers to issue binding directives against defaulting banks, enforce immediate credit report corrections, and award statutory delay compensation alongside damages for mental harassment.
              </p>
            </section>

            {/* Section 10: Post-Rectification Score Rebuilding Blueprint */}
            <section id="rebuilding-cibil-score" className="scroll-mt-28 mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                10. Post-Rectification Credit Score Reconstruction Blueprint
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Once TransUnion CIBIL concludes the dispute investigation and updates the erroneous overdue entry to &quot;Closed&quot; or &quot;Zero Overdue,&quot; your credit score will begin an immediate upward trajectory. However, fully restoring your score to prime territory (750+) requires deliberate financial management over the subsequent 6 to 12 months.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Begin by requesting a fresh, updated Credit Information Report to verify that all previous DPD delinquency flags have been completely replaced with &quot;000&quot; or &quot;STD&quot; (Standard) indicators and that the total outstanding balance accurately reflects zero. Keep digital copies of your Dispute Resolution Letter and updated CIR readily accessible whenever applying for future credit facilities.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                To accelerate credit score recovery, adopt strict credit hygiene practices: maintain your <strong>Credit Utilization Ratio (CUR) strictly below 30%</strong> across all active revolving lines, avoid submitting multiple speculative loan applications that generate hard inquiries, and establish a consistent history of on-time payments through a secured credit card backed by a fixed deposit. Over a 12-month period, these disciplined financial actions will firmly establish your credit profile as prime, unlocking the best interest rates across Indian banks.
              </p>
            </section>

            {/* Company Section Placement (Directly Before FAQ) */}
            <CompanySection />

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="scroll-mt-28 mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                11. Frequently Asked Questions (FAQ)
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-6 text-slate-600">
                Authoritative answers to the most common procedural, technical, and regulatory questions regarding CIBIL dispute resolution in India.
              </p>

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

            {/* Regulatory Sources & References (Exactly 5 Links) */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-8">
              <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                <Landmark className="w-4 h-4 text-[#1F5EFF]" />
                <span>Official Regulatory Sources &amp; Legal Authorities</span>
              </h4>
              <ul className="space-y-2 text-xs md:text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    Reserve Bank of India (RBI) — Master Directions on Credit Information Companies &amp; TAT Rules
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    TransUnion CIBIL — Official Consumer Dispute Resolution &amp; Grievance Portal
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    RBI Integrated Ombudsman Scheme — Complaint Management System (CMS Portal)
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    National Cyber Crime Reporting Portal — Identity Theft &amp; Loan Fraud Grievance Redressal
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://sci.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    Supreme Court of India — Landmark Rulings on Fair Debt Recovery &amp; Credit Privacy
                  </a>
                </li>
              </ul>
            </div>

            {/* Internal Topic Badges (10 Links) */}
            <div className="my-8 pt-6 border-t border-slate-200">
              <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                Related Debt Settlement &amp; Credit Protection Guides
              </h4>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/check-cibil-defaulter-list"
                  className="py-1.5 px-3 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Check CIBIL Defaulter List
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-1.5 px-3 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Settlement CIBIL Impact
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Bank OTS Policy Guide
                </Link>
                <Link
                  href="/how-to-settle-credit-card-debt"
                  className="py-1.5 px-3 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  How to Settle Credit Card Debt
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Can I Go to Jail for Loan Default
                </Link>
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-1.5 px-3 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Lok Adalat Notice for Loan
                </Link>
                <Link
                  href="/personal-loan-legal-notice"
                  className="py-1.5 px-3 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Legal Notice
                </Link>
                <Link
                  href="/loan-settlement-vs-debt-consolidation"
                  className="py-1.5 px-3 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Settlement vs Consolidation
                </Link>
                <Link
                  href="/hdfc-personal-loan-settlement"
                  className="py-1.5 px-3 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  HDFC Loan Settlement
                </Link>
                <Link
                  href="/bajaj-finance-personal-loan-settlement"
                  className="py-1.5 px-3 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Bajaj Finance Loan Settlement
                </Link>
              </div>
            </div>
          </main>

          {/* Right Column (Sidebar Cards) */}
          <aside className="w-full sticky top-24 space-y-5">
            {/* Card 1: Author Bio Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black text-sm flex items-center justify-center shadow-md">
                  AJ
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm leading-tight">
                    <Link
                      href="/authors/ashish-jhangra"
                      className="hover:text-[#1F5EFF] transition-colors"
                    >
                      Ashish Jhangra
                    </Link>
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Debt Settlement Strategist &amp; Consumer Advocate
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Ashish specializes in distressed banking negotiations, RBI regulatory compliance, and CIBIL forensic dispute resolution across India.
              </p>
              <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                <Link
                  href="/authors/ashish-jhangra"
                  className="text-[#1F5EFF] hover:underline"
                >
                  View Full Profile
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

            {/* Card 2: Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-[#1F5EFF] to-blue-700 text-white rounded-2xl p-5 shadow-lg">
              <div className="flex items-center gap-2 text-blue-100 text-[11px] font-bold uppercase tracking-wider mb-2">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Emergency Advocate Assistance</span>
              </div>
              <h3 className="text-lg font-black mb-2 leading-tight">
                Wrong Overdue or Fraudulent Loan on Your CIBIL?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed mb-4">
                Speak with an empaneled SettleLoans legal advocate to audit your credit report, file an official Section 21 dispute, and rectify your score.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white hover:bg-slate-100 text-[#1F5EFF] font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow"
              >
                Talk to a Legal Advocate
              </Link>
            </div>

            {/* Card 3: Trust Signals Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1F5EFF]" />
                <span>Why Borrowers Trust SettleLoans</span>
              </h4>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Statutory Compliance:</strong> Formal disputes drafted strictly under CICRA 2005 Section 21 &amp; RBI rules.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct Bank Nodal Escalations:</strong> Case escalations submitted directly to Bank Principal Nodal Officers.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero-Dues Protection:</strong> Complete audit ensuring No Dues Certificates reflect ₹0 balances across all 4 bureaus.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Transparent Ethics:</strong> Zero false credit repair promises, pure legal dispute advocacy and genuine debt resolution.
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
