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
  title: 'File Police FIR for Recovery Harassment | SettleLoans',
  description: 'How to file a police FIR using recovery agent call recordings. Ensure electronic evidence compliance under Section 63 BSA with SettleLoans.',
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
    canonical: 'https://www.settleloans.in/how-to-file-police-fir-with-recovery-agent-call-recording',
  },
  openGraph: {
    title: 'How to File Police FIR with Recovery Agent Call Recording: Section 63 BSA / 65B Guide',
    description: 'Convert recorded audio evidence into decisive legal action. Learn how to draft a Section 63 BSA certificate, register a police FIR against abusive recovery agents, and enforce RBI compliance.',
    url: 'https://www.settleloans.in/how-to-file-police-fir-with-recovery-agent-call-recording',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/how-to-file-police-fir-with-recovery-agent-call-recording.jpg',
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
    images: ['https://www.settleloans.in/images/infographics/how-to-file-police-fir-with-recovery-agent-call-recording.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/how-to-file-police-fir-with-recovery-agent-call-recording#webpage",
      "url": "https://www.settleloans.in/how-to-file-police-fir-with-recovery-agent-call-recording",
      "name": "How to File Police FIR with Recovery Agent Call Recording: Section 63 BSA / 65B Guide",
      "description": "Comprehensive legal manual on converting recorded phone calls into admissible electronic criminal evidence under Section 63 BSA and Section 65B Evidence Act to file police FIRs against abusive recovery agents.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/how-to-file-police-fir-with-recovery-agent-call-recording#breadcrumb"
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
      "@id": "https://www.settleloans.in/how-to-file-police-fir-with-recovery-agent-call-recording#breadcrumb",
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
          "name": "Police Complaint with Call Recording Guide",
          "item": "https://www.settleloans.in/how-to-file-police-fir-with-recovery-agent-call-recording"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/how-to-file-police-fir-with-recovery-agent-call-recording#article",
      "headline": "How to File Police FIR with Recovery Agent Call Recording: Section 63 BSA & Section 65B Evidence Act Certificate Guide",
      "description": "Step-by-step legal blueprint explaining how borrowers can transform recorded phone threats from loan recovery agents into legally admissible criminal evidence, draft mandatory electronic certificates under Section 63 of Bharatiya Sakshya Adhiniyam (BSA) / Section 65B of Indian Evidence Act, file police FIRs under BNS/IPC, and negotiate formal debt settlements.",
      "image": "https://www.settleloans.in/images/infographics/how-to-file-police-fir-with-recovery-agent-call-recording.jpg",
      "datePublished": "2026-08-31T10:00:00+05:30",
      "dateModified": "2026-08-31T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/how-to-file-police-fir-with-recovery-agent-call-recording#webpage"
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
      "@id": "https://www.settleloans.in/how-to-file-police-fir-with-recovery-agent-call-recording#service",
      "name": "SettleLoans - Criminal Defense & Debt Settlement Advisory",
      "description": "Specialized legal representation for borrowers facing unlawful debt collection harassment, criminal intimidation, extortionate calls, and statutory non-compliance by bank recovery agencies.",
      "url": "https://www.settleloans.in/how-to-file-police-fir-with-recovery-agent-call-recording",
      "image": "https://www.settleloans.in/images/infographics/how-to-file-police-fir-with-recovery-agent-call-recording.jpg",
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
            "name": "Rajeshwar Rao"
          },
          "datePublished": "2026-07-18",
          "reviewBody": "A collection agent called 40 times in one day. He made abusive threats against my family. The local police called it a civil matter. SettleLoans drafted a Section 63 BSA certificate. They added SHA-256 hash proof. They escalated the case to the DCP. Police filed an FIR under Sections 308 and 351 BNS. The bank then settled my cards for a 60% waiver.",
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
          "reviewBody": "Recovery agents called my mother with threats. SettleLoans helped copy audio files to a pen drive. They drafted a Section 65B evidence affidavit. Police registered an FIR right away. The bank removed the rogue agency. They gave me a clean No Dues Certificate.",
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
          "reviewBody": "An agent used abusive words late at night. SettleLoans filed a Cyber Crime complaint. They filed a Section 175(3) BNSS petition before the magistrate. The court ordered a police probe. The lender agreed to a 50% One-Time Settlement.",
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
          "reviewBody": "I faced threats from recovery agents. SettleLoans showed me how to save call records. They added hash values under BNS rules. All harassment stopped in 24 hours.",
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
      "@id": "https://www.settleloans.in/how-to-file-police-fir-with-recovery-agent-call-recording#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is recording a recovery agent's call legal in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Recording calls to capture criminal threats is legal in India. Supreme Court rulings confirm this rule. See R.M. Malkani and K.S. Puttaswamy cases. Audio records are valid proof in court. A legal certificate makes them valid."
          }
        },
        {
          "@type": "Question",
          "name": "What is a Section 63 BSA or Section 65B Evidence Act certificate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Section 63 BSA certificate is a sworn legal affidavit. Old cases use Section 65B Evidence Act. It confirms the phone worked normally. It proves the audio copy is exact. It includes device details, call times, and SHA-256 hash values."
          }
        },
        {
          "@type": "Question",
          "name": "What criminal sections apply to abusive recovery agents under Bharatiya Nyaya Sanhita (BNS) and IPC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Abusive calls violate multiple laws. Section 308 BNS covers extortion. Section 383/384 IPC applies too. Section 351 BNS covers threats. Section 503/506 IPC applies too. Section 79 BNS covers insults to women. Section 509 IPC applies too. Section 356 BNS covers defamation. Sections 66D and 67 IT Act apply too."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if the local police refuse to register an FIR and claim it is a civil loan dispute?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Demand a General Diary (GD) entry first. Then, write to the SP or DCP under Section 173(4) BNSS. If inaction continues, hire an advocate. File a plea before the Judicial Magistrate under Section 175(3) BNSS. The court will order an FIR."
          }
        },
        {
          "@type": "Question",
          "name": "How does filing a police complaint with call recordings help in loan settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A police complaint creates legal leverage. It exposes lenders to ₹20 Lakh RBI Ombudsman fines. The Supreme Court holds banks liable for agent crimes. To avoid court trials, banks recall agencies. They approve a 45% to 65% OTS debt waiver."
          }
        },
        {
          "@type": "Question",
          "name": "Can a recovery agent call my family members, friends, or workplace?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Under RBI Master Directions, agents cannot contact third parties. They cannot call family, friends, or employers. Doing so breaches privacy laws. It amounts to illegal defamation."
          }
        },
        {
          "@type": "Question",
          "name": "What technical metadata must be included in the electronic evidence certificate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The certificate must list phone brand, model, and IMEI. It must record date, time, caller number, and call length. It must name the audio format like .mp3. It must include a SHA-256 hash value to prove zero tampering."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between a General Diary (GD) entry and an FIR?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A General Diary (GD) entry is only a desk record. It does not start an investigation. An FIR under Section 173 BNSS starts a formal criminal case. Police must investigate, seize proof, and file a court charge sheet."
          }
        },
        {
          "@type": "Question",
          "name": "Can bank executives be held liable for threats made by their outsourced recovery agents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Supreme Court rulings confirm this rule. See Prakash Kaur and Shanti Devi Sharma cases. Banks cannot blame third-party agents. Lenders face full legal blame for recovery crimes."
          }
        },
        {
          "@type": "Question",
          "name": "What is the mandatory timeline for banks to issue a No Dues Certificate after loan settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, lenders must issue an NDC. The deadline is 30 days. They must update credit bureaus to ₹0 balance. Delays beyond 30 days trigger a penalty. The bank must pay ₹5,000 per day to the borrower."
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
            <span>Criminal Evidence &amp; Police FIR Protocol. Electronic Certification Guide.</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Filing Police FIR with Recovery Call Recordings</h1>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-3 mb-5 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Written by <Link href="/authors/ashish-jhangra" className="font-bold underline hover:text-white transition-colors">Ashish Jhangra</Link>.</span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Updated: August 2026.</span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>BSA &amp; RBI Master Direction Compliant.</span>
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
                Recorded audio threats prove criminal acts. Police cannot dismiss them. A Section 63 BSA certificate validates recordings. Legacy cases use Section 65B Evidence Act. Unlawful threats bring BNS and IPC charges. This forces lenders to halt harassment. Lenders then approve a 45% to 65% OTS.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways. Converting Audio Recordings into Legal Protection.</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Admissibility of Single-Party Recordings.</strong> Audio recordings of threat calls are valid proof. Supreme Court rulings confirm this rule. A statutory certificate makes them valid in court.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory Electronic Certification.</strong> Section 63 BSA requires a sworn affidavit. Legacy cases use Section 65B Evidence Act. It verifies device health. It confirms SHA-256 file hashes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Cognizable Criminal Offenses.</strong> Abusive calls are crimes. Extortion falls under Section 308 BNS / 384 IPC. Criminal threats fall under Section 351 BNS / 506 IPC.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Judicial Escalation Mechanisms.</strong> If police refuse an FIR, act fast. Escalate to the SP under Section 173(4) BNSS. Or petition the magistrate under Section 175(3) BNSS.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Strategic Leverage for Debt Resolution.</strong> Criminal proof exposes bank violations. It forces bank leaders to stop agencies. Banks then grant a 45% to 65% One-Time Settlement.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Statutory Reality & Evidence Threshold */}
            <section id="evidence-threshold-call-recordings" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-3">
                <Mic className="w-6 h-6 text-[#1F5EFF]" />
                <span>1. Recovery Harassment &amp; Audio Evidence Law</span>
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Borrowers face verbal abuse from recovery agents. Agents make illegal threats daily. Borrowers record these calls on phones. They take raw audio to local police. But police often refuse an FIR. Officers call it a civil debt dispute.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Why does this happen? Raw audio lacks legal certification. Under evidence law, audio is secondary proof. It needs hash checks. It needs time stamps. It requires a sworn legal certificate. Without it, police dismiss the case.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                The Supreme Court protects call recordings. In <em>R.M. Malkani v. State of Maharashtra</em>, the court allowed phone recordings as key evidence. The voice must be clear. In <em>K.S. Puttaswamy v. Union of India</em>, the court upheld recording threats. Capturing proof of crimes is fully legal.
              </p>

              <div className="bg-amber-50/70 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-1">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Crucial Evidentiary Rule.</span>
                </div>
                <p className="text-xs text-amber-800 leading-relaxed">
                  Never edit or trim your audio file. Do not use audio filter apps. Any edit alters the file hash. Defense lawyers will claim file tampering.
                </p>
              </div>
            </section>

            {/* Section 2: Section 63 BSA & 65B Electronic Certification */}
            <section id="electronic-certificate-drafting" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-3">
                <FileCheck className="w-6 h-6 text-[#1F5EFF]" />
                <span>2. Section 63 BSA &amp; Section 65B Evidence Act</span>
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                The Bharatiya Sakshya Adhiniyam, 2023 (BSA) replaced the Evidence Act. Section 65B governed digital proof earlier. Today, Section 63 BSA governs call audio files. It sets clear rules for audio files. It applies to call logs too.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                To make call recordings valid evidence, draft a Section 63 BSA certificate. Old cases use Section 65B Evidence Act. This certificate is a sworn affidavit. It proves device integrity. It proves chain of custody. It confirms zero software errors occurred.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                A valid Section 63 BSA certificate needs four key points. First, state device details like make, model, and IMEI. Second, confirm you held lawful control of the phone. Third, describe how you copied files to a CD or USB drive. Fourth, list the SHA-256 or MD5 hash value. This proves the file is an exact copy.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <HardDrive className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Key Parts of an Evidence Certificate.</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <strong className="text-slate-900 block mb-1">1. Hardware &amp; OS Identifiers.</strong>
                    List make, model, IMEI, and phone OS.
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <strong className="text-slate-900 block mb-1">2. Operational Integrity.</strong>
                    Affirm the recording app worked normally.
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <strong className="text-slate-900 block mb-1">3. Bitstream Hash Verification.</strong>
                    Calculate SHA-256 or MD5 hashes for all files.
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <strong className="text-slate-900 block mb-1">4. Verifiable Chain of Custody.</strong>
                    State the exact timeline of recording and storage.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: BNS & IPC Substantive Criminal Offenses */}
            <section id="criminal-offenses-bns-ipc" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-3">
                <Gavel className="w-6 h-6 text-[#1F5EFF]" />
                <span>3. Substantive Criminal Law</span>
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Recovery agents claim loan default is only a civil dispute. But Indian law draws a clear line. Unpaid EMIs are a civil contract breach. Yet verbal abuse and physical threats are serious crimes. The Bharatiya Nyaya Sanhita, 2023 (BNS) and IPC punish these acts.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                A strong police complaint maps recorded threats to specific laws. Threatening home raids or assault is extortion. Section 308 BNS and Section 383/384 IPC apply. Inducing fear for money is a serious crime.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Threats to harm your job violate the law. Contacting your boss is illegal too. Section 351 BNS covers criminal threats. Section 503/506 IPC applies too. Section 356 BNS covers defamation. Section 499/500 IPC applies too. Abusing female borrowers is a crime. Section 79 BNS and Section 509 IPC apply.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                When agents use fake numbers or pose as police, cyber laws apply. Sections 66C and 66D of the IT Act punish cyber fraud. They punish impersonation. These charges carry jail terms.
              </p>
            </section>

            {/* Section 4: Bank NPA Accounting & NPV Equation */}
            <section id="npa-accounting-npv-formula" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-3">
                <Calculator className="w-6 h-6 text-[#1F5EFF]" />
                <span>4. NPA Accounting Realities, Bank Provisioning</span>
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Filing a police complaint creates immense settlement leverage. Banks follow strict accounting rules. Under RBI IRACP norms, 90-day defaults become bad loans (NPAs).
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                NPA status forces banks to lock cash reserves. Provisions range from 15% to 100% of the loan. This cuts bank profits. It hurts capital ratios. Credit committees assess recovery using Net Present Value (NPV) math.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                A certified police complaint shifts the bank&apos;s risk model. Citing <em>Prakash Kaur (2007)</em> and <em>Shanti Devi Sharma (2008)</em> creates full legal blame. Banks face RBI Ombudsman fines up to ₹20 Lakhs. Bank officers risk court summons. To cut losses, credit committees approve a 45% to 65% OTS debt waiver.
              </p>

              {/* NPV Settlement Formula Container */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Bank Debt Risk Math.</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Settlement = ∑ [ C_t / (1 + r)^t ] - Police_Litigation_Penalty - Bank_Risk_Cost
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Here C_t is expected recovery cash flow. The letter r is cost of capital. Deductions cover court trials, RBI Ombudsman fines, and locked reserves.
                </p>
              </div>
            </section>

            {/* Section 5: Visual Infographic Banner */}
            <section id="visual-roadmap-fir-action" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-3">
                <BookOpen className="w-6 h-6 text-[#1F5EFF]" />
                <span>5. Process Roadmap</span>
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                The roadmap below shows our 4-stage plan. It turns recorded threat calls into an FIR. It helps you secure debt relief. Follow legal proof rules to stop harassment.
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
                  <span><strong>Figure 1.1.</strong> 4-Step FIR Action Plan.</span>
                  <span className="text-[#1F5EFF] font-semibold">SettleLoans Regulatory Protocol</span>
                </div>
              </div>
            </section>

            {/* Section 6: Drafting the Police Complaint Application */}
            <section id="drafting-police-complaint-step-by-step" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-3">
                <FileText className="w-6 h-6 text-[#1F5EFF]" />
                <span>6. Step-by-Step Procedure</span>
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                A simple grievance letter rarely works. Station House Officers (SHOs) ignore casual complaints. You must draft a formal petition under Section 173 BNSS. Present chronological facts. Cite statutory laws. Attach certified electronic proof.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                First, state police station jurisdiction. Give your home address. State where you took calls. Name the accused clearly. Identify recovery agents and agencies. Name the lending bank as vicariously liable.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Next, build a chronological incident table. List call dates, times, caller numbers, and call durations. Add exact quotes of verbal abuse. Highlight extortion threats and home raid threats.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Cite RBI Master Directions on Recovery Agents. Note that calls before 8 AM or after 7 PM are banned. Cite Section 308 BNS for extortion. Cite Section 351 BNS for criminal intimidation. Add Section 79 BNS for insults to women. Pray for an FIR, Call Detail Records (CDR) seizure, and police protection.
              </p>

              <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-5 space-y-2 text-xs sm:text-sm text-slate-700">
                <div className="font-bold text-blue-950 flex items-center gap-2 text-sm uppercase tracking-wide">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Checklist for Police File.</span>
                </div>
                <p className="leading-relaxed">
                  Every police complaint file needs key papers: (1) Signed Police Complaint Application. (2) Sworn Certificate under Section 63 BSA / 65B Evidence Act on stamp paper. (3) CD or USB drive with audio files. (4) Full phone call logs. (5) Loan statements. (6) Photo ID copy.
                </p>
              </div>
            </section>

            {/* Section 7: Overcoming Police Inaction via Magistrate */}
            <section id="overcoming-police-inaction-magistrate" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-3">
                <Scale className="w-6 h-6 text-[#1F5EFF]" />
                <span>7. Overcoming Police Inaction</span>
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Police must register an FIR for cognizable crimes. The <em>Lalita Kumari v. Govt of UP</em> ruling mandates this. Yet police often give only a General Diary (GD) entry. Or they give a Non-Cognizable Report (NCR).
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Do not wait if police refuse an FIR. After 48 hours, escalate to senior police. Send your file to the SP under Section 173(4) BNSS. Section 154(3) CrPC applies to older cases. Use registered post. Or use the cyber portal.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                If the SP fails to act, take court action. Hire a defense advocate. File a plea before the Judicial Magistrate under Section 175(3) BNSS. Section 156(3) CrPC applies to older cases. The magistrate reviews the Section 63 BSA certificate. The court orders an FIR right away.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Your advocate can file a complaint under Section 223 BNSS. Section 200 CrPC applies to older cases. Bank leaders must appear in court. Lenders quickly halt agents. They offer an OTS settlement.
              </p>
            </section>

            {/* Section 8: Sanction Letter Forensics & RBI NDC Mandate */}
            <section id="sanction-letter-forensics-ndc" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-3">
                <Landmark className="w-6 h-6 text-[#1F5EFF]" />
                <span>8. Sanction Letter Forensics</span>
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Be careful when finalizing a debt settlement. Fraudulent agents issue fake settlement letters. They collect tokens and pocket cash. The debt remains open on bank records.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                A genuine OTS settlement letter comes from the official bank email domain. Or it carries an authorized manager signature and seal. It states your name, PAN, and loan account number. It specifies the exact settlement sum and due dates. It includes a full waiver clause.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Under <strong>RBI Circular RBI/2023-24/60</strong>, lenders must issue an NDC. The deadline is 30 days. They must update all credit bureaus to zero balance. Any delay beyond 30 days incurs a mandatory penalty. The bank must pay <strong>₹5,000 per day</strong> to you.
              </p>
            </section>

            {/* Section 9: Comparative Matrix Table */}
            <section id="comparative-legal-defense-matrix" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-3">
                <FileSpreadsheet className="w-6 h-6 text-[#1F5EFF]" />
                <span>9. Illegal Recovery Violations vs Legal Remedies Matrix</span>
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Compare illegal recovery threats against statutory protections under Indian law:
              </p>

              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Recovery Agent Threat / Violation.</th>
                      <th>Legal Reality &amp; Statutory Invalidity.</th>
                      <th>Applicable Criminal / Civil Law.</th>
                      <th>Definitive Borrower Remedy.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Calling before 8 AM or after 7 PM.</td>
                      <td>Breaches RBI Master Directions and privacy rights.</td>
                      <td>RBI Fair Practices Code and Article 21 privacy rules.</td>
                      <td>Submit call logs with Section 63 BSA certificate to RBI and police.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Threatening arrest or warrants.</td>
                      <td>Loan default is civil. Only magistrates issue warrants.</td>
                      <td>Section 351 BNS (Section 506 IPC) and Section 66D IT Act.</td>
                      <td>File a police complaint for intimidation and impersonation.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Demanding cash under threats.</td>
                      <td>Extortion with threat of harm is a crime.</td>
                      <td>Section 308 BNS (Section 384 IPC).</td>
                      <td>File a police FIR backed by audio recordings.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Contacting family, friends, or HR.</td>
                      <td>Third-party contact violates privacy rules.</td>
                      <td>Section 356 BNS defamation and RBI Outsourcing norms.</td>
                      <td>Send legal notice. Report to RBI Principal Nodal Officer.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Refusing NDC after settlement.</td>
                      <td>Breaches settlement terms and RBI timelines.</td>
                      <td>RBI Circular RBI/2023-24/60 with ₹5,000 daily penalty.</td>
                      <td>Claim daily delay penalty. File RBI Ombudsman complaint.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & CompanySection */}
            <section id="company-resolution-section" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-3">
                <Building2 className="w-6 h-6 text-[#1F5EFF]" />
                <span>10. SettleLoans Recovery FIR Legal Support</span>
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                SettleLoans is India&apos;s leading debt harassment defense platform. We protect professionals and families from abusive collection agencies. Our team includes banking advocates and defense attorneys.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                We extract audio proof. We draft Section 63 BSA certificates. Old cases use Section 65B affidavits. We file petitions before Judicial Magistrates. We negotiate 45% to 65% OTS debt waivers. SettleLoans protects your dignity and finances.
              </p>

              <div className="pt-2">
                <CompanySection />
              </div>
            </section>

            {/* Section 11: FAQ Section */}
            <section id="faqs" className="scroll-mt-28 space-y-6 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-[#1F5EFF]" />
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">11. FAQs: Police FIRs &amp; Call Recording Admissibility</h2>
              </div>

              <div className="space-y-4">
                <details className="group bg-slate-50 border border-slate-200 rounded-2xl p-5 transition-all duration-200 open:bg-white open:shadow-sm">
                  <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer flex items-center justify-between gap-4">
                    <span>Is recording a recovery agent&apos;s phone call legal in India?</span>
                    <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 pt-3 border-t border-slate-100">
                    Yes. Recording calls to capture criminal threats is legal in India. Supreme Court rulings confirm this rule. See <em>R.M. Malkani</em> and <em>K.S. Puttaswamy</em> cases. Audio records are valid proof in court. A legal certificate makes them valid.
                  </p>
                </details>

                <details className="group bg-slate-50 border border-slate-200 rounded-2xl p-5 transition-all duration-200 open:bg-white open:shadow-sm">
                  <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer flex items-center justify-between gap-4">
                    <span>What is a Section 63 BSA or Section 65B Evidence Act certificate?</span>
                    <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 pt-3 border-t border-slate-100">
                    A Section 63 BSA certificate is a sworn legal affidavit. Old cases use Section 65B Evidence Act. It confirms the phone worked normally. It proves the audio copy is exact. It includes device details, call times, and SHA-256 hash values.
                  </p>
                </details>

                <details className="group bg-slate-50 border border-slate-200 rounded-2xl p-5 transition-all duration-200 open:bg-white open:shadow-sm">
                  <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer flex items-center justify-between gap-4">
                    <span>What criminal sections apply to abusive recovery agents under BNS and IPC?</span>
                    <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 pt-3 border-t border-slate-100">
                    Abusive calls violate multiple laws. Section 308 BNS covers extortion. Section 383/384 IPC applies too. Section 351 BNS covers threats. Section 503/506 IPC applies too. Section 79 BNS covers insults to women. Section 509 IPC applies too. Section 356 BNS covers defamation. Sections 66D and 67 IT Act apply too.
                  </p>
                </details>

                <details className="group bg-slate-50 border border-slate-200 rounded-2xl p-5 transition-all duration-200 open:bg-white open:shadow-sm">
                  <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer flex items-center justify-between gap-4">
                    <span>What should I do if the local police refuse to register an FIR?</span>
                    <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 pt-3 border-t border-slate-100">
                    Demand a General Diary (GD) entry first. Then, write to the SP or DCP under Section 173(4) BNSS. If inaction continues, hire an advocate. File a plea before the Judicial Magistrate under Section 175(3) BNSS. The court will order an FIR.
                  </p>
                </details>

                <details className="group bg-slate-50 border border-slate-200 rounded-2xl p-5 transition-all duration-200 open:bg-white open:shadow-sm">
                  <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer flex items-center justify-between gap-4">
                    <span>How does filing a police complaint with call recordings help in loan settlement?</span>
                    <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 pt-3 border-t border-slate-100">
                    A police complaint creates legal leverage. It exposes lenders to ₹20 Lakh RBI Ombudsman fines. The Supreme Court holds banks liable for agent crimes. To avoid court trials, banks recall agencies. They approve a 45% to 65% OTS debt waiver.
                  </p>
                </details>

                <details className="group bg-slate-50 border border-slate-200 rounded-2xl p-5 transition-all duration-200 open:bg-white open:shadow-sm">
                  <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer flex items-center justify-between gap-4">
                    <span>Can a recovery agent call my family members, friends, or workplace?</span>
                    <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 pt-3 border-t border-slate-100">
                    No. Under RBI Master Directions, agents cannot contact third parties. They cannot call family, friends, or employers. Doing so breaches privacy laws. It amounts to illegal defamation.
                  </p>
                </details>

                <details className="group bg-slate-50 border border-slate-200 rounded-2xl p-5 transition-all duration-200 open:bg-white open:shadow-sm">
                  <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer flex items-center justify-between gap-4">
                    <span>What technical metadata must be included in the electronic evidence certificate?</span>
                    <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 pt-3 border-t border-slate-100">
                    The certificate must list phone brand, model, and IMEI. It must record date, time, caller number, and call length. It must name the audio format like .mp3. It must include a SHA-256 hash value to prove zero tampering.
                  </p>
                </details>

                <details className="group bg-slate-50 border border-slate-200 rounded-2xl p-5 transition-all duration-200 open:bg-white open:shadow-sm">
                  <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer flex items-center justify-between gap-4">
                    <span>What is the difference between a General Diary (GD) entry and an FIR?</span>
                    <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 pt-3 border-t border-slate-100">
                    A General Diary (GD) entry is only a desk record. It does not start an investigation. An FIR under Section 173 BNSS starts a formal criminal case. Police must investigate, seize proof, and file a court charge sheet.
                  </p>
                </details>

                <details className="group bg-slate-50 border border-slate-200 rounded-2xl p-5 transition-all duration-200 open:bg-white open:shadow-sm">
                  <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer flex items-center justify-between gap-4">
                    <span>Can bank executives be held liable for threats made by outsourced recovery agents?</span>
                    <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 pt-3 border-t border-slate-100">
                    Yes. Supreme Court rulings confirm this rule. See <em>Prakash Kaur</em> and <em>Shanti Devi Sharma</em> cases. Banks cannot blame third-party agents. Lenders face full legal blame for recovery crimes.
                  </p>
                </details>

                <details className="group bg-slate-50 border border-slate-200 rounded-2xl p-5 transition-all duration-200 open:bg-white open:shadow-sm">
                  <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer flex items-center justify-between gap-4">
                    <span>What is the mandatory timeline for banks to issue an NDC after settlement?</span>
                    <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 pt-3 border-t border-slate-100">
                    Under RBI Circular RBI/2023-24/60, lenders must issue an NDC. The deadline is 30 days. They must update credit bureaus to ₹0 balance. Delays beyond 30 days trigger a penalty. The bank must pay ₹5,000 per day to the borrower.
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
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Defense Specialist</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Specialist in digital proof. Expert in Section 63 BSA rules. Experienced in FIR escalation against abusive agents. Proven record in debt settlements.
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
              <div className="font-bold text-base text-white mb-2">Facing Threatening Calls from Recovery Agents?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Stop threatening calls now. Retain our advocates to draft a Section 63 BSA certificate. File a police complaint. Secure a 45% to 65% OTS.
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
              <div className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Key Legal Safeguards
              </div>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Section 63 BSA Audio Proof</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Full Legal Privacy</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>RBI Ombudsman Defense</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Magistrate Court Relief</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
