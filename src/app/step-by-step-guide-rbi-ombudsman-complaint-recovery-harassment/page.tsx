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
  UploadCloud,
  FileSpreadsheet,
  Laptop
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'File RBI Ombudsman Harassment Complaint | SettleLoans',
  description: 'Step-by-step guide to filing an RBI Ombudsman complaint against recovery agent harassment. Claim up to ₹20 Lakh compensation with SettleLoans.',
  keywords: [
    'how to file complaint in rbi ombudsman against recovery agents',
    'rbi ombudsman complaint online cms portal',
    'rbi recovery agent harassment rules',
    'cms rbi org in complaint filing step by step',
    'rbi ombudsman compensation limit 20 lakh',
    'evidence required for rbi ombudsman recovery complaint',
    'bank loan recovery harassment complaint format',
    'rbi integrated ombudsman scheme 2021 recovery agent',
    'how to complain against recovery agents to rbi',
    'nbfc recovery agent harassment rbi complaint'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/step-by-step-guide-rbi-ombudsman-complaint-recovery-harassment',
  },
  openGraph: {
    title: 'How to File Complaint in RBI Ombudsman Against Recovery Agents | Step-by-Step CMS Portal Guide',
    description: 'Exhaustive regulatory and legal blueprint for filing an online grievance on the RBI CMS portal (cms.rbi.org.in) against aggressive loan recovery agents. Learn category selection, electronic evidence admissibility, and how to claim statutory compensation up to ₹20 Lakhs.',
    url: 'https://www.settleloans.in/step-by-step-guide-rbi-ombudsman-complaint-recovery-harassment',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/step-by-step-guide-rbi-ombudsman-complaint-recovery-harassment.jpg',
        width: 1200,
        height: 675,
        alt: 'How to File Complaint in RBI Ombudsman Against Recovery Agents Infographic',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to File Complaint in RBI Ombudsman Against Recovery Agents | Step-by-Step Guide',
    description: 'Facing recovery agent harassment? Learn how to lodge an enforceable complaint on the RBI CMS portal (cms.rbi.org.in), submit digital evidence, and claim up to ₹20 Lakhs compensation under the Integrated Ombudsman Scheme.',
    images: ['https://www.settleloans.in/images/infographics/step-by-step-guide-rbi-ombudsman-complaint-recovery-harassment.jpg'],
  },
};

const faqsList = [
  {
    name: "Can I file an RBI Ombudsman complaint against recovery agents without complaining to the bank first?",
    answer: "No. Under Clause 10 of the Reserve Bank - Integrated Ombudsman Scheme, 2021, you must first lodge a formal written grievance with the Principal Grievance Redressal Officer (GRO) or Nodal Officer of the lending bank or NBFC. You can approach the RBI Ombudsman only if the lender rejects the complaint, fails to provide a satisfactory response within 30 calendar days, or ignores your communication entirely."
  },
  {
    name: "What is the official website to file an online RBI Ombudsman complaint?",
    answer: "The official online portal is the RBI Complaint Management System (CMS) located at https://cms.rbi.org.in. Borrowers can also submit grievances by sending an email to crpc@rbi.org.in or mailing physical documents to the Centralised Receipt and Processing Centre (CRPC), Reserve Bank of India, 4th Floor, Sector 17, Chandigarh - 160017."
  },
  {
    name: "Which complaint category and sub-category should I choose on cms.rbi.org.in for recovery agent harassment?",
    answer: "On the CMS portal, select 'Loans and Advances' as the primary category, followed by 'Recovery Agents / Collection Agencies / Non-adherence to Fair Practices Code' as the sub-category. In the narrative box, explicitly cite violations of RBI Master Directions on Outsourcing of Financial Services and breach of permissible calling hours (8:00 AM to 7:00 PM)."
  },
  {
    name: "What maximum compensation can the RBI Ombudsman award for recovery agent harassment?",
    answer: "Under Clause 15(3) of the Reserve Bank - Integrated Ombudsman Scheme, the Ombudsman possesses statutory power to award consequential compensation up to ₹20 Lakhs for financial losses suffered, in addition to compensation of up to ₹1 Lakh specifically for mental agony, harassment, loss of time, and personal expenses incurred by the complainant."
  },
  {
    name: "Are mobile call recordings and WhatsApp screenshots accepted as evidence by the RBI Ombudsman?",
    answer: "Yes. Digital recordings, Call Detail Records (CDRs), SMS threats, and WhatsApp screenshots are admissible as documentary evidence before the Ombudsman. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (formerly Section 65B of the Indian Evidence Act), retaining unedited electronic files with original timestamps and sender numbers provides irrefutable proof of regulatory violations."
  },
  {
    name: "Can the RBI Ombudsman penalize NBFCs and digital lending loan apps for recovery agent harassment?",
    answer: "Yes. The Integrated Ombudsman Scheme covers all Scheduled Commercial Banks, Regional Rural Banks, Urban Co-operative Banks, and all Non-Banking Financial Companies (NBFCs) including fintech digital lending applications registered with the RBI that meet asset size thresholds or operate under RBI digital lending mandates."
  },
  {
    name: "How long does the RBI Ombudsman take to resolve a recovery harassment complaint?",
    answer: "The Ombudsman typically issues a preliminary directive or facilitates institutional conciliation within 30 to 60 days of complaint registration. If conciliation fails, the Ombudsman conducts an investigation, calls for lender records, and passes a binding statutory Award within 90 days."
  },
  {
    name: "Will filing an RBI Ombudsman complaint stop ongoing recovery calls and home visits?",
    answer: "Yes. Once a complaint is formally registered on the CMS portal, the RBI issues an immediate notice to the bank's regulatory compliance desk. Lenders routinely freeze third-party collection agency mandates on disputed accounts to avoid regulatory reprimands, license audits, and statutory fines."
  },
  {
    name: "Can I settle my loan while an RBI Ombudsman complaint is pending?",
    answer: "Yes. In fact, filing an RBI Ombudsman complaint frequently accelerates structured One-Time Settlement (OTS) negotiations. Facing regulatory scrutiny and potential compensation penalties, bank credit risk committees prefer offering 40% to 65% principal waivers and formal No Dues Certificates (NDCs) through institutional compromise conciliation."
  }
];

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/step-by-step-guide-rbi-ombudsman-complaint-recovery-harassment#webpage",
      "url": "https://www.settleloans.in/step-by-step-guide-rbi-ombudsman-complaint-recovery-harassment",
      "name": "How to File Complaint in RBI Ombudsman Against Recovery Agents | Step-by-Step Guide",
      "description": "Comprehensive legal and regulatory manual explaining how to lodge an online complaint against bank and NBFC recovery agents on the RBI CMS portal (cms.rbi.org.in), submit audio and WhatsApp evidence, and claim statutory compensation up to ₹20 Lakhs.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/step-by-step-guide-rbi-ombudsman-complaint-recovery-harassment#breadcrumb"
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
      "@id": "https://www.settleloans.in/step-by-step-guide-rbi-ombudsman-complaint-recovery-harassment#breadcrumb",
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
          "name": "RBI Ombudsman Recovery Harassment Complaint Guide",
          "item": "https://www.settleloans.in/step-by-step-guide-rbi-ombudsman-complaint-recovery-harassment"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/step-by-step-guide-rbi-ombudsman-complaint-recovery-harassment#article",
      "headline": "How to File Complaint in RBI Ombudsman Against Recovery Agents: Step-by-Step CMS Portal Guide",
      "description": "An exhaustive, procedural analysis detailing the statutory process of lodging an online grievance on cms.rbi.org.in against coercive recovery agents. Covers the mandatory 30-day GRO escalation, category selection, electronic evidence verification, compensation limits up to ₹20 Lakhs, and OTS debt settlement pathways.",
      "image": "https://www.settleloans.in/images/infographics/step-by-step-guide-rbi-ombudsman-complaint-recovery-harassment.jpg",
      "datePublished": "2026-08-31T10:00:00+05:30",
      "dateModified": "2026-08-31T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/step-by-step-guide-rbi-ombudsman-complaint-recovery-harassment#webpage"
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
      "@type": "Organization",
      "@id": "https://www.settleloans.in/#organization",
      "name": "SettleLoans",
      "url": "https://www.settleloans.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.settleloans.in/logo/logo.svg"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-99999-99999",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"]
        }
      ]
    },
    {
      "@type": "FinancialService",
      "@id": "https://www.settleloans.in/step-by-step-guide-rbi-ombudsman-complaint-recovery-harassment#service",
      "name": "SettleLoans - Banking Regulatory Redressal & Debt Settlement Services",
      "description": "Professional advocate-led representation for lodging statutory grievances with the Reserve Bank of India Ombudsman, enforcing Fair Practices Codes against aggressive recovery agents, and negotiating structured One-Time Settlements (OTS).",
      "url": "https://www.settleloans.in/step-by-step-guide-rbi-ombudsman-complaint-recovery-harassment",
      "image": "https://www.settleloans.in/images/infographics/step-by-step-guide-rbi-ombudsman-complaint-recovery-harassment.jpg",
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
        "reviewCount": "2840",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Vikramaditya Roy"
          },
          "datePublished": "2026-07-15",
          "reviewBody": "A private bank collection agency was calling my workplace and threatening my manager. SettleLoans structured a 30-day GRO notice followed by an online RBI CMS complaint with Call Detail Records. Within 12 days, the bank recalled the agency, issued a formal apology, and settled my ₹8.5 Lakh debt at a 55% waiver.",
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
            "name": "Priyanka Deshmukh"
          },
          "datePublished": "2026-08-02",
          "reviewBody": "Fintech loan agents were sending abusive messages on WhatsApp to my contacts. Ashish Jhangra and his legal team guided me through the exact evidence upload process on cms.rbi.org.in. The RBI Ombudsman took immediate cognizance, ordered the NBFC to halt harassment, and awarded compensation.",
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
            "name": "Harishankar Pandey"
          },
          "datePublished": "2026-06-28",
          "reviewBody": "I had no idea that recovery agents calling before 8 AM or after 7 PM violated RBI master circulars. SettleLoans drafted a watertight complaint that cited the Outsourcing Directions. The Ombudsman pressure forced the bank into an amicable Lok Adalat settlement.",
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
            "name": "Siddharth Nambiar"
          },
          "datePublished": "2026-08-19",
          "reviewBody": "Exceptional legal precision. SettleLoans managed my entire grievance escalation from the bank Nodal Officer to the RBI Integrated Ombudsman portal. Not only did all aggressive calls cease instantly, but my CIBIL record was also corrected post-settlement.",
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
      "@id": "https://www.settleloans.in/step-by-step-guide-rbi-ombudsman-complaint-recovery-harassment#faq",
      "mainEntity": faqsList.map(faq => ({
        "@type": "Question",
        "name": faq.name,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ]
};

const tocItems = [
  { id: 'the-recovery-crisis-and-ombudsman-role', title: '1. The Recovery Harassment Crisis & The RBI Ombudsman' },
  { id: 'mandatory-30-day-gro-escalation', title: '2. Mandatory Prerequisite: 30-Day GRO Escalation Rule' },
  { id: 'statutory-grounds-under-integrated-scheme', title: '3. Statutory Grounds for Harassment Complaints' },
  { id: 'step-by-step-cms-portal-walkthrough', title: '4. Step-by-Step CMS Portal (cms.rbi.org.in) Filing Guide' },
  { id: 'infographic-ombudsman-complaint-process', title: '5. RBI Ombudsman Redressal Infographic' },
  { id: 'evidentiary-forensics-audio-whatsapp-cdr', title: '6. Evidentiary Forensics: Audio, WhatsApp & Section 63 BSA' },
  { id: 'compensation-claim-20-lakh-npv-model', title: '7. Claiming ₹20 Lakh Compensation & Bank NPV Economics' },
  { id: 'post-complaint-ots-settlement-cibil-fix', title: '8. Post-Ombudsman OTS Resolution & CIBIL Rectification' },
  { id: 'comparative-redressal-matrix', title: '9. Comparative Legal Redressal Matrix' },
  { id: 'settleloans-regulatory-defense', title: '10. SettleLoans Legal Defense & Representation' },
  { id: 'faqs', title: '11. Frequently Asked Questions' }
];

export default function RbiOmbudsmanComplaintRecoveryHarassmentPage() {
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
        className="w-full border-b border-slate-700/80 pt-10 pb-8 md:pt-14 md:pb-11 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-indigo-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-4 tracking-wider uppercase">
            <Landmark className="w-3.5 h-3.5" />
            <span>Regulatory Redressal Guide • RBI Integrated Ombudsman Scheme 2021</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">How to File an RBI Ombudsman Recovery Complaint</h1>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-4 mb-6 flex flex-wrap items-center justify-center gap-4">
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
              <span>RBI CMS &amp; Fair Practices Code Verified</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-lg flex items-center gap-2"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Stop Recovery Harassment with Legal Support</span>
            </Link>
            <Link
              href="#step-by-step-cms-portal-walkthrough"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 font-semibold py-3 px-6 rounded-xl text-sm transition-all flex items-center gap-2"
            >
              <Laptop className="w-4 h-4 text-blue-400" />
              <span>View Online CMS Portal Steps</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip Component */}
      <StatsStrip />

      {/* 3. Main 3-Column Content Layout */}
      <div className="w-full max-w-[1700px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[250px_minmax(0,1fr)_290px] xl:grid-cols-[270px_minmax(0,1fr)_310px] 2xl:grid-cols-[290px_minmax(0,1fr)_330px] gap-6 xl:gap-8 items-start">
          
          {/* Left Column: Sticky Table of Contents + Crux Pill */}
          <aside className="hidden lg:block w-full lg:sticky lg:top-24 space-y-4 h-fit self-start max-h-[calc(100vh-110px)] overflow-y-auto pr-1">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4 text-[#1F5EFF]" />
                <span>Executive Case Crux</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Aggressive recovery agent conduct, calling outside 8 AM to 7 PM, contacting third parties, and workplace intrusions directly violate RBI Master Directions. Borrowers possess the statutory right under the Reserve Bank - Integrated Ombudsman Scheme, 2021 to lodge binding online complaints via cms.rbi.org.in, secure immediate stay on coercive tactics, and claim compensation up to ₹20 Lakhs for consequential damages and mental distress.
              </p>
            </div>

            <SidebarTOC items={tocItems} />
          </aside>

          {/* Middle Column: Main Editorial Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-sm uppercase tracking-wider mb-4">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Essential Ombudsman Redressal Takeaways</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory Pre-requisite Notice:</strong> You must lodge a formal written grievance with the bank or NBFC Grievance Redressal Officer (GRO) and wait 30 days before escalating to the RBI Ombudsman.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Unified CMS Portal Lodging:</strong> Grievances are submitted online at cms.rbi.org.in under &apos;Loans and Advances&apos; selecting &apos;Recovery Agents / Non-adherence to Fair Practices Code&apos;.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Strict Electronic Evidence Standards:</strong> Call detail records (CDRs), audio recordings, and WhatsApp chat transcripts are admissible under Section 63 of Bharatiya Sakshya Adhiniyam, 2023.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Substantial Statutory Compensation:</strong> The Ombudsman can award up to ₹20 Lakhs for direct losses and up to ₹1 Lakh for mental trauma, harassment, and legal friction.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Catalyst for Debt Compromise:</strong> Regulatory scrutiny under the Ombudsman scheme invariably compels lenders to halt harassment and approve structured One-Time Settlements (OTS).</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Recovery Harassment Crisis & The RBI Ombudsman */}
            <section id="the-recovery-crisis-and-ombudsman-role" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. Recovery Harassment &amp; RBI Ombudsman</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In India&apos;s rapidly expanding retail credit ecosystem, unsecured personal loans, digital credit lines, and revolving credit card facilities have reached unprecedented volumes. When unexpected financial distress strikes—whether triggered by sudden employment termination, acute medical emergencies, or commercial insolvency—borrowers frequently find themselves exposed to an aggressive, extra-judicial debt collection apparatus. Third-party collection agencies, operating under high-pressure commission frameworks, routinely bypass statutory decorum. Borrowers endure incessant calling at odd hours, abusive language, threatening communications sent to family members, and humiliating visits to residential doorsteps and workplaces.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This coercive environment thrives because borrowers mistakenly believe that defaulting on a commercial debt strips them of their civil and legal protections. Under Indian jurisprudence, a loan default is strictly a civil breach of contract governed by the Indian Contract Act, 1872. It is not a criminal offense. Lenders have legitimate civil remedies through the courts, but they possess zero legal entitlement to deploy intimidation, extortion, or privacy intrusions. To curb these widespread abuses, the Reserve Bank of India introduced the <em>Reserve Bank - Integrated Ombudsman Scheme, 2021 (RB-IOS 2021)</em>, creating a powerful, quasi-judicial mechanism to hold banks and Non-Banking Financial Companies (NBFCs) directly accountable for recovery agent misconduct.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-1">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>Regulatory Doctrine of Direct Principal Liability</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                  Under the RBI Master Directions on Outsourcing of Financial Services, regulated banks and NBFCs bear full vicarious liability for the illegal conduct of their outsourced recovery agents. A lending institution cannot disown an agent&apos;s coercive behavior by categorizing them as an independent contractor. The Ombudsman treats agent harassment as direct institutional non-compliance by the bank itself.
                </p>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The RBI Ombudsman operates as an alternate dispute resolution forum established under Section 35A of the Banking Regulation Act, 1949, Section 45L of the Reserve Bank of India Act, 1934, and Section 18 of the Payment and Settlement Systems Act, 2007. It provides aggrieved citizens with a cost-free, legally binding avenue to halt collection terrorism, secure formal reprimands against errant institutions, and obtain monetary compensation for mental agony and reputational injury.
              </p>
            </section>

            {/* Section 2: Mandatory Prerequisite: 30-Day GRO Escalation Rule */}
            <section id="mandatory-30-day-gro-escalation" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Mandatory Prerequisite</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before approaching the RBI Ombudsman, every borrower must strictly fulfill a mandatory statutory prerequisite. Under Clause 10 of the Integrated Ombudsman Scheme, an Ombudsman will reject a grievance outright if the complainant has not first afforded the lending institution an opportunity to rectify the deficiency through its internal grievance mechanism. Understanding this procedural requirement is essential to prevent administrative dismissals.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The first step requires drafting a comprehensive written complaint addressed to the Principal Nodal Officer (PNO) or Grievance Redressal Officer (GRO) of the concerned bank or NBFC. This formal notice must delineate specific instances of recovery misconduct, citing dates, phone numbers, exact agent statements, and relevant sections of the RBI Fair Practices Code. The complaint should be submitted via registered email to the official grievance desk, as well as through physical registered post with acknowledgment due, establishing an undeniable paper trail.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4 space-y-3">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The Statutory 30-Day Timeline &amp; Escalation Windows</span>
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <p className="leading-relaxed">
                    Once the internal complaint is delivered, the lender is legally granted exactly <strong>30 calendar days</strong> to investigate and deliver a reasoned resolution. During this period, three scenarios allow you to immediately escalate the dispute to the RBI Ombudsman:
                  </p>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Scenario A: Total Non-Response (Lapse of 30 Days)</p>
                    <p className="text-slate-600 mt-1">If the bank or NBFC fails to furnish any response within 30 days from the date of your initial complaint, the right to file on the RBI CMS portal activates automatically on Day 31.</p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Scenario B: Formal Rejection of Grievance</p>
                    <p className="text-slate-600 mt-1">If the lender responds before 30 days but outright rejects your complaint or denies recovery agent culpability, you can immediately file on the CMS portal without waiting for the 30-day period to expire.</p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Scenario C: Unsatisfactory Resolution</p>
                    <p className="text-slate-600 mt-1">If the bank offers a superficial or partial response that fails to halt harassment or hold the collection agency accountable, you may escalate immediately by expressing written dissatisfaction.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers must note the statutory limitation period: an Ombudsman complaint must be filed within <strong>one year</strong> after receiving the lender&apos;s final rejection letter, or within one year and thirty days from the date of the original complaint if no reply was received. Failing to observe these strict timelines extinguishes your right to seek relief under the scheme.
              </p>
            </section>

            {/* Section 3: Statutory Grounds for Harassment Complaints */}
            <section id="statutory-grounds-under-integrated-scheme" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. Statutory Grounds</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To build an unassailable grievance on the RBI Complaint Management System, your complaint must precisely articulate the specific regulatory clauses that the lender and its agents have breached. The Reserve Bank of India has codified these obligations across several foundational regulatory directives, most notably the <em>Master Direction – Reserve Bank of India (Managing Risks and Code of Conduct in Outsourcing of Financial Services by Regulated Entities) Directions</em>, the <em>Master Circular on Fair Practices Code</em>, and the <em>Guidelines on Digital Lending (2022)</em>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The most potent statutory grounds for recovery complaints include:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-slate-700">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Violation of Permissible Contact Hours</p>
                    <p className="text-slate-600">RBI mandates that recovery agents may only call or visit between 8:00 AM and 7:00 PM. Calls placed before 8:00 AM or after 7:00 PM constitute direct statutory violations.</p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Third-Party Disclosure &amp; Privacy Breach</p>
                    <p className="text-slate-600">Contacting friends, relatives, colleagues, or employers regarding a borrower&apos;s debt is strictly prohibited under banking secrecy laws and Puttaswamy privacy jurisprudence.</p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Abusive Language &amp; Criminal Intimidation</p>
                    <p className="text-slate-600">Using verbal obscenities, shouting, threatening physical violence, or issuing fake arrest warnings violates Section 351 of the Bharatiya Nyaya Sanhita (BNS) and RBI codes.</p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Uncertified &amp; Unverified Recovery Personnel</p>
                    <p className="text-slate-600">Deploying recovery agents who lack Debt Recovery Agent (DRA) certification from the Indian Institute of Banking and Finance (IIBF) or lack formal bank identity authorization.</p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Workplace Intrusion &amp; Public Shaming</p>
                    <p className="text-slate-600">Visiting a borrower&apos;s office, creating scenes in corporate lobbies, or sending recovery notices directly to corporate HR departments to induce public humiliation.</p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Ignoring Legal Advocate Representation</p>
                    <p className="text-slate-600">Failing to route communications through a borrower&apos;s appointed legal counsel after being formally served with a legal notice and Vakalatnama.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When these specific violations are documented and tied directly to the relevant RBI circular numbers in your complaint narrative, the Ombudsman assigns immediate regulatory priority to the case, leaving the lending institution with negligible legal defense.
              </p>
            </section>

            {/* Section 4: Step-by-Step CMS Portal (cms.rbi.org.in) Filing Guide */}
            <section id="step-by-step-cms-portal-walkthrough" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Step-by-Step Guide</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India Complaint Management System (CMS) is a cloud-based, centralized architecture engineered to streamline grievance registration and monitoring. Navigating this portal with procedural accuracy ensures your complaint bypasses automated screening filters and reaches the desk of the designated Ombudsman officer without delay. Follow this comprehensive step-by-step workflow:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <Laptop className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The 6-Stage CMS Portal Execution Protocol</span>
                </div>
                
                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Stage 1: Access Portal &amp; Initiate Registration</p>
                    <p className="text-slate-600 mt-1">
                      Navigate to the official portal at <strong>https://cms.rbi.org.in</strong>. Click on the &quot;File a Complaint&quot; button. Enter your active mobile number and complete the OTP verification. Input your full legal name, current residential address, email address, and state jurisdiction.
                    </p>
                  </div>

                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Stage 2: Select Regulated Entity &amp; Account Particulars</p>
                    <p className="text-slate-600 mt-1">
                      Choose the entity category: &quot;Scheduled Commercial Bank&quot;, &quot;Non-Banking Financial Company (NBFC)&quot;, or &quot;Payment System Participant&quot;. Select the specific bank or NBFC name from the drop-down menu. Enter your loan account number or credit card reference, branch details, and the specific credit product involved.
                    </p>
                  </div>

                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Stage 3: Verify Pre-requisite GRO Complaint Data</p>
                    <p className="text-slate-600 mt-1">
                      The portal will prompt: &quot;Have you lodged a complaint with the Regulated Entity?&quot; Select &quot;Yes&quot;. Enter the exact date on which the initial grievance was emailed or dispatched to the GRO. Provide the internal complaint reference or ticket number issued by the bank. If 30 days have elapsed or a rejection was received, attach the confirmation timestamp.
                    </p>
                  </div>

                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Stage 4: Category &amp; Sub-Category Selection</p>
                    <p className="text-slate-600 mt-1">
                      Under the &apos;Category of Complaint&apos; drop-down, select <strong>&quot;Loans and Advances&quot;</strong>. In the sub-category selector, select <strong>&quot;Recovery Agents / Collection Agencies / Non-adherence to Fair Practices Code&quot;</strong>. Accurate categorization is vital; selecting generic categories like &quot;Customer Service&quot; delays processing by routing the file to administrative queues.
                    </p>
                  </div>

                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Stage 5: Input Detailed Grievance Statement</p>
                    <p className="text-slate-600 mt-1">
                      Draft a concise, factual chronological statement (under 2,000 characters in the portal text box). Clearly state: (a) loan details, (b) specific dates and times of abusive recovery calls or doorstep intrusions, (c) phone numbers utilized by agents, (d) exact threats made, and (e) reference to the attached evidentiary PDF bundle.
                    </p>
                  </div>

                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Stage 6: Upload PDF Evidence Dossier &amp; Submit</p>
                    <p className="text-slate-600 mt-1">
                      Upload a consolidated, indexed PDF document (max size typically 5MB to 10MB) containing the initial GRO complaint, proof of dispatch/delivery, lender&apos;s rejection or non-response, Call Detail Records, WhatsApp screenshots, audio recording transcripts, and identity proof. Complete the submission to generate a unique <strong>Complaint Tracking Number</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once submitted, you will receive an automated SMS and email containing your CMS Complaint Reference ID. This identifier allows you to track the daily status of your file, view lender responses, and submit rejoinders directly within the portal interface.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="infographic-ombudsman-complaint-process" className="my-8">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950">
                <Image
                  src="/images/infographics/step-by-step-guide-rbi-ombudsman-complaint-recovery-harassment.jpg"
                  alt="Step-by-Step Guide to Filing an RBI Ombudsman Complaint Against Recovery Agents Infographic: Flowchart covering evidence, GRO escalation, CMS filing, and compensation"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="p-4 bg-slate-900 text-slate-300 text-xs flex items-center justify-between">
                  <span className="font-semibold text-blue-400">Fig 1: Procedural Architecture — RBI Integrated Ombudsman Complaint Lodging &amp; Redressal</span>
                  <span className="text-slate-400 hidden sm:inline">Source: SettleLoans Regulatory &amp; Compliance Analysis</span>
                </div>
              </div>
            </section>

            {/* Section 6: Evidentiary Forensics: Audio, WhatsApp & Section 63 BSA */}
            <section id="evidentiary-forensics-audio-whatsapp-cdr" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. Evidentiary Forensics</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A regulatory grievance before the RBI Ombudsman succeeds or fails based on the evidentiary rigor of your documentation. In recovery disputes, banks routinely claim that third-party collection callers were unauthorized rogue actors or deny that abusive language was ever deployed. To overcome these corporate denials, complainants must compile a forensically sound electronic dossier that satisfies Indian statutory standards for digital evidence.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Section 63 of the <em>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</em>—which replaces Section 65B of the Indian Evidence Act, 1872—electronic records, including smartphone call recordings, WhatsApp messages, SMS communications, and digital logs, constitute valid primary and secondary evidence provided their integrity and metadata remain uncompromised.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4 space-y-3">
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Mandatory Evidentiary Compilation Checklist</span>
                </h3>
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">1. Raw Audio Files with Unaltered Hash &amp; Timestamps</p>
                    <p className="text-slate-600 mt-1">Preserve original .m4a or .mp3 call recordings on cloud storage. Create a written word-for-word transcript of each abusive call, noting the exact caller phone number, time of call, and duration.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">2. Telecom Call Detail Records (CDRs) &amp; Frequency Logs</p>
                    <p className="text-slate-600 mt-1">Extract certified monthly call logs from your telecom operator showing repeated calls (e.g., 20 to 50 calls in a single day) demonstrating industrial harassment and willful disruption of life.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">3. WhatsApp &amp; SMS Chat Transcripts with Sender Identifiers</p>
                    <p className="text-slate-600 mt-1">Capture full-screen screenshots displaying the sender&apos;s full international phone number (+91...), date, time, and specific defamatory threats, fake legal summons, or references to family members.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">4. CCTV Footage &amp; Doorstep Audio-Video Recordings</p>
                    <p className="text-slate-600 mt-1">If agents visited your residence or workplace, compile video clips showing agents refusing to leave, shouting in corridors, or failing to present official bank authorization IDs.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When compiling this evidence for the CMS portal, convert all screenshots and transcripts into a single, high-resolution PDF document with clear index pagination. For audio files, host the original unedited recordings on a secure cloud storage drive (such as Google Drive or DigiLocker) and include verified access links directly inside the PDF dossier.
              </p>
            </section>

            {/* Section 7: Claiming ₹20 Lakh Compensation & Bank NPV Economics */}
            <section id="compensation-claim-20-lakh-npv-model" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Claiming Statutory Compensation Up to ₹20 Lakhs</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                One of the most consequential yet underutilized provisions of the Reserve Bank - Integrated Ombudsman Scheme, 2021 is the Ombudsman&apos;s statutory authority to award financial compensation directly against errant lenders. Under Clause 15(3) of the scheme, the Ombudsman is empowered to award compensation up to <strong>₹20 Lakhs</strong> for direct financial loss suffered by the complainant as a consequence of the lender&apos;s deficiency in service. Furthermore, the Ombudsman may award an additional sum of up to <strong>₹1 Lakh</strong> specifically to compensate for mental agony, loss of time, reputational damage, and legal expenses.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To successfully claim maximum statutory compensation, your complaint must quantify specific damages: loss of employment or client contracts resulting from workplace harassment, medical expenses incurred due to acute stress or psychiatric trauma, and professional legal fees spent defending against unlawful intimidation.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Understanding why lending institutions rapidly capitulate under Ombudsman scrutiny requires analyzing the financial accounting realities governing Non-Performing Assets (NPAs). Under RBI prudential provisioning norms, banks must allocate 15% to 100% capital provisioning on delinquent unsecured retail assets. When an account is embroiled in an active RBI Ombudsman complaint, the bank risks regulatory reprimands, systemic audit flags, and potential compensatory penalties. Credit risk committees evaluate loan resolution using a Net Present Value (NPV) recovery valuation framework:
              </p>

              {/* Recovery Valuation Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Institutional Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated recoveries across annual intervals t, r is the bank&apos;s cost of capital discount rate, and deductions account for 3 to 5 years of court friction, litigation fees, and locked regulatory capital.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When faced with an airtight Ombudsman complaint, the prospective Net Present Value of pursuing aggressive recovery collapses. The risk of incurring a ₹20 Lakh statutory compensation award, combined with regulatory scrutiny and mandatory provisioning charges, creates an overwhelming financial incentive for the bank&apos;s senior leadership to withdraw recovery agencies and offer a substantial 40% to 65% One-Time Settlement waiver.
              </p>
            </section>

            {/* Section 8: Post-Ombudsman OTS Resolution & CIBIL Rectification */}
            <section id="post-complaint-ots-settlement-cibil-fix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Post-Ombudsman OTS &amp; Sanction Letter</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The strategic outcome of an effective RBI Ombudsman complaint is rarely just stopping recovery phone calls—it is the complete legal extinguishment of the underlying debt on advantageous terms. Once the Ombudsman issues a notice to the lender, the bank&apos;s specialized Compromise Settlement Desk intervenes to replace aggressive collection agencies with formal institutional negotiations.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To guarantee that your settlement is legally bulletproof and prevents future financial claims, borrowers must enforce the Three-Pillar Settlement Protocol:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <FileCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The Three-Pillar Legal Debt Settlement Protocol</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">1. Authentic Sanction Letter</p>
                    <p className="text-slate-600">Obtain an official One-Time Settlement (OTS) sanction letter on bank letterhead with digital signatures, account numbers, exact negotiated amount, and structured installment schedule.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">2. Stamped No Dues Certificate</p>
                    <p className="text-slate-600">Ensure the lender issues a formal, bank-stamped No Dues Certificate (NDC) under RBI Circular RBI/2023-24/60 confirming zero outstanding balance and complete liability discharge.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">3. Credit Bureau Rectification</p>
                    <p className="text-slate-600">Mandate that the bank updates CIBIL, Experian, Equifax, and CRIF High Mark within 30 days, closing all past-due flags and updating status to &apos;Settled&apos; or &apos;Closed&apos;.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers must never make verbal or cash payments to collection agents based on unverified promises. Payments must always be deposited directly into the bank&apos;s designated loan account through verifiable RTGS, NEFT, or net banking channels referencing the official OTS sanction letter. Once the NDC is in hand, the borrower can systematically rebuild their credit profile over subsequent quarters.
              </p>
            </section>

            {/* Section 9: Comparative Legal Redressal Matrix */}
            <section id="comparative-redressal-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. Comparative Debt Resolution Matrix</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers facing severe recovery harassment have several statutory and judicial forums available under Indian law. The comparative matrix below evaluates the operational speed, cost, authority, and efficacy of each grievance channel:
              </p>

              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Redressal Forum</th>
                      <th>Statutory Authority</th>
                      <th>Average Resolution Time</th>
                      <th>Financial Cost to Borrower</th>
                      <th>Compensation &amp; Enforcement Powers</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">RBI Integrated Ombudsman (CMS)</td>
                      <td>Section 35A Banking Regulation Act / RB-IOS 2021</td>
                      <td>30 to 90 Days</td>
                      <td><strong>₹0 (Completely Free)</strong></td>
                      <td>Awards up to ₹20 Lakhs direct damages + ₹1 Lakh mental agony; Direct bank supervisory sanctions</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Bank Internal Nodal Desk (GRO)</td>
                      <td>RBI Fair Practices Code Mandate</td>
                      <td>15 to 30 Days</td>
                      <td><strong>₹0 (Completely Free)</strong></td>
                      <td>Internal administrative reprimands; Mandatory prerequisite before Ombudsman escalation</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">District Consumer Disputes Redressal Commission</td>
                      <td>Consumer Protection Act, 2019</td>
                      <td>12 to 24 Months</td>
                      <td>Nominal Court Fees + Advocate Charges</td>
                      <td>Awards unlimited compensatory damages for deficiency in banking service and unfair trade practices</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">National Cyber Crime Reporting Portal</td>
                      <td>Information Technology Act, 2000 &amp; BNS</td>
                      <td>30 to 60 Days</td>
                      <td><strong>₹0 (Completely Free)</strong></td>
                      <td>Freezing of fraudulent agent bank accounts; FIR registration for illegal lending apps and blackmail</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">National Lok Adalat</td>
                      <td>Legal Services Authorities Act, 1987</td>
                      <td>Single-Day Hearing</td>
                      <td><strong>₹0 (Court fee refunded if pending)</strong></td>
                      <td>Final, non-appealable civil compromise decree with full judicial finality and mutual waiver</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Representation */}
            <section id="settleloans-regulatory-defense" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. SettleLoans Legal Relief in e the RBI Ombudsman</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Navigating the technical requirements of the Reserve Bank of India Complaint Management System, compiling forensically compliant electronic dossiers, and holding powerful banking legal departments accountable requires experienced banking advocates. At SettleLoans, our senior debt resolution attorneys, regulatory compliance specialists, and financial negotiators have represented thousands of distressed borrowers across India.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  We handle the entire end-to-end regulatory redressal process: drafting formal 30-day statutory notices to bank Grievance Redressal Officers, compiling irrefutable audio and WhatsApp evidence under Section 63 BSA, filing structured complaints on cms.rbi.org.in, and representing your interests during conciliation proceedings. Simultaneously, we leverage regulatory exposure to negotiate comprehensive 40% to 65% One-Time Settlements backed by official sanction letters and bank-stamped No Dues Certificates.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. FAQs: RBI Ombudsman Complaints &amp; Recovery Rules</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Clear, verified legal and regulatory answers regarding the RBI Complaint Management System, recovery agent restrictions, evidence submission, and compensation claims.
              </p>

              <div className="space-y-3">
                {faqsList.map((faq, idx) => (
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
                      <p>{faq.answer}</p>
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
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Complaint Management System (CMS Portal)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Reserve Bank - Integrated Ombudsman Scheme, 2021 (RB-IOS)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction – Outsourcing of Financial Services &amp; Code of Conduct</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Bharatiya Sakshya Adhiniyam, 2023 (Section 63 Electronic Evidence)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://legislative.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">Banking Regulation Act, 1949 (Section 35A Regulatory Powers)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Legal Defense &amp; Loan Settlement Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/can-recovery-agents-enter-house-without-permission"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can Recovery Agents Enter House Without Permission?
                </Link>
                <Link
                  href="/can-recovery-agents-visit-home-on-sunday-or-holidays"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can Recovery Agents Visit on Sunday or Holidays?
                </Link>
                <Link
                  href="/can-recovery-agents-freeze-family-bank-accounts"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can Recovery Agents Freeze Family Accounts?
                </Link>
                <Link
                  href="/can-recovery-agents-take-household-furniture-or-gold"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can Recovery Agents Take Furniture or Gold?
                </Link>
                <Link
                  href="/bank-recovery-agent-threatening-me"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Recovery Agent Threatening Me
                </Link>
                <Link
                  href="/bank-sending-legal-notice-to-employer-illegal-recovery"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Sending Notice to Employer
                </Link>
                <Link
                  href="/bank-fir-for-loan-default-reality-check"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank FIR for Loan Default Reality Check
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can I Go to Jail for Loan Default?
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
                  No Dues Certificate Verification Guide
                </Link>
              </div>
            </section>

          </main>

          {/* Right Column: Author Bio, Emergency Advocate CTA, Trust Signals */}
          <aside className="w-full lg:sticky lg:top-24 space-y-6 h-fit self-start">
            
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
                Nationally recognized authority in banking regulatory jurisprudence, Reserve Bank Integrated Ombudsman complaints, electronic evidence admissibility under Section 63 BSA, and structured One-Time Settlements.
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <Link href="/authors/ashish-jhangra" className="text-[#1F5EFF] font-semibold hover:underline flex items-center gap-1">
                  <span>View Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <div className="flex items-center gap-1 text-emerald-600">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Author</span>
                </div>
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Immediate Regulatory Protection</span>
              </div>
              <div className="font-bold text-base text-white mb-2">End Aggressive Recovery Harassment Today</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not face abusive collection calls, family intimidation, or illegal doorstep visits alone. Retain our senior banking advocates to lodge formal RBI Ombudsman grievances and secure a 40%–65% OTS compromise.
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
                  <span>RB-IOS 2021 Statutory Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Legal Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Official Bank-Stamped Settlement Letters</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>₹20 Lakh Compensation Claim Enforcement</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
