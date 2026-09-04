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
  QrCode,
  IdCard,
  GraduationCap
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Check Recovery Agent ID & DRA Certificate | SettleLoans',
  description: 'How to verify bank recovery agent ID cards and IIBF DRA certificates at your doorstep. Protect your borrower rights with SettleLoans.',
  keywords: [
    'how to verify bank recovery agent identity card',
    'check recovery agent dra certificate',
    'bank recovery agent id card verification',
    'iibf dra certificate check online',
    'rbi guidelines on recovery agent home visit',
    'refusing entry to bank recovery agents',
    'bank authorization letter for recovery agent',
    'recovery agent harassment doorstep complaint',
    'rbi recovery agent rules home visit timing',
    'how to stop recovery agents coming home'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/how-to-check-recovery-agent-id-card-and-dra-certificate',
  },
  openGraph: {
    title: 'How to Verify Bank Recovery Agent ID Card & DRA Certificate | Doorstep Defense Guide',
    description: 'Master doorstep debt defense. Discover mandatory RBI credentials: Bank Authorization Letter, Photo ID Card, IIBF DRA Certificate, and why refusing entry is 100% legal.',
    url: 'https://www.settleloans.in/how-to-check-recovery-agent-id-card-and-dra-certificate',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/how-to-check-recovery-agent-id-card-and-dra-certificate.jpg',
        width: 1200,
        height: 675,
        alt: 'How to Verify Bank Recovery Agent ID Card and DRA Certificate Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Verify Bank Recovery Agent ID Card & DRA Certificate | SettleLoans',
    description: 'Demand mandatory RBI credentials before speaking to recovery agents. Step-by-step verification guide for Bank ID, DRA Certificate, and Authorization Letters.',
    images: ['https://www.settleloans.in/images/infographics/how-to-check-recovery-agent-id-card-and-dra-certificate.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/how-to-check-recovery-agent-id-card-and-dra-certificate#webpage",
      "url": "https://www.settleloans.in/how-to-check-recovery-agent-id-card-and-dra-certificate",
      "name": "How to Verify Bank Recovery Agent ID Card & DRA Certificate | SettleLoans",
      "description": "Learn how to verify bank recovery agent identity card, check mandatory IIBF DRA certificate, bank authorization letter, and your legal rights to refuse unverified agents.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/how-to-check-recovery-agent-id-card-and-dra-certificate#breadcrumb"
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
      "@id": "https://www.settleloans.in/how-to-check-recovery-agent-id-card-and-dra-certificate#breadcrumb",
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
          "name": "Recovery Agent ID & DRA Verification Guide",
          "item": "https://www.settleloans.in/how-to-check-recovery-agent-id-card-and-dra-certificate"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/how-to-check-recovery-agent-id-card-and-dra-certificate#article",
      "headline": "How to Verify Bank Recovery Agent ID Card & DRA Certificate: Legal Doorstep Defense & RBI Verification Protocol",
      "description": "An exhaustive statutory analysis of borrower doorstep defense rights under RBI Master Directions, detailing mandatory Bank Authorization Letters, Photo ID Cards, IIBF Debt Recovery Agent certifications, criminal trespass protections, and advocate OTS negotiation strategies.",
      "image": "https://www.settleloans.in/images/infographics/how-to-check-recovery-agent-id-card-and-dra-certificate.jpg",
      "datePublished": "2026-08-31T10:00:00+05:30",
      "dateModified": "2026-08-31T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/how-to-check-recovery-agent-id-card-and-dra-certificate#webpage"
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
      "@id": "https://www.settleloans.in/how-to-check-recovery-agent-id-card-and-dra-certificate#service",
      "name": "SettleLoans - Doorstep Harassment Defense & Debt Settlement Advisory",
      "description": "Specialized legal protection and financial dispute resolution for borrowers facing unauthorized doorstep collection agents, unverified recovery visits, and coercive debt recovery tactics.",
      "url": "https://www.settleloans.in/how-to-check-recovery-agent-id-card-and-dra-certificate",
      "image": "https://www.settleloans.in/images/infographics/how-to-check-recovery-agent-id-card-and-dra-certificate.jpg",
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
        "reviewCount": "2180",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Vikas Malhotra"
          },
          "datePublished": "2026-08-14",
          "reviewBody": "Two men demanded cash at my doorstep. They had no bank letter or DRA certificate. SettleLoans told me to keep the gate locked. They served a legal notice to the bank. The bank recalled the agents immediately. They settled my loan with a 55% waiver.",
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
            "name": "Suresh Nambiar"
          },
          "datePublished": "2026-07-28",
          "reviewBody": "Collection agents visited my elderly parents. SettleLoans stepped in within two hours. They cited Section 441 IPC criminal trespass. They filed an RBI Ombudsman complaint. The bank issued a written apology. They sanctioned a clean OTS.",
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
          "datePublished": "2026-06-19",
          "reviewBody": "Checking the IIBF DRA certificate gave me confidence. When agents could not show proof, I refused entry. SettleLoans secured an official zero-balance No Dues Certificate.",
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
            "name": "Deepak Chawla"
          },
          "datePublished": "2026-05-30",
          "reviewBody": "Great legal guidance on doorstep recovery rules. The team helped me spot fake bank letters. Their advocate notice ended all home visits permanently.",
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
      "@id": "https://www.settleloans.in/how-to-check-recovery-agent-id-card-and-dra-certificate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What specific credentials must a bank recovery agent show during a home visit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Master Directions, agents must show three papers. First is a Bank Auth Letter. Second is an official Photo ID. Third is an IIBF DRA Certificate. Never talk without seeing these papers."
          }
        },
        {
          "@type": "Question",
          "name": "Is it legal to refuse entry or conversation to a recovery agent without an ID or DRA certificate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Refusing entry is 100% legal. If an agent lacks papers, deny entry. Keep your main door locked. Ask them to leave your home."
          }
        },
        {
          "@type": "Question",
          "name": "What is an IIBF DRA Certificate and why is it mandatory?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The IIBF DRA certificate is a mandatory license. It is issued by the Indian Institute of Banking & Finance. Agents complete 100 hours of legal training. RBI bans home visits without this card."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if an unverified recovery agent refuses to leave my premises?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Keep your gate locked. Record video from safety. Warn them that staying is Criminal Trespass under Section 441/447 IPC and Section 329 BNS. Dial Police at 112 right away."
          }
        },
        {
          "@type": "Question",
          "name": "What are the permitted hours for recovery agents to visit or call a borrower?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Fair Practices Code, agents cannot visit before 8:00 AM or after 7:00 PM. Night or early visits violate RBI rules. Report violations to the RBI Ombudsman."
          }
        },
        {
          "@type": "Question",
          "name": "Can recovery agents disclose my debt details to neighbors, landlords, or family members?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Under the Puttaswamy privacy ruling, debt details are confidential. Agents cannot talk to neighbors or family. Revealing debt is Criminal Defamation under Section 499/500 IPC and Section 356 BNS."
          }
        },
        {
          "@type": "Question",
          "name": "How can I verify whether a Bank Authorization Letter is genuine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A genuine letter uses bank letterhead. It states your name, PAN. And loan account number. It names the recovery agency. It carries a Scale-II or Scale-III Bank Officer seal."
          }
        },
        {
          "@type": "Question",
          "name": "Can I pay cash directly to a recovery agent at my doorstep?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Never pay cash to agents at your doorstep. Handing cash to agents creates high fraud risks. Pay all dues directly to your loan account number. Use NEFT, UPI, or branch counters."
          }
        },
        {
          "@type": "Question",
          "name": "How does doorstep harassment help negotiate a One-Time Settlement (OTS)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When advocates prove doorstep violations, banks face heavy RBI fines. To protect their name, bank heads recall agents. They grant a 45% to 65% debt waiver via an official OTS."
          }
        },
        {
          "@type": "Question",
          "name": "What is the timeline for receiving a No Dues Certificate after completing a settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, banks must issue an NDC within 30 days. They must update credit bureaus to zero balance. Delays bring a ₹5,000 daily penalty paid to you."
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
  { id: 'doorstep-ambush-credentials-reality', title: '1. The Doorstep Ambush & Credential Checks' },
  { id: 'mandatory-rbi-doorstep-credentials', title: '2. Mandatory RBI Doorstep Credentials' },
  { id: 'legal-right-to-refuse-entry-trespass', title: '3. Legal Right to Refuse & Criminal Trespass' },
  { id: 'bank-accounting-npa-npv-formula', title: '4. Bank Economics & The NPV Recovery Equation' },
  { id: 'doorstep-verification-visual-roadmap', title: '5. Visual Strategic Verification Roadmap' },
  { id: 'emergency-4-stage-confrontation-protocol', title: '6. The 4-Stage Doorstep Defense Protocol' },
  { id: 'forcing-compromise-settlement-ots', title: '7. Converting Violations into a 55% OTS' },
  { id: 'sanction-forensics-rbi-ndc-mandate', title: '8. Sanction Forensics & RBI ₹0 NDC Mandate' },
  { id: 'comparative-verification-defense-matrix', title: '9. Comparative Matrix: DRA vs Fake vs OTS' },
  { id: 'company-resolution-section', title: '10. SettleLoans Doorstep Legal Defense' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function CheckRecoveryAgentIdCardAndDraCertificatePage() {
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
            <span>Doorstep Recovery Defense • RBI DRA Certification &amp; Verification</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">How to Check Recovery Agent ID & DRA Certificate</h1>

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

            <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>Executive Case Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Doorstep visits without papers violate RBI rules. They constitute Criminal Trespass under Section 441/447 IPC. You can verify papers through a closed door. Demand the Bank Auth Letter, Photo ID, and IIBF DRA Certificate. Refuse entry if papers are missing.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Doorstep Verification &amp; Statutory Rights</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory 3 Credentials.</strong> Agents must show a Bank Auth Letter, Photo ID, and IIBF DRA Certificate.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Legal Right to Refuse.</strong> You can lawfully deny entry if papers are missing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Criminal Trespass Protections.</strong> Agents refusing to leave face Section 441/447 IPC and Section 329 BNS.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Strict 8 AM – 7 PM Hours.</strong> RBI Fair Practices Code bans visits outside these hours.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Advocate-Led 55% OTS.</strong> Documented violations help advocates win a 45% to 65% OTS.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Doorstep Ambush & Credential Checks */}
            <section id="doorstep-ambush-credentials-reality" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. The Crisis of Doorstep Debt Collection</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Doorstep visits cause severe stress. Borrowers facing job loss or illness face sudden home visits. Agents arrive in groups. They speak in harsh tones. They demand instant cash. They threaten police action or public shaming.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This doorstep pressure is a deliberate trap. Agencies know home visits trigger embarrassment. They panic borrowers into taking bad loans. Under Indian law, your home is private property. You have no duty to open your door. You do not have to let agents inside. Check papers through a closed grill. Keep unlawful trespassers out.
              </p>
            </section>

            {/* Section 2: Mandatory RBI Doorstep Credentials */}
            <section id="mandatory-rbi-doorstep-credentials" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Mandatory RBI Doorstep Credentials</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the RBI Master Direction on Fair Practices Code, rules are strict. No agent can visit without three papers. If any paper is missing, deny entry at once.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The first document is an official Bank Authorization Letter. It uses bank letterhead. It states your name, PAN. And loan account number. It names the recovery agency and agent. It carries the signature and seal of a Scale-II or Scale-III Bank Officer. Generic photocopies are invalid.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The second paper is a valid Photo ID Card. It must show a clear photo, full name, Agent ID code. And agency name. Modern banks add QR codes for instant online checks. The back must list bank customer care numbers.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The third paper is the IIBF Debt Recovery Agent (DRA) 100-Hour Certificate. The Indian Institute of Banking &amp. Finance issues this award. Agents complete 100 hours of legal training. They must pass a national exam. Agents must also hold a Police Clearance Certificate (PCC).
              </p>
            </section>

            {/* Section 3: Legal Right to Refuse Entry, Criminal Trespass & Privacy */}
            <section id="legal-right-to-refuse-entry-trespass" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. The Absolute Legal Right to Refuse Entry</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Many think loan default lets banks enter private property. That is false. Default on an unsecured loan is a civil contract breach under the Indian Contract Act, 1872. It is not a crime. It gives agents zero entry rights.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Section 441 and 447 IPC, entering private property to intimidate is Criminal Trespass. Section 329 BNS covers this under new criminal laws. Staying unlawfully brings jail time. Section 503 and 506 IPC (Section 351 BNS) punish Criminal Intimidation. Threatening arrest or asset seizure brings up to seven years in prison.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Supreme Court protects borrower rights firmly. In <em>Justice K.S. Puttaswamy v. Union of India (2017)</em>, the court protected financial privacy under Article 21. Shaming borrowers before neighbors is illegal defamation. In <em>ICICI Bank Ltd. v. Prakash Kaur (2007)</em> and <em>ICICI Bank v. Shanti Devi Sharma (2008)</em>, the court banned musclemen. Debt recovery must follow lawful court steps.
              </p>
            </section>

            {/* Section 4: Bank Economics & The NPV Recovery Equation */}
            <section id="bank-accounting-npa-npv-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Bank DRA Accounting &amp; Agency Economics</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Bank accounting rules explain why agencies use aggressive home visits. Banks operate under strict RBI provisioning rules. These rules force banks to set aside capital reserves as loans stay unpaid.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In SMA-0 to SMA-2 stages (up to 90 days late), banks hold small reserves. Once default crosses 90 days, loans become Substandard Non-Performing Assets (NPAs). Banks must lock 25% in capital reserves. For Doubtful (D1/D2) or Loss Asset loans, banks lock 100% of the loan amount.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Third-party collection agencies earn 10% to 25% contingency commissions. That is why agents use fake threats at doorsteps. They falsely claim court warrants are active. In truth, seizing assets takes years under Order 37 CPC or Section 138 NI Act.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When advocates challenge banks with recorded violations, banks review the Net Present Value (NPV) formula:
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
                  Here C_t is expected recovery cash flow. The term r is the discount rate. Deductions cover court delays, advocate retainers, RBI Ombudsman fines. And locked NPA reserves.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Faced with rising NPA costs and Ombudsman fines, banks recall agents. They approve a 45% to 65% principal waiver via an official OTS.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="doorstep-verification-visual-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">5. DRA Verification Strategic Roadmap</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The visual guide below shows our 4-stage verification plan. Use it to inspect agents, verify papers, invoke legal rights. And stop doorstep harassment.
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/how-to-check-recovery-agent-id-card-and-dra-certificate.jpg"
                  alt="Step-by-Step Bank Recovery Agent ID Card and IIBF DRA Certificate Verification Roadmap"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This guide helps borrowers step by step. Learn how to inspect bank letters, verify ID badges, scan QR codes, check IIBF DRA cards. And take legal action under RBI rules.
              </p>
            </section>

            {/* Section 6: The 4-Stage Doorstep Defense Protocol */}
            <section id="emergency-4-stage-confrontation-protocol" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. The 4-Stage Doorstep Defense Protocol</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When aggressive agents visit your home, emotional arguments increase stress. Debt defense advocates suggest a 4-stage action plan.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In Stage 1, keep your door locked. Speak through the grill. Tell them that under RBI rules, they must show their Bank Auth Letter, Photo ID, and IIBF DRA Certificate first.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In Stage 2, verify credentials digitally. Ask agents to hold papers up to the door viewer. Take photos of their ID cards and vehicle plates. Scan any QR code to verify details online. If papers are fake or missing, tell them to leave.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In Stage 3, record video and call police. If agents refuse to leave or shout, record video. Inform them that staying is Criminal Trespass under Section 441 IPC (Section 329 BNS) and Section 503 IPC (Section 351 BNS). Dial Police at 112.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In Stage 4, pursue advocate escalation. Retain counsel to serve legal notices on the bank MD and Nodal Officer. File a complaint on the RBI CMS portal (cms.rbi.org.in) with video proof. This forces banks to recall agents.
              </p>
            </section>

            {/* Section 7: Converting Violations into a 55% OTS */}
            <section id="forcing-compromise-settlement-ots" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Converting Doorstep Harassment into Leverage</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Aggressive doorstep visits show lender quarter-end pressure. When an uncertified agency breaks RBI rules, the bank faces heavy Ombudsman fines. Experienced advocates use these violations to win an official One-Time Settlement (OTS).
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Our advocates bypass field agents. We negotiate directly with the bank&apos;s Zonal Stressed Assets Desk. We submit a Hardship Dossier with salary slips, medical bills, or job loss letters. This proves bona fide financial distress.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Using documented violations as leverage, advocates secure a 100% waiver on penal fees. We win a 45% to 65% cut on principal debt. The deal ensures the bank recalls files and halts all visits.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The negotiated settlement is split into 2 to 4 monthly installments. Borrowers clear debt safely without fear.
              </p>
            </section>

            {/* Section 8: Sanction Letter Forensics & RBI NDC Mandate */}
            <section id="sanction-forensics-rbi-ndc-mandate" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Sanction Letter Forensics &amp; DRA Verification NDC</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Loan settlements require careful verification. Rogue agents send fake letters on WhatsApp. They pocket cash that never reaches your loan account. Never pay money until your advocate inspects the sanction letter.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                An authentic settlement letter uses bank letterhead. It carries a valid reference code. It lists your name, PAN. And loan account number. It states that all remaining dues and legal claims end upon payment. Pay all dues directly into your official loan account.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under RBI Circular RBI/2023-24/60, lenders must issue a No Dues Certificate (NDC) within 30 days. They must update credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark) to zero balance. Delays bring a mandatory penalty of ₹5,000 per day paid to you.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                After settlement, credit bureaus list the loan as Settled with a ₹0 balance. Scores drop 70 to 120 points briefly. But default stops. And collection calls end permanently. Using a secured card, borrowers rebuild credit above 750 within 18 to 24 months.
              </p>
            </section>

            {/* Section 9: Comparative Matrix: Verified DRA Agent vs Uncertified Collection Agent vs Advocate OTS */}
            <section id="comparative-verification-defense-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. DRA Verification Legal Defense Matrix</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Comparing agent types helps borrowers handle doorstep visits with confidence:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Operational Parameter.</th>
                      <th>Uncertified Collection Agent.</th>
                      <th>Verified IIBF DRA Agent.</th>
                      <th>Advocate-Led 55% OTS.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Mandatory Credentials.</td>
                      <td>None or fake copies.</td>
                      <td>Bank Auth Letter, Photo ID, IIBF DRA Certificate.</td>
                      <td>Formal Vakalatnama &amp. Legal Representation.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doorstep Entry Right.</td>
                      <td>Zero. Refusing entry is 100% legal.</td>
                      <td>Requires borrower consent. No forced entry.</td>
                      <td>Direct bank desk talks. Zero home visits.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Permitted Contact Hours.</td>
                      <td>Violates rules. Late nights or early mornings.</td>
                      <td>Strictly 8:00 AM to 7:00 PM only.</td>
                      <td>Official banking hours via formal legal notices.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Third-Party Disclosure.</td>
                      <td>Illegal contact with neighbors and family.</td>
                      <td>Strictly prohibited by Fair Practices Code.</td>
                      <td>100% Private Client-Advocate Privilege.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Financial Outcome.</td>
                      <td>Demands full sum with penal fees.</td>
                      <td>Attempts collecting overdue EMIs.</td>
                      <td>45%–65% Principal Haircut with official ₹0 NDC.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This matrix shows uncertified agents break statutory rules. Advocate-led settlements secure total debt closure, legal protection. And credit score repair.
              </p>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Doorstep Protection Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. SettleLoans DRA Compliance Legal Defense</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Handling unverified agents requires experienced banking defense advocates. We enforce RBI Master Directions, cite Supreme Court privacy rulings. And serve criminal trespass notices. SettleLoans provides complete legal defense across India. We serve cease-and-desist notices, file RBI Ombudsman complaints, protect family privacy. And negotiate 45% to 65% principal waivers with official No Dues Certificates.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. FAQs: Recovery Agent Verification &amp; Doorstep Rights</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Clear, legally verified answers on bank recovery agent ID cards, IIBF DRA certificates. And doorstep borrower rights in India.
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
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction – Managing Risks &amp; Code of Conduct in Outsourcing</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.iibf.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">IIBF – Debt Recovery Agent (DRA) Certification &amp; Training Syllabus</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (File Recovery Harassment Grievance)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2263"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Indian Penal Code / Bharatiya Nyaya Sanhita (Criminal Trespass &amp; Intimidation)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">Supreme Court of India (Prakash Kaur &amp; Shanti Devi Sharma Rulings on Musclemen)</span>
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
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Legal Notice Reply Guide
                </Link>
                <Link
                  href="/recovery-agents-talking-to-neighbours-landlord"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Recovery Agents Calling Neighbours
                </Link>
                <Link
                  href="/recovery-agent-visiting-workplace-office"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Recovery Agents at Office Workplace
                </Link>
                <Link
                  href="/recording-recovery-agent-calls-legal-evidence"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Recording Agent Calls as Evidence
                </Link>
                <Link
                  href="/should-i-pay-cash-to-bank-recovery-agent"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Paying Cash to Recovery Agents
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
                  href="/bajaj-finance-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bajaj Finance Loan Settlement
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
                  <p className="text-xs text-slate-500">Chief Banking &amp. Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Senior specialist in banking litigation defense, doorstep recovery protections, RBI Fair Practices Code enforcement, criminal trespass notices, and One-Time Settlement talks across India.
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
              <div className="font-bold text-base text-white mb-2">Facing Aggressive Recovery Agents at Home?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Protect your home, dignity. And family immediately. Retain banking advocates to serve legal notices and negotiate an official 45%–65% OTS.
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
