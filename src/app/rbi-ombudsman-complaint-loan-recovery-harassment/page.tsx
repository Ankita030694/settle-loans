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
  Check,
  BookOpen,
  ShieldAlert,
  CreditCard,
  Scale,
  FileText,
  CheckCircle2,
  HelpCircle,
  Calculator,
  Gavel,
  FileCheck,
  ShieldX,
  UserCheck,
  BadgePercent,
  AlertCircle,
  FileSpreadsheet
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'RBI Ombudsman Complaint for Recovery Harassment Guide',
  description: 'Learn how to file an RBI Ombudsman complaint for recovery agent harassment on the CMS portal and claim compensation for mental agony.',
  keywords: [
    'how to file rbi ombudsman complaint for recovery harassment',
    'rbi complaint for loan recovery harassment',
    'rbi ombudsman loan settlement',
    'cms rbi portal complaint process',
    'rbi recovery agent calling after 7pm complaint',
    'rbi mental harassment compensation claim',
    'rbi integrated ombudsman scheme 2021',
    'bank recovery agent harassment rbi rules',
    'nbfc harassment complaint to rbi',
    'digital lending app recovery harassment rbi cms',
    'rbi ombudsman compensation section 16',
    'settle loan through rbi ombudsman complaint'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/rbi-ombudsman-complaint-loan-recovery-harassment',
  },
  openGraph: {
    title: 'RBI Ombudsman Complaint for Recovery Harassment Guide',
    description: 'Learn how to file an RBI Ombudsman complaint for loan recovery agent harassment on the CMS portal. Discover how to claim up to ₹1 Lakh for mental agony.',
    url: 'https://www.settleloans.in/rbi-ombudsman-complaint-loan-recovery-harassment',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/rbi-ombudsman-complaint-loan-recovery-harassment.jpg',
        width: 1200,
        height: 675,
        alt: 'RBI Ombudsman Banking Complaints for Loan Recovery Harassment Process Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RBI Ombudsman Complaint for Recovery Harassment Guide',
    description: 'Learn how to file an RBI Ombudsman complaint for loan recovery agent harassment on the CMS portal. Discover how to claim up to ₹1 Lakh for mental agony.',
    images: ['https://www.settleloans.in/images/infographics/rbi-ombudsman-complaint-loan-recovery-harassment.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/rbi-ombudsman-complaint-loan-recovery-harassment#webpage",
      "url": "https://www.settleloans.in/rbi-ombudsman-complaint-loan-recovery-harassment",
      "name": "How to File RBI Ombudsman Complaint for Recovery Harassment: Legal Guide & Compensation (2026)",
      "description": "Learn how to file an RBI Ombudsman complaint for loan recovery agent harassment on the CMS portal. Discover how to claim up to ₹1 Lakh for mental agony, halt third-party intimidation, and leverage regulatory escalation to secure a 50%–65% loan settlement.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/rbi-ombudsman-complaint-loan-recovery-harassment#breadcrumb"
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
      "@id": "https://www.settleloans.in/rbi-ombudsman-complaint-loan-recovery-harassment#breadcrumb",
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
          "name": "RBI Ombudsman Recovery Harassment Guide",
          "item": "https://www.settleloans.in/rbi-ombudsman-complaint-loan-recovery-harassment"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/rbi-ombudsman-complaint-loan-recovery-harassment#article",
      "headline": "The Master Guide to RBI Ombudsman Banking Complaints: Filing Recovery Harassment Cases & Compensation Claims",
      "description": "An exhaustive regulatory guide to lodging complaints under the Reserve Bank - Integrated Ombudsman Scheme, 2021 against banks and NBFCs for unlawful loan recovery harassment, uncredited payments, and privacy violations.",
      "image": "https://www.settleloans.in/images/infographics/rbi-ombudsman-complaint-loan-recovery-harassment.jpg",
      "datePublished": "2026-08-25T12:00:00+05:30",
      "dateModified": "2026-08-25T12:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/rbi-ombudsman-complaint-loan-recovery-harassment#webpage"
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
      "@id": "https://www.settleloans.in/rbi-ombudsman-complaint-loan-recovery-harassment#service",
      "name": "SettleLoans - RBI Regulatory Escalation & Banking Grievance Legal Advisory",
      "description": "Expert advocate representation for distressed borrowers filing complaints before the Reserve Bank of India Integrated Ombudsman against aggressive recovery agents, unauthorized charges, and predatory NBFC collection practices.",
      "url": "https://www.settleloans.in/rbi-ombudsman-complaint-loan-recovery-harassment",
      "image": "https://www.settleloans.in/images/infographics/rbi-ombudsman-complaint-loan-recovery-harassment.jpg",
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
        "reviewCount": "3180",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Vikramaditya Rao"
          },
          "datePublished": "2026-06-19",
          "reviewBody": "Third-party collection agents from an aggressive NBFC were harassing my elderly parents and calling my workplace after 8 PM. SettleLoans drafted a formal grievance notice to the Principal Nodal Officer and escalated the matter to the RBI CMS portal with call recordings and WhatsApp transcripts. The RBI Ombudsman directed the NBFC to halt all third-party contact immediately and awarded ₹35,000 compensation for mental distress, while enabling an amicable 52% OTS closure.",
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
            "name": "Meenakshi Sundaram"
          },
          "datePublished": "2026-07-14",
          "reviewBody": "A private bank refused to adjust my interim partial payments and threatened criminal proceedings on an unsecured credit card balance. The legal team at SettleLoans structured a watertight complaint on the RBI Complaint Management System citing Master Direction violations on outsourcing. The bank's head office stepped in within 18 days, corrected the ledger, waived penal interest, and settled the account for a reasonable one-time payment.",
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
            "name": "Rajeshwar Nair"
          },
          "datePublished": "2026-05-11",
          "reviewBody": "Recovery agents showed up unannounced at my office reception, violating RBI Fair Practices Code and Supreme Court dignity guidelines. SettleLoans advocates helped me file an institutional escalation on cms.rbi.org.in accompanied by CCTV footage. The Ombudsman reprimanded the lending institution, leading to an immediate written apology and an official One-Time Settlement sanction letter.",
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
            "name": "Tanvi Deshmukh"
          },
          "datePublished": "2026-08-04",
          "reviewBody": "A digital lending partner accessed my contacts illegally and sent abusive messages. SettleLoans prepared a comprehensive RBI Ombudsman petition under Digital Lending Directions 2022 along with a compensation claim under Section 16(2) of RB-IOS. The loan app was forced to cancel all illegal penalties and issue a clean No Dues Certificate.",
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
      "@id": "https://www.settleloans.in/rbi-ombudsman-complaint-loan-recovery-harassment#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the RBI Integrated Ombudsman Scheme (RB-IOS 2021)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Reserve Bank - Integrated Ombudsman Scheme (RB-IOS 2021) is a single, unified quasi-judicial framework established by the Reserve Bank of India to provide cost-free, speedy, and impartial resolution of customer grievances against all RBI-regulated entities, including Scheduled Commercial Banks, Regional Rural Banks, Non-Banking Financial Companies (NBFCs), Primary Co-operative Banks, and authorized payment system participants."
          }
        },
        {
          "@type": "Question",
          "name": "When can I file a complaint with the RBI Ombudsman for recovery harassment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can file an RBI Ombudsman complaint if: (1) You have previously lodged a formal written complaint with the bank or NBFC's Grievance Redressal Officer; and (2) The bank has rejected the complaint, provided an unsatisfactory response, or failed to reply within 30 calendar days from the date of submission. The complaint must be filed within one year from receiving the bank's rejection or after the 30-day window lapses."
          }
        },
        {
          "@type": "Question",
          "name": "What recovery practices are strictly prohibited by RBI guidelines?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Master Directions and Fair Practices Codes, recovery agents are strictly prohibited from: calling before 8:00 AM or after 7:00 PM; using threatening, abusive, or unparliamentary language; contacting friends, relatives, or workplace colleagues; visiting a borrower's residence or office unannounced without prior notice; posting defamatory content on social media; sending fake legal notices or summons; and employing physical force or intimidation."
          }
        },
        {
          "@type": "Question",
          "name": "Can the RBI Ombudsman award monetary compensation for mental harassment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Under Section 16(2) of the Reserve Bank - Integrated Ombudsman Scheme, 2021, the Ombudsman has the legal authority to award compensation up to ₹1,00,000 (Rupees One Lakh) to the complainant for loss of time, expenses incurred, harassment, and mental anguish suffered due to deficiency in service by the regulated entity, in addition to actual consequential financial losses up to ₹20 Lakhs."
          }
        },
        {
          "@type": "Question",
          "name": "How does filing an RBI Ombudsman complaint help in negotiating a loan settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When an active RBI Ombudsman complaint is lodged, it escalates directly to the bank's Senior Compliance and Stressed Asset Management teams. Regulated entities face regulatory audit scrutiny, reputational damage, and financial penalties for recovery agent violations. To close open regulatory inquiries swiftly, banks frequently agree to withdraw third-party recovery agencies, waive penal compound interest, and execute an amicable One-Time Settlement (OTS) with 45% to 65% principal haircuts."
          }
        },
        {
          "@type": "Question",
          "name": "What evidence is required to prove loan recovery harassment before the Ombudsman?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Crucial evidence includes: (1) Time-stamped audio call recordings showing threats, foul language, or calls made before 8 AM / after 7 PM; (2) Screenshots of abusive SMS, WhatsApp messages, or WhatsApp calls; (3) Call detail records (CDR) proving persistent frequency; (4) CCTV footage or written witness statements of unauthorized physical visits; (5) Copies of fake legal notices or unauthorized draft summons; and (6) Proof of initial written grievance submission to the bank."
          }
        },
        {
          "@type": "Question",
          "name": "Is there any fee to file a complaint on the RBI Complaint Management System (CMS)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The entire grievance redressal mechanism under the RBI Integrated Ombudsman Scheme is completely free of charge. Neither the Reserve Bank of India nor the Ombudsman charges any filing fees, hearing fees, or administrative processing costs to the borrower."
          }
        },
        {
          "@type": "Question",
          "name": "Can an NBFC or FinTech lending app be reported to the RBI Ombudsman?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. All Non-Banking Financial Companies (NBFC-D, NBFC-ND-SI with asset size of ₹100 Crore or more, and deposit-taking NBFCs) as well as Lending Service Providers (LSPs) operating under digital lending guidelines are covered under RB-IOS 2021. If a digital loan app accesses unauthorized phone permissions or harasses emergency contacts, the parent NBFC/Bank is directly liable for penal action."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if a bank fails to comply with an RBI Ombudsman Award?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An Ombudsman Award becomes binding on the bank once accepted in writing by the complainant within 30 days. If the bank fails to implement the Award, the Ombudsman reports the non-compliance to the RBI's Department of Supervision, which can impose heavy regulatory monetary penalties, regulatory restrictions on lending operations, and mandatory supervisory directions."
          }
        },
        {
          "@type": "Question",
          "name": "Does filing an RBI complaint stop recovery agents from visiting my home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Once an official grievance is logged and an RBI CMS acknowledgement token is generated, presenting this reference number to the bank's collection department creates an immediate compliance hold. Senior bank management instructs ground collection agencies to suspend field visits and third-party recovery while the matter is under regulatory review."
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
  { id: 'rbi-integrated-ombudsman-framework', title: '1. The RB-IOS 2021 Regulatory Framework' },
  { id: 'prohibited-recovery-harassment-tactics', title: '2. Prohibited Recovery Practices & Violations' },
  { id: 'mandatory-30-day-escalation-protocol', title: '3. Mandatory 30-Day Pre-Filing Protocol' },
  { id: 'bank-accounting-npv-recovery-formula', title: '4. Bank Economics & The Ombudsman Equation' },
  { id: 'rbi-ombudsman-resolution-roadmap', title: '5. Visual Regulatory Escalation Roadmap' },
  { id: 'step-by-step-cms-portal-filing', title: '6. Step-by-Step RBI CMS Portal Filing Guide' },
  { id: 'formulating-compensation-claims', title: '7. Claiming Compensation for Mental Agony' },
  { id: 'conciliation-ots-compromise-ndc', title: '8. Conciliation, OTS Haircuts & ₹0 NDC Mandates' },
  { id: 'dispute-escalation-comparative-matrix', title: '9. Institutional Escalation Comparative Matrix' },
  { id: 'settleloans-advocate-representation', title: '10. SettleLoans Legal Defense & Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function RbiOmbudsmanComplaintPage() {
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
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <Landmark className="w-3.5 h-3.5" />
            <span>Highest Regulatory Escalation • RBI Integrated Ombudsman Scheme</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            How to File an RBI Ombudsman Complaint for Loan Harassment
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
              <span>RB-IOS 2021 &amp; Master Direction Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Stop Harassment &amp; File Grievance</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Get Free Legal Case Review
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
              <p className="leading-relaxed text-slate-700">
                Under the Reserve Bank - Integrated Ombudsman Scheme (RB-IOS 2021), unapproved third-party recovery agent harassment, contacting family or employers, abusive language, and calling outside the 8 AM to 7 PM window violate RBI Master Directions. Filing a formal grievance on the RBI CMS portal creates supervisory exposure for the bank and entitles borrowers to claim up to ₹1,00,000 for mental agony while creating leverage for a structured 45%–65% One-Time Settlement.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content */}
          <main className="w-full min-w-0 blog-content space-y-10">

            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 border border-blue-200/80 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2.5 text-[#1F5EFF] font-bold text-sm sm:text-base uppercase tracking-wider mb-4">
                <Award className="w-5 h-5" />
                <span>Key Regulatory Insights: RBI Ombudsman Grievance Mastery</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-800 font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Universal Regulatory Jurisdiction:</strong> The Reserve Bank - Integrated Ombudsman Scheme, 2021 covers all Scheduled Commercial Banks, Non-Banking Financial Companies (NBFCs), Small Finance Banks, and authorized digital Lending Service Providers (LSPs) across India.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Prohibited Harassment Conduct:</strong> Calling before 8:00 AM or after 7:00 PM, calling family members or colleagues, physical intimidation, abusive profanity, and accessing smartphone contacts directly violate RBI Master Directions and Supreme Court rulings.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory 30-Day Mandatory Protocol:</strong> Borrowers must first lodge a formal written grievance with the lending institution&apos;s Grievance Redressal Officer. Once 30 days elapse without resolution, complaints are immediately escalated to the RBI CMS portal at <code>cms.rbi.org.in</code>.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Monetary Compensation Powers:</strong> Under Section 16(2) of RB-IOS 2021, the Ombudsman possesses statutory power to award up to ₹1,00,000 for mental agony and harassment, alongside up to ₹20,00,000 for actual consequential financial losses.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Settlement Negotiation Catalyst:</strong> Formal RBI Ombudsman proceedings trigger direct intervention from senior bank compliance officers, enabling advocates to convert contentious collection files into structured 50%–65% One-Time Settlements with mandatory zero-balance No Dues Certificates.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The RB-IOS 2021 Regulatory Framework */}
            <section id="rbi-integrated-ombudsman-framework" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. RBI Integrated Ombudsman Scheme & Jurisdiction
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India enacted the Reserve Bank - Integrated Ombudsman Scheme, 2021 (RB-IOS 2021) for financial customer protection. This framework introduced a single, unified quasi-judicial mechanism. Operating under Section 35A Banking Regulation Act 1949, Section 45L RBI Act 1934, and Section 18 PSSA 2007, the Integrated Ombudsman holds statutory authority over all Regulated Entities (REs). It eliminates jurisdictional barriers based on loan size or state boundaries. Grievance redressal is now consolidated under the Centralised Receipt and Processing Centre (CRPC) in Chandigarh and the digital Complaint Management System (CMS).
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Every Indian Scheduled Commercial Bank falls squarely under the Ombudsman&apos;s supervisory mandate. This includes SBI, HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra Bank, Regional Rural Banks, Co-operative Banks, and NBFCs. Furthermore, under RBI Guidelines on Digital Lending (RBI/2022-23/111), banks and NBFCs remain vicariously liable for their partners. They are held strictly accountable for coercive tactics committed by Lending Service Providers (LSPs) and outsourced recovery agencies.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers often default on personal loans or credit cards due to genuine hardship, such as illness, business loss, or job loss. In response, lenders frequently outsource overdue portfolios to aggressive third-party collection agencies. These agencies sometimes operate in defiance of central bank directives. The RBI Ombudsman exists to regulate these corporate excesses. It penalizes institutional deficiencies in service and protects the legal rights of distressed citizens.
              </p>
            </section>

            {/* Section 2: Prohibited Recovery Practices & Violations */}
            <section id="prohibited-recovery-harassment-tactics" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Prohibited Recovery Tactics Under RBI Master Directions
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India enforces strict codes of conduct for loan recovery under Circular RBI/2022-23/108 on Outsourcing of Financial Services. Indian jurisprudence unequivocally holds that loan default is strictly a civil breach of contract, never a criminal offense. The Supreme Court of India in <em>ICICI Bank Ltd. v. Shanti Devi Sharma (2008)</em> and <em>Justice K.S. Puttaswamy (Retd.) v. Union of India (2017)</em> established clear limits. Debt recovery cannot involve strong-arm tactics, privacy violations, or psychological intimidation.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4 space-y-3">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-rose-600" />
                  <span>Actionable Regulatory Violations Explicitly Barred by RBI Mandates</span>
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-rose-600 min-w-[20px]">•</span>
                    <span><strong>Unlawful Calling Hours:</strong> Contacting borrowers, co-borrowers, or guarantors before 8:00 AM in the morning or after 7:00 PM in the evening constitutes a prima facie regulatory breach.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-rose-600 min-w-[20px]">•</span>
                    <span><strong>Third-Party Contact &amp; Shaming:</strong> Calling family members, parents, spouses, siblings, neighbors, or corporate workplace colleagues regarding a borrower&apos;s overdue balance violates Section 21 Right to Privacy.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-rose-600 min-w-[20px]">•</span>
                    <span><strong>Verbal Abuse &amp; Threatening Tone:</strong> Using unparliamentary language, issuing physical threats, or making humiliating remarks during tele-calls or physical visits constitutes actionable harassment.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-rose-600 min-w-[20px]">•</span>
                    <span><strong>Unannounced Physical Intrusions:</strong> Visiting a borrower&apos;s home or office without proper prior intimation, refusing to display institutional identity cards and Indian Institute of Banking and Finance (IIBF) DRA accreditation, or creating a public disturbance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-rose-600 min-w-[20px]">•</span>
                    <span><strong>Fraudulent Legal Notices &amp; Fake Summons:</strong> Sending forged court notices, fake police arrest threats, fabricated warrants, or simulated magistrate summons designed to induce extreme panic.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-rose-600 min-w-[20px]">•</span>
                    <span><strong>Digital Contact Scraping &amp; Image Defamation:</strong> Unlawful harvesting of smartphone address books, photo galleries, or sending morphed photographs to emergency contacts via messaging platforms.</span>
                  </li>
                </ul>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a bank or NBFC engages in any of these prohibited actions, the borrower gains immediate legal standing to initiate formal regulatory proceedings. The RBI Ombudsman treats recovery harassment not merely as an individual consumer grievance, but as a systemic compliance breakdown that exposes the financial institution to severe administrative penalties and supervisory audit ratings downgrades.
              </p>
            </section>

            {/* Section 3: Mandatory 30-Day Pre-Filing Protocol */}
            <section id="mandatory-30-day-escalation-protocol" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Statutory Pre-Conditions: 30-Day Grievance Protocol
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Clause 10 of the Reserve Bank - Integrated Ombudsman Scheme, 2021, the Ombudsman will reject complaints if the mandatory preliminary grievance protocol is bypassed. The legal architecture requires that the regulated financial institution be given an institutional opportunity to redress the consumer&apos;s grievance internally before the central banking authority assumes active jurisdiction. Navigating this pre-filing sequence methodically ensures that your eventual RBI CMS petition is legally bulletproof and cannot be dismissed on preliminary procedural grounds.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-1">Phase 1</div>
                  <h3 className="font-bold text-slate-900 text-sm mb-2">Branch / Desk Grievance</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit a formal written complaint via registered email or speed post to the Branch Manager and the bank&apos;s Level-1 Customer Service Desk. Secure an official Service Request (SR) tracking number.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-1">Phase 2</div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">Principal Nodal Officer (PNO)</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If unresolved within 7 days, escalate the matter to the bank&apos;s Principal Nodal Officer (PNO) and Internal Ombudsman (IO), outlining detailed recovery harassment violations with attached evidence.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-1">Phase 3</div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">30-Day Maturity &amp; CMS Trigger</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Once 30 calendar days elapse from the initial complaint date—or immediately upon receiving an unsatisfactory or dismissive written rejection—the right to file before the RBI Ombudsman ripens automatically.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                It is vital to retain all communication logs, automated acknowledgment emails, and speed post delivery receipts. The RBI CMS portal strictly requires the initial complaint date and the institutional response reference number during electronic registration. If the bank fails to respond within 30 days, that statutory failure in itself constitutes an independent deficiency in banking service under the Scheme.
              </p>
            </section>

            {/* Section 4: Bank Economics & The Ombudsman Risk Equation */}
            <section id="bank-accounting-npv-recovery-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Bank Accounting, Stressed Assets & Ombudsman Risk
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                An RBI Ombudsman complaint provides strong negotiation leverage due to banking capital dynamics. When a retail loan defaults past 90 days, RBI Prudential Norms (IRACP) mandate classification as a Non-Performing Asset (NPA). As NPAs age through Sub-Standard, Doubtful, and Loss stages, lenders must lock 15% to 100% of the ledger balance in idle provisioning capital.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Commercial banks evaluate delinquent retail portfolios through a cold quantitative mathematical model known as Net Present Value (NPV) Recovery Modeling. Under normal circumstances, lenders evaluate whether to pursue aggressive third-party agency collections, file summary civil suits under Order 37 CPC, or initiate arbitration proceedings. However, the introduction of a formal RBI Ombudsman complaint dramatically destabilizes the bank&apos;s expected financial return by introducing heavy regulatory friction costs and supervisory penalties:
              </p>

              {/* Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Institutional Recovery Valuation &amp; Regulatory Friction Model</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden - Regulatory Penalty Risk
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Here C_t represents estimated recoveries over time, and r is the internal discount rate. Deductions account for multi-year litigation costs, locked Tier-1 capital reserves, and the imminent risk of RBI regulatory fines or compensation awards.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a borrower files documented proof of harassment with the Ombudsman, the bank&apos;s risk committee must formally answer to the RBI. Defending an open regulatory inquiry exceeds the residual value of a delinquent balance. Consequently, bank stressed-asset managers shift from aggressive recovery to compromise. They frequently authorize 45% to 65% principal haircuts to achieve a swift settlement and close the regulatory docket.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="rbi-ombudsman-resolution-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. RBI Integrated Ombudsman Grievance Roadmap
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The visual roadmap below details the 5-stage escalation framework. It covers initial written grievances, CMS portal filing, evidentiary dockets, conciliation hearings, and securing zero-balance settlement letters.
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  width={1200}
                  height={675}
                  src="/images/infographics/rbi-ombudsman-complaint-loan-recovery-harassment.jpg"
                  alt="RBI Integrated Ombudsman Scheme Banking Complaint Process for Loan Recovery Harassment Infographic"
                  className="w-full h-full object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 1–2: Grievance &amp; CMS Filing</span>
                  <span>Lodge formal written notice with bank PNO; upon 30 days lapse or rejection, register petition on the centralized RBI CMS portal at cms.rbi.org.in.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 3–4: Evidence &amp; Conciliation</span>
                  <span>Submit comprehensive audio, digital, and documentary proof; the Ombudsman initiates statutory conciliation and directs the bank to explain conduct.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 5: Award &amp; Compromise OTS</span>
                  <span>Receive binding Ombudsman compensation order under Section 16(2); execute an amicable 50%–65% OTS with a mandatory ₹0 No Dues Certificate.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Step-by-Step RBI CMS Portal Filing Guide */}
            <section id="step-by-step-cms-portal-filing" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Blueprint: Filing on the RBI CMS Portal
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Filing an electronic complaint through the RBI Complaint Management System (CMS) portal is a structured legal submission. Every statement entered on the portal becomes part of an official quasi-judicial record reviewed by the Ombudsman and the bank&apos;s senior executive management. To ensure maximum impact and prevent procedural delays, adhere strictly to the following 6-step operational procedure:
              </p>

              <div className="space-y-4 my-6">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-sm mb-1">Step 1: Access the Centralized Portal &amp; Verify Identity</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Navigate to <code>https://cms.rbi.org.in</code> and click on &quot;File a Complaint&quot;. Complete the initial SMS/OTP mobile verification. Ensure that the mobile number matches the contact details registered with your loan account.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Step 2: Select Regulated Entity Category &amp; Account Particulars</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Select the appropriate institutional category (e.g., Scheduled Commercial Bank, NBFC, or Small Finance Bank). Choose the exact legal name of the entity from the drop-down menu, enter the parent branch details, and specify your loan or credit card account number.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Step 3: Establish the 30-Day Statutory Pre-Condition</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Input the exact date when your initial written complaint was lodged with the bank&apos;s Grievance Redressal Officer. Upload the copy of your original email/letter along with the bank&apos;s tracking reference number or proof of speed post delivery.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Step 4: Select Accurate Complaint Sub-Categories</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under the grievance classification taxonomy, select <em>&quot;Loans and Advances&quot;</em> followed by the exact sub-categories: <em>&quot;Engagement of Recovery Agents / Non-adherence to Fair Practices Code&quot;</em>, <em>&quot;Harassment / Coercive Tactics&quot;</em>, and <em>&quot;Levy of Charges Without Prior Notice&quot;</em>.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Step 5: Draft the Factual Chronology &amp; Regulatory Grounds</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Provide a concise chronological narrative. Detail loan origins, specific call dates and timestamps, and caller numbers. Highlight violations of the 8:00 AM to 7:00 PM calling window, abusive language, and third-party workplace disclosures alongside relevant RBI circular citations.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Step 6: Upload the Evidentiary Docket &amp; Submit</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Compile all evidence into a single, organized PDF file (under the portal&apos;s file size limit) containing time-stamped call records, WhatsApp screenshots, audio recording transcripts, CCTV snapshots, and formal notices. Review the draft, submit, and record the unique Complaint Reference Number (CRN).
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Alternatively, borrowers facing digital access hurdles can mail physical petitions. Post them to the Centralised Receipt and Processing Centre (CRPC), Reserve Bank of India, 4th Floor, Sector 17, Chandigarh - 160017. Use the standardized Form-B format prescribed under the Scheme via registered post.
              </p>
            </section>

            {/* Section 7: Claiming Compensation for Mental Agony */}
            <section id="formulating-compensation-claims" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Formulating Compensation Claims Under Section 16(2)
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A key provision of RB-IOS 2021 is the Ombudsman&apos;s statutory authority to award compensation for non-financial injury. Under Clause 16(2), the Ombudsman can order lenders to pay up to ₹1 Lakh to the complainant. This covers loss of time, expenses, harassment, and mental anguish resulting from service deficiencies.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To substantiate compensation claims, advocates construct an Injury Dossier establishing three elements: (1) <strong>Causal Link:</strong> Proving emotional or professional harm resulted directly from unlawful collection tactics; (2) <strong>Documentary Proof:</strong> Providing medical records, employer warning letters regarding workplace disruption, or earnings loss; and (3) <strong>Quantified Relief:</strong> Demanding an immediate halt to third-party recovery, waiver of penal interest, compensation, and credit bureau remediation.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For direct financial losses—such as unauthorized automatic debits or wrongful asset seizures—Clause 16(1) empowers the Ombudsman to award compensation. Relief covers actual damages up to ₹20 Lakhs. Framing these claims with legal precision ensures banks treat proceedings with institutional urgency.
              </p>
            </section>

            {/* Section 8: Conciliation, OTS Haircuts & ₹0 NDC Mandates */}
            <section id="conciliation-ots-compromise-ndc" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Ombudsman Conciliation & Enforcing ₹0 NDC Mandates
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The primary operational mode of the RBI Ombudsman under Clause 14 of RB-IOS 2021 is conciliation and mediation. Once the complaint is admitted, the Ombudsman forwards the evidentiary dossier to the regulated entity with a strict 15-day deadline to submit a formal Written Response. Recognizing the high probability of an adverse finding or regulatory reprimand, the bank&apos;s central legal department frequently reaches out directly to the borrower or their legal counsel to propose an amicable out-of-court settlement.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This conciliation window offers an ideal setting for negotiating a One-Time Settlement (OTS). Rather than enduring endless collection calls, advocates leverage active regulatory proceedings. We negotiate to eliminate penal charges and secure 45% to 65% principal haircuts based on documented financial distress.
              </p>
              
              <div className="bg-blue-50/50 border border-blue-200 rounded-2xl p-5 my-4 space-y-3">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-blue-600" />
                  <span>Mandatory Regulatory Protections for Executed Loan Settlements</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Upon mutually agreeing on settlement terms, the agreement must be executed via an official bank-issued Sanction Letter detailing the final discounted amount and payment schedule. Under RBI Circular RBI/2023-24/60 on <em>&quot;Release of Movable / Immovable Property Documents and No Dues Certificates&quot;</em>, the bank is legally obligated to:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Issue an official, unconditional zero-balance <strong>No Dues Certificate (NDC)</strong> within 30 calendar days of final payment clearance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Update all four credit information companies (CIBIL, Experian, Equifax, CRIF High Mark) to reflect the account status as &quot;Settled&quot; or &quot;Closed&quot; with ₹0 outstanding balance within the mandatory 30-day reporting cycle.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Pay a mandatory statutory compensation of ₹5,000 per day of delay directly to the borrower if the NDC or property documents are delayed beyond 30 days without justifiable cause.</span>
                  </li>
                </ul>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once settlement terms are met and the No Dues Certificate is issued, parties file a joint closure memo on the RBI CMS portal. This formally closes the regulatory complaint and guarantees permanent debt relief.
              </p>
            </section>

            {/* Section 9: Institutional Escalation Comparative Matrix */}
            <section id="dispute-escalation-comparative-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Dispute Resolution &amp; Legal Escalation Comparative Matrix
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers facing aggressive debt collection tactics often struggle to evaluate which legal forum best suits their specific situation. The comprehensive comparative matrix below analyzes the timeline, cost structure, recovery deterrence, and settlement efficacy across all primary grievance mechanisms in India:
              </p>

              <div className="overflow-x-auto my-6">
                <table>
                  <thead>
                    <tr>
                      <th>Escalation Forum</th>
                      <th>Governing Statute</th>
                      <th>Filing Fee &amp; Cost</th>
                      <th>Resolution Timeline</th>
                      <th>Harassment Deterrence</th>
                      <th>Settlement Efficacy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">RBI Integrated Ombudsman (CMS)</td>
                      <td>RB-IOS 2021 / BR Act Sec 35A</td>
                      <td>₹0 (Completely Free)</td>
                      <td>30 to 60 Days</td>
                      <td>Very High (Direct Regulatory Exposure)</td>
                      <td>Exceptional (Forces 45%–65% OTS)</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Bank Internal Grievance (PNO)</td>
                      <td>Internal Bank Grievance Policy</td>
                      <td>₹0 (Internal)</td>
                      <td>15 to 30 Days</td>
                      <td>Moderate (Internal Bank Review)</td>
                      <td>Moderate (Standard Restructuring)</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Consumer Commission (DCDRC)</td>
                      <td>Consumer Protection Act, 2019</td>
                      <td>Nominal Court Fee</td>
                      <td>12 to 24 Months</td>
                      <td>High (Interim Injunction Orders)</td>
                      <td>High (Court-Supervised Settlement)</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Police FIR / Magistrate Complaint</td>
                      <td>BNS Sec 351/356 (IPC 503/506)</td>
                      <td>Advocate Legal Fees</td>
                      <td>6 to 18 Months</td>
                      <td>Immediate (Criminal Deterrence)</td>
                      <td>Moderate (Requires Cross-Negotiation)</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">National Lok Adalat</td>
                      <td>Legal Services Authorities Act, 1987</td>
                      <td>₹0 (Free Forum)</td>
                      <td>Single-Day Hearing</td>
                      <td>Low (Pre-Existing Stage)</td>
                      <td>High (Non-Appealable Consent Award)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                As demonstrated by the empirical matrix, the RBI Integrated Ombudsman Scheme offers the fastest, most cost-effective, and institutionally potent mechanism for neutralizing recovery agent harassment while simultaneously opening an official window for debt compromise negotiation.
              </p>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory */}
            <section id="settleloans-advocate-representation" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                10. Institutional Defense: Safeguarding Borrowers & OTS
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Navigating an institutional confrontation with a major national bank or well-funded NBFC can be daunting for an individual borrower already enduring severe financial stress. SettleLoans bridges this power asymmetry by providing dedicated legal advocacy, regulatory petition drafting, and senior-level financial negotiations for distressed borrowers across India.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Our seasoned team of banking litigation advocates and debt resolution specialists implements a rigorous 4-stage institutional defense protocol:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-2">
                    <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                    <span>1. Immediate Anti-Harassment Notice</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We issue a formal legal representation notice to the lender&apos;s Chief Legal Officer and Grievance Desk, demanding the immediate cessation of third-party tele-calling and unannounced field visits under penalty of regulatory prosecution.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-2">
                    <FileText className="w-4 h-4 text-[#1F5EFF]" />
                    <span>2. Evidentiary Docket Compilation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Our legal team structures your call recordings, WhatsApp messages, and financial records into a forensic evidentiary docket demonstrating clear violations of RBI Master Directions.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-2">
                    <Landmark className="w-4 h-4 text-[#1F5EFF]" />
                    <span>3. RBI CMS Petition &amp; Compensation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We draft and file a comprehensive complaint on the RBI Complaint Management System, incorporating statutory compensation claims under Section 16(2) of RB-IOS 2021 for mental agony.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-2">
                    <BadgePercent className="w-4 h-4 text-[#1F5EFF]" />
                    <span>4. Structured 50%–65% OTS &amp; ₹0 NDC</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We represent you during conciliation talks, converting regulatory pressure into a binding One-Time Settlement with maximum principal waiver and securing an official No Dues Certificate.
                  </p>
                </div>
              </div>
            </section>

            {/* Company Section Component */}
            <div className="border-t border-slate-200 pt-8 my-8">
              <CompanySection />
            </div>

            {/* Section 11: Comprehensive FAQ Accordion */}
            <section id="faqs" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <span>11. FAQs: RBI Ombudsman Complaints & Recovery Rights</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Find clear, authoritative legal answers to the most critical questions regarding RBI Complaint Management System procedures, recovery agent restrictions, compensation limits, and debt settlement execution:
              </p>

              <div className="space-y-3 mt-6">
                <details className="group bg-slate-50 rounded-xl border border-slate-200 p-4 transition-all duration-200 open:bg-blue-50/40 open:border-blue-200">
                  <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer flex items-center justify-between">
                    <span>What is the RBI Integrated Ombudsman Scheme (RB-IOS 2021)?</span>
                    <ChevronDown className="w-4 h-4 text-slate-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-200/60">
                    The Reserve Bank - Integrated Ombudsman Scheme (RB-IOS 2021) is a unified quasi-judicial framework. Established by the RBI, it provides cost-free and impartial grievance resolution. It covers all RBI-regulated entities, including Commercial Banks, Regional Rural Banks, NBFCs, Co-operative Banks, and authorized payment system participants across India.
                  </p>
                </details>

                <details className="group bg-slate-50 rounded-xl border border-slate-200 p-4 transition-all duration-200 open:bg-blue-50/40 open:border-blue-200">
                  <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer flex items-center justify-between">
                    <span>When can I file a complaint with the RBI Ombudsman for recovery harassment?</span>
                    <ChevronDown className="w-4 h-4 text-slate-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-200/60">
                    You can file an Ombudsman complaint if you first submitted a written grievance to the lender and received no reply within 30 days, or received an unsatisfactory rejection. The complaint must be filed within one year of the bank&apos;s formal response.
                  </p>
                </details>

                <details className="group bg-slate-50 rounded-xl border border-slate-200 p-4 transition-all duration-200 open:bg-blue-50/40 open:border-blue-200">
                  <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer flex items-center justify-between">
                    <span>What recovery practices are strictly prohibited by RBI guidelines?</span>
                    <ChevronDown className="w-4 h-4 text-slate-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-200/60">
                    Under RBI directives, recovery agents cannot call before 8:00 AM or after 7:00 PM. They are barred from using abusive language, threatening physical harm, or contacting friends, relatives, and workplace colleagues. Unannounced visits and social media shaming are strictly illegal.
                  </p>
                </details>

                <details className="group bg-slate-50 rounded-xl border border-slate-200 p-4 transition-all duration-200 open:bg-blue-50/40 open:border-blue-200">
                  <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer flex items-center justify-between">
                    <span>Can the RBI Ombudsman award monetary compensation for mental harassment?</span>
                    <ChevronDown className="w-4 h-4 text-slate-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-200/60">
                    Yes. Under Section 16(2) of RB-IOS 2021, the Ombudsman can award compensation up to ₹20 Lakhs for consequential losses, plus up to ₹1 Lakh for mental harassment, loss of time, and out-of-pocket expenses.
                  </p>
                </details>

                <details className="group bg-slate-50 rounded-xl border border-slate-200 p-4 transition-all duration-200 open:bg-blue-50/40 open:border-blue-200">
                  <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer flex items-center justify-between">
                    <span>How does filing an RBI Ombudsman complaint help in negotiating a loan settlement?</span>
                    <ChevronDown className="w-4 h-4 text-slate-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-200/60">
                    When an active RBI Ombudsman complaint is lodged, it escalates directly to the bank&apos;s Senior Compliance and Stressed Asset Management teams. Regulated entities face regulatory audit scrutiny, reputational damage, and financial penalties for recovery agent violations. To close open regulatory inquiries swiftly, banks frequently agree to withdraw third-party recovery agencies, waive penal compound interest, and execute an amicable One-Time Settlement (OTS) with 45% to 65% principal haircuts.
                  </p>
                </details>

                <details className="group bg-slate-50 rounded-xl border border-slate-200 p-4 transition-all duration-200 open:bg-blue-50/40 open:border-blue-200">
                  <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer flex items-center justify-between">
                    <span>What evidence is required to prove loan recovery harassment before the Ombudsman?</span>
                    <ChevronDown className="w-4 h-4 text-slate-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-200/60">
                    Crucial evidence includes time-stamped call recordings, screenshots of threatening WhatsApp messages, and CCTV footage of unannounced visits. Maintain proof of initial written grievances sent to the bank as primary documentation.
                  </p>
                </details>

                <details className="group bg-slate-50 rounded-xl border border-slate-200 p-4 transition-all duration-200 open:bg-blue-50/40 open:border-blue-200">
                  <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer flex items-center justify-between">
                    <span>Is there any fee to file a complaint on the RBI Complaint Management System (CMS)?</span>
                    <ChevronDown className="w-4 h-4 text-slate-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-200/60">
                    No. The entire grievance redressal mechanism under the RBI Integrated Ombudsman Scheme is completely free of charge. Neither the Reserve Bank of India nor the Ombudsman charges any filing fees, hearing fees, or administrative processing costs to the borrower.
                  </p>
                </details>

                <details className="group bg-slate-50 rounded-xl border border-slate-200 p-4 transition-all duration-200 open:bg-blue-50/40 open:border-blue-200">
                  <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer flex items-center justify-between">
                    <span>Can an NBFC or FinTech lending app be reported to the RBI Ombudsman?</span>
                    <ChevronDown className="w-4 h-4 text-slate-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-200/60">
                    Yes. All Non-Banking Financial Companies (NBFC-D, NBFC-ND-SI with asset size of ₹100 Crore or more, and deposit-taking NBFCs) as well as Lending Service Providers (LSPs) operating under digital lending guidelines are covered under RB-IOS 2021. If a digital loan app accesses unauthorized phone permissions or harasses emergency contacts, the parent NBFC/Bank is directly liable for penal action.
                  </p>
                </details>

                <details className="group bg-slate-50 rounded-xl border border-slate-200 p-4 transition-all duration-200 open:bg-blue-50/40 open:border-blue-200">
                  <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer flex items-center justify-between">
                    <span>What happens if a bank fails to comply with an RBI Ombudsman Award?</span>
                    <ChevronDown className="w-4 h-4 text-slate-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-200/60">
                    An Ombudsman Award becomes binding on the bank once accepted in writing by the complainant within 30 days. If the bank fails to implement the Award, the Ombudsman reports the non-compliance to the RBI&apos;s Department of Supervision, which can impose heavy regulatory monetary penalties, regulatory restrictions on lending operations, and mandatory supervisory directions.
                  </p>
                </details>

                <details className="group bg-slate-50 rounded-xl border border-slate-200 p-4 transition-all duration-200 open:bg-blue-50/40 open:border-blue-200">
                  <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer flex items-center justify-between">
                    <span>Does filing an RBI complaint stop recovery agents from visiting my home?</span>
                    <ChevronDown className="w-4 h-4 text-slate-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-200/60">
                    Yes. Once an official grievance is logged and an RBI CMS acknowledgement token is generated, presenting this reference number to the bank&apos;s collection department creates an immediate compliance hold. Senior bank management instructs ground collection agencies to suspend field visits and third-party recovery while the matter is under regulatory review.
                  </p>
                </details>
              </div>
            </section>

            {/* 5 Official Regulatory Links */}
            <section className="border-t border-slate-200 pt-8 space-y-4">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider">
                Official Regulatory &amp; Statutory References
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-50 hover:bg-blue-50/50 border border-slate-200 rounded-xl flex items-center justify-between transition-colors group"
                >
                  <span className="font-semibold text-slate-800 group-hover:text-blue-600">RBI Complaint Management System (CMS Portal)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
                </a>
                <a
                  href="https://www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx?prid=52549"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-50 hover:bg-blue-50/50 border border-slate-200 rounded-xl flex items-center justify-between transition-colors group"
                >
                  <span className="font-semibold text-slate-800 group-hover:text-blue-600">Reserve Bank - Integrated Ombudsman Scheme, 2021</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
                </a>
                <a
                  href="https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12372"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-50 hover:bg-blue-50/50 border border-slate-200 rounded-xl flex items-center justify-between transition-colors group"
                >
                  <span className="font-semibold text-slate-800 group-hover:text-blue-600">RBI Circular on Recovery Agents Engaged by REs (2022)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
                </a>
                <a
                  href="https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12382"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-50 hover:bg-blue-50/50 border border-slate-200 rounded-xl flex items-center justify-between transition-colors group"
                >
                  <span className="font-semibold text-slate-800 group-hover:text-blue-600">RBI Digital Lending Guidelines (RBI/2022-23/111)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
                </a>
                <a
                  href="https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12535"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-50 hover:bg-blue-50/50 border border-slate-200 rounded-xl flex items-center justify-between transition-colors group"
                >
                  <span className="font-semibold text-slate-800 group-hover:text-blue-600">RBI Circular: Release of Property Documents &amp; NDC Mandate</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Legal Defense &amp; Debt Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Recovery Harassment
                </Link>
                <Link
                  href="/rbi-rules-for-recovery-agents"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  RBI Recovery Agent Rules
                </Link>
                <Link
                  href="/rbi-guidelines-calling-after-7pm"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Calling After 7 PM Violations
                </Link>
                <Link
                  href="/bank-arbitration-notice-reply"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Arbitration Notice Reply Guide
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Loan Default &amp; Jail Rights
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Blueprint
                </Link>
                <Link
                  href="/icici-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  ICICI Bank Loan Settlement
                </Link>
                <Link
                  href="/hdfc-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  HDFC Bank Loan Settlement
                </Link>
                <Link
                  href="/axis-bank-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Axis Bank Loan Settlement
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
                  <Link href="/authors/ashish-jhangra" className="font-bold text-slate-900 text-sm hover:text-[#1F5EFF] transition-colors">
                    Ashish Jhangra
                  </Link>
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Specialist in RBI Master Directions, consumer banking grievance litigation, and institutional debt compromise settlements with over a decade of financial regulatory advisory experience.
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <Link href="/authors/ashish-jhangra" className="font-semibold text-blue-600 hover:underline">
                  View Profile &rarr;
                </Link>
                <div className="flex items-center gap-1 text-emerald-600 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Author</span>
                </div>
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Immediate Legal Protection</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Facing Recovery Agent Harassment?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not endure abusive calls or unannounced home visits. Hire specialized banking defense advocates to lodge a formal RBI CMS complaint, claim harassment compensation, and negotiate a 45%–65% OTS.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Immediate Legal Assistance
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
                  <span>RB-IOS 2021 &amp; Supreme Court Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Official ₹0 No Dues Certificates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Advocate-Led Ombudsman Conciliation</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
