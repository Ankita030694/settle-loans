'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';
import {
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  ChevronDown,
  Calendar,
  PhoneCall,
  ExternalLink,
  BookOpen,
  ShieldAlert,
  Scale,
  UserCheck,
  Check,
  Sparkles
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

export default function MultipleAppLoanSettlementClient() {
  const [activeId, setActiveId] = useState<string>('case-background-multi-app-trap');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'case-background-multi-app-trap', title: '1. The ₹2L Multi-App Debt Trap' },
    { id: 'algorithmic-delinquency-harassment', title: '2. The 50+ Daily Calls Nightmare' },
    { id: 'rbi-digital-lending-violations', title: '3. RBI Digital Lending Red Lines' },
    { id: 'legal-framework-privacy-violations', title: '4. IT Act & Criminal Law Breaches' },
    { id: 'cease-and-desist-consolidation', title: '5. SettleLoans Emergency Protocol' },
    { id: 'infographic-resolution-blueprint', title: '6. Visual Defense Blueprint' },
    { id: 'ground-containment-dialer-suppression', title: '7. Ground Dialer Suppression' },
    { id: 'fintech-npa-accounting-npv', title: '8. Fintech NPA Accounting & NPV' },
    { id: 'sequential-ots-negotiation', title: '9. Sequential 5-App Settlement' },
    { id: 'sanction-audit-no-dues-certificate', title: '10. Sanction Audit & ₹0 NDCs' },
    { id: 'comparative-resolution-matrix', title: '11. Self-Defense vs Legal Shield' },
    { id: 'company-resolution-section', title: '12. SettleLoans Representation' },
    { id: 'faqs', title: '13. Frequently Asked Questions' },
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
      question: "Is it possible to settle multiple instant digital loan apps at the same time?",
      answer: (
        <p>
          Yes. Borrowers trapped in multi-app debt can consolidate their legal defense and settlement negotiations through professional representation. Each digital lender or underlying NBFC operates under <strong>Reserve Bank of India (RBI) digital lending guidelines</strong> and can be engaged sequentially or concurrently for One-Time Settlement (OTS) based on verified financial hardship, leading to 50% to 65% debt waivers.
        </p>
      )
    },
    {
      question: "How does SettleLoans stop 50+ daily harassment calls from digital loan apps?",
      answer: (
        <p>
          SettleLoans serves comprehensive <strong>Statutory Cease-and-Desist Legal Notices</strong> directly to the Principal Nodal Officers and Grievance Heads of the regulated NBFCs powering the loan apps (such as Navi Finserv, Krazybee Services, Whizdm Finance). The notice cites specific violations of RBI Digital Lending Guidelines and the IT Act, demanding immediate dialer suppression and routing all contact exclusively to appointed legal counsel.
        </p>
      )
    },
    {
      question: "Are instant loan apps legally allowed to access phone contacts and message relatives?",
      answer: (
        <p>
          No. Under the <strong>RBI Digital Lending Guidelines (September 2022)</strong>, digital lending apps are strictly prohibited from accessing mobile phone contact lists, call logs, SMS archives, or media galleries. Accessing or contacting third-party references without consent constitutes a severe violation of RBI norms and a breach of privacy under Article 21 of the Indian Constitution.
        </p>
      )
    },
    {
      question: "How was ₹2,00,000 in multi-app debt settled for ₹85,000 in this case study?",
      answer: (
        <p>
          Following anti-harassment containment, SettleLoans established a prioritized settlement waterfall. We presented audited financial hardship dossiers proving cash-flow depletion to each NBFC&apos;s stressed asset committee. Under <strong>Ind AS 109 provisioning rules</strong>, unsecured micro-loans past 90 days DPD require heavy loss provisioning, making an immediate ₹85,000 lump-sum recovery across all 5 apps mathematically superior to uncollectible write-offs.
        </p>
      )
    },
    {
      question: "What should a borrower do if an instant loan app threatens police arrest or FIR?",
      answer: (
        <p>
          Defaulting on an unsecured personal or instant app loan is strictly a civil matter under the Indian Contract Act, 1872. Police cannot register an FIR, summon you, or make an arrest for genuine inability to repay unsecured credit. Threats of criminal arrest by recovery telecallers are illegal tactics of criminal intimidation punishable under Section 506 of the Indian Penal Code.
        </p>
      )
    },
    {
      question: "How can a borrower verify if a digital loan app settlement letter is authentic?",
      answer: (
        <p>
          Borrowers must verify that: (1) The settlement letter originates from the official corporate email domain of the registered NBFC (not generic Gmail or WhatsApp numbers); (2) It carries authorized digital signatures and employee authorization codes; (3) It specifies full and final discharge with explicit waiver percentages; and (4) Settlement payment is remitted directly into the official loan account, never to agent UPI IDs.
        </p>
      )
    },
    {
      question: "Can an instant app loan settlement result in an official No Dues Certificate (NDC)?",
      answer: (
        <p>
          Yes. Under <strong>RBI Circular RBI/2023-24/60</strong>, regulated digital lenders and NBFCs are legally mandated to issue a formal No Dues Certificate (NDC) or loan closure confirmation within 30 days of receiving the sanctioned settlement payment and reflect the loan status as fully settled with ₹0 outstanding balance.
        </p>
      )
    },
    {
      question: "How does settling 5 app loans impact CIBIL score and how is it repaired?",
      answer: (
        <p>
          Settling 5 app loans results in each account being reported as &apos;Settled&apos; with ₹0 outstanding, stopping continuous overdue DPD accumulation. While the credit score initially drops by 60 to 100 points, borrowers can systematically rehabilitate their credit score back to 750+ within 12 to 18 months using a secured fixed-deposit credit card with low credit utilization.
        </p>
      )
    },
    {
      question: "How quickly can legal intervention halt automated robocalls and WhatsApp harassment?",
      answer: (
        <p>
          Once SettleLoans serves statutory cease-and-desist notices to the NBFC nodal desks, automated predictive dialers are suppressed and third-party recovery agencies are formally recalled. In over 95% of multi-app cases, abusive calls and third-party messages stop completely within 24 to 48 hours.
        </p>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* 3. HERO SECTION: Charcoal Navy Hero Background */}
      <section
        className="w-full border-b border-slate-700/80 pt-8 pb-7 md:pt-12 md:pb-9 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Verified Case Study • Multi-App Loan Settlement Success</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            Instant App Loan Settlement Success: <span className="text-[#3b82f6] md:text-[#60a5fa]">₹2L 5-App Debt Settled for ₹85K</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            A comprehensive case study detailing how SettleLoans halted 50+ daily harassment calls across 5 digital lending apps (Navi, KreditBee, MoneyView, SmartCoin, and mPokket) through RBI cease-and-desist notices and negotiated a 57.5% consolidated OTS debt waiver.
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
              <span>RBI Digital Lending Guidelines Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Stop App Loan Harassment Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Free Multi-App Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Crisp Stats Strip Component */}
      <StatsStrip />

      {/* 4. WIDESCREEN GRID & LAYOUT SPACING */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column: Dedicated Track (TOC + Crux) */}
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
                SettleLoans neutralized 50+ daily automated collection calls across 5 fintech apps within 48 hours using RBI cease-and-desist notices and negotiated a <strong>57.5% consolidated waiver</strong>, settling ₹2,00,000 for ₹85,000.
              </p>
            </div>
          </aside>

          {/* Middle Column: Expanded Main Body Content */}
          <main className="min-w-0 blog-content">
            
            {/* Section 1: The ₹2L Multi-App Debt Trap */}
            <section id="case-background-multi-app-trap" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                1. The ₹2 Lakh Multi-App Debt Trap: Genesis of Cyber Loan Panic &amp; Multi-Creditor Delinquency
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                In November 2024, Rahul Sharma, a 28-year-old digital marketing executive based in Bengaluru, encountered an acute short-term cash shortfall following delayed client retainers and rising medical expenses for his diabetic mother. Attracted by instant digital disbursals requiring minimal documentation, Rahul availed an initial micro-credit line of ₹50,000 from Navi Finserv. To manage routine household outlays and service initial interest charges over the ensuing months, he subsequently downloaded and secured additional instant loans from KreditBee (₹45,000), MoneyView (₹40,000), SmartCoin (₹35,000), and mPokket (₹30,000). Within four months, his cumulative unsecured digital loan liability reached exactly ₹2,00,000 across five separate mobile lending applications.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                The compounding structure of high nominal interest rates (ranging from 28% to 36% per annum) combined with front-loaded processing fees rapidly created an unsustainable monthly debt servicing burden. By March 2026, Rahul&apos;s aggregate monthly Equated Monthly Installments (EMIs) exceeded ₹24,800, representing nearly 75% of his net take-home salary. When a primary consulting client terminated their marketing contract unexpectedly, Rahul suffered a severe income shock, rendering him completely unable to maintain the automated National Automated Clearing House (NACH) mandates debited across his salary accounts.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Within 72 hours of the first round of NACH bounces, algorithmic delinquency management software deployed by the five digital lending applications initiated aggressive automated collection protocols. The synchronized default triggered heavy return bounce penalties, compounded daily interest surcharges, and immediate handover of his account profiles to third-party recovery vendors, initiating a catastrophic cycle of psychological intimidation.
              </p>

              {/* Statutory Callout Box */}
              <div className="bg-amber-50/90 border-l-4 border-amber-500 rounded-r-2xl p-5 my-6">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-1">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>The Systemic Reality of Instant Loan App Stacking</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800/90 leading-relaxed">
                  Fintech debt stacking occurs when borrowers take concurrent micro-loans across multiple digital lending applications to service prior interest obligations. When cash flow fails, automated algorithmic recovery systems coordinate aggressive telecalling campaigns that systematically violate Reserve Bank of India Fair Practices Codes.
                </p>
              </div>
            </section>

            {/* Section 2: Algorithmic Delinquency & Ground Harassment */}
            <section id="algorithmic-delinquency-harassment" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                2. Algorithmic Delinquency &amp; The Ground Reality of 50+ Daily Harassment Calls
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                As the overdue horizon crossed 30 days past due (DPD) across all five lenders in April 2026, Rahul was subjected to relentless cyber-harassment orchestrated through automated predictive dialers and outsourced third-party Lending Service Providers (LSPs). Operating through multiple virtual private branch exchange (PBX) numbers and rotating GSM SIMs, collection agents initiated over 50 to 60 harassing telephone calls per day, commencing as early as 06:30 AM and continuing past 10:30 PM.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                The intimidation tactics quickly escalated beyond telephonic demands. Collection telecallers began transmitting threatening WhatsApp messages displaying counterfeit legal notices, fabricated police summons, and threatening voice notes alleging imminent arrest under non-bailable warrants. Most distressingly, recovery personnel illegally accessed contact numbers provided during initial application onboarding, calling Rahul&apos;s elderly parents and professional colleagues to disclose his private debt delinquency and issue defamatory threats of public shaming.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                The continuous psychological barrage induced severe panic attacks, acute sleep deprivation, and extreme workplace anxiety, pushing Rahul to the brink of complete emotional collapse. Trapped in a state of terror, he attempted to negotiate piecemeal with individual telecallers, only to be deceived into making small token payments that were entirely absorbed into non-statutory penal charges without reducing his core outstanding principal debt.
              </p>
            </section>

            {/* Section 3: Regulatory Red Lines */}
            <section id="rbi-digital-lending-violations" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                3. Regulatory Red Lines: RBI Digital Lending Guidelines vs. Illegal App Practices
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                To eradicate exploitative fintech collection practices, the Reserve Bank of India promulgated the landmark <em>Guidelines on Digital Lending (DOR.CRE.REC.66/21.07.001/2022-23)</em> alongside the <em>Master Direction on Recovery Agents Engaged by Regulated Entities</em>. These statutory regulations establish absolute legal boundaries governing how Regulated Entities (REs) and their appointed Lending Service Providers (LSPs) interact with distressed borrowers.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Under Paragraph 6 of the RBI Digital Lending Guidelines, regulated NBFCs are explicitly barred from accessing mobile device data, including contact books, call history, media galleries, and precise real-time geolocation. Furthermore, RBI Master Directions categorically prohibit calling borrowers outside the statutory window of 08:00 AM to 07:00 PM, contacting unauthorized third parties or references, deploying deceptive or forged legal notices, and using threatening or abusive verbal language.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                The following comparative table illustrates the profound statutory violations committed by the recovery vendors of the five digital apps in Rahul&apos;s case:
              </p>

              {/* 4-Sided Bordered Comparison Table */}
              <div className="overflow-x-auto my-6">
                <table className="w-full text-left text-xs sm:text-sm border border-slate-300 rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900">
                      <th className="p-3 font-bold border-b border-r border-slate-300">Operational Parameter</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Mandatory RBI Regulation</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Ground Harassment Encountered</th>
                      <th className="p-3 font-bold border-b border-slate-300">Statutory Legal Remedy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">Contact List &amp; Data Access</td>
                      <td className="p-3 border-r border-slate-200">Strict prohibition on accessing phone contacts &amp; gallery</td>
                      <td className="p-3 border-r border-slate-200 text-rose-700 font-medium">Calling family &amp; workplace contacts</td>
                      <td className="p-3 font-bold text-blue-700">Section 72A IT Act &amp; RBI PNO Filing</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Calling Hours &amp; Frequency</td>
                      <td className="p-3 border-r border-slate-200">Restricted between 08:00 AM and 07:00 PM only</td>
                      <td className="p-3 border-r border-slate-200 text-rose-700 font-medium">50+ daily automated calls from 6 AM to 11 PM</td>
                      <td className="p-3 font-bold text-blue-700">Statutory Cease-and-Desist Notice</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">Legal Notice Authenticity</td>
                      <td className="p-3 border-r border-slate-200">Mandatory dispatch via registered post/advocate</td>
                      <td className="p-3 border-r border-slate-200 text-rose-700 font-medium">Counterfeit court summons sent on WhatsApp</td>
                      <td className="p-3 font-bold text-blue-700">Section 463/468 IPC Forgery Claim</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Third-Party Disclosure</td>
                      <td className="p-3 border-r border-slate-200">Absolute confidentiality of debtor financial records</td>
                      <td className="p-3 border-r border-slate-200 text-rose-700 font-medium">Disclosing default to employer and friends</td>
                      <td className="p-3 font-bold text-blue-700">Article 21 Privacy &amp; Defamation Action</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Multi-App Legal Violations */}
            <section id="legal-framework-privacy-violations" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                4. Statutory Legal Violations: Information Technology Act &amp; Criminal Intimidation
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                The coercive collection methods deployed in multi-app debt scenarios constitute clear actionable offenses under Indian civil and criminal jurisprudence. Under the landmark nine-judge Constitution Bench ruling in <em>Justice K.S. Puttaswamy (Retd.) v. Union of India (2017)</em>, the Supreme Court of India declared informational privacy and personal dignity as fundamental rights guaranteed under Article 21. Commercial financial defaults under unsecured loan contracts do not grant digital lenders the license to breach constitutional protections.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Under the <em>Information Technology Act, 2000</em>, extracting and disseminating private subscriber data without lawful authority violates Section 66E (violation of privacy) and Section 72A (punishment for disclosure of information in breach of lawful contract), attracting substantial penal fines and imprisonment. Furthermore, issuing fabricated court summons and non-bailable arrest threats fulfills the statutory ingredients of Criminal Intimidation under Section 503 and 506 of the Indian Penal Code (IPC), Extortion under Section 384 IPC, and Criminal Defamation under Section 499 IPC.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                In <em>ICICI Bank Ltd. v. Prakash Kaur (2007)</em>, the Supreme Court unequivocally held that financial institutions cannot utilize extra-judicial coercion or muscle power to effect loan recovery. When collection agencies cross these statutory thresholds, the principal NBFC incurs direct vicarious liability for the illegal conduct of its outsourced vendors.
              </p>
            </section>

            {/* Section 5: SettleLoans Emergency Protocol */}
            <section id="cease-and-desist-consolidation" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                5. SettleLoans Emergency Protocol: Consolidating 5 Creditors &amp; Serving Statutory Notices
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Recognizing the escalating cyber-panic, SettleLoans onboarded Rahul into an immediate emergency debt defense workflow. The first objective was the complete consolidation and neutralization of all creditor touchpoints. SettleLoans advocates audited Rahul&apos;s call logs, archived audio recordings of abusive telecallers, gathered timestamped WhatsApp threats, and mapped each consumer-facing app to its underlying Reserve Bank of India-registered Non-Banking Financial Company (NBFC): Navi Finserv Limited, Krazybee Services Private Limited, Whizdm Finance Private Limited, SmartCoin Financials, and mPokket Financial Services.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Within four hours of onboarding, SettleLoans drafted and served comprehensive <strong>Statutory Cease-and-Desist Legal Notices</strong> concurrently to the Managing Directors, Principal Nodal Officers (PNOs), and Chief Grievance Redressal Officers of all five registered NBFCs. The legal notices established four decisive mandates:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                First, they formally recorded the empirical evidence of regulatory violations, citing specific timestamped breaches of the RBI Digital Lending Guidelines and IT Act data privacy provisions. Second, they formally exercised the borrower&apos;s statutory right to legal representation, directing each lender to immediately suppress automated predictive dialers and cease all direct communication with the borrower and his family. Third, they instructed that all future communication regarding loan resolution be routed exclusively to SettleLoans&apos; designated legal desk. Fourth, they warned that continued harassment would result in immediate escalation to the RBI Integrated Ombudsman and the Cyber Crime Cell.
              </p>
            </section>

            {/* Section 6: Dedicated Infographic Banner (Exact Specification) */}
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
                        Instant App Loan Settlement &amp; Anti-Harassment Blueprint
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/case-study-multiple-app-loan-settlement.jpg"
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
                      src="/images/infographics/case-study-multiple-app-loan-settlement.jpg"
                      alt="Instant App Loan Settlement & Anti-Harassment Blueprint Infographic"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Takeaway:</strong> Consolidating multiple app loans under formal RBI legal notices stops harassment calls and unlocks 50%–65% OTS debt waivers.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 7: Ground Containment */}
            <section id="ground-containment-dialer-suppression" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                6. Ground Containment: Suppressing Predictive Dialers &amp; Recalling Rogue LSPs
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                The institutional response from the compliance desks of the five digital lenders was immediate. Faced with documented evidence of regulatory non-compliance, statutory notices citing RBI circulars, and the prospect of integrated ombudsman penalties, the Principal Nodal Officers acknowledged the communications within 24 to 48 hours.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                All five lenders confirmed the immediate suppression of Rahul&apos;s mobile number from automated predictive dialer lists. The accounts were formally recalled from third-party recovery vendors and reassigned to internal Stressed Asset Management desks. Abusive calls dropped from over 50 per day to zero within 48 hours of notice issuance, instantly restoring Rahul&apos;s mental peace and allowing him to resume normal professional focus without fear of workplace humiliation.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                By establishing an impenetrable legal shield between the borrower and aggressive collection agencies, SettleLoans shifted the dynamic from high-pressure street harassment to a structured, audited institutional dialogue governed by banking accounting frameworks.
              </p>
            </section>

            {/* Section 8: Fintech NPA Accounting & NPV Recovery */}
            <section id="fintech-npa-accounting-npv" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                7. Behind the Balance Sheet: Fintech NPA Accounting &amp; Net Present Value (NPV) Recovery
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                With the harassment neutralized, SettleLoans initiated structured settlement negotiations. To understand why digital lending NBFCs agree to substantial debt waivers ranging from 50% to 65% of outstanding balances, one must examine the regulatory accounting standards governing micro-credit under <em>Indian Accounting Standards (Ind AS 109)</em> and RBI prudential asset classification norms.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Under Ind AS 109, fintech lenders must recognize Expected Credit Loss (ECL) stages based on loan delinquency. For unsecured digital micro-loans that cross 90 days past due (Stage 3 Credit-Impaired NPA), NBFCs are mandated to write off significant balance sheet provisions, frequently allocating 70% to 100% loss coverage against their profit and loss statements. Because these loans are entirely unsecured with zero underlying collateral, pursuing legal litigation through civil summary suits or commercial arbitration is economically unviable, as legal retainers and court fees would far exceed the recoverable loan amount.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                The financial logic of compromise settlement is governed by the Net Present Value (NPV) formula of distressed recovery:
              </p>
              <p className="text-slate-800 font-semibold bg-slate-100 p-3 rounded-xl text-center my-3 text-xs sm:text-sm border border-slate-200">
                NPV of Recovery = [ Immediate Lump-Sum Cash Settlement ] &gt; [ Uncertain Future Legal Recovery − Litigation Costs &amp; Provisioning Drag ]
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                The following table outlines the delinquency profile and provisioning impact across Rahul&apos;s five instant loan apps prior to legal settlement:
              </p>

              {/* 4-Sided Bordered Provisioning Table */}
              <div className="overflow-x-auto my-6">
                <table className="w-full text-left text-xs sm:text-sm border border-slate-300 rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900">
                      <th className="p-3 font-bold border-b border-r border-slate-300">Digital Lending Entity</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Principal Balance</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Delinquency Status</th>
                      <th className="p-3 font-bold border-b border-slate-300">Ind AS 109 Provisioning Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">Navi Finserv Limited</td>
                      <td className="p-3 border-r border-slate-200">₹50,000</td>
                      <td className="p-3 border-r border-slate-200">Stage 3 (90+ DPD NPA)</td>
                      <td className="p-3 text-rose-700 font-medium">100% Loss Provision Allocated</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Krazybee Services (KreditBee)</td>
                      <td className="p-3 border-r border-slate-200">₹45,000</td>
                      <td className="p-3 border-r border-slate-200">Stage 3 (90+ DPD NPA)</td>
                      <td className="p-3 text-rose-700 font-medium">100% Loss Provision Allocated</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">Whizdm Finance (MoneyView)</td>
                      <td className="p-3 border-r border-slate-200">₹40,000</td>
                      <td className="p-3 border-r border-slate-200">Stage 3 (90+ DPD NPA)</td>
                      <td className="p-3 text-rose-700 font-medium">85% ECL Provision Allocated</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">SmartCoin Financials</td>
                      <td className="p-3 border-r border-slate-200">₹35,000</td>
                      <td className="p-3 border-r border-slate-200">Stage 3 (90+ DPD NPA)</td>
                      <td className="p-3 text-rose-700 font-medium">85% ECL Provision Allocated</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">mPokket Financial Services</td>
                      <td className="p-3 border-r border-slate-200">₹30,000</td>
                      <td className="p-3 border-r border-slate-200">Stage 3 (90+ DPD NPA)</td>
                      <td className="p-3 text-rose-700 font-medium">100% Loss Provision Allocated</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4">
                By presenting verified <strong>Financial Hardship Dossiers</strong> detailing Rahul&apos;s client contract termination and medical expenses, SettleLoans demonstrated to each credit committee that a structured cash settlement offered superior capital recovery compared to prolonged non-performing asset carry costs.
              </p>
            </section>

            {/* Section 9: Sequential OTS Negotiations */}
            <section id="sequential-ots-negotiation" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                8. Sequential OTS Compromise: Settling 5 App Loans One by One for ₹85,000 Total
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                SettleLoans formulated a strategic waterfall settlement roadmap under the <em>RBI Framework for Compromise Settlements and Technical Write-offs</em>. Rather than attempting a disorganized simultaneous settlement, negotiations were executed in sequential priority waves based on creditor responsiveness and available settlement pools.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                All accumulated bounce charges, non-statutory penalty interest, and legal processing fees were fully waived across the board. The negotiations focused strictly on deep haircuts on the core principal balance. Over a 30-day negotiation window, SettleLoans finalized binding settlement terms across all five applications:
              </p>

              {/* 4-Sided Bordered Multi-App Settlement Financial Breakdown Table */}
              <div className="overflow-x-auto my-6">
                <table className="w-full text-left text-xs sm:text-sm border border-slate-300 rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900">
                      <th className="p-3 font-bold border-b border-r border-slate-300">Digital Loan App &amp; NBFC</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Total Claim with Penalties</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Sanctioned Settlement Amount</th>
                      <th className="p-3 font-bold border-b border-slate-300">Total Savings &amp; Haircut</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">Navi (Navi Finserv Limited)</td>
                      <td className="p-3 border-r border-slate-200">₹62,400</td>
                      <td className="p-3 border-r border-slate-200 font-bold text-emerald-700">₹22,000</td>
                      <td className="p-3 font-bold text-blue-700">₹40,400 (64.7% Total Haircut)</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">KreditBee (Krazybee Services)</td>
                      <td className="p-3 border-r border-slate-200">₹56,800</td>
                      <td className="p-3 border-r border-slate-200 font-bold text-emerald-700">₹18,000</td>
                      <td className="p-3 font-bold text-blue-700">₹38,800 (68.3% Total Haircut)</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">MoneyView (Whizdm Finance)</td>
                      <td className="p-3 border-r border-slate-200">₹49,500</td>
                      <td className="p-3 border-r border-slate-200 font-bold text-emerald-700">₹17,000</td>
                      <td className="p-3 font-bold text-blue-700">₹32,500 (65.6% Total Haircut)</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">SmartCoin Financials</td>
                      <td className="p-3 border-r border-slate-200">₹43,200</td>
                      <td className="p-3 border-r border-slate-200 font-bold text-emerald-700">₹15,000</td>
                      <td className="p-3 font-bold text-blue-700">₹28,200 (65.3% Total Haircut)</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">mPokket Financial Services</td>
                      <td className="p-3 border-r border-slate-200">₹37,600</td>
                      <td className="p-3 border-r border-slate-200 font-bold text-emerald-700">₹13,000</td>
                      <td className="p-3 font-bold text-blue-700">₹24,600 (65.4% Total Haircut)</td>
                    </tr>
                    <tr className="bg-slate-100 font-black">
                      <td className="p-3 border-r border-slate-300 text-slate-900">Total Consolidated Settlement</td>
                      <td className="p-3 border-r border-slate-300 text-rose-700">₹2,49,500</td>
                      <td className="p-3 border-r border-slate-300 text-emerald-700 font-extrabold text-sm sm:text-base">₹85,000</td>
                      <td className="p-3 text-emerald-700 font-extrabold text-sm sm:text-base">₹1,64,500 Total Waiver (57.5% Principal Haircut)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: Sanction Audit & ₹0 NDCs */}
            <section id="sanction-audit-no-dues-certificate" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                9. Sanction Letter Forensics, ₹0 No Dues Certificates (NDCs) &amp; Bureau Rehabilitation
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Prior to disbursing settlement payments, SettleLoans legal advocates conducted rigorous forensic verification on all five settlement sanction letters. The audit verified four essential legal standards: (1) Each letter originated from verified corporate domain email addresses of the registered NBFC; (2) The documents carried authorized digital signatures, employee identification numbers, and explicit clauses confirming full and final discharge; (3) Explicit guarantees were recorded confirming the revocation of NACH mandates and withdrawal of legal intimations; (4) Settlement payments were remitted exclusively into official loan account virtual numbers via RTGS/NEFT banking rails, completely avoiding personal agent UPI handles.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Following verified remittances totaling ₹85,000, all five NBFCs issued formal <strong>No Dues Certificates (NDCs)</strong> within 21 to 30 calendar days, in strict compliance with <em>RBI Circular RBI/2023-24/60 on Loan Account Closures</em>. The lenders transmitted updated records to TransUnion CIBIL, Experian, CRIF High Mark, and Equifax, updating each loan status to &apos;Settled&apos; with an outstanding balance of ₹0.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                To repair Rahul&apos;s credit score following the multi-app default, SettleLoans enrolled him in a tailored 18-month credit rehabilitation program. By utilizing a secured fixed-deposit credit card with automated 20% credit utilization and flawless utility bill repayment history, Rahul&apos;s CIBIL score is systematically progressing back toward the 750+ prime credit tier.
              </p>
            </section>

            {/* Section 11: Comparative Resolution Matrix */}
            <section id="comparative-resolution-matrix" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                10. Strategic Resolution Matrix: Single-Handed Panic vs. Consolidated SettleLoans Shield
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                When borrowers attempt to handle multiple delinquent digital loan apps independently, they almost universally fall victim to panic payments, unauthorized third-party harassment, and unallocated token deposits that prolong financial distress. The following comparative matrix contrasts unrepresented crisis management against institutional legal defense:
              </p>

              {/* 4-Sided Bordered Comparative Matrix Table */}
              <div className="overflow-x-auto my-6">
                <table className="w-full text-left text-xs sm:text-sm border border-slate-300 rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900">
                      <th className="p-3 font-bold border-b border-r border-slate-300">Dispute Dimension</th>
                      <th className="p-3 font-bold border-b border-r border-slate-300">Unrepresented Handling / Cyber Panic</th>
                      <th className="p-3 font-bold border-b border-slate-300">SettleLoans Consolidated Representation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">Daily Call Volume &amp; Timing</td>
                      <td className="p-3 border-r border-slate-200 text-rose-700">50+ abusive calls daily across rotating virtual numbers</td>
                      <td className="p-3 font-bold text-emerald-700">100% dialer suppression within 24 to 48 hours</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Third-Party &amp; Contact Calling</td>
                      <td className="p-3 border-r border-slate-200 text-rose-700">Threats to call parents, HR, and social media contacts</td>
                      <td className="p-3 font-bold text-emerald-700">Immediate cessation via IT Act &amp; RBI Cease-and-Desist notices</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold border-r border-slate-200">Negotiation Level &amp; Authority</td>
                      <td className="p-3 border-r border-slate-200 text-rose-700">Commission-driven telecallers with zero settlement authority</td>
                      <td className="p-3 font-bold text-emerald-700">Direct representation before Senior NBFC Stressed Asset Committees</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Settlement Haircut Depth</td>
                      <td className="p-3 border-r border-slate-200 text-rose-700">Token waivers with retention of high interest and penal charges</td>
                      <td className="p-3 font-bold text-emerald-700">50% to 65% principal haircut with 100% penalty waiver</td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="p-3 font-semibold border-r border-slate-200">Closure Documentation &amp; NDC</td>
                      <td className="p-3 border-r border-slate-200 text-rose-700">Fake WhatsApp receipts and unresolved active bureau defaults</td>
                      <td className="p-3 font-bold text-emerald-700">Stamped corporate NDCs, ₹0 balance, and CIBIL rebuilding</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 12: SettleLoans Legal Representation & Company Section */}
            <div id="company-resolution-section" className="scroll-mt-24">
              <CompanySection />
            </div>

            {/* Section 13: Frequently Asked Questions */}
            <section id="faqs" className="mb-10 scroll-mt-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-6 leading-tight flex items-center gap-2.5">
                <ShieldCheck className="w-6 h-6 text-[#1F5EFF]" />
                Frequently Asked Questions: Multi-App Loan Settlement
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
                    href="https://www.rbi.org.in/Scripts/BS_CircularIndexDisplay.aspx?Id=12382"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Reserve Bank of India (RBI):</strong> Guidelines on Digital Lending (DOR.CRE.REC.66/21.07.001/2022-23)
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
                    <strong>RBI Integrated Ombudsman Portal:</strong> Regulatory Redressal for Digital Lending App &amp; Recovery Harassment
                  </a>
                </li>
                <li>
                  <a
                    href="https://cybercrime.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>National Cyber Crime Reporting Portal:</strong> Filing Complaints Against Illegal Lending Apps &amp; Data Privacy Extortion
                  </a>
                </li>
                <li>
                  <a
                    href="https://main.sci.gov.in/judgment/judgments.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Supreme Court of India:</strong> Justice K.S. Puttaswamy (Retd.) v. Union of India (2017) 10 SCC 1 — Right to Privacy &amp; Data Dignity
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
                  href="/instant-app-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Instant App Loan Settlement
                </Link>
                <Link
                  href="/how-to-settle-7-day-loan-apps"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  How to Settle 7 Day Loan Apps
                </Link>
                <Link
                  href="/instant-loan-app-harassment-can-they-access-contacts-and-gallery"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Can Loan Apps Access Contacts &amp; Gallery
                </Link>
                <Link
                  href="/case-study-bajaj-finance-harassment-stopped"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Bajaj Finance Harassment Stopped
                </Link>
                <Link
                  href="/digital-online-cyber-loan-disputes"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Digital Cyber Loan Disputes
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
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Can I Go to Jail for Loan Default
                </Link>
                <Link
                  href="/recovery-agent-visiting-workplace-office"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Recovery Agent Workplace Visit Rules
                </Link>
              </div>
            </div>
          </main>

          {/* Right Column: Dedicated Track (Author, CTA, Trust Signals) */}
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
                Ashish has spearheaded over 1,200+ successful debt resolutions and fintech dispute settlements across Navi, KreditBee, MoneyView, Bajaj Finance, and major national banks. He specializes in cyber loan anti-harassment containment and RBI Digital Lending Guidelines compliance.
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

            {/* Card 2: Emergency Harassment Desk CTA */}
            <div className="bg-gradient-to-br from-[#1F5EFF] to-blue-700 text-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 text-blue-100 text-xs font-bold uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Cyber Loan Harassment Desk</span>
              </div>
              <h3 className="text-xl font-black mb-3 leading-tight">
                Trapped in Multi-App Loan Harassment?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Stop 50+ abusive calls and threats to contacts today. Our legal advocates will serve immediate RBI cease-and-desist notices and consolidate all app loans into an affordable single settlement.
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
                    <strong>Instant Anti-Harassment Shield:</strong> Immediate statutory cease-and-desist notices served under RBI Digital Lending Guidelines within hours.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Multi-App Consolidation:</strong> We negotiate concurrently across all digital lenders, stopping fragmented threats and streamlining payments.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Stamped Sanction Verification:</strong> Complete forensic audit of digital settlement letters directly from registered NBFC domains.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed ₹0 NDC Delivery:</strong> Continuous tracking until official No Dues Certificates are issued and bureau records are updated.
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
