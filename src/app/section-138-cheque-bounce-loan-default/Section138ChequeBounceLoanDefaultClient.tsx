'use client';
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  AlertTriangle,
  Scale,
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
  FileText,
  CheckCircle2,
  Briefcase,
  UserX,
  AlertOctagon,
  Copy,
  CheckCheck,
  HelpCircle,
  Gavel,
  FileWarning,
  BadgeAlert,
  CheckSquare
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

export default function Section138ChequeBounceLoanDefaultClient() {
  const [activeId, setActiveId] = useState<string>('loan-cheque-bounce-anatomy');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  const tocItems = [
    { id: 'loan-cheque-bounce-anatomy', title: '1. Personal Loan Cheque Bounce & Bank Tactics' },
    { id: 'statutory-process', title: '2. 4-Stage Timeline under Section 138 NI Act' },
    { id: 'supreme-court-rulings', title: '3. Supreme Court Rulings on Security Cheques' },
    { id: 'legal-defense-strategies', title: '4. Borrower Legal Defense Strategies' },
    { id: 'infographic-action-blueprint', title: '5. Legal Defense Blueprint Infographic' },
    { id: 'court-summons-bail-protocol', title: '6. Summons, Bailable Warrants & Bail Protocol' },
    { id: 'notice-reply-template', title: '7. Advocate Reply to 15-Day Legal Notice' },
    { id: 'compounding-ots-settlement', title: '8. Section 147 Compounding & OTS Settlement' },
    { id: 'comparative-legal-matrix', title: '9. Comparative Legal Process Matrix' },
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

  const noticeReplyText = `REGISTERED A.D. / SPEED POST / LEGAL RESPONSE EMAIL

To,
[Advocate Name / Law Firm Name]
Advocate for [Lending Bank / NBFC Name]
[Address Mentioned in the Legal Notice]

Ref: Reply to your Legal Notice dated [Date of Notice Received] under Section 138 of the Negotiable Instruments Act, 1881, regarding Cheque No: [Cheque Number] for ₹[Cheque Amount] drawn on [Bank Name].

Sir/Madam,

Under instructions from and on behalf of my client, [Borrower Full Name], residing at [Borrower Full Address], I hereby serve upon you this detailed legal reply to your purported statutory demand notice dated [Date of Notice]:

1. DENIAL OF CRYSTALLIZED LIABILITY ON DATE OF PRESENTATION:
It is categorically denied that my client owes the sum of ₹[Cheque Amount] as a crystallized, legally enforceable debt on the date of presentation of the subject cheque. The subject cheque was an UNDATED, BLANK SECURITY CHEQUE handed over strictly as collateral security at the time of initial loan disbursal (Loan Account No: [Loan Account Number]).

2. VIOLATION OF SECTION 56 OF NEGOTIABLE INSTRUMENTS ACT (PART-PAYMENTS):
My client has diligently repaid a total of [Number of EMIs] equating to ₹[Total Amount Repaid] towards the said personal loan. In gross violation of Section 56 of the NI Act, 1881, and the landmark Supreme Court ruling in Dashrathbhai Trikambhai Patel v. Hitesh Mahendrabhai Patel (2022), your client unilaterally filled the entire principal amount plus unverified penal charges without endorsing prior part-payments onto the cheque. Consequently, dishonour of such an inflated instrument does not constitute an offence under Section 138.

3. UNAUTHORIZED ALTERATION & MATERIAL TAMPERING:
Your client had no legal mandate or consent to date and present an undated security instrument during ongoing dispute resolution. Such unauthorized filling of blanks constitutes material alteration under Section 87 of the NI Act, rendering the instrument void.

4. DEMAND FOR CERTIFIED LOAN STATEMENT:
My client hereby formally calls upon your client to furnish within 7 days: (a) A certified statement of loan account under the Bankers' Books Evidence Act, 1891; (b) A complete ledger reflecting all EMI repayments and penal interest waivers; and (c) The original loan sanction agreement.

5. WILLINGNESS FOR AMICABLE DISPUTE RESOLUTION / OTS:
My client has suffered genuine involuntary financial hardship due to [medical emergency / job loss / business downturn], which was duly communicated to your client. My client remains willing to resolve the underlying civil dispute through a structured One-Time Settlement (OTS) or via the upcoming National Lok Adalat under Section 147 of the NI Act.

Should your client proceed to institute frivolous criminal proceedings under Section 138 or Section 420 IPC, my client shall defend the same with full vigor, claim exemplary costs, and initiate counter-proceedings against your client's officials for perjury and wrongful prosecution.

Yours faithfully,

[Advocate Name & Enrolment Number]
Advocate for the Respondent / Borrower
SettleLoans Legal Advisory Network`;

  const faqs = [
    {
      question: "Can a bank file a Section 138 criminal case for personal loan default in India?",
      answer: (
        <p>
          <strong>Yes, if a physical cheque (Post-Dated Cheque or security PDC) is presented and dishonoured for insufficient funds, the bank can invoke Section 138.</strong> Under the <em>Negotiable Instruments Act, 1881</em>, dishonour of a cheque drawn towards the discharge of a legally enforceable debt is a quasi-criminal statutory offence. However, the bank must strictly comply with mandatory statutory prerequisites: presenting the cheque within its 3-month validity, issuing a statutory demand notice within 30 days of the dishonour memo, giving a 15-day cure period, and filing the complaint before a Judicial Magistrate within 30 days thereafter.
        </p>
      )
    },
    {
      question: "Can I be immediately arrested by the police if my personal loan cheque bounces?",
      answer: (
        <p>
          <strong>No, absolutely not. The police cannot arrest you for a cheque bounce.</strong> Section 138 is a <em>non-cognizable, bailable, and compoundable offence</em>. The police have no statutory power to register an FIR, visit your residence to arrest you, or lock you up simply because a cheque bounced or because the bank issued a legal notice. Criminal proceedings can only be initiated through a private complaint filed directly before a Judicial Magistrate / Metropolitan Magistrate. You are only summoned by the court, where bail is granted as a matter of right.
        </p>
      )
    },
    {
      question: "What is the statutory timeline for Section 138 cheque bounce proceedings?",
      answer: (
        <p>
          The statutory sequence follows 4 strict, non-negotiable legal milestones: 1) <strong>Cheque Presentation:</strong> Within 3 months from the date on the cheque; 2) <strong>Return Memo:</strong> Dishonour memo issued by the paying bank; 3) <strong>30-Day Legal Notice:</strong> Bank must issue a written statutory demand notice within 30 days of receiving the memo; 4) <strong>15-Day Cure Window:</strong> The borrower has 15 calendar days from receipt of the notice to pay the amount; 5) <strong>30-Day Filing Window:</strong> If unpaid, the cause of action arises on Day 16, and the bank must file the complaint in court within 30 days. Any failure to meet these exact timelines renders the complaint time-barred under Section 142.
        </p>
      )
    },
    {
      question: "Can a bank legally deposit an undated security cheque taken during loan sanction?",
      answer: (
        <p>
          While banks routinely collect blank or undated cheques as security, the Supreme Court of India in landmark rulings (<em>Dashrathbhai Trikambhai Patel, 2022</em> and <em>Indus Airways, 2014</em>) ruled that a cheque must represent a crystallized, legally enforceable debt on the date of presentation. If the bank fills the entire loan principal plus exorbitant penalties onto a security cheque without deducting EMIs already paid (violating <strong>Section 56 NI Act</strong>), the cheque does not reflect the lawful debt, providing a rock-solid defense for dismissal.
        </p>
      )
    },
    {
      question: "What should I do immediately during the 15-day statutory legal notice period?",
      answer: (
        <p>
          You must immediately engage legal counsel to send a <strong>formal registered Reply to the Legal Notice</strong> before the 15-day window expires. The reply must deny that the cheque represents crystallized liability, place on record that it was an undated security instrument, highlight all part-payments made to date, challenge illegal penal interest, and express willingness to resolve the civil dispute through a structured One-Time Settlement (OTS). This sets your formal defense on judicial record before the bank approaches court.
        </p>
      )
    },
    {
      question: "What happens if I receive a judicial court summons under Section 138?",
      answer: (
        <p>
          Never ignore a judicial summons. When you receive court summons, you must engage an advocate and appear before the Magistrate on the specified date. Because Section 138 is bailable, your advocate will file an application for regular bail along with a personal bond and local surety. Bail is granted immediately on the same date. Appearing promptly prevents the Magistrate from issuing Bailable Warrants (BW) or Non-Bailable Warrants (NBW).
        </p>
      )
    },
    {
      question: "What is Section 143A interim compensation and do I have to pay 20% upfront?",
      answer: (
        <p>
          Section 143A of the NI Act allows trial courts to direct the accused to pay interim compensation not exceeding 20% of the cheque amount. However, the Supreme Court in <em>Rakesh Ranjan Shrivastava v. State of Jharkhand (2024)</em> clarified that <strong>Section 143A is directory and discretionary, not mandatory</strong>. The Magistrate cannot mechanically order 20% payment without recording reasons, assessing the strength of the borrower&apos;s prima facie defense, and evaluating financial hardship.
        </p>
      )
    },
    {
      question: "Can a Section 138 criminal case be compounded or settled out of court?",
      answer: (
        <p>
          <strong>Yes. Under Section 147 of the NI Act, cheque bounce cases are legally compoundable at any stage of proceedings</strong> — whether during pre-summoning, trial, before Lok Adalat, or even at the appellate stage. When you negotiate a One-Time Settlement (OTS) through SettleLoans, the bank signs a formal compromise agreement, accepts the discounted lump sum, and files a joint application before the Magistrate to withdraw or compound the complaint, resulting in complete acquittal and zero criminal record.
        </p>
      )
    },
    {
      question: "How much waiver can I negotiate on a personal loan with an active Section 138 case?",
      answer: (
        <p>
          Through professional debt settlement representation by SettleLoans, borrowers facing genuine financial distress typically secure <strong>40% to 70% waivers on total outstanding dues</strong>. Banks agree to 100% waiver of penal interest, bounce charges, and late fees, crystallizing a manageable compromise principal payable in lump sum or structured tranches under a formal bank settlement sanction letter.
        </p>
      )
    },
    {
      question: "What should I do if recovery agents threaten me with police arrest for a bounced cheque?",
      answer: (
        <p>
          Recognize that the recovery agent is bluffing and committing an illegal act. Recovery agents have zero judicial authority. Threatening arrest or impersonating law enforcement officers constitutes <strong>Criminal Intimidation (Section 503/506 IPC / Section 351 BNS)</strong> and <strong>Extortion (Section 383/384 IPC / Section 308 BNS)</strong>. Record all calls, note agent names, and immediately contact SettleLoans to issue a cease-and-desist notice to the bank&apos;s Principal Nodal Officer and file an RBI Ombudsman complaint.
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

      {/* A. Editorial Hero Section - Charcoal Navy (#2D313D) Theme */}
      <section className="w-full bg-[#2D313D] border-b border-slate-700/60 pt-8 pb-7 md:pt-12 md:pb-9 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-[#1F5EFF]/20 border border-[#1F5EFF]/40 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <ShieldAlert className="w-3.5 h-3.5 text-[#60A5FA]" />
            Section 138 NI Act Legal Shield &amp; Defense Blueprint
          </div>

          {/* H1 Headline - Compact Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            Cheque Bounce Case for Personal Loan Default?{' '}
            <span className="text-[#60A5FA]">Section 138 Legal Defense &amp; Settlement Guide</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Did your bank deposit an undated security cheque (PDC) that bounced? Are recovery agents threatening immediate arrest and criminal prosecution under Section 138? Understand statutory 15-day notice responses, Supreme Court rulings on security cheques, court bail protocols, and how to settle under Section 147.
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
              <span>Reviewed by SettleLoans Legal Advisory Board</span>
            </div>
            <div className="hidden sm:block text-slate-500">•</div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-300" />
              <span>Updated: August 20, 2026</span>
            </div>
          </div>

          {/* Primary Hero CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-5 rounded-xl shadow-md hover:shadow-blue-500/20 transition-all duration-300 text-xs sm:text-sm group"
            >
              <span>Get Emergency Section 138 Defense</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#statutory-process"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold py-2.5 px-4 rounded-xl border border-white/20 transition-all duration-300 text-xs sm:text-sm"
            >
              <BookOpen className="w-4 h-4 text-blue-300" />
              <span>View Statutory Timelines &amp; Defense</span>
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
                <span>On This Page</span>
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

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 font-sans text-slate-800 blog-content">
            
            {/* Key Takeaways Box (Top) */}
            <div className="bg-blue-50 border-l-8 border-[#1F5EFF] rounded-r-2xl p-6 md:p-8 mb-10 shadow-sm">
              <div className="flex items-center gap-2 text-[#1F5EFF] font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5" />
                <span>KEY TAKEAWAYS: SECTION 138 DEFENSE &amp; DEBTOR RIGHTS</span>
              </div>
              <ul className="space-y-3 text-sm md:text-base text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero Immediate Police Arrest:</strong> Cheque bounce under Section 138 NI Act is a bailable, non-cognizable statutory offence. Police have zero authority to arrest you or register an FIR for cheque bounce.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Strict 15-Day Statutory Cure Period:</strong> After receiving the bank&apos;s legal notice, you have 15 days to respond and cure. The bank cannot file a criminal complaint before the 15-day period expires.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Security Cheque Supreme Court Defense:</strong> Under <em>Dashrathbhai Patel (2022)</em>, if the bank deposited a blank security cheque without endorsing prior EMI repayments (Section 56 NI Act), the Section 138 complaint is legally invalid.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed Court Bail:</strong> When summons are issued, appearing through an advocate guarantees same-day bail on personal bond. Never ignore summons to avoid bailable/non-bailable warrants.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Compounding &amp; Full Case Dismissal:</strong> Under Section 147 NI Act, criminal proceedings are 100% compoundable upon completing a One-Time Settlement (OTS), securing total account closure and No Dues Certificate.
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="loan-cheque-bounce-anatomy" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                1. The Anatomy of Personal Loan Cheque Bounce &amp; Bank Pressure Tactics
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                When financial distress strikes—whether from sudden job loss, salary reductions, severe medical emergencies, or business downturns—defaulting on an unsecured personal loan is a distressing reality for hundreds of thousands of salaried Indians. However, the psychological trauma escalates exponentially when the lending bank or NBFC deposits an undated security cheque (PDC) that bounces, followed by alarming legal notices threatening criminal prosecution and immediate imprisonment under <strong>Section 138 of the Negotiable Instruments Act, 1881</strong>.
              </p>

              {/* Regulatory Definition Box for GEO */}
              <div className="bg-slate-100 border-l-4 border-[#1F5EFF] p-5 rounded-r-xl my-6">
                <p className="text-sm md:text-base font-semibold text-slate-900 italic">
                  &quot;Where any cheque drawn by a person on an account maintained by him with a banker for payment of any amount of money to another person from out of that account for the discharge, in whole or in part, of any debt or other liability, is returned by the bank unpaid, either because of the amount of money standing to the credit of that account is insufficient to honour the cheque... such person shall be deemed to have committed an offence.&quot;
                </p>
                <p className="text-xs text-slate-500 mt-2 font-medium">
                  — Section 138, Negotiable Instruments Act, 1881 (Amended 2018)
                </p>
              </div>

              <p className="text-base leading-relaxed mb-5 text-slate-700">
                To understand how to protect yourself, it is critical to demystify why banks deploy this strategy. When you initially availed your personal loan, the lender collected between 3 to 6 <strong>blank, undated Post-Dated Cheques (PDCs)</strong> under the guise of &quot;administrative security&quot;. In standard retail banking operations, monthly repayments are processed automatically via NACH / e-Mandate.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                However, when your NACH mandate fails for consecutive months due to financial hardship, the bank&apos;s recovery division pulls out these archived security cheques, manually writes the current date, fills the entire accelerated loan outstanding (often including inflated penal interest and bounce charges), and deposits the instrument into clearing.
              </p>
              <p className="text-base leading-relaxed text-slate-700">
                <strong>Why do banks do this?</strong> A personal loan default is purely a civil breach of contract. Recovering money through civil courts (such as a summary suit under Order 37 CPC) takes years. By converting a civil contractual dispute into a quasi-criminal complaint under Section 138, banks attempt to generate extreme criminal fear, coercion, and panic to force you or your family to borrow emergency funds to pay them off.
              </p>
            </section>

            {/* Section 2 */}
            <section id="statutory-process" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                2. The 4-Stage Statutory Timeline under Section 138 NI Act
              </h2>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                The Negotiable Instruments Act establishes an unalterable, strict statutory sequence of events. A bank cannot arbitrarily file a criminal case or demand your arrest without complying precisely with every statutory milestone. If the bank misses any statutory limitation period by even a single day, the entire complaint becomes legally defective and subject to dismissal under Section 142.
              </p>

              {/* Sequential Process Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 shadow-sm hover:border-blue-300 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#1F5EFF] flex items-center justify-center font-black text-sm">
                      01
                    </div>
                    <h3 className="font-bold text-slate-900 text-base">
                      Cheque Dishonour &amp; Return Memo
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-2">
                    The cheque must be presented to the bank within its validity period of <strong>3 months</strong> from the date inscribed on it. Upon dishonour, the drawee bank issues a formal &quot;Cheque Return Memo&quot; specifying the reason (e.g. &quot;Funds Insufficient&quot; or &quot;Account Closed&quot;).
                  </p>
                  <div className="text-[11px] font-bold text-blue-600 bg-blue-50 py-1 px-2.5 rounded-md inline-block">
                    Statutory Trigger Point
                  </div>
                </div>

                <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 shadow-sm hover:border-blue-300 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#1F5EFF] flex items-center justify-center font-black text-sm">
                      02
                    </div>
                    <h3 className="font-bold text-slate-900 text-base">
                      Mandatory 30-Day Legal Demand Notice
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-2">
                    Under Section 138(b), the bank MUST issue a formal statutory demand notice in writing within <strong>30 calendar days</strong> of receiving the cheque dishonour memo from the clearing house. If dispatched on Day 31, the entire proceeding is void ab initio.
                  </p>
                  <div className="text-[11px] font-bold text-blue-600 bg-blue-50 py-1 px-2.5 rounded-md inline-block">
                    Strict 30-Day Notice Limitation
                  </div>
                </div>

                <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 shadow-sm hover:border-blue-300 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#1F5EFF] flex items-center justify-center font-black text-sm">
                      03
                    </div>
                    <h3 className="font-bold text-slate-900 text-base">
                      15-Day Statutory Cure Period
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-2">
                    Upon receipt of the legal notice, the law gives the borrower a mandatory <strong>15-day cure window</strong> to respond or arrange settlement. No criminal offence exists during these 15 days. The bank is legally barred from filing any court complaint until Day 16.
                  </p>
                  <div className="text-[11px] font-bold text-amber-700 bg-amber-50 py-1 px-2.5 rounded-md inline-block">
                    Golden Window for Defense &amp; Reply
                  </div>
                </div>

                <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 shadow-sm hover:border-blue-300 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#1F5EFF] flex items-center justify-center font-black text-sm">
                      04
                    </div>
                    <h3 className="font-bold text-slate-900 text-base">
                      30-Day Court Complaint Window
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-2">
                    If payment is not made within 15 days, the statutory cause of action arises on Day 16. The bank has exactly <strong>30 calendar days</strong> to file a private criminal complaint before the Judicial Magistrate / Metropolitan Magistrate under Section 142.
                  </p>
                  <div className="text-[11px] font-bold text-emerald-700 bg-emerald-50 py-1 px-2.5 rounded-md inline-block">
                    Court Jurisdiction &amp; Pre-Summoning
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="supreme-court-rulings" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                3. Landmark Supreme Court Judgments on Security Cheques &amp; Presumptions
              </h2>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                While Section 139 of the NI Act creates a legal presumption that a dishonoured cheque was issued towards a debt, this presumption is <strong>rebuttable</strong> on a &quot;preponderance of probabilities&quot;. The Supreme Court of India has delivered several authoritative rulings curtailing banks from abusing undated security cheques for un-crystallized, inflated loan claims.
              </p>

              <div className="space-y-6 my-8">
                {/* Case Law 1 */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">
                      Dashrathbhai Trikambhai Patel v. Hitesh Mahendrabhai Patel (2022) 10 SCC 594
                    </h3>
                    <span className="text-xs bg-[#1F5EFF]/10 text-[#1F5EFF] font-bold py-1 px-2.5 rounded-full whitespace-nowrap">
                      Landmark 3-Judge Bench
                    </span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed mb-3">
                    <strong>Core Judicial Ruling:</strong> The Supreme Court held that for an offence under Section 138 to stand, the cheque must represent the <em>exact legally enforceable debt</em> on the date of its presentation. If the borrower has made part-payments (e.g. EMIs paid prior to default), the lender is legally required under <strong>Section 56 of the NI Act</strong> to endorse the part-payment on the instrument. If the lender deposits a cheque for the full loan amount without endorsing prior payments, dishonour of such an inflated cheque <strong>CANNOT attract Section 138 criminal liability</strong>.
                  </p>
                  <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
                    Key Defense: If you paid 10 EMIs and the bank deposited a security cheque for the initial full principal, the complaint is defective.
                  </div>
                </div>

                {/* Case Law 2 */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">
                      Indus Airways Pvt. Ltd. v. Magnum Aviation Pvt. Ltd. (2014) 12 SCC 539
                    </h3>
                    <span className="text-xs bg-slate-200 text-slate-700 font-bold py-1 px-2.5 rounded-full whitespace-nowrap">
                      Security Cheque Precedent
                    </span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed mb-3">
                    <strong>Core Judicial Ruling:</strong> The Apex Court established that a post-dated cheque handed over solely as &quot;collateral security&quot; or advance guarantee, at a time when no crystallized debt had matured or been adjudicated, does not automatically constitute a cheque issued for a legally enforceable debt. If the contract is breached or disputed, the remedy lies in civil litigation, not mechanical criminal prosecution.
                  </p>
                </div>

                {/* Case Law 3 */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">
                      Rakesh Ranjan Shrivastava v. State of Jharkhand (2024) INSC 206
                    </h3>
                    <span className="text-xs bg-purple-100 text-purple-700 font-bold py-1 px-2.5 rounded-full whitespace-nowrap">
                      Interim Compensation Clarification
                    </span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed mb-3">
                    <strong>Core Judicial Ruling:</strong> Overruling previous mechanical applications of Section 143A (which allows courts to order 20% interim deposit), the Supreme Court ruled that Section 143A is <strong>directory and discretionary</strong>, not mandatory. Trial courts must evaluate the prima facie strength of the accused&apos;s defense, bona fide financial condition, and reasons before ordering any interim deposit.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="legal-defense-strategies" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                4. Key Legal Defense Strategies for Personal Loan Borrowers
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                When faced with Section 138 legal notices or court proceedings, borrowers often feel helpless due to aggressive collection calls. However, under the law, an experienced debt defense advocate can raise powerful, evidence-backed defenses to invalidate the bank&apos;s criminal complaint:
              </p>

              <div className="space-y-4 text-base text-slate-700">
                <div className="p-5 border border-slate-200 rounded-2xl bg-white shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#1F5EFF]" />
                    Defense 1: Rebutting Section 139 Statutory Presumption
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    The accused is not required to prove their innocence &quot;beyond reasonable doubt&quot;. Under <em>Bir Singh v. Mukesh Kumar (2019)</em> and <em>Basalingappa v. Mudibasappa (2019)</em>, the borrower only needs to establish a probable defense on a &quot;preponderance of probabilities&quot; through cross-examination of bank officers and loan account statements to shift the burden of proof back onto the bank.
                  </p>
                </div>

                <div className="p-5 border border-slate-200 rounded-2xl bg-white shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Scale className="w-5 h-5 text-[#1F5EFF]" />
                    Defense 2: Violation of Section 56 (Failure to Endorse Part-Payments)
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    If you paid 6, 12, or 24 EMIs prior to default, the original principal loan amount no longer represents your actual balance. By depositing a blank security cheque filled for the original sanction amount or adding unverified penalties, the bank violates Section 56 of the NI Act. Under the <em>Dashrathbhai Patel</em> judgment, this single defect renders the complaint liable to dismissal.
                  </p>
                </div>

                <div className="p-5 border border-slate-200 rounded-2xl bg-white shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <FileWarning className="w-5 h-5 text-[#1F5EFF]" />
                    Defense 3: Time-Barred Debt or Defective Statutory Notice
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Under Indian law, a cheque issued for a time-barred debt (where more than 3 years have elapsed without acknowledgment under the Limitation Act, 1963) cannot be prosecuted under Section 138. Furthermore, if the bank failed to dispatch the notice within 30 days of receiving the return memo, or failed to specify the exact cheque particulars, the statutory notice is defective.
                  </p>
                </div>

                <div className="p-5 border border-slate-200 rounded-2xl bg-white shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Lock className="w-5 h-5 text-[#1F5EFF]" />
                    Defense 4: Lack of Locus Standi &amp; Unauthorized Power of Attorney
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Complaints filed by outsourced collection agencies or unauthorized representatives without a valid, registered Power of Attorney (POA) or specific Board Resolution under Section 141 of the NI Act fail judicial scrutiny under the Supreme Court precedent in <em>A.C. Narayanan v. State of Maharashtra (2014)</em>.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Dedicated Custom Infographic Banner */}
            <section id="infographic-action-blueprint" className="scroll-mt-28">
              {/* Compact High-Impact Infographic Banner */}
              <div className="bg-white border-2 border-blue-200 rounded-3xl overflow-hidden shadow-lg my-10 text-slate-800">
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
                        Section 138 Cheque Bounce Defense &amp; Resolution Blueprint
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/section-138-cheque-bounce-loan-default.jpg"
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
                      src="/images/infographics/section-138-cheque-bounce-loan-default.jpg"
                      alt="Section 138 Cheque Bounce Case Legal Defense and Settlement Infographic Blueprint"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Takeaway:</strong> Section 138 is bailable &amp; compoundable. Prompt notice response and OTS negotiation dismiss criminal complaints.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="court-summons-bail-protocol" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                6. Court Summons, Bailable Warrants (BW), and Bail Protocol
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                A major source of anxiety for borrowers is understanding what actually happens when a Section 138 complaint is filed in court. Misleading recovery agents often claim that police will arrive at night with handcuffs. In reality, Indian criminal procedure provides structured, bailable safeguards:
              </p>

              <div className="space-y-4 my-6">
                <div className="border-l-4 border-emerald-500 bg-emerald-50/50 p-5 rounded-r-xl">
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    Stage 1: Pre-Summoning Evidence &amp; Judicial Summons
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    When the bank files a complaint, the Magistrate records the complainant&apos;s verification statement (pre-summoning evidence). Upon finding prima facie compliance, the court issues a <strong>Judicial Summons</strong> ordering you to appear on a future date. A summons is NOT an arrest warrant; it is an official judicial invitation to present your defense.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 bg-blue-50/50 p-5 rounded-r-xl">
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    Stage 2: Appearance &amp; Instant Regular Bail as a Matter of Right
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Because Section 138 is a bailable offence under the Code of Criminal Procedure (CrPC) / Bharatiya Nagarik Suraksha Sanhita (BNSS), the Magistrate MUST grant bail upon appearance. Your defense advocate files a formal bail application along with a personal bond (usually ₹10,000 to ₹25,000) and a local surety. Bail is granted immediately within minutes on the same court date.
                  </p>
                </div>

                <div className="border-l-4 border-amber-500 bg-amber-50/50 p-5 rounded-r-xl">
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    Stage 3: What if You Missed Summons? Bailable Warrants &amp; Recall
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    If summons were delivered to an old address or you failed to appear, the court may issue a <strong>Bailable Warrant (BW)</strong> or, upon repeated non-appearance, a <strong>Non-Bailable Warrant (NBW)</strong>. This does not mean you go to jail. Your advocate immediately files an Application for Recall/Cancellation of Warrant under Section 70(2) CrPC along with proof of non-receipt or medical reasons, and the Magistrate recalls the warrant.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section id="notice-reply-template" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                7. Official Advocate Reply to 15-Day Legal Notice (Interactive Template)
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Responding to the bank&apos;s statutory demand notice within 15 days is your most powerful strategic tool. A well-drafted legal reply establishes your defense on record, places the bank on notice regarding Section 56 violations, prevents surprise ex-parte orders, and initiates structured settlement talks.
              </p>

              {/* Copyable Legal Reply Box */}
              <div className="bg-slate-900 text-slate-100 rounded-2xl overflow-hidden shadow-md my-8 border border-slate-800">
                <div className="bg-slate-800/90 px-5 py-3.5 flex items-center justify-between border-b border-slate-700">
                  <div className="flex items-center gap-2 text-xs font-mono text-blue-300">
                    <FileText className="w-4 h-4 text-[#1F5EFF]" />
                    <span>ADVOCATE_LEGAL_REPLY_SECTION_138.TXT</span>
                  </div>
                  <button
                    onClick={() => handleCopy(noticeReplyText, 1)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#1F5EFF] hover:bg-blue-600 text-white py-1.5 px-3 rounded-lg transition-colors"
                  >
                    {copiedIndex === 1 ? (
                      <>
                        <CheckCheck className="w-3.5 h-3.5" />
                        <span>Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Draft Template</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="p-5 md:p-6 text-xs md:text-sm font-mono leading-relaxed overflow-x-auto text-slate-300 whitespace-pre-wrap max-h-[420px]">
                  {noticeReplyText}
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section id="compounding-ots-settlement" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                8. Section 147 Compounding &amp; One-Time Settlement (OTS)
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                The ultimate objective of handling a Section 138 personal loan case is not protracted multi-year criminal litigation, but achieving complete, permanent debt closure without a criminal record. Under <strong>Section 147 of the Negotiable Instruments Act</strong>, every offence under the chapter is explicitly compoundable.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 my-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#1F5EFF]" />
                  How SettleLoans Achieves Section 138 Case Dismissal via OTS
                </h3>
                <ol className="list-decimal list-inside space-y-3 text-sm text-slate-700">
                  <li>
                    <strong>Hardship Portfolio Presentation:</strong> Our senior financial negotiators present your documented financial distress (job loss certificates, income drop, medical expenses) to the bank&apos;s Stressed Assets Resolution Committee (SARC).
                  </li>
                  <li>
                    <strong>Substantial Compromise Sanction:</strong> We negotiate a realistic One-Time Settlement (OTS) sanction letter directly on official bank letterhead, securing waivers between 40% and 70% of total claimed dues, with complete waiver of penal charges.
                  </li>
                  <li>
                    <strong>Lok Adalat / Court Compounding Application:</strong> Upon payment of the agreed settlement sum, our empaneled advocates file a joint compounding application under Section 147 NI Act / Section 320 CrPC before the Magistrate or Lok Adalat Bench.
                  </li>
                  <li>
                    <strong>Judicial Acquittal &amp; No Dues Certificate:</strong> The Magistrate passes a formal judicial order compounding the offence, resulting in complete acquittal of all criminal charges, followed by the bank issuing an unconditional <strong>No Dues Certificate (NDC)</strong>.
                  </li>
                </ol>
              </div>
            </section>

            {/* Section 9: Comparative Legal Process Matrix */}
            <section id="comparative-legal-matrix" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                9. Comparative Legal Process Matrix
              </h2>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                Understanding the distinct avenues used by lending institutions allows borrowers to recognize the difference between legitimate judicial procedures and unlawful third-party recovery harassment.
              </p>

              {/* Table 1 */}
              <div className="my-8">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                  Table 1: Section 138 Criminal Complaint vs. Civil Summary Suit (Order 37 CPC) vs. DRT
                </h3>
                <div className="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th>Legal Parameter</th>
                        <th>Section 138 NI Act (Cheque Bounce)</th>
                        <th>Order 37 CPC (Civil Summary Suit)</th>
                        <th>DRT / SARFAESI (Secured Loans)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Nature of Proceeding</strong></td>
                        <td>Quasi-Criminal Statutory Complaint</td>
                        <td>Civil Summary Recovery Suit</td>
                        <td>Statutory Tribunal Debt Recovery</td>
                      </tr>
                      <tr>
                        <td><strong>Governing Statute</strong></td>
                        <td>Negotiable Instruments Act, 1881</td>
                        <td>Code of Civil Procedure, 1908</td>
                        <td>RDDBFI Act, 1993 / SARFAESI Act, 2002</td>
                      </tr>
                      <tr>
                        <td><strong>Applicability to Personal Loans</strong></td>
                        <td>Applies if physical cheque/PDC dishonoured</td>
                        <td>Applies for liquidated contractual debts</td>
                        <td>Only applies for claims &gt; ₹20 Lakhs</td>
                      </tr>
                      <tr>
                        <td><strong>Bail Requirement</strong></td>
                        <td>Bailable as a matter of right on first appearance</td>
                        <td>No bail needed (Civil matter)</td>
                        <td>No bail needed (Civil/Tribunal matter)</td>
                      </tr>
                      <tr>
                        <td><strong>Settlement / Compounding</strong></td>
                        <td>100% Compoundable under Section 147 NI Act</td>
                        <td>Compromise Decree under Order 23 CPC</td>
                        <td>One-Time Settlement (OTS) Consent Terms</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table 2 */}
              <div className="my-8">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                  Table 2: Lawful NI Act Court Procedures vs. Unlawful Recovery Agent Threats
                </h3>
                <div className="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th>Action Area</th>
                        <th>Lawful Judicial Process (NI Act / CrPC)</th>
                        <th>Unlawful Collection Agent Tactic</th>
                        <th>Legal Violation / Remedy</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Arrest Powers</strong></td>
                        <td>Only Magistrate can issue warrants; police cannot arrest on notice</td>
                        <td>Threatening immediate police arrest or doorstep jail van</td>
                        <td>Criminal Intimidation (Section 503/506 IPC)</td>
                      </tr>
                      <tr>
                        <td><strong>Notice Delivery</strong></td>
                        <td>Written registered post/speed post to official residential address</td>
                        <td>WhatsApp fake summons with forged police seals</td>
                        <td>Forgery &amp; Impersonation (Section 463/419 IPC)</td>
                      </tr>
                      <tr>
                        <td><strong>Workplace Intrusion</strong></td>
                        <td>Court summons served through registered post or court bailiff</td>
                        <td>Recovery agents visiting office or calling HR department</td>
                        <td>RBI Fair Practices Code &amp; Trespass (Sec 441 IPC)</td>
                      </tr>
                      <tr>
                        <td><strong>Interim Settlement</strong></td>
                        <td>Voluntary compromise recorded before Magistrate / Lok Adalat</td>
                        <td>Extortion of spot cash under coercion without official receipt</td>
                        <td>Extortion (Section 383/384 IPC / Section 308 BNS)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Company Section Component */}
            <CompanySection />

            {/* Section 10: FAQ Accordion */}
            <section id="faqs" className="scroll-mt-28 mb-14">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-2xl bg-blue-100 text-[#1F5EFF] flex items-center justify-center">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#1F5EFF] block">
                    Got Questions? We Have Answers
                  </span>
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                    Frequently Asked Questions on Section 138 Cheque Bounce
                  </h2>
                </div>
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

            {/* Regulatory Sources Strip (5 Official Links) */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10 shadow-sm">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                <Landmark className="w-4 h-4 text-[#1F5EFF]" />
                <span>Authoritative Legal &amp; Regulatory Sources</span>
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://sci.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    Supreme Court of India — Landmark Judgments on Section 138 &amp; Security Cheque Jurisprudence
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://legislative.gov.in/actsofparliamentfromtheyear/negotiable-instruments-act-1881"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    Ministry of Law &amp; Justice — The Negotiable Instruments Act, 1881 (Act No. 26 of 1881)
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
                    eCourts Services — National Judicial Data Grid for Cheque Dishonour Case Status &amp; Cause Lists
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
                    National Legal Services Authority (NALSA) — National Lok Adalat Compounding &amp; Settlement Guidelines
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
                    Reserve Bank of India (RBI CMS) — Integrated Ombudsman Scheme &amp; Fair Practices Grievance Redressal
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
                  href="/legal-notice-for-loan-default"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Legal Notice for Loan Default
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Bank Recovery Harassment Complaint
                </Link>
                <Link
                  href="/personal-loan-settlement-process-consequences"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Settlement Process
                </Link>
                <Link
                  href="/lok-adalat-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Lok Adalat Loan Settlement
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Settlement CIBIL Impact
                </Link>
                <Link
                  href="/bank-loan-settlement-rules"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Bank Loan Settlement Rules
                </Link>
                <Link
                  href="/unsecured-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Unsecured Loan Settlement
                </Link>
                <Link
                  href="/recovery-agent-visiting-workplace-office"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Recovery Agent Visiting Workplace
                </Link>
                <Link
                  href="/missed-emi-guide-to-regain-control"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Missed EMI Guide to Regain Control
                </Link>
                <Link
                  href="/loan-penalty-waiver-request"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Loan Penalty Waiver Request
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
                    Chief Debt Strategist &amp; Consumer Rights Specialist
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Ashish has over a decade of specialized expertise defending borrowers in Section 138 cheque bounce matters, countering unlawful recovery coercion, and structuring win-win One-Time Settlements across India.
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

            {/* Card 2: Emergency Advocate Legal Defense CTA */}
            <div className="bg-gradient-to-br from-[#1F5EFF] to-blue-700 text-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 text-blue-100 text-xs font-bold uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Immediate Legal Defense</span>
              </div>
              <h3 className="text-xl font-black mb-3 leading-tight">
                Facing a Section 138 Cheque Bounce Threat or Notice?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Don&apos;t face criminal threats alone. Connect with an empaneled SettleLoans defense advocate to draft an urgent 15-day notice reply, secure court bail, and settle your loan safely.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white hover:bg-slate-100 text-[#1F5EFF] font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 shadow"
              >
                Get Emergency Legal Defense
              </Link>
            </div>

            {/* Card 3: Trust Signals Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                <span>Why Borrowers Choose SettleLoans</span>
              </h4>
              <ul className="space-y-3.5 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Legal Representation:</strong> Empaneled advocates represent you in magistrate courts, Lok Adalat, and notice responses.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Criminal Case Shield:</strong> Instant bail assistance and complete case compounding under Section 147 NI Act.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct Bank Sanctions:</strong> Authentic compromise settlement sanction letters issued directly on bank letterhead.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Reputation &amp; Job Security:</strong> Strict anti-harassment shield preventing third-party, relative, or workplace intrusion.
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
