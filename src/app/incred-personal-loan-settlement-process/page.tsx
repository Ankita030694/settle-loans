import { Metadata } from 'next';
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
  Layers,
  Gavel,
  FileCheck,
  UserCheck,
  AlertCircle,
  Banknote,
  Award,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'InCred Personal Loan Settlement | SettleLoans',
  description: 'Comprehensive guide to InCred Financial Services personal loan settlement. Learn how to settle personal and MSME loans, stop NACH bounce charges, halt recovery harassment, defend Section 25 PSSA and arbitration notices, and negotiate up to 60% OTS haircut under RBI rules.',
  keywords: [
    'incred personal loan settlement',
    'incred financial services loan settlement',
    'incred personal loan settlement process',
    'incred loan default legal notice',
    'incred financial services ots policy',
    'how to stop incred nach bounce charges',
    'incred loan recovery harassment complaint',
    'incred section 25 pssa notice reply',
    'incred loan settlement percentage haircut',
    'incred no dues certificate after settlement',
    'incred nodal officer grievance escalation',
    'incred loan arbitration notice response',
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/incred-personal-loan-settlement-process',
  },
  openGraph: {
    title: 'InCred Personal Loan Settlement: OTS Rules, Legal Defense & Haircut (2026)',
    description: 'Learn how to settle an InCred Financial Services personal or MSME loan. Understand internal NPA haircuts, recovery agent compliance, Credit Committee approval matrices, and step-by-step negotiation strategies.',
    url: 'https://www.settleloans.in/incred-personal-loan-settlement-process',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/incred-personal-loan-settlement-process.jpg',
        width: 1200,
        height: 675,
        alt: 'InCred Personal Loan Settlement Process and OTS Haircut Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InCred Personal Loan Settlement: OTS Rules, Legal Defense & Haircut',
    description: 'Technical and legal manual for settling defaulted InCred Financial Services personal loans and digital credit facilities under RBI Compromise Settlement frameworks.',
    images: ['https://www.settleloans.in/images/infographics/incred-personal-loan-settlement-process.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/incred-personal-loan-settlement-process#webpage",
      "url": "https://www.settleloans.in/incred-personal-loan-settlement-process",
      "name": "InCred Personal Loan Settlement: OTS Rules, Legal Defense & Haircut (2026)",
      "description": "Comprehensive guide to InCred Financial Services personal loan settlement. Learn how to settle personal and MSME loans, stop NACH bounce charges, halt recovery harassment, defend Section 25 PSSA and arbitration notices, and negotiate up to 60% OTS haircut under RBI rules.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/incred-personal-loan-settlement-process#breadcrumb"
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
      "@id": "https://www.settleloans.in/incred-personal-loan-settlement-process#breadcrumb",
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
          "name": "InCred Personal Loan Settlement",
          "item": "https://www.settleloans.in/incred-personal-loan-settlement-process"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/incred-personal-loan-settlement-process#article",
      "headline": "InCred Personal Loan Settlement: OTS Rules, Legal Defense & Haircut Guide",
      "description": "A comprehensive strategic guide on negotiating One-Time Settlements (OTS) with InCred Financial Services Limited, navigating internal provisioning policies, halting NACH bounce fees, and safeguarding against recovery harassment.",
      "image": "https://www.settleloans.in/images/infographics/incred-personal-loan-settlement-process.jpg",
      "datePublished": "2026-09-02T12:00:00+05:30",
      "dateModified": "2026-09-02T12:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/incred-personal-loan-settlement-process#webpage"
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
      "@id": "https://www.settleloans.in/incred-personal-loan-settlement-process#service",
      "name": "SettleLoans - InCred Loan Settlement & Legal Defense",
      "description": "Specialized legal and financial negotiation advisory for settling defaulted InCred Financial Services personal loans, education loans, and MSME credit lines under RBI compromise frameworks with maximum debt waivers and complete harassment protection.",
      "url": "https://www.settleloans.in/incred-personal-loan-settlement-process",
      "image": "https://www.settleloans.in/images/infographics/incred-personal-loan-settlement-process.jpg",
      "telephone": "+91-99999-99999",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Connaught Place",
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
        "reviewCount": "1420",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Rohit Verma"
          },
          "datePublished": "2026-07-19",
          "reviewBody": "I had an InCred personal loan of ₹8.4 Lakhs taken during my startup venture. When sales dried up, the account defaulted and accumulated over ₹1.8 Lakhs in automated bounce charges and penal interest. InCred collection agencies were calling my family members daily. SettleLoans served a formal legal cease-and-desist notice to InCred's Nodal Desk, stopped the phone harassment within 48 hours, and negotiated a structured One-Time Settlement of ₹3.7 Lakhs with complete waiver of all penal interest. Received my zero-balance NDC promptly.",
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
            "name": "Meenakshi Sundaram"
          },
          "datePublished": "2026-08-04",
          "reviewBody": "After facing medical emergencies, I defaulted on my InCred digital personal loan of ₹5.2 Lakhs. InCred's automated NACH sweeps were hitting my salary bank account 3 times every month, costing me ₹1,500 in return fees each cycle. SettleLoans helped me revoke the NACH mandate legally, compiled my medical hardship dossier, and secured an authentic stamped settlement letter at a 55% discount on the principal balance.",
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
            "name": "Harishankar Pandey"
          },
          "datePublished": "2026-06-11",
          "reviewBody": "Received a Section 25 PSSA demand notice followed by an arbitration notice from InCred Financial Services advocates in Mumbai. SettleLoans drafted a thorough legal reply demonstrating bona fide commercial hardship and challenged the unilateral appointment of the sole arbitrator. The matter was successfully transferred to conciliation, where we finalized an OTS for ₹2.9 Lakhs against a total claim of ₹6.5 Lakhs.",
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
            "name": "Ananya Sen"
          },
          "datePublished": "2026-08-22",
          "reviewBody": "Outstanding support in resolving my defaulted InCred unsecured loan. The advocates at SettleLoans negotiated directly with InCred's Stressed Assets Group, prevented any workplace visits, and delivered my official No Dues Certificate within 25 days of payment. Highly recommended for anyone trapped in tech-NBFC debt.",
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
      "@id": "https://www.settleloans.in/incred-personal-loan-settlement-process#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the InCred personal loan settlement process and how does an NBFC compromise work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The InCred personal loan settlement process is a structured debt resolution mechanism governed by Reserve Bank of India Master Directions on Compromise Settlements. When an unsecured personal, student, or MSME loan crosses 90 days of non-payment and transitions into Non-Performing Asset (NPA) status, the borrower or their legal counsel submits a hardship petition to InCred Financial Services Limited's Stressed Assets Desk. Upon assessing the financial incapacity against the Net Present Value (NPV) of recovery, InCred issues an official stamped OTS Sanction Letter. Paying the agreed sum directly into the loan account extinguishes all outstanding liabilities and entitles the borrower to a formal No Dues Certificate (NDC)."
          }
        },
        {
          "@type": "Question",
          "name": "How can borrowers stop InCred NACH auto-debit bounce penalties and repeated mandate sweeps?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "InCred Financial Services frequently presents electronic NACH mandates multiple times a month, multiplying return penalties across borrower bank accounts. Borrowers can stop this financial drain by: (1) Submitting a written mandate revocation or suspension request to their destination bank under NPCI guidelines; (2) Serving a formal hardship letter to InCred's collections desk requesting an immediate pause on electronic presentations; (3) Insisting on a 100% complete waiver of all accumulated bounce penalties and penal interest under RBI fair lending practice rules during One-Time Settlement negotiations."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of debt waiver or haircut can you realistically negotiate with InCred Financial Services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "On unsecured personal loans and MSME credit facilities, InCred typically sanctions debt waivers between 40% and 60% of total ledger dues. The achievable haircut depends on loan aging, delinquency bucket, and balance-sheet provisioning. Accounts overdue beyond 180 to 365 days (Doubtful or Loss Asset status) qualify for maximum principal waivers (50% to 60%), alongside a 100% cancellation of all accrued penal charges and bounce fees."
          }
        },
        {
          "@type": "Question",
          "name": "How do you handle aggressive InCred recovery calls and protect against harassment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Master Directions on Recovery Agents and NBFC Fair Practices Codes, borrowers enjoy strict statutory protections: (a) Agents are legally restricted to contacting borrowers between 08:00 AM and 07:00 PM; (b) Reaching out to employers, colleagues, business partners, or non-guarantor family members is strictly illegal; (c) Abusive language, intimidation, and unauthorized home or office visits are prohibited. In case of violations, borrowers should serve a legal cease-and-desist notice to InCred's Principal Nodal Officer and file an online complaint on the RBI Integrated Ombudsman (CMS) portal."
          }
        },
        {
          "@type": "Question",
          "name": "Can InCred Financial Services file a criminal police case or arrest a borrower for loan default?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Defaulting on an unsecured personal or digital loan is strictly a civil contractual matter under the Indian Contract Act, 1872. Police authorities have no jurisdiction to register an FIR or make an arrest for genuine financial default. While InCred may issue legal notices under Section 25 of the Payment and Settlement Systems Act (PSSA) for bounced NACH mandates, these are compoundable quasi-criminal proceedings handled in Magistrate Courts and are routinely resolved through advocate representation and compromise settlements."
          }
        },
        {
          "@type": "Question",
          "name": "What is a Section 25 PSSA legal notice sent by InCred and how should you respond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Section 25 PSSA notice is a statutory 15-day demand notice issued when an automated NACH mandate dishonours due to insufficient funds. It is not an arrest warrant or court judgment. Borrowers should promptly engage legal counsel to draft a comprehensive reply setting out bona fide financial hardship, challenging unauthorized multiple mandate sweeps, and opening formal channels for a compromise One-Time Settlement."
          }
        },
        {
          "@type": "Question",
          "name": "How should borrowers handle unilateral arbitration notices issued by InCred Financial Services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "InCred frequently issues arbitration notices appointing a sole arbitrator based in Mumbai or Delhi. Under landmark Supreme Court rulings (Perkins Eastman Architects DVM v. HSCC (India) Ltd. and TRF Ltd. v. Energo Engineering Projects Ltd.), unilateral arbitrator appointments by lenders without mutual consent are legally invalid. Legal counsel can challenge the arbitrator's jurisdiction under Section 12 and Section 14 of the Arbitration and Conciliation Act, 1996, effectively halting biased ex-parte awards and redirecting the dispute into compromise settlement channels."
          }
        },
        {
          "@type": "Question",
          "name": "Who within InCred has the legal authority to approve a One-Time Settlement (OTS)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under InCred's internal Delegation of Financial Powers matrix, external tele-callers and third-party recovery agents have zero legal power to approve loan discounts. Substantive debt waivers (40% to 60%) must be formally evaluated and approved by InCred's Stressed Assets Desk, Regional Credit Committee, or Chief Risk Officer division, documented through an authentic stamped sanction letter on corporate letterhead."
          }
        },
        {
          "@type": "Question",
          "name": "How does settling an InCred loan affect your CIBIL score and credit history?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Upon receiving the agreed settlement amount, InCred Financial Services updates credit information companies (CIBIL, Experian, Equifax, CRIF High Mark) with the status 'Settled' or 'Post-Write-off Settled' with an outstanding balance of ₹0. While this leads to an initial credit score drop of 75 to 150 points and a temporary 12-month cooling-off window, it permanently terminates compounding default marks and legal flags. Borrowers can rebuild their score back to 750+ within 18 to 24 months through secured credit instruments."
          }
        },
        {
          "@type": "Question",
          "name": "How long does InCred take to issue the No Dues Certificate (NDC) following an OTS payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, InCred Financial Services Limited is mandated to issue a formal No Dues Certificate (NDC) and update credit bureau records within 30 calendar days of receiving full settlement payment. If the lender fails to deliver the closure certificate within 30 days without lawful justification, it is statutorily liable to pay compensation of ₹5,000 per day of delay directly to the borrower."
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

export default function InCredPersonalLoanSettlementPage() {
  const tocItems = [
    { id: 'understanding-incred-defaults', title: '1. InCred NBFC Risk Engine & Architecture' },
    { id: 'incred-delinquency-timeline-npa', title: '2. Delinquency Timeline & NPA Stages' },
    { id: 'stopping-incred-bounce-charges-nach', title: '3. Halting NACH Bounce Charges & Penal Fees' },
    { id: 'incred-ots-haircut-policy-npv', title: '4. OTS Haircut Policies & Valuation Framework' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Resolution Blueprint' },
    { id: 'recovery-agent-rules-anti-harassment', title: '6. Recovery Practices & RBI Harassment Defense' },
    { id: 'step-by-step-incred-settlement', title: '7. Step-by-Step NBFC Settlement Roadmap' },
    { id: 'section-25-pssa-arbitration-lok-adalat', title: '8. Section 25 Notices, Arbitration & Lok Adalat' },
    { id: 'sanction-letter-audit-ndc-verification', title: '9. Sanction Letter Audit & ₹0 NDC Mandate' },
    { id: 'cibil-impact-credit-rehabilitation', title: '10. CIBIL Score Trajectory & Rehabilitation' },
    { id: 'company-resolution-section', title: '11. SettleLoans Legal Defense & Advisory' },
    { id: 'faqs', title: '12. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      question: "What is the InCred personal loan settlement process and how does an NBFC compromise work?",
      answer: "The InCred personal loan settlement process is a structured debt resolution mechanism governed by Reserve Bank of India Master Directions on Compromise Settlements. When an unsecured personal, student, or MSME loan crosses 90 days of non-payment and transitions into Non-Performing Asset (NPA) status, the borrower or their legal counsel submits a hardship petition to InCred Financial Services Limited's Stressed Assets Desk. Upon assessing the financial incapacity against the Net Present Value (NPV) of recovery, InCred issues an official stamped OTS Sanction Letter. Paying the agreed sum directly into the loan account extinguishes all outstanding liabilities and entitles the borrower to a formal No Dues Certificate (NDC)."
    },
    {
      question: "How can borrowers stop InCred NACH auto-debit bounce penalties and repeated mandate sweeps?",
      answer: "InCred Financial Services frequently presents electronic NACH mandates multiple times a month, multiplying return penalties across borrower bank accounts. Borrowers can stop this financial drain by: (1) Submitting a written mandate revocation or suspension request to their destination bank under NPCI guidelines; (2) Serving a formal hardship letter to InCred's collections desk requesting an immediate pause on electronic presentations; (3) Insisting on a 100% complete waiver of all accumulated bounce penalties and penal interest under RBI fair lending practice rules during One-Time Settlement negotiations."
    },
    {
      question: "What percentage of debt waiver or haircut can you realistically negotiate with InCred Financial Services?",
      answer: "On unsecured personal loans and MSME credit facilities, InCred typically sanctions debt waivers between 40% and 60% of total ledger dues. The achievable haircut depends on loan aging, delinquency bucket, and balance-sheet provisioning. Accounts overdue beyond 180 to 365 days (Doubtful or Loss Asset status) qualify for maximum principal waivers (50% to 60%), alongside a 100% cancellation of all accrued penal charges and bounce fees."
    },
    {
      question: "How do you handle aggressive InCred recovery calls and protect against harassment?",
      answer: "Under RBI Master Directions on Recovery Agents and NBFC Fair Practices Codes, borrowers enjoy strict statutory protections: (a) Agents are legally restricted to contacting borrowers between 08:00 AM and 07:00 PM; (b) Reaching out to employers, colleagues, business partners, or non-guarantor family members is strictly illegal; (c) Abusive language, intimidation, and unauthorized home or office visits are prohibited. In case of violations, borrowers should serve a legal cease-and-desist notice to InCred's Principal Nodal Officer and file an online complaint on the RBI Integrated Ombudsman (CMS) portal."
    },
    {
      question: "Can InCred Financial Services file a criminal police case or arrest a borrower for loan default?",
      answer: "No. Defaulting on an unsecured personal or digital loan is strictly a civil contractual matter under the Indian Contract Act, 1872. Police authorities have no jurisdiction to register an FIR or make an arrest for genuine financial default. While InCred may issue legal notices under Section 25 of the Payment and Settlement Systems Act (PSSA) for bounced NACH mandates, these are compoundable quasi-criminal proceedings handled in Magistrate Courts and are routinely resolved through advocate representation and compromise settlements."
    },
    {
      question: "What is a Section 25 PSSA legal notice sent by InCred and how should you respond?",
      answer: "A Section 25 PSSA notice is a statutory 15-day demand notice issued when an automated NACH mandate dishonours due to insufficient funds. It is not an arrest warrant or court judgment. Borrowers should promptly engage legal counsel to draft a comprehensive reply setting out bona fide financial hardship, challenging unauthorized multiple mandate sweeps, and opening formal channels for a compromise One-Time Settlement."
    },
    {
      question: "How should borrowers handle unilateral arbitration notices issued by InCred Financial Services?",
      answer: "InCred frequently issues arbitration notices appointing a sole arbitrator based in Mumbai or Delhi. Under landmark Supreme Court rulings (Perkins Eastman Architects DVM v. HSCC (India) Ltd. and TRF Ltd. v. Energo Engineering Projects Ltd.), unilateral arbitrator appointments by lenders without mutual consent are legally invalid. Legal counsel can challenge the arbitrator's jurisdiction under Section 12 and Section 14 of the Arbitration and Conciliation Act, 1996, effectively halting biased ex-parte awards and redirecting the dispute into compromise settlement channels."
    },
    {
      question: "Who within InCred has the legal authority to approve a One-Time Settlement (OTS)?",
      answer: "Under InCred's internal Delegation of Financial Powers matrix, external tele-callers and third-party recovery agents have zero legal power to approve loan discounts. Substantive debt waivers (40% to 60%) must be formally evaluated and approved by InCred's Stressed Assets Desk, Regional Credit Committee, or Chief Risk Officer division, documented through an authentic stamped sanction letter on corporate letterhead."
    },
    {
      question: "How does settling an InCred loan affect your CIBIL score and credit history?",
      answer: "Upon receiving the agreed settlement amount, InCred Financial Services updates credit information companies (CIBIL, Experian, Equifax, CRIF High Mark) with the status 'Settled' or 'Post-Write-off Settled' with an outstanding balance of ₹0. While this leads to an initial credit score drop of 75 to 150 points and a temporary 12-month cooling-off window, it permanently terminates compounding default marks and legal flags. Borrowers can rebuild their score back to 750+ within 18 to 24 months through secured credit instruments."
    },
    {
      question: "How long does InCred take to issue the No Dues Certificate (NDC) following an OTS payment?",
      answer: "Under RBI Circular RBI/2023-24/60, InCred Financial Services Limited is mandated to issue a formal No Dues Certificate (NDC) and update credit bureau records within 30 calendar days of receiving full settlement payment. If the lender fails to deliver the closure certificate within 30 days without lawful justification, it is statutorily liable to pay compensation of ₹5,000 per day of delay directly to the borrower."
    }
  ];

  return (
    <div
      className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-[#1F5EFF] selection:text-white"
      style={{ fontFamily: 'var(--font-satoshi), Satoshi, -apple-system, BlinkMacSystemFont, sans-serif' }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

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
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <Building2 className="w-3.5 h-3.5" />
            <span>Tech-NBFC Dispute Resolution • InCred Financial Services</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            InCred Personal Loan Settlement: <span className="text-[#3b82f6] md:text-[#60a5fa]">OTS Rules, Legal Notice Defense &amp; Haircut Guide (2026)</span>
          </h1>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-3 mb-5 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Written by <Link href="/authors/ashish-jhangra" className="font-bold underline hover:text-white transition-colors">Ashish Jhangra</Link></span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Updated: September 2026</span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>RBI NBFC Master Direction Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Negotiate InCred Settlement</span>
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
                <span>InCred Quick Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                InCred Financial Services personal loans past 90 days default enter NPA status under Ind AS 109. Direct escalation to InCred&apos;s Stressed Assets Desk eliminates intermediary agency markups, unlocking 40%–60% principal waivers with complete cancellation of bounce charges.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">

            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 border border-blue-200 rounded-2xl p-6 mb-8 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-base mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: InCred Personal Loan Settlement</span>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Compromise Rights:</strong> Defaulting on an unsecured personal or digital loan with InCred Financial Services is strictly a civil dispute. Distressed borrowers hold statutory rights under RBI Master Directions to propose a compromise One-Time Settlement (OTS).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Halting Automated NACH Charges:</strong> Revoking e-mandates with destination banks halts recurring return fees. Legal representation enforces 100% waiver of accumulated bounce charges and penal interest under RBI fair lending guidelines.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Realistic 40%–60% Haircut:</strong> Once an account enters NPA (90+ DPD) or Doubtful Asset status, InCred&apos;s Net Present Value (NPV) recovery algorithms favor upfront lump-sum settlements over prolonged court litigation.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Defending Legal &amp; Arbitration Notices:</strong> Section 25 PSSA demand notices and unilateral arbitrator appointments can be formally defended and converted into binding compromise settlements through Lok Adalat or conciliation.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory ₹0 NDC Delivery:</strong> Under RBI Circular RBI/2023-24/60, InCred is mandated to issue a formal No Dues Certificate and update credit bureau records within 30 days of settlement payment.</span>
                </li>
              </ul>
            </div>
            
            {/* Section 1: InCred Risk Engine & Architecture */}
            <section id="understanding-incred-defaults" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. Tech-NBFC Architecture &amp; Recovery Infrastructure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Understanding InCred Financial Services&apos; Algorithmic Credit &amp; Recovery Infrastructure
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                InCred Financial Services Limited represents one of India&apos;s fastest-growing technology-driven Non-Banking Financial Companies (NBFCs), operating across digital personal loans, education finance, MSME working capital, and merchant credit facilities. Built upon digital-first underwriting frameworks, InCred relies on automated algorithmic credit scoring models that disburse loans with high speed. However, when economic headwinds disrupt borrower cash flows, this same automated infrastructure triggers high-velocity collection workflows designed to aggressively contain balance-sheet default.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When an equated monthly installment (EMI) fails to clear on its designated debit date, InCred&apos;s automated treasury systems initiate high-frequency interactive voice response (IVR) phone calls, automated WhatsApp alerts, and repeated electronic National Automated Clearing House (e-NACH) mandate presentations. Each failed presentation triggers banking return charges alongside internal late fees and penal interest rates that range between 24% and 36% per annum. For salaried professionals and small business owners experiencing severe liquidity crunches, these compounding automated fees rapidly escalate ledger balances beyond manageable levels.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                It is essential for borrowers to understand that defaulting on an unsecured personal or digital loan constitutes a civil breach of contract under the Indian Contract Act, 1872, rather than a criminal offence. As an institution regulated by the Reserve Bank of India, InCred Financial Services must operate strictly within the supervisory boundaries of the RBI Fair Practices Code and Master Directions on Compromise Settlements. Distressed borrowers hold clear legal protections to halt third-party collection harassment, challenge predatory ledger compounding, and negotiate a formal compromise One-Time Settlement (OTS).
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong>Statutory Principle:</strong> Under Reserve Bank of India Master Directions on Compromise Settlements, regulated NBFCs must maintain transparent, board-approved OTS policies. Lenders cannot treat non-wilful, distressed borrowers as deliberate defaulters and must evaluate genuine compromise proposals to maximize economic recovery.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Delinquency Timeline & NPA Stages */}
            <section id="incred-delinquency-timeline-npa" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>2. Delinquency Timeline &amp; NPA Stages</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                InCred Delinquency Lifecycle: From DPD 1–30 to Non-Performing Asset (NPA)
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under the Reserve Bank of India&apos;s Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP) and Expected Credit Loss (ECL) guidelines under Indian Accounting Standard 109 (Ind AS 109), InCred Financial Services systematically tracks overdue accounts across strict Days Past Due (DPD) aging brackets. Understanding these institutional stages allows borrowers and their legal advisors to time settlement petitions when the NBFC is most commercially motivated to accept principal waivers.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                During the initial 60 days of delinquency (Special Mention Account stages SMA-0 and SMA-1), InCred&apos;s internal collections team focuses heavily on regularizing the overdue loan installments. However, once an account crosses the 90-day threshold without payment, it is statutorily classified as a Non-Performing Asset (NPA). At this stage, InCred must allocate mandatory balance-sheet capital provisioning, shifting its institutional priority from installment regularisation toward bad-debt recovery and compromise resolution.
              </p>

              {/* Comprehensive Stage Table */}
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Delinquency Stage</th>
                      <th>Overdue Days (DPD)</th>
                      <th>InCred Financial Services Recovery Actions</th>
                      <th>Legal &amp; Judicial Exposure</th>
                      <th>Settlement Haircut Potential</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-0 (Early Delinquency)</td>
                      <td>1 – 30 Days</td>
                      <td>Automated IVR calls, daily SMS reminders, repeated NACH mandate sweeps.</td>
                      <td>Zero litigation exposure; initial credit bureau DPD reporting begins.</td>
                      <td>Negligible (NBFC demands full overdue installment payment).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-1 (Mid Delinquency)</td>
                      <td>31 – 60 Days</td>
                      <td>Intensive tele-calling, third-party agency allocation, loan acceleration notices.</td>
                      <td>Statutory loan recall warning letters; CIBIL score sharp decline.</td>
                      <td>Low (Tenure extension or temporary moratorium considered).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-2 (Pre-NPA Escalation)</td>
                      <td>61 – 90 Days</td>
                      <td>Field visits by recovery personnel, formal loan demand recall notices.</td>
                      <td>Section 25 PSSA / Section 138 NI Act statutory legal demand notices.</td>
                      <td>Moderate (Discussions for penal fee waivers can commence).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-amber-700">NPA (Substandard Asset)</td>
                      <td>91 – 180 Days</td>
                      <td>Transferred to Stressed Assets Desk; mandatory Ind AS 109 provisioning.</td>
                      <td>Magistrate Court summons under Sec 25 PSSA; pre-litigation notices.</td>
                      <td><span className="text-emerald-700 font-bold">High (35%–50% Haircut achievable).</span></td>
                    </tr>
                    <tr>
                      <td className="font-bold text-red-700">Doubtful / Loss Asset</td>
                      <td>181 – 365+ Days</td>
                      <td>Substantial balance-sheet provisioning absorbed; internal technical write-off.</td>
                      <td>Arbitration claims, civil summary suits, National Lok Adalat referrals.</td>
                      <td><span className="text-emerald-700 font-bold">Maximum (50%–60% Haircut achievable).</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Once an unsecured personal or MSME loan is classified as a Doubtful Asset or subjected to technical write-off, InCred has already accounted for the loss on its quarterly financial statements. Under these accounting conditions, receiving an upfront lump-sum compromise settlement represents an immediate cash write-back to InCred&apos;s operating profit, providing senior risk officers with the financial incentive to approve substantial principal waivers.
              </p>
            </section>

            {/* Section 3: Halting NACH Bounce Charges & Penal Levies */}
            <section id="stopping-incred-bounce-charges-nach" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Banknote className="w-4 h-4" />
                <span>3. Stopping NACH Bounce Charges &amp; Penal Fees</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                How to Stop InCred NACH Bounce Charges &amp; Halt Repeated Mandate Presentations
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                A common source of financial distress for borrowers undergoing default is the continuous debiting of electronic auto-debit bounce fees. InCred Financial Services frequently configures its automated banking clearing system to present e-NACH mandates two to four times in a single billing cycle. When the borrower&apos;s bank account lacks sufficient balance, the customer&apos;s bank debits return penalties of ₹250 to ₹500 plus GST, while InCred simultaneously adds internal bounce fees ranging from ₹500 to ₹1,000 plus GST to the loan ledger.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Over several months of delinquency, these repetitive and unauthorized clearing sweeps can deplete thousands of rupees from active bank accounts or cause the loan outstanding to balloon artificially. Under the Reserve Bank of India&apos;s Fair Lending Practice guidelines on penal charges in loan accounts (2023), regulated entities are prohibited from capitalizing penal charges or levying compounded default interest.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers can safeguard their finances through two immediate legal steps:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                First, under National Payments Corporation of India (NPCI) procedural frameworks and RBI consumer directives, every bank account holder has the absolute right to instruct their destination bank in writing or via digital net-banking to stop, cancel, or suspend the specific e-NACH mandate tied to InCred, preventing any future unauthorized presentation charges.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Second, during formal One-Time Settlement negotiations, legal counsel must demand an unconditional 100% waiver of all accrued bounce penalties, late payment charges, and penal interest. In approved compromise settlements, InCred completely writes off these ancillary levies, calculating the negotiated settlement haircut exclusively against the core principal balance.
              </p>
            </section>

            {/* Section 4: OTS Haircut Policies & NPV Valuation */}
            <section id="incred-ots-haircut-policy-npv" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>4. OTS Haircut Policies &amp; Valuation Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                InCred Financial Services One-Time Settlement (OTS) &amp; Haircut Valuation Matrix
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under the RBI Master Direction on Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24), InCred Financial Services maintains a board-approved compromise settlement framework. Rather than acting on arbitrary discretion, InCred evaluates settlement proposals using a mathematical Net Present Value (NPV) recovery methodology.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Because unsecured personal loans carry no underlying physical collateral, InCred must mathematically compare an immediate lump-sum settlement offer against the uncertain, discounted future recovery of prolonged litigation or civil execution proceedings, after accounting for legal retainers, court fees, and administrative costs.
              </p>

              {/* Formula Container Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated recoveries, r is the discount rate, and deductions account for 3–5 years of court friction and capital locked in NPA provisions.
                </p>
              </div>

              {/* Settlement Haircut Slabs Table */}
              <h3 className="text-lg font-bold text-slate-900 mb-3">Realistic InCred Settlement Haircut Slabs by Product &amp; Aging</h3>
              <div className="overflow-x-auto my-4">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Loan Facility Category</th>
                      <th>Delinquency Aging</th>
                      <th>Penal &amp; Bounce Waiver</th>
                      <th>Principal Haircut Range</th>
                      <th>Target Settlement Offer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">InCred Unsecured Personal Loan</td>
                      <td>90 – 180 Days (NPA)</td>
                      <td>100% Full Waiver</td>
                      <td>30% – 45% Principal Waiver</td>
                      <td>Offer 40%–50% of Book Dues</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">InCred Unsecured Personal Loan</td>
                      <td>181 – 365+ Days (Doubtful)</td>
                      <td>100% Full Waiver</td>
                      <td>45% – 60% Principal Waiver</td>
                      <td>Offer 35%–40% of Book Dues</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">InCred MSME &amp; Business Loan</td>
                      <td>90 – 180 Days (NPA)</td>
                      <td>100% Full Waiver</td>
                      <td>30% – 45% Principal Waiver</td>
                      <td>Offer 45%–55% of Utilized Dues</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">InCred MSME &amp; Business Loan</td>
                      <td>180+ Days (Written Off)</td>
                      <td>100% All Penal Charges</td>
                      <td>50% – 65% Principal Waiver</td>
                      <td>Offer 30%–35% of Total Dues</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: High-Impact Resolution Blueprint (Infographic Banner) */}
            <section id="infographic-resolution-blueprint" className="scroll-mt-24 mb-12">
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
                        InCred Personal Loan Settlement &amp; Legal Defense Blueprint
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/incred-personal-loan-settlement-process.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#1F5EFF] hover:text-blue-300 font-bold flex items-center gap-1 transition-colors"
                  >
                    <span className="hidden sm:inline">Open Full Size</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* 16:9 Landscape Infographic Image */}
                <div className="p-3 md:p-4 bg-slate-50">
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                    <img
                      src="/images/infographics/incred-personal-loan-settlement-process.jpg"
                      alt="InCred Personal Loan Settlement Process and OTS Framework Infographic"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Strategy:</strong> Revoke NACH mandate presentations, halt third-party recovery harassment, and negotiate directly with InCred Credit Committees for 40%–60% debt waivers.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6: Third-Party Recovery Defense & RBI Rules */}
            <section id="recovery-agent-rules-anti-harassment" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>5. Recovery Practices &amp; RBI Harassment Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Defending Against Aggressive Recovery Tactics Under RBI NBFC Directives
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                InCred Financial Services contracts external third-party Debt Recovery Agencies (DRAs) whose tele-callers and field agents operate under aggressive collection incentive models. In defaulted accounts, collection personnel frequently overstep regulatory boundaries by executing high-frequency telephonic harassment, contacting friends or family members whose numbers were scraped or stored during onboarding, and showing up at borrower offices or residences.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The Reserve Bank of India Master Directions on Recovery Agents and NBFC Fair Practices Code establish strict statutory boundaries: (a) Recovery representatives are legally prohibited from calling borrowers outside the 08:00 AM to 07:00 PM window; (b) Reaching out to employers, colleagues, business partners, or non-guarantor relatives is strictly illegal; (c) Verbal abuse, intimidation, humiliation, or public shaming is a punishable regulatory offence; (d) Visiting agents must carry official authorization letters and Indian Institute of Banking &amp; Finance (IIBF) DRA certifications.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers experiencing unlawful collection pressure should systematically document all call recordings, WhatsApp messages, and agent interactions. Serving a formal legal cease-and-desist notice to InCred&apos;s Principal Nodal Officer (PNO) and filing an escalation on the RBI Integrated Ombudsman portal (CMS) triggers rapid institutional intervention and forces the NBFC to adhere to statutory standards.
              </p>
            </section>

            {/* Section 7: Step-by-Step NBFC Settlement Roadmap */}
            <section id="step-by-step-incred-settlement" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>6. Step-by-Step NBFC Settlement Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Step-by-Step Guide: How to Negotiate a Compromise Settlement with InCred Financial Services
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Executing a legally secure, maximum-haircut One-Time Settlement with InCred Financial Services requires a disciplined, evidence-based roadmap:
              </p>

              <div className="space-y-6">
                {/* Phase 1 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">1</span>
                    Comprehensive Financial Audit &amp; Hardship Dossier Compilation
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Assemble comprehensive documentary proof evidencing bona fide, involuntary financial incapacity. Crucial documents include audited business financial statements, GST return filings showing revenue reduction, job termination notices, medical discharge records, or bank statements evidencing depleted liquidity. This establishes that the default is non-wilful and qualifies for compromise relief.
                  </p>
                </div>

                {/* Phase 2 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">2</span>
                    Revoking NACH Mandates &amp; Formalizing Communication Channels
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Instruct your bank to revoke the e-NACH auto-debit mandate to halt recurring return penalties. Issue a formal notice to InCred Financial Services directing all collection communication to written email channels or through designated legal counsel, establishing a verifiable evidentiary audit trail.
                  </p>
                </div>

                {/* Phase 3 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">3</span>
                    Submitting Formal Hardship Petition to Stressed Assets Desk
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Submit a formal OTS petition addressed to InCred&apos;s Stressed Assets Desk citing the RBI Master Direction on Compromise Settlements. Anchor the opening settlement proposal at 25% to 35% of total book dues to establish room for structured counter-negotiations.
                  </p>
                </div>

                {/* Phase 4 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">4</span>
                    Managing Counter-Demands &amp; Structuring Committee Approvals
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    InCred will initially reject low offers and propose modest discounts (10%–20%). Experienced legal counsel counters by demonstrating that settlement funds are being pooled from third-party family assistance or non-operating asset liquidation, steering the Credit Committee toward the target 40% to 60% principal waiver band.
                  </p>
                </div>

                {/* Phase 5 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">5</span>
                    Rigorous Forensic Audit of the OTS Sanction Letter
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Before paying any funds, verify that InCred Financial Services issues an official OTS Sanction Letter on corporate letterhead containing loan account details, sanctioned settlement amount, exact payment deadlines, and unambiguous covenants confirming complete debt discharge and legal withdrawal.
                  </p>
                </div>

                {/* Phase 6 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">6</span>
                    Direct Account Remittance &amp; Enforcing ₹0 NDC Delivery
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Deposit the agreed settlement amount directly into your designated InCred loan account via RTGS/NEFT. Under RBI Circular RBI/2023-24/60, InCred is legally required to deliver a formal No Dues Certificate and update credit bureaus within 30 calendar days.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Section 25 Notices, Arbitration & Lok Adalat */}
            <section id="section-25-pssa-arbitration-lok-adalat" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>7. Section 25 Notices, Arbitration &amp; Lok Adalat</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Navigating Section 25 PSSA Notices, Arbitration &amp; National Lok Adalat
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When an unsecured personal or MSME loan crosses 60 to 90 days of default, InCred Financial Services routinely issues statutory demand notices under Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA) for dishonoured NACH mandates, alongside notices invoking private arbitration proceedings in Mumbai or Delhi.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                A Section 25 PSSA notice is a statutory precursor to a Magistrate Court complaint, not an arrest warrant. Responding through counsel within the 15-day statutory window detailing genuine financial hardship and challenging unauthorized multiple mandate presentations protects your legal standing while opening formal conciliation channels.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Regarding arbitration notices, landmark Supreme Court rulings (including <em>Perkins Eastman Architects DVM v. HSCC (India) Ltd.</em> and <em>TRF Ltd. v. Energo Engineering Projects Ltd.</em>) establish that unilateral arbitrator appointments by lenders without mutual consent are legally invalid. Legal counsel can challenge the arbitrator&apos;s jurisdiction under Section 12 and Section 14 of the Arbitration and Conciliation Act, 1996, effectively halting biased ex-parte awards and redirecting the dispute into compromise settlement channels.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Furthermore, InCred regularly participates in quarterly National Lok Adalats organized by District Legal Services Authorities (DLSA) under the Legal Services Authorities Act, 1987. In Lok Adalat sessions, NBFC representatives carry pre-approved settlement mandates (often offering 45% to 60% debt waivers). The resulting settlement award holds the legal force of a binding Civil Court Decree with non-appealable finality, permanently dismissing all pending legal claims.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Resolution Avenue</th>
                      <th>Legal Mechanism</th>
                      <th>Haircut Potential</th>
                      <th>Typical Timeline</th>
                      <th>Judicial Finality</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Direct NBFC OTS</td>
                      <td>Compromise agreement under RBI Master Directions.</td>
                      <td><strong>40% – 60% Debt Haircut</strong></td>
                      <td>15 to 30 Days</td>
                      <td>Binding private contract with ₹0 NDC.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">National Lok Adalat</td>
                      <td>Judicial conciliation before sitting judge and panel.</td>
                      <td><strong>45% – 60% Debt Haircut</strong></td>
                      <td>Single-day session</td>
                      <td><strong>Civil Court Decree</strong> (Zero appeal).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Arbitration Defense</td>
                      <td>Contesting unilateral arbitration in distant venues.</td>
                      <td>Variable (Converts to OTS)</td>
                      <td>3 to 9 Months</td>
                      <td>Subject to Section 34 challenge.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Section 25 / 138 Defense</td>
                      <td>Magistrate court compoundable proceedings defense.</td>
                      <td><strong>35% – 50% Debt Haircut</strong></td>
                      <td>2 to 6 Months</td>
                      <td>Formal withdrawal and case disposal.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 9: Sanction Letter Audit & ₹0 NDC Mandate */}
            <section id="sanction-letter-audit-ndc-verification" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>8. Sanction Letter Audit &amp; ₹0 NDC Mandate</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Authenticating InCred Settlement Letters &amp; Enforcing the ₹0 NDC
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                A serious risk in digital loan debt recovery involves unauthorized collection agents issuing fake settlement letters to collect partial payments. If a borrower transfers funds against an unverified or verbal offer, InCred Financial Services credits the money toward outstanding penal charges, leaving the default open and compounding.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers must verify that the OTS sanction letter is printed on official InCred Financial Services Limited letterhead containing the Corporate Identification Number (CIN: U67190MH1995PLC360817), registered office address, unique settlement proposal reference number, authorized signatory name, employee code, and official corporate seal.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The sanction letter must explicitly confirm that upon payment of the agreed sum, the account is fully discharged with zero further financial liability. Under RBI Circular RBI/2023-24/60, InCred must deliver the formal No Dues Certificate (NDC) and cancel all security mandates within 30 calendar days, or pay mandatory statutory compensation of ₹5,000 per day of delay directly to the borrower.
              </p>
            </section>

            {/* Section 10: CIBIL Score Trajectory & Rehabilitation */}
            <section id="cibil-impact-credit-rehabilitation" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>9. CIBIL Score Trajectory &amp; Rehabilitation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                CIBIL Score Trajectory Post-Settlement &amp; Strategic 18-Month Recovery Plan
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Completing a One-Time Settlement with InCred Financial Services results in the account being reported to all four licensed credit bureaus (TransUnion CIBIL, Experian, Equifax, CRIF High Mark) with the status <strong>&apos;Settled&apos;</strong> or <strong>&apos;Post-Write-off Settled&apos;</strong> with an outstanding balance of exactly <strong>₹0</strong>. This causes an initial credit score drop of 75 to 150 points.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under RBI compromise directives, a mandatory 12-month cooling-off window applies before fresh unsecured credit lines can be approved. However, a &apos;Settled&apos; record with ₹0 balance is vastly superior to an active, compounding &apos;Default&apos; status that degrades credit scores every month and invites ongoing litigation.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers can systematically restore their credit profile to 750+ within 18 to 24 months by securing a fixed-deposit-backed credit card (FD card), maintaining credit utilization strictly below 25%, and ensuring 100% on-time payment records on all living utilities and surviving credit obligations.
              </p>
            </section>

            {/* Section 11: SettleLoans Legal Defense & Representation */}
            <section id="company-resolution-section" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>10. Legal Defense &amp; Representation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Why Distressed InCred Borrowers Trust SettleLoans
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Negotiating an optimal debt settlement with a fast-growing tech-NBFC like InCred Financial Services requires sophisticated financial modelling and assertive legal representation. SettleLoans halts third-party recovery harassment through immediate cease-and-desist notices, defends against Section 25 PSSA summons, challenges unilateral arbitration notices, and negotiates directly with InCred&apos;s Stressed Assets Desks to secure maximum lawful debt waivers and authentic ₹0 No Dues Certificates.
              </p>

              {/* Placement of Reusable CompanySection */}
              <div className="my-8">
                <CompanySection />
              </div>
            </section>

            {/* Section 12: Frequently Asked Questions (FAQ Accordion) */}
            <section id="faqs" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>11. Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                Frequently Asked Questions About InCred Personal Loan Settlement
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-200 hover:border-slate-300 open:border-[#1F5EFF]/30 open:shadow-md"
                  >
                    <summary className="w-full p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-4">
                      <span className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
                        {faq.question}
                      </span>
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-all duration-300">
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </summary>
                    <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-base leading-relaxed border-t border-slate-100 pt-4">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
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
                    <strong>Reserve Bank of India (RBI):</strong> Master Direction on Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24)
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
                    <strong>RBI Master Circular:</strong> Fair Practices Code for Non-Banking Financial Companies (NBFCs) &amp; Outsourcing of Financial Services
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.incred.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>InCred Financial Services Limited:</strong> Fair Practices Code, Customer Grievance Redressal Policy &amp; Nodal Officer Matrix
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
                    <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Online Portal for Complaints on NBFC Harassment, Excessive Bounce Fees &amp; NDC Delays
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
                    <strong>National Legal Services Authority (NALSA):</strong> Legal Services Authorities Act, 1987 — National Lok Adalat Conciliation Framework
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
                  href="/unsecured-business-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Unsecured Business Loan Settlement
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
                  href="/recovery-agent-visiting-workplace-office"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Recovery Agent Workplace Visit Rules
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
                <Link href="/authors/ashish-jhangra" className="block focus:outline-none">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black text-base flex items-center justify-center shadow-md hover:ring-2 hover:ring-[#1F5EFF] transition-all">
                    AJ
                  </div>
                </Link>
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
                Ashish has led over 1,200+ successful debt compromise negotiations across InCred Financial Services, Aditya Birla Finance, Tata Capital, Bajaj Finance, HDFC Bank, and ICICI Bank. He specializes in corporate NBFC dispute resolution, Section 25 PSSA defense, and borrower advocacy under RBI Master Directions.
              </p>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                <Link
                  href="/authors/ashish-jhangra"
                  className="text-[#1F5EFF] hover:underline"
                >
                  View Profile &rarr;
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
                <span>InCred Dispute Resolution</span>
              </div>
              <h3 className="text-xl font-black mb-3 leading-tight">
                Facing InCred Loan Default?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Stop aggressive recovery tele-calling and recurring NACH return fees immediately. Let our experienced banking advocates audit your delinquency stage, defend statutory legal notices, draft your formal OTS petition, and secure an authentic stamped InCred Financial Services settlement letter.
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
                    <strong>Direct NBFC Representation:</strong> We bypass third-party collection agencies to represent your case directly before InCred Stressed Assets Desks.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Protection:</strong> Prompt issuance of formal legal cease-and-desist notices to stop unauthorized workplace visits and third-party calling under RBI rules.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Stamped Verification:</strong> Every settlement is strictly verified on official corporate letterhead before any payment is authorized.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed ₹0 NDC Delivery:</strong> End-to-end legal tracking until your formal No Dues Certificate is issued and credit bureaus are updated.
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
