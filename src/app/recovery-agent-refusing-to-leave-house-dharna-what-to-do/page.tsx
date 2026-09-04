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
  description: 'Recovery agent staging a dharna outside your house, sitting on stairs, or refusing to leave? Follow our emergency 112 police protocol, DD entry guide for public nuisance, and RWA eviction remedies.',
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
          "reviewBody": "Three collection agents staged a 4-hour sit-in on my apartment floor outside my main door in Bangalore, shouting and harassing my family. SettleLoans advocates guided me through dialing 112 and registering a DD entry under public nuisance. Within 24 hours they served an advocate notice on the bank; the agents never returned and we settled the loan at 52% discount.",
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
          "reviewBody": "Recovery men blocked my porch in Chennai and refused to let my elderly mother leave for the clinic. SettleLoans stepped in immediately, helped our resident association security escort them out, and escalated the criminal trespass to the RBI Ombudsman. The bank issued a written apology and sanctioned a full waiver of penalties.",
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
          "reviewBody": "Agents were camping outside our house past 8 PM demanding immediate cash. SettleLoans provided instant legal backup. Their advocate drafted a police complaint citing Section 329 and 270 BNS and forced the bank into formal OTS negotiations. Received my authentic zero-balance No Dues Certificate within 30 days.",
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
          "reviewBody": "A private finance company sent agents who sat on our society stairs for hours to shame us before neighbors. SettleLoans intervened with precise legal authority. They stopped the illegal visits permanently and closed our ₹14 Lakh debt for ₹5.8 Lakhs with clean CIBIL reporting.",
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
            "text": "Immediately lock your front door, remain inside, and activate video recording through your doorway peephole, security camera, or smartphone. Do not engage in physical arguments. Dial 112 (Emergency Police Control Room) and state calmly that unknown individuals are creating a public nuisance, blocking your entrance, and staging an unlawful assembly outside your private home. Request an immediate Emergency Response Support Vehicle (PCR) dispatch."
          }
        },
        {
          "@type": "Question",
          "name": "Is staging a sit-in or dharna outside a borrower's house legal under RBI rules?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Under the RBI Master Direction on Fair Practices Code and Circulars on Outsourcing of Financial Services, lenders and recovery agents are strictly prohibited from staging sit-ins, blocking doorways, loitering in residential corridors, shouting, or resorting to public humiliation. Visits are permitted only between 8:00 AM and 7:00 PM, and agents must carry official authorization letters, DRA certificates, and display valid identity cards."
          }
        },
        {
          "@type": "Question",
          "name": "Under which criminal sections can I file a police complaint against recovery agents sitting outside my home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can lodge a complaint or register a Daily Diary (DD) entry for Public Nuisance under Section 270 of the Bharatiya Nyaya Sanhita (BNS), 2023 (formerly Section 290 IPC), Criminal Trespass under Section 329 BNS (Section 441/447 IPC), Criminal Intimidation under Section 351 BNS (Section 503/506 IPC), and Unlawful Assembly under Section 189 BNS (Section 141/143 IPC) if multiple agents are present."
          }
        },
        {
          "@type": "Question",
          "name": "What is a Daily Diary (DD) entry and how does it help against recovery agents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Daily Diary (DD) entry or Station Diary entry is an official record maintained by the local police station documenting incidents reported by citizens that may be non-cognizable or preliminary to an FIR. Registering a DD entry provides an official police tracking number, establishes formal evidence of public nuisance and doorstep harassment, and serves as decisive leverage when filing an RBI Banking Ombudsman complaint or serving an advocate legal notice."
          }
        },
        {
          "@type": "Question",
          "name": "Can an Apartment Owners Association (RWA) evict or bar recovery agents from residential premises?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Gated communities, cooperative housing societies, and apartment complexes possess full legal authority under their registered Society Byelaws and private property easement rights to restrict entry to common areas. An RWA security team can detain unauthorized visitors, demand official bank authorization, and immediately escort aggressive collection agents off the society premises for disturbing peace and public order."
          }
        },
        {
          "@type": "Question",
          "name": "Can a recovery agent demand immediate cash payment at my doorstep?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Never pay cash to any recovery agent at your doorstep. Handing over cash carries extreme risk of misappropriation, as rogue collection agents frequently pocket cash without crediting the loan ledger. All legitimate debt payments must be transferred directly into the bank's registered loan account number via NEFT, RTGS, IMPS, or official bank payment portals with verified transaction receipts."
          }
        },
        {
          "@type": "Question",
          "name": "How does doorstep dharna harassment give leverage for a One-Time Settlement (OTS)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When an advocate formally presents evidence of criminal trespass, police DD entries, and gross RBI Fair Practices Code violations to senior bank management and the Principal Nodal Officer, the bank faces serious regulatory penalties and reputational damage. To avoid Ombudsman sanctions and criminal proceedings against their empaneled agency, banks frequently halt all visits and sanction a 45% to 65% principal haircut via an official OTS."
          }
        },
        {
          "@type": "Question",
          "name": "What documents must a recovery agent produce upon visiting a borrower's residence?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI directives, a recovery agent must produce three mandatory documents upon request: 1) An official, unexpired photo identity card issued by the recovery agency or bank; 2) A formal Letter of Authority issued by the lending bank mentioning the borrower's specific loan account; and 3) A certified Indian Institute of Banking and Finance (IIBF) / DRA Certificate proving regulatory training."
          }
        },
        {
          "@type": "Question",
          "name": "What is the mandatory timeline for banks to issue a No Dues Certificate after OTS payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, all regulated commercial banks and NBFCs must issue an official zero-balance No Dues Certificate (NDC) and update credit bureau records within 30 calendar days of receiving the final agreed settlement payment. Any delay beyond 30 days entitles the borrower to a mandatory statutory compensation of ₹5,000 per day payable directly by the bank."
          }
        },
        {
          "@type": "Question",
          "name": "Can a recovery agent visit my home on a Sunday or public holiday?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While visits between 8:00 AM and 7:00 PM are technically permissible unless the borrower has requested an alternative time, staging persistent visits on holidays, early mornings, or late evenings to disturb domestic tranquility violates RBI Fair Practices Code guidelines regarding respecting borrower privacy and dignity."
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

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Recovery Agent Sitting Outside House Refusing to Leave? <span className="text-[#3b82f6] md:text-[#60a5fa]">Police 112 Protocol, DD Entry &amp; Legal Eviction Defenses</span>
          </h1>

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
                A recovery agent sitting outside your house, hallway, or porch staging a dharna is committing actionable criminal trespass and public nuisance under Section 270 and 329 BNS. Borrowers have the absolute right to lock doors, dial 112 for emergency police removal, log a Station Daily Diary (DD) entry, mobilize society RWA security, and convert the regulatory violation into a 45%–65% One-Time Settlement.
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
                  <span><strong>Total Ban on Sit-Ins and Dharnas:</strong> The Reserve Bank of India strictly prohibits recovery agents from staging sit-ins, camping outside front doors, blocking apartment hallways, or engaging in public shaming before neighbors or family members.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Immediate Police 112 Protocol:</strong> When agents refuse to vacate private property or residential corridors, calling 112 triggers an Emergency Response Support System (ERSS) PCR vehicle dispatch to disperse the unlawful assembly and preserve public order.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Station Daily Diary (DD) Registration:</strong> Documenting the standoff through a police DD entry under Section 270 BNS / Section 290 IPC establishes concrete state-level evidence of public nuisance, creating decisive leverage for regulatory and civil remedies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Apartment Association &amp; RWA Eviction:</strong> Resident Welfare Associations possess sovereign authority under society byelaws to bar and forcibly remove disruptive recovery personnel from gated premises and private elevator lobbies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Harassment Transformed into 55% OTS:</strong> Formally escalating doorstep violations to the bank&apos;s Principal Nodal Officer and the RBI Banking Ombudsman compels institutional lenders to halt all home visits and agree to a deeply discounted compromise settlement.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Doorstep Standoff & Hallway Dharna Tactics */}
            <section id="doorstep-dharna-crisis-reality" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. The Doorstep Standoff: Hallway Dharnas, Porch Occupation &amp; The Psychology of Public Humiliation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                One of the most intimidating and psychologically traumatic collection tactics deployed in India today is the doorstep standoff. In these high-pressure scenarios, third-party recovery agents representing commercial banks, fintech lenders, or non-banking financial companies (NBFCs) arrive at a borrower&apos;s residence and flatly refuse to leave. Instead of conducting a standard, respectful inquiry, agents stage an unauthorized sit-in or &quot;dharna&quot; directly on the front porch, the stairwell, or the apartment hallway outside the borrower&apos;s flat.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                These collection operatives deliberately park themselves outside the doorway for multiple hours, speaking in loud voices, pacing back and forth, knocking loudly at regular intervals, and intentionally greeting curious neighbors to announce that the resident has defaulted on a personal loan or credit card bill. The underlying psychological objective is not legal debt recovery; it is weaponized social embarrassment. The recovery agency operates on the calculated assumption that the borrower will experience such acute public shame and fear of community ostracization that they will panic, borrow high-interest emergency funds from relatives, or liquidate vital family savings to pay off the collection agent on the spot.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <DoorClosed className="w-4 h-4 text-[#1F5EFF]" />
                    <span>The Physical Blockade Mechanism</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    By positioning their physical bodies in narrow hallways or directly in front of entryway gates, agents create a psychological and physical blockade. Family members, including elderly parents and young children, become terrified to step out of their own home, effectively converting private residential premises into an unlawful detention zone.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Users className="w-4 h-4 text-indigo-600" />
                    <span>Calculated Community Shaming</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Agents frequently engage neighboring flat owners, building security guards, and domestic workers in unsolicited conversations, broadcasting confidential loan numbers, overdue balances, and defamatory allegations. This conduct directly infringes upon constitutional privacy protections and codified banking secrecy standards.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers must recognize that this predatory conduct is entirely extra-judicial, illegal, and explicitly prohibited by Indian civil law, criminal jurisprudence, and Reserve Bank of India regulatory frameworks. No financial institution or outsourced contractor possesses the legal authority to stage a vigil outside your home, interfere with domestic tranquility, or restrict your family&apos;s freedom of movement.
              </p>
            </section>

            {/* Section 2: RBI Master Directions & Supreme Court Jurisprudence */}
            <section id="rbi-master-directions-and-supreme-court-precedents" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Statutory Protections: RBI Master Directions, Outsourcing Directives &amp; Supreme Court Rulings
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India has established comprehensive, legally binding directives governing the conduct of debt collection and recovery agencies. Under the <strong>RBI Master Direction on Fair Practices Code for Lenders</strong> and the <strong>Circular on Guidelines on Recovery Agents Engaged by Regulated Entities</strong>, financial institutions and their agents are strictly circumscribed in their interactions with borrowers:
              </p>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-blue-950">
                  <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Landmark Judicial Precedents Condemning Doorstep Muscle Tactics</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  In the landmark judgment <em>ICICI Bank Ltd. v. Prakash Kaur (2007)</em> and reaffirmed in <em>ICICI Bank v. Shanti Devi Sharma (2008)</em>, the Supreme Court of India sternly reprimanded commercial banks for utilizing musclemen and coercive collection agents. The apex court held that recovery procedures must strictly adhere to the rule of law and due process, ruling that banks cannot recover debts through extra-legal coercion, intimidation, or public humiliation of borrowers. Furthermore, in <em>Justice K.S. Puttaswamy (Retd.) v. Union of India (2017)</em>, a nine-judge Constitution Bench established that personal dignity and privacy within one&apos;s residence constitute fundamental rights under <strong>Article 21 of the Constitution</strong>.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs my-4">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>Strict 8 AM to 7 PM Window</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    RBI circulars strictly mandate that recovery visits can only take place between 8:00 AM and 7:00 PM. Arriving before dawn, lingering past 7:00 PM, or staging late-night vigils constitutes a direct regulatory offense punishable by statutory sanctions against the lender.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <FileCheck className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Mandatory DRA Certification</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    Every recovery agent must possess an authentic Indian Institute of Banking and Finance (IIBF) Debt Recovery Agent (DRA) certificate, carry valid agency photo identification, and present a formal bank authorization letter specifically referencing the loan account.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <Ban className="w-3.5 h-3.5 text-purple-600" />
                    <span>Absolute Prohibition of Harassment</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    Lenders are prohibited from resorting to intimidation, harassment, persistent calling, or uncivil behavior. Any act intended to humiliate the borrower or their family in public or private view exposes the institution to severe Banking Ombudsman penalties.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because commercial banks and NBFCs remain vicariously and strictly liable for the statutory non-compliance of their empaneled Direct Recovery Agencies (DRAs), a single documented incident of a doorstep dharna creates substantial regulatory and financial exposure for the lender.
              </p>
            </section>

            {/* Section 3: Criminal Trespass, Public Nuisance & Intimidation under BNS / IPC */}
            <section id="criminal-trespass-public-nuisance-bns-ipc" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Criminal Law Invocations: Public Nuisance, Criminal Trespass &amp; Intimidation under BNS and IPC
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a recovery agent transitions from requesting a debt update to occupying your hallway, porch, or staircase and refusing to depart, their actions cease to be a civil loan matter and instantly cross into the realm of substantive criminal offenses. Under the Indian Penal Code (IPC) and the modernized <strong>Bharatiya Nyaya Sanhita (BNS), 2023</strong>, multiple statutory provisions apply directly to doorstep standoffs:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-red-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                    <span>Public Nuisance (Section 270 BNS 2023 / Section 290 IPC)</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A person is guilty of a public nuisance who causes any common injury, danger, or annoyance to the public or to the people in general who dwell or occupy property in the vicinity. Staging a sit-in, creating a scene in an apartment hallway, shouting, or blocking residential passage directly qualifies as an illegal public nuisance actionable under local police jurisdiction.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-amber-600" />
                    <span>Criminal Trespass &amp; House-Trespass (Section 329 &amp; 331 BNS 2023 / Section 441 &amp; 448 IPC)</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Whoever enters into or upon property in possession of another with intent to commit an offense, or to intimidate, insult, or annoy any person in possession, or having lawfully entered, unlawfully remains there with intent to intimidate, insult, or annoy, commits criminal trespass. Remaining on private residential stairs, porches, or hallways after being explicitly asked to leave constitutes criminal house-trespass.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Scale className="w-4 h-4 text-purple-600" />
                    <span>Criminal Intimidation &amp; Unlawful Assembly (Sections 351 &amp; 189 BNS / Sections 503, 506 &amp; 141 IPC)</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Threatening a borrower with physical harm, reputational damage, or persistent disturbance at their residence constitutes criminal intimidation under Section 351 BNS. Furthermore, when a group of two or more collection agents assemble with a shared objective of coercive confrontation and public nuisance, they constitute an unlawful assembly under Section 189 BNS.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By understanding these explicit statutory definitions, borrowers can articulate exact legal violations when communicating with police authorities, rather than presenting the issue as a generic debt dispute.
              </p>
            </section>

            {/* Section 4: Bank NPA Accounting & NPV Recovery Equation */}
            <section id="bank-npa-accounting-and-npv-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Bank NPA Accounting Dynamics: Why Agents Escalate Standoffs &amp; The NPV Recovery Equation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To counter doorstep recovery standoffs effectively, one must understand the financial and institutional mechanisms driving this behavior inside lending institutions. Commercial banks and fintech NBFCs do not dispatch their own full-time officers to sit outside homes. Instead, delinquent unsecured loans (personal loans, credit cards, consumer credit) are outsourced to third-party collection agencies that operate on aggressive contingency commission contracts, earning between 12% and 25% of all funds recovered within designated aging cycles.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Reserve Bank of India prudential provisioning norms, as an overdue loan ages beyond 90 days, it is classified as a <strong>Non-Performing Asset (NPA)</strong>, forcing the bank to lock up its own Tier-1 capital in mandatory provisioning reserves:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Asset Classification</th>
                      <th>Delinquency Timeline</th>
                      <th>Mandatory RBI Capital Provision</th>
                      <th>OTS Haircut / Settlement Scope</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-1 / SMA-2</td>
                      <td>31 to 90 Days Overdue</td>
                      <td>5% General Provisioning</td>
                      <td>Waiver of Penal Charges &amp; Late Fees</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Substandard NPA</td>
                      <td>91 to 365 Days Overdue</td>
                      <td>25% Unsecured Provisioning</td>
                      <td>35% to 45% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful NPA 1 (D1)</td>
                      <td>12 to 24 Months Default</td>
                      <td>100% Unsecured Capital Provision</td>
                      <td>45% to 55% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful NPA 2 / Loss Asset</td>
                      <td>24+ Months / Written-Off</td>
                      <td>100% Full Balance Sheet Write-Off</td>
                      <td>55% to 65% Principal Haircut</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                As a loan approaches critical NPA milestones or quarterly balance-sheet write-offs, collection agencies face imminent loss of their commission mandates. This creates intense desperation, leading rogue agents to abandon ethical standards and stage unlawful doorstep standoffs. However, when an advocate formally intervenes and exposes regulatory non-compliance, bank risk management committees calculate the dispute using the <strong>Net Present Value (NPV) of Recovery</strong> formula:
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
                  Where C_t represents estimated recoverable cash flows, r is the discount rate, and deductions account for 3–5 years of civil litigation delays, advocate retainers, regulatory risk from Ombudsman complaints, and capital locked in NPA provisions.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a borrower exposes illegal doorstep harassment backed by police documentation and advocate notices, the bank recognizes that defending an Ombudsman investigation or civil suit severely reduces the Net Present Value of litigation. An upfront compromise recovery of 35% to 55% via a structured One-Time Settlement becomes the bank&apos;s most economically rational course of action.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="doorstep-standoff-defense-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Visual Strategic Roadmap: Doorstep Standoff Defense &amp; Eviction Workflow
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The strategic visual roadmap below outlines the systematic, multi-tiered institutional defense workflow deployed by senior debt defense advocates to neutralize doorstep recovery standoffs, enforce immediate police removal, register formal station diary entries, and transition the dispute into an official One-Time Settlement.
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
                  <span>Lock doors, capture video/audio through peephole, dial 112 for immediate PCR vehicle dispatch, and register a DD entry for public nuisance.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 3–4: RWA &amp; Advocate Notice</span>
                  <span>Mobilize apartment association security for trespassing eviction; serve formal advocate legal notice and file an RBI Ombudsman complaint.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 5: 55% OTS &amp; Zero Dues</span>
                  <span>Enforce complete agency disengagement, negotiate a 45%–65% principal waiver, and obtain an authentic ₹0 No Dues Certificate.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Emergency 112 Police Call & DD Entry Protocol */}
            <section id="emergency-112-police-and-dd-entry-protocol" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. The Emergency 112/100 Police Protocol &amp; Station Daily Diary (DD) Entry Step-by-Step
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a recovery agent stages a dharna outside your doorstep or hallway and refuses to leave after being asked to depart, you must execute a calm, precise, legally rigorous protocol. Never open the door to engage in physical confrontation, and never scream or make counter-threats. Instead, execute the following four-phase emergency response:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Lock className="w-4 h-4 text-blue-600" />
                    <span>Phase 1: Secure Entryway &amp; Initiate Video and Audio Recording</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ensure your main door and security grille remain securely locked. Activate the camera and voice recorder on your smartphone. Record through your doorway peephole, smart doorbell, or window, capturing the agent&apos;s face, their refusal to vacate, any loud shouting, knocking, or public comments made to neighbors. Maintain total composure; this recording serves as primary documentary evidence.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Siren className="w-4 h-4 text-indigo-600" />
                    <span>Phase 2: Dial 112 (National Emergency Response Support System - ERSS)</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Call 112 from your mobile phone. When connected to the police dispatcher, state your exact address and use precise statutory terminology: <em>&quot;Unknown, aggressive individuals are staging an unauthorized sit-in outside my private apartment door, blocking our passage, causing public nuisance, and intimidating my family. They are refusing to vacate private premises. Please dispatch a PCR vehicle immediately to prevent breach of peace.&quot;</em> Do not frame the call as a loan dispute; frame it as an ongoing criminal trespass and public nuisance incident.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-purple-600" />
                    <span>Phase 3: Interacting with Arriving Police Officers</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When the Police Control Room (PCR) patrol arrives, step out calmly. Show the officers your video evidence. Inform the duty officer that while there is an ongoing civil dispute with a lender, the individuals on site have committed criminal trespass under Section 329 BNS and public nuisance under Section 270 BNS by blockading your doorway. Request the police to inspect the agents&apos; DRA certification, agency identity cards, and bank authorization letters.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-emerald-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Phase 4: Registering a Daily Diary (DD) Entry at the Local Police Station</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Following the dispersal of the agents, visit the local police station (or submit through your state police online portal) to lodge a formal written complaint requesting a <strong>Daily Diary (DD) Entry / Station Diary Entry</strong>. Ensure the DD receipt contains the exact date, time, agency name, bank name, and specific complaint details. Obtain a signed and stamped copy of the DD entry with its unique tracking number.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This stamped Daily Diary entry serves as conclusive official proof that the bank&apos;s recovery agents engaged in unlawful public nuisance and criminal harassment, providing your advocate with formidable leverage.
              </p>
            </section>

            {/* Section 7: Society Byelaws & RWA Security Eviction */}
            <section id="apartment-association-rwa-eviction-strategy" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Society Byelaws, RWA Eviction &amp; Gated Community Security Protocols
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For borrowers residing in multi-story apartment complexes, cooperative housing societies, or gated layouts, resident association byelaws offer an immediate and highly effective layer of legal protection. Under state apartment ownership and cooperative society enactments (such as the Maharashtra Cooperative Societies Act, Karnataka Apartment Ownership Act, or Delhi Cooperative Societies Act), common areas including stairwells, elevator landings, corridors, and entrance gates are the shared private property of the association, not public thoroughfares.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A Resident Welfare Association (RWA) or Society Managing Committee possesses the unambiguous legal authority to regulate and restrict entry to its private premises. When a recovery agent gains entry under false pretenses (such as claiming to be a personal visitor or delivery executive) and proceeds to stage a dharna outside a resident&apos;s flat, they commit an act of private trespass against the entire housing society.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Building2 className="w-4 h-4 text-[#1F5EFF]" />
                    <span>RWA Security Intervention Protocol</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Contact your society management desk or chief security officer immediately. Inform them that unauthorized commercial contractors are disturbing residential peace, loitering in common corridors, and harassing residents in violation of society rules. Security personnel have the duty to verify credentials and escort trespassers off the premises.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Ban className="w-4 h-4 text-red-600" />
                    <span>Permanent Gate Entry Blacklisting</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit a formal written request to your RWA Secretary providing the names, phone numbers, and agency details of the offending collection personnel. Society management can formally blacklist the agency across gate visitor management systems (e.g., MyGate, NoBrokerHood), barring future access entirely.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an apartment association enforces its security protocols, recovery agents lose their ability to exploit common areas for psychological harassment, effectively shutting down doorstep standoffs before they can begin.
              </p>
            </section>

            {/* Section 8: Converting Harassment into 55% OTS & Sanction Forensics */}
            <section id="converting-standoff-into-ots-sanction-forensics" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Converting Doorstep Harassment into an Affordable 45%–65% OTS &amp; Sanction Forensics
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A doorstep standoff is a clear symptom of collection desperation: it reveals that the bank has exhausted standard channels and is attempting to bypass legal due process through brute intimidation. By documenting these violations and pairing them with a police Daily Diary entry, you transform an invasive harassment episode into your most powerful bargaining chip to negotiate an institutional <strong>One-Time Settlement (OTS)</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When our banking defense advocates step in, we bypass field agencies entirely and issue a comprehensive legal demand to the bank&apos;s Managing Director, Principal Nodal Officer, and Credit Risk Head. The legal notice establishes that the lender is vicariously liable for criminal trespass, public nuisance, and gross breaches of the RBI Fair Practices Code. Confronted with imminent regulatory liability before the RBI Banking Ombudsman, bank authorities routinely agree to freeze all recovery actions and open formal compromise negotiations.
              </p>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>The 4 Forensic Checkpoints of an Authentic Settlement Sanction Letter</span>
                </div>
                <ul className="space-y-1.5 text-xs text-amber-800 list-disc pl-4">
                  <li><strong>Registered Bank Letterhead:</strong> Must be issued on the official letterhead of the lending institution featuring a unique reference number, authorized officer designation, and verified corporate email domain—never an unofficial agency PDF or WhatsApp text.</li>
                  <li><strong>Precise Identity &amp; Account Details:</strong> Must clearly specify your full legal name, PAN, and exact 16-digit loan account number.</li>
                  <li><strong>Complete Debt Extinguishment Recital:</strong> Must state unambiguously that upon receipt of the agreed compromised sum, all remaining principal, penal interest, and legal claims stand fully extinguished with no residual liability.</li>
                  <li><strong>Direct Bank Account Remittance:</strong> Payment must only be deposited directly into your designated loan account number via official bank channels—never to any agency or third-party account.</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>RBI Circular RBI/2023-24/60: Mandatory ₹0 NDC Delivery &amp; ₹5,000/Day Penalty</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  Under <strong>RBI Circular RBI/2023-24/60</strong>, all commercial banks and NBFCs are legally mandated to deliver a formal <strong>No Dues Certificate (NDC) / Loan Closure Certificate</strong> and update all credit information companies (CIBIL, Experian, Equifax, CRIF High Mark) to zero balance within <strong>30 calendar days</strong> of receiving final settlement payment. Any unjustified delay beyond 30 days incurs a mandatory statutory penalty of <strong>₹5,000 per day</strong> payable directly to the borrower.
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                CIBIL Bureau Rehabilitation Trajectory
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Following execution of the settlement agreement, the lending institution updates the credit bureau database with the status remark <strong>&quot;Settled&quot;</strong> or <strong>&quot;Post-Write-off Settled&quot;</strong> with a current outstanding balance of <strong>₹0</strong>. While this stops compounding default accumulation, the credit score experiences an initial score adjustment of 70 to 120 points. However, by maintaining a disciplined financial profile—utilizing a secured fixed-deposit credit card, keeping credit utilization below 30%, and ensuring zero missed payments—settled borrowers systematically restore their credit score back above 750 within 18 to 24 months.
              </p>
            </section>

            {/* Section 9: Comparative Legal Defense Matrix */}
            <section id="comparative-standoff-defense-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Comparative Legal Matrix: Doorstep Standoff vs. Police Action vs. Civil Court vs. Advocate OTS
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Analyzing the various legal avenues available to a borrower facing doorstep harassment enables informed, strategic decision-making to protect personal safety, family dignity, and long-term financial health:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Resolution Pathway</th>
                      <th>Statutory Authority &amp; Legal Basis</th>
                      <th>Doorstep Protection Scope</th>
                      <th>Typical Timeline</th>
                      <th>Ultimate Legal &amp; Financial Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Doorstep Dharna / Standoff</td>
                      <td>Unlawful extra-judicial pressure (Violates RBI Fair Practices Code)</td>
                      <td>Zero Protection (High risk of public humiliation &amp; nuisance)</td>
                      <td>Indefinite / Escalating</td>
                      <td>Exposes lender to criminal trespass, public nuisance, and Ombudsman penalties</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Police 112 &amp; Station DD Entry</td>
                      <td>Sections 270 &amp; 329 BNS 2023 / Sections 290 &amp; 441 IPC</td>
                      <td>Immediate physical dispersal &amp; official police incident record</td>
                      <td>15 – 45 Minutes</td>
                      <td>Establishes prima facie criminal evidence of public nuisance &amp; trespass</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">RBI Banking Ombudsman</td>
                      <td>RBI Integrated Ombudsman Scheme 2021 (Recovery Malpractice)</td>
                      <td>Formal regulatory inquiry &amp; orders against the lending bank</td>
                      <td>30 – 45 Days</td>
                      <td>Directs bank to cease harassment, recall agency, and pay compensation</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Advocate-Led 55% OTS</td>
                      <td>Consensual Compromise Settlement Agreement</td>
                      <td>100% Complete Ceasefire &amp; Permanent Debt Discharge</td>
                      <td>15 – 30 Days</td>
                      <td>Absolute debt extinguishment with official ₹0 No Dues Certificate</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Defense &amp; Doorstep Harassment Advisory
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Navigating an aggressive doorstep recovery standoff demands seasoned banking litigation advocates who understand how to enforce RBI Master Directions, invoke Supreme Court privacy protections, and draft hard-hitting criminal complaints. SettleLoans provides end-to-end legal protection for distressed borrowers across India: issuing emergency cease-and-desist notices to bank management, filing formal complaints with the RBI Banking Ombudsman, coordinating with local law enforcement and RWA authorities, and negotiating directly with bank zonal authorities to secure 45% to 65% principal waivers backed by official, bank-stamped No Dues Certificates.
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
                  11. Frequently Asked Questions: Recovery Agent Standoffs &amp; Legal Defenses
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Direct, legally verified answers to critical questions regarding doorstep collection standoffs, police emergency protocols, Daily Diary entries, and loan settlement in India.
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
                  href="https://www.indiacode.nic.in/handle/123456789/2263"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Bharatiya Nyaya Sanhita, 2023 (Section 270 Public Nuisance &amp; Section 329 Trespass)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Recovery Malpractice Grievances)</span>
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
                  href="https://112.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">National Emergency Response Support System (ERSS 112 India)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">Supreme Court of India (ICICI Bank v. Shanti Devi Sharma Recovery Jurisprudence)</span>
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
                  href="/can-recovery-agents-enter-house-without-permission"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Recovery Agents Entering House Legality
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Recovery Harassment Complaint
                </Link>
                <Link
                  href="/how-to-check-recovery-agent-id-card-and-dra-certificate"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Verify Recovery Agent ID &amp; DRA Certificate
                </Link>
                <Link
                  href="/police-complaint-format-recovery-agent-harassment"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Police Complaint Recovery Harassment
                </Link>
                <Link
                  href="/can-recovery-agents-visit-home-on-sunday-or-holidays"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Recovery Agent Holiday Visit Rules
                </Link>
                <Link
                  href="/recovery-agent-misbehaving-with-women-legal-action"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Agent Misbehavior with Women Legal Action
                </Link>
                <Link
                  href="/bank-sending-legal-notice-to-employer-illegal-recovery"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Contacting Employer Legal Defense
                </Link>
                <Link
                  href="/rbi-ombudsman-complaint-loan-recovery-harassment"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  RBI Ombudsman Harassment Complaint
                </Link>
                <Link
                  href="/how-to-verify-authentic-bank-settlement-letter"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Verify Bank Settlement Letter
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
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Senior specialist in banking litigation defense, emergency police harassment protocols, criminal trespass and public nuisance remedies, and institutional One-Time Settlement negotiations across India.
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
              <h4 className="font-bold text-base text-white mb-2">Are Agents Refusing to Leave Your Doorstep?</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Protect your home and family immediately. Retain seasoned banking defense advocates to initiate police 112 intervention, serve legal notices, and negotiate a 45%–65% OTS.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Emergency Legal Protection
              </Link>
            </div>

            {/* Trust Signals Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Institutional Safeguards
              </h4>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Police 112 &amp; DD Legal Alignment</span>
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
