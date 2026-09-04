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
  GraduationCap,
  Percent,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Avanse Education Loan Settlement | SettleLoans',
  description:
    'Comprehensive guide to Avanse Financial Services education loan settlement. Learn how to settle domestic & overseas student loans, shield co-borrower parents, eliminate capitalized moratorium interest, defend legal notices, and negotiate up to 60% OTS haircut under RBI guidelines.',
  keywords: [
    'avanse loan settlement process',
    'avanse education loan settlement',
    'avanse financial services ots policy',
    'avanse student loan default abroad',
    'shield co-borrower parents avanse loan',
    'avanse moratorium interest waiver',
    'avanse education loan haircut percentage',
    'avanse section 25 pssa notice reply',
    'avanse no dues certificate education loan',
    'avanse loan compromise settlement rbi',
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/avanse-education-loan-settlement-process',
  },
  openGraph: {
    title: 'Avanse Education Loan Settlement: OTS Process, Co-Borrower Shield & Haircut (2026)',
    description:
      'Learn how to negotiate a One-Time Settlement (OTS) with Avanse Financial Services. Protect co-borrower parents, halt collection harassment, eliminate moratorium compound interest, and resolve unsecured or secured higher education debt under RBI frameworks.',
    url: 'https://www.settleloans.in/avanse-education-loan-settlement-process',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/avanse-education-loan-settlement-process.jpg',
        width: 1200,
        height: 675,
        alt: 'Avanse Education Loan Settlement Process and OTS Haircut Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avanse Education Loan Settlement: OTS Process, Co-Borrower Shield & Haircut',
    description:
      'Technical and legal manual for settling defaulted Avanse higher education loans under RBI Compromise Settlement frameworks, protecting co-borrowers, and releasing pledged collateral.',
    images: ['https://www.settleloans.in/images/infographics/avanse-education-loan-settlement-process.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/avanse-education-loan-settlement-process#webpage",
      "url": "https://www.settleloans.in/avanse-education-loan-settlement-process",
      "name": "Avanse Education Loan Settlement: OTS Process, Co-Borrower Shield & Haircut (2026)",
      "description": "Comprehensive guide to Avanse Financial Services education loan settlement. Learn how to settle domestic & overseas student loans, shield co-borrower parents, eliminate capitalized moratorium interest, defend legal notices, and negotiate up to 60% OTS haircut under RBI guidelines.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/avanse-education-loan-settlement-process#breadcrumb"
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
      "@id": "https://www.settleloans.in/avanse-education-loan-settlement-process#breadcrumb",
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
          "name": "Avanse Education Loan Settlement Process",
          "item": "https://www.settleloans.in/avanse-education-loan-settlement-process"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/avanse-education-loan-settlement-process#article",
      "headline": "Avanse Education Loan Settlement: OTS Process, Co-Borrower Protection & Haircut Guide",
      "description": "A strategic guide on negotiating One-Time Settlements with Avanse Financial Services, de-capitalizing compounded moratorium interest, safeguarding co-borrower parents, and resolving overseas default distress.",
      "image": "https://www.settleloans.in/images/infographics/avanse-education-loan-settlement-process.jpg",
      "datePublished": "2026-09-02T12:00:00+05:30",
      "dateModified": "2026-09-02T12:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/avanse-education-loan-settlement-process#webpage"
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
      "@id": "https://www.settleloans.in/avanse-education-loan-settlement-process#service",
      "name": "SettleLoans - Avanse Education Loan Settlement & Legal Defense",
      "description": "Specialized legal and financial negotiation advisory for settling defaulted Avanse Financial Services education loans, de-capitalizing moratorium interest, and shielding co-borrower parents under RBI compromise frameworks.",
      "url": "https://www.settleloans.in/avanse-education-loan-settlement-process",
      "image": "https://www.settleloans.in/images/infographics/avanse-education-loan-settlement-process.jpg",
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
        "reviewCount": "1820",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Aditya Sengupta" },
          "datePublished": "2026-07-19",
          "reviewBody": "After facing tech layoffs on my US STEM OPT visa, my Avanse unsecured master's loan of ₹48 Lakhs became unpayable. Recovery agents in India began harassing my retired father. SettleLoans stepped in immediately, served statutory cease-and-desist notices to Avanse's Principal Nodal Officer, eliminated ₹12 Lakhs in capitalized interest and bounce penalties, and negotiated an institutional OTS of ₹21.5 Lakhs with a stamped ₹0 No Dues Certificate.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Meera Ramanathan" },
          "datePublished": "2026-06-11",
          "reviewBody": "My daughter completed her MBA in the UK, but due to severe hiring freezes and post-study work visa changes, she could not secure employment. Avanse sent a Section 25 PSSA legal notice alongside arbitration summons in Mumbai. SettleLoans responded to all legal notices, challenged the unilateral arbitration, and settled the ₹36 Lakh claim for ₹16 Lakhs directly through Avanse's Stressed Assets Committee.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Karthik Subramanian" },
          "datePublished": "2026-08-02",
          "reviewBody": "Avanse had taken our residential property as collateral for an overseas pilot training loan. When training was delayed and default occurred, they threatened SARFAESI action. SettleLoans filed a detailed Section 13(3A) representation, halted coercive enforcement, and negotiated an amicable OTS of ₹26 Lakhs against ₹49 Lakhs book dues, releasing our original title deeds in 28 days.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Priyanka Bhattacharya" },
          "datePublished": "2026-05-27",
          "reviewBody": "Outstanding debt negotiation team. They de-capitalized years of compounded moratorium interest on my domestic engineering education loan with Avanse, protected my mother's pension account from unlawful recovery threats, and secured an authentic 55% debt waiver on core balance dues.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.settleloans.in/avanse-education-loan-settlement-process#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the Avanse education loan settlement process and how does an NBFC compromise work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Avanse education loan settlement process is a structured debt resolution framework sanctioned under Reserve Bank of India Master Directions on Compromise Settlements. When an unsecured or secured education loan crosses 90 days of non-payment and transitions into Non-Performing Asset (NPA) status, the borrower or their legal counsel submits a formal hardship petition to Avanse Financial Services Limited's Stressed Assets Committee. Upon evaluating the financial distress (such as overseas job loss, visa curtailment, or family medical insolvency) against the Net Present Value (NPV) of prolonged litigation, Avanse issues a stamped One-Time Settlement (OTS) Sanction Letter. Paying the agreed discounted amount directly into the loan account extinguishes all outstanding liabilities and entitles the borrower and co-borrowers to a formal No Dues Certificate (NDC)."
          }
        },
        {
          "@type": "Question",
          "name": "How are co-borrower parents shielded when a student defaults on an Avanse loan after studying abroad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In India, parents are typically added as co-borrowers, creating joint and several liability under Section 128 of the Indian Contract Act, 1872. However, statutory law provides robust protections against coercive recovery: (1) Section 60 of the Code of Civil Procedure (CPC) strictly protects pensions, provident funds (PF), gratuities, and basic salary from civil attachment; (2) RBI Master Directions on Recovery Agents prohibit calling before 8:00 AM or after 7:00 PM, visiting parent workplaces, intimidating senior citizens, or contacting non-guarantor relatives; (3) Serving a formal legal cease-and-desist notice halts collection harassment and mandates that all communication be conducted in writing with designated legal counsel."
          }
        },
        {
          "@type": "Question",
          "name": "How does compound interest during the study moratorium affect Avanse loan settlements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "During the study moratorium and post-course grace period (typically 24 to 36 months), simple interest accrues continuously and is capitalized into the principal balance once regular EMI repayment starts. This aggressive capitalization can inflate an initial ₹40 Lakh loan to ₹60 Lakh or more. During formal OTS negotiations, seasoned banking advocates audit the historical ledger, demand the complete de-capitalization of moratorium compound interest, waive 100% of accumulated bounce charges and penal interest, and negotiate the settlement percentage based on the net disbursed principal amount."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of debt waiver or haircut can you realistically negotiate with Avanse Financial Services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "On unsecured education loans (where no property or liquid asset is pledged), Avanse typically approves debt waivers between 40% and 60% of total ledger dues, provided the loan has entered NPA status (90+ DPD) or Doubtful Asset classification. For secured education loans backed by real estate collateral, debt waivers generally range between 20% and 35%, because the lender's recovery floor is anchored to the distress sale valuation of the underlying property under the SARFAESI Act."
          }
        },
        {
          "@type": "Question",
          "name": "Can Avanse Financial Services file a criminal case or have the borrower arrested for student loan default?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Defaulting on an education loan due to involuntary unemployment, visa expiration, or commercial hardship is strictly a civil breach of contract under the Indian Contract Act, 1872. Police authorities have no jurisdiction to register an FIR or make an arrest for bona fide financial inability. While Avanse may issue legal notices under Section 25 of the Payment and Settlement Systems Act (PSSA) for bounced NACH mandates, these are compoundable quasi-criminal proceedings handled in Magistrate Courts that are routinely resolved through advocate representation and compromise settlements."
          }
        },
        {
          "@type": "Question",
          "name": "How should borrowers handle Section 25 PSSA notices and arbitration notices sent by Avanse?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Borrowers receiving a Section 25 PSSA statutory notice must submit a detailed legal reply through counsel within the 15-day window, evidencing bona fide financial incapacity, revoking automated debit presentations, and asserting the absence of fraudulent intent. When Avanse issues unilateral arbitration notices in Mumbai or Delhi, counsel challenges the arbitrator's jurisdiction under Sections 12 and 14 of the Arbitration and Conciliation Act, 1996, relying on Supreme Court precedents (Perkins Eastman and TRF Ltd.) to prevent biased ex-parte awards and steer the matter toward institutional OTS conciliation."
          }
        },
        {
          "@type": "Question",
          "name": "Does defaulting on an Avanse loan in India impact credit scores or employment in the US, UK, or Canada?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Credit information systems are jurisdictionally isolated. An Indian loan default is reported strictly to domestic credit bureaus (CIBIL, Experian India, Equifax India, CRIF High Mark). It does not automatically reflect on US credit reports (Equifax, Experian, TransUnion), UK credit files, or Canadian bureaus because there is no cross-border treaty or automated social security number linking between international credit rating agencies. However, it severely impairs the CIBIL scores of domestic co-borrower parents until resolved via an official OTS."
          }
        },
        {
          "@type": "Question",
          "name": "How are secured Avanse education loans resolved and property title deeds released?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For secured loans, Avanse may issue a 60-day demand notice under Section 13(2) of the SARFAESI Act, 2002. Borrowers protect their collateral by submitting a statutory representation under Section 13(3A) highlighting procedural discrepancies and presenting a formal OTS proposal before symbolic possession under Section 13(4) can occur. Upon full payment of the agreed settlement sum, Avanse is legally mandated under RBI Circular RBI/2023-24/60 to return all original title deeds and issue a No Dues Certificate within 30 days."
          }
        },
        {
          "@type": "Question",
          "name": "Who within Avanse Financial Services has the legal authority to approve a loan settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Third-party collection agents, tele-callers, and regional branch executives have zero legal authority to sanction debt waivers. Authentic OTS approvals must be formally reviewed and authorized by Avanse Financial Services Limited's Zonal Stressed Assets Desk, Head of Credit, or Chief Risk Officer division, documented through an official stamped OTS Sanction Letter on corporate letterhead."
          }
        },
        {
          "@type": "Question",
          "name": "How long does Avanse take to issue the No Dues Certificate (NDC) after settlement payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, Avanse Financial Services is statutorily required to issue a formal No Dues Certificate (NDC) and update credit bureau records within 30 calendar days of receiving full settlement remittance. If Avanse fails to release the NDC or return collateral documents within this 30-day window without lawful justification, it is liable to pay statutory compensation of ₹5,000 per day of delay directly to the borrower."
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

export default function AvanseEducationLoanSettlementPage() {
  const tocItems = [
    { id: 'understanding-avanse-education-defaults', title: '1. NBFC Education Lending Dynamics & Default Mechanics' },
    { id: 'co-borrower-parent-shield-civil-rights', title: '2. Shielding Co-Borrower Parents & Statutory Civil Rights' },
    { id: 'delinquency-timeline-npa-stages', title: '3. Delinquency Timeline & Balance Sheet Provisioning' },
    { id: 'avanse-ots-haircut-valuation-npv', title: '4. OTS Haircut Policies & Financial Valuation Formula' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Resolution Blueprint' },
    { id: 'legal-notices-section-25-arbitration-sarfaesi', title: '6. Section 25 PSSA, Arbitration & SARFAESI Legal Defense' },
    { id: 'step-by-step-avanse-settlement-process', title: '7. Step-by-Step NBFC Settlement Roadmap' },
    { id: 'sanction-letter-audit-zero-balance-ndc', title: '8. Sanction Letter Forensics & ₹0 NDC Enforcement' },
    { id: 'cibil-credit-repair-overseas-impact', title: '9. CIBIL Trajectory & Overseas Credit Implications' },
    { id: 'company-resolution-section', title: '10. SettleLoans Legal Defense & Advisory' },
    { id: 'faqs', title: '11. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      question: "What is the Avanse education loan settlement process and how does an NBFC compromise work?",
      answer: "The Avanse education loan settlement process is a structured debt resolution framework sanctioned under Reserve Bank of India Master Directions on Compromise Settlements. When an unsecured or secured education loan crosses 90 days of non-payment and transitions into Non-Performing Asset (NPA) status, the borrower or their legal counsel submits a formal hardship petition to Avanse Financial Services Limited's Stressed Assets Committee. Upon evaluating the financial distress (such as overseas job loss, visa curtailment, or family medical insolvency) against the Net Present Value (NPV) of prolonged litigation, Avanse issues a stamped One-Time Settlement (OTS) Sanction Letter. Paying the agreed discounted amount directly into the loan account extinguishes all outstanding liabilities and entitles the borrower and co-borrowers to a formal No Dues Certificate (NDC)."
    },
    {
      question: "How are co-borrower parents shielded when a student defaults on an Avanse loan after studying abroad?",
      answer: "In India, parents are typically added as co-borrowers, creating joint and several liability under Section 128 of the Indian Contract Act, 1872. However, statutory law provides robust protections against coercive recovery: (1) Section 60 of the Code of Civil Procedure (CPC) strictly protects pensions, provident funds (PF), gratuities, and basic salary from civil attachment; (2) RBI Master Directions on Recovery Agents prohibit calling before 8:00 AM or after 7:00 PM, visiting parent workplaces, intimidating senior citizens, or contacting non-guarantor relatives; (3) Serving a formal legal cease-and-desist notice halts collection harassment and mandates that all communication be conducted in writing with designated legal counsel."
    },
    {
      question: "How does compound interest during the study moratorium affect Avanse loan settlements?",
      answer: "During the study moratorium and post-course grace period (typically 24 to 36 months), simple interest accrues continuously and is capitalized into the principal balance once regular EMI repayment starts. This aggressive capitalization can inflate an initial ₹40 Lakh loan to ₹60 Lakh or more. During formal OTS negotiations, seasoned banking advocates audit the historical ledger, demand the complete de-capitalization of moratorium compound interest, waive 100% of accumulated bounce charges and penal interest, and negotiate the settlement percentage based on the net disbursed principal amount."
    },
    {
      question: "What percentage of debt waiver or haircut can you realistically negotiate with Avanse Financial Services?",
      answer: "On unsecured education loans (where no property or liquid asset is pledged), Avanse typically approves debt waivers between 40% and 60% of total ledger dues, provided the loan has entered NPA status (90+ DPD) or Doubtful Asset classification. For secured education loans backed by real estate collateral, debt waivers generally range between 20% and 35%, because the lender's recovery floor is anchored to the distress sale valuation of the underlying property under the SARFAESI Act."
    },
    {
      question: "Can Avanse Financial Services file a criminal case or have the borrower arrested for student loan default?",
      answer: "No. Defaulting on an education loan due to involuntary unemployment, visa expiration, or commercial hardship is strictly a civil breach of contract under the Indian Contract Act, 1872. Police authorities have no jurisdiction to register an FIR or make an arrest for bona fide financial inability. While Avanse may issue legal notices under Section 25 of the Payment and Settlement Systems Act (PSSA) for bounced NACH mandates, these are compoundable quasi-criminal proceedings handled in Magistrate Courts that are routinely resolved through advocate representation and compromise settlements."
    },
    {
      question: "How should borrowers handle Section 25 PSSA notices and arbitration notices sent by Avanse?",
      answer: "Borrowers receiving a Section 25 PSSA statutory notice must submit a detailed legal reply through counsel within the 15-day window, evidencing bona fide financial incapacity, revoking automated debit presentations, and asserting the absence of fraudulent intent. When Avanse issues unilateral arbitration notices in Mumbai or Delhi, counsel challenges the arbitrator's jurisdiction under Sections 12 and 14 of the Arbitration and Conciliation Act, 1996, relying on Supreme Court precedents (Perkins Eastman and TRF Ltd.) to prevent biased ex-parte awards and steer the matter toward institutional OTS conciliation."
    },
    {
      question: "Does defaulting on an Avanse loan in India impact credit scores or employment in the US, UK, or Canada?",
      answer: "No. Credit information systems are jurisdictionally isolated. An Indian loan default is reported strictly to domestic credit bureaus (CIBIL, Experian India, Equifax India, CRIF High Mark). It does not automatically reflect on US credit reports (Equifax, Experian, TransUnion), UK credit files, or Canadian bureaus because there is no cross-border treaty or automated social security number linking between international credit rating agencies. However, it severely impairs the CIBIL scores of domestic co-borrower parents until resolved via an official OTS."
    },
    {
      question: "How are secured Avanse education loans resolved and property title deeds released?",
      answer: "For secured loans, Avanse may issue a 60-day demand notice under Section 13(2) of the SARFAESI Act, 2002. Borrowers protect their collateral by submitting a statutory representation under Section 13(3A) highlighting procedural discrepancies and presenting a formal OTS proposal before symbolic possession under Section 13(4) can occur. Upon full payment of the agreed settlement sum, Avanse is legally mandated under RBI Circular RBI/2023-24/60 to return all original title deeds and issue a No Dues Certificate within 30 days."
    },
    {
      question: "Who within Avanse Financial Services has the legal authority to approve a loan settlement?",
      answer: "Third-party collection agents, tele-callers, and regional branch executives have zero legal authority to sanction debt waivers. Authentic OTS approvals must be formally reviewed and authorized by Avanse Financial Services Limited's Zonal Stressed Assets Desk, Head of Credit, or Chief Risk Officer division, documented through an official stamped OTS Sanction Letter on corporate letterhead."
    },
    {
      question: "How long does Avanse take to issue the No Dues Certificate (NDC) after settlement payment?",
      answer: "Under RBI Circular RBI/2023-24/60, Avanse Financial Services is statutorily required to issue a formal No Dues Certificate (NDC) and update credit bureau records within 30 calendar days of receiving full settlement remittance. If Avanse fails to release the NDC or return collateral documents within this 30-day window without lawful justification, it is liable to pay statutory compensation of ₹5,000 per day of delay directly to the borrower."
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
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Higher Education NBFC Dispute Resolution • Avanse Financial Services</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Avanse Education Loan Settlement: <span className="text-[#3b82f6] md:text-[#60a5fa]">OTS Process, Co-Borrower Protection &amp; Haircut (2026)</span>
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
              <span>RBI Compromise Settlement Framework Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Negotiate Avanse Loan Settlement</span>
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
                <span>Avanse Settlement Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Avanse loans in default past 90 days become NPAs under Ind AS 109. Direct legal escalation to the Stressed Assets Committee reverses capitalized interest and secures 40%–60% principal haircuts while shielding parent co-borrowers.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">

            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 border border-blue-200 rounded-2xl p-6 mb-8 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-base mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Avanse Education Loan Settlement</span>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Compromise Rights:</strong> Education loan default from overseas layoffs or market distress is strictly a civil contract breach under the Indian Contract Act, 1872, qualifying for RBI-mandated OTS compromise.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Co-Borrower Parent Shield:</strong> Section 60 CPC grants absolute immunity to parental pensions, provident funds, and basic livelihood assets against civil attachment, while RBI directives prohibit workplace harassment.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>De-Capitalizing Moratorium Interest:</strong> Structured legal negotiation eliminates compounding interest accrued during study periods, calculating debt waivers strictly on the net disbursed principal.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Realistic 40%–60% Haircut:</strong> Unsecured Avanse loans in NPA status (90+ DPD) qualify for 40% to 60% debt waivers under Expected Credit Loss (ECL) provisioning rules.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory ₹0 NDC Delivery:</strong> Under RBI Circular RBI/2023-24/60, Avanse must issue a No Dues Certificate and return pledged title deeds within 30 days of settlement payment.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: NBFC Education Lending Dynamics & Default Mechanics */}
            <section id="understanding-avanse-education-defaults" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. Specialized NBFC Architecture &amp; Default Mechanics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Understanding Avanse Financial Services: Credit Underwriting, Moratorium Compounding &amp; Systemic Default Triggers
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Avanse Financial Services Limited is an RBI-regulated, systemically important non-banking financial company (NBFC) specializing in higher education financing. Disbursing thousands of crores across domestic and overseas degree programs—spanning the US, UK, Canada, Australia, and Europe—Avanse structures loans into high-ticket unsecured student credit (₹25 Lakhs to ₹75 Lakhs) and collateral-backed secured facilities. Unlike retail consumer credit, education loans feature a study moratorium covering the course duration plus a 6 to 12-month post-graduation grace period.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                During this moratorium, simple interest accrues continuously and is capitalized directly into the principal once regular repayment starts. This compounding mechanism dramatically inflates ledger balances: an initial ₹40 Lakh disbursement frequently balloons into ₹58 Lakh to ₹68 Lakh in total dues. When foreign tech layoffs, H-1B visa lottery restrictions, STEM OPT expirations, or UK Graduate Route curtailments eliminate post-study income, servicing monthly EMIs of ₹65,000 to ₹1,40,000 becomes impossible.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Subsequent default triggers automated NACH bounce fees and penal interest at 24% to 36% per annum. However, default stemming from involuntary unemployment or macroeconomic downturn is strictly a civil breach of contract under the Indian Contract Act, 1872. Under Reserve Bank of India (RBI) compromise frameworks, distressed borrowers maintain unambiguous statutory rights to halt collection pressure, de-capitalize predatory interest, and negotiate a binding One-Time Settlement (OTS).
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong>Statutory Principle:</strong> Under RBI Master Directions on Compromise Settlements, regulated NBFCs must maintain transparent, board-approved OTS policies. Involuntary default due to global hiring slowdowns or visa expirations does not constitute wilful default and qualifies for institutional debt compromise.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Shielding Co-Borrower Parents & Statutory Civil Rights */}
            <section id="co-borrower-parent-shield-civil-rights" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4" />
                <span>2. Co-Borrower Parent Defense &amp; Statutory Immunity</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Shielding Co-Borrower Parents: Joint Liability Realities, Pension Protections &amp; Anti-Harassment Law
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                In nearly all Avanse education loans, parents are mandated as primary co-borrowers rather than secondary guarantors. Under Section 128 of the Indian Contract Act, 1872, co-borrower liability is co-extensive with the principal debtor. When overseas graduates experience career dislocation, recovery agencies routinely exploit this domestic co-obligation by targeting elderly parents in India with coercive calls and home visits.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                However, Indian civil law grants sweeping statutory protections to parent co-borrowers. Foremost among these is Section 60(1) of the Code of Civil Procedure, 1908 (CPC), which explicitly exempts vital livelihood and retirement assets from civil attachment:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Pension &amp; Gratuity Immunity
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 60(1)(g) CPC and the Pensions Act, 1871, all civil, defense, and government pensions and gratuities are 100% exempt from attachment by any court or lender.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Provident Fund Protection
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 60(1)(k) CPC and the EPF Act, 1952, statutory provident funds and family life insurance policies cannot be seized for unsecured loan recovery.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Salary Attachment Caps
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 60(1)(i) CPC, the first ₹1,000 plus two-thirds of remaining salary is completely exempt from attachment to safeguard essential family living costs.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Household &amp; Tool Exemptions
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Personal apparel, cooking utensils, tools of trade, and residential tenancy rights are legally shielded from confiscation for unsecured debt.
                  </p>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Additionally, RBI Master Directions prohibit recovery calls outside 08:00 AM to 07:00 PM, workplace intrusion, or contacting non-guarantor relatives. Serving a formal Cease-and-Desist Notice to Avanse&apos;s Principal Nodal Officer enforces these statutory immunities, halts harassment, and reroutes all dialogue to legal counsel.
              </p>
            </section>

            {/* Section 3: Delinquency Timeline & Balance Sheet Provisioning */}
            <section id="delinquency-timeline-npa-stages" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>3. Delinquency Timeline &amp; NPA Accounting</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Avanse Loan Delinquency Lifecycle: Days Past Due (DPD), NPA Stages &amp; Balance Sheet Provisioning Drag
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under Indian Accounting Standards (Ind AS 109) and RBI prudential regulations, loan defaults progress through strictly defined stages that govern Avanse&apos;s provisioning obligations:
              </p>

              <div className="space-y-3 my-6">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                    SMA-0 (1–30 DPD): Initial Dishonour
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Automated reminders and initial bounce penalties. Loan remains standard; no settlement discounts are offered.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    SMA-1 (31–60 DPD): Escalated Collections
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Internal collections teams initiate outreach to co-borrower parents in India, demanding income verification.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                    SMA-2 (61–90 DPD): Pre-NPA Warning
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Recovery agencies are assigned, field visits begin, and statutory Section 25 PSSA demand notices are issued.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
                    NPA (90+ DPD): Non-Performing Asset
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Interest accrual freezes and Avanse sets aside a 15% provisioning buffer from profits under Expected Credit Loss (ECL) norms.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-700"></span>
                    Doubtful / Loss Asset (180–365+ DPD)
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Provisioning escalates to 100% on unsecured portions. Stressed Assets Committees hold peak authority to sanction 40%–60% debt haircuts.
                  </p>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Because locked NPA reserves create severe balance sheet drag, presenting an evidence-backed hardship petition once the account reaches NPA status allows legal counsel to negotiate maximum principal waivers.
              </p>
            </section>

            {/* Section 4: OTS Haircut Policies & Financial Valuation Formula */}
            <section id="avanse-ots-haircut-valuation-npv" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Percent className="w-4 h-4" />
                <span>4. OTS Haircut Policies &amp; Financial Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Avanse OTS Haircut Policy: Net Present Value (NPV) Recovery Valuation &amp; Realistic Settlement Bands
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                One-Time Settlements with Avanse are governed by financial optimization modeling. Under RBI Master Directions, Credit Committees evaluate compromise offers against the Net Present Value (NPV) of recovery through protracted litigation versus immediate capital release.
              </p>

              {/* NPV Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Avanse Stressed Asset Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Drag
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated recoveries across t years, r is Avanse&apos;s cost of capital, and deductions account for advocacy retainers and locked regulatory reserves.
                </p>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Negotiation success relies on forensic de-capitalization: demanding full cancellation of bounce fees and penal charges, reversing moratorium compound interest, and anchoring settlement discounts strictly to the core disbursed principal.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Facility Type</th>
                      <th>Delinquency Stage</th>
                      <th>Penal &amp; Bounce Waiver</th>
                      <th>Principal Haircut Range</th>
                      <th>Optimal Settlement Strategy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Avanse Unsecured Overseas Student Loan</td>
                      <td>90 – 180 Days (NPA Stage 1)</td>
                      <td>100% Full Waiver</td>
                      <td>30% – 45% Principal Waiver</td>
                      <td>Offer 45%–55% of Net Disbursed Principal</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Avanse Unsecured Overseas Student Loan</td>
                      <td>180+ Days (Doubtful / Loss Asset)</td>
                      <td>100% Full Waiver</td>
                      <td>45% – 60% Principal Waiver</td>
                      <td>Offer 30%–40% of Total Book Dues</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Avanse Domestic Education Loan</td>
                      <td>90 – 180 Days (NPA)</td>
                      <td>100% Full Waiver</td>
                      <td>35% – 50% Principal Waiver</td>
                      <td>Demonstrate Domestic Entry-Level Salary Gap</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Avanse Secured Loan (Property Collateral)</td>
                      <td>180+ Days (SARFAESI Active)</td>
                      <td>100% Penal Waiver</td>
                      <td>20% – 35% Principal Waiver</td>
                      <td>Anchor Offer Above Property Distress Sale Net</td>
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
                        Institutional Debt Resolution Roadmap
                      </span>
                      <h3 className="text-sm md:text-base font-black text-white leading-tight">
                        Avanse Education Loan Settlement &amp; Legal Defense Blueprint
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/avanse-education-loan-settlement-process.jpg"
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
                      src="/images/infographics/avanse-education-loan-settlement-process.jpg"
                      alt="Avanse Education Loan Settlement Process and OTS Haircut Guide"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Strategy:</strong> Shield co-borrower parents via Section 60 CPC, de-capitalize moratorium compound interest, and negotiate directly with Avanse Stressed Assets Committees for 40%–60% debt haircuts.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6: Legal Notices, Section 25 PSSA, Arbitration & SARFAESI Defense */}
            <section id="legal-notices-section-25-arbitration-sarfaesi" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>6. Legal Notice Defense &amp; Statutory Counter-Measures</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Defending Legal Action: Section 25 PSSA Notices, Unilateral Arbitration &amp; SARFAESI Property Challenges
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Upon extended delinquency, Avanse issues statutory notices. Understanding their legal structure allows borrowers to mount a formidable legal defense:
              </p>

              <div className="space-y-4 my-6">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-xs flex items-center justify-center border border-blue-200">A</span>
                    Section 25 PSSA Demand Notices (NACH Bounces)
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    A 15-day statutory demand notice for bounced electronic mandates. Retained counsel serves a detailed legal reply establishing bona fide financial distress, lack of criminal mens rea, and disputes duplicate presentations while opening formal OTS channels.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-xs flex items-center justify-center border border-blue-200">B</span>
                    Unilateral Sole Arbitration Defense
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Under Supreme Court precedents (<em>Perkins Eastman</em> and <em>TRF Ltd.</em>), unilateral arbitrator appointments by lenders are void ab initio. Counsel files statutory Section 12(5) objections, terminating the arbitrator&apos;s mandate and steering the dispute to OTS conciliation.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-xs flex items-center justify-center border border-blue-200">C</span>
                    SARFAESI Act Property Defense (Secured Loans)
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Upon receiving a Section 13(2) demand notice, counsel submits a Section 13(3A) objection contesting interest capitalization and offering structured settlement terms, pausing coercive auction steps while OTS approval is finalized.
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Notice Classification</th>
                      <th>Governing Statutory Act</th>
                      <th>Mandatory Response Window</th>
                      <th>Borrower Risk Level</th>
                      <th>Strategic Counter-Defense</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">NACH Mandate Dishonour</td>
                      <td>Section 25 PSSA, 2007</td>
                      <td>15 Calendar Days</td>
                      <td>Moderate (Quasi-Criminal)</td>
                      <td>Serve formal hardship reply; dispute duplicate presentations</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Sole Arbitrator Appointment</td>
                      <td>Arbitration &amp; Conciliation Act, 1996</td>
                      <td>30 Calendar Days</td>
                      <td>High (Ex-Parte Award Risk)</td>
                      <td>Invoke Perkins Eastman precedent; disqualify arbitrator under Sec 12(5)</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Collateral Demand Notice</td>
                      <td>Section 13(2) SARFAESI Act, 2002</td>
                      <td>60 Calendar Days</td>
                      <td>Critical (Property Auction Risk)</td>
                      <td>Submit Section 13(3A) objection &amp; formal OTS restructuring proposal</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Pre-Litigation Lok Adalat</td>
                      <td>Legal Services Authorities Act, 1987</td>
                      <td>Fixed Session Date</td>
                      <td>Low (Consensual Forum)</td>
                      <td>Appear with counsel; secure binding non-appealable decree at deep discount</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7: Step-by-Step NBFC Settlement Roadmap */}
            <section id="step-by-step-avanse-settlement-process" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>7. Step-by-Step NBFC Settlement Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Step-by-Step Guide: How to Negotiate an Institutional One-Time Settlement with Avanse Financial Services
              </h2>

              <div className="space-y-4 my-6">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-xs flex items-center justify-center border border-blue-200">1</span>
                    Ledger Forensic Audit &amp; De-Capitalization
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Retrieve the full loan account statement. Separate disbursed principal from capitalized moratorium interest and penal charges to set an objective baseline.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-xs flex items-center justify-center border border-blue-200">2</span>
                    Mandate Revocation &amp; Parent Insulation
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Instruct your bank to suspend NACH debits under NPCI rules. Serve a formal cease-and-desist notice to Avanse to redirect collection dialogue exclusively to counsel.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-xs flex items-center justify-center border border-blue-200">3</span>
                    Hardship Dossier Compilation
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Assemble termination letters, visa records, medical proofs, and liquid bank statements into a structured OTS petition addressed to Avanse&apos;s Stressed Assets Committee.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-xs flex items-center justify-center border border-blue-200">4</span>
                    Bilateral Credit Committee Negotiations
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Legal advocates negotiate counter-offers with the Credit Committee, demonstrating third-party family funding to achieve the target 40% to 60% principal waiver band.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-xs flex items-center justify-center border border-blue-200">5</span>
                    OTS Sanction Letter Forensic Verification
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Verify that Avanse issues a stamped sanction letter on corporate letterhead confirming full balance waiver and unconditional withdrawal of all legal actions.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-xs flex items-center justify-center border border-blue-200">6</span>
                    Direct Account Remittance &amp; ₹0 NDC Delivery
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Remit funds directly to the designated Avanse loan account. Enforce delivery of the No Dues Certificate and return of property deeds within the 30-day statutory window.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Sanction Letter Forensics & ₹0 NDC Enforcement */}
            <section id="sanction-letter-audit-zero-balance-ndc" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>8. Sanction Letter Forensics &amp; NDC Mandate</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                OTS Sanction Letter Forensic Checklist &amp; Enforcing RBI 30-Day ₹0 No Dues Certificate Delivery
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                To prevent fraud and unauthorized commitments by external recovery agencies, every Avanse OTS Sanction Letter must be audited against four essential legal standards:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    Corporate Letterhead &amp; CIN
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Must be on official Avanse Financial Services Limited letterhead with CIN and registered Mumbai office details.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    Authorized Signatory &amp; POA
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Signed and stamped by an authorized Avanse Credit Committee officer holding Power of Attorney.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    Full Balance Waiver Clause
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Must state that upon receiving the settlement amount, all remaining balance, interest, and penalties are extinguished.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    Legal Proceedings Withdrawal
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Contains an express undertaking to unconditionally withdraw all Section 25 PSSA, arbitration, and court proceedings.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50/80 border-l-4 border-blue-600 p-5 rounded-r-xl my-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-blue-950 leading-relaxed">
                    <strong>RBI Statutory Mandate (RBI/2023-24/60):</strong> Avanse is mandated to release original property documents and issue a formal No Dues Certificate within <strong>30 calendar days</strong> of full settlement payment. Failure to comply incurs a statutory penalty of <strong>₹5,000 per day of delay</strong> payable directly to the borrower.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: CIBIL Trajectory & Overseas Credit Implications */}
            <section id="cibil-credit-repair-overseas-impact" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>9. CIBIL Trajectory &amp; Overseas Credit Implications</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                CIBIL Score Trajectory, Overseas Credit Isolation &amp; Post-Settlement Credit Rehabilitation
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Indian credit reporting operates in complete jurisdictional isolation from foreign bureaus. Under CICRA 2005, Indian defaults reported to CIBIL or Experian India do not transfer to US credit files (Equifax, Experian US, TransUnion), UK credit scores, or Canadian bureaus due to separate legal frameworks and lack of SSN linkage. Education loan default is strictly a civil dispute with zero impact on student visas, OPT, or H-1B immigration status.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Domestically, settlement updates the CIBIL status to &apos;Settled&apos; with a ₹0 balance, ending compounding delinquency marks. While causing an initial temporary dip, disciplined credit habits—such as secured credit cards and sub-25% utilization—allow borrowers and parent co-borrowers to rebuild CIBIL scores back to 750+ within 18 to 24 months.
              </p>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory & CompanySection */}
            <section id="company-resolution-section" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Award className="w-4 h-4" />
                <span>10. SettleLoans Legal Defense &amp; Institutional Advisory</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Institutional Debt Defense: How SettleLoans Resolves Avanse Education Loan Distress
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                SettleLoans represents student borrowers abroad and their co-borrower parents in India before Avanse Financial Services. Our senior banking advocates enforce anti-harassment laws, defend statutory notices, and negotiate maximum debt waivers under RBI frameworks.
              </p>

              <CompanySection />
            </section>

            {/* Section 11: Comprehensive FAQ Section */}
            <section id="faqs" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>11. Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                Frequently Asked Questions: Avanse Education Loan Settlement &amp; Legal Defense
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-white border border-slate-200 rounded-2xl p-5 transition-all duration-200 hover:border-blue-300 shadow-sm open:border-blue-400"
                  >
                    <summary className="font-bold text-slate-900 text-base cursor-pointer list-none flex items-center justify-between gap-4">
                      <span>{faq.question}</span>
                      <ChevronDown className="w-5 h-5 text-blue-600 transition-transform duration-200 group-open:rotate-180 flex-shrink-0" />
                    </summary>
                    <div className="pt-3 text-slate-700 text-sm md:text-base leading-relaxed border-t border-slate-100 mt-3">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* 5 Official Regulatory Links */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-[#1F5EFF]" />
                Official Statutory &amp; Regulatory References
              </h3>
              <ul className="space-y-3 text-xs md:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Reserve Bank of India (RBI):</strong> Master Direction – Compromise Settlements and Technical Write-offs Framework (RBI/2023-24/40)
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
                    <strong>RBI Master Circular:</strong> Responsible Lending Conduct – Release of Movable/Immovable Property Documents on Repayment of Loans (RBI/2023-24/60)
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.avanse.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Avanse Financial Services Limited:</strong> Fair Practices Code, Grievance Redressal Policy &amp; Principal Nodal Officer Matrix
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
                    <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Online Portal for Complaints on Recovery Harassment, Illegal Mandate Sweeps &amp; Document Delays
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
                  href="/hdfc-credila-education-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  HDFC Credila Education Loan Settlement
                </Link>
                <Link
                  href="/abroad-education-loan-default-settlement-process"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Abroad Education Loan Default Settlement
                </Link>
                <Link
                  href="/education-loan-settlement-india"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Education Loan Settlement India Guide
                </Link>
                <Link
                  href="/parents-legal-liability-as-co-signers-when-child-defaults-on-education-loan"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Parent Co-Signer Liability Defense
                </Link>
                <Link
                  href="/nbfc-education-loan-default-legal-action-by-hdfc-credila-avanse-incred"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  NBFC Education Loan Legal Defense
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Bank One-Time Settlement (OTS) Policy
                </Link>
                <Link
                  href="/personal-loan-settlement-percentage"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Loan Settlement Percentage Guide
                </Link>
                <Link
                  href="/section-25-pssa-notice-loan-default"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Section 25 PSSA Notice Defense
                </Link>
                <Link
                  href="/bank-arbitration-notice-reply"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Arbitration Notice Reply Format
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
                <Link href="/authors/ashish-jhangra" className="block flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black text-base flex items-center justify-center shadow-md hover:ring-2 hover:ring-blue-400 transition-all">
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
                    Lead Banking Legal &amp; Higher Education Debt Strategist
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Ashish has spearheaded over 1,400+ successful debt compromise negotiations across Avanse Financial Services, HDFC Credila, InCred, Tata Capital, and nationalized banks. He specializes in cross-border education loan disputes, parent co-borrower civil protection under Section 60 CPC, and institutional OTS sanctioning under RBI Master Directions.
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
                <span>Avanse Dispute Resolution Desk</span>
              </div>
              <h3 className="text-xl font-black mb-3 leading-tight">
                Facing Avanse Loan Default or Parent Harassment?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Protect your elderly parents in India, halt abusive collection visits, and de-capitalize ballooning moratorium compound interest. Consult our experienced banking advocates to structure your hardship dossier and secure an authorized 40% to 60% One-Time Settlement with Avanse Financial Services.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white hover:bg-slate-100 text-[#1F5EFF] font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 shadow"
              >
                Talk to an Education Loan Advocate
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
                    <strong>Direct Stressed Assets Representation:</strong> We bypass third-party recovery call centres to represent your hardship directly before Avanse&apos;s Zonal Stressed Assets &amp; Credit Committees.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Statutory Parent Protection:</strong> Prompt issuance of formal cease-and-desist notices citing Section 60 CPC and RBI recovery directives to shield family members from coercion.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Stamped Sanction Verification:</strong> Every settlement is strictly verified on official corporate letterhead with full balance waiver covenants before any payment is made.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed ₹0 NDC &amp; Deed Recovery:</strong> End-to-end legal tracking until your No Dues Certificate is issued, pledged property title deeds are returned, and credit bureau records are updated.
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
