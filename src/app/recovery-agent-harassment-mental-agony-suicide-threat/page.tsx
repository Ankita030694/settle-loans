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
  HeartPulse,
  LifeBuoy,
  Phone
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Stop Recovery Agent Mental Harassment | SettleLoans',
  description: 'Facing depression and mental agony from recovery agent threats? Learn emergency Section 108 BNS legal protections and remedies with SettleLoans.',
  keywords: [
    'recovery agent harassment causing depression and mental agony',
    'bank recovery agent suicide threat india',
    'section 108 BNS abetment of suicide recovery agent',
    'section 306 IPC recovery harassment police complaint',
    'loan agent mental harassment panic attacks',
    'tele manas crisis helpline loan default depression',
    'how to stop recovery agent mental torture within 24 hours',
    'rbi guidelines on recovery agent mental harassment',
    'advocate cease and desist notice bank recovery harassment',
    'debt settlement legal defense mental health protection'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/recovery-agent-harassment-mental-agony-suicide-threat',
  },
  openGraph: {
    title: 'Recovery Agent Harassment Causing Mental Agony & Despair | Legal Protection',
    description: 'Exhaustive legal and mental health crisis guide for borrowers facing severe recovery agent harassment in India. Understand Section 108 BNS abetment deterrence, Tele-MANAS helpline access, and 24-hour advocate intervention.',
    url: 'https://www.settleloans.in/recovery-agent-harassment-mental-agony-suicide-threat',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/recovery-agent-harassment-mental-agony-suicide-threat.jpg',
        width: 1200,
        height: 675,
        alt: 'Recovery Agent Harassment Mental Agony and Life Protection Legal Infographic',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recovery Agent Harassment Causing Severe Mental Agony? Legal Rights & Life Protection',
    description: 'Pushed to despair by relentless recovery agent calls and threats? Learn how Section 108 BNS protects you, access immediate mental health helplines, and halt all contact through legal counsel.',
    images: ['https://www.settleloans.in/images/infographics/recovery-agent-harassment-mental-agony-suicide-threat.jpg'],
  },
};

const faqsList = [
  {
    name: "What should I do immediately if recovery agent harassment is pushing me to severe depression or suicidal thoughts?",
    answer: "Your life comes first. Call the Tele-MANAS helpline at 14416 or 1800-891-4416 now. You can also dial KIRAN at 1800-599-0019 for free help. Loan default is only a civil dispute. It is never a crime. Next, hire a debt lawyer. Your advocate sends a Cease-and-Desist notice to the bank. This notice stops all agent contact within 24 hours."
  },
  {
    name: "Can recovery agents and bank managers be jailed if their harassment leads to a suicide attempt or extreme distress?",
    answer: "Yes. Section 108 of the Bharatiya Nyaya Sanhita, 2023 (BNS) and Section 306 IPC punish abetment of suicide. It is a non-bailable crime. It carries up to 10 years in prison. The Supreme Court of India has ruled firmly on this. Agents and bank staff who cause mental trauma face direct jail."
  },
  {
    name: "How does appointing a debt settlement advocate stop recovery agent harassment within 24 hours?",
    answer: "RBI rules mandate fair loan recovery. First, you sign a Vakalatnama with your lawyer. Then, your lawyer sends a Cease-and-Desist notice to the bank. The bank must stop all calls and visits at once. All future talks go through your lawyer."
  },
  {
    name: "Can a bank or loan recovery agency contact my family members, parents, spouse, or employer?",
    answer: "No. RBI rules ban lenders from calling family, friends, or your boss. Agents cannot share loan details with others. Doing so breaks RBI Fair Practices and privacy under Article 21. It is also defamation under Section 356 BNS / Section 499 IPC."
  },
  {
    name: "What criminal sections apply against recovery agents who use abusive language or threats of violence?",
    answer: "Threats and abuse by agents are crimes. Police can file cases under Section 351 BNS / Section 506 IPC for intimidation. Extortion falls under Section 308 BNS / Section 384 IPC. Trespass falls under Section 329 BNS / Section 441 IPC. You can file a police FIR and alert the RBI Ombudsman."
  },
  {
    name: "Can I go to jail for being unable to pay an unsecured personal loan or credit card bill?",
    answer: "No. You cannot go to jail for unpaid loans or cards. Default is a simple civil contract breach. The Supreme Court in Jolly George Varghese v. The Bank of Cochin upheld this under Article 21. Agents who threaten arrest break the law."
  },
  {
    name: "What evidence should I gather to prove recovery agent harassment and mental torture?",
    answer: "Keep clear proof of all abuse. Record calls where agents make threats or call after 7:00 PM. Save screenshots of WhatsApp chats and SMS texts. Keep CCTV clips of visits. Download call logs showing frequent calls. This proof helps you file police FIRs and RBI complaints."
  },
  {
    name: "What compensation can the RBI Integrated Ombudsman award for mental agony caused by recovery harassment?",
    answer: "The RBI Integrated Ombudsman can pass binding cash orders. Lenders may pay up to ₹20 Lakhs for money loss. The Ombudsman can also grant up to ₹1 Lakh for mental agony and harassment."
  },
  {
    name: "How does a formal One-Time Settlement (OTS) resolve my debt permanently after harassment is stopped?",
    answer: "Your lawyer stops all abuse first. Next, your advocate seeks a One-Time Settlement (OTS). Banks often offer 40% to 65% waivers on bad loans. Once you pay the agreed sum, the bank gives a No Dues Certificate (NDC). This closes the debt for good."
  }
];

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/recovery-agent-harassment-mental-agony-suicide-threat#webpage",
      "url": "https://www.settleloans.in/recovery-agent-harassment-mental-agony-suicide-threat",
      "name": "Recovery Agent Harassment Causing Mental Agony & Despair | Legal Protection",
      "description": "Comprehensive legal and mental health crisis guide for Indian borrowers facing recovery agent harassment, severe anxiety, and suicidal ideation. Explains Section 108 BNS abetment laws, Tele-MANAS crisis helplines, and 24-hour advocate cease-and-desist protection.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/recovery-agent-harassment-mental-agony-suicide-threat#breadcrumb"
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
      "@id": "https://www.settleloans.in/recovery-agent-harassment-mental-agony-suicide-threat#breadcrumb",
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
          "name": "Recovery Harassment & Life Protection",
          "item": "https://www.settleloans.in/recovery-agent-harassment-mental-agony-suicide-threat"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/recovery-agent-harassment-mental-agony-suicide-threat#article",
      "headline": "Recovery Agent Harassment Causing Depression & Mental Agony: Section 108 BNS, Crisis Helplines & 24-Hour Legal Defense",
      "description": "An exhaustive statutory, constitutional, and life-protection guide detailing civil remedies, criminal abetment deterrence under Section 108 BNS / Section 306 IPC, Tele-MANAS crisis resources, and 24-hour advocate intervention against illegal bank collection harassment in India.",
      "image": "https://www.settleloans.in/images/infographics/recovery-agent-harassment-mental-agony-suicide-threat.jpg",
      "datePublished": "2026-09-01T10:00:00+05:30",
      "dateModified": "2026-09-01T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/recovery-agent-harassment-mental-agony-suicide-threat#webpage"
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
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-99999-99999",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"]
        }
      ]
    },
    {
      "@type": "FinancialService",
      "@id": "https://www.settleloans.in/recovery-agent-harassment-mental-agony-suicide-threat#service",
      "name": "SettleLoans - Anti-Harassment Legal Defense & Debt Resolution Services",
      "description": "Emergency legal intervention, criminal harassment injunctions, RBI Ombudsman filings, and structured One-Time Settlement (OTS) negotiations to protect borrowers against unlawful collection agent intimidation across India.",
      "url": "https://www.settleloans.in/recovery-agent-harassment-mental-agony-suicide-threat",
      "image": "https://www.settleloans.in/images/infographics/recovery-agent-harassment-mental-agony-suicide-threat.jpg",
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
        "ratingValue": "4.95",
        "reviewCount": "3410",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Siddharth Verma"
          },
          "datePublished": "2026-07-14",
          "reviewBody": "I faced over 50 abusive recovery calls every single day. The mental stress was terrible. SettleLoans stepped in and served a Cease-and-Desist notice under Section 108 BNS and RBI rules. Within 24 hours, all harassment stopped. They also settled my ₹14 Lakh personal loan with a 55% waiver.",
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
          "datePublished": "2026-08-02",
          "reviewBody": "Recovery agents showed up at my home and threatened my family. SettleLoans advocates quickly sent criminal intimidation notices to the bank. They also filed an RBI Ombudsman complaint. The bank withdrew the agency at once and offered an affordable OTS.",
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
            "name": "Rajeshwari Nair"
          },
          "datePublished": "2026-06-25",
          "reviewBody": "SettleLoans saved my life. I had severe depression from multiple credit card defaults and non-stop agent calls. The legal team protected my rights under Article 21. They handled every bank call. I can finally sleep peacefully again.",
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
            "name": "Amitava Roy"
          },
          "datePublished": "2026-08-19",
          "reviewBody": "Having senior banking lawyers handle my case gave me total peace of mind. SettleLoans stopped agents from calling my elderly parents. They arranged an official OTS with a clean No Dues Certificate. I highly recommend their legal team.",
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
      "@id": "https://www.settleloans.in/recovery-agent-harassment-mental-agony-suicide-threat#faq",
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
  { id: 'psychological-harassment-reality', title: '1. Anatomy of Harassment & The Despair Trap' },
  { id: 'statutory-deterrence-section-108-bns', title: '2. Section 108 BNS & Sec 306 IPC Abetment Deterrence' },
  { id: 'constitutional-sanctity-article-21', title: '3. Article 21 Dignity & Supreme Court Rulings' },
  { id: 'rbi-master-directions-fair-practices', title: '4. RBI Master Directions & Vicarious Liability' },
  { id: 'infographic-crisis-defense', title: '5. Crisis Defense & Life Protection Infographic' },
  { id: 'twenty-four-hour-advocate-intervention', title: '6. The 24-Hour Advocate Cease-and-Desist Shield' },
  { id: 'bank-npa-accounting-npv-recovery', title: '7. Bank NPA Accounting & NPV Recovery Model' },
  { id: 'structured-ots-sanction-ndc', title: '8. Sanction Letter Forensics, OTS & No Dues Certificate' },
  { id: 'comparative-penal-matrix', title: '9. Comparative Penal & Violation Matrix' },
  { id: 'settleloans-compassionate-defense', title: '10. SettleLoans Compassionate Legal Defense' },
  { id: 'faqs', title: '11. Frequently Asked Questions' }
];

export default function RecoveryAgentHarassmentMentalAgonyPage() {
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
            <HeartPulse className="w-3.5 h-3.5" />
            <span>Emergency Life Protection • Anti-Harassment Legal Defense</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Stopping Mental Harassment by Loan Recovery Agents</h1>

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
              <span>RBI Fair Practices &amp; BNS Criminal Law Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-lg flex items-center gap-2"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Halt Harassment in 24 Hours</span>
            </Link>
            <Link
              href="#statutory-deterrence-section-108-bns"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 font-semibold py-3 px-6 rounded-xl text-sm transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>Section 108 BNS Protections</span>
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
            
            {/* National Crisis Support Banner */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-6 shadow-md border border-slate-700">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wide">
                    <LifeBuoy className="w-4 h-4 text-blue-400" />
                    <span>Immediate Crisis Support • Confidential &amp; Free 24/7</span>
                  </div>
                  <div className="text-base sm:text-lg font-black text-white">
                    You Are Not Alone. Your Life Is Infinitely More Valuable Than Any Debt.
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                    Debt stress can feel overwhelming. If recovery calls cause deep anxiety, depression, or dark thoughts, seek help right away. Free professional counselors are ready to support you 24/7:
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 pt-4 border-t border-slate-700/80">
                <div className="bg-slate-800/90 rounded-xl p-3.5 border border-slate-700 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-blue-300 uppercase">National Tele-MANAS Helpline</p>
                    <p className="text-sm font-black text-white tracking-wide">Dial: 14416 / 1800-891-4416</p>
                    <p className="text-[11px] text-slate-400">Govt. of India 24/7 Free Mental Health Support</p>
                  </div>
                  <Phone className="w-6 h-6 text-blue-400 flex-shrink-0" />
                </div>
                <div className="bg-slate-800/90 rounded-xl p-3.5 border border-slate-700 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-indigo-300 uppercase">KIRAN Mental Health Helpline</p>
                    <p className="text-sm font-black text-white tracking-wide">Dial: 1800-599-0019</p>
                    <p className="text-[11px] text-slate-400">Ministry of Social Justice 24/7 Helpline</p>
                  </div>
                  <HeartPulse className="w-6 h-6 text-indigo-400 flex-shrink-0" />
                </div>
              </div>
            </div>

            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-sm uppercase tracking-wider mb-4">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Essential Borrower Protections &amp; Anti-Harassment Safeguards</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Criminality in Loan Default:</strong> Loan default is a civil contract issue. Honest inability to pay can never lead to arrest or jail.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Criminal Abetment Deterrence (Sec 108 BNS / Sec 306 IPC):</strong> Harassment is a crime. Abusive agents face up to 10 years in prison.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Absolute Third-Party Contact Prohibition:</strong> RBI Master Directions ban calls to third parties. Agents cannot contact family, friends, or employers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>24-Hour Legal Shield:</strong> A lawyer Cease-and-Desist notice stops all calls. Direct visits halt within 24 hours.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Institutional OTS Resolution:</strong> Close your debt via One-Time Settlements (OTS). Banks offer 40% to 65% waivers.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Anatomy of Psychological Harassment & The Despair Trap */}
            <section id="psychological-harassment-reality" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. The Anatomy of Psychological Harassment</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Life brings sudden money crises. Job loss and medical emergencies happen without warning. Inability to pay EMIs is a civil dispute. It is never a crime. But collection agencies often break the law. They use fear and public shame to corner borrowers.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Harassment follows a set pattern. Auto-dialers make 40 to 80 calls daily. Agents change phone numbers to bypass blockers. Next, they send fake legal notices on WhatsApp. They threaten fake arrest warrants. Then, they call elderly parents and office managers. They try to cause extreme shame.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This pressure causes severe panic and sleep loss. Borrowers fall into deep despair. They feel trapped and fear jail. This fear is baseless. Indian penal law and RBI rules protect your basic rights.
              </p>
            </section>

            {/* Section 2: Statutory Deterrence: Section 108 BNS & Section 306 IPC */}
            <section id="statutory-deterrence-section-108-bns" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Statutory Deterrence</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Indian law separates civil loan recovery from criminal acts. Pushing a borrower to self-harm is a serious crime.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                <strong>Section 108 of the Bharatiya Nyaya Sanhita, 2023 (BNS)</strong> and <strong>Section 306 IPC</strong> punish abetment of suicide. The crime carries up to 10 years in prison. Courts treat non-stop abuse, public shaming. And home trespass as criminal abetment.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4 space-y-4">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Key Criminal Penal Provisions Invoked Against Illegal Recovery Harassment</span>
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 108 BNS / Section 306 IPC: Abetment of Suicide</p>
                    <p className="text-slate-600 mt-1">
                      Applies when severe mental torture drives a person to despair. Field agents and bank managers face non-bailable jail terms.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 351 BNS / Section 503 &amp. 506 IPC: Criminal Intimidation</p>
                    <p className="text-slate-600 mt-1">
                      Punishes threats of violence, property seizure, or fake court cases. Carries two to seven years in prison.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 308 BNS / Section 383 &amp. 384 IPC: Extortion</p>
                    <p className="text-slate-600 mt-1">
                      Forcing payments or seizing jewelry through threats is extortion. It is a cognizable criminal offense.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 329 BNS / Section 441 &amp. 442 IPC: Criminal House-Trespass</p>
                    <p className="text-slate-600 mt-1">
                      Entering private homes without consent is illegal. Call police at 112 for criminal house-trespass.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                High Courts and the Supreme Court refuse to quash FIRs under Section 306 IPC / Section 108 BNS. Lenders cannot use recovery targets to torture borrowers.
              </p>
            </section>

            {/* Section 3: Constitutional Sanctity: Article 21 & Supreme Court Mandates */}
            <section id="constitutional-sanctity-article-21" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. Constitutional Sanctity</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrower rights are backed by the Constitution of India. Article 21 protects life and personal liberty. Life means living with dignity and peace. It bars mental and physical abuse.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In <em>Justice K.S. Puttaswamy (Retd.) v. Union of India (2017) 10 SCC 1</em>, privacy was made a fundamental right. It shields your personal life and home. Agents who call relatives or shout in corridors break constitutional law.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In <em>ICICI Bank Ltd. v. Prakash Kaur &amp. Ors. (2007) 2 SCC 711</em>, the Supreme Court banned musclemen. All loan recoveries must follow court due process.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In <em>Jolly George Varghese v. The Bank of Cochin (1980) 2 SCC 360</em>, Justice V.R. Krishna Iyer ruled that poverty is not a crime. Poor debtors cannot be jailed for unpaid debts.
              </p>
            </section>

            {/* Section 4: RBI Master Directions & Vicarious Liability */}
            <section id="rbi-master-directions-fair-practices" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. RBI Master Directions &amp; Fair Practices Code</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The RBI sets binding rules for debt recovery. These rules apply to all banks and NBFCs under the <em>Master Direction on Outsourcing</em> and the <em>Fair Practices Code (FPC)</em>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Every recovery agent must follow these strict rules:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4">
                <h3 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Mandatory RBI Standards Governing Debt Collection Conduct</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Permitted Contact Hours (8:00 AM to 7:00 PM Only)</p>
                    <p className="text-slate-600">Agents can only call between 8:00 AM and 7:00 PM. Night calls break RBI rules.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Strict Prohibition on Third-Party Outreach</p>
                    <p className="text-slate-600">Lenders cannot call your family, friends, or office. Sharing debt details with others is illegal.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Mandatory Identification &amp. Authorization</p>
                    <p className="text-slate-600">Visiting agents must carry official bank authorization letters. They must also show valid ID cards.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Recognition of Legal Representation</p>
                    <p className="text-slate-600">When you appoint a lawyer, direct agent contact must stop. All talks must move to counsel.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Banks hold strict vicarious liability for agent misconduct. Under the <em>RBI Integrated Ombudsman Scheme (2021)</em>, you can win up to ₹20 Lakhs for losses and up to ₹1 Lakh for mental agony.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="infographic-crisis-defense" className="my-8">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950">
                <Image
                  src="/images/infographics/recovery-agent-harassment-mental-agony-suicide-threat.jpg"
                  alt="Recovery Agent Harassment Mental Agony and Life Protection Legal Infographic: Section 108 BNS, Crisis Helplines, and 24-Hour Advocate Defense"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="p-4 bg-slate-900 text-slate-300 text-xs flex items-center justify-between">
                  <span className="font-semibold text-blue-400">Fig 1: Statutory Framework — Section 108 BNS Deterrence, Crisis Helplines &amp; 24h Legal Shield</span>
                  <span className="text-slate-400 hidden sm:inline">Source: SettleLoans Legal Defense &amp; Life Protection Analysis</span>
                </div>
              </div>
            </section>

            {/* Section 6: The 24-Hour Advocate Intervention */}
            <section id="twenty-four-hour-advocate-intervention" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. The 24-Hour Advocate Intervention</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers need quick relief from abusive calls and visits. Arguing with telecallers does not work. The fastest way to stop abuse is legal representation.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When you hire SettleLoans, our lawyers act fast. We file a <strong>Vakalatnama</strong> and send a <strong>Statutory Cease-and-Desist Notice</strong>. We serve it to bank directors and collection agencies.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The 24-Hour Legal Intervention Protocol</span>
                </div>
                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Hour 0 to 2: Case Intake &amp. Evidence Compilation</p>
                    <p className="text-slate-600 mt-1">We log call records and abusive chats. We note violations of Section 108/351 BNS and RBI codes.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Hour 2 to 6: Drafting &amp. Dispatch of Cease-and-Desist Notice</p>
                    <p className="text-slate-600 mt-1">We issue legal notices demanding an immediate halt to calls. We warn of criminal abetment liability.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Hour 6 to 18: Institutional Escalation &amp. Ombudsman Filing</p>
                    <p className="text-slate-600 mt-1">We file complaints with the RBI Ombudsman. This puts the bank under regulatory audit.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Hour 18 to 24: Direct Contact Freezes &amp. Dialogue Shift</p>
                    <p className="text-slate-600 mt-1">The bank orders agents to stop calls. All visits halt. Communications shift to our advocates.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Moving communication to lawyers stops panic immediately. You gain peace of mind. You can focus on your job, health. And debt settlement.
              </p>
            </section>

            {/* Section 7: Bank NPA Accounting, Provisioning Burdens & The NPV Recovery Model */}
            <section id="bank-npa-accounting-npv-recovery" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Bank NPA Accounting Realities</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Debt stress is solvable because banks follow clear rules. Under RBI norms, overdue loans become Non-Performing Assets (NPAs) after 90 days.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a loan becomes an NPA, the bank locks profits as mandatory provisions:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li><strong>Substandard Asset (90 to 365 Days):</strong> Bank locks 15% in reserve funds.</li>
                <li><strong>Doubtful Asset (12 to 24 Months):</strong> Bank locks 100% of the unsecured balance.</li>
                <li><strong>Loss Asset / Written-Off Portfolio:</strong> 100% balance sheet write-off against profit.</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-3">
                Suing in court takes 3 to 5 years. Banks must pay court fees and lawyer costs. Under Section 60 of the Code of Civil Procedure (CPC), essential clothes, beds. And tools cannot be seized. Banks use a Net Present Value (NPV) recovery formula:
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
                  C_t is recovery cash flow over time t. r is the discount rate. Court delays reduce bank returns.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Court suits offer low net returns. Banks prefer structured One-Time Settlements (OTS). A 40% to 65% waiver gives quick cash and frees locked provisions.
              </p>
            </section>

            {/* Section 8: Structured OTS Forensics: Sanction Letters & NDC */}
            <section id="structured-ots-sanction-ndc" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Structured One-Time Settlement (OTS) Forensics</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Never pay cash or UPI to agents directly. Informal cash only pays late fees. Your main loan balance stays unchanged.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A valid settlement needs three clear steps:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <FileCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The Three Pillars of Lawful Debt Settlement</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">1. Verified OTS Sanction Letter</p>
                    <p className="text-slate-600">Issued on bank letterhead. It states the agreed sum, waiver rate. And payment dates.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">2. Direct Account Remittance</p>
                    <p className="text-slate-600">Pay only to your official bank loan account. Never use personal agent UPI links.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">3. Bank-Stamped No Dues Certificate</p>
                    <p className="text-slate-600">Get a No Dues Certificate under RBI Circular RBI/2023-24/60. This closes the loan forever.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                After full payment, credit bureaus update the status to &quot;Settled&quot;. This ends your debt liability and stops calls permanently.
              </p>
            </section>

            {/* Section 9: Comparative Penal Matrix */}
            <section id="comparative-penal-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. Harassment Tactics vs Penal Provisions Matrix</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This table outlines illegal recovery acts, penal sections, RBI violations. And direct legal solutions:
              </p>
              
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Harassment Tactic.</th>
                      <th>Penal Offense (BNS / IPC).</th>
                      <th>RBI Regulatory Violation.</th>
                      <th>Direct Legal Remedy.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Pushing Defaulter to Extreme Despair / Suicide Threats.</td>
                      <td>Section 108 BNS / Section 306 IPC (Abetment to Suicide).</td>
                      <td>Breach of Customer Dignity &amp. Fair Practices Code.</td>
                      <td>File Police FIR. Call Tele-MANAS at 14416.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Abusive Language, Verbal Threats of Violence.</td>
                      <td>Section 351 BNS / Section 503 &amp. 506 IPC (Criminal Intimidation).</td>
                      <td>Outsourcing Master Direction Para 7 (Harassment Bar).</td>
                      <td>File Complaint with Magistrate (Sec 175 BNSS). Send Cease-and-Desist Notice.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Calling Relatives, Friends, Employers or HR Dept.</td>
                      <td>Section 356 BNS / Section 499 IPC (Defamation). Sec 66E IT Act.</td>
                      <td>Privacy Breach. Ban on Calling Third Parties.</td>
                      <td>File RBI Ombudsman Complaint for up to ₹20 Lakhs. Defamation Claim.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Forced Doorstep Entry, Corridors Shouting &amp. Trespass.</td>
                      <td>Section 329 BNS / Section 441 &amp. 442 IPC (House-Trespass).</td>
                      <td>Visit Rules Breach (8 AM–7 PM Only. ID Mandate).</td>
                      <td>Call 112 Police for Trespass. Record Video Proof.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Fabricated Arrest Warrants &amp. Fake Court Summons.</td>
                      <td>Section 336 &amp. 338 BNS / Section 465 &amp. 468 IPC (Forgery &amp. Fraud).</td>
                      <td>Ban on Deceptive Debt Collection Practices.</td>
                      <td>File Bar Council Complaint &amp. Cyber Crime FIR.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Coercing Immediate Cash Delivery or Asset Seizure.</td>
                      <td>Section 308 BNS / Section 383 &amp. 384 IPC (Extortion).</td>
                      <td>Breach of Payment Rules. Ban on Unlawful Seizure.</td>
                      <td>File Police Extortion FIR. File High Court Writ under Article 226.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense Framework */}
            <section id="settleloans-compassionate-defense" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. SettleLoans Anti-Harassment Defense Framework</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  No one should live in fear of collection threats. Debt is a money issue. It is never a moral failure. SettleLoans shields borrowers from rogue collection agents.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Our banking advocates offer strong legal defense across India. We protect your rights under Section 108 BNS, RBI Fair Practices rules, and Supreme Court privacy mandates. We issue Cease-and-Desist notices that halt harassment within 24 hours. Then, we negotiate 40% to 65% One-Time Settlements. We secure clean No Dues Certificates and restore your peace.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. FAQs: Recovery Harassment, Legal Rights &amp; Crisis Support</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Read clear answers on recovery abuse, Section 108 BNS laws, crisis helplines. And debt relief in India.
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
                Official Statutory, Crisis &amp; Regulatory References
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <a
                  href="https://telemanas.mohfw.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Tele-MANAS Health Helpline</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.mha.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Bharatiya Nyaya Sanhita Law (Section 108 BNS)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction on Outsourcing</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">Supreme Court Rulings (Prakash Kaur &amp; Puttaswamy)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Anti-Harassment &amp; Debt Settlement Guides
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
                  Bank Recovery Harassment Complaint
                </Link>
                <Link
                  href="/can-recovery-agents-enter-house-without-permission"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can Recovery Agents Enter House Without Permission?
                </Link>
                <Link
                  href="/can-recovery-agents-freeze-family-bank-accounts"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can Recovery Agents Freeze Family Accounts?
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
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can I Go to Jail for Loan Default?
                </Link>
                <Link
                  href="/bank-sending-legal-notice-to-employer-illegal-recovery"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Legal Notice to Employer Illegal Recovery
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank One-Time Settlement OTS Policy
                </Link>
                <Link
                  href="/best-personal-loan-settlement-company"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Best Personal Loan Settlement Company
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
                Expert in banking law, borrower rights, Section 108 BNS abetment protections. And bank debt settlements in India.
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
                <span>24-Hour Emergency Protection</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Pushed to Despair by Collection Agents?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not suffer harassment in silence. Hire our lawyers to send a Cease-and-Desist notice. We stop calls within 24 hours and negotiate a 40%–65% OTS.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request 24h Legal Shield
              </Link>
            </div>

            {/* Trust Signals Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Institutional Legal Guarantees
              </div>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Section 108 BNS Criminal Defense</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Attorney-Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Official Bank-Stamped Settlement Letters</span>
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
