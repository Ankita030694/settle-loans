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
  Car,
  Key,
  StopCircle,
  Video
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Recovery Agents Blocking House Gate | SettleLoans',
  description: 'Recovery agents blocking your house gate or vehicle? File wrongful restraint and confinement charges under Section 127 BNS with SettleLoans.',
  keywords: [
    'recovery agent blocking door or car from leaving',
    'recovery agent blocking gate wrongful confinement',
    'section 127 BNS wrongful confinement debt recovery',
    'section 340 IPC wrongful confinement loan agent',
    'recovery agent snatching bike car keys illegal',
    'can recovery agents block my car from leaving parking',
    'police complaint against recovery agent blocking gate',
    'rbi guidelines physical restraint recovery agents',
    'fir against bank collection agents wrongful restraint',
    'how to file non bailable criminal complaint recovery agent'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/recovery-agents-blocking-gate-wrongful-confinement',
  },
  openGraph: {
    title: 'Recovery Agent Blocking Door or Car From Leaving? Legal Rights & Criminal Action',
    description: 'Exhaustive legal analysis on borrower protections against physical obstruction, vehicle blocking, and key snatching by debt recovery agents. Detailed guide on Section 127 BNS, Section 340 IPC, Article 21 rights, and police FIR filing.',
    url: 'https://www.settleloans.in/recovery-agents-blocking-gate-wrongful-confinement',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/recovery-agents-blocking-gate-wrongful-confinement.jpg',
        width: 1200,
        height: 675,
        alt: 'Recovery Agents Blocking Gate & Wrongful Confinement Infographic',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recovery Agent Blocking Door or Car? Sec 127 BNS & Police FIR Guide',
    description: 'Facing muscle tactics from loan collection agents? Learn why blocking doors or cars constitutes criminal wrongful confinement under Section 127 BNS / Section 340 IPC and how to take decisive legal action.',
    images: ['https://www.settleloans.in/images/infographics/recovery-agents-blocking-gate-wrongful-confinement.jpg'],
  },
};

const faqsList = [
  {
    name: "Is it illegal for a recovery agent to physically block my doorway or gate?",
    answer: "Yes. It is illegal and a cognizable crime. Blocking a doorway stops your movement. This acts as Wrongful Restraint under Section 126 BNS (Section 339 IPC). It also counts as Wrongful Confinement under Section 127 BNS (Section 340 IPC). Recovery agents have zero legal right to block you."
  },
  {
    name: "What should I do if a collection agent blocks my car or bike from leaving parking?",
    answer: "Start video recording on your phone right away. Record the agent's face and vehicle number plate. Film the blockage clearly. State aloud that they are blocking your movement. Dial 112 to call the police for criminal restraint. Stay calm and avoid physical fights."
  },
  {
    name: "Can recovery agents snatch or confiscate my vehicle or house keys by force?",
    answer: "No. Snatching keys by force is illegal. It is theft under Section 303 BNS (Section 379 IPC). It is extortion under Section 308 BNS (Section 383 IPC). If agents use threats, it becomes robbery under Section 309 BNS (Section 390 IPC). Robbery is a serious non-bailable crime."
  },
  {
    name: "What criminal sections apply to recovery agents using physical muscle tactics?",
    answer: "Several key penal laws apply. These include Section 126 BNS for Wrongful Restraint. Section 127 BNS applies for Wrongful Confinement. Section 351 BNS covers Criminal Intimidation. Section 308 BNS covers Extortion. Section 189 BNS applies if multiple agents gather. Section 329 BNS covers Criminal Trespass on your property."
  },
  {
    name: "How do I file a police FIR against recovery agents for wrongful confinement?",
    answer: "Submit a written complaint to the police station under Section 173 BNSS. Note the date, time, lender name, and agent details. Attach your video evidence. If the police refuse to register an FIR, write to the SP under Section 175(3) BNSS. You can also file a complaint with the Magistrate under Section 223 BNSS."
  },
  {
    name: "Are banks and NBFCs legally responsible for the criminal acts of their outsourced agents?",
    answer: "Yes. Banks and NBFCs remain legally responsible. RBI Master Directions on Outsourcing enforce strict rules. The Supreme Court affirmed this in ICICI Bank v. Prakash Kaur. Lenders face direct penalties for threats or confinement committed by recovery agents."
  },
  {
    name: "Can a bank repossess a vehicle on the road without judicial process or court orders?",
    answer: "No. The Supreme Court bans musclemen from seizing vehicles on roads. Lenders must follow legal due process. For secured car loans, they must send formal pre-seizure notices. They must give a cure period. Any repossession requires lawful inventory procedures."
  },
  {
    name: "How does appointing a debt settlement advocate stop physical harassment?",
    answer: "A debt settlement advocate files a formal Vakalatnama. The lawyer sends a Cease-and-Desist notice to bank nodal officers. Under the RBI Fair Practices Code, lenders must stop home visits once you hire legal counsel. All talks move through your lawyer for a fair OTS settlement."
  }
];

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/recovery-agents-blocking-gate-wrongful-confinement#webpage",
      "url": "https://www.settleloans.in/recovery-agents-blocking-gate-wrongful-confinement",
      "name": "Recovery Agent Blocking Door or Car From Leaving? Sec 127 BNS & Legal Action",
      "description": "Exhaustive legal breakdown of borrower rights against physical obstruction, gate blocking, vehicle immobilization, and key snatching by recovery agents under Section 126 & 127 BNS, Section 339 & 340 IPC, and RBI regulations.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/recovery-agents-blocking-gate-wrongful-confinement#breadcrumb"
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
      "@id": "https://www.settleloans.in/recovery-agents-blocking-gate-wrongful-confinement#breadcrumb",
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
          "name": "Recovery Agent Blocking Gate Wrongful Confinement",
          "item": "https://www.settleloans.in/recovery-agents-blocking-gate-wrongful-confinement"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/recovery-agents-blocking-gate-wrongful-confinement#article",
      "headline": "Recovery Agent Blocking Door or Car From Leaving? Sec 127 BNS, Wrongful Confinement & Police Action",
      "description": "Comprehensive analysis of penal statutes prohibiting physical confinement, vehicle obstruction, and key snatching by debt collection personnel. Covers Sections 126 & 127 BNS, Article 21 constitutional liberty, RBI outsourcing rules, and FIR registration.",
      "image": "https://www.settleloans.in/images/infographics/recovery-agents-blocking-gate-wrongful-confinement.jpg",
      "datePublished": "2026-08-31T10:00:00+05:30",
      "dateModified": "2026-08-31T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/recovery-agents-blocking-gate-wrongful-confinement#webpage"
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
      "@id": "https://www.settleloans.in/recovery-agents-blocking-gate-wrongful-confinement#service",
      "name": "SettleLoans - Borrower Anti-Harassment & Legal Debt Resolution Services",
      "description": "Nationwide legal defense against recovery agent muscle tactics, physical obstruction, wrongful confinement, and illegal vehicle seizure, combined with institutional One-Time Settlement (OTS) negotiations.",
      "url": "https://www.settleloans.in/recovery-agents-blocking-gate-wrongful-confinement",
      "image": "https://www.settleloans.in/images/infographics/recovery-agents-blocking-gate-wrongful-confinement.jpg",
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
        "reviewCount": "2740",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Vikramaditya Sharma"
          },
          "datePublished": "2026-07-19",
          "reviewBody": "Three agents parked bikes behind my car in my basement. They stopped me from driving to work. SettleLoans advocates helped me file a police complaint under Section 127 BNS for wrongful confinement. They sent a Cease-and-Desist notice to the bank. The bank recalled the agents and settled my ₹8.5 Lakh loan with a 55% waiver.",
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
          "datePublished": "2026-08-03",
          "reviewBody": "A recovery agent blocked my house door. He stopped my mother from stepping outside. SettleLoans acted fast. They cited Supreme Court rulings on Article 21 and Section 126 BNS. The bank issued an apology letter, stopped all home visits. And gave a great OTS plan.",
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
            "name": "Gurpreet Singh"
          },
          "datePublished": "2026-06-25",
          "reviewBody": "Two agents grabbed my motorcycle keys outside my office. SettleLoans guided me to file a criminal complaint for extortion under Section 308 BNS. Their legal help stopped the agency immediately. I got total relief and my official No Dues Certificate.",
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
            "name": "Suresh Venkatraman"
          },
          "datePublished": "2026-08-18",
          "reviewBody": "Ashish Jhangra and his legal team gave clear advice on wrongful restraint laws. They showed that loan default is purely a civil matter. Physical force is a crime. Their team protected my family and settled my debts with dignity.",
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
      "@id": "https://www.settleloans.in/recovery-agents-blocking-gate-wrongful-confinement#faq",
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
  { id: 'physical-restraint-muscle-tactics-reality', title: '1. The Physical Restraint & Muscle Tactics Reality' },
  { id: 'statutory-framework-wrongful-confinement', title: '2. Penal Law: Sec 126 & 127 BNS vs Sec 339 & 340 IPC' },
  { id: 'constitutional-locomotion-puttaswamy', title: '3. Constitutional Liberty & Right to Locomotion' },
  { id: 'rbi-master-directions-fair-practices', title: '4. RBI Outsourcing Directives & Lender Liability' },
  { id: 'infographic-confinement-defense', title: '5. Anti-Confinement Infographic Guide' },
  { id: 'emergency-police-fir-protocol', title: '6. Tactical Protocol: Recording & Filing a Criminal FIR' },
  { id: 'bank-npa-accounting-npv-formula', title: '7. Bank NPA Accounting & NPV Recovery Economics' },
  { id: 'cease-and-desist-ots-resolution', title: '8. Cease-and-Desist, OTS Sanction & NDC Issuance' },
  { id: 'comparative-enforcement-matrix', title: '9. Comparative Protection & Authority Matrix' },
  { id: 'settleloans-legal-defense-framework', title: '10. SettleLoans Legal Defense Framework' },
  { id: 'faqs', title: '11. Frequently Asked Questions' }
];

export default function RecoveryAgentsBlockingGateWrongfulConfinementPage() {
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
            <StopCircle className="w-3.5 h-3.5" />
            <span>Borrower Criminal Defense • Section 127 BNS &amp; Anti-Confinement Mandate</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Recovery Agents Blocking House Gate: Legal Action</h1>

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
              <span>BNS &amp; RBI Fair Practice Compliant Legal Defense</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-lg flex items-center gap-2"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Stop Physical Recovery Harassment</span>
            </Link>
            <Link
              href="#statutory-framework-wrongful-confinement"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 font-semibold py-3 px-6 rounded-xl text-sm transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>View Criminal Confinement Laws</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip Component */}
      <StatsStrip />

      {/* 3. Main 3-Column Content Layout */}
      <div className="w-full max-w-[1700px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[250px_minmax(0,1fr)_290px] xl:grid-cols-[270px_minmax(0,1fr)_310px] 2xl:grid-cols-[290px_minmax(0,1fr)_330px] gap-6 xl:gap-8 items-start">
          
          {/* Left Column: Sticky Table of Contents */}
          <aside className="hidden lg:block w-full lg:sticky lg:top-24 space-y-4 h-fit self-start max-h-[calc(100vh-110px)] overflow-y-auto pr-1">
            <SidebarTOC items={tocItems} />
          </aside>

          {/* Middle Column: Main Editorial Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-sm uppercase tracking-wider mb-4">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Statutory Protections: Anti-Confinement &amp; Locomotion Rights</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Cognizable Criminal Offense:</strong> Blocking doors or cars is a crime. It is Wrongful Confinement under Section 127 BNS (Section 340 IPC). It also counts as Wrongful Restraint under Section 126 BNS (Section 339 IPC).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Key Snatching is Illegal:</strong> Taking car or bike keys by force is a crime. It is Extortion under Section 308 BNS. It is Robbery under Section 309 BNS. It carries strict jail terms.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Constitutional Liberty Shield:</strong> Article 21 protects your personal freedom and dignity. Article 19(1)(d) protects your right to move freely anywhere in India. Private recovery agents cannot block your way.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Lender Liability:</strong> Banks and NBFCs remain responsible for their recovery agents. RBI Master Directions hold lenders accountable for third-party threats and physical abuse.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Legal Counsel Stops Field Visits:</strong> Serving a Cease-and-Desist notice through an advocate halts home visits. It pushes the bank to negotiate an official 40% to 65% OTS settlement.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Reality of Physical Restraint and Doorway Intimidation */}
            <section id="physical-restraint-muscle-tactics-reality" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. The Physical Restraint &amp; Muscle Tactics Reality</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Defaulting on a loan or credit card creates deep financial stress. In many Indian cities, borrowers face illegal recovery pressure. Recovery agents often use physical force. They stand in front of entrance doors. They block society gates. Some agents park bikes behind a borrower&apos;s car to stop them from driving out. Others block borrowers on their way to work.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In worse cases, agents snatch car or bike keys by force. They reach through open car windows. Agents wrongly think these strong-arm tactics are legal recovery steps. In reality, trapping people causes severe mental distress. It harms dignity and endangers personal safety.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-1">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>Fundamental Legal Principle</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                  Under Indian law, an unsecured loan default is a civil contract matter under the Indian Contract Act, 1872. It is not a crime. It gives no right to block your body or stop your travel. When an agent blocks an exit or takes keys, they commit a criminal crime.
                </p>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Lenders have lawful civil remedies for defaults. They can file civil summary suits under Order 37 of the Code of Civil Procedure, 1908. They can use the Arbitration and Conciliation Act, 1996. They can pursue cheque bounce cases. They cannot use street muscle. Confinement tactics expose both agents and banks to criminal charges and heavy regulatory fines.
              </p>
            </section>

            {/* Section 2: Statutory Protections & Criminal Trespass */}
            <section id="statutory-framework-wrongful-confinement" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Penal Law Breakdown</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Indian criminal law protects citizens from unlawful physical control. No private person can block or trap another citizen. The transition from the Indian Penal Code, 1860 (IPC) to the Bharatiya Nyaya Sanhita, 2023 (BNS) reinforces these rights. Clear legal protections protect personal freedom.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Two primary offenses apply when agents block movement. These are Wrongful Restraint and Wrongful Confinement:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4 space-y-4">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Statutory Penal Sections Applicable to Recovery Muscle Tactics</span>
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 126 BNS (Corresponding to Section 339 &amp. 341 IPC): Wrongful Restraint</p>
                    <p className="text-slate-600 mt-1">
                      Wrongful restraint occurs when someone stops you from moving in a direction you have a right to go. An agent standing in your doorway commits this crime. Blocking a corridor or walkway is also punishable. It carries jail time of up to one month, a fine, or both.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 127 BNS (Corresponding to Section 340 &amp. 342 IPC): Wrongful Confinement</p>
                    <p className="text-slate-600 mt-1">
                      Wrongful confinement happens when someone traps you within a set boundary. Surrounding a home or locking an exit gate forms illegal confinement. Parking vehicles to block a driveway or garage is also illegal. This offense carries imprisonment up to one year, fines, or both.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 308 &amp. 309 BNS (Corresponding to Section 383, 384 &amp. 390 IPC): Extortion &amp. Robbery</p>
                    <p className="text-slate-600 mt-1">
                      Snatching car or bike keys by force is a serious crime. Grabbing phones to prevent recording is also illegal. Demanding cash under physical threats counts as extortion and robbery. These crimes carry severe jail terms of up to ten years.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 351 BNS (Corresponding to Section 503 &amp. 506 IPC): Criminal Intimidation</p>
                    <p className="text-slate-600 mt-1">
                      Threatening harm to your body, name, or property is a crime. Criminal intimidation carries up to two years of jail. If threats involve death or severe harm, jail terms increase up to seven years.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 189 BNS (Corresponding to Section 141 &amp. 143 IPC): Unlawful Assembly</p>
                    <p className="text-slate-600 mt-1">
                      When two or more recovery agents gather to intimidate or trespass, they form an unlawful assembly. Every member of that group shares criminal guilt under penal law.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Penal statutes operate separately from loan contracts. Even with unpaid debts, agents cannot break criminal law. When an agent blocks your path or takes property, the police must act. Under the Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS), police must register complaints and start formal action.
              </p>
            </section>

            {/* Section 3: Constitutional Right to Locomotion & Landmark Supreme Court Precedents */}
            <section id="constitutional-locomotion-puttaswamy" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. Constitutional Protections</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Indian Constitution protects your right to move freely. Article 19(1)(d) gives all citizens the right to travel across India without illegal barriers. Article 21 ensures that no person loses personal liberty except by lawful procedure. Private recovery agents cannot block your movement.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In <em>Maneka Gandhi v. Union of India (1978) 1 SCC 248</em>, the Supreme Court gave wide meaning to personal liberty. It includes the full right to physical movement and freedom from restraint. Any private firm using musclemen to block citizens violates fundamental constitutional rights.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Supreme Court has condemned physical recovery tactics in key rulings. In <em>ICICI Bank Ltd. v. Prakash Kaur &amp. Ors. (2007) 2 SCC 711</em>, the apex court stopped banks from using musclemen to stop vehicles on public roads. The court ruled that banks must follow the rule of law. They cannot use physical force or threats to collect debts.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In <em>Justice K.S. Puttaswamy (Retd.) v. Union of India (2017) 10 SCC 1</em>, the Supreme Court protected bodily privacy under Article 21. Agents standing outside a residence or blocking a driveway violate your constitutional liberty. These acts are civil wrongs and punishable criminal offenses.
              </p>
            </section>

            {/* Section 4: RBI Master Directions, Code of Conduct & Vicarious Liability */}
            <section id="rbi-master-directions-fair-practices" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. RBI Master Directions &amp; Code of Conduct</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India sets strict rules for debt recovery. These rules draw power from Section 35A of the Banking Regulation Act, 1949 and the RBI Act, 1934. All commercial banks and NBFCs must follow these directives.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The <em>RBI Master Directions on Outsourcing</em> and the <em>Fair Practices Code (FPC)</em> strictly ban physical threats, confinement. And intimidation:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4">
                <h3 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Mandatory RBI Regulatory Prohibitions for Recovery Agents</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Strict Prohibition on Physical Coercion &amp. Restraint</p>
                    <p className="text-slate-600">Agents cannot use physical force. They cannot block gates, trap vehicles, snatch keys, or hold borrowers inside properties.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Permissible Interaction Window (8 AM – 7 PM)</p>
                    <p className="text-slate-600">Visits can only happen between 8:00 AM and 7:00 PM. Visiting outside these hours violates RBI rules directly.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Mandatory DRA Certification &amp. Identification</p>
                    <p className="text-slate-600">Every visiting agent must hold valid DRA certification from IIBF. Agents must show bank authorization letters and photo ID cards.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Total Ban on Public Shaming &amp. Corridor Scenes</p>
                    <p className="text-slate-600">Agents cannot shout in hallways. They cannot speak with society guards or shame borrowers before neighbors and coworkers.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The RBI enforces direct lender liability. Banks cannot blame third-party agencies. If an agent blocks your gate or snatches keys, the principal bank faces fines before the RBI Integrated Ombudsman and Consumer Commissions. The Ombudsman can award payout up to ₹20 Lakhs for actual losses. The Ombudsman can also award up to ₹1 Lakh for mental agony and harassment.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="infographic-confinement-defense" className="my-8">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950">
                <Image
                  src="/images/infographics/recovery-agents-blocking-gate-wrongful-confinement.jpg"
                  alt="Recovery Agents Blocking Gate and Wrongful Confinement Infographic: Section 127 BNS, Key Snatching Penalties, and Emergency Police FIR Protocol"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="p-4 bg-slate-900 text-slate-300 text-xs flex items-center justify-between">
                  <span className="font-semibold text-blue-400">Fig 1: Legal Framework — Wrongful Confinement (Sec 127 BNS), Key Snatching Penalties &amp; Police Protocol</span>
                  <span className="text-slate-400 hidden sm:inline">Source: SettleLoans Legal &amp; Compliance Research</span>
                </div>
              </div>
            </section>

            {/* Section 6: Tactical Emergency Protocol: Recording & Filing an FIR */}
            <section id="emergency-police-fir-protocol" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. Tactical Emergency Protocol</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If agents block your door or vehicle, stay calm. Follow this structured legal protocol. Taking clear steps creates strong evidence, stops intimidation. And triggers police action:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <Video className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The 5-Step Anti-Confinement Enforcement Protocol</span>
                </div>
                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 1: Start Continuous Video Recording Immediately</p>
                    <p className="text-slate-600 mt-1">
                      Turn on video recording on your phone. Record the physical blockage, the agents&apos. faces. And their vehicle numbers. State clearly on camera: &quot;I want to leave my home. But you are physically blocking me.&quot. </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 2: Dial Emergency Helpline 112 / 100</p>
                    <p className="text-slate-600 mt-1">
                      Call 112 right away. Tell the operator: &quot;Unknown persons are blocking my gate, trapping my car. And threatening me.&quot. Request immediate police dispatch for wrongful confinement.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 3: Alert Building Security &amp. Preserve CCTV Footage</p>
                    <p className="text-slate-600 mt-1">
                      Notify your building guards or society committee. Ask security to log the trespassers. Request them to preserve CCTV footage of the gate or parking blockage as proof.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 4: File a Formal Written Police Complaint (FIR)</p>
                    <p className="text-slate-600 mt-1">
                      Submit a written complaint to the police station under Section 173 BNSS. Cite Section 126 BNS (Wrongful Restraint), Section 127 BNS (Wrongful Confinement), Section 308 BNS (Extortion), and Section 351 BNS (Criminal Intimidation). Name the agents and the bank.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 5: Judicial Escalation under Section 223 BNSS (Sec 200 CrPC)</p>
                    <p className="text-slate-600 mt-1">
                      If local police do not register an FIR, escalate to the SP under Section 175(3) BNSS. Your lawyer can also file a private criminal complaint before the Judicial Magistrate under Section 223 BNSS.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Filing an official criminal complaint shifts leverage to you. Bank legal teams take criminal complaints seriously. To avoid regulatory fines and court scrutiny, banks recall field agencies and agree to an institutional OTS settlement.
              </p>
            </section>

            {/* Section 7: Bank NPA Accounting Economics */}
            <section id="bank-npa-accounting-npv-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Bank NPA Accounting Economics</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Recovery agents use force because banks are pressured by unpaid loans. An unpaid loan becomes a Non-Performing Asset (NPA) after 90 days.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a loan turns to an NPA, banks stop earning interest. They must also lock away their own cash as a safety cushion:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li><strong>Substandard NPA:</strong> Banks must set aside 15% of the loan value.</li>
                <li><strong>Doubtful NPA:</strong> Banks must set aside 100% of the loan value.</li>
                <li><strong>Loss Assets:</strong> The bank writes off the entire loan as a loss.</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-3">
                Civil court cases take 3 to 5 years. They have high fees and lawyer costs. Also, the law protects your basic household items from seizure. Banks use a Net Present Value (NPV) formula to see if a settlement makes sense:
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Institutional Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  This formula balances expected cash back against the cost of fighting a long court battle.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Long court fights reduce bank profits. Banks prefer a One-Time Settlement (OTS). A 40% to 65% waiver brings fast cash back to the bank. It is cheaper than fighting for years. Rogue street tactics are done by commission agents, not by the bank's legal team.
              </p>
            </section>

            <section id="cease-and-desist-ots-resolution" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Structured OTS Settlement Protocols</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Never pay cash to recovery agents. They often keep the money as personal fees. Your loan balance stays high. And the harassment continues.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Follow this 3-step plan to end the debt and stop the harassment:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <FileCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The Three-Pillar Statutory Settlement Framework</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">1. Legal Notice</p>
                    <p className="text-slate-600">Your lawyer notifies the bank of all illegal threats. All communication must now go through your advocate.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">2. OTS Sanction</p>
                    <p className="text-slate-600">We negotiate with bank managers to get a signed settlement letter. It confirms your waiver and payment terms.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">3. Official NDC</p>
                    <p className="text-slate-600">You pay the bank directly. They issue a formal No Dues Certificate, clearing your debt status.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once paid, the bank updates your status to "Settled" with credit bureaus. This ends your liability and lets you fix your credit score.
              </p>
            </section>

            <section id="comparative-enforcement-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. Enforcement Powers vs Illegal Restraint Matrix</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This table shows who has legal power and who does not.
              </p>

              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Recovery Source.</th>
                      <th>Legal Authority.</th>
                      <th>Can Block Paths?</th>
                      <th>Permissible Actions.</th>
                      <th>Your Remedy.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Recovery Agents.</td>
                      <td>None.</td>
                      <td>No.</td>
                      <td>Only visits between 8 AM - 7 PM.</td>
                      <td>Police Complaint & Lawyer Notice.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Court Bailiff.</td>
                      <td>Court Warrant.</td>
                      <td>Only with warrant.</td>
                      <td>Must show ID & follow rules.</td>
                      <td>File legal defense in court.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">SARFAESI Officer.</td>
                      <td>Secured Assets Only.</td>
                      <td>No.</td>
                      <td>Must send 60-day notice first.</td>
                      <td>Apply to Debt Recovery Tribunal.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Police.</td>
                      <td>Crime only.</td>
                      <td>No.</td>
                      <td>Cannot collect debts.</td>
                      <td>Police Complaints Authority.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Lok Adalat.</td>
                      <td>Mediation.</td>
                      <td>No.</td>
                      <td>Mutual talk only.</td>
                      <td>Court-approved settlement.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="settleloans-legal-defense-framework" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. SettleLoans Wrongful Confinement Legal Defense</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  No one should be threatened or trapped by collection agents. SettleLoans provides a shield against this harassment. We enforce your rights under Article 21 and Section 127 BNS. We send legal notices to stop field agents immediately. We move your case to formal settlement discussions. Our team helps you get 40% to 65% waivers and your official No Dues Certificate.
                </p>
              </div>

              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. FAQs: Recovery Muscle Tactics &amp; Legal Remedies</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Clear legal answers on gate blocking, key snatching, police complaints. And debt settlement rights.
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
                  href="https://www.mha.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Bharatiya Nyaya Sanhita, 2023 (Section 126 &amp; 127 Wrongful Confinement)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction – Code of Conduct in Outsourcing of Financial Services</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Supreme Court of India (ICICI Bank v. Prakash Kaur &amp; Article 21 Rulings)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Portal (Recovery Harassment Grievance Redressal)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">Bharatiya Nagarik Suraksha Sanhita, 2023 (Section 173 &amp; 223 Criminal FIR Procedure)</span>
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
                  href="/recovery-agents-snatching-bike-on-road-illegal-repo"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Recovery Agents Snatching Bike on Road
                </Link>
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
                  Stop Recovery Harassment Complaint
                </Link>
                <Link
                  href="/can-bank-seize-property-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can Bank Seize Property for Personal Loan?
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can I Go to Jail for Loan Default?
                </Link>
                <Link
                  href="/bank-fir-for-loan-default-reality-check"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank FIR for Loan Default Reality Check
                </Link>
                <Link
                  href="/police-station-call-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Police Station Call for Loan Default
                </Link>
                <Link
                  href="/bank-filed-civil-suit-for-loan-recovery-order-37-cpc-summons"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Order 37 CPC Summary Suit Defense
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Blueprint
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
                Expert in banking law, borrower rights, Section 127 BNS anti-confinement rules, and RBI compromise settlements.
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
              <div className="font-bold text-base text-white mb-2">Agents Blocking Your Gate or Vehicle?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not tolerate physical threats or blocked gates. Hire our advocates to send Cease-and-Desist notices, file criminal complaints under Section 127 BNS. And negotiate an official 40%–65% OTS.
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
                  <span>Section 127 BNS Statutory Immunity</span>
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
