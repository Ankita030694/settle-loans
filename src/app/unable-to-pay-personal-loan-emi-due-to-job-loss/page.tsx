import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';
import SidebarTOC from '@/components/SidebarTOC';
import LoanSettlementAssessmentFunnel from '@/components/LoanSettlementAssessmentFunnel';
import {
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  ChevronDown,
  Calendar,
  Award,
  PhoneCall,
  ExternalLink,
  Lock,
  ShieldAlert,
  Scale,
  FileText,
  CheckCircle2,
  Calculator,
  FileCheck,
  UserCheck,
  Wallet,
  Briefcase,
  Clock
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Unable to Pay Loan EMI After Job Loss | SettleLoans',
  description: 'Laid off and unable to pay personal loan EMIs? Follow our 90-day salaried plan: protect F&F severance, stop NACH bounces, and weigh ₹3L+ settlement.',
  keywords: [
    'unable to pay personal loan emi due to job loss',
    'lost job cannot pay personal loan emi india',
    'protect full and final settlement from bank loan auto debit',
    'personal loan moratorium after layoff india',
    'job loss insurance on personal loan claim',
    'stop nach mandate after job loss',
    'epf withdrawal to pay personal loan trap',
    'first 90 days after layoff personal loan default'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/unable-to-pay-personal-loan-emi-due-to-job-loss',
  },
  openGraph: {
    title: 'Unable to Pay Loan EMI After Job Loss | SettleLoans',
    description: 'Laid off and unable to pay personal loan EMIs? Follow our 90-day salaried plan: protect F&F severance, stop NACH bounces, and weigh ₹3L+ settlement.',
    url: 'https://www.settleloans.in/unable-to-pay-personal-loan-emi-due-to-job-loss',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/cannot-pay-personal-loan-emi.jpg',
        width: 1200,
        height: 675,
        alt: 'Unable to Pay Personal Loan EMI Due to Job Loss 90-Day Salaried Triage Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unable to Pay Loan EMI After Job Loss | SettleLoans',
    description: 'Laid off and unable to pay personal loan EMIs? Follow our 90-day salaried plan: protect F&F severance, stop NACH bounces, and weigh ₹3L+ settlement.',
    images: ['https://www.settleloans.in/images/infographics/cannot-pay-personal-loan-emi.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.settleloans.in/unable-to-pay-personal-loan-emi-due-to-job-loss#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.settleloans.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Salaried Loan Settlement",
          "item": "https://www.settleloans.in/loan-settlement-for-salaried-people"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Unable to Pay Personal Loan EMI Due to Job Loss",
          "item": "https://www.settleloans.in/unable-to-pay-personal-loan-emi-due-to-job-loss"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/unable-to-pay-personal-loan-emi-due-to-job-loss#article",
      "headline": "Unable to Pay Personal Loan EMI Due to Job Loss: 90-Day Plan",
      "description": "Immediate Day 1 to Day 90 financial and legal triage guide for laid-off salaried employees in India who cannot pay personal loan EMIs. Covers Full and Final (F&F) severance protection from same-bank auto-debit sweeps, credit shield insurance claims, lawful NACH mandate pauses, EPF preservation, and choosing between pre-NPA restructuring and ₹3L+ settlement.",
      "image": "https://www.settleloans.in/images/infographics/cannot-pay-personal-loan-emi.jpg",
      "datePublished": "2026-11-11T11:00:00+05:30",
      "dateModified": "2026-11-11T11:00:00+05:30",
      "mainEntityOfPage": "https://www.settleloans.in/unable-to-pay-personal-loan-emi-due-to-job-loss",
      "author": {
        "@type": "Person",
        "name": "Ashish Jhangra",
        "url": "https://www.settleloans.in/authors/ashish-jhangra"
      },
      "publisher": {
        "@type": "Organization",
        "name": "SettleLoans",
        "url": "https://www.settleloans.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.settleloans.in/logo/logo.svg"
        }
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.settleloans.in/unable-to-pay-personal-loan-emi-due-to-job-loss#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What should I do in the first 7 days after losing my job if I have active personal loan EMIs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Before your last working day, audit every active loan and auto-debit date, check your Key Fact Statement for bundled involuntary job-loss insurance, request HR payroll to route your upcoming Full and Final (F&F) settlement into an unlinked savings account where you owe zero debt, and calculate your household survival runway before paying another routine EMI."
          }
        },
        {
          "@type": "Question",
          "name": "Can my salary bank absorb my entire Full and Final (F&F) severance payout toward overdue personal loan EMIs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, if your Corporate Salary Account and personal loan sit under the same bank Customer ID and your account already carries overdue instalments or a Hold Balance, an incoming F&F credit of Rs. 2 Lakhs to Rs. 5 Lakhs can be swept automatically within seconds. Lawfully updating your F&F payout bank account with HR before payroll closure prevents unilateral set-off of household emergency funds."
          }
        },
        {
          "@type": "Question",
          "name": "Do Indian banks grant an automatic EMI holiday or moratorium when a salaried borrower is laid off?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Unlike the temporary statutory COVID-19 moratorium of 2020, there is no automatic statutory EMI holiday for individual job loss in India. Any 3-to-6-month EMI moratorium or tenure extension is purely discretionary under the lender's RBI-approved stressed asset resolution policy and typically requires you to apply while the loan is still standard (0 to 30 days past due)."
          }
        },
        {
          "@type": "Question",
          "name": "Should I withdraw my EPF balance to keep paying personal loan EMIs while unemployed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In most high-debt layoffs, draining your Employees' Provident Fund to pay 3 or 4 regular EMIs without closing the principal is a costly mistake. Under Section 10 of the EPF Act, 1952, statutory provident fund balances enjoy strong legal protection against civil attachment for unsecured commercial debt. Burning retirement savings only to default in Month 5 leaves you with both a damaged CIBIL score and zero cash to fund a One-Time Settlement later."
          }
        },
        {
          "@type": "Question",
          "name": "How do I check if my personal loan includes involuntary job-loss insurance coverage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Inspect your sanction letter, Key Fact Statement, and disbursement welcome kit for single-premium Group Credit Shield, Loan Protect, or Critical Illness plus Job Loss policies sold by insurers partnered with HDFC, ICICI, Axis, Kotak, or Bajaj Finance. Most policies cover 3 monthly EMIs upon documented company downsizing or retrenchment (excluding voluntary resignation or termination for misconduct), provided you intimate the insurer within 15 to 30 days."
          }
        },
        {
          "@type": "Question",
          "name": "What happens during SMA-0, SMA-1, and SMA-2 in the first 90 days of missing personal loan EMIs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI prudential norms, missing an EMI places the loan in SMA-0 (1 to 30 days past due), SMA-1 (31 to 60 days past due), and SMA-2 (61 to 90 days past due). During these 90 days, automated NACH re-presentations, bounce fees (Rs. 250 to Rs. 1,200 per dishonour), non-capitalized penal charges, and tele-collection calls escalate until the account turns into a Non-Performing Asset (NPA) past Day 90."
          }
        },
        {
          "@type": "Question",
          "name": "Is stopping my NACH auto-debit after a layoff treated as a criminal offence under Section 25 of PASSA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unability to pay due to genuine involuntary job loss is fundamentally a civil breach, though lenders sometimes issue automated Section 25 Payment and Settlement Systems Act demand notices after an electronic mandate dishonours for insufficient funds. Sending a proactive written hardship notice attaching your relieving or layoff letter before the debit date establishes good faith and prevents repeated Rs. 500-plus bank return charges."
          }
        },
        {
          "@type": "Question",
          "name": "When is RBI loan restructuring better than One-Time Settlement after losing a salaried job?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pre-NPA restructuring (tenure extension or temporary step-down EMI) works best when your total unsecured debt is modest, you already hold a confirmed new job offer starting within 30 to 60 days at comparable CTC, and you want to avoid a 'Settled' remark. Conversely, if unemployment stretches beyond 90 days or combined unsecured debt exceeds Rs. 3 Lakhs with no near-term income parity, One-Time Settlement becomes more viable."
          }
        },
        {
          "@type": "Question",
          "name": "Should I take a gold loan, spouse loan, or instant app loan to pay personal loan EMIs during unemployment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Never borrow from short-tenure digital lending apps or pledge household gold merely to pay 1 or 2 monthly instalments on an unsecured personal loan. Converting unsecured debt into secured gold debt risks permanent auction of family jewellery if your job search takes 6 months, while app loans trigger severe repayment spirals."
          }
        },
        {
          "@type": "Question",
          "name": "Can bank recovery agents call my former HR manager or new prospective employer during my job search?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. RBI recovery conduct rules strictly forbid lenders and third-party recovery agencies from contacting your former HR, colleagues, professional references, or prospective employers, or shaming you on LinkedIn and WhatsApp. Furthermore, RBI's updated recovery conduct directions taking effect on 1 January 2027 reinforce strict contact-hour limits (8:00 AM to 7:00 PM) and borrower privacy safeguards."
          }
        },
        {
          "@type": "Question",
          "name": "At what stage will a bank agree to a One-Time Settlement if my layoff lasts more than 3 months?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Banks and NBFCs rarely approve deep principal haircuts in Month 1 or Month 2 while the loan is still classified as a standard SMA account. Once the personal loan crosses 90 days past due (NPA) and you submit your termination letter, bank statement showing stopped salary credits, and severance exhaustion proof, realistic One-Time Settlements often fall between 35% and 60% of total claimed dues, never guaranteed."
          }
        },
        {
          "@type": "Question",
          "name": "What documents should I collect from HR before losing access to my corporate email?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Download and forward to your personal email: your official layoff/retrenchment notice or relieving letter, last 6 months' salary slips, latest Form 16 (Part A and Part B), Full and Final (F&F) computation sheet, group health insurance portability details, and HR payroll acknowledgement of any bank account update."
          }
        }
      ]
    }
  ]
};

const tocItems = [
  { id: 'first-72-hours', title: '1. First 72 Hours After Layoff Notice' },
  { id: 'protect-fnf-severance', title: '2. Protecting Full & Final (F&F) Payouts' },
  { id: 'credit-shield-audit', title: '3. Job-Loss Credit Shield Insurance Audit' },
  { id: 'day-1-to-90-timeline', title: '4. Day 1 to Day 90 SMA & Charge Timeline' },
  { id: 'pause-nach-bounces', title: '5. Stopping Multi-Bank NACH Bounce Loops' },
  { id: 'epf-gold-loan-traps', title: '6. Why Draining EPF or Gold Is a Trap' },
  { id: 'restructure-vs-ots-fork', title: '7. Pre-NPA Restructuring vs ₹3L+ Settlement' },
  { id: 'hardship-notice-protocol', title: '8. Written Layoff Intimation to Lenders' },
  { id: 'recovery-privacy-shield', title: '9. RBI Workplace & LinkedIn Privacy Rules' },
  { id: 'post-90-day-transition', title: '10. Transitioning Past 90 DPD Into OTS' },
  { id: 'company-resolution-section', title: '11. SettleLoans Salaried Layoff Support' },
  { id: 'faqs', title: '12. Frequently Asked Questions' },
];

export default function UnableToPayPersonalLoanEmiJobLossPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-[#1F5EFF] selection:text-white font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      <style dangerouslySetInnerHTML={{ __html: `
        .blog-content table {
          width: 100%;
          border-collapse: separate !important;
          border-spacing: 0 !important;
          border-radius: 12px !important;
          border: 1px solid #CBD5E1 !important;
          overflow: hidden !important;
          margin: 1.75rem 0;
          font-size: 0.92em;
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
          vertical-align: top;
        }
        .blog-content td:last-child {
          border-right: none;
        }
        .blog-content tr:last-child td {
          border-bottom: none;
        }
      `}} />

      {/* Hero Section */}
      <section
        className="w-full border-b border-slate-700/80 pt-8 pb-7 md:pt-12 md:pb-9 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-indigo-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-4 tracking-wider uppercase">
            <Clock className="w-3.5 h-3.5" />
            <span>First 90-Day Salaried Layoff Triage • F&amp;F &amp; EMI Defense</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Unable to Pay Personal Loan EMI Due to Job Loss: 90-Day Plan
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-5">
            Just received a layoff or workforce reduction notice with active personal loan EMIs? Follow this Day 1 to Day 90 salaried survival blueprint to shield your Full &amp; Final (F&amp;F) payout from auto-debit sweeps, claim hidden job-loss insurance, stop NACH bounce spirals, and choose between RBI restructuring and ₹3L+ settlement.
          </p>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-3 mb-5 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Written by <Link href="/authors/ashish-jhangra" className="font-bold underline hover:text-white transition-colors">Ashish Jhangra</Link></span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Checked: 11 November 2026</span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Salaried Triage Verified</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#settlement-assessment"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Evaluate ₹3L+ Layoff Relief Options</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Protect My F&amp;F Severance
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb Bar */}
      <div className="w-full bg-slate-50 border-b border-slate-200 overflow-x-auto whitespace-nowrap">
        <div className="max-w-[1720px] mx-auto px-4 md:px-8 py-3">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-xs text-slate-600">
              <li><Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link></li>
              <li><span className="text-slate-300">/</span></li>
              <li><Link href="/loan-settlement-for-salaried-people" className="hover:text-[#1F5EFF] transition-colors">Salaried Loan Settlement</Link></li>
              <li><span className="text-slate-300">/</span></li>
              <li className="font-bold text-slate-900" aria-current="page">Unable to Pay Personal Loan EMI Due to Job Loss</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Stats Strip */}
      <StatsStrip />

      {/* 3-Column Grid */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">

          {/* Left Sidebar (zero heading tags) */}
          <aside className="w-full lg:sticky lg:top-24 space-y-4">
            <SidebarTOC items={tocItems} />

            <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>Salaried Case Floor: ₹3,00,000</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                SettleLoans represents laid-off salaried professionals whose combined unsecured debt across personal loans, top-ups, credit cards, and app loans is ₹3 Lakhs or above. If your total loan balance is under ₹3L, use the self-help restructuring and F&amp;F protection steps in Sections 2, 5, and 8.
              </p>
            </div>
          </aside>

          {/* Main Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">

            {/* Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Immediate 90-Day Layoff Triage Summary</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Shield Your F&amp;F Before LWD:</strong> If your Personal Loan and Corporate Salary Account sit at the same bank (HDFC, ICICI, Axis, Kotak, or SBI), request HR to credit your Full &amp; Final severance, leave encashment, and notice pay into an unlinked bank account before payroll locks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Check Bundled Credit Shield Within 30 Days:</strong> Many salaried personal loans silently bundle single-premium Group Credit Life plus Involuntary Job Loss cover paying up to 3 EMIs on documented company retrenchment, provided you claim within 15 to 30 days.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Never Drain EPF for Partial EMIs:</strong> Providential balances under Section 10 of the EPF Act, 1952 are statutorily shielded from unsecured civil attachment. Emptying PF to pay 3 regular EMIs without closing the loan leaves you broke when NPA negotiations actually begin.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Day 1 to Day 90 Fork:</strong> Apply for pre-NPA RBI tenure restructuring before Day 30 if a new job offer is imminent; otherwise preserve cash through SMA-0/1/2 to fund a realistic post-90-DPD One-Time Settlement on ₹3L+ debt stacks.</span>
                </li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="first-72-hours" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. What Happens in the First 72 Hours After a Salaried Layoff
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an IT services major, global capability centre (GCC), funded startup, or mid-market corporate announces a workforce reduction, most salaried employees make their costliest financial error in the very first week. Out of habit and fear of a single CIBIL blemish, laid-off professionals let next month&apos;s personal loan EMIs auto-debit normally out of their remaining savings and severance buffer, assuming they will land a comparable CTC role within 30 days.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In India&apos;s mid-to-senior hiring market, background verification, multi-round technical loops, and joining windows routinely stretch 90 to 180 days. If your household rent, school fees, utilities, and groceries cost Rs. 55,000 per month and you also carry Rs. 62,000 in combined personal loan EMIs across two or three lenders, allowing automatic debits to run unchecked drains Rs. 1.86 Lakhs of irreplaceable cash in 90 days without reducing your loan principal by even 10%.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Unlike post-default guides that start 6 months after unemployment (covered separately in our <Link href="/job-loss-loan-settlement-process" className="text-[#1F5EFF] font-semibold underline">post-NPA job-loss settlement dossier guide</Link>), this page focuses exclusively on your <strong>first 90 days from the moment HR communicates your last working day (LWD)</strong>. Before your corporate SSO login and HRMS portal access are revoked, download and store offline:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li><strong>Official Termination / Workforce Reduction / Relieving Communication:</strong> Save the exact email or HR letter confirming redundancy, role elimination, or business restructuring (even if HR asks for a mutual separation resignation format, preserve the preceding HR email trail or severance calculation sheet).</li>
                <li><strong>Last 6 Months&apos; Payslips &amp; Latest Form 16 (Part A &amp; B):</strong> Banks require these to verify baseline pre-layoff income during both restructuring and future settlement underwriting.</li>
                <li><strong>Full &amp; Final (F&amp;F) Settlement Breakdown &amp; Payout Date:</strong> Confirm whether notice pay buyout, earned leave encashment, ex-gratia severance, and gratuity (if 5+ years of service) will be credited with your final payroll or 30 to 45 days after LWD.</li>
                <li><strong>Complete Loan &amp; Mandate Ledger:</strong> List every personal loan lender, outstanding principal, EMI date (typically 2nd, 5th, 7th, or 10th), and whether repayment uses an intra-bank Standing Instruction (SI) or an external NPCI NACH mandate.</li>
              </ul>
            </section>

            {/* Salaried Combined-Debt Assessment Framing + Funnel */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider">
                <Wallet className="w-4 h-4" />
                <span>Laid-Off Salaried Debt Check (₹3,00,000 Combined Minimum)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                During unemployment, resolving one personal loan while leaving credit cards or top-up loans unaddressed creates fragmented legal notices. Enter your <strong>total combined unsecured debt</strong> across all personal loans, credit cards, and digital lenders below (structured representation and settlement planning begin at <strong>₹3 Lakhs and above</strong>).
              </p>
            </div>

            <LoanSettlementAssessmentFunnel />

            {/* Section 2 */}
            <section id="protect-fnf-severance" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Protecting Your Full &amp; Final (F&amp;F) Payout From Auto-Debit Sweeps
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The single largest lump sum a laid-off employee receives is the Full &amp; Final (F&amp;F) credit. For a mid-level manager or senior engineer, notice-period buyout (60 to 90 days), 30 to 45 days of earned leave encashment, variable pay pro-rata, and severance ex-gratia frequently total <strong>Rs. 2,50,000 to Rs. 8,00,000</strong>. That corpus is simultaneously your family&apos;s 6-month rent and medical lifeline <em>and</em> your future lump-sum ammunition if you eventually negotiate a One-Time Settlement.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Here is the hidden trap: companies normally release F&amp;F 30 to 45 days after your Last Working Day. By Day 45 after LWD, you have already missed one or two monthly EMIs on your pre-approved salary-bank personal loan. If your Corporate Salary Account and your personal loan are held at the <strong>same bank</strong>, the lender&apos;s core banking software places a shadow Hold Balance or automated right-of-set-off flag on your savings ledger. The instant HR wires Rs. 3.5 Lakhs of F&amp;F into that linked account, the bank can sweep all overdue EMIs, bounce charges, and penal fees, or freeze the account pending total loan recall.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-2">
                <div className="flex items-center gap-2 text-amber-950 font-bold text-sm">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Pre-LWD HR Payroll Action Checklist</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                  Before your exit clearance is signed on Workday, Darwinbox, SAP SuccessFactors, or Keka, submit a formal bank account update ticket with a cancelled cheque of a <strong>clean savings account at a bank where you hold zero loans or credit cards</strong>. Specifically ask HR Payroll &amp; Exit Operations in writing to route both your final month&apos;s salary and post-exit F&amp;F settlement to the updated bank account. If your loan sits with a specific payroll bank, review our dedicated mechanics for <Link href="/hdfc-salary-account-auto-debit-personal-loan-default" className="underline font-bold">HDFC salary accounts</Link>, <Link href="/icici-salary-account-auto-debit-personal-loan-default" className="underline font-bold">ICICI salary accounts</Link>, <Link href="/axis-salary-account-auto-debit-personal-loan-default" className="underline font-bold">Axis salary accounts</Link>, <Link href="/kotak-salary-account-auto-debit-personal-loan-default" className="underline font-bold">Kotak salary accounts</Link>, and <Link href="/sbi-salary-account-auto-debit-personal-loan-default" className="underline font-bold">SBI salary package accounts</Link>.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="credit-shield-audit" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Check Your Loan Kit for Bundled Job-Loss Insurance Within 30 Days
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Over 40% of salaried personal loans disbursed at branches or through relationship managers over the last four years included a bundled single-premium insurance add-on (often Rs. 6,000 to Rs. 28,000 financed into the loan principal) marketed as &quot;Loan Protect&quot;, &quot;Group Credit Shield&quot;, or &quot;Sarv Suraksha&quot;. Borrowers routinely forget this policy exists because the premium was deducted upfront on Day 1 of disbursement.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Pull your original personal loan disbursement email, Key Fact Statement (KFS), and Certificate of Insurance (COI) from insurers such as HDFC ERGO, ICICI Lombard, Bajaj Allianz, Axis Max Life, or Kotak General Insurance. Check specifically for the <strong>Involuntary Loss of Job (ILOJ)</strong> benefit rider:
              </p>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Policy Parameter</th>
                      <th>Typical Covered Scenario</th>
                      <th>Common Exclusions &amp; Strict Deadlines</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Payout Benefit</strong></td>
                      <td>Pays <strong>up to 3 consecutive Personal Loan EMIs</strong> directly to the lender (or reimburses the insured borrower) during certified involuntary unemployment.</td>
                      <td>Does not extinguish the entire loan principal (full principal payoff applies only to death or permanent total disability).</td>
                    </tr>
                    <tr>
                      <td><strong>Qualifying Trigger</strong></td>
                      <td>Documented company downsizing, layoff, retrenchment, unit closure, merger redundancy, or cost-cutting workforce reduction of a permanent salaried employee.</td>
                      <td>Strictly excludes voluntary resignation without HR redundancy proof, probation non-confirmation, contract expiry, or termination for misconduct/PIP fraud.</td>
                    </tr>
                    <tr>
                      <td><strong>Waiting &amp; Claim Window</strong></td>
                      <td>Usually requires a 90-day initial policy waiting period from loan disbursal and 30 continuous days of post-exit unemployment.</td>
                      <td><strong>Intimation deadline is typically 15 to 30 days from termination notice.</strong> Missing this window forfeits 3 free EMIs worth Rs. 45,000 to Rs. 1.2 Lakhs!</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Even if HR asked you to submit a portal resignation in exchange for severance pay, check whether your separation agreement or HR email explicitly mentions &quot;position elimination&quot; or &quot;workforce restructuring&quot;, as insurers examine the true cause of exit when adjudicating ILOJ claims.
              </p>
            </section>

            {/* Section 4 */}
            <section id="day-1-to-90-timeline" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Day 1 to Day 90 Delinquency Timeline: SMA-0, SMA-1, SMA-2 &amp; NPA
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Understanding how Indian banks and NBFCs classify missed salaried EMIs under Reserve Bank of India prudential norms eliminates panic when automated SMS warnings begin arriving. Your loan does not turn into a Non-Performing Asset overnight on the 6th of the month. Instead, it progresses through three structured 30-day Special Mention Account (SMA) stages:
              </p>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Days Past Due (DPD)</th>
                      <th>RBI Classification</th>
                      <th>Bank Collection &amp; Charge Activity (Checked 11 Nov 2026)</th>
                      <th>Optimal Salaried Borrower Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Day 0 (Pre-Default)</strong></td>
                      <td>Standard Account</td>
                      <td>Zero overdue fees. Highest lender willingness to evaluate formal tenure extension or temporary EMI restructuring.</td>
                      <td>Secure F&amp;F bank shift; check credit shield; decide Restructuring vs Cash-Preservation path.</td>
                    </tr>
                    <tr>
                      <td><strong>Day 1 to Day 30</strong></td>
                      <td><strong>SMA-0</strong></td>
                      <td>1st NACH/SI dishonour triggers bounce fee (e.g., SBI Rs. 250 + GST; HDFC Rs. 450 to 550 + GST; ICICI Rs. 500 + GST; Kotak Rs. 750; Bajaj Finance Rs. 700 to 1,200) plus daily non-capitalized penal charges. Automated IVR and call-centre reminders start.</td>
                      <td>Send formal written Job-Loss Hardship Intimation via email; stop repeat NACH re-presentations to prevent double bank return charges.</td>
                    </tr>
                    <tr>
                      <td><strong>Day 31 to Day 60</strong></td>
                      <td><strong>SMA-1</strong></td>
                      <td>2nd EMI missed; CIBIL score typically drops 50 to 85 points; early-bucket field verification or automated Section 25 PASSA demand notices may be generated for bounced e-mandates.</td>
                      <td>Respond in writing to any legal demand notice documenting involuntary job loss; strictly guard emergency rent/medical cash.</td>
                    </tr>
                    <tr>
                      <td><strong>Day 61 to Day 90</strong></td>
                      <td><strong>SMA-2</strong></td>
                      <td>3rd consecutive EMI missed; pre-NPA retention desks offer &quot;pay 1 EMI to stop NPA tagging&quot; (which keeps the account alive without waiving principal or stopping next month&apos;s default).</td>
                      <td>Avoid paying isolated &quot;bucket-saving&quot; single EMIs unless you have already started a new salaried job and can clear full arrears.</td>
                    </tr>
                    <tr>
                      <td><strong>Day 91+</strong></td>
                      <td><strong>NPA (Sub-Standard)</strong></td>
                      <td>Account moves from regular collections to NPA Recovery / Compromise Settlement Committee; Loan Recall Notice issued.</td>
                      <td>Open structured One-Time Settlement (OTS) negotiations backed by your layoff dossier and protected lump-sum reserve.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5 */}
            <section id="pause-nach-bounces" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Stopping Multi-Lender NACH Bounce Spirals Lawfully
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Salaried borrowers frequently carry two or three simultaneous personal loans plus a consumer durable EMI. When unemployment strikes and your savings account holds only Rs. 8,000 for groceries, leaving four external NACH mandates active creates a brutal double-fee drain:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li><strong>Lender-Side Bounce Charge:</strong> Each lender levies Rs. 339 to Rs. 1,200 per dishonoured presentation. High-velocity NBFCs and private banks sometimes re-present the same NACH mandate 2 to 3 times within the same billing cycle (on the 5th, 10th, and 15th).</li>
                <li><strong>Destination Savings Bank Inward Return Fee:</strong> Your own savings bank simultaneously deducts Rs. 295 to Rs. 590 (including GST) directly from your remaining Rs. 8,000 grocery balance every time an incoming NACH debit bounces for insufficient funds!</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Within two months, 12 failed presentations across three loans can wipe out Rs. 6,000 to Rs. 10,000 of real household cash purely in inward NACH return fees while adding another Rs. 8,000+ to your loan ledgers. Under NPCI NACH operating guidelines and RBI e-mandate rules, bank customers have the right to manage, pause, or request mandate cancellation through their destination bank&apos;s NetBanking (&quot;Manage e-Mandates / NACH&quot;) or ONMS portal. Read our full step-by-step protocol in <Link href="/salary-account-ecs-mandate-cancellation-rules" className="text-[#1F5EFF] font-semibold underline">Salary Account ECS &amp; NACH Mandate Cancellation Rules</Link>, always pairing any mandate stop with a formal written hardship intimation to the lender so your conduct clearly reflects documented unemployment rather than willful evasion.
              </p>
            </section>

            {/* Section 6 */}
            <section id="epf-gold-loan-traps" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Why Draining EPF, PPF, or Household Gold to Pay EMIs Fails
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                After 30 days out of work, EPFO rules permit an unemployed member to claim up to 75% non-refundable advance from their Employees&apos; Provident Fund (and the remaining 25% after 60 days of continuous unemployment). Collection tele-callers actively pressure laid-off borrowers to liquidate EPF, break Public Provident Fund (PPF) savings, pledge family gold ornaments, or swipe credit cards through rent-payment apps to clear overdue personal loan EMIs.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Pause and examine the statutory and mathematical reality before touching protected assets:
              </p>
              <ol className="list-decimal pl-5 space-y-2.5 text-sm sm:text-base text-slate-700">
                <li><strong>Statutory Immunity of EPF (Section 10, EPF Act 1952):</strong> Accumulations standing to a salaried member&apos;s credit in the Employees&apos; Provident Fund are expressly immune from attachment under any decree or order of any civil court in respect of any debt or liability incurred by the member. Unsecured personal loan lenders <em>cannot</em> legally attach your EPF corpus.</li>
                <li><strong>Partial EMI Payments Buy Zero Finality:</strong> Suppose you owe Rs. 9,50,000 across two personal loans with combined monthly EMIs of Rs. 34,000. If you withdraw Rs. 1,40,000 from EPF and pay four months of regular EMIs while still unemployed, over Rs. 55,000 goes straight toward interest, leaving you owing Rs. 8,65,000 in Month 5 with zero EPF left. Had that Rs. 1,40,000 been preserved in a protected account, it could have funded a substantial chunk of a full-and-final NPA One-Time Settlement closing an entire loan permanently!</li>
                <li><strong>Never Convert Unsecured Debt Into Secured Gold Debt:</strong> An unsecured personal loan carries no collateral. Pledging your spouse&apos;s or mother&apos;s jewellery for a gold loan to pay unsecured EMIs hands a lender physical collateral that can be auctioned within months under RBI gold-loan norms if your re-employment is delayed.</li>
              </ol>
            </section>

            {/* Section 7 */}
            <section id="restructure-vs-ots-fork" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Decision Matrix: Pre-NPA RBI Restructuring vs ₹3L+ Settlement
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Not every laid-off borrower should pursue loan settlement, and not every laid-off borrower survives restructuring. Under the RBI Prudential Framework for Resolution of Stressed Assets, lenders may modify repayment terms (extending remaining tenure by 12 to 24 months or granting a brief principal moratorium) on viable standard accounts. Compare both paths honestly before Day 30:
              </p>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Evaluation Factor</th>
                      <th>Path A: Pre-NPA Loan Restructuring / Tenure Extension</th>
                      <th>Path B: Post-90-DPD One-Time Settlement (₹3L+ Debt)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Ideal Salaried Profile</strong></td>
                      <td>Single personal loan (&lt; Rs. 3L to 5L), strong emergency savings, and high confidence of rejoining at 90% to 100% prior CTC within 45 to 60 days.</td>
                      <td>Combined unsecured debt <strong>₹3 Lakhs to ₹40 Lakhs+</strong>, uncertain 3-to-9-month hiring timeline, or expected re-employment at a 25% to 40% lower CTC.</td>
                    </tr>
                    <tr>
                      <td><strong>When to Apply</strong></td>
                      <td>Must request <strong>before Day 30 (Standard / early SMA-0)</strong>; banks almost never restructure an unsecured loan after 90 DPD NPA tagging.</td>
                      <td>Negotiated once the account enters <strong>NPA (90 to 180+ DPD)</strong> and the bank&apos;s compromise matrix unlocks principal &amp; interest waivers.</td>
                    </tr>
                    <tr>
                      <td><strong>Total Cash Outflow</strong></td>
                      <td><strong>115% to 135%</strong> of current balance (zero principal waiver; longer tenure adds substantial extra interest).</td>
                      <td>Realistic closures often range from <strong>35% to 60% of total claimed dues</strong> depending on lender, NPA age, and lump-sum readiness (never guaranteed).</td>
                    </tr>
                    <tr>
                      <td><strong>CIBIL Bureau Status</strong></td>
                      <td>Reported as <strong>&quot;Restructured&quot;</strong> (moderate 40 to 70 point dip; preserves clean closure later if every revised EMI is paid on time).</td>
                      <td>Reported as <strong>&quot;Settled&quot;</strong> with ₹0 balance overdue (75 to 130 point drop; rebuildable over 18 to 36 months via secured FD cards).</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 8 */}
            <section id="hardship-notice-protocol" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Sending a Formal Written Layoff Hardship Notice to Lenders
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Silence is your worst enemy during the first 60 days of unemployment. When a salaried borrower ignores every bank call and sends zero emails, the bank&apos;s internal risk scoring classifies the account as an &quot;uncontactable / skip / willful default&quot; profile, triggering faster field-visit allocation and automated legal notices.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Instead, send a concise, factual <strong>Financial Hardship &amp; Involuntary Unemployment Intimation</strong> from your registered email ID to each lender&apos;s official customer service and grievance mailbox before or immediately after your first missed EMI:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li>State your Loan Account Number, registered mobile number, and the exact date your employment ended due to corporate restructuring or downsizing.</li>
                <li>Attach your redacted termination/relieving letter and confirm that you have zero active salary income at present while actively interviewing.</li>
                <li>Explicitly request that all statutory or account communications be routed via registered email and that third-party agents strictly adhere to RBI fair-practice call hours without contacting family members or former colleagues.</li>
                <li>State whether you are requesting a formal pre-NPA moratorium/restructuring review or will revert with a structured settlement proposal once your household survival position stabilizes.</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section id="recovery-privacy-shield" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Protecting Your Job Search &amp; LinkedIn Profile From Harassment
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Laid-off professionals depend heavily on LinkedIn, Naukri, and recruiter calls to land their next role. Rogue third-party tele-callers occasionally threaten to comment on LinkedIn posts, call former HR managers, or message references listed on old loan applications. Know your exact regulatory shield:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li><strong>Strict Third-Party &amp; Social Media Prohibition:</strong> Under Reserve Bank of India Fair Practices Code norms and recovery agent circulars, lenders are vicariously liable for any agent who discloses your debt to third parties, former employers, neighbours, or social media contacts.</li>
                <li><strong>1 January 2027 RBI Recovery Conduct Framework:</strong> RBI&apos;s consolidated recovery conduct directions taking effect on <strong>1 January 2027</strong> mandate strict calling windows between <strong>8:00 AM and 7:00 PM</strong>, prohibit abusive or humiliating language, and require documented call recording and agent identification.</li>
                <li><strong>Practical LinkedIn Hygiene During SMA/NPA Months:</strong> While interviewing and negotiating debt simultaneously, set your LinkedIn profile&apos;s public visibility and &quot;Hibernate / New Employer Announcement&quot; strategically. Many borrowers wait until their OTS Sanction Letter is locked before publicly posting their new employer badge on LinkedIn, preventing opportunistic collection markups right before settlement closure. Also see our dedicated guide on <Link href="/new-job-background-verification-after-loan-settlement" className="text-[#1F5EFF] font-semibold underline">New Job Background Verification (BGV) After Loan Settlement</Link>.</li>
              </ul>
            </section>

            {/* Section 10 */}
            <section id="post-90-day-transition" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                10. Transitioning Past Day 90 Into a Structured ₹3L+ Settlement
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If 90 days pass and you either remain between jobs or secure a role at a compressed compensation package that cannot service legacy EMIs, your personal loans cross 90 DPD into Non-Performing Asset (NPA) status. Because you protected your F&amp;F severance in Week 1, avoided draining your EPF on futile partial EMIs, and documented your layoff hardship cleanly in writing, you enter NPA negotiations from a position of strength rather than desperation.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                At this stage, credit committees evaluate the Net Present Value (NPV) of an immediate lump-sum compromise against a multi-year unsecured recovery cycle against an unemployed borrower. Once your loans cross 90 DPD, continue straight to our post-NPA execution playbooks: <Link href="/job-loss-loan-settlement-process" className="text-[#1F5EFF] font-semibold underline">Job-Loss Loan Settlement Dossier &amp; OTS Process</Link> and <Link href="/loan-settlement-during-job-loss" className="text-[#1F5EFF] font-semibold underline">Loan Settlement During Job Loss Overview</Link>. Remember: never pay a single rupee toward any compromise offer without first verifying an official bank letterhead OTS Sanction Letter confirming full waiver of residual principal, interest, bounce fees, and penal charges.
              </p>
            </section>

            {/* Section 11: Company Section */}
            <section id="company-resolution-section" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                11. How SettleLoans Protects Laid-Off Salaried Professionals
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When your combined unsecured debt across personal loans, top-ups, and credit cards is ₹3 Lakhs or above, SettleLoans steps in during your transition so you can focus 100% of your mental energy on technical interviews and landing your next salaried offer while our legal and banking negotiation team handles collection escalations, legal notice replies, and lump-sum OTS closures.
              </p>
              <CompanySection />
            </section>

            {/* Section 12: FAQs */}
            <section id="faqs" className="space-y-4 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                12. Frequently Asked Questions: Job Loss &amp; Personal Loan EMIs
              </h2>

              <div className="space-y-3">
                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all" open>
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      1. What should I do in the first 7 days after losing my job if I have active personal loan EMIs?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Before your last working day, audit every active loan and auto-debit date, check your Key Fact Statement for bundled involuntary job-loss insurance, request HR payroll to route your upcoming Full and Final (F&amp;F) settlement into an unlinked savings account where you owe zero debt, and calculate your household survival runway before paying another routine EMI.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      2. Can my salary bank absorb my entire Full and Final (F&amp;F) severance payout toward overdue personal loan EMIs?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Yes, if your Corporate Salary Account and personal loan sit under the same bank Customer ID and your account already carries overdue instalments or a Hold Balance, an incoming F&amp;F credit of Rs. 2 Lakhs to Rs. 5 Lakhs can be swept automatically within seconds. Lawfully updating your F&amp;F payout bank account with HR before payroll closure prevents unilateral set-off of household emergency funds.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      3. Do Indian banks grant an automatic EMI holiday or moratorium when a salaried borrower is laid off?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>No. Unlike the temporary statutory COVID-19 moratorium of 2020, there is no automatic statutory EMI holiday for individual job loss in India. Any 3-to-6-month EMI moratorium or tenure extension is purely discretionary under the lender&apos;s RBI-approved stressed asset resolution policy and typically requires you to apply while the loan is still standard (0 to 30 days past due).</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      4. Should I withdraw my EPF balance to keep paying personal loan EMIs while unemployed?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>In most high-debt layoffs, draining your Employees&apos; Provident Fund to pay 3 or 4 regular EMIs without closing the principal is a costly mistake. Under Section 10 of the EPF Act, 1952, statutory provident fund balances enjoy strong legal protection against civil attachment for unsecured commercial debt. Burning retirement savings only to default in Month 5 leaves you with both a damaged CIBIL score and zero cash to fund a One-Time Settlement later.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      5. How do I check if my personal loan includes involuntary job-loss insurance coverage?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Inspect your sanction letter, Key Fact Statement, and disbursement welcome kit for single-premium Group Credit Shield, Loan Protect, or Critical Illness plus Job Loss policies sold by insurers partnered with HDFC, ICICI, Axis, Kotak, or Bajaj Finance. Most policies cover 3 monthly EMIs upon documented company downsizing or retrenchment (excluding voluntary resignation or termination for misconduct), provided you intimate the insurer within 15 to 30 days.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      6. What happens during SMA-0, SMA-1, and SMA-2 in the first 90 days of missing personal loan EMIs?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Under RBI prudential norms, missing an EMI places the loan in SMA-0 (1 to 30 days past due), SMA-1 (31 to 60 days past due), and SMA-2 (61 to 90 days past due). During these 90 days, automated NACH re-presentations, bounce fees (Rs. 250 to Rs. 1,200 per dishonour), non-capitalized penal charges, and tele-collection calls escalate until the account turns into a Non-Performing Asset (NPA) past Day 90.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      7. Is stopping my NACH auto-debit after a layoff treated as a criminal offence under Section 25 of PASSA?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Inability to pay due to genuine involuntary job loss is fundamentally a civil breach, though lenders sometimes issue automated Section 25 Payment and Settlement Systems Act demand notices after an electronic mandate dishonours for insufficient funds. Sending a proactive written hardship notice attaching your relieving or layoff letter before the debit date establishes good faith and prevents repeated Rs. 500-plus bank return charges.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      8. When is RBI loan restructuring better than One-Time Settlement after losing a salaried job?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Pre-NPA restructuring (tenure extension or temporary step-down EMI) works best when your total unsecured debt is modest, you already hold a confirmed new job offer starting within 30 to 60 days at comparable CTC, and you want to avoid a &apos;Settled&apos; remark. Conversely, if unemployment stretches beyond 90 days or combined unsecured debt exceeds Rs. 3 Lakhs with no near-term income parity, One-Time Settlement becomes more viable.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      9. Should I take a gold loan, spouse loan, or instant app loan to pay personal loan EMIs during unemployment?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Never borrow from short-tenure digital lending apps or pledge household gold merely to pay 1 or 2 monthly instalments on an unsecured personal loan. Converting unsecured debt into secured gold debt risks permanent auction of family jewellery if your job search takes 6 months, while app loans trigger severe repayment spirals.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      10. Can bank recovery agents call my former HR manager or new prospective employer during my job search?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>No. RBI recovery conduct rules strictly forbid lenders and third-party recovery agencies from contacting your former HR, colleagues, professional references, or prospective employers, or shaming you on LinkedIn and WhatsApp. Furthermore, RBI&apos;s updated recovery conduct directions taking effect on 1 January 2027 reinforce strict contact-hour limits (8:00 AM to 7:00 PM) and borrower privacy safeguards.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      11. At what stage will a bank agree to a One-Time Settlement if my layoff lasts more than 3 months?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Banks and NBFCs rarely approve deep principal haircuts in Month 1 or Month 2 while the loan is still classified as a standard SMA account. Once the personal loan crosses 90 days past due (NPA) and you submit your termination letter, bank statement showing stopped salary credits, and severance exhaustion proof, realistic One-Time Settlements often fall between 35% and 60% of total claimed dues, never guaranteed.</p>
                  </div>
                </details>

                <details name="faq-accordion" className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all">
                  <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      12. What documents should I collect from HR before losing access to my corporate email?
                    </span>
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </summary>
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    <p>Download and forward to your personal email: your official layoff/retrenchment notice or relieving letter, last 6 months&apos; salary slips, latest Form 16 (Part A and Part B), Full and Final (F&amp;F) computation sheet, group health insurance portability details, and HR payroll acknowledgement of any bank account update.</p>
                  </div>
                </details>
              </div>
            </section>

            {/* Statutory & Regulatory References */}
            <section className="border-t border-slate-200 pt-8 mb-4">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">
                Statutory &amp; Regulatory References (Checked 11 November 2026)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Portal (cms.rbi.org.in)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                </a>
                <span className="p-3 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-700">
                  EPF &amp; Miscellaneous Provisions Act, 1952: Section 10 Attachment Immunity
                </span>
                <span className="p-3 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-700">
                  RBI Prudential Framework for Resolution of Stressed Assets
                </span>
                <span className="p-3 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-700">
                  Code of Civil Procedure, 1908: Section 60(1)(i) Subsistence Protection
                </span>
              </div>
            </section>

            {/* Related Salaried Guides */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Salaried Layoff &amp; Personal Loan Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link href="/job-loss-loan-settlement-process" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Post-NPA Job-Loss Settlement Process
                </Link>
                <Link href="/loan-settlement-during-job-loss" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Loan Settlement During Job Loss
                </Link>
                <Link href="/bank-freeze-salary-account-loan-default" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Bank Freeze Salary Account Guide
                </Link>
                <Link href="/salary-account-ecs-mandate-cancellation-rules" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  ECS &amp; NACH Mandate Cancellation Rules
                </Link>
                <Link href="/new-job-background-verification-after-loan-settlement" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  New Job BGV After Loan Settlement
                </Link>
                <Link href="/salary-cut-personal-loan-emi-restructuring-vs-settlement" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Salary Cut: Restructuring vs Settlement
                </Link>
                <Link href="/multiple-personal-loans-hdfc-icici-bajaj-which-to-settle-first" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Multiple Loans: Which to Settle First
                </Link>
                <Link href="/loan-settlement-for-salaried-people" className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all">
                  Loan Settlement for Salaried People
                </Link>
              </div>
            </section>

          </main>

          {/* Right Sidebar (zero heading tags) */}
          <aside className="w-full lg:sticky lg:top-24 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Link href="/authors/ashish-jhangra" className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-lg hover:opacity-90 transition-opacity">
                    AJ
                  </div>
                </Link>
                <div>
                  <Link href="/authors/ashish-jhangra" className="font-bold text-slate-900 text-sm hover:text-[#1F5EFF] transition-colors block">
                    Ashish Jhangra
                  </Link>
                  <p className="text-xs text-slate-500">Salaried Debt &amp; Layoff Triage Specialist</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Guides laid-off corporate and tech employees through F&amp;F severance protection, NACH mandate defence, and structured multi-bank personal loan settlements.
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Verified Author</span>
                </span>
                <Link href="/authors/ashish-jhangra" className="text-[#1F5EFF] hover:underline font-bold flex items-center gap-0.5">
                  <span>Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>90-Day Layoff Debt Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Laid Off With ₹3L+ Personal Loans?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Before burning your F&amp;F severance or EPF on partial EMIs, get a confidential restructuring vs One-Time Settlement plan tailored to your household runway.
              </p>
              <a
                href="#settlement-assessment"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Check ₹3L+ Layoff Eligibility
              </a>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Layoff Protection Checklist
              </div>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>F&amp;F Severance Bank Shift Protocol</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Zero Employer / Recruiter Contact Shield</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Credit Shield &amp; EPF Immunity Audit</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Multi-Loan NPA Settlement Structuring</span>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
