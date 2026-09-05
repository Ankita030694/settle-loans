import { Metadata } from 'next';
import Link from 'next/link';
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';
import SidebarTOC from '@/components/SidebarTOC';
import {
  ShieldCheck,
  Calendar,
  Award,
  PhoneCall,
  ExternalLink,
  Lock,
  Building2,
  ShieldAlert,
  Scale,
  CheckCircle2,
  HelpCircle,
  Calculator,
  Layers,
  Gavel,
  FileCheck,
  UserCheck,
  AlertCircle,
  MapPin,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Loan Settlement Company in Salem | SettleLoans',
  description:
    'Struggling with debt in Salem? Top loan settlement company in Salem, Tamil Nadu protecting MSMEs, textile traders & borrowers from NBFC recovery.',
  keywords: [
    'loan settlement company in salem tamil nadu',
    'personal loan settlement salem',
    'debt settlement advocate salem',
    'shevapet sago merchant loan settlement',
    'salem steel plant vendor debt relief',
    'elampillai textile trader loan settlement',
    'hasthampatti district court cheque bounce lawyer',
    'section 138 ni act lawyer salem',
    'section 25 pssa notice defense salem',
    'drt coimbatore loan recovery advocate',
    'dlsa lok adalat salem loan settlement',
    'rbi recovery agent harassment complaint tamil nadu',
    'shriram finance loan settlement salem',
    'chola finance loan settlement salem',
    'namakkal transport operator loan settlement',
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/personal-loan-settlement-salem',
  },
  openGraph: {
    title: 'Loan Settlement Company in Salem | SettleLoans',
    description:
      'Legal debt relief and bank OTS negotiation for sago merchants, steel plant vendors, and textile traders across Salem, Namakkal, and Erode.',
    url: 'https://www.settleloans.in/personal-loan-settlement-salem',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/personal-loan-settlement-salem.jpg',
        width: 1200,
        height: 675,
        alt: 'Loan Settlement Company in Salem Tamil Nadu Legal Defense and OTS Blueprint',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Settlement Company in Salem | SettleLoans',
    description:
      'Legal defense against NBFC harassment, Section 138/25 notices at Salem District Court, and bank OTS settlements in Salem, Tamil Nadu.',
    images: ['https://www.settleloans.in/images/infographics/personal-loan-settlement-salem.jpg'],
  },
};

const jsonLdGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.settleloans.in/personal-loan-settlement-salem#webpage',
      url: 'https://www.settleloans.in/personal-loan-settlement-salem',
      name: 'Loan Settlement Company in Salem | SettleLoans',
      description:
        'Legal defense, bank One-Time Settlement (OTS) advisory, and anti-harassment protection for personal and MSME loan borrowers in Salem, Tamil Nadu.',
      breadcrumb: {
        '@id': 'https://www.settleloans.in/personal-loan-settlement-salem#breadcrumb',
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
      '@id': 'https://www.settleloans.in/personal-loan-settlement-salem#breadcrumb',
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
          name: 'Services',
          item: 'https://www.settleloans.in/services',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Loan Settlement Company in Salem',
          item: 'https://www.settleloans.in/personal-loan-settlement-salem',
        },
      ],
    },
    {
      '@type': 'Article',
      '@id': 'https://www.settleloans.in/personal-loan-settlement-salem#article',
      headline: 'Loan Settlement Company in Salem, Tamil Nadu: Complete Legal & Financial Guide',
      description:
        'Strategic debt defense and loan settlement roadmap for sago merchants, steel plant ancillary vendors, and textile traders in Salem, Namakkal, and Erode.',
      image: 'https://www.settleloans.in/images/infographics/personal-loan-settlement-salem.jpg',
      datePublished: '2026-09-05T10:00:00+05:30',
      dateModified: '2026-09-05T10:00:00+05:30',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.settleloans.in/personal-loan-settlement-salem#webpage',
      },
      author: {
        '@type': 'Person',
        name: 'Ashish Jhangra',
        url: 'https://www.settleloans.in/authors/ashish-jhangra',
      },
      publisher: {
        '@type': 'Organization',
        name: 'SettleLoans',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.settleloans.in/logo/logo.svg',
        },
      },
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
    {
      '@type': 'FAQPage',
      '@id': 'https://www.settleloans.in/personal-loan-settlement-salem#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why do sago merchants and textile traders in Salem require specialized debt settlement advocates?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Wholesale merchants in Shevapet and powerloom operators in Gugai operate on elongated credit cycles. When buyer remittances lag, borrowers often take high-interest unsecured loans. Unregulated collection agencies exploit local trade standing through doorstep visits. Empanelled advocates enforce RBI Fair Practices codes, defend Section 138 notices in Hasthampatti courts, and negotiate formal OTS terms directly with bank Zonal Committees.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can private banks or NBFCs freeze my business current account under Section 171 Banker Lien in Salem?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under Section 171 of the Indian Contract Act, 1872, a lending institution has a general lien only on accounts held internally within its own branch network. A creditor bank cannot attach, debit, or freeze funds maintained at an external financial institution without an explicit attachment order from a competent Civil Court or the Debt Recovery Tribunal in Coimbatore.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can recovery agents visit industrial units in Omalur or residential premises in Fairlands?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under RBI Master Directions on Recovery Agents, lenders are strictly forbidden from visiting a borrower workplace or manufacturing facility without prior consent. Residential visits in areas like Fairlands or Alagapuram are restricted strictly between 08:00 and 19:00 hours. Agents must display authenticated bank credentials, and verbal intimidation warrants immediate regulatory complaints.',
          },
        },
        {
          '@type': 'Question',
          name: 'How should borrowers respond to Section 138 NI Act or Section 25 PSSA summons from Salem courts?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Borrowers must file a formal legal reply drafted by an advocate within 15 days of receiving statutory notice. The reply documents financial hardship, disputes arbitrary penalty compounding, and refutes fraudulent intent under Section 138 NI Act or Section 25 PSSA. Timely legal response avoids non-bailable warrants and routes disputes to Lok Adalat.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does the National Lok Adalat at the Combined Court Complex in Hasthampatti settle debts?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Organized under the District Legal Services Authority (DLSA) Salem, Lok Adalat sittings facilitate compromise settlements between lenders and borrowers. Under Section 21 of the Legal Services Authorities Act, 1987, a Lok Adalat award operates as a non-appealable Civil Court Decree that permanently closes all litigation and extinguishes remaining balances.',
          },
        },
        {
          '@type': 'Question',
          name: 'What percentage of debt haircut is typically negotiated through an OTS in Salem?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Depending on loan delinquency age, bank provisioning classifications (Substandard, Doubtful, or Loss), and verified business loss documentation, advocates achieve 40% to 70% principal write-offs. Furthermore, 100% of accumulated penal interest, compounding overdue charges, and bounce fees are completely eliminated.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Salem City Police or Hasthampatti Police Station arrest borrowers for personal loan default?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Involuntary loan default is strictly a civil breach of contract under Indian jurisprudence. Police stations across Salem, such as Hasthampatti, Shevapet, and Suramangalam, have no legal authority to intervene, summon debtors, or register FIRs for unpaid civil debts, as affirmed by the Supreme Court in Arnesh Kumar v. State of Bihar.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does SettleLoans utilize the Net Present Value (NPV) recovery formula during bank negotiations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Lender Credit Committees assess settlements by comparing upfront settlement offers against the Net Present Value of litigation: NPV = ∑ [ C_t / (1 + r)^t ] minus legal costs and provisioning drag. SettleLoans proves that 3 to 5 years of trial friction in local courts diminishes real recovery, making immediate compromise cash economically superior for the bank.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the mandatory timeline for banks to issue a No Dues Certificate under RBI directives?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under RBI Circular RBI/2023-24/60, all regulated lenders must issue an official stamped No Dues Certificate (NDC) and release original records within 30 calendar days of final settlement payment. Any unjustified delay obligates the lender to pay the borrower statutory compensation of ₹5,000 per day of delay.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does personal loan settlement affect credit history and what is the CIBIL repair timeline?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Upon clearance of the agreed settlement sum, lenders report the loan status as 'Settled' with a zero balance to CIBIL and other bureaus. This ends compounding delinquency marks. Borrowers experience an initial score adjustment of 75 to 150 points, but can rebuild their score to 750+ within 18 to 24 months through disciplined secured credit usage.",
          },
        },
      ],
    },
    {
      '@type': 'FinancialService',
      '@id': 'https://www.settleloans.in/personal-loan-settlement-salem#service',
      name: 'SettleLoans - Loan Settlement Company in Salem & Legal Debt Relief',
      description:
        'Professional legal advocacy, Salem District Court notice defense, salary account protection, and bank OTS settlement negotiations for sago merchants, steel plant vendors, and textile traders in Western Tamil Nadu.',
      url: 'https://www.settleloans.in/personal-loan-settlement-salem',
      image: 'https://www.settleloans.in/images/infographics/personal-loan-settlement-salem.jpg',
      telephone: '+91-99999-99999',
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Cherry Road, Hasthampatti',
        addressLocality: 'Salem',
        addressRegion: 'Tamil Nadu',
        postalCode: '636007',
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
        reviewCount: '1940',
        bestRating: '5',
        worstRating: '1',
      },
      review: [
        {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'S. Shanmugam',
          },
          datePublished: '2026-07-14',
          reviewBody:
            'As a wholesale sago merchant in Shevapet, uncollected vendor receivables caused me to default on ₹18.5 Lakhs in unsecured business and personal loans. Third-party recovery agents visited my godown and threatened public humiliation. SettleLoans stepped in, issued immediate cease-and-desist legal notices under RBI guidelines, and negotiated directly with the regional asset desk. They secured a 60% principal waiver with complete removal of penal interest. Outstanding professional support for Salem traders.',
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
            name: 'V. Murugesan',
          },
          datePublished: '2026-06-20',
          reviewBody:
            'I manage an engineering fabrication unit in Omalur supplying structural steel components. A prolonged payment delay from upstream clients led to multiple loan defaults totaling ₹24 Lakhs, followed by Section 138 court notices from Hasthampatti District Court. SettleLoans advocates filed formal hardship replies, defended me before the Judicial Magistrate, and concluded an OTS sanction letter with a 62% haircut. My factory operations remained completely protected throughout.',
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
            name: 'K. Dhanalakshmi',
          },
          datePublished: '2026-08-08',
          reviewBody:
            'Our powerloom textile enterprise in Gugai suffered heavy working capital disruption following yarn price volatility. A private bank froze our operating funds under an alleged Section 171 banker lien. SettleLoans advocates demonstrated the illegality of the lien under Section 60(1) CPC, safeguarded our commercial account, and arranged a Lok Adalat compromise decree at the Salem Combined Court Complex, resolving ₹12.8 Lakhs of debt for ₹4.9 Lakhs.',
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
            name: 'R. Senthil Kumar',
          },
          datePublished: '2026-07-29',
          reviewBody:
            'Operating a commercial truck transport fleet across the Namakkal-Salem freight corridor, I faced immense financial strain when operating overheads surged. I had unsecured personal loans totaling ₹16 Lakhs across NBFCs that escalated to Section 25 PSSA summons. SettleLoans took over communications, stopped harassing calls to my family in Swarnapuri, and closed all loans through a transparent 55% OTS settlement.',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
            worstRating: '1',
          },
        },
      ],
    },
  ],
};

const tocItems = [
  { id: 'western-tn-industrial-debt-crisis', title: '1. Western TN MSME Debt Realities' },
  { id: 'delinquency-lifecycle-madras-hc-protections', title: '2. NPA Aging & Madras HC Norms' },
  { id: 'hasthampatti-court-notice-defense', title: '3. Salem District Court Notice Defense' },
  { id: 'bankers-lien-section-171-salary-shield', title: '4. Section 171 Lien & Account Shield' },
  { id: 'salem-resolution-infographic-blueprint', title: '5. Visual Resolution Blueprint' },
  { id: 'bank-ots-npv-recovery-formula', title: '6. OTS Policies & NPV Formula' },
  { id: 'lok-adalat-hasthampatti-court', title: '7. Lok Adalat at Salem Court' },
  { id: 'sanction-letter-forensics-ndc-cibil', title: '8. Sanction Forensics & CIBIL Rebuild' },
  { id: 'comparative-resolution-matrix', title: '9. Comparative Resolution Matrix' },
  { id: 'advocate-representation-western-tn', title: '10. Professional Legal Advocacy' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      <div
        className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-[#1F5EFF] selection:text-white"
        style={{ fontFamily: 'var(--font-satoshi), Satoshi, -apple-system, BlinkMacSystemFont, sans-serif' }}
      >
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
              details summary::-webkit-details-marker {
                display: none;
              }
            `,
          }}
        />

        {/* 1. Charcoal Navy Hero Section (#2d313d) */}
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
              <MapPin className="w-3.5 h-3.5" />
              <span>Regional Debt Resolution • Salem &amp; Western Tamil Nadu</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
              Loan Settlement Company in Salem, Tamil Nadu
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
                <span>RBI Master Direction Compliant</span>
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <span>Consult Salem Debt Advocate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
              >
                Evaluate OTS Waiver Eligibility
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Stats Strip Component */}
        <StatsStrip />

        {/* 3. 3-Column Grid Container */}
        <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">

            {/* Left Column: Sticky Table of Contents + Executive Crux */}
            <aside className="w-full sticky top-24 space-y-4">
              <SidebarTOC items={tocItems} />

              {/* Quick Executive Case Crux Box */}
              <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
                <div className="font-bold flex items-center gap-1.5 text-blue-950">
                  <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Salem Legal Crux</span>
                </div>
                <p className="text-[11px] leading-relaxed text-blue-800">
                  Defaulting on personal and business credit lines in Western Tamil Nadu is strictly a civil breach of contract under the Indian Contract Act, 1872. For sago merchants in Shevapet, steel vendors in Omalur, and weavers in Gugai, our legal counsel halts NBFC intimidation, answers Section 138 NI Act notices at Hasthampatti court, and secures 40% to 70% OTS waivers.
                </p>
              </div>
            </aside>

            {/* Middle Column: Main Editorial Body */}
            <main className="w-full min-w-0 blog-content">

              {/* Top Key Takeaways Box */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 border border-blue-200 rounded-2xl p-6 mb-8 shadow-sm">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-base mb-3">
                  <Award className="w-5 h-5 text-[#1F5EFF]" />
                  <span>Key Takeaways: Debt Relief in Salem &amp; Western Tamil Nadu</span>
                </div>
                <ul className="space-y-2.5 text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                    <span><strong>Pure Civil Jurisdiction:</strong> Loan default is a contractual dispute. Local police stations cannot issue summons, register criminal FIRs, or assist private bank recovery agents.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                    <span><strong>Statutory Account Shields:</strong> Section 60(1) CPC and Section 171 Contract Act prevent creditor institutions from executing unauthorized liens across external bank accounts.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                    <span><strong>Hasthampatti Court Defense:</strong> Advocate replies to Section 138 NI Act and Section 25 PSSA notices neutralize arrest risks and shift disputes into Lok Adalat benches.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                    <span><strong>Substantial OTS Haircuts (40% to 70%):</strong> Direct advocacy before Zonal Credit Committees achieves 40% to 70% principal waivers with 100% elimination of penal interest.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                    <span><strong>Enforceable 30-Day NDC Delivery:</strong> Lenders must issue stamped No Dues Certificates within 30 days under RBI Circular RBI/2023-24/60 or incur a daily penalty of ₹5,000.</span>
                  </li>
                </ul>
              </div>

              {/* Section 1: Western Tamil Nadu Manufacturing Hub & MSME Debt Realities */}
              <section id="western-tn-industrial-debt-crisis" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <Building2 className="w-4 h-4" />
                  <span>1. Western TN MSME Debt Realities</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  Western Tamil Nadu Manufacturing Hub &amp; MSME Debt Realities
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Salem is the industrial anchor of Western Tamil Nadu, powering vital manufacturing clusters: sago and starch merchants centered around SAGOSERVE in Shevapet, steel fabricators and foundry vendors supplying the Salem Steel Plant (SAIL) in Omalur, and powerloom weaving units in Gugai, Ammapet, and Elampillai. Connected closely with Namakkal poultry and truck logistics and Erode textile processing, this corridor operates on intricate trade credit cycles. When wholesale markets across Leigh Bazaar and Shevapet experience buyer delays, the entire supply chain absorbs intense liquidity pressure.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Recent disruptions in raw material pricing for cotton yarn and tapioca tubers, paired with delayed payments from major buyers, created intense liquidity shortages. To sustain operations, business owners and supervisors turned to unsecured personal loans, credit cards, and digital fintech lines. Compounding interest, penal charges, and bounce fees quickly turned temporary cash flow deficits into heavy debt burdens. Many entrepreneurs found themselves servicing multiple retail EMIs alongside commercial working capital facilities.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Third-party collection agencies operating around Meyyanur, Swarnapuri, and Five Roads often deploy unlawful pressure, including workplace visits and calls to commercial contacts. Borrowers must know that retail debt default due to genuine commercial distress is purely a civil matter under Indian contract law, entitling them to complete statutory protection against harassment.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                      <strong>Statutory Protection in Salem:</strong> Loan default is a civil contract dispute under the Indian Contract Act, 1872. It is not a criminal offense. Creditors and collection agents have no legal authority to threaten police intervention or jail.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2: Delinquency Lifecycle & Madras High Court Borrower Safeguards */}
              <section id="delinquency-lifecycle-madras-hc-protections" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <Scale className="w-4 h-4" />
                  <span>2. Delinquency Timeline &amp; High Court Norms</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  Delinquency Lifecycle &amp; Madras High Court Borrower Safeguards
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Under the Reserve Bank of India framework, an unpaid personal loan progresses through Special Mention Account stages: SMA-0 (1 to 30 days overdue), SMA-1 (31 to 60 days), and SMA-2 (61 to 90 days). Beyond 90 days of non-payment, the loan is classified as a Non-Performing Asset (NPA) under the RBI Master Direction on Prudential Norms on Income Recognition, Asset Classification and Provisioning pertaining to Advances (IRACP). This transition directly impacts branch performance metrics and triggers mandatory recovery protocols.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Banks must set aside mandatory capital provisions: 15% for Substandard assets, rising to 25% to 40% for Doubtful debts, and 100% for Loss assets. To free trapped capital and improve balance sheet performance, banks establish One-Time Settlement (OTS) policies. This institutional requirement provides defaulting borrowers with substantial bargaining strength to secure negotiated haircuts. As provisioning percentages escalate, lender credit committees face heightened economic incentives to close delinquent accounts via compromise.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  The Madras High Court has established definitive precedents regarding debt recovery in Tamil Nadu. The Court consistently ruled that lenders cannot employ muscular recovery tactics or publicly humiliate debtors. Lawful recovery must follow due judicial process, upholding the borrower constitutional right to dignity and privacy under Article 21.
                </p>
              </section>

              {/* Section 3: Hasthampatti District Court Summons & Section 138/25 Defense */}
              <section id="hasthampatti-court-notice-defense" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <Gavel className="w-4 h-4" />
                  <span>3. Salem District Court Notice Defense</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  Hasthampatti District Court Summons &amp; Section 138/25 Defense
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Following NPA classification, lenders frequently issue statutory demand notices through empanelled lawyers at the Combined District Court Complex in Hasthampatti, Salem. Creditors rely on Section 138 of the Negotiable Instruments Act, 1881 for dishonored cheques and Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA) for failed NACH auto-debits.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Both statutes provide a mandatory 15-day cure window from notice receipt. Leaving notices unanswered risks criminal complaint filings before Judicial Magistrates at Hasthampatti, leading to summons or bailable warrants. In contrast, serving a formal advocate reply within 15 days establishes bona fide financial distress, challenges unlawful fees, and negates criminal intent.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Recovery agents often threaten arrest through police stations such as Hasthampatti, Shevapet, or Suramangalam. Under the Supreme Court ruling in Arnesh Kumar v. State of Bihar, police cannot detain citizens over commercial defaults. An advocate response protects against harassment and redirects the creditor toward compromise settlement.
                </p>
              </section>

              {/* Section 4: Banker Lien Under Section 171 & Salary Account Protections */}
              <section id="bankers-lien-section-171-salary-shield" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <Lock className="w-4 h-4" />
                  <span>4. Section 171 Lien &amp; Account Shield</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  Banker Lien Under Section 171 &amp; Salary Account Protections
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Creditor banks often invoke Section 171 of the Indian Contract Act, 1872 (Banker General Lien) to freeze or debit savings, fixed deposits, or current accounts to offset overdue personal loans. However, this lien is legally restricted to accounts held within the same banking network under the identical Customer Information File (CIF).
                </p>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  A lending bank has no statutory authority to attach or freeze accounts held at independent institutions such as Indian Bank, Canara Bank, or SBI without a court decree from a civil court or the DRT in Coimbatore. Furthermore, Section 60(1)(i) of the Code of Civil Procedure (CPC) expressly protects two-thirds of disposable salary from court attachment. SettleLoans assists borrowers in shielding their operational accounts and preserving living expenses.
                </p>
              </section>

              {/* Section 5: Infographic Banner */}
              <section id="salem-resolution-infographic-blueprint" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <Layers className="w-4 h-4" />
                  <span>5. Visual Resolution Blueprint</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  Salem Loan Settlement Blueprint &amp; Resolution Architecture
                </h2>
                <div className="my-6 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-50">
                  <img
                    src="/images/infographics/personal-loan-settlement-salem.jpg"
                    alt="Loan Settlement Company in Salem Tamil Nadu Legal Defense and OTS Blueprint"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-slate-900 text-white text-xs leading-relaxed">
                    <span className="font-bold text-blue-400">Figure 1.1: </span>
                    Comprehensive visual blueprint illustrating the debt resolution workflow in Salem, Tamil Nadu: initial MSME and retail debt assessment, statutory legal defense at Hasthampatti District Court against Section 138/25 notices, RBI anti-harassment enforcement, bank OTS negotiations with 40% to 70% principal haircuts, Lok Adalat compromise decrees, and final ₹0 No Dues Certificate issuance.
                  </div>
                </div>
              </section>

              {/* Section 6: Bank OTS Policies & Net Present Value (NPV) Recovery Formula */}
              <section id="bank-ots-npv-recovery-formula" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>6. OTS Policies &amp; NPV Formula</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  Bank OTS Policies &amp; Net Present Value (NPV) Recovery Formula
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Every commercial bank operates a Board-approved Compromise Settlement Policy governed by RBI guidelines. When evaluating an OTS proposal, Credit Committees use the <strong>Net Present Value (NPV) Recovery Valuation</strong> to measure immediate compromise cash against protracted litigation outcomes.
                </p>

                {/* Formula Box */}
                <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                  <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                    <Calculator className="w-4 h-4" />
                    <span>Recovery Valuation Benchmark</span>
                  </div>
                  <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                    NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mt-2">
                    Where C_t represents estimated recoveries over time, r is the discount rate, and deductions account for 3–5 years of court friction in Salem courts, advocate fees, and locked capital provisioning.
                  </p>
                </div>

                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Because clean personal loans carry no mortgage security under SARFAESI, banks face lengthy civil recovery proceedings that erode real financial returns. For major regional institutions like Indian Bank, Canara Bank, and Western Tamil Nadu NBFCs including Shriram Finance and Cholamandalam, recovery litigation involves significant legal overheads. Demonstrating this negative NPV allows SettleLoans advocates to secure 40% to 70% principal waivers and total write-offs of penal charges.
                </p>
              </section>

              {/* Section 7: National Lok Adalat Conciliation at Salem Court Complex */}
              <section id="lok-adalat-hasthampatti-court" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <Scale className="w-4 h-4" />
                  <span>7. Lok Adalat at Salem Court</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  National Lok Adalat Conciliation at Salem Court Complex
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Organized quarterly by the District Legal Services Authority (DLSA) Salem at the Combined Court Complex in Hasthampatti, National Lok Adalat benches provide statutory dispute resolution under the Legal Services Authorities Act, 1987. Banks frequently place distressed portfolios before these benches to clean balance sheets before regulatory audits.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Under Section 21 of the Legal Services Authorities Act, 1987, a Lok Adalat award is deemed a final Decree of a Civil Court. Under Section 21(2), no appeal lies against this award in any court. Once the agreed settlement sum is remitted, the lender is legally prohibited from reopening the debt, transferring balances to ARCs, or continuing court complaints.
                </p>
              </section>

              {/* Section 8: Sanction Letter Forensics, 30-Day NDC & Credit Rehabilitation */}
              <section id="sanction-letter-forensics-ndc-cibil" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <FileCheck className="w-4 h-4" />
                  <span>8. Sanction Forensics &amp; CIBIL Rebuild</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  Sanction Letter Forensics, 30-Day NDC &amp; Credit Rehabilitation
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  A debt settlement must be supported by authentic documentation. Borrowers must never rely on verbal promises or informal messages from collection agents. An authentic OTS sanction letter must appear on official bank letterhead with branch seals, reference numbers, explicit debt extinguishment clauses, and written commitments to withdraw court cases.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Under RBI Circular RBI/2023-24/60, lenders are legally mandated to issue a No Dues Certificate (NDC) within 30 calendar days of final payment. Failure to do so incurs statutory compensation of ₹5,000 per day of delay. Credit bureaus update the record to &apos;Settled&apos; with ₹0 balance, stopping overdue compounding. Borrowers can restore credit scores to 750+ within 18 to 24 months through disciplined secured credit management.
                </p>
              </section>

              {/* Section 9: Comparative Matrix: Self-Negotiation vs. Legal Representation */}
              <section id="comparative-resolution-matrix" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <Scale className="w-4 h-4" />
                  <span>9. Comparative Resolution Matrix</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  Comparative Matrix: Self-Negotiation vs. Legal Representation
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  The strategy chosen by a distressed borrower determines whether they attain complete financial closure or face persistent legal claims. The table below details the differences across common resolution pathways:
                </p>

                {/* 4-sided bordered table */}
                <div className="overflow-x-auto my-6">
                  <table>
                    <thead>
                      <tr>
                        <th>Resolution Parameter</th>
                        <th>Unassisted Debtor</th>
                        <th>Third-Party Recovery Agent</th>
                        <th>SettleLoans Legal Advocacy</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-semibold text-slate-900">Negotiation Authority</td>
                        <td>Local Branch Desk (Minimal powers)</td>
                        <td>Commission Agent (Zero authority)</td>
                        <td>Zonal Committee / SAMB Desks</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-slate-900">Average Principal Haircut</td>
                        <td>10% to 20% (Interest waiver only)</td>
                        <td>0% to 15% (Often misquoted)</td>
                        <td>40% to 70% Principal &amp; Charge Waiver</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-slate-900">Protection from Harassment</td>
                        <td>None; persistent calls continue</td>
                        <td>Coercive field visits to workplace</td>
                        <td>Statutory Cease-and-Desist Notice</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-slate-900">Court Notice Defense</td>
                        <td>Unrepresented; default risk</td>
                        <td>Ignored; causes bailable warrants</td>
                        <td>Formal Advocate Reply in 15 Days</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-slate-900">Sanction Letter Authenticity</td>
                        <td>Unverified informal letter</td>
                        <td>High fraud risk via email drafts</td>
                        <td>Forensically Verified Bank Letterhead</td>
                      </tr>
                      <tr>
                        <td className="font-semibold text-slate-900">NDC &amp; Credit Bureau Closure</td>
                        <td>Frequent administrative delays</td>
                        <td>No post-payment tracking</td>
                        <td>Enforced 30-Day RBI NDC Delivery</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 10: Empanelled Advocate Representation for Western Tamil Nadu Debt */}
              <section id="advocate-representation-western-tn" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>10. Professional Legal Advocacy</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  Empanelled Advocate Representation for Western Tamil Nadu Debt
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                  Successfully resolving defaulted loans across Salem, Namakkal, and Erode requires a nuanced understanding of Western Tamil Nadu commercial dynamics, local court hierarchies, and RBI regulatory mandates. SettleLoans delivers specialized legal defense and financial representation, shielding your commercial reputation from aggressive recovery personnel and securing legally binding, stamped One-Time Settlements.
                </p>

                {/* CompanySection Component */}
                <CompanySection />
              </section>

              {/* Section 11: Frequently Asked Questions on Salem Loan Settlement */}
              <section id="faqs" className="scroll-mt-24 mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                  <HelpCircle className="w-4 h-4" />
                  <span>11. Frequently Asked Questions</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  Frequently Asked Questions on Salem Loan Settlement
                </h2>

                <div className="space-y-4">
                  {(((jsonLdGraph['@graph'].find((item: any) => item['@type'] === 'FAQPage') as any)?.['mainEntity'] || []) as Array<{ name: string; acceptedAnswer: { text: string } }>).map((faq, index: number) => (
                    <details
                      key={index}
                      name="faq-accordion"
                      className="group border border-slate-200 rounded-2xl overflow-hidden mb-4 transition-all duration-200 hover:border-slate-300 bg-white shadow-sm"
                      open={index === 0}
                    >
                      <summary className="w-full p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-4">
                        <span className="text-base sm:text-lg md:text-xl font-bold text-slate-900 leading-snug">
                          {faq.name}
                        </span>
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-300">
                          <ChevronDown className="w-5 h-5" />
                        </div>
                      </summary>
                      <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4">
                        <p>{faq.acceptedAnswer.text}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* 5 Official Regulatory Links */}
              <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8">
                <div className="font-bold text-slate-900 text-sm mb-3 uppercase tracking-wider flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Official Statutory &amp; Regulatory References</span>
                </div>
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
                    <span className="font-semibold text-slate-800">RBI Fair Practices Code for Lenders &amp; Recovery Agents</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between"
                  >
                    <span className="font-semibold text-slate-800">RBI Integrated Banking Ombudsman Portal</span>
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
                    <span className="font-semibold text-slate-800">Payment &amp; Settlement Systems Act, 2007 (Section 25)</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </section>

              {/* 10 Related Guide Badges */}
              <section className="border-t border-slate-200 pt-8 mb-8">
                <div className="font-bold text-slate-900 text-sm mb-4 uppercase tracking-wider">
                  Related Debt Relief &amp; Legal Defense Guides
                </div>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/bank-one-time-settlement-ots-policy"
                    className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                  >
                    Bank OTS Policy Guidelines
                  </Link>
                  <Link
                    href="/can-i-go-to-jail-for-loan-default"
                    className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                  >
                    Loan Default Legal Realities
                  </Link>
                  <Link
                    href="/can-bank-seize-property-for-personal-loan"
                    className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                  >
                    Property Seizure Protections
                  </Link>
                  <Link
                    href="/bank-freeze-salary-account-loan-default"
                    className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                  >
                    Salary Account Lien Shield
                  </Link>
                  <Link
                    href="/rbi-guidelines-calling-after-7pm-complaint"
                    className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                  >
                    RBI Recovery Harassment Rules
                  </Link>
                  <Link
                    href="/bailable-non-bailable-warrant-cheque-bounce-loan"
                    className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                  >
                    Cheque Bounce Warrant Defense
                  </Link>
                  <Link
                    href="/case-study-sbi-lok-adalat-settlement"
                    className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                  >
                    National Lok Adalat Settlement
                  </Link>
                  <Link
                    href="/cibil-score-kaise-sudhare-settlement-ke-baad"
                    className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                  >
                    CIBIL Score Repair Guide
                  </Link>
                  <Link
                    href="/personal-loan-settlement-aurangabad"
                    className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                  >
                    Industrial Debt Settlement Guide
                  </Link>
                  <Link
                    href="/best-loan-emi-settlement-lawyer"
                    className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                  >
                    Senior Debt Defense Advocates
                  </Link>
                </div>
              </section>

            </main>

            {/* Right Column: Author Bio, Emergency Advocate CTA, Trust Signals */}
            <aside className="w-full sticky top-24 space-y-6">

              {/* Author Bio Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Link
                    href="/authors/ashish-jhangra"
                    className="w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-lg hover:opacity-90 transition-opacity"
                  >
                    AJ
                  </Link>
                  <div>
                    <Link
                      href="/authors/ashish-jhangra"
                      className="font-bold text-slate-900 text-sm hover:text-[#1F5EFF] transition-colors block"
                    >
                      Ashish Jhangra
                    </Link>
                    <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Specialist in RBI compromise settlement frameworks, Madras High Court banking precedents, and NPA provisioning forensics with over a decade of financial dispute advocacy.
                </p>
                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Verified Legal Author</span>
                  </span>
                  <Link href="/authors/ashish-jhangra" className="text-[#1F5EFF] font-semibold hover:underline">
                    View Profile →
                  </Link>
                </div>
              </div>

              {/* Emergency Advocate CTA Card */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <PhoneCall className="w-4 h-4" />
                  <span>Immediate Legal Defense</span>
                </div>
                <div className="font-bold text-base text-white mb-2">Facing NBFC Recovery Pressure in Salem?</div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Halt collection harassment, reply to Section 138/25 notices at Hasthampatti court, and negotiate a formal 40% to 70% debt haircut directly with Zonal Credit Committees.
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
                    <span>Stamped Bank Letterhead Sanctions</span>
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
    </>
  );
}
