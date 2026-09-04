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
    answer: "Yes, it is strictly illegal and constitutes a cognizable criminal offense. Standing physically in a doorway to prevent entry or exit is classified as Wrongful Restraint under Section 126 of the Bharatiya Nyaya Sanhita, 2023 (Section 339 IPC) and Wrongful Confinement under Section 127 BNS (Section 340 IPC). Recovery agents have no statutory authority to obstruct your personal movement."
  },
  {
    name: "What should I do if a collection agent blocks my car or bike from leaving parking?",
    answer: "Immediately activate video recording on your smartphone to capture the agent's face, vehicle registration, and the physical obstruction. Clearly state on video that they are unlawfully restricting your constitutional right to locomotion. Dial 112 to request urgent police dispatch for criminal restraint, and avoid escalating into physical violence."
  },
  {
    name: "Can recovery agents snatch or confiscate my vehicle or house keys by force?",
    answer: "No. Forcibly snatching keys from your hand or vehicle ignition is an act of criminal force and theft under Section 303 BNS (Section 379 IPC) and extortion under Section 308 BNS (Section 383 IPC). If accompanied by threats or physical intimidation, it amounts to robbery under Section 309 BNS (Section 390 IPC), which is a serious non-bailable offense."
  },
  {
    name: "What criminal sections apply to recovery agents using physical muscle tactics?",
    answer: "Key statutory sections include Section 126 BNS (Wrongful Restraint), Section 127 BNS (Wrongful Confinement), Section 351 BNS (Criminal Intimidation), Section 308 BNS (Extortion), Section 189 BNS (Unlawful Assembly if two or more agents participate), and Section 329 BNS (Criminal Trespass on private residential premises)."
  },
  {
    name: "How do I file a police FIR against recovery agents for wrongful confinement?",
    answer: "Submit a written complaint to the Station House Officer (SHO) under Section 173 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS) detailing the date, time, physical obstruction, lender name, agency details, and attach video evidence. If the local station refuses registration, escalate to the Superintendent of Police under Section 175(3) BNSS or file an application before the Judicial Magistrate under Section 223 BNSS."
  },
  {
    name: "Are banks and NBFCs legally responsible for the criminal acts of their outsourced agents?",
    answer: "Yes. Under the RBI Master Directions on Outsourcing and vicarious liability doctrines affirmed by the Supreme Court in ICICI Bank v. Prakash Kaur, regulated entities bear direct legal accountability for harassment, intimidation, and unlawful confinement committed by their recovery contractors."
  },
  {
    name: "Can a bank repossess a vehicle on the road without judicial process or court orders?",
    answer: "No. The Supreme Court has repeatedly ruled that extra-judicial repossessions using musclemen on public roads are illegal. For secured vehicle loans, lenders must follow due process, serve formal pre-seizure notices, provide statutory cure periods, and inventory repossessed goods through lawful mechanisms."
  },
  {
    name: "How does appointing a debt settlement advocate stop physical harassment?",
    answer: "A debt settlement advocate executes a formal Vakalatnama and serves a statutory Cease-and-Desist notice upon the bank's board and nodal officers. Under RBI Fair Practices Code, once legal representation is established, lenders must cease uninvited field visits and route all communication exclusively through legal counsel for structured compromise negotiations."
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
          "reviewBody": "Three collection agents parked their motorcycles directly behind my car in my apartment basement, preventing me from driving to work. SettleLoans advocates helped me file an immediate police complaint under Section 127 BNS for wrongful confinement and served a Cease-and-Desist notice to the bank. The bank recalled the agency immediately and settled my ₹8.5 Lakh loan at a 55% waiver.",
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
          "reviewBody": "A recovery agent stood in the doorway of my residence and physically blocked my mother from stepping outside. SettleLoans stepped in within hours, citing Supreme Court rulings on Article 21 and Section 126 BNS. The lender issued a written apology, stopped all field visits, and structured a manageable compromise settlement.",
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
          "reviewBody": "When two agents snatched my motorcycle keys outside my office, SettleLoans guided me through filing a criminal complaint for extortion under Section 308 BNS. Their legal mastery turned the tables on the aggressive recovery agency, leading to complete relief and a clean No Dues Certificate.",
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
          "reviewBody": "Ashish Jhangra and his legal team provided exceptional guidance on wrongful restraint laws. They proved that loan default is purely a civil matter and that physical muscle tactics are punishable crimes. Their intervention gave my family back our peace of mind and settled my debts with dignity.",
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
                  <span><strong>Cognizable Criminal Offense:</strong> Physically obstructing a doorway or blocking a vehicle constitutes Wrongful Confinement under Section 127 BNS (Section 340 IPC) and Wrongful Restraint under Section 126 BNS (Section 339 IPC).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Vehicle Key Snatching is Extortion &amp; Robbery:</strong> Forcibly seizing car or motorcycle keys is punishable under Section 308 BNS (Extortion) and Section 309 BNS (Robbery), carrying rigorous imprisonment.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Constitutional Liberty Shield:</strong> Article 21 of the Constitution guarantees personal liberty and bodily autonomy, while Article 19(1)(d) guarantees unrestricted freedom of movement across India without private commercial hindrance.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Lender Vicarious Liability:</strong> Banks and NBFCs cannot disown third-party collection agencies; under RBI Master Directions and apex court rulings, lenders face severe regulatory fines and criminal abetment scrutiny.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Legal Representation Halts Physical Visits:</strong> Serving a formal Cease-and-Desist notice through an appointed advocate legally compels the bank to withdraw field agencies and negotiate an institutional 40% to 65% OTS.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Reality of Physical Restraint and Doorway Intimidation */}
            <section id="physical-restraint-muscle-tactics-reality" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. The Physical Restraint &amp; Muscle Tactics Reality: Deconstructing Extra-Judicial Coercion
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Defaulting on a retail loan, revolving credit card balance, or business credit line is an intensely challenging economic hardship. However, across residential colonies, apartment complexes, and office parks in India, distressed borrowers increasingly encounter aggressive, high-pressure field collection tactics that cross all statutory boundaries. Third-party recovery agents frequently resort to physical muscle tactics: standing menacingly in front of main entrance doors, blocking residential gates, parking their two-wheelers behind a borrower&apos;s car in a basement driveway to prevent departure, or physically intercepting borrowers as they attempt to leave for work.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In severe instances, overzealous collection personnel snatch vehicle ignition keys from a borrower&apos;s hands or reach through car windows to extract the keys by force. These agents mistakenly operate under the belief that physical obstruction, public intimidation, and trapping individuals within an enclosed space are legitimate debt recovery techniques. For the borrower and their family members, such confrontations create overwhelming psychological trauma, intense public embarrassment, and genuine terror for personal safety.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-1">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>Fundamental Legal Principle</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                  Under Indian jurisprudence, an unsecured loan default is exclusively a civil contractual breach governed by the Indian Contract Act, 1872. It is not a crime, nor does it create any physical lien over a citizen&apos;s bodily liberty or freedom of movement. The moment a recovery agent physically blocks an exit, touches a vehicle, or takes keys, they forfeit all commercial legitimacy and commit punishable penal crimes.
                </p>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Lenders have legally established judicial remedies for financial defaults, such as filing summary recovery suits under Order 37 of the Code of Civil Procedure, 1908, initiating arbitration under the Arbitration and Conciliation Act, 1996, or pursuing negotiable instrument remedies. When recovery agencies abandon the rule of law to deploy street-level confinement, they expose themselves and their principal lending institutions to severe criminal prosecution and crippling regulatory damages.
              </p>
            </section>

            {/* Section 2: Statutory Protections & Criminal Trespass */}
            <section id="statutory-framework-wrongful-confinement" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Penal Law Breakdown: Section 126 &amp; 127 BNS vs. Section 339 &amp; 340 IPC
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Indian criminal law strictly prohibits any private individual from restraining or confining another citizen against their will. With the complete operational transition from the Indian Penal Code, 1860 (IPC) to the Bharatiya Nyaya Sanhita, 2023 (BNS), the statutory protections against unlawful physical obstruction have been reaffirmed and fortified under modern procedural standards.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Understanding the precise legal definitions between Wrongful Restraint and Wrongful Confinement is critical for drafting unassailable police complaints and judicial petitions:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4 space-y-4">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Statutory Penal Sections Applicable to Recovery Muscle Tactics</span>
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 126 BNS (Corresponding to Section 339 &amp; 341 IPC): Wrongful Restraint</p>
                    <p className="text-slate-600 mt-1">
                      Whoever voluntarily obstructs any person so as to prevent that person from proceeding in any direction in which that person has a right to proceed is guilty of wrongful restraint. When a collection agent stands in front of your doorway, blocks a corridor, or prevents you from walking down the street, they commit a cognizable offense punishable with imprisonment up to one month, a fine, or both.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 127 BNS (Corresponding to Section 340 &amp; 342 IPC): Wrongful Confinement</p>
                    <p className="text-slate-600 mt-1">
                      Whoever wrongfully restrains any person in such a manner as to prevent that person from proceeding beyond certain circumscribing limits commits wrongful confinement. When agents surround a house, block the only exit gate of a society, park vehicles to trap a borrower inside a garage, or lock gates, they create an unlawful perimeter of confinement, punishable with imprisonment up to one year, substantial fines, or both.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 308 &amp; 309 BNS (Corresponding to Section 383, 384 &amp; 390 IPC): Extortion &amp; Robbery</p>
                    <p className="text-slate-600 mt-1">
                      Forcibly snatching car or bike keys, seizing mobile phones to stop recording, or demanding immediate cash or digital transfers under the threat of physical restraint or social humiliation constitutes the grave offenses of extortion and robbery, attracting rigorous imprisonment of up to ten years.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 351 BNS (Corresponding to Section 503 &amp; 506 IPC): Criminal Intimidation</p>
                    <p className="text-slate-600 mt-1">
                      Threatening a borrower with injury to their person, reputation, or property during a physical confrontation carries imprisonment of up to two years, which extends to seven years if the threat involves grievous hurt or death.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 189 BNS (Corresponding to Section 141 &amp; 143 IPC): Unlawful Assembly</p>
                    <p className="text-slate-600 mt-1">
                      When two or more recovery agents assemble outside a residential building with the common object of committing criminal trespass, wrongful restraint, or enforcing an alleged right through physical intimidation, every member of that assembly is criminally liable under penal law.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                These penal statutes operate independently of any financial dispute. Even if a loan has been categorized as a total default, no lender or outsourced agent acquires the legal authority to override criminal law. The moment an agent blocks a physical path or confiscates personal property, police officers are legally mandated under the Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS) to accept criminal complaints and take prompt cognizable action.
              </p>
            </section>

            {/* Section 3: Constitutional Right to Locomotion & Landmark Supreme Court Precedents */}
            <section id="constitutional-locomotion-puttaswamy" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Constitutional Protections: Article 21, Personal Liberty &amp; Supreme Court Jurisprudence
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The right of an Indian citizen to move freely and live without unlawful physical interference is anchored in the foundational constitutional architecture of the Republic of India. Article 19(1)(d) guarantees to all citizens the fundamental right to move freely throughout the territory of India, while Article 21 guarantees that no person shall be deprived of their life or personal liberty except according to procedure established by law.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In the historic ruling of <em>Maneka Gandhi v. Union of India (1978) 1 SCC 248</em>, the Supreme Court established that the expression &apos;personal liberty&apos; in Article 21 is of the widest amplitude, encompassing the absolute right to locomotion and freedom from physical restraint. Any unauthorized restriction on a citizen&apos;s physical mobility imposed by a private corporate entity or its hired musclemen represents a direct assault on constitutional liberty.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Supreme Court has directly addressed and dismantled the practice of physical recovery harassment in several landmark banking judgments. In <em>ICICI Bank Ltd. v. Prakash Kaur &amp; Ors. (2007) 2 SCC 711</em>, the apex court expressed profound indignation over commercial banks employing musclemen to forcibly intercept vehicles and intimidate borrowers on public roads. The Supreme Court laid down an unequivocal principle: banks and financial institutions are bound by the rule of law and cannot deploy extra-judicial force, intimidation, or coercive physical recovery under the pretext of loan collection.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This was further reinforced in <em>Manager, ICICI Bank Ltd. v. Prakash Kaur</em> and subsequent directives where the courts observed that recovery agents who use physical intimidation, block vehicles, or snatch keys commit grave tortious and criminal acts. In the nine-judge Constitution Bench decision in <em>Justice K.S. Puttaswamy (Retd.) v. Union of India (2017) 10 SCC 1</em>, the Supreme Court ruled that spatial privacy and bodily integrity are inviolable aspects of Article 21. When agents position themselves outside a home or block a private driveway, they violate the borrower&apos;s constitutionally protected sphere of autonomy.
              </p>
            </section>

            {/* Section 4: RBI Master Directions, Code of Conduct & Vicarious Liability */}
            <section id="rbi-master-directions-fair-practices" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. RBI Master Directions &amp; Code of Conduct: Absolute Ban on Physical Intimidation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India, acting under statutory powers conferred by Sections 21, 35A, and 45L of the Banking Regulation Act, 1949, and the Reserve Bank of India Act, 1934, has established strict, non-negotiable codes of conduct governing all Regulated Entities (REs)—including Commercial Banks, Small Finance Banks, and Non-Banking Financial Companies (NBFCs).
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Codified within the <em>Master Direction – Reserve Bank of India (Managing Risks and Code of Conduct in Outsourcing of Financial Services by Regulated Entities) Directions</em> and the <em>Master Circular on Fair Practices Code (FPC)</em>, the central bank has imposed absolute prohibitions on any form of physical, verbal, or psychological intimidation:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4">
                <h4 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Mandatory RBI Regulatory Prohibitions for Recovery Agents</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Strict Prohibition on Physical Coercion &amp; Restraint</p>
                    <p className="text-slate-600">Agents are explicitly barred from using physical force, blocking gates, obstructing vehicles, taking keys, or trapping borrowers within residential or office premises.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Permissible Interaction Window (8 AM – 7 PM)</p>
                    <p className="text-slate-600">Field visits and communications are strictly confined between 8:00 AM and 7:00 PM. Visiting outside these statutory hours is a direct regulatory violation.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Mandatory DRA Certification &amp; Identification</p>
                    <p className="text-slate-600">Every visiting agent must hold valid Debt Recovery Agent (DRA) certification accredited by IIBF, carry bank-issued authorization letters, and display official agency ID.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Total Ban on Public Shaming &amp; Corridor Scenes</p>
                    <p className="text-slate-600">Agents are forbidden from shouting in residential corridors, interacting with apartment security, or embarrassing borrowers in front of neighbors or colleagues.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Crucially, the Reserve Bank of India has established the principle of direct vicarious liability. Lending institutions cannot shield themselves behind independent agency contracts or blame overzealous field staff. If an outsourced recovery contractor commits wrongful confinement or key snatching, the principal bank is held directly liable before the RBI Integrated Ombudsman and Consumer Disputes Redressal Commissions. The Ombudsman possesses the statutory authority to impose hefty financial penalties on the bank, award up to ₹20 Lakhs in compensation for consequential damages, and grant up to ₹1 Lakh specifically for mental agony and harassment.
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
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Tactical Emergency Protocol: How to Record Evidence &amp; File a Criminal FIR
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When faced with physical obstruction, gate blocking, or key snatching by recovery personnel, maintaining absolute composure while executing a disciplined legal protocol is vital. Knowing the exact sequence of actions neutralizes the intimidation, establishes unshakeable digital evidence, and triggers statutory law enforcement mechanisms:
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
                      Activate video recording on your smartphone. Clearly capture the physical obstruction (agents standing across the doorway, blocking vehicles, or holding keys). Record the agents&apos; faces, vehicle number plates, and the exact words spoken. State clearly on camera: &quot;I am attempting to leave my property, and you are physically obstructing me.&quot;
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 2: Dial Emergency Helpline 112 / 100</p>
                    <p className="text-slate-600 mt-1">
                      Call 112 immediately and state: &quot;Unknown individuals are physically blocking my gate, obstructing my vehicle, and threatening my safety at my residence.&quot; Request immediate police PCR dispatch for cognizable wrongful confinement.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 3: Alert Building Security &amp; Preserve CCTV Footage</p>
                    <p className="text-slate-600 mt-1">
                      Inform your residential society or commercial complex management. Request building security to document the unauthorized trespassers and preserve security CCTV footage of the basement or gate obstruction as corroborative evidence.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 4: File a Formal Written Police Complaint (FIR)</p>
                    <p className="text-slate-600 mt-1">
                      Submit a formal written complaint to the local police station under Section 173 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS). Specifically cite Section 126 BNS (Wrongful Restraint), Section 127 BNS (Wrongful Confinement), Section 308 BNS (Extortion), and Section 351 BNS (Criminal Intimidation). Name the recovery agents, collection agency, and the principal lending bank.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 5: Judicial Escalation under Section 223 BNSS (Sec 200 CrPC)</p>
                    <p className="text-slate-600 mt-1">
                      If local police officers hesitate to register an FIR due to false claims that loan disputes are civil matters, instruct your legal advocate to escalate the complaint in writing to the Deputy Commissioner / Superintendent of Police under Section 175(3) BNSS, or file a direct criminal complaint before the Judicial Magistrate First Class under Section 223 BNSS.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By establishing an active criminal complaint against the recovery agency and the lending bank, the legal balance changes dramatically. Bank legal departments prioritize mitigating criminal exposure and regulatory reprimands, creating immense leverage for immediate file recall and favorable financial settlement.
              </p>
            </section>

            {/* Section 7: Bank NPA Accounting, Provisioning Burdens & The NPV Recovery Model */}
            <section id="bank-npa-accounting-npv-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Bank NPA Accounting Economics: Provisioning Burdens &amp; The NPV Recovery Formula
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To understand why collection agencies resort to aggressive, desperate street-level tactics rather than pursuing formal court litigation, one must examine the institutional accounting mathematics governing non-performing loans in Indian banking. Under the Reserve Bank of India Prudential Norms on Income Recognition, Asset Classification and Provisioning, an unsecured retail loan or credit card facility is categorized as a Non-Performing Asset (NPA) once repayments remain delinquent for more than 90 days.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once an account enters NPA status, the bank is legally prohibited from recognizing accrued interest as income. More severely, the bank must set aside substantial capital reserves out of its operating profits as mandatory regulatory provisions:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li><strong>Substandard NPA (Up to 12 Months Overdue):</strong> Mandatory 15% provisioning on total unsecured exposure.</li>
                <li><strong>Doubtful NPA - Category 1 (12 to 24 Months Overdue):</strong> Mandatory 100% provisioning on the entire unsecured balance.</li>
                <li><strong>Loss Assets / Written-Off Portfolio:</strong> 100% full balance sheet write-off against the institution&apos;s bottom line.</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-3">
                If a bank files a civil recovery suit in a District Commercial Court to pursue an unsecured loan of ₹5 Lakhs to ₹25 Lakhs, it incurs upfront non-refundable court fees (1% to 3%), heavy advocate retainers, and 3 to 5 years of procedural litigation friction. Because domestic items, family vehicles under lien, and basic livelihood assets cannot be summarily attached under Section 60 of the Code of Civil Procedure, the net financial yield from litigation is heavily negative. Institutional credit risk committees evaluate settlement viability using a Net Present Value (NPV) recovery formula:
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
                Because prolonged litigation and criminal liabilities produce a deeply diminished Net Present Value, lending institutions are commercially incentivized to approve a negotiated One-Time Settlement (OTS). By sanctioning a 40% to 65% principal waiver, the lender recovers immediate cash liquidity, eliminates toxic assets from its balance sheet, and releases locked regulatory provisions back into quarterly net profits. Muscle tactics and physical obstruction are simply unauthorized, low-cost gambits deployed by third-party commission agents before the loan file is escalated to the bank&apos;s formal compromise settlement committee.
              </p>
            </section>

            {/* Section 8: Direct OTS Negotiation, Cease-and-Desist Notices & NDC */}
            <section id="cease-and-desist-ots-resolution" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Structured OTS Settlement Protocols: Cease-and-Desist Notices, Sanction Letters &amp; NDC
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A dangerous mistake made by borrowers trapped by recovery agents is making hasty token cash payments or direct UPI transfers to visiting agents to defuse immediate physical confrontations. Such informal payments are never credited toward loan principal closure; instead, agencies allocate them toward inflated penal charges and collection commissions, leaving the core default active and ensuring repeated harassment within weeks.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To achieve permanent legal relief, terminate all physical harassment, and legally extinguish the debt liability, borrowers must follow an institutional three-pillar resolution framework:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <FileCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The Three-Pillar Statutory Settlement Framework</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">1. Statutory Cease-and-Desist</p>
                    <p className="text-slate-600">A formal legal notice served by an appointed advocate upon the bank&apos;s Board, Principal Nodal Officer, and Collection Head, placing on record criminal obstruction acts and demanding all dialogue be routed exclusively through legal counsel.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">2. Formal Bank OTS Sanction Letter</p>
                    <p className="text-slate-600">Direct institutional negotiation securing an authentic settlement sanction letter on official bank letterhead, containing specific waiver percentages, precise payment milestones, and zero ambiguity.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">3. Bank-Stamped NDC &amp; CIBIL Update</p>
                    <p className="text-slate-600">Direct payment deposited exclusively into the registered loan account, followed by mandatory issuance of a stamped No Dues Certificate (NDC) under RBI Circular RBI/2023-24/60 and bureau reporting.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once the settlement amount is paid and the official No Dues Certificate is issued, the lender reports the account status to credit information companies (CIBIL, Experian, CRIF High Mark, Equifax) as &quot;Settled&quot; or &quot;Post-Write-Off Settled&quot;. This completely terminates all legal liabilities, removes any risk of future recovery visits, and provides a clear foundation for systematic credit rebuilding.
              </p>
            </section>

            {/* Section 9: Comparative Legal Matrix */}
            <section id="comparative-enforcement-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Comparative Legal Matrix: Recovery Channels, Physical Powers &amp; Legal Remedies
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The comparative matrix below details the statutory boundaries, physical restraint authority, and borrower legal protections across various debt recovery and judicial enforcement mechanisms in India:
              </p>

              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Recovery / Enforcement Mechanism</th>
                      <th>Statutory Authority</th>
                      <th>Power to Block Movement or Seize Keys</th>
                      <th>Permissible Physical Conduct</th>
                      <th>Borrower Statutory Legal Remedies</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Third-Party Recovery Agents</td>
                      <td>Private Agency SLA (Zero Statutory / Police Powers)</td>
                      <td><strong>Absolute Zero</strong> (Punishable under Sec 126 &amp; 127 BNS)</td>
                      <td>Strictly 8 AM to 7 PM; No physical contact, shouting, blocking, or key seizure</td>
                      <td>Police FIR (Sec 127/308/351 BNS), RBI Ombudsman complaint, Cease-and-Desist notice</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Civil Court Execution Bailiff</td>
                      <td>Order XXI Code of Civil Procedure, 1908</td>
                      <td><strong>Only under Specific Judicial Execution Warrant</strong></td>
                      <td>Must produce court identity and execute warrants adhering to Section 60 CPC exemptions</td>
                      <td>Leave to Defend, Stay of Execution, Application under Order XXI Rule 58 CPC</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">SARFAESI Authorized Officer</td>
                      <td>Securitisation Act, 2002 (Secured Assets Only)</td>
                      <td><strong>Zero for unsecured loans</strong>; Secured property only via DM/CMM order</td>
                      <td>Mandatory 60-day Section 13(2) notice and formal Panchnama possession inventory</td>
                      <td>Section 17 Securitisation Application before the Debts Recovery Tribunal (DRT)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Traffic / State Police Personnel</td>
                      <td>Motor Vehicles Act, 1988 / BNSS, 2023</td>
                      <td><strong>Only for Law Enforcement / Traffic Offenses</strong></td>
                      <td>Cannot act as private debt recovery agents or confiscate keys for bank loan defaults</td>
                      <td>Complaint to Police Complaints Authority (PCA), High Court Writ under Article 226</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">National Lok Adalat Bench</td>
                      <td>Legal Services Authorities Act, 1987</td>
                      <td><strong>None</strong> (Consensual, Pre-Litigation Mediation Forum)</td>
                      <td>Zero field visits or physical enforcement; Purely institutional conciliation</td>
                      <td>Mutually negotiated compromise settlement decree with complete civil finality</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense Framework */}
            <section id="settleloans-legal-defense-framework" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Defense Framework: Shielding Your Liberty &amp; Resolving Debts
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  No citizen should ever be subjected to unlawful physical confinement, gate blocking, vehicle immobilization, or public humiliation by aggressive debt collection personnel. At SettleLoans, our senior banking advocates, criminal defense litigators, and institutional financial negotiators provide an impenetrable shield of legal protection for borrowers across India. We immediately assert your constitutional rights under Article 21, enforce penal protections under Section 127 BNS, and serve formal Vakalatnama Cease-and-Desist notices that legally compel banks to recall rogue field agencies. By transitioning the conflict from street-level coercion to structured executive OTS negotiations, we secure authentic 40% to 65% principal waivers and verified No Dues Certificates.
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
                  11. Frequently Asked Questions: Recovery Muscle Tactics &amp; Legal Remedies
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Comprehensive, expert legal answers regarding wrongful restraint, gate blocking, key snatching, police complaints, and institutional loan settlement.
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
                  <h4 className="font-bold text-slate-900 text-sm">
                    <Link href="/authors/ashish-jhangra" className="hover:text-[#1F5EFF] transition-colors">
                      Ashish Jhangra
                    </Link>
                  </h4>
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Distinguished authority in banking jurisprudence, civil liberties against unlawful recovery agent intimidation, criminal wrongful confinement protections under Section 127 BNS, and RBI compromise settlement frameworks.
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
              <h4 className="font-bold text-base text-white mb-2">Agents Blocking Your Gate or Vehicle?</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not endure unlawful physical confinement or key snatching threats. Retain our senior advocates to issue immediate Cease-and-Desist notices, file criminal complaints under Section 127 BNS, and negotiate an institutional 40%–65% OTS.
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
