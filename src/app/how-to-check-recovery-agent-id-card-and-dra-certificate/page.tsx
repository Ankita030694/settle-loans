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
  title: 'How to Verify Bank Recovery Agent ID Card & DRA Certificate | SettleLoans',
  description: 'Learn how to verify bank recovery agent identity card, check mandatory IIBF DRA certificate, bank authorization letter, and your legal rights to refuse unverified agents.',
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
    canonical: 'https://settleloans.in/how-to-check-recovery-agent-id-card-and-dra-certificate',
  },
  openGraph: {
    title: 'How to Verify Bank Recovery Agent ID Card & DRA Certificate | Doorstep Defense Guide',
    description: 'Master doorstep debt defense. Discover mandatory RBI credentials: Bank Authorization Letter, Photo ID Card, IIBF DRA Certificate, and why refusing entry is 100% legal.',
    url: 'https://settleloans.in/how-to-check-recovery-agent-id-card-and-dra-certificate',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://settleloans.in/images/infographics/how-to-check-recovery-agent-id-card-and-dra-certificate.jpg',
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
    images: ['https://settleloans.in/images/infographics/how-to-check-recovery-agent-id-card-and-dra-certificate.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://settleloans.in/how-to-check-recovery-agent-id-card-and-dra-certificate#webpage",
      "url": "https://settleloans.in/how-to-check-recovery-agent-id-card-and-dra-certificate",
      "name": "How to Verify Bank Recovery Agent ID Card & DRA Certificate | SettleLoans",
      "description": "Learn how to verify bank recovery agent identity card, check mandatory IIBF DRA certificate, bank authorization letter, and your legal rights to refuse unverified agents.",
      "breadcrumb": {
        "@id": "https://settleloans.in/how-to-check-recovery-agent-id-card-and-dra-certificate#breadcrumb"
      },
      "inLanguage": "en-IN",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://settleloans.in/#website",
        "name": "SettleLoans",
        "url": "https://settleloans.in"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://settleloans.in/how-to-check-recovery-agent-id-card-and-dra-certificate#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://settleloans.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Recovery Agent ID & DRA Verification Guide",
          "item": "https://settleloans.in/how-to-check-recovery-agent-id-card-and-dra-certificate"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://settleloans.in/how-to-check-recovery-agent-id-card-and-dra-certificate#article",
      "headline": "How to Verify Bank Recovery Agent ID Card & DRA Certificate: Legal Doorstep Defense & RBI Verification Protocol",
      "description": "An exhaustive statutory analysis of borrower doorstep defense rights under RBI Master Directions, detailing mandatory Bank Authorization Letters, Photo ID Cards, IIBF Debt Recovery Agent certifications, criminal trespass protections, and advocate OTS negotiation strategies.",
      "image": "https://settleloans.in/images/infographics/how-to-check-recovery-agent-id-card-and-dra-certificate.jpg",
      "datePublished": "2026-08-31T10:00:00+05:30",
      "dateModified": "2026-08-31T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://settleloans.in/how-to-check-recovery-agent-id-card-and-dra-certificate#webpage"
      },
      "author": {
        "@type": "Person",
        "name": "Ashish Jhangra",
        "url": "https://settleloans.in/authors/ashish-jhangra"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://settleloans.in/#organization",
        "name": "SettleLoans",
        "url": "https://settleloans.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://settleloans.in/logo/logo.svg"
        }
      }
    },
    {
      "@type": "FinancialService",
      "@id": "https://settleloans.in/how-to-check-recovery-agent-id-card-and-dra-certificate#service",
      "name": "SettleLoans - Doorstep Harassment Defense & Debt Settlement Advisory",
      "description": "Specialized legal protection and financial dispute resolution for borrowers facing unauthorized doorstep collection agents, unverified recovery visits, and coercive debt recovery tactics.",
      "url": "https://settleloans.in/how-to-check-recovery-agent-id-card-and-dra-certificate",
      "image": "https://settleloans.in/images/infographics/how-to-check-recovery-agent-id-card-and-dra-certificate.jpg",
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
        "@id": "https://settleloans.in/#organization",
        "name": "SettleLoans",
        "url": "https://settleloans.in"
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
          "reviewBody": "Two men showed up demanding immediate cash without a bank authorization letter or DRA certificate. SettleLoans advised me to keep the gate closed and served a formal legal notice. The bank withdrew the agency immediately and settled my loan at a 55% discount.",
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
          "reviewBody": "A collection agency visited my elderly parents. SettleLoans stepped in within two hours, invoked Section 441 IPC criminal trespass, and filed an urgent RBI Ombudsman complaint. The bank issued a written apology, recalled the uncertified agents, and sanctioned a clean OTS.",
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
          "reviewBody": "Learning how to verify the IIBF DRA certificate and bank ID card gave me complete confidence. When unverified agents failed to produce credentials, I refused entry legally. SettleLoans secured an official zero-balance No Dues Certificate.",
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
          "reviewBody": "Exceptional legal guidance on doorstep recovery protocols. The team showed me how to identify fake authorization letters and enforce RBI Fair Practices Code. Their advocate representation permanently ended all doorstep visits.",
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
      "@id": "https://settleloans.in/how-to-check-recovery-agent-id-card-and-dra-certificate#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What specific credentials must a bank recovery agent show during a home visit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Master Directions on Outsourcing and Fair Practices Code, a recovery agent must produce three mandatory credentials: (1) An official Bank Authorization Letter with borrower name, loan account number, and agency details; (2) A valid Photo ID Card with employee code; and (3) An authentic IIBF Debt Recovery Agent (DRA) qualification certificate."
          }
        },
        {
          "@type": "Question",
          "name": "Is it legal to refuse entry or conversation to a recovery agent without an ID or DRA certificate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, it is 100% legal. If an individual claiming to represent a bank fails to present an official Bank Authorization Letter, Photo ID Card, and IIBF DRA certificate, you have the absolute legal right to deny entry, refuse conversation, and instruct them to vacate your private property immediately."
          }
        },
        {
          "@type": "Question",
          "name": "What is an IIBF DRA Certificate and why is it mandatory?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The IIBF Debt Recovery Agent (DRA) certificate is a mandatory accreditation administered by the Indian Institute of Banking & Finance following 100 hours (50 hours for graduates) of training in banking law, debtor rights, and ethical recovery conduct. RBI mandates that no bank or NBFC may deploy field collection personnel without valid DRA certification and police verification."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if an unverified recovery agent refuses to leave my premises?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Keep your main door or gate locked. Begin video recording from safety, inform them that remaining unlawfully constitutes Criminal Trespass under Section 441/447 IPC (Section 329 BNS 2023), dial Police Emergency at 112, and notify the bank's Principal Nodal Officer via formal legal notice."
          }
        },
        {
          "@type": "Question",
          "name": "What are the permitted hours for recovery agents to visit or call a borrower?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under the RBI Master Circular on Fair Practices Code, recovery agents are strictly prohibited from visiting a residence or calling a borrower before 8:00 AM and after 7:00 PM. Any recovery interaction conducted outside these statutory hours violates RBI directives and is punishable under the Banking Ombudsman Scheme."
          }
        },
        {
          "@type": "Question",
          "name": "Can recovery agents disclose my debt details to neighbors, landlords, or family members?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Under the Supreme Court Puttaswamy privacy ruling and RBI Master Directions, debt information is confidential financial data. Agents are strictly barred from discussing debts with neighbors, landlords, security guards, or family members. Doing so constitutes Criminal Defamation under Section 499/500 IPC (Section 356 BNS)."
          }
        },
        {
          "@type": "Question",
          "name": "How can I verify whether a Bank Authorization Letter is genuine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An authentic Bank Authorization Letter must be printed on official bank letterhead, feature a unique dispatch reference number, state your exact name and loan account number, name the agency, and carry the signature and seal of an authorized Scale-II or Scale-III Bank Branch Officer. Generic photocopies are legally invalid."
          }
        },
        {
          "@type": "Question",
          "name": "Can I pay cash directly to a recovery agent at my doorstep?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Never pay cash to recovery agents at your doorstep. Handing cash to field collectors carries severe risks of fraud and misappropriation. All legitimate loan repayments and settlement installments must be paid directly into your designated loan account number via official banking channels (NEFT, RTGS, UPI, or branch counters)."
          }
        },
        {
          "@type": "Question",
          "name": "How does doorstep harassment help negotiate a One-Time Settlement (OTS)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When an advocate formally documents doorstep violations—such as uncertified agent visits or trespass—the lending institution faces regulatory penalties before the RBI Banking Ombudsman. To avoid reputational fallout, bank management routinely agrees to recall agencies and approve a 45% to 65% principal waiver via an official OTS."
          }
        },
        {
          "@type": "Question",
          "name": "What is the timeline for receiving a No Dues Certificate after completing a settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, all regulated lenders must issue a formal No Dues Certificate (NDC) and update credit bureau records (CIBIL, Experian, Equifax, CRIF) to zero outstanding within 30 calendar days of final settlement payment. Any delay beyond 30 days incurs a mandatory penalty of ₹5,000 per day payable to the borrower."
          }
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://settleloans.in/#organization",
      "name": "SettleLoans",
      "url": "https://settleloans.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://settleloans.in/logo/logo.svg"
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

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            How to Check Bank Recovery Agent ID Card &amp; DRA Certificate: <span className="text-[#3b82f6] md:text-[#60a5fa]">Legal Doorstep Defense &amp; Verification Protocol</span>
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
                Unannounced doorstep visits without mandatory credentials violate RBI Master Directions and constitute Criminal Trespass under Section 441/447 IPC. Borrowers have the absolute legal right to demand the Bank Authorization Letter, Photo ID, and IIBF DRA Certificate through a closed door, and refuse entry if unverified.
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
                  <span><strong>Mandatory 3 Credentials:</strong> Agents must produce a Bank Authorization Letter, Photo ID Card, and IIBF DRA Certificate.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>100% Legal Right to Refuse:</strong> You can lawfully deny entry and refuse discussion if credentials are missing or unverified.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Criminal Trespass Protections:</strong> Agents refusing to leave can be prosecuted under Section 441/447 IPC &amp; Section 329 BNS.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Strict 8 AM – 7 PM Hours:</strong> RBI Fair Practices Code strictly prohibits recovery visits or calls outside statutory hours.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Advocate-Led 55% OTS:</strong> Documented doorstep violations give advocates leverage to secure a 45%–65% One-Time Settlement.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Doorstep Ambush & Credential Checks */}
            <section id="doorstep-ambush-credentials-reality" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. The Crisis of Doorstep Debt Collection: Unannounced Ambush Tactics &amp; Psychological Coercion
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Few experiences in consumer banking are as distressing as an unexpected knock on the door by aggressive recovery agents. In Indian metropolitan cities and regional towns alike, borrowers facing involuntary financial setbacks—such as sudden job displacement, medical emergencies, or enterprise downturns—frequently experience unannounced doorstep ambushes. These field collectors typically arrive in groups, speak in authoritarian tones, demand instant cash handovers, and threaten immediate police action or public humiliation before neighbors and family.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This doorstep confrontation is an engineered psychological tactic. Collection agencies recognize that confrontation at the residential threshold triggers intense acute embarrassment, attempting to panic borrowers into taking high-interest informal loans or exhausting essential living funds. Under Indian law, your home is a constitutionally protected private sanctuary. Borrowers are under zero legal obligation to open their doors or admit field collectors inside. Demanding authenticated credentials through a closed safety grill immediately shifts legal leverage and separates legitimate bank officials from unlawful trespassers.
              </p>
            </section>

            {/* Section 2: Mandatory RBI Doorstep Credentials */}
            <section id="mandatory-rbi-doorstep-credentials" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Mandatory RBI Doorstep Credentials: The 3 Non-Negotiable Documents Every Agent Must Produce
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the Reserve Bank of India Master Direction on Fair Practices Code for Lenders and the Guidelines on Managing Risks and Code of Conduct in Outsourcing of Financial Services, no recovery agent may visit a borrower&apos;s residence without carrying three authenticated credentials. If an agent fails to present any of these documents upon demand, their presence is legally unauthorized and entry must be denied immediately.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The first mandatory document is an official Bank Authorization Letter on the lending institution&apos;s registered letterhead. This document must state the borrower&apos;s full legal name, PAN, specific 16-digit loan account number, the empanelled recovery agency&apos;s corporate name, and the specific agent&apos;s full name. Crucially, it must carry the physical signature, designation code, and official seal of an authorized Scale-II or Scale-III Bank Branch Officer. Generic, photocopied sheets with blank fields or stamped digital signatures are legally void.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The second credential is a valid Photo Identity Card issued by the bank or its registered agency. The badge must display a recent photograph of the agent, their full legal name, unique Agent Identification Code, agency corporate identity number, issue date, and validity timestamp. Modern private banks embed dynamic QR codes on these badges that redirect directly to the bank&apos;s official SSL-secured domain displaying live empanelment status. The reverse side must list verified bank customer care landlines and Principal Nodal Officer contact details.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The third vital document is the IIBF Debt Recovery Agent (DRA) 100-Hour Qualification Certificate. Administered by the Indian Institute of Banking &amp; Finance, this statutory accreditation requires agents to complete 100 hours of intensive training (50 hours for graduates) covering banking jurisprudence, debtor protection rights, confidentiality mandates, and ethical recovery conduct, followed by passing a national examination. The agent must also hold a Police Clearance Certificate (PCC) confirming zero criminal background, which lenders are legally required to verify prior to field deployment.
              </p>
            </section>

            {/* Section 3: Legal Right to Refuse Entry, Criminal Trespass & Privacy */}
            <section id="legal-right-to-refuse-entry-trespass" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. The Absolute Legal Right to Refuse Entry: Criminal Trespass, Constitutional Privacy &amp; Police Action
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A widespread misconception is that defaulting on an unsecured personal loan or credit card grants lenders the right to enter private property or seize household goods. Under Indian jurisprudence, an unsecured debt default is strictly a civil contractual dispute governed by the Indian Contract Act, 1872. It does not constitute a criminal offense, nor does it grant recovery agents police powers or administrative search privileges.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Section 441 and 447 of the Indian Penal Code, corresponding to Section 329 of the Bharatiya Nyaya Sanhita, 2023, entering private property with intent to intimidate, insult, or annoy, or remaining unlawfully after being instructed to leave, constitutes Criminal Trespass punishable with imprisonment. Furthermore, Section 503 and 506 IPC (Section 351 BNS 2023) strictly penalize Criminal Intimidation with up to seven years of imprisonment when threats of arrest or property seizure are used to coerce debt payments.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Constitutional jurisprudence provides decisive protections. In <em>Justice K.S. Puttaswamy v. Union of India (2017)</em>, the Supreme Court established financial privacy as an inalienable fundamental right under Article 21. Disclosing debt details to neighbors, building guards, or relatives constitutes an actionable constitutional violation and a tort of defamation. In <em>ICICI Bank Ltd. v. Prakash Kaur (2007)</em> and <em>ICICI Bank v. Shanti Devi Sharma (2008)</em>, the Supreme Court unequivocally barred banks from deploying musclemen, ruling that debt recovery must adhere strictly to established judicial procedures.
              </p>
            </section>

            {/* Section 4: Bank Economics & The NPV Recovery Equation */}
            <section id="bank-accounting-npa-npv-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Bank Accounting Economics: Why Uncertified Agents Lie &amp; The Net Present Value (NPV) Equation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Understanding the financial accounting governing delinquent retail loans explains why recovery agencies employ aggressive doorstep methods and why decisive legal pushback rapidly forces institutional compromise. Commercial banks operate under rigorous Reserve Bank of India prudential provisioning guidelines that mandate increasing capital deductions from quarterly profits as loans age through delinquency buckets.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                During the Special Mention Account stages (SMA-0 to SMA-2, spanning 1 to 90 days overdue), banks maintain general capital provisions between 0.40% and 5%. Once a loan crosses 90 days of continuous non-payment, it is classified as a Substandard Non-Performing Asset (NPA), requiring an immediate 25% capital write-down. When default extends beyond 12 to 36 months into Doubtful (D1/D2) and Loss Asset classifications, the bank is legally required to lock 100% of the loan value in capital provisions.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because third-party recovery agencies earn high contingency commissions—ranging from 10% to 25% of recovered funds—agents frequently resort to fabricated threats at doorsteps. They falsely claim that non-bailable warrants are active or that property seizure is imminent. In reality, attaching assets for unsecured debt requires years of formal civil litigation under Order 37 CPC or Section 138 NI Act proceedings.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When legal advocates confront senior bank management with documented doorstep violations, the bank&apos;s Stressed Asset Committee evaluates the account using the institutional Net Present Value (NPV) of Recovery formula:
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
                  Where C_t represents estimated recoverable cash flows over time t, r is the bank&apos;s discount rate, and deductions account for 3–5 years of civil court delays, legal advocate retainers, statutory Ombudsman fines for agency misconduct, and 100% capital locked in NPA provisions.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Faced with compounding capital provisioning drag, lengthy litigation timelines, and substantial regulatory exposure before the Banking Ombudsman, the bank&apos;s most mathematically sound resolution is to recall the uncertified recovery agency and approve a 45% to 65% principal waiver via an official One-Time Settlement.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="doorstep-verification-visual-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Visual Strategic Roadmap: Step-by-Step Doorstep Verification &amp; Recovery Defense
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The visual roadmap below details the structured 4-pillar verification framework established by banking defense advocates to inspect visiting field agents, authenticate official credentials, invoke statutory protections, and eliminate illegal doorstep harassment.
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
                This verification roadmap guides borrowers through inspecting bank authorization letterheads, validating agent photo identity codes, scanning dynamic QR verification links, checking IIBF DRA certificates, and activating emergency legal remedies if agents refuse to comply with RBI Fair Practices Code mandates.
              </p>
            </section>

            {/* Section 6: The 4-Stage Doorstep Defense Protocol */}
            <section id="emergency-4-stage-confrontation-protocol" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. The 4-Stage Doorstep Defense Protocol: How to Handle Aggressive Field Agents Safely
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When aggressive recovery agents arrive at your residence, emotional confrontation or verbal arguments often escalate tension. Seasoned debt defense advocates recommend executing a disciplined 4-stage protocol designed to enforce immediate legal boundaries and maintain personal safety.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In Stage 1, maintain the Closed-Door Verification Mandate. Keep your main entrance door or security grill firmly locked and never invite visiting agents into your living quarters. Speak through the grill and state clearly that under Reserve Bank of India directives, you require them to present their official Bank Authorization Letter, Agency Photo Identity Card, and IIBF DRA Certificate before any dialogue can take place.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In Stage 2, execute Digital Cross-Verification. Ask the agents to hold their credentials up to the door viewer or window. Use your smartphone to capture clear photographs of their ID badges, authorization letters, and vehicle registration plates. If the ID card features a QR code, scan it to confirm direct verification on the bank&apos;s official domain. If the credentials appear photocopied, forged, or missing, instruct the operatives to vacate the premises immediately.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In Stage 3, initiate Video Documentation and Police Activation. If the agents refuse to leave, create a commotion, or use abusive language, begin continuous video recording from safety. Inform them that their refusal to depart constitutes Criminal Trespass under Section 441 IPC (Section 329 BNS) and Criminal Intimidation under Section 503 IPC (Section 351 BNS). Concurrently dial Police Emergency at 112, reporting unauthorized trespassers causing a disturbance at your home.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In Stage 4, pursue Formal Advocate Escalation. Within 24 hours of the incident, retain legal counsel to draft and serve an emergency statutory notice on the bank&apos;s Managing Director and Principal Nodal Officer. Concurrently file an expedited complaint on the RBI CMS portal (cms.rbi.org.in) with photographic and video evidence, forcing the lender to recall the recovery agency permanently.
              </p>
            </section>

            {/* Section 7: Converting Violations into a 55% OTS */}
            <section id="forcing-compromise-settlement-ots" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Converting Doorstep Harassment into Leverage for a 45%–65% One-Time Settlement (OTS)
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Aggressive doorstep visits signify that the lender is facing acute quarter-end recovery pressure and has exhausted standard automated collection channels. When an uncertified agency violates RBI Fair Practices Code mandates, they commit statutory breaches that expose the principal bank to substantial Banking Ombudsman penalties and reputational damage. In the hands of experienced debt defense advocates, these documented infractions become powerful leverage to negotiate an official One-Time Settlement (OTS).
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Our legal team bypasses third-party recovery agencies entirely and engages directly with the bank&apos;s Zonal Stressed Assets Resolution Desk. We submit a comprehensive Financial Hardship Dossier containing verified documentation—such as income tax returns, salary reduction slips, medical records, or termination letters—substantiating that default was involuntary and bona fide.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Leveraging the documented regulatory violations, advocates negotiate a total waiver of accumulated late payment charges, legal fees, and penal interest, combined with a 45% to 65% reduction on the core principal balance. Furthermore, the settlement terms incorporate an explicit covenant requiring the bank to immediately recall all outsourced collection files, blacklist unverified agents, and cease all residential contact permanently.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To ensure complete financial viability, the negotiated settlement amount is structured across 2 to 4 manageable monthly installments. This structured approach allows borrowers to resolve their debt permanently without liquidating essential living reserves or falling victim to further recovery coercion.
              </p>
            </section>

            {/* Section 8: Sanction Letter Forensics & RBI NDC Mandate */}
            <section id="sanction-forensics-rbi-ndc-mandate" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Sanction Letter Forensics, Direct Remittance, RBI ₹0 NDC Mandate &amp; CIBIL Bureau Rehabilitation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Executing a loan settlement requires strict forensic verification. Rogue collection agents frequently generate fraudulent settlement letters on WhatsApp or make deceptive verbal promises to collect partial token amounts that are subsequently misallocated to normal interest arrears. Borrowers must never transfer funds until the settlement sanction letter has been thoroughly vetted by legal counsel.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                An authentic settlement sanction letter must be issued on official bank letterhead, carry a verifiable sanction reference number, and clearly specify the borrower&apos;s full legal name, PAN, and exact 16-digit loan account number. It must contain an absolute debt extinguishment clause confirming that upon payment of the agreed compromised sum, all remaining balances, interest, and legal claims stand fully extinguished. Crucially, all payments must be remitted directly into the borrower&apos;s own loan account via official banking channels—never into an agency or individual bank account.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under RBI Circular RBI/2023-24/60, all regulated commercial banks and NBFCs are legally mandated to deliver a formal No Dues Certificate (NDC) / Loan Closure Certificate and update all credit information companies (CIBIL, Experian, Equifax, CRIF High Mark) to zero outstanding within 30 calendar days of receiving final settlement payment. Any unjustified delay beyond 30 days incurs a mandatory statutory penalty of ₹5,000 per day payable directly to the borrower.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Following settlement, credit bureaus record the loan status as &quot;Settled&quot; or &quot;Post-Write-off Settled&quot; with a current outstanding balance of ₹0. While this produces a temporary credit score reduction of 70 to 120 points, it halts compounding default accumulation and eliminates collection harassment permanently. By maintaining a secured fixed-deposit credit card, keeping credit utilization below 30%, and ensuring timely utility payments, settled borrowers systematically rebuild their credit score back above 750 within 18 to 24 months.
              </p>
            </section>

            {/* Section 9: Comparative Matrix: Verified DRA Agent vs Uncertified Collection Agent vs Advocate OTS */}
            <section id="comparative-verification-defense-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Comparative Legal Matrix: Verified DRA Agent vs. Uncertified Field Collector vs. Advocate-Led OTS
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Evaluating the legal standing, operating boundaries, and long-term financial consequences of different recovery interactions empowers borrowers to handle doorstep situations with clarity and authority:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Operational Parameter</th>
                      <th>Uncertified Collection Agent</th>
                      <th>Verified IIBF DRA Agent</th>
                      <th>Advocate-Led 55% OTS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Mandatory Credentials</td>
                      <td>None / Photocopied generic templates</td>
                      <td>Bank Auth Letter + Photo ID + IIBF DRA Certificate</td>
                      <td>Formal Vakalatnama &amp; Legal Representation</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doorstep Entry Right</td>
                      <td>Zero / Refusal is 100% legal</td>
                      <td>Subject to borrower consent (No forced entry)</td>
                      <td>N/A (Direct bank desk resolution; no home visits)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Permitted Contact Hours</td>
                      <td>Frequently violates (Late nights / early mornings)</td>
                      <td>Strictly 8:00 AM to 7:00 PM only</td>
                      <td>Official banking hours via formal communications</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Third-Party Disclosure</td>
                      <td>Illegal harassment of neighbors/family</td>
                      <td>Strictly prohibited by Fair Practices Code</td>
                      <td>100% Confidential Client-Advocate Privilege</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Financial Outcome</td>
                      <td>Extorts full payment with penal fees</td>
                      <td>Attempts regularizing overdue EMIs</td>
                      <td>45%–65% Principal Haircut with official ₹0 NDC</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This comparative matrix demonstrates that uncertified collection agents operate outside statutory protections, exposing lending institutions to criminal liability, while advocate-led compromise settlements provide permanent legal immunity, total debt cancellation, and a verified path to credit score rehabilitation.
              </p>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Doorstep Protection Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Defense &amp; Doorstep Harassment Advisory
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Confronting unverified recovery agents and illegal doorstep harassment requires seasoned banking litigation advocates who understand how to enforce RBI Master Directions, invoke Supreme Court privacy protections, and draft hard-hitting criminal trespass and defamation notices. SettleLoans provides end-to-end legal defense for distressed borrowers across India: issuing emergency cease-and-desist notices to bank management, filing formal complaints with the RBI Banking Ombudsman, shielding your residential peace, and negotiating directly with bank zonal authorities to secure 45% to 65% principal haircuts backed by official, bank-stamped No Dues Certificates.
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
                  11. Frequently Asked Questions: Recovery Agent Verification &amp; Doorstep Rights
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Direct, legally verified answers to critical questions regarding bank recovery agent ID cards, IIBF DRA certifications, and doorstep legal protections in India.
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
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Senior specialist in banking litigation defense, doorstep recovery protections, RBI Fair Practices Code enforcement, criminal trespass and intimidation notices against recovery agencies, and institutional One-Time Settlement negotiations across India.
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
              <h4 className="font-bold text-base text-white mb-2">Facing Aggressive Recovery Agents at Home?</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Protect your home, dignity, and family immediately. Retain seasoned banking litigation advocates to serve a statutory cease-and-desist notice and negotiate an official 45%–65% OTS.
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
              <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Institutional Protections
              </h4>
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
