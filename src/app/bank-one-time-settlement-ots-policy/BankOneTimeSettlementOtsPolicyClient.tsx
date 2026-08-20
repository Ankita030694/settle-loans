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
  Copy,
  CheckCheck,
  FileSpreadsheet,
  Send,
  UserCheck,
  AlertCircle,
  BadgePercent,
  Calculator,
  Briefcase,
  Layers,
  ArrowUpRight
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
          <h3 className="text-base md:text-lg font-bold text-white leading-snug">{title}</h3>
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
          <span>Replace all placeholder brackets like <strong>[Your Full Name]</strong> before formal submission.</span>
        </span>
        <span className="font-semibold text-slate-700">RBI Master Direction Compliant</span>
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

export default function BankOneTimeSettlementOtsPolicyClient() {
  const [activeId, setActiveId] = useState<string>('understanding-bank-ots-framework');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'understanding-bank-ots-framework', title: '1. Statutory Framework of Bank OTS' },
    { id: 'npa-classification-aging-mechanics', title: '2. NPA Asset Classification & Aging' },
    { id: 'internal-haircut-calculation-formula', title: '3. How Banks Calculate Haircuts & NPV' },
    { id: 'delegation-of-powers-credit-committee', title: '4. Bank Approval Matrix & Authority Tiers' },
    { id: 'step-by-step-ots-negotiation-strategy', title: '5. Step-by-Step OTS Negotiation Guide' },
    { id: 'infographic-resolution-blueprint', title: '6. Visual OTS Process Blueprint' },
    { id: 'ots-vs-restructuring-vs-lok-adalat', title: '7. OTS vs Restructuring vs Lok Adalat' },
    { id: 'copyable-ots-proposal-template', title: '8. Formal Bank OTS Request Template' },
    { id: 'sanction-letter-audit-ndc-protocol', title: '9. Sanction Letter Audit & ₹0 NDC Rules' },
    { id: 'cibil-impact-credit-rebuilding', title: '10. CIBIL Impact & Credit Rehabilitation' },
    { id: 'company-resolution-section', title: '11. SettleLoans Legal Defense & Support' },
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

  const otsApplicationTemplate = `Date: [DD/MM/YYYY]

To,
The Branch Manager,
[Name of the Bank / NBFC, e.g., State Bank of India / HDFC Bank / ICICI Bank / Axis Bank],
[Branch Name and Postal Address],
[City, State, PIN Code]

CC:
1. The Assistant General Manager / Head, Stressed Assets Recovery Branch (SARB), [Bank Name]
2. The Principal Nodal Officer / Grievance Redressal Officer, [Bank Name]

Subject: Formal Application for Compromise One-Time Settlement (OTS) under RBI Master Direction DOR.STR.REC.20/21.04.048/2023-24 — Loan A/C No: [Your Complete Loan Account Number]

Respected Sir / Madam,

1. BORROWER IDENTIFICATION & DISBURSAL PARTICULARS:
I am the primary borrower for the credit facility detailed below, sanctioned and disbursed by your esteemed institution:
- Borrower Full Name: [Your Full Name as per PAN]
- PAN Card Number: [Your 10-digit PAN]
- Loan Account Number: [Loan Account Number]
- Facility Type: [Unsecured Personal Loan / Business Loan / Credit Card / MSME Facility]
- Sanctioned Principal: INR [Original Disbursed Principal Amount]/-
- Disbursal Date: [DD/MM/YYYY]

2. TRACK RECORD OF BONA FIDE REPAYMENT PRIOR TO DEFAULT:
I wish to place on record that I have maintained an unblemished repayment track record from inception, diligently servicing [Number of consecutive EMIs, e.g., 26 EMIs] amounting to an aggregate repayment of INR [Total Repayment Amount Paid]/- prior to encountering involuntary financial insolvency. This confirms my bona fide intent as an honest borrower who has never engaged in willful default or diversion of funds.

3. DETAILS OF GENUINE AND INVOLUNTARY FINANCIAL HARDSHIP:
Commencing from [Month, Year], my financial capacity suffered an unexpected, catastrophic breakdown due to [Specify reason: severe medical emergency requiring prolonged hospitalization / involuntary loss of employment due to corporate downsizing / irreversible commercial losses resulting in enterprise shutdown]. 
Despite exhaustive personal efforts to liquidate savings and meet living liabilities, my income has been permanently compromised, rendering me completely incapable of servicing the contracted monthly EMIs.

4. STATEMENT OF DUES & SURCHARGE BREAKDOWN:
As per your latest statement of accounts dated [Date], the ledger shows an outstanding book balance of INR [Total Outstanding Book Dues]/-. A substantial portion of this inflated balance consists of compounding penal interest, overdue late levies, bounce charges, and penal interest accrued during the period of financial distress.

5. COMPROMISE ONE-TIME SETTLEMENT (OTS) PROPOSAL:
Pursuant to the Reserve Bank of India (RBI) Master Direction on Compromise Settlements and Technical Write-offs (RBI/2023-24/40 DOR.STR.REC.20/21.04.048/2023-24) and your Board-Approved Compromise Settlement Policy (CSP), I hereby submit a formal compromise settlement offer.

With financial assistance graciously offered by immediate family members solely to resolve this distressed obligation, I offer a full, final, and non-severable settlement amount of:
INR [Proposed Settlement Amount in Figures]/- 
(Rupees [Proposed Settlement Amount in Words] Only),
representing [Percentage, e.g., 40%] of the book balance, payable in a single lump-sum tranche within [15 / 30 days] of receiving your formal written OTS Sanction Letter.

6. MANDATORY STATUTORY & BANKING CONDITIONS PRECEDENT:
This compromise settlement proposal is submitted subject to the following standard banking conditions:
a) Complete waiver and permanent extinguishment of all residual principal, unapplied interest, penal interest, legal charges, and late levies upon receipt of the settlement sum.
b) Issuance of a formal OTS Sanction Letter on official bank letterhead signed by an authorized designated signatory, specifying the agreed sum and account closure timeline.
c) Remittance of the settlement amount strictly into the designated loan account via direct banking channels (NEFT/RTGS/Account Payee Cheque).
d) Immediate cessation of all third-party collection agent communication, unannounced home visits, and unconditional withdrawal of any pending civil, arbitration, or Section 138/Section 25 proceedings.
e) Issuance of a comprehensive No Dues Certificate (NDC) and closure certificate within 30 days of payment under RBI Circular RBI/2023-24/60, and updating credit information companies (CIBIL, Experian, Equifax, CRIF) to status 'Settled' with INR 0 balance.

7. ENCLOSURES OF VERIFIABLE HARDSHIP EVIDENCE:
1. Copy of PAN Card & Aadhaar Card.
2. Certified Bank Statements (6 Months) proving severe income reduction.
3. Hardship Documentation: [Attach Medical Records / Termination Letter / P&L Balance Sheets / GST Surrender Certificate].
4. Latest Loan Account Statement.

I humbly request you to place this application before the Competent Credit Committee for sympathetic evaluation and formal sanction at the earliest.

Yours sincerely,

________________________
(Signature)
[Your Full Name]
Contact Mobile: [+91-XXXXXXXXXX]
Email Address: [your.email@example.com]
Residential Address: [Your Full Postal Address]`;

  const faqs = [
    {
      question: "What is a Bank One-Time Settlement (OTS) and how does it legally work in India?",
      answer: (
        <p>
          A <strong>Bank One-Time Settlement (OTS)</strong> is a legally binding compromise contract between a regulated financial institution (Bank or NBFC) and a distressed borrower. Under this framework, the lender agrees to accept a negotiated lump-sum payment (or structured tranches) that is lower than the total book outstanding, voluntarily waiving the remaining balance, penal interest, and incidental legal fees. Once paid, the loan account is fully extinguished, all legal proceedings are formally withdrawn, and the bank issues a <strong>No Dues Certificate (NDC)</strong> under board-approved compromise policies framed in compliance with Reserve Bank of India (RBI) Master Directions.
        </p>
      )
    },
    {
      question: "How do banks calculate the OTS settlement amount and haircut for Non-Performing Assets (NPAs)?",
      answer: (
        <p>
          Banks determine the acceptable OTS floor using a <strong>Net Present Value (NPV) recovery formula</strong>. The Credit Committee evaluates: (1) The realizable value of any underlying security, (2) The projected legal recovery timeframe (typically 3 to 7 years in DRT or Civil Courts), (3) Litigation costs and advocate fees, (4) The discount rate (cost of funds), and (5) The cumulative loan-loss provisioning already allocated against the asset. For unsecured personal loans or credit cards classified as <em>Doubtful (D1/D2/D3)</em> or <em>Loss Assets</em> where 100% provisioning is already recognized on the bank&apos;s balance sheet, banks are empowered to accept substantial debt haircuts ranging between <strong>40% and 70%</strong>.
        </p>
      )
    },
    {
      question: "What are the RBI guidelines on haircut limits and compromise settlements?",
      answer: (
        <p>
          Under the <strong>RBI Master Direction on Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24)</strong> issued on June 8, 2023, all Commercial Banks, Urban Co-operative Banks, and NBFCs must implement a board-approved Compromise Settlement Policy. The guidelines stipulate: (a) Objective and non-discriminatory criteria for granting concessions, (b) A clear delegation of authority matrix where higher haircuts must be approved by designated senior committees, (c) A minimum cooling-off period of 12 months before a borrower can be granted fresh credit post-settlement, and (d) Mandatory quarterly reporting of all compromise settlements to the bank&apos;s Board of Directors.
        </p>
      )
    },
    {
      question: "At what stage of loan default is a bank most willing to negotiate an OTS?",
      answer: (
        <p>
          Banks demonstrate the highest willingness to negotiate once an account has crossed the <strong>90-day overdue threshold</strong> and entered Non-Performing Asset (NPA) status. Specifically, accounts in <strong>Doubtful-1 (D1: 12–24 months overdue)</strong>, <strong>Doubtful-2 (D2: 24–36 months overdue)</strong>, or <strong>Loss Asset</strong> categories receive the most favorable settlement terms. At these stages, the bank has already absorbed heavy balance-sheet provisions (25% to 100%), and recovering immediate liquid cash through an OTS provides a direct write-back to the bank&apos;s profit-and-loss statement.
        </p>
      )
    },
    {
      question: "How should a borrower initiate and negotiate an OTS to achieve maximum debt waiver?",
      answer: (
        <p>
          To secure the maximum legal haircut: (1) <strong>Establish Involuntary Distress:</strong> Compile rock-solid evidence of job loss, medical disability, or business insolvency to disprove willful default; (2) <strong>Bypass Low-Level Agents:</strong> Never negotiate terms with third-party recovery agents who lack sanctioning authority; (3) <strong>Submit a Formal Written OTS Proposal:</strong> Address the Branch Manager and Head of Stressed Assets Recovery Branch (SARB) referencing RBI Master Directions; (4) <strong>Anchor Your Initial Offer:</strong> Start with a realistic proposal of <strong>25% to 35%</strong> of book balance to negotiate toward a 40%–55% compromise; (5) <strong>Insist on Official Sanction:</strong> Never transfer funds until you receive a formal, stamped OTS Sanction Letter on official bank letterhead.
        </p>
      )
    },
    {
      question: "Can a borrower settle a secured loan (like a home loan or LAP) under an OTS policy?",
      answer: (
        <p>
          <strong>Yes, secured loans can be settled under OTS</strong>, but banks offer much smaller haircuts (usually 10% to 25% waiver of penal interest and legal costs) because the bank holds primary mortgage rights under the <strong>SARFAESI Act, 2002</strong> to take physical possession and auction the underlying property. Significant haircuts on secured debts are approved only if the collateralized property has severe title defects, valuation shortfalls, structural encumbrances, or is tied up in protracted DRT litigation where recovery costs exceed the realizable security value.
        </p>
      )
    },
    {
      question: "What authority level in a bank approves a One-Time Settlement proposal?",
      answer: (
        <p>
          Settlement approval follows the bank&apos;s <strong>Delegation of Financial Powers (DoFP)</strong> matrix. Branch Managers generally possess authority only to waive penal interest up to ₹50,000–₹1 Lakh. Compromise proposals involving principal write-offs for retail, personal, and SME loans are evaluated and sanctioned by the <strong>Regional Settlement Committee</strong>, <strong>Stressed Assets Recovery Branch (SARB) Committee</strong>, or <strong>Zonal/Board-Level Compromise Committees</strong> depending on the total sanctioned exposure.
        </p>
      )
    },
    {
      question: "What is the difference between a Bank OTS and Lok Adalat settlement?",
      answer: (
        <p>
          A <strong>Bank OTS</strong> is an internal administrative settlement executed directly between the borrower and lender under the bank&apos;s compromise policy. A <strong>Lok Adalat settlement</strong> is a statutory dispute resolution mechanism under the <em>Legal Services Authorities Act, 1987</em>. Lok Adalat awards have the status of a <strong>Civil Court decree with finality</strong>—no appeal lies against them in any court. Banks frequently offer pre-approved, standardized discount slabs during National Lok Adalat sessions to rapidly clear low-ticket retail NPA portfolios.
        </p>
      )
    },
    {
      question: "What precautions must a borrower take before remitting the settlement payment?",
      answer: (
        <p>
          Borrowers must adhere to four cardinal security rules: (1) <strong>Zero Verbal Payments:</strong> Never pay based on phone calls, SMS, or WhatsApp promises from recovery agents; (2) <strong>Audit the Sanction Letter:</strong> Ensure you hold a physical, stamped OTS approval on official bank letterhead signed by an authorized officer; (3) <strong>Verify Direct Credit:</strong> Remit payments strictly into your designated loan account number via NEFT/RTGS or account payee draft—never into an individual&apos;s account; (4) <strong>Explicit Closure Clause:</strong> Confirm the letter explicitly states that the agreed sum constitutes full and final satisfaction with zero remaining liability.
        </p>
      )
    },
    {
      question: "How long does a bank have to issue the No Dues Certificate and return property papers post-settlement?",
      answer: (
        <p>
          Pursuant to <strong>RBI Circular RBI/2023-24/60</strong> (<em>Release of Movable/Immovable Property Documents on Repayment/Settlement of Personal Loans</em>), all Regulated Entities must release original property documents and issue a comprehensive No Dues Certificate within <strong>30 calendar days</strong> of receiving full settlement remittance. If the bank delays beyond 30 days for reasons attributable to the lender, it is legally mandated to pay compensation to the borrower at the rate of <strong>₹5,000 for each day of delay</strong>.
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
            <Scale className="w-3.5 h-3.5 text-[#3b82f6]" />
            Banking NPA Mechanics &amp; RBI Compromise Settlement Guide 2026
          </div>

          {/* H1 Headline - Compact Title Size */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            Bank One-Time Settlement (OTS) Policy:{' '}
            <span className="text-[#3b82f6] md:text-[#60a5fa]">How to Negotiate &amp; RBI Haircut Calculation Guide</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Master the internal banking algorithms, Net Present Value (NPV) recovery models, and RBI Compromise Settlement Directives that govern debt haircuts. Learn how to negotiate an authoritative, legally fortified One-Time Settlement.
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
              <span className="text-slate-300">Updated: August 20, 2026</span>
            </div>
          </div>

          {/* Primary Hero CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-5 rounded-xl shadow-md hover:shadow-blue-500/20 transition-all duration-300 text-xs sm:text-sm group"
            >
              <span>Request Free Bank OTS Case Evaluation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#step-by-step-ots-negotiation-strategy"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold py-2.5 px-4 rounded-xl backdrop-blur-sm transition-all duration-300 text-xs sm:text-sm"
            >
              <Calculator className="w-4 h-4 text-blue-300" />
              <span>Explore NPA Haircut Formulas</span>
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
                <span>OTS Policy Navigation</span>
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
            
            {/* Executive Crux Callout */}
            <div className="bg-blue-50 border-l-8 border-[#1F5EFF] rounded-r-2xl p-6 md:p-8 mb-10 shadow-sm">
              <div className="flex items-center gap-2 text-[#1F5EFF] font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5" />
                <span>EXECUTIVE BRIEF: THE REAL MECHANICS OF BANK ONE-TIME SETTLEMENTS</span>
              </div>
              <ul className="space-y-3 text-sm md:text-base text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Statutory Mandate:</strong> Bank One-Time Settlements are not discretionary &apos;favors&apos; by branch staff. Under the <strong>RBI Master Direction on Compromise Settlements (June 2023)</strong>, all commercial banks and NBFCs operate board-approved Compromise Settlement Policies designed to resolve unserviceable NPAs.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>The NPV Haircut Equation:</strong> Credit committees evaluate OTS proposals by comparing immediate cash against the Net Present Value (NPV) of prolonged legal recovery minus advocate fees, court delays, and provisioning drag.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Provisioning Sweet Spot:</strong> Accounts classified as <strong>Doubtful (D1/D2/D3)</strong> or <strong>Loss Assets</strong> carry 25% to 100% balance-sheet provisioning, allowing banks to sanction <strong>40% to 70% debt waivers</strong> with minimal balance-sheet impact.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Binding Safeguards:</strong> Never pay any settlement sum until you possess an authentic <strong>OTS Sanction Letter on official bank letterhead</strong> and a guaranteed timeline for a <strong>₹0 No Dues Certificate</strong>.
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="understanding-bank-ots-framework" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                1. The Statutory Framework of Bank OTS: Understanding the RBI 2023 Master Direction
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                When borrowers face catastrophic life disruptions—such as permanent medical disability, job termination, or severe commercial enterprise collapse—servicing contractual EMIs becomes financially impossible. In response, borrowers often find themselves inundated with aggressive collection calls, unannounced home visits, and intimidating legal notices under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                What most borrowers do not realize is that the Indian banking framework provides a formal, structured, and legally recognized exit mechanism known as a <strong>One-Time Settlement (OTS)</strong> or <strong>Compromise Settlement</strong>.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                On June 8, 2023, the Reserve Bank of India issued a landmark regulatory directive: <strong>Master Direction – Priority Sector Lending &amp; Compromise Settlements and Technical Write-offs (RBI/2023-24/40 DOR.STR.REC.20/21.04.048/2023-24)</strong>. This framework transformed the landscape of distressed debt resolution in India by establishing statutory uniformity across all Scheduled Commercial Banks, Regional Rural Banks, Urban Co-operative Banks, and Non-Banking Financial Companies (NBFCs).
              </p>

              {/* Pillars of RBI OTS Framework */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#1F5EFF] flex items-center justify-center font-bold">
                      <Landmark className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">Board-Approved Compromise Policy</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Every regulated bank must maintain a comprehensive, non-discriminatory compromise policy ratified by its Board of Directors, ensuring objective hardship criteria rather than arbitrary manager favoritism.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                      <Scale className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">Judicial Non-Interference</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under the <em>Banking Regulation Act, 1949 (Section 21A &amp; 35A)</em> and Supreme Court rulings, commercial decisions to settle bad loans are protected as prudent risk management to prevent asset erosion.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">Mandatory Extinguishment</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Once the agreed OTS sum is remitted, the lender must permanently extinguish all residual principal, unapplied interest, and penal charges, withdrawing all pending legal proceedings.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                      <Clock className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">Cooling-Off &amp; Credit Reporting</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The RBI prescribes a mandatory 12-month cooling period before fresh borrowing eligibility, and mandates precise reporting of the account status as &apos;Settled&apos; with ₹0 balance across credit bureaus.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section id="npa-classification-aging-mechanics" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                2. NPA Asset Classification &amp; Aging Mechanics: How Default Buckets Dictate Settlement Flexibility
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                To negotiate effectively with a bank, a borrower must understand how the bank&apos;s internal accounting engine categorizes defaulted debt. Under the <strong>RBI Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP)</strong>, loan accounts progress through rigid chronological stages:
              </p>

              {/* Asset Classification Table */}
              <div className="my-8 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="p-3 text-xs md:text-sm">Default Category</th>
                      <th className="p-3 text-xs md:text-sm">Overdue Period</th>
                      <th className="p-3 text-xs md:text-sm">Mandatory Bank Provisioning</th>
                      <th className="p-3 text-xs md:text-sm">Bank Settlement Appetite</th>
                      <th className="p-3 text-xs md:text-sm">Typical Haircut Band</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 text-xs md:text-sm font-bold text-slate-900">Standard (SMA-0)</td>
                      <td className="p-3 text-xs md:text-sm">1 – 30 Days</td>
                      <td className="p-3 text-xs md:text-sm">0.40% (Standard Provision)</td>
                      <td className="p-3 text-xs md:text-sm text-amber-700 font-semibold">Zero (Full EMI recovery pursued)</td>
                      <td className="p-3 text-xs md:text-sm">0% (Penalty waiver only)</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-xs md:text-sm font-bold text-slate-900">Standard (SMA-1)</td>
                      <td className="p-3 text-xs md:text-sm">31 – 60 Days</td>
                      <td className="p-3 text-xs md:text-sm">0.40%</td>
                      <td className="p-3 text-xs md:text-sm text-amber-700 font-semibold">Very Low (Pre-NPA collections)</td>
                      <td className="p-3 text-xs md:text-sm">0% – 10% (Late fee relief)</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-xs md:text-sm font-bold text-slate-900">Standard (SMA-2)</td>
                      <td className="p-3 text-xs md:text-sm">61 – 90 Days</td>
                      <td className="p-3 text-xs md:text-sm">0.40%</td>
                      <td className="p-3 text-xs md:text-sm text-blue-700 font-semibold">Moderate (Restructuring offered)</td>
                      <td className="p-3 text-xs md:text-sm">10% – 20% (Interest concession)</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-xs md:text-sm font-bold text-red-600">Substandard NPA</td>
                      <td className="p-3 text-xs md:text-sm">91 Days – 12 Months</td>
                      <td className="p-3 text-xs md:text-sm">15% (Secured) / 25% (Unsecured)</td>
                      <td className="p-3 text-xs md:text-sm text-blue-800 font-semibold">High (Compromise negotiations open)</td>
                      <td className="p-3 text-xs md:text-sm font-bold text-emerald-700">30% – 45% Haircut</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-xs md:text-sm font-bold text-red-700">Doubtful-1 (D1 NPA)</td>
                      <td className="p-3 text-xs md:text-sm">12 – 24 Months</td>
                      <td className="p-3 text-xs md:text-sm">25% (Secured) / 100% (Unsecured)</td>
                      <td className="p-3 text-xs md:text-sm text-emerald-700 font-bold">Very High (SARB escalation)</td>
                      <td className="p-3 text-xs md:text-sm font-bold text-emerald-700">40% – 60% Haircut</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-xs md:text-sm font-bold text-red-800">Doubtful-2 (D2 NPA)</td>
                      <td className="p-3 text-xs md:text-sm">24 – 36 Months</td>
                      <td className="p-3 text-xs md:text-sm">40% (Secured) / 100% (Unsecured)</td>
                      <td className="p-3 text-xs md:text-sm text-emerald-700 font-bold">Aggressive settlement push</td>
                      <td className="p-3 text-xs md:text-sm font-bold text-emerald-700">50% – 65% Haircut</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-xs md:text-sm font-bold text-red-900">Loss Asset / Written Off</td>
                      <td className="p-3 text-xs md:text-sm">&gt; 36 Months / Uncollectable</td>
                      <td className="p-3 text-xs md:text-sm">100% (Fully Written-Off on balance sheet)</td>
                      <td className="p-3 text-xs md:text-sm text-emerald-800 font-bold">Maximum (Any recovery is profit)</td>
                      <td className="p-3 text-xs md:text-sm font-bold text-emerald-700">55% – 75%+ Haircut</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-1">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>The Banking Secret: Why Aging Enhances Your Negotiation Leverage</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                  When a loan enters Doubtful (D1/D2) or Loss Asset status, the bank has already deducted 100% of the unsecured amount from its capital profits as mandatory RBI provisions. When you pay an OTS settlement sum on a written-off account, <strong>100% of that cash flows directly into the bank&apos;s current quarter operating profit</strong> as &apos;Recovery from Written-Off Accounts.&apos; This creates a powerful commercial incentive for senior recovery committees to approve deep discounts.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="internal-haircut-calculation-formula" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                3. The Internal Haircut Calculation Formula: How Bank Credit Committees Determine the OTS Floor
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                Banks do not pick settlement figures out of thin air. Behind closed doors, the bank&apos;s Credit Appraisal Committee applies a financial algorithm known as the <strong>Net Present Value (NPV) Recovery Comparison Model</strong>.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Under RBI rules, a Credit Committee can legally sanction an OTS proposal only if the immediate settlement cash exceeds or equals the projected net recovery from litigation, discounted over time.
              </p>

              {/* The Formula Breakdown Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 my-8 shadow-xl">
                <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
                  <Calculator className="w-4 h-4" />
                  <span>The Statutory Bank OTS Evaluation Formula</span>
                </div>
                <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-4 my-3 font-mono text-sm md:text-base text-blue-200 text-center select-all">
                  NPV Legal Recovery = [Estimated Realizable Security − Litigation Costs − Opportunity Cost] / (1 + r)^t
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-xs md:text-sm text-slate-300">
                  <div className="border-t border-slate-800 pt-3">
                    <strong className="text-white block mb-1">Realizable Security Value:</strong>
                    Distress sale value of attached property. For unsecured personal loans and credit cards, this variable is exactly <strong>₹0</strong>.
                  </div>
                  <div className="border-t border-slate-800 pt-3">
                    <strong className="text-white block mb-1">Litigation &amp; Advocate Costs:</strong>
                    Filing fees, advocate retainers, court processing, and execution fees (averaging ₹50,000 to ₹2.5 Lakhs per account).
                  </div>
                  <div className="border-t border-slate-800 pt-3">
                    <strong className="text-white block mb-1">Time Horizon (t):</strong>
                    Average judicial resolution time in Indian Debt Recovery Tribunals (DRT) or Civil Courts (typically 3 to 7 years).
                  </div>
                  <div className="border-t border-slate-800 pt-3">
                    <strong className="text-white block mb-1">Discount Rate (r):</strong>
                    The bank&apos;s Marginal Cost of Funds Based Lending Rate (MCLR), eroding future value by 8%–10% annually.
                  </div>
                </div>
              </div>

              {/* Mathematical Case Study */}
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 my-6 shadow-sm">
                <h3 className="text-base md:text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-[#1F5EFF]" />
                  Mathematical Case Study: ₹10 Lakh Unsecured Personal Loan in Doubtful-2 NPA
                </h3>
                <div className="space-y-3 text-xs md:text-sm text-slate-700">
                  <p>
                    <strong>Book Ledger Balance:</strong> Principal ₹7,00,000 + Accrued Penal Interest ₹3,00,000 = <strong>₹10,00,000</strong>.
                  </p>
                  <p>
                    <strong>Bank&apos;s Litigation Reality:</strong> Since the debt is unsecured, a civil suit or Section 25 PSS Act execution takes approximately 4 years, incurring ₹1,20,000 in advocate fees with high risk of non-execution if the borrower is insolvent.
                  </p>
                  <p>
                    <strong>NPV of Litigation Recovery:</strong> (₹3,00,000 potential delayed attachment − ₹1,20,000 legal costs) discounted over 4 years = <strong>₹1,22,000</strong>.
                  </p>
                  <p className="bg-emerald-50 text-emerald-900 p-3.5 rounded-xl border border-emerald-200 font-medium">
                    <strong>The Settlement Sanction:</strong> If the borrower offers a cash OTS of <strong>₹4,00,000 (a 60% haircut)</strong>, the Credit Committee easily justifies sanctioning the proposal because ₹4 Lakhs immediate cash delivers more than 3x the discounted legal recovery.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="delegation-of-powers-credit-committee" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                4. Delegation of Financial Powers: Why Knowing Bank Authority Tiers Protects You
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                A frequent and costly mistake made by borrowers is spending weeks arguing with local branch managers or field recovery agents. Under the internal <strong>Delegation of Financial Powers (DoFP)</strong> matrix of Indian banks, branch staff have near-zero legal capacity to write off loan principal.
              </p>

              {/* Hierarchy Cards */}
              <div className="space-y-4 my-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 block mb-1">Level 1: Branch Manager / Scale-I to Scale-III</span>
                    <h4 className="text-base font-bold text-slate-900">Branch Operations Desk</h4>
                    <p className="text-xs text-slate-600 mt-1">Can waive overdue late fees and penal interest up to ₹25,000–₹1,00,000. <strong>Zero power to waive principal debt.</strong></p>
                  </div>
                  <div className="bg-white border border-slate-200 py-1.5 px-3 rounded-lg text-xs font-bold text-slate-700 text-center flex-shrink-0">
                    Sanction Ceiling: &le; ₹1 Lakh Waiver
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-blue-600 block mb-1">Level 2: Regional Settlement Committee / AGM</span>
                    <h4 className="text-base font-bold text-slate-900">Regional / Cluster Recovery Committee</h4>
                    <p className="text-xs text-slate-600 mt-1">Empowered to sanction 25% to 50% haircuts on retail personal loans, credit cards, and SME debts up to ₹25 Lakhs exposure.</p>
                  </div>
                  <div className="bg-white border border-slate-200 py-1.5 px-3 rounded-lg text-xs font-bold text-[#1F5EFF] text-center flex-shrink-0">
                    Sanction Ceiling: Up to ₹25 Lakhs
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-purple-600 block mb-1">Level 3: Stressed Assets Recovery Branch (SARB) / DGM</span>
                    <h4 className="text-base font-bold text-slate-900">Zonal Compromise Committee (ZCC)</h4>
                    <p className="text-xs text-slate-600 mt-1">Dedicated stressed asset specialists authorized to sanction up to 60%–70% haircuts on retail and mid-corporate exposures up to ₹1 Crore.</p>
                  </div>
                  <div className="bg-white border border-slate-200 py-1.5 px-3 rounded-lg text-xs font-bold text-purple-700 text-center flex-shrink-0">
                    Sanction Ceiling: Up to ₹1 Crore
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-emerald-600 block mb-1">Level 4: Managing Director &amp; Board Committee</span>
                    <h4 className="text-base font-bold text-slate-900">Head Office Compromise Committee (HOCC)</h4>
                    <p className="text-xs text-slate-600 mt-1">Highest statutory committee reviewing multi-crore consortium exposures, large corporate defaults, and specialized stressed asset write-offs.</p>
                  </div>
                  <div className="bg-white border border-slate-200 py-1.5 px-3 rounded-lg text-xs font-bold text-emerald-700 text-center flex-shrink-0">
                    Sanction Ceiling: Unlimited / Board Level
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="step-by-step-ots-negotiation-strategy" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                5. Step-by-Step Strategy: How to Negotiate a One-Time Settlement Like an Expert
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-6 text-slate-700">
                Securing a favorable One-Time Settlement requires disciplined legal preparation, rigorous accounting audits, and structured escalation. Follow this 5-stage blueprint:
              </p>

              {/* 5-Step Process Cards */}
              <div className="space-y-6 my-8">
                {/* Step 1 */}
                <div className="flex gap-4 md:gap-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#1F5EFF] text-white flex items-center justify-center font-black text-lg md:text-xl shadow-md">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Step 1: Hardship &amp; Solvency Audit (Disproving Willful Default)</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                      Under RBI rules, banks are strictly prohibited from granting compromise settlements to &apos;Willful Defaulters&apos; or fraudsters. You must assemble concrete evidence proving that your default stems purely from unavoidable hardship:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <div>• Medical summaries &amp; hospital expense receipts</div>
                      <div>• Involuntary job termination &amp; severance proof</div>
                      <div>• Audited business loss balance sheets</div>
                      <div>• 6-month bank statements with depleted balances</div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4 md:gap-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#1F5EFF] text-white flex items-center justify-center font-black text-lg md:text-xl shadow-md">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Step 2: Calculate Your Anchor Offer &amp; Budget Ceiling</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                      Do not open negotiations with your maximum budget. In Indian banking compromises, opening offers establish the baseline anchor:
                    </p>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                      <li>• <strong>Initial Anchor Offer:</strong> Start at <strong>25% to 35%</strong> of the total book outstanding.</li>
                      <li>• <strong>Negotiation Target:</strong> Aim to close between <strong>40% and 55%</strong> for unsecured personal loans/credit cards.</li>
                      <li>• <strong>Structure:</strong> Offer a single lump-sum within 15–30 days or maximum 2–3 monthly tranches if liquidity is constrained.</li>
                    </ul>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4 md:gap-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#1F5EFF] text-white flex items-center justify-center font-black text-lg md:text-xl shadow-md">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Step 3: Formal Written Submission with Verifiable POD</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                      Submit your formal proposal simultaneously via three verifiable channels:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs text-slate-700">
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                        <strong>1. Registered Post (RPAD):</strong> Speed post to Branch Manager &amp; SARB Head with tracking receipt.
                      </div>
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                        <strong>2. In-Person Seal:</strong> Submit duplicate copy at branch desk and obtain a stamped &apos;Received&apos; seal.
                      </div>
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                        <strong>3. Official Email:</strong> Email to Branch Manager, Nodal Officer, and Credit Department with PDF attachments.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4 md:gap-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#1F5EFF] text-white flex items-center justify-center font-black text-lg md:text-xl shadow-md">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Step 4: Neutralize Recovery Harassment under RBI Fair Practices Code</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2">
                      While your proposal is pending before the Credit Committee, third-party recovery agencies may continue aggressive calls. Immediately serve a written notice invoking the <strong>RBI Master Circular on Recovery Agents (RBI/2022-23/108)</strong>:
                    </p>
                    <p className="text-xs text-slate-600 italic bg-slate-50 p-3 rounded-xl border border-slate-200">
                      &quot;A formal compromise settlement proposal is currently pending adjudication before the Bank&apos;s Stressed Assets Recovery Branch under RBI Master Direction 2023. Any unauthorized home visits, intimidation, or contact with third-party references will be immediately escalated to the RBI Banking Ombudsman and local Police Cyber Cell.&quot;
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex gap-4 md:gap-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#1F5EFF] text-white flex items-center justify-center font-black text-lg md:text-xl shadow-md">
                    5
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Step 5: Sanction Letter Audit, Direct Remittance &amp; NDC Verification</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2">
                      Once approved, conduct a thorough legal audit of the OTS Sanction Letter before paying a single rupee. Pay strictly into the designated loan account via direct banking channels and secure your final No Dues Certificate within 30 days.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Dedicated Infographic Banner */}
            <section id="infographic-resolution-blueprint" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                6. Visual OTS Process &amp; Haircut Blueprint
              </h2>
              
              {/* Compact High-Impact Infographic Banner */}
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
                        Bank One-Time Settlement (OTS) Summary &amp; Process Overview
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/bank-one-time-settlement-ots-policy.jpg"
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
                      src="/images/infographics/bank-one-time-settlement-ots-policy.jpg"
                      alt="Bank One-Time Settlement OTS Policy and NPA Haircut Summary Infographic"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Takeaway:</strong> Banks calculate OTS amounts based on NPV and balance-sheet provisioning. An authentic stamped sanction letter is legally mandatory prior to remittance.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section id="ots-vs-restructuring-vs-lok-adalat" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                7. Comprehensive Comparison: Bank OTS vs Loan Restructuring vs Lok Adalat vs ARC Assignment
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                Borrowers facing debt distress often confuse various debt resolution channels. Below is an authoritative legal comparison of the four primary avenues available in India:
              </p>

              {/* Comparison Table */}
              <div className="my-8 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="p-3 text-xs md:text-sm">Feature / Dimension</th>
                      <th className="p-3 text-xs md:text-sm">Bank One-Time Settlement (OTS)</th>
                      <th className="p-3 text-xs md:text-sm">Loan Restructuring</th>
                      <th className="p-3 text-xs md:text-sm">Lok Adalat Settlement</th>
                      <th className="p-3 text-xs md:text-sm">Asset Reconstruction (ARC)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 text-xs md:text-sm font-bold text-slate-900">Core Nature</td>
                      <td className="p-3 text-xs md:text-sm">Lump-sum discount &amp; full debt closure</td>
                      <td className="p-3 text-xs md:text-sm">Tenure extension or EMI reduction</td>
                      <td className="p-3 text-xs md:text-sm">Court-annexed statutory compromise</td>
                      <td className="p-3 text-xs md:text-sm">Bad debt sold to third-party ARC</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-xs md:text-sm font-bold text-slate-900">Debt Haircut / Waiver</td>
                      <td className="p-3 text-xs md:text-sm font-bold text-emerald-700">35% – 70% of total dues</td>
                      <td className="p-3 text-xs md:text-sm text-red-600">0% Haircut (Full principal repaid)</td>
                      <td className="p-3 text-xs md:text-sm font-bold text-emerald-700">30% – 60% standardized slabs</td>
                      <td className="p-3 text-xs md:text-sm font-bold text-emerald-700">40% – 75% deep compromise</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-xs md:text-sm font-bold text-slate-900">Legal Finality</td>
                      <td className="p-3 text-xs md:text-sm">Contractual agreement via bank letter</td>
                      <td className="p-3 text-xs md:text-sm">Modified loan agreement</td>
                      <td className="p-3 text-xs md:text-sm font-bold text-blue-700">Civil Court Decree (No appeal)</td>
                      <td className="p-3 text-xs md:text-sm">Assignment agreement with ARC</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-xs md:text-sm font-bold text-slate-900">CIBIL Bureau Tag</td>
                      <td className="p-3 text-xs md:text-sm">&apos;Settled&apos; with ₹0 balance</td>
                      <td className="p-3 text-xs md:text-sm">&apos;Restructured&apos; (Standard/Substandard)</td>
                      <td className="p-3 text-xs md:text-sm">&apos;Settled&apos; via Lok Adalat</td>
                      <td className="p-3 text-xs md:text-sm">&apos;Sold to ARC / Settled&apos;</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-xs md:text-sm font-bold text-slate-900">Time to Complete</td>
                      <td className="p-3 text-xs md:text-sm">30 to 60 Days</td>
                      <td className="p-3 text-xs md:text-sm">15 to 45 Days</td>
                      <td className="p-3 text-xs md:text-sm">Same-day during session</td>
                      <td className="p-3 text-xs md:text-sm">60 to 120 Days</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-xs md:text-sm font-bold text-slate-900">Best Suited For</td>
                      <td className="p-3 text-xs md:text-sm">Insolvent borrowers with lump-sum help</td>
                      <td className="p-3 text-xs md:text-sm">Temporary cash crunch with steady job</td>
                      <td className="p-3 text-xs md:text-sm">Pre-litigation / pending court disputes</td>
                      <td className="p-3 text-xs md:text-sm">Old, written-off vintage debts</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 8 */}
            <section id="copyable-ots-proposal-template" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                8. Formal Bank OTS Request Proposal Template (Copyable Format)
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Use our production-ready, legally fortified One-Time Settlement proposal template. This draft references the governing RBI Master Directions, establishes involuntary financial hardship, and mandates strict No Dues Certificate protections:
              </p>

              <CopyableTemplateBox
                title="Universal Bank One-Time Settlement (OTS) Proposal Template"
                subtitle="Engineered for Commercial Banks, Regional Rural Banks & NBFCs in India"
                templateText={otsApplicationTemplate}
                badgeText="Standard Legal Draft"
              />
            </section>

            {/* Section 9 */}
            <section id="sanction-letter-audit-ndc-protocol" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                9. Sanction Letter Audit, Direct Payment Protocol &amp; The RBI 30-Day NDC Mandate
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                Over 40% of distressed borrowers who attempt settlement independently fall victim to payment traps—transferring money based on phone calls or WhatsApp messages from recovery agents, only to discover later that the bank credited the money towards overdue interest without closing the loan.
              </p>

              {/* Sanction Letter Audit Table */}
              <div className="my-8 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="p-3 text-xs md:text-sm">Audit Parameter</th>
                      <th className="p-3 text-xs md:text-sm">Legitimate Bank OTS Sanction Letter</th>
                      <th className="p-3 text-xs md:text-sm">Fraudulent / Unauthorized Recovery Offer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 text-xs md:text-sm font-bold text-slate-900">Issuing Medium</td>
                      <td className="p-3 text-xs md:text-sm text-emerald-800 font-semibold">Official printed Bank letterhead with reference code</td>
                      <td className="p-3 text-xs md:text-sm text-red-600">WhatsApp message, personal Gmail, or generic PDF</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-xs md:text-sm font-bold text-slate-900">Authorized Signatory</td>
                      <td className="p-3 text-xs md:text-sm text-emerald-800 font-semibold">Chief Manager / AGM / SARB Head with employee ID</td>
                      <td className="p-3 text-xs md:text-sm text-red-600">Third-party collection agency field supervisor</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-xs md:text-sm font-bold text-slate-900">Specific Account No.</td>
                      <td className="p-3 text-xs md:text-sm text-emerald-800 font-semibold">Exact 16-digit primary loan account number</td>
                      <td className="p-3 text-xs md:text-sm text-red-600">Vague customer ID or agency internal reference</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-xs md:text-sm font-bold text-slate-900">Waiver &amp; Discharge Clause</td>
                      <td className="p-3 text-xs md:text-sm text-emerald-800 font-semibold">Explicitly states balance principal &amp; interest waived</td>
                      <td className="p-3 text-xs md:text-sm text-red-600">Vaguely mentions &apos;part payment towards overdue&apos;</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-xs md:text-sm font-bold text-slate-900">Remittance Destination</td>
                      <td className="p-3 text-xs md:text-sm text-emerald-800 font-semibold">Direct credit to your designated loan account only</td>
                      <td className="p-3 text-xs md:text-sm text-red-600 font-bold">Personal UPI ID, cash hand-over, or agency current account</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-xs md:text-sm font-bold text-slate-900">NDC Timeline Commitment</td>
                      <td className="p-3 text-xs md:text-sm text-emerald-800 font-semibold">Guaranteed No Dues Certificate within 30 days</td>
                      <td className="p-3 text-xs md:text-sm text-red-600">No written commitment regarding NDC or CIBIL update</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* The ₹5,000/Day Penalty Callout */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 my-6">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-base mb-2">
                  <ShieldAlert className="w-5 h-5 text-[#1F5EFF]" />
                  <span>The RBI ₹5,000/Day Penalty for Delayed Property Documents &amp; NDC</span>
                </div>
                <p className="text-xs sm:text-sm text-blue-950 leading-relaxed">
                  Under <strong>RBI Circular RBI/2023-24/60</strong>, regulated lenders are mandated to release all original movable/immovable property documents and issue full closure certificates within <strong>30 calendar days</strong> of receiving full settlement payment. If the bank fails to release documents within 30 days, it must pay the borrower <strong>₹5,000 for each day of delay</strong> as statutory compensation.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section id="cibil-impact-credit-rebuilding" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                10. CIBIL Impact &amp; Credit Score Rehabilitation Post-OTS
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                A One-Time Settlement successfully eliminates debt and ends all legal risks, but it does carry credit bureau consequences. Understanding this lifecycle ensures realistic financial planning:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-6">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <span className="text-[11px] font-bold text-[#1F5EFF] uppercase tracking-wider block mb-1">Bureau Reporting</span>
                  <h4 className="text-base font-bold text-slate-900 mb-2">&apos;Settled&apos; Tag with ₹0 Balance</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under CICRA 2005, the bank reports the account as &apos;Settled&apos; rather than &apos;Closed.&apos; The outstanding balance is updated to <strong>₹0</strong>, eliminating active overdue default drag.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider block mb-1">Score Movement</span>
                  <h4 className="text-base font-bold text-slate-900 mb-2">Immediate Score Stabilization</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    While the score experiences a temporary dip (typically 50–100 points), the cessation of compounding monthly 90+ DPD default markers allows the score to stabilize and bottom out.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block mb-1">12-24 Month Recovery</span>
                  <h4 className="text-base font-bold text-slate-900 mb-2">The Credit Rebuilding Ladder</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    By acquiring a secured credit card (FD-backed) and servicing small monthly spends on time, borrowers can rebuild their CIBIL score back to <strong>750+ within 18 to 24 months</strong>.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 11: CompanySection Reusable Component */}
            <section id="company-resolution-section" className="scroll-mt-28 mb-14">
              <CompanySection />
            </section>

            {/* Section 12: FAQs */}
            <section id="faqs" className="scroll-mt-28 mb-14">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-[#1F5EFF] flex items-center justify-center font-bold">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                  Frequently Asked Questions on Bank One-Time Settlement Policies
                </h2>
              </div>
              <p className="text-slate-600 text-sm md:text-base mb-8">
                Detailed, legally verified answers addressing the most critical operational and legal questions regarding bank OTS negotiations in India.
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

            {/* Regulatory Sources & References (Official Citations) */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10 shadow-sm">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                <Landmark className="w-4 h-4 text-[#1F5EFF]" />
                <span>Official Regulatory Sources &amp; Statutory References</span>
              </h4>
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
                    href="https://rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>RBI Master Circular:</strong> Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP) pertaining to Advances
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
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Dispute Redressal Portal for OTS Non-Compliance, Coercive Recovery &amp; NDC Delays
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
                  href="/personal-loan-settlement-letter-format"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement Letter Format
                </Link>
                <Link
                  href="/personal-loan-settlement-percentage"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement Percentage
                </Link>
                <Link
                  href="/personal-loan-settlement-vs-restructuring"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Loan Settlement vs Restructuring
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement CIBIL Impact
                </Link>
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Lok Adalat Notice for Personal Loan
                </Link>
                <Link
                  href="/how-to-settle-credit-card-debt"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  How to Settle Credit Card Debt
                </Link>
                <Link
                  href="/bank-delaying-original-property-documents-after-home-loan-settlement-rbi-rules"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Delayed Property Documents RBI Penalty
                </Link>
                <Link
                  href="/remove-settled-status-from-cibil"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Remove Settled Status from CIBIL
                </Link>
                <Link
                  href="/personal-loan-legal-notice"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Legal Notice Defense
                </Link>
                <Link
                  href="/how-to-avoid-loan-settlement-scams"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  How to Avoid Settlement Scams
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
                Ashish specializes in distressed asset negotiations, NPA haircut evaluations, and representing borrowers before Bank Credit Committees across Indian commercial banks and NBFCs.
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
                <span>Stressed Asset Advisory</span>
              </div>
              <h3 className="text-xl font-black mb-3 leading-tight">
                Need Help Negotiating a Bank OTS?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Don&apos;t let recovery agents deceive you. Let our senior banking advocates audit your NPA bucket, draft your formal OTS proposal, and secure an authentic bank sanction letter.
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
                    <strong>100% Legal Protection:</strong> Formal representations served directly to Bank Nodal Officers and SARB Committees under RBI Master Directions.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Shield:</strong> Immediate halt of abusive third-party recovery calls and unauthorized workplace visits under RBI Fair Practices Code.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Official Stamped Sanctions:</strong> Every settlement verified by an authentic bank approval letter on letterhead before any money is paid.
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
