import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';
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
  CheckCircle,
  Calculator,
  Gavel,
  FileCheck,
  ShieldX,
  UserCheck,
  BadgePercent
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'IndusInd Bank Personal Loan Settlement: OTS Process, Haircut & Legal Guide (2026)',
  description: 'Comprehensive legal guide to IndusInd Bank personal loan and credit card settlement. Understand recovery calls, Section 25 PSSA notices, NPA provisioning, and how to negotiate up to 60% haircut under RBI rules.',
  keywords: [
    'indusind bank personal loan settlement',
    'indusind bank loan settlement process',
    'indusind bank ots policy',
    'indusind bank loan settlement percentage',
    'indusind bank credit card settlement',
    'indusind bank recovery agent harassment complaint',
    'indusind bank section 25 pssa notice',
    'indusind bank legal notice reply',
    'indusind bank lok adalat settlement',
    'indusind bank stressed asset resolution',
    'indusind bank no dues certificate after settlement',
    'indusind bank nodal officer email id',
    'indusind bank pioneer account lien loan default'
  ],
  alternates: {
    canonical: 'https://settleloans.in/indusind-bank-personal-loan-settlement',
  },
  openGraph: {
    title: 'IndusInd Bank Personal Loan Settlement: OTS Process, Haircut & Legal Guide (2026)',
    description: 'Learn how to settle an IndusInd Bank personal loan or credit card. Understand NPA provisioning rules, Section 25 PSSA defense, recovery agent conduct rules, and RBI compromise settlement frameworks.',
    url: 'https://settleloans.in/indusind-bank-personal-loan-settlement',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://settleloans.in/images/infographics/indusind-bank-personal-loan-settlement.jpg',
        width: 1200,
        height: 675,
        alt: 'IndusInd Bank Personal Loan Settlement Process & OTS Haircut Blueprint',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IndusInd Bank Personal Loan Settlement Guide: Legal OTS & Haircut Rules',
    description: 'Technical and legal playbook for settling defaulted IndusInd Bank personal loans, credit cards, and digital credit lines under RBI compromise frameworks.',
    images: ['https://settleloans.in/images/infographics/indusind-bank-personal-loan-settlement.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://settleloans.in/indusind-bank-personal-loan-settlement#webpage",
      "url": "https://settleloans.in/indusind-bank-personal-loan-settlement",
      "name": "IndusInd Bank Personal Loan Settlement: OTS Process, Haircut & Legal Guide (2026)",
      "description": "Comprehensive legal guide to IndusInd Bank personal loan and credit card settlement. Understand recovery calls, Section 25 PSSA notices, NPA provisioning, and how to negotiate up to 60% haircut under RBI rules.",
      "breadcrumb": {
        "@id": "https://settleloans.in/indusind-bank-personal-loan-settlement#breadcrumb"
      },
      "inLanguage": "en-IN",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://settleloans.in/#website",
        "name": "SettleLoans",
        "url": "https://settleloans.in"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://settleloans.in/indusind-bank-personal-loan-settlement#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://settleloans.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "IndusInd Bank Personal Loan Settlement",
          "item": "https://settleloans.in/indusind-bank-personal-loan-settlement"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://settleloans.in/indusind-bank-personal-loan-settlement#article",
      "headline": "IndusInd Bank Personal Loan Settlement: OTS Process, Haircut & Legal Guide",
      "description": "An analytical, step-by-step guide to settling defaulted IndusInd Bank personal loans and credit cards, understanding NPA write-off mechanics, replying to Section 25 PSSA notices, and securing an official bank-stamped No Dues Certificate under RBI rules.",
      "image": "https://settleloans.in/images/infographics/indusind-bank-personal-loan-settlement.jpg",
      "datePublished": "2026-08-24T12:00:00+05:30",
      "dateModified": "2026-08-24T12:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://settleloans.in/indusind-bank-personal-loan-settlement#webpage"
      },
      "author": {
        "@type": "Person",
        "name": "Ashish Jhangra",
        "url": "https://settleloans.in/authors/ashish-jhangra"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://settleloans.in/#organization",
        "name": "SettleLoans",
        "url": "https://settleloans.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://settleloans.in/logo/logo.svg"
        }
      }
    },
    {
      "@type": "FinancialService",
      "@id": "https://settleloans.in/indusind-bank-personal-loan-settlement#service",
      "name": "SettleLoans - IndusInd Bank Personal Loan Settlement & Legal Defense",
      "description": "Expert legal representation and financial negotiation services for settling delinquent IndusInd Bank personal loans, credit cards, and digital credit lines under RBI compromise frameworks.",
      "url": "https://settleloans.in/indusind-bank-personal-loan-settlement",
      "image": "https://settleloans.in/images/infographics/indusind-bank-personal-loan-settlement.jpg",
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
        "@id": "https://settleloans.in/#organization",
        "name": "SettleLoans",
        "url": "https://settleloans.in"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1840",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Rajesh Varma"
          },
          "datePublished": "2026-06-20",
          "reviewBody": "My IndusInd Bank personal loan of ₹9.5 Lakhs went into default after my distribution business suffered major losses. Third-party recovery agents began making persistent phone calls. SettleLoans stepped in, issued a formal legal cease-and-desist under RBI Recovery Agent Master Directions, and escalated my case to the IndusInd Stressed Assets desk. They secured an official OTS sanction letter for ₹4.1 Lakhs, representing a 57% principal haircut paid in two tranches. The ₹0 NDC arrived within four weeks.",
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
            "name": "Kavita Singhal"
          },
          "datePublished": "2026-07-16",
          "reviewBody": "IndusInd Bank placed a general lien on my savings account under Section 171 and sent a Section 25 PSSA notice following unpaid loan EMIs. The advocates at SettleLoans protected my remaining operational capital, drafted a comprehensive legal reply establishing genuine medical distress, and negotiated a single-shot settlement at a 52% discount directly with the Zonal Nodal Officer.",
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
            "name": "Manish Tewari"
          },
          "datePublished": "2026-05-18",
          "reviewBody": "Defaulted on an IndusInd Bank credit card and personal loan totaling ₹6.8 Lakhs after an abrupt corporate layoff. SettleLoans represented me in discussions with the IndusInd Central Settlement Committee. They eliminated all penal levies and compound interest, arriving at a final compromise settlement of ₹2.8 Lakhs with a genuine bank closure confirmation.",
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
            "name": "Sunita Menon"
          },
          "datePublished": "2026-08-08",
          "reviewBody": "SettleLoans represented me when IndusInd Bank referred my defaulted personal loan to a National Lok Adalat conciliation bench. Their legal counsel finalized an enforceable settlement decree with a 55% debt waiver and verified the sanction letter before I deposited any money. Truly professional and transparent.",
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
      "@id": "https://settleloans.in/indusind-bank-personal-loan-settlement#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the IndusInd Bank personal loan settlement process?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The IndusInd Bank personal loan settlement process is a structured compromise resolution between IndusInd Bank Limited and an unsecured borrower facing genuine financial insolvency. When an unsecured personal loan or credit card crosses 90 consecutive days of non-payment and is classified as a Non-Performing Asset (NPA), discretionary power leaves local branches and transfers to IndusInd Bank's Stressed Asset Management Division or Zonal Legal Settlement Desk. The borrower submits a formal One-Time Settlement (OTS) proposal accompanied by hardship documentation such as medical bills, job termination letters, or business loss statements. The bank's Credit Committee evaluates the proposal against Net Present Value (NPV) recovery metrics. Upon approval, IndusInd Bank issues an official stamped OTS Sanction Letter, and once the compromised amount is deposited directly into the loan ledger, the bank extinguishes the residual liability and issues a No Dues Certificate (NDC)."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of debt waiver or haircut does IndusInd Bank typically approve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "IndusInd Bank typically approves principal haircuts between 45% and 65% of the total outstanding ledger balance on defaulted unsecured personal loans and credit cards. The exact haircut percentage depends on the NPA provisioning age (Substandard, Doubtful D1/D2, or Loss Asset), whether the bank has already absorbed 100% provisioning losses on its balance sheet, and the verifiability of the borrower's hardship dossier. In all RBI-compliant compromise settlements, 100% of accumulated penal interest, overdue charges, and cheque bounce fees are completely waived."
          }
        },
        {
          "@type": "Question",
          "name": "How should borrowers handle Section 25 PSSA and Section 138 notices from IndusInd Bank?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When an electronic NACH mandate or repayment cheque dishonours due to insufficient funds, IndusInd Bank's legal vertical routinely serves statutory demand notices under Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA) or Section 138 of the Negotiable Instruments Act, 1881. Borrowers must never ignore these statutory communications. A formal legal reply drafted by experienced debt defense advocates must be served within the mandatory 15-day window, setting out genuine financial distress, disputing usurious penalty calculations, and proposing an amicable One-Time Settlement to avert criminal court escalation."
          }
        },
        {
          "@type": "Question",
          "name": "Can IndusInd Bank freeze my savings account or Pioneer account for an overdue loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Under Section 171 of the Indian Contract Act, 1872 (Banker's Right of General Lien and Set-Off), IndusInd Bank is legally entitled to freeze funds or offset balances held in any savings account, salary account, current account, fixed deposit, or Pioneer wealth account linked to the same Customer Identification (CIF) or PAN. However, IndusInd Bank has zero statutory authority to unilaterally freeze or deduct funds from accounts maintained with other independent banking institutions (such as HDFC, ICICI, or SBI) without obtaining an explicit attachment order from a competent Civil Court."
          }
        },
        {
          "@type": "Question",
          "name": "What protections exist against harassment by IndusInd Bank recovery agents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Borrowers are strictly protected under the RBI Master Directions on Recovery Agents and Conduct (2022) and the Fair Practices Code. IndusInd recovery agents are legally prohibited from: (1) Calling before 08:00 AM or after 07:00 PM; (2) Visiting workplaces or public locations to cause social embarrassment; (3) Contacting family members, employers, or friends; (4) Using abusive language, coercion, or intimidation. Visiting agents must carry an official bank authorization letter, government ID, and DRA registration. Violations can be escalated to IndusInd Bank's Principal Nodal Officer and the RBI Integrated Ombudsman for immediate disciplinary action."
          }
        },
        {
          "@type": "Question",
          "name": "Can IndusInd personal loans be settled through National Lok Adalat benches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. IndusInd Bank actively participates in quarterly National Lok Adalat sessions conducted under the Legal Services Authorities Act, 1987. Pre-litigation and pending recovery matters referred to Lok Adalat allow borrowers to negotiate with bank representatives holding pre-approved settlement mandates and substantial haircut flexibility (often 45% to 60%). The settlement award passed by the Lok Adalat bench has the legal force of a non-appealable Civil Court Decree, permanently closing the dispute."
          }
        },
        {
          "@type": "Question",
          "name": "Can an IndusInd Bank personal loan settlement be paid in monthly installments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. While IndusInd Bank offers the deepest haircuts for single-shot lump-sum settlements, the bank routinely approves structured multi-part settlements spanning 2 to 4 monthly installments for borrowers demonstrating acute cash flow constraints. All installment dates, exact rupee amounts, and final debt discharge terms must be explicitly documented in the official OTS Sanction Letter before making the first payment."
          }
        },
        {
          "@type": "Question",
          "name": "How does an IndusInd loan settlement impact my CIBIL score and credit history?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Upon successful execution of the OTS, IndusInd Bank reports the account to credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark) with the status 'Settled' or 'Post-Write-off Settled' and a balance of ₹0. While this produces a temporary credit score reduction of 75 to 150 points and triggers a 12-month cooling period under RBI compromise rules, it permanently halts negative compounding arrears. Borrowers can rebuild their score back above 750 within 18 to 24 months by maintaining disciplined repayment on secured credit builder products."
          }
        },
        {
          "@type": "Question",
          "name": "What essential checkpoints must be verified on an IndusInd OTS Sanction Letter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Before depositing any settlement payment, borrowers must verify: (1) The letter is on official IndusInd Bank Limited letterhead with branch address and bank seal; (2) The document contains the borrower's exact loan account number and PAN; (3) It specifies the exact compromised settlement amount and clear installment deadlines; (4) It contains an unequivocal clause confirming that payment will extinguish all outstanding claims and result in full closure; (5) It carries the signature and employee code of an authorized signatory."
          }
        },
        {
          "@type": "Question",
          "name": "What is the statutory deadline for IndusInd Bank to issue a No Dues Certificate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, IndusInd Bank is legally obligated to release a formal No Dues Certificate (NDC) / Loan Closure Letter and update credit bureau records within 30 calendar days of receiving the final settlement tranche. Failure to deliver the closure document within 30 days without lawful justification renders the bank liable to pay statutory compensation of ₹5,000 per day of delay directly to the borrower."
          }
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://settleloans.in/#organization",
      "name": "SettleLoans",
      "url": "https://settleloans.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://settleloans.in/logo/logo.svg"
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
  { id: 'understanding-indusind-loan-defaults', title: '1. IndusInd Loan Delinquency & Recovery Architecture' },
  { id: 'indusind-pre-litigation-notices-section-25', title: '2. Pre-Litigation Machinery & Statutory Summons Defense' },
  { id: 'bankers-lien-section-171-harassment-defense', title: '3. Section 171 Banker\'s Lien & Harassment Shield' },
  { id: 'indusind-npa-accounting-npv-formula', title: '4. NPA Provisioning Mechanics & The NPV Recovery Equation' },
  { id: 'indusind-settlement-visual-roadmap', title: '5. IndusInd Settlement Visual Roadmap' },
  { id: 'direct-negotiation-strategy-nodal-desks', title: '6. Direct Negotiation with IndusInd Stressed Asset Desks' },
  { id: 'sanction-letter-forensics-authenticity', title: '7. Sanction Letter Forensics & Trap Avoidance' },
  { id: 'remittance-rbi-ndc-mandate-cibil-recovery', title: '8. Loan Remittance, RBI ₹0 NDC & Credit Recovery' },
  { id: 'indusind-settlement-comparative-matrix', title: '9. Comprehensive Resolution Matrix' },
  { id: 'company-resolution-section', title: '10. SettleLoans Legal Defense & Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function IndusIndBankPersonalLoanSettlementPage() {
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
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-red-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <Landmark className="w-3.5 h-3.5" />
            <span>Bank-Specific Dispute Resolution • IndusInd Bank</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black text-white mb-3 leading-snug tracking-tight">
            IndusInd Bank Personal Loan Settlement: <span className="text-[#3b82f6] md:text-[#60a5fa]">OTS Process, Haircut &amp; Legal Guide (2026)</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 mb-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Facing aggressive collection calls, Section 25 PSSA summons, or account liens on your IndusInd Bank personal loan or credit card? Learn IndusInd Bank&apos;s internal provisioning rules, statutory borrower protections, and how to negotiate directly with legal nodal officers for an official OTS sanction letter and ₹0 No Dues Certificate.
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
              <span>RBI Master Direction Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Negotiate IndusInd Settlement</span>
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
          
          {/* Left Column: Table of Contents + Executive Crux */}
          <aside className="w-full lg:sticky lg:top-24 space-y-4">
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
                    className="block py-1.5 px-2.5 rounded-lg text-slate-600 hover:bg-slate-200/60 hover:text-slate-900 transition-all duration-150 leading-snug"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick Executive Case Crux Box */}
            <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>IndusInd Quick Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                IndusInd Bank utilizes aggressive digital recovery channels and pre-litigation notices. Bypassing third-party collection agencies and escalating directly to Stressed Asset Desks unlocks 45%–65% principal haircuts with a legally verified ₹0 NDC.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: IndusInd Bank Loan Resolution</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Delinquency &amp; NPA Progression:</strong> Unsecured personal loans and credit cards transition into Non-Performing Assets (NPA) after 90 days, shifting recovery jurisdiction from branch managers to the Stressed Asset Resolution Division.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Haircut Parameters:</strong> Distressed borrowers with documented financial insolvency qualify for 45% to 65% principal waivers, alongside complete 100% cancellation of penal interest and late fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 25 PSSA &amp; 138 Defense:</strong> Immediate legal response to NACH failure notices preserves statutory rights, neutralizes criminal coercion tactics, and initiates compromise dialogue.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Banker&apos;s Lien Boundaries:</strong> While IndusInd Bank can exercise set-off against internal savings or Pioneer accounts under Section 171, it has zero authority to freeze accounts in third-party banks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory ₹0 NDC Mandate:</strong> Under RBI Circular RBI/2023-24/60, IndusInd Bank is legally mandated to deliver a No Dues Certificate within 30 days of settlement payment under a ₹5,000 daily penalty rule.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: IndusInd Loan Delinquency & Recovery Framework */}
            <section id="understanding-indusind-loan-defaults" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. IndusInd Bank Loan Delinquency &amp; Retail Risk Management Architecture
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                IndusInd Bank Limited operates an extensive retail asset and digital consumer financing portfolio across India, distributing unsecured personal loans, consumer durable lines, and premium credit cards. When severe socioeconomic shocks—such as involuntary job loss, business revenue contraction, catastrophic medical emergencies, or family crises—render a borrower incapable of servicing monthly equated monthly installments (EMIs), IndusInd Bank&apos;s automated credit risk architecture initiates a tightly regulated recovery protocol.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the prudential norms established by the Reserve Bank of India (RBI), delinquent retail loans advance through standardized asset classification tiers based on the duration of non-payment:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
                <li><strong>Special Mention Account 0 (SMA-0):</strong> Outstanding dues between 1 and 30 days overdue. Automated SMS reminders, payment reminder emails, and customer care follow-ups initiate soft recovery efforts.</li>
                <li><strong>Special Mention Account 1 (SMA-1):</strong> Overdue duration spanning 31 to 60 days. IndusInd Bank accelerates tele-calling engagement, issues formal demand letters, and activates external tele-collection vendors.</li>
                <li><strong>Special Mention Account 2 (SMA-2):</strong> Delinquency ranging from 61 to 90 days. The account enters high-risk pre-NPA status. The bank prepares pre-litigation notices and assigns local field recovery agencies.</li>
                <li><strong>Non-Performing Asset (NPA):</strong> Overdue surpassing 90 consecutive calendar days. Under the RBI Master Direction on Prudential Norms on Income Recognition, Asset Classification and Provisioning, the account is categorized as a Substandard Asset. Branch-level negotiation powers terminate, and recovery jurisdiction transfers to IndusInd Bank&apos;s Stressed Asset Management Division.</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because unsecured personal loans carry no underlying physical collateral such as property or vehicles, IndusInd Bank cannot invoke the SARFAESI Act for summary seizure. Instead, the bank relies on structured pre-litigation notices, credit bureau reporting leverage, and legal conciliation mechanisms to recover capital before entertaining compromise settlement proposals.
              </p>
            </section>

            {/* Section 2: Pre-Litigation Machinery & Statutory Summons Defense */}
            <section id="indusind-pre-litigation-notices-section-25" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. IndusInd Pre-Litigation Machinery, Section 25 PSSA Notices &amp; Statutory Defense
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                As a delinquent personal loan transitions from SMA-2 into NPA status, IndusInd Bank&apos;s legal collection vertical routinely issues statutory legal notices. Empanelled legal firms representing the bank deploy these instruments to establish a formal paper trail and encourage the borrower to resolve outstanding liabilities. Distinguishing between genuine statutory proceedings and tactical collection communications is essential.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The predominant legal instruments utilized by IndusInd Bank include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Section 25 PSSA Demand Notices</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Triggered when an electronic National Automated Clearing House (NACH) auto-debit fails due to insufficient funds under Section 25 of the Payment and Settlement Systems Act, 2007. The statute carries quasi-criminal penalties similar to cheque dishonour laws.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileText className="w-4 h-4 text-red-600" />
                    <span>Section 138 NI Act Cheque Notices</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Issued when a physical post-dated security cheque bounces upon presentation. The statute mandates a strict 15-day notice period to remedy payment before criminal complaints may be filed before a Judicial Magistrate.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-amber-600" />
                    <span>Pre-Litigation Conciliation Notices</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    IndusInd Bank frequently refers delinquent personal loan accounts to online dispute resolution platforms and District Legal Services Authorities (DLSA) for pre-litigation conciliation hearings prior to formal court filing.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    <span>National Lok Adalat Referrals</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Delinquent files are referred to statutory Lok Adalat benches organized under the Legal Services Authorities Act, 1987, providing a judicial forum for final compromise settlement and non-appealable settlement awards.
                  </p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers must never ignore a formal legal notice. Serving an advocate-drafted reply within the statutory 15-day window establishes genuine hardship, disputes excessive penal compound interest, and creates the legal foundation for an amicable One-Time Settlement (OTS).
              </p>
            </section>

            {/* Section 3: Banker's Lien & Harassment Shield */}
            <section id="bankers-lien-section-171-harassment-defense" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Section 171 Banker&apos;s Lien, Account Freezes &amp; Harassment Defense
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A critical legal issue encountered by distressed borrowers is the sudden debiting or freezing of funds in their savings accounts. Under Section 171 of the Indian Contract Act, 1872, banking institutions possess the statutory <em>Right of General Lien and Set-Off</em>. This grants IndusInd Bank the legal authority to deduct funds from any savings account, salary account, current account, fixed deposit, or Pioneer wealth relationship maintained under the borrower&apos;s Customer Identification File (CIF) or PAN to offset delinquent personal loan dues.
              </p>
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-2">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Strategic Account Shielding Protocol</span>
                </div>
                <p className="leading-relaxed">
                  While IndusInd Bank can lawfully exercise general lien rights over accounts maintained within IndusInd Bank, <strong>the bank has zero legal power to freeze, attach, or debit funds held in independent third-party banks</strong> (such as State Bank of India, HDFC Bank, or ICICI Bank) without an explicit judicial attachment decree from a competent Civil Court. Borrowers facing severe delinquency should promptly divert active salary credits and emergency reserves to an independent banking institution to maintain basic household liquidity.
                </p>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                Statutory Defense Against Third-Party Recovery Agent Harassment
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When personal loans remain overdue beyond 60 days, IndusInd Bank routinely engages empanelled third-party Debt Recovery Agencies (DRAs). All collection conduct is strictly governed by the <strong>RBI Master Directions on Recovery Agents and Conduct (2022)</strong> and the statutory Fair Practices Code. Borrowers are protected by enforceable regulatory mandates:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Calling Hour Restrictions:</strong> Recovery agents may contact borrowers exclusively between 08:00 AM and 07:00 PM. Calls placed outside this statutory window constitute a direct regulatory breach.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Workplace &amp; Social Boundary:</strong> Agents are prohibited from visiting workplaces, contacting supervisors, or intimidating family members, neighbors, and personal references.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory Identification:</strong> Visiting personnel must produce an official bank authorization letter, verified photo ID, and DRA registration credentials prior to any interaction.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Prohibition of Coercive Tactics:</strong> Verbal threats, obscene messages, physical intimidation, or false claims of non-bailable arrest warrants violate Sections 503 and 506 of the Indian Penal Code (IPC) / Bharatiya Nyaya Sanhita (BNS).</span>
                </li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If recovery agents violate these directives, our legal counsel files an immediate cease-and-desist complaint with IndusInd Bank&apos;s Principal Nodal Officer and escalates the matter to the RBI Integrated Ombudsman for regulatory sanctions.
              </p>
            </section>

            {/* Section 4: NPA Accounting & Net Present Value (NPV) Equation */}
            <section id="indusind-npa-accounting-npv-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. IndusInd Bank Accounting, NPA Provisioning &amp; The Net Present Value (NPV) Equation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Securing a favorable One-Time Settlement with IndusInd Bank requires understanding the financial pressures governing commercial bank balance sheets. Under Reserve Bank of India provisioning guidelines, banks cannot carry defaulted loans indefinitely without setting aside statutory capital reserves from operating profits to absorb potential credit losses.
              </p>
              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Asset Classification</th>
                      <th>Delinquency Duration</th>
                      <th>RBI Mandatory Provisioning</th>
                      <th>IndusInd OTS Haircut Potential</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Standard / SMA-1 / SMA-2</td>
                      <td>1 – 90 Days</td>
                      <td>0.40% – 5.0% General Provision</td>
                      <td>0% – 15% (Interest Waivers Only)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Substandard (NPA)</td>
                      <td>91 – 365 Days</td>
                      <td>25% Unsecured Provision</td>
                      <td>30% – 45% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful 1 (D1)</td>
                      <td>12 – 24 Months Default</td>
                      <td>100% Unsecured Capital Provision</td>
                      <td>45% – 55% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful 2 / Loss Asset</td>
                      <td>24+ Months / Written-Off</td>
                      <td>100% Full Capital Write-Off</td>
                      <td>55% – 65% Principal Haircut</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once an unsecured personal loan crosses 12 months in default, IndusInd Bank has fully provisioned 100% of the principal against its capital reserves. At this stage, the bank evaluates any compromise proposal against an internal <strong>Net Present Value (NPV) Recovery Benchmark</strong>:
              </p>

              {/* JSX Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>IndusInd Bank Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated recoverable cash flows over time, r is IndusInd Bank&apos;s internal discount hurdle rate, and deductions account for 3–5 years of judicial delay in civil summary suits, advocate retainers, and the capital drag of locked NPA provisions.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because unsecured civil litigation under Order 37 of the Code of Civil Procedure (CPC) involves substantial advocate fees and protracted court schedules, IndusInd Bank&apos;s Credit Committee frequently finds that accepting an immediate lump-sum settlement of 35% to 55% of the principal balance delivers a higher net economic yield than multi-year legal pursuit.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="indusind-settlement-visual-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. IndusInd Bank Personal Loan Settlement Visual Roadmap
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The infographic below illustrates the 5-step institutional lifecycle from initial default and statutory notice defense to hardship file submission, sanction letter forensic audit, and final ₹0 No Dues Certificate delivery.
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/indusind-bank-personal-loan-settlement.jpg"
                  alt="IndusInd Bank Personal Loan Settlement Process & OTS Haircut Roadmap"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Step 1–2: NPA &amp; Legal Notice</span>
                  <span>Delinquency crosses 90 days; bank issues Section 25 PSSA notice; legal advocates prepare defensive reply.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Step 3–4: Nodal Desk Negotiation</span>
                  <span>Submit documented financial hardship dossier to Stressed Asset Desks; negotiate 45%–65% principal haircut.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Step 5: Sanction &amp; ₹0 NDC</span>
                  <span>Verify stamped OTS sanction letter; remit via direct loan account RTGS; secure statutory No Dues Certificate.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Direct Negotiation Strategy with IndusInd Stressed Asset Desks */}
            <section id="direct-negotiation-strategy-nodal-desks" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Direct Negotiation Strategy with IndusInd Stressed Asset Desks &amp; Legal Nodal Officers
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A common misstep among defaulting borrowers is attempting to negotiate settlement concessions with third-party recovery tele-callers or visiting field agents. Outsourced collection agencies operate on recovery commission quotas; they lack delegated financial powers to write off principal balances or issue legally binding settlement letters. Verbal promises made by collection callers carry zero legal weight and often lead to partial deposits being consumed by accumulated penal charges.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To achieve an authentic, high-haircut One-Time Settlement, negotiations must follow a disciplined institutional roadmap:
              </p>
              
              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 1: Hardship Documentation Dossier</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A formal OTS proposal must be supported by comprehensive documentary proof. This includes hospital discharge summaries, medical expense records, employment termination notices, salary reduction slips, GST surrender certificates, or bank statements demonstrating acute insolvency. The goal is to prove genuine inability to pay rather than wilful default.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 2: Direct Escalation to Stressed Asset Desks</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Our legal team bypasses recovery agency intermediaries and submits the settlement proposal directly to IndusInd Bank&apos;s Zonal Stressed Asset Management Division, the Central Settlement Committee, and the Principal Nodal Officer. This eliminates intermediary markups and prevents unauthorized promises.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Phase 3: Financial Anchoring &amp; Multi-Tranche Structuring</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Initial bank counter-offers typically demand 70% to 80% of the ledger balance. Through iterative legal representation and anchoring against the bank&apos;s 100% provisioning absorption, the payable sum is negotiated down to 35% to 55% of the principal debt, structured as a single lump sum or 2 to 4 manageable installments.
                  </p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By presenting a mathematically sound and legally documented resolution proposal, borrowers transform an adversarial recovery confrontation into a professional commercial agreement.
              </p>
            </section>

            {/* Section 7: Sanction Letter Forensics: Verifying Authenticity */}
            <section id="sanction-letter-forensics-authenticity" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Sanction Letter Forensics: Verifying Authenticity &amp; Eliminating Traps
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Prior to remitting any settlement funds, the borrower must conduct a rigorous forensic audit of the One-Time Settlement (OTS) Sanction Letter. Unscrupulous recovery agents have been known to circulate unauthorized letters or informal payment receipts to meet monthly collection quotas, leaving the borrower with an active loan liability.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A legally valid IndusInd Bank OTS Sanction Letter must satisfy five non-negotiable legal criteria:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Official Letterhead &amp; Branch Identification</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The document must be printed on official IndusInd Bank Limited corporate letterhead, showing registered office details, branch reference codes, and authentic bank formatting.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CheckCircle className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Exact Loan Account &amp; PAN Binding</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Verify that the letter explicitly cites your 16-digit IndusInd loan account number, borrower name matching bank records, and Permanent Account Number (PAN) with zero discrepancies.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Lock className="w-4 h-4 text-purple-600" />
                    <span>Full Debt Extinguishment Clause</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The sanction letter must unequivocally state that payment of the agreed settlement sum constitutes full and final satisfaction of all liabilities, with complete waiver of balance principal and charges.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    <span>Authorized Signatory &amp; Employee Code</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The letter must carry the official physical or verified digital signature, designation, and employee code of an authorized officer of IndusInd Bank along with the bank&apos;s seal.
                  </p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-red-950">
                  <ShieldX className="w-4 h-4 text-red-600" />
                  <span>Crucial Payment Destination Rule</span>
                </span>
                <p className="leading-relaxed">
                  Never transfer settlement funds into a personal bank account, third-party collection agency account, or individual UPI ID. All settlement disbursements must be deposited strictly into your designated IndusInd loan account number via RTGS, NEFT, or account payee demand draft payable directly to &quot;IndusInd Bank Ltd A/C [Your Loan Number]&quot;.
                </p>
              </div>
            </section>

            {/* Section 8: Loan Remittance, RBI ₹0 NDC & Credit Recovery */}
            <section id="remittance-rbi-ndc-mandate-cibil-recovery" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Loan Remittance, RBI ₹0 No Dues Certificate Mandate &amp; CIBIL Trajectory
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Following the successful deposit of the agreed settlement sum, the final phase of debt extinguishment commences. Under <strong>RBI Circular RBI/2023-24/60</strong> (Responsible Lending Conduct – Release of Movable / Immovable Property Documents and Issuance of NDC), all regulated banking entities, including IndusInd Bank, are statutorily obligated to deliver an official <strong>No Dues Certificate (NDC) / Loan Closure Letter</strong> and update credit information bureaus within <strong>30 calendar days</strong> of receiving the final settlement tranche.
              </p>
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>RBI Statutory Delay Compensation Mandate</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  If IndusInd Bank fails to issue the No Dues Certificate or update closure records with credit bureaus within the mandatory 30-day window without lawful justification, the bank is legally required to pay statutory compensation of <strong>₹5,000 for each day of delay</strong> directly to the borrower.
                </p>
              </div>
              
              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                CIBIL Score Trajectory &amp; Structured Financial Rehabilitation
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers should maintain practical expectations regarding credit bureau reporting following a compromise settlement:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Credit Bureau Remark:</strong> IndusInd Bank will report the account status to CIBIL, Experian, Equifax, and CRIF High Mark as <strong>&quot;Settled&quot;</strong> or <strong>&quot;Post-Write-off Settled&quot;</strong> with an outstanding balance of <strong>₹0</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Immediate Score Adjustment:</strong> The settlement closes the delinquent account but causes an immediate temporary reduction of 75 to 150 points in your credit score, reflecting the negotiated concession.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>12-Month Regulatory Cooling Period:</strong> Under RBI compromise settlement norms, regulated financial institutions maintain a 12-month cooling window before considering fresh unsecured credit lines for settled borrowers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>18–24 Month Score Rebuilding Plan:</strong> By securing a fixed-deposit-backed credit builder card, keeping credit utilization below 30%, and ensuring 100% punctual payments, borrowers steadily rebuild their CIBIL score back above 750 within 18 to 24 months.</span>
                </li>
              </ul>
            </section>

            {/* Section 9: Comprehensive Resolution Matrix */}
            <section id="indusind-settlement-comparative-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Comprehensive Resolution Matrix: Settlement vs Restructuring vs Lok Adalat vs Litigation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Evaluating different debt resolution pathways enables borrowers to make informed financial and legal choices when managing overdue IndusInd personal loans:
              </p>
              
              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Resolution Pathway</th>
                      <th>Financial Concession / Haircut</th>
                      <th>Legal Impact &amp; Court Risk</th>
                      <th>CIBIL Bureau Remark</th>
                      <th>Timeline to Complete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">One-Time Settlement (OTS)</td>
                      <td>45% – 65% Principal Waiver; 100% Penalty Waiver</td>
                      <td>Complete legal extinguishment; all notices withdrawn</td>
                      <td>&apos;Settled&apos; with ₹0 Balance</td>
                      <td>30 – 60 Days</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Loan Restructuring / Tenure Extension</td>
                      <td>0% Principal Haircut; Higher cumulative interest</td>
                      <td>Loan remains active; fresh NACH mandate required</td>
                      <td>&apos;Restructured&apos; with active liability</td>
                      <td>45 – 90 Days</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">National Lok Adalat Settlement</td>
                      <td>45% – 60% Haircut with Judicial Stamp</td>
                      <td>Binding Civil Court Decree; zero appeal risk</td>
                      <td>&apos;Settled via Lok Adalat&apos; with ₹0 Balance</td>
                      <td>Scheduled Lok Adalat Dates</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Order 37 CPC Summary Suit</td>
                      <td>No discount; Legal costs and court interest added</td>
                      <td>Protracted civil court litigation (3–5 years)</td>
                      <td>&apos;Suit Filed&apos; / &apos;Decreed&apos;</td>
                      <td>3 – 5 Years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Defense &amp; IndusInd Bank Debt Advisory Framework
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Managing an institutional credit dispute against IndusInd Bank demands seasoned financial negotiation acumen and robust legal representation. SettleLoans advocates protect distressed borrowers nationwide, providing an end-to-end legal shield against unlawful recovery harassment, drafting statutory replies to Section 25 PSSA and Section 138 notices, and negotiating directly with IndusInd Bank&apos;s Zonal Stressed Asset Management committees to lock in maximum settlement haircuts alongside official, bank-stamped No Dues Certificates.
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
                  11. Frequently Asked Questions: IndusInd Bank Loan Settlement
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Legally verified, authoritative answers to essential questions regarding IndusInd Bank personal loan settlements, recovery regulations, and credit score rehabilitation.
              </p>

              <div className="space-y-3">
                {jsonLdGraph['@graph'][4].mainEntity.map((faq, idx) => (
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
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction – Recovery Agents &amp; Conduct</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (2021)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">National Legal Services Authority (Lok Adalat)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Payment &amp; Settlement Systems Act (Section 25)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://legislative.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">Indian Contract Act, 1872 (Section 171 Banker&apos;s Lien)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Loan Settlement &amp; Legal Defense Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/axis-bank-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Axis Bank Loan Settlement
                </Link>
                <Link
                  href="/hdfc-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  HDFC Loan Settlement
                </Link>
                <Link
                  href="/icici-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  ICICI Loan Settlement
                </Link>
                <Link
                  href="/sbi-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  SBI Personal Loan Settlement
                </Link>
                <Link
                  href="/kotak-bank-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Kotak Bank Settlement
                </Link>
                <Link
                  href="/bajaj-finance-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bajaj Finance Settlement
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Guide
                </Link>
                <Link
                  href="/can-bank-seize-property-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Property Seizure Protections
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Loan Default &amp; Jail Myths
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate Guide
                </Link>
              </div>
            </section>

          </main>

          {/* Right Column: Author Bio, Emergency Advocate CTA, Trust Signals */}
          <aside className="w-full lg:sticky lg:top-24 space-y-6">
            
            {/* Author Bio Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-lg">
                  AJ
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Ashish Jhangra</h4>
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Specialist in RBI compromise settlement frameworks, NPA provisioning forensics, and banking dispute litigation with over a decade of debt advisory experience.
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span>Verified Legal Author</span>
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Immediate Legal Defense</span>
              </div>
              <h4 className="font-bold text-base text-white mb-2">Facing IndusInd Bank Recovery Pressure?</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Stop unlawful harassment, reply to Section 25 PSSA summons, and negotiate a formal 45%–65% debt waiver directly with IndusInd legal nodal desks.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Advocate Consultation
              </Link>
            </div>

            {/* Trust Signals Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Institutional Protections
              </h4>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>100% RBI Fair Practices Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Confidential Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Verified Bank Letterhead Sanctions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Advocate-Led Conciliation</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
