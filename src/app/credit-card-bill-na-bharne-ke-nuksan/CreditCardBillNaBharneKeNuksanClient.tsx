'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import StatsStrip from '@/components/StatsStrip';
import CompanySection from '@/components/CompanySection';
import SidebarTOC from '@/components/SidebarTOC';
import {
  ShieldCheck,
  TrendingUp,
  Clock,
  ArrowRight,
  ChevronDown,
  Calendar,
  PhoneCall,
  ExternalLink,
  Building2,
  Landmark,
  Check,
  BookOpen,
  ShieldAlert,
  Scale,
  HelpCircle,
  Calculator,
  Gavel,
  FileCheck,
  UserCheck,
  AlertCircle,
  Award,
  CheckCircle2,
  CreditCard,
  Percent,
  AlertTriangle,
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

export default function CreditCardBillNaBharneKeNuksanClient() {
  const [activeId, setActiveId] = useState<string>('credit-card-debt-panic-reality');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'credit-card-debt-panic-reality', title: '1. Credit Card Default Anatomy & Panic Reality' },
    { id: 'apr-42-compounding-mechanics', title: '2. 42% APR Compounding & Grace Period Loss' },
    { id: 'minimum-amount-due-trap', title: '3. The Minimum Amount Due (MAD) Trap Exposed' },
    { id: 'delinquency-timeline-npa-stages', title: '4. Delinquency Timeline: SMA-0 to 90-Day NPA' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Debt Resolution Blueprint' },
    { id: 'recovery-harassment-rbi-protections', title: '6. Recovery Agent Harassment & Statutory Rights' },
    { id: 'legal-actions-notices-court-reality', title: '7. Legal Notices, Section 25 PSSA & Court Reality' },
    { id: 'one-time-settlement-60-70-haircut', title: '8. 60%–70% OTS Compromise Settlement Math' },
    { id: 'sanction-letter-audit-zero-ndc', title: '9. Sanction Letter Audit & ₹0 NDC Mandate' },
    { id: 'cibil-score-trajectory-rehabilitation', title: '10. CIBIL Score Rehabilitation Roadmap' },
    { id: 'company-resolution-section', title: '11. SettleLoans Legal Defense & Advisory' },
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

  const faqs = [
    {
      question: "Credit card bill na bharne par kya hota hai aur bank kya action leta hai?",
      answer: (
        <p>
          Credit card bill na bharne par bank sabse pehle <strong>42% se 48% annual finance charges (3.5%–4% monthly)</strong> aur late payment fees lagata hai, jismein 18% GST judti hai. 30 din baad CIBIL score girna shuru hota hai, 60 din par card permanently block hota hai, aur 90 din default hone par account Non-Performing Asset (NPA) ban jata hai. Iske baad bank third-party recovery agencies assign karta hai aur legal demand notices bhejta hai. Lekin genuine default ek purely civil matter hai, jismein criminal arrest nahi ho sakti.
        </p>
      )
    },
    {
      question: "Kya credit card bill na bharne par police arrest ya jail ho sakti hai?",
      answer: (
        <p>
          <strong>Nahi, credit card default par bilkul bhi police arrest ya jail nahi ho sakti.</strong> Credit card debt ek purely unsecured civil liability hai jo Indian Contract Act, 1872 ke antargat aati hai. Police ke paas credit card default par FIR darj karne ya arrest karne ka koi legal adhikar nahi hai. Recovery agents dwara jail ya police ki dhamki dena RBI guidelines ke tehat gair-kanooni hai.
        </p>
      )
    },
    {
      question: "Minimum Amount Due (MAD) bharne se debt trap kaise banta hai?",
      answer: (
        <p>
          Minimum Amount Due aamtaur par total balance ka kewal <strong>5%</strong> hota hai. Is 5% mein se lagbhag 3.5% finance charges, GST aur fees mein chala jata hai, aur kewal 1% se 1.5% actual principal ko kam karta hai. Baki bache 95% balance par daily compounding 42% APR lagta rehta hai aur interest-free grace period khatam ho jata hai. Is wajah se ₹1 Lakh ka balance kewal minimum dues bharne par chukane mein <strong>15 se 22 saal</strong> lag jate hain.
        </p>
      )
    },
    {
      question: "Credit card settlement mein kitna discount ya haircut mil sakta hai?",
      answer: (
        <p>
          Credit card default jab 90 se 180 din cross karke NPA (Non-Performing Asset) ya Doubtful Asset category mein pahunchta hai, tab bank RBI compromise settlement guidelines ke tehat <strong>60% se 70% tak ka haircut (waiver)</strong> sanction karte hain. Is settlement mein 100% penal charges, late fees aur finance interest poori tarah waive ho jate hain aur kewal discounted principal amount par account close hota hai.
        </p>
      )
    },
    {
      question: "Recovery agent harassment se bachne ke liye RBI ke kya niyam hain?",
      answer: (
        <p>
          RBI Master Directions ke tehat recovery agents kewal <strong>subah 8:00 baje se shaam 7:00 baje</strong> ke beech hi call ya visit kar sakte hain. Unhe dhar-pakad, gali-galoch, relatives ya office colleagues ko call karna, bina ID card visit karna, ya social media par defame karna strictly banned hai. Harassment hone par borrower bank ke Principal Nodal Officer aur RBI Integrated Ombudsman Portal (cms.rbi.org.in) par formal complaint darj kar sakte hain.
        </p>
      )
    },
    {
      question: "Credit card legal notice aane par borrower ko kya step lena chahiye?",
      answer: (
        <p>
          Legal notice ko ignore na karein. Ek banking advocate ke madhyam se 15 se 30 din ke andar formal reply draft karwayein. Reply mein financial hardship (jaise job loss ya medical emergency) ko document karein, bank ke compounding interest aur illegal charges ko challenge karein, aur bank ko Lok Adalat ya formal One-Time Settlement (OTS) negotiation ke liye invite karein.
        </p>
      )
    },
    {
      question: "Kya bank mere savings account ya salary account se paise kaat sakta hai?",
      answer: (
        <p>
          Bank kewal usi bank mein sthit savings ya deposit account par <strong>&apos;Right of Set-off&apos; (Section 171, Indian Contract Act)</strong> use kar sakta hai jahan credit card chal raha hai. Dusre independent banks mein sthit aapke salary ya savings accounts ko bank bina civil court order ke na to touch kar sakta hai aur na hi freeze kar sakta hai.
        </p>
      )
    },
    {
      question: "Credit card settlement ke baad CIBIL score kitna girta hai aur kaise recover karein?",
      answer: (
        <p>
          Settlement ke baad credit report par status <strong>&apos;Settled&apos;</strong> update hota hai aur score mein 75 se 120 points ka temporary dip aata hai. Lekin compounding overdue aur legal flags hamesha ke liye band ho jate hain. Fixed Deposit (FD) ke against secured credit card lekar aur timely payment karke 18 se 24 mahine mein CIBIL score ko dobara <strong>750+</strong> tak rehabilitate kiya ja sakta hai.
        </p>
      )
    },
    {
      question: "Credit card settlement ke baad No Dues Certificate (NDC) kab milta hai?",
      answer: (
        <p>
          RBI Circular RBI/2023-24/60 ke anusar, full settlement payment jama hone ke <strong>30 calendar days</strong> ke andar bank ko formal No Dues Certificate (NDC) issue karna aur credit bureaus ko update karna anivarya hai. Yadi bank 30 din mein NDC deliver nahi karta, toh borrower ko per day <strong>₹5,000</strong> ka statutory compensation claim karne ka adhikar hai.
        </p>
      )
    }
  ];

  return (
    <div
      className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-[#1F5EFF] selection:text-white"
      style={{ fontFamily: 'var(--font-satoshi), Satoshi, -apple-system, BlinkMacSystemFont, sans-serif' }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
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
      `,
        }}
      />

      {/* 1. Charcoal Navy Hero Section */}
      <section
        className="w-full border-b border-slate-700/80 pt-8 pb-7 md:pt-12 md:pb-9 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-blue-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-4 tracking-wider uppercase">
            <CreditCard className="w-3.5 h-3.5" />
            <span>Credit Card Debt Defense • Unsecured Banking Law</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Credit Card Bill Na Bharne Ke Nuksan: <span className="text-[#3b82f6] md:text-[#60a5fa]">42% APR Trap, Legal Reality &amp; 60–70% Settlement Guide</span>
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
              <span>RBI Master Direction Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Negotiate Card Debt Settlement</span>
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
          
          {/* Left Column (Sticky Table of Contents + Executive Crux) */}
          <aside className="w-full sticky top-24 space-y-4">
            <SidebarTOC items={tocItems} />

            {/* Quick Executive Case Crux Box */}
            <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>Executive Case Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Credit card default is strictly a civil dispute. While unpaid balances compound aggressively at 42%–48% APR, RBI compromise frameworks enable borrowers in severe financial distress to eliminate 100% of penal fees and settle core dues at a 60%–70% haircut.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">

            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 border border-blue-200 rounded-2xl p-6 mb-8 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-base mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Credit Card Bill Default &amp; Debt Settlement</span>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>The 42% APR Compounding Reality:</strong> Defaulting on credit cards triggers monthly finance charges of 3.5% to 3.75% (42%–48% annualized) plus 18% GST, causing the outstanding balance to double within 20 to 24 months if unaddressed.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>The Minimum Amount Due Trap:</strong> Paying only 5% Minimum Amount Due (MAD) primarily services accumulated interest and taxes while amortizing almost zero principal, transforming manageable credit into an endless debt spiral.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Criminal Liability:</strong> Unsecured credit card default is governed purely under civil contract law (Indian Contract Act, 1872). Police authorities cannot register an FIR, summon you, or make an arrest for genuine inability to pay.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Anti-Harassment Rights:</strong> RBI Master Directions prohibit recovery agents from calling outside 8:00 AM to 7:00 PM, contacting employers or relatives, and engaging in verbal intimidation or public shaming.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Realistic 60%–70% OTS Waivers:</strong> Once defaulted credit card accounts cross 90 to 180 days (NPA status), banks utilize RBI compromise settlement policies to waive 100% of penal surcharges and discount principal by 60% to 70%.</span>
                </li>
              </ul>
            </div>
            
            {/* Section 1: Credit Card Default Anatomy & Panic Reality */}
            <section id="credit-card-debt-panic-reality" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. The Anatomy of Unsecured Credit Card Default</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Credit Card Bill Na Bharne Par Kya Hota Hai: Understanding the Panic &amp; Financial Mechanics
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Facing an unmanageable credit card balance in India often triggers acute psychological distress, commonly characterized as debt trap panic. When income disruptions occur due to job loss, business insolvency, or catastrophic family medical emergencies, borrowers suddenly find themselves incapable of paying their monthly statement dues. The fundamental question millions ask during this crisis is: <em>credit card bill na bharne par kya hota hai</em>? Understanding the operational, accounting, and legal reality of credit card default is essential to dismantling fear and executing an effective financial recovery strategy.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                In the Indian banking ecosystem, credit cards represent revolving unsecured retail credit facilities regulated under the Reserve Bank of India (RBI) Master Direction on Credit Card and Debit Card Issuance and Conduct Directions, 2022 (RBI/2022-23/92). Unlike home loans or auto loans, credit card debts possess no underlying tangible collateral or mortgage lien. Because lending institutions hold zero asset security, their underwriting models offset structural default risks by levying exorbitant finance charges, compounding interest rates, and multi-tiered punitive penalties whenever an installment deadline lapses.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When a cardholder stops paying their monthly bill, a structured institutional escalation sequence is triggered across four parallel dimensions: exponential interest compounding, systemic credit bureau downgrades, aggressive collection agency deployment, and the dispatch of statutory legal demand notices. However, the pervasive fear that non-payment leads to immediate criminal prosecution or imprisonment is entirely unfounded. Credit card defaults are strictly civil contractual disputes governed by the Indian Contract Act, 1872, providing distressed cardholders with substantial legal safeguards and statutory rights to negotiate compromise settlements.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm uppercase tracking-wide mb-1">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Statutory Civil Reality: Supreme Court Jurisprudence</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                  Under established judicial precedents from the Hon&apos;ble Supreme Court of India, genuine inability to repay an unsecured financial debt does not constitute criminal breach of trust (Section 405/406 IPC) or cheating (Section 415/420 IPC). In the absence of established fraudulent intent at the inception of credit facility issuance, non-payment of credit card bills remains exclusively an actionable civil claim for recovery.
                </p>
              </div>
            </section>

            {/* Section 2: 42% APR Compounding & Grace Period Loss */}
            <section id="apr-42-compounding-mechanics" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Percent className="w-4 h-4" />
                <span>2. Mathematical Breakdown of Compound Interest</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                The 42% APR Compounding Engine &amp; Instant Loss of Interest-Free Grace Periods
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                To understand why credit card debt accelerates out of control so rapidly, one must examine the mathematical formulas banks use to calculate finance charges. Indian commercial banks—including HDFC Bank, SBI Cards, ICICI Bank, Axis Bank, and Kotak Mahindra Bank—apply monthly interest rates ranging from 3.50% to 3.75%. When converted into the Annualized Percentage Rate (APR), this translates to an effective rate of <strong>42.0% to 49.36% per annum</strong>. Furthermore, under Indian tax regulations, every single rupee charged as interest or penalty attracts an additional 18% Goods and Services Tax (GST).
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The compounding engine is governed by the Daily Periodic Rate (DPR) calculation. The bank calculates finance charges on a daily average balance using the statutory formula:
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Credit Card Daily Finance Charge Formula</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  Finance_Charges = (Outstanding_Balance × Annual_APR × Days_Elapsed) / 365 + 18%_GST
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where Annual APR averages 42% (DPR = 0.11506% per day). If any portion of the statement balance remains unpaid past the payment due date, the interest-free grace period (typically 20 to 50 days) is entirely revoked retroactively to the original transaction date for all past and new purchases.
                </p>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The instant you fail to clear the total statement balance in full, the bank revokes the interest-free credit window across your entire account. From that exact moment forward, interest begins compounding daily from the exact date each purchase was swiped. If you make cash withdrawals from an ATM using your credit card, interest compounds from Day 1 alongside cash advance transaction fees of 2.5% to 3.0%. Added to this are tiered Late Payment Charges (ranging from ₹500 to ₹1,300 per billing cycle) and Overlimit Charges if accumulated interest pushes the ledger beyond your sanctioned credit limit.
              </p>
            </section>

            {/* Section 3: The Minimum Amount Due Trap Exposed */}
            <section id="minimum-amount-due-trap" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <AlertCircle className="w-4 h-4" />
                <span>3. Consumer Credit Vulnerability</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                The Minimum Amount Due (MAD) Trap: How Banks Keep You Trapped for Decades
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Many distressed cardholders mistakenly believe that paying the Minimum Amount Due (MAD) protects them from debt accumulation. This is one of the most destructive financial misconceptions in consumer banking. The Minimum Amount Due is systematically engineered to protect the bank&apos;s cash flow while ensuring the borrower remains indefinitely indebted. MAD is generally calculated as 5% of the outstanding statement balance (or 100% of accrued finance charges, GST, and late fees plus 1% to 2% of the principal balance).
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When a borrower pays only the MAD, approximately 75% to 90% of that payment is immediately absorbed by accrued finance interest, GST, and administrative charges. Less than 10% to 25% of the payment touches the actual principal debt. Meanwhile, the remaining 95% of the core balance continues to compound daily at 42% APR. Actuarial calculations reveal that an individual with an outstanding balance of ₹2,00,000 who pays only the mandatory minimum dues each month will take over <strong>18 to 23 years</strong> to clear the liability, ultimately paying more than <strong>₹7,50,000 in cumulative interest and taxes</strong> for a ₹2 Lakh principal.
              </p>

              {/* Table 1: Financial Impact Matrix */}
              <div className="my-8 overflow-x-auto">
                <table className="w-full text-left border border-slate-300 rounded-xl">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="p-3.5 font-bold text-slate-900 border-b border-slate-300">Repayment Strategy</th>
                      <th className="p-3.5 font-bold text-slate-900 border-b border-slate-300">Effective Monthly Cost</th>
                      <th className="p-3.5 font-bold text-slate-900 border-b border-slate-300">Total Outflow (₹2L Debt)</th>
                      <th className="p-3.5 font-bold text-slate-900 border-b border-slate-300">Time to Debt Freedom</th>
                      <th className="p-3.5 font-bold text-slate-900 border-b border-slate-300">CIBIL &amp; Legal Outcome</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900 border-b border-slate-200">Paying Minimum Due (5%)</td>
                      <td className="p-3.5 text-slate-700 border-b border-slate-200">₹10,000/mo (Diminishing)</td>
                      <td className="p-3.5 text-rose-700 font-bold border-b border-slate-200">₹7,40,000+ (Extreme Drain)</td>
                      <td className="p-3.5 text-slate-700 border-b border-slate-200">18 to 22 Years</td>
                      <td className="p-3.5 text-slate-700 border-b border-slate-200">Maintains 750+ score, but creates permanent financial drain</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900 border-b border-slate-200">Unmanaged Total Default</td>
                      <td className="p-3.5 text-slate-700 border-b border-slate-200">₹0/mo</td>
                      <td className="p-3.5 text-rose-700 font-bold border-b border-slate-200">Ledger inflates to ₹4.5L+</td>
                      <td className="p-3.5 text-slate-700 border-b border-slate-200">Indefinite (Compounding)</td>
                      <td className="p-3.5 text-slate-700 border-b border-slate-200">Score drops &lt;600, severe harassment, civil court summons</td>
                    </tr>
                    <tr className="bg-blue-50/70 font-medium">
                      <td className="p-3.5 font-bold text-blue-950">One-Time Settlement (OTS)</td>
                      <td className="p-3.5 text-blue-900">One-time / Structured</td>
                      <td className="p-3.5 text-emerald-700 font-black">₹60,000 – ₹80,000 (60–70% Cut)</td>
                      <td className="p-3.5 text-blue-900 font-bold">3 to 6 Months</td>
                      <td className="p-3.5 text-blue-900">Marked &apos;Settled&apos;, ₹0 balance, full legal closure &amp; ₹0 NDC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Delinquency Timeline: SMA-0 to 90-Day NPA */}
            <section id="delinquency-timeline-npa-stages" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>4. Institutional Delinquency Lifecycle</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                The Credit Card Default Timeline: From First Missed Due Date to 90-Day NPA Classification
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When you fail to make payments on a credit card, the account moves through rigidly defined regulatory stages established by the Reserve Bank of India&apos;s Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP). Understanding this institutional chronology enables borrowers to anticipate bank actions and identify the exact tactical window for negotiating deep debt haircuts:
              </p>

              <div className="space-y-4 my-6">
                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1F5EFF] flex items-center justify-center font-bold flex-shrink-0 text-sm">
                    01
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">Days 1 to 30: SMA-0 (Special Mention Account 0) &amp; Soft Collections</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      The cardholder misses the payment due date. The bank immediately applies late payment fees, revokes the grace period, and computes daily 42% APR interest plus GST. Automated IVR reminders, SMS warnings, and soft telephonic follow-ups begin. Credit bureaus (CIBIL, Experian, CRIF High Mark) record 30+ Days Past Due (DPD).
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold flex-shrink-0 text-sm">
                    02
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">Days 31 to 60: SMA-1 &amp; Digital Card Block</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      Two consecutive statements remain unpaid. The bank temporarily or permanently suspends credit card charging privileges across domestic and international payment gateways. The internal collections desk intensifies phone calls, and automated demand letters are dispatched via registered email and courier.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold flex-shrink-0 text-sm">
                    03
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">Days 61 to 90: SMA-2 &amp; Third-Party Agency Allocation</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      Three billing cycles elapse without payment. The lending institution transfers the portfolio file to external Direct Recovery Agencies (DRA). External recovery tele-callers commence high-frequency calling. The bank issues a formal loan recall notice terminating the credit card agreement under contractual terms.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/50 p-4 rounded-xl flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-rose-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                    04
                  </div>
                  <div>
                    <h4 className="font-bold text-rose-950 text-sm sm:text-base">Days 91+: Non-Performing Asset (NPA) &amp; Balance Sheet Provisioning</h4>
                    <p className="text-xs sm:text-sm text-rose-900 mt-1 leading-relaxed">
                      Under RBI Master Directions, the credit card account is officially declared a Non-Performing Asset (NPA). The bank is legally mandated to set aside capital reserves (15% to 100% provisioning under Ind AS 109). It is during this NPA window (Days 90 to 180+) that banks become institutionally motivated to approve deep compromise settlements.
                    </p>
                  </div>
                </div>
              </div>

              {/* Table 2: Delinquency Aging & Provisioning Matrix */}
              <div className="my-8 overflow-x-auto">
                <table className="w-full text-left border border-slate-300 rounded-xl">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="p-3.5 font-bold text-slate-900 border-b border-slate-300">Aging Bracket (DPD)</th>
                      <th className="p-3.5 font-bold text-slate-900 border-b border-slate-300">RBI Asset Classification</th>
                      <th className="p-3.5 font-bold text-slate-900 border-b border-slate-300">Bank Capital Provisioning</th>
                      <th className="p-3.5 font-bold text-slate-900 border-b border-slate-300">Achievable Settlement Haircut</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900 border-b border-slate-200">1 – 30 Days</td>
                      <td className="p-3.5 text-slate-700 border-b border-slate-200">Standard Asset (SMA-0)</td>
                      <td className="p-3.5 text-slate-700 border-b border-slate-200">0.40% (Standard Provision)</td>
                      <td className="p-3.5 text-slate-700 border-b border-slate-200">0% – 10% (Late fee waiver only)</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900 border-b border-slate-200">31 – 60 Days</td>
                      <td className="p-3.5 text-slate-700 border-b border-slate-200">Standard Asset (SMA-1)</td>
                      <td className="p-3.5 text-slate-700 border-b border-slate-200">0.40%</td>
                      <td className="p-3.5 text-slate-700 border-b border-slate-200">10% – 20% (Partial interest waiver)</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900 border-b border-slate-200">61 – 90 Days</td>
                      <td className="p-3.5 text-slate-700 border-b border-slate-200">Standard Asset (SMA-2)</td>
                      <td className="p-3.5 text-slate-700 border-b border-slate-200">0.40%</td>
                      <td className="p-3.5 text-slate-700 border-b border-slate-200">20% – 35% (Pre-NPA restructuring)</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900 border-b border-slate-200">91 – 180 Days</td>
                      <td className="p-3.5 text-slate-700 border-b border-slate-200">Sub-Standard NPA</td>
                      <td className="p-3.5 text-slate-700 border-b border-slate-200">25% (Unsecured Provision)</td>
                      <td className="p-3.5 text-blue-900 font-bold border-b border-slate-200">40% – 55% Principal Haircut</td>
                    </tr>
                    <tr className="bg-emerald-50/80 font-medium">
                      <td className="p-3.5 font-bold text-emerald-950">180+ Days (Written Off)</td>
                      <td className="p-3.5 text-emerald-900 font-bold">Doubtful / Loss Asset</td>
                      <td className="p-3.5 text-emerald-900 font-bold">100% Capital Written Off</td>
                      <td className="p-3.5 text-emerald-700 font-black">60% – 70% Maximum Haircut</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="infographic-resolution-blueprint" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <BookOpen className="w-4 h-4" />
                <span>5. Visual Debt Resolution Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Strategic Roadmap: Navigating Credit Card Non-Payment to 60–70% OTS Compromise
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                The detailed infographic below outlines the dual reality of credit card default in India: the compounding financial traps on the left and the advocate-led statutory settlement pathway on the right.
              </p>

              <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-950 my-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/infographics/credit-card-bill-na-bharne-ke-nuksan.jpg"
                  alt="Credit Card Bill Na Bharne Ke Nuksan, 42% APR Compounding Trap, and 60-70% One Time Settlement Blueprint"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-center text-slate-500 italic mt-2">
                Figure 1.1: Complete structural breakdown of credit card delinquency mechanics, statutory borrower protections under RBI Master Directions, and the 5-step One-Time Settlement compromise process.
              </p>
            </section>

            {/* Section 6: Recovery Agent Harassment & Statutory Rights */}
            <section id="recovery-harassment-rbi-protections" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>6. Anti-Harassment Protections &amp; RBI Compliance</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Recovery Agent Harassment Defense: Your Legal Rights Under RBI Master Directions
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When credit card accounts enter 60+ days of delinquency, banks frequently outsource collections to third-party Direct Recovery Agencies (DRA). Driven by lucrative recovery commissions (ranging from 10% to 25% of recovered amounts), recovery agents often resort to unlawful aggressive tactics: continuous calling, abusive language, threatening home or workplace visits, contacting relatives or employer HR departments, and sending fake legal notices or fabricated police arrest warrants over WhatsApp.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers must understand that the Reserve Bank of India has enacted stringent statutory regulations under the <strong>RBI Master Circular on Recovery Agents &amp; Fair Practices Code</strong> to eliminate these predatory practices. Under RBI guidelines:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-2 mb-1.5">
                    <Clock className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Strict Calling Hours (8 AM – 7 PM)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Recovery agents are strictly prohibited from calling or visiting borrowers before 08:00 AM or after 07:00 PM. Calls during late nights or early mornings constitute an immediate statutory regulatory violation.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-2 mb-1.5">
                    <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Zero Third-Party Contact</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Agents cannot disclose your debt, call, or visit your employers, colleagues, friends, neighbours, or non-guarantor family members under strict privacy mandates and IT Act provisions.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-2 mb-1.5">
                    <UserCheck className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Mandatory DRA ID &amp; Authorization</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Any agent visiting in person must carry a certified Bank Identity Card, a formal Bank Authorization Letter with the cardholder&apos;s name, and a valid DRA accreditation from the Indian Institute of Banking and Finance (IIBF).
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-2 mb-1.5">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Prohibition on Intimidation &amp; Threats</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Threats of police arrest, confiscation of household assets, character defamation, or physical intimidation carry severe civil penalties and criminal liabilities for both the agent and the lending bank.
                  </p>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                If recovery agents violate these statutory directives, borrowers can initiate immediate legal recourse: (1) Serving a formal legal Cease-and-Desist Notice drafted by banking advocates to the bank&apos;s Managing Director and Principal Nodal Officer; (2) Filing an official grievance on the RBI Integrated Ombudsman portal (cms.rbi.org.in); and (3) Filing an administrative complaint under Section 503/506 IPC if criminal intimidation occurs.
              </p>
            </section>

            {/* Section 7: Legal Notices, Section 25 PSSA & Court Reality */}
            <section id="legal-actions-notices-court-reality" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>7. Legal Forensics &amp; Judicial Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Legal Notice Forensics: Section 25 PSSA, Section 138, Summary Suits &amp; Arbitration
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                As credit card defaults progress past 90 to 120 days, banks frequently issue formal legal demand notices authored by empaneled collection advocates. Distressed cardholders must recognize the distinct legal instruments lenders employ and understand the civil court protections available:
              </p>

              <div className="space-y-4 my-6">
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Advocate Legal Demand Notice (Contractual Recall)</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    A standard 15-day or 30-day demand notice demanding repayment of total card dues plus compounded interest. It is a pre-litigation communication, not a court order. Responding through specialized legal counsel highlighting genuine financial hardship establishes documentary evidence for future compromise negotiations.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Section 25 PSSA Notices (Auto-Debit / NACH Dishonour)</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    If you set up an electronic NACH auto-debit for your credit card bill that bounced due to insufficient funds, banks may issue a notice under Section 25 of the Payment and Settlement Systems Act (PSSA), 2007. This is a quasi-criminal bailable proceeding handled in Metropolitan Magistrate Courts that is routinely compounded and dismissed through compromise settlement.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Order 37 CPC Summary Suits &amp; DRT Pecuniary Limits</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Under the Recovery of Debts and Bankruptcy Act (RDB Act), 1993, banks cannot approach the Debt Recovery Tribunal (DRT) for debts below <strong>₹20 Lakhs</strong>. Because virtually all individual credit card balances fall below ₹20 Lakhs, banks are restricted to local Civil Courts under Order 37 of the Code of Civil Procedure (CPC), where court fees (typically 5% to 8% ad-valorem) and 4 to 7 years of judicial delays make litigation economically unviable for the bank.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-6">
                <div className="font-bold text-slate-900 text-sm flex items-center gap-2 mb-2">
                  <Landmark className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The Banker&apos;s Right of Set-Off (Section 171, Indian Contract Act)</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Cardholders must be aware of the <strong>Right of Set-Off</strong>. If you hold a savings, salary, or fixed deposit account with the <em>exact same bank</em> that issued your defaulted credit card under the same PAN/CIF, the bank can legally appropriate deposited funds to adjust credit card arrears. To protect essential household living expenses, borrowers in default should immediately redirect active salary credits and emergency liquidity to an independent, non-lender banking institution.
                </p>
              </div>
            </section>

            {/* Section 8: 60%–70% OTS Compromise Settlement Math */}
            <section id="one-time-settlement-60-70-haircut" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>8. Debt Haircut Valuation &amp; Negotiation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                How One-Time Settlement (OTS) Works: Unlocking 60%–70% Debt Haircuts Under RBI Frameworks
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                A One-Time Settlement (OTS) is a legally binding compromise resolution executed under the Reserve Bank of India&apos;s <em>Framework for Compromise Settlements and Technical Write-offs</em> (RBI/2023-24/40). When a credit card balance transitions into a Doubtful Asset or Technical Write-off on the bank&apos;s balance sheet, the bank&apos;s internal Credit Risk Committee evaluates the asset through a Net Present Value (NPV) recovery lens.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Lenders understand that pursuing civil litigation against an unsecured debtor involves substantial legal retainer costs, court stamp duties, external agency commissions, and 5 to 7 years of court delays with zero guarantee of asset realization. Consequently, banks prefer recovering a guaranteed lump-sum or structured payment immediately rather than carrying dead assets on their books.
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Bank NPV Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated recoveries, r is the bank discount rate, and deductions account for 3–5 years of court friction, advocate fees, and capital locked in 100% NPA provisions.
                </p>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                During an advocate-led OTS negotiation:
              </p>
              <ul className="space-y-2.5 text-sm text-slate-700 my-4 pl-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>100% Elimination of Penal Surcharges:</strong> All accumulated 42% APR finance charges, compounding interest, late payment fees, overlimit penalties, and associated GST are stripped from the ledger.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>60% to 70% Principal Debt Discount:</strong> The core utilized principal is negotiated down based on verified documentation of bona fide financial hardship (medical records, job termination letters, business P&amp;L decline).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Structured Installment Flexibility:</strong> Borrowers can negotiate the settlement amount to be paid either as a single bullet payment or across 2 to 4 structured monthly installments.</span>
                </li>
              </ul>
            </section>

            {/* Section 9: Sanction Letter Audit & ₹0 NDC Mandate */}
            <section id="sanction-letter-audit-zero-ndc" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>9. Forensic Settlement Validation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Sanction Letter Forensics: Essential Checkpoints &amp; Guaranteed ₹0 NDC Delivery
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Thousands of borrowers fall victim to collection agency scams where recovery tele-callers make verbal settlement promises, accept partial payments, and credit the money as regular interest payments without closing the account. To ensure complete legal closure, every settlement must satisfy rigorous forensic standards:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Official Bank Letterhead &amp; Stamp</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The OTS Sanction Letter must be printed on official bank stationery featuring the bank&apos;s corporate logo, branch address, authorized signatory signature, employee ID, and official branch seal. Never accept agreements via plain text emails or WhatsApp messages.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <h4 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Account Number &amp; Installment Dates</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The letter must explicitly cite your 16-digit credit card number or 10-digit loan account reference, the exact negotiated settlement figure in words and figures, and strict payment due dates.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <h4 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Full &amp; Final Waiver Clause</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The document must contain an express contractual clause affirming that upon receipt of the agreed settlement sum, all balance ledger dues stand irrevocably waived, and the bank will initiate no future legal or collection claims.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <h4 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1F5EFF]" />
                    <span>30-Day Mandatory NDC Delivery</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under <strong>RBI Circular RBI/2023-24/60</strong>, the bank is statutorily bound to deliver a formal No Dues Certificate (NDC) within 30 calendar days of payment, subject to a ₹5,000 per day compensation penalty for non-compliance.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 10: CIBIL Score Rehabilitation Roadmap */}
            <section id="cibil-score-trajectory-rehabilitation" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>10. Credit Bureau Rehabilitation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                CIBIL Score Impact &amp; Credit Rehabilitation: Rebuilding to 750+ After Settlement
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Executing a credit card settlement results in your credit report status updating to <strong>&apos;Settled&apos;</strong> or <strong>&apos;Post-Write-Off Settled&apos;</strong> with an outstanding ledger balance of ₹0. While this causes a temporary credit score drop of 75 to 120 points and creates a cooling-off window for unsecured loan applications, it immediately terminates compounding default flags, monthly DPD escalation, and legal collection proceedings.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers can systematically rehabilitate their credit score back to 750+ within 18 to 24 months by following an advocate-tested credit restoration protocol:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-6 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong>Verify ₹0 Balance Reporting:</strong> Within 45 days of settlement, pull fresh credit reports from CIBIL, Experian, Equifax, and CRIF High Mark to confirm the account status is updated to &apos;Settled&apos; and outstanding dues reflect strictly as ₹0.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong>Acquire a Fixed-Deposit Secured Credit Card:</strong> Open a fixed deposit of ₹25,000 to ₹50,000 with a retail bank (such as IDFC FIRST Bank or Kotak Mahindra Bank) and obtain a secured credit card issued against 80% to 90% of the FD value without income verification.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong>Maintain a &lt;30% Credit Utilization Ratio:</strong> Utilize the secured card exclusively for routine household purchases (groceries, utility bills), keeping utilization strictly under 30% of the credit limit.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong>100% On-Time Full Bill Payments:</strong> Set up automated payments to clear 100% of the monthly statement balance on the secured card before the due date, building a flawless 12 to 18-month on-time repayment track record.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 11: Company Section Component */}
            <div id="company-resolution-section" className="scroll-mt-24">
              <CompanySection />
            </div>

            {/* Section 12: Frequently Asked Questions (FAQ Accordion) */}
            <section id="faqs" className="scroll-mt-24 my-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                Frequently Asked Questions: Credit Card Default &amp; Debt Settlement
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

            {/* 5 Official Regulatory Links */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-[#1F5EFF]" />
                Official Statutory &amp; Regulatory References
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Reserve Bank of India:</strong> Master Direction – Credit Card and Debit Card – Issuance and Conduct Directions, 2022 (RBI/2022-23/92)
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
                    <strong>RBI Master Circular:</strong> Framework for Compromise Settlements and Technical Write-offs (RBI/2023-24/40)
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
                    <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Official Portal for Filing Recovery Agent Harassment Complaints
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Legislative Department, Ministry of Law and Justice:</strong> The Indian Contract Act, 1872 &amp; Payment and Settlement Systems Act, 2007 (Section 25)
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>National Legal Services Authority (NALSA):</strong> Pre-Litigation Dispute Conciliation &amp; National Lok Adalat Settlement Guidelines
                  </a>
                </li>
              </ul>
            </div>

            {/* Related Guides & Resources Strip (10 Topic Badges) */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#1F5EFF]" />
                Explore Related Credit Card &amp; Debt Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2.5">
                <Link
                  href="/how-to-settle-credit-card-debt"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  How to Settle Credit Card Debt
                </Link>
                <Link
                  href="/credit-card-settlement-above-1-lakh"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Credit Card Settlement Above 1 Lakh
                </Link>
                <Link
                  href="/credit-card-vs-personal-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Credit Card vs Personal Loan Settlement
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Bank One-Time Settlement (OTS) Policy
                </Link>
                <Link
                  href="/bank-recovery-agent-threatening-me"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Bank Recovery Agent Threatening Me
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Recovery Harassment RBI Complaint
                </Link>
                <Link
                  href="/personal-loan-legal-notice"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Banking Legal Notice Defense
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
                <Link
                  href="/cibil-score-kaise-sudhare-settlement-ke-baad"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  CIBIL Score Kaise Sudhare Settlement Ke Baad
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Can I Go to Jail for Loan Default?
                </Link>
              </div>
            </div>
          </main>

          {/* Right Column (Sidebar Cards) */}
          <aside className="w-full sticky top-24 space-y-6">
            {/* Card 1: Author Bio Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Link href="/authors/ashish-jhangra" className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black text-base flex items-center justify-center shadow-md hover:opacity-90 transition-opacity">
                    AJ
                  </div>
                </Link>
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
                    Lead Banking Legal &amp; Debt Settlement Strategist
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Ashish has advised on over 1,500+ successful unsecured credit card and personal loan compromise settlements across HDFC Bank, SBI Cards, ICICI Bank, Axis Bank, and Kotak Mahindra Bank. He specializes in credit card debt restructuring, anti-harassment defense, and borrower representation under RBI Master Directions.
              </p>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                <Link
                  href="/authors/ashish-jhangra"
                  className="text-[#1F5EFF] hover:underline"
                >
                  View Author Profile →
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
                <span>Credit Card Debt Defense</span>
              </div>
              <div className="text-xl font-black mb-3 leading-tight">
                Trapped in 42% Card Interest?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Halt aggressive recovery tele-calling and exponential finance charges immediately. Let our seasoned banking advocates audit your card statements, defend legal notices, negotiate directly with the bank credit committee, and secure up to 60%–70% debt waivers with authentic stamped sanction letters.
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
                    <strong>Direct Bank Committee Representation:</strong> We bypass third-party collection tele-callers to negotiate directly with Zonal Stressed Assets Committees.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Complete Harassment Halting:</strong> Prompt issuance of formal legal cease-and-desist notices to stop unauthorized workplace visits and third-party calling.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Stamped Verification:</strong> Every settlement is strictly verified on official bank letterhead with authorized seals before any payment is disbursed.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed ₹0 NDC Delivery:</strong> End-to-end legal tracking until your formal No Dues Certificate is delivered and credit bureau records update to ₹0.
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
