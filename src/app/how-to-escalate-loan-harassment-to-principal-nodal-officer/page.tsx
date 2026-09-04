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
  DollarSign,
  Mail,
  Send,
  Layers
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Escalate Loan Harassment to Nodal Officer | SettleLoans',
  description: 'Learn how to escalate bank recovery harassment to Principal Nodal Officers under RBI guidelines and freeze illegal recovery via SettleLoans.',
  keywords: [
    'bank principal nodal officer complaint loan harassment',
    'how to complain to principal nodal officer bank harassment',
    'rbi internal ombudsman loan recovery harassment complaint',
    'bank nodal officer escalation email format loan default',
    'freeze loan recovery agent calls nodal officer',
    'banking ombudsman complaint after nodal officer rejection',
    'rbi fair practices code nodal officer complaint',
    'stop recovery agent harassment pno complaint',
    'principal nodal officer list sbi hdfc icici axis',
    'escalate bank harassment level 3 rbi'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/how-to-escalate-loan-harassment-to-principal-nodal-officer',
  },
  openGraph: {
    title: 'How to Escalate Bank Loan Harassment to Principal Nodal Officer (PNO) | RBI Grievance & Collection Freeze Guide',
    description: 'Learn how to bypass local branch managers and file formal statutory representations directly with the bank’s Principal Nodal Officer (PNO) under RBI Internal Ombudsman guidelines to freeze collection actions.',
    url: 'https://www.settleloans.in/how-to-escalate-loan-harassment-to-principal-nodal-officer',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/how-to-escalate-loan-harassment-to-principal-nodal-officer.jpg',
        width: 1200,
        height: 675,
        alt: 'How to Escalate Bank Loan Harassment to Principal Nodal Officer Legal Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Escalate Bank Loan Harassment to Principal Nodal Officer (PNO): RBI Freeze Guide',
    description: 'Facing rogue recovery calls, third-party defamation, or workplace visits? Discover how to file a statutory Level-3 complaint with the bank Principal Nodal Officer to stop harassment immediately.',
    images: ['https://www.settleloans.in/images/infographics/how-to-escalate-loan-harassment-to-principal-nodal-officer.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/how-to-escalate-loan-harassment-to-principal-nodal-officer#webpage",
      "url": "https://www.settleloans.in/how-to-escalate-loan-harassment-to-principal-nodal-officer",
      "name": "How to Escalate Bank Loan Harassment to Principal Nodal Officer (PNO) | RBI Grievance & Collection Freeze Guide",
      "description": "Suffering bank recovery agent harassment? Learn how to bypass local branch managers and file formal statutory representations directly with the bank’s Principal Nodal Officer (PNO) under RBI Internal Ombudsman guidelines to freeze collection actions and secure a 50%–70% OTS settlement.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/how-to-escalate-loan-harassment-to-principal-nodal-officer#breadcrumb"
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
      "@id": "https://www.settleloans.in/how-to-escalate-loan-harassment-to-principal-nodal-officer#breadcrumb",
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
          "name": "Principal Nodal Officer Harassment Escalation",
          "item": "https://www.settleloans.in/how-to-escalate-loan-harassment-to-principal-nodal-officer"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/how-to-escalate-loan-harassment-to-principal-nodal-officer#article",
      "headline": "How to Escalate Bank Loan Harassment to the Principal Nodal Officer: RBI Grievance Escalation & Recovery Freeze Blueprint",
      "description": "A comprehensive regulatory and legal blueprint detailing how aggrieved borrowers can bypass unhelpful branch staff, file formal statutory representations directly with the bank's Principal Nodal Officer (PNO) under RBI Master Directions, trigger mandatory Internal Ombudsman scrutiny, legally freeze third-party recovery operations, and convert institutional exposure into a structured One-Time Settlement.",
      "image": "https://www.settleloans.in/images/infographics/how-to-escalate-loan-harassment-to-principal-nodal-officer.jpg",
      "datePublished": "2026-09-02T12:00:00+05:30",
      "dateModified": "2026-09-02T12:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/how-to-escalate-loan-harassment-to-principal-nodal-officer#webpage"
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
      "@id": "https://www.settleloans.in/how-to-escalate-loan-harassment-to-principal-nodal-officer#service",
      "name": "SettleLoans - Principal Nodal Officer Legal Escalation & Debt Resolution Advisory",
      "description": "Executive legal representation and statutory banking dispute advisory for borrowers subjected to unlawful loan recovery harassment, predatory debt collection calls, and regulatory non-compliance across commercial banks and NBFCs in India.",
      "url": "https://www.settleloans.in/how-to-escalate-loan-harassment-to-principal-nodal-officer",
      "image": "https://www.settleloans.in/images/infographics/how-to-escalate-loan-harassment-to-principal-nodal-officer.jpg",
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
        "reviewCount": "2490",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Rajeev Malhotra"
          },
          "datePublished": "2026-07-14",
          "reviewBody": "A private bank sent aggressive agents for my overdue credit card. They called my home phone at 6:30 AM and sent threats on WhatsApp. Branch staff did nothing. SettleLoans sent a petition under RBI Circular DOR.ORG.REC.65 to the Principal Nodal Officer. Within 48 hours, the PNO stopped the agency calls and approved a 55% OTS settlement.",
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
            "name": "Sunita Venkatesh"
          },
          "datePublished": "2026-08-02",
          "reviewBody": "An NBFC sent recovery agents to my office after I missed loan EMIs due to medical costs. SettleLoans escalated the case to the Principal Nodal Officer with CCTV logs and call audio files. The PNO stopped all field visits under RBI rules and helped us agree on an easy loan closure.",
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
            "name": "Arunachalam Pillai"
          },
          "datePublished": "2026-06-25",
          "reviewBody": "I faced constant automated calls and abuse from third-party agents for a foreign bank. SettleLoans filed a Level-3 PNO complaint with call records. The bank admitted the breach, sent a written apology. And sanctioned an OTS with a No Dues Certificate.",
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
          "datePublished": "2026-08-19",
          "reviewBody": "Ashish Jhangra and the SettleLoans team gave great legal support when branch staff ignored abusive agents. Their complaint to the PNO created real accountability. The bank stopped all harassment within 72 hours and offered an affordable debt settlement.",
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
      "@id": "https://www.settleloans.in/how-to-escalate-loan-harassment-to-principal-nodal-officer#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is a Principal Nodal Officer (PNO) in a bank or NBFC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Principal Nodal Officer (PNO) is a top bank officer. Under RBI rules, they handle serious complaints that branches fail to fix. They report to bank leadership and make sure the bank follows rules."
          }
        },
        {
          "@type": "Question",
          "name": "Why do local branch managers fail to stop recovery agent harassment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Local branch managers have monthly collection quotas. They often hire outside recovery agents to meet targets. Because they focus on recovery numbers, they often ignore oral complaints."
          }
        },
        {
          "@type": "Question",
          "name": "What statutory powers does the PNO possess to freeze recovery actions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The PNO has executive power to halt recovery actions. They can order collection agencies to stop all calls and visits at once while investigating the complaint."
          }
        },
        {
          "@type": "Question",
          "name": "What is the mandatory role of the RBI Internal Ombudsman (IO) when a PNO handles a complaint?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI rules, a bank cannot reject your complaint without the Internal Ombudsman's check. The IO is an independent referee who reviews the facts to ensure fair treatment."
          }
        },
        {
          "@type": "Question",
          "name": "What essential evidence must be submitted when filing a PNO harassment complaint?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Submit call recordings with dates and times, call logs, screenshots of rude WhatsApp or SMS texts, and CCTV footage. Also attach a copy of your first branch complaint."
          }
        },
        {
          "@type": "Question",
          "name": "What is the statutory response timeline for a Principal Nodal Officer under RBI rules?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The PNO must confirm receipt within 48 hours. Under RBI rules, the bank has 30 days to resolve your case. If not resolved, you can complain to the RBI Integrated Ombudsman."
          }
        },
        {
          "@type": "Question",
          "name": "Can a PNO complaint be leveraged to negotiate a One-Time Settlement (OTS)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Proving agent abuse puts regulatory pressure on the bank. To avoid fines and bad press, banks often agree to a One-Time Settlement with 50% to 70% waivers and a No Dues Certificate."
          }
        },
        {
          "@type": "Question",
          "name": "Can a recovery agent continue visiting my home while a PNO investigation is ongoing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. When the PNO gets an abuse complaint, they put a temporary freeze on collection. Agents cannot call or visit you while the bank investigates."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I find the official contact details of a bank's Principal Nodal Officer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All banks and NBFCs must post PNO contact details on their website homepages and in branch offices. You can also find them on your monthly loan bills."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if the bank's PNO rejects my harassment complaint?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If the PNO rejects your complaint after IO review, you can file an appeal with the RBI Integrated Ombudsman at cms.rbi.org.in. You can also file a case in Consumer Court for damages."
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
  { id: 'demystifying-pno-grievance-architecture', title: '1. PNO & RBI 3-Tier Grievance Architecture' },
  { id: 'statutory-mandates-rbi-fair-practices', title: '2. Statutory Mandates & Regulatory Accountability' },
  { id: 'documenting-agent-coercion-evidence', title: '3. Documenting Coercion & Evidentiary Dossiers' },
  { id: 'bank-npa-accounting-harassment-npv', title: '4. NPA Accounting & Harassment Risk NPV' },
  { id: 'pno-escalation-visual-roadmap', title: '5. Institutional Escalation Roadmap' },
  { id: 'step-by-step-pno-filing-protocol', title: '6. Step-by-Step PNO Escalation Protocol' },
  { id: 'rbi-internal-ombudsman-mandatory-review', title: '7. RBI Internal Ombudsman Mandatory Review' },
  { id: 'converting-pno-grievance-to-ots', title: '8. Converting Grievances into 50%–70% OTS' },
  { id: 'dispute-escalation-comparative-matrix', title: '9. Dispute Escalation Comparative Matrix' },
  { id: 'settleloans-executive-representation', title: '10. SettleLoans Executive Legal Representation' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function PNOEscalationHarassmentPage() {
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
            <Landmark className="w-3.5 h-3.5" />
            <span>RBI Grievance Redressal Architecture • Level-3 PNO Escalation</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">How to Escalate Recovery Harassment to Nodal Officers</h1>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-3 mb-5 flex flex-wrap items-center justify-center gap-4">
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
              <span>RBI Ombudsman &amp; Banking Regulations Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Escalate to PNO &amp; Freeze Harassment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Evaluate Loan Settlement Options
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
                <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                <span>Executive Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Rogue recovery agents take advantage of borrowers who feel alone. Branch complaints often get ignored. Submitting a formal petition directly to the Principal Nodal Officer (PNO) under RBI rules stops recovery calls within 48 to 72 hours. It also gives you strong leverage for a 50% to 70% OTS settlement.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Principal Nodal Officer (PNO) Harassment Escalation</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Level-3 Authority:</strong> The Principal Nodal Officer is a senior bank leader under RBI rules. They investigate complaints independently and enforce customer protection guidelines.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Immediate Stop on Collection Calls:</strong> Filing a complaint backed by proof forces the bank to act. The PNO can halt recovery calls and stop home visits right away.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory Review by Internal Ombudsman:</strong> Banks cannot reject your complaint on their own. Under RBI rules, an independent Internal Ombudsman must review every rejected case first.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Strong Leverage for Loan Settlement:</strong> Proving harassment puts regulatory pressure on the bank. This often leads to an approved One-Time Settlement (OTS) with waivers of 50% to 70%.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Demystifying the Principal Nodal Officer (PNO) & RBI Three-Tier Grievance Architecture */}
            <section id="demystifying-pno-grievance-architecture" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. Demystifying the Principal Nodal Officer (PNO)</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When borrowers face money problems, banks often hire recovery agents. Many agents use harsh tactics to demand quick payments. Borrowers often try to complain to local branch managers. But branch staff rarely stop these agents because they have recovery quotas.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To protect consumers, the Reserve Bank of India (RBI) built a 3-tier complaint system. Complaints start at the branch (Level 1). If unresolved, they go to the Regional Officer (Level 2). Then they reach the <strong>Principal Nodal Officer (PNO)</strong> at Level 3.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Principal Nodal Officer is a senior bank leader. They report directly to bank chiefs and the RBI. The PNO has full authority to review call logs, fire bad recovery agencies. And halt all collection actions.
              </p>

              <div className="bg-slate-50 border-l-4 border-[#1F5EFF] p-4 rounded-r-xl my-4">
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm mb-1 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Branch Desk vs. Principal Nodal Officer</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Branch staff focus only on targets. In contrast, the PNO must follow RBI rules. When you file a complaint with the PNO, the bank logs it directly with the regulator.
                </p>
              </div>
            </section>

            {/* Section 2: Statutory Legal Mandates & Regulatory Accountability */}
            <section id="statutory-mandates-rbi-fair-practices" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Statutory Legal Mandates, RBI Fair Practices Code</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India sets clear rules for debt collection. Under the <em>RBI Fair Practices Code</em> and circular <em>DOR.ORG.REC.65</em>, banks and agents must follow these limits:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li><strong>Calling Hours:</strong> Agents can only call or visit between 8:00 AM and 7:00 PM. Early or late calls break the law.</li>
                <li><strong>Privacy Protection:</strong> Agents cannot tell your family, neighbours, friends, or co-workers about your debt.</li>
                <li><strong>No Abuse or Threats:</strong> Threatening language, rude words. And office visits are illegal acts.</li>
                <li><strong>ID and Notice:</strong> Agents must show bank ID cards, hold DRA papers. And give advance notice before visiting.</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Supreme Court orders like <em>ICICI Bank v. Prakash Kaur</em>, banks are liable for their recovery agents. A bank cannot blame outside agencies for harassment.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="blog-content">
                  <thead>
                    <tr>
                      <th>Statutory Provision / Circular.</th>
                      <th>Regulatory Mandate Enforced.</th>
                      <th>PNO Legal Enforcement Scope.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">RBI Circular DOR.ORG.REC.65.</td>
                      <td>Bans calls outside 8 AM to 7 PM. stops third-party harassment.</td>
                      <td>Requires immediate termination of rogue recovery agency contracts.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Banking Regulation Act, Sec 47A.</td>
                      <td>RBI power to levy heavy fines on banks for rule breaches.</td>
                      <td>Forces the PNO to resolve high-risk complaints to avoid central bank fines.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">RBI Internal Ombudsman Scheme.</td>
                      <td>Independent ombudsman review required before the PNO can reject a complaint.</td>
                      <td>Ensures fair decisions without branch sales bias.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Supreme Court Precedents (CPA 2019).</td>
                      <td>Bank liability for agent threats and damages for mental distress.</td>
                      <td>Gives the PNO power to approve loan settlements and clear the debt.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When you cite these laws in a complaint to the PNO, the bank acts fast. They know that ignoring abuse leads to RBI audits and court fines.
              </p>
            </section>

            {/* Section 3: Documenting Agent Coercion & Building the Evidentiary Dossier */}
            <section id="documenting-agent-coercion-evidence" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. Documenting Agent Coercion</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To win your case with the PNO, you need solid proof. Spoken complaints get ignored. But digital proof forces quick action. Gather these 4 types of records:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-1.5">
                    <PhoneCall className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Call Recordings and Call Logs</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Save audio files of all calls. Note the date, time. And phone numbers. Highlight any calls made outside 8 AM to 7 PM.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-[#1F5EFF]" />
                    <span>WhatsApp and SMS Messages</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Take screenshots of rude messages, fake legal threats. And abusive texts sent to you or your family.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-[#1F5EFF]" />
                    <span>CCTV and Visitor Logs</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Keep security footage and gate records if agents visit your home or office without permission.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-1.5">
                    <HeartPulse className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Medical and Doctor Records</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Keep doctor prescriptions if collection stress caused anxiety or high blood pressure.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When organized clearly, this proof creates an open-and-shut case. The PNO must act quickly to avoid RBI fines.
              </p>
            </section>

            {/* Section 4: Bank NPA Accounting, Provisioning Burdens & Harassment Risk NPV Formula */}
            <section id="bank-npa-accounting-harassment-npv" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Bank NPA Accounting &amp; PNO Harassment NPV</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Filing a PNO complaint gives you strong leverage under bank accounting rules. Under RBI norms. When a loan is unpaid for 90 days, it turns into an NPA.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                As unpaid loans get older, banks must lock up cash reserves to cover bad debt losses:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="blog-content">
                  <thead>
                    <tr>
                      <th>default Classification.</th>
                      <th>Overdue Aging Timeline.</th>
                      <th>Mandatory Capital Provision.</th>
                      <th>Bank Settlement Haircut Potential.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Special Mention Account (SMA-1/2).</td>
                      <td>31 to 90 Days Overdue.</td>
                      <td>5% Capital Reserve.</td>
                      <td>Waiver of late fees and penal interest.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Substandard NPA.</td>
                      <td>91 to 365 Days Overdue.</td>
                      <td>25% Bad Loan Reserve.</td>
                      <td>30% to 45% principal waiver.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful NPA Tier 1 (D1).</td>
                      <td>12 to 24 Months Overdue.</td>
                      <td>100% Capital Reserve.</td>
                      <td>45% to 60% principal waiver.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful NPA Tier 2 / Written-Off.</td>
                      <td>24+ Months Overdue.</td>
                      <td>100% Write-Off.</td>
                      <td>60% to 75% principal waiver.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When you prove harassment in a PNO complaint, the bank evaluates the risk of continuing collection against settling the account:
              </p>

              {/* JSX Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Bank Harassment Risk vs Recovery Model</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  Net Recovery Value = Expected Cash - RBI Fine Risks - Legal Costs - Tied-up Capital
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Banks subtract potential RBI fines, legal fees. And tied-up funds from expected cash. Chasing a protected borrower costs more than settling the loan.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because pursuing harsh collection risks RBI fines and bad press, banks prefer to settle. The PNO often directs teams to approve a One-Time Settlement (OTS) with large waivers.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="pno-escalation-visual-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">5. Institutional Escalation Roadmap</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This visual chart outlines the 5 key stages of escalating harassment. It shows how cases move from gathering evidence to PNO intervention, collection freezing. And final settlement with a No Dues Certificate.
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/how-to-escalate-loan-harassment-to-principal-nodal-officer.jpg"
                  alt="How to Escalate Bank Loan Harassment to Principal Nodal Officer PNO Infographic Flowchart"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 1–2: Proof &amp; Escalation</span>
                  <span>Record calls, note timestamps, and send your formal complaint straight to the PNO.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 3–4: Review &amp; Call Freeze</span>
                  <span>The Internal Ombudsman reviews the file while the bank freezes all recovery calls.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 5: Settlement &amp; NDC</span>
                  <span>Complete an approved OTS with a 50%–70% waiver and receive a ₹0 No Dues Certificate.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Step-by-Step PNO Escalation Protocol */}
            <section id="step-by-step-pno-filing-protocol" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. Step-by-Step PNO Escalation Protocol</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Follow these 5 steps to file a complaint with the Principal Nodal Officer:
              </p>

              <div className="space-y-3 my-6">
                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm space-y-1.5">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">1</span>
                    <span>Create Your Branch Record</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-7">
                    Send a written complaint by email or via the bank portal. Save your Ticket ID to prove you tried Level 1 first.
                  </p>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm space-y-1.5">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">2</span>
                    <span>Find the PNO Contact Details</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-7">
                    Look up the PNO name and email on the bank website or on the RBI grievance portal.
                  </p>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm space-y-1.5">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">3</span>
                    <span>Draft Your Formal Letter</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-7">
                    List your loan details, hardship reason, call records. And dates of agent abuse. Cite RBI recovery rules.
                  </p>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm space-y-1.5">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">4</span>
                    <span>Send via Email and Post</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-7">
                    Email the signed letter to the PNO desk. Also send a copy by Speed Post for legal tracking proof.
                  </p>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm space-y-1.5">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">5</span>
                    <span>Freeze All Recovery Calls</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-7">
                    Once received, the PNO office logs the issue. Bank rules require an immediate freeze on calls during the review.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: The RBI Internal Ombudsman Mandatory Review Mechanism */}
            <section id="rbi-internal-ombudsman-mandatory-review" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. The RBI Internal Ombudsman (IO) Mandatory Review</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A key safeguard in banking is the <strong>RBI Internal Ombudsman (IO)</strong>. The IO is an independent referee who reviews customer disputes. All large banks and NBFCs must run an active Internal Ombudsman desk.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The main rule is simple: <em>The bank’s Principal Nodal Officer cannot reject a customer complaint without the written consent of the Internal Ombudsman.</em> If the PNO wants to reject your case, the IO must review the whole file first.
              </p>

              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3 my-6">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>How the Internal Ombudsman Protects You</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <strong className="text-slate-900 block mb-1">Independent Call Audit</strong>
                    <span>The IO checks call recordings to see if agents called outside allowed hours or used bad language.</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <strong className="text-slate-900 block mb-1">Binding Orders</strong>
                    <span>If agents broke rules, the IO can order the bank to apologize, pay damages, and settle the debt.</span>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Internal Ombudsman reports straight to the RBI. This gives banks strong reason to resolve valid complaints quickly.
              </p>
            </section>

            {/* Section 8: Converting PNO Grievances into Structured Debt Settlement (50%–70% OTS) */}
            <section id="converting-pno-grievance-to-ots" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Strategic Debt Resolution</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Stopping harassment brings quick relief. But clearing the loan brings lasting peace. When you talk to branch staff alone, they demand full payment plus extra fees.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                However. When your case sits with the Principal Nodal Officer, the bank wants to avoid regulatory trouble. Experienced advocates use this opening to secure a fair settlement:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <BadgePercent className="w-4 h-4 text-emerald-600" />
                    <span>100% Waiver on Penal Fees</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The bank cancels all late charges, extra interest. And notice fees.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <DollarSign className="w-4 h-4 text-blue-600" />
                    <span>50% to 70% Principal Waiver</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The settlement desk approves a deep discount on the loan balance.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-indigo-600" />
                    <span>Official No Dues Certificate (NDC)</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    After payment, the bank issues a legal closure letter showing ₹0 balance.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Scale className="w-4 h-4 text-amber-600" />
                    <span>Withdrawal of Legal Cases</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The bank drops all cheque bounce notices and court actions.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This approach turns an abusive recovery situation into a clean and permanent exit from debt.
              </p>
            </section>

            {/* Section 9: Dispute Escalation & Redressal Comparative Matrix */}
            <section id="dispute-escalation-comparative-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. Bank Grievance Escalation</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Here is a simple comparison of different ways to handle debt harassment and settle loans in India:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="blog-content">
                  <thead>
                    <tr>
                      <th>Escalation Channel.</th>
                      <th>Governing Statutory Framework.</th>
                      <th>Average Resolution Speed.</th>
                      <th>Collection Freeze Authority.</th>
                      <th>Settlement Leverage Potential.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Branch Level Desk (Level-1).</td>
                      <td>Internal Bank Customer Service.</td>
                      <td>15 to 30 Days (Often Ignored).</td>
                      <td>Zero (Frontline staff cannot stop agencies).</td>
                      <td>Low (Insists on full payment).</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Principal Nodal Officer (Level-3).</td>
                      <td>RBI Integrated Ombudsman Scheme.</td>
                      <td>48 Hours Freeze / 30 Days Final.</td>
                      <td>Immediate (Direct executive order to ops team).</td>
                      <td>High (Enables 50% to 70% OTS settlement).</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">RBI Integrated Ombudsman.</td>
                      <td>RBI CMS Scheme (Section 35A BRA 1949).</td>
                      <td>30 to 90 Days.</td>
                      <td>High (Central bank regulatory action).</td>
                      <td>High (Forces bank compliance desk to resolve).</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">District Consumer Court (DCDRC).</td>
                      <td>Section 35 Consumer Protection Act 2019.</td>
                      <td>6 to 18 Months.</td>
                      <td>Court order (Interim stay under Sec 38(8)).</td>
                      <td>High (Risk of heavy damages forces settlement).</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Advocate-Led Strategic Resolution.</td>
                      <td>Legal Notice &amp. Direct Negotiation.</td>
                      <td>15 to 45 Days.</td>
                      <td>Immediate (Full legal protection across all desks).</td>
                      <td>Highest (Fastest path to debt freedom &amp. NDC).</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10 & Company Section */}
            <section id="settleloans-executive-representation" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. SettleLoans Executive Legal Representation</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Facing bank notices and dealing with recovery agents is stressful. At <strong>SettleLoans</strong>, our team of banking advocates and legal experts stands with you. We handle all talks with senior bank officers directly.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                We draft formal petitions to the Principal Nodal Officer. We stop recovery calls fast and negotiate 50% to 70% settlements with official No Dues Certificates. We help you live debt-free with peace of mind.
              </p>

              <CompanySection />
            </section>

            {/* Section 11: FAQ Accordion */}
            <section id="faqs" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. FAQs: Principal Nodal Officer Harassment Escalation</h2>
              <div className="space-y-3">
                {((jsonLdGraph["@graph"].find((item: any) => item["@type"] === "FAQPage") as any)?.mainEntity || []).map((faq: any, index: number) => (
                  <details
                    key={index}
                    className="group border border-slate-200 rounded-2xl bg-white p-4 sm:p-5 transition-all duration-200 open:shadow-sm open:border-blue-200"
                  >
                    <summary className="flex justify-between items-center font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none select-none">
                      <span className="pr-4">{faq.name}</span>
                      <ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform duration-200 flex-shrink-0" />
                    </summary>
                    <div className="pt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-3">
                      {faq.acceptedAnswer.text}
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
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Portal (Complaint Management System)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction – Recovery Agents &amp; Fair Practices Code</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://rbi.org.in/Scripts/BS_ViewMasCirculardetails.aspx?id=12379"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Internal Ombudsman Scheme Guidelines &amp; Directives</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/1993"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Banking Regulation Act, 1949 (Statutory Powers &amp; Section 47A)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">Supreme Court of India (ICICI Bank v. Prakash Kaur &amp; Recovery Agent Jurisprudence)</span>
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
                  href="/consumer-court-complaint-against-bank-harassment"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Consumer Court Bank Harassment
                </Link>
                <Link
                  href="/can-recovery-agents-visit-home-on-sunday-or-holidays"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Recovery Agent Sunday Visit Rules
                </Link>
                <Link
                  href="/can-recovery-agents-enter-house-without-permission"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Recovery Agent House Entry Rights
                </Link>
                <Link
                  href="/bank-sending-legal-notice-to-employer-illegal-recovery"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Employer Harassment Notice Defense
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Loan Default Legal Rights &amp; Jail Myths
                </Link>
                <Link
                  href="/bank-arbitration-notice-reply"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Arbitration Notice Reply
                </Link>
                <Link
                  href="/bank-freeze-salary-account-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Salary Account Freeze Protection
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Settlement Policy
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
                <Link
                  href="/cibil-score-kaise-sudhare-settlement-ke-baad"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  CIBIL Score Repair Post-Settlement
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
                Senior expert in RBI grievance escalations, Ombudsman dispute defense. And bank loan settlements across India.
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
                <span>Emergency Harassment Escalation</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Facing Rogue Recovery Agents?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not put up with threats, abusive calls, or home visits. Hire seasoned advocates to file urgent PNO complaints and freeze collections right away.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Free PNO Consultation
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
                  <span>RBI Statutory Banking Compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Legal Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Level-3 PNO &amp; Ombudsman Advocacy</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Advocate-Led Compromise Settlements</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
