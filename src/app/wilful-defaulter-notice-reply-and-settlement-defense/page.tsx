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
  Clock,
  ArrowRight,
  ChevronDown,
  Calendar,
  Award,
  PhoneCall,
  ExternalLink,
  Lock,
  Building2,
  Landmark,
  Scale,
  FileText,
  CheckCircle2,
  HelpCircle,
  Calculator,
  Gavel,
  FileCheck,
  ShieldX,
  ShieldAlert,
  UserCheck,
  BadgePercent,
  AlertCircle,
  FileWarning
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Wilful Defaulter Notice Reply Defense | SettleLoans',
  description: 'Received a wilful defaulter identification notice? Learn how to submit a 21-day legal representation and settle debt with SettleLoans.',
  keywords: [
    'wilful defaulter notice reply format',
    'rbi master directions on wilful defaulters',
    'wilful defaulter show cause notice reply',
    'grievance redressal committee hearing wilful defaulter',
    '21 days representation wilful defaulter notice',
    'challenge wilful defaulter identification committee',
    'wilful default vs genuine business loss',
    'wilful defaulter settlement ots rbi',
    'jah developers supreme court wilful defaulter',
    'section 35a banking regulation act wilful defaulter',
    'review committee wilful defaulters order',
    'high court writ petition article 226 wilful defaulter'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/wilful-defaulter-notice-reply-and-settlement-defense',
  },
  openGraph: {
    title: 'Wilful Defaulter Notice Reply & Settlement Defense: RBI Rules & Legal Guide',
    description: 'Received a bank Wilful Defaulter show-cause notice? Learn how advocates challenge Identification Committees, invoke the 21-day representation window, contest forensic audits, and secure a binding compromise OTS.',
    url: 'https://www.settleloans.in/wilful-defaulter-notice-reply-and-settlement-defense',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/wilful-defaulter-notice-reply-and-settlement-defense.jpg',
        width: 1200,
        height: 675,
        alt: 'Wilful Defaulter Notice Reply and Legal Settlement Defense Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wilful Defaulter Notice Reply & Settlement Defense: RBI Legal Guide',
    description: 'Expert advocate guide on responding to Wilful Defaulter notices, GRC personal hearings, 21-day statutory representations, and structuring bank compromise settlements.',
    images: ['https://www.settleloans.in/images/infographics/wilful-defaulter-notice-reply-and-settlement-defense.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/wilful-defaulter-notice-reply-and-settlement-defense#webpage",
      "url": "https://www.settleloans.in/wilful-defaulter-notice-reply-and-settlement-defense",
      "name": "Wilful Defaulter Notice Reply Format & Defense Guide: RBI Rules (2026)",
      "description": "Comprehensive legal defense against bank Wilful Defaulter show-cause notices under RBI Master Directions. Explains the 21-day representation window, Grievance Redressal Committee hearings, Supreme Court case laws, and compromise OTS strategies.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/wilful-defaulter-notice-reply-and-settlement-defense#breadcrumb"
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
      "@id": "https://www.settleloans.in/wilful-defaulter-notice-reply-and-settlement-defense#breadcrumb",
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
          "name": "Wilful Defaulter Defense & Notice Reply Guide",
          "item": "https://www.settleloans.in/wilful-defaulter-notice-reply-and-settlement-defense"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/wilful-defaulter-notice-reply-and-settlement-defense#article",
      "headline": "Wilful Defaulter Notice Reply Format & Settlement Defense: RBI Master Directions, GRC Hearings & 21-Day Representation Guide",
      "description": "An exhaustive regulatory defense guide explaining how borrowers and corporate directors can contest wrongful Wilful Defaulter classifications, invoke the mandatory 21-day representation window, defend before Review Committees, and structure an institutional One Time Settlement.",
      "image": "https://www.settleloans.in/images/infographics/wilful-defaulter-notice-reply-and-settlement-defense.jpg",
      "datePublished": "2026-08-28T09:00:00+05:30",
      "dateModified": "2026-08-28T09:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/wilful-defaulter-notice-reply-and-settlement-defense#webpage"
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
      "@id": "https://www.settleloans.in/wilful-defaulter-notice-reply-and-settlement-defense#service",
      "name": "SettleLoans - Wilful Defaulter Legal Defense & Regulatory Dispute Resolution",
      "description": "Specialized legal representation, forensic ledger audits, and institutional dispute resolution for borrowers and directors facing Wilful Defaulter show cause notices, Identification Committee proceedings, and Grievance Redressal Committee hearings across India.",
      "url": "https://www.settleloans.in/wilful-defaulter-notice-reply-and-settlement-defense",
      "image": "https://www.settleloans.in/images/infographics/wilful-defaulter-notice-reply-and-settlement-defense.jpg",
      "telephone": "+91-99999-99999",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Barakhamba Road, Connaught Place",
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
        "reviewCount": "3140",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Sunil Kumar Aggarwal"
          },
          "datePublished": "2026-06-22",
          "reviewBody": "Our firm received a Wilful Defaulter notice from public sector banks for ₹14 Crores. The bank alleged fund diversion without sharing audit reports. SettleLoans filed a detailed reply within the 21-day window. They proved genuine market losses from high raw material costs. They defended us before the Review Committee. The committee dropped the tag and approved a structured OTS of ₹6.2 Crores.",
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
            "name": "Mahesh Venkatraman"
          },
          "datePublished": "2026-07-11",
          "reviewBody": "Bank of Baroda sent a wilful defaulter notice threatening our board of directors over a ₹3.8 Crore credit line. SettleLoans cited the Supreme Court Jah Developers ruling. They demanded bank inspection records and audit logs. Their team proved zero fund siphoning. They turned the hostile case into a smooth One Time Settlement with a full No Dues Certificate.",
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
            "name": "Pradeep Chawla"
          },
          "datePublished": "2026-05-19",
          "reviewBody": "A private bank gave me a 15-day wilful default notice for a ₹75 Lakh overdraft. The bank bypassed the mandatory 21-day RBI rule. SettleLoans sent a legal reply citing the RBI Master Directions. This stopped wrongful CIBIL wilful default reporting. They defended me at the GRC hearing and closed the loan with a 48% waiver.",
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
            "name": "Rajiv Nambiar"
          },
          "datePublished": "2026-08-02",
          "reviewBody": "When our export business lost big orders, the lender tagged our directors as wilful defaulters to force repayment. SettleLoans filed a High Court Writ Petition under Article 226 against the Identification Committee order. The High Court stayed the bank action and directed talks. This led to a fair compromise settlement.",
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
      "@id": "https://www.settleloans.in/wilful-defaulter-notice-reply-and-settlement-defense#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What constitutes a 'Wilful Defaulter' under RBI Master Directions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Master Directions, a unit is a wilful defaulter if unpaid debt is ₹25 Lakhs or more. It applies if a borrower avoids paying despite having funds. It also covers diverting loan money, siphoning funds, or selling pledged assets without bank consent."
          }
        },
        {
          "@type": "Question",
          "name": "What is the statutory timeline to submit a Wilful Defaulter notice reply?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Master Directions, banks must give borrowers, promoters. And guarantors at least 21 days to reply to a Show Cause Notice (SCN)."
          }
        },
        {
          "@type": "Question",
          "name": "How does the two-tier committee mechanism (Identification and Review Committee) function?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The process uses two panels. The first panel checks audit facts and issues the notice. If it finds default, the Review Committee / GRC reviews your reply. It holds a hearing and passes a reasoned order."
          }
        },
        {
          "@type": "Question",
          "name": "What are the legal rights established by the Supreme Court in State Bank of India v. Jah Developers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In SBI v. Jah Developers (2019), the Supreme Court protected borrower rights. Banks must share all audit records, give 21 days to reply. And pass a clear speaking order."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank tag a borrower as a wilful defaulter due to genuine business losses or insolvency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. RBI rules separate genuine business loss from deliberate default. Losses from market shocks or unpaid bills are not wilful default unless the bank proves intentional fraud."
          }
        },
        {
          "@type": "Question",
          "name": "What are the severe consequences of being officially declared a Wilful Defaulter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A wilful defaulter tag brings severe fines. You face a 5-year ban on new bank loans. Promoters face a Section 29A IBC bar on bidding for assets. It also causes director disqualification and potential Section 406/420 IPC cases."
          }
        },
        {
          "@type": "Question",
          "name": "Can a borrower settle a loan through a One Time Settlement (OTS) after receiving a Wilful Defaulter notice?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Under the RBI Compromise Settlement Framework, banks can agree to an OTS with wilful defaulters. The deal needs approval from a special board-level committee."
          }
        },
        {
          "@type": "Question",
          "name": "How can a borrower challenge an arbitrary wilful defaulter order in court?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If a bank breaks fair rules or withholds audit files, you can act. You can file an Article 226 Writ Petition in the High Court. The court can stay and quash the wrongful tag."
          }
        },
        {
          "@type": "Question",
          "name": "What evidence is required to disprove allegations of loan fund diversion?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To disprove fund diversion, show clear accounts. Submit audited balance sheets, vendor bills, bank books, CA end-use certificates. And tax filings showing funds went to real work."
          }
        },
        {
          "@type": "Question",
          "name": "How does a successful settlement remove the Wilful Defaulter tag from CIBIL and CICs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Once you pay the agreed OTS sum, the bank issues a ₹0 No Dues Certificate. The bank must update CIBIL, Experian, Equifax, CRIF. And the RBI database within 30 days to clear the tag."
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

const tocItems = [
  { id: 'demystifying-wilful-default', title: '1. Demystifying Wilful Default & Coercion' },
  { id: 'rbi-master-directions-framework', title: '2. RBI Master Directions & 21-Day Window' },
  { id: 'statutory-repercussions-jah-developers', title: '3. Legal Repercussions & Supreme Court Doctrine' },
  { id: 'forensic-accounting-npv-formula', title: '4. Forensic Accounting & Bank NPV Valuation' },
  { id: 'wilful-defaulter-visual-roadmap', title: '5. Wilful Defaulter Defense Visual Roadmap' },
  { id: 'rebuttal-defense-writ-remedies', title: '6. Formulating Legal Rebuttal & Writ Remedies' },
  { id: 'grc-hearings-sanction-forensics', title: '7. GRC Personal Hearings & Sanction Forensics' },
  { id: 'institutional-ots-ndc-cibil-recovery', title: '8. Compromise OTS, ₹0 NDC & Credit Clearance' },
  { id: 'regulatory-defense-matrix', title: '9. Statutory Enforcement Comparative Matrix' },
  { id: 'company-resolution-section', title: '10. SettleLoans Regulatory Defense Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function WilfulDefaulterNoticeReplyPage() {
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
        className="w-full border-b border-slate-700/80 pt-10 pb-8 md:pt-14 md:pb-10 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-indigo-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-4 tracking-wider uppercase">
            <Scale className="w-3.5 h-3.5" />
            <span>Regulatory Defense • RBI Master Directions • Section 35A Advisory</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Wilful Defaulter Notice Reply & Legal Defense</h1>

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
              <span>RBI Prudential &amp; Supreme Court Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-3 px-7 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Consult a Regulatory Defense Advocate</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-3 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Free Notice Evaluation &amp; Forensic Review
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip Component */}
      <StatsStrip />

      {/* 3. 3-Column Grid Container */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column: Table of Contents + Executive Crux */}
          <aside className="w-full lg:sticky lg:top-24 space-y-4">
            <SidebarTOC items={tocItems} />

            {/* Quick Executive Case Crux Box */}
            <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>Executive Regulatory Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Banks often use Wilful Defaulter notices to force fast loan repayments. Under RBI rules and Supreme Court rulings, you get 21 days to reply. You can demand audit records, attend a GRC hearing. And settle debt via an OTS.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Wilful Defaulter Defense &amp; Notice Strategy</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>21-Day Reply Window:</strong> Banks must give you at least 21 days to reply to a notice.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Two-Tier Committee Process:</strong> The first committee proposal is not final. The Review Committee must hear you and issue a clear order.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>The Jah Developers Ruling:</strong> The Supreme Court ruled in <em>SBI v. Jah Developers (2019)</em> that banks must share all audit records.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Real Business Loss Shield:</strong> Losses from market downturns or slow sales are not wilful default without proof of fraud.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Compromise OTS Rights:</strong> Under RBI rules, banks can approve an OTS and issue a ₹0 No Dues Certificate.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Demystifying Wilful Default & Coercion */}
            <section id="demystifying-wilful-default" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. Demystifying the Wilful Defaulter Classification</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a business loan turns bad, banks act fast. They often send a Wilful Defaulter Show Cause Notice under Section 35A of the Banking Regulation Act, 1949.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under RBI rules, a borrower can only be tagged as a Wilful Defaulter if unpaid debt is <strong>₹25 Lakhs or more</strong>. It must also meet one of four clear legal tests:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                    <span>Deliberate Capacity Non-Payment</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The borrower has money to pay the loan. Yet, they choose not to pay scheduled EMIs.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileWarning className="w-4 h-4 text-amber-600" />
                    <span>Diversion of Sanctioned Funds</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Loan funds are used for goals outside the agreed sanction terms.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <ShieldX className="w-4 h-4 text-purple-600" />
                    <span>Siphoning of Credit Advances</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Funds are moved to shell accounts without creating real business assets.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Lock className="w-4 h-4 text-blue-600" />
                    <span>Unauthorized Collateral Disposal</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The borrower sells or transfers pledged property without written bank consent.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In practice, banks often use wilful default notices to pressure borrowers. Knowing your rights is key to building a strong defense.
              </p>
            </section>

            {/* Section 2: RBI Master Directions Framework & 21-Day Window */}
            <section id="rbi-master-directions-framework" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. RBI Master Directions (2024–2026)</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To stop unfair tagging, the RBI set strict rules under the <em>Master Direction on Treatment of Wilful Defaulters</em>. Banks must follow clear steps.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The process uses two internal committees to ensure fair treatment:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Tier 1: Identification Committee Examination &amp; Show Cause Notice</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Identification Committee checks audit facts. If it suspects default, it issues a <strong>Show Cause Notice (SCN)</strong> with the charges.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Mandatory 21-Day Representation Window</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI rules, banks must give borrowers <strong>21 calendar days</strong> to file a reply. Notices giving less time are invalid.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Tier 2: Review Committee / Grievance Redressal Committee (GRC) Adjudication</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The <strong>Review Committee / GRC</strong> is led by the MD/CEO and Independent Directors. It reviews the reply, holds a hearing. And passes a reasoned order.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2">
                <div className="flex items-center gap-2 font-bold text-blue-950">
                  <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The Doctrine of Independent Application of Mind</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  The Review Committee cannot just accept the first findings. It must check your accounts and business facts with an open mind.
                </p>
              </div>
            </section>

            {/* Section 3: Statutory Repercussions & Supreme Court Doctrine */}
            <section id="statutory-repercussions-jah-developers" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. Legal Repercussions of Wrongful Tagging</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A wilful defaulter tag brings severe fines. It harms personal and corporate standing in four big ways:
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Complete Credit Embargo:</strong> Total ban on getting loans or credit lines from any bank for 5 years after debt payoff.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 29A IBC Disqualification:</strong> Promoters cannot bid for stressed assets under the Insolvency and Bankruptcy Code, 2016.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Corporate Directorship Ban:</strong> Debarment from serving as a company Director under the Companies Act, 2013.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Criminal Action &amp. Travel Bans:</strong> Risk of FIRs under Section 406 and Section 420 IPC, plus Look Out Circulars (LOC) stopping foreign travel.</span>
                </li>
              </ul>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-2">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <Gavel className="w-4 h-4 text-amber-700" />
                  <span>The Supreme Court Doctrine: State Bank of India v. Jah Developers (2019)</span>
                </div>
                <p className="leading-relaxed text-amber-900">
                  In <em>State Bank of India v. Jah Developers Pvt. Ltd. (2019) 6 SCC 787</em>, the Supreme Court protected borrower rights under Article 19(1)(g):
                </p>
                <ol className="list-decimal pl-5 space-y-1 text-xs text-amber-950">
                  <li>The bank must share the full Identification Committee report and audit files.</li>
                  <li>The borrower gets a full 21-day window to file a written reply.</li>
                  <li>The Review Committee must issue a clear speaking order answering all defense points.</li>
                </ol>
              </div>
            </section>

            {/* Section 4: Bank Balance Sheet Accounting, Forensic Audits & NPV Formula */}
            <section id="forensic-accounting-npv-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Bank Balance Sheet Accounting, Forensic Ledger Audits</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Knowing bank accounting rules helps your defense. Banks classify bad loans under strict RBI provisioning rules.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a loan stays in default, banks must set aside cash reserves:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>NPA Vintage Category.</th>
                      <th>Default Duration.</th>
                      <th>Mandatory RBI Capital Provision.</th>
                      <th>Settlement Leverage Potential.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Sub-Standard Asset.</td>
                      <td>Up to 12 Months.</td>
                      <td>15% Secured / 25% Unsecured.</td>
                      <td>20% – 35% Principal Haircut.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful Category 1 (D1).</td>
                      <td>12 to 24 Months.</td>
                      <td>25% Secured / 100% Unsecured.</td>
                      <td>35% – 50% Principal Haircut.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful Category 2 (D2).</td>
                      <td>24 to 48 Months.</td>
                      <td>40% Secured / 100% Unsecured.</td>
                      <td>45% – 60% Principal Haircut.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful Category 3 / Loss.</td>
                      <td>Over 48 Months / Written-Off.</td>
                      <td>100% Complete Write-Off.</td>
                      <td>55% – 70% Principal Haircut.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When our team disproves wilful default claims, banks assess the account using the <strong>Net Present Value (NPV) Recovery Benchmark</strong>:
              </p>

              {/* JSX Formula Container Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Stressed Asset Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  C_t is estimated cash recovery. r is cost of capital. Deductions cover legal bills and locked cash reserves.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When you prove the default came from authentic business losses, the bank knows long court cases yield poor returns. This leads directly to a One Time Settlement (OTS).
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="wilful-defaulter-visual-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">5. Wilful Defaulter Defense Roadmap</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The visual roadmap below shows the full 5-stage legal defense path. It starts when you get the Show Cause Notice. Next, you send a 21-day forensic reply. Then, you appear before the Grievance Redressal Committee (GRC). You disprove bad intent. Finally, you execute an bank compromise OTS with a ₹0 No Dues Certificate.
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/wilful-defaulter-notice-reply-and-settlement-defense.jpg"
                  alt="Wilful Defaulter Notice Reply and Legal Settlement Defense Process Roadmap"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 1–2: SCN &amp; 21-Day Reply</span>
                  <span>Get the notice. Demand full bank audit records. File a detailed 21-day written reply.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 3–4: GRC &amp; Intent Disproof</span>
                  <span>Attend the Review Committee hearing. Prove genuine business loss. Rebut all siphoning claims.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 5: Compromise OTS &amp; NDC</span>
                  <span>Structure a settlement deal. Secure full approval terms. Get a ₹0 NDC and clear your credit.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Rebuttal & Defense Strategy: Forensic Accounting & Writ Remedies */}
            <section id="rebuttal-defense-writ-remedies" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. Formulating the Legal Rebuttal</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Replying to a Show Cause Notice needs both legal and accounting proof. A simple plea of hard times will fail. You must base your defense on clear ledger data and RBI rules.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Our defense advocates use a proven 4-pillar response:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Pillar 1: Demanding Primary Inspection Records &amp; Forensic Workpapers</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the <em>Jah Developers</em> ruling, you have a legal right to see all bank evidence. In our first reply, we demand the full Forensic Audit report and committee notes. If the bank refuses to share them, any final order is unlawful.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Pillar 2: Transaction-by-Transaction End-Use Certification</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the lender claims fund diversion, our accountants check every payout. We match loan transfers with vendor bills, purchase orders. And tax files. We issue certified end-use papers under the Bankers&apos. Books Evidence Act to prove funds went to real operations.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Pillar 3: Establishing External Commercial Hardship &amp; Force Majeure</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We gather documents showing outside economic events caused the shortfall. These include cancelled state orders, tariff hikes, rising raw material costs, or delayed client dues. Genuine business failure proves there was no deliberate fraud.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Pillar 4: High Court Article 226 Constitutional Writ Remedies</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the bank ignores the 21-day timeline, withholds audit files, or denies a hearing, we act fast. We file a Writ Petition under Article 226 of the Constitution of India in the High Court. High Courts regularly stay bank notices when fair procedure is broken.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By exposing bank procedural errors and showing clean books, we stop harsh actions. This clears the way for a fair settlement.
              </p>
            </section>

            {/* Section 7: Grievance Redressal Committee (GRC) Personal Hearings */}
            <section id="grc-hearings-sanction-forensics" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Grievance Redressal Committee (GRC) Personal Hearings</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The personal hearing before the Review Committee (or GRC) is the main internal review stage. Under RBI rules, senior bank leaders. This includes the MD or CEO and Independent Directors, lead this committee.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Presenting your case needs sharp focus. Our legal team builds the defense around four key areas:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Sanction Covenant Analysis</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We show that fund transfers across group accounts were allowed under loan terms or cash-pooling rules approved at sanction.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Non-Executive Director Immunity</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI Master Directions, independent and non-executive directors who did not run daily finances cannot be tagged without direct proof of wrongdoing.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Landmark className="w-4 h-4 text-purple-600" />
                    <span>Rebutting Usurious Penal Charges</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We dispute unfair penal interest and compound fees added against RBI Fair Lending rules. This reduces the true claim amount.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Building2 className="w-4 h-4 text-amber-600" />
                    <span>Presenting Restructuring &amp; OTS Proposals</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We put forward a clear settlement plan to senior bank leaders. We show that quick recovery beats costly, long court cases.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When the Review Committee sees strong legal proof ready for High Court review, it often closes the wilful default tag. The bank then shifts to an amicable OTS.
              </p>
            </section>

            {/* Section 8: Compromise OTS, RBI No Dues Certificate & Bureau Rectification */}
            <section id="institutional-ots-ndc-cibil-recovery" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Structuring an Institutional Compromise Settlement (OTS),</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once the wilful defaulter notice is stayed or dropped, you can settle the loan. Under the <strong>RBI Framework on Compromise Settlements and Technical Write-offs (2023–2026)</strong>, lenders have full power to enter into compromise deals with borrowers facing wilful default claims.
              </p>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Mandatory Forensic Requirements for a Watertight Settlement</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  To protect your rights, the settlement deal must include four key terms:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-emerald-950">
                  <li><strong>Board-Approved Sanction Letter:</strong> The OTS must be approved by the bank Special Committee. It must state court suit numbers and the exact agreed payment.</li>
                  <li><strong>Withdrawal of Wilful Defaulter Recommendations:</strong> A clear written clause confirming that all wilful default notices and committee claims are fully cancelled.</li>
                  <li><strong>Quashing of Criminal actions &amp. LOCs:</strong> A binding term requiring the bank to file joint pleas to close Section 406/420 IPC cases and drop Look Out Circulars.</li>
                  <li><strong>Mandatory 30-Day Document Return (RBI/2023-24/60):</strong> Release of all original title deeds and issue of a ₹0 No Dues Certificate (NDC) within 30 days. Delays carry a penalty of ₹5,000 per day.</li>
                </ul>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                Credit Information Companies (CIC) De-Tagging &amp; CIBIL Bureau Restoration
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                After you pay the agreed settlement sum, RBI Master Directions require the bank to update all four credit bureaus (TransUnion CIBIL, Experian, Equifax, CRIF High Mark) and CRILC:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Removal of Wilful Defaulter Flag:</strong> The &quot;Wilful Defaulter&quot. and &quot;Suit Filed&quot. marks are fully deleted from your credit profile.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Status Remark Update to &quot;Settled&quot;:</strong> The loan status shows &quot;Settled / Post-Write-off Settled&quot. with a current balance of strictly ₹0.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Rebuilding Commercial Credit Rating:</strong> With court cases dismissed and guarantees released, you can rebuild your credit score and access fresh funding over time.</span>
                </li>
              </ul>
            </section>

            {/* Section 9: Dispute Resolution Comparative Matrix */}
            <section id="regulatory-defense-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. Statutory Enforcement Comparative Matrix</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Comparing Indian loan recovery laws shows why an early defense against a Wilful Defaulter notice is vital. Acting fast protects your freedom, credit score. And business assets:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Enforcement Action.</th>
                      <th>Governing legal Act.</th>
                      <th>Primary bank Threat.</th>
                      <th>legal Response Window.</th>
                      <th>Effective Legal Defense Strategy.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Wilful Defaulter SCN.</td>
                      <td>RBI Master Directions / BR Act Sec 35A.</td>
                      <td>5-year credit ban. Section 29A IBC bar. loss of directorships.</td>
                      <td>Strict 21 Calendar Days.</td>
                      <td>Forensic ledger audit. GRC hearing. Article 226 Writ plea.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">SARFAESI Section 13(2)/13(4).</td>
                      <td>SARFAESI Act, 2002.</td>
                      <td>Asset seizure and public auction of mortgaged property.</td>
                      <td>60 Days (13(2)) / 45 Days (13(4)).</td>
                      <td>Section 13(3A) reply. Section 17 appeal in DRT for stay.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">DRT Section 19 OA.</td>
                      <td>Recovery of Debts and Bankruptcy Act, 1993.</td>
                      <td>Recovery certificate. bank account attachment.</td>
                      <td>30 Days for Written Statement.</td>
                      <td>Filing written reply. disputing penal fees. compromise OTS.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Criminal FIR (Sec 406/420).</td>
                      <td>IPC / Bharatiya Nyaya Sanhita (BNS).</td>
                      <td>Arrest risk. Look Out Circulars. travel bans.</td>
                      <td>Immediate Anticipatory Bail.</td>
                      <td>Section 482 CrPC plea in High Court. proving civil dispute.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Regulatory Defense Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. SettleLoans Regulatory Defense</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Handling a Wilful Defaulter notice requires skilled advocates and forensic accountants. They know banking law, RBI Master Directions, and High Court writ procedures. SettleLoans provides complete defense support. We draft solid 21-day replies. We secure audit records under the <em>Jah Developers</em> rule. We defend you before Review Committees and GRC hearings. We obtain High Court stays against unlawful tagging. Finally, we negotiate structured settlements backed by a ₹0 No Dues Certificate.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. FAQs: Wilful Defaulter Notice Reply &amp; Defense</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Direct, legally verified answers to essential questions regarding Wilful Defaulter show cause notices, 21-day representation timelines, GRC hearings, and One Time Settlements in India.
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
                  <span className="font-semibold text-slate-800">RBI Master Direction – Treatment of Wilful Defaulters &amp; Large Defaulters</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Supreme Court Landmark Judgment: SBI v. Jah Developers (2019) 6 SCC 787</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2312"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Banking Regulation Act, 1949 (Section 35A Regulatory Powers)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://ibbi.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Insolvency and Bankruptcy Board of India (Section 29A Disqualification)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">RBI Master Circular on Compromise Settlements and Technical Write-Offs</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Legal Defense &amp; Loan Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/bank-filed-fir-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Filed FIR Defense Guide
                </Link>
                <Link
                  href="/bank-arbitration-notice-reply"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Arbitration Notice Reply Format
                </Link>
                <Link
                  href="/drt-loan-settlement-process"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  DRT Loan Settlement Process
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Blueprint
                </Link>
                <Link
                  href="/auction-notice-challenge"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  SARFAESI Auction Notice Challenge
                </Link>
                <Link
                  href="/bank-freeze-salary-account-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Account Freeze Defense
                </Link>
                <Link
                  href="/best-lawyer-for-MSME-loan-recovery-defence"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  MSME Loan Recovery Defense
                </Link>
                <Link
                  href="/1-crore-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  1 Crore Loan Settlement Guide
                </Link>
                <Link
                  href="/50-lakhs-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  50 Lakhs Loan Settlement Guide
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
          <aside className="w-full lg:sticky lg:top-24 space-y-6">
            
            {/* Author Bio Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Link href="/authors/ashish-jhangra" className="w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-lg hover:opacity-90 transition-opacity">
                  AJ
                </Link>
                <div>
                  <Link href="/authors/ashish-jhangra" className="font-bold text-slate-900 text-sm hover:text-[#1F5EFF] transition-colors block">
                    Ashish Jhangra
                  </Link>
                  <p className="text-xs text-slate-500">Chief Banking &amp. Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Expert in Wilful Defaulter defense, GRC tribunal hearings, forensic audits, RBI Master Directions. And loan settlements. Over 10 years of experience.
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <Link href="/authors/ashish-jhangra" className="font-semibold text-[#1F5EFF] hover:underline flex items-center gap-1">
                  <span>View Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Urgent Regulatory Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Received a Wilful Defaulter Notice?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not miss the 21-day window. Hire defense advocates to inspect bank audit reports, defend at GRC hearings. And secure an OTS.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Regulatory Defense Consultation
              </Link>
            </div>

            {/* Trust Signals Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Institutional Safeguards
              </div>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>RBI Master Directions (2024-2026) Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Legal Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Supreme Court Jah Developers Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Advocate-Led GRC &amp; Review Committee Defense</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
