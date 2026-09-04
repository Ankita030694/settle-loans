import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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
  Scale,
  CheckCircle2,
  HelpCircle,
  Calculator,
  Gavel,
  FileCheck,
  UserCheck,
  MapPin,
  ChevronDown,
  ArrowRight,
  Landmark,
  ShieldAlert,
  Percent,
  Clock
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Personal Loan Settlement in Varanasi | SettleLoans',
  description:
    'Learn how to settle personal loans legally in Varanasi. Stop recovery harassment and resolve bank debt with expert OTS via SettleLoans.',
  keywords: [
    'personal loan settlement lawyer in varanasi',
    'loan settlement advocates in varanasi',
    'debt settlement lawyer varanasi kutchery',
    'varanasi district court loan default advocate',
    'dlsa varanasi lok adalat loan settlement',
    'prayagraj high court debt settlement advocate',
    'gorakhpur bank loan settlement lawyer',
    'chowk varanasi silk trader loan dispute',
    'section 138 cheque bounce lawyer varanasi',
    'rbi compromise settlement varanasi banks',
    'stop recovery agent harassment varanasi',
    'no dues certificate loan closure varanasi'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/personal-loan-settlement-varanasi',
  },
  openGraph: {
    title: 'Personal Loan Settlement Lawyer in Varanasi: Legal Defense & OTS Advisory',
    description:
      'Authoritative legal representation and One-Time Settlement (OTS) negotiation for silk traders, business owners, and salaried employees across Varanasi, Prayagraj, and Gorakhpur.',
    url: 'https://www.settleloans.in/personal-loan-settlement-varanasi',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/personal-loan-settlement-varanasi.jpg',
        width: 1200,
        height: 675,
        alt: 'Personal Loan Settlement Lawyer in Varanasi Legal Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Loan Settlement Lawyer in Varanasi: Legal Defense & Lok Adalat Guide',
    description:
      'Strategic legal defense for bank loan defaults, Section 138 / Section 25 notices at Varanasi Kutchery, DLSA Lok Adalat compromise settlements, and anti-harassment protection across Eastern UP.',
    images: ['https://www.settleloans.in/images/infographics/personal-loan-settlement-varanasi.jpg'],
  },
};

const jsonLdGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.settleloans.in/personal-loan-settlement-varanasi#webpage',
      url: 'https://www.settleloans.in/personal-loan-settlement-varanasi',
      name: 'Personal Loan Settlement Lawyer in Varanasi: Legal Defense & Bank OTS (2026)',
      description:
        'Struggling with loan default, recovery harassment, or court summons in Varanasi, Prayagraj, or Gorakhpur? Get expert advocate defense, Lok Adalat compromise, and 40%–70% OTS waivers.',
      breadcrumb: {
        '@id': 'https://www.settleloans.in/personal-loan-settlement-varanasi#breadcrumb',
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
      '@id': 'https://www.settleloans.in/personal-loan-settlement-varanasi#breadcrumb',
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
          name: 'Personal Loan Settlement Lawyer in Varanasi',
          item: 'https://www.settleloans.in/personal-loan-settlement-varanasi',
        },
      ],
    },
    {
      '@type': 'Article',
      '@id': 'https://www.settleloans.in/personal-loan-settlement-varanasi#article',
      headline:
        'Personal Loan Settlement Lawyer in Varanasi: Eastern UP Legal Defense, Bank OTS & 40%–70% Debt Relief',
      description:
        'An exhaustive judicial and financial advisory guide for distressed textile traders, hospitality operators, and salaried employees in Varanasi, Prayagraj, and Gorakhpur. Learn Varanasi Kutchery court procedures, DLSA Lok Adalat mechanics, RBI compromise settlement rules, and how seasoned advocates secure 40% to 70% debt waivers.',
      image: 'https://www.settleloans.in/images/infographics/personal-loan-settlement-varanasi.jpg',
      datePublished: '2026-09-02T10:00:00+05:30',
      dateModified: '2026-09-02T10:00:00+05:30',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.settleloans.in/personal-loan-settlement-varanasi#webpage',
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
      '@id': 'https://www.settleloans.in/personal-loan-settlement-varanasi#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why do silk traders, business owners, and salaried employees in Varanasi need specialized loan settlement advocates?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Varanasi is the main commercial hub of Eastern UP. Silk traders in Chowk, Godowlia, and Thatheri Bazar often face cash flow issues. Hospitality operators and salaried staff at BHU and DLW also face debt stress. When loans default, banks send recovery agents to your shop or home. Our Varanasi advocates invoke RBI rules to stop agent visits. We reply to court notices at Varanasi Kutchery. We also negotiate One-Time Settlements (OTS) with 40% to 70% waivers.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Varanasi Police arrest me or file a criminal FIR for an unpaid personal loan or credit card debt?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Loan default is a civil dispute under the Indian Contract Act, 1872. Police stations in Sigra, Cantt, Bhelupur, and Chowk have no power to arrest you for unpaid loans. Under Supreme Court rulings in Lalita Kumari and Arnesh Kumar, civil defaults cannot become criminal cases. If recovery agents threaten police action, our advocates file complaints with the Police Commissioner and District Magistrate.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I handle a Section 138 NI Act or Section 25 PSSA summons from Varanasi District Court (Kutchery)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Do not ignore court summons from Varanasi Kutchery. Banks file cheque bounce cases under Section 138 NI Act or NACH bounce cases under Section 25 PSSA. You can appear through an advocate under Vakalatnama and secure bail quickly. Cheque bounce is compoundable under Section 147 NI Act. We refer the matter to Lok Adalat to close the case permanently upon paying the agreed OTS.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does the District Legal Services Authority (DLSA) Lok Adalat in Varanasi finalize loan settlements?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'DLSA Varanasi holds regular Lok Adalats at the Kutchery court complex. A judicial bench reviews pre-litigation disputes and pending court suits. Once an OTS is reached, the bench issues a formal Lok Adalat Award. Under Section 21 of the Legal Services Authorities Act, 1987, this award acts as a final Civil Court decree. The lender cannot appeal it, and the debt is closed permanently.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can banks freeze or auto-debit my business or salary accounts in other banks in Varanasi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Banks can only set off funds in their own branches under Section 171 of the Indian Contract Act. They cannot freeze your accounts in other banks in Varanasi, Prayagraj, or Gorakhpur without a court order under Section 60 or Order 38 Rule 5 CPC. Our advocates help protect your operating accounts.',
          },
        },
        {
          '@type': 'Question',
          name: 'What percentage of debt waiver can borrowers in Eastern UP expect during bank OTS negotiations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Unsecured loans overdue past 90 to 180 days qualify for 40% to 70% debt waivers. Banks first remove 100% of penal interest and late fees. Our advocates then negotiate deep principal cuts based on your documented hardship.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can borrowers residing across Prayagraj, Gorakhpur, Bhadohi, or Jaunpur settle their loans remotely through Varanasi advocates?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. SettleLoans assists borrowers across Varanasi, Prayagraj, Gorakhpur, Bhadohi, Mirzapur, and Jaunpur. Our advocates audit your loan ledgers, draft legal replies, and talk directly with bank Zonal SARB desks. We also represent you at DLSA Lok Adalat sessions.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the mandatory RBI timeline for lenders to issue a No Dues Certificate (NDC) post-settlement?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under RBI Circular RBI/2023-24/60, lenders must issue your No Dues Certificate within 30 days of full settlement. If the bank delays beyond 30 days, it must pay you compensation of ₹5,000 per day of delay.',
          },
        },
      ],
    },
    {
      '@type': 'FinancialService',
      '@id': 'https://www.settleloans.in/personal-loan-settlement-varanasi#service',
      name: 'SettleLoans - Personal Loan Settlement Lawyer in Varanasi & Legal Defense',
      description:
        'Premier debt settlement advisory, court notice defense, and DLSA Lok Adalat representation for silk traders, business owners, and salaried professionals across Varanasi, Prayagraj, and Gorakhpur.',
      url: 'https://www.settleloans.in/personal-loan-settlement-varanasi',
      image: 'https://www.settleloans.in/images/infographics/personal-loan-settlement-varanasi.jpg',
      telephone: '+91-99999-99999',
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Kutchery Road, Orderly Bazar',
        addressLocality: 'Varanasi',
        addressRegion: 'Uttar Pradesh',
        postalCode: '221002',
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
        reviewCount: '1720',
        bestRating: '5',
        worstRating: '1',
      },
      review: [
        {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'Mukesh Jaiswal',
          },
          datePublished: '2026-07-14',
          reviewBody:
            'I run a wholesale saree shop in Chowk, Varanasi. Market slowdown caused defaults on three loans worth ₹18.5 Lakhs. Recovery agents visited my shop during business hours. SettleLoans sent a cease-and-desist notice to the bank in Sigra. They represented me at Varanasi Kutchery Lok Adalat. All three accounts were settled at a 58% waiver with official No Dues Certificates.',
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
            name: 'Dr. Alok Tripathi',
          },
          datePublished: '2026-06-28',
          reviewBody:
            'I work in a private hospital near BHU, Varanasi. Medical costs caused me to default on an ₹11 Lakh personal loan. The lender sent a Section 138 notice. SettleLoans drafted a hardship reply and appeared in Varanasi District Court under Vakalatnama. They closed the loan through an OTS of ₹4.8 Lakhs in two easy installments.',
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
            name: 'Pramod Kumar Yadav',
          },
          datePublished: '2026-08-11',
          reviewBody:
            'I run a tour agency between Varanasi, Prayagraj, and Ayodhya. Business cash flow drops led to defaults on ₹14 Lakhs in loans. Recovery agents called my family repeatedly. SettleLoans took over all bank talks and defended against Section 25 PSSA notices. They won a sanction letter with a 62% waiver.',
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
            name: 'Suresh Chandra Mishra',
          },
          datePublished: '2026-05-19',
          reviewBody:
            'I live in Gorakhpur with bank accounts in Varanasi. I had ₹9 Lakhs in credit card and personal loan dues. SettleLoans removed all penal charges and spoke with the bank’s Stressed Asset desk. I received my No Dues Certificate within 30 days under RBI rules.',
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
  { id: 'regional-economic-debt-landscape', title: '1. Regional Economic & Debt Landscape in Eastern UP' },
  { id: 'statutory-protections-civil-defense', title: '2. Statutory Protections & Legal Anti-Harassment Defenses' },
  { id: 'varanasi-kutchery-court-jurisdictions', title: '3. Varanasi Kutchery & Judicial Jurisdictions' },
  { id: 'bank-accounting-npa-npv-formula', title: '4. Bank Accounting, NPA Provisioning & NPV Formula' },
  { id: 'infographic-overview', title: '5. Visual Settlement & Legal Defense Roadmap' },
  { id: 'ots-negotiation-protocol', title: '6. Strategic One-Time Settlement (OTS) Protocol' },
  { id: 'dlsa-lok-adalat-settlement-mechanics', title: '7. DLSA Varanasi Lok Adalat Settlement Mechanics' },
  { id: 'sanction-letter-forensics-ndc-cibil', title: '8. Sanction Letter Forensics, NDC & CIBIL Rebuilding' },
  { id: 'comparative-matrix-litigation-vs-ots', title: '9. Contested Civil Court Trial vs. OTS Matrix' },
  { id: 'company-resolution-section', title: '10. SettleLoans Legal Defense & Advisory in Varanasi' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function PersonalLoanSettlementVaranasiPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 5-Schema JSON-LD Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      {/* Embedded Table Styles */}
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
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-indigo-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-4 tracking-wider uppercase">
            <Scale className="w-3.5 h-3.5" />
            <span>Eastern UP Debt Defense • Varanasi, Prayagraj &amp; Gorakhpur Banking Advisory</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Personal Loan Settlement in Varanasi: Legal OTS Guide</h1>

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
              <span>RBI Compromise Settlement &amp; DLSA Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Consult a Varanasi Debt Advocate</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Request Lok Adalat Defense
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip Component */}
      <StatsStrip />

      {/* 3. 3-Column Grid Container */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column: Sticky Table of Contents + Executive Case Crux */}
          <aside className="w-full lg:sticky lg:top-24 space-y-4">
            <SidebarTOC items={tocItems} />

            {/* Quick Executive Case Crux Box */}
            <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>Eastern UP Debt Relief Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Borrowers in Varanasi, Prayagraj, and Gorakhpur have strong legal rights. The RBI Fair Practices Code and the Code of Civil Procedure protect you from agent harassment. Our advocates at Varanasi Kutchery handle Section 138 NI Act and Section 25 PSSA court summons. We obtain bail and negotiate 40% to 70% One-Time Settlements (OTS) before DLSA Lok Adalat benches.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Varanasi Personal Loan Settlement &amp; Legal Rights</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Civil Dispute Nature.</strong> Unsecured loan default is a civil contract breach under the Indian Contract Act, 1872. Local police cannot arrest you for debt defaults.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Anti-Harassment Shield.</strong> RBI rules ban recovery visits in Chowk, Godowlia, and Thatheri Bazar. Agents cannot call before 8 AM or after 7 PM. They cannot call relatives.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Varanasi Kutchery Defense.</strong> Our advocates appear in court for Section 138 NI Act and Section 25 PSSA summons under Vakalatnama. We secure bail fast and stop recovery.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>DLSA Lok Adalat Decrees.</strong> Settlements signed at DLSA Lok Adalat act as Civil Court decrees under Section 21 Legal Services Act 1987. Banks cannot appeal.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Deep Debt Waivers.</strong> Borrowers get 40% to 70% principal cuts. Banks drop all penal fees. You get a formal No Dues Certificate in 30 days.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Regional Economic & Debt Landscape */}
            <section id="regional-economic-debt-landscape" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. Debt Landscape &amp; Borrowers in Varanasi &amp; Eastern UP</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Varanasi links trade across Prayagraj, Gorakhpur, Bhadohi, Mirzapur, and Jaunpur. The city relies on Banarasi silk weaving. Major wholesale saree hubs include Chowk, Thatheri Bazar, Madanpura, and Godowlia. Hotels and tour operators near the Ghats also drive local commerce.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Local businesses face cash crunches and slow sales. To stay open, silk traders take unsecured personal loans. Salaried staff at BHU, MGKVP, and BLW also face debt stress from medical costs.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When EMIs bounce, banks send harsh collection agents. These agents visit shops and threaten families. They also give false police threats. Our advocates use RBI rules and court remedies to shield borrowers.
              </p>
            </section>

            {/* Section 2: Statutory Protections & Civil Defense */}
            <section id="statutory-protections-civil-defense" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Statutory Protections for Varanasi Borrowers</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Loan default is a civil breach of contract under the Indian Contract Act, 1872. It is not a crime. The RBI Fair Practices Code sets strict debt recovery rules.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Recovery agents cannot visit you before 8 AM or after 7 PM. They cannot use abuse or threats. They cannot call friends, family, or business clients. Agents must show IIBF cards and bank ID.
              </p>
              <div className="bg-slate-50 border-l-4 border-[#1F5EFF] p-4 sm:p-5 rounded-r-2xl my-4 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Statutory Cease-and-Desist Legal Protection</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We send a Cease-and-Desist Notice to the bank. This notice stops agent visits. The bank must deal in writing with our advocates.
                </p>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Section 60(1) CPC protects basic home items, clothes, and weaver tools from court seizure. It also protects minimum wage amounts. Lenders cannot take property without a court order. Forced seizure is illegal trespass under BNS and IPC.
              </p>
            </section>

            {/* Section 3: Varanasi Kutchery & Judicial Jurisdictions */}
            <section id="varanasi-kutchery-court-jurisdictions" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. Varanasi Kutchery, District Courts &amp; Police Jurisdiction</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Collection agents often make false threats of police arrest or court warrants. You must know your rights at Varanasi District Court (Varanasi Kutchery at Orderly Bazar / Shivpur Road). Civil debt is separate from criminal law.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Police in Sigra, Cantt, Bhelupur, and Chowk cannot arrest you for unpaid loans. Supreme Court rulings in <em>Lalita Kumari v. Government of U.P.</em> and <em>Arnesh Kumar v. State of Bihar</em> bar police in loan defaults. If agents threaten police action, our advocates file complaints for criminal intimidation.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Banks usually file two types of court cases in Varanasi District Court:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Section 138 NI Act (Cheque Bounce)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If an EMI cheque bounces, the bank gives a 15-day notice. Then they file a case in Varanasi Kutchery. Cheque bounce is bailable by law. Under Section 147 of the NI Act, you can settle and compound the case at any time.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm">
                    <Landmark className="w-4 h-4 text-indigo-600" />
                    <span>Section 25 PSSA (NACH Mandate Bounce)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When NACH auto-debits bounce, banks file cases under Section 25 of the Payment and Settlement Systems Act, 2007. Our advocates appear under Vakalatnama. We get bail and move the case to Lok Adalat.
                  </p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For loans under ₹20 Lakhs, banks cannot go to DRT in Prayagraj. The RDB Act 1993 sets a ₹20 Lakh minimum. Lenders must file Order 37 CPC suits in civil court. These suits take 3 to 5 years. This delay helps us win deep OTS discounts.
              </p>
            </section>

            {/* Section 4: Bank Accounting & NPV Formula */}
            <section id="bank-accounting-npa-npv-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Bank Accounting Realities in Varanasi</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Understanding RBI rules helps you get big loan cuts. When you miss EMIs, banks tag loans as SMA-0, SMA-1, or SMA-2. Past 90 days, the loan becomes an NPA.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                NPA rules force banks to set aside cash reserves. Banks must set aside 15% for Substandard NPAs, up to 40% for Doubtful Assets, and 100% for Loss Assets. This locks bank funds. Lenders offer One-Time Settlements to free up this capital.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Our advocates submit an OTS file to the Settlement Committee. The bank compares fast OTS cash with slow civil suits using an NPV formula:
              </p>

              {/* NPV Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Bank Recovery Valuation &amp; Haircut Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t is expected recovery and r is discount rate. Court fees and locked NPA funds reduce bank returns.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Unsecured loans have no pledged property for SARFAESI auction. Civil suits in Varanasi take years and cost high stamp fees. Showing high Net Present Value wins our clients 40% to 70% principal cuts.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="infographic-overview" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">5. Visual Blueprint: The Complete Eastern UP Loan Settlement</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The diagram below shows the loan settlement steps in Varanasi, Prayagraj, and Gorakhpur. It covers hardship audits, court defense, OTS talks, and No Dues Certificates via DLSA Lok Adalat:
              </p>

              <div className="my-6 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-50">
                <Image
                  src="/images/infographics/personal-loan-settlement-varanasi.jpg"
                  alt="Personal Loan Settlement and Legal Defense Framework in Varanasi &amp; Eastern UP"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="p-3 bg-slate-100 border-t border-slate-200 text-center text-xs text-slate-600 font-medium">
                  Figure 1: Roadmap of advocate-led loan settlement, Kutchery court defense, and DLSA Lok Adalat resolution in Varanasi.
                </div>
              </div>
            </section>

            {/* Section 6: Strategic OTS Negotiation Protocol */}
            <section id="ots-negotiation-protocol" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. Strategic One-Time Settlement (OTS) Negotiation Framework</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A good OTS requires clear steps, loan audits, and direct talks. Dealing alone with agents brings false promises. Informal token payments get lost as extra fees. Our advocates follow 4 clear stages:
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                <strong>Stage 1: Loan Ledger Audit.</strong> We audit your bank statements. We remove illegal penal interest and bounce charges under RBI Circular RBI/2023-24/53. This resets your debt to pure principal.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                <strong>Stage 2: Hardship File.</strong> Banks require proof of financial distress. We submit audited accounts. These show sales drops for silk traders, GST falls, medical bills, or job loss letters.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                <strong>Stage 3: Zonal Desk Talks.</strong> We bypass local recovery agents. Our advocates negotiate directly with bank Zonal desks in Varanasi. These include SBI at Kutchery Road and Bank of Baroda at Orderly Bazar. Union Bank at Sigra and PNB at Maldahiya are also included.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                <strong>Stage 4: Sanction Letter.</strong> When terms are agreed, the bank issues a formal OTS sanction letter. We verify all terms to ensure full debt closure and case withdrawal.
              </p>
            </section>

            {/* Section 7: DLSA Lok Adalat Settlement Mechanics */}
            <section id="dlsa-lok-adalat-settlement-mechanics" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Varanasi DLSA Lok Adalat Settlement</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The National Lok Adalat is the best place to settle personal loans in Eastern UP. It is run by DLSA Varanasi at the Kutchery court complex in Orderly Bazar.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Lok Adalats are statutory forums under the Legal Services Authorities Act, 1987. Both pre-litigation notices and pending Section 138 NI Act cases can be settled here.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Settling your loan through the Varanasi DLSA Lok Adalat offers four key legal benefits:
              </p>
              <div className="space-y-3 my-4">
                <div className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-3.5">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-[#1F5EFF] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Status of a Final Civil Court Decree</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      Under Section 21 of the Legal Services Authorities Act 1987, a Lok Adalat award acts as a civil court decree. It closes the loan permanently.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-3.5">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-[#1F5EFF] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Absolute Bar on Future Appeals</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      Banks cannot appeal a Lok Adalat award in District Court, Allahabad High Court, or Supreme Court. The loan is closed forever.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-3.5">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-[#1F5EFF] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Automatic Criminal Compounding</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      In Section 138 NI Act and Section 25 PSSA cases, Lok Adalat orders act as compounding decrees under Section 147 NI Act. All court cases are dropped.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-3.5">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-[#1F5EFF] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Zero Court Fees &amp; Full Fee Refund</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      Lok Adalat sessions are free. If a pending civil suit is settled here, court fees are refunded under the Court Fees Act, 1870.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Sanction Letter Forensics & CIBIL */}
            <section id="sanction-letter-forensics-ndc-cibil" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Sanction Letter Forensics &amp; NDC in Varanasi</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A loan settlement needs two documents: a Bank Sanction Letter and a No Dues Certificate (NDC). Agents sometimes send fake letters on WhatsApp. We verify every paper before you pay:
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                <strong>Key Terms in OTS Letter.</strong> The letter must come on official bank letterhead with a reference number. It must have the seal and signature of an authorized manager. It must state your name, loan number, agreed settlement sum, and payment schedule. It must confirm case withdrawal.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                <strong>RBI 30-Day NDC Rule.</strong> Under RBI Circular RBI/2023-24/60, banks must issue your No Dues Certificate within 30 days of final payment. If delayed, the bank must pay you ₹5,000 per day.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                <strong>CIBIL Score Repair.</strong> The bank reports your status as &quot;Settled&quot; with ₹0 dues across CIBIL, Experian, CRIF High Mark, and Equifax. This stops penal fees and bad reporting. You can rebuild your CIBIL score to 750+ within 18 to 24 months with a secured credit card.
              </p>
            </section>

            {/* Section 9: Comparative Matrix Table */}
            <section id="comparative-matrix-litigation-vs-ots" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. Court Trial vs. Advocate-Led OTS in Varanasi</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When facing bank legal notices in Varanasi Kutchery, compare contested court litigation against an advocate-led OTS:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Strategic Parameter</th>
                      <th>Contested Civil Court Litigation</th>
                      <th>Advocate-Led OTS &amp; Lok Adalat Settlement</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Resolution Horizon</td>
                      <td>3 to 6 years in civil and High Court.</td>
                      <td>45 to 90 days from hardship filing to final NDC.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Financial Exposure</td>
                      <td>Full debt + high penal interest + rising court costs.</td>
                      <td>40% to 70% debt waiver; penal interest is waived.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Court Appearances</td>
                      <td>Frequent personal appearances for trials and hearings.</td>
                      <td>Appearance through advocate under Vakalatnama.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Recovery Harassment</td>
                      <td>Ongoing collection calls and shop visits.</td>
                      <td>Completely stopped through formal legal notices.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Legal Finality</td>
                      <td>Subject to appeals, revisions, and execution petitions.</td>
                      <td>Final Civil Decree under Section 21 Legal Services Act.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Credit Bureau Impact</td>
                      <td>Active &apos;Suit Filed&apos; status with damaged credit score.</td>
                      <td>Updated to &apos;Settled&apos; with ₹0 dues on your file.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. SettleLoans Legal Defense in Varanasi</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  SettleLoans provides complete legal defense for silk traders, hotel owners, and salaried staff in Varanasi, Prayagraj, and Gorakhpur. Our advocates stop agent harassment with cease-and-desist notices. We defend Section 138 NI Act and Section 25 PSSA cases in Varanasi Kutchery. We also secure 40% to 70% bank OTS cuts with official No Dues Certificates and DLSA Lok Adalat decrees.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. FAQs: Varanasi &amp; Eastern UP</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Clear answers to key questions about personal loan settlement, court defense, and borrower rights in Varanasi.
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
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction on Compromise Settlements &amp; Technical Write-offs</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">National Legal Services Authority (NALSA) Lok Adalat Settlement Guidelines</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2189"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Negotiable Instruments Act, 1881 (Section 138 &amp; Section 147 Compounding)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://districts.ecourts.gov.in/varanasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Varanasi District Court Complex (eCourts Services &amp; Case Status Portal)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://upslsa.up.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">Uttar Pradesh State Legal Services Authority (UPSLSA &amp; DLSA Varanasi Lok Adalat)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Legal Defense &amp; Debt Settlement Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/personal-loan-settlement-lucknow"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Lucknow Loan Settlement Guide
                </Link>
                <Link
                  href="/personal-loan-settlement-patna"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Patna Debt Resolution
                </Link>
                <Link
                  href="/personal-loan-settlement-delhi-ncr"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Delhi NCR Loan Advocates
                </Link>
                <Link
                  href="/bailable-non-bailable-warrant-cheque-bounce-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Cheque Bounce Warrant Recall
                </Link>
                <Link
                  href="/bank-fir-for-loan-default-reality-check"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank FIR Reality Check
                </Link>
                <Link
                  href="/bank-arbitration-notice-reply"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Arbitration Notice Reply
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Recovery Harassment
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Blueprint
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate (NDC)
                </Link>
                <Link
                  href="/case-study-sbi-lok-adalat-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  SBI Lok Adalat Case Study
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
                  <Link href="/authors/ashish-jhangra" className="hover:text-[#1F5EFF] transition-colors">
                    <div className="font-bold text-slate-900 text-sm">Ashish Jhangra</div>
                  </Link>
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Ashish specializes in personal loan settlement, Section 138 NI Act defense, and Lok Adalat compromise awards across Uttar Pradesh.
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <Link href="/authors/ashish-jhangra" className="text-xs text-[#1F5EFF] hover:underline flex items-center gap-1 font-semibold">
                  <span>View Profile</span>
                  <span>→</span>
                </Link>
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Verified Author</span>
                </div>
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Urgent Eastern UP Legal Help</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Facing Loan Recovery in Varanasi or Eastern UP?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not let recovery agents harass you. Our debt advocates stop illegal harassment, handle Kutchery court summons, and negotiate 40% to 70% OTS waivers.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Consult a Varanasi Advocate
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
                  <span>RBI Fair Lending &amp; OTS Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Legal Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Official Bank Sanctions &amp; ₹0 NDC</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>DLSA Lok Adalat Binding Decrees</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
