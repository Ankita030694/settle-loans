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
    answer: "No. You must complain to the bank first. Under Clause 10 of the Reserve Bank - Integrated Ombudsman Scheme, 2021. You must write to the bank GRO first. The bank gets 30 days to reply. You can go to the RBI Ombudsman if the bank rejects your plea. You can also file if the bank ignores you for 30 days."
  },
  {
    name: "What is the official website to file an online RBI Ombudsman complaint?",
    answer: "The official portal is at https://cms.rbi.org.in. This is the RBI Complaint Management System (CMS). You can also email crpc@rbi.org.in. You can also send post to Centralised Receipt and Processing Centre (CRPC). The address is Reserve Bank of India, 4th Floor, Sector 17, Chandigarh - 160017."
  },
  {
    name: "Which complaint category and sub-category should I choose on cms.rbi.org.in for recovery agent harassment?",
    answer: "On the CMS portal, pick 'Loans and Advances' as the category. Next, choose 'Recovery Agents / Collection Agencies / Non-adherence to Fair Practices Code' as the sub-category. In the text, cite RBI Master Directions on Outsourcing of Financial Services. Also report calls outside 8:00 AM to 7:00 PM."
  },
  {
    name: "What maximum compensation can the RBI Ombudsman award for recovery agent harassment?",
    answer: "Under Clause 15(3) of the Reserve Bank - Integrated Ombudsman Scheme. The Ombudsman can award up to ₹20 Lakhs for money loss. The Ombudsman can also award up to ₹1 Lakh for mental agony and costs."
  },
  {
    name: "Are mobile call recordings and WhatsApp screenshots accepted as evidence by the RBI Ombudsman?",
    answer: "Yes. Digital audio files, call logs, SMS, and WhatsApp chats serve as valid proof. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023. This replaced Section 65B of the Indian Evidence Act. Clean digital records with timestamps prove violations."
  },
  {
    name: "Can the RBI Ombudsman penalize NBFCs and digital lending loan apps for recovery agent harassment?",
    answer: "Yes. The Integrated Ombudsman Scheme covers all Scheduled Commercial Banks. It covers Regional Rural Banks and Urban Co-operative Banks. It also covers all NBFCs and digital loan apps registered with the RBI."
  },
  {
    name: "How long does the RBI Ombudsman take to resolve a recovery harassment complaint?",
    answer: "The Ombudsman usually acts in 30 to 60 days. The office first helps both sides settle. If talks fail, the Ombudsman reviews bank records. A final statutory Award comes within 90 days."
  },
  {
    name: "Will filing an RBI Ombudsman complaint stop ongoing recovery calls and home visits?",
    answer: "Yes. Once you file on CMS, RBI alerts the bank. Banks freeze collection calls on disputed accounts right away. They do this to avoid fines and regulatory audits."
  },
  {
    name: "Can I settle my loan while an RBI Ombudsman complaint is pending?",
    answer: "Yes. An RBI complaint speeds up One-Time Settlement (OTS) talks. Banks want to avoid penalties. Bank panels often offer 40% to 65% waivers and issue a No Dues Certificate (NDC)."
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
          "reviewBody": "A private bank collection agency called my office. They threatened my manager. SettleLoans sent a 30-day GRO notice. Then they filed an RBI CMS complaint with call records. In 12 days, the bank recalled the agency. The bank apologized. They settled my ₹8.5 Lakh debt at a 55% waiver.",
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
          "reviewBody": "Loan agents sent abusive messages on WhatsApp to my contacts. Ashish Jhangra guided me to upload proof on cms.rbi.org.in. The RBI Ombudsman took swift action. They ordered the NBFC to stop harassment. They also granted payout.",
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
          "reviewBody": "I did not know calls before 8 AM or after 7 PM broke RBI rules. SettleLoans drafted a strong complaint citing Outsourcing Directions. Ombudsman pressure pushed the bank to an amicable Lok Adalat settlement.",
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
          "reviewBody": "Great legal support. SettleLoans managed my grievance from the bank Nodal Officer to the RBI Ombudsman portal. All aggressive calls stopped fast. My CIBIL record was also updated after settlement.",
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
                Recovery agents cannot call outside 8 AM to 7 PM. They cannot contact family members or visit workplaces. Such actions violate RBI Master Directions. Under the Reserve Bank - Integrated Ombudsman Scheme, 2021, borrowers can file online complaints at cms.rbi.org.in. You can stop abusive collection tactics right away. You can also claim payout up to ₹20 Lakhs for losses and mental distress.
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
                  <span><strong>Mandatory Pre-requisite Notice:</strong> Send a written grievance to the bank Grievance Redressal Officer (GRO) first. Wait 30 days before moving to the RBI Ombudsman.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Unified CMS Portal Lodging:</strong> File your complaint online at cms.rbi.org.in. Pick &apos;Loans and Advances&apos;. Then select &apos;Recovery Agents / Non-adherence to Fair Practices Code&apos;.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Strict Electronic Evidence Standards:</strong> Call logs, audio files, and WhatsApp chats serve as valid proof. Section 63 of Bharatiya Sakshya Adhiniyam, 2023 applies.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Substantial Statutory payout:</strong> The Ombudsman can award up to ₹20 Lakhs for money loss. You can also get up to ₹1 Lakh for mental stress.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Catalyst for Debt Compromise:</strong> An active Ombudsman case pushes lenders to stop abuse. Banks often agree to a fast One-Time Settlement (OTS).</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Recovery Harassment Crisis & The RBI Ombudsman */}
            <section id="the-recovery-crisis-and-ombudsman-role" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. Recovery Harassment &amp; RBI Ombudsman</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Unsecured loans and credit cards have grown fast across India. Many borrowers face debt trouble after job loss or illness. When payments stop, third-party agents often use harsh methods to collect money. These agents make endless calls at odd hours. They use foul words. They send threats to relatives. They also show up at homes and workplaces.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Many borrowers believe missing a loan payment is a crime. That is false. Under the Indian Contract Act, 1872, a loan default is a simple civil breach of contract. It is not a crime. Lenders can seek civil remedies in court. But they cannot threaten or harass you. To stop these abuses, the RBI created the <em>Reserve Bank - Integrated Ombudsman Scheme, 2021 (RB-IOS 2021)</em>. This scheme gives borrowers a strong path to hold banks and NBFCs accountable for agent misconduct.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-1">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>Regulatory Doctrine of Direct Principal Liability</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                  Under the RBI Master Directions on Outsourcing of Financial Services, banks and NBFCs stay fully liable for their agents. A lender cannot blame an outside agency. The Ombudsman treats recovery agent abuse as a direct rule violation by the bank itself.
                </p>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The RBI Ombudsman operates under key banking laws. These include Section 35A of the Banking Regulation Act, 1949. They include Section 45L of the Reserve Bank of India Act, 1934. Section 18 of the Payment and Settlement Systems Act, 2007 also applies. The scheme gives citizens a free way to stop agent abuse. You can hold banks liable and win cash relief for mental agony.
              </p>
            </section>

            {/* Section 2: Mandatory Prerequisite: 30-Day GRO Escalation Rule */}
            <section id="mandatory-30-day-gro-escalation" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Mandatory Prerequisite</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Every borrower must follow one key rule before filing an RBI complaint. Under Clause 10 of the Integrated Ombudsman Scheme, you must write to the bank first. You must give the bank a fair chance to fix the issue. Skipping this step leads to case dismissal.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                First, draft a clear complaint to the Principal Nodal Officer (PNO) or Grievance Redressal Officer (GRO) of the bank or NBFC. List specific dates, phone numbers, agent words, and RBI Fair Practices Code violations. Send this notice by email and registered post. This builds a solid written record.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4 space-y-3">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The Statutory 30-Day Timeline &amp; Escalation Windows</span>
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <p className="leading-relaxed">
                    Once you send your complaint, the lender gets exactly <strong>30 calendar days</strong> to reply. You can escalate to the RBI Ombudsman in three clear situations:
                  </p>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Scenario A: Total Non-Response (Lapse of 30 Days)</p>
                    <p className="text-slate-600 mt-1">If the bank sends no reply within 30 days, you can file on the RBI CMS portal on Day 31.</p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Scenario B: Formal Rejection of Grievance</p>
                    <p className="text-slate-600 mt-1">If the lender rejects your complaint before 30 days, you can file on the CMS portal right away.</p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Scenario C: Unsatisfactory Resolution</p>
                    <p className="text-slate-600 mt-1">If the bank gives a weak reply and fails to stop the abuse, you can escalate immediately.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Note the legal deadline. You must file your RBI Ombudsman complaint within <strong>one year</strong> of receiving the bank&apos;s final reply. If the bank never replied, file within one year and 30 days from your complaint date. Missing these deadlines ends your right to seek relief under the scheme.
              </p>
            </section>

            {/* Section 3: Statutory Grounds for Harassment Complaints */}
            <section id="statutory-grounds-under-integrated-scheme" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. Statutory Grounds</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Your complaint must state exact rules that the lender broke. The Reserve Bank of India sets clear standards across key rules. These include the <em>Master Direction – Reserve Bank of India (Managing Risks and Code of Conduct in Outsourcing of Financial Services by Regulated Entities) Directions</em>. They include the <em>Master Circular on Fair Practices Code</em>. The <em>Guidelines on Digital Lending (2022)</em> also protect borrowers.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Key statutory grounds for recovery complaints include:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-slate-700">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Violation of Permissible Contact Hours</p>
                    <p className="text-slate-600">Agents can only call or visit between 8:00 AM and 7:00 PM. Calls outside this daily window violate RBI rules.</p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Third-Party Disclosure &amp. Privacy Breach</p>
                    <p className="text-slate-600">Contacting friends, relatives, or employers about your debt breaks banking secrecy laws and Puttaswamy privacy rules.</p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Abusive Language &amp. Criminal Intimidation</p>
                    <p className="text-slate-600">Using foul words, shouting, or issuing fake arrest threats violates Section 351 of the Bharatiya Nyaya Sanhita (BNS) and RBI codes.</p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Uncertified &amp. Unverified Recovery Personnel</p>
                    <p className="text-slate-600">Agents must hold Debt Recovery Agent (DRA) certification from the Indian Institute of Banking and Finance (IIBF) and carry official bank ID cards.</p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Workplace Intrusion &amp. Public Shaming</p>
                    <p className="text-slate-600">Visiting your office, creating scenes in lobbies, or emailing your HR team breaks privacy and fair practice rules.</p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Ignoring Legal Advocate Representation</p>
                    <p className="text-slate-600">Once your legal counsel sends a formal notice, the bank must direct recovery talks to your advocate.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When you list these specific violations with exact RBI circular citations, the Ombudsman prioritizes your case. The bank then has little legal defense.
              </p>
            </section>

            {/* Section 4: Step-by-Step CMS Portal (cms.rbi.org.in) Filing Guide */}
            <section id="step-by-step-cms-portal-walkthrough" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Step-by-Step Guide</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India Complaint Management System (CMS) is an easy online portal. It lets you register and track complaints quickly. Follow this six-stage guide to file your complaint without errors:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <Laptop className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The 6-Stage CMS Portal Execution Protocol</span>
                </div>
                
                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Stage 1: Access Portal &amp. Initiate Registration</p>
                    <p className="text-slate-600 mt-1">
                      Go to <strong>https://cms.rbi.org.in</strong>. Click &quot;File a Complaint&quot;. Enter your mobile number. Complete OTP check. Enter your name, home address, email. And state.
                    </p>
                  </div>

                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Stage 2: Select Regulated Entity &amp. Account Particulars</p>
                    <p className="text-slate-600 mt-1">
                      Pick your entity type: &quot;Scheduled Commercial Bank&quot;, &quot;Non-Banking Financial Company (NBFC)&quot;, or &quot;Payment System Participant&quot;. Select the bank name. Enter your loan or card account number and branch details.
                    </p>
                  </div>

                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Stage 3: Verify Pre-requisite GRO Complaint Data</p>
                    <p className="text-slate-600 mt-1">
                      The portal asks if you wrote to the lender. Click &quot;Yes&quot;. Enter the date you sent the complaint to the GRO. Add the bank ticket number and proof.
                    </p>
                  </div>

                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Stage 4: Category &amp. Sub-Category Selection</p>
                    <p className="text-slate-600 mt-1">
                      Under category, pick <strong>&quot;Loans and Advances&quot;</strong>. Under sub-category, choose <strong>&quot;Recovery Agents / Collection Agencies / Non-adherence to Fair Practices Code&quot;</strong>. This routes your file fast.
                    </p>
                  </div>

                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Stage 5: Input Detailed Grievance Statement</p>
                    <p className="text-slate-600 mt-1">
                      Write a brief factual note under 2,000 characters. State your loan number, call dates. And caller numbers. Note abusive words and refer to your PDF file.
                    </p>
                  </div>

                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Stage 6: Upload PDF Evidence Dossier &amp. Submit</p>
                    <p className="text-slate-600 mt-1">
                      Upload one indexed PDF file under 10MB. Include your GRO notice, bank replies, call logs, chats, and ID proof. Submit to get your <strong>Complaint Tracking Number</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                After submission, you will receive an SMS and email with your CMS Complaint Reference ID. Use this ID to track updates and review bank replies online.
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
                Your RBI Ombudsman case depends on solid proof. Banks often deny that recovery agents acted abusively. Clear digital evidence proves your claims beyond dispute.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Section 63 of the <em>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</em>. This replaced Section 65B of the Indian Evidence Act, 1872. Digital files serve as valid legal evidence. This includes call recordings and WhatsApp messages. SMS threats and phone call logs with timestamps also count.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4 space-y-3">
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Mandatory Evidentiary Compilation Checklist</span>
                </h3>
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">1. Raw Audio Files with Unaltered Hash &amp. Timestamps</p>
                    <p className="text-slate-600 mt-1">Keep original audio files on cloud storage. Write a word-for-word transcript noting caller number, date, call time. And duration.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">2. Telecom Call Detail Records (CDRs) &amp. Frequency Logs</p>
                    <p className="text-slate-600 mt-1">Download monthly call logs from your telecom carrier. Showing 20 to 50 calls in one day proves repeated harassment.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">3. WhatsApp &amp. SMS Chat Transcripts with Sender Identifiers</p>
                    <p className="text-slate-600 mt-1">Save full screenshots showing sender phone numbers (+91...), dates, times. And abusive messages or fake court notices.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">4. CCTV Footage &amp. Doorstep Audio-Video Recordings</p>
                    <p className="text-slate-600 mt-1">If agents visit your home or office, save video clips showing them shouting, refusing to leave, or lacking bank ID cards.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Combine all screenshots and text records into one clear PDF document. For audio files, store them on Google Drive or DigiLocker. Include direct access links inside your PDF file.
              </p>
            </section>

            {/* Section 7: Claiming ₹20 Lakh Compensation & Bank NPV Economics */}
            <section id="compensation-claim-20-lakh-npv-model" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Claiming Statutory Compensation Up to ₹20 Lakhs</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Reserve Bank - Integrated Ombudsman Scheme, 2021 gives the Ombudsman power to award money to borrowers. Under Clause 15(3), the Ombudsman can award up to <strong>₹20 Lakhs</strong> for direct financial loss caused by bank service issues. The Ombudsman can also award up to <strong>₹1 Lakh</strong> for mental agony, lost time. And legal expenses.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To claim payout, show your actual losses clearly. This includes lost job contracts, medical bills from stress. And legal fees spent defending against threats.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Lenders act fast under Ombudsman review. Under RBI rules, banks must set aside funds for unpaid loans. An active Ombudsman complaint adds regulatory risk. Banks judge recovery value using Net Present Value (NPV):
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
                  Where C_t is expected recovery over time t, r is the bank discount rate. And deductions cover court costs and locked capital.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                An active Ombudsman case cuts recovery value. Facing a possible ₹20 Lakh penalty and audits, banks prefer to pull back agents. They often offer a 40% to 65% One-Time Settlement waiver instead.
              </p>
            </section>

            {/* Section 8: Post-Ombudsman OTS Resolution & CIBIL Rectification */}
            <section id="post-complaint-ots-settlement-cibil-fix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Post-Ombudsman OTS &amp; Sanction Letter</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A strong RBI complaint does more than stop calls. It helps you settle your debt on fair terms. Once the Ombudsman steps in, the bank moves your file to its settlement desk.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Follow these three steps for a clean debt exit:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <FileCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The Three-Pillar Legal Debt Settlement Protocol</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">1. Authentic Sanction Letter</p>
                    <p className="text-slate-600">Get an official One-Time Settlement (OTS) letter on bank letterhead. It must show digital signatures, account numbers. And payment terms.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">2. Stamped No Dues Certificate</p>
                    <p className="text-slate-600">Ensure the bank issues a signed No Dues Certificate (NDC) under RBI Circular RBI/2023-24/60 confirming zero remaining balance.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">3. Credit Bureau Rectification</p>
                    <p className="text-slate-600">Ensure the bank updates CIBIL, Experian, Equifax, and CRIF High Mark within 30 days to show the loan as &apos;Settled&apos. or &apos;Closed&apos;.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Never pay cash to recovery agents. Always pay through net banking, NEFT, or RTGS directly into your bank loan account. After getting your NDC, you can rebuild your credit score step by step.
              </p>
            </section>

            {/* Section 9: Comparative Legal Redressal Matrix */}
            <section id="comparative-redressal-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. Grievance Redressal Forums Comparison Matrix</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers facing recovery harassment have multiple legal paths under Indian law. The table below compares the speed, cost. And powers of each option:
              </p>

              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Redressal Forum.</th>
                      <th>Statutory Authority.</th>
                      <th>Average Resolution Time.</th>
                      <th>Financial Cost to Borrower.</th>
                      <th>payout &amp. Enforcement Powers.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">RBI Integrated Ombudsman (CMS).</td>
                      <td>Section 35A Banking Regulation Act / RB-IOS 2021.</td>
                      <td>30 to 90 Days.</td>
                      <td><strong>₹0 (Completely Free)</strong></td>
                      <td>Awards up to ₹20 Lakhs direct damages. Awards ₹1 Lakh for mental agony. Enforces direct bank supervisory sanctions.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Bank Internal Nodal Desk (GRO).</td>
                      <td>RBI Fair Practices Code Mandate.</td>
                      <td>15 to 30 Days.</td>
                      <td><strong>₹0 (Completely Free)</strong></td>
                      <td>Internal reprimands. Mandatory step before Ombudsman escalation.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">District Consumer Disputes Redressal Commission.</td>
                      <td>Consumer Protection Act, 2019.</td>
                      <td>12 to 24 Months.</td>
                      <td>Nominal Court Fees + Advocate Charges.</td>
                      <td>Awards cash damages for poor bank service and unfair trade practices.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">National Cyber Crime Reporting Portal.</td>
                      <td>Information Technology Act, 2000 &amp. BNS.</td>
                      <td>30 to 60 Days.</td>
                      <td><strong>₹0 (Completely Free)</strong></td>
                      <td>Freezes fraud bank accounts. Registers FIR for illegal lending apps and blackmail.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">National Lok Adalat.</td>
                      <td>Legal Services Authorities Act, 1987.</td>
                      <td>Single-Day Hearing.</td>
                      <td><strong>₹0 (Court fee refunded if pending)</strong></td>
                      <td>Final civil compromise decree with mutual waiver.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Representation */}
            <section id="settleloans-regulatory-defense" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. SettleLoans RBI Ombudsman Representation</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Filing an RBI Ombudsman case needs legal care. Our legal team at SettleLoans helps borrowers resolve debt disputes and stop harassment nationwide.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  We handle the full process: drafting 30-day notices to bank Grievance Officers, preparing evidence under Section 63 BSA. And filing on cms.rbi.org.in. We also negotiate 40% to 65% One-Time Settlements with official bank sanction letters and No Dues Certificates.
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
                Clear answers regarding the RBI Complaint Management System, recovery agent restrictions, evidence submission. And payout claims.
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
                  <p className="text-xs text-slate-500">Chief Banking &amp. Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Expert in banking law, RBI Ombudsman complaints, digital proof under Section 63 BSA. And debt settlements.
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
                Do not face abusive collection calls or home visits alone. Speak with our debt resolution advocates to file an RBI complaint and negotiate a 40%–65% OTS waiver.
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
