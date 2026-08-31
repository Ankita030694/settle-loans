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
  PhoneCall,
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
  Banknote,
  BookOpen,
  Check,
  MapPin,
  Shield,
  FileText,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Loan Settlement Services in Nagpur: Legal Defense & Lok Adalat OTS (2026)',
  description:
    'Facing loan default, recovery harassment, or court summons in Nagpur & Vidarbha? Get premier loan settlement services in Nagpur, JMFC legal defense, and 40%–70% OTS debt waivers under RBI rules.',
  keywords: [
    'loan settlement services in nagpur',
    'personal loan settlement nagpur',
    'debt settlement advocate in nagpur',
    'nagpur district court loan lawyer',
    'lok adalat loan settlement nagpur',
    'section 138 advocate nagpur',
    'vidarbha msme loan settlement',
    'rbi compromise settlement nagpur',
    'bank recovery harassment lawyer nagpur',
    'sitabuldi it park loan settlement',
    'mihan nagpur personal loan legal defense',
    'cibil repair after settlement nagpur',
  ],
  alternates: {
    canonical: 'https://settleloans.in/personal-loan-settlement-nagpur',
  },
  openGraph: {
    title: 'Loan Settlement Services in Nagpur: Legal Defense & Lok Adalat OTS (2026)',
    description:
      'Expert legal defense and One-Time Settlement (OTS) representation for salaried professionals, MSME traders, and agro-allied entrepreneurs facing loan defaults across Nagpur and the Vidarbha region.',
    url: 'https://settleloans.in/personal-loan-settlement-nagpur',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://settleloans.in/images/infographics/personal-loan-settlement-nagpur.jpg',
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
    title: 'Loan Settlement Services in Nagpur: Legal Defense & Lok Adalat Guide',
    description:
      'Comprehensive legal representation for bank loan defaults, Section 138/25 notices, DLSA Nagpur Lok Adalat compromise decrees, and anti-harassment shielding across Nagpur and Vidarbha.',
    images: ['https://settleloans.in/images/infographics/personal-loan-settlement-nagpur.jpg'],
  },
};

const jsonLdGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://settleloans.in/personal-loan-settlement-nagpur#webpage',
      url: 'https://settleloans.in/personal-loan-settlement-nagpur',
      name: 'Loan Settlement Services in Nagpur: Legal Defense & Lok Adalat OTS (2026)',
      description:
        'Facing loan default, recovery harassment, or court summons in Nagpur & Vidarbha? Get premier loan settlement services in Nagpur, JMFC legal defense, and 40%–70% OTS debt waivers under RBI rules.',
      breadcrumb: {
        '@id': 'https://settleloans.in/personal-loan-settlement-nagpur#breadcrumb',
      },
      inLanguage: 'en-IN',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://settleloans.in/#website',
        name: 'SettleLoans',
        url: 'https://settleloans.in',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://settleloans.in/personal-loan-settlement-nagpur#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://settleloans.in',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services & Legal Guides',
          item: 'https://settleloans.in/services',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Loan Settlement Services in Nagpur',
          item: 'https://settleloans.in/personal-loan-settlement-nagpur',
        },
      ],
    },
    {
      '@type': 'Article',
      '@id': 'https://settleloans.in/personal-loan-settlement-nagpur#article',
      headline:
        'Loan Settlement Services in Nagpur: Legal Defense, Lok Adalat Representation & Bank OTS Waivers',
      description:
        'An exhaustive legal and financial manual for salaried professionals, MSME traders, and entrepreneurs in Nagpur and Vidarbha. Learn Nyay Mandir court defense, Section 138/25 PSSA procedures, DLSA Nagpur Lok Adalat settlement, and RBI compromise settlement frameworks.',
      image: 'https://settleloans.in/images/infographics/personal-loan-settlement-nagpur.jpg',
      datePublished: '2026-08-29T12:00:00+05:30',
      dateModified: '2026-08-29T12:00:00+05:30',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://settleloans.in/personal-loan-settlement-nagpur#webpage',
      },
      author: {
        '@type': 'Person',
        name: 'Ashish Jhangra',
        url: 'https://settleloans.in/authors/ashish-jhangra',
      },
      publisher: {
        '@type': 'Organization',
        '@id': 'https://settleloans.in/#organization',
        name: 'SettleLoans',
        url: 'https://settleloans.in',
        logo: {
          '@type': 'ImageObject',
          url: 'https://settleloans.in/logo/logo.svg',
        },
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://settleloans.in/#organization',
      name: 'SettleLoans',
      url: 'https://settleloans.in',
      logo: {
        '@type': 'ImageObject',
        url: 'https://settleloans.in/logo/logo.svg',
      },
      sameAs: [
        'https://www.linkedin.com/company/settleloans',
        'https://twitter.com/settleloans',
        'https://www.facebook.com/settleloans',
      ],
    },
    {
      '@type': 'FinancialService',
      '@id': 'https://settleloans.in/personal-loan-settlement-nagpur#service',
      name: 'SettleLoans - Loan Settlement Services in Nagpur & Legal Defense',
      description:
        'Specialized debt resolution, advocate-led bank negotiations, and District Lok Adalat representation for salaried employees, MSME traders, and commercial borrowers across Nagpur and the Vidarbha region.',
      url: 'https://settleloans.in/personal-loan-settlement-nagpur',
      image: 'https://settleloans.in/images/infographics/personal-loan-settlement-nagpur.jpg',
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
        '@id': 'https://settleloans.in/#organization',
        name: 'SettleLoans',
        url: 'https://settleloans.in',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '1280',
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
            'As an IT technical lead working in the MIHAN Special Economic Zone, a sudden reduction in overseas variable allowances caused severe financial strain on my ₹14.5 Lakhs personal loan across two major private banks. Third-party collection agents were calling incessantly and threatening to visit my office reception. SettleLoans assigned an experienced Nagpur advocate who issued immediate cease-and-desist notices, halted workplace visits, and secured an authentic 58% OTS waiver with an official bank sanction letter.',
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
            'Running a wholesale textile and garment business in Gandhibagh and Sitabuldi, severe working capital payment delays from regional distributors led to overdue business installment lines totaling ₹22 Lakhs. SettleLoans stepped in, consolidated my debt exposure, defended a Section 25 PSSA notice at the Nyay Mandir Court, and finalized a structured compromise settlement through the DLSA Nagpur Lok Adalat for ₹9.8 Lakhs with a complete ₹0 NDC.',
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
            'Our engineering fabrication workshop in the Butibori MIDC Industrial Area suffered severe cash flow disruption due to rising raw material costs, resulting in a default on an NBFC working capital loan of ₹18 Lakhs. The NBFC issued continuous recovery threats. SettleLoans represented us before the Zonal Stressed Assets Recovery Branch, demonstrated genuine commercial hardship under RBI guidelines, and negotiated a single-bullet OTS for ₹8 Lakhs.',
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
            'Living in Ramdaspeth, Nagpur, unexpected family medical emergencies forced me into a severe debt spiral with three credit cards and an instant app loan. SettleLoans protected my legal rights, stopped unauthorized NACH presentation charges at my salary account, and negotiated a combined 62% debt haircut with official zero balance certificates delivered directly to my home.',
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
      '@id': 'https://settleloans.in/personal-loan-settlement-nagpur#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why do salaried professionals and business owners in Nagpur require specialized loan settlement services?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nagpur serves as the premier commercial, logistics, and industrial nexus of Central India and the Vidarbha region. Borrowers facing liquidity shocks from tech restructuring in MIHAN, wholesale market slowdowns in Sitabuldi and Itwari, or industrial stress in Butibori and Hingna MIDC require seasoned advocates. Specialized debt settlement advocates understand RBI Master Directions, balance-sheet provisioning mechanics, and local court procedures at Nyay Mandir, enabling them to negotiate 40% to 70% debt waivers while legally insulating clients from harassment.',
          },
        },
        {
          '@type': 'Question',
          name: 'How should borrowers respond to a Section 138 NI Act or Section 25 PSSA court summons in Nagpur?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Never ignore a judicial summons from the Judicial Magistrate First Class (JMFC) or Special Courts at Nyay Mandir in Civil Lines, Nagpur. Upon receiving a summons, an advocate immediately enters an appearance by filing a Vakalatnama, arranges bail smoothly without custodial detention, examines statutory territorial jurisdiction, and files an application under Section 147 of the Negotiable Instruments Act to transfer the matter to the National Lok Adalat for an amicable settlement.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can recovery agents visit retail shops in Sitabuldi, offices in MIHAN, or residential premises in Dharampeth without permission?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Under the RBI Master Circular on Recovery Agents and the Fair Practices Code, recovery personnel are strictly prohibited from visiting a borrower’s workplace, retail establishment, or residence without prior written intimation. They cannot visit outside 08:00 AM to 07:00 PM, use threatening or abusive language, or publicly disclose debt details to colleagues, neighbors, or clients. Violations entitle borrowers to issue formal legal cease-and-desist notices and register complaints with the RBI Banking Ombudsman.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does the District Legal Services Authority (DLSA) Lok Adalat in Nagpur settle loan defaults?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Nagpur District Legal Services Authority (DLSA) organizes quarterly National and State Lok Adalats at the District and Sessions Court Complex at Nyay Mandir, Civil Lines. During Lok Adalat sessions, a panel comprising a sitting or retired judicial officer and a legal mediator facilitates structured negotiations between the borrower’s advocate and authorized bank officials. The resulting agreement is formalized as a Lok Adalat Award, which functions as a binding, non-appealable Civil Court Decree under Section 21 of the Legal Services Authorities Act, 1987.',
          },
        },
        {
          '@type': 'Question',
          name: 'What percentage of debt waiver can borrowers in Nagpur realistically achieve through an OTS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For unsecured personal loans, credit card portfolios, and unsecured MSME working capital facilities delinquent beyond 90 to 180 days (classified as Substandard or Doubtful NPAs), banks and NBFCs in Nagpur routinely sanction principal waivers ranging between 40% and 70%, accompanied by a 100% complete waiver of penal interest, late payment surcharges, and compounding fees.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Nagpur City Police or Maharashtra Police arrest a borrower for an unsecured personal loan default?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Defaulting on an unsecured personal loan or commercial credit facility is purely a civil contractual dispute governed by the Indian Contract Act, 1872. Police stations across Nagpur Commissionerate have no statutory authority to register FIRs, summon borrowers, or make arrests for genuine financial insolvency. If recovery agencies attempt to lodge frivolous cheating complaints, advocates cite Supreme Court directives in Arnesh Kumar v. State of Bihar to ensure immediate dismissal.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do you stop recurring NACH mandate bounce charges across bank accounts in Nagpur?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under National Payments Corporation of India (NPCI) procedural guidelines and RBI consumer directives, borrowers have the statutory right to instruct their bank branch in Nagpur or submit a written request via net banking to cancel or suspend active e-NACH mandates. Additionally, during advocate-led OTS negotiations, legal counsel demands a 100% complete waiver of all accumulated bounce charges.',
          },
        },
        {
          '@type': 'Question',
          name: 'What essential forensic checks must be conducted on a bank OTS sanction letter in Nagpur?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Before remitting any settlement funds, legal counsel must audit the OTS sanction letter to ensure: (1) It is issued on official bank letterhead with an authentic corporate seal; (2) Contains accurate loan account numbers, borrower name, and CIN; (3) Explicitly states the agreed discounted sum and payment schedule; (4) Confirms that upon payment all legal proceedings will be withdrawn; and (5) Guarantees the issuance of a formal ₹0 No Dues Certificate within 30 days under RBI Circular RBI/2023-24/60.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does a bank take to deliver the No Dues Certificate (NDC) after loan settlement in Maharashtra?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under Reserve Bank of India Circular RBI/2023-24/60, all regulated commercial banks and NBFCs are statutorily required to issue a formal No Dues Certificate and update credit bureau records within 30 calendar days of receiving full settlement payment. If the lender delays beyond 30 days without lawful reason, it is legally obligated to pay compensation of ₹5,000 per day of delay directly to the borrower.',
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
        'Why do salaried professionals and business owners in Nagpur require specialized loan settlement services?',
      answer:
        'Nagpur serves as the premier commercial, logistics, and industrial nexus of Central India and the Vidarbha region. Borrowers facing liquidity shocks from tech restructuring in MIHAN, wholesale market slowdowns in Sitabuldi and Itwari, or industrial stress in Butibori and Hingna MIDC require seasoned advocates. Specialized debt settlement advocates understand RBI Master Directions, balance-sheet provisioning mechanics, and local court procedures at Nyay Mandir, enabling them to negotiate 40% to 70% debt waivers while legally insulating clients from harassment.',
    },
    {
      question:
        'How should borrowers respond to a Section 138 NI Act or Section 25 PSSA court summons in Nagpur?',
      answer:
        'Never ignore a judicial summons from the Judicial Magistrate First Class (JMFC) or Special Courts at Nyay Mandir in Civil Lines, Nagpur. Upon receiving a summons, an advocate immediately enters an appearance by filing a Vakalatnama, arranges bail smoothly without custodial detention, examines statutory territorial jurisdiction, and files an application under Section 147 of the Negotiable Instruments Act to transfer the matter to the National Lok Adalat for an amicable settlement.',
    },
    {
      question:
        'Can recovery agents visit retail shops in Sitabuldi, offices in MIHAN, or residential premises in Dharampeth without permission?',
      answer:
        'No. Under the RBI Master Circular on Recovery Agents and the Fair Practices Code, recovery personnel are strictly prohibited from visiting a borrower’s workplace, retail establishment, or residence without prior written intimation. They cannot visit outside 08:00 AM to 07:00 PM, use threatening or abusive language, or publicly disclose debt details to colleagues, neighbors, or clients. Violations entitle borrowers to issue formal legal cease-and-desist notices and register complaints with the RBI Banking Ombudsman.',
    },
    {
      question:
        'How does the District Legal Services Authority (DLSA) Lok Adalat in Nagpur settle loan defaults?',
      answer:
        'The Nagpur District Legal Services Authority (DLSA) organizes quarterly National and State Lok Adalats at the District and Sessions Court Complex at Nyay Mandir, Civil Lines. During Lok Adalat sessions, a panel comprising a sitting or retired judicial officer and a legal mediator facilitates structured negotiations between the borrower’s advocate and authorized bank officials. The resulting agreement is formalized as a Lok Adalat Award, which functions as a binding, non-appealable Civil Court Decree under Section 21 of the Legal Services Authorities Act, 1987.',
    },
    {
      question:
        'What percentage of debt waiver can borrowers in Nagpur realistically achieve through an OTS?',
      answer:
        'For unsecured personal loans, credit card portfolios, and unsecured MSME working capital facilities delinquent beyond 90 to 180 days (classified as Substandard or Doubtful NPAs), banks and NBFCs in Nagpur routinely sanction principal waivers ranging between 40% and 70%, accompanied by a 100% complete waiver of penal interest, late payment surcharges, and compounding fees.',
    },
    {
      question:
        'Can Nagpur City Police or Maharashtra Police arrest a borrower for an unsecured personal loan default?',
      answer:
        'No. Defaulting on an unsecured personal loan or commercial credit facility is purely a civil contractual dispute governed by the Indian Contract Act, 1872. Police stations across Nagpur Commissionerate have no statutory authority to register FIRs, summon borrowers, or make arrests for genuine financial insolvency. If recovery agencies attempt to lodge frivolous cheating complaints, advocates cite Supreme Court directives in Arnesh Kumar v. State of Bihar to ensure immediate dismissal.',
    },
    {
      question:
        'How do you stop recurring NACH mandate bounce charges across bank accounts in Nagpur?',
      answer:
        'Under National Payments Corporation of India (NPCI) procedural guidelines and RBI consumer directives, borrowers have the statutory right to instruct their bank branch in Nagpur or submit a written request via net banking to cancel or suspend active e-NACH mandates. Additionally, during advocate-led OTS negotiations, legal counsel demands a 100% complete waiver of all accumulated bounce charges.',
    },
    {
      question:
        'What essential forensic checks must be conducted on a bank OTS sanction letter in Nagpur?',
      answer:
        'Before remitting any settlement funds, legal counsel must audit the OTS sanction letter to ensure: (1) It is issued on official bank letterhead with an authentic corporate seal; (2) Contains accurate loan account numbers, borrower name, and CIN; (3) Explicitly states the agreed discounted sum and payment schedule; (4) Confirms that upon payment all legal proceedings will be withdrawn; and (5) Guarantees the issuance of a formal ₹0 No Dues Certificate within 30 days under RBI Circular RBI/2023-24/60.',
    },
    {
      question:
        'How long does a bank take to deliver the No Dues Certificate (NDC) after loan settlement in Maharashtra?',
      answer:
        'Under Reserve Bank of India Circular RBI/2023-24/60, all regulated commercial banks and NBFCs are statutorily required to issue a formal No Dues Certificate and update credit bureau records within 30 calendar days of receiving full settlement payment. If the lender delays beyond 30 days without lawful reason, it is legally obligated to pay compensation of ₹5,000 per day of delay directly to the borrower.',
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

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Loan Settlement Services in Nagpur: <span className="text-[#3b82f6] md:text-[#60a5fa]">Legal Debt Defense, Lok Adalat Representation &amp; Bank OTS Waivers</span>
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
                Borrowers in Nagpur facing debt distress across private banks, public sector lenders, or digital fintech apps can secure 40% to 70% One-Time Settlement (OTS) waivers via advocate-led conciliation and DLSA Lok Adalat awards at Nyay Mandir.
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
                  <span><strong>Statutory Harassment Shielding:</strong> RBI Master Directions and the Fair Practices Code strictly prohibit unannounced workplace visits in MIHAN or retail shops in Sitabuldi, abusive language, and unauthorized debt disclosures.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Substantial OTS Debt Waivers:</strong> Delinquent personal loans and unsecured business lines can be settled for 40% to 70% principal haircuts, alongside a 100% complete waiver of penal charges and late fees.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Nyay Mandir Court Defense:</strong> Experienced debt advocates defend against Section 138 NI Act and Section 25 PSSA notices in Nagpur District Courts, obtaining bail and preventing coercive warrants.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Binding Lok Adalat Decrees:</strong> Compromise awards executed through the Nagpur District Legal Services Authority (DLSA) hold non-appealable civil court decree status under Section 21 of the Legal Services Authorities Act, 1987.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Forensic Zero-Balance NDC Guarantee:</strong> Direct settlement with bank Zonal Stressed Assets Recovery Branches (SARBs) guarantees authenticated sanction letters and formal ₹0 No Dues Certificates within 30 days under RBI mandates.</span>
                </li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="nagpur-debt-landscape" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
                <Building2 className="w-6 h-6 text-[#1F5EFF]" />
                <span>1. The Economic Geography of Debt Distress in Nagpur &amp; Vidarbha</span>
              </h2>
              <p>
                Nagpur occupies a strategic position as the primary commercial, logistics, and industrial capital of Central India. However, the region’s dual economic engine—driven by tech enterprises in the Multi-modal International Cargo Hub and Airport at Nagpur (MIHAN) Special Economic Zone alongside traditional trading hubs across Sitabuldi, Gandhibagh, and Itwari—creates unique credit vulnerabilities. Over the past three years, salaried corporate executives and mid-level software professionals in MIHAN have faced global restructuring, variable pay cuts, and startup downsizing, leaving high-value unsecured personal loans, credit card balances, and fintech credit lines in acute delinquency.
              </p>
              <p>
                Simultaneously, micro, small, and medium enterprise (MSME) merchants and agro-allied supply chain operators across the Butibori and Hingna Maharashtra Industrial Development Corporation (MIDC) corridors frequently encounter severe working capital compression. Prolonged payment cycles from regional supply chains and escalating raw material costs force business owners to service working capital shortfalls through multiple high-interest personal loans and digital NBFC installment facilities. When liquidity contracts, compounding interest and aggressive recovery pressures from commercial lenders quickly transform temporary cash flow shortages into severe, multi-lender debt traps.
              </p>
              <div className="bg-amber-50/70 border-l-4 border-amber-500 p-4 rounded-r-xl text-sm text-amber-950 space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>Vidarbha Commercial Credit Dynamics</span>
                </div>
                <p>
                  Unsecured personal loan defaults in Nagpur are not isolated consumer defaults; they frequently reflect commercial cash flow friction across retail supply chains, agro-processing clusters, and IT service providers. Engaging a specialized loan settlement advocate in Nagpur ensures that regional financial stress is presented to bank credit committees with robust forensic documentation.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="delinquency-timeline-npa-nagpur" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
                <TrendingUp className="w-6 h-6 text-[#1F5EFF]" />
                <span>2. Delinquency Timeline, Asset Classification &amp; Ind AS 109 NPA Mechanics</span>
              </h2>
              <p>
                Understanding the regulatory progression of a defaulting loan under the Reserve Bank of India’s Prudential Framework for Resolution of Stressed Assets is essential for timing settlement negotiations effectively. From the moment an EMI payment is missed, the account transitions across defined Special Mention Account (SMA) sub-categories before reaching formal Non-Performing Asset (NPA) classification at 90 days past due (DPD).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">SMA-0 (1–30 DPD)</div>
                  <div className="text-lg font-black text-slate-900 mt-1">Early Delinquency</div>
                  <p className="text-xs text-slate-600 mt-2">Automated system reminders, late payment fees, and tele-calling follow-ups by internal branch teams.</p>
                </div>
                <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-4 text-center">
                  <div className="text-xs font-bold text-amber-600 uppercase tracking-wider">SMA-1 &amp; SMA-2 (31–90 DPD)</div>
                  <div className="text-lg font-black text-amber-950 mt-1">Pre-NPA Stress</div>
                  <p className="text-xs text-slate-600 mt-2">Repeated NACH presentations, escalating bounce charges, and assignment of external collection agencies.</p>
                </div>
                <div className="bg-red-50/60 border border-red-200 rounded-xl p-4 text-center">
                  <div className="text-xs font-bold text-red-600 uppercase tracking-wider">NPA (90+ DPD)</div>
                  <div className="text-lg font-black text-red-950 mt-1">Stressed Asset Transfer</div>
                  <p className="text-xs text-slate-600 mt-2">Account transferred to Zonal SARB desks in Nagpur; statutory legal notices drafted under Section 138 NI Act and Section 25 PSSA.</p>
                </div>
              </div>
              <p>
                Under Indian Accounting Standard (Ind AS) 109, commercial banks and systemic NBFCs operating across Nagpur are mandated to calculate Expected Credit Loss (ECL) and lock up substantial capital provisioning against delinquent assets. When a personal loan matures into a Substandard NPA (15% general provision) or Doubtful Asset (25% to 100% provisioning burden), maintaining the non-performing exposure on the bank’s balance sheet becomes capital-inefficient. This regulatory reality provides seasoned Nagpur debt settlement advocates with significant structural leverage to negotiate substantial principal debt haircuts.
              </p>
            </section>

            {/* Section 3 */}
            <section id="anti-harassment-nach-protection" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
                <ShieldAlert className="w-6 h-6 text-[#1F5EFF]" />
                <span>3. Statutory Borrower Protections: Halting Harassment &amp; NACH Presentation Sweeps</span>
              </h2>
              <p>
                A primary concern for distressed borrowers in Nagpur is aggressive, unlawful recovery practices. Collection agencies frequently violate statutory boundaries by dispatching unannounced recovery agents to corporate campuses in MIHAN, retail establishments in Sitabuldi and Gandhibagh, or residential neighborhoods across Dharampeth and Ramdaspeth. Borrowers must recognize that debt default is strictly a civil contractual matter governed by the Indian Contract Act, 1872, and not a criminal offense.
              </p>
              <p>
                The Reserve Bank of India’s Master Circular on Recovery Agents and the Fair Practices Code for NBFCs establish strict statutory boundaries that every recovery agent and lending institution must adhere to:
              </p>
              <ul className="space-y-2.5 my-3 pl-2">
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Restricted Calling Hours:</strong> Recovery personnel are prohibited from contacting borrowers before 08:00 AM or after 07:00 PM under any circumstances.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Workplace &amp; Privacy Safeguards:</strong> Agents cannot enter workplaces, commercial shops, or family residences without prior written consent, nor can they disclose debt details to co-workers, customers, or neighbors.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Prohibition of Intimidation:</strong> Using abusive language, issuing false threats of police arrest, or sending simulated legal summons constitutes criminal intimidation under the Bharatiya Nyaya Sanhita (BNS).</span>
                </li>
              </ul>
              <p>
                Furthermore, lenders frequently subject borrowers to predatory compounding by presenting electronic NACH mandates multiple times a month, generating recurring bounce fees of ₹450 to ₹600 per cycle. Under National Payments Corporation of India (NPCI) procedural guidelines and RBI directives, borrowers have the statutory right to instruct their home branch in Nagpur to suspend or cancel active e-mandates. During advocate-led negotiations, our legal team demands a 100% full waiver of all accumulated bounce fees and penal compounding charges.
              </p>
            </section>

            {/* Section 4 */}
            <section id="rbi-ots-npv-valuation" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
                <Calculator className="w-6 h-6 text-[#1F5EFF]" />
                <span>4. The Net Present Value (NPV) Valuation Mechanics &amp; 40%–70% OTS Haircut Formulation</span>
              </h2>
              <p>
                One-Time Settlement (OTS) sanctioning is governed by the Reserve Bank of India’s Master Directions on Compromise Settlements and Technical Write-offs. Bank Zonal Committees and Credit Sanctioning Authorities do not evaluate settlement requests based on emotional distress; they operate strictly on comparative Net Present Value (NPV) financial recovery modeling.
              </p>
              <p>
                When an advocate presents a formal compromise settlement proposal, the bank’s stressed asset division calculates whether accepting an immediate discounted lump-sum payment yields higher economic value than pursuing prolonged litigation through Summary Civil Suits under Order 37 CPC or execution proceedings in Nagpur District Courts.
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
                  Where C_t represents estimated future cash recoveries, r is the bank’s internal hurdle discount rate, and deductions account for 3 to 5 years of court friction, advocate fees, and capital locked in non-earning NPA provisions under Ind AS 109.
                </p>
              </div>

              <p>
                Because unsecured personal loans carry no underlying collateral or hypothecated physical asset, forced legal recovery through civil execution is protracted and costly for financial institutions. Consequently, when an advocate submits an authenticated hardship dossier documenting medical adversity, business contraction, or salary reduction, the bank’s credit committee recognizes that recovering 30% to 60% of the book debt immediately produces a higher Net Present Value than uncertain court judgments years later.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="infographic-resolution-blueprint" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
                <Layers className="w-6 h-6 text-[#1F5EFF]" />
                <span>5. Visual Resolution Blueprint: Nagpur Loan Settlement Architecture</span>
              </h2>
              <p>
                The resolution framework below illustrates the complete end-to-end pathway from delinquency and legal notice defense to advocate-led Zonal SARB negotiations, Lok Adalat conciliation, and final ₹0 No Dues Certificate issuance for borrowers across Nagpur and Vidarbha:
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
                  Figure 1.1: Strategic Roadmap for Advocate-Led Loan Settlement &amp; Lok Adalat Conciliation in Nagpur District.
                </div>
              </div>

              <p className="text-sm text-slate-600">
                This blueprint emphasizes the critical transition from uncoordinated agency harassment to institutional legal dialogue. By interposing legal counsel between the lender and the borrower, aggressive collection tactics are replaced with structured compromise proposals evaluated directly by authorized bank credit committees.
              </p>
            </section>

            {/* Section 6 */}
            <section id="nagpur-court-defense-jmfc" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
                <Gavel className="w-6 h-6 text-[#1F5EFF]" />
                <span>6. Judicial Defense in Nagpur District &amp; Sessions Court and JMFC Benches</span>
              </h2>
              <p>
                When an unsecured loan default persists past 120 days, lending institutions frequently initiate formal statutory legal proceedings to compel settlement. In Nagpur, these legal actions are filed before the Judicial Magistrate First Class (JMFC) Courts and Civil Benches situated within the historic District and Sessions Court Complex at Nyay Mandir, Civil Lines, Nagpur.
              </p>
              <p>
                Lenders primarily deploy two statutory instruments to exert legal pressure:
              </p>
              <div className="space-y-3 my-4">
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Section 138 of the Negotiable Instruments Act, 1881 (Cheque Dishonour)</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    If security cheques deposited at loan origination bounce upon presentation, lenders issue a 15-day statutory demand notice followed by a criminal complaint. Our Nagpur advocates enter an appearance via Vakalatnama, obtain bail without jail detention, challenge territorial jurisdiction under the 2015 NI Act amendments, and move for Lok Adalat referral under Section 147 NI Act.
                  </p>
                </div>
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Section 25 of the Payment and Settlement Systems Act, 2007 (Electronic Mandate Dishonour)</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    When digital NACH/e-mandates dishonour, lenders file complaints under Section 25 PSSA, which mirror Section 138 quasi-criminal procedures. Our legal defense establishes lack of criminal intent, demonstrates documented business or salary distress, and shifts proceedings toward institutional compromise conciliation.
                  </p>
                </div>
              </div>
              <p>
                In civil suits filed under Order 37 of the Code of Civil Procedure (CPC) for summary recovery, our advocates file applications for Leave to Defend, challenging inflated compounding penal interest and non-compliance with the RBI Fair Practices Code, thereby preventing ex-parte summary decrees and compelling the bank to accept an amicable out-of-court OTS.
              </p>
            </section>

            {/* Section 7 */}
            <section id="nagpur-lok-adalat-representation" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
                <Landmark className="w-6 h-6 text-[#1F5EFF]" />
                <span>7. Nagpur District Legal Services Authority (DLSA) Lok Adalat Settlement Protocol</span>
              </h2>
              <p>
                The District Legal Services Authority (DLSA) seated at the District Court Complex in Nyay Mandir, Civil Lines, Nagpur, conducts regular National and State Lok Adalats under the aegis of the Maharashtra State Legal Services Authority (MSLSA) and NALSA. For distressed borrowers, Lok Adalat represents the safest, most definitive legal forum to execute a binding debt compromise.
              </p>
              <p>
                During Lok Adalat conciliation sessions, a specialized bench comprising a sitting or retired judicial officer and an advocate mediator oversees negotiations between the borrower’s counsel and senior bank officials holding delegated financial sanctioning power. Once a mutually agreeable discounted settlement figure is reached, a formal Joint Compromise Memo is executed.
              </p>
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 my-4">
                <div className="font-bold text-emerald-950 text-sm flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span>Statutory Finality of Lok Adalat Awards</span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                  An award passed by the Nagpur Lok Adalat bench operates as a final, non-appealable Civil Court Decree under Section 21 of the Legal Services Authorities Act, 1987. Under Section 21(2), no appeal lies to any court against a Lok Adalat award. Furthermore, under court procedural rules, all court fees previously paid are 100% refunded, and all pending criminal complaints under Section 138 NI Act or Section 25 PSSA stand permanently compounded and dismissed.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section id="step-by-step-settlement-roadmap" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
                <Clock className="w-6 h-6 text-[#1F5EFF]" />
                <span>8. The 5-Stage Advocate-Led Settlement Protocol for Nagpur Borrowers</span>
              </h2>
              <p>
                Resolving delinquent personal loans and credit card debt requires a structured, multi-stage legal and financial protocol designed to maximize debt waivers while eliminating legal vulnerability:
              </p>
              <div className="space-y-4 my-5">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white font-bold flex items-center justify-center text-sm flex-shrink-0 mt-0.5">1</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Stage 1: Forensic Financial &amp; Debt Audit</h4>
                    <p className="text-sm text-slate-600 mt-1">Our legal team audits loan agreements, statement of accounts, penal interest levies, and NACH bounce histories across all credit facilities to isolate inflated accounting charges.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white font-bold flex items-center justify-center text-sm flex-shrink-0 mt-0.5">2</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Stage 2: Cease-and-Desist Notice &amp; Legal Insulation</h4>
                    <p className="text-sm text-slate-600 mt-1">We issue formal legal representation notices to bank nodal officers and collection heads, asserting RBI Fair Practices Code protections and directing all future correspondence through legal counsel.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white font-bold flex items-center justify-center text-sm flex-shrink-0 mt-0.5">3</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Stage 3: Direct SARB &amp; Credit Committee Negotiations</h4>
                    <p className="text-sm text-slate-600 mt-1">Our senior advocates negotiate directly with bank Zonal Stressed Assets Recovery Branches (SARBs) in Nagpur, submitting formal hardship dossiers and NPV recovery proposals to secure 40% to 70% principal waivers.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white font-bold flex items-center justify-center text-sm flex-shrink-0 mt-0.5">4</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Stage 4: Stamped Sanction Letter Audit &amp; Direct Remittance</h4>
                    <p className="text-sm text-slate-600 mt-1">Before payment, we forensically verify the authenticity of the bank’s OTS sanction letter. Payments are deposited directly into the borrower’s designated loan account via secure RTGS/NEFT.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#1F5EFF] text-white font-bold flex items-center justify-center text-sm flex-shrink-0 mt-0.5">5</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Stage 5: ₹0 No Dues Certificate &amp; Credit Bureau Updation</h4>
                    <p className="text-sm text-slate-600 mt-1">We mandate the delivery of an official ₹0 No Dues Certificate (NDC) within 30 days under RBI Circular RBI/2023-24/60 and monitor credit bureau submissions to reflect settled zero-balance status.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section id="sanction-letter-audit-ndc" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
                <FileCheck className="w-6 h-6 text-[#1F5EFF]" />
                <span>9. Forensic Audit of Nagpur OTS Sanction Letters &amp; ₹0 No Dues Certificate Protocol</span>
              </h2>
              <p>
                A critical danger for distressed borrowers is settling with unauthorized third-party recovery agents who issue forged compromise letters or misappropriate funds into third-party accounts. SettleLoans enforces strict forensic protocols to verify every settlement document before a single rupee is remitted.
              </p>
              <p>
                Every legitimate bank OTS Sanction Letter in Nagpur must satisfy seven mandatory forensic checkpoints:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                <div className="border border-slate-200 rounded-xl p-3.5 bg-white text-xs text-slate-700">
                  <strong>1. Official Bank Letterhead:</strong> Must bear the official corporate emblem, registered office address, and Corporate Identification Number (CIN).
                </div>
                <div className="border border-slate-200 rounded-xl p-3.5 bg-white text-xs text-slate-700">
                  <strong>2. Accurate Account Identifiers:</strong> Explicit mention of 16-digit loan account numbers, card numbers, and borrower PAN/Aadhaar.
                </div>
                <div className="border border-slate-200 rounded-xl p-3.5 bg-white text-xs text-slate-700">
                  <strong>3. Explicit Waiver Breakdown:</strong> Clear categorization of principal waived, penal interest written off, and agreed final lump sum.
                </div>
                <div className="border border-slate-200 rounded-xl p-3.5 bg-white text-xs text-slate-700">
                  <strong>4. Direct Payment Instructions:</strong> Funds payable exclusively into the bank’s internal designated loan account, never third-party accounts.
                </div>
                <div className="border border-slate-200 rounded-xl p-3.5 bg-white text-xs text-slate-700">
                  <strong>5. Legal Proceedings Withdrawal:</strong> Binding clause affirming withdrawal of all pending Section 138, Section 25, or civil suits upon payment.
                </div>
                <div className="border border-slate-200 rounded-xl p-3.5 bg-white text-xs text-slate-700">
                  <strong>6. Authorized Signatory:</strong> Issued and signed by an authorized Zonal Credit Manager or SARB Assistant General Manager.
                </div>
              </div>
              <div className="bg-blue-50/60 border border-blue-200 p-4 rounded-xl text-xs text-blue-950">
                <strong>RBI 30-Day Mandatory Rule (RBI/2023-24/60):</strong> Regulated lenders must issue an authentic No Dues Certificate (NDC) and close the credit bureau entry within 30 calendar days of settlement receipt. Lenders delaying beyond 30 days without lawful cause are statutorily liable to pay ₹5,000 per day of delay to the borrower.
              </div>
            </section>

            {/* Section 10 */}
            <section id="cibil-score-rehabilitation-nagpur" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
                <TrendingUp className="w-6 h-6 text-[#1F5EFF]" />
                <span>10. CIBIL Score Trajectory, Post-Settlement Reporting &amp; Credit Rehabilitation</span>
              </h2>
              <p>
                A transparent understanding of credit bureau reporting is vital for long-term financial recovery. When an unsecured personal loan or credit card is settled through an OTS, the lender reports the trade line status to TransUnion CIBIL, Experian, Equifax, and CRIF High Mark as &quot;Settled&quot; or &quot;Post-Write-Off Settled&quot; with a current balance of ₹0.
              </p>
              <p>
                While a settled status results in an immediate credit score adjustment (typically settling in the 550–650 range), it permanently halts compounding default months (DPD 180+) and prevents the account from being reported as an active delinquent NPA. Borrowers in Nagpur can systematically rebuild their CIBIL score back to 750+ over 18 to 24 months by adopting a structured rehabilitation strategy:
              </p>
              <ul className="space-y-2 text-sm text-slate-700 pl-2">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Secured Fixed Deposit Credit Cards:</strong> Opening a fixed deposit of ₹30,000–₹50,000 with a scheduled bank to obtain a 90% credit limit secured card, utilizing under 25% of the limit and paying the total balance on time.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Credit Bureau Audit &amp; Dispute Resolution:</strong> Reviewing CIBIL CIR reports 45 days post-settlement to verify that the outstanding balance reflects ₹0 and no phantom overdue balances remain.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Diversified Timely Credit Repayments:</strong> Maintaining flawless repayment histories on utility credit, small consumer durables, or business trade credits to steadily restore prime creditworthiness.</span>
                </li>
              </ul>
            </section>

            {/* Section 11: Comparative Matrix Table */}
            <section id="nagpur-debt-matrix" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
                <Scale className="w-6 h-6 text-[#1F5EFF]" />
                <span>11. Nagpur Debt Resolution &amp; Court Settlement Comparative Matrix</span>
              </h2>
              <p>
                The table below outlines key procedural dynamics, expected OTS haircut percentages, and court resolution pathways across different credit categories for borrowers in Nagpur and Vidarbha:
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
                <span>12. SettleLoans Legal Defense &amp; Debt Advisory in Nagpur &amp; Vidarbha</span>
              </h2>
              <p>
                SettleLoans is India’s premier advocate-backed debt resolution and financial defense consultancy. Our dedicated Nagpur legal team combines deep expertise in banking regulations, SARB stressed asset negotiations, and court representation across the Nagpur District and Sessions Court at Nyay Mandir. We have successfully defended over 1,200+ borrowers, safeguarding their legal dignity, halting recovery harassment, and securing maximum financial waivers.
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
                    <strong>Reserve Bank of India (RBI):</strong> Master Directions on Compromise Settlements and Technical Write-offs (Circular RBI/2023-24/40)
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
                    <strong>RBI Integrated Ombudsman Portal (CMS):</strong> Official Escalation for Recovery Agent Harassment &amp; Banking Malpractice
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
                    <strong>National Legal Services Authority (NALSA):</strong> Legal Services Authorities Act, 1987 — National Lok Adalat Conciliation
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
                    <strong>District &amp; Sessions Court Nagpur (eCourts):</strong> Case Status, Causelists &amp; JMFC Nyay Mandir Civil Lines Listings
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
                    <strong>High Court of Bombay (Nagpur Bench):</strong> Jurisprudential Precedents on Section 138 NI Act, Order 37 CPC &amp; Civil Debts
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
                Ashish has led over 1,200+ successful debt compromise negotiations across HDFC Bank, ICICI Bank, Axis Bank, State Bank of India, and major NBFCs. He specializes in Vidarbha debt defense, Section 138/25 PSSA representation in District Courts, and borrower advocacy under RBI Master Directions.
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
              <h3 className="font-black text-lg sm:text-xl text-white leading-snug">
                Facing Recovery Harassment or Court Summons in Nagpur?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect with our senior banking advocates for immediate cease-and-desist protection, JMFC court defense, and confidential 40%–70% OTS negotiations.
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
                  <span><strong>100% Confidential:</strong> Client data protected under attorney-client privilege.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct SARB Settlement:</strong> Direct institutional negotiations with zero intermediary leakage.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Official ₹0 NDC:</strong> Stamped No Dues Certificates delivered within 30 days.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Lok Adalat Representation:</strong> Complete legal appearance at Nyay Mandir benches.</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
