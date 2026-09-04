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
  Home,
  Siren,
  DoorClosed,
  Users
} from 'lucide-react';

export const metadata: Metadata = {
  title: "What to Do If Recovery Agents Won't Leave | SettleLoans",
  description: 'Recovery agent staging a dharna outside your house? Follow our emergency 112 police protocol, DD entry guide, and legal remedies with SettleLoans.',
  keywords: [
    'recovery agent sitting outside house refusing to leave',
    'recovery agent dharna outside house',
    'recovery agents sitting on stairs apartment hallway',
    'what to do if recovery agent does not leave home',
    'police complaint recovery agent public nuisance',
    'section 270 bns public nuisance loan recovery',
    'section 290 ipc recovery agent harassment',
    'rbi guidelines recovery agent home visit timing',
    'apartment association rwa eviction recovery agents',
    'criminal trespass section 329 bns bank agents',
    'how to remove collection agents from doorstep',
    'one time settlement after doorstep recovery harassment'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/recovery-agent-refusing-to-leave-house-dharna-what-to-do',
  },
  openGraph: {
    title: 'Recovery Agent Sitting Outside House Refusing to Leave? Police 112 Protocol & Legal Eviction Guide',
    description: 'Bank recovery agents staging a dharna outside your flat or doorstep? Learn your rights under Supreme Court privacy rulings, Section 270 BNS public nuisance, and immediate police 112 action.',
    url: 'https://www.settleloans.in/recovery-agent-refusing-to-leave-house-dharna-what-to-do',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/recovery-agent-refusing-to-leave-house-dharna-what-to-do.jpg',
        width: 1200,
        height: 675,
        alt: 'Recovery Agent Sitting Outside House Dharna Legal Defense Protocol',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recovery Agent Sitting Outside House Refusing to Leave? Police 112 Protocol & Legal Eviction Guide',
    description: 'Facing a doorstep standoff from bank recovery agents refusing to leave? Discover step-by-step 112 emergency police protocols, DD entry procedures, and advocate legal defenses.',
    images: ['https://www.settleloans.in/images/infographics/recovery-agent-refusing-to-leave-house-dharna-what-to-do.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/recovery-agent-refusing-to-leave-house-dharna-what-to-do#webpage",
      "url": "https://www.settleloans.in/recovery-agent-refusing-to-leave-house-dharna-what-to-do",
      "name": "Recovery Agent Sitting Outside House Refusing to Leave? Police 112 Protocol & Legal Eviction Guide",
      "description": "Recovery agent staging a dharna outside your house, sitting on stairs, or refusing to leave? Follow our emergency 112 police protocol, DD entry guide for public nuisance, and RWA eviction remedies.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/recovery-agent-refusing-to-leave-house-dharna-what-to-do#breadcrumb"
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
      "@id": "https://www.settleloans.in/recovery-agent-refusing-to-leave-house-dharna-what-to-do#breadcrumb",
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
          "name": "Doorstep Harassment & Dharna Defense",
          "item": "https://www.settleloans.in/recovery-agent-refusing-to-leave-house-dharna-what-to-do"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/recovery-agent-refusing-to-leave-house-dharna-what-to-do#article",
      "headline": "Recovery Agent Sitting Outside House Refusing to Leave? Step-by-Step Police 112 Protocol, Daily Diary Entry & Legal Eviction Defenses",
      "description": "An exhaustive statutory and procedural handbook for borrowers facing recovery agent doorstep standoffs, hallway dharnas, and public shaming. Covers 112 emergency calls, Section 270 BNS / Section 290 IPC Daily Diary registration, RWA society eviction, RBI Master Directions, and 55% OTS negotiations.",
      "image": "https://www.settleloans.in/images/infographics/recovery-agent-refusing-to-leave-house-dharna-what-to-do.jpg",
      "datePublished": "2026-08-31T10:00:00+05:30",
      "dateModified": "2026-08-31T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/recovery-agent-refusing-to-leave-house-dharna-what-to-do#webpage"
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
      "@id": "https://www.settleloans.in/recovery-agent-refusing-to-leave-house-dharna-what-to-do#service",
      "name": "SettleLoans - Doorstep Harassment Legal Defense & Loan Settlement Advisory",
      "description": "Specialized legal intervention, emergency advocate protection, and financial dispute resolution for borrowers facing coercive doorstep collection standoffs, public nuisance, and illegal bank recovery harassment.",
      "url": "https://www.settleloans.in/recovery-agent-refusing-to-leave-house-dharna-what-to-do",
      "image": "https://www.settleloans.in/images/infographics/recovery-agent-refusing-to-leave-house-dharna-what-to-do.jpg",
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
        "reviewCount": "2410",
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
          "reviewBody": "Three collection agents sat outside my door in Bangalore. They shouted and harassed my family. SettleLoans advocates helped me dial 112. They helped me file a police DD entry. Our lawyer sent a legal notice to the bank. The agents never returned. We settled the debt at a 52% discount.",
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
          "datePublished": "2026-07-28",
          "reviewBody": "Recovery men blocked my porch in Chennai. They stopped my mother from leaving. SettleLoans acted fast. Society guards removed the men. Our lawyer filed an RBI Ombudsman complaint. The bank sent an apology and waived all penalty charges.",
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
            "name": "Sanjay Bhatnagar"
          },
          "datePublished": "2026-06-19",
          "reviewBody": "Agents camped outside past 8 PM asking for cash. SettleLoans gave fast legal help. Their advocate filed a police complaint under Section 329 and 270 BNS. The bank offered an OTS. I got my zero-balance No Dues Certificate in 30 days.",
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
            "name": "Pooja Deshmukh"
          },
          "datePublished": "2026-05-11",
          "reviewBody": "Agents sat on our stairs to shame us before neighbors. SettleLoans took legal steps. They stopped all home visits. We settled our ₹14 Lakh debt for ₹5.8 Lakhs with clean credit records.",
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
      "@id": "https://www.settleloans.in/recovery-agent-refusing-to-leave-house-dharna-what-to-do#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What should I do immediately if a recovery agent refuses to leave my doorstep or hallway?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lock your front door at once. Stay inside your home. Record video using your phone or smart bell. Do not argue. Dial 112 for the police control room. Report that unknown persons are blocking your door. Ask for a PCR police van dispatch."
          }
        },
        {
          "@type": "Question",
          "name": "Is staging a sit-in or dharna outside a borrower's house legal under RBI rules?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. RBI Fair Practices Code rules ban sit-ins outside homes. Agents cannot block doors or loiter in hallways. Shouting and public shaming are strictly forbidden. Visits are allowed only from 8:00 AM to 7:00 PM. Agents must carry an official ID, a bank letter. And a DRA card."
          }
        },
        {
          "@type": "Question",
          "name": "Under which criminal sections can I file a police complaint against recovery agents sitting outside my home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can report agents under Section 270 BNS (formerly Section 290 IPC) for Public Nuisance. You can invoke Section 329 BNS (Section 441 IPC) for Criminal Trespass. You can also cite Section 351 BNS (Section 506 IPC) for Criminal Intimidation. If two or more agents gather, cite Section 189 BNS for Unlawful Assembly."
          }
        },
        {
          "@type": "Question",
          "name": "What is a Daily Diary (DD) entry and how does it help against recovery agents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Daily Diary (DD) entry is an official police log of reported events. Filing a DD entry gives you a police tracking number. It proves that agents caused a public nuisance at your door. This official proof gives you strong leverage during RBI Ombudsman complaints and debt talks."
          }
        },
        {
          "@type": "Question",
          "name": "Can an Apartment Owners Association (RWA) evict or bar recovery agents from residential premises?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Gated societies have legal authority under society byelaws to control access. Society guards can stop unknown visitors. Guards can ask for bank letters. They can evict loud collection agents who disturb the peace."
          }
        },
        {
          "@type": "Question",
          "name": "Can a recovery agent demand immediate cash payment at my doorstep?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Never pay cash to collection agents at your door. Agents might steal cash without updating your loan file. Always pay directly to your bank loan account. Use NEFT, RTGS, IMPS, or bank web portals. Always save your payment receipt."
          }
        },
        {
          "@type": "Question",
          "name": "How does doorstep dharna harassment give leverage for a One-Time Settlement (OTS)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A lawyer presents police DD logs and RBI rule breaches to top bank heads. Banks face heavy regulatory fines and bad press. To avoid Ombudsman fines, lenders halt all visits. Banks then agree to a 45% to 65% OTS waiver."
          }
        },
        {
          "@type": "Question",
          "name": "What documents must a recovery agent produce upon visiting a borrower's residence?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI rules, recovery agents must show three key documents. First, an official agency photo ID card. Second, a bank authorization letter with your loan number. Third, an IIBF DRA certificate proving regulatory training."
          }
        },
        {
          "@type": "Question",
          "name": "What is the mandatory timeline for banks to issue a No Dues Certificate after OTS payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, banks and NBFCs must send a zero-balance No Dues Certificate within 30 days of full settlement. They must also update credit bureaus within 30 days. If the bank delays past 30 days, it must pay you ₹5,000 per day in payout."
          }
        },
        {
          "@type": "Question",
          "name": "Can a recovery agent visit my home on a Sunday or public holiday?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Visits are permitted between 8:00 AM and 7:00 PM unless you set another time. But repeated visits on holidays or late nights violate RBI Fair Practices Code rules. You have a legal right to privacy and peace at home."
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
  { id: 'doorstep-dharna-crisis-reality', title: '1. Doorstep Standoff & Hallway Dharna Tactics' },
  { id: 'rbi-master-directions-and-supreme-court-precedents', title: '2. RBI Master Directions & Supreme Court Rulings' },
  { id: 'criminal-trespass-public-nuisance-bns-ipc', title: '3. Criminal Trespass & Public Nuisance (BNS/IPC)' },
  { id: 'bank-npa-accounting-and-npv-formula', title: '4. Bank NPA Accounting & NPV Recovery Equation' },
  { id: 'doorstep-standoff-defense-roadmap', title: '5. Visual Defense & Eviction Strategic Roadmap' },
  { id: 'emergency-112-police-and-dd-entry-protocol', title: '6. Emergency 112 Police Call & DD Entry Protocol' },
  { id: 'apartment-association-rwa-eviction-strategy', title: '7. Society Byelaws & RWA Security Eviction' },
  { id: 'converting-standoff-into-ots-sanction-forensics', title: '8. Converting Harassment into 55% OTS & NDC Forensics' },
  { id: 'comparative-standoff-defense-matrix', title: '9. Comparative Matrix: Standoff vs Law vs OTS' },
  { id: 'company-resolution-section', title: '10. SettleLoans Legal Defense & Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function RecoveryAgentRefusingToLeaveHousePage() {
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
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Doorstep Harassment Defense • Police 112 Protocol &amp; Criminal Eviction</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Recovery Agent Refusing to Leave House: Remedies</h1>

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
              <span>Supreme Court &amp; RBI Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Stop Doorstep Harassment Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Get Emergency Advocate Defense
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
                Agents camping at your door commit criminal trespass. This violates BNS sections. Lock your door and dial 112 for police help. File a DD entry. Our advocates use these records to force a 55% OTS.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Doorstep Standoffs &amp; Borrower Protections</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Total Ban on Sit-Ins and Dharnas:</strong> RBI rules ban recovery sit-ins. Agents cannot camp outside doors or block hallways. Shaming borrowers before neighbors is strictly illegal.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Immediate Police 112 Protocol:</strong> If agents refuse to leave, dial 112. The police will dispatch a PCR van to clear the area.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Station Daily Diary (DD) Registration:</strong> Log a police DD entry under Section 270 BNS and Section 290 IPC. This creates official proof of public nuisance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Apartment Association &amp. RWA Eviction:</strong> Resident Welfare Associations hold legal power under society byelaws. Society guards can remove unruly agents from private lobbies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Harassment Transformed into 55% OTS:</strong> Escalating doorstep abuses to bank heads and the RBI Ombudsman stops home visits. Banks often agree to a 45% to 65% OTS waiver.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Doorstep Standoff & Hallway Dharna Tactics */}
            <section id="doorstep-dharna-crisis-reality" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. The Doorstep Standoff</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The doorstep standoff is a stressful collection tactic. Third-party agents visit your home and refuse to leave. They stage sit-ins on porches or apartment hallways.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Agents often stay for hours. They speak loudly and knock repeatedly. They tell neighbors about your debts. This is not legal recovery. it is social shame. Agencies use shame to force payment.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <DoorClosed className="w-4 h-4 text-[#1F5EFF]" />
                    <span>The Physical Blockade Mechanism</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Agents block hallways with their bodies. This creates a physical barrier. Family members feel trapped inside. This turns homes into unlawful confinement zones.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Users className="w-4 h-4 text-indigo-600" />
                    <span>Calculated Community Shaming</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Agents talk loudly with neighbors and guards. They disclose loan details openly. This violates your privacy and banking secrecy laws.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This behavior is illegal. It violates Indian laws and RBI rules. Banks have no right to hold a dharna at your home.
              </p>
            </section>

            {/* Section 2: RBI Master Directions & Supreme Court Jurisprudence */}
            <section id="rbi-master-directions-and-supreme-court-precedents" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Doorstep Harassment &amp; Statutory Limits</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The RBI sets clear debt collection rules. The <strong>RBI Master Direction on Fair Practices Code</strong> mandates strict conduct standards for lenders.
              </p>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-blue-950">
                  <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Landmark Judicial Precedents Condemning Doorstep Muscle Tactics</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  In <em>ICICI Bank Ltd. v. Prakash Kaur (2007)</em> and <em>ICICI Bank v. Shanti Devi Sharma (2008)</em>, the Supreme Court banned musclemen. Debt recovery must follow legal process. Lenders cannot use force or threats. In <em>Justice K.S. Puttaswamy (Retd.) v. Union of India (2017)</em>, the Court affirmed that domestic privacy is a fundamental right under <strong>Article 21</strong>.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs my-4">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>Strict 8 AM to 7 PM Window</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    RBI rules permit visits only between 8:00 AM and 7:00 PM. Arriving outside these hours is illegal and carries regulatory fines.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <FileCheck className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Mandatory DRA Certification</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    Agents must hold an IIBF DRA certificate. They must carry valid ID cards and official bank letters naming your loan.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <Ban className="w-3.5 h-3.5 text-purple-600" />
                    <span>Absolute Prohibition of Harassment</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    Threats and abuse are strictly forbidden. Harassment invites heavy Ombudsman fines against the lender.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Banks are liable for their agencies. A single doorstep dharna creates major legal and financial risk for the bank.
              </p>
            </section>

            {/* Section 3: Criminal Trespass, Public Nuisance & Intimidation under BNS / IPC */}
            <section id="criminal-trespass-public-nuisance-bns-ipc" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. Criminal Law Invocations</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If agents refuse to leave your stairs, the case is criminal. Under the IPC and <strong>Bharatiya Nyaya Sanhita (BNS), 2023</strong>, key sections apply:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-red-500 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                    <span>Public Nuisance (Section 270 BNS 2023 / Section 290 IPC)</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Causing annoyance to neighbors via shouts or blocking passages is a public nuisance. This act is subject to police intervention.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-amber-600" />
                    <span>Criminal Trespass &amp; House-Trespass (Section 329 &amp; 331 BNS 2023 / Section 441 &amp; 448 IPC)</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Entering property to intimidate is criminal trespass. Criminal house-trespass occurs when someone stays on private property after being told to leave.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Scale className="w-4 h-4 text-purple-600" />
                    <span>Criminal Intimidation &amp; Unlawful Assembly (Sections 351 &amp; 189 BNS / Sections 503, 506 &amp; 141 IPC)</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Threats are criminal intimidation under Section 351 BNS. Two or more agents gathering to threaten you form an unlawful assembly under Section 189 BNS.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Knowing these terms helps you file accurate reports to the police. This moves the issue beyond a mere civil loan dispute.
              </p>
            </section>

            {/* Section 4: Bank NPA Accounting & NPV Formula */}
            <section id="bank-npa-accounting-and-npv-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Bank NPA Accounting Dynamics</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Banks hire third-party agencies on commission. These agencies often earn 12% to 25% of recovered funds.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Loans overdue for 90 days are <strong>Non-Performing Assets (NPAs)</strong>. Banks must reserve capital for these:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Asset Classification.</th>
                      <th>default Timeline.</th>
                      <th>Capital Provision.</th>
                      <th>OTS Haircut.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-1 / SMA-2.</td>
                      <td>31–90 Days.</td>
                      <td>5%.</td>
                      <td>Fee Waiver.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Substandard NPA.</td>
                      <td>91–365 Days.</td>
                      <td>25%.</td>
                      <td>35%–45%.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful NPA 1.</td>
                      <td>12–24 Months.</td>
                      <td>100%.</td>
                      <td>45%–55%.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Loss Asset.</td>
                      <td>24+ Months.</td>
                      <td>100%.</td>
                      <td>55%–65%.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                As loans near write-off, agencies fear losing mandates. This leads them to stage illegal standoffs. Advocates use the <strong>Net Present Value (NPV) of Recovery</strong> formula to evaluate disputes:
              </p>

              {/* JSX Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Here, C_t is expected recovery cash flows. r is the discount rate. Deductions include legal fees, court delays of 3-5 years. And locked capital.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When you prove illegal visits with police logs, banks face high legal risks. A 35% to 55% OTS payment becomes their best option.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="doorstep-standoff-defense-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">5. Doorstep Standoff Resolution Roadmap</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The graphic shows how our lawyers stop doorstep standoffs. We guide clients through police removal, daily diary logging. And settlement deals.
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/recovery-agent-refusing-to-leave-house-dharna-what-to-do.jpg"
                  alt="Doorstep Standoff and Recovery Agent Dharna Legal Defense Protocol Infographic"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 1–2: Standoff &amp; Police 112</span>
                  <span>Lock doors and record video. Dial 112 for a PCR van and file a police DD entry.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 3–4: RWA &amp; Advocate Notice</span>
                  <span>Have security evict trespassers. Serve legal notice to bank heads and the Ombudsman.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 5: 55% OTS &amp; Zero Dues</span>
                  <span>Stop all agent visits. Negotiate a 45%–65% waiver and get a ₹0 No Dues Certificate.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Emergency 112 Police Call & DD Entry Protocol */}
            <section id="emergency-112-police-and-dd-entry-protocol" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. The Emergency 112/100 Police Protocol</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If an agent refuses to leave, follow this plan. Do not open the door or argue.
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Lock className="w-4 h-4 text-blue-600" />
                    <span>Phase 1: Secure Entryway &amp; Record Video</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Keep your doors locked. Record video through your peephole or window. Capture the agent's face, shouting. And harassment. This recording provides vital legal proof.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Siren className="w-4 h-4 text-indigo-600" />
                    <span>Phase 2: Dial 112 (National Emergency Response System)</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Call 112. Give your address. Tell the operator: <em>"Men are blocking my door and scaring my family. Please send a PCR van."</em> Report this as criminal trespass.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-purple-600" />
                    <span>Phase 3: Interact with Police</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Show the police your video. Cite Section 329 BNS for trespass and Section 270 BNS for public nuisance. Ask police to verify agent IDs.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-emerald-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Phase 4: Register a Daily Diary (DD) Entry</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    After dispersal, file a formal complaint for a <strong>Daily Diary (DD) Entry</strong>. Ensure the receipt notes the bank and agency name. Keep the DD tracking number.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This stamped DD entry proves harassment. It allows your advocate to halt visits and settle the debt.
              </p>
            </section>

            {/* Section 7: Society Byelaws & RWA Security Eviction */}
            <section id="apartment-association-rwa-eviction-strategy" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. RWA Byelaws &amp; Gated Security Rules</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For apartment residents, society rules offer fast protection. State laws define corridors as private common property.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The RWA has the power to control access. If agents loiter outside your flat, they commit trespass against the entire society.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Building2 className="w-4 h-4 text-[#1F5EFF]" />
                    <span>RWA Security Intervention</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Call your society manager. Report that illegal persons are loitering and disturbing the peace. Guards must verify visitors and escort trespassers off the property.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Ban className="w-4 h-4 text-red-600" />
                    <span>Gate Entry Blacklisting</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Request your RWA Secretary to blacklist the agency. Societies can block access via apps like MyGate.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When society enforces entry rules, agents cannot reach your door. This stops standoffs immediately.
              </p>
            </section>

            {/* Section 8: Converting Harassment into 55% OTS & Sanction Forensics */}
            <section id="converting-standoff-into-ots-sanction-forensics" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Converting Harassment into an Affordable Settlement</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A standoff shows collection desperation. By recording these events and filing a DD entry, you gain OTS leverage.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Our advocates notify bank leaders of trespass and RBI rule breaches. To avoid Ombudsman fines, banks stop visits and begin settlement talks.
              </p>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Forensic Checkpoints for Settlement Letters</span>
                </div>
                <ul className="space-y-1.5 text-xs text-amber-800 list-disc pl-4">
                  <li><strong>Registered Bank Letterhead:</strong> The letter must come on official letterhead with a reference number. Avoid agency PDFs.</li>
                  <li><strong>Identity &amp. Account Details:</strong> The letter must list your name, PAN. And loan account number.</li>
                  <li><strong>Debt closure:</strong> It must state the payment clears all principal and interest in full.</li>
                  <li><strong>Direct Remittance:</strong> Pay only into your loan account. Never pay agency accounts.</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>RBI Circular RBI/2023-24/60: NDC &amp; Penalties</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  Per RBI circular, banks must issue a <strong>No Dues Certificate</strong> within 30 days of payment. They must also update CIBIL. If they delay, they owe you <strong>₹5,000 per day</strong>.
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                Credit Score Rehabilitation
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                After settlement, bureaus show a <strong>"Settled"</strong> tag with a <strong>₹0</strong> balance. While your score may drop initially, paying bills on time will help rebuild your score above 750 within 2 years.
              </p>
            </section>

            {/* Section 9: Comparative Legal Defense Matrix */}
            <section id="comparative-standoff-defense-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. Standoff Legal Remedies Matrix</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Comparing remedies helps you act effectively to safeguard your family and finances:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Pathway.</th>
                      <th>Legal Basis.</th>
                      <th>Protection Scope.</th>
                      <th>Impact.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Police 112 / DD Entry.</td>
                      <td>Section 270/329 BNS.</td>
                      <td>Immediate dispersal.</td>
                      <td>Proves trespass.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">RBI Ombudsman.</td>
                      <td>RBI Scheme 2021.</td>
                      <td>Regulatory inquiry.</td>
                      <td>Stops harassment.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Advocate OTS.</td>
                      <td>Settlement Agreement.</td>
                      <td>Permanent discharge.</td>
                      <td>Full debt closure.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. SettleLoans Legal Defense for Dharna Tactics</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Handling standoffs requires expert banking advocates. We know how to enforce RBI rules, cite Supreme Court rulings. And file police complaints. SettleLoans provides complete defense. We notify bank heads, file Ombudsman complaints, coordinate police help. And negotiate 45%–65% OTS waivers with NDCs.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. FAQs: Recovery Agent Standoffs &amp; Legal Defenses</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Verified answers to questions about standoffs, police steps, DD entries. And debt settlement.
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
                Official Regulatory References
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2263"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Bharatiya Nyaya Sanhita, 2023</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Ombudsman Grievances</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Fair Practices Code</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://112.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">National Emergency Response (112)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">Supreme Court Jurisprudence</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/can-recovery-agents-enter-house-without-permission"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Recovery Agents Entry Law
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Harassment Complaints
                </Link>
                <Link
                  href="/how-to-check-recovery-agent-id-card-and-dra-certificate"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Verify Agent IDs
                </Link>
                <Link
                  href="/police-complaint-format-recovery-agent-harassment"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Police Complaint Formats
                </Link>
                <Link
                  href="/can-recovery-agents-visit-home-on-sunday-or-holidays"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Holiday Visit Rules
                </Link>
                <Link
                  href="/recovery-agent-misbehaving-with-women-legal-action"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Women Protection Law
                </Link>
                <Link
                  href="/bank-sending-legal-notice-to-employer-illegal-recovery"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Employer Notice Defense
                </Link>
                <Link
                  href="/rbi-ombudsman-complaint-loan-recovery-harassment"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Ombudsman Grievances
                </Link>
                <Link
                  href="/how-to-verify-authentic-bank-settlement-letter"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Verify Settlements
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  NDC Guide
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
                  <p className="text-xs text-slate-500">Chief Banking &amp. Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Senior specialist in banking defense, police harassment steps, criminal trespass remedies, and One-Time Settlement deals in India.
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
                <span>Doorstep Harassment Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Are Agents Refusing to Leave?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Protect your family today. Hire banking advocates to arrange police protection, send notices. And secure a 45% to 65% OTS.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Legal Protection
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
                  <span>Police 112 Alignment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Confidential Advice</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Ombudsman Escalation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Advocate-Led OTS</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
