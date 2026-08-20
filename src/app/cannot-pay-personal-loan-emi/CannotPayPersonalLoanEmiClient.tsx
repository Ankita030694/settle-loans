'use client';
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  AlertTriangle,
  Clock,
  ArrowRight,
  ChevronDown,
  Calendar,
  Award,
  PhoneCall,
  ExternalLink,
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
  TrendingDown,
  AlertCircle,
  Gavel,
  BadgeAlert,
  UserCheck,
  CheckCircle
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

export default function CannotPayPersonalLoanEmiClient() {
  const [activeId, setActiveId] = useState<string>('emergency-triage');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'emergency-triage', title: '1. 24-Hour Crisis Triage' },
    { id: 'default-myths-vs-reality', title: '2. Legal Myths vs. Reality' },
    { id: 'bank-recovery-timeline', title: '3. 30-to-180 Day Chronology' },
    { id: 'relief-options-matrix', title: '4. Moratorium & Restructuring' },
    { id: 'anti-harassment-rights', title: '5. Stop Recovery Harassment' },
    { id: 'ots-settlement-playbook', title: '6. One-Time Settlement (OTS)' },
    { id: 'cibil-rebuilding-blueprint', title: '7. Rebuild CIBIL to 750+' },
    { id: 'statutory-legal-framework', title: '8. Legal Rights & Statutes' },
    { id: 'faqs', title: '9. Frequently Asked Questions' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const headings = tocItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 220;

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
      question: "I cannot pay my personal loan EMI next month. What is the very first step I should take?",
      answer: (
        <p>
          <strong>Do not panic and do not take high-interest instant loan apps or credit card cash advances to roll over the debt.</strong> Your immediate first step is to protect your essential household survival funds (rent, food, medicine). Then, send a formal written <strong>Hardship Intimation Letter</strong> to your bank&apos;s Branch Manager and Nodal Officer before the EMI presentation date. Explain your genuine financial hardship (job layoff, medical emergency, business loss) with documentary proof and request an immediate restructuring, tenure extension, or temporary moratorium.
        </p>
      )
    },
    {
      question: "Can the police arrest me if I cannot pay my personal loan EMI in India?",
      answer: (
        <p>
          <strong>No. Inability to pay an unsecured personal loan is strictly a civil dispute (breach of contract), not a criminal offence under Indian law.</strong> The police have zero jurisdiction to intervene in loan recovery, summon you to a police station, or arrest you for default. Criminal provisions only apply if you submitted forged documents or committed intentional fraud. If a bank initiates cheque bounce proceedings under Section 138 of the Negotiable Instruments Act, it is a bailable magistrate court proceeding, not an instant police arrest.
        </p>
      )
    },
    {
      question: "What actually happens when a personal loan EMI bounces?",
      answer: (
        <p>
          When your account lacks sufficient funds on the EMI presentation date: 1) Your bank levies an ECS/NACH bounce fee ranging from <strong>₹450 to ₹1,000 + GST</strong>; 2) The lender imposes penal interest (often 24% to 36% p.a. on the overdue component); 3) The lender reports a <strong>30+ Days Past Due (DPD)</strong> tag to CIBIL, causing a temporary 40–70 point score dip; 4) The bank initiates automated SMS reminders and calls from their internal soft-collection team.
        </p>
      )
    },
    {
      question: "What are my legal rights if recovery agents harass me or my family?",
      answer: (
        <p>
          Under the <strong>RBI Master Circular on Recovery Agents</strong> and Supreme Court directives in <em>ICICI Bank vs. Prakash Kaur</em>: Recovery agents can ONLY call between 8:00 AM and 7:00 PM; they must carry formal bank identification and authorization letters; they are strictly forbidden from contacting your relatives, friends, or employer; and they cannot use abusive language or make unannounced home visits to humiliate you. You can file an instant grievance on the <strong>RBI CMS portal (cms.rbi.org.in)</strong> and lodge a police complaint under IPC Sections 503/506 for criminal intimidation.
        </p>
      )
    },
    {
      question: "Can the bank seize my house, car, or salary for an unpaid personal loan?",
      answer: (
        <p>
          <strong>No. Personal loans are 100% unsecured credit facilities.</strong> There is no underlying collateral or hypothecated asset. The <strong>SARFAESI Act, 2002</strong> applies exclusively to secured loans (like mortgages and auto loans) and cannot be invoked for personal loans. The bank cannot seize your property or attach your salary without filing a civil recovery suit (Summary Suit under Order 37 CPC) and winning a formal execution decree from a civil court, a process that takes several years.
        </p>
      )
    },
    {
      question: "What is the difference between loan restructuring and a One-Time Settlement (OTS)?",
      answer: (
        <p>
          <strong>Loan Restructuring</strong> alters the loan repayment schedule (e.g., stretching a 36-month loan into 60 months or offering a 6-month EMI moratorium) to reduce your monthly cash outflow. You still pay 100% of the principal and accrued interest, and your CIBIL reflects &quot;Restructured&quot;. <strong>One-Time Settlement (OTS)</strong> is a compromise agreement where the lender accepts a discounted lump sum (typically 40% to 60% of total outstanding dues) to permanently close the account, forgiving the residual balance. The CIBIL status is marked as &quot;Settled&quot; with a zero balance.
        </p>
      )
    },
    {
      question: "When is the best time to negotiate a One-Time Settlement (OTS) with the bank?",
      answer: (
        <p>
          The optimal window for a favorable OTS negotiation begins after the loan has been classified as a <strong>Non-Performing Asset (NPA) for 90 to 180 days</strong>. At this stage, banks have already made mandatory provisioning in their balance sheets under RBI prudential norms and are eager to recover a substantial portion of the principal rather than incurring prolonged legal expenses.
        </p>
      )
    },
    {
      question: "Can I settle my overdue personal loan during a National Lok Adalat?",
      answer: (
        <p>
          <strong>Yes. National Lok Adalats organized by NALSA are among the most advantageous forums for settling personal loan disputes.</strong> In Lok Adalats, banks offer significant waivers on penal interest and legal costs before a judicial officer. Any settlement award signed in Lok Adalat has the force of a final civil court decree that cannot be appealed or reopened by the bank.
        </p>
      )
    },
    {
      question: "What mandatory documents must I collect from the bank after settlement?",
      answer: (
        <p>
          You must never make a settlement payment without first receiving a formal <strong>OTS Sanction Letter</strong> issued on the bank&apos;s official letterhead stating your loan account number, settlement amount, and payment schedule. Within 15 to 30 days following payment, you must collect the official <strong>No Dues Certificate (NDC) / Closure Certificate</strong> confirming that no further claims exist and instructing credit bureaus to update the balance to ₹0.
        </p>
      )
    },
    {
      question: "How can I rebuild my CIBIL score back to 750+ after loan settlement?",
      answer: (
        <p>
          Rebuilding your CIBIL score from sub-600 to 750+ takes 18 to 24 months of structured credit discipline: 1) Secure a Fixed Deposit (FD)-backed credit card (e.g., IDFC FIRST WOW or Kotak 811); 2) Utilize less than 25% of the credit limit monthly; 3) Automate 100% on-time bill payments; 4) Avoid applying for unsecured loans for 12 months; 5) Verify via credit bureau portals that your settled account displays ₹0 outstanding balance.
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

      {/* A. Editorial Hero Section - Custom Charcoal (#2D313D) Theme */}
      <section className="w-full bg-[#2D313D] border-b border-slate-700/60 pt-8 pb-7 md:pt-12 md:pb-9 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-[#1F5EFF]/20 border border-[#1F5EFF]/40 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#60A5FA]" />
            Emergency Debt Crisis &amp; Legal Protection Guide
          </div>

          {/* H1 Headline - Compact Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            I Cannot Pay My Personal Loan EMI:{' '}
            <span className="text-[#60A5FA]">What Should I Do? (Immediate 2026 Relief Plan)</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Facing job loss, income shock, or a medical crisis? Defaulting on an unsecured personal loan is NOT a criminal offence. Follow this 24-hour crisis blueprint to halt recovery harassment, invoke RBI protections, and resolve debt legally.
          </p>

          {/* Author & Review Meta Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs text-slate-400 mb-5 pb-3 border-b border-slate-700/60 max-w-xl mx-auto">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-[9px]">
                AJ
              </div>
              <span>
                Written by{' '}
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
              <span>Reviewed by SettleLoans Legal Advisory Team</span>
            </div>
            <div className="hidden sm:block text-slate-500">•</div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-300" />
              <span>Updated: August 19, 2026</span>
            </div>
          </div>

          {/* Primary Hero CTA */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-5 rounded-xl shadow-md hover:shadow-blue-500/20 transition-all duration-300 text-xs sm:text-sm group"
            >
              <span>Get Free Emergency Debt Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#emergency-triage"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold py-2.5 px-4 rounded-xl border border-white/20 transition-all duration-300 text-xs sm:text-sm"
            >
              <BookOpen className="w-4 h-4 text-blue-300" />
              <span>Read 24-Hour Emergency Protocol</span>
            </a>
          </div>
        </div>
      </section>

      {/* B. Animated Stats Strip */}
      <StatsStrip />

      {/* C. Three-Column Main Body Grid */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          {/* Left Column (Sticky TOC Only) */}
          <aside className="hidden lg:block sticky top-24 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 xl:p-5 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900 font-black text-sm uppercase tracking-wider mb-4 pb-2 border-b border-slate-200">
                <BookOpen className="w-4 h-4 text-[#1F5EFF]" />
                <span>Crisis Navigation</span>
              </div>
              <nav className="space-y-1.5">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`text-xs md:text-sm block py-1.5 px-3 rounded-lg transition-all duration-200 leading-snug ${
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
          </aside>

          {/* Middle Column (Main Content) */}
          <main className="w-full min-w-0 font-sans text-slate-800 blog-content">
            {/* Key Takeaways Box (Top) */}
            <div className="bg-blue-50 border-l-8 border-[#1F5EFF] rounded-r-2xl p-6 md:p-8 mb-10 shadow-sm">
              <div className="flex items-center gap-2 text-[#1F5EFF] font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5" />
                <span>CRITICAL FACTS FOR DISTRESSED BORROWERS</span>
              </div>
              <ul className="space-y-3 text-sm md:text-base text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero Criminal Liability:</strong> Defaulting on an unsecured personal loan is a <strong>civil breach of contract</strong>. Police cannot arrest you, seize your passport, or summon you for inability to repay.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>No Asset Seizure:</strong> Unsecured loans carry no asset charge. The <strong>SARFAESI Act does NOT apply</strong> to personal loans; lenders cannot confiscate your residential home or car without a multi-year civil court decree.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Strict Anti-Harassment Shield:</strong> Under the RBI Fair Practices Code, collection agents are barred from calling before 8 AM / after 7 PM, calling relatives/workplaces, or threatening public humiliation.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Restructuring &amp; Settlement Pathways:</strong> If you face proven financial distress, you can request a 3–6 month moratorium, tenure extension, or a formal <strong>One-Time Settlement (OTS) with a 40%–60% waiver</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Rebuilding Roadmap:</strong> A loan settlement sets your balance to ₹0 and enables a full credit score rebound to <strong>750+ within 18–24 months</strong> using secured credit instruments.
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 1: Immediate Emergency Triage */}
            <section id="emergency-triage" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                1. Immediate Emergency Triage: The 5 Things You Must Do in the Next 24 Hours
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                Finding yourself unable to pay an upcoming personal loan EMI triggers immense psychological panic. In this state of acute anxiety, borrowers frequently make catastrophic errors—such as borrowing from predatory 7-day Chinese loan apps, maxing out credit card cash advances, or ignoring phone calls until legal notices land. 
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Take a deep breath. Follow this structured 5-step emergency triage protocol immediately:
              </p>

              {/* Step by step cards */}
              <div className="space-y-4 my-6">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">1</span>
                    Stop the Debt Spiral: Freeze All New Borrowing Immediately
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Never take a fresh high-interest loan (especially peer-to-peer apps or instant NBFC micro-loans) to pay off an existing personal loan EMI. Rolling over debt at 36%–48% interest transforms a manageable ₹2 Lakh problem into an unpayable ₹10 Lakh catastrophe in 6 months.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">2</span>
                    Ring-Fence Essential Survival Funds
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Prioritize your hierarchy of expenses. Your family&apos;s food, house rent, children&apos;s school fees, utility bills, and critical medical insurance must always be protected before servicing unsecured loan EMIs. Banks cannot freeze your physical life.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">3</span>
                    Send a Written Hardship Intimation to the Lender Before the Due Date
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Proactive communication separates a genuine stressed borrower from a wilful defaulter. Send a registered email to your bank&apos;s customer care and Principal Nodal Officer stating your inability to pay next month&apos;s EMI due to verifiable hardship (e.g., termination letter, salary cut slip, hospital bills).
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">4</span>
                    Revoke NACH / e-Mandate or Maintain Separate Operating Accounts
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    When an EMI bounces, banks repeatedly attempt auto-debit sweeps, slapping ₹500–₹1,000 bounce fees on every attempt and wiping out whatever small savings you have left for groceries. Request an e-mandate cancellation or shift your essential survival cash to a separate bank account where you have no credit lines.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">5</span>
                    Engage an Empaneled Legal Debt Relief Advocate
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Engaging a legal debt advisory team like SettleLoans ensures all bank notices, Section 138/25 summons, and recovery agent communications are channeled through formal legal representation under the RBI Fair Practices Code.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Legal Myths vs Reality */}
            <section id="default-myths-vs-reality" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                2. Will You Go to Jail? Dispelling the 5 Biggest Myths About Loan Default in India
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Third-party recovery agencies routinely exploit borrowers&apos; legal ignorance to induce panic, threatening police raids, criminal FIRs, and instant asset forfeiture. Let us examine the statutory legal reality established under Indian law and Supreme Court jurisprudence:
              </p>

              {/* Comparison Table 1 */}
              <div className="my-8">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                  Legal Reality Check: Recovery Agent Threats vs. Actual Indian Law
                </h3>
                <div className="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th>Common Agent Threat</th>
                        <th>Legal Reality under Indian Law</th>
                        <th>Governing Statute / Court Precedent</th>
                        <th>Your Defense Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-bold text-rose-600">&quot;Police will arrest you tonight for EMI default&quot;</td>
                        <td><strong>False.</strong> Loan default is a civil breach of contract. Police have zero authority to arrest or summon you.</td>
                        <td>Civil Procedure Code (CPC 1908) &amp; Supreme Court guidelines</td>
                        <td>Demand the agent&apos;s ID; file an extortion FIR if threatened.</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-rose-600">&quot;We will seize your house, car, and furniture&quot;</td>
                        <td><strong>False.</strong> Personal loans are unsecured. SARFAESI Act only applies to pledged property.</td>
                        <td>SARFAESI Act 2002 (Secured Assets Only)</td>
                        <td>Remind the lender that no hypothecation or mortgage exists.</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-rose-600">&quot;We will visit your office and call your boss&quot;</td>
                        <td><strong>Illegal.</strong> Calling employers, friends, or relatives is a severe regulatory offense.</td>
                        <td>RBI Master Circular on Recovery Agents (2022/2023)</td>
                        <td>Lodge complaint on RBI CMS portal against the lender.</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-rose-600">&quot;Section 138 / Cheque bounce means instant jail&quot;</td>
                        <td><strong>Misleading.</strong> Sec 138 NI Act is bailable. You appear via counsel, furnish bail, and settle.</td>
                        <td>Negotiable Instruments Act, 1881 (Sec 138)</td>
                        <td>Engage an advocate to represent you in magistrate court.</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-rose-600">&quot;Your financial life is permanently over&quot;</td>
                        <td><strong>False.</strong> Settlement closes the debt with ₹0 balance. Score recovers to 750+ in 18–24 months.</td>
                        <td>CICRA Act 2005 &amp; Credit Bureau Rebuilding Models</td>
                        <td>Follow the structured 5-pillar credit rebuild plan.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 3: The 30-to-180-Day Timeline */}
            <section id="bank-recovery-timeline" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                3. The 30-to-180-Day Chronology: What Banks &amp; NBFCs Actually Do After a Missed EMI
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Understanding the bank&apos;s internal operational lifecycle removes the fear of the unknown. When you miss consecutive EMIs, your loan moves through strictly defined regulatory categories established by the Reserve Bank of India:
              </p>

              {/* Timeline cards */}
              <div className="space-y-4 my-6">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                      <Clock className="w-5 h-5 text-[#1F5EFF]" />
                      Days 1 – 30: SMA-0 (Special Mention Account - 0)
                    </h3>
                    <span className="text-xs bg-blue-100 text-[#1F5EFF] font-bold px-2.5 py-1 rounded-full">Stage 1</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <strong>What Happens:</strong> Automated SMS and IVR voice calls are triggered. Your bank levies an ECS/NACH bounce fee (₹450–₹1,000) and begins calculating 24%–36% penal interest on the unpaid installment. Soft collection tele-callers remind you to clear dues.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-500" />
                      Days 31 – 60: SMA-1 (Special Mention Account - 1)
                    </h3>
                    <span className="text-xs bg-amber-100 text-amber-700 font-bold px-2.5 py-1 rounded-full">Stage 2</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <strong>What Happens:</strong> The 30+ Days Past Due (DPD) tag is transmitted to CIBIL, causing your score to drop by 40–70 points. The loan is assigned to the bank&apos;s internal collection floor. Call intensity increases, and pre-default warning emails are issued.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                      <BadgeAlert className="w-5 h-5 text-orange-600" />
                      Days 61 – 90: SMA-2 (Special Mention Account - 2)
                    </h3>
                    <span className="text-xs bg-orange-100 text-orange-700 font-bold px-2.5 py-1 rounded-full">Stage 3</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <strong>What Happens:</strong> The account is flagged for imminent default. In many cases, the bank assigns the portfolio to external third-party recovery agencies. A formal Loan Recall Notice or 60-day default demand letter is drafted.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                      <ShieldAlert className="w-5 h-5 text-rose-600" />
                      Day 91+: NPA Classification (Non-Performing Asset)
                    </h3>
                    <span className="text-xs bg-rose-100 text-rose-700 font-bold px-2.5 py-1 rounded-full">Stage 4</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <strong>What Happens:</strong> Under RBI Prudential Norms, the loan is formally classified as an NPA. The bank makes mandatory loss provisioning in its books. Tele-calling subsides, and the account transfers to the Stressed Assets Recovery Branch (SARB) or legal department.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                      <Gavel className="w-5 h-5 text-purple-600" />
                      Days 91 – 180+: Legal Notices, Lok Adalat &amp; Settlement Window
                    </h3>
                    <span className="text-xs bg-purple-100 text-purple-700 font-bold px-2.5 py-1 rounded-full">Stage 5</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <strong>What Happens:</strong> The bank issues formal legal notices under Section 138 of the NI Act (for bounced security cheques) or Section 25 of the Payment and Settlement Systems Act (for bounced NACH). The bank invites you to National Lok Adalat or opens compromise One-Time Settlement (OTS) discussions to clear the bad debt.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Relief Options Matrix */}
            <section id="relief-options-matrix" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                4. All Viable Relief Options Explored: Moratorium, Restructuring, EMI Reduction vs. Settlement
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Depending on whether your cash flow disruption is temporary (e.g., 3-month transition between jobs) or permanent (e.g., severe disability, permanent business closure), you have distinct financial and legal remedies available:
              </p>

              {/* Comparison Table 2 */}
              <div className="my-8">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                  Comprehensive Evaluation of Personal Loan Relief Pathways
                </h3>
                <div className="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th>Relief Mechanism</th>
                        <th>Best Suited For</th>
                        <th>Financial Impact</th>
                        <th>CIBIL Score Impact</th>
                        <th>Long-Term Outcome</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-bold text-slate-900">1. EMI Moratorium (3–6 Months)</td>
                        <td>Temporary job loss / medical emergency with expected recovery in 90 days.</td>
                        <td>Payment holiday; interest accrues and is added to principal.</td>
                        <td className="text-emerald-600 font-semibold">Minimal / Protected</td>
                        <td>Loan resumes with slightly higher EMI or extended tenure.</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">2. Loan Restructuring (Tenure Extension)</td>
                        <td>Permanent 30%–40% salary reduction; borrower can pay smaller EMIs.</td>
                        <td>Tenure stretched from 3 to 5 years; monthly EMI drops by 35%–50%.</td>
                        <td className="text-amber-600 font-semibold">Marked &quot;Restructured&quot; (-30 to -60 pts)</td>
                        <td>Full loan repaid over longer period; credit rebounds in 12 months.</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">3. Secured Debt Consolidation</td>
                        <td>Multiple unsecured loans totaling &gt;₹10 Lakhs with high interest (18%–24%).</td>
                        <td>Replace multiple loans with single low-cost Gold Loan or LAP (8.5%–10.5%).</td>
                        <td className="text-emerald-600 font-semibold">Positive (+20 to +50 pts)</td>
                        <td>Drastically reduced interest burden; single easy monthly EMI.</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-[#1F5EFF]">4. One-Time Settlement (OTS)</td>
                        <td>Severe, irreversible financial distress; borrower cannot pay full principal.</td>
                        <td>Lump-sum settlement at 40%–60% waiver; balance forgiven.</td>
                        <td className="text-amber-700 font-semibold">Marked &quot;Settled&quot; (-75 to -150 pts)</td>
                        <td>Account closed with ₹0 balance; legal immunity; rebuild in 18–24 mo.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Sample Hardship Letter Box */}
              <div className="bg-slate-50 border border-slate-300 rounded-2xl p-6 my-8">
                <h4 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#1F5EFF]" />
                  Official Template: Hardship Intimation Letter to Bank Nodal Officer
                </h4>
                <div className="bg-white p-5 rounded-xl border border-slate-200 text-xs md:text-sm font-mono text-slate-700 space-y-3 leading-relaxed">
                  <p><strong>To:</strong> The Principal Nodal Officer / Branch Manager, [Bank Name]</p>
                  <p><strong>Subject:</strong> Formal Intimation of Financial Hardship &amp; Request for Loan Restructuring / Moratorium — Loan A/C: [Your Loan Account Number]</p>
                  <p>Dear Sir/Madam,</p>
                  <p>
                    I am writing to formally bring to your notice that due to [unforeseen job termination / acute medical emergency / business loss on DD/MM/YYYY], I am experiencing severe financial distress and will be temporarily unable to service my monthly EMI of ₹[Amount] due on [Date].
                  </p>
                  <p>
                    I have maintained a clean repayment track record in the past. To prevent an involuntary default, I formally request your bank to grant me: (a) A 3 to 6-month EMI moratorium, OR (b) A restructuring of my loan tenure from [Current Tenure] to [Proposed Extended Tenure] to reduce my monthly outflow.
                  </p>
                  <p>
                    Attached herewith are supporting documents (Termination Letter / Medical Discharge Summary / Bank Statements) validating my hardship. I request you to pause coercive collection actions while this application is processed under RBI Fair Practices Code.
                  </p>
                  <p>Yours sincerely,<br />[Your Full Name]<br />[Contact Number] | [PAN Number]</p>
                </div>
              </div>
            </section>

            {/* 5. Compact Landscape Infographic Banner (Middle Content between Sections 4 & 5) */}
            <div className="bg-white border-2 border-blue-200 rounded-3xl overflow-hidden shadow-lg my-12 text-slate-800">
              <div className="bg-[#0A2540] text-white py-3.5 px-5 flex items-center justify-between border-b-2 border-[#1F5EFF]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#1F5EFF] flex items-center justify-center text-white text-xs shadow-sm">
                    <Scale className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-300 block">
                      Emergency Crisis Framework
                    </span>
                    <h3 className="text-sm md:text-base font-black text-white leading-tight">
                      Cannot Pay Personal Loan EMI? 5-Step Crisis Roadmap
                    </h3>
                  </div>
                </div>
                <a
                  href="/images/infographics/cannot-pay-personal-loan-emi.jpg"
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
                    src="/images/infographics/cannot-pay-personal-loan-emi.jpg"
                    alt="Cannot Pay Personal Loan EMI 5 Step Crisis Roadmap Infographic"
                    className="w-full h-auto object-contain max-h-[420px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Quick Crux Footer Strip */}
              <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span><strong>Crucial Takeaway:</strong> Inform bank early &bull; Enforce RBI anti-harassment rights &bull; Settle for ₹0 Balance NDC</span>
                </div>
                <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                  Get Free Case Evaluation &rarr;
                </Link>
              </div>
            </div>

            {/* Section 5: Anti-Harassment Rights */}
            <section id="anti-harassment-rights" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                5. How to Legally Stop Recovery Agent Harassment (RBI Fair Practices Code &amp; Police Complaints)
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                When an EMI is overdue by more than 30 days, aggressive third-party collection agencies often resort to unlawful, intimidating tactics. The Reserve Bank of India (RBI) has enacted stringent directives to protect borrower dignity. Any breach by recovery agents is an actionable offense.
              </p>

              {/* Prohibited actions list */}
              <div className="bg-rose-50 border-l-4 border-rose-500 p-6 rounded-r-2xl my-6 space-y-3">
                <h4 className="font-bold text-rose-900 text-base flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-rose-600" />
                  ACTIONS STRICTLY ILLEGAL UNDER RBI GUIDELINES (Circular RBI/2022-23/108):
                </h4>
                <ul className="text-sm text-rose-800 space-y-2 list-disc list-inside">
                  <li>Calling borrowers before 8:00 AM or after 7:00 PM in the evening.</li>
                  <li>Calling friends, relatives, neighbours, or workplace colleagues regarding your debt.</li>
                  <li>Visiting your workplace unannounced or causing a public scene at your residence.</li>
                  <li>Using abusive, threatening, or derogatory language during calls or messages.</li>
                  <li>Refusing to produce official bank identity cards and authorized agency mandate letters.</li>
                  <li>Sending fake legal notices formatted like court summons with fraudulent judicial emblems.</li>
                </ul>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                The 3-Step Escalation Protocol to Stop Harassment Permanently:
              </h3>
              <div className="space-y-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <p className="font-bold text-slate-900 text-sm mb-1">
                    Step 1: Record All Evidence &amp; File Formal Nodal Grievance
                  </p>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Record all threatening phone calls, save abusive WhatsApp chats, and take photographs of visiting agents. Send a legal email to the bank&apos;s Principal Nodal Officer quoting the RBI Fair Practices Code.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <p className="font-bold text-slate-900 text-sm mb-1">
                    Step 2: Lodge a Complaint on the RBI Integrated Ombudsman Portal (CMS)
                  </p>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If the bank fails to halt harassment within 48 hours, file an immediate complaint on <strong>cms.rbi.org.in</strong> under the Reserve Bank - Integrated Ombudsman Scheme, 2021. The RBI penalizes non-compliant lenders heavily.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <p className="font-bold text-slate-900 text-sm mb-1">
                    Step 3: Police Complaint for Criminal Intimidation
                  </p>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If agents threaten physical harm, extortion, or trespass, file a formal complaint at your local police station under IPC Sections 503 (Criminal Intimidation), 506 (Punishment for Intimidation), 384 (Extortion), and 441 (Criminal Trespass).
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: OTS Settlement Playbook */}
            <section id="ots-settlement-playbook" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                6. One-Time Settlement (OTS) Playbook: How to Settle for 40%–60% Less Without Getting Cheated
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                When full repayment is mathematically impossible, a structured <strong>One-Time Settlement (OTS)</strong> is the most pragmatic legal exit. In an OTS, the bank waives 100% of penal interest, late fees, and a substantial portion of the principal balance in exchange for a single or tiered lump-sum payment.
              </p>

              {/* 3 Golden Rules Box */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <h4 className="text-amber-900 font-bold text-base flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  THE 3 MANDATORY RULES OF AUTHENTIC LOAN SETTLEMENT:
                </h4>
                <ul className="text-sm text-amber-800 space-y-2 list-disc list-inside">
                  <li>
                    <strong>Rule 1: Never Pay on Verbal or WhatsApp Promises:</strong> Only pay when you possess an official OTS Sanction Letter generated on the bank&apos;s registered letterhead, carrying an authorized signatory&apos;s stamp and signature.
                  </li>
                  <li>
                    <strong>Rule 2: Deposit Exclusively into Your Loan Account:</strong> Never transfer money into personal collection agent accounts, third-party agency UPI IDs, or cash. Always pay via NEFT/RTGS directly into your specific loan account number.
                  </li>
                  <li>
                    <strong>Rule 3: Collect the No Dues Certificate (NDC):</strong> Mandate the issuance of a formal NDC / Closure Letter within 15 to 30 days of making the final agreed settlement tranche.
                  </li>
                </ul>
              </div>

              {/* Settlement Example Table */}
              <div className="my-8">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                  Illustrative Case Study: Personal Loan OTS Haircut Breakdown
                </h3>
                <div className="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th>Loan Ledger Component</th>
                        <th>Contractual Bank Claim</th>
                        <th>Negotiated OTS Settlement</th>
                        <th>Total Borrower Savings</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-bold text-slate-900">Original Disbursed Principal</td>
                        <td>₹5,00,000</td>
                        <td>₹2,50,000 (50% Principal Haircut)</td>
                        <td className="text-emerald-600 font-semibold">₹2,50,000 Waived</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Accrued Regular Interest</td>
                        <td>₹1,20,000</td>
                        <td>₹0 (100% Waived)</td>
                        <td className="text-emerald-600 font-semibold">₹1,20,000 Waived</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Penal Interest &amp; Late Charges</td>
                        <td>₹85,000</td>
                        <td>₹0 (100% Waived)</td>
                        <td className="text-emerald-600 font-semibold">₹85,000 Waived</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Legal &amp; Notice Charges</td>
                        <td>₹25,000</td>
                        <td>₹0 (100% Waived)</td>
                        <td className="text-emerald-600 font-semibold">₹25,000 Waived</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="font-black text-slate-900">Total Settlement Payable</td>
                        <td className="font-black text-rose-600">₹7,30,000</td>
                        <td className="font-black text-[#1F5EFF]">₹2,50,000</td>
                        <td className="font-black text-emerald-600">₹4,80,000 (65.7% Total Relief)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 7: CIBIL Rebuilding Blueprint */}
            <section id="cibil-rebuilding-blueprint" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                7. Restoring Your Financial Health: Rebuilding CIBIL Score Back to 750+ Post-Default
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                A common misconception is that a personal loan default permanently ruins your creditworthiness. Under the <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA)</strong>, historical defaults remain on bureau reports for up to 7 years, but credit underwriting algorithms weigh recent payment discipline far more heavily than past distress.
              </p>

              {/* 36 Month Rebuild Table */}
              <div className="my-8">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                  The 24-Month Roadmap to 750+ CIBIL Recovery Post-Settlement
                </h3>
                <div className="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th>Phase &amp; Timeline</th>
                        <th>Action Plan &amp; Strategy</th>
                        <th>Recommended Credit Tool</th>
                        <th>Target Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-bold text-slate-900">Phase 1: Months 0 – 3</td>
                        <td>Secure NDC, verify ₹0 balance across all 4 bureaus (CIBIL, Experian, CRIF, Equifax).</td>
                        <td>₹25,000 FD-Backed Secured Card (IDFC WOW / Kotak 811)</td>
                        <td className="font-bold text-amber-600">560 – 610</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Phase 2: Months 4 – 12</td>
                        <td>Maintain Credit Utilization Ratio (CUR) below 25%; automate 100% on-time bill payments.</td>
                        <td>Secured Card + Utility Bill Autopay</td>
                        <td className="font-bold text-[#1F5EFF]">650 – 700</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Phase 3: Months 13 – 24</td>
                        <td>Add a low-ticket installment loan to diversify credit mix; zero hard inquiries.</td>
                        <td>Fintech Consumer Durable Loan / 2-Wheeler Loan</td>
                        <td className="font-bold text-emerald-600">720 – 760+</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Phase 4: Month 25+</td>
                        <td>Full institutional credit eligibility restored for home loans and prime cards.</td>
                        <td>Standard Bank Credit Lines &amp; Home Loans</td>
                        <td className="font-bold text-emerald-700">770 – 800 (Prime)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 8: Statutory Legal Framework */}
            <section id="statutory-legal-framework" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                8. Legal Framework &amp; Judicial Protections: Acts Every Borrower Must Know
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                You are protected by robust statutory laws enacted by the Parliament of India and landmark rulings delivered by the Supreme Court of India:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                    <Landmark className="w-5 h-5 text-[#1F5EFF]" />
                    RBI Master Direction on Compromise Settlements (June 2023)
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Mandates all commercial banks and NBFCs to establish board-approved compromise settlement policies, authorizing lenders to settle NPAs without prejudice to regulatory prudential norms.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                    <Scale className="w-5 h-5 text-emerald-600" />
                    Supreme Court Ruling: ICICI Bank vs. Prakash Kaur (2007)
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    The Supreme Court held that banks and recovery agencies cannot deploy musclemen or illegal force to recover loans. Recovery must strictly adhere to statutory judicial procedures.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-purple-600" />
                    Reserve Bank - Integrated Ombudsman Scheme, 2021
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Provides a single, cost-free grievance redressal window for borrowers to penalize banks and NBFCs for unfair collection practices, billing errors, or delay in issuing No Dues Certificates.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                    <Gavel className="w-5 h-5 text-amber-600" />
                    Legal Services Authorities Act, 1987 (Lok Adalat Settlement)
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Empowers National Lok Adalats to adjudicate pre-litigation and pending bank recovery disputes. An award passed by Lok Adalat is final, binding, and non-appealable in any court of law.
                  </p>
                </div>
              </div>
            </section>

            <CompanySection />

            {/* Section 9: FAQs */}
            <section id="faqs" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                9. Frequently Asked Questions (FAQ)
              </h2>
              <p className="text-base leading-relaxed mb-8 text-slate-600">
                Immediate answers to the most critical legal, financial, and credit questions when you cannot pay your personal loan EMI in India.
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
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                <Landmark className="w-4 h-4 text-[#1F5EFF]" />
                <span>Official Regulatory Sources &amp; Legal Authorities</span>
              </h4>
              <ul className="space-y-2.5 text-xs md:text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    Reserve Bank of India (RBI) — Master Circular on Loans, Recovery Agents &amp; Fair Practices Code
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    TransUnion CIBIL — Credit Information Companies (Regulation) Act, 2005 Dispute Guidelines
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://sci.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    Supreme Court of India — Landmark Jurisprudence on Debtor Protection &amp; Recovery Norms
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    National Legal Services Authority (NALSA) — Lok Adalat Debt Dispute Resolution Framework
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    RBI Complaint Management System (CMS) — Integrated Ombudsman Scheme Portal
                  </a>
                </li>
              </ul>
            </div>

            {/* Internal Topic Badges (10 Links) */}
            <div className="my-10 pt-6 border-t border-slate-200">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
                Related Debt Relief &amp; Legal Protection Guides
              </h4>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/missed-emi-guide-to-regain-control"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Missed EMI Guide to Regain Control
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Bank Recovery Harassment Complaint
                </Link>
                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Bank Sent Legal Notice: What to Do
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Settlement CIBIL Impact
                </Link>
                <Link
                  href="/personal-loan-debt-settlement"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Debt Settlement
                </Link>
                <Link
                  href="/bank-loan-settlement-rules"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Bank Loan Settlement Rules
                </Link>
                <Link
                  href="/loan-penalty-waiver-request"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Loan Penalty Waiver Request
                </Link>
                <Link
                  href="/personal-loan-settlement-vs-closure"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Settlement vs Closure
                </Link>
                <Link
                  href="/personal-loan-legal-notice"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Legal Notice Reply
                </Link>
                <Link
                  href="/personal-loan-settlement-letter-format"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Settlement Letter Format
                </Link>
              </div>
            </div>
          </main>

          {/* Right Column (Sidebar Cards) */}
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
                    Debt Settlement Strategist &amp; Consumer Rights Advocate
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Ashish specializes in stressed asset negotiations, RBI regulatory compliance, and CIBIL score forensic dispute resolution for borrowers across India.
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

            {/* Card 2: Emergency Legal Defense CTA */}
            <div className="bg-gradient-to-br from-[#1F5EFF] to-blue-700 text-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 text-blue-100 text-xs font-bold uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Emergency Advocate Assistance</span>
              </div>
              <h3 className="text-xl font-black mb-3 leading-tight">
                Facing Recovery Harassment or Loan Recall Notices?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Don&apos;t face aggressive recovery agents alone. Speak with an empaneled SettleLoans advocate to stop illegal harassment and negotiate a lawful compromise.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white hover:bg-slate-100 text-[#1F5EFF] font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 shadow"
              >
                Talk to a Legal Advocate
              </Link>
            </div>

            {/* Card 3: Trust Signals Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                <span>Why Borrowers Trust SettleLoans</span>
              </h4>
              <ul className="space-y-3.5 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Legal Protection:</strong> Formal legal representations served to banks under RBI Fair Practices Code.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Shield:</strong> Immediate cessation of illegal third-party recovery agent calls and home visits.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct Bank Sanctions:</strong> All settlement letters verified on official bank letterhead with ₹0 NDC guarantee.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>No Hidden Upfront Fees:</strong> Ethical, transparent advisory engineered to protect the borrower&apos;s dignity.
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
