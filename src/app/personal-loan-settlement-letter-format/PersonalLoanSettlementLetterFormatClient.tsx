'use client';
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
  Copy,
  CheckCheck,
  FileSpreadsheet,
  Send,
  UserCheck,
  AlertCircle
} from 'lucide-react';

// Copyable Template Box Component with visual feedback
function CopyableTemplateBox({
  title,
  subtitle,
  templateText,
  badgeText,
}: {
  title: string;
  subtitle: string;
  templateText: string;
  badgeText?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(templateText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:border-blue-300 transition-all duration-200 my-8">
      <div className="bg-slate-900 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
        <div>
          {badgeText && (
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#1F5EFF]/20 border border-[#1F5EFF]/40 text-[#1F5EFF] text-[11px] font-bold uppercase tracking-wider mb-1.5">
              {badgeText}
            </span>
          )}
          <div className="text-base md:text-lg font-bold text-white leading-snug">{title}</div>
          <p className="text-xs text-slate-300">{subtitle}</p>
        </div>
        <button
          onClick={handleCopy}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 shadow ${
            copied
              ? 'bg-emerald-600 text-white'
              : 'bg-[#1F5EFF] hover:bg-blue-600 text-white'
          }`}
          aria-label="Copy template text to clipboard"
        >
          {copied ? (
            <>
              <CheckCheck className="w-4 h-4 text-white" />
              <span>Copied to Clipboard!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy Template</span>
            </>
          )}
        </button>
      </div>
      <div className="p-4 md:p-6 bg-slate-50 overflow-x-auto">
        <pre className="font-mono text-xs md:text-sm text-slate-800 whitespace-pre-wrap leading-relaxed select-all bg-white p-4 rounded-xl border border-slate-200 shadow-inner">
          {templateText}
        </pre>
      </div>
      <div className="bg-slate-100 px-4 py-3 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-2">
        <span className="flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-[#1F5EFF]" />
          <span>Replace all bracketed text like <strong>[Your Full Name]</strong> before printing or emailing.</span>
        </span>
        <span className="font-semibold text-slate-700">Standard A4 Letter Format</span>
      </div>
    </div>
  );
}

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

export default function PersonalLoanSettlementLetterFormatClient() {
  const [activeId, setActiveId] = useState<string>('crucial-role-of-settlement-letter');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'crucial-role-of-settlement-letter', title: '1. Why a Written Letter is Essential' },
    { id: 'anatomical-elements-checklist', title: '2. 9 Must-Have Letter Components' },
    { id: 'comparison-letter-types', title: '3. Comparison of Settlement Letter Types' },
    { id: 'production-ready-templates', title: '4. Copyable Settlement Letter Templates' },
    { id: 'hardship-document-checklist', title: '5. Crucial Supporting Documents' },
    { id: 'submission-delivery-protocol', title: '6. Proof-of-Delivery Submission Rules' },
    { id: 'bank-evaluation-timeline', title: '7. Approval Lifecycle & Red Flags' },
    { id: 'post-approval-noc-audit', title: '8. Sanction Audit, NDC & CIBIL Update' },
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

  // Templates Content
  const templateUniversal = `Date: [DD/MM/YYYY]

To,
The Branch Manager,
[Name of the Bank / NBFC, e.g., HDFC Bank / State Bank of India / ICICI Bank],
[Branch Name and Complete Address],
[City, State, PIN Code]

CC: 
1. The Head, Stressed Assets Recovery Branch (SARB), [Bank Name]
2. The Principal Nodal Officer, [Bank Name]

Subject: Formal Request for One-Time Settlement (OTS) for Personal Loan Account No: [Your Loan Account Number]

Respected Sir / Madam,

1. BORROWER DETAILS & LOAN ACCOUNT IDENTIFICATION:
I am writing to you as the primary borrower of Personal Loan Account Number [Your Loan Account Number], sanctioned on [Loan Disbursal Date] for a principal sum of INR [Original Loan Amount]/- at your [Branch Name] branch.

2. TRACK RECORD OF REGULAR REPAYMENT:
I wish to bring to your kind attention that since the inception of this credit facility, I have consistently honored my contractual commitments by servicing [Number of Months/EMIs, e.g., 22 consecutive EMIs] on time without any default, totaling an aggregate repayment of INR [Total Amount Paid Till Date]/-. This affirms my bona fide intent as an honest borrower.

3. UNFORESEEN FINANCIAL HARDSHIP & DISTRESS:
Unfortunately, due to unforeseen and catastrophic financial circumstances beyond my reasonable control, namely [Specify hardship: severe health crisis / involuntary job loss / complete business revenue collapse], my income stream has been severely curtailed since [Month, Year of Crisis]. Despite my best efforts to sustain living expenses and manage debts, I am currently undergoing acute financial insolvency. 

4. CURRENT STATEMENT OF ACCOUNTS & ACCRUED CHARGES:
As per your latest statement, the outstanding figure is shown as INR [Total Outstanding Amount including penal charges]/-. A substantial portion of this total comprises compounding penal interest, bounce charges, late fees, and overdue levies accrued during this distress period.

5. ONE-TIME SETTLEMENT (OTS) PROPOSAL:
Under the compromise settlement guidelines framed pursuant to Reserve Bank of India (RBI) circulars, I hereby submit my formal proposal for a full and final One-Time Settlement (OTS) of the aforementioned personal loan account.

I have arranged financial assistance from close relatives to make a single lump-sum payment of:
INR [Proposed Settlement Amount in Figures]/- 
(Rupees [Proposed Settlement Amount in Words] Only), 
which represents [Percentage, e.g., 40%] of the total outstanding dues, payable within [15 / 30 days] of receiving your formal written sanction letter.

6. MANDATORY CONDITIONS PRECEDENT FOR SETTLEMENT:
This offer is submitted in good faith subject to the following standard banking conditions:
a) Complete waiver of all remaining principal, unapplied interest, penal interest, late payment penalties, and incidental charges.
b) Issuance of a formal OTS Sanction Letter on official bank letterhead detailing the accepted settlement amount, payment schedule, and account closure terms before any remittance is made.
c) Issuance of a Comprehensive Final No Dues Certificate (NDC) / No Objection Certificate (NOC) within 30 days of receiving the settlement remittance.
d) Cessation of all third-party collection agency calls, recovery visits, and withdrawal of any legal proceedings or arbitration notices.
e) Updating of the account status with credit rating agencies (CIBIL, Experian, Equifax, CRIF High Mark) as 'Settled' with INR 0 outstanding balance.

7. ENCLOSURES / SUPPORTING EVIDENCE:
I have attached the following documentary proof validating my genuine distress:
1. Copy of PAN Card & Aadhaar Card.
2. 6-Month Bank Account Statements showing absence/depletion of income.
3. [Documentary proof of hardship, e.g., Medical Discharge Summary / Termination Letter / P&L Statement].
4. Latest Loan Account Statement.

I request you to sympathetically place this proposal before the Competent Credit Committee for favorable sanction at the earliest.

Yours sincerely,

________________________
(Signature)
[Your Full Name]
PAN: [Your PAN Number]
Contact Number: [+91-XXXXXXXXXX]
Email Address: [your.email@example.com]
Residential Address: [Your Full Postal Address]`;

  const templateMedical = `Date: [DD/MM/YYYY]

To,
The Branch Manager,
[Name of the Bank / NBFC],
[Branch Address],
[City, State, PIN Code]

Subject: Application for One-Time Compromise Settlement due to Critical Medical Emergency — Personal Loan A/C: [Loan Account Number]

Respected Sir / Madam,

I am writing to formally request a One-Time Settlement (OTS) regarding my Personal Loan Account No: [Loan Account Number] held with your esteemed institution.

1. MEDICAL HARDSHIP & LOSS OF EARNING CAPACITY:
I have maintained a spotless repayment track record until [Month, Year]. However, on [Date/Month], [I / my immediate dependent, e.g., my spouse/parent] was diagnosed with a critical and life-threatening medical condition, namely [Diagnosis, e.g., Stage-3 Oncological Treatment / Major Cardiac Surgery / Prolonged ICU Hospitalization]. 

The cumulative hospitalization and continuous treatment expenditures have exceeded INR [Total Medical Expenses Incurred, e.g., 14,50,000]/-, completely wiping out my lifetime family savings and rendering me physically unable to resume full-time employment.

2. SUBMISSION OF GENUINE OTS PROPOSAL:
Against the current book outstanding of INR [Total Outstanding Amount]/-, I am submitting a formal proposal to settle this loan for a full and final lump sum of:
INR [Offered Amount in Figures]/- (Rupees [Offered Amount in Words] Only).

This amount has been arranged through benevolent emergency contributions from family members solely to obtain a clean discharge of debt.

3. WAIVER & NOC CONDITIONS:
I request the bank to exercise compassionate discretion under the RBI Fair Practices Code by waiving all penal charges, late fees, and residual balance. Upon receipt of this lump sum, the bank must issue an official No Dues Certificate (NDC) and close the account without further legal recourse.

Attached herewith are complete medical records, hospital bills, physician certificates, and bank statements for your verification.

Thanking you.

Yours faithfully,

________________________
(Signature)
[Your Full Name]
Mobile: [+91-XXXXXXXXXX]
Address: [Your Full Residential Address]`;

  const templateJobLoss = `Date: [DD/MM/YYYY]

To,
The Branch Manager / Stressed Assets Recovery Department,
[Bank / NBFC Name],
[Branch Address]

Subject: Request for Full and Final Loan Settlement on Account of Involuntary Job Loss — Loan A/C: [Loan Account Number]

Dear Sir / Madam,

I hold Personal Loan Account No. [Loan Account Number] with your branch, with an original sanctioned amount of INR [Original Principal]/-.

1. UNEMPLOYMENT & SEVERE LIQUIDITY CRUNCH:
Due to corporate restructuring and macroeconomic downsizing at my former employer [Company Name], my employment was involuntarily terminated on [Date of Layoff]. Despite active job searching over the past [Number] months, I have been unable to secure alternative employment in the current hiring market.

My household currently operates on zero regular income, and I am struggling to meet basic subsistence needs. 

2. PROPOSED SETTLEMENT TERMS:
The outstanding balance shown on my loan account stands at INR [Outstanding Amount]/-. To prevent prolonged non-performing asset (NPA) aging and resolve the matter amicably, I propose a One-Time Settlement of:
INR [Settlement Offer Amount]/- (Rupees [Amount in Words] Only).

I can pay this sum in a single tranche within [15 days] of receiving your formal written OTS approval letter on official letterhead.

3. SUPPORTING DOCUMENTS ATTACHED:
1. Official Employment Termination Letter / Relieving Letter.
2. Bank Statements demonstrating zero salary credits for the last [X] months.
3. Proof of regular payments prior to termination.

I request your urgent consideration to approve this compromise and issue a formal sanction letter.

Yours sincerely,

________________________
(Signature)
[Your Full Name]
Phone: [+91-XXXXXXXXXX]`;

  const templateBusiness = `Date: [DD/MM/YYYY]

To,
The Competent Credit Authority / Recovery Department,
[Bank / NBFC Name],
[Branch Office Address]

Subject: Compromise Settlement Proposal for Personal Loan (Business Purpose) — A/C No: [Loan Account Number]

Dear Sir / Madam,

I am writing regarding the Personal Loan Account No. [Loan Account Number] availed by me for working capital infusion into my proprietary/partnership enterprise [Firm/Enterprise Name].

1. COMMERCIAL FAILURE & INSOLVENCY:
Due to severe market disruption, bad debt defaults from major buyers, and subsequent business closure on [Date/Month], my enterprise has ceased commercial operations. The business has sustained complete capital erosion as verified by the enclosed audited financial statements.

2. ONE-TIME SETTLEMENT OFFER:
Against the ledger balance of INR [Total Outstanding Balance]/-, I propose a full and final compromise settlement of INR [Proposed Settlement Sum]/- (Rupees [Amount in Words] Only), sourced via liquidation of remaining personal household assets.

3. CONDITIONS FOR ACCEPTANCE:
The settlement is contingent upon 100% waiver of penal interest, closure of legal notices under Section 25 of the PSS Act / Section 138 of the NI Act, and issuance of a Final No Dues Certificate.

Enclosures: GST Cancellation Certificate, Bank Statements, Audited Financials, and Identity Proof.

Yours faithfully,

________________________
(Signature)
[Your Full Name]
PAN: [Your PAN]`;

  const faqs = [
    {
      question: "To whom should I address my personal loan settlement letter?",
      answer: (
        <p>
          You should address your settlement letter to <strong>The Branch Manager</strong> of the specific home branch where your loan was sanctioned or disbursed. Additionally, you should always mark a copy (CC) to <strong>The Head, Stressed Assets Recovery Branch (SARB) / Retail Credit Operations</strong> and the <strong>Principal Nodal Officer</strong> of the bank or NBFC. Addressing these senior compliance officers ensures your proposal bypasses rogue third-party collection agents and reaches the authorized credit committee.
        </p>
      )
    },
    {
      question: "What are the essential details that must be included in a loan settlement letter?",
      answer: (
        <p>
          A legally sound settlement letter must include: (1) Full borrower identity (Name, PAN, current residential address), (2) Precise loan account number and original sanctioned amount, (3) Summary of regular EMIs paid prior to default, (4) Specific explanation of genuine hardship (medical emergency, job loss, business collapse), (5) Attached documentary proof, (6) A concrete settlement amount in figures and words, (7) Payment timeframe (e.g., 15 to 30 days), and (8) Explicit conditions for payment (formal sanction letter on letterhead, 100% waiver of remaining balance, and issuance of ₹0 No Dues Certificate within 30 days).
        </p>
      )
    },
    {
      question: "What percentage of the outstanding loan amount should I offer in the settlement letter?",
      answer: (
        <p>
          As an industry benchmark, initial settlement proposal letters typically offer <strong>25% to 40% of the total outstanding dues</strong> (or approximately 35% to 50% of the original principal). Banks generally conclude unsecured personal loan settlements between <strong>35% and 60% of total dues</strong>, depending on how long the loan has been in default (NPA classification: Substandard, Doubtful, or Loss Asset), the borrower&apos;s substantiated insolvency, and the bank&apos;s internal compromise policy.
        </p>
      )
    },
    {
      question: "Can a bank reject my personal loan settlement proposal letter?",
      answer: (
        <p>
          <strong>Yes, banks have commercial discretion to reject an OTS proposal.</strong> Common grounds for rejection include: the bank suspecting willful default, the offer being unviably low without verifiable hardship documents, ongoing salary credits or visible fixed deposits in the same banking group, or active high-value asset ownership. If rejected, you can revise the proposed sum or appeal directly to the Zonal Stressed Assets Committee with legal representation.
        </p>
      )
    },
    {
      question: "What supporting documents must be attached with the settlement application?",
      answer: (
        <p>
          You must attach objective evidence of hardship: (1) For medical crises: hospital discharge summaries, specialist physician certificates, surgery bills, and pharmacy receipts; (2) For job loss: employer termination letter/relieving letter and 6-month bank statements showing zero salary credits; (3) For business failure: GST surrender proof, audited balance sheets showing losses, or insolvency filings; (4) For family bereavement: Death certificate of primary earning member.
        </p>
      )
    },
    {
      question: "How should I deliver the settlement letter to ensure legal proof of receipt?",
      answer: (
        <p>
          Always establish verifiable <strong>Proof of Delivery (POD)</strong> via three channels: (1) <strong>Registered Post with Acknowledgment Due (RPAD)</strong> or Speed Post with online tracking receipt; (2) <strong>In-person submission</strong> at the branch desk, obtaining an official stamp and signature on your duplicate copy; and (3) <strong>Official email</strong> to the Branch Manager and Nodal Officer with PDF attachments. Never rely on verbal phone conversations or unacknowledged WhatsApp messages.
        </p>
      )
    },
    {
      question: "Can I pay the settlement amount before receiving the formal bank sanction letter?",
      answer: (
        <p>
          <strong>NEVER pay any money before receiving the formal OTS Sanction Letter on official bank letterhead.</strong> If you pay money based on verbal assurances or recovery agent promises, the bank&apos;s core banking system will automatically treat the remittance as part-payment towards overdue interest and late charges, leaving the loan active and in default. Only pay once you hold a signed, stamped sanction letter specifying the exact compromise figure.
        </p>
      )
    },
    {
      question: "What should be stated in the final settlement agreement or approval letter?",
      answer: (
        <p>
          The formal OTS Sanction Letter must clearly specify: (1) The exact accepted settlement amount in figures and words, (2) The strict payment deadline or installment dates, (3) The specific loan account number, (4) An explicit clause stating that upon receipt of this sum, all remaining principal, interest, penal fees, and legal charges stand fully waived and extinguished, (5) Confirmation that all legal/police/arbitration proceedings will be unconditionally withdrawn, and (6) A commitment to issue the Final No Dues Certificate (NDC) within 30 days.
        </p>
      )
    },
    {
      question: "Does submitting a settlement letter stop bank recovery agent harassment immediately?",
      answer: (
        <p>
          Submitting a formal written letter establishes your formal intent to resolve the debt lawfully under the <strong>RBI Fair Practices Code</strong>. Once submitted, you should inform collection agents that a formal OTS is pending before the bank&apos;s Credit Committee. If agents persist with abusive calls or unannounced visits, you can file a formal complaint with the Bank&apos;s Principal Nodal Officer and escalate to the <strong>RBI Integrated Banking Ombudsman</strong>.
        </p>
      )
    },
    {
      question: "Can I settle multiple personal loans and credit cards using a single common letter?",
      answer: (
        <p>
          <strong>No.</strong> Each loan facility is governed by a distinct loan agreement, account number, and internal risk provisioning ledger. You must draft and submit a separate, individualized settlement letter for each distinct loan account, even if multiple accounts belong to the same parent bank.
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

      {/* A. Editorial Hero Section - Slate Navy #2c3348 Background */}
      <section className="w-full bg-[#2c3348] border-b border-slate-700/60 pt-8 pb-7 md:pt-12 md:pb-9 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-[#1F5EFF]/20 border border-[#1F5EFF]/40 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#1F5EFF]" />
            Banking Documentation &amp; Legal Debt Relief Guide 2026
          </div>

          {/* H1 Headline - Compact Title Size */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            Personal Loan Settlement Letter Format:{' '}
            <span className="text-[#1F5EFF]">Bank Templates, Legal Samples &amp; RBI Rules</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Discover how to draft an authoritative, legally binding One-Time Settlement (OTS) request letter to your bank manager. Access copyable templates for medical crisis, job loss, business hardship, and complete RBI compliance guidelines.
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
                  className="text-white hover:text-[#1F5EFF] font-semibold underline decoration-[#1F5EFF] underline-offset-2"
                >
                  Ashish Jhangra
                </Link>
              </span>
            </div>
            <div className="hidden sm:block text-slate-600">•</div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-slate-300">Reviewed by SettleLoans Legal Advisory Team</span>
            </div>
            <div className="hidden sm:block text-slate-600">•</div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#1F5EFF]" />
              <span className="text-slate-300">Updated: August 19, 2026</span>
            </div>
          </div>

          {/* Primary Hero CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-5 rounded-xl shadow-md hover:shadow-blue-500/20 transition-all duration-300 text-xs sm:text-sm group"
            >
              <span>Get Free Legal Settlement Drafting Help</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#production-ready-templates"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold py-2.5 px-4 rounded-xl border border-white/15 backdrop-blur-sm transition-all duration-300 text-xs sm:text-sm"
            >
              <FileText className="w-4 h-4 text-blue-300" />
              <span>View Free OTS Letter Templates</span>
            </a>
          </div>
        </div>
      </section>

      {/* B. Crisp Light-Themed Stats Strip */}
      <StatsStrip />

      {/* C. Three-Column Main Body Grid */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          {/* Left Column (Sticky TOC ONLY) */}
          <aside className="hidden lg:block sticky top-24 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 xl:p-5 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900 font-black text-sm uppercase tracking-wider mb-4 pb-2 border-b border-slate-200">
                <BookOpen className="w-4 h-4 text-[#1F5EFF]" />
                <span>Letter Format Index</span>
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
            {/* Executive Summary Box */}
            <div className="bg-blue-50 border-l-8 border-[#1F5EFF] rounded-r-2xl p-6 md:p-8 mb-10 shadow-sm">
              <div className="flex items-center gap-2 text-[#1F5EFF] font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5" />
                <span>EXECUTIVE SUMMARY: HOW TO DRAFT AN EFFECTIVE SETTLEMENT LETTER</span>
              </div>
              <ul className="space-y-3 text-sm md:text-base text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Legal Authority &amp; Standing:</strong> A formal written settlement letter submitted to the Branch Manager and Nodal Officer creates an official legal record under the RBI Master Direction on Compromise Settlements (June 2023), eliminating unofficial recovery agent exploitation.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Hardship Documentation:</strong> Letters supported by verifiable proof (hospital discharge summaries, termination letters, bank statements) receive 80% higher approval rates from bank credit committees.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Realistic Settlement Band:</strong> Starting offers of <strong>25%–40%</strong> of outstanding dues enable realistic negotiation, typically closing between <strong>35% and 60%</strong> with 100% waiver of penal interest.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Non-Negotiable Safeguards:</strong> Never pay any settlement sum until you hold an official <strong>OTS Sanction Letter on bank letterhead</strong> and a written guarantee of a final <strong>No Dues Certificate (NDC)</strong>.
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="crucial-role-of-settlement-letter" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                1. Why a Written Settlement Letter is Crucial (and How Banks Evaluate It)
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                When personal loan borrowers face unexpected financial catastrophe—such as catastrophic illness, job loss, or commercial business failure—they often make the critical mistake of negotiating verbally over phone calls with third-party recovery agents.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                In the Indian banking system, <strong>verbal negotiations carry zero legal or evidentiary weight</strong>. Recovery agents operate on commission targets and lack the statutory authority to waive loan principal, stop penal interest, or issue binding debt discharges. The only lawful, recognized method to initiate a One-Time Settlement (OTS) is by submitting a <strong>formal, written settlement proposal letter</strong> directly to the bank&apos;s authorized management.
              </p>

              {/* The Inner Banking Credit Committee Review Process */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-6 space-y-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Landmark className="w-5 h-5 text-[#1F5EFF]" />
                  How Banks Evaluate Your Settlement Proposal Letter:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm">
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <p className="font-bold text-[#1F5EFF] mb-1">1. NPA Aging &amp; Provisioning</p>
                    <p className="text-slate-600 leading-relaxed">
                      Once a loan crosses 90 days past due (NPA), banks must set aside mandatory provisioning capital (15% to 100%). A compromise settlement unlocks this locked provisioning capital on the bank&apos;s balance sheet.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <p className="font-bold text-emerald-600 mb-1">2. NPV vs. Litigation Cost</p>
                    <p className="text-slate-600 leading-relaxed">
                      The credit committee calculates the Net Present Value (NPV) of an immediate cash recovery against the 3–5 year legal cost of dragging unsecured debt through Civil Courts or Section 25 PSS Act proceedings.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <p className="font-bold text-purple-600 mb-1">3. Verifiable Insolvency</p>
                    <p className="text-slate-600 leading-relaxed">
                      The committee scrutinizes your hardship documents to ensure default was involuntary and bona fide, rather than intentional or willful financial diversion.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-base leading-relaxed text-slate-700">
                A meticulously structured settlement letter bridges the gap between your insolvency and the bank&apos;s risk-mitigation objectives, transforming an adversarial recovery dispute into an orderly, board-approved commercial compromise.
              </p>
            </section>

            {/* Section 2 */}
            <section id="anatomical-elements-checklist" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                2. The 9 Essential Pillars of an Ironclad Settlement Letter
              </h2>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                To withstand legal scrutiny and expedite sanction by the Stressed Assets Recovery Committee, your personal loan settlement letter must contain these nine mandatory anatomical components:
              </p>

              <div className="space-y-4 my-6">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-blue-100 text-[#1F5EFF] flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base mb-1">
                      Precise Identification &amp; Loan Coordinates
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Your full legal name (matching PAN card), registered residential address, permanent mobile number, official email, loan account number, loan sanction date, and the specific disbursing branch name.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      Track Record of Prior Prompt Repayments
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Highlight the exact number of consecutive monthly EMIs successfully paid prior to the crisis, along with the total cumulative amount remitted. This establishes your bona fide character and negates any allegation of fraudulent intent.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      Factual, Substantiated Hardship Statement
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      A clear, objective narrative detailing the specific unforeseen catastrophe (e.g., hospitalization, diagnosis of chronic disease, company layoffs, bankruptcy of key buyers) that disrupted your debt servicing capability.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      Statement of Current Asset &amp; Income Insolvency
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Demonstrate that your current monthly disposable income is insufficient to cover contractual EMIs after meeting bare family sustenance, and that you possess no unencumbered liquid assets to pledge.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                    5
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      Concrete One-Time Settlement (OTS) Offer Amount
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      State the specific lump-sum settlement sum offered in both figures (e.g., INR 3,50,000) and words (Rupees Three Lakhs Fifty Thousand Only), indicating the source of funds (e.g., borrowed from family/relatives).
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                    6
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      Defined Execution &amp; Payment Horizon
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Specify the payment window (typically 15 to 30 calendar days from receipt of written sanction) or propose a maximum of 2–3 structured monthly tranches if liquidity is constrained.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                    7
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      100% Waiver of Accrued Penalties &amp; Interest
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Explicitly request complete cancellation and write-off of compounding penal interest, overdue charges, cheque bounce levies, and legal notice expenses accumulated on the ledger.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                    8
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      Mandatory Pre-Conditions: Official Sanction Letter &amp; NDC
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      State unequivocally that remittance will only occur upon receipt of a formal, stamped OTS Sanction Letter on official bank stationery, followed by issuance of a ₹0 No Dues Certificate (NDC) within 30 days.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-slate-200 text-slate-800 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                    9
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      Exhaustive List of Verified Enclosures
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      An enumerated appendix of attached identity cards, 6-month bank statements, medical records, or termination letters demonstrating complete transparency.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="comparison-letter-types" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                3. Comparison Table: Different Types of Formal Debt Relief Letters
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Depending on your financial horizon and repayment capability, a One-Time Settlement letter may not be the only correspondence format. The table below compares the 4 major formal representation letters submitted to banks in India:
              </p>

              <div className="my-8 overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Formal Letter Type</th>
                      <th>Borrower Financial State</th>
                      <th>Typical Haircut / Concession</th>
                      <th>CIBIL Bureau Tag</th>
                      <th>Legal Impact &amp; Outcome</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-[#1F5EFF]">One-Time Settlement (OTS) Proposal</td>
                      <td>Permanent / Severe Insolvency (NPA 90+ DPD)</td>
                      <td className="font-bold text-emerald-600">40% – 65% Waiver</td>
                      <td className="text-amber-600 font-semibold">Reported as &quot;Settled&quot;</td>
                      <td>Full release of debt liability; ₹0 balance NDC issued; litigation halted.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Loan Restructuring / Tenor Extension</td>
                      <td>Temporary cash crunch; ongoing regular salary</td>
                      <td className="text-slate-600">0% Haircut (Tenor extended)</td>
                      <td className="text-purple-600 font-semibold">Reported as &quot;Restructured&quot;</td>
                      <td>EMIs reduced by 30%–50%; interest continues; account remains regular.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Penal Interest &amp; Charges Waiver Letter</td>
                      <td>Ready to repay full principal &amp; basic interest</td>
                      <td className="text-emerald-600 font-semibold">100% Waiver of Penalties</td>
                      <td className="text-emerald-600 font-semibold">Reported as &quot;Closed&quot;</td>
                      <td>Bank waives bounce fees and penal interest; score improves positively.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-rose-600">Anti-Harassment &amp; Legal Representation</td>
                      <td>Facing illegal recovery agent threats / home visits</td>
                      <td className="text-slate-600">Not a financial waiver</td>
                      <td className="text-slate-600 font-semibold">No bureau impact</td>
                      <td>Halts third-party calls under RBI Fair Practices Code; sets stage for lawful OTS.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Production-Ready Templates */}
            <section id="production-ready-templates" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                4. Production-Ready Settlement Letter Templates (Ready to Copy &amp; Customize)
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-6 text-slate-700">
                Below are four legally validated, field-tested settlement request letter templates designed specifically for Indian public sector banks, private commercial banks (HDFC, ICICI, Axis, Kotak, IndusInd, IDFC FIRST), and retail NBFCs (Bajaj Finance, Tata Capital, Poonawalla Fincorp).
              </p>

              {/* Template 1: Universal OTS Letter */}
              <CopyableTemplateBox
                badgeText="Universal Template • Most Popular"
                title="Template 1: Universal Personal Loan OTS Request Letter to Bank Manager"
                subtitle="Ideal for SBI, HDFC, ICICI, Axis, Kotak, Bajaj Finance, and all major Indian lenders."
                templateText={templateUniversal}
              />

              {/* Template 2: Medical Hardship Letter */}
              <CopyableTemplateBox
                badgeText="Medical Crisis • Compassionate Ground"
                title="Template 2: Loan Settlement Request Due to Severe Medical Emergency &amp; Surgery"
                subtitle="Designed for critical illnesses, prolonged hospitalizations, or family healthcare catastrophes."
                templateText={templateMedical}
              />

              {/* Template 3: Job Loss Letter */}
              <CopyableTemplateBox
                badgeText="Employment Disruption • Layoff"
                title="Template 3: Loan Settlement Request on Grounds of Involuntary Job Loss &amp; Unemployment"
                subtitle="Tailored for corporate downsizing, layoffs, and prolonged loss of monthly salary credits."
                templateText={templateJobLoss}
              />

              {/* Template 4: Business Failure Letter */}
              <CopyableTemplateBox
                badgeText="MSME &amp; Self-Employed Distress"
                title="Template 4: Settlement Letter for Small Business Insolvency &amp; Revenue Collapse"
                subtitle="For entrepreneurs who availed personal loans for working capital during business distress."
                templateText={templateBusiness}
              />
            </section>

            {/* Compact High-Impact Infographic Banner (Middle Content between Sections 4 & 5) */}
            <div className="bg-white border-2 border-blue-200 rounded-3xl overflow-hidden shadow-lg my-12 text-slate-800">
              <div className="bg-[#0A2540] text-white py-3.5 px-5 flex items-center justify-between border-b-2 border-[#1F5EFF]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#1F5EFF] flex items-center justify-center text-white text-xs shadow-sm">
                    <Scale className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-300 block">
                      Executive Process Roadmap
                    </span>
                    <h3 className="text-sm md:text-base font-black text-white leading-tight">
                      Personal Loan Settlement Letter Drafting &amp; Approval Process in India
                    </h3>
                  </div>
                </div>
                <a
                  href="/images/infographics/personal-loan-settlement-letter-format.jpg"
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
                    src="/images/infographics/personal-loan-settlement-letter-format.jpg"
                    alt="Personal Loan Settlement Letter Drafting and Bank Approval Process Infographic"
                    className="w-full h-auto object-contain max-h-[420px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Quick Crux Footer Strip */}
              <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span><strong>Crucial Rule:</strong> Always obtain the formal OTS Sanction Letter on official bank letterhead before releasing settlement funds.</span>
                </div>
                <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                  Get Free Case Evaluation &rarr;
                </Link>
              </div>
            </div>

            {/* Section 5: Crucial Supporting Documents */}
            <section id="hardship-document-checklist" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                5. Crucial Supporting Documents to Attach with Your Settlement Letter
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                A settlement proposal without verifiable hardship evidence is almost universally rejected or categorized as a deliberate strategic default. To secure an approval with an optimal 40%–60% haircut, you must substantiate your claims with objective proof:
              </p>

              <div className="my-8 overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Hardship Category</th>
                      <th>Primary Documentary Evidence Required</th>
                      <th>Supplementary Supporting Proof</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-[#1F5EFF]">Medical Emergency / Chronic Illness</td>
                      <td>Hospital Discharge Summaries, Operation Theatre Records, Attending Physician Certificate.</td>
                      <td>Cumulative pharmacy bills, diagnostic reports, and medical leave certificates.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-emerald-700">Involuntary Job Loss / Retrenchment</td>
                      <td>Employer Termination Letter, Downsizing Notice, or Official Relieving Letter.</td>
                      <td>6-Month bank statements demonstrating cessation of salary credits; Form 26AS / ITR.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-amber-700">Business Insolvency / MSME Failure</td>
                      <td>GST Surrender / Cancellation Certificate, Audited Balance Sheet showing net operating loss.</td>
                      <td>Bank statements showing customer dishonors, vendor litigation notices, lease surrender letter.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-purple-700">Death of Primary Family Breadwinner</td>
                      <td>Official Municipal Death Certificate, Legal Heir Certificate.</td>
                      <td>Surviving dependent income proof, outstanding family liability declaration.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 my-6 flex items-start gap-3.5">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs md:text-sm text-amber-900 leading-relaxed">
                  <strong>Strategic Tip:</strong> Do not attach bank statements from secondary accounts that contain substantial liquid balances or active luxury expenditures. Attach only accounts that substantiate your authentic income disruption and operational distress.
                </div>
              </div>
            </section>

            {/* Section 6: Submission Protocol */}
            <section id="submission-delivery-protocol" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                6. How to Submit the Letter &amp; Establish Legally Binding Proof of Delivery
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Merely writing an exceptional letter is insufficient; you must establish verifiable <strong>Proof of Delivery (POD)</strong> so that the bank cannot claim non-receipt in court or during Ombudsman proceedings. Follow our 3-channel submission protocol:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-8">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#1F5EFF] flex items-center justify-center mb-3 font-bold">
                      <Send className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-2">Channel 1: Speed Post / RPAD</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      Send via Registered Post with Acknowledgment Due (RPAD) or India Post Speed Post. Preserve the consignment tracking receipt and delivery confirmation slip indefinitely.
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-[#1F5EFF] uppercase tracking-wider">High Evidentiary Value</span>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3 font-bold">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-2">Channel 2: Physical Branch Inward</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      Carry two identical printed copies to your home branch. Submit one copy to the Branch Operations Desk and get an official &quot;Received &amp; Stamped&quot; acknowledgment with date and signature on the second copy.
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">Instant Acknowledgment</span>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-3 font-bold">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-2">Channel 3: Official Email to Nodal Officer</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      Email the signed PDF letter with enclosures to the Branch Manager, copying the Bank&apos;s Principal Nodal Officer and Stressed Assets Recovery Branch (SARB) email IDs.
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-purple-600 uppercase tracking-wider">Digital Paper Trail</span>
                </div>
              </div>
            </section>

            {/* Section 7: Bank Evaluation & Red Flags */}
            <section id="bank-evaluation-timeline" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                7. What Happens After Submission: Timeline, Negotiation &amp; Red Flags
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Once your settlement letter is delivered, the internal banking workflow typically follows this timeline:
              </p>

              <div className="space-y-4 my-6">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-900 text-sm">Days 1 – 7: Initial Branch Inward &amp; File Routing</p>
                    <p className="text-xs text-slate-600">
                      The branch reviews account history, calculates unapplied interest, and forwards the proposal to the Regional/Zonal Stressed Assets Recovery Branch.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-900 text-sm">Days 8 – 20: Credit Committee Evaluation &amp; Counter-Offer</p>
                    <p className="text-xs text-slate-600">
                      The credit committee assesses provisioning and may communicate a counter-offer (e.g., if you proposed 30%, the bank may counter with 50%).
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-900 text-sm">Days 21 – 30: Issuance of Formal OTS Sanction Letter</p>
                    <p className="text-xs text-slate-600">
                      Upon consensus on the compromise sum, the bank issues the official One-Time Settlement Sanction Letter containing payment deadlines.
                    </p>
                  </div>
                </div>
              </div>

              {/* Red Flags to Avoid */}
              <div className="bg-rose-50 border-2 border-rose-200 rounded-2xl p-6 my-8">
                <h3 className="text-lg font-bold text-rose-900 flex items-center gap-2 mb-3">
                  <ShieldAlert className="w-5 h-5 text-rose-600" />
                  5 Critical Settlement Red Flags You Must Never Commit:
                </h3>
                <ul className="space-y-2.5 text-xs md:text-sm text-rose-800">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Never Pay Cash to Recovery Agents:</strong> Banks never collect OTS payments in cash through third-party agents. All remittances must be through official bank transfer (NEFT/RTGS/Cheque/DD) directly to your loan account.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Never Pay Before Receiving the Stamped Sanction Letter:</strong> Verbal promises on WhatsApp or phone calls are completely invalid. Money paid without a sanction letter is credited as part-payment.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Never Transfer Funds into Personal Accounts:</strong> Fraudulent collection agents often solicit payments to personal UPI IDs or fictitious agency accounts. Remit strictly to the bank&apos;s designated pool account or your loan account.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Never Accept an Open-Ended Settlement:</strong> Ensure the sanction letter clearly specifies that upon payment of the agreed sum, the entire balance is permanently waived and ₹0 liability remains.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Never Miss the Payment Due Date:</strong> OTS sanction letters carry strict expiration dates (e.g., valid until 31st of the month). A single day delay voids the sanction, restoring the original full balance.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 8: Post-Approval Sanction Audit & CIBIL */}
            <section id="post-approval-noc-audit" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                8. Post-Settlement Protocol: Sanction Letter Verification, NDC &amp; CIBIL Audit
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Securing the OTS approval is only half the battle. To ensure complete financial and legal freedom, follow this post-settlement verification checklist:
              </p>

              <div className="space-y-4 my-6">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <FileSpreadsheet className="w-5 h-5 text-[#1F5EFF]" />
                    1. Audit the OTS Sanction Letter Before Transferring Money
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Verify that the letter is printed on official bank stationery, includes a unique reference number, clearly states the compromise sum matching your negotiation, displays the signature of the Chief Manager/Authorized Signatory, and explicitly affirms that all remaining dues will be written off upon payment.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-emerald-600" />
                    2. Obtain the Comprehensive Final No Dues Certificate (NDC)
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Within 30 days of remitting the settlement payment, demand your official No Dues Certificate (or NOC) confirming that the loan account has been resolved under OTS and no further liability survives. This document protects you against future debt collectors or ARC asset sales.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                    3. Audit Your TransUnion CIBIL &amp; Experian Reports After 45 Days
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Under RBI rules, the lender must report the account to all 4 credit bureaus as <strong>&quot;Settled&quot; with a ₹0 outstanding balance</strong> within 30 to 45 days. If the bank erroneously reports the loan as active overdue, immediately raise an online CIBIL Dispute attaching your Sanction Letter and NDC.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: FAQ Accordion */}
            <CompanySection />

            <section id="faqs" className="scroll-mt-28 mb-14">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#1F5EFF] flex items-center justify-center">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-xs md:text-sm text-slate-500">
                    Authoritative legal answers regarding loan settlement letters, bank formats &amp; RBI compliance.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
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

            {/* Regulatory Sources & References (Official Citations) */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                <Landmark className="w-4 h-4 text-[#1F5EFF]" />
                <span>Official Regulatory Sources &amp; Statutory References</span>
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
                    <strong>Reserve Bank of India (RBI):</strong> Master Direction on Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24)
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
                    <strong>RBI Fair Practices Code:</strong> Master Circular on Recovery Agents &amp; Code of Conduct for Regulated Entities (RBI/2022-23/108)
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Section 20 Directives on Account Settlement Tagging &amp; ₹0 Balance Reporting
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://sci.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Supreme Court of India:</strong> Landmark Judgments on Borrower Dignity &amp; Anti-Harassment Safeguards (<em>ICICI Bank vs. Prakash Kaur</em>)
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
                    <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Statutory Dispute Escalation Portal for OTS Non-Compliance &amp; NDC Delays
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://financialservices.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Department of Financial Services (DFS), Ministry of Finance:</strong> Guidelines on Non-Discriminatory One-Time Settlement Schemes
                  </a>
                </li>
              </ul>
            </div>

            {/* Related Guides & Resources Strip */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#1F5EFF]" />
                Explore Related Personal Loan Debt Relief Guides
              </h3>
              <div className="flex flex-wrap gap-2.5">
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement CIBIL Impact
                </Link>
                <Link
                  href="/personal-loan-settlement-vs-closure"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Loan Settlement vs Loan Closure
                </Link>
                <Link
                  href="/personal-loan-settlement-vs-restructuring"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Loan Settlement vs Restructuring
                </Link>
                <Link
                  href="/personal-loan-settlement-company"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement Company
                </Link>
                <Link
                  href="/personal-loan-debt-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Debt Settlement
                </Link>
                <Link
                  href="/personal-loan-settlement-lawyer"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement Lawyer
                </Link>
                <Link
                  href="/bank-loan-settlement-rules"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Bank Loan Settlement Rules
                </Link>
                <Link
                  href="/loan-penalty-waiver-request"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Loan Penalty Waiver Request
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
                Ashish specializes in distressed asset negotiations, RBI compromise compliance, and legal representations for borrowers across Indian commercial banks and NBFCs.
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
                <span>Emergency Advocate Assistance</span>
              </div>
              <div className="text-xl font-black mb-3 leading-tight">
                Need Help Drafting Your Bank Settlement Letter?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Don&apos;t risk rejection by sending an incomplete proposal. Let our experienced banking advocates draft a legally fortified OTS letter tailored to your hardship.
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
                    <strong>100% Legal Protection:</strong> Formal representations served directly to Bank Nodal Officers under RBI Fair Practices Code.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Shield:</strong> Immediate halt of abusive third-party recovery agent calls and unauthorized home visits.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Official Bank Sanctions:</strong> Every settlement letter backed by an authentic, stamped bank sanction letter and ₹0 NDC.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>No Advance Upfront Fees:</strong> Transparent, ethical advisory engineered to safeguard the borrower&apos;s dignity and financial future.
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
