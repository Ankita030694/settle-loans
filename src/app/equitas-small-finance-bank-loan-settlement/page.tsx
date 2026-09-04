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
  title: 'Equitas Bank Loan Settlement Guide | SettleLoans',
  description: 'Learn how to settle Equitas Small Finance Bank loans legally. Handle NACH bounce notices and negotiate single-shot OTS with SettleLoans.',
  keywords: [
    'equitas small finance bank loan settlement process',
    'equitas small finance bank personal loan settlement',
    'equitas sfb micro business loan settlement',
    'equitas small finance bank ots policy',
    'how to stop equitas bank nach bounce charges',
    'equitas bank recovery agent harassment complaint',
    'equitas sfb section 25 pssa legal notice reply',
    'equitas small finance bank loan settlement percentage',
    'equitas bank no dues certificate after settlement',
    'equitas small finance bank nodal officer escalation',
    'equitas bank lok adalat loan settlement',
    'equitas small finance bank arbitration notice defense'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/equitas-small-finance-bank-loan-settlement',
  },
  openGraph: {
    title: 'Equitas Small Finance Bank Loan Settlement: Process, OTS Rules & Haircut (2026)',
    description: 'Learn how to settle an Equitas Small Finance Bank personal or micro-business loan. Master NPA provisioning mechanics, recovery agent compliance, Credit Committee approval matrices, and step-by-step negotiation strategies under RBI compromise rules.',
    url: 'https://www.settleloans.in/equitas-small-finance-bank-loan-settlement',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/equitas-small-finance-bank-loan-settlement.jpg',
        width: 1200,
        height: 675,
        alt: 'Equitas Small Finance Bank Loan Settlement Process and OTS Haircut Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Equitas Small Finance Bank Loan Settlement: Process & Legal OTS Haircut',
    description: 'Technical and legal manual for settling defaulted Equitas Small Finance Bank personal loans and micro-business credit under RBI Compromise Settlement frameworks.',
    images: ['https://www.settleloans.in/images/infographics/equitas-small-finance-bank-loan-settlement.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/equitas-small-finance-bank-loan-settlement#webpage",
      "url": "https://www.settleloans.in/equitas-small-finance-bank-loan-settlement",
      "name": "Equitas Small Finance Bank Loan Settlement: Process, OTS Rules & Haircut (2026)",
      "description": "Exhaustive legal guide to Equitas Small Finance Bank loan settlement. Settle unsecured personal and micro-business loans, stop NACH bounce charges, halt recovery agent harassment, defend Section 25 PSSA notices, and negotiate up to 60% OTS haircut under RBI guidelines.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/equitas-small-finance-bank-loan-settlement#breadcrumb"
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
      "@id": "https://www.settleloans.in/equitas-small-finance-bank-loan-settlement#breadcrumb",
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
          "name": "Equitas Small Finance Bank Loan Settlement",
          "item": "https://www.settleloans.in/equitas-small-finance-bank-loan-settlement"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/equitas-small-finance-bank-loan-settlement#article",
      "headline": "Equitas Small Finance Bank Loan Settlement: Process, OTS Rules & Haircut Guide",
      "description": "An in-depth legal and financial manual on negotiating One-Time Settlements (OTS) with Equitas Small Finance Bank, navigating NPA provisioning, eliminating predatory bounce penalties, defending statutory notices, and securing an authentic ₹0 No Dues Certificate.",
      "image": "https://www.settleloans.in/images/infographics/equitas-small-finance-bank-loan-settlement.jpg",
      "datePublished": "2026-09-03T10:00:00+05:30",
      "dateModified": "2026-09-03T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/equitas-small-finance-bank-loan-settlement#webpage"
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
      "@id": "https://www.settleloans.in/equitas-small-finance-bank-loan-settlement#service",
      "name": "SettleLoans - Equitas Small Finance Bank Loan Settlement & Legal Defense",
      "description": "Specialized legal and financial negotiation advisory for settling defaulted Equitas Small Finance Bank unsecured personal loans, micro-business loans (MBL), and commercial lines under RBI compromise frameworks with maximum debt waivers and complete harassment protection.",
      "url": "https://www.settleloans.in/equitas-small-finance-bank-loan-settlement",
      "image": "https://www.settleloans.in/images/infographics/equitas-small-finance-bank-loan-settlement.jpg",
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
        "reviewCount": "1720",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "M. Senthil Kumar"
          },
          "datePublished": "2026-06-24",
          "reviewBody": "I operated a retail wholesale agency in Chennai and held an Equitas Small Finance Bank micro-business installment loan of ₹11.8 Lakhs. Following acute market disruptions, cash flow collapsed and the account slipped into NPA. Equitas field recovery agents were showing up at my store during peak business hours and automated NACH presentations created ₹35,000 in return fees. SettleLoans advocates intervened immediately, revoked the mandate sweeps, served an anti-harassment cease-and-desist notice, and structured a formal OTS directly with the Equitas Stressed Assets vertical in Chennai for ₹5.1 Lakhs. The stamped sanction letter and ₹0 NDC were delivered cleanly.",
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
            "name": "Ananya Mukherjee"
          },
          "datePublished": "2026-07-19",
          "reviewBody": "My Equitas SFB unsecured personal loan of ₹6.5 Lakhs went into default after unexpected medical emergencies. The bank added over ₹90,000 in penal interest and return penalties within five months. SettleLoans performed a forensic audit of the loan statement, enforced RBI fair lending directives to wipe out 100% of the penalty levies, and negotiated a 54% debt haircut on the core principal dues. Everything was handled strictly through official banking channels.",
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
            "name": "Rajeshwar Rao"
          },
          "datePublished": "2026-05-15",
          "reviewBody": "Received a statutory Section 25 PSSA legal demand notice from Equitas Small Finance Bank along with a notice for sole arbitration. I was anxious about potential court proceedings. SettleLoans drafted a thorough legal reply detailing my genuine business loss, challenged the unilateral arbitration appointment under Supreme Court guidelines, and represented me at the National Lok Adalat where the entire dispute was settled for ₹3.8 Lakhs against an outstanding claim of ₹8.4 Lakhs.",
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
            "name": "Girish Patel"
          },
          "datePublished": "2026-08-11",
          "reviewBody": "Equitas recovery collection callers were calling my elderly parents and threatening police action. SettleLoans escalated the severe fair practice violations to the Equitas Principal Nodal Officer, halted all third-party collection calls immediately, and negotiated an authorized 50% OTS discount with an official stamped letter and complete ₹0 No Dues Certificate.",
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
      "@id": "https://www.settleloans.in/equitas-small-finance-bank-loan-settlement#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the Equitas Small Finance Bank loan settlement process and how does it work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Equitas Small Finance Bank loan settlement process is a formal compromise mechanism governed under Reserve Bank of India Master Directions on Compromise Settlements. When an unsecured personal loan, micro-business loan (MBL), or small enterprise facility crosses 90 days of non-payment and transitions into Non-Performing Asset (NPA) status, the borrower submits a comprehensive hardship petition to Equitas SFB's Stressed Assets Resolution Desk. Following a Net Present Value (NPV) recovery evaluation, the bank issues an official stamped OTS Sanction Letter specifying the reduced lump-sum or structured installment amount. Direct payment into the loan account extinguishes all outstanding liabilities and entitles the borrower to a formal No Dues Certificate (NDC)."
          }
        },
        {
          "@type": "Question",
          "name": "How can borrowers stop Equitas Small Finance Bank NACH bounce charges and repeated debit sweeps?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Borrowers can halt compounding NACH bounce fees through three structured steps: (1) Formally submit an electronic mandate revocation or stop-payment instruction to their destination bank under NPCI procedural guidelines; (2) Issue a written notice to Equitas Small Finance Bank requesting an immediate cessation of repetitive electronic presentations due to verified hardship; (3) Insist upon a 100% complete waiver of all accumulated bounce penalties and penal interest under the RBI Fair Lending Practice directives during One-Time Settlement negotiations."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of debt waiver or haircut can you realistically negotiate with Equitas SFB?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "On unsecured personal loans and micro-business credit facilities, Equitas Small Finance Bank typically sanctions debt waivers ranging from 40% to 60% of total book dues. The achievable haircut depends directly on loan aging, delinquency classification (Substandard vs. Doubtful or Loss Asset), and the borrower's documented insolvency. Accounts delinquent beyond 180 to 365 days that have absorbed substantial balance-sheet provisioning qualify for maximum principal discounts alongside full cancellation of penal fees."
          }
        },
        {
          "@type": "Question",
          "name": "How do you handle aggressive Equitas SFB recovery agents and stop workplace or home harassment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Master Directions on Recovery Agents and Scheduled Commercial Bank Fair Practices Codes, borrowers enjoy strict statutory protections: (a) Agents may only contact borrowers between 08:00 AM and 07:00 PM; (b) Reaching out to employers, colleagues, neighbors, or non-guarantor relatives is strictly illegal; (c) Intimidation, verbal abuse, public humiliation, or unauthorized premises entry is prohibited; (d) Agents must carry official bank ID cards and IIBF DRA certifications. In case of violations, borrowers should serve a legal cease-and-desist notice to Equitas SFB's Principal Nodal Officer and lodge an official complaint on the RBI Integrated Ombudsman portal (CMS)."
          }
        },
        {
          "@type": "Question",
          "name": "Can Equitas Small Finance Bank file a criminal case or arrest a borrower for loan default?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Defaulting on an unsecured personal or micro-business loan is strictly a civil breach of contract under the Indian Contract Act, 1872. Police authorities have zero jurisdiction to register an FIR or make an arrest for genuine commercial or personal financial incapacity. While Equitas SFB may issue statutory legal notices under Section 25 of the Payment and Settlement Systems Act (PSSA) for dishonoured NACH mandates, these are compoundable quasi-criminal proceedings heard in Magistrate Courts and are routinely resolved through advocate representation and compromise settlements."
          }
        },
        {
          "@type": "Question",
          "name": "What is a Section 25 PSSA legal notice from Equitas SFB and how should you respond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Section 25 PSSA notice is a statutory 15-day demand notice issued when an automated NACH mandate dishonours due to insufficient funds. It is not an arrest warrant or court decree. Borrowers should promptly engage banking legal counsel to issue a comprehensive reply detailing bona fide financial hardship, challenging unauthorized multiple mandate sweeps, and opening formal channels for a compromise One-Time Settlement."
          }
        },
        {
          "@type": "Question",
          "name": "How should borrowers handle unilateral arbitration notices issued by Equitas SFB?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Equitas SFB occasionally issues arbitration notices appointing a sole arbitrator. Under landmark Supreme Court rulings (Perkins Eastman Architects DVM v. HSCC (India) Ltd. and TRF Ltd. v. Energo Engineering Projects Ltd.), unilateral arbitrator appointments by lenders without mutual consent are legally void. Legal counsel can challenge the arbitrator's jurisdiction under Section 12 and Section 14 of the Arbitration and Conciliation Act, 1996, halting unilateral ex-parte awards and redirecting the dispute into compromise settlement channels."
          }
        },
        {
          "@type": "Question",
          "name": "Who within Equitas Small Finance Bank has the authority to sanction a One-Time Settlement (OTS)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Equitas SFB's internal Delegation of Financial Powers (DoFP) matrix, outsourced tele-callers and field collection agents have zero authority to grant debt waivers. Substantive debt haircuts (40% to 60%) must be evaluated and approved by Equitas SFB's Stressed Assets Resolution Desk, Regional Credit Committee, or Zonal Head of Collections, documented via an authentic stamped sanction letter on official corporate letterhead."
          }
        },
        {
          "@type": "Question",
          "name": "How does settling an Equitas SFB loan impact your CIBIL score and credit profile?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Upon receiving the agreed settlement payment, Equitas SFB updates credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark) with the status 'Settled' or 'Post-Write-off Settled' with an outstanding balance of ₹0. While this causes a temporary credit score drop of 75 to 150 points and initiates a standard 12-month cooling-off window, it permanently terminates compounding default marks and legal proceedings. Borrowers can rebuild their score back to 750+ within 18 to 24 months through secured credit instruments."
          }
        },
        {
          "@type": "Question",
          "name": "How long does Equitas Small Finance Bank take to issue the No Dues Certificate (NDC) post-settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, Equitas Small Finance Bank is legally mandated to issue a formal No Dues Certificate (NDC) and update credit bureau records within 30 calendar days of receiving full settlement payment. If the bank fails to deliver the closure certificate within 30 days without lawful justification, it is statutorily liable to pay compensation of ₹5,000 per day of delay directly to the borrower."
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

export default function EquitasSmallFinanceBankLoanSettlementPage() {
  const tocItems = [
    { id: 'understanding-equitas-defaults', title: '1. SFB Credit Model & Default Pressures' },
    { id: 'equitas-delinquency-timeline-npa', title: '2. Delinquency Timeline & NPA Stages' },
    { id: 'stopping-equitas-bounce-charges-nach', title: '3. Halting NACH Bounce Charges & Penal Fees' },
    { id: 'equitas-ots-haircut-policy-npv', title: '4. OTS Haircut Policies & Valuation Framework' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Resolution Blueprint' },
    { id: 'recovery-agent-rules-anti-harassment', title: '6. Recovery Practices & RBI Harassment Defense' },
    { id: 'step-by-step-equitas-settlement', title: '7. Step-by-Step SFB Settlement Roadmap' },
    { id: 'section-25-pssa-arbitration-lok-adalat', title: '8. Section 25 Notices, Arbitration & Lok Adalat' },
    { id: 'sanction-letter-audit-ndc-verification', title: '9. Sanction Letter Audit & ₹0 NDC Mandate' },
    { id: 'cibil-impact-credit-rehabilitation', title: '10. CIBIL Score Trajectory & Rehabilitation' },
    { id: 'company-resolution-section', title: '11. SettleLoans Legal Defense & Representation' },
    { id: 'faqs', title: '12. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      question: "What is the Equitas Small Finance Bank loan settlement process and how does it work?",
      answer: "The Equitas Small Finance Bank loan settlement process is a formal compromise mechanism governed under Reserve Bank of India Master Directions on Compromise Settlements. When an unsecured personal loan, micro-business loan (MBL), or small enterprise facility crosses 90 days of non-payment and transitions into Non-Performing Asset (NPA) status, the borrower submits a comprehensive hardship petition to Equitas SFB's Stressed Assets Resolution Desk. Following a Net Present Value (NPV) recovery evaluation, the bank issues an official stamped OTS Sanction Letter specifying the reduced lump-sum or structured installment amount. Direct payment into the loan account extinguishes all outstanding liabilities and entitles the borrower to a formal No Dues Certificate (NDC)."
    },
    {
      question: "How can borrowers stop Equitas Small Finance Bank NACH bounce charges and repeated debit sweeps?",
      answer: "Borrowers can halt compounding NACH bounce fees through three structured steps: (1) Formally submit an electronic mandate revocation or stop-payment instruction to their destination bank under NPCI procedural guidelines; (2) Issue a written notice to Equitas Small Finance Bank requesting an immediate cessation of repetitive electronic presentations due to verified hardship; (3) Insist upon a 100% complete waiver of all accumulated bounce penalties and penal interest under the RBI Fair Lending Practice directives during One-Time Settlement negotiations."
    },
    {
      question: "What percentage of debt waiver or haircut can you realistically negotiate with Equitas SFB?",
      answer: "On unsecured personal loans and micro-business credit facilities, Equitas Small Finance Bank typically sanctions debt waivers ranging from 40% to 60% of total book dues. The achievable haircut depends directly on loan aging, delinquency classification (Substandard vs. Doubtful or Loss Asset), and the borrower's documented insolvency. Accounts delinquent beyond 180 to 365 days that have absorbed substantial balance-sheet provisioning qualify for maximum principal discounts alongside full cancellation of penal fees."
    },
    {
      question: "How do you handle aggressive Equitas SFB recovery agents and stop workplace or home harassment?",
      answer: "Under RBI Master Directions on Recovery Agents and Scheduled Commercial Bank Fair Practices Codes, borrowers enjoy strict statutory protections: (a) Agents may only contact borrowers between 08:00 AM and 07:00 PM; (b) Reaching out to employers, colleagues, neighbors, or non-guarantor relatives is strictly illegal; (c) Intimidation, verbal abuse, public humiliation, or unauthorized premises entry is prohibited; (d) Agents must carry official bank ID cards and IIBF DRA certifications. In case of violations, borrowers should serve a legal cease-and-desist notice to Equitas SFB's Principal Nodal Officer and lodge an official complaint on the RBI Integrated Ombudsman portal (CMS)."
    },
    {
      question: "Can Equitas Small Finance Bank file a criminal case or arrest a borrower for loan default?",
      answer: "No. Defaulting on an unsecured personal or micro-business loan is strictly a civil breach of contract under the Indian Contract Act, 1872. Police authorities have zero jurisdiction to register an FIR or make an arrest for genuine commercial or personal financial incapacity. While Equitas SFB may issue statutory legal notices under Section 25 of the Payment and Settlement Systems Act (PSSA) for dishonoured NACH mandates, these are compoundable quasi-criminal proceedings heard in Magistrate Courts and are routinely resolved through advocate representation and compromise settlements."
    },
    {
      question: "What is a Section 25 PSSA legal notice from Equitas SFB and how should you respond?",
      answer: "A Section 25 PSSA notice is a statutory 15-day demand notice issued when an automated NACH mandate dishonours due to insufficient funds. It is not an arrest warrant or court decree. Borrowers should promptly engage banking legal counsel to issue a comprehensive reply detailing bona fide financial hardship, challenging unauthorized multiple mandate sweeps, and opening formal channels for a compromise One-Time Settlement."
    },
    {
      question: "How should borrowers handle unilateral arbitration notices issued by Equitas SFB?",
      answer: "Equitas SFB occasionally issues arbitration notices appointing a sole arbitrator. Under landmark Supreme Court rulings (Perkins Eastman Architects DVM v. HSCC (India) Ltd. and TRF Ltd. v. Energo Engineering Projects Ltd.), unilateral arbitrator appointments by lenders without mutual consent are legally void. Legal counsel can challenge the arbitrator's jurisdiction under Section 12 and Section 14 of the Arbitration and Conciliation Act, 1996, halting unilateral ex-parte awards and redirecting the dispute into compromise settlement channels."
    },
    {
      question: "Who within Equitas Small Finance Bank has the authority to sanction a One-Time Settlement (OTS)?",
      answer: "Under Equitas SFB's internal Delegation of Financial Powers (DoFP) matrix, outsourced tele-callers and field collection agents have zero authority to grant debt waivers. Substantive debt haircuts (40% to 60%) must be evaluated and approved by Equitas SFB's Stressed Assets Resolution Desk, Regional Credit Committee, or Zonal Head of Collections, documented via an authentic stamped sanction letter on official corporate letterhead."
    },
    {
      question: "How does settling an Equitas SFB loan impact your CIBIL score and credit profile?",
      answer: "Upon receiving the agreed settlement payment, Equitas SFB updates credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark) with the status 'Settled' or 'Post-Write-off Settled' with an outstanding balance of ₹0. While this causes a temporary credit score drop of 75 to 150 points and initiates a standard 12-month cooling-off window, it permanently terminates compounding default marks and legal proceedings. Borrowers can rebuild their score back to 750+ within 18 to 24 months through secured credit instruments."
    },
    {
      question: "How long does Equitas Small Finance Bank take to issue the No Dues Certificate (NDC) post-settlement?",
      answer: "Under RBI Circular RBI/2023-24/60, Equitas Small Finance Bank is legally mandated to issue a formal No Dues Certificate (NDC) and update credit bureau records within 30 calendar days of receiving full settlement payment. If the bank fails to deliver the closure certificate within 30 days without lawful justification, it is statutorily liable to pay compensation of ₹5,000 per day of delay directly to the borrower."
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
            <Landmark className="w-3.5 h-3.5" />
            <span>Small Finance Bank Dispute Resolution • Equitas SFB</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Equitas Small Finance Bank Loan Settlement & OTS</h1>

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
              <span>RBI Scheduled Commercial Bank Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Negotiate Equitas SFB Settlement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Get Free Hardship Evaluation
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
                <span>Equitas SFB Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Equitas Small Finance Bank retail and micro-business loans crossing 90 days of default enter Non-Performing Asset (NPA) status under RBI IRACP rules. Structured legal representation bypasses field recovery pressure, halts repeated NACH returns, and secures 40%–60% principal waivers with 100% penal cancellation.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">

            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 border border-blue-200 rounded-2xl p-6 mb-8 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-base mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Equitas Small Finance Bank Loan Settlement</span>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Compromise Rights:</strong> Loan default with Equitas Small Finance Bank is strictly a civil breach of contract under the Indian Contract Act, 1872. Insolvent retail and micro-business borrowers hold statutory rights under RBI Master Directions to request a compromise One-Time Settlement (OTS).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Halting Compounding NACH Charges:</strong> Revoking electronic mandates under NPCI procedural guidelines stops repeated automated presentation fees. Legal advocacy demands a complete 100% waiver of all accumulated bounce charges and penal interest under RBI Fair Lending Practice rules.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Realistic 40%–60% Principal Haircuts:</strong> Once an unsecured personal or micro-business loan crosses 90 days into NPA or Doubtful Asset classification, Equitas SFB applies Net Present Value (NPV) recovery calculations that justify significant principal debt waivers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Defending Statutory Summons:</strong> Section 25 PSSA demand notices and unilateral private arbitration notices can be effectively answered and converted into binding, non-appealable settlement awards through National Lok Adalats.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory 30-Day ₹0 NDC Delivery:</strong> Under RBI Circular RBI/2023-24/60, Equitas SFB is legally obligated to release a formal No Dues Certificate and update credit bureaus within 30 calendar days of settlement payment, backed by a statutory ₹5,000/day delay penalty.</span>
                </li>
              </ul>
            </div>
            
            {/* Section 1: SFB Credit Model & Default Pressures */}
            <section id="understanding-equitas-defaults" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. SFB Credit Model &amp; Default Pressures</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Understanding Equitas Small Finance Bank&apos;s Credit</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Equitas Small Finance Bank Limited (Equitas SFB) holds a prominent position in India&apos;s differentiated banking ecosystem. Transitioning from a major microfinance non-banking financial institution into a full-fledged Scheduled Commercial Bank licensed under Section 22 of the Banking Regulation Act, 1949, Equitas SFB maintains a substantial credit portfolio. Its asset book is heavily concentrated in unsecured personal loans, micro-business loans (MBL), self-employed merchant credit lines, used commercial vehicle financing, and small enterprise working capital facilities.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Because Equitas SFB operates with a legacy of ground-level microfinance collections, its recovery infrastructure functions with an intensity distinct from conventional public sector banks. When an equated monthly installment (EMI) or business installment is missed, the bank&apos;s automated systems trigger rapid escalation sequences. Borrowers experience immediate high-frequency automated calling, interactive voice response alerts, repetitive electronic National Automated Clearing House (NACH) mandate presentations, and prompt dispatch of field recovery agents directly to commercial establishments, retail shops, or residences.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                For micro-entrepreneurs, traders, and salaried professionals confronting genuine economic distress—stemming from market downturns, client payment defaults, health emergencies, or loss of employment—this dual pressure of compounding bank bounce penalties and aggressive recovery contact creates severe psychological and operational strain. It is critical for distressed borrowers to recognize that defaulting on an unsecured loan is strictly a civil dispute governed by the Indian Contract Act, 1872. Under Reserve Bank of India (RBI) regulatory frameworks, borrowers possess well-defined statutory rights to stop collection misconduct, mandate an audit of inflated penalty ledgers, and execute an authorized compromise One-Time Settlement (OTS).
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong>Statutory Principle:</strong> Under the Reserve Bank of India Master Directions on Compromise Settlements and Technical Write-offs, all Scheduled Commercial Banks, including Small Finance Banks, are mandated to offer transparent, board-approved compromise mechanisms for non-wilful defaulters experiencing genuine financial insolvency.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Delinquency Timeline & NPA Stages */}
            <section id="equitas-delinquency-timeline-npa" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>2. Delinquency Timeline &amp; NPA Stages</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Equitas SFB Delinquency Lifecycle: SMA to NPA</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under the Reserve Bank of India&apos;s Prudential Norms on Income Recognition, Asset Classification and Provisioning pertaining to Advances (IRACP) and Expected Credit Loss (ECL) frameworks under Indian Accounting Standard 109 (Ind AS 109), Equitas Small Finance Bank classifies overdue credit facilities into strictly regulated Days Past Due (DPD) aging buckets. Understanding these institutional classifications is vital for timing compromise settlement negotiations to achieve maximum debt relief.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                During the Special Mention Account (SMA) stages (DPD 1 through 90), Equitas SFB focuses on aggressive regularisation and overdue collection through tele-calling and ground-level branch personnel. However, once an account crosses the critical 90-day delinquency threshold without full installment regularisation, the loan is formally classified as a Substandard Non-Performing Asset (NPA). At this stage, banking regulations require Equitas SFB to stop accruing interest into its recognized income and allocate mandatory balance-sheet provisioning against potential default losses.
              </p>

              {/* Comprehensive Stage Table */}
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Delinquency Classification</th>
                      <th>Overdue Days (DPD)</th>
                      <th>Equitas SFB Operational Actions</th>
                      <th>Statutory &amp; Legal Exposure</th>
                      <th>Compromise Haircut Scope</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-0 (Initial Default)</td>
                      <td>1 – 30 Days</td>
                      <td>Automated IVR calls, daily SMS reminders, repetitive electronic NACH auto-debit sweeps.</td>
                      <td>Zero legal exposure; initial bureau DPD tracking begins.</td>
                      <td>Negligible (Bank demands full regularisation of overdue EMI).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-1 (Mid-Level Arrears)</td>
                      <td>31 – 60 Days</td>
                      <td>Intensive telephonic collections, field executive assignments, loan acceleration notices.</td>
                      <td>Statutory warning letters; noticeable decline in CIBIL credit score.</td>
                      <td>Low (Tenure extensions or restructuring considered).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-2 (Pre-NPA Alert)</td>
                      <td>61 – 90 Days</td>
                      <td>Branch manager follow-ups, outsourced collection visits, final demand notices.</td>
                      <td>Section 25 PSSA / Section 138 NI Act statutory 15-day demand notices.</td>
                      <td>Moderate (Discussions for waiver of penal interest can begin).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-amber-700">Substandard NPA</td>
                      <td>91 – 180 Days</td>
                      <td>Transferred to Stressed Assets Resolution Desk; mandatory Ind AS 109 provisioning.</td>
                      <td>Magistrate Court summons under Sec 25 PSSA; Lok Adalat pre-conciliation.</td>
                      <td><span className="text-emerald-700 font-bold">High (35%–50% Principal Haircut).</span></td>
                    </tr>
                    <tr>
                      <td className="font-bold text-red-700">Doubtful / Loss Asset</td>
                      <td>181 – 365+ Days</td>
                      <td>High provisioning absorbed; internal technical write-off evaluation by Credit Committee.</td>
                      <td>Arbitration claims, civil summary recovery suits (Order 37 CPC), Lok Adalat.</td>
                      <td><span className="text-emerald-700 font-bold">Maximum (50%–60% Debt Haircut).</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When an unsecured personal loan or micro-business loan reaches Doubtful Asset status or undergoes technical write-off, Equitas SFB has already absorbed 100% of the loan value in capital provisions on its balance sheet. Under these circumstances, recovering an upfront lump-sum through a negotiated One-Time Settlement provides the bank with an immediate write-back to operating profit and eliminates persistent bad-asset carrying costs, creating substantial institutional incentive to sanction a deep debt waiver.
              </p>
            </section>

            {/* Section 3: Halting NACH Bounce Charges & Penal Levies */}
            <section id="stopping-equitas-bounce-charges-nach" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Banknote className="w-4 h-4" />
                <span>3. Halting NACH Bounce Charges &amp; Penal Fees</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Stopping Equitas SFB Bounce Charges &amp; NACH Hits</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                A primary driver of financial distress among defaulted borrowers is the uninhibited compounding of electronic auto-debit return charges. Equitas Small Finance Bank&apos;s automated treasury operations frequently re-present electronic NACH mandates two to four times in a single billing cycle. When a borrower&apos;s operating bank account lacks sufficient balance, the destination bank levies a return fee ranging from ₹250 to ₹500 plus GST per bounce, while Equitas SFB simultaneously debits internal late payment and return charges of ₹450 to ₹800 plus GST.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Over a period of four to six months, these repetitive presentation sweeps can drain tens of thousands of rupees from a borrower&apos;s essential liquidity or artificially inflate the outstanding loan ledger with arbitrary penalty fees. Under the Reserve Bank of India&apos;s Fair Lending Practice directives on Penal Charges in Loan Accounts (2023), banks and financial institutions are strictly prohibited from compounding penal charges or capitalizing overdue interest into principal.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers facing this cycle must execute two decisive legal maneuvers:
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                First, under National Payments Corporation of India (NPCI) procedural frameworks and RBI consumer protection directives, a borrower maintains the absolute legal authority to issue written instructions or submit a net-banking stop-mandate request to their destination bank to revoke or suspend the specific e-NACH mandate linked to the Equitas SFB loan, immediately arresting further presentation return charges.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Second, during structured One-Time Settlement negotiations, legal advocates demand an absolute 100% complete waiver of all accumulated bounce fees, penal charges, and incidental collection costs. In approved compromise settlements, Equitas SFB completely cancels these ancillary levies, calculating the settlement discount exclusively against the genuine core outstanding principal balance.
              </p>
            </section>

            {/* Section 4: OTS Haircut Policies & NPV Valuation */}
            <section id="equitas-ots-haircut-policy-npv" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>4. OTS Haircut Policies &amp; Valuation Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Equitas SFB One-Time Settlement (OTS)</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under the RBI Master Direction on Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24), Equitas Small Finance Bank adheres to a board-approved compromise settlement policy. Rather than relying on subjective staff discretion, the bank evaluates debt settlement proposals using a mathematical Net Present Value (NPV) recovery methodology.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Because unsecured personal loans and micro-business credit lines possess no underlying physical collateral (such as real estate or machinery) that can be seized under SARFAESI proceedings, Equitas SFB must mathematically evaluate an immediate lump-sum settlement offer against the heavily discounted, uncertain future cash flow of protracted court litigation, accounting for legal fees, advocate retainers, court processing friction, and capital locked in non-accrual provisioning.
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
                  Where C_t represents estimated future recoveries across time period t, r denotes the discount rate, and deductions reflect judicial friction, advocate fees, and capital immobilized under Ind AS 109 provisioning.
                </p>
              </div>

              {/* Settlement Haircut Slabs Table */}
              <h3 className="text-lg font-bold text-slate-900 mb-3">Realistic Equitas SFB Settlement Haircut Slabs by Product &amp; Aging</h3>
              <div className="overflow-x-auto my-4">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Credit Facility Type</th>
                      <th>Delinquency Aging Category</th>
                      <th>Penal &amp; Bounce Waiver</th>
                      <th>Principal Haircut Range</th>
                      <th>Recommended Opening Offer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Equitas Unsecured Personal Loan</td>
                      <td>90 – 180 Days (Substandard NPA)</td>
                      <td>100% Full Waiver</td>
                      <td>30% – 45% Principal Waiver</td>
                      <td>Offer 40%–50% of Core Ledger Dues</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Equitas Unsecured Personal Loan</td>
                      <td>181 – 365+ Days (Doubtful Asset)</td>
                      <td>100% Full Waiver</td>
                      <td>45% – 60% Principal Waiver</td>
                      <td>Offer 35%–40% of Core Ledger Dues</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Equitas Micro-Business Loan (MBL)</td>
                      <td>90 – 180 Days (Substandard NPA)</td>
                      <td>100% Full Waiver</td>
                      <td>30% – 45% Principal Waiver</td>
                      <td>Offer 45%–55% of Principal Outstanding</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Equitas Micro-Business Loan (MBL)</td>
                      <td>180+ Days (Written-Off / Doubtful)</td>
                      <td>100% All Penal Charges</td>
                      <td>50% – 65% Principal Waiver</td>
                      <td>Offer 30%–35% of Total Principal Dues</td>
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
                        Equitas Small Finance Bank Loan Settlement &amp; Legal Defense Blueprint
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/equitas-small-finance-bank-loan-settlement.jpg"
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
                      src="/images/infographics/equitas-small-finance-bank-loan-settlement.jpg"
                      alt="Equitas Small Finance Bank Loan Settlement and OTS Framework Infographic"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Strategy:</strong> Revoke NACH mandate presentations, halt third-party recovery harassment, and negotiate directly with Equitas SFB Credit Committees for 40%–60% debt waivers.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Hardship Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6: Recovery Agent Practices & RBI Harassment Defense */}
            <section id="recovery-agent-rules-anti-harassment" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>5. Recovery Practices &amp; RBI Harassment Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Defending Against Equitas SFB Recovery Practices Under RBI</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Equitas Small Finance Bank utilizes a combination of internal branch recovery executives and outsourced Debt Recovery Agencies (DRAs). Due to high recovery incentive targets, ground-level collection agents frequently cross regulatory boundaries by conducting persistent telephonic harassment, visiting borrower business premises or residences during peak hours, and attempting to contact family members, employers, or business acquaintances whose contact numbers were listed as references during loan onboarding.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The Reserve Bank of India Master Directions on Recovery Agents and Scheduled Commercial Bank Fair Practices Code establish explicit, non-negotiable statutory safeguards: (a) Agents are strictly restricted to calling or visiting borrowers between 08:00 AM and 07:00 PM; (b) Reaching out to employers, colleagues, neighbors, or non-guarantor family members is strictly unlawful; (c) Any form of verbal abuse, physical intimidation, workplace disruption, or public shaming is a punishable regulatory violation; (d) All field recovery personnel must carry authentic bank authorization letters and Indian Institute of Banking &amp; Finance (IIBF) DRA accreditation.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers subjected to collection harassment should systematically document call recordings, text messages, and CCTV recordings. Serving a formal advocate cease-and-desist notice to Equitas SFB&apos;s Principal Nodal Officer (PNO) and escalating documented breaches to the RBI Integrated Ombudsman portal (CMS) triggers immediate regulatory scrutiny, forcing the bank to halt unapproved third-party contact and re-establish formal, professional settlement communication channels.
              </p>
            </section>

            {/* Section 7: Step-by-Step SFB Settlement Roadmap */}
            <section id="step-by-step-equitas-settlement" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>6. Step-by-Step SFB Settlement Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Step-by-Step Guide to a Compromise Settlement with Equitas</h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Executing a legally airtight, financially optimized One-Time Settlement with Equitas Small Finance Bank requires a structured, evidence-backed approach:
              </p>

              <div className="space-y-6">
                {/* Phase 1 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">1</span>
                    Hardship Dossier Compilation &amp; Financial Incapacity Documentation
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Assemble comprehensive documentary proof establishing bona fide, non-wilful financial hardship. Essential records include audited financial statements showing business revenue contraction, GST return filings evidencing decreased turnover, job termination letters, salary reduction slips, hospital discharge summaries, or bank account statements evidencing depleted liquidity. This substantiates that the default is involuntary and qualifies for OTS relief under RBI frameworks.
                  </p>
                </div>

                {/* Phase 2 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">2</span>
                    Mandate Cancellation &amp; Directing Formal Communication
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Instruct your bank to revoke the e-NACH auto-debit mandate to halt recurring return charges. Issue a formal written notice to Equitas Small Finance Bank instructing that all future communication regarding the loan account be conducted strictly in writing via official email or through designated legal counsel, establishing an auditable evidentiary record.
                  </p>
                </div>

                {/* Phase 3 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">3</span>
                    Submitting Compromise Proposal to Stressed Assets Desk
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Submit a formal OTS petition addressed to Equitas SFB&apos;s Zonal Stressed Assets Resolution Desk citing the RBI Master Direction on Compromise Settlements. Anchor the initial settlement offer at 25% to 35% of total book dues to leave adequate room for structured counter-negotiation while demanding 100% elimination of all penal interest and bounce penalties.
                  </p>
                </div>

                {/* Phase 4 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">4</span>
                    Managing Counter-Demands &amp; Credit Committee Escalation
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Equitas SFB will initially reject low opening bids and propose modest discounts (10%–20%). Experienced banking counsel counters by demonstrating that settlement funds are being arranged via third-party familial support or non-business asset liquidation, guiding the Credit Committee toward the target 40% to 60% principal waiver bracket.
                  </p>
                </div>

                {/* Phase 5 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">5</span>
                    Rigorous Forensic Audit of the OTS Sanction Letter
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Prior to disbursing any funds, examine the official OTS Sanction Letter issued on corporate Equitas Small Finance Bank letterhead. Verify the loan account number, sanctioned compromise sum, explicit payment schedule, and unambiguous legal covenants confirming complete debt extinguishment, cessation of interest, and full withdrawal of pending legal actions.
                  </p>
                </div>

                {/* Phase 6 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">6</span>
                    Direct Bank Remittance &amp; Securing ₹0 No Dues Certificate
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Remit the approved settlement amount directly into your designated Equitas SFB loan account via verifiable RTGS/NEFT banking channels. Under RBI Circular RBI/2023-24/60, the bank must issue a formal No Dues Certificate (NDC) and update credit bureau records within 30 calendar days of payment completion.
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Sec 25 PSSA &amp; Lok Adalat for Equitas SFB</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When an unsecured personal loan or micro-business facility remains overdue past 60 to 90 days, Equitas Small Finance Bank frequently serves statutory demand notices under Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA) for dishonoured NACH mandates, or Section 138 of the Negotiable Instruments Act, 1881 for bounced security cheques.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                A Section 25 PSSA notice is a statutory precursor to a Magistrate Court complaint, not an arrest warrant or court decree. Serving a comprehensive legal reply within the mandatory 15-day notice window demonstrating involuntary commercial hardship, challenging unauthorized multiple mandate re-presentations, and proposing a structured compromise settlement protects your legal standing while establishing formal conciliation channels.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                In addition, Equitas SFB may issue notices invoking private arbitration. Under landmark Supreme Court rulings (including <em>Perkins Eastman Architects DVM v. HSCC (India) Ltd.</em> and <em>TRF Ltd. v. Energo Engineering Projects Ltd.</em>), unilateral arbitrator appointments by lenders without mutual written consent are legally invalid. Legal counsel can challenge the arbitrator&apos;s jurisdiction under Section 12 and Section 14 of the Arbitration and Conciliation Act, 1996, effectively halting unilateral proceedings and redirecting the dispute into compromise settlement channels.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Equitas Small Finance Bank also actively participates in quarterly National Lok Adalats organized by District Legal Services Authorities (DLSA) under the Legal Services Authorities Act, 1987. During Lok Adalat conciliation sessions, bank officers carry pre-authorized settlement mandates offering 40% to 60% debt waivers. The resulting settlement award carries the legal weight of a binding Civil Court Decree with non-appealable finality, permanently resolving the dispute and dismissing all related legal claims.
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
                      <td className="font-bold text-slate-900">Direct SFB OTS</td>
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
                      <td>Contesting unilateral arbitrator appointments.</td>
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Authenticating Equitas SFB Settlement Letters</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                A critical risk in retail debt recovery involves unscrupulous collection agents issuing unverified or verbal settlement promises to collect partial payments. If a borrower deposits money without an authentic, authorized sanction letter, Equitas SFB credits the funds toward accrued penal interest and late charges, keeping the default active and compounding.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers must verify that the OTS sanction letter is issued on official Equitas Small Finance Bank Limited letterhead displaying the Corporate Identification Number (CIN: L65191TN1993PLC025280), registered office address in Chennai, unique settlement proposal reference number, authorized signatory name, employee code, and official branch seal.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The sanction letter must explicitly state that upon receipt of the agreed settlement sum, the loan account stands fully discharged with zero remaining financial liability. Under RBI Circular RBI/2023-24/60, Equitas SFB is legally required to release the formal No Dues Certificate (NDC) and cancel all security mandates within 30 calendar days of payment, subject to a mandatory statutory penalty of ₹5,000 per day of delay payable directly to the borrower.
              </p>
            </section>

            {/* Section 10: CIBIL Score Trajectory & Rehabilitation */}
            <section id="cibil-impact-credit-rehabilitation" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>9. CIBIL Score Trajectory &amp; Rehabilitation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Post-Settlement CIBIL Recovery for Equitas SFB</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Completing a One-Time Settlement with Equitas Small Finance Bank results in the account being reported to all four licensed credit information companies (TransUnion CIBIL, Experian, Equifax, CRIF High Mark) with the status <strong>&apos;Settled&apos;</strong> or <strong>&apos;Post-Write-off Settled&apos;</strong> with an outstanding balance of exactly <strong>₹0</strong>. This causes an initial credit score drop of 75 to 150 points.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under RBI compromise directives, a mandatory 12-month cooling-off window applies before fresh unsecured credit lines can be approved. However, a &apos;Settled&apos; record with zero balance is vastly superior to an active, compounding &apos;Default&apos; status that degrades credit scores every month and invites ongoing legal exposure.
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
                Why Distressed Equitas SFB Borrowers Trust SettleLoans
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Negotiating an optimal debt settlement with a Scheduled Commercial Bank like Equitas Small Finance Bank requires rigorous financial analysis and dedicated legal advocacy. SettleLoans halts third-party recovery harassment through immediate cease-and-desist notices, defends against Section 25 PSSA summons, challenges unilateral arbitration notices, and negotiates directly with Equitas SFB&apos;s Zonal Stressed Assets Desks to secure maximum lawful debt waivers and authentic ₹0 No Dues Certificates.
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">FAQs: Equitas Small Finance Bank Loan Settlement</h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    name="faq-accordion"
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
                    <strong>RBI Master Circular:</strong> Fair Practices Code for Scheduled Commercial Banks &amp; Guidelines on Recovery Agents
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.equitasbank.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Equitas Small Finance Bank Limited:</strong> Customer Grievance Redressal Policy, Fair Practice Code &amp; Principal Nodal Officer Matrix
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
                    <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Online Portal for Complaints on Bank Harassment, Excessive Bounce Fees &amp; NDC Delays
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
                Ashish has spearheaded over 1,200+ successful debt compromise negotiations across Small Finance Banks and leading NBFCs. He specializes in micro-business loan disputes, Section 25 PSSA defense, and borrower advocacy under RBI Master Directions.
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
                <span>Equitas Dispute Resolution</span>
              </div>
              <div className="text-xl font-black mb-3 leading-tight">
                Facing Equitas SFB Default?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Stop aggressive recovery calls, ground-level visits, and recurring NACH return charges immediately. Let our senior banking advocates audit your loan status, respond to statutory legal notices, draft your formal hardship petition, and secure an authentic stamped Equitas SFB settlement letter.
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
                    <strong>Direct Bank Representation:</strong> We bypass outsourced collection agencies to negotiate directly with Equitas SFB Stressed Assets Desks and Credit Committees.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Enforcement:</strong> Immediate issuance of statutory cease-and-desist notices to stop unlawful shop/home visits and third-party calling under RBI directives.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Stamped Verification:</strong> Every settlement sanction letter is rigorously audited on official corporate letterhead before payment is approved.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed ₹0 NDC Tracking:</strong> End-to-end legal oversight until your official No Dues Certificate is delivered and credit bureau records are updated.
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
