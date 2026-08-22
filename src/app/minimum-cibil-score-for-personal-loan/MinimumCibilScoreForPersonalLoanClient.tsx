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

export default function MinimumCibilScoreForPersonalLoanClient() {
  const [activeId, setActiveId] = useState<string>('cibil-score-thresholds');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'cibil-score-thresholds', title: '1. CIBIL Thresholds for Personal Loans' },
    { id: 'bank-wise-cutoffs', title: '2. Bank vs NBFC Minimum Cutoff Matrix' },
    { id: 'foir-and-underwriting', title: '3. Hidden Underwriting: FOIR & DPD Strings' },
    { id: 'why-loans-get-rejected', title: '4. Why Banks Reject Scores Below 750' },
    { id: 'loans-at-550-650-myth', title: '5. Personal Loans at 550–650: Reality' },
    { id: 'predatory-apps-trap', title: '6. Predatory Loan Apps & Harassment' },
    { id: 'forensic-credit-audit', title: '7. Auditing Default, Settled & DPD Tags' },
    { id: 'debt-settlement-solution', title: '8. Debt Settlement (OTS) for Rejection Relief' },
    { id: 'score-rebuilding-plan', title: '9. 18-Month Rebuild Plan to Reach 750+' },
    { id: 'faqs', title: '10. Frequently Asked Questions' },
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
      question: "What is the absolute minimum CIBIL score required for a personal loan in India?",
      answer: (
        <p>
          For premier public and private sector banks such as SBI, HDFC, ICICI, and Axis Bank, the standard minimum CIBIL score cutoff for unsecured personal loans is <strong>750</strong>. While select Non-Banking Financial Companies (NBFCs) and fintech lenders evaluate applicants with scores between 650 and 700, applicants below 650 face near-universal rejections or punitive interest rates exceeding 24% to 36% per annum.
        </p>
      )
    },
    {
      question: "Can I get an unsecured personal loan with a CIBIL score of 550 to 600?",
      answer: (
        <p>
          Securing an unsecured personal loan from mainstream regulated banks with a CIBIL score below 600 is statistically improbable. Scores under 600 signify serious historical delinquency, active loan defaults, or settled account remarks. Applicants in this tier must focus on resolving legacy defaults through legal debt settlement, obtaining a No Dues Certificate, and rebuilding their score to 750+ using secured credit instruments.
        </p>
      )
    },
    {
      question: "Why do banks reject personal loans even if income is high when CIBIL is low?",
      answer: (
        <p>
          Personal loans are 100% unsecured facilities backed by zero physical collateral. Under RBI risk-weighted asset norms, a low CIBIL score indicates high probability of default (PD). Even with high monthly income, banks mandate minimum credit scores to control non-performing asset (NPA) provisioning requirements and verify disciplined financial management.
        </p>
      )
    },
    {
      question: "How does Fixed Obligation to Income Ratio (FOIR) affect personal loan eligibility alongside CIBIL?",
      answer: (
        <p>
          FOIR measures the percentage of your net monthly income committed toward existing EMIs and credit card minimum payments. Most institutional lenders cap permissible FOIR at <strong>40% to 50%</strong>. If your FOIR exceeds 50%, lenders will reject your personal loan application even if your CIBIL score is above 750 due to over-leveraged repayment capacity.
        </p>
      )
    },
    {
      question: "What are the hidden risks of taking loans from instant lending apps with low credit scores?",
      answer: (
        <p>
          Unregistered instant loan apps targeting low-score borrowers frequently engage in predatory lending, imposing exorbitant processing fees of 20% to 30%, annualized interest rates exceeding 60% to 120%, and unauthorized access to personal phone contacts leading to aggressive harassment and privacy violations in violation of RBI Digital Lending Guidelines.
        </p>
      )
    },
    {
      question: "How does a past 'Settled' or 'Written-Off' remark impact future personal loan applications?",
      answer: (
        <p>
          A <strong>&quot;Settled&quot;</strong> or <strong>&quot;Written-Off&quot;</strong> tag on a Credit Information Report indicates that a previous lender suffered a financial loss through a negotiated compromise or uncollected debt. Automated bank algorithms flag these records as high credit risk, leading to immediate algorithmic rejection until the borrower actively reconstructs their credit profile.
        </p>
      )
    },
    {
      question: "How does negotiating a One-Time Settlement (OTS) help rejected loan applicants?",
      answer: (
        <p>
          When stuck with delinquent, mounting debts that cause continuous loan rejections, executing a formal OTS with advocate representation caps financial liability, eliminates escalating penal interest, stops recovery harassment, and secures an official <strong>No Dues Certificate (NDC)</strong> to halt ongoing negative DPD reporting.
        </p>
      )
    },
    {
      question: "How long does it take to rebuild a CIBIL score from 550 to 750+ after loan settlement?",
      answer: (
        <p>
          With a disciplined credit repair roadmap—including clearing outstanding overdue balances, adopting a secured Fixed Deposit credit card, maintaining credit utilization below 25%, and eliminating hard inquiries—borrowers can systematically rebuild their score from 550 to 750+ within <strong>18 to 24 months</strong>.
        </p>
      )
    },
    {
      question: "How many CIBIL points are deducted when a personal loan is rejected?",
      answer: (
        <p>
          The rejection itself is not recorded as a specific negative event in your CIBIL report. However, the associated &quot;hard inquiry&quot; generated by the lender during underwriting reduces your score by <strong>5 to 10 points</strong>. Submitting multiple speculative applications in rapid succession creates a flurry of hard inquiries that severely degrades your credit score.
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
            Underwriting Standards &amp; Credit Rebuild Guide
          </div>

          {/* Compact Title / H1 */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            Minimum CIBIL Score for Personal Loan:{' '}
            <span className="text-[#3b82f6] md:text-[#60a5fa]">Cutoffs, Rejection Causes &amp; Solutions</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Facing an unexpected personal loan rejection? Discover institutional CIBIL cutoffs across Indian banks, understand actuarial risk models, and explore legal pathways to restore your financial standing.
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
              <span>Verified by Banking &amp; Legal Specialists</span>
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
              <span>Request Free Credit Audit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#cibil-score-thresholds"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 text-xs sm:text-sm"
            >
              <BookOpen className="w-4 h-4 text-blue-300" />
              <span>Explore Cutoff Matrix</span>
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
                Mainstream banks enforce a 750 CIBIL cutoff for personal loans. Scores below 650 lead to automated rejection. Instead of taking high-interest predatory app loans, resolve past dues through legal debt settlement and rebuild toward 750+.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="min-w-0 blog-content">
            
            {/* Section 1: Understanding CIBIL Score Thresholds */}
            <section id="cibil-score-thresholds" className="scroll-mt-28 mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                1. Understanding CIBIL Score Thresholds: How Institutional Underwriting Models Function
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                In the Indian retail banking ecosystem, an unsecured personal loan represents the highest-risk credit product in a commercial lender&apos;s portfolio. Because personal loans require zero collateral, hypothecation, or asset pledging, credit institutions rely almost entirely on algorithmic risk assessment engines. At the center of this underwriting architecture sits the TransUnion CIBIL score—a three-digit numerical summary ranging between 300 and 900 that quantifies a borrower&apos;s statistical Probability of Default (PD).
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                When an applicant submits an online loan application, the lending system queries the credit bureau via an automated API call. The resulting Credit Information Report (CIR) is parsed by the bank&apos;s credit policy engine. While scores between 750 and 900 are classified as &quot;Prime&quot; and receive instant approval with preferential interest rates, applicants falling below the 750 benchmark encounter steep friction, manual credit underwriter interventions, or immediate algorithmic rejection.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Understanding where your credit score sits along the institutional risk curve is critical for diagnosing why a past application was turned down and charting an effective path toward financial recovery. The following breakdown illustrates the five standardized scoring tiers utilized across major Indian financial institutions:
              </p>

              {/* 4-Sided Bordered Comparison Table: Score Tiers */}
              <div className="my-6">
                <div className="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th>CIBIL Score Tier</th>
                        <th>Credit Risk Classification</th>
                        <th>Standard Approval Probability</th>
                        <th>Indicative Interest Rate Band</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-bold text-emerald-700">750 – 900</td>
                        <td>Prime / Low Risk</td>
                        <td className="font-semibold text-emerald-600">Very High (90%+)</td>
                        <td>10.50% – 13.50% p.a.</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-blue-700">700 – 749</td>
                        <td>Near-Prime / Moderate Risk</td>
                        <td className="font-semibold text-blue-600">Moderate (60% – 75%)</td>
                        <td>13.50% – 17.00% p.a.</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-amber-700">650 – 699</td>
                        <td>Sub-Prime / Elevated Risk</td>
                        <td className="font-semibold text-amber-600">Low to Selective (30% – 45%)</td>
                        <td>18.00% – 24.00% p.a.</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-orange-700">550 – 649</td>
                        <td>High Risk / Impaired Credit</td>
                        <td className="font-semibold text-orange-600">Very Low (&lt; 15%)</td>
                        <td>24.00% – 36.00% p.a. (NBFCs only)</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-red-700">300 – 549</td>
                        <td>Severe Default / Distressed</td>
                        <td className="font-semibold text-red-600">Universal Rejection (0%)</td>
                        <td>Ineligible for Unsecured Credit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 2: Bank vs NBFC Minimum Cutoff Matrix */}
            <section id="bank-wise-cutoffs" className="scroll-mt-28 mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                2. Bank vs. NBFC Minimum CIBIL Score Cutoffs: Institutional Underwriting Matrix
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Institutional credit policies vary substantially between Tier-1 commercial banks, public sector banking institutions, and Non-Banking Financial Companies (NBFCs). Tier-1 private and public banks operate under stringent capital adequacy requirements and aggressive low-risk mandates governed by the Reserve Bank of India. Consequently, these institutions maintain unyielding CIBIL cutoffs of 750 and above for unsecured personal loans.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                In contrast, specialized NBFCs and digital fintech platforms employ alternative credit scoring algorithms that factor in auxiliary data points—such as bank statement cash flows, employer tier classifications, and utility transaction consistency. However, this flexibility comes at a severe price: NBFCs compensate for taking on sub-prime borrowers by charging punitive interest rates, inflated processing fees, and stringent prepayment penalties.
              </p>

              {/* 4-Sided Bordered Comparison Table: Bank-Wise Cutoffs */}
              <div className="my-6">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Institutional CIBIL Cutoffs &amp; Underwriting Criteria (2026)
                </h3>
                <div className="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th>Lending Institution</th>
                        <th>Minimum CIBIL Cutoff</th>
                        <th>Mandatory Income Requirement</th>
                        <th>Primary Rejection Triggers</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-bold text-slate-900">State Bank of India (SBI)</td>
                        <td className="font-semibold text-emerald-700">750+</td>
                        <td>₹15,000 – ₹25,000 / month</td>
                        <td>Any DPD &gt; 30 in last 12 months; unclosed settled accounts.</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">HDFC Bank</td>
                        <td className="font-semibold text-emerald-700">750+</td>
                        <td>₹25,000 – ₹50,000 / month</td>
                        <td>Score below 750; FOIR exceeding 50%; multiple recent hard inquiries.</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">ICICI Bank</td>
                        <td className="font-semibold text-emerald-700">750+</td>
                        <td>₹30,000 / month</td>
                        <td>Past &quot;Written-Off&quot; status; unserviced credit card dues.</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Axis Bank</td>
                        <td className="font-semibold text-emerald-700">750+</td>
                        <td>₹25,000 / month</td>
                        <td>DPD entries &gt; 000 in past 24 months; high credit utilization (&gt; 40%).</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Bajaj Finance (NBFC)</td>
                        <td className="font-semibold text-blue-700">700 – 720</td>
                        <td>₹25,000 / month</td>
                        <td>Active SMA-1 or SMA-2 classification; ongoing collection disputes.</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Tata Capital / Poonawalla</td>
                        <td className="font-semibold text-amber-700">675 – 700</td>
                        <td>₹20,000 / month</td>
                        <td>Unresolved cheque bounces (Section 138); high leverage ratio.</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Fintech Lenders (KreditBee, Navi)</td>
                        <td className="font-semibold text-orange-700">650</td>
                        <td>₹15,000 / month</td>
                        <td>Negative bank balance remarks; active NACH mandate bounces.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 3: Hidden Underwriting Criteria: FOIR & DPD Strings */}
            <section id="foir-and-underwriting" className="scroll-mt-28 mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                3. The Hidden Underwriting Criteria: FOIR, DTI Ratios &amp; DPD Repayment Strings
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                A frequent source of bewilderment among loan applicants is receiving an outright loan rejection despite possessing a CIBIL score of 760 or higher. The explanation lies in multi-dimensional underwriting models. A three-digit credit score is merely the initial qualification gate; credit underwriters evaluate two additional technical metrics before sanctioning unsecured funds: the <strong>Fixed Obligation to Income Ratio (FOIR)</strong> and historical <strong>Days Past Due (DPD)</strong> payment strings.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                FOIR calculates the aggregate percentage of an applicant&apos;s net monthly salary that is already committed toward existing loan EMIs, credit card minimum due payments, and other recurring statutory debts. Under standard banking guidelines, the maximum permissible FOIR threshold is strictly capped:
              </p>

              {/* Statutory Callout Box: FOIR Formula */}
              <div className="bg-slate-50 border-l-4 border-[#1F5EFF] rounded-r-2xl p-5 my-6">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1">
                  <Scale className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The Banking Actuarial FOIR Mathematical Formula</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-mono bg-white p-3 rounded-lg border border-slate-200 my-2">
                  FOIR (%) = [ Total Existing Monthly Debt EMIs + Proposed Loan EMI ] / [ Net Verified Monthly Take-Home Salary ] × 100
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  If an individual earns ₹80,000 net monthly and pays ₹42,000 in existing car and home loan EMIs, their current FOIR is 52.5%. Any new personal loan application will be automatically rejected on leverage capacity grounds, regardless of an exceptional 780 CIBIL score.
                </p>
              </div>

              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Simultaneously, underwriters conduct forensic audits of the 36-month DPD grid inside your Credit Information Report. If the grid contains numerical entries such as &quot;030&quot;, &quot;060&quot;, or &quot;090&quot; within the preceding 12 months, underwriting engines flag the profile as experiencing active financial stress, prompting immediate rejection.
              </p>
            </section>

            {/* Section 4: Why Banks Reject Scores Below 750 */}
            <section id="why-loans-get-rejected" className="scroll-mt-28 mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                4. Why Personal Loans Get Rejected Below 750: Asset Classification &amp; RBI Provisioning
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                To understand why banks enforce strict cutoffs, one must look at commercial banking balance sheet mechanics. Under Reserve Bank of India Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP), banks are legally mandated to set aside capital reserves (provisions) against potential loan losses.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                When a bank lends to a prime borrower (750+ CIBIL), the regulatory provisioning requirement is minimal (typically 0.40% for standard assets). However, when lending to sub-prime applicants, actuarial models predict higher delinquency transitions into Non-Performing Assets (NPAs). Once a loan defaults past 90 DPD, the bank must provision 15% to 100% of the loan amount from its operating profits, eroding corporate profitability.
              </p>

              {/* 4-Sided Bordered Comparison Table: RBI Provisioning Impact */}
              <div className="my-6">
                <div className="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th>Borrower Credit Profile</th>
                        <th>Delinquency Risk Rating</th>
                        <th>Bank Provisioning Burden</th>
                        <th>Lender Underwriting Response</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-bold text-emerald-700">Score 750 – 900</td>
                        <td>Standard Asset (0.5% – 1% Default Probability)</td>
                        <td>0.40% Standard Capital Provision</td>
                        <td>Instant Digital Approval; Unsecured Sanctions up to ₹25–40 Lakhs.</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-amber-700">Score 650 – 749</td>
                        <td>Elevated Risk (4% – 8% Default Probability)</td>
                        <td>Higher Internal Risk-Weighted Buffer</td>
                        <td>Requires Co-Applicant, Income Verification, Lower Sanctioned Limits.</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-red-700">Score Below 650</td>
                        <td>High NPA Potential (18%+ Default Probability)</td>
                        <td>15% to 100% Stressed Provisioning Threat</td>
                        <td>Automated Hard Rejection; Unsecured Lending Completely Prohibited.</td>
                      </tr>
                    </tbody>
                  </table>
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
                      Minimum CIBIL Score &amp; Credit Rebuild Blueprint
                    </h3>
                  </div>
                </div>
                <a
                  href="/images/infographics/minimum-cibil-score-for-personal-loan.jpg"
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
                    src="/images/infographics/minimum-cibil-score-for-personal-loan.jpg"
                    alt="Minimum CIBIL Score for Personal Loan Summary Infographic"
                    className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Quick Crux Footer Strip */}
              <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span><strong>Key Takeaway:</strong> Institutional lenders mandate 750+ CIBIL. If rejected, stop applying randomly, audit negative tags, and execute legal debt settlement.</span>
                </div>
                <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                  Get Free Case Evaluation &rarr;
                </Link>
              </div>
            </div>

            {/* Section 5: The Myth of Unsecured Loans at 550-650 */}
            <section id="loans-at-550-650-myth" className="scroll-mt-28 mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                5. The Reality of Personal Loans at 550–650: Risk-Based Pricing &amp; Compounding Traps
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                A common marketing promise across digital media claims that distressed borrowers can easily secure &quot;Guaranteed Personal Loans with 550 CIBIL Score.&quot; As institutional debt settlement strategists, SettleLoans advises extreme caution. In commercial banking reality, genuine unsecured personal loans at competitive rates do not exist for credit profiles below 600.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                When unregulated intermediaries or peripheral lending entities offer loans to individuals in the 550–650 range, they deploy an aggressive mechanism known as <strong>Risk-Based Pricing (RBP)</strong>. The lender prices the extreme probability of default directly into the contract through exorbitant interest rates ranging from 28% to 42% per annum, steep upfront processing deductions of 5% to 10%, and severe daily bounce penalties.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Taking a high-interest unsecured loan to service existing overdue debts inevitably triggers a catastrophic debt spiral. Borrowers quickly find themselves allocating 80% or more of their monthly earnings toward penal interest, resulting in inevitable default, asset attachment risks, and total credit ruin.
              </p>
            </section>

            {/* Section 6: Predatory Loan Apps Trap */}
            <section id="predatory-apps-trap" className="scroll-mt-28 mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                6. The Trap of Predatory Digital Loan Apps: Regulatory Violations &amp; Coercive Tactics
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                When rejected by legitimate commercial banks due to a low CIBIL score, desperate borrowers frequently fall prey to predatory instant loan apps operating across digital app stores and social messaging channels. These entities specifically target distressed borrowers with deceptive slogans promising &quot;No CIBIL Check Required&quot; and &quot;Instant Disbursal in 5 Minutes.&quot;
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                These entities routinely violate the <strong>Reserve Bank of India Guidelines on Digital Lending (2022)</strong>. Rather than providing standard 12-to-60 month repayment tenures, they disburse micro-loans with 7-to-15 day repayment cycles. The borrower receives only 60% to 70% of the sanctioned principal after deducting massive upfront processing charges, while being billed for the full amount plus 100%+ annualized interest.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Upon inevitable default, these entities deploy illegal collection practices: harvesting personal contacts, sending defamatory messages to family members, and threatening public humiliation. Borrowers must understand that borrowing from unverified digital platforms never repairs a low CIBIL score; it exacerbates financial distress and legal exposure.
              </p>
            </section>

            {/* Section 7: Forensic Credit Diagnostics */}
            <section id="forensic-credit-audit" className="scroll-mt-28 mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                7. Forensic Credit Diagnostics: Auditing Settled, Written-Off &amp; Overdue Tags
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                If your loan application was rejected, the immediate strategic priority is not to apply at another bank, but to conduct a rigorous forensic audit of your official Credit Information Report. Each speculative application generates a &quot;Hard Inquiry&quot; that penalizes your CIBIL score by 5 to 10 points. Submitting multiple applications within days signals desperate credit-seeking behavior to automated underwriting models.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                When auditing your credit file from TransUnion CIBIL or Experian, examine the <strong>Account Information</strong> section for specific adverse reporting tags that trigger instant algorithmic rejection:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-0.5">Active DPD Strings (030, 060, 090+)</h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Indicates live, rolling payment delays on existing credit cards or active loans. Lenders reject any new credit until all active overdue amounts are regularized.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-0.5">Written-Off / Loss Asset Status</h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Signifies that a previous lender deemed the debt uncollectible after 180+ days of delinquency. The lender retains full legal recovery rights, preventing any new bank approval.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-0.5">Settled Account Remark</h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Indicates that a prior loan was closed via a negotiated compromise where the bank waived part of the principal or interest. Automated algorithms flag this loss event.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-0.5">Erroneous Reporting / Bureau Desynchronization</h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Clerical errors where a fully repaid loan continues to display an open balance. Under Section 21 of CICRA 2005, borrowers can file statutory disputes to expunge false entries within 30 days.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Legal Debt Settlement (OTS) Solution */}
            <section id="debt-settlement-solution" className="scroll-mt-28 mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                8. Strategic Debt Settlement (OTS): The Lawful Catalyst for Credit Reconstruction
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                For borrowers trapped with multiple delinquent personal loans, mounting penal interest, and relentless recovery agent harassment, continuing to service unmanageable minimum payments is mathematically unsustainable. The most effective, lawful solution to resolve financial distress is executing a formal <strong>One-Time Settlement (OTS)</strong> under Reserve Bank of India compromise frameworks.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Under RBI Master Directions, all commercial banks and NBFCs maintain board-approved OTS policies allowing distressed borrowers facing genuine financial hardship (such as job loss, critical medical illness, or business failure) to settle outstanding dues for a negotiated discounted lump sum. The bank calculates the Net Present Value (NPV) of immediate recovery versus prolonged litigation costs, frequently waiving 100% of accumulated penal interest and 40% to 65% of outstanding principal dues.
              </p>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Engaging legal advocates from SettleLoans ensures your rights are protected throughout the OTS negotiation. Our advocates serve formal legal notices under the RBI Fair Practices Code, halt unlawful recovery harassment, negotiate directly with authorized bank settlement committees, and secure a binding <strong>No Dues Certificate (NDC)</strong> confirming complete legal discharge of your loan obligations.
              </p>
            </section>

            {/* Section 9: 18-Month Score Rebuilding Roadmap */}
            <section id="score-rebuilding-plan" className="scroll-mt-28 mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                9. The 18–24 Month Score Rebound Blueprint: Proven Steps to Rebuild 750+ CIBIL
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                A past loan settlement or default does not permanently end your credit future. Credit scoring algorithms operate on rolling mathematical weighting models: recent financial discipline over the preceding 12 to 24 months carries significantly higher scoring weight than historical delinquencies. By executing a structured score reconstruction plan, borrowers can systematically restore their CIBIL score from sub-550 levels back to 750+ prime status:
              </p>

              {/* 4-Sided Bordered Comparison Table: Recovery Timeline */}
              <div className="my-6">
                <div className="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th>Rebuilding Phase</th>
                        <th>Core Milestone Actions</th>
                        <th>Recommended Financial Instrument</th>
                        <th>Target CIBIL Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-bold text-slate-900">Phase 1 (Months 1–3)</td>
                        <td>Obtain official NDC; verify ₹0 outstanding balance across all 4 bureaus; halt all hard loan inquiries.</td>
                        <td>Secured Fixed Deposit Credit Card (FD backing ₹25,000 – ₹50,000)</td>
                        <td className="font-bold text-amber-600">550 – 620</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Phase 2 (Months 4–12)</td>
                        <td>Maintain Credit Utilization Ratio strictly below 25%; automate 100% on-time full statement payments.</td>
                        <td>Secured Card with Daily Micro-Transactions &amp; Utility Autopay</td>
                        <td className="font-bold text-[#1F5EFF]">640 – 710</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Phase 3 (Months 13–18)</td>
                        <td>Introduce a small consumer installment loan to create healthy credit mix; eliminate all DPD strings.</td>
                        <td>Small Consumer Durable / 2-Wheeler Loan with Perfect Repayment</td>
                        <td className="font-bold text-emerald-600">720 – 745</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Phase 4 (Months 19–24+)</td>
                        <td>Achieve institutional prime borrower status; qualify for standard unsecured cards and home loans.</td>
                        <td>Standard Unsecured Prime Credit Lines &amp; Bank Loans</td>
                        <td className="font-bold text-emerald-700">750 – 800+ (Prime)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Three Golden Rules of Score Rebuilding */}
              <div className="space-y-3 my-6">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">
                    Rule 1: Keep Credit Utilization Ratio (CUR) Strictly Below 30%
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If your secured credit card has a limit of ₹50,000, keep monthly spending capped under ₹15,000. Utilizing more than 30% of your sanctioned credit limit signals credit hunger to scoring algorithms and suppresses score growth.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">
                    Rule 2: Eliminate Hard Credit Inquiries
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Do not submit speculative loan applications across multiple bank websites or fintech portals. Each hard inquiry deducts 5 to 10 points and flags credit desperation. Pull your own report as a &quot;soft inquiry&quot; with zero score impact.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">
                    Rule 3: Upgrade &quot;Settled&quot; to &quot;Closed&quot; When Liquidity Permits
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If your financial circumstances improve down the road, you can approach the original lender to repay the waived balance from your OTS. The bank will issue a revised No Dues Certificate and update your credit bureau remark from &quot;Settled&quot; to &quot;Closed.&quot;
                  </p>
                </div>
              </div>
            </section>

            {/* Company Section Placement (Before FAQ) */}
            <CompanySection />

            {/* Section 10: Frequently Asked Questions */}
            <section id="faqs" className="scroll-mt-28 mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                10. Frequently Asked Questions (FAQ)
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-6 text-slate-600">
                Authoritative answers to the most urgent questions regarding minimum CIBIL score requirements, loan rejection causes, and credit reconstruction in India.
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
                    Reserve Bank of India (RBI) — Master Directives on Compromise Settlements &amp; Prudential Norms
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
                    Supreme Court of India — Landmark Judgments on Fair Debt Recovery &amp; Borrower Privacy Rights
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
                  href="/check-cibil-defaulter-list"
                  className="py-1.5 px-3 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Check CIBIL Defaulter List
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Bank One Time Settlement Policy
                </Link>
                <Link
                  href="/cibil-dispute-wrong-overdue-entry"
                  className="py-1.5 px-3 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  CIBIL Dispute Wrong Overdue Entry
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
                  href="/remove-settled-status-from-cibil"
                  className="py-1.5 px-3 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Remove Settled Status From CIBIL
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
                Rejected for a Personal Loan Due to Low CIBIL?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed mb-4">
                Speak with an empaneled SettleLoans advocate to stop illegal harassment, audit your CIBIL report, and structure a lawful debt settlement.
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
