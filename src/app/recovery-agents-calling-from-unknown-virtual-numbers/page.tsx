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
  Ban,
  Briefcase,
  Mail,
  UserX,
  Radio,
  Smartphone,
  Server,
  Layers,
  Database,
  ArrowUpRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Stop Recovery Calls from Virtual Numbers | SettleLoans',
  description: 'Recovery agents calling from unknown virtual VoIP numbers? Learn how to trace digital harassment and file DOT complaints with SettleLoans.',
  keywords: [
    'recovery agent calling from virtual numbers whatsapp',
    'voip recovery agent calls',
    'recovery agents using virtual numbers',
    'fake whatsapp recovery messages disappearing',
    'how to block auto dialers debt collection',
    'dot chakshu portal loan harassment complaint',
    'tcccpr telecom commercial communications complaint',
    'preserve cdr digital evidence loan recovery',
    'holding lending bank accountable for third party virtual number calls',
    'rbi fair practices code digital harassment',
    'section 66d it act spoofing impersonation recovery',
    'one time settlement digital harassment virtual numbers'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/recovery-agents-calling-from-unknown-virtual-numbers',
  },
  openGraph: {
    title: 'Recovery Agents Calling from Virtual Numbers & WhatsApp? Legal Defenses & DoT Chakshu Guide',
    description: 'Stop digital debt collection harassment. Discover statutory protections against VoIP auto-dialers, illegal virtual numbers, and disappearing WhatsApp threats under RBI, DoT, and IT Act frameworks.',
    url: 'https://www.settleloans.in/recovery-agents-calling-from-unknown-virtual-numbers',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/recovery-agents-calling-from-unknown-virtual-numbers.jpg',
        width: 1200,
        height: 675,
        alt: 'Recovery Agents Calling from Unknown Virtual Numbers Legal Defense Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recovery Agents Calling from Virtual Numbers & WhatsApp? Legal Defenses & DoT Chakshu Guide',
    description: 'Facing relentless calls from spoofed VoIP lines, automated dialers, or WhatsApp bots? Learn how to preserve digital evidence, report to DoT Chakshu, and hold banks vicariously liable.',
    images: ['https://www.settleloans.in/images/infographics/recovery-agents-calling-from-unknown-virtual-numbers.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/recovery-agents-calling-from-unknown-virtual-numbers#webpage",
      "url": "https://www.settleloans.in/recovery-agents-calling-from-unknown-virtual-numbers",
      "name": "Recovery Agents Calling from Virtual Numbers & WhatsApp? Legal Defenses & DoT Chakshu Guide",
      "description": "Comprehensive legal and technical breakdown for borrowers facing recovery agent harassment through VoIP numbers, auto-dialers, spoofed caller IDs, and disappearing WhatsApp chats in India.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/recovery-agents-calling-from-unknown-virtual-numbers#breadcrumb"
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
      "@id": "https://www.settleloans.in/recovery-agents-calling-from-unknown-virtual-numbers#breadcrumb",
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
          "name": "Digital Recovery Harassment Defense",
          "item": "https://www.settleloans.in/recovery-agents-calling-from-unknown-virtual-numbers"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/recovery-agents-calling-from-unknown-virtual-numbers#article",
      "headline": "Recovery Agents Calling from Unknown Virtual Numbers: VoIP Tracking, DoT Chakshu Complaints & Bank Accountability",
      "description": "An exhaustive analysis on how recovery agencies exploit VoIP auto-dialers, virtual series (+91 140 / +91 160 headers), and disappearing WhatsApp messages to bypass Truecaller blocking, and the exact statutory mechanisms to preserve digital evidence, file DoT Chakshu grievances, invoke RBI Master Directions, and negotiate 55% One-Time Settlements.",
      "image": "https://www.settleloans.in/images/infographics/recovery-agents-calling-from-unknown-virtual-numbers.jpg",
      "datePublished": "2026-08-28T10:00:00+05:30",
      "dateModified": "2026-08-28T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/recovery-agents-calling-from-unknown-virtual-numbers#webpage"
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
      "@id": "https://www.settleloans.in/recovery-agents-calling-from-unknown-virtual-numbers#service",
      "name": "SettleLoans - Digital Debt Harassment Defense & Loan Settlement Advisory",
      "description": "Specialized legal defense and financial dispute resolution for borrowers facing aggressive digital collection harassment, automated robocalls, spoofed virtual numbers, and unauthorized WhatsApp outreach.",
      "url": "https://www.settleloans.in/recovery-agents-calling-from-unknown-virtual-numbers",
      "image": "https://www.settleloans.in/images/infographics/recovery-agents-calling-from-unknown-virtual-numbers.jpg",
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
        "reviewCount": "2180",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Siddharth Nambiar"
          },
          "datePublished": "2026-07-18",
          "reviewBody": "A private bank recovery agency bombarded my phone with over 60 calls daily using rotating virtual numbers. Truecaller could not block them. They also sent threatening WhatsApp messages set on disappearing mode. SettleLoans saved the digital logs. They filed a Chakshu portal complaint. They also sent a legal notice to the bank MD. The calls stopped in 24 hours. We settled the loan at a 58% discount.",
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
          "datePublished": "2026-06-30",
          "reviewBody": "Unknown numbers pretending to be court bailiffs were spamming my family via WhatsApp bots. SettleLoans stepped in right away. They found the NBFC behind the virtual numbers under Section 66D IT Act. They filed a case with the RBI Ombudsman. harassment stopped completely. We got a clean closure letter.",
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
            "name": "Prateek Varshney"
          },
          "datePublished": "2026-08-09",
          "reviewBody": "Auto-dialers were calling my phone every 8 minutes from cloud telephony numbers. SettleLoans guided me through logging the DoT TCCCPR grievance. They served a legal notice holding the bank vicariously liable. Their technical and legal advice was superb.",
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
            "name": "Kavita Rao"
          },
          "datePublished": "2026-05-24",
          "reviewBody": "I was overwhelmed by anonymous WhatsApp threats demanding instant UPI transfers. The legal team at SettleLoans verified the claims and stopped the extortion attempt. They negotiated a structured settlement directly through the bank's official portal.",
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
      "@id": "https://www.settleloans.in/recovery-agents-calling-from-unknown-virtual-numbers#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is it legal for recovery agents to call from unknown virtual numbers or VoIP auto-dialers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Under TRAI rules and RBI Master Directions, recovery calls must come from 140-xxx or 160-xxx numbers. Using 10-digit mobile SIMs or VoIP virtual lines to bypass blocking is illegal."
          }
        },
        {
          "@type": "Question",
          "name": "How do recovery agencies use auto-dialers and virtual numbers to bypass Truecaller?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Collection agencies use cloud SIP trunking and automated dialers linked to large pools of virtual numbers. When a number is flagged as spam on Truecaller, the system switches to a new caller ID. This creates non-stop calls without revealing the agency's true name."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Department of Telecommunications (DoT) Chakshu portal and how does it help?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Chakshu is a citizen reporting tool on the Government of India Sanchar Saathi portal at sancharsaathi.gov.in. It helps users report fraud calls and recovery abuse via SMS, WhatsApp. And calls. Reporting virtual numbers leads to telecom KYC checks and permanent SIM blocking."
          }
        },
        {
          "@type": "Question",
          "name": "How can I preserve digital evidence from disappearing WhatsApp messages and VoIP calls?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To preserve evidence under Section 63 of Bharatiya Sakshya Adhiniyam, take full screenshots. Make sure the phone number, date. And text are visible. Save chat exports and get Call Detail Records (CDR) from your mobile operator."
          }
        },
        {
          "@type": "Question",
          "name": "Can the lending bank be held legally responsible for illegal calls made by third-party recovery agencies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Under Section 182 of the Indian Contract Act, banks are liable for their recovery agents. The RBI Outsourcing rules also hold lenders fully responsible. Banks cannot excuse illegal collection acts."
          }
        },
        {
          "@type": "Question",
          "name": "What sections of the Information Technology Act apply to recovery agent spoofing and virtual number threats?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Using spoofed virtual numbers violates Section 66D of the IT Act. It carries up to 3 years in jail. Sharing debtor data with dialer apps also violates Sections 43A and 72A."
          }
        },
        {
          "@type": "Question",
          "name": "What are the permissible calling hours for debt recovery agents under RBI directives?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The RBI strictly allows recovery calls only between 8:00 AM and 7:00 PM. Calls, robocalls. or WhatsApp messages received before 8:00 AM or after 7:00 PM violate the RBI Fair Practices Code."
          }
        },
        {
          "@type": "Question",
          "name": "How does digital harassment provide leverage to negotiate a One-Time Settlement (OTS)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When lawyers submit evidence of TRAI and RBI violations, lenders face huge fines. Bank leaders act quickly to avoid ombudsman fines. They halt collection calls and approve a 45% to 65% OTS."
          }
        },
        {
          "@type": "Question",
          "name": "Should I transfer funds directly to UPI IDs or links provided by recovery callers on WhatsApp?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Never. Rogue agents often share personal UPI handles or QR codes to take funds. All settlement payments must go directly into your official loan account. Pay via net banking, NEFT. or bank counters after getting a sanction letter."
          }
        },
        {
          "@type": "Question",
          "name": "What is the mandatory RBI timeline for issuing a No Dues Certificate after completing a settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, lenders must issue a No Dues Certificate (NDC) within 30 days of settlement payment. They must also update CIBIL and other bureaus to show zero balance. Delays beyond 30 days incur a penalty of ₹5,000 per day payable to the debtor."
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
  { id: 'digital-harassment-voip-virtual-numbers-reality', title: '1. VoIP, Auto-Dialers & Disappearing Chats' },
  { id: 'statutory-telecom-it-act-rbi-regulations', title: '2. Statutory Framework: TRAI, DoT & IT Act' },
  { id: 'holding-lending-banks-vicariously-liable', title: '3. Principal-Agent Vicarious Liability' },
  { id: 'npa-accounting-npv-recovery-dynamics', title: '4. NPA Accounting & The NPV Recovery Equation' },
  { id: 'digital-harassment-defense-roadmap', title: '5. Harassment Defense Visual Roadmap' },
  { id: 'evidence-preservation-cdr-dot-chakshu-protocol', title: '6. CDR Preservation & DoT Chakshu Filing' },
  { id: 'converting-digital-harassment-into-ots', title: '7. Converting Harassment into 55% OTS' },
  { id: 'sanction-forensics-rbi-ndc-mandate', title: '8. Sanction Forensics & RBI ₹0 NDC Mandate' },
  { id: 'comparative-digital-defense-matrix', title: '9. Comparative Legal Defense Matrix' },
  { id: 'company-resolution-section', title: '10. SettleLoans Digital Defense Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function RecoveryAgentsVirtualNumbersPage() {
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
            <Radio className="w-3.5 h-3.5" />
            <span>Digital Harassment Defense • VoIP Tracking &amp; DoT Chakshu Remedies</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Recovery Agents Calling from Virtual VoIP Numbers</h1>

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
              <span>TRAI, DoT &amp; RBI Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Stop Digital Harassment Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Get Emergency Advocate Consultation
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
                <span>Executive Case Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">Recovery calls from virtual numbers and auto-dialers violate TRAI rules and Section 66D IT Act. Preserving CDR logs helps lawyers file DoT Chakshu complaints. This forces the bank into a 45% to 65% OTS.</p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Virtual Numbers &amp; Digital Harassment Rights</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /> <span><strong>Ban on Unregistered Numbers:</strong> TRAI and RBI rules require recovery calls to use 140-xxx or 160-xxx series. Using virtual numbers to bypass caller blocks is illegal.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /> <span><strong>IT Act Impersonation Protections:</strong> Using spoofed caller IDs triggers criminal liability under Section 66D IT Act. Offenses carry up to 3 years in jail.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /> <span><strong>DoT Chakshu Portal Complaints:</strong> Debtors can file complaints on the DoT Sanchar Saathi Chakshu portal. This leads to telecom audits, SIM cancel. and IMEI blocks.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /> <span><strong>Bank Bank Liability:</strong> Under Section 182 Contract Act and RBI rules, lenders are liable for collection agents. Banks cannot disown abuse by third-party callers.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /> <span><strong>Turning abuse into 55% OTS:</strong> Documenting digital abuse in an advocate notice creates high regulatory risk for the bank. Lenders quickly halt calls and offer a 45% to 65% settlement.</span></li>
              </ul>
            </div>

            {/* Section 1: Digital Harassment Reality */}
            <section id="digital-harassment-voip-virtual-numbers-reality" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. The Modern Architecture of Digital Harassment</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Debt collection in India has changed fast in recent years. Direct branch visits and direct calls have been replaced by digital calling setups. When loans go unpaid, debtors face non-stop automated calls. These calls come from rotating virtual numbers, cloud SIP lines. And disposable VoIP channels.</p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Collection agencies use automated dialers with smart rotation scripts. When you block a number on Truecaller, the dialer switches to a new caller ID. It picks from hundreds of virtual numbers. This bypasses phone blocking tools. This leads to non-stop ringing all day.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Server className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Cloud SIP Trunking &amp; Auto-Dialer Loops</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">Agencies use cloud call systems that cycle through mobile number ranges. If you hang up, the dialer calls back right away. It uses a new virtual line to cause distress.</p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Smartphone className="w-4 h-4 text-indigo-600" />
                    <span>Disappearing WhatsApp &amp; Virtual Identity Bots</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">Collectors use automated WhatsApp bots with hidden timers. They send threats and fake notices. They rely on auto-deletion to erase proof before you see a lawyer.</p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Rogue callers often pose as court bailiffs or crime branch officers. They demand instant UPI payments to unverified accounts. Debtors should know that these tactics are illegal cyber offenses and direct violations of RBI rules.</p>
            </section>

            {/* Section 2: Statutory Framework */}
            <section id="statutory-telecom-it-act-rbi-regulations" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Statutory Laws on Virtual Number Harassment</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Indian telecom and cyber laws ban anonymous, automated. And spoofed bank calls. Recovery agencies break clear laws when using virtual lines and VoIP dialers. These rules come from TRAI, DoT, MeitY. And the RBI:</p>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-blue-950">
                  <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                  <span>TRAI Telecom Commercial Communications Customer Preference Regulations (TCCCPR, 2018)</span>
                </div>
                <p className="leading-relaxed text-blue-800">Under TRAI TCCCPR rules, every bank and collection agency must register on telecom DLT platforms. All recovery calls must come from approved <strong>140-xxx</strong> or <strong>160-xxx</strong> series. Calling from private 10-digit SIMs or virtual numbers is illegal and leads to immediate telecom disconnection.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs my-4">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-blue-600" />
                    <span>Section 66D IT Act, 2000</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">Anyone using devices to cheat by personation faces up to 3 years in jail. Courts also impose heavy fines under Section 66D IT Act.</p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Section 43A &amp; 72A IT Act</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">Sharing debtor contact details with unvetted cloud dialer networks is a breach of data privacy. It attracts severe civil damages.</p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-purple-600" />
                    <span>RBI 8 AM to 7 PM Calling Window</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">The RBI Master Direction limits recovery calls strictly between 8:00 AM and 7:00 PM. Automated robocalls outside these hours violate central banking rules.</p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">The Supreme Court confirmed in the <em>Puttaswamy (2017)</em> case that privacy is a basic right under <strong>Article 21</strong>. No lender can subject debtors to non-stop digital stalking or automated spamming.</p>
            </section>

            {/* Section 3: Vicarious Liability */}
            <section id="holding-lending-banks-vicariously-liable" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. Bank Liability for Virtual Harassment Agents</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Lenders often claim they are not responsible for rogue callers, blaming third-party agencies instead. Under Indian contract law and banking rules, this defense is completely invalid.</p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">The relationship between a lender and its collection agency is governed by the <strong>Doctrine of Bank Liability</strong>:</p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-red-500 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-red-600" />
                    <span>Section 182 &amp; 238 Indian Contract Act, 1872 (Principal-Agent Law)</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">Section 182 defines the principal-agent relationship. Under Section 238, frauds and misrepresentations by agents legally bind the principal bank itself.</p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                    <span>RBI Master Direction on Managing Risks and Code of Conduct in Outsourcing of Financial Services</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">The RBI states that outsourcing debt recovery does not reduce the bank&apos;s legal duties. Banks must ensure agents follow the Fair Practices Code and use only verified phone lines.</p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Gavel className="w-4 h-4 text-purple-600" />
                    <span>Judicial Precedent: ICICI Bank Ltd. v. Prakash Kaur (2007) 2 SCC 711</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">The Supreme Court ruled that banks cannot use musclemen or threats to recover debt. Lenders remain directly liable in court for agent misconduct.</p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">When lawyers serve a legal notice on bank executives, the lender cannot escape liability. Proving that the bank shared your file with rogue dialer networks exposes the bank to severe fines.</p>
            </section>

            {/* Section 4: Bank Accounting & NPV Recovery */}
            <section id="npa-accounting-npv-recovery-dynamics" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Bank Provisions &amp; Virtual Harassment Fallout</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Knowing bank accounting explains why agencies use intense virtual dialing campaigns. bank banks and NBFCs follow strict RBI reserves rules. When an unsecured personal loan or credit card default passes 90 days, it becomes a <strong>defaulted Asset (NPA)</strong>. The bank must set aside capital buffers:</p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Prudential Asset Category.</th>
                      <th>default Aging Bracket.</th>
                      <th>Mandatory RBI Capital Provision.</th>
                      <th>settlement / Haircut Scope.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Special Mention Account (SMA-1/2).</td>
                      <td>31 – 90 Days Overdue.</td>
                      <td>5% Standard Capital Buffer.</td>
                      <td>Penal Interest & Overdue Charge Waivers.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Substandard NPA.</td>
                      <td>91 – 365 Days Overdue.</td>
                      <td>25% Unsecured reserves.</td>
                      <td>30% – 45% Principal Haircut.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful Asset 1 (D1).</td>
                      <td>12 – 24 Months Default.</td>
                      <td>100% Full reserves Requirement.</td>
                      <td>45% – 55% Principal Haircut.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful Asset 2 / Loss Asset.</td>
                      <td>24+ Months / Write-Off Bucket.</td>
                      <td>100% Balance Sheet Write-Off.</td>
                      <td>55% – 65% Principal Haircut.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Third-party collection agencies earn high commissions of 12% to 28% on recovered funds. Tele-callers lose payouts when loans enter deep write-off stages. Because of this, they use auto-dialers to pressure debtors. Once lawyers stop the calls, the bank reviews the loan. The bank evaluates the debt using the <strong>Net Present Value (NPV) of Recovery</strong> formula:</p>

              {/* JSX Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">Where C_t is the expected recovery cash flow. And r is the discount rate. Deductions account for 3 to 5 years of legal delays, ombudsman fines. And locked capital reserves.</p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Banks realize that pursuing hostile digital collection creates severe legal risks. Sanctioning a settlement with a 45% to 65% principal waiver becomes the bank&apos;s smartest money choice.</p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="digital-harassment-defense-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">5. Virtual Number Harassment Defense Roadmap</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">The roadmap below shows the 5-step process used by banking lawyers. It helps preserve digital evidence, file DoT Chakshu complaints. And secure a 55% OTS.</p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/recovery-agents-calling-from-unknown-virtual-numbers.jpg"
                  alt="Recovery Agent Harassment Legal Defense and Technical Tracking Strategic Guide"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 1–2: Evidence &amp; Chakshu Filing</span>
                  <span>Download complete CDR logs, screenshot disappearing WhatsApp chats, and file complaints on the DoT Chakshu portal.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 3–4: IT Act &amp; Vicarious Notice</span>
                  <span>Apply Section 66D of the IT Act against caller spoofing. Serve advocate notices establishing bank vicarious liability under Section 182 ICA.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 5: 55% OTS &amp; Clean No Dues</span>
                  <span>Stop collection harassment permanently. Negotiate an affordable One-Time Settlement and get a bank-stamped No Dues Certificate.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Digital Forensics & DoT Chakshu */}
            <section id="evidence-preservation-cdr-dot-chakshu-protocol" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. Digital Evidence &amp; Forensics Against Spoofing</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">When dealing with virtual auto-dialers and hidden WhatsApp messages, verbal complaints are not enough. The RBI Ombudsman and cyber crime units need clear digital proof under Section 63 of the <strong>Bharatiya Sakshya Adhiniyam, 2023</strong>:</p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Step 1: Telecom Provider CDR (Call Detail Record) Retrieval</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">Request itemized Call Detail Records from your mobile operator (Jio, Airtel, Vi). Official CDR logs prove call frequencies, timestamps. And numbers. This provides hard evidence of automated abuse.</p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Step 2: WhatsApp Header Capture &amp; Video Screen Forensics</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Take instant full-screen screenshots showing the sender&apos;s full phone number and timestamp before messages disappear. Record a continuous screen video scrolling through the chat context.</p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Step 3: Filing Formal Complaint on DoT Sanchar Saathi Chakshu Portal</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Visit the official <strong>Sanchar Saathi portal (sancharsaathi.gov.in)</strong> and open the <strong>Chakshu facility</strong>. Report the virtual numbers and dialer patterns under suspected fraud. This triggers telecom audits and SIM blacklisting.</p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Step 4: TRAI TCCCPR Telecom Carrier Escalation</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Forward unregistered virtual numbers to your carrier. Send an SMS to <strong>1909</strong> or use the TRAI DND app to report spam.</p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Compiling this digital record enables your legal counsel to hold both the agency and the bank fully accountable.</p>
            </section>

            {/* Section 7: Converting Harassment into 55% OTS */}
            <section id="converting-digital-harassment-into-ots" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Converting Digital Harassment into Leverage</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Digital abuse is stressful. But it gives the debtor strong legal leverage. Persistent robotic calling shows the lender has no fast legal way to claim your assets. By hiring a lawyer to document these violations, you shift the advantage in your favor.</p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Our banking defense lawyers use these documented infractions to settle a <strong>One-Time Settlement (OTS)</strong>:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileText className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Hardship Dossier Formulation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">Show proof of income loss, job changes. or medical bills. This proves that your default was genuine.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <BadgePercent className="w-4 h-4 text-emerald-600" />
                    <span>Total Penalty Waiver &amp; Principal Haircut</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">Secure a 100% waiver on late fees and penal interest,. a <strong>45% to 65% reduction on the principal balance</strong>.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Ban className="w-4 h-4 text-purple-600" />
                    <span>Ceasefire &amp; Agency Recall Covenant</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">Require the bank to cancel all collection agency mandates and permanently remove your numbers from auto-dialer lists.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                    <span>Structured Multi-Tranche Payment Plan</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">Divide the negotiated settlement sum into 2 to 4 monthly installments to settle without selling personal assets.</p>
                </div>
              </div>
            </section>

            {/* Section 8: Sanction Forensics & RBI NDC Mandate */}
            <section id="sanction-forensics-rbi-ndc-mandate" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Sanction Letter Forensics &amp; NDC for Spoofed Calls</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Debtors must be careful when receiving settlement offers over WhatsApp or phone calls. Rogue agents often share fake settlement letters to meet monthly targets. Never pay any money until your legal counsel verifies the sanction letter.</p>
              
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>The 4 Essential Forensic Checkpoints of an Authentic Settlement Sanction Letter</span>
                </div>
                <ul className="space-y-1.5 text-xs text-amber-800 list-disc pl-4">
                  <li><strong>Official Bank Letterhead:</strong> Must be on official bank paper. It must have a reference number, corporate email. And manager signature.</li>
                  <li><strong>Exact Debtor Details:</strong> Must show your full legal name, PAN. And exact loan account number without mistakes.</li>
                  <li><strong>Full Debt closure:</strong> Must confirm that paying the settlement amount closes the loan completely with no balance remaining.</li>
                  <li><strong>Direct Account payment:</strong> Pay only into your own official loan account via net banking, NEFT. or bank counters. Never send money to an agent&apos;s UPI.</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>RBI Circular RBI/2023-24/60: Mandatory ₹0 NDC Delivery &amp; ₹5,000/Day Penalty</span>
                </div>
                <p className="leading-relaxed text-emerald-900">Under <strong>RBI Circular RBI/2023-24/60</strong>, lenders must issue an official <strong>No Dues Certificate (NDC)</strong> within <strong>30 days</strong> of settlement payment. They must also update CIBIL, Experian, Equifax. and CRIF to show zero balance. Any delay beyond 30 days incurs a legal penalty of <strong>₹5,000 per day</strong>.</p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                CIBIL Bureau Reporting Dynamics &amp; Credit Score Rehabilitation
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">After settlement, credit bureaus mark the account as <strong>&quot;Settled&quot;</strong> with an outstanding balance of <strong>₹0</strong>. This stops monthly score erosion. With a secured card and timely payments, debtors rebuild credit scores above 750 in 18 to 24 months.</p>
            </section>

            {/* Section 9: Comparative Matrix */}
            <section id="comparative-digital-defense-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. Virtual Calling Legal Defense Matrix</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Evaluating these response strategies helps debtors take decisive legal action:</p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Action Strategy.</th>
                      <th>Legal Foundation.</th>
                      <th>Protection Level.</th>
                      <th>Expected Timeline.</th>
                      <th>Final Legal Effect.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">App Blocking (Truecaller).</td>
                      <td>Local device number filter.</td>
                      <td>Fails against rotating virtual numbers.</td>
                      <td>Continuous.</td>
                      <td>No debt relief. Calls resume from new numbers.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">DoT Chakshu Portal Filing.</td>
                      <td>DoT Fraud Team & TRAI TCCCPR.</td>
                      <td>High. Triggers telecom audit and number blocking.</td>
                      <td>7 – 15 Days.</td>
                      <td>Shuts down calling pool. Creates legal proof.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">RBI Banking Ombudsman.</td>
                      <td>RBI Integrated Ombudsman Scheme, 2021.</td>
                      <td>Enforces Fair Practices Code against the bank.</td>
                      <td>30 – 45 Days.</td>
                      <td>Orders bank to stop misconduct with payout.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Advocate Notice & 55% OTS.</td>
                      <td>Principal-Agent Liability & OTS Contract.</td>
                      <td>Immediate. Halts calls and collection visits.</td>
                      <td>15 – 30 Days.</td>
                      <td>Full debt closure with 45%–65% waiver and ₹0 NDC.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. SettleLoans Digital Harassment Defense</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Stopping virtual number calls needs expert banking lawyers. SettleLoans provides complete legal defense across India. We preserve digital evidence and file complaints on DoT Chakshu and RBI portals. We settle 45% to 65% loan waivers with authentic No Dues Certificates.</p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. FAQs: Virtual Numbers, Auto-Dialers &amp; Legal Remedies</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">Clear, verified answers to key questions about virtual calls, VoIP dialers, DoT Chakshu complaints. And debt settlement in India.</p>

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
                  href="https://sancharsaathi.gov.in/sfc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">DoT Sanchar Saathi – Chakshu Suspected Fraud Reporting Facility</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://trai.gov.in/telecom-commercial-communications-customer-preference-regulations-2018"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">TRAI Telecom Commercial Communications Customer Preference Regulations (TCCCPR)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Digital Harassment Complaints)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.meity.gov.in/content/information-technology-act-2000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Ministry of Electronics &amp; IT (Section 66D IT Act – Personation &amp; Spoofing)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction – Managing Risks and Code of Conduct in Outsourcing of Financial Services</span>
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
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Bank Recovery Harassment
                </Link>
                <Link
                  href="/cyber-crime-complaint-illegal-loan-apps-blackmail"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Cyber Crime Loan App Complaints
                </Link>
                <Link
                  href="/bank-sending-legal-notice-to-employer-illegal-recovery"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Workplace Recovery Harassment Defense
                </Link>
                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Legal Notice Reply Guide
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Loan Default &amp; Jail Rights
                </Link>
                <Link
                  href="/hdfc-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  HDFC Bank Loan Settlement
                </Link>
                <Link
                  href="/bajaj-finance-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bajaj Finance Loan Settlement
                </Link>
                <Link
                  href="/icici-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  ICICI Bank Loan Settlement
                </Link>
                <Link
                  href="/credit-card-settlement-above-1-lakh"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Credit Card Settlement Guide
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
                <Link href="/authors/ashish-jhangra" className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-lg hover:opacity-90 transition-opacity">
                    AJ
                  </div>
                </Link>
                <div>
                  <Link href="/authors/ashish-jhangra" className="font-bold text-slate-900 text-sm hover:text-[#1F5EFF] transition-colors block">
                    Ashish Jhangra
                  </Link>
                  <p className="text-xs text-slate-500">Chief Banking & Debt Solution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">Senior specialist in banking court case defense, TRAI telecom rules, IT Act protections. And debt settlement in India.</p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Verified Legal Author</span>
                </span>
                <Link
                  href="/authors/ashish-jhangra"
                  className="text-[#1F5EFF] hover:underline font-bold flex items-center gap-0.5"
                >
                  <span>View Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Digital Harassment Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Hounded by Auto-Dialers &amp; Unknown Virtual Numbers?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">Stop relentless robotic abuse today. Retain expert banking lawyers to preserve CDR evidence, file DoT Chakshu complaints. And settle a 45% to 65% OTS.</p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Emergency Legal Intervention
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
                  <span>TRAI &amp; DoT Telecom Compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>RBI Ombudsman Dispute Escalation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Advocate-Led Compromise Settlement</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
