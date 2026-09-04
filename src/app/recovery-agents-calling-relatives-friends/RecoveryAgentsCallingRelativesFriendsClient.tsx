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
  Lock,
  Building2,
  Landmark,
  Check,
  Sparkles,
  BookOpen,
  ShieldAlert,
  Scale,
  FileText,
  CheckCircle2,
  HelpCircle,
  Users,
  CheckCircle,
  PhoneOff,
  Gavel,
  MessageSquareWarning,
  FileWarning,
  UserX,
  PhoneIncoming,
  ShieldX
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

export default function RecoveryAgentsCallingRelativesFriendsClient() {
  const [activeId, setActiveId] = useState<string>('rbi-guidelines-family-calls');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'rbi-guidelines-family-calls', title: '1. RBI Rules on Calling Family & Friends' },
    { id: 'references-vs-guarantors', title: '2. Reference Contacts vs. Guarantors' },
    { id: 'agent-tactics-violations', title: '3. Illegal Tactics Used by Recovery Agents' },
    { id: 'criminal-civil-laws', title: '4. Legal Protections: IPC/BNS & Privacy' },
    { id: 'emergency-action-plan', title: '5. 5-Step Emergency Action Protocol' },
    { id: 'legal-notice-complaint-drafts', title: '6. Cease & Desist Notices & Complaints' },
    { id: 'rbi-ombudsman-escalation', title: '7. Filing an RBI Ombudsman Complaint' },
    { id: 'permanent-debt-resolution', title: '8. Permanent Debt Settlement (OTS)' },
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
      question: "Is it legal for bank recovery agents to call my family, parents, or friends in India?",
      answer: (
        <p>
          <strong>No, it is strictly illegal under Indian banking regulations.</strong> The Reserve Bank of India (RBI), through its <em>Master Circular on Recovery Agents</em> and <em>Master Direction on Outsourcing of Financial Services (August 2022)</em>, explicitly prohibits banks, Non-Banking Financial Companies (NBFCs), and third-party recovery agencies from contacting a borrower&apos;s family members, parents, friends, spouses, or colleagues. Agents are strictly barred from disclosing confidential loan details, intimidating non-borrowers, or attempting recovery from third parties.
        </p>
      )
    },
    {
      question: "Can recovery agents demand money from loan references or emergency contacts?",
      answer: (
        <p>
          <strong>Absolutely not.</strong> Providing a reference or emergency contact on a loan application is merely for address verification or contact re-establishment when the borrower is untraceable. A reference contact does not sign a <em>Contract of Guarantee</em> under Section 126 of the Indian Contract Act, 1872. They have zero legal, financial, or joint liability for the loan. Any attempt by collection agents to demand payment or threaten references constitutes illegal coercion and extortion.
        </p>
      )
    },
    {
      question: "What specific RBI guidelines protect borrowers from third-party recovery harassment?",
      answer: (
        <p>
          Key statutory directives include: <strong>1) RBI Master Circular on Recovery Agents (RBI/2007-08/296)</strong> prohibiting public humiliation and harassment; <strong>2) RBI Master Direction on Outsourcing (August 12, 2022)</strong> holding lenders directly liable for collection agent misconduct; <strong>3) RBI Digital Lending Guidelines (September 2022)</strong> strictly forbidding apps from harvesting contact lists; and <strong>4) Calling hour restrictions</strong> mandating calls only between 8:00 AM and 7:00 PM on working days.
        </p>
      )
    },
    {
      question: "What should I do immediately if a recovery agent calls my parents or relatives?",
      answer: (
        <p>
          Take these 5 immediate actions: <strong>1)</strong> Instruct your family members to record every phone call and note caller details (name, phone number, collection agency, bank name); <strong>2)</strong> Inform your family that references have zero liability and tell them not to make any direct UPI or cash payments; <strong>3)</strong> Send a formal Anti-Harassment &amp; Cease-and-Desist Notice to the bank&apos;s Principal Nodal Officer; <strong>4)</strong> Lodge an online complaint on the RBI CMS portal (cms.rbi.org.in); <strong>5)</strong> If agents issue threats of physical harm or defamation, register an FIR/cyber complaint under Section 351/356 of Bharatiya Nyaya Sanhita (BNS).
        </p>
      )
    },
    {
      question: "Can I file a police FIR or cyber crime complaint against recovery agents calling my family?",
      answer: (
        <p>
          <strong>Yes.</strong> If collection agents use abusive language, issue physical threats, threaten public shaming, or circulate morphed photos, you can file a criminal complaint at your local police station or via the National Cyber Crime Reporting Portal (cybercrime.gov.in). Relevant statutory provisions include: <strong>Section 351 BNS (Criminal Intimidation)</strong>, <strong>Section 356 BNS (Defamation)</strong>, <strong>Section 308 BNS (Extortion)</strong>, and <strong>Section 66E/67 of the Information Technology Act, 2000</strong> (violation of privacy and transmission of offensive digital messages).
        </p>
      )
    },
    {
      question: "How does the RBI Banking Ombudsman penalize banks for recovery agent harassment?",
      answer: (
        <p>
          Under the <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021</strong>, the Ombudsman holds extensive adjudicatory powers. Upon finding a bank or NBFC guilty of violating recovery guidelines, the Ombudsman can order the lender to halt all third-party contact immediately, reverse unfair penal interest/charges, issue written apologies, and award punitive compensation of up to <strong>₹20 Lakhs for financial losses</strong> and up to <strong>₹1 Lakh for mental agony, harassment, and loss of time</strong>.
        </p>
      )
    },
    {
      question: "Can digital lending loan apps access and call my entire phone contact list?",
      answer: (
        <p>
          <strong>No, this is completely illegal.</strong> Under the RBI Digital Lending Guidelines (September 2022), all regulated lending entities and loan apps are prohibited from accessing phone contact lists, media storage, call logs, or precise location coordinates. Apps are restricted to one-time camera/microphone access solely for KYC onboarding. Any unauthorized phone contact scraping is a punishable offence under the Digital Personal Data Protection Act, 2023 and IT Act.
        </p>
      )
    },
    {
      question: "Can a borrower claim damages in Consumer Court for defamation caused by recovery calls?",
      answer: (
        <p>
          <strong>Yes, Indian Consumer Commissions consistently award heavy damages.</strong> Under the Consumer Protection Act, 2019, disclosing private debt details to third parties or subjecting family members to mental torment is classified as an <em>unfair trade practice</em> and <em>deficiency in banking service</em>. District and State Consumer Disputes Redressal Commissions regularly award compensation ranging from ₹50,000 to ₹5,00,000+ against banks and NBFCs for loss of reputation and psychological trauma.
        </p>
      )
    },
    {
      question: "How does SettleLoans help stop recovery agents from calling family and settle the loan?",
      answer: (
        <p>
          SettleLoans provides comprehensive legal shielding and debt resolution: <strong>1)</strong> Our empaneled advocates issue formal statutory Cease-and-Desist Notices to bank management and recovery agencies; <strong>2)</strong> We file fast-tracked grievances with Principal Nodal Officers and the RBI Ombudsman; <strong>3)</strong> We represent you in structured One-Time Settlement (OTS) negotiations to settle unsecured debts at a substantial 50%–70% waiver with a legally binding No Dues Certificate (NDC) and ₹0 balance guarantee.
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
      <section
        className="w-full border-b border-slate-700/80 pt-8 pb-7 md:pt-12 md:pb-9 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <ShieldAlert className="w-3.5 h-3.5 text-[#60a5fa]" />
            RBI Anti-Harassment &amp; Legal Protection Guide
          </div>

          {/* H1 Headline - Compact Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            Bank Recovery Agent Calling My Family?{' '}
            <span className="text-[#3b82f6] md:text-[#60a5fa]">
              Stop Harassment, Know RBI Rules &amp; Take Legal Action
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Lenders and collection agencies are strictly barred by RBI circulars from calling your parents, relatives, or friends. Learn how to invoke statutory protections, halt illegal harassment in 24 hours, and resolve overdue debt with legal dignity.
          </p>

          {/* Author & Review Meta Bar */}
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
              <span>Reviewed by SettleLoans Legal Advisory Team</span>
            </div>
            <div className="hidden sm:block text-slate-500">•</div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-300" />
              <span>Updated: August 20, 2026</span>
            </div>
          </div>

          {/* Primary Hero CTA */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-5 rounded-xl shadow-md hover:shadow-blue-500/20 transition-all duration-300 text-xs sm:text-sm group"
            >
              <span>Stop Harassment Calls Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#rbi-guidelines-family-calls"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 text-xs sm:text-sm"
            >
              <BookOpen className="w-4 h-4 text-blue-300" />
              <span>Read RBI Legal Guidelines</span>
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
                <span>Article Contents</span>
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
            {/* Key Takeaways Box (Top GEO & User Intent Hook) */}
            <div className="bg-blue-50 border-l-8 border-[#1F5EFF] rounded-r-2xl p-6 md:p-8 mb-10 shadow-sm">
              <div className="flex items-center gap-2 text-[#1F5EFF] font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5" />
                <span>EXECUTIVE SUMMARY: WHAT BORROWERS &amp; FAMILIES MUST KNOW</span>
              </div>
              <ul className="space-y-3 text-sm md:text-base text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Strict RBI Prohibition:</strong> Under RBI Master Directives, recovery agents are legally prohibited from contacting your parents, relatives, friends, or workplace regarding your personal loan or credit card debt.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero Liability for References:</strong> Emergency references or contact references listed on loan forms carry <strong>zero legal or financial obligation</strong> to pay. Banks cannot legally pursue them.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct Bank Liability:</strong> As per RBI Circular (August 2022), the lending bank or NBFC is held directly accountable for any criminal intimidation, verbal abuse, or harassment committed by outsourced recovery agents.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Instant 24-Hour Remedy:</strong> Serving a statutory Cease-and-Desist Notice citing RBI Fair Practices and filing a grievance on the RBI CMS Portal stops 95% of third-party calls immediately.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Dignified Debt Resolution:</strong> If you are unable to repay the full outstanding amount due to financial distress, a formal <strong>One-Time Settlement (OTS)</strong> permanently caps the debt, eliminates legal notices, and secures a ₹0 No Dues Certificate.
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="rbi-guidelines-family-calls" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                1. What Do RBI Guidelines Say About Recovery Agents Calling Your Family &amp; Friends?
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                Experiencing a financial crisis is stressful enough, but when third-party bank recovery agents begin calling your elderly parents, siblings, spouse, or friends, the emotional distress and social humiliation can feel overwhelming. Many borrowers ask in panic: <em>&quot;Is a bank recovery agent allowed to call my family in India? Can they publicly shame me to force repayment?&quot;</em>
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                The unequivocal legal answer from the Reserve Bank of India is <strong>NO</strong>. The apex banking regulator has established strict, binding directives prohibiting banks and Non-Banking Financial Companies (NBFCs) from using third-party intimidation or contacting non-borrowers.
              </p>

              {/* Statutory Citation Box */}
              <div className="bg-slate-100 border-l-4 border-slate-700 p-5 rounded-r-xl my-6">
                <p className="text-sm md:text-base font-semibold text-slate-900 italic">
                  &quot;Regulated Entities (REs) and their recovery agents shall not resort to intimidation or harassment of any kind, either verbal or physical, against any person in their debt collection efforts, including acts intended to humiliate publicly or intrude upon the privacy of the debtors&apos; family members, referees and friends, making threatening and anonymous calls, or making false and misleading representations.&quot;
                </p>
                <p className="text-xs text-slate-500 mt-2 font-medium">
                  — Reserve Bank of India (RBI) Circular on Outsourcing of Financial Services &amp; Recovery Norms (RBI/2022-23/108)
                </p>
              </div>

              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Under the <strong>RBI Master Circular on Recovery Agents in Banks</strong> and the <strong>Master Direction – Fair Practices Code</strong>, regulated lenders are bound by explicit operational constraints:
              </p>
              <ul className="list-disc list-inside space-y-2.5 text-base text-slate-700 mb-6 ml-2">
                <li>
                  <strong>Strict Prohibition on Contacting Non-Borrowers:</strong> Agents may contact the primary borrower or legally registered co-applicant. Contacting parents, relatives, or acquaintances to reveal debt information is a severe breach of confidentiality.
                </li>
                <li>
                  <strong>Mandatory Calling Hours:</strong> Recovery agents are legally permitted to call only between <strong>8:00 AM and 7:00 PM</strong>. Any call made before 8:00 AM, after 7:00 PM, or on national holidays is a regulatory violation.
                </li>
                <li>
                  <strong>No Use of Coercive or Abusive Language:</strong> Agents are prohibited from using foul language, threatening police arrest, or sending fabricated court summons.
                </li>
                <li>
                  <strong>Principal Liability of Banks:</strong> Banks cannot deflect blame by claiming recovery agencies are independent contractors. The RBI holds the board of directors and senior management of the lending institution strictly liable for agent misconduct.
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section id="references-vs-guarantors" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                2. Reference Contacts vs. Co-Borrowers &amp; Guarantors: The Legal Liability Breakdown
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                When borrowers fill out personal loan or credit card applications, banks routinely ask for two &quot;Reference Contacts&quot; or &quot;Emergency Contacts&quot;. When defaults occur, unscrupulous collection agents misuse these contact numbers, calling your relatives and falsely claiming: <em>&quot;You are listed on this loan, and you must pay if the borrower defaults.&quot;</em>
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                This is a deliberate lie designed to induce panic and social shame. Under the <strong>Indian Contract Act, 1872</strong>, there is a fundamental legal distinction between different roles:
              </p>

              <div className="space-y-4 my-6">
                <div className="p-5 rounded-xl border border-rose-200 bg-rose-50/60">
                  <h3 className="text-base font-bold text-rose-900 flex items-center gap-2 mb-1">
                    <UserX className="w-5 h-5 text-rose-600" />
                    Reference / Emergency Contact (ZERO Legal Liability)
                  </h3>
                  <p className="text-sm text-rose-800 leading-relaxed">
                    A reference contact is provided solely for verifying the borrower&apos;s physical address or establishing contact if the borrower becomes completely untraceable. A reference <strong>never signs a loan agreement</strong>, undergoes no KYC, provides no credit consent, and has <strong>0% financial liability</strong>. Lenders have zero legal standing to demand money from a reference.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-amber-200 bg-amber-50/60">
                  <h3 className="text-base font-bold text-amber-900 flex items-center gap-2 mb-1">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                    Guarantor (Conditional Legal Liability)
                  </h3>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    A guarantor signs a formal <em>Deed of Guarantee</em> under Section 126 of the Indian Contract Act, 1872. A guarantor agrees to be co-extensively liable (Section 128) only if the primary borrower defaults. Standard unsecured personal loans and credit cards almost never have guarantors.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-blue-200 bg-blue-50/60">
                  <h3 className="text-base font-bold text-blue-900 flex items-center gap-2 mb-1">
                    <Users className="w-5 h-5 text-[#1F5EFF]" />
                    Co-Borrower / Co-Applicant (Joint Financial Liability)
                  </h3>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    A co-applicant jointly signs the primary loan agreement and submits full KYC documents. Both the primary borrower and co-applicant share joint and several liability to repay the debt.
                  </p>
                </div>
              </div>
            </section>

            {/* Comparison Table 1: Permitted vs Illegal Practices */}
            <div className="my-8">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                Comparison: Permitted Bank Recovery Norms vs. Illegal Harassment Practices
              </h3>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Action Category</th>
                      <th>Permitted Under RBI Fair Practices</th>
                      <th>Strictly Illegal / Actionable Breach</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Calling Third Parties</td>
                      <td>Calling primary borrower or registered co-applicant</td>
                      <td className="text-rose-600 font-semibold">Calling parents, siblings, relatives, friends, or neighbors</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Communication Hours</td>
                      <td>Strictly between 8:00 AM and 7:00 PM</td>
                      <td className="text-rose-600 font-semibold">Late night calls, early morning calls, or continuous spam dialling</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Debt Disclosure</td>
                      <td>Discussing outstanding balance only with borrower</td>
                      <td className="text-rose-600 font-semibold">Disclosing debt details or loan amounts to family or employers</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Workplace Visits</td>
                      <td>Sending formal letters to residential address</td>
                      <td className="text-rose-600 font-semibold">Creating scenes at workplace, calling HR, or threatening job loss</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Legal Threat Representation</td>
                      <td>Issuing genuine statutory legal notices via advocate</td>
                      <td className="text-rose-600 font-semibold">Fake police arrest notices, fabricated court warrants, or WhatsApp threats</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 3 */}
            <section id="agent-tactics-violations" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                3. Unmasking Illegal Tactics: How Recovery Agencies Exploit Social Pressure
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Third-party collection agencies often operate on commission structures ranging from 10% to 30% of recovered funds. To maximize recoveries, untrained or rogue agents deploy psychological warfare tactics aimed at destroying the borrower&apos;s social standing. Recognizing these tactics helps you stay calm and prepare evidence:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                  <h3 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                    <MessageSquareWarning className="w-5 h-5 text-rose-600" />
                    1. WhatsApp Group Shaming &amp; Contact Harvesting
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Predatory instant loan apps and rogue agents create WhatsApp groups including your family members, colleagues, and friends, posting your photo with derogatory captions like &quot;defaulter&quot; or &quot;fraudster&quot;. This is a severe criminal offense under the Information Technology Act and Indian Penal / BNS Code.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                  <h4 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                    <PhoneIncoming className="w-5 h-5 text-amber-600" />
                    2. Caller ID Spoofing &amp; Virtual Numbers
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Agents use VoIP software and virtual number pools to call family members from hundreds of different numbers, bypassing phone call blocks and creating constant psychological harassment.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                  <h4 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                    <FileWarning className="w-5 h-5 text-purple-600" />
                    3. Fabricated Police &amp; Court Summons via SMS
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Sending fake text messages mimicking the &quot;Delhi High Court&quot;, &quot;Crime Branch&quot;, or local police stations threatening that a police team is en route with an arrest warrant. In civil loan defaults, police have zero jurisdiction to arrest borrowers or contact family members.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="criminal-civil-laws" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                4. Legal Protections Under Indian Law: Constitutional Privacy, BNS/IPC &amp; IT Act
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Borrowers facing aggressive collection harassment are protected by powerful constitutional, criminal, and civil legal frameworks in India. An unpaid civil loan is never a crime, and lenders must operate strictly within judicial boundaries:
              </p>

              <div className="space-y-4 my-6">
                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                  <h3 className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                    <Scale className="w-5 h-5 text-[#1F5EFF]" />
                    Article 21: Right to Privacy &amp; Debtor Dignity
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    In the landmark <em>K.S. Puttaswamy vs. Union of India (2017)</em> ruling, the Supreme Court declared privacy a fundamental right. Furthermore, in <em>ICICI Bank Ltd. vs. Prakash Kaur (2007)</em>, the Supreme Court unequivocally ruled that banks cannot use musclemen or extra-judicial coercive tactics to recover dues, stating recovery must follow civilized due process.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                  <h4 className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                    <Gavel className="w-5 h-5 text-emerald-600" />
                    Bharatiya Nyaya Sanhita (BNS) / IPC Criminal Provisions
                  </h4>
                  <ul className="text-xs md:text-sm text-slate-600 space-y-1.5 list-disc list-inside mt-2">
                    <li><strong>Section 351 BNS (Criminal Intimidation):</strong> Punishable with imprisonment up to 2 years for threatening injury to person, reputation, or property.</li>
                    <li><strong>Section 356 BNS (Defamation):</strong> Punishable for making false imputations to damage the social reputation of a borrower or family member.</li>
                    <li><strong>Section 308 BNS (Extortion):</strong> Applying illegal coercion or fear of injury to extract money.</li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                  <h4 className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                    <Lock className="w-5 h-5 text-purple-600" />
                    Information Technology Act, 2000 &amp; Digital Lending Norms
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Under Section 66E (Violation of Privacy) and Section 67 (Publishing Obscene Information), transmitting private data or morphing pictures carries rigorous imprisonment of up to 3 years and heavy fines. The Digital Personal Data Protection Act, 2023 further penalizes unauthorized processing of personal data.
                  </p>
                </div>
              </div>
            </section>

            {/* Compact High-Impact Infographic Banner (Half Height) */}
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
                      How to Stop Recovery Agents Calling Family &amp; Friends
                    </h3>
                  </div>
                </div>
                <a
                  href="/images/infographics/recovery-agents-calling-relatives-friends.jpg"
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
                    src="/images/infographics/recovery-agents-calling-relatives-friends.jpg"
                    alt="Recovery Agents Calling Family and Relatives Legal Rights and Defense Summary Infographic"
                    className="w-full h-auto object-contain max-h-[420px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Quick Crux Footer Strip */}
              <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span><strong>Key Takeaway:</strong> Zero Third-Party Liability &bull; 24-Hr Cease &amp; Desist &bull; RBI CMS Protection</span>
                </div>
                <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                  Get Free Case Evaluation &rarr;
                </Link>
              </div>
            </div>

            {/* Section 5 */}
            <section id="emergency-action-plan" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                5. The 5-Step Emergency Protocol: How to Stop Family Calls Within 24–48 Hours
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                If recovery agents are currently calling your parents, spouse, or friends, do not panic. Execute this proven 5-step emergency legal protocol to halt third-party interference immediately:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                  <h3 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs">1</span>
                    Instruct Family Members to Record and Collect Caller Metadata
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Brief your parents and relatives: <em>&quot;You have zero debt liability. Do not argue. Turn on call recording and calmly ask the caller for their Full Name, Collection Agency Name, Bank Name, and Employee ID.&quot;</em> If the caller refuses to identify themselves, that itself constitutes a violation of RBI Fair Practice norms.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                  <h4 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs">2</span>
                    Refuse All Panic Payments to Personal Accounts or QR Codes
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Unscrupulous agents often tell frightened relatives: <em>&quot;Pay ₹5,000 immediately to this Google Pay number to stop police arrest.&quot;</em> This is extortion and fraud. Never pay a single rupee to personal UPI IDs or individual accounts. All legitimate loan repayments must be made strictly to your designated loan account number.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                  <h4 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs">3</span>
                    Send an Anti-Harassment Cease &amp; Desist Notice to the Bank Nodal Officer
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Dispatch a formal legal notice via email to the bank&apos;s Principal Nodal Officer (PNO) and customer grievance cell. Attach call logs and audio recordings proving that agents contacted non-borrowers in violation of RBI Circular RBI/2022-23/108.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                  <h4 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs">4</span>
                    Lodge a Complaint on the RBI Complaint Management System (CMS)
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    If the bank fails to halt third-party calls within 24 hours of your notice, immediately log onto <strong>cms.rbi.org.in</strong> and lodge a complaint under the <em>Integrated Ombudsman Scheme, 2021</em>. The RBI issues an electronic notice directly to the bank&apos;s compliance team, triggering an immediate stop-recovery order.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                  <h4 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs">5</span>
                    Register a Police Complaint / Cyber Crime Report for Intimidation
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    If recovery agents use abusive language, issue physical death threats, or attempt digital defamation, file a complaint with your local cyber cell or online at <strong>cybercrime.gov.in</strong> under BNS Section 351 (Criminal Intimidation) and Section 66E of the IT Act.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="legal-notice-complaint-drafts" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                6. Drafting Cease-and-Desist Notices &amp; Legal Grievance Templates
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Banks and collection agencies pay immediate attention when a borrower communicates in the precise language of Indian statutory law. Here is the exact structured legal draft you can customize and serve to the bank&apos;s Nodal Officer:
              </p>

              {/* Cease and Desist Draft Box */}
              <div className="bg-slate-900 text-slate-100 p-6 rounded-2xl border border-slate-800 my-6 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto">
                <p className="text-blue-400 font-bold mb-3">// FORMAL CEASE &amp; DESIST NOTICE: RECOVERY AGENT HARASSMENT //</p>
                <p><strong>TO:</strong> Principal Nodal Officer &amp; Managing Director, [Insert Bank / NBFC Name]</p>
                <p><strong>SUBJECT:</strong> Urgent Notice to Cease &amp; Desist Illegal Third-Party Recovery Calls &amp; Violation of RBI Fair Practices Code (Loan A/c: [Insert Loan Number])</p>
                <br />
                <p>Dear Sir/Madam,</p>
                <br />
                <p>1. I am the primary borrower for the above-referenced loan account. Due to genuine financial distress [state reason: e.g., job loss, medical emergency], I am currently unable to maintain regular EMI payments.</p>
                <p>2. It has come to my attention that collection agents acting on your behalf (Calling Numbers: [Insert Agent Phone Numbers]) have repeatedly called my [parents / spouse / sister / friends] at [Insert Numbers Called], disclosing my private financial data and using coercive language.</p>
                <p>3. This conduct is in direct and actionable violation of:</p>
                <p>&nbsp;&nbsp;&bull; RBI Master Circular on Recovery Agents (RBI/2007-08/296)</p>
                <p>&nbsp;&nbsp;&bull; RBI Master Direction on Outsourcing of Financial Services (RBI/2022-23/108)</p>
                <p>&nbsp;&nbsp;&bull; Article 21 of the Constitution of India (Right to Privacy &amp; Debtor Dignity)</p>
                <p>&nbsp;&nbsp;&bull; Sections 351 &amp; 356 of Bharatiya Nyaya Sanhita (Criminal Intimidation &amp; Defamation)</p>
                <p>4. DEMAND: You are hereby called upon to immediately instruct all collection personnel to CEASE &amp; DESIST from contacting any third parties or non-borrowers. All future communications regarding this debt must be directed exclusively to me in writing at my registered email.</p>
                <p>5. Failure to halt this illegal third-party contact within 24 hours will compel me to initiate formal proceedings before the RBI Banking Ombudsman and lodge a Criminal Complaint (FIR) under BNS Sections 351/308.</p>
                <br />
                <p>Yours faithfully,</p>
                <p>[Your Full Name]</p>
                <p>[Registered Mobile Number &amp; Email]</p>
              </div>
            </section>

            {/* Comparison Table 2: Legal Roles Matrix */}
            <div className="my-8">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                Legal Roles &amp; Financial Liability Matrix Under Indian Law
              </h3>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Party Designation</th>
                      <th>Contractual Agreement Signed</th>
                      <th>Legal Repayment Liability</th>
                      <th>CIBIL Score Impact</th>
                      <th>Permitted Collection Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Primary Borrower</td>
                      <td>Primary Loan Agreement</td>
                      <td className="text-rose-600 font-semibold">100% Primary Obligation</td>
                      <td className="text-rose-600 font-semibold">Direct DPD / Score Drop</td>
                      <td className="text-emerald-600 font-semibold">Yes (8:00 AM – 7:00 PM)</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Co-Applicant / Co-Borrower</td>
                      <td>Joint Loan Agreement</td>
                      <td className="text-rose-600 font-semibold">100% Joint &amp; Several</td>
                      <td className="text-rose-600 font-semibold">Direct DPD / Score Drop</td>
                      <td className="text-emerald-600 font-semibold">Yes (8:00 AM – 7:00 PM)</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-amber-700">Legal Guarantor</td>
                      <td>Deed of Guarantee (Sec 126)</td>
                      <td className="text-amber-700 font-semibold">Secondary (Upon Default)</td>
                      <td className="text-amber-700 font-semibold">Affected if Invoked</td>
                      <td className="text-emerald-600 font-semibold">Yes (Post-Invocation)</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-emerald-700">Reference / Emergency Contact</td>
                      <td>None (Contact Info Only)</td>
                      <td className="text-emerald-600 font-bold">0% ZERO Liability</td>
                      <td className="text-emerald-600 font-bold">ZERO Impact</td>
                      <td className="text-rose-600 font-bold">STRICTLY PROHIBITED</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 7 */}
            <section id="rbi-ombudsman-escalation" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                7. Escalating to the RBI Banking Ombudsman: Step-by-Step CMS Portal Guide
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                The <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021</strong> provides a cost-free, high-speed quasi-judicial grievance mechanism for Indian bank customers. If your bank fails to resolve harassment or continues calling your family, filing a complaint on the RBI Complaint Management System (CMS) triggers immediate regulatory scrutiny:
              </p>

              {/* Step-by-Step Filing Guide */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-6 space-y-4">
                <ol className="list-decimal list-inside space-y-3.5 text-sm md:text-base text-slate-700">
                  <li>
                    <strong>Navigate to the Official Portal:</strong> Visit the RBI Complaint Management System at <strong>cms.rbi.org.in</strong>.
                  </li>
                  <li>
                    <strong>Select Regulated Entity:</strong> Choose your Bank or NBFC from the drop-down list and enter your loan account number.
                  </li>
                  <li>
                    <strong>Select Grievance Category:</strong> Choose <em>&quot;Loans and Advances&quot;</em> &rarr; <em>&quot;Recovery Agents / Harassment / Violation of Fair Practices Code&quot;</em>.
                  </li>
                  <li>
                    <strong>Upload Evidence Dossier:</strong> Upload your call logs, audio recordings, text messages, and a copy of the initial complaint sent to the bank&apos;s Nodal Officer.
                  </li>
                  <li>
                    <strong>Claim Statutory Compensation:</strong> Under Clause 15 of the Scheme, the Ombudsman has the authority to award up to <strong>₹20 Lakhs for actual loss</strong> and up to <strong>₹1 Lakh for mental agony, harassment, and loss of time</strong>.
                  </li>
                  <li>
                    <strong>Tracking &amp; Resolution:</strong> An electronic Complaint ID is generated. The bank is required to submit a compliance response to the RBI within 30 days.
                  </li>
                </ol>
              </div>
            </section>

            {/* Comparison Table 3: Multi-Tier Escalation Matrix */}
            <div className="my-8">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                Multi-Tier Escalation Matrix &amp; Resolution Timelines
              </h3>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Escalation Level</th>
                      <th>Authority / Forum</th>
                      <th>Primary Objective</th>
                      <th>Turnaround Time (TAT)</th>
                      <th>Legal Weight</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Level 1</td>
                      <td>Bank Branch / Customer Care</td>
                      <td>Initial logging of harassment grievance</td>
                      <td>24 to 48 Hours</td>
                      <td>Internal Bank Record</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Level 2</td>
                      <td>Principal Nodal Officer (PNO)</td>
                      <td>Formal Cease-and-Desist enforcement</td>
                      <td>3 to 7 Days</td>
                      <td>Senior Management Audit</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-[#1F5EFF]">Level 3</td>
                      <td>RBI Banking Ombudsman (CMS)</td>
                      <td>Statutory sanction, fines &amp; compensation</td>
                      <td>30 Days</td>
                      <td>Binding Regulatory Order</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-purple-700">Level 4</td>
                      <td>Cyber Crime / Police Station</td>
                      <td>FIR for extortion, abusive threats &amp; defamation</td>
                      <td>Immediate</td>
                      <td>Criminal Prosecution (BNS)</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-emerald-700">Level 5</td>
                      <td>Consumer Disputes Commission</td>
                      <td>Damages for mental torture &amp; deficiency</td>
                      <td>3 to 6 Months</td>
                      <td>Judicial Award &amp; Penalties</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 8 */}
            <section id="permanent-debt-resolution" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                8. Permanent Relief: How a One-Time Settlement (OTS) Legally Ends Debt Harassment
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                While stopping recovery agent harassment protects your family in the short term, the underlying unsecured loan default remains on bank ledgers, accumulating compounding penal interest and degrading your credit score. If genuine financial distress (job loss, business failure, medical catastrophe) prevents you from paying the full balance, the permanent, lawful exit strategy is a <strong>One-Time Settlement (OTS)</strong>.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Under the RBI Compromise Settlement Framework (June 2023), banks and NBFCs are authorized to negotiate a compromise settlement:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-6 space-y-4">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#1F5EFF]" />
                  Why Structured OTS is the Ultimate Shield for Distressed Borrowers:
                </h3>
                <ul className="space-y-3 text-sm md:text-base text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Huge Financial Relief:</strong> Banks routinely waive 100% of penal interest and late fees, and discount the principal balance by <strong>40% to 70%</strong> based on hardship evidence.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Permanent Cessation of Recovery Calls:</strong> The moment an OTS Sanction Letter is issued on official bank letterhead, the bank permanently recalls the account from all third-party collection agencies.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Legal Immunity &amp; No Dues Certificate (NDC):</strong> Upon payment of the settled amount, the bank issues a legally binding <strong>No Dues Certificate</strong>, confirming zero pending liability and cancelling any pending Section 138/arbitration notices.
                    </span>
                  </li>
                </ul>
              </div>

              <p className="text-base leading-relaxed text-slate-700">
                At <strong>SettleLoans</strong>, our experienced advocates and financial negotiators step between you and the lending institutions. We halt all third-party collection harassment under RBI Fair Practices, draft formal representations to Stressed Asset Resolution Branches (SARB), and negotiate maximum waivers to help you achieve a dignified financial restart.
              </p>
            </section>

            <CompanySection />

            {/* Section 9: FAQs */}
            <section id="faqs" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                9. Frequently Asked Questions (FAQ)
              </h2>
              <p className="text-base leading-relaxed mb-8 text-slate-600">
                Clear, authoritative answers to the most critical questions regarding bank recovery agents contacting family members, legal rights, and immediate dispute resolution in India.
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
                    Reserve Bank of India (RBI) — Master Circular on Recovery Agents &amp; Outsourcing Directives (2022)
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
                    RBI Complaint Management System (CMS) — Integrated Ombudsman Scheme (2021)
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
                    Supreme Court of India — Landmark Debtor Dignity Precedents (ICICI Bank vs. Prakash Kaur)
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    National Cyber Crime Reporting Portal (MHA) — Digital Harassment &amp; Cyber Intimidation Reporting
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://consumerhelpline.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    National Consumer Helpline (NCH) — Consumer Protection Act (2019) Unfair Trade Practice Remedies
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
                  href="/bank-recovery-agent-threatening-me"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Bank Recovery Agent Threatening Me
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Bank Recovery Harassment Complaint
                </Link>
                <Link
                  href="/can-bank-recovery-agents-call-references-and-relatives-for-loan-default"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Can Recovery Agents Call References?
                </Link>
                <Link
                  href="/can-bank-recovery-agents-contact-my-employer-or-hr-about-loan-default"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Can Recovery Agents Contact My Employer?
                </Link>
                <Link
                  href="/is-it-legal-to-record-phone-calls-of-bank-recovery-agents-in-india"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Is It Legal to Record Recovery Calls?
                </Link>
                <Link
                  href="/bank-loan-settlement-rules"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Bank Loan Settlement Rules
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Settlement CIBIL Impact
                </Link>
                <Link
                  href="/loan-penalty-waiver-request"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Loan Penalty Waiver Request
                </Link>
                <Link
                  href="/missed-emi-guide-to-regain-control"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Missed EMI Guide to Regain Control
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
                Ashish specializes in stressed debt resolution, RBI regulatory compliance, anti-harassment legal protections, and banking ombudsman escalations for borrowers across India.
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
                <span>Emergency Legal Shield</span>
              </div>
              <div className="text-xl font-black mb-3 leading-tight">
                Are Recovery Agents Harassing Your Family &amp; Friends?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Protect your loved ones immediately. Connect with an empaneled SettleLoans advocate to serve a statutory cease-and-desist notice and negotiate a dignified debt settlement.
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
                    <strong>100% Legal Protection:</strong> Formal advocate representations served to bank management under the RBI Fair Practices Code.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Shield:</strong> Immediate cessation of illegal calls to third parties, relatives, and workplaces.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct Bank OTS Sanctions:</strong> All settlements sanctioned on official bank letterheads with ₹0 NDC guarantee.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero Upfront Retainers:</strong> Transparent, ethical debt relief engineered to safeguard the borrower&apos;s dignity.
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
