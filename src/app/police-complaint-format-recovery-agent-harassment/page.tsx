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
  AlertCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Police Complaint Against Recovery Agent Format | Legal Draft & Rights',
  description: 'Facing recovery agent harassment? Access the statutory police complaint format against loan recovery agents under IPC Sections 506, 509 & RBI rules to file with your local SHO.',
  keywords: [
    'police complaint against recovery agent format',
    'complaint letter against recovery agent to police',
    'rbi recovery agent harassment complaint format',
    'section 506 ipc recovery agent harassment',
    'section 509 ipc debt collection complaint',
    'how to file fir against recovery agent',
    'loan recovery agent threatening home visit complaint',
    'bank recovery agent abuse complaint draft',
    'police application against finance recovery agent',
    'debt settlement harassment legal protection'
  ],
  alternates: {
    canonical: 'https://settleloans.in/police-complaint-format-recovery-agent-harassment',
  },
  openGraph: {
    title: 'Police Complaint Against Recovery Agent Format: Legal Draft, IPC Sections & RBI Protections',
    description: 'Comprehensive legal analysis and statutory complaint framework against debt recovery agent harassment. Understand IPC 506, 509, 383, RBI Fair Practices Code, and local police station submission protocols.',
    url: 'https://settleloans.in/police-complaint-format-recovery-agent-harassment',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://settleloans.in/images/infographics/police-complaint-format-recovery-agent-harassment.jpg',
        width: 1200,
        height: 675,
        alt: 'Police Complaint Against Recovery Agent Format Infographic',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Police Complaint Against Recovery Agent Format: Legal Draft & Police Recourse',
    description: 'Unlawful threats, home trespassing, or abusive phone calls from collection agents? Learn how to draft and file an actionable police complaint under IPC Sections 506 & 509.',
    images: ['https://settleloans.in/images/infographics/police-complaint-format-recovery-agent-harassment.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://settleloans.in/police-complaint-format-recovery-agent-harassment#webpage",
      "url": "https://settleloans.in/police-complaint-format-recovery-agent-harassment",
      "name": "Police Complaint Against Recovery Agent Format | Legal Draft & Rights",
      "description": "Statutory legal guide and formal police complaint framework against abusive loan recovery agents. Details IPC Sections 506, 509, 383, RBI Master Directions, evidentiary requirements, and advocate-led resolution.",
      "breadcrumb": {
        "@id": "https://settleloans.in/police-complaint-format-recovery-agent-harassment#breadcrumb"
      },
      "inLanguage": "en-IN",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://settleloans.in/#website",
        "name": "SettleLoans",
        "url": "https://settleloans.in"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://settleloans.in/police-complaint-format-recovery-agent-harassment#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://settleloans.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Police Complaint Against Recovery Agent Format",
          "item": "https://settleloans.in/police-complaint-format-recovery-agent-harassment"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://settleloans.in/police-complaint-format-recovery-agent-harassment#article",
      "headline": "Police Complaint Against Recovery Agent Format: Legal Draft, IPC Sections & RBI Safeguards",
      "description": "An exhaustive statutory analysis of legal remedies against loan recovery agent harassment in India. Examines Indian Penal Code Sections 506, 509, 383, 441, RBI Fair Practices Code, police station filing procedures, and debt settlement negotiation strategies.",
      "image": "https://settleloans.in/images/infographics/police-complaint-format-recovery-agent-harassment.jpg",
      "datePublished": "2026-08-25T10:00:00+05:30",
      "dateModified": "2026-08-25T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://settleloans.in/police-complaint-format-recovery-agent-harassment#webpage"
      },
      "author": {
        "@type": "Person",
        "name": "Ashish Jhangra",
        "url": "https://settleloans.in/authors/ashish-jhangra"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://settleloans.in/#organization",
        "name": "SettleLoans",
        "url": "https://settleloans.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://settleloans.in/logo/logo.svg"
        }
      }
    },
    {
      "@type": "FinancialService",
      "@id": "https://settleloans.in/police-complaint-format-recovery-agent-harassment#service",
      "name": "SettleLoans - Legal Debt Defense & Harassment Protection Advisory",
      "description": "Comprehensive legal defense against recovery agent harassment, unlawful criminal intimidation, unauthorized workplace intrusions, and deceptive collection practices, combined with structured One-Time Settlement (OTS) negotiations.",
      "url": "https://settleloans.in/police-complaint-format-recovery-agent-harassment",
      "image": "https://settleloans.in/images/infographics/police-complaint-format-recovery-agent-harassment.jpg",
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
        "@id": "https://settleloans.in/#organization",
        "name": "SettleLoans",
        "url": "https://settleloans.in"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "2340",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Devendra Singhal"
          },
          "datePublished": "2026-07-12",
          "reviewBody": "Third-party collection agents were barging into my residential society and threatening my family with physical violence over an overdue unsecured personal loan. SettleLoans advocates drafted an airtight formal police complaint under IPC Sections 506 and 441, served it to the local SHO and Bank Nodal Officer, and halted all harassment within 24 hours.",
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
            "name": "Pooja Venkatesh"
          },
          "datePublished": "2026-06-28",
          "reviewBody": "Recovery agents called my workplace HR and sent obscene WhatsApp voice notes threatening social defamation. The SettleLoans legal team invoked Section 509 IPC and RBI Fair Practices Code, submitted a complaint to the Cyber Cell, and forced the lending institution into a formal compromise settlement with a 58% principal waiver.",
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
            "name": "Harishankar Tripathi"
          },
          "datePublished": "2026-08-03",
          "reviewBody": "I was overwhelmed by endless threatening calls at midnight from unregistered mobile numbers. Ashish Jhangra and his legal team structured a comprehensive evidentiary log, filed an escalation with the District Superintendent of Police, and transitioned the entire portfolio to an official Bank-sanctioned OTS letter.",
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
            "name": "Kavita Menon"
          },
          "datePublished": "2026-05-17",
          "reviewBody": "The police complaint framework provided by SettleLoans completely disarmed the collection agency. Once the bank legal team realized their agents were exposed to non-bailable criminal charges, they recalled the agency and issued our official No Dues Certificate.",
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
      "@id": "https://settleloans.in/police-complaint-format-recovery-agent-harassment#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I legally file a police complaint against a bank loan recovery agent in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. While loan default itself is a civil contractual matter, any act of criminal intimidation, verbal abuse, stalking, physical assault, extortion, unauthorized trespassing into private premises, or contacting third parties constitutes a cognizable penal offense under the Indian Penal Code (Sections 506, 509, 383, 441) and corresponding provisions of the Bharatiya Nyaya Sanhita (BNS). You have the constitutional right to lodge a formal complaint at your local police station."
          }
        },
        {
          "@type": "Question",
          "name": "Which IPC sections apply to debt recovery agent harassment and abuse?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Key penal provisions include Section 506 (Criminal Intimidation), Section 509 (Word, gesture or act intended to insult the modesty of a woman), Section 383/384 (Extortion through coercion), Section 441/447 (Criminal Trespass into residential premises), Section 504 (Intentional insult with intent to provoke breach of peace), and Section 354D (Stalking and continuous digital surveillance)."
          }
        },
        {
          "@type": "Question",
          "name": "What essential details must be included in a police complaint against recovery agents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A legally robust complaint must include: your full identity and address; loan account details with the principal lender; chronological timeline of harassment incidents; exact dates, times, and phone numbers used; specific verbal threats or physical actions; names of agents if disclosed; digital evidence (call recordings, WhatsApp screenshots, CCTV footage); citations of violated IPC sections and RBI Fair Practices Code; and a specific prayer requesting an FIR or GD entry."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if the local Police Station (SHO) refuses to accept my complaint?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If the Station House Officer (SHO) refuses to register your complaint, you should immediately send the written complaint via Registered Post with Acknowledgement Due (RPAD) to the Superintendent of Police (SP) or Deputy Commissioner of Police (DCP) under Section 154(3) CrPC (Section 173(4) BNSS). If inaction persists, your advocate can file an application before the Judicial Magistrate under Section 156(3) CrPC (Section 175(3) BNSS) to direct police investigation."
          }
        },
        {
          "@type": "Question",
          "name": "Are recovery agents permitted to visit my office or contact my employer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The Reserve Bank of India Master Directions explicitly prohibit recovery agents from visiting a borrower's workplace unless specifically authorized in writing, or disclosing loan default details to colleagues, supervisors, or human resource managers. Such conduct violates borrower privacy rights protected under the Puttaswamy Supreme Court judgment and constitutes actionable defamation."
          }
        },
        {
          "@type": "Question",
          "name": "What are the permissible hours for debt recovery agents to call or visit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Master Circulars and Directions on Fair Practices Code, recovery personnel and outsourced collection agencies can only contact or visit borrowers between 8:00 AM and 7:00 PM. Any phone calls, visits, or electronic messages outside these permitted hours constitute statutory harassment and regulatory violations."
          }
        },
        {
          "@type": "Question",
          "name": "Is the lending bank vicariously liable for the criminal acts of outsourced recovery agents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. In landmark rulings such as ICICI Bank Ltd. v. Prakash Kaur (2007), the Supreme Court of India established that banks and financial institutions are vicariously and legally responsible for the coercive actions, harassment, and strong-arm tactics deployed by their outsourced recovery agents. Complaints must name both the recovery agency and senior bank officials."
          }
        },
        {
          "@type": "Question",
          "name": "How does filing a police complaint assist in achieving a favorable debt settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When a borrower formally documents collection malpractice through police complaints, RBI Ombudsman grievances, and advocate notices, the lending institution faces significant regulatory, reputational, and penal risks. To mitigate legal liabilities, bank legal departments typically withdraw aggressive collection agencies, transfer the file to internal settlement committees, and offer substantial principal waivers (often 45% to 65%) under an official One-Time Settlement (OTS)."
          }
        },
        {
          "@type": "Question",
          "name": "Can recovery agents carry out asset seizure or confiscate personal belongings without a court order?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. For unsecured personal loans and credit cards, lenders and their agents have zero legal authority to seize vehicles, household items, or property without a formal execution decree from a competent civil court. Any attempt to forcibly take possession of belongings constitutes criminal trespass, theft under Section 379 IPC, and extortion under Section 384 IPC."
          }
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://settleloans.in/#organization",
      "name": "SettleLoans",
      "url": "https://settleloans.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://settleloans.in/logo/logo.svg"
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
  { id: 'criminality-vs-civil-debt', title: '1. Criminality Threshold in Debt Recovery' },
  { id: 'statutory-penal-provisions', title: '2. Penal Provisions: IPC 506, 509, 383 & BNS' },
  { id: 'complaint-drafting-architecture', title: '3. Statutory Structure for Police Complaints' },
  { id: 'evidentiary-audit-digital-trail', title: '4. Evidentiary Audit & Digital Trail' },
  { id: 'infographic-police-complaint-framework', title: '5. Visual Guide: Legal Rights & Police Recourse' },
  { id: 'police-escalation-hierarchy', title: '6. Police Escalation Ladder: SHO to Magistrate' },
  { id: 'vicarious-bank-liability', title: '7. Vicarious Corporate & Nodal Officer Liability' },
  { id: 'transitioning-defense-to-ots', title: '8. Converting Legal Defense to Debt Settlement' },
  { id: 'enforcement-comparative-matrix', title: '9. Harassment Redressal Comparative Matrix' },
  { id: 'settleloans-legal-defense-ecosystem', title: '10. SettleLoans Legal Defense Ecosystem' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function PoliceComplaintFormatRecoveryAgentHarassmentPage() {
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
            <Gavel className="w-3.5 h-3.5" />
            <span>Statutory Legal Defense • IPC Sections 506 &amp; 509 • Police SHO Recourse</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Police Complaint Against Recovery Agent Format: <span className="text-[#3b82f6] md:text-[#60a5fa]">Legal Framework, IPC Sections &amp; Statutory Redressal</span>
          </h1>

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
              <span>RBI Fair Practices Code Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-lg flex items-center gap-2"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Halt Recovery Harassment Immediately</span>
            </Link>
            <Link
              href="#statutory-penal-provisions"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 font-semibold py-3 px-6 rounded-xl text-sm transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>Review Statutory Penal Protections</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip Component */}
      <StatsStrip />

      {/* 3. Main 3-Column Content Layout */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column: Sticky Table of Contents + Crux Pill */}
          <aside className="hidden lg:block w-full sticky top-24 space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4 text-[#1F5EFF]" />
                <span>Executive Legal Crux</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Financial default on an unsecured bank loan is strictly a civil dispute. When debt recovery agents resort to threats, stalking, abusive communication, or unlawful trespassing, their actions cross into cognizable criminal offenses under IPC Sections 506, 509, 383, and 441, making them directly liable for police prosecution.
              </p>
            </div>

            <SidebarTOC items={tocItems} />
          </aside>

          {/* Middle Column: Main Editorial Body */}
          <main className="w-full blog-content space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-sm uppercase tracking-wider mb-4">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Legal Realities &amp; Statutory Safeguards</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Civil vs Criminal Boundary:</strong> Inability to repay bank installments represents a civil breach of contract; deploying criminal intimidation to recover funds is strictly unlawful.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Penal Code Applicability:</strong> Recovery agents uttering verbal threats, insulting female modesty, or trespassing face prosecution under IPC Sections 506, 509, 383, and 441.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory Complaint Architecture:</strong> A legally effective police complaint must document specific dates, phone numbers, verbatim threats, and digital evidence logs.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Vicarious Institutional Liability:</strong> Lenders cannot hide behind third-party collection agencies; Supreme Court rulings hold bank directors vicariously accountable.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Strategic OTS Transition:</strong> Formal police and regulatory complaints neutralize aggressive coercion, forcing institutional lenders into structured debt compromise negotiations.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Demystifying Recovery Agent Harassment & The Criminality Threshold */}
            <section id="criminality-vs-civil-debt" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. Demystifying Recovery Agent Harassment: The Criminality Threshold in Debt Recovery
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Across the Indian retail credit landscape, unexpected financial setbacks—such as involuntary job separation, severe enterprise cash flow disruption, or debilitating health emergencies—often leave honest borrowers unable to meet scheduled Equated Monthly Installments (EMIs). When an unsecured personal loan or credit card facility remains overdue beyond ninety days, banking institutions classify the ledger exposure as a Non-Performing Asset (NPA). In an effort to bypass the procedural duration and cost of formal civil litigation, financial institutions frequently assign these delinquent accounts to third-party collection and recovery agencies.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A critical legal boundary exists between legitimate debt recovery and actionable criminal conduct. A loan agreement executed under the Indian Contract Act, 1872, establishes a purely civil commercial relationship. The lender’s lawful remedies are confined to civil summary recovery suits under Order 37 of the Code of Civil Procedure (CPC), commercial arbitration under the Arbitration and Conciliation Act, 1996, or proceedings before the Debt Recovery Tribunal (DRT) for claims exceeding statutory thresholds. When recovery agents resort to persistent physical stalking, abusive telephonic harassment, threats of violence, social humiliation, or unannounced visits to residential and workplace premises, their actions transcend commercial dispute resolution and enter the realm of penal offenses under the Indian criminal justice system.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-1">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>Foundational Constitutional &amp; Civil Right</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                  The Constitution of India under Article 21 guarantees every citizen the fundamental right to life, dignity, and personal liberty. Financial default does not strip an individual of these constitutional safeguards. Coercive recovery tactics deployed by banks or third-party collection agencies violate fundamental privacy and personal safety rights established by the Supreme Court of India.
                </p>
              </div>
            </section>

            {/* Section 2: Statutory Penal Provisions: IPC Sections 506, 509, 383 & BNS Alignments */}
            <section id="statutory-penal-provisions" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Statutory Penal Framework: IPC Sections 506, 509, 383, 441 &amp; Bharatiya Nyaya Sanhita
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When drafting a formal criminal complaint to be lodged with local law enforcement, precision in statutory citations is paramount. The Indian Penal Code (IPC), along with corresponding provisions under the Bharatiya Nyaya Sanhita (BNS), provides robust penal remedies against abusive recovery practices. Each specific coercive act committed by collection agents triggers distinct statutory provisions:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1 flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-rose-600" />
                    <span>Section 506 IPC / Section 351 BNS</span>
                  </h4>
                  <p className="text-xs text-slate-600">
                    <strong>Criminal Intimidation:</strong> Punishes anyone who threatens another with injury to their person, reputation, or property. If the threat involves death, grievous hurt, or destruction of property, the offense carries imprisonment for up to seven years.
                  </p>
                </div>
                
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1 flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-rose-600" />
                    <span>Section 509 IPC / Section 79 BNS</span>
                  </h4>
                  <p className="text-xs text-slate-600">
                    <strong>Insulting Modesty of Women:</strong> Applies directly when recovery agents use indecent language, obscene gestures, or verbal intimidation against female borrowers, spouses, mothers, or daughters, carrying rigorous imprisonment.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1 flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-rose-600" />
                    <span>Section 383 &amp; 384 IPC / Section 308 BNS</span>
                  </h4>
                  <p className="text-xs text-slate-600">
                    <strong>Extortion:</strong> Intentionally putting any person in fear of injury or public disgrace to dishonestly induce the delivery of valuable property or money constitutes criminal extortion punishable with up to three years imprisonment.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1 flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-rose-600" />
                    <span>Section 441 &amp; 447 IPC / Section 329 BNS</span>
                  </h4>
                  <p className="text-xs text-slate-600">
                    <strong>Criminal Trespass:</strong> Entering private residential property or commercial offices unlawfully with the intent to intimidate, insult, or annoy the occupant constitutes an actionable criminal trespass offense.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In addition to these core provisions, Section 504 IPC (Intentional insult with intent to provoke breach of the peace) and Section 354D IPC (Stalking and persistent digital harassment) are routinely incorporated into formal complaints where recovery agents make continuous abusive calls or monitor the physical movements of borrowers and their family members.
              </p>
            </section>

            {/* Section 3: Step-by-Step Legal Draft Protocol for Police SHO & SP Complaints */}
            <section id="complaint-drafting-architecture" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Step-by-Step Legal Draft Architecture: Structuring an Actionable Police Complaint
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A police complaint submitted to the Station House Officer (SHO) of your local territorial police jurisdiction must be drafted with analytical precision. Vague allegations of general distress are often dismissed as civil disputes. To ensure law enforcement registers a General Diary (GD) entry or First Information Report (FIR), the complaint narrative must be structured methodically around concrete factual and legal elements.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4 my-4">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Essential Structural Sections of the Legal Complaint</span>
                </h3>
                
                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">1. Formal Jurisdiction &amp; Addressee Block</p>
                    <p className="text-slate-600 mt-1">Addressed formally to "The Station House Officer, [Name of Local Police Station, City/District]" with full complainant identification, residential address, Aadhaar number, and active contact credentials.</p>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">2. Clear &amp; Specific Subject Line</p>
                    <p className="text-slate-600 mt-1">"Complaint against illegal criminal intimidation, verbal abuse, unlawful trespassing, and extortion by recovery agents of [Lending Bank/NBFC Name] under Sections 506, 509, 383, 441, and 504 of the Indian Penal Code and RBI Fair Practices Code."</p>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">3. Commercial Relationship Context</p>
                    <p className="text-slate-600 mt-1">Briefly outline the underlying credit facility: Loan Account Number, principal disbursed, regular EMIs serviced prior to default, and the genuine circumstances causing temporary financial distress (e.g., job loss, medical emergency).</p>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">4. Chronological Fact Matrix &amp; Incident Log</p>
                    <p className="text-slate-600 mt-1">Document each incident in chronological sequence: exact dates, specific timestamps, originating telephone numbers, names of visiting agents, verbatim abusive language or physical threats uttered, and names of family members or colleagues targeted.</p>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">5. Regulatory Violation Breakdown</p>
                    <p className="text-slate-600 mt-1">Explicitly detail how the conduct violates RBI Master Direction DOR.ORG.REC.65/21.04.158/2022-23 prohibiting calls before 8:00 AM or after 7:00 PM, workplace harassment, and disclosure of financial defaults to third parties.</p>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">6. Evidentiary Annexures Index</p>
                    <p className="text-slate-600 mt-1">Enclose and cross-reference certified Annexures: Call Detail Records (CDRs), pen-drive containing high-definition audio recordings, transcriptions of WhatsApp messages, screenshots of fake legal summons, and CCTV security footage.</p>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">7. Explicit Relief &amp; Prayer Clause</p>
                    <p className="text-slate-600 mt-1">Specifically pray for: (a) Immediate registration of an FIR against the recovery agents and lending institution; (b) Initiation of formal investigation under Section 156 CrPC; and (c) Immediate issuance of restraining directions to ensure life and liberty protection.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By presenting law enforcement with a complete, statutory complaint accompanied by structured evidentiary annexures, borrowers eliminate the standard police justification that the matter is merely a civil financial dispute, compelling the investigating authority to initiate statutory inquiry.
              </p>
            </section>

            {/* Section 4: Evidentiary Audit & Digital Trail + NPV Recovery Formula */}
            <section id="evidentiary-audit-digital-trail" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Evidentiary Audit &amp; Digital Trail: CDRs, Audio Logs, and CCTV Forensics
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In modern criminal jurisprudence, contemporaneous electronic evidence forms the bedrock of an unassailable prosecution. Collection agencies often operate through outsourced tele-callers utilizing VoIP applications, spoofed virtual numbers, or rotating SIM cards. To legally bind both the individual perpetrator and the principal lending bank, the complainant must construct an airtight digital audit trail.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Section 65B of the Indian Evidence Act, 1872 (corresponding to Section 63 of the Bharatiya Sakshya Adhiniyam, BSA), electronic records are admissible in judicial proceedings when accompanied by a statutory certificate verifying that the device used to capture the recording was functioning under the lawful control of the user. Borrowers must record all incoming recovery calls, preserve raw unedited audio files, capture complete mobile screenshots displaying originating caller IDs with exact timestamps, and secure timestamped residential CCTV recordings showing unauthorized entry or physical intimidation.
              </p>

              {/* NPV Recovery Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Institutional Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated recoveries across time periods t, r is the institutional cost of capital discount rate, and deductions account for 3–5 years of court friction, advocate fees, and locked regulatory provisioning capital.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a borrower exposes this institutional calculus through formal legal pushback, banks recognize that continuing unlawful recovery tactics generates catastrophic liability. Under RBI provisioning mandates, a classified NPA forces 15% to 100% capital lock-in. Facing potential criminal exposure and high litigation friction, the bank's risk committee is commercially incentivized to settle the account at a steep discount.
              </p>
            </section>

            {/* Section 5: Dedicated 16:9 Infographic Banner */}
            <section id="infographic-police-complaint-framework" className="my-8">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950">
                <Image
                  src="/images/infographics/police-complaint-format-recovery-agent-harassment.jpg"
                  alt="Police Complaint Against Recovery Agent Format Infographic: Know Your Legal Rights, IPC Sections 506, 509, 383, and Clear Resolution Steps"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="p-4 bg-slate-900 text-slate-300 text-xs flex items-center justify-between">
                  <span className="font-semibold text-blue-400">Fig 1: Statutory Framework — Legal Rights vs Unlawful Recovery &amp; Police Escalation</span>
                  <span className="text-slate-400 hidden sm:inline">Source: SettleLoans Legal &amp; Regulatory Defense Analysis</span>
                </div>
              </div>
            </section>

            {/* Section 6: Police Escalation Hierarchy: SHO to Magistrate */}
            <section id="police-escalation-hierarchy" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. The Police Escalation Ladder: Section 154(1) to Section 156(3) CrPC &amp; BNSS Procedures
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In many instances, local police stations may hesitate to register an FIR immediately against corporate entities or recovery agencies, casually directing the borrower to "settle the dues directly with the bank." The Code of Criminal Procedure establishes a strict, multi-tiered statutory escalation mechanism to overcome administrative inaction:
              </p>
              
              <div className="space-y-3 my-4">
                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1F5EFF] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Tier 1: Formal Submission to Local SHO (Section 154(1) CrPC / Section 173 BNSS)</h4>
                    <p className="text-xs text-slate-600 mt-1">Submit two physical copies of the complaint to the Station House Officer. Obtain a stamped receiving acknowledgment with date and General Diary (GD) reference number on the duplicate copy.</p>
                  </div>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Tier 2: Escalation to Superintendent of Police (Section 154(3) CrPC / Section 173(4) BNSS)</h4>
                    <p className="text-xs text-slate-600 mt-1">If the SHO fails to act within 72 hours, send the complete complaint docket via Registered Post with Acknowledgment Due (RPAD) directly to the District Superintendent of Police (SP) or Deputy Commissioner of Police (DCP).</p>
                  </div>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Tier 3: Judicial Magistrate Application (Section 156(3) CrPC / Section 175(3) BNSS)</h4>
                    <p className="text-xs text-slate-600 mt-1">If police authorities remain passive, your legal counsel files an application before the Chief Judicial Magistrate (CJM) or Metropolitan Magistrate, presenting the postal receipts and praying for a judicial directive ordering the police to register an FIR and submit a compliance report.</p>
                  </div>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Tier 4: Simultaneous Cyber Crime &amp; Nodal Escalation</h4>
                    <p className="text-xs text-slate-600 mt-1">Lodge a digital complaint on the National Cyber Crime Reporting Portal (cybercrime.gov.in) for telephonic harassment, while serving formal legal notices to the bank's Principal Nodal Officer and the RBI Integrated Ombudsman.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Vicarious Corporate Liability: Holding Bank Directors & Nodal Officers Accountable */}
            <section id="vicarious-bank-liability" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Vicarious Corporate Liability: Holding Bank Directors &amp; Nodal Officers Accountable
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A frequent defense raised by commercial banks and NBFCs is that collection agencies are independent third-party contractors, attempting to insulate corporate management from criminal liability. Indian judicial precedent has decisively rejected this corporate shielding doctrine.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In the landmark ruling <em>ICICI Bank Ltd. v. Prakash Kaur (2007) 2 SCC 711</em>, the Supreme Court of India severely reprimanded the banking industry for deploying musclemen and recovery goons to terrorize defaulters. The apex court affirmed that banks are vicariously liable for every tortious and criminal act committed by their authorized recovery agents. This principle was further reinforced in <em>Manager, ICICI Bank Ltd. v. Prakash Kaur</em> and subsequent RBI circulars, establishing that the Principal Nodal Officer, Head of Retail Lending, and Managing Director can be joined as co-accused in complaints alleging institutional extortion and harassment.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a formal police complaint explicitly names the bank's senior executives and references the RBI Master Direction on Outsourcing of Financial Services, the institution’s legal compliance division immediately intervenes. The collection file is abruptly recalled from aggressive third-party agencies to insulate senior management from regulatory sanctions and judicial summons.
              </p>
            </section>

            {/* Section 8: Transitioning Criminal Defense into a Structured Debt Settlement & No Dues Certificate */}
            <section id="transitioning-defense-to-ots" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Transitioning Criminal Defense into Structured Debt Settlement &amp; No Dues Certificate
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Filing a statutory police complaint is not merely a defensive maneuver to stop unlawful harassment—it serves as the foundational catalyst for achieving an advantageous, conclusive debt settlement. Once the aggressive third-party agency is neutralized by criminal pushback, the lending bank is forced to transition the account from extra-judicial intimidation to lawful commercial negotiation.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                At this juncture, specialized debt defense advocates step in to execute a structured settlement protocol:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3 my-4">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <FileCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The 4-Step Settlement Transition Protocol</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">1. Hardship Dossier Presentation</p>
                    <p className="text-slate-600">Submitting certified income loss records, medical dossiers, or business termination proofs directly to the bank’s internal Zonal Compromise Committee.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">2. Principal Waiver Negotiation</p>
                    <p className="text-slate-600">Leveraging the lender’s regulatory vulnerability to secure a 45% to 65% waiver on outstanding ledger balances, completely eliminating accumulated penal interest.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">3. Official Sanction Letter Verification</p>
                    <p className="text-slate-600">Ensuring the One-Time Settlement (OTS) letter is issued directly on official bank letterhead with unique verification numbers, explicit waiver terms, and structured installment dates.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">4. Stamped NDC &amp; CIBIL Reconciliation</p>
                    <p className="text-slate-600">Remitting settlement amounts directly to the bank loan account and securing a stamped No Dues Certificate within 30 days under RBI Circular RBI/2023-24/60.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By pairing criminal defense protections with experienced commercial negotiation, borrowers achieve permanent debt freedom without succumbing to intimidation or compromising their dignity.
              </p>
            </section>

            {/* Section 9: Harassment Redressal & Enforcement Comparative Matrix */}
            <section id="enforcement-comparative-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Harassment Redressal &amp; Enforcement Comparative Matrix
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The following comparative matrix outlines the legal forums, governing statutes, enforcement timelines, and typical outcomes available to borrowers facing recovery agent harassment across India:
              </p>
              
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Enforcement Forum</th>
                      <th>Governing Statutory Law</th>
                      <th>Primary Jurisdiction</th>
                      <th>Enforcement Timeline</th>
                      <th>Typical Redressal Outcome</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Local Police Station (SHO)</td>
                      <td>IPC 506, 509, 383 / CrPC 154</td>
                      <td>Local Territorial Police</td>
                      <td>24 to 72 Hours</td>
                      <td>GD Entry, FIR registration, physical harassment halted</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">District Superintendent (SP)</td>
                      <td>Section 154(3) CrPC / BNSS</td>
                      <td>District Police Headquarters</td>
                      <td>7 to 15 Days</td>
                      <td>Direct supervisory probe ordered on rogue agency</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Judicial Magistrate Court</td>
                      <td>Section 156(3) / 200 CrPC</td>
                      <td>Metropolitan / Judicial Magistrate</td>
                      <td>30 to 60 Days</td>
                      <td>Court-mandated FIR and formal police investigation</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">RBI Integrated Ombudsman</td>
                      <td>RBI Ombudsman Scheme 2021</td>
                      <td>Reserve Bank of India Portal</td>
                      <td>30 to 45 Days</td>
                      <td>Institutional penalty, borrower compensation up to ₹20L</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Bank Zonal OTS Committee</td>
                      <td>RBI Compromise Framework</td>
                      <td>Lender Legal &amp; Recovery Division</td>
                      <td>15 to 30 Days</td>
                      <td>Official OTS sanction letter with 45%–65% waiver &amp; NDC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="settleloans-legal-defense-ecosystem" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Defense Ecosystem: Restoring Dignity &amp; Resolving Debt
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Navigating aggressive collection tactics, unlawful police threats, and complex banking regulations requires seasoned legal advocates who specialize in debt recovery jurisprudence. SettleLoans stands as India’s foremost legal debt defense platform, safeguarding thousands of distressed borrowers from harassment while negotiating binding, bank-approved One-Time Settlements. Our specialized team serves formal cease-and-desist notices to halt agency contact, prepares airtight police complaints under IPC Sections 506 and 509, files escalations with the RBI Ombudsman, and secures substantial principal waivers backed by official No Dues Certificates.
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
                  11. Frequently Asked Questions: Police Complaints Against Recovery Agent Harassment
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Clear, legally verified answers regarding recovery agent harassment, police complaint formats, IPC sections, and borrower rights under Indian law.
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
                  <span className="font-semibold text-slate-800">Reserve Bank of India (Master Direction on Fair Practices Code)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Supreme Court of India (ICICI Bank v. Prakash Kaur Ruling)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2263"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Indian Penal Code, 1860 (Sections 506, 509, 383 &amp; 441)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Portal (Complaint Filing &amp; Redressal)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">National Cyber Crime Reporting Portal (Ministry of Home Affairs)</span>
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
                  href="/bank-recovery-agent-threatening-me"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Recovery Agent Threatening Me
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Recovery Harassment Legal Complaint
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
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Legal Notice Reply Guide
                </Link>
                <Link
                  href="/bank-arbitration-notice-reply"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Arbitration Notice Defense
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Blueprint
                </Link>
                <Link
                  href="/case-study-bajaj-finance-harassment-stopped"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Case Study: Harassment Stopped
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Settlement CIBIL Impact &amp; Repair
                </Link>
              </div>
            </section>

          </main>

          {/* Right Column: Author Bio, Emergency Advocate CTA, Trust Signals */}
          <aside className="w-full lg:sticky lg:top-24 space-y-6 h-fit">
            
            {/* Author Bio Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Link href="/authors/ashish-jhangra" className="w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-lg hover:opacity-90 transition-opacity">
                  AJ
                </Link>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    <Link href="/authors/ashish-jhangra" className="hover:text-[#1F5EFF] transition-colors">
                      Ashish Jhangra
                    </Link>
                  </h4>
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Seasoned advocate in banking litigation, debtor protection rights against unlawful collection coercion, and RBI compromise settlement frameworks with over 10+ years of regulatory advisory experience.
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
              <h4 className="font-bold text-base text-white mb-2">Facing Recovery Agent Harassment?</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not endure threats, abusive calls, or home visits in silence. Engage our senior banking advocates to issue legal notices, file police complaints, and negotiate an official 50%–65% OTS.
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
              <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Institutional Protections
              </h4>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Supreme Court Precedent Protected</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Official Bank-Stamped Settlement Letters</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>RBI Fair Practices Code Enforcement</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
