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
  Home,
  UserX,
  Users,
  Building,
  KeyRound
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Stop Recovery Calls to Neighbours | SettleLoans',
  description: 'Recovery agents defaming you to neighbours and landlords? Stop third-party shaming with Supreme Court privacy rulings and SettleLoans.',
  keywords: [
    'recovery agent harassing neighbours and landlord',
    'recovery agents talking to neighbours',
    'recovery agent contacting landlord for loan default',
    'bank recovery agent shouting in society hallway',
    'illegal loan recovery at residential society',
    'rbi guidelines on contacting neighbours for loan recovery',
    'supreme court privacy judgment loan recovery puttaswamy',
    'criminal defamation notice against recovery agency',
    'section 356 bns defamation loan harassment',
    'section 500 ipc defamation bank agents',
    'housing society trespass notice against recovery agents',
    'one time settlement after recovery harassment'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/recovery-agents-talking-to-neighbours-landlord',
  },
  openGraph: {
    title: 'Recovery Agents Harassing Neighbours & Landlord? Legal Rights, Privacy Laws & Defamation Remedies',
    description: 'Stop illegal residential collection harassment. Understand your rights under Supreme Court privacy rulings, RBI Fair Practices Code, and how advocates file criminal defamation notices against banks.',
    url: 'https://www.settleloans.in/recovery-agents-talking-to-neighbours-landlord',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/recovery-agents-talking-to-neighbours-landlord.jpg',
        width: 1200,
        height: 675,
        alt: 'Recovery Agents Harassing Neighbours and Landlord Legal Defenses Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recovery Agents Harassing Neighbours & Landlord? Legal Rights, Privacy Laws & Defamation Remedies',
    description: 'Facing social humiliation and eviction panic from collection agents contacting your landlord or neighbours? Discover statutory legal protections and defamation remedies.',
    images: ['https://www.settleloans.in/images/infographics/recovery-agents-talking-to-neighbours-landlord.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/recovery-agents-talking-to-neighbours-landlord#webpage",
      "url": "https://www.settleloans.in/recovery-agents-talking-to-neighbours-landlord",
      "name": "Recovery Agents Harassing Neighbours & Landlord? Legal Rights, Privacy Laws & Defamation Remedies",
      "description": "Are recovery agents harassing your neighbours or landlord? Learn your privacy rights, Section 356 BNS defamation laws, and how to stop home visits.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/recovery-agents-talking-to-neighbours-landlord#breadcrumb"
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
      "@id": "https://www.settleloans.in/recovery-agents-talking-to-neighbours-landlord#breadcrumb",
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
          "name": "Residential Harassment Legal Defense",
          "item": "https://www.settleloans.in/recovery-agents-talking-to-neighbours-landlord"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/recovery-agents-talking-to-neighbours-landlord#article",
      "headline": "Recovery Agents Talking to Neighbours & Landlord? Supreme Court Privacy Protections, Criminal Defamation & Society Trespass Injunctions",
      "description": "Legal guide on stopping recovery agent harassment at your home. Covers Supreme Court privacy rules, Section 356 BNS defamation, and loan settlements.",
      "image": "https://www.settleloans.in/images/infographics/recovery-agents-talking-to-neighbours-landlord.jpg",
      "datePublished": "2026-08-31T10:30:00+05:30",
      "dateModified": "2026-08-31T10:30:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/recovery-agents-talking-to-neighbours-landlord#webpage"
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
      "@id": "https://www.settleloans.in/recovery-agents-talking-to-neighbours-landlord#service",
      "name": "SettleLoans - Residential Harassment Defense & Debt Resolution Advisory",
      "description": "Legal protection for borrowers facing recovery agent harassment at home. We stop neighbour shaming and negotiate One-Time Settlements.",
      "url": "https://www.settleloans.in/recovery-agents-talking-to-neighbours-landlord",
      "image": "https://www.settleloans.in/images/infographics/recovery-agents-talking-to-neighbours-landlord.jpg",
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
            "name": "Vikramaditya Mehta"
          },
          "datePublished": "2026-07-18",
          "reviewBody": "Recovery agents visited my flat in Bengaluru. They yelled in the hall. They told my landlord about my debt. SettleLoans sent a swift legal notice under Section 356 BNS. They also filed an RBI Ombudsman complaint. The bank withdrew the team at once. They settled my loan with a 58% waiver.",
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
          "datePublished": "2026-06-29",
          "reviewBody": "Agents asked my building guard about my loans. They knocked on doors nearby. SettleLoans sent an RWA notice to the bank. All visits stopped in 24 hours. We closed the account with an official zero-balance NDC.",
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
            "name": "Sameer Joshi"
          },
          "datePublished": "2026-08-08",
          "reviewBody": "A bank agent called my landlord in Pune. He claimed the flat would be locked. SettleLoans sent a legal letter to my landlord. They explained Privity of Contract. They also served notice on the bank. They settled my 14-lakh debt for 5.2 lakhs.",
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
            "name": "Devendra Rathore"
          },
          "datePublished": "2026-05-22",
          "reviewBody": "Fintech collectors yelled in my apartment corridor. SettleLoans filed a police complaint under Section 329 BNS. The bank stopped all home visits at once. They offered a low-cost OTS plan.",
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
      "@id": "https://www.settleloans.in/recovery-agents-talking-to-neighbours-landlord#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can a bank recovery agent legally talk to my neighbours or landlord about my loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Under RBI rules and Privity of Contract, banks cannot share debt details with third parties. Talking to neighbours or landlords breaks privacy laws. It is also criminal slander under Section 356 BNS and Section 500 IPC."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if a recovery agent creates a scene in my apartment corridor or society?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Record phone video and audio right away. Get CCTV footage from society guards. File a trespass complaint with your RWA. Have a lawyer send a legal notice to the bank Nodal Officer."
          }
        },
        {
          "@type": "Question",
          "name": "Can my landlord evict me because a bank recovery agent visited or called them?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A landlord cannot evict you. bank recovery calls. Under tenancy laws and the Transfer of Property Act, eviction needs valid legal grounds. A lawyer can send a letter to reassure your landlord."
          }
        },
        {
          "@type": "Question",
          "name": "Can recovery agents enter a gated housing society without resident authorization?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Gated housing societies are private property managed by RWA rules. Agents cannot force entry past security gates. Entering without permission is criminal trespass under Section 329 BNS."
          }
        },
        {
          "@type": "Question",
          "name": "Which police sections apply when recovery agents intimidate neighbours or landlords?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can file police complaints under Section 329 BNS for trespass. Use Section 356 BNS for slander. Use Section 351 BNS for criminal threats. and Section 308 BNS for extortion."
          }
        },
        {
          "@type": "Question",
          "name": "What are the permitted hours for recovery agents to visit a residential address?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI rules, agents can visit only between 8:00 AM and 7:00 PM. Any visit before 8:00 AM or after 7:00 PM violates rules. It invites RBI Ombudsman fines."
          }
        },
        {
          "@type": "Question",
          "name": "How does neighbour and landlord harassment create leverage for a loan settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When a lawyer records RBI violations, trespass. And slander, banks face big regulatory fines. To avoid fines and public complaints, banks often approve a 45% to 65% One-Time Settlement."
          }
        },
        {
          "@type": "Question",
          "name": "What documents must a recovery agent carry when visiting a borrower's home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Every recovery agent must carry an official bank ID card. They must show an IIBF DRA certificate. They also need a bank visit authorization letter. Without these, they are illegal trespassers."
          }
        },
        {
          "@type": "Question",
          "name": "What is the mandatory RBI deadline for issuing a No Dues Certificate after settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, banks must issue an NDC within 30 days of full payment. Any delay costs the bank ₹5,000 per day in penalty paid to the debtor."
          }
        },
        {
          "@type": "Question",
          "name": "Can a housing society RWA ban recovery agents from entering the complex?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Resident Welfare Associations (RWAs) can ban recovery agents under society bye-laws. If agents make noise or harass residents, RWAs can block them at the gate."
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
  { id: 'residential-recovery-harassment-reality', title: '1. Social Humiliation & Hallway Shaming' },
  { id: 'supreme-court-privacy-rbi-mandates', title: '2. Supreme Court Privacy & RBI Directives' },
  { id: 'criminal-defamation-trespass-laws', title: '3. Criminal Defamation & Society Trespass' },
  { id: 'bank-accounting-npa-npv-formula', title: '4. NPA Accounting & NPV Recovery Equation' },
  { id: 'residential-harassment-defense-roadmap', title: '5. Harassment Defense Visual Roadmap' },
  { id: 'emergency-4-stage-advocate-protocol', title: '6. The 4-Stage Emergency Legal Protocol' },
  { id: 'forcing-compromise-settlement-ots', title: '7. Converting Harassment into 55% OTS' },
  { id: 'sanction-forensics-rbi-ndc-mandate', title: '8. Sanction Forensics & RBI ₹0 NDC Mandate' },
  { id: 'comparative-legal-defense-matrix', title: '9. Comparative Legal Defense Matrix' },
  { id: 'company-resolution-section', title: '10. SettleLoans Legal Defense Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function RecoveryAgentsTalkingToNeighboursLandlordPage() {
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
            <span>Residential Harassment Defense • Privacy Rights &amp; Criminal Defamation</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Recovery Agents Contacting Neighbours or Landlord</h1>

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
              <span>Stop Residential Harassment Now</span>
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
              <p className="text-[11px] leading-relaxed text-blue-800">Telling neighbours, guards. or landlords about a loan is illegal. It breaks Privity of Contract and RBI rules. Under Article 21, money privacy is a basic right. Banking advocates can send criminal slander notices. They can also secure a 45% to 65% OTS settlement.</p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Residential Harassment &amp; Legal Defenses</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /> <span><strong>No Third-Party Disclosures:</strong> RBI rules ban banks from contacting neighbours, guards. or landlords about your loans.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /> <span><strong>Privity of Contract:</strong> Landlords and neighbours are legal strangers to your loan. Banks cannot harm your tenancy.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /> <span><strong>Right to Privacy:</strong> Under the Supreme Court <em>Puttaswamy</em> ruling, privacy is protected under Article 21.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /> <span><strong>Criminal Slander & Trespass:</strong> Agents face criminal charges under Section 356 BNS, Section 329 BNS. and Section 351 BNS.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /> <span><strong>Settlement Scope:</strong> A legal notice stops home visits fast. It leads to an official 45% to 65% One-Time Settlement.</span></li>
              </ul>
            </div>

            {/* Section 1: The Crisis of Social Shaming */}
            <section id="residential-recovery-harassment-reality" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. The Crisis of Social Shaming</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Loan disputes should never reach your doorstep. Yet many harsh collection agencies cross the line. Agents shout in apartment hallways. They knock on doors nearby. They ask guards about personal matters. They also call landlords with false threats.</p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">These harsh tactics aim to cause social shame and fear. Collection agents know that families worry about losing their homes. By spreading loan gossip in a building, agents try to force quick payments. They want you to take costly loans or use retirement savings to pay.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Users className="w-4 h-4 text-[#1F5EFF]" />
                    <span>The Doctrine of Privity of Contract</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">Under the <strong>Indian Contract Act, 1872</strong>, a loan binds only the lender and debtor. Neighbours, society committees. And landlords are legal strangers to the debt. Banks have no right to share debt data with them.</p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Home className="w-4 h-4 text-indigo-600" />
                    <span>Tenancy Protections Against Debt Coercion</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">Under the <strong>Transfer of Property Act, 1882</strong>, rent laws protect tenants. You cannot be evicted for an unsecured loan default. Personal loans create no lien on rented homes.</p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">When agents humiliate you before neighbours, debt recovery becomes illegal abuse. Indian law provides strong legal shields. You can stop home collection visits for good.</p>
            </section>

            {/* Section 2: Supreme Court Privacy Jurisprudence & RBI Directives */}
            <section id="supreme-court-privacy-rbi-mandates" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Privacy &amp; Anti-Defamation Protections</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Indian law and Reserve Bank of India rules protect debtors. bank lenders cannot use public shaming, third-party calls. or home threats. A clear legal shield protects you from abusive tactics.</p>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-blue-950">
                  <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Landmark Supreme Court Precedents on Privacy and Human Dignity</span>
                </div>
                <p className="leading-relaxed text-blue-800">In <em>Justice K.S. Puttaswamy (Retd.) v. Union of India (2017)</em>, the Supreme Court declared privacy a basic right under <strong>Article 21</strong>. This protects personal dignity and loan data. In <em>ICICI Bank v. Shanti Devi Sharma (2008)</em>, the court ruled that banks cannot use musclemen or force that disrupts peace.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs my-4">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    <span>RBI Fair Practices Code</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">The RBI Fair Practices Code orders lenders to avoid threats. Agents cannot share loan details with family, neighbours. or third parties.</p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-indigo-600" />
                    <span>RBI Outsourcing Circular</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">Under RBI rules on outsourcing, agents can visit only between 8:00 AM and 7:00 PM. Visits outside these hours break rules.</p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-purple-600" />
                    <span>DPDPA 2023 &amp; IT Act</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">Under Sections 43A and 72A of the IT Act and data protection laws, leaking money data to third parties is illegal.</p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">When agents contact your landlord or speak with neighbours, the bank breaks regulatory rules. Banks remain liable for agency actions. Advocates use these violations to demand action before the Banking Ombudsman and courts.</p>
            </section>

            {/* Section 3: Criminal Defamation, Criminal Trespass & Society Injunctions */}
            <section id="criminal-defamation-trespass-laws" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. Criminal Defamation, Society Trespass</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Sharing loan defaults with neighbours, security guards. or landlords is a crime. It is also a civil wrong. Spreading private money data to shame someone is criminal slander and threats under Indian law.</p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Debtors facing home abuse can use strong legal protections under the Bharatiya Nyaya Sanhita (BNS), 2023. And the Indian Penal Code (IPC).</p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-red-500 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                    <span>Criminal Defamation (Section 356 BNS 2023 / Section 499 &amp; 500 IPC)</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">Publishing statements to hurt someone&apos;s reputation is criminal slander. Telling neighbours or landlords about debt to harm social standing brings up to two years in jail, a fine. or both.</p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-amber-600" />
                    <span>Criminal Trespass (Section 329 BNS 2023 / Section 441 &amp; 447 IPC)</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Entering apartment buildings without consent. or staying to insult residents, is criminal trespass punishable by jail.</p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Scale className="w-4 h-4 text-purple-600" />
                    <span>Criminal Intimidation &amp; Extortion (Section 351 &amp; 308 BNS / Sections 503, 506 &amp; 384 IPC)</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Threatening a debtor with eviction or social shame to force payment is criminal threats and extortion under Indian law.</p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-blue-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Building className="w-4 h-4 text-blue-600" />
                    <span>RWA Society Bye-Laws &amp; Civil Injunctions (Order 39 CPC)</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Resident Welfare Associations can bar rogue recovery agents under society bye-laws. Advocates can also obtain civil court injunctions under Order 39 Rules 1 & 2 CPC to block visits.</p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">When legal counsel issues formal notices citing these criminal sections and privacy rulings, lenders back down. They realize that home visits expose them to severe legal fines.</p>
            </section>

            {/* Section 4: Bank Balance Sheet Dynamics & The NPV Recovery Equation */}
            <section id="bank-accounting-npa-npv-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Bank Provisioning &amp; Social Shaming Risks</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">To stop recovery abuse, debtors should understand bank incentives. Banks rarely send branch staff to homes. When a loan is 60 to 90 days overdue, banks hire Direct Recovery Agencies (DRAs). These agents work on commission.</p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Under RBI rules. When an account is past due for 90 days, it becomes a <strong>defaulted Asset (NPA)</strong>. The bank must lock up capital in reserve funds.</p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>default status.</th>
                      <th>Overdue Aging Timeline.</th>
                      <th>Mandatory RBI Capital Provision.</th>
                      <th>Settlement / Haircut Scope.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-1 / SMA-2.</td>
                      <td>31 to 90 days overdue.</td>
                      <td>5% general capital reserve.</td>
                      <td>Waiver of late fees and penal interest.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Substandard NPA.</td>
                      <td>91 to 365 days overdue.</td>
                      <td>25% unsecured reserves reserve.</td>
                      <td>35% to 45% principal reduction.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful NPA 1.</td>
                      <td>12 to 24 months in default.</td>
                      <td>100% unsecured reserves reserve.</td>
                      <td>45% to 55% principal reduction.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful NPA 2 / Loss Asset.</td>
                      <td>Over 24 months overdue.</td>
                      <td>100% full balance sheet write-off.</td>
                      <td>55% to 65% principal reduction.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Third-party agents earn commissions only if they recover cash quickly. This drives rogue agents to use social shaming. When an advocate steps in, bank committees evaluate the file using the <strong>Net Present Value (NPV) of Recovery</strong> model.</p>

              {/* JSX Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">Here C_t is the expected cash recovery. And r is the discount rate. Deductions include court costs, lawyer fees, Ombudsman fines. And funds locked in NPA reserves.</p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Notices documenting slander, trespass. and RBI violations show the bank its legal risks. Fighting complaints costs more than settling the loan. Accepting a 40% to 55% settlement payment through an official One-Time Settlement becomes the bank&apos;s best money choice.</p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="residential-harassment-defense-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">5. Neighbour Harassment Defense Roadmap</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">The roadmap below shows how banking defense advocates stop neighbour abuse, enforce privacy rights. And secure an official debt settlement.</p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/recovery-agents-talking-to-neighbours-landlord.jpg"
                  alt="Recovery Agents Harassing Neighbours and Landlord Defense Strategic Roadmap"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 1–2: Rights &amp; Defamation Defense</span>
                  <span>Invoke Article 21 privacy rights. Record hallway visits. Serve Section 356 BNS defamation notices.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 3–4: RWA Injunction &amp; Ombudsman</span>
                  <span>Enforce RWA gate bans. File Section 329 BNS police complaints. Submit RBI Ombudsman grievances.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 5: 55% OTS &amp; ₹0 NDC Delivery</span>
                  <span>Enforce an immediate home ceasefire. Negotiate loan terms. Obtain an official No Dues Certificate.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Emergency 4-Stage Advocate Defense Protocol */}
            <section id="emergency-4-stage-advocate-protocol" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. The Emergency 4-Stage Advocate Protocol to Halt Harassment</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">When an agent contacts your landlord or neighbours, arguing at the door will not help. Rogue collectors see panic as leverage. Banking defense advocates use a 4-stage legal plan to stop abuse.</p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 1: Evidence Preservation &amp; Landlord Legal Reassurance</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">Collect all evidence at once. Save CCTV clips, hallway audio, security logs. And phone chats. Give your landlord a legal letter explaining Privity of Contract to show the debt cannot touch the property.</p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 2: Serving Advocate Legal Notice for Defamation &amp; Trespass</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Your advocate serves a legal notice on the bank Nodal Officer and agency heads. The notice cites Section 356 BNS, Section 329 BNS, <em>Puttaswamy</em>. and RBI rules to halt visits within 48 hours.</p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 3: RWA Society Security Gate Ban &amp; RBI Ombudsman Filing</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Send a formal letter to your RWA requesting security guards to block agency staff. File an urgent complaint on the <strong>RBI CMS portal (cms.rbi.org.in)</strong> for fair practice violations.</p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 4: Strategic Transition to Structured Debt Settlement</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">With abuse stopped and the bank under scrutiny, advocates step in. We transfer the account for a discounted One-Time Settlement.</p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">This legal process stops lender pressure, restores peace in your building. And helps you recover financially.</p>
            </section>

            {/* Section 7: Negotiating Debt Resolution & OTS */}
            <section id="forcing-compromise-settlement-ots" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Converting Residential Harassment into an Affordable OTS</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Home abuse shows that the bank faces pressure from rising NPA reserves. They use social shaming because they lack legal options to seize your assets. Documenting these violations turns an unfair situation into strong leverage for an official <strong>One-Time Settlement (OTS)</strong>.</p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Instead of paying heavy fines, our legal advocates settle fair settlement terms directly with bank committees.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileText className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Hardship Dossier Submission</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">Submit verified proof of genuine money hardship. Share medical records, job loss letters. or business drops to show the default was unintentional.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <BadgePercent className="w-4 h-4 text-emerald-600" />
                    <span>100% Penalty Waiver &amp; Principal Haircut</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">Demand total removal of late fees, penal interest. And legal costs. Seek a <strong>45% to 65% reduction on principal</strong> based on loan aging.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Ban className="w-4 h-4 text-purple-600" />
                    <span>Permanent Agency Disengagement</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">Include a clear clause requiring the bank to recall recovery files. Demand an end to all contact with neighbours and landlords.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                    <span>Flexible Multi-Tranche Structuring</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">Divide the negotiated settlement sum across 2 to 4 monthly installments. This lets you clear the debt comfortably.</p>
                </div>
              </div>
            </section>

            {/* Section 8: Sanction Letter Forensics & RBI NDC Mandate */}
            <section id="sanction-forensics-rbi-ndc-mandate" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Sanction Letter Forensics &amp; NDC for Harassed Borrowers</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Debtors facing harsh collection agencies must stay alert during settlement. Collectors sometimes share fake letters on WhatsApp or ask for cash. Never transfer money until an advocate reviews and confirms the sanction letter.</p>
              
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>The 4 Forensic Checkpoints of an Authentic Settlement Sanction Letter</span>
                </div>
                <ul className="space-y-1.5 text-xs text-amber-800 list-disc pl-4">
                  <li><strong>Official Letterhead:</strong> The letter must be on bank letterhead with a reference number and signature of an authorized manager.</li>
                  <li><strong>Account Details:</strong> It must state your full legal name, PAN. And exact loan account number.</li>
                  <li><strong>Full Debt Closure:</strong> It must state that paying the agreed sum clears all balances and legal claims.</li>
                  <li><strong>Direct Bank Payment:</strong> Payments must go directly to your loan account via NEFT/RTGS, never to an agent or personal account.</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>RBI Circular RBI/2023-24/60: Mandatory ₹0 NDC Delivery &amp; ₹5,000/Day Penalty</span>
                </div>
                <p className="leading-relaxed text-emerald-900">Under <strong>RBI Circular RBI/2023-24/60</strong>, all banks and NBFCs must deliver an official <strong>No Dues Certificate (NDC)</strong> within <strong>30 calendar days</strong>. They must also update credit bureaus to zero. Unjustified delays incur a penalty of <strong>₹5,000 per day</strong> paid to the debtor.</p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                CIBIL Bureau Reporting Trajectory &amp; Credit Score Rehabilitation
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">After settlement, the bank marks your credit bureau record as <strong>&quot;Settled&quot;</strong> with a balance of <strong>₹0</strong>. While this causes a temporary score dip, it stops default fines and ends abuse. Use a secured credit card. Keep card usage under 30%. This rebuilds credit scores above 750 within 18 to 24 months.</p>
            </section>

            {/* Section 9: Comparative Legal Defense Matrix */}
            <section id="comparative-legal-defense-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. Neighbour Defamation Legal Defense Matrix</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Review available legal options to protect your dignity, tenancy. And money future:</p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Solution Channel.</th>
                      <th>Legal Basis & Limitations.</th>
                      <th>Home Protection Scope.</th>
                      <th>Typical Solution Time.</th>
                      <th>Final Legal Effect.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Home abuse Tactics.</td>
                      <td>Illegal force violating privacy rules.</td>
                      <td>Zero protection with high risk of social shaming.</td>
                      <td>Indefinite or recurring.</td>
                      <td>Exposes lender to criminal slander and fines.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Civil Court Injunction (Order 39 CPC).</td>
                      <td>Civil court injunction against abuse.</td>
                      <td>Blocks entry into society and third-party contact.</td>
                      <td>1 to 3 months.</td>
                      <td>Court restraining order with contempt fines.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">RBI Banking Ombudsman.</td>
                      <td>RBI Integrated Ombudsman Scheme 2021.</td>
                      <td>Orders an immediate stop to third-party contact.</td>
                      <td>30 to 45 days.</td>
                      <td>Regulatory order forcing bank compliance.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Advocate-Led 55% OTS.</td>
                      <td>Consensual settlement agreement.</td>
                      <td>Full home ceasefire and permanent debt relief.</td>
                      <td>15 to 30 days.</td>
                      <td>Full debt closure with official ₹0 NDC.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. SettleLoans Legal Defense for Privacy Violations</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Stopping illegal home collection requires expert banking advocates. We enforce RBI Master Directions and Supreme Court privacy rulings. SettleLoans provides complete legal defense. We send emergency notices to bank leadership. We file RBI Ombudsman complaints. We reassure landlords and settle 45% to 65% settlement waivers with official No Dues Certificates.</p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. FAQs: Recovery Agents Harassing Neighbours &amp; Landlords</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">Verified legal answers on home debt collection, neighbour disclosures. And loan settlements in India.</p>

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
                  href="https://www.indiacode.nic.in/handle/123456789/2187"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Indian Contract Act, 1872 (Privity of Contract &amp; Section 171)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2263"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Bharatiya Nyaya Sanhita, 2023 / IPC (Defamation &amp; Trespass Provisions)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Residential Harassment Grievances)</span>
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
                  <span className="font-semibold text-slate-800">Supreme Court of India (Puttaswamy Privacy Judgment &amp; Article 21)</span>
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
                  href="/recovery-agents-calling-relatives-friends"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Recovery Calling Relatives &amp; Friends
                </Link>
                <Link
                  href="/bank-sending-legal-notice-to-employer-illegal-recovery"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Workplace Recovery Defense
                </Link>
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
                  Loan Default &amp; Jail Rights
                </Link>
                <Link
                  href="/hdfc-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  HDFC Bank Loan Settlement
                </Link>
                <Link
                  href="/icici-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  ICICI Bank Loan Settlement
                </Link>
                <Link
                  href="/bajaj-finance-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bajaj Finance Loan Settlement
                </Link>
                <Link
                  href="/kotak-bank-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Kotak Bank Loan Settlement
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
              <p className="text-xs text-slate-600 leading-relaxed mb-3">Expert in banking court case defense, Supreme Court privacy protections, criminal slander notices. And loan settlements in India.</p>
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
                <span>Residential Harassment Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Are Agents Harassing Neighbours or Landlord?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">Protect your tenancy and reputation immediately. Hire banking defense advocates to issue slander notices and settle a 45% to 65% OTS.</p>
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
                  <span>Supreme Court Privacy Compliance</span>
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
