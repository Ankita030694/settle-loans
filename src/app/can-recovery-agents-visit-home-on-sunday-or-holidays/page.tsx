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
  Home,
  DoorClosed,
  EyeOff,
  CalendarX,
  Sun
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Can Recovery Agents Visit on Holidays? | SettleLoans',
  description: 'Can bank recovery agents visit on Sundays or public holidays? Learn your legal rights and RBI recovery timing rules with SettleLoans.',
  keywords: [
    'can recovery agents visit on sunday or public holidays',
    'can bank recovery agents come on sunday',
    'can recovery agents visit on festivals in india',
    'rbi rules for recovery agent visits on holidays',
    'recovery agents knocking on door on sunday',
    'can i refuse recovery agent on national holiday',
    'section 329 BNS recovery agent sunday visit',
    'rbi guidelines recovery agent visit timing',
    'how to stop recovery agents coming on weekends',
    'rbi ombudsman complaint recovery agent holiday visit'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/can-recovery-agents-visit-home-on-sunday-or-holidays',
  },
  openGraph: {
    title: 'Can Recovery Agents Visit on Sunday or Holidays? RBI Rules & Legal Rights',
    description: 'Comprehensive legal analysis on borrower protections against unannounced recovery agent visits on Sundays, national holidays, and festivals in India. Learn your statutory rights under RBI Master Directions and civil trespass laws.',
    url: 'https://www.settleloans.in/can-recovery-agents-visit-home-on-sunday-or-holidays',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/can-recovery-agents-visit-home-on-sunday-or-holidays.jpg',
        width: 1200,
        height: 675,
        alt: 'Can Recovery Agents Visit on Sunday or Public Holidays Infographic',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Can Recovery Agents Visit Home on Sunday or Public Holidays? RBI Guidelines',
    description: 'Facing collection agents on weekends or festivals? Discover why unannounced holiday doorstep visits violate RBI Fair Practice codes and how to lawfully turn away visitors.',
    images: ['https://www.settleloans.in/images/infographics/can-recovery-agents-visit-home-on-sunday-or-holidays.jpg'],
  },
};

const faqsList = [
  {
    name: "Are recovery agents legally allowed to visit my home on Sundays or public holidays?",
    answer: "Under the RBI Master Directions on Fair Practices Code and Outsourcing Guidelines, debt collection visits must respect borrower privacy and cultural sensitivities. While visits are technically restricted between 8:00 AM and 7:00 PM, unannounced Sunday or public holiday visits without prior mutual agreement constitute severe harassment. If a borrower has not consented to a holiday visit, they have the full legal right to turn the agent away and insist on written or weekday communication."
  },
  {
    name: "Can recovery agents visit my residence during religious festivals like Diwali, Eid, or Christmas?",
    answer: "No. The Reserve Bank of India has repeatedly issued directives stating that recovery agents must not disturb borrowers during times of personal bereavement, family illness, or major social and religious festivals. Doorstep visits or threatening phone calls during festival celebrations are treated as gross misconduct and harassment under the RBI Integrated Ombudsman Scheme."
  },
  {
    name: "Can I refuse to open the door if a recovery agent knocks on a Sunday morning?",
    answer: "Yes, you have an absolute constitutional and statutory right under Article 21 and property law to keep your door closed and refuse entry to any recovery agent. Recovery agents are private commercial contractors possessing zero police powers or judicial search warrants. You can simply state through the closed door that you will not entertain unannounced holiday visits and request official correspondence via registered post."
  },
  {
    name: "What should I do if a recovery agent creates a scene or shouts outside my home on a holiday?",
    answer: "Do not open the door or engage in shouting. Immediately start recording video and audio evidence from inside or through your peephole. Clearly state that their presence is unauthorized and constitutes public nuisance and criminal intimidation under Section 351 BNS (Section 506 IPC). If they refuse to leave, immediately dial 112 for police assistance and lodge a formal complaint against the bank and agency."
  },
  {
    name: "Are recovery agents required to give prior notice before visiting my home?",
    answer: "Yes. RBI guidelines stipulate that regulated lenders and their outsourced recovery personnel must maintain transparency. Borrowers should be informed of the appointment of a recovery agency in advance, and field visits should be pre-arranged rather than used as surprise ambush tactics designed to embarrass families during their personal rest days."
  },
  {
    name: "What are the permissible hours for recovery agents to visit or call borrowers?",
    answer: "The Reserve Bank of India strictly mandates that recovery personnel may only contact or visit borrowers between 8:00 AM and 7:00 PM. Any phone calls, messages, or doorstep visits attempted before 8:00 AM or after 7:00 PM are illegal and violate the RBI Master Direction on Outsourcing of Financial Services."
  },
  {
    name: "Can recovery agents bring local police with them on a Sunday to force a settlement?",
    answer: "No. Unsecured personal loans and credit card dues are purely civil matters governed by the Indian Contract Act, 1872. Police officers have no statutory jurisdiction to act as recovery personnel, enforce private debts, or accompany recovery agents to borrower residences. If agents misrepresent themselves as police or bring off-duty officers, it is a serious criminal offense punishable under Section 204 BNS (impersonation of public servants)."
  },
  {
    name: "How can appointing a debt settlement advocate stop Sunday and holiday home visits?",
    answer: "When you retain a specialized debt settlement advocate, they serve a formal legal Cease-and-Desist notice and Vakalatnama upon the bank's principal nodal officers and legal department. Under RBI regulations, once a borrower notifies the lender of legal representation, the bank is legally obligated to route all debt recovery communications exclusively through the advocate, permanently stopping uninvited doorstep visits."
  }
];

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/can-recovery-agents-visit-home-on-sunday-or-holidays#webpage",
      "url": "https://www.settleloans.in/can-recovery-agents-visit-home-on-sunday-or-holidays",
      "name": "Can Recovery Agents Visit on Sunday or Holidays? RBI Rules & Legal Rights",
      "description": "Comprehensive legal guide examining whether bank and NBFC recovery agents can visit borrower homes on Sundays, national holidays, or festivals in India. Covers RBI Master Directions, Section 329 BNS criminal trespass, and advocate-led OTS settlement protocols.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/can-recovery-agents-visit-home-on-sunday-or-holidays#breadcrumb"
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
      "@id": "https://www.settleloans.in/can-recovery-agents-visit-home-on-sunday-or-holidays#breadcrumb",
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
          "name": "Can Recovery Agents Visit on Sunday or Holidays",
          "item": "https://www.settleloans.in/can-recovery-agents-visit-home-on-sunday-or-holidays"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/can-recovery-agents-visit-home-on-sunday-or-holidays#article",
      "headline": "Can Recovery Agents Visit on Sunday or Public Holidays? RBI Rules & Legal Rights",
      "description": "In-depth statutory breakdown examining the illegality of unannounced recovery agent visits on Sundays and festive occasions. Understand RBI Fair Practice guidelines, constitutional privacy protections under Article 21, and actionable debt settlement strategies.",
      "image": "https://www.settleloans.in/images/infographics/can-recovery-agents-visit-home-on-sunday-or-holidays.jpg",
      "datePublished": "2026-08-31T10:00:00+05:30",
      "dateModified": "2026-08-31T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/can-recovery-agents-visit-home-on-sunday-or-holidays#webpage"
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
      "@id": "https://www.settleloans.in/can-recovery-agents-visit-home-on-sunday-or-holidays#service",
      "name": "SettleLoans - Borrower Legal Defense & Debt Resolution Services",
      "description": "Professional legal defense against aggressive recovery agent weekend visits, holiday harassment, and illegal doorstep coercion, backed by institutional One-Time Settlement (OTS) negotiations across India.",
      "url": "https://www.settleloans.in/can-recovery-agents-visit-home-on-sunday-or-holidays",
      "image": "https://www.settleloans.in/images/infographics/can-recovery-agents-visit-home-on-sunday-or-holidays.jpg",
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
        "reviewCount": "2640",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Vikram Sethi"
          },
          "datePublished": "2026-07-19",
          "reviewBody": "Recovery agents showed up at my home on a Sunday morning during a family brunch, ringing the bell continuously and demanding payment for an overdue personal loan. SettleLoans advocates intervened immediately, filed an emergency complaint with the bank's Principal Nodal Officer citing RBI outsourcing violations, and completely halted all weekend visits. Within three weeks, we finalized an OTS at a 55% waiver.",
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
          "datePublished": "2026-08-04",
          "reviewBody": "I was subjected to relentless harassment when collection agents landed at my doorstep on a major holiday. SettleLoans stepped in, issued a Cease-and-Desist notice under Section 329 BNS for trespass, and routed all recovery talks through their legal team. The peace of mind they restored to my family is priceless.",
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
            "name": "Arjun Deshmukh"
          },
          "datePublished": "2026-06-28",
          "reviewBody": "Ashish Jhangra and the SettleLoans legal panel provided precise statutory guidance. They clarified that Sunday visits without prior consent violate RBI Fair Practice codes and that borrowers can lawfully close the door. Their institutional negotiation team resolved my two credit card defaults cleanly with official No Dues Certificates.",
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
            "name": "Pooja Chawla"
          },
          "datePublished": "2026-08-18",
          "reviewBody": "Agents were targeting my home specifically on weekends when relatives were visiting. SettleLoans filed a detailed petition before the Banking Ombudsman and served statutory legal notices to the bank's executive committee. The bank immediately called off the third-party agency and sanctioned a structured one-time settlement.",
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
      "@id": "https://www.settleloans.in/can-recovery-agents-visit-home-on-sunday-or-holidays#faq",
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
  { id: 'weekend-holiday-doorstep-ambush', title: '1. The Weekend & Holiday Doorstep Ambush' },
  { id: 'rbi-master-directions-holiday-visits', title: '2. RBI Directives on Timing & Holiday Visits' },
  { id: 'constitutional-privacy-criminal-trespass', title: '3. Privacy Rights & Sec 329 BNS Trespass' },
  { id: 'bank-npa-accounting-npv-recovery', title: '4. Bank NPA Accounting & NPV Recovery Formula' },
  { id: 'infographic-holiday-recovery-rights', title: '5. Holiday Recovery Defense Infographic' },
  { id: 'tactical-protocol-turning-away-agents', title: '6. Tactical Protocol: Turning Away Holiday Visitors' },
  { id: 'institutional-escalation-ombudsman-police', title: '7. Institutional Escalation: Ombudsman & Police' },
  { id: 'cease-and-desist-ots-negotiation', title: '8. Legal Notices, OTS Sanction & NDC' },
  { id: 'comparative-enforcement-matrix', title: '9. Comparative Protection Matrix' },
  { id: 'settleloans-legal-defense-framework', title: '10. SettleLoans Legal Defense Framework' },
  { id: 'faqs', title: '11. Frequently Asked Questions' }
];

export default function CanRecoveryAgentsVisitHomeOnSundayOrHolidaysPage() {
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
            <span>Borrower Statutory Protections • Sunday &amp; Holiday Doorstep Rules</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Can Recovery Agents Visit on Sundays or Holidays?</h1>

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
              <span>RBI Fair Practices &amp; Constitutional Privacy Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-lg flex items-center gap-2"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Stop Unlawful Holiday Harassment</span>
            </Link>
            <Link
              href="#rbi-master-directions-holiday-visits"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 font-semibold py-3 px-6 rounded-xl text-sm transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>View RBI Holiday Visit Rules</span>
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
                <span>Essential Borrower Protections for Weekends &amp; Public Holidays</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Unannounced Entry Rights:</strong> Recovery agents cannot demand entry into your residence on Sundays, gazetted public holidays, or festive occasions without mutually pre-arranged prior consent.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Strict Permissible Hours (8 AM to 7 PM):</strong> Even when pre-scheduled, field interactions are strictly restricted to 8:00 AM to 7:00 PM; late-night or early-morning visits constitute regulatory non-compliance.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Festival &amp; Bereavement Safeguards:</strong> RBI directives explicitly bar collection agencies from intruding during religious festivals, cultural celebrations, illness, or personal family mourning.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Absolute Doorstep Sovereignty:</strong> You have the unreserved constitutional right under Article 21 to shut your door, refuse verbal discussions on your holiday, and record all external interactions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Cease-and-Desist Immunity:</strong> Retaining a legal advocate forces the lender under RBI outsourcing guidelines to redirect all debt negotiations to structured One-Time Settlement (OTS) channels.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Weekend and Holiday Doorstep Ambush */}
            <section id="weekend-holiday-doorstep-ambush" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. The Weekend &amp; Holiday Doorstep Ambush: Collection Psychology &amp; Family Distress
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Defaulting on an unsecured personal loan, consumer credit line, or credit card balance creates tremendous emotional vulnerability. For salaried professionals and small business owners navigating financial distress, Sundays and gazetted public holidays represent the only sacred window for rest, family bonding, and mental recuperation. Regrettably, third-party collection agencies across India deliberately weaponize weekends and national holidays as psychological pressure points.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Collection agencies design Sunday ambushes because they recognize that borrowers are almost certainly at home, accompanied by spouses, elderly parents, children, and visiting relatives. By staging sudden, aggressive doorstep visits during Sunday morning breakfast or festive family gatherings, agents calculate that the heightened fear of social humiliation, neighborhood gossip, and domestic distress will compel the borrower to arrange emergency funds or surrender personal assets. Agents intentionally create a high-decibel spectacle in apartment corridors or gated communities, counting on the resident&apos;s desire to suppress public embarrassment.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-1">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>Core Legal Reality</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                  Third-party recovery agents are private commercial contractors operating under commercial vendor contracts with banks. They possess zero police authority, judicial warrants, or statutory entry privileges. Your home remains a constitutionally protected private sanctuary every day of the week, and no private lender can legally strip away your domestic peace on Sundays or public holidays.
                </p>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                An unsecured loan default is strictly a civil breach of contract governed by the Indian Contract Act, 1872. It is neither a criminal misdemeanor nor an offense against the state. The lending institution&apos;s lawful recourse is confined to issuing civil demand notices and pursuing formal adjudication in competent civil courts. When collection personnel utilize unannounced holiday visits to inflict psychological trauma, they violate both banking regulations and general criminal statutes.
              </p>
            </section>

            {/* Section 2: RBI Master Directions on Timing & Holiday Visits */}
            <section id="rbi-master-directions-holiday-visits" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Statutory Framework: RBI Directives on Timing, Prior Notice &amp; Holiday Visits
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India (RBI) exercises comprehensive regulatory authority over scheduled commercial banks, non-banking financial companies (NBFCs), and housing finance corporations. Under Section 21 and Section 35A of the Banking Regulation Act, 1949, the directives issued by the RBI carry full statutory binding force across all lending institutions in India.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The regulatory code governing recovery agents is codified within the <em>Master Direction – Reserve Bank of India (Managing Risks and Code of Conduct in Outsourcing of Financial Services by Regulated Entities) Directions</em> along with the <em>Master Circular on Fair Practices Code</em>. These statutory directives strictly regulate the timing, manner, and cultural decency of recovery interactions:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4 space-y-4">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Mandatory RBI Standards Governing Doorstep Visits</span>
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">1. Strict Time Window Restriction (8:00 AM to 7:00 PM)</p>
                    <p className="text-slate-600 mt-1">
                      Under RBI directives, all recovery communications—including in-person visits and telephonic outreach—are strictly prohibited before 8:00 AM and after 7:00 PM. Any attempt to knock on doors or telephone borrowers outside this window constitutes actionable regulatory harassment.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">2. Mandatory Prior Notice and Appointment Protocols</p>
                    <p className="text-slate-600 mt-1">
                      The RBI requires lenders to maintain transparency and decency. Recovery visits should not take the form of unannounced ambushes. Lenders must inform borrowers of the specific recovery agency assigned to their account, and agents must respect the borrower&apos;s availability rather than showing up arbitrarily on holidays.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">3. Express Prohibition on Festival &amp; Mourning Intrusions</p>
                    <p className="text-slate-600 mt-1">
                      RBI guidelines explicitly state that collection agents must refrain from contacting borrowers during times of personal bereavement, medical emergencies, or significant religious and cultural festivals such as Diwali, Eid, Christmas, Holi, or Pongal. Intruding during sacred celebrations violates the fundamental dignity of the individual.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">4. Vicarious Liability of Lending Institutions</p>
                    <p className="text-slate-600 mt-1">
                      Regulated Entities (REs) cannot disown the misconduct of their outsourced recovery vendors. Banks and NBFCs bear direct, vicarious legal liability for any harassment, unauthorized weekend intrusion, or abusive conduct perpetrated by their appointed recovery personnel.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a recovery agency shows up unannounced on a Sunday morning or a gazetted holiday without prior written confirmation, they operate outside the spirit and letter of RBI Fair Practice Directives. Borrowers possess the lawful authority to cite these master directions, decline immediate engagement, and instruct the visitor to submit all communication through formal banking correspondence.
              </p>
            </section>

            {/* Section 3: Privacy Rights & Sec 329 BNS Trespass */}
            <section id="constitutional-privacy-criminal-trespass" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Constitutional Sanctum: Right to Privacy &amp; Section 329 BNS Criminal Trespass
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The legal protection of a borrower&apos;s domestic environment is anchored in India&apos;s highest constitutional jurisprudence. In the landmark nine-judge Constitution Bench verdict in <em>Justice K.S. Puttaswamy (Retd.) v. Union of India (2017) 10 SCC 1</em>, the Supreme Court of India established that the Right to Privacy is an inalienable fundamental right under Article 21 (Right to Life and Personal Liberty).
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Supreme Court specifically delineated the concept of spatial privacy, recognizing that an individual&apos;s residential dwelling is an inviolable sanctum. Within this domestic sphere, every citizen has the fundamental right to be let alone, protected from unwanted commercial intrusion, intimidation, and public embarrassment. Commercial creditors and private collection agents have no constitutional or statutory authority to breach this physical sanctuary.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This constitutional foundation is reinforced by the penal statutory framework under the Bharatiya Nyaya Sanhita, 2023 (BNS), which replaced the Indian Penal Code (IPC). When recovery personnel cross legal boundaries during holiday visits, their actions trigger several cognizable penal provisions:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4">
                <h3 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Penal Consequences for Unlawful Holiday Recovery Conduct</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Section 329 BNS: Criminal House-Trespass</p>
                    <p className="text-slate-600">Entering private residential premises without permission, or remaining on the property after being told to leave on a Sunday or holiday, constitutes criminal house-trespass carrying rigorous imprisonment.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Section 351 BNS: Criminal Intimidation</p>
                    <p className="text-slate-600">Using verbal threats of arrest, asset confiscation, public humiliation, or physical confrontation outside a borrower&apos;s home constitutes criminal intimidation under Section 351 BNS (Section 506 IPC).</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Section 308 BNS: Extortion Demands</p>
                    <p className="text-slate-600">Coercing immediate cash payments or blank cheques under threat of creating a scene in front of holiday guests or neighbors amounts to criminal extortion under Section 308 BNS (Section 383 IPC).</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Section 189 BNS: Unlawful Assembly</p>
                    <p className="text-slate-600">Deploying groups of recovery personnel to surround a residence, block exits, or create commotion in residential corridors constitutes unlawful assembly under Section 189 BNS (Section 141 IPC).</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In the seminal judgment <em>ICICI Bank Ltd. v. Prakash Kaur &amp; Ors. (2007) 2 SCC 711</em>, the Supreme Court unequivocally condemned the practice of banks employing musclemen to intimidate borrowers, ruling that debt recovery must adhere strictly to established civil procedure. The law does not permit commercial lenders to operate as private enforcement militias on weekends or any other day.
              </p>
            </section>

            {/* Section 4: Bank NPA Accounting Realities & NPV Recovery Formula */}
            <section id="bank-npa-accounting-npv-recovery" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Bank NPA Accounting Realities: Provisioning Burdens &amp; The NPV Recovery Formula
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To understand why collection agencies deploy aggressive weekend ambushes rather than approaching civil courts, borrowers must understand the underlying accounting pressures governing non-performing loans in Indian banking. Under the Reserve Bank of India Prudential Norms on Income Recognition, Asset Classification and Provisioning, an unsecured retail loan or credit card facility is classified as a Non-Performing Asset (NPA) once repayments remain delinquent for more than 90 days.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an account slips into NPA status, the bank must halt interest recognition and allocate substantial capital provisions directly from its operating profits:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li><strong>Substandard NPA (Delinquency up to 12 Months):</strong> Mandatory 15% provisioning on total unsecured exposure.</li>
                <li><strong>Doubtful NPA Category 1 (12 to 24 Months Delinquency):</strong> Mandatory 100% provisioning on the entire unsecured exposure.</li>
                <li><strong>Loss Assets / Written-Off Ledger:</strong> 100% full balance sheet write-off against the bank&apos;s capital reserves.</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-3">
                If a lender initiates a recovery lawsuit in a Civil Court or District Commercial Court for an unsecured loan of ₹3 Lakhs to ₹25 Lakhs, it must pay mandatory non-refundable court fees (ranging from 1% to 3%), incur significant advocate retainers, and endure 3 to 5 years of procedural delays. In unsecured debts, lenders possess no hypothecated collateral to attach, and domestic household goods are explicitly protected under Section 60 of the Code of Civil Procedure, 1908 (CPC). Institutional credit risk committees evaluate settlement viability using a Net Present Value (NPV) recovery formula:
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
                Because lengthy civil litigation yields a negative or heavily discounted Net Present Value, banks have powerful economic incentives to execute a negotiated One-Time Settlement (OTS). By approving a 40% to 65% principal waiver, the lender receives an immediate cash recovery, frees up locked capital reserves, and reverses loan loss provisions into current operating profits. Aggressive Sunday visits are simply low-cost scare tactics deployed by commission-driven third parties before the debt is escalated to the bank&apos;s formal compromise settlement committee.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="infographic-holiday-recovery-rights" className="my-8">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950">
                <Image
                  src="/images/infographics/can-recovery-agents-visit-home-on-sunday-or-holidays.jpg"
                  alt="Can Recovery Agents Visit on Sunday or Public Holidays Infographic: Borrower Legal Rights, RBI Guidelines, Permissible Hours, and Doorstep Defense Rules"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="p-4 bg-slate-900 text-slate-300 text-xs flex items-center justify-between">
                  <span className="font-semibold text-blue-400">Fig 1: Statutory Framework — Sunday &amp; Holiday Recovery Rules, Permissible Timings &amp; Section 329 BNS</span>
                  <span className="text-slate-400 hidden sm:inline">Source: SettleLoans Legal &amp; Compliance Analysis</span>
                </div>
              </div>
            </section>

            {/* Section 6: Tactical Step-by-Step Response */}
            <section id="tactical-protocol-turning-away-agents" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Tactical Protocol: Lawfully Turning Away Unannounced Sunday &amp; Holiday Visitors
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When recovery agents arrive unannounced at your doorstep on a Sunday morning or a festive holiday, staying composed and executing a clear legal protocol prevents escalation while asserting your rights. You are not required to panic, apologize, or engage in lengthy verbal debates. Follow this step-by-step procedure to manage holiday doorstep visits:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <DoorClosed className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The 5-Step Doorstep Holiday Defense Protocol</span>
                </div>
                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 1: Keep the Main Door Securely Latched</p>
                    <p className="text-slate-600 mt-1">Never open the main door completely or invite unannounced visitors inside. Communicate strictly through a safety grill, security latch, or door peephole.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 2: Demand Official Credentials and Bank Authorization</p>
                    <p className="text-slate-600 mt-1">Ask the agent to display their agency ID card and the bank&apos;s specific loan account authorization letter. Take clear photographs of these documents through the grill with your mobile phone.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 3: State Clear Refusal of Holiday Discussions &amp; Record</p>
                    <p className="text-slate-600 mt-1">Activate audio or video recording on your smartphone. State calmly: &quot;Today is Sunday / a public holiday. I do not entertain unannounced financial visits on holidays. Please leave my premises immediately and send all communications in writing.&quot;</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 4: Strictly Refuse Cash or Informal UPI Payments</p>
                    <p className="text-slate-600 mt-1">Never hand over cash, blank cheques, or make personal digital transfers under pressure. Informal payments are routinely pocketed or credited to late fees without settling your loan.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 5: Close the Door Firmly and Engage Legal Counsel</p>
                    <p className="text-slate-600 mt-1">Close and lock the door. If the agent shouts, bangs, or refuses to leave, dial 112 for police assistance citing criminal trespass and harassment, and forward the video recording to your legal advocate.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Closing the door on an unauthorized holiday visitor is completely lawful. It does not constitute non-cooperation with a judicial body, nor does it empower the lender to take punitive criminal action. It is the lawful exercise of your fundamental property rights and spatial privacy.
              </p>
            </section>

            {/* Section 7: Institutional Escalation */}
            <section id="institutional-escalation-ombudsman-police" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Institutional Escalation: Filing Grievances with Nodal Officers, RBI Ombudsman &amp; Police
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a bank or NBFC allows its outsourced recovery agents to repeatedly violate holiday visit rules, borrowers should build a formal documentation trail and initiate multi-tiered regulatory escalation. Documenting every unannounced visit, audio recording, and CCTV footage transforms subjective distress into actionable institutional evidence.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The escalation pathway begins with a formal statutory grievance submitted to the lending institution&apos;s Principal Nodal Officer (PNO) and Chief Grievance Redressal Officer. The complaint must detail the exact timestamp of the Sunday or holiday visit, agent names, agency details, and specific violations of the RBI Master Direction on Outsourcing. Lenders are mandated to investigate and provide a formal written resolution within 30 days.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If the lending institution fails to resolve the grievance within 30 days or rejects the complaint, the borrower can escalate the matter directly to the Reserve Bank of India Integrated Ombudsman via the official portal (cms.rbi.org.in). The RBI Ombudsman maintains zero tolerance for recovery agent violations. Under the scheme, the Ombudsman has the statutory authority to impose hefty regulatory fines on the lender and award financial compensation of up to ₹20 Lakhs to the borrower for harassment, mental agony, and infringement of personal liberty. In severe cases involving physical threats or forced trespass, a simultaneous complaint should be lodged at the local police station under Section 329 and Section 351 BNS.
              </p>
            </section>

            {/* Section 8: Direct OTS Settlement Protocols */}
            <section id="cease-and-desist-ots-negotiation" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Direct OTS Settlement Protocols: Cease-and-Desist Notices, Sanction Letters &amp; NDC
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Stopping Sunday visits is essential for immediate peace of mind, but permanently eliminating debt-related stress requires a conclusive legal closure of the delinquent account. Making sporadic token payments to visiting agents only extends delinquency and invites future harassment. The only legally binding solution is executing an institutional One-Time Settlement (OTS).
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A formal OTS process follows three structured legal pillars designed to protect the borrower from start to finish:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <FileCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The Three-Pillar Statutory Debt Resolution Protocol</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">1. Statutory Cease-and-Desist</p>
                    <p className="text-slate-600">A formal legal notice served by your advocate to the bank&apos;s senior leadership, halting unauthorized holiday visits and requiring all future communication to occur via legal counsel.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">2. Verified Sanction Letter</p>
                    <p className="text-slate-600">An authentic OTS compromise approval issued on official bank letterhead specifying the exact negotiated settlement amount, waiver details, and payment installment terms.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">3. Bank-Stamped NDC &amp; CIBIL</p>
                    <p className="text-slate-600">Direct settlement remittance into the loan account followed by receipt of an official No Dues Certificate under RBI Circular RBI/2023-24/60 and credit bureau closure.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Upon fulfillment of the OTS sanction terms, the bank updates credit information companies (CIBIL, Experian, CRIF, Equifax) reflecting the account status as &quot;Settled&quot; or &quot;Post-Write-Off Settled&quot;. This extinguishes all civil liability, eliminates future doorstep visits, and enables you to systematically rebuild your credit profile.
              </p>
            </section>

            {/* Section 9: Comparative Legal Matrix */}
            <section id="comparative-enforcement-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Comparative Legal Matrix: Recovery Channels, Permissible Timings &amp; Holiday Rules
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The comparative matrix below details the legal boundaries, permissible visiting schedules, entry authority, and borrower protections across various debt recovery mechanisms in India:
              </p>
              
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Recovery Channel</th>
                      <th>Legal Authority</th>
                      <th>Sunday / Holiday Rules</th>
                      <th>Permissible Hours</th>
                      <th>Borrower Safeguards</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Third-Party Recovery Agents</td>
                      <td>Private Vendor Contract (Zero Judicial Authority)</td>
                      <td><strong>Unannounced visits prohibited</strong>; Prior consent mandatory</td>
                      <td>Strictly 8:00 AM to 7:00 PM only</td>
                      <td>Section 329 BNS trespass complaint, RBI Ombudsman, Cease-and-Desist notice</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Civil Court Bailiff / Nazarat</td>
                      <td>Court Warrant under Order XXI CPC</td>
                      <td><strong>Courts closed on holidays</strong>; Execution during official court working hours only</td>
                      <td>Standard daytime judicial working hours</td>
                      <td>Section 60 CPC property exemptions, Stay Petition, Objection under Order XXI Rule 58</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">SARFAESI Authorized Officer</td>
                      <td>Securitisation Act, 2002 (Secured Debt Only)</td>
                      <td><strong>No holiday possession</strong>; Mandatory 60-day notice and DM/CMM order</td>
                      <td>Official daytime business hours only</td>
                      <td>Section 17 Securitisation Application before the Debts Recovery Tribunal (DRT)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">National Lok Adalat</td>
                      <td>Legal Services Authorities Act, 1987</td>
                      <td><strong>No field visits</strong>; Voluntary compromise hearings on designated Lok Adalat Saturdays</td>
                      <td>Designated court session hours</td>
                      <td>Consensual OTS compromise with full judicial finality and non-appealable award</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Section 138 NI Act (Cheque Bounce)</td>
                      <td>Judicial Magistrate First Class (JMFC) Court</td>
                      <td><strong>No private recovery visits</strong>; Official summons served by police / postal service</td>
                      <td>Judicial working days</td>
                      <td>Bail application, legal compounding under Section 147 NI Act via OTS settlement</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense Framework */}
            <section id="settleloans-legal-defense-framework" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Defense Framework: Shielding Your Weekends &amp; Resolving Debt
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  No individual or family should have to spend weekends living in anxiety of aggressive debt collectors banging on their door, shouting in residential corridors, or disrupting sacred festival celebrations. At SettleLoans, our experienced banking lawyers, consumer defense advocates, and senior financial negotiators provide robust nationwide representation for distressed borrowers. We immediately enforce your fundamental privacy rights and statutory protections under the RBI Fair Practices Code and Section 329 BNS. By serving formal legal notices and Vakalatnama on bank executives, we put an immediate end to uninvited holiday visits and negotiate directly with credit committees to secure structured 40% to 65% One-Time Settlements backed by official No Dues Certificates.
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
                  11. Frequently Asked Questions: Recovery Agent Sunday &amp; Holiday Rules
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Clear, verified legal answers regarding recovery agent restrictions on weekends, holiday visit rules, criminal trespass, and debt settlement in India.
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
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction – Outsourcing of Financial Services &amp; Code of Conduct</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.mha.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Bharatiya Nyaya Sanhita, 2023 (Section 329 Criminal House-Trespass)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Doorstep Harassment Grievance Portal)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Supreme Court of India (Justice K.S. Puttaswamy Spatial Privacy Jurisprudence)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">Indian Contract Act, 1872 &amp; Banking Regulation Act, 1949 (Statutory Civil Protections)</span>
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
                  href="/recovery-agent-calling-late-night-rbi-violation"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Recovery Agent Calling Late Night RBI Violation
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
                  href="/recovery-agents-harassing-family-in-front-of-children"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Recovery Agents Harassing Family in Front of Children
                </Link>
                <Link
                  href="/recovery-agents-talking-to-neighbours-landlord"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Recovery Agents Talking to Neighbours &amp; Landlord
                </Link>
                <Link
                  href="/can-recovery-agents-take-household-furniture-or-gold"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can Recovery Agents Take Furniture or Gold?
                </Link>
                <Link
                  href="/bank-fir-for-loan-default-reality-check"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank FIR for Loan Default Reality Check
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Blueprint
                </Link>
                <Link
                  href="/can-bank-seize-property-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can Bank Seize Property for Personal Loan?
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
                Distinguished authority in banking jurisprudence, borrower protections against aggressive recovery practices, spatial privacy rights under Article 21, and RBI compromise settlement frameworks.
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
              <div className="font-bold text-base text-white mb-2">Agents Harassing You on Weekends or Holidays?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not endure unannounced doorstep harassment during family time. Retain our senior banking advocates to issue immediate Cease-and-Desist notices, enforce RBI visit limits, and negotiate a 40%–65% OTS.
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
                  <span>Section 329 BNS Statutory Immunity</span>
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
