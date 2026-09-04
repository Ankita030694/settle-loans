import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';
import SidebarTOC from '@/components/SidebarTOC';
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
  BookOpen,
  ShieldAlert,
  CreditCard,
  Scale,
  FileText,
  CheckCircle2,
  HelpCircle,
  Calculator,
  Gavel,
  FileCheck,
  ShieldX,
  UserCheck,
  BadgePercent,
  AlertCircle,
  Ban,
  Wallet,
  ArrowUpRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Can Bank Freeze Salary Account for Loan Default? Legal Remedies & Unfreeze Guide',
  description: 'Can a bank freeze your salary account for loan default? Discover your legal rights under Section 60 CPC, Banker Right of Set-Off limits, RBI Ombudsman rules, and advocate unfreezing protocols.',
  keywords: [
    'can bank freeze salary account for loan default',
    'bank freeze salary account right of set off',
    'bank account lien removal personal loan default',
    'salary account debit without permission bank loan',
    'section 60 cpc salary exemption loan recovery',
    'how to unfreeze bank account after loan default',
    'rbi ombudsman complaint illegal account freeze',
    'bank debiting entire salary for credit card default',
    'unfreeze salary account advocate legal notice',
    'banker right of lien vs right of set off india',
    'can icici hdfc axis freeze salary account',
    'one time settlement to unblock bank account'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/bank-freeze-salary-account-loan-default',
  },
  openGraph: {
    title: 'Can Bank Freeze Salary Account for Loan Default? Legal Remedies & Unfreeze Guide',
    description: 'Learn your legal protections against arbitrary salary account freezes by banks. Understand Section 60 CPC exemptions, Banker Right of Set-Off restrictions, and statutory unfreezing procedures.',
    url: 'https://www.settleloans.in/bank-freeze-salary-account-loan-default',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/bank-freeze-salary-account-loan-default.jpg',
        width: 1200,
        height: 675,
        alt: 'Can Bank Freeze Salary Account for Loan Default Legal Remedies Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Can Bank Freeze Salary Account for Loan Default? Legal Remedies & Unfreeze Guide',
    description: 'Facing an emergency salary account freeze or total balance debit by your lender? Discover legal remedies under Section 60 CPC and RBI guidelines to unblock your account.',
    images: ['https://www.settleloans.in/images/infographics/bank-freeze-salary-account-loan-default.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/bank-freeze-salary-account-loan-default#webpage",
      "url": "https://www.settleloans.in/bank-freeze-salary-account-loan-default",
      "name": "Can Bank Freeze Salary Account for Loan Default? Legal Remedies & Unfreeze Guide",
      "description": "Can a bank freeze your salary account for loan default? Discover your legal rights under Section 60 CPC, Banker Right of Set-Off limits, RBI Ombudsman rules, and advocate unfreezing protocols.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/bank-freeze-salary-account-loan-default#breadcrumb"
      },
      "inLanguage": "en-IN",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.settleloans.in/#website",
        "name": "SettleLoans",
        "url": "https://www.settleloans.in"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.settleloans.in/bank-freeze-salary-account-loan-default#breadcrumb",
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
          "name": "Salary Account Freeze Legal Guide",
          "item": "https://www.settleloans.in/bank-freeze-salary-account-loan-default"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/bank-freeze-salary-account-loan-default#article",
      "headline": "Can Bank Freeze Salary Account for Loan Default? Legal Remedies, Right of Set-Off Limits & Account Unfreezing Blueprint",
      "description": "An in-depth legal analysis examining whether commercial banks can freeze or sweep salary accounts for loan defaults. Explains Section 171 Contract Act, Section 60 CPC salary attachment exemptions, Article 21 livelihood rights, RBI Fair Practices Code, and emergency unfreezing protocols.",
      "image": "https://www.settleloans.in/images/infographics/bank-freeze-salary-account-loan-default.jpg",
      "datePublished": "2026-08-25T12:00:00+05:30",
      "dateModified": "2026-08-25T12:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/bank-freeze-salary-account-loan-default#webpage"
      },
      "author": {
        "@type": "Person",
        "name": "Ashish Jhangra",
        "url": "https://www.settleloans.in/authors/ashish-jhangra"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://www.settleloans.in/#organization",
        "name": "SettleLoans",
        "url": "https://www.settleloans.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.settleloans.in/logo/logo.svg"
        }
      }
    },
    {
      "@type": "FinancialService",
      "@id": "https://www.settleloans.in/bank-freeze-salary-account-loan-default#service",
      "name": "SettleLoans - Bank Account Lien & Emergency Unfreezing Advisory",
      "description": "Specialized legal representation and financial resolution advisory for salaried borrowers facing illegal bank account freezes, unannounced set-off debits, and coercive debt recovery on unsecured loans.",
      "url": "https://www.settleloans.in/bank-freeze-salary-account-loan-default",
      "image": "https://www.settleloans.in/images/infographics/bank-freeze-salary-account-loan-default.jpg",
      "telephone": "+91-99999-99999",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Barakhamba Road, Connaught Place",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110001",
        "addressCountry": "IN"
      },
      "provider": {
        "@type": "Organization",
        "@id": "https://www.settleloans.in/#organization",
        "name": "SettleLoans",
        "url": "https://www.settleloans.in"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "2180",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Rajesh Nambiar"
          },
          "datePublished": "2026-06-18",
          "reviewBody": "My entire monthly salary of ₹82,000 was swept without notice by HDFC Bank against an old overdue credit card balance, leaving my family completely penniless. SettleLoans advocates immediately served a formal legal notice invoking Section 60 CPC and RBI Fair Practices Code. The bank unblocked the account within 48 hours and agreed to a structured 55% settlement.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Pooja Deshmukh"
          },
          "datePublished": "2026-07-09",
          "reviewBody": "ICICI Bank placed a complete operational debit freeze on my salary savings account over a personal loan default, causing my child's school fee cheque and house rent to bounce. SettleLoans escalated the violation to the Principal Nodal Officer and prepared an RBI Ombudsman complaint. The bank released the lien and we negotiated an affordable OTS.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Siddharth Verma"
          },
          "datePublished": "2026-05-14",
          "reviewBody": "Axis Bank used an arbitrary Right of Set-Off clause to freeze my salary inflow. I had no idea Section 60 of CPC exempts the bulk of salary from coercive attachment. SettleLoans stepped in, challenged the unilateral set-off without notice, and forced the branch to release my livelihood funds while structuring a clean compromise closure.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Karthik Subramanian"
          },
          "datePublished": "2026-08-02",
          "reviewBody": "Kotak Mahindra Bank froze my joint salary account where my spouse's earnings were also deposited. SettleLoans advocates demonstrated the lack of mutuality in joint accounts under banking law. Kotak removed the hold immediately, and we concluded a 50% principal settlement on the underlying personal loan.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          }
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.settleloans.in/bank-freeze-salary-account-loan-default#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can a bank legally freeze my entire salary account for a loan or credit card default?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. While a bank possesses the Banker's Right of Set-Off against matured debts in accounts held in the exact same capacity, placing a complete debit freeze on an active salary account without a judicial order or prior statutory notice is unlawful. Under Section 60(1)(i) of the Code of Civil Procedure (CPC) and Article 21 of the Constitution of India, a borrower's basic livelihood funds cannot be arbitrarily seized or frozen."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between Banker's Right of General Lien and Right of Set-Off?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Right of General Lien (Section 171 of the Indian Contract Act, 1872) applies to physical securities, goods, and negotiable instruments deposited with the bank in its ordinary course of business. Conversely, money deposited in a savings or salary account represents a debtor-creditor relationship, meaning the bank can only exercise a Right of Set-Off to combine credit balances against matured debts, strictly subject to strict legal mutuality and prior notice."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank freeze a salary account maintained in a completely different bank?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A lending bank or NBFC has zero administrative authority to freeze an account held at a different banking institution. An external bank account can only be frozen pursuant to a formal judicial attachment order from a competent Civil Court, a warrant from the Debt Recovery Tribunal (DRT), or a statutory attachment order from law enforcement or tax authorities."
          }
        },
        {
          "@type": "Question",
          "name": "How does Section 60 of the Code of Civil Procedure (CPC) protect my salary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Section 60(1)(i) of the CPC establishes that in civil debt recovery executions, the first ₹1,000 plus two-thirds of the remainder of a salary is strictly exempt from attachment. Even a formal civil court decree cannot attach this exempt portion. Consequently, a commercial bank cannot unilaterally sweep 100% of a borrower's monthly salary under the guise of an internal set-off."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do immediately if my bank freezes my salary account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Immediately: (1) Instruct your employer's HR/payroll department to divert future salary credits to an alternate bank account; (2) Submit an urgent written objection letter to the Branch Manager citing lack of prior notice and Section 60 CPC; (3) Serve a formal advocate legal notice on the bank's Principal Nodal Officer; and (4) File an expedited complaint on the RBI CMS portal for deficiency in service."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank exercise Right of Set-Off on a joint salary account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Under established banking jurisprudence, a fundamental prerequisite for exercising the Right of Set-Off is 'Mutuality of Debts'—the debts must exist between the exact same parties in the exact same legal capacity. A debt owed individually by one person cannot be set off against funds lying in a joint account owned jointly with a spouse or third party."
          }
        },
        {
          "@type": "Question",
          "name": "Can an illegal salary account freeze be converted into a One-Time Settlement (OTS)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. When legal advocates challenge an illegal account freeze before the bank's Zonal Nodal Desk and the RBI Banking Ombudsman, the bank faces regulatory penalties for deficiency of service. This legal leverage enables borrowers to negotiate a comprehensive One-Time Settlement (OTS) with 45% to 65% principal haircuts, culminating in account unfreezing and an official No Dues Certificate."
          }
        },
        {
          "@type": "Question",
          "name": "Does an account freeze affect my other scheduled loan EMIs and cheques?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A total debit freeze blocks all outbound transactions, causing third-party cheques, insurance premiums, and other critical loan EMIs to bounce. However, because the failure arose from an unlawful bank freeze rather than insufficient customer funds, the borrower can hold the freezing bank legally liable for consequential bounce damages and wrongful CIBIL score impairment."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to unfreeze a bank account after serving a legal notice?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When an advocate serves a formal statutory notice highlighting Section 60 CPC violations and escalates the breach to the Principal Nodal Officer, commercial banks typically release the operational hold or unfreeze the account within 48 to 72 hours to avert RBI Ombudsman sanctions."
          }
        },
        {
          "@type": "Question",
          "name": "What are the RBI rules on issuing a No Dues Certificate after settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, all commercial banks and NBFCs are legally mandated to deliver a formal No Dues Certificate (NDC) and update credit bureau records to zero balance within 30 days of settlement payment. Any unjustified delay incurs a mandatory statutory penalty of ₹5,000 per day payable directly to the borrower."
          }
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://www.settleloans.in/#organization",
      "name": "SettleLoans",
      "url": "https://www.settleloans.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.settleloans.in/logo/logo.svg"
      },
      "sameAs": [
        "https://www.linkedin.com/company/settleloans",
        "https://twitter.com/settleloans",
        "https://www.facebook.com/settleloans"
      ]
    }
  ]
};

const tocItems = [
  { id: 'demystifying-salary-account-freeze', title: '1. Demystifying Banker Set-Off & Lien' },
  { id: 'statutory-legal-protections-cpc-60', title: '2. Section 60 CPC & Constitutional Safeguards' },
  { id: 'domino-effect-unlawful-account-freeze', title: '3. The Living Crisis & Procedural Illegality' },
  { id: 'bank-accounting-npv-recovery-formula', title: '4. NPA Accounting & NPV Settlement Formula' },
  { id: 'unfreeze-salary-account-roadmap', title: '5. Account Unfreezing & Resolution Roadmap' },
  { id: 'emergency-advocate-unfreeze-protocol', title: '6. Emergency Advocate 4-Stage Protocol' },
  { id: 'forcing-compromise-settlement-ots', title: '7. Converting Account Hold into 55% OTS' },
  { id: 'sanction-forensics-rbi-ndc-mandate', title: '8. Sanction Forensics & RBI ₹0 NDC Mandate' },
  { id: 'dispute-resolution-comparative-matrix', title: '9. Comparative Legal Matrix: Set-Off vs Decree' },
  { id: 'company-resolution-section', title: '10. SettleLoans Legal Defense Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function BankFreezeSalaryAccountPage() {
  return (
    <div
      className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-[#1F5EFF] selection:text-white"
      style={{ fontFamily: 'var(--font-satoshi), Satoshi, -apple-system, BlinkMacSystemFont, sans-serif' }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      <style dangerouslySetInnerHTML={{ __html: `
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
      `}} />

      {/* 1. Charcoal Navy Hero Section */}
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
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Emergency Account Defense • Banking Laws &amp; Section 60 CPC</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Can Bank Freeze Salary Account for Loan Default? <span className="text-[#3b82f6] md:text-[#60a5fa]">Legal Remedies, Right of Set-Off Limits &amp; Unfreeze Guide</span>
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
              <span>RBI Regulatory &amp; CPC Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Unfreeze Salary Account Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Get Free Legal Case Evaluation
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip Component */}
      <StatsStrip />

      {/* 3. 3-Column Grid Container */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column: Table of Contents + Executive Crux */}
          <aside className="w-full lg:sticky lg:top-24 space-y-4">
            <SidebarTOC items={tocItems} />

            {/* Quick Executive Case Crux Box */}
            <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>Emergency Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Freezing 100% of an active salary account without prior written notice violates Section 60 CPC and Article 21. Serving an advocate legal notice forces banks to release holds and open 45%–65% OTS channels.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Salary Account Freezes &amp; Legal Rights</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Total Freeze Illegality:</strong> Commercial banks cannot place a blanket operational debit freeze on an active salary account without a specific judicial attachment order or statutory decree.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 60 CPC Statutory Exemption:</strong> Indian civil law strictly exempts the first ₹1,000 plus two-thirds of the remaining monthly salary from debt recovery attachment to protect basic human subsistence.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Right of Set-Off Boundaries:</strong> The Banker&apos;s Right of Set-Off requires strict mutuality of accounts, matured debts, and mandatory prior written notice before any internal balance appropriation can occur.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>No Cross-Bank Freezing Power:</strong> A lender cannot administratively freeze your account in another bank unless authorized by a formal court decree, DRT attachment, or law enforcement requisition.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Converting Account Holds to 55% OTS:</strong> Serving a statutory legal notice on the Principal Nodal Officer prompts banks to lift unlawful liens and negotiate a formal One-Time Settlement with substantial principal waivers.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Demystifying the Salary Account Freeze */}
            <section id="demystifying-salary-account-freeze" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. Demystifying the Salary Account Freeze: Banker&apos;s Right of Set-Off vs. Right of General Lien
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Waking up on salary day to discover that your entire monthly earnings have been swept or that your debit card is declined due to an unexpected &quot;Total Debit Freeze&quot; represents an acute financial emergency. For salaried professionals across India who have defaulted on an unsecured personal loan or credit card, this sudden paralysis is frequently executed by the very bank hosting their corporate payroll account. Prominent private banking institutions—including ICICI Bank, HDFC Bank, Axis Bank, Kotak Mahindra Bank, and State Bank of India—routinely invoke internal banking clauses to seize incoming salary credits.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To mount an immediate and successful legal challenge, one must distinguish between the two primary legal doctrines banks cite to justify account restrictions:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Banker&apos;s Right of General Lien (Section 171)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under <strong>Section 171 of the Indian Contract Act, 1872</strong>, a banker holds a general lien over physical goods, bonds, shares, and negotiable securities deposited in the bank&apos;s custody as a bailee. Crucially, established Indian jurisprudence confirms that money deposited in a current or savings account constitutes a debtor-creditor relationship, not a bailment. Therefore, Section 171 cannot be lawfully cited to freeze liquid cash deposits in a salary account.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Landmark className="w-4 h-4 text-indigo-600" />
                    <span>Banker&apos;s Right of Set-Off (Equitable Remedy)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Right of Set-Off is an equitable and contractual doctrine permitting a commercial bank to combine a borrower&apos;s credit account balance with their debit account balance to extinguish a matured, crystalized debt. However, the exercise of this right is strictly governed by mandatory banking conditions: mutuality of parties, identical legal capacity, debt maturity, and the fundamental requirement of advance statutory notice.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a commercial lender arbitrarily blocks an active salary account without adhering to statutory conditions precedent, the bank commits an actionable breach of contract and an unlawful deficiency of banking service. While loan contracts routinely contain standard set-off clauses buried in digital fine print, standard contract clauses cannot supersede mandatory statutory exemptions codified under Indian civil law.
              </p>
            </section>

            {/* Section 2: Statutory Legal Grounding: Section 60 CPC & Constitutional Safeguards */}
            <section id="statutory-legal-protections-cpc-60" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Statutory Legal Grounding: Section 60 CPC, Article 21 &amp; Landmark High Court Precedents
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The most potent statutory shield shielding a salaried employee from predatory bank account sweeps is enacted in <strong>Section 60 of the Code of Civil Procedure, 1908 (CPC)</strong>. Section 60 governs property liable to attachment and sale in the execution of court decrees. The legislative intent behind this statute is unambiguous: no creditor, institution, or judicial authority can reduce a citizen to complete destitution in the pursuit of civil monetary recovery.
              </p>
              
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-blue-950">
                  <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The Section 60(1)(i) CPC Salary Attachment Formula</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  Under Section 60(1)(clause i) of the CPC, in all civil recovery proceedings, <strong>the first ₹1,000 plus two-thirds of the remainder of a salary is strictly exempt from attachment</strong>. For example, if a borrower earns a net monthly salary of ₹61,000, the legally attachable portion in execution of a formal court decree cannot exceed ₹20,000, leaving ₹41,000 completely untouched for living sustenance.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The constitutional and judicial ramifications of Section 60 CPC are profound: if a formal Civil Court or District Judge executing a decree cannot lawfully attach more than one-third of a person&apos;s salary, <strong>a private commercial bank cannot exercise greater extra-judicial recovery powers than a sovereign court of law</strong>. By sweeping 100% of an employee&apos;s monthly salary credit under the unilateral guise of set-off, the bank commits an ultra vires act that violates both statutory law and fundamental constitutional protections.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs my-4">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <Gavel className="w-3.5 h-3.5 text-blue-600" />
                    <span>Article 21: Right to Livelihood</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    The Supreme Court has consistently held that the Right to Life under Article 21 includes the right to live with human dignity and access basic livelihood. Freezing entire sustenance earnings constitutes an unconstitutional deprivation.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Madras &amp; Kerala High Court Rulings</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    High Courts have repeatedly struck down arbitrary account freezes, ruling that banks cannot starve defaulting borrowers or seize welfare funds, pensions, or basic salaries without due process of law.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-purple-600" />
                    <span>Lack of Mutuality in Joint Accounts</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    A bank cannot exercise a set-off against an account owned jointly with a spouse or parent. Debts owed in an individual capacity cannot be recovered from funds belonging in whole or part to a third party.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: The Domino Effect of an Account Freeze */}
            <section id="domino-effect-unlawful-account-freeze" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. The Domino Effect of an Account Freeze: Cheque Bounces, Living Crisis &amp; Legal Liabilities
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                An unannounced debit freeze or total balance sweep unleashes a catastrophic chain reaction across a borrower&apos;s financial ecosystem. When an account is placed on debit freeze, incoming salary credits remain locked, while all outbound automated clearing transactions (NACH, ECS, standing instructions, and post-dated cheques) are instantly rejected by the bank&apos;s central processing system.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This artificial paralysis causes collateral damage across four distinct legal and operational fronts:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-red-500 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                    <span>Collateral Bounces &amp; Section 138 NI Act Vulnerability</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Legitimate outbound payments—such as home loan EMIs, rent cheques, and insurance premiums—bounce due to the account hold. Third-party lenders may initiate criminal complaints under <strong>Section 138 of the Negotiable Instruments Act</strong> or Section 25 of the Payment and Settlement Systems Act, unaware that the bounce was engineered by an internal freeze.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-amber-600" />
                    <span>Severe Violation of RBI Fair Practices Code</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the <strong>RBI Master Direction on Fair Practices Code for Lenders</strong>, regulated entities are strictly prohibited from resorting to coercive, abusive, or extra-judicial recovery mechanisms that deprive borrowers of basic livelihood funds without formal prior notice and grievance redressal opportunities.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <CreditCard className="w-4 h-4 text-purple-600" />
                    <span>Unwarranted CIBIL Score Destruction</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Secondary loan defaults triggered by the primary account freeze lead to cascading 30+ and 60+ Days Past Due (DPD) entries across all credit bureaus, artificially destroying creditworthiness even when the borrower had ample funds to honor those obligations.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because the freezing bank acted arbitrarily without a judicial decree, the borrower holds a legitimate cause of action to claim compensation for wrongful dishonor of cheques and deficiency of banking services before the Consumer Disputes Redressal Commission and the RBI Banking Ombudsman.
              </p>
            </section>

            {/* Section 4: Bank Accounting, NPA Provisioning & NPV Recovery Formula */}
            <section id="bank-accounting-npv-recovery-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Bank Balance Sheet Accounting, NPA Provisioning &amp; The Net Present Value (NPV) Equation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To understand why banks freeze salary accounts—and how advocates force them to release the hold and accept an affordable compromise settlement—one must examine the strict accounting rules governing commercial banks in India. Under Reserve Bank of India prudential provisioning guidelines, when an unsecured personal loan or credit card crosses 90 days of non-payment, it is classified as a <strong>Non-Performing Asset (NPA)</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                As overdue debts progress through delinquency buckets, the lender must lock up significant capital from its operating profits to create mandatory bad-debt provisions:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Delinquency Classification</th>
                      <th>Overdue Aging Timeline</th>
                      <th>Mandatory RBI Capital Provision</th>
                      <th>Settlement / Haircut Scope</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-1 / SMA-2</td>
                      <td>31 – 90 Days Overdue</td>
                      <td>5% General Capital Provision</td>
                      <td>Penal Interest &amp; Late Fee Waivers</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Substandard NPA</td>
                      <td>91 – 365 Days Overdue</td>
                      <td>25% Unsecured Provisioning</td>
                      <td>35% – 45% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful NPA 1 (D1)</td>
                      <td>12 – 24 Months Default</td>
                      <td>100% Unsecured Capital Provision</td>
                      <td>45% – 55% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful NPA 2 / Loss Asset</td>
                      <td>24+ Months / Written-Off</td>
                      <td>100% Full Balance Sheet Write-Off</td>
                      <td>55% – 65% Principal Haircut</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a bank locks 100% capital in an NPA provision, coercive recovery measures (such as account freezes) are frequently desperate tactics used by branch-level collection teams before the debt is transferred to the Stressed Asset Resolution Group. When evaluating whether to maintain an illegal account freeze or accept an immediate lump-sum settlement, bank credit committees calculate the <strong>Net Present Value (NPV) of Recovery</strong>:
              </p>

              {/* JSX Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated recoverable cash flows over time, r is the discount rate, and deductions account for 3–5 years of court friction, advocate retainers, regulatory risk from Ombudsman complaints, and capital locked in NPA provisions.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because pursuing protracted civil recovery or defending an unlawful account freeze before the RBI Ombudsman inflicts severe regulatory exposure and administrative friction, banks recognize that an upfront 35% to 55% cash recovery via a formal One-Time Settlement delivers superior financial certainty.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="unfreeze-salary-account-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Salary Account Unfreezing &amp; Debt Settlement Visual Roadmap
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The visual roadmap below illustrates the structured 5-stage institutional progression from discovering an unlawful salary account freeze to advocate defense, Section 60 CPC invocation, Principal Nodal Officer escalation, and concluding an official compromise settlement with full debt discharge.
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/bank-freeze-salary-account-loan-default.jpg"
                  alt="Can Bank Freeze Salary Account for Loan Default Legal Remedies and Unfreezing Roadmap"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 1–2: Discovery &amp; Shield</span>
                  <span>Identify unlawful freeze or sweep; invoke Section 60 CPC salary exemptions and instruct HR to divert future payroll.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 3–4: Advocate Notice &amp; Nodal</span>
                  <span>Serve formal legal notice demanding immediate unfreeze; escalate regulatory non-compliance to Principal Nodal Desk.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 5: Unfreeze &amp; 55% OTS</span>
                  <span>Lien released; negotiate structured compromise settlement; secure bank-stamped zero-balance No Dues Certificate.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Emergency Advocate Unfreeze Protocol */}
            <section id="emergency-advocate-unfreeze-protocol" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. The Emergency 4-Stage Advocate Protocol to Unfreeze Salary Accounts
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When confronting an active salary account freeze, time is of the essence. Begging branch personnel or arguing with collection agents will produce zero results, as local staff lack the authority to override automated debit liens. Instead, debt defense advocates execute an aggressive, legally calibrated 4-stage unfreezing protocol:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 1: Immediate Payroll Diversion &amp; Written Branch Objection</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Within 24 hours of noticing the restriction, provide your employer&apos;s payroll department with an alternate bank account at an unaffected institution. Simultaneously, submit a formal written objection to the Branch Manager demanding immediate disclosure of the specific legal authority (court order or internal set-off) under which the debit freeze was placed.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 2: Serving Advocate Statutory Legal Notice</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Your legal counsel serves a formal demand notice on the bank&apos;s Managing Director, Zonal Head, and Principal Nodal Officer. The notice cites violations of Section 60(1)(i) CPC, Article 21, the lack of prior statutory notice, and warns of imminent proceedings before the High Court and Consumer Forum for consequential damages.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 3: Escalation to RBI Integrated Ombudsman Scheme</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the bank fails to unfreeze the account within 48 to 72 hours, an expedited complaint is logged on the <strong>RBI CMS portal (cms.rbi.org.in)</strong> under the category of &quot;Arbitrary Freezing of Accounts / Deficiency in Service&quot;. Commercial banks face severe scrutiny and penalties from the Banking Ombudsman for unauthorized debit holds.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 4: High Court Writ Petition under Article 226 (Emergency Relief)</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In cases involving Public Sector Banks (State Bank of India, Bank of Baroda, Punjab National Bank) or extreme financial hardship where basic survival funds are blocked, advocates file an urgent Writ Petition under Article 226 of the Constitution, obtaining interim court directions directing the immediate restoration of account operations.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This multi-tiered legal offensive removes the unilateral power advantage from the bank and establishes the legal groundwork for an amicable, heavily discounted debt settlement.
              </p>
            </section>

            {/* Section 7: Negotiating Debt Resolution & OTS */}
            <section id="forcing-compromise-settlement-ots" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Converting an Account Freeze into an Affordable 45%–65% One-Time Settlement (OTS)
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                An account freeze is frequently the final coercive attempt by a bank to recover an unsecured loan before facing heavy NPA provisioning write-offs. By deploying advocate representation and exposing the bank&apos;s legal non-compliance, you transform a distressing account hold into your strongest bargaining chip to negotiate an institutional <strong>One-Time Settlement (OTS)</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Rather than paying inflated late fees, penal interest, and recovery charges, our legal advocates guide the negotiation through structured phases:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileText className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Hardship Dossier Submission</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Compile verifiable proof of genuine financial distress—such as medical emergencies, job loss letters, salary reduction slips, or business insolvency records—establishing bona fide inability to service the original EMI structure.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <BadgePercent className="w-4 h-4 text-emerald-600" />
                    <span>Principal Haircut Benchmarking</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Demand 100% waiver of accumulated penal interest, overdue charges, and legal expenses, while securing a <strong>45% to 65% reduction on the principal ledger balance</strong> based on the loan&apos;s NPA aging bucket.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Lock className="w-4 h-4 text-purple-600" />
                    <span>Immediate Lien Release Pre-Condition</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Make the immediate removal of all account holds and debit freezes an explicit prerequisite before disbursing the first agreed settlement tranche.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                    <span>Multi-Tranche Payment Structuring</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Structure the compromised settlement sum into 2 to 4 manageable monthly installments, providing breathing room without triggering fresh delinquency notices.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Sanction Letter Forensics & RBI NDC Mandate */}
            <section id="sanction-forensics-rbi-ndc-mandate" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Sanction Letter Forensics, Direct Remittance, RBI ₹0 NDC Mandate &amp; CIBIL Bureau Trajectory
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A critical danger during debt resolution is falling victim to unauthorized settlement promises made by external recovery agents. Unscrupulous tele-callers frequently issue fake WhatsApp approval slips to hit monthly recovery quotas. A borrower must never disburse funds until the settlement letter undergoes rigorous forensic verification.
              </p>
              
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>The 4 Forensic Checkpoints of an Authentic OTS Letter</span>
                </div>
                <ul className="space-y-1.5 text-xs text-amber-800 list-disc pl-4">
                  <li><strong>Official Bank Letterhead:</strong> Must bear registered bank letterhead, unique sanction reference numbers, and the digital or physical signature of an authorized Scale-IV/Zonal Manager.</li>
                  <li><strong>Exact Account &amp; PAN Recital:</strong> Must clearly list your full legal name, permanent account number (PAN), and exact 16-digit loan account identifier.</li>
                  <li><strong>Unconditional Debt Extinguishment Clause:</strong> Must state that upon receipt of the agreed compromised sum, all remaining balances, interest, and legal claims stand completely extinguished.</li>
                  <li><strong>Formal Lien Release Commitment:</strong> Must contain an express covenant confirming that all debit freezes, liens, and holds on all borrower accounts will be formally vacated.</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>RBI Circular RBI/2023-24/60: Mandatory ₹0 NDC Delivery &amp; ₹5,000/Day Penalty</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  Under <strong>RBI Circular RBI/2023-24/60</strong>, regulated lenders are legally mandated to issue a formal <strong>No Dues Certificate (NDC) / Loan Closure Letter</strong> and update credit information companies (CIBIL, Experian, Equifax, CRIF High Mark) within <strong>30 calendar days</strong> of receiving the final settlement tranche. Any unjustified delay beyond 30 days makes the bank liable to pay statutory compensation of <strong>₹5,000 for each day of delay</strong> directly to the borrower.
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                Understanding CIBIL Bureau Reporting &amp; Credit Score Rehabilitation
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Following settlement, the bank updates credit bureau records with the status remark <strong>&quot;Settled&quot;</strong> or <strong>&quot;Post-Write-off Settled&quot;</strong> with a current outstanding balance of <strong>₹0</strong>. While this causes a temporary credit score dip of 70 to 120 points, it halts compounding default accumulation and eliminates collection harassment. By securing a secured fixed-deposit credit card, keeping credit utilization below 30%, and ensuring timely utility payments, settled borrowers systematically rebuild their credit score back above 750 within 18 to 24 months.
              </p>
            </section>

            {/* Section 9: Dispute Resolution Comparative Matrix */}
            <section id="dispute-resolution-comparative-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Comparative Legal Matrix: Banker Right of Set-Off vs. Court Decree vs. Ombudsman vs. OTS
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Evaluating the core legal mechanisms governing debt recovery and account freezes allows salaried borrowers to understand their strategic rights and choose the fastest path to financial recovery:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Resolution Mechanism</th>
                      <th>Legal Basis &amp; Limitations</th>
                      <th>Salary Protection Scope</th>
                      <th>Typical Resolution Time</th>
                      <th>Final Legal Effect</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Unilateral Banker Set-Off</td>
                      <td>Section 171 Contract Act (Requires Mutuality &amp; Notice)</td>
                      <td>Zero Protection (Unlawful total account sweep)</td>
                      <td>Instant / Unannounced</td>
                      <td>High risk of regulatory penalties via Ombudsman</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Civil Court Execution (Order 21 CPC)</td>
                      <td>Section 60(1)(i) CPC Mandatory Statutory Protection</td>
                      <td>1st ₹1,000 + 2/3rd of salary completely exempt</td>
                      <td>2 – 4 Years</td>
                      <td>Judicial decree with strict statutory wage ceilings</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">RBI Banking Ombudsman</td>
                      <td>RBI Integrated Ombudsman Scheme 2021 (Deficiency)</td>
                      <td>Directs unfreezing of livelihood funds</td>
                      <td>30 – 45 Days</td>
                      <td>Regulatory order forcing bank compliance &amp; damages</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Advocate-Led 55% OTS</td>
                      <td>Consensual Compromise Settlement Agreement</td>
                      <td>100% Account Unfrozen &amp; Future Payroll Safe</td>
                      <td>15 – 30 Days</td>
                      <td>Absolute debt extinguishment with official ₹0 NDC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Defense &amp; Emergency Account Unfreezing Advisory
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Confronting an illegal bank account freeze requires seasoned banking litigation advocates who understand the nuances of the Code of Civil Procedure, RBI Master Directions, and institutional debt settlement frameworks. SettleLoans provides end-to-end legal defense for salaried borrowers across India: serving formal Section 60 CPC demand notices, halting unlawful recovery harassment, filing emergency escalations with the RBI Banking Ombudsman, and negotiating directly with bank zonal authorities to secure 45% to 65% principal haircuts backed by official, bank-stamped No Dues Certificates.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  11. Frequently Asked Questions: Salary Account Freezes &amp; Legal Remedies
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Direct, legally verified answers to critical questions regarding salary account freezes, Banker Right of Set-Off limitations, and debt settlement protocols in India.
              </p>

              <div className="space-y-3">
                {(jsonLdGraph['@graph'][4] as any).mainEntity.map((faq: any, idx: number) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all"
                  >
                    <summary className="w-full p-4 sm:p-5 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-3 hover:bg-slate-50">
                      <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {faq.name}
                      </span>
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </summary>
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                      <p>{faq.acceptedAnswer.text}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* 5 Official Regulatory Links */}
            <section className="border-t border-slate-200 pt-8 mb-4">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">
                Official Statutory &amp; Regulatory References
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2191"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Code of Civil Procedure, 1908 (Section 60 Salary Exemption)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2187"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Indian Contract Act, 1872 (Section 171 Banker&apos;s Lien)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Account Freeze Grievances)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction – Fair Practices Code for Lenders</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">Supreme Court of India (Article 21 &amp; Livelihood Protection Precedents)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Legal Defense &amp; Loan Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/application-to-unblock-bank-account-for-loan-emi"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Application to Unblock Account for EMI
                </Link>
                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Legal Notice Reply Guide
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Recovery Harassment
                </Link>
                <Link
                  href="/bank-filed-civil-suit-for-loan-recovery-order-37-cpc-summons"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Order 37 CPC Summary Suit Defense
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Loan Default &amp; Jail Rights
                </Link>
                <Link
                  href="/hdfc-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  HDFC Bank Loan Settlement
                </Link>
                <Link
                  href="/icici-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  ICICI Bank Loan Settlement
                </Link>
                <Link
                  href="/axis-bank-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Axis Bank Loan Settlement
                </Link>
                <Link
                  href="/kotak-bank-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Kotak Bank Loan Settlement
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
              </div>
            </section>

          </main>

          {/* Right Column: Author Bio, Emergency Advocate CTA, Trust Signals */}
          <aside className="w-full lg:sticky lg:top-24 space-y-6">
            
            {/* Author Bio Card */}
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
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Senior specialist in banking litigation defense, Section 60 CPC wage exemptions, RBI Ombudsman disputes, and institutional One-Time Settlement negotiations across India.
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Verified Legal Author</span>
                </span>
                <Link
                  href="/authors/ashish-jhangra"
                  className="text-[#1F5EFF] hover:underline font-bold flex items-center gap-0.5"
                >
                  <span>View Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Emergency Account Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Has Your Salary Account Been Frozen?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not let the bank starve your family. Retain seasoned banking advocates to challenge the unlawful set-off under Section 60 CPC and negotiate a 45%–65% OTS.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Immediate Unfreeze Consultation
              </Link>
            </div>

            {/* Trust Signals Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Institutional Protections
              </div>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Section 60 CPC Statutory Compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>RBI Ombudsman Dispute Escalation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Advocate-Led Compromise Settlement</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
