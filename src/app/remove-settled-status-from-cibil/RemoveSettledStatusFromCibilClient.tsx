'use client';
import CompanySection from '@/components/CompanySection';

import React, { useState, useEffect, useRef } from 'react';
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
  FileCheck,
  BadgeAlert,
  ArrowUpRight,
  AlertCircle
} from 'lucide-react';

// Animated Dynamic Counter with Intersection Observer and Smooth Cubic Deceleration
function AnimatedCounter({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  decimals = 0,
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      // Smooth ease-out cubic deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(easeOut * end);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <span ref={counterRef} className="font-black">
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString('en-IN')}
      {suffix}
    </span>
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

export default function RemoveSettledStatusFromCibilClient() {
  const [activeId, setActiveId] = useState<string>('why-settled-blocks-credit');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tocItems = [
    { id: 'why-settled-blocks-credit', title: '1. Why "Settled" Blocks Your Credit' },
    { id: 'settled-vs-closed-matrix', title: '2. "Settled" vs. "Closed" Comparison' },
    { id: 'step-by-step-upgrade-process', title: '3. 6 Steps to Upgrade to "Closed"' },
    { id: 'cost-benefit-analysis', title: '4. Should You Pay the Residual Balance?' },
    { id: 'cibil-scams-vs-legal-reality', title: '5. Fake Scams vs. Legal Facts' },
    { id: 'rbi-ombudsman-escalation', title: '6. Bank Delays & Ombudsman Rights' },
    { id: 'credit-score-rebuilding-plan', title: '7. 750+ CIBIL Score Rebound Plan' },
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
      question: "Can a 'Settled' status be permanently removed from a CIBIL report?",
      answer: (
        <p>
          <strong>Yes, but only by converting it to &quot;Closed&quot; through legitimate banking channels.</strong> A &quot;Settled&quot; entry cannot be erased by credit repair agents or third-party hackers. To remove the negative impact, you must approach the original lender, pay the remaining waived balance (the haircut amount waived during the One-Time Settlement), secure an unconditional <strong>No Dues Certificate (NDC)</strong>, and mandate the bank to report the account as <strong>&quot;Closed&quot;</strong> to TransUnion CIBIL, Experian, CRIF High Mark, and Equifax.
        </p>
      )
    },
    {
      question: "How long does a 'Settled' status stay in CIBIL if I do not pay the balance?",
      answer: (
        <p>
          Under <strong>Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA)</strong>, credit bureaus in India maintain historical records, including &quot;Settled&quot; remarks and written-off losses, for a statutory duration of <strong>up to 7 years</strong>. While the severity of the score penalty diminishes after 24 to 36 months if you rebuild on secured credit lines, automated underwriting algorithms for large loans (e.g., home loans) will continue detecting the tag until it is officially updated to &quot;Closed&quot;.
        </p>
      )
    },
    {
      question: "What is the exact step-by-step process to convert 'Settled' to 'Closed' in CIBIL?",
      answer: (
        <p>
          The 6-step legal procedure entails: 1) Pull your comprehensive CIR report to isolate the loan account number and member ID; 2) Submit a formal settlement closure application to the bank&apos;s Stressed Asset / Principal Nodal Officer requesting the exact balance calculation; 3) Remit the residual waived amount via NEFT/RTGS with documented transaction references; 4) Obtain the physical and digital <strong>Full &amp; Final No Dues Certificate</strong> stating ₹0 balance and full closure; 5) Allow 30–45 days for the lender&apos;s automated monthly credit bureau feed; 6) Verify the updated status on CIBIL or raise an online CIBIL Dispute attaching your NDC.
        </p>
      )
    },
    {
      question: "How much do I have to pay to convert a settled loan into a closed loan?",
      answer: (
        <p>
          You only need to repay the <strong>pure principal and base contractual interest</strong> that was waived during your initial One-Time Settlement (OTS). You do <strong>NOT</strong> have to pay extortionate penal interest, compounded late fees, or bouncing charges that accumulated during default, provided your legal representation establishes that only the genuine principal-interest balance is being cleared to obtain closure.
        </p>
      )
    },
    {
      question: "Does paying the balance immediately increase my CIBIL score?",
      answer: (
        <p>
          Upgrading from &quot;Settled&quot; to &quot;Closed&quot; immediately eliminates the red flag that causes algorithmic rejections by prime lenders. The numerical credit score reflects a progressive jump of <strong>40 to 90 points within 3 to 6 months</strong>. More importantly, your eligibility for prime home loans (at 8.35%–8.75%), auto loans, and premium credit cards is completely unlocked.
        </p>
      )
    },
    {
      question: "Can credit repair agencies delete settled remarks without paying the bank?",
      answer: (
        <p>
          <strong>No. This is an illegal scam.</strong> Any individual or agency claiming they can &quot;delete,&quot; &quot;hack,&quot; or &quot;clear&quot; a settled status from CIBIL servers for an upfront fee is committing fraud. In India, credit bureaus operate under strict RBI surveillance and update data exclusively through encrypted, automated batch uploads submitted directly by regulated banks and NBFCs.
        </p>
      )
    },
    {
      question: "What if the bank refuses to accept the remaining balance or issue a closure letter?",
      answer: (
        <p>
          Under RBI Master Directives on Customer Service and the Fair Practices Code, regulated lending institutions cannot arbitrarily refuse a debtor&apos;s legitimate request to pay off residual dues. If your local branch stalls, you should escalate in writing to the bank&apos;s <strong>Principal Nodal Officer (PNO)</strong>. If unresolved within 30 days, submit a complaint to the <strong>RBI Integrated Ombudsman</strong> under Clause 10 of the CMS portal.
        </p>
      )
    },
    {
      question: "What should I do if the bank took the money but CIBIL still shows 'Settled' after 45 days?",
      answer: (
        <p>
          You should immediately file an online <strong>CIBIL Dispute Resolution</strong> via the TransUnion CIBIL consumer portal under the &quot;Account Information&quot; tab, uploading your No Dues Certificate and bank transaction receipts. By RBI circular <em>RBI/2023-24/72</em>, credit bureaus and banks must resolve credit data discrepancies within 30 calendar days or pay a mandatory statutory compensation of <strong>₹100 per day</strong> of delay to the borrower.
        </p>
      )
    },
    {
      question: "Is it always necessary to convert 'Settled' to 'Closed' to get a home loan?",
      answer: (
        <p>
          Not always, but it makes approval faster and secures significantly lower interest rates (saving ₹5 Lakh–₹25 Lakh in interest over a 20-year tenure). If your settlement occurred over 3 years ago and your CIBIL score is rebuilt above 730, select Housing Finance Companies (HFCs) and NBFCs can sanction loans based on manual underwriting, provided you furnish the original OTS sanction letter and ₹0 NDC.
        </p>
      )
    },
    {
      question: "Can I rebuild my CIBIL score to 750+ without paying the waived balance?",
      answer: (
        <p>
          <strong>Yes.</strong> If you cannot afford to repay the waived amount right now, you can rebuild your CIBIL score to 750+ over 18 to 24 months by subscribing to a <strong>Fixed Deposit (FD)-backed secured credit card</strong>, keeping your Credit Utilization Ratio (CUR) below 30%, paying all bills 5 days before the due date, and maintaining zero fresh defaults or multiple unsecured inquiries.
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

      {/* Hero Section - Custom Charcoal Navy Background (#2d313d) & Compact Header */}
      <section
        className="w-full border-b border-slate-700/80 pt-8 pb-7 md:pt-12 md:pb-9 px-4 md:px-8 lg:px-16 relative overflow-hidden"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            CIBIL Forensics &amp; Legal Debt Resolution
          </div>

          {/* H1 Headline - Compact Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            How to Remove Settled Status from CIBIL:{' '}
            <span className="text-[#3b82f6] md:text-[#60a5fa]">Legal Process to Upgrade to &quot;Closed&quot;</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Settled your loan years ago but your credit report is still stuck? Discover the legitimate 6-step banking procedure to pay the residual waived balance, secure an unconditional No Dues Certificate, and upgrade your CIBIL status to &quot;Closed&quot;.
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
                  className="text-white hover:text-blue-400 font-semibold underline decoration-blue-400 underline-offset-2"
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
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Updated: August 19, 2026</span>
            </div>
          </div>

          {/* Primary Hero CTA */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-5 rounded-xl shadow-md hover:shadow-blue-500/20 transition-all duration-300 text-xs sm:text-sm group"
            >
              <span>Check Settlement Upgrade Eligibility</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#step-by-step-upgrade-process"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-2.5 px-5 rounded-xl border border-white/20 transition-all duration-300 text-xs sm:text-sm"
            >
              <FileCheck className="w-4 h-4 text-blue-400" />
              <span>View 6-Step Legal Roadmap</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Crisp Light-Themed Stats Strip */}
      <section className="w-full bg-slate-50 border-b border-slate-200 py-4 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-slate-900">
        <div className="max-w-[1720px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
          <div className="p-2 border-r border-slate-200 last:border-none">
            <div className="text-xl sm:text-2xl md:text-3xl font-black text-[#1F5EFF]">
              <AnimatedCounter end={30} suffix="–45" /> Days
            </div>
            <div className="text-[11px] sm:text-xs text-slate-600 font-medium mt-0.5">
              RBI Bureau Update Cycle
            </div>
          </div>
          <div className="p-2 border-r border-slate-200 last:border-none">
            <div className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-600">
              ₹0 Arrears
            </div>
            <div className="text-[11px] sm:text-xs text-slate-600 font-medium mt-0.5">
              Unconditional NDC Guarantee
            </div>
          </div>
          <div className="p-2 border-r border-slate-200 last:border-none">
            <div className="text-xl sm:text-2xl md:text-3xl font-black text-amber-600">
              <AnimatedCounter end={750} prefix="" suffix="+" />
            </div>
            <div className="text-[11px] sm:text-xs text-slate-600 font-medium mt-0.5">
              Target Rebound Milestone
            </div>
          </div>
          <div className="p-2">
            <div className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900">
              <AnimatedCounter end={1850} suffix="+" /> Cases
            </div>
            <div className="text-[11px] sm:text-xs text-slate-600 font-medium mt-0.5">
              4.9/5 Rating Resolved
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid: Left TOC (240px-280px), Middle Content (Expanded), Right Sidebar (280px-320px) */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column: Dedicated Track containing ONLY Sticky TOC */}
          <aside className="hidden lg:block sticky top-24">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200 text-slate-900 font-bold text-xs uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-[#1F5EFF]" />
                <span>Contents in this Guide</span>
              </div>
              <nav className="space-y-1 text-xs">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block py-1.5 px-2.5 rounded-lg transition-all leading-tight font-medium ${
                      activeId === item.id
                        ? 'bg-[#1F5EFF] text-white font-bold shadow-sm'
                        : 'text-slate-600 hover:text-[#1F5EFF] hover:bg-slate-100'
                    }`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Middle Column: Comprehensive 1800-2200 Word Authoritative Content */}
          <main className="blog-content w-full">
            
            {/* Section 1: The Core Problem */}
            <section id="why-settled-blocks-credit" className="scroll-mt-28 mb-12">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#1F5EFF] mb-2">
                <Landmark className="w-4 h-4" />
                <span>Credit Bureau Architecture &amp; Underwriting Risk</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                1. Why &quot;Settled&quot; Status Blocks Your Credit Profile in India
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                When you experience severe financial distress—such as job loss, medical emergency, or business failure—entering into a <strong>One-Time Settlement (OTS)</strong> with your lender is an invaluable legal lifeline. It halts aggressive debt recovery harassment, protects you from legal prosecution under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act, and permanently caps your financial liability.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                However, once the settlement payment is completed, thousands of borrowers in India encounter an unexpected wall years later: <strong>their CIBIL report displays a permanent &quot;Settled&quot; tag</strong>. When applying for a critical home loan, business expansion facility, or prime credit card, automated bank underwriting systems reject their applications instantly, regardless of their current high income or post-settlement financial stability.
              </p>

              {/* Crux Callout Box */}
              <div className="bg-blue-50/70 border-l-4 border-[#1F5EFF] p-5 rounded-r-2xl my-6">
                <h3 className="text-base font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                  <Info className="w-5 h-5 text-[#1F5EFF]" />
                  The Legal Reality of a &quot;Settled&quot; Account in CIBIL
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Under the <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA)</strong>, licensed credit bureaus (TransUnion CIBIL, Experian, CRIF High Mark, Equifax) do not make qualitative judgments about why you settled. When a bank accepts a discounted payoff, it writes off the unpaid balance as a commercial loss. The bank reports this account as <strong>&quot;Settled&quot;</strong> (indicating a financial loss to the lender) rather than <strong>&quot;Closed&quot;</strong> (which denotes 100% full repayment with zero haircut).
                </p>
              </div>

              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Automated credit approval algorithms at Tier-1 banks (such as SBI, HDFC, ICICI, and Axis Bank) flag any account with a &quot;Settled&quot; or &quot;Written-Off&quot; status as a high-risk historical default. The automated decision engine rejects the application at Stage 1, long before a human credit officer even reviews your latest salary slips or income tax returns.
              </p>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Furthermore, under Section 21 of CICRA 2005, <strong>credit bureaus retain this historical account status for up to 7 years</strong>. If you settled your loan 2, 3, or 4 years ago, waiting passively for the tag to disappear means enduring several more years of credit rejection or being forced into exorbitant 24%–36% interest rates from predatory fintech lenders.
              </p>
            </section>

            {/* Section 2: Settled vs Closed Matrix */}
            <section id="settled-vs-closed-matrix" className="scroll-mt-28 mb-12">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#1F5EFF] mb-2">
                <Scale className="w-4 h-4" />
                <span>Credit Bureau Status Taxonomy</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                2. &quot;Settled&quot; vs. &quot;Closed&quot; vs. &quot;Written Off&quot;: The Full Comparison Matrix
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                To successfully navigate credit restoration, you must understand the exact terminology used by TransUnion CIBIL and Indian banking institutions. The table below delineates the statutory differences between the three primary post-default statuses:
              </p>

              {/* 4-Sided Bordered Comparison Table 1 */}
              <div className="overflow-x-auto my-6">
                <table>
                  <thead>
                    <tr>
                      <th className="w-1/4">Evaluation Metric</th>
                      <th className="w-1/4">&quot;Closed&quot; Status (Clean)</th>
                      <th className="w-1/4">&quot;Settled&quot; Status (Compromise)</th>
                      <th className="w-1/4">&quot;Written Off&quot; (Default)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Legal Definition</td>
                      <td>100% of principal, interest, and contractual dues repaid in full without haircut.</td>
                      <td>Borrower paid a discounted compromise amount; lender waived remaining balance.</td>
                      <td>Lender classified debt as unrecoverable non-performing asset (NPA); 100% loss booked.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">CIBIL Score Impact</td>
                      <td className="text-emerald-700 font-semibold">Positive (+30 to +60 pts boost over tenure).</td>
                      <td className="text-amber-700 font-semibold">Negative drop (-75 to -150 pts at settlement).</td>
                      <td className="text-red-700 font-semibold">Catastrophic plunge (-150 to -250+ pts drop).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Prime Loan Eligibility</td>
                      <td className="text-emerald-700 font-semibold">Immediate approval at lowest rack rates (8.35%–8.8%).</td>
                      <td className="text-amber-700 font-semibold">Blocked on automated systems; manual approval only after 24–36 mo.</td>
                      <td className="text-red-700 font-semibold">100% Rejected across all regulated banks and NBFCs.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Residual Legal Liability</td>
                      <td>₹0 — Fully discharged with unconditional closure letter.</td>
                      <td>₹0 — Legally capped under terms of OTS Sanction Letter.</td>
                      <td>Active — Bank or Asset Reconstruction Company (ARC) can litigate.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Bureau Retention Period</td>
                      <td>Permanent positive history on credit report.</td>
                      <td>Retained for up to 7 years under CICRA 2005.</td>
                      <td>Retained for up to 7 years or until legal suit disposal.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Upgrade Viability</td>
                      <td>Not Applicable (Already Optimal).</td>
                      <td className="text-[#1F5EFF] font-bold">100% Upgradable to &quot;Closed&quot; by paying waived balance.</td>
                      <td>Requires full OTS or total repayment to upgrade.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-base leading-relaxed mb-4 text-slate-700">
                As the matrix proves, <strong>&quot;Settled&quot; is not an irreversible life sentence</strong>. Because you already completed the initial compromise and hold an official OTS agreement, you have the statutory right under Reserve Bank of India customer service guidelines to settle the remaining residual balance and upgrade your record to a pristine &quot;Closed&quot; status.
              </p>
            </section>

            {/* Section 3: Step-by-Step 6 Steps Process */}
            <section id="step-by-step-upgrade-process" className="scroll-mt-28 mb-12">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#1F5EFF] mb-2">
                <FileCheck className="w-4 h-4" />
                <span>Procedural Protocol</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                3. The 6-Step Legal Roadmap to Remove &quot;Settled&quot; Status &amp; Upgrade to &quot;Closed&quot;
              </h2>
              <p className="text-base leading-relaxed mb-5 text-slate-700">
                Converting a settled loan into a closed account requires navigating both banking operations and credit bureau dispute frameworks. Follow this rigorously tested 6-step legal protocol to achieve 100% status upgrade:
              </p>

              {/* Steps Accordion / Cards */}
              <div className="space-y-6 my-8">
                {/* Step 1 */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 md:p-6 hover:border-[#1F5EFF] transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-xl bg-[#1F5EFF] text-white font-black text-sm flex items-center justify-center shadow-sm">
                      1
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900">
                      Step 1: Conduct a Forensic Audit of Your Official Credit Information Report (CIR)
                    </h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed mb-3">
                    Obtain fresh, official Credit Information Reports from all four licensed credit bureaus: <strong>TransUnion CIBIL, Experian India, CRIF High Mark, and Equifax</strong>. Do not rely on third-party marketing apps that provide compressed summaries.
                  </p>
                  <ul className="space-y-2 text-xs md:text-sm text-slate-600 list-disc list-inside bg-white p-4 rounded-xl border border-slate-200">
                    <li>Isolate the exact <strong>Account Number</strong> and <strong>Member Reference ID</strong> of the settled facility.</li>
                    <li>Note the reported <strong>Current Balance</strong>, <strong>Amount Overdue</strong>, and <strong>Written-off Amount (Total vs. Principal)</strong>.</li>
                    <li>Verify whether the entry is tagged as &quot;Settled&quot;, &quot;Post-Write Off Settled&quot;, or mistakenly tagged as an active &quot;Written Off&quot; default.</li>
                  </ul>
                </div>

                {/* Step 2 */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 md:p-6 hover:border-[#1F5EFF] transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-xl bg-[#1F5EFF] text-white font-black text-sm flex items-center justify-center shadow-sm">
                      2
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900">
                      Step 2: Submit a Formal Written Application to the Bank&apos;s Stressed Asset / Nodal Department
                    </h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed mb-3">
                    Do not negotiate verbally with local branch executives or recovery agents. Draft a formal representation on legal stationery addressed to the bank&apos;s <strong>Stressed Assets Resolution Branch (SARB)</strong> and <strong>Principal Nodal Officer (PNO)</strong>.
                  </p>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs md:text-sm text-slate-700 leading-relaxed">
                    <strong>Application Crux:</strong> State that you entered into an OTS under agreement reference number [OTS Ref ID], fulfilled all terms, and now wish to voluntarily clear the residual waived balance in order to obtain a <em>Full &amp; Final Account Closure &amp; CIBIL Status Rectification</em>. Request an official calculation of the exact net balance.
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 md:p-6 hover:border-[#1F5EFF] transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-xl bg-[#1F5EFF] text-white font-black text-sm flex items-center justify-center shadow-sm">
                      3
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900">
                      Step 3: Negotiate Residual Waiver Terms &amp; Remit Payment via Verifiable Channels
                    </h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed mb-3">
                    Ensure the bank does not attempt to levy retroactive 24%–36% penal interest or late charges from the date of settlement. The payable figure must strictly be the <strong>net principal haircut and base contractual interest</strong> that was waived during the OTS.
                  </p>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Make the payment exclusively via <strong>NEFT / RTGS directly to your designated loan account number</strong> or via a Banker&apos;s Cheque made out to the bank. Retain the UTR confirmation number, stamped deposit challan, and digital bank debit statement.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 md:p-6 hover:border-[#1F5EFF] transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-xl bg-[#1F5EFF] text-white font-black text-sm flex items-center justify-center shadow-sm">
                      4
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900">
                      Step 4: Secure the Unconditional Full &amp; Final No Dues Certificate (NDC)
                    </h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed mb-3">
                    Within 7 to 15 working days of receipt of payment, the bank must issue an unconditional <strong>No Dues Certificate (NDC)</strong> or <strong>Full Closure Letter</strong> on official corporate letterhead, signed by an authorized branch officer with employee code and bank seal.
                  </p>
                  <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-xs md:text-sm text-emerald-900">
                    <strong>Mandatory NDC Clauses:</strong> The letter must explicitly state: (a) Account is closed in full; (b) Current outstanding balance is ₹0; (c) All claims and liens are extinguished; (d) The bank undertakes to report the status as &quot;CLOSED&quot; in its subsequent monthly bureau submission.
                  </div>
                </div>

                {/* Step 5 */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 md:p-6 hover:border-[#1F5EFF] transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-xl bg-[#1F5EFF] text-white font-black text-sm flex items-center justify-center shadow-sm">
                      5
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900">
                      Step 5: Monitor the Bank&apos;s 30-Day Mandatory Credit Bureau Data Submission
                    </h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Under Reserve Bank of India Master Directions, all commercial banks, regional rural banks, and NBFCs are mandated to upload updated borrower credit files to all four credit information companies at least once every month (typically on or before the 10th of each calendar month). Wait 30 to 45 days after receiving your NDC to allow this automated data pipeline to refresh.
                  </p>
                </div>

                {/* Step 6 */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 md:p-6 hover:border-[#1F5EFF] transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-xl bg-[#1F5EFF] text-white font-black text-sm flex items-center justify-center shadow-sm">
                      6
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900">
                      Step 6: File an Online CIBIL Dispute Resolution with NDC if the Record Fails to Update
                    </h3>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed mb-3">
                    If CIBIL continues reflecting &quot;Settled&quot; after 45 days, log into <code>cibil.com</code> and submit a formal dispute under the <strong>Dispute Resolution Section</strong>.
                  </p>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Select the affected account, choose &quot;Account Status Incorrect,&quot; upload clear PDF copies of your NDC and payment receipts, and submit. TransUnion CIBIL will assign a unique Dispute Control Number (DCN) and route the case directly to the bank&apos;s compliance cell for mandatory 30-day verification.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Cost-Benefit Analysis */}
            <section id="cost-benefit-analysis" className="scroll-mt-28 mb-12">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#1F5EFF] mb-2">
                <Percent className="w-4 h-4" />
                <span>Financial Decision Framework</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                4. Cost-Benefit Analysis: Should You Pay the Residual Amount or Rebuild Naturally?
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Upgrading your account from &quot;Settled&quot; to &quot;Closed&quot; requires paying real capital to your past lender. Is it always worth it? The answer depends entirely on your immediate financial goals, the size of the original haircut, and how much time has elapsed since the settlement.
              </p>

              {/* 4-Sided Bordered Comparison Table 2 */}
              <div className="overflow-x-auto my-6">
                <table>
                  <thead>
                    <tr>
                      <th className="w-1/3">Borrower Scenario</th>
                      <th className="w-1/3">Recommended Action</th>
                      <th className="w-1/3">Financial Rationale &amp; ROI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">
                        Planning a Home Loan (₹40L–₹2Cr+) within the next 6–18 months
                      </td>
                      <td className="text-emerald-700 font-bold">
                        Pay Residual Balance &amp; Convert to &quot;Closed&quot; Immediately
                      </td>
                      <td>
                        A &quot;Settled&quot; tag increases home loan interest rates by 1.25%–2.50% or causes outright rejection. Paying ₹1 Lakh–₹2 Lakh now saves ₹10 Lakh–₹30 Lakh in interest over a 20-year home loan.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">
                        Small Settlement Haircut (Waived amount under ₹40,000)
                      </td>
                      <td className="text-emerald-700 font-bold">
                        Pay Residual Balance &amp; Close Account
                      </td>
                      <td>
                        The nominal payment completely cleanses your bureau file and permanently restores prime banking relationships at negligible cost.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">
                        Government, PSU, or Financial Sector Career Background Checks
                      </td>
                      <td className="text-emerald-700 font-bold">
                        Pay Residual Balance &amp; Secure NDC
                      </td>
                      <td>
                        Institutions like RBI, SEBI, PSU banks, and defense contracts conduct strict CIR audits. A &quot;Settled&quot; or &quot;Written Off&quot; tag can trigger disqualification during vigilance clearance.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">
                        Large Haircut (Waived amount ₹5L–₹20L+) with NO immediate large borrowing plans
                      </td>
                      <td className="text-amber-700 font-bold">
                        Rebuild Naturally with Secured Credit Cards (Do NOT pay)
                      </td>
                      <td>
                        Paying large capital is financially inefficient if you only need modest credit. Rebuilding with an FD-backed card achieves a 750+ score in 18–24 months for zero extra payment.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">
                        Settlement occurred 5+ years ago (Nearing 7-year CICRA expiry)
                      </td>
                      <td className="text-slate-700 font-bold">
                        Wait for Natural 7-Year Bureau Purge
                      </td>
                      <td>
                        Under Section 21 of CICRA 2005, the record will automatically age out within 12–24 months. Capital is better allocated to investments or liquidity reserves.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Compact High-Impact Infographic Banner (Middle Content Placement) */}
            <div className="bg-white border-2 border-blue-200 rounded-3xl overflow-hidden shadow-lg my-10 text-slate-800">
              {/* Infographic Header Bar */}
              <div className="bg-[#0A2540] text-white py-3.5 px-5 flex items-center justify-between border-b-2 border-[#1F5EFF]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#1F5EFF] flex items-center justify-center text-white text-xs shadow-sm">
                    <Scale className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-300 block">
                      Executive Roadmap Summary
                    </span>
                    <h3 className="text-sm md:text-base font-black text-white leading-tight">
                      CIBIL Settled to Closed Status Upgrade Architecture
                    </h3>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-xs text-blue-200 bg-blue-900/60 px-3 py-1 rounded-full border border-blue-500/30">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>RBI Compliant Legal Protocol</span>
                </div>
              </div>

              {/* Sleek Compact Infographic Canvas */}
              <div className="p-4 md:p-6 bg-gradient-to-b from-slate-50 to-blue-50/40">
                {/* 4 Concise Horizontal Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-6">
                  {/* Pillar 1 */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-3.5 shadow-sm hover:border-[#1F5EFF] transition-all">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-6 h-6 rounded-lg bg-blue-100 text-[#1F5EFF] flex items-center justify-center font-black text-xs">
                        1
                      </div>
                      <h4 className="font-bold text-xs md:text-sm text-slate-900">Forensic Audit</h4>
                    </div>
                    <p className="text-[11px] md:text-xs text-slate-600 leading-snug">
                      Isolate loan account ID, verify written-off loss, and audit CIR across all 4 bureaus.
                    </p>
                  </div>

                  {/* Pillar 2 */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-3.5 shadow-sm hover:border-[#1F5EFF] transition-all">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-black text-xs">
                        2
                      </div>
                      <h4 className="font-bold text-xs md:text-sm text-slate-900">Balance Remittance</h4>
                    </div>
                    <p className="text-[11px] md:text-xs text-slate-600 leading-snug">
                      Negotiate zero penal interest and pay net waived principal via direct NEFT/RTGS.
                    </p>
                  </div>

                  {/* Pillar 3 */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-3.5 shadow-sm hover:border-[#1F5EFF] transition-all">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-black text-xs">
                        3
                      </div>
                      <h4 className="font-bold text-xs md:text-sm text-slate-900">Unconditional NDC</h4>
                    </div>
                    <p className="text-[11px] md:text-xs text-slate-600 leading-snug">
                      Secure official bank letterhead NDC explicitly certifying ₹0 balance &amp; &quot;Closed&quot; status.
                    </p>
                  </div>

                  {/* Pillar 4 */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-3.5 shadow-sm hover:border-[#1F5EFF] transition-all">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-6 h-6 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-black text-xs">
                        4
                      </div>
                      <h4 className="font-bold text-xs md:text-sm text-slate-900">Bureau Rectification</h4>
                    </div>
                    <p className="text-[11px] md:text-xs text-slate-600 leading-snug">
                      Automated 30-day bank upload or CIBIL DCN dispute escalation to reach 750+ score.
                    </p>
                  </div>
                </div>

                {/* Horizontal Milestone Progress Line */}
                <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm mb-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center justify-between">
                    <span>Statutory Execution Timeline</span>
                    <span className="text-[#1F5EFF] font-bold">Standard Duration: 30 to 45 Days Total</span>
                  </div>
                  <div className="relative flex items-center justify-between">
                    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-slate-100 rounded-full z-0"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-6 h-6 rounded-full bg-[#1F5EFF] text-white text-[10px] font-bold flex items-center justify-center mx-auto mb-1">
                        D1
                      </div>
                      <span className="text-[10px] font-semibold text-slate-700 block">Audit &amp; Filing</span>
                    </div>
                    <div className="relative z-10 text-center">
                      <div className="w-6 h-6 rounded-full bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center mx-auto mb-1">
                        D15
                      </div>
                      <span className="text-[10px] font-semibold text-slate-700 block">Balance Payment</span>
                    </div>
                    <div className="relative z-10 text-center">
                      <div className="w-6 h-6 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center mx-auto mb-1">
                        D30
                      </div>
                      <span className="text-[10px] font-semibold text-slate-700 block">NDC Issued</span>
                    </div>
                    <div className="relative z-10 text-center">
                      <div className="w-6 h-6 rounded-full bg-amber-600 text-white text-[10px] font-bold flex items-center justify-center mx-auto mb-1">
                        D45
                      </div>
                      <span className="text-[10px] font-semibold text-slate-700 block">CIBIL &quot;Closed&quot;</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Crux Footer Strip with CTA */}
              <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>Core Rule:</strong> Zero penal interest &bull; Verifiable Bank NDC &bull; Permanent algorithmic clearance</span>
                </div>
                <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline flex items-center gap-1">
                  <span>Get Free Settlement Status Evaluation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Section 5: Fake Scams vs Legal Facts */}
            <section id="cibil-scams-vs-legal-reality" className="scroll-mt-28 mb-12">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-red-600 mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>Consumer Fraud Awareness &amp; Cyber Protection</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                5. Beware of &quot;CIBIL Clearance Agents&quot; — Fake Scams vs. Legal Reality
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                The desperation to remove a &quot;Settled&quot; mark has spawned a thriving black market of cyber fraudsters on WhatsApp, Telegram, and deceptive social media advertisements pretending to be &quot;CIBIL Officers,&quot; &quot;Credit Score Hackers,&quot; or &quot;Guaranteed Negative Remark Erasers.&quot;
              </p>

              {/* 4-Sided Bordered Comparison Table 3 */}
              <div className="overflow-x-auto my-6">
                <table>
                  <thead>
                    <tr>
                      <th className="w-1/3">Evaluation Factor</th>
                      <th className="w-1/3 text-emerald-800">Legitimate Legal Banking Route (SettleLoans)</th>
                      <th className="w-1/3 text-red-800">Fraudulent &quot;CIBIL Clearing Agent&quot; Scams</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Mechanism Used</td>
                      <td>Direct settlement reversal petition with bank Stressed Assets branch and PNO.</td>
                      <td>Fictitious promises of &quot;database hacking,&quot; &quot;insider bureau access,&quot; or forged letters.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Payment Recipient</td>
                      <td>100% of residual balance paid directly to the lending bank&apos;s verified loan account.</td>
                      <td>Demands upfront cash or UPI transfers to personal accounts / anonymous crypto wallets.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Legal Documentation</td>
                      <td>Official bank NDC on corporate letterhead + verified bureau DCN reference number.</td>
                      <td>Provides photoshopped PDF screenshots that vanish upon actual bureau refresh.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Bureau Compliance</td>
                      <td>100% Compliant with RBI Master Directions &amp; Section 21 of CICRA 2005.</td>
                      <td>Illegal under Indian Penal Code (IPC 420 for fraud) and IT Act Section 66.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Long-term Validity</td>
                      <td>Permanent status update to &quot;Closed&quot; recognized by all Indian financial institutions.</td>
                      <td>Zero change on official bureau servers; borrower loses fees and remains blocked.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 my-6 text-slate-800">
                <h4 className="font-bold text-amber-900 text-sm md:text-base mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  Golden Rule of Credit Bureau Integrity
                </h4>
                <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                  Neither TransUnion CIBIL nor any lawyer, advocate, or agency has administrative access to manually edit, delete, or alter your payment history. Credit bureaus are strictly repository engines. <strong>Data is updated exclusively when the regulated lending institution transmits an encrypted, authenticated monthly batch feed.</strong> Any entity promising to &quot;delete&quot; a remark without bank clearance is committing criminal fraud.
                </p>
              </div>
            </section>

            {/* Section 6: RBI Ombudsman Escalation */}
            <section id="rbi-ombudsman-escalation" className="scroll-mt-28 mb-12">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#1F5EFF] mb-2">
                <Building2 className="w-4 h-4" />
                <span>Statutory Dispute Escalation</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                6. What to Do If the Bank Refuses or Delays Updating CIBIL (RBI Ombudsman Rights)
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                In many instances, borrowers dutifully pay the full settlement or residual balance, yet the branch staff fails to update the back-office Core Banking System (CBS) or omits uploading the revised status during the monthly bureau run. If you find yourself in this deadlock, Indian banking law provides powerful statutory recourse.
              </p>

              {/* Escalation Hierarchy */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#1F5EFF] mb-1">Tier 1</div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">Principal Nodal Officer (PNO)</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Escalate via registered email to the bank&apos;s Principal Nodal Officer citing your payment UTR and NDC. Banks are mandated to respond within 14 working days.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#1F5EFF] mb-1">Tier 2</div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">CIBIL Online Dispute (DCN)</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File an official dispute on <code>cibil.com</code>. The bureau independently triggers a 30-day notice to the bank&apos;s central credit reporting division.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">Tier 3</div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">RBI Integrated Ombudsman</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lodge a complaint on the RBI CMS Portal (<code>cms.rbi.org.in</code>) under Clause 10 for deficiency in credit information reporting.
                  </p>
                </div>
              </div>

              {/* RBI Compensation Callout */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 my-6 text-slate-800">
                <h4 className="font-bold text-[#1F5EFF] text-base mb-2 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Statutory Compensation: ₹100 Per Day for Unresolved Credit Reporting Delays
                </h4>
                <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                  Under RBI circular <strong>RBI/2023-24/72 (Framework for Compensation to Customers for Delayed Updation of Credit Information)</strong>, if a regulated bank or credit bureau fails to resolve a credit misreporting grievance or update a verified closure within <strong>30 calendar days</strong> of receiving a formal dispute, the institution is legally obligated to pay compensation of <strong>₹100 per calendar day</strong> directly into the borrower&apos;s bank account until the record is rectified.
                </p>
              </div>
            </section>

            {/* Section 7: Credit Score Rebuilding Plan */}
            <section id="credit-score-rebuilding-plan" className="scroll-mt-28 mb-12">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>Score Rehabilitation Blueprint</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 leading-tight">
                7. Step-by-Step Blueprint to Rebuild Your CIBIL Score to 750+ Post-Closure
              </h2>
              <p className="text-base leading-relaxed mb-4 text-slate-700">
                Whether you have successfully upgraded your account to &quot;Closed&quot; or are waiting out the post-settlement seasoning period, you must actively inject positive payment data to accelerate your credit score recovery. Follow this proven 4-pillar rehabilitation roadmap:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#1F5EFF] flex items-center justify-center flex-shrink-0 font-bold">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      1. Open a Fixed Deposit (FD)-Backed Secured Credit Card
                    </h4>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      Apply for an instant secured credit card against a term deposit of ₹25,000 to ₹50,000 (e.g., IDFC FIRST WOW, Kotak 811 Dream Different, or OneCard). Because these cards require zero CIBIL checks or income proof, approval is guaranteed. They report monthly active repayment data to all 4 credit bureaus.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0 font-bold">
                    <Percent className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      2. Strictly Enforce the 30% Credit Utilization Ratio (CUR) Rule
                    </h4>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      Never utilize more than 30% of your available card limit in any single billing cycle. For example, on a ₹50,000 limit card, ensure your monthly statement balance remains under ₹15,000. Low credit utilization signals financial discipline to bureau algorithms.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 font-bold">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      3. Automate 100% On-Time Full Bill Payments 5 Days in Advance
                    </h4>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      Never pay just the &quot;Minimum Amount Due&quot; (MAD), which triggers 42% annualized interest and high revolving debt flags. Set up automated auto-debit for the Total Amount Due at least 5 business days prior to the payment due date to prevent technical bounce errors.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 font-bold">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      4. Avoid Multiple Hard Inquiries for Unsecured Loans
                    </h4>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      Every rejected personal loan or credit card application generates a &quot;Hard Inquiry&quot; on your CIR, shaving 5 to 10 points off your score and branding you as &quot;credit hungry.&quot; Refrain from applying for any unsecured loans for at least 12 to 18 months while your score rebuilds.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: FAQ Accordion */}
            <CompanySection />

            <section id="faqs" className="scroll-mt-28 mb-14">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#1F5EFF] mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>Expert Verification &amp; Answers</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                8. Frequently Asked Questions (FAQ)
              </h2>
              <p className="text-base leading-relaxed mb-8 text-slate-600">
                Clear, definitive legal answers to the most common questions regarding loan settlements, CIBIL disputes, and account closure upgrades.
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

            {/* Regulatory Sources & References (Exactly 5 Official Links) */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                <Landmark className="w-4 h-4 text-[#1F5EFF]" />
                <span>Official Regulatory Sources &amp; Statutory References</span>
              </h4>
              <ul className="space-y-2.5 text-xs md:text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    Reserve Bank of India (RBI) — Master Directions on Compromise Settlements &amp; Customer Protection
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    TransUnion CIBIL — Credit Information Companies (Regulation) Act, 2005 Dispute Guidelines
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
                    Supreme Court of India — Landmark Jurisprudence on Fair Practices Code &amp; Recovery Ethics
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://ibbi.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    Insolvency and Bankruptcy Board of India (IBBI) — Individual Debt Resolution Standards
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0" />
                  <a
                    href="https://ecourts.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    eCourts Services — National Judicial Data Grid for Debt Recovery Matters &amp; Lok Adalat Awards
                  </a>
                </li>
              </ul>
            </div>

            {/* Internal Topic Badges (10 Links) */}
            <div className="my-10 pt-6 border-t border-slate-200">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
                Related Debt Resolution &amp; CIBIL Recovery Guides
              </h4>
              <div className="flex flex-wrap gap-2">
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
                  href="/cibil-dispute-wrong-overdue-entry-filing-process"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  CIBIL Wrong Overdue Dispute Process
                </Link>
                <Link
                  href="/how-to-improve-cibil-score-after-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Improve CIBIL Score After Settlement
                </Link>
                <Link
                  href="/how-to-remove-written-off-status-from-cibil-report-in-india"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Remove Written-Off Status from CIBIL
                </Link>
                <Link
                  href="/credit-card-settlement-process"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Credit Card Settlement Process
                </Link>
                <Link
                  href="/rbi-rules-for-recovery-agents"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  RBI Rules for Recovery Agents
                </Link>
                <Link
                  href="/lok-adalat-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Lok Adalat Loan Settlement
                </Link>
                <Link
                  href="/legal-notice-for-loan-default"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Legal Notice for Loan Default
                </Link>
                <Link
                  href="/loan-penalty-waiver-request"
                  className="py-2 px-3.5 rounded-full bg-slate-100 hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200"
                >
                  Loan Penalty Waiver Request
                </Link>
              </div>
            </div>
          </main>

          {/* Right Column: Dedicated Track containing Author Bio, Emergency CTA, and Trust Signals */}
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
                Ashish specializes in distressed debt restructuring, RBI banking ombudsman escalations, and CIBIL forensic status corrections for individual borrowers across India.
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
                <span>Emergency Advocate Assistance</span>
              </div>
              <h3 className="text-xl font-black mb-3 leading-tight">
                Need Help Converting Settled to Closed Status?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Our empaneled banking advocates coordinate directly with bank nodal officers to calculate your net residual balance, eliminate penal charges, and obtain your unconditional No Dues Certificate.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white hover:bg-slate-100 text-[#1F5EFF] font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 shadow"
              >
                Talk to a Legal Advocate
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
                    <strong>Direct Bank Resolutions:</strong> All settlements and status upgrades processed directly through official bank nodal heads.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>₹0 NDC Guarantee:</strong> We ensure you receive an authentic, verified No Dues Certificate on corporate bank letterhead.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>RBI Ombudsman Escalation:</strong> Statutory legal recourse under Clause 10 if lenders delay bureau updates beyond 30 days.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero Scams Policy:</strong> 100% legal, transparent advisory with zero false claims of backend database deletion.
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
