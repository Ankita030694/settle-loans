'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';
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
  Plane,
  Globe2,
  CreditCard,
} from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
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

export default function NriPersonalLoanSettlementIndiaClient() {
  const [activeId, setActiveId] = useState<string>('nri-debt-realities');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'nri-debt-realities', title: '1. Cross-Border Default Realities & Bank Tactics' },
    { id: 'airport-arrest-myth', title: '2. Debunking Airport Arrest & Look Out Circulars' },
    { id: 'consular-poa-bridge', title: '3. Executing Power of Attorney (POA) Abroad' },
    { id: 'npv-banking-mechanics', title: '4. Bank NPV Calculations & Stressed Asset Rules' },
    { id: 'infographic-action-blueprint', title: '5. Remote Settlement Action Blueprint' },
    { id: 'step-by-step-workflow', title: '6. Step-by-Step Remote Settlement Workflow' },
    { id: 'fema-remittance-rules', title: '7. FEMA Compliance & Foreign Remittance' },
    { id: 'criminal-notice-defense', title: '8. Section 138 & NACH Defense via Section 205' },
    { id: 'comparative-resolution-matrix', title: '9. Comparative Resolution Matrices' },
    { id: 'cibil-rehabilitation', title: '10. Post-Settlement CIBIL Rehabilitation' },
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
      question: 'Can an NRI settle personal loans and credit cards in India remotely without traveling?',
      answer: (
        <p>
          <strong>Yes, Non-Resident Indians can execute complete debt settlements remotely without setting foot in India.</strong> Under the <em>Powers of Attorney Act, 1882</em>, you can execute a Special Power of Attorney (POA) attested at the nearest Indian Embassy or Consulate abroad. This grants legal standing to an empaneled debt settlement advocate or trusted family member in India to represent you before bank credit committees, negotiate One-Time Settlement (OTS) waivers, and sign necessary discharge agreements on your behalf.
        </p>
      ),
    },
    {
      question: 'Can an NRI be arrested or detained at the airport in India for loan default?',
      answer: (
        <p>
          <strong>No, absolutely not. Defaulting on an unsecured personal loan or credit card is purely a civil dispute.</strong> Under Indian jurisprudence and Article 21 of the Constitution, civil debt default is not a cognizable criminal offense. Immigration authorities at Indian airports (Delhi, Mumbai, Bengaluru, Kochi, Hyderabad) have zero statutory power to stop, question, or detain passengers over unpaid bank loans or collection agency claims.
        </p>
      ),
    },
    {
      question: 'Can an Indian bank issue a Look Out Circular (LOC) against an NRI for personal loan default?',
      answer: (
        <p>
          <strong>No. Routine retail loan defaults do not meet the statutory criteria for Look Out Circulars.</strong> Under Ministry of Home Affairs (MHA) Office Memoranda and landmark rulings by the High Courts of Delhi and Bombay (such as <em>Viraj Chetan Shah v. Union of India</em>), LOCs are strictly reserved for economic offenses threatening national sovereignty or large-scale financial fraud under CBI/ED investigations. Public and private sector banks cannot issue LOCs for standard unsecured personal loan defaults.
        </p>
      ),
    },
    {
      question: 'How does an NRI execute a valid Power of Attorney (POA) from abroad?',
      answer: (
        <p>
          The NRI executes a Special Power of Attorney drafted by legal counsel, signs it before a Consular Officer at the Indian Embassy/Consulate (or obtains an Apostille certificate in Hague Convention nations), and couriers the original document to India. The authorized attorney holder must present the document to the District Registrar or Collector of Stamps for adjudication and stamp duty payment under <strong>Section 18 of the Indian Stamp Act, 1899</strong> within 90 days of its arrival in India.
        </p>
      ),
    },
    {
      question: 'What percentage waiver can an NRI expect in a One-Time Settlement (OTS)?',
      answer: (
        <p>
          Depending on the duration of default, asset classification under RBI provisioning norms, and documented overseas financial hardship, NRIs typically secure <strong>40% to 70% waivers on total outstanding balances</strong>. Banks routinely agree to a 100% waiver of accumulated penal interest, late fees, and bounce charges, requiring payment solely against a heavily discounted compromise principal.
        </p>
      ),
    },
    {
      question: 'How should an NRI make the settlement payment under FEMA regulations?',
      answer: (
        <p>
          Under the <em>Foreign Exchange Management Act (FEMA), 1999</em>, settlement payments must be routed through legitimate banking channels. Payments can be remitted from the borrower&apos;s Non-Resident External (NRE) or Non-Resident Ordinary (NRO) account, or sent via direct SWIFT inward wire remittance to the lending bank, citing the unique Loan Account Number and official OTS Sanction Letter reference.
        </p>
      ),
    },
    {
      question: 'What happens if the bank files a Section 138 cheque bounce case while the NRI is abroad?',
      answer: (
        <p>
          If a lender deposits a security cheque that bounces, your defense advocate in India can file an application under <strong>Section 205 or Section 317 CrPC</strong> to dispense with your physical personal appearance in court. The advocate represents you, furnishes the required surety/bail bond, and moves the matter for immediate compounding under Section 147 of the Negotiable Instruments Act upon fulfillment of the OTS agreement.
        </p>
      ),
    },
    {
      question: 'Can recovery agents legally harass an NRI’s parents or family members in India?',
      answer: (
        <p>
          <strong>No, third-party harassment is strictly illegal under the RBI Fair Practices Code.</strong> Recovery agents are legally prohibited from visiting, calling, or intimidating parents, spouses, or relatives who are not co-borrowers or legal guarantors. SettleLoans issues immediate cease-and-desist notices to bank management and files formal complaints with the RBI Ombudsman, holding lenders liable for agent misconduct.
        </p>
      ),
    },
    {
      question: 'How does an NRI obtain the official No Dues Certificate (NDC) after settlement?',
      answer: (
        <p>
          Upon receipt of the final settlement installment, the lending institution is mandated under RBI guidelines to issue an official, unconditional <strong>No Dues Certificate (NDC)</strong> or No Objection Certificate (NOC) within 21 to 30 days. This formal document certifies that the loan account is fully closed and no ongoing or future liability exists against the borrower.
        </p>
      ),
    },
    {
      question: 'How does personal loan settlement affect the NRI’s Indian CIBIL score?',
      answer: (
        <p>
          Following settlement, the bank updates credit bureaus (CIBIL, Experian, CRIF High Mark) with the status &quot;Settled&quot; or &quot;Post-Write-Off Settled&quot;. While this halts active recovery proceedings and eliminates default reporting, the score experiences a temporary dip. Non-residents can steadily rebuild their Indian credit score to 750+ within 12 to 24 months using secured fixed-deposit credit cards.
        </p>
      ),
    },
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

      {/* A. Editorial Hero Section - Charcoal Navy (#2D313D) */}
      <section className="w-full bg-[#2D313D] border-b border-slate-700/60 pt-8 pb-7 md:pt-12 md:pb-9 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-[#1F5EFF]/20 border border-[#1F5EFF]/40 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <Globe2 className="w-3.5 h-3.5 text-[#60A5FA]" />
            NRI Cross-Border Debt Resolution &amp; Legal Shield
          </div>

          {/* H1 Headline */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            How NRI Can Settle Personal Loan in India:{' '}
            <span className="text-[#60A5FA]">Remote OTS &amp; Legal Defense</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Living abroad with unpaid personal loans or credit card debt in India? Overcome airport arrest anxiety, execute a Consular Power of Attorney (POA), shield family members from collection harassment, and resolve bank debt remotely with 40%–70% OTS waivers.
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
              <span>Updated: August 22, 2026</span>
            </div>
          </div>

          {/* Primary Hero CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-5 rounded-xl shadow-md hover:shadow-blue-500/20 transition-all duration-300 text-xs sm:text-sm group"
            >
              <span>Get Remote NRI Legal Defense</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#step-by-step-workflow"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold py-2.5 px-4 rounded-xl border border-white/20 transition-all duration-300 text-xs sm:text-sm"
            >
              <BookOpen className="w-4 h-4 text-blue-300" />
              <span>View Step-by-Step Settlement Guide</span>
            </a>
          </div>
        </div>
      </section>

      {/* B. Animated Stats Strip */}
      <StatsStrip />

      {/* C. Three-Column Main Body Grid */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column (Sticky TOC & Quick Crux) */}
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

            {/* Quick Crux Sticky Pill */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/80 rounded-2xl p-4 shadow-sm">
              <div className="flex items-center gap-2 text-[#1F5EFF] font-bold text-xs uppercase tracking-wider mb-2">
                <Plane className="w-4 h-4" />
                <span>NRI Advisory Summary</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Personal loan default in India is a civil breach, not an arrestable crime. NRIs can execute a Consular POA abroad to appoint legal counsel, halt family harassment, and settle bank debts remotely with full legal immunity.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 font-sans text-slate-800 blog-content">
            
            {/* Key Takeaways Box (Top) */}
            <div className="bg-blue-50 border-l-8 border-[#1F5EFF] rounded-r-2xl p-6 md:p-8 mb-10 shadow-sm">
              <div className="flex items-center gap-2 text-[#1F5EFF] font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5" />
                <span>KEY TAKEAWAYS: NRI LOAN SETTLEMENT &amp; CROSS-BORDER RIGHTS</span>
              </div>
              <ul className="space-y-3 text-sm md:text-base text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero Airport Arrest Risk:</strong> Unsecured loan default is purely a civil contractual dispute. Immigration desks at Indian airports have zero jurisdiction to detain travelers for unpaid retail bank loans.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Remote Consular POA:</strong> You can execute a Special Power of Attorney through your nearest Indian Embassy or Consulate, legally appointing defense counsel in India to manage all negotiations.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Significant 40%–70% OTS Waivers:</strong> Under RBI stressed asset provisioning rules, banks prefer a discounted cash recovery today over expensive, multi-year cross-border litigation.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Immediate Shield for Indian Relatives:</strong> RBI regulations strictly forbid recovery agents from intimidating or contacting parents or relatives who are not legal co-borrowers.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Court Compounding via Section 205 CrPC:</strong> Pending Section 138 cheque bounce or NACH bounce matters are defended by counsel without requiring your physical presence, followed by full compounding.
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="nri-debt-realities" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                1. The Cross-Border Default Dilemma and Banking Recovery Pressures
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                Thousands of Indian professionals relocate each year to economic hubs across the United Arab Emirates, Saudi Arabia, Qatar, Singapore, the United Kingdom, Canada, and the United States. Many depart with active unsecured personal loans, credit card balances, or professional lines of credit originated while working in India. When unexpected cross-border financial shocks emerge—such as corporate restructuring, overseas tech layoffs, escalating foreign living expenses, or adverse currency exchange fluctuations—servicing high-interest Indian EMIs simultaneously becomes financially unsustainable.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                As automated NACH mandates bounce in India, lenders initiate aggressive recovery workflows. When digital collection calls fail to reach overseas phone numbers, recovery desks routinely redirect their pressure onto the borrower&apos;s permanent residential address in India. Elderly parents, spouses, and extended family members are subjected to coercive home visits, threatening phone calls, and unauthorized claims asserting that the non-resident borrower will face immediate arrest by immigration officials upon landing at an Indian airport.
              </p>
              
              {/* Highlighted Statutory Callout Box */}
              <div className="bg-slate-100 border-l-4 border-[#1F5EFF] p-5 rounded-r-xl my-6">
                <p className="text-sm md:text-base font-semibold text-slate-900 italic">
                  &quot;Under the Reserve Bank of India Master Direction on Debt Recovery and Fair Practices Code, regulated entities and their outsourced recovery agents are explicitly barred from contacting, intimidating, or exerting debt recovery demands on third parties, including parents, siblings, or friends who have not executed formal guarantees or co-borrower covenants.&quot;
                </p>
                <p className="text-xs text-slate-500 mt-2 font-medium">
                  — RBI Master Direction on Fair Practices Code for Lenders (DBR.No.Dir.BC.10/13.03.00/2015-16)
                </p>
              </div>

              <p className="text-base leading-relaxed text-slate-700">
                These aggressive tactics exploit the physical distance and legal information vacuum experienced by non-residents. Living thousands of miles away, borrowers often endure acute psychological stress, fearing that an unresolved financial dispute in India could permanently jeopardize their passport, overseas employment visa, or right to visit family back home. Understanding the strict legal boundaries governing Indian debt recovery is the vital first step toward reclaiming peace of mind and executing a permanent, structured debt resolution.
              </p>
            </section>

            {/* Section 2 */}
            <section id="airport-arrest-myth" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                2. Debunking the Myth: Can an NRI Be Arrested at Indian Immigration?
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                The most pervasive fear among non-residents with defaulted Indian loans is the prospect of being detained at airport immigration desks upon arrival at Delhi, Mumbai, Bengaluru, Kochi, or Hyderabad. This anxiety is systematically manufactured by unethical third-party collection agents who falsely threaten to issue &quot;airport warrants&quot; or place the borrower&apos;s name on international &quot;defaulter watchlists.&quot; Under Indian constitutional law and criminal procedure, these claims are entirely baseless.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Defaulting on an unsecured personal loan or credit card constitutes a pure <strong>civil breach of contract</strong> under the <em>Indian Contract Act, 1872</em>. Under Article 21 of the Indian Constitution, personal liberty cannot be deprived except according to procedure established by law. The Supreme Court of India has consistently held that inability to repay debt due to bona fide financial distress is not a crime, and law enforcement agencies have no statutory mandate to register an FIR or initiate an arrest for civil debt default.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Furthermore, the issuance of a <strong>Look Out Circular (LOC)</strong> is strictly regulated by the Ministry of Home Affairs (MHA) through codified Office Memoranda. LOCs are exceptional administrative instruments reserved exclusively for individuals accused of cognizable economic offenses threatening national security, massive banking frauds exceeding prescribed multi-crore statutory thresholds, or fugitives evading active criminal warrants under CBI or Enforcement Directorate (ED) investigations.
              </p>

              {/* Judicial Precedent Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-6 shadow-sm">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <h3 className="text-lg font-bold text-slate-900">
                    Viraj Chetan Shah v. Union of India (Bombay High Court, 2024)
                  </h3>
                  <span className="text-xs bg-[#1F5EFF]/10 text-[#1F5EFF] font-bold py-1 px-2.5 rounded-full whitespace-nowrap">
                    High Court Ruling on Bank LOCs
                  </span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                  The Bombay High Court decisively quashed the clause empowering public sector bank chairmen to issue Look Out Circulars against retail debtors, holding that the fundamental right to travel abroad under Article 21 cannot be curtailed to enforce private civil debt recoveries without direct statutory authority.
                </p>
                <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
                  Key Legal Takeaway: Routine personal loan and credit card defaults do not meet statutory LOC thresholds. No bank or recovery agent can prevent your entry into or departure from India for civil retail debt.
                </div>
              </div>

              <p className="text-base leading-relaxed text-slate-700">
                Arrest at an airport is legally possible only if a criminal magistrate has issued a Non-Bailable Warrant (NBW) due to an individual repeatedly evading judicial summons in an active criminal prosecution (such as fraud or forgery under Section 420 IPC / Section 318 BNS). In standard loan disputes, banks operate strictly within civil and quasi-criminal recovery frameworks, where legal representation readily manages all court appearances without personal detention.
              </p>
            </section>

            {/* Section 3 */}
            <section id="consular-poa-bridge" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                3. The Remote Legal Bridge: Executing a Power of Attorney (POA) from Abroad
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Non-residents do not need to incur exorbitant travel expenses, take extended employment leave, or endure logistical disruption to resolve Indian banking liabilities. Under the <em>Powers of Attorney Act, 1882</em>, an NRI can legally delegate authority to an empaneled debt settlement advocate or trusted family representative in India through a properly executed <strong>Special Power of Attorney (Special POA)</strong>.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                A Special POA limits the attorney&apos;s mandate strictly to negotiating loan restructuring or One-Time Settlement terms with designated financial institutions, reviewing and accepting compromise sanction letters, remitting approved settlement amounts, and securing formal No Dues Certificates and case compounding orders. This ensures total legal protection while preventing any misuse of broader discretionary powers.
              </p>

              {/* 2-Stage Consular Execution Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 shadow-sm hover:border-blue-300 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#1F5EFF] flex items-center justify-center font-black text-sm">
                      01
                    </div>
                    <h3 className="font-bold text-slate-900 text-base">
                      Consular Attestation or Apostille Abroad
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-2">
                    In countries that are signatories to the Hague Convention (such as the US, UK, Canada, and EU member states), the POA document is signed before a local Notary Public and certified with an <strong>Apostille Certificate</strong>. In non-apostille jurisdictions (including the UAE, Saudi Arabia, Qatar, and Singapore), the NRI visits the Consular Wing of the Indian Embassy or High Commission, signs the document in the presence of a Consular Officer under the <em>Diplomatic and Consular Officers (Oaths and Fees) Act, 1948</em>, and obtains official embassy stamping.
                  </p>
                  <div className="text-[11px] font-bold text-blue-600 bg-blue-50 py-1 px-2.5 rounded-md inline-block">
                    International Authentication
                  </div>
                </div>

                <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 shadow-sm hover:border-blue-300 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#1F5EFF] flex items-center justify-center font-black text-sm">
                      02
                    </div>
                    <h3 className="font-bold text-slate-900 text-base">
                      Adjudication and Stamping in India (90 Days)
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-2">
                    Once the physically stamped POA is dispatched by courier to India, the attorney holder must present the document before the District Registrar or Collector of Stamps within <strong>90 calendar days</strong> of its physical arrival in India. Under <strong>Section 18 of the Indian Stamp Act, 1899</strong>, the document is officially adjudicated upon payment of applicable state stamp duty, rendering it fully enforceable before all Indian banking authorities, tribunals, and courts.
                  </p>
                  <div className="text-[11px] font-bold text-emerald-700 bg-emerald-50 py-1 px-2.5 rounded-md inline-block">
                    Statutory Enforceability in India
                  </div>
                </div>
              </div>

              <p className="text-base leading-relaxed text-slate-700">
                Once the adjudicated Special POA is on record, all communications from the bank&apos;s recovery division are legally redirected to your appointed legal counsel. This immediately halts intrusive phone calls and visits to your family members, ensuring that all discussions proceed through structured, formal legal channels.
              </p>
            </section>

            {/* Section 4 */}
            <section id="npv-banking-mechanics" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                4. Bank Accounting Mechanics: Net Present Value (NPV) &amp; Stressed Assets
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                To understand why Indian commercial banks and NBFCs readily agree to substantial One-Time Settlement (OTS) waivers, one must examine banking accounting rules under the <em>Reserve Bank of India (Prudential Framework for Resolution of Stressed Assets) Directions, 2019</em>. Banks do not evaluate non-resident debt settlements through emotional lenses; they operate strictly on mathematical risk assessments and balance sheet capital efficiency.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                When a loan account remains unpaid beyond 90 days, it is classified as a <strong>Non-Performing Asset (NPA)</strong>. Under RBI provisioning mandates, banks must lock away significant portions of their operating profits as risk provisions against bad loans:
              </p>

              {/* Provisioning Breakdown Box */}
              <div className="space-y-4 my-6">
                <div className="border-l-4 border-amber-500 bg-amber-50/50 p-4 rounded-r-xl">
                  <h3 className="text-sm font-bold text-slate-900">Sub-Standard Asset (NPA up to 12 Months)</h3>
                  <p className="text-xs text-slate-700 mt-1">Requires 15% provisioning on secured balances and 25% on unsecured exposure.</p>
                </div>
                <div className="border-l-4 border-orange-500 bg-orange-50/50 p-4 rounded-r-xl">
                  <h4 className="text-sm font-bold text-slate-900">Doubtful Asset (D1 to D3: 1 to 3+ Years of Default)</h4>
                  <p className="text-xs text-slate-700 mt-1">Provisioning escalates aggressively from 25% up to 100% of the unsecured loan principal.</p>
                </div>
                <div className="border-l-4 border-red-500 bg-red-50/50 p-4 rounded-r-xl">
                  <h4 className="text-sm font-bold text-slate-900">Loss Asset (Identified Uncollectible Debt)</h4>
                  <p className="text-xs text-slate-700 mt-1">Requires full 100% provisioning write-off on the bank&apos;s books.</p>
                </div>
              </div>

              <p className="text-base leading-relaxed mb-5 text-slate-700">
                When a borrower resides abroad, the lender faces severe legal hurdles in pursuing cross-border debt recovery. Executing an Indian civil court money decree in a foreign jurisdiction (such as under reciprocity provisions with the UAE or UK) requires years of complex international litigation, foreign advocate retainers, and diplomatic service of summons. The total legal cost often exceeds the value of the original personal loan.
              </p>
              <p className="text-base leading-relaxed text-slate-700">
                Banks apply a <strong>Net Present Value (NPV) recovery formula</strong>:
              </p>
              <div className="bg-slate-900 text-slate-100 p-5 rounded-2xl my-5 font-mono text-xs md:text-sm overflow-x-auto">
                <p className="text-blue-300 font-bold mb-1">// BANK COMPROMISE SETTLEMENT EVALUATION</p>
                <p>NPV(Recovery) = [Immediate Cash Offer] &gt; [Expected Court Recovery × Probability] ÷ (1 + r)^t - [Cross-Border Legal Costs]</p>
              </div>
              <p className="text-base leading-relaxed text-slate-700">
                Because an immediate lump-sum settlement of 40% to 50% yields a vastly superior Net Present Value compared to uncertain, protracted foreign litigation, bank credit committees and Stressed Assets Resolution Committees (SARC) are commercially motivated to approve formal One-Time Settlements and release locked capital provisions back into their profitability pools.
              </p>
            </section>

            {/* Section 5: Dedicated Custom Infographic Banner */}
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
                        NRI Personal Loan Settlement &amp; Legal Defense Roadmap
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/nri-personal-loan-settlement-india.jpg"
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
                      src="/images/infographics/nri-personal-loan-settlement-india.jpg"
                      alt="NRI Personal Loan Settlement in India Remote Legal Defense and OTS Blueprint"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Takeaway:</strong> NRIs can resolve defaulted Indian loans 100% remotely via Consular POA with zero airport detention risk and 40%–70% OTS waivers.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free NRI Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="step-by-step-workflow" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                6. Step-by-Step Remote Settlement Workflow: From Default to No Dues Certificate
              </h2>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                Executing an NRI debt settlement requires a disciplined, multi-stage legal and financial process. Bypassing statutory safeguards or relying on informal verbal assurances from recovery agents can lead to fraud or continued legal exposure. The established protocol followed by SettleLoans ensures total transparency and legal finality:
              </p>

              {/* 5 Sequential Stages */}
              <div className="space-y-4 my-8">
                <div className="p-5 border border-slate-200 rounded-2xl bg-white shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 text-[#1F5EFF] flex items-center justify-center font-bold text-xs">
                      1
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      Comprehensive Debt &amp; Legal Audit
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Our legal team reviews your original loan agreements, loan account statements, payment history, and any statutory notices issued under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act. We calculate the exact principal balance and strip away illegitimate penal interest and compound bounce charges.
                  </p>
                </div>

                <div className="p-5 border border-slate-200 rounded-2xl bg-white shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 text-[#1F5EFF] flex items-center justify-center font-bold text-xs">
                      2
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      Drafting and Consular Execution of Special POA
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We draft a customized Special Power of Attorney tailored strictly to your banking disputes. You sign and attest the document before the Indian Embassy or Consulate abroad. Upon arrival in India, our team completes statutory adjudication under Section 18 of the Indian Stamp Act.
                  </p>
                </div>

                <div className="p-5 border border-slate-200 rounded-2xl bg-white shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 text-[#1F5EFF] flex items-center justify-center font-bold text-xs">
                      3
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      Legal Representation &amp; Cease-and-Desist Enforcement
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We place our formal Vakalatnama and POA on record with the bank&apos;s central stressed asset management vertical. An immediate cease-and-desist notice is issued to the bank&apos;s Principal Nodal Officer, strictly forbidding third-party contact or visits to your family residence in India.
                  </p>
                </div>

                <div className="p-5 border border-slate-200 rounded-2xl bg-white shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 text-[#1F5EFF] flex items-center justify-center font-bold text-xs">
                      4
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      Financial Hardship Docketing &amp; Official OTS Sanction
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We compile a structured Financial Hardship Dossier (documenting foreign cost-of-living increases, salary revisions, or medical liabilities) and negotiate directly with the Stressed Assets Resolution Committee. We secure a formal, written One-Time Settlement Sanction Letter issued directly on official bank letterhead detailing the discounted compromise figure, payment milestones, and closure commitments.
                  </p>
                </div>

                <div className="p-5 border border-slate-200 rounded-2xl bg-white shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 text-[#1F5EFF] flex items-center justify-center font-bold text-xs">
                      5
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      FEMA Remittance, Judicial Compounding &amp; No Dues Certificate
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    You remit the agreed settlement funds directly from your NRE/NRO account or foreign wire transfer to the lending institution. Upon credit confirmation, our advocates file compounding petitions under Section 147 NI Act to dispose of any pending court matters, followed by obtaining the unconditional <strong>No Dues Certificate (NDC)</strong> and verifying CIBIL bureau updates.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section id="fema-remittance-rules" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                7. Foreign Exchange &amp; FEMA Compliance in NRI Loan Settlement
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Settling an Indian debt from abroad requires strict compliance with the <em>Foreign Exchange Management Act (FEMA), 1999</em> and RBI Master Directions on Non-Resident Banking Accounts. Never make cash transfers or payments to personal accounts of recovery agents or unverified intermediaries. All settlement remittances must follow lawful, auditable banking channels.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Non-residents can utilize three authorized mechanisms to pay approved OTS amounts:
              </p>
              <ul className="space-y-2.5 text-sm text-slate-700 mb-5 list-disc list-inside">
                <li>
                  <strong>Non-Resident External (NRE) Account:</strong> Funds held in freely repatriable NRE accounts can be transferred directly to the lending institution via RTGS/NEFT against the OTS sanction letter.
                </li>
                <li>
                  <strong>Non-Resident Ordinary (NRO) Account:</strong> Rupee funds originating from legitimate Indian income or past savings in NRO accounts can be debited directly for loan settlement.
                </li>
                <li>
                  <strong>Direct Inward SWIFT Wire Remittance:</strong> The NRI can initiate an international wire transfer in foreign currency (USD, AED, GBP, EUR, SGD) directly to the lending bank&apos;s nodal Nostro account, specifically referencing the Loan Account Number and Settlement Sanction Reference.
                </li>
              </ul>
              <p className="text-base leading-relaxed text-slate-700">
                Regarding taxation, loan waivers obtained through genuine distress settlements on personal (non-business) loans do not constitute taxable income under the <em>Income Tax Act, 1961</em>, as confirmed by numerous Income Tax Appellate Tribunal (ITAT) rulings, ensuring that you do not incur unintended tax liabilities in India post-settlement.
              </p>
            </section>

            {/* Section 8 */}
            <section id="criminal-notice-defense" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                8. Managing Criminal &amp; Quasi-Criminal Notices: Section 138 &amp; NACH Defense
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Banks frequently attempt to establish leverage against non-residents by depositing archived security cheques (PDCs) collected during loan origination. When these cheques or automated NACH electronic mandates bounce, lenders issue statutory 15-day demand notices under <strong>Section 138 of the Negotiable Instruments Act, 1881</strong> or <strong>Section 25 of the Payment and Settlement Systems Act, 2007</strong>.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                If a magistrate issues court summons while you are residing overseas, there is no need to panic or make emergency travel arrangements. Under <strong>Section 205 and Section 317 of the Code of Criminal Procedure (CrPC)</strong> (and corresponding provisions of the Bharatiya Nagarik Suraksha Sanhita, BNSS), the magistrate possesses judicial discretion to dispense with the personal physical appearance of the accused and permit representation entirely through an authorized advocate.
              </p>
              <p className="text-base leading-relaxed text-slate-700">
                Your defense advocate appears on your behalf, presents the overseas residency proof, furnishes the necessary personal bond through your local attorney holder, and challenges the validity of inflated security cheques under the landmark Supreme Court ruling in <em>Dashrathbhai Trikambhai Patel v. Hitesh Mahendrabhai Patel (2022)</em>. Once the OTS terms are fulfilled, the entire criminal proceeding is compounded under <strong>Section 147 of the NI Act</strong>, resulting in complete legal acquittal and zero criminal record.
              </p>
            </section>

            {/* Section 9: Comparative Strategic Matrix */}
            <section id="comparative-resolution-matrix" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                9. Comparative Resolution Matrices
              </h2>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                The comparative tables below highlight the legal, financial, and operational distinctions between resolving debts remotely through a Consular POA, attempting an in-person return, or ignoring unpaid liabilities.
              </p>

              {/* Table 1 */}
              <div className="my-8">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                  Table 1: Remote Legal POA Settlement vs. In-Person Return vs. Ignoring Debt
                </h3>
                <div className="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th>Strategic Dimension</th>
                        <th>Remote Legal Settlement via Consular POA</th>
                        <th>Traveling to India in Person</th>
                        <th>Ignoring Defaulted Dues Abroad</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Travel &amp; Logistics Cost</strong></td>
                        <td>Zero travel expense; small consular attestation fee</td>
                        <td>High flight costs, local lodging, lost foreign work days</td>
                        <td>Zero immediate cost; severe long-term financial penalties</td>
                      </tr>
                      <tr>
                        <td><strong>Legal Representation</strong></td>
                        <td>Handled entirely by empaneled defense advocates</td>
                        <td>Self-representation under aggressive bank pressure</td>
                        <td>Zero defense; risk of ex-parte court summons</td>
                      </tr>
                      <tr>
                        <td><strong>Family Harassment Protection</strong></td>
                        <td>Immediate formal cease-and-desist to bank nodal officers</td>
                        <td>Family remains exposed during visit preparations</td>
                        <td>Persistent, escalating harassment of elderly parents</td>
                      </tr>
                      <tr>
                        <td><strong>Negotiation Leverage</strong></td>
                        <td>High; structured hardship docketing &amp; NPV modeling</td>
                        <td>Moderate; banks sense urgency to return overseas</td>
                        <td>Zero leverage; compound penal charges escalate</td>
                      </tr>
                      <tr>
                        <td><strong>CIBIL &amp; Legal Closure</strong></td>
                        <td>Permanent No Dues Certificate &amp; Case Compounding</td>
                        <td>Permanent No Dues Certificate if fully settled</td>
                        <td>Permanent &apos;Wilful Defaulter&apos; / &apos;Written Off&apos; credit tag</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table 2 */}
              <div className="my-8">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                  Table 2: Comparison of Legal Channels Invoked by Indian Lenders
                </h3>
                <div className="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th>Channel Parameter</th>
                        <th>One-Time Settlement (OTS via POA)</th>
                        <th>Section 138 NI Act (Cheque Bounce)</th>
                        <th>Civil Summary Suit (Order 37 CPC)</th>
                        <th>DRT (Secured Loans &gt; ₹20L)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Legal Nature</strong></td>
                        <td>Consensual Compromise Resolution</td>
                        <td>Quasi-Criminal Statutory Complaint</td>
                        <td>Civil Contractual Recovery Suit</td>
                        <td>Statutory Tribunal Recovery</td>
                      </tr>
                      <tr>
                        <td><strong>NRI Physical Appearance</strong></td>
                        <td>Never required; executed via POA</td>
                        <td>Dispensed with under Sec 205 CrPC</td>
                        <td>Never required; advocate represents</td>
                        <td>Never required; advocate represents</td>
                      </tr>
                      <tr>
                        <td><strong>Resolution Timeline</strong></td>
                        <td>45 to 60 calendar days</td>
                        <td>18 to 36 months if litigated</td>
                        <td>3 to 7 years in civil court</td>
                        <td>2 to 5 years before Presiding Officer</td>
                      </tr>
                      <tr>
                        <td><strong>Financial Outcome</strong></td>
                        <td>40% to 70% waiver on total balance</td>
                        <td>100% compoundable upon settlement</td>
                        <td>Decree for full principal + interest</td>
                        <td>Attachment of mortgaged Indian assets</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 10 */}
            <section id="cibil-rehabilitation" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                10. Post-Settlement Credit Rehabilitation &amp; Long-Term Financial Freedom
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Securing the official <strong>No Dues Certificate (NDC)</strong> marks the formal conclusion of all legal disputes and financial liabilities with the lending institution. However, non-residents must also take proactive steps to ensure their credit bureau records (TransUnion CIBIL, Experian, CRIF High Mark) accurately reflect the settlement.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Under RBI mandates, banks must submit updated loan repayment records to all four credit bureaus within <strong>30 calendar days</strong> of account closure. The account status will transition from active default to &quot;Settled&quot; or &quot;Post-Write-Off Settled&quot;, and the outstanding balance will reflect zero. While a settled tag carries a temporary credit score reduction, it eliminates the devastating impact of an ongoing active default and removes all barriers to future financial interactions in India.
              </p>
              <p className="text-base leading-relaxed text-slate-700">
                Should you choose to re-establish an Indian credit profile for future investments, you can rebuild your CIBIL score to 750+ within 12 to 24 months by opening a Fixed Deposit (FD)-backed secured credit card through your NRO account and maintaining disciplined, automated monthly repayments.
              </p>
            </section>

            {/* Company Section Component */}
            <CompanySection />

            {/* Section 11: FAQ Accordion */}
            <section id="faqs" className="scroll-mt-28 mb-14">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-2xl bg-blue-100 text-[#1F5EFF] flex items-center justify-center">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#1F5EFF] block">
                    Got Questions? We Have Answers
                  </span>
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                    Frequently Asked Questions on NRI Personal Loan Settlement
                  </h2>
                </div>
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
                    href="https://mea.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    Ministry of External Affairs (MEA) — Consular Services &amp; Power of Attorney Attestation Guidelines
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
                    Reserve Bank of India (RBI) — Master Direction on Stressed Assets Resolution &amp; Non-Resident Accounts
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
                    Supreme Court of India — Judgments on Section 138 NI Act &amp; Fundamental Right to Travel
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://mha.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    Ministry of Home Affairs (MHA) — Office Memoranda &amp; Guidelines on Look Out Circulars (LOC)
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
                    Reserve Bank of India (RBI CMS) — Integrated Ombudsman Scheme &amp; Anti-Harassment Redressal
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
                  href="/bank-recovery-harassment-complaint"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Bank Recovery Harassment Complaint
                </Link>
                <Link
                  href="/personal-loan-settlement-process-consequences"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Settlement Process
                </Link>
                <Link
                  href="/lok-adalat-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Lok Adalat Loan Settlement
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Settlement CIBIL Impact
                </Link>
                <Link
                  href="/bank-loan-settlement-rules"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Bank Loan Settlement Rules
                </Link>
                <Link
                  href="/unsecured-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Unsecured Loan Settlement
                </Link>
                <Link
                  href="/recovery-agents-calling-relatives-friends"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Recovery Agents Calling Relatives &amp; Friends
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  No Dues Certificate After Loan Settlement
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Bank One-Time Settlement (OTS) Policy
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
                Ashish has over a decade of specialized expertise guiding Non-Resident Indians across the Gulf, Europe, and North America through remote Power of Attorney execution, countering unlawful cross-border recovery intimidation, and negotiating high-waiver One-Time Settlements.
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

            {/* Card 2: Emergency Advocate Remote Legal Defense CTA */}
            <div className="bg-gradient-to-br from-[#1F5EFF] to-blue-700 text-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 text-blue-100 text-xs font-bold uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Remote NRI Legal Shield</span>
              </div>
              <div className="text-xl font-black mb-3 leading-tight">
                Living Abroad with Unpaid Indian Loans or Notices?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Protect your family from harassment and resolve your Indian debts 100% remotely. Connect with an empaneled SettleLoans advocate to draft a Consular POA and secure an authentic OTS sanction letter.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white hover:bg-slate-100 text-[#1F5EFF] font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 shadow"
              >
                Schedule Remote Consultation
              </Link>
            </div>

            {/* Card 3: Trust Signals Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                <span>Why NRIs Trust SettleLoans</span>
              </div>
              <ul className="space-y-3.5 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Remote Representation:</strong> End-to-end legal handling via Consular POA without requiring travel to India.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Family Anti-Harassment Shield:</strong> Strict cease-and-desist notices to protect Indian residential addresses.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Official Bank Sanction Letters:</strong> Verified compromise letters issued directly on official bank letterheads.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Judicial Compounding:</strong> Section 205 / 317 CrPC court representation and complete Section 147 compounding.
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
