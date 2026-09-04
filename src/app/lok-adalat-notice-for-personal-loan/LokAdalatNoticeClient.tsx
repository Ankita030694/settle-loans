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
  FileCheck,
  Users,
  Percent,
  XCircle,
} from 'lucide-react';

// Interactive FAQ Item Component with smooth Lucide toggle
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
            isOpen ? "rotate-180 bg-[#1F5EFF] text-white" : ""
          }`}
        >
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[1400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-base leading-relaxed border-t border-slate-100 pt-4">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default function LokAdalatNoticeClient() {
  const [activeId, setActiveId] = useState<string>("panic-demystified");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: "panic-demystified", title: "1. What is a Lok Adalat Notice?" },
    { id: "mandatory-and-arrest-myths", title: "2. Is Attendance Mandatory? Arrest Myths" },
    { id: "why-banks-choose-lok-adalat", title: "3. Why Banks Use Lok Adalat" },
    { id: "settlement-discounts-and-waivers", title: "4. Settlement Waivers & Discounts (40%–75%)" },
    { id: "compact-infographic-summary", title: "5. Executive Defense Roadmap" },
    { id: "step-by-step-negotiation-guide", title: "6. How to Attend & Settle at Lok Adalat" },
    { id: "legal-finality-section-21", title: "7. Legal Finality: Section 21 LSA Act" },
    { id: "what-if-you-do-not-attend", title: "8. What If You Skip Lok Adalat?" },
    { id: "post-settlement-ndc-cibil", title: "9. Post-Settlement NDC & CIBIL Guide" },
    { id: "faqs", title: "10. Frequently Asked Questions" },
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tocItems]);

  const faqs = [
    {
      question: "Is it mandatory to attend Lok Adalat after receiving a notice for personal loan default?",
      answer: (
        <p>
          <strong>No, attending a Lok Adalat session is strictly voluntary under Indian law.</strong> Under the Legal Services Authorities Act, 1987, Lok Adalat is an alternative dispute resolution (ADR) conciliation platform designed to promote mutual, amicable compromise—not an adversarial court of trial. You cannot be penalized, arrested, or prosecuted for choosing not to attend. However, attending is widely considered one of the single most advantageous opportunities for distressed borrowers because senior bank decision-makers are present with discretionary mandates to approve deep <strong>40% to 70% One-Time Settlement (OTS) waivers</strong> that are legally binding and permanent.
        </p>
      ),
    },
    {
      question: "Can Lok Adalat issue an arrest warrant or send police if I do not attend?",
      answer: (
        <p>
          <strong>Absolutely not. Lok Adalat possesses zero judicial or criminal authority to issue bailable or non-bailable arrest warrants, impose fines, or direct police officers to detain you.</strong> A Lok Adalat bench consists of a sitting or retired judicial officer and a legal/social conciliation member who act purely as impartial mediators. If you do not attend, the bench simply endorses the file as <em>&quot;Disposed of as Not Settled / Pre-Litigation Failed&quot;</em> and remits the matter back to the lender. No adverse order, monetary penalty, or arrest warrant can ever be issued by a Lok Adalat bench.
        </p>
      ),
    },
    {
      question: "What is the difference between a Pre-Litigation Lok Adalat Notice and a Regular Court Summons?",
      answer: (
        <p>
          A <strong>Pre-Litigation Lok Adalat Notice</strong> is issued by the District Legal Services Authority (DLSA) or Taluk Legal Services Committee before any formal lawsuit, summary suit (Order XXXVII CPC), or criminal complaint has been filed in court. It represents a friendly, cost-free invitation to settle the debt outside formal litigation. In contrast, a <strong>Regular Court Summons</strong> is issued by a Metropolitan Magistrate (for Section 138 cheque bounce or Section 25 PSS Act NACH failure) or a Civil Judge after a formal judicial case has been instituted. While ignoring a court summons can lead to bailable warrants or ex-parte decrees, ignoring a Lok Adalat notice carries zero immediate judicial penalty.
        </p>
      ),
    },
    {
      question: "What happens if I ignore or skip a Lok Adalat notice for my personal loan?",
      answer: (
        <p>
          If you skip a Lok Adalat session, nothing happens immediately in terms of court penalties. The matter is closed as unsettled, and the lender retains the legal right to decide their next course of action—such as filing a civil recovery suit, initiating arbitration, issuing statutory Section 138/25 notices, or assigning the file to third-party recovery channels. While skipping does not create immediate legal jeopardy, <strong>it forfeits a unique window of opportunity</strong> where the bank was officially prepared to offer deep debt write-offs with zero court fees.
        </p>
      ),
    },
    {
      question: "How much discount or waiver can I realistically negotiate on a personal loan in Lok Adalat?",
      answer: (
        <p>
          Settlement discounts in National Lok Adalat for unsecured personal loans and credit cards typically range from <strong>40% to 75% of the total outstanding demand</strong>. Banks and NBFCs routinely grant a <strong>100% waiver on accumulated penal interest, compounding late fees, and legal charges</strong>. For loans defaulted over 12 to 24 months with documented financial distress (such as job loss, medical emergency, or business failure), banks are often willing to take a <strong>20% to 50% haircut on the core principal balance</strong> as well, provided the agreed sum is paid in a single bullet payment or 2 to 3 structured monthly tranches.
        </p>
      ),
    },
    {
      question: "Is a Lok Adalat settlement award legally binding on both the bank and the borrower?",
      answer: (
        <p>
          <strong>Yes, absolutely. Under Section 21 of the Legal Services Authorities Act, 1987, a Lok Adalat award is deemed to be a decree of a Civil Court.</strong> Once both you and the bank representative sign the joint compromise terms and the Lok Adalat bench passes the award, it becomes absolute, final, and non-appealable under Section 96(3) of the Code of Civil Procedure (CPC). The bank can never reopen the account, demand additional funds, or file a future lawsuit for the settled debt. The dispute is permanently terminated under Indian law.
        </p>
      ),
    },
    {
      question: "Do I need to hire an advocate to accompany me to Lok Adalat?",
      answer: (
        <p>
          While legal representation is not mandatory by statute, having an experienced debt settlement advocate accompany you to the Lok Adalat session is strongly advised. A dedicated advocate will structure your financial hardship dossier, shield you from aggressive bank recovery officers attempting to extract high repayment commitments, calculate the optimal mathematical settlement floor, and scrutinize the final written Award to ensure that an unconditional No Dues Certificate (NDC) and full withdrawal of pending complaints are explicitly mandated.
        </p>
      ),
    },
    {
      question: "What happens if I sign a Lok Adalat award but fail to pay the agreed settlement amount?",
      answer: (
        <p>
          If you execute a Lok Adalat settlement award and subsequently default on the agreed payment schedule, the legal protection dissolves. Because a Lok Adalat award has the legal standing of a final Civil Court Decree, <strong>the bank can directly initiate execution proceedings under Order XXI of the Code of Civil Procedure</strong> to attach assets or bank accounts without having to prove the debt again in a full civil trial. Therefore, you should only agree to a settlement figure and installment schedule that you have the immediate financial means to honor.
        </p>
      ),
    },
    {
      question: "How does settling a personal loan at Lok Adalat affect my CIBIL credit score?",
      answer: (
        <p>
          When you settle a loan at Lok Adalat for less than the contractual balance, the lender updates your credit bureau record (CIBIL, Experian, CRIF High Mark) with the status <strong>&quot;Settled&quot; or &quot;Post-Lok Adalat Settled&quot;</strong> and marks the outstanding overdue balance as ₹0. While a &quot;Settled&quot; remark causes an immediate score reduction of 50 to 100 points, it halts ongoing negative DPD (Days Past Due) reporting. With disciplined credit behavior, secured credit card usage, and zero future defaults, your CIBIL score can be rebuilt above 750 within 18 to 24 months.
        </p>
      ),
    },
    {
      question: "How can I verify whether a Lok Adalat notice sent to me on WhatsApp is genuine or fake?",
      answer: (
        <p>
          A genuine Lok Adalat notice is issued under the seal of the <strong>District Legal Services Authority (DLSA)</strong> or Taluk Legal Services Committee, contains a verifiable <strong>Pre-Litigation Case (PLC) Number</strong>, lists the specific bench and court complex hall, and is formally dispatched via Speed Post or official court process servers. Fake notices sent by unscrupulous collection agencies lack a PLC number, feature fabricated police emblems or &quot;Immediate Arrest Warrant&quot; stamps, demand payment to personal UPI QR codes, and threaten police raids within 24 hours.
        </p>
      ),
    },
  ];

  return (
    <div
      className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-[#1F5EFF] selection:text-white"
      style={{ fontFamily: "var(--font-satoshi), Satoshi, -apple-system, BlinkMacSystemFont, sans-serif" }}
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

      {/* Hero Section - Charcoal Navy #2D313D Background & Compact Title */}
      <section
        className="w-full border-b border-slate-700/80 pt-8 pb-7 md:pt-12 md:pb-9 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: "#2d313d" }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-blue-300" />
            Pre-Litigation Conciliation &amp; Legal Protection
          </div>

          {/* Compact Title / H1 */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            Lok Adalat Notice for Personal Loan Default:{" "}
            <span className="text-[#3b82f6] md:text-[#60a5fa]">
              Is It Mandatory? Legal Rights &amp; Settlement Guide
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Received a Lok Adalat summons or pre-litigation notice for unpaid personal loans? Attendance is 100% voluntary with zero arrest risk. Learn how to leverage Lok Adalat to negotiate a 40%–70% binding OTS settlement decree.
          </p>

          {/* Metadata Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-3 mb-5">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-[9px]">
                AJ
              </div>
              <span className="text-slate-300">
                Written by{" "}
                <Link
                  href="/authors/ashish-jhangra"
                  className="text-white hover:text-[#3b82f6] font-semibold underline decoration-[#3b82f6] underline-offset-2"
                >
                  Ashish Jhangra
                </Link>
              </span>
            </div>
            <div className="hidden sm:block text-slate-500">•</div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Reviewed by SettleLoans Legal Advisory Team</span>
            </div>
            <div className="hidden sm:block text-slate-500">•</div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Updated: August 20, 2026</span>
            </div>
          </div>

          {/* Hero CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-5 rounded-xl shadow-md hover:shadow-blue-500/30 transition-all duration-300 text-xs sm:text-sm group"
            >
              <span>Get Free Lok Adalat Notice Evaluation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#panic-demystified"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 text-xs sm:text-sm"
            >
              <BookOpen className="w-4 h-4 text-blue-300" />
              <span>Read Legal Defense &amp; Strategy Guide</span>
            </a>
          </div>
        </div>
      </section>

      {/* Crisp Stats Strip Component */}
      <StatsStrip />

      {/* Widescreen 3-Column Grid Container */}
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
                        ? "bg-[#1F5EFF] text-white font-bold shadow-sm"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Middle Column (Main Authority Content) */}
          <main className="w-full min-w-0 font-sans text-slate-800 blog-content">
            {/* Key Takeaways Box (Top) */}
            <div className="bg-blue-50 border-l-8 border-[#1F5EFF] rounded-r-2xl p-6 md:p-8 mb-10 shadow-sm">
              <div className="flex items-center gap-2 text-[#1F5EFF] font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5" />
                <span>CRITICAL BORROWER TAKEAWAYS: LOK ADALAT LEGAL TRUTHS</span>
              </div>
              <ul className="space-y-3 text-sm md:text-base text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Voluntary Attendance:</strong> Lok Adalat is an alternative dispute resolution (ADR) conciliation forum established under the Legal Services Authorities Act, 1987. Non-attendance is neither a crime nor contempt of court.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero Arrest or Police Powers:</strong> A Lok Adalat bench cannot issue arrest warrants, order police detention, or impose fines. It acts strictly as a neutral mediator between you and the bank.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Unmatched Settlement Discounts (40%–75%):</strong> Because banks avoid litigation expenses and save on provisioning, they are authorized to waive 100% of penal interest and up to 50% of the core principal.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Deemed Civil Court Decree (Section 21):</strong> A Lok Adalat settlement award has the full legal force of a civil court decree with zero appeal rights under Section 96(3) CPC, permanently extinguishing the debt.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero Court Fees:</strong> No court fees are levied on either party. If a court suit was already pending, any court fees previously paid by the bank are fully refunded under Section 21(1) of the Act.
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="panic-demystified" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                1. The Legal Panic Demystified: What is a Lok Adalat Notice for Personal Loan Default?
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                Finding a formal notice stamped with the seal of the <strong>District Legal Services Authority (DLSA)</strong> or receiving a message headed &quot;NATIONAL LOK ADALAT PRE-LITIGATION SUMMONS&quot; triggers intense anxiety for any borrower struggling with personal loan defaults. The immediate fear is that the judicial machinery has initiated criminal proceedings and police arrest is imminent.
              </p>

              {/* Definition Box for GEO & Generative AI Citations */}
              <div className="bg-slate-100 border-l-4 border-slate-700 p-5 rounded-r-xl my-6">
                <p className="text-sm md:text-base font-semibold text-slate-900 italic">
                  &quot;Under the Legal Services Authorities Act, 1987, a Lok Adalat (literally &apos;People&apos;s Court&apos;) is a statutory Alternative Dispute Resolution (ADR) mechanism designed to facilitate voluntary, non-adversarial compromise between disputing parties. A pre-litigation Lok Adalat notice is not a criminal summons or a decree of liability; it is an official invitation to resolve outstanding loan dues amicably before formal court litigation commences.&quot;
                </p>
                <p className="text-xs text-slate-500 mt-2 font-medium">
                  — National Legal Services Authority (NALSA) Statutory Framework &amp; Section 19 of LSA Act, 1987
                </p>
              </div>

              <p className="text-base leading-relaxed mb-5 text-slate-700">
                In India, retail personal loans are unsecured credit facilities governed by the Indian Contract Act, 1872. When a borrower misses three consecutive monthly installments (90 days past due), the loan is categorized as a Non-Performing Asset (NPA) under Reserve Bank of India (RBI) prudential norms.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Rather than immediately spending significant funds on court litigation, advocate retainers, and process fees to file civil recovery suits (Summary Suits under Order XXXVII of the CPC) or Section 138 / Section 25 criminal complaints, banks and Non-Banking Financial Companies (NBFCs) utilize the National Lok Adalat platform organized quarterly across all district court complexes in India.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                There are two distinct types of Lok Adalat referrals in personal loan matters:
              </p>

              <div className="space-y-4 my-6">
                <div className="p-5 rounded-xl border border-blue-200 bg-blue-50/60">
                  <h3 className="text-base font-bold text-blue-900 flex items-center gap-2 mb-1">
                    <Scale className="w-5 h-5 text-[#1F5EFF]" />
                    1. Pre-Litigation Lok Adalat Reference (Most Common)
                  </h3>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    The bank submits a list of defaulted loan accounts to the District Legal Services Authority (DLSA) <em>before</em> any lawsuit or court complaint is filed. The DLSA issues a pre-litigation notice assigning a Pre-Litigation Case (PLC) number, inviting both the borrower and bank officials to meet on the designated Lok Adalat Saturday to reach an amicable One-Time Settlement (OTS).
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-amber-200 bg-amber-50/60">
                  <h3 className="text-base font-bold text-amber-900 flex items-center gap-2 mb-1">
                    <Gavel className="w-5 h-5 text-amber-600" />
                    2. Post-Filing / Pending Litigation Lok Adalat Reference
                  </h3>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    If the bank has already filed a Section 138 Negotiable Instruments Act cheque bounce case, a Section 25 PSS Act NACH bounce case, or a civil recovery suit, the presiding Magistrate or Civil Judge may refer the pending case to the upcoming Lok Adalat bench if both parties indicate a willingness to explore compromise terms.
                  </p>
                </div>
              </div>
            </section>

            {/* Comparison Table 1 */}
            <div className="my-8">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                Notice Classification Matrix: Lok Adalat vs. Court Summons vs. Fake Recovery Notice
              </h3>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Notice Type</th>
                      <th>Issuing Authority</th>
                      <th>Attendance Requirement</th>
                      <th>Arrest / Warrant Powers?</th>
                      <th>Legal Objective</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-[#1F5EFF]">Pre-Litigation Lok Adalat Notice</td>
                      <td>District Legal Services Authority (DLSA)</td>
                      <td className="text-emerald-600 font-bold">100% Voluntary</td>
                      <td className="text-emerald-600 font-bold">ZERO (No warrants)</td>
                      <td>Mutual compromise &amp; One-Time Settlement</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-amber-700">Regular Civil Court Summons</td>
                      <td>Civil Judge / Senior Civil Court</td>
                      <td className="text-amber-600 font-semibold">Mandatory (via Advocate)</td>
                      <td className="text-slate-600 font-medium">Ex-parte Money Decree</td>
                      <td>Adjudication of debt &amp; execution order</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-rose-700">Section 138 / 25 Court Summons</td>
                      <td>Judicial / Metropolitan Magistrate</td>
                      <td className="text-rose-600 font-semibold">Mandatory (Bailable)</td>
                      <td className="text-amber-600 font-medium">Bailable Warrant if skipped</td>
                      <td>Summary quasi-criminal trial for bounce</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Fake Recovery Notice (WhatsApp)</td>
                      <td>Unregulated Collection Agency</td>
                      <td className="text-rose-600 font-bold">Illegal / Disregard</td>
                      <td className="text-emerald-600 font-bold">ZERO (Criminal Forgery)</td>
                      <td>Psychological extortion &amp; coercion</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 2 */}
            <section id="mandatory-and-arrest-myths" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                2. Is Attendance Mandatory? Can You Be Arrested for Skipping Lok Adalat? (Arrest Myths Debunked)
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                The most pervasive tactic deployed by rogue debt collection agents is misrepresenting a Lok Adalat notice as a non-bailable judicial arrest warrant. Borrowers frequently receive threatening phone calls stating: <em>&quot;The Lok Adalat Judge has issued an order to arrest you if you do not report to court with cash by 10:00 AM.&quot;</em>
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                <strong>This is completely false and unlawful.</strong> Under Indian constitutional and statutory jurisprudence, Lok Adalat benches operate under strict legal boundaries:
              </p>

              <div className="space-y-4 my-6">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    1. Supreme Court Precedent on Non-Coercive Nature
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    In landmark decisions including <em>State of Punjab v. Jalour Singh (2008 2 SCC 660)</em> and <em>B.P. Moideen Sevamandir v. A.M. Kutty Hassan (2009 2 SCC 198)</em>, the Supreme Court of India held that Lok Adalats have no adjudicatory or judicial power. Their role is solely to persuade parties to reach a compromise. A Lok Adalat cannot pass an order on merits, cannot punish any party, and cannot compel attendance against a citizen&apos;s will.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-rose-600" />
                    2. Complete Absence of Warrant &amp; Contempt Powers
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    A Lok Adalat bench has zero statutory power under the Code of Criminal Procedure (CrPC / BNSS) to issue warrants of arrest, issue property attachment notices, or initiate contempt of court proceedings. If a borrower fails to appear on the scheduled Saturday, the bench simply marks the pre-litigation matter as <em>&quot;Unsettled / Disposed of as Not Settled&quot;</em>.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <Landmark className="w-5 h-5 text-[#1F5EFF]" />
                    3. Distinction from Section 138 Cheque Bounce Summons
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    If the bank previously filed a formal Section 138 NI Act or Section 25 PSS Act complaint in a regular Magistrate Court and that specific criminal court referred the matter to Lok Adalat, skipping the Lok Adalat session will return the file back to the regular Magistrate Court. In that scenario, your advocate must appear on the regular court hearing date to secure bail—not because of the Lok Adalat notice, but due to the underlying Section 138 summons.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="why-banks-choose-lok-adalat" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                3. Why Banks and NBFCs Rely on Lok Adalat for Personal Loan Recoveries
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Understanding why institutional lenders (such as HDFC Bank, ICICI Bank, SBI, Axis Bank, Kotak Mahindra, Bajaj Finance, and digital fintech NBFCs) aggressively push personal loan defaults to Lok Adalat gives you significant negotiating leverage:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Percent className="w-5 h-5 text-[#1F5EFF]" />
                    <h3 className="font-bold text-slate-900 text-base">100% Court Fee Exemption</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Under <strong>Section 21(1) of the Legal Services Authorities Act, 1987</strong>, no court fee is payable in Lok Adalat. Furthermore, if the bank had already filed a civil suit and paid ad-valorem court fees (often 5% to 8% of the loan amount), the entire court fee is refunded in full to the bank once the matter is settled at Lok Adalat.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="w-5 h-5 text-emerald-600" />
                    <h4 className="font-bold text-slate-900 text-base">NPA Provisioning Relief</h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Under RBI Master Directions, commercial banks must set aside capital provisions (ranging from 15% to 100%) against non-performing unsecured personal loans. Settling the account via a Lok Adalat award allows the bank to write off the loss and immediately clean its balance sheet for the financial quarter.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-amber-600" />
                    <h4 className="font-bold text-slate-900 text-base">Zero Appeal Delays</h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Civil litigation in India takes an average of 4 to 7 years. Because Lok Adalat awards are non-appealable by law, the bank eliminates the risk of endless appellate litigation in the District Court or High Court, locking in guaranteed recovery cash flows.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-purple-600" />
                    <h4 className="font-bold text-slate-900 text-base">Senior Settlement Mandates</h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    On National Lok Adalat days, banks empanel their Senior Vice Presidents, Cluster Heads, and Stressed Asset Managers on the bench. Unlike low-level call-center recovery agents who have zero authority to discount loans, these senior executives carry authorized corporate power to approve immediate 50%+ waivers on the spot.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="settlement-discounts-and-waivers" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                4. Realistic Settlement Discounts &amp; Waivers in National Lok Adalat (40% to 75% Relief)
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                How much debt relief can a borrower realistically achieve when negotiating a personal loan at Lok Adalat? Because personal loans are completely unsecured (with no property, gold, or vehicle pledged as collateral), the bank&apos;s recovery probability in contested litigation is extremely low.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                The settlement mathematics at Lok Adalat is structured across three layers:
              </p>

              <div className="bg-blue-50 border-l-4 border-[#1F5EFF] p-5 rounded-r-xl my-6 space-y-3 text-sm md:text-base text-slate-800">
                <div>
                  <strong>Layer 1: 100% Waiver of Penal Charges &amp; Compound Interest</strong>
                  <p className="text-xs md:text-sm text-slate-600 mt-1">
                    Banks inflate defaulted loan statements with 36% compound interest, monthly penal charges, bounce fees, and legal notice costs. In Lok Adalat, 100% of these auxiliary charges are routinely eliminated at the very first step of negotiation.
                  </p>
                </div>
                <div>
                  <strong>Layer 2: Significant Waiver of Accrued Contractual Interest</strong>
                  <p className="text-xs md:text-sm text-slate-600 mt-1">
                    The conciliation bench encourages lenders to roll back accumulated interest to the date of default or charge simple interest at RBI repo rates, reducing the contractual interest burden by 50% to 80%.
                  </p>
                </div>
                <div>
                  <strong>Layer 3: Core Principal Haircut (20% to 50% Principal Waiver)</strong>
                  <p className="text-xs md:text-sm text-slate-600 mt-1">
                    If the borrower presents verifiable hardship evidence (such as job termination, critical illness diagnosis, severe business insolvency, or family bereavement), senior bank officials frequently approve a 20% to 50% waiver directly on the remaining principal balance.
                  </p>
                </div>
              </div>
            </section>

            {/* Comparison Table 2 */}
            <div className="my-8">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                National Lok Adalat Settlement Matrix: Realistic Discount Benchmarks
              </h3>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Default Vintage (Months Past Due)</th>
                      <th>Borrower Hardship Profile</th>
                      <th>Penal Interest Waiver</th>
                      <th>Principal Haircut Range</th>
                      <th>Total Overall Settlement Waiver</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">3 to 6 Months (Early NPA)</td>
                      <td>Temporary salary delay / liquidity squeeze</td>
                      <td className="text-emerald-600 font-bold">100% Waiver</td>
                      <td>0% to 15% Principal Haircut</td>
                      <td className="font-semibold text-blue-600">35% – 45% Waiver</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-[#1F5EFF]">6 to 12 Months (Substandard NPA)</td>
                      <td>Job loss, salary reduction, business slump</td>
                      <td className="text-emerald-600 font-bold">100% Waiver</td>
                      <td>20% to 35% Principal Haircut</td>
                      <td className="font-semibold text-emerald-600">45% – 60% Waiver</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-purple-700">12 to 24+ Months (Doubtful NPA)</td>
                      <td>Prolonged unemployment, medical crisis</td>
                      <td className="text-emerald-600 font-bold">100% Waiver</td>
                      <td>35% to 50% Principal Haircut</td>
                      <td className="font-semibold text-purple-600">60% – 75% Waiver</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-rose-700">24+ Months / Written-Off Asset</td>
                      <td>Complete business shutdown / permanent crisis</td>
                      <td className="text-emerald-600 font-bold">100% Waiver</td>
                      <td>40% to 60% Principal Haircut</td>
                      <td className="font-semibold text-rose-600">70% – 85% Waiver</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 5: Compact High-Impact Infographic Banner (Middle Column Embed) */}
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
                        Legal Defense &amp; Action Blueprint
                      </span>
                      <h3 className="text-sm md:text-base font-black text-white leading-tight">
                        Lok Adalat Loan Settlement Summary &amp; Process Overview
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/lok-adalat-notice-for-personal-loan.jpg"
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
                      src="/images/infographics/lok-adalat-notice-for-personal-loan.jpg"
                      alt="Lok Adalat Notice for Personal Loan Summary Infographic"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>
                      <strong>Key Takeaway:</strong> Attendance is 100% voluntary &bull; Zero arrest powers &bull; 40%–70% OTS Waivers become final Civil Court Decrees under Sec 21 LSA Act.
                    </span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="step-by-step-negotiation-guide" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                6. Step-by-Step Borrower Action Plan: How to Prepare, Attend &amp; Settle at Lok Adalat
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Approaching Lok Adalat unprepared can result in settling on unfavorable terms. Following a structured, strategic protocol ensures maximum debt reduction and ironclad legal protection:
              </p>

              {/* 5-Step Action Blueprint */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-6 space-y-5">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base mb-1">
                      Step 1: Verify Notice Authenticity &amp; Pre-Litigation Case (PLC) Number
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Examine the physical notice received. Confirm that it carries a legitimate District Legal Services Authority (DLSA) seal, a valid PLC Number, and details of the specific court room/hall. You can verify the case on the state legal services portal or by visiting the DLSA office at your district court.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      Step 2: Assemble Your Financial Hardship Dossier
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Lok Adalat conciliation judges are deeply sympathetic to documented distress. Prepare a clean folder containing: termination letters, pink slip notices, salary slips showing steep pay cuts, medical diagnosis reports, hospital billing receipts, GST/ITR returns reflecting business downturn, and bank statements showing low average balances.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      Step 3: Conduct Pre-Adalat Informal Bargaining with Bank Officers
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      In the 7 to 10 days leading up to Lok Adalat Saturday, contact the bank&apos;s Stressed Asset Resolution Branch (SARB) or have your debt settlement advocate initiate preliminary discussions. Agreeing on tentative settlement numbers in advance ensures that Lok Adalat day is merely used to record formal consent terms before the bench.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      Step 4: Present Your Case Before the Lok Adalat Bench
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      On hearing day, attend the designated court room with your advocate. Explain your bona fide intention to resolve the debt despite genuine economic hardship. Emphasize that you are not a willful defaulter. The conciliation judge will actively counsel the bank officers to grant maximum principal haircuts and realistic installment timelines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      Step 5: Scrutinize the Award Text Before Signing Consent Terms
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Before affixing your signature to the settlement agreement, ensure the written Award explicitly states: 1) The exact settlement amount and payment due dates; 2) That upon final payment, the entire debt is deemed fully discharged; 3) That the bank shall issue an unconditional No Dues Certificate (NDC) within 30 days; 4) That all pending Section 138, Section 25, or civil recovery proceedings stand permanently withdrawn.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Comparison Table 3 */}
            <div className="my-8">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                Lok Adalat Settlement Award vs. Private Bank OTS Sanction Letter
              </h3>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Resolution Parameter</th>
                      <th>Lok Adalat Settlement Award</th>
                      <th>Private Bank OTS Sanction Letter</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Legal Standing</td>
                      <td className="text-emerald-600 font-bold">Deemed Civil Court Decree (Sec 21 LSA Act)</td>
                      <td className="text-blue-600 font-semibold">Private Commercial Contract</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Appeal &amp; Challenge Rights</td>
                      <td className="text-emerald-600 font-bold">ZERO Appeal (Sec 96(3) CPC) — 100% Final</td>
                      <td className="text-amber-600 font-medium">Can be revoked by bank if terms disputed</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Execution &amp; Enforcement</td>
                      <td>Directly executable under Order XXI CPC</td>
                      <td>Requires fresh civil lawsuit to enforce</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Protection from Future Lawsuits</td>
                      <td className="text-emerald-600 font-bold">Absolute judicial immunity for settled debt</td>
                      <td>High, subject to valid No Dues Certificate</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Court Fee Implications</td>
                      <td className="text-emerald-600 font-bold">₹0 Court Fee / 100% Refund to Bank</td>
                      <td>Bank absorbs or passes legal expenses</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 7 */}
            <section id="legal-finality-section-21" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                7. The Legal Finality of a Lok Adalat Award: Section 21 of the Legal Services Authorities Act, 1987
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                The single most powerful advantage of settling a personal loan through Lok Adalat is its <strong>unshakeable legal finality</strong>. Under Section 21 of the Legal Services Authorities Act, 1987, every award passed by a Lok Adalat bench has the legal character and enforceability of a formal decree passed by a competent Civil Court.
              </p>

              <div className="bg-slate-100 border-l-4 border-slate-700 p-5 rounded-r-xl my-6">
                <h3 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-[#1F5EFF]" />
                  Statutory Rule on Non-Appealable Consent Decrees:
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  &quot;Under Section 96(3) of the Code of Civil Procedure, 1908, no appeal shall lie from a decree passed by the court with the consent of parties. Because a Lok Adalat award is founded on mutual consent, neither the borrower nor the bank can appeal against the award before any District Court, High Court, or the Supreme Court.&quot;
                </p>
                <p className="text-xs text-slate-500 mt-2 font-medium">
                  — Supreme Court of India in P.T. Thomas v. Thomas Job (2005 6 SCC 478)
                </p>
              </div>

              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Once the Lok Adalat Award is stamped by the bench and you honor the settlement tranches, the bank is permanently barred from:
              </p>
              <ul className="space-y-2.5 text-sm md:text-base text-slate-700 list-disc list-inside mb-5">
                <li>Re-calculating interest or claiming residual balances in the future.</li>
                <li>Assigning or selling the residual debt to third-party Asset Reconstruction Companies (ARCs).</li>
                <li>Initiating fresh Section 138 NI Act or Section 25 PSS Act criminal proceedings.</li>
                <li>Deploying recovery agents to contact or visit you regarding the settled loan.</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section id="what-if-you-do-not-attend" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                8. What Happens If You Do NOT Attend Lok Adalat? (Strategic Risk Evaluation)
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Many borrowers ask: <em>&quot;What if I simply do not show up on Lok Adalat Saturday? Will a judgment be passed against me in my absence?&quot;</em>
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                The short answer is <strong>No</strong>. Unlike a regular civil court where failing to appear can lead to an <em>ex-parte</em> decree, a Lok Adalat bench has zero power to pass an ex-parte order against an absent party.
              </p>

              <div className="space-y-4 my-6">
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
                  <h3 className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    What Actually Happens at the Bench:
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    The bench calls the case. If the borrower is absent, the judge notes: <em>&quot;Borrower absent. Matter unsettled. Returned to referring bank.&quot;</em> The pre-litigation file is permanently closed without cost or penalty.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                    What the Bank May Do Next:
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    With the pre-litigation attempt failed, the bank evaluates three choices: 1) Send regular advocate demand notices; 2) File a formal civil recovery suit or Section 138/25 complaint in court; 3) Re-list the matter in the next quarterly National Lok Adalat session (3 months later) with better settlement terms.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#1F5EFF]" />
                    Strategic Assessment: When to Attend vs. When to Skip:
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    If you have access to some settlement funds (even 30% to 40% of the loan value) via family assistance or savings, <strong>attending is strongly recommended</strong> because you will never get a better discount forum. If you are in total financial destitution with zero funds to offer, skipping is harmless; you can wait until your financial situation stabilizes.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section id="post-settlement-ndc-cibil" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                9. Post-Settlement Compliance: Securing Your No Dues Certificate &amp; CIBIL Rectification
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Securing a favorable Lok Adalat award is only half the battle; ensuring meticulous post-settlement execution is essential to protect your credit profile and financial standing:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-6 space-y-4">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-emerald-600" />
                  4-Point Post-Lok Adalat Checklist:
                </h3>
                <ol className="list-decimal list-inside space-y-3 text-sm md:text-base text-slate-700">
                  <li>
                    <strong>Execute Payments Strictly via Verifiable Banking Channels:</strong> Never pay cash to collection agents. Remit settlement tranches directly to your loan account via RTGS, NEFT, or Demand Draft, quoting the Lok Adalat Case Number in the transaction remarks.
                  </li>
                  <li>
                    <strong>Obtain Certified Copy of the Lok Adalat Award:</strong> Collect the signed and sealed Lok Adalat Award directly from the DLSA registry at the district court. This serves as your permanent judicial record.
                  </li>
                  <li>
                    <strong>Demand Official No Dues Certificate (NDC / NOC):</strong> Within 15 to 30 days of the final settlement tranche, the lender is legally required under RBI Fair Practices Code to issue a formal No Dues Certificate confirming zero outstanding liability.
                  </li>
                  <li>
                    <strong>Monitor Credit Bureau Updates (CIBIL / Experian):</strong> After 45 to 60 days, verify your CIBIL report. The loan account balance must reflect ₹0 with status &quot;Settled&quot;. If discrepancies exist, submit a CIBIL online dispute attaching the Lok Adalat Award and bank NDC.
                  </li>
                </ol>
              </div>
            </section>

            {/* Company Section Reusable Component */}
            <CompanySection />

            {/* Section 10: FAQ Accordion */}
            <section id="faqs" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                10. Frequently Asked Questions (FAQ)
              </h2>
              <p className="text-base leading-relaxed mb-8 text-slate-600">
                Authoritative legal answers to the most common questions surrounding Lok Adalat notices, attendance rules, arrest fears, and loan settlement negotiations in India.
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
                <span>Official Regulatory Sources &amp; Statutory Authorities</span>
              </h3>
              <ul className="space-y-2.5 text-xs md:text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    National Legal Services Authority (NALSA) — National Lok Adalat Guidelines &amp; Pre-Litigation Framework
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
                    Supreme Court of India — Landmark Rulings on Lok Adalat Award Finality (Jalour Singh &amp; Thomas Job)
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
                    Reserve Bank of India (RBI) — Master Directions on Compromise Settlements &amp; Recovery Norms
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
                    eCourts Services — National Judicial Data Grid &amp; District Legal Services Case Tracking
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
                    TransUnion CIBIL — Credit Information Companies (Regulation) Act Rules on Settled Accounts
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
                  href="/personal-loan-legal-notice"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Legal Notice Defense
                </Link>
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
                  href="/personal-loan-settlement-letter-format"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Loan Settlement Letter Format
                </Link>
                <Link
                  href="/cheque-bounce"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Cheque Bounce Defense
                </Link>
                <Link
                  href="/personal-loan-settlement-fees"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Settlement Fees
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
                  href="/recovery-agent-visiting-workplace-office"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Recovery Agents at Workplace
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
                Ashish specializes in stressed asset negotiations, National Lok Adalat representation, Section 138/25 defense, and borrower protection under RBI regulations.
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
                <span>Lok Adalat Legal Representation</span>
              </div>
              <div className="text-xl font-black mb-3 leading-tight">
                Received a Lok Adalat Notice or Summons?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Do not face bank officials alone. Have an experienced SettleLoans advocate represent you at Lok Adalat to negotiate a 40%–70% binding settlement award.
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
                    <strong>100% Legal Representation:</strong> Empanelled advocates represent you across Lok Adalat benches and court proceedings.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Protection:</strong> Formal notices served to lenders stop unauthorized recovery calls and workplace visits.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Official Decree Sanctions:</strong> Every settlement award passed under Section 21 of LSA Act with guaranteed ₹0 NDC.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero Upfront Retainer:</strong> Transparent, performance-based legal advisory dedicated to genuine debt freedom.
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
