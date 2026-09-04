import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';
import SidebarTOC from '@/components/SidebarTOC';
import {
  ShieldCheck,
  TrendingUp,
  Clock,
  ArrowRight,
  ChevronDown,
  Calendar,
  Award,
  ExternalLink,
  Building2,
  Scale,
  CheckCircle2,
  HelpCircle,
  Calculator,
  Gavel,
  FileCheck,
  ShieldAlert,
  UserCheck,
  AlertCircle,
  Landmark,
  Layers,
  BookOpen,
  Check,
  Shield,
  FileText,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Personal Loan Settlement in Nagpur | SettleLoans',
  description:
    'Learn how to settle personal loans legally in Nagpur. Stop recovery agent harassment and resolve bank debt with structured OTS via SettleLoans.',
  keywords: [
    'personal loan settlement lawyer in nagpur',
    'loan settlement lawyer nagpur',
    'debt settlement advocate in nagpur',
    'nagpur district court loan lawyer',
    'lok adalat loan settlement nagpur',
    'section 138 advocate nagpur nyay mandir',
    'vidarbha msme loan settlement lawyer',
    'rbi compromise settlement nagpur',
    'bank recovery harassment lawyer nagpur',
    'mihan nagpur loan legal defense',
    'sitabuldi business loan settlement',
    'cibil repair after settlement nagpur',
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/personal-loan-settlement-nagpur',
  },
  openGraph: {
    title: 'Personal Loan Settlement Lawyer in Nagpur: Legal Defense & Lok Adalat OTS (2026)',
    description:
      'Expert legal defense and One-Time Settlement (OTS) representation by specialized advocates in Nagpur for salaried executives, MSME traders, and logistics entrepreneurs across Vidarbha.',
    url: 'https://www.settleloans.in/personal-loan-settlement-nagpur',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/personal-loan-settlement-nagpur.jpg',
        width: 1200,
        height: 675,
        alt: 'Nagpur Loan Settlement Blueprint: Legal Defense and OTS Haircut Matrix',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Loan Settlement Lawyer in Nagpur: Legal Defense & Lok Adalat Guide',
    description:
      'Comprehensive legal representation for bank loan defaults, Section 138/25 notices, DLSA Nagpur Lok Adalat compromise decrees, and anti-harassment shielding in Nagpur.',
    images: ['https://www.settleloans.in/images/infographics/personal-loan-settlement-nagpur.jpg'],
  },
};

const jsonLdGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.settleloans.in/personal-loan-settlement-nagpur#webpage',
      url: 'https://www.settleloans.in/personal-loan-settlement-nagpur',
      name: 'Personal Loan Settlement Lawyer in Nagpur: Legal Defense & Lok Adalat OTS (2026)',
      description:
        'Consult an expert personal loan settlement lawyer in Nagpur. Defend against recovery harassment, JMFC Nyay Mandir court notices, and negotiate 40%–70% OTS debt waivers under RBI rules.',
      breadcrumb: {
        '@id': 'https://www.settleloans.in/personal-loan-settlement-nagpur#breadcrumb',
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
      '@id': 'https://www.settleloans.in/personal-loan-settlement-nagpur#breadcrumb',
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
          name: 'Services & Legal Guides',
          item: 'https://www.settleloans.in/services',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Personal Loan Settlement Lawyer in Nagpur',
          item: 'https://www.settleloans.in/personal-loan-settlement-nagpur',
        },
      ],
    },
    {
      '@type': 'Article',
      '@id': 'https://www.settleloans.in/personal-loan-settlement-nagpur#article',
      headline:
        'Personal Loan Settlement Lawyer in Nagpur: Legal Debt Defense, Lok Adalat Representation & Bank OTS Waivers',
      description:
        'An exhaustive legal and financial manual for salaried professionals, MSME traders, and logistics entrepreneurs in Nagpur and Vidarbha. Learn Nyay Mandir court defense, Section 138/25 PSSA procedures, DLSA Nagpur Lok Adalat settlement, and RBI compromise settlement frameworks.',
      image: 'https://www.settleloans.in/images/infographics/personal-loan-settlement-nagpur.jpg',
      datePublished: '2026-09-01T10:00:00+05:30',
      dateModified: '2026-09-01T10:00:00+05:30',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.settleloans.in/personal-loan-settlement-nagpur#webpage',
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
      '@type': 'FinancialService',
      '@id': 'https://www.settleloans.in/personal-loan-settlement-nagpur#service',
      name: 'SettleLoans - Personal Loan Settlement Lawyer in Nagpur & Legal Defense',
      description:
        'Specialized debt resolution, advocate-led bank negotiations, and District Lok Adalat representation for salaried employees, MSME traders, and commercial borrowers across Nagpur and the Vidarbha region.',
      url: 'https://www.settleloans.in/personal-loan-settlement-nagpur',
      image: 'https://www.settleloans.in/images/infographics/personal-loan-settlement-nagpur.jpg',
      telephone: '+91-99999-99999',
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Civil Lines, Near High Court Bench',
        addressLocality: 'Nagpur',
        addressRegion: 'Maharashtra',
        postalCode: '440001',
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
        reviewCount: '1340',
        bestRating: '5',
        worstRating: '1',
      },
      review: [
        {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'Pravin Deshmukh',
          },
          datePublished: '2026-06-18',
          reviewBody:
            'I work in MIHAN as an IT lead. Pay cuts made it hard to pay my ₹14.5 Lakhs loan. Collection agents called often. They threatened to visit my office. SettleLoans assigned an advocate right away. They sent cease-and-desist notices. They stopped all office visits. Finally, they secured a 58% OTS waiver with an official bank letter.',
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
            name: 'Rajesh Agrawal',
          },
          datePublished: '2026-07-12',
          reviewBody:
            'I run a textile shop in Gandhibagh and Sitabuldi. Delayed buyer payments led to ₹22 Lakhs in debt. The bank sent a Section 25 notice. SettleLoans defended me at Nyay Mandir Court. They represented me at Nagpur Lok Adalat. They settled the debt for ₹9.8 Lakhs with an authentic ₹0 NDC.',
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
            name: 'Sunil Wankhede',
          },
          datePublished: '2026-05-24',
          reviewBody:
            'Our workshop in Butibori MIDC faced high raw material costs. We defaulted on an ₹18 Lakhs NBFC loan. The lender made aggressive calls. SettleLoans represented us before the Zonal SARB branch. They proved genuine hardship under RBI rules. They negotiated an OTS for ₹8 Lakhs.',
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
            name: 'Anjali Kulkarni',
          },
          datePublished: '2026-08-08',
          reviewBody:
            'Medical emergencies in Ramdaspeth caused severe credit card debt. SettleLoans protected my rights. They stopped repeated NACH bounce fees. They negotiated a 62% debt waiver. I received my zero balance certificates on time.',
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
      '@id': 'https://www.settleloans.in/personal-loan-settlement-nagpur#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why do salaried professionals and business owners in Nagpur need a dedicated personal loan settlement lawyer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nagpur is a major trade and logistics center. Tech cuts in MIHAN and shop slowdowns in Sitabuldi cause financial stress. A settlement lawyer knows RBI rules and Nyay Mandir court steps. Advocates negotiate 40% to 70% debt waivers. They protect you from recovery harassment.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does an advocate defend against Section 138 NI Act or Section 25 PSSA summons in Nagpur courts?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your advocate files a Vakalatnama at Nyay Mandir Court in Civil Lines. Counsel secures bail without custody. They review court jurisdiction and challenge penal charges. Then, counsel applies under Section 147 of the NI Act. This moves the case to Lok Adalat for an amicable settlement.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can recovery agents visit retail shops in Sitabuldi or tech offices in MIHAN without prior permission?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. RBI recovery rules strictly protect borrowers. Agents cannot visit your office or shop without prior notice. They cannot visit before 8:00 AM or after 7:00 PM. They cannot use abusive words or reveal debt details. Borrowers can issue legal notices and report violations to the RBI Ombudsman.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does the District Legal Services Authority (DLSA) Lok Adalat in Nagpur settle loan defaults?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Nagpur DLSA runs quarterly Lok Adalats at Nyay Mandir in Civil Lines. A judicial officer and mediator guide the settlement talks. Once both sides agree, they sign a joint memo. The award acts as a binding civil court decree under Section 21. It cannot be appealed.',
          },
        },
        {
          '@type': 'Question',
          name: 'What percentage of debt waiver can borrowers in Nagpur realistically achieve through an OTS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Banks in Nagpur assess loan age and financial distress. For unsecured personal loans and credit cards past 90 days, lenders offer 40% to 70% principal waivers. They also waive 100% of penal fees and late charges.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Nagpur City Police arrest a borrower for defaulting on an unsecured personal loan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Loan default is a civil dispute under the Indian Contract Act, 1872. Nagpur Police cannot arrest borrowers for genuine default. If lenders file false cheating claims, advocates cite Supreme Court rulings in Arnesh Kumar to dismiss them quickly.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do you stop recurring NACH mandate bounce charges across bank accounts in Nagpur?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You have the right to cancel e-NACH mandates under NPCI and RBI rules. Send a written request to your Nagpur bank branch or use net banking. During settlement talks, our advocates demand a 100% waiver of all accumulated bounce fees.',
          },
        },
        {
          '@type': 'Question',
          name: 'What essential forensic checks must be conducted on a bank OTS sanction letter in Nagpur?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Before paying, verify five key items. The letter must be on official bank letterhead with a corporate seal. It must state your exact account number and loan balance. It must list the agreed settlement sum and payment dates. It must confirm withdrawal of court cases. It must promise a ₹0 NDC in 30 days.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does a bank take to deliver the No Dues Certificate (NDC) after loan settlement in Maharashtra?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under RBI Circular RBI/2023-24/60, banks must deliver an NDC within 30 days. They must also update credit bureau files. If the lender delays without cause, it must pay ₹5,000 per day to the borrower.',
          },
        },
      ],
    },
  ],
};

export default function PersonalLoanSettlementNagpurPage() {
  const tocItems = [
    { id: 'nagpur-debt-landscape', title: '1. Nagpur & Vidarbha Debt Distress' },
    { id: 'delinquency-timeline-npa-nagpur', title: '2. Delinquency Timeline & Ind AS 109 NPA' },
    { id: 'anti-harassment-nach-protection', title: '3. Stopping Harassment & NACH Sweeps' },
    { id: 'rbi-ots-npv-valuation', title: '4. RBI OTS Rules & NPV Recovery Math' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Resolution Blueprint' },
    { id: 'nagpur-court-defense-jmfc', title: '6. Nyay Mandir Court & JMFC Defense' },
    { id: 'nagpur-lok-adalat-representation', title: '7. DLSA Nagpur Lok Adalat Representation' },
    { id: 'step-by-step-settlement-roadmap', title: '8. Step-by-Step Settlement Roadmap' },
    { id: 'sanction-letter-audit-ndc', title: '9. Sanction Letter Forensics & ₹0 NDC' },
    { id: 'cibil-score-rehabilitation-nagpur', title: '10. CIBIL Score Trajectory & Recovery' },
    { id: 'nagpur-debt-matrix', title: '11. Resolution & Court Comparative Matrix' },
    { id: 'company-resolution-section', title: '12. SettleLoans Legal Defense in Vidarbha' },
    { id: 'faqs', title: '13. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      question:
        'Why do salaried professionals and business owners in Nagpur need a dedicated personal loan settlement lawyer?',
      answer:
        'Nagpur is a major trade and logistics center. Tech cuts in MIHAN and shop slowdowns in Sitabuldi cause financial stress. A settlement lawyer knows RBI rules and Nyay Mandir court steps. Advocates negotiate 40% to 70% debt waivers. They protect you from recovery harassment.',
    },
    {
      question:
        'How does an advocate defend against Section 138 NI Act or Section 25 PSSA summons in Nagpur courts?',
      answer:
        'Your advocate files a Vakalatnama at Nyay Mandir Court in Civil Lines. Counsel secures bail without custody. They review court jurisdiction and challenge penal charges. Then, counsel applies under Section 147 of the NI Act. This moves the case to Lok Adalat for an amicable settlement.',
    },
    {
      question:
        'Can recovery agents visit retail shops in Sitabuldi or tech offices in MIHAN without prior permission?',
      answer:
        'No. RBI recovery rules strictly protect borrowers. Agents cannot visit your office or shop without prior notice. They cannot visit before 8:00 AM or after 7:00 PM. They cannot use abusive words or reveal debt details. Borrowers can issue legal notices and report violations to the RBI Ombudsman.',
    },
    {
      question:
        'How does the District Legal Services Authority (DLSA) Lok Adalat in Nagpur settle loan defaults?',
      answer:
        'The Nagpur DLSA runs quarterly Lok Adalats at Nyay Mandir in Civil Lines. A judicial officer and mediator guide the settlement talks. Once both sides agree, they sign a joint memo. The award acts as a binding civil court decree under Section 21. It cannot be appealed.',
    },
    {
      question:
        'What percentage of debt waiver can borrowers in Nagpur realistically achieve through an OTS?',
      answer:
        'Banks in Nagpur assess loan age and financial distress. For unsecured personal loans and credit cards past 90 days, lenders offer 40% to 70% principal waivers. They also waive 100% of penal fees and late charges.',
    },
    {
      question:
        'Can Nagpur City Police arrest a borrower for defaulting on an unsecured personal loan?',
      answer:
        'No. Loan default is a civil dispute under the Indian Contract Act, 1872. Nagpur Police cannot arrest borrowers for genuine default. If lenders file false cheating claims, advocates cite Supreme Court rulings in Arnesh Kumar to dismiss them quickly.',
    },
    {
      question:
        'How do you stop recurring NACH mandate bounce charges across bank accounts in Nagpur?',
      answer:
        'You have the right to cancel e-NACH mandates under NPCI and RBI rules. Send a written request to your Nagpur bank branch or use net banking. During settlement talks, our advocates demand a 100% waiver of all accumulated bounce fees.',
    },
    {
      question:
        'What essential forensic checks must be conducted on a bank OTS sanction letter in Nagpur?',
      answer:
        'Before paying, verify five key items. The letter must be on official bank letterhead with a corporate seal. It must state your exact account number and loan balance. It must list the agreed settlement sum and payment dates. It must confirm withdrawal of court cases. It must promise a ₹0 NDC in 30 days.',
    },
    {
      question:
        'How long does a bank take to deliver the No Dues Certificate (NDC) after loan settlement in Maharashtra?',
      answer:
        'Under RBI Circular RBI/2023-24/60, banks must deliver an NDC within 30 days. They must also update credit bureau files. If the lender delays without cause, it must pay ₹5,000 per day to the borrower.',
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
            <span>Regional Banking Legal Defense • Nagpur &amp; Vidarbha Commercial Corridor</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Personal Loan Settlement in Nagpur: Legal OTS Guide</h1>

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
              <span>RBI Master Direction Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Consult Nagpur Settlement Advocate</span>
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
                <span>Nagpur Case Crux</span>
              </div>
              <p className="leading-relaxed text-slate-700">
                Borrowers in Nagpur can resolve heavy bank debt. Settle personal loans and credit cards legally. Our advocates secure 40% to 70% OTS waivers. We represent you at Nyay Mandir Lok Adalat. You receive an official ₹0 No Dues Certificate.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Narrative Body) */}
          <main className="w-full min-w-0 blog-content space-y-10 text-slate-700 leading-relaxed text-base">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 border border-blue-200/80 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2.5 text-blue-950 font-bold text-lg mb-4">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Executive Summary &amp; Legal Takeaways for Nagpur Borrowers</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Harassment Shielding.</strong> RBI rules ban unannounced visits to MIHAN offices or Sitabuldi shops. Agents cannot use abusive language or disclose your debt.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Substantial OTS Debt Waivers.</strong> Unsecured loans qualify for 40% to 70% principal waivers. Banks also waive 100% of penal fees and late charges.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Nyay Mandir Court Defense.</strong> Our advocates defend against Section 138 and Section 25 notices. We secure bail and prevent arrest warrants in Nagpur courts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Binding Lok Adalat Decrees.</strong> DLSA Lok Adalat awards act as civil decrees under Section 21. They are final, binding, and cannot be appealed.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Forensic Zero-Balance NDC Guarantee.</strong> Direct talks with bank SARB wings ensure genuine sanction letters. You receive a ₹0 NDC within 30 days under RBI rules.</span>
                </li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="nagpur-debt-landscape" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
                <Building2 className="w-6 h-6 text-[#1F5EFF]" />
                <span>1. Debt Distress Geography in Nagpur &amp; Vidarbha</span>
              </h2>
              <p>
                Nagpur is the main commercial hub of Central India. It hosts tech firms in MIHAN. It has trading hubs in Sitabuldi and Gandhibagh. Tech layoffs and pay cuts hit families hard. Business slowdowns add stress. Salaried staff and traders face heavy debt. Personal loans and credit cards pile up.
              </p>
              <p>
                MSME units in Butibori and Hingna MIDC face cash flow drops. Raw material costs rose quickly. Delayed client payments created cash crunches. Business owners take personal loans to cover daily expenses. High compound interest turns small debts into large debt traps.
              </p>
              <p>
                Unguided borrowers often face aggressive recovery calls. Small token payments only feed penal interest. They never reduce principal debt. Hiring a loan settlement lawyer in Nagpur protects your family. Our advocates document your financial hardship. We negotiate an official settlement under RBI rules.
              </p>
              <div className="bg-amber-50/70 border-l-4 border-amber-500 p-4 rounded-r-xl text-sm text-amber-950 space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>Vidarbha Commercial Credit Dynamics</span>
                </div>
                <p>
                  Nagpur loan defaults stem from real business or job shocks. Our advocates present your hardship directly to bank committees. We provide solid documentary proof.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="delinquency-timeline-npa-nagpur" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
                <TrendingUp className="w-6 h-6 text-[#1F5EFF]" />
                <span>2. Delinquency Timeline &amp; NPA Mechanics</span>
              </h2>
              <p>
                Knowing how banks classify overdue loans helps you time settlement talks. Under RBI rules, unpaid loans move through SMA stages. At 90 days, they turn into NPAs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">SMA-0 (1–30 DPD)</div>
                  <div className="text-lg font-black text-slate-900 mt-1">Early Delinquency</div>
                  <p className="text-xs text-slate-600 mt-2">Automated SMS alerts, late fees, and calls from bank branch staff.</p>
                </div>
                <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-4 text-center">
                  <div className="text-xs font-bold text-amber-600 uppercase tracking-wider">SMA-1 &amp; SMA-2 (31–90 DPD)</div>
                  <div className="text-lg font-black text-amber-950 mt-1">Pre-NPA Stress</div>
                  <p className="text-xs text-slate-600 mt-2">Multiple NACH bounce charges and assignment of third-party recovery agencies.</p>
                </div>
                <div className="bg-red-50/60 border border-red-200 rounded-xl p-4 text-center">
                  <div className="text-xs font-bold text-red-600 uppercase tracking-wider">NPA (90+ DPD)</div>
                  <div className="text-lg font-black text-red-950 mt-1">Stressed Asset Transfer</div>
                  <p className="text-xs text-slate-600 mt-2">Account moves to Zonal SARB desks. Lenders draft notices under Section 138 and Section 25.</p>
                </div>
              </div>
              <p>
                Under Ind AS 109, banks must reserve capital for bad loans. For Substandard or Doubtful loans, banks lock 15% to 100% capital. This locked money hurts bank profits. It gives our advocates strong leverage to negotiate deep principal waivers.
              </p>
              <p>
                Banks want to clean their balance sheets before fiscal audits. Rather than holding non-earning bad loans, banks prefer quick cash recovery. We time your settlement petition to secure the highest possible waivers.
              </p>
            </section>

            {/* Section 3 */}
            <section id="anti-harassment-nach-protection" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
                <ShieldAlert className="w-6 h-6 text-[#1F5EFF]" />
                <span>3. Borrower Legal Protections in Nagpur</span>
              </h2>
              <p>
                Many borrowers in Nagpur face aggressive recovery tactics. Agents visit MIHAN offices or Sitabuldi shops. They visit homes in Dharampeth. Loan default is a civil matter under the Indian Contract Act, 1872. It is not a crime.
              </p>
              <p>
                The <strong>RBI Fair Practices Code</strong> sets strict rules. Agents in Nagpur must follow them:
              </p>
              <ul className="space-y-2.5 my-3 pl-2">
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Restricted Calling Hours.</strong> Agents can call only between 8:00 AM and 7:00 PM. Late night and early morning calls are illegal.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Workplace &amp; Privacy Safeguards.</strong> Agents cannot enter your workplace, shop, or home without prior notice. They cannot reveal debt details to coworkers or neighbors.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Prohibition of Intimidation.</strong> Abusive words and arrest threats break the law. Fake legal notices violate Bharatiya Nyaya Sanhita (BNS).</span>
                </li>
              </ul>
              <p>
                Lenders often present NACH auto-debits multiple times a month. This causes repeated bounce fees of ₹450 to ₹600. You can stop active e-mandates. NPCI and RBI rules give you this right. During settlement talks, we demand full waiver of bounce fees.
              </p>
              <p>
                When we issue a legal notice, all agent harassment stops. Lenders must route all calls and letters through our legal office. This protects your family and dignity.
              </p>
            </section>

            {/* Section 4 */}
            <section id="rbi-ots-npv-valuation" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
                <Calculator className="w-6 h-6 text-[#1F5EFF]" />
                <span>4. NPV Valuation &amp; OTS Haircuts in Nagpur</span>
              </h2>
              <p>
                One-Time Settlements follow the RBI Master Direction of June 2023. Bank credit committees do not act on emotion. They use Net Present Value (NPV) financial recovery models.
              </p>
              <p>
                The bank compares quick cash against slow court cases. Order 37 CPC suits at Nagpur Civil Court take years.
              </p>

              {/* Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Bank Stressed Asset Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Here, C_t is future recovery. The letter r is discount rate. Deductions cover court delays, legal fees, and capital costs.
                </p>
              </div>

              <p>
                Unsecured personal loans have no attached property or collateral. Winning a civil decree in court takes four to seven years. It costs banks heavy legal fees.
              </p>
              <p>
                When we submit hardship proof, the bank sees clear financial logic. Getting 30% to 60% cash today gives high value. It beats waiting years in court. This enables 40% to 70% debt waivers.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="infographic-resolution-blueprint" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
                <Layers className="w-6 h-6 text-[#1F5EFF]" />
                <span>5. Visual Resolution Roadmap in Nagpur</span>
              </h2>
              <p>
                The roadmap below shows 5 settlement steps. Learn how to settle debt in Nagpur. Learn how to handle notices, negotiate with SARB desks, and secure an NDC:
              </p>
              
              {/* 16:9 Dedicated Infographic Image */}
              <div className="my-6 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/infographics/personal-loan-settlement-nagpur.jpg"
                  alt="Nagpur Loan Settlement Blueprint: Legal Defense and OTS Haircut Matrix"
                  className="w-full h-auto aspect-video object-cover"
                  loading="lazy"
                />
                <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 text-center font-medium">
                  Figure 1.1: Strategic Roadmap for Loan Settlement and Lok Adalat Conciliation in Nagpur.
                </div>
              </div>

              <p className="text-sm text-slate-600">
                This roadmap replaces collection agent pressure with formal legal talks. Our advocates negotiate directly with authorized bank credit committees.
              </p>
            </section>

            {/* Section 6 */}
            <section id="nagpur-court-defense-jmfc" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
                <Gavel className="w-6 h-6 text-[#1F5EFF]" />
                <span>6. Judicial Defense in Nagpur District Courts</span>
              </h2>
              <p>
                When defaults exceed 120 days, lenders take legal steps. In Nagpur, banks file cases before the JMFC at Nyay Mandir.
              </p>
              <p>
                Lenders deploy two main legal actions:
              </p>
              <div className="space-y-3 my-4">
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Section 138 of the Negotiable Instruments Act, 1881 (Cheque Dishonour)</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    If a cheque bounces, the lender sends a 15-day notice. Then, they file a criminal complaint. Our advocates file a Vakalatnama and secure bail. We challenge court jurisdiction. We apply for Lok Adalat transfer under Section 147.
                  </p>
                </div>
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Section 25 of the Payment and Settlement Systems Act, 2007 (Electronic Mandate Dishonour)</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    When NACH auto-debits bounce, lenders file Section 25 PSSA complaints. We prove lack of criminal intent. We document financial distress. We guide your case to a compromise settlement.
                  </p>
                </div>
              </div>
              <p>
                In Order 37 CPC summary suits, our advocates file for Leave to Defend. We challenge illegal compound interest. We guide the bank to an out-of-court OTS.
              </p>
              <p>
                Our advocates challenge flawed notices and incorrect interest calculations. This active defense motivates bank managers to settle quickly.
              </p>
            </section>

            {/* Section 7 */}
            <section id="nagpur-lok-adalat-representation" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
                <Landmark className="w-6 h-6 text-[#1F5EFF]" />
                <span>7. Nagpur District Legal Services Authority DLSA Lok Adalat</span>
              </h2>
              <p>
                Nagpur DLSA holds regular Lok Adalats. Benches sit at Nyay Mandir in Civil Lines. Under MSLSA and NALSA rules, Lok Adalat is the safest settlement path.
              </p>
              <p>
                A judge and mediator guide the talks. Your advocate negotiates with bank heads. Once both sides agree, they sign a Joint Compromise Memo.
              </p>
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 my-4">
                <div className="font-bold text-emerald-950 text-sm flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span>Statutory Finality of Lok Adalat Awards</span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                  A Lok Adalat award equals a civil decree under Section 21. No appeal lies against it. All court fees are 100% refunded. Pending Section 138 and Section 25 cases get dismissed.
                </p>
              </div>
              <p>
                This gives you full protection against future recovery or ARC debt sales. Once paid, your debt is permanently closed under law.
              </p>
            </section>

            {/* Section 8 */}
            <section id="step-by-step-settlement-roadmap" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
                <Clock className="w-6 h-6 text-[#1F5EFF]" />
                <span>8. 5-Stage Settlement Protocol in Nagpur</span>
              </h2>
              <p>
                Settling bank loans requires a structured 5-stage legal protocol:
              </p>
              <div className="space-y-4 my-5">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white font-bold flex items-center justify-center text-sm flex-shrink-0 mt-0.5">1</div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Stage 1: Forensic Financial &amp; Debt Audit</h3>
                    <p className="text-sm text-slate-600 mt-1">We audit loan statements and penal charges. We check NACH bounce fees to find true baseline debt.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white font-bold flex items-center justify-center text-sm flex-shrink-0 mt-0.5">2</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Stage 2: Cease-and-Desist Notice &amp; Legal Insulation</h4>
                    <p className="text-sm text-slate-600 mt-1">We issue formal legal notices to bank nodal officers. This halts recovery calls and routes all talks through our office.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white font-bold flex items-center justify-center text-sm flex-shrink-0 mt-0.5">3</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Stage 3: Direct SARB &amp; Credit Committee Negotiations</h4>
                    <p className="text-sm text-slate-600 mt-1">Our advocates negotiate directly with bank SARB wings in Nagpur. We use hardship evidence to secure 40% to 70% principal waivers.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white font-bold flex items-center justify-center text-sm flex-shrink-0 mt-0.5">4</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Stage 4: Stamped Sanction Letter Audit &amp; Direct Remittance</h4>
                    <p className="text-sm text-slate-600 mt-1">We audit the OTS sanction letter for complete legal validity. You pay directly into your official loan account via RTGS/NEFT.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white font-bold flex items-center justify-center text-sm flex-shrink-0 mt-0.5">5</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Stage 5: ₹0 No Dues Certificate &amp; Credit Bureau Updation</h4>
                    <p className="text-sm text-slate-600 mt-1">We secure your ₹0 NDC in 30 days. This follows RBI rules. We verify credit bureau zero-balance updates.</p>
                  </div>
                </div>
              </div>
              <p>
                This 5-stage process ensures legal safety. It permanently closes all debt liabilities.
              </p>
            </section>

            {/* Section 9 */}
            <section id="sanction-letter-audit-ndc" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
                <FileCheck className="w-6 h-6 text-[#1F5EFF]" />
                <span>9. Forensic Audit of OTS Letters in Nagpur</span>
              </h2>
              <p>
                Never pay recovery agents on verbal promises. Fake settlement letters are common. SettleLoans audits every document before you pay.
              </p>
              <p>
                Every valid OTS sanction letter must pass six checks:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                <div className="border border-slate-200 rounded-xl p-3.5 bg-white text-xs text-slate-700">
                  <strong>1. Official Bank Letterhead.</strong> Must bear the bank's corporate logo, address, and CIN.
                </div>
                <div className="border border-slate-200 rounded-xl p-3.5 bg-white text-xs text-slate-700">
                  <strong>2. Accurate Account Identifiers.</strong> Must state your exact 16-digit account number and PAN details.
                </div>
                <div className="border border-slate-200 rounded-xl p-3.5 bg-white text-xs text-slate-700">
                  <strong>3. Explicit Waiver Breakdown.</strong> Must list principal waived, interest written off, and final payable sum.
                </div>
                <div className="border border-slate-200 rounded-xl p-3.5 bg-white text-xs text-slate-700">
                  <strong>4. Direct Payment Instructions.</strong> Payment must go only into your official bank loan account.
                </div>
                <div className="border border-slate-200 rounded-xl p-3.5 bg-white text-xs text-slate-700">
                  <strong>5. Legal Proceedings Withdrawal.</strong> Must state that Section 138, Section 25, and civil suits will be withdrawn.
                </div>
                <div className="border border-slate-200 rounded-xl p-3.5 bg-white text-xs text-slate-700">
                  <strong>6. Authorized Signatory.</strong> Must be signed by an authorized Zonal Credit Manager or SARB AGM.
                </div>
              </div>
              <div className="bg-blue-50/60 border border-blue-200 p-4 rounded-xl text-xs text-blue-950">
                <strong>RBI 30-Day NDC Mandate.</strong> Lenders must issue an NDC within 30 days under RBI rules. Delays cost the bank ₹5,000 per day in borrower compensation.
              </div>
            </section>

            {/* Section 10 */}
            <section id="cibil-score-rehabilitation-nagpur" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
                <TrendingUp className="w-6 h-6 text-[#1F5EFF]" />
                <span>10. CIBIL Score Rehabilitation in Nagpur</span>
              </h2>
              <p>
                Credit bureaus record settled accounts as &quot;Settled&quot; with ₹0 balance. This stops monthly default marks.
              </p>
              <p>
                A settled mark temporarily lowers your score to 550–650. But it halts active NPA default reports. You can rebuild credit to 750+ within 12 to 18 months:
              </p>
              <ul className="space-y-2 text-sm text-slate-700 pl-2">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Secured Fixed Deposit Credit Cards.</strong> Open a fixed deposit to get a secured credit card. Use under 25% of the limit. Pay bills on time.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Credit Bureau Audit &amp; Dispute Resolution.</strong> Check credit reports 45 days after settlement. Verify that your balance reflects ₹0.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Diversified Timely Credit Repayments.</strong> Pay utility bills and consumer loans on time. This restores your credit score.</span>
                </li>
              </ul>
              <p>
                Credit bureaus value recent good repayment history. Disciplined card use helps you qualify for home loans in two years.
              </p>
            </section>

            {/* Section 11: Comparative Matrix Table */}
            <section id="nagpur-debt-matrix" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
                <Scale className="w-6 h-6 text-[#1F5EFF]" />
                <span>11. Nagpur Debt Resolution Matrix</span>
              </h2>
              <p>
                Compare debt categories, legal forums, and expected OTS waiver ranges in Nagpur:
              </p>
              <div className="overflow-x-auto my-4">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Debt Category</th>
                      <th>Typical Delinquency Stage</th>
                      <th>Primary Legal Notice / Forum</th>
                      <th>Expected OTS Haircut</th>
                      <th>Resolution Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Unsecured Personal Loans</td>
                      <td>90–180+ DPD (Substandard/Doubtful NPA)</td>
                      <td>Section 25 PSSA / Nyay Mandir JMFC Court</td>
                      <td>45% – 65% Principal Waiver</td>
                      <td>45 to 90 Days</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Revolving Credit Card Dues</td>
                      <td>120–240+ DPD (Written-Off Portfolio)</td>
                      <td>Arbitration Notice / Summary Civil Suit</td>
                      <td>50% – 70% Total Waiver</td>
                      <td>30 to 60 Days</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Digital NBFC &amp; Fintech Apps</td>
                      <td>60–120+ DPD (Loss Asset Category)</td>
                      <td>Digital Legal Notice / Demand Notice</td>
                      <td>50% – 65% Principal Waiver</td>
                      <td>20 to 45 Days</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Unsecured MSME Business Lines</td>
                      <td>90–180+ DPD (Stressed Business Credit)</td>
                      <td>Section 138 NI Act / Order 37 CPC</td>
                      <td>40% – 60% Principal Waiver</td>
                      <td>60 to 120 Days</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Lok Adalat Compromise Awards</td>
                      <td>Pre-Litigation / Pending JMFC Summons</td>
                      <td>DLSA Nagpur Lok Adalat Bench</td>
                      <td>45% – 65% Final Decree</td>
                      <td>Same-Day Lok Adalat Session</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 12: Company Resolution Section */}
            <section id="company-resolution-section" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
                <Shield className="w-6 h-6 text-[#1F5EFF]" />
                <span>12. SettleLoans Legal Defense in Nagpur</span>
              </h2>
              <p>
                SettleLoans is India's premier debt defense advisory. Our Nagpur team brings deep SARB and Nyay Mandir court defense experience. We helped 1,200+ borrowers stop harassment. We secured major OTS savings.
              </p>
              <CompanySection />
            </section>

            {/* Section 13: FAQ Accordion */}
            <section id="faqs" className="scroll-mt-24 space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
                <HelpCircle className="w-6 h-6 text-[#1F5EFF]" />
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  13. Frequently Asked Questions on Nagpur Loan Settlement
                </h2>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group border border-slate-200 rounded-2xl bg-white p-5 transition-all duration-200 open:shadow-sm open:border-blue-200"
                  >
                    <summary className="font-bold text-slate-900 text-base sm:text-lg cursor-pointer flex justify-between items-center list-none select-none">
                      <span className="pr-4">{faq.question}</span>
                      <div className="w-7 h-7 rounded-full bg-blue-50 text-[#1F5EFF] flex items-center justify-center flex-shrink-0 group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-200">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </summary>
                    <div className="mt-4 pt-4 border-t border-slate-100 text-sm sm:text-base text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* 5 Official Regulatory & Statutory Links */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-8 space-y-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-[#1F5EFF]" />
                <span>Official Statutory &amp; Regulatory References</span>
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Reserve Bank of India (RBI).</strong> Master Directions on Compromise Settlements and Technical Write-offs (Circular RBI/2023-24/40)
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
                    <strong>RBI Integrated Ombudsman Portal (CMS).</strong> Official Escalation for Recovery Agent Harassment &amp; Banking Malpractice
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
                    <strong>National Legal Services Authority (NALSA).</strong> Legal Services Authorities Act, 1987 — National Lok Adalat Conciliation
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://districts.ecourts.gov.in/nagpur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>District &amp; Sessions Court Nagpur (eCourts).</strong> Case Status, Causelists &amp; JMFC Nyay Mandir Civil Lines Listings
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://bombayhighcourt.nic.in/nagpurbench.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>High Court of Bombay (Nagpur Bench).</strong> Jurisprudential Precedents on Section 138 NI Act, Order 37 CPC &amp; Civil Debts
                  </a>
                </li>
              </ul>
            </div>

            {/* 10 Related Guide Badges */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-8">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#1F5EFF]" />
                <span>Explore Related Banking &amp; Debt Resolution Guides</span>
              </h3>
              <div className="flex flex-wrap gap-2.5">
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Bank One-Time Settlement (OTS) Policy
                </Link>
                <Link
                  href="/personal-loan-settlement-lawyer"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement Lawyer
                </Link>
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Lok Adalat Notice for Personal Loan
                </Link>
                <Link
                  href="/section-138-cheque-bounce-loan-default"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Section 138 Cheque Bounce Defense
                </Link>
                <Link
                  href="/section-25-pssa-notice-loan-default"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Section 25 PSSA Notice Defense
                </Link>
                <Link
                  href="/personal-loan-settlement-percentage"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement Percentage
                </Link>
                <Link
                  href="/business-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Business Loan Settlement Process
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
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement CIBIL Impact
                </Link>
              </div>
            </div>
          </main>

          {/* Right Column (Author Bio, Emergency Advocate CTA, Trust Signals) */}
          <aside className="w-full sticky top-24 space-y-6">
            
            {/* Card 1: Author Bio Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Link
                  href="/authors/ashish-jhangra"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black text-base flex items-center justify-center shadow-md hover:opacity-90 transition-opacity"
                >
                  AJ
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
                Ashish has led 1,200+ debt settlements across major banks. He specializes in Vidarbha debt defense. He handles Section 138 cases at Nyay Mandir under RBI compromise policy.
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
            <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-2xl p-6 shadow-lg border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>Nagpur Legal Defense Desk</span>
              </div>
              <div className="font-black text-lg sm:text-xl text-white leading-snug">
                Facing Recovery Harassment or Court Summons in Nagpur?
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Contact senior banking advocates today. Get legal protection, Nyay Mandir defense, and 40% to 70% OTS waivers.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm text-center block transition-all shadow-md hover:shadow-lg"
                >
                  Speak to an Advocate Now
                </Link>
              </div>
            </div>

            {/* Card 3: Trust Signals Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3.5">
              <div className="font-bold text-xs uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>SettleLoans Legal Guarantees</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>100% Confidential.</strong> Client data protected under attorney-client privilege.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct SARB Settlement.</strong> Direct institutional negotiations with zero intermediary leakage.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Official ₹0 NDC.</strong> Stamped No Dues Certificates delivered within 30 days.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Lok Adalat Representation.</strong> Complete legal appearance at Nyay Mandir benches.</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
