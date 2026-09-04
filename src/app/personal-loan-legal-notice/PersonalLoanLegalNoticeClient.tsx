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
  Scale,
  FileText,
  CheckCircle2,
  CheckCircle,
  Gavel,
  FileWarning,
  ShieldX,
  AlertCircle,
  HelpCircle,
  FileCheck
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
          isOpen ? 'max-h-[1400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-base leading-relaxed border-t border-slate-100 pt-4">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default function PersonalLoanLegalNoticeClient() {
  const [activeId, setActiveId] = useState<string>('jail-myth-civil-vs-criminal');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'jail-myth-civil-vs-criminal', title: '1. Will You Go to Jail? Civil vs. Criminal' },
    { id: 'types-of-legal-notices', title: '2. 5 Types of Loan Legal Notices' },
    { id: 'genuine-vs-fake-notice', title: '3. Genuine Notice vs. Fake Recovery Notice' },
    { id: 'reply-procedure-and-timeline', title: '4. 15-Day Reply Action Plan' },
    { id: 'compact-infographic-summary', title: '5. Executive Defense Roadmap' },
    { id: 'settlement-after-legal-notice', title: '6. Settle Loan After Receiving Notice' },
    { id: 'borrower-rights-rbi-supreme-court', title: '7. RBI Directives & Supreme Court Rights' },
    { id: 'reply-format-and-clauses', title: '8. Legal Reply Format & Checklist' },
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
      question: "Can I go to jail for defaulting on a personal loan in India?",
      answer: (
        <p>
          <strong>No, you cannot be sent to jail simply for an inability to repay an unsecured personal loan due to financial hardship.</strong> In Indian jurisprudence, an unsecured loan default is fundamentally a <em>civil dispute</em> governed by the Indian Contract Act, 1872. The police cannot arrest you for non-payment of EMIs or register an FIR for civil debt default. However, if a physical cheque bounces (Section 138 of the Negotiable Instruments Act) or an ECS/NACH e-mandate fails (Section 25 of the Payment and Settlement Systems Act), these are treated as quasi-criminal summary proceedings. In such matters, the court issues a bailable summons; as long as you engage an advocate, appear before the magistrate, and furnish bail, there is zero immediate risk of incarceration.
        </p>
      )
    },
    {
      question: "What is the difference between a Demand Notice, Section 138 Notice, and Section 25 PSS Act Notice?",
      answer: (
        <p>
          A <strong>Bank Demand / Recall Notice</strong> is a contractual civil notice recalling the entire loan balance due to missed EMIs and demanding full repayment within 7 to 15 days before civil litigation or arbitration. A <strong>Section 138 NI Act Notice</strong> is a statutory notice served when a physical security cheque bounces due to insufficient funds; the law provides you 15 statutory days from receipt to pay or respond before the bank can file a criminal complaint in the Magistrate Court. A <strong>Section 25 PSS Act Notice</strong> is issued when an automated NACH / e-mandate bounces electronically, carrying identical statutory timelines and summary liabilities as a cheque bounce.
        </p>
      )
    },
    {
      question: "How can I identify if a legal notice is fake or sent by third-party recovery agents?",
      answer: (
        <p>
          A genuine legal notice is issued on an advocate&apos;s registered letterhead, explicitly stating the advocate&apos;s <strong>Bar Council Enrollment Number</strong>, office address, contact details, precise loan account number, breakdown of principal versus interest, and statutory provisions invoked. Genuine notices arrive via Speed Post, Registered Post AD, or formal email. In contrast, <strong>fake recovery notices</strong> are typically sent as PDF attachments over WhatsApp, feature fabricated police stamps or &quot;Arrest Warrant / Crime Branch&quot; letterheads, demand immediate cash/UPI payment to individual names, and threaten non-existent criminal sections without any court case number.
        </p>
      )
    },
    {
      question: "How many days do I have to legally reply to a personal loan notice?",
      answer: (
        <p>
          For statutory notices under <strong>Section 138 of the Negotiable Instruments Act</strong> and <strong>Section 25 of the Payment and Settlement Systems Act</strong>, you have a strict window of <strong>15 calendar days from the date of physical receipt</strong> to tender payment or issue a comprehensive legal reply. For general bank loan demand notices or arbitration notices, the timeframe is typically <strong>15 to 30 days</strong>. You should never ignore a notice; an unanswered notice allows the bank&apos;s counsel to claim uncontroverted default before the judge or arbitrator.
        </p>
      )
    },
    {
      question: "Can I settle my personal loan through a One-Time Settlement (OTS) after receiving a legal notice?",
      answer: (
        <p>
          <strong>Yes, receiving a legal notice is actually one of the most opportune moments to negotiate a One-Time Settlement (OTS).</strong> Banks issue legal notices precisely because their standard collection mechanisms have failed and they wish to avoid protracted, expensive court litigation. By having an experienced debt settlement advocate reply to the notice, highlighting your documented financial distress (e.g., job loss, medical emergency, business loss), you can negotiate a formal OTS with a <strong>40% to 70% waiver</strong> on accumulated penal interest and charges, with all legal proceedings permanently withdrawn upon payment.
        </p>
      )
    },
    {
      question: "What should I do if I receive a notice to appear before the National Lok Adalat?",
      answer: (
        <p>
          A Lok Adalat notice is <strong>not a summons for criminal prosecution or an arrest warrant</strong>. It is an invitation for pre-litigation alternative dispute resolution facilitated by the National Legal Services Authority (NALSA). Attending Lok Adalat is entirely voluntary and highly advantageous for borrowers seeking debt relief. It allows you to sit across senior bank decision-makers and negotiate deep settlement discounts in a non-adversarial setting. The settlement award passed by the Lok Adalat has the force of a final civil court decree, with zero appeal and zero future liability.
        </p>
      )
    },
    {
      question: "Can recovery agents harass me or visit my house after a legal notice is issued?",
      answer: (
        <p>
          <strong>No. Under RBI Master Directives on Fair Practices Code and Supreme Court rulings (ICICI Bank v. Prakash Kaur), all coercive recovery tactics are strictly illegal.</strong> Agents cannot call you before 8:00 AM or after 7:00 PM, contact your family members, friends, or employers, use threatening or vulgar language, or stage unannounced public spectacles at your residence. Once your advocate serves a formal reply to the bank, all communications must legally be directed through your legal counsel. Continued harassment can be escalated immediately to the RBI Banking Ombudsman and Police Cyber Crime Cell.
        </p>
      )
    },
    {
      question: "What must be included in a formal advocate reply to a bank legal notice?",
      answer: (
        <p>
          A formal legal reply drafted by an advocate must contain: 1) Formal acknowledgment of receipt while denying all unsubstantiated claims; 2) Detailed factual narrative of bona fide financial hardship (medical records, termination letter, ITR drops); 3) Challenge against exorbitant penal interest, compounded late charges, or unverified ledger balances; 4) Absolute refutation of criminal intent or Section 420 IPC / Section 318 BNS cheating allegations; 5) A formal invitation to resolve the account through a structured One-Time Settlement (OTS) or interest-free repayment schedule.
        </p>
      )
    },
    {
      question: "Can the bank freeze my other bank accounts or seize my household assets for an unsecured personal loan default?",
      answer: (
        <p>
          For an unsecured personal loan, the bank holds no mortgage, pledge, or hypothecation over your residential property, vehicle, or household goods. The bank <strong>cannot unilaterally seize your physical assets</strong> without filing a formal civil recovery suit, obtaining a money decree, and securing an execution order from a civil court (a multi-year judicial process). However, if you maintain a savings or fixed-deposit account with the <em>same bank</em> where you defaulted, the bank may exercise its &quot;Right of Banker&apos;s Lien / Set-off&quot; under Section 171 of the Indian Contract Act to adjust those specific deposits toward the loan.
        </p>
      )
    },
    {
      question: "What should I do if an Arbitration Notice is invoked against me by an NBFC or Bank?",
      answer: (
        <p>
          If you receive a notice for appointment of a Sole Arbitrator under the Arbitration and Conciliation Act, 1996, you must immediately file a formal legal reply. In many cases, banks unilaterally appoint their own empanelled arbitrator without mutual consent, which violates <strong>Section 12(5) of the Arbitration Act</strong> as established by the Supreme Court in <em>Perkins Eastman Architects DPC v. HSCC (India) Ltd</em>. Your advocate can challenge the arbitrator&apos;s jurisdiction, demand venue transfer to your home jurisdiction, and use the arbitration forum to achieve a mutually acceptable consent award for loan settlement.
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

      {/* A. Editorial Hero Section - Dark #2D313D Background & Compact Title */}
      <section className="w-full bg-[#2D313D] text-white border-b border-slate-700/50 pt-8 pb-7 md:pt-12 md:pb-9 px-4 md:px-8 lg:px-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-white/10 border border-white/15 text-blue-400 text-xs font-black mb-3 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            Legal Notice Defense &amp; Court Resolution Guide
          </div>

          {/* H1 Headline - Compact Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            Legal Notice for Personal Loan Default:{' '}
            <span className="text-[#1F5EFF]">Will You Go to Jail? Legal Rights &amp; Reply Strategy</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Received a bank advocate notice for unpaid personal loans? Default is a civil dispute—not a criminal offence. Understand Section 138 vs Section 25 PSS Act, how to reply within 15 days, and how to negotiate an authentic OTS settlement.
          </p>

          {/* Author & Review Meta Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs text-slate-400 mb-5 pb-3 border-b border-slate-700/60 max-w-xl mx-auto">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-[9px]">
                AJ
              </div>
              <span className="text-slate-300">
                Written by{' '}
                <Link
                  href="/authors/ashish-jhangra"
                  className="text-white hover:text-[#1F5EFF] font-semibold underline decoration-[#1F5EFF] underline-offset-2"
                >
                  Ashish Jhangra
                </Link>
              </span>
            </div>
            <div className="hidden sm:block text-slate-600">•</div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Reviewed by SettleLoans Legal Advisory Team</span>
            </div>
            <div className="hidden sm:block text-slate-600">•</div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Updated: August 19, 2026</span>
            </div>
          </div>

          {/* Primary Hero CTA */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-5 rounded-xl shadow-md hover:shadow-blue-500/30 transition-all duration-300 text-xs sm:text-sm group"
            >
              <span>Get Free Legal Notice &amp; Defense Audit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#jail-myth-civil-vs-criminal"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold py-2.5 px-4 rounded-xl border border-white/20 transition-all duration-300 text-xs sm:text-sm"
            >
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>Read Step-by-Step Legal Reply Guide</span>
            </a>
          </div>
        </div>
      </section>

      {/* B. Animated Stats Strip */}
      <StatsStrip />

      {/* C. Three-Column Main Body Grid */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          {/* Left Column (Sticky TOC) */}
          <aside className="hidden lg:block sticky top-24 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 xl:p-5 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900 font-black text-sm uppercase tracking-wider mb-4 pb-2 border-b border-slate-200">
                <BookOpen className="w-4 h-4 text-[#1F5EFF]" />
                <span>Notice Defense Guide</span>
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
                <span>KEY LEGAL TAKEAWAYS: WHAT BORROWERS MUST KNOW</span>
              </div>
              <ul className="space-y-3 text-sm md:text-base text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Civil vs. Criminal Reality:</strong> Defaulting on an unsecured personal loan in India is strictly a <strong>civil matter</strong> under the Indian Contract Act, 1872. You cannot be arrested by local police for unpaid debt or genuine financial insolvency.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Cheque &amp; NACH Bounces (Section 138 &amp; 25):</strong> Bounced security cheques (Section 138 NI Act) or failed NACH mandates (Section 25 PSS Act) are compoundable, bailable summary proceedings. Appearing in court with an advocate guarantees immediate bail.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>15-Day Reply Window:</strong> Statutory legal notices require a formal response within <strong>15 days of physical receipt</strong>. A well-drafted advocate reply places your financial hardship on judicial record and eliminates allegations of fraud.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Beware Fake Notices:</strong> Over 60% of WhatsApp legal notices with &quot;Police Arrest Warrants&quot; are forged by third-party recovery agencies. A genuine notice requires a Bar Council enrollment number and physical postal dispatch.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Settlement Leverage:</strong> Receiving a legal notice is the premier gateway to negotiate a <strong>One-Time Settlement (OTS)</strong> with a 40% to 70% waiver, terminating all court matters upon receipt of an official No Dues Certificate.
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="jail-myth-civil-vs-criminal" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                1. The Core Dilemma: Will You Go to Jail for Personal Loan Default in India? (Civil vs. Criminal Reality)
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                The moment a borrower receives a formal-looking envelope stamped with &quot;LEGAL DEMAND NOTICE&quot; or an alarming WhatsApp PDF threatening &quot;Section 420 IPC / Section 318 BNS Criminal Proceedings,&quot; psychological panic takes over. The overarching, terrorizing question is: <em>&quot;Will the police arrest me? Will I be sent to jail for defaulting on my personal loan?&quot;</em>
              </p>

              {/* Definition Box for GEO */}
              <div className="bg-slate-100 border-l-4 border-slate-700 p-5 rounded-r-xl my-6">
                <p className="text-sm md:text-base font-semibold text-slate-900 italic">
                  &quot;Under Indian commercial jurisprudence, the non-payment of an unsecured loan due to genuine financial distress constitutes a simple breach of contract under Section 73 of the Indian Contract Act, 1872. It is strictly a civil dispute, and no borrower can be arrested or imprisoned for an inability to service loan dues.&quot;
                </p>
                <p className="text-xs text-slate-500 mt-2 font-medium">
                  — Supreme Court of India in Jolly George Varghese v. The Bank of Cochin (1980 AIR 470)
                </p>
              </div>

              <p className="text-base leading-relaxed mb-5 text-slate-700">
                In the landmark ruling of <strong>Jolly George Varghese v. Bank of Cochin</strong>, the Hon&apos;ble Supreme Court affirmed that under Article 21 of the Constitution of India and international human rights conventions, an impoverished or financially distressed debtor cannot be stripped of personal liberty or jailed merely because they lack the financial means to satisfy a civil debt obligation.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                To understand where criminal law intersects with loan default, one must distinguish between three distinct legal mechanisms:
              </p>

              <div className="space-y-4 my-6">
                <div className="p-5 rounded-xl border border-blue-200 bg-blue-50/60">
                  <h3 className="text-base font-bold text-blue-900 flex items-center gap-2 mb-1">
                    <FileText className="w-5 h-5 text-[#1F5EFF]" />
                    1. Pure Civil Loan Default (Zero Jail Risk)
                  </h3>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    When you fail to pay your EMIs on an unsecured personal loan, credit card, or digital lending app, the lender&apos;s remedy is purely civil: classifying the account as an NPA, reporting the delinquency to CIBIL/Experian, and filing a civil recovery suit or initiating arbitration. The police have <strong>zero statutory authority</strong> to register an FIR, summon you to a police station, or execute an arrest for civil default.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-amber-200 bg-amber-50/60">
                  <h3 className="text-base font-bold text-amber-900 flex items-center gap-2 mb-1">
                    <Scale className="w-5 h-5 text-amber-600" />
                    2. Section 138 NI Act &amp; Section 25 PSS Act (Quasi-Criminal &amp; Bailable)
                  </h3>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    If you issued physical post-dated security cheques that bounced for &quot;Funds Insufficient&quot; (Section 138 of the Negotiable Instruments Act, 1881) or an automated e-NACH mandate failed (Section 25 of the Payment and Settlement Systems Act, 2007), the bank can file a private complaint before a Judicial Magistrate. However, these are <strong>bailable and compoundable</strong> summary offences. You receive a court summons (not an immediate arrest warrant). You appear through your advocate, secure bail on the spot, and can compound or settle the matter without going to jail.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-rose-200 bg-rose-50/60">
                  <h3 className="text-base font-bold text-rose-900 flex items-center gap-2 mb-1">
                    <ShieldAlert className="w-5 h-5 text-rose-600" />
                    3. Criminal Fraud / Cheating (Section 420 IPC / Section 318 BNS) — Myth vs. Fact
                  </h3>
                  <p className="text-sm text-rose-800 leading-relaxed">
                    Recovery agents frequently send fake notices alleging &quot;Section 420 / 406 IPC Cheating &amp; Criminal Breach of Trust&quot;. For criminal cheating to stand in court, the prosecution must establish that the borrower harboured <em>fraudulent intent at the very moment of taking the loan</em> (e.g., submitting fake salary slips, forged PAN cards, or fictitious employer details). If you serviced several initial EMIs and defaulted later due to legitimate job loss, salary cuts, or medical crisis, courts routinely dismiss criminal complaints as an abuse of judicial process.
                  </p>
                </div>
              </div>
            </section>

            {/* Comparison Table 1 */}
            <div className="my-8">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                Legal Classification: Loan Default vs. Cheque Bounce vs. Criminal Fraud
              </h3>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Delinquency Category</th>
                      <th>Governing Statutory Law</th>
                      <th>Legal Nature</th>
                      <th>Police Arrest Powers?</th>
                      <th>Bail &amp; Settlement Rights</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Personal Loan EMI Default</td>
                      <td>Indian Contract Act, 1872 (Sec 73)</td>
                      <td className="text-blue-600 font-semibold">Pure Civil Dispute</td>
                      <td className="text-emerald-600 font-bold">NO (Illegal if attempted)</td>
                      <td>100% Civil; Settle via OTS</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-[#1F5EFF]">Bounced Security Cheque</td>
                      <td>Negotiable Instruments Act, 1881 (Sec 138)</td>
                      <td className="text-amber-600 font-semibold">Quasi-Criminal (Summary)</td>
                      <td className="text-emerald-600 font-bold">NO (Summons First)</td>
                      <td>100% Bailable; Compoundable</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Failed NACH / e-Mandate</td>
                      <td>Payment &amp; Settlement Systems Act, 2007 (Sec 25)</td>
                      <td className="text-amber-600 font-semibold">Quasi-Criminal (Summary)</td>
                      <td className="text-emerald-600 font-bold">NO (Summons First)</td>
                      <td>100% Bailable; Compoundable</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-rose-600">Forged KYC / Willful Deceit</td>
                      <td>Bharatiya Nyaya Sanhita, 2023 (Sec 318 / IPC 420)</td>
                      <td className="text-rose-600 font-semibold">Cognizable Criminal Offence</td>
                      <td className="text-rose-600 font-bold">YES (If FIR registered)</td>
                      <td>Anticipatory Bail / Sec 482 Quashing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 2 */}
            <section id="types-of-legal-notices" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                2. The 5 Types of Legal Notices Issued for Personal Loan Defaults (and What Each Means)
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Not all legal notices carry the same statutory implications. In India, banks, NBFCs, and fintech lenders deploy five distinct legal instruments depending on the loan vintage, defaulted amount, and underlying contracts.
              </p>

              <div className="space-y-6 my-6">
                {/* Type 1 */}
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-[#1F5EFF] flex items-center justify-center font-bold text-sm">
                      1
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">
                      Bank Demand Notice / Loan Recall Notice
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    <strong>What it is:</strong> A formal civil notice issued either directly by the bank&apos;s Stressed Asset Resolution Branch (SARB) or through an empanelled advocate. It states that due to continuous default across 90+ days (NPA status), the bank is terminating the loan agreement, accelerating the total balance, and demanding payment of the entire principal plus interest within 7 to 15 days.
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    <strong>Legal Severity:</strong> Low to Moderate. It is a precursor to legal escalation. Replying with an advocate outlining financial hardship and proposing an OTS stops court filing.
                  </p>
                </div>

                {/* Type 2 */}
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm">
                      2
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">
                      Section 138 Negotiable Instruments Act Notice (Cheque Bounce)
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    <strong>What it is:</strong> A mandatory statutory notice served within 30 days of a physical cheque being returned unpaid by the bank. By law, the lender must provide you with exactly <strong>15 days from the date of notice receipt</strong> to make good the cheque amount.
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    <strong>Legal Severity:</strong> High. If you neither pay nor reply within 15 days, the bank has 30 days to file a criminal complaint before the Metropolitan Magistrate.
                  </p>
                </div>

                {/* Type 3 */}
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-7 h-7 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">
                      3
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">
                      Section 25 Payment &amp; Settlement Systems Act Notice (NACH / e-Mandate)
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    <strong>What it is:</strong> With modern digital loans and auto-debit mandates, physical cheques are rarely taken. Instead, banks utilize National Automated Clearing House (NACH) mandates. When an auto-debit bounces due to insufficient balance, Section 25 of the PSS Act, 2007 applies the identical framework as Section 138.
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    <strong>Legal Severity:</strong> High. Requires an immediate formal legal reply within 15 days disputing penal interest and exploring compromise settlement.
                  </p>
                </div>

                {/* Type 4 */}
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm">
                      4
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">
                      Arbitration Notice under Arbitration &amp; Conciliation Act, 1996
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    <strong>What it is:</strong> Most digital loan contracts contain an arbitration clause. Lenders issue this notice to appoint a private Sole Arbitrator to adjudicate the debt. If you fail to participate, the arbitrator may pass an <em>ex-parte</em> arbitration award that has the legal weight of a civil court decree.
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    <strong>Legal Severity:</strong> Moderate to High. Unilateral arbitrator appointments can be challenged under Section 12(5) of the Act as per Supreme Court precedent.
                  </p>
                </div>

                {/* Type 5 */}
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
                      5
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">
                      National Lok Adalat Pre-Litigation Notice
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    <strong>What it is:</strong> Organized by District Legal Services Authorities (DLSA) under the Legal Services Authorities Act, 1987, Lok Adalats provide an amicable conciliation forum. This is an invitation to settle, not a prosecution summons.
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    <strong>Legal Severity:</strong> Low (Opportunity). The prime venue for obtaining 50%–70% OTS waivers with immediate court decree immunity.
                  </p>
                </div>
              </div>
            </section>

            {/* Comparison Table 2 */}
            <div className="my-8">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                Comparison of Personal Loan Legal Notices: Timelines, Risks &amp; Responses
              </h3>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Notice Classification</th>
                      <th>Issuing Authority</th>
                      <th>Statutory Reply Window</th>
                      <th>Court Jurisdiction</th>
                      <th>Recommended Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Bank Demand / Recall Notice</td>
                      <td>Bank / NBFC Advocate</td>
                      <td>15 to 30 Days</td>
                      <td>Civil Court / DRT</td>
                      <td>Issue Advocate Reply &amp; Propose OTS</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-[#1F5EFF]">Section 138 NI Act Notice</td>
                      <td>Complainant&apos;s Advocate</td>
                      <td className="text-rose-600 font-semibold">Strict 15 Calendar Days</td>
                      <td>Judicial Magistrate First Class (JMFC)</td>
                      <td>Formal Reply, Appearance &amp; Bail Preparation</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-purple-700">Section 25 PSS Act Notice</td>
                      <td>Lender Legal Counsel</td>
                      <td className="text-rose-600 font-semibold">Strict 15 Calendar Days</td>
                      <td>Metropolitan / Judicial Magistrate</td>
                      <td>Challenge Overdue &amp; Negotiate Settlement</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Arbitration Invocation Notice</td>
                      <td>Arbitration Tribunal / Bank</td>
                      <td>30 Days</td>
                      <td>Sole Arbitrator / High Court Sec 11</td>
                      <td>File Objections on Unilateral Appointment</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-emerald-700">National Lok Adalat Notice</td>
                      <td>District Legal Services (DLSA)</td>
                      <td>Date of Lok Adalat Session</td>
                      <td>Lok Adalat Bench</td>
                      <td>Attend with Counsel &amp; Lock In OTS Discount</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 3 */}
            <section id="genuine-vs-fake-notice" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                3. Genuine Bank Legal Notice vs. Fake Recovery Agent Notice: 6-Point Forensic Checklist
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                In India&apos;s retail lending ecosystem, aggressive collection agencies frequently commit criminal forgery by drafting fictitious &quot;Legal Notices&quot;, &quot;Court Summons&quot;, or &quot;Police Arrest Warrants&quot; and sending them over WhatsApp or email to intimidate borrowers.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Use this forensic 6-point checklist to evaluate any notice you receive:
              </p>

              <div className="space-y-4 my-6">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <FileCheck className="w-5 h-5 text-emerald-600" />
                    Check 1: Advocate Credentials &amp; Bar Council Enrollment
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    A genuine legal notice is signed by a certified advocate and clearly prints their <strong>State Bar Council Enrollment Number</strong> (e.g., <em>D/1234/2018</em> or <em>MAH/5678/2015</em>) along with physical chamber address and official email. Fake recovery notices feature generic signatures like &quot;Legal Department Head&quot; or fictitious advocate names without Bar Council numbers.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#1F5EFF]" />
                    Check 2: Delivery Mode (Physical Speed Post vs. WhatsApp Blast)
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Under Indian Evidence Act and Civil Procedure Code, valid legal service requires delivery via <strong>Registered Post AD, India Post Speed Post with tracking number</strong>, or formal email from an institutional domain. A poorly formatted WhatsApp message or image without postal proof is rarely accepted by courts as valid statutory service.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-rose-600" />
                    Check 3: Absence of Fabricated Police or Court Emblems
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    It is a criminal offence under the State Emblem of India (Prohibition of Improper Use) Act, 2005 for private parties to use the Ashoka Lion emblem, &quot;Ministry of Home Affairs&quot;, or &quot;Crime Branch Police&quot; stamps on recovery notices. If a notice carries police logos or claims &quot;Immediate 2-Hour Arrest Warrant Issued&quot;, it is <strong>100% fraudulent</strong>.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <Landmark className="w-5 h-5 text-amber-600" />
                    Check 4: Payment Destination (Loan Account vs. Personal UPI ID)
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    A genuine bank notice strictly instructs you to deposit overdue funds into your <strong>specific loan account number</strong> at the authorized bank branch or official net banking portal. Fake notices urge you to transfer money to personal UPI handles (e.g., <em>collection.officer@okaxis</em>) or offer cash pick-up.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <Scale className="w-5 h-5 text-indigo-600" />
                    Check 5: Realistic Accounting &amp; Ledger Itemization
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    An authentic notice itemizes the exact principal disbursed, total EMIs paid, outstanding principal, contractual interest, and penal charges. Fraudulent notices present arbitrary, inflated round figures (e.g., demanding ₹15 Lakhs on a ₹4 Lakh loan) with zero mathematical breakdown.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <Gavel className="w-5 h-5 text-purple-600" />
                    Check 6: Reasonable Statutory Notice Period (15–30 Days vs. &quot;24 Hours&quot;)
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    The law mandates a fair opportunity to cure the default, giving 15 to 30 days. Recovery notices claiming &quot;Pay within 2 hours or police team will visit your home/office&quot; are coercive scare tactics that violate the RBI Fair Practices Code.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="reply-procedure-and-timeline" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                4. Step-by-Step Action Plan: How to Legally Reply to a Loan Notice Within 15–30 Days
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Receiving a genuine legal notice requires swift, structured action. The single worst mistake a borrower can make is ignoring the notice. When a notice goes unanswered, the bank&apos;s counsel argues before the court that the borrower had no defense and admitted to all allegations.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Follow this 4-step battle-tested legal response blueprint:
              </p>

              {/* Step Process Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-6 space-y-5">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base mb-1">
                      Step 1: Preserve Envelope &amp; Establish Exact Date of Delivery
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Do not discard the postal envelope. The 15-day statutory clock under Section 138/25 begins from the <strong>date you physically received the postal delivery</strong> (as recorded on the India Post tracking portal), NOT the date printed on the letterhead. Take a photo of the envelope with its consignment number and note the exact delivery timestamp.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      Step 2: Collate Financial Hardship Evidence
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Gather documentation proving that your non-payment was caused by genuine distress, not willful default: employment termination letters, salary reduction emails, hospitalization discharge summaries, business GST/ITR revenue drops, or family emergency expenses.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      Step 3: Engage an Advocate to Draft a Formal Legal Reply
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Never write an emotional or informal letter yourself. An empanelled debt settlement advocate will draft a formal reply that legally refutes criminal allegations (Section 420 IPC), challenges unverified penal interest rates, cites Supreme Court debtor protection rulings, and proposes a realistic OTS framework.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      Step 4: Dispatch via Speed Post AD &amp; Retain Tracking Proof
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      The advocate will dispatch the reply to both the bank&apos;s advocate and the bank&apos;s Principal Nodal Officer via Speed Post AD. The postal receipt and delivery confirmation serve as conclusive judicial evidence under Section 27 of the General Clauses Act.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Compact High-Impact Infographic Banner (Middle Content) */}
            <section id="compact-infographic-summary" className="scroll-mt-28 my-10">
              <div className="bg-white border-2 border-blue-200 rounded-3xl overflow-hidden shadow-lg text-slate-800">
                {/* Header Strip */}
                <div className="bg-[#0A2540] text-white py-3.5 px-5 flex items-center justify-between border-b-2 border-[#1F5EFF]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#1F5EFF] flex items-center justify-center text-white text-xs shadow-sm">
                      <Scale className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-blue-300 block">
                        Executive Defense Roadmap
                      </span>
                      <h3 className="text-sm md:text-base font-black text-white leading-tight">
                        Personal Loan Legal Notice Defense &amp; Resolution Framework
                      </h3>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="text-xs text-[#1F5EFF] hover:text-blue-300 font-bold flex items-center gap-1 transition-colors"
                  >
                    <span>Get Case Review</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* 4 Concise Horizontal Pillars + Milestone Progress */}
                <div className="p-4 md:p-6 bg-slate-50 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                    {/* Pillar 1 */}
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                      <div className="flex items-center gap-2 text-[#1F5EFF] font-bold text-xs uppercase mb-1.5">
                        <FileCheck className="w-4 h-4" />
                        <span>Pillar 1</span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Forensic Audit</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Verify Bar Council enrollment, delivery proof, ledger math, and filter out fake recovery agent PDFs.
                      </p>
                    </div>

                    {/* Pillar 2 */}
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                      <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase mb-1.5">
                        <Clock className="w-4 h-4" />
                        <span>Pillar 2</span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">15-Day Legal Reply</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Serve formal advocate reply under Speed Post AD, denying criminal intent and asserting RBI borrower rights.
                      </p>
                    </div>

                    {/* Pillar 3 */}
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                      <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase mb-1.5">
                        <Gavel className="w-4 h-4" />
                        <span>Pillar 3</span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Court Bail &amp; Defense</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Secure instant bail in Section 138/25 summons; challenge unilateral arbitrator appointments.
                      </p>
                    </div>

                    {/* Pillar 4 */}
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                      <div className="flex items-center gap-2 text-purple-600 font-bold text-xs uppercase mb-1.5">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Pillar 4</span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">OTS Sanction &amp; NDC</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Negotiate 40%–70% OTS waiver directly on bank letterhead and secure full No Dues Certificate.
                      </p>
                    </div>
                  </div>

                  {/* Horizontal Milestone Progress Line */}
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
                      <span className="text-[#1F5EFF]">Day 1: Notice Received</span>
                      <span className="text-emerald-600">Day 8: Advocate Reply Served</span>
                      <span className="text-amber-600">Day 20: OTS Discussions</span>
                      <span className="text-purple-600">Day 45: Official NDC Issued</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden flex">
                      <div className="w-1/4 bg-[#1F5EFF]"></div>
                      <div className="w-1/4 bg-emerald-500"></div>
                      <div className="w-1/4 bg-amber-500"></div>
                      <div className="w-1/4 bg-purple-600"></div>
                    </div>
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Rule:</strong> 15-Day Reply Window &bull; Zero Direct Arrest Risk &bull; 40%–70% OTS Waiver Possible</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Advocate Notice Assessment &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="settlement-after-legal-notice" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                6. Negotiating a One-Time Settlement (OTS) After Receiving a Legal Notice
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                A widespread misconception is that once a bank issues a legal notice, compromise settlement is off the table. The reality is precisely the opposite: <strong>a legal notice is the bank&apos;s strongest signal that they are ready to settle</strong>.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Banks and NBFCs are commercial corporations, not criminal prosecutors. Litigating in magistrate courts or civil courts entails substantial advocate retainers, court fees, and judicial delays spanning 3 to 7 years. For an unsecured loan with no collateral to attach, a prolonged lawsuit yields negative returns for the bank.
              </p>

              <div className="bg-blue-50 border-l-4 border-[#1F5EFF] p-5 rounded-r-xl my-6">
                <h3 className="text-[#1F5EFF] font-bold text-base flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5" />
                  THE SETTLEMENT FORMULA POST LEGAL NOTICE:
                </h3>
                <ul className="text-sm text-slate-700 space-y-2 list-disc list-inside">
                  <li>
                    <strong>Step 1:</strong> Reply to the notice through your advocate, asserting your legal defense and requesting a detailed NPA statement of account.
                  </li>
                  <li>
                    <strong>Step 2:</strong> Propose a lump-sum or 2-to-3 installment One-Time Settlement (OTS) representing 30% to 50% of the total outstanding balance.
                  </li>
                  <li>
                    <strong>Step 3:</strong> Insist that the bank issue a formal <strong>OTS Sanction Letter</strong> on registered letterhead signed by the Authorized Officer.
                  </li>
                  <li>
                    <strong>Step 4:</strong> Pay the agreed settlement tranche directly into your loan account and collect the <strong>Comprehensive No Dues Certificate (NDC)</strong> along with formal court withdrawal memos.
                  </li>
                </ul>
              </div>
            </section>

            {/* Comparison Table 3 */}
            <div className="my-8">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                Litigating in Court vs. Negotiating an Amicable OTS Settlement
              </h3>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Resolution Parameter</th>
                      <th>Contesting Full Litigation</th>
                      <th>Negotiated One-Time Settlement (OTS)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Total Financial Outlay</td>
                      <td className="text-rose-600 font-semibold">100% Principal + 36% Penal + Legal Costs</td>
                      <td className="text-emerald-600 font-semibold">30% to 60% of Outstanding Balance</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Resolution Timeline</td>
                      <td>2 to 5+ Years in Courts / DRT</td>
                      <td className="text-[#1F5EFF] font-semibold">15 to 45 Days</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Mental Stress &amp; Court Appearances</td>
                      <td>Continuous hearing dates &amp; lawyer fees</td>
                      <td className="text-emerald-600 font-semibold">Zero future court appearances</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Finality of Debt Discharged</td>
                      <td>Subject to appeal &amp; decree execution</td>
                      <td className="text-emerald-600 font-semibold">100% Final with No Dues Certificate</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 7 */}
            <section id="borrower-rights-rbi-supreme-court" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                7. Borrower Legal Rights Under RBI Directives &amp; Supreme Court Judgments
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Indian law provides robust statutory safeguards to protect debtors from predatory intimidation and unconstitutional coercion. When dealing with a bank legal notice, you possess several enforceable rights:
              </p>

              {/* Key Safeguards */}
              <div className="space-y-4 my-6">
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                  <h3 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                    <Landmark className="w-5 h-5 text-[#1F5EFF]" />
                    1. RBI Master Direction on Fair Practices Code (FPC)
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Under RBI circulars, banks and NBFC recovery agents are strictly prohibited from: calling borrowers before 8:00 AM or after 7:00 PM; contacting friends, family, or workplace colleagues; making anonymous threats; or visiting residences without prior written appointment. Violation invites strict regulatory action under the <strong>Integrated Ombudsman Scheme, 2021</strong>.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                    <Scale className="w-5 h-5 text-emerald-600" />
                    2. Right to Dignity &amp; Privacy (ICICI Bank v. Prakash Kaur - 2007 2 SCC 711)
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    The Supreme Court held that banks cannot deploy musclemen or recovery agents to harass citizens. Recovery must adhere strictly to the rule of law. Coercive shaming at a borrower&apos;s home or office is actionable as criminal intimidation under Section 506 IPC / Section 351 BNS.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-purple-600" />
                    3. Right to Legal Representation &amp; Fair Notice
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Every citizen has the constitutional right under Article 39A and the Advocates Act, 1961 to be represented by legal counsel. Once you notify the bank that you have engaged an advocate, all recovery communications must be conducted with your advocate.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section id="reply-format-and-clauses" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                8. Legal Reply Checklist &amp; Essential Rebuttal Clauses for Distressed Borrowers
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                When your advocate prepares a formal legal reply to a personal loan notice, ensuring that specific statutory clauses are incorporated protects you against future criminal claims and strengthens your settlement stance.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-6 space-y-4">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#1F5EFF]" />
                  Mandatory Legal Clauses to Include in Your Notice Reply:
                </h3>
                <ol className="list-decimal list-inside space-y-3 text-sm md:text-base text-slate-700">
                  <li>
                    <strong>Specific Denial of Criminal Intent (Bona Fide Intent):</strong> Rebut any mention of Section 420 IPC / Section 318 BNS by documenting that the borrower serviced initial EMIs diligently, thereby establishing absence of <em>mens rea</em> (guilty mind) at the loan inception.
                  </li>
                  <li>
                    <strong>Documenting Involuntary Financial Hardship:</strong> Provide a factual, dates-backed narrative of genuine insolvency (loss of employment, medical crisis, economic distress) to prove that non-payment is civil inability, not willful default.
                  </li>
                  <li>
                    <strong>Challenging Usurious Penal Interest &amp; Hidden Charges:</strong> Cite the RBI Master Direction on &apos;Fair Lending Practice - Penal Charges in Loan Accounts&apos; (2024), demanding a certified loan account ledger and disputing unverified compound penal charges.
                  </li>
                  <li>
                    <strong>Formal Notice of Harassment &amp; Ombudsman Warning:</strong> Record any illegal phone calls, abusive language, or privacy violations by recovery agents, placing the bank on notice of impending complaints to the RBI Banking Ombudsman and Police Cyber Cell.
                  </li>
                  <li>
                    <strong>Formal Proposal for One-Time Settlement (OTS):</strong> Formally invite the bank&apos;s Competent Authority to enter into good-faith compromise settlement negotiations to close the loan account amicably.
                  </li>
                </ol>
              </div>
            </section>

            <CompanySection />

            {/* Section 9: FAQs */}
            <section id="faqs" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                9. Frequently Asked Questions (FAQ)
              </h2>
              <p className="text-base leading-relaxed mb-8 text-slate-600">
                Instant answers to the most critical legal, court, and settlement questions regarding personal loan notices in India.
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
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                <Landmark className="w-4 h-4 text-[#1F5EFF]" />
                <span>Official Regulatory Sources &amp; Legal Authorities</span>
              </h3>
              <ul className="space-y-2.5 text-xs md:text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    Reserve Bank of India (RBI) — Master Directions on Fair Practices Code &amp; Recovery Norms
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
                    Supreme Court of India — Landmark Rulings on Debtor Protection (Jolly George Varghese &amp; Prakash Kaur)
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
                    National Legal Services Authority (NALSA) — National Lok Adalat Guidelines &amp; Pre-Litigation Conciliation
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
                    href="https://ecourts.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    eCourts Services — National Judicial Data Grid for Section 138/25 Court Tracking
                  </a>
                </li>
              </ul>
            </div>

            {/* Internal Topic Badges (10 Links) */}
            <div className="my-10 pt-6 border-t border-slate-200">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
                Related Debt Resolution &amp; Legal Protection Guides
              </h4>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/bank-loan-settlement-rules"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Bank Loan Settlement Rules
                </Link>
                <Link
                  href="/rbi-rules-for-recovery-agents"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  RBI Rules for Recovery Agents
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Settlement CIBIL Impact
                </Link>
                <Link
                  href="/cheque-bounce"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Cheque Bounce Legal Defense
                </Link>
                <Link
                  href="/lok-adalat-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Lok Adalat Loan Settlement
                </Link>
                <Link
                  href="/ignoring-calls-of-recovery-agent"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Handling Recovery Agent Harassment
                </Link>
                <Link
                  href="/personal-loan-settlement-vs-closure"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Loan Settlement vs Closure
                </Link>
                <Link
                  href="/personal-loan-settlement-lawyer"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Settlement Lawyer
                </Link>
                <Link
                  href="/missed-your-loan-emi-heres-what-to-do"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Missed Loan EMI Guide
                </Link>
                <Link
                  href="/how-to-remove-settled-status-from-cibil"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Remove Settled Status from CIBIL
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
                  <div className="font-bold text-slate-900 text-base leading-tight">
                    <Link
                      href="/authors/ashish-jhangra"
                      className="hover:text-[#1F5EFF] transition-colors"
                    >
                      Ashish Jhangra
                    </Link>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">
                    Debt Settlement Strategist &amp; Consumer Rights Advocate
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Ashish specializes in stressed asset negotiations, bank legal notice defense, Section 138/25 proceedings, and borrower rights protection under RBI regulations.
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
              <div className="text-xl font-black mb-3 leading-tight">
                Received a Bank Legal Notice or Court Summons?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Don&apos;t panic or respond without legal guidance. Speak with an empanelled SettleLoans advocate to draft a formal legal reply and protect your rights.
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
              <div className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                <span>Why Borrowers Trust SettleLoans</span>
              </div>
              <ul className="space-y-3.5 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Legal Representation:</strong> Experienced advocates represent you across all legal notice and court proceedings.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Protection:</strong> Formal notice served to bank stops illegal recovery agent visits and calls.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Official Bank Sanctions:</strong> All settlement letters negotiated directly with bank authorities with ₹0 NDC guarantee.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>No Hidden Charges:</strong> Transparent, ethical legal advisory designed to restore your financial peace of mind.
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
