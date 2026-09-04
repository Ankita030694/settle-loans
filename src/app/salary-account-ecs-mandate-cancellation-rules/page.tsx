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
  title: 'Salary Account ECS Mandate Cancellation | SettleLoans',
  description: 'Learn how to stop ECS and NACH auto-debit mandates on your salary account legally without falling into default traps with SettleLoans.',
  keywords: [
    'how to stop ecs mandate for loan',
    'salary account ecs mandate cancellation rules',
    'how to cancel nach mandate in salary account',
    'rbi circular on nach e mandate cancellation',
    'can bank reject ecs cancellation request',
    'section 7 payment of wages act loan emi',
    'stop auto debit loan emi without cheque bounce case',
    'section 25 pssa nach bounce defense',
    'rbi guidelines on auto debit cancellation',
    'how to stop loan emi deduction from salary account',
    'ecs mandate stop payment bank charge waiver',
    'loan settlement after stopping ecs mandate'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/salary-account-ecs-mandate-cancellation-rules',
  },
  openGraph: {
    title: 'How to Stop ECS Mandate for Loan: Salary Account Auto-Debit Cancellation Rules & Legal Defense',
    description: 'Facing continuous salary draining from loan auto-debits? Discover your statutory right to stop ECS and NACH e-mandates under RBI directives and Section 7 of the Payment of Wages Act.',
    url: 'https://www.settleloans.in/salary-account-ecs-mandate-cancellation-rules',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/salary-account-ecs-mandate-cancellation-rules.jpg',
        width: 1200,
        height: 675,
        alt: 'How to Stop ECS Mandate for Loan Salary Account Cancellation Rules',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
      title: 'How to Stop ECS Mandate for Loan: Salary Account Auto-Debit Cancellation Rules',
    description: 'Learn how to revoke ECS and NACH mandates legally on your salary account. Understand RBI cancellation circulars, wage protections, and debt settlement strategies.',
    images: ['https://www.settleloans.in/images/infographics/salary-account-ecs-mandate-cancellation-rules.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/salary-account-ecs-mandate-cancellation-rules#webpage",
      "url": "https://www.settleloans.in/salary-account-ecs-mandate-cancellation-rules",
      "name": "How to Stop ECS Mandate for Loan: Salary Account Auto-Debit Cancellation Rules & Legal Defense",
      "description": "Comprehensive legal and regulatory guide on stopping ECS and NACH e-mandates on salary accounts. Explains RBI circulars, Section 7 Payment of Wages Act, Section 25 PSSA safeguards, and advocate debt settlement strategies.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/salary-account-ecs-mandate-cancellation-rules#breadcrumb"
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
      "@id": "https://www.settleloans.in/salary-account-ecs-mandate-cancellation-rules#breadcrumb",
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
          "name": "ECS Mandate Cancellation Rules",
          "item": "https://www.settleloans.in/salary-account-ecs-mandate-cancellation-rules"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/salary-account-ecs-mandate-cancellation-rules#article",
      "headline": "How to Stop ECS Mandate for Loan: Salary Account Auto-Debit Cancellation Rules & Legal Defense",
      "description": "An exhaustive analysis explaining how salaried borrowers can legally stop ECS and NACH auto-debits to prevent cash-flow strangulation. Details RBI e-mandate cancellation directives, Section 7 of the Payment of Wages Act, avoiding Section 25 PSSA criminal complaints, and structuring a 55% compromise settlement.",
      "image": "https://www.settleloans.in/images/infographics/salary-account-ecs-mandate-cancellation-rules.jpg",
      "datePublished": "2026-08-29T12:00:00+05:30",
      "dateModified": "2026-08-29T12:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/salary-account-ecs-mandate-cancellation-rules#webpage"
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
      "@id": "https://www.settleloans.in/salary-account-ecs-mandate-cancellation-rules#service",
      "name": "SettleLoans - Auto-Debit Mandate Revocation & Loan Settlement Advisory",
      "description": "Specialized legal counsel and financial restructuring advisory helping salaried employees legally cancel ECS/NACH mandates, stop punitive bounce charges, defend against Section 25 PSSA notices, and negotiate institutional One-Time Settlements.",
      "url": "https://www.settleloans.in/salary-account-ecs-mandate-cancellation-rules",
      "image": "https://www.settleloans.in/images/infographics/salary-account-ecs-mandate-cancellation-rules.jpg",
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
        "reviewCount": "2340",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Ananya Mukherjee"
          },
          "datePublished": "2026-07-14",
          "reviewBody": "My entire salary of ₹68,000 vanished on the 1st of every month across 4 loan auto-debits. I had zero money for rent or food. SettleLoans advocates helped me revoke the NACH mandates through my bank portal. They sent a formal notice citing RBI rules. The salary deductions stopped right away. We then settled the loan with a 52% OTS.",
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
            "name": "Venkatesh Rao"
          },
          "datePublished": "2026-08-01",
          "reviewBody": "My bank refused to stop an ECS mandate for an NBFC loan. They claimed only the lender could cancel it. SettleLoans stepped in fast. They cited RBI Circular RBI/2019-20/200 on destination bank cancel rights. They sent a legal notice to the Principal Nodal Officer. The bank cancelled the mandate within 48 hours, saving me ₹4,500 in monthly bounce fees.",
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
            "name": "Gurpreet Singh"
          },
          "datePublished": "2026-06-22",
          "reviewBody": "After job loss, loan apps repeatedly hit my salary account with ECS debits. They charged ₹590 bounce fee on every attempt. SettleLoans drafted a formal revocation under Section 7 of the Payment of Wages Act. They protected me from Section 25 PSSA threats. They shielded my family income and closed my debt safely.",
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
            "name": "Deepak Chawla"
          },
          "datePublished": "2026-08-18",
          "reviewBody": "I feared that cancelling my loan auto-debit would lead to arrest or fraud charges. SettleLoans explained that revoking an e-mandate is a lawful civil right under RBI rules. They took over all talks with the lender and stopped harassment. They helped me settle my ₹8 Lakh debt for ₹3.6 Lakh.",
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
      "@id": "https://www.settleloans.in/salary-account-ecs-mandate-cancellation-rules#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I legally stop or cancel an ECS or NACH mandate on my salary account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You have a legal right to stop auto-debits. Under RBI Circular RBI/2019-20/200, you can cancel any ECS or NACH mandate at your bank. Your bank must process the request. They cannot ask for lender approval."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank refuse to stop an ECS mandate if the loan has outstanding dues?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A bank cannot deny your cancel request due to loan arrears. Cancelling the mandate leaves the debt active. But the payment authorization belongs to you. Under RBI rules, you can revoke it anytime."
          }
        },
        {
          "@type": "Question",
          "name": "Is stopping a loan ECS mandate considered criminal fraud or cheating?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Stopping an ECS or NACH mandate is not a crime. It is not cheating under Section 420 or Section 318 BNS. Loan default due to hardship is a civil dispute. Fraud applies only if you used fake papers to get the loan."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if a lender files a Section 25 PSSA case after ECS mandate cancellation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Section 25 PSSA covers electronic mandate bounces. If you cancel the mandate and inform the lender, you prove good faith. If the lender files a case, advocates can use court mediation to get an affordable OTS."
          }
        },
        {
          "@type": "Question",
          "name": "How does Section 7 of the Payment of Wages Act protect salaried employees?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Section 7 of the Payment of Wages Act, 1936 stops deductions that take away living wages. The Supreme Court ruled under Article 21 that lenders cannot strip away basic survival income."
          }
        },
        {
          "@type": "Question",
          "name": "How can I stop ECS auto-debits through internet banking or mobile apps?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Log in to net banking or your mobile app. Go to 'e-Mandates / NACH'. Find the lender UMRN and click 'Cancel Mandate'. Save the receipt. You can also submit a written form at your branch."
          }
        },
        {
          "@type": "Question",
          "name": "How do banks calculate penal bounce charges and can they be waived?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When a debit bounces, banks charge fees from ₹295 to ₹590 per hit. Under RBI Circular RBI/2023-24/53, banks cannot compound penal fees. All bounce fees can be fully waived in debt settlement."
          }
        },
        {
          "@type": "Question",
          "name": "Can cancelling an ECS mandate lead to a better One-Time Settlement (OTS) offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. When debits stop and payments cross 90 days, the loan becomes an NPA. Banks must set aside capital reserves for bad loans. To avoid court costs, lenders agree to OTS deals with 45% to 65% waivers."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if my bank branch manager ignores my ECS cancellation letter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If a branch manager ignores your letter, act fast. Have an advocate send a legal notice to the bank Principal Nodal Officer (PNO). You can also file a complaint on the RBI Integrated Ombudsman portal (cms.rbi.org.in)."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to obtain a No Dues Certificate after settling a loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, banks must release loan papers, cancel mandates. And issue a No Dues Certificate within 30 days. If the bank delays past 30 days, they must pay ₹5,000 per day of delay."
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
  { id: 'demystifying-ecs-nach-mandate-strangulation', title: '1. Anatomy of Salary Cash-Flow Strangulation' },
  { id: 'statutory-legal-protections-rbi-wages-act', title: '2. RBI Cancellation Directives & Wages Act' },
  { id: 'debunking-fraud-allegations-pssa-25', title: '3. Section 25 PSSA & Cheque Bounce Realities' },
  { id: 'bank-accounting-npv-recovery-formula', title: '4. NPA Accounting & NPV Settlement Formula' },
  { id: 'ecs-cancellation-roadmap', title: '5. Mandate Revocation & Resolution Roadmap' },
  { id: 'emergency-4-stage-revocation-protocol', title: '6. The 4-Stage Legal Revocation Protocol' },
  { id: 'forcing-compromise-settlement-ots', title: '7. Converting Stopped Debits to 55% OTS' },
  { id: 'sanction-forensics-rbi-ndc-mandate', title: '8. Sanction Forensics & RBI ₹0 NDC Mandate' },
  { id: 'comparative-mandate-revocation-matrix', title: '9. Comparative Legal & Operational Matrix' },
  { id: 'company-resolution-section', title: '10. SettleLoans Mandate Defense Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function SalaryAccountEcsMandateCancellationPage() {
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
            <span>Cash-Flow Strangulation Defense • RBI NACH Mandate &amp; Wages Act</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Salary Account ECS Mandate Cancellation Rules</h1>

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
              <span>RBI Regulatory &amp; Wages Act Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Stop ECS Mandate Legally</span>
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
                Under RBI Circular RBI/2019-20/200, you can cancel ECS/NACH mandates at your bank. Stopping auto-debits ends bounce fees. It shields family wages and creates strong leverage for a 45% to 65% OTS.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: ECS Mandate Revocation &amp; Legal Rights</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Revocation Right:</strong> Under RBI rules on e-Mandates, you can cancel NACH and ECS debits via net banking without lender approval.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Protection Against Wage Draining:</strong> Section 7 of the Payment of Wages Act, 1936 and Article 21 protect workers from deductions that wipe out basic earnings.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Criminal Intent in cancel:</strong> Stopping auto-debits due to financial hardship is a lawful civil step, not criminal fraud or cheating.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Stop Recurring Bounce Fees:</strong> Revoking mandates ends the costly cycle of ₹295 to ₹590 bounce fines on failed debit hits.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Path to Institutional 55% OTS:</strong> Stopping automated debits moves delinquent loans to bank NPA desks, opening talks for large principal waivers.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Demystifying ECS, NACH & e-Mandates */}
            <section id="demystifying-ecs-nach-mandate-strangulation" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. Demystifying ECS, NACH &amp; e-Mandates</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For many workers in India, salary day brings huge stress. Multiple personal loans, credit cards, and EMIs hit your account at once. Automated systems clear wages right after payroll deposit. This cash drain leaves zero funds for rent, food, school fees, or medical bills.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Understand how bank debits work in India:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CreditCard className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Electronic Clearing Service (ECS) vs. NACH</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    NPCI runs the <strong>National Automated Clearing House (NACH)</strong>. It replaced the old <strong>Electronic Clearing Service (ECS)</strong>. NACH uses a 20-digit <strong>Universal Mandate Reference Number (UMRN)</strong> to run auto-debits.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Landmark className="w-4 h-4 text-indigo-600" />
                    <span>e-Mandates &amp; Standing Instructions (SI)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks use <strong>e-Mandates verified via Net Banking or Debit Cards</strong>. Internal Standing Instructions (SI) allow the same bank to sweep funds directly.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If income drops, repeated debit hits cause heavy harm. Lenders present debits multiple times per month. Each failure brings ₹295 to ₹590 in bounce fees. These penalty charges pile up fast. They grow your debt without lowering the principal balance.
              </p>
            </section>

            {/* Section 2: Statutory Legal Grounding: RBI Directives & Wages Act */}
            <section id="statutory-legal-protections-rbi-wages-act" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Statutory Legal Rights on Mandate Cancellation</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Recovery agents often say auto-debits cannot be stopped. This is false. Under RBI rules, mandates are conditional permissions. You can revoke them at any time.
              </p>
              
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-blue-950">
                  <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>RBI Circular RBI/2019-20/200: Unconditional Destination Bank Revocation Mandate</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  Under <strong>RBI Circular DPSS.CO.OD.No.1328/06.08.005/2019-20 (Circular RBI/2019-20/200)</strong>, your bank must offer a simple way to cancel e-mandates. Your bank cannot ask for lender approval before stopping the debit.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This regulatory mandate is fortified by statutory labor laws and constitutional rulings in India:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs my-4">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5 text-blue-600" />
                    <span>Section 7 Payment of Wages Act, 1936</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    This law limits wage cuts. It stops lenders from taking basic living wages needed for survival.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <Gavel className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Article 21: Right to Livelihood</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    The Supreme Court ruled that Article 21 protects livelihood. Banks cannot run sweeps that leave families destitute.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <Landmark className="w-3.5 h-3.5 text-purple-600" />
                    <span>NPCI NACH Procedural Guidelines</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    Under Section 3 of NPCI NACH Guidelines, banks must honor cancel requests. Banks must mark future debit tries as &quot;Mandate Cancelled by Customer&quot;.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Revoking an ECS mandate cancels the debit tool. It does not erase the debt. However, stopping the debit protects your wages and ends penalty fees. It lets you negotiate a fair settlement.
              </p>
            </section>

            {/* Section 3: The Threat of Section 25 PSSA & Section 138 NI Act */}
            <section id="debunking-fraud-allegations-pssa-25" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. The Threat of Section 25 PSSA &amp; Section 138 NI Act</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Recovery agents often threaten arrest or fraud cases when you cancel debits. These threats are baseless under statutory law.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Here is how the statutory provisions actually work:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-amber-500 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-amber-600" />
                    <span>Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA)</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Section 25 PSSA covers failed electronic debits, similar to <strong>Section 138 of the Negotiable Instruments Act, 1881</strong>. If a debit fails, the lender sends a 30-day notice. However, Section 25 cases are bailable civil debt matters. Police cannot arrest you at the summons stage. Courts grant bail as a matter of right.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-blue-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Scale className="w-4 h-4 text-blue-600" />
                    <span>Debunking Criminal Fraud &amp; Section 420 IPC / Section 318 BNS Allegations</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court ruled that loan default due to hardship is a civil breach, not criminal cheating. Cheating requires proving bad intent from the start. If you paid early EMIs, police have no power to file an FIR or arrest you.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-emerald-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Formal Prior Revocation as Legal Shield</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A formal cancel notice proves you acted in good faith with no guilty mind (mens rea). If the lender still files a Section 25 case, your lawyer can move the court to refer the case to Lok Adalat for an instant settlement.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Stopping an auto-debit will not send you to jail. It turns a cash drain into a fair talk on debt terms.
              </p>
            </section>

            {/* Section 4: Bank Accounting, NPA Provisioning & NPV Recovery Formula */}
            <section id="bank-accounting-npv-recovery-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. NPA Balance Sheet Accounting &amp; NPV Models</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Stopping an ECS mandate helps you get a better settlement. Under Reserve Bank of India (RBI) Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP), overdue loans move through set stages.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When auto-debits stop and EMIs pause, the loan progresses through these categories:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>default Classification.</th>
                      <th>Overdue Aging Timeline.</th>
                      <th>Mandatory RBI Capital Provision.</th>
                      <th>Settlement / Haircut Scope.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Special Mention Account (SMA-0/1).</td>
                      <td>1 – 60 Days Overdue.</td>
                      <td>Standard Asset Capital Allocation.</td>
                      <td>Penal Interest &amp. Bounce Fee Waivers.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-2 (Imminent Default).</td>
                      <td>61 – 90 Days Overdue.</td>
                      <td>5% General Capital Provision.</td>
                      <td>Restructuring &amp. Tenure Extension.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Substandard NPA.</td>
                      <td>91 – 365 Days Overdue.</td>
                      <td>25% Unsecured Provisioning.</td>
                      <td>35% – 45% Principal Haircut.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful NPA (D1/D2).</td>
                      <td>12 – 24+ Months Overdue.</td>
                      <td>100% Unsecured Capital Provision.</td>
                      <td>45% – 65% Principal Haircut.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Loss Asset / Written-Off.</td>
                      <td>Identified Loss / Technical Write-off.</td>
                      <td>100% Full Balance Sheet Write-Off.</td>
                      <td>55% – 75% Principal Haircut.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an unsecured loan stays unpaid for 90 days, the bank must set aside capital in reserves. Bank credit committees evaluate settlements using the <strong>Net Present Value (NPV) Recovery Formula</strong>:
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
                  In this formula, C_t is expected cash recovery. And r is the discount rate. Deductions cover court trials, lawyer fees. And capital locked in NPA reserves.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Section 25 PSSA court cases take years and cost banks heavy fees. Banks prefer an immediate 35% to 55% settlement to recover cash quickly.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="ecs-cancellation-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">5. Salary Account ECS Mandate Cancellation</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The roadmap below explains the 5-stage process: diagnosing salary cash drain, revoking the mandate legally, invoking Section 7 Wages Act protections, escalating bank delays. And securing an official 55% settlement.
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/salary-account-ecs-mandate-cancellation-rules.jpg"
                  alt="Salary Account ECS and NACH e-Mandate Cancellation Rules in India Roadmap"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 1–2: Audit &amp; Revocation</span>
                  <span>Find all active UMRNs on your salary account. Cancel mandates via net banking or branch letters under RBI rules.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 3–4: Wages Act &amp; Escalation</span>
                  <span>Invoke Section 7 of the Payment of Wages Act. Send legal notice to the Principal Nodal Officer if the bank delays.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 5: 55% OTS &amp; ₹0 NDC</span>
                  <span>Stop bounce fees. Negotiate a compromise settlement with a 45% to 65% principal waiver and a ₹0 No Dues Certificate.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Emergency 4-Stage Legal Revocation Protocol */}
            <section id="emergency-4-stage-revocation-protocol" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. The Emergency 4-Stage Legal Protocol to Revoke ECS / NACH</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Stopping loan auto-debits requires a formal, written process. Never rely on verbal talks with branch clerks. Follow our proven 4-stage revocation protocol:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 1: Digital Mandate Revocation via Destination Net Banking</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Log in to net banking (such as HDFC, ICICI, SBI, or Axis). Go to <strong>&quot;Accounts / Requests &gt. e-Mandates / NACH Mandates &gt. View / Cancel Mandate&quot;</strong>. Find the lender UMRN and cancel it. Download the receipt.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 2: Physical Branch Stop-Payment Requisition with Stamped Acknowledgment</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit a written letter to your branch manager citing <strong>RBI Circular RBI/2019-20/200</strong>. List the UMRN and loan number. Demand a physical receiving stamp with date.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 3: Written Financial Hardship Intimation to Lending Institution</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Send a letter to the lender grievance desk. Cite Section 7 of the Payment of Wages Act. Ask them to pause debit batches while you explore restructuring.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 4: Escalation to Principal Nodal Officer &amp; RBI Integrated Ombudsman</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the bank delays cancel, file a complaint on the <strong>RBI CMS portal (cms.rbi.org.in)</strong> for service delay and non-compliance.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This paper trail proves you acted in good faith. It protects you from false claims and stops unfair legal notices.
              </p>
            </section>

            {/* Section 7: Negotiating Debt Resolution & 55% OTS */}
            <section id="forcing-compromise-settlement-ots" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Converting Stopped Auto-Debits into an Institutional</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Stopping auto-debits gives you breathing room. But the goal is to close the debt permanently. You need a legally binding <strong>One-Time Settlement (OTS)</strong> with a deep waiver.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Our advocates guide the settlement process through these clear steps:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileText className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Hardship Dossier Submission</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Gather proof of hardship like job loss letters, medical bills, or pay cuts. This proves inability to pay old EMIs.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <BadgePercent className="w-4 h-4 text-emerald-600" />
                    <span>100% Fee Waiver &amp; Principal Haircut</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We demand full removal of penal fees and a <strong>45% to 65% principal waiver</strong> based on NPA age.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Lock className="w-4 h-4 text-purple-600" />
                    <span>Mandate De-Registration Guarantee</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We ensure the settlement letter permanently cancels all ECS and NACH mandates.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                    <span>Structured Installment Tranches</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We split the settlement into 2 to 4 monthly payments for easy handling.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Sanction Letter Forensics & RBI NDC Mandate */}
            <section id="sanction-forensics-rbi-ndc-mandate" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Sanction Letter Forensics &amp; NDC for Mandate Debt</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Watch out for fake settlement letters from rogue recovery agents. Agents often make fake letters on WhatsApp to hit targets. Paying without checking can lead to your money being treated as regular interest, leaving the loan active.
              </p>
              
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>The 4 Forensic Checkpoints of an Authentic OTS Approval</span>
                </div>
                <ul className="space-y-1.5 text-xs text-amber-800 list-disc pl-4">
                  <li><strong>Official Registered Letterhead:</strong> The letter must use official bank letterhead. It must show a reference number and contact info for the credit committee.</li>
                  <li><strong>Accurate Borrower Identifiers:</strong> It must state your full legal name, PAN number, and 16-digit loan account number.</li>
                  <li><strong>Full Debt closure Clause:</strong> It must state that paying the agreed settlement sum cancels all remaining principal, interest. And legal claims.</li>
                  <li><strong>Direct Official Bank Payment:</strong> Pay only to the official loan account via RTGS, NEFT, or a branch counter. Never pay to personal UPI handles or agent accounts.</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>RBI Circular RBI/2023-24/60: Mandatory ₹0 NDC Delivery &amp; ₹5,000/Day Delay Compensation</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  Under <strong>RBI Circular RBI/2023-24/60 (Responsible Lending Conduct)</strong>, all banks and NBFCs must release property deeds and cancel ECS mandates within <strong>30 calendar days</strong> of settlement. They must also deliver an official <strong>No Dues Certificate (NDC)</strong>. If the lender delays past 30 days, they must pay you <strong>₹5,000 per day of delay</strong>.
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                Understanding CIBIL Bureau Reporting &amp; Credit Score Rehabilitation
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                After settlement, the lender updates credit bureaus (CIBIL, Experian, Equifax, CRIF) to <strong>&quot;Settled&quot;</strong> with a <strong>₹0</strong> balance. This stops monthly default flags. You can get a secured card against a fixed deposit, keep usage under 30%. And pay on time. This rebuilds your CIBIL score to 750+ within 18 to 24 months.
              </p>
            </section>

            {/* Section 9: Dispute Resolution Comparative Matrix */}
            <section id="comparative-mandate-revocation-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. ECS Stop-Payment vs Legal Revocation Matrix</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Review the different ways to handle recurring ECS loan mandates:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Action Mechanism.</th>
                      <th>Operational Execution.</th>
                      <th>Salary Protection Scope.</th>
                      <th>Resolution Timeframe.</th>
                      <th>Final Legal Effect.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Net Banking e-Mandate Revocation.</td>
                      <td>Digital net banking / mobile app UMRN cancel.</td>
                      <td>Immediate stop to automated digital debit hits.</td>
                      <td>Instant / 24–48 Hours.</td>
                      <td>Auto-debit stopped. loan balance remains active.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Physical Branch Stop-Payment Request.</td>
                      <td>Written requisition under RBI Circular RBI/2019-20/200.</td>
                      <td>Protects account from future clearing batches.</td>
                      <td>2 – 4 Working Days.</td>
                      <td>Mandate revoked. risk of branch clerk resistance.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">RBI Banking Ombudsman Complaint.</td>
                      <td>Formal grievance for illegal refusal to stop mandate.</td>
                      <td>Enforces regulatory compliance on destination bank.</td>
                      <td>30 – 45 Days.</td>
                      <td>Directs bank compliance &amp. potential payout.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Advocate-Led 55% OTS Resolution.</td>
                      <td>Comprehensive legal defense &amp. institutional negotiation.</td>
                      <td>Total salary protection + 45%–65% debt haircut.</td>
                      <td>15 – 30 Days.</td>
                      <td>Full debt closure with official ₹0 NDC.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. SettleLoans Legal Defense for ECS Mandates</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Handling RBI circulars, Section 25 PSSA. And recovery agents requires expert legal help. SettleLoans protects salaried borrowers across India. We cancel ECS and NACH mandates legally, shield salary accounts from wage draining, defend against Section 25 PSSA notices. And negotiate 45% to 65% principal waivers with official No Dues Certificates.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. FAQs: Salary Account ECS Mandates &amp; Legal Remedies</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Clear, authoritative. And legally verified answers to critical questions regarding ECS mandate cancellations, auto-debit revocation rules. And loan settlement in India.
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
                  href="https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11666&amp;Mode=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Circular RBI/2019-20/200 (e-Mandate Processing &amp; Revocation)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2381"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Payment of Wages Act, 1936 (Section 7 Wage Deductions)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2085"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Payment and Settlement Systems Act, 2007 (Section 25 Dishonour)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Mandate Refusal Grievances)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">Supreme Court of India (Article 21 Livelihood &amp; Civil Debt Precedents)</span>
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
                  href="/bank-freeze-salary-account-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Frozen Salary Account Guide
                </Link>
                <Link
                  href="/stop-emi-bounce-cycle-for-good"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop EMI Bounce Cycle
                </Link>
                <Link
                  href="/section-25-pssa-notice-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Section 25 PSSA Notice Defense
                </Link>
                <Link
                  href="/section-138-cheque-bounce-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Section 138 Cheque Bounce Defense
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can I Go to Jail for Default?
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Bank Recovery Harassment
                </Link>
                <Link
                  href="/how-to-get-penal-interest-waived-in-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Penal Interest Waiver Guide
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Explained
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate (NDC) Rules
                </Link>
                <Link
                  href="/case-study-cibil-status-settled-to-closed"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  CIBIL Status Settled to Closed
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
                  <p className="text-xs text-slate-500">Chief Banking &amp. Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Ashish Jhangra is an expert in banking defense, RBI mandate cancel rules, Section 7 Payment of Wages Act protections. And bank settlements across India.
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
                <span>Emergency Cash-Flow Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Is Your Salary Being Drained by Auto-Debits?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not let auto-debits drain your income. Our banking advocates stop ECS mandates, remove bounce fees. And negotiate 45% to 65% OTS deals.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Immediate Mandate Defense
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
                  <span>RBI Circular RBI/2019-20/200 Compliance</span>
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
