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
  ArrowUpRight,
  Siren,
  PhoneForwarded,
  FileWarning
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Report Fake Police Recovery Calls | SettleLoans',
  description: 'Recovery agent pretending to be a police officer or court bailiff? File an immediate police impersonation FIR under Section 204 BNS with SettleLoans.',
  keywords: [
    'recovery agent pretending to be police officer',
    'fake police call for loan recovery',
    'loan recovery agent posing as police officer',
    'recovery agent threatening police complaint',
    'section 204 bns impersonating public servant',
    'section 170 ipc impersonating police officer loan',
    'section 318 4 bns cheating loan recovery',
    'section 351 bns criminal intimidation bank agents',
    'rbi fair practices code recovery agent police threat',
    'how to file fir against loan recovery agent',
    'cyber crime complaint against fake police recovery call',
    'one time settlement after recovery harassment'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/recovery-agent-fake-police-call-complaint',
  },
  openGraph: {
    title: 'Recovery Agent Pretending to Be Police Officer? Legal Rights, Criminal Offenses & FIR Guide',
    description: 'Stop fake police intimidation by loan collection agencies. Learn your statutory rights under Section 204 BNS / 170 IPC, RBI Master Directions, and how advocates file criminal FIRs.',
    url: 'https://www.settleloans.in/recovery-agent-fake-police-call-complaint',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/recovery-agent-fake-police-call-complaint.jpg',
        width: 1200,
        height: 675,
        alt: 'Recovery Agent Posing as Police Officer Legal Defense & FIR Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recovery Agent Pretending to Be Police Officer? FIR, BNS/IPC Sections & RBI Rules',
    description: 'Facing fraudulent police threats from collection agents? Learn criminal impersonation laws, RBI Ombudsman protocols, and how to negotiate a legal One-Time Settlement.',
    images: ['https://www.settleloans.in/images/infographics/recovery-agent-fake-police-call-complaint.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/recovery-agent-fake-police-call-complaint#webpage",
      "url": "https://www.settleloans.in/recovery-agent-fake-police-call-complaint",
      "name": "Recovery Agent Pretending to Be Police Officer? FIR, BNS/IPC Sections & RBI Rules",
      "description": "Is a loan recovery agent posing as a police officer or Crime Branch inspector? Discover criminal offenses under Section 204 BNS / 170 IPC, RBI rules, and how to file an immediate FIR.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/recovery-agent-fake-police-call-complaint#breadcrumb"
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
      "@id": "https://www.settleloans.in/recovery-agent-fake-police-call-complaint#breadcrumb",
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
          "name": "Fake Police Recovery Call Defense",
          "item": "https://www.settleloans.in/recovery-agent-fake-police-call-complaint"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/recovery-agent-fake-police-call-complaint#article",
      "headline": "Recovery Agent Pretending to Be Police Officer? Criminal Offenses (Section 204 BNS / 170 IPC), RBI Directives & Emergency FIR Filing Protocol",
      "description": "An exhaustive legal guide on handling predatory collection agents impersonating police officers, Crime Branch officials, or court bailiffs. Explains statutory provisions under Bharatiya Nyaya Sanhita (BNS), Indian Penal Code (IPC), IT Act Section 66D, RBI Fair Practices Code, and advocate-led settlement procedures.",
      "image": "https://www.settleloans.in/images/infographics/recovery-agent-fake-police-call-complaint.jpg",
      "datePublished": "2026-08-31T10:00:00+05:30",
      "dateModified": "2026-08-31T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/recovery-agent-fake-police-call-complaint#webpage"
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
      "@id": "https://www.settleloans.in/recovery-agent-fake-police-call-complaint#service",
      "name": "SettleLoans - Debt Harassment Defense & Criminal Impersonation Legal Advisory",
      "description": "Comprehensive legal defense, police FIR intervention, and institutional debt settlement advisory for borrowers harassed by predatory collection agents posing as police officers or law enforcement authorities.",
      "url": "https://www.settleloans.in/recovery-agent-fake-police-call-complaint",
      "image": "https://www.settleloans.in/images/infographics/recovery-agent-fake-police-call-complaint.jpg",
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
        "reviewCount": "2480",
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
          "datePublished": "2026-08-14",
          "reviewBody": "A caller claimed to be a Crime Branch Inspector. He threatened me with arrest over a loan. SettleLoans proved the call was a fake under Section 204 BNS. They filed a cyber complaint. They settled my loan for a 60% waiver with a clean NDC.",
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
            "name": "Pooja Sundaram"
          },
          "datePublished": "2026-07-28",
          "reviewBody": "An agency sent fake police notices on WhatsApp. SettleLoans sent a legal notice to the bank Nodal Officer. They also filed an RBI Ombudsman complaint. The bank stopped the agency within 24 hours and settled my credit card debt.",
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
            "name": "Harish Mehra"
          },
          "datePublished": "2026-06-19",
          "reviewBody": "Someone posed as a local police SHO demanding loan money. SettleLoans verified with the police that no complaint existed. They drafted an FIR against the agency. They then closed my loan with zero harassment.",
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
            "name": "Divya Nambiar"
          },
          "datePublished": "2026-05-30",
          "reviewBody": "Fake police threats caused deep stress to my family. SettleLoans gave us fast legal shielding. They proved loan default is a civil matter. The bank closed my loan with a No Dues Certificate.",
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
      "@id": "https://www.settleloans.in/recovery-agent-fake-police-call-complaint#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can a police officer call or arrest me for an unpaid personal loan or credit card default?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Loan default is a civil dispute. Police cannot summon or arrest you for debt. Police need a court warrant to act."
          }
        },
        {
          "@type": "Question",
          "name": "What criminal offenses does a recovery agent commit by pretending to be a police officer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Posing as police violates Section 204 BNS and Section 170 IPC. It breaches Section 66D IT Act. It also violates Section 351 BNS and Section 308 BNS."
          }
        },
        {
          "@type": "Question",
          "name": "How can I instantly identify whether a police call regarding loan recovery is genuine or fake?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Real police never ask for cash or UPI transfers. Demand officer name, rank, and police station. Ask for notice under Section 35(3) BNSS or Section 41A CrPC. Check station landline numbers."
          }
        },
        {
          "@type": "Question",
          "name": "What steps should I take immediately when receiving a fake police call from a recovery agent?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Stay calm. Turn on call recording. Note caller number and time. Never transfer money. Lodge a report at cybercrime.gov.in (dial 1930). Have a lawyer send notice to the bank."
          }
        },
        {
          "@type": "Question",
          "name": "Can I file an FIR against the recovery agency and the lending bank for impersonation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You can file an FIR under Section 204 BNS (Section 170 IPC). You can add Section 318(4) BNS (Section 420 IPC) and Section 66D IT Act. Banks bear vicarious liability for agent acts."
          }
        },
        {
          "@type": "Question",
          "name": "What are the RBI rules regarding recovery agents using police threats or harassment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI rules, agents cannot use threats or pose as police. They cannot call before 8 AM or after 7 PM. Breaking rules brings heavy RBI fines."
          }
        },
        {
          "@type": "Question",
          "name": "Can a fake police call give me legal leverage to negotiate a One-Time Settlement (OTS)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Audio proof gives strong legal leverage. Banks fear police FIRs and RBI fines. Credit teams recall accounts and approve a 45% to 65% OTS waiver."
          }
        },
        {
          "@type": "Question",
          "name": "What documents are required in a genuine One-Time Settlement sanction letter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A real OTS letter uses bank letterhead. It shows your name, PAN, and loan account number. It states the agreed sum, due date, and full debt closure terms."
          }
        },
        {
          "@type": "Question",
          "name": "What is the mandatory RBI timeline for issuing a No Dues Certificate after loan settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, banks must issue an NDC within 30 days. They must update credit bureaus. Late delivery triggers a ₹5,000 per day penalty."
          }
        },
        {
          "@type": "Question",
          "name": "Will a loan settlement permanently ruin my CIBIL credit score?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The bureau marks the loan as 'Settled' with ₹0 balance. The score drop is short-lived. Good credit habits rebuild your score past 750 in 18 to 24 months."
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
  { id: 'impersonation-menace-reality', title: '1. The Menace of Fake Police Calls & Coercion' },
  { id: 'criminal-sanctions-bns-ipc-it-act', title: '2. Criminal Offenses: Section 204 BNS & IT Act' },
  { id: 'rbi-master-directions-supreme-court', title: '3. RBI Master Directions & Supreme Court Rulings' },
  { id: 'bank-npa-accounting-npv-recovery', title: '4. NPA Accounting & The NPV Recovery Equation' },
  { id: 'police-impersonation-defense-roadmap', title: '5. Visual Defense & FIR Strategic Roadmap' },
  { id: 'emergency-5-step-fir-protocol', title: '6. The 5-Step Emergency FIR & Cyber Protocol' },
  { id: 'leveraging-harassment-for-ots', title: '7. Converting Impersonation into 55% OTS' },
  { id: 'sanction-forensics-rbi-ndc-mandate', title: '8. Sanction Forensics & RBI ₹0 NDC Delivery' },
  { id: 'comparative-legal-defense-matrix', title: '9. Comparative Matrix: Fake Threat vs Due Law' },
  { id: 'company-resolution-section', title: '10. SettleLoans Legal Defense Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function RecoveryAgentFakePoliceCallComplaintPage() {
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
        className="w-full border-b border-slate-700/80 pt-24 sm:pt-28 md:pt-32 pb-8 md:pb-10 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-indigo-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-4 tracking-wider uppercase">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Police Impersonation Defense. Criminal Complaint &amp; RBI Recourse.</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Recovery Agent Pretending to Be Police Officer</h1>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-3 mb-5 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Written by <Link href="/authors/ashish-jhangra" className="font-bold underline hover:text-white transition-colors">Ashish Jhangra</Link>.</span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Updated: August 2026.</span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Supreme Court &amp; RBI Compliant.</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Stop Fake Police Harassment Now</span>
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
              <p className="text-[11px] leading-relaxed text-blue-800">
                Loan default is a civil matter. Posing as police is a crime. Section 204 BNS and Section 170 IPC apply. Section 66D IT Act applies too. Borrowers can file a cyber FIR. You can secure a 45% to 65% OTS.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways. Fake Police Calls &amp; Legal Defenses.</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Civil Matter. Zero Police Powers.</strong> Loan default is a civil dispute. Police cannot summon or arrest you.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Cognizable Crime (Section 204 BNS).</strong> Posing as police brings 3 years in jail. Section 170 IPC and IT Act apply.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Strict RBI Harassment Ban.</strong> RBI bans false legal threats. Agents cannot impersonate police officers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Instant Cyber &amp; Police FIR Recourse.</strong> Report calls on cybercrime.gov.in. Dial 1930. File a police FIR.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Leverage for 45%–65% OTS.</strong> Impersonation proof creates strong leverage. Banks agree to 45% to 65% OTS settlements.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Menace of Fake Police Calls & Coercion */}
            <section id="impersonation-menace-reality" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. The Crisis of Police Impersonation</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Fake police calls rise daily. Rogue agencies break debt collection laws. Agents pose as police officers. They pretend to be court bailiffs.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Callers want to cause panic. They make fake arrest threats. They threaten police home raids. They cite Section 318(4) BNS. They invoke Section 420 IPC. Some send fake notices with forged emblems.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Siren className="w-4 h-4 text-red-600" />
                    <span>The Anatomy of a Fraudulent Police Call.</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Callers claim to be Crime Branch inspectors. They demand fast UPI payments. They threaten instant arrest.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Civil Nature of Unsecured Loan Defaults.</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Loan default is a civil dispute. The Contract Act applies here. The Supreme Court confirms this. Default is not a crime.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Real police never collect loan dues. Posing as police is a crime.
              </p>
            </section>

            {/* Section 2: Statutory Offenses & Criminal Sanctions: BNS, IPC & IT Act */}
            <section id="criminal-sanctions-bns-ipc-it-act" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Statutory Criminal Offenses</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Posing as police is strictly illegal. The <strong>Bharatiya Nyaya Sanhita (BNS), 2023</strong> applies. The IPC punishes offenders too:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-red-500 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-red-600" />
                    <span>Impersonating a Public Servant (Section 204 BNS / Section 170 IPC).</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Posing as police is a crime under Section 204 BNS. It violates Section 170 IPC. It brings 3 years in jail.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <FileWarning className="w-4 h-4 text-amber-600" />
                    <span>Cheating by Personation &amp; Cyber Fraud (Section 66D IT Act, 2000).</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Calling as fake police is cyber fraud. Section 66D IT Act applies. It orders 3 years in jail and heavy fines.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Gavel className="w-4 h-4 text-indigo-600" />
                    <span>Criminal Intimidation &amp; Extortion (Section 351 &amp; 308 BNS / Sections 506 &amp; 384 IPC).</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Threatening arrest to extort money is illegal. Section 351 BNS and Section 308 BNS apply. Section 506 IPC and Section 384 IPC apply too. It brings up to 7 years in jail.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-purple-600" />
                    <span>Forgery of Government Seals &amp; Insignia (Section 336 BNS / Section 468 &amp; 471 IPC).</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Forging police seals on notices is a crime. Section 336 BNS applies. Section 468 IPC and Section 471 IPC apply. It is a non-bailable offense.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Lawyers record these crimes. This holds banks liable. Lenders stop rogue agents fast.
              </p>
            </section>

            {/* Section 3: RBI Master Directions & Supreme Court Precedents */}
            <section id="rbi-master-directions-supreme-court" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. RBI Master Directions</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The RBI protects loan borrowers. Banks face direct blame for agent abuse.
              </p>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-blue-950">
                  <Landmark className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Supreme Court Precedent. ICICI Bank v. Shanti Devi Sharma (2008).</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  The Supreme Court banned brute force in debt collection. The Shanti Devi Sharma (2008) case sets this rule. Banks bear full liability for agent harm.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs my-4">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    <span>RBI Fair Practices Code.</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    Lenders cannot use fake legal threats. Calls before 8 AM are banned. Calls after 7 PM are banned too.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-indigo-600" />
                    <span>DRA Training &amp; Code of Conduct.</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    Agents must hold IIBF DRA certificates. They must show ID cards. They cannot hide their true identity.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-purple-600" />
                    <span>Vicarious Liability Mandate.</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    Under RBI Outsourcing rules, banks own agent acts. Illegal calls bring heavy RBI fines.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                RBI rules protect your rights. Supreme Court orders help you too. They force banks to settle debts fast.
              </p>
            </section>

            {/* Section 4: Bank Accounting Dynamics, NPA Provisioning & NPV Recovery Formula */}
            <section id="bank-npa-accounting-npv-recovery" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Bank Accounting &amp; Fake Police Threat Risks</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Why do recovery agents use illegal threats? They face heavy financial pressure. Third-party agencies work on commission. They earn 10% to 25% of collected funds. After 90 days of default, loans become <strong>Non-Performing Assets (NPAs)</strong>. This triggers mandatory RBI provisioning rules:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Asset Delinquency Stage.</th>
                      <th>Overdue Aging Timeline.</th>
                      <th>Mandatory RBI Capital Provision.</th>
                      <th>Settlement / Haircut Scope.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Special Mention Account (SMA-1/2).</td>
                      <td>31 to 90 Days Overdue.</td>
                      <td>5% General Capital Provision.</td>
                      <td>Penal Interest &amp; Late Fee Waivers.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Substandard NPA.</td>
                      <td>91 to 365 Days Overdue.</td>
                      <td>25% Unsecured Capital Provision.</td>
                      <td>35% to 45% Principal Haircut.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful NPA 1 (D1).</td>
                      <td>12 to 24 Months Default.</td>
                      <td>100% Unsecured Capital Provision.</td>
                      <td>45% to 55% Principal Haircut.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful NPA 2 / Loss Asset.</td>
                      <td>24+ Months or Written-Off.</td>
                      <td>100% Full Balance Sheet Write-Off.</td>
                      <td>55% to 65% Principal Haircut.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Unsecured debts lack pledged assets. Order 37 CPC suits take years. DRT trials take long too. Court costs and legal retainers add up. Thus, banks check the <strong>Net Present Value (NPV) of Recovery</strong>. They compare long legal fights against fast cash settlements:
              </p>

              {/* JSX Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Recovery Valuation Benchmark.</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Here C_t is cash flow. The letter r is the rate. Deductions cover court costs, legal fees, RBI risks, and locked funds.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Lawyers expose criminal impersonation fast. The bank risks heavy RBI fines. They risk public shame too. Credit teams act fast. They remove rogue agencies. They grant a 45% to 65% OTS settlement.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="police-impersonation-defense-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">5. Fake Police Call Defense Roadmap</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The visual roadmap below shows our 5-step defense plan. Experienced banking litigation advocates use this plan. It helps spot fake officers, record audio proof, lodge FIRs, and secure debt relief.
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/recovery-agent-fake-police-call-complaint.jpg"
                  alt="Fake Police Call Loan Recovery Agent Defense and FIR Protocol Infographic"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Steps 1–2: Identify &amp; Record.</span>
                  <span>Spot illegal impersonation under Section 204 BNS. Turn on call recording. Save digital audio files.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Steps 3–4: Verify &amp; Lodge FIR.</span>
                  <span>Demand caller credentials. Check the station general diary. File cyber crime and police FIRs right away.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Step 5: RBI Ombudsman &amp; 55% OTS.</span>
                  <span>Report violations to the RBI Ombudsman. Hire legal counsel. Settle debt with a 45% to 65% waiver.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Emergency 5-Step FIR Protocol */}
            <section id="emergency-5-step-fir-protocol" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. The Emergency 5-Step Protocol</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Fake police calls cause fear. Do not panic. Never pay money in fear. That invites more calls. Follow this clear 5-step plan:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Step 1: Activate Call Recording &amp; Preserve Digital Evidence.</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Turn on auto call recording. Let the caller speak. Note the phone number, date, and time. Save all WhatsApp chats and fake notices.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Step 2: Cross-Examine &amp; Demand Official Verification Details.</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ask for the caller&apos;s full name. Ask for their belt number and rank. Request the police station address. Demand the General Diary (GD) entry number. Warn them the call is being recorded.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Step 3: Verify with the Local Police Station Landline.</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Find the police station landline online. Call the station directly. Ask the Duty Officer if such a notice exists. Police always confirm it is fake.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Step 4: Lodge a Complaint on the National Cyber Crime Portal (cybercrime.gov.in / 1930).</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lodge a complaint at cybercrime.gov.in. Or dial helpline 1930. Pick &quot;Cyber Extortion / Cheating by Personation&quot;. Attach audio files and forged notices.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-emerald-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Step 5: Retain an Advocate to Serve a Criminal Legal Notice on the Bank.</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Hire a debt defense lawyer. Send a legal notice to the bank MD. Send a copy to the Principal Nodal Officer. Warn them of Section 204 BNS action. File an RBI Ombudsman complaint.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                These steps stop recovery threats. You create an official police record. You keep your family safe.
              </p>
            </section>

            {/* Section 7: Negotiating Debt Resolution & OTS */}
            <section id="leveraging-harassment-for-ots" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Converting Criminal Recovery Harassment into an</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Fake police calls show agency panic. Agencies know civil suits take years. They know unsecured debts lack assets to seize. Exposing fake calls gives you immense leverage. You can win a strong <strong>One-Time Settlement (OTS)</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Do not pay unfair penalty charges. Debt defense lawyers draft formal bank settlement plans:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileText className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Hardship Dossier Submission.</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit proof of financial distress. Add medical records, job loss letters, or business loss proof. Show that default was not planned.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <BadgePercent className="w-4 h-4 text-emerald-600" />
                    <span>100% Penalty Waiver &amp; 45%–65% Haircut.</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Demand a 100% waiver on late fees and interest. Seek a <strong>45% to 65% cut on principal debt</strong> based on NPA age.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Ban className="w-4 h-4 text-purple-600" />
                    <span>Complete Agency Disengagement Clause.</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Make sure terms order the bank to recall your file. The bank must ban all third-party agency calls.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                    <span>Flexible Multi-Tranche Payment Plan.</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Split the settlement sum across 2 to 4 monthly parts. Settle debt without losing family emergency funds.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Sanction Letter Forensics & RBI NDC Mandate */}
            <section id="sanction-forensics-rbi-ndc-mandate" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Sanction Letter Forensics, Direct Remittance, RBI ₹0 NDC</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Be careful when closing a debt settlement. Fraudulent agents often make fake settlement letters. They make verbal promises to pocket cash tokens. Never transfer money without legal verification of the sanction letter.
              </p>
              
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>The 4 Forensic Checkpoints of an Authentic Settlement Sanction Letter.</span>
                </div>
                <ul className="space-y-1.5 text-xs text-amber-800 list-disc pl-4">
                  <li><strong>Institutional Bank Letterhead.</strong> Official bank letterhead is mandatory. Look for internal reference numbers. Check the manager signature.</li>
                  <li><strong>Borrower &amp; Account Identifiers.</strong> Check your full legal name and PAN. Verify the 16-digit loan account number.</li>
                  <li><strong>Unconditional Debt Extinguishment Clause.</strong> The letter must state full debt waiver. All claims must end upon payment.</li>
                  <li><strong>Direct Bank Account Remittance.</strong> Pay directly into your registered loan account. Use NEFT, RTGS, or bank portals. Never pay agents directly.</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>RBI Circular RBI/2023-24/60: Mandatory ₹0 NDC Delivery &amp; ₹5,000/Day Penalty.</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  Under <strong>RBI Circular RBI/2023-24/60</strong>, lenders must issue an official <strong>No Dues Certificate (NDC)</strong> within <strong>30 calendar days</strong>. They must clear credit bureau records. Any delay beyond 30 days triggers a penalty. The bank must pay <strong>₹5,000 per day</strong> to the borrower.
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                Credit Bureau Reporting &amp; Score Rehabilitation After Settlement
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                After settlement, lenders report the loan as <strong>&quot;Settled&quot;</strong> or <strong>&quot;Post-Write-off Settled&quot;</strong>. The overdue balance becomes <strong>₹0</strong>. Your credit score may drop at first. But default interest stops immediately. Collection calls end for good. Use a secured credit card. Keep credit usage below 30%. Pay bills on time. Your score can cross 750 in 18 to 24 months.
              </p>
            </section>

            {/* Section 9: Comparative Legal Defense Matrix */}
            <section id="comparative-legal-defense-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. Coercive Threats vs Legal Resolution Matrix</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Compare coercive recovery threats against genuine judicial channels and advocate settlements:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Resolution Channel.</th>
                      <th>Legal Authority &amp; Jurisprudence.</th>
                      <th>Borrower Protection Level.</th>
                      <th>Typical Timeline.</th>
                      <th>Final Legal Effect.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Fake Police / Threat Calls.</td>
                      <td>Section 204 BNS and Section 170 IPC crime.</td>
                      <td>Zero protection. Severe mental stress.</td>
                      <td>Non-stop ongoing harassment.</td>
                      <td>Triggers police FIR and RBI fines.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Civil Court Litigation (Order 37 CPC).</td>
                      <td>Order 37 CPC civil dispute.</td>
                      <td>Full court process and legal defense rights.</td>
                      <td>2 to 4 Years.</td>
                      <td>Judicial order with strict execution rules.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">RBI Banking Ombudsman Portal.</td>
                      <td>RBI Integrated Ombudsman Scheme 2021.</td>
                      <td>Direct regulatory check on unfair collection.</td>
                      <td>30 to 45 Days.</td>
                      <td>Binding RBI orders and financial relief.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Advocate-Led 55% OTS.</td>
                      <td>Mutual compromise settlement agreement.</td>
                      <td>Full legal safety and final closure.</td>
                      <td>15 to 30 Days.</td>
                      <td>Total debt closure with ₹0 NDC.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Defense &amp; Anti-Harassment Advisory
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Handling fake police threats needs skilled banking lawyers. We enforce RBI rules and BNS laws. SettleLoans gives complete legal defense across India. We send cease-and-desist notices to bank leaders. We file reports with Cyber Police and the RBI Ombudsman. We talk directly to bank credit heads. Our lawyers win 45% to 65% principal waivers with official No Dues Certificates.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. FAQs: Fake Police Calls &amp; Recovery Agent Harassment</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Read clear answers about fake police calls, recovery agent impersonation, and debt settlement in India.
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
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">National Cyber Crime Reporting Portal (MHA cybercrime.gov.in)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2263"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Bharatiya Nyaya Sanhita, 2023 (Section 204 Impersonation)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Online Grievance Filing)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction – Fair Practices Code for Lenders</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">Supreme Court of India (ICICI Bank v. Shanti Devi Sharma Judgment)</span>
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
                  Recovery Agent Threatening Rights
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can I Go to Jail for Default?
                </Link>
                <Link
                  href="/bank-fir-for-loan-default-reality-check"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank FIR Reality Check
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Bank Harassment
                </Link>
                <Link
                  href="/bank-sending-legal-notice-to-employer-illegal-recovery"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Employer Notice Defense
                </Link>
                <Link
                  href="/bank-freeze-salary-account-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Unfreeze Salary Account Guide
                </Link>
                <Link
                  href="/cyber-crime-complaint-illegal-loan-apps-blackmail"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Loan App Blackmail Cyber FIR
                </Link>
                <Link
                  href="/bailable-non-bailable-warrant-cheque-bounce-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Court Warrant Defense Guide
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Guide
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
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Senior specialist in banking litigation defense and criminal impersonation protection. Expert in Section 204 BNS and Section 170 IPC remedies against unlawful recovery agencies. Negotiates nationwide One-Time Settlements.
              </p>
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
                <span>Fake Police Call Legal Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Is a Recovery Agent Threatening You as Police?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Stop illegal threats now. Retain experienced banking defense advocates to lodge a cyber FIR. Negotiate an official 45% to 65% OTS.
              </p>
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
                  <span>Supreme Court &amp; BNS Compliance</span>
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
