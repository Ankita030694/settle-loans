'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';
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
  Calculator,
  Briefcase,
  Layers,
  ArrowUpRight,
  Gavel,
  FileCheck,
  ShieldX,
  UserCheck,
  AlertCircle,
  BadgePercent,
  Smartphone,
  Monitor
} from 'lucide-react';

const tocItems = [
  { id: 'navi-lending-ecosystem-digital-underwriting', title: '1. Navi Lending Architecture & Default Cycles' },
  { id: 'automated-bots-telecalling-nach-bounce-spiral', title: '2. Calling Bots, Harassment & NACH Bounces' },
  { id: 'statutory-notices-section-25-pssa-digital-defense', title: '3. Section 25 PSSA & Digital Summons Defense' },
  { id: 'navi-finserv-npa-accounting-npv-equation', title: '4. NPA Accounting & Net Present Value (NPV)' },
  { id: 'navi-settlement-visual-blueprint', title: '5. Visual Resolution Blueprint' },
  { id: 'step-by-step-advocate-ots-roadmap', title: '6. Step-by-Step Advocate OTS Roadmap' },
  { id: 'sanction-letter-forensics-authenticity', title: '7. Sanction Letter Forensics & Trap Avoidance' },
  { id: 'remittance-rbi-ndc-mandate-cibil-recovery', title: '8. Remittance, RBI ₹0 NDC & Credit Recovery' },
  { id: 'navi-settlement-comparative-matrix', title: '9. Comprehensive Resolution Matrix' },
  { id: 'company-resolution-section', title: '10. SettleLoans Legal Defense & Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

const faqsData = [
  {
    name: "What is the Navi app personal loan settlement process and how does it operate?",
    text: "The Navi app personal loan settlement is a formal, legally recognized compromise resolution executed between a financially distressed borrower and Navi Finserv Limited (the RBI-registered NBFC that finances Navi loans). When an unsecured digital loan defaults past 90 days and enters Non-Performing Asset (NPA) classification, recovery operations shift from front-line tele-callers to the Stressed Asset Resolution Committee. The borrower submits a structured One-Time Settlement (OTS) petition supported by verified insolvency records (such as medical discharge summaries, termination letters, or audited balance sheet losses). Upon formal evaluation, Navi approves a stamped OTS Sanction Letter providing 50% to 65% principal write-downs and complete penalty waivers, followed by a ₹0 No Dues Certificate upon receipt of the compromised sum."
  },
  {
    name: "Is Navi a regulated NBFC or an unauthorized predatory 7-day loan app?",
    text: "Navi is a legitimate, Reserve Bank of India-regulated digital lending institution. All personal loans originated through the Navi application are underwritten, booked, and managed by Navi Finserv Limited (an RBI-registered Systemically Important Non-Deposit Accepting NBFC). Unlike illegal 7-day APK scam apps that blackmail borrowers through unauthorized contact book harvesting, Navi operates under the RBI Digital Lending Directions (2022/2023), reports directly to credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark), offers formal loan terms up to 72 months, and is legally required to adhere to the statutory RBI Fair Practices Code."
  },
  {
    name: "How can borrowers halt repetitive calling bots and recovery agent harassment?",
    text: "Under the RBI Master Directions on Recovery Agents and Conduct and the Digital Lending Framework, Navi and its third-party collection vendors are strictly prohibited from deploying aggressive automated IVR bots, making repetitive phone calls, using intimidating or profane language, calling outside 08:00 AM to 07:00 PM, or contacting third-party references, friends, or employers. Distressed borrowers can immediately stop harassment by serving a formal legal representation through debt advocates, revoking unnecessary device permissions, and escalating violations to Navi Finserv's Principal Nodal Grievance Officer and the RBI Integrated Ombudsman (cms.rbi.org.in)."
  },
  {
    name: "What should you do when Navi NACH auto-debit bounces repeatedly?",
    text: "When an electronic NACH auto-debit instruction fails, both the borrower's depository bank and Navi levy punitive bounce charges ranging from ₹250 to ₹590 per event. Navi's automated collection systems frequently trigger multiple automated re-presentations every month, depleting savings balances. Under Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA), an electronic mandate bounce is treated similarly to a cheque bounce. Borrowers facing severe financial distress can submit a written mandate cancellation or stop-payment instruction directly to their home bank branch citing financial hardship, halting repetitive bounce deductions while legal counsel initiates OTS negotiations."
  },
  {
    name: "Can Navi file a criminal FIR or send police officers to your residence for personal loan default?",
    text: "No. Under established Indian jurisprudence, the inability to repay an unsecured retail digital loan constitutes a civil breach of contract, not a criminal offence. Police officers possess zero legal authority to act as debt collection enforcers for private fintech apps or NBFCs. Recovery agents who send forged police summons, fake arrest warrants, or fraudulent court notices on WhatsApp are engaging in criminal extortion and forgery under the Bharatiya Nyaya Sanhita (BNS) and the Information Technology Act, 2000."
  },
  {
    name: "What percentage of debt waiver or haircut can you realistically negotiate on a defaulted Navi loan?",
    text: "On unsecured digital personal loans disbursed by Navi Finserv that have aged past 90 to 180+ days into Substandard or Doubtful NPA categories, borrowers with verified economic distress can negotiate a 50% to 65% principal haircut. In addition, 100% of accumulated penal interest, late payment fines, compounding overdue charges, and NACH bounce fees are waived entirely under standard RBI compromise settlement protocols."
  },
  {
    name: "How should you respond to a Section 25 PSSA legal notice from Navi Finserv advocates?",
    text: "When Navi Finserv's empanelled advocates serve a statutory demand notice under Section 25 of the Payment and Settlement Systems Act, 2007, you must never disregard it. Borrowers have a mandatory 15-day statutory window to respond. A formal legal reply drafted by experienced debt defense advocates must be served, establishing bona fide financial catastrophe, challenging unlawful penalty compounding, demonstrating lack of mens rea (criminal intent), and formally inviting the lender to resolve the dispute through an amicable One-Time Settlement."
  },
  {
    name: "Can Navi Finserv freeze or debit funds from your savings account in other banks?",
    text: "No. While Section 171 of the Indian Contract Act, 1872 gives deposit-taking banks a Right of General Banker's Lien over accounts within the same institution, Navi Finserv is a non-deposit-taking NBFC. It has zero legal authority to freeze, set off, or attach balances in accounts maintained with independent commercial banks (such as State Bank of India, HDFC Bank, ICICI Bank, or Punjab National Bank) without first obtaining a formal execution decree and attachment warrant from a competent Civil Court."
  },
  {
    name: "What is the statutory timeline for Navi Finserv to issue a No Dues Certificate under RBI rules?",
    text: "Under Reserve Bank of India Circular RBI/2023-24/60, Navi Finserv Limited is legally obligated to release all loan closure documents, issue an official stamped No Dues Certificate (NDC), and update credit bureau records across CIBIL, Experian, Equifax, and CRIF High Mark within 30 calendar days of receiving full settlement payment. If the lender delays issuing the NDC beyond 30 days without valid justification, it must pay mandatory statutory compensation of ₹5,000 per day of delay directly to the borrower."
  },
  {
    name: "How does a Navi app loan settlement impact your CIBIL score and how can you rebuild it?",
    text: "Upon completion of the settlement, Navi reports the loan account status as 'Settled' or 'Post-Write-off Settled' with an outstanding balance of ₹0. While this entry leads to an immediate credit score contraction of 75 to 130 points and initiates a 12 to 24 month institutional cooling period, it permanently stops compounding default remarks. Borrowers can successfully rebuild their credit score back above 750 within 18 to 24 months by maintaining disciplined repayment on secured fixed-deposit credit cards and small consumer lines."
  }
];

export default function NaviAppLoanSettlementClient() {
  const [activeId, setActiveId] = useState<string>('navi-lending-ecosystem-digital-underwriting');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      let currentActive = tocItems[0].id;

      for (let i = 0; i < tocItems.length; i++) {
        const el = document.getElementById(tocItems[i].id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= top) {
            currentActive = tocItems[i].id;
          }
        }
      }
      setActiveId(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial evaluation
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-[#1F5EFF] selection:text-white"
      style={{ fontFamily: 'var(--font-satoshi), Satoshi, -apple-system, BlinkMacSystemFont, sans-serif' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
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
      `}} />

      {/* 1. Charcoal Navy Hero Section */}
      <section
        className="w-full border-b border-slate-700/80 pt-8 pb-7 md:pt-12 md:pb-9 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-emerald-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Fintech &amp; Digital Lending Resolution • Navi Finserv</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            Navi App Personal Loan Settlement: <span className="text-[#3b82f6] md:text-[#60a5fa]">OTS Process, NACH Bounce Defense &amp; 50-65% Haircut</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Defaulted on an instant unsecured personal loan from the Navi app up to ₹20 Lakhs? Learn how digital NBFC recovery algorithms operate, how to halt relentless tele-calling bots and repetitive NACH bounce penalties, handle Section 25 PSSA legal notices, and secure a formal 50%–65% OTS haircut with an authentic ₹0 No Dues Certificate.
          </p>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-3 mb-5 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Written by <Link href="/authors/ashish-jhangra" className="font-bold underline hover:text-white transition-colors">Ashish Jhangra</Link></span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Updated: August 2026</span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>RBI Digital Lending &amp; Fair Practices Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Negotiate Navi Loan Settlement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Get Free Legal Case Evaluation
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip Component */}
      <StatsStrip />

      {/* 3. 3-Column Grid Container */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column: Sticky Table of Contents + Executive Crux */}
          <aside className="w-full lg:sticky lg:top-24 space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-sm">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-200 text-slate-900 font-bold text-sm">
                <BookOpen className="w-4 h-4 text-[#1F5EFF]" />
                <span>Table of Contents</span>
              </div>
              <nav className="space-y-1 text-xs">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug ${
                      activeId === item.id
                        ? 'bg-[#1F5EFF] text-white font-bold shadow-sm'
                        : 'text-slate-600 hover:bg-slate-200/60 hover:text-slate-900'
                    }`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick Executive Case Crux Box */}
            <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>Navi Settlement Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Navi operates 100% digital unsecured lending up to ₹20 Lakhs via Navi Finserv Limited. Automated recovery bots and aggressive NACH bounce cycles can be halted legally under RBI Digital Lending rules, unlocking 50%–65% principal haircuts through advocate-led OTS negotiations.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Navi App Loan Resolution</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Regulated NBFC Framework:</strong> Navi personal loans are funded by Navi Finserv Limited (an RBI-registered NBFC-ND-SI), making them legally distinct from illegal 7-day APK scam apps and strictly bound by RBI Fair Practices Codes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>100% Unsecured Exposure:</strong> Navi loans up to ₹20 Lakhs are completely unsecured with no physical collateral or asset mortgage, restricting the lender&apos;s legal recovery remedies to civil court proceedings and Lok Adalat conciliation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Halting NACH Bounce Penalties:</strong> Repetitive automated mandate presentations can be stopped by serving written stop-payment and revocation notices under RBI NACH Procedural Guidelines to prevent compounding bank charges.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 25 PSSA Defense:</strong> Statutory digital notices for failed auto-debits require a formal advocate-drafted 15-day response establishing financial hardship and absence of fraudulent intent to prevent magistrate court escalation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Substantial OTS Haircuts:</strong> Escalating stressed files to Navi Finserv&apos;s Credit Committee unlocks 50% to 65% principal write-downs, complete penalty waivers, and a statutory ₹0 No Dues Certificate under RBI Circular RBI/2023-24/60.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Navi Lending Ecosystem, Digital Underwriting & Default Cycles */}
            <section id="navi-lending-ecosystem-digital-underwriting" className="scroll-mt-24 md:scroll-mt-28 space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. Navi Lending Architecture, 100% Digital Underwriting &amp; Default Delinquency Cycles
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Navi Technologies Limited, founded by Sachin Bansal, has fundamentally transformed Indian retail credit by deploying high-velocity, fully algorithmic digital lending architecture. Operating through its primary lending subsidiary, <strong>Navi Finserv Limited</strong> (a Systemically Important Non-Deposit Taking Non-Banking Financial Company registered with the Reserve Bank of India), the platform disburses unsecured instant personal loans ranging from ₹10,000 up to ₹20 Lakhs with repayment tenures spanning 3 to 72 months. Unlike legacy commercial banks that require extensive physical documentation, wet-ink signatures, and branch verification, Navi utilizes automated digital underwriting engines that evaluate bank account aggregators, device telemetry, PAN-linked credit bureau algorithms, and cash flow predictability within minutes.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                While this friction-free onboarding enables lightning-fast disbursals, it also creates severe vulnerability for retail borrowers when unanticipated financial distress occurs. When a borrower suffers sudden employment termination, micro-enterprise collapse, medical emergency, or family financial crisis, Navi&apos;s automated repayment mechanism shifts from automated collection to aggressive delinquency pipelines. Under RBI prudential classification guidelines, a defaulted Navi personal loan transitions through four precise delinquency stages:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
                <li><strong>Special Mention Account 0 (SMA-0):</strong> Principal or interest installment overdue for 1 to 30 calendar days. Navi&apos;s automated algorithms deploy continuous SMS reminders, in-app push notifications, and automated IVR telephone queues reminding the borrower of pending EMIs and credit score implications.</li>
                <li><strong>Special Mention Account 1 (SMA-1):</strong> Overdue duration spanning 31 to 60 calendar days. Delinquency workflows escalate to external third-party tele-calling agencies. Digital recovery agents initiate repetitive calling schedules demanding immediate regularisation.</li>
                <li><strong>Special Mention Account 2 (SMA-2):</strong> Overdue duration spanning 61 to 90 calendar days. The account is flagged as high-risk distressed credit. Navi accelerates electronic NACH debit attempts, issues formal pre-litigation warning notices via email and WhatsApp, and assigns field collection agents.</li>
                <li><strong>Non-Performing Asset (NPA) Classification:</strong> Delinquency exceeding 90 consecutive calendar days. Under the <em>RBI Master Direction – Prudential Norms on Income Recognition, Asset Classification and Provisioning</em>, Navi Finserv is statutorily mandated to classify the loan as a Substandard NPA, freeze income recognition, and allocate mandatory loss provisioning on its balance sheet.</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Distressed borrowers must understand a critical legal reality: because Navi personal loans are 100% unsecured—meaning no gold, property, fixed deposit, or vehicle is pledged as collateral—Navi Finserv possesses zero legal authority to summarily attach or seize your personal assets without an exhaustive civil court trial. This legal reality creates powerful leverage for a negotiated compromise settlement once the account reaches NPA status.
              </p>
            </section>

            {/* Section 2: Calling Bots, Harassment & NACH Bounces */}
            <section id="automated-bots-telecalling-nach-bounce-spiral" className="scroll-mt-24 md:scroll-mt-28 space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Automated Calling Bots, Recovery Tele-calling Harassment &amp; The NACH Bounce Penalty Spiral
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The most acute crisis faced by borrowers defaulting on a Navi app loan is the relentless bombardment of automated collection systems. Navi&apos;s tech-heavy recovery framework utilizes automated Interactive Voice Response (IVR) dialers that can trigger dozens of automated calls per day from rotating virtual numbers. Concurrently, outsourced collection agencies frequently deploy aggressive tele-callers who cross statutory boundaries by calling outside permitted hours, contacting references whose details were extracted during initial app permission granting, and making unlawful threats of police action or workplace visits.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Simultaneously, borrowers are trapped in a debilitating financial spiral known as the <strong>NACH Bounce Penalty Cascade</strong>. When availing a loan on the Navi app, borrowers authorize an electronic National Automated Clearing House (e-NACH) mandate. When funds are insufficient on the EMI due date, the mandate bounces, triggering dual financial penalties:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-red-200 bg-red-50/50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-red-950 text-xs sm:text-sm">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span>Dual NACH Bounce Penalty Exposure</span>
                  </div>
                  <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4">
                    <li><strong>Home Bank Penalty:</strong> Your savings bank debits ₹295 to ₹590 per failed NACH mandate presentation as an unpaid return fee.</li>
                    <li><strong>Navi Late Fee &amp; Penal Charge:</strong> Navi Finserv adds ₹250 to ₹500 plus 24% to 36% annualized penal interest on overdue balances.</li>
                    <li><strong>Repetitive Presentations:</strong> Automated systems re-present the mandate 2 to 4 times a month, wiping out small incoming credits.</li>
                    <li><strong>Legal Liability:</strong> Each failed NACH instruction generates technical grounds under Section 25 of the PSSA, 2007.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-emerald-950 text-xs sm:text-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Statutory Protections &amp; Legal Remedies</span>
                  </div>
                  <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4">
                    <li><strong>RBI Fair Practices Code:</strong> Agents cannot call before 08:00 AM or after 07:00 PM, nor contact workplace colleagues.</li>
                    <li><strong>Mandate Revocation Right:</strong> Borrowers can submit a written stop-payment or NACH revocation letter to their bank.</li>
                    <li><strong>RBI Digital Lending Directives:</strong> Lenders cannot harass family members or use unauthorized contact scraping.</li>
                    <li><strong>Integrated Ombudsman Escalation:</strong> Violations can be reported directly to cms.rbi.org.in with call logs and recordings.</li>
                  </ul>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To break this punitive cycle, distressed borrowers should not borrow from other high-cost predatory apps to service bounce charges. Instead, formal legal representation should be engaged to issue a formal representation to Navi Finserv, revoke the electronic debit mandate through official banking channels, and transition the conversation into structured One-Time Settlement negotiations.
              </p>
            </section>

            {/* Section 3: Section 25 PSSA & Digital Summons Defense */}
            <section id="statutory-notices-section-25-pssa-digital-defense" className="scroll-mt-24 md:scroll-mt-28 space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Statutory Legal Notices, Section 25 PSSA, Section 138 NI Act &amp; Digital Summons Defense
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                As a loan default crosses 60 to 90 days, Navi Finserv&apos;s legal panel issues formal statutory demand notices. In modern digital lending, these notices are dispatched via registered speed post, email, and automated WhatsApp delivery. Borrowers frequently receive notices invoking <strong>Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA)</strong>, <strong>Section 138 of the Negotiable Instruments Act, 1881</strong> (if repayment cheques were collected), and <strong>Section 430/406 of the Indian Contract Act and Bharatiya Nyaya Sanhita (BNS)</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Distressed borrowers must distinguish between authentic statutory legal notices and fraudulent intimidation tactics deployed by rogue recovery tele-callers:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-4 space-y-3">
                <h4 className="font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-2">
                  <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Crucial Distinctions: Genuine Statutory Notice vs. Fake Agent Threat</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-lg border border-slate-200">
                    <p className="font-bold text-emerald-800 mb-1">Authentic Section 25 PSSA Notice:</p>
                    <p className="leading-relaxed">Issued on the letterhead of an enrolled Advocate representing Navi Finserv Limited. Contains specific loan account numbers, exact transaction dates of the bounced NACH mandate, demands payment within 15 statutory days, and provides verifiable contact and bar council enrollment details.</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-slate-200">
                    <p className="font-bold text-red-800 mb-1">Fake Recovery Agent WhatsApp Threat:</p>
                    <p className="leading-relaxed">Sent from unverified personal mobile numbers containing dramatic headers like &quot;POLICE SUMMONS,&quot; &quot;ARREST WARRANT WITHIN 2 HOURS,&quot; &quot;CBI CYBER ATTACHMENT,&quot; or demands to transfer money to personal UPI handles. Forging law enforcement insignia is a severe non-bailable criminal offense.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an authentic Section 25 PSSA notice is received, <strong>never ignore it</strong>. The 15-day statutory response window is your most critical legal defense window. An experienced debt settlement advocate must draft a comprehensive legal reply that: (1) Formally establishes bona fide financial catastrophe resulting in involuntary default; (2) Disproves any fraudulent intent or mens rea; (3) Challenges unlawful penal interest capitalization; and (4) Formally offers to resolve the entire account through an amicable, pre-litigation One-Time Settlement. Serving this reply on record legally disarms magistrate court proceedings and compels Navi&apos;s Stressed Asset Desks to table realistic settlement terms.
              </p>
            </section>

            {/* Section 4: NPA Accounting & Net Present Value (NPV) */}
            <section id="navi-finserv-npa-accounting-npv-equation" className="scroll-mt-24 md:scroll-mt-28 space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Navi Finserv NPA Accounting, Risk Weighting &amp; The Net Present Value (NPV) Equation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To negotiate maximum debt waivers with Navi Finserv, one must understand how a fintech NBFC views distressed credit from a balance-sheet and regulatory perspective. As a Systemically Important NBFC, Navi Finserv is subject to stringent RBI Capital Adequacy Ratio (CAR) requirements and provisioning mandates. When an unsecured personal loan becomes an NPA at 90 days past due, Navi cannot recognize accrued interest as income and must set aside substantial capital provisions from its operating profits:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
                <li><strong>Substandard NPA (91 to 365 Days Overdue):</strong> Mandates a 10% to 20% general provisioning allocation against the entire outstanding loan book value.</li>
                <li><strong>Doubtful NPA 1 (1 to 2 Years Overdue):</strong> 100% of the unsecured portion must be fully provisioned, directly diminishing the NBFC&apos;s net net-worth and profitability.</li>
                <li><strong>Loss Asset Classification:</strong> The asset is considered entirely uncollectible, requiring 100% write-off on balance sheets.</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Furthermore, pursuing litigated civil recovery for unsecured retail loans in Indian courts is economically unfeasible for fintech lenders. Initiating individual Summary Suits under Order 37 of the Civil Procedure Code (CPC) or arbitration proceedings costs Navi ₹30,000 to ₹75,000 in advocate fees, court stamp duties, and process server expenses, while taking 3 to 7 years to obtain an execution decree against an insolvent borrower.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Consequently, Navi Finserv&apos;s Credit Committee evaluates compromise settlement proposals against the mathematical <strong>Net Present Value (NPV) Recovery Formula</strong>:
              </p>

              {/* NPV Math Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Fintech Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents projected net cash flows recovered across time periods t, r is Navi Finserv&apos;s cost of capital discount rate, and deductions account for legal court expenditures, recovery agent commissions (15%–25%), and statutory balance-sheet provisioning lock-in.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When experienced debt settlement advocates demonstrate that litigating will yield a negative NPV due to documented borrower insolvency, Navi Finserv&apos;s Stressed Asset Committee finds it economically superior to accept an immediate 35% to 50% cash recovery via One-Time Settlement, release 100% of the locked provisioning back into their capital reserves, and permanently close the distressed asset file.
              </p>
            </section>

            {/* Section 5: Visual Resolution Blueprint (Infographic Banner) */}
            <section id="navi-settlement-visual-blueprint" className="scroll-mt-24 md:scroll-mt-28 space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Visual Resolution Blueprint: Navi App Personal Loan Settlement Lifecycle
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The comprehensive visual roadmap below details the strategic progression of a defaulted Navi personal loan—from initial automated tele-calling pressure and NACH bounce escalation to advocate-led hardship negotiation, formal credit committee sanction, and final zero-balance credit bureau rehabilitation:
              </p>

              {/* Infographic Banner Box */}
              <div className="my-6 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-50">
                <div className="relative w-full aspect-video">
                  <Image
                    src="/images/infographics/navi-app-loan-settlement.jpg"
                    alt="Navi App Personal Loan Settlement Process, NACH Bounce Defense, and OTS Haircut Blueprint"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-4 bg-white border-t border-slate-200 text-xs text-slate-600 leading-relaxed flex items-start gap-2">
                  <Info className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Figure 1.0:</strong> Strategic architectural workflow for settling defaulted Navi app personal loans under RBI digital lending guidelines and NBFC compromise settlement frameworks.
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By understanding this multi-stage lifecycle, borrowers can avoid panic-driven mistakes—such as making partial token payments to third-party tele-callers without sanction letters—and systematically execute a legally protected compromise settlement that delivers a full and final discharge.
              </p>
            </section>

            {/* Section 6: Step-by-Step Advocate OTS Roadmap */}
            <section id="step-by-step-advocate-ots-roadmap" className="scroll-mt-24 md:scroll-mt-28 space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Step-by-Step Strategic Roadmap: How Advocates Negotiate Navi Loan Settlements
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Securing a 50% to 65% principal haircut from Navi Finserv requires a disciplined, legally rigorous methodology. SettleLoans executes a proven 5-phase strategic framework designed to disarm automated recovery systems and engage directly with authorized decision-makers:
              </p>

              <div className="space-y-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs">1</span>
                    <span>Phase 1: Legal Shield &amp; Cease-and-Desist Deployment</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                    Advocates serve a formal Representation and Cease-and-Desist Notice to Navi Finserv Limited and its empanelled recovery agencies. The notice asserts borrower representation, invokes the RBI Fair Practices Code, mandates that all future communication occur strictly via authorized legal counsel in writing, and warns against unlawful third-party reference calling.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs">2</span>
                    <span>Phase 2: Insolvent Financial Hardship Dossier Compilation</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                    A comprehensive insolvency dossier is compiled, including medical records, termination notices, income reduction certificates, GST cancellation records, and bank statements. This evidence proves that default is caused by bona fide economic catastrophe rather than wilful evasion, which is mandatory under RBI Compromise Settlement Directives.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs">3</span>
                    <span>Phase 3: Escalation to Stressed Asset &amp; Nodal Committees</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                    Legal advocates bypass low-level tele-calling queues and digital chatbot portals to submit a formal One-Time Settlement Petition directly to Navi Finserv&apos;s Zonal Stressed Assets Manager and Principal Nodal Officer, proposing a structured 35% to 50% principal compromise payment.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs">4</span>
                    <span>Phase 4: Credit Committee Valuation &amp; Haircut Bargaining</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                    Using the NPV recovery equation, advocates negotiate aggressively with Navi&apos;s Credit Committee, eliminating 100% of accumulated late fines, penal interest, and NACH bounce fees, while securing a 50% to 65% principal haircut structured in 1 to 3 manageable tranches.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs">5</span>
                    <span>Phase 5: Sanction Verification, Direct Remittance &amp; ₹0 NDC Issuance</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                    Advocates conduct forensic verification of the stamped OTS Sanction Letter issued by Navi Finserv Limited. The compromised amount is deposited directly into the borrower&apos;s official Navi loan account via RTGS/NEFT. SettleLoans monitors post-settlement compliance until the zero-balance No Dues Certificate is delivered.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: Sanction Letter Forensics & Authenticity Verification */}
            <section id="sanction-letter-forensics-authenticity" className="scroll-mt-24 md:scroll-mt-28 space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Navi OTS Sanction Letter Forensics &amp; Settlement Trap Avoidance
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The most dangerous hazard in digital loan settlement is paying funds based on verbal tele-caller promises or forged PDF receipts. Unscrupulous collection agents frequently tell borrowers: <em>&quot;Deposit ₹25,000 today on this UPI link and your Navi loan will be closed.&quot;</em> In reality, such verbal deposits are booked as regular overdue part-payments, leaving the remaining principal active while the agent collects their recovery commission.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before remitting a single rupee, verify that your settlement letter satisfies all five mandatory forensic criteria:
              </p>

              <div className="space-y-3 my-4">
                <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-white">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong>Official Navi Finserv Limited Corporate Letterhead:</strong> The document must be printed on official corporate stationery containing Navi Finserv Limited&apos;s Registered Office address (Bengaluru, Karnataka), Corporate Identification Number (CIN), and RBI NBFC Registration details.
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-white">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong>Precise Borrower Identification &amp; Loan Details:</strong> Must explicitly state your full legal name, registered mobile number, PAN number, and the exact 16-digit Navi Loan Account Number.
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-white">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong>Explicit Debt Extinguishment Clause:</strong> Must contain unambiguous contractual language stating that remittance of the agreed settlement sum constitutes <em>&quot;full, complete, and final discharge of all present and future liabilities&quot;</em> with zero residual claims.
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-white">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong>Direct Bank Account Remittance Instructions:</strong> Payment must be directed strictly to Navi Finserv Limited&apos;s official virtual collection account or deposited via the verified Navi app gateway. Never transfer funds to personal bank accounts or third-party UPI handles.
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-white">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong>Authorized Signatory Seal &amp; Employee Code:</strong> The sanction letter must carry the digital or physical signature, employee designation, employee identification code, and official stamp of an authorized Navi Finserv Officer.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Remittance, RBI ₹0 NDC Mandate & CIBIL Recovery */}
            <section id="remittance-rbi-ndc-mandate-cibil-recovery" className="scroll-mt-24 md:scroll-mt-28 space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Loan Remittance, RBI ₹0 No Dues Certificate Mandate &amp; CIBIL Credit Score Repair
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once the agreed compromise sum is transferred directly into your Navi loan account, the final legal phase begins: securing your <strong>No Dues Certificate (NDC) / Loan Closure Letter</strong> and managing your credit bureau profile. Under <strong>Reserve Bank of India Circular RBI/2023-24/60</strong> (<em>Release of Movable/Immovable Property Documents &amp; Loan Account Closure</em>), regulated NBFCs like Navi Finserv Limited are statutorily mandated to issue the formal closure letter and update all four Credit Information Companies (TransUnion CIBIL, Experian, Equifax, and CRIF High Mark) within <strong>30 calendar days</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If Navi Finserv fails to deliver the NDC within 30 days without valid statutory justification, the RBI framework entitles the borrower to mandatory compensation of <strong>₹5,000 per day of delay</strong>, directly payable by the lender.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Following loan settlement, Navi reports the account to CIBIL with the remark <strong>&quot;Settled&quot;</strong> or <strong>&quot;Post-Write-off Settled&quot;</strong> with an Outstanding Balance of <strong>₹0</strong>. While this entry reflects an agreed compromise and triggers a temporary credit score drop of 75 to 130 points, it halts negative compounding overdue reporting and eliminates active legal liability. Distressed borrowers can systematically rebuild their CIBIL score above 750 within 18 to 24 months through a disciplined 4-step credit rehabilitation protocol:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4 text-xs sm:text-sm">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Lock className="w-4 h-4 text-[#1F5EFF]" />
                    <span>1. Secured Credit Card Acquisition</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Open a fixed-deposit backed credit card (e.g., IDFC WOW, Kotak 811 DreamDifferent) with a ₹25,000–₹50,000 deposit. Use 15% to 25% of the limit and settle 100% of the bill on time every month.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>2. Credit Bureau Verification</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Pull official CIBIL and Experian reports 45 days post-settlement to confirm the Navi loan outstanding balance reflects precisely ₹0 with zero active days-past-due (DPD) accumulation.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-indigo-600" />
                    <span>3. Credit Utilization Control</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Maintain an aggregate Credit Utilization Ratio (CUR) below 30% across all active credit lines, demonstrating responsible leverage and cash flow discipline to bureau algorithms.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-amber-600" />
                    <span>4. 24-Month Credit Hygiene</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Avoid applying for multiple unsecured digital loan apps during the 12-month cooling period, establishing an unblemished 24-month repayment record that elevates your score above 750+.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: Comprehensive Resolution Matrix Table */}
            <section id="navi-settlement-comparative-matrix" className="scroll-mt-24 md:scroll-mt-28 space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Comparative Resolution Matrix: DIY App Settlement vs. Ignoring Default vs. Legal Advocate OTS
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Distressed borrowers facing default on Navi app personal loans generally consider three paths. The comparative matrix below outlines the legal exposure, financial outcome, and credit implications of each approach:
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th>Resolution Parameter</th>
                      <th>Ignoring Default / Tele-callers</th>
                      <th>DIY In-App Settlement</th>
                      <th>Advocate-Led OTS Negotiation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold">Principal Debt Haircut</td>
                      <td>0% (Debt continues compounding)</td>
                      <td>10% – 25% (Minimal discount)</td>
                      <td className="font-bold text-emerald-700">50% – 65% Principal Write-down</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Penal &amp; NACH Fee Waiver</td>
                      <td>None (Daily compounding penalties)</td>
                      <td>Partial waiver of late charges</td>
                      <td className="font-bold text-emerald-700">100% Complete Waiver of Penalties</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Harassment &amp; Calling Shield</td>
                      <td>Severe (40+ bot calls/day &amp; field visits)</td>
                      <td>Ongoing until final payment</td>
                      <td className="font-bold text-emerald-700">Immediate Cease-and-Desist Protection</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Section 25 PSSA Defense</td>
                      <td>High risk of magistrate court summons</td>
                      <td>No formal legal defense filed</td>
                      <td className="font-bold text-emerald-700">Formal 15-Day Advocate Reply Filed</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Payment Structure</td>
                      <td>Full balance demanded immediately</td>
                      <td>Rigid 24–48 hour deadline</td>
                      <td className="font-bold text-emerald-700">Structured 1 to 3 Tranche Milestones</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Sanction Letter &amp; ₹0 NDC</td>
                      <td>None</td>
                      <td>Automated app receipt only</td>
                      <td className="font-bold text-emerald-700">Stamped Navi Finserv Letter &amp; RBI NDC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="scroll-mt-24 md:scroll-mt-28 space-y-6">
              <div className="space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans: India&apos;s Leading Legal Defense &amp; Debt Settlement Advisory
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Navigating an institutional dispute against a tech-driven digital lender like Navi Finserv requires seasoned legal advocates who understand both digital lending regulations and RBI compromise settlement frameworks. SettleLoans provides comprehensive legal defense for distressed borrowers across India—stopping unlawful collection bot harassment, drafting formal replies to Section 25 PSSA summons, and negotiating directly with Navi Finserv&apos;s Stressed Asset Desks to achieve the deepest possible debt haircuts backed by authentic, bank-stamped No Dues Certificates.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="scroll-mt-24 md:scroll-mt-28 space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  11. Frequently Asked Questions: Navi App Loan Settlement
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Clear, legally verified answers to essential questions regarding Navi app personal loan default, NACH bounce penalties, recovery agent harassment rules, and credit score rehabilitation.
              </p>

              <div className="space-y-3">
                {faqsData.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all"
                  >
                    <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                      <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {faq.name}
                      </span>
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </summary>
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                      <p>{faq.text}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* 5 Official Regulatory Links */}
            <section className="border-t border-slate-200 pt-8 mb-4">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">
                Official Statutory &amp; Regulatory References
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Directions on Digital Lending (2022/2023)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (cms.rbi.org.in)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">National Legal Services Authority (Lok Adalat Pre-Litigation)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Payment &amp; Settlement Systems Act (Section 25 PSSA)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://legislative.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">RBI Circular RBI/2023-24/60: 30-Day Mandatory No Dues Certificate Delivery</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Loan Settlement &amp; Legal Defense Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/instant-app-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Instant App Loan Settlement
                </Link>
                <Link
                  href="/bajaj-finance-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bajaj Finance Loan Settlement
                </Link>
                <Link
                  href="/idfc-first-bank-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  IDFC First Bank Settlement
                </Link>
                <Link
                  href="/axis-bank-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Axis Bank Loan Settlement
                </Link>
                <Link
                  href="/hdfc-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  HDFC Personal Loan Settlement
                </Link>
                <Link
                  href="/10-lakh-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  10 Lakh Personal Loan Settlement
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Guide
                </Link>
                <Link
                  href="/can-bank-seize-property-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Property Seizure Protections
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Loan Default &amp; Jail Myths
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate Guide
                </Link>
              </div>
            </section>

          </main>

          {/* Right Column: Author Bio, Emergency Advocate CTA, Trust Signals */}
          <aside className="w-full lg:sticky lg:top-24 space-y-6">
            
            {/* Author Bio Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Link
                  href="/authors/ashish-jhangra"
                  className="w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-lg hover:opacity-90 transition-opacity"
                >
                  AJ
                </Link>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    <Link
                      href="/authors/ashish-jhangra"
                      className="hover:text-[#1F5EFF] transition-colors"
                    >
                      Ashish Jhangra
                    </Link>
                  </h4>
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Specialist in RBI compromise settlement frameworks, fintech debt resolution, NPA provisioning forensics, and banking dispute litigation with over a decade of financial advisory experience.
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                <Link
                  href="/authors/ashish-jhangra"
                  className="text-[#1F5EFF] font-bold hover:underline flex items-center gap-1"
                >
                  <span>View Author Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <div className="flex items-center gap-1 text-slate-500">
                  <span>Verified</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Immediate Legal Defense</span>
              </div>
              <h4 className="font-bold text-base text-white mb-2">Facing Navi App Recovery Pressure?</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Stop relentless automated calling bots, halt NACH bounce fees, reply to Section 25 PSSA notices, and negotiate a formal 50%–65% debt waiver directly with Navi Finserv Stressed Asset Desks.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Advocate Consultation
              </Link>
            </div>

            {/* Trust Signals Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Institutional Protections
              </h4>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>100% RBI Fair Practices Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Privileged Advocate Representation</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Verified NBFC Letterhead Sanctions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Pre-Litigation Conciliation</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
