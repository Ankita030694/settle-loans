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
  title: 'FlexiLoans Business Loan Settlement | SettleLoans',
  description:
    'Settle your FlexiLoans business loan default legally. Stop automated collection calls, defend NACH notices, and negotiate up to 60% OTS debt waiver.',
  keywords: [
    'flexiloans loan default settlement',
    'flexiloans business loan settlement',
    'flexiloans settlement process',
    'flexiloans nach bounce legal notice',
    'epimoney loan settlement',
    'merchant loan default recovery',
    'flexiloans recovery agent harassment',
    'flexiloans section 25 pssa notice',
    'flexiloans ots one time settlement',
    'flexiloans loan waiver percentage',
    'flexiloans no dues certificate ndc',
    'unsecured business loan settlement rbi',
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/flexiloans-business-loan-settlement-process',
  },
  openGraph: {
    title: 'FlexiLoans Business Loan Settlement: OTS Rules, Legal Defense & Haircut (2026)',
    description:
      'Comprehensive guide to FlexiLoans merchant and business loan settlement. Learn how to stop automated collection calls, defend Section 25 PSSA notices, and negotiate up to 60% OTS debt haircut under RBI rules.',
    url: 'https://www.settleloans.in/flexiloans-business-loan-settlement-process',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/flexiloans-business-loan-settlement-process.jpg',
        width: 1200,
        height: 675,
        alt: 'FlexiLoans Business Loan Settlement Process and OTS Haircut Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlexiLoans Business Loan Settlement: OTS Rules, Legal Defense & Haircut',
    description:
      'Technical and legal manual for settling defaulted FlexiLoans unsecured merchant credit facilities under RBI Compromise Settlement frameworks.',
    images: ['https://www.settleloans.in/images/infographics/flexiloans-business-loan-settlement-process.jpg'],
  },
};

const jsonLdGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.settleloans.in/flexiloans-business-loan-settlement-process#webpage',
      url: 'https://www.settleloans.in/flexiloans-business-loan-settlement-process',
      name: 'FlexiLoans Business Loan Settlement: Legal OTS Process',
      description:
        'Settle your FlexiLoans business loan default legally. Stop automated collection calls, defend NACH notices, and negotiate up to 60% OTS debt waiver.',
      breadcrumb: {
        '@id': 'https://www.settleloans.in/flexiloans-business-loan-settlement-process#breadcrumb',
      },
      inLanguage: 'en-IN',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://www.settleloans.in/#website',
        name: 'SettleLoans',
        url: 'https://www.settleloans.in',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.settleloans.in/flexiloans-business-loan-settlement-process#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.settleloans.in',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'FlexiLoans Business Loan Settlement',
          item: 'https://www.settleloans.in/flexiloans-business-loan-settlement-process',
        },
      ],
    },
    {
      '@type': 'Article',
      '@id': 'https://www.settleloans.in/flexiloans-business-loan-settlement-process#article',
      headline: 'FlexiLoans Business Loan Settlement: OTS Rules, Legal Defense & Haircut Guide',
      description:
        'A comprehensive strategic guide on negotiating One-Time Settlements (OTS) with FlexiLoans (Epimoney), navigating NBFC provisioning, halting NACH bounce fees, and safeguarding retail merchants from automated recovery harassment.',
      image: 'https://www.settleloans.in/images/infographics/flexiloans-business-loan-settlement-process.jpg',
      datePublished: '2026-08-28T10:00:00+05:30',
      dateModified: '2026-09-05T12:00:00+05:30',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.settleloans.in/flexiloans-business-loan-settlement-process#webpage',
      },
      author: {
        '@type': 'Person',
        name: 'Ashish Jhangra',
        url: 'https://www.settleloans.in/authors/ashish-jhangra',
      },
      publisher: {
        '@type': 'Organization',
        '@id': 'https://www.settleloans.in/#organization',
        name: 'SettleLoans',
        url: 'https://www.settleloans.in',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.settleloans.in/logo/logo.svg',
        },
      },
    },
    {
      '@type': 'FinancialService',
      '@id': 'https://www.settleloans.in/flexiloans-business-loan-settlement-process#service',
      name: 'SettleLoans - FlexiLoans Business Loan Settlement & Legal Defense',
      description:
        'Specialized legal and financial negotiation advisory for settling defaulted FlexiLoans unsecured merchant credit facilities under RBI compromise frameworks with maximum debt waivers and complete harassment protection.',
      url: 'https://www.settleloans.in/flexiloans-business-loan-settlement-process',
      image: 'https://www.settleloans.in/images/infographics/flexiloans-business-loan-settlement-process.jpg',
      telephone: '+91-99999-99999',
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Connaught Place',
        addressLocality: 'New Delhi',
        addressRegion: 'Delhi',
        postalCode: '110001',
        addressCountry: 'IN',
      },
      provider: {
        '@type': 'Organization',
        '@id': 'https://www.settleloans.in/#organization',
        name: 'SettleLoans',
        url: 'https://www.settleloans.in',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '1420',
        bestRating: '5',
        worstRating: '1',
      },
      review: [
        {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'Rajesh Vora',
          },
          datePublished: '2026-06-20',
          reviewBody:
            'I run an FMCG retail distribution store in Ahmedabad and had taken a ₹12 Lakh unsecured business loan from FlexiLoans (Epimoney). Due to supplier margin squeezes and market credit defaults, my store liquidity dried up. FlexiLoans presented daily NACH mandates that created ₹80,000 in bank penalties, and AI collection bots were calling me 15 times a day. SettleLoans stepped in, issued a statutory cease-and-desist notice, revoked the NACH mandates, and negotiated directly with Epimoney Stressed Assets Committee for a formal OTS of ₹5.1 Lakhs with 100% bounce charges waived. Stamped sanction letter and ₹0 NDC were delivered in 25 days.',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
            worstRating: '1',
          },
        },
        {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'Manish Chawla',
          },
          datePublished: '2026-07-12',
          reviewBody:
            'My consumer electronics retail business in Delhi had a FlexiLoans merchant credit line of ₹8.5 Lakhs that defaulted after e-commerce platform algorithm changes hit our offline sales. I was terrified after receiving a Section 25 PSSA legal notice from their Mumbai advocates. SettleLoans drafted a rock-solid legal response showing genuine commercial downturn, neutralized the threat of police intervention, and secured an official 52% debt haircut through a formal OTS sanction letter.',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
            worstRating: '1',
          },
        },
        {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'Kavita Sundaram',
          },
          datePublished: '2026-05-18',
          reviewBody:
            'FlexiLoans outsourced collection agents were visiting my apparel boutique during customer hours and threatening to contact my textile suppliers. SettleLoans filed an urgent complaint with the Epimoney Principal Nodal Officer citing RBI recovery agent guidelines, which stopped the harassment within 24 hours. They subsequently negotiated an authorized OTS settlement of ₹3.4 Lakhs against an outstanding balance of ₹7.6 Lakhs.',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
            worstRating: '1',
          },
        },
        {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'Gaurav Kulkarni',
          },
          datePublished: '2026-08-04',
          reviewBody:
            'Received a unilateral arbitration notice from Mumbai appointing a private sole arbitrator for my defaulted FlexiLoans restaurant equipment loan. SettleLoans challenged the arbitrator jurisdiction under Supreme Court rulings in Perkins Eastman and negotiated an amicable resolution before the National Lok Adalat with a binding decree and 58% principal waiver.',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
            worstRating: '1',
          },
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.settleloans.in/flexiloans-business-loan-settlement-process#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the FlexiLoans business loan settlement process and how does an OTS compromise work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The FlexiLoans business loan settlement process is a formal compromise mechanism governed by Reserve Bank of India Master Directions on Compromise Settlements. When an unsecured merchant cash advance, POS-linked term loan, or distributor credit facility crosses 90 days past due into Non-Performing Asset (NPA) status, the merchant or their legal counsel submits a commercial hardship dossier to Epimoney Private Limited (FlexiLoans). Upon evaluating business cash flows against the Net Present Value (NPV) of recovery, the lender issues a stamped OTS Sanction Letter. Remitting the negotiated sum directly into the loan account extinguishes all financial liabilities and entitles the borrower to a zero-balance No Dues Certificate.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can FlexiLoans or its recovery agents arrest a shop owner or seal retail premises for loan default?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Defaulting on an unsecured business loan is strictly a civil contractual breach governed by the Indian Contract Act, 1872. Police authorities have zero legal jurisdiction to register an FIR, arrest store owners, or seal commercial premises for genuine financial default. Unsecured business loans do not involve mortgaged real estate or hypothecated physical assets, rendering the SARFAESI Act completely inapplicable. While FlexiLoans may issue notices under Section 25 of the Payment and Settlement Systems Act (PSSA) for bounced NACH mandates, these are bailable, compoundable proceedings that are routinely resolved through advocate representation and compromise settlements.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can retail store owners stop repeated FlexiLoans NACH bounce charges and debit attempts?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Distressed retailers can stop recurring NACH bounce penalties through a two-step legal procedure: (1) Submit a written mandate revocation or stop-payment instruction to their destination bank under National Payments Corporation of India (NPCI) procedural guidelines and RBI consumer directives, which legally prevents further electronic presentations; (2) Require their legal advocate to enforce a 100% waiver of all accrued bounce penalties, late fees, and penal interest during One-Time Settlement negotiations under RBI fair lending practice circulars.',
          },
        },
        {
          '@type': 'Question',
          name: 'What percentage of debt waiver or haircut can you realistically negotiate with FlexiLoans?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'On unsecured retail and merchant loans, FlexiLoans typically sanctions principal debt waivers between 40% and 60% of total book dues. The achievable haircut depends on loan aging, delinquency classification, and balance-sheet provisioning. Accounts overdue beyond 180 to 365 days (Doubtful or Loss Asset status) qualify for maximum principal haircuts (50% to 65%), accompanied by a complete 100% waiver of all accumulated bounce fees, late charges, and penal interest.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do you stop aggressive automated AI collection calls and recovery harassment from FlexiLoans?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under RBI Master Directions on Recovery Agents and the NBFC Fair Practices Code, lenders and their outsourced agencies are strictly prohibited from: calling before 08:00 AM or after 07:00 PM; contacting shop employees, suppliers, customers, or non-guarantor family members; and using intimidating language or making unauthorized premises visits. Distressed merchants should record unauthorized calls, serve a formal legal cease-and-desist notice to Epimoney Private Limited Principal Nodal Officer, and lodge an immediate complaint on the RBI Integrated Ombudsman (CMS) portal.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is a Section 25 PSSA notice issued by FlexiLoans and how should an advocate respond?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A Section 25 PSSA notice is a statutory 15-day demand notice issued when an automated NACH mandate dishonours due to insufficient funds. It is not an arrest warrant or court summons. Legal counsel drafts a comprehensive reply detailing bona fide commercial hardship, citing retail revenue contraction, challenging unauthorized multiple mandate presentations, and formally proposing a compromise One-Time Settlement directly to the lender.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can FlexiLoans enforce private arbitration in Mumbai against an outstation merchant?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'While FlexiLoans loan agreements often include arbitration clauses specifying Mumbai as the seat of arbitration, landmark Supreme Court rulings (Perkins Eastman Architects DVM v. HSCC and TRF Ltd. v. Energo Engineering) establish that unilateral appointment of a sole arbitrator by a lender without mutual consent is legally void. Legal counsel can challenge the arbitrator jurisdiction under Section 12 and Section 14 of the Arbitration and Conciliation Act, staying ex-parte proceedings and redirecting the dispute toward mutual settlement.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who within FlexiLoans (Epimoney Private Limited) has the legal authority to approve a loan settlement?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under Epimoney Private Limited internal Delegation of Financial Powers, third-party tele-callers and agency field personnel possess zero legal authority to sanction debt discounts. Substantive loan haircuts (40% to 60%) must be formally reviewed and approved by FlexiLoans Stressed Assets Committee or Credit Risk Division, documented exclusively through an authentic stamped sanction letter on corporate letterhead.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does settling a FlexiLoans business loan impact the proprietor CIBIL score?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Upon receipt of the settlement payment, FlexiLoans updates credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark) with the status Settled or Post-Write-off Settled with an outstanding balance of ₹0. While this results in an initial credit score drop of 75 to 130 points, it permanently stops compounding overdue marks and legal flags. Proprietors can systematically rebuild their score back to 750+ within 18 to 24 months through secured credit instruments.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does FlexiLoans take to issue the No Dues Certificate (NDC) following settlement payment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under Reserve Bank of India Circular RBI/2023-24/60, FlexiLoans (Epimoney Private Limited) is legally mandated to deliver a formal No Dues Certificate (NDC) and update credit bureau records within 30 calendar days of receiving full settlement payment. Any unjustified delay beyond 30 days entitles the borrower to mandatory statutory compensation of ₹5,000 per day payable directly by the lender.',
          },
        },
      ],
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.settleloans.in/#organization',
      name: 'SettleLoans',
      url: 'https://www.settleloans.in',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.settleloans.in/logo/logo.svg',
      },
      sameAs: [
        'https://www.linkedin.com/company/settleloans',
        'https://twitter.com/settleloans',
        'https://www.facebook.com/settleloans',
      ],
    },
  ],
};

export default function FlexiLoansBusinessLoanSettlementPage() {
  const tocItems = [
    { id: 'understanding-flexiloans-defaults', title: '1. Fintech Underwriting & Default Mechanics' },
    { id: 'flexiloans-delinquency-timeline-npa', title: '2. Delinquency Timeline & NPA Lifecycle' },
    { id: 'stopping-flexiloans-nach-bounce-charges', title: '3. Halting NACH Bounce Fees & Auto-Debits' },
    { id: 'flexiloans-ots-haircut-npv-valuation', title: '4. OTS Haircut Policies & Recovery Math' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Resolution Blueprint' },
    { id: 'automated-calls-recovery-anti-harassment', title: '6. Automated Call Defense & Harassment Rules' },
    { id: 'step-by-step-flexiloans-settlement', title: '7. Step-by-Step Merchant Settlement Roadmap' },
    { id: 'section-25-pssa-arbitration-lok-adalat', title: '8. Section 25 Notices, Arbitration & Lok Adalat' },
    { id: 'sanction-letter-audit-ndc-verification', title: '9. Sanction Letter Forensics & Zero NDC' },
    { id: 'cibil-impact-credit-rehabilitation', title: '10. CIBIL Score Trajectory & Rehabilitation' },
    { id: 'company-resolution-section', title: '11. SettleLoans Legal Defense & Representation' },
    { id: 'faqs', title: '12. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      question: 'What is the FlexiLoans business loan settlement process and how does an OTS compromise work?',
      answer:
        'The FlexiLoans business loan settlement process is a formal compromise mechanism governed by Reserve Bank of India Master Directions on Compromise Settlements. When an unsecured merchant cash advance, POS-linked term loan, or distributor credit facility crosses 90 days past due into Non-Performing Asset (NPA) status, the merchant or their legal counsel submits a commercial hardship dossier to Epimoney Private Limited (FlexiLoans). Upon evaluating business cash flows against the Net Present Value (NPV) of recovery, the lender issues a stamped OTS Sanction Letter. Remitting the negotiated sum directly into the loan account extinguishes all financial liabilities and entitles the borrower to a zero-balance No Dues Certificate.',
    },
    {
      question: 'Can FlexiLoans or its recovery agents arrest a shop owner or seal retail premises for loan default?',
      answer:
        'No. Defaulting on an unsecured business loan is strictly a civil contractual breach governed by the Indian Contract Act, 1872. Police authorities have zero legal jurisdiction to register an FIR, arrest store owners, or seal commercial premises for genuine financial default. Unsecured business loans do not involve mortgaged real estate or hypothecated physical assets, rendering the SARFAESI Act completely inapplicable. While FlexiLoans may issue notices under Section 25 of the Payment and Settlement Systems Act (PSSA) for bounced NACH mandates, these are bailable, compoundable proceedings that are routinely resolved through advocate representation and compromise settlements.',
    },
    {
      question: 'How can retail store owners stop repeated FlexiLoans NACH bounce charges and debit attempts?',
      answer:
        'Distressed retailers can stop recurring NACH bounce penalties through a two-step legal procedure: (1) Submit a written mandate revocation or stop-payment instruction to their destination bank under National Payments Corporation of India (NPCI) procedural guidelines and RBI consumer directives, which legally prevents further electronic presentations; (2) Require their legal advocate to enforce a 100% waiver of all accrued bounce penalties, late fees, and penal interest during One-Time Settlement negotiations under RBI fair lending practice circulars.',
    },
    {
      question: 'What percentage of debt waiver or haircut can you realistically negotiate with FlexiLoans?',
      answer:
        'On unsecured retail and merchant loans, FlexiLoans typically sanctions principal debt waivers between 40% and 60% of total book dues. The achievable haircut depends on loan aging, delinquency classification, and balance-sheet provisioning. Accounts overdue beyond 180 to 365 days (Doubtful or Loss Asset status) qualify for maximum principal haircuts (50% to 65%), accompanied by a complete 100% waiver of all accumulated bounce fees, late charges, and penal interest.',
    },
    {
      question: 'How do you stop aggressive automated AI collection calls and recovery harassment from FlexiLoans?',
      answer:
        'Under RBI Master Directions on Recovery Agents and the NBFC Fair Practices Code, lenders and their outsourced agencies are strictly prohibited from: calling before 08:00 AM or after 07:00 PM; contacting shop employees, suppliers, customers, or non-guarantor family members; and using intimidating language or making unauthorized premises visits. Distressed merchants should record unauthorized calls, serve a formal legal cease-and-desist notice to Epimoney Private Limited Principal Nodal Officer, and lodge an immediate complaint on the RBI Integrated Ombudsman (CMS) portal.',
    },
    {
      question: 'What is a Section 25 PSSA notice issued by FlexiLoans and how should an advocate respond?',
      answer:
        'A Section 25 PSSA notice is a statutory 15-day demand notice issued when an automated NACH mandate dishonours due to insufficient funds. It is not an arrest warrant or court summons. Legal counsel drafts a comprehensive reply detailing bona fide commercial hardship, citing retail revenue contraction, challenging unauthorized multiple mandate presentations, and formally proposing a compromise One-Time Settlement directly to the lender.',
    },
    {
      question: 'Can FlexiLoans enforce private arbitration in Mumbai against an outstation merchant?',
      answer:
        'While FlexiLoans loan agreements often include arbitration clauses specifying Mumbai as the seat of arbitration, landmark Supreme Court rulings (Perkins Eastman Architects DVM v. HSCC and TRF Ltd. v. Energo Engineering) establish that unilateral appointment of a sole arbitrator by a lender without mutual consent is legally void. Legal counsel can challenge the arbitrator jurisdiction under Section 12 and Section 14 of the Arbitration and Conciliation Act, staying ex-parte proceedings and redirecting the dispute toward mutual settlement.',
    },
    {
      question: 'Who within FlexiLoans (Epimoney Private Limited) has the legal authority to approve a loan settlement?',
      answer:
        'Under Epimoney Private Limited internal Delegation of Financial Powers, third-party tele-callers and agency field personnel possess zero legal authority to sanction debt discounts. Substantive loan haircuts (40% to 60%) must be formally reviewed and approved by FlexiLoans Stressed Assets Committee or Credit Risk Division, documented exclusively through an authentic stamped sanction letter on corporate letterhead.',
    },
    {
      question: 'How does settling a FlexiLoans business loan impact the proprietor CIBIL score?',
      answer:
        'Upon receipt of the settlement payment, FlexiLoans updates credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark) with the status Settled or Post-Write-off Settled with an outstanding balance of ₹0. While this results in an initial credit score drop of 75 to 130 points, it permanently stops compounding overdue marks and legal flags. Proprietors can systematically rebuild their score back to 750+ within 18 to 24 months through secured credit instruments.',
    },
    {
      question: 'How long does FlexiLoans take to issue the No Dues Certificate (NDC) following settlement payment?',
      answer:
        'Under Reserve Bank of India Circular RBI/2023-24/60, FlexiLoans (Epimoney Private Limited) is legally mandated to deliver a formal No Dues Certificate (NDC) and update credit bureau records within 30 calendar days of receiving full settlement payment. Any unjustified delay beyond 30 days entitles the borrower to mandatory statutory compensation of ₹5,000 per day payable directly by the lender.',
    },
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
            <span>Fintech NBFC Dispute Resolution • FlexiLoans / Epimoney</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            FlexiLoans Business Loan Settlement: <span className="text-[#3b82f6] md:text-[#60a5fa]">Legal OTS Process</span>
          </h1>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-3 mb-5 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>
                Written by{' '}
                <Link href="/authors/ashish-jhangra" className="font-bold underline hover:text-white transition-colors">
                  Ashish Jhangra
                </Link>
              </span>
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
              <span>Negotiate FlexiLoans Settlement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Get Free Business Case Evaluation
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

            <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>FlexiLoans Quick Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                FlexiLoans unsecured merchant debt is governed by civil contract law. When revenue drops trigger NACH bounces, merchants can revoke bank mandates, stop automated calling, and negotiate 40% to 60% OTS debt haircuts under RBI Master Directions.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">
            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 border border-blue-200 rounded-2xl p-6 mb-8 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-base mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: FlexiLoans Business Loan Settlement</span>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Civil Contract Protection:</strong> Defaulting on an unsecured business loan from FlexiLoans (Epimoney Private Limited) is strictly a civil contractual breach governed by the Indian Contract Act, 1872. Police cannot register an FIR, arrest store owners, or seal commercial premises for loan default.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>NACH Return Shield:</strong> Recurring electronic debit attempts can be halted by instructing your destination bank to revoke e-mandates under NPCI guidelines. Legal representation demands a 100% waiver of accumulated bounce charges under RBI fair lending practice rules.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Substantive 40%–60% Haircut:</strong> When retail business cash flows collapse and accounts cross 90 days past due into Non-Performing Asset (NPA) status, FlexiLoans evaluates recovery under Net Present Value (NPV) criteria, sanctioning substantial principal waivers.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Section 25 PSSA &amp; Arbitration Defense:</strong> Demand notices under Section 25 of the Payment and Settlement Systems Act and unilateral sole arbitration notices in Mumbai can be contested and redirected into mutual compromise conciliation.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Enforceable Zero-Balance NDC:</strong> Under Reserve Bank of India Circular RBI/2023-24/60, FlexiLoans must issue a formal No Dues Certificate and update credit bureaus within 30 calendar days of settlement remittance, subject to a statutory ₹5,000 daily penalty for non-compliance.
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 1: Fintech Underwriting & Default Mechanics */}
            <section id="understanding-flexiloans-defaults" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. Fintech Underwriting &amp; Default Mechanics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Understanding FlexiLoans Underwriting &amp; Merchant Default Mechanics
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                FlexiLoans operates through Epimoney Private Limited, an RBI-regulated non-banking financial company, alongside institutional co-lending partners. The platform provides collateral-free working capital, merchant cash advances, POS term facilities, and distributor financing to retail store owners, kirana proprietors, and commercial distributors.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Instead of requiring physical collateral or audited balance sheets, underwriting relies on algorithmic scoring of GST filings, POS terminal swipes, UPI cash flow velocity, and current account statements. While enabling rapid disbursement, this automated credit model creates acute financial vulnerability when retail revenues fluctuate.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When sales dip or supplier receivables get delayed, automated electronic NACH presentations fail repeatedly. Rather than accommodating business distress, automated systems levy compounding bounce penalties and penal interest of 24% to 36% annually. Defaulting on an unsecured business loan remains strictly a civil contractual matter under the Indian Contract Act, 1872, entitling merchants to statutory debt compromise protections under RBI regulations.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong>Statutory Principle:</strong> Under Reserve Bank of India Master Directions on Compromise Settlements, all regulated non-banking financial companies, including Epimoney Private Limited (FlexiLoans), must provide transparent, board-approved compromise settlement mechanisms. Insolvent commercial borrowers who experience involuntary business setbacks cannot be treated as wilful defaulters and hold enforceable rights to pursue structured debt compromise negotiations.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Delinquency Timeline & NPA Stages */}
            <section id="flexiloans-delinquency-timeline-npa" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>2. Delinquency Timeline &amp; NPA Lifecycle</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                FlexiLoans Delinquency Timeline: DPD Stages to Non-Performing Asset
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Defaulted FlexiLoans facilities follow the RBI Prudential Norms on Asset Classification and Ind AS 109 Expected Credit Loss frameworks. Lenders group overdue accounts into Days Past Due (DPD) aging buckets, which directly determine settlement haircut thresholds.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                During SMA-0 (1–30 DPD), automated reminder bots and IVR calls dominate. In SMA-1 (31–60 DPD) and SMA-2 (61–90 DPD), files shift to external tele-collection agencies, accompanied by loan acceleration and statutory pre-litigation notices.
              </p>

              {/* Delinquency Slabs Table */}
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Delinquency Stage</th>
                      <th>Overdue Days (DPD)</th>
                      <th>FlexiLoans Collection Behavior</th>
                      <th>Legal &amp; Judicial Exposure</th>
                      <th>Settlement Haircut Potential</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-0 (Early Delinquency)</td>
                      <td>1 – 30 Days</td>
                      <td>Automated reminder bots, daily IVR calling, recurring NACH clearing presentations.</td>
                      <td>No formal litigation; initial DPD reported to TransUnion CIBIL and Experian.</td>
                      <td>Negligible (Lender demands immediate clearance of full overdue EMI).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-1 (Mid Delinquency)</td>
                      <td>31 – 60 Days</td>
                      <td>Outsourced call center assignment, aggressive daily tele-calling, loan acceleration warnings.</td>
                      <td>Pre-litigation demand notices; credit scores decline significantly.</td>
                      <td>Low (Tenure extension or temporary penal interest freeze considered).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-2 (Pre-NPA Escalation)</td>
                      <td>61 – 90 Days</td>
                      <td>Field visits by outsourced agency agents, loan recall demand notices issued.</td>
                      <td>Section 25 PSSA statutory legal demand notices issued for bounced NACH.</td>
                      <td>Moderate (Discussions for penal fee waivers can commence).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-amber-700">NPA (Substandard Asset)</td>
                      <td>91 – 180 Days</td>
                      <td>Transferred to Stressed Assets Desk; mandatory balance-sheet provisioning under Ind AS 109.</td>
                      <td>Magistrate court summons under Section 25 PSSA; conciliation summons.</td>
                      <td>
                        <span className="text-emerald-700 font-bold">High (35%–50% Haircut achievable).</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold text-red-700">Doubtful / Loss Asset</td>
                      <td>181 – 365+ Days</td>
                      <td>Heavy balance-sheet provisioning absorbed; internal technical write-off evaluation.</td>
                      <td>Unilateral private arbitration notices; Lok Adalat referral notices.</td>
                      <td>
                        <span className="text-emerald-700 font-bold">Maximum (50%–65% Haircut achievable).</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Past 90 days, the loan transitions into Non-Performing Asset (NPA) status, requiring Epimoney to freeze interest recognition and allocate mandatory balance-sheet capital provisions. Once an account exceeds 180 DPD into Doubtful Asset or technical write-off status, an upfront cash settlement provides an immediate accounting write-back to operational profits, enabling credit committees to sanction 40% to 60% principal haircuts.
              </p>
            </section>

            {/* Section 3: Halting NACH Bounce Charges & Penal Levies */}
            <section id="stopping-flexiloans-nach-bounce-charges" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Banknote className="w-4 h-4" />
                <span>3. Halting NACH Bounce Fees &amp; Auto-Debits</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Halting Repeated FlexiLoans NACH Bounce Charges &amp; Penalties
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                FlexiLoans automated clearing systems frequently present electronic mandates multiple times per billing cycle. Each failed auto-debit triggers bank return charges of ₹295 to ₹590, while the lender adds internal dishonour penalties of ₹500 to ₹1,000 plus 24%–36% penal interest, compounding ledger arrears beyond feasible recovery.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under RBI Fair Lending Practice directives (2023), regulated lenders cannot capitalize penal charges or levy compounded default interest. Furthermore, NPCI procedural rules and RBI consumer guidelines empower account holders to instruct their bank to revoke or cancel active e-NACH mandates, instantly terminating recurring debit penalties.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Mandate cancellation preserves essential operating cash flow. During formal OTS compromise negotiations, legal advocates enforce a 100% waiver of all accrued bounce fees and penal interest, ensuring debt discounts apply strictly to legitimate principal balances.
              </p>
            </section>

            {/* Section 4: OTS Haircut Policies & Valuation Framework */}
            <section id="flexiloans-ots-haircut-npv-valuation" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>4. OTS Haircut Policies &amp; Recovery Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                FlexiLoans OTS Haircut Policies &amp; Recovery Valuation Math
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under the RBI Master Direction on Compromise Settlements (DOR.STR.REC.20/21.04.048/2023-24), NBFCs assess compromise offers using Net Present Value (NPV) recovery calculations. Because FlexiLoans facilities are unsecured without mortgages or inventory hypothecation, SARFAESI asset seizure laws are entirely inapplicable.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Litigation through Order 37 CPC summary suits or arbitration demands 3 to 5 years of court friction, legal retainers, and heavy provisioning. Under financial NPV modeling, an immediate compromise cash payment provides higher economic value to Epimoney than prolonged civil litigation.
              </p>

              {/* Clean Formula Container Box */}
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

              {/* Haircut Slabs Table */}
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Realistic FlexiLoans Settlement Haircut Slabs by Product &amp; Aging
              </h3>
              <div className="overflow-x-auto my-4">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Product Facility Category</th>
                      <th>Delinquency Aging</th>
                      <th>Penal &amp; Bounce Waiver</th>
                      <th>Principal Haircut Range</th>
                      <th>Target Settlement Offer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Merchant Term / Kirana Working Capital Loan</td>
                      <td>90 – 180 Days (NPA)</td>
                      <td>100% Full Waiver</td>
                      <td>30% – 45% Principal Waiver</td>
                      <td>Offer 45%–55% of Ledger Dues</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Distributor Unsecured Business Credit Line</td>
                      <td>181 – 365 Days (Doubtful)</td>
                      <td>100% Full Waiver</td>
                      <td>45% – 60% Principal Waiver</td>
                      <td>Offer 35%–45% of Core Balance</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">POS Swipe / Digital Cash Advance Facility</td>
                      <td>180+ Days (Written Off)</td>
                      <td>100% All Penal Charges</td>
                      <td>50% – 65% Principal Waiver</td>
                      <td>Offer 30%–40% of Book Balance</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">E-Commerce Seller Unsecured Term Facility</td>
                      <td>365+ Days (Loss Asset)</td>
                      <td>100% All Penal Charges</td>
                      <td>55% – 70% Principal Waiver</td>
                      <td>Offer 25%–35% of Principal</td>
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
                        FlexiLoans Business Loan Settlement &amp; Legal Action Blueprint
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/flexiloans-business-loan-settlement-process.jpg"
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
                      src="/images/infographics/flexiloans-business-loan-settlement-process.jpg"
                      alt="FlexiLoans Business Loan Settlement Process and OTS Haircut Guide"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>
                      <strong>Strategic Imperative:</strong> Cancel NACH mandate presentations, halt aggressive automated calling, and negotiate directly with Epimoney Credit Committees for 40%–60% debt waivers.
                    </span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6: Automated AI Calling, Bot Harassment & RBI Defense */}
            <section id="automated-calls-recovery-anti-harassment" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>5. Automated Call Defense &amp; Harassment Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Defending Against Automated Collection Calls &amp; Recovery Tactics
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Defaulted accounts trigger automated predictive dialers, AI voice bots, and third-party recovery agencies contacting merchants repeatedly. In unlawful cases, recovery agents contact shop employees, commercial suppliers, or family members whose numbers were obtained during app-based onboarding.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under the RBI Master Directions on Recovery Agents and NBFC Fair Practices Code: calling before 08:00 AM or after 07:00 PM is strictly prohibited; reaching out to third-party suppliers, staff, or non-guarantor relatives is illegal; and intimidating store staff or threatening premises closure constitutes an actionable offence. Recovery agents must hold IIBF Debt Recovery Agent certifications.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Merchants should log calls, retain message transcripts, and serve a formal legal cease-and-desist notice on Epimoney Principal Nodal Officer. Escalating violations to the RBI Integrated Ombudsman (CMS) stops third-party harassment and transfers the dispute to structured advocate negotiations.
              </p>
            </section>

            {/* Section 7: Step-by-Step Merchant Roadmap to Settle a FlexiLoans Default */}
            <section id="step-by-step-flexiloans-settlement" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>6. Step-by-Step Merchant Settlement Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Step-by-Step Merchant Roadmap to Settle a FlexiLoans Default
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Navigating an institutional compromise settlement with a technology-driven NBFC like FlexiLoans requires a disciplined, evidence-based strategy designed to engage senior credit committees directly while insulating the merchant from unlawful recovery pressure:
              </p>

              <div className="space-y-6">
                {/* Phase 1 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">
                      1
                    </span>
                    Merchant Hardship Dossier Compilation &amp; Financial Forensics
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Assemble filed GST returns (GSTR-3B and GSTR-1), bank statements showing liquidity depletion, supplier debit notes, and medical records if health issues impacted store operations. This documentation proves the default is non-wilful and qualifies for compromise relief under RBI rules.
                  </p>
                </div>

                {/* Phase 2 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">
                      2
                    </span>
                    Electronic Mandate Cancellation &amp; Communication Containment
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Submit written instructions to your destination bank revoking active e-NACH auto-debit mandates to stop recurring return penalties. Simultaneously issue a formal legal directive requiring FlexiLoans to channel all communications exclusively through registered email or designated legal counsel.
                  </p>
                </div>

                {/* Phase 3 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">
                      3
                    </span>
                    Drafting &amp; Submitting the Formal Compromise Petition
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Legal advocates prepare a structured One-Time Settlement petition addressed directly to Epimoney Stressed Assets Committee, citing commercial distress and RBI compromise directives, with an opening proposal at 25% to 35% of total book dues.
                  </p>
                </div>

                {/* Phase 4 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">
                      4
                    </span>
                    Navigating Counter-Demands &amp; Structuring Committee Approvals
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    When the lender counters with token 10%–20% concessions, legal counsel demonstrates third-party family funding limitations and cash constraints, steering credit committee approvals toward the targeted 40% to 60% principal waiver band.
                  </p>
                </div>

                {/* Phase 5 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">
                      5
                    </span>
                    Forensic Legal Audit of the OTS Sanction Letter
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Before releasing funds, advocates verify the official sanction letter issued on Epimoney Private Limited letterhead, confirming exact loan account numbers, settlement amount, payment deadlines, and covenants releasing the borrower from further liabilities.
                  </p>
                </div>

                {/* Phase 6 */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">
                      6
                    </span>
                    Direct Account Remittance &amp; Enforcing Zero Balance NDC Delivery
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Remit the agreed sum directly into the designated FlexiLoans account via RTGS/NEFT. Under RBI Circular RBI/2023-24/60, the NBFC must deliver a zero-balance No Dues Certificate and update credit bureaus within 30 calendar days.
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
                Navigating Section 25 PSSA Summons, Arbitration &amp; Lok Adalat
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Past 60 to 90 days default, FlexiLoans routinely issues demand notices under Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA) for bounced NACH mandates, Section 138 NI Act notices if security cheques were collected, or notices invoking sole arbitration in Mumbai.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                A Section 25 PSSA notice is a 15-day statutory demand, not an arrest warrant. Responding through legal counsel citing genuine commercial downturn, challenging unauthorized repetitive mandate presentations, and proposing compromise conciliation protects the proprietor from ex-parte action.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Regarding unilateral arbitration, Supreme Court rulings (<em>Perkins Eastman Architects DVM v. HSCC</em> and <em>TRF Ltd. v. Energo Engineering</em>) establish that unilateral sole arbitrator appointments without mutual consent are void. Advocates challenge the arbitrator jurisdiction under Section 12 and 14 of the Arbitration Act, halting ex-parte proceedings.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Additionally, FlexiLoans regularly participates in National Lok Adalats organized by District Legal Services Authorities (DLSA). Lok Adalats offer pre-approved settlement mandates with 40% to 60% haircuts, passing awards that hold the non-appealable force of a Civil Court Decree.
              </p>

              {/* Comparative Table of Resolution Avenues */}
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
                      <td>Mutual compromise agreement under RBI Master Directions.</td>
                      <td>
                        <strong>40% – 60% Principal Waiver</strong>
                      </td>
                      <td>15 to 30 Days</td>
                      <td>Binding private contract with ₹0 NDC.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">National Lok Adalat</td>
                      <td>Judicial conciliation before sitting judge and panel.</td>
                      <td>
                        <strong>45% – 60% Principal Waiver</strong>
                      </td>
                      <td>Single-day session</td>
                      <td>
                        <strong>Civil Court Decree</strong> (Zero appeal).
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Arbitration Defense</td>
                      <td>Contesting unilateral sole arbitration under Section 12/14.</td>
                      <td>Variable (Converts to OTS)</td>
                      <td>3 to 6 Months</td>
                      <td>Neutralizes biased ex-parte awards.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Section 25 PSSA Defense</td>
                      <td>Magistrate court compoundable proceedings defense.</td>
                      <td>
                        <strong>35% – 50% Principal Waiver</strong>
                      </td>
                      <td>2 to 4 Months</td>
                      <td>Complete complaint withdrawal &amp; disposal.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 9: Sanction Letter Audit & ₹0 NDC Mandate */}
            <section id="sanction-letter-audit-ndc-verification" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>8. Sanction Letter Forensics &amp; Zero NDC</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Sanction Letter Verification &amp; Enforcing the Zero Balance NDC
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Merchants must avoid unverified settlement promises from collection agents. If funds are remitted against verbal or unverified communications, FlexiLoans credits the money entirely toward accrued penal charges and late fees, leaving the account active and defaulting.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Ensure the settlement is documented through an authentic OTS Sanction Letter on official Epimoney Private Limited letterhead (CIN: U65923MH2008PTC184494), specifying the registered Mumbai corporate office, loan account numbers, sanctioned compromise amount, payment schedule, and authorized signatory credentials.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                The letter must confirm that payment discharges all liabilities. Under RBI Circular RBI/2023-24/60, lenders must deliver a formal No Dues Certificate within 30 calendar days of payment clearance, subject to a statutory compensation penalty of ₹5,000 per day of delay payable to the borrower.
              </p>
            </section>

            {/* Section 10: CIBIL Score Trajectory & Rehabilitation */}
            <section id="cibil-impact-credit-rehabilitation" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>9. CIBIL Score Trajectory &amp; Rehabilitation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                CIBIL Score Trajectory Post-Settlement &amp; Credit Rehabilitation
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Following settlement payment, FlexiLoans reports the loan to TransUnion CIBIL, Experian, Equifax, and CRIF High Mark as <strong>&apos;Settled&apos;</strong> with an outstanding balance of <strong>₹0</strong>.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                While this brings an initial score reduction of 75 to 130 points and a 12-month cooling-off window for unsecured credit, a &apos;Settled&apos; record with zero balance permanently terminates ongoing default reporting and civil litigation exposure.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Merchants can restore credit scores to 750+ within 18 to 24 months by using a fixed-deposit-backed credit card, keeping credit utilization below 25%, and maintaining an unblemished on-time payment track record on all operating utilities and commercial expenses.
              </p>
            </section>

            {/* Section 11: SettleLoans Legal Defense & Representation */}
            <section id="company-resolution-section" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>10. SettleLoans Legal Defense &amp; Representation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Why Distressed Retail Merchants Choose SettleLoans Defense
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Navigating an unsecured loan settlement with a fast-paced fintech lender like FlexiLoans requires experienced financial auditing and decisive legal advocacy. SettleLoans provides complete end-to-end merchant defense: halting automated IVR and tele-caller harassment through statutory cease-and-desist notices, defending against Section 25 PSSA and arbitration notices, revoking predatory NACH mandates, and negotiating directly with Epimoney Private Limited Credit Committees to secure authorized 40% to 60% debt haircuts and authentic ₹0 No Dues Certificates.
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
                Frequently Asked Questions on FlexiLoans Business Loan Settlement
              </h2>

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
                    <strong>RBI Master Circular:</strong> Fair Practices Code for Non-Banking Financial Companies (NBFCs) &amp; Digital Lending Guidelines
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.flexiloans.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Epimoney Private Limited (FlexiLoans):</strong> Fair Practices Code, Customer Grievance Redressal Policy &amp; Principal Nodal Officer Escalations
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
                    <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> CMS Portal for NBFC Harassment, Excessive Bounce Fees &amp; NDC Delay Penalties
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
                  href="/unsecured-business-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Unsecured Business Loan Settlement
                </Link>
                <Link
                  href="/business-loan-recovery-process"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Business Loan Recovery Process
                </Link>
                <Link
                  href="/personal-loan-settlement-letter-format"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Loan Settlement Letter Format
                </Link>
                <Link
                  href="/personal-loan-settlement-percentage"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Loan Settlement Percentage Guide
                </Link>
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Lok Adalat Business Loan Settlement
                </Link>
                <Link
                  href="/personal-loan-legal-notice"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Business Loan Legal Notice Defense
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Loan Settlement CIBIL Impact
                </Link>
                <Link
                  href="/section-138-cheque-bounce-loan-default"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Section 138 &amp; Section 25 PSSA Defense
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
                <Link href="/authors/ashish-jhangra">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black text-base flex items-center justify-center shadow-md hover:opacity-90 transition-opacity">
                    AJ
                  </div>
                </Link>
                <div>
                  <div className="font-bold text-slate-900 text-base leading-tight">
                    <Link href="/authors/ashish-jhangra" className="hover:text-[#1F5EFF] transition-colors">
                      Ashish Jhangra
                    </Link>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">
                    Lead Banking Legal &amp; Debt Settlement Strategist
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Ashish has led over 1,400+ successful debt compromise negotiations across FlexiLoans, Lendingkart, Bajaj Finance, Tata Capital, and Aditya Birla Capital. He specializes in fintech NBFC dispute resolution, merchant credit restructuring, Section 25 PSSA defense, and borrower advocacy under RBI Master Directions.
              </p>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                <Link href="/authors/ashish-jhangra" className="text-[#1F5EFF] hover:underline">
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
                <span>Retail Merchant Debt Defense</span>
              </div>
              <div className="text-xl font-black mb-3 leading-tight">
                Facing FlexiLoans Default?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Stop automated collection calls and recurring NACH return fees immediately. Let our experienced banking advocates audit your delinquency stage, defend statutory legal notices, draft your formal OTS petition, and secure an authentic stamped FlexiLoans settlement letter.
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
                    <strong>Direct NBFC Representation:</strong> We bypass third-party collection agencies to represent your case directly before Epimoney Private Limited Stressed Assets Committees.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Protection:</strong> Prompt issuance of formal legal cease-and-desist notices to stop unauthorized shop visits, AI robocalls, and supplier calling under RBI rules.
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
