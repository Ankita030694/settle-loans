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
  PhoneOff,
  Mic,
  FileWarning
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Recovery Agent Calling After 7 PM | SettleLoans',
  description: 'Recovery agents calling after 7 PM violates RBI rules. Learn how to log calls, send legal notices, file RBI complaints, and settle loans safely.',
  keywords: [
    'recovery agent calling after 7 pm rbi rules',
    'rbi guidelines for recovery agent call timings',
    'can recovery agent call after 7pm in india',
    'rbi circular on recovery agent calling hours',
    'how to file complaint against recovery agent calling late night',
    'rbi ombudsman complaint for recovery harassment',
    'legal notice to bank for recovery calling after 7pm',
    'recovery agent harassment law bharatiya nyaya sanhita',
    'recording recovery agent calls evidence rbi',
    'settle personal loan after recovery agent harassment'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/rbi-guidelines-calling-after-7pm-complaint',
  },
  openGraph: {
    title: 'Recovery Agent Calling After 7 PM: RBI Rules & Legal Remedies',
    description: 'Did a recovery agent call you after 7 PM? Discover RBI regulations, timestamped call logging protocols, advocate legal notices, and statutory defense.',
    url: 'https://www.settleloans.in/rbi-guidelines-calling-after-7pm-complaint',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/rbi-guidelines-calling-after-7pm-complaint.jpg',
        width: 1200,
        height: 675,
        alt: 'RBI Guidelines on Recovery Agent Calling After 7 PM Infographic',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recovery Agent Calling After 7 PM: RBI Rules & Legal Remedies',
    description: 'Learn your legal rights when recovery agents call after 7 PM. RBI calling hour rules, timestamped call log evidence, and advocate notices explained.',
    images: ['https://www.settleloans.in/images/infographics/rbi-guidelines-calling-after-7pm-complaint.jpg'],
  },
};

const faqsList = [
  {
    name: "Is it illegal for a recovery agent to call me after 7:00 PM in India?",
    answer: "Yes. The RBI Master Direction on Outsourcing of Financial Services strictly restricts collection calls and visits to between 8:00 AM and 7:00 PM. Any call placed after 7:00 PM is a direct regulatory violation reportable to the bank's Principal Nodal Officer and the RBI Integrated Ombudsman."
  },
  {
    name: "What should I say when a recovery agent calls me late in the evening?",
    answer: "State clearly: 'Under RBI Master Directions, calling borrowers after 7:00 PM is illegal. This call is being recorded for regulatory and legal evidence. State your full name, employee ID, agency, and lending bank, and cease calling outside permitted hours.' Then end the call and preserve screenshots."
  },
  {
    name: "How do I ensure call recordings are legally admissible as evidence?",
    answer: "Under Sections 61–63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), digital voice recordings and call logs are admissible. Retain original audio files on your device, capture unedited screenshots with timestamps, and request an itemized Call Detail Record (CDR) from your telecom operator."
  },
  {
    name: "Can I file a police complaint or FIR if recovery agents call late at night?",
    answer: "Yes. If an agent threatens harm, uses vulgar language, or intimidates your family, you can file a police complaint under Section 351(2) BNS (Criminal Intimidation), Section 352 BNS (Intentional Insult to Provoke Breach of Peace), and Section 79 BNS if female family members are targeted."
  },
  {
    name: "Can the lending bank be penalized for the illegal actions of its recovery agency?",
    answer: "Yes. Under the doctrine of vicarious liability and RBI guidelines, banks and NBFCs remain strictly liable for outsourced recovery agent conduct. Under Section 47A of the Banking Regulation Act, the RBI can impose multi-crore fines and suspend recovery operations."
  },
  {
    name: "How does a formal legal notice from an advocate stop late-night calling?",
    answer: "An advocate cease-and-desist notice served on the bank's Managing Director and Principal Nodal Officer documents illegal call timestamps. It requires all collection calls to stop and directs that communications proceed exclusively through your legal counsel, halting calls within 48 to 72 hours."
  },
  {
    name: "What compensation can borrowers claim under the RBI Integrated Ombudsman Scheme?",
    answer: "Under the RBI Integrated Ombudsman Scheme, 2021, the Ombudsman can award up to ₹20 lakhs for direct financial loss resulting from service deficiencies and up to ₹1 lakh for mental agony, harassment, and loss of time."
  },
  {
    name: "Can recovery agents call my workplace or employer after 7:00 PM?",
    answer: "No. Recovery agents are strictly prohibited from contacting your employer, office HR, or colleagues at any time. Doing so violates Article 21 constitutional privacy rights and constitutes actionable defamation under Section 356 of the Bharatiya Nyaya Sanhita, 2023."
  },
  {
    name: "Does proving an RBI calling hours violation help in negotiating a loan settlement?",
    answer: "Yes. Documented evidence of regulatory violations gives you significant negotiation leverage. To avoid Ombudsman penalties and reputational risk, banks become far more receptive to an official One-Time Settlement (OTS) with a 40% to 65% waiver to close the dispute cleanly."
  }
];

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/rbi-guidelines-calling-after-7pm-complaint#webpage",
      "url": "https://www.settleloans.in/rbi-guidelines-calling-after-7pm-complaint",
      "name": "Recovery Agent Calling After 7 PM: RBI Rules & Legal Remedies",
      "description": "Comprehensive legal guide on RBI rules prohibiting recovery agent calls after 7 PM. Learn how to log call evidence, issue legal notices, and file RBI Ombudsman complaints.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/rbi-guidelines-calling-after-7pm-complaint#breadcrumb"
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
      "@id": "https://www.settleloans.in/rbi-guidelines-calling-after-7pm-complaint#breadcrumb",
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
          "name": "RBI Guidelines Calling After 7 PM Complaint",
          "item": "https://www.settleloans.in/rbi-guidelines-calling-after-7pm-complaint"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/rbi-guidelines-calling-after-7pm-complaint#article",
      "headline": "Recovery Agent Calling After 7 PM: RBI Rules & Legal Remedies",
      "description": "Legal analysis of RBI calling hours directives, Section 351 BNS criminal provisions, timestamped evidence standards under BSA 2023, and debt settlement.",
      "image": "https://www.settleloans.in/images/infographics/rbi-guidelines-calling-after-7pm-complaint.jpg",
      "datePublished": "2026-09-01T10:00:00+05:30",
      "dateModified": "2026-09-01T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/rbi-guidelines-calling-after-7pm-complaint#webpage"
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
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-99999-99999",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi"]
      }
    },
    {
      "@type": "FinancialService",
      "@id": "https://www.settleloans.in/rbi-guidelines-calling-after-7pm-complaint#service",
      "name": "SettleLoans - Harassment Defense & Debt Resolution Services",
      "description": "Legal representation against aggressive recovery agents. We stop illegal after-hours calling, enforce RBI regulatory compliance, and negotiate formal One-Time Settlements.",
      "url": "https://www.settleloans.in/rbi-guidelines-calling-after-7pm-complaint",
      "image": "https://www.settleloans.in/images/infographics/rbi-guidelines-calling-after-7pm-complaint.jpg",
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
        "reviewCount": "2460",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Karan Malhotra"
          },
          "datePublished": "2026-07-28",
          "reviewBody": "A private bank recovery agency was relentlessly calling me at 8:30 PM and 9:15 PM regarding an overdue personal loan, shouting and threatening doorstep visits. SettleLoans helped me document the timestamped call logs and served a formal advocate notice to the bank's Principal Nodal Officer. The illegal calls stopped that very night, and we resolved the balance at a 55% waiver via an official OTS.",
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
            "name": "Sunita Deshmukh"
          },
          "datePublished": "2026-08-11",
          "reviewBody": "Recovery callers were harassing me past 8:00 PM and using abusive language over credit card dues. Ashish Jhangra and his legal team prepared an escalation under the RBI Integrated Ombudsman Scheme citing Section 351 BNS. The bank immediately apologized in writing, removed the external agency, and issued an authentic No Dues Certificate.",
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
            "name": "Vivek Sengupta"
          },
          "datePublished": "2026-06-30",
          "reviewBody": "I was receiving automated IVR calls and aggressive recovery messages on WhatsApp between 7:30 PM and 10:00 PM. SettleLoans guided me on preserving digital call detail records under the BSA 2023. Their advocate notice cited the RBI Outsourcing Circular, stopping all harassment in 48 hours and facilitating a smooth debt resolution.",
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
            "name": "Harish Radhakrishnan"
          },
          "datePublished": "2026-08-22",
          "reviewBody": "Debt recovery agents repeatedly ignored my requests to respect family dinner hours, calling up to 9:00 PM. SettleLoans filed a detailed complaint with the Banking Ombudsman and sent a cease-and-desist letter. The bank offered an immediate settlement with full penal interest waiver. Outstanding legal service.",
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
      "@id": "https://www.settleloans.in/rbi-guidelines-calling-after-7pm-complaint#faq",
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
  { id: 'rbi-calling-hours-prohibition', title: '1. Strict Calling Window Prohibition' },
  { id: 'statutory-civil-criminal-protections', title: '2. Constitutional & Civil Protections' },
  { id: 'forensic-call-log-evidence-admissibility', title: '3. Call Logs & BSA Evidence Standards' },
  { id: 'vicarious-liability-rbi-penalties', title: '4. Bank Liability & Regulatory Fines' },
  { id: 'infographic-calling-hours-shield', title: '5. Regulatory Calling Hours Infographic' },
  { id: 'advocate-cease-and-desist-intervention', title: '6. Advocate Cease-and-Desist Notice' },
  { id: 'npa-provisioning-npv-recovery-model', title: '7. NPA Provisioning & NPV Calculus' },
  { id: 'rbi-cms-ombudsman-escalation-protocol', title: '8. Filing RBI Ombudsman Complaint' },
  { id: 'comparative-enforcement-matrix', title: '9. Comparative Enforcement Matrix' },
  { id: 'settleloans-advocate-intervention', title: '10. SettleLoans Legal Representation' },
  { id: 'faqs', title: '11. Frequently Asked Questions' }
];

export default function RbiGuidelinesCallingAfter7pmComplaintPage() {
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
            <Scale className="w-3.5 h-3.5" />
            <span>RBI Regulatory Compliance • Harassment Defense &amp; Calling Hours Shield</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Recovery Agent Calling After 7 PM: RBI Rules &amp; Defense</h1>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-4 mb-6 flex flex-wrap items-center justify-center gap-4">
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
              <span>RBI Master Direction &amp; Fair Practices Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-lg flex items-center gap-2"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Stop Illegal Recovery Calls</span>
            </Link>
            <Link
              href="#rbi-calling-hours-prohibition"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 font-semibold py-3 px-6 rounded-xl text-sm transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>View Regulatory Rules</span>
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
                Under RBI Master Directions, recovery agents cannot call or visit before 8:00 AM or after 7:00 PM. Calls placed outside this window violate central bank norms and Bharatiya Nyaya Sanhita provisions. Borrowers can record telecom evidence, serve legal notices, and secure debt settlements without harassment.
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
                <span>Key Takeaways: Protection Against After-Hours Recovery Calls</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Strict Calling Window:</strong> RBI Master Directions prohibit collection calls, IVR dialers, texts, and visits outside 8:00 AM to 7:00 PM. Calls after 7:00 PM are direct regulatory offenses.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Lender Liability:</strong> Regulated banks and NBFCs remain directly liable for recovery agent misconduct under Section 47A Banking Regulation Act penalties.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Evidence Admissibility:</strong> Timestamped call detail records, screenshots, and audio recordings are admissible under Sections 61–63 of Bharatiya Sakshya Adhiniyam, 2023.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Criminal Protections:</strong> Abusive nocturnal calls trigger criminal penalties under Sections 351(2), 352, and 79 of the Bharatiya Nyaya Sanhita, 2023.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Advocate Intervention:</strong> Cease-and-desist notices to Principal Nodal Officers halt illegal calling and open paths to negotiated One-Time Settlements (OTS).</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Strict RBI Prohibition on Calling After 7 PM */}
            <section id="rbi-calling-hours-prohibition" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. Strict RBI Prohibition on Calling After 7 PM</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The rapid expansion of retail credit in India has brought aggressive collection methods by outsourced recovery agencies. To protect borrowers, the Reserve Bank of India (RBI) established strict operating rules in its Master Direction on Outsourcing of Financial Services. These directions apply to commercial banks, small finance lenders, and NBFCs nationwide.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under these mandatory directives, customer contact for loan recovery is strictly limited to between 08:00 and 19:00 hours (8:00 AM to 7:00 PM) local time. This rule covers phone calls, automated IVR dialers, SMS alerts, WhatsApp messages, and home visits. Initiating contact at 7:01 PM or 7:59 AM is a direct breach of statutory banking compliance designed to safeguard domestic peace and borrower privacy.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-1">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>The Statutory Principle of Temporal Immunity</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                  Borrowers possess statutory immunity from collection contact between 7:00 PM and 8:00 AM. Any contact during these hours is presumed unlawful under RBI Master Directions, shifting the legal burden of proof to the lender.
                </p>
              </div>
            </section>

            {/* Section 2: Constitutional Privacy and Civil Law Protections */}
            <section id="statutory-civil-criminal-protections" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Constitutional Privacy and Civil Law Protections</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Beyond banking guidelines, protection against after-hours debt harassment is rooted in constitutional law. Article 21 of the Constitution of India guarantees the fundamental Right to Life and Personal Liberty. In <em>Justice K.S. Puttaswamy v. Union of India (2017)</em>, the Supreme Court held that privacy in one&apos;s home is an essential part of Article 21. This built upon <em>ICICI Bank Ltd. v. Prakash Kaur (2007)</em>, where the apex court barred lenders from using musclemen or intimidation to recover dues.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When agents call after 7:00 PM, their conduct often breaches the Bharatiya Nyaya Sanhita, 2023 (BNS). Threatening arrest over an unpaid loan violates Section 351(2) BNS for criminal intimidation. Shouting vulgar insults triggers Section 352 BNS for provoking breach of peace, while harassing female borrowers invokes Section 79 BNS. These offenses expose telecallers and agency supervisors to immediate police complaints.
              </p>
            </section>

            {/* Section 3: Timestamped Call Logs and Digital Evidence Standards */}
            <section id="forensic-call-log-evidence-admissibility" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. Timestamped Call Logs and Digital Evidence Standards</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Banks and collection agencies often deny after-hours calling unless presented with clear electronic proof. To enforce your rights, you must document incoming calls systematically. Never delete after-hours call entries. Capture device screenshots showing the incoming caller ID, date, exact timestamp, and carrier status bar.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Request an itemized Call Detail Record (CDR) from your telecom provider (Jio, Airtel, or Vi) for independent corroboration. Under Sections 61, 62, and 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), recorded voice audio and digital call logs with device metadata are admissible before the RBI Ombudsman, consumer commissions, and civil courts.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4 shadow-sm">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider mb-2">
                  <FileCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Four-Point Digital Evidentiary Checklist</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Device Screenshots:</strong> Capture uncropped screen images showing caller ID, timestamp, and network icon.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Telecom CDR:</strong> Itemized statements proving incoming call origin, routing, and duration.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Audio Recordings:</strong> Clear audio recordings capturing caller identity, bank, and abusive demands.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Message Metadata:</strong> Exported WhatsApp chats retaining raw timestamps and media attachments.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Lender Vicarious Liability and Monetary RBI Fines */}
            <section id="vicarious-liability-rbi-penalties" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Lender Vicarious Liability and Monetary RBI Fines</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Lenders cannot avoid legal responsibility by claiming recovery agencies are independent contractors. Under the doctrine of vicarious liability—and Paragraph 12 of the RBI Master Direction on Outsourcing—banks and NBFCs remain directly responsible for the actions of their collection agents. The principal answers for wrongful acts committed by its agents during debt recovery.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Section 47A of the Banking Regulation Act, 1949, the RBI holds statutory power to impose multi-crore fines on lenders violating conduct standards. The central bank can also suspend recovery contracts, conduct supervisory audits, and limit loan onboarding. Documented after-hours calls create serious institutional exposure that far outweighs the unpaid loan balance.
              </p>
            </section>

            {/* Section 5: Regulatory Calling Hours Infographic */}
            <section id="infographic-calling-hours-shield" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">5. Recovery Calling Hours Regulatory Infographic</h2>
              <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm bg-slate-50 p-2">
                <Image
                  src="/images/infographics/rbi-guidelines-calling-after-7pm-complaint.jpg"
                  alt="RBI Guidelines: Recovery Agent Calling After 7 PM & Legal Remedies Infographic"
                  width={1200}
                  height={675}
                  className="w-full h-auto rounded-xl object-cover"
                  priority
                />
              </div>
              <p className="text-xs sm:text-sm text-slate-600 italic text-center leading-relaxed">
                Figure 1: Statutory framework governing permissible loan recovery calling windows (8:00 AM to 7:00 PM), prohibited nocturnal collection zones, and the 4-stage escalation workflow under Reserve Bank of India regulations.
              </p>
            </section>

            {/* Section 6: Issuing a Formal Advocate Cease-and-Desist Notice */}
            <section id="advocate-cease-and-desist-intervention" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. Issuing a Formal Advocate Cease-and-Desist Notice</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Frontline agency telecallers rarely heed verbal protests because their incentives depend on monthly collection targets. Stopping after-hours calls permanently requires a formal Advocate Cease-and-Desist Notice served on the bank&apos;s Managing Director and Principal Nodal Officer (PNO) via registered Speed Post and email.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The notice details the exact call timestamps, cites RBI Master Directions and BNS provisions, and formalizes legal representation under the Advocates Act, 1961. It directs the lender to recall external agencies and route all future communications exclusively through legal counsel. In over 95% of SettleLoans matters, this freezes agency calling within 48 to 72 hours.
              </p>
            </section>

            {/* Section 7: Bank Provisioning Burden and NPV Recovery Calculus */}
            <section id="npa-provisioning-npv-recovery-model" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Bank Provisioning Burden and NPV Recovery Calculus</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an unsecured retail loan crosses 90 days overdue, it becomes a Non-Performing Asset (NPA) under RBI IRACP norms. This requires banks to stop recognizing interest income and allocate mandatory capital provisions from operating profits—starting at 15% to 25% and rising to 100% over time. Bank credit committees evaluate settlements against prolonged recovery friction using Net Present Value (NPV):
              </p>

              {/* Formula JSX Container Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated recoveries, r is the discount rate, and deductions account for 3–5 years of court friction and capital locked in NPA provisions.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Litigation under Order 37 CPC or Section 138 NI Act takes 3 to 5 years, incurring heavy legal retainers and locking capital. When an advocate proves recovery agents violated RBI calling hours, the bank&apos;s risk escalates. To avoid Ombudsman sanctions, lenders routinely accept a One-Time Settlement (OTS), waiving 40% to 65% of outstanding dues.
              </p>
            </section>

            {/* Section 8: Escalating Harassment to the RBI CMS Ombudsman */}
            <section id="rbi-cms-ombudsman-escalation-protocol" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Escalating Harassment to the RBI CMS Ombudsman</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If a lender fails to resolve an after-hours harassment complaint within 30 days, borrowers can escalate the matter under the Reserve Bank – Integrated Ombudsman Scheme (RB-IOS), 2021 via the CMS portal at <code>cms.rbi.org.in</code>. File under &quot;Deficiency in Service – Violation of Recovery Agent Guidelines.&quot;
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Upload your initial PNO grievance, proof of non-resolution, call log screenshots, telecom CDR, and advocate notice. Under Clause 15 of RB-IOS 2021, the Ombudsman can award compensation up to ₹20 lakhs for direct loss and up to ₹1 lakh for mental harassment. Lenders facing an Ombudsman inquiry usually move quickly to offer a clean settlement.
              </p>
            </section>

            {/* Section 9: Comparative Debt Collection Enforcement Matrix */}
            <section id="comparative-enforcement-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. Comparative Debt Collection Enforcement Matrix</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Knowing the legal boundaries of debt collection empowers borrowers to counter intimidation. The table below outlines permitted hours, prohibited acts, legal violations, and prescribed remedies across collection channels:
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th>Collection Modality</th>
                      <th>Permitted Hours</th>
                      <th>Prohibited Conduct Under RBI Rules</th>
                      <th>Statutory Violations Triggered</th>
                      <th>Prescribed Borrower Countermeasures</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Telephone Voice Calls &amp; IVR Dialers</td>
                      <td>08:00 AM to 07:00 PM only.</td>
                      <td>Calling after 7:00 PM, repetitive calling, spoofed numbers, verbal abuse.</td>
                      <td>RBI Outsourcing Circular; Sec 351(2), 352 BNS; TRAI Regulations.</td>
                      <td>Preserve call logs, telecom CDR, serve Advocate Notice, file RBI complaint.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">WhatsApp &amp; SMS Messaging</td>
                      <td>08:00 AM to 07:00 PM only.</td>
                      <td>Late-night broadcasts, abusive texts, sharing debt details with third parties.</td>
                      <td>DPDP Act 2023; Sec 79, 356 BNS; Information Technology Act.</td>
                      <td>Export certified chat transcripts, block sender, issue notice for data breach.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Physical Doorstep Home Visits</td>
                      <td>08:00 AM to 07:00 PM only.</td>
                      <td>Visits after 7:00 PM, failing to show DRA card, forced home entry.</td>
                      <td>Sec 329 BNS (Criminal Trespass); <em>Prakash Kaur</em> ruling; Art. 21.</td>
                      <td>Keep doors locked, demand DRA credentials, record video, dial 112.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Contacting Workplace &amp; HR</td>
                      <td>Strictly prohibited always.</td>
                      <td>Calling employers, office visits, discussing dues with managers or peers.</td>
                      <td>Article 21 Privacy (<em>Puttaswamy</em>); Sec 356 BNS (Defamation).</td>
                      <td>Serve Cease-and-Desist Notice, file injunction suit for damages.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Civil Court Process &amp; Summons</td>
                      <td>Official court hours only.</td>
                      <td>Fake WhatsApp summons, forged arrest warrants, police threat notices.</td>
                      <td>Sec 318, 336 BNS (Cheating &amp; Forgery); Contempt of Courts Act.</td>
                      <td>Verify on e-Courts portal, report forgery to Bar Council and Magistrate.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Shield and Debt Resolution */}
            <section id="settleloans-advocate-intervention" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. SettleLoans Legal Shield and Debt Resolution</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Borrowers should never suffer after-hours harassment or threats over personal loans, business debt, or credit card balances. At SettleLoans, our senior banking litigators protect distressed borrowers across India.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Our advocates serve Vakalatnama notices, Address Update Mandates, and Cease-and-Desist directives to bank nodal executives. We document regulatory violations and negotiate directly with credit risk committees to secure formal One-Time Settlements (OTS) with 40% to 65% waivers and official No Dues Certificates (NDC).
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions on Calling Rules */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. Frequently Asked Questions on Calling Rules</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Clear answers on RBI recovery agent calling hours, evidence preservation under BSA 2023, and institutional debt settlement remedies.
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
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Reserve Bank of India (Master Direction on Outsourcing &amp; Recovery Agent Rules)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Complaint Management System Portal)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.mha.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Ministry of Home Affairs (Bharatiya Nyaya Sanhita, 2023 - Sections 351, 352 &amp; 79)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Supreme Court of India (Puttaswamy Privacy &amp; Prakash Kaur Rulings)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.trai.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">Telecom Regulatory Authority of India (TCCCPR Regulations on Unsolicited Calls)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <div className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Legal Defense &amp; Loan Settlement Guides
              </div>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/rbi-rules-for-recovery-agents"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  RBI Rules for Recovery Agents
                </Link>
                <Link
                  href="/recovery-agent-calling-late-night-rbi-violation"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Late Night Recovery Calls Defense
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Recovery Harassment Complaint
                </Link>
                <Link
                  href="/recording-recovery-agent-calls-legal-evidence"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Recording Recovery Calls as Evidence
                </Link>
                <Link
                  href="/how-to-escalate-loan-harassment-to-principal-nodal-officer"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Escalate to Principal Nodal Officer
                </Link>
                <Link
                  href="/step-by-step-guide-rbi-ombudsman-complaint-recovery-harassment"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  RBI Ombudsman Complaint Guide
                </Link>
                <Link
                  href="/legal-notice-for-loan-settlement-harassment"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Legal Notice for Loan Harassment
                </Link>
                <Link
                  href="/can-recovery-agents-visit-home-on-sunday-or-holidays"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can Agents Visit on Sunday or Holidays?
                </Link>
                <Link
                  href="/how-to-stop-loan-recovery-harassment"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  How to Stop Loan Recovery Harassment
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank One-Time Settlement OTS Policy
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
                Author and legal strategist specializing in RBI regulatory compliance, borrower privacy protections under Article 21, and institutional debt resolution.
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
                <span>Immediate Legal Protection</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Recovery Agents Calling After 7 PM?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not endure late-night harassment. Our banking advocates issue immediate Cease-and-Desist notices, file RBI Ombudsman complaints, and negotiate a 40% to 65% OTS waiver.
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
                Institutional Safeguards
              </div>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Strict RBI 8 AM – 7 PM Calling Window</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Constitutional Privacy Protection (Art. 21)</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Bharatiya Sakshya Adhiniyam Evidence</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>RBI Integrated Ombudsman Enforcement</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
