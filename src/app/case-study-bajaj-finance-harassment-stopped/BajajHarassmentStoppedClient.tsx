'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';
import {
  ShieldCheck,
  AlertTriangle,
  Clock,
  ArrowRight,
  ChevronDown,
  Calendar,
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
  UserCheck,
  ShieldX,
  FileCheck,
  AlertCircle,
  Briefcase,
  Users,
  Percent,
  Calculator,
  Gavel
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

export default function BajajHarassmentStoppedClient() {
  const [activeId, setActiveId] = useState<string>('case-background-workplace-crisis');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'case-background-workplace-crisis', title: '1. The ₹3 Lakh Workplace Crisis' },
    { id: 'rbi-recovery-guidelines-violations', title: '2. RBI Recovery Red Lines' },
    { id: 'workplace-harassment-legal-implications', title: '3. Workplace Harassment & Privacy Laws' },
    { id: 'cease-and-desist-legal-intervention', title: '4. Serving Cease-and-Desist Notice' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Defense Blueprint' },
    { id: 'nodal-escalation-agent-containment', title: '6. Nodal Escalation & Agent Recall' },
    { id: 'nbfc-provisioning-financial-hardship', title: '7. NBFC Provisioning & Hardship Audit' },
    { id: 'ots-negotiation-haircut-breakdown', title: '8. Negotiating 55% Haircut & Waiver' },
    { id: 'sanction-audit-no-dues-certificate', title: '9. Sanction Audit & ₹0 NDC Issuance' },
    { id: 'comparative-resolution-matrix', title: '10. Self-Defense vs Legal Shield' },
    { id: 'company-resolution-section', title: '11. SettleLoans Legal Representation' },
    { id: 'faqs', title: '12. Frequently Asked Questions' },
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
      question: "Are Bajaj Finance recovery agents legally allowed to visit a borrower's workplace or office?",
      answer: (
        <p>
          No. Under the <strong>Reserve Bank of India (RBI) Master Directions on Recovery Agents</strong> and the Fair Practices Code for NBFCs, recovery agents are strictly prohibited from visiting a borrower&apos;s workplace unless explicitly requested or agreed to in writing. Creating a public scene, disclosing debt details to colleagues, HR managers, or security personnel, and intimidating the borrower at work constitute severe violations of RBI guidelines and fundamental privacy rights under Article 21 of the Indian Constitution.
        </p>
      )
    },
    {
      question: "How does a legal cease-and-desist notice stop Bajaj Finance recovery harassment?",
      answer: (
        <p>
          A formal legal cease-and-desist notice drafted by a debt defense advocate formally places Bajaj Finance and its third-party recovery agencies on statutory record for violations of the RBI Master Directions, the IT Act, and the Indian Penal Code (criminal intimidation, extortion, and defamation). It directs the lender to halt all unannounced physical visits, cease contacting third parties, and route all future communication exclusively through the borrower&apos;s appointed legal counsel.
        </p>
      )
    },
    {
      question: "How was the ₹3 Lakh Bajaj Finance loan settled for ₹1.35 Lakhs in this case study?",
      answer: (
        <p>
          Following the containment of physical harassment via statutory notices, SettleLoans presented a verified financial hardship dossier (medical bills and cash-flow depletion records) directly to Bajaj Finance&apos;s Central Stressed Asset Management Desk. By proving genuine inability to service regular EMIs and demonstrating that litigation costs would yield lower recovery under NBFC provisioning rules, SettleLoans negotiated a <strong>55% principal waiver</strong>, settling the ₹3,00,000 balance for <strong>₹1,35,000</strong> with 100% waiver of penal interest.
        </p>
      )
    },
    {
      question: "What evidence should a borrower collect when facing Bajaj Finance agent harassment?",
      answer: (
        <p>
          Borrowers should systematically gather: (1) Office visitor logs or CCTV footage capturing recovery agents at reception; (2) Audio or video recordings of aggressive conversations, threats, or abusive language; (3) Call logs and SMS/WhatsApp messages received outside permitted hours (08:00 AM to 07:00 PM); (4) Written statements from colleagues or HR personnel who witnessed the confrontation; and (5) Agent identification badges or visiting cards.
        </p>
      )
    },
    {
      question: "Where can a borrower file a formal complaint against Bajaj Finance recovery harassment?",
      answer: (
        <p>
          Borrowers can file complaints through four escalating channels: (1) Bajaj Finance Principal Nodal Officer (PNO) and Chief Grievance Redressal Officer; (2) The Reserve Bank of India (RBI) Integrated Ombudsman Portal (cms.rbi.org.in); (3) The local police station or Cyber Crime Cell for criminal intimidation (Section 503/506 IPC); and (4) The National Consumer Disputes Redressal Commission (NCDRC) for deficiency of service and harassment damages.
        </p>
      )
    },
    {
      question: "Can Bajaj Finance take legal action or file police complaints for an unsecured personal loan default?",
      answer: (
        <p>
          Unsecured personal loan default is strictly a civil dispute arising from breach of contract under the Indian Contract Act, 1872. The police cannot register an FIR, summon you, or make an arrest for bona fide financial inability to pay. However, if repayment cheques bounce or NACH auto-debits fail, the lender may issue statutory notices under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act, which must be addressed and closed via legal settlement.
        </p>
      )
    },
    {
      question: "What should be verified in a Bajaj Finance OTS Sanction Letter before paying settlement funds?",
      answer: (
        <p>
          Borrowers must verify that: (1) The settlement letter is generated on official Bajaj Finance Limited letterhead bearing authorized digital signatures and employee codes; (2) The letter explicitly states the exact settlement amount (e.g., ₹1,35,000) as full and final discharge; (3) It confirms complete waiver of remaining principal, overdue interest, and bounce charges; (4) It guarantees issuance of a No Dues Certificate (NDC) and closure of legal notices; and (5) Payment is remitted directly to the official loan account, never to agent personal accounts.
        </p>
      )
    },
    {
      question: "How does settling a Bajaj Finance loan affect CIBIL score and how long does recovery take?",
      answer: (
        <p>
          Settling a loan results in a &apos;Settled&apos; or &apos;Post-Write-off Settled&apos; status on credit bureau records with a ₹0 balance, causing an initial drop of 75 to 120 points. However, active default accumulation stops immediately. By utilizing a secured fixed-deposit credit card, keeping credit utilization below 30%, and ensuring timely utility payments, borrowers can systematically rehabilitate their credit score back to 750+ within 18 to 24 months.
        </p>
      )
    },
    {
      question: "How fast can SettleLoans intervene to stop physical recovery agent visits?",
      answer: (
        <p>
          SettleLoans can draft and serve an urgent statutory legal cease-and-desist notice to Bajaj Finance&apos;s Principal Nodal Officer and designated collection partners within 2 to 4 business hours of case onboarding. This formal legal shield immediately alerts the NBFC of impending regulatory liability, typically halting physical visits and unauthorized calls within 24 to 48 hours.
        </p>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* A. Charcoal Navy Hero Background */}
      <section
        className="w-full border-b border-slate-700/80 pt-8 pb-7 md:pt-12 md:pb-9 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Verified Case Study • Bajaj Finance Harassment Resolution</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            How to Stop Bajaj Finance Recovery Harassment: <span className="text-[#3b82f6] md:text-[#60a5fa]">₹3L Workplace Visit Case Study</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            A comprehensive case study detailing how SettleLoans halted illegal recovery agent workplace visits for a ₹3,00,000 Bajaj Finance personal loan through formal RBI cease-and-desist notices and negotiated an official 55% OTS debt waiver.
          </p>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-3 mb-5 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Authored by <strong>Ashish Jhangra</strong></span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Published: August 2026</span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>RBI Master Directions Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Stop Recovery Harassment Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Free Legal Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* B. Stats Strip Component */}
      <StatsStrip />

      {/* Main 3-Column Content Layout */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column: Sticky Table of Contents + Quick Crux */}
          <aside className="hidden lg:block sticky top-24 space-y-5">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#1F5EFF]" />
                Case Study Index
              </h3>
              <nav className="space-y-1.5 text-xs">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block py-1.5 px-2.5 rounded-lg transition-colors leading-snug ${
                      activeId === item.id
                        ? 'bg-[#1F5EFF] text-white font-bold shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                    }`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick Crux Pill */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-4 text-xs text-slate-700 shadow-sm">
              <div className="flex items-center gap-2 font-bold text-blue-900 mb-1.5">
                <Sparkles className="w-4 h-4 text-[#1F5EFF]" />
                <span>Executive Case Crux</span>
              </div>
              <p className="leading-relaxed text-slate-600">
                SettleLoans stopped illegal workplace recovery visits within 48 hours via RBI cease-and-desist notices and negotiated a <strong>55% principal waiver</strong> on a ₹3 Lakh Bajaj Finance loan.
              </p>
            </div>
          </aside>

          {/* Middle Column: Main Body Content */}
          <main className="min-w-0 blog-content">
            
            {/* Section 1: Borrower Profile & Workplace Crisis */}
            <section id="case-background-workplace-crisis" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                1. The ₹3 Lakh Crisis: Borrower Profile, Workplace Infiltration &amp; Default Genesis
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                In October 2024, Vikram Malhotra, a 32-year-old mid-level operations analyst working at an IT services multinational in Hinjawadi Infotech Park, Pune, availed an unsecured personal loan of ₹3,00,000 from Bajaj Finance Limited. The credit facility was structured over a 36-month tenure at an effective interest rate of 16.5% per annum, translating into a monthly equated installment (EMI) of ₹10,630. For eighteen consecutive months, Vikram maintained a flawless repayment track record through automated National Automated Clearing House (NACH) mandates debited directly from his salary account.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                In May 2026, a severe domestic medical emergency struck when Vikram&apos;s father suffered an acute cardiac episode requiring immediate emergency angioplasty and extended intensive care hospitalization. The unanticipated medical outlays depleted Vikram&apos;s liquid savings entirely, forcing him into a acute liquidity crunch. Compounding this distress, his employer delayed project incentive disbursements, leaving him unable to fund his bank account for the June 2026 NACH presentation. The mandate bounced, incurring statutory penal charges and triggering automated tele-collection workflows.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                By August 2026, with three consecutive EMIs unpaid, the overdue balance crossed 90 days past due (DPD). Rather than engaging in constructive restructuring discussions, Bajaj Finance outsourced the delinquent account to a third-party field recovery agency. In late August, two aggressive collection agents arrived unannounced at the reception of Vikram&apos;s corporate tech-park office. Speaking loudly to front-desk staff, demanding security entry badges, and interrogating administrative executives about Vikram&apos;s salary and presence, the agents caused immense professional mortification and threatened daily visits until full cash recovery was achieved.
              </p>

              {/* Statutory Callout Box */}
              <div className="bg-amber-50/90 border-l-4 border-amber-500 rounded-r-2xl p-5 my-6">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-1">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>The Ground Reality of Aggressive Retail Loan Collections</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800/90 leading-relaxed">
                  Third-party recovery agencies frequently deploy high-pressure tactics such as unannounced workplace visits and social shaming to induce panic payments. Under Reserve Bank of India regulations, such actions are strictly illegal and create severe vicarious liability for the regulated lending institution.
                </p>
              </div>
            </section>

            {/* Section 2: RBI Recovery Red Lines */}
            <section id="rbi-recovery-guidelines-violations" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                2. Regulatory Red Lines: RBI Master Directions vs. Ground Recovery Tactics
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                The Reserve Bank of India has established comprehensive, binding regulations governing loan recovery practices through the <em>Master Direction – Non-Banking Financial Company – Systemically Important Non-Deposit taking Company (Reserve Bank) Directions</em> and the landmark <em>Circular on Recovery Agents engaged by Regulated Entities (DOR.ORG.REC.65/21.04.158/2022-23)</em>. These statutory directives strictly define the permissible boundaries of debt collection.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Under paragraph 7.14 of the RBI Master Directions, regulated entities including Non-Banking Financial Companies (NBFCs) like Bajaj Finance are held vicariously liable for the unlawful actions of their recovery vendors. The regulatory guidelines explicitly prohibit: (1) Visiting a borrower&apos;s workplace or office unless the borrower has provided explicit, written prior consent; (2) Contacting or harassing the borrower outside the mandated operational window of 08:00 AM to 07:00 PM; (3) Disclosing debt details, overdue amounts, or default status to any third party, including employers, coworkers, friends, or family members; (4) Using abusive language, intimidation, psychological coercion, or physical threats.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                The following statutory comparison highlights the stark divergence between mandatory RBI compliance and the illegal field practices observed in Vikram&apos;s case:
              </p>

              {/* 4-Sided Bordered Comparison Table */}
              <div className="overflow-x-auto my-6">
                <table className="w-full text-left text-xs sm:text-sm border border-slate-300 rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900">
                      <th className="p-3 font-bold border-b border-r border-slate-300">Operational Parameter</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">RBI Master Directions Mandate</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Ground Collection Practice</th>
                      <th className="p-3 font-bold border-b border-slate-300">Statutory Legal Remedy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">Workplace Office Visits</td>
                      <td className="p-3 border-r border-slate-200">Strictly prohibited without written consent</td>
                      <td className="p-3 border-r border-slate-200 text-rose-700 font-medium">Unannounced visits at reception desk</td>
                      <td className="p-3 font-bold text-blue-700">Legal Cease-and-Desist Notice</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Third-Party Disclosure</td>
                      <td className="p-3 border-r border-slate-200">Complete borrower confidentiality mandated</td>
                      <td className="p-3 border-r border-slate-200 text-rose-700 font-medium">Informing HR, security, and colleagues</td>
                      <td className="p-3 font-bold text-blue-700">Article 21 Privacy &amp; Defamation Claim</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">Calling Hours &amp; Frequency</td>
                      <td className="p-3 border-r border-slate-200">Restricted between 08:00 AM and 07:00 PM</td>
                      <td className="p-3 border-r border-slate-200 text-rose-700 font-medium">30+ automated calls from virtual numbers</td>
                      <td className="p-3 font-bold text-blue-700">RBI Integrated Ombudsman Filing</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Agent Identification</td>
                      <td className="p-3 border-r border-slate-200">Mandatory authorization badge and ID card</td>
                      <td className="p-3 border-r border-slate-200 text-rose-700 font-medium">Refusal to show lender identity cards</td>
                      <td className="p-3 font-bold text-blue-700">Police Intimation for Intimidation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Workplace Harassment & Privacy Laws */}
            <section id="workplace-harassment-legal-implications" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                3. Anatomy of Workplace Harassment: Privacy Violations &amp; Tortious Interference
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                When recovery agents infiltrate a corporate workspace, they commit multiple concurrent violations under Indian civil, criminal, and constitutional law. In the landmark nine-judge bench ruling in <em>Justice K.S. Puttaswamy (Retd.) v. Union of India (2017)</em>, the Supreme Court of India established informational privacy and personal dignity as intrinsic fundamental rights protected under Article 21 of the Constitution. A commercial financial default does not extinguish a citizen&apos;s right to privacy or permit corporate vigilante tactics.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Furthermore, by confronting receptionists, security officers, and team managers, recovery agents commit the civil tort of intentional infliction of emotional distress and tortious interference with contractual relations. By creating an environment where an employee faces disciplinary inquiry or loss of employment reputation due to private financial obligations, the recovery agency and its principal lender expose themselves to substantial damages under the Law of Torts.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Under the Indian Penal Code, 1860 (now Bharatiya Nyaya Sanhita, 2023), aggressive on-site harassment fulfills the statutory ingredients of Criminal Intimidation (Section 503/506 IPC), Intentional Insult with Intent to Provoke Breach of Peace (Section 504 IPC), and Defamation (Section 499/500 IPC). The Supreme Court&apos;s categorical directive in <em>ICICI Bank Ltd. v. Prakash Kaur (2007)</em> reiterated that banks cannot employ musclemen or extra-judicial coercion to recover debt, holding that recovery processes must strictly follow the rule of law.
              </p>
            </section>

            {/* Section 4: Serving Cease-and-Desist Notice */}
            <section id="cease-and-desist-legal-intervention" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                4. The SettleLoans Legal Intervention: Serving the Statutory Cease-and-Desist Notice
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Upon being onboarded by Vikram, SettleLoans initiated an immediate multi-tiered legal defense strategy designed to neutralize physical harassment within 24 hours. The primary legal instrument deployed was a comprehensive <strong>Statutory Cease-and-Desist Legal Notice</strong> served concurrently via registered email and speed post to the Managing Director of Bajaj Finance Limited, the Principal Nodal Officer (PNO), and the designated local collection agency partner.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                The legal notice established four non-negotiable legal directives:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                First, it formally documented the specific timestamped violations committed by field agents at the Hinjawadi corporate facility, citing CCTV log registrations and security incident reports. Second, it cited the binding RBI Master Directions on Recovery Agents, warning that repeated unauthorized visits would trigger immediate complaints before the RBI Integrated Ombudsman and the Banking Supervision Department. Third, it invoked the doctrine of vicarious liability, putting Bajaj Finance on formal notice for criminal defamation and civil damages. Fourth, it exercised the borrower&apos;s legal right of representation, directing the lender to route 100% of future communication exclusively through SettleLoans&apos; appointed legal counsel.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                By shifting the dispute from an uncontrolled confrontation with unregulated street agents to an audited, legally binding dialogue with corporate compliance officers, SettleLoans established immediate institutional protection for the client.
              </p>
            </section>

            {/* Section 5: Dedicated Infographic Banner (Exact Wrapper Specification) */}
            <section id="infographic-resolution-blueprint" className="scroll-mt-24">
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
                        Bajaj Finance Harassment Defense &amp; Settlement Blueprint
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/case-study-bajaj-finance-harassment-stopped.jpg"
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
                      src="/images/infographics/case-study-bajaj-finance-harassment-stopped.jpg"
                      alt="Bajaj Finance Recovery Harassment Legal Defense & Settlement Infographic"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Takeaway:</strong> RBI cease-and-desist notices legally halt workplace visits, redirecting the loan to central settlement desks.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6: Nodal Escalation & Agent Recall */}
            <section id="nodal-escalation-agent-containment" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                6. Ground Containment: Principal Nodal Officer Escalation &amp; Immediate Withdrawal
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                The institutional impact of the cease-and-desist notice was immediate and decisive. Within 48 hours of service, the Chief Grievance Redressal Officer and Principal Nodal Officer of Bajaj Finance issued a formal written acknowledgement via email, confirming that the account was withdrawn from the local third-party agency and reassigned to the internal Central Stressed Assets Resolution Desk in Pune.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                All physical visits to Vikram&apos;s Hinjawadi workplace were terminated immediately. The automated dialer lists were suppressed, reducing the barrage of daily collection calls to zero. The corporate legal desk confirmed that future interactions regarding account resolution would proceed exclusively through structured, documented correspondence with SettleLoans advocates.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                This rapid containment demonstrates a fundamental truth of retail banking collections: unregulated third-party collection agencies operate on fear and asymmetry of legal knowledge. When confronted with precise statutory provisions, empirical evidence of violations, and formal regulatory escalations, corporate compliance officers act swiftly to mitigate institutional liability.
              </p>
            </section>

            {/* Section 7: NBFC Provisioning & Hardship Audit */}
            <section id="nbfc-provisioning-financial-hardship" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                7. Behind the Balance Sheet: NBFC NPA Provisioning &amp; Settlement Willingness
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                With physical harassment contained, the strategic focus transitioned to negotiating a sustainable financial resolution. To understand why Bajaj Finance agreed to waive 55% of the principal debt and 100% of accumulated penal fees, one must analyze the regulatory accounting rules governing Non-Banking Financial Companies under the <em>Indian Accounting Standards (Ind AS 109)</em> and RBI prudential asset classification norms.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Under Ind AS 109, lenders must categorize financial assets into three stages based on Expected Credit Loss (ECL) credit risk deterioration:
              </p>

              {/* 4-Sided Bordered Provisioning Table */}
              <div className="overflow-x-auto my-6">
                <table className="w-full text-left text-xs sm:text-sm border border-slate-300 rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900">
                      <th className="p-3 font-bold border-b border-r border-slate-300">Ind AS 109 Stage</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Delinquency Horizon</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Credit Risk Classification</th>
                      <th className="p-3 font-bold border-b border-slate-300">Mandatory ECL Provisioning</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">Stage 1: Performing</td>
                      <td className="p-3 border-r border-slate-200">0 – 29 Days Past Due</td>
                      <td className="p-3 border-r border-slate-200">Standard Asset</td>
                      <td className="p-3">12-Month Expected Credit Loss (0.5%–1.5%)</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Stage 2: Underperforming</td>
                      <td className="p-3 border-r border-slate-200">30 – 89 Days Past Due</td>
                      <td className="p-3 border-r border-slate-200">Significant Increase in Credit Risk (SICR)</td>
                      <td className="p-3 font-bold text-amber-700">Lifetime Expected Credit Loss (15%–35%)</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Stage 3: Credit-Impaired (NPA)</td>
                      <td className="p-3 border-r border-slate-200">90+ Days Past Due</td>
                      <td className="p-3 border-r border-slate-200">Defaulted Non-Performing Asset</td>
                      <td className="p-3 font-bold text-rose-700">70% to 100% Specific Loss Provision</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4">
                Because Vikram&apos;s ₹3,00,000 personal loan was completely unsecured with zero underlying collateral, Bajaj Finance had already absorbed substantial provisioning charges against its quarterly profit and loss ledger once the account entered Stage 3 NPA status. In retail lending economics, pursuing an unsecured debtor through civil recovery suits or summary arbitration takes 3 to 5 years, incurring heavy legal retainers with low realization probability.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                SettleLoans compiled and submitted an audited <strong>Financial Hardship Dossier</strong> comprising hospital discharge summaries, cardiac treatment invoices, bank account statements proving income depletion, and an audited household expense sheet. Using this empirical documentation, SettleLoans demonstrated to Bajaj Finance&apos;s Credit Committee that an immediate cash settlement yielded a higher Net Present Value (NPV) than protracted litigation.
              </p>
            </section>

            {/* Section 8: Negotiating 55% Haircut & Waiver */}
            <section id="ots-negotiation-haircut-breakdown" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                8. The OTS Compromise: Negotiating 55% Haircut (₹1.35L) &amp; Penalty Waiver
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Negotiating directly with Bajaj Finance&apos;s Zonal Settlement Committee, SettleLoans structured a formal One-Time Settlement (OTS) proposal under the <em>RBI Framework for Compromise Settlements and Technical Write-offs</em>. By eliminating inflated bounce penalties, interest surcharges, and legal levies, the negotiation focused strictly on the core principal balance.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Over three structured negotiation rounds, SettleLoans established that Vikram&apos;s extended family could pool a one-time relief fund of ₹1,35,000 to achieve a permanent, full-and-final settlement. Recognizing the validity of the medical hardship and the zero-recovery risk of protracted legal action, the Credit Committee sanctioned a <strong>55% principal waiver</strong> (a discount of ₹1,65,000) along with a 100% waiver of all accumulated overdue interest and penal fees amounting to ₹48,600.
              </p>

              {/* 4-Sided Bordered Financial Breakdown Table */}
              <div className="overflow-x-auto my-6">
                <table className="w-full text-left text-xs sm:text-sm border border-slate-300 rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900">
                      <th className="p-3 font-bold border-b border-r border-slate-300">Financial Ledger Component</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Pre-Settlement Claim</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Sanctioned OTS Terms</th>
                      <th className="p-3 font-bold border-b border-slate-300">Waiver / Haircut Savings</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">Outstanding Principal Amount</td>
                      <td className="p-3 border-r border-slate-200">₹3,00,000</td>
                      <td className="p-3 border-r border-slate-200 font-bold text-emerald-700">₹1,35,000</td>
                      <td className="p-3 font-bold text-blue-700">₹1,65,000 (55% Principal Waiver)</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Accrued Penal &amp; Overdue Interest</td>
                      <td className="p-3 border-r border-slate-200">₹36,400</td>
                      <td className="p-3 border-r border-slate-200 font-bold text-emerald-700">₹0</td>
                      <td className="p-3 font-bold text-blue-700">₹36,400 (100% Waived)</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">NACH Bounce &amp; Late Payment Charges</td>
                      <td className="p-3 border-r border-slate-200">₹12,200</td>
                      <td className="p-3 border-r border-slate-200 font-bold text-emerald-700">₹0</td>
                      <td className="p-3 font-bold text-blue-700">₹12,200 (100% Waived)</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="p-3 font-black border-r border-slate-200">Total Settlement Obligation</td>
                      <td className="p-3 font-black border-r border-slate-200 text-rose-700">₹3,48,600</td>
                      <td className="p-3 font-black border-r border-slate-200 text-emerald-700">₹1,35,000</td>
                      <td className="p-3 font-black text-emerald-700">₹2,13,600 Total Benefit (61.3% Total Haircut)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 9: Sanction Audit & ₹0 NDC Issuance */}
            <section id="sanction-audit-no-dues-certificate" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                9. Sanction Letter Forensics, ₹0 NDC Issuance &amp; Credit Bureau Rehabilitation
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Before remitting any funds, SettleLoans advocates conducted an exhaustive forensic audit of the formal One-Time Settlement Sanction Letter issued by Bajaj Finance Limited. The verification verified five vital legal covenants: (1) The letter was generated on authentic corporate letterhead bearing authorized digital signatures and employee authorization codes; (2) The sanctioned figure of ₹1,35,000 was explicitly described as full and final discharge of all liabilities; (3) It contained a categorical clause confirming that upon payment, all pending legal notices, arbitration petitions, or Section 25 PSSA complaints would be immediately withdrawn; (4) It specified direct payment into Vikram&apos;s unique loan account number via official banking gateways; (5) It guaranteed the issuance of a formal No Dues Certificate (NDC) within 30 days.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Vikram remitted the ₹1,35,000 settlement amount directly through NEFT into his Bajaj Finance loan account. Within 21 calendar days, in strict compliance with <em>RBI Circular RBI/2023-24/60 on Release of Property Documents and Loan Closure Certificates</em>, Bajaj Finance issued the official No Dues Certificate confirming zero remaining balance.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Following closure, Bajaj Finance updated its monthly credit data transmission to TransUnion CIBIL, Experian, CRIF High Mark, and Equifax, reflecting the loan status as &apos;Settled&apos; with an outstanding balance of ₹0. To restore Vikram&apos;s credit score back to the 750+ prime tier, SettleLoans established a personalized 18-month credit rehabilitation roadmap utilizing a secured fixed-deposit credit card with automated 25% utilization thresholds.
              </p>
            </section>

            {/* Section 10: Self-Defense vs Legal Shield */}
            <section id="comparative-resolution-matrix" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                10. Strategic Resolution Matrix: Self-Defense vs. SettleLoans Legal Representation
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                When retail borrowers attempt to handle aggressive NBFC recovery tactics without legal representation, they frequently fall victim to verbal intimidation, unauthorized cash payments to field agents, or fraudulent verbal settlement promises that leave debts active on bureau records. The following comparative matrix outlines the stark difference between unrepresented distress and professional legal defense:
              </p>

              {/* 4-Sided Bordered Comparative Matrix Table */}
              <div className="overflow-x-auto my-6">
                <table className="w-full text-left text-xs sm:text-sm border border-slate-300 rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900">
                      <th className="p-3 font-bold border-b border-r border-slate-300">Dispute Dimension</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Self-Management / Unrepresented</th>
                      <th className="p-3 font-bold border-b border-slate-300">SettleLoans Legal Representation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">Workplace &amp; Home Visits</td>
                      <td className="p-3 border-r border-slate-200 text-rose-700">Repeated unannounced visits, office humiliation, family threats</td>
                      <td className="p-3 font-bold text-emerald-700">Immediate containment via statutory Cease-and-Desist notices</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Negotiation Level &amp; Authority</td>
                      <td className="p-3 border-r border-slate-200 text-rose-700">Interacting with commission-driven third-party telecallers</td>
                      <td className="p-3 font-bold text-emerald-700">Direct representation before Senior Credit &amp; Zonal Committees</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">Haircut &amp; Debt Waiver Depth</td>
                      <td className="p-3 border-r border-slate-200 text-rose-700">Minimal 10%–20% waiver with full penal interest retention</td>
                      <td className="p-3 font-bold text-emerald-700">50% to 65% principal haircut with 100% penal interest waiver</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Settlement Verification</td>
                      <td className="p-3 border-r border-slate-200 text-rose-700">Risk of fake WhatsApp/email letters and unallocated payments</td>
                      <td className="p-3 font-bold text-emerald-700">100% verified corporate letterhead sanction with employee code</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Post-Closure Protection</td>
                      <td className="p-3 border-r border-slate-200 text-rose-700">Unresolved legal notices, lingering debt claims, damaged score</td>
                      <td className="p-3 font-bold text-emerald-700">Guaranteed ₹0 NDC delivery and structured CIBIL rehabilitation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 11: SettleLoans Legal Representation & Company Section */}
            <div id="company-resolution-section" className="scroll-mt-24">
              <CompanySection />
            </div>

            {/* Section 12: Frequently Asked Questions */}
            <section id="faqs" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-6 leading-tight flex items-center gap-2.5">
                <ShieldCheck className="w-6 h-6 text-[#1F5EFF]" />
                Frequently Asked Questions: Stopping Bajaj Recovery Harassment
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

            {/* Sources & Regulatory References Strip (5 Official Links) */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-8">
              <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#1F5EFF]" />
                Official Statutory &amp; Regulatory References
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li>
                  <a
                    href="https://www.rbi.org.in/Scripts/BS_CircularIndexDisplay.aspx?Id=12372"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Reserve Bank of India (RBI):</strong> Circular on Recovery Agents Engaged by Regulated Entities (DOR.ORG.REC.65/21.04.158/2022-23)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rbi.org.in/Scripts/BS_CircularIndexDisplay.aspx?Id=12513"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Reserve Bank of India (RBI):</strong> Framework for Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24)
                  </a>
                </li>
                <li>
                  <a
                    href="https://cms.rbi.org.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>RBI Integrated Ombudsman Portal:</strong> Complaint Filing &amp; Redressal for NBFC Recovery Violations
                  </a>
                </li>
                <li>
                  <a
                    href="https://main.sci.gov.in/judgment/judgments.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Supreme Court of India:</strong> ICICI Bank Ltd. v. Prakash Kaur (2007) 2 SCC 711 — Prohibition of Coercive Debt Recovery
                  </a>
                </li>
                <li>
                  <a
                    href="https://nalsa.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>National Legal Services Authority (NALSA):</strong> Pre-Litigation Conciliation &amp; Lok Adalat Settlement Guidelines
                  </a>
                </li>
              </ul>
            </div>

            {/* Related Guides & Resources Strip (10 Topic Badges) */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#1F5EFF]" />
                Explore Related Banking &amp; Debt Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2.5">
                <Link
                  href="/bajaj-finance-personal-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Bajaj Finance Personal Loan Settlement
                </Link>
                <Link
                  href="/recovery-agent-visiting-workplace-office"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Recovery Agent Workplace Visit Rules
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Can I Go to Jail for Loan Default
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Bank One-Time Settlement (OTS) Policy
                </Link>
                <Link
                  href="/what-is-haircut-in-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  What is Haircut in Loan Settlement
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement CIBIL Impact
                </Link>
                <Link
                  href="/personal-loan-settlement-letter-format"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement Letter Format
                </Link>
                <Link
                  href="/section-138-cheque-bounce-loan-default"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Section 138 Cheque Bounce Defense
                </Link>
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Lok Adalat Notice for Personal Loan
                </Link>
                <Link
                  href="/personal-loan-settlement-vs-closure"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Loan Settlement vs Loan Closure
                </Link>
              </div>
            </div>
          </main>

          {/* Right Column: Sidebar Cards */}
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
                    Lead Banking Legal &amp; Debt Settlement Strategist
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Ashish has led over 1,200+ successful debt dispute resolutions and compromise negotiations across Bajaj Finance, HDFC Bank, SBI, and ICICI Bank. He specializes in anti-harassment containment, RBI Master Directions compliance, and NBFC debt haircut negotiations.
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

            {/* Card 2: Emergency Advocate Assistance CTA */}
            <div className="bg-gradient-to-br from-[#1F5EFF] to-blue-700 text-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 text-blue-100 text-xs font-bold uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Harassment Emergency Desk</span>
              </div>
              <h3 className="text-xl font-black mb-3 leading-tight">
                Facing Bajaj Recovery Harassment?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Stop illegal workplace visits and abusive calls today. Our debt defense advocates will serve an immediate statutory cease-and-desist notice and negotiate an official Bajaj Finance settlement.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white hover:bg-slate-100 text-[#1F5EFF] font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 shadow"
              >
                Talk to a Settlement Advocate
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
                    <strong>Instant Anti-Harassment Shield:</strong> Immediate statutory cease-and-desist notices served under RBI Master Directions within hours.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct NBFC Nodal Negotiations:</strong> We bypass third-party collection agents to represent you directly before Bajaj Finance credit committees.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Stamped Sanction Verification:</strong> Complete forensic audit of settlement letters before any payment is remitted.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed ₹0 NDC Delivery:</strong> Rigorous tracking until your formal No Dues Certificate is delivered and bureau records are updated.
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
