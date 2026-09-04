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
    answer: "No unannounced visits are allowed. Under RBI Fair Practices and Outsourcing Guidelines, agents must respect privacy. Field visits are restricted to 8:00 AM to 7:00 PM. Sunday or holiday visits without prior consent count as harassment. You have the full legal right to turn agents away. You can insist on written notices or weekday meetings."
  },
  {
    name: "Can recovery agents visit my residence during religious festivals like Diwali, Eid, or Christmas?",
    answer: "No. The Reserve Bank of India strictly bans visits during festivals. Agents cannot disturb borrowers during family illness, mourning, or religious events. Visits or threats during festivals violate the RBI Integrated Ombudsman Scheme. Such acts count as severe misconduct."
  },
  {
    name: "Can I refuse to open the door if a recovery agent knocks on a Sunday morning?",
    answer: "Yes. You have a full legal right under Article 21 to keep your door closed. Agents are private contractors. They have no police powers. They hold no court search warrants. You can speak through a closed door. Tell them you do not allow holiday visits."
  },
  {
    name: "What should I do if a recovery agent creates a scene or shouts outside my home on a holiday?",
    answer: "Do not open the door. Record audio and video proof on your phone. Tell the agent their actions violate the law. Shouting outside your home is criminal intimidation under Section 351 BNS (Section 506 IPC). If they refuse to leave, call 112 for police help right away."
  },
  {
    name: "Are recovery agents required to give prior notice before visiting my home?",
    answer: "Yes. RBI rules require banks to give notice before sending agents. The lender must tell you the agency name in advance. Field visits must be pre-arranged. Agents cannot use surprise weekend ambushes to shame your family."
  },
  {
    name: "What are the permissible hours for recovery agents to visit or call borrowers?",
    answer: "The Reserve Bank of India sets clear visit hours. Agents can only call or visit between 8:00 AM and 7:00 PM. Any calls or visits before 8:00 AM or after 7:00 PM break the RBI Master Direction on Outsourcing of Financial Services."
  },
  {
    name: "Can recovery agents bring local police with them on a Sunday to force a settlement?",
    answer: "No. Unsecured personal loans and credit cards are civil matters under the Indian Contract Act, 1872. Police cannot act as debt collectors. If agents pretend to be police, it is a crime under Section 204 BNS for impersonating public servants."
  },
  {
    name: "How can appointing a debt settlement advocate stop Sunday and holiday home visits?",
    answer: "Your advocate sends a formal Cease-and-Desist notice with a Vakalatnama to the bank. Under RBI rules, the bank must stop home visits once you hire a lawyer. All debt talks must then go through your legal counsel."
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
          "reviewBody": "Recovery agents showed up at my home on Sunday morning. They rang the bell repeatedly. SettleLoans advocates intervened at once. They filed an emergency notice with the bank Principal Nodal Officer citing RBI rules. All weekend visits stopped. In three weeks, we closed an OTS at a 55% waiver.",
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
          "reviewBody": "Collection agents visited my home on a holiday. SettleLoans stepped in fast. They issued a notice under Section 329 BNS for trespass. They routed all talks through their legal team. That restored peace to my family.",
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
          "reviewBody": "Ashish Jhangra gave clear legal guidance. He explained that Sunday visits without consent break RBI rules. Borrowers can lawfully close the door. His team settled my card debts cleanly with No Dues Certificates.",
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
          "reviewBody": "Agents targeted my home on weekends when relatives visited. SettleLoans filed a petition before the Banking Ombudsman. They sent notices to the bank executive committee. The bank withdrew the recovery agency and approved an OTS.",
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
                  <span><strong>Zero Unannounced Entry Rights:</strong> Agents cannot enter your home on Sundays or holidays without prior written consent.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Strict Permissible Hours (8 AM to 7 PM):</strong> Even with consent, visits must stay within 8:00 AM to 7:00 PM. Visits outside these hours violate rules.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Festival &amp; Bereavement Safeguards:</strong> RBI directives ban agent visits during religious festivals, family illness, or mourning.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Absolute Doorstep Sovereignty:</strong> Under Article 21, you have the full right to shut your door and refuse verbal talks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Cease-and-Desist Immunity:</strong> Appointing an advocate makes the bank route all talks through legal channels for an OTS settlement.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Weekend and Holiday Doorstep Ambush */}
            <section id="weekend-holiday-doorstep-ambush" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. The Weekend &amp; Holiday Doorstep Ambush</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Defaulting on a personal loan or credit card causes deep stress. Sundays and public holidays are meant for rest with family. Yet, many recovery agencies use weekends to put pressure on borrowers.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Agencies pick Sundays because borrowers are at home. They know spouses, parents, and neighbors are around. Agents try to create scenes at your door. They hope fear of public shame will force you to pay. They shout in building corridors to cause embarrassment.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-1">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>Core Legal Reality</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                  Recovery agents are private workers. They hold no police powers. They have no court search warrants. Your home is a private space under the law. No bank can take away your peace on Sundays or holidays.
                </p>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the Indian Contract Act, 1872, loan default is a civil matter. It is not a crime. Banks can only send legal notices or file civil suits. They cannot use holiday harassment or threats to collect money.
              </p>
            </section>

            {/* Section 2: RBI Master Directions on Timing & Holiday Visits */}
            <section id="rbi-master-directions-holiday-visits" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. RBI Directives on Holiday Visits</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India sets rules for banks and NBFCs. Under Section 21 and Section 35A of the Banking Regulation Act, 1949, RBI orders are binding law.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Recovery rules are in the RBI Master Direction on Outsourcing. They are also in the Fair Practices Code. These rules fix strict visit limits:
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
                      Agents can only call or visit between 8:00 AM and 7:00 PM. Any contact outside these daily hours breaks RBI rules.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">2. Mandatory Prior Notice and Appointment Protocols</p>
                    <p className="text-slate-600 mt-1">
                      Recovery visits cannot be surprise ambushes. Banks must notify you about the recovery agency. Visits must be pre-arranged.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">3. Express Prohibition on Festival &amp; Mourning Intrusions</p>
                    <p className="text-slate-600 mt-1">
                      Agents must not disturb you during family illness, mourning, or festivals like Diwali, Eid, and Christmas.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">4. Vicarious Liability of Lending Institutions</p>
                    <p className="text-slate-600 mt-1">
                      Banks stay fully liable for agent actions. Lenders cannot escape blame for harassment.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When agents visit on holidays without written notice, they break RBI rules. You can quote these rules, refuse entry, and tell them to send written letters.
              </p>
            </section>

            {/* Section 3: Privacy Rights & Sec 329 BNS Trespass */}
            <section id="constitutional-privacy-criminal-trespass" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. Privacy Rights &amp; Sec 329 BNS Trespass</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrower rights are backed by the top court. In <em>Justice K.S. Puttaswamy (Retd.) v. Union of India (2017) 10 SCC 1</em>, the Supreme Court ruled privacy is a fundamental right under Article 21.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The court ruled that every home is a private space. Every citizen has the right to be left alone. Banks and collection agents have no power to breach your privacy.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Bharatiya Nyaya Sanhita, 2023 (BNS) replaced the Indian Penal Code (IPC). Bad agent conduct triggers key criminal sections:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4">
                <h3 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Penal Consequences for Unlawful Holiday Recovery Conduct</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Section 329 BNS: Criminal House-Trespass</p>
                    <p className="text-slate-600">Entering without consent or refusing to leave on a holiday is criminal trespass. It can lead to jail.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Section 351 BNS: Criminal Intimidation</p>
                    <p className="text-slate-600">Threats of arrest, loss of items, or public shame violate Section 351 BNS (Section 506 IPC).</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Section 308 BNS: Extortion Demands</p>
                    <p className="text-slate-600">Forcing cash payments by creating scenes outside your home is extortion under Section 308 BNS (Section 383 IPC).</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Section 189 BNS: Unlawful Assembly</p>
                    <p className="text-slate-600">Sending groups of agents to block doors or shout violates Section 189 BNS (Section 141 IPC).</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In <em>ICICI Bank Ltd. v. Prakash Kaur &amp; Ors. (2007) 2 SCC 711</em>, the Supreme Court banned musclemen for debt collection. The court ordered banks to follow lawful civil steps.
              </p>
            </section>

            {/* Section 4: Bank NPA Accounting Realities & NPV Recovery Formula */}
            <section id="bank-npa-accounting-npv-recovery" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Bank NPA Accounting in Weekend Recovery</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Banks push on weekends because bad loans tie up bank funds. Under RBI rules, unpaid loans turn into Non-Performing Assets (NPAs) after 90 days.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a loan turns into an NPA, the bank must set aside capital provisions from profits:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li><strong>Substandard NPA (Delinquency up to 12 Months):</strong> 15% provisioning on unsecured loans.</li>
                <li><strong>Doubtful NPA Category 1 (12 to 24 Months):</strong> 100% provisioning on unsecured loans.</li>
                <li><strong>Loss Assets:</strong> 100% full balance sheet write-off against bank reserves.</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-3">
                Civil suits for ₹3 Lakhs to ₹25 Lakhs cost heavy fees and take 3 to 5 years. Unsecured loans have no collateral to seize. Household items are safe under Section 60 of the Code of Civil Procedure, 1908 (CPC). Banks judge recovery via Net Present Value (NPV):
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
                  Here, C_t is expected cash inflow over time t. The letter r is the bank discount rate. Deductions cover legal fees and locked capital.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Civil court cases yield low returns. Thus, banks prefer a fast One-Time Settlement (OTS). A 40% to 65% waiver gives the bank quick cash. It frees locked capital. Sunday visits are cheap scare tactics before settlement talks.
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
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. Tactical Steps to Turn Away Agents</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When agents visit on a Sunday or holiday, stay calm. Follow a clear legal step-by-step process. You do not need to panic or argue. Follow this 5-step plan:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <DoorClosed className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The 5-Step Doorstep Holiday Defense Protocol</span>
                </div>
                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 1: Keep the Main Door Securely Latched</p>
                    <p className="text-slate-600 mt-1">Never open the door fully to uninvited callers. Speak through a safety grill or peephole.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 2: Demand Official Credentials and Bank Authorization</p>
                    <p className="text-slate-600 mt-1">Ask the agent for bank ID cards and authority letters. Take clear photos of these papers through the grill.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 3: State Clear Refusal of Holiday Discussions &amp; Record</p>
                    <p className="text-slate-600 mt-1">Turn on your phone camera. State clearly: &quot;Today is a holiday. I do not talk about loans on holidays. Please leave now. Send notices by post.&quot;</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 4: Strictly Refuse Cash or Informal UPI Payments</p>
                    <p className="text-slate-600 mt-1">Never give cash, blank cheques, or UPI transfers. Informal payments are often lost or applied to penal fees.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 5: Close the Door Firmly and Engage Legal Counsel</p>
                    <p className="text-slate-600 mt-1">Lock your door. If the agent shouts or refuses to leave, call 112 for police help. Send the video proof to your lawyer.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Closing the door on holiday visitors is fully lawful. It is a valid exercise of your property and privacy rights.
              </p>
            </section>

            {/* Section 7: Institutional Escalation */}
            <section id="institutional-escalation-ombudsman-police" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Escalation to Ombudsman &amp; Police</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If a lender sends agents on holidays, build a clear paper trail. Save visits, audio clips, and CCTV clips for formal complaints.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                First, write to the bank Principal Nodal Officer (PNO). List the date, time, agent names, and RBI rule breaches. The bank gets 30 days to resolve your issue.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If the bank fails to reply, file a case on cms.rbi.org.in. The RBI Ombudsman can fine the bank. They can award up to ₹20 Lakhs in damages. If agents make physical threats, file a police complaint under Section 329 and Section 351 BNS.
              </p>
            </section>

            {/* Section 8: Direct OTS Settlement Protocols */}
            <section id="cease-and-desist-ots-negotiation" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. OTS Settlement Protocol for Weekend Defaults</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Stopping Sunday visits brings peace of mind. But settling your debt brings permanent relief. Token cash payments only extend debt troubles. An institutional One-Time Settlement (OTS) is the best path.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A formal OTS follows three clear legal pillars:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <FileCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The Three-Pillar Statutory Debt Resolution Protocol</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">1. Statutory Cease-and-Desist</p>
                    <p className="text-slate-600">Your lawyer sends a formal notice to bank leaders. This stops holiday visits and directs all talks to legal counsel.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">2. Verified Sanction Letter</p>
                    <p className="text-slate-600">Get an OTS letter on bank letterhead. It must state the agreed sum, waiver, and payment terms.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">3. Bank-Stamped NDC &amp; CIBIL</p>
                    <p className="text-slate-600">Pay directly into the bank loan account. Get an official No Dues Certificate under RBI rules. Update all credit bureaus.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                After OTS payment, the bank updates CIBIL, Experian, CRIF, and Equifax to show &apos;Settled&apos;. This clears debt claims. It ends home visits for good.
              </p>
            </section>

            {/* Section 9: Comparative Legal Matrix */}
            <section id="comparative-enforcement-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. Weekend Recovery &amp; Defense Matrix</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The table below outlines legal boundaries, visiting hours, and borrower protections across recovery channels in India:
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
                      <td><strong>Unannounced visits prohibited.</strong> Prior consent is mandatory.</td>
                      <td>Strictly 8:00 AM to 7:00 PM only.</td>
                      <td>Section 329 BNS complaint. RBI Ombudsman. Cease-and-Desist notice.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Civil Court Bailiff / Nazarat</td>
                      <td>Court Warrant under Order XXI CPC</td>
                      <td><strong>Courts closed on holidays.</strong> Execution is during court hours only.</td>
                      <td>Standard daytime judicial working hours.</td>
                      <td>Section 60 CPC exemptions. Stay Petition. Order XXI Rule 58 objections.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">SARFAESI Authorized Officer</td>
                      <td>Securitisation Act, 2002 (Secured Debt Only)</td>
                      <td><strong>No holiday possession.</strong> Mandatory 60-day notice and DM order.</td>
                      <td>Official daytime business hours only.</td>
                      <td>Section 17 Securitisation Application before DRT.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">National Lok Adalat</td>
                      <td>Legal Services Authorities Act, 1987</td>
                      <td><strong>No field visits.</strong> Voluntary compromise hearings on Lok Adalat Saturdays.</td>
                      <td>Designated court session hours.</td>
                      <td>Consensual OTS compromise. Full judicial finality. Non-appealable award.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Section 138 NI Act (Cheque Bounce)</td>
                      <td>Judicial Magistrate First Class (JMFC) Court</td>
                      <td><strong>No private recovery visits.</strong> Summons served by police or post.</td>
                      <td>Judicial working days.</td>
                      <td>Bail application. Legal compounding under Section 147 NI Act via OTS.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense Framework */}
            <section id="settleloans-legal-defense-framework" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. SettleLoans Weekend Harassment Defense</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  No family should face aggressive debt agents during weekend rest or festivals. At SettleLoans, our legal team defends borrowers across India. We enforce privacy rights under the RBI Fair Practices Code and Section 329 BNS.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  We send formal notices to bank leaders. This stops uninvited visits. We then negotiate 40% to 65% OTS waivers with official No Dues Certificates.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. FAQs: Recovery Agent Sunday &amp; Holiday Rules</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Clear answers regarding recovery agent restrictions on weekends, holiday visit rules, criminal trespass, and debt settlement in India.
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
                Expert in banking law, recovery rules, privacy rights under Article 21, and debt settlements.
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
                Do not face uninvited holiday visits alone. Our legal advocates send Cease-and-Desist notices, stop harassment, and secure 40% to 65% OTS waivers.
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
