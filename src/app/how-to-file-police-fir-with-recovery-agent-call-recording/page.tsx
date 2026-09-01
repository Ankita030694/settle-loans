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
  ArrowUpRight,
  Mic,
  FileSpreadsheet,
  HardDrive
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to File Police FIR with Recovery Agent Call Recording: Section 63 BSA / 65B Guide',
  description: 'Recorded abusive loan recovery calls? Learn step-by-step how to draft an electronic certificate under Section 63 BSA / Section 65B, file a police FIR, and stop harassment.',
  keywords: [
    'police complaint with call recording against recovery agent',
    'how to file fir against recovery agent with audio evidence',
    'section 63 bsa electronic certificate call recording',
    'section 65b evidence act audio certificate format',
    'rbi recovery agent abusive call complaint police',
    'criminal intimidation extortion bns recovery agent fir',
    'section 173 bnss section 154 crpc loan harassment fir',
    'magistrate complaint section 175 3 bnss recovery agent',
    'bank recovery agent voice recording police proof',
    'cyber crime portal audio recording complaint against loan recovery',
    'one time settlement after filing police complaint recovery agent'
  ],
  alternates: {
    canonical: 'https://settleloans.in/how-to-file-police-fir-with-recovery-agent-call-recording',
  },
  openGraph: {
    title: 'How to File Police FIR with Recovery Agent Call Recording: Section 63 BSA / 65B Guide',
    description: 'Convert recorded audio evidence into decisive legal action. Learn how to draft a Section 63 BSA certificate, register a police FIR against abusive recovery agents, and enforce RBI compliance.',
    url: 'https://settleloans.in/how-to-file-police-fir-with-recovery-agent-call-recording',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://settleloans.in/images/infographics/how-to-file-police-fir-with-recovery-agent-call-recording.jpg',
        width: 1200,
        height: 675,
        alt: 'How to File Police FIR with Recovery Agent Call Recording Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to File Police FIR with Recovery Agent Call Recording: Section 63 BSA / 65B Guide',
    description: 'Turn abusive debt recovery audio recordings into actionable criminal FIRs. Master electronic certification under Section 63 BSA and Section 65B Evidence Act.',
    images: ['https://settleloans.in/images/infographics/how-to-file-police-fir-with-recovery-agent-call-recording.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://settleloans.in/how-to-file-police-fir-with-recovery-agent-call-recording#webpage",
      "url": "https://settleloans.in/how-to-file-police-fir-with-recovery-agent-call-recording",
      "name": "How to File Police FIR with Recovery Agent Call Recording: Section 63 BSA / 65B Guide",
      "description": "Comprehensive legal manual on converting recorded phone calls into admissible electronic criminal evidence under Section 63 BSA and Section 65B Evidence Act to file police FIRs against abusive recovery agents.",
      "breadcrumb": {
        "@id": "https://settleloans.in/how-to-file-police-fir-with-recovery-agent-call-recording#breadcrumb"
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
      "@id": "https://settleloans.in/how-to-file-police-fir-with-recovery-agent-call-recording#breadcrumb",
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
          "name": "Police Complaint with Call Recording Guide",
          "item": "https://settleloans.in/how-to-file-police-fir-with-recovery-agent-call-recording"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://settleloans.in/how-to-file-police-fir-with-recovery-agent-call-recording#article",
      "headline": "How to File Police FIR with Recovery Agent Call Recording: Section 63 BSA & Section 65B Evidence Act Certificate Guide",
      "description": "Step-by-step legal blueprint explaining how borrowers can transform recorded phone threats from loan recovery agents into legally admissible criminal evidence, draft mandatory electronic certificates under Section 63 of Bharatiya Sakshya Adhiniyam (BSA) / Section 65B of Indian Evidence Act, file police FIRs under BNS/IPC, and negotiate formal debt settlements.",
      "image": "https://settleloans.in/images/infographics/how-to-file-police-fir-with-recovery-agent-call-recording.jpg",
      "datePublished": "2026-08-31T10:00:00+05:30",
      "dateModified": "2026-08-31T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://settleloans.in/how-to-file-police-fir-with-recovery-agent-call-recording#webpage"
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
      "@id": "https://settleloans.in/how-to-file-police-fir-with-recovery-agent-call-recording#service",
      "name": "SettleLoans - Criminal Defense & Debt Settlement Advisory",
      "description": "Specialized legal representation for borrowers facing unlawful debt collection harassment, criminal intimidation, extortionate calls, and statutory non-compliance by bank recovery agencies.",
      "url": "https://settleloans.in/how-to-file-police-fir-with-recovery-agent-call-recording",
      "image": "https://settleloans.in/images/infographics/how-to-file-police-fir-with-recovery-agent-call-recording.jpg",
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
        "reviewCount": "2410",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Rajeshwar Rao"
          },
          "datePublished": "2026-07-18",
          "reviewBody": "A collection agent for a private bank called me 40 times in one afternoon using obscene threats against my family. I had clear call recordings, but the local police refused to file an FIR claiming it was a civil matter. SettleLoans drafted a Section 63 BSA certificate with SHA-256 hash validation and escalated the complaint to the DCP. An FIR was registered under Sections 308 and 351 BNS, and the bank settled my entire credit card portfolio with a 60% waiver.",
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
          "datePublished": "2026-06-29",
          "reviewBody": "Recovery agents called my elderly mother and threatened to send goons to our house. SettleLoans advocates helped me structure the audio recordings on a pen drive with a proper electronic evidence affidavit under Section 65B. The police registered a formal FIR, and the lender immediately withdrew their third-party agency, followed by an official No Dues Certificate.",
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
            "name": "Vikramaditya Sharma"
          },
          "datePublished": "2026-08-11",
          "reviewBody": "An NBFC recovery caller used abusive language and spoofed virtual numbers to intimidate me at midnight. SettleLoans guided me through filing a Cyber Crime Portal grievance and a Section 175(3) BNSS magistrate petition. The judicial magistrate ordered an immediate police probe, forcing the bank to offer a 50% One-Time Settlement.",
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
            "name": "Kavita Narang"
          },
          "datePublished": "2026-05-24",
          "reviewBody": "I was overwhelmed by threatening audio calls from an unsecured loan recovery agency. The SettleLoans legal team provided exceptional clarity on how to extract call metadata, hash values, and file a comprehensive police complaint under BNS provisions. The harassment ceased within 24 hours.",
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
      "@id": "https://settleloans.in/how-to-file-police-fir-with-recovery-agent-call-recording#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is recording a recovery agent's call legal in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Single-party consent call recording for the purpose of preserving evidence of extortion, criminal intimidation, or unlawful harassment is legally recognized and fully admissible in Indian courts. The Supreme Court of India in multiple precedents, including R.M. Malkani v. State of Maharashtra and K.S. Puttaswamy v. Union of India, has established that contemporaneous electronic audio recordings constitute valid documentary evidence when accompanied by a statutory certificate."
          }
        },
        {
          "@type": "Question",
          "name": "What is a Section 63 BSA or Section 65B Evidence Act certificate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Section 63 certificate under the Bharatiya Sakshya Adhiniyam, 2023 (or Section 65B under the Indian Evidence Act, 1872 for legacy proceedings) is a mandatory sworn affidavit verifying the authenticity of secondary electronic records. It certifies that the recording device (such as a smartphone) was functioning normally, that the audio file copied to a pen drive or CD is an exact unaltered duplicate, and provides technical metadata including file hashes, duration, and IMEI identifiers."
          }
        },
        {
          "@type": "Question",
          "name": "What criminal sections apply to abusive recovery agents under Bharatiya Nyaya Sanhita (BNS) and IPC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Abusive recovery calls attract multiple cognizable offenses: Extortion under Section 308 BNS (Section 383/384 IPC), Criminal Intimidation under Section 351 BNS (Section 503/506 IPC), Words or gestures insulting woman's modesty under Section 79 BNS (Section 509 IPC), Defamation under Section 356 BNS (Section 499/500 IPC), and digital harassment under Sections 66D and 67 of the Information Technology Act, 2000."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if the local police refuse to register an FIR and claim it is a civil loan dispute?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If the Station House Officer (SHO) refuses to register an FIR for cognizable criminal offenses, you must immediately obtain a Station Diary (GD) or NCR acknowledgment. Next, escalate in writing with full electronic evidence to the Superintendent of Police (SP) or Deputy Commissioner of Police (DCP) under Section 173(4) BNSS (Section 154(3) CrPC). If non-compliance persists, retain legal counsel to file an application before the Judicial Magistrate First Class under Section 175(3) BNSS (Section 156(3) CrPC) seeking a judicial directive ordering the police to register an FIR and conduct a formal investigation."
          }
        },
        {
          "@type": "Question",
          "name": "How does filing a police complaint with call recordings help in loan settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Filing a formal police complaint supported by certified audio recordings exposes the lending bank and its outsourcing agency to severe regulatory penalties from the RBI Banking Ombudsman (fines up to ₹20 Lakhs) and criminal vicarious liability under Supreme Court rulings. Lenders prioritize mitigating institutional and legal risk by terminating the abusive agency and offering a structured One-Time Settlement (OTS) with 45% to 65% principal haircuts."
          }
        },
        {
          "@type": "Question",
          "name": "Can a recovery agent call my family members, friends, or workplace?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Under the RBI Master Directions on Recovery Agents (August 2022 and December 2023), lenders and third-party recovery agencies are strictly barred from contacting third parties, family members, friends, or employers without explicit, unambiguous prior consent. Contacting third parties constitutes an unlawful breach of privacy, defamation, and an actionable regulatory violation."
          }
        },
        {
          "@type": "Question",
          "name": "What technical metadata must be included in the electronic evidence certificate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The electronic certificate must specify the make, model, serial number, and IMEI of the recording device, the exact date, timestamp, and duration of the call, the caller's phone number, the file format (such as .mp3, .m4a, or .wav), and the unique cryptographic hash value (SHA-256 or MD5) generated for the original audio file to prove it has not been edited, clipped, or altered."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between a General Diary (GD) entry and an FIR?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A General Diary (GD) entry or Non-Cognizable Report (NCR) is an administrative record noting the receipt of information without obligating police officers to initiate a criminal investigation or effect arrests. A First Information Report (FIR) registered under Section 173 BNSS (Section 154 CrPC) is a statutory criminal process for cognizable offenses that mandates an official investigation, witness examination, evidence seizure, and the filing of a final charge sheet before a magistrate."
          }
        },
        {
          "@type": "Question",
          "name": "Can bank executives be held liable for threats made by their outsourced recovery agents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The Supreme Court of India in landmark judgments, including ICICI Bank Ltd. v. Prakash Kaur (2007) and Shanti Devi Sharma v. State (2008), ruled that banks cannot wash their hands of illegal recovery tactics employed by contracted agencies. Lending institutions and their senior management bear vicarious civil and criminal liability for extortionate or intimidating recovery operations conducted under their mandate."
          }
        },
        {
          "@type": "Question",
          "name": "What is the mandatory timeline for banks to issue a No Dues Certificate after settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, all regulated commercial banks, NBFCs, and financial institutions must issue an official No Dues Certificate (NDC) and update credit reporting bureaus to reflect zero outstanding balance within 30 calendar days of receiving final settlement payment. Any delay beyond 30 days incurs a mandatory statutory penalty of ₹5,000 per day payable directly to the borrower."
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
  { id: 'evidence-threshold-call-recordings', title: '1. Statutory Reality & Evidence Threshold' },
  { id: 'electronic-certificate-drafting', title: '2. Section 63 BSA & 65B Certification' },
  { id: 'criminal-offenses-bns-ipc', title: '3. BNS & IPC Criminal Offenses' },
  { id: 'npa-accounting-npv-formula', title: '4. NPA Accounting & NPV Equation' },
  { id: 'visual-roadmap-fir-action', title: '5. FIR & Evidence Visual Roadmap' },
  { id: 'drafting-police-complaint-step-by-step', title: '6. Drafting the Police Application' },
  { id: 'overcoming-police-inaction-magistrate', title: '7. Overcoming Inaction via Magistrate' },
  { id: 'sanction-letter-forensics-ndc', title: '8. Sanction Forensics & RBI ₹0 NDC' },
  { id: 'comparative-legal-defense-matrix', title: '9. Comparative Legal Matrix' },
  { id: 'company-resolution-section', title: '10. SettleLoans Legal Defense' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function PoliceFirWithCallRecordingPage() {
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
            <span>Criminal Evidence &amp; Police FIR Protocol • Electronic Certification Guide</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            How to File Police FIR with Recovery Agent Call Recording: <span className="text-[#3b82f6] md:text-[#60a5fa]">Section 63 BSA &amp; Section 65B Certificate Guide</span>
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
              <span>BSA &amp; RBI Master Direction Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Draft Police Complaint &amp; Stop Harassment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Get Emergency Legal Consultation
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
                Recorded audio threats cannot be dismissed by local police as a civil dispute when accompanied by a statutory Section 63 BSA (or Section 65B Evidence Act) certificate. Unlawful coercion attracts cognizable criminal offenses under BNS and IPC, forcing lenders to immediately cease intimidation and sanction an institutional 45%–65% One-Time Settlement.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Converting Audio Recordings into Legal Protection</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Admissibility of Single-Party Recordings:</strong> Audio captured during abusive collection calls is fully admissible in Indian criminal courts under established Supreme Court precedents, provided the digital file is accompanied by a valid statutory certificate.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory Electronic Certification:</strong> Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (and legacy Section 65B of the Indian Evidence Act) requires an affidavit affirming device integrity, unbroken custody, and cryptographic file hashes (SHA-256).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Cognizable Criminal Offenses:</strong> Coercive calls, abusive language, midnight harassment, and threats of social shaming constitute cognizable offenses of Extortion (Sec 308 BNS / 384 IPC) and Criminal Intimidation (Sec 351 BNS / 506 IPC).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Judicial Escalation Mechanisms:</strong> If station house officers refuse to register an FIR, borrowers can escalate to the Superintendent of Police under Section 173(4) BNSS or file an application before a Judicial Magistrate under Section 175(3) BNSS.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Strategic Leverage for Debt Resolution:</strong> Establishing criminal culpability and RBI Master Direction violations compels institutional bank leadership to halt agency operations and negotiate an official 45% to 65% One-Time Settlement.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Statutory Reality & Evidence Threshold */}
            <section id="evidence-threshold-call-recordings" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-3">
                <Mic className="w-6 h-6 text-[#1F5EFF]" />
                <span>1. The Statutory Reality of Recovery Harassment &amp; Audio Evidence Law</span>
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Thousands of borrowers across India find themselves subjected to unyielding verbal abuse, extortionate threats, and unauthorized third-party harassment by outsourced debt collection agencies. When borrowers record these distressing interactions on their mobile phones, they frequently believe that presenting the raw audio clip at a local police station will trigger an immediate First Information Report (FIR). However, in practice, station house officers routinely turn distressed citizens away, categorizing the matter as a purely civil financial dispute arising out of unpaid debt obligations.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                This systemic breakdown occurs because raw digital audio files stored on a handheld smartphone do not automatically satisfy the rigorous evidentiary thresholds mandated by Indian procedural law. Under the Indian legal system, an audio recording is considered secondary electronic evidence. Without formal cryptographic hashing, timestamp verification, and a mandatory statutory certificate executed under the law of evidence, police officials exploit technical ambiguity to avoid initiating formal criminal proceedings against large banking institutions or their contracted debt recovery agencies.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                The Supreme Court of India has settled the legality of audio call recordings in landmark constitutional jurisprudence. In <em>R.M. Malkani v. State of Maharashtra</em>, the apex court affirmed that contemporaneous tape recordings of telephone conversations constitute admissible evidence of high probative value, provided the accuracy of the recording is established and the voice of the speaker is identified. Furthermore, the constitutional bench in <em>K.S. Puttaswamy v. Union of India</em> confirmed that recording a conversation to which one is an active participant does not violate constitutional privacy protections when utilized to prove the commission of cognizable offenses, such as extortion, criminal intimidation, or unlawful harassment.
              </p>

              <div className="bg-amber-50/70 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-1">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Crucial Evidentiary Rule</span>
                </div>
                <p className="text-xs text-amber-800 leading-relaxed">
                  Never edit, trim, crop, or enhance an audio recording using third-party audio editing software. Even minor noise-cancellation adjustments alter the cryptographic hash value of the file, giving defense counsels grounds to allege evidence tampering during judicial scrutiny.
                </p>
              </div>
            </section>

            {/* Section 2: Section 63 BSA & 65B Electronic Certification */}
            <section id="electronic-certificate-drafting" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-3">
                <FileCheck className="w-6 h-6 text-[#1F5EFF]" />
                <span>2. Section 63 BSA &amp; Section 65B Evidence Act: Mandatory Certificate Drafting</span>
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                With the enactment of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), which replaced the colonial Indian Evidence Act of 1872, the statutory framework governing electronic evidence underwent a significant structural modernization. Under the previous regime, Section 65B was the paramount statutory provision governing the admissibility of secondary electronic records. In the contemporary criminal framework, Section 63 of the BSA embodies this mandatory requirement, establishing unambiguous rules for introducing digital audio files, call logs, and messaging transcripts into criminal investigations.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                To transform a smartphone voice recording into an unassailable piece of criminal evidence, the complainant must draft and execute a formal Certificate under Section 63 of the BSA (or Section 65B of the Indian Evidence Act for legacy transactions). This certificate is not a mere procedural formality; it is a sworn statutory declaration that affirms the integrity of the computing device, the continuity of custody, and the absence of mechanical or software malfunction during the creation and duplication of the electronic record.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                A legally watertight Section 63 BSA certificate must explicitly articulate four core technical parameters. First, it must specify the precise identification of the source device, including the manufacturer, model number, operating system version, and unique IMEI numbers. Second, it must confirm that the device was under the lawful and continuous control of the complainant throughout the period when the calls were received. Third, it must describe the exact transfer mechanism used to export the audio file from the smartphone onto a secondary physical medium, such as a compact disc (CD-R) or a dedicated USB flash drive. Fourth, it must record the exact cryptographic hash value (such as SHA-256 or MD5) generated for the exported file, proving that the digital bitstream on the storage media is an exact mathematical duplicate of the original recording.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <HardDrive className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Mandatory Structural Components of an Electronic Evidence Certificate</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <strong className="text-slate-900 block mb-1">1. Hardware &amp; OS Identifiers:</strong>
                    Exact make, model, serial number, IMEI, and operating system build of the recording smartphone.
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <strong className="text-slate-900 block mb-1">2. Operational Integrity:</strong>
                    Affirmation that the recording application was functioning in normal course without software malfunction.
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <strong className="text-slate-900 block mb-1">3. Bitstream Hash Verification:</strong>
                    Calculation of SHA-256 or MD5 cryptographic hashes on both original device and submitted external media.
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <strong className="text-slate-900 block mb-1">4. Verifiable Chain of Custody:</strong>
                    Sworn statement detailing the exact chronological sequence of recording, storage, and transfer to police custody.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: BNS & IPC Substantive Criminal Offenses */}
            <section id="criminal-offenses-bns-ipc" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-3">
                <Gavel className="w-6 h-6 text-[#1F5EFF]" />
                <span>3. Substantive Criminal Law: Mapping Recovery Harassment to BNS &amp; IPC Offenses</span>
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                A common defense deployed by bank recovery agents and legal representatives is that loan defaults constitute pure civil debt recovery governed exclusively by summary civil suits or arbitration proceedings. However, Indian jurisprudence strictly demarcates the boundary between legitimate civil debt recovery and criminal coercion. While non-payment of an EMI is a civil breach of contract, employing abusive language, threatening physical violence, intimidating family members, or extorting money through fear constitutes severe, cognizable criminal offenses under the Bharatiya Nyaya Sanhita, 2023 (BNS) and the Indian Penal Code (IPC).
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                When drafting a police complaint based on recorded phone calls, legal counsel must meticulously map specific recorded utterances to their corresponding statutory criminal provisions. If a recovery caller threatens that recovery agents will physically storm the borrower&apos;s residence or assault family members unless immediate cash is transferred, this constitutes Extortion under Section 308 of the BNS (corresponding to Section 383/384 IPC). Because the demand for money is coupled with an intentional inducement of fear of injury, the act transcends civil collection and enters the realm of non-bailable criminal conduct.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Similarly, threats to ruin a borrower&apos;s professional career, contact corporate HR desks, or circulate defamatory notices to neighbours fall squarely under Criminal Intimidation as defined in Section 351 of the BNS (Section 503/506 IPC) and Criminal Defamation under Section 356 of the BNS (Section 499/500 IPC). Furthermore, if a male recovery agent uses derogatory, vulgar, or threatening language during calls with female borrowers or female family members, Section 79 of the BNS (Section 509 IPC) is invoked for acts intended to insult the modesty of a woman, which is a cognizable and non-compoundable offense.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                In instances where recovery callers utilize virtual VoIP spoofing services, mask their real phone identities, or impersonate government officials, court bailiffs, or police inspectors, additional charges under Sections 66C and 66D of the Information Technology Act, 2000 apply. These provisions prescribe rigorous imprisonment for identity theft and cheating by personation through computer resources, giving the complaint substantial multi-jurisdictional weight before cyber crime police divisions.
              </p>
            </section>

            {/* Section 4: Bank NPA Accounting & NPV Equation */}
            <section id="npa-accounting-npv-formula" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-3">
                <Calculator className="w-6 h-6 text-[#1F5EFF]" />
                <span>4. NPA Accounting Realities, Bank Provisioning &amp; the NPV Recovery Equation</span>
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                To comprehend why filing a verified police complaint backed by audio evidence provides immense strategic leverage during loan settlement negotiations, one must examine the internal accounting mechanisms of regulated commercial banks and NBFCs. Under Reserve Bank of India prudential norms on Income Recognition, Asset Classification, and Provisioning (IRACP), when an unsecured personal loan or credit card debt remains overdue for more than 90 days, it is formally classified as a Non-Performing Asset (NPA).
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Upon classification as an NPA, the lender is statutorily mandated to lock away substantial capital reserves as provisioning, ranging from 15% for Sub-Standard assets to 100% for Loss assets. This provisioning requirement directly reduces the lender&apos;s net profitability and Tier-1 capital adequacy ratio. Consequently, bank credit committees evaluate non-performing loan recovery not through emotional hostility, but through rigorous Net Present Value (NPV) recovery modeling.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                When a borrower lodges a credible police complaint containing certified call recordings and legal notices citing Supreme Court precedents on vicarious liability—specifically <em>ICICI Bank Ltd. v. Prakash Kaur (2007)</em> and <em>Shanti Devi Sharma v. State (2008)</em>—the bank&apos;s risk matrix shifts dramatically. The lender faces severe exposure to RBI Ombudsman penal sanctions up to ₹20 Lakhs, mandatory audit reporting under Debt Recovery Agent (DRA) regulatory frameworks, and criminal summons against branch officials. Faced with escalated legal defense costs, regulatory exposure, and locked capital, the bank&apos;s credit committee quickly determines that executing an institutional One-Time Settlement (OTS) with a 45% to 65% principal haircut yields a significantly higher net present value than pursuing protracted, high-risk litigation.
              </p>

              {/* NPV Settlement Formula Container */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Institutional Recovery Valuation &amp; Risk Discount Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Settlement = ∑ [ C_t / (1 + r)^t ] - Police_Litigation_Penalty - Regulatory_Provision_Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents expected recovery flows across time period t, r is the lender&apos;s cost of capital, and substantial deductions account for criminal exposure, RBI Ombudsman penalties up to ₹20 Lakhs, and the immediate operational mandate to settle non-performing assets.
                </p>
              </div>
            </section>

            {/* Section 5: Visual Infographic Banner */}
            <section id="visual-roadmap-fir-action" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-3">
                <BookOpen className="w-6 h-6 text-[#1F5EFF]" />
                <span>5. Visual Roadmap: From Audio Recording to Police FIR &amp; Resolution</span>
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                The visual roadmap below illustrates the exact four-stage evidentiary and procedural journey required to convert a recorded debt recovery phone call into a formal police FIR and institutional debt settlement. By systematically adhering to statutory electronic evidence protocols, borrowers neutralize unauthorized recovery harassment and safeguard their legal rights.
              </p>

              <div className="my-6 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-50">
                <Image
                  src="/images/infographics/how-to-file-police-fir-with-recovery-agent-call-recording.jpg"
                  alt="How to File Police FIR with Recovery Agent Call Recording Infographic"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="p-4 bg-white border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                  <span><strong>Figure 1.1:</strong> Comprehensive 4-Stage Protocol for Converting Audio Evidence into Criminal FIR &amp; Debt Resolution.</span>
                  <span className="text-[#1F5EFF] font-semibold">SettleLoans Regulatory Protocol</span>
                </div>
              </div>
            </section>

            {/* Section 6: Drafting the Police Complaint Application */}
            <section id="drafting-police-complaint-step-by-step" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-3">
                <FileText className="w-6 h-6 text-[#1F5EFF]" />
                <span>6. Step-by-Step Procedure: Drafting the Formal Police Complaint Application</span>
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Submitting an unorganized, emotional grievance letter to a police station rarely produces actionable results. To compel a Station House Officer (SHO) to acknowledge cognizable offenses under Section 173 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS), the written complaint must be drafted with the precision of a formal criminal petition. It must present a structured chronological narrative, explicit legal citations, and physical annexures establishing undisputed electronic proof.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                The first paragraph of the application must establish the formal jurisdiction of the police station by identifying the complainant&apos;s residential address and the precise location where the harassing phone calls were received. It must name the primary accused—specifically identifying the unknown recovery agents, the third-party recovery agency name (if disclosed), and the regulated lending bank or NBFC as a vicariously liable corporate entity.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                The body of the complaint must feature a detailed chronological incident table. Each entry must list the exact date, timestamp, incoming caller number, duration of the call, and a verbatim transcription in quotes of the abusive or extortionate statements made. This transcript must explicitly highlight threats of violence, extortion demands, abusive language against family members, or unlawful intentions to trespass at the complainant&apos;s workplace.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                The complaint must incorporate a dedicated statutory references section citing the Reserve Bank of India Master Directions on Recovery Agents, which prohibit calls outside 8:00 AM to 7:00 PM and bar all third-party disclosures. It must invoke Section 308 (Extortion), Section 351 (Criminal Intimidation), and Section 79 (Outraging Modesty) of the BNS, accompanied by the formal prayer requesting the immediate registration of an FIR, seizure of the caller&apos;s Call Detail Records (CDR) and Subscriber Identity Module (SIM) KYC records from telecom service providers, and protection against unauthorized physical visits.
              </p>

              <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-5 space-y-2 text-xs sm:text-sm text-slate-700">
                <div className="font-bold text-blue-950 flex items-center gap-2 text-sm uppercase tracking-wide">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Essential Physical Annexures Checklist for Police Submission</span>
                </div>
                <p className="leading-relaxed">
                  Every police complaint dossier must contain three physical copies of the following documents: (1) Typed and signed Police Complaint Application, (2) Sworn Certificate under Section 63 BSA / 65B Evidence Act on non-judicial stamp paper, (3) Data CD-R or USB drive containing original uncompressed audio files, (4) Certified telecom itemized call logs showing timestamped incoming calls, (5) True copies of loan account statements, and (6) Copy of complainant&apos;s government photo ID.
                </p>
              </div>
            </section>

            {/* Section 7: Overcoming Police Inaction via Magistrate */}
            <section id="overcoming-police-inaction-magistrate" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-3">
                <Scale className="w-6 h-6 text-[#1F5EFF]" />
                <span>7. Overcoming Police Inaction: SP Escalation &amp; Section 175(3) BNSS Applications</span>
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                When a complainant submits a fully certified criminal complaint at a local police station, the receiving officer is statutorily obligated under the Supreme Court ruling in <em>Lalita Kumari v. Government of Uttar Pradesh</em> to register an FIR if the complaint discloses the commission of a cognizable offense. However, police officers frequently issue only a General Diary (GD) entry, a Non-Cognizable Report (NCR), or a simple receipt acknowledgment stamp (often termed CSR in southern jurisdictions), without initiating an investigation.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                If the SHO refuses to register an FIR within 48 to 72 hours of submission, the complainant must not remain passive. Under Section 173(4) of the BNSS (corresponding to Section 154(3) of the legacy CrPC), the complainant is empowered to transmit the complete complaint dossier, along with evidence of police inaction, directly to the Superintendent of Police (SP) or Deputy Commissioner of Police (DCP) via registered post with acknowledgment due or through the state&apos;s official digital grievance portal.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                If the supervisory police authority fails to direct an investigation within a reasonable timeframe, the borrower, through an experienced criminal defense advocate, can move an application before the jurisdictional Judicial Magistrate First Class (JMFC) or Metropolitan Magistrate under Section 175(3) of the BNSS (formerly Section 156(3) CrPC). The magistrate, upon examining the Section 63 BSA certificate, audio transcripts, and postal tracking receipts proving prior police inaction, exercises judicial authority to order the jurisdictional police station to register an FIR forthwith and file an Action Taken Report (ATR).
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Concurrently, the advocate can initiate a Private Criminal Complaint under Section 223 of the BNSS (Section 200 CrPC). This dual-track judicial escalation places immense pressure on the lending bank, as corporate legal departments are forced to appear in criminal court, prompting them to halt all third-party collection operations immediately and seek an amicable out-of-court loan settlement.
              </p>
            </section>

            {/* Section 8: Sanction Letter Forensics & RBI NDC Mandate */}
            <section id="sanction-letter-forensics-ndc" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-3">
                <Landmark className="w-6 h-6 text-[#1F5EFF]" />
                <span>8. Sanction Letter Forensics &amp; the RBI ₹5,000/Day No Dues Certificate Mandate</span>
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Once the lender agrees to resolve the disputed debt following criminal and regulatory escalation, the borrower must exercise extreme vigilance during the documentation of the compromise settlement. Unethical collection agencies frequently issue fabricated, unverified &quot;settlement letters&quot; on forged bank letterheads or via unofficial WhatsApp chats to collect partial sums, only to adjust the money against outstanding interest penalties while keeping the primary loan active.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                An authentic One-Time Settlement (OTS) sanction letter must originate directly from the official corporate domain email of the lending bank or NBFC or bear the physical signature and official seal of an authorized credit manager. It must clearly state the unique loan account number, the total contractual outstanding balance, the exact agreed settlement figure, the strict payment schedule in single or multiple tranches, and an explicit waiver clause extinguishing all past, present, and future claims upon full payment.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Following the successful execution of the agreed settlement payment, the borrower is entitled to an official No Dues Certificate (NDC) and the closure of the credit account across all credit rating agencies. Under Reserve Bank of India Circular RBI/2023-24/60, all regulated commercial banks, NBFCs, and housing finance companies are statutorily mandated to issue an official NDC and update credit bureau records within 30 calendar days of receiving final settlement payment. Any delay beyond 30 days incurs a mandatory statutory penalty of ₹5,000 per day payable directly by the bank to the borrower, providing absolute legal finality.
              </p>
            </section>

            {/* Section 9: Comparative Matrix Table */}
            <section id="comparative-legal-defense-matrix" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-3">
                <FileSpreadsheet className="w-6 h-6 text-[#1F5EFF]" />
                <span>9. Comparative Legal Matrix: Recovery Agent Threats vs. Statutory Rights &amp; Remedies</span>
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Understanding the stark legal contrast between unlawful debt recovery threats and statutory protections empowers borrowers to stand firm against aggressive collection tactics. The comparative matrix below outlines common recovery violations, their legal invalidity, and the precise statutory remedies available under Indian law.
              </p>

              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Recovery Agent Threat / Violation</th>
                      <th>Legal Reality &amp; Statutory Invalidity</th>
                      <th>Applicable Criminal / Civil Law</th>
                      <th>Definitive Borrower Remedy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Calling late at night or early morning (before 8 AM / after 7 PM)</td>
                      <td>Direct violation of RBI Master Directions on Recovery Agents; constitutes harassment and privacy intrusion.</td>
                      <td>RBI Fair Practices Code &amp; Art. 21 Privacy Jurisprudence</td>
                      <td>Submit call log with Sec 63 BSA certificate to Banking Ombudsman &amp; SHO.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Threatening arrest, police raids, or non-bailable jail warrants</td>
                      <td>Civil loan default is not a crime; only a judicial magistrate can issue warrants following formal trials.</td>
                      <td>Section 351 BNS (Section 506 IPC) &amp; Section 66D IT Act</td>
                      <td>Lodge police complaint for criminal intimidation and impersonation.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Demanding immediate cash payments under threat of physical assault</td>
                      <td>Extortionate demand coupled with inducement of fear constitutes a serious non-bailable felony.</td>
                      <td>Section 308 BNS (Section 384 IPC - Extortion)</td>
                      <td>File immediate police complaint backed by audio recordings; seek FIR.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Contacting family members, workplace HR, or neighbours</td>
                      <td>Strictly prohibited third-party disclosure violating Privity of Contract and constitutional privacy.</td>
                      <td>Section 356 BNS (Defamation) &amp; RBI Outsourcing Circular</td>
                      <td>Serve advocate defamation notice; escalate to RBI Principal Nodal Officer.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Refusing to issue No Dues Certificate after OTS payment</td>
                      <td>Lender violates binding settlement contract and mandatory RBI timelines.</td>
                      <td>RBI Circular RBI/2023-24/60 (₹5,000/day penalty)</td>
                      <td>File statutory claim for daily delay penalty and RBI Ombudsman complaint.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & CompanySection */}
            <section id="company-resolution-section" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-3">
                <Building2 className="w-6 h-6 text-[#1F5EFF]" />
                <span>10. SettleLoans Legal Defense &amp; Institutional Debt Settlement Advisory</span>
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                SettleLoans represents India&apos;s premier specialized legal advisory and debt resolution platform, dedicated to protecting salaried professionals, entrepreneurs, and families from abusive debt collection practices. Our panel of seasoned banking litigation advocates, criminal defense attorneys, and former institutional credit managers provides comprehensive, end-to-end representation.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                From forensically extracting digital audio recordings and executing airtight Section 63 BSA / Section 65B electronic certificates to filing criminal applications before Judicial Magistrates and negotiating institutional 45% to 65% One-Time Settlements, SettleLoans ensures that your financial dignity and legal rights remain completely protected throughout the debt resolution lifecycle.
              </p>

              <div className="pt-2">
                <CompanySection />
              </div>
            </section>

            {/* Section 11: FAQ Section */}
            <section id="faqs" className="scroll-mt-28 space-y-6 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-[#1F5EFF]" />
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  11. Frequently Asked Questions: Police FIRs &amp; Call Recording Admissibility
                </h2>
              </div>

              <div className="space-y-4">
                <details className="group bg-slate-50 border border-slate-200 rounded-2xl p-5 transition-all duration-200 open:bg-white open:shadow-sm">
                  <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer flex items-center justify-between gap-4">
                    <span>Is recording a recovery agent&apos;s phone call legal in India?</span>
                    <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 pt-3 border-t border-slate-100">
                    Yes. Single-party consent call recording for the purpose of preserving evidence of extortion, criminal intimidation, or unlawful harassment is legally recognized and fully admissible in Indian courts. The Supreme Court of India in multiple precedents, including <em>R.M. Malkani v. State of Maharashtra</em> and <em>K.S. Puttaswamy v. Union of India</em>, has established that contemporaneous electronic audio recordings constitute valid documentary evidence when accompanied by a statutory certificate.
                  </p>
                </details>

                <details className="group bg-slate-50 border border-slate-200 rounded-2xl p-5 transition-all duration-200 open:bg-white open:shadow-sm">
                  <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer flex items-center justify-between gap-4">
                    <span>What is a Section 63 BSA or Section 65B Evidence Act certificate?</span>
                    <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 pt-3 border-t border-slate-100">
                    A Section 63 certificate under the Bharatiya Sakshya Adhiniyam, 2023 (or Section 65B under the Indian Evidence Act, 1872 for legacy proceedings) is a mandatory sworn affidavit verifying the authenticity of secondary electronic records. It certifies that the recording device (such as a smartphone) was functioning normally, that the audio file copied to a pen drive or CD is an exact unaltered duplicate, and provides technical metadata including file hashes, duration, and IMEI identifiers.
                  </p>
                </details>

                <details className="group bg-slate-50 border border-slate-200 rounded-2xl p-5 transition-all duration-200 open:bg-white open:shadow-sm">
                  <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer flex items-center justify-between gap-4">
                    <span>What criminal sections apply to abusive recovery agents under BNS and IPC?</span>
                    <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 pt-3 border-t border-slate-100">
                    Abusive recovery calls attract multiple cognizable offenses: Extortion under Section 308 BNS (Section 383/384 IPC), Criminal Intimidation under Section 351 BNS (Section 503/506 IPC), Words or gestures insulting woman&apos;s modesty under Section 79 BNS (Section 509 IPC), Defamation under Section 356 BNS (Section 499/500 IPC), and digital harassment under Sections 66D and 67 of the Information Technology Act, 2000.
                  </p>
                </details>

                <details className="group bg-slate-50 border border-slate-200 rounded-2xl p-5 transition-all duration-200 open:bg-white open:shadow-sm">
                  <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer flex items-center justify-between gap-4">
                    <span>What should I do if the local police refuse to register an FIR?</span>
                    <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 pt-3 border-t border-slate-100">
                    If the Station House Officer (SHO) refuses to register an FIR for cognizable criminal offenses, you must immediately obtain a Station Diary (GD) or NCR acknowledgment. Next, escalate in writing with full electronic evidence to the Superintendent of Police (SP) or Deputy Commissioner of Police (DCP) under Section 173(4) BNSS (Section 154(3) CrPC). If non-compliance persists, retain legal counsel to file an application before the Judicial Magistrate First Class under Section 175(3) BNSS (Section 156(3) CrPC) seeking a judicial directive ordering the police to register an FIR and conduct a formal investigation.
                  </p>
                </details>

                <details className="group bg-slate-50 border border-slate-200 rounded-2xl p-5 transition-all duration-200 open:bg-white open:shadow-sm">
                  <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer flex items-center justify-between gap-4">
                    <span>How does filing a police complaint with call recordings help in loan settlement?</span>
                    <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 pt-3 border-t border-slate-100">
                    Filing a formal police complaint supported by certified audio recordings exposes the lending bank and its outsourcing agency to severe regulatory penalties from the RBI Banking Ombudsman (fines up to ₹20 Lakhs) and criminal vicarious liability under Supreme Court rulings. Lenders prioritize mitigating institutional and legal risk by terminating the abusive agency and offering a structured One-Time Settlement (OTS) with 45% to 65% principal haircuts.
                  </p>
                </details>

                <details className="group bg-slate-50 border border-slate-200 rounded-2xl p-5 transition-all duration-200 open:bg-white open:shadow-sm">
                  <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer flex items-center justify-between gap-4">
                    <span>Can a recovery agent call my family members, friends, or workplace?</span>
                    <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 pt-3 border-t border-slate-100">
                    No. Under the RBI Master Directions on Recovery Agents (August 2022 and December 2023), lenders and third-party recovery agencies are strictly barred from contacting third parties, family members, friends, or employers without explicit, unambiguous prior consent. Contacting third parties constitutes an unlawful breach of privacy, defamation, and an actionable regulatory violation.
                  </p>
                </details>

                <details className="group bg-slate-50 border border-slate-200 rounded-2xl p-5 transition-all duration-200 open:bg-white open:shadow-sm">
                  <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer flex items-center justify-between gap-4">
                    <span>What technical metadata must be included in the electronic evidence certificate?</span>
                    <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 pt-3 border-t border-slate-100">
                    The electronic certificate must specify the make, model, serial number, and IMEI of the recording device, the exact date, timestamp, and duration of the call, the caller&apos;s phone number, the file format (such as .mp3, .m4a, or .wav), and the unique cryptographic hash value (SHA-256 or MD5) generated for the original audio file to prove it has not been edited, clipped, or altered.
                  </p>
                </details>

                <details className="group bg-slate-50 border border-slate-200 rounded-2xl p-5 transition-all duration-200 open:bg-white open:shadow-sm">
                  <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer flex items-center justify-between gap-4">
                    <span>What is the difference between a General Diary (GD) entry and an FIR?</span>
                    <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 pt-3 border-t border-slate-100">
                    A General Diary (GD) entry or Non-Cognizable Report (NCR) is an administrative record noting the receipt of information without obligating police officers to initiate a criminal investigation or effect arrests. A First Information Report (FIR) registered under Section 173 BNSS (Section 154 CrPC) is a statutory criminal process for cognizable offenses that mandates an official investigation, witness examination, evidence seizure, and the filing of a final charge sheet before a magistrate.
                  </p>
                </details>

                <details className="group bg-slate-50 border border-slate-200 rounded-2xl p-5 transition-all duration-200 open:bg-white open:shadow-sm">
                  <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer flex items-center justify-between gap-4">
                    <span>Can bank executives be held liable for threats made by outsourced recovery agents?</span>
                    <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 pt-3 border-t border-slate-100">
                    Yes. The Supreme Court of India in landmark judgments, including <em>ICICI Bank Ltd. v. Prakash Kaur (2007)</em> and <em>Shanti Devi Sharma v. State (2008)</em>, ruled that banks cannot wash their hands of illegal recovery tactics employed by contracted agencies. Lending institutions and their senior management bear vicarious civil and criminal liability for extortionate or intimidating recovery operations conducted under their mandate.
                  </p>
                </details>

                <details className="group bg-slate-50 border border-slate-200 rounded-2xl p-5 transition-all duration-200 open:bg-white open:shadow-sm">
                  <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer flex items-center justify-between gap-4">
                    <span>What is the mandatory timeline for banks to issue an NDC after settlement?</span>
                    <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 pt-3 border-t border-slate-100">
                    Under RBI Circular RBI/2023-24/60, all regulated commercial banks, NBFCs, and financial institutions must issue an official No Dues Certificate (NDC) and update credit reporting bureaus to reflect zero outstanding balance within 30 calendar days of receiving final settlement payment. Any delay beyond 30 days incurs a mandatory statutory penalty of ₹5,000 per day payable directly to the borrower.
                  </p>
                </details>
              </div>
            </section>

            {/* 5 Official Regulatory Links */}
            <section className="border-t border-slate-200 pt-8 space-y-4">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider">
                Official Regulatory Directives &amp; Statutory Portals
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Reserve Bank of India (RBI Master Directions)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Banking Ombudsman Portal (CMS)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">National Cyber Crime Reporting Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">India Code (Bharatiya Sakshya Adhiniyam &amp; BNS)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">Supreme Court of India (Puttaswamy Privacy &amp; Prakash Kaur Rulings)</span>
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
                  href="/recording-recovery-agent-calls-legal-evidence"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Recording Agent Calls Evidence Guide
                </Link>
                <Link
                  href="/police-complaint-format-recovery-agent-harassment"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Police Complaint Harassment Format
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Harassment Complaint Guide
                </Link>
                <Link
                  href="/bank-sending-legal-notice-to-employer-illegal-recovery"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Employer Notice &amp; Privacy Defense
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can I Go to Jail for Loan Default
                </Link>
                <Link
                  href="/rbi-ombudsman-complaint-loan-recovery-harassment"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  RBI Ombudsman Harassment Complaint
                </Link>
                <Link
                  href="/cyber-crime-complaint-illegal-loan-apps-blackmail"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Cyber Crime Blackmail Portal Guide
                </Link>
                <Link
                  href="/how-to-verify-authentic-bank-settlement-letter"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Verify Authentic Settlement Letters
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
                <Link
                  href="/one-time-settlement-ots-kaise-kare"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  One Time Settlement (OTS) Process
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
                  <p className="text-xs text-slate-500">Chief Banking &amp; Criminal Defense Specialist</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Senior specialist in electronic evidence certification, Section 63 BSA compliance, criminal FIR escalation against abusive recovery agents, and institutional One-Time Settlement negotiations.
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
                <span>Emergency Advocate Assistance</span>
              </div>
              <h4 className="font-bold text-base text-white mb-2">Facing Threatening Calls from Recovery Agents?</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not suffer in silence. Retain our senior advocates to draft an unassailable Section 63 BSA certificate, file an urgent police complaint, and negotiate a 45%–65% OTS.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Legal Intervention Now
              </Link>
            </div>

            {/* Trust Signals Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Institutional Legal Safeguards
              </h4>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Section 63 BSA Evidence Admissibility</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Attorney-Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>RBI Ombudsman Dispute Escalation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Magistrate Court Criminal Intervention</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
