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
  Award,
  PhoneCall,
  ExternalLink,
  Landmark,
  Check,
  BookOpen,
  Scale,
  FileText,
  HelpCircle,
  Info,
  Users,
  GraduationCap,
  Briefcase,
  AlertCircle,
  Building2,
  Lock,
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

export default function EducationLoanSettlementIndiaClient() {
  const [activeId, setActiveId] = useState<string>('statutory-framework-education-loans');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'statutory-framework-education-loans', title: '1. Statutory Framework of Education Loans' },
    { id: 'moratorium-expiry-unemployment-npa', title: '2. Moratorium Expiry & NPA Classification' },
    { id: 'parent-coapplicant-legal-liabilities', title: '3. Parent & Co-Applicant Liabilities' },
    { id: 'loan-tiers-cgfsel-collateral-rules', title: '4. Loan Tiers, CGFSEL & Collateral Limits' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Settlement Blueprint' },
    { id: 'internal-haircut-npv-calculation', title: '6. How Banks Calculate Education Loan OTS' },
    { id: 'step-by-step-ots-negotiation-strategy', title: '7. Step-by-Step OTS Negotiation Strategy' },
    { id: 'restructuring-vs-extension-vs-ots', title: '8. Restructuring vs Extension vs OTS' },
    { id: 'legal-defenses-section138-harassment', title: '9. Legal Defenses & Anti-Harassment Rights' },
    { id: 'sanction-letter-audit-zero-ndc', title: '10. Sanction Letter Audit & ₹0 NDC Rules' },
    { id: 'cibil-score-rehabilitation-roadmap', title: '11. CIBIL Impact & Credit Rehabilitation' },
    { id: 'company-resolution-section', title: '12. SettleLoans Legal Defense & Support' },
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
      question: "Can an education loan be settled through a One-Time Settlement (OTS) in India?",
      answer: (
        <p>
          Yes, education loans can be settled through a formal <strong>One-Time Settlement (OTS)</strong> with public sector banks, private banks, and NBFCs. When a borrower suffers genuine hardship such as prolonged post-graduation unemployment, medical disability, or business insolvency, lenders evaluate the account under their board-approved Compromise Settlement Policy and RBI Master Directions, allowing a negotiated lump-sum payoff with a substantial waiver on interest and principal.
        </p>
      )
    },
    {
      question: "What happens if I cannot pay my education loan after the moratorium period expires?",
      answer: (
        <p>
          Once the moratorium period (typically course duration plus 6 to 12 months) ends, EMIs become immediately payable. If payments are missed, the account is categorized as Special Mention Account (SMA-0 for 1-30 days, SMA-1 for 31-60 days, and SMA-2 for 61-90 days). On the 91st day of continuous default, the loan is classified as a <strong>Non-Performing Asset (NPA)</strong>, triggering formal recovery proceedings, credit bureau score downgrades, and outreach to co-applicants.
        </p>
      )
    },
    {
      question: "Are parents or co-applicants legally liable if the student borrower cannot find a job?",
      answer: (
        <p>
          Under <strong>Section 128 of the Indian Contract Act, 1872</strong>, the liability of a surety or co-applicant is co-extensive with that of the principal debtor. Because parents sign as joint co-borrowers or guarantors on education loans, banks possess the legal right to demand payment from them if the student defaults. However, recovery against parents must strictly comply with the RBI Fair Practices Code, prohibiting unannounced home harassment, abusive language, or threatening senior citizens.
        </p>
      )
    },
    {
      question: "Can a bank seize parental property for an education loan below ₹7.5 Lakh?",
      answer: (
        <p>
          Under the <strong>Indian Banks&apos; Association (IBA) Model Educational Loan Scheme</strong> and Government of India directives, loans up to ₹4 Lakh require zero collateral and no third-party guarantee, while loans between ₹4 Lakh and ₹7.5 Lakh require only a parent co-obligation and are covered by the Credit Guarantee Fund Scheme for Education Loans (CGFSEL). Banks cannot seize or auction parental immovable property for loans under ₹7.5 Lakh unless collateral was voluntarily pledged.
        </p>
      )
    },
    {
      question: "How does the Credit Guarantee Fund Scheme for Education Loans (CGFSEL) affect settlement?",
      answer: (
        <p>
          The CGFSEL provides banks with a government credit guarantee covering up to <strong>75% of the defaulted amount</strong> for eligible education loans up to ₹7.5 Lakh. When an account turns NPA, banks can invoke the guarantee to recover a major portion of their loss from the National Credit Guarantee Trustee Company (NCGTC). This established loss-absorption mechanism gives banks substantial provisioning room to sanction favorable compromise settlements.
        </p>
      )
    },
    {
      question: "What percentage of debt haircut can be negotiated on a defaulted education loan?",
      answer: (
        <p>
          On unsecured education loans classified as Doubtful or Loss Assets with 100% bank provisioning, borrowers typically negotiate debt waivers ranging from <strong>40% to 65% of total outstanding dues</strong> (including complete waiver of penal interest, bounce charges, and unapplied compounding interest). For collateralized overseas loans exceeding ₹7.5 Lakh, settlements generally range between 20% and 40% depending on property realizable value.
        </p>
      )
    },
    {
      question: "Can a bank file a criminal case or send borrowers to jail for education loan default?",
      answer: (
        <p>
          <strong>No.</strong> In India, loan default arising from genuine economic inability or involuntary unemployment is strictly a civil dispute, not a criminal offence. The Supreme Court has repeatedly affirmed that default alone does not constitute cheating or fraud under the Bharatiya Nyaya Sanhita (formerly IPC Section 420). Criminal action is only possible if the borrower submitted forged degree certificates, fake income proofs, or diverted disbursed funds.
        </p>
      )
    },
    {
      question: "What legal action can banks take for education loan default?",
      answer: (
        <p>
          For education loan default, banks can initiate civil suits for recovery in competent Civil Courts, issue legal notices under <strong>Section 25 of the Payment and Settlement Systems Act</strong> (if ECS/NACH auto-debit mandates bounced), initiate summary arbitral proceedings (if stipulated in the agreement), refer the dispute to National Lok Adalat for conciliation, or file an application before the Debt Recovery Tribunal (DRT) if aggregate dues exceed ₹20 Lakh.
        </p>
      )
    },
    {
      question: "How does an education loan settlement impact the CIBIL score of student and parent?",
      answer: (
        <p>
          Following a settlement, the lending institution updates credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark) with the status <strong>&apos;Settled&apos;</strong> or &apos;Post-Write-off Settled&apos; for both the student borrower and the parent co-applicant, reflecting an outstanding balance of ₹0. While this temporarily lowers credit scores by 60 to 120 points, the score can be systematically rebuilt within 12 to 24 months through secured credit instruments.
        </p>
      )
    },
    {
      question: "Can I request a moratorium extension or loan restructuring instead of a settlement?",
      answer: (
        <p>
          Yes. If you anticipate securing employment in the near future and wish to avoid a &apos;Settled&apos; mark on your CIBIL report, you can formally submit a representation to the bank requesting an extension of the repayment holiday, elongation of loan tenure up to 15 years to reduce monthly EMI, or capitalization of accrued interest under the bank&apos;s internal stressed loan restructuring framework.
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

      {/* A. Editorial Hero Section - Charcoal Navy #2d313d Background */}
      <section
        className="w-full border-b border-slate-700/80 pt-8 pb-7 md:pt-12 md:pb-9 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <GraduationCap className="w-3.5 h-3.5 text-[#3b82f6]" />
            Student Loan NPA Resolution &amp; Co-Applicant Legal Defense 2026
          </div>

          {/* H1 Headline - Compact Title Size */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            How to Settle Education Loan in India:{' '}
            <span className="text-[#3b82f6] md:text-[#60a5fa]">Moratorium Expiry, Parent Liability &amp; RBI Rules</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Facing severe post-graduation unemployment with an expired moratorium? Understand how Indian banks classify student loan NPAs, shield senior citizen parent co-applicants from recovery harassment, and negotiate an authorized One-Time Settlement (OTS).
          </p>

          {/* Author & Review Meta Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs text-slate-300 mb-5 pb-3 border-b border-slate-700 max-w-xl mx-auto">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-[9px]">
                AJ
              </div>
              <span>
                Written by{' '}
                <Link
                  href="/authors/ashish-jhangra"
                  className="text-white hover:text-[#3b82f6] font-semibold underline decoration-[#3b82f6] underline-offset-2"
                >
                  Ashish Jhangra
                </Link>
              </span>
            </div>
            <div className="hidden sm:block text-slate-500">•</div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-slate-300">Reviewed by SettleLoans Banking Legal Advisory Team</span>
            </div>
            <div className="hidden sm:block text-slate-500">•</div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-slate-300">Updated: August 22, 2026</span>
            </div>
          </div>

          {/* Primary Hero CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-5 rounded-xl shadow-md hover:shadow-blue-500/20 transition-all duration-300 text-xs sm:text-sm group"
            >
              <span>Request Free Education Loan Case Evaluation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#internal-haircut-npv-calculation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold py-2.5 px-4 rounded-xl backdrop-blur-sm transition-all duration-300 text-xs sm:text-sm"
            >
              <Scale className="w-4 h-4 text-blue-300" />
              <span>Explore Student Loan Haircut Rules</span>
            </a>
          </div>
        </div>
      </section>

      {/* B. Crisp Light-Themed Stats Strip */}
      <StatsStrip />

      {/* C. Three-Column Main Body Grid */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column (Sticky TOC + Quick Crux) */}
          <aside className="hidden lg:block sticky top-24 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 xl:p-5 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900 font-black text-sm uppercase tracking-wider mb-4 pb-2 border-b border-slate-200">
                <BookOpen className="w-4 h-4 text-[#1F5EFF]" />
                <span>Guide Navigation</span>
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

            {/* Quick Crux Callout Card */}
            <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-4 shadow-sm">
              <div className="flex items-center gap-2 text-[#1F5EFF] font-bold text-xs uppercase tracking-wide mb-2">
                <Info className="w-4 h-4" />
                <span>Key Statutory Takeaway</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Education loans up to ₹7.5 Lakh are covered under the Central Government CGFSEL scheme. Involuntary post-graduation unemployment gives you the legal right to negotiate an authorized compromise settlement while shielding parents from aggressive recovery.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">
            
            {/* Section 1 */}
            <section id="statutory-framework-education-loans" className="scroll-mt-24 mb-10">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-200">
                1. Statutory Framework of Education Loans in India
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Education financing in India operates under a specialized regulatory umbrella created jointly by the Reserve Bank of India (RBI) and the Indian Banks&apos; Association (IBA). Designed to foster higher education access without imposing insurmountable barriers on young scholars, the IBA Model Educational Loan Scheme categorizes student credit into distinct tiers based on ticket size and security structures. Unlike commercial corporate debt or retail unsecured personal loans, education loans feature a mandatory statutory repayment holiday known as the moratorium period.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Under the Ministry of Education guidelines and the National Credit Guarantee Trustee Company (NCGTC), eligible student borrowings up to ₹7.5 Lakh sanctioned through institutional portals like Vidyalakshmi are supported by the Credit Guarantee Fund Scheme for Education Loans (CGFSEL). This sovereign guarantee mitigates credit loss risks for commercial lenders while prohibiting them from demanding collateral or third-party guarantors beyond immediate parents. However, when academic programs conclude amidst severe macroeconomic headwinds or corporate hiring freezes, the transition from academic moratorium into active monthly amortization frequently creates unprecedented financial distress for young graduates.
              </p>
            </section>

            {/* Section 2 */}
            <section id="moratorium-expiry-unemployment-npa" className="scroll-mt-24 mb-10">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-200">
                2. The Post-Graduation Moratorium Trap: Unemployment &amp; NPA Classification
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                The moratorium period is statutorily defined as the entire duration of the academic course plus either one year after course completion or six months after securing employment, whichever occurs earlier. During this phase, simple interest accrues on the disbursed tranches, but repayments are voluntary. The crisis initiates the exact moment this grace period lapses. If a graduate fails to secure campus placement or sustain gainful employment, compound interest suddenly gets capitalized into the core principal ledger, causing the outstanding liability to swell exponentially.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                When monthly equated installments (EMIs) remain unpaid due to lack of income, the lending institution tracks the delinquency through the RBI Income Recognition and Asset Classification (IRACP) framework. For the initial 30 days of default, the account is tagged as Special Mention Account 0 (SMA-0), advancing to SMA-1 (31–60 days) and SMA-2 (61–90 days). Upon crossing the 90-day threshold of continuous non-service, the account is formally declared a Non-Performing Asset (NPA). At this juncture, the bank ceases recognizing interest income on its books, mandates immediate balance-sheet loan-loss provisioning, and transfers the portfolio file to its internal Stressed Assets Recovery Branch (SARB) or outsourced recovery agencies.
              </p>

              {/* Table 1: Default Stages & Asset Classification */}
              <div className="overflow-x-auto my-6">
                <table>
                  <thead>
                    <tr>
                      <th>Delinquency Phase</th>
                      <th>Overdue Timeline</th>
                      <th>Bank Balance-Sheet Action</th>
                      <th>Legal &amp; Recovery Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>SMA-0</strong></td>
                      <td>1 – 30 Days</td>
                      <td>Standard Asset tracking; internal payment alerts generated.</td>
                      <td>Automated SMS and email reminders sent to student.</td>
                    </tr>
                    <tr>
                      <td><strong>SMA-1</strong></td>
                      <td>31 – 60 Days</td>
                      <td>Standard Stressed bucket; early warning reporting.</td>
                      <td>Tele-calling outreach initiated to student and co-borrower.</td>
                    </tr>
                    <tr>
                      <td><strong>SMA-2</strong></td>
                      <td>61 – 90 Days</td>
                      <td>High-risk default monitoring; credit bureau alert.</td>
                      <td>Final cure notice issued; automated mandate bounce charges applied.</td>
                    </tr>
                    <tr>
                      <td><strong>Substandard NPA</strong></td>
                      <td>91 – 365 Days</td>
                      <td>15% – 25% mandatory provisioning mandated by RBI.</td>
                      <td>Account marked NPA; recall legal notices served on co-applicants.</td>
                    </tr>
                    <tr>
                      <td><strong>Doubtful (D1–D3)</strong></td>
                      <td>12 – 36+ Months</td>
                      <td>40% to 100% loss provisioning recognized.</td>
                      <td>Prime eligibility window for formal OTS haircut negotiation.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3 */}
            <section id="parent-coapplicant-legal-liabilities" className="scroll-mt-24 mb-10">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-200">
                3. Parent &amp; Co-Applicant Legal Liabilities under Section 128 of Indian Contract Act
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                One of the most distressing dimensions of student loan default in India is the intense pressure mounted on parents. Under Section 128 of the Indian Contract Act, 1872, the liability of a guarantor or co-promisor is co-extensive with that of the principal debtor, unless explicitly contracted otherwise. Because commercial lenders mandate parents to sign as joint co-applicants or personal guarantors on education loan agreements, banks possess the strict contractual right to demand full satisfaction of unpaid arrears directly from the parents if the graduate cannot remit payments.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                However, co-extensive liability does not grant lenders or their outsourced recovery agents a license to deploy coercive, humiliating, or unlawful collection tactics. Under the comprehensive <em>RBI Fair Practices Code</em> and Master Circular on Recovery Agents (RBI/2022-23/108), banks are strictly prohibited from intimidating senior citizens, calling before 8:00 AM or after 7:00 PM, visiting family homes without prior written notice, or using threatening language regarding police arrest. When parents are retired, living on modest pensions, or facing medical emergencies, these verifiable vulnerabilities serve as decisive evidentiary proof during formal compromise settlement representations before the Bank Credit Committee.
              </p>
            </section>

            {/* Section 4 */}
            <section id="loan-tiers-cgfsel-collateral-rules" className="scroll-mt-24 mb-10">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-200">
                4. Loan Tiers, CGFSEL Guarantee &amp; Collateral Enforceability
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Understanding your loan tier is crucial for identifying your true legal exposure and settlement bargaining leverage. Under the IBA Educational Loan Scheme, loans up to ₹4 Lakh are purely clean advances requiring zero collateral and zero third-party guarantee, meaning recovery is entirely unsecured. For loans between ₹4 Lakh and ₹7.5 Lakh, no tangible collateral can be demanded; banks are protected by the Central Government&apos;s CGFSEL scheme, which guarantees reimbursement of 75% of the defaulted principal and interest upon NPA classification. For loans exceeding ₹7.5 Lakh—often availed for premier domestic institutions or overseas master&apos;s degrees—banks mandate tangible collateral security such as residential property, fixed deposits, or commercial plots.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Where tangible immovable property has been mortgaged, the lender may threaten enforcement under the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002. However, for unsecured loans or advances covered under CGFSEL, banks have no statutory power to seize parental ancestral properties or residential premises without obtaining an exhaustive civil court decree. Because litigating unsecured educational defaults through civil courts requires substantial legal expenditure and several years of judicial process, banks strongly prefer negotiating a structured One-Time Settlement rather than pursuing protracted litigation.
              </p>

              {/* Table 2: Education Loan Tiers & Enforcement Matrix */}
              <div className="overflow-x-auto my-6">
                <table>
                  <thead>
                    <tr>
                      <th>Loan Category</th>
                      <th>Ticket Size</th>
                      <th>Mandatory Security Structure</th>
                      <th>Legal Enforcement Mechanism</th>
                      <th>Average Settlement Haircut</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Tier 1: Unsecured</strong></td>
                      <td>Up to ₹4.00 Lakh</td>
                      <td>Zero collateral; zero third-party guarantee.</td>
                      <td>Civil Suit / Lok Adalat summary conciliation.</td>
                      <td><strong>50% – 65%</strong></td>
                    </tr>
                    <tr>
                      <td><strong>Tier 2: CGFSEL Backed</strong></td>
                      <td>₹4.01L – ₹7.50 Lakh</td>
                      <td>Parent co-obligation; 75% CGFSEL credit guarantee.</td>
                      <td>NCGTC claim invocation; compromise settlement.</td>
                      <td><strong>40% – 60%</strong></td>
                    </tr>
                    <tr>
                      <td><strong>Tier 3: Collateralized</strong></td>
                      <td>Above ₹7.50 Lakh</td>
                      <td>Parent co-obligation + Immovable property mortgage / FD.</td>
                      <td>SARFAESI Act notices (Demand &amp; Possession).</td>
                      <td><strong>20% – 40%</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* High-Impact Visual Infographic Banner between Section 4 and Section 5 */}
            <div className="bg-white border-2 border-blue-200 rounded-3xl overflow-hidden shadow-lg my-8 text-slate-800" id="infographic-resolution-blueprint">
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
                      Education Loan Settlement &amp; Co-Applicant Rights Roadmap
                    </h3>
                  </div>
                </div>
                <a
                  href="/images/infographics/education-loan-settlement-india.jpg"
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
                    src="/images/infographics/education-loan-settlement-india.jpg"
                    alt="Education Loan Settlement Summary and Process Blueprint Infographic"
                    className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Quick Crux Footer Strip */}
              <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span><strong>Key Takeaway:</strong> Defaulted student loans can be closed through an authorized bank compromise settlement, waiving 40% to 65% of outstanding dues.</span>
                </div>
                <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                  Get Free Case Evaluation &rarr;
                </Link>
              </div>
            </div>

            {/* Section 5 */}
            <section id="internal-haircut-npv-calculation" className="scroll-mt-24 mb-10">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-200">
                5. How Banks Calculate Education Loan Settlements (Haircut &amp; NPV Formula)
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                A common misconception among borrowers is that loan settlement percentages are arbitrarily decided by recovery agents or local branch executives. In reality, Indian commercial banks and NBFCs evaluate One-Time Settlement (OTS) proposals using rigorous quantitative algorithms rooted in the Reserve Bank of India&apos;s Master Direction on Compromise Settlements (DOR.STR.REC.20/21.04.048/2023-24). The bank&apos;s Credit Committee compares the immediate cash value of your settlement offer against the Net Present Value (NPV) of projected future recoveries through legal enforcement.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                When an education loan remains in Doubtful (D1, D2, D3) or Loss asset status for over 12 to 24 months, the bank has already recognized 40% to 100% provisioning losses on its balance sheet. Under NPV accounting, prolonged civil litigation costs, advocate retainers, court fee stamp duties, and the time value of money severely erode the net realizable recovery. Consequently, accepting an immediate lump-sum settlement of 35% to 55% of the total book balance enables the bank to write back existing provisions directly into its operating profit, creating a commercially rational justification for approving substantial debt haircuts.
              </p>
            </section>

            {/* Section 6 */}
            <section id="step-by-step-ots-negotiation-strategy" className="scroll-mt-24 mb-10">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-200">
                6. Step-by-Step OTS Negotiation Strategy for Unemployed Graduates
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Successfully securing a favorable compromise settlement requires navigating the bank&apos;s institutional hierarchy with verified documentary evidence. The first step involves assembling a comprehensive Distress Portfolio, including university graduation certificates, verified copies of job application rejection letters, employment termination slips (if retrenched), and bank statements of both student and parents establishing lack of income. This documentation conclusively refutes any allegation of willful default, positioning the delinquency as genuine economic hardship.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                The second phase entails submitting a formal written OTS representation addressed to the Branch Manager, with simultaneous copies marked to the Regional Head of the Stressed Assets Recovery Branch (SARB) and the Principal Nodal Officer. The proposal must outline the disbursement history, highlight any pre-default repayment track record, detail the involuntary economic crisis, and present an initial settlement anchor typically pegged at 25% to 30% of total dues. As negotiations progress through the bank&apos;s Settlement Advisory Committee, the final approved compromise typically settles between 40% and 55%, payable in a structured single or dual tranche.
              </p>
            </section>

            {/* Section 7 */}
            <section id="restructuring-vs-extension-vs-ots" className="scroll-mt-24 mb-10">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-200">
                7. Restructuring vs Moratorium Extension vs One-Time Settlement
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Distressed graduates must carefully evaluate whether a compromise One-Time Settlement or a formal loan restructuring represents the optimal financial path. Restructuring is advisable if the borrower expects to secure employment within three to six months. Under RBI Prudential Norms, lenders possess internal discretion to elongate the loan tenure up to the maximum permissible ceiling of 15 years, convert accumulated unpaid interest into a Funded Interest Term Loan (FITL), or grant a temporary step-up EMI schedule. This route preserves credit standing by keeping the loan account active without a negative settlement tag.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Conversely, where post-graduation employment prospects remain deeply compromised, career changes are underway, or parental retirement eliminates any capacity to service ongoing monthly EMIs, debt restructuring merely delays an inevitable default while compounding penal interest. In such scenarios, a full and final One-Time Settlement delivers definitive closure, legally extinguishing all future financial liabilities and shielding family assets from lingering claims.
              </p>

              {/* Table 3: Resolution Options Comparison */}
              <div className="overflow-x-auto my-6">
                <table>
                  <thead>
                    <tr>
                      <th>Resolution Channel</th>
                      <th>Primary Benefit</th>
                      <th>Credit Bureau Impact</th>
                      <th>Long-Term Financial Liability</th>
                      <th>Ideal Candidate Profile</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Moratorium Extension</strong></td>
                      <td>Temporary grace period without immediate default.</td>
                      <td>Standard Account; zero score damage.</td>
                      <td>100% Principal + Capitalized Compounding Interest.</td>
                      <td>Students appearing for competitive exams or higher studies.</td>
                    </tr>
                    <tr>
                      <td><strong>Loan Restructuring</strong></td>
                      <td>Reduced monthly EMI via extended 15-year tenure.</td>
                      <td>Tagged as &apos;Restructured&apos;; mild credit impact.</td>
                      <td>Full repayment with extended interest timeline.</td>
                      <td>Graduates with confirmed near-term job offers.</td>
                    </tr>
                    <tr>
                      <td><strong>Compromise OTS</strong></td>
                      <td>40% to 65% debt waiver; immediate closure.</td>
                      <td>Tagged as &apos;Settled&apos;; score drop for 12–24 months.</td>
                      <td><strong>Zero Remaining Liability</strong> upon lump-sum payment.</td>
                      <td>Graduates facing severe long-term unemployment distress.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 8 */}
            <section id="legal-defenses-section138-harassment" className="scroll-mt-24 mb-10">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-200">
                8. Legal Defenses Against Bank Notices: Section 138, Section 25 &amp; Harassment Rights
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                When an education loan defaults, collection departments often issue intimidating legal demand notices. A common tactic involves citing Section 25 of the Payment and Settlement Systems Act, 2007 (for bounced NACH/e-mandates) or Section 138 of the Negotiable Instruments Act, 1881 (if post-dated cheques bounce). Borrowers must understand that while bouncing an electronic clearing mandate is a technical quasi-criminal matter, establishing genuine lack of funds due to post-academic unemployment disproves dishonest intent. Participating in court proceedings with appropriate legal representation or transferring the matter to National Lok Adalat facilitates an amicable compromise settlement under judicial supervision.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Furthermore, if recovery agents engage in coercive behavior—such as visiting the borrower&apos;s home outside authorized hours (8 AM to 7 PM), calling relatives who are not co-borrowers, using derogatory language, or threatening immediate police arrest—the borrower and parents have the legal right to file a formal complaint with the Bank Principal Nodal Officer, followed by an escalation to the Reserve Bank - Integrated Ombudsman. Under the landmark Supreme Court ruling in <em>ICICI Bank vs. Shanti Devi Sharma</em>, lenders are vicariously liable for the unlawful acts of their recovery agents, and established harassment provides powerful legal leverage to expedite favorable settlement terms.
              </p>
            </section>

            {/* Section 9 */}
            <section id="sanction-letter-audit-zero-ndc" className="scroll-mt-24 mb-10">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-200">
                9. Sanction Letter Audit, Safe Payment Protocols &amp; Zero-Balance NDC
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Before transferring a single rupee toward an agreed settlement amount, borrowers must execute a stringent verification protocol. Never make payments based on verbal representations, WhatsApp messages, or scanned letters sent by third-party agencies. Insist upon receiving an authentic, physical <strong>OTS Sanction Letter</strong> issued on official bank letterhead, bearing the signature, employee designation, and official stamp of an authorized Credit Committee officer (such as the Assistant General Manager or Chief Manager).
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                The sanction letter must explicitly enumerate: (a) the exact negotiated compromise amount, (b) the tranche payment schedule, (c) a clear clause affirming the permanent waiver and write-off of all remaining principal, penal interest, and legal costs, and (d) an unconditional commitment to issue a No Dues Certificate (NDC) and withdraw all pending legal notices. Payments must strictly be deposited directly into the specific loan account number via NEFT/RTGS or account payee draft. Pursuant to <strong>RBI Circular RBI/2023-24/60</strong>, banks are legally mandated to release all original educational documents, certificates, or property titles and issue the final closure NDC within 30 days of receiving settlement remittance, subject to a statutory penalty of ₹5,000 per day payable to the borrower for any unexcused delay.
              </p>
            </section>

            {/* Section 10 */}
            <section id="cibil-score-rehabilitation-roadmap" className="scroll-mt-24 mb-10">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-200">
                10. Credit Bureau Impact (CIBIL/CRIF) &amp; Post-Settlement Financial Rehabilitation
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Following the execution of a compromise settlement, the lending institution reports the account status to all four authorized credit information companies—CIBIL, Experian, Equifax, and CRIF High Mark—as &apos;Settled&apos; or &apos;Post-Write-off Settled&apos; with an outstanding balance reflecting ₹0. While this status reflects that the debt was closed with a haircut rather than repaid in full, it is vastly preferable to an open, compounding &apos;Written-Off / Wilful Default&apos; status. The &apos;Settled&apos; mark halts further downward score degradation and stops legal collection activity permanently.
              </p>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Rebuilding your CIBIL score post-settlement follows a systematic rehabilitation roadmap. Once steady employment is secured, the borrower should obtain a secured credit card backed by a modest Fixed Deposit (FD) of ₹20,000 to ₹50,000. By utilizing under 30% of the available credit limit and consistently servicing the statement balance in full on or before the due date, credit bureaus register a continuous pattern of responsible financial behavior. Within 18 to 24 months, credit scores systematically rebound from the 600s back into the prime 750+ territory, restoring full eligibility for competitive prime retail credit.
              </p>
            </section>

            {/* Company Section Placement before FAQs */}
            <div id="company-resolution-section" className="scroll-mt-24 my-10">
              <CompanySection />
            </div>

            {/* Section 11: Interactive FAQ Accordion */}
            <section id="faqs" className="scroll-mt-24 my-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#1F5EFF] flex items-center justify-center font-black">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-black text-slate-900">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-xs md:text-sm text-slate-500">
                    Expert legal and regulatory answers for distressed student loan borrowers and parent guarantors
                  </p>
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

            {/* Official Sources & Regulatory References Strip */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-[#1F5EFF]" />
                Official Statutory Authorities &amp; Banking Regulations
              </h3>
              <ul className="space-y-3 text-xs md:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Reserve Bank of India (RBI):</strong> Master Direction on Compromise Settlements and Technical Write-offs (RBI/2023-24/40 DOR.STR.REC.20/21.04.048/2023-24)
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.iba.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Indian Banks&apos; Association (IBA):</strong> Model Educational Loan Scheme for Pursuing Higher Education in India and Abroad
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.ncgtc.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>National Credit Guarantee Trustee Company (NCGTC):</strong> Credit Guarantee Fund Scheme for Education Loans (CGFSEL) Operational Directives
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>RBI Circular RBI/2023-24/60:</strong> Release of Movable/Immovable Property Documents on Repayment/Settlement of Personal Loans &amp; ₹5,000/day Penalty Rules
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
                    <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Online Grievance Redressal Portal for Coercive Recovery &amp; Unlawful Harassment
                  </a>
                </li>
              </ul>
            </div>

            {/* Related Guides & Resources Strip */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#1F5EFF]" />
                Explore Related Banking &amp; Debt Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2.5">
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Bank OTS Policy Guide
                </Link>
                <Link
                  href="/personal-loan-settlement-letter-format"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Loan Settlement Letter Format
                </Link>
                <Link
                  href="/personal-loan-settlement-percentage"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Loan Settlement Percentage
                </Link>
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Lok Adalat Notice Defense
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Can I Go to Jail for Default?
                </Link>
                <Link
                  href="/recovery-agent-visiting-workplace-office"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Recovery Agent Workplace Visits
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Loan Settlement CIBIL Impact
                </Link>
                <Link
                  href="/how-to-avoid-loan-settlement-scams"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  How to Avoid Settlement Scams
                </Link>
                <Link
                  href="/section-138-cheque-bounce-loan-default"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Section 138 Notice Defense
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  No Dues Certificate Rules
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
                  <h4 className="font-bold text-slate-900 text-base leading-tight">
                    <Link
                      href="/authors/ashish-jhangra"
                      className="hover:text-[#1F5EFF] transition-colors"
                    >
                      Ashish Jhangra
                    </Link>
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    Debt Settlement Strategist &amp; Banking Legal Specialist
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Ashish specializes in distressed student loan resolution, NPA haircut calculations, and representing graduate borrowers and parent guarantors before Bank Credit Committees across India.
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
                <span>Student Loan Legal Advisory</span>
              </div>
              <h3 className="text-xl font-black mb-3 leading-tight">
                Are Recovery Agents Harassing Your Parents?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Stop illegal collection calls and threats against your family. Let our experienced banking advocates audit your loan tier, invoke RBI Fair Practice codes, and negotiate a formal OTS.
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
                    <strong>100% Legal Protection:</strong> Formal legal representations served directly to Bank Nodal Officers and SARB Committees under RBI Master Directions.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Shield:</strong> Immediate halt of abusive third-party recovery calls and unauthorized home visits targeting senior citizen parents.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Official Stamped Sanctions:</strong> Every settlement verified by an authentic bank approval letter on official letterhead before any funds are paid.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed ₹0 NDC:</strong> Complete closure tracking until the formal No Dues Certificate is issued and credit bureaus are updated.
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
