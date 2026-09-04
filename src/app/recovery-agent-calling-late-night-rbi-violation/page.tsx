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
  Moon,
  Sun,
  VolumeX,
  Zap
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Late Night Recovery Calls RBI Rules | SettleLoans',
  description: 'Recovery agents calling before 8 AM or after 7 PM? Learn RBI recovery timing violation rules and how to file complaints with SettleLoans.',
  keywords: [
    'recovery agents calling before 8am or after 7pm',
    'recovery agent calling late night rbi violation',
    'rbi calling hours for recovery agents',
    'loan agent calling at midnight',
    'bank recovery agent harassment complaint',
    'rbi master direction fair practices code timing',
    'stop late night loan collection calls',
    'banking ombudsman restraining order against recovery agent',
    'section 351 bns criminal intimidation loan recovery',
    'article 21 right to sleep supreme court loan harassment',
    'rbi outsourcing circular recovery timing penalties',
    'debt settlement for recovery harassment victims'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/recovery-agent-calling-late-night-rbi-violation',
  },
  openGraph: {
    title: 'Recovery Agents Calling Before 8 AM or After 7 PM? RBI Rules & Injunction Guide',
    description: 'Stop illegal late-night and early-morning debt collection calls. Understand Reserve Bank of India timing restrictions, constitutional right to sleep, Banking Ombudsman penalties, and advocate-led OTS strategies.',
    url: 'https://www.settleloans.in/recovery-agent-calling-late-night-rbi-violation',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/recovery-agent-calling-late-night-rbi-violation.jpg',
        width: 1200,
        height: 675,
        alt: 'RBI Calling Time Window Regulations for Debt Recovery Agents Infographic',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recovery Agents Calling Before 8 AM or After 7 PM? RBI Rules & Injunction Guide',
    description: 'Facing abusive recovery calls at 9 PM, midnight, or 6 AM? Discover statutory RBI protections, sleep deprivation jurisprudence, and how to secure immediate Ombudsman relief.',
    images: ['https://www.settleloans.in/images/infographics/recovery-agent-calling-late-night-rbi-violation.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/recovery-agent-calling-late-night-rbi-violation#webpage",
      "url": "https://www.settleloans.in/recovery-agent-calling-late-night-rbi-violation",
      "name": "Recovery Agents Calling Before 8 AM or After 7 PM? RBI Rules & Injunction Guide",
      "description": "Comprehensive legal and regulatory analysis on handling illegal late-night and early-morning debt collection calls. Covers RBI Fair Practices Code, Supreme Court sleep jurisprudence, Banking Ombudsman restraining procedures, and One-Time Settlement negotiations.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/recovery-agent-calling-late-night-rbi-violation#breadcrumb"
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
      "@id": "https://www.settleloans.in/recovery-agent-calling-late-night-rbi-violation#breadcrumb",
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
          "name": "Recovery Agent Timing Violations",
          "item": "https://www.settleloans.in/recovery-agent-calling-late-night-rbi-violation"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/recovery-agent-calling-late-night-rbi-violation#article",
      "headline": "Recovery Agents Calling Before 8 AM or After 7 PM? RBI Timing Violations, Legal Penalties & Ombudsman Restraining Guide",
      "description": "An exhaustive guide examining RBI Master Directions on debt collection hours, the 8:00 AM to 7:00 PM mandatory operational window, criminal remedies for sleep deprivation under the Bharatiya Nyaya Sanhita, Banking Ombudsman injunctions, and NPV-backed debt settlement formulas.",
      "image": "https://www.settleloans.in/images/infographics/recovery-agent-calling-late-night-rbi-violation.jpg",
      "datePublished": "2026-08-31T10:00:00+05:30",
      "dateModified": "2026-08-31T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/recovery-agent-calling-late-night-rbi-violation#webpage"
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
      "@id": "https://www.settleloans.in/recovery-agent-calling-late-night-rbi-violation#service",
      "name": "SettleLoans - Debt Recovery Harassment Defense & Legal Advisory",
      "description": "Specialized legal representation and institutional debt settlement services for borrowers suffering from unlawful collection practices, predatory timing violations, and recovery agent harassment.",
      "url": "https://www.settleloans.in/recovery-agent-calling-late-night-rbi-violation",
      "image": "https://www.settleloans.in/images/infographics/recovery-agent-calling-late-night-rbi-violation.jpg",
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
            "name": "Siddharth Nambiar"
          },
          "datePublished": "2026-07-18",
          "reviewBody": "A recovery agency called me late at night. The stress was terrible. SettleLoans sent a legal notice to the bank. They also filed an RBI Ombudsman case. All calls stopped in 24 hours. They settled my loan for a 58% waiver.",
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
            "name": "Priyanka Saxena"
          },
          "datePublished": "2026-06-29",
          "reviewBody": "A loan app called my elderly parents at midnight. SettleLoans cited the Supreme Court ruling on Right to Sleep. The bank admitted the breach. They waived all penal charges and gave an official closure letter.",
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
            "name": "Vikramaditya Rao"
          },
          "datePublished": "2026-08-11",
          "reviewBody": "I got threats and calls at 11 PM for money. SettleLoans filed a case under Section 351 BNS. They got an RBI Ombudsman restraining order. The bank stopped the agency and gave me a No Dues Certificate.",
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
          "datePublished": "2026-05-24",
          "reviewBody": "When agents called before 7 AM, SettleLoans stepped in. They proved the violations and protected my family. They settled my loan at a 58% waiver.",
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
      "@id": "https://www.settleloans.in/recovery-agent-calling-late-night-rbi-violation#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the legal calling hours for bank recovery agents in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Master Directions, agents can only call from 8:00 AM to 7:00 PM. Calls, messages, or visits outside these hours break RBI rules."
          }
        },
        {
          "@type": "Question",
          "name": "Is calling at midnight or early morning considered a criminal offense?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Calling late at night or early morning is criminal intimidation under Section 351 BNS / Section 506 IPC. It also violates Article 21."
          }
        },
        {
          "@type": "Question",
          "name": "How can I obtain an immediate restraining order against predatory recovery calls?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can file a complaint with the RBI Banking Ombudsman on the CMS portal. A legal notice to the bank Nodal Officer freezes calls at once."
          }
        },
        {
          "@type": "Question",
          "name": "What penalties does the RBI impose on banks for late-night calling violations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The RBI imposes heavy monetary fines on banks for timing breaches. The RBI can order lenders to ban the agency and pay damages to borrowers."
          }
        },
        {
          "@type": "Question",
          "name": "Can recovery agents use automated diallers or virtual numbers to bypass timing restrictions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Using auto-dialers to call outside 8:00 AM to 7:00 PM is illegal. It breaks both RBI digital lending rules and TRAI telecom norms."
          }
        },
        {
          "@type": "Question",
          "name": "Can a recovery agent contact my family members or spouse after 7:00 PM?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Agents cannot call family members or employers at any hour. Doing so breaks RBI privacy rules and Section 356 BNS / Section 499 IPC."
          }
        },
        {
          "@type": "Question",
          "name": "How does documenting late-night calls help in One-Time Settlement (OTS) negotiations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Proof of late-night calls gives you strong leverage. Banking lawyers use this proof to negotiate an OTS, winning 45% to 65% debt waivers."
          }
        },
        {
          "@type": "Question",
          "name": "What evidence should I preserve to prove illegal recovery call timings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Save call logs with exact timestamps. Keep call recordings showing the agent name and agency. Save screenshots of late-night SMS and chat messages."
          }
        },
        {
          "@type": "Question",
          "name": "Can I file a police FIR if recovery agents threaten me over late-night phone calls?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. If calls involve threats or abuse, you can file a police FIR under Sections 351, 352, and 308 BNS. You can also report on the cyber portal."
          }
        },
        {
          "@type": "Question",
          "name": "What is the mandatory timeline for receiving a No Dues Certificate after OTS payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, lenders must issue an NDC within 30 days of settlement payment. Delays incur a penalty of ₹5,000 per day."
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
  { id: 'crisis-of-timing-violations', title: '1. Unlawful Calling Hours & Sleep Deprivation' },
  { id: 'rbi-calling-window-regulations', title: '2. RBI 8 AM to 7 PM Mandate & Privacy Jurisprudence' },
  { id: 'criminal-intimidation-bns-penalties', title: '3. Criminal Intimidation & BNS Statutory Penalties' },
  { id: 'bank-accounting-npa-npv-formula', title: '4. Bank NPA Accounting & NPV Recovery Formula' },
  { id: 'infographic-timing-regulations', title: '5. Visual Guide: RBI Recovery Timing Window' },
  { id: 'ombudsman-restraining-orders-fir', title: '6. Securing Ombudsman Restraining Orders & FIRs' },
  { id: 'converting-harassment-into-ots', title: '7. Converting Timing Violations into 55% OTS' },
  { id: 'sanction-letter-forensics-ndc', title: '8. Sanction Letter Forensics & ₹5,000/Day NDC Mandate' },
  { id: 'comparative-recovery-matrix', title: '9. Comparative Matrix: Legal vs Illegal Recovery' },
  { id: 'settleloans-defense-advisory', title: '10. SettleLoans Anti-Harassment Defense' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function RecoveryAgentCallingLateNightPage() {
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
            <span>RBI Compliance &amp; Debt Collection Defense • Anti-Harassment Protections</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Late Night Recovery Calls: RBI Rules & Penalties</h1>

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
              <span>RBI Master Direction Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Stop Late-Night Harassment Now</span>
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
                Debt calls before 8:00 AM or after 7:00 PM break RBI rules. They also break your Right to Sleep under Article 21. Call logs help lawyers get fast Ombudsman orders and 45%–65% OTS waivers.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: RBI Collection Timing Rules &amp; Legal Rights</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Strict 8:00 AM to 7:00 PM Calling Window:</strong> The RBI bans early calls. It bans calls after 7:00 PM. All night calls are illegal.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Constitutional Right to Sleep (Article 21):</strong> Sleep is a basic right. The Supreme Court in <em>Ramlila Maidan</em> protected sleep from disturbance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Criminal Intimidation Penalties:</strong> Late threats bring criminal cases. Sections 351, 352, and 308 BNS apply. (These replace Sections 503, 506, and 384 IPC.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Instant Banking Ombudsman Injunction:</strong> Send call logs to the RBI Ombudsman. This freezes collection calls fast. Banks face strict audits.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Leveraging Harassment for 45%–65% OTS:</strong> Timing violations give strong legal leverage. Banks agree to 45% to 65% OTS settlements.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Crisis of Timing Violations */}
            <section id="crisis-of-timing-violations" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. The Crisis of Predatory Calling Hours</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Agencies often target borrowers late at night. Borrowers get endless calls. Agents send robocalls and chats at midnight, 2:00 AM, or before 6:30 AM.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This timing is intentional. Agencies call when you rest. They disrupt sleep to spark panic. Their goal is quick debt recovery under extreme stress.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Moon className="w-4 h-4 text-[#1F5EFF]" />
                    <span>The Sleep Deprivation Coercion Model</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Late calls cause panic. They lead to deep fatigue. This mental stress pushes borrowers into bad terms. It forces illegal fee payments.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <VolumeX className="w-4 h-4 text-indigo-600" />
                    <span>Automated Predictive Dialler Abuse</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lenders use auto-dialers all night. These systems spam phones with fake threats. They bypass normal calling limits.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Late-night debt collection is illegal in India. The RBI sets strict hours. Violations create civil, regulatory, and criminal liability for lenders.
              </p>
            </section>

            {/* Section 2: RBI 8 AM to 7 PM Mandate & Privacy Jurisprudence */}
            <section id="rbi-calling-window-regulations" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Statutory Framework</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                RBI rules control debt recovery. They stem from Section 21 and Section 35A of the <strong>Banking Regulation Act, 1949</strong>. They also derive from the <strong>RBI Act, 1934</strong>. These rules bind banks and loan apps.
              </p>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-blue-950">
                  <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The Definitive RBI Calling Hours Directive</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  The <strong>RBI Master Direction on Fair Practices Code</strong> sets strict hours. The <strong>Outsourcing Guidelines</strong> also apply. Agents cannot call before 8:00 AM. They cannot call after 7:00 PM. Calls outside this window break the law.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Supreme Court protects borrowers under Article 21. In <em>Ramlila Maidan (2012)</em>, the court upheld the <strong>Right to Sleep</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Sleep is vital for health. In <em>Prakash Kaur (2007)</em> and <em>Shanti Devi Sharma (2008)</em>, the Supreme Court banned force in collections.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs my-4">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>RBI Master Direction Window</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Calls are allowed from 8:00 AM to 7:00 PM only. Night calls are banned.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Lender Vicarious Liability</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Banks cannot disown rogue agencies. Lenders bear full blame for agent actions.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-purple-600" />
                    <span>Puttaswamy Privacy Mandate</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    In <em>Puttaswamy (2017)</em>, the Supreme Court protected home privacy.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Criminal Intimidation & BNS Statutory Penalties */}
            <section id="criminal-intimidation-bns-penalties" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. Criminal Intimidation, Tort of Harassment</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Late-night threats by agents are crimes. Sections 351, 352, and 308 of the <strong>Bharatiya Nyaya Sanhita (BNS), 2023</strong> protect you.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Key criminal laws against late recovery calls include:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-red-500 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                    <span>Criminal Intimidation (Section 351 &amp; 352 BNS / Sections 503 &amp; 506 IPC)</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Threatening harm over night calls is criminal intimidation. Threats bring up to seven years in jail, a fine, or both.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-amber-600" />
                    <span>Extortion &amp; Threat of Injury (Section 308 BNS / Sections 383 &amp; 384 IPC)</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Demanding money through threats is extortion. It brings up to three years in prison plus court fines.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <PhoneCall className="w-4 h-4 text-purple-600" />
                    <span>Cyber Harassment &amp; Electronic Stalking (Section 66E, 67 &amp; 72 IT Act, 2000)</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sending abusive audio clips or continuous robocalls is cyber harassment. The IT Act punishes it with up to three years in jail.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Victims can also file civil damage suits or Consumer Court cases. Courts award ₹50,000 to ₹5,00,000 for mental agony and sleep loss.
              </p>
            </section>

            {/* Section 4: Bank NPA Accounting & NPV Recovery Formula */}
            <section id="bank-accounting-npa-npv-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Bank Accounting &amp; Night Calling Violations</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Banks follow strict accounting rules. When loans remain unpaid for 90 days, lenders mark them as <strong>Non-Performing Assets (NPAs)</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For NPAs, banks must lock capital in mandatory provisions. Provisions rise from 15% to 100% as loans age. This locked money hurts bank profits.
              </p>

              {/* Recovery Valuation JSX Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  C_t is recovery cash flow. r is discount rate. Court fees and locked funds reduce bank returns.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a lawyer proves night calling violations, bank risk rises. Lenders face Ombudsman fines of up to ₹20 Lakhs and public scrutiny.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Banks fear Ombudsman penalties. They want quick cash recovery. Thus, banks choose the settlement route. Recovering 35% to 55% in cash yields higher returns.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="infographic-timing-regulations" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">5. Visual Framework: RBI Debt Recovery Operating Window</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This chart outlines RBI calling hours. It highlights banned night hours. It also shows your legal remedies:
              </p>

              <div className="my-6 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/images/infographics/recovery-agent-calling-late-night-rbi-violation.jpg"
                    alt="RBI Calling Time Window Regulations for Debt Recovery Agents Infographic"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-4 bg-slate-900 text-slate-300 text-xs flex items-center justify-between">
                  <span><strong>Figure 1:</strong> RBI Calling Window (8 AM - 7 PM). Sleep rights and Ombudsman injunction process.</span>
                  <span className="text-blue-400 font-mono text-[11px]">Source: SettleLoans Legal Intelligence</span>
                </div>
              </div>
            </section>

            {/* Section 6: Securing Ombudsman Restraining Orders & FIRs */}
            <section id="ombudsman-restraining-orders-fir" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. Emergency Action Plan</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When late calls start, act calmly. Save all evidence. Clear records help lawyers take swift action.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Follow these four advocate steps to halt illegal night debt collection calls:
              </p>

              <div className="space-y-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <span className="w-5 h-5 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-[10px] font-bold">1</span>
                    <span>Stage 1: Evidentiary Audit &amp; Metadata Preservation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Never delete call logs. Export CDR logs from your telecom provider. Record calls. Ask agents for their name and agency. Save screenshots of late texts.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <span className="w-5 h-5 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-[10px] font-bold">2</span>
                    <span>Stage 2: Formal Advocate Legal Notice to Principal Nodal Officer</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Your lawyer sends a legal notice to the bank Principal Nodal Officer. The notice cites call timestamps. It demands an agency freeze within 48 hours.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <span className="w-5 h-5 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-[10px] font-bold">3</span>
                    <span>Stage 3: Fast-Track RBI Banking Ombudsman Complaint (CMS Portal)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File a complaint on the RBI CMS portal (cms.rbi.org.in). Attach CDR logs, audio files, and the notice. The Ombudsman can award up to ₹20 Lakhs in compensation.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <span className="w-5 h-5 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-[10px] font-bold">4</span>
                    <span>Stage 4: Police Complaint &amp; Cyber Crime Portal Registration</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If calls contain threats or vulgar abuse, file a police complaint. Also report on cybercrime.gov.in under Sections 351, 352, and 308 BNS.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: Converting Timing Violations into 55% OTS */}
            <section id="converting-harassment-into-ots" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Strategic Advocate Negotiations</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A regulatory breach is your best negotiation tool. When lawyers prove night calls, the power shifts to you.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Banks want to avoid RBI scrutiny. Call audio proves timing breaches. It can spark RBI audits and heavy fines.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                  <BadgePercent className="w-4 h-4 text-emerald-600" />
                  <span>The Advocate OTS Negotiation Playbook</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Your lawyer shows financial hardship along with proof of RBI violations. The bank waives 100% of penal interest and accepts a 35% to 55% settlement.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Banks fear Ombudsman penalties. They also want quick cash recovery. Thus, banks choose the settlement route.
              </p>
            </section>

            {/* Section 8: Sanction Letter Forensics & ₹5,000/Day NDC Mandate */}
            <section id="sanction-letter-forensics-ndc" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Forensic Sanction Letter Verification</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Beware of fake settlement letters from rogue agents. Never pay without verifying the sanction letter.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                An authentic One-Time Settlement Sanction Letter must meet strict banking rules:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileCheck className="w-4 h-4 text-blue-600" />
                    <span>Mandatory Sanction Letter Requisites</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Issued on official bank letterhead with digital code.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>States borrower name, PAN, and exact loan account number.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Specifies total waiver, net payment sum, and due dates.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Signed by an authorized bank officer with power of attorney.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Landmark className="w-4 h-4 text-indigo-600" />
                    <span>Payment Routing &amp; Receipt Protocols</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Never transfer funds to personal UPI IDs or agency accounts.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Pay directly into your specific loan account via RTGS/NEFT.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Collect official printed cash receipts if paying at a counter.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Retain transaction UTR numbers for permanent records.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>The Statutory ₹5,000/Day Delay Penalty on No Dues Certificates</span>
                </div>
                <p className="leading-relaxed text-amber-800">
                  Under <strong>RBI Circular RBI/2023-24/60</strong>, lenders must issue an NDC in 30 days. They must update credit scores. Lenders pay ₹5,000 per day for any delay.
                </p>
              </div>
            </section>

            {/* Section 9: Comparative Matrix */}
            <section id="comparative-recovery-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. Night Calling Legal Defense Matrix</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This table compares lawful recovery rules with illegal practices and direct remedies:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Operational Parameter</th>
                      <th>Permissible Legal Standard (RBI)</th>
                      <th>Actionable Illegal Practice</th>
                      <th>Statutory Remedy &amp; Legal Provision</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold">Calling Time Window</td>
                      <td>Only 8:00 AM to 7:00 PM. Permitted on working days.</td>
                      <td>Calls at night or before 8:00 AM. Illegal midnight calls.</td>
                      <td>RBI Master Direction. Art. 21 Right to Sleep.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Tele-calling Frequency</td>
                      <td>Max 2 to 3 calls per week. Reasonable follow-up.</td>
                      <td>Continuous calls. Robocall spam and threats.</td>
                      <td>TRAI UCC Norms. Sec 351 BNS Intimidation.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Identification Protocol</td>
                      <td>Must share name and bank. Must show DRA ID card.</td>
                      <td>Fake names. Spoofed calls. Fake police threats.</td>
                      <td>Sec 319 BNS Impersonation. RBI Outsourcing rules.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Third-Party Disclosure</td>
                      <td>Strict privacy. Contact only the borrower.</td>
                      <td>Calling family, friends, or employers.</td>
                      <td>Sec 356 BNS Defamation. DPDPA 2023 rules.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">Verbal Demeanor</td>
                      <td>Polite and civil talk. Non-threatening tone.</td>
                      <td>Abusive words. Shouting. False arrest threats.</td>
                      <td>Sec 352 BNS Insult. Police FIR action.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold">No Dues Certificate</td>
                      <td>Must issue in 30 days. Clean credit update.</td>
                      <td>Holding NDC back. Demanding extra illegal fees.</td>
                      <td>RBI ₹5,000 per day penalty compensation.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Defense Advisory */}
            <section id="settleloans-defense-advisory" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. SettleLoans Night Harassment Legal Defense</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                At <strong>SettleLoans</strong>, we believe loan default is never a crime. No citizen should face sleep loss or late-night threats.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Our banking lawyers provide strong legal defense across India. We serve legal notices on lenders. We file RBI Ombudsman cases. We also secure 45% to 65% OTS debt waivers with clean No Dues Certificates.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs my-4">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#1F5EFF]" />
                    <span>Immediate Cease-and-Desist</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    We serve legal notices on bank Nodal Officers. We halt calls within 24 to 48 hours.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Ombudsman &amp; Police Action</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    We file complaints with the RBI Ombudsman and Cyber Police. We secure fast restraining orders.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <BadgePercent className="w-3.5 h-3.5 text-emerald-600" />
                    <span>45%–65% OTS Negotiation</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    We leverage documented violations. We negotiate OTS settlements with No Dues Certificates.
                  </p>
                </div>
              </div>

              <CompanySection />
            </section>

            {/* Section 11: FAQ Accordion */}
            <section id="faqs" className="space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-xl sm:text-2xl tracking-tight mb-2">
                <HelpCircle className="w-6 h-6 text-[#1F5EFF]" />
                <h2>FAQs: Late-Night Recovery Harassment &amp; Legal Remedies</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Clear legal answers on recovery calling hours. Learn RBI rules, sleep rights, and complaint steps.
              </p>

              <div className="space-y-3 mt-6">
                {((jsonLdGraph['@graph'][4] as any)?.mainEntity || []).map((faq: any, index: number) => (
                  <details
                    key={index}
                    className="group border border-slate-200 rounded-xl bg-slate-50/50 open:bg-white transition-all duration-200 shadow-sm"
                  >
                    <summary className="flex items-center justify-between p-4 sm:p-5 font-bold text-slate-900 text-xs sm:text-sm cursor-pointer list-none select-none">
                      <span className="flex items-center gap-2 pr-3">
                        <span className="text-[#1F5EFF] font-black">Q{index + 1}.</span>
                        <span>{faq.name}</span>
                      </span>
                      <ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
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
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (CMS Portal Filing)</span>
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
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Supreme Court of India (Ramlila Maidan Right to Sleep Ruling)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">National Cyber Crime Reporting Portal (Threats &amp; Harassment)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2263"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">Bharatiya Nyaya Sanhita, 2023 (Sections 351, 352 &amp; 308 - Criminal Intimidation)</span>
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
                  Bank Recovery Harassment Complaint
                </Link>
                <Link
                  href="/bank-recovery-agent-threatening-me"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Recovery Agent Threatening Rights
                </Link>
                <Link
                  href="/recovery-agent-fake-police-call-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Fake Police Call Complaint
                </Link>
                <Link
                  href="/recovery-agents-calling-from-unknown-virtual-numbers"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Unknown Virtual Numbers Calls
                </Link>
                <Link
                  href="/rbi-ombudsman-complaint-loan-recovery-harassment"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  RBI Ombudsman Complaint Process
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Loan Default &amp; Jail Law
                </Link>
                <Link
                  href="/bank-sending-legal-notice-to-employer-illegal-recovery"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Workplace Recovery Defense
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
                <Link
                  href="/top-10-rbi-rules-for-loan-defaulters-rights"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Top 10 RBI Defaulter Rights
                </Link>
                <Link
                  href="/personal-loan-debt-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Personal Loan Debt Settlement
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
                Ashish leads banking defense at SettleLoans. He enforces the RBI Fair Practices Code. He stops agent abuse and leads OTS talks across India.
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
                <span>Anti-Harassment Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Are Agents Calling Before 8 AM or After 7 PM?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Stop late-night calls now. Our advocates send legal notices to banks. We stop harassment fast. We also negotiate 45%–65% OTS debt waivers.
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
                  <span>RBI Master Direction Compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Banking Ombudsman Escalation</span>
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
