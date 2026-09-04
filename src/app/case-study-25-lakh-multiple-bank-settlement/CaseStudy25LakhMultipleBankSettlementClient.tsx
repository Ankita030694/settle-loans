'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';
import {
  ShieldCheck,
  Clock,
  ChevronDown,
  Calendar,
  Award,
  PhoneCall,
  ExternalLink,
  Lock,
  Building2,
  Landmark,
  Sparkles,
  BookOpen,
  ShieldAlert,
  CreditCard,
  Scale,
  FileText,
  HelpCircle,
  Users,
  Calculator,
  Briefcase,
  Layers,
  ArrowUpRight,
  Gavel,
  FileCheck,
  UserCheck,
  Coins,
  Flame,
  ArrowRight
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
          className={`flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1886ff] transition-transform duration-300 ${
            isOpen ? 'rotate-180 bg-[#1886ff] text-white' : ''
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

export default function CaseStudy25LakhMultipleBankSettlementClient() {
  const [activeId, setActiveId] = useState<string>('case-background-multi-debt-crisis');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'case-background-multi-debt-crisis', title: '1. The ₹25L Multi-Bank Crisis & Client Profile' },
    { id: 'banking-economics-multi-npa-dynamics', title: '2. Multi-Lender NPA Mechanics & Provisioning' },
    { id: 'financial-breakdown-settlement-math', title: '3. Financial Audit & 7-Account Haircut Math' },
    { id: 'comparative-resolution-matrix', title: '4. Multi-Bank OTS vs Consolidation Matrix' },
    { id: 'cibil-scoring-algorithm-multi-default', title: '5. CIBIL Scoring Dynamics Across 7 Accounts' },
    { id: 'infographic-resolution-blueprint', title: '6. Visual Multi-Bank Resolution Blueprint' },
    { id: 'six-stage-prioritization-sop', title: '7. 6-Stage Prioritization & Settlement SOP' },
    { id: 'statutory-notice-defense-rights', title: '8. Statutory Notice Defense & Borrower Shields' },
    { id: 'three-tier-escalation-matrix', title: '9. 3-Tier Grievance & Ombudsman Matrix' },
    { id: 'chronological-milestone-timeline', title: '10. Chronological 180-Day Resolution Timeline' },
    { id: 'specialized-multi-debt-scenarios', title: '11. Specialized Multi-Lender Case Scenarios' },
    { id: 'company-resolution-section', title: '12. SettleLoans Legal Defense & Representation' },
    { id: 'faqs', title: '13. Frequently Asked Questions' },
    { id: 'statutory-citations-authority-grid', title: '14. Statutory Citations & Outbound Authority' },
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
      question: "Can someone settle multiple personal loans and credit cards across different banks simultaneously?",
      answer: (
        <p>
          Yes. Borrowers facing genuine financial distress can settle multiple unsecured loans and credit cards across different banks. Each lender operates an independent Credit Committee, allowing SettleLoans to negotiate bilateral One-Time Settlements (OTS) sequentially.
        </p>
      )
    },
    {
      question: "How was the ₹25 Lakh multi-bank debt settled for ₹10.5 Lakhs in this case study?",
      answer: (
        <p>
          The borrower had 3 personal loans and 4 credit cards totaling ₹25 Lakhs. SettleLoans audited the ledgers, isolated unearned penalties, and negotiated bilateral OTS sanction letters across all 7 lenders, achieving a 58% waiver.
        </p>
      )
    },
    {
      question: "How do you prioritize which bank or credit card to settle first when funds are limited?",
      answer: (
        <p>
          We prioritize aggressive private lenders issuing statutory notices under Section 25 PSSA or Section 138 NI Act, followed by 42% APR revolving cards, while deferring patient public sector banks with slower provisioning cycles.
        </p>
      )
    },
    {
      question: "Why is taking a debt consolidation loan risky when already in severe default?",
      answer: (
        <p>
          Defaulted borrowers cannot qualify for institutional consolidation loans due to low CIBIL scores. Taking high-interest unregulated loans to pay existing EMIs creates an unsustainable debt spiral that accelerates financial insolvency.
        </p>
      )
    },
    {
      question: "Can multiple banks file simultaneous criminal cases or Section 138 / Section 25 notices?",
      answer: (
        <p>
          Lenders cannot initiate criminal cases for genuine civil loan default. However, bounced mandates trigger Section 25 PSSA or Section 138 NI Act notices, which our legal team defends while initiating formal OTS compromise talks.
        </p>
      )
    },
    {
      question: "How can a borrower stop coordinated harassment from multiple recovery agencies?",
      answer: (
        <p>
          Under RBI recovery directions, agents cannot visit workplaces, call outside 08:00 AM to 07:00 PM, or contact relatives. Borrowers can issue legal cease-and-desist notices to bank Nodal Officers and escalate to the RBI Ombudsman.
        </p>
      )
    },
    {
      question: "What happens if some banks agree to an OTS while other lenders refuse or delay?",
      answer: (
        <p>
          Settlement is executed in tranches. Receptive lenders offering 50% to 65% waivers are paid first to secure closure. Reluctant lenders are engaged in secondary rounds as aging NPA provisioning compels committee approvals.
        </p>
      )
    },
    {
      question: "What essential clauses must be verified in each multi-bank settlement sanction letter?",
      answer: (
        <p>
          Verify official bank letterhead, authorized officer credentials, exact settlement amount, full waiver of balance principal and penal interest, commitment to issue a No Dues Certificate, and withdrawal of all legal proceedings.
        </p>
      )
    },
    {
      question: "How does settling 7 different loan accounts impact CIBIL scores and how is it rebuilt?",
      answer: (
        <p>
          Accounts are marked &apos;Settled&apos; with ₹0 balances, halting ongoing default reporting. Borrowers can rebuild their CIBIL score back to 750+ within 18 to 24 months using secured credit cards and maintaining disciplined utilization.
        </p>
      )
    },
    {
      question: "What is the statutory timeline for lenders to issue No Dues Certificates after settlement payment?",
      answer: (
        <p>
          Under RBI Circular RBI/2023-24/60, all banks and NBFCs must issue the formal No Dues Certificate and update credit bureaus within 30 calendar days. Delays beyond 30 days attract statutory compensation of ₹5,000 per day.
        </p>
      )
    }
  ];

  return (
    <div
      className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-[#1886ff] selection:text-white"
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
          margin: 1.5rem 0;
          font-size: 0.95em;
        }
        .blog-content th {
          background: #F8FAFC;
          padding: 0.75rem 1rem;
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
          padding: 0.75rem 1rem;
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

      {/* Editorial Hero Section - Charcoal Navy #2d313d Background */}
      <section
        className="w-full border-b border-slate-700/80 pt-28 pb-8 md:pt-36 md:pb-12 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-blue-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            How to Settle Multiple Personal Loans: <span className="text-[#3b82f6] md:text-[#60a5fa]">₹25 Lakh Multi-Bank Case Study</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            A strategic roadmap detailing how a borrower trapped in ₹25 Lakhs of unsecured debt across 3 personal loans and 4 credit cards halted aggressive recovery harassment, prioritized lender negotiations, and secured an overall 58% One-Time Settlement waiver under Reserve Bank of India compromise frameworks.
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
              <span>RBI Compromise Settlement Framework</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Negotiate Multi-Bank Settlement</span>
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

      {/* Stats Bar */}
      <StatsStrip />

      {/* Main Content Layout */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column: Sticky Table of Contents */}
          <aside className="hidden lg:block sticky top-24 space-y-5">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200 text-slate-900 font-bold text-base">
                <BookOpen className="w-4 h-4 text-[#1886ff]" />
                <span>Roadmap Contents</span>
              </div>
              <nav className="space-y-1.5 max-h-[calc(100vh-220px)] overflow-y-auto pr-1 text-xs leading-relaxed">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block py-1.5 px-2.5 rounded-lg transition-all duration-150 ${
                      activeId === item.id
                        ? 'bg-[#1886ff] text-white font-semibold shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Center Column: High-Density Editorial Prose */}
          <main className="min-w-0 blog-content text-slate-700 leading-relaxed text-base space-y-8">
            
            {/* Executive Summary Box */}
            <div
              id="executive-summary"
              className="p-6 md:p-8 rounded-2xl border border-blue-100 shadow-sm leading-relaxed"
              style={{ backgroundColor: '#F4F8FE', borderLeft: '5px solid #1886ff' }}
            >
              <div className="flex items-center gap-2.5 mb-3 text-[#1886ff] font-bold text-lg">
                <Sparkles className="w-5 h-5" />
                <span>Executive Case Summary & Strategic Thesis</span>
              </div>
              <p className="text-slate-800 text-base md:text-lg leading-relaxed mb-4">
                When an individual accumulates unsecured credit across multiple financial institutions, unexpected income disruptions or medical emergencies trigger a severe multi-creditor crisis. In this verified case study, a technology professional faced ₹25,00,000 in compounding liabilities distributed across 3 personal loans with HDFC Bank, ICICI Bank, and Axis Bank, alongside 4 active credit cards with SBI Card, RBL Bank, Kotak Mahindra, and Standard Chartered, resulting in acute psychological trauma and uncoordinated collection harassment.
              </p>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                SettleLoans executed a structured multi-bank debt defense strategy, establishing communication shields to halt recovery calls, auditing ledgers to eliminate unearned compounding finance charges, and prioritizing negotiations based on institutional provisioning timelines. Over a disciplined 180-day runway, SettleLoans engaged the Stressed Assets Resolution Branches and Credit Committees of all seven lenders, securing official One-Time Settlement sanction letters that resolved the ₹25 Lakh liability for ₹10,50,000, delivering a 58% waiver and zero-balance No Dues Certificates.
              </p>
            </div>

            {/* Section 1: Multi-Bank Debt Economics & NPA Dynamics */}
            <section id="case-background-multi-debt-crisis" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1886ff] text-xs font-bold uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Section 1: Portfolio Breakdown</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                The ₹25 Lakh Multi-Bank Crisis & Client Profile
              </h2>
              <p>
                Managing simultaneous defaults across multiple lending institutions creates compounding financial and operational friction. Under the Reserve Bank of India Master Circular on Income Recognition, Asset Classification and Provisioning (IRACP), overdue credit facilities transition through Special Mention Account stages from SMA-0 to SMA-2 before being categorized as Non-Performing Assets (NPAs) at 90 days past due. When seven distinct institutions classify a borrower as an NPA simultaneously, automated recovery engines initiate concurrent demand notices, creating severe administrative distress.
              </p>
              <p>
                However, NPA reclassification also triggers mandatory Tier-1 capital provisioning requirements under RBI prudential norms, compelling banks to set aside substantial balance-sheet reserves against unsecured retail assets. Because personal loans and credit cards lack underlying physical collateral under Section 31 of the SARFAESI Act, 2002, commercial lenders cannot execute summary property attachments. Maintaining aged unsecured NPAs creates an ongoing drag on bank profitability, establishing strong commercial incentives for credit committees to sanction realistic compromise settlements that recover capital.
              </p>
            </section>

            {/* Section 2: Multi-Lender NPA Mechanics & Capital Provisioning */}
            <section id="banking-economics-multi-npa-dynamics" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1886ff] text-xs font-bold uppercase tracking-wider">
                <Landmark className="w-3.5 h-3.5" />
                <span>Section 2: Banking Mechanics</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Multi-Lender NPA Mechanics & Capital Provisioning
              </h2>
              <p>
                Each lending institution operates under distinct provisioning policies and risk appetites. Private sector commercial banks provision aggressively against unsecured credit defaults, frequently writing off non-performing accounts to Doubtful or Loss asset categories within 12 to 18 months. This rapid balance-sheet write-off creates immediate discretionary authority within Stressed Assets Resolution Branches to grant significant debt waivers. Conversely, public sector lenders follow conservative, committee-driven provisioning schedules that require structured multi-layer approvals.
              </p>
              <p>
                SettleLoans capitalizes on these institutional differences by staging negotiations according to each lender&apos;s internal provisioning milestones. By demonstrating that unrecovered unsecured credit facilities yield zero liquidation value in civil execution proceedings, our legal representatives establish that immediate cash recovery through a structured One-Time Settlement delivers a demonstrably higher Net Present Value than protracted civil litigation across Indian courts.
              </p>
            </section>

            {/* Section 3: Financial Audit & Multi-Bank Haircut Math */}
            <section id="financial-breakdown-settlement-math" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1886ff] text-xs font-bold uppercase tracking-wider">
                <Calculator className="w-3.5 h-3.5" />
                <span>Section 3: Financial Forensics</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Financial Audit & 7-Account Haircut Breakdown
              </h2>
              <p>
                Before opening negotiations, SettleLoans conducted a forensic audit of all seven loan ledgers. While the claimed portfolio balance stood at ₹25,00,000, the underlying principal was only ₹14,20,000, with ₹10,80,000 representing unearned 42% credit card APRs, penal interest, late payment levies, and 18% GST.
              </p>
              
              {/* 4-Sided Bordered Calculation Card */}
              <div className="my-6 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Multi-Bank Resolution Portfolio Audit</h3>
                    <p className="text-xs text-slate-500">Breakdown of 7 defaulted accounts across private, PSU, and foreign lenders</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full">
                    Overall 58% Waiver
                  </span>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-800">HDFC Bank Personal Loan</span>
                    <span className="text-slate-600">Claimed: ₹7,00,000 | Settled: <strong className="text-blue-700">₹3,15,000</strong> (55% Haircut)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-800">ICICI Bank Personal Loan</span>
                    <span className="text-slate-600">Claimed: ₹5,50,000 | Settled: <strong className="text-blue-700">₹2,45,000</strong> (55% Haircut)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-800">Axis Bank Personal Loan</span>
                    <span className="text-slate-600">Claimed: ₹4,50,000 | Settled: <strong className="text-blue-700">₹2,00,000</strong> (56% Haircut)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-800">SBI Card (Credit Card)</span>
                    <span className="text-slate-600">Claimed: ₹3,20,000 | Settled: <strong className="text-blue-700">₹1,10,000</strong> (66% Haircut)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-800">RBL Bank (Credit Card)</span>
                    <span className="text-slate-600">Claimed: ₹2,10,000 | Settled: <strong className="text-blue-700">₹75,000</strong> (64% Haircut)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-800">Kotak Mahindra Bank (Credit Card)</span>
                    <span className="text-slate-600">Claimed: ₹1,50,000 | Settled: <strong className="text-blue-700">₹55,000</strong> (63% Haircut)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-800">Standard Chartered (Credit Card)</span>
                    <span className="text-slate-600">Claimed: ₹1,20,000 | Settled: <strong className="text-blue-700">₹50,000</strong> (58% Haircut)</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-200 flex justify-between items-center bg-slate-50 p-4 rounded-xl">
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase block">Total Portfolio Summary</span>
                    <span className="text-base font-extrabold text-slate-900">Original Dues: ₹25,00,000</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-green-700 uppercase block">Final Settled Outflow</span>
                    <span className="text-xl font-black text-green-700">₹10,50,000 (Saved ₹14.5L)</span>
                  </div>
                </div>
              </div>

              <p>
                By establishing that over 43% of claimed dues comprised penalty inflation, SettleLoans demonstrated to credit committees that a ₹10,50,000 lump-sum settlement exceeded the Net Present Value of pursuing prolonged civil litigation. The settlement funds were deployed across two strategic tranches, ensuring complete portfolio closure without requiring fresh debt.
              </p>
            </section>

            {/* Section 4: 4-Sided Bordered Comparison Matrix */}
            <section id="comparative-resolution-matrix" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1886ff] text-xs font-bold uppercase tracking-wider">
                <Scale className="w-3.5 h-3.5" />
                <span>Section 4: Strategic Comparison</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Multi-Bank OTS vs Debt Consolidation Matrix
              </h2>
              <p>
                Distressed borrowers with multiple defaulted accounts frequently evaluate various debt relief options. The comparison matrix below illustrates why structured bilateral One-Time Settlements offer the most legally sound and financially viable outcome compared to traditional debt consolidation or restructuring.
              </p>

              {/* 4-Sided Bordered Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto my-6 shadow-sm">
                <table className="min-w-full divide-y divide-slate-200/80 text-sm">
                  <thead className="bg-slate-50">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="py-3.5 px-4 font-bold text-slate-900 text-left">Resolution Pathway</th>
                      <th className="py-3.5 px-4 font-bold text-slate-900 text-left">Financial Impact</th>
                      <th className="py-3.5 px-4 font-bold text-slate-900 text-left">Legal Risk Level</th>
                      <th className="py-3.5 px-4 font-bold text-slate-900 text-left">CIBIL Recovery</th>
                      <th className="py-3.5 px-4 font-bold text-slate-900 text-left">Feasibility in NPA</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 bg-white">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-4 font-bold text-[#1886ff]">Structured Multi-OTS</td>
                      <td className="py-3 px-4 text-slate-700">40% to 65% Principal Haircut</td>
                      <td className="py-3 px-4 text-green-700 font-semibold">Zero (Formal Discharge)</td>
                      <td className="py-3 px-4 text-slate-700">18 to 24 Months Rebuild</td>
                      <td className="py-3 px-4 font-semibold text-green-700">High (RBI Framework)</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-800">Consolidation Loan</td>
                      <td className="py-3 px-4 text-slate-700">100% Repayment + Fresh Interest</td>
                      <td className="py-3 px-4 text-yellow-700 font-semibold">Moderate</td>
                      <td className="py-3 px-4 text-slate-700">Immediate if Approved</td>
                      <td className="py-3 px-4 font-semibold text-red-600">Zero (Bureau Rejection)</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-800">Debt Restructuring</td>
                      <td className="py-3 px-4 text-slate-700">Extended Tenure, Higher Interest</td>
                      <td className="py-3 px-4 text-yellow-700 font-semibold">Moderate</td>
                      <td className="py-3 px-4 text-slate-700">Marked as Restructured</td>
                      <td className="py-3 px-4 font-semibold text-yellow-600">Low (Strict Criteria)</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-800">Court Litigation</td>
                      <td className="py-3 px-4 text-slate-700">Legal Expenses + Accrued Interest</td>
                      <td className="py-3 px-4 text-red-700 font-semibold">Severe (Decrees/Warrants)</td>
                      <td className="py-3 px-4 text-slate-700">Indefinite Default Status</td>
                      <td className="py-3 px-4 font-semibold text-red-600">Unfavorable</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-800">Inaction / Default</td>
                      <td className="py-3 px-4 text-slate-700">Perpetual Compounding Penalties</td>
                      <td className="py-3 px-4 text-red-700 font-semibold">Critical (Section 138/25)</td>
                      <td className="py-3 px-4 text-slate-700">Permanently Ruined (&lt;500)</td>
                      <td className="py-3 px-4 font-semibold text-red-600">Destructive</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Unlike consolidation loans that are automatically declined once multiple accounts enter default, structured OTS achieves permanent legal debt extinction through approved bank sanction letters.
              </p>
            </section>

            {/* Section 5: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-scoring-algorithm-multi-default" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1886ff] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Section 5: Credit Scoring</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                CIBIL Scoring Dynamics Across 7 Defaulted Accounts
              </h2>
              <p>
                The TransUnion CIBIL scoring model computes creditworthiness across five weighted variables: Repayment History (35%), Credit Utilization (30%), Credit History Length (15%), Credit Inquiries (10%), and Credit Exposure Mix (10%). When a consumer defaults across seven accounts concurrently, the algorithm penalizes the credit profile severely, driving scores from prime territory (780+) down to sub-550 ranges within 120 days as multiple 30-day default flags compound every billing cycle.
              </p>
              <p>
                Executing formal compromise settlements halts this monthly degradation by updating all seven account balances to zero. Under Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA), lenders must reflect the &apos;Settled&apos; status accurately across all four credit bureaus within thirty days. Borrowers can then rehabilitate their CIBIL score back to 750+ within 18 to 24 months by utilizing secured fixed-deposit credit cards and maintaining disciplined utilization.
              </p>
            </section>

            {/* Section 6: Visual Infographic Asset Card */}
            <section id="infographic-resolution-blueprint" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1886ff] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Section 6: Visual Roadmap</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Visual Multi-Bank Resolution Blueprint
              </h2>
              <p>
                The visual infographic below details the 180-day multi-lender debt resolution roadmap, illustrating the portfolio liability breakdown, the 58% principal haircut achieved across seven financial institutions, and the chronological progression from initial crisis intake to final zero-balance No Dues Certificates.
              </p>

              {/* Dedicated 16:9 Vector-Style Infographic Container */}
              <div className="my-6 rounded-2xl border border-slate-200/80 overflow-hidden bg-slate-900 shadow-lg">
                <div className="relative w-full aspect-[16/9] bg-slate-950">
                  <Image
                    src="/images/infographics/case-study-25-lakh-multiple-bank-settlement-settleloans.jpg"
                    alt="Multi-Bank Debt Settlement Case Study: ₹25 Lakh Settled for ₹10.5 Lakh Infographic"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                  />
                </div>
                <div className="p-4 bg-slate-900 border-t border-slate-800 text-xs text-slate-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                  <span>Figure 1.1: Comprehensive Multi-Lender Debt Prioritization & Settlement Framework.</span>
                  <a
                    href="/images/infographics/case-study-25-lakh-multiple-bank-settlement-settleloans.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:text-blue-400 font-semibold inline-flex items-center gap-1"
                  >
                    <span>View High-Res Blueprint</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* Section 7: Step-by-Step SOP (6 Stages) */}
            <section id="six-stage-prioritization-sop" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1886ff] text-xs font-bold uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5" />
                <span>Section 7: Standard Operating Procedure</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                6-Stage Prioritization & Settlement SOP
              </h2>
              <p>
                SettleLoans applies a rigorous six-stage standard operating procedure to resolve complex multi-bank debt portfolios systematically and eliminate creditor harassment.
              </p>

              {/* Stage 1 */}
              <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">
                    1
                  </div>
                  <span>Stage 1: Multi-Lender Forensic Audit & Ledger Verification</span>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Our financial legal team audits statement ledgers across all personal loans and credit cards, separating disbursed principal from unearned compound interest, late payment levies, and GST charges to establish the precise baseline for credit committee negotiations.
                </p>
              </div>

              {/* Stage 2 */}
              <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">
                    2
                  </div>
                  <span>Stage 2: Involuntary Hardship Dossier Compilation</span>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">
                  We construct an exhaustive, verifiable hardship dossier documenting medical summaries, employment termination notices, salary cuts, and 12-month bank statements, formally establishing genuine inability to pay and differentiating the borrower from willful defaulters under RBI guidelines.
                </p>
              </div>

              {/* Stage 3 */}
              <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">
                    3
                  </div>
                  <span>Stage 3: Aggressiveness & Legal Prioritization Sequencing</span>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">
                  We rank creditors into strategic negotiation tiers, assigning top priority to aggressive private lenders issuing statutory notices under Section 25 PSSA or Section 138 NI Act, while scheduling patient public sector lenders for secondary settlement rounds.
                </p>
              </div>

              {/* Stage 4 */}
              <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">
                    4
                  </div>
                  <span>Stage 4: Bilateral Credit Committee Negotiations</span>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">
                  SettleLoans negotiates directly with the Stressed Assets Resolution Branches and Credit Committees of each institution, bypassing third-party collection agencies to secure substantial principal waivers ranging between 50% and 66% with complete penalty write-offs.
                </p>
              </div>

              {/* Stage 5 */}
              <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">
                    5
                  </div>
                  <span>Stage 5: Multi-Bank Sanction Letter Legal Audit</span>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Before any settlement consideration is remitted, our legal desk conducts a strict verification of every bank sanction letter, ensuring official letterhead issuance, authorized officer signatures, complete debt discharge clauses, and explicit commitments for No Dues Certificates.
                </p>
              </div>

              {/* Stage 6 */}
              <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">
                    6
                  </div>
                  <span>Stage 6: Controlled Remittance & NDC Verification</span>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Settlement funds are deposited exclusively into official bank loan accounts. Following remittance, SettleLoans tracks statutory 30-day compliance under RBI Circular RBI/2023-24/60, securing formal No Dues Certificates and verifying credit bureau balance updates.
                </p>
              </div>
            </section>

            {/* Section 8: Statutory Notice Defense & Borrower Shields */}
            <section id="statutory-notice-defense-rights" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1886ff] text-xs font-bold uppercase tracking-wider">
                <Gavel className="w-3.5 h-3.5" />
                <span>Section 8: Legal Defense</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Statutory Notice Defense & Borrower Protections
              </h2>
              <p>
                When multiple loan defaults occur, borrowers often receive intimidating legal notices citing electronic mandate bounces and cheque dishonor. Genuine inability to service unsecured credit is strictly a civil breach of contract under the Indian Contract Act, 1872, rather than a criminal offense.
              </p>

              {/* Monospace Statutory Notice Box */}
              <div className="my-6 rounded-2xl bg-slate-900 border border-slate-800 p-5 font-mono text-xs text-slate-200 shadow-md">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400">
                  <span className="flex items-center gap-1.5 text-blue-400 font-bold">
                    <FileText className="w-4 h-4" />
                    <span>LEGAL NOTICE RESPONSE PROTOCOL // SECTION 25 PSSA & 138 NI ACT</span>
                  </span>
                  <span>STATUTORY SHIELD</span>
                </div>
                <pre className="whitespace-pre-wrap leading-relaxed">
{`To: The Authorized Officer / Legal Counsel
Subject: Formal Reply to Notice under Sec 25 PSSA / Sec 138 NI Act
Account: Defaulted Credit Facility // Multi-Bank Stressed Portfolio

1. REBUTTAL OF MENS REA: Dishonor of automated NACH mandates occurred
   solely due to acute financial hardship and verified medical distress,
   negating any fraudulent intent or criminal mens rea.
2. CIVIL DISPUTE JURISDICTION: The underlying transaction is strictly an
   unsecured commercial credit facility governed by Indian Contract Act, 1872.
3. UNILATERAL ARBITRATION BARRED: Unilateral appointment of sole arbitrators
   is legally void ab initio pursuant to Supreme Court rulings in TRF Ltd. v.
   Energo Engg (2017) and Perkins Eastman Architects v. HSCC (2020).
4. COMPROMISE OTS INITIATION: Notice recipient hereby submits a formal
   hardship dossier requesting One-Time Settlement under RBI IRACP Framework.`}
                </pre>
              </div>

              <p>
                Under landmark Supreme Court precedents including Perkins Eastman Architects v. HSCC (2020) and TRF Ltd. v. Energo Engineering (2017), lenders are legally barred from unilaterally appointing sole arbitrators to adjudicate loan defaults. In parallel, the RBI Master Directions on Recovery Agents (2022) provide enforceable statutory protections prohibiting recovery agent visits to borrower workplaces, restricting communication strictly between 08:00 AM and 07:00 PM, and prohibiting abusive behavior, threats, or harassment of family members, friends, and employers.
              </p>
            </section>

            {/* Section 9: 3-Tier Grievance & Ombudsman Matrix */}
            <section id="three-tier-escalation-matrix" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1886ff] text-xs font-bold uppercase tracking-wider">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Section 9: Grievance Escalation</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                3-Tier Grievance & Ombudsman Escalation Matrix
              </h2>
              <p>
                When lenders or recovery agencies violate fair practices codes, borrowers must execute a structured three-tier administrative grievance escalation.
              </p>

              <div className="space-y-3 my-6">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                  <h3 className="font-bold text-slate-900 text-sm mb-1">
                    Tier 1: Bank Grievance Redressal Officer (GRO) // Resolution Window: 7 to 10 Days
                  </h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                    A formal written complaint is lodged with the bank&apos;s GRO detailing unlawful recovery conduct, requiring statutory acknowledgment within 48 hours and written resolution within 10 days.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                  <h3 className="font-bold text-slate-900 text-sm mb-1">
                    Tier 2: Principal Nodal Officer (PNO) // Resolution Window: 14 to 21 Days
                  </h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                    If the GRO fails to resolve the grievance or harassment persists, the complaint is escalated to the PNO for executive intervention and collection agency de-escalation.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                  <h3 className="font-bold text-slate-900 text-sm mb-1">
                    Tier 3: RBI Integrated Ombudsman // Portal: cms.rbi.org.in
                  </h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                    Unresolved grievances are escalated to the RBI Ombudsman, which holds authority to penalize non-compliant lenders, award harassment compensation, and mandate compromise resolution.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 10: Chronological 180-Day Resolution Timeline */}
            <section id="chronological-milestone-timeline" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1886ff] text-xs font-bold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" />
                <span>Section 10: Milestones</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Chronological 180-Day Resolution Timeline
              </h2>
              <p>
                The table below outlines the 180-day procedural milestone progression executed to resolve all seven defaulted facilities systematically.
              </p>

              {/* 4-Sided Bordered Timeline Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto my-6 shadow-sm">
                <table className="min-w-full divide-y divide-slate-200/80 text-sm">
                  <thead className="bg-slate-50">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="py-3.5 px-4 font-bold text-slate-900 text-left">Phase & Period</th>
                      <th className="py-3.5 px-4 font-bold text-slate-900 text-left">Portfolio Status</th>
                      <th className="py-3.5 px-4 font-bold text-slate-900 text-left">Strategic Actions Executed</th>
                      <th className="py-3.5 px-4 font-bold text-slate-900 text-left">Key Deliverables</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 bg-white">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Month 1 (Days 1-30)</td>
                      <td className="py-3 px-4 text-slate-700">SMA-0/1 Active Defaults</td>
                      <td className="py-3 px-4 text-slate-700">Crisis intake, legal representation notices served to all 7 banks.</td>
                      <td className="py-3 px-4 font-semibold text-green-700">Harassment halted completely</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Month 2 (Days 31-60)</td>
                      <td className="py-3 px-4 text-slate-700">SMA-2 to Substandard NPA</td>
                      <td className="py-3 px-4 text-slate-700">Hardship dossiers submitted; forensic debt audits completed.</td>
                      <td className="py-3 px-4 font-semibold text-[#1886ff]">Prioritized settlement matrix</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Month 3 (Days 61-90)</td>
                      <td className="py-3 px-4 text-slate-700">NPA Provisioning Window</td>
                      <td className="py-3 px-4 text-slate-700">Phase 1 OTS negotiated for aggressive cards & primary loan.</td>
                      <td className="py-3 px-4 font-semibold text-green-700">4 Sanction Letters Sanctioned</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Month 4 (Days 91-120)</td>
                      <td className="py-3 px-4 text-slate-700">Tranche 1 Remittance</td>
                      <td className="py-3 px-4 text-slate-700">Phase 1 funds paid; Phase 2 talks opened with remaining 3 banks.</td>
                      <td className="py-3 px-4 font-semibold text-[#1886ff]">First 4 NDCs received</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Month 5 (Days 121-150)</td>
                      <td className="py-3 px-4 text-slate-700">Phase 2 OTS Approval</td>
                      <td className="py-3 px-4 text-slate-700">Credit committees approve final 3 OTS sanction letters.</td>
                      <td className="py-3 px-4 font-semibold text-green-700">Final 3 Sanction Letters audited</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">Month 6 (Days 151-180)</td>
                      <td className="py-3 px-4 text-slate-700">Full Portfolio Closure</td>
                      <td className="py-3 px-4 text-slate-700">Final payments remitted; bureau updates tracked for zero balance.</td>
                      <td className="py-3 px-4 font-semibold text-green-700">100% Debt Free // 7 NDCs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 11: Specialized Real-World Scenarios */}
            <section id="specialized-multi-debt-scenarios" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1886ff] text-xs font-bold uppercase tracking-wider">
                <Users className="w-3.5 h-3.5" />
                <span>Section 11: Real-World Scenarios</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Specialized Multi-Lender Case Scenarios
              </h2>
              <p>
                Multi-bank resolution strategies must adapt to the unique collection behaviors and provisioning policies of different lender categories.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                {/* Scenario 1 */}
                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    <span>Private Bank vs PSU Lender Sequencing</span>
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Aggressive private banks utilize automated notice engines and require prompt settlement, while public sector lenders follow structured compromise policies, allowing borrowers to defer PSU negotiations safely.
                  </p>
                </div>

                {/* Scenario 2 */}
                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    <span>High-APR Credit Card Cascade Post-Layoff</span>
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Credit card balances compound rapidly at 42% APR following job loss. SettleLoans freezes penalty growth through formal hardship representation and settles cards at 35% to 45% of claimed dues.
                  </p>
                </div>

                {/* Scenario 3 */}
                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <Flame className="w-4 h-4 text-[#1886ff]" />
                    <span>NBFC Digital Loan App Shielding</span>
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Digital lenders using aggressive phone tactics are countered through RBI Digital Lending Guidelines and IT Act notices, compelling them to negotiate exclusively through official dispute channels.
                  </p>
                </div>

                {/* Scenario 4 */}
                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-[#1886ff]" />
                    <span>ARC Debt Assignment Resolution</span>
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    When lenders assign written-off retail loans to Asset Reconstruction Companies at steep portfolio discounts, SettleLoans leverages this low acquisition cost to secure substantial debt waivers.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 12: Company Profile */}
            <div id="company-resolution-section">
              <CompanySection />
            </div>

            {/* Section 13: 10 Synchronized FAQs */}
            <section id="faqs" className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1886ff] text-xs font-bold uppercase tracking-wider">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Section 13: Knowledge Base</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Frequently Asked Questions on Multi-Bank Debt Settlement
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Below are authoritative legal and financial answers to the most pressing questions concerning multi-bank loan defaults, recovery agent harassment, and One-Time Settlement execution in India.
              </p>

              <div className="space-y-2">
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

            {/* Section 14: Citations & Outbound Authority Grid */}
            <section id="statutory-citations-authority-grid" className="space-y-4 pt-6 border-t border-slate-200">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1886ff] text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>Section 14: Regulatory Citations</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Statutory Citations & Outbound Authority Grid
              </h2>
              <p className="text-slate-700 text-sm leading-relaxed">
                The legal defenses, borrower protections, and compromise settlement protocols documented throughout this case study are strictly anchored in statutory Indian financial legislation, Reserve Bank of India master directions, and binding Supreme Court precedents.
              </p>

              {/* 6 Outbound Authority Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-blue-50/50 hover:border-blue-200 transition-all flex items-center justify-between text-xs font-bold text-slate-800"
                >
                  <span>Reserve Bank of India</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#1886ff]" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-blue-50/50 hover:border-blue-200 transition-all flex items-center justify-between text-xs font-bold text-slate-800"
                >
                  <span>RBI Ombudsman CMS</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#1886ff]" />
                </a>
                <a
                  href="https://www.cibil.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-blue-50/50 hover:border-blue-200 transition-all flex items-center justify-between text-xs font-bold text-slate-800"
                >
                  <span>TransUnion CIBIL</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#1886ff]" />
                </a>
                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-blue-50/50 hover:border-blue-200 transition-all flex items-center justify-between text-xs font-bold text-slate-800"
                >
                  <span>India Code Database</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#1886ff]" />
                </a>
                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-blue-50/50 hover:border-blue-200 transition-all flex items-center justify-between text-xs font-bold text-slate-800"
                >
                  <span>NALSA Legal Services</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#1886ff]" />
                </a>
                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-blue-50/50 hover:border-blue-200 transition-all flex items-center justify-between text-xs font-bold text-slate-800"
                >
                  <span>Cyber Crime Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#1886ff]" />
                </a>
              </div>

              {/* 10 Internal SettleLoans Topic Badges */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  Related Multi-Debt & Legal Resources:
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link href="/20-lakh-personal-loan-settlement" className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-[#1886ff] hover:text-white transition-colors">
                    ₹20 Lakh Personal Loan Settlement
                  </Link>
                  <Link href="/10-lakh-personal-loan-settlement" className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-[#1886ff] hover:text-white transition-colors">
                    ₹10 Lakh Personal Loan Settlement
                  </Link>
                  <Link href="/case-study-hdfc-personal-loan-settlement" className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-[#1886ff] hover:text-white transition-colors">
                    HDFC Loan Settlement Case Study
                  </Link>
                  <Link href="/case-study-icici-credit-card-settlement" className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-[#1886ff] hover:text-white transition-colors">
                    ICICI Credit Card Settlement Case Study
                  </Link>
                  <Link href="/case-study-bajaj-finance-harassment-stopped" className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-[#1886ff] hover:text-white transition-colors">
                    Stop Recovery Harassment Case Study
                  </Link>
                  <Link href="/loan-settlement-vs-debt-consolidation" className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-[#1886ff] hover:text-white transition-colors">
                    Settlement vs Debt Consolidation
                  </Link>
                  <Link href="/section-138-cheque-bounce-loan-default" className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-[#1886ff] hover:text-white transition-colors">
                    Section 138 Cheque Bounce Defense
                  </Link>
                  <Link href="/recovery-agent-visiting-workplace-office" className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-[#1886ff] hover:text-white transition-colors">
                    Recovery Agent Workplace Visit Rules
                  </Link>
                  <Link href="/bank-one-time-settlement-ots-policy" className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-[#1886ff] hover:text-white transition-colors">
                    Bank OTS Settlement Policy
                  </Link>
                  <Link href="/cibil-dispute-wrong-overdue-entry" className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-[#1886ff] hover:text-white transition-colors">
                    CIBIL Dispute & Record Correction
                  </Link>
                </div>
              </div>
            </section>
          </main>

          {/* Right Column: Sticky Sidebar */}
          <aside className="space-y-6 sticky top-24">
            <div className="space-y-6">
              
              {/* Author Bio Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
                <div className="w-20 h-20 rounded-full bg-blue-100 text-[#1886ff] font-bold text-2xl mx-auto flex items-center justify-center mb-3 shadow-inner">
                  AJ
                </div>
                <div className="font-bold text-slate-900 text-lg">Ashish Jhangra</div>
                <p className="text-xs text-[#1886ff] font-semibold mb-3">
                  Legal & Debt Resolution Professional
                </p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Senior financial dispute strategist specializing in multi-creditor portfolio defense, banking NPA negotiations, and statutory borrower rights under RBI frameworks.
                </p>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5 text-xs text-slate-500">
                  <UserCheck className="w-3.5 h-3.5 text-green-600" />
                  <span>Verified Legal Reviewer</span>
                </div>
              </div>

              {/* Emergency CTA Card with #2452ae Background */}
              <div
                className="p-6 rounded-2xl text-white shadow-lg relative overflow-hidden"
                style={{ backgroundColor: '#2452ae' }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-xs font-semibold mb-3 border border-white/20">
                  <PhoneCall className="w-3.5 h-3.5 text-blue-200" />
                  <span>Confidential Debt Helpline</span>
                </div>
                <div className="text-xl font-bold text-white mb-2 leading-snug">
                  Trapped Under Multiple Loans?
                </div>
                <p className="text-xs text-blue-100 leading-relaxed mb-5">
                  Stop recovery harassment immediately. Let SettleLoans evaluate your multi-bank portfolio and negotiate structured debt waivers.
                </p>
                <a
                  href="tel:+918800226635"
                  className="w-full py-3 px-4 rounded-xl bg-white text-[#2452ae] font-bold text-sm text-center block shadow-md hover:bg-blue-50 transition-colors"
                >
                  Call +91-8800226635
                </a>
              </div>

              {/* SettleLoans Trust Badges Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-3">
                <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px] pb-2 border-b border-slate-200">
                  SettleLoans Institutional Standards
                </div>
                <div className="flex items-center gap-2.5 text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>5,000+ Multi-Lender Cases Resolved</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700">
                  <Coins className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>₹120+ Crores Total Debt Settled</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700">
                  <Lock className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span>100% RBI & Legal Framework Compliance</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700">
                  <FileCheck className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  <span>Direct Bank OTS Sanctions & ₹0 NDCs</span>
                </div>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
