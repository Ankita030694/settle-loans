'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import StatsStrip from '@/components/StatsStrip';
import CompanySection from '@/components/CompanySection';
import {
  ShieldCheck,
  TrendingUp,
  Clock,
  ArrowRight,
  ChevronDown,
  Calendar,
  PhoneCall,
  ExternalLink,
  Building2,
  Landmark,
  Check,
  BookOpen,
  ShieldAlert,
  HelpCircle,
  Calculator,
  Layers,
  Gavel,
  FileCheck,
  UserCheck,
  AlertCircle,
  Award,
  CheckCircle2,
  Smartphone,
  Scale,
} from 'lucide-react';

const tocItems = [
  { id: 'understanding-kreditbee-lending', title: '1. App Ecosystem & Krazybee NBFC Setup' },
  { id: 'kreditbee-delinquency-timeline-npa', title: '2. Delinquency Timeline & NPA Progression' },
  { id: 'stopping-kreditbee-harassment-nach', title: '3. Stopping Harassment Bots & NACH Bounces' },
  { id: 'kreditbee-ots-haircut-policy-npv', title: '4. OTS Haircut Policies & NPV Valuation' },
  { id: 'infographic-resolution-blueprint', title: '5. Visual Resolution Blueprint' },
  { id: 'rbi-fair-practices-anti-harassment', title: '6. Statutory Borrower Protections & RBI Rules' },
  { id: 'step-by-step-kreditbee-settlement', title: '7. Step-by-Step KreditBee Settlement Roadmap' },
  { id: 'section-25-pssa-lok-adalat-defense', title: '8. Section 25 PSSA, NI Act & Lok Adalat' },
  { id: 'sanction-letter-audit-ndc-verification', title: '9. Sanction Letter Forensics & ₹0 NDC Mandate' },
  { id: 'cibil-impact-credit-rehabilitation', title: '10. CIBIL Score Impact & 18-Month Recovery' },
  { id: 'company-resolution-section', title: '11. SettleLoans Legal Defense & Representation' },
  { id: 'faqs', title: '12. Frequently Asked Questions' },
];

const faqs = [
  {
    question: "What is the KreditBee loan settlement process and how does an app loan OTS work?",
    answer: "The KreditBee loan settlement process is a legally binding compromise resolution executed between a distressed borrower and Krazybee Services Private Limited (or its registered co-lending NBFC/bank partners like InCred, Vivriti, or Northern Arc). When an unsecured digital personal loan crosses 90 days of continuous delinquency (entering Non-Performing Asset or NPA classification), automated tele-calling algorithms give way to the Stressed Assets Division. The borrower submits a verified hardship petition evidencing involuntary insolvency (job loss, business closure, or severe illness). Upon review of recovery Net Present Value (NPV), Krazybee issues a formal stamped One-Time Settlement (OTS) sanction letter granting a 40% to 65% principal haircut and 100% waiver of accrued penal interest and bounce fees, concluding with a ₹0 No Dues Certificate."
  },
  {
    question: "Is KreditBee a legitimate RBI-registered entity or an illegal Chinese 7-day loan app?",
    answer: "KreditBee is a fully legitimate, Reserve Bank of India-regulated digital lending platform operated by Finnov Private Limited. All loans disbursed through the KreditBee app are underwritten and funded by Krazybee Services Private Limited—a Systemically Important Non-Deposit Taking Non-Banking Financial Company (NBFC-ND-SI) registered with the RBI—alongside institutional co-lending partners like InCred, Vivriti Capital, Northern Arc, and MAS Financial. Unlike illegal 7-day APK scam apps, KreditBee is strictly bound by RBI Digital Lending Directions, the RBI Fair Practices Code, and statutory credit bureau reporting to CIBIL and Experian."
  },
  {
    question: "How can borrowers stop continuous automated IVR calls, WhatsApp threats, and reference harassment from KreditBee?",
    answer: "Under the RBI Master Directions on Recovery Agents (2022) and the Digital Lending Guidelines, KreditBee and its outsourced recovery agencies are prohibited from contacting individuals not named as co-borrowers, scraping contact lists, sending abusive WhatsApp threats, or placing calls outside the 08:00 AM to 07:00 PM statutory window. Borrowers can stop unlawful harassment by issuing a formal legal cease-and-desist notice to Krazybee's Principal Nodal Officer, revoking smartphone app data permissions, and escalating documented violations to the RBI Integrated Ombudsman portal at cms.rbi.org.in."
  },
  {
    question: "How do you stop recurring KreditBee NACH auto-debit bounce fees and bank return penalties?",
    answer: "When a digital loan defaults, KreditBee's automated clearing systems frequently represent the electronic NACH mandate multiple times per billing cycle, causing destination banks to debit ₹250 to ₹590 in return charges each time. Borrowers can stop this financial drain by submitting a written mandate cancellation request to their home bank under NPCI e-Mandate circulars, while simultaneously serving a written notice to Krazybee Services requesting an immediate suspension of electronic presentation pending OTS restructuring."
  },
  {
    question: "Can KreditBee file a police FIR, send real police officers, or have you arrested for loan default?",
    answer: "No. Under Indian civil jurisprudence and the Indian Contract Act, 1872, default on an unsecured digital personal loan is purely a civil breach of contract. Police officers have zero statutory authority to intervene in loan recovery or act on behalf of NBFCs. Any collection agent who impersonates police personnel, sends fabricated arrest warrants or FIR drafts on WhatsApp, or threatens criminal imprisonment is committing severe cognizable offenses under the Bharatiya Nyaya Sanhita (BNS) and the Information Technology Act, 2000."
  },
  {
    question: "What percentage of debt waiver or haircut can you negotiate on a defaulted KreditBee loan?",
    answer: "Once a KreditBee loan reaches 90 to 180+ Days Past Due (DPD) and transitions into Substandard, Doubtful, or Loss NPA status under Ind AS 109, borrowers with documented financial hardship can realistically negotiate a 40% to 65% principal haircut. Additionally, 100% of accumulated penal interest, overdue processing surcharges, and NACH bounce fees are completely cancelled under RBI-compliant compromise settlement policies."
  },
  {
    question: "What is a Section 25 PSSA legal notice from KreditBee and how should you respond?",
    answer: "A Section 25 PSSA notice is a statutory 15-day demand notice issued under the Payment and Settlement Systems Act, 2007, when an electronic NACH debit instruction dishonours due to insufficient funds. It is not an arrest warrant or court decree. Distressed borrowers must engage legal counsel to serve a formal written reply within the 15-day statutory timeline, citing bona fide financial distress, challenging predatory penalty compounding, and opening formal channels for a compromise OTS resolution."
  },
  {
    question: "Can Krazybee Services freeze or seize money from your other bank accounts under Section 171 Banker's Lien?",
    answer: "No. Under Section 171 of the Indian Contract Act, 1872, the right of general lien is strictly restricted to scheduled commercial banks holding deposits under the exact same Customer ID. Because Krazybee Services is a non-deposit-taking NBFC, it has no legal power to attach, freeze, or debit savings accounts maintained in third-party banks (such as SBI, HDFC, ICICI, or Axis Bank) without obtaining a formal execution decree from a competent Civil Court."
  },
  {
    question: "What is the statutory deadline for KreditBee to deliver the No Dues Certificate (NDC)?",
    answer: "Under RBI Circular RBI/2023-24/60, Krazybee Services and its co-lending partners are legally mandated to deliver a stamped No Dues Certificate (NDC) and update all four credit information companies (CIBIL, Experian, Equifax, CRIF High Mark) within 30 calendar days of receiving the full settlement remittance. If the lender fails to deliver the closure certificate within 30 days without valid justification, it must pay mandatory statutory compensation of ₹5,000 per day of delay directly to the borrower."
  },
  {
    question: "How does settling a KreditBee app loan impact your CIBIL score and how can you rebuild it?",
    answer: "Upon full settlement payment, KreditBee reports the account status to credit bureaus as 'Settled' or 'Post-Write-off Settled' with an outstanding balance of ₹0. While this causes a temporary credit score reduction of 70 to 120 points and initiates an institutional cooling period of 12 to 24 months, it permanently eliminates the damaging cycle of monthly default flags. Borrowers can restore their CIBIL score back to 750+ within 18 to 24 months through disciplined repayment on fixed-deposit-backed credit cards and maintaining low credit utilization."
  }
];

export default function KreditBeeLoanSettlementClient() {
  const [activeId, setActiveId] = useState<string>('understanding-kreditbee-lending');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveId(id);
    }
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-[#1F5EFF] selection:text-white"
      style={{ fontFamily: 'var(--font-satoshi), Satoshi, -apple-system, BlinkMacSystemFont, sans-serif' }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
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
      `,
        }}
      />

      {/* 1. Charcoal Navy Hero Section */}
      <section
        className="w-full border-b border-slate-700/80 pt-8 pb-7 md:pt-12 md:pb-9 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-blue-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Fintech App Dispute Resolution • Krazybee Services NBFC</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            KreditBee Loan Settlement: <span className="text-[#3b82f6] md:text-[#60a5fa]">OTS Rules, Legal Defense &amp; Harassment Shield (2026)</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Facing severe repayment distress on your KreditBee personal loan, aggressive automated tele-calling bots, or threats on WhatsApp? Learn how to enforce RBI Digital Lending protections, stop recurring NACH bounce penalties, contest Section 25 PSSA legal notices, and negotiate a formal 40% to 65% debt haircut directly with Krazybee Services NBFC.
          </p>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-3 mb-5 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Written by <strong>Ashish Jhangra</strong></span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Updated: August 2026</span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>RBI Digital Lending &amp; NBFC Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Settle Your KreditBee Loan</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Get Free Legal Case Review
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip Component */}
      <StatsStrip />

      {/* 3. 3-Column Grid Container */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column (Sticky Table of Contents + Executive Crux) */}
          <aside className="w-full sticky top-24 space-y-4">
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
                    onClick={(e) => handleTocClick(e, item.id)}
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
                <span>KreditBee Quick Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Defaulting on KreditBee is strictly a civil dispute with Krazybee Services NBFC. Automated calling bots, WhatsApp threats, and contact scraping violate RBI Digital Lending Directives. Stressed accounts past 90 DPD qualify for 40%–65% OTS debt waivers with 100% bounce charge cancellation.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">

            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 border border-blue-200 rounded-2xl p-6 mb-8 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-base mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: KreditBee Loan Settlement &amp; Legal Protection</span>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Compromise Rights:</strong> Defaulting on a KreditBee app loan is strictly a civil contractual dispute. Under RBI Master Directions on Compromise Settlements, borrowers experiencing financial distress hold clear statutory rights to negotiate an authorized One-Time Settlement (OTS).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Halting WhatsApp &amp; Bot Harassment:</strong> Under RBI Digital Lending Directions (2022) and Fair Practices Codes, recovery agents are prohibited from contacting third-party contacts, sending threatening WhatsApp messages, or calling outside the 08:00 AM to 07:00 PM window.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Stopping NACH Return Penalties:</strong> Cancelling electronic NACH auto-debit mandates under NPCI circulars halts recurring bank penalty fees. Legal representation demands 100% complete waiver of all accumulated bounce charges during settlement.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Realistic 40%–65% Haircut:</strong> Once an account crosses 90+ Days Past Due (NPA classification), Krazybee Services assesses Net Present Value (NPV) recovery economics, unlocking substantial principal debt waivers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory ₹0 NDC Guarantee:</strong> Under RBI Circular RBI/2023-24/60, Krazybee Services must issue a formal No Dues Certificate and update credit bureaus within 30 days of settlement payment, subject to a ₹5,000/day statutory delay penalty.</span>
                </li>
              </ul>
            </div>
            
            {/* Section 1: App Ecosystem & Krazybee NBFC Setup */}
            <section id="understanding-kreditbee-lending" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. App Ecosystem &amp; Krazybee NBFC Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Understanding KreditBee&apos;s Fintech Architecture &amp; Krazybee Services NBFC
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                KreditBee has established itself as one of India&apos;s fastest-growing digital lending platforms, operated by Finnov Private Limited. The mobile application delivers instant personal loans, salaried credit lines, and short-term merchant financing ranging from ₹5,000 to ₹5,00,000 with rapid paperless disbursement. However, behind the consumer-facing mobile interface lies a regulated non-banking financial infrastructure primarily driven by <strong>Krazybee Services Private Limited</strong>, a Systemically Important Non-Deposit Taking Non-Banking Financial Company (NBFC-ND-SI) registered with the Reserve Bank of India under Section 45-IA of the RBI Act, 1934.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                In addition to its proprietary NBFC book, KreditBee frequently operates through co-lending partnerships and digital lending arrangements with institutional lenders, including InCred Financial Services Limited, Vivriti Capital Limited, Northern Arc Capital Limited, MAS Financial Services, and Western Capital Advisors. When a borrower signs the digital loan agreement via electronic Aadhaar OTP, the underlying creditor is almost invariably Krazybee Services or one of its regulated institutional co-lending partners.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Retail digital loans are characterized by steep Annual Percentage Rates (ranging between 24% and 36% per annum), high upfront processing deductions, and short amortisation tenures of 3 to 24 months. When an unexpected economic disruption strikes—such as sudden employment termination, medical emergencies, small business turnover contraction, or severe cost-of-living shocks—borrowers frequently find it impossible to sustain monthly equated installments. Within days of non-payment, automated clearing systems trigger aggressive penalty compounding, causing a modest ₹1,00,000 loan to quickly inflate into an unmanageable ledger balance.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Crucially, under Indian jurisprudence and the Indian Contract Act, 1872, default on an unsecured digital personal loan is strictly a civil breach of contract. Borrowers are protected by comprehensive Reserve Bank of India statutory frameworks governing digital lenders and recovery practices, establishing enforceable legal rights to demand an audit of predatory penalty fees and negotiate a structured compromise One-Time Settlement (OTS).
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong>Statutory Principle:</strong> Under the Reserve Bank of India Master Direction on Compromise Settlements (2023), regulated NBFCs like Krazybee Services are empowered and required to maintain transparent, board-approved compromise settlement policies to resolve non-wilful, non-performing retail digital loans without resorting to protracted civil litigation.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Delinquency Timeline & NPA Progression */}
            <section id="kreditbee-delinquency-timeline-npa" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>2. Delinquency Timeline &amp; NPA Progression</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                KreditBee Delinquency Stages: From DPD 1–30 to Non-Performing Asset (NPA)
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under the Reserve Bank of India&apos;s Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP) and Expected Credit Loss (ECL) frameworks under Indian Accounting Standard 109 (Ind AS 109), Krazybee Services systematically tracks digital loan defaults across structured Days Past Due (DPD) aging buckets. Understanding these institutional milestones is crucial for strategically timing settlement negotiations and securing the maximum principal debt haircut.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                In the early delinquency phases (Buckets 1 and 2), KreditBee relies heavily on automated digital reminders and tele-calling bots. However, once an account crosses the pivotal 90-day threshold without payment, the asset is formally reclassified as a Non-Performing Asset (NPA). At this stage, Krazybee is required to lock regulatory capital into mandatory balance-sheet provisioning, shifting its institutional focus from standard installment recovery toward bad-debt recovery and compromise resolution.
              </p>

              {/* Comprehensive Stage Table */}
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Delinquency Stage</th>
                      <th>Overdue Days (DPD)</th>
                      <th>KreditBee &amp; Krazybee Recovery Actions</th>
                      <th>Legal &amp; Judicial Exposure</th>
                      <th>Settlement Haircut Potential</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-0 (Early Delinquency)</td>
                      <td>1 – 30 Days</td>
                      <td>Automated IVR calls, daily SMS/email alerts, repeated NACH mandate presentations.</td>
                      <td>Zero legal risk; initial bureau DPD tracking begins.</td>
                      <td>Negligible (NBFC demands full overdue installment payment).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-1 (Mid Delinquency)</td>
                      <td>31 – 60 Days</td>
                      <td>Intensive tele-calling, third-party recovery agency allocation, WhatsApp warning notices.</td>
                      <td>Statutory loan acceleration notices; sharp CIBIL score drop.</td>
                      <td>Low (Tenure extensions or partial interest waivers discussed).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-2 (Pre-NPA Escalation)</td>
                      <td>61 – 90 Days</td>
                      <td>Outsourced agency field collection warnings, formal loan recall demand letters.</td>
                      <td>Section 25 PSSA / Section 138 NI Act statutory legal demand notices.</td>
                      <td>Moderate (Discussions for complete penal fee waivers can commence).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-amber-700">NPA (Substandard Asset)</td>
                      <td>91 – 180 Days</td>
                      <td>Transferred to Krazybee Stressed Assets Division; mandatory 15%–25% provisioning.</td>
                      <td>Magistrate Court summons under Sec 25 PSSA; Lok Adalat conciliation notices.</td>
                      <td><span className="text-emerald-700 font-bold">High (35%–50% Haircut achievable).</span></td>
                    </tr>
                    <tr>
                      <td className="font-bold text-rose-700">Doubtful / Write-Off Asset</td>
                      <td>181+ Days</td>
                      <td>Technical write-off under Ind AS 109; assigned to specialized bad-debt recovery desks.</td>
                      <td>Civil summary recovery suits or permanent Lok Adalat compromise awards.</td>
                      <td><span className="text-emerald-700 font-black">Maximum (50%–65% Haircut achievable).</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Stopping Harassment Bots & NACH Bounces */}
            <section id="stopping-kreditbee-harassment-nach" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>3. Stopping Harassment Bots &amp; NACH Bounces</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Halting Automated Calling Bots, WhatsApp Intimidation &amp; NACH Bounce Charges
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                One of the most distressing aspects of defaulting on a digital app loan like KreditBee is the sheer volume of automated recovery pressure. KreditBee utilizes high-frequency predictive dialers and AI calling bots that dial borrowers 20 to 50 times a day from constantly rotating virtual phone numbers. In parallel, outsourced debt recovery agencies frequently deploy aggressive WhatsApp messaging tactics, sending fabricated legal notices, threatening to call references or workplace managers, and making unauthorized field visits.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                These aggressive collection practices are flagrant violations of the Reserve Bank of India&apos;s <strong>Digital Lending Guidelines (September 2022)</strong> and the <strong>RBI Master Circular on Fair Practices Code for NBFCs</strong>. Under these binding statutory regulations:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700 text-base mb-4">
                <li>Lenders and their agents are strictly prohibited from accessing, storing, or scraping a borrower&apos;s phone contact list, media files, or social media accounts.</li>
                <li>Contacting friends, relatives, colleagues, or employers who are not formal co-borrowers or legal guarantors is an unlawful invasion of privacy.</li>
                <li>Telephonic collection calls and home visits are strictly confined to the statutory window of <strong>08:00 AM to 07:00 PM</strong>. Calling outside these hours, on public holidays, or late at night constitutes regulatory misconduct.</li>
                <li>Harassment, intimidating voice tones, abusive vernacular language, public humiliation, or false threats of criminal arrest are strictly actionable under civil and criminal law.</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Concurrently, KreditBee&apos;s automated treasury systems often present electronic National Automated Clearing House (NACH) mandates multiple times in a single billing cycle. Each failed auto-debit attempt results in the destination bank debiting between ₹250 and ₹590 in return charges, while Krazybee levies separate internal bounce fees. This dual penalty mechanism rapidly drains borrower savings accounts without reducing a single rupee of core principal debt.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Distressed borrowers can permanently halt this drain by exercising their statutory rights under National Payments Corporation of India (NPCI) circulars to cancel or revoke the e-NACH mandate through their home bank branch or mobile banking portal. Furthermore, under the RBI Fair Lending Practices circular on Penal Charges in Loan Accounts (2023/2024), lenders are prohibited from compounding penal charges or capitalizing them into principal dues. During One-Time Settlement negotiations, legal representation ensures 100% of accumulated bounce penalties and late charges are completely expunged.
              </p>
            </section>

            {/* Section 4: OTS Haircut Policies & NPV Valuation */}
            <section id="kreditbee-ots-haircut-policy-npv" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>4. OTS Haircut Policies &amp; NPV Recovery Valuation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Krazybee Services OTS Haircut Dynamics &amp; The Net Present Value (NPV) Formula
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When an unsecured digital personal loan defaults, Krazybee Services evaluates whether to pursue formal legal litigation or accept a discounted compromise One-Time Settlement (OTS). Under the Reserve Bank of India&apos;s Master Directions on Compromise Settlements and Technical Write-offs, NBFC credit committees are required to base settlement approvals on a rigorous financial comparison: the <strong>Net Present Value (NPV) of Estimated Recovery</strong> through civil litigation versus the immediate cash realization of an OTS offer.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Civil recovery suits in Indian courts entail substantial legal advocacy retainer fees, court filing fees, process serving expenses, and typical procedural delays spanning 3 to 5 years. For an unsecured loan with zero mortgage collateral, the legal recovery yield is exceptionally low. Consequently, an upfront lump-sum OTS payment provides the NBFC with immediate capital relief, allows regulatory provision write-backs, and eliminates non-performing asset drag.
              </p>

              {/* Clean JSX Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>NBFC Stressed Asset Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated future cash recoveries over time, r is the NBFC hurdle discount rate, and significant deductions account for 3–5 years of civil court litigation friction, advocate fees, and capital locked in non-accrual NPA balance-sheet provisioning.
                </p>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Based on this financial calculus, Krazybee Services Credit Committees establish internal settlement discount matrices. While initial collection calls may only offer token 10% to 15% interest discounts, seasoned legal advocates presenting a verifiable hardship dossier can systematically achieve <strong>40% to 65% principal haircuts</strong> alongside 100% cancellation of all penal interest and bounce penalties.
              </p>
            </section>

            {/* Section 5: Visual Resolution Blueprint (Infographic Banner) */}
            <section id="infographic-resolution-blueprint" className="scroll-mt-24 mb-12">
              <div className="bg-gradient-to-br from-slate-900 via-[#1E293B] to-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg">
                <div className="p-4 md:p-6 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-lg bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-sm">
                      <Layers className="w-4 h-4" />
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                        Visual Blueprint: KreditBee Loan Settlement &amp; Legal Shield
                      </h3>
                      <p className="text-xs text-slate-400">
                        Step-by-step roadmap from automated bot harassment defense to ₹0 No Dues Certificate
                      </p>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/kreditbee-loan-settlement.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#1F5EFF] hover:text-blue-300 font-bold flex items-center gap-1 transition-colors"
                  >
                    <span className="hidden sm:inline">Open Full Size</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* 16:9 Landscape Infographic Image */}
                <div className="p-3 md:p-4 bg-slate-50">
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                    <img
                      src="/images/infographics/kreditbee-loan-settlement.jpg"
                      alt="KreditBee Loan Settlement Process, NACH Bounce Defense, and OTS Haircut Guide"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Strategy:</strong> Stop predatory collection bots and NACH debit return fees immediately, then negotiate directly with Krazybee Stressed Assets Desks for a 40%–65% debt waiver.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Legal Case Review &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6: Statutory Borrower Protections & RBI Rules */}
            <section id="rbi-fair-practices-anti-harassment" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4" />
                <span>6. Statutory Borrower Protections &amp; RBI Fair Practices</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Statutory Borrower Rights Under RBI Digital Lending &amp; Debt Recovery Regulations
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers struggling with digital personal loan defaults frequently endure unlawful intimidation because they are unaware of the strict statutory protections enacted by Indian regulatory authorities and higher courts. Under the Reserve Bank of India Master Directions on Recovery Agents and NBFC Fair Practices Code:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                <strong>1. Strict Prohibition of Third-Party Communication:</strong> Recovery agents have zero legal authority to contact your family members, parents, spouse, friends, neighbors, or workplace colleagues. The loan agreement is an individual civil contract between the borrower and Krazybee Services. Disclosing debt details to third parties is a direct violation of constitutional privacy rights affirmed by the Supreme Court in <em>Justice K.S. Puttaswamy (Retd.) v. Union of India</em>.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                <strong>2. Criminality of Fake Police Notices &amp; Arrest Threats:</strong> Outsourced collection tele-callers frequently forge court summons, fake police FIR drafts, or fabricated CBI / cybercrime arrest warrants and transmit them over WhatsApp to induce panic. In India, default on an unsecured personal loan is strictly a civil matter. Impersonating public servants and fabricating judicial documents are severe cognizable criminal offenses under the Bharatiya Nyaya Sanhita (BNS) and Section 66D of the Information Technology Act, 2000.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                <strong>3. Regulatory Escalation Mechanisms:</strong> When recovery personnel violate RBI conduct norms, borrowers should preserve call recordings, screenshots of WhatsApp messages, and agent phone numbers. A formal complaint must be lodged with Krazybee&apos;s Principal Nodal Officer (PNO). If the grievance is unresolved within 30 days, it can be escalated to the <strong>RBI Integrated Ombudsman Scheme</strong> (cms.rbi.org.in), which regularly imposes severe compliance penalties on non-compliant NBFCs.
              </p>
            </section>

            {/* Section 7: Step-by-Step KreditBee Settlement Roadmap */}
            <section id="step-by-step-kreditbee-settlement" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>7. Step-by-Step KreditBee Settlement Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Step-by-Step Guide: How to Negotiate an Official OTS with KreditBee &amp; Krazybee
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Securing a legally binding, heavily discounted One-Time Settlement with Krazybee Services requires a disciplined, evidence-based strategy that bypasses junior tele-callers and directly engages decision-making credit authorities:
              </p>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">1</span>
                    Comprehensive Financial Hardship Dossier Compilation
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Compile verifiable documentary evidence demonstrating that your loan default is non-wilful and caused by genuine involuntary hardship. Relevant documents include formal job termination or salary reduction letters, medical hospitalization discharge summaries, bank statements showing depleted liquidity, or business income tax filings evidencing revenue loss.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">2</span>
                    Cancelling NACH Auto-Debits &amp; Formalizing Written Channels
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Instruct your bank to cancel the electronic NACH mandate to stop recurring return penalties. Serve a formal written notice to KreditBee and Krazybee Services directing that all debt communication be conducted exclusively via registered email or through your appointed legal counsel, establishing a clean evidentiary audit trail.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">3</span>
                    Submitting Formal Hardship Petition to Stressed Assets Committee
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Submit a formal compromise proposal addressed to Krazybee Services&apos; Stressed Assets Division citing the RBI Master Direction on Compromise Settlements. Propose an initial settlement figure at 25% to 35% of core principal dues to establish an advantageous baseline for structured counter-negotiation.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">4</span>
                    Managing Counter-Demands &amp; Securing Maximum Haircut
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Krazybee recovery desks will initially reject low opening offers and suggest minor interest concessions. Experienced debt settlement advocates counter these demands by establishing that settlement funds are being borrowed from third-party family members as a final one-time relief, successfully steering the approval toward the target 40% to 65% principal haircut band.
                  </p>
                </div>

                {/* Step 5 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">5</span>
                    Rigorous Forensic Audit of the OTS Sanction Letter
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Before paying any funds, conduct a rigorous audit of the One-Time Settlement sanction letter. Verify that it is issued on official Krazybee Services Private Limited letterhead, contains the loan account number, sanctioned settlement sum, exact payment deadlines, and unambiguous covenants confirming complete debt extinguishment.
                  </p>
                </div>

                {/* Step 6 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">6</span>
                    Official Channel Payment &amp; Enforcing ₹0 NDC Delivery
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Remit the agreed settlement amount exclusively into the designated Krazybee loan account through official banking channels (NEFT/RTGS or in-app payment gateway). Under RBI Circular RBI/2023-24/60, the NBFC is statutorily required to deliver your stamped No Dues Certificate and update credit bureau records within 30 calendar days.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Section 25 PSSA, NI Act & Lok Adalat */}
            <section id="section-25-pssa-lok-adalat-defense" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>8. Section 25 PSSA, NI Act &amp; Lok Adalat Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Navigating Section 25 PSSA Legal Notices &amp; National Lok Adalat Settlements
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When a KreditBee digital personal loan default crosses 60 to 90 days, Krazybee Services or its legal counsel will often dispatch a statutory demand notice under <strong>Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA)</strong> or Section 138 of the Negotiable Instruments Act, 1881, arising from bounced electronic NACH mandates.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                A Section 25 PSSA notice is a statutory precursor to a private complaint before a Judicial Magistrate Court; it is not an immediate arrest warrant or civil decree. Borrowers must never ignore this statutory notice. Serving a formal legal reply drafted by experienced debt defense advocates within the mandatory 15-day window establishes bona fide financial distress, challenges unauthorized repeated mandate presentations, and opens formal channels for a compromise OTS, which routinely halts criminal court litigation.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Furthermore, Krazybee Services regularly lists non-performing digital retail loan portfolios before quarterly <strong>National Lok Adalats</strong> organized by District Legal Services Authorities (DLSA) under the Legal Services Authorities Act, 1987. National Lok Adalat provides an exceptional judicial conciliation platform where NBFC nodal officers carry pre-authorized settlement mandates offering substantial debt waivers (often 45% to 65% haircuts). The resultant Lok Adalat settlement award possesses the legal status of a binding, non-appealable Civil Court Decree that permanently dismisses all pending legal claims.
              </p>

              {/* Comparative Legal Resolution Table */}
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Resolution Avenue</th>
                      <th>Legal Mechanism</th>
                      <th>Haircut Potential</th>
                      <th>Typical Timeline</th>
                      <th>Judicial Finality</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Direct NBFC Compromise OTS</td>
                      <td>Private settlement contract under RBI Master Directions.</td>
                      <td><strong>40% – 65% Principal Haircut</strong></td>
                      <td>15 to 30 Days</td>
                      <td>Binding contractual release with ₹0 NDC.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">National Lok Adalat</td>
                      <td>Judicial conciliation before sitting judge and DLSA panel.</td>
                      <td><strong>45% – 65% Principal Haircut</strong></td>
                      <td>Single-day hearing session</td>
                      <td><strong>Civil Court Decree</strong> (Non-appealable finality).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Section 25 PSSA Defense</td>
                      <td>Formal advocate reply &amp; compoundable conciliation.</td>
                      <td><strong>35% – 55% Principal Haircut</strong></td>
                      <td>1 to 3 Months</td>
                      <td>Magistrate complaint permanently withdrawn.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">RBI Ombudsman Escalation</td>
                      <td>Regulatory complaint for Fair Practices violations.</td>
                      <td>Variable (Fee waiver + OTS)</td>
                      <td>30 to 60 Days</td>
                      <td>Statutory directive issued to NBFC.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 9: Sanction Letter Forensics & ₹0 NDC Mandate */}
            <section id="sanction-letter-audit-ndc-verification" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>9. Sanction Letter Forensics &amp; ₹0 NDC Mandate</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Authenticating KreditBee OTS Sanction Letters &amp; Enforcing the ₹0 NDC Mandate
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                In the fintech recovery space, fraudulent collection scams represent a major hazard for distressed borrowers. Rogue third-party collection agents often issue fake settlement discount letters over WhatsApp or demand cash/UPI transfers to personal bank accounts, falsely promising loan closure. If a borrower makes an unverified payment, Krazybee credits the funds against accumulated penal charges, leaving the default open and compounding.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                To guarantee absolute legal validity, every settlement letter must undergo rigorous forensic verification. The OTS sanction letter must be issued directly on official <strong>Krazybee Services Private Limited</strong> letterhead (CIN: U65100KA2016PTC086990), featuring registered office details in Bengaluru, a unique proposal reference ID, the borrower&apos;s name and loan account number, sanctioned settlement amount, exact payment due dates, and an explicit covenant confirming that upon full payment, the loan balance becomes exactly ₹0 with all legal proceedings withdrawn.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under Reserve Bank of India Circular <strong>RBI/2023-24/60</strong> (Responsible Lending Conduct – Release of Movable/Immovable Property Documents on Repayment/Settlement of Personal Loans), Krazybee Services is statutorily mandated to deliver the official stamped <strong>No Dues Certificate (NDC)</strong> and update all four credit information companies (CIBIL, Experian, Equifax, CRIF High Mark) within <strong>30 calendar days</strong> of receiving full settlement payment. If the lender fails to deliver the NDC within 30 days without lawful justification, it is statutorily liable to pay compensation of <strong>₹5,000 per day of delay</strong> directly to the borrower.
              </p>
            </section>

            {/* Section 10: CIBIL Score Impact & 18-Month Recovery */}
            <section id="cibil-impact-credit-rehabilitation" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>10. CIBIL Score Impact &amp; 18-Month Recovery Plan</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                CIBIL Score Trajectory Post-Settlement &amp; Strategic Credit Rehabilitation
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Executing a One-Time Settlement with KreditBee results in Krazybee Services reporting the loan account status to credit information companies (TransUnion CIBIL, Experian, Equifax, and CRIF High Mark) as <strong>&apos;Settled&apos;</strong> or <strong>&apos;Post-Write-off Settled&apos;</strong> with an outstanding balance of exactly <strong>₹0</strong>. This creates an initial credit score drop of approximately 70 to 120 points.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under RBI compromise directives, a mandatory 12 to 24-month cooling-off period applies before mainstream commercial banks approve fresh unsecured credit cards or personal loans. However, a &apos;Settled&apos; record with a zero balance is infinitely superior to an open, compounding &apos;Default&apos; status, which continues to degrade your credit score every single month and leaves you vulnerable to legal action.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers can systematically restore their credit score above <strong>750+ within 18 to 24 months</strong> by adopting a disciplined rehabilitation roadmap: (1) Open a fixed-deposit-backed secured credit card (FD card) with a modest deposit of ₹20,000 to ₹50,000; (2) Maintain credit utilization strictly below 25% of the sanctioned credit limit; (3) Ensure 100% on-time payment records on utility bills, mobile post-paid accounts, and surviving financial obligations; (4) Perform quarterly credit report audits to verify that the KreditBee balance is reflected as ₹0 with zero active delinquency flags.
              </p>
            </section>

            {/* Section 11: SettleLoans Legal Defense & Representation */}
            <section id="company-resolution-section" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>11. Legal Defense &amp; Representation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Why Distressed KreditBee Borrowers Trust SettleLoans
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Resolving defaulted digital app loans requires strong legal defense against predatory collection practices and deep expertise in NBFC debt restructuring. SettleLoans shields borrowers by issuing formal cease-and-desist notices to stop abusive recovery calls and WhatsApp harassment, revokes unauthorized electronic NACH mandates, replies to Section 25 PSSA legal notices, and negotiates directly with Krazybee Services Stressed Asset Desks to achieve 40% to 65% debt waivers with 100% authentic No Dues Certificates.
              </p>

              {/* Placement of Reusable CompanySection */}
              <div className="my-8">
                <CompanySection />
              </div>
            </section>

            {/* Section 12: Frequently Asked Questions (FAQ Accordion) */}
            <section id="faqs" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>12. Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                Frequently Asked Questions About KreditBee Loan Settlement
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-200 hover:border-slate-300 open:border-[#1F5EFF]/30 open:shadow-md"
                  >
                    <summary className="w-full p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-4">
                      <span className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
                        {faq.question}
                      </span>
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-all duration-300">
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </summary>
                    <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-base leading-relaxed border-t border-slate-100 pt-4">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Regulatory References & Official Sources Strip */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-[#1F5EFF]" />
                Official Regulatory References &amp; Statutory Circulars
              </h3>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Reserve Bank of India (RBI):</strong> Guidelines on Digital Lending (RBI/2022-23/111 DOR.CRE.REC.66/21.07.001/2022-23)
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>RBI Master Direction:</strong> Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24)
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.krazybee.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Krazybee Services Private Limited:</strong> Fair Practices Code, Grievance Redressal Policy &amp; Principal Nodal Officer Matrix
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Online Redressal Portal for Fintech &amp; Digital Lending Harassment
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>National Legal Services Authority (NALSA):</strong> Legal Services Authorities Act, 1987 — National Lok Adalat Conciliation Framework
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
                  href="/app-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  App Loan Settlement Guide
                </Link>
                <Link
                  href="/navi-app-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Navi App Loan Settlement
                </Link>
                <Link
                  href="/instant-app-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Instant App Loan Settlement
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Bank One-Time Settlement (OTS) Policy
                </Link>
                <Link
                  href="/personal-loan-settlement-percentage"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement Percentage
                </Link>
                <Link
                  href="/personal-loan-legal-notice"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Legal Notice Defense
                </Link>
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Lok Adalat Notice for Personal Loan
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement CIBIL Impact
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
                <Link
                  href="/how-to-avoid-loan-settlement-scams"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  How to Avoid Loan Settlement Scams
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
                    Lead Banking Legal &amp; Debt Settlement Strategist
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Ashish has led over 1,200+ successful debt compromise negotiations across fintech digital lending platforms and NBFCs including KreditBee (Krazybee), Navi Finserv, Bajaj Finance, Aditya Birla Capital, and leading commercial banks. He specializes in anti-harassment defense under RBI Digital Lending Guidelines and Section 25 PSSA notice conciliation.
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
                <span>KreditBee Dispute Resolution</span>
              </div>
              <div className="text-xl font-black mb-3 leading-tight">
                Facing KreditBee Loan Default?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Stop aggressive automated collection bots, WhatsApp harassment, and recurring NACH bounce charges immediately. Let our experienced banking advocates audit your loan ledger, defend against statutory legal notices, and negotiate an official 40% to 65% OTS haircut directly with Krazybee Services.
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
              <div className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                <span>Why Borrowers Trust SettleLoans</span>
              </div>
              <ul className="space-y-3.5 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct NBFC Representation:</strong> We bypass outsourced collection callers and represent your case directly before Krazybee Services Stressed Asset Committees.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Shield:</strong> Immediate issuance of formal cease-and-desist notices to stop reference calling, bot dialing, and WhatsApp intimidation under RBI rules.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Stamped Sanction Letter:</strong> Every settlement offer is strictly audited on official Krazybee letterhead before any payment is authorized.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed ₹0 NDC Delivery:</strong> Complete legal tracking under RBI Circular RBI/2023-24/60 until your official No Dues Certificate is delivered.
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
