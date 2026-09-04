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
  ArrowUpRight,
  Download,
  Search,
  FileCheck,
  CheckSquare,
  XCircle,
  Shield
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
              <span>Copy Legal Template</span>
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
          <span>Fill in all bracketed fields (e.g. <strong>[Loan Account Number]</strong>) before dispatching to the bank.</span>
        </span>
        <span className="font-semibold text-slate-700">RBI Circular RBI/2023-24/60 Compliant</span>
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

export default function NoDuesCertificateAfterLoanSettlementClient() {
  const [activeId, setActiveId] = useState<string>('understanding-ndc-legal-sanctity');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'understanding-ndc-legal-sanctity', title: '1. Legal Sanctity of a No Dues Certificate' },
    { id: 'noc-vs-ndc-vs-closure-certificate', title: '2. NOC vs NDC vs Loan Closure Differences' },
    { id: 'rbi-30-day-statutory-mandate', title: '3. RBI 30-Day Rule & ₹5,000/Day Penalty' },
    { id: 'forensic-verification-authentic-vs-fake', title: '4. Forensic Audit: Authentic vs Fake NDC' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual NDC Verification Blueprint' },
    { id: 'step-by-step-how-to-get-ndc', title: '6. Step-by-Step Guide: How to Get Your NDC' },
    { id: 'online-portal-download-procedures', title: '7. Online Portal Steps (SBI, HDFC, ICICI, etc.)' },
    { id: 'copyable-ndc-escalation-template', title: '8. Legal Grievance Notice for Delayed NDC' },
    { id: 'recovery-harassment-post-settlement', title: '9. Stopping Post-Settlement Recovery Calls' },
    { id: 'cibil-credit-bureau-post-settlement-audit', title: '10. CIBIL Audit: Ensuring ₹0 Balance' },
    { id: 'original-property-documents-release', title: '11. Return of Original Property & Lien Release' },
    { id: 'company-resolution-section', title: '12. SettleLoans Post-Settlement Legal Shield' },
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

  const ndcEscalationNoticeTemplate = `Date: [DD/MM/YYYY]

To,
1. The Branch Manager,
   [Name of Bank / NBFC, e.g., State Bank of India / HDFC Bank / ICICI Bank / Axis Bank],
   [Branch Name, Complete Postal Address],
   [City, State, PIN Code]

2. The Principal Nodal Officer (PNO) & Head of Grievance Redressal,
   [Name of Bank / NBFC],
   [Corporate Office Address / PNO Email Address]

Subject: URGENT STATUTORY NOTICE: Non-Issuance of No Dues Certificate (NDC) & Non-Release of Documents Post-Settlement under RBI Circular RBI/2023-24/60 — Loan Account No: [Your Complete Loan Account Number]

Dear Sir / Madam,

1. PARTICULARS OF DISCHARGED CREDIT FACILITY:
- Primary Borrower Name: [Your Full Name as per Bank Records]
- Permanent Account Number (PAN): [Your 10-Digit PAN]
- Loan Account Number (LAN): [Loan Account Number]
- Sanctioned Facility Type: [Personal Loan / Credit Card / Business Loan / Mortgage Facility]
- Agreed One-Time Settlement (OTS) Amount: INR [Agreed Settlement Sum]/-
- Date of OTS Sanction Letter: [DD/MM/YYYY] (Ref No: [Sanction Letter Reference Number])

2. EVIDENCE OF FULL & FINAL SETTLEMENT REMITTANCE:
Pursuant to the formal OTS Sanction Letter issued by your authorized credit authority, I have duly and unconditionally remitted the agreed compromise settlement sum of INR [Agreed Settlement Sum]/- strictly within the stipulated validity period.
- Transaction Remittance Date: [DD/MM/YYYY]
- Mode of Remittance: [NEFT / RTGS / Direct Core Banking Deposit / Account Payee Cheque]
- Bank UTR / Reference Transaction Number: [UTR / Cheque Number]
- Credited Directly To: Loan Account No. [Loan Account Number]

3. VIOLATION OF RBI MANDATED 30-DAY STATUTORY TIMELINE:
I invite your urgent attention to Reserve Bank of India Directive Circular RBI/2023-24/60 (Ref: DoR.MCS.REC.38/01.01.001/2023-24) dated September 13, 2023, titled "Responsible Lending Conduct – Release of Movable / Immovable Property Documents on Repayment / Settlement of Personal Loans".

Under Paragraph 3(i) and 3(ii) of the aforementioned circular, Regulated Entities (REs) are legally obligated to:
a) Release all original movable/immovable property documents, and
b) Issue a comprehensive No Dues Certificate / Loan Closure Certificate,
within a maximum statutory window of thirty (30) calendar days from the date of full settlement remittance.

As on today, [Number of Days Elapsed, e.g., 42 days] have elapsed since full payment was acknowledged in your core banking system, representing a direct statutory non-compliance and severe deficiency of banking service.

4. STATUTORY COMPENSATION CLAIMABLE UNDER RBI GUIDELINES:
Under Paragraph 3(v) of RBI Circular RBI/2023-24/60:
"In case of delay in releasing of original movable / immovable property documents or failing to file charge satisfaction form with registry beyond 30 days after full repayment/settlement of loan, the RE shall pay compensation to the borrower at the rate of INR 5,000 for each day of delay."

As the delay stands at [Number of Overdue Days beyond 30, e.g., 12 days] as of today, the institution is liable to pay statutory compensation amounting to:
INR 5,000 × [Overdue Days, e.g., 12] = INR [Total Compensation Due, e.g., 60,000]/- to my designated bank savings account.

5. DEMANDS & ACTIONS SOUGHT WITHIN SEVEN (7) DAYS:
I hereby formally demand that within seven (7) banking days of receipt of this notice, your institution shall:
1. Issue and deliver a physical, stamped No Dues Certificate (NDC) confirming full and final extinguishment of Loan A/C [Loan Account Number] with ZERO remaining liability.
2. Update the loan account records across all Credit Information Companies (CIBIL, Experian, Equifax, CRIF High Mark) to reflect the status as "Settled" with INR 0 Current Balance.
3. Release all underlying title deeds, security cheques, and remove charge satisfaction on CERSAI / Vahan portal (if applicable).
4. Credit the accrued delay compensation of INR [Total Compensation Amount]/- to my Savings Account [Your Savings A/C No, Bank Name, IFSC].

In the event of failure to comply within the stipulated 7-day period, I shall immediately file a formal statutory complaint before the Reserve Bank of India - Integrated Ombudsman Scheme, 2021 (CMS Portal) and initiate proceedings before the Hon'ble Consumer Disputes Redressal Commission claiming damages for mental agony, loss of credit reputation, and punitive compensation.

Yours faithfully,

_____________________________
(Signature of Borrower)
[Your Full Name]
Contact Mobile: [+91-XXXXXXXXXX]
Email Address: [your.email@example.com]
Postal Address: [Your Full Address]

ENCLOSURES:
1. Copy of Official OTS Sanction Letter dated [Date]
2. Bank Payment Proof / UTR Remittance Receipt showing credit to Loan A/C
3. Copy of PAN Card & Aadhaar Card`;

  const faqs = [
    {
      question: "What is a No Dues Certificate (NDC) and why is it essential after loan settlement?",
      answer: (
        <p>
          A <strong>No Dues Certificate (NDC)</strong>, also known as a <strong>No Objection Certificate (NOC)</strong> or <strong>Debt Discharge Certificate</strong>, is an official, legally binding document issued by a regulated bank or NBFC. It formally certifies that the borrower has satisfied all agreed financial obligations under a One-Time Settlement (OTS) and that the lender retains <strong>zero outstanding claims, legal charges, or liens</strong> against the borrower. Without an authentic NDC, a borrower remains vulnerable to future claims by third-party recovery agencies, lingering CIBIL default tags, or unlawful debt sales to Asset Reconstruction Companies (ARCs).
        </p>
      )
    },
    {
      question: "How long does a bank legally have to issue a No Dues Certificate after settlement payment?",
      answer: (
        <p>
          Under <strong>RBI Circular RBI/2023-24/60</strong> (<em>Responsible Lending Conduct – Release of Movable/Immovable Property Documents on Repayment/Settlement of Personal Loans</em>), all commercial banks, cooperative lenders, and NBFCs are legally mandated to issue the No Dues Certificate and return all original security documents within a maximum of <strong>30 calendar days</strong> from the date of receiving full settlement payment.
        </p>
      )
    },
    {
      question: "What is the penalty if a bank fails to provide the NDC within 30 days?",
      answer: (
        <p>
          If the lender delays issuing the NDC or returning original property documents beyond the statutory 30-day window due to reasons attributable to the bank, the Reserve Bank of India mandates that the bank must pay compensation to the borrower at the fixed rate of <strong>₹5,000 for each calendar day of delay</strong> until the documents and certificate are formally delivered.
        </p>
      )
    },
    {
      question: "How can a borrower verify whether a No Dues Certificate is genuine or fake?",
      answer: (
        <p>
          To verify NDC authenticity: (1) <strong>Official Letterhead &amp; Seal:</strong> Check for authentic bank stationery, branch seal, and authorized signatory details; (2) <strong>Core Banking Portal Reconciliation:</strong> Log into NetBanking or the official bank mobile app to verify that the loan account ledger reflects a <strong>₹0 balance</strong> and &apos;Closed/Settled&apos; status; (3) <strong>Sanction Cross-Reference:</strong> Match the reference number and settlement amount against your initial OTS Sanction Letter; (4) <strong>Direct Bank Confirmation:</strong> Email the bank&apos;s Principal Nodal Officer (PNO) for written validation; (5) <strong>Credit Bureau Tracking:</strong> Confirm your CIBIL and Experian reports reflect &apos;Settled&apos; status with ₹0 overdue after 45 days.
        </p>
      )
    },
    {
      question: "What should I do if recovery agents contact me after paying the settlement amount?",
      answer: (
        <p>
          If recovery agents harass you post-settlement: (1) Never pay any additional money; (2) Immediately present a copy of your <strong>OTS Sanction Letter</strong> and <strong>bank remittance receipt/UTR</strong>; (3) Warn the agent that post-settlement harassment violates the <em>RBI Fair Practices Code</em> and constitutes criminal intimidation under Section 503/506 of the Indian Penal Code; (4) If calls continue, lodge an immediate formal complaint with the Bank&apos;s Principal Nodal Officer and escalate to the <strong>RBI Integrated Ombudsman Portal (cms.rbi.org.in)</strong>.
        </p>
      )
    },
    {
      question: "What is the difference between a Loan Closure Certificate and a No Dues Certificate (NDC)?",
      answer: (
        <p>
          A <strong>Loan Closure Certificate</strong> is issued when a borrower pays 100% of the contractual loan balance (principal, interest, and fees) with zero write-offs, resulting in a clean &apos;Closed&apos; tag in CIBIL. An <strong>NDC Post-Settlement</strong> is issued after an approved compromise settlement where the lender accepts a discounted lump sum and writes off the remaining balance. While both extinguish all legal liability, the post-settlement NDC results in a &apos;Settled&apos; status in credit bureau reports with a ₹0 balance.
        </p>
      )
    },
    {
      question: "How does obtaining an NDC impact my CIBIL score and credit bureau records?",
      answer: (
        <p>
          Obtaining an NDC is critical because it forces the bank to close the delinquent account on credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark) with <strong>₹0 Current Outstanding Balance and ₹0 Overdue</strong>. While the &apos;Settled&apos; status reflects a partial write-off and causes a temporary score impact, it stops the devastating monthly accumulation of &apos;90+ Days Past Due (DPD)&apos; default marks and enables you to systematically rebuild your credit score back to 750+ within 12 to 24 months.
        </p>
      )
    },
    {
      question: "Can a bank sell my settled loan to an Asset Reconstruction Company (ARC) after issuing an NDC?",
      answer: (
        <p>
          <strong>No.</strong> Once a compromise settlement is executed and an NDC is issued, the debt is legally extinguished under <em>Section 63 of the Indian Contract Act, 1872</em>. Selling an already extinguished loan account to an ARC or collection agency is illegal, constitutes an unfair trade practice under the <em>Consumer Protection Act, 2019</em>, and renders the bank liable to severe penalties and compensation orders from the RBI Ombudsman and Consumer Courts.
        </p>
      )
    },
    {
      question: "How can I download a No Dues Certificate online from SBI, HDFC, ICICI, or Axis Bank?",
      answer: (
        <p>
          For major Indian banks: (1) Log in to your NetBanking portal or mobile banking app (e.g., SBI YONO, HDFC NetBanking, ICICI iMobile, Axis Mobile); (2) Navigate to <strong>Borrowings / Loans &gt; Inactive / Closed Accounts</strong>; (3) Select your settled loan account and click <strong>&apos;Download NOC / NDC Certificate&apos;</strong>; (4) If not available digitally within 15–20 days, submit a service request via the bank&apos;s customer service portal citing your settlement UTR and OTS sanction reference.
        </p>
      )
    },
    {
      question: "What legal action can I take if a bank refuses to issue an NDC after accepting settlement payment?",
      answer: (
        <p>
          If a lender refuses or unreasonably delays your NDC: (1) Serve our <strong>Grievance Escalation Notice</strong> to the Branch Manager and Principal Nodal Officer; (2) If unresolved after 30 days, register a dispute on the <strong>RBI Integrated Ombudsman Portal (cms.rbi.org.in)</strong> claiming the ₹5,000/day statutory compensation; (3) File a formal consumer complaint before the District Consumer Disputes Redressal Commission for deficiency in banking service and harassment.
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
            <FileCheck className="w-3.5 h-3.5 text-[#3b82f6]" />
            Post-Settlement Legal Verification &amp; RBI Compliance Guide 2026
          </div>

          {/* H1 Headline - Compact Title Size */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            How to Get No Dues Certificate After Loan Settlement:{' '}
            <span className="text-[#3b82f6] md:text-[#60a5fa]">Verification, RBI Rules &amp; Legal Guide</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Paid your settlement amount? Learn how to obtain an authentic No Dues Certificate (NDC/NOC), verify core banking zero-balance ledgers, enforce the RBI 30-day rule with ₹5,000/day penalties, and avoid fraudulent recovery scams.
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
              <span>Verify Your Bank Settlement &amp; NDC</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#copyable-ndc-escalation-template"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold py-2.5 px-4 rounded-xl backdrop-blur-sm transition-all duration-300 text-xs sm:text-sm"
            >
              <FileText className="w-4 h-4 text-blue-300" />
              <span>Get Delayed NDC Legal Template</span>
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
                <span>NDC Guide Navigation</span>
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
                <span>EXECUTIVE BRIEF: SECURING DEBT EXTINCTION POST-SETTLEMENT</span>
              </div>
              <ul className="space-y-3 text-sm md:text-base text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Payment is Not the Finish Line:</strong> Simply remitting the compromise settlement amount does not automatically protect you. You must secure an official, stamped <strong>No Dues Certificate (NDC)</strong> on the lender&apos;s letterhead to legally extinguish the debt.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Statutory 30-Day RBI Deadline:</strong> Under <strong>RBI Circular RBI/2023-24/60</strong>, banks and NBFCs must issue the NDC and release all original security documents within <strong>30 calendar days</strong> of receiving full settlement remittance.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>₹5,000/Day Delay Compensation:</strong> If the lender delays beyond 30 days for reasons attributable to the bank, it is statutorily liable to pay you <strong>₹5,000 for each day of delay</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Credit Bureau Reconciliation:</strong> The NDC is your conclusive evidence to ensure CIBIL, Experian, Equifax, and CRIF High Mark report the account as <strong>&apos;Settled&apos; with ₹0 Current Balance</strong> and ₹0 Overdue.
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="understanding-ndc-legal-sanctity" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                1. The Legal Sanctity of a No Dues Certificate (NDC): What Every Settled Borrower Must Know
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                For hundreds of thousands of borrowers across India who navigate financial insolvency, securing an approved <strong>One-Time Settlement (OTS)</strong> with a bank or Non-Banking Financial Company (NBFC) feels like a monumental victory. However, the most critical phase of debt resolution begins <em>after</em> the money is paid.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Many borrowers mistakenly assume that transferring the agreed settlement amount to the bank concludes their legal relationship with the lender. In reality, without a formal, legally certified <strong>No Dues Certificate (NDC)</strong> or <strong>No Objection Certificate (NOC)</strong>, the loan account remains in an administrative limbo.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Under <strong>Section 63 of the Indian Contract Act, 1872</strong>, every promisee may dispense with or remit, wholly or in part, the performance of the promise made to them, or may accept instead of it any satisfaction which they think fit. A No Dues Certificate is the physical, contractual embodiment of this statutory discharge. It legally bars the financial institution from making any further demands, initiating civil or criminal litigation, or selling the residual written-off balance to third-party collection agencies or Asset Reconstruction Companies (ARCs).
              </p>

              {/* 4 Pillars of NDC Legal Protection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#1F5EFF] flex items-center justify-center font-bold">
                      <Scale className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">Extinguishment of Claim in Personam</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The NDC conclusively establishes that all personal claims against the borrower arising out of the credit agreement are permanently discharged with zero remaining legal liability.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">Immunity from Third-Party Recovery</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Prevents rogue debt recovery agencies, outsourced call centers, or subsequent ARC assignees from resurrecting the settled debt or claiming residual interest.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
                      <Landmark className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">Release of Statutory Charge &amp; Liens</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Mandates the immediate cancellation of bank hypothecation, removal of Banker&apos;s Lien under Section 171 of the Contract Act, and clearance of property records on CERSAI.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">Foundation for CIBIL Rectification</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Serves as the indispensable evidentiary document required by Credit Information Companies (CIBIL, Experian) to eliminate active default reporting and record ₹0 balance.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section id="noc-vs-ndc-vs-closure-certificate" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                2. NOC vs. NDC vs. Loan Closure Certificate: The Technical &amp; Practical Differences
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                Borrowers frequently encounter overlapping terminology in banking communications. While terms like No Dues Certificate, No Objection Certificate, and Loan Closure Certificate are sometimes used interchangeably in colloquial conversation, they represent distinct legal concepts and operational states in banking ledgers:
              </p>

              {/* Comparative Table */}
              <div className="my-8 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="p-3 text-xs md:text-sm">Document Type</th>
                      <th className="p-3 text-xs md:text-sm">When It Is Issued</th>
                      <th className="p-3 text-xs md:text-sm">Financial Repayment Basis</th>
                      <th className="p-3 text-xs md:text-sm">Credit Bureau (CIBIL) Status</th>
                      <th className="p-3 text-xs md:text-sm">Primary Legal Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 text-xs md:text-sm font-bold text-blue-900">No Dues Certificate (NDC)</td>
                      <td className="p-3 text-xs md:text-sm">Post One-Time Settlement (OTS)</td>
                      <td className="p-3 text-xs md:text-sm">Negotiated Compromise (Discounted Principal + Waiver)</td>
                      <td className="p-3 text-xs md:text-sm font-semibold text-amber-700">&apos;Settled&apos; with ₹0 Balance</td>
                      <td className="p-3 text-xs md:text-sm">Discharges borrower from future claims and extinguishes debt contract.</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-xs md:text-sm font-bold text-slate-900">Loan Closure Certificate</td>
                      <td className="p-3 text-xs md:text-sm">Full Standard Repayment or Foreclosure</td>
                      <td className="p-3 text-xs md:text-sm">100% of Principal + Accrued Interest &amp; Charges Paid</td>
                      <td className="p-3 text-xs md:text-sm font-semibold text-emerald-700">&apos;Closed&apos; with ₹0 Balance</td>
                      <td className="p-3 text-xs md:text-sm">Confirms standard completion of the contracted loan tenure without concessions.</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-xs md:text-sm font-bold text-slate-900">No Objection Certificate (NOC)</td>
                      <td className="p-3 text-xs md:text-sm">Vehicle / Secured Loan Closure or Asset Transfer</td>
                      <td className="p-3 text-xs md:text-sm">Full Closure or Approved Settlement</td>
                      <td className="p-3 text-xs md:text-sm font-semibold text-slate-700">&apos;Closed&apos; or &apos;Settled&apos;</td>
                      <td className="p-3 text-xs md:text-sm">Authorizes RTO (Form 35) or Sub-Registrar to remove bank hypothecation/mortgage lien.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-xs sm:text-sm text-amber-900">
                <strong>Crucial Legal Nuance:</strong> In an unsecured loan settlement (credit cards, personal loans, business loans), the document issued by the bank is specifically titled <strong>No Dues Certificate</strong> or <strong>Settlement Closure Letter</strong>. It must explicitly state that the agreed amount has been received in full and final settlement and that the balance has been written off under the bank&apos;s board-approved compromise settlement policy.
              </div>
            </section>

            {/* Section 3 */}
            <section id="rbi-30-day-statutory-mandate" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                3. The RBI 30-Day Statutory Mandate &amp; ₹5,000/Day Delay Penalty Rule
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                Historically, borrowers faced harrowing delays after paying settlement amounts. Branch managers frequently took months to process internal system entries, during which recovery agents continued calling and original property deeds remained hostage in bank vaults.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                To eradicate this unfair practice, the Reserve Bank of India issued a revolutionary regulatory circular: <strong>RBI Circular RBI/2023-24/60 (DOR.MCS.REC.38/01.01.001/2023-24)</strong> on <em>&apos;Responsible Lending Conduct – Release of Movable / Immovable Property Documents on Repayment / Settlement of Personal Loans&apos;</em>.
              </p>

              {/* RBI Key Clauses Grid */}
              <div className="space-y-4 my-8">
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-lg bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-bold">1</span>
                    <h3 className="font-bold text-slate-900 text-sm md:text-base">Strict 30-Day Clock from Date of Payment</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed ml-10">
                    Regulated Entities (Scheduled Commercial Banks, Small Finance Banks, RRBs, Urban Co-operative Banks, and NBFCs) must issue the No Dues Certificate and release all original property documents within <strong>30 calendar days</strong> of receiving full repayment or settlement.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">2</span>
                    <h3 className="font-bold text-slate-900 text-sm md:text-base">Mandatory ₹5,000 Per Day Compensation Penalty</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed ml-10">
                    If the bank delays issuing the NDC, releasing documents, or removing charge satisfaction beyond 30 days for reasons attributable to the lender, the bank <strong>must pay compensation of ₹5,000 for each day of delay</strong> directly to the borrower.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center text-xs font-bold">3</span>
                    <h3 className="font-bold text-slate-900 text-sm md:text-base">Borrower Choice of Document Collection Branch</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed ml-10">
                    The borrower is granted the legal option to collect original title deeds and physical certificates either from the home loan branch where the facility was sanctioned or from any designated regional branch of their choice.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-lg bg-amber-600 text-white flex items-center justify-center text-xs font-bold">4</span>
                    <h3 className="font-bold text-slate-900 text-sm md:text-base">Bank Liability for Lost Documents</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed ml-10">
                    In the event that the lender misplaces or loses original documents during the custody period, the bank must obtain certified duplicate copies at its own expense, publish public notices in leading newspapers, and pay an additional 30-day delay compensation.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="forensic-verification-authentic-vs-fake" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                4. Forensic Audit Checklist: How to Verify an Authentic NDC and Detect Recovery Agent Scams
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                In India&apos;s debt recovery ecosystem, unscrupulous third-party collection agencies sometimes generate fraudulent settlement letters or fake No Dues Certificates on duplicate letterheads, enticing borrowers to deposit funds into third-party accounts or temporary collection pools without updating the bank&apos;s core system.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                To guarantee your settlement is 100% legitimate, conduct a rigorous forensic audit using SettleLoans&apos; 6-point verification standard:
              </p>

              {/* Forensic Audit Table */}
              <div className="my-8 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="p-3 text-xs md:text-sm">Verification Parameter</th>
                      <th className="p-3 text-xs md:text-sm text-emerald-700">Authentic Bank NDC (Valid)</th>
                      <th className="p-3 text-xs md:text-sm text-red-600">Fraudulent / Scam Certificate (Invalid)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 text-xs md:text-sm font-bold">Issuing Authority Stationery</td>
                      <td className="p-3 text-xs md:text-sm text-slate-700">Printed on official bank letterhead with corporate CIN, registered office address, and watermarked logo.</td>
                      <td className="p-3 text-xs md:text-sm text-slate-700">Low-resolution photocopy, generic computer printout, or PDF sent strictly over WhatsApp.</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-xs md:text-sm font-bold">Signatory Credentials</td>
                      <td className="p-3 text-xs md:text-sm text-slate-700">Signed by an authorized officer (Manager / Chief Manager / AGM) with Employee Code (Emp ID) and round rubber branch seal.</td>
                      <td className="p-3 text-xs md:text-sm text-slate-700">Digital stamp without employee ID, signed by an &apos;Agency Team Leader&apos; or recovery agent name.</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-xs md:text-sm font-bold">Account Reconciliation Reference</td>
                      <td className="p-3 text-xs md:text-sm text-slate-700">Quotes the specific 16-digit Loan Account Number (LAN), OTS Sanction Reference Number, and payment UTR.</td>
                      <td className="p-3 text-xs md:text-sm text-slate-700">Vague account reference, no sanction letter cross-reference, or missing transaction details.</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-xs md:text-sm font-bold">Core Banking Ledger Status</td>
                      <td className="p-3 text-xs md:text-sm text-slate-700">NetBanking / Core Banking System shows Outstanding Balance: <strong>₹0.00</strong> and Status: <strong>Settled / Closed</strong>.</td>
                      <td className="p-3 text-xs md:text-sm text-slate-700">NetBanking continues to display active outstanding balance, compounding overdue interest, and late charges.</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-xs md:text-sm font-bold">Remittance Channel</td>
                      <td className="p-3 text-xs md:text-sm text-slate-700">Payment credited directly to the borrower&apos;s loan account number via official banking channels (NEFT/RTGS).</td>
                      <td className="p-3 text-xs md:text-sm text-slate-700">Borrower asked to transfer funds via UPI / cash to an agency staff account or collection agent name.</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-xs md:text-sm font-bold">Credit Bureau Notification</td>
                      <td className="p-3 text-xs md:text-sm text-slate-700">Bank transmits electronic update to CIBIL / Experian within 45 days marking the account as Settled with ₹0 balance.</td>
                      <td className="p-3 text-xs md:text-sm text-slate-700">Credit bureau continues to report active monthly delinquency (90+ DPD) and growing overdue amounts.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: Compact High-Impact Infographic Banner */}
            <div id="infographic-resolution-blueprint" className="bg-white border-2 border-blue-200 rounded-3xl overflow-hidden shadow-lg my-10 text-slate-800 scroll-mt-28">
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
                      No Dues Certificate (NDC) Post-Settlement Verification Blueprint
                    </h3>
                  </div>
                </div>
                <a
                  href="/images/infographics/no-dues-certificate-after-loan-settlement.jpg"
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
                    src="/images/infographics/no-dues-certificate-after-loan-settlement.jpg"
                    alt="No Dues Certificate NDC Post Loan Settlement Summary Infographic"
                    className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Quick Crux Footer Strip */}
              <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span><strong>Key Takeaway:</strong> Secure your stamped NDC within 30 days under RBI rules and enforce ₹5,000/day delay compensation if delayed.</span>
                </div>
                <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                  Get Free Case Evaluation &rarr;
                </Link>
              </div>
            </div>

            {/* Section 6 */}
            <section id="step-by-step-how-to-get-ndc" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                6. Step-by-Step Guide: How to Get Your No Dues Certificate Post-Settlement
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                To navigate the administrative maze of Indian commercial banks and ensure zero post-settlement complications, follow this systematic 5-stage procedural workflow:
              </p>

              <div className="space-y-6 my-8">
                {/* Step 1 */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-blue-300 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1F5EFF] flex items-center justify-center font-black text-base flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">
                        Stage 1: Remit Funds Strictly to the Loan Account Number via Direct Banking
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                        Never pay in cash or transfer funds to any third party. Always remit the exact sanctioned settlement amount via NEFT or RTGS directly into your specific loan account number. Retain the bank payment acknowledgement slip containing the 16-character UTR (Unique Transaction Reference) number.
                      </p>
                      <div className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                        <strong>Rule:</strong> Ensure the payment is executed within the validity window specified in your OTS Sanction Letter.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-blue-300 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1F5EFF] flex items-center justify-center font-black text-base flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">
                        Stage 2: Submit Formal Proof of Payment to the Branch &amp; Stressed Assets Desk
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                        Within 48 hours of payment, submit a formal written letter to the Branch Manager and Head of Stressed Assets Recovery Branch (SARB) attaching: (a) Copy of OTS Sanction Letter, (b) Bank payment receipt / UTR counterfoil, (c) Identity proof (PAN/Aadhaar). Obtain a physical receiving stamp with date and employee code on your duplicate copy.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-blue-300 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1F5EFF] flex items-center justify-center font-black text-base flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">
                        Stage 3: Verify Core Banking System (CBS) Ledger Adjustment (Day 7 to Day 15)
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                        Log into your NetBanking or visit the branch between Day 7 and Day 15 to confirm that the bank&apos;s credit operations team has executed the internal write-off entry. The loan ledger must reflect Total Outstanding: ₹0.00 and Account Status: Closed/Settled.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-blue-300 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1F5EFF] flex items-center justify-center font-black text-base flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">
                        Stage 4: Collect Stamped Physical &amp; Digital No Dues Certificate (Within 30 Days)
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                        Under RBI regulations, the bank must provide your official No Dues Certificate within 30 calendar days. Collect the original physical certificate bearing the branch seal and authorized signatory from your home branch, and simultaneously download the digital PDF from the bank&apos;s self-service portal.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-blue-300 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1F5EFF] flex items-center justify-center font-black text-base flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">
                        Stage 5: Audit Credit Bureau Update &amp; Archive Legal Dossier (Day 45)
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                        Pull your latest credit reports from CIBIL, Experian, Equifax, and CRIF High Mark 45 days after payment. Confirm the loan reflects &apos;Settled&apos; status with ₹0 Current Balance. Secure all physical copies (OTS Sanction, Payment Slip, NDC, CIBIL Report) in a permanent legal archival dossier.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section id="online-portal-download-procedures" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                7. Online Portal Download Procedures: SBI, HDFC, ICICI, Axis &amp; Major NBFCs
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                Most top tier Indian banks provide automated self-service portals where settled borrowers can retrieve digital No Dues Certificates. Here are the specific online navigation steps across India&apos;s leading financial institutions:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
                {/* SBI */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Building2 className="w-6 h-6 text-[#1F5EFF]" />
                    <h3 className="text-base font-bold text-slate-900">State Bank of India (SBI / YONO)</h3>
                  </div>
                  <ol className="text-xs sm:text-sm text-slate-600 space-y-2 list-decimal list-inside">
                    <li>Log into <strong>SBI Onlinesbi.sbi</strong> or SBI YONO App.</li>
                    <li>Navigate to <strong>e-Services &gt; Loans &gt; Inactive / Closed Accounts</strong>.</li>
                    <li>Select your settled Loan Account Number.</li>
                    <li>Click <strong>&apos;Download No Dues / Closure Certificate&apos;</strong> (or visit the Stressed Assets Resolution Centre (SARC) branch if OTS was executed through SARC).</li>
                  </ol>
                </div>

                {/* HDFC Bank */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Building2 className="w-6 h-6 text-[#1F5EFF]" />
                    <h3 className="text-base font-bold text-slate-900">HDFC Bank</h3>
                  </div>
                  <ol className="text-xs sm:text-sm text-slate-600 space-y-2 list-decimal list-inside">
                    <li>Visit <strong>HDFC Bank Service Portal &gt; Self Service</strong>.</li>
                    <li>Select <strong>Loans &gt; Request for NOC / No Dues Certificate</strong>.</li>
                    <li>Enter your 8-digit Loan Account Number and verify OTP sent to your registered mobile.</li>
                    <li>Download the signed digital NDC or request dispatch to your registered postal address.</li>
                  </ol>
                </div>

                {/* ICICI Bank */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Building2 className="w-6 h-6 text-[#1F5EFF]" />
                    <h3 className="text-base font-bold text-slate-900">ICICI Bank (iMobile)</h3>
                  </div>
                  <ol className="text-xs sm:text-sm text-slate-600 space-y-2 list-decimal list-inside">
                    <li>Open <strong>iMobile Pay</strong> &gt; Navigate to <strong>Cards &amp; Loans</strong>.</li>
                    <li>Select your closed credit card or loan facility.</li>
                    <li>Click on <strong>Service Requests &gt; Download No Dues Certificate</strong>.</li>
                    <li>For credit card settlements, email <strong>creditcards@icicibank.com</strong> quoting the OTS approval reference for a certified copy.</li>
                  </ol>
                </div>

                {/* Axis & NBFCs */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Building2 className="w-6 h-6 text-[#1F5EFF]" />
                    <h3 className="text-base font-bold text-slate-900">Axis Bank &amp; NBFCs (Bajaj, Tata, Aditya Birla)</h3>
                  </div>
                  <ol className="text-xs sm:text-sm text-slate-600 space-y-2 list-decimal list-inside">
                    <li>Access the lender&apos;s customer service self-help portal.</li>
                    <li>Navigate to <strong>Statements &amp; Documents &gt; NOC / NDC</strong>.</li>
                    <li>Authenticate via PAN and Registered Mobile Number.</li>
                    <li>If the settlement was negotiated via the Collections Desk, submit a formal ticket with payment receipt to trigger manual branch dispatch.</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Section 8: Copyable Template */}
            <section id="copyable-ndc-escalation-template" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                8. Copyable Legal Grievance &amp; Escalation Notice Template for Delayed NDC
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                If your bank or NBFC has exceeded the mandatory 30-day statutory window after accepting your settlement remittance, use this formal legal escalation notice. Formulated under <strong>RBI Circular RBI/2023-24/60</strong>, this template demands the immediate issuance of your NDC and initiates a formal statutory claim for <strong>₹5,000 per day in delay compensation</strong>:
              </p>

              <CopyableTemplateBox
                title="Statutory Legal Notice for Delayed No Dues Certificate & Delay Penalty Claim"
                subtitle="Formulated under RBI Circular RBI/2023-24/60 and the Banking Regulation Act, 1949"
                templateText={ndcEscalationNoticeTemplate}
                badgeText="Ready to Copy & Customize"
              />
            </section>

            {/* Section 9 */}
            <section id="recovery-harassment-post-settlement" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                9. What to Do If Recovery Agents Harass You After Paying the Settlement
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                One of the most distressing issues borrowers encounter is receiving aggressive collection calls or unannounced visits even after remitting their agreed OTS amount. This typically occurs because of an internal communication breakdown between the bank&apos;s legal credit desk and its outsourced recovery agencies.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Here is your immediate legal action protocol to neutralize post-settlement harassment:
              </p>

              <div className="space-y-4 my-8">
                <div className="p-5 bg-red-50 border-l-4 border-red-500 rounded-r-2xl">
                  <h3 className="font-bold text-red-900 text-base mb-1">1. Never Pay a Single Rupee Under Duress</h3>
                  <p className="text-xs sm:text-sm text-red-800 leading-relaxed">
                    Recovery agents often claim that your previous payment was merely an &apos;interest adjustment&apos; or &apos;part payment&apos;. Do not fall for this trick. If you hold an official OTS Sanction Letter and payment receipt, your liability is strictly governed by the written contract.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="font-bold text-slate-900 text-base mb-1">2. Issue a Cease-and-Desist Notice Citing RBI Fair Practices Code</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under the <strong>RBI Guidelines on Recovery Agents (Circular DBOD.No.Leg.BC.21/09.07.006/2008-09)</strong>, lenders are strictly prohibited from resorting to intimidation, contacting friends/relatives, or making calls before 8:00 AM or after 7:00 PM. Post-settlement collection constitutes an aggravated violation.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="font-bold text-slate-900 text-base mb-1">3. File an Immediate Complaint on the RBI Integrated Ombudsman CMS Portal</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Log on to <strong>cms.rbi.org.in</strong>, select your bank, upload your OTS Sanction Letter and payment UTR, and lodge a complaint under the category &apos;Non-compliance with Compromise Settlement Terms / Recovery Harassment&apos;. The RBI Ombudsman has statutory powers to penalize the bank and award compensation for harassment.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="font-bold text-slate-900 text-base mb-1">4. Initiate Police Action under Section 503 &amp; 506 IPC</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If agents visit your residence or workplace and issue verbal threats after you have produced your settlement documents, you have the full legal right to lodge a Police Complaint / First Information Report (FIR) for criminal intimidation, wrongful restraint, and extortion under the Indian Penal Code.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 10 */}
            <section id="cibil-credit-bureau-post-settlement-audit" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                10. CIBIL &amp; Credit Bureau Audit Post-Settlement: Ensuring &apos;Settled&apos; Status with ₹0 Balance
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                A critical responsibility post-settlement is ensuring that all four licensed Credit Information Companies in India—<strong>TransUnion CIBIL, Experian, Equifax, and CRIF High Mark</strong>—accurately update their credit information reports (CIR).
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Under the <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA)</strong>, banks are legally mandated to furnish updated monthly credit data to all credit bureaus. Here is how your credit report should look after obtaining an authentic NDC:
              </p>

              {/* CIBIL Bureau Metrics Table */}
              <div className="my-8 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="p-3 text-xs md:text-sm">CIBIL Field Parameter</th>
                      <th className="p-3 text-xs md:text-sm text-emerald-700">Correct Post-NDC Reporting</th>
                      <th className="p-3 text-xs md:text-sm text-red-600">Erroneous Reporting (Dispute Immediately)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 text-xs md:text-sm font-bold">Account Status</td>
                      <td className="p-3 text-xs md:text-sm font-semibold text-emerald-700">&apos;Settled&apos; / &apos;Post-Write-Off Settled&apos;</td>
                      <td className="p-3 text-xs md:text-sm font-semibold text-red-600">&apos;Written Off&apos; / &apos;Active Default&apos; / &apos;Suit Filed&apos;</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-xs md:text-sm font-bold">Current Outstanding Balance</td>
                      <td className="p-3 text-xs md:text-sm font-semibold text-emerald-700">₹ 0.00</td>
                      <td className="p-3 text-xs md:text-sm font-semibold text-red-600">Reflects residual unapplied balance or full principal</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-xs md:text-sm font-bold">Amount Overdue</td>
                      <td className="p-3 text-xs md:text-sm font-semibold text-emerald-700">₹ 0.00</td>
                      <td className="p-3 text-xs md:text-sm font-semibold text-red-600">Reflects active overdue balance</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-xs md:text-sm font-bold">Payment History Grid (DPD)</td>
                      <td className="p-3 text-xs md:text-sm font-semibold text-emerald-700">Frozen from the date of settlement (No new 30/60/90+ DPD entries)</td>
                      <td className="p-3 text-xs md:text-sm font-semibold text-red-600">Ongoing monthly accumulation of default days (e.g. 180+ DPD, 360+ DPD)</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-xs md:text-sm font-bold">Date of Last Payment / Closure</td>
                      <td className="p-3 text-xs md:text-sm font-semibold text-emerald-700">Accurately records your OTS remittance date</td>
                      <td className="p-3 text-xs md:text-sm font-semibold text-red-600">Blank or reflects historical default dates</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border-l-4 border-[#1F5EFF] p-4 rounded-r-xl text-xs sm:text-sm text-slate-700">
                <strong>How to Rectify CIBIL Errors:</strong> If 45 days have passed and your credit report still displays an active overdue amount, initiate an online dispute on the official CIBIL Dispute Resolution Portal (cibil.com/dispute-resolution) attaching your No Dues Certificate. Under RBI rules, credit bureaus and banks must resolve credit disputes within <strong>30 days</strong>.
              </div>
            </section>

            {/* Section 11 */}
            <section id="original-property-documents-release" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                11. Return of Original Property Documents &amp; Removal of Encumbrance / Hypothecation
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                For settled secured loans—such as Home Loans, Loans Against Property (LAP), or Auto Loans—obtaining the physical No Dues Certificate is only the first part of asset liberation. Borrowers must actively ensure that all physical collaterals and legal liens are formally removed:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-8">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Landmark className="w-5 h-5 text-[#1F5EFF]" />
                    <h3 className="text-sm font-bold text-slate-900">Original Title Deeds Custody</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Collect all original registered Sale Deeds, Mother Deeds, Mutation Sanction, and Encumbrance Certificates from the bank vault against a signed Document Handover Schedule.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Building2 className="w-5 h-5 text-emerald-600" />
                    <h3 className="text-sm font-bold text-slate-900">CERSAI Charge Satisfaction</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ensure the bank files Form Charge Satisfaction with the <strong>Central Registry of Securitisation Asset Reconstruction and Security Interest (CERSAI)</strong> to remove the mortgage encumbrance.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <ShieldCheck className="w-5 h-5 text-purple-600" />
                    <h3 className="text-sm font-bold text-slate-900">RTO Form 35 (Vehicle Loans)</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Obtain signed and stamped duplicate copies of <strong>RTO Form 35</strong> along with the NOC to cancel the bank hypothecation on your vehicle&apos;s Registration Certificate (RC).
                  </p>
                </div>
              </div>
            </section>

            {/* Section 12: Reusable Company Section */}
            <div id="company-resolution-section" className="my-14 scroll-mt-28">
              <CompanySection />
            </div>

            {/* Section 13: FAQ Section */}
            <section id="faqs" className="scroll-mt-28 mb-14">
              <div className="flex items-center gap-2 mb-6">
                <HelpCircle className="w-6 h-6 text-[#1F5EFF]" />
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                  13. Frequently Asked Questions (FAQs)
                </h2>
              </div>
              <p className="text-base text-slate-600 mb-8 leading-relaxed">
                Clear, legally authoritative answers to the most urgent post-settlement questions faced by Indian borrowers regarding No Dues Certificates, bank delays, and credit rehabilitation.
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

            {/* Regulatory Sources & References Strip */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-[#1F5EFF]" />
                Statutory Authorities &amp; Official Regulatory References
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Reserve Bank of India (RBI Circular RBI/2023-24/60):</strong> Release of Movable / Immovable Property Documents on Repayment / Settlement of Personal Loans &amp; ₹5,000/Day Penalty Rule
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
                    <strong>RBI Integrated Ombudsman Portal (CMS):</strong> Statutory Dispute Redressal for Delayed NDC, Property Document Non-Release &amp; Recovery Harassment
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
                    <strong>RBI Master Direction on Compromise Settlements (June 8, 2023):</strong> Guidelines on Board-Approved Compromise Settlements and Technical Write-Offs
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>TransUnion CIBIL Dispute Redressal:</strong> Credit Information Companies (Regulation) Act, 2005 (CICRA) Rules for Updating Settled Status &amp; Zero Balances
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://ncdrc.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>National Consumer Disputes Redressal Commission (NCDRC):</strong> Precedents on Deficiency of Banking Service and Compensation for Wrongful Post-Settlement Litigation
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
                  Bank One-Time Settlement OTS Policy
                </Link>
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
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement CIBIL Impact
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
                  href="/how-to-avoid-loan-settlement-scams"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  How to Avoid Settlement Scams
                </Link>
                <Link
                  href="/how-to-settle-credit-card-debt"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  How to Settle Credit Card Debt
                </Link>
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Lok Adalat Notice for Personal Loan
                </Link>
                <Link
                  href="/personal-loan-legal-notice"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Legal Notice Defense
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
                    Debt Settlement Strategist &amp; Banking Legal Specialist
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Ashish specializes in post-settlement verification, debt extinguishment audits, and protecting borrowers against unlawful recovery litigation under RBI Master Directions.
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
                <span>Post-Settlement Legal Support</span>
              </div>
              <div className="text-xl font-black mb-3 leading-tight">
                Bank Delaying Your No Dues Certificate?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Don&apos;t let banks delay your debt discharge. Let our senior banking advocates audit your payment proof, serve statutory notices under RBI rules, and claim your ₹5,000/day compensation.
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
                    <strong>100% Legal Immunity:</strong> Complete forensic verification of bank sanction letters and official ₹0 No Dues Certificates.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Shield:</strong> Immediate legal intervention to halt post-settlement recovery calls and harassment under RBI guidelines.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Statutory Delay Penalties:</strong> Direct escalation to Bank Principal Nodal Officers and RBI Ombudsman for ₹5,000/day compensation.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>CIBIL Dispute Assistance:</strong> Dedicated credit reporting follow-ups until your loan ledger reflects ₹0 balance and Settled status.
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
