'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
  AlertCircle
} from 'lucide-react';

export default function LokAdalatMeLoanSettlementClient() {
  const [activeId, setActiveId] = useState<string>('understanding-lok-adalat-loan-settlement');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'understanding-lok-adalat-loan-settlement', title: '1. Statutory Nature & Institutional Demystification' },
    { id: 'pre-litigation-vs-pending-court-notices', title: '2. Notice Forensics: Pre-Litigation vs Court Summons' },
    { id: 'attendance-rules-arrest-myths-debunked', title: '3. Voluntary Attendance & Arrest Myths Debunked' },
    { id: 'zero-court-fee-financial-advantages', title: '4. Zero Court Fees & Full Refund Mechanics' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Resolution Blueprint' },
    { id: 'on-the-spot-negotiation-npv-haircut', title: '6. Spot Negotiation Strategy & NPV Formula' },
    { id: 'step-by-step-hearing-day-playbook', title: '7. Step-by-Step Hearing Day Playbook' },
    { id: 'lok-adalat-award-decree-finality', title: '8. Section 21 Award: Finality & Non-Appealability' },
    { id: 'sanction-letter-audit-ndc-cibil-recovery', title: '9. Sanction Letter Audit & ₹0 NDC Mandate' },
    { id: 'comparative-resolution-matrix', title: '10. Comparative Matrix & Legal Advocacy' },
    { id: 'faqs', title: '11. Frequently Asked Questions' },
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
      question: "Lok Adalat kya hai aur kya yeh regular court ki tarah kaam karta hai?",
      answer: "Lok Adalat (People's Court) is a statutory alternative dispute resolution (ADR) conciliation forum established under the Legal Services Authorities Act, 1987. It is NOT a regular trial court. It does not conduct cross-examinations, does not impose punitive sentences, and has zero power to issue arrest warrants or police orders. A Lok Adalat bench comprises a presiding retired or sitting judicial officer alongside an experienced advocate or social worker whose sole statutory mandate is to help borrowers and bank officials negotiate a mutually agreeable, voluntary compromise settlement."
    },
    {
      question: "Kya Lok Adalat ka notice aane par court jana compulsory ya mandatory hota hai?",
      answer: "No, attending Lok Adalat is 100% voluntary. Under Section 20 of the Legal Services Authorities Act, 1987, Lok Adalat exercises conciliation jurisdiction based strictly on mutual consent. If you do not attend or choose not to participate, no arrest warrant, ex-parte penalty, or default judgment can be passed against you. The Lok Adalat bench simply records the matter as 'Disposed of as Not Settled' and returns the file to the lender. However, attending Lok Adalat is strongly recommended because it offers an exceptional opportunity to secure direct 40% to 75% loan waivers from senior bank managers."
    },
    {
      question: "Kya Lok Adalat me loan settlement ke liye advocate ya lawyer hire karna jaruri hai?",
      answer: "No, hiring an advocate is not legally mandatory to attend Lok Adalat. Borrowers have the full statutory right to represent themselves directly before the bench. However, having a specialized debt settlement advocate represent you or review the draft terms is highly advantageous. An experienced advocate verifies that your financial hardship documents (such as medical records, salary slips, or business loss audits) are formally submitted, protects you from aggressive bank recovery pressure, and ensures that the final Lok Adalat Award text contains explicit full-and-final extinguishment clauses and guaranteed No Dues Certificate issuance."
    },
    {
      question: "Lok Adalat me personal loan ya credit card par kitna discount ya haircut mil sakta hai?",
      answer: "In National Lok Adalat sessions, banks and NBFCs typically approve discounts ranging between 40% and 75% of the total outstanding demand for unsecured personal loans and credit cards. In virtually every approved compromise, 100% of accumulated penal interest, late payment penalties, bounce charges, and administrative costs are completely waived off. Furthermore, for seasoned Non-Performing Assets (NPAs past 180 to 360+ days), banks regularly agree to a 20% to 50% write-off on the core principal amount, depending on the borrower's documented financial distress."
    },
    {
      question: "Kya Lok Adalat me settlement hone par court fees lagti hai?",
      answer: "No. One of the greatest statutory advantages of Lok Adalat is that there is zero court fee payable by either party. Furthermore, under Section 21(1) of the Legal Services Authorities Act, 1987, read with Section 16 of the Court Fees Act, 1870, if a formal civil suit was already pending in a regular court and the parties resolve the dispute in Lok Adalat, the entire court fee previously deposited by the plaintiff is fully refunded. This zero-fee structure significantly reduces resolution costs for both borrowers and financial institutions."
    },
    {
      question: "Kya Lok Adalat ka settlement order binding hota hai aur kya bank dobara court ja sakta hai?",
      answer: "Yes, a Lok Adalat Award is 100% legally binding and final. Under Section 21 of the Legal Services Authorities Act, 1987, every award passed by a Lok Adalat is deemed to be a formal decree of a Civil Court. Crucially, under Section 96(3) of the Code of Civil Procedure (CPC), 1908, no appeal lies against any decree passed by the court with the consent of parties. Once the settlement terms are signed and the award is pronounced, the bank is permanently barred from filing any fresh lawsuit, Section 138 cheque bounce case, or Section 25 PSSA complaint for the settled debt."
    },
    {
      question: "Agar Lok Adalat me settlement ho gaya par borrower agreed amount nahi de paya toh kya hoga?",
      answer: "If a borrower signs a Lok Adalat consent decree but defaults on the agreed payment schedule or installment deadline, the bank can directly file an Execution Petition under Order XXI of the Code of Civil Procedure in the competent civil court to enforce the award. Because the Lok Adalat award carries the force of a civil court decree, the bank does not need to prove the loan default again in a regular trial. Therefore, borrowers must ensure they negotiate a realistic settlement figure and payment timeline that they can execute without fail."
    },
    {
      question: "Lok Adalat settlement ke baad CIBIL score par kya asar padta hai aur No Dues Certificate kab milta hai?",
      answer: "Following full payment of the agreed settlement sum, the lending institution updates the loan account status with credit bureaus (CIBIL, Experian, Equifax, CRIF) as 'Settled' or 'Post-Lok Adalat Settled' with a ₹0 balance. While a 'Settled' remark causes an initial credit score drop of 50 to 100 points, it halts continuous negative overdue compounding (DPD). Under RBI Circular RBI/2023-24/60, the bank is legally obligated to deliver an official stamped No Dues Certificate within 30 days of payment, subject to a ₹5,000 per day compensation penalty for unjustified delays."
    },
    {
      question: "WhatsApp par aaya hua Lok Adalat notice real hai ya recovery agent ka fake notice?",
      answer: "A genuine Lok Adalat notice is officially issued by the District Legal Services Authority (DLSA) or Taluk Legal Services Committee (TLSC), bears a distinct Pre-Litigation Case (PLC) Number or Lok Adalat Case Number, specifies the physical District Court complex venue and date, and is served via registered post, speed post, or official DLSA channels. Fake notices forged by recovery agents often lack a verifiable PLC number, feature dramatic threats of police arrest within 24 hours, or instruct the borrower to transfer funds to personal UPI handles."
    },
    {
      question: "Kya Lok Adalat me settlement amount ko installments me pay kiya ja sakta hai?",
      answer: "Yes. While banks prefer immediate lump-sum payment on the day of the Lok Adalat session or within 7 to 15 days, borrowers facing liquidity constraints can negotiate a structured installment plan of 2 to 3 monthly tranches. When agreeing to installment terms, ensure that the exact due dates, amounts, and bank account details are explicitly recorded in the signed Lok Adalat Award memo before the Presiding Officer."
    }
  ];

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
            <Landmark className="w-3.5 h-3.5" />
            <span>Statutory Dispute Resolution • National Lok Adalat Guide</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Lok Adalat Me Loan Settlement Kaise Kare: <span className="text-[#3b82f6] md:text-[#60a5fa]">Legal Process, Notice Rules &amp; Spot OTS Haircut</span>
          </h1>

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
              <span>RBI &amp; NALSA Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Negotiate Lok Adalat Settlement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Get Free Case Evaluation
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
                    className={`block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug ${
                      activeId === item.id
                        ? 'bg-[#1F5EFF] text-white font-bold shadow-sm'
                        : 'text-slate-600 hover:bg-blue-50 hover:text-[#1F5EFF]'
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
                <span>Lok Adalat Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                National Lok Adalat is an ADR forum, not a criminal court. Attendance is 100% voluntary, no lawyer is mandatory, court fee is ₹0, and borrowers can secure 40%–75% binding OTS decrees under Section 21 of the LSA Act.
              </p>
            </div>
          </aside>

          {/* Middle Column: Main Editorial Body */}
          <main className="w-full min-w-0 blog-content">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-sky-50 border border-blue-200 rounded-2xl p-5 md:p-6 mb-8 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-black text-sm sm:text-base uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Executive Summary: Core Principles of Lok Adalat Loan Settlement</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Conciliation Forum:</strong> Lok Adalat operates under the Legal Services Authorities Act, 1987. It is strictly a conciliation body aimed at mutual compromise, possessing zero powers to pass adverse default orders, levy criminal penalties, or issue arrest warrants.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Voluntary Participation:</strong> Receiving a Pre-Litigation Case (PLC) notice from the District Legal Services Authority (DLSA) does not make court appearance mandatory. Non-appearance simply returns the file to the lender without creating contempt of court or immediate legal liability.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Substantial OTS Discounts (40% to 75%):</strong> Because senior bank recovery managers and Stressed Asset Resolution Branch (SARB) officers have on-the-spot sanctioning powers during Lok Adalat sessions, borrowers routinely obtain 100% penal fee waivers and deep principal haircuts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Final Civil Court Decree (No Appeals):</strong> Under Section 21 of the LSA Act read with Section 96(3) of the Code of Civil Procedure (CPC), an award signed in Lok Adalat becomes an unappealable civil decree, permanently barring the bank from future lawsuits or Section 138 / Section 25 PSSA litigation.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Court Fees &amp; 30-Day NDC Mandate:</strong> There are zero filing or court fees in Lok Adalat. Once the compromised amount is remitted, RBI Circular RBI/2023-24/60 statutorily obligates the bank to deliver a stamped No Dues Certificate within 30 days under penalty of ₹5,000 per day.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Statutory Nature & Institutional Demystification */}
            <section id="understanding-lok-adalat-loan-settlement" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. Statutory Nature &amp; Institutional Demystification</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Demystifying Lok Adalat: Why It Is an ADR Conciliation Forum, Not a Trial Court
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
                Receiving an official-looking postal envelope or an urgent WhatsApp message carrying the heading &quot;Notice for National Lok Adalat&quot; often triggers severe panic among Indian retail borrowers. Distressed individuals struggling with overdue personal loan EMIs, credit card balances, or micro-enterprise credit lines frequently misinterpret this document as a criminal court summons, an imminent arrest warrant, or an immediate police attachment proceeding. In reality, the institutional architecture of Lok Adalat represents the complete opposite: it is India&apos;s premier, borrower-friendly Alternative Dispute Resolution (ADR) mechanism designed specifically to bypass adversarial court trials and facilitate voluntary, discounted debt compromises.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
                Lok Adalat, literally translating to &quot;People&apos;s Court,&quot; was granted statutory recognition under the <strong>Legal Services Authorities Act, 1987 (Act No. 39 of 1987)</strong>. Organized periodically at national, state, district, and taluk levels by the National Legal Services Authority (NALSA), State Legal Services Authorities (SLSA), District Legal Services Authorities (DLSA), and Taluk Legal Services Committees (TLSC), Lok Adalats function to reduce judicial backlog across Indian courts. A typical Lok Adalat bench comprises a Presiding Judicial Officer (either a sitting or retired District Judge or Civil Judge) sitting alongside a co-member, who is usually an experienced legal advocate, academician, or social worker.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
                Crucially, Lok Adalat does not function as an adjudicatory court. The presiding bench has no statutory authority to conduct witness cross-examinations, examine evidence under the Indian Evidence Act, declare a borrower guilty of financial default, impose punitive monetary fines, or issue search warrants. Under <strong>Section 19(5) and Section 20(3) of the Legal Services Authorities Act</strong>, the sole legal jurisdiction of a Lok Adalat bench is to act as a neutral conciliator. The bench exists exclusively to persuade, guide, and facilitate a voluntary compromise between the creditor bank and the borrower. If both parties do not arrive at a consensual agreement of their own free will, the bench cannot impose any decision or unilateral order on either party.
              </p>
            </section>

            {/* Section 2: Notice Forensics: Pre-Litigation vs Pending Court Summons */}
            <section id="pre-litigation-vs-pending-court-notices" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileText className="w-4 h-4" />
                <span>2. Notice Forensics: Pre-Litigation vs. Pending Court Summons</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Forensic Analysis of Lok Adalat Notices: Decoding DLSA Pre-Litigation Summons
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
                To respond strategically to a Lok Adalat communication, a borrower must first determine whether the notice represents a <strong>Pre-Litigation Conciliation Notice</strong> or a <strong>Post-Litigation Court Referral</strong>. Lending institutions, including public sector banks like State Bank of Baroda and Punjab National Bank, private lenders like HDFC Bank, ICICI Bank, and Axis Bank, and major NBFCs like Bajaj Finance, utilize both channels depending on the recovery lifecycle of the non-performing asset (NPA).
              </p>
              
              <div className="space-y-4 my-6">
                <div className="border border-slate-200 rounded-xl p-5 bg-white shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2 flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Category 1: Pre-Litigation Lok Adalat Notice (PLC Notice)</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Issued under Section 19(5)(ii) of the Legal Services Authorities Act, a Pre-Litigation Case notice is generated before any formal civil suit, Section 138 Negotiable Instruments Act cheque bounce complaint, or Section 25 Payment and Settlement Systems Act (PSSA) NACH bounce petition has been instituted in a court of law. The bank submits a bulk list of delinquent loan accounts to the DLSA, which then issues an administrative invitation to explore an out-of-court One-Time Settlement (OTS). This notice carries zero judicial liability; it is purely an invitation to negotiate.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-5 bg-white shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-indigo-600" />
                    <span>Category 2: Post-Litigation Pending Matter Referral</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the lending bank has already filed a formal civil recovery suit (under Order XXXVII of the CPC) or a quasi-criminal complaint under Section 138 NI Act or Section 25 PSSA before a Metropolitan Magistrate, the trial judge can refer the pending dispute to an upcoming National Lok Adalat session under Section 20(1) of the LSA Act, provided there is a reasonable possibility of amicable settlement. In this scenario, attending the Lok Adalat session allows the borrower to close the ongoing court case permanently without facing a prolonged, stressful trial.
                  </p>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
                Borrowers must also remain vigilant against deceptive tactics deployed by third-party recovery agencies. Unscrupulous recovery agents frequently forge simulated &quot;Lok Adalat Final Summons&quot; on WhatsApp, complete with fake police logos, fictitious advocate stamps, and urgent countdown timers threatening arrest within 24 hours. A legitimate Lok Adalat notice always contains an authentic Pre-Litigation Case (PLC) Number, clearly names the District Legal Services Authority or Taluk Legal Services Committee, specifies the exact physical courtroom within the District Court complex, and provides official contact details of the court registry.
              </p>
            </section>

            {/* Section 3: Attendance Rules, Zero Coercion & Arrest Myths Debunked */}
            <section id="attendance-rules-arrest-myths-debunked" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldX className="w-4 h-4 text-rose-600" />
                <span>3. Voluntary Attendance, Zero Coercion &amp; Arrest Myths Debunked</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Is Lok Adalat Attendance Mandatory? Debunking Police Powers and Arrest Threats
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
                The most pervasive myth spread by aggressive recovery tele-callers is that ignoring a Lok Adalat notice constitutes contempt of court, which will trigger immediate non-bailable arrest warrants (NBWs) or police visits to the borrower&apos;s residence. This threat is completely baseless and legally impossible under Indian jurisprudence.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
                Under the <strong>Legal Services Authorities Act, 1987</strong>, attendance at a pre-litigation Lok Adalat is <strong>100% voluntary</strong>. Section 20(3) explicitly mandates that the Lok Adalat bench shall proceed to dispose of any reference only with the consent and willing participation of both parties. If a borrower chooses not to appear on the scheduled date, the Presiding Officer has zero statutory authority to issue bailable warrants, non-bailable warrants, police summons, or property attachment directives. The bench simply marks the pre-litigation case record with the standard administrative notation: <em>&quot;Matter Disposed of as Unsettled / Returned to Originating Institution.&quot;</em>
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
                Following non-appearance at a pre-litigation Lok Adalat, the legal status of the debt reverts entirely to the status quo ante. The bank retains its standard civil remedies—such as issuing statutory legal notices or filing civil suits—but suffers no advantage, while the borrower suffers no legal disadvantage or judicial censure. However, actively choosing to attend Lok Adalat is overwhelmingly beneficial for borrowers because it shifts the locus of negotiation away from abusive third-party recovery call centers directly into a regulated judicial forum where senior bank decision-makers possess explicit institutional mandates to grant large settlement discounts.
              </p>
            </section>

            {/* Section 4: Zero Court Fees, Cost Efficiency & Full Refund Mechanics */}
            <section id="zero-court-fee-financial-advantages" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Percent className="w-4 h-4 text-emerald-600" />
                <span>4. Zero Court Fees, Cost Efficiency &amp; Full Refund Mechanics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Financial Architecture: Zero Court Fees and 100% Court Fee Refund Protections
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
                Traditional civil litigation in India is notorious for prohibitive legal costs, mandatory ad-valorem court fees (often ranging between 5% and 10% of the disputed claim amount), process fees, and advocate retainers that compound over years. Lok Adalat eliminates these financial barriers completely through an extraordinary statutory cost framework.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
                Under the regulations governing National Lok Adalats, <strong>zero court fees</strong> are payable by either the borrower or the financial institution for initiating, presenting, or concluding a pre-litigation conciliation. There are no stamp duty levies, registry charges, or procedural application costs. Both parties enter the forum completely free of administrative friction, ensuring that every rupee committed goes directly toward reducing the core debt rather than paying judicial taxes.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
                Furthermore, in cases where a formal lawsuit was already actively pending before a regular Civil Court, <strong>Section 21(1) of the Legal Services Authorities Act, 1987</strong>, read in conjunction with <strong>Section 16 of the Court Fees Act, 1870</strong>, provides a massive financial incentive:
              </p>

              <div className="border border-emerald-200 rounded-xl p-5 bg-emerald-50/60 my-5 text-xs sm:text-sm text-emerald-950 leading-relaxed">
                <div className="font-bold flex items-center gap-2 text-emerald-900 mb-2">
                  <CheckCircle className="w-4 h-4 text-emerald-700" />
                  <span>Statutory Court Fee Refund Mandate</span>
                </div>
                <p>
                  Where any dispute pending before a court is referred to and successfully settled in a Lok Adalat under the provisions of the Legal Services Authorities Act, the court fee paid in such suit shall be refunded in the manner provided under the Court Fees Act, 1870. The court registry issues a formal Court Fee Refund Certificate authorizing 100% reimbursement to the plaintiff, significantly lowering the bank&apos;s litigation sunk costs and making them far more receptive to granting large principal waivers.
                </p>
              </div>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="infographic-resolution-blueprint" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>5. Visual Resolution Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                National Lok Adalat Loan Settlement Workflow &amp; Conciliation Flow
              </h2>
              
              <div className="my-6 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-50">
                <img
                  src="/images/infographics/lok-adalat-me-loan-settlement-kaise-kare.jpg"
                  alt="National Lok Adalat Loan Settlement Process, DLSA Conciliation Roadmap and Section 21 Award Workflow"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-slate-900 text-white text-xs leading-relaxed">
                  <span className="font-bold text-blue-400">Figure 1.1: </span>
                  Comprehensive statutory roadmap of the National Lok Adalat debt settlement process in India: from DLSA pre-litigation notice receipt, conciliation hearing before the judicial bench, on-the-spot OTS negotiation with senior bank managers, to the pronouncement of an unappealable Section 21 Civil Court Decree and ₹0 No Dues Certificate.
                </div>
              </div>
            </section>

            {/* Section 6: Spot Negotiation Strategy & NPV Formula */}
            <section id="on-the-spot-negotiation-npv-haircut" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>6. On-the-Spot Negotiation Strategy &amp; Net Present Value (NPV) Formula</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                How to Secure the Highest Haircut on the Spot: Bank NPA Accounting &amp; NPV Valuation
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
                Securing an aggressive 40% to 75% debt haircut at Lok Adalat is not a matter of emotional pleading; it is an analytical exercise rooted in banking regulations and asset classification rules established by the Reserve Bank of India. To negotiate effectively before the Lok Adalat bench, borrowers must understand how commercial banks evaluate non-performing assets on their balance sheets.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
                Under the <strong>RBI Master Directions on Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP)</strong>, once an unsecured loan defaults past 90 days, it is classified as a Non-Performing Asset (Sub-Standard). If the default extends past 12 months, it deteriorates into a Doubtful Asset (D1, D2, D3), requiring the bank to lock up between 25% and 100% of the loan amount as capital provisioning from its own quarterly operating profits. For unsecured credit, banks must maintain 100% provisioning against Loss Assets.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
                During National Lok Adalat sessions, bank zonal credit committees and Stressed Asset Resolution Branch (SARB) officers are under tremendous institutional pressure to liquidate legacy NPAs, reverse costly provisioning reserves, and recover liquid capital without spending lakhs on private litigation advocates. To justify a deep settlement haircut to their internal audit teams and the Central Vigilance Commission (CVC), bank officers utilize the <strong>Net Present Value (NPV) Recovery Valuation Formula</strong>:
              </p>

              {/* Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated recoveries, r is the discount rate, and deductions account for 3–5 years of court friction and capital locked in NPA provisions.
                </p>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
                When a borrower presents a documented hardship dossier demonstrating genuine insolvency—such as medical emergency invoices, involuntary employment termination letters, salary cuts, or audited business winding-up filings—the bank&apos;s recovery officers recognize that pursuing civil litigation will yield an NPV far lower than an immediate cash compromise. Consequently, banks systematically agree to:
              </p>
              <ul className="space-y-2 mb-4 text-sm sm:text-base text-slate-700 list-disc list-inside">
                <li><strong>100% Complete Waiver:</strong> Total elimination of accumulated penal interest, compounding overdue interest, late payment fines, cheque bounce fees, and legal notice levies.</li>
                <li><strong>20% to 50% Principal Haircut:</strong> Direct reduction of the original disbursed principal loan balance based on NPA aging and documented borrower hardship.</li>
                <li><strong>Flexible Payment Windows:</strong> Sanctioning either a lump-sum spot clearance or a structured 2 to 3-month milestone installment schedule.</li>
              </ul>
            </section>

            {/* Section 7: Step-by-Step Hearing Day Playbook */}
            <section id="step-by-step-hearing-day-playbook" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>7. Step-by-Step Lok Adalat Hearing Day Playbook</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                The Lok Adalat Hearing Day Playbook: From Court Entry to Final Decree
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
                Navigating the physical District Court complex on the day of a National Lok Adalat requires a clear, methodical action plan. The conciliation process follows five distinct procedural phases:
              </p>

              <div className="space-y-4 my-6">
                <div className="border border-slate-200 rounded-xl p-5 bg-white shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-bold">1</span>
                    <span>Registry Verification &amp; Bench Allocation</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Arrive at the designated District Court Complex by 9:30 AM. Check the master display board or DLSA help desk to locate the specific Lok Adalat Bench assigned to your lending bank (e.g., Bench No. 4 for SBI, Bench No. 7 for HDFC Bank/ICICI Bank). Present your notice and obtain the daily cause list serial number.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-5 bg-white shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-bold">2</span>
                    <span>Direct Conciliation with Senior Bank Officers</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Prior to formally presenting before the Judicial Bench, meet directly with the bank&apos;s authorized Stressed Asset Manager or Chief Manager seated at the dedicated bank resolution desk. Present your financial hardship dossier, demonstrate your current genuine repayment capacity, and propose a concrete OTS settlement figure (e.g., 30%–45% of total ledger demand).
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-5 bg-white shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-bold">3</span>
                    <span>Judicial Conciliation Before the Lok Adalat Bench</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Once an initial agreement or negotiation gap is established, the matter is called before the Presiding Judge. The judge reviews the loan ledger, questions the bank on its penal interest inflation, evaluates the borrower&apos;s hardship, and actively persuades the bank manager to bridge the financial gap and approve a fair, realistic settlement amount.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-5 bg-white shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-bold">4</span>
                    <span>Drafting and Signing the Joint Settlement Memo</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    When terms are finalized, a formal Joint Statement of Compromise (Settlement Memo) is drafted. Ensure that the document explicitly records: the exact agreed compromise sum, full waiver of all balance dues, specific payment due dates, account IFSC/virtual account details, and a clear covenant for withdrawal of all pending court complaints.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-5 bg-white shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-bold">5</span>
                    <span>Pronouncement of the Statutory Lok Adalat Award</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The Presiding Judicial Officer and co-member sign and seal the formal Lok Adalat Award. Certified copies of the Award are handed over to both the borrower and the bank on the spot, providing permanent, unassailable legal closure.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Section 21 Award Decree: Statutory Finality & Non-Appealability */}
            <section id="lok-adalat-award-decree-finality" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                <span>8. Section 21 Award Decree: Statutory Finality &amp; Non-Appealability</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                The Legal Force of Section 21: Why Lok Adalat Awards Cannot Be Appealed
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
                One of the most powerful legal safeguards of settling a loan through Lok Adalat is the absolute statutory finality conferred upon the compromise agreement. Unlike informal bank settlement letters that can occasionally be disputed or mismanaged by changing branch staff, a Lok Adalat settlement carries the full weight of a judicial decree.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
                Under <strong>Section 21(1) of the Legal Services Authorities Act, 1987</strong>, every award of the Lok Adalat is deemed to be a decree of a Civil Court or, as the case may be, an order of any other court. Furthermore, <strong>Section 21(2)</strong> categorically establishes that every award made by a Lok Adalat shall be final and binding on all the parties to the dispute, and <strong>no appeal shall lie to any court against the award</strong>.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
                This statutory bar on appeals is reinforced by <strong>Section 96(3) of the Code of Civil Procedure (CPC), 1908</strong>, which mandates that no appeal shall lie from a decree passed by the court with the consent of parties. The Supreme Court of India has repeatedly upheld this doctrine (notably in <em>State of Punjab &amp; Anr. v. Jalour Singh &amp; Ors.</em> and <em>PT Thomas v. Thomas Job</em>), holding that a Lok Adalat award can only be challenged in extraordinarily rare instances of proven criminal fraud via a writ petition under Article 226/227 of the Constitution. For all practical commercial purposes, once the Lok Adalat decree is sealed, the bank is permanently barred from reopening the loan, demanding residual balances, or reviving recovery litigation.
              </p>
            </section>

            {/* Section 9: Sanction Letter Audit, ₹0 NDC & Credit Score Rehabilitation */}
            <section id="sanction-letter-audit-ndc-cibil-recovery" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>9. Sanction Letter Audit, ₹0 NDC &amp; Credit Score Rehabilitation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Post-Settlement Protocols: RBI 30-Day NDC Mandate and CIBIL Trajectory
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
                Concluding the Lok Adalat hearing is only the first part of complete debt freedom; executing flawless post-settlement compliance is equally vital. Borrowers must follow strict verification protocols when remitting the agreed settlement funds:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-6 space-y-3">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  Essential Post-Settlement Execution Checklist:
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Direct Loan Account Remittance:</strong> Never pay settlement funds in cash to individual recovery agents or transfer to personal UPI IDs. Remit funds directly into your specific loan account number via RTGS/NEFT/IMPS or via a crossed Account Payee Demand Draft drawn in favour of the bank.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Preserve Transaction Receipts:</strong> Retain bank deposit counterfoils, RTGS UTR transaction slips, and digital transfer confirmations alongside the certified copy of the Lok Adalat Award.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Mandatory 30-Day NDC Delivery:</strong> Under <strong>RBI Circular RBI/2023-24/60 (Responsible Lending Conduct)</strong>, all regulated commercial banks and NBFCs are statutorily mandated to issue a formal <strong>No Dues Certificate (NDC) / Loan Closure Certificate</strong> within <strong>30 calendar days</strong> of settlement clearance. Delays beyond 30 days obligate the lender to pay mandatory compensation of <strong>₹5,000 per day</strong> directly to the borrower.</span>
                  </li>
                </ul>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
                Regarding credit bureau reporting, settling a loan for less than the total outstanding balance causes the bank to report the account status as &apos;Settled&apos; or &apos;Post-Lok Adalat Settled&apos; to CIBIL, Experian, Equifax, and CRIF High Mark, reflecting an outstanding balance of ₹0. While a &apos;Settled&apos; status results in an immediate credit score adjustment of 50 to 100 points, it instantly halts destructive Days Past Due (DPD) compounding. By obtaining a secured credit card against a small fixed deposit, maintaining credit utilization below 30%, and ensuring flawless on-time repayments, borrowers systematically rebuild their credit score back to 750+ within 12 to 24 months.
              </p>
            </section>

            {/* Section 10: Comparative Matrix & Legal Advocacy */}
            <section id="comparative-resolution-matrix" className="scroll-mt-24 mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4" />
                <span>10. Comparative Resolution Matrix &amp; Professional Legal Advocacy</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Comparing Resolution Channels: Unassisted Borrowers vs. Recovery Agencies vs. SettleLoans
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
                Understanding how different approaches impact settlement outcomes at National Lok Adalat is critical for achieving optimal financial relief. The comparative matrix below highlights key structural differences:
              </p>

              {/* 4-sided bordered table */}
              <div className="overflow-x-auto my-6">
                <table>
                  <thead>
                    <tr>
                      <th>Resolution Parameter</th>
                      <th>Unassisted Borrower</th>
                      <th>Third-Party Recovery Agency</th>
                      <th>SettleLoans Legal Representation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Legal Representation Level</td>
                      <td>Self-representation without procedural expertise</td>
                      <td>Tele-callers lacking legal authority</td>
                      <td>Empanelled Senior Banking Advocates</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Average Haircut Achieved</td>
                      <td>15% – 30% (Limited Interest Waiver)</td>
                      <td>0% – 15% (Often Misleading / Unapproved)</td>
                      <td>40% – 75% Principal &amp; Total Charge Waiver</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Harassment Protection</td>
                      <td>None; persistent calls and home visits continue</td>
                      <td>Aggressive, intrusive collection tactics</td>
                      <td>Immediate Cease-and-Desist Legal Notices</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Hardship Dossier Preparation</td>
                      <td>Unstructured; frequently rejected by bank</td>
                      <td>Not provided</td>
                      <td>Forensic Audit &amp; CVC-Compliant Hardship File</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Award Text &amp; Decree Audit</td>
                      <td>Unverified; risk of open liabilities</td>
                      <td>No legal verification</td>
                      <td>Meticulous Section 21 Award &amp; Decree Forensics</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Post-Payment NDC Guarantee</td>
                      <td>Frequent administrative delays by branch</td>
                      <td>Zero post-payment support</td>
                      <td>Enforced 30-Day RBI NDC &amp; CIBIL Bureau Update</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                Expert Legal Representation for National Lok Adalat Debt Resolution
              </h3>
              <p className="text-slate-700 leading-relaxed mb-6 text-sm sm:text-base">
                While hiring a lawyer to attend Lok Adalat is not mandatory by statute, navigating aggressive bank recovery committees, complex NPV valuation calculations, and judicial decree drafting requires specialized expertise. SettleLoans provides complete advocate-led representation, preparing your legal defense, stopping recovery harassment, and securing maximum settlement haircuts with unassailable court decrees.
              </p>
              
              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Comprehensive FAQ Accordion */}
            <section id="faqs" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>11. Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                Frequently Asked Questions on Lok Adalat Loan Settlement in India
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index: number) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="border border-slate-200 rounded-2xl overflow-hidden mb-4 transition-all duration-200 hover:border-slate-300 bg-white shadow-sm"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full p-5 md:p-6 flex justify-between items-center text-left focus:outline-none gap-4"
                        aria-expanded={isOpen}
                      >
                        <span className="text-base sm:text-lg md:text-xl font-bold text-slate-900 leading-snug">
                          {faq.question}
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
                        <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 5 Official Regulatory Links */}
            <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8">
              <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-[#1F5EFF]" />
                <span>Official Statutory &amp; Regulatory References</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between"
                >
                  <span className="font-semibold text-slate-800">National Legal Services Authority (NALSA) - Lok Adalat Guidelines</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between"
                >
                  <span className="font-semibold text-slate-800">RBI Master Directions on Compromise Settlements &amp; Technical Write-offs</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between"
                >
                  <span className="font-semibold text-slate-800">Legal Services Authorities Act, 1987 (India Code Official Act)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Grievance Redressal)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between"
                >
                  <span className="font-semibold text-slate-800">Supreme Court of India Jurisprudence on Lok Adalat Decrees</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Loan Settlement &amp; Legal Defense Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Lok Adalat Notice Guide
                </Link>
                <Link
                  href="/sbi-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  SBI Loan Settlement
                </Link>
                <Link
                  href="/hdfc-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  HDFC Loan Settlement
                </Link>
                <Link
                  href="/icici-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  ICICI Loan Settlement
                </Link>
                <Link
                  href="/axis-bank-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Axis Bank Settlement
                </Link>
                <Link
                  href="/bank-of-baroda-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank of Baroda Settlement
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Rules
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
                  Loan Default Legal Rights
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
          <aside className="w-full sticky top-24 space-y-6">
            
            {/* Author Bio Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Link href="/authors/ashish-jhangra" className="w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-lg hover:opacity-90 transition-opacity">
                  AJ
                </Link>
                <div>
                  <Link href="/authors/ashish-jhangra" className="font-bold text-slate-900 text-sm hover:text-[#1F5EFF] transition-colors block">
                    Ashish Jhangra
                  </Link>
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Specialist in National Lok Adalat conciliation procedures, RBI compromise frameworks, DLSA pre-litigation defense, and NPA recovery valuation forensics with over a decade of consumer advocacy.
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Verified Legal Author</span>
                </span>
                <Link href="/authors/ashish-jhangra" className="text-[#1F5EFF] font-semibold hover:underline">
                  View Profile →
                </Link>
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Lok Adalat Legal Defense</span>
              </div>
              <h4 className="font-bold text-base text-white mb-2">Received a Lok Adalat Notice?</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Halt unlawful recovery harassment, prepare a bulletproof financial hardship file, and negotiate a formal 40%–75% debt haircut directly with senior bank managers.
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
                Statutory Protections
              </h4>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>100% NALSA &amp; LSA Act Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Confidential Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Section 21 Binding Court Decree</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Advocate-Led Conciliation Defense</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
