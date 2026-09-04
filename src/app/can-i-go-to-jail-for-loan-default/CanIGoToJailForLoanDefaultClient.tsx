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
  CheckSquare,
  FileCheck,
  XCircle,
  MessageSquareQuote,
  Flame,
  Siren,
  ShieldX,
  LifeBuoy
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

export default function CanIGoToJailForLoanDefaultClient() {
  const [activeId, setActiveId] = useState<string>('core-legal-reality');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  const tocItems = [
    { id: 'core-legal-reality', title: '1. The Core Legal Reality: Can You Go to Jail?' },
    { id: 'civil-vs-criminal', title: '2. Civil Debt vs Criminal Fraud Demarcation' },
    { id: 'timeline-of-default', title: '3. What Happens When You Stop Paying (Timeline)' },
    { id: 'quasi-criminal-traps', title: '4. Quasi-Criminal Traps: S. 138 & NACH Bounce' },
    { id: 'infographic-action-blueprint', title: '5. Legal Defense Blueprint Infographic' },
    { id: 'recovery-agent-myths', title: '6. Dismantling Recovery Agent Arrest Threats' },
    { id: 'defense-toolkit', title: '7. Borrower Defense Toolkit & Cease-and-Desist' },
    { id: 'legitimate-bank-remedies', title: '8. Legitimate Civil Remedies Available to Banks' },
    { id: 'debt-settlement-exit', title: '9. OTS Debt Settlement: The Clean Legal Exit' },
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

  const ceaseDesistText = `REGISTERED SPEED POST / FORMAL EMAIL LEGAL NOTICE

To,
The Principal Nodal Officer / Grievance Redressal Officer,
[Lending Bank / NBFC Name],
[Bank Branch / Corporate Headquarters Address]

Subject: Formal Notice to Cease & Desist Unlawful Harassment, Extortionary Coercion, and False Threats of Criminal Prosecution regarding Loan Account No: [Loan Account Number].

Sir / Madam,

I am writing this formal communication to place on judicial record the persistent, unlawful, and coercive tactics deployed by your recovery agents and collection representatives regarding my unsecured personal loan account [Loan Account Number].

1. CIVIL NATURE OF FINANCIAL HARDSHIP:
I have experienced genuine, involuntary financial distress resulting from [job loss / severe medical crisis / business insolvency], which has temporarily impaired my cash flows. Under the Indian Contract Act, 1872, and the landmark Supreme Court ruling in Jolly George Varghese v. The Bank of Cochin (1980) 2 SCC 360, inability to repay an unsecured civil loan due to poverty is strictly a civil matter and does not constitute a criminal offence.

2. GROSS VIOLATION OF RBI FAIR PRACTICES CODE:
Your recovery representatives have repeatedly engaged in prohibited actions under the RBI Master Direction on Fair Practices Code (Aug 2022 & June 2023), including:
a) Calling at inappropriate hours (before 8:00 AM / after 7:00 PM);
b) Threatening immediate police arrest, non-bailable warrants, and criminal FIR registration under Section 420 IPC / Section 318 BNS;
c) Contacting unauthorized third parties, family members, and workplace colleagues to cause public humiliation.

3. CRIMINAL INTIMIDATION & IMPERSONATION:
Threatening arrest without judicial authority and impersonating law enforcement officers constitutes Criminal Intimidation (Section 506 IPC / Section 351 BNS) and Extortion (Section 384 IPC / Section 308 BNS). Under Supreme Court directives in ICICI Bank v. Prakash Kaur (2007), banks are vicariously liable for the criminal acts of their outsourced collection agencies.

DEMAND FOR ACTION:
I hereby call upon your institution to immediately:
1. Cease all third-party, workplace, and off-hours communication;
2. Direct your collection agencies to communicate solely in writing via registered post or official email;
3. Initiate formal, bona fide discussions for a structured One-Time Settlement (OTS) or restructuring under RBI prudential frameworks.

Failure to immediately halt these unlawful practices within 48 hours will compel me to lodge formal complaints before the RBI Integrated Ombudsman (CMS Portal), the Cyber Crime Cell, and institute civil damages suits against your bank and recovery agency for reputational harm.

Yours faithfully,

[Borrower Full Name]
[Registered Mobile Number & Email]
[Residential Address]`;

  const faqs = [
    {
      question: "Can I go to jail simply for being unable to pay a personal loan in India?",
      answer: (
        <p>
          <strong>No. Under Indian law, defaulting on an unsecured personal loan due to financial inability is strictly a civil breach of contract, not a crime.</strong> The Supreme Court of India in the historic judgment <em>Jolly George Varghese v. The Bank of Cochin (1980 2 SCC 360)</em> affirmed that detaining or imprisoning an honest debtor merely on the grounds of poverty or inability to fulfill a contractual obligation violates <strong>Article 21 (Right to Life and Personal Liberty)</strong> of the Constitution of India and Article 11 of the International Covenant on Civil and Political Rights (ICCPR).
        </p>
      )
    },
    {
      question: "What is the legal distinction between civil loan default and criminal fraud?",
      answer: (
        <p>
          A <strong>civil default</strong> occurs when a borrower acts in good faith, makes initial payments, but subsequently suffers unexpected financial distress (such as job termination, business failure, or medical catastrophe) and cannot service the debt. A <strong>criminal offense (Section 420 IPC / Section 318 BNS)</strong> requires conclusive proof of fraudulent intention right from loan origination (<em>mens rea</em>)—such as forged salary certificates, fabricated bank statements, synthetic identities, or deliberate siphoning of disbursed funds without ever intending to pay a single EMI.
        </p>
      )
    },
    {
      question: "Can a bank or recovery agent send the police to arrest me for unpaid EMIs?",
      answer: (
        <p>
          <strong>No, absolutely not. The police have zero jurisdiction to intervene in standard civil loan defaults or arrest borrowers for missed EMIs.</strong> Police officers cannot register an FIR for non-payment of an unsecured loan. Any recovery agent claiming they are calling from a police station or arriving with police escorts is engaging in <em>Criminal Intimidation (Section 506 IPC / Section 351 BNS)</em> and <em>Extortion (Section 384 IPC / Section 308 BNS)</em>, both of which are severely punishable under Indian law.
        </p>
      )
    },
    {
      question: "What happens if my NACH e-Mandate auto-debit bounces under Section 25 PSSA?",
      answer: (
        <p>
          When an electronic auto-debit bounces for insufficient funds, the lending institution may file a complaint under <strong>Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA)</strong>. While framed as a quasi-criminal statutory provision similar to cheque dishonour, <strong>Section 25 is bailable, non-cognizable, and compoundable</strong>. The police cannot arrest you. When a magistrate court issues summons, your legal counsel enters an appearance and secures same-day bail on a personal bond. The underlying matter can then be settled amicably and withdrawn.
        </p>
      )
    },
    {
      question: "Can a bank file a Section 138 cheque bounce case for a personal loan default?",
      answer: (
        <p>
          If the bank deposits a physical Post-Dated Cheque (PDC) or security cheque collected during loan disbursal and it is returned unpaid, they can issue a statutory 15-day demand notice under <strong>Section 138 of the Negotiable Instruments Act, 1881</strong>. However, Section 138 is bailable as a matter of right. Furthermore, under the landmark Supreme Court ruling in <em>Dashrathbhai Trikambhai Patel (2022)</em>, if the bank deposited an undated security cheque for the entire original principal without deducting EMIs already paid (violating Section 56 NI Act), the criminal complaint is legally defective and maintainable.
        </p>
      )
    },
    {
      question: "What are the RBI rules regarding recovery agent harassment and intimidation?",
      answer: (
        <p>
          The Reserve Bank of India (RBI) under its <em>Master Direction on Fair Practices Code</em> strictly mandates that lenders and their recovery agents must NOT: 1) Call borrowers before 8:00 AM or after 7:00 PM; 2) Use abusive, intimidating, or profane language; 3) Contact family members, friends, or employers; 4) Threaten criminal prosecution or police arrest; 5) Visit homes unannounced without displaying legitimate bank ID cards. Breaches must be escalated directly to the bank&apos;s Principal Nodal Officer and the RBI Integrated Ombudsman (CMS Portal).
        </p>
      )
    },
    {
      question: "Can a bank seize my house, car, or household belongings for an unsecured personal loan?",
      answer: (
        <p>
          <strong>No. Personal loans and credit card debts are unsecured financial instruments with zero hypothecation or mortgage attached.</strong> The <em>SARFAESI Act, 2002</em> (which empowers lenders to seize assets without court intervention) applies exclusively to secured loans like home loans or property mortgages. A lender cannot confiscate your personal belongings, furniture, or home for an unsecured loan without an explicit money recovery decree and execution order from a competent civil court.
        </p>
      )
    },
    {
      question: "What legitimate legal actions can a bank take against an unpaid personal loan?",
      answer: (
        <p>
          When an unsecured personal loan defaults (classified as an NPA after 90 days), banks have the following lawful recourses: 1) Report adverse payment history to credit information companies (CIBIL, Experian, Equifax), lowering your credit score; 2) Issue statutory recall notices; 3) File a <strong>Civil Summary Suit under Order 37 of the Code of Civil Procedure, 1908</strong>; 4) Refer the dispute to <strong>National Lok Adalat</strong> for mutual compromise; 5) Initiate Section 138 NI Act or Section 25 PSSA proceedings if cheques or NACH mandates bounced.
      </p>
      )
    },
    {
      question: "How does a One-Time Settlement (OTS) provide a permanent, clean exit?",
      answer: (
        <p>
          A <strong>One-Time Settlement (OTS)</strong> is an official compromise agreement sanctioned by the bank under its board-approved recovery policy. The bank agrees to waive 100% of accumulated penal interest, late fees, and legal charges, along with 40% to 70% of the outstanding principal balance. Once the agreed settlement figure is paid, the bank issues a legally binding <strong>No Dues Certificate (NDC)</strong>, withdraws all pending legal notices, and compounds any court complaints under Section 147 NI Act.
        </p>
      )
    },
    {
      question: "What should I do if a recovery agent sends a fake police arrest warrant on WhatsApp?",
      answer: (
        <p>
          Do not panic and never make a panic payment. Indian judicial courts and police authorities <strong>never serve arrest warrants or criminal summons through informal WhatsApp messages</strong>. These fake documents are fabricated by unethical collection agencies. Take immediate screenshots, record the sender&apos;s phone number, preserve all chat transcripts, and engage SettleLoans advocates to issue a strict criminal intimidation complaint to the bank&apos;s Nodal Officer and local cyber crime authorities.
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
      <section
        className="w-full border-b border-slate-700/80 pt-8 pb-7 md:pt-12 md:pb-9 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-[#60A5FA]" />
            Indian Consumer Debt Rights &amp; Legal Protection (2026)
          </div>

          {/* Compact Title / H1 */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            Can I Go to Jail for Loan Default in India?{' '}
            <span className="text-[#3b82f6] md:text-[#60a5fa]">What Really Happens When You Stop Paying</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Are recovery agents threatening you with police arrest, criminal FIRs under Section 420, or non-bailable warrants? Understand why inability to pay is strictly a civil breach of contract in India, how Supreme Court rulings shield honest borrowers, and how debt settlement provides a clean, legally binding exit.
          </p>

          {/* Metadata Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-3 mb-5">
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

          {/* Hero CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-5 rounded-xl shadow-md hover:shadow-blue-500/20 transition-all duration-300 text-xs sm:text-sm group"
            >
              <span>Get Free Legal Case Evaluation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#civil-vs-criminal"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-2.5 px-4 rounded-xl border border-white/20 transition-all duration-300 text-xs sm:text-sm"
            >
              <BookOpen className="w-4 h-4 text-blue-300" />
              <span>View Civil vs Criminal Matrix</span>
            </a>
          </div>
        </div>
      </section>

      {/* B. Crisp Stats Strip Component */}
      <StatsStrip />

      {/* C. Widescreen 3-Column Grid */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column: Dedicated Track containing ONLY Sticky TOC */}
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

          {/* Middle Column: Expanded Readable Main Body */}
          <main className="w-full min-w-0 font-sans text-slate-800 blog-content">
            
            {/* Key Takeaways Box (Top) */}
            <div className="bg-blue-50 border-l-8 border-[#1F5EFF] rounded-r-2xl p-6 md:p-8 mb-10 shadow-sm">
              <div className="flex items-center gap-2 text-[#1F5EFF] font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5" />
                <span>KEY LEGAL TAKEAWAYS: LOAN DEFAULT &amp; ARREST MYTHS</span>
              </div>
              <ul className="space-y-3 text-sm md:text-base text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero Immediate Police Arrest:</strong> Defaulting on an unsecured personal loan due to financial inability is a civil breach of contract under the Indian Contract Act, 1872. Police have zero authority to register an FIR or arrest you.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Supreme Court Constitutional Protection:</strong> In <em>Jolly George Varghese v. Bank of Cochin (1980)</em>, the Supreme Court ruled that jailing an honest debtor who lacks the financial capacity to pay violates Article 21 of the Indian Constitution.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Bail as a Matter of Right:</strong> Even if a bank initiates court proceedings for cheque dishonour (Section 138 NI Act) or NACH bounce (Section 25 PSSA), these are bailable quasi-criminal offenses where regular bail is granted on day one.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Strict RBI Anti-Harassment Mandates:</strong> Recovery agents threatening police arrest, sending fake court summons on WhatsApp, or visiting workplaces unannounced commit punishable criminal offences under Indian penal laws.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>One-Time Settlement (OTS) Dissolves All Liability:</strong> A formal debt settlement through SettleLoans permanently closes the loan account, halts legal notices, and secures a 100% binding No Dues Certificate (NDC).
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="core-legal-reality" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                1. The Core Legal Reality: Can You Go to Jail for Loan Default in India?
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                When financial catastrophe strikes—whether triggered by sudden employment termination, drastic salary cuts, business insolvency, or catastrophic family medical emergencies—hundreds of thousands of honest salaried professionals across India face the terrifying prospect of defaulting on their personal loans. In this state of acute vulnerability, third-party collection agencies deploy aggressive psychological warfare, bombarding borrowers with alarming messages claiming that <em>police squads are arriving at their doorstep</em> or that a <em>non-bailable arrest warrant has been issued</em>.
              </p>

              {/* Regulatory Box */}
              <div className="bg-slate-100 border-l-4 border-[#1F5EFF] p-5 rounded-r-xl my-6">
                <p className="text-sm md:text-base font-semibold text-slate-900 italic">
                  &quot;To cast a person in prison because of his poverty and consequent inability to meet his contractual liability is a violation of Article 21 of the Constitution... The simple default to pay is not enough; there must be some element of bad faith beyond mere indifference to pay, some deliberate or dishonest evading on the part of the debtor.&quot;
                </p>
                <p className="text-xs text-slate-500 mt-2 font-medium">
                  — Supreme Court of India in <em>Jolly George Varghese &amp; Anr. v. The Bank of Cochin</em> (1980) 2 SCC 360
                </p>
              </div>

              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Let us establish the foundational legal reality with absolute clarity: <strong>In India, defaulting on an unsecured personal loan due to genuine inability to pay is NOT a criminal offense. It is strictly a civil breach of contract governed by the Indian Contract Act, 1872.</strong> You cannot be thrown into jail simply because you ran out of money to service your personal loan or credit card debt.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Under the Indian legal framework, lending institutions are commercial entities that price the risk of unsecured default into their interest rates (which typically range from 12% to 28% per annum). The law explicitly distinguishes between an <strong>unfortunate debtor</strong> who genuinely lacks the financial capacity to pay and a <strong>fraudulent imposter</strong> who intentionally cheated the lender from inception.
              </p>
            </section>

            {/* Section 2 */}
            <section id="civil-vs-criminal" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                2. Civil Debt vs. Criminal Fraud: The Legal Demarcation &amp; Penal Codes
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                To eliminate borrower anxiety, it is essential to analyze how Indian criminal law (the <em>Indian Penal Code, 1860</em> and the <em>Bharatiya Nyaya Sanhita, 2023</em>) defines financial crimes versus civil contract breaches. Recovery agents routinely drop terms like <em>&quot;Section 420 IPC&quot;</em> or <em>&quot;FIR for cheating&quot;</em> to intimidate borrowers into borrowing from relatives or illegal loan sharks to pay the bank.
              </p>

              {/* 4-Sided Bordered Comparative Table */}
              <div className="overflow-x-auto my-8">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="w-1/4">Legal Parameter</th>
                      <th className="w-3/8">Civil Debt Default (Your Scenario)</th>
                      <th className="w-3/8">Criminal Fraud (Cheating / Forgery)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Governing Statutes</td>
                      <td><em>Indian Contract Act, 1872</em> &amp; Civil Procedure Code (CPC), 1908</td>
                      <td><em>Section 420 IPC / Section 318 BNS</em> &amp; Section 468 IPC (Forgery)</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Intent (Mens Rea)</td>
                      <td>Zero fraudulent intent. Loan availed in good faith; payments made until financial distress occurred.</td>
                      <td>Deliberate, fraudulent intent to cheat the lender present right from the day of application.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Documentation Provided</td>
                      <td>Genuine PAN, Aadhaar, authentic salary slips, and legitimate bank statements.</td>
                      <td>Forged salary slips, synthetic identity, fabricated bank statements, or shell company credentials.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Repayment Track Record</td>
                      <td>Paid several EMIs diligently until unexpected crisis (job loss, illness, insolvency) occurred.</td>
                      <td>Absconded immediately after loan disbursal without paying even a single installment.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Police / Arrest Authority</td>
                      <td className="text-emerald-700 font-semibold">Zero police power. Police cannot register FIR or arrest debtor.</td>
                      <td className="text-rose-700 font-semibold">Police can investigate and arrest upon FIR registered with Magistrate sanction.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Legal Remedy for Lender</td>
                      <td>Civil summary suit for money recovery (Order 37 CPC) or consensual Lok Adalat settlement.</td>
                      <td>Criminal trial before Sessions Court / Metropolitan Magistrate.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 mt-8">
                Why Section 420 IPC / Section 318 BNS Cannot Be Applied to Honest Defaulters
              </h3>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                For a bank to successfully register an FIR or maintain a criminal complaint under <strong>Section 420 IPC (Cheating)</strong> or <strong>Section 318 of the Bharatiya Nyaya Sanhita (BNS)</strong>, they must establish beyond reasonable doubt that the borrower had a <em>dishonest intention to deceive from day one</em>.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                In dozens of landmark judgments, the Supreme Court and High Courts have consistently quashed frivolous criminal complaints filed by banks against defaulters, observing that commercial lenders cannot convert a purely civil recovery dispute into a criminal intimidation tool. If you took a loan honestly and paid your initial EMIs, any subsequent inability to pay is 100% civil.
              </p>
            </section>

            {/* Section 3 */}
            <section id="timeline-of-default" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                3. What Actually Happens When You Stop Paying Your Personal Loan (Timeline)
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-6 text-slate-700">
                When you stop paying your personal loan EMIs, the bank follows a standardized, regulatory-governed escalation pathway established by the Reserve Bank of India (RBI). Knowing this timeline strips away the fear of the unknown:
              </p>

              <div className="space-y-6 my-8">
                {/* Stage 1 */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 relative">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-blue-100 text-[#1F5EFF] font-black text-sm flex items-center justify-center">
                        01
                      </span>
                      <h3 className="text-lg font-bold text-slate-900">
                        Days 1–30: SMA-0 (Special Mention Account 0) &amp; Initial Grace
                      </h3>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                      Soft Collection
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    When the first EMI auto-debit bounces, the bank assesses a bounce fee (₹400–₹600) and penal interest. Automated SMS alerts, emails, and gentle reminder calls begin. At this stage, your credit report reflects a 30-day DPD (Days Past Due). No legal action is taken.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 relative">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-blue-100 text-[#1F5EFF] font-black text-sm flex items-center justify-center">
                        02
                      </span>
                      <h4 className="text-lg font-bold text-slate-900">
                        Days 31–60: SMA-1 &amp; Escalated Tele-Calling
                      </h4>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                      Moderate Pressure
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    After missing two consecutive EMIs, the account is categorized as SMA-1. Calls from the bank&apos;s internal collection team increase in frequency (3–5 calls daily). The bank may offer a short-term restructuring or request partial token payments.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 relative">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-blue-100 text-[#1F5EFF] font-black text-sm flex items-center justify-center">
                        03
                      </span>
                      <h4 className="text-lg font-bold text-slate-900">
                        Days 61–90: SMA-2 &amp; Third-Party Agency Assignment
                      </h4>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-orange-50 text-orange-700 border border-orange-200">
                      Hard Collection
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    With three unpaid EMIs, the bank transfers the file to external third-party recovery agencies (Direct Recovery Agents - DRAs). This is when aggressive collection calls, unannounced home visits, and deceptive legal threats peak. Borrowers must remain calm and assert their RBI Fair Practice rights.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 relative">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-blue-100 text-[#1F5EFF] font-black text-sm flex items-center justify-center">
                        04
                      </span>
                      <h4 className="text-lg font-bold text-slate-900">
                        Day 90+: Formal NPA Classification (Non-Performing Asset)
                      </h4>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                      Statutory Default
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Under RBI prudential norms, continuously overdue accounts crossing 90 days are officially classified as <strong>Non-Performing Assets (NPAs)</strong>. The bank writes off unpaid interest and makes standard provisioning on its balance sheet. This triggers formal statutory legal demand notices and opens the window for One-Time Settlement (OTS) negotiations.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 relative">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-blue-100 text-[#1F5EFF] font-black text-sm flex items-center justify-center">
                        05
                      </span>
                      <h4 className="text-lg font-bold text-slate-900">
                        Days 90–180+: Formal Legal Notices &amp; Settlement Window
                      </h4>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Resolution Stage
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    The bank dispatches formal advocate demand notices (Loan Recall Notice, Section 138 notice for bounced cheques, Section 25 PSSA notice for bounced NACH, or pre-litigation Lok Adalat notices). At this stage, engaging professional debt settlement representation like SettleLoans allows you to secure a 40% to 70% OTS waiver and permanently close the debt.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="quasi-criminal-traps" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                4. The Quasi-Criminal Traps: Section 138 NI Act &amp; Section 25 PSSA (NACH Bounce)
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                While a standard personal loan default is purely civil, banks frequently attempt to introduce criminal pressure through two specific statutory mechanisms: <strong>bouncing physical Post-Dated Cheques (Section 138 NI Act)</strong> and <strong>bouncing electronic NACH auto-debit mandates (Section 25 PSSA)</strong>.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Understanding these provisions is vital to demystifying your situation and realizing why you will NOT be abruptly arrested:
              </p>

              {/* S. 138 vs S. 25 Comparison Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
                <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm">
                  <div className="flex items-center gap-2 text-slate-900 font-black text-base mb-3">
                    <FileText className="w-5 h-5 text-[#1F5EFF]" />
                    <span>Section 138 (Negotiable Instruments Act, 1881)</span>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Trigger:</strong> Dishonour of a physical signed cheque / PDC for insufficient funds.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Notice Requirement:</strong> Mandatory 30-day statutory demand notice with 15-day cure window.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Bail Status:</strong> 100% Bailable and Non-Cognizable. Police cannot arrest without judicial warrant.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Settlement:</strong> 100% Compoundable under Section 147 NI Act at any stage.</span>
                    </li>
                  </ul>
                </div>

                <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm">
                  <div className="flex items-center gap-2 text-slate-900 font-black text-base mb-3">
                    <ZapIcon className="w-5 h-5 text-[#1F5EFF]" />
                    <span>Section 25 (Payment &amp; Settlement Systems Act, 2007)</span>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Trigger:</strong> Dishonour of electronic NACH e-Mandate / ECS auto-debit instructions.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Notice Requirement:</strong> Statutory demand notice within 30 days of receiving the return memo.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Bail Status:</strong> Bailable as a statutory right upon first court appearance.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Settlement:</strong> Fully compoundable and dismissable upon One-Time Settlement (OTS).</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4">
                The Supreme Court Shield on Security Cheques (Dashrathbhai Patel Precedent)
              </h3>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Banks often collect blank, undated security cheques during initial loan sanction. When you default after paying 12 or 24 EMIs, the bank unilaterally fills the original total loan amount plus inflated penalties onto that security cheque and presents it for clearing.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                In <em>Dashrathbhai Trikambhai Patel v. Hitesh Mahendrabhai Patel (2022)</em>, the Supreme Court ruled that under <strong>Section 56 of the NI Act</strong>, a cheque must represent the exact, legally enforceable, crystallized debt on the date of presentation. If the bank fails to endorse prior EMI repayments on the cheque and presents an inflated instrument, <strong>the Section 138 prosecution is legally invalid and liable to be dismissed</strong>.
              </p>
            </section>

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
                      Can I Go to Jail for Loan Default in India? Legal Reality &amp; Process Overview
                    </h3>
                  </div>
                </div>
                <a
                  href="/images/infographics/can-i-go-to-jail-for-loan-default.jpg"
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
                    src="/images/infographics/can-i-go-to-jail-for-loan-default.jpg"
                    alt="Can I Go to Jail for Loan Default Summary Infographic"
                    className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Quick Crux Footer Strip */}
              <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span><strong>Key Takeaway:</strong> Inability to pay personal loans is a civil contract breach; you cannot be jailed. Settle your debt cleanly with 40%–70% waivers.</span>
                </div>
                <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                  Get Free Case Evaluation &rarr;
                </Link>
              </div>
            </div>

            {/* Section 5 */}
            <section id="recovery-agent-myths" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                5. Dismantling Recovery Agent Coercion: The Myth of Police Arrest &amp; Fake Warrants
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                The immense fear borrowers suffer rarely stems from actual court proceedings—it stems from unlawful psychological harassment by outsourced collection agents. Unethical agents weaponize legal misinformation to coerce panic repayments.
              </p>

              {/* Common Recovery Agent Lies vs Legal Facts */}
              <div className="space-y-4 my-8">
                <div className="bg-rose-50/60 border border-rose-200 rounded-2xl p-5">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm md:text-base">
                        Lie #1: &quot;Police officers are arriving with an arrest warrant today.&quot;
                      </h3>
                      <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                        <strong>The Legal Fact:</strong> Police have zero jurisdiction over civil loans. Arrest warrants can only be issued by a Judicial Magistrate after months of ignored judicial summonses. Recovery agents have zero authority to summon the police.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-rose-50/60 border border-rose-200 rounded-2xl p-5">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm md:text-base">
                        Lie #2: &quot;We will seize your furniture, electronics, and ancestral house tomorrow.&quot;
                      </h4>
                      <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                        <strong>The Legal Fact:</strong> Personal loans are completely unsecured. The SARFAESI Act does NOT apply. A lender cannot confiscate a single household item without a formal civil court decree and execution warrant, which takes years.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-rose-50/60 border border-rose-200 rounded-2xl p-5">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm md:text-base">
                        Lie #3: &quot;We will call your HR and get you terminated from your job.&quot;
                      </h4>
                      <p className="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                        <strong>The Legal Fact:</strong> Contacting third parties, employers, or relatives is explicitly prohibited by RBI Master Directions and constitutes actionable criminal defamation (Section 499/500 IPC / Section 356 BNS) and workplace intrusion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4">
                RBI Fair Practices Code &amp; Supreme Court Ruling in ICICI Bank v. Prakash Kaur
              </h3>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                In <em>ICICI Bank v. Prakash Kaur (2007) 2 SCC 711</em>, the Supreme Court severely condemned the use of musclemen and abusive recovery agents, ruling that banks must adhere strictly to the rule of law.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                The Reserve Bank of India&apos;s updated <strong>Master Direction on Recovery Agents (August 2022 &amp; June 2023)</strong> establishes binding rules:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 my-4">
                <li className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <Clock className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <span>Calls permitted only between 8:00 AM &amp; 7:00 PM</span>
                </li>
                <li className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Mandatory display of Bank DRA authorization ID</span>
                </li>
                <li className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <Lock className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <span>Zero contact with friends, relatives, or colleagues</span>
                </li>
                <li className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Strict prohibition of abusive, threatening language</span>
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="defense-toolkit" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                6. Borrower Defense Toolkit &amp; Interactive Cease-and-Desist Template
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                If collection agents are harassing you, you must establish a formal paper trail. Sending a structured Cease-and-Desist legal notice immediately shifts the legal leverage in your favor:
              </p>

              {/* Copyable Legal Notice Box */}
              <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 md:p-6 my-6 shadow-md border border-slate-800">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-700">
                  <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-blue-300 uppercase tracking-wider">
                    <FileText className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Formal Anti-Harassment Cease &amp; Desist Notice Template</span>
                  </div>
                  <button
                    onClick={() => handleCopy(ceaseDesistText, 1)}
                    className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-[#1F5EFF] hover:bg-blue-600 text-white text-xs font-bold transition-colors"
                  >
                    {copiedIndex === 1 ? (
                      <>
                        <CheckCheck className="w-3.5 h-3.5" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Template</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="text-[11px] sm:text-xs font-mono text-slate-300 whitespace-pre-wrap leading-relaxed overflow-x-auto max-h-[380px] p-2 bg-slate-950/60 rounded-xl border border-slate-800/80">
                  {ceaseDesistText}
                </pre>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 my-6 text-xs sm:text-sm text-slate-700">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#1F5EFF]" />
                  <span>How to Dispatch This Cease &amp; Desist Notice:</span>
                </h3>
                <ol className="list-decimal list-inside space-y-1.5 text-slate-600">
                  <li>Fill in your loan account number, bank details, and specific agent names/dates of calls.</li>
                  <li>Email the notice directly to the bank&apos;s <strong>Principal Nodal Officer (PNO)</strong> and Customer Care Head.</li>
                  <li>Send a physical copy via <strong>Registered Speed Post</strong> to the bank&apos;s regional branch.</li>
                  <li>Retain the postal tracking receipt and email delivery confirmation as judicial evidence.</li>
                </ol>
              </div>
            </section>

            {/* Section 7 */}
            <section id="legitimate-bank-remedies" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                7. Legitimate Civil Remedies Available to Banks for Unsecured Loans
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                While banks cannot imprison you, they do possess legitimate civil legal recourses to recover outstanding debts. Understanding what these actual legal procedures are enables you to respond proactively:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-8">
                <div className="border border-slate-200 rounded-2xl p-5 bg-white shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#1F5EFF] flex items-center justify-center font-bold mb-3">
                    <Gavel className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    1. Civil Summary Suit (Order 37 CPC)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lenders can file a summary suit in a civil court for debt recovery. The borrower is served formal summons and has 10 days to enter appearance and seek &quot;Leave to Defend&quot; highlighting financial hardship, disputing penal calculations, or requesting installment schedules.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-2xl p-5 bg-white shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#1F5EFF] flex items-center justify-center font-bold mb-3">
                    <Landmark className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">
                    2. National Lok Adalat (NALSA)
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Conducted quarterly across India under the Legal Services Authorities Act, 1987. Lok Adalat is a voluntary, non-adversarial dispute resolution platform where bank officials and borrowers agree to mutually acceptable OTS compromises.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-2xl p-5 bg-white shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#1F5EFF] flex items-center justify-center font-bold mb-3">
                    <Scale className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">
                    3. Commercial Arbitration
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Some loan contracts include an arbitration clause. However, under Supreme Court precedents (<em>Perkins Eastman, 2019</em>), banks cannot unilaterally appoint a sole biased arbitrator without borrower consent or court appointment under Section 11 of the Arbitration Act.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section id="debt-settlement-exit" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                8. One-Time Settlement (OTS): The Permanent, Legally Binding Clean Exit
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                If you cannot afford to repay your accumulated personal loan principal and ballooning penal charges, continuing in indefinite default is counterproductive. The ultimate legal resolution is a structured <strong>One-Time Settlement (OTS)</strong> negotiated directly with the bank&apos;s authorized management.
              </p>

              {/* SettleLoans 4-Step Resolution Blueprint */}
              <div className="bg-gradient-to-br from-slate-900 to-[#0A2540] text-white rounded-3xl p-6 md:p-8 my-8 shadow-xl">
                <div className="flex items-center gap-2 text-blue-300 text-xs font-bold uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The SettleLoans Professional Representation Protocol</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-4 text-white">
                  How SettleLoans Protects Borrowers &amp; Negotiates Clean Exits
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                    <span className="text-xs font-black text-blue-300 uppercase tracking-wider block mb-1">
                      Step 1: Hardship &amp; Ledger Audit
                    </span>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      We scrutinize your loan agreement, recalculate unlawful compound penalties, and compile certified financial hardship documentation.
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                    <span className="text-xs font-black text-blue-300 uppercase tracking-wider block mb-1">
                      Step 2: Legal Shield &amp; Notice Reply
                    </span>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      Our empaneled advocates issue registered legal replies to bank demand notices, halting recovery harassment and establishing your legal defenses.
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                    <span className="text-xs font-black text-blue-300 uppercase tracking-wider block mb-1">
                      Step 3: OTS Negotiation (40%–70% Waiver)
                    </span>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      We negotiate directly with the bank&apos;s credit committee to secure massive waivers on penal interest, late fees, and principal balance.
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                    <span className="text-xs font-black text-blue-300 uppercase tracking-wider block mb-1">
                      Step 4: Bank Sanction Letter &amp; NDC
                    </span>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      We ensure payment is made only against an official bank compromise sanction letter, securing an authentic No Dues Certificate (NDC) and court case compounding.
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-slate-300">
                    Over 10,000+ borrowers successfully defended across India.
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all"
                  >
                    <span>Schedule Free Strategy Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </section>

            {/* Company Section Reusable Component */}
            <CompanySection />

            {/* Section 10: FAQs */}
            <section id="faqs" className="scroll-mt-28 mb-14">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-50 text-[#1F5EFF] text-xs font-bold mb-3 uppercase tracking-wider">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Borrower Rights &amp; Legal Clarity</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">
                  Frequently Asked Questions
                </h2>
                <p className="text-sm text-slate-600">
                  Straightforward, legally verified answers regarding loan defaults, recovery agent threats, court summons, and debt settlement in India.
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

            {/* Regulatory Sources Strip (5 Official Links) */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                <Landmark className="w-4 h-4 text-[#1F5EFF]" />
                <span>Authoritative Legal &amp; Regulatory Sources</span>
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://sci.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    Supreme Court of India — Landmark Rulings on Article 21 &amp; Debtor Inability (Jolly George Varghese, 1980)
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    Reserve Bank of India (RBI) — Master Direction on Fair Practices Code for Lenders &amp; Recovery Agents
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://legislative.gov.in/actsofparliamentfromtheyear/indian-contract-act-1872"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    Ministry of Law &amp; Justice — The Indian Contract Act, 1872 (Act No. 9 of 1872)
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
                    National Legal Services Authority (NALSA) — National Lok Adalat Pre-Litigation &amp; Loan Settlement Guidelines
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
                    RBI Integrated Ombudsman Scheme (CMS Portal) — Redressal of Unlawful Bank &amp; Recovery Agent Harassment
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
                  href="/section-138-cheque-bounce-loan-default"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Section 138 Cheque Bounce Defense
                </Link>
                <Link
                  href="/recovery-agent-visiting-workplace-office"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Recovery Agent Workplace Harassment
                </Link>
                <Link
                  href="/personal-loan-legal-notice"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Legal Notice Reply
                </Link>
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Lok Adalat Notice for Personal Loan
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Settlement CIBIL Impact
                </Link>
                <Link
                  href="/personal-loan-settlement-letter-format"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Settlement Sanction Letter Format
                </Link>
                <Link
                  href="/personal-loan-settlement-fees"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Loan Settlement Fee Structure
                </Link>
                <Link
                  href="/personal-loan-settlement-vs-closure"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Loan Settlement vs Closure
                </Link>
                <Link
                  href="/personal-loan-settlement-vs-restructuring"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Settlement vs Restructuring
                </Link>
                <Link
                  href="/personal-loan-settlement-services"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Settlement Services
                </Link>
              </div>
            </div>
          </main>

          {/* Right Column: Dedicated Track containing Author, CTA, and Trust Cards */}
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
                    Chief Debt Strategist &amp; Consumer Rights Specialist
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Ashish has over a decade of specialized experience shielding distressed borrowers from unlawful recovery harassment, defending against quasi-criminal notices, and negotiating structured One-Time Settlements across India.
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
                <span>Immediate Borrower Protection</span>
              </div>
              <div className="text-xl font-black mb-3 leading-tight">
                Facing Police Threats or Harassment from Recovery Agents?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Stop living in fear of arrest. Connect with an empaneled SettleLoans advocate to issue an urgent Cease &amp; Desist notice, protect your dignity, and negotiate a clean debt settlement.
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
              <div className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                <span>Why Distressed Borrowers Trust SettleLoans</span>
              </div>
              <ul className="space-y-3.5 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Anti-Harassment Shield:</strong> Immediate legal intervention stopping abusive recovery calls and unannounced workplace visits.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Empaneled Legal Representation:</strong> Experienced advocates drafting notice replies and representing you in court &amp; Lok Adalat.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct Bank Compromise:</strong> Formal settlement sanction letters issued directly on authentic bank letterheads.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Confidential &amp; Dignified:</strong> Absolute data confidentiality protecting your career, family, and social standing.
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

// Zap Icon helper if not in main imports
function ZapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
