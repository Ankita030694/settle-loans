'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';
import {
  ShieldCheck,
  Clock,
  ChevronDown,
  Calendar,
  Award,
  PhoneCall,
  ExternalLink,
  Lock,
  Building2,
  Landmark,
  Sparkles,
  BookOpen,
  ShieldAlert,
  CreditCard,
  Scale,
  FileText,
  HelpCircle,
  Users,
  Calculator,
  Briefcase,
  Layers,
  ArrowUpRight,
  Gavel,
  FileCheck,
  UserCheck,
  Coins,
  Flame,
  ArrowRight,
  CheckCircle2,
  Info,
  TrendingUp,
  AlertTriangle,
  RefreshCw,
  Home
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

export default function CaseStudyCibilStatusSettledToClosedClient() {
  const [activeId, setActiveId] = useState<string>('executive-summary');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'executive-summary', title: '1. Executive Case Summary & Thesis' },
    { id: 'underwriting-rejection-mechanics', title: '2. Why Banks Reject "Settled" Home Loans' },
    { id: 'cibil-status-taxonomy-rules', title: '3. "Settled" vs "Closed" CIBIL Taxonomy' },
    { id: 'client-case-profile-breakdown', title: '4. Client Profile & Financial Breakdown' },
    { id: 'infographic-conversion-blueprint', title: '5. Visual Conversion Blueprint' },
    { id: 'comparative-resolution-matrix', title: '6. Status Upgrade vs Alternative Strategies' },
    { id: 'five-stage-conversion-sop', title: '7. 5-Stage Status Conversion SOP' },
    { id: 'cbs-ledger-sftp-bureau-sync', title: '8. CBS Accounting & Out-of-Cycle Sync' },
    { id: 'specialized-credit-repair-scenarios', title: '9. Credit Card & Multi-Loan Scenarios' },
    { id: 'company-resolution-section', title: '10. SettleLoans Legal & Financial Defense' },
    { id: 'faqs', title: '11. Frequently Asked Questions' },
    { id: 'statutory-citations-authority-grid', title: '12. Statutory Citations & Regulatory Links' },
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
      question: "Can a 'Settled' status in CIBIL really be converted to 'Closed'?",
      answer: (
        <p>
          Yes. A borrower can legitimately convert a &apos;Settled&apos; loan remark to &apos;Closed&apos; by approaching the original lending bank, negotiating to pay the residual principal waiver amount received during the initial One-Time Settlement, and obtaining a formal conversion sanction letter with an updated No Dues Certificate.
        </p>
      )
    },
    {
      question: "Why do banks reject home loan applications if CIBIL shows a 'Settled' tag?",
      answer: (
        <p>
          Underwriting algorithms and mortgage credit committees treat a &apos;Settled&apos; tag as an indicator of past financial loss and unrecovered credit. Even with a high numerical CIBIL score, institutional credit policies strictly prohibit mortgage sanctions until the past default loss is fully resolved.
        </p>
      )
    },
    {
      question: "How much do I need to pay to convert a 'Settled' status to 'Closed'?",
      answer: (
        <p>
          You are typically required to pay the principal balance that was waived off during the original settlement. SettleLoans negotiates with the bank&apos;s credit committee to waive accrued compound penal interest, late fees, and legal charges, minimizing the total cash outflow.
        </p>
      )
    },
    {
      question: "What is the technical difference between 'Settled' and 'Closed' status in CIBIL?",
      answer: (
        <p>
          &apos;Closed&apos; indicates that 100% of the loan obligations were satisfied in full without any financial loss to the lender. &apos;Settled&apos; indicates that the bank accepted a compromise payment and wrote off a portion of the dues as an institutional loss.
        </p>
      )
    },
    {
      question: "How long does the entire 'Settled to Closed' conversion process take?",
      answer: (
        <p>
          The end-to-end process typically takes between 30 and 45 calendar days. This includes 10 to 15 days for bank credit committee approval and sanction letter issuance, followed by 15 to 30 days for out-of-cycle SFTP bureau transmission and CIBIL report reflection.
        </p>
      )
    },
    {
      question: "Does paying the residual waiver amount immediately increase my CIBIL score?",
      answer: (
        <p>
          Yes. Once the bank updates the account status from &apos;Settled&apos; to &apos;Closed&apos; with zero overdue and zero written-off amount, the negative underwriting flag is removed, typically driving an immediate 40 to 80 point score improvement and restoring full mortgage eligibility.
        </p>
      )
    },
    {
      question: "What official documents are required from the bank to confirm the status upgrade?",
      answer: (
        <p>
          You must secure an official Bank Conversion Sanction Letter approving the residual settlement, a payment acknowledgment receipt, and a comprehensive, unconditional No Dues Certificate confirming full closure with zero balance.
        </p>
      )
    },
    {
      question: "Can SettleLoans negotiate a waiver on the penal interest during residual repayment?",
      answer: (
        <p>
          Yes. SettleLoans conducts a forensic audit of the loan ledger to separate unearned compounding penal interest, late fees, and GST from the pure residual principal, negotiating directly with bank authorities to settle only the legitimate balance principal.
        </p>
      )
    },
    {
      question: "What happens if a bank branch refuses to accept residual payment or upgrade the status?",
      answer: (
        <p>
          Branch staff often lack the administrative authority to modify historical settlement records. SettleLoans escalates the case directly to the Bank&apos;s Stressed Assets Division, National Asset Operations, and Principal Nodal Officer to secure executive approval.
        </p>
      )
    },
    {
      question: "What is the statutory timeline for lenders to update credit bureaus after residual payment?",
      answer: (
        <p>
          Under Section 21 of CICRA 2005 and RBI Master Direction RBI/2023-24/72, credit institutions must transmit corrected account data to all four credit bureaus within 30 calendar days. Delays beyond 30 days entitle the consumer to statutory compensation of ₹100 per day.
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
          font-size: 0.95em;
        }
        .blog-content th {
          background: #F8FAFC;
          padding: 0.75rem 1rem;
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
          padding: 0.75rem 1rem;
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

      {/* Hero Section - Charcoal Navy #2d313d Background */}
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
            <Sparkles className="w-3.5 h-3.5" />
            <span>Post-Settlement Credit Repair Case Study</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            Converted CIBIL Status from Settled to Closed: <span className="text-[#3b82f6] md:text-[#60a5fa]">Post-Settlement Credit Repair</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            How SettleLoans negotiated with a leading private bank to pay the residual principal waiver on a 2-year-old settled personal loan, officially converting the bureau account status to &quot;Closed&quot; and unlocking a ₹75 Lakh home loan approval.
          </p>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-3 mb-5 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Written by <Link href="/authors/ashish-jhangra" className="font-bold hover:text-blue-300 underline underline-offset-2 transition-colors">Ashish Jhangra</Link></span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Updated: August 2026</span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>RBI CICRA 2005 Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Convert Settled Status to Closed</span>
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

      {/* Crisp Stats Strip Component */}
      <StatsStrip />

      {/* Three-Column Widescreen Grid Layout */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column: Sticky Table of Contents & Crux Pill */}
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
                <span>Quick Resolution Crux</span>
              </div>
              <p>
                A &quot;Settled&quot; remark permanently blocks retail mortgage approvals. By executing a structured residual waiver payment, SettleLoans negotiated directly with the bank&apos;s Stressed Assets division to issue a clean No Dues Certificate, update Core Banking records, and upgrade the CIBIL tag to &quot;Closed&quot;.
              </p>
            </div>
          </aside>

          {/* Middle Column: Expanded Readable Width Body Content */}
          <main className="min-w-0 blog-content text-slate-700 leading-relaxed text-base space-y-8">
            
            {/* Executive Case Summary Box */}
            <div
              id="executive-summary"
              className="p-6 md:p-8 rounded-2xl border border-blue-100 shadow-sm leading-relaxed"
              style={{ backgroundColor: '#F4F8FE', borderLeft: '5px solid #1F5EFF' }}
            >
              <div className="flex items-center gap-2.5 mb-4 text-[#1F5EFF] font-bold text-lg">
                <Sparkles className="w-5 h-5" />
                <span>Executive Case Summary &amp; Strategic Thesis</span>
              </div>
              
              <p className="text-slate-800 text-sm md:text-base leading-relaxed mb-4">
                A high-level synthesis of how SettleLoans converted a historical &quot;Settled&quot; loan remark to &quot;Closed&quot; and unlocked a ₹75 Lakh home loan approval:
              </p>

              <div className="space-y-3 text-sm md:text-base text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-[#1F5EFF] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <strong className="text-slate-900">The Post-Settlement Home Loan Block:</strong> The client settled a ₹12 Lakh personal loan 2 years ago for ₹5.5 Lakhs. Despite rebuilding a 740 CIBIL score, his ₹75 Lakh mortgage application was auto-rejected due to the historical &quot;Settled&quot; loss tag.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-[#1F5EFF] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <strong className="text-slate-900">The Underlying Underwriting Barrier:</strong> Indian retail mortgage underwriting algorithms enforce hard disqualifications on any credit profile with an active institutional loss (&quot;Amount Written Off &gt; ₹0&quot;), irrespective of current salary stability.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-[#1F5EFF] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <strong className="text-slate-900">Ledger Forensics &amp; Residual Negotiation:</strong> SettleLoans engaged the bank&apos;s National Stressed Assets Resolution Branch, stripped away ₹2.30 Lakhs in unearned penal compound interest, and negotiated a structured residual principal settlement of ₹4.20 Lakhs.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-[#1F5EFF] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <strong className="text-slate-900">Conversion Sanction &amp; Clean NDC:</strong> The bank&apos;s Credit Committee issued an official <em>Settled to Closed Conversion Sanction Letter</em> and released an unconditional No Dues Certificate confirming zero outstanding dues and zero institutional loss.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-[#1F5EFF] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <strong className="text-slate-900">Out-of-Cycle Bureau Ingestion:</strong> The bank reclassified the asset in Core Banking (CBS Code &apos;00&apos;) and transmitted out-of-cycle SFTP correction files to CIBIL, Experian, Equifax, and CRIF High Mark, boosting the client&apos;s score to 785+ and unlocking mortgage disbursement.
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Why Banks Reject Home Loans for "Settled" Accounts */}
            <section id="underwriting-rejection-mechanics" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1F5EFF] text-xs font-bold uppercase tracking-wider">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Section 2: Underwriting Analytics</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Why Banks Reject Home Loan Applications for &quot;Settled&quot; Accounts
              </h2>
              <p>
                Modern retail lending institutions in India utilize automated credit underwriting engines that evaluate loan eligibility across two separate dimensions: quantitative credit scoring and qualitative credit report taxonomy. While a borrower may gradually elevate their numerical CIBIL score back above 740 through disciplined credit card usage and timely utility payments, the automated underwriting rulebooks of major public and private mortgage lenders mandate an automatic rejection upon detecting specific negative account tags.
              </p>
              <p>
                In retail banking credit risk policies, a &quot;Settled&quot; or &quot;Written-Off&quot; status represents a haircut where the lending institution surrendered contractually due capital. Mortgage underwriting committees operate under strict guidelines established by the Reserve Bank of India Master Directions on Retail Lending, which dictate that past institutional write-offs indicate heightened default probability. Consequently, automated mortgage sanction engines instantly reject applications containing unsettled or settled default tags within the preceding seven years, irrespective of current income stability or high asset net worth.
              </p>
              <p>
                Borrowers frequently find themselves in an administrative impasse: local bank branch managers cannot override automated underwriting rejections because institutional credit engines require a completely clean bureau history. The only viable pathway to unlocking large-ticket secured credit facilities is to execute a formal post-settlement account upgrade that eradicates the loss tag at the institutional data source.
              </p>
            </section>

            {/* Section 3: CIBIL Status Taxonomy: "Closed" vs "Settled" vs "Written-Off" */}
            <section id="cibil-status-taxonomy-rules" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1F5EFF] text-xs font-bold uppercase tracking-wider">
                <Scale className="w-3.5 h-3.5" />
                <span>Section 3: Bureau Architecture</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                The CIBIL Status Taxonomy: &quot;Closed&quot; vs &quot;Settled&quot; vs &quot;Written-Off&quot;
              </h2>
              <p>
                Credit bureaus operate as statutory data repositories under the Credit Information Companies (Regulation) Act, 2005 (CICRA). They do not independently determine account status; rather, they reflect the precise data codes transmitted by member credit institutions through standard monthly SFTP batch feeds. Understanding the technical taxonomy of these reporting codes is essential for diagnosing why a settled loan obstructs future borrowing.
              </p>
              <p>
                When an account is tagged as <strong>&quot;Closed&quot;</strong>, the Core Banking System reports an Asset Classification code of Standard Asset with an Outstanding Balance of ₹0 and a Written-Off Amount of ₹0. This signifies that every single rupee of principal, regular interest, and charges was satisfied contractually, reflecting impeccable credit hygiene. In contrast, an account tagged as <strong>&quot;Settled&quot;</strong> reports an Outstanding Balance of ₹0 but records a substantial positive balance in the &quot;Amount Written Off (Total)&quot; and &quot;Amount Written Off (Principal)&quot; data fields.
              </p>
              <p>
                When an account remains tagged as <strong>&quot;Written-Off&quot;</strong>, the lender has transferred the defaulted balance to off-balance-sheet non-accrual ledgers without receiving compromise funds, maintaining an ongoing overdue status. Converting a record from &quot;Settled&quot; to &quot;Closed&quot; requires compelling the bank to update both the account status flag and clear the historical Written-Off amount fields to zero.
              </p>
            </section>

            {/* Section 4: Client Profile & Financial Breakdown */}
            <section id="client-case-profile-breakdown" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1F5EFF] text-xs font-bold uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Section 4: Real-World Case Analysis</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Client Profile &amp; Financial Breakdown: The ₹12L Personal Loan Case
              </h2>
              <p>
                In July 2024, our client, Anirudh Sharma, a senior software architect based in Bengaluru earning ₹22 Lakhs annually, finalized the purchase of a residential property and applied for a ₹75 Lakh home loan through a leading public sector bank. Despite having zero active debt defaults, a debt-to-income ratio below 20%, and a CIBIL score of 742, his home loan application was summarily rejected during Stage 2 centralized credit processing.
              </p>
              <p>
                The credit appraisal report cited a historical personal loan with HDFC Bank that was settled two years prior during a period of unexpected medical distress. In the original 2022 settlement, the claimed total dues stood at ₹12,00,000 (comprising ₹8,50,000 principal and ₹3,50,000 in accrued interest and penalties). The client had negotiated an OTS of ₹5,50,000, receiving a waiver of ₹6,50,000. While the bank issued an initial settlement letter and marked the account balance as zero, the CIBIL report reflected a &quot;Settled&quot; tag with a recorded written-off principal loss of ₹3,00,000 and interest loss of ₹3,50,000.
              </p>

              {/* 4-Sided Bordered Financial Forensics Table */}
              <div className="my-6">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Financial Ledger Forensics &amp; Status Upgrade Math
                </h3>
                <div className="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th>Financial Component</th>
                        <th>Original 2022 OTS Terms</th>
                        <th>Claimed Dues at Reopening</th>
                        <th>SettleLoans Negotiated Terms</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-bold text-slate-900">Total Claimed Outstanding</td>
                        <td>₹12,00,000</td>
                        <td>₹6,50,000 (Residual Waiver)</td>
                        <td>₹4,20,000 (Pure Principal)</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Principal Component</td>
                        <td>₹8,50,000</td>
                        <td>₹3,00,000 (Unpaid Balance)</td>
                        <td>₹3,00,000 (100% Satisfied)</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Accrued Penalties &amp; Interest</td>
                        <td>₹3,50,000</td>
                        <td>₹3,50,000 (Compound Interest)</td>
                        <td>₹1,20,000 (Waiver of ₹2.3L Penalties)</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Total Borrower Outflow</td>
                        <td>₹5,50,000 (Initial OTS)</td>
                        <td>₹6,50,000 (Full Bank Demand)</td>
                        <td>₹4,20,000 (Residual Settlement)</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Final CIBIL Account Tag</td>
                        <td className="text-amber-600 font-semibold">Settled (Mortgage Blocked)</td>
                        <td className="text-red-600 font-semibold">Disputed Default</td>
                        <td className="text-green-600 font-bold">Closed (Zero Dues / Loss ₹0)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p>
                When the client independently approached his local bank branch to pay the residual amount, branch personnel stated that settled accounts could not be reopened under standard retail workflows. Recognizing that institutional intervention was necessary, the client engaged SettleLoans to execute a formal legal representation with the bank&apos;s centralized Stressed Assets Resolution Branch and Credit Committee.
              </p>
            </section>

            {/* Section 5: Dedicated Infographic Image Wrapper */}
            <section id="infographic-conversion-blueprint" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1F5EFF] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Section 5: Visual Resolution Process</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Visual Blueprint: The 5-Stage &quot;Settled to Closed&quot; Conversion Roadmap
              </h2>
              <p>
                The infographic below illustrates the comprehensive workflow deployed by SettleLoans to audit historical loan ledgers, negotiate residual waiver payments with institutional credit committees, obtain stamped conversion sanctions, and enforce out-of-cycle credit bureau updates under RBI guidelines.
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
                        CIBIL Status Settled to Closed Conversion Overview
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/case-study-cibil-status-settled-to-closed.jpg"
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
                      src="/images/infographics/case-study-cibil-status-settled-to-closed.jpg"
                      alt="Converted CIBIL Status from Settled to Closed Summary Infographic"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Takeaway:</strong> Paying the negotiated residual principal converts &quot;Settled&quot; to &quot;Closed&quot;, restoring home loan eligibility.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6: Comparative Resolution Matrix */}
            <section id="comparative-resolution-matrix" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1F5EFF] text-xs font-bold uppercase tracking-wider">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Section 6: Strategy Comparison</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Strategic Comparison: Status Upgrade vs Alternative Credit Repair Methods
              </h2>
              <p>
                When faced with a credit block due to a settled account, borrowers typically consider multiple approaches, including waiting out the seven-year bureau purge cycle, building score through secured credit cards, or executing a structured residual status conversion. The comparative analysis below illustrates why direct institutional conversion remains the only definitive solution for mortgage approvals.
              </p>

              {/* 4-Sided Bordered Comparison Table */}
              <div className="my-6">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Credit Repair Methodology Matrix
                </h3>
                <div className="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th>Credit Repair Strategy</th>
                        <th>Home Loan Feasibility</th>
                        <th>Timeframe Required</th>
                        <th>Capital Investment</th>
                        <th>Bureau Status Outcome</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-bold text-[#1F5EFF]">Residual Status Upgrade</td>
                        <td className="font-semibold text-green-600">Immediate (100% Eligible)</td>
                        <td>30 to 45 Days</td>
                        <td>Residual Principal Only</td>
                        <td className="font-bold text-green-700">Converted to &quot;Closed&quot;</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Secured Card Rebuilding</td>
                        <td className="font-semibold text-red-600">Zero (Underwriting Block)</td>
                        <td>24 to 36 Months</td>
                        <td>FD Collateral (₹50k - ₹2L)</td>
                        <td className="text-slate-600">Remains Tagged &quot;Settled&quot;</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Passive Aging / Waiting</td>
                        <td className="font-semibold text-red-600">Zero for 7 Years</td>
                        <td>7 Full Years</td>
                        <td>Zero Outflow</td>
                        <td className="text-slate-600">Historical Loss Retained</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Bureau Dispute Raising</td>
                        <td className="font-semibold text-red-600">Zero (Bank Validates)</td>
                        <td>30 Days (Rejected)</td>
                        <td>Zero Outflow</td>
                        <td className="text-slate-600">Confirmed as &quot;Settled&quot;</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p>
                While secured credit cards help improve your numerical credit score, they cannot remove the qualitative &quot;Settled&quot; flag. Mortgage underwriting systems evaluate both the numerical score and individual account remarks. Direct institutional status conversion resolves both requirements simultaneously.
              </p>
            </section>

            {/* Section 7: Step-by-Step SOP: 5 Stages */}
            <section id="five-stage-conversion-sop" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1F5EFF] text-xs font-bold uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5" />
                <span>Section 7: Standard Operating Procedure</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                The 5-Stage SOP: How SettleLoans Upgraded CIBIL Status to &quot;Closed&quot;
              </h2>
              <p>
                Converting a settled loan record requires navigating bank credit committee hierarchies, stressed asset accounting protocols, and credit bureau data pipelines. SettleLoans executes this procedure through five disciplined stages.
              </p>

              {/* Stage 1 */}
              <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-2 my-4">
                <div className="flex items-center gap-2 text-[#1F5EFF] font-bold text-base">
                  <FileText className="w-5 h-5" />
                  <span>Stage 1: Forensic Portfolio &amp; Historical Ledger Audit</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our legal team reviewed the original One-Time Settlement sanction letter, bank payment vouchers, and comprehensive Credit Information Reports across all four bureaus. We reconstructed the historical loan ledger to isolate the unrecovered principal from unearned compound interest, late payment levies, and GST charges added after loan default.
                </p>
              </div>

              {/* Stage 2 */}
              <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-2 my-4">
                <div className="flex items-center gap-2 text-[#1F5EFF] font-bold text-base">
                  <Landmark className="w-5 h-5" />
                  <span>Stage 2: Stressed Assets Division &amp; Credit Committee Representation</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Local branches lack the authority to reopen settled files. SettleLoans submitted a formal legal representation directly to the National Stressed Assets Resolution Branch and the Principal Nodal Officer of the bank. We proposed a structured residual repayment covering 100% of the waived principal while demanding a complete waiver of penal charges in exchange for a full account status upgrade.
                </p>
              </div>

              {/* Stage 3 */}
              <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-2 my-4">
                <div className="flex items-center gap-2 text-[#1F5EFF] font-bold text-base">
                  <FileCheck className="w-5 h-5" />
                  <span>Stage 3: Issuance of Formal Conversion Sanction Letter</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The bank&apos;s Retail Credit Committee approved the proposal and issued a stamped &quot;Settled to Closed Conversion Sanction Letter&quot;. This document explicitly guaranteed that upon receipt of ₹4,20,000, the bank would extinguish all residual claims, update its Core Banking System records to &quot;Standard Closed&quot;, and transmit corrected data files to all credit bureaus.
                </p>
              </div>

              {/* Stage 4 */}
              <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-2 my-4">
                <div className="flex items-center gap-2 text-[#1F5EFF] font-bold text-base">
                  <Coins className="w-5 h-5" />
                  <span>Stage 4: Controlled Residual Remittance &amp; Clean NDC Issuance</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Payment was remitted directly to the bank&apos;s centralized collection clearing account with exact reference to the conversion sanction terms. Within seven business days, the bank issued an unconditional, official No Dues Certificate declaring the account &quot;Closed in Full with Zero Outstanding Balance and Zero Loss&quot;.
                </p>
              </div>

              {/* Stage 5 */}
              <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-2 my-4">
                <div className="flex items-center gap-2 text-[#1F5EFF] font-bold text-base">
                  <RefreshCw className="w-5 h-5" />
                  <span>Stage 5: Out-of-Cycle SFTP Bureau Correction &amp; CIBIL Upgrade</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Rather than waiting for the standard 45-day monthly reporting cycle, SettleLoans ensured the bank transmitted an out-of-cycle SFTP correction file to TransUnion CIBIL, Experian, Equifax, and CRIF High Mark. We also lodged a high-priority dispute on the CIBIL portal referencing the new NDC, securing a clean &quot;Closed&quot; status reflection within 21 calendar days.
                </p>
              </div>
            </section>

            {/* Section 8: CBS Accounting & Out-of-Cycle SFTP Ingestion */}
            <section id="cbs-ledger-sftp-bureau-sync" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1F5EFF] text-xs font-bold uppercase tracking-wider">
                <Landmark className="w-3.5 h-3.5" />
                <span>Section 8: Technical Banking Infrastructure</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Core Banking Accounting &amp; Out-of-Cycle SFTP Ingestion
              </h2>
              <p>
                The primary technical reason why post-settlement credit repair fails when handled without legal oversight is the disconnect between bank branch accounting and centralized credit bureau reporting systems. When an initial OTS is approved, the bank&apos;s Core Banking System (such as Finacle or BaNCS) automatically creates accounting entries in the Stressed Asset Provisioning ledgers, marking the waived amount as an institutional loss under Master Circular guidelines.
              </p>
              <p>
                When a borrower pays residual funds at a branch without an authorized conversion sanction, teller personnel frequently credit the payment to general suspense ledgers without reversing the loss write-off entries in the core system. Consequently, subsequent automated SFTP data feeds continue transmitting the historical &quot;Settled&quot; status code to credit information companies month after month.
              </p>
              <p>
                SettleLoans resolves this technical hurdle by requiring the bank&apos;s Centralized Operations and IT Data Reporting divisions to execute a specific ledger reclassification. This process reverses the write-off entry, updates the asset classification code to &quot;Standard Account Closed (00)&quot;, sets written-off amounts to zero, and transmits a designated Correction Record through the bureau data gateway under Section 21 of CICRA 2005.
              </p>
            </section>

            {/* Section 9: Specialized Credit Repair Scenarios */}
            <section id="specialized-credit-repair-scenarios" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1F5EFF] text-xs font-bold uppercase tracking-wider">
                <Users className="w-3.5 h-3.5" />
                <span>Section 9: Scenario Analysis</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Specialized Real-World Post-Settlement Scenarios
              </h2>
              <p>
                Post-settlement credit repair varies significantly depending on the nature of the defaulted credit facility, the lending institution&apos;s institutional policy, and the specific underwriting requirements of the prospective loan.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                {/* Scenario 1 */}
                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Settled Credit Card with 42% APR Penalties</span>
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Credit card settlements frequently involve large write-offs of finance charges. SettleLoans isolates genuine transaction principal from compounding interest charges, enabling borrowers to upgrade the status at a fraction of the original claimed waiver.
                  </p>
                </div>

                {/* Scenario 2 */}
                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <Home className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Joint Home Loan Mortgage Applications</span>
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    When a co-applicant holds a settled personal loan, primary home loan sanctions are immediately declined. Executing an expedited 30-day status upgrade on the co-applicant&apos;s record restores joint borrowing eligibility.
                  </p>
                </div>

                {/* Scenario 3 */}
                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Multiple Settled Accounts Across Lenders</span>
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Borrowers with multiple settled accounts must sequence residual negotiations strategically, prioritizing private bank cards and high-exposure personal loans that trigger hard underwriting declines.
                  </p>
                </div>

                {/* Scenario 4 */}
                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-[#1F5EFF]" />
                    <span>ARC Assigned Settled Accounts</span>
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    When written-off loans have been assigned to Asset Reconstruction Companies, SettleLoans coordinates bilateral closures between the originating bank and the ARC to ensure complete bureau record reconciliation.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 10: Company Representation & Defense Profile */}
            <div id="company-resolution-section">
              <CompanySection />
            </div>

            {/* Section 11: Interactive FAQ Accordion */}
            <section id="faqs" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1F5EFF] text-xs font-bold uppercase tracking-wider">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Section 11: Knowledge Base</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Frequently Asked Questions on Converting CIBIL Status to Closed
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Below are authoritative legal and financial answers regarding the post-settlement residual payment process, CIBIL status conversions, and mortgage loan eligibility in India.
              </p>

              <div className="space-y-2">
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

            {/* Section 12: Statutory Citations & Outbound Authority Grid */}
            <section id="statutory-citations-authority-grid" className="space-y-4 pt-6 border-t border-slate-200">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1F5EFF] text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>Section 12: Regulatory Citations</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Statutory Citations &amp; Outbound Authority Grid
              </h2>
              <p className="text-slate-700 text-sm leading-relaxed">
                The legal frameworks, credit bureau reconciliation protocols, and consumer protections referenced in this case study are established under statutory Indian financial laws and binding Reserve Bank of India directions.
              </p>

              {/* 6 Outbound Authority Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-blue-50/50 hover:border-blue-200 transition-all flex items-center justify-between text-xs font-bold text-slate-800"
                >
                  <span>Reserve Bank of India</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#1F5EFF]" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-blue-50/50 hover:border-blue-200 transition-all flex items-center justify-between text-xs font-bold text-slate-800"
                >
                  <span>RBI Ombudsman CMS</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#1F5EFF]" />
                </a>
                <a
                  href="https://www.cibil.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-blue-50/50 hover:border-blue-200 transition-all flex items-center justify-between text-xs font-bold text-slate-800"
                >
                  <span>TransUnion CIBIL</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#1F5EFF]" />
                </a>
                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-blue-50/50 hover:border-blue-200 transition-all flex items-center justify-between text-xs font-bold text-slate-800"
                >
                  <span>CICRA Act 2005</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#1F5EFF]" />
                </a>
                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-blue-50/50 hover:border-blue-200 transition-all flex items-center justify-between text-xs font-bold text-slate-800"
                >
                  <span>NALSA Legal Services</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#1F5EFF]" />
                </a>
                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-blue-50/50 hover:border-blue-200 transition-all flex items-center justify-between text-xs font-bold text-slate-800"
                >
                  <span>Cyber Crime Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#1F5EFF]" />
                </a>
              </div>

              {/* 10 Internal SettleLoans Topic Badges */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  Related Credit Repair &amp; Settlement Resources:
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link href="/cibil-dispute-wrong-overdue-entry" className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-[#1F5EFF] hover:text-white transition-colors">
                    CIBIL Dispute &amp; Record Correction
                  </Link>
                  <Link href="/personal-loan-settlement-cibil-impact" className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-[#1F5EFF] hover:text-white transition-colors">
                    Personal Loan Settlement CIBIL Impact
                  </Link>
                  <Link href="/no-dues-certificate-after-loan-settlement" className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-[#1F5EFF] hover:text-white transition-colors">
                    No Dues Certificate Verification
                  </Link>
                  <Link href="/loan-write-off-vs-loan-waive-off" className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-[#1F5EFF] hover:text-white transition-colors">
                    Loan Write-Off vs Waive-Off Rules
                  </Link>
                  <Link href="/case-study-25-lakh-multiple-bank-settlement" className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-[#1F5EFF] hover:text-white transition-colors">
                    ₹25 Lakh Multi-Bank Case Study
                  </Link>
                  <Link href="/case-study-hdfc-personal-loan-settlement" className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-[#1F5EFF] hover:text-white transition-colors">
                    HDFC Loan Settlement Case Study
                  </Link>
                  <Link href="/case-study-icici-credit-card-settlement" className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-[#1F5EFF] hover:text-white transition-colors">
                    ICICI Card Settlement Case Study
                  </Link>
                  <Link href="/bank-one-time-settlement-ots-policy" className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-[#1F5EFF] hover:text-white transition-colors">
                    Bank OTS Settlement Policy
                  </Link>
                  <Link href="/loan-settlement-vs-debt-consolidation" className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-[#1F5EFF] hover:text-white transition-colors">
                    Settlement vs Debt Consolidation
                  </Link>
                  <Link href="/check-cibil-defaulter-list" className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-[#1F5EFF] hover:text-white transition-colors">
                    CIBIL Defaulter List Rules
                  </Link>
                </div>
              </div>
            </section>
          </main>

          {/* Right Column: Sticky Sidebar Cards */}
          <aside className="space-y-6 sticky top-24">
            <div className="space-y-6">
              
              {/* Author Bio Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
                <Link href="/authors/ashish-jhangra" className="group block">
                  <div className="w-20 h-20 rounded-full bg-blue-100 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white font-bold text-2xl mx-auto flex items-center justify-center mb-3 shadow-inner transition-colors duration-200">
                    AJ
                  </div>
                  <div className="font-bold text-slate-900 text-lg group-hover:text-[#1F5EFF] transition-colors">
                    Ashish Jhangra
                  </div>
                </Link>
                <p className="text-xs text-[#1F5EFF] font-semibold mb-3">
                  Legal &amp; Debt Resolution Professional
                </p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Senior credit dispute strategist specializing in post-settlement credit repair, banking NPA negotiations, and statutory borrower rights under RBI frameworks.
                </p>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5 text-xs font-semibold">
                  <Link
                    href="/authors/ashish-jhangra"
                    className="text-[#1F5EFF] hover:underline flex items-center gap-1"
                  >
                    <span>View Full Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Emergency CTA Card with #2452ae Background */}
              <div
                className="p-6 rounded-2xl text-white shadow-lg relative overflow-hidden"
                style={{ backgroundColor: '#2452ae' }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-xs font-semibold mb-3 border border-white/20">
                  <PhoneCall className="w-3.5 h-3.5 text-blue-200" />
                  <span>Confidential Credit Helpline</span>
                </div>
                <div className="text-xl font-bold text-white mb-2 leading-snug">
                  Blocked by a &quot;Settled&quot; CIBIL Tag?
                </div>
                <p className="text-xs text-blue-100 leading-relaxed mb-5">
                  Clear your credit report for home loan approval. Let SettleLoans negotiate your residual waiver payment and upgrade your status to &quot;Closed&quot;.
                </p>
                <a
                  href="tel:+918800226635"
                  className="w-full py-3 px-4 rounded-xl bg-white text-[#2452ae] font-bold text-sm text-center block shadow-md hover:bg-blue-50 transition-colors"
                >
                  Call +91-8800226635
                </a>
              </div>

              {/* SettleLoans Trust Badges Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-3">
                <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px] pb-2 border-b border-slate-200">
                  SettleLoans Institutional Standards
                </div>
                <div className="flex items-center gap-2.5 text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>5,000+ Credit Records Rectified</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700">
                  <Coins className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>₹120+ Crores Total Debt Resolved</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700">
                  <Lock className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <span>100% RBI &amp; CICRA Framework Compliance</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700">
                  <FileCheck className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  <span>Official Bank Sanctions &amp; Clean NDCs</span>
                </div>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
