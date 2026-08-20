'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';
import {
  ShieldCheck,
  AlertTriangle,
  ExternalLink,
  BookOpen,
  Award,
  PhoneCall,
  Check,
  Sparkles,
  Calendar,
  ArrowRight,
  ChevronDown,
  Scale,
  FileCheck,
  CheckCircle2,
  Lock,
  ShieldAlert,
  Search,
  Building2,
  Landmark,
  FileWarning,
  Eye,
  AlertCircle,
  Gavel,
  ShieldX,
  CreditCard,
  FileText,
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

export default function HowToAvoidLoanSettlementScamsClient() {
  const [activeId, setActiveId] = useState<string>('scam-landscape');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'scam-landscape', title: '1. The Dark Reality of Settlement Scams' },
    { id: 'seven-red-flags', title: '2. 7 Dead Giveaway Red Flags' },
    { id: 'forensic-ots-audit', title: '3. Forensic OTS Letter Verification' },
    { id: 'comparison-matrix', title: '4. Legitimate Agency vs Scam Matrix' },
    { id: 'scam-proof-protocol', title: '5. 5-Step Safe Settlement Protocol' },
    { id: 'legal-recourse-cybercrime', title: '6. Legal Action & Police Recourse' },
    { id: 'settleloans-ethical-standard', title: '7. The SettleLoans Gold Standard' },
    { id: 'faqs', title: '8. Frequently Asked Questions' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const headings = tocItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 220;

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
      question: 'How can I identify fake loan settlement companies in India?',
      answer: (
        <p>
          Fake loan settlement companies exhibit identifiable warning signs: 1) Demanding massive upfront registration or processing fees before performing any legal or negotiation work; 2) Promising unrealistic &quot;guaranteed 80% to 90% waivers&quot; within 24 to 48 hours; 3) Instructing you to transfer compromise funds into personal UPI IDs, third-party current accounts, or so-called &quot;escrow accounts&quot; instead of directly into your official bank loan account; 4) Refusing to provide advocate Bar Council enrollment numbers; and 5) Sending amateurish, unverified OTS letters on WhatsApp containing mismatched branch codes or distorted bank logos.
        </p>
      ),
    },
    {
      question: 'Do legitimate debt settlement companies charge large upfront fees?',
      answer: (
        <p>
          Legitimate, ethical, and legally compliant debt settlement firms operate with transparent, nominal retainers or performance-linked structures where primary professional fees are payable only upon the successful delivery of a verified, official bank OTS sanction letter. Any entity demanding 20% to 50% of your total loan balance upfront before even opening formal communication with your bank is running an advance-fee fraud scheme.
        </p>
      ),
    },
    {
      question: 'How can I verify if a loan settlement (OTS) sanction letter is genuine?',
      answer: (
        <p>
          To verify an OTS sanction letter: 1) Ensure it is printed on official bank or NBFC letterhead featuring a legitimate reference number, date, and authorized signatory stamp; 2) Cross-verify the branch code and contact the bank&apos;s Stressed Asset Resolution Branch (SARB) or Principal Nodal Officer; 3) Confirm that the letter explicitly instructs you to deposit the compromise amount directly into your existing loan account number; and 4) Verify that the letter clearly promises the issuance of a formal ₹0 No Dues Certificate (NDC) and credit bureau update upon clearance.
        </p>
      ),
    },
    {
      question: 'Is it safe to transfer settlement money to an agency&apos;s bank account or UPI ID?',
      answer: (
        <p>
          <strong>Never transfer a single rupee of your loan settlement compromise funds to any private company, intermediary, lawyer&apos;s personal account, or third-party UPI ID.</strong> Under Reserve Bank of India (RBI) directives and standard banking law, all settlement compromise payments must be deposited directly into your designated bank loan account via NEFT, RTGS, IMPS, or directly at the home branch cash counter against an official bank receipt.
        </p>
      ),
    },
    {
      question: 'Can any loan settlement company guarantee an 80% or 90% discount on my loan?',
      answer: (
        <p>
          No company or advocate can legitimately guarantee a specific discount percentage prior to an individual review by the lender&apos;s credit committee. In standard Indian banking practice, genuine personal loan settlement haircuts range between 40% and 65% (with borrowers paying 35% to 50% of the total claim depending on default vintage and documented hardship). Anyone guaranteeing 80% to 90% haircuts unconditionally is using deceptive marketing to lure vulnerable borrowers into paying upfront fees.
        </p>
      ),
    },
    {
      question: 'What legal action can I take if I have been scammed by a fake settlement agency?',
      answer: (
        <p>
          If you have fallen victim to a settlement scam: 1) File an immediate cybercrime complaint at <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-[#1F5EFF] underline">cybercrime.gov.in</a> or call the national cyber helpline at <strong>1930</strong>; 2) Lodge a formal police FIR under Bharatiya Nyaya Sanhita (BNS) Section 318(4) (Cheating) and Section 336(3) (Forgery) [formerly IPC Sections 420 and 468], along with Section 66D of the Information Technology Act, 2000; 3) Alert your lending bank&apos;s fraud prevention desk; and 4) If an advocate was complicit, file a statutory misconduct complaint before the respective State Bar Council.
        </p>
      ),
    },
    {
      question: 'Are debt settlement companies officially licensed or approved by the RBI?',
      answer: (
        <p>
          The Reserve Bank of India (RBI) regulates scheduled banks, NBFCs, and Asset Reconstruction Companies (ARCs), but it does not issue direct operational licenses to third-party debt settlement consultancies. Legitimate debt settlement assistance is conducted under legal advisory and representative frameworks through advocates enrolled with the Bar Council of India, who represent distressed borrowers under the Indian Contract Act, 1872 and the RBI Fair Practices Code.
        </p>
      ),
    },
    {
      question: 'How does SettleLoans ensure 100% scam-proof and legal debt settlement?',
      answer: (
        <p>
          SettleLoans eliminates all fraud vulnerabilities through a 4-pillar trust model: 1) <strong>Zero third-party fund handling:</strong> 100% of your settlement funds are paid directly to your lending bank; 2) <strong>Advocate-led representation:</strong> Empaneled Bar Council advocates represent your case directly before bank SARB executives; 3) <strong>Forensic letter audit:</strong> Every OTS letter undergoes legal authentication before any payment is authorized; and 4) <strong>Guaranteed NDC delivery:</strong> We follow through until you receive a physical ₹0 No Dues Certificate and verified credit bureau closure.
        </p>
      ),
    },
    {
      question: 'What should I do if a recovery agent sends me a settlement offer on WhatsApp?',
      answer: (
        <p>
          Do not make any payment based on WhatsApp text messages or unverified PDF attachments. Insist that the recovery agency arrange for the formal OTS sanction letter to be emailed directly from the bank&apos;s corporate domain (such as @hdfcbank.com, @icicibank.com, @axisbank.com) or collect a physical, stamped letter from the bank&apos;s regional stressed asset branch. Have an independent legal professional audit the letter before transferring funds.
        </p>
      ),
    },
    {
      question: 'Can paying a scammer cause me to face court cases from my actual bank?',
      answer: (
        <p>
          Yes. If you pay money to a fraudulent agency based on a forged OTS letter, your actual bank loan remains unpaid, active, and delinquent. The bank will continue to levy compounding penal charges and may initiate legal proceedings (such as Section 138 NI Act cheque bounce complaints, Section 25 Payment and Settlement Systems Act proceedings, or civil recovery suits) because the bank never sanctioned the settlement and never received your funds.
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

      {/* A. Editorial Hero Section - Charcoal Navy Background (#2D313D) */}
      <section
        className="w-full border-b border-slate-700/80 pt-8 pb-7 md:pt-12 md:pb-9 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#60a5fa]" />
            2026 Anti-Fraud &amp; Debt Settlement Security Guide
          </div>

          {/* H1 Headline */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            How to Identify Fake Loan Settlement Companies{' '}
            <span className="text-[#3b82f6] md:text-[#60a5fa]">(Red Flags, OTS Verification &amp; Safe Relief)</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Ready to resolve your overdue debt but terrified of paying upfront fees to fraudulent agencies? Discover how to spot settlement scams, verify authentic bank OTS sanction letters, and choose ethical, performance-based legal representation.
          </p>

          {/* Author & Review Metadata Bar */}
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
              <span>Reviewed by SettleLoans Legal Advisory Team</span>
            </div>
            <div className="hidden sm:block text-slate-500">•</div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-300" />
              <span>Updated: August 20, 2026</span>
            </div>
          </div>

          {/* Hero CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-5 rounded-xl shadow-md hover:shadow-blue-500/20 transition-all duration-300 text-xs sm:text-sm group"
            >
              <span>Verify Your Settlement Offer Free</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#seven-red-flags"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 text-xs sm:text-sm"
            >
              <BookOpen className="w-4 h-4 text-blue-300" />
              <span>Read Scam Red Flags</span>
            </a>
          </div>
        </div>
      </section>

      {/* B. Crisp Stats Strip Component */}
      <StatsStrip />

      {/* C. Three-Column Main Body Grid */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          {/* Left Column (Sticky TOC Navigation) */}
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
          </aside>

          {/* Middle Column (Main Comprehensive Body Content) */}
          <main className="w-full min-w-0 font-sans text-slate-800 blog-content">
            {/* Executive Summary / Key Takeaways Box */}
            <div className="bg-blue-50 border-l-8 border-[#1F5EFF] rounded-r-2xl p-6 md:p-8 mb-10 shadow-sm">
              <div className="flex items-center gap-2 text-[#1F5EFF] font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5" />
                <span>EXECUTIVE FRAUD PREVENTION SUMMARY</span>
              </div>
              <ul className="space-y-3 text-sm md:text-base text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>The #1 Golden Rule of Debt Settlement:</strong> 100% of your settlement compromise money must be paid <em>directly to your lending bank or NBFC</em> into your specific loan account. Never transfer compromise funds to an agency or individual UPI.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Upfront Fee Trap:</strong> Fraudulent companies demand 20% to 50% upfront fees and vanish. Legitimate platforms operate on transparent retainers with performance-linked structures payable only after securing an authentic bank sanction.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Forged OTS Sanction Letters:</strong> Scammers forge bank PDFs on WhatsApp using outdated logos and fake officer names. Authentic OTS letters originate from the bank&apos;s corporate domain or regional Stressed Asset Resolution Branch (SARB).
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Bar Council Empaneled Legal Defense:</strong> Real debt resolution is governed by advocates operating under the Indian Contract Act, 1872 and RBI Fair Practices Code, not unregulated telecallers making false promises.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero-Dues Closure:</strong> True resolution concludes only when the lender issues a stamped ₹0 No Dues Certificate (NDC) and updates credit bureaus (CIBIL, Experian, CRIF) to &quot;Settled&quot; status.
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Dark Reality of Loan Settlement Scams */}
            <section id="scam-landscape" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                1. The Dark Reality of Loan Settlement Scams in India: How Vulnerable Borrowers Are Targeted
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-slate-700">
                When you are trapped in severe debt, facing relentless collection calls, and struggling to make ends meet, the psychological pressure is suffocating. In this state of acute distress, borrowers become prime targets for predatory operators, fly-by-night telecallers, and organized cyber syndicates running sophisticated loan settlement scams across India.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Over the past three years, banking dispute records and cybercrime registries have witnessed an alarming surge in fraudulent &quot;debt relief consultancies&quot;. These syndicates obtain leaked database leads of defaulting borrowers from rogue collection agents. They contact borrowers claiming to be &quot;RBI-authorized settlement officers&quot;, &quot;National Debt Relief Boards&quot;, or &quot;Bank Dispute Ombudsmen&quot;, promising to erase 80% to 90% of their debt within 48 hours in exchange for an immediate upfront processing charge.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl my-6">
                <h3 className="font-bold text-amber-900 text-base mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  The Devastating Double-Loss Trap
                </h3>
                <p className="text-sm text-amber-800 leading-relaxed">
                  When a borrower transfers money to a fraudulent settlement agency, they suffer catastrophic double-jeopardy: <strong>First</strong>, they lose hard-earned cash they painstakingly gathered to resolve their debt. <strong>Second</strong>, their bank never receives the funds, causing the loan default to age into legal recovery territory (triggering Section 138 cheque bounce summons, Section 25 PSSA warrants, and compounding penal interest).
                </p>
              </div>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Navigating out of debt requires professional legal intervention, but you must know how to distinguish legitimate legal advocates from fraudulent scammers. Let us dissect the seven unmistakable red flags of fake settlement operations.
              </p>
            </section>

            {/* Section 2: 7 Dead Giveaway Red Flags */}
            <section id="seven-red-flags" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                2. 7 Dead Giveaway Red Flags of Fake Loan Settlement Companies (How to Spot Them Instantly)
              </h2>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                Scammers rely on urgency, legal intimidation, and unrealistic promises to bypass your critical judgment. If any debt settlement agency or caller demonstrates even <em>one</em> of the following seven red flags, cease all communication immediately:
              </p>

              {/* 7 Red Flag Cards */}
              <div className="space-y-4 my-6">
                {/* Red Flag 1 */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-rose-300 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                        <span>Demanding Substantial Upfront Fees Before Negotiation</span>
                        <span className="text-[11px] bg-rose-100 text-rose-700 font-bold px-2.5 py-0.5 rounded-full">
                          Advance-Fee Fraud
                        </span>
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Fraudulent agencies demand upfront charges ranging from ₹25,000 to ₹1,00,000 disguised as &quot;file registration fees&quot;, &quot;arbitration clearance deposits&quot;, or &quot;bank officer facilitation bribes&quot;. Once the payment is made, the agency stops answering calls, blocks your WhatsApp, or closes their virtual office. Ethical firms operate with transparent, nominal onboarding fees with primary success retainers tied strictly to delivering a verified bank sanction letter.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Red Flag 2 */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-rose-300 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                        <span>Directing Compromise Payments to Personal UPIs or Private Accounts</span>
                        <span className="text-[11px] bg-rose-100 text-rose-700 font-bold px-2.5 py-0.5 rounded-full">
                          Direct Theft
                        </span>
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        The ultimate acid test: <strong>Where does your settlement money go?</strong> If an agency instructs you to transfer money to a private company current account, an &quot;escrow trust&quot;, or a personal Google Pay / PhonePe UPI ID claiming &quot;we will pay the bank on your behalf&quot;, you are being scammed. In authentic banking settlements, 100% of compromise funds are deposited straight into your designated loan account number.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Red Flag 3 */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-rose-300 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                        <span>Guaranteed 80%–90% Haircuts Without Financial Hardship Review</span>
                        <span className="text-[11px] bg-rose-100 text-rose-700 font-bold px-2.5 py-0.5 rounded-full">
                          False Advertising
                        </span>
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        No ethical advocate or legitimate agency can guarantee a specific waiver percentage before reviewing your loan vintage, NPA provisioning stage, and financial hardship documents. Banks settle personal loans based on Reserve Bank of India (RBI) provisioning norms and internal risk committees—typically between 40% and 65% haircuts. Any claim of &quot;guaranteed 90% off within 24 hours&quot; is mathematically impossible and fraudulent.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Red Flag 4 */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-rose-300 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                        <span>Claiming to be &quot;RBI-Approved Debt Settlement Companies&quot;</span>
                        <span className="text-[11px] bg-rose-100 text-rose-700 font-bold px-2.5 py-0.5 rounded-full">
                          Misrepresentation
                        </span>
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        The Reserve Bank of India (RBI) regulates commercial banks, NBFCs, and ARCs, but <strong>RBI does not license, certify, or endorse debt settlement companies</strong>. Any platform displaying fake RBI seals or claiming to hold an &quot;RBI Debt Relief License&quot; is committing forgery under Bharatiya Nyaya Sanhita (BNS) Section 336(3). Legitimate firms operate strictly as legal advisories through Bar Council-enrolled advocates.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Red Flag 5 */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-rose-300 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                      5
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                        <span>Refusal to Provide Advocate Bar Council Enrollment Credentials</span>
                        <span className="text-[11px] bg-rose-100 text-rose-700 font-bold px-2.5 py-0.5 rounded-full">
                          Unlicensed Operators
                        </span>
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Under the Advocates Act, 1961, only enrolled advocates have the statutory standing to represent clients in legal disputes, issue formal notices to lenders, and appear before Lok Adalats or mediation centers. Fraudulent agencies operate out of unregulated call centers with telecallers posing as lawyers. Always demand the advocate&apos;s full name, State Bar Council enrollment number, and verify their standing.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Red Flag 6 */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-rose-300 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                      6
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                        <span>Communication Solely via WhatsApp Numbers with No Physical Office</span>
                        <span className="text-[11px] bg-rose-100 text-rose-700 font-bold px-2.5 py-0.5 rounded-full">
                          Ghost Operations
                        </span>
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Scammers operate behind disposable virtual numbers, burner WhatsApp accounts, and free email domains (@gmail.com, @yahoo.com). They provide fake physical addresses or virtual coworking listings. Legitimate legal platforms have verifiable registered corporate offices, corporate domain emails (@settleloans.in), dedicated landlines, and transparent public profiles.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Red Flag 7 */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-rose-300 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                      7
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
                        <span>Promising to Instantly &quot;Delete&quot; Settled Records from CIBIL</span>
                        <span className="text-[11px] bg-rose-100 text-rose-700 font-bold px-2.5 py-0.5 rounded-full">
                          Credit Bureau Fraud
                        </span>
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Under the Credit Information Companies (Regulation) Act, 2005 (CICRA), credit bureaus (TransUnion CIBIL, Experian, CRIF) update records strictly based on electronic data feeds received directly from banks. No agency has a &quot;backdoor&quot; to magically erase a default or convert a &quot;Settled&quot; status to &quot;Standard Clean&quot; overnight. Anyone charging fees for &quot;instant CIBIL score clearing&quot; is running a scam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Forensic OTS Letter Verification */}
            <section id="forensic-ots-audit" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                3. Anatomy of a Forged OTS Sanction Letter: Forensic 8-Point Verification Checklist
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                The most dangerous tool in the scammer&apos;s playbook is the <strong>forged One-Time Settlement (OTS) letter</strong>. Scammers download legitimate bank templates, edit borrower details using graphic editing tools, attach outdated bank logos, and insert arbitrary compromise figures to induce immediate payment.
              </p>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                Before transferring a single rupee to your bank loan account, perform this rigorous 8-point forensic audit on the settlement sanction document:
              </p>

              {/* 4-Sided Bordered Table: Forensic Verification */}
              <div className="overflow-x-auto my-6">
                <table>
                  <thead>
                    <tr>
                      <th>Document Parameter</th>
                      <th>Authentic Bank OTS Sanction Letter</th>
                      <th>Forged / Fraudulent Settlement Letter</th>
                      <th>Risk Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">1. Transmission Channel</td>
                      <td>
                        Dispatched from the bank&apos;s verified corporate domain (e.g. <code>@hdfcbank.com</code>, <code>@icicibank.com</code>) or collected physically at the SARB branch.
                      </td>
                      <td className="text-rose-600 font-medium">
                        Sent via personal WhatsApp from an unverified mobile number or a generic <code>@gmail.com</code> address.
                      </td>
                      <td className="font-bold text-rose-600">CRITICAL</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">2. Bank Letterhead &amp; Watermark</td>
                      <td>
                        High-resolution corporate stationery with crisp typography, accurate registered office address, CIN number, and valid branch IFSC code.
                      </td>
                      <td className="text-rose-600 font-medium">
                        Pixelated, stretched, or outdated logos; missing corporate identification numbers (CIN); blurry borders from screenshot cropping.
                      </td>
                      <td className="font-bold text-rose-600">HIGH</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">3. Reference &amp; Dispatch Number</td>
                      <td>
                        Unique, sequential internal reference code (e.g. <code>HDFC/SARB/DEL/OTS/2026/0892</code>) verifiable in the bank&apos;s CBS core database.
                      </td>
                      <td className="text-rose-600 font-medium">
                        Generic or missing reference number; numbers copied from online sample templates with no database match.
                      </td>
                      <td className="font-bold text-rose-600">CRITICAL</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">4. Payment Destination</td>
                      <td>
                        Instructs deposit strictly into your designated <strong>Loan Account Number</strong> via internal bank transfer or branch cash counter.
                      </td>
                      <td className="text-rose-600 font-medium">
                        Instructs payment into a third-party current account, agency escrow, or personal UPI handle.
                      </td>
                      <td className="font-bold text-rose-700 bg-rose-50">DEFINITE FRAUD</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">5. Breakdown of Liability</td>
                      <td>
                        Explicitly details Principal Outstanding, Accrued Interest, Waived Penalties, and Final Agreed Settlement Figure.
                      </td>
                      <td className="text-rose-600 font-medium">
                        Vague, single-line compromise sum with no breakdown of principal versus interest waivers.
                      </td>
                      <td className="font-bold text-amber-600">MODERATE</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">6. Authorized Signatory &amp; Stamp</td>
                      <td>
                        Signed by an authorized officer (Manager / Chief Manager SARB) with employee code and round branch seal.
                      </td>
                      <td className="text-rose-600 font-medium">
                        Digital copy-pasted signature with no employee designation code or a generic &quot;Authorized Signatory&quot; text stamp.
                      </td>
                      <td className="font-bold text-rose-600">HIGH</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">7. NDC &amp; CIBIL Reporting Clause</td>
                      <td>
                        Contains explicit commitment to issue a ₹0 No Dues Certificate within 15–30 days and report &quot;Settled&quot; status to bureaus.
                      </td>
                      <td className="text-rose-600 font-medium">
                        Promises &quot;Clean/Standard CIBIL conversion&quot; or makes no mention of formal NDC issuance timelines.
                      </td>
                      <td className="font-bold text-rose-600">HIGH</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">8. Branch Manager Confirmation</td>
                      <td>
                        The Home Branch or SARB Branch Manager pulls up the exact OTS approval record on their terminal when presented in person.
                      </td>
                      <td className="text-rose-600 font-medium">
                        Branch manager states the loan is still active in full default with zero settlement approvals in the system.
                      </td>
                      <td className="font-bold text-rose-700 bg-rose-50">DEFINITE FRAUD</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Legitimate Agency vs Scam Matrix */}
            <section id="comparison-matrix" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                4. Legitimate Debt Settlement Agency vs. Fraudulent Call Center Operators (Comparison Matrix)
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                To help you make an informed, confident decision when seeking debt relief, examine the structural and legal differences between an ethical legal platform like SettleLoans and unregulated scam operations:
              </p>

              {/* 4-Sided Bordered Table: Comparison */}
              <div className="overflow-x-auto my-6">
                <table>
                  <thead>
                    <tr>
                      <th>Operational Dimension</th>
                      <th>SettleLoans (Ethical Gold Standard)</th>
                      <th>Fraudulent / Fly-by-Night Scammers</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Legal Representation</td>
                      <td className="text-emerald-700 font-semibold">
                        Empaneled advocates enrolled with the Bar Council of India representing you under statutory authority.
                      </td>
                      <td className="text-rose-600">
                        Unregulated telemarketers and call center agents with zero legal qualifications or professional accountability.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Fund Routing</td>
                      <td className="text-emerald-700 font-semibold">
                        <strong>Zero third-party handling:</strong> 100% of settlement funds are paid directly to your bank loan account.
                      </td>
                      <td className="text-rose-600">
                        Demands compromise funds routed through private company bank accounts or personal UPI wallets.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Fee Structure</td>
                      <td className="text-emerald-700 font-semibold">
                        Transparent nominal onboarding fee with primary success retainers payable only upon delivering verified OTS sanction.
                      </td>
                      <td className="text-rose-600">
                        Demands 20% to 50% upfront fees before any negotiations, with zero performance guarantees or refunds.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Negotiation Channel</td>
                      <td className="text-emerald-700 font-semibold">
                        Direct written engagement with Bank Nodal Officers, Zonal SARB desks, and National Lok Adalat benches.
                      </td>
                      <td className="text-rose-600">
                        Colludes with rogue field recovery agents or generates forged documents without bank awareness.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Anti-Harassment Defense</td>
                      <td className="text-emerald-700 font-semibold">
                        Serves formal legal notices under the RBI Fair Practices Code to halt unlawful harassment within 48 to 72 hours.
                      </td>
                      <td className="text-rose-600">
                        Tells you to &quot;just switch off your phone&quot;, leaving you vulnerable to home and workplace recovery visits.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Post-Settlement Documentation</td>
                      <td className="text-emerald-700 font-semibold">
                        Ensures receipt of physical, stamped ₹0 No Dues Certificates and monitors credit bureau status reconciliation.
                      </td>
                      <td className="text-rose-600">
                        Vanishes immediately after payment; borrower receives no official NDC from the bank.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Compact High-Impact Infographic Banner (Between Section 4 and 5) */}
            <div className="bg-white border-2 border-blue-200 rounded-3xl overflow-hidden shadow-lg my-10 text-slate-800">
              {/* Header Strip */}
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
                      How to Avoid Loan Settlement Scams: 4-Pillar Verification Blueprint
                    </h3>
                  </div>
                </div>
                <a
                  href="/images/infographics/how-to-avoid-loan-settlement-scams.jpg"
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
                    src="/images/infographics/how-to-avoid-loan-settlement-scams.jpg"
                    alt="How to Avoid Loan Settlement Scams Summary Infographic"
                    className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Quick Crux Footer Strip */}
              <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>
                    <strong>Key Takeaway:</strong> Never pay compromise funds to third parties &bull; Insist on direct bank OTS sanction &bull; Demand ₹0 No Dues Certificate.
                  </span>
                </div>
                <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                  Get Free Settlement Evaluation &rarr;
                </Link>
              </div>
            </div>

            {/* Section 5: 5-Step Scam-Proof Settlement Verification Protocol */}
            <section id="scam-proof-protocol" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                5. The 5-Step Scam-Proof Settlement Protocol: How to Pay Your Bank Safely &amp; Secure ₹0 NDC
              </h2>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                To guarantee that your debt settlement is 100% legally binding, mathematically sound, and protected against fraud, follow this systematic 5-step operational protocol:
              </p>

              {/* Step Cards */}
              <div className="space-y-4 my-6">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">
                      1
                    </span>
                    Compile a Formal Legal Hardship Dossier
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Legitimate loan settlement is rooted in verifiable financial hardship, not informal negotiation. Empaneled advocates assemble an airtight documentary dossier—including employment termination letters, medical treatment records, business GST filing drops, or bank statements reflecting insolvency. This establishes genuine inability to pay and compels the bank&apos;s credit committee to approve substantial waivers.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">
                      2
                    </span>
                    Bypass Collection Callers &amp; Engage Stressed Asset Resolution Desks
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Field recovery agents work on collection commissions and have zero sanctioning authority. Our advocates serve formal legal representations directly to the bank&apos;s Principal Nodal Officer and SARB Zonal Heads. This halts third-party harassment under the RBI Fair Practices Code and moves discussions to authorized decision-makers.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">
                      3
                    </span>
                    Demand Official Bank OTS Sanction Letter on Registered Letterhead
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Never accept verbal promises or WhatsApp message confirmations. The bank must issue a signed, stamped OTS Sanction Letter bearing an authentic dispatch reference code, specifying the exact compromise sum, payment due date, and loan account number. SettleLoans legal counsel performs a forensic audit to verify the sanction with the bank before you pay.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">
                      4
                    </span>
                    Execute Payment Directly into Your Loan Account via RTGS/NEFT
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Transfer the agreed compromise funds directly into your loan account number using official banking channels (RTGS, NEFT, or home branch counter). Obtain a stamped bank receipt with the transaction UTR number. This creates an indisputable audit trail under the Indian Evidence Act.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">
                      5
                    </span>
                    Secure Stamped ₹0 No Dues Certificate &amp; Reconcile CIBIL Records
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Within 15 to 30 days of final payment, the bank is legally obligated to issue a formal No Dues Certificate confirming full discharge of liability. SettleLoans tracks the closure through to the credit bureaus, ensuring your outstanding balance is recorded as ₹0 and all legal actions are permanently withdrawn.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Legal Action & Police Recourse */}
            <section id="legal-recourse-cybercrime" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                6. Legal Action &amp; Police Recourse: What to Do If You Have Already Been Scammed
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                If you have unfortunately fallen victim to an advance-fee settlement scam or transferred money to a fraudulent agency, time is of the essence. You must initiate immediate legal and cybercrime countermeasures to freeze the perpetrator&apos;s accounts and protect yourself from bank litigation:
              </p>

              {/* 4-Sided Bordered Table: Legal Recourse */}
              <div className="overflow-x-auto my-6">
                <table>
                  <thead>
                    <tr>
                      <th>Recourse Mechanism</th>
                      <th>Governing Indian Law / Portal</th>
                      <th>Immediate Action Step</th>
                      <th>Expected Outcome</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">1. Cybercrime Freeze</td>
                      <td>
                        National Cyber Crime Reporting Portal (<code>cybercrime.gov.in</code>) / <strong>Helpline 1930</strong>
                      </td>
                      <td>
                        Report within 2–4 hours of transaction with UPI transaction ID, bank account details, and suspect mobile number.
                      </td>
                      <td>
                        Golden Hour freeze on the scammer&apos;s bank account to reverse or hold fraudulent fund transfers.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">2. Criminal Police FIR</td>
                      <td>
                        <strong>Bharatiya Nyaya Sanhita (BNS) 2023</strong>: Section 318(4) (Cheating) &amp; Section 336(3) (Forgery) [formerly IPC 420 &amp; 468] + IT Act Section 66D
                      </td>
                      <td>
                        Lodge formal complaint at your local police station or Cyber Cell with WhatsApp chats, forged PDFs, and payment receipts.
                      </td>
                      <td>
                        Registration of cognizable FIR, investigation of ghost call centers, and formal police documentation.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">3. Bank Fraud Cell Intimation</td>
                      <td>
                        RBI Master Directions on Frauds &amp; Integrated Ombudsman Scheme
                      </td>
                      <td>
                        Submit a written affidavit to your lending bank explaining that you were defrauded by third-party imposters.
                      </td>
                      <td>
                        Prevents the bank from treating you as a wilful defaulter and opens legitimate settlement dialogue.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">4. Bar Council Misconduct Complaint</td>
                      <td>
                        Advocates Act, 1961 (Section 35)
                      </td>
                      <td>
                        If an enrolled advocate was complicit in issuing fake letters or misappropriating funds, petition the State Bar Council.
                      </td>
                      <td>
                        Disciplinary proceedings, suspension or revocation of law license, and civil liability claims.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7: Why SettleLoans is the Ethical Gold Standard */}
            <section id="settleloans-ethical-standard" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                7. Why SettleLoans is India&apos;s Ethical Gold Standard in Debt Dispute Resolution
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                SettleLoans was founded with a single mission: to provide honest, transparent, and legally unassailable debt relief to distressed borrowers across India without exploiting their vulnerability. We have helped thousands of individuals break free from debt traps through our <strong>Zero-Fraud Trust Architecture</strong>:
              </p>

              {/* 4 Trust Architecture Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#1F5EFF] flex items-center justify-center mb-3">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">100% Direct-to-Bank Payments</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    SettleLoans never touches or holds your settlement compromise money. Every rupee negotiated is paid directly by you into your own bank loan account against an official bank sanction letter.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                    <Scale className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">Bar Council Empaneled Advocates</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Your case is handled exclusively by verified, experienced legal advocates who represent you under the Indian Contract Act, 1872 and invoke RBI Fair Practices to shield you from harassment.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-3">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">Forensic Letter Verification</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Every OTS sanction letter is legally validated with the lender&apos;s central stressed asset desk and branch manager before you disburse funds, ensuring 0% forgery risk.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-3">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">Guaranteed ₹0 NDC Delivery</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    We track your resolution to completion, ensuring the delivery of a physical No Dues Certificate and monitoring bureau records until your credit score rebuild journey begins.
                  </p>
                </div>
              </div>
            </section>

            {/* Company Section Reusable Component */}
            <CompanySection />

            {/* Section 8: FAQs */}
            <section id="faqs" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                8. Frequently Asked Questions (FAQ): How to Avoid Loan Settlement Scams
              </h2>
              <p className="text-base leading-relaxed mb-6 text-slate-700">
                Find clear, authoritative answers to the most critical legal, operational, and fraud-prevention questions regarding debt settlement companies in India:
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

            {/* Sources Strip */}
            <div className="my-10 p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-[#1F5EFF]" />
                Authoritative Legal &amp; Regulatory Sources
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    Reserve Bank of India (RBI) — Master Circular on Fair Practices Code for Lenders &amp; Recovery Norms
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    Ministry of Home Affairs (MHA) — National Cyber Crime Reporting Portal &amp; Helpline 1930 Guidelines
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://www.barcouncilofindia.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    Bar Council of India — Statutory Professional Standards &amp; Advocate Representation Rules (Advocates Act, 1961)
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
                    Supreme Court of India — Landmark Rulings on Coercive Debt Recovery &amp; Consumer Protection Jurisprudence
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
                    RBI Complaint Management System (CMS) — Integrated Banking Ombudsman Scheme
                  </a>
                </li>
              </ul>
            </div>

            {/* Internal Topic Badges (10 Links) */}
            <div className="my-10 pt-6 border-t border-slate-200">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
                Related Debt Settlement &amp; Legal Protection Guides
              </h4>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/personal-loan-settlement-company"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Settlement Company
                </Link>
                <Link
                  href="/personal-loan-settlement-percentage"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Loan Settlement Percentage
                </Link>
                <Link
                  href="/personal-loan-settlement-fees"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Settlement Fees
                </Link>
                <Link
                  href="/personal-loan-settlement-lawyer"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Settlement Lawyer
                </Link>
                <Link
                  href="/personal-loan-settlement-letter-format"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Settlement Letter Format
                </Link>
                <Link
                  href="/personal-loan-debt-settlement"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Personal Loan Debt Settlement
                </Link>
                <Link
                  href="/cannot-pay-personal-loan-emi"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Cannot Pay Personal Loan EMI
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Can I Go to Jail for Default?
                </Link>
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Lok Adalat Notice for Loan
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Settlement CIBIL Impact
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
                    Debt Settlement Strategist &amp; Consumer Rights Advocate
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Ashish specializes in stressed asset negotiations, RBI NPA regulatory provisioning, and debt dispute resolution for retail borrowers across India.
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

            {/* Card 2: Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-[#1F5EFF] to-blue-700 text-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 text-blue-100 text-xs font-bold uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>OTS Sanction Verification Desk</span>
              </div>
              <h3 className="text-xl font-black mb-3 leading-tight">
                Holding a Settlement Offer? Verify It Before You Pay
              </h3>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Received a settlement letter on WhatsApp or from an agency? Have our empaneled legal advocates audit its validity with the bank for free.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white hover:bg-slate-100 text-[#1F5EFF] font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 shadow"
              >
                Verify Settlement Letter Free
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
                    <strong>100% Direct-to-Bank:</strong> All compromise funds go straight to your lender loan account.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Bar Council Empaneled:</strong> True legal representation under statutory authority.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Forensic Document Audit:</strong> 0% tolerance for forged or unverified settlement letters.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed ₹0 NDC:</strong> Complete legal immunity and verified credit bureau closure.
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
