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

export default function CheckCibilDefaulterListClient() {
  const [activeId, setActiveId] = useState<string>('cibil-defaulter-list-myth');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'cibil-defaulter-list-myth', title: '1. The Defaulter List Myth & CICRA Reality' },
    { id: 'what-cibil-actually-reports', title: '2. What CIBIL Actually Tracks: DPD & Scores' },
    { id: 'wilful-defaulter-vs-retail', title: '3. Wilful Defaulters vs. Retail Hardship' },
    { id: 'how-to-check-credit-report', title: '4. How to Check Your Official CIR Report' },
    { id: 'decoding-status-codes', title: '5. Decoding Status Codes: Settled & Written-Off' },
    { id: 'cicra-dispute-resolution', title: '6. CICRA 2005 Dispute Resolution Process' },
    { id: 'resolving-genuine-defaults', title: '7. Resolving Overdue Loans via Legal OTS' },
    { id: 'score-rebuilding-blueprint', title: '8. 18-Month Blueprint to Rebuild 750+ CIBIL' },
    { id: 'faqs', title: '9. Frequently Asked Questions' },
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
      question: "Does TransUnion CIBIL maintain a public defaulter list in India?",
      answer: (
        <p>
          <strong>No, TransUnion CIBIL does not publish any public defaulter list or blacklist.</strong> Under Section 15 of the Credit Information Companies (Regulation) Act, 2005 (CICRA), credit bureaus are strictly governed by statutory confidentiality mandates. CIBIL operates as a regulated information repository that generates individualized Credit Information Reports (CIR). These private records can only be accessed by the specific borrower or by RBI-registered credit institutions upon obtaining explicit borrower consent during a formal credit application. There is no open public registry where employers, neighbors, or relatives can search names.
        </p>
      )
    },
    {
      question: "How can I check my loan default status in my CIBIL report?",
      answer: (
        <p>
          To check whether a lender has reported an overdue payment or default status, you must pull your official Credit Information Report directly from <strong>cibil.com</strong> or any of the other three RBI-licensed bureaus (Experian, Equifax, or CRIF High Mark). Under RBI mandates, every citizen is entitled to one full free credit report per calendar year. Once authenticated via your PAN, mobile number, and date of birth, navigate to the <strong>&quot;Accounts Information&quot;</strong> section to review your Days Past Due (DPD) history and account status tags.
        </p>
      )
    },
    {
      question: "What does DPD mean in a CIBIL credit report?",
      answer: (
        <p>
          <strong>DPD stands for Days Past Due.</strong> It indicates the precise number of days a payment has been overdue past the agreed monthly installment due date over a rolling 36-month tracking window. A healthy report displays <strong>&quot;000&quot;</strong> or <strong>&quot;STD&quot; (Standard)</strong> across all months, indicating perfect compliance. Numerical entries such as <strong>&quot;030&quot;</strong>, <strong>&quot;060&quot;</strong>, or <strong>&quot;090+&quot;</strong> denote escalating delinquency, triggering Non-Performing Asset (NPA) classification and substantial credit score drops.
        </p>
      )
    },
    {
      question: "What is the difference between a retail loan default and an RBI Wilful Defaulter tag?",
      answer: (
        <p>
          A retail default arises from genuine economic stress, job loss, business downturns, or medical emergencies, resulting in overdue DPD or a &quot;Settled&quot; status on a private credit report. In contrast, an <strong>RBI Wilful Defaulter</strong> is a specialized commercial classification defined by RBI Master Directions. It applies exclusively to entities or individuals with aggregate defaults of ₹25 Lakhs or more who deliberately siphoned borrowed funds or refused repayment despite having adequate financial means, following quasi-judicial review and formal legal suit filing.
        </p>
      )
    },
    {
      question: "Can an employer, landlord, or neighbor view my CIBIL default record?",
      answer: (
        <p>
          <strong>No, individual credit reports are strictly confidential.</strong> Under CICRA 2005 data privacy rules, unauthorized third parties—such as landlords, neighbors, or unvetted private employers—cannot search or view your credit history. Only regulated credit institutions holding valid bureau memberships can access your CIR, and only when you submit an active application for credit and explicitly execute a digital consent authorization.
        </p>
      )
    },
    {
      question: "What is the difference between 'Settled' and 'Written-Off' in CIBIL?",
      answer: (
        <p>
          <strong>&quot;Written-Off&quot;</strong> represents an accounting decision where the lending bank, after 180+ days of unresolved default, removes the non-performing asset from its balance sheet to optimize tax provisions, while retaining all statutory legal recovery rights. <strong>&quot;Settled&quot;</strong> signifies a negotiated compromise where the borrower and lender formalize a One-Time Settlement (OTS), resulting in partial payment and the complete legal cessation of further claims upon issuance of a formal No Dues Certificate.
        </p>
      )
    },
    {
      question: "How do I dispute an incorrect default entry on my CIBIL report?",
      answer: (
        <p>
          If your credit report contains inaccurate overdue amounts or wrongful default remarks, you can lodge an online dispute via the CIBIL Dispute Resolution Portal under Section 21 of CICRA 2005. The bureau is legally mandated to cross-verify the data with the reporting bank within <strong>30 calendar days</strong>. If the lender acknowledges clerical error or fails to validate the claim within the statutory window, the credit bureau must immediately expunge or rectify the erroneous record.
        </p>
      )
    },
    {
      question: "Can I remove a 'Settled' or 'Written-Off' remark from CIBIL later?",
      answer: (
        <p>
          <strong>Yes, you can upgrade your credit status from &quot;Settled&quot; or &quot;Written-Off&quot; to &quot;Closed&quot;.</strong> When your liquidity improves, you can approach the Stressed Asset Resolution Branch of the original lending institution and offer to pay the residual waived balance. Once received, the bank will issue a Comprehensive No Dues Certificate and transmit an updated status of &quot;Closed&quot; to all four credit bureaus within 30 to 45 days, removing the negative compromise tag permanently.
        </p>
      )
    },
    {
      question: "How long does a negative loan status stay on a CIBIL report?",
      answer: (
        <p>
          Under Indian credit reporting practices governed by CICRA 2005, historical repayment records and adverse status tags are maintained for up to <strong>7 years</strong>. However, credit scoring algorithms give maximum weight to recent financial behavior over the past 12 to 24 months. By adopting secured credit instruments, maintaining credit utilization below 30%, and eliminating hard inquiries, borrowers can successfully rebuild a prime credit score of 750+ well before the 7-year mark.
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
            Credit Forensics &amp; Regulatory Rights Guide
          </div>

          {/* Compact Title / H1 */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            How to Check My Name in CIBIL Defaulter List?{' '}
            <span className="text-[#3b82f6] md:text-[#60a5fa]">Myth vs Reality &amp; Score Recovery</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            A public CIBIL defaulter list is a widespread misconception. Learn how credit bureaus actually record repayment data, how to access your official credit report securely, and how to rebuild creditworthiness.
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
              <span>Request Free Credit Analysis</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#cibil-defaulter-list-myth"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 text-xs sm:text-sm"
            >
              <BookOpen className="w-4 h-4 text-blue-300" />
              <span>Explore Regulatory Breakdown</span>
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
                <span>Quick Takeaway</span>
              </div>
              <p>
                No public CIBIL blacklist exists in India. Credit bureaus compile private Credit Information Reports tracking DPD payment strings. Borrowers can obtain a free official report yearly and resolve negative tags through structured legal settlements.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="min-w-0 blog-content">
            
            {/* Section 1: The Defaulter List Myth & CICRA Reality */}
            <section id="cibil-defaulter-list-myth" className="scroll-mt-28 mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                1. The Myth of the Public &quot;CIBIL Defaulter List&quot;: Legal &amp; Regulatory Reality
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Every month, thousands of borrowers across India search anxiously for ways to check if their name appears on an alleged &quot;CIBIL Defaulter List.&quot; This pervasive anxiety is often stoked by aggressive third-party recovery agents who unlawfully threaten borrowers that failing to pay an overdue personal loan or credit card bill will lead to their name being publicly published on a nationwide blacklist, ruining their social reputation and employment prospects.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                The absolute legal reality under Indian financial law is straightforward: <strong>there is no such thing as a public CIBIL Defaulter List for individual retail borrowers</strong>. TransUnion CIBIL, along with India&apos;s other three RBI-licensed credit bureaus (Experian, Equifax, and CRIF High Mark), does not maintain, compile, or publish any public registry or social blacklist of individuals who have defaulted on loans.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Under the statutory mandate of the <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA)</strong>, credit bureaus function exclusively as private, regulated data repositories. Section 15 of CICRA imposes strict statutory confidentiality requirements on credit institutions and bureaus. Credit data cannot be made public, searched openly on internet search engines, or disclosed to unauthorized parties such as neighbors, prospective landlords, or unvetted private employers.
              </p>

              {/* Statutory Callout Box */}
              <div className="bg-slate-50 border-l-4 border-[#1F5EFF] rounded-r-2xl p-5 my-6">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1">
                  <Scale className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Statutory Protection under CICRA 2005 (Section 15)</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Credit Information Companies are legally prohibited from publishing individual retail credit records to the general public. Access to your Credit Information Report is restricted strictly to you and RBI-regulated member credit institutions after obtaining your explicit, traceable digital or written consent during an active credit underwriting process.
                </p>
              </div>
            </section>

            {/* Section 2: What CIBIL Actually Tracks: DPD & Scores */}
            <section id="what-cibil-actually-reports" className="scroll-mt-28 mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                2. What CIBIL Actually Reports: Deciphering CIR Data, DPD &amp; Asset Classification
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Rather than classifying individuals into arbitrary &quot;defaulter&quot; categories, TransUnion CIBIL compiles an individualized, technical document known as a <strong>Credit Information Report (CIR)</strong>. The CIR provides member financial institutions with an objective, historical audit trail of a borrower&apos;s credit accounts, sanctioned limits, outstanding balances, and monthly payment punctuality over a rolling 36-month period.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                The cornerstone metric within any CIR is the <strong>Days Past Due (DPD)</strong> indicator. DPD captures the exact number of days a payment was delayed past its contractual due date for each credit facility month by month. When an underwriting system evaluates your profile, it reviews these numerical strings to gauge financial stability rather than checking a static blacklist.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Indian banking regulations established by the Reserve Bank of India govern how lenders classify credit assets based on these DPD metrics. When payments stall, the account transitions through specific asset quality tiers that directly govern bank provisioning norms and risk assessments:
              </p>

              {/* 4-Sided Bordered Comparison Table: Asset Classifications */}
              <div className="my-6">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                  RBI Asset Classification &amp; CIBIL DPD Reporting Matrix
                </h3>
                <div className="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th>Asset Classification</th>
                        <th>DPD Timeline</th>
                        <th>CIBIL Report Code</th>
                        <th>Impact on Future Credit Eligibility</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-bold text-slate-900">Standard Asset</td>
                        <td>0 Days (On-Time)</td>
                        <td className="font-semibold text-emerald-600">000 / STD</td>
                        <td>Prime eligibility; competitive interest rates across all banks.</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Special Mention Account (SMA-0)</td>
                        <td>1 – 30 Days Overdue</td>
                        <td className="font-semibold text-amber-600">030</td>
                        <td>Minor score drop; automated payment reminders and late fees.</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Special Mention Account (SMA-1)</td>
                        <td>31 – 60 Days Overdue</td>
                        <td className="font-semibold text-amber-700">060</td>
                        <td>Moderate score reduction; credit line freezes and high-risk flags.</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Special Mention Account (SMA-2)</td>
                        <td>61 – 90 Days Overdue</td>
                        <td className="font-semibold text-orange-600">090</td>
                        <td>Severe score deduction (50–90 pts); pre-NPA legal warning notices.</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Non-Performing Asset (Sub-Standard)</td>
                        <td>91 – 180 Days Overdue</td>
                        <td className="font-semibold text-red-600">SUB / 120–180</td>
                        <td>Immediate loan rejection; formal legal demand notices initiated.</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Doubtful / Loss Asset</td>
                        <td>180+ Days Overdue</td>
                        <td className="font-semibold text-red-700">DBT / LSS / W-OFF</td>
                        <td>Severe credit impairment; lender provisions 100% loss or seeks OTS.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 3: Wilful Defaulters vs Retail Hardship */}
            <section id="wilful-defaulter-vs-retail" className="scroll-mt-28 mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                3. RBI Wilful Defaulter List vs. Individual Retail Default: Critical Legal Distinctions
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                A primary source of confusion among borrowers is the difference between an ordinary retail loan default and the official <strong>RBI Wilful Defaulter and Suit-Filed List</strong>. The Reserve Bank of India, in coordination with the Central Repository of Information on Large Credits (CRILC) and Credit Information Companies, does publish periodic data regarding commercial entities and individuals categorized as wilful defaulters. However, the legal and financial parameters governing this list are fundamentally different from ordinary retail defaults.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Under the <strong>RBI Master Directives on Wilful Defaulters</strong>, an individual or business entity can only be declared a &quot;Wilful Defaulter&quot; if specific statutory conditions are proven through a rigorous quasi-judicial inquiry:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-slate-700 mb-5 ml-2">
                <li>The borrower possessed the verified financial capacity to meet repayment obligations but intentionally chose not to pay.</li>
                <li>The borrowed funds were diverted or siphoned off for purposes other than the specific sanctioned commercial objective.</li>
                <li>The borrower disposed of or transferred secured hypothecated assets or collateral without lender permission.</li>
                <li>The aggregate default exposure equals or exceeds the statutory threshold of <strong>₹25 Lakhs</strong> (or ₹1 Crore for suit-filed commercial accounts).</li>
              </ul>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                If you are an individual retail borrower who missed monthly installments on a personal loan, credit card, or educational loan due to economic distress, involuntary unemployment, health emergencies, or business revenue loss, <strong>you cannot be classified as an RBI Wilful Defaulter</strong>. Honest financial insolvency is not a criminal act under Indian law, and your information remains strictly within confidential credit bureau records.
              </p>
            </section>

            {/* Section 4: How to Check Your Official Credit Report */}
            <section id="how-to-check-credit-report" className="scroll-mt-28 mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                4. Step-by-Step Protocol: How to Check Your Official Credit Report for Free
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                If you wish to verify how lenders have reported your loan repayment history, you should obtain your authentic Credit Information Report directly from the authorized credit bureaus. Under RBI regulations, every consumer in India is entitled to receive <strong>one free full credit report per calendar year</strong> from each of the four licensed credit information companies.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                To access your official CIBIL report safely without falling prey to unverified third-party phishing portals or predatory lead-generation websites, follow this verified regulatory protocol:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-6 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm mb-0.5">Navigate to the Official Bureau Portal</h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Visit the official TransUnion CIBIL website (<span className="text-[#1F5EFF] font-semibold">cibil.com</span>) and select &quot;Get Your Free Annual CIBIL Score &amp; Report.&quot;
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-0.5">Enter Identity Authentication Details</h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Provide your official full legal name, Permanent Account Number (PAN), date of birth, current residential address, and active mobile number registered with your banking accounts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-0.5">Complete Two-Factor OTP Verification</h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Authenticate your identity through the One-Time Password (OTP) dispatched to your Aadhaar/PAN-linked mobile number or answer credit verification security questions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-0.5">Download and Audit Your Full CIR</h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Download your comprehensive multi-page CIR PDF. Audit all four key sections: Personal Details, Contact Information, Account Information (DPD &amp; Status), and Enquiries.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Compact High-Impact Infographic Banner (Between Section 4 and 5) */}
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
                      CIBIL Defaulter List Summary &amp; Process Overview
                    </h3>
                  </div>
                </div>
                <a
                  href="/images/infographics/check-cibil-defaulter-list.jpg"
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
                    src="/images/infographics/check-cibil-defaulter-list.jpg"
                    alt="How to Check Name in CIBIL Defaulter List Summary Infographic"
                    className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Quick Crux Footer Strip */}
              <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span><strong>Key Takeaway:</strong> There is no public CIBIL defaulter blacklist. Verify your private CIR report, audit DPD strings, and resolve overdue accounts legally.</span>
                </div>
                <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                  Get Free Case Evaluation &rarr;
                </Link>
              </div>
            </div>

            {/* Section 5: Decoding Status Codes */}
            <section id="decoding-status-codes" className="scroll-mt-28 mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                5. Decoding CIBIL Status Codes: Settled, Written-Off, SMA &amp; Suit Filed
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                When reviewing your Credit Information Report, the most crucial analytical section is the <strong>&quot;Account Information&quot;</strong> tab. Each loan or credit card account displays a specific status remark reflecting the commercial resolution or ongoing status of that debt facility. Understanding these codes is essential for diagnosing the exact health of your profile:
              </p>

              {/* 4-Sided Bordered Comparison Table: Status Codes */}
              <div className="my-6">
                <div className="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th>CIBIL Status Remark</th>
                        <th>Commercial &amp; Legal Meaning</th>
                        <th>Legal Liability Status</th>
                        <th>Credit Score Recovery Strategy</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-bold text-emerald-700">Closed</td>
                        <td>Loan repaid 100% in full with all interest and fees. Zero financial loss to bank.</td>
                        <td>Zero liability. Account fully discharged.</td>
                        <td>Maintains positive scoring trajectory; baseline for prime 750+ score.</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-amber-700">Settled</td>
                        <td>Bank accepted a discounted compromise lump sum (OTS) and waived residual dues.</td>
                        <td>Legally concluded. Bank cannot claim residual balance.</td>
                        <td>Rebuild with secured FD credit cards over 18–24 months or pay residual balance.</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-red-600">Written-Off</td>
                        <td>Bank provisioned debt as uncollectible for tax purposes after prolonged default.</td>
                        <td>Active liability. Bank retains legal recovery and litigation rights.</td>
                        <td>Negotiate a formal One-Time Settlement (OTS) or structured closure to stop claims.</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-blue-700">Post-Write-Off Settled</td>
                        <td>Account was written off, but borrower subsequently negotiated an OTS settlement.</td>
                        <td>Legally concluded. Recovery actions terminated.</td>
                        <td>Score rebounds steadily as outstanding balance reflects ₹0.</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-red-800">Suit Filed / Wilful Defaulter</td>
                        <td>Bank initiated formal recovery litigation (DRT, Section 138 NI Act, or SARFAESI).</td>
                        <td>Active court litigation with judicial summons.</td>
                        <td>Immediate legal representation required to seek Lok Adalat or court compromise.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 6: CICRA 2005 Dispute Resolution Process */}
            <section id="cicra-dispute-resolution" className="scroll-mt-28 mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                6. Correcting Erroneous Entries: The CICRA 2005 Dispute Resolution Framework
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                In many instances, borrowers find themselves unfairly penalized by clerical mistakes, outdated data synchronization, or identity theft. Common errors include a fully closed loan continuing to display an active overdue balance, an incorrect DPD entry caused by banking server delays, or an unfamiliar credit card appearing due to PAN duplication.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Section 21 of the Credit Information Companies (Regulation) Act, 2005 provides a robust, legally enforceable dispute resolution mechanism designed to protect consumer rights. When an individual lodges a formal dispute with TransUnion CIBIL or any licensed bureau, the statutory procedure unfolds under strict timelines:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-6 space-y-4">
                <ol className="list-decimal list-inside space-y-3 text-sm md:text-base text-slate-700">
                  <li>
                    <strong>Dispute Filing:</strong> Submit an online dispute via the CIBIL Dispute Resolution portal specifying the exact Account Number and disputed field (e.g., DPD string, Ownership, or Outstanding Balance).
                  </li>
                  <li>
                    <strong>Bureau Verification:</strong> CIBIL logs a formal Dispute ID and transmits the verification notice directly to the Principal Nodal Officer of the reporting lending institution.
                  </li>
                  <li>
                    <strong>Mandatory 30-Day Turnaround:</strong> Under RBI Master Directions, the lending institution must verify its internal records and respond with data confirmation or correction within <strong>30 calendar days</strong>.
                  </li>
                  <li>
                    <strong>Data Rectification:</strong> If the bank confirms the error or fails to validate the disputed entry within the statutory timeframe, CIBIL is legally required to expunge or update the record immediately.
                  </li>
                  <li>
                    <strong>Ombudsman Escalation:</strong> If a bank refuses to rectify a demonstrable reporting mistake, the borrower can escalate the dispute to the <strong>RBI Banking Ombudsman</strong> under the Reserve Bank - Integrated Ombudsman Scheme, 2021, claiming compensation for credit reputation damage.
                  </li>
                </ol>
              </div>
            </section>

            {/* Section 7: Resolving Overdue Loans via Legal OTS */}
            <section id="resolving-genuine-defaults" className="scroll-mt-28 mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                7. Resolving Genuine Overdue Debts: Strategic OTS Negotiation &amp; Debt Relief
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                When loan defaults reflect genuine financial hardship rather than reporting errors, ignoring the problem causes severe compound damage. Unresolved default accounts accumulate contractual interest, penal charges, and late payment penalties, causing total dues to balloon rapidly. Simultaneously, continued non-payment can trigger legal notices under Section 138 of the Negotiable Instruments Act (for cheque bounce) or Section 25 of the Payment and Settlement Systems Act (for NACH/e-mandate default).
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                The most lawful, pragmatic route for distressed borrowers is to execute a structured <strong>One-Time Settlement (OTS)</strong> directly with the lending institution. Under RBI Compromise Settlement guidelines, banks and NBFCs possess board-approved policies allowing them to negotiate discounted lump-sum closures for non-performing loans, waiving accumulated penalties and a substantial portion of accrued interest based on Net Present Value (NPV) recovery assessments.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                A legally sound settlement negotiated with advocate representation guarantees three indispensable protections: it caps total financial liability, permanently stops aggressive recovery agent harassment under RBI Fair Practices Codes, and ensures the issuance of a binding <strong>No Dues Certificate (NDC)</strong> confirming ₹0 outstanding balance across all credit bureaus.
              </p>
            </section>

            {/* Section 8: 18-Month Blueprint to Rebuild 750+ CIBIL */}
            <section id="score-rebuilding-blueprint" className="scroll-mt-28 mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                8. The 18–24 Month Score Rebound Plan: Proven Steps to Restore 750+ CIBIL Score
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Experiencing a loan settlement or past default does not permanently end your financial future. Credit scoring algorithms operate on mathematical models that assign exponential weight to recent repayment behavior while discounting historical delinquency over time. By executing a disciplined credit rebuilding protocol, borrowers can systematically elevate their CIBIL score from sub-600 levels back into the prime 750+ range within 18 to 24 months:
              </p>

              {/* 4-Sided Bordered Comparison Table: Recovery Timeline */}
              <div className="my-6">
                <div className="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th>Recovery Phase</th>
                        <th>Target Operational Milestones</th>
                        <th>Recommended Credit Instruments</th>
                        <th>Target Score Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-bold text-slate-900">Month 1 – 3</td>
                        <td>Obtain official NDC, verify ₹0 balance across all 4 bureaus, resolve lingering disputes.</td>
                        <td>₹20,000 – ₹50,000 Secured FD Credit Card (e.g. IDFC WOW / Kotak 811)</td>
                        <td className="font-bold text-amber-600">550 – 600</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Month 4 – 12</td>
                        <td>Maintain Credit Utilization Ratio strictly below 25%; automate 100% on-time payments.</td>
                        <td>Secured Card + Utility Bill Autopayments</td>
                        <td className="font-bold text-[#1F5EFF]">630 – 690</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Month 13 – 18</td>
                        <td>Introduce a small installment credit line to diversify credit mix; avoid hard inquiries.</td>
                        <td>Small Consumer Durable / 2-Wheeler Financed Loan</td>
                        <td className="font-bold text-emerald-600">700 – 745</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Month 19 – 24+</td>
                        <td>Achieve prime borrower standing; qualify for standard unsecured credit cards &amp; home loans.</td>
                        <td>Standard Unsecured Cards, Prime Auto/Mortgage Loans</td>
                        <td className="font-bold text-emerald-700">750 – 800+ (Prime)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-3 my-6">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <h3 className="font-bold text-slate-900 text-sm mb-1">
                    Rule 1: Keep Credit Utilization Ratio (CUR) Below 30%
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If your secured credit card has a limit of ₹50,000, keep monthly spending capped under ₹15,000. High credit utilization signals financial distress and depresses score recovery.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">
                    Rule 2: Eliminate Multiple Hard Loan Inquiries
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Do not submit speculative loan applications across multiple bank websites. Each hard bureau inquiry reduces your score by 5 to 10 points and flags credit desperation.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">
                    Rule 3: Convert &quot;Settled&quot; to &quot;Closed&quot; When Liquidity Permits
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If your financial circumstances improve, you can approach your original lender, repay the waived OTS balance, and obtain an updated &quot;Closed&quot; status across all credit bureaus.
                  </p>
                </div>
              </div>
            </section>

            {/* Company Section Placement (Before FAQ) */}
            <CompanySection />

            {/* Section 9: Frequently Asked Questions */}
            <section id="faqs" className="scroll-mt-28 mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                9. Frequently Asked Questions (FAQ)
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-6 text-slate-600">
                Authoritative answers to the most urgent legal, regulatory, and credit scoring questions regarding CIBIL default records in India.
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
              <h3 className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                <Landmark className="w-4 h-4 text-[#1F5EFF]" />
                <span>Official Regulatory Sources &amp; Legal Authorities</span>
              </h3>
              <ul className="space-y-2 text-xs md:text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    Reserve Bank of India (RBI) — Master Directives on Compromise Settlements &amp; CRILC Reporting
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
                    TransUnion CIBIL — Credit Information Companies (Regulation) Act, 2005 Compliance Portal
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
                    Supreme Court of India — Judgments on Fair Debt Recovery &amp; Borrower Privacy Protection
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://ibbi.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    Insolvency and Bankruptcy Board of India (IBBI) — Individual Debt Resolution Standards
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
                    RBI Integrated Ombudsman Scheme — Consumer Credit Reporting Grievance Redressal Mechanism
                  </a>
                </li>
              </ul>
            </div>

            {/* Internal Topic Badges (10 Links) */}
            <div className="my-8 pt-6 border-t border-slate-200">
              <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                Related Debt Resolution &amp; Legal Protection Guides
              </h4>
              <div className="flex flex-wrap gap-2">
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
                  Bank One Time Settlement Policy
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Can I Go to Jail for Loan Default
                </Link>
                <Link
                  href="/how-to-settle-credit-card-debt"
                  className="py-1.5 px-3 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  How to Settle Credit Card Debt
                </Link>
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-1.5 px-3 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Lok Adalat Notice for Personal Loan
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
                  Loan Settlement vs Consolidation
                </Link>
                <Link
                  href="/instant-app-loan-settlement"
                  className="py-1.5 px-3 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Instant App Loan Settlement
                </Link>
                <Link
                  href="/hdfc-personal-loan-settlement"
                  className="py-1.5 px-3 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  HDFC Personal Loan Settlement
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
                  <div className="font-bold text-slate-900 text-sm leading-tight">
                    <Link
                      href="/authors/ashish-jhangra"
                      className="hover:text-[#1F5EFF] transition-colors"
                    >
                      Ashish Jhangra
                    </Link>
                  </div>
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
              <div className="text-lg font-black mb-2 leading-tight">
                Facing Recovery Threats or False Blacklist Claims?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-4">
                Speak with an empaneled SettleLoans advocate to stop illegal harassment, audit your CIBIL report, and structure a lawful settlement.
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
              <div className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1F5EFF]" />
                <span>Why Borrowers Trust SettleLoans</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Legal Protection:</strong> Formal legal notices served to banks under RBI Fair Practices Codes.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Shield:</strong> Direct protection against illegal third-party recovery agent calls and visits.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct Bank Sanctions:</strong> All OTS sanction letters verified on official bank letterheads with ₹0 NDC guarantee.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Transparent Ethics:</strong> Zero false promises, zero upfront surprises, dedicated to restoring financial dignity.
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
