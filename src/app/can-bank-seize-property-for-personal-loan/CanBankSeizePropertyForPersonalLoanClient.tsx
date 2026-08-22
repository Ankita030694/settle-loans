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
  HelpCircle,
  Gavel,
  FileWarning,
  CheckSquare,
  FileCheck,
  XCircle,
  Home,
  Car,
  BadgePercent,
  Coins
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

export default function CanBankSeizePropertyForPersonalLoanClient() {
  const [activeId, setActiveId] = useState<string>('legal-reality-unsecured-debt');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'legal-reality-unsecured-debt', title: '1. Legal Reality: Can Banks Seize Property?' },
    { id: 'sarfaesi-act-inapplicability', title: '2. Secured vs Unsecured: SARFAESI Inapplicability' },
    { id: 'recovery-agent-myths', title: '3. Dismantling Recovery Agent Seizure Threats' },
    { id: 'civil-court-attachment-procedure', title: '4. Judicial Attachment: Order 38 & Decrees' },
    { id: 'infographic-action-blueprint', title: '5. Asset Protection Infographic Blueprint' },
    { id: 'section-60-cpc-exemptions', title: '6. Statutory Immunity under Section 60 CPC' },
    { id: 'npv-banking-accounting-math', title: '7. NPA Accounting & NPV Recovery Economics' },
    { id: 'rbi-fair-practices-enforcement', title: '8. Enforcing RBI Anti-Harassment Mandates' },
    { id: 'ots-permanent-clean-exit', title: '9. One-Time Settlement (OTS) Clean Exit' },
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

  const faqs = [
    {
      question: "Can a bank directly seize my house or land for an unpaid personal loan?",
      answer: (
        <p>
          <strong>No. Personal loans are 100% unsecured debts where no property, house, or land is pledged as collateral or mortgaged.</strong> The SARFAESI Act, 2002 does NOT apply to unsecured personal credit. A lending bank or NBFC has zero legal authority to enter your property, seal your premises, change door locks, or conduct an auction without first obtaining a formal money recovery decree from a civil court through a multi-year judicial trial.
        </p>
      )
    },
    {
      question: "Why does the SARFAESI Act, 2002 not apply to personal loans?",
      answer: (
        <p>
          The SARFAESI Act empowers commercial lenders to enforce security interests and take physical possession of assets without court intervention <strong>only when an underlying security interest has been legally created</strong> (such as an equitable mortgage or registered hypothecation charge under Section 2(1)(zf)). Because personal loan agreements do not create any charge or mortgage over any specific asset, SARFAESI provisions are completely inapplicable under Indian law.
        </p>
      )
    },
    {
      question: "Can recovery agents tow away my car or confiscate household items?",
      answer: (
        <p>
          <strong>No, absolutely not. Third-party collection agents have zero judicial power to seize your vehicle, furniture, electronics, or personal belongings.</strong> Any recovery agent who attempts to forcefully enter your residence or tow away a vehicle for an unsecured loan default commits serious criminal offences under Indian law, including Criminal Trespass (Section 441 IPC / Section 329 BNS), Theft (Section 378 IPC / Section 303 BNS), and Extortion (Section 384 IPC / Section 308 BNS).
        </p>
      )
    },
    {
      question: "What is Attachment Before Judgment under Order 38 Rule 5 of CPC?",
      answer: (
        <p>
          Under Order 38 Rule 5 of the Code of Civil Procedure, 1908, a creditor can apply for conditional property attachment during an ongoing civil suit only if they prove to the court with concrete documentary evidence that the defendant is actively attempting to dispose of or fraudulently remove assets outside court jurisdiction to defeat the decree. Indian civil courts apply strict scrutiny and rarely grant Order 38 attachment for routine personal loan defaults.
        </p>
      )
    },
    {
      question: "Which assets are completely protected from attachment under Section 60 of CPC?",
      answer: (
        <p>
          Section 60 of the Code of Civil Procedure, 1908 grants absolute statutory exemption from court attachment for essential assets, including: 1) Necessary wearing apparel, cooking vessels, and bedding; 2) Tools of artisans and agricultural implements; 3) Sole residential house of an agriculturist or laborer; 4) Mandatory portions of salary (the first ₹1,000 plus two-thirds of the remainder are completely exempt); 5) Statutory Employee Provident Fund (EPF), Gratuity, and life insurance policy proceeds.
        </p>
      )
    },
    {
      question: "Can a bank freeze my salary account or attach my entire salary?",
      answer: (
        <p>
          A bank cannot arbitrarily freeze your salary account maintained in another independent financial institution without a formal court decree. If the default occurs with the exact same bank where your salary is deposited, the bank may attempt to exercise a Banker&apos;s Right of Set-Off under Section 171 of the Indian Contract Act. However, in court-directed execution proceedings, Section 60 CPC strictly caps salary attachment, ensuring that the majority of income remains protected for living subsistence.
        </p>
      )
    },
    {
      question: "What legitimate legal steps can a bank take to recover personal loan dues?",
      answer: (
        <p>
          For personal loans, banks can: 1) Report the default to credit information companies (CIBIL, Experian, Equifax), lowering your credit score; 2) Issue formal statutory demand notices; 3) File a Civil Summary Suit under Order 37 of the Code of Civil Procedure, 1908; 4) Initiate Section 138 NI Act or Section 25 PSSA proceedings if cheques or NACH auto-debits bounced; 5) Refer the dispute to National Lok Adalat for an amicable compromise settlement.
        </p>
      )
    },
    {
      question: "Why do banks prefer a One-Time Settlement (OTS) over filing property attachment suits?",
      answer: (
        <p>
          Filing a civil recovery suit in Indian civil courts requires banks to pay upfront ad-valorem court fees (5% to 8% of the claimed sum), incur heavy advocate retainer fees, and endure 3 to 7 years of contested litigation with uncertain recovery. Through Net Present Value (NPV) recovery calculations, banks achieve vastly superior financial recovery by granting a 40% to 70% OTS waiver to recover immediate liquid cash rather than pursuing long civil execution suits.
        </p>
      )
    },
    {
      question: "What should I do if a recovery agent sends a fake property attachment notice on WhatsApp?",
      answer: (
        <p>
          Never make a panic payment. Indian civil courts never serve attachment orders or auction notices over informal WhatsApp chats. Preserve screenshots, document the agent&apos;s phone number and call recordings, and engage SettleLoans advocates to issue a formal Cease &amp; Desist legal notice to the bank&apos;s Principal Nodal Officer and lodge a complaint on the RBI CMS Portal.
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
            Asset Protection &amp; Debt Resolution Guide (2026)
          </div>

          {/* Compact Title / H1 */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            Can Bank Seize Property for Personal Loan in India?{' '}
            <span className="text-[#3b82f6] md:text-[#60a5fa]">Legal Reality &amp; Asset Protection</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Are recovery agents threatening to seize your house, tow your car, or auction your assets for an unpaid personal loan? Discover why personal loans are 100% unsecured, why SARFAESI does not apply, and how Section 60 CPC protects your home.
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
              <span>Updated: August 22, 2026</span>
            </div>
          </div>

          {/* Hero CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-5 rounded-xl shadow-md hover:shadow-blue-500/20 transition-all duration-300 text-xs sm:text-sm group"
            >
              <span>Get Free Asset Protection Evaluation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#sarfaesi-act-inapplicability"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-2.5 px-4 rounded-xl border border-white/20 transition-all duration-300 text-xs sm:text-sm"
            >
              <BookOpen className="w-4 h-4 text-blue-300" />
              <span>View Secured vs Unsecured Matrix</span>
            </a>
          </div>
        </div>
      </section>

      {/* B. Crisp Stats Strip Component */}
      <StatsStrip />

      {/* C. Widescreen 3-Column Grid */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column: Dedicated Track containing Sticky TOC & Summary Crux */}
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

            {/* Quick Crux Summary Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-4 shadow-sm text-xs text-slate-700 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                <span>Quick Crux</span>
              </div>
              <p className="leading-relaxed">
                Personal loans carry <strong>zero collateral</strong>. Banks cannot invoke SARFAESI or seize property without an exhaustive civil court decree lasting 3–7 years.
              </p>
            </div>
          </aside>

          {/* Middle Column: Expanded Readable Main Body */}
          <main className="w-full min-w-0 font-sans text-slate-800 blog-content">
            
            {/* Key Takeaways Box (Top) */}
            <div className="bg-blue-50 border-l-8 border-[#1F5EFF] rounded-r-2xl p-6 md:p-8 mb-10 shadow-sm">
              <div className="flex items-center gap-2 text-[#1F5EFF] font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5" />
                <span>KEY LEGAL TAKEAWAYS: PROPERTY ATTACHMENT &amp; BORROWER RIGHTS</span>
              </div>
              <ul className="space-y-3 text-sm md:text-base text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero Direct Seizure Power:</strong> Unsecured personal loans carry no mortgage or charge. Banks have zero legal right to confiscate your house, car, or furniture without a formal civil court decree.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>SARFAESI Act Is Inapplicable:</strong> The SARFAESI Act, 2002 applies exclusively to secured loans where collateral was pledged. It cannot be used to seize assets for personal loans or credit cards.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Statutory Shield under Section 60 CPC:</strong> The Code of Civil Procedure, 1908 guarantees absolute immunity for residential houses, essential belongings, tools of trade, and salary subsistence portions.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Recovery Agent Threats Constitute Crimes:</strong> Agents claiming they will lock your home, tow your car, or bring police commit criminal intimidation and extortion under Indian penal laws.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>OTS Debt Settlement Eliminates Exposure:</strong> A structured One-Time Settlement (OTS) negotiated via SettleLoans closes the debt permanently at a 40%–70% waiver with a binding No Dues Certificate (NDC).
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="legal-reality-unsecured-debt" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                1. The Core Legal Reality: Can a Bank Attach or Seize Your Property for a Personal Loan?
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                When unexpected financial turmoil strikes—whether due to sudden job termination, severe medical emergencies, or enterprise insolvency—defaulting on a personal loan is one of the most stressful life events a borrower can endure. In this vulnerable state, third-party recovery agents frequently exploit borrowers&apos; lack of legal knowledge by making terrifying claims: that the bank will arrive with local police to seal the borrower&apos;s residential apartment, auction ancestral land, or tow away their family vehicle.
              </p>

              {/* Highlighted Statutory Callout Box */}
              <div className="bg-slate-100 border-l-4 border-[#1F5EFF] p-5 rounded-r-xl my-6">
                <p className="text-sm md:text-base font-semibold text-slate-900 italic">
                  &quot;An unsecured creditor has no proprietary interest or charge over any specific asset of the borrower. The relationship is purely that of a debtor and creditor governed by the Indian Contract Act, 1872. In the absence of an enforceable mortgage or registered charge, no summary recovery or extra-judicial possession of property can be initiated.&quot;
                </p>
                <p className="text-xs text-slate-500 mt-2 font-medium">
                  — Principles of Commercial Jurisprudence &amp; Indian Contract Act, 1872
                </p>
              </div>

              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Let us state the foundational legal reality unequivocally: <strong>A bank or NBFC cannot seize, attach, or auction your immovable or movable property simply because you defaulted on an unsecured personal loan.</strong> Unlike home loans or auto loans, personal loans are extended solely on the basis of your creditworthiness, income verification, and personal promise to repay. You never signed a mortgage deed, never handed over property title deeds, and never hypothecated your vehicle or household assets to the lender.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Under the Indian legal framework, commercial lenders account for the risk of default by charging substantially higher interest rates on unsecured personal loans—ranging from 12% to 36% per annum. This elevated pricing model reflects the reality that the lender has zero security backing the facility. Consequently, if a borrower defaults due to genuine financial distress, the bank cannot take the law into its own hands. Any attachment of property requires an exhaustive, multi-year civil court litigation ending in an enforceable money decree.
              </p>
            </section>

            {/* Section 2 */}
            <section id="sarfaesi-act-inapplicability" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                2. Secured vs. Unsecured Debt: Why the SARFAESI Act, 2002 Does NOT Apply
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                To understand why your property is legally safe, it is essential to examine the statutory framework governing loan recovery in India. When recovery agents threaten property attachment, they often quote the <em>SARFAESI Act (Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002)</em>. However, this statute applies exclusively to secured credit facilities.
              </p>

              {/* 4-Sided Bordered Comparative Table */}
              <div className="overflow-x-auto my-8">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="w-1/4">Legal Dimension</th>
                      <th className="w-3/8">Secured Loans (Home / Auto / LAP)</th>
                      <th className="w-3/8">Unsecured Personal Loans (Your Scenario)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Underlying Collateral</td>
                      <td>Registered equitable mortgage on real estate, or hypothecation on vehicles / machinery.</td>
                      <td className="text-emerald-700 font-semibold">Zero collateral. Issued purely on borrower creditworthiness and promissory note.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SARFAESI Act, 2002 Applicability</td>
                      <td>100% Applicable under Section 13(2) and Section 13(4).</td>
                      <td className="text-emerald-700 font-semibold">0% Applicable. Inoperative because no &quot;security interest&quot; was ever created.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Direct Asset Seizure Power</td>
                      <td>Bank can take possession via District Magistrate (DM) order under Section 14.</td>
                      <td className="text-emerald-700 font-semibold">Zero extra-judicial seizure power. Bank cannot touch any asset directly.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Governing Substantive Law</td>
                      <td>Transfer of Property Act, 1882 &amp; SARFAESI Act, 2002</td>
                      <td>Indian Contract Act, 1872 &amp; Code of Civil Procedure (CPC), 1908</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Legal Recourse for Bank</td>
                      <td>Statutory 60-day demand notice followed by physical auction of mortgaged asset.</td>
                      <td>Civil summary suit for money recovery (Order 37 CPC) or Lok Adalat OTS settlement.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Typical Dispute Resolution</td>
                      <td>Debt Recovery Tribunal (DRT) under Securitisation Appeals.</td>
                      <td>Direct One-Time Settlement (OTS) or Lok Adalat mutual compromise.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 mt-8">
                The Statutory Definition of &quot;Security Interest&quot; under SARFAESI
              </h3>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Under Section 2(1)(zf) of the SARFAESI Act, a &quot;security interest&quot; is defined as any right, title, or interest of any kind upon property created in favour of any secured creditor, including any mortgage, charge, hypothecation, or assignment. Section 13(2) explicitly mandates that enforcement notices can only be served where a security interest exists.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Because personal loan contracts do not establish a security interest over your flat, residential house, agricultural land, or motor vehicle, any recovery agent or collection officer claiming to invoke SARFAESI against your property is making a fraudulent and legally baseless misrepresentation.
              </p>
            </section>

            {/* Section 3 */}
            <section id="recovery-agent-myths" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                3. Dismantling Recovery Agent Extortion: Lies About House Auctions and Car Seizures
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Third-party collection agencies rely almost exclusively on psychological pressure and manufactured panic to coerce payments. Unregulated collection representatives often send fake legal notices formatted to look like court warrants, threatening that &quot;court bailiffs accompanied by police officers will seize movable inventory within 48 hours.&quot;
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                It is crucial to recognize these communications as illegal extortion tactics. In the landmark Supreme Court ruling in <em>ICICI Bank Ltd. v. Prakash Kaur (2007)</em>, the apex court condemned the use of strong-arm tactics and musclemen by financial institutions, ruling that banks are vicariously liable for the illegal conduct of their outsourced recovery agents.
              </p>

              {/* Callout Warning Box */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-sm mb-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  <span>UNLAWFUL RECOVERY TACTICS &amp; RELEVANT PENAL CODES</span>
                </div>
                <p className="text-sm text-amber-900 leading-relaxed">
                  Threatening to seize a borrower&apos;s home without a court order constitutes <strong>Criminal Intimidation (Section 506 IPC / Section 351 BNS)</strong>. Forcibly entering premises or attempting to take movable goods constitutes <strong>Criminal Trespass (Section 441 IPC / Section 329 BNS)</strong> and <strong>Extortion (Section 384 IPC / Section 308 BNS)</strong>.
                </p>
              </div>

              <p className="text-base leading-relaxed mb-5 text-slate-700">
                When a recovery agent arrives at your home or workplace claiming they have the right to inspect or attach your personal belongings, you have the absolute legal right to demand their official Direct Recovery Agent (DRA) accreditation, bank authorization letter, and government identity card. You are under no obligation to allow them inside your residential premises.
              </p>
            </section>

            {/* Section 4 */}
            <section id="civil-court-attachment-procedure" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                4. The Legitimate Legal Attachment Procedure: Civil Summary Suits and Court Decrees
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                While extra-judicial property seizure is completely prohibited, does a lending bank possess any lawful mechanism to attach a borrower&apos;s property? Yes, but only through a rigorous, multi-stage civil judicial trial governed by the <em>Code of Civil Procedure (CPC), 1908</em>. Understanding this judicial process demonstrates why banks rarely attempt property attachment for retail personal loans.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                To execute any attachment, the bank must first institute a formal civil suit for recovery (typically under <strong>Order 37 CPC for Summary Suits</strong>). The civil court serves formal judicial summons upon the borrower. The borrower, represented by legal counsel, enters appearance and files an Application for Leave to Defend, challenging compound interest calculations, unadjusted charges, and documenting genuine financial hardship.
              </p>

              {/* Order 38 Rule 5 Detailed Breakdown */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-6">
                <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Gavel className="w-5 h-5 text-[#1F5EFF]" />
                  <span>The High Evidentiary Threshold of Order 38 Rule 5 (Attachment Before Judgment)</span>
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                  During an ongoing civil recovery suit, a bank may attempt to file an interim application under Order 38 Rule 5 of the CPC seeking &quot;Attachment Before Judgment.&quot; However, the Supreme Court of India in <em>Raman Tech. &amp; Process Engg. Co. v. Solanki Traders (2008)</em> laid down that Order 38 Rule 5 is a drastic power and cannot be exercised casually.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The bank must prove with concrete, unassailable evidence that the borrower is actively attempting to dispose of their entire property with the fraudulent intent of obstructing the execution of any decree. Mere inability to pay or normal living asset ownership does NOT justify attachment before judgment.
                </p>
              </div>

              <p className="text-base leading-relaxed mb-5 text-slate-700">
                If the civil suit proceeds through trial, arguments, and evidence, obtaining a final money decree takes an average of <strong>3 to 7 years in Indian civil courts</strong>. Even after securing a decree, the bank must file separate Execution Proceedings under Order 21 of the CPC. This extensive duration and procedural complexity explain why commercial lenders overwhelmingly prefer negotiated debt settlements over litigation.
              </p>
            </section>

            {/* Section 5: Infographic Action Blueprint Banner */}
            <section id="infographic-action-blueprint" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                5. Legal Defense &amp; Asset Protection Blueprint
              </h2>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                The visual blueprint below synthesizes the statutory realities, secured versus unsecured legal comparisons, the 5-stage formal court progression, and the typical default-to-resolution timeline under Indian law:
              </p>

              {/* Compact High-Impact Infographic Banner */}
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
                        Can Bank Seize Property for Personal Loan Summary &amp; Process Overview
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/can-bank-seize-property-for-personal-loan.jpg"
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
                      src="/images/infographics/can-bank-seize-property-for-personal-loan.jpg"
                      alt="Can Bank Seize Property for Personal Loan Summary Infographic"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Takeaway:</strong> Personal loans are 100% unsecured debt. Banks cannot seize your house, car, or salary under SARFAESI and must obtain a long civil court decree.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="section-60-cpc-exemptions" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                6. Statutory Immunity: Assets Completely Protected under Section 60 of the CPC
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Even in the extreme, improbable scenario where a bank pursues a civil suit to completion and obtains an execution decree under Order 21 CPC, Indian law establishes powerful statutory safeguards to ensure that debtors and their families are not deprived of their fundamental means of survival.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                <strong>Section 60(1) of the Code of Civil Procedure, 1908</strong> contains a comprehensive list of properties that are explicitly exempt from attachment or sale in the execution of any civil court decree:
              </p>

              {/* Grid of Protected Assets */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-2.5 text-slate-900 font-bold text-sm mb-2">
                    <Home className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Residential &amp; Living Necessities</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Necessary wearing apparel, cooking vessels, beds, bedding of the judgment-debtor and their family, and personal ornaments that religious usage requires a woman to retain cannot be attached.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-2.5 text-slate-900 font-bold text-sm mb-2">
                    <Briefcase className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Tools of Trade &amp; Livelihood</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Tools of artisans, agricultural implements, cattle necessary for tillage, and seed-grain required to earn a livelihood are entirely immune from attachment.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-2.5 text-slate-900 font-bold text-sm mb-2">
                    <Coins className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Statutory Salary Protection</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In civil execution, the first ₹1,000 of monthly salary plus two-thirds of the remaining salary is completely exempt from attachment, ensuring subsistence cash flows remain intact.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-2.5 text-slate-900 font-bold text-sm mb-2">
                    <Lock className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Provident Funds &amp; Life Insurance</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Moneys payable under the Employees&apos; Provident Funds (EPF) Act, 1952, statutory gratuity, and life insurance policies taken for the benefit of family cannot be attached by any creditor.
                  </p>
                </div>
              </div>

              <p className="text-base leading-relaxed mb-5 text-slate-700">
                These constitutional and statutory provisions reflect the enlightened jurisprudence affirmed by the Supreme Court in <em>Jolly George Varghese v. Bank of Cochin (1980)</em>: Indian law prioritizes human dignity and basic survival under Article 21 over commercial debt recovery.
              </p>
            </section>

            {/* Section 7 */}
            <section id="npv-banking-accounting-math" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                7. Banking Accounting Rules &amp; Net Present Value (NPV) Recovery Economics
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                Borrowers often wonder: <em>If banks technically possess the right to file civil suits, why do they almost never proceed with asset attachment against salaried personal loan defaulters?</em> The answer lies in institutional banking accounting rules mandated by the Reserve Bank of India (RBI) and Net Present Value (NPV) recovery mathematics.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Under the RBI&apos;s Prudential Norms on Income Recognition, Asset Classification, and Provisioning pertaining to Advances (IRAC), when a retail loan account remains overdue past 90 days, it is classified as a Non-Performing Asset (NPA). For unsecured loans, banks must immediately allocate capital provisions out of their operating profits—scaling from 15% in the Sub-Standard stage up to 100% in the Doubtful/Loss asset category.
              </p>

              {/* Financial Calculation Box */}
              <div className="bg-gradient-to-br from-slate-900 to-[#0A2540] text-white rounded-3xl p-6 md:p-8 my-8 shadow-xl">
                <div className="flex items-center gap-2 text-blue-300 text-xs font-bold uppercase tracking-wider mb-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The Net Present Value (NPV) Recovery Formula</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-4 text-white">
                  Why Banks Financially Prefer OTS Over Long Litigation
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  When evaluating whether to litigate or settle, a bank&apos;s credit risk committee applies a Net Present Value (NPV) recovery analysis:
                </p>
                <div className="bg-white/10 rounded-xl p-4 border border-white/10 text-center my-4 font-mono text-sm md:text-base text-blue-200">
                  NPV(Litigation) = [Expected Recovery ÷ (1 + r)^t] − Upfront Court Fees − Legal Expenses
                </div>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                  Where <em>r</em> is the bank&apos;s cost of capital (10%–12%), <em>t</em> is the litigation timeline (4–7 years), and upfront ad-valorem court fees require an immediate cash outflow of 5% to 8% of the loan amount. After discounting for time and legal friction, litigating a ₹10 Lakh personal loan yields an NPV of barely ₹2.5 to ₹3 Lakhs. By accepting an immediate One-Time Settlement (OTS) of ₹4 to ₹5 Lakhs in cash, the bank maximizes its recovery, releases blocked capital provisions, and strengthens its balance sheet.
                </p>
              </div>

              <p className="text-base leading-relaxed mb-5 text-slate-700">
                This fundamental banking economics is the primary reason banks maintain formal, board-approved One-Time Settlement policies. Settlement is not a favor granted by the bank; it is an economically rational balance sheet optimization strategy.
              </p>
            </section>

            {/* Section 8 */}
            <section id="rbi-fair-practices-enforcement" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                8. Enforcing RBI Anti-Harassment Mandates &amp; Silencing Coercive Collection
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                If recovery agents are subjecting you or your family to threats of property seizure, police action, or public humiliation, you do not have to suffer in silence. The Reserve Bank of India has established robust regulatory mechanisms under its <em>Master Direction on Fair Practices Code for Lenders</em> and <em>Master Circular on Recovery Agents</em>.
              </p>

              {/* RBI Prohibitions List */}
              <div className="space-y-4 my-6">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-1">Strict Time Window Mandates</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Recovery agents are strictly prohibited from contacting borrowers before 8:00 AM or after 7:00 PM. Calls outside this regulatory window violate RBI directives.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-1">Total Ban on Third-Party &amp; Workplace Harassment</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Lenders cannot contact your employer, HR department, colleagues, friends, or extended family members. They cannot disclose your debt status to any unauthorized third party.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-1">Prohibition of False Legal Assertions</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Threatening immediate police arrest, claiming court warrants exist without judicial records, or threatening illegal property confiscation is strictly actionable under banking regulations.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-base leading-relaxed mb-5 text-slate-700">
                When SettleLoans intervenes on behalf of a distressed borrower, our empaneled advocates issue a formal <strong>Legal Cease &amp; Desist Notice</strong> to the lending institution&apos;s Principal Nodal Officer. This notice documents every statutory breach, places the bank on notice of regulatory liability, and halts unlawful collection activities within 24 to 48 hours. If harassment persists, complaints are escalated directly to the RBI Integrated Ombudsman on the CMS Portal.
              </p>
            </section>

            {/* Section 9 */}
            <section id="ots-permanent-clean-exit" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                9. One-Time Settlement (OTS): The Permanent, Legally Binding Resolution
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                While understanding that your property cannot be seized eliminates immediate fear, leaving an unpaid loan in indefinite default causes severe long-term damage to your credit profile (CIBIL score drops) and leaves you exposed to periodic collection escalations. The definitive, legally binding exit is a structured <strong>One-Time Settlement (OTS)</strong>.
              </p>

              {/* SettleLoans 4-Step Resolution Blueprint */}
              <div className="bg-gradient-to-br from-slate-900 to-[#0A2540] text-white rounded-3xl p-6 md:p-8 my-8 shadow-xl">
                <div className="flex items-center gap-2 text-blue-300 text-xs font-bold uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The SettleLoans Professional Representation Protocol</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-4 text-white">
                  How SettleLoans Protects Your Assets &amp; Negotiates Clean Exits
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                    <span className="text-xs font-black text-blue-300 uppercase tracking-wider block mb-1">
                      Step 1: Hardship &amp; Ledger Audit
                    </span>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      We scrutinize your loan agreement, audit unadjusted compound interest and illegal penalties, and structure authentic financial hardship dossiers.
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                    <span className="text-xs font-black text-blue-300 uppercase tracking-wider block mb-1">
                      Step 2: Legal Shield &amp; Notice Reply
                    </span>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      Our empaneled advocates issue registered legal replies to bank demand notices, stopping recovery harassment and asserting your statutory rights.
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                    <span className="text-xs font-black text-blue-300 uppercase tracking-wider block mb-1">
                      Step 3: OTS Negotiation (40%–70% Waiver)
                    </span>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      We negotiate directly with the bank&apos;s senior credit committee to secure substantial waivers on penal interest, late fees, and principal balance.
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                    <span className="text-xs font-black text-blue-300 uppercase tracking-wider block mb-1">
                      Step 4: Bank Sanction Letter &amp; NDC
                    </span>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      We ensure settlement payments are remitted strictly against an authentic bank compromise sanction letter, securing an official No Dues Certificate (NDC).
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-slate-300">
                    Over 10,000+ distressed borrowers successfully protected across India.
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all shadow-md"
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
                  <span>Borrower Rights &amp; Asset Protection</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">
                  Frequently Asked Questions
                </h2>
                <p className="text-sm text-slate-600">
                  Authoritative, legally verified answers regarding property attachment, SARFAESI applicability, recovery agent intimidation, and debt settlement in India.
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
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                <Landmark className="w-4 h-4 text-[#1F5EFF]" />
                <span>Authoritative Legal &amp; Regulatory Sources</span>
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://legislative.gov.in/actsofparliamentfromtheyear/code-civil-procedure-1908"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    Ministry of Law &amp; Justice — The Code of Civil Procedure, 1908 (Section 60 Statutory Asset Exemptions)
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
                    Supreme Court of India — Landmark Rulings on Order 38 Rule 5 CPC &amp; Article 21 Debtor Protection (Raman Tech &amp; Jolly George Varghese)
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
                    Reserve Bank of India (RBI) — Master Direction on Fair Practices Code for Lenders &amp; Recovery Directives
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://legislative.gov.in/actsofparliamentfromtheyear/securitisation-and-reconstruction-financial-assets-and-enforcement-security-interest-act-2002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    Ministry of Law &amp; Justice — The SARFAESI Act, 2002 (Section 2(1)(zf) Security Interest Provisions)
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
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Can I Go to Jail for Loan Default?
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
                  href="/section-138-cheque-bounce-loan-default"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Section 138 Cheque Bounce Defense
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
                Ashish has over a decade of specialized experience shielding distressed borrowers from unlawful recovery harassment, defending against illegal property attachment threats, and negotiating structured One-Time Settlements across India.
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
                <span>Immediate Asset Protection</span>
              </div>
              <h3 className="text-xl font-black mb-3 leading-tight">
                Facing Property Seizure Threats from Recovery Agents?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Stop living in fear. Connect with an empaneled SettleLoans advocate to issue an urgent Cease &amp; Desist notice, protect your home, and negotiate a clean debt settlement.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white hover:bg-slate-100 text-[#1F5EFF] font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 shadow"
              >
                Get Emergency Legal Protection
              </Link>
            </div>

            {/* Card 3: Trust Signals Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                <span>Why Distressed Borrowers Trust SettleLoans</span>
              </h4>
              <ul className="space-y-3.5 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Anti-Harassment Shield:</strong> Immediate legal intervention stopping abusive recovery calls and unlawful home visits.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Empaneled Legal Representation:</strong> Experienced advocates drafting notice replies and defending borrower rights under CPC.
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
                    <strong>Confidential &amp; Dignified:</strong> Absolute data confidentiality protecting your family, assets, and social standing.
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
