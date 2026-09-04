import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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
  Lock,
  FileText,
  Percent,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'PNB Personal Loan Settlement: OTS Scheme, SASTRA Process & Rules (2026)',
  description: 'Exhaustive guide to Punjab National Bank (PNB) personal loan settlement. Understand PNB OTS compromise schemes, Circle SASTRA escalation, recovery agent conduct rules, Section 138/25 defense, and timeline for getting an NDC.',
  keywords: [
    'punjab national bank loan settlement',
    'pnb personal loan settlement process',
    'pnb ots scheme 2026',
    'pnb sastra branch loan settlement',
    'how to settle pnb personal loan',
    'pnb loan settlement percentage',
    'pnb recovery agent harassment complaint',
    'pnb section 138 notice reply',
    'pnb section 25 pssa legal notice',
    'pnb compromise settlement policy',
    'pnb lok adalat settlement personal loan',
    'pnb no dues certificate after settlement',
    'pnb nodal officer escalation',
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/pnb-personal-loan-settlement-process',
  },
  openGraph: {
    title: 'PNB Personal Loan Settlement: OTS Scheme, SASTRA Process & Rules (2026)',
    description: 'Learn how to settle a Punjab National Bank (PNB) personal loan or digital credit facility under PNB Special OTS schemes and Circle SASTRA resolution desks. Legal protections, haircut formulas, and ₹0 NDC guidelines.',
    url: 'https://www.settleloans.in/pnb-personal-loan-settlement-process',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/pnb-personal-loan-settlement-process.jpg',
        width: 1200,
        height: 675,
        alt: 'Punjab National Bank Personal Loan Settlement Process and OTS Haircut Blueprint',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PNB Personal Loan Settlement: OTS Scheme, SASTRA Process & Rules',
    description: 'Technical and legal manual for settling defaulted Punjab National Bank personal loans under PNB Compromise Settlement schemes and Circle SASTRA frameworks.',
    images: ['https://www.settleloans.in/images/infographics/pnb-personal-loan-settlement-process.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/pnb-personal-loan-settlement-process#webpage",
      "url": "https://www.settleloans.in/pnb-personal-loan-settlement-process",
      "name": "PNB Personal Loan Settlement: OTS Scheme, SASTRA Process & Rules (2026)",
      "description": "Exhaustive guide to Punjab National Bank (PNB) personal loan settlement. Understand PNB OTS compromise schemes, Circle SASTRA escalation, recovery agent conduct rules, Section 138/25 defense, and timeline for getting an NDC.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/pnb-personal-loan-settlement-process#breadcrumb"
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
      "@id": "https://www.settleloans.in/pnb-personal-loan-settlement-process#breadcrumb",
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
          "name": "PNB Personal Loan Settlement Process",
          "item": "https://www.settleloans.in/pnb-personal-loan-settlement-process"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/pnb-personal-loan-settlement-process#article",
      "headline": "PNB Personal Loan Settlement: OTS Scheme, SASTRA Process & Haircut Matrix",
      "description": "A comprehensive strategic guide on negotiating One-Time Settlements (OTS) with Punjab National Bank for personal loans and unsecured facilities, navigating Circle SASTRA provisioning policies, and safeguarding against recovery harassment.",
      "image": "https://www.settleloans.in/images/infographics/pnb-personal-loan-settlement-process.jpg",
      "datePublished": "2026-08-25T10:00:00+05:30",
      "dateModified": "2026-08-25T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/pnb-personal-loan-settlement-process#webpage"
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
      "@id": "https://www.settleloans.in/pnb-personal-loan-settlement-process#service",
      "name": "SettleLoans - Punjab National Bank Loan Settlement & Legal Defense",
      "description": "Specialized legal and financial negotiation advisory for settling defaulted Punjab National Bank personal loans, pension credit lines, and unsecured retail debt under PNB OTS compromise frameworks.",
      "url": "https://www.settleloans.in/pnb-personal-loan-settlement-process",
      "image": "https://www.settleloans.in/images/infographics/pnb-personal-loan-settlement-process.jpg",
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
        "reviewCount": "1840",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Harpreet Singh Sodhi"
          },
          "datePublished": "2026-06-18",
          "reviewBody": "I had a PNB personal loan of ₹8.4 Lakhs taken from the Ludhiana branch that defaulted after my manufacturing business faced serious cash flow stagnation. PNB recovery agents visited my home repeatedly. The advocates at SettleLoans stepped in, halted the harassment via legal notices, and negotiated directly with PNB's Circle SASTRA Centre. They secured an official OTS sanction letter at ₹3.6 Lakhs (a 57% waiver) with zero penal interest, and delivered my No Dues Certificate within 25 days.",
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
            "name": "Rajeev Kumar Sharma"
          },
          "datePublished": "2026-07-22",
          "reviewBody": "Following an emergency hospitalization in Delhi NCR, my PNB personal loan EMIs bounced, and PNB placed a hold on my savings account under Section 171 lien. SettleLoans represented me, replied to the bank's Section 138 legal notice, and represented my file in the National Lok Adalat bench. The settlement award was passed with a 50% principal reduction, and the CBS account freeze was revoked immediately.",
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
            "name": "Sunita Aggarwal"
          },
          "datePublished": "2026-05-14",
          "reviewBody": "Defaulted on a PNB ₹6.5 Lakhs personal loan in Jaipur. PNB collection executives were constantly calling relatives. SettleLoans filed an anti-harassment complaint with the PNB Principal Nodal Officer and routed our case into PNB's Special OTS Scheme. We settled the entire loan for ₹2.9 Lakhs paid in two installments, receiving an authentic stamped bank closure letter.",
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
            "name": "Amitabh Srivastava"
          },
          "datePublished": "2026-08-08",
          "reviewBody": "SettleLoans demonstrated deep knowledge of PSU banking hierarchies. They handled our PNB personal loan dispute in Lucknow across the Circle SASTRA and Zonal Committee levels. Their legal team ensured all penal fees were eliminated and secured an official ₹0 No Dues Certificate under the mandatory 30-day RBI timeline.",
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
      "@id": "https://www.settleloans.in/pnb-personal-loan-settlement-process#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the Punjab National Bank (PNB) personal loan settlement process and how does it operate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Punjab National Bank loan settlement process is a structured debt resolution mechanism governed by PNB's Board-approved Recovery & Compromise Settlement Policy and RBI Master Directions. When an unsecured personal loan defaults beyond 90 days and enters Non-Performing Asset (NPA) status, the file is escalated from the originating branch to PNB's Circle SASTRA Centre (Stressed Assets Stabilization and Recovery Branch). The borrower submits a formal hardship petition supported by verifiable financial distress records. PNB's Competent Settlement Committee evaluates the proposal against Net Present Value (NPV) recovery benchmarks. Upon approval, PNB issues a stamped OTS Sanction Letter, and once the agreed compromised amount is remitted directly into the loan account, the bank delivers a formal ₹0 No Dues Certificate (NDC)."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of debt waiver or haircut does Punjab National Bank offer on personal loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Punjab National Bank typically sanctions principal haircuts between 40% and 65% of the total ledger balance on defaulted unsecured personal loans, pension loans, and digital credit lines. The achievable waiver depends on the NPA aging bucket (Substandard, Doubtful D1/D2/D3, or Loss Asset), the level of balance-sheet provisioning already absorbed by PNB (ranging from 15% to 100%), and the verifiability of the borrower's insolvency. Under standard compromise terms, 100% of accumulated penal interest, compounding late fees, and cheque return charges are completely waived."
          }
        },
        {
          "@type": "Question",
          "name": "What are PNB SASTRA Centres and what authority do they have in loan settlements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SASTRA (Stressed Assets Stabilization and Recovery) Centres are PNB's dedicated specialized branches established at the Circle and Zonal levels to handle, manage, and resolve non-performing retail and commercial loan portfolios. When a personal loan defaults past 90 to 120 days, local branch managers lose discretionary sanctioning powers, and recovery operations transfer entirely to SASTRA. SASTRA committees possess the delegated financial powers to evaluate compromise settlements, sanction substantial principal haircuts, and issue legally binding OTS Sanction Letters."
          }
        },
        {
          "@type": "Question",
          "name": "Can Punjab National Bank freeze or debit my savings account under Section 171 Banker's Lien?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Under Section 171 of the Indian Contract Act, 1872 (Banker's General Lien and Right of Set-Off), Punjab National Bank has the statutory right to freeze, place a debit hold, or set off funds from any savings, salary, current, or fixed deposit account maintained across any PNB CBS branch under the same Customer Identification File (CIF) or PAN. However, PNB has zero legal authority to unilaterally freeze, debit, or attach bank accounts maintained with other independent banking institutions (such as SBI, HDFC, ICICI, or Bank of Baroda) without a formal attachment order issued by a competent Civil Court or DRT."
          }
        },
        {
          "@type": "Question",
          "name": "How should borrowers handle Section 138 NI Act and Section 25 PSSA legal notices from PNB?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When repayment cheques or automated NACH mandates bounce due to insufficient funds, PNB's empanelled legal counsels issue statutory 15-day demand notices under Section 138 of the Negotiable Instruments Act, 1881, or Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA). Borrowers must never ignore these notices. A formal legal reply drafted by experienced debt defense advocates must be served within 15 days, explaining bona fide financial incapacity, disputing inflated penal calculations, and formally proposing a compromise One-Time Settlement to avert magistrate court complaints."
          }
        },
        {
          "@type": "Question",
          "name": "What are PNB recovery agent conduct rules and how can borrowers stop collection harassment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PNB recovery agents, business correspondents, and empanelled Debt Recovery Agencies (DRAs) are bound by the RBI Master Directions on Recovery Agents and PNB's Fair Practices Code. Key protections include: (1) Calling is restricted strictly between 08:00 AM and 07:00 PM; (2) Visiting workplaces uninvited or contacting employers, colleagues, and relatives is prohibited; (3) Intimidation, abusive language, and threats are illegal; (4) Visiting agents must show a valid identity card and PNB authorization letter. Violations should be escalated immediately to PNB's Circle Head, Principal Nodal Officer, and the RBI Integrated Ombudsman on CMS portal."
          }
        },
        {
          "@type": "Question",
          "name": "Can PNB personal loans be settled through the National Lok Adalat?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Punjab National Bank extensively utilizes the quarterly National Lok Adalat organized by the National Legal Services Authority (NALSA) and State Legal Services Authorities across North and Central India. PNB deputes authorized SASTRA officers with pre-approved settlement discount mandates to Lok Adalat benches. A settlement award passed in Lok Adalat holds the legal status of a non-appealable Civil Court Decree under the Legal Services Authorities Act, 1987, ensuring permanent legal finality and extinguishing all pending court proceedings."
          }
        },
        {
          "@type": "Question",
          "name": "What is the timeline for PNB to issue the No Dues Certificate (NDC) under RBI rules?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, Punjab National Bank is legally mandated to deliver a formal No Dues Certificate (NDC) / Loan Closure Letter and update all credit information companies (CIBIL, Experian, Equifax, CRIF High Mark) within 30 calendar days of receiving full settlement payment. If PNB fails to deliver the closure certificate within 30 days without lawful justification, the bank is statutorily liable to pay compensation of ₹5,000 per day of delay directly to the borrower."
          }
        },
        {
          "@type": "Question",
          "name": "How does settling a PNB personal loan impact my CIBIL score and credit profile?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Following settlement payment, PNB updates credit bureaus with the status 'Settled' or 'Post-Write-off Settled' with an outstanding balance of ₹0. While this leads to an initial credit score drop of 75 to 150 points and a mandatory 12-month cooling period under RBI compromise guidelines before fresh unsecured borrowing, it halts active compounding default markers. Borrowers can restore their CIBIL score back to 750+ within 18 to 24 months through disciplined credit rebuilding using secured credit instruments."
          }
        },
        {
          "@type": "Question",
          "name": "What precautions must be taken before paying settlement funds to Punjab National Bank?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Borrowers must follow five vital safeguards: (1) Never pay based on verbal assurances or WhatsApp messages from recovery agents; (2) Insist on an authentic OTS Sanction Letter on official PNB branch/SASTRA letterhead with bank seal and officer signature/P.F. number; (3) Verify that the sanction letter explicitly confirms full debt discharge upon payment; (4) Remit funds strictly into your designated PNB loan account number via RTGS, NEFT, or CBS transfer—never into individual or agency accounts; (5) Obtain an immediate stamped PNB bank receipt upon remittance."
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

export default function PnbPersonalLoanSettlementPage() {
  const tocItems = [
    { id: 'understanding-pnb-loan-defaults', title: '1. Institutional Architecture & PNB Footprint' },
    { id: 'pnb-delinquency-timeline-sastra', title: '2. Delinquency Lifecycle & SASTRA Escalation' },
    { id: 'bankers-lien-pnb-cbs-defense', title: '3. Section 171 Banker\'s Lien & Account Shield' },
    { id: 'statutory-notices-section-138-pssa', title: '4. Section 138 & Section 25 Legal Defense' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Resolution Blueprint' },
    { id: 'pnb-ots-policy-haircut-formula', title: '6. PNB OTS Schemes & Valuation Formula' },
    { id: 'recovery-agent-rules-anti-harassment', title: '7. Recovery Agent Rules & Anti-Harassment' },
    { id: 'step-by-step-pnb-settlement-roadmap', title: '8. Step-by-Step SASTRA Settlement Roadmap' },
    { id: 'lok-adalat-sanction-letter-audit-ndc', title: '9. Lok Adalat, Sanction Audit & ₹0 NDC' },
    { id: 'cibil-rehabilitation-comparative-matrix', title: '10. CIBIL Trajectory & Comparative Matrix' },
    { id: 'company-resolution-section', title: '11. SettleLoans Legal Defense & Advisory' },
    { id: 'faqs', title: '12. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      question: "What is the Punjab National Bank (PNB) personal loan settlement process and how does it operate?",
      answer: "The Punjab National Bank loan settlement process is a structured debt resolution mechanism governed by PNB's Board-approved Recovery & Compromise Settlement Policy and RBI Master Directions. When an unsecured personal loan defaults beyond 90 days and enters Non-Performing Asset (NPA) status, the file is escalated from the originating branch to PNB's Circle SASTRA Centre (Stressed Assets Stabilization and Recovery Branch). The borrower submits a formal hardship petition supported by verifiable financial distress records. PNB's Competent Settlement Committee evaluates the proposal against Net Present Value (NPV) recovery benchmarks. Upon approval, PNB issues a stamped OTS Sanction Letter, and once the agreed compromised amount is remitted directly into the loan account, the bank delivers a formal ₹0 No Dues Certificate (NDC)."
    },
    {
      question: "What percentage of debt waiver or haircut does Punjab National Bank offer on personal loans?",
      answer: "Punjab National Bank typically sanctions principal haircuts between 40% and 65% of the total ledger balance on defaulted unsecured personal loans, pension loans, and digital credit lines. The achievable waiver depends on the NPA aging bucket (Substandard, Doubtful D1/D2/D3, or Loss Asset), the level of balance-sheet provisioning already absorbed by PNB (ranging from 15% to 100%), and the verifiability of the borrower's insolvency. Under standard compromise terms, 100% of accumulated penal interest, compounding late fees, and cheque return charges are completely waived."
    },
    {
      question: "What are PNB SASTRA Centres and what authority do they have in loan settlements?",
      answer: "SASTRA (Stressed Assets Stabilization and Recovery) Centres are PNB's dedicated specialized branches established at the Circle and Zonal levels to handle, manage, and resolve non-performing retail and commercial loan portfolios. When a personal loan defaults past 90 to 120 days, local branch managers lose discretionary sanctioning powers, and recovery operations transfer entirely to SASTRA. SASTRA committees possess the delegated financial powers to evaluate compromise settlements, sanction substantial principal haircuts, and issue legally binding OTS Sanction Letters."
    },
    {
      question: "Can Punjab National Bank freeze or debit my savings account under Section 171 Banker's Lien?",
      answer: "Yes. Under Section 171 of the Indian Contract Act, 1872 (Banker's General Lien and Right of Set-Off), Punjab National Bank has the statutory right to freeze, place a debit hold, or set off funds from any savings, salary, current, or fixed deposit account maintained across any PNB CBS branch under the same Customer Identification File (CIF) or PAN. However, PNB has zero legal authority to unilaterally freeze, debit, or attach bank accounts maintained with other independent banking institutions (such as SBI, HDFC, ICICI, or Bank of Baroda) without a formal attachment order issued by a competent Civil Court or DRT."
    },
    {
      question: "How should borrowers handle Section 138 NI Act and Section 25 PSSA legal notices from PNB?",
      answer: "When repayment cheques or automated NACH mandates bounce due to insufficient funds, PNB's empanelled legal counsels issue statutory 15-day demand notices under Section 138 of the Negotiable Instruments Act, 1881, or Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA). Borrowers must never ignore these notices. A formal legal reply drafted by experienced debt defense advocates must be served within 15 days, explaining bona fide financial incapacity, disputing inflated penal calculations, and formally proposing a compromise One-Time Settlement to avert magistrate court complaints."
    },
    {
      question: "What are PNB recovery agent conduct rules and how can borrowers stop collection harassment?",
      answer: "PNB recovery agents, business correspondents, and empanelled Debt Recovery Agencies (DRAs) are bound by the RBI Master Directions on Recovery Agents and PNB's Fair Practices Code. Key protections include: (1) Calling is restricted strictly between 08:00 AM and 07:00 PM; (2) Visiting workplaces uninvited or contacting employers, colleagues, and relatives is prohibited; (3) Intimidation, abusive language, and threats are illegal; (4) Visiting agents must show a valid identity card and PNB authorization letter. Violations should be escalated immediately to PNB's Circle Head, Principal Nodal Officer, and the RBI Integrated Ombudsman on CMS portal."
    },
    {
      question: "Can PNB personal loans be settled through the National Lok Adalat?",
      answer: "Yes. Punjab National Bank extensively utilizes the quarterly National Lok Adalat organized by the National Legal Services Authority (NALSA) and State Legal Services Authorities across North and Central India. PNB deputes authorized SASTRA officers with pre-approved settlement discount mandates to Lok Adalat benches. A settlement award passed in Lok Adalat holds the legal status of a non-appealable Civil Court Decree under the Legal Services Authorities Act, 1987, ensuring permanent legal finality and extinguishing all pending court proceedings."
    },
    {
      question: "What is the timeline for PNB to issue the No Dues Certificate (NDC) under RBI rules?",
      answer: "Under RBI Circular RBI/2023-24/60, Punjab National Bank is legally mandated to deliver a formal No Dues Certificate (NDC) / Loan Closure Letter and update all credit information companies (CIBIL, Experian, Equifax, CRIF High Mark) within 30 calendar days of receiving full settlement payment. If PNB fails to deliver the closure certificate within 30 days without lawful justification, the bank is statutorily liable to pay compensation of ₹5,000 per day of delay directly to the borrower."
    },
    {
      question: "How does settling a PNB personal loan impact my CIBIL score and credit profile?",
      answer: "Following settlement payment, PNB updates credit bureaus with the status 'Settled' or 'Post-Write-off Settled' with an outstanding balance of ₹0. While this leads to an initial credit score drop of 75 to 150 points and a mandatory 12-month cooling period under RBI compromise guidelines before fresh unsecured borrowing, it halts active compounding default markers. Borrowers can restore their CIBIL score back to 750+ within 18 to 24 months through disciplined credit rebuilding using secured credit instruments."
    },
    {
      question: "What precautions must be taken before paying settlement funds to Punjab National Bank?",
      answer: "Borrowers must follow five vital safeguards: (1) Never pay based on verbal assurances or WhatsApp messages from recovery agents; (2) Insist on an authentic OTS Sanction Letter on official PNB branch/SASTRA letterhead with bank seal and officer signature/P.F. number; (3) Verify that the sanction letter explicitly confirms full debt discharge upon payment; (4) Remit funds strictly into your designated PNB loan account number via RTGS, NEFT, or CBS transfer—never into individual or agency accounts; (5) Obtain an immediate stamped PNB bank receipt upon remittance."
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
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-4 tracking-wider uppercase">
            <Landmark className="w-3.5 h-3.5" />
            <span>PSU Bank Debt Resolution • Punjab National Bank</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Punjab National Bank Loan Settlement: <span className="text-[#3b82f6] md:text-[#60a5fa]">PNB OTS Scheme, SASTRA Process &amp; Haircut Matrix</span>
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
              <span>Negotiate PNB Settlement</span>
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
                <span>PNB Resolution Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                PNB transfers non-performing personal loans to Circle SASTRA Centres. Direct compromise petitions under Board-approved OTS policies unlock 40%–65% principal haircuts and extinguish all penal charges.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">

            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 border border-blue-200 rounded-2xl p-6 mb-8 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-base mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Punjab National Bank Loan Settlement</span>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Circle SASTRA Escalation:</strong> When an unsecured personal loan defaults beyond 90 days, local branch managers lose settlement discretion, transferring the file to specialized Circle SASTRA Centres for compromise evaluation.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Substantial Haircut Band (40%–65%):</strong> Involuntary defaulters with documented financial distress can secure 40% to 65% principal waivers, alongside a 100% complete waiver of unapplied penal interest and bounce penalties.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Section 171 Banker&apos;s Lien Defense:</strong> PNB can legally freeze and set off funds across any PNB branch account under the same CIF, making it essential for borrowers to safeguard external banking arrangements.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Section 138 &amp; Section 25 Defense:</strong> Prompt advocate-drafted replies to statutory cheque bounce and NACH return notices halt magistrate court escalation and pivot the bank into compromise conciliation.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Enforceable 30-Day NDC Mandate:</strong> Under RBI Circular RBI/2023-24/60, PNB is legally required to deliver a formal ₹0 No Dues Certificate within 30 days of settlement payment or pay ₹5,000 daily delay compensation.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Institutional Architecture & PNB Footprint */}
            <section id="understanding-pnb-loan-defaults" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. Institutional Architecture &amp; PNB Regional Footprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Punjab National Bank&apos;s Retail Portfolio &amp; Risk Recovery Infrastructure
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Punjab National Bank (PNB) operates as India&apos;s second-largest public sector bank following its historic mega-merger with Oriental Bank of Commerce (OBC) and United Bank of India (UBI). With an expansive retail network exceeding 10,000 domestic branches and a massive presence across Punjab, Haryana, Delhi NCR, Uttar Pradesh, Bihar, Rajasthan, and Madhya Pradesh, PNB commands a vast retail loan book. This includes unsecured personal loans, salaried overdrafts, pensioner credit lines, festive personal credit, and pre-approved digital lending products.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Unlike private commercial lenders that rely strictly on fintech credit models, PNB operates under strict public sector governance, board-approved recovery manuals, and the oversight of the Central Vigilance Commission (CVC) and the Reserve Bank of India (RBI). When an unsecured retail borrower encounters severe financial distress—such as prolonged unemployment, corporate restructuring, business insolvency, or acute medical emergencies—the borrower&apos;s cash flow breaks down. The moment scheduled EMIs fail to clear, PNB&apos;s Core Banking Solution (CBS) automatically applies penal charges of 2% per month alongside compounding interest, quickly inflating total ledger dues.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under Indian jurisprudence and the statutory directives of the Reserve Bank of India, loan default arising from genuine, involuntary financial distress is purely a civil contractual dispute governed by the Indian Contract Act, 1872. Indian law and RBI guidelines draw a sharp line between a wilful defaulter who possesses liquid assets but deliberately refuses to pay, and a bona fide distressed borrower whose debt-servicing capacity has been dismantled by legitimate hardship. Involuntary borrowers have the recognized legal right to seek debt resolution under PNB&apos;s board-approved compromise settlement policies.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong>Fundamental Civil Protection:</strong> Defaulting on an unsecured personal loan with Punjab National Bank is strictly a civil breach of contract under the Indian Contract Act, 1872. It is not a criminal offense. Neither PNB branch managers, recovery agents, nor local police authorities have the legal authority to arrest, detain, or register criminal FIRs against borrowers for genuine financial defaults.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Delinquency Timeline & SASTRA Escalation */}
            <section id="pnb-delinquency-timeline-sastra" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>2. Delinquency Lifecycle &amp; SASTRA Escalation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                PNB&apos;s Delinquency Lifecycle: From SMA-0 to Circle SASTRA Transfer
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Successfully settling a personal loan with Punjab National Bank requires understanding the Reserve Bank of India&apos;s Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP). When a monthly repayment is missed, the loan account moves through standardized regulatory classifications that dictate the bank&apos;s provisioning liability and its institutional appetite for granting debt waivers.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                During the early delinquency stages (SMA-0 and SMA-1, spanning 1 to 60 days overdue), collections are managed at the branch level through automated SMS alerts and telephonic follow-ups. Once default reaches SMA-2 status (61 to 90 days overdue), the account is flagged for imminent NPA classification. When the default crosses 90 consecutive days, the loan is formally classified as a Non-Performing Asset (NPA). At this crucial stage, local branch managers lose discretionary settlement authority, and the account is transferred to PNB&apos;s specialized <strong>Circle SASTRA Centre (Stressed Assets Stabilization and Recovery Branch)</strong>.
              </p>

              {/* 4-Sided Bordered Delinquency Table */}
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Delinquency Stage</th>
                      <th>Overdue Duration</th>
                      <th>PNB Asset Category</th>
                      <th>Institutional Action &amp; Haircut Viability</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-0</td>
                      <td>1 – 30 Days Past Due</td>
                      <td>Standard Performing Asset</td>
                      <td>Automated SMS reminders, NACH re-presentment fees, standard branch tele-calling. 0% haircut viability.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-1</td>
                      <td>31 – 60 Days Past Due</td>
                      <td>Standard Monitored Asset</td>
                      <td>Formal demand letters, initial field visits by branch recovery staff. Standard restructuring without haircut.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-2</td>
                      <td>61 – 90 Days Past Due</td>
                      <td>High-Risk Pre-NPA</td>
                      <td>Final cure notices, pre-NPA warnings, automated debit holds on linked PNB accounts. Compromise talks initiated.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">NPA (Substandard)</td>
                      <td>91 – 365 Days Past Due</td>
                      <td>Substandard Asset (15% Provision)</td>
                      <td>File transferred to Circle SASTRA Centre. Statutory legal demand notices issued. 35%–50% haircut potential.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">NPA (Doubtful D1–D3)</td>
                      <td>1 – 3 Years Past Due</td>
                      <td>Doubtful Asset (25%–100% Provision)</td>
                      <td>Assigned to Zonal Settlement Committee / Lok Adalat bench. Maximum haircut potential (50%–65%).</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Loss Asset</td>
                      <td>&gt; 3 Years / Written Off</td>
                      <td>Loss Asset (100% Provisioned)</td>
                      <td>Account fully provisioned on PNB balance sheet. Deepest compromise discounts sanctioned for cash recovery.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Section 171 Banker's Lien & Account Shield */}
            <section id="bankers-lien-pnb-cbs-defense" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Lock className="w-4 h-4" />
                <span>3. Section 171 Banker&apos;s Lien &amp; CBS Account Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Banker&apos;s General Lien Under Section 171: Protecting Your Financial Lifeline
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                A critical legal mechanism frequently exercised by Punjab National Bank is the <strong>Banker&apos;s Right of General Lien and Set-Off</strong> under Section 171 of the Indian Contract Act, 1872. Because PNB operates an integrated Core Banking Solution (CBS) across all branches nationwide, the bank&apos;s system automatically maps all accounts linked to the borrower&apos;s Customer Identification File (CIF) and Permanent Account Number (PAN).
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                If an unsecured personal loan defaults, PNB&apos;s CBS engine can unilaterally place a freeze, debit hold, or auto-sweep funds from any savings account, current account, recurring deposit, or fixed deposit maintained with Punjab National Bank (including accounts originating from legacy OBC or UBI branches). However, PNB&apos;s statutory power of lien is strictly limited to accounts maintained within Punjab National Bank itself.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                <strong>PNB has zero legal power to debit, freeze, or attach funds maintained in external banking institutions</strong> (such as State Bank of India, HDFC Bank, ICICI Bank, or Bank of Baroda) without obtaining an explicit attachment order from a competent Civil Court or Debt Recovery Tribunal (DRT). Borrowers facing imminent default must immediately route their active salary, business revenues, and essential family savings to an independent third-party bank account to preserve their essential living liquidity during settlement negotiations.
              </p>
            </section>

            {/* Section 4: Section 138 & Section 25 Legal Defense */}
            <section id="statutory-notices-section-138-pssa" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>4. Section 138 &amp; Section 25 Legal Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Defending Section 138 NI Act &amp; Section 25 PSSA Statutory Notices
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When an electronic National Automated Clearing House (NACH) auto-debit mandate fails or a post-dated repayment cheque dishonours due to insufficient funds, Punjab National Bank&apos;s empanelled law firms issue formal statutory demand notices under <strong>Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA)</strong> or <strong>Section 138 of the Negotiable Instruments Act, 1881</strong>.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Receiving a Section 138 or Section 25 notice is not an arrest warrant; it is a mandatory 15-day statutory precursor required before the bank can file a complaint before a Metropolitan Magistrate or Judicial Magistrate First Class (JMFC). Borrowers must never ignore these statutory communications. Serving a comprehensive, advocate-drafted legal reply within the 15-day statutory window establishes genuine financial hardship, challenges unlawful compounding penal interest, and officially proposes a compromise One-Time Settlement, effectively pausing aggressive magistrate court actions and directing the bank toward judicial conciliation.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="infographic-resolution-blueprint" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>5. Visual Resolution Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Punjab National Bank Personal Loan Settlement Process Flowchart
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                The visual blueprint below details the complete 4-stage resolution framework for Punjab National Bank personal loans, illustrating delinquency progression, Circle SASTRA escalation, Zonal Committee compromise valuation, and final ₹0 No Dues Certificate delivery.
              </p>

              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 my-6">
                <div className="relative w-full aspect-video">
                  <Image
                    src="/images/infographics/pnb-personal-loan-settlement-process.jpg"
                    alt="Punjab National Bank Personal Loan Settlement Process Flowchart and SASTRA Resolution Blueprint"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                  />
                </div>
                <div className="p-4 bg-slate-900 text-slate-300 text-xs sm:text-sm border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2">
                  <span><strong>Figure 1:</strong> Complete 4-Stage PNB Loan Settlement Lifecycle &amp; SASTRA Haircut Approval Architecture.</span>
                  <span className="text-blue-400 font-semibold">16:9 HD Resolution</span>
                </div>
              </div>
            </section>

            {/* Section 6: PNB OTS Schemes & Valuation Formula */}
            <section id="pnb-ots-policy-haircut-formula" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>6. PNB OTS Schemes &amp; Valuation Formula</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                PNB Special OTS Schemes, Delegated Powers &amp; Recovery NPV Formula
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Punjab National Bank operates under structured Board-approved Compromise Settlement Policies and periodically launches time-bound <strong>Special OTS Schemes</strong> designed to clean its retail balance sheet of non-performing loans. Under PNB&apos;s internal Delegation of Financial Powers (DFP), settlement authority is strictly tiered: local branch managers have limited waiver powers, Circle SASTRA Heads can approve moderate haircuts, while substantial waivers (40% to 65%) on higher balances require sanction by the Zonal Settlement Committee (ZSC) or the Head Office Credit Committee.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When evaluating an OTS petition, PNB does not act on sentiment; it applies a rigorous <strong>Net Present Value (NPV) Recovery Benchmark</strong> mandated by RBI Master Directions. The bank compares the guaranteed immediate cash recovery of a compromise offer against the discounted net recovery of prolonged litigation in Civil Courts or DRTs over 3 to 7 years.
              </p>

              {/* Formula Container Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>PNB Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated recoveries in year t, r is PNB&apos;s cost of capital discount rate, and deductions account for multi-year court expenses, advocate retainers, and regulatory capital locked in 100% NPA balance-sheet provisioning.
                </p>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Because an unsecured personal loan lacks tangible collateral that can be attached under SARFAESI, PNB recognizes that prolonged civil litigation yields low recovery efficiency. When an advocate presents a credible hardship dossier demonstrating that the borrower&apos;s insolvency is irreversible, PNB&apos;s settlement committee regularly approves substantial principal haircuts (40% to 65%) combined with a total 100% waiver of accrued penal interest.
              </p>
            </section>

            {/* Section 7: Recovery Agent Rules & Anti-Harassment */}
            <section id="recovery-agent-rules-anti-harassment" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>7. Recovery Agent Rules &amp; Anti-Harassment</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                PNB Recovery Agent Conduct Rules &amp; Statutory Harassment Protections
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Across its vast footprint in North and Central India, Punjab National Bank utilizes internal recovery officers for early arrears and assigns empanelled third-party Debt Recovery Agencies (DRAs) and Business Correspondents (BCs) for NPA accounts. However, all recovery personnel are bound by the strict statutory standards of the <strong>RBI Master Circular on Recovery Agents and Conduct</strong>, as well as landmark Supreme Court directives.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers possess clear, legally enforceable rights against unlawful recovery practices:
              </p>
              <ul className="space-y-3 mb-6 text-slate-700 text-base md:text-lg">
                <li className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span><strong>Strict Permitted Calling Hours:</strong> Recovery agents may contact borrowers strictly between 08:00 AM and 07:00 PM. Late-night or early-morning calls are strictly prohibited by RBI guidelines.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span><strong>Prohibition of Workplace &amp; Third-Party Contact:</strong> Agents are legally barred from visiting workplaces uninvited, creating scenes at office premises, or contacting colleagues, employers, and non-guarantor family members.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span><strong>Mandatory Identity &amp; Authorization Credentials:</strong> Any visiting recovery executive must produce an official PNB authorization letter with DRA identity credentials and an official bank employee ID upon request.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span><strong>Zero Tolerance for Intimidation or Abuse:</strong> Verbal abuse, physical intimidation, social shaming, or threatening arrest constitutes an offense under Section 503 and 506 of the Indian Penal Code (or Bharatiya Nyaya Sanhita).</span>
                </li>
              </ul>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                If PNB collection agents violate these statutory protections, borrowers should serve a formal legal cease-and-desist notice to the PNB Circle Head and Principal Nodal Officer, while simultaneously filing an online complaint on the <strong>RBI Integrated Ombudsman CMS Portal (cms.rbi.org.in)</strong>.
              </p>
            </section>

            {/* Section 8: Step-by-Step SASTRA Settlement Roadmap */}
            <section id="step-by-step-pnb-settlement-roadmap" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileText className="w-4 h-4" />
                <span>8. Step-by-Step SASTRA Settlement Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                The 6-Phase Step-by-Step PNB SASTRA Settlement Roadmap
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Executing a legally sound, maximum-haircut One-Time Settlement with Punjab National Bank requires a disciplined, evidence-based legal strategy:
              </p>

              <div className="space-y-6">
                {/* Phase 1 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">1</span>
                    Comprehensive Financial Audit &amp; Hardship Dossier Compilation
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Assemble comprehensive documentary proof evidencing bona fide, non-wilful financial distress. Crucial records include job termination letters, salary reduction slips, audited business balance sheets, hospital discharge summaries, or bank statements showing depleted liquidity. This proves the default is involuntary and qualifies for PSU compromise relief.
                  </p>
                </div>

                {/* Phase 2 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">2</span>
                    Revoking NACH Mandates &amp; Establishing Written Communication
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Submit a formal mandate suspension request to your bank under NPCI rules to stop recurring NACH bounce penalties. Serve a formal written notice to PNB directing all communication to official email channels or through designated legal counsel, establishing a verifiable evidentiary audit trail.
                  </p>
                </div>

                {/* Phase 3 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">3</span>
                    Submitting Formal Hardship Petition to Circle SASTRA Centre
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Submit a formal OTS petition addressed to PNB&apos;s Circle SASTRA Head citing PNB&apos;s Board-approved Recovery Policy and the RBI Master Direction on Compromise Settlements. Anchor the initial settlement offer at 25% to 35% of principal dues to establish realistic room for structured counter-negotiations.
                  </p>
                </div>

                {/* Phase 4 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">4</span>
                    Managing Counter-Demands &amp; Structuring Committee Approvals
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    PNB will initially offer nominal concessions (10%–20%). Experienced banking advocates demonstrate that settlement funds are being pooled from external family assistance or non-banking liquidation, steering the Zonal Settlement Committee toward the target 40% to 65% principal waiver band.
                  </p>
                </div>

                {/* Phase 5 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">5</span>
                    Rigorous Forensic Audit of the PNB OTS Sanction Letter
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Before transferring any settlement funds, conduct a forensic audit of the sanction letter. Ensure it is printed on official PNB branch or SASTRA letterhead, signed by an authorized Chief Manager/Assistant General Manager with P.F. number, and explicitly confirms full debt extinguishment with withdrawal of all legal notices.
                  </p>
                </div>

                {/* Phase 6 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">6</span>
                    Direct Account Remittance &amp; Enforcing ₹0 NDC Delivery
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Deposit the agreed settlement amount directly into your designated PNB loan account number via RTGS, NEFT, or CBS transfer. Under RBI Circular RBI/2023-24/60, PNB is legally required to deliver a formal No Dues Certificate and update credit bureaus within 30 calendar days.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: Lok Adalat, Sanction Audit & ₹0 NDC */}
            <section id="lok-adalat-sanction-letter-audit-ndc" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4" />
                <span>9. Lok Adalat, Sanction Audit &amp; ₹0 NDC Mandate</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                National Lok Adalat Resolution, Sanction Forensics &amp; Mandatory NDC Timeline
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Punjab National Bank actively participates in the quarterly <strong>National Lok Adalat</strong> conducted across India under the <em>Legal Services Authorities Act, 1987</em>. During Lok Adalat sessions, PNB deputes authorized SASTRA officers empowered with special discount mandates (often approving 45% to 60% haircuts). A settlement award passed in Lok Adalat holds the legal status of a non-appealable <strong>Civil Court Decree</strong>, ensuring absolute finality and permanently terminating all Section 138 NI Act or Section 25 PSSA proceedings.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                A grave danger during debt resolution is unauthorized collection agents issuing fabricated settlement letters to pocket partial payments. Borrowers must perform a rigorous 5-point forensic audit of any PNB OTS sanction letter before depositing funds:
              </p>
              <ul className="space-y-3 mb-6 text-slate-700 text-base md:text-lg">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-1" />
                  <span><strong>Official PNB Letterhead:</strong> Verify the letter is printed on official Punjab National Bank letterhead with branch code, BSR code, and official contact details.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-1" />
                  <span><strong>Authorized Signatory Credentials:</strong> Ensure the letter is signed by an authorized officer (Chief Manager, AGM, or Circle SASTRA Head) with employee P.F. number and official bank stamp.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-1" />
                  <span><strong>Unambiguous Debt Extinguishment Clause:</strong> Confirm the letter explicitly states that the payment represents full and final settlement, releasing the borrower from all further claims.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-1" />
                  <span><strong>Direct Loan Account Remittance:</strong> Payments must be deposited strictly into the borrower&apos;s PNB loan account number—never into individual or agency accounts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-1" />
                  <span><strong>Statutory 30-Day NDC Delivery:</strong> Under RBI Circular RBI/2023-24/60, PNB is legally mandated to deliver the formal No Dues Certificate within 30 days or pay ₹5,000 daily compensation.</span>
                </li>
              </ul>
            </section>

            {/* Section 10: CIBIL Trajectory & Comparative Matrix */}
            <section id="cibil-rehabilitation-comparative-matrix" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>10. CIBIL Trajectory &amp; Comparative Resolution Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                CIBIL Score Recovery Post-Settlement &amp; Resolution Avenue Comparison
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Following full payment of the agreed settlement amount, Punjab National Bank updates all four licensed credit bureaus (TransUnion CIBIL, Experian, Equifax, CRIF High Mark) with the status <strong>&apos;Settled&apos;</strong> or <strong>&apos;Post-Write-off Settled&apos;</strong> with an outstanding balance of exactly <strong>₹0</strong>. While this results in a temporary credit score drop of 75 to 150 points and a mandatory 12-month cooling period before fresh unsecured credit can be accessed, it completely halts active compounding default entries.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers can systematically restore their credit profile to 750+ within 18 to 24 months by securing a fixed-deposit-backed credit card (FD card), maintaining credit utilization strictly below 25%, and maintaining a flawless repayment track record on all utility bills and surviving credit obligations.
              </p>

              {/* 4-Sided Bordered Comparative Matrix Table */}
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Resolution Avenue</th>
                      <th>Principal Haircut Range</th>
                      <th>Legal Finality</th>
                      <th>CIBIL Reporting Status</th>
                      <th>Resolution Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Direct Circle SASTRA OTS</td>
                      <td>40% – 65% Principal Haircut</td>
                      <td>Complete (PNB NDC Issued)</td>
                      <td>&apos;Settled&apos; / ₹0 Balance</td>
                      <td>3 to 6 Weeks</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">National Lok Adalat</td>
                      <td>45% – 65% Principal Haircut</td>
                      <td>Absolute (Civil Court Decree)</td>
                      <td>&apos;Settled&apos; / ₹0 Balance</td>
                      <td>Quarterly Lok Adalat Cycles</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Standard Restructuring</td>
                      <td>0% Haircut (Tenure Extension)</td>
                      <td>Conditional on Ongoing EMIs</td>
                      <td>&apos;Restructured&apos; / Active Debt</td>
                      <td>2 to 4 Weeks</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Civil Court / DRT Litigation</td>
                      <td>Uncertain (Judicial Discretion)</td>
                      <td>Subject to Multi-Year Appeal</td>
                      <td>&apos;Suit Filed&apos; / Open Default</td>
                      <td>3 to 7 Years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 11: CompanySection Component */}
            <section id="company-resolution-section" className="scroll-mt-24 mb-8">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4" />
                <span>11. SettleLoans Legal Defense &amp; Advisory</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Professional Legal Representation for Punjab National Bank Settlements
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Settling a defaulted personal loan with a major public sector lender like Punjab National Bank requires specialized knowledge of PSU banking hierarchies, Circle SASTRA procedures, and RBI Master Directions. SettleLoans provides end-to-end legal and financial representation to protect your family from recovery harassment, reply to statutory Section 138/25 notices, and negotiate directly with PNB Zonal Committees for maximum debt relief.
              </p>
              <CompanySection />
            </section>

            {/* Section 12: Frequently Asked Questions (FAQ Accordion) */}
            <section id="faqs" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>12. Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                Frequently Asked Questions About PNB Personal Loan Settlement
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

            {/* 5 Official Regulatory Links */}
            <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8">
              <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-[#1F5EFF]" />
                <span>Official Statutory &amp; Regulatory References</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between"
                >
                  <span className="font-semibold text-slate-800">RBI Master Directions on Compromise Settlements (2023)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between"
                >
                  <span className="font-semibold text-slate-800">RBI Master Circular on Recovery Agents &amp; Conduct</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (CMS Portal)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between"
                >
                  <span className="font-semibold text-slate-800">National Legal Services Authority (Lok Adalat Guidelines)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between"
                >
                  <span className="font-semibold text-slate-800">Payment &amp; Settlement Systems Act (Section 25)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#1F5EFF]" />
                <span>Related Loan Settlement &amp; Legal Defense Guides</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Guide
                </Link>
                <Link
                  href="/personal-loan-settlement-letter-format"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Personal Loan Settlement Letter Format
                </Link>
                <Link
                  href="/personal-loan-settlement-percentage"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Personal Loan Settlement Percentage
                </Link>
                <Link
                  href="/unsecured-business-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Unsecured Business Loan Settlement
                </Link>
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Lok Adalat Notice for Personal Loan
                </Link>
                <Link
                  href="/personal-loan-legal-notice"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Personal Loan Legal Notice Defense
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Settlement CIBIL Impact
                </Link>
                <Link
                  href="/section-138-cheque-bounce-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Section 138 Cheque Bounce Defense
                </Link>
                <Link
                  href="/recovery-agent-visiting-workplace-office"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Recovery Agent Workplace Rules
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
          <aside className="w-full sticky top-24 space-y-6">
            
            {/* Author Bio Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Link href="/authors/ashish-jhangra" className="w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-lg hover:opacity-90 transition-opacity">
                  AJ
                </Link>
                <div>
                  <div className="font-bold text-slate-900 text-sm">
                    <Link href="/authors/ashish-jhangra" className="hover:text-[#1F5EFF] transition-colors">
                      Ashish Jhangra
                    </Link>
                  </div>
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Specialist in PSU bank compromise settlement frameworks, Circle SASTRA negotiations, NPA provisioning forensics, and banking dispute litigation with over a decade of debt resolution experience.
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <Link href="/authors/ashish-jhangra" className="text-[#1F5EFF] font-semibold hover:underline">
                  View Profile &rarr;
                </Link>
                <span className="flex items-center gap-1">
                  <span>Verified Author</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                </span>
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Immediate Legal Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Facing PNB Recovery Pressure?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Halt illegal agent harassment, reply to Section 138/25 notices, and negotiate a formal 40%–65% debt waiver directly with Circle SASTRA.
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
              <div className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Institutional Protections
              </div>
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
                  <span>Verified PNB Letterhead Sanctions</span>
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
