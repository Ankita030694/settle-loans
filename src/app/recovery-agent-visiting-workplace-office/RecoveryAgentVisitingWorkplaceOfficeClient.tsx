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
  HelpCircle
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

export default function RecoveryAgentVisitingWorkplaceOfficeClient() {
  const [activeId, setActiveId] = useState<string>('rbi-workplace-rules');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  const tocItems = [
    { id: 'rbi-workplace-rules', title: '1. RBI Rules on Office Visits' },
    { id: 'agent-dos-and-donts', title: '2. Legal Dos & Don\'ts Breakdown' },
    { id: 'penal-code-violations', title: '3. Criminal & Privacy Violations' },
    { id: 'protecting-your-job-hr', title: '4. Protecting Your Job & HR Script' },
    { id: 'infographic-action-blueprint', title: '5. Action Blueprint Infographic' },
    { id: 'step-by-step-defense', title: '6. Live Incident Action Plan' },
    { id: 'complaint-draft-templates', title: '7. Official Complaint Templates' },
    { id: 'ots-permanent-relief', title: '8. One-Time Settlement (OTS)' },
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

  const hrTemplateText = `Subject: Confidential Notice: Unauthorized Third-Party Harassment Regarding Disputed Civil Matter

Dear [HR Manager / Head of Human Resources],

I am writing to proactively bring to your attention a confidential matter regarding an ongoing civil dispute with a lending institution ([Bank/NBFC Name]).

Due to an unfair billing and commercial dispute currently being handled by my legal counsel, an unauthorized third-party recovery agency has engaged in unlawful intimidation tactics, including attempting to contact my workplace.

Please be advised of the following facts:
1. This is strictly a personal civil dispute currently undergoing formal legal representation and dispute resolution under RBI Banking Ombudsman guidelines.
2. The Reserve Bank of India (RBI Master Directions on Outsourcing of Financial Services, 2022/2023) and the Supreme Court of India strictly prohibit recovery agents from visiting a borrower's workplace, contacting employers, or disclosing personal financial data to colleagues.
3. My legal counsel has already initiated formal legal cease-and-desist proceedings against the lender's Principal Nodal Officer for violation of privacy under Article 21 and illegal workplace intrusion.

Should any individual arrive at reception or contact the switchboard claiming to represent [Bank Name], please instruct front-desk security to deny entry on grounds of unauthorized commercial trespass, and do not entertain any communication. Please forward any incoming details directly to me.

I sincerely apologize for any inconvenience caused by this unlawful external intrusion and remain 100% committed to my daily professional duties.

Sincerely,
[Your Full Name]
[Employee ID / Designation]`;

  const pnoComplaintTemplate = `To,
The Principal Nodal Officer (PNO) / Grievance Redressal Officer,
[Bank / NBFC Name]
[Address / Email Address]

Subject: URGENT COMPLAINT & CEASE-AND-DESIST: ILLEGAL WORKPLACE HARASSMENT, CRIMINAL TRESPASS, AND VIOLATION OF RBI FAIR PRACTICES CODE (Loan A/c No: [Account Number])

Respected Sir/Madam,

I am writing to register an urgent grievance against the unlawful, coercive, and criminal conduct of your recovery agents/collection agency regarding Loan Account No: [Your Account Number].

On [Date] at approximately [Time], an agent identifying as representing your institution arrived at my workplace situated at [Office Address] and attempted to breach reception, interrogate office security, and demand access to my HR department regarding alleged loan arrears.

This conduct constitutes an egregious violation of:
1. RBI Master Directions on Outsourcing of Financial Services & Fair Practices Code: Strict prohibition against contacting borrowers at their place of work without explicit consent or disclosing debt status to employers/third parties.
2. Supreme Court of India Landmark Judgments (ICICI Bank v. Shanti Devi Sharma): Strict condemnation of strong-arm recovery tactics and harassment at work.
3. Indian Penal Code / Bharatiya Nyaya Sanhita: Criminal Trespass (Sec 441/447 IPC), Criminal Intimidation (Sec 503/506 IPC), and Defamation (Sec 499/500 IPC).

DEMANDS FOR IMMEDIATE REDRESSAL:
1. Immediately withdraw and blacklist the third-party recovery agency assigned to my file.
2. Provide a written undertaking that no field agent shall contact my employer, colleagues, or visit my workplace.
3. Conduct all future communication solely in writing via registered email or through my designated legal counsel at SettleLoans.

Failing receipt of a formal confirmation within 48 hours, I shall escalate this matter to the RBI Banking Ombudsman (CMS Portal), file a Police Complaint / FIR for criminal intimidation, and institute civil proceedings for damages to my professional reputation.

Yours faithfully,
[Your Full Name]
[Contact Number]
[Registered Email Address]`;

  const faqs = [
    {
      question: "Can a recovery agent legally visit my office or workplace in India?",
      answer: (
        <p>
          <strong>Under RBI Master Directions, recovery agents are strictly prohibited from visiting your workplace without prior consent.</strong> The Reserve Bank of India (RBI) circulars on the <em>Fair Practices Code</em> and <em>Outsourcing of Financial Services (updated 2022 and 2023)</em> mandate that recovery agents must first exhaust residential communication. They cannot show up at your office, factory, or corporate workplace unless you have explicitly provided written consent or have become entirely untraceable at your registered residential address. Even in authorized visits, agents are barred from creating any public scene or speaking to colleagues.
        </p>
      )
    },
    {
      question: "Can recovery agents talk to my HR department, manager, or colleagues about my loan?",
      answer: (
        <p>
          <strong>No, absolutely not. Disclosing debt details to third parties is illegal.</strong> Under RBI regulations, the Banking Codes and Standards Board of India (BCSBI) guidelines, and the landmark Supreme Court judgment on privacy (<em>K.S. Puttaswamy v. Union of India</em>), lenders and their agents are bound by strict customer confidentiality. Calling office landlines, approaching receptionists, or emailing HR departments to discuss your personal financial arrears constitutes actionable <strong>civil defamation (Section 499/500 IPC)</strong> and a major regulatory offense that attracts heavy monetary penalties on the lending bank.
        </p>
      )
    },
    {
      question: "What should I do immediately if a recovery agent shows up at my office reception?",
      answer: (
        <p>
          Follow this 4-step emergency protocol: 1) <strong>Do not panic</strong> and ask the receptionist to keep the agent seated in the visitor holding area; 2) Immediately demand their <strong>Bank Authority Letter, Agency Identity Card, and IIBF Debt Recovery Agent (DRA) Certification</strong>; 3) Clearly inform the agent on audio recording that the premises are private commercial property and that they must vacate immediately; 4) If they become aggressive, instruct corporate security to remove them for illegal trespass and immediately contact SettleLoans to serve a legal notice to the bank&apos;s Principal Nodal Officer.
        </p>
      )
    },
    {
      question: "What are the allowed calling and visiting hours for recovery agents under RBI guidelines?",
      answer: (
        <p>
          The RBI has fixed the permissible window for customer contact strictly between <strong>8:00 AM and 7:00 PM</strong>. Any phone calls, WhatsApp messages, or personal visits conducted before 8:00 AM or after 7:00 PM are illegal. Furthermore, persistent calling, spamming multiple times an hour, or sending threatening messages during office hours constitutes criminal harassment.
        </p>
      )
    },
    {
      question: "Can my employer terminate my employment if a recovery agent creates a scene at the office?",
      answer: (
        <p>
          <strong>A personal loan default is a civil contractual dispute, not an employment crime.</strong> Under Indian labor and employment laws, an employer cannot legally terminate a confirmed employee solely because of a personal financial dispute with a bank. However, to safeguard your reputation against third-party nuisance, you should submit a formal confidential disclosure to your HR manager explaining that an external agency is acting unlawfully and that you have initiated legal proceedings against the bank.
        </p>
      )
    },
    {
      question: "Which sections of the Indian Penal Code (IPC) and Bharatiya Nyaya Sanhita (BNS) protect borrowers from workplace harassment?",
      answer: (
        <p>
          You can initiate criminal complaints under: 1) <strong>Criminal Trespass</strong> (Section 441/447 IPC / Section 329 BNS) for entering private office premises without authorization; 2) <strong>Criminal Intimidation</strong> (Section 503/506 IPC / Section 351 BNS) for threatening your job, livelihood, or safety; 3) <strong>Defamation</strong> (Section 499/500 IPC / Section 356 BNS) for tarnishing your professional standing in front of colleagues; and 4) <strong>Extortion</strong> (Section 383/384 IPC / Section 308 BNS) if they demand spot cash under duress.
        </p>
      )
    },
    {
      question: "How do I file a complaint with the RBI Banking Ombudsman against workplace recovery harassment?",
      answer: (
        <p>
          First, submit a formal written complaint to the bank&apos;s <strong>Principal Nodal Officer (PNO)</strong> via registered email, citing the date, time, and agent details. If the bank fails to provide a satisfactory resolution within 30 days, file an online complaint on the <strong>RBI Complaint Management System (CMS portal: cms.rbi.org.in)</strong> under the <em>Reserve Bank - Integrated Ombudsman Scheme, 2021</em>. The Ombudsman has the power to award compensation up to ₹20 Lakhs for financial loss and up to ₹1 Lakh for mental harassment and loss of time.
        </p>
      )
    },
    {
      question: "How does a formal legal notice from an advocate stop recovery agents from coming to my office?",
      answer: (
        <p>
          When an empaneled SettleLoans advocate issues a legal cease-and-desist notice directly to the bank&apos;s Managing Director and Principal Nodal Officer, the bank is placed on formal legal notice of vicarious liability. Because banks face severe regulatory audits and fines from the RBI for agent misconduct, their central legal and compliance division immediately issues a &quot;Hard Stop&quot; instruction to the collection agency, recalling the physical visit mandate.
        </p>
      )
    },
    {
      question: "Can I settle my loan through One-Time Settlement (OTS) to stop workplace recovery pressure permanently?",
      answer: (
        <p>
          <strong>Yes. A formal One-Time Settlement (OTS) is the most definitive, permanent legal solution.</strong> Through SettleLoans, experienced financial negotiators represent your genuine financial hardship to the bank&apos;s stressed asset committee, securing a substantial waiver (often 40% to 70% of total dues). Once the OTS sanction letter is issued and the compromise amount paid, the bank recalls all collection agencies and issues an official <strong>No Dues Certificate (NDC)</strong>, permanently closing the account.
        </p>
      )
    },
    {
      question: "Will filing a harassment complaint against recovery agents damage my chances of settling the loan?",
      answer: (
        <p>
          <strong>No, in fact it dramatically strengthens your negotiating leverage.</strong> When you legally document clear violations of RBI Fair Practices Code, trespass, and privacy breaches, the bank recognizes that continued unlawful pressure exposes them to Ombudsman penalties and consumer court litigation. This motivates the bank&apos;s recovery division to approve a swift, favorable One-Time Settlement on terms you can afford.
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
            Workplace Legal Shield &amp; Job Security Protection
          </div>

          {/* H1 Headline - Compact Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            Recovery Agent Visiting Workplace?{' '}
            <span className="text-[#60A5FA]">RBI Rules, Legal Shield &amp; How to Stop It</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Are recovery agents threatening to visit your office, contact your HR department, or humiliate you in front of colleagues? Discover strict RBI prohibitions, criminal trespass protections under IPC/BNS, drafted legal complaints, and how advocate intervention protects your job.
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
              <span>Get Free Legal Harassment Shield</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#rbi-workplace-rules"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold py-2.5 px-4 rounded-xl border border-white/20 transition-all duration-300 text-xs sm:text-sm"
            >
              <BookOpen className="w-4 h-4 text-blue-300" />
              <span>Read Full Legal Defense Guide</span>
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
                <span>KEY TAKEAWAYS: YOUR LEGAL RIGHTS AT WORK</span>
              </div>
              <ul className="space-y-3 text-sm md:text-base text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Strict RBI Ban on Workplace Visits:</strong> Under RBI Master Directions on Outsourcing of Financial Services (2022/2023), recovery agents cannot visit your office unless residential communication is completely exhausted and you have given explicit consent.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero Third-Party Disclosure:</strong> Contacting your HR manager, supervisor, or colleagues is an actionable violation of privacy under Article 21 and the RBI Fair Practices Code, carrying civil and criminal defamation liability.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Criminal Trespass &amp; Intimidation:</strong> Entering private corporate property without company authorization is Criminal Trespass under Section 441/447 IPC (Section 329 BNS) and Criminal Intimidation under Section 503/506 IPC (Section 351 BNS).
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Your Job Is Legally Protected:</strong> Unsecured personal loan default is a purely civil contractual matter. Employers cannot lawfully terminate you for a personal bank dispute.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Immediate Advocate Intervention:</strong> A formal legal notice issued to the bank&apos;s Principal Nodal Officer forces the bank to recall third-party collection agencies within 48 hours to avoid massive RBI Ombudsman penalties.
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="rbi-workplace-rules" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                1. Can Recovery Agents Legally Visit Your Workplace or Office in India?
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                Few experiences cause greater psychological distress than the fear of a loan recovery agent showing up at your corporate office, creating an embarrassing scene at the reception, or threatening to escalate debt defaults to your Human Resources (HR) department. For salaried professionals in India, this triggers an acute existential panic regarding job security, professional reputation, and career progression.
              </p>

              {/* Regulatory Definition Box for GEO */}
              <div className="bg-slate-100 border-l-4 border-[#1F5EFF] p-5 rounded-r-xl my-6">
                <p className="text-sm md:text-base font-semibold text-slate-900 italic">
                  &quot;Regulated Entities (REs) and their recovery agents shall not resort to intimidation or harassment of any kind, either verbal or physical, against any person in their debt collection efforts, including acts intended to humiliate publicly or intrude upon the privacy of the debtors&apos; family members, referees, or friends, making threatening and anonymous calls, or persistently calling the borrower at odd hours or at their place of work.&quot;
                </p>
                <p className="text-xs text-slate-500 mt-2 font-medium">
                   -  Reserve Bank of India (RBI) Master Direction on Outsourcing of Financial Services &amp; Fair Practices Code (August 12, 2022 &amp; June 2023 Updates)
                </p>
              </div>

              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Under existing Indian banking jurisprudence established by the Reserve Bank of India and affirmed by multiple landmark High Court and Supreme Court rulings, <strong>loan recovery agents have NO automatic legal right to visit your workplace</strong>.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                The regulatory framework mandates a strict hierarchy of communication:
              </p>
              <ul className="list-disc list-inside space-y-2.5 text-base text-slate-700 mb-6 ml-2">
                <li>
                  <strong>Primary Contact Channel:</strong> All communication must be conducted via registered written notices, official email, or telephone contact at the borrower&apos;s residential contact coordinates between <strong>8:00 AM and 7:00 PM</strong>.
                </li>
                <li>
                  <strong>Condition Precedent for Workplace Visits:</strong> A recovery agent can ONLY attempt contact at a workplace if the borrower has completely vacated their residential address, has become demonstrably unreachable over registered phone channels, OR has provided explicit written consent requesting meetings at their office.
                </li>
                <li>
                  <strong>Strict Prohibition of Third-Party Communication:</strong> Even if a recovery agent enters the office building, they are strictly prohibited under banking secrecy laws from revealing the nature of their visit, the name of the lending institution, the overdue amount, or the loan account details to security guards, receptionists, office colleagues, or HR personnel.
                </li>
              </ul>
              <p className="text-base leading-relaxed text-slate-700">
                When an outsourced recovery agency threatens to <em>&quot;visit your office tomorrow with recovery officers&quot;</em> or <em>&quot;serve notice to your HR director&quot;</em>, they are engaging in <strong>illegal psychological coercion</strong> specifically designed to exploit your fear of job loss. Such threats violate RBI Master Directions and expose the lending bank to severe regulatory sanctions.
              </p>
            </section>

            {/* Section 2 */}
            <section id="agent-dos-and-donts" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                2. Legal Dos and Don&apos;ts: What Recovery Agents Can and Cannot Do
              </h2>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                The Reserve Bank of India and the Indian Institute of Banking &amp; Finance (IIBF) have laid down comprehensive operational codes for Debt Recovery Agents (DRAs). Understanding the precise legal boundaries between lawful debt communication and illegal harassment enables you to identify violations immediately.
              </p>

              {/* 4-Sided Bordered Comparison Table */}
              <div className="my-8">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                  Comparative Guide: Lawful Recovery vs. Illegal Workplace Harassment
                </h3>
                <div className="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th>Parameter</th>
                        <th>Lawful Recovery Conduct (RBI Permitted)</th>
                        <th>Illegal Workplace Conduct (Strictly Banned)</th>
                        <th>Legal Violation / Code</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-bold text-slate-900">Visiting Location</td>
                        <td>Registered residential address during daylight hours.</td>
                        <td className="text-rose-600 font-semibold">Unannounced arrival at corporate office or business desk.</td>
                        <td>RBI Master Direction Sec 7.3</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Calling Window</td>
                        <td>Strictly between 08:00 hrs and 19:00 hrs on weekdays.</td>
                        <td className="text-rose-600 font-semibold">Repeated spam calls during work meetings or late nights.</td>
                        <td>Fair Practices Code 2022</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Third-Party Interaction</td>
                        <td>Speaking strictly and exclusively to the primary borrower.</td>
                        <td className="text-rose-600 font-semibold">Informing HR, reception, manager, or colleagues of debt.</td>
                        <td>Article 21 &amp; BCSBI Norms</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Credentials &amp; ID</td>
                        <td>Must present Bank ID, Agency ID &amp; IIBF DRA Certificate.</td>
                        <td className="text-rose-600 font-semibold">Refusing identification; claiming to be &quot;Police&quot; or &quot;Court Bailiff&quot;.</td>
                        <td>Section 419 IPC (Impersonation)</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Behavior &amp; Language</td>
                        <td>Polite, civil, and professional communication of balance.</td>
                        <td className="text-rose-600 font-semibold">Shouting, abusive slurs, blocking doorway, or creating scene.</td>
                        <td>Sec 503/506 IPC (Intimidation)</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Payment Collection</td>
                        <td>Official bank payment links, DD, or account transfers only.</td>
                        <td className="text-rose-600 font-semibold">Demanding personal cash payment or spot UPI transfers.</td>
                        <td>Sec 383 IPC (Extortion)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="penal-code-violations" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                3. Criminal Penal Codes &amp; Constitutional Privacy Protections
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                When a recovery agent enters private commercial property, bypasses corporate visitor protocols, or harasses employees, their actions cross the boundary from civil debt recovery into <strong>cognizable criminal offenses</strong> under the Indian Penal Code (IPC) / Bharatiya Nyaya Sanhita (BNS).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
                {/* Criminal Trespass Card */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-2.5 mb-3 text-rose-600 font-bold text-base">
                    <AlertOctagon className="w-5 h-5" />
                    <h3>Criminal Trespass (Sec 441/447 IPC / Sec 329 BNS)</h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Corporate office premises, IT parks, and business establishments are private property. Entering without lawful visitor permission or refusing to leave when asked by corporate security constitutes criminal trespass, punishable by imprisonment and fines.
                  </p>
                </div>

                {/* Criminal Intimidation Card */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-2.5 mb-3 text-rose-600 font-bold text-base">
                    <ShieldAlert className="w-5 h-5" />
                    <h4>Criminal Intimidation (Sec 503/506 IPC / Sec 351 BNS)</h4>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Threatening to get a borrower fired, creating scenes to destroy their livelihood, or using threatening language to induce fear of injury to reputation is a punishable criminal offense under Indian law.
                  </p>
                </div>

                {/* Defamation Card */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-2.5 mb-3 text-rose-600 font-bold text-base">
                    <UserX className="w-5 h-5" />
                    <h4>Criminal &amp; Civil Defamation (Sec 499/500 IPC / Sec 356 BNS)</h4>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Making unverified, disparaging statements to colleagues, receptionists, or HR directors regarding a person&apos;s credit status with intent to cause reputational damage entitles the borrower to file criminal defamation and seek massive civil tort damages.
                  </p>
                </div>

                {/* Constitutional Privacy Card */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-2.5 mb-3 text-[#1F5EFF] font-bold text-base">
                    <Scale className="w-5 h-5" />
                    <h4>Right to Privacy (Article 21 of Constitution)</h4>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    As affirmed by the 9-Judge Constitution Bench of the Supreme Court in <em>Justice K.S. Puttaswamy (Retd.) v. Union of India (2017)</em>, personal financial standing is an intrinsic element of informational privacy and individual human dignity.
                  </p>
                </div>
              </div>

              {/* Landmark Supreme Court Case Box */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <h4 className="text-sm font-bold text-amber-900 mb-1 flex items-center gap-2">
                  <Landmark className="w-4 h-4 text-amber-700" />
                  Landmark Precedent: Supreme Court in ICICI Bank Ltd. v. Shanti Devi Sharma (2008)
                </h4>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                  The Supreme Court of India sternly ruled that banks and financial institutions cannot deploy musclemen, goons, or abusive recovery agents to recover loans through intimidation or humiliation. The Court held that <em>&quot;banks are vicariously liable for the unlawful acts of their recovery agents and must adhere strictly to the rule of law and human dignity.&quot;</em>
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="protecting-your-job-hr" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                4. Protecting Your Job: HR Communication Protocol &amp; Email Script
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                The single biggest fear of any employee facing debt default is: <em>&quot;Will HR fire me if a recovery agent calls the office switchboard or sends an email?&quot;</em>
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                <strong>The Legal Reality:</strong> In corporate India, personal loan and credit card defaults are purely private civil matters. They do not constitute professional misconduct, fraud against the company, or grounds for immediate termination under standard employment contracts.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                However, remaining passive allows unscrupulous recovery agents to control the narrative. By submitting a <strong>preemptive, highly professional disclosure to your HR department</strong>, you transform yourself from a passive target into a proactive professional dealing with an external commercial dispute through legal counsel.
              </p>

              {/* Interactive Copyable HR Script Box */}
              <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 md:p-6 my-8 shadow-md border border-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800 mb-4">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#60A5FA]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
                      Preemptive HR Disclosure Template (Copy &amp; Customize)
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(hrTemplateText, 1)}
                    className="inline-flex items-center gap-1.5 bg-[#1F5EFF] hover:bg-blue-600 text-white text-xs font-bold py-1.5 px-3 rounded-lg transition-colors"
                  >
                    {copiedIndex === 1 ? (
                      <>
                        <CheckCheck className="w-3.5 h-3.5 text-emerald-300" />
                        <span>Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Template</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="text-xs sm:text-sm text-slate-300 font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">
                  {hrTemplateText}
                </pre>
              </div>
            </section>

            {/* Section 5: Compact High-Impact Infographic Banner */}
            <section id="infographic-action-blueprint" className="scroll-mt-28">
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
                        Recovery Agent Workplace Harassment Summary &amp; Action Roadmap
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/recovery-agent-visiting-workplace-office.jpg"
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
                      src="/images/infographics/recovery-agent-visiting-workplace-office.jpg"
                      alt="Recovery Agent Workplace Harassment Legal Defense Infographic"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Takeaway:</strong> Workplace visits without explicit consent violate RBI Master Directions; immediate legal notice to Bank PNO halts agency harassment within 48 hours.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Legal Harassment Shield &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="step-by-step-defense" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                6. Step-by-Step Defense Action Plan: What to Do When an Agent Arrives
              </h2>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                If a recovery agent physically reaches your office building or calls your office desk, execute this exact 6-stage legal protocol immediately:
              </p>

              <div className="space-y-4 my-6">
                {/* Step 1 */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs">
                      1
                    </div>
                    <h3 className="font-bold text-slate-900 text-base">
                      Hold the Agent at Security / Visitor Lobby
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed ml-10">
                    Never allow the agent inside your office work floor or meeting rooms. Instruct the front-desk security executive to keep them seated in the public visitor holding area.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs">
                      2
                    </div>
                    <h4 className="font-bold text-slate-900 text-base">
                      Demand Credentials (Bank Letter, Agency ID &amp; DRA Certificate)
                    </h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed ml-10">
                    Under RBI regulations, you have the absolute legal right to inspect: 1) Bank Identity Card or Official Authorization Letter; 2) Collection Agency ID; 3) Indian Institute of Banking &amp; Finance (IIBF) Debt Recovery Agent Certificate. If they fail to produce all three, they are illegal trespassers.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs">
                      3
                    </div>
                    <h4 className="font-bold text-slate-900 text-base">
                      Activate Evidentiary Audio / Video Recording
                    </h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed ml-10">
                    Politely inform the agent: <em>&quot;This conversation is being audio and video recorded for legal and regulatory submission.&quot;</em> Take photographs of their ID cards and preserve visitor logbook entry timestamps as prime evidence for the RBI Banking Ombudsman.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs">
                      4
                    </div>
                    <h4 className="font-bold text-slate-900 text-base">
                      State Your Formal Privacy &amp; Trespass Objection
                    </h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed ml-10">
                    Deliver this clear legal statement: <em>&quot;This office is private corporate property. Under RBI Master Directions on Outsourcing, you have no consent to visit my workplace. You are instructed to leave immediately. All further communication must be sent in writing via registered email or through my legal counsel.&quot;</em>
                  </p>
                </div>

                {/* Step 5 */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs">
                      5
                    </div>
                    <h4 className="font-bold text-slate-900 text-base">
                      Instruct Security to Escort the Agent Out
                    </h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed ml-10">
                    If the agent refuses to leave or creates a loud scene, request building facility management and security guards to escort them off the premises for illegal commercial trespass. Inform the agent that a Police Dial 112 call is being placed for breach of peace.
                  </p>
                </div>

                {/* Step 6 */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs">
                      6
                    </div>
                    <h4 className="font-bold text-slate-900 text-base">
                      Initiate Advocate Legal Cease-and-Desist Notice via SettleLoans
                    </h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed ml-10">
                    Immediately submit the incident details to SettleLoans. Our empaneled advocates draft and dispatch a formal legal notice to the bank&apos;s Managing Director and Principal Nodal Officer, freezing all field recovery agency mandates within 48 hours.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section id="complaint-draft-templates" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                7. Official Draft Complaint Templates: Bank PNO, RBI CMS &amp; Police
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                To create legal deterrence, you must establish an official documentary trail against the lending institution. Below is the ready-to-use complaint format to send to the Bank&apos;s Principal Nodal Officer (PNO) and attach to your RBI Ombudsman filing.
              </p>

              {/* Copyable PNO Complaint Box */}
              <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 md:p-6 my-8 shadow-md border border-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800 mb-4">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#60A5FA]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
                      Bank Principal Nodal Officer (PNO) Legal Complaint Template
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(pnoComplaintTemplate, 2)}
                    className="inline-flex items-center gap-1.5 bg-[#1F5EFF] hover:bg-blue-600 text-white text-xs font-bold py-1.5 px-3 rounded-lg transition-colors"
                  >
                    {copiedIndex === 2 ? (
                      <>
                        <CheckCheck className="w-3.5 h-3.5 text-emerald-300" />
                        <span>Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Complaint Draft</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="text-xs sm:text-sm text-slate-300 font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">
                  {pnoComplaintTemplate}
                </pre>
              </div>

              {/* Escalation Channels Table */}
              <div className="my-8">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                  Key Regulatory Escalation Authorities in India
                </h3>
                <div className="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th>Escalation Authority</th>
                        <th>Jurisdiction / Mandate</th>
                        <th>Official Filing Portal</th>
                        <th>Expected Response Window</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-bold text-slate-900">Bank Principal Nodal Officer (PNO)</td>
                        <td>Highest internal appellate grievance authority of the lending bank.</td>
                        <td>Bank Official Website / PNO Email</td>
                        <td>48 to 72 Hours</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-[#1F5EFF]">RBI Banking Ombudsman (RB-IOS 2021)</td>
                        <td>Statutory appellate regulator; awards up to ₹20L compensation + ₹1L damages.</td>
                        <td><a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[#1F5EFF] underline">cms.rbi.org.in</a></td>
                        <td>30 Days</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">Local Police Station / Cyber Cell</td>
                        <td>Criminal trespass, criminal intimidation, and extortion under IPC/BNS.</td>
                        <td>In-person FIR or State Police Portal</td>
                        <td>Immediate (24–48 Hours)</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-slate-900">District Consumer Disputes Commission</td>
                        <td>Deficiency of banking service, mental harassment &amp; reputation damages.</td>
                        <td><a href="https://edaakhil.nic.in" target="_blank" rel="noopener noreferrer" className="text-[#1F5EFF] underline">edaakhil.nic.in</a></td>
                        <td>45 to 90 Days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section id="ots-permanent-relief" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                8. Permanent Debt Relief: One-Time Settlement (OTS) with SettleLoans
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                While legal cease-and-desist notices immediately stop illegal field harassment, the underlying debt default remains active on bank balance sheets. As long as the account remains delinquent, it continues compounding penal interest (up to 36% p.a.) and risks being transferred to alternate collection agencies every few months.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                The only permanent, definitive resolution is a legally executed <strong>One-Time Settlement (OTS)</strong>:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-[#1F5EFF] flex items-center justify-center mx-auto mb-3">
                    <Scale className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">Substantial Financial Waiver</h3>
                  <p className="text-xs text-slate-600">
                    SettleLoans negotiates waivers of <strong>40% to 70%</strong> on accumulated penal interest and outstanding principal.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Official Bank Sanction Letter</h4>
                  <p className="text-xs text-slate-600">
                    Every settlement is approved on authentic bank letterhead with zero third-party mediator risk.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center">
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-3">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Permanent ₹0 NDC &amp; Closure</h4>
                  <p className="text-xs text-slate-600">
                    Secure an official No Dues Certificate (NDC) that permanently extinguishes debt liability and halts all recovery.
                  </p>
                </div>
              </div>
            </section>

            {/* Reusable CompanySection Component */}
            <CompanySection />

            {/* Section 9: FAQ Accordion */}
            <section id="faqs" className="scroll-mt-28 mb-14">
              <div className="flex items-center gap-2.5 mb-3">
                <HelpCircle className="w-6 h-6 text-[#1F5EFF]" />
                <span className="text-xs font-black uppercase tracking-wider text-[#1F5EFF]">
                  Clear Answers to Common Questions
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 leading-tight">
                9. Frequently Asked Questions: Recovery Agents &amp; Workplace Rights
              </h2>

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
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-10 text-xs text-slate-600 space-y-3">
              <h3 className="font-bold uppercase tracking-wider text-slate-900 text-sm flex items-center gap-2">
                <Landmark className="w-4 h-4 text-[#1F5EFF]" />
                <span>Statutory Authorities &amp; Official Regulatory References</span>
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    Reserve Bank of India (RBI)  -  Master Direction on Outsourcing of Financial Services &amp; Fair Practices Code
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
                    RBI Complaint Management System (CMS)  -  Integrated Ombudsman Scheme, 2021
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
                    Supreme Court of India  -  Landmark Rulings on Debtor Privacy &amp; Anti-Harassment Jurisprudence
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://www.cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    TransUnion CIBIL  -  Credit Information Companies (Regulation) Act, 2005 Dispute Guidelines
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
                    eCourts Services  -  National Judicial Data Grid for Debt Recovery &amp; Lok Adalat Settlement Awards
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
                  href="/rbi-rules-for-recovery-agents"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  RBI Rules for Recovery Agents
                </Link>
                <Link
                  href="/bank-loan-settlement-rules"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Bank Loan Settlement Rules
                </Link>
                <Link
                  href="/personal-loan-settlement-process-consequences"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Settlement Process
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Settlement CIBIL Impact
                </Link>
                <Link
                  href="/unsecured-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Unsecured Loan Settlement
                </Link>
                <Link
                  href="/credit-card-settlement-process"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Credit Card Settlement Process
                </Link>
                <Link
                  href="/lok-adalat-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Lok Adalat Loan Settlement
                </Link>
                <Link
                  href="/legal-notice-for-loan-default"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Legal Notice for Loan Default
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
                Ashish has over a decade of expertise protecting borrowers from aggressive debt recovery practices, navigating RBI compliance, and securing structured debt settlements across India.
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
                <span>Immediate Legal Shield</span>
              </div>
              <div className="text-xl font-black mb-3 leading-tight">
                Are Recovery Agents Threatening Your Workplace or Job?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Don&apos;t face illegal intimidation alone. Connect with an empaneled SettleLoans advocate to serve an urgent legal notice to the bank&apos;s Nodal Officer and stop harassment immediately.
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
                <span>Why Borrowers Choose SettleLoans</span>
              </div>
              <ul className="space-y-3.5 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Legal Protection:</strong> Formal advocate representations served to banks under RBI Fair Practices Code.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Shield:</strong> Immediate cessation of illegal third-party calls, office visits, and relative harassment.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct Bank Sanctions:</strong> Authentic settlement sanction letters issued directly on bank letterhead.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Job Security Protection:</strong> Specialized advisory to safeguard your employment and corporate reputation.
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
