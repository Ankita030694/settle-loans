'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';
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
  Layers,
  Gavel,
  FileCheck,
  UserCheck,
  AlertCircle,
  Banknote,
  Smartphone,
  Lock,
  UserX,
  AlertTriangle
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

export default function InstantAppLoanSettlementClient() {
  const [activeId, setActiveId] = useState<string>('predatory-vs-regulated-loan-apps');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'predatory-vs-regulated-loan-apps', title: '1. Predatory Apps vs Regulated DLAs' },
    { id: 'cyber-harassment-photo-morphing', title: '2. Cyber Extortion & Morphed Photos' },
    { id: 'statutory-legal-protections', title: '3. IT Act, BNS & RBI Protections' },
    { id: 'cyber-crime-portal-reporting-1930', title: '4. 1930 Helpline & Cyber Portal Protocol' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Resolution Blueprint' },
    { id: 'contact-shielding-broadcast-protocol', title: '6. Contact Shielding & Family Broadcast' },
    { id: 'settlement-strategy-illegal-vs-regulated', title: '7. Dual-Track Settlement Strategy' },
    { id: 'cibil-score-credit-bureau-scrubbing', title: '8. CIBIL Myths & Inquiry Scrubbing' },
    { id: 'step-by-step-defense-roadmap', title: '9. 5-Stage Action Roadmap' },
    { id: 'company-resolution-section', title: '10. SettleLoans Legal Defense & Advisory' },
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
      question: "How do you settle an instant app loan legally and safely in India?",
      answer: (
        <p>
          Settling an instant app loan requires first verifying whether the lender is an <strong>RBI-regulated entity (Bank/NBFC)</strong> or an unauthorized predatory app. For RBI-regulated digital lending apps (DLAs), borrowers submit a formal hardship petition to the lender&apos;s Stressed Assets desk seeking a <strong>One-Time Settlement (OTS)</strong> with a complete waiver of penal charges and a 40%–60% principal reduction. For illegal or unauthorized 7-day APK apps operating extortion rackets, borrowers must not pay extortion demands and should immediately file an emergency cyber crime complaint via the <strong>1930 helpline</strong> and <strong>cybercrime.gov.in</strong>.
        </p>
      )
    },
    {
      question: "What should you do if an instant loan app is calling your contacts and threatening with morphed photos?",
      answer: (
        <p>
          If an instant loan app harvests your contact list and threatens morphed media: (1) Immediately revoke all mobile permissions and uninstall the application; (2) Dial <strong>1930</strong> and register a formal cyber extortion FIR on <strong>cybercrime.gov.in</strong> under Sections 66E/67 of the IT Act and Section 308(2) of the Bharatiya Nyaya Sanhita (BNS); (3) Issue a proactive broadcast message to your family, friends, and colleagues warning that your phone was compromised by a cyber fraud syndicate; (4) Cease all monetary transfers, as sending token payments only fuels further extortion cycles.
        </p>
      )
    },
    {
      question: "Can illegal 7-day instant loan apps impact your CIBIL score or credit report?",
      answer: (
        <p>
          <strong>No. Unauthorized 7-day loan apps have zero access to Reserve Bank of India-licensed Credit Information Companies</strong> (TransUnion CIBIL, Experian, Equifax, CRIF High Mark). Only RBI-registered Regulated Entities possess credit reporting authority. Illegal apps cannot legally report defaults, register negative remarks, or damage your credit score.
        </p>
      )
    },
    {
      question: "Can recovery agents of instant loan apps file a police FIR or send police to your home?",
      answer: (
        <p>
          <strong>No. Retail loan default is strictly a civil matter under Indian contract law</strong>, not a criminal offense. Instant loan recovery agents operate under fictitious identities and routinely forge fake police notices, court warrants, or CBI summons on WhatsApp. Real police officers never act as debt collectors for mobile applications. Forging law enforcement documents is a non-bailable criminal offense under Section 336 of the BNS.
        </p>
      )
    },
    {
      question: "What are the Reserve Bank of India (RBI) Digital Lending Guidelines regarding loan apps?",
      answer: (
        <p>
          Under the <strong>RBI Master Directions on Digital Lending</strong>: (1) All loan disbursals and repayments must execute strictly between the borrower&apos;s bank account and the Regulated Entity&apos;s bank account without passing through third-party pool accounts; (2) Digital Lending Apps cannot access mobile phone storage, media, files, or contact lists; (3) All fees must be disclosed in a standardized Key Fact Statement (KFS); (4) Regulated entities must maintain a dedicated Principal Nodal Grievance Officer.
        </p>
      )
    },
    {
      question: "How can you identify whether an instant loan app is genuine (RBI-registered) or illegal?",
      answer: (
        <p>
          A genuine lending app clearly discloses its partner RBI-registered NBFC or Bank on its website, Play Store listing, and Key Fact Statement (KFS), which can be cross-verified on the official RBI website. Legitimate apps offer tenures exceeding 60 to 90 days with transparent APRs. In contrast, illegal predatory apps offer short 7-day or 15-day tenures, deduct 40% to 50% upfront as processing fees, demand full contact and gallery access, and operate through sideloaded APK downloads.
        </p>
      )
    },
    {
      question: "What percentage of debt waiver can you negotiate on an RBI-regulated digital lending app?",
      answer: (
        <p>
          On defaulted unsecured loans with RBI-regulated digital lenders and partner NBFCs that have crossed 90+ days overdue (NPA status), borrowers can negotiate comprehensive One-Time Settlements with a <strong>40% to 65% principal haircut</strong>, along with a <strong>100% complete waiver</strong> of late payment penalties, penal interest, and bounce charges.
        </p>
      )
    },
    {
      question: "Where can victims file complaints against predatory instant loan apps in India?",
      answer: (
        <p>
          Victims can lodge complaints across three statutory forums: (1) <strong>National Cyber Crime Reporting Portal (cybercrime.gov.in)</strong> or Helpline 1930 for extortion, photo morphing, and contact harassment; (2) <strong>RBI Complaint Management System (cms.rbi.org.in)</strong> against RBI-regulated NBFCs or their digital lending partners for Fair Practices Code violations; (3) <strong>Local Cyber Crime Police Stations</strong> by filing a physical complaint under the IT Act, 2000 and criminal extortion sections.
        </p>
      )
    },
    {
      question: "What should you do if an instant loan app already disbursed money into your account without consent?",
      answer: (
        <p>
          Unsolicited disbursals are a classic tactic used by predatory APK syndicates. If unsolicited funds land in your bank account: (1) Do not spend or transfer the money; (2) Report the unsolicited credit transaction to your bank branch immediately; (3) File an emergency cyber crime incident report on <strong>cybercrime.gov.in</strong> documenting the forced transfer; (4) If contacted by recovery agents, refuse extortion charges and instruct them in writing to reverse the transaction through official banking channels only.
        </p>
      )
    },
    {
      question: "How does SettleLoans help victims of predatory instant loan apps and regulated digital lenders?",
      answer: (
        <p>
          SettleLoans provides comprehensive legal protection: (1) Immediate cyber fraud filing and legal cease-and-desist representation to halt contact harassment; (2) Strategic legal isolation of illegal extortion syndicates; (3) Formal OTS negotiations directly with the Stressed Assets Committees of RBI-registered NBFCs for maximum lawful debt waivers; (4) Verification of stamped settlement letters, No Dues Certificates, and credit bureau report rectification.
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
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-blue-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Digital Lending Defense • Cyber Fraud Protection</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            How to Settle Instant App Loan: <span className="text-[#3b82f6] md:text-[#60a5fa]">RBI Rules, Cyber Fraud Defense &amp; Harassment Protection</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Trapped by predatory 7-day loan apps or aggressive fintech platforms? Learn how to halt contact list harassment, stop morphed photo blackmail, file 1930 cyber complaints, and negotiate lawful compromise settlements under RBI digital lending frameworks.
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
              <span>RBI Digital Lending Guidelines Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Stop Loan App Harassment</span>
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

      {/* B. Crisp Stats Strip Component */}
      <StatsStrip />

      {/* 3-Column Layout Container */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column (Sticky Table of Contents) */}
          <aside className="w-full sticky top-24 space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-sm">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-200 text-slate-900 font-bold text-sm">
                <BookOpen className="w-4 h-4 text-[#1F5EFF]" />
                <span>Table of Contents</span>
              </div>
              <nav className="space-y-1 text-xs">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug ${
                      activeId === item.id
                        ? 'bg-[#1F5EFF] text-white font-bold shadow-sm'
                        : 'text-slate-600 hover:bg-slate-200/60 hover:text-slate-900'
                    }`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick Summary Pill Box */}
            <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>Cyber &amp; DLA Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Unauthorized 7-day loan apps operate illegal extortion syndicates with zero CIBIL reporting rights. Regulated NBFC apps must follow RBI digital lending norms, allowing 40%–60% legal OTS settlements with 100% penal fee waivers.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">
            
            {/* Section 1: Anatomy of Predatory Instant Loan Apps vs Regulated DLAs */}
            <section id="predatory-vs-regulated-loan-apps" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. Anatomy of Digital Lending Schemes</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Understanding Predatory 7-Day Loan Apps vs RBI-Regulated Digital Lending Platforms
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The Indian digital lending ecosystem is sharply divided into two distinct operating models: legitimate Digital Lending Apps (DLAs) partnered with Reserve Bank of India (RBI)-registered Non-Banking Financial Companies (NBFCs) or commercial banks, and unauthorized, predatory instant loan applications operating illicit cross-border extortion syndicates. Recognizing which category your lender belongs to represents the essential first step in determining your legal defense and settlement strategy.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Predatory instant loan apps—often distributed through sideloaded Android Package Kits (APKs), rogue social media advertisements, or short-lived entries on third-party app stores—employ predatory business algorithms. They lure cash-strapped individuals by offering instantaneous micro-credit without standard underwriting or credit verification. However, upon disbursement, these entities immediately deduct 40% to 50% of the loan amount under the pretext of arbitrary &quot;processing fees&quot; and &quot;technology charges&quot; (for example, disbursing only ₹3,300 on an approved ₹6,000 credit line) and demand full repayment within an aggressive 6-to-7-day tenure. This structure results in effective annualized percentage rates (APR) exceeding 3,000%.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Conversely, RBI-regulated digital lenders (such as KreditBee, Navi, MoneyView, Cashe, and Kissht operating in partnership with regulated balance-sheet NBFCs) are legally bound by the Banking Regulation Act, 1949 and the RBI Master Directions on Digital Lending. Under these regulatory frameworks, retail borrowing is strictly a civil contractual relationship governed by the Indian Contract Act, 1872. Operating an unauthorized digital lending scheme without valid registration constitutes a severe violation of Section 45-IA of the Reserve Bank of India Act, 1934.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong>Statutory Principle:</strong> Under Indian jurisprudence, an illegal entity operating in violation of central banking statutes possesses zero legal standing (locus standi) to enforce civil debt recovery or file criminal complaints against borrowers. Civil courts reject claims founded on unlawful and usurious contracts under Section 23 of the Indian Contract Act, 1872.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Cyber Harassment, Morphed Photos & Extortion Tactics */}
            <section id="cyber-harassment-photo-morphing" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>2. Cyber Extortion &amp; Harassment Mechanisms</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Anatomy of Blackmail: Contact Scraping, Morphed Images &amp; Fabricated Legal Threats
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When a borrower downloads an unauthorized instant loan APK, the application covertly exploits device access permissions to scrape the entire contact address book, SMS repository, call history, media gallery, and device identifiers. If the borrower defaults or resists exorbitant 7-day renewal penalties, the operating syndicate deploys weaponized psychological harassment and cyber extortion tactics designed to induce panic and social humiliation.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The primary weapon of these rogue collection rings involves downloading the borrower&apos;s personal photographs (or social media profile pictures) and utilizing digital editing tools to create sexually explicit, vulgar, or defamatory morphed graphics. Recovery operatives transmit these fabricated images directly to the borrower alongside aggressive countdown timers, threatening to circulate the defamatory media to parents, spouses, workplace supervisors, and school alumni groups via WhatsApp and Telegram.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                In addition to visual blackmail, tele-callers frequently impersonate high-ranking police officers, Central Bureau of Investigation (CBI) sleuths, or judicial magistrates. They circulate forged legal summonses, counterfeit arrest warrants, and fake FIR documents bearing official state emblems to coerce instant money transfers. Borrowers must understand that authentic law enforcement agencies never serve arrest warrants via instant messaging applications or act as recovery agents for commercial digital applications. Fabricating official seals is a non-bailable offense under the Bharatiya Nyaya Sanhita, 2023.
              </p>
            </section>

            {/* Section 3: Statutory Protections: IT Act, IPC/BNS & RBI Digital Lending Norms */}
            <section id="statutory-legal-protections" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4" />
                <span>3. Statutory Protections &amp; Legal Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Enforcing Your Legal Rights: The Information Technology Act &amp; RBI Master Directions
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Victims of predatory digital lending apps enjoy robust legal protections under Indian penal statutes, cyber law, and central banking directives. When recovery agents resort to photo morphing, abusive tele-calling, or contact harassment, their actions cross from commercial default into cognizable criminal offenses that carry severe imprisonment terms for the perpetrators.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under the Information Technology Act, 2000, Section 66E explicitly criminalizes the capturing, publishing, or transmitting of private images without consent, prescribing rigorous imprisonment up to three years. Furthermore, Section 67 penalizes the electronic transmission of obscene or sexually explicit material with imprisonment up to five years, while Section 43A mandates strict corporate liability and financial compensation for unauthorized data breaches and privacy compromises.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under the Bharatiya Nyaya Sanhita (BNS), 2023, these extortionate actions trigger prosecution under Section 308(2) (Extortion through threat of injury or reputational damage), Section 351 (Criminal Intimidation), Section 79 (Insulting the modesty of a woman through digital media), and Section 336 (Forgery of legal documents). Simultaneously, the RBI Master Directions on Digital Lending strictly prohibit regulated entities from accessing phone storage, media files, and contact lists, mandating that all disbursements and collections execute solely through verified bank accounts of regulated entities.
              </p>

              {/* Comprehensive Statutory Comparison Table */}
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Lending Parameter</th>
                      <th>RBI-Regulated Digital Lenders (DLAs)</th>
                      <th>Illegal 7-Day Predatory Loan Apps</th>
                      <th>Applicable Legal Violation / Protection</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Mobile Permissions</td>
                      <td>Restricted to camera/location for KYC; zero contact or gallery access.</td>
                      <td>Harvests entire contact book, media gallery, SMS, and device logs.</td>
                      <td>Sec 66E IT Act &amp; RBI Master Direction on Digital Lending.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Loan Tenure &amp; APR</td>
                      <td>Minimum 60 to 365+ days with transparent annualized APR in KFS.</td>
                      <td>6 to 7 days tenure with 3,000%+ effective annualized interest.</td>
                      <td>Usurious Loans Act &amp; Section 45-IA of the RBI Act, 1934.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Recovery Practices</td>
                      <td>Regulated calls between 08:00 AM – 07:00 PM; no third-party contact.</td>
                      <td>Abusive 24/7 calls, morphed photos, blackmail, contact harassment.</td>
                      <td>Sec 308(2) &amp; Sec 351 BNS (Extortion &amp; Intimidation).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Disbursal Mechanism</td>
                      <td>Direct NEFT/RTGS between Bank/NBFC and borrower account.</td>
                      <td>Untraceable UPI handles, mule accounts, third-party payment gateways.</td>
                      <td>RBI Circular on Disintermediation of Pool Accounts.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Credit Bureau Access</td>
                      <td>Mandatory monthly reporting to CIBIL, Experian, Equifax, CRIF.</td>
                      <td>Zero access to Credit Information Companies; cannot report default.</td>
                      <td>Credit Information Companies (Regulation) Act, 2005 (CICRA).</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: The 1930 Cyber Helpline & Cyber Crime Portal Reporting */}
            <section id="cyber-crime-portal-reporting-1930" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>4. Emergency Cyber Crime Reporting Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                How to File Complaints on the National Cyber Crime Portal (1930 Helpline)
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When facing active cyber blackmail or contact harassment, immediate statutory reporting creates an enforceable evidentiary shield. The Ministry of Home Affairs (MHA), through the Indian Cyber Crime Coordination Centre (I4C), manages the National Cyber Crime Reporting Portal and the dedicated emergency helpline <strong>1930</strong> (formerly 155260), specifically equipped to handle digital lending fraud and financial extortion.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The moment extortion threats or morphed media emerge, dial <strong>1930</strong> immediately. The citizen financial cyber fraud reporting system logs your incident and triggers an automated alert across participating banking networks and UPI gateways to freeze the illicit mule accounts utilized by the extortion syndicate.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Simultaneously, log onto <strong>cybercrime.gov.in</strong> and lodge a comprehensive formal complaint under the category &quot;Report Cyber Crime Related to Women/Child&quot; (if morphed imagery or harassment of female contacts is involved) or &quot;Report Other Cyber Crime&quot;. Ensure you upload complete digital evidence: raw screenshots of WhatsApp chats showing phone numbers, payment QR codes, transaction reference numbers (UTR), and the installation APK file name. Securing a formal Cyber Crime Acknowledgement Number establishes absolute legal immunity against fraudulent civil claims.
              </p>
            </section>

            {/* Section 5: Visual Resolution Blueprint (Infographic Banner) */}
            <section id="infographic-resolution-blueprint" className="scroll-mt-24 mb-12">
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
                        Instant App Loan Settlement &amp; Cyber Fraud Defense Blueprint
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/instant-app-loan-settlement.jpg"
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
                      src="/images/infographics/instant-app-loan-settlement.jpg"
                      alt="Instant App Loan Settlement and Cyber Fraud Defense Blueprint"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Takeaway:</strong> Disarm illegal 7-day blackmailers via 1930 cyber complaints and contact broadcast alerts, while negotiating 40%–60% legal OTS for regulated NBFC apps.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6: Emergency Contact Shielding & WhatsApp Broadcast Protocol */}
            <section id="contact-shielding-broadcast-protocol" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Lock className="w-4 h-4" />
                <span>5. Social Shielding &amp; Narrative Control</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Neutralizing Blackmail: Emergency Contact Shielding &amp; Family Broadcast Protocol
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Extortion syndicates rely entirely on isolation, shame, and social panic. The moment a victim capitulates to fear and transfers money to stop a photo leak, the syndicate flags the profile as &quot;paying&quot; and escalates extortion demands through secondary and tertiary rogue numbers. Neutralizing their leverage requires executing an immediate, proactive narrative takeover before the extortionists initiate mass calling.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Execute the proven <strong>Broadcast Shielding Protocol</strong>: Send a clear broadcast message across WhatsApp, SMS, and your social media channels alerting your entire contact circle that your smartphone was recently infected by malicious spyware that cloned your contact list. Clarify that cyber criminals are circulating fraudulent, computer-generated spam, fake loan notices, and morphed imagery from random virtual numbers to extort money. Request your contacts to block and report any unsolicited calls or messages immediately.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Once this proactive disclosure is distributed, the extortionists lose 100% of their psychological leverage. Family members and colleagues who receive rogue calls are already forewarned and will dismiss the callers as cyber scammers. Combine this with a strict policy of zero communication: block all unknown numbers using call-screening tools, delete suspicious APKs, and refuse to engage in WhatsApp arguments with tele-callers.
              </p>
            </section>

            {/* Section 7: Strategic Settlement: Illegal Apps vs Regulated NBFC DLAs */}
            <section id="settlement-strategy-illegal-vs-regulated" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>6. Dual-Track Debt Resolution Strategy</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Resolving Digital Debt: Illegal 7-Day APKs vs Regulated NBFC Digital Lending Apps
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Resolving digital lending debt requires applying a strict dual-track methodology based on the institutional legitimacy of the underlying lender. Attempting to negotiate a compromise settlement with an illegal extortion ring is futile and counterproductive, whereas failing to formally settle with an RBI-regulated NBFC will lead to compounding default penalties and credit score destruction.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                <strong>Track A: Unauthorized 7-Day Predatory Apps:</strong> These operations are criminal enterprises with zero corporate registration, no RBI licensing, and no legal standing. The only lawful strategy is complete non-cooperation and legal isolation. Never pay extortion demands or renewal charges. Secure your Cyber Crime complaint acknowledgement, block their communications, and report their payment UPI handles to the National Payments Corporation of India (NPCI) and cyber police. These entities cannot initiate civil suits, issue legal notices, or access Lok Adalat.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                <strong>Track B: RBI-Regulated Digital Lending Apps (Partnered NBFCs):</strong> When default occurs on legitimate fintech platforms (such as KreditBee, Navi, MoneyView, or Cashe) due to genuine economic hardship, debt resolution follows the <strong>RBI Master Direction on Compromise Settlements (2023)</strong>. Once an unsecured digital loan crosses 90 days overdue and enters Non-Performing Asset (NPA) status, the partner NBFC must allocate capital provisioning. Distressed borrowers can submit a formal hardship petition directly to the lender&apos;s Stressed Assets Committee to secure a 40% to 65% principal haircut and complete cancellation of all penal fees.
              </p>

              {/* Settlement Strategy Matrix Table */}
              <h3 className="text-lg font-bold text-slate-900 mb-3">Settlement Strategy Matrix: Regulated NBFCs vs Rogue APK Syndicates</h3>
              <div className="overflow-x-auto my-4">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Resolution Factor</th>
                      <th>RBI-Regulated NBFC Digital Loans</th>
                      <th>Illegal 7-Day Chinese / Predatory APKs</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Recommended Action</td>
                      <td>Structured One-Time Settlement (OTS) Negotiation.</td>
                      <td>Zero Payment; Immediate Cyber Crime FIR &amp; Blocking.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Haircut / Waiver Potential</td>
                      <td>40% – 65% Principal Reduction + 100% Penal Fee Waiver.</td>
                      <td>100% Extinction (Unlawful debt is void ab initio).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Documentation Required</td>
                      <td>Formal Stamped OTS Letter from NBFC Letterhead.</td>
                      <td>Cyber Crime Acknowledgement &amp; Police Diary Entry.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Payment Remittance</td>
                      <td>Direct NEFT/RTGS into verified NBFC loan account.</td>
                      <td>Never pay; all private UPI handles are fraudulent.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Closure Deliverable</td>
                      <td>Authentic ₹0 No Dues Certificate (NDC) within 30 days.</td>
                      <td>App uninstallation, device reset, cyber closure.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 8: CIBIL Score Realities & Removing Fraudulent Bureau Inquiries */}
            <section id="cibil-score-credit-bureau-scrubbing" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>7. Credit Bureau Trajectory &amp; Score Scrubbing</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                CIBIL Score Realities: Debunking Threats &amp; Scrubbing Unauthorized Inquiries
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                A widespread tactic employed by rogue collection agents is threatening to &quot;permanently ruin your CIBIL score&quot; or place you on a &quot;national defaulter blacklist&quot;. Under the Credit Information Companies (Regulation) Act, 2005 (CICRA), access to credit reporting bureaus (TransUnion CIBIL, Experian, Equifax, and CRIF High Mark) is strictly restricted to RBI-licensed credit institutions. Illegal, unregistered loan apps possess zero technical or legal capability to report defaults, submit payment history, or alter your credit score.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                However, when applying for loans across multiple digital aggregator platforms, fraudulent apps sometimes trigger unauthorized &quot;hard inquiries&quot; by misusing borrower PAN credentials through obscure third-party NBFC tie-ups. A cluster of multiple hard inquiries within a short timeframe depresses credit scores and signals financial distress to future institutional lenders.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers have the statutory right under CICRA to audit their credit bureau files and initiate formal dispute resolution. By submitting your Cyber Crime complaint acknowledgement alongside a formal dispute petition to TransUnion CIBIL and the concerned NBFC, unauthorized inquiries and fraudulent trade lines must be scrubbed within 30 days. Under RBI Circular RBI/2023-24/60, credit institutions that fail to resolve erroneous bureau entries within 30 days must pay compensation of ₹100 per day directly to the affected consumer.
              </p>
            </section>

            {/* Section 9: Step-by-Step Action Roadmap to Total Debt Extinction */}
            <section id="step-by-step-defense-roadmap" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>8. 5-Stage Action Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                The 5-Stage Legal Action Roadmap to Eliminate Digital Loan Harassment
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Navigating digital lending distress requires executing a disciplined, multi-stage protocol that seals digital vulnerabilities, builds an ironclad legal defense, and permanently extinguishes outstanding debt obligations without exposing your family to cyber extortion.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                <strong>Stage 1: Digital Containment &amp; Data Revocation:</strong> Immediately access your mobile device settings, revoke all permissions (Contacts, Storage, Camera, Location, SMS) granted to the loan applications, and uninstall the APK files. For severe malware infections, back up critical documents and perform a factory reset of the operating system to purge background data-harvesting daemons.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                <strong>Stage 2: Digital Evidence Preservation:</strong> Before deleting communication channels, take high-resolution screenshots of all threatening WhatsApp messages, call logs with timestamps, forged legal notices, and UPI payment requests. Export WhatsApp chat logs with media attachments into a secure cloud folder. This evidentiary repository forms the foundation of your police filing.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                <strong>Stage 3: Statutory Cyber Portal &amp; Police Lodgment:</strong> Dial helpline 1930 to register the financial extortion threat and immediately lodge a formal complaint on cybercrime.gov.in. Retain the generated 14-digit Acknowledgement Number, which serves as your legal protection shield against fraudulent claims and third-party inquiries.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                <strong>Stage 4: Social Shielding &amp; Legal Intervention:</strong> Dispatch your pre-drafted family and contact broadcast message across WhatsApp and social media, informing your network of the cyber scam. Engage legal defense counsel to serve formal cease-and-desist notices to recovery agencies and redirect all tele-calling communications to your legal representatives.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                <strong>Stage 5: Regulated NBFC Settlement &amp; No Dues Certification:</strong> For legitimate balance-sheet NBFC loans, mandate your legal counsel to submit a formal hardship petition to the lender&apos;s Zonal Stressed Assets Committee. Negotiate a 40% to 60% principal reduction, obtain an official stamped OTS sanction letter on corporate letterhead, remit payment directly into your NBFC loan account, and secure your final ₹0 No Dues Certificate.
              </p>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory */}
            <section id="company-resolution-section" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>9. Legal Defense &amp; Representation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Why Distressed Digital Borrowers Trust SettleLoans
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Overcoming digital loan harassment and navigating complex fintech debt structures requires seasoned legal defense and cyber expertise. SettleLoans provides complete anti-harassment protection, assists victims with emergency cyber crime filings, and negotiates directly with the senior credit committees of RBI-regulated NBFCs to achieve lawful compromise settlements with maximum debt waivers.
              </p>

              {/* Placement of Reusable CompanySection */}
              <div className="my-8">
                <CompanySection />
              </div>
            </section>

            {/* Section 11: Frequently Asked Questions (FAQ Accordion) */}
            <section id="faqs" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>10. Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                Frequently Asked Questions About Instant App Loan Settlement &amp; Harassment Defense
              </h2>

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

            {/* Regulatory References & Official Sources Strip */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-[#1F5EFF]" />
                Official Regulatory References &amp; Statutory Circulars
              </h3>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Reserve Bank of India (RBI):</strong> Master Direction on Digital Lending (Guidelines on Default Loss Guarantee &amp; Fair Practices Code)
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Ministry of Home Affairs (MHA):</strong> National Cyber Crime Reporting Portal &amp; Citizen Financial Cyber Fraud Helpline (1930)
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.meity.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Ministry of Electronics &amp; Information Technology (MeitY):</strong> Information Technology Act, 2000 (Sections 66E, 67 &amp; 43A Privacy Safeguards)
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
                    <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Online Grievance Redressal Portal for Unfair Digital Recovery &amp; DLA Violations
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
                    <strong>National Legal Services Authority (NALSA):</strong> Legal Services Authorities Act, 1987 — Pre-Litigation Conciliation &amp; Lok Adalat
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
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Bank One-Time Settlement (OTS) Policy
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
                <Link
                  href="/personal-loan-settlement-percentage"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement Percentage
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
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement CIBIL Impact
                </Link>
                <Link
                  href="/section-138-cheque-bounce-loan-default"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Section 138 Cheque Bounce Defense
                </Link>
                <Link
                  href="/how-to-settle-credit-card-debt"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  How to Settle Credit Card Debt
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  No Dues Certificate (NDC) Guide
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
                    Lead Banking Legal &amp; Debt Settlement Strategist
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Ashish has advised on over 1,500+ digital lending and cyber harassment dispute resolutions. He specializes in RBI Master Directions on Digital Lending, IT Act privacy defenses, and NBFC compromise settlements.
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
                <span>Instant App Legal Defense</span>
              </div>
              <h3 className="text-xl font-black mb-3 leading-tight">
                Facing Loan App Harassment?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Stop contact list calls, illegal extortion threats, and morphed photo blackmail immediately. Let our senior cyber advocates file your 1930 complaints and negotiate official NBFC debt settlements.
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
                    <strong>Immediate Cyber Defense:</strong> Rapid filing on cybercrime.gov.in and issuance of legal cease-and-desist notices to stop contact harassment.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct NBFC Negotiations:</strong> We bypass third-party collection agencies to represent your case directly before regulated Stressed Assets desks.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Stamped Verification:</strong> Every settlement is backed by an authentic, stamped OTS sanction letter before any payment is remitted.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed ₹0 NDC:</strong> Complete end-to-end tracking until your formal No Dues Certificate is delivered and CIBIL records are scrubbed.
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
