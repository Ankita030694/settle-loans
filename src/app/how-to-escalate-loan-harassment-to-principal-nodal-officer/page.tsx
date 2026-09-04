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
          "reviewBody": "After a private bank outsourced my overdue credit card account to an aggressive third-party collection agency, agents began calling my residential landline at 6:30 AM and sending threatening WhatsApp texts. Branch staff dismissed my oral complaints. SettleLoans drafted a high-level statutory petition citing RBI Circular DOR.ORG.REC.65 directly to the Principal Nodal Officer. Within 48 hours, the PNO issued a formal halt order to the agency, recalled the third-party agency, and approved a 55% OTS settlement.",
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
          "reviewBody": "A major NBFC sent recovery agents to my workplace reception after I missed personal loan EMIs due to medical hospitalization. SettleLoans escalated the matter to the Chief Grievance Officer and Principal Nodal Officer with timestamped CCTV logs and call audio files. The PNO immediately suspended all field recovery operations under the RBI Internal Ombudsman mandate and facilitated a structured loan closure.",
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
          "reviewBody": "I was facing intense mental agony due to incessant automated calling and abusive threats from third-party telecallers representing a foreign bank. SettleLoans invoked Level-3 PNO escalation backed by Section 65B certified call records. The bank's executive committee admitted the operational breach, issued a written apology, and sanctioned an OTS with an immediate No Dues Certificate.",
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
          "reviewBody": "Ashish Jhangra and the SettleLoans legal team provided outstanding guidance when local bank managers refused to act against abusive collection agents. Their statutory PNO representation created immediate executive accountability and forced the bank to halt harassment within 72 hours, leading to a smooth debt compromise.",
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
            "text": "A Principal Nodal Officer (PNO) is a senior bank executive. Under RBI rules, they handle serious customer complaints that branches fail to resolve. They report directly to top bank management and ensure compliance with central banking laws."
          }
        },
        {
          "@type": "Question",
          "name": "Why do local branch managers fail to stop recovery agent harassment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Local branch managers have monthly recovery targets. They often hire outside collection agencies to meet these targets. Because they prioritize recovering money, oral complaints at the branch counter are often ignored."
          }
        },
        {
          "@type": "Question",
          "name": "What statutory powers does the PNO possess to freeze recovery actions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The PNO has executive authority to stop collection actions. They can order recovery agencies to halt all calls and visits immediately while the complaint is investigated."
          }
        },
        {
          "@type": "Question",
          "name": "What is the mandatory role of the RBI Internal Ombudsman (IO) when a PNO handles a complaint?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI rules, a bank cannot reject your complaint without the Internal Ombudsman's review. The IO is an independent authority who checks all facts to ensure fair treatment."
          }
        },
        {
          "@type": "Question",
          "name": "What essential evidence must be submitted when filing a PNO harassment complaint?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Submit call recordings with timestamps, call logs, screenshots of threatening WhatsApp or SMS texts, and CCTV footage. You should also include proof of your initial branch complaint."
          }
        },
        {
          "@type": "Question",
          "name": "What is the statutory response timeline for a Principal Nodal Officer under RBI rules?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The PNO must acknowledge your complaint within 48 hours. Under RBI rules, the bank has 30 days to resolve the issue. If unresolved, you can file a complaint with the RBI Integrated Ombudsman."
          }
        },
        {
          "@type": "Question",
          "name": "Can a PNO complaint be leveraged to negotiate a One-Time Settlement (OTS)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Proving harassment exposes the bank to RBI penalties. To avoid fines and legal trouble, banks often agree to a One-Time Settlement with 50% to 70% waivers and a No Dues Certificate."
          }
        },
        {
          "@type": "Question",
          "name": "Can a recovery agent continue visiting my home while a PNO investigation is ongoing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. When the PNO receives a harassment complaint, they issue an interim freeze. Agents are barred from visiting or calling you while the bank investigates."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I find the official contact details of a bank's Principal Nodal Officer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Every bank and NBFC must publish its PNO details on its official website homepage and inside physical branches. You can also find them on your monthly loan statements."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if the bank's PNO rejects my harassment complaint?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If the PNO rejects your complaint after Internal Ombudsman review, you can escalate to the RBI Integrated Ombudsman online at cms.rbi.org.in. You can also approach the Consumer Court for compensation."
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
                Rogue recovery agents exploit borrower isolation by ignoring verbal branch complaints. Submitting a formal statutory petition directly to the Principal Nodal Officer (PNO) under RBI Internal Ombudsman rules bypasses regional bottlenecks, triggers mandatory executive oversight, halts third-party calling within 48–72 hours, and creates decisive leverage for a 50%–70% OTS compromise.
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
                  <span><strong>Statutory Level-3 Authority:</strong> The Principal Nodal Officer is a General Manager-level executive mandated under RBI regulations to independently investigate systemic banking defaults, bypass conflicted branch staff, and enforce compliance with customer protection directives.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Immediate Stop on Collection Calls:</strong> Filing a formal complaint backed by proof forces the bank to act quickly. The Principal Nodal Officer can halt recovery calls and stop home visits right away.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory Review by Internal Ombudsman:</strong> Banks cannot simply reject your complaint. Under RBI rules, an independent Internal Ombudsman must review every rejected case first.</span>
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
                When borrowers face unexpected money troubles, banks often hand their accounts to recovery agents. Many agents use aggressive tactics to force quick payments. Borrowers often try to complain to local branch managers. However, branch staff rarely stop these agents because they focus only on monthly recovery targets.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To protect customers, the Reserve Bank of India (RBI) created a <strong>Three-Tier Grievance System</strong>. Complaints start at the local branch (Level 1). If unresolved, they move to the Regional Officer (Level 2). Finally, they reach the <strong>Principal Nodal Officer (PNO)</strong> at Level 3.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Principal Nodal Officer is a top bank executive. They report directly to the bank leadership and the RBI. The PNO has the legal authority to check call records, cancel contracts with rogue collection agencies, and freeze all harassment against you.
              </p>

              <div className="bg-slate-50 border-l-4 border-[#1F5EFF] p-4 rounded-r-xl my-4">
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm mb-1 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Branch Desk vs. Principal Nodal Officer</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Branch staff only focus on collecting money. In contrast, the Principal Nodal Officer must follow RBI rules. When you file a complaint with the PNO, the bank must log it on the official RBI record.
                </p>
              </div>
            </section>

            {/* Section 2: Statutory Legal Mandates & Regulatory Accountability */}
            <section id="statutory-mandates-rbi-fair-practices" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Statutory Legal Mandates, RBI Fair Practices Code</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India sets strict rules for debt recovery. Under the <em>RBI Fair Practices Code</em> and circular <em>DOR.ORG.REC.65</em>, all banks and recovery agencies must obey clear limits:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li><strong>Strict Calling Hours:</strong> Agents can only call or visit between 8:00 AM and 7:00 PM. Late-night or early-morning calls are illegal.</li>
                <li><strong>Total Privacy Protection:</strong> Agents cannot reveal your debt to relatives, neighbours, friends, or co-workers.</li>
                <li><strong>No Abuse or Threats:</strong> Verbal abuse, physical intimidation, and unannounced workplace visits are serious criminal offences.</li>
                <li><strong>ID and Notice Required:</strong> Agents must carry valid bank ID cards, hold DRA certification, and give advance notice before visiting.</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Supreme Court rulings (such as <em>ICICI Bank v. Prakash Kaur</em>), banks are directly responsible for the actions of their recovery agents. A bank cannot blame outside agencies for harassment.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="blog-content">
                  <thead>
                    <tr>
                      <th>Statutory Provision / Circular</th>
                      <th>Regulatory Mandate Enforced</th>
                      <th>PNO Legal Enforcement Scope</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">RBI Circular DOR.ORG.REC.65</td>
                      <td>Strict prohibition of calling borrowers outside 8 AM to 7 PM; ban on third-party harassment.</td>
                      <td>Mandates immediate termination of non-compliant recovery agency contracts.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Banking Regulation Act, Sec 47A</td>
                      <td>RBI authority to impose heavy monetary penalties on banks for customer protection failures.</td>
                      <td>Compels PNO to settle high-risk grievances internally to avert central bank fines.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">RBI Internal Ombudsman Scheme</td>
                      <td>Mandatory independent ombudsman review prior to any grievance rejection by the PNO.</td>
                      <td>Ensures objective adjudication free from regional branch collection bias.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Supreme Court Precedents (CPA 2019)</td>
                      <td>Vicarious liability for musclemen tactics and tortious compensation for mental trauma.</td>
                      <td>Empowers PNO to sanction compromise settlements and issue complete debt discharges.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When you cite these laws in a complaint to the Principal Nodal Officer, the bank takes notice. They know that ignoring harassment can trigger RBI investigations and heavy consumer court fines.
              </p>
            </section>

            {/* Section 3: Documenting Agent Coercion & Building the Evidentiary Dossier */}
            <section id="documenting-agent-coercion-evidence" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. Documenting Agent Coercion</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To win your case with the Principal Nodal Officer, you need clear proof. Verbal claims can be ignored, but digital records force quick action. Gather these four types of evidence:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-1.5">
                    <PhoneCall className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Call Recordings and Call Logs</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Save clear audio recordings of all recovery calls. Note the date, time, agent name, and phone number. Highlight any calls made outside 8 AM to 7 PM.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-[#1F5EFF]" />
                    <span>WhatsApp and SMS Messages</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Take screenshots of threatening messages, fake legal notices, and abusive texts sent to you, your family, or your employer.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-[#1F5EFF]" />
                    <span>CCTV and Visitor Logs</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Collect CCTV footage and security gate registers if agents enter your home or office without permission.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-1.5">
                    <HeartPulse className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Medical and Doctor Records</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Keep medical prescriptions or doctor notes if severe collection harassment caused anxiety, stress, or high blood pressure.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When organized clearly, this proof creates an open-and-shut case. The Principal Nodal Officer must act immediately to avoid RBI penalties.
              </p>
            </section>

            {/* Section 4: Bank NPA Accounting, Provisioning Burdens & Harassment Risk NPV Formula */}
            <section id="bank-npa-accounting-harassment-npv" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Bank NPA Accounting &amp; PNO Harassment NPV</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Filing a PNO complaint gives you powerful leverage because of bank accounting rules. Under RBI norms, when a loan is overdue for more than 90 days, it becomes a Non-Performing Asset (NPA).
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                As overdue accounts get older, banks must set aside cash reserves to cover potential losses:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="blog-content">
                  <thead>
                    <tr>
                      <th>Delinquency Classification</th>
                      <th>Overdue Aging Timeline</th>
                      <th>Mandatory Capital Provision</th>
                      <th>Bank Settlement Haircut Potential</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Special Mention Account (SMA-1/2)</td>
                      <td>31 to 90 Days Overdue</td>
                      <td>5% General Reserve Allocation</td>
                      <td>Penal Interest &amp; Overdue Fee Waivers</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Substandard NPA</td>
                      <td>91 to 365 Days Overdue</td>
                      <td>25% Unsecured Provisioning</td>
                      <td>30% to 45% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful NPA Tier 1 (D1)</td>
                      <td>12 to 24 Months Default</td>
                      <td>100% Unsecured Capital Lockup</td>
                      <td>45% to 60% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful NPA Tier 2 / Written-Off</td>
                      <td>24+ Months / Technical Write-off</td>
                      <td>100% Total Balance Sheet Write-off</td>
                      <td>60% to 75% Principal Haircut</td>
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
                  Net Recovery Value = Expected Recovery - RBI Penalty Risks - Legal Costs - Capital Lockup
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Banks deduct potential RBI fines, legal fees, and locked capital reserves from expected collections. Continuing aggressive recovery against a legally protected borrower costs more than offering a settlement.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because pushing aggressive collection risks heavy RBI fines and public consumer court penalties, banks prefer to close the matter. The Principal Nodal Officer often directs the team to approve a structured One-Time Settlement (OTS) with deep waivers.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="pno-escalation-visual-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">5. Institutional Escalation Roadmap</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This visual chart outlines the 5 key stages of escalating harassment. It shows how cases move from gathering evidence to PNO intervention, collection freezing, and final settlement with a No Dues Certificate.
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
                Follow these five steps to file a successful complaint with the Principal Nodal Officer:
              </p>

              <div className="space-y-3 my-6">
                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm space-y-1.5">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">1</span>
                    <span>Create Your Initial Branch Paper Trail</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-7">
                    First, send a written complaint via email or through the bank portal. Save your Ticket Number or Service Request ID. This proves you tried Level-1 first.
                  </p>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm space-y-1.5">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">2</span>
                    <span>Find the Principal Nodal Officer Details</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-7">
                    Look up the PNO name and official email on the bank website or on the RBI grievance portal.
                  </p>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm space-y-1.5">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">3</span>
                    <span>Draft Your Formal Complaint</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-7">
                    Write down your loan details, your financial hardship, call logs, and dates of agent harassment. Cite RBI recovery guidelines.
                  </p>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm space-y-1.5">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">4</span>
                    <span>Send via Email and Registered Post</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-7">
                    Send the signed complaint by email to the PNO desk. Also send a copy by Speed Post with tracking for legal proof.
                  </p>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm space-y-1.5">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs font-black">5</span>
                    <span>Enforce the 48-Hour Recovery Freeze</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-7">
                    Once received, the PNO office logs the issue. Bank policy requires an immediate freeze on recovery agent calls while they investigate.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: The RBI Internal Ombudsman Mandatory Review Mechanism */}
            <section id="rbi-internal-ombudsman-mandatory-review" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. The RBI Internal Ombudsman (IO) Mandatory Review</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A key protection in Indian banking is the <strong>RBI Internal Ombudsman (IO)</strong>. The IO is an independent authority who checks customer disputes impartially. All large banks and NBFCs must have an active Internal Ombudsman desk.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The most important rule is the negative check mandate: <em>The bank’s Principal Nodal Officer cannot reject any customer complaint without the review and approval of the Internal Ombudsman.</em> If the PNO wants to reject your claim, the IO must examine the full file first.
              </p>

              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3 my-6">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>How the Internal Ombudsman Protects You</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <strong className="text-slate-900 block mb-1">Independent Call Audit</strong>
                    <span>The IO checks call server records to verify whether agents broke calling hour rules or used abusive words.</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <strong className="text-slate-900 block mb-1">Binding Orders</strong>
                    <span>If rules were broken, the IO can order the bank to issue an apology, pay compensation, and approve a settlement.</span>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Internal Ombudsman sends regular reports straight to the RBI. This gives banks strong motivation to resolve valid customer grievances quickly and fairly.
              </p>
            </section>

            {/* Section 8: Converting PNO Grievances into Structured Debt Settlement (50%–70% OTS) */}
            <section id="converting-pno-grievance-to-ots" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Strategic Debt Resolution</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Stopping harassment gives you relief, but solving the debt brings permanent peace. When you talk to branch staff alone, they often demand 100% payment plus heavy penalties.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                However, when your case is under review by the Principal Nodal Officer, the bank wants to avoid legal trouble. Experienced advocates use this moment to negotiate an affordable settlement:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <BadgePercent className="w-4 h-4 text-emerald-600" />
                    <span>100% Waiver on Penal Fees</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The bank waives all late charges, extra interest, and legal notice costs during settlement.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <DollarSign className="w-4 h-4 text-blue-600" />
                    <span>50% to 70% Principal Haircut</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The settlement committee agrees to a major discount on the principal loan amount.
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
                    The bank closes all cheque bounce notices and court matters as part of the agreement.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This approach turns an unpleasant collection situation into a clean and final exit from debt.
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
                      <th>Escalation Channel</th>
                      <th>Governing Statutory Framework</th>
                      <th>Average Resolution Speed</th>
                      <th>Collection Freeze Authority</th>
                      <th>Settlement Leverage Potential</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Branch Level Desk (Level-1)</td>
                      <td>Internal Bank Customer Service</td>
                      <td>15 to 30 Days (Often Ignored)</td>
                      <td>Zero (Frontline staff cannot stop agencies)</td>
                      <td>Extremely Low (Insists on 100% full recovery)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Principal Nodal Officer (Level-3)</td>
                      <td>RBI Integrated Ombudsman Scheme</td>
                      <td>48 Hours Freeze / 30 Days Final</td>
                      <td>Immediate (Direct executive order to central ops)</td>
                      <td>Extremely High (Enables 50%–70% OTS compromise)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">RBI Integrated Ombudsman</td>
                      <td>RBI CMS Scheme (Section 35A BRA 1949)</td>
                      <td>30 to 90 Days</td>
                      <td>High (Statutory regulatory intervention)</td>
                      <td>High (Compels bank compliance desk to resolve)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">District Consumer Court (DCDRC)</td>
                      <td>Section 35 Consumer Protection Act 2019</td>
                      <td>6 to 18 Months</td>
                      <td>Judicial (Interim injunction under Sec 38(8))</td>
                      <td>Maximum (Risk of ₹10L+ tort damages forces OTS)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Advocate-Led Strategic Resolution</td>
                      <td>Statutory Representation &amp; Legal Notice</td>
                      <td>15 to 45 Days</td>
                      <td>Maximum (Immediate legal shield across all desks)</td>
                      <td>Maximum (Fastest path to debt freedom &amp; NDC)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10 & Company Section */}
            <section id="settleloans-executive-representation" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. SettleLoans Executive Legal Representation</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Handling bank notices and dealing with recovery agents can feel overwhelming. At <strong>SettleLoans</strong>, our team of banking advocates and legal experts stands beside you. We handle all communications directly with senior bank officers.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                We draft formal representations to the Principal Nodal Officer, stop aggressive collection calls, and negotiate realistic 50% to 70% settlements with complete No Dues Certificates. We help you regain your peace of mind and live debt-free.
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
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Senior specialist in regulatory banking grievance escalation, RBI Integrated Ombudsman dispute resolution, and institutional debt compromise negotiations across India.
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
                Do not endure intimidation, abusive calls, or unauthorized visits. Retain seasoned advocates to file urgent PNO representations and freeze collections immediately.
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
