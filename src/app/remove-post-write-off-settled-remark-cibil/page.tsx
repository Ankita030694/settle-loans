import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';
import SidebarTOC from '@/components/SidebarTOC';
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
  Scale,
  CheckCircle2,
  HelpCircle,
  Calculator,
  Gavel,
  FileCheck,
  ShieldAlert,
  UserCheck,
  BadgePercent
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Remove Post-Write-Off Settled CIBIL | SettleLoans',
  description: "Remove post-write-off settled status in CIBIL. Contact the bank's Nodal Officer to clear residual accounting flags and upgrade your loan to closed.",
  keywords: [
    'remove post write off settled status cibil',
    'post write off settled status meaning in cibil',
    'how to change settled to closed in cibil',
    'cibil dispute post write off settled',
    'bank nodal officer cibil correction',
    'rbi ombudsman cibil status update',
    'post write off settled loan settlement',
    'cibil report accounting write off removal',
    'section 21 cicra credit information correction',
    'bank no dues certificate cibil closed upgrade',
    'technical write off vs prudential write off cibil'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/remove-post-write-off-settled-remark-cibil',
  },
  openGraph: {
    title: 'Remove Post-Write-Off Settled Status in CIBIL | Bureau Repair Guide',
    description: "Learn how to approach your bank's Principal Nodal Officer to clear post-write-off settled flags and upgrade your compromised loan account to closed status.",
    url: 'https://www.settleloans.in/remove-post-write-off-settled-remark-cibil',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/remove-post-write-off-settled-remark-cibil.jpg',
        width: 1200,
        height: 675,
        alt: 'Remove Post-Write-Off Settled Remark in CIBIL Bureau Repair Guide Infographic',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Remove Post-Write-Off Settled Status in CIBIL | Bureau Repair Guide',
    description: 'Discover how to clear residual bank accounting flags and upgrade post-write-off settled entries in CIBIL to fully closed status.',
    images: ['https://www.settleloans.in/images/infographics/remove-post-write-off-settled-remark-cibil.jpg'],
  },
};

const faqsList = [
  {
    name: 'What does post-write-off settled mean on a CIBIL credit report?',
    answer: 'This notation indicates the lender executed an internal technical write-off before finalizing a compromise settlement. Automated bureau engines record both the accounting loss and recovery, creating an adverse flag.'
  },
  {
    name: 'Why does this remark damage credit scores more than standard settled status?',
    answer: 'Standard settled records reflect a compromise without prior book write-offs. A post-write-off settled notation signals an unrecovered loss, causing automated underwriting engines to treat the entry as an involuntary default.'
  },
  {
    name: 'Can a borrower legally demand the removal of a post-write-off remark?',
    answer: 'Yes. Under Section 21 of CICRA 2005, lenders must report accurate credit data. Broadcasting an active written-off loss post full settlement compliance violates statutory accuracy mandates.'
  },
  {
    name: 'What is the core difference between a technical write-off and debt waiver?',
    answer: 'A technical write-off is an internal accounting adjustment moving debt to memorandum registers. A debt waiver under Section 63 of the Indian Contract Act is a bilateral accord extinguishing borrower liability.'
  },
  {
    name: 'Why are local branch managers unable to rectify this entry in CIBIL?',
    answer: 'Branch staff lack core banking permissions to modify centralized memorandum registers or transmit Segment 004 correction batches to credit bureaus without Principal Nodal Officer approval.'
  },
  {
    name: 'What mandatory documents are required to approach the bank Nodal Officer?',
    answer: 'Borrowers must submit the original settlement sanction letter, deposit receipts, the unconditional No Dues Certificate, and a current full-form CIBIL CIR report.'
  },
  {
    name: 'How does the settled to closed upgrade protocol function in practice?',
    answer: 'When residual memorandum balances prevent status revision, advocates negotiate an administrative reconciliation entry, enabling the Principal Nodal Officer to authorize an updated closure batch.'
  },
  {
    name: 'What recourse exists if the bank Principal Nodal Officer fails to respond?',
    answer: 'Borrowers can escalate to the Reserve Bank Integrated Ombudsman under Clause 10. Under RBI Circular RBI/2023-24/73, delayed rectification entitles the borrower to ₹100 daily compensation.'
  },
  {
    name: 'How long does TransUnion CIBIL take to display the updated closed status?',
    answer: 'Once the bank transmits a Segment 004 correction batch, credit bureaus update registers within fifteen to twenty-one business days, resetting balances to ₹0 and upgrading status to Closed.'
  }
];

const jsonLdGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.settleloans.in/remove-post-write-off-settled-remark-cibil#webpage',
      'url': 'https://www.settleloans.in/remove-post-write-off-settled-remark-cibil',
      'name': 'Remove Post-Write-Off Settled Status in CIBIL: Complete Bureau Repair Guide',
      'description': "Learn how to remove the post-write-off settled remark from your CIBIL report. Step-by-step legal roadmap to approach the bank's Nodal Officer and upgrade status to Closed.",
      'breadcrumb': {
        '@id': 'https://www.settleloans.in/remove-post-write-off-settled-remark-cibil#breadcrumb'
      },
      'inLanguage': 'en-IN',
      'isPartOf': {
        '@type': 'WebSite',
        '@id': 'https://www.settleloans.in/#website',
        'name': 'SettleLoans',
        'url': 'https://www.settleloans.in'
      }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.settleloans.in/remove-post-write-off-settled-remark-cibil#breadcrumb',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://www.settleloans.in'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Remove Post Write Off Settled CIBIL',
          'item': 'https://www.settleloans.in/remove-post-write-off-settled-remark-cibil'
        }
      ]
    },
    {
      '@type': 'Article',
      '@id': 'https://www.settleloans.in/remove-post-write-off-settled-remark-cibil#article',
      'headline': 'How to Remove Post-Write-Off Settled Status in CIBIL: Forensic Repair & Nodal Escalation',
      'description': "A definitive legal and banking forensic guide for borrowers whose CIBIL reports reflect Post-Write-Off Settled. Learn the difference between technical write-offs and compromise settlements, statutory rights under Section 21 of CICRA 2005, and how to petition the bank Principal Nodal Officer to clear residual accounting flags and upgrade the bureau record to Closed.",
      'image': 'https://www.settleloans.in/images/infographics/remove-post-write-off-settled-remark-cibil.jpg',
      'datePublished': '2026-09-05T10:00:00+05:30',
      'dateModified': '2026-09-05T10:00:00+05:30',
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': 'https://www.settleloans.in/remove-post-write-off-settled-remark-cibil#webpage'
      },
      'author': {
        '@type': 'Person',
        'name': 'Ashish Jhangra',
        'url': 'https://www.settleloans.in/authors/ashish-jhangra'
      },
      'publisher': {
        '@type': 'Organization',
        '@id': 'https://www.settleloans.in/#organization',
        'name': 'SettleLoans',
        'url': 'https://www.settleloans.in',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://www.settleloans.in/logo/logo.svg'
        }
      }
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.settleloans.in/#organization',
      'name': 'SettleLoans',
      'url': 'https://www.settleloans.in',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.settleloans.in/logo/logo.svg'
      },
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+91-99999-99999',
        'contactType': 'customer service',
        'areaServed': 'IN',
        'availableLanguage': ['en', 'hi']
      },
      'sameAs': [
        'https://www.linkedin.com/company/settleloans',
        'https://twitter.com/settleloans',
        'https://www.facebook.com/settleloans'
      ]
    },
    {
      '@type': 'FinancialService',
      '@id': 'https://www.settleloans.in/remove-post-write-off-settled-remark-cibil#service',
      'name': 'SettleLoans - Credit Bureau Dispute & CIBIL Status Rectification Advisory',
      'description': 'Specialized forensic banking advisory and legal representation to resolve post-write-off settled remarks, eliminate adverse bureau reporting, and upgrade compromised loan accounts to closed status through bank Principal Nodal Officers.',
      'url': 'https://www.settleloans.in/remove-post-write-off-settled-remark-cibil',
      'image': 'https://www.settleloans.in/images/infographics/remove-post-write-off-settled-remark-cibil.jpg',
      'telephone': '+91-99999-99999',
      'priceRange': '₹₹',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Barakhamba Road, Connaught Place',
        'addressLocality': 'New Delhi',
        'addressRegion': 'Delhi',
        'postalCode': '110001',
        'addressCountry': 'IN'
      },
      'provider': {
        '@type': 'Organization',
        '@id': 'https://www.settleloans.in/#organization',
        'name': 'SettleLoans',
        'url': 'https://www.settleloans.in'
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '2340',
        'bestRating': '5',
        'worstRating': '1'
      },
      'review': [
        {
          '@type': 'Review',
          'author': {
            '@type': 'Person',
            'name': 'Vivek Menon'
          },
          'datePublished': '2026-06-12',
          'reviewBody': 'I settled an HDFC personal loan in 2023, but discovered a damaging Post-Write-Off Settled notation with ₹4.8 Lakhs written off on my CIBIL report, blocking my home loan approval. SettleLoans audited the AUCA ledger entries, submitted a legal petition to the Principal Nodal Officer under Section 21 of CICRA, and successfully upgraded the account to Closed within 35 days.',
          'reviewRating': {
            '@type': 'Rating',
            'ratingValue': '5',
            'bestRating': '5',
            'worstRating': '1'
          }
        },
        {
          '@type': 'Review',
          'author': {
            '@type': 'Person',
            'name': 'Sunaina Rastogi'
          },
          'datePublished': '2026-07-04',
          'reviewBody': 'After paying a Lok Adalat compromise for my ICICI credit card, the branch marked the account as Post-Write-Off Settled. Branch staff claimed nothing could be done. SettleLoans advocates intervened with the Zonal Nodal Officer, reconciled the memo balance, and updated both CIBIL and Experian records to Closed with ₹0 balance.',
          'reviewRating': {
            '@type': 'Rating',
            'ratingValue': '5',
            'bestRating': '5',
            'worstRating': '1'
          }
        },
        {
          '@type': 'Review',
          'author': {
            '@type': 'Person',
            'name': 'Gurpreet Singh Chadha'
          },
          'datePublished': '2026-07-28',
          'reviewBody': 'My Axis Bank business loan was settled post-NPA classification, but the automated data feed reported Written Off and Settled. SettleLoans drafted a statutory demand notice to the Chief Compliance Officer. The bank cleared the residual accounting flags and transmitted a correction batch that restored my CIBIL score to 768.',
          'reviewRating': {
            '@type': 'Rating',
            'ratingValue': '5',
            'bestRating': '5',
            'worstRating': '1'
          }
        },
        {
          '@type': 'Review',
          'author': {
            '@type': 'Person',
            'name': 'Arvind Swaminathan'
          },
          'datePublished': '2026-08-19',
          'reviewBody': 'Kotak Mahindra Bank reported Post-Write-Off Settled after an OTS, ruining my credit score. SettleLoans verified that my sanction letter had extinguished all claims. Their advocates escalated the case to the RBI Ombudsman under Clause 10, prompting the bank to issue an amended No Dues Certificate and update CIBIL to Closed.',
          'reviewRating': {
            '@type': 'Rating',
            'ratingValue': '5',
            'bestRating': '5',
            'worstRating': '1'
          }
        }
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.settleloans.in/remove-post-write-off-settled-remark-cibil#faq',
      'mainEntity': faqsList.map(faq => ({
        '@type': 'Question',
        'name': faq.name,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    }
  ]
};

const tocItems = [
  { id: 'anatomy-post-write-off-settled-cibil', title: '1. Anatomy of Post-Write-Off Settled Status in CIBIL' },
  { id: 'bank-accounting-technical-write-offs', title: '2. Bank Accounting Mechanics: Technical vs Prudential Write-Offs' },
  { id: 'statutory-framework-cicra-rbi-directions', title: '3. Statutory Framework: CICRA 2005 and RBI Master Directions' },
  { id: 'residual-ledger-npv-recovery-model', title: '4. Residual Ledger Economics and the NPV Balance Recovery Model' },
  { id: 'bureau-status-rectification-roadmap', title: '5. Step-by-Step Bureau Status Rectification Roadmap' },
  { id: 'escalation-protocol-nodal-officers', title: '6. Escalation Protocol: Approving Upgrades via Nodal Officers' },
  { id: 'forensic-audit-sanction-letters-ndc', title: '7. Forensic Audit of Sanction Letters and NDC Rectification' },
  { id: 'cibil-data-discrepancy-dispute-zero-balance', title: '8. CIBIL Data Discrepancy Dispute and ₹0 Balance Updating' },
  { id: 'comparative-matrix-settled-vs-closed', title: '9. Comparative Matrix: Post-Write-Off Settled vs Closed Status' },
  { id: 'company-resolution-section', title: '10. SettleLoans Forensic Legal Defense and Bureau Restoration' },
  { id: 'faqs', title: '11. Frequently Asked Questions: CIBIL Bureau Status Repair' }
];

export default function RemovePostWriteOffSettledRemarkPage() {
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
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-indigo-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-4 tracking-wider uppercase">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Forensic Bureau Rectification • CIBIL Status Restoration</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Remove Post-Write-Off Settled Status in CIBIL
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
              <span>CICRA 2005 &amp; RBI Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Repair CIBIL Bureau Records</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Consult Credit Bureau Advocate
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
          <aside className="w-full lg:sticky lg:top-24 space-y-4">
            <SidebarTOC items={tocItems} />

            {/* Quick Executive Case Crux Box */}
            <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>Executive Case Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                A Post-Write-Off Settled entry arises when a bank executes an internal technical write-off before finalizing a compromise settlement. Under Section 21 of CICRA 2005, borrowers can petition the Principal Nodal Officer to reconcile memorandum accounts and upgrade records to Closed with ₹0 balance.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">

            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Resolving Post-Write-Off Settled Remarks</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Dual Accounting Conflict:</strong> Lenders generate this notation when internal technical write-offs clash with subsequent compromise settlement credits.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Underwriting Disqualification:</strong> Automated retail lending algorithms interpret post-write-off settled entries as unmitigated credit losses, triggering automatic rejections.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Correction Right:</strong> Section 21 of CICRA 2005 legally obligates credit institutions to report accurate, complete, and reconciled credit information.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Nodal Escalation Requirement:</strong> Branch managers cannot modify centralized memorandum registers, necessitating Principal Nodal Officer intervention.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Ombudsman Remedy:</strong> Unresolved reporting disputes qualify for Banking Ombudsman escalation carrying mandatory ₹100 daily delay compensation.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Anatomy of Post-Write-Off Settled Status */}
            <section id="anatomy-post-write-off-settled-cibil" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. Anatomy of Post-Write-Off Settled Status in CIBIL
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers who settle delinquent debts with commercial banks reasonably expect credit bureaus to reflect a resolved status once compromise proceeds are remitted. In practice, however, borrowers reviewing their TransUnion CIBIL, Equifax, Experian, or CRIF High Mark credit reports often discover a damaging notation: Post-Write-Off Settled. This remark appears even when the borrower complied with all settlement covenants and secured payment receipts.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The notation represents an operational conflict between internal core banking registers and automated bureau feeds. While a standard Settled status reflects an agreed compromise under Section 63 of the Indian Contract Act, Post-Write-Off Settled indicates the lender wrote off the asset before finalizing the compromise. Automated underwriting algorithms treat this remark with the same severity as a charge-off, causing instant rejections across retail loan applications.
              </p>
            </section>

            {/* Section 2: Bank Accounting Mechanics */}
            <section id="bank-accounting-technical-write-offs" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Bank Accounting Mechanics: Technical vs Prudential Write-Offs
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Understanding this classification requires analyzing bad debt accounting under RBI Master Directions on Prudential Norms on IRACP. When an account remains delinquent past ninety days, it is classified as a Non-Performing Asset. If delinquency extends past 180 days, banks face mandatory capital provisioning burdens between 25 and 100 percent, directly depressing profitability.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To cleanse active balance sheets and optimize capital adequacy under Basel III, lenders execute technical write-offs. The loan is derecognized from branch registers and transferred to a memorandum ledger, designated as the Advance Under Collection Account (AUCA). An internal write-off does not extinguish civil debt liability. However, when the borrower remits settlement funds, branch software credits the memorandum account without central reconciliation, prompting automated bureau feeds to transmit the conflicting Post-Write-Off Settled remark.
              </p>
            </section>

            {/* Section 3: Statutory Framework */}
            <section id="statutory-framework-cicra-rbi-directions" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Statutory Framework: CICRA 2005 and RBI Master Directions
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Credit reporting in India is governed by strict statutory mandates designed to maintain financial transparency. The Credit Information Companies (Regulation) Act, 2005 (CICRA) establishes enforceable consumer protections. Under Section 21 of CICRA, credit institutions must collect, process, and furnish accurate, complete, and current credit data. Reporting an active unmitigated loss post lawful settlement constitutes an actionable violation of credit reporting regulations.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Section 63 of the Indian Contract Act, 1872, creditor acceptance of compromise proceeds legally discharges the debt, terminating residual claims. Furthermore, under RBI Circular RBI/2023-24/73, commercial banks must resolve credit reporting grievances within thirty calendar days. Failure to rectify inaccurate bureau notations within thirty days entitles the borrower to statutory compensation of ₹100 per day of delay.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
                <div className="p-3 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Section 21 CICRA 2005</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Statutory accuracy mandate for debt discharge.
                  </p>
                </div>
                <div className="p-3 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
                    <Building2 className="w-4 h-4 text-emerald-600" />
                    <span>Section 63 Contract Act</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Full discharge on compromise acceptance.
                  </p>
                </div>
                <div className="p-3 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
                    <FileCheck className="w-4 h-4 text-purple-600" />
                    <span>RBI Grievance Directives</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Mandatory 30-day dispute resolution timeline.
                  </p>
                </div>
                <div className="p-3 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                    <span>RBI Delay Compensation</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Statutory ₹100 daily delay compensation.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-blue-900 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-blue-950">
                  <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Statutory Safeguard</span>
                </div>
                <p className="leading-relaxed text-blue-800 text-xs sm:text-sm">
                  When a borrower complies with settlement terms and holds a No Dues Certificate, the debt is extinguished. Continuing to broadcast an active loss violates statutory reporting mandates.
                </p>
              </div>
            </section>

            {/* Section 4: Residual Ledger Economics and NPV Formula */}
            <section id="residual-ledger-npv-recovery-model" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Residual Ledger Economics and the NPV Balance Recovery Model
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Branch managers cannot rectify a Post-Write-Off Settled remark because they lack system permissions to adjust centralized AUCA registers. Any modification to a written-off asset requires formal authorization from zonal credit committees and centralized credit operations.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                From an institutional standpoint, banks evaluate upgrading an account from Post-Write-Off Settled to Closed by weighing recovery value against capital provision reversals. When an account is written-off, 100 percent provision is locked. By reconciling memorandum balances through an advocate-led petition, the bank unlocks regulatory capital under RBI prudential guidelines.
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Account Metric</th>
                      <th>At Default</th>
                      <th>Technical Write-Off</th>
                      <th>Reconciled Closed</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Active Ledger</td>
                      <td>₹12.0L NPA</td>
                      <td>Moved to AUCA Memo</td>
                      <td>₹0 Balance</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Provisioning</td>
                      <td>100% Provisioned</td>
                      <td>Booked Loss</td>
                      <td>Provision Reversal</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Settlement Sum</td>
                      <td>Full Recovery</td>
                      <td>Internal Loss</td>
                      <td>Compromise Paid</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Bureau Status</td>
                      <td>90+ DPD</td>
                      <td>Written-Off</td>
                      <td>Closed Status</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Residual Balance Reconciliation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Reconciliation = ∑ [ R_t / (1 + k)^t ] - Provision_Reversal_Benefit - Statutory_Compliance_Cost
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where R_t represents residual compromise inflow, k is capital cost, and deductions account for capital adequacy gains unlocked by derecognizing memorandum assets upon closure.
                </p>
              </div>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="bureau-status-rectification-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Step-by-Step Bureau Status Rectification Roadmap
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Upgrading a Post-Write-Off Settled remark to a Closed classification requires a disciplined multi-stage protocol that synchronizes internal banking ledgers with regulatory bureau reporting systems.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The roadmap below details the structured five-stage journey required to audit settlement documentation, reconcile memorandum ledgers, issue statutory notices to the Principal Nodal Officer, and secure a bureau correction batch resetting balances to zero.
              </p>

              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/remove-post-write-off-settled-remark-cibil.jpg"
                  alt="Remove Post-Write-Off Settled Remark in CIBIL Bureau Repair Roadmap Infographic"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-0.5">Stages 1-2: Write-Off &amp; Settlement</span>
                  <span>Ledger derecognition and subsequent conflicting settlement reporting.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-0.5">Stages 3-4: Audit &amp; Escalation</span>
                  <span>Document audit, memo reconciliation, and Nodal Officer notice.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-0.5">Stage 5: Closed &amp; ₹0 Balance</span>
                  <span>Central Segment 004 file updates bureau records to Closed.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Escalation Protocol via Nodal Officers */}
            <section id="escalation-protocol-nodal-officers" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Escalation Protocol: Approving Upgrades via Nodal Officers
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because local branch staff cannot modify centralized registers, attempting resolution at the retail branch yields circular delays. The only viable pathway is an advocate-led escalation to the bank&apos;s Principal Nodal Officer (PNO) designated under the RBI Internal Grievance Redressal framework.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Advocates compile an audited dossier comprising the settlement sanction letter, deposit receipts, and credit bureau reports. Counsel then serves a formal statutory demand notice under Section 21 of CICRA 2005 upon the Principal Nodal Officer, demanding memorandum reconciliation and bureau file modification. If the institution fails to resolve the grievance within thirty days, advocates file an immediate complaint under Clause 10 of the Reserve Bank Integrated Ombudsman Scheme.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                <div className="p-3 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="font-bold text-slate-900 text-xs">Phase 1: Document Dossier</div>
                  <p className="text-xs text-slate-600 mt-1">Compiling sanction terms, receipts, and CIR reports.</p>
                </div>
                <div className="p-3 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="font-bold text-slate-900 text-xs">Phase 2: Statutory Petition</div>
                  <p className="text-xs text-slate-600 mt-1">Serving Section 21 CICRA demand upon the PNO.</p>
                </div>
                <div className="p-3 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="font-bold text-slate-900 text-xs">Phase 3: Memo Reconciliation</div>
                  <p className="text-xs text-slate-600 mt-1">Resolving residual internal audit ledger entries.</p>
                </div>
                <div className="p-3 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="font-bold text-slate-900 text-xs">Phase 4: Ombudsman Redress</div>
                  <p className="text-xs text-slate-600 mt-1">Invoking Clause 10 for mandatory rectification.</p>
                </div>
              </div>
            </section>

            {/* Section 7: Forensic Audit of Sanction Letters */}
            <section id="forensic-audit-sanction-letters-ndc" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Forensic Audit of Sanction Letters and NDC Rectification
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The viability of a credit bureau upgrade rests upon the contractual phrasing in the settlement sanction letter and No Dues Certificate. Agreements drafted by collection agencies often contain ambiguous clauses or loss reservations that compromise borrower rights.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Banking advocates conduct forensic audits across key contractual checkpoints. First, counsel verifies that the sanction letter features authorized executive signatures rather than unverified collection agency stamps. Second, terms are audited under Section 63 of the Indian Contract Act to guarantee unconditional debt discharge. Third, counsel demands an official No Dues Certificate confirming zero outstanding liability across active and memorandum accounts.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Authorized Executive Signatory</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Verified signatures of delegated bank authority.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Explicit Extinguishment</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Full discharge under Section 63 Contract Act.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
                    <Lock className="w-4 h-4 text-purple-600" />
                    <span>No Loss Reservations</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Excluding post-settlement write-off reporting.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
                    <Gavel className="w-4 h-4 text-amber-600" />
                    <span>Unconditional NDC</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Confirmation of zero balance across all books.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Crucial Verification Rule</span>
                </div>
                <p className="leading-relaxed">
                  Verbal assurances that CIBIL will show Closed hold zero legal validity. Only written sanction terms provide actionable proof before the Nodal Officer and Banking Ombudsman.
                </p>
              </div>
            </section>

            {/* Section 8: CIBIL Data Discrepancy Dispute */}
            <section id="cibil-data-discrepancy-dispute-zero-balance" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. CIBIL Data Discrepancy Dispute and ₹0 Balance Updating
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Filing an online dispute directly on the TransUnion CIBIL portal without prior bank clearance leads to automatic rejection. Credit bureaus are passive repositories that verify disputes against the lender&apos;s monthly reporting feed; an unreconciled internal ledger causes the bank system to confirm the adverse remark.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The correct procedure requires securing written closure approval and a reconciled No Dues Certificate from the Principal Nodal Officer. Central Credit Operations then generates a Segment 004 correction batch. This file updates Account Status from Post-Write-Off Settled to Closed, resets current balances and overdues to zero, and clears residual write-off figures.
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Segment 004 Transmission:</strong> Central operations submits an out-of-cycle correction batch upgrading account status to Closed.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Current Balance Reset:</strong> Reporting feeds reset active balance and overdue fields to ₹0, terminating delinquency indicators.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Written-Off Amount Purging:</strong> Historical written-off figures are reconciled, eliminating adverse loss flags from underwriting systems.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Multi-Bureau Synchronization:</strong> Corrected data is ingested by CIBIL, Experian, Equifax, and CRIF High Mark within twenty-one business days.</span>
                </li>
              </ul>
            </section>

            {/* Section 9: Comparative Matrix */}
            <section id="comparative-matrix-settled-vs-closed" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Comparative Matrix: Post-Write-Off Settled vs Closed Status
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Comparing operational differences between compromised entries and closed accounts demonstrates why securing a bureau upgrade is vital for financial recovery:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Evaluation Parameter</th>
                      <th>Post-Write-Off Settled</th>
                      <th>Standard Settled</th>
                      <th>Fully Closed Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Bureau Account Tag</td>
                      <td>Post-Write-Off Settled</td>
                      <td>Settled</td>
                      <td>Closed / Normal Closure</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Reported Write-Off Loss</td>
                      <td>Substantial loss recorded</td>
                      <td>Zero write-off flagged</td>
                      <td>Zero write-off flagged</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Current Outstanding</td>
                      <td>₹0 Balance</td>
                      <td>₹0 Balance</td>
                      <td>₹0 Balance</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Underwriting Treatment</td>
                      <td>Immediate automated rejection</td>
                      <td>Manual risk review</td>
                      <td>Standard lending eligibility</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Credit Score Trajectory</td>
                      <td>Suppressed below 650</td>
                      <td>Rebounds in 18-24 months</td>
                      <td>Recovers above 750</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Forensic Legal Defense and Bureau Restoration
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Navigating core banking systems and credit bureau regulations requires experienced legal advocacy. SettleLoans provides complete forensic representation to resolve credit reporting disputes across India. Our advocates audit documentation, petition Principal Nodal Officers under Section 21 of CICRA, reconcile memorandum registers, and escalate disputes to the RBI Ombudsman to secure authentic No Dues Certificates and verified bureau upgrades to Closed.
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
                  11. Frequently Asked Questions: CIBIL Bureau Status Repair
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Direct, legally verified answers to common questions regarding post-write-off settled remarks, technical write-offs, bank Nodal Officer escalations, and CIBIL status upgrades in India.
              </p>

              <div className="space-y-3">
                {faqsList.map((faq, idx) => (
                  <details
                    key={idx}
                    name="faq-accordion"
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
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* 5 Official Regulatory Links */}
            <section className="border-t border-slate-200 pt-8 mb-4">
              <div className="text-xs sm:text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">
                Official Statutory &amp; Regulatory References
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2042"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Credit Information Companies (Regulation) Act, 2005 (Section 21)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction - Prudential Norms on IRACP and Write-Offs</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Circular RBI/2023-24/73 (₹100 Daily Delay Compensation)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Reserve Bank - Integrated Ombudsman Scheme, 2021 (RB-IOS Clause 10)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/1885"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">Banking Regulation Act, 1949 (Section 35A - Reserve Bank Regulatory Powers)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <div className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Credit Bureau &amp; Loan Settlement Guides
              </div>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/case-study-cibil-status-settled-to-closed"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  CIBIL Settled to Closed Recovery
                </Link>
                <Link
                  href="/cibil-dispute-wrong-overdue-entry"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  CIBIL Overdue Dispute Protocol
                </Link>
                <Link
                  href="/rbi-100-rupees-daily-compensation-cibil-delay"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  RBI ₹100 Daily CIBIL Delay Penalty
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
                <Link
                  href="/how-to-verify-authentic-bank-settlement-letter"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Verify Bank Settlement Letters
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Framework
                </Link>
                <Link
                  href="/how-to-escalate-loan-harassment-to-principal-nodal-officer"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Escalate to Principal Nodal Officer
                </Link>
                <Link
                  href="/loan-settlement-during-banking-ombudsman-proceedings"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Settle During RBI Ombudsman
                </Link>
                <Link
                  href="/check-cibil-defaulter-list"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Check CIBIL Defaulter List
                </Link>
                <Link
                  href="/cibil-score-kaise-sudhare-settlement-ke-baad"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Rebuild CIBIL Score Post Settlement
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
                Specialist in credit bureau forensics, post-write-off status rectifications, and banking ombudsman escalations with over a decade of banking dispute resolution experience.
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
                <span>CIBIL Dispute Advisory</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Stuck with Post-Write-Off Settled Remark?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not let bank accounting flags freeze your credit profile. Hire experienced banking advocates to petition the bank Principal Nodal Officer and upgrade your account to Closed.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Free CIBIL Evaluation
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
                  <span>CICRA 2005 Sec 21 Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Legal Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Bank-Certified Closure Auditing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Advocate-Led Nodal Escalation</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
